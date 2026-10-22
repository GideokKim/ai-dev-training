# Demo Matrix

> Current slide ownership: DEC-0060 /93slides. TRIAL-005A result S45; TRIAL-005B result S46; comparison S47; recap S48; TRIAL-006/007 recurrence S50; Skill S53–55; benchmark S58. See SLIDE_ID_MIGRATION_93.md and the current SLIDE_MAP.md. All original State/Trial records and dated slide references below remain historical; no Trial or product code changes.

> **현재 기준: DEC-0038 / 82장 (2026-10-21).** S11·S12의 요청·가능한 해석을 시각화하고 새 S13을 삽입했다. 종전 S13–S81은 S14–S82로 이동하며 S01–S12 번호는 유지한다. S12 Case 4분을 S12 2분 + S13 2분으로 나눠 360분·ACT/Mode/Section 총량을 보존한다. [82장 번호 대조·문서 범위](SLIDE_ID_MIGRATION_82.md). 과거 Prototype·Decision·실제 Asset 경로와 판본 번호는 보존한다.

## 2026-10-18 — Current DEMO-04A Setting (DEC-0027)

The user accepted the original 80-slide S57 pilot's hypothetical setting (current S59). S58 starts with the
Project and reusable Workflow both directing unit tests. A need to verify
module interactions expands the official Project scope to unit plus
integration tests; the Workflow still directs unit tests only. S59 shows the
instruction-scope mismatch, not execution or a PASS/FAIL result. S60–67 remain
conceptual. No command, runner implementation, actual missed test, Trial or
Product State is asserted. Historical decisions and observed evidence below
remain preserved; this clarification supersedes only the unspecified reason.


> Status: **STEP 07 complete with open questions; DEC-0007's aggregate
> schedule is accepted and DEC-0022 sets STEP 08 Slide Map readiness to READY
> (2026-10-02). Observed Product path ends at STATE-04-PERF; DEC-0020 found
> no justified Project Evolution and DEC-0021 separates conceptual DEMO-04A
> from observed Meta DEMO-04B. Windows/Desktop rehearsal and current product
> checks remain open for Final Content Freeze; Q&A and Reflection/Transition
> placement is assigned to STEP 08. No new Product State or Trial added; the
> Demo checkout has no remote.**
>
> Date: 2026-09-30

This matrix maps candidate Demos to Story Beats and the existing Curriculum
Demo allocation. The rows are candidates; their presence does not mean the
corresponding Story Demo has been run or validated. Repository
language/domain/strategy are selected in DEC-0011;
its local sibling path is selected in DEC-0012. STATE-00 was implemented and
reset-checked; its half-open crop correction is now recorded as
`STATE-00-FIXED` after rerunning the required checks in the original repository.
TRIAL-001, TRIAL-002, TRIAL-003, and TRIAL-004 are bounded Codex CLI
observations.
STATE-01 is recorded at commit `14baf81746a981d7cd96b7a014ea06f28c3dd6b4`
and tag `STATE-01`. STATE-02 is recorded at commit
`55c045523ed1409449d7eea5b0d873983fe101b6` and tag `STATE-02`; no remote
push was performed, as instructed. Final presentation-interface/account
behavior and Live-path readiness remain subject to OQ-003/OQ-005 and Final
Demo Rehearsal.

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

Ratings are STEP 06 planning estimates, not current capability claims.
DEC-0016 records macOS as the current development and partial automated-
validation host; the learner audience is primarily Windows-based, with its
exact environment still open under OQ-003. TRIAL-001 used Codex CLI 0.154.0
and does not validate Desktop or account behavior. Recheck the actual
presentation interface for the Final Anchor during Final Demo Rehearsal.
Every HIGH Anchor requires a current-state check, a rehearsed fallback, and
a captured alternative. The current fallback column and the table below
define those alternatives; no feature availability is assumed.

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
| Performance task | Yes | IMPLEMENTED (DEC-0019) | STATE-04-PERF applies the re-investigated `image_statistics` row-reduction candidate; the original resize target in DEC-0015 is superseded for this product transition, while its resize benchmark remains an unchanged supporting check. |
| Benchmark | Yes | BASELINE TOOL IMPLEMENTED | A deterministic standard-library tool is committed as a STATE-04 preparation commit, without a separate State tag. |
| Reusable workflow | Yes | TRIAL-008 PASS (CLI) | Repository-owned Skill was discovered and explicitly loaded in Codex CLI 0.154.0; Desktop behavior remains unverified. |
| Complex investigation | Yes | CANDIDATES REVIEWED | Candidates A/B/C are manageable by one Agent at STATE-04; revisit only after real task complexity changes. |
| Subagent | No | DEFERRED — NOT JUSTIFIED AT STATE-04 | No primary or supporting Live anchor. Reconsider only if role/context separation value exceeds coordination cost for a real task. |
| Durable project knowledge | Yes, conceptually | NOT JUSTIFIED YET IN THE PRIMARY REPOSITORY | No cross-task rediscovery candidate meets the Memory gate; use a visual or conceptual case if the distinction remains useful. |
| Product Memory / Memory staleness | No | NOT SELECTED | Do not choose a product mechanism before a durable-knowledge need exists and target-surface behavior is verified. |
| Working Harness | Yes | OBSERVED PRODUCT SUCCESS through `STATE-04-PERF` | The bounded statistics change passed recorded correctness and benchmark checks; do not attribute every result to one Harness component. |
| Project evolution | Yes | NO IMPLEMENTATION-READY CANDIDATE | DEC-0020 found no independently justified change that naturally makes the current Skill stale. |
| Stale Harness | Yes, as a Story concept | CONCEPTUAL ONLY in `DEMO-04A` | Label constructed before/after states as conceptual; no stale artifact or Product State exists. |
| Repeated failure | Yes, if represented | NO PRODUCT FAILURE OBSERVED | Do not imply a recurring incident or failed Agent run; `DEMO-04A` is a controlled teaching model. |
| Cause analysis | Yes, conceptually | DESIGNED, NOT TRIALED | Use the conceptual case to show how evidence would identify the affected layer; no actual failure cause is claimed. |
| Harness update | Yes, conceptually | DESIGNED, NOT IMPLEMENTED | No repository Skill repair occurred. `DEMO-04B` records a Training Production evaluation/reporting change instead. |
| Evaluation | Yes | PARTIAL EVIDENCE | `EVAL-01/02` have separate observed Bug and Performance evidence; `EVAL-03/04` are conceptual adjacent-task examples, not completed Trials. |
| Regression | Yes | DESIGNED, NOT OBSERVED | Keep negative checks conceptual; no post-repair regression result exists. |

**Selection implication:** DEC-0011 resolves repository source, language,
domain, and delivery direction. DEC-0016 clarifies the environment roles:
macOS is the current development/validation host, the learner environment is
Windows-centric with specifics open, and the Demo remains OS-independent in
design. The Product path is implemented through `STATE-04-PERF`; classroom
acceptance and product-surface evidence remain conditional under OQ-003/OQ-005.
The selected repository direction is no longer a user-choice gate.

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
| 4. Split conceptual-staleness and observed-feedback evidence | HIGH | LOW: no Live path required | LOW–MEDIUM | HIGH | HIGH: labeled controlled visual and captured history/evidence audit | 12 min across two ACT 4 slots | APPROVED EVIDENCE ROLES; delivery details pending |

Anchor Demos use HYBRID delivery where an Agent interaction provides Story
value. Anchor 3 demonstrates the repository-owned reusable Skill selected
by DEC-0017; verify discovery and loading on the selected surface before
claiming that product behavior. The accepted ACT 4 role split is not Live:
`DEMO-04A` is conceptual and visual/captured, while `DEMO-04B` is a captured
supporting Meta Case.

## Supporting Demo and Visual Case Evaluation

| Candidate | Story contribution | Cognitive cost | Time / execution cost | Proposed disposition |
|---|---|---:|---:|---|
| Prompt Before/After | Shows Prompt value before repeated Project Context. | LOW | ACT 1's existing 8 Demo min | SUPPORTING, captured or short Live after Trial |
| Context growth / relevance / routing | Shows why accumulating every fact is not the answer. | LOW–MEDIUM | ACT 2's existing 5 Demo min plus case/visual time | VISUAL + CAPTURED; do not force a Live failure |
| Subagent role comparison | Makes role/context separation and coordination visible. | MEDIUM–HIGH | ACT 3's existing 5 Demo min | DEFERRED — NOT JUSTIFIED AT STATE-04; if a future case remains useful, VISUAL or CAPTURED EXTERNAL / CONCEPTUAL; no primary or supporting Live |
| Durable knowledge reuse | Shows why a verified Project fact may be worth retaining. | MEDIUM | ACT 3's existing 2 Demo min | No primary-repository instance yet; retain as a VISUAL or CAPTURED CONCEPTUAL CASE only if useful; product Memory remains unselected |
| Verification / Harness reveal | Connects commands, environment, and checks after components emerge. | LOW–MEDIUM | ACT 3's existing 1 + 4 Demo min | VISUAL/captured; verification also remains inside Anchors 3 and 4 |
| Git diff / review | Makes a scoped Harness change inspectable. | LOW | Inside Anchor 4 | EMBED in Anchor 4; not a separate Demo |
| Regression | Shows an overbroad rule helping one task and burdening another. | LOW | Inside ACT 4's proposed 5-minute DEMO-10 or captured Case | CAPTURED supporting check; do not add a long Live run |
| Training-repository Meta Example | Can make real production evaluation / workflow feedback concrete. | MEDIUM | ACT 4 DEMO-04B's proposed 8 min | ACCEPTED supporting-only under DEC-0021; keep it distinct from Product Demo behavior |

Subagent and Memory are not Anchor dependencies. A mechanism may remain visual
or omitted if it creates more cognitive or execution cost than Story value.

## Visual Case Candidates

Create Visuals in the later Slide step. This document records their purpose
and Story relation only; it does not create diagrams or animation.

| Visual ID | Purpose | Story Beat / ACT |
|---|---|---|
| VIS-01 | Show Context growth and routing as a relevance problem, not a line-count threshold. | BEAT-011–017 / ACT 2 |
| VIS-02 | Conceptually compare one broad task with independent investigation roles and coordination cost; do not depict this as an implementation in the primary Demo. | BEAT-023–027 / ACT 3 |
| VIS-03 | Conceptually show the durable-knowledge lifecycle and distinguish Memory sources; no current primary-Demo Memory artifact is implied. | BEAT-028–032, BEAT-054 / ACT 3 |
| VIS-04 | Reveal the bottom-up Harness after its elements have solved needs. | BEAT-035–036 / ACT 3 |
| VIS-05 | Trace an observation to a cause hypothesis and the matching artifact layer. | BEAT-043–045 / ACT 4 |
| VIS-06 | Show Harness technical debt after Project change. | BEAT-039–042 / ACT 4 |
| VIS-07 | Contrast Product Loop with Harness Improvement Loop. | BEAT-050–053 / ACT 4 |
| VIS-08 | Illustrate Minimum Effective Harness as a course heuristic. | BEAT-056–057 / ACT 4 |
| VIS-09 | Recap the observed Product path `STATE-00 → STATE-04-PERF`, separating the benchmark-preparation commits from named States and the ACT 4 conceptual/Meta cases. | BEAT-060–070 / ACT 5 |
| VIS-10 | Compare opening and ending mental models without implying full automation. | BEAT-069–071 / ACT 5 |
| VIS-11 | If useful, illustrate a sourced fact's scope and freshness as a teaching model; no `STATE-06`, Memory artifact, or actual later reuse is claimed. Keep separate from the primary stale-workflow chain. | BEAT-028–032, BEAT-054–057 / ACT 3 → ACT 4; optional existing ACT 4 Case time |

## Candidate Demo Matrix

Repository direction is selected, but all entries remain **CANDIDATE** until
implementation and feasibility evidence are reviewed. Story Beat references follow
`plan/STORY_BEATS.md` and `plan/TRANSITIONS.md`.

| Demo ID | Act | Story Beat | Question | Repository State | Mode | Time | Time Risk | Execution Risk | Teaching Value | Fallback | Status |
|---|---|---|---|---|---|---:|---|---|---|---|---|
| DEMO-01 | ACT 0 | BEAT-002–003 | Must the Developer find every relevant file first? | STATE-00 | HYBRID | 8 min | MEDIUM | MEDIUM | HIGH | Captured search/read/trace | CANDIDATE |
| DEMO-02 | ACT 2 | BEAT-008–010 | Why repeat the same Project facts in every Task? | STATE-00-FIXED → STATE-01 | HYBRID | 8 min | MEDIUM | MEDIUM | HIGH | Before/after instructions and reviewed trace | CANDIDATE |
| DEMO-03 | ACT 3 | BEAT-020–022 | Why repeat the same verification procedure? | STATE-03 → STATE-04 → STATE-04-PERF | HYBRID | 8 min | HIGH | MEDIUM–HIGH | HIGH | Procedure, captured checks, benchmark record | CANDIDATE |
| DEMO-04A | ACT 4 | BEAT-038–046 | How can a correct reusable workflow become stale after the Project changes? | Conceptual controlled case; no Product State or Trial | VISUAL / CAPTURED CONTROLLED | 4 min | LOW | LOW | HIGH | Explicitly labeled current-source vs old-workflow sequence | APPROVED ROLE; detailed visual pending |
| DEMO-04B | ACT 4 | BEAT-058–059 | What did observed Trial evidence change in the production system? | Training-production history; no Demo Product State | CAPTURED / VISUAL | 8 min | MEDIUM | LOW | HIGH | Dated timeline and claim-audit table | APPROVED SUPPORTING META ROLE |
| DEMO-05 | ACT 1 | BEAT-004–007 | Which task information makes a request actionable? | STATE-00 → STATE-00-FIXED | CAPTURED / short LIVE | 8 min | MEDIUM | LOW–MEDIUM | MEDIUM–HIGH | Side-by-side natural prompts and bounded result; failing-to-passing boundary evidence | CANDIDATE |
| DEMO-06 | ACT 2 | BEAT-011–017 | Does every Project fact belong in core instructions? | STATE-01 → STATE-03 | VISUAL / CAPTURED | 5 min | LOW | LOW | MEDIUM–HIGH | Context map and curated diff | CANDIDATE |
| DEMO-07 | ACT 3 | BEAT-023–027 | Must one Agent handle every investigation role? | Future state only if actual project/task complexity crosses the role-separation gate | VISUAL or CAPTURED EXTERNAL / CONCEPTUAL | 5 min | LOW | MEDIUM | MEDIUM | Role map and reviewed conceptual case | DEFERRED — NOT JUSTIFIED AT STATE-04 |
| DEMO-08 | ACT 3 | BEAT-028–032 | Which verified fact is worth retaining? | No primary-repository State selected; requires observed cross-task rediscovery | VISUAL / CAPTURED CONCEPTUAL | 2 min | LOW | LOW–MEDIUM | MEDIUM | Source, scope, provenance, and freshness visual | DEFERRED — NOT JUSTIFIED AT STATE-04 |
| DEMO-09 | ACT 3 | BEAT-033–036 | What does a work system need to observe and verify? | STATE-03 → STATE-04-PERF | VISUAL / CAPTURED | 5 min | LOW | LOW–MEDIUM | MEDIUM–HIGH | Tool-to-check map and bounded checks | CANDIDATE |
| DEMO-10 | ACT 4 | BEAT-047–049 | Does one passing task prove a safe system change? | Four-row evaluation set; no new Product State or task execution | VISUAL / CAPTURED conceptual matrix | 5 min | LOW | LOW | HIGH | EVAL-01/02 prior observed task references; EVAL-03/04 designed adjacent-task checks; no new outcome | CANDIDATE; visual scope reconciled per STEP 08 §181–190 |
| DEMO-11 | ACT 4 | BEAT-054–057 | What is the smallest evidence-supported system response? | Conceptual synthesis; no new Product State | CAPTURED / VISUAL | 3 min | LOW | LOW | MEDIUM–HIGH | Layer-selection and maintenance-cost comparison | CANDIDATE |
| DEMO-12 | ACT 5 | BEAT-060–070 | What changed from the opening workflow? | STATE-00 → STATE-04-PERF | VISUAL | 2 min | LOW | LOW | HIGH | Observed Product evolution timeline with conceptual and Meta paths clearly separated | CANDIDATE |

The row times are proposed slots, not observed run lengths. The primary
Product rows use the same evolving repository. DEMO-04A is a conceptual case;
DEMO-04B is separate Training Production history. Neither extends the Product
State timeline.

### Product Volatility and Recheck Plan

| Demo ID | Volatility | Product dependency / boundary | Recheck and captured alternative |
|---|---|---|---|
| DEMO-01 | HIGH | Current Codex Desktop/account behavior, repository access, and observable read-only investigation still need checking. | Recheck official product guidance and target account/surface before Trial; use the captured search/read/trace. |
| DEMO-02 | HIGH | Agent use of repository project instructions depends on current behavior and setup. | Recheck current instruction behavior before Trial; use the before/after instruction files and reviewed trace. |
| DEMO-03 | MEDIUM–HIGH | TRIAL-008 observed repository Skill discovery and load evidence on Codex CLI 0.154.0; Desktop behavior is unverified. | Use the reviewed Skill, checks, and benchmark capture; keep any claim scoped to the observed CLI run. |
| DEMO-04A | LOW | No product surface is required; the scenario is constructed and must be labeled as conceptual/controlled. | Prepare a VISUAL or CAPTURED CONTROLLED EXAMPLE; do not present it as Demo history or Trial evidence. |
| DEMO-04B | LOW | Historical CLI evidence and DEC-0016 are the sources; exact MCP-result use is not evidenced. | Use a captured timeline with CONFIRMED / PARTIAL / UNKNOWN claim labels, preserving the TRIAL-007 report/stderr discrepancy. |
| DEMO-05 | LOW | The case compares task specifications and captured outcomes; it requires no named product feature. | Check the selected environment during Trial; use the side-by-side prompt and bounded result capture. |
| DEMO-06 | LOW | Repository Context map and curated diff can be shown without a product-specific interaction. | Use the prepared visual and diff capture. |
| DEMO-07 | LOW for a visual; HIGH for any future product interaction | No primary or supporting Live path is selected. A future role-separation case must first pass the repository/task complexity gate. | Keep deferred. If later justified, use a visual or captured external/conceptual case unless a new Trial validates a product surface. |
| DEMO-08 | LOW for a conceptual visual; HIGH for any product mechanism | No project-specific fact currently justifies retention; product Memory is not selected. | Keep deferred in the primary repository. Reassess only after repeated, costly rediscovery of a sourced fact that is not readily available in maintained docs or code. |
| DEMO-09 | LOW | The planned tool/check relationship is visual or captured; no specific integration is required. | Use the tool-to-check map and bounded check captures. |
| DEMO-10 | LOW | The five-minute visual uses a conceptual four-row Evaluation Set and references existing Product evidence only when kept in a separate frame. | Use EVAL-01/02 as prior evidence references; label EVAL-03/04 as designed without Trial outcomes. Do not imply a new task execution. |
| DEMO-11 | LOW | The trade-off is shown through a small captured change and explicit reasoning. | Use the reviewed diff and trade-off capture. |
| DEMO-12 | LOW | The retrospective is a static Project evolution visual. | Use the reviewed evolution timeline. |

Story-critical Anchor roles are DEMO-01, DEMO-02, DEMO-04A, and DEMO-04B.
Only product-dependent Live paths require current surface / permission
checks. DEMO-04A and DEMO-04B use the approved visual / captured paths, with
the claim boundaries shown in their fallback material.

## Demo Time Reconciliation

The current `plan/CURRICULUM.md` Demo allocation is 73 minutes. The plan
maps to it exactly and adds no instructional time:

| Act | Curriculum Demo budget | Candidate allocation | Difference |
|---|---:|---:|---:|
| ACT 0 | 8 | DEMO-01: 8 | 0 |
| ACT 1 | 8 | DEMO-05: 8 | 0 |
| ACT 2 | 13 | DEMO-02: 8; DEMO-06: 5 | 0 |
| ACT 3 | 20 | DEMO-03: 8; DEMO-07: 5; DEMO-08: 2; DEMO-09: 5 | 0 |
| ACT 4 | 22 | DEMO-04A: 4; loop model/visual: 2; DEMO-10: 5; DEMO-11: 3; DEMO-04B: 8 | 0 |
| ACT 5 | 2 | DEMO-12: 2 | 0 |
| **Total** | **73** | **73** | **0** |

Within ACT 3, the five-minute Subagent slot and two-minute Memory slot are
visual decision and lifecycle explanations. Their product implementations
remain deferred; the time is not an empty or additional Live Demo allocation.

ACT 4's accepted evidence redesign keeps the total at 22 minutes while
reallocating the existing slots: four minutes for the conceptual stale case,
two for the Loop model, five for evaluation/regression, three for the
minimum-change synthesis, and eight for the captured Meta Case. These are
planning estimates; rehearsal must check density and accessibility. If a
slot is too dense, trim supporting detail or use a visual/capture without
removing a Story transition or extending the ACT budget.

For Anchor 1–3, the eight-minute D slot is the total on-screen window,
including setup, execution, observation, interpretation, and transition.
The former 16-minute stale-state/correction anchor is replaced by the split
evidence roles above; the observed Meta Case is placed after the Loop has
been explained, at BEAT-058–059.
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
→ DEMO-04A → DEMO-10 → Loop model/visual → DEMO-11 → DEMO-04B + VIS-11
→ DEMO-12`

This keeps repository exploration before Prompt, repeated image-Project Context
before routing, the reusable workflow before optional roles/retained knowledge
and the Harness reveal, the conceptual stale case before Loop evaluation,
and the actual Meta Case after the Loop model so it supports rather than
replaces the Product story.
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
| A. Fix the half-open crop boundary | Actual TRIAL-002 Prompt and change; already fixed in the STATE-00-FIXED starting state | Reproduce the failing crop assertion, inspect its call path, exclude `x_end`, and report the result. | Preserve existing API, add no dependency, keep scope small, run project tests, and smoke-test with local synthetic data. |
| B. Refactor `graypipe.statistics.image_statistics` for readability | Rejected for TRIAL-003; repository inspection found no concrete readability defect or need | Preserve the six current output fields and values. | Use the project's `unittest` command and keep any edit scoped. |
| C. Avoid the temporary flattened pixel list in `image_statistics` | Considered, not selected; the code creates an O(n) temporary list, but no measured workload or demonstrated performance need was found, and this would move into the later Performance Story | Preserve all six statistic values while evaluating a possible single-pass implementation. | Use relevant tests, avoid an unjustified dependency, and keep changes scoped. |
| D. Clarify historical versus current crop-test status in `README.md` | Selected; run as TRIAL-003 in an isolated STATE-01 candidate worktree | Preserve the historical STATE-00 failure and accurately describe the current checked-out state. | Use the documented project test command and keep the diff scoped. |

Task B was not used: a readability-only refactor would invent a need. Task C
is a source-grounded potential memory improvement, but its performance value
has not been measured and it belongs with the later Performance Story. Task D
was selected because the two Git states and crop-test outcomes are directly
inspectable, the README currently describes the predecessor's failure without
stating the current checkout's result, and the task is a small documentation
change. The task-specific goal and expected behavior stay in the Prompt;
stable repository facts are the potential instruction-file content.

#### Trial Necessity

TRIAL-002 remains the observed crop-fix example for Task A. TRIAL-003 was
needed to check whether the newly added project instructions were discovered
and used; it is not a performance comparison with TRIAL-002. The two runs used
different tasks and do not establish repeated behavior across tasks, relative
Agent performance, or a general improvement.

#### STATE-01 Candidate `AGENTS.md` Shape

Keep the first version small and limited to stable project context:

```markdown
# Project
Local grayscale image-processing CLI using synthetic ASCII PGM data.

