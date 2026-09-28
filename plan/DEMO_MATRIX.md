# Demo Matrix

> Status: **STATE-00 and STATE-00-FIXED recorded and verified locally; TRIAL-001/002 observed via Codex CLI; STATE-01 planning complete; Codex Desktop Anchor rehearsal remains pending**
>
> Date: 2026-09-28

This matrix maps candidate Demos to Story Beats and the existing Curriculum
Demo allocation. The rows are candidates; their presence does not mean the
corresponding Story Demo has been run or validated. Repository
language/domain/strategy are selected in DEC-0011;
its local sibling path is selected in DEC-0012. STATE-00 was implemented and
reset-checked; its half-open crop correction is now recorded as
`STATE-00-FIXED` after rerunning the required checks in the original repository.
TRIAL-001 and TRIAL-002 remain bounded Codex CLI observations;
Codex Desktop/account behavior and Live-path readiness remain subject to
OQ-005.

## Feasibility Rating Key

- **PLAUSIBLE:** the proposed repository shape can support this scenario; no
  execution evidence exists yet.
- **TRIAL REQUIRED:** the scenario appears designable, but setup, readability,
  benchmark stability, or exact workflow must be checked before selection.
- **TRIAL OBSERVED:** one bounded run produced the recorded evidence; this is
  not final Demo acceptance or evidence of repeatability.
- **CONDITIONAL:** depends on target Codex surface/account, permission, or a
  mechanism not selected yet.
- **BLOCKED:** cannot meet a Story-critical need under the current proposal.

These are design estimates, not test outcomes. A plausible code scenario does
not establish product support or successful Agent behavior.

## Product Volatility Rating Key

- **LOW:** the planned case is a repository-owned artifact, captured result,
  or visual and does not depend on a current product feature or UI location.
- **MEDIUM:** the engineering idea survives product changes, but an optional
  product mechanism or current Agent behavior may affect the illustration.
- **HIGH:** a Live or Recorded product interaction depends materially on the
  selected surface, account, permission, feature availability, or interface.

Ratings are STEP 06 planning estimates, not current capability claims. The
selected implementation environment is macOS with the currently used Codex
Desktop. TRIAL-001 used Codex CLI 0.154.0 and does not validate Desktop or
account behavior. Recheck those before a Desktop rehearsal. Every HIGH Anchor
requires a current-state check, a rehearsed fallback, and a captured
alternative. The current fallback column and the table below define those
alternatives; no feature availability is assumed.

## Candidate Feasibility Matrix

The feasibility rows below assess only the selected Python Synthetic Image
Processing CLI. Most are planning judgments; the row labeled TRIAL OBSERVED
records bounded implementation/product evidence and is not final acceptance.

| Required scenario | Required | Selected direction | Difficulty / notes |
|---|---:|---|---|
| Repository exploration | Yes | TRIAL OBSERVED (CLI) | TRIAL-001 met its bounded investigation criteria; Codex Desktop/account behavior and rehearsal remain unvalidated. |
| Initial bug | Yes | TRIAL OBSERVED (CLI) | TRIAL-002's crop fix passed revalidation and is recorded at `STATE-00-FIXED`; target Desktop rehearsal remains unvalidated. |
| Prompt constraints | Yes | PLAUSIBLE | Product code should not need special setup. |
| AGENTS.md / Project instructions | Yes | CONDITIONAL | Current instruction discovery depends on product surface/account; verify under OQ-005. |
| Context growth | Yes | PLAUSIBLE | Use a transparent state/diff; do not stage deterministic model failure. |
| Context routing | Yes | CONDITIONAL | Repository docs can route conceptually; Agent retrieval behavior needs environment check. |
| Performance task | Yes | STEP 07 VALIDATION | Choose a real repeated pixel operation/allocation/normalization/transform case, not an invented result. |
| Benchmark | Yes | STEP 07 VALIDATION | Same-machine repeatability and visible signal must be measured. |
| Reusable workflow | Yes | CONDITIONAL | A repository procedure is fallback; product Skill depends on current support. |
| Complex investigation | Yes | STEP 07 VALIDATION | Must remain one connected task with understandable roles. |
| Subagent | No | CONDITIONAL | Supporting only; product surface and coordination cost matter. |
| Durable project knowledge | Yes | PLAUSIBLE | A repository-owned, sourced image-workload fact can be shown. |
| Product Memory / Memory staleness | No | CONDITIONAL | Distinguish product Memory from repository documentation. |
| Working Harness | Yes | STEP 07 IMPLEMENTATION | Build the project-specific system gradually; do not assume every component. |
| Project evolution | Yes | PLAUSIBLE | Choose one visible, justified change. |
| Stale Harness | Yes | STEP 07 VALIDATION | Old artifact must have been correct before the Project change. |
| Repeated failure | Yes | PLAUSIBLE | Use captured/controlled history when recurrence was not observed. |
| Cause analysis | Yes | PLAUSIBLE | Current config, docs, instructions, workflow, and environment must be inspectable. |
| Harness update | Yes | PLAUSIBLE | Correct the implicated layer and limit duplicate rules. |
| Evaluation | Yes | STEP 07 VALIDATION | Evaluate the same task plus representative adjacent tasks. |
| Regression | Yes | PLAUSIBLE | Captured negative case is preferred over another Live run. |

