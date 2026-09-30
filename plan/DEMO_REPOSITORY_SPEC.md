# Demo Repository Specification

> Status: **STATE-00 through STATE-04-PERF implemented and recorded; STATE-04 remains tagged at `822f1c12c5f602d934a2fd29e48f05bf498b4bfa`; STATE-04-PERF is tagged at `6153b81c0187dd7d82c88bd1817fb683c98eb431`; statistics change and required validation passed; TRIAL-008 PASS in Codex CLI 0.154.0; no remote push and no Demo remote; learner environment remains primarily Windows-based, exact interface and Desktop behavior remain open; DEC-0018 defers Subagents and DEMO-07; Memory is not justified yet; Final Anchor rehearsal pending**
>
> Date: 2026-09-30
>
> This document records the plan and actual implementation evidence for
> `../ai-dev-training-demo`, relative to the `ai-dev-training` repository
> root. TRIAL-001/002/003/004 and the `STATE-00-FIXED` revalidation are recorded in
> `plan/DEMO_MATRIX.md`. CLI observations do not validate a future Desktop
> Anchor. The final presentation interface and account behavior remain subject
> to OQ-003/OQ-005 and Final Demo Rehearsal. No remote is configured for the
> Demo repository.

## Purpose

Specify one compact software Project that can make the six-hour training's
continuous Story observable. The Project should support repository
exploration, a bounded bug fix, a performance task, project guidance, a
reusable work procedure, project evolution, Harness staleness, and
evaluation/regression checks without making its domain the lesson.

## Audience

Developers with a wide range of AI experience, including a high proportion
of C++ Vision developers. The course remains about AI Engineering evolution,
not Python, C++, or Vision algorithms. Assume ordinary software-development
familiarity, but do not assume advanced Python knowledge or a specific Codex
interface.

## Domain

**SELECTED:** a purpose-built **Synthetic Image Processing CLI** in the
separate `ai-dev-training-demo` repository. Use synthetic local image data,
with no company data, customer data, or personal information.

The conceptual pipeline is:

`input image → loader → normalize → filter → resize / transform → statistics
→ output`

Keep the domain intuitive to Vision developers without making Vision
algorithms the subject of the training. STATE-00 uses the `graypipe` package,
ASCII PGM (`P2`) input/output, and a local 4×3 synthetic fixture. Its actual
module structure and data representation are recorded in the STATE-00
implementation evidence below. Later-state additions remain TBD until
implemented.

## Language

**SELECTED:** Python. The purpose is to lower Code and Repository
comprehension cost so the audience can focus on Agent behavior, repository
investigation, Prompt, Context, workflow, Verification, Harness, and Feedback
Loop. It is not a claim that Python is better than C++ or more suitable for
AI development.

Keep dependencies minimal. Python + NumPy is the initial dependency
direction. Add OpenCV only if a demonstrated Story need justifies it without
adding undue API complexity. Choose test dependencies, including pytest if
considered, based on stability and readability. STATE-00 uses Python 3.9.6,
the standard-library `unittest` runner, no runtime dependencies, and a local
setuptools wheel build; exact versions and evidence appear below. Later-state
and classroom-preparation needs remain open.

## Why This Domain

- Grayscale input, simple normalization/filtering, resize/transform, and
  basic statistics are visually intuitive without specialist Vision theory.
- A small image-processing path can provide repository structure, a bounded
  correctness case, and a performance investigation while the same Project
  evolves through Context and Harness states.
- Synthetic local inputs avoid external services, credentials, and data
  licensing dependencies.
- A later justified test-layout or test-procedure change can leave one
  previously correct repository-owned performance Skill stale, preserving
  the Loop Story.

Avoid complex Computer Vision algorithms, Deep Learning inference, CUDA/GPU
kernels, camera calibration, stereo vision, 3D reconstruction, complex
OpenCV pipelines, and professional image-quality metrics. If implementation
details require explaining Vision techniques, reduce the operation rather
than expand the course domain.

## Why This Language

Python is selected to make Code and Repository structure quicker to
understand during a six-hour AI Engineering course. C++ Vision transfer is a
future teaching bridge; C++ code is not required in this Demo repository.
STATE-00 setup and packaging choices are recorded below; later-state setup
and classroom preparation remain open.

## C++ Vision Transfer Bridge

Future Curriculum and Slide work may briefly map the Python Demo patterns to
C++ Vision practice. These bridges are teaching aids only; they do not add
C++ source to this repository.

| Python Demo pattern | C++ Vision transfer |
|---|---|
| pytest, if selected | GoogleTest / CTest |
| Python benchmark | Google Benchmark or a project-specific benchmark |
| Python modules | `.cc` / `.h`, libraries, and modules |
| Project instructions | CMake, compiler flags, coding conventions, and module constraints |
| Performance workflow | Release build → benchmark → profile → optimize → correctness test → regression |
| Context routing | Architecture docs, module-specific rules, algorithm constraints, and performance guides |

## Alternatives Considered

| Alternative | Strongest reason to choose it | Disposition |
|---|---|---|
| C++ image-processing CLI | Direct match to C++ Vision work and native build/test practices. | Not selected as primary language; its transfer patterns appear in future teaching bridges. |
| Python telemetry/log-processing CLI (DEC-0010) | Synthetic deterministic input and a compact Python pipeline. | Superseded; image processing is more immediately familiar to the audience. |
| TypeScript event-log CLI | Explicit compilation and a multi-module code path. | Not selected; no Story advantage justifies its additional language/toolchain assumptions. |
| Existing internal/public or hybrid repository | Potentially authentic architecture or work history. | Not selected; no source/permission/data review is needed for the synthetic purpose-built direction. |

DEC-0011 selects the repository direction and DEC-0012 selects its sibling
location. Revisit only through the project's change-control process if
STEP 07 evidence shows that this shape cannot support the Story.

## Repository Location

Keep the Demo as an independent Git repository at `../ai-dev-training-demo`,
relative to the `ai-dev-training` repository root. In the current workspace,
the sibling path is `/Users/noah/workspace/education/ai-dev-training-demo`.
The repository was created there as part of STEP 07. This path decision does
not select or configure a Git remote.

