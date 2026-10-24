# Demo Runbook Specification

## Current ACT4 refinement — DEC-0081

S76–S85 now distinguish evaluation scope, representative-task risks, rule
side effects, evidence-to-next-judgment Loop, actual reporting changes and
C++ transfer. S82 is the recording decision, S83 its partial follow-up,
and S84 maps the actual records to the model. S85 closes the applied
judgment; S86 retains the full-course recap. Preserve93/379, every Slide
budget/Mode, stable IDs,11Templates/27Variants and all claim boundaries.
S68–S75 retain DEC-0080. Current cues and details are in
[ACT4_FLOW_REVISION](ACT4_FLOW_REVISION.md); earlier descriptions remain
history where their literal screen/operation cues differ.

> 최신 ACT3 설명 순서: DEC-0062 / [ACT3 흐름 설계](ACT3_FLOW_REVISION.md). S50–S67의18장·85분과 장별 시간·Mode·ID는 유지한다. Skill 문서/관찰 대응, Subagent·Memory의 가정→현재 선택, 실제 구성→전체 작업 환경의 역할을 정렬했다. 아래 원본 기획·과거 검증 이력은 보존한다.

> **현재 기준: DEC-0060 /93장·379분 (2026-10-22).** ACT 장수10/21/18/18/18/8, 시간40/63/81/85/80/30분. Mode Lecture143/Demo73/Case88/Reflection21/Transition22/Q&A32분. ACT2는 S32–S49이며 기존90장 내용·장별 시간을 보존하고3장·11분을 더했다. 사용자 허용 상한720분은 목표 시간이 아니다. [현재 번호 대조](SLIDE_ID_MIGRATION_93.md), [ACT2 흐름 설계](ACT2_FLOW_REVISION.md). 과거 Prototype/Decision/검증 기록은 당시 판본이며 실환경·리허설은 UNVERIFIED다.

> Status: **SPECIFICATION — actual runbooks require a selected and trialed
> repository/environment**
>
> Date: 2026-09-27

This document defines the required schema and operating rules for future
Demo runbooks. It does not contain an executable Demo script or assert that
any Demo has been run. Runbooks must follow
`plan/DEMO_ARCHITECTURE.md` and
`plan/DEMO_REPOSITORY_SPEC.md`.

## Purpose

Help an instructor run a bounded, observable, recoverable Demo that answers
one Story question. The runbook protects time, state, evidence, audience
comprehension, and a prepared recovery path.

## Runbook Record Schema

Every future Demo Runbook uses the following fields. Use `TBD` rather
than guessing. For any non-Live case, state why that mode is more suitable.

```markdown
# DEMO-XXX — Title

Planning Status:
CANDIDATE / SELECTED / BLOCKED

Final Validation Status (after STEP 07):
VALIDATED LIVE / VALIDATED HYBRID / VALIDATED RECORDED /
VALIDATED CAPTURED / VISUAL ONLY / REJECTED

Story Beat:
BEAT-...

Related Invariants:
...

Act:
...

Delivery Mode:
LIVE / RECORDED / CAPTURED / VISUAL / HYBRID

Purpose:
Why this Demo exists and what Story transition it serves.

Audience Question:
What should the audience consider before the Demo begins?

Starting Repository State:
STATE-XX

Environment:
OS, architecture, language runtime, build/test/benchmark versions,
Codex interface/account/model when available, execution/permission mode.

Repository Commit / Tag:
...

Working Directory:
...

Prompt:
Exact natural task-level prompt used for the recorded or Live run.

Expected Agent Behavior:
Plausible range of useful behavior; do not prescribe a scripted answer.

Watch For:
Small set of visible observations that support the Story.

Success Criteria:
Outcome-based checks. State how a reasonable alternate path still succeeds.

Expected Output:
Known functional output, test evidence, diff, or bounded result.

Verification:
Exact checks actually prepared and their expected result. Never invent a pass.

Estimated Time:
Setup / Execution / Observation / Interpretation / Transition.
Total must fit the Curriculum Demo budget.

Time Risk:
LOW / MEDIUM / HIGH

Execution Risk:
LOW / MEDIUM / HIGH

Product Volatility:
LOW / MEDIUM / HIGH; see the rating key in DEMO_MATRIX.md.

Current-State Recheck:
Date, official source, selected product surface/account, observed behavior,
and unresolved limits. Use TBD before the target environment is selected.

Live Value:
HIGH / MEDIUM / LOW

Known Variance:
Model, environment, benchmark, interface, or permission variability.

Failure Modes:
Classify as Product Variance, Environment Failure, Repository Design
Failure, Story Assumption Failure, or Product Capability Mismatch.

Fallback:
Reviewed capture, recording, visual, or recovery step and its trigger.

Captured Alternative:
For a HIGH-volatility Anchor, identify the prepared trace/output/diff that
preserves the teaching point if the current product path is unavailable.

Fallback Threshold:
Rehearsed cutoff that leaves time for interpretation and transition.

Transition:
What next Problem / Insight follows this Demo?

Evidence:
Related Claim, Research source, Demo Trial, or captured observation.

Do Not Claim:
What this one case does not establish.

Trial / Run Record:
Date, state, prompt, environment, actual observations, outcome, and limits.
```

