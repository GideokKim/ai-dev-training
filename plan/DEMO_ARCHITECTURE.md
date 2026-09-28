# Demo Architecture

> Status: **Direction/location accepted; STATE-00 and STATE-00-FIXED implemented, verified, and recorded locally; STATE-01 plan defined; later states and Codex Desktop Anchor rehearsal pending**
>
> Date: 2026-09-28
>
> This document turns the approved Story and Curriculum into a Demo design
> proposal. Ratings and candidate outcomes below are planning judgments, not
> measurements from a built or rehearsed Demo repository.

## Purpose

Design a small, reproducible instructor-led Demo system that makes the
training's Engineering evolution observable in one continuing software
Project:

`Chatbot → Prompt → Context → Harness → Loop → AI-Native Development`

The Demo answers a Story question at each transition. It does not organize
the training around a tour of product features or require participants to
bring laptops or perform exercises.

## Governing Sources

- `plan/MASTER_PLAN.md`: Source of Truth for the training identity,
  audience, delivery, Story, and six-hour limit.
- `plan/INVARIANTS.md`: especially
  `INV-NARRATIVE-001/002`, `INV-DELIVERY-001`,
  `INV-DEMO-001–004`, `INV-VERIFY-001`, and
  `INV-RESPONSIBILITY-001`.
- `plan/DECISIONS.md`: `DEC-0011` accepts the repository, language, domain,
  primary implementation environment, and delivery direction; `DEC-0012`
  selects its local sibling path. `DEC-0010` is
  superseded. `DEC-0007` and `DEC-0008` retain their statuses. OQ-001/OQ-003
  are resolved at the STEP 06 planning level; OQ-005 and other implementation
  questions remain governed there.
