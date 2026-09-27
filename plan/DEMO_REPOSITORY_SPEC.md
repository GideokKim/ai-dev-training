# Demo Repository Specification

> Status: **Selected direction; implementation and Demo trials remain for STEP 07**
>
> Date: 2026-09-27
>
> This document specifies the selected Demo direction; it does not create the
> repository or claim an Agent Demo trial. The selected local path is
> `../ai-dev-training-demo`, relative to the `ai-dev-training` repository
> root. Current product capability and account behavior remain subject to
> OQ-005.

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
algorithms the subject of the training. Exact module structure and data
representation remain TBD for STEP 07.

## Language

**SELECTED:** Python. The purpose is to lower Code and Repository
comprehension cost so the audience can focus on Agent behavior, repository
investigation, Prompt, Context, workflow, Verification, Harness, and Feedback
Loop. It is not a claim that Python is better than C++ or more suitable for
AI development.

Keep dependencies minimal. Python + NumPy is the initial dependency
direction. Add OpenCV only if a demonstrated Story need justifies it without
adding undue API complexity. Choose test dependencies, including pytest if
considered, based on stability and readability. Exact runtime versions,
package/build choices, and dependencies remain for STEP 07.

## Why This Domain

- Grayscale input, simple normalization/filtering, resize/transform, and
  basic statistics are visually intuitive without specialist Vision theory.
- A small image-processing path can provide repository structure, a bounded
  correctness case, and a performance investigation while the same Project
  evolves through Context and Harness states.
- Synthetic local inputs avoid external services, credentials, and data
  licensing dependencies.
- A later justified test-layout or test-procedure change can leave one
  previously correct reusable procedure stale, preserving the Loop Story.

Avoid complex Computer Vision algorithms, Deep Learning inference, CUDA/GPU
kernels, camera calibration, stereo vision, 3D reconstruction, complex
OpenCV pipelines, and professional image-quality metrics. If implementation
details require explaining Vision techniques, reduce the operation rather
than expand the course domain.

## Why This Language

Python is selected to make Code and Repository structure quicker to
understand during a six-hour AI Engineering course. C++ Vision transfer is a
future teaching bridge; C++ code is not required in this Demo repository.
Implementation setup and packaging decisions remain open for STEP 07.

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
This records the local checkout location only; it does not select a remote or
authorize repository creation before STEP 07 starts.

## Repository Architecture

**Conceptual shape only; exact module structure is a STEP 07 decision.** The
repository should remain a small Python CLI and include local synthetic
image input/output, a few traceable processing stages, tests, benchmark
support, Project documentation, and a reusable workflow introduced at the
appropriate Story transition. The following are planning areas, not a final
module or file layout:

```text
ai-dev-training-demo/
├── README.md
├── LICENSE                 # decide before sharing the Demo repository
├── .gitignore
├── docs/
│   ├── architecture.md     # introduced at STATE-02; exact name TBD
│   └── testing.md          # introduced at STATE-02; exact name TBD
├── src/                    # package/module layout TBD in STEP 07
├── tests/
├── benchmarks/
├── data/
│   └── synthetic image inputs or generator; representation TBD
└── workflows/
    └── performance-investigation.md  # introduced at STATE-04
```

This tree is a conceptual outline, not a final module structure or a
requirement to create every directory in STATE-00. Files that teach a later
Harness or workflow concept are introduced at their planned Story transition.
Do not create a workflow file, `AGENTS.md`, Skill, Memory record, Subagent
configuration, or Evaluation framework in the initial state.

## Module Responsibilities

Keep the conceptual processing stages easy to trace from local image input
to output. Exact module names, boundaries, and responsibilities remain an
implementation choice for STEP 07. Avoid abstractions added only to create
more Context or Subagent examples.

## Entry Point

Provide one concise CLI path through the synthetic image-processing pipeline.
Choose the package name, supported options, and exact invocation in STEP 07;
keep commands short enough to read on a projector.

## Build

Choose a minimal Python package/build path with versions prepared before the
classroom Demo. Record the exact command and environment during STEP 07.
Keep setup local and predictable for the selected macOS/Codex Desktop
validation path. Design for OS independence where practical, but validating
Windows/WSL and Linux is not a STEP 07 requirement. Do not download packages
during a class Demo; prepare dependencies beforehand if they are needed.

## Test

Candidate test layers:

- Unit tests for the selected image-operation contracts and boundary cases.
- One integration check for the local input-to-output pipeline.
- A regression check for the initial Bug and output equivalence after a
  measured Performance change.
- A separate small Harness Evaluation set described below.

Choose the test framework and exact commands in STEP 07 based on stability,
readability, and the selected local environment. Test output should identify
the relevant failing check and expected/actual value clearly enough for a
projected terminal view. Keep the reusable stale-workflow scenario distinct
from a missing dependency or broken environment.