## Repository Architecture

**Planning outline; see the STATE-00 implementation record below for the
actual initial layout.** The repository should remain a small Python CLI and
include local synthetic image input/output, a few traceable processing stages,
tests, benchmark support, Project documentation, and a repository-owned
Codex Skill
introduced at the appropriate Story transition. The following are planning
areas, not a final layout for later states:

```text
ai-dev-training-demo/
├── README.md
├── LICENSE                 # decide before sharing the Demo repository
├── .gitignore
├── docs/
│   ├── architecture.md     # STATE-03 topic Context source; see DEC-0014
│   ├── image-contracts.md  # STATE-03 topic Context source; see DEC-0014
│   └── testing.md          # STATE-03 topic Context source; see DEC-0014
├── .agents/
│   └── skills/
│       └── graypipe-performance/
│           └── SKILL.md    # STATE-04 reusable performance procedure
├── src/                    # STATE-00 layout recorded below; later additions TBD
├── tests/
├── benchmarks/
└── data/
    └── STATE-00 uses data/sample.pgm; benchmark input is generated in memory
```

This tree is a conceptual outline, not a requirement to create every
directory in STATE-00. Files that teach a later Harness or workflow concept
are introduced at their planned Story transition.
Do not create a workflow file, `AGENTS.md`, Skill, Memory record, Subagent
configuration, or Evaluation framework in the initial state.

## Module Responsibilities

STATE-00 assigns image loading and P2 input/output to `loader.py`, declared
range scaling to `normalize.py`, pixel inversion to `filters.py`, horizontal
crop and nearest-neighbor resizing to `transform.py`, summary values to
`statistics.py`, and stage ordering to `pipeline.py`. `cli.py` parses options
and formats the summary. These boundaries were implemented and exercised by
the recorded STATE-00 checks. Tests cover operation contracts and the local
input-to-output path. Benchmark support must later compare baseline and
changed implementations on the same deterministic local workload and verify
output equivalence. Avoid abstractions added only to create more Context or
Subagent examples.

## Entry Point

The initial package is `graypipe`, distributed as `ai-dev-training-demo`,
with the `graypipe` console command and `python -m graypipe.cli` module entry
point. It reads and writes local ASCII PGM (`P2`) grayscale images. The
current options are `--input`, `--output`, optional `--crop X_START X_END`,
optional `--resize WIDTH HEIGHT`, and optional `--invert`. Keep commands
short enough to read on a projector.

## Build

STATE-00 uses `pyproject.toml` with the `setuptools.build_meta` backend and
pins `setuptools==58.0.4` and `wheel==0.37.0`. The wheel build command is:

```sh
python3 -m pip wheel --no-build-isolation --no-deps \
  --wheel-dir /tmp/graypipe-wheel .
```

It built `ai_dev_training_demo-0.1.0-py3-none-any.whl` successfully on the
recorded macOS/Python environment. Build tools must be prepared before class;
no class-time package download is required.

Keep setup local, dependency-light, and transferable across the intended
Windows-centric audience. The current macOS host may be used for development
and automated validation. Do not make shell behavior or an OS-specific setup
part of the Story. Exact Windows/WSL validation scope remains open under
OQ-003; do not download packages during a class Demo, and prepare dependencies
beforehand if they are needed.

## Test

Candidate test layers:

- Unit tests for the selected image-operation contracts and boundary cases.
- One integration check for the local input-to-output pipeline.
- A regression check for the initial Bug and output equivalence after a
  measured Performance change.
- A separate small Harness Evaluation set described below.

STATE-00 uses standard-library `unittest` and adds no runtime or test-runner
dependency. Run it with:

```sh
PYTHONPATH=src python3 -m unittest discover -s tests -v
```

The full baseline has 11 tests: 10 pass and one intentionally fails on
the specified crop-boundary defect. The other 10 checks pass when run without
that focused regression. Preserve the primary stale-Harness Story by
introducing a justified Project test-layout or test-procedure change that
leaves exactly one previously correct reusable workflow stale. The old
workflow must fail visibly for the intended stale-artifact reason, not
because of missing dependencies or a broken environment.

Test output should identify the relevant failing check and expected/actual
value clearly enough for a projected terminal view.

## Performance Scenario and Benchmark

**Original scenario (DEC-0015):** reduce repeated source-column coordinate
computation in `resize_nearest`. The user later selected the verified
`image_statistics` row-reduction candidate for the STATE-04-PERF product
transition in DEC-0019, superseding DEC-0015's product-change target. The
resize benchmark remains an unchanged supporting check; neither the earlier
candidate findings nor the statistics alternative are erased from history.
Do not insert an artificial slow path. The teaching goal is the workflow:

`Baseline → Investigate → Plan → Implement → Correctness Test → Benchmark
→ Compare`

The task is not Python optimization, NumPy optimization, or vectorization
instruction. Keep the output functionally equivalent across the comparison.

The standard-library-only `benchmarks/benchmark_resize.py` is implemented
with deterministic in-memory 640×480 grayscale input (maximum value 4095),
resized to 960×720. It records the input and expected output SHA-256 values,
generates input outside the timed region, performs one warm-up, and reports
seven samples, median, range, spread, and invocation runtime. The command is
`PYTHONPATH=src python3 benchmarks/benchmark_resize.py`; see
`plan/DEMO_MATRIX.md` for hashes, machine/runtime, three independent
invocations, and observed stability. The preparation commit follows the
STATE-03 tag and does not create a new State. At STATE-04, the reusable
procedure will establish and record the baseline before a separately
verified change at STATE-04-PERF.

The benchmark record must include machine, runtime, input parameters,
command, warm-up/repetition policy, individual observations, and a robust
summary. Verify output equivalence before timing. Use the same host and
procedure for both states. Do not state an absolute runtime or improvement
until it is recorded.

Required controls:

- Establish a recorded baseline before changing code.
- Use the same machine, runtime, input, command, and benchmark procedure for
  before and after.