- `plan/CURRICULUM.md` and `plan/CURRICULUM_MATRIX.md: Demo roles
  and time allocations.
- `plan/STORY_ARCHITECTURE.md`, `plan/STORY_BEATS.md`, and
  `plan/TRANSITIONS.md`: causal sequence and Anchor handoffs.
- Research record: `references/README.md`,
  `references/CLAIMS.md`, `references/product/CAPABILITY_MATRIX.md`,
  and the linked product research. Current product behavior and account
  availability must be checked under OQ-005 before relying on them.

## Demo Philosophy

1. Keep one understandable Project evolving wherever candidate feasibility
   allows it. Keep its Educational Demo Harness separate from the Training
   Production Harness in `ai-dev-training`.
2. Show a plausible developer action that works before its limits become
   visible. Introduce a mechanism only when the Story has established a need.
3. Do not manipulate a Prompt to force a failure, success, command, or product
   feature. Use natural task-level requests and accept reasonable alternate
   paths.
4. Distinguish actual observations from controlled educational states. A
   controlled stale state is labeled as designed for training; it is not
   presented as real project history.
5. After failure, inspect evidence and form a cause hypothesis before changing
   the Harness. Change the layer implicated by the evidence and remove
   unnecessary duplicate guidance where appropriate.
6. Treat a successful command or one successful task as bounded evidence. Use
   a small representative evaluation set and a regression check.
7. Prefer Live only when it has high teaching value and low or medium
   execution risk. Use recorded, captured, visual, or Hybrid delivery where
   they make the Story clearer or more reliable.
8. Keep the Demo useful to both beginners and experienced developers. The
   audience includes many C++ Vision developers, but Python and Vision are
   context for the example, not the course subject; no participant
   hands-on work is required.

## Primary Repository Strategy

### Location and Source Strategy

**Accepted direction (DEC-0011/DEC-0012):** create the purpose-built
`ai-dev-training-demo` repository separately from `ai-dev-training`, at
`../ai-dev-training-demo` relative to the `ai-dev-training` repository root.
In the current workspace this resolves to
`/Users/noah/workspace/education/ai-dev-training-demo`.

| Strategy | Advantages | Risks | Current disposition |
|---|---|---|---|
| Existing repository | Authentic architecture and possibly real recurring work. | Permission, data, and Story-fit review remain necessary; the selected direction does not need outside code or data. | Not selected. |
| Purpose-built repository | Can keep the domain small, use synthetic data, shape incremental states, and label the designed history honestly. | Requires later implementation and validation; designed changes must remain plausible. | Selected by DEC-0011. |
| Hybrid | Could borrow a domain pattern while controlling the teaching repository. | Borrowed code/data add review and may blur which history is real. | Not selected. |

Keep both Harnesses distinct:

- **Training Production Harness:** instructions and planning used to create
  `ai-dev-training`.
- **Educational Demo Harness:** instructions, routed context, reusable work,
  durable project knowledge, verification, and any supported product
  mechanisms used in the separate Demo Project.

The actual training-repository history may become a secondary Meta Example
only if the events really occurred and are recorded. It never replaces the
continuous software Project Story.

### Candidate Comparison

Ratings are relative planning estimates using the STEP 06 priority order:
Story Fit, Audience Readability, Demo Reproducibility, Build/Test Quality,
Benchmark Quality, Context/Harness Evolution, cross-platform feasibility,
implementation effort, and maintenance cost. They are not Trial results.
For effort and maintenance, HIGH means more cost; otherwise HIGH is preferred.
The user selected a Python image-processing Demo for an audience with many
C++ Vision developers; ratings remain unvalidated.

| Candidate | Language / domain / strategy | Story | Readability | Repro | Build/Test | Benchmark | Context | Harness | Loop | Cross-platform | Impl. cost | Maint. cost | Disposition |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| A | Python / synthetic image-processing CLI / purpose-built | HIGH | HIGH | HIGH | TBD | TBD | HIGH | HIGH | HIGH | HIGH | LOW–MEDIUM | LOW–MEDIUM | SELECTED by DEC-0011; planning ratings only |
| B | C++ / small synthetic image-processing CLI / purpose-built | HIGH | MEDIUM | MEDIUM | HIGH | HIGH | HIGH | HIGH | HIGH | MEDIUM | HIGH | HIGH | Not selected as primary language; transfer target |
| C | Python / deterministic local telemetry-data pipeline / purpose-built | HIGH | HIGH | HIGH | MEDIUM | MEDIUM | HIGH | HIGH | HIGH | HIGH | LOW–MEDIUM | LOW–MEDIUM | Superseded; DEC-0010 is retained as history |
| D | TypeScript / deterministic local event-log CLI / purpose-built | HIGH | MEDIUM | MEDIUM–HIGH | HIGH | MEDIUM | HIGH | HIGH | HIGH | HIGH | MEDIUM | MEDIUM | Not selected |

#### Candidate A — Python Synthetic Image Processing CLI (Selected)

- **Advantages:** grayscale input, simple operations, and visible output give
  C++ Vision developers an intuitive domain; Python keeps Code and Repository
  comprehension cost low; synthetic local data supports controlled states.
- **Risks:** Python differs from the primary language of many attendees, and
  even elementary image processing can distract if algorithm detail expands.
- **Implementation questions:** exact module boundaries, image
  representation, dependencies, Build/Test commands, and a measurable
  performance case remain STEP 07 work. No result or timing is claimed.
- **Selection rationale:** familiar domain + lower code comprehension cost
  + continued focus on AI Engineering evolution.

#### Candidate B — C++ Synthetic Image Processing CLI

- **Advantages:** directly matches C++ Vision development and makes CMake,
  compiler, test, and benchmark practices immediately recognizable.
- **Risks:** syntax/toolchain explanation raises implementation and
  comprehension cost for a course whose subject is AI Engineering evolution.
- **Disposition:** not selected as the primary Demo language. Its practices
  will be represented by future C++ Vision transfer bridges without adding
  C++ code to the Demo repository.

#### Candidate C — Python Telemetry-Data Pipeline

- **Advantages:** concise source and deterministic synthetic input could
  support the engineering Story.
- **Risks:** less immediately familiar to the C++ Vision audience and less
  visually intuitive than synthetic image input/output.
- **Disposition:** superseded by DEC-0011; retain DEC-0010 for decision history.

#### Candidate D — TypeScript Event-Log CLI

- **Advantages:** a typed multi-module CLI and compiler output make Build
  visible; Node includes a test runner; synthetic text fixtures are easy to
  keep local and deterministic.
- **Risks:** Node and TypeScript versions must be pinned; module/compiler
  configuration and generated output add teaching and reset details; runtime
  warm-up may complicate a short performance comparison.
- **Blocking issues:** target Node runtime, dependency cache, audience
  familiarity, and benchmark stability are unknown.
- **Basis:** TypeScript documents project compilation in its
  [official compiler options](https://www.typescriptlang.org/docs/handbook/compiler-options);
  Node documents its built-in
  [test runner](https://nodejs.org/download/release/v24.15.0/docs/api/test.html).

The CMake, Python Packaging, TypeScript, and Node references describe tooling;
they do not establish that a candidate is usable in the eventual training
environment.

### Selected Repository Direction

**ACCEPTED by DEC-0011:** create a separate purpose-built Python repository
named `ai-dev-training-demo` whose domain is a synthetic Image Processing
CLI.

The user selected Python to reduce Code and Repository comprehension cost,
not because Python is better for AI or superior to C++. The conceptual path
is input image → loader → normalize → filter → resize/transform → statistics
→ output. Exact modules will be defined in STEP 07. Keep Vision operations
elementary and use synthetic local images only.

The C++ Vision transfer bridge is a future Curriculum/Slide concern. It maps
Python tests to GoogleTest/CTest, benchmarks to Google Benchmark or a project
benchmark, modules to `.cc`/`.h` and libraries/modules, project instructions
to CMake/compiler flags/conventions/module constraints, performance work to
Release build → benchmark → profile → optimize → correctness test →
regression, and Context routing to architecture/module/algorithm/performance
guides. It does not require C++ code in the Demo repository.

At STEP 06 completion, no Trial, repository, code, or performance
measurement existed. STEP 07 has since created STATE-00 at the selected local
sibling path, recorded bounded exploration and crop-fix Trials through Codex
CLI, and created the verified `STATE-00-FIXED` state. Evidence is recorded in
`plan/DEMO_REPOSITORY_SPEC.md` and `plan/DEMO_MATRIX.md`. No performance
result or Codex Desktop Anchor validation is claimed.

## Demo State Evolution

Proposed linear path:

`STATE-00 → STATE-00-FIXED → STATE-01 → STATE-02 → STATE-03 → STATE-04
→ STATE-04-PERF → STATE-05 → STATE-06 → STATE-07 → STATE-08 → STATE-09
→ STATE-10 → STATE-11`

The detailed code, Project documents, instructions, Harness state, purpose,
transition, and reset expectations are in
`plan/DEMO_REPOSITORY_SPEC.md`. Each transition introduces one meaningful
change. Git history may be used as transparent training evidence; it must be
described as an educationally designed evolution, never as authentic
production history.

## Stale Harness Scenario Comparison

| Candidate | Audience clarity | Reproducibility | Cause clarity | Harness relevance | Loop relevance | Evaluation quality | Regression quality | Live stability | Implementation effort | Story continuity | Disposition |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| A. Build/Test workflow stale after Project test-procedure migration | HIGH | HIGH | HIGH | HIGH | HIGH | HIGH | HIGH | MEDIUM | MEDIUM | HIGH | Primary stale-scenario proposal |
| B. Benchmark workflow stale | MEDIUM | MEDIUM | MEDIUM | HIGH | HIGH | HIGH | MEDIUM | LOW–MEDIUM | MEDIUM | HIGH | Supporting comparison; benchmark noise adds explanation |
| C. Architecture/module knowledge stale | MEDIUM | MEDIUM | MEDIUM | MEDIUM | MEDIUM | MEDIUM | MEDIUM | MEDIUM | HIGH | MEDIUM | Lower priority; wrong-module cause needs context |
| D. Project rule stale or overbroad | HIGH | HIGH | HIGH | MEDIUM | HIGH | HIGH | HIGH | MEDIUM | LOW–MEDIUM | HIGH | Strong regression case, not primary stale story |
| E. Memory/durable knowledge stale | MEDIUM | MEDIUM | MEDIUM | HIGH | HIGH | MEDIUM | MEDIUM | LOW–MEDIUM | MEDIUM–HIGH | MEDIUM | Supporting visual/captured case; product and lifecycle boundaries add cost |

HIGH is favorable for every column except Implementation effort, where HIGH
means more cost. Scores are provisional judgments, not Trial results.

**Primary stale scenario (selected Story direction; implementation details
open):** after a working Harness is demonstrated, a documented Project need
changes the Test layout or procedure. Update the authoritative Project Test
source, but leave exactly one previously correct reusable performance
workflow stale. Choose the test runner and any dependency based on stability
and readability, then settle exact old/new layouts and commands in STEP 07.
The stale command must visibly fail for the intended stale-artifact reason,
not due to missing dependencies or an invalid environment.

Control other causes: keep the Project's current Test source, dependencies,
runtime, permissions, and environment valid and prepared; make the reusable
workflow the only outdated artifact. Show the earlier state where its command
was correct and the Project change that made it stale. Do not add a competing
rule to `AGENTS.md`.

The teaching point is Harness staleness, not why one Test framework is
better. If the selected migration feels artificial or the old command does
not make the stale artifact visible, choose another small Build/Test
procedure change and update this comparison before implementation.

The primary Anchor should show:

`recurring correction → observe → investigate evidence → cause hypothesis
→ scoped Harness change → rerun → evaluation → regression check`

Possible Project-evolution candidates include a test-runner change or a
test-layout change. These are alternatives, not current Project facts. Do not
add a contradictory `AGENTS.md` rule to paper over a stale reusable artifact.
If a task-level Prompt fixes one run, show why the stale artifact can affect
the next task.

Repeated failures may be represented by one live task plus captured history
for earlier tasks. Three live repetitions are unnecessary. If the timeline
was designed for education rather than observed, label it as a controlled
scenario.

## Anchor Demo Candidates

These four Story-transition Anchor roles remain **PROPOSED** under
`DEC-0008`. DEC-0011 accepts HYBRID as the default delivery strategy for
Anchor Demos; exact Live actions, captures, and role selection remain subject
to STEP 07 validation.

| Anchor | Story question | Starting/ending state | Proposed mode | Live value | Execution risk | Curriculum Demo allocation |
|---|---|---|---|---:|---:|---:|
| 1. Repository exploration | Must the Developer find every relevant file before asking? | STATE-00; read-only search and trace | HYBRID | HIGH | MEDIUM | 8 min, ACT 0 |
| 2. Project Context | Why repeat Project facts in every Task? | STATE-00-FIXED → STATE-01; same task before/after | HYBRID | HIGH | MEDIUM | 8 min, ACT 2 |
| 3. Reusable workflow | Why repeat the steps and checks for a recurring task? | STATE-03 → STATE-04 → STATE-04-PERF; bounded performance workflow | HYBRID | MEDIUM–HIGH | MEDIUM–HIGH | 8 min, ACT 3 |
| 4. Harness Improvement Loop | Is a Task correction enough when the same Failure recurs? | STATE-09 → STATE-11; cause, scoped update, evaluation | HYBRID (not Live-only) | HIGH | HIGH | 16 min across ACT 4's 5 + 11 min slots |

“Live value” and “execution risk” are estimates before Trial, not validation.
An Anchor may be recorded or hybrid; Anchor count does not prescribe Live
count. See `plan/DEMO_MATRIX.md` for all supporting candidates, Visual
cases, coverage, and Act-level budget reconciliation.

## Live / Recorded / Captured Strategy

- **LIVE:** use for short, observable Agent investigation or verification
  when the target product surface supports it and a rehearsed task fits its
  time slot.
- **RECORDED:** use for long, variable workflows or product coordination
  where pausing live would obscure the Story.
- **CAPTURED:** use for reviewed terminal output, diff, logs, or results whose
  evidence matters more than the live interaction.
- **VISUAL:** use for Context growth/routing, system boundaries, or a lifecycle
  explanation that does not need execution.
- **HYBRID:** accepted default for Anchor Demos: attempt the Live step when
  validated, with a prepared capture, expected result, and fallback path for
  each Story-critical case. ACT 4's Harness Improvement Loop is not Live-only.

Current Codex features, Skill/Subagent/Memory availability, exact account,
and permission behavior remain conditional on OQ-005 and the STEP 03 research
record. Use an explicit repository workflow or a visual
explanation if a product mechanism is unavailable; do not claim that every
surface supports it.

## Failure, Reproducibility, and Fallback Strategy

Keep distinct:

- **Product variance:** a reasonable alternate Agent path; explain it if it
  still answers the Story question.
- **Demo environment failure:** network, dependency, permission, or tool
  failure; switch to prepared evidence.
- **Repository design failure:** the task, module boundary, or expected
  result is unclear; revise the candidate.
- **Story-assumption failure:** observed behavior does not support the
  expected engineering point; revise the Demo/Story relationship.
- **Product capability mismatch:** actual behavior differs from research;
  recheck the official source and selected environment.

For each run, capture the repository commit/state, prompt, working directory,
runtime/tool versions, build/test configuration, deterministic input,
Harness/instruction state, model/interface when available, observed output,
verification, and limitations. This reduces setup variance; it does not
guarantee an identical Agent response.

Fallback order: reasonable alternate path → brief task-specific follow-up →
captured result/diff → recording or visual. Do not hide failure or use a
fallback as evidence that a Live run succeeded.

## Time Budget

The existing Curriculum allots 73 instructor Demo minutes across six Acts.
This plan does not add minutes. Anchor windows consume 40 minutes; supporting
examples, verification visuals, and the recap remain inside the other 33
minutes. Detailed reconciliation is in `plan/DEMO_MATRIX.md`.

Setup performed before class is operational preparation, not instructional
time. Any on-screen setup, execution, observation, interpretation, and
transition during class must fit the current Curriculum section's Demo slot.
Final timing depends on repository and rehearsal evidence. If a slot is at
risk, move a Demo to Recorded/Captured, reduce a supporting example, or remove
duplication before cutting a Story-critical explanation.

## Research Dependencies and Open Questions

| Area | STEP 06 disposition | Existing governance |
|---|---|---|
| Repository language/domain/source/strategy/location | RESOLVED: Python synthetic image-processing CLI, separate purpose-built repository, local sibling path `../ai-dev-training-demo` | OQ-001 via DEC-0011/DEC-0012 |
| Real/internal example and usage permission | NOT REQUIRED for selected synthetic local data; revisit only if direction changes | OQ-002, OQ-014 |
| Primary OS and delivery strategy | RESOLVED for planning: macOS + current Codex Desktop, OS-independent design, Anchor HYBRID | OQ-003 via DEC-0011 |
| Account, current product behavior, permissions, Live availability | OPEN for verification before product-dependent Demos | OQ-005 |
| Build/Test/Benchmark commands and actual outcomes | Direction specified; commands/results await STEP 07 implementation and validation | OQ-007 |
| Skill, Subagent, Memory product examples | OPEN / conditional on need and current target support | OQ-005, OQ-008 |
| Stale scenario, evaluation criteria, regression | PARTIALLY RESOLVED: candidates proposed; recurrence and effects need a fair controlled state or observed evidence | OQ-009 |
| Operational Harness/Loop wording | Continue using approved Curriculum language; confirm scope before final teaching claims | OQ-011 |
| Training repository as Meta Example | NOT USED in STEP 06; revisit only if later actual history is relevant | OQ-013 |

No new OQ is created. Keep the existing OQs in
`plan/DECISIONS.md`; this table records their STEP 06 disposition.

## Architecture Quality Audit

The implementation-sensitive rows below reflect current STEP 07 status after
the STATE-00 build. Tables explicitly labeled STEP 06 remain point-in-time
planning audits.

| Area | Result | Boundary |
|---|---|---|
| Story connection and continuous Project | PARTIAL | STATE-00 and STATE-00-FIXED exist; TRIAL-001 exploration and TRIAL-002 crop fix were observed via CLI. Later states and connected Desktop Anchor trials remain pending. |
| Beginner readability and advanced insight | NEEDS STEP 07 VALIDATION | Cold-read and projector review remain. |
| Build, Test, Benchmark, Verification | PARTIAL | STATE-00 build, CLI, tests, and reset were checked; STATE-00-FIXED focused/full tests, crop smoke, and fresh-tag test reset passed. Benchmark and later-state checks remain unvalidated. |
| Stale cause, evaluation, regression | PASS as a controlled scenario design | Do not describe recurrence or improvement as real without records. |
| Reproducibility and fallback | PARTIAL | STATE-00 and STATE-00-FIXED refs, environment, fixture, and Test reset are recorded; later-state commands and Desktop Demo captures remain TBD. |
| Product capability fit | PARTIAL | TRIAL-001/002 are bounded Codex CLI observations; do not infer Desktop, account, or feature support from them. |
| Claims and data integrity | PASS as constraints | Exact Demo evidence will be bounded by later runs. |

## Implementation Readiness Audit — STEP 06 §§101–110

This is a point-in-time audit of readiness at STEP 06 close. Its statements
that defer details to STEP 07 are historical; current STATE-00 outcomes are
recorded in the architecture status and repository evidence sections.

The following audit asks whether an implementation team can understand the
candidate without inventing its Story. “Specified” means the design direction
is explicit; it does not mean the repository or behavior has been tested.

| # | Implementation question | Current answer | Readiness / remaining evidence |
|---:|---|---|---|
| 1 | What Project should be built and where? | A separate purpose-built Python Synthetic Image Processing CLI named `ai-dev-training-demo`, at the sibling path `../ai-dev-training-demo`. | Repository direction accepted by DEC-0011; local path accepted by DEC-0012. |
| 2 | Why this Domain and Language? | Simple synthetic grayscale processing is familiar to C++ Vision developers; Python reduces code/repository comprehension cost. | User-selected; this is not a claim that Python is better for AI. |
| 3 | What is the initial architecture? | Conceptual path: input → loader → normalize → filter → resize/transform → statistics → output. | Exact module structure and dependency choices remain STEP 07 work. |
| 4 | What Bug should exist? | Candidate half-open crop boundary includes `x_end` when it should be excluded. | Planning candidate; settle exact operation, contract, and fixture in STEP 07. |
| 5 | What Performance bottleneck should exist? | Candidate repeated pixel work, repeated allocation, duplicate normalization, or redundant transformation. | Select the measurable hot path from implementation evidence; do not teach Python/NumPy optimization or vectorization. |
| 6 | What verifies correctness? | Boundary unit regression, normalization/aggregation unit checks, end-to-end integration, and output-equivalence checks. | Coverage direction specified; exact runnable commands and outcomes need Trial. |
| 7 | What measures Performance? | Same host/runtime/input/procedure before and after; correctness first; repeated observations and a robust summary. | Method specified; workload size, repetitions, signal, and benchmark command need Trial. |
| 8 | When does `AGENTS.md` appear? | At STATE-01, after repeated Project facts have made reuse valuable. | Specified; verify only stable, confirmed instructions enter it. |
| 9 | Why and how does Context grow? | STATE-02 adds verified recurring input/output, Test, and processing facts to their natural Project sources; it does not manufacture token-count failure. | Examples specified; actual Project facts await implementation. |
| 10 | When is Context separated? | STATE-03 separates concise core rules from task-specific information and routes to maintained sources. | Story and mechanism specified; target-surface retrieval behavior is conditional. |
| 11 | What repeatable Workflow may become a Skill? | `workflows/performance-investigation.md`: baseline, inspect, plan, implement, Test, benchmark, compare, review. | Repository procedure specified; product Skill is conditional on current support. |
| 12 | What complex Task may use Subagents? | One performance investigation can split into independent architecture, measurement, and test questions, followed by main-agent synthesis. | Supporting scenario specified; keep optional and compare coordination cost. |
| 13 | What Knowledge may be Durable? | A verified synthetic image workload limitation/provenance fact with source, scope, and refresh trigger. | Candidate specified; retain only if implementation yields a useful fact. |
| 14 | How does the Project evolve? | Correct a bounded image-operation Bug; add Context and a reusable procedure; optimize separately; later change the Test layout/procedure for a documented need. | Candidate transitions specified below; validate each change in STEP 07. |
| 15 | Which Harness artifact becomes stale? | The formerly correct performance workflow retains a previous Test path/procedure after the Project change. | Keep exactly one stale artifact and demonstrate prior correctness/later staleness. |
| 16 | How is Failure observed? | The stale workflow produces a visible failure for its outdated procedure. | Exact layout/runner and failure evidence are STEP 07 validation items. |
| 17 | Which Layer is changed? | Repair the reusable workflow that contains the stale Test procedure; do not duplicate its command in `AGENTS.md`. | Cause-to-layer rule specified; observed evidence must support it. |
| 18 | What Evaluation is performed? | EVAL-01 bug fix, EVAL-02 performance, EVAL-03 small refactor, EVAL-04 docs-only task. | Tasks and evidence are specified in `DEMO_REPOSITORY_SPEC.md`; validate against the built Project. |
| 19 | Which Regression is checked? | EVAL-03/04 should remain appropriately scoped and must not inherit an overbroad “always benchmark” rule. | Negative checks specified; capture results after the Harness change. |
| 20 | How is every State restored? | Select its recorded commit/tag in a fresh or disposable checkout, prepare pinned dependencies, and confirm known Test/Benchmark inputs. | Restoration contract specified; actual refs, reset instructions, dependency identifiers, and known outcomes are implementation outputs. |

### Ambiguity, Failure Cause, and Verification Checks

| Audit | Result | Required control |
|---|---|---|
| Implementation ambiguity | Initial image representation, package/build choices, runtime, and test approach are recorded for STATE-00. Benchmark workload and later-state details remain TBD; product details remain conditional. | Resolve remaining implementation details and validation evidence in STEP 07; do not invent measured values or Agent behavior. |
| Failure causality | The primary stale-state cause is one outdated reusable Test workflow. | Keep current Project docs, `AGENTS.md`, runtime, dependencies, permissions, and environment correct; prove the old workflow worked before the Project change. |
| Initial Bug verification | TRIAL-002 reproduced the crop-boundary regression, made a one-line isolated fix, and passed focused/full tests plus a CLI smoke check; the change is recorded as STATE-00-FIXED. | Preserve the recorded Test, smoke, tag-reset, and diff evidence; Desktop behavior remains unvalidated. |
| Performance verification | Baseline → bounded code change → correctness/output equality → repeated benchmark → comparison. | Keep Bug and Performance changes separate and record host, runtime, workload, procedure, and observations. |
| Reusable workflow verification | Bounded task → versioned procedure → task-appropriate checks. | Keep a repository-owned procedure usable even if a product Skill is unavailable. |
| Harness-change verification | Visible stale-workflow failure → evidence-based cause → workflow-only fix → same-task rerun → representative Evaluation and Regression. | Capture the same-task rerun and use EVAL-03/04 as adjacent-task checks; report omissions and limits rather than asserting success. |

### State Transition and Story Integrity Review

The detailed state table is in `plan/DEMO_REPOSITORY_SPEC.md`. The main
diffs are deliberately separated:

| Transition | Principal change | Audit result |
|---|---|---|
| STATE-00 → STATE-00-FIXED | Fix only the bounded image-operation boundary Bug and its regression. | Separated from Harness changes. |
| STATE-00-FIXED → STATE-01 | Add concise `AGENTS.md`; no Product code change. | Context reuse follows the Bug-fix success. |
| STATE-01 → STATE-02 | Add verified recurring facts to their Project sources. | Context growth is labeled, not staged as model failure. |
| STATE-02 → STATE-03 | Route core instructions to relevant detail. | Relevance responds to visible accumulation. |
| STATE-03 → STATE-04 | Add the reusable performance procedure. | Process is separated from Project facts. |
| STATE-04 → STATE-04-PERF | Optimize only the evidence-backed image-processing hot path and record evidence. | Product change is separate from adding the procedure. |
| STATE-04-PERF → STATE-05 | Add optional role separation for an actually complex investigation. | Keep it supporting; omit if the Trial shows one Agent is sufficient. |
| STATE-05 → STATE-06 | Add one sourced, scoped, freshness-aware durable fact. | Retain it only if real project work makes it useful. |
| STATE-06 → STATE-07 | Assemble and verify only useful Harness components. | No feature checklist or unsupported product capability is required. |
| STATE-07 → STATE-08 | Change the Project Test layout/procedure for a stated need. | The sole planned mismatch is the old reusable procedure. |
| STATE-08 → STATE-09 | Execute the stale procedure and capture its failure; repository HEAD is unchanged. | Observed failure is distinct from a code defect or environment failure. |
| STATE-09 → STATE-10 | Repair the implicated reusable workflow. | Change only the layer supported by evidence. |
| STATE-10 → STATE-11 | Evaluate and check adjacent-task regressions. | Keep outcomes bounded and preserve failed/partial evidence. |

The designed history remains an educational scenario, not production history.
Do not add fake rules, hide project instructions, force an Agent error, or
present controlled repetition as an observed incident. The details preserve
the Curriculum's problem-driven transitions and do not add instructional
minutes.

### Scope Freeze Candidate

**Planning direction is frozen by DEC-0011/DEC-0012.** The initial STATE-00
baseline is implemented and reset-checked, with the planned crop defect
visible in its regression test. TRIAL-002's bounded fix was revalidated,
committed as `6dab644`, and tagged `STATE-00-FIXED`; the baseline tag is
unchanged. Later states, benchmark behavior, stale workflow, Desktop Agent
behavior, and current product support still need their own STEP 07
implementation/validation evidence.

### STEP 07 Handoff Package Audit

| Required handoff input | Current artifact / status |
|---|---|
| Demo Repository specification | `plan/DEMO_REPOSITORY_SPEC.md` — selected direction, STATE-00 baseline, and verified STATE-00-FIXED evidence recorded; STATE-01 is planned. |
| State Model or equivalent | State table and reproduction contract in `plan/DEMO_REPOSITORY_SPEC.md` — STATE-00/STATE-00-FIXED commit/tags and test resets recorded; later refs do not exist yet. |
| Demo Architecture | `plan/DEMO_ARCHITECTURE.md` — candidate architecture and gates. |
| Demo Matrix | `plan/DEMO_MATRIX.md` — timing and Beat mapping; state references must match this revision. |
| Runbook specification | `plan/DEMO_RUNBOOK_SPEC.md` — schema only; no runnable Runbooks. |
| Related accepted Decisions | `DEC-0011` accepts the repository/domain/environment/delivery direction; `DEC-0012` selects its sibling path; `DEC-0010` is SUPERSEDED. Anchor roles in `DEC-0008` remain PROPOSED. |
| Product capability constraints | `references/CLAIMS.md` and `references/product/CAPABILITY_MATRIX.md`; current account/surface behavior remains conditional under OQ-005. |
| Story Beat references | `plan/STORY_BEATS.md` and `plan/TRANSITIONS.md`, especially BEAT-002–007, 008–017, 020–022, 023–032, and 039–057. |

**Handoff status at STEP 06 close:** the package recorded the accepted
repository direction, selected sibling path, Story rationale, proposed
evolution, and later validation criteria. STEP 07 has since started; the
STATE-00 and STATE-00-FIXED implementation and observed results, plus the
STATE-01 repeated-context plan, are recorded in `plan/DEMO_REPOSITORY_SPEC.md`
and `plan/DEMO_MATRIX.md`. STATE-01 implementation and product-dependent
Desktop Agent trials remain pending. Do not redesign the Story as part of
implementation.

## STEP 06 Completion Audit — §§111–120

### §111 — Meta Example Feasibility

The actual-history audit is recorded under OQ-013 in `plan/DECISIONS.md`.
`AGENTS.md` is currently a 15-line router, while the repository has not
recorded the repeated friction, production failure, or before/after quality
evidence needed to claim a Training Production Harness improvement.

| Candidate | Finding |
|---|---|
| Oversized `AGENTS.md`, repeated Project instruction, repeated Decision lookup | NOT OBSERVED as actual friction. The router is 15 lines; no repeated task/lookup event is recorded. |
| Context separation and routing | OBSERVED as a practice: `AGENTS.md` routes work to separate plan sources and the route is used. No prior Context failure or measured benefit is recorded, so this is not a complete Problem → Solution example. |
| Research Context overload and a Skill/Subagent/Memory becoming necessary | TOO EARLY; no downstream production event establishes the need. |
| Distinct Review passes | OBSERVED across Curriculum, Story, and Demo readiness. They were staged with different scopes; this does not show that the same Review Prompt was repeatedly rewritten. |
| Same Review Prompt rewritten, Research/Slide mismatch, Source-of-Truth Drift | NOT OBSERVED. The readiness review clarified one-time specification ambiguities, not a recorded invariant conflict or repeated drift. |
| Feedback Loop improved production quality | TOO EARLY. A plan review produced specification edits, but no implemented Demo or measured production-quality outcome exists. |

**Disposition:** do not use the repository as a factual Meta Example in this
training. This current-use decision does not preclude later authentic history,
does not change accepted `DEC-0005`, and does not replace the primary Demo.

### §112 — Primary Demo and Meta Example Roles

The primary Demo is the user-selected separate, purpose-built Python
Synthetic Image Processing CLI repository that carries the `Chatbot → Prompt
→ Context → Harness → Loop` evolution. The training repository could only be
a supporting illustration of actual production work; it is currently **NOT
USED**. The Demo need not cover every Story Beat and must not motivate
artificial Skills, Subagents, Memory, or failures.

### §113 — Training Production Harness Trigger Review

The STEP 02 triggers are evaluation signals, not authorization to build a
component. The project record through STEP 06 shows:

| Trigger | Current finding | Evidence / limit |
|---|---|---|
| A. Same Review Prompt repeatedly rewritten | NOT OBSERVED | No repeated rewrite caused by production friction is recorded. Sequential, differently scoped plan instructions do not establish this trigger. |
| B. Research and Slide fact-checking repeatedly diverge | TOO EARLY | No Slide Map or Slide content has been produced. |
| C. One Agent carries Curriculum, Demo, Slide, and Research with excessive Context | TOO EARLY | No observed overload or coordination failure is recorded; Slide work has not started. |
| D. New sessions repeatedly rediscover the same project facts | NOT OBSERVED | No repeated rediscovery event is recorded. |
| E. The same planning Drift recurs | NOT OBSERVED | One readiness pass clarified candidate-state and workflow details; recurrence of the same Drift is not recorded. |

Do not add a Skill, Subagent, Memory system, automated Evaluation, or other
Production Harness component on this evidence. If later friction occurs,
record the event, recurrence, cause, expected benefit, and upkeep or
coordination cost before proposing a response.

### §§114–115 — Curriculum Time and Story Recheck

`plan/DEMO_MATRIX.md` reconciles every Act to the existing 73-minute Demo
budget: ACT 0 8, ACT 1 8, ACT 2 13, ACT 3 20, ACT 4 22, and ACT 5 2 minutes.
The Demo plan adds no instructional time. ACT 3 and ACT 4 have no Demo-slot
buffer, so secondary role, retained-knowledge, reveal, loop-model, and
regression material stays captured or visual where appropriate. Longer
candidate Agent runs require rehearsal and a prepared Hybrid/Captured path.

The Story order remains problem-led and is expressed by Act/Beat rather than
Demo ID: repository exploration, Prompt, repeated Project Context, Context
routing, reusable workflow, optional roles/retained knowledge and Harness
reveal, stale Harness, then cause/evaluation/regression and retrospective.
Subagents, Skills, and Memory do not move ahead of the Problems that motivate
them. Time figures are proposed allocations, not selected or rehearsed
durations.

### §116 — Product Volatility

Per-Demo LOW/MEDIUM/HIGH estimates, rationale, and captured alternatives are
in `plan/DEMO_MATRIX.md`. HIGH Anchor candidates DEMO-01, DEMO-02, DEMO-04A,
and DEMO-04B require a current-state check against official OpenAI material
and the selected account/surface before Trial, plus a rehearsed fallback and
captured alternative. This is a future validation requirement, not a claim
that a product feature is currently available. Keep the Engineering Insight
usable if interface or product naming changes.

### §117 — STEP 07 Demo Validation Order

After user decisions and Demo implementation, validate each selected Demo in
this sequence:

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

Record actual outputs and limitations at each step. A difference from the
specification or Story expectation requires cause analysis; do not silently
treat it as a pass.

### §118 — Demo Acceptance Status

After STEP 07 validation, assign each Demo exactly one final status:

| Status | Acceptance meaning |
|---|---|
| VALIDATED LIVE | A rehearsed Live run met bounded success criteria in the selected environment. |
| VALIDATED HYBRID | The Live path and its prepared fallback were both checked. |
| VALIDATED RECORDED | A reviewed recording is suitable because Live risk is too high. |
| VALIDATED CAPTURED | Reviewed output, diff, log, or result is the suitable evidence. |
| VISUAL ONLY | A reviewed visual communicates the point more clearly than execution. |
| REJECTED | Teaching value or reproducibility is insufficient; preserve the reason. |

Until STEP 07 evidence exists, Matrix entries remain CANDIDATE or BLOCKED;
design review alone cannot grant a final acceptance status.

### §119 — STEP 06 Result

#### 1. Status

**COMPLETE WITH OPEN QUESTIONS (planning scope).** The user selected the
repository/domain, primary implementation environment, and delivery
strategy. No implementation, Trial, current product-account check, or Demo
result has been performed; these remain downstream validation items.

#### 2. Files Created

- `plan/DEMO_ARCHITECTURE.md`
- `plan/DEMO_REPOSITORY_SPEC.md`
- `plan/DEMO_MATRIX.md`
- `plan/DEMO_RUNBOOK_SPEC.md`

These are specifications and candidate plans; they are not the Demo
repository or executable Runbooks.

#### 3. Final Repository Direction at STEP 06 Close

| Field | Selected direction |
|---|---|
| Language | Python, to reduce Code and Repository comprehension cost; not because Python is better for AI than C++. |
| Domain | Synthetic Image Processing CLI with simple grayscale operations and basic statistics; no advanced Vision algorithms. |
| Strategy / location | Separate purpose-built `ai-dev-training-demo` at the sibling path `../ai-dev-training-demo`, selected by DEC-0011/DEC-0012. |
| Status at STEP 06 close | User-selected; implementation had not started at that checkpoint. STATE-00 implementation evidence is recorded in the later STEP 07 update. |

#### 4. Candidate Comparison

The earlier comparison considered C++ image processing, Python telemetry
(DEC-0010), and TypeScript event processing; DEC-0011 now records the selected
Python image-processing direction. Its domain is familiar to many C++ Vision
developers while Python reduces code/repository comprehension cost. DEC-0010
is SUPERSEDED; telemetry is not the selected direction. C++ code is not part
of the Demo repository; transfer bridges belong in future Curriculum/Slides.

#### 5. Repository Architecture

At STEP 06 close, the conceptual pipeline was input image → loader → normalize
→ filter → resize/transform → statistics → output. Exact module boundaries,
representation, dependencies, and setup were intentionally left to STEP 07;
the implemented STATE-00 choices are recorded in
`plan/DEMO_REPOSITORY_SPEC.md`.

#### 6. State Model

At STEP 06 close, the proposed sequence was STATE-00 (candidate image-operation boundary Bug) →
STATE-00-FIXED → STATE-01 through STATE-07 (Context, reusable workflow,
measured Performance, optional roles and knowledge, working Harness) →
STATE-08/09 (documented Project Test change and visible stale-workflow
failure) → STATE-10/11 (evidence-backed workflow repair, Evaluation, and
Regression). State commits, reset commands, and actual outcomes did not exist
at that planning checkpoint; STATE-00 was subsequently implemented and
reset-checked during STEP 07.

#### 7. Anchor Demos

| Anchor | Proposed mode | Time | Execution risk | Teaching point |
|---|---|---:|---|---|
| DEMO-01: read-only repository exploration | HYBRID | 8 min | MEDIUM | Let the Agent find and trace relevant repository context; prepared capture and fallback required. |
| DEMO-02: Project Context | HYBRID | 8 min | MEDIUM | Reuse verified project guidance rather than repeat it per task; prepared capture and fallback required. |
| DEMO-03: reusable workflow | HYBRID | 8 min | MEDIUM–HIGH | Make a repeatable procedure and its Verification visible; product Skill stays optional. |
| DEMO-04A/B: stale Harness and improvement Loop | HYBRID (not Live-only) | 16 min total | HIGH | Trace changed Project → stale workflow → cause → scoped repair → evaluation/regression; prepared capture and fallback required. |

Anchor roles remain proposed under DEC-0008; the HYBRID default and fallback
requirement are accepted by DEC-0011. Supporting evidence is mapped
separately in the Demo Matrix.

#### 8. Supporting Demos

Prompt Before/After; Context growth/routing; optional Subagent comparison;
durable repository knowledge; optional ACT 4 VIS-11 time/freshness case;
verification/Harness reveal; regression; and the ACT 5 evolution visual.
Role, Memory, and product-feature examples may be captured, visual, omitted,
or changed after need and availability checks. Memory staleness does not join
the primary stale-workflow Failure chain. VIS-11 uses existing ACT 4 Case time
and adds no Demo minutes.

#### 9. Primary Stale Harness Scenario

A documented Project Test-layout or procedure change leaves one previously
correct performance workflow stale. The exact runner and commands are not
selected. Current Project instructions and environment must be correct; the
stale procedure must be the sole cause of a visible failure. Diagnose first,
then change only the stale reusable workflow. Label the controlled history
as training-designed, not real project history.

#### 10. Evaluation / Regression

Use EVAL-01 bug-fix evidence, EVAL-02 performance baseline and comparison,
EVAL-03 scoped refactor, and EVAL-04 documentation-only task. After the
workflow repair, rerun the same task and use EVAL-03/04 to check against an
overbroad rule such as always running the full benchmark. No outcome is
claimed until captured.

#### 11. Demo Time

**73 minutes proposed**, exactly matching the Curriculum: ACT 0 8, ACT 1 8,
ACT 2 13, ACT 3 20, ACT 4 22, ACT 5 2. ACT 3/4 have zero Demo-slot buffer;
supporting content therefore needs captured/visual treatment if rehearsal
shows overload. No net time is added.

#### 12. Meta Example

**NOT USED as a learner-facing STEP 06 example.** OQ-013 records that
Context routing and distinct review passes are OBSERVED, while the same-prompt
friction and Source-of-Truth Drift are NOT OBSERVED. Temporal/product
outcomes and any measured production-quality improvement are TOO EARLY. Do
not present the actual planning activity as an evaluated quality gain.

#### 13. Decisions

`DEC-0011` accepts the user's repository, environment, and delivery choices;
`DEC-0010` is SUPERSEDED. `DEC-0005` is unchanged; `DEC-0007` and `DEC-0008`
retain their existing PROPOSED statuses. The Meta Example disposition is
recorded under OQ-013 and can be revisited only if later authentic evidence
appears.

#### 14. Open Questions

At STEP 06 close, OQ-001's repository direction and local sibling path were
resolved by DEC-0011/DEC-0012, while implementation details remained for
STEP 07. STATE-00 implementation details and evidence are now recorded in
`plan/DEMO_REPOSITORY_SPEC.md`; later states remain open.
OQ-003 is resolved for the planned environment/delivery strategy. Remaining
questions include OQ-004 (Curriculum review/runtime refinement), OQ-005
(current product and account checks), OQ-007 (later-state verification and
benchmark examples), OQ-008 (optional product mechanisms), OQ-009 (Evaluation evidence),
OQ-011 (course wording), and OQ-013 (future authentic Meta Example).
OQ-002/OQ-014 do not block the selected synthetic-local-data direction;
revisit only if internal/company sources or claims are introduced.

#### 15. User Decisions Recorded

| Decision | User-selected direction | Deferred check |
|---|---|---|---|
| Repository source, language, domain, and location | Separate purpose-built Python Synthetic Image Processing CLI with synthetic local data at `../ai-dev-training-demo`. | STATE-00 package and module structure are recorded; later states, benchmark, and product/account verification remain in STEP 07. |
| Rationale and audience transfer | Python lowers code/repository comprehension cost; C++ Vision practices appear as future Curriculum/Slide bridges, not Demo code. | Confirm final bridge presentation during Curriculum/Slide work. |
| Implementation environment and delivery | macOS + current Codex Desktop; OS-independent design; Anchor HYBRID, ACT 4 not Live-only, supporting Demos may be RECORDED/CAPTURED/VISUAL. | Recheck current product/account support and rehearse paths during STEP 07. |

#### 16. STEP 07 Readiness

**STEP 07 IN PROGRESS — STATE-00-FIXED RECORDED; STATE-01 PLAN DEFINED.** The
repository is at the DEC-0012 sibling path. `STATE-00-FIXED` is committed and
tagged locally; no remote is configured, so it is not pushed. The next state
is `STATE-01`, but its `AGENTS.md` has not been created. TRIAL-001/002 and
state evidence are recorded in `plan/DEMO_MATRIX.md`. Codex Desktop/account
behavior remains subject to OQ-005, and the Desktop Anchor rehearsal remains
pending.

### §120 — Completion Condition Audit

`PASS — specified` means the planning artifact is present, not that a Demo
was executed. STEP 07 validation items prevent implementation readiness, but
they do not undo completion of the STEP 06 planning scope after the user has
resolved its direction gates. An unapproved role/design choice remains open.

| # | Completion condition | Result |
|---:|---|---|
| 1 | Demo Architecture is based on the Story. | PASS — specified; Story Beat links are present. |
| 2 | Primary repository candidates were compared. | PASS — candidates and trade-offs are recorded; Python synthetic image processing is selected. |
| 3 | Language/domain is chosen or a clear user Decision Gate remains. | PASS — user selection accepted in DEC-0011. |
| 4 | Repository is close to domain-neutral. | PASS — simple synthetic grayscale operations are selected; cold-read validation remains for STEP 07. |
| 5 | Build/Test/Benchmark directions are defined. | PASS — purpose and evidence controls specified; exact tools/commands remain STEP 07 work. |
| 6 | Initial Bug is defined. | PASS as candidate — crop-boundary defect specified; exact contract and observed test remain STEP 07 work. |
| 7 | Performance scenario is defined. | PASS as candidate — repeated pixel work/allocation/duplicate normalization/redundant transform; select measurable case from implementation evidence. |
| 8 | `AGENTS.md` first-success scenario is defined. | PASS — specified; product behavior needs Trial. |
| 9 | Context growth has an actual reason. | PASS — specified as verified facts added at a controlled state; not a claim of observed model failure. |
| 10 | Context-separation scenario is defined. | PASS — specified; retrieval behavior is conditional. |
| 11 | Reusable-workflow scenario is defined. | PASS — repository procedure is specified; Skill remains optional. |
| 12 | Subagent scenario is based on actual complexity. | STEP 07 VALIDATION — supporting only; omit if one Agent suffices. |
| 13 | Durable-knowledge scenario is defined. | PASS — one sourced/scoped/freshness-aware fact; retain only if useful. |
| 14 | Memory staleness arises through time. | PASS as optional design — dated workload fact and changed image workload; validate clarity later and keep it outside the primary stale-workflow chain. |
| 15 | A working Harness state exists. | STEP 07 IMPLEMENTATION — STATE-07 is specified but not built. |
| 16 | Project evolution is defined. | PASS — specified sequence; plausibility requires Trial. |
| 17 | Primary stale Harness scenario is clear. | PASS — specified; old command behavior needs Trial. |
| 18 | Failure cause can be traced to evidence. | PASS — sole stale workflow is isolated by design; actual failure evidence needs Trial. |
| 19 | Correct-layer change is possible. | PASS — update only the implicated reusable workflow. |
| 20 | Evaluation task set is defined. | PASS — EVAL-01 through EVAL-04; outputs need Trial. |
| 21 | Regression scenario is defined. | PASS — EVAL-03/04 check for overbroad rules; outcome needs Trial. |
| 22 | Repository State Model exists. | PASS — proposed STATE-00 to STATE-11 table. |
| 23 | State reset strategy exists. | PASS — fresh/disposable checkout contract; real refs and commands need implementation. |
| 24 | Anchor Demo is selected. | OPEN DESIGN CHOICE — four roles remain proposed under DEC-0008; DEC-0011 accepts HYBRID as the Anchor default. |
| 25 | LIVE/RECORDED/CAPTURED/VISUAL modes are distinguished. | PASS — accepted HYBRID Anchor strategy plus supporting RECORDED/CAPTURED/VISUAL options. |
| 26 | Every Anchor has a fallback. | PASS as requirement — each Story-critical Anchor requires prepared capture, expected result, and fallback; prepare/rehearse in STEP 07. |
| 27 | Demo time matches the Curriculum. | PASS — 73 minutes, exact per-Act reconciliation. |
| 28 | Failure is not unfairly manipulated. | PASS — controlled states and observed failures must be labeled separately. |
| 29 | Success is not overstated. | PASS — bounded criteria and limits are required. |
| 30 | Product capability matches STEP 03 Research. | STEP 07 VALIDATION — recheck current account/surface behavior under OQ-005. |
| 31 | Training and Demo Harnesses are separate. | PASS — explicitly separate repositories and purposes. |
| 32 | Meta Example is not asserted without evidence. | PASS — audit says NOT USED for STEP 06. |
| 33 | Demo Repository had not yet been implemented at STEP 06 close. | PASS — no educational repository or state commits existed at that historical checkpoint. |
| 34 | Slide Map is not created. | PASS — none created. |
| 35 | PPT is not created. | PASS — none created. |

**§120 result:** the repository, environment, and delivery direction gates
are resolved; required planning artifacts and their boundaries are recorded.
The overall STEP 06 planning status is **COMPLETE WITH OPEN QUESTIONS**.
Anchor-role selection under DEC-0008 and implementation/validation items
remained open at STEP 06 close; STEP 07 has since started as recorded above.

## STEP 06 Gate

Required plan artifacts are present: `DEMO_ARCHITECTURE.md`,
`DEMO_REPOSITORY_SPEC.md`, `DEMO_MATRIX.md`, and `DEMO_RUNBOOK_SPEC.md`.
The specification has been updated from the implementation-readiness audit
and the accepted DEC-0011/DEC-0012. Selected planning direction does not
claim that behavior has been implemented, trialed, or observed.

**Documentation artifact gate:** PASS WITH OPEN QUESTIONS.

**STEP 06 status:** COMPLETE WITH OPEN QUESTIONS. The repository, local
sibling path, environment, and delivery direction are accepted by
DEC-0011/DEC-0012. Do not create the Demo repository, code, or Trial until the
user starts STEP 07. DEC-0008's Anchor roles remain proposed. Current
product/account support and feasibility evidence remain STEP 07 validation
items; do not imply these have been checked.

This STEP does not create the Demo Repository, educational Git states,
Slide Map, final slides, or PPT. It does not start STEP 07.