## Prompt Design and Evolution

Prompts must be natural for their Story stage and Developer maturity. Do not
use a prompt to force a particular file count, output, failure, success,
command, or product-feature call. Give enough information for a fair task,
not the answer that the Demo is meant to observe.

The planned prompt progression is:

| Stage | Prompt shape | Purpose |
|---|---|---|
| Stage 0 | A simple read-only question about where a feature lives. | Observe repository search and path tracing without a file list. |
| Stage 1 | Goal, task context, constraints, requested process, and verification. | Show task specification and investigation-first value. |
| Stage 2 | A shorter task-specific request; stable Project facts live in the Project's maintained context. | Show separation between task and Project context. |
| Stage 3 | A short task request invoking a reusable procedure, if supported. | Show workflow reuse and visible checks. |
| Stage 4 | Ask why an old Test procedure was used and prohibit changes during investigation. | Observe cause analysis before repair. |
| Loop | Ask for an evidence-backed cause and a scoped change at the implicated layer, followed by representative verification. | Observe the change/evaluate/regression loop. |

Exact prompts are filled only after the Project, surface, and states are
selected. A reasonable Agent path that differs from the anticipated path may
still meet the Success Criteria.

## Observation and Success Criteria

Observe only the few actions that matter to the Story. Do not narrate every
tool call or imply that one run predicts every task.

| Demo | Watch For | Outcome-based success |
|---|---|---|
| Repository exploration | Search/read/trace sequence; relevant source and test; no premature edit. | The relevant module and call path are explained with inspectable evidence. |
| Project Context | Project rule source; which facts need not be repeated; where detailed facts live. | A task-specific Prompt can rely on current, relevant Project guidance without hiding the source of truth. |
| Reusable workflow | Baseline, plan, correctness check, benchmark/comparison, review. | The essential steps and verification are performed or their omission is visible; no exact output wording is required. |
| Harness Improvement Loop | Failure evidence; project source vs reusable artifact; cause hypothesis; scoped diff; rerun; evaluation/regression. | The change addresses the evidenced cause at the appropriate layer and is checked on representative work. |

For each run, include at least one observable artifact: relevant file,
command/output, test, diff, source reference, or captured result.

## Delivery Modes and Recovery

- **LIVE:** use for a short Agent behavior with high Live Value and a rehearsed
  time budget.
- **RECORDED:** use when coordination or runtime is too variable for a bounded
  Live window.
- **CAPTURED:** use when a reviewed trace, diff, terminal output, or result is
  sufficient evidence.
- **VISUAL:** use for architecture, lifecycle, routing, or another concept
  that is clearer as a diagram than an execution.
- **HYBRID:** use Live while useful and preserve a prepared fallback that can
  continue the Story without implying the Live run succeeded.

Recovery sequence:

1. **Reasonable alternate Agent path:** keep it if it answers the question;
   explain the difference.
2. **Partial omission:** one short follow-up may request the missing task
   evidence, without forcing a product feature or output.
3. **Environment/tool failure:** switch to the prepared capture.
4. **Demo cannot run:** use a recording or visual and state the reason.

Do not conceal failure by improvising an unsupported result. A controlled
educational state and an observed real failure must be labeled separately.

## Failure Classification