- Verify that functional output is identical before comparing performance.
- Repeat measurements and report a robust summary with conditions.
- Do not treat small, unstable differences as a teaching result.
- Do not state an absolute runtime or percentage improvement in this spec.
- Say only that a clearly observable improvement is expected; fill in actual
  numbers only from recorded trials.

## Initial Bug

**STATE-00 contract:** horizontal crop uses the half-open pixel-coordinate
range `[x_start, x_end)`. The implementation currently includes the pixel at
`x_end`; the `test_crop_excludes_end_coordinate` test in
`tests/test_transform.py` records the mismatch on a small synthetic grayscale
image. This baseline failure is deliberate and remains unfixed until
`STATE-00-FIXED`. The subsequent correction and its verification are recorded
in the STEP 07 state record below.

At `STATE-00`, a focused regression check should expose the bounded defect.
The single-purpose transition to `STATE-00-FIXED` changes only the relevant
boundary behavior and makes that check pass. Record the failing assertion,
focused command, fix diff, and passing command when implemented. Do not
combine this correction with the Performance change.

## Project Rules

When introduced at STATE-01, `AGENTS.md` should contain only
short, stable Project instructions needed by multiple tasks, such as the
documented entry point, output contract, dependency policy, and requirement
to verify changes. It should route to detailed Project sources where useful;
it is not a duplicate README, test framework manual, or dumping ground.

Use project-specific facts only after confirming them in the implemented
repository. Avoid universal or overbroad rules such as always running the
full benchmark or never modifying a module.

## Context Evolution

- STATE-00 has no `AGENTS.md`, reusable workflow, or durable facts.
- STATE-00-FIXED changes only the boundary bug and its focused regression
  evidence; `AGENTS.md` and reusable guidance are still absent.
- STATE-01 adds concise project instructions after the Story establishes
  repeated Project context. It is recorded at commit `14baf817` / tag
  `STATE-01`.
- STATE-02 grows `AGENTS.md` with a small, source-checked set of reusable
  Project facts before separating Context. This sequence is selected by the
  user's latest STEP 07 instruction and recorded in DEC-0013; it supersedes
  the earlier downstream plan to add Project documents and a Router at
  STATE-02. Do not manufacture filler, a model failure, or a line-count goal.
- STATE-03 is the Context Separation transition: keep core rules
  concise and route task-relevant detail to maintained Project sources.
- Later tasks demonstrate selective retrieval rather than reading all
  available context.

Exact file content and product instruction-discovery behavior depend on
OQ-005 and the chosen interface.

## Reusable Workflow

TRIAL-006 (`resize_nearest`) and TRIAL-007 (`normalize`) observed the same
performance procedure on distinct code paths. The accepted reusable workflow
is a small performance investigation:

`Baseline → inspect → plan → implement → functional test → benchmark
→ compare → review`

Keep project facts (for example, current commands) separate from the
repeatable work procedure. At STATE-04, the sole repository-owned procedure
is `.agents/skills/graypipe-performance/SKILL.md`, using the current Codex
Skill format. Do not create a parallel `workflows/performance-investigation.md`
or duplicate the procedure in another workflow document. Current OpenAI
documentation describes Skills as reusable workflows and supports repository
Skills under `.agents/skills`; it also describes name/description discovery
followed by loading the full `SKILL.md`. TRIAL-008 observed repository Skill
discovery and instruction loading in Codex CLI 0.154.0. Codex Desktop behavior
remains unverified; details and evidence limits are in
`plan/DEMO_MATRIX.md`.

This decision means the repeated procedure is separated from a task-specific
Prompt. It does not claim that Skills are superior to Prompts. Keep repository
facts and commands in `AGENTS.md`, `README.md`, and maintained Project docs;
keep the repeatable procedure in the Skill; put the specific task goal,
constraints, and acceptance criteria in the task Prompt.

At STATE-04, the Skill establishes the baseline and verification sequence.
Applying it to the selected measured bottleneck produces STATE-04-PERF; the
Skill itself does not change in that transition.

## Subagent Scenario

**Conditional conceptual candidate, deferred in the primary Demo by
DEC-0018:** a sufficiently complex task could divide one connected
performance investigation into independent architecture, performance, and
test questions. Main-agent synthesis would reconcile results and show
coordination/integration cost. Current candidates A/B/C are manageable by one
Agent, so do not implement or present this as an observed primary-Demo event.
If an actual future task crosses the complexity gate, use a visual or
captured external/conceptual case unless a Trial validates the selected
product surface.

## Durable Knowledge Scenario

**Conditional conceptual candidate; not justified yet at STATE-04:** retain
one verified Project fact with its source, scope, and freshness condition,
then use it in a later task only if a Trial establishes costly rediscovery
that current Sources of Truth do not readily resolve. Keep these distinct:

- Repository-owned durable Project documentation.
- Any Codex/ChatGPT product Memory mechanism, if current and available.
- The Project's Sources of Truth.

Show where the knowledge came from and how it should be refreshed or retired.
Do not imply product Memory is complete, universal, or a replacement for
maintained Project documentation.

The previously considered candidate was the synthetic image workload's
parameters and refresh trigger. The §§181–190 audit found these recoverable
from the benchmark scripts, README, and dated Trial evidence, and found no
cross-task rediscovery cost. Do not retain them as Memory at this State.

**Conditional temporal staleness candidate:** only if a later Trial justifies
a durable fact and its STATE-06 record is explicitly authorized, record the
fact's source, scope, and actual verification date. For an optional later-task visual/captured case,
show an explicitly later session after a separately identified change to the
synthetic image workload or generator. Compare the dated note with the
current Project evidence, then refresh or retire it. The interval and changed
conditions make the freshness question visible; elapsed time alone does not
make an unchanged fact false. Keep this supporting case separate from the
primary STATE-08/09 stale-workflow Failure, whose sole stale artifact remains
the repository-owned performance Skill. Do not imply product Memory behavior, create a second
Live failure, or present the controlled timeline as production history. This
candidate remains optional until a Trial shows it is natural and clear. No
STATE-06 or Memory artifact is created by the current assessment.

## Harness Components