## Performance Scenario and Benchmark

**Candidate scenario, not a selected implementation:** remove unnecessary
pixel-level repeated work, repeated allocation, duplicate normalization, or
a redundant transformation. Select the actual hot path from code inspection
and implementation evidence; do not insert an artificial slow path. The
teaching goal is the workflow:

`Baseline → Investigate → Plan → Implement → Correctness Test → Benchmark
→ Compare`

The task is not Python optimization, NumPy optimization, or vectorization
instruction. Keep the output functionally equivalent across the comparison.

Use deterministic synthetic local image input large enough to expose a real
candidate bottleneck but small enough for the Demo slot. Exact image
dimensions, generator/fixture, operation, repetitions, command, and expected
result are TBD for STEP 07. Record input provenance and a content hash so
both states use identical data. Do not generate or download a benchmark input
during class. Establish the baseline at STATE-04 and, only after verification,
record a measured change at STATE-04-PERF.

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
`STATE-00-FIXED`.

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
  repeated Project context.
- STATE-02 records only verified recurring facts in their natural Project
  sources: the CLI/input-output contract in `README.md`, current Test command
  in the test guide, and module responsibilities in the architecture guide.
  `AGENTS.md` routes to these sources; do not inflate line counts as a
  deterministic model failure.
- STATE-03 keeps concise core guidance and routes task-relevant detail to
  maintained documents.
- Later tasks demonstrate selective retrieval rather than reading all
  available context.

Exact file content and product instruction-discovery behavior depend on
OQ-005 and the chosen interface.

## Reusable Workflow

The candidate repeatable task is a small performance investigation:

`Baseline → inspect → plan → implement → functional test → benchmark
→ compare → review`

Keep project facts (for example, current commands) separate from the
repeatable work procedure. At STATE-04, add the versioned
`workflows/performance-investigation.md` as the repository-owned
procedure and source for Git-history comparison. Use a current Codex Skill or
another product mechanism to invoke/reuse it only after checking official
documentation and the target account. Otherwise, ask the Agent to consult the
repository procedure. Do not require a specific Skill implementation to
teach reusable workflow design.

At STATE-04, the procedure establishes the baseline and verification
sequence. Applying it to the selected measured bottleneck produces
STATE-04-PERF; the workflow file itself does not change in that transition.

## Subagent Scenario

**Supporting candidate, not required for the primary Story:** divide one
connected performance investigation into independent architecture,
performance, and test questions. Main-agent synthesis must reconcile results
and show coordination/integration cost. If the selected product surface,
runtime, or screen complexity is unsuitable, use a recorded/captured result
and role diagram.

## Durable Knowledge Scenario

**Supporting candidate:** retain one verified Project fact with its source,
scope, and freshness condition, then use it in a later task. Keep these
distinct:

- Repository-owned durable Project documentation.
- Any Codex/ChatGPT product Memory mechanism, if current and available.
- The Project's Sources of Truth.

Show where the knowledge came from and how it should be refreshed or retired.
Do not imply product Memory is complete, universal, or a replacement for
maintained Project documentation.

One concrete candidate is the synthetic image workload's known limitation
and refresh trigger: record the verified fixture/generator parameters and
the runtime/toolchain context under which its comparison is meaningful;
refresh the record when those inputs or the benchmark implementation change.
Treat this as a candidate until implementation produces a fact worth
retaining.

**Temporal staleness candidate:** at STATE-06, record the fact's source, scope,
and actual verification date. For an optional later-task visual/captured case,
show an explicitly later session after a separately identified change to the
synthetic image workload or generator. Compare the dated note with the
current Project evidence, then refresh or retire it. The interval and changed
conditions make the freshness question visible; elapsed time alone does not
make an unchanged fact false. Keep this supporting case separate from the
primary STATE-08/09 stale-workflow Failure, whose sole stale artifact remains
the reusable procedure. Do not imply product Memory behavior, create a second
Live failure, or present the controlled timeline as production history. This
candidate remains optional until a Trial shows it is natural and clear.

## Harness Components

Introduce only the components that solve a visible need and only when the
target product supports or can fairly illustrate them:

- Instructions and routed Project Context.
- A reusable performance procedure.
- Optional role separation.
- Optional durable Project knowledge.
- Available tools/environment and least-necessary permission.
- Verification and a small evaluation/regression set.

This list is not a required product feature checklist.

## Project Evolution

**Evolution candidate:** after a working Harness is demonstrated, make one
documented Project Test-layout or Test-procedure change for a clear
Project-level reason. Update the authoritative Project source, but leave
exactly one previously correct reusable performance workflow stale. The
documented need explains why the Project changed; the controlled history
explains that the reusable procedure was outside the change scope and no
freshness check detected it. Keep that single Harness maintenance gap
transparent; do not hide a rule from the Agent or present the designed
history as a real incident.