| Type | Example | Response |
|---|---|---|
| Product Variance | Agent uses another reasonable search path. | Interpret it against the Success Criteria; keep it if evidence is sound. |
| Demo Environment Failure | Network, dependency, permission, tool, or workspace failure. | Use the prepared fallback and record the environment issue. |
| Repository Design Failure | Task is unclear, output is too large, or the cause is hidden. | Stop and revise the Repository Specification before claiming a valid Demo. |
| Story Assumption Failure | Observed behavior does not demonstrate the assumed learning point. | Reconsider the Demo/Story relationship; do not blame the Agent. |
| Product Capability Mismatch | Current product behavior differs from Research or expectation. | Recheck official documentation and the selected account/surface; update dependent plans through change control. |

## Reproducibility Record

Before each Trial and rehearsal, capture:

- Trial/run ID and date.
- Repository state ID and commit/tag; confirm a clean working tree.
- Exact prompt and working directory.
- OS, architecture, runtime, dependency lock/cache, build/test/benchmark
  configuration.
- Input data and expected functional result.
- Project documentation, `AGENTS.md`, reusable workflow, and other
  relevant Harness state.
- Codex interface/account/model and execution/permission mode, when exposed.
- Actual observed steps, outputs, unexpected variance, duration, verification,
  fallback use, and limitations.

These records reduce setup variance and help diagnose differences. They do
not make probabilistic Agent behavior exactly reproducible.

## Waiting, Screen, and Time

- During waits, the instructor points to one previously defined Watch For
  item; do not fill silence by narrating every intermediate action.
- Choose a rehearsal-based fallback threshold per Demo. It must occur early
  enough to leave the reserved Observation, Interpretation, and Transition
  time. Never exceed the section's current Curriculum Demo slot to await an
  unproductive run.
- Prepare terminal/editor zoom, short commands, small diffs, and concise logs.
- Hide irrelevant panes. Avoid multiple Agent windows when one trace or
  captured result explains the point more clearly.
- The `Estimated Time` fields sum to the existing Demo slot, not a new
  time allocation. Setup before class is recorded as operational preparation;
  on-screen setup is included in the instructional slot.

## Evaluation and Regression Runbook

The Harness Anchor should use the same task before and after the correction
when possible, then inspect the small evaluation set:

- **EVAL-01 Bug Fix:** investigate first; use the current test procedure and
  show the regression check.
- **EVAL-02 Performance:** establish a baseline; preserve functional output;
  run the current benchmark procedure; compare measured results.
- **EVAL-03 Documentation-only:** avoid unnecessary Build/Benchmark work and
  choose only checks justified by the change.
- **EVAL-04 Small Refactor:** stay in scope, use relevant checks, and avoid an
  unnecessary full benchmark.

If an overbroad rule such as “always run the full benchmark” is used as a
captured negative case, show that it may satisfy EVAL-02 while adding
unnecessary work to EVAL-03. This supports a bounded regression lesson; it
does not prove that all rules are harmful.

## Trial Record

If candidate uncertainty requires a minimum prototype, keep it separate from
the eventual Demo repository:

```text
Trial ID:
Candidate:
Question:
Minimal Setup:
Environment:
Observation:
Result: PASS / PARTIAL / FAIL
Implication:
Artifacts: temporary / retained
Limitations:
```

Do not turn a successful Trial into automatic candidate acceptance.

## Evidence Boundary and Safety

- Use the `Do Not Claim` field to record limits specific to that Demo.
- State case-bound observations as case-bound. Do not generalize one Prompt,
  Skill, Subagent, benchmark, or Agent run to every task or account.
- Use actual benchmark values only after recording them; do not prefill a
  value to make the Story more persuasive.
- Do not portray a designed-for-training history as authentic work history.
- Use a local repository, synthetic data, no production credentials, no
  customer/company data, no production database, no deployment permission,
  and no destructive external action.
- Limit Agent permission to the local task. Follow the current verified
  permission model for the chosen Codex surface; this specification does not
  choose or describe a current product permission guarantee.
- Use external source code or data only after license, modification,
  redistribution, attribution, and presentation-use checks.

## References

- `plan/DEMO_ARCHITECTURE.md`
- `plan/DEMO_REPOSITORY_SPEC.md`
- `plan/DEMO_MATRIX.md`
- `plan/CURRICULUM.md`
- `references/CLAIMS.md` and `references/sources/SOURCES.md`