Introduce only the components that solve a visible need and only when the
target product supports or can fairly illustrate them:

- Instructions and routed Project Context.
- The repository-owned performance Skill.
- Optional role separation.
- Optional durable Project knowledge.
- Available tools/environment and least-necessary permission.
- Verification and a small evaluation/regression set.

This list is not a required product feature checklist.

## Project Evolution

**Evolution candidate:** after a working Harness is demonstrated, make one
documented Project Test-layout or Test-procedure change for a clear
Project-level reason. Update the authoritative Project source, but leave
exactly one previously correct repository-owned performance Skill stale. The
documented need explains why the Project changed; the controlled history
explains that the reusable Skill was outside the change scope and no
freshness check detected it. Keep that single Harness maintenance gap
transparent; do not hide a rule from the Agent or present the designed
history as a real incident.

Choose the test framework and any additional dependency based on Demo
stability and readability. The old/new layout, commands, and stale failure
must be settled and verified in STEP 07. The failure must come from the stale
Skill procedure, not missing dependencies or a broken environment. Prefer this
small, visible Test change over a build-system migration whose setup or
terminology becomes the lesson.

## Stale Harness Scenario

Candidate A is the primary proposal: a formerly correct reusable Test
procedure runs an old command or test location after a documented Project
change.

Required evidence chain:

1. Show the artifact was correct for the earlier state.
2. Show the Project changed and its current source-of-truth documents say so.
3. Show the reusable artifact was not updated.
4. Use a natural task; do not prompt the Agent to fail.
5. If recurrence was not observed, label captured tasks as a designed
   controlled history, not real incidents.
6. Allow a task-level correction, then explain why it does not repair the
   reusable artifact.
7. Inspect repository instructions, current Project docs, reusable
   procedure, and environment before forming a cause hypothesis.
8. Update the implicated artifact layer. Avoid duplicating the same command
   in `AGENTS.md` if the stale component lives in the reusable
   workflow.
9. Rerun the same task and use the representative Evaluation set.
10. Check that the correction did not overreach into unrelated tasks.

Benchmark staleness, architecture knowledge, stale rules, and Memory
staleness remain conditional conceptual candidates, not current primary-Demo
requirements. Memory staleness is deferred because no qualifying durable fact
or Memory artifact exists. None is combined into the Primary Anchor.

## Evaluation Tasks

Keep this small course evaluation set understandable; it is not an Agent
benchmark:

| ID | Task | Expected evidence |
|---|---|---|
| EVAL-01 | Bug fix, `STATE-00` → `STATE-00-FIXED` | Investigate first; show the failing boundary regression, scoped fix, and passing regression. Preserve the observed evidence for later Harness evaluation. |
| EVAL-02 | Performance task, `STATE-04` → `STATE-04-PERF` | Record a baseline, preserve functional output, use the performance procedure, and compare measured results. Preserve the observed evidence for later Harness evaluation. |
| EVAL-03 | Small refactor at `STATE-11` | Stay within scope, run relevant checks, and avoid an unnecessary full benchmark. |
| EVAL-04 | Documentation-only change at `STATE-11` | Avoid an unnecessary Build or benchmark; use only checks warranted by the change. |

Assess outcome evidence and appropriate choices, not a required sentence or
one exact tool sequence.

## Regression Scenario

Use EVAL-03/EVAL-04 as negative checks for an overbroad proposed Harness rule,
such as “always run the full benchmark.” EVAL-02 may still improve while a
documentation-only task becomes needlessly expensive. The lesson is to test
representative adjacent work before keeping a system change, not that rules
are inherently bad.

A second captured option is a rule that prevents modifying a module that a
valid later task needs. Prefer one compact regression case; do not add two
separate Live Demos.

## Verification Chains

Keep four chains independently inspectable; do not combine the Bug fix and
Performance optimization into one change:

| Chain | Input state | Required sequence | Evidence / destination state |
|---|---|---|---|
| Initial Bug | STATE-00 | Focused regression exposes a candidate crop-boundary defect → change only that boundary behavior → focused regression and related Test checks pass. | Assertion, command, small diff, passing output → STATE-00-FIXED. |
| Performance | STATE-04 | Record baseline → inspect and plan → optimize an evidence-backed repeated pixel operation/allocation/transformation → run correctness tests and compare identical output → repeat and summarize benchmark. | Input parameters, machine/runtime, observations, summary, output-equivalence evidence → STATE-04-PERF. |
| Reusable workflow | STATE-04 | Follow the repository-owned performance Skill on a bounded task → observe whether it produces task-appropriate checks. | Skill source, relevant Test output, benchmark record, and review; no fixed Agent wording required. |
| Harness change | STATE-09 | Observe the stale Skill's nonzero failure → inspect current Project docs, Skill, rules, dependencies, and environment → identify the stale Skill as the sole cause → update that artifact → rerun the same task and evaluate EVAL-03/04. | Failure output, cause evidence, scoped Skill diff, same-task rerun, EVAL-03/04 regression evidence → STATE-10/STATE-11. |

The EVAL-01/02 captures are produced at their named transitions and prove the
separate Bug and Performance chains; they are not substitutes for evaluating
the later Harness change. At STATE-11, rerun the same stale-workflow task
after the procedure is repaired, then review EVAL-03/04 as the adjacent-task
and scope regression checks. Do not imply that earlier Bug or Performance
tasks occurred again during the Harness evaluation.

## State Model

STATE-00 is implemented at commit `22e7e2f` and tag `STATE-00`.
`STATE-00-FIXED` is recorded at commit `6dab644` and its matching tag.
`STATE-01` is recorded at commit `14baf81746a981d7cd96b7a014ea06f28c3dd6b4`
and tag `STATE-01`; its bounded Codex CLI first-success trial passed.
`STATE-02` is recorded at commit
`55c045523ed1409449d7eea5b0d873983fe101b6` and tag `STATE-02`. Its commit
contains only root `AGENTS.md`; full tests, CLI smoke, and diff checks passed.
TRIAL-004 passed as one bounded Codex CLI observation. STATE-03 and
TRIAL-005A/005B are recorded in `plan/DEMO_MATRIX.md`. `DEC-0014` is ACCEPTED.
STATE-03 is at commit `f3e2e37b1454e28c5de4c44682ebd49378ebae4b` and tag
`STATE-03`; no remote push was performed. Later states remain proposed.
Full per-state fields are in the table and reset requirements follow it.