**Selection implication:** DEC-0011 resolves repository source, language,
domain, environment, and delivery direction. Feasibility, implementation,
and product-surface evidence remain for STEP 07; the selected direction is no
longer a user-choice gate.

## Anchor Candidate Evaluation

The four Anchor roles remain candidates under DEC-0008; the repository,
domain, and Anchor HYBRID delivery strategy are accepted by DEC-0011.
**Teaching Value** and **Live Value** are relative judgments. **Estimated
Time** is the already allotted Curriculum Demo window, not measured runtime.

| Candidate | Teaching Value | Live Value | Execution Risk | Story Importance | Fallback Quality | Estimated Time | Proposed role |
|---|---:|---:|---:|---:|---:|---:|---|
| 1. Read-only repository exploration | HIGH | HIGH | MEDIUM | HIGH | HIGH: captured search/read trace | 8 min | ANCHOR proposal |
| 2. Repeated context to project guidance | HIGH | HIGH | MEDIUM | HIGH | HIGH: before/after docs and captured run | 8 min | ANCHOR proposal |
| 3. Reusable workflow with verification | HIGH | MEDIUM–HIGH | MEDIUM–HIGH | HIGH | HIGH: reviewed run, workflow diff, recorded benchmark | 8 min | ANCHOR proposal |
| 4. Stale Harness investigation and Loop | HIGH | HIGH | HIGH | HIGH | HIGH: controlled timeline, diff, evaluation captures | 16 min across two ACT 4 slots | ANCHOR proposal |

All Anchor Demos use HYBRID delivery: attempt the validated Live path and
prepare a capture, expected result, and fallback. Anchor 3 demonstrates a
reusable way of working; a product Skill is optional and used only after
current support is verified. Anchor 4 is not Live-only because diagnosis is
the teaching point and run variance remains a risk.

## Supporting Demo and Visual Case Evaluation

| Candidate | Story contribution | Cognitive cost | Time / execution cost | Proposed disposition |
|---|---|---:|---:|---|
| Prompt Before/After | Shows Prompt value before repeated Project Context. | LOW | ACT 1's existing 8 Demo min | SUPPORTING, captured or short Live after Trial |
| Context growth / relevance / routing | Shows why accumulating every fact is not the answer. | LOW–MEDIUM | ACT 2's existing 5 Demo min plus case/visual time | VISUAL + CAPTURED; do not force a Live failure |
| Subagent role comparison | Makes role/context separation and coordination visible. | MEDIUM–HIGH | ACT 3's existing 5 Demo min | SUPPORTING, captured + visual unless short Live is proven stable |
| Durable knowledge reuse | Shows why a verified Project fact may be worth retaining. | MEDIUM | ACT 3's existing 2 Demo min | SUPPORTING; prefer repository-owned fact; product Memory is conditional |
| Verification / Harness reveal | Connects commands, environment, and checks after components emerge. | LOW–MEDIUM | ACT 3's existing 1 + 4 Demo min | VISUAL/captured; verification also remains inside Anchors 3 and 4 |
| Git diff / review | Makes a scoped Harness change inspectable. | LOW | Inside Anchor 4 | EMBED in Anchor 4; not a separate Demo |
| Regression | Shows an overbroad rule helping one task and burdening another. | LOW | Inside ACT 4's existing 4 Demo min or captured Case | CAPTURED supporting check; do not add a long Live run |
| Training-repository Meta Example | Can make real production-Harness evolution concrete. | MEDIUM | TBD | NOT USED in STEP 06; OQ-013 may be revisited only if later actual history is relevant |

Subagent and Memory are not Anchor dependencies. A mechanism may remain visual
or omitted if it creates more cognitive or execution cost than Story value.

## Visual Case Candidates

Create Visuals in the later Slide step. This document records their purpose
and Story relation only; it does not create diagrams or animation.

| Visual ID | Purpose | Story Beat / ACT |
|---|---|---|
| VIS-01 | Show Context growth and routing as a relevance problem, not a line-count threshold. | BEAT-011–017 / ACT 2 |
| VIS-02 | Compare one broad task with independent investigation roles and coordination cost. | BEAT-023–027 / ACT 3 |
| VIS-03 | Show durable knowledge lifecycle and distinguish Memory sources. | BEAT-028–032, BEAT-054 / ACT 3 |
| VIS-04 | Reveal the bottom-up Harness after its elements have solved needs. | BEAT-035–036 / ACT 3 |
| VIS-05 | Trace an observation to a cause hypothesis and the matching artifact layer. | BEAT-043–045 / ACT 4 |
| VIS-06 | Show Harness technical debt after Project change. | BEAT-039–042 / ACT 4 |
| VIS-07 | Contrast Product Loop with Harness Improvement Loop. | BEAT-050–053 / ACT 4 |
| VIS-08 | Illustrate Minimum Effective Harness as a course heuristic. | BEAT-056–057 / ACT 4 |
| VIS-09 | Recap STATE-00 → STATE-11, including the named Bug-fix and Performance substates, and how the work system evolved. | BEAT-060–070 / ACT 5 |
| VIS-10 | Compare opening and ending mental models without implying full automation. | BEAT-069–071 / ACT 5 |
| VIS-11 | Revisit the dated STATE-06 benchmark fact in a later session after its workload scope changes; verify the current source, then refresh or retire the fact. Keep separate from the primary stale-workflow chain. | BEAT-028–032, BEAT-054–057 / ACT 3 → ACT 4; optional existing ACT 4 Case time |

## Candidate Demo Matrix

