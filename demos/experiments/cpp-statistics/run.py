#!/usr/bin/env python3
"""Reproduce the bounded C++ port experiment without editing the Demo repo."""

import argparse
from array import array
import csv
from datetime import datetime, timezone
import hashlib
import importlib
import json
import os
from pathlib import Path
import random
import secrets
import statistics
import subprocess
import sys
import tempfile

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[2]
DEMO = ROOT.parent / "ai-dev-training-demo"
VARIANTS = ["copied_buffer", "row_reductions", "fused_pass"]
FLAGS = ["-std=c++20", "-O3", "-DNDEBUG", "-fno-lto", "-Wall", "-Wextra", "-Werror", "-pedantic"]
EXPECTED_MAIN_HASH = "26df8e7b296672840d97cf5d9273e6660003afd680c62c7751d382c2d067fec9"


def sha(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def command(args, **kwargs):
    return subprocess.check_output(args, text=True, **kwargs).strip()


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--seed", type=int, help="reuse the retained seed for identical holdouts")
    args = parser.parse_args()
    output = args.output.resolve()
    output.mkdir(parents=True, exist_ok=False)
    seed = args.seed if args.seed is not None else secrets.randbits(64)
    rng = random.Random(seed)
    source_names = ["statistics.hpp", "statistics.cpp", "benchmark.cpp", "tests.cpp", "run.py"]
    source_hashes = {name: sha(HERE / name) for name in source_names}
    demo_before = command(["git", "status", "--porcelain", "--untracked-files=all"], cwd=DEMO)
    environment = {
        "experiment_id": "EXP-CPP-STATS-001", "client_date": "2026-11-05",
        "recorded_at_utc": datetime.now(timezone.utc).isoformat(),
        "training_head": command(["git", "rev-parse", "HEAD"], cwd=ROOT),
        "demo_head": command(["git", "rev-parse", "HEAD"], cwd=DEMO),
        "compiler": command(["clang++", "--version"]), "flags": FLAGS,
        "os": command(["sw_vers"]), "architecture": command(["uname", "-m"]),
        "hardware_model": command(["sysctl", "-n", "hw.model"]),
        "cpu": command(["sysctl", "-n", "machdep.cpu.brand_string"]),
        "logical_cpus": command(["sysctl", "-n", "hw.logicalcpu"]),
        "python": sys.version, "holdout_seed": seed,
        "source_sha256": source_hashes,
        "oracle_sha256": {name: sha(DEMO / name) for name in [
            "src/graypipe/statistics.py", "src/graypipe/loader.py", "benchmarks/benchmark_statistics.py"]},
        "timing": "steady_clock; separate translation units; no LTO; common batch count; 21 rotating rounds x3 fresh processes per workload",
        "allocation_scope": "PMR temporary pixel-buffer requests only; not input storage, stack, all heap or RSS",
        "affinity": "not pinned; OS scheduling and thermal state uncontrolled",
        "windows_msvc": "UNVERIFIED", "new_skill_trial": False,
    }
    (output / "environment.json").write_text(json.dumps(environment, indent=2) + "\n")
    # Import the preserved Python implementation without writing bytecode there.
    sys.dont_write_bytecode = True
    sys.path.insert(0, str(DEMO / "src"))
    GrayImage = importlib.import_module("graypipe.loader").GrayImage
    oracle = importlib.import_module("graypipe.statistics").image_statistics
    fixtures = []
    correctness = []
    samples = []
    sessions = []
    build_commands = []

    with tempfile.TemporaryDirectory(prefix="cpp-graystats-build-") as folder:
        work = Path(folder)
        test_exe, bench_exe, sanitized = [work / n for n in ["contract-tests", "benchmark", "contract-tests-sanitized"]]
        for target, files, flags in [
            (test_exe, ["statistics.cpp", "tests.cpp"], FLAGS),
            (bench_exe, ["statistics.cpp", "benchmark.cpp"], FLAGS),
            (sanitized, ["statistics.cpp", "tests.cpp"], ["-std=c++20", "-O1", "-g", "-Wall", "-Wextra", "-Werror", "-fsanitize=address,undefined", "-fno-omit-frame-pointer"]),
        ]:
            cmd = ["clang++", *flags, *[str(HERE / name) for name in files], "-o", str(target)]
            subprocess.run(cmd, check=True, capture_output=True, text=True)
            build_commands.append(cmd)
        test_log = command([str(test_exe)])
        sanitizer_log = command([str(sanitized)])
        (output / "contract-tests.txt").write_text(test_log + "\n" + sanitizer_log + " (AddressSanitizer + UndefinedBehaviorSanitizer)\n")

        def fixture(name, rows, max_value, padding=0, benchmark=False):
            height, width = len(rows), len(rows[0])
            expected = oracle(GrayImage(tuple(tuple(row) for row in rows), max_value))
            payload, active_hash = array("H"), hashlib.sha256()
            for row in rows:
                active = array("H", row)
                if sys.byteorder == "little": active.byteswap()
                active_hash.update(active.tobytes())
                payload.extend(row)
                payload.extend([65535] * padding)
            if sys.byteorder == "little": payload.byteswap()
            path = work / (name + ".u16be")
            path.write_bytes(payload.tobytes())
            record = {"name": name, "width": width, "height": height, "stride": width + padding,
                      "max_value": max_value, "active_pixels_sha256": active_hash.hexdigest(),
                      "storage_sha256": sha(path), "expected": expected, "benchmark": benchmark}
            if name == "main_1024x768":
                assert record["active_pixels_sha256"] == EXPECTED_MAIN_HASH
                assert expected == {"width": 1024, "height": 768, "pixel_count": 786432,
                                    "minimum": 0, "maximum": 255, "mean": 127.48498407999675}
            fixtures.append(record)
            params = [str(path), str(width), str(height), str(width + padding), str(max_value)]

            def verify(result, phase):
                assert [x["variant"] for x in result["results"]] == VARIANTS
                for entry in result["results"]:
                    assert entry["statistics"] == expected, (name, phase, entry)
                    if entry["variant"] == "copied_buffer":
                        assert entry["temporary_buffer_allocations"] >= 1
                        assert entry["temporary_buffer_peak_bytes"] >= width * height * 2
                    else:
                        assert entry["temporary_buffer_allocations"] == 0
                        assert entry["temporary_buffer_peak_bytes"] == 0

            result = json.loads(command([str(bench_exe), "--check", *params]))
            verify(result, "external Python oracle")
            correctness.append({"fixture": name, "status": "PASS", "results": result["results"]})
            if benchmark:
                for session in range(3):
                    result = json.loads(command([str(bench_exe), "--bench", *params]))
                    verify(result, f"timing session {session}")
                    sessions.append({"workload": name, "session": session, "iterations": result["iterations"], "results": result["results"]})
                    assert len(result["samples"]) == 63
                    for sample in result["samples"]:
                        samples.append({"workload": name, "session": session,
                                        "iterations": result["iterations"], **sample})

        fixture("literal_2x2", [[0, 10], [20, 30]], 255)
        fixture("literal_16bit", [[0, 65535, 32768]], 65535)
        fixture("literal_padded", [[1, 2], [3, 4]], 255, padding=3)
        workloads = [("main_1024x768", 1024, 768, 255, 0),
                     ("small_64x48", 64, 48, 255, 0),
                     ("large_2048x1536", 2048, 1536, 255, 0),
                     ("padded_1024x768", 1024, 768, 255, 7),
                     ("wide16_1024x768", 1024, 768, 65535, 0)]
        for name, width, height, maximum, padding in workloads:
            rows = [[(x * 17 + y * 31 + (x * y) % 251) % (maximum + 1)
                     for x in range(width)] for y in range(height)]
            fixture(name, rows, maximum, padding, benchmark=True)
        # The implementation hashes above are frozen before these holdouts exist.
        for index in range(48):
            width, height = rng.randint(1, 97), rng.randint(1, 79)
            maximum, padding = rng.choice([1, 17, 255, 4095, 65535]), rng.randint(0, 11)
            rows = [[rng.randint(0, maximum) for _ in range(width)] for _ in range(height)]
            fixture(f"holdout_{index:02}", rows, maximum, padding)

    assert source_hashes == {name: sha(HERE / name) for name in source_names}
    assert demo_before == command(["git", "status", "--porcelain", "--untracked-files=all"], cwd=DEMO)
    environment["build_commands"] = build_commands
    (output / "environment.json").write_text(json.dumps(environment, indent=2) + "\n")
    (output / "fixtures.json").write_text(json.dumps(fixtures, indent=2) + "\n")
    (output / "correctness.json").write_text(json.dumps(correctness, indent=2) + "\n")
    (output / "sessions.json").write_text(json.dumps(sessions, indent=2) + "\n")
    with (output / "samples.csv").open("w", newline="") as stream:
        writer = csv.DictWriter(stream, fieldnames=["workload", "session", "iterations", "round", "position", "variant", "ns_per_call"])
        writer.writeheader(); writer.writerows(samples)
    summaries = []
    for name, *_ in workloads:
        for variant in VARIANTS:
            values = [s["ns_per_call"] for s in samples if s["workload"] == name and s["variant"] == variant]
            per_session = [statistics.median(s["ns_per_call"] for s in samples if s["workload"] == name and s["variant"] == variant and s["session"] == i) for i in range(3)]
            allocation = next(s for s in sessions if s["workload"] == name)["results"][VARIANTS.index(variant)]
            summaries.append({"workload": name, "variant": variant, "samples": len(values),
                              "median_us": statistics.median(values) / 1000, "min_us": min(values) / 1000,
                              "max_us": max(values) / 1000, "session_medians_us": [n / 1000 for n in per_session],
                              "temporary_buffer_allocations": allocation["temporary_buffer_allocations"],
                              "temporary_buffer_peak_bytes": allocation["temporary_buffer_peak_bytes"]})
    summary = {"experiment_id": environment["experiment_id"], "contract_checks": test_log,
               "sanitizers": sanitizer_log, "oracle_fixtures": len(fixtures),
               "oracle_candidate_results": len(fixtures) * 3, "raw_timing_samples": len(samples),
               "main_input_matches_python_sha256": True, "demo_working_tree_unchanged": True,
               "results": summaries}
    (output / "summary.json").write_text(json.dumps(summary, indent=2) + "\n")
    print(json.dumps(summary, indent=2))


if __name__ == "__main__":
    main()