Choose the test framework and any additional dependency based on Demo
stability and readability. The old/new layout, commands, and stale failure
must be settled and verified in STEP 07. The failure must come from the stale
procedure, not missing dependencies or a broken environment. Prefer this
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
staleness remain supporting candidates; they are not combined into the
Primary Anchor.

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
| Reusable workflow | STATE-04 | Follow the versioned performance procedure on a bounded task → observe whether it produces task-appropriate checks. | Workflow source, relevant Test output, benchmark record, and review; no fixed Agent wording required. |
| Harness change | STATE-09 | Observe the stale workflow's nonzero failure → inspect current Project docs, reusable workflow, rules, dependencies, and environment → identify the stale workflow as the sole cause → update that artifact → rerun the same task and evaluate EVAL-03/04. | Failure output, cause evidence, scoped workflow diff, same-task rerun, EVAL-03/04 regression evidence → STATE-10/STATE-11. |

The EVAL-01/02 captures are produced at their named transitions and prove the
separate Bug and Performance chains; they are not substitutes for evaluating
the later Harness change. At STATE-11, rerun the same stale-workflow task
after the procedure is repaired, then review EVAL-03/04 as the adjacent-task
and scope regression checks. Do not imply that earlier Bug or Performance
tasks occurred again during the Harness evaluation.

## State Model

All states remain proposed and unimplemented. Full per-state fields are in
the table below; exact refs, commands, and reset evidence are STEP 07 outputs.

| State | Purpose / code state | Project docs | Agent instruction / Harness | Expected Demo and transition |
|---|---|---|---|---|
| STATE-00 | Normal small baseline image-processing project with a candidate half-open crop-boundary Bug. | README and local input/output contract. | No `AGENTS.md`, Skill, Memory, Subagent, or evaluation layer. | Explore the repository and trace a path; inspect the bounded grayscale case. Transition: verify and correct the specified defect.
| STATE-00-FIXED | Correct only the candidate crop-boundary behavior; no other product behavior changes. | Record the boundary contract and focused expected result. | Still no `AGENTS.md` or reusable workflow. | Verify failing check → fix → passing check. Transition: repeated Project facts become visible. |
| STATE-01 | Product code unchanged from STATE-00-FIXED. | Existing project sources remain authoritative. | Add concise `AGENTS.md`. | Repeat a small task with less repeated Project explanation. Transition: facts accumulate. |
| STATE-02 | Product code unchanged. | Add only verified Project facts to their natural sources. | Guidance starts routing to relevant facts. | Show Context growth as a labeled state, not a guaranteed model failure. Transition: relevance differs by task. |
| STATE-03 | Product code unchanged. | Separate core instructions from task-specific docs. | Add explicit routes/progressive disclosure pattern. | Compare relevant and irrelevant context. Transition: consistency of process remains unsolved. |
| STATE-04 | Product code remains at the verified baseline. | Add a maintained performance procedure with current Build/Test/Benchmark sources. | Add reusable workflow; product Skill is conditional. | Establish and record the baseline. Transition: apply the procedure to a measured hot path. |
| STATE-04-PERF | Change only the measured repeated pixel work/allocation/transformation candidate; preserve output. | Record input parameters, commands, host/runtime, and comparison. | No Harness artifact changes in this transition. | Verify correctness, then compare baseline and optimized benchmark. Transition: broader task complexity may justify role separation. |
| STATE-05 | Product code unchanged from STATE-04-PERF. | Document role boundaries if useful. | Optional role separation artifact/config. | Supporting role comparison. Transition: useful facts may be rediscovered. |
| STATE-06 | Product code unchanged. | Add one sourced, scoped, freshness-aware durable fact. | Repository knowledge is distinct from product Memory. | Reuse and refresh one fact. Transition: assemble proven useful components. |
| STATE-07 | Known-correct baseline and performance change; current workflows and checks agree. | Current commands and verification are documented. | Working Harness; each included component has a reason. | Demonstrate a bounded working task. Transition: Project changes. |
| STATE-08 | Project Test layout or procedure changes once for a documented need. | Authoritative Test source and current Project procedure are updated. | Leave one earlier-correct reusable workflow stale, visibly and transparently. | Introduce the Project change. Transition: a later task can encounter stale information. |
| STATE-09 | Same Project commit as STATE-08; the stale procedure produces a visible failure in the prepared environment. | Project source of truth is current and agrees with its Test layout/procedure. | Only the reusable performance workflow is stale; other rules, dependencies, and environment are current. | Show the controlled failure and its output; investigate cause. Transition: repair the implicated workflow. |
| STATE-10 | Project code remains unchanged from STATE-09 when the evidence identifies only a stale workflow. | Current Project docs remain authoritative. | Repair only the implicated reusable artifact; remove needless duplication. | Rerun the same task and inspect the scoped diff. Transition: validate the system change. |
| STATE-11 | Final proposed stable code state. | Current docs, commands, and expected outputs agree. | Evaluation and regression cases are ready. | Rerun the same stale-workflow task, then EVAL-03/04; retain EVAL-01/02 as evidence for their separate chains. |