Repository direction is selected, but all entries remain **CANDIDATE** until
implementation and feasibility evidence are reviewed. Story Beat references follow
`plan/STORY_BEATS.md` and `plan/TRANSITIONS.md`.

| Demo ID | Act | Story Beat | Question | Repository State | Mode | Time | Time Risk | Execution Risk | Teaching Value | Fallback | Status |
|---|---|---|---|---|---|---:|---|---|---|---|---|
| DEMO-01 | ACT 0 | BEAT-002–003 | Must the Developer find every relevant file first? | STATE-00 | HYBRID | 8 min | MEDIUM | MEDIUM | HIGH | Captured search/read/trace | CANDIDATE |
| DEMO-02 | ACT 2 | BEAT-008–010 | Why repeat the same Project facts in every Task? | STATE-00-FIXED → STATE-01 | HYBRID | 8 min | MEDIUM | MEDIUM | HIGH | Before/after instructions and reviewed trace | CANDIDATE |
| DEMO-03 | ACT 3 | BEAT-020–022 | Why repeat the same verification procedure? | STATE-03 → STATE-04 → STATE-04-PERF | HYBRID | 8 min | HIGH | MEDIUM–HIGH | HIGH | Procedure, captured checks, benchmark record | CANDIDATE |
| DEMO-04A | ACT 4 | BEAT-039–042 | What changed in the Project and what stayed old? | STATE-07 → STATE-09 | HYBRID | 5 min | MEDIUM | MEDIUM | HIGH | Current-doc vs stale-workflow capture | CANDIDATE |
| DEMO-04B | ACT 4 | BEAT-043–049 | Is a task correction enough when the cause is reusable? | STATE-09 → STATE-11 | HYBRID | 11 min | HIGH | HIGH | HIGH | Reviewed cause trace, scoped diff, EVAL captures | CANDIDATE |
| DEMO-05 | ACT 1 | BEAT-004–007 | Which task information makes a request actionable? | STATE-00 → STATE-00-FIXED | CAPTURED / short LIVE | 8 min | MEDIUM | LOW–MEDIUM | MEDIUM–HIGH | Side-by-side natural prompts and bounded result; failing-to-passing boundary evidence | CANDIDATE |
| DEMO-06 | ACT 2 | BEAT-011–017 | Does every Project fact belong in core instructions? | STATE-01 → STATE-03 | VISUAL / CAPTURED | 5 min | LOW | LOW | MEDIUM–HIGH | Context map and curated diff | CANDIDATE |
| DEMO-07 | ACT 3 | BEAT-023–027 | Must one Agent handle every investigation role? | STATE-04-PERF → STATE-05 | CAPTURED + VISUAL | 5 min | LOW | MEDIUM | MEDIUM | Role map and reviewed result snapshot | CANDIDATE |
| DEMO-08 | ACT 3 | BEAT-028–032 | Which verified fact is worth retaining? | STATE-05 → STATE-06 | CAPTURED / short LIVE | 2 min | MEDIUM | MEDIUM | MEDIUM | Source, scope, and freshness record | CANDIDATE |
| DEMO-09 | ACT 3 | BEAT-033–036 | What does a work system need to observe and verify? | STATE-03 → STATE-07 | VISUAL / CAPTURED | 5 min | LOW | LOW–MEDIUM | MEDIUM–HIGH | Tool-to-check map and bounded checks | CANDIDATE |
| DEMO-10 | ACT 4 | BEAT-050–053 | Did the change improve only its target task? | STATE-10 → STATE-11 | CAPTURED / VISUAL | 2 min | LOW | LOW | HIGH | EVAL-02 vs EVAL-04 captured comparison | CANDIDATE |
| DEMO-11 | ACT 4 | BEAT-054–057 | Could a smaller change fix the actual friction? | STATE-10 → STATE-11 | CAPTURED / VISUAL | 2 min | LOW | LOW | MEDIUM–HIGH | Small diff and explicit trade-off | CANDIDATE |
| DEMO-12 | ACT 5 | BEAT-060–070 | What changed from the opening workflow? | STATE-00 → STATE-11 | VISUAL | 2 min | LOW | LOW | HIGH | Evolution timeline | CANDIDATE |

The row times are proposed slots, not observed run lengths. Anchor Demo rows
are segments of the same stale-Harness Story where specified, not unrelated
projects.

### Product Volatility and Recheck Plan