# Build / Run
Use the prepared build and CLI commands documented in `README.md`.

# Test
`PYTHONPATH=src python3 -m unittest discover -s tests -v`
For a narrow change, run the relevant focused test and choose broader checks as needed.

# Core Constraints
- Preserve existing CLI and image-operation behavior unless the task changes it.
- Add a runtime dependency only when the task justifies it.
- Keep changes scoped and verify relevant behavior.
```

The Demo repository now contains this 15-line, 567-byte candidate at its root.
It also keeps input and output local under Build / Run. It was checked against
the current README, package metadata, CLI, and tests. It adds no benchmark,
release, troubleshooting, architecture, Memory, Skill, Subagent, Loop, or
future-state guidance. The candidate remains uncommitted and untagged.

#### First-Success Criteria

STATE-01 first-success criteria and TRIAL-003 evidence:

1. **PASS:** `AGENTS.md` contains repository-specific facts checked against
   the current files.
2. **PASS:** the candidate is 15 lines / 567 bytes.
3. **PASS:** the Trial Prompt omitted the project test command and other
   persistent setup context.
4. **OBSERVED, bounded:** the Codex CLI task inspected `AGENTS.md`; the CLI
   did not expose a machine-readable instruction-chain trace.
5. **PASS:** without the command in the Prompt, the Agent ran the documented
   full test command; 11/11 passed. It changed only `README.md` in the Trial
   worktree. The Prompt also constrained the file scope, so do not attribute
   that scope by itself to `AGENTS.md`.
6. **PASS:** the Prompt retained the documentation goal, historical/current
   distinction, and documentation-only scope.
7. **PASS:** the candidate does not prescribe future workflows or contain
   general Project documentation.

This is a bounded first-success check, not proof of general performance,
accuracy, or improvement.

#### TRIAL-003 — AGENTS.md First Success

**Date:** 2026-09-28 (Asia/Seoul).

**Question:** Can a task-focused Prompt omit recurring project setup while
Codex uses concise repository instructions for a small, justified task?

**Task selection:** Task A was already completed in STATE-00-FIXED and was
not a new task. The proposed readability refactor had no evidenced need. A
possible statistics-memory optimization was visible in code but unmeasured
and belongs with the later Performance Story. Task D was selected because
the checked-out crop behavior and historical failing baseline can be verified
from Git and the test suite, and the README has no current-state result.

**Baseline and isolation:** starting commit
`6dab644ea53e899e6d65b70bc4383bd2901ded89`, tag `STATE-00-FIXED`, in detached
worktree `/Users/noah/workspace/education/ai-dev-training-demo-trial-003`.
The candidate `AGENTS.md` was copied into the isolated worktree. The parent
Demo worktree and its product code were not used for Trial edits.

**Interface / Product:** Codex CLI `0.154.0`, launched with
`--ephemeral --sandbox workspace-write --ignore-user-config --json`. OS and
model identity were not exposed in the run record. The CLI event stream did
not provide a structured active-instruction-chain dump. Its task inspected
and printed the root `AGENTS.md`; it then ran the exact project test command
without that command appearing in the task Prompt. Personal `readchk`, `re0`,
and `sip` skills also ran in this CLI environment, so this Trial does not
isolate `AGENTS.md` as the only context source.

**Prompt used:**

```text
README's Test section documents an intentionally failing crop-boundary baseline. Review the current repository state and the supporting files, then revise that section so future readers can distinguish the historical STATE-00 baseline from the state checked out here. Preserve the historical fact and make no claim unsupported by the repository.

Task constraints: change README.md only. This is a documentation update; do not change runtime code, tests, dependencies, or Git history. Do not commit or tag.

Expected result: a concise Test section that accurately describes both the historical baseline and the current checkout, plus the final diff and relevant verification evidence.
```

**Investigation:** Codex inspected `AGENTS.md`, `README.md`, the source and
test tree, Git tags, and the previous crop implementation. It confirmed HEAD
matched `STATE-00-FIXED` at `6dab644` and found the historical source used
`x_end + 1` while the current implementation excludes `x_end`.

**Implementation:** only `README.md` changed in the Trial worktree. It now
labels the failing behavior as the historical `STATE-00` baseline and states
that the current `STATE-00-FIXED` checkout excludes `x_end` and passes all 11
tests. No source, tests, dependency metadata, commit, or tag changed. The
README Trial edit is not part of the STATE-01 candidate.

**Verification:** Codex ran
`PYTHONDONTWRITEBYTECODE=1 PYTHONPATH=src python3 -m unittest discover -s tests -v`;
11/11 passed. It ran `git diff --check`; the Trial diff named only
`README.md`. Before TRIAL-003, the candidate repository independently passed
the full 11-test suite, the local CLI crop smoke check (`--crop 1 3` produced
2×3 and pixels `((51, 102), (255, 153), (51, 204))`), and the untracked-file
whitespace check. `pyproject.toml` and `setup.cfg` were unchanged; product
behavior matched `STATE-00-FIXED`.

**Result:** PASS for this bounded Codex CLI run. The best direct use evidence
is that the task omitted the test command while the Agent ran the command
specified in `AGENTS.md`. The Trial also used the project test guidance and
kept its diff to the task-named README. Because the CLI did not expose a
structured instruction-chain trace and personal skills also ran, this is
evidence of use, not an isolated causal test of automatic instruction
loading.

**Project Context Used:** the README pointer for documented Build / Run
commands was inspected but not needed. The `AGENTS.md` full test command was
used. The local-data rule and runtime-dependency rule were not needed for
this documentation-only change. Scope was explicitly task-specific in the
Prompt, so it is not counted as independent evidence of that AGENTS rule.

**Task-specific Context:** clarify the historical baseline versus current
checkout in README's Test section, preserve the historical fact, change only
`README.md`, make no product/dependency/history change, and report relevant
verification.

**Architecture Evidence:** the Prompt omitted repository setup and test
commands while preserving the concrete task. The project-level test command
came from `AGENTS.md` and was used; this demonstrates observed context
separation for this run. TRIAL-003 and TRIAL-002 were different tasks and
must not be compared as a performance or accuracy experiment.

**Do Not Claim:** one CLI run does not prove that AGENTS.md makes Codex more
intelligent, more accurate, or generally faster; does not establish
repeatability or product-wide behavior; and does not validate Codex Desktop,
the training account, screen readability, or a prepared Live fallback.

**ACT 2 Anchor Assessment:** The CLI run does not validate a future Desktop
presentation. Do not repeat every Engineering Trial in Desktop; if this
Anchor is selected as the Final Anchor, revalidate it during Final Demo
Rehearsal in the actual presentation interface.

**STATE-01 Readiness:** READY TO RECORD STATE-01 after a separate explicit
state-recording instruction. The candidate remains uncommitted and untagged;
do not advance to STATE-02 in this Trial.

#### STATE-01 — Recorded Project Instructions

**Purpose:** Record the successful first use of concise Project instructions
after the `STATE-00-FIXED` behavior-only correction.

**Previous state:** `STATE-00-FIXED`, commit
`6dab644ea53e899e6d65b70bc4383bd2901ded89`, tag `STATE-00-FIXED`.

**Code state:** unchanged from `STATE-00-FIXED`; no source, test, package, or
runtime-dependency files changed.

**Project docs state:** The repository `README.md` was not changed. The
README clarification made in the isolated TRIAL-003 worktree was a Trial task
result and is not part of this state.

**Instruction state:** Add only the root `AGENTS.md` containing the Project,
Build / Run, Test, and Core Constraints sections. The file has 15 lines and
567 bytes. It gives a local synthetic P2 project description, routes command
details to the README, states the current test command, and gives concise
behavior/dependency/scope rules.

**Harness state:** No Skill, Subagent, Memory, workflow, Evaluation framework,
or separate Context document was added.

**Validation environment:** macOS 26.6.2 / arm64; Python 3.9.6.

| Check | Result |
|---|---|
| Full test suite | PASS, 11/11 |
| CLI smoke, `data/sample.pgm --crop 1 3` | PASS; 2×3, 6 pixels, mean 136.0, min 51, max 255; pixels `((51, 102), (255, 153), (51, 204))` |
| `git diff --check` | PASS on the staged state diff |
| Candidate whitespace | PASS; no trailing whitespace |
| Runtime dependency metadata | Unchanged; `pyproject.toml` and `setup.cfg` unchanged |
| Product behavior | Unchanged from `STATE-00-FIXED` |
| State diff | One added file, `AGENTS.md`; no README Trial edit |

**Git record:** commit `14baf81746a981d7cd96b7a014ea06f28c3dd6b4`, subject
`docs(demo): add concise project instructions`; tag `STATE-01` points to that
commit. Previous tags `STATE-00` and `STATE-00-FIXED` remain unchanged. The
Demo repository has no remote; no push was performed. The working tree is
clean.

**Expected Demo / transition:** The bounded TRIAL-003 prompt omitted the
reusable test command; Codex used the project command and retained a
documentation-only Trial diff. This one CLI run is not evidence of improved
accuracy/performance, repeatability, or Codex Desktop behavior. Transition to
STATE-02 only after an explicit implementation instruction.

**Reproduction:** Check out tag `STATE-01` in a fresh checkout and run
`PYTHONPATH=src python3 -m unittest discover -s tests -v`. Run the local CLI
crop smoke using `data/sample.pgm` and `--crop 1 3`; compare its output to the
values above.

#### STATE-02 Context Growth Plan

**Purpose:** Show a natural next step after the first useful Project rule:
more repository work prompts a Developer to add accurate, recurring context
to `AGENTS.md`. The next question is whether all that context belongs in
every Task. Do not create a failure or a token-count threshold.

**Current state:** STATE-02, commit
`55c045523ed1409449d7eea5b0d873983fe101b6`, tag `STATE-02`. STATE-01 remains
unchanged at commit `14baf81746a981d7cd96b7a014ea06f28c3dd6b4` and tag
`STATE-01`.
The user's latest STEP 07 §§54–60 instruction selects growth in the root
`AGENTS.md` before Context Separation. This refines the prior downstream plan
that placed more detail in natural Project documents at STATE-02. The change
is recorded as accepted `DEC-0013`; `MASTER_PLAN.md` and the Context relevance
invariants are unchanged. Under the user's §§71–72 instruction, verified
STATE-02 is recorded at commit `55c045523ed1409449d7eea5b0d873983fe101b6` and
tag `STATE-02`. The commit contains only `AGENTS.md`; no remote push was made.

**Verified Context candidates:**

| Category | Candidate and evidence | Accurate now? | Reusable? | Relevant to every task? | Classification |
|---|---|---:|---:|---:|---|
| ARCHITECTURE | `process_image` loads P2, normalizes, optionally inverts, crops, resizes, saves, then summarizes; module responsibilities are visible in `pipeline.py` and the repository specification. | Yes | Yes, across pipeline and operation changes. | No; a packaging or unrelated documentation task may not need it. | Present in the always-loaded STATE-02 `AGENTS.md`; relevance is assessed below. |
| IMAGE CONTRACT | P2 input/output; positive dimensions; max value 1–65535; exact declared pixel count; normalized processing output max 255; crop range `[x_start, x_end)`; positive resize dimensions and deterministic nearest-neighbor mapping. Evidence is in `loader.py`, `normalize.py`, `transform.py`, CLI help, and tests. | Yes | Yes for image I/O and transformation tasks. | No; exact crop/resize details are task-dependent. | Present in the always-loaded STATE-02 `AGENTS.md`; relevance is assessed below. |
| TESTING | Standard-library `unittest`; module tests are under `tests/`; `test_pipeline.py` checks the local input-to-output path. `data/sample.pgm` is a synthetic 4×3 P2 image with max value 15. | Yes | Yes for code and verification tasks. | No; documentation-only changes may not need a test run or fixture details. | Present in the always-loaded STATE-02 `AGENTS.md`; relevance is assessed below. |
| COMPATIBILITY | CLI JSON summary has `width`, `height`, `pixel_count`, `minimum`, `maximum`, and `mean`; `statistics.py` computes these and `cli.py` prints JSON. | Yes | Yes for CLI and pipeline changes. | Often, but not every task needs the output schema. | Present in the always-loaded STATE-02 `AGENTS.md`; relevance is assessed below. |
| PERFORMANCE | `image_statistics` materializes a flattened pixel list; normalization and transformations also build tuple-backed image results. Evidence is visible in the current source, but no benchmark demonstrates a bottleneck. | Source observation is accurate; performance impact is unverified. | Potentially, for later measured optimization work. | No. | ON-DEMAND investigation candidate; do not state it as a proven hot path or add a benchmark workflow now. |
| DOCUMENTATION | README is the current Build / Test / Run command source; `pyproject.toml` defines pinned build tools and package metadata. | Yes | Yes when updating setup or usage guidance. | Only for setup/documentation tasks. | ON-DEMAND source reference; STATE-01 already routes commands to README. |
| WORKFLOW | Benchmark sequence and performance investigation steps. | Not a current Project fact; this is a procedure. | Reusable if selected and validated later. | No. | WORKFLOW; keep out of STATE-02 `AGENTS.md`. |

**Context placement:** STATE-02 adds only the compact ARCHITECTURE, IMAGE
CONTRACT, TESTING, and COMPATIBILITY candidates to the always-loaded
`AGENTS.md`. Detailed implementation notes, exact fixture values, and
unmeasured performance observations remain planning/on-demand candidates.
No separate Context documents, benchmark procedure, Skills, Memory,
Subagents, Loop, release, or troubleshooting catalog were added.

**Implemented STATE-02 candidate:** `AGENTS.md` now contains a short
processing-order/module note; a compact P2, normalization, crop, and resize
contract; a pointer to the module-oriented tests and integration check; and
the six CLI summary fields. The additions were checked against the sources in
the table. The existing README was not copied, no source files were copied,
and line count was not a target.

**TRIAL-004 task:** A documentation-only task to clarify in the
README Build section which pinned build tools must be prepared before running
the existing wheel command. `pyproject.toml` pins `setuptools==58.0.4` and
`wheel==0.37.0`; the README currently says to prepare the declared tools but
does not name them. Task-specific Prompt used:

```text
Clarify the README Build section by naming the pinned build tools required by the existing wheel command. Use pyproject.toml as the source of truth. Change README.md only, preserve the command, and do not install packages or alter package metadata. Report relevant verification.
```

This task was source-grounded and small. The expanded image-processing
architecture, crop/resize contracts, and fixture details were accurate but
not required to identify build-tool versions. The Trial did not require the
Agent to fail or run irrelevant tests. A diff check was appropriate for this
documentation-only change.

**Expected teaching point:** Good Project guidance can make recurring facts
available without repeating them in a task Prompt. As it grows, accurate
facts may still be irrelevant to the current task and require maintenance.
This is a relevance and context-selection question, not evidence that growth
causes model failure.

**Lost in the Middle boundary:** This Demo does not test or demonstrate Lost
in the Middle, a token threshold, model attention, or a performance/accuracy
change. The trial observes task relevance and visible instruction use only.

**STATE-02 gate:** The explicit implementation instruction was received, the
candidate was validated, and TRIAL-004 completed. STATE-02 was recorded at
commit `55c045523ed1409449d7eea5b0d873983fe101b6` and tag `STATE-02`. Context
Separation and STATE-03 remain outside the STATE-02 change.

#### STATE-02 — Growth and TRIAL-004 Result

**Baseline and record:** STATE-01 at commit
`14baf81746a981d7cd96b7a014ea06f28c3dd6b4` and tag `STATE-01` remains
unchanged. Its root `AGENTS.md` was 15 lines / 567 bytes. STATE-02 is recorded
at commit `55c045523ed1409449d7eea5b0d873983fe101b6` and tag `STATE-02`; the
committed file is 32 lines / 1,303 bytes. The STATE-02 commit contains only
`AGENTS.md`. Product code, README, and dependency metadata are unchanged.
The Demo working tree is clean; no remote push was performed.

**Repository validation:**

| Check | Result |
|---|---|
| Full tests | PASS, 11/11 |
| CLI smoke, `data/sample.pgm --crop 1 3` | PASS; 2×3, 6 pixels, mean 136.0, min 51, max 255 |
| `git diff --check` | PASS |
| State diff scope | Only `AGENTS.md` committed |
| Product code / dependencies | Unchanged |

**Context Classification after implementation:**

| Classification | STATE-02 `AGENTS.md` content |
|---|---|
| ALWAYS-ON | Project purpose; local input/output and core behavior constraints; general Build/Run and full-test entry points. |
| ON-DEMAND | Processing order; P2 and image-value contract; normalization, crop and resize semantics; test-module map and pipeline integration coverage; six CLI summary fields. These facts are present in the always-loaded file but were unnecessary to TRIAL-004. |
| WORKFLOW | Focused-test-first and task-appropriate broader-check guidance. This is brief verification guidance, not a new reusable workflow artifact. |

**TRIAL-004 task:**

> Clarify the README Build section by naming the pinned build tools required
> by the existing wheel command. Use pyproject.toml as the source of truth.
> Change README.md only, preserve the command, and do not install packages or
> alter package metadata. Report relevant verification.

**Agent behavior:** Codex CLI `0.154.0` ran in an ephemeral temporary clone
based on `STATE-01` with the STATE-02 `AGENTS.md` candidate. It inspected
`README.md`, `pyproject.toml`, and `AGENTS.md`; it identified
`setuptools==58.0.4` and `wheel==0.37.0` from `pyproject.toml`, then changed
only the README Build section. It preserved the existing wheel command,
installed no packages, left metadata unchanged, and passed `git diff --check`
in the Trial checkout. The Trial README diff was discarded with that checkout.

**Relevant Context:** The README pointer and scoped-change / verification
constraints were consistent with the task. The prompt itself named README and
`pyproject.toml` as the task boundary and source of truth, so this Trial does
not establish that expanded context caused the successful result.

**Irrelevant-but-Correct Context:** Processing order, P2 and pixel contracts,
normalization, crop/resize behavior, test layout and fixture details, and CLI
summary fields were not needed to identify the build-tool versions. The Agent
read the expanded `AGENTS.md`, but no confusion or detour caused by these facts
was observed.

**Observed Problems:** None observed in the Agent's use of Project context.
The Codex CLI emitted authentication errors for a configured external MCP
integration, then continued and completed the task. This environment noise is
not evidence of Project-context confusion.

**Engineering Inference:** As the Project grows, placing accurate details
with different task scopes in one always-loaded instruction file may raise
maintenance and relevance costs. This Trial did not measure those costs or
test whether separate files improve retrieval; that remains a STATE-03
design question.

**Claim Boundary:** This Trial does not demonstrate model degradation, lost
information, Lost in the Middle, a token threshold, or improvement from file
separation. It shows only that some accurate Project details were irrelevant
to one bounded documentation task.

**Context Architecture Question:** No, not all of this information needs to
be always present for every task. Keep the small core always-on and assess
task-specific detail for later separation; this is a design inference, not a
measured benefit.

**Readiness at the STATE-02 checkpoint:** **STATE-02 RECORDED LOCALLY.** No
remote push was performed. STATE-03, Context files, Skills, and other Harness
components were not part of the STATE-02 change.

#### STATE-03 — STRUCTURED CONTEXT AND ROUTING TRIAL

**Status:** STATE-03 is recorded at commit
`f3e2e37b1454e28c5de4c44682ebd49378ebae4b` and tag `STATE-03`. It is based on
STATE-02 and changes only root `AGENTS.md` and the three topic documents.
Product code, tests, dependencies, and README are unchanged. No remote push
was performed. `DEC-0014` is ACCEPTED.

**STATE-02**

| Item | Fixed evidence |
|---|---|
| Commit | `55c045523ed1409449d7eea5b0d873983fe101b6` |
| Tag | `STATE-02` |
| Validation | 11/11 tests, CLI smoke, and `git diff --check` passed before the state commit. |
| Scope | Commit contains only root `AGENTS.md`; product code, README, tests, and dependencies are unchanged. |

**Context Placement**

Always-on core for root `AGENTS.md`:

- Project purpose and synthetic, local-data constraint.
- README as the source for Build / Run commands.
- Full test entry point.
- Preserve public behavior, avoid unjustified runtime dependencies, and verify
  scoped changes.
- Brief routing lines that point to detailed Context when a task needs it.

On-demand details:

| Context document | Facts moved from STATE-02 |
|---|---|
| `docs/architecture.md` | `process_image` order and the responsibilities of the processing and CLI/statistics modules; observable JSON summary fields. |
| `docs/image-contracts.md` | P2 input/output, dimensions and pixel-count rules, normalization to 255, half-open crop range, and deterministic nearest-neighbor resize. |
| `docs/testing.md` | Module-oriented test locations and the `test_pipeline.py` input-to-output integration coverage. |

These are proposed boundaries. The implementation should keep each fact
once, in its topic document, while preserving the small always-on pointers.

Workflow:

Keep only the existing brief focused-test / broader-check guidance if it
remains useful. Do not create a Workflow document or Skill in STATE-03; a
larger repeatable verification procedure belongs to a later workflow decision.

**File Structure**

Proposed three-file structure:

```text
docs/
├── architecture.md
├── image-contracts.md
└── testing.md
```

Three documents are recommended because processing structure, image/CLI
contracts, and test navigation answer distinct task questions. A two-file
alternative would combine architecture with image contracts or combine
testing with implementation detail, weakening those topic boundaries for
little maintenance savings in this small repository. Keep each document
short; do not create files merely to match this outline.

**Router**

Reduce the expanded STATE-02 facts in root `AGENTS.md` to the Always-on list
and add concise task routing:

- Pipeline order or module responsibility → `docs/architecture.md`.
- P2, pixel, normalization, crop, resize, or output-contract behavior →
  `docs/image-contracts.md`.
- Test organization or integration-test coverage → `docs/testing.md`.

README Build / Run commands continue to be sourced from `README.md`.
The Router is an Engineering Pattern that helps Context discovery; it is not
a claim that the Agent will always route perfectly.

**Information Preservation**

Before considering the state ready, compare each STATE-02 fact against its
new location and current code/tests. Preserve the processing order; P2 and
pixel constraints; normalization; half-open crop semantics; nearest-neighbor
resize semantics; test mapping and integration coverage; and all six CLI
summary fields. Keep source code and tests as evidence for current behavior.
Do not silently broaden or reinterpret a contract.

**Information Preservation Audit**

| STATE-02 fact | STATE-03 location | Result |
|---|---|---|
| Project purpose and local synthetic data | Root `AGENTS.md` | Preserved. |
| README as Build / Run source | Root `AGENTS.md` points to `README.md`; README itself is unchanged. | Preserved. |
| Full-suite command and narrow-change verification guidance | Root `AGENTS.md`; focused test example in `docs/testing.md` | Preserved. |
| Preserve behavior, justify runtime dependencies, scope and verify changes | Root `AGENTS.md` | Preserved. |
| Processing order and module responsibilities | `docs/architecture.md` | Preserved. |
| Six JSON summary fields and their source | `docs/architecture.md` | Preserved. |
| P2 format, dimensions, max value, exact pixel count and pixel bounds | `docs/image-contracts.md` | Preserved from loader and `GrayImage` validation. |
| Normalize declared input range to 255 | `docs/image-contracts.md` | Preserved, including integer rounding. |
| Half-open crop range and bounds | `docs/image-contracts.md` | Preserved. |
| Deterministic nearest-neighbor resize | `docs/image-contracts.md` | Preserved, with current coordinate selection behavior. |
| Module-level test locations and pipeline integration coverage | `docs/testing.md` | Preserved. |

No STATE-02 Project fact was intentionally removed. Source code and tests
remain the evidence for current behavior.

**Repository Validation**

| Check | Result |
|---|---|
| Full tests | PASS, 11/11. |
| CLI smoke | PASS. `--crop 1 3` produced width 2, height 3, pixel count 6, minimum 51, maximum 255, and mean 136.0. |
| `git diff --check` | PASS. |
| Product code / tests / dependencies | Unchanged. |
| Changed paths | Only root `AGENTS.md` and `docs/architecture.md`, `docs/image-contracts.md`, `docs/testing.md`. |
| Context integrity | PASS; every STATE-02 fact is mapped above. |

The smoke output was `{"height": 3, "maximum": 255, "mean": 136.0,
"minimum": 51, "pixel_count": 6, "width": 2}`. The output PGM was written
inside a temporary directory and removed afterward.

These are future acceptance criteria, not results from this planning step.

**TRIAL-005A Prompt — relevant image contract:**

> Using the current sample image, investigate which source columns are
> selected when applying `--crop 1 3`, what output width results, and whether
> the end coordinate is included. Base your explanation on the repository's
> current contract and implementation. This is a read-only investigation: do
> not change any files. Give the evidence you used.

**TRIAL-005B Prompt — runtime dependencies:**

> Does this project have any runtime dependencies? Explain how you reached
> that conclusion and distinguish runtime requirements from tools needed only
> to build or package it. This is a read-only investigation: do not change any
> files. Give evidence. Do not modify files.

Task B was selected from the user's preferred candidate in STEP 07 §87. It
checks a concrete repository property and differs from the README Build edit
used in TRIAL-004.

**Claim Boundary**

The planned structure demonstrates organizing Context by scope and making
task-relevant sources discoverable. It does not claim better model
performance, automatic perfect routing, Lost in the Middle mitigation, or a
measured retrieval improvement.

**Trial Environment and Results**

Both prompts ran in separate temporary clones containing the STATE-03
candidate, using Codex CLI 0.154.0 with `--ephemeral` and `--sandbox
read-only`. After the initial combined output was truncated, both prompts
were repeated to capture compact access traces. The architecture document was
then shortened to avoid repeating image-contract details, and the final
candidate was tried once more. Results below describe that final run; earlier
runs returned the same answers and consistently read the relevant image
contract only for TRIAL-005A, though optional test-context access varied.
The final calls took approximately 25.8 seconds for TRIAL-005A and 27.9
seconds for TRIAL-005B. No Trial changed files.

| Observation | TRIAL-005A | TRIAL-005B |
|---|---|---|
| `AGENTS.md` read | Yes. | Yes. |
| `docs/architecture.md` read | Yes. | Yes. |
| `docs/image-contracts.md` read | Yes. | No. |
| `docs/testing.md` read | Yes, in the final run only. | No. |
| Source code read | `transform.py`, `pipeline.py`, `loader.py`, and `cli.py` were inspected; also ran an in-memory crop check that imported normalization and crop code. | All `src/graypipe` modules were inspected. |
| Tests read | `test_transform.py` was opened and its focused 3-test suite was run; earlier runs did not read tests. | `rg` searched `src` and `tests`; no test module was opened as a whole. |
| README read | Yes. | Yes. |
| Package config read | No. | `pyproject.toml` and `setup.cfg`. |
| Commands executed | File discovery; read of instructions, README, image/testing/architecture docs, sample, and relevant source; in-memory crop check; focused `test_transform.py` run. | File discovery; read of instructions, README, architecture and package config; import/process search across source and tests; source inspection. |
| Answer correctness | Correct: source columns 1 and 2 (zero-based), output width 2, end coordinate excluded. | Correct: no third-party runtime dependency; Python 3.9+ and the standard library at runtime; pinned `setuptools` and `wheel` are build requirements, with `pip` used by the documented build command. |
| Unnecessary context observed | `docs/architecture.md` and README were also read; architecture detail was not needed to answer the crop question. Test documentation and the focused test were relevant evidence. | `docs/architecture.md` and the full source package were read; the architecture document was not needed to inventory dependencies. `rg` also scanned tests. |
| Unexpected routing | README contains a historical STATE-00 crop-defect note; the Agent noticed it did not match current code and did not rely on it. | The Agent read architecture even though the dependency question did not route there. |
| Elapsed time | About 25.8 seconds. | About 27.9 seconds. |

Both calls emitted a configured Nimble MCP authentication error, hook
warnings, and a notice that Skill descriptions were shortened to fit the
context budget; Codex continued and returned an answer. The result is CLI
evidence, not a Codex Desktop observation.

**What Was Actually Observed**

Task-relevant access differed: TRIAL-005A read `docs/image-contracts.md`,
while TRIAL-005B did not. Both read `docs/architecture.md`, so routing was
selective for the image contract but not perfectly narrow. TRIAL-005A also
read `docs/testing.md` and `tests/test_transform.py` in the final run, but
not in its two earlier runs; TRIAL-005B did not read the testing document.
This optional access varied across repeated invocations. These bounded CLI
observations do not establish a general routing guarantee or a performance
effect.

**Claim Boundary**

The candidate and Trials show a concise root instruction file pointing to
topic-specific documents and one observed task-relevant access difference.
They do not establish better model performance, token savings, automatic or
perfect routing, Lost in the Middle mitigation, or consistent Codex Desktop
behavior. The existing README's STATE-00 note remains unchanged; its historic
scope should be clarified before it is used as a current-state claim.

**DEC-0014 Decision**

**ACCEPTED** by the user's explicit STEP 07 §92 instruction on 2026-09-29.
The three short documents have distinct subjects, and the relevant
image-contract document was read for the crop question but not for the
dependency question. Both Trials also read `docs/architecture.md` more
broadly than needed. Repeated runs showed variation in optional test-context
access. This is a routing limitation to preserve in the teaching claim, not
evidence that the topic boundaries should be collapsed. The structure is an
Engineering Pattern for Context scope, maintenance, and discovery; it does not
guarantee perfect selective loading.

**ACT 2 Demo Assessment**

Recommend **CAPTURED**, supported by a compact visual before/after Context map.
The actual CLI traces can show that task-relevant image detail appeared only
in the image task, while architecture detail was accessed in both. Keep
Desktop behavior unvalidated; use a Desktop rehearsal before making a Desktop
LIVE claim.

**STATE-03 Record**

**STATE-03 RECORDED LOCALLY.** Commit
`f3e2e37b1454e28c5de4c44682ebd49378ebae4b`, tag `STATE-03`. Full tests
passed 11/11; CLI smoke and `git diff --check` passed; product code, tests,
dependencies, and README remained unchanged. No remote push was performed.

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

**STATE-03 RECORDED; PERFORMANCE SCENARIO TRIAL COMPLETE.** The temporary
comparison recommends resize source-column precomputation and establishes
readiness to implement a benchmark baseline; no STATE-04 work is recorded.
STATE-02 remains at commit `55c045523ed1409449d7eea5b0d873983fe101b6` and
tag `STATE-02`. STATE-03 is at commit
`f3e2e37b1454e28c5de4c44682ebd49378ebae4b` and tag `STATE-03`; its validation
and Trial evidence are recorded above. `DEC-0014` is ACCEPTED. The Demo
repository has no configured remote, so no push was performed. The selected
Codex Desktop path and ACT 2 Anchor remain unvalidated; do not infer Desktop
behavior from the CLI trials.

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
A single Trial record is not sufficient for final Demo acceptance.

## STEP 07 — PERFORMANCE SCENARIO RESULT

### STATE-03

**Commit:** `f3e2e37b1454e28c5de4c44682ebd49378ebae4b`

**Tag:** `STATE-03`

**Trial date:** 2026-09-29

**Validation:** Full suite 11/11 passed; the earlier STATE-03 record also
contains the passing CLI smoke and `git diff --check`. The performance
prototypes were isolated to a temporary worktree and reverted. At that
checkpoint the Demo repository was at STATE-03; no optimization was committed
and no remote push was performed. The later benchmark preparation commit is
recorded in the Baseline Result below.

### Candidate 1 — Stream `image_statistics`

- **Location:** `src/graypipe/statistics.py`, `image_statistics`.
- **Current behavior:** Flatten all rows into a temporary list, then compute
  its length, minimum, maximum, and sum.
- **Correctness impact:** A running count, sum, minimum, and maximum can return
  the same six-field dictionary. The `GrayImage` contract guarantees at least
  one pixel.
- **Expected performance impact:** Remove an O(pixel count) reference list
  and repeated list scans; a Python-level single pass may trade CPU time for
  lower temporary allocation.
- **Measurement:** Deterministic 1024×768 input (786,432 pixels), two calls
  per sample, seven paired samples. Baseline median 14.985 ms/call, spread
  0.972 ms (6.5%); prototype median 28.838 ms/call, spread 3.183 ms (11.0%).
  The prototype was 92.4% slower (1.92× the elapsed time). This difference is
  much larger than either sample spread.
- **Allocation diagnostic:** `tracemalloc` peak for the operation only was
  6,675,804 bytes for baseline and 416 bytes for the prototype. The input was
  created before tracing; this is not process RSS.
- **Prototype/correctness:** Moderate local diff; output exactly matched the
  baseline on the synthetic input; `test_statistics.py` passed 1/1.
- **Measurement feasibility:** High for a synthetic workload; `timeit` and
  `tracemalloc` exposed time and temporary-allocation effects without extra
  packages.
- **Implementation/domain complexity:** Moderate accumulator bookkeeping;
  low image-domain complexity, but more Python loop detail to explain.
- **Teaching value:** Shows a real time-versus-temporary-memory trade-off, but
  explaining the slower Python loop and allocation metric would distract from
  a speed-improvement Story. Do not select as the primary performance Demo.

Samples in milliseconds per call:

- Baseline: `[15.574, 14.891, 14.850, 14.603, 14.985, 15.283, 15.031]`
- Prototype: `[28.838, 29.743, 26.560, 29.708, 27.654, 28.616, 29.650]`

### Candidate 2 — Hoist normalization constants

- **Location:** `src/graypipe/normalize.py`, `normalize`.
- **Current behavior:** Each pixel expression reads `image.max_value` and
  calculates `image.max_value // 2` again.