The resize benchmark tool is recorded at commit
`cef7a27697d38667530fe028e7c2a1ed4703714b`, after the `STATE-03` tag. The
statistics benchmark and its README entry are recorded in the separate
preparation commit `4ad32b9175055818e89b66e6a44d4e3c8d6fab4b`.
Neither is a separate State. STATE-04 is the reusable performance Skill,
recorded in commit `822f1c12c5f602d934a2fd29e48f05bf498b4bfa` and tag
`STATE-04`; as of this State checkpoint, STATE-04-PERF remained the later
product optimization and the Trial's statistics change was still in its
disposable workspace. The later §§191–200 record below advances the product
to STATE-04-PERF. No Demo remote is configured, so no commit was pushed.

| State | Purpose / code state | Project docs | Agent instruction / Harness | Expected Demo and transition |
|---|---|---|---|---|
| STATE-00 | Implemented baseline CLI at tag `STATE-00`; documented half-open crop contract has one focused, observed failure. | README, local P2 input/output contract, and Build/Test setup. | No `AGENTS.md`, Skill, Memory, Subagent, or evaluation layer. | Explore the repository and trace a path; inspect the small grayscale boundary case. Transition: correct the bounded defect. |
| STATE-00-FIXED | Commit `6dab644`; changes only the half-open crop boundary. | Existing README and source contract remain authoritative. | Still no `AGENTS.md` or reusable workflow. | Focused/full Tests and CLI smoke pass. Transition: repeated Project facts become visible. |
| STATE-01 | Product code unchanged from `STATE-00-FIXED`; commit `14baf81746a981d7cd96b7a014ea06f28c3dd6b4`, tag `STATE-01`. | Existing README and source contracts remain authoritative; the README Trial edit was not included. | Add only concise root `AGENTS.md`; TRIAL-003 passed in one isolated Codex CLI run. No other Harness component. | A README task Prompt omitted the test command; Codex used the command from `AGENTS.md`. Desktop behavior remains unvalidated. Transition: context grows. |
| STATE-02 | Product code remains unchanged from `STATE-01`; commit `55c045523ed1409449d7eea5b0d873983fe101b6` and tag `STATE-02`. Required checks passed. | No Demo Project documentation changed. | Commit contains only root `AGENTS.md` with verified Architecture, Image Contract, Testing, and Compatibility facts, per DEC-0013. No Context separation, Workflow, or Skill. | TRIAL-004 completed in a temporary Codex CLI checkout; the build-documentation task did not need image/pipeline/test/CLI details. No push. |
| STATE-03 design | Baseline is recorded STATE-02; product code, tests, and dependencies remain unchanged. | The accepted topic documents organize the STATE-02 details by topic. | Small always-on root `AGENTS.md` plus task Router, per accepted `DEC-0014`. | TRIAL-005A/005B observed selective image-contract access with broader architecture reads and repeated-run variance. See `plan/DEMO_MATRIX.md`. |
| STATE-03 | Commit `f3e2e37b1454e28c5de4c44682ebd49378ebae4b`, tag `STATE-03`; product code, tests, dependencies, and README unchanged. | `docs/architecture.md`, `docs/image-contracts.md`, and `docs/testing.md`. | Separate always-on rules from routed Context. `DEC-0014` is ACCEPTED. | Context routing evidence recorded. Transition: consistency of process remains unsolved. |
| STATE-04 | Commit `822f1c12c5f602d934a2fd29e48f05bf498b4bfa`, tag `STATE-04`; product code, tests, dependencies, and benchmark inputs unchanged. | Keep current Build/Test/Benchmark facts in maintained Project sources. | Commit adds only `.agents/skills/graypipe-performance/SKILL.md` as the sole repository-owned reusable procedure; do not duplicate it in a workflow document. | Full tests 11/11, CLI smoke, resize/statistics benchmark guards, `git diff --check`, and structure validation pass. No remote push. Transition: apply the procedure to a measured hot path. |
| STATE-04-PERF | DEC-0019 changes only `image_statistics`: remove the flattened temporary pixel list and use row-level built-in reductions; preserve output. | Record input parameters, commands, host/runtime, samples, allocation peak, and comparison. | No Harness artifact changes in this transition. | Focused/full tests, statistics and resize benchmark guards, CLI smoke, and diff review pass; tag `STATE-04-PERF`. Transition: investigate a real Project Evolution that may stale a correct Skill. |
| STATE-05 | Conditional only; product code remains unchanged from STATE-04-PERF. | Document role boundaries only if a real task establishes independent roles. | Optional role separation artifact/config; currently deferred by DEC-0018 because Subagents are not justified at STATE-04. | Reassess only after actual task complexity crosses the role-separation gate; otherwise do not create this state to demonstrate a feature. |
| STATE-06 | Conditional only; no Memory artifact is currently justified. | Add a sourced, scoped, freshness-aware durable fact only if a later Trial establishes costly cross-task rediscovery. | Repository documentation remains distinct from product Memory. | Reuse and refresh one qualifying fact only after it passes the seven-part gate; otherwise keep the distinction conceptual and omit an implementation state. |
| STATE-07 | Known-correct baseline and performance change; current workflows and checks agree. | Current commands and verification are documented. | Working Harness; each included component has a reason. | Demonstrate a bounded working task. Transition: Project changes. |
| STATE-08 | Project Test layout or procedure changes once for a documented need. | Authoritative Test source and current Project procedure are updated. | Leave the earlier-correct repository-owned performance Skill as the one stale artifact, visibly and transparently. | Introduce the Project change. Transition: a later task can encounter stale information. |
| STATE-09 | Same Project commit as STATE-08; the stale Skill produces a visible failure in the prepared environment. | Project source of truth is current and agrees with its Test layout/procedure. | Only the repository-owned performance Skill is stale; other rules, dependencies, and environment are current. | Show the controlled failure and its output; investigate cause. Transition: repair the implicated Skill. |
| STATE-10 | Project code remains unchanged from STATE-09 when the evidence identifies only a stale Skill. | Current Project docs remain authoritative. | Repair only the implicated Skill; remove needless duplication. | Rerun the same task and inspect the scoped diff. Transition: validate the system change. |
| STATE-11 | Final proposed stable code state. | Current docs, commands, and expected outputs agree. | Evaluation and regression cases are ready. | Rerun the same stale-workflow task, then EVAL-03/04; retain EVAL-01/02 as evidence for their separate chains. |