| Demo ID | Volatility | Product dependency / boundary | Recheck and captured alternative |
|---|---|---|---|
| DEMO-01 | HIGH | Current Codex Desktop/account behavior, repository access, and observable read-only investigation still need checking. | Recheck official product guidance and target account/surface before Trial; use the captured search/read/trace. |
| DEMO-02 | HIGH | Agent use of repository project instructions depends on current behavior and setup. | Recheck current instruction behavior before Trial; use the before/after instruction files and reviewed trace. |
| DEMO-03 | MEDIUM | The reusable repository procedure is the core; a product Skill is optional and conditional. | Recheck Skill availability only if used; use the reviewed procedure, checks, and benchmark capture. |
| DEMO-04A | HIGH | Current product interaction and permissions to inspect the Project change are not verified. | Recheck the target surface before Trial; use the current-doc versus stale-workflow capture. |
| DEMO-04B | HIGH | Agent investigation and execution permissions may affect the Live path. | Recheck current surface, account, and permissions; use the captured cause trace, scoped diff, and evaluation outputs. |
| DEMO-05 | LOW | The case compares task specifications and captured outcomes; it requires no named product feature. | Check the selected environment during Trial; use the side-by-side prompt and bounded result capture. |
| DEMO-06 | LOW | Repository Context map and curated diff can be shown without a product-specific interaction. | Use the prepared visual and diff capture. |
| DEMO-07 | HIGH | A Live Subagent illustration depends on current product support; it remains supporting and may be omitted. | Recheck before Live use; otherwise use the role map and reviewed result snapshot. |
| DEMO-08 | MEDIUM | Repository-owned knowledge is the default; product Memory is optional. | Recheck product Memory only if selected; use the sourced, dated fact and its later-task refresh/retirement capture. |
| DEMO-09 | LOW | The planned tool/check relationship is visual or captured; no specific integration is required. | Use the tool-to-check map and bounded check captures. |
| DEMO-10 | LOW | The evaluation comparison is based on captured task evidence. | Use the recorded EVAL-02/EVAL-04 comparison. |
| DEMO-11 | LOW | The trade-off is shown through a small captured change and explicit reasoning. | Use the reviewed diff and trade-off capture. |
| DEMO-12 | LOW | The retrospective is a static Project evolution visual. | Use the reviewed evolution timeline. |

HIGH Anchor Demos are DEMO-01, DEMO-02, DEMO-04A, and DEMO-04B. A current
state check is a STEP 07 prerequisite for their product-dependent path, not
evidence that the path currently works. Their captured alternatives remain
usable if product behavior, permissions, or timing differ.

## Demo Time Reconciliation

The current `plan/CURRICULUM.md` Demo allocation is 73 minutes. The plan
maps to it exactly and adds no instructional time:

| Act | Curriculum Demo budget | Candidate allocation | Difference |
|---|---:|---:|---:|
| ACT 0 | 8 | DEMO-01: 8 | 0 |
| ACT 1 | 8 | DEMO-05: 8 | 0 |
| ACT 2 | 13 | DEMO-02: 8; DEMO-06: 5 | 0 |
| ACT 3 | 20 | DEMO-03: 8; DEMO-07: 5; DEMO-08: 2; DEMO-09: 5 | 0 |
| ACT 4 | 22 | DEMO-04A: 5; loop model/visual: 2; DEMO-04B: 11; DEMO-10: 2; DEMO-11: 2 | 0 |
| ACT 5 | 2 | DEMO-12: 2 | 0 |
| **Total** | **73** | **73** | **0** |

ACT 4 currently allocates four minutes to its final Harness-improvement
segment. This table splits that slot into two minutes for a compact captured
regression check and two minutes for a compact improvement/minimality
comparison; preserve the Story purpose and reconcile the exact treatment
inside that section's existing time. If this split is not feasible, show one
of those cases visually in the Case budget rather than extending the Demo
budget.

For Anchor 1–3, the eight-minute D slot is the total on-screen window,
including setup, execution, observation, interpretation, and transition.
Anchor 4 is split across the existing five- and eleven-minute ACT 4 D slots.
Preparation before class is outside instructional time. Rehearsal must prove
the windows are plausible; otherwise switch delivery mode or trim supporting
material without removing a core Story transition.

### §§114–115 Curriculum and Story Recheck

The per-ACT allocation equals the existing Curriculum budget in every Act;
the total remains 73 minutes. No additional instructional time is proposed.
ACT 3 uses 20 of 20 Demo minutes and ACT 4 uses 22 of 22, so neither has
on-screen buffer. Protect the Anchor insight by keeping Subagent, durable
knowledge, Harness reveal, loop-model, and regression/minimality evidence
captured or visual where appropriate. The 8-minute ACT 3 workflow and the
16-minute ACT 4 stale-state/correction sequence remain the only longer
candidate Agent runs; both require rehearsal and Hybrid/Captured fallback.

Use the `Act` and `Story Beat` columns as the narrative order; Demo IDs are
identifiers and do not set the teaching order. The proposed sequence remains:

`DEMO-01 → DEMO-05 → DEMO-02 → DEMO-06 → DEMO-03 → DEMO-07/08/09
→ DEMO-04A → DEMO-04B/10/11 + VIS-11 → DEMO-12`

This keeps repository exploration before Prompt, repeated image-Project Context
before routing, the reusable workflow before optional roles/retained knowledge
and the Harness reveal, and the stale Harness before Loop evaluation.
Product-feature availability does not move a Demo ahead of the Problem that
motivates it. If rehearsal shows ACT 3 or ACT 4 is too dense, move supporting
evidence to its already allocated Case/visual treatment; do not extend the
Demo budget or reorder the Story.

## STEP 07 Validation and Acceptance

After the user decisions and Demo implementation, validate each selected Demo
in this order:

1. Repository functional validation.
2. Build validation.
3. Test validation.
4. Benchmark validation.
5. State reset validation.
6. Agent Demo trial.
7. Success-criteria evaluation.
8. Timing measurement.
9. Variance observation.
10. Fallback validation.

Record actual evidence and limits after each step. Do not infer that a Demo
matches its specification before these checks. If results differ from the
Story expectation, diagnose the difference before deciding whether to revise
the Demo or its Story relationship.

### TRIAL-001 — Read-only repository exploration

**Date:** 2026-09-28 (Asia/Seoul).

**Question:** Can Codex find the failing Test, relevant implementation, and
call path without the Prompt naming files or the defect?