Each state record must include Purpose, Code State, Project Docs State,
Instruction State, Harness State, Expected Demo, Transition from Previous,
and Reproduction. The transition audit separates the initial bug fix
(`STATE-00-FIXED`) from `AGENTS.md` introduction, and the product performance
change (`STATE-04-PERF`) from reusable workflow addition. The stale-state
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
implementation outputs. Until implementation, state identifiers are logical
labels rather than runnable references. A transition changes one principal
concept; preparatory changes are documented rather than hidden.

## Git State Strategy

Use one linear Git history with one reviewable commit for each meaningful
Project transition. Use state tags as Demo reset anchors and store exact refs
and reset commands in each Runbook record. STATE-09 reuses STATE-08's commit
and adds a captured execution record. Avoid a branch per state. The strategy
remains subject to classroom reset stability.

Before each run, record state identifier, commit/tag, clean working-tree
status, dependencies, known Test result, and benchmark input/state. Prepare
the checkout before class; do not depend on a complicated mid-Demo branch
operation. Exact reset commands remain TBD.

Every Git history explanation must say that this is a training-designed
Project evolution. Never make it appear to be production history.

## Cross-platform Requirements

- Prefer source-level compatibility with macOS, Windows/WSL, and Linux.
- Use macOS with the currently used Codex Desktop as the primary
  implementation and validation environment.
- Keep the design OS-independent where practical; STEP 07 does not require
  actual validation on every OS.
- Pin or record the language runtime and any package/build/test versions used
  in a run.
- Do not make shell behavior, path separators, locale, or line endings the
  central Story.
- Do not promise bit-for-bit benchmark equivalence across machines.

## Demo Runtime Requirements

| Field | Current value |
|---|---|
| Primary OS / architecture | macOS; record the exact version and architecture during STEP 07 validation |
| Secondary supported environments | OS-independent design where practical; Windows/WSL and Linux implementation validation is not required at STEP 07 |
| Codex interface / account / model | Current Codex Desktop is selected for primary work; account/model details and feature support remain to be verified under OQ-005 |
| Language runtime | Python; exact supported version to be selected and recorded in STEP 07 |
| Build tool/backend | TBD in STEP 07; prefer a minimal, pinned local setup |
| Test framework | TBD in STEP 07; choose for stability and readability |
| Benchmark tool | TBD in STEP 07; select for a clear, repeatable comparison |
| Git | Required |
| Network | None during core Demo is the goal; pre-provision any package tools |
| External services / credentials | None |
| Data | Synthetic local image; exact representation and fixture to be selected in STEP 07 |
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



## Open Questions

- OQ-001: repository language/domain/location are selected; exact module
  structure, runtime, package setup, and implementation evidence remain for
  STEP 07.
- OQ-002/OQ-014: not required for the selected synthetic local repository;
  revisit only if the direction introduces external/internal sources or
  company-specific claims. Choose a license before public sharing.
- OQ-003: primary environment and Hybrid/Supporting delivery direction are
  resolved by DEC-0011. OQ-005 retains current account, permission, interface,
  feature, and Live-path checks.
- OQ-007: exact Build/Test/Benchmark commands, workload, results, and
  project-specific verification examples remain for STEP 07.
- OQ-008: whether the target surface has a suitable reusable workflow,
  Skill, Subagent, or Memory mechanism.
- OQ-009: fair recurrence representation and bounded evaluation criteria.
- OQ-013: whether real history in the training repository supports an
  optional Meta Example.

No later-state workflow, Skill, Subagent, Memory, benchmark result, or
product-specific Agent behavior is specified as observed. This plan does not
add instructional minutes. Anchor windows consume 40 minutes; supporting
examples, verification visuals, and the recap remain inside the other 33
minutes. Detailed reconciliation is in `plan/DEMO_MATRIX.md`.

Setup performed before class is operational preparation, not instructional
time. Any on-screen setup, execution, observation, interpretation, and
transition during class must fit the current Curriculum section's Demo slot.
Final timing depends on repository and rehearsal evidence. If a slot is at
risk, move a Demo to Recorded/Captured, reduce a supporting example, or remove
duplication before cutting a Story-critical explanation.