`STATE-05` and `STATE-06` are conditional states, not mandatory feature steps.
The current Trial audit does not pass either gate. Do not create these states
now; continue from the last justified State only when the next State's own
acceptance conditions are met. Never add an empty State to preserve numbering.

Each state record must include Purpose, Code State, Project Docs State,
Instruction State, Harness State, Expected Demo, Transition from Previous,
and Reproduction. The transition audit separates the initial bug fix
(`STATE-00-FIXED`) from `AGENTS.md` introduction, and the product performance
change (`STATE-04-PERF`) from reusable Skill addition. The stale-state
transition changes the Project Test procedure once; the subsequent observed
failure changes no Project code or environment. STATE-09 is restored by
checking out the STATE-08 Project commit in a clean disposable checkout and
rerunning the recorded task against the still-stale procedure; its observed
failure is a run record, not a new Project commit.

For every row, Reproduction means: select that state's commit/tag, restore a
clean working tree from a fresh or disposable checkout, use the recorded
prepared dependency/runtime state, confirm the known Test result, and confirm
the Benchmark input/state if that Demo uses one. Store the actual commit/tag,
dependency identifier, known result, and reset command in its Runbook entry.
The candidate reset is to check out the recorded state ref in a fresh or
disposable checkout, never to depend on manual edits made during the prior
Demo. Exact refs, reset commands, dependency identifiers, and results are
implementation outputs. STATE-00 now has a verified tag and reset command;
later STATE identifiers remain logical labels until implemented. A
transition changes one principal concept; preparatory changes are documented
rather than hidden.

## Git State Strategy

Use one linear Git history with one reviewable commit for each meaningful
Project transition. STATE-00 uses commit
`22e7e2f806de2419b0df649107bbae14dea082eb` and tag `STATE-00`.
`STATE-00-FIXED` uses commit `6dab644ea53e899e6d65b70bc4383bd2901ded89`
and tag `STATE-00-FIXED`. Continue using state tags as Demo reset anchors and
store exact refs and reset commands in each Runbook record. STATE-09 reuses
STATE-08's commit and adds a captured execution record. Avoid a branch per
state. The strategy remains subject to classroom reset stability.

Before each run, record state identifier, commit/tag, clean working-tree
status, dependencies, known Test result, and benchmark input/state. Prepare
the checkout before class; do not depend on a complicated mid-Demo branch
operation. STATE-00 was reset with the disposable-worktree command recorded
in its evidence section. The STATE-00-FIXED tag was checked out in a fresh
detached worktree and its full Test suite passed. Exact refs and reset
commands for later states remain TBD until those states exist. The Demo
repository has no configured remote, so its local state refs are not pushed.

Every Git history explanation must say that this is a training-designed
Project evolution. Never make it appear to be production history.

## Cross-platform Requirements

- Prefer source-level compatibility with macOS, Windows/WSL, and Linux.
- Use the current macOS host for development and suitable automated
  validation; this is not the target learner environment.
- The learner audience is primarily Windows-based. Keep WSL/native Windows
  proportions, IDE, shell, and exact Codex interface open under OQ-003 until
  confirmed.
- Keep the Demo design OS-independent where practical. A full OS validation
  matrix is not required now; recheck the Final Anchor in the actual
  presentation interface during Final Demo Rehearsal and consider Windows if
  confirmed as the training environment.
- Pin or record the language runtime and any package/build/test versions used
  in a run.
- Do not make shell behavior, path separators, locale, or line endings the
  central Story.
- Do not promise bit-for-bit benchmark equivalence across machines.

## Demo Runtime Requirements

| Field | Current value |
|---|---|
| Recorded development / validation host | macOS 26.6.2 / arm64; benchmark values describe this host only |
| Learner target environment | Primarily Windows; WSL/native split, IDE, shell, and exact Codex interface remain open under OQ-003 |
| Demo portability | OS-independent design where practical; exact Windows/WSL and Linux validation scope remains open for Final Demo Rehearsal |
| Codex interface / account / model | CLI was used for Trials; final presentation interface, account/model details, and feature support remain to be verified under OQ-003/OQ-005 |
| Language runtime | Python 3.9.6 (the validated runtime; broader versions are not validated) |
| Build tool/backend | pip 21.2.4, setuptools 58.0.4, wheel 0.37.0; local wheel build succeeded |
| Test framework | Python standard-library `unittest`; the current STATE-03 baseline passes all 11 tests |
| Benchmark tool | `benchmarks/benchmark_resize.py`; standard library only; three independent invocations passed; details in `plan/DEMO_MATRIX.md` |
| Git | Required |
| Network | None during core Demo is the goal; pre-provision any package tools |
| External services / credentials | None |
| Data | ASCII PGM (`P2`) fixture `data/sample.pgm`; SHA-256 `c0aac885c30fb17d92cbfa1936205fcf36b0f14598a65354ffec1f8a5bdc44ff` |
| Setup / reset time | TBD after a clean-machine Trial and rehearsal |

## Constraints

- Core Demo can be run from a local repository with no production access.
- Dependencies are few, pinned, and prepared before class.
- No package download is required while presenting the core Demo.
- Tests and expected outputs are deterministic; Agent behavior is not claimed
  to be deterministic.
- Functional output is checked independently of performance.
- Each command and output is short and readable on a projected screen.
- Permission is limited to the local Demo environment and required commands.

## Explicit Non-goals