**Repository:** `ai-dev-training-demo`, commit
`22e7e2f806de2419b0df649107bbae14dea082eb`, tag `STATE-00`; clean working
tree at start and after the Trial.
**Interface / Product:** isolated non-interactive Codex CLI, version
`0.154.0`, launched with `--ephemeral --sandbox read-only --ignore-user-config`.
OS: macOS; OS version not captured. Model: not exposed in the run record.
Network: Codex service interaction was used; no repository remote or external
research was used. Permission: read-only sandbox; no approval prompt occurred.

**Prompt:**

> 현재 이 저장소에서 테스트 하나가 실패하고 있다. 실패 원인을 조사해줘.
> 관련 구현과 호출 경로, 실패하는 테스트를 확인해서 왜 실패하는지
> 설명해줘. 아직 코드는 수정하지 마.

**Result:** PASS for this bounded CLI investigation. Codex found
`tests/test_transform.py::test_crop_excludes_end_coordinate`, inspected the
contract and implementation, reproduced the extra-column result, and traced
`cli.main()` → `pipeline.process_image()` → `transform.crop()`. It explained
that `[x_start, x_end)` excludes the end coordinate while the implementation
uses `row[x_start : x_end + 1]`. It did not modify code and distinguished the
observed behavior from an edge case where slicing at the image width masks the
extra endpoint.

**Files and commands observed:** The run discovered the test and source tree,
then inspected `src/graypipe/transform.py`, `pipeline.py`, `cli.py`,
`loader.py`, `statistics.py`, `tests/test_transform.py`,
`tests/test_pipeline.py`, `setup.cfg`, `pyproject.toml`, and `README.md`.
The full command reported 7 passing tests, the expected crop failure, and 3
errors because the read-only sandbox could not create temporary directories.
The focused command reported 2 passing tests and the expected crop failure.
The repository working tree remained clean. **Classification of the three
errors:** DEMO ENVIRONMENT FAILURE / LIMITATION; read-only permissions blocked
temporary-directory creation. They are not Product, Demo Repository, or crop
bugs, and are not evidence for repository exploration or the crop defect.
They remain a possible Environment / Permission Meta Observation and are not
added to the current Story.

```sh
PYTHONPATH=src .venv/bin/python -m unittest discover -s tests -v
PYTHONDONTWRITEBYTECODE=1 PYTHONPATH=src .venv/bin/python -m unittest \
  discover -s tests -p test_transform.py -v
```

**Time:** about 32 seconds from CLI launch to final response; not a separate
user-perceived latency measurement. **Useful moments:** independent file
discovery, a concise expected-versus-actual comparison, call-path tracing,
and compliance with the no-edit instruction. **Waiting/friction:** the full
suite's three environment errors and Xcode/temp-directory warnings were
unrelated to the crop behavior. **Variance risk:** MEDIUM; one run is not a
repeatability sample.

**Do Not Claim:** this single run does not establish repeatability, Codex
Desktop behavior, the user's Desktop account or permissions, overall Anchor
delivery quality, or model identity. Codex Desktop and the prepared fallback
still need a rehearsal. **Anchor assessment:** NEEDS RETRIAL in the selected
Codex Desktop environment; `DEMO-01` remains a candidate for final acceptance.
**Next-state readiness:** READY FOR BUG-FIX VALIDATION. The Trial itself made
no code or state change; proceed only when the next user instruction arrives.

### TRIAL-002 — Prompt-structured crop bug correction

**Date:** 2026-09-28 (Asia/Seoul).

**Question:** After repository investigation, can a task Prompt with explicit
Goal, Constraints, Process, and Verification produce a scoped, verified code
change?

**Baseline and isolation:** `STATE-00`, commit
`22e7e2f806de2419b0df649107bbae14dea082eb`. The run used a detached worktree
at `/Users/noah/workspace/education/ai-dev-training-demo-trial-002`; the
original `main` and `STATE-00` tag remained at the baseline commit.

**Interface / Product:** isolated non-interactive Codex CLI `0.154.0`, launched
with `--ephemeral --sandbox workspace-write --ignore-user-config`. OS: macOS;
OS version not captured. Model: not exposed in the run record. Network:
Codex service interaction was used; no repository remote or external research
was used. Permission: writable sandbox for the isolated worktree; no approval
prompt occurred. `TMPDIR` was set to a worktree-local temporary directory so
tests could create their local outputs.

**Prompt used:**

```text
Goal: Investigate and fix the failing crop-boundary test in this repository.
Constraints: preserve the public crop contract [x_start, x_end); do not change
unrelated APIs; add no dependencies; keep the change minimal.
Process: first reproduce the current failure; inspect the related
implementation and call path; before editing, send a concise user-visible
change plan and then continue without waiting for approval; make only the
necessary code change.
Verification: run the focused crop test and the full test suite; run a CLI
smoke test using the existing synthetic input if practical; inspect the final
diff; report changed files and exact verification evidence.
Do not reveal or assume a particular code expression in advance. Do not
modify the STATE-00 tag, create a STATE-00-FIXED commit or tag, add project
guidance or other Harness files, or modify anything outside this isolated
worktree. Leave the reviewed change uncommitted for the state-recording
decision.
```

**Investigation and visible plan checkpoint:** the Agent independently found
and reproduced the failing crop test, checked the CLI-to-pipeline-to-crop
call path, then stated before editing that it would change only the crop
slice's ending boundary to preserve `[x_start, x_end)` and keep existing Tests
and APIs. This was visible in the CLI event stream before the file-change
event.

