# Demo Matrix

> Status: **Selected planning direction; Demo implementation and trials remain pending**
>
> Date: 2026-09-27

This matrix maps candidate Demos to Story Beats and the existing Curriculum
Demo allocation. The rows are candidates; their presence does not mean the
corresponding Story Demo has been run or validated. Repository
language/domain/strategy are selected in DEC-0011; its local sibling path is
selected in DEC-0012. Implementation and product-specific paths remain for
STEP 07 under OQ-005.

## Feasibility Rating Key

- **PLAUSIBLE:** the proposed repository shape can support this scenario; no
  execution evidence exists yet.
- **TRIAL REQUIRED:** the scenario appears designable, but setup, readability,
  benchmark stability, or exact workflow must be checked before selection.
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
Desktop; recheck current product support and account behavior before a Trial.
Every HIGH Anchor requires a current-state check, a rehearsed fallback, and a
captured alternative. The current fallback column and the table below define
those alternatives; no feature availability is assumed.

## Candidate Feasibility Matrix

The feasibility rows below assess only the selected Python Synthetic Image
Processing CLI. They are planning judgments, not implementation or product
behavior evidence.

| Required scenario | Required | Selected direction | Difficulty / notes |
|---|---:|---|---|
| Repository exploration | Yes | PLAUSIBLE | Keep modules and call path small; exact structure is STEP 07 work. |
| Initial bug | Yes | PLAUSIBLE | Candidate crop-boundary case; use a documented contract and regression check. |
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

Following STEP 07, every Demo receives one final acceptance status:

| Final status | Acceptance meaning |
|---|---|
| VALIDATED LIVE | A rehearsed Live run met its observable, bounded success criteria in the selected environment. |
| VALIDATED HYBRID | A Live path was validated and a prepared fallback was also checked. |
| VALIDATED RECORDED | A reviewed recording is suitable because Live risk is too high. |
| VALIDATED CAPTURED | Reviewed result, diff, log, or output is the suitable evidence. |
| VISUAL ONLY | A reviewed visual communicates the point more clearly than execution. |
| REJECTED | Trial or review found insufficient teaching value or reproducibility; record the reason. |

Until STEP 07 evidence exists, Matrix status remains CANDIDATE (or BLOCKED
where a dependency prevents a Trial). These final labels must not be applied
based on design alone.

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
| Build, Test, Benchmark | PARTIALLY RESOLVED | Purpose and evidence controls are specified; exact commands, workload, and results await STEP 07. |
| Skill / Subagent / Memory | OPEN / CONDITIONAL | OQ-005/OQ-008; no mechanism assumed. |
| Stale scenario | PARTIALLY RESOLVED | One justified Test-layout/procedure change leaves one reusable workflow stale; exact change and visible failure need STEP 07. |
| Evaluation / Regression | PARTIALLY RESOLVED | EVAL-01–04 and a bounded negative check proposed; validate tasks in the repository. |
| State model / reset strategy | PARTIALLY RESOLVED | State transitions and a disposable-checkout strategy are specified; actual refs, reset commands, and results await implementation. |
| Anchor selection / delivery / fallback | PARTIALLY RESOLVED | Four roles remain proposed under DEC-0008; HYBRID mode and prepared capture/expected result/fallback are accepted requirements. |
| Meta Example | NOT USED IN STEP 06 | OQ-013 may be revisited only if later actual history supports it. |

**STEP 06 planning gate:** COMPLETE WITH OPEN QUESTIONS. STEP 07 has not
started. Implementation, Agent trials, and product/account checks remain
open.

## Demo Architecture Quality Audit

| Audit question | Result | Evidence / boundary |
|---|---|---|
| Every Demo has a Story question and Beat. | PASS as proposal | Candidate matrix references Story Beats. |
| The design is not a feature showcase. | PASS | Product mechanisms are conditional and Story-led. |
| One Project evolves through the Anchors. | PASS as proposal | Candidate continuity is explicit; candidate not built. |
| Domain explanation is small and the screen is readable. | NEEDS STEP 07 VALIDATION | Keep operations elementary; cold-read and projector review remain. |
| Build/Test and a meaningful benchmark exist. | PARTIAL | Purpose and evidence controls are specified; implementation and benchmark trial are pending. |
| Stale cause, evaluation, and regression are inspectable. | PASS as controlled design | Exact workflow artifact and commands remain TBD. |
| State, input, output, and fallback are reproducible. | PARTIAL | State strategy proposed; commit IDs, commands, and actual environment evidence remain for implementation. |
| Product capability claims match the selected environment. | NEEDS CHECK | Recheck current account/surface behavior under OQ-005. |
| Failures and successes are fairly represented. | PASS as constraints | No observed result is claimed. |

## References

- `plan/DEMO_ARCHITECTURE.md`
- `plan/DEMO_REPOSITORY_SPEC.md`
- `plan/DEMO_RUNBOOK_SPEC.md`
- `plan/CURRICULUM.md`
- `plan/STORY_ARCHITECTURE.md`, `plan/STORY_BEATS.md`,
  `plan/TRANSITIONS.md`
- `references/CLAIMS.md`, `references/RESEARCH_GAPS.md`,
  `references/product/CAPABILITY_MATRIX.md`