- Building a production-quality application or a large domain feature set.
- Demonstrating the highest possible performance optimization.
- Teaching Python, C++, Vision algorithms, pytest, or another toolchain as a
  course objective; short C++ Vision transfer bridges remain in scope for
  later Curriculum/Slide work.
- Teaching a multi-agent framework or implementing a Memory framework.
- Giving a benchmark-methodology course.
- Forcing an Agent to fail or installing every available product feature.
- Requiring participants to implement every stage of the Demo Harness.
- Treating the Demo repository as the Training Production Harness.

**Primary goal:** make Prompt → Context → Harness → Loop Engineering
evolution observable in one understandable software Project.

## STEP 07 Implementation Record — STATE-00

**Status:** The STATE-00 baseline remains implemented and reset-checked.
TRIAL-001 observed read-only repository exploration and TRIAL-002 observed a
bounded crop fix through Codex CLI. That fix was then revalidated and recorded
as `STATE-00-FIXED` in the following state record. STATE-01 has not started.
The selected Desktop Anchor path, repeatability, and fallback remain pending.

**Repository:** `/Users/noah/workspace/education/ai-dev-training-demo`, an
independent Git repository. No remote is configured; the remote URL remains
unselected.

**Baseline design:** Python package `graypipe` with a console entry point;
ASCII PGM input/output; standard-library processing and tests; no runtime
dependencies. The pipeline loads an image, normalizes its declared range to
255, optionally inverts, optionally crops/resizes, writes output, and reports
basic statistics. The source tree contains no `AGENTS.md`, Skill, Subagent,
Memory record, project workflow, or Evaluation framework.

**Dependency observation:** DEC-0011 listed Python + NumPy as an initial
direction to consider. STATE-00's small operations and tuple-based PGM path
did not require NumPy, OpenCV, or an external test runner; the standard
library keeps setup local and the initial source easier to inspect. Revisit
additional dependencies only if a later measured workload needs them. This
is an implementation choice within the accepted direction, not a change to
the Story or an invariant.

**Build:** On macOS 26.6.2 arm64 with Python 3.9.6, pip 21.2.4, setuptools
58.0.4, and wheel 0.37.0, the documented wheel command succeeded and created
`ai_dev_training_demo-0.1.0-py3-none-any.whl`. The wheel was installed from a
local file without dependency downloads, and the installed `graypipe` command
returned the expected JSON summary for the sample image. The output PGM
contained the expected normalized pixel values. Two fresh same-source builds
also succeeded. Their archive hashes differed
(`99df35f5d186772f812f95ae4ffe2dd7a03a0d80081252ecc446e7cce39632b7` and
`d49b82f9d4f94c20b53ccc5fa96897773bb1158f1a8f7f907a1d02cf063939a6`); every
wheel member had matching size and CRC, while generated `.dist-info` ZIP
timestamps differed. The Git state, not the wheel archive hash, identifies
the source baseline; byte-for-byte reproducible wheel packaging is not
established.

**Tests:** `PYTHONPATH=src python3 -m unittest discover -s tests -v` ran 11
tests. Ten passed. The single failure,
`test_crop_excludes_end_coordinate`, observed `((2, 3, 4), (6, 7, 8))` where
the half-open contract expects `((2, 3), (6, 7))`. This is the specified
STATE-00 defect, not a hidden pass. The other ten tests passed separately.

**Functional command:** `PYTHONPATH=src python3 -m graypipe.cli --input
data/sample.pgm --output /tmp/graypipe-output.pgm` exited 0 and reported
width 4, height 3, 12 pixels, minimum 0, maximum 255, and mean 131.75.

**State reference and reset:** commit
`22e7e2f806de2419b0df649107bbae14dea082eb`, tag `STATE-00`. The disposable
reset command `git worktree add --detach
/tmp/ai-dev-training-demo-state-00 STATE-00` restored a clean checkout. The
known Test result and functional command matched the original checkout; the
temporary worktree was then removed.

**State Gate:**

| Gate | Result | Evidence / limit |
|---|---|---|
| IMPLEMENTATION | PASS | Only the initial CLI, local fixture, tests, and minimum package metadata were added. |
| FUNCTIONAL | PASS | Local CLI produced the expected 4×3 normalized PGM and summary. |
| TEST | MATCHES EXPECTED BASELINE | Ten checks pass; the specified crop-boundary contract check fails visibly. |
| DEMO | PASS for the baseline Project; TRIAL-001/002 PASS in Codex CLI | The local pipeline, bounded exploration, and isolated crop-fix run are observable. Codex Desktop/account behavior remains unvalidated; OQ-005 remains open. |
| DIFF | N/A for initial state | STATE-00 is the first commit; its complete file set is recorded above. |
| EVIDENCE | PASS | Commands, outputs, environment, fixture hash, commit/tag, and known failure are recorded. |
| RESET | PASS | A disposable checkout reproduced the same known test result and CLI output. |

TRIAL-001 did not modify Demo code. At TRIAL-002 close, its one-line fix was
verified in an isolated worktree but had not yet advanced the original
repository. Both bounded CLI observations remain recorded in
`plan/DEMO_MATRIX.md`. No performance result, Codex Desktop behavior, or
product-wide capability is claimed.

## STEP 07 State Record — STATE-00-FIXED

**Purpose:** Record only the verified crop-boundary correction after the
STATE-00 bug baseline. No project instruction or Harness component is added.

**Previous state:** `STATE-00`, commit
`22e7e2f806de2419b0df649107bbae14dea082eb`; its tag remains unchanged.

**Code state:** `src/graypipe/transform.py` now slices each row up to, but not
including, `x_end`, implementing the documented `[x_start, x_end)` contract.
This is the only changed file and the diff is one insertion/one deletion.
No public API or dependency changed.

**Project docs state:** Existing README and source contract remain unchanged;
the README accurately describes the known failure at the historical
STATE-00 baseline. No `AGENTS.md`, reusable workflow, or evaluation layer is
present.

**Instruction / Harness state:** unchanged from STATE-00; no `AGENTS.md`,
Skill, Memory, Subagent, or workflow was introduced.