**Implementation:** one tracked file changed:
`src/graypipe/transform.py`. The row slice now ends at `x_end`, removing the
extra endpoint pixel. No API, dependency, project guidance, or other file
changed. The trial diff is one insertion/one deletion; it remains uncommitted
in the isolated worktree.

**Verification:** the focused Test passed 3/3. The full suite passed 11/11;
setting `TMPDIR` inside the writable worktree avoided TRIAL-001's temporary
directory errors. The CLI smoke test on `data/sample.pgm` with `--crop 1 3`
exited 0, reported width 2 and height 3, and its output pixels were read back
and checked as `((51, 102), (255, 153), (51, 204))`. `git diff --check`
passed. The final diff contained exactly one file and one line change. The
temporary CLI output and trial temp directory were removed after verification.

```sh
PYTHONDONTWRITEBYTECODE=1 PYTHONPATH=src python3 -m unittest \
  discover -s tests -p test_transform.py -v
PYTHONDONTWRITEBYTECODE=1 PYTHONPATH=src TMPDIR="$PWD/.trial-tmp" \
  python3 -m unittest discover -s tests -v
PYTHONDONTWRITEBYTECODE=1 PYTHONPATH=src python3 -m graypipe.cli \
  --input data/sample.pgm --output .trial-tmp/crop-smoke.pgm --crop 1 3
```

**Constraints:** PASS. The public half-open contract is preserved, the diff
is limited to its implementation, no dependency was added, and only the
isolated Trial worktree changed. **Result:** PASS for this one Codex CLI run.
**Time:** about 60 seconds from CLI launch to final response; not a separate
user-perceived latency measurement. **Variance risk:** MEDIUM; there is one
write-capable run and no repeated or cross-model trial.

**Prompt Engineering evidence:** this run showed the Agent following the
explicit Goal / Constraints / Process / Verification request: reproduce first,
inspect the cause, expose a short plan before editing, limit the diff, run
focused and full checks, and inspect the output. It does not establish that
this Prompt structure is superior across tasks or models.

**Unexpected / environment findings:** the writable sandbox with a
worktree-local `TMPDIR` completed the full suite without the three errors
from TRIAL-001. Those prior errors remain classified as an environment
limitation, not a crop or repository bug. The CLI also loaded user-level
`readchk` / `sip` checks; its attempted cold-read handoff logged a transcript
resolution warning and returned no independent verdict. A separate
content-only cold read found the crop function consistent with its half-open
docstring and noted unrelated questions about resize sampling and module
scope; those are outside this Trial and no code was changed for them.

**At Trial close:** `STATE-00-FIXED` was the proposed next state; this was one
behavior-only correction and needed no intermediate state. The original
baseline remained intact, and no fixed-state commit or tag had yet been
created. **ACT 1 Demo assessment:** NEEDS RETRIAL in the selected Codex
Desktop environment; this CLI result may support a capture but does not
validate Desktop, screen readability, or a prepared fallback. **Next
readiness at Trial close:** READY TO RECORD FIX STATE.

### STATE-00-FIXED — Verified Repository State

**Purpose:** Preserve the crop-boundary correction as the next state in the
training-designed Project history, separate from the STATE-00 baseline and
before any project instructions or Harness additions.

**Baseline:** STATE-00 commit and tag remain
`22e7e2f806de2419b0df649107bbae14dea082eb`. Before changing the original
repository, the focused Test reproduced the expected failure: actual
`((2, 3, 4), (6, 7, 8))`, expected `((2, 3), (6, 7))`.

**Change:** one line in `src/graypipe/transform.py` now uses the exclusive
`x_end` slice boundary. No other file, public API, dependency, or project
instruction changed.

**Verification environment:** macOS 26.6.2 / arm64; Python 3.9.6.

| Check | Result |
|---|---|
| Focused crop test (`test_transform.py`) | PASS, 3/3 |
| Full test suite | PASS, 11/11 |
| CLI smoke on `data/sample.pgm`, crop `1 3` | PASS; exit 0, 2×3 image, 6 pixels, mean 136.0, min 51, max 255 |
| Decoded output pixels | PASS; `((51, 102), (255, 153), (51, 204))` |
| `git diff --check` | PASS |
| Fresh detached checkout of the state tag, full test suite | PASS, 11/11; worktree clean after verification |

**Git record:** commit `6dab644ea53e899e6d65b70bc4383bd2901ded89`, subject
`fix(graypipe): exclude crop end coordinate`; lightweight tag
`STATE-00-FIXED` points to that commit. The original `STATE-00` tag still
points to its baseline commit. The Demo repository has no remote configured;
this commit and tag are local and were not pushed.

**Boundary:** this records one successful Codex CLI fix. It does not validate
Codex Desktop, the training account, repeated runs, other models or operating
systems, or final ACT 1 acceptance.

### STATE-01 — Repeated Project Context and First-Success Plan

#### Repeated Project Context Candidates

The implemented repository supplies these verified facts that can be useful
across more than one task:

- Test command: `PYTHONPATH=src python3 -m unittest discover -s tests -v`;
- local CLI smoke command and the synthetic `data/sample.pgm` fixture;
- no runtime dependencies; build tools are separately prepared for packaging;
- the local P2 data/output model and current CLI/statistics contracts;
- keep changes task-scoped and preserve existing public behavior unless the
  task explicitly changes it.