- **Correctness impact:** Cache `max_value` and the rounding term once, while
  preserving the integer-rounding formula and result contract.
- **Expected performance impact:** Avoid repeated property access and integer
  division inside the pixel expression; expected to be a small, measurable
  improvement.
- **Measurement:** Deterministic 1024×768 input (786,432 pixels), max value
  4095, one call per sample, seven paired samples. Baseline median 66.940
  ms/call, spread 3.665 ms (5.5%); prototype median 50.021 ms/call, spread
  2.032 ms (4.1%). Median elapsed time fell 25.3% (1.34× speedup), larger
  than the observed sample spreads.
- **Prototype/correctness:** Small local diff; output exactly matched the
  baseline; `test_normalize.py` passed 2/2.
- **Measurement feasibility:** High; a generated sub-megapixel image made the
  operation measurable in a short repeated comparison.
- **Implementation/domain complexity:** Low local change and low
  image-domain complexity.
- **Teaching value:** Clear repeated-work example, but the behavior is a
  narrow Python implementation detail and offers less visible payoff than
  the resize candidate.

Samples in milliseconds per call:

- Baseline: `[69.281, 69.957, 68.420, 66.903, 66.940, 66.911, 66.292]`
- Prototype: `[50.323, 50.021, 50.058, 50.721, 49.886, 49.219, 48.689]`

### Candidate 3 — Precompute resize source columns

- **Location:** `src/graypipe/transform.py`, `resize_nearest`.
- **Current behavior:** Recompute the same x-to-source-column multiply,
  division, and clamp for every output row.
- **Correctness impact:** Compute that mapping once per output column and reuse
  it for each row; preserve the existing nearest-neighbor formula and output.
- **Expected performance impact:** Replace per-output-pixel coordinate
  arithmetic with a small lookup over the output width.
- **Measurement:** Deterministic 640×480 source resized to 960×720 (691,200
  output pixels), one call per sample, seven paired samples. Baseline median
  148.827 ms/call, spread 8.492 ms (5.7%); prototype median 35.139 ms/call,
  spread 3.061 ms (8.7%). Median elapsed time fell 76.4% (4.23× speedup).
  The observed separation is much larger than either sample spread.
- **Prototype/correctness:** Small local diff; output exactly matched the
  baseline on the benchmark input and five additional source/output shape
  pairs, including upscaling, downscaling, and one-pixel dimensions.
  `test_transform.py` passed 3/3.
- **Measurement feasibility:** High; a generated 640×480 image and 960×720
  output gave a short, repeatable operation-level comparison.
- **Implementation/domain complexity:** Low local change and low
  image-domain complexity; the coordinate mapping remains unchanged.
- **Teaching value:** Best fit: the repeated work is visible in one expression,
  the optimization is a small cache of deterministic coordinates, and the
  result can be compared without introducing image-processing theory.

Samples in milliseconds per call:

- Baseline: `[154.069, 148.277, 149.742, 145.578, 148.827, 145.822, 152.316]`
- Prototype: `[36.049, 35.951, 33.403, 35.194, 32.988, 35.139, 34.775]`

### Recommended Scenario

Recommend **Candidate 3, precomputing resize source columns**. It has the
clearest measured runtime reduction, preserves exact output over the tested
shapes, requires only a small implementation change, and makes repeated work
easy to see. These are one-host synthetic-workload results, not a claim about
all images, machines, Python versions, or production workloads. Keep the
statistics result as a rejected speed candidate with its memory trade-off;
do not present it as a proven bottleneck or successful speed optimization.

### Benchmark Design

- **Input:** Programmatically generate pixel `(x, y)` as
  `(17*x + 31*y + ((x*y) % 251)) % (max_value + 1)`, with max value 4095.
  Statistics and normalization use 1024×768; resize uses 640×480 to
  960×720. Input creation and `GrayImage` validation happen before operation
  timing. No large fixture file is stored.
- **Command:** `python3 benchmarks/benchmark_trial.py --case resize` (with
  `--case statistics` or `--case normalize` for the other candidates).
- **Metric:** `timeit.Timer` wall time per call, median, sample range, and
  range as a percentage of the median. Baseline and prototype order alternated
  across pairs. Functional output was compared before timing.
- **Repeat strategy:** Seven paired samples per candidate; statistics used
  two operations per sample and other candidates used one.
- **Expected runtime:** A one-case command should take a few seconds on the
  tested host, including input construction. The measured operations take
  about 15–149 ms per baseline call; setup is excluded from operation timing.
- **Variance:** The recorded sample ranges are 4.1–11.0% of each candidate's
  median. The recommended resize effect is substantially larger than that
  range, though additional host/build runs would be needed for broader claims.
- **Environment:** Python 3.9.6; macOS 26.6.2; arm64 Apple Silicon.

### Actual Measurements

All values and the seven raw samples are recorded under each candidate.
The benchmark uses standard-library `timeit` and `tracemalloc`, deterministic
local data, and no network or external service. The Trial harness existed only
in the temporary worktree and was removed after the comparison.

### Correctness Evidence

Each prototype's relevant existing module tests passed: statistics 1/1,
normalization 2/2, and transform 3/3. The benchmark compared its full synthetic
output exactly with the STATE-03 implementation. Resize also matched across
five varied dimension pairs. After reverting every prototype, the complete
STATE-03 test suite passed 11/11.

### Dependency Decision

No new dependency is needed. The temporary comparison uses Python's standard
library; no benchmark package or reusable Skill was added.

### Teaching Risk

Keep the explanation on avoiding repeated coordinate calculation and on
checking output before timing. Do not turn the Demo into a Python
micro-optimization lesson or imply that one synthetic input predicts
production performance. The candidate remains a recommendation pending its
later baseline implementation and rehearsal.

### Workflow Opportunity

The scenario supports the sequence **Baseline → Investigate → Plan →
Implement → Test → Benchmark → Compare**: the baseline source and output
contract are inspectable, a measured repeated operation motivates a small
plan, tests protect exact behavior, and the paired benchmark supports
comparison. This Trial did not create the permanent benchmark tool or a
reusable workflow artifact.

### Readiness at Scenario-Selection Checkpoint

The §94–100 checkpoint was **READY TO IMPLEMENT BENCHMARK BASELINE**. The
following §§101–110 instruction authorized that work; its implementation and
validation are recorded in the Baseline Result below.

## STEP 07 — BENCHMARK BASELINE RESULT

### Performance Decision

At this original scenario-selection checkpoint, `DEC-0015` was ACCEPTED by
the user's explicit STEP 07 §§101–110 instruction and selected
`resize_nearest` performance investigation. The later §§191–200 instruction
and DEC-0019 supersede that product-change target only; the resize benchmark
remains an unchanged supporting check. The statistics allocation trade-off
and normalization constant-hoisting remain in the historical research above.

### Benchmark Implementation

- **File:** `ai-dev-training-demo/benchmarks/benchmark_resize.py`.
- **Command:** `PYTHONPATH=src python3 benchmarks/benchmark_resize.py`.
- **Input:** Locally generated 640×480 grayscale image with max value 4095;
  pixel `(x, y)` is `(17*x + 31*y + ((x*y) % 251)) % 4096`. Input SHA-256:
  `8313459c55df7237ac1de8435086b9af01d9d28d5604d19310001160f3c3f827`.
- **Operation:** Resize to 960×720; input creation, validation, correctness
  check, and one warm-up call are outside the timed region.
- **Method:** Python standard-library `timeit`, seven samples, one resize per
  sample; report every sample, median, minimum-to-maximum range, spread, and
  whole-invocation runtime.
- **Correctness guard:** Check the deterministic input SHA-256, expected output
  dimensions and max value, then compare the full output's two-byte
  big-endian SHA-256 with the STATE-03 output fingerprint
  `cf5a936c953a1cb873b4bc3f4632c50c1bb0e477a7af9f0b45ffec17018cb553`.
  The script does not store or enforce a timing baseline.
- **Output:** Print environment, input/output dimensions, correctness result,
  fingerprint, samples, median, range, and invocation runtime in a short
  readable report.
- **Runtime dependencies:** None added. The script uses only Python standard
  library modules and the existing `graypipe` package.

The command and purpose are documented in the Demo `README.md`. The tool is a
Project measurement instrument; it is not a reusable Harness procedure or
Skill.

### Repository Validation

| Check | Result |
|---|---|
| Full test suite | PASS, 11/11 |
| CLI smoke | PASS; 2×3 output, 6 pixels, mean 136.0, minimum 51, maximum 255 |
| Benchmark correctness guard | PASS in all three independent invocations; identical SHA-256 in each |
| Benchmark | PASS; seven samples and summary printed in each invocation |
| `git diff --check` | PASS |
| Product code and tests | Unchanged |
| Dependency metadata | Unchanged; no package added |
| CLI output contract | Unchanged |

### Stability

Environment for all invocations: CPython 3.9.6, macOS 26.6.2, arm64 Apple
Silicon. Input generation and the correctness guard are included in
invocation runtime but excluded from per-operation timing.

| Invocation | Median (ms/call) | Range (ms/call) | Spread / median | Invocation runtime |
|---:|---:|---:|---:|---:|
| 1 | 141.1 | 140.4–144.6 | 3.0% | 1.23 s |
| 2 | 147.6 | 141.2–158.5 | 11.7% | 1.28 s |
| 3 | 149.3 | 146.5–153.8 | 4.8% | 1.30 s |

Samples in invocation order (ms/call):

- 1: `143.9, 140.8, 140.4, 141.1, 140.9, 144.5, 144.6`
- 2: `145.9, 141.2, 143.2, 154.1, 158.5, 149.9, 147.6`
- 3: `153.2, 146.5, 148.4, 149.3, 149.2, 153.8, 153.7`

The median of the three invocation medians is **147.6 ms/call**. Those medians
span 141.1–149.3 ms, an 8.2 ms range or 5.6% of the median. All invocations
passed the same input and full-output fingerprint checks and finished in
1.23–1.30 seconds. The baseline is stable enough to demonstrate this
workload; small after-changes should not be presented as meaningful when
they approach this observed variation.

### State Decision

Choose option **A**: record the benchmark as an untagged STATE-04 preparation
commit, not as a separately named learner-facing State.

- Preparation commit: `cef7a27697d38667530fe028e7c2a1ed4703714b`.
- It changes only `benchmarks/benchmark_resize.py` and the Demo `README.md`.
- Tag `STATE-03` remains at `f3e2e37b1454e28c5de4c44682ebd49378ebae4b`.
- No STATE-04 tag or separate intermediate State was created. STATE-04
  remains the reusable performance procedure; STATE-04-PERF remains the
  later product-code optimization.
- The Demo repository has no configured remote; nothing was pushed.

The tool establishes measurement infrastructure but does not itself change
the product's performance behavior or add the planned reusable workflow.
Giving it a separate named State would split the existing Story without a
new learner-facing maturity transition.

### Proposed Performance Prompt

The prompt below asks the Agent to investigate and does not reveal the
prototype's selected optimization:

```text
Goal:
Investigate whether `resize_nearest` has a measurable runtime improvement
available while preserving its current output behavior.

Constraints:
- Preserve public image and CLI behavior.
- Do not add runtime dependencies or change unrelated APIs.
- Do not modify the benchmark input, checksum, or repetition settings.
- Treat measurements as evidence for this input and environment only.
- Do not trade correctness for speed or claim a result that the measurements
  do not support.

Process:
1. Run `PYTHONPATH=src python3 benchmarks/benchmark_resize.py` before
   editing. Record the environment, all samples, median, range, runtime, and
   correctness result. If the guard fails, stop and report it.
2. Inspect the implementation, relevant image contract, and tests. Identify
   actual repeated or avoidable work and explain candidate changes.
3. State a concise plan, then implement the smallest evidence-supported
   change. Do not assume a particular optimization in advance.
4. Run the focused resize tests and the full test suite.
5. Run the same benchmark command after the change. Compare before/after
   medians and sample ranges under the same environment and input.
6. Run the CLI smoke command and `git diff --check`; review the final diff.

Report:
- What you investigated and changed.
- Correctness evidence and any behavior risk.
- Baseline and after samples, medians, ranges, and invocation runtimes.
- The measured comparison and its limits.
- The final diff scope and any remaining uncertainty.
```

### Repeated Workflow Elements

| Element | Prompt evidence |
|---|---|
| Baseline | Run the fixed benchmark and preserve its full output before editing. |
| Investigate | Inspect implementation, contract, and tests for real repeated work. |
| Plan | Explain a concise evidence-based change before editing. |
| Implement | Make the smallest justified change; do not prescribe the answer. |
| Test | Run focused and full tests to protect behavior. |
| Benchmark | Rerun the same command and input after the change. |
| Compare | Compare medians, sample ranges, runtime, and correctness evidence. |
| Review | Check CLI behavior, `git diff --check`, and final diff scope. |