**Verification:** On macOS 26.6.2 / arm64 with Python 3.9.6, the focused crop
test passed 3/3, the full suite passed 11/11, and the CLI crop smoke test
exited 0. The output was 2×3 with six pixels, mean 136.0, minimum 51,
maximum 255, and decoded pixels `((51, 102), (255, 153), (51, 204))`.
`git diff --check` passed. A fresh detached checkout of the tag passed all
11 tests and was clean after verification. Exact commands and the Trial
history are in `plan/DEMO_MATRIX.md`.

**Git record:** commit `6dab644ea53e899e6d65b70bc4383bd2901ded89`,
`fix(graypipe): exclude crop end coordinate`; lightweight tag
`STATE-00-FIXED` points to that commit. The main worktree is clean. No remote
is configured and no push was performed.

**Expected Demo / transition:** Show the failing assertion at STATE-00,
followed by the one-line fix and passing checks at STATE-00-FIXED. The next
Story problem is repeated Project Context across otherwise well-specified
tasks; introduce no `AGENTS.md` until STATE-01.

**Reproduction:** Check out tag `STATE-00-FIXED` in a fresh detached
worktree, then run `PYTHONPATH=src python3 -m unittest discover -s tests -v`.
This exact tag reset was checked during this state recording and passed 11/11.

## Open Questions

- OQ-001: repository direction, local sibling path, and STATE-00 module
  structure are implemented; later state details remain subject to actual
  implementation evidence.
- OQ-002/OQ-014: not required for the selected synthetic local repository;
  revisit only if the direction introduces external/internal sources or
  company-specific claims. Choose a license before public sharing.
- OQ-003: DEC-0016 sets macOS as the current development/partial validation
  host and the learner environment as primarily Windows-based. WSL/native
  proportions, IDE, shell, and exact Codex interface remain open. OQ-005
  retains account, permission, product-feature, and Live-path checks; the
  Final Anchor is revalidated during Final Demo Rehearsal.
- OQ-007: STATE-00 package, Build, Test runner, commands, and baseline result
  are recorded above. Benchmark method, workload, and later verification
  examples remain open until their states are implemented and measured.
- OQ-008: DEC-0017 selects a repository-owned Codex Skill for the performance
  workflow; TRIAL-008 observed explicit discovery, invocation, instruction
  loading, and workflow reuse in Codex CLI 0.154.0. Codex Desktop behavior
  remains unverified. DEC-0018 defers Subagents at STATE-04; the §§181–190
  audit finds Memory not justified yet. Revisit either only if later task
  evidence passes its gate.
- OQ-009: fair recurrence representation and bounded evaluation criteria.
- OQ-013: whether real history in the training repository supports an
  optional Meta Example.

The repository-owned performance Skill was recorded in local commit
`822f1c12c5f602d934a2fd29e48f05bf498b4bfa` and tag `STATE-04`. At that State,
TRIAL-008 had passed on Codex CLI 0.154.0 in a disposable workspace, and its
statistics optimization had not yet been copied to the original Demo. The
statistics baseline was committed separately from the Skill. DEC-0018 defers
Subagents; the Trial-history audit finds Memory not justified yet. The
bounded TRIAL-001/002 CLI observations are not generalized to Codex Desktop
or other accounts.

## STEP 07 — §§191–200 STATE-04-PERF Implementation Record

The user selected the TRIAL-008 `image_statistics` candidate for the formal
STATE-04-PERF transition. DEC-0019 records that direction and supersedes only
DEC-0015's earlier product-change target; the resize benchmark and its
preparation history remain intact. The implementation was re-investigated
from STATE-04 rather than copied without review.

**Product change:** `src/graypipe/statistics.py` removes the flattened pixel
list, derives `pixel_count` from the validated dimensions, and applies
row-level built-in reductions for minimum, maximum, and sum. The public
function, six summary fields, CLI output, input contract, dependencies,
benchmark inputs, and repetition counts remain unchanged.

**Baseline:** STATE-04 commit/tag `822f1c12c5f602d934a2fd29e48f05bf498b4bfa` /
`STATE-04`. On CPython 3.9.6 / macOS 26.6.2 arm64, the statistics benchmark
used a deterministic 1024×768 image (786,432 pixels, max 255), input SHA-256
`26df8e7b296672840d97cf5d9273e6660003afd680c62c7751d382c2d067fec9`, and
seven one-call samples. The six-field correctness guard passed. Samples were
16.341, 16.052, 15.134, 15.529, 15.468, 15.014, and 15.360 ms/call; median
15.468 ms/call; range 15.014–16.341 ms; traced Python allocation peak
6,675,804 bytes; invocation 0.28 s.

**After:** the same command, input, host/runtime, repetitions, and guards
passed. Samples were 10.910, 11.237, 10.234, 10.042, 11.204, 10.769, and
10.581 ms/call; median 10.769 ms/call; range 10.042–11.237 ms; traced Python
allocation peak 380 bytes; invocation 0.24 s. The observed median difference
was −4.699 ms/call (about 30.4% for this workload); the traced allocation
peak decreased by 6,675,424 bytes (about 99.994%). These values describe this
measurement only; the allocation peak is not process RSS, and no TRIAL-008
percentage was reused as a target.

**Verification:** the focused statistics test passed 1/1; the full suite
passed 11/11; the statistics benchmark verified its input fingerprint and all
six fields; the resize benchmark verified its input and output fingerprints;
the CLI sample crop returned 2×3, six pixels, mean 136.0, minimum 51, maximum
255 and matching output pixels; `git diff HEAD^ HEAD --check` passed; final
review found only the intended source file changed. The resize medians were
148.9 ms/call before and 152.6 ms/call after, with overlapping one-invocation
ranges; no resize performance conclusion is drawn.

**Git:** product-only commit `6153b81c0187dd7d82c88bd1817fb683c98eb431`,
`perf(statistics): remove flattened pixel allocation`; lightweight tag
`STATE-04-PERF` points to it. `STATE-04` remains at its original commit. No
remote is configured and no push was made. Complete individual samples,
commands, audit, and claim boundaries are in `plan/DEMO_MATRIX.md`.