The first four items are documented in the Demo README, CLI, tests, and
package metadata. The final constraint is a proposed project rule grounded in
the selected local-only, synthetic-data design and current API. It is not an
observed model failure.

#### Repeated Prompt Scenario

| Task | Evidence status | Task-specific information | Project-persistent information repeated in the Prompt |
|---|---|---|---|
| A. Fix the half-open crop boundary | Actual TRIAL-002 Prompt and change | Reproduce the failing crop assertion, inspect its call path, exclude `x_end`, and report the result. | Preserve existing API, add no dependency, keep scope small, run project tests, and smoke-test with local synthetic data. |
| B. Refactor `graypipe.statistics.image_statistics` for readability while preserving its current output | Illustrative Prompt comparison only; not run and not evidence of an observed need | Keep the six current fields and values unchanged; inspect before editing; use the focused statistics test and relevant integration check. | Use the project's `unittest` command, local synthetic fixture/CLI when output integration is relevant, no unjustified runtime dependency, and scoped edits. |

Task B is a candidate teaching task, not a reported bug or production need.
Confirm its value and scope before using it; do not imply that a failure or
repeated real-world Prompt was observed. The task-specific goal and expected
behavior stay in each Prompt. Stable repository facts are the potential
instruction-file content.

#### Trial Necessity

Use the actual TRIAL-002 run for Task A and a captured/visual Task B Prompt
comparison. A second live Agent run is not required to show which Project
facts would be repeated; this Demo is not testing relative Agent performance.
Do not claim that repetition was observed across two completed runs.

#### Proposed STATE-01 `AGENTS.md` Shape

Do not create this file in the current state. Keep the first version small:

```markdown
# Project
Local grayscale image-processing CLI using synthetic ASCII PGM data.

# Build / Run
Use the prepared build and CLI commands documented in `README.md`.

# Test
`PYTHONPATH=src python3 -m unittest discover -s tests -v`
Run a focused test when the task is narrow.

# Core Constraints
- Keep input and output data local and synthetic.
- Preserve existing public behavior unless the task explicitly changes it.
- Add a runtime dependency only when the task justifies it.
- Keep changes scoped; verify changed behavior with relevant tests.
```

The exact text remains subject to STATE-01 implementation against the then
current repository. It does not add benchmark, release, troubleshooting,
architecture, Memory, or Skill guidance.

#### First-Success Criteria

STATE-01 succeeds only when all of the following are observed:

1. `AGENTS.md` contains accurate facts for this repository only.
2. The file is short and understandable.
3. A task Prompt can omit some repeated Project context.
4. In a real task, Codex discovers or uses the project instructions.
5. At least one instruction is visible in actual behavior: a Build/Test
   choice or an applicable project constraint.
6. Task-specific goals, acceptance details, and constraints remain in the
   Prompt.
7. `AGENTS.md` does not attempt to contain all Project knowledge.

Use Task B only if its scope is confirmed as useful. Compare the Prompt that
repeats project setup with a shorter task-specific Prompt, then inspect the
actual loaded instructions, relevant test command, output, and diff. This is a
bounded first-success check, not proof of general performance improvement.

#### Research / Product Check

Current OpenAI documentation supports `AGENTS.md` as Codex instructions and
documents global, repository, and nested discovery. At run start, Codex
constructs an instruction chain from the global Codex home through the Git
root to the current working directory, selecting at most one instruction file
per directory and combining them root-to-working-directory. The documented
default combined size limit is 32 KiB. This supports a concise root-level
Demo instruction file; it does not guarantee availability or behavior in the
selected Desktop account. The target Desktop path still requires a Trial.
See `SRC-0110`; checked 2026-09-28.

#### Next Readiness

**READY TO IMPLEMENT STATE-01.** The crop fix is recorded as a separate
state, repeated-context facts and a bounded first-success gate are defined,
and the current official product scope is checked. This step has not created
`AGENTS.md`, started STATE-01, or claimed instruction discovery in Codex
Desktop. Wait for the next user instruction before implementation.

Following STEP 07, every Demo receives one final acceptance status:

| Final status | Acceptance meaning |
|---|---|
| VALIDATED LIVE | A rehearsed Live run met its observable, bounded success criteria in the selected environment. |
| VALIDATED HYBRID | A Live path was validated and a prepared fallback was also checked. |
| VALIDATED RECORDED | A reviewed recording is suitable because Live risk is too high. |
| VALIDATED CAPTURED | Reviewed result, diff, log, or output is the suitable evidence. |
| VISUAL ONLY | A reviewed visual communicates the point more clearly than execution. |
| REJECTED | Trial or review found insufficient teaching value or reproducibility; record the reason. |

Until the evidence required for final STEP 07 acceptance is complete, Matrix
status remains CANDIDATE (or BLOCKED where a dependency prevents a Trial).
A single Trial record is not sufficient for final acceptance; these labels
must not be applied based on design or one bounded run alone.

## Story-to-Demo Coverage Audit