These steps are repeated workflow candidates for later Harness work; no
reusable procedure or Skill was created in this step.

### Skill Boundary

The benchmark is project-owned measurement code, while the prompt is a
task-level instruction that makes one workflow observable. Evidence from one
performance scenario is not enough to justify a reusable Skill. The planned
repository procedure remains a later STATE-04 Harness change; product Skill
support stays conditional on a later need and current product verification.

### Next Readiness

**§§101–110 CHECKPOINT: READY FOR PERFORMANCE WORKFLOW TRIAL.** At that
checkpoint, the benchmark preparation commit was recorded and its three
independent invocations passed. The subsequent TRIAL-006 result is recorded
below.

## STEP 07 — TRIAL-006 PERFORMANCE WORKFLOW RESULT

### Environment

| Field | Observed value |
|---|---|
| Repository baseline | `cef7a27697d38667530fe028e7c2a1ed4703714b`, after tag `STATE-03` at `f3e2e37b1454e28c5de4c44682ebd49378ebae4b` |
| Working directory | Detached writable worktree at `/tmp/ai-dev-training-demo-trial-006-20260929` |
| Codex interface/version | Codex CLI 0.154.0 via `codex exec`; model `gpt-5.6-sol`. Installed Codex Desktop 26.924.22138 was not used for this Trial. |
| Runtime / OS | Python 3.9.6; macOS 26.6.2; arm64 |
| Execution mode | `workspace-write`, scoped to the isolated worktree; no push or original Demo repository edits |

The first CLI launch used the configured `gpt-6-luna`, which this CLI/account
combination rejected before an Agent turn. A second launch also stopped before
the turn because `codex exec` did not accept the supplied approval flag. The
same Prompt then ran unchanged with the catalog-supported `gpt-5.6-sol` model.
Neither launch changed the worktree.

### Prompt

The exact §109 Prompt was used without edits:

```text
Goal:
Investigate whether `resize_nearest` has a measurable runtime improvement
available while preserving its current output behavior.

Constraints:
- Preserve public image and CLI behavior.
- Do not add runtime dependencies or change unrelated APIs.
- Do not modify the benchmark input, checksum, or repetition settings.
- Treat measurements as evidence for this input and environment only.
- Do not trade correctness for speed or claim a result that the measurements
  do not support.

Process:
1. Run `PYTHONPATH=src python3 benchmarks/benchmark_resize.py` before
   editing. Record the environment, all samples, median, range, runtime, and
   correctness result. If the guard fails, stop and report it.
2. Inspect the implementation, relevant image contract, and tests. Identify
   actual repeated or avoidable work and explain candidate changes.
3. State a concise plan, then implement the smallest evidence-supported
   change. Do not assume a particular optimization in advance.
4. Run the focused resize tests and the full test suite.
5. Run the same benchmark command after the change. Compare before/after
   medians and sample ranges under the same environment and input.
6. Run the CLI smoke command and `git diff --check`; review the final diff.

Report:
- What you investigated and changed.
- Correctness evidence and any behavior risk.
- Baseline and after samples, medians, ranges, and invocation runtimes.
- The measured comparison and its limits.
- The final diff scope and any remaining uncertainty.
```

### Baseline

The Agent ran the benchmark before its first source edit. The input and output
SHA-256 guards passed.

- **Samples:** `149.5, 144.0, 143.7, 143.6, 144.2, 147.9, 147.8 ms/call`
- **Median:** 144.2 ms/call
- **Range:** 143.6–149.5 ms/call
- **Invocation runtime:** 1.27 s
- **Correctness:** PASS; input SHA-256
  `8313459c55df7237ac1de8435086b9af01d9d28d5604d19310001160f3c3f827`;
  output SHA-256
  `cf5a936c953a1cb873b4bc3f4632c50c1bb0e477a7af9f0b45ffec17018cb553`.

### Investigation

The Agent inspected root `AGENTS.md`, `src/graypipe/transform.py`,
`tests/test_transform.py`, `benchmarks/benchmark_resize.py`, `README.md`,
`docs/image-contracts.md`, `docs/testing.md`, `src/graypipe/loader.py`,
`src/graypipe/pipeline.py`, `src/graypipe/cli.py`, and
`docs/architecture.md`.

It identified that the same horizontal source-coordinate expression runs for
each of 720 output rows across 960 columns, or 691,200 pixel evaluations for
this output. It proposed calculating the horizontal map once and reusing it.
It considered caching complete output rows but excluded that path because
shared row objects could make identity observable. It did not investigate
other optimization families in this Trial.

The Agent stated this candidate and its scope before the source edit. The
Prompt did not give the answer; the candidate came from source inspection.

### Plan

**Visible before edit:** Yes. The Agent named the repeated horizontal mapping
as the measured target, said it would preserve the floor formula and final
column cap, and excluded output-row sharing. Its user-visible message preceded
the `transform.py` file change.

### Implementation

- **File:** `src/graypipe/transform.py`
- **Change:** Precompute the source-column indices once, then use that tuple
  for each output row.
- **Diff:** One tracked file; 6 insertions and 2 deletions.
- **Behavior:** Preserve floor scaling, last-column cap, output row creation,
  return type, `max_value`, errors, and public API.
- **Tests / benchmark / docs / dependencies:** No files changed; no dependency
  added.
- **Original Demo repository:** Unchanged. The Trial diff remains only in the
  detached worktree and was not committed.

### Verification

| Step | Requested | Executed | Result |
|---|---|---|---|
| Focused resize tests | Yes | `PYTHONPATH=src python3 -m unittest discover -s tests -p 'test_transform.py' -v` | PASS, 3/3 |
| Full suite | Yes | `PYTHONPATH=src python3 -m unittest discover -s tests -v` | PASS, 11/11 |
| Same benchmark | Yes | `PYTHONPATH=src python3 benchmarks/benchmark_resize.py` | PASS; unchanged input/output hashes; results below |
| CLI smoke | Yes | README Run command with sample input and crop `1 3` | PASS; expected 2×3 JSON summary |
| `git diff --check` | Yes | Ran in the isolated worktree | PASS |
| Final diff review | Yes | Reviewed `git diff --stat`, source diff, and status | PASS; one tracked source file |
| Small-dimension equivalence | Additional check | Compared current code with the pre-change formula over 840 dimension combinations | PASS |

The Agent also loaded `superpowers:test-driven-development`, stated it would
write a focused regression test first, but changed production code before
running focused tests. It added no test and did not observe a red/green cycle.
The Prompt required running tests but did not require adding a test; record
this as behavior of the ambient Skill and Agent, not as a failed Prompt step.

### Performance Result

| Measurement | Baseline | After |
|---|---:|---:|
| Samples (ms/call) | `149.5, 144.0, 143.7, 143.6, 144.2, 147.9, 147.8` | `32.9, 34.3, 32.9, 33.5, 33.1, 34.0, 34.6` |
| Median | 144.2 ms/call | 33.5 ms/call |
| Range | 143.6–149.5 ms/call | 32.9–34.6 ms/call |
| Invocation runtime | 1.27 s | 0.37 s |
| Correctness | Input/output SHA-256 PASS | Same input/output SHA-256 PASS |

The observed median fell by 110.7 ms/call (76.8%), or 4.30× for this run.
The after maximum (34.6 ms) is below the baseline minimum (143.6 ms), so these
sample ranges do not overlap. The earlier three-invocation baseline medians
spanned 141.1–149.3 ms (5.6% relative range); the observed change is much
larger than that variation. The one before/after pair was not interleaved,
and all measurements are specific to this input, implementation, runtime,
and host.

### Agent Workflow

| Stage | Observed? | Evidence / limit |
|---|---|---|
| Baseline | Yes | Benchmark and correctness guard ran before the source edit. |
| Investigate | Yes | Read relevant implementation, image contract, tests, and routed project docs. |
| Plan | Yes | Named candidate and scope in a user-visible message before editing. |
| Implement | Yes | One-file precomputation change in the detached worktree. |
| Test | Yes | Focused 3/3 and full 11/11 passed after the edit; no new test was added. |
| Benchmark | Yes | Same command and checksums; one seven-sample run after the edit. |
| Compare | Yes | Reported medians, ranges, correctness, and run limits. |
| Review | Yes | CLI, whitespace check, final tracked diff, plus 840-case equivalence check. |

### Unexpected Behavior

- Codex CLI automatically loaded the global `oh-my-codex:analyze`,
  `oh-my-codex:performance-goal`, `superpowers:test-driven-development`,
  and `superpowers:verification-before-completion` Skills. The
  `performance-goal` Skill created ignored `.omx/` evaluator/ledger state in
  the isolated worktree and set a stricter non-overlapping-range threshold;
  no repository-owned Skill or reusable workflow was created.
- The read-only `analyze` Skill was loaded despite the explicit implementation
  request; the Agent proceeded with the requested edit.
- The TDD Skill directed a test-first cycle, but the Agent edited production
  code before running tests and added no regression test.
- The verification Skill added the 840-case equivalence check.
- Codex startup logged unrelated MCP authentication and skill-context
  warnings; they did not stop the run. No Subagent was used.

### Result

**PARTIAL.** Every workflow step in the Prompt was observed, correctness and
all requested checks passed, and the isolated implementation produced a
large measured difference. However, global Skills added process and an
Evaluator, so the Trial cannot attribute the complete workflow to the
Prompt alone. It also tested Codex CLI, not the future presentation
interface.

### Teaching Value

The strongest observed sequence was baseline first, then source-based
investigation and a visible plan, followed by a one-file change whose output
fingerprint and tests remained stable while measured time fell substantially.
This makes verification and the distinction between a completion claim and
observed evidence concrete.

### Do Not Claim

- Do not generalize the 76.8% measured reduction beyond this input, code,
  Python runtime, and host.
- Do not claim the Prompt alone caused the full workflow; ambient Skills
  materially affected the run.
- Do not claim future presentation-interface behavior or universal Prompt
  superiority from a single Codex CLI Trial.

### Repeated Workflow Question

All eight stages were observed. Baseline, investigation, plan, scoped change,
task-appropriate tests, same-command benchmark, comparison, and diff review
are reasonable candidates for reuse in another performance task. One Trial
does not establish reliability across other tasks.

### Next Readiness

**READY TO DESIGN / RUN SECOND PERFORMANCE TASK.** Record global Harness
influence in any later CLI Trial and preserve the Prompt-only attribution
limit; a clean-room setup is not required. The Trial optimization remains
uncommitted in the isolated worktree;
the original Demo repository has no optimization commit, new State, Skill,
reusable workflow, Subagent, or remote push.

## STEP 07 — DEMO ENVIRONMENT AUDIT AND DECISION UPDATE

**Checked:** 2026-09-29. **Audit result:** TRIAL-006 has a global Harness
influence limitation. **Current outcome by DEC-0016:** this is not a blocker;
the project is **READY TO DESIGN / RUN SECOND PERFORMANCE TASK**. No second
Performance Trial was run as part of this document update.

> **Current environment direction:** macOS is the current development and
> partial automated-validation host, not the learner target. The audience is
> primarily Windows-based; WSL/native Windows proportions, IDE, shell, and
> exact Codex interface remain open. Keep the Demo OS-independent where
> practical. Global Harness influence is a known attribution limitation, not
> an OS-isolation requirement. See DEC-0016 and OQ-003/OQ-015.

### TRIAL-006 Impact