| Coverage class | Beats | Planned treatment |
|---|---|---|
| MUST OBSERVE | Repository exploration (BEAT-002–003); stale artifact through cause and evaluated change (BEAT-039–049). | Anchor 1 and Anchor 4, with prepared fallback. |
| GOOD TO OBSERVE | AGENTS.md first success; reusable workflow and verification. | Anchors 2 and 3; product mechanism is conditional. |
| EXPLAIN / VISUALIZE | Context growth/routing, Subagent trade-offs, Memory lifecycle, Harness reveal, Product Loop vs Harness Loop, Minimum Effective Harness. | Visual, captured, or short supporting examples. |
| Conditional / optional | Real training-repository Meta Example. | Exclude unless actual history is recorded and relevant. |

No Demo is added only to fill a Beat or show a product feature.

## Narrative Continuity Audit

All proposed Anchors reuse the same synthetic image-processing Project,
stable module names, command vocabulary, and sample task as it evolves. The
same processing path should first be explored, later optimized, and eventually
affected by a Project Test-procedure change. If implementation cannot make
that continuity natural, record evidence and follow DEC-0011 change control.

## Cognitive Load and Screen Readability

- Each Demo adds at most one main new Engineering concept.
- Keep the same Project and familiar module names across Anchor transitions.
- Keep command, diff, test output, and logs short enough to read on a
  projector; rehearse font and editor zoom in the selected environment.
- Hide irrelevant panels and avoid presenting several Agent windows at once.
- Use a diagram and captured output for complex Subagent coordination.
- Do not display line counts as a deterministic model-quality threshold.

## STEP 06 Question Status

| Topic | Status | Remaining dependency |
|---|---|---|
| Repository strategy, language, domain, and location | RESOLVED FOR STEP 06 PLANNING | DEC-0011 selects separate Python synthetic image processing; DEC-0012 selects sibling path `../ai-dev-training-demo`. Implementation remains for STEP 07. |
| License / external usage | RESOLVED FOR CURRENT DATA SCOPE | Synthetic local data requires no external code/data permission; choose a license before sharing the repository. |
| Primary OS and delivery direction | RESOLVED FOR PLANNING | macOS + current Codex Desktop; OS-independent design; Anchor HYBRID. Account/product behavior remains under OQ-005. |
| Live/Recorded/Captured/Visual mix | PARTIALLY RESOLVED | Anchor HYBRID is accepted; supporting roles remain flexible. Validate current feature availability and fallback. |
| Build, Test, Benchmark | PARTIALLY RESOLVED | STATE-00 build/test commands and outcomes are recorded; benchmark method and results await the performance states. |
| Skill / Subagent / Memory | OPEN / CONDITIONAL | OQ-005/OQ-008; no mechanism assumed. |
| Stale scenario | PARTIALLY RESOLVED | One justified Test-layout/procedure change leaves one reusable workflow stale; exact change and visible failure need STEP 07. |
| Evaluation / Regression | PARTIALLY RESOLVED | EVAL-01–04 and a bounded negative check proposed; validate tasks in the repository. |
| State model / reset strategy | PARTIALLY RESOLVED | STATE-00 has a commit/tag and a verified disposable reset; later state refs and reset evidence remain open. |
| Anchor selection / delivery / fallback | PARTIALLY RESOLVED | Four roles remain proposed under DEC-0008; HYBRID mode and prepared capture/expected result/fallback are accepted requirements. |
| Meta Example | NOT USED IN STEP 06 | OQ-013 may be revisited only if later actual history supports it. |

**STEP 06 planning gate:** COMPLETE WITH OPEN QUESTIONS at that step's close.
STEP 07 has since implemented and reset-checked STATE-00 and recorded
TRIAL-001 through Codex CLI. The selected Codex Desktop/account path, repeated
trial, timing rehearsal, and fallback check remain STEP 07 work under OQ-005.

## Demo Architecture Quality Audit

| Audit question | Result | Evidence / boundary |
|---|---|---|
| Every Demo has a Story question and Beat. | PASS as proposal | Candidate matrix references Story Beats. |
| The design is not a feature showcase. | PASS | Product mechanisms are conditional and Story-led. |
| One Project evolves through the Anchors. | PARTIAL | STATE-00 establishes the initial repository; later Story states and connected Agent Demo trials are not built or validated yet. |
| Domain explanation is small and the screen is readable. | NEEDS STEP 07 VALIDATION | Keep operations elementary; cold-read and projector review remain. |
| Build/Test and a meaningful benchmark exist. | PARTIAL | STATE-00 build and test commands/results are recorded; the benchmark method and measured comparison remain unvalidated. |
| Stale cause, evaluation, and regression are inspectable. | PASS as controlled design | Exact workflow artifact and commands remain TBD. |
| State, input, output, and fallback are reproducible. | PARTIAL | STATE-00 has a recorded commit/tag, fixture hash, runtime, and verified disposable reset; later states and Demo fallbacks remain unvalidated. |
| Product capability claims match the selected environment. | PARTIAL | TRIAL-001 records one Codex CLI observation; Codex Desktop/account behavior remains under OQ-005. |
| Failures and successes are fairly represented. | PASS | TRIAL-001 is bounded to one CLI run and labels its environment limits. |

## References

- `plan/DEMO_ARCHITECTURE.md`
- `plan/DEMO_REPOSITORY_SPEC.md`
- `plan/DEMO_RUNBOOK_SPEC.md`
- `plan/CURRICULUM.md`
- `plan/STORY_ARCHITECTURE.md`, `plan/STORY_BEATS.md`,
  `plan/TRANSITIONS.md`
- `references/CLAIMS.md`, `references/RESEARCH_GAPS.md`,
  `references/product/CAPABILITY_MATRIX.md`