TRIAL-006 used the user's existing Codex CLI environment. No alternate
`CODEX_HOME` was recorded. Codex's documented default is `~/.codex`, where
the host has a global `AGENTS.md`, configuration, Skills, plugins, and other
state. Global and repository instructions are layered into a session, and
personal Skills are discovered separately from the home-level `.agents`
directory. See [Codex AGENTS.md behavior](https://learn.chatgpt.com/docs/agent-configuration/agents-md),
[local Skill discovery](https://learn.chatgpt.com/docs/build-skills), and
[Codex environment variables](https://learn.chatgpt.com/docs/config-file/environment-variables).

The following effects were observed:

- Four global Skills were loaded: `oh-my-codex:analyze`,
  `oh-my-codex:performance-goal`,
  `superpowers:test-driven-development`, and
  `superpowers:verification-before-completion`.
- `performance-goal` created ignored `.omx/` evaluator and ledger state in
  the temporary Trial worktree and added a stricter non-overlapping-range
  threshold. `verification-before-completion` led to the additional
  840-dimension equivalence check. The TDD Skill announced a test-first
  cycle, but the Agent edited production code before focused tests and added
  no regression test. `analyze` added investigation context; its direct
  effect on the implementation choice is not established.
- Global plugin hook files were present. Trial startup logs show warnings
  about an OMC `SessionEnd` hook configuration. The logs do not establish
  that a hook changed the source diff.
- The Trial log records startup failures for MCP server `t` and an
  authentication-required response from `nimble`. The event log contains no
  MCP tool call, so no MCP-provided result is evidenced in the work itself.
- The host default model was `gpt-6-luna`, but that CLI/account combination
  rejected it before an Agent turn. The completed Trial used
  `gpt-5.6-sol`. This model substitution and the CLI-versus-Desktop
  difference are additional limits on attribution.

**Evidence that remains valid:** the recorded source diff, pre/post test
results, CLI output, correctness hashes, and local Benchmark samples remain
valid observations for the recorded code, host, input, and runtime. The
measurement itself did not use MCP data. The evidence that is confounded is
the causal claim that the long Prompt alone produced the full workflow, and
the assumption that the same behavior will occur in Codex Desktop. Keep
TRIAL-006 as evidence and as a local harness-interference observation; do
not discard it or use it as clean Prompt-only evidence.

### Global Harness Inventory

This point-in-time inventory is retained as evidence of possible global
Harness influence. Its isolation candidates are historical research, not
selected setup work or current requirements. No dedicated macOS account or
global configuration change is planned.

This is a point-in-time, read-only inventory. No credential values or
configuration secrets are included. The installed versions checked on
2026-09-29 were Codex CLI `0.154.0` and Codex Desktop `26.924.22138`.

| Component | Present locally | Loaded / observed in TRIAL-006 | Potential influence | Potential control if strict attribution is later required |
|---|---|---|---|---|
| Global instructions | `~/.codex/AGENTS.md` exists; no `AGENTS.override.md` was found. | The CLI had no recorded alternate Codex home. Official discovery rules load the global file before project instructions; the Trial transcript does not separately preserve its complete injected text. | Persistent user rules can shape response and tool behavior. Direct influence on the selected optimization is not established. | A fresh Codex home for CLI; a separate OS user for both CLI and Desktop. Keep the Demo repository's root `AGENTS.md` as the intended project context. |
| User Skills | 41 `SKILL.md` files under `~/.agents/skills`; 6 under `~/.codex/skills`; additional plugin Skill sources are cached. | Four relevant Skills were read and used, as listed above. | High: evaluator, investigation, verification, and test-order behavior changed or was attempted. | A separate OS user with no personal Skill folders or user plugins. Codex-bundled system Skills remain and must be inventoried. |
| Hooks | Hook files exist in the cached OMC and Superpowers plugin directories; plugin hook state exists in the global config. | OMC `SessionEnd` configuration warnings are in the Trial event log. No source-edit side effect is evidenced. | Lifecycle scripts may add instructions, artifacts, or other actions around the task. | Do not load user plugins in a fresh profile; inspect the session log for remaining system or managed hooks. |
| MCP servers | The host CLI lists configured CUA/Node REPL and other MCP entries; some OMC entries are disabled. | `t` failed its handshake and `nimble` required authentication. No MCP tool call appears in the Trial event log. | MCP can add external context, tools, or side effects; startup failures also add noise. | Use a fresh user/configuration and expose no MCP connections for the local synthetic benchmark. Confirm the actual session tool list. |
| Codex configuration | `~/.codex/config.toml` exists. At inspection it set model `gpt-6-luna`, reasoning `max`, `approval_policy = "never"`, and `sandbox_mode = "danger-full-access"`; it also contains plugin and MCP configuration. | Trial explicitly used `gpt-5.6-sol` and `workspace-write`; the Trial record does not establish an approval-policy override. | Other user-level plugin, MCP, hook, and model settings remain potential inputs even when model and sandbox are overridden. | Fresh Codex home and explicit, reviewed per-run settings. Do not inherit the current user's file. |
| Plugins / extensions | User-level Codex plugins and plugin caches are present, including OMC and Superpowers sources; Desktop also has bundled integrations. | The four loaded Skills and OMC hook warnings show plugin-provided behavior was available to the CLI. | Plugins can package Skills, MCP configuration, and lifecycle hooks. | Fresh OS user; do not install optional plugins in the teaching profile. Check for cloud-managed or workspace-required plugins after sign-in. |
| Environment variables | The current host process has Codex Desktop/MCP integration variables. `CODEX_HOME` was not set in the inventory shell. | The Trial does not preserve a complete environment-variable snapshot. Inherited variables are therefore an unmeasured possibility, not a confirmed cause. | Runtime paths, app-server integration, or inherited credentials may change available tools or startup behavior. | Start from a documented minimal environment allowlist in the isolated account; record variable names, never secret values. |
| Model defaults | Global default is `gpt-6-luna` with reasoning effort `max`. | The completed Trial used `gpt-5.6-sol` after the default was rejected by the CLI/account combination. | Model and reasoning changes can alter investigation and implementation behavior. | Pin a model available in both chosen surfaces and record model/version for every run. |
| Sandbox / approvals | Global defaults are `danger-full-access` and `never`. | Trial used the `workspace-write` sandbox. The non-interactive `codex exec` help does not expose `--ask-for-approval`; the approval policy used by Trial is not captured in the evidence record. | The sandbox sets file/network boundaries; approval settings determine when work pauses. | Use a fresh profile; explicitly set workspace-scoped permissions and verify them in the session. Do not rely on the host default. |

The current inventory shell and prior Trial are not identical snapshots. In
particular, the current CLI's MCP status is not evidence of the status during
TRIAL-006; the Trial-specific event and stderr logs are authoritative for
that run.

### Product-supported Isolation Options Assessed in the Historical Audit

The following options document the earlier research only. DEC-0016 does not
select an isolation method or make a clean-room Prompt comparison part of
STEP 07.

| Option | Supported evidence and limit | Assessment |
|---|---|---|
| **A — Temporary `CODEX_HOME`** | `CODEX_HOME` is an official environment variable for Codex CLI, IDE extension, app-server, and installers; it redirects Codex config, auth, logs, sessions, and Skills state, and the directory must already exist. The local user Skill location `~/.agents/skills` is separate, so changing only `CODEX_HOME` does not isolate all personal Skills. Desktop is not named directly in the environment-variable table; do not assume per-session Desktop support without a rehearsal. | Useful partial isolation for CLI state; insufficient alone for a clean no-user-Skill baseline or a verified Desktop session. |
| **B — CLI configuration override** | The installed `codex exec --help` exposes `--ignore-user-config`, `--ignore-rules`, `--ephemeral`, `--config`, and sandbox selection. `--ignore-user-config` skips `config.toml`, not the separately discovered global `AGENTS.md` or `$HOME/.agents/skills`. The non-interactive help does not expose `--ask-for-approval`; use a reviewed config key if an approval override is required, and verify its effective value. | Good for controlling a CLI run's selected settings; not a complete global Harness isolation method. |
| **C — Separate OS user / isolated VM** | This is OS-level isolation rather than a Codex profile feature. A separate macOS user gives the native Desktop app and CLI a distinct home for user instructions, personal Skills, plugins, and Codex state. A VM/container can impose a stronger filesystem and network boundary, but may make a presentation surface unavailable or harder to rehearse. Bundled system Skills and any account/workspace-managed controls can still remain. | Historical strict-isolation candidate only; rejected as current direction by DEC-0016. |
| **D — Accept and record global Harness influence** | Continue without isolation and record the global Skills, hooks, MCP, and configuration loaded or observed for each CLI Trial. | Current direction under DEC-0016; do not make a Prompt-only causal claim where attribution is confounded. |

Codex's permissions documentation distinguishes sandbox boundaries from
approval behavior and describes `workspace-write` plus `on-request` as a
lower-risk local configuration. The Desktop app has a permissions control,
but that control does not itself remove global instructions, Skills, or
plugins. Plugin documentation also says user plugin choices are stored in
`~/.codex/config.toml` and that local plugin behavior can apply to both CLI
and the ChatGPT desktop app. See [Codex sandbox and permissions](https://learn.chatgpt.com/docs/sandboxing)
and [plugin configuration](https://developers.openai.com/plugins/build/plugins).

### Withdrawn Recommendation — Dedicated macOS User (Historical)

The earlier audit recommended a dedicated standard macOS user for Codex
Desktop and CLI. The user rejected this recommendation on 2026-09-29, and
DEC-0016 supersedes it. Keep the recommendation here only to explain the
history of OQ-015. **Do not create the account or treat its setup as a
prerequisite.**

### Safety

No global configuration, Skills, plugins, hooks, MCP settings, or account
data were changed. No real-user config was copied or removed. The withdrawn
account recommendation was not implemented. The original Demo repository
remains clean at `cef7a27697d38667530fe028e7c2a1ed4703714b`; the Trial
optimization remains only in the isolated temporary worktree.

### Reset Procedure

For each Trial, use a disposable copy or worktree of the selected commit in
the current development environment. Record its commit and verify it is
clean before launching Codex. After capturing results and the diff, discard
only that disposable copy and create the next run from the same recorded
baseline. Start a new Codex conversation and record any global Harness
components loaded or observed. Never reset by deleting or editing the user's
Codex home, plugins, authentication, repository, or personal data.

### CLI vs Desktop Strategy

Use CLI for repeatable commands, event logs, benchmark output, and exact
diff evidence; record global Harness influence and mark attribution PARTIAL
when appropriate. A CLI result does not validate Desktop product behavior.
Validate only the Final Anchor in the actual presentation interface during
Final Demo Rehearsal. If the confirmed training environment is Windows,
consider a Windows rehearsal within the available scope.

### Second Performance Candidate

| Candidate | Evidence | Workflow suitability | Recommendation |
|---|---|---|---|
| `normalize` constant hoisting | Distinct code path in `src/graypipe/normalize.py`. Earlier isolated prototype: baseline median 66.940 ms/call, 5.5% sample spread; candidate median 50.021 ms/call, 4.1% spread; output matched exactly and `test_normalize.py` passed 2/2. The observed 25.3% median reduction exceeded the recorded spread. | Deterministic local workload, simple correctness check, small implementation, and a different function from resize. The repeated-computation pattern resembles the first task, so keep the prompt answer-open and do not prescribe hoisting. | **Recommended second task.** Rebuild an ephemeral benchmark from the fixed baseline and independently observe the full workflow. Prior prototype evidence is candidate evidence, not a completed second workflow Trial. |
| `image_statistics` streaming / allocation trade-off | Earlier isolated prototype reduced `tracemalloc` peak from 6,675,804 bytes to 416 bytes but increased elapsed time from 14.985 to 28.838 ms/call median; the prototype was 92.4% slower. Output matched and `test_statistics.py` passed 1/1. | Different code path and a real memory-versus-time trade-off, but requires explaining Python-level accumulation and allocation measurement. It is not a runtime speedup task. | Keep as an alternative or supporting counterexample; do not present it as a speed optimization. |

The normalization prototype is the clearest second task for checking whether
the workflow is needed again without making another large, resize-specific
task. The benchmark for the second Trial must use the same fixed source
commit, deterministic input, checksum, and sample procedure before and after
the change; do not reuse the previous prototype result as the new baseline.

### Repetition Criteria

Count the workflow as recurring only if a second, different code path
naturally calls for the same observable steps:

1. Record a clean baseline and correctness guard before editing.
2. Investigate implementation, contract, and relevant tests; keep candidate
   selection evidence-based and the Prompt answer-open.
3. Show a user-visible plan before edits.
4. Make one bounded change and record behavior or API risks.
5. Run focused and full tests, the same benchmark, and a CLI smoke check.
6. Compare actual samples, spread, correctness, and diff; treat regressions or
   metric trade-offs as valid outcomes.
7. Review the final diff and preserve commands and outputs as evidence.
8. Confirm that no unintended personal Skill, hook, plugin, or MCP behavior
   entered the session. If it did, mark the result PARTIAL for attribution.

The second task need not produce a speedup. A different measured code path
that requires the same baseline-to-review sequence is enough to call the
workflow a repeated candidate. Two observations do not by themselves prove
that a reusable Skill is better than putting the process in each Prompt;
that is a later design question. Do not create a Skill or reusable workflow
as part of this gate.

### OQ-015 Resolution

DEC-0016 resolves the current STEP 07 question: do not build a clean-room
environment or run a Prompt-only causal experiment. Keep TRIAL-006 as PARTIAL
evidence, record actual global Harness influence in later CLI Trials, and
continue the second Performance Task. OQ-015 is OPTIONAL only if the project
later chooses Prompt-only causality as a research objective. Desktop
validation remains for Final Demo Rehearsal under OQ-003/OQ-005.

### Next Readiness

**READY TO DESIGN / RUN SECOND PERFORMANCE TASK.** Environment isolation is
not a prerequisite. The `normalize` constant-precomputation candidate remains
recommended for the second task; it has not been Trialed here. No second
Performance Trial ran during this document update. No optimization was
committed to the original Demo repository; no STATE-04, Skill, reusable
workflow, or Subagent was created.

## STEP 07 — TRIAL-007 NORMALIZATION PERFORMANCE RESULT

**Date:** 2026-09-29. **Repository baseline:** commit
`01622f86c1d9c54094a20adb0f436d12ee70cfd4`, the deterministic normalization
benchmark preparation commit after `STATE-03`. **Isolation:** detached
worktree at `/private/tmp/ai-dev-training-demo-trial-007-20260929`; the
original Demo repository and all State tags remained unchanged. The trial
worktree has one uncommitted change to `src/graypipe/normalize.py` and no
commit or push.

**Interface / environment:** Codex CLI; exact CLI version and model are not
present in the retained final report. Python 3.9.6; macOS 26.6.2, build
25G83; Darwin 25.6.0; arm64/T6050. The exact CPU marketing model was not
captured. The candidate uses the 640×480, 307,200-pixel normalization
benchmark with `max_value=4095` and the same input and output fingerprints
before and after.

**Task Prompt:** investigate an evidence-supported runtime improvement to
normalization while preserving behavior; keep the benchmark input, checksum,
correctness guard, and repetitions fixed; measure before editing; inspect
source, contract, and tests; state a plan; implement a minimal change; run
focused and full tests, the same benchmark, a CLI smoke check, `git diff
--check`, and final review; record global Harness influences and do not claim
Prompt-only causality. The full prompt and event evidence are retained in
`/private/tmp/TRIAL-007-PROMPT.txt` and
`/private/tmp/TRIAL-007-EVENTS.jsonl`.

**Investigation and change:** the selected change hoisted `image.max_value`
and its integer rounding offset out of the per-pixel loop. The final diff was
3 insertions and 1 replacement in `src/graypipe/normalize.py`. A lookup-table
candidate measured faster in exploratory runs but was rejected because it
would add up to 65,536 entries of per-call time and memory; floating-point
conversion and bypassing `GrayImage` validation were not selected.

| Measurement | Baseline | After |
|---|---:|---:|
| Seven samples (ms/call) | 28.7, 27.9, 28.1, 27.2, 26.8, 27.5, 28.0 | 20.0, 18.7, 18.5, 18.4, 21.7, 18.5, 18.6 |
| Median | 27.9 ms/call | 18.6 ms/call |
| Range | 26.8–28.7 ms/call | 18.4–21.7 ms/call |
| Benchmark invocation | 0.30 s | 0.22 s |
| Input/output checksums | PASS | PASS; unchanged |

The rounded medians differ by 9.3 ms/call (33.3%, about 1.50× throughput)
for this input and environment; the sample ranges do not overlap. This is one
before/after pair, was not interleaved, and the after-run spread was wider.
Do not generalize it to other workloads, machines, runtimes, or models.

**Verification:** focused normalization tests passed 2/2; the full suite
passed 11/11; the CLI smoke output and PGM pixels matched the expected 4×3
image; `git diff --check` passed. No benchmark file, dependency, or other
tracked file changed in the trial worktree.

**Observed global influence and result:** the report records a
`UserPromptSubmit` hook routing `Investigate` to `oh-my-codex:analyze`, plus
`oh-my-codex:analyze` and `superpowers:verification-before-completion` Skills.
No Subagent was used. No evaluator is recorded in the retained Trial
artifacts; this does not establish the absence of an unexposed external
evaluator. The report says no MCP warning/use, but
`/private/tmp/TRIAL-007-STDERR.txt` records a Nimble `AuthRequired` MCP
startup error; the event record shows no MCP task result. Keep the inventory
and attribution PARTIAL. The functional benchmark and verification passed,
but the full workflow cannot be attributed to the Prompt alone.

**Teaching use:** together with TRIAL-006, this is a second observed
application of the same baseline → investigation → plan → scoped change →
verification → remeasurement → review procedure on a different code path.
It supports the recurrence rationale in DEC-0017. It does not establish
Skill-versus-Prompt superiority, token savings, or a general performance
claim. The trial change remained outside the original Demo repository and
did not create a named State.

## Story-to-Demo Coverage Audit

| Coverage class | Beats | Planned treatment |
|---|---|---|
| MUST OBSERVE | Repository exploration (BEAT-002–003) and the bounded Working Harness Success through `STATE-04-PERF`. | Product captures and Git/Trial evidence; ACT 4 does not claim an observed stale artifact or Product failure. |
| GOOD TO OBSERVE | AGENTS.md first success; reusable workflow and verification. | Anchors 2 and 3; product mechanism is conditional. |
| EXPLAIN / VISUALIZE | Context growth/routing, deferred Subagent and Memory decisions, conceptual stale-Harness case, Product Loop vs Harness Loop, Minimum Effective Harness. | Use bounded captures/visuals; keep conceptual, Product, and Meta evidence labels distinct. |
| OBSERVED META CASE | Training Production evaluation/reporting change (`DEMO-04B`; `TRIAL-006` → `DEC-0016` → `TRIAL-007/008`). | Supporting-only captured timeline with the TRIAL-007 report/stderr discrepancy and partial attribution visible. |

No Demo is added only to fill a Beat or show a product feature.

## Narrative Continuity Audit

The observed Product Anchors reuse one synthetic image-processing Project,
stable module names, and a bounded task path through `STATE-04-PERF`. No later
Project Test-procedure change is part of the selected Product history. ACT 4
keeps its conceptual stale-Harness illustration and observed Training
Production Meta Case separate from that repository evolution.

## Cognitive Load and Screen Readability

- Each Demo adds at most one main new Engineering concept.
- Keep the same Project and familiar module names across Anchor transitions.
- Keep command, diff, test output, and logs short enough to read on a
  projector; rehearse font and editor zoom in the selected environment.
- Hide irrelevant panels and avoid presenting several Agent windows at once.
- Use a diagram and captured output for complex Subagent coordination.
- Do not display line counts as a deterministic model-quality threshold.

## Historical STEP 06 Question Status

| Topic | Status | Remaining dependency |
|---|---|---|
| Repository strategy, language, domain, and location | RESOLVED FOR STEP 06 PLANNING | DEC-0011 selects separate Python synthetic image processing; DEC-0012 selects sibling path `../ai-dev-training-demo`. Implementation remains for STEP 07. |
| License / external usage | RESOLVED FOR CURRENT DATA SCOPE | Synthetic local data requires no external code/data permission; choose a license before sharing the repository. |
| Environment roles and delivery direction | RESOLVED / OPEN BY ROLE | Current host: macOS for development and some automated validation. Learner target: primarily Windows; WSL/native split, IDE, shell, and exact Codex interface remain open under OQ-003. Demo design: OS-independent where practical. Anchor HYBRID remains accepted; account/product behavior remains under OQ-005. |
| Live/Recorded/Captured/Visual mix | PARTIALLY RESOLVED | Anchor HYBRID is accepted; supporting roles remain flexible. Validate current feature availability and fallback. |
| Build, Test, Benchmark | PARTIALLY RESOLVED | STATE-00 build/test commands and outcomes are recorded; benchmark method and results await the performance states. |
| Skill / Subagent / Memory | SKILL OBSERVED / SUBAGENT AND MEMORY CONDITIONAL | TRIAL-008 confirms explicit repository Skill discovery/load in Codex CLI 0.154.0; OQ-005 still leaves Desktop behavior open. |
| Stale scenario | SUPERSEDED PROPOSAL | The later DEC-0020/DEC-0021 review found no justified Product change; only the explicitly conceptual `DEMO-04A` remains selected. |
| Evaluation / Regression | REVISED | `EVAL-01/02` are observed separate tasks; `EVAL-03/04` remain designed conceptual checks without Trial outcomes. |
| State model / reset strategy | PARTIALLY RESOLVED | STATE-00 has a commit/tag and a verified disposable reset; later state refs and reset evidence remain open. |
| Anchor selection / delivery / fallback | PARTIALLY RESOLVED | Four roles remain proposed under DEC-0008; HYBRID mode and prepared capture/expected result/fallback are accepted requirements. |
| Meta Example | NOT USED IN STEP 06 | OQ-013 may be revisited only if later actual history supports it. |

**STEP 06 planning gate:** COMPLETE WITH OPEN QUESTIONS at that step's close.
STEP 07 has since implemented and reset-checked STATE-00 and recorded
TRIAL-001 through Codex CLI. Product/account behavior and the final
presentation interface remain for later verification under OQ-003/OQ-005;
the Final Anchor is revalidated during Final Demo Rehearsal. If Windows is
confirmed as the actual training environment, consider a Windows rehearsal
then.

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
| Product capability claims match the selected environment. | PARTIAL | TRIAL-001 records one Codex CLI observation; final presentation-interface and account behavior remain under OQ-003/OQ-005 and Final Demo Rehearsal. |
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

## STEP 07 — §§151–160 STATE-04 CANDIDATE RESULT

### Reusable Workflow Decision

**Decision:** `DEC-0017` ACCEPTED. TRIAL-006 (`resize_nearest`) and TRIAL-007
(`normalize`) repeated the performance procedure on distinct code paths. The
user selected a repository-owned Codex Skill as the single maintained
procedure. This separates the reusable method from each task Prompt; it does
not claim that a Skill is superior to a Prompt.

### Specification Alignment

The current source of truth is
`ai-dev-training-demo/.agents/skills/graypipe-performance/SKILL.md`. The
earlier proposal to maintain `workflows/performance-investigation.md` as a
second source is superseded. Project facts and commands remain in
`AGENTS.md`, `README.md`, and maintained Project docs; the Skill contains the
repeatable process; each Task Prompt supplies its specific goal, constraints,
and acceptance criteria. STATE-04-PERF remains a separate future product-code
change. No Story or HARD Invariant changed.

### Statistics Benchmark

- **File:** `ai-dev-training-demo/benchmarks/benchmark_statistics.py`.
- **Input:** Deterministic locally generated 1024×768 `GrayImage`, 786,432
  pixels with `max_value=255`; pixel `(x, y)` is
  `(17*x + 31*y + ((x*y) % 251)) % 256`. Input generation is outside the
  timed operation. Input SHA-256:
  `26df8e7b296672840d97cf5d9273e6660003afd680c62c7751d382c2d067fec9`.
- **Runtime method:** Standard-library `timeit`, one warm-up/correctness call
  before seven independent single-call timing samples. Report every sample,
  median, minimum-to-maximum range, spread, and script invocation duration.
- **Allocation method:** A separate `tracemalloc` call after timing. The input
  is already built. The output is labeled
  `tracemalloc-observed Python allocation peak`; it is not process RSS.
- **Correctness guard:** Compare the complete result with the deterministic
  six-field contract: `width`, `height`, `pixel_count`, `minimum`, `maximum`,
  and `mean`. The expected input checksum is checked as well.
- **Dependencies:** Python standard library only; no package metadata changed.

### Benchmark Stability

Environment: CPython 3.9.6, macOS 26.6.2, arm64. The benchmark's input
fingerprint and all six expected result fields passed in each independent
invocation.

| Invocation | Samples (ms/call) | Median | Range (ms/call) | Spread / median | Traced allocation peak | Invocation |
|---:|---|---:|---:|---:|---:|---:|
| 1 | 15.297, 14.838, 15.190, 15.051, 14.977, 16.425, 14.642 | 15.051 ms | 14.642–16.425 | 11.8% | 6,675,804 bytes | 0.27 s |
| 2 | 14.475, 14.425, 14.465, 14.561, 14.765, 14.040, 15.303 | 14.475 ms | 14.040–15.303 | 8.7% | 6,675,804 bytes | 0.26 s |
| 3 | 15.203, 14.904, 15.356, 14.893, 14.835, 14.820, 15.483 | 14.904 ms | 14.820–15.483 | 4.4% | 6,675,804 bytes | 0.27 s |

The median of the three invocation medians is **14.904 ms/call**. Those
medians span 14.475–15.051 ms, a 0.576 ms range (3.9% of their median). The
allocation observation was identical in all three runs. Per-run sample spread
is retained above as the timing noise limit; future comparisons must rerun
the same command and workload under comparable conditions.

### Repository Validation

| Check | Result |
|---|---|
| Full test suite | PASS, 11/11 |
| CLI smoke | PASS; 2×3 output, 6 pixels, mean 136.0, minimum 51, maximum 255 |
| Resize benchmark | PASS; correctness fingerprints match. This invocation's median was 144.8 ms/call and range 140.4–164.4 ms (16.6% spread); it includes one timing outlier. |
| Statistics benchmark | PASS in three independent invocations; same input checksum and six-field output guard. |
| `python3 -m py_compile benchmarks/benchmark_statistics.py` | PASS |
| `git diff --check` for the preparation change | PASS |
| Dependency metadata | Unchanged |
| Product source and tests | Unchanged |

### Benchmark Preparation Commit

- **Commit:** `4ad32b9175055818e89b66e6a44d4e3c8d6fab4b`
- **Message:** `build(benchmark): add statistics baseline`
- **Scope:** `benchmarks/benchmark_statistics.py` and its README command only.
- **Tag:** None.
- **Push:** None. The Demo repository has no configured remote.

This is an untagged preparation commit, not STATE-04. It precedes the Skill
candidate and does not change product code.

### Skill

- **Path:** `.agents/skills/graypipe-performance/SKILL.md` in the Demo repo.
- **Name:** `graypipe-performance`.
- **Description:** Investigate repository performance with reproducible
  measurements, correctness checks, and regression verification.
- **Procedure:** Read project sources; establish a guarded baseline; inspect
  the measured path; select task-appropriate metrics; make only an authorized,
  evidence-supported change or conclude no change; verify and rerun the same
  measurement; report observed trade-offs and limits.
- **Size:** 57 lines, 2,897 bytes.
- **Validation:** OpenAI `skill-creator` structural validator passed; manual
  review found no product-specific command, function name, optimization
  answer, workload, timing result, or duplicated Project fact in the Skill.

### Layer Boundary

| Layer | Content |
|---|---|
| `AGENTS.md` and Project docs | Project facts, behavior contracts, supported commands, test locations, and current benchmark details. |
| Repository Skill | Reusable performance investigation, measurement, verification, trade-off, and reporting procedure. |
| Task Prompt | The current task goal, constraints, allowed scope, and acceptance criteria; it does not repeat the procedure. |

The current official [Build skills documentation](https://learn.chatgpt.com/docs/build-skills)
supports repository Skills under `.agents/skills`, requires `name` and
`description` in `SKILL.md`, and describes metadata discovery followed by
loading the full instructions. TRIAL-008 observed discovery and loading in
Codex CLI 0.154.0; behavior in Codex Desktop remains unverified.

### Skill Content Validation

| Criterion | Result |
|---|---|
| Reusable across resize, normalize, and statistics | PASS by content review; no operation is named in the procedure. |
| Task-neutral | PASS; no prescribed optimization, function, or benchmark input. |
| Measurement-first | PASS; guarded baseline comes before edits. |
| Correctness-first | PASS; the result guard must pass before a comparison. |
| Trade-off aware | PASS; metric choice and runtime/allocation trade-offs are covered. |
| No-change allowed | PASS; it explicitly permits a no-change conclusion. |
| Verification | PASS; focused/broader checks, same benchmark, smoke, diff, and final review. |
| Claim discipline | PASS; conclusions are bounded by workload, environment, and conditions. |

This section records the pre-trial structural and content review. TRIAL-008
execution evidence follows.

### Expected STATE-04 Diff

Relative to the benchmark preparation commit, the only uncommitted Demo
change is `.agents/skills/graypipe-performance/SKILL.md`. It is not committed
or tagged. No other Demo path is part of the STATE-04 candidate diff.

### Skill Discovery Trial Protocol (Executed as TRIAL-008)

The trial used a disposable workspace based on the statistics preparation
commit and placed the current Skill candidate there. The original Demo
repository remained at the fixed preparation baseline. From the Demo
repository root:

1. **Discovered:** Codex CLI's `/skills` selector showed the Skill name and
   a truncated description. The selector did not show its filesystem path.
2. **Explicitly invoked:** the bounded task prompt included
   `$graypipe-performance`. Implicit invocation was not tested.
3. **Loaded:** the task trace contained the selected Skill's name, repository
   path, and full instruction body. There was no separate product event named
   "load"; report selector and task-trace evidence together without
   generalizing beyond this surface.

Keep the Skill procedure out of the task-specific prompt. Apply any candidate
statistics change only in the disposable workspace, never in the original
Demo repository. Do not compare Skills with Prompts.

### TRIAL-008 Task Prompt

```text
$graypipe-performance
In a disposable trial workspace, investigate whether `image_statistics` has
an evidence-supported runtime or allocation improvement. Preserve its current
six-field behavior and limit any change to this path; report trade-offs or a
no-change result when that is what the evidence supports.
```

### Next Readiness

**READY TO RECORD STATE-04.** TRIAL-008 passed for the explicitly invoked
repository Skill on Codex CLI 0.154.0. Desktop behavior, implicit invocation,
and Skill-versus-Prompt superiority remain untested. The statistics change
exists only in the disposable trial worktree. Do not create the STATE-04
commit/tag or copy the product optimization into the original Demo repository
without a later instruction.

## STEP 07 — §§161–170 TRIAL-008 SKILL RESULT

### Skill Discovery

- **Surface:** Codex CLI 0.154.0, `/skills` selector, in the disposable trial
  workspace based on benchmark preparation commit
  `4ad32b9175055818e89b66e6a44d4e3c8d6fab4b`.
- **Name:** `graypipe-performance`.
- **Description in Skill metadata:** “Investigate repository performance
  with reproducible measurements, correctness checks, and regression
  verification.” The selector displayed the truncated text “Investigate
  repository performance with reproduc…”.
- **Scope/path:** the selector identified a Skill. Its path was not shown in
  the selector; the later task trace gave
  `.agents/skills/graypipe-performance/SKILL.md` in the trial workspace.
- **Result:** discovered as a repository Skill. Official format/discovery
  background is documented in the [OpenAI Build skills
  documentation](https://learn.chatgpt.com/docs/build-skills); this trial is
  direct evidence only for the observed CLI version and account.

### Skill Invocation

The completed run used the exact prompt specified above. The prompt started
with `$graypipe-performance`, an explicit invocation. The first attempt with
the configured `gpt-6.1-sol` model was rejected as unsupported by the
account; no task edits resulted. The same exact prompt was then run using
`gpt-5.6-sol` at high reasoning effort. This is the execution evaluated
below.

### Skill Load Evidence

The visible `/skills` selector showed the matching entry and the operator
selected it. In the successful run's session trace, Codex supplied a
`<skill>` entry with name `graypipe-performance`, the trial repository path,
and the full contents of `SKILL.md`. The selection plus injected instruction
body supports an observed load for this run. There was no separate UI event
called “load,” so the evidence does not establish universal product behavior
or behavior in Codex Desktop.

### Global Harness Influence

- **Other Skills:** global plugin-mode instructions were present and referred
  to workflow invocation. The trace showed the repository Skill's full body;
  it did not show another global Performance Skill body being invoked or
  loaded. A local `performance-goal` Skill exists, but its presence on disk is
  not evidence that it participated. No same-name global Skill was found.
- **Hooks:** startup warned that 25 hooks were new or changed. The operator
  chose “Continue without trusting,” which states that hooks would not run.
  OMC SessionEnd configuration warnings appeared; no hook execution was
  observed.
- **MCP:** startup reported MCP initialization issues, increasing from one
  to two. Details were not captured, and the trace showed no MCP tool call or
  result. No MCP contribution can be attributed.
- **Instructions:** Codex supplied its CLI base instructions, repository
  `AGENTS.md`, the task prompt, global plugin-mode instructions, and the
  selected repository Skill. Description truncation warnings concerned
  display/context budget; the selected Skill body was present in the trace.
- **Environment:** CLI version `0.154.0`; the successful run used
  `gpt-5.6-sol` at high effort after the unsupported-model rejection.

### Baseline

- **Environment:** CPython 3.9.6, macOS 26.6.2, arm64.
- **Command:** `PYTHONPATH=src python3 benchmarks/benchmark_statistics.py`.
- **Workload:** deterministic 1024×768 image (786,432 pixels),
  `max_value=255`; input SHA-256
  `26df8e7b296672840d97cf5d9273e6660003afd680c62c7751d382c2d067fec9`.
- **Correctness:** all six fields (`width`, `height`, `pixel_count`,
  `minimum`, `maximum`, `mean`) and the input fingerprint passed.
- **Runtime samples (ms/call):**

| Run | Samples | Median | Range | Spread / median | Traced Python allocation peak |
|---:|---|---:|---:|---:|---:|
| 1 | 15.459, 14.861, 15.216, 15.177, 14.961, 14.769, 14.878 | 14.961 | 14.769–15.459 | 4.6% | 6,675,804 B |
| 2 | 15.079, 15.096, 15.119, 14.878, 14.921, 14.858, 14.678 | 14.921 | 14.678–15.119 | 3.0% | 6,675,804 B |
| 3 | 15.197, 13.629, 14.120, 14.309, 15.316, 15.104, 14.669 | 14.669 | 13.629–15.316 | 11.5% | 6,675,804 B |

The median of the three run medians was **14.921 ms/call**. The allocation
figure is `tracemalloc`-observed Python peak, not process RSS.

### Investigation

The Agent read project instructions and relevant README, architecture,
contracts, test guidance, `src/graypipe/statistics.py`,
`tests/test_statistics.py`, the benchmark, and configuration. The focused
test passed before any edit. Candidate comparison preserved the exact six
fields:

| Candidate | Median | Traced Python allocation peak | Assessment |
|---|---:|---:|---|
| Existing flattening | 14.826 ms | 6,675,804 B | Comparison baseline |
| Row reductions | 10.510 ms | 380 B | Selected for a scoped trial change |
| Manual Python single pass | 95.545 ms | 408 B | Rejected: lower allocation, much slower runtime |

The candidate comparison is supporting evidence; the repeated official
benchmark and same-process cross-check below provide the reported result.

### Plan

Before editing, the visible progress message said that row reductions kept
the result while lowering runtime and allocation, the manual Python loop was
rejected, and only flattening in `statistics.py` would be replaced. This
provided a scoped plan before the patch.

### Decision

**Implement in the disposable trial workspace.** The row-reduction candidate
preserved all six fields and showed lower runtime and traced allocation. The
manual-loop candidate demonstrated why allocation alone does not justify a
change. The implementation remained restricted to `image_statistics`.

### Implementation

Only trial-worktree `src/graypipe/statistics.py` changed. It removed the
flattened pixel list, computed pixel count from image dimensions, and used
row-level `min`, `max`, and `sum`. This traverses rows three times but avoids
the full list allocation. No change was copied into the original Demo
repository; no trial change was committed or tagged.

### Verification

| Workflow Step | Skill Contains | Observed | Evidence |
|---|---|---|---|
| Baseline | Yes | Yes | Same documented benchmark command; three runs before edits. |
| Correctness guard | Yes | Yes | Input hash and all six fields passed before and after. |
| Investigation | Yes | Yes | Read implementation, contract, tests, benchmark, and project docs. |
| Candidate / trade-off analysis | Yes | Yes | Compared existing, row reductions, and manual loop; rejected the slow loop. |
| Plan before edit | Yes, when called for | Yes | Visible pre-edit plan limited the patch to `statistics.py`. |
| Implementation / no-change decision | Yes | Yes | Implemented the evidence-supported row-reduction candidate in the trial only. |
| Focused test | Yes | Yes | `test_statistics` passed 1/1 before and after. |
| Full test | Yes | Yes | Full suite passed 11/11. |
| Same benchmark | Yes | Yes | Same command, deterministic workload, and correctness guard; three runs each. |
| Runtime comparison | Yes | Yes | Raw samples, medians, ranges, and spread recorded below. |
| Allocation comparison | Yes | Yes | Separate `tracemalloc` measurement; explicitly not RSS. |
| CLI / integration smoke | Yes, when relevant | Yes | CLI read the README image and returned a 4×3 summary. |
| Diff check | Yes | Yes | `git diff --check` passed. |
| Final review | Yes | Yes | Final diff showed one function in one source file. |
| Limitations | Yes | Yes | Reported noisy first after-run and bounded environment/workload. |

### Performance / Allocation Result

| Run | After samples (ms/call) | Median | Range | Spread / median | Traced Python allocation peak |
|---:|---|---:|---:|---:|---:|
| 1 | 10.450, 14.639, 11.306, 12.388, 13.356, 14.755, 11.516 | 12.388 | 10.450–14.755 | 34.8% | 380 B |
| 2 | 11.373, 10.629, 11.828, 10.570, 10.816, 11.005, 11.581 | 11.005 | 10.570–11.828 | 11.4% | 380 B |
| 3 | 10.185, 10.178, 10.247, 10.210, 10.069, 10.139, 10.014 | 10.178 | 10.014–10.247 | 2.3% | 380 B |

Pooling all 21 baseline samples and all 21 after samples gives medians of
14.921 ms and 10.816 ms, respectively (27.5% lower for this workload). As a
separate alternating same-process check, 10 blocks of 3 calls gave baseline
median 14.796 ms (14.534–15.098) and after median 10.677 ms
(10.455–10.999), a 27.8% difference. The first after-run was noisy; the
subsequent runs and cross-check support the direction of the result. Traced
Python allocation peak fell from 6,675,804 B to 380 B (about 99.994% lower).
The three-pass trade-off and instrumentation scope remain material.

Validation also passed the full 11-test suite, CLI smoke (`width=4`,
`height=3`, `pixel_count=12`, `minimum=0`, `maximum=255`, `mean=131.75`),
all six output guards, input checksum, and `git diff --check`.

### Final Product Decision

**KEEP in the disposable trial only.** The recorded benchmark and alternating
cross-check support a runtime improvement and a large reduction in traced
Python allocation for this deterministic workload, with exact six-field
behavior. Do not interpret this as authorization to update the original Demo
repository or as a general performance guarantee.

### Prompt Responsibility Shift

**YES for the explicitly invoked run.** TRIAL-007's long prompt carried the
goal, project constraints, workflow, verification, and reporting procedure.
TRIAL-008 stated the task goal and task-specific constraints, then explicitly
referenced `$graypipe-performance`; the Skill supplied the recurring
procedure and the trace shows its instruction body. This supports a
responsibility shift from Prompt to Skill for this run. No token or character
savings are claimed.

### Result

**PASS** for repository Skill discovery, explicit invocation, load evidence,
and workflow reuse on Codex CLI 0.154.0 with the successful run's account and
model. The evidence is surface- and run-specific.

### What This Demonstrates

- The repository Skill appeared in `/skills` and was explicitly selected and
  invoked in this CLI run.
- The trace included the selected Skill's full instructions.
- The repeated workflow was observed across baseline, investigation, a
  pre-edit plan, a scoped implementation, tests, benchmark, smoke, review,
  and limitation reporting.
- The task-specific candidate decision considered runtime and allocation
  together, rather than treating allocation reduction alone as success.

### Do Not Claim

This trial does not demonstrate Skill superiority over Prompts, token
savings, implicit invocation reliability, universal behavior, Codex Desktop
behavior, or runtime/allocation improvement outside the recorded workload and
environment. It does not isolate the Skill from every global instruction.

### STATE-04 Assessment

**YES.** There is evidence to prepare the STATE-04 record: candidate Skill,
explicit discovery and invocation, instruction-body evidence, and observed
workflow reuse. This assessment does not create a STATE-04 commit or tag.

### ACT 3 Demo Assessment

**HYBRID.** Use a live Codex CLI run with captured output and a fallback
capture. Desktop surface behavior and rehearsal still need validation before
making any Desktop-specific claim.

### Next Readiness

**READY TO RECORD STATE-04.** The Trial does not itself create or tag
STATE-04. Keep the statistics optimization in the disposable workspace,
leave the original Demo product source unchanged, and wait for the next
instruction before creating the STATE-04 commit/tag or advancing to another
state.

## STEP 07 — §§171–180 STATE-04 AND COMPLEX TASK RESULT

### TRIAL-008 Evidence Fixed

TRIAL-008 is fixed as reusable-workflow evidence for **Codex CLI 0.154.0,
`gpt-5.6-sol`, and explicit `$graypipe-performance` invocation**. The run
observed repository Skill discovery and path, the full Skill body in the
execution context, a shorter task-specific prompt, baseline measurement,
investigation, multiple candidates, a visible plan before edit, scoped
implementation, focused and full tests, the same benchmark, allocation
measurement, CLI smoke, diff review, and limitation reporting. Prompt
responsibility shifted for the repeated procedure from Task Prompt to
Repository Skill.

This does not establish Skill superiority, token savings, implicit invocation
reliability, Codex Desktop behavior, or universal behavior. Detailed execution
and attribution limits remain in the preceding TRIAL-008 record.

### Statistics Finding

The earlier temporary prototype used a manual Python single-pass loop. It
reduced traced allocation but ran substantially slower. TRIAL-008 compared
multiple implementations and selected row-level built-in reductions; these
showed a lower runtime median and dramatically lower traced allocation for
the measured workload. This is a task-specific implementation finding, not
evidence that the Skill caused or guarantees the improvement.

Teaching insight candidates:

- Do not predetermine the optimization answer; measure a baseline and
  candidates.
- The same goal can have different runtime/allocation trade-offs depending
  on the implementation.

### STATE-04

- **STATE-03 commit/tag:**
  `f3e2e37b1454e28c5de4c44682ebd49378ebae4b` / `STATE-03`.
- **Benchmark preparation baseline:**
  `4ad32b9175055818e89b66e6a44d4e3c8d6fab4b`.
- **STATE-04 commit:**
  `822f1c12c5f602d934a2fd29e48f05bf498b4bfa`.
- **Commit message:** `feat(skill): add reusable performance workflow`.
- **Tag:** `STATE-04`, a lightweight tag pointing to the STATE-04 commit.
- **Commit scope:** adds only
  `.agents/skills/graypipe-performance/SKILL.md`.
- **Remote:** none configured; no push was made.
- **Trial product change:** the `statistics.py` optimization remains only in
  `/tmp/ai-dev-training-demo-trial-008-20260930` and is not in STATE-04.

### STATE-04 Validation

Validation ran against the original Demo repository at the benchmark
preparation baseline, before committing the Skill:

| Check | Result | Evidence |
|---|---|---|
| Full test suite | PASS, 11/11 | `PYTHONPATH=src python3 -m unittest discover -s tests -v` |
| CLI smoke | PASS | README sample cropped to 2×3; six pixels, mean 136.0, min 51, max 255. Temporary output was removed. |
| Resize benchmark | PASS | Correctness fingerprints passed; median 142.3 ms/call, range 139.8–145.6 ms (4.1% spread). |
| Statistics benchmark | PASS | Input checksum and six fields passed; median 14.848 ms/call, range 14.557–15.085 ms (3.6% spread); allocation 6,675,804 B. |
| Skill structure | PASS | Previously validated candidate; its SHA-256 matched the TRIAL-008 candidate. |
| `git diff --check` | PASS | Staged Skill-only diff passed before commit. |
| Dependency metadata | Unchanged | `pyproject.toml` and `setup.cfg` were not changed. |
| Product source and tests | Unchanged | The only staged file was the Skill. |
| Tag and repository status | PASS | `STATE-04` resolves to the STATE-04 commit; repository is clean. |

The STATE-04 purpose is **“Reusable Performance Workflow exists.”** It does
not claim that the original product has been optimized.

### Current Harness

The working system now consists of a task-specific Prompt, root project
instructions, routed project Context, the repository-owned performance Skill,
deterministic resize and statistics benchmarks, and tests. The components
have distinct sources and observed uses. STATE-04 is useful without a
Subagent; in the observed CLI run, the developer explicitly invoked the
reusable procedure without restating its full workflow in the task Prompt.
The absence of a Subagent does not make this Harness incomplete.

## STEP 07 — COMPLEX TASK CANDIDATE RESULT

### Candidate A

**Task:** investigate performance across the image-processing pipeline and
propose a safe, evidence-backed improvement plan while preserving public
behavior; implementation is not required by the task.

- **Why realistic:** `process_image` connects load, normalization, optional
  inversion, crop, resize, output, and statistics. Separate deterministic
  resize and statistics benchmarks already exist, so investigation can start
  from actual modules and measurements.
- **Independent dimensions:** Architecture maps stages and data flow;
  Performance measures candidate stages; Tests maps behavior contracts and
  regression coverage.
- **Expected Context:** `docs/architecture.md`,
  `docs/image-contracts.md`, `docs/testing.md`, `pipeline.py`, operation
  modules, existing tests, and benchmarks.
- **Risk:** The repository is small, and current benchmarks are not a
  stage-by-stage pipeline profile. The task needs measurement setup but may
  still fit comfortably in one Agent.

### Candidate B

**Task:** assess the impact of a specified change to the image representation
or processing order across modules, contracts, and tests.

- **Why realistic:** the nested-tuple `GrayImage` representation and pipeline
  order are used across loader, normalization, filters, transforms,
  statistics, CLI, and tests.
- **Independent dimensions:** Architecture traces callers and data flow;
  Contracts checks P2, normalization, crop, and resize semantics; Tests maps
  regression coverage; Performance estimates hot-path consequences against
  existing baselines.
- **Expected Context:** image representation, pipeline flow, image contracts,
  module implementations, tests, and benchmarks.
- **Risk:** No concrete representation/order requirement currently exists.
  Without one, this becomes a hypothetical architecture exercise, and its
  dimensions overlap enough for one Agent to cover.

### Candidate C

**Task:** review whether the TRIAL-008 `image_statistics` candidate is safe to
adopt, considering measurement validity, architecture, and regression tests.

- **Why realistic:** the candidate has direct benchmark, allocation,
  correctness, and test evidence in the disposable Trial.
- **Independent dimensions:** Performance independently checks comparison
  validity; Tests reviews six-field behavior and regressions; Architecture
  checks function scope and callers.
- **Expected Context:** the statistics function, six-field contract, focused
  test, benchmark, trial evidence, and Skill procedure.
- **Risk:** TRIAL-008 already provides the answer for this candidate. Repeating
  that known investigation is less natural as a new Subagent introduction;
  the original product code intentionally remains unchanged.

### Better Candidate

No stronger real task is present in the current repository. Candidate A is
the best future task to revisit if real pipeline performance requirements or
measured stage interactions make the investigation broader. Do not invent a
product change just to create separate roles.

### Single-Agent Feasibility

| Candidate | Can one Agent complete it? | Current assessment |
|---|---|---|
| A | Yes | Multiple modules, but architecture is documented and project scale is small. |
| B | Yes | A concrete change would bound the impact analysis; none exists now. |
| C | Yes | Evidence and implementation scope are already narrow and known. |

None currently demonstrates that a single Agent is too complex or context-
limited for the task.

### Role Separation Value

- **Context isolation:** potentially useful if a future pipeline task has
  enough independent stage, contract, and test evidence to burden one context.
- **Independent investigation:** possible for architecture, measurement, and
  regression questions, but current files are few and tightly connected.
- **Clarity:** roles could label these questions, though a single Agent can
  already report them as separate sections.
- **Parallelism:** limited value for this project size; findings must still be
  reconciled against the same small set of implementation and contract files.

### Coordination Cost

Separate roles would duplicate repository reads, require context transfer,
and create integration work for overlapping conclusions. A main Agent would
still need to validate shared claims and reconcile evidence. For the current
candidate sizes, this overhead is not justified by a clear time or quality
benefit.

### Recommended Complex Task

**NO SUBAGENT JUSTIFIED YET.** Keep Candidate A as a possible future
single-Agent investigation. Reconsider role separation only when a real task
spans enough independent evidence or responsibilities that one Agent's
context or investigation becomes difficult to manage.

### Teaching Implication

Do not introduce Subagents now as a required Harness component. Show STATE-04
as a useful working system and let a later, evidence-backed complexity
problem motivate role separation if one emerges. This follows
`INV-MATURITY-007` and avoids turning Subagents into an advanced-feature
showcase.

### Next Readiness

**SUBAGENT NOT JUSTIFIED.** No Subagent was created or called, no STATE-05 was
created, no Memory was added, and the statistics optimization remains outside
the original Demo repository. Reassess only after a concrete project change
or task provides the missing complexity.

## STEP 07 — §§181–190 MEMORY NEED ASSESSMENT

### Subagent Decision

**ACCEPTED: no Subagent is added at STATE-04.** Candidate tasks A/B/C can be
handled by one Agent; their investigation dimensions are closely connected,
and the project is small. Role-specific Context separation and parallelism do
not currently outweigh duplicate repository reads, context transfer, result
integration, and coordination cost. Adding the mechanism without a concrete
complexity problem would conflict with the Minimum Effective Harness
principle. This is a judgment about this repository and these candidate tasks,
not a general claim that Subagents are unhelpful. See `DEC-0018`.

### Story Impact

Keep two Story layers distinct:

- **Conceptual Curriculum Story:** a sufficiently complex project may create
  distinct role and Context needs, making Subagents one possible response.
  The repeated-rediscovery and Memory lifecycle remain conceptual teaching
  material, not claims about this repository's Trial history.
- **Primary Demo repository:** STATE-04 contains a repository-owned Skill but
  no Subagent or Memory artifact. Do not add artificial complexity to make
  either appear necessary. A possible teaching line is: “여기서 많은 팀이
  Subagent를 떠올립니다. 하지만 이 Project에서는 아직 필요하지
  않았습니다.”

### Subagent Demo Status

`DEMO-07` is **DEFERRED — NOT JUSTIFIED AT STATE-04**. It is neither a primary
Live Anchor nor a supporting Live Demo. If the conceptual role-separation
explanation remains useful, use a visual or captured external/conceptual case.
Reassess only if actual repository or task complexity creates meaningful
independent investigations whose benefits exceed the coordination cost.

### Trial History Audit

“Repeated” below means a fact or procedure was encountered in multiple
Trials; it does not by itself mean an Agent had to rediscover information
missing from the Project's maintained sources.

| Knowledge | Seen In | Repeated? | Current Source | Classification |
|---|---|---|---|---|
| Crop boundary, processing path, and image contracts | TRIAL-001, TRIAL-002, TRIAL-005A | Yes, for different investigation, fix, and contract questions; no hidden-fact recurrence was observed. | `src/graypipe/transform.py`, `tests/test_transform.py`, `docs/image-contracts.md`, and related architecture docs. | A. Source-of-truth fact; B. Project documentation fact. |
| Declared dependencies, build tools, and test command | TRIAL-003, TRIAL-004, TRIAL-005B, TRIAL-006–008 | Yes, where each task needed setup or verification; not recorded as a missing-source failure. | `pyproject.toml`, `setup.cfg`, `AGENTS.md`, and `README.md`. | A. Source-of-truth fact; B. Project documentation fact. |
| Runtime/host used for performance observations | Performance preparation and TRIAL-006–008 | Repeated as run metadata, but it describes the measured host/runtime, not a hidden project contract. | Dated Trial records and the environment summary in `DEMO_REPOSITORY_SPEC.md`; not a pinned runtime fact in the package configuration. | C. Task observation; E. Temporary/environment-scoped knowledge. |
| Pipeline/module architecture and test map | TRIAL-001–003, TRIAL-005A, TRIAL-006–008 | Revisited across tasks with different scope; existing docs provide the current reference. | `docs/architecture.md`, `docs/testing.md`, source, and tests. | A. Source-of-truth fact; B. Project documentation fact. |
| Performance investigation procedure and benchmark interpretation | TRIAL-006, TRIAL-007, TRIAL-008 | Yes. Reuse of the procedure was genuine workflow repetition and led to DEC-0017 / the Skill; it is not repeated rediscovery of a Project fact. | `.agents/skills/graypipe-performance/SKILL.md`, `README.md`, benchmark scripts, and DEC-0017. | B. Project documentation / reusable procedure; task workflow already has a home. |
| Benchmark numbers, host/runtime, input dimensions, and performance findings | Performance preparation and TRIAL-006–008 | Yes, but values belong to distinct code paths, workloads, and trial conditions; no portable shared fact was identified. | Benchmark scripts and the dated Trial evidence in this Matrix. | C. Task observation; some environment details are temporary. |
| STATE history, baseline behavior, and accepted implementation choices | TRIAL-001–008 and successive state records | Rechecked while moving through different states; history is versioned and recorded, not absent. | Demo Git commits/tags, `DEMO_REPOSITORY_SPEC.md`, `plan/DECISIONS.md`, and this Matrix. | A. Versioned source-of-truth history; B. Project decision/documentation fact. |
| Permission, MCP, model, hook, or temporary-environment observations | TRIAL-001, TRIAL-004, TRIAL-005A/B, TRIAL-006, TRIAL-008 | Some similar warnings recurred, but the details depend on the run and do not describe durable repository behavior. | Dated Trial records in this Matrix. | C. Task observation; E. Temporary knowledge. |
| Project-specific compatibility or migration fact | None identified in TRIAL-001–008 | No recurring compatibility or migration issue was observed. The learner environment decision is separately recorded. | No Demo migration fact; the learner-environment decision is in `DEC-0016` and OQ-003. | None for the Demo; do not invent a Memory candidate. |

### Rediscovery Candidates

- The closest apparent repetition is the performance procedure across
  TRIAL-006/007/008. It is already stored as the repository-owned Skill under
  DEC-0017, so the demonstrated need is a reusable Workflow, not Memory.
- Crop behavior and setup facts were revisited because the Trials asked
  different questions at different States. Current code, tests, configuration,
  and Project docs expose them directly; no expensive rediscovery caused by a
  missing durable fact is recorded.
- Per-run benchmark results and environment messages are preserved as dated
  evidence. Their limited scope and freshness make the Trial record a better
  home than a general-purpose Memory.
- No actual compatibility or migration fact remains both hard to find and
  reusable across future tasks.

**Result: no qualifying rediscovery candidate identified.**

### Durable Knowledge Candidates

**None at STATE-04.** The candidate of retaining current benchmark or image
workload measurements is already recoverable from the benchmark command,
inputs, source, README, and dated Trial evidence. Machine-, runtime-,
implementation-, and input-specific measurements need like-for-like
re-measurement before reuse; a retained summary would risk stale or
overgeneralized claims. No durable fact both requires Memory and is currently
missing from its appropriate source.

### Documentation Instead?

| Information | Best current home | Reason |
|---|---|---|
| Current behavior, contracts, dependencies, commands | Source code/configuration plus `AGENTS.md`, `README.md`, and topic docs | These are the maintained Sources of Truth and already expose the facts. |
| Reusable performance procedure | Repository-owned Skill | This was the actual repeated workflow identified in TRIAL-006/007 and selected in DEC-0017. |
| Benchmark results and host/input conditions | Benchmark output and dated Trial evidence | Preserve provenance without treating one machine/workload as a timeless project rule. |
| Accepted design choices and why | `plan/DECISIONS.md` | Decision rationale and supersession history belong in the Decision Log. |
| State and Trial history | Git history/tags, `DEMO_REPOSITORY_SPEC.md`, and this Matrix | Historical evidence must remain traceable to the specific state/run. |
| Temporary tool/environment events | Dated Trial evidence; omit after relevance expires | These are not durable project facts. |

Keep the terms separate: current Session Context answers what this task needs
now; repository-owned durable knowledge would be a sourced fact deliberately
maintained for later tasks; product-provided persistent Memory is a distinct,
surface/account-dependent product mechanism; `DECISIONS.md` records accepted
choices and rationale; Project docs describe current contracts and commands;
the Matrix preserves Trial evidence. None replaces the others.

### Memory Gate and Freshness Risk

No candidate passes the seven required conditions together:

| Gate | STATE-04 finding |
|---|---|
| Reusable across several future Tasks | Existing current facts may recur, but the sources already serve those tasks; no additional retained fact was identified. |
| Repeated investigation cost | No Trial records costly rediscovery caused by a missing or hard-to-find fact. |
| Not immediately available from current Sources of Truth | No candidate met this condition. |
| Project-specific | Some observations are specific, but specificity alone is insufficient. |
| Provenance can be recorded | Trial results have provenance, but are better kept in dated evidence. |
| Scope can be defined | Benchmark values can be scoped to host/runtime/input, which makes them narrow observations rather than shared Memory. |
| Freshness/invalidation can be defined | Workload, source, runtime, or host changes would invalidate measurements; the benchmark is already runnable to refresh them. |

**Freshness risk:** benchmark timings and allocation figures can become stale
when source, input dimensions, Python/runtime, host, or measurement procedure
changes. Current README and benchmark outputs already identify the relevant
conditions. Do not elevate those bounded values into durable Memory.

### Curriculum and STEP 03 Research Boundary

The ACT 3 Curriculum keeps repeated discovery and the Context-versus-Memory
distinction as conceptual teaching content; it already directs the course to
compare product Memory details only after verification. STEP 03's
[`references/product/memory.md`](../references/product/memory.md) distinguishes
product-persistent preferences/context from current task Context and says
project plans remain the Source of Truth. It also does not establish that
Memory is enabled in every workspace. Therefore this audit does not inspect
or implement a particular product Memory mechanism: no Demo need has been
established. Keep repository-owned durable knowledge, Decision Log,
documentation, dated Trial evidence, session Context, and product Memory as
separate concepts.

### Memory Justified?

**NOT YET — MEMORY NOT JUSTIFIED YET.** This is a current evidence judgment,
not a general rejection of Memory or of future project-specific durable
knowledge. Do not create a Memory artifact or select a product Memory
mechanism at STATE-04.

### Teaching Implication

Keep Memory out of the primary repository implementation for now. If the
Curriculum retains the distinction, use a **supporting visual or conceptual
case** to explain Source of Truth, durable knowledge, product Memory, and
freshness without presenting the case as an observed Demo event. No product
Memory interaction is selected.

### Next Problem

The next genuine primary-Demo Engineering Problem remains the planned Project
Evolution that can leave an earlier-correct performance Skill stale, leading
to the controlled Harness-failure and repair story. Complete and verify the
selected STATE-04-PERF product-change transition first; do not manufacture a
project change, stale Skill, or Loop now. The optional Subagent and Memory
stages remain gated on actual evidence and are not prerequisites to that
problem.

### Next Readiness at the §§181–190 checkpoint

At that checkpoint, STATE-04-PERF was still a prerequisite. The later
§§191–200 record below completes it and gives the current readiness.

**READY TO EVOLVE PROJECT** after the already planned STATE-04-PERF transition
is implemented and validated. No STATE-05 was created; no Memory artifact,
product-memory configuration, artificial Project change, stale Harness, or
Loop Engineering work was started. This readiness does not skip the
STATE-04-PERF prerequisite or authorize implementation beyond this assessment.

## STEP 07 — §§191–200 STATE-04-PERF RESULT

### Baseline

The fresh baseline was measured from STATE-04 commit
`822f1c12c5f602d934a2fd29e48f05bf498b4bfa`, tag `STATE-04`, before editing
the product source. The Demo checkout was clean. Environment: CPython 3.9.6,
macOS 26.6.2, arm64. The command was
`PYTHONPATH=src python3 benchmarks/benchmark_statistics.py`. Its deterministic
input was 1024×768 (786,432 pixels, maximum 255), with input SHA-256
`26df8e7b296672840d97cf5d9273e6660003afd680c62c7751d382c2d067fec9`.
The six-field correctness guard passed.

| Metric | STATE-04 baseline |
|---|---|
| Samples (ms/call) | 16.341, 16.052, 15.134, 15.529, 15.468, 15.014, 15.360 |
| Median | 15.468 ms/call |
| Range / spread | 15.014–16.341 ms; 1.328 ms (8.6% of median) |
| `tracemalloc` peak for one call | 6,675,804 bytes |
| Invocation runtime | 0.28 s |
| Correctness | PASS; all six summary fields matched |

The resize benchmark was also run before the change as a bounded comparison:
seven samples `154.0, 148.7, 148.9, 148.9, 148.3, 154.7, 151.8` ms/call;
median 148.9 ms/call; range 148.3–154.7 ms; invocation 1.31 s. Its input
and output fingerprint guards passed.

### Product Change

The current `src/graypipe/statistics.py` was re-investigated from STATE-04.
The prior TRIAL-008 row-reduction candidate was only a reference: the current
implementation was checked against its rectangular, non-empty `GrayImage`
contract, the existing focused test, and the deterministic six-field
benchmark guard. The minimal source change removes the flattened temporary
pixel list, derives the count from validated dimensions, and uses built-in
reductions over rows for minimum, maximum, and sum. No unrelated optimization,
test, benchmark input, repetition count, API, or dependency changed.

The product-only commit is
`6153b81c0187dd7d82c88bd1817fb683c98eb431`
(`perf(statistics): remove flattened pixel allocation`). The lightweight tag
`STATE-04-PERF` points to it. `STATE-04` remains at its original commit.

### Verification

| Check | Result | Evidence |
|---|---|---|
| Focused statistics test | PASS, 1/1 | `PYTHONPATH=src python3 -m unittest discover -s tests -p 'test_statistics.py' -v` |
| Full tests | PASS, 11/11 | `PYTHONPATH=src python3 -m unittest discover -s tests -v` |
| Statistics benchmark | PASS | Input fingerprint and all six output fields matched before timing and in the allocation check. |
| Resize benchmark | PASS | Input SHA-256 `8313459c55df7237ac1de8435086b9af01d9d28d5604d19310001160f3c3f827` and output SHA-256 `cf5a936c953a1cb873b4bc3f4632c50c1bb0e477a7af9f0b45ffec17018cb553` matched. |
| CLI smoke | PASS | Sample crop returned width 2, height 3, 6 pixels, minimum 51, maximum 255, mean 136.0; output PGM pixels matched. |
| Diff check | PASS | `git diff HEAD^ HEAD --check` passed. |
| Final diff review | PASS | Product commit changes only `src/graypipe/statistics.py`, with 5 insertions and 5 deletions. |

The CLI JSON summary was `{"height": 3, "maximum": 255, "mean": 136.0,
"minimum": 51, "pixel_count": 6, "width": 2}`. The output file was checked
for the expected 2×3 pixel values and the temporary output directory was
removed. No dependency or interface change was found.

### Performance Evidence

The same statistics command, Python runtime, host, deterministic input,
correctness guards, seven one-call samples, and separate `tracemalloc` call
were used before and after. The post-change run was:

| Metric | STATE-04-PERF |
|---|---|
| Samples (ms/call) | 10.910, 11.237, 10.234, 10.042, 11.204, 10.769, 10.581 |
| Median | 10.769 ms/call |
| Range / spread | 10.042–11.237 ms; 1.195 ms (11.1% of median) |
| `tracemalloc` peak for one call | 380 bytes |
| Invocation runtime | 0.24 s |
| Correctness | PASS; input hash and all six fields matched |

Against this newly measured STATE-04 baseline, the median was 4.699 ms/call
lower (about 30.4% for this workload), and the traced Python allocation peak
was 6,675,424 bytes lower (about 99.994%). The before and after timing ranges
do not overlap. This is a measured result for this synthetic input and this
machine/runtime, not a target borrowed from TRIAL-008 and not a general
performance guarantee. The allocation number is a `tracemalloc`-observed
Python allocation peak, not process RSS.

The resize benchmark after the change passed the same fingerprint guards.
Its seven samples were `152.6, 147.2, 145.6, 145.8, 156.0, 154.2, 158.3`
ms/call; median 152.6 ms/call; range 145.6–158.3 ms; invocation 1.32 s. The
before/after resize ranges overlap, and only one invocation was collected per
state, so this check does not support a performance conclusion about resize.
The changed source path is separate from resize.

### Working Harness Success Audit

| Question | Result | Evidence |
|---|---|---|
| 1. Did Project Context provide Project facts? | YES | Repository instructions, the image contract, the statistics source, and its test supplied the current behavior and constraints. |
| 2. Did Context routing structure detailed Project Knowledge? | YES | Architecture, image-contract, and testing information have distinct maintained sources; the relevant statistics/test/benchmark path was identifiable. This is artifact evidence, not a claim about universal automatic retrieval. |
| 3. Was the Performance Skill reusable? | YES | TRIAL-008 observed explicit discovery, loading, and reuse on Codex CLI 0.154.0; its surface and account limits still apply. |
| 4. Did the benchmark provide before/after evidence? | YES | The same STATE-04 statistics benchmark was run before editing and after the product change with matching input hash and summary guard. |
| 5. Did Tests verify correctness? | YES | Focused statistics test passed 1/1 and the full suite passed 11/11. |
| 6. Did the Skill Trial produce a real candidate? | YES | TRIAL-008 compared implementations and identified row-level built-in reductions; the old Trial result was treated as a candidate, not as the new baseline or target. |
| 7. Was the change verified in the formal repository? | YES | The STATE-04 checkout was re-investigated; the focused/full tests, benchmarks, CLI smoke, diff review, commit, and tag all completed. |

**Working Harness Success.** The evidence supports that the current Harness
helped produce and verify this bounded Product Change. It does not establish
universal Skill behavior or attribution of every improvement to one Harness
component. No Subagent or Memory was needed for this small, connected task:
the code path and contracts were local, the workflow was reusable, and no
costly cross-task rediscovery or independent parallel investigation emerged.

### Minimum Effective Harness

For this state, the effective system was a task-specific Goal, Project
Context, Context routing, the repository-owned Performance Skill, deterministic
benchmarks, and Tests. Each component supplied a different piece of the task
or its verification. The observed evidence did not justify adding a Subagent
or Memory; their absence does not make STATE-04 incomplete.

### Teaching Point

Preserve the success beat: **“여기까지는 잘 동작합니다.”** The developer set
the task goal, repository sources supplied Project Context, routing helped
locate detailed Context, the Skill supplied the repeatable procedure, and the
benchmark plus Tests established an evidence-supported Product Change. Let
learners recognize this working system before introducing a later Project
Evolution problem.

### Next Problem and Readiness

The next investigation may ask what real Project Change could make a
previously correct instruction stale. The next stage has not implemented a
Project Evolution, stale Skill, Harness failure, Loop, or STATE-05. Reassess
the problem and evidence in the next instruction.

**READY TO DESIGN PROJECT EVOLUTION.**

## STEP 07 — §§201–210 PROJECT EVOLUTION CANDIDATE REVIEW

### Current Baseline

The current Product baseline is `STATE-04-PERF`, Demo commit/tag
`6153b81c0187dd7d82c88bd1817fb683c98eb431` / `STATE-04-PERF`. Its working
system is a task Prompt, Project Context, Context routing, the
`graypipe-performance` Skill, benchmarks, Tests, and the optimized statistics
implementation. The preceding state passed the focused statistics test,
11/11 full tests, both benchmark correctness checks, the CLI smoke, and the
diff check. The current Demo checkout is clean.

This review is a design assessment only. No Project, Skill, instruction,
benchmark, test, or Harness artifact was changed; no Failure Trial was run.
Ratings below are judgments from the current repository and accepted plan,
not Trial results.

### Candidate Evaluation

**Rating key:** High / Medium / Low describe fit for each criterion. For
Implementation effort and Demo runtime, Low is favorable. “Single stale
cause” asks whether the current Performance Skill itself would become stale
without adding an artificial, separately outdated artifact.

| Criterion | A. Benchmark interface | B. Test organization | C. CLI / pipeline | D. Benchmark contract | E. Packaging / execution |
|---|---|---|---|---|---|
| Product-side realism | Medium: two scripts duplicate some timing/report structure. | Low: current suite has only 11 tests in 6 modules. | Medium: a feature can be real, but no feature request is recorded. | Medium: a structured output can help automation. | Medium: the project already has a console entry point and a Windows-centered audience. |
| Current project justification | Medium: duplication exists, but no maintenance problem is recorded. | Low: one integration test is not enough evidence for a directory migration. | Low: no new behavior is requested. | Low: there is no parser, CI, or automated comparison consumer. | Low–Medium: commands use `PYTHONPATH=src`, but exact learner shell/setup is still open. |
| Audience clarity | High | High | Medium | Medium | Medium |
| Domain neutrality | High | High | Medium | High | High |
| Harness relevance | High | High | Medium | High | High |
| Single stale cause for the current Skill | Low: Skill discovers the current command from Project sources. | Low: Skill does not pin test paths or a runner. | Low: many Project references change together. | Low: Skill does not prescribe an output schema. | Low: Skill delegates current commands to Project sources. |
| Repeated failure potential | Low unless a separate old command is left behind. | Medium if an old exact command becomes invalid; not established by this tree. | Low–Medium; several facts could drift together. | Medium if an old parser/reporting contract is retained. | Medium if an old setup command is retained. |
| Cause analysis quality | Medium | High for a specific old test path/command. | Low: many potential stale facts. | Medium | Medium |
| Correct-layer fix quality | Medium | Medium: likely fix is a Project source or command, not this Skill. | Low–Medium: several sources may need repair. | Medium | Medium |
| Evaluation potential | Medium | High | Medium | High | Medium |
| Regression potential | Medium | High | Medium | High | Medium |
| Cross-platform neutrality | High | High | High | High | Medium until the target setup is chosen. |
| Implementation effort | Medium | Medium | High | Medium | High |
| Demo runtime | Low | Low | Medium | Low–Medium | Medium–High |
| Story continuity | High | High | Medium | High | Medium |

### Candidate Details and Stale-Artifact Mapping

| Candidate / artifact | CURRENTLY REFERENCES OLD STATE? | PROJECT SOURCE OF TRUTH CHANGED? | WOULD AGENT BE MISLED? |
|---|---|---|---|
| A / benchmark scripts | No now; the current two scripts still match the interface. | No now; a runner migration would change benchmark source and entry points. | No if the interface and README are updated together. |
| A / `README.md` benchmark commands | No now; both documented commands run the current scripts. | No now; yes under the hypothetical runner migration. | Yes if the README command is left old; otherwise no. |
| A / Performance Skill | **No.** It has no benchmark filename and says to discover the current command from Project sources. | No now; the Skill itself need not change for the runner migration. | No if the README is current. The Skill would not be the stale artifact. |
| B / `AGENTS.md` test command | No now; it matches the current unittest tree. | No now; yes only if the Project adopts a test procedure the command no longer runs. | Yes if that command becomes invalid or silently discovers no tests; neither outcome has been observed. |
| B / `docs/testing.md` test paths | No now; the six listed modules exist. | No now; yes under the hypothetical layout migration. | Yes if moved paths are not documented; no if updated. |
| B / Performance Skill | **No.** It pins neither the test paths nor the unittest runner. | No now; the Skill can use updated Project sources. | No if its routed sources are current; it would not be the stale artifact. |
| C / Architecture, image contract, CLI, tests | No now; they match current source. | No now; a feature/schema change would alter product code and may alter several contracts. | Possibly yes, with several stale sources and no single cause unless scope is tightly bounded. |
| C / Performance Skill | No specific module or summary schema is fixed in it. | No now; the generic verification sequence remains usable. | Possibly through stale routed docs, but the Skill itself would not be shown stale by this candidate alone. |
| D / benchmark output contract and README | No now; the human-readable output matches the current scripts. | No now; yes under a structured-output change. | Possibly if output meaning or fields change and the README/consumer contract is not updated. |
| D / Performance Skill | **No.** It records correctness, samples, median, range, and limits, not a required serialization format. | No now; no Skill change is inherently required. | No if the human-readable report remains; otherwise the stale item would be the report contract, not necessarily the Skill. |
| E / packaging, README, `AGENTS.md` commands | No now; current direct-source commands match the repository. | No now; yes if installation/execution becomes the supported path. | Possibly if an old command source is retained; exact Windows/WSL behavior is unverified. |
| E / Performance Skill | **No.** It delegates project commands to the maintained instructions and docs. | No now; the Skill can read revised command sources. | No if those sources are updated; it would not be the stale artifact. |

For every row, “No now” means no Project change has occurred in this stage.
The YES/POSSIBLY conditions describe only what could happen if the
hypothetical change were later approved and an old artifact were retained.

### Recommended Evolution

**Do not select A–E for implementation yet.** Candidate A has the clearest
current maintenance rationale, and Candidate B has the clearest potential
old-command diagnosis. Neither meets both gates: an independently sufficient
Project reason and one well-supported stale artifact in the current
Performance Skill. The Skill deliberately discovers benchmark and Test facts
from current Project sources, so these changes do not naturally make that
workflow stale. Leaving an out-of-date README, test map, or command merely to
force a Failure would reverse the required order of reasoning.

Candidate B is also premature at the observed project size: 11 tests across
6 modules do not yet establish that test-layout migration is a real
maintenance need. Candidate C has no recorded feature requirement and would
touch several sources. Candidate D has no current machine-readable consumer.
Candidate E has a plausible cross-platform rationale, but the learner's exact
Windows/WSL and shell environment is still open; changing packaging would
also risk making packaging the Demo's subject.

### Why This Change Exists Without AI

No Project change is approved or recommended from the current evidence. If a
future candidate is reconsidered, its reason must stand without AI: for
example, reduce actual benchmark maintenance, support a measured need to run
unit and integration checks independently, deliver a requested CLI feature,
serve a real automation consumer, or support a confirmed execution
environment. “It makes the Harness fail” is not a Project reason.

### Primary Stale Artifact

**None established.** The current `graypipe-performance` Skill contains no
benchmark filename, test-directory path, or fixed test-runner command. Under
the proposed changes, it can continue by reading current Project sources.
An old README, `AGENTS.md`, or test map could be stale if not maintained, but
that would be a different primary artifact than the previously planned stale
Skill. Changing that Story target requires an explicit decision; do not
silently substitute it.

### Expected Failure

None is predicted or claimed. No old command has been run against a changed
Project, and no Failure Trial was executed. Define an expected failure only
after a valid Project change and a specific, previously correct artifact are
selected.

### Cause Clarity

For A and D, the current Skill's generic discovery and reporting steps make
the procedure likely to survive the Project change. For B and E, stale
Project instructions could be isolated, but the Skill would still be current
and the product-side need is not established strongly enough. C risks several
simultaneous stale architecture, contract, and CLI facts. None currently
provides both a justified Project change and a single, clear stale Skill cause.

### Evaluation / Regression Potential

Each candidate has a possible evaluation path only after its Project need is
confirmed: run the new benchmark case through the unified runner; run focused
and full suites after a justified test migration; compare behavior and summary
fields for a requested CLI feature; validate machine-readable benchmark
records with a real consumer; or install and invoke the package in confirmed
target environments. These are candidate checks, not approved implementation
plans or observed results.

### Windows / Cross-platform Check

Candidates A–D can remain platform-neutral if implemented with the existing
Python standard library and local synthetic data. Candidate E directly
touches command portability, but exact Windows/WSL, IDE, and shell choices
remain open under DEC-0016/OQ-003. Do not claim Windows compatibility from the
current macOS-only evidence.

### Story Integrity

The STATE-04-PERF working system remains a success. No candidate is selected
to break it, no stale artifact or Failure is manufactured, and the
Harness-to-Loop Story remains intact. A later Project Evolution must first
have a Product-side justification independent of AI; only then should its
effect on previously correct Harness material be assessed.

### Next Readiness

**NEEDS DIFFERENT CANDIDATE.** Keep the accepted stale-Harness Story direction
as a planning constraint, but do not implement any A–E change until a
candidate has a concrete Project-side need and a traceable single stale
artifact. No Project Evolution, stale Harness, Failure Trial, Harness repair,
or Loop Engineering was started.

## STEP 07 — §§211–220 REAL LOOP EVIDENCE ASSESSMENT (HISTORICAL)

**Checked:** 2026-10-01. This is the original history and architecture
assessment. It does not change the Demo repository, create a stale artifact,
or run a new Trial. Its proposed role split is superseded by the user's
approval in §§221–230 below.

### Primary Demo Status

The primary Product Demo is strongly evidenced through `STATE-04-PERF`:
the actual repository has tagged Git states from `STATE-00` through
`STATE-04-PERF`; observed Trials cover exploration, a bounded Bug fix,
Project Context, Context separation, repeated performance work, and an
explicitly invoked repository Skill; the final statistics change was
re-investigated in the formal checkout and passed focused/full Tests,
correctness-guarded benchmarks, a CLI smoke, and diff review. The result is
**Working Harness Success**, bounded to the recorded CLI, host, workload, and
account evidence. It is not evidence of stale Harness failure or Loop
improvement.

### Same-Repository Loop Requirement

**OPTIONAL for the Loop evidence; KEEP the Primary Demo continuous.** The
Synthetic Image Processing CLI already carries the primary story through
Working Harness Success. A real Loop example exists in the training
production and Trial-evaluation history. Under `INV-DEMO-001` and
`INV-DEMO-003`, it may only be a supporting Meta Example; it must not replace
the shared Product story or be conflated with Demo-repository product
behavior.

### Candidate A — Demo Domain

- **Loop shape:** the initial telemetry proposal was reconsidered after the
  audience context identified many C++ Vision developers. The project domain
  changed to a synthetic image-processing CLI to improve familiarity while
  keeping Python and simple operations to reduce instructional overhead.
- **Strength:** a real, traceable training-design correction with a durable
  Decision record (DEC-0010 superseded by DEC-0011).
- **Weakness:** this is audience-led curriculum / repository design, not an
  Agent task failure or Harness correction. The later repository trials
  establish that the selected project is workable, but audience transfer was
  not measured with learners.
- **Classification:** Project-design feedback; incomplete as a standalone
  Loop Engineering Anchor.

### Candidate B — Development and Learner Environment

- **Loop shape:** the initial Demo plan recorded macOS / Codex Desktop;
  TRIAL-006 then exposed global Harness influence in the actual CLI
  environment, and the user clarified that the development host was not the
  primarily Windows-based learner target. DEC-0016 separated development,
  learner, and presentation environments and rejected a clean-room Trial as
  a prerequisite. Later CLI Trials recorded global influences.
- **Strength:** real correction of a planning assumption and a trial
  requirement; it also prevents host-specific claims from being mistaken for
  learner requirements.
- **Weakness:** the correction followed explicit user environment direction
  as well as Trial observations. Windows / WSL / IDE / shell behavior remains
  unvalidated, so the audience-environment part has not been fully
  re-evaluated.
- **Classification:** Training and evaluation-environment architecture
  correction; not a Product-code or repository-Skill failure. It overlaps
  Candidate C and should not be counted as an independent second failure.

### Candidate C — Global Harness Influence

- **Loop shape:** TRIAL-006 executed the performance task; global Skills,
  plugin-hook warnings, MCP startup events, and a model substitution were
  observed. Evaluation found that correctness and measurements remained
  useful, while Prompt-only causal attribution was not supported. The cause
  was an uncontrolled ambient Agent environment, not a defect in the Demo
  repository. DEC-0016 changed the evaluation rule: preserve the Trial as
  PARTIAL, record global influences, and do not require clean-room isolation.
  TRIAL-007's task Prompt explicitly required reporting observable global
  influence; its result reported a UserPromptSubmit `analyze` hook and two
  Skills, and stated no MCP use or warning. The retained stderr contains a
  Nimble `AuthRequired` MCP error, but the event trace shows no MCP task
  result. TRIAL-008 separately records global Skills, hook warnings, and MCP
  initialization issues without attributing an MCP result.
- **Strength:** the clearest Execution → Observation → Evaluation → Cause
  → System Change → Re-evaluation chain in the available history. Later Trial
  reports show the revised evidence boundary being applied, though the
  TRIAL-007 stderr/report discrepancy means its global-factor inventory was
  not complete.
- **Weakness:** the changed system is Trial/evaluation policy in the training
  production process. It did not repair the Demo Product, update
  `graypipe-performance`, or demonstrate the exact stale-Skill scenario.
  TRIAL-006 remains PARTIAL rather than a controlled attribution experiment.
- **Classification:** an authentic evaluation/workflow feedback Loop and
  Training Production Harness governance change; not a Demo Product Loop or
  direct repository-Skill maintenance event.

### Candidate D — Subagent / Memory

- **Loop shape:** the complexity and Trial-history audits found the current
  bounded repository tasks could be handled by one Agent, with no costly
  cross-task rediscovery absent from maintained sources. DEC-0018 deferred
  Subagents; the Memory audit found no qualifying durable fact. The later
  `STATE-04-PERF` task succeeded with the minimum effective system and no
  Subagent or Memory.
- **Strength:** authentic evidence that Evaluation may simplify a proposed
  architecture and that omission can be the correct system change.
- **Weakness:** this is overengineering prevention and a bounded adequacy
  check, not correction of a recurring failure. It does not establish that
  Subagents or Memory are generally unnecessary.
- **Classification:** Harness-architecture restraint supporting the Minimum
  Effective Harness insight; secondary evidence, not the main Loop case.

### Candidate E — Context Routing

- **Loop shape:** TRIAL-004 showed that a build-documentation task did not
  need image, pipeline, test-layout, or CLI-summary detail. STATE-03 then
  separated core instructions from topic documents and added routes. In
  TRIAL-005A/B, the image contract was read for the image task and not for the
  dependency task; both tasks read the broader architecture document, and
  optional test-context access varied. DEC-0014 therefore retained the
  Context structure while limiting its claim to scope, maintenance, and
  discovery rather than perfect automatic routing or measured performance.
- **Strength:** this is a real Context-system change and re-evaluation in the
  same Demo repository, with observable task-specific access differences.
- **Weakness:** no task failure or repeated costly friction was observed, and
  the route was not perfectly selective. The correction concerns claim
  boundaries, not a later Harness repair. It belongs earlier in the Story as
  Context Engineering and is not the strongest post-Harness ACT 4 Anchor.
- **Classification:** observed Context / Harness design iteration; useful
  supporting evidence for bounded system evaluation.

### Additional Candidate

No separate sixth candidate was established. The recorded history search
found the five candidates above; claims beyond their evidence remain
unconfirmed.

### Loop Criteria

**Legend:** YES = directly observed and recorded; PARTIAL = some stages or
their re-evaluation remain bounded; NO = not evidenced as a full Loop. The
candidate labels do not imply that every case was an Agent failure.

| Candidate | Execution | Observation | Evaluation | Cause | System Change | Re-evaluation | Loop fit |
|---|---|---|---|---|---|---|---|
| A — Domain | PARTIAL: design process, not a Trial | YES: audience familiarity requirement | PARTIAL: reasoned trade-off, no learner measure | YES: weaker familiarity / visual transfer was the stated concern | YES: DEC-0011 selected the image domain | PARTIAL: project feasibility was later exercised; audience transfer was not measured | Design feedback, incomplete |
| B — Environment | YES: TRIAL-006 ran in the configured CLI environment | YES: global influence and learner-host distinction | YES: attribution and target roles were reviewed | YES: host, learner, and presentation roles had been conflated | YES: DEC-0016 changed the environment/evaluation direction | PARTIAL: later Trials recorded influence; Windows target behavior remains open | Strong, overlaps C |
| C — Global Harness | YES: TRIAL-006 through later CLI Trials | YES: loaded Skills/hooks and startup events recorded | YES: evidence kept, attribution limited | YES: global environment was an uncontrolled factor | YES: DEC-0016 changed evidence and recording rules | PARTIAL: TRIAL-007/008 record global influence, but TRIAL-007's report conflicts with its MCP stderr | Strongest bounded loop |
| D — Subagent / Memory | YES: complexity audit and bounded task execution | YES: role and rediscovery need not observed | YES: mechanisms did not clear evidence gates | YES: tasks were small/connected; sources available | YES: DEC-0018 deferred additions; Memory not justified | YES, bounded: STATE-04-PERF succeeded without them | Architecture restraint, not failure repair |
| E — Context Routing | YES: TRIAL-004 and TRIAL-005A/B | YES: scoped access differed; broad reads and variability remained | YES: routing claim bounded | PARTIAL: scope fit is clear; no failure cause established | YES: STATE-03 reorganized Context sources | YES: TRIAL-005A/B evaluated the resulting structure | Strong same-repository iteration, earlier Story stage |

### Recommended Real Loop Case

**Candidate C — Global Harness Influence.** It has the clearest evidence
chain and a visible downstream process change, with an incomplete TRIAL-007
MCP inventory that must remain visible. Use Candidate E as a short,
same-repository supporting callback for Context iteration, and
Candidate D only if ACT 4 needs an example where evaluation argues against
adding complexity. Do not combine their events into one claimed incident.

### Is It Harness Engineering?

Candidate C is an **Evaluation / Workflow system change** in the training
production process. It addresses how Trial outcomes are interpreted and how
later Trial evidence is recorded. In the broad course sense it is a
Harness-governance feedback Loop, but it is not a change to the Demo's
repository-owned Skill, Project code, or learner-facing Agent environment.
Name the changed layer precisely; do not claim that `graypipe-performance`
became stale or was repaired.

### Proposed Teaching Structure

Keep three evidence layers separate:

1. **Primary Product Demo:** `STATE-00 → STATE-04-PERF` shows continuous
   repository evolution and the working Harness result.
2. **Real Meta Case:** use a short captured timeline of TRIAL-006 → DEC-0016
   → TRIAL-007 / TRIAL-008 to show the actual change in evaluation and
   reporting rules. Label it as training-production history and show the
   TRIAL-007 report/stderr discrepancy as an evidence limit, not as proven
   MCP influence on the task result.
3. **Stale-Harness concept:** if ACT 4 still needs a stale artifact before
   the Loop reveal, use an explicitly conceptual or controlled visual. Do
   not portray it as an observed Demo-repository change or as the cause of
   Candidate C.

This structure lets the class see a real system feedback Loop without
manufacturing the product evolution that the §§201–210 review could not
justify.

### Story Architecture Impact — Historical §221–230 Assessment

At this checkpoint, the evidence-role change was still pending the user's
follow-up direction. The subsequent §§231–240 work reconciled
`STORY_ARCHITECTURE.md`, `STORY_BEATS.md`, `TRANSITIONS.md`, Curriculum, and
Demo mappings to preserve Harness success before Loop Engineering, the
Product-versus-Harness Loop distinction, and developer responsibility. The
current selected paths are conceptual DEMO-04A and observed Meta DEMO-04B;
their evidence boundaries are recorded below and in the current architecture.

### Demo Architecture Impact — Historical §221–230 Assessment

The user's §§231–240 follow-up accepted this evidence split and reconciled
the detailed Demo mapping. The ACT 4 allocation remains 22 minutes:
DEMO-04A 4 minutes, Loop visual 2, DEMO-10 5, DEMO-11 3, and DEMO-04B 8.
The primary Product Demo remains at `STATE-04-PERF`; no Product State, stale
Skill, or Failure Trial was added. Candidate E remains an ACT 2 supporting
reference, not an ACT 4 Product Loop event. This readiness checkpoint
predates the 2026-10-02 user gate resolution. OQ-004's aggregate schedule
review is now resolved by DEC-0007; exact Q&A and Reflection/Transition
placement is STEP 08 work. Final surface and timing rehearsal remain governed
by OQ-003/OQ-005.

### Next Readiness

**Readiness: STEP 07 STORY / DEMO ALIGNMENT COMPLETE.** The user's §§231–240
instruction accepted and mapped the evidence roles in planning documents.
No Project Evolution, stale Skill, Failure Trial, Harness repair, conceptual
visual asset, or PPT was created. This checkpoint predates the 2026-10-02
user gate resolution: OQ-004's aggregate schedule review was resolved by
DEC-0007; OQ-003/OQ-005 remain open for target environment and
product-dependent rehearsal.

## STEP 07 — LOOP DEMO REDESIGN RESULT (§§221–230)

**Checked:** 2026-10-01. **Decision:** `DEC-0021` ACCEPTED by the user's
explicit direction in §221. This is a planning result. It does not create a
Slide, Speaker Note, visual asset, PPT, Demo Product State, stale artifact,
or Trial, and it does not modify `ai-dev-training-demo`.

### DEC-0021

**ACCEPTED.** ACT 4 uses two distinct evidence layers: a conceptual,
controlled stale-Harness case and an observed evaluation/workflow feedback
Meta Case. The main Product Story remains the verified `STATE-00` →
`STATE-04-PERF` history. It has no fabricated Product Evolution or stale
repository Skill.

### Evidence Types

| Type | Scope and example | Claim boundary |
|---|---|---|
| TYPE 1 — OBSERVED PRODUCT DEMO | Actual `ai-dev-training-demo` code, Trials, and Git States: repository exploration, `AGENTS.md`, Context routing, `graypipe-performance`, benchmark procedure, and the measured statistics optimization through `STATE-04-PERF`. | Shows a bounded, verified Product Demo and Working Harness Success. It does not show a stale Skill, post-Harness Product failure, or a Product Improvement Loop. |
| TYPE 2 — OBSERVED META CASE | Actual training / Demo production history: `TRIAL-006` → `DEC-0016` → `TRIAL-007` → `TRIAL-008`. | Shows a bounded change to Trial evaluation and global-influence reporting. It is secondary, not a Demo Product or repository-owned Skill change. |
| TYPE 3 — CONCEPTUAL CONTROLLED CASE | Constructed stale-Harness example: a justified Project test-command/layout change updates the canonical source while a formerly correct reusable workflow remains old. | A principle illustration only. It is not a historical `ai-dev-training-demo` change, a recorded Trial, or a claim that this failure occurred. Label it in the visual and later Speaker Notes. |

Never merge the evidence types in one timeline without persistent labels.
Use the same type labels in Slide captions and Speaker Notes so the audience
can distinguish observed facts from the constructed case.

### DEMO-04A

- **Role:** short conceptual problem setup for Harness staleness.
- **Scenario:** `BEFORE`, the canonical Project test entry and the reusable
  workflow both use `OLD TEST ENTRY`. A separately justified Project need
  changes its test organization; the canonical Project source then declares
  `NEW TEST ENTRY`, while the reusable workflow retains `OLD TEST ENTRY`.
  No specific Project need has been selected for the visual, so do not invent
  one. Show the stale mismatch only. Whether the old entry fails, finds no
  tests, or checks the wrong scope has not been established; do not depict an
  execution or result. Keep the labels schematic and the entire case
  CONCEPTUAL.
- **Problem and cause:** a previously correct Harness artifact no longer
  points at the current Project source. The Agent has not become “dumber”; a
  system layer is stale. This is an intentionally constructed example, not
  an observed Demo incident.
- **Correct-layer comparison:** (A) a Task Prompt patch can unblock this
  task while leaving the reusable old workflow; (B) adding a duplicate global
  `AGENTS.md` rule can create overlap or conflict; (C) update the source
  workflow that contains the stale procedure and remove a duplicate old
  instruction if needed. Choose C only because the scenario establishes
  that this workflow is the cause.
- **Evaluation and regression:** in DEMO-04A, keep the case conceptual and
  hand off to DEMO-10's four-row evaluation set. EVAL-01/02 refer to separate
  observed Bug and Performance task chains; they are not rerun to evaluate
  the conceptual Workflow change. EVAL-03 documentation-only and EVAL-04
  small-refactor are designed adjacent-task checks with no Trial outcomes.
  Make clear that no new execution or PASS/FAIL result is shown.
- **Mode / time:** VISUAL or CAPTURED CONTROLLED EXAMPLE; no LIVE execution.
  Estimated 4 minutes.
- **Claim boundary:** visibly label all before/after states as constructed.
  Do not call them `STATE-07`–`STATE-11`, a real Project migration, actual
  Trial evidence, or a real Agent failure.

### DEMO-04B

`DEMO-04B` is a captured, observed Meta Case. It follows the conceptual case
and the Loop explanation; it must not be presented as the cause or repair of
that constructed stale workflow.

| Phase | Actual history | Evidence boundary |
|---|---|---|
| Execution / expected observation | `TRIAL-006` ran a long performance-investigation Prompt on `resize_nearest` in Codex CLI. | Actual Trial; its correctness, code, and benchmark observations remain scoped to the recorded run. |
| Observation | Four global Skills were loaded: `oh-my-codex:analyze`, `oh-my-codex:performance-goal`, `superpowers:test-driven-development`, and `superpowers:verification-before-completion`. Hook configuration warnings and MCP startup/authentication errors were logged. | Startup warnings and Skills are observed; do not infer that a hook ran or that an MCP result contributed. The event trace contains no MCP tool call. A model rejection/substitution is another environment factor. |
| Evaluation | Local correctness and benchmark records remained useful, but the full workflow could not be attributed to the Task Prompt alone. | Keep `TRIAL-006` PARTIAL for Prompt-only causality; preserve its bounded measurements and results. |
| Cause | The evaluation treated the repository and task as the main controlled target without representing all ambient global Harness influences in its attribution model. | This is a limit in Trial design/reporting, not a defect or stale artifact in the Demo Product. |
| System change | `DEC-0016` separated development-host and learner-environment assumptions, retained `TRIAL-006` as PARTIAL, required later CLI Trials to record observed global influence, and rejected clean-room isolation as a prerequisite. | This is an accepted change in Training Production environment/evaluation governance. It did not update Product code or `graypipe-performance`. |
| Re-evaluation | `TRIAL-007` required global-influence reporting and its report listed a hook and two Skills; `TRIAL-008` separately recorded explicit repository Skill discovery / invocation and global-influence observations. | The revised reporting was applied partially. `TRIAL-007` says no MCP warning, but retained stderr records Nimble `AuthRequired`; no MCP task result is evidenced. No before/after Trial-quality metric was measured. |

The Trial-006 audit also records bounded Skill effects: `performance-goal`
created ignored evaluator / ledger state and a stricter threshold;
`verification-before-completion` led to an additional equivalence check;
the TDD Skill announced a test-first cycle, but the Agent edited production
code before focused tests and added no regression test. `analyze`'s direct
effect on the implementation choice is not established. These observations
show possible global influence without assigning every result to a Skill.

- **Mode / time:** CAPTURED timeline plus a compact evidence audit; no LIVE
  execution. Estimated 8 minutes.
- **Claim boundary:** call this an observed Training Production
  Evaluation / Workflow Loop and a supporting Meta Example. Do not claim a
  Demo Product change, Skill repair, MCP result use, complete environment
  inventory, or measured quality improvement.

### Evidence Audit

| Claim | Status | Supported wording / limit |
|---|---|---|
| `TRIAL-006` loaded Skills | CONFIRMED | Four names are listed in the environment audit: `analyze`, `performance-goal`, `test-driven-development`, and `verification-before-completion` under the recorded namespaces. Effects are bounded to the CLI run. |
| `TRIAL-006` hook warnings | CONFIRMED warning; hook effect NOT OBSERVED | Startup logs show configuration/trust warnings. The recorded trust choice indicates hooks would not run; do not claim an executed hook changed the Trial. |
| `TRIAL-006` MCP | CONFIRMED startup failures; result use NOT EVIDENCED | `t` handshake failure and Nimble authentication-required startup were logged; the event log contains no MCP tool call/result. Never say an MCP answer informed the task. |
| `TRIAL-006` Prompt-only attribution | PARTIAL | Keep local correctness and measurement evidence; do not infer the outcome was caused by the Prompt alone. |
| `DEC-0016` system change | CONFIRMED | Accepted Decision changed environment framing and how later CLI Trial influences should be recorded; clean-room isolation was not made a prerequisite. |
| `TRIAL-007` revised reporting | PARTIAL | Its Prompt asked for influence reporting and the result listed a `UserPromptSubmit` `analyze` hook plus two Skills. The current retained summary does not establish that the inventory was complete. |
| `TRIAL-007` MCP record | PARTIAL / UNKNOWN for task-result use | The report says no MCP warning/use, while `/private/tmp/TRIAL-007-STDERR.txt` records Nimble `AuthRequired`. No MCP task result appears in the available event record; whether an MCP output affected the task is not established. |
| `TRIAL-008` repository Skill | CONFIRMED for this CLI run | `/skills` exposed `graypipe-performance`; the task explicitly invoked `$graypipe-performance`; the trace contained its instruction body. This is not a Desktop-wide claim. |
| `TRIAL-008` global-influence record | PARTIAL | The recorded audit lists global instructions / Skills, hook warnings, and MCP initialization issues without attributing an MCP task result. It does not prove complete ambient capture or better Trial quality. |
| Candidate C improved production / Trial quality | UNKNOWN / NOT MEASURED | The reporting/evaluation rule changed and later records applied it partially; no objective before/after quality metric is recorded. |

### Loop Definition

**Operational Definition candidate:** “개발자는 Agent 실행 결과와 실패·마찰을
관찰하고, 원인과 반복 가능성을 근거에 맞게 판단한 뒤, 적절한 Product 또는
작업 System layer를 개선하고, 같은 과제와 대표 과제를 다시 평가해 다음
실행에 반영한다.”

This retains the STEP 03 meaning: evidence-informed feedback, cause and
repeatability judgment, an appropriate system change, and re-evaluation.
The developer owns the judgment. Automation may help operate the feedback
process, but automation, self-learning, autonomous Agent growth, and
infinite repetition are not the definition. The Problem-specific Prompt
patch in DEMO-04A is an immediate workaround; the durable improvement targets
the reusable workflow because the controlled cause is located there. This
candidate aligns with the Loop entry in `references/TERMINOLOGY.md` (CLM-0021)
and `plan/MASTER_PLAN.md` §§5.9 and 14; final teaching wording remains under
OQ-011 and is not presented as an official or universal definition.

### Story Architecture Changes

| Existing Story material | Approved evidence role change | Content retained |
|---|---|---|
| BEAT-037 — Working Harness success | Keep TYPE 1 as the actual Product endpoint at `STATE-04-PERF`. | The success and its bounded verification remain before any staleness problem. |
| BEAT-038–049 — Project change, stale workflow, observation, cause, layer, rerun, evaluation, regression | Use TYPE 3 for the designed stale case and its controlled outcomes; label it conceptual at every transition. | Preserve Project change, stale artifact, wrong-layer alternatives, cause evidence, scoped Harness repair, same-task rerun, EVAL tasks, and regression. None is described as actual Demo history. |
| BEAT-050–057 — Bloat risk, delayed Loop reveal, Product/Harness Loop distinction, maintenance, Minimum Effective Harness | Keep their order and teaching purpose; evaluate the system response before generalizing from it. | No new feature checklist, automatic loop, or guaranteed-improvement claim. |
| BEAT-058–059 — Meta Example entry and bounded payoff | Upgrade the prior conditional candidate to TYPE 2, using Candidate C as a supporting case after the Loop has been explained. | Keep the claim limits and core software Product Demo primary. |
| TRANS-010–012 — Harness staleness → Loop → AI-Native | Keep the problem-first transition. Add explicit evidence labels and keep the conceptual case separate from Candidate C's actual production history. | No beat is deleted; the evidence role changes, not the learning sequence. |

`plan/STORY_ARCHITECTURE.md`, `STORY_BEATS.md`, and `TRANSITIONS.md` have
not yet been edited in this result. Their next update should implement these
role labels without removing or compressing the established beats.

### Demo Architecture Changes

Replace the former `DEMO-04A/B` single-repository `STATE-07 → STATE-11`
failure/repair proposal with:

1. `DEMO-04A` — conceptual controlled visual/capture, BEAT-038–046; no
   `ai-dev-training-demo` State, Trial, stale Skill, or Live run.
2. `DEMO-10` — a five-minute visual / captured conceptual evaluation matrix,
   BEAT-047–049; include all four evaluation task types. Keep EVAL-01/02's
   prior observed Product evidence in a separate solid frame if referenced;
   EVAL-03/04 remain designed cases without Trial outcomes. Do not imply a
   new execution or evaluation result.
3. Existing Loop model / visual — BEAT-050–053; preserve Product Loop vs
   Harness Improvement Loop and the manual / assisted / automated distinction.
4. `DEMO-11` — captured layer/minimality and upkeep-cost synthesis,
   BEAT-054–057; no new product state.
5. `DEMO-04B` — captured Candidate C Meta Case, BEAT-058–059; actual
   training-production evidence, supporting only.

The evaluation labels now follow this step: EVAL-03 is documentation-only
and EVAL-04 is the small refactor. `DEMO_REPOSITORY_SPEC.md` and
`DEMO_RUNBOOK_SPEC.md` have been aligned; no corresponding Product State or
code was created.

### STEP 08 — S66 / DEMO-10 visual scope reconciliation

S66 keeps EVAL-01 through EVAL-04 in the approved four-row conceptual
evaluation set. EVAL-01 and EVAL-02 have prior OBSERVED_PRODUCT evidence in
their own State chains; that evidence is a reference, not a rerun or outcome
of DEMO-10 or the conceptual DEMO-04A case. EVAL-03 and EVAL-04 are designed
adjacent-task checks with no completed Trial, Product State, or PASS/FAIL
result. The five-minute DEMO-10 slot is a static visual explanation, not an
execution of all four tasks. Keep any historical Product evidence in a
separate solid frame from the conceptual matrix.

### Time Budget

The design remains inside ACT 4's existing 22-minute Demo allocation:

| Slot | Minutes |
|---|---:|
| DEMO-04A conceptual case | 4 |
| Loop model / visual | 2 |
| DEMO-10 evaluation and regression | 5 |
| DEMO-11 layer and minimality synthesis | 3 |
| DEMO-04B observed Meta Case | 8 |
| **Total** | **22** |

This is an internal reallocation, not additional instruction time. All five
slots are planning estimates and require rehearsal; DEMO-04A and DEMO-04B
remain visual/captured so run variance does not consume the ACT budget.

### Teaching Payoff

- **Prompt:** a task-specific correction can unblock one execution without
  updating a reusable procedure.
- **Context:** current Project sources and task-relevant instructions must
  be distinguished from an old workflow artifact.
- **Harness:** reusable instructions and workflows can help repeated work,
  but they must be maintained at the layer supported by the cause.
- **Loop:** observe evidence, assess cause and recurrence, improve the
  appropriate system, rerun representative tasks, and check regression.

The Product Demo provides concrete, observed progress through a working
Harness. The conceptual case makes future staleness legible; the Meta Case
shows that evaluation and reporting rules can themselves change in response
to evidence. Together they recover Prompt → Context → Harness → Loop without
making any of the three evidence types look interchangeable.

### Next Readiness

**STEP 07 STORY / DEMO ALIGNMENT COMPLETE.** DEC-0021 is accepted; the
evidence types, 04A/04B roles, beat mapping, EVAL task labels, claim audit,
and 22-minute allocation are mapped across the current Story and Demo
records. No Slides, visual assets, PPT, new stale Harness State, Trial, or
Demo repository change was made in this step.

## STEP 07 USER GATE RESOLUTION — 2026-10-02

DEC-0007 is ACCEPTED with the approved 360-minute mode totals: Lecture 130,
Demo 73, Case 83, Reflection 20, Transition 22, and Q&A/Discussion 32.
DEC-0022 establishes a separate Final Content Freeze Gate. STEP 08 Slide
Architecture and Slide Map are READY; OQ-003, OQ-005, OQ-006, OQ-011, and
OQ-014 do not block the map. Label affected claims where needed, and resolve
those questions before Final Content Freeze. STEP 08 owns exact Q&A,
Reflection, and Transition placement. No slide-level timing, PPT, final
design, complete Speaker Notes, image, or Demo video is created by this gate
resolution.
