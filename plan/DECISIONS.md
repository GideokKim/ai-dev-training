# Decision Log

## Purpose

This file records new design choices made while implementing the training
plan, together with the context and reasoning needed to recover why each
choice was made. It does not restate or replace plan/MASTER_PLAN.md and must
not be used to silently change the plan.

Read plan/MASTER_PLAN.md and plan/INVARIANTS.md before adding a decision.
Downstream artifacts follow approved decisions only when they do not conflict
with the higher-level Source of Truth.

## Decision Policy

### Status

- PROPOSED: Waiting for user approval.
- ACCEPTED: Approved by the user or already established by a higher-level
  Source of Truth.
- REJECTED: Considered and not adopted; preserve the reason.
- SUPERSEDED: Replaced by a later decision; link the replacing Decision ID.
- DEPRECATED: No longer used, retained for history.

Do not delete a decision to hide its history. When its status becomes
SUPERSEDED, identify the replacement Decision ID. Status changes do not free
or reuse an ID.

### ID rules

Use monotonically increasing IDs in the form DEC-0001, DEC-0002, and so on.
Never reuse an ID, including one belonging to a REJECTED, SUPERSEDED, or
DEPRECATED decision. Keep the record detailed enough to recover the design
intent after working context is gone.

Use plan/DECISION_TEMPLATE.md for each record. A decision that would change
MASTER_PLAN.md or a HARD invariant remains PROPOSED until the user explicitly
approves the change. Include alternatives, trade-offs, related invariant IDs,
affected artifacts, and evidence where applicable.

Do not silently edit an ACCEPTED decision. If its direction changes, create a
new Decision, mark the earlier record SUPERSEDED, and connect both records
using Supersedes and Superseded By.

### Decision and Invariant roles

An Invariant records what must be protected. A Decision records why a
particular direction was chosen. When the same subject appears in both, add
the decision context and rationale here rather than copying the invariant
wording as a second rule.

For a major downstream artifact, select only its relevant Invariant IDs.
Related Invariants may be recorded near the top or in artifact metadata when
that helps review; avoid ID clutter that harms readability.

### Traceability

Use stable IDs to support this future chain:

User Intent → MASTER_PLAN → INVARIANTS → DECISIONS → CURRICULUM →
STORYLINE → DEMO → SLIDE MAP → SLIDE CONTENT → PPT

The IDs and references are the current foundation. Do not implement a
complete Traceability System at this stage. Where practical, connect a major
Demo or Slide to its upstream reason and connect core MASTER_PLAN requirements
to their downstream implementation.

### New requirements and conflicts

When a new user requirement arrives, check MASTER_PLAN.md and INVARIANTS.md
first, then classify it:

- Compatible: reflect it in the relevant Decision or downstream artifact.
- Extension: analyze its impact and record the material choice in a Decision.
- Conflict: identify the existing plan or invariant it would change. Do not
  silently edit it; explain the impact and request approval before updating a
  governing Source of Truth.

A clear, latest user instruction may supersede an earlier plan. Preserve the
change history when it does. If the instruction's intent or approval is
unclear, stop the conflicting change and ask the user.

### Research conflicts

Do not bend Research to fit the Story. When evidence conflicts with the
current plan, document:

- FACT: What the source or observation confirms.
- CONFLICT: What in the current MASTER_PLAN, Invariant, or Story disagrees.
- IMPACT: Which Demo, Slide, or narrative elements are affected.
- OPTIONS: Ways to teach the confirmed facts while preserving as much of the
  Story as possible.
- PROPOSAL: The change, if one is needed.

Research Integrity takes priority over presentation convenience. Changes to
HARD Invariants require user approval.

### Evidence labels

Use a concise evidence label where it helps trace a decision:

- USER: An explicit user instruction.
- MASTER_PLAN: An existing decision in plan/MASTER_PLAN.md.
- RESEARCH: An official document, paper, or other cited research.
- OBSERVATION: A problem observed during actual project work.
- DEMO: An observed Demo result.
- EVALUATION: A review or evaluation result.
- FAILURE: An actual failure. Do not invent one for an example.

Small, self-evident implementation details do not need a Decision Record.

### Decision Log Scope

Keep Decisions, Open Questions, and Active Assumptions in this one file. Do
not split records by Status at this stage. Review the structure only if actual
management problems arise. If a real restructuring event occurs, assess
whether its documented history is useful as a supporting Meta Example; do not
assume that it belongs in the training.

### Current Governance Scope

The current project setup provides a Source-of-Truth hierarchy, Guardrails,
Decision History, and Context Routing. This Governance System is not a
completed Harness. Skills, Subagents, Memory, a project-specific or automated
Evaluation system, Automated Verification, and a Feedback Loop have not been
established for this repository. Consider an additional mechanism only after
actual Friction is observed and recorded; the trigger alone does not authorize
implementation.

### Future Harness Triggers

Use these signals to decide whether a later Harness improvement should be
investigated. They are triggers for evaluation, not instructions to build a
component in advance.

| Observed Trigger | Possible Response to Evaluate |
| --- | --- |
| The same Review Prompt is repeatedly rewritten. | Consider whether a Review Skill would address the repeated work. |
| Research and Slide fact-checking repeatedly diverge. | Review the Research and fact-check workflow. |
| One Agent handles Curriculum, Demo, Slide, and Research work with excessive Context. | Consider role-specific Subagents and their coordination cost. |
| New sessions repeatedly rediscover the same project facts. | Evaluate whether durable Context or Memory is warranted. |
| The same kind of planning Drift recurs. | Review whether an Evaluation or Review Loop would catch it earlier. |

Before implementing a response, record the actual Friction, recurrence, cause,
expected benefit, and maintenance or coordination cost. Do not invent an
observation to justify a component.

### Meta-History Capture

Preserve only events that actually occur and may help explain the training's
Engineering Story. Useful event types include:

- The initial size and role of AGENTS.md.
- A point when project Context grew or became difficult to route.
- Repeated Prompt work that was actually observed.
- The observed reason a Skill, Subagent, or Memory became necessary, if one
  does.
- Stale instructions or a Review Failure that actually occurred.
- A Harness improvement and evidence of its before-and-after effects.
- The observed event that led to a Loop improvement.

Record actual choices and their evidence in this Decision Log. If a separate
Engineering Log becomes necessary, decide then; do not create one in advance.
Do not fabricate failures, history, or improvements for a Meta Example.

### Research Version Awareness

Keep Durable Engineering Insights distinct from Current Product
Implementation. For product behavior that can change, future Research records
may capture Checked Date, Source, Product / Feature, Observed Behavior, and
Confidence where useful. Do not add a date to every Slide. Define a formal
Research schema during STEP 03 if needed; do not create one in STEP 02.

## Open Questions

Open Questions identify choices that still need research, design, or user
input. They are not Decisions. Keep them out of ACCEPTED status until there
is evidence and a deliberate decision.

Priority meanings:

- BLOCKING: Resolve before the specific work named in Blocks. A blocker does
  not stop independent work or an entire STEP unless that STEP itself is
  named.
- NEAR-TERM: Resolve in the next relevant planning or design stage.
- LATER: Defer until the named downstream stage or artifact is ready.
- OPTIONAL: Resolve only if the stated trigger occurs or the choice becomes
  necessary.

Each Open Question records Depends On and Blocks so that unrelated work can
continue while dependencies remain open. A priority is not permission to
resolve a question by guessing.

### OQ-001 — Select and place the software Demo repository

Current Status: RESOLVED FOR THE CURRENT DEMO PATH by DEC-0011/DEC-0012 and
the recorded `STATE-00` through `STATE-04-PERF` evidence (2026-10-02).
Priority: NEAR-TERM
Priority Rationale: Repository selection, sibling location, and the current
Product State path are recorded; any future Product change needs its own
evidence and authorization.
Depends On: None
Blocks: None for the current Product path. Future Product-state proposals
remain subject to the project Decision and Change Control rules.

Why it matters:
The same repository is preferred across the Story. Its source, language,
domain, separate-repository placement, and local sibling path are selected.
STATE-00 now establishes an initial working baseline; later implementation
choices must follow observed results.

When to decide:
Repository direction and location were resolved by DEC-0011 and DEC-0012.
The current Product path through `STATE-04-PERF` is recorded in
`plan/DEMO_REPOSITORY_SPEC.md` and `plan/DEMO_MATRIX.md`.

Other Dependencies:
Review audience accessibility, repository suitability, and any usage or data
permissions. After selection, assess feasibility for the grouped Anchor and
supporting Story Beat candidates rather than assuming every Beat needs a Demo.

Current direction:
RESOLVED by DEC-0011 and DEC-0012: a separate, purpose-built
`ai-dev-training-demo` repository at `../ai-dev-training-demo` relative to
`ai-dev-training`, currently resolving to
`/Users/noah/workspace/education/ai-dev-training-demo`; Python; and a
synthetic grayscale image-processing CLI. STATE-00 implements an initial
`graypipe` package with ASCII PGM input/output; `STATE-00-FIXED` records its
verified crop-boundary correction. Later state changes and choices remain
subject to actual evidence. The earlier telemetry proposal in DEC-0010 is
superseded and was not selected.

Do not assume:
Do not infer later-state changes, dependencies, or results before they are
implemented and checked. Do not add C++ Demo code; C++ Vision transfer is a
teaching bridge for future Curriculum/Slides.

### OQ-002 — Choose real cases and confirm permission to use them

Priority: NEAR-TERM
Priority Rationale: Resolve before selecting or showing actual cases, especially internal cases.
Depends On: OQ-001; OQ-014 if internal or customer data is involved.
Blocks: Use of any case whose source, permission, or sensitive-data status is unknown.

Why it matters:
Examples must be understandable and safe to show to the training audience.

When to decide:
When selecting the Demo repository and preparing its examples.

Other Dependencies:
Identify candidate cases and check permission and sensitive-data constraints.

Current candidates:
None recorded.

Do not assume:
Do not assume an internal repository or incident can be shown.

### OQ-003 — Define the live Demo environment and fallbacks

Priority: NEAR-TERM
Priority Rationale: The current development host and portability direction are set; confirm the learner setup and final presentation surface before product-dependent rehearsal.
Depends On: None; confirm the intended account, product surface, and access when planning the Demo.
Blocks: Live Demo scope and rehearsal. It does not block STEP 08 Slide
Architecture or Slide Map. Affected claims may remain PROVISIONAL or
REQUIRES PRODUCT CHECK until Final Content Freeze.

Why it matters:
Live Demos depend on product access, account permissions, screen flow,
network availability, and reliable fallback material.

When to decide:
The host/portability direction was updated by DEC-0016 on 2026-09-29.
Confirm exact learner setup and final presentation interface before Final
Demo Rehearsal, with current product/account checks under OQ-005.

Other Dependencies:
Verify the then-current Codex environment and required account access.
For selected Beat candidates, validate the user's HYBRID Anchor strategy and
prepared captures/fallbacks in the selected environment. Supporting Demos
may be RECORDED, CAPTURED, or VISUAL.

Current direction:
DEC-0011's macOS/Codex Desktop environment clause is clarified by DEC-0016:
macOS is the current development and partial automated-validation host, not
the learner target. The audience is primarily Windows-based. The proportions
of WSL versus native Windows, IDE, shell, and exact Codex interface remain
open; do not infer them. Keep the Demo OS-independent where practical, using
Python, standard-library-first code, local synthetic data, and no external
service. The final presentation environment remains a later rehearsal
question. Anchor Demos retain the HYBRID strategy with prepared captures,
expected results, and fallback paths; supporting Demos may be RECORDED,
CAPTURED, or VISUAL. The ACT 4 Harness Improvement Loop is not Live-only.
Current account/surface behavior, permissions, and product-feature support
remain unverified under OQ-005 and must be checked before relying on them.

Do not assume:
Do not assume Windows-specific environment details, current product-feature
availability, classroom network conditions, or successful Live behavior.

### OQ-004 — Review the detailed Curriculum and time allocation

Current Status: PARTIALLY RESOLVED. The user approved the aggregate time
allocation on 2026-10-02; exact Q&A placement and row-level mode reconciliation
are assigned to STEP 08.
Priority: NEAR-TERM
Priority Rationale: The aggregate schedule is accepted; STEP 08 must complete
the detailed placement and reconciliation.
Depends On: OQ-003 for target Demo duration; OQ-011 for final term-dependent wording.
Blocks: None for Slide Architecture or Slide Map. Actual Demo runtime remains
an implementation/rehearsal check under OQ-003/OQ-005.

Why it matters:
The aggregate schedule is accepted in DEC-0007. Demo durations remain
estimates rather than rehearsed runtime. The 32-minute Q&A/Discussion pool
and the final Reflection/Transition placement will be reconciled in STEP 08.

When to decide:
The aggregate allocation was accepted on 2026-10-02. Reconcile the detailed
Q&A, Reflection, and Transition placement during STEP 08.

Other Dependencies:
Use the accepted Story and Demo evidence, and preserve the 360-minute net
total while reviewing pacing.

Current candidates:
The accepted aggregate time and mode totals in CURRICULUM.md and DEC-0007;
section-level Q&A placement remains a STEP 08 design task.

Do not assume:
Do not change the 360-minute net total or remove a core Story connection to
fit a draft schedule. Do not treat estimated Demo minutes as rehearsed runtime.

### OQ-005 — Verify current ChatGPT and Codex product facts

Priority: BLOCKING
Priority Rationale: Resolve before using any current product behavior as a fact or relying on it in a product-specific Demo.
Depends On: OQ-003 for the target product surface and training environment.
Blocks: Finalizing claims and Demos that depend on unverified current
ChatGPT/Codex behavior, and Final Content Freeze for those claims. Does not
block STEP 08 Slide Map; affected claims may be PROVISIONAL or REQUIRES
PRODUCT CHECK.

Why it matters:
Product features, interfaces, and support may change over time or vary by
environment.

When to decide:
During Research and again close to preparing the relevant Demo or material.

Other Dependencies:
Current official OpenAI sources and the intended training environment.

Current candidates:
- `references/product/CAPABILITY_MATRIX.md` and the linked official Source IDs in
  `references/sources/SOURCES.md` document current product support by surface.
  This does not establish feature availability in the target training account or
  workspace; OQ-003/OQ-005 remain open.

Do not assume:
Do not assume current support for Desktop/App, CLI, IDE, AGENTS.md, Skills,
Subagents, Memory, Worktree, Cloud, or other product behavior.

### OQ-006 — Establish research support for context claims

Priority: BLOCKING
Priority Rationale: Resolve before presenting a research-dependent claim as a teaching fact.
Depends On: None; use the original paper or a reliable technical source.
Blocks: Finalizing affected research-backed claims as teaching facts and
Final Content Freeze for those claims. Does not block STEP 08 Slide Map;
affected claims may be PROVISIONAL.

Why it matters:
Lost in the Middle and other Context claims need evidence and appropriate
limits.

When to decide:
During Research, before using these claims as teaching facts.

Other Dependencies:
Find the original paper or a reliable technical source and review its scope.

Current candidates:
- `SRC-0201`–`SRC-0204` and the linked records in
  `references/research/lost-in-the-middle.md` and
  `references/research/long-context.md` provide scoped historical and repository
  QA evidence. They do not establish current Codex behavior; preserve the study
  conditions and decide final teaching wording before use.

Do not assume:
Do not turn a bounded research result into an absolute rule about every model
or task.

Current Status: RESOLVED FOR THE LIMITED SLIDE 29 CLAIM SCOPE by DEC-0023.
The approved wording remains bounded to the cited studies and does not assert
current Codex behavior. Broader or stronger claims require new research review.

### OQ-007 — Set project-specific verification examples

Current Status: RESOLVED FOR THE CURRENT DEMO REPOSITORY SCOPE (2026-10-02).
The recorded States and TRIAL-001–008 provide project-specific Build, Test,
Benchmark, Review, and completion evidence. Product-surface and live rehearsal
claims remain separately open under OQ-003/OQ-005.
Priority: NEAR-TERM
Priority Rationale: This question was resolved after later States and Trials
recorded the project-specific workflow.
Depends On: OQ-001.
Blocks: None for the current repository workflow/evidence. Product-surface
claims and classroom rehearsal remain governed by OQ-003/OQ-005.

Why it matters:
Build, Test, Benchmark, Review, and completion criteria depend on the chosen
software project and task.

When to decide:
Resolved during STEP 07 final audit after the current States and Trials were
reviewed.

Other Dependencies:
Repository commands, expected results, and a repeatable Demo state. Map the
checks to the selected Story Beats after choosing the repository; do not infer
commands or passing results from the Story draft.

Current evidence:
- STATE-00 and STATE-00-FIXED record the initial Build/Test commands, the
  known crop-boundary failure, its focused correction, and the passing
  verification result.
- STATE-04 and STATE-04-PERF record the repository Skill and bounded Product
  optimization, including correctness guards, benchmarks, CLI smoke, and
  review evidence.
- TRIAL-001–008 record bounded CLI exploration, prompt, context, workflow,
  performance, and verification observations. Their claim limits remain in
  `plan/DEMO_MATRIX.md`.
- Windows learner-shell behavior, target account/surface behavior, and live
  rehearsal remain open under OQ-003/OQ-005; this resolution does not imply
  cross-platform or Desktop validation.

Do not assume:
Do not invent test commands, performance goals, or successful results.

### OQ-008 — Design Skills, Subagents, Memory, and Harness examples

Priority: NEAR-TERM
Priority Rationale: TRIAL-008 observed explicit repository Skill discovery/loading and procedure reuse on Codex CLI 0.154.0; verify the intended teaching surface before any Desktop-specific claim. Other mechanisms remain conditional.
Depends On: OQ-001, OQ-005, and OQ-007 where those decisions apply.
Blocks: Desktop-specific Skill behavior claims and any future
product-specific Subagent/Memory Demo change; the current STATE-04 deferral
does not block the conceptual Story.

Why it matters:
These structures should solve observed or demonstrable problems rather than
be installed as a feature checklist.

When to decide:
The repository-owned Skill decision is recorded in DEC-0017. CLI
discovery/loading and explicit reuse were observed in TRIAL-008; check the
intended surface before a Desktop-specific claim. DEC-0018 resolves the
current STATE-04 Subagent question and defers DEMO-07. The §§181–190 Trial
audit finds no current Memory candidate; revisit either mechanism only when
a later real task provides the missing evidence.

Other Dependencies:
The selected project, actual repeated workflow, role boundaries, and
verification needs.

Current candidates:
- Repository-owned Codex Skill at
  `ai-dev-training-demo/.agents/skills/graypipe-performance/SKILL.md`, selected
  by DEC-0017. TRIAL-008 confirmed explicit discovery/loading and reuse on
  Codex CLI 0.154.0; Desktop behavior remains open.
- Subagent: not justified at STATE-04 by DEC-0018; `DEMO-07` has no primary or
  supporting Live path and is deferred pending actual role/context complexity.
- Memory: not justified yet by the §§181–190 audit in `plan/DEMO_MATRIX.md`;
  keep the distinction conceptual/visual and do not select a product mechanism
  or create a repository Memory artifact without a qualifying rediscovery
  candidate.

Do not assume:
Do not assume an implementation structure, number of Subagents, Memory
mechanism, or universal Harness component list.

### OQ-009 — Define Loop evaluation criteria

Priority: LATER
Priority Rationale: Resolve when Loop Demo design can use actual observations and outcomes.
Depends On: OQ-001 and OQ-007, plus observed recurrence and evidence.
Blocks: Claims that a Loop improvement worked and the project-specific Loop evaluation Demo.

Why it matters:
Loop Engineering needs a reasoned way to distinguish a repeated failure worth
improving from a one-off event.

When to decide:
During Loop Engineering research and Demo design.

Other Dependencies:
Observed failures, their causes, recurrence, and a way to evaluate whether an
improvement helped. During Demo Architecture, identify a fair, reproducible
Project change that can make an existing workflow stale, if the selected
repository supports one; otherwise keep the case labeled as controlled or
visual and do not invent an observed recurrence.

Current candidates:
None recorded.

Do not assume:
Do not invent a repetition threshold or claim an improvement worked without
evidence.

### OQ-010 — Define Slide Map; defer visual and deck details

Priority: NEAR-TERM
Priority Rationale: STEP 07 resolved the planning gate and authorized STEP 08
Slide Architecture and Slide Map work.
Depends On: OQ-004's aggregate allocation is accepted; its detailed placement
is part of STEP 08. Relevant content questions may be carried as claim
statuses under DEC-0022.
Blocks: None for STEP 08 Slide Architecture or Slide Map. Final visual design
and PPT remain outside this scope; PPT still requires separate instruction.

Why it matters:
Slide count, layout, visual style, live/recorded transitions, and final deck
format depend on the completed Story and Demo plan.

When to decide:
During STEP 08 Slide Architecture and Slide Map work. Keep final visual design
and deck production for a separate instruction.

Other Dependencies:
Review the artifacts listed in MASTER_PLAN §45.

Current candidates:
MASTER_PLAN §33 estimates about 60–70 slides as a guide.

Do not assume:
Do not treat the estimate as a target or create the final PPT before the
separate user instruction.

### OQ-011 — Set operational definitions for Harness and Loop Engineering

Priority: BLOCKING
Priority Rationale: Resolve before finalizing Harness or Loop definitions in Storyline or teaching Slides.
Depends On: None; research inputs are listed under Other Dependencies.
Blocks: Final operational term wording and Final Content Freeze for affected
claims. Does not block STEP 08 Slide Map; affected wording may remain
PROVISIONAL.

Why it matters:
The training needs bounded teaching definitions without implying universal
industry consensus.

When to decide:
During Research and Storyline design, before finalizing the terms in teaching
materials.

Other Dependencies:
Review official, academic, and industry usage where available, then identify
the training-specific operational definitions.

Current candidates:
- Harness: `CLM-0030` and `references/TERMINOLOGY.md` contain candidate course
  wording supported within bounded scopes by `SRC-0137`, `SRC-0206`, and
  `SRC-0218`.
- Loop: `CLM-0021` and `references/TERMINOLOGY.md` contain candidate course
  wording; `SRC-0224` is an official workflow example and `SRC-0227` records
  vendor usage, not a universal definition.
- These are Research candidates only; no final wording has been accepted.

Do not assume:
Do not assume one universally accepted definition or treat a course-specific
definition as an official product term.

Current Status: RESOLVED by DEC-0023. The four terms have approved definitions
for this course only; their official or universal status is not claimed.

### OQ-012 — Decide whether this repository needs its own Skills, Subagents, or Memory

Priority: OPTIONAL
Priority Rationale: Consider only if repeated work or coordination friction is actually observed in this repository.
Depends On: None; an actual recurrence is the trigger, not another Open Question.
Blocks: Only a repository-specific decision to add Skills, Subagents, or Memory; nothing else.

Why it matters:
The training-production repository may eventually develop repeated workflows
or coordination needs, but these structures should answer an actual problem.

When to decide:
When repeated work or coordination friction is observed in this repository.

Other Dependencies:
Record the actual problem, recurrence, expected benefit, and maintenance cost.

Current candidates:
None recorded.

Do not assume:
Do not add these structures as a demonstration checklist or solely to create
a Meta Example.

### OQ-013 — Assess whether real project history supports a Meta Example

Priority: OPTIONAL
Priority Rationale: STEP 06 audited the available history and will not use it as a Meta Example. Reassess only if later authentic events create a relevant candidate.
Depends On: None; actual recorded history is the prerequisite, not another Open Question.
Blocks: Any later use of this repository as a factual Meta Example until relevant history is recorded; it does not block the core training Story.

Why it matters:
The project may provide an authentic supporting example only if meaningful
problems and responses actually occur.

When to decide:
The current-history assessment was completed during STEP 06. Reopen only
after a later event is recorded and its relevance can be assessed.

Other Dependencies:
Review the actual project history and whether an event clarifies the core
training Story.

Current candidates:
The planning repository's Source-of-Truth documents and routing guidance for
ACT 2; possible later examples from recurring Curriculum review for ACT 3 or
an evaluated correction for ACT 4. These began as META EXAMPLE CANDIDATES;
the STEP 06 audit below records what is and is not evidenced as of its date.

STEP 06 history audit (2026-09-27):

| Candidate | Status | Evidence and boundary |
|---|---|---|
| `AGENTS.md` became oversized. | NOT OBSERVED | The current router is 15 lines. No recorded event shows that an earlier version became difficult to use. |
| Context separation and routing occurred. | OBSERVED | `AGENTS.md` routes work to separate plan documents, and this work follows that route. No recorded Context failure shows that the separation was necessary or improved outcomes. |
| The same Instruction had to be repeated. | NOT OBSERVED | No repeated-task failure or recurrence record supports this claim. Sequential user-provided specification sections are not evidence of repeated Project instructions. |
| Decisions had to be looked up repeatedly. | NOT OBSERVED | Decisions have stable IDs, but no repeated rediscovery event is recorded. |
| Research Context became too large. | TOO EARLY | Research artifacts exist; no downstream Research-to-Slide work or observed Context problem is recorded. |
| The same Review Prompt was repeatedly rewritten. | NOT OBSERVED | The staged audits have distinct scopes. No repeated rewrite of the same Review Prompt due to production friction is recorded. |
| Distinct plan Review passes occurred. | OBSERVED | Curriculum, Story, and Demo readiness audits are present as separate reviews. They were requested in stages; no repeated same-prompt friction or measured quality gain is recorded. |
| Source-of-Truth Drift occurred. | NOT OBSERVED | The STEP 06 readiness review clarified candidate-spec ambiguities once; no contradiction with an accepted Invariant or recurring Drift is evidenced. |
| A Skill, Subagent, or Memory became necessary. | TOO EARLY | No such production mechanism is established here, and no recorded recurring friction demonstrates its need. |
| A Feedback Loop improved production quality. | TOO EARLY | A readiness review led to specification clarifications, but there is no implemented Demo, production Harness, or before/after quality evaluation. |

Disposition: do not use `ai-dev-training` as a factual Meta Example in the
current training plan. The audit is limited to the project history available
through STEP 06; OQ-013 may be revisited if later work records a relevant,
authentic event. This disposition does not change accepted DEC-0005.

STEP 07 history audit (2026-10-01; §§211–220):

| Candidate | Status | Evidence and boundary |
|---|---|---|
| Demo domain selection (DEC-0010 → DEC-0011) | DESIGN FEEDBACK; INCOMPLETE LOOP | Audience familiarity informed the switch from telemetry to synthetic image processing. Later work exercised the selected repository, but learner transfer was not measured. |
| Environment correction (DEC-0016) | OBSERVED, PARTIAL RE-EVALUATION | TRIAL-006 exposed global Harness influence and the user clarified the Windows-centered learner environment. Later CLI Trials recorded global influence; Windows/WSL audience behavior remains unvalidated. |
| Global Harness influence and Trial evaluation | ACCEPTED AS A SUPPORTING META EXAMPLE | DEC-0021 accepts the TRIAL-006 → DEC-0016 → TRIAL-007 / TRIAL-008 timeline as an observed training-production evaluation/workflow Loop. TRIAL-007's report says no MCP warning while retained stderr contains a Nimble `AuthRequired` error; no MCP task result is shown. This is not a Demo Product or `graypipe-performance` Skill repair. |
| Subagent / Memory deferral (DEC-0018) | SUPPORTING ARCHITECTURE-RESTRAINT CASE | Complexity and rediscovery audits did not justify either component; STATE-04-PERF later succeeded without them. This is not a recurring-failure correction or a general claim about their usefulness. |
| Context routing (DEC-0014) | OBSERVED SAME-REPOSITORY ITERATION | STATE-03 reorganized Context; TRIAL-005A/B observed relevant image-contract retrieval in one task, broader architecture reads in both, and variable test-context access. The result supports bounded scope/discovery claims, not perfect routing or measured performance. |

Current disposition: Candidate C supplies a factual, bounded feedback Loop
for an **accepted supporting Meta Example** under DEC-0021, DEC-0005, and
`INV-DEMO-003`. It does not prove measured training-quality improvement,
create a Demo-repository stale Skill, or replace the Product Demo. ACT 4
separates this observed Meta Case from the conceptual stale-Harness case; the
approved evidence roles and claim boundaries are recorded in DEC-0021 and
`plan/DEMO_MATRIX.md`. The STEP 06 disposition above remains as a dated
historical assessment; it is not silently rewritten.

Do not assume:
Do not invent project failures, complexity, or improvement history.

### OQ-014 — Determine whether company security policy needs a dedicated section

Priority: BLOCKING
Priority Rationale: Resolve before making company-specific security claims or using internal/customer code or data in an AI product or Cloud Demo.
Depends On: None; obtain the policy or user clarification listed under Other Dependencies.
Blocks: Company-specific data-use guidance, affected internal/customer-data
Demos, and Final Content Freeze for affected claims. Does not block STEP 08
Slide Map; affected claims may be marked REQUIRES COMPANY POLICY.

Why it matters:
The training may need to explain company-specific boundaries for data and
AI product use.

When to decide:
During requirements confirmation and research for the intended audience.

Other Dependencies:
Obtain the applicable company policy and confirm whether it should be taught
as a dedicated section or handled as a constraint within relevant examples.

Current candidates:
None recorded.

Do not assume:
Do not infer the company's security or data-use policy. In particular, do not
assume whether:

- Internal source code may be entered into any AI service.
- Cloud Agent use is permitted.
- Customer data may be entered.
- Credentials have a particular handling rule.
- Company GitLab access is available to a product or Agent.
- A Business Workspace has a particular administrative policy.

### OQ-015 — Decide whether global Harness isolation is required for Trials

Current Status: RESOLVED FOR CURRENT SCOPE by DEC-0016.
Priority: OPTIONAL — revisit only if a Prompt-only causal comparison becomes
an explicit research objective.
Priority Rationale: The STEP 07 goal is to observe whether the Performance
Workflow recurs on another code path, not to prove a Prompt-only causal
effect. Global Harness influence is a known attribution limit, not a Trial
prerequisite.
Depends On: `plan/DEMO_MATRIX.md` §§121–130 and DEC-0016.
Blocks: None for designing or running the second Performance Task. The final
presentation interface and product/account behavior remain under OQ-003 and
OQ-005 for later rehearsal.

Why it matters:
TRIAL-006 loaded user Skills and plugin hooks from the current Codex
environment. Its correctness and measurement observations remain valid for
the recorded host, code, input, and runtime, but the full workflow cannot be
attributed to its Prompt alone. Preserve that claim boundary without
requiring a clean-room setup.

When to decide:
Resolved for current STEP 07 work on 2026-09-29. Reopen only if the project
later chooses to study Prompt-only causality as a research question.

Other Dependencies:
For each CLI Trial, record global Skills, hooks, MCP, configuration, and
other Harness influence that is actually loaded or observed. If that
influence prevents a claim, mark the result PARTIAL. Analyze Workflow
repetition from the task structure and observed procedure. Desktop validation
of the Final Anchor is deferred to Final Demo Rehearsal.

Current direction:
- **Withdrawn recommendation:** a dedicated macOS user account as the Demo
  baseline. The earlier recommendation in the environment audit is rejected
  by the user's 2026-09-29 direction; no account is to be created.
- Continue development and suitable automated validation on the current
  host. Do not modify global Codex configuration to remove Harness influence.
- Keep global Harness influence as a known limitation and an Advanced
  Insight candidate after Harness Engineering, not as Prompt Engineering
  content.

Evidence:
- USER: environment Decision revision received 2026-09-29; rejects a
  dedicated macOS user account and clean-room Prompt-only experiment as a
  STEP 07 blocker.
- OBSERVATION: TRIAL-006 loaded four global Skills; plugin hook warnings and
  MCP startup failures were logged, but the event log contains no MCP tool
  call. Its local correctness and benchmark observations are retained.
- DEC-0016: keeps the Trial's Prompt-only attribution PARTIAL while allowing
  Workflow-repetition work to continue.

Do not assume:
Do not infer that repository identity alone makes Agent environments
identical. Do not make a Prompt-only causal claim from TRIAL-006. Do not
create an isolated user, modify global configuration, or require a clean
environment for the next Performance Task.


## Active Assumptions

No active assumptions are recorded. The following remain unknown and must not
be filled in implicitly; resolve relevant items through research or user
confirmation:

- Exact learner setup: WSL vs native Windows, IDE, shell, and Codex
  interface. The audience is primarily Windows-based; do not infer the split.
- Programming-language mix where it affects Demo transfer.
- Codex access for every learner and the company's network environment.
- Whether company source code may be provided to a Cloud Agent.
- Current product-plan support and exact ChatGPT/Codex feature behavior.
- Demo execution environment.
- Whether CUDA/GPU familiarity or any company development process can be
  assumed.


## Decisions

The following initial records preserve important decisions already established
by the user and MASTER_PLAN. They are not new curriculum decisions.

### DEC-0001 — Prioritize organization-wide AI capability alignment

Status: ACCEPTED

Date: 2026-09-25

Context:
The developer audience includes a wide range of AI experience, and many
participants have limited time for separate AI study.

Problem:
The training could optimize for feature coverage, advanced techniques, or a
single learner level instead of a shared organizational baseline.

Decision:
Use organization-wide consistency in AI-use capability as the primary
objective.

Rationale:
This objective is explicitly ranked above maximizing feature coverage or
optimizing for only beginner or advanced learners.

Alternatives:
- Feature breadth as the primary objective: not selected in the Source of
  Truth.
- Advanced-user depth as the primary objective: not selected in the Source of
  Truth.
- Separate beginner and advanced courses: excluded by the shared-training
  direction in the Source of Truth.
- Beginner-only simplification: not selected in the Source of Truth.

Trade-offs:
Gain a common baseline across the organization. Feature coverage and
specialized depth remain subordinate to that goal.

Related Invariants:
- INV-OBJECTIVE-001
- INV-AUDIENCE-001
- INV-DIFFICULTY-001

Affected Artifacts:
- plan/MASTER_PLAN.md
- Future Curriculum and Storyline

Evidence:
- MASTER_PLAN: §§2.1–2.3, 3.1, 35, 41
- USER: STEP 01 training direction preserved in MASTER_PLAN

Training Relevance:
YES

Reason:
This records why the training favors shared organizational capability over a
feature catalog or a course optimized for only one level.

Follow-up:
Check that each Persona gains value when Curriculum is designed.

Supersedes:
None

Superseded By:
None

### DEC-0002 — Use six net instructional hours without learner labs

Status: ACCEPTED

Date: 2026-09-25

Context:
The MASTER_PLAN sets 360 net instructional minutes and explicitly rules out
participant laptop use and direct exercises.

Problem:
The reason for selecting the duration and no-hands-on format is not documented
in the Source of Truth. This record preserves the choices without supplying a
rationale.

Decision:
Keep 360 minutes of net instruction and use lecture, cases, Before/After,
visuals, instructor-led Demos, failures, comparisons, and Insights rather than
participant hands-on exercises.

Rationale:
Not explicitly documented. The duration and no-participant-hands-on
constraint themselves are explicit in the Source of Truth.

Alternatives:
- Participant-run Codex exercises: excluded by the delivery constraint.
- Individual coding exercises and result presentations: excluded by the
  delivery constraint.

Trade-offs:
Preserve the shared instructor-led format; do not provide individual
hands-on exercise time in this training.

Related Invariants:
- INV-IDENTITY-001
- INV-DELIVERY-001

Affected Artifacts:
- plan/MASTER_PLAN.md
- Future Curriculum, Demo Architecture, and Slide Map

Evidence:
- MASTER_PLAN: §§1.2–1.3, 8.1, 11
- MASTER_PLAN: The reason for selecting exactly six hours and a no-hands-on
  format is not explicitly documented.
- USER: STEP 01 training direction preserved in MASTER_PLAN

Training Relevance:
YES

Reason:
This record preserves the duration and delivery constraints for Curriculum
design. The original reasons for choosing exactly six hours and no participant
hands-on work are not explicitly documented.

Follow-up:
Confirm the detailed Curriculum and Demo durations total 360 net minutes.

Supersedes:
None

Superseded By:
None

### DEC-0003 — Use one problem-driven maturity Story

Status: ACCEPTED

Date: 2026-09-25

Context:
Learners arrive with different AI experience, while the training must explain
how AI-assisted development can grow from simple usage into an Engineering
System.

Problem:
A feature-by-feature tour would not explain why each practice becomes useful
or how one development approach leads to the next.

Decision:
Use the shared progression Chatbot → Prompt Engineering → Context Engineering
→ Harness Engineering → Loop Engineering → AI-Native Development. Introduce
each major step through an attempt, early success, a problem, its cause, and an
improvement.

Rationale:
The progression connects each practice to a problem and gives learners at
different levels one common Story.

Alternatives:
- Independent chapters for product features: excluded by the Storytelling
  direction.
- Introduce a completed Harness before showing the problems it solves:
  excluded by the problem-before-solution rule.

Trade-offs:
The Story takes precedence over exhaustive feature enumeration; some product
details may be handled only where the Story needs them.

Related Invariants:
- INV-NARRATIVE-001
- INV-NARRATIVE-002
- INV-MATURITY-001
- INV-LEARNING-001

Affected Artifacts:
- plan/MASTER_PLAN.md
- Future Curriculum, Storyline, Demo Architecture, and Slide Map

Evidence:
- MASTER_PLAN: §§4–5, 12–14, 17, 22, 31, 36–37, 40, 42
- USER: STEP 01 training direction preserved in MASTER_PLAN

Training Relevance:
YES

Reason:
The Story shows why AI development practices expand in response to real
friction rather than appearing as a feature list.

Follow-up:
Keep each Curriculum transition connected to its preceding problem.

Supersedes:
None

Superseded By:
None

### DEC-0004 — Prefer a continuous demo repository

Status: ACCEPTED

Date: 2026-09-25

Context:
The same development problem and repository can show changes in AI practice
across the maturity Story.

Problem:
Using unrelated repositories in every chapter can obscure the progression
from one way of working to the next.

Decision:
Prefer one understandable software repository that evolves across the
training, when a suitable repository and Demo plan make this feasible. Keep
the training-material repository distinct from the software Demo repository.

Rationale:
Continuity helps learners see one project change as the AI development
approach improves.

Alternatives:
- Use unrelated projects in every chapter: not preferred where a suitable
  continuous project is feasible.
- Treat ai-dev-training as the software Demo repository by default: not
  selected; the two repository roles remain distinct.

Trade-offs:
Continuity makes selection of a broadly understandable project important.
The specific repository, language, domain, and location remain open.

Related Invariants:
- INV-DEMO-001
- INV-DIFFICULTY-001

Affected Artifacts:
- Future Demo Architecture
- Possible software Demo repository

Evidence:
- MASTER_PLAN: §§8.2, 12, 27–28
- USER: STEP 01 training direction preserved in MASTER_PLAN

Training Relevance:
YES

Reason:
The repository's actual evolution may help demonstrate the shared Story.

Follow-up:
Resolve the repository selection and placement questions in OQ-001.

Supersedes:
None

Superseded By:
None

### DEC-0005 — Use only authentic project history as a Meta Example

Status: ACCEPTED

Date: 2026-09-25

Context:
The process of creating this training may produce real examples of Context,
Harness, or Loop Engineering.

Problem:
Inventing a failure or adding complexity for the sake of a teaching example
would misrepresent the project's history.

Decision:
Use the training repository as a supporting Meta Example only when an
Engineering problem and its response actually occur. Do not fabricate
failures, history, or complexity, and do not let the Meta Example replace the
main training Story.

Rationale:
The example is credible only when it reflects actual project work.

Alternatives:
- Create artificial problems to demonstrate a desired practice: explicitly
  excluded.
- Make the project-creation story the main course narrative: explicitly
  excluded.

Trade-offs:
Potential Meta Examples depend on real project events and may not cover every
desired concept.

Related Invariants:
- INV-DEMO-003
- INV-RESPONSIBILITY-001

Affected Artifacts:
- Project Decision Log
- Future Storyline or Demo notes that use actual project history

Evidence:
- MASTER_PLAN: §§16, 29, 37
- USER: STEP 01 training direction preserved in MASTER_PLAN

Training Relevance:
YES

Reason:
Real project decisions may illustrate system improvement, provided the event
is accurately recorded.

Follow-up:
Assess relevance when actual decisions, failures, or improvements occur.

Supersedes:
None

Superseded By:
None

### DEC-0006 — Gate slide production on planning artifacts

Status: ACCEPTED

Date: 2026-09-25

Context:
Slides can pressure the training design to change for presentation
convenience.

Problem:
Starting slide production before the curriculum, Storyline, Demo plan, and
research are ready could hide unresolved planning choices or remove important
connections.

Decision:
Review the specified planning and research artifacts before final Slide
production. Do not begin the final PPT until the user gives a separate
instruction.

Rationale:
The gate protects the Source of Truth from being reshaped around a premature
deck.

Alternatives:
- Start final slide production immediately after MASTER_PLAN: explicitly
  excluded by the planning gate.
- Use slide count as a reason to compress or remove Story transitions:
  explicitly excluded by the Story and slide-density rules.

Trade-offs:
Slide production waits for planning artifacts and the separate user
instruction.

Related Invariants:
- INV-SOT-002
- INV-DEMO-005
- INV-CHANGE-001

Affected Artifacts:
- Future Research Plan, Curriculum, Storyline, Demo Architecture, Slide Map,
  Slides, Speaker Notes, and PPT

Evidence:
- MASTER_PLAN: §§0.3, 10, 29–31, 33–34, 45
- USER: STEP 01 training direction preserved in MASTER_PLAN

Training Relevance:
TBD

Reason:
The gate may provide a process example after the project has enough real
history; do not assume that it is a useful teaching case now.

Follow-up:
Check the gate inputs before slide drafting and wait for separate PPT
authorization.

Supersedes:
None

Superseded By:
None

### DEC-0007 — Allocate the detailed curriculum within the six-hour baseline

Status:
ACCEPTED

Date:
2026-10-02

Originally Proposed:
2026-09-25

Context:
OQ-004 asks for a section-level Curriculum and time allocation. MASTER_PLAN
§11 sets a broad 360-minute baseline by Part, while STEP 04 §§91–100 requires
section-level timing and a split across lecture, demo, case, reflection, and
transition.

Problem:
The broad ACT durations do not yet show how the six hours will be taught or
whether each instructional segment has enough time for its learning movement.
Actual Demo runtime also depends on later repository and environment choices.

Decision:
Use the approved ACT allocation of 40 / 55 / 70 / 85 / 80 / 30 minutes for
ACT 0–5 and keep the net instructional total at 360 minutes. The approved
delivery-mode totals are Lecture 130, Demo 73, Case 83, Reflection 20,
Transition 22, and Q&A/Discussion 32 minutes. Distribute Q&A/Discussion near
major model transitions and at the course close; determine its exact
section-level placement and reconcile the Reflection/Transition placement in
STEP 08. Do not assign Slide-level minutes in STEP 07. Keep breaks outside the
360-minute total; the company determines the final break schedule.

Rationale:
The allocation preserves the established ACT baseline, the 360-minute
constraint, and the causal Story while adding dedicated discussion time for
learners with different experience levels. Shorter private Reflection and
Transition allocations retain their roles without requiring learner
participation or hands-on work. Harness and Loop retain their existing ACT
durations.

Alternatives:
- Keep only the broad ACT totals and defer all section and mode allocation:
  simpler, but it does not satisfy the current Curriculum gate.
- Shift substantial time from early Acts to Harness and Loop: could add
  advanced depth, but would reduce early practical value and risk the shared
  audience objective.
- Place all Q&A/Discussion at the end: rejected because it would not support
  questions around the major transitions in the Story.

Trade-offs:

Gains:
The Curriculum has approved aggregate mode totals and dedicated time for
questions across experience levels.

Costs:
Reflection and Transition time are shorter; Q&A placement still requires
section-level reconciliation in STEP 08.

New risks:
An actual Demo may take longer than its current instructional allocation.
Reconcile the mode breakdown during STEP 08 without changing 360 net minutes
or the causal Story.

Related Invariants:
- INV-IDENTITY-001
- INV-AUDIENCE-001
- INV-OBJECTIVE-001
- INV-DELIVERY-001
- INV-NARRATIVE-001
- INV-NARRATIVE-002
- INV-DIFFICULTY-001
- INV-DIFFICULTY-002
- INV-LEARNING-001
- INV-LEARNING-003

Affected Artifacts:
- plan/CURRICULUM.md
- plan/CURRICULUM_MATRIX.md
- plan/LEARNING_JOURNEY.md
- plan/STORY_ARCHITECTURE.md
- Future Demo Architecture and Slide Map

Evidence:
- USER: STEP 04 §§91–100 requires the fixed 360-minute total, section-level
  allocation, mode accounting, persona review, and pacing checks.
- USER: STEP 04 §§111–130 requires compression/expansion review, learner
  walkthroughs, practical transfer, final timing, product independence, and
  completion validation; the Curriculum is COMPLETE WITH OPEN QUESTIONS.
- MASTER_PLAN: §11 supplies the broad ACT baseline and §§12–14 establish
  continuous Demo evolution and the Prompt/Context/Harness/Loop progression.
- USER: STEP 07 Final Audit resolution explicitly approves the aggregate mode
  totals on 2026-10-02.
- TODO: Demo runtime rehearsal and exact section-level Q&A placement remain
  open; neither reopens approval of the aggregate schedule.

Training Relevance:
TBD

Reason:
The allocation decision itself is not automatically a learner-facing case.

Follow-up:
Curriculum timing, narrative continuity, ownership, agency, redundancy,
complexity, Research placement, Demo dependency, time-risk, scorecard,
compression, audience, transfer, and completion audits have been recorded
through STEP 04 §130. Preserve the accepted ACT totals. During STEP 08,
distribute the 32-minute Q&A/Discussion pool around major transitions and the
course close, reconcile the Reflection/Transition placement, and keep the
delivery-mode totals at 360 minutes. Confirm actual Demo runtime during
rehearsal without changing the total or causal Story.

Supersedes:
None

Superseded By:
None

Approval:
Accepted by the user's STEP 07 Final Audit decision on 2026-10-02. This
decision preserves the 360-minute HARD invariant and does not change
MASTER_PLAN.md.

### DEC-0008 — Center Anchor Demo candidates on Story transitions

Status:
PROPOSED

Date:
2026-09-25

Context:

The six-hour Curriculum needs concrete examples that reveal its Engineering
Story without making product feature coverage the organizing principle.
Repository, account, product surface, and Demo runtime are still undecided.

Problem:

A separate Anchor Demo for every product mechanism could consume the schedule,
repeat concepts, and make the Curriculum depend on particular interfaces or
account features.

Decision:

PROPOSE four conditional Anchor Demo candidates at the main narrative
transitions:

1. ACT 0 — Read-only repository exploration.
2. ACT 2 — Repeated Prompt context to reusable Project guidance, followed by
   a bounded context-growth / routing case.
3. ACT 3 — One repeatable workflow with visible verification.
4. ACT 4 — A labeled stale-artifact failure, cause analysis, scoped change,
   rerun, and bounded evaluation.

Keep Subagents and Memory as supporting or visual candidates rather than
Anchor Demo dependencies. Place Lost in the Middle as brief supporting
evidence for Context relevance, not as a standalone feature or Research
chapter. Prefer one evolving Demo repository where suitable, but do not select
or implement it here. Keep static, recorded, or conceptual fallbacks available.

Rationale:

The candidates demonstrate four causal changes in the shared Story. Supporting
mechanisms can add advanced value without requiring equal runtime or depending
on target feature availability. This preserves Demo density while protecting
the 360-minute baseline and product independence.

Alternatives:
- Use one Anchor Demo for every major product mechanism: each feature could
  receive an isolated demonstration, but the course could become a feature
  tour, increase repetition, and overrun the Story.
- Use only one continuous live Demo: this could provide one through-line, but
  a single environment or runtime failure could obscure multiple transitions
  and not every mechanism belongs in one live scenario.

Trade-offs:

Gains:

The Anchor candidates align to learner problems and have explicit fallback
paths. Supporting examples can remain short and product-independent.

Costs:

The actual continuous repository, product surface, and recording/live mix
remain undecided.

New risks:

The four candidates may need to be consolidated or adjusted after repository
selection and rehearsal. Do not claim an observed failure or successful
improvement until evidence exists.

Related Invariants:

- INV-NARRATIVE-001
- INV-NARRATIVE-002
- INV-DELIVERY-001
- INV-DEMO-001
- INV-DEMO-002
- INV-DEMO-003
- INV-DEMO-004
- INV-LEARNING-001

Affected Artifacts:

- plan/CURRICULUM.md
- plan/CURRICULUM_MATRIX.md
- plan/LEARNING_JOURNEY.md
- Future Demo Architecture and Slide Map

Evidence:

- USER: STEP 04 Demo-candidate and density instructions in §§41–81; §§121–130
  require candidate, product-independence, and decision audits.
- MASTER_PLAN: §§5, 25, 27, and 44 require problem-driven Demos, authentic or
  labeled failure cases, an evolving software repository, and Story-led
  visual/Demo placement.
- RESEARCH: references/CLAIMS.md keeps product-feature access conditional and
  Lost in the Middle bounded to its evidence scope.
- TODO: Repository, account access, exact product behavior, and Demo runtime
  have not been selected or rehearsed.

Training Relevance:

YES

Reason:

The selection and fallback logic can help learners distinguish an
Engineering Story from a product-feature tour.

Follow-up:

DEC-0011 resolves the repository direction, primary environment, and HYBRID
delivery default. The four Anchor roles in this proposal remain unapproved;
review their selection against the repository Story and STEP 07 evidence.

Supersedes:

None

Superseded By:

None

Approval:

Pending user review of the four proposed Anchor roles. The user's DEC-0011
Decision resolves the repository, primary environment, and HYBRID delivery
strategy but does not approve these role mappings. This proposal does not
change MASTER_PLAN.md or a HARD invariant.

### DEC-0009 — Frame maturity as problem scope, not a required ladder

Status:
ACCEPTED

Date:
2026-09-26

## Context

The Story moves from a familiar chatbot workflow toward a system that can
support more complex and recurring agent-assisted work. A linear retelling
could make learners think they must adopt every later mechanism.

## Problem

Learners have different starting points and projects have different needs.
The course needs to preserve a shared evolution Story without ranking learners
or recommending an oversized Harness.

## Decision

Treat each later stage as a response to a broader or recurring problem scope,
not as a universally better state or a required implementation step. Seed
task-sized choices through Prompt, Context, role separation, Memory, and
feedback examples, then recall `Minimum Effective Harness` as the course
heuristic: the smallest system that addresses real recurring friction. Keep
the final synthesis within the approved Curriculum and do not add minutes or
mandatory components.

## Rationale

This lets a learner stop at a stage that already solves the problem they
actually have, while experienced users can examine wider reliability and
maintenance concerns. It protects the common Story and makes minimality part
of the engineering judgment rather than an afterthought.

## Alternatives Considered

### Alternative A

Present every stage as a target learners should eventually implement.

Advantages:

Provides a simple linear roadmap.

Disadvantages:

Turns a problem-driven model into an adoption ladder and encourages
unnecessary components.

### Alternative B

Mention Minimum Effective Harness only once at the end.

Advantages:

Keeps early sections shorter.

Disadvantages:

Does not prevent earlier mechanisms from sounding mandatory as they are
introduced.

## Trade-offs

Gains:

The Story gives beginners permission to take a small next step and gives
experienced learners a reason to remove or maintain unneeded mechanisms.

Costs:

The presenter must distinguish an optional next step from a promised universal
benefit throughout the six-hour narrative.

New risks:

The heuristic could be mistaken for an official product term or fixed
architecture unless it is labeled as a course Engineering heuristic.

## Related Invariants

- INV-MATURITY-001
- INV-MATURITY-005
- INV-LOOP-001
- INV-DIFFICULTY-001
- INV-LEARNING-003

## Affected Artifacts

- plan/STORY_ARCHITECTURE.md
- plan/STORY_BEATS.md
- plan/TRANSITIONS.md
- Existing treatment in plan/CURRICULUM.md; no timing change

## Evidence

- USER: STEP 05 §§91–100, especially §§93–96 and §99
- MASTER_PLAN: §§2.2–2.3, 5.2–5.9, and 35
- CURRICULUM: ACT 4 Minimum Effective Harness and ACT 5 advanced-value synthesis

## Training Relevance

YES

Reason:

Choosing only the structure needed by real work is part of the engineering
judgment this course teaches.

## Follow-up

Keep the heuristic visible in Story and final synthesis. Revisit its visual
presentation during Slide Map work without adding a required implementation
or changing the six-hour allocation.

## Supersedes

None

## Superseded By

None

## Approval

Accepted from the user's explicit STEP 05 Story direction. This decision is
consistent with the current MASTER_PLAN and does not change a HARD invariant.

### DEC-0010 — Propose a separate Python telemetry Demo repository

Status:
SUPERSEDED

Date:
2026-09-27

Context:

STEP 06 requires one understandable software Project that can support
repository exploration, a Bug fix, Performance work, Project Context,
reusable work, Harness staleness, and a small Evaluation/Regression sequence.
The project source, language, domain, location, and target Demo environment
remain undecided in OQ-001/OQ-003.

Problem:

An existing repository may offer authentic structure but introduces
unreviewed source, usage, company-data, and Story-fit questions. A
purpose-built repository gives control over synthetic data and state
transitions, but its domain and toolchain must remain understandable and
reproducible.

Decision:

PROPOSE a purpose-built Python telemetry-data pipeline in a separate
repository provisionally named `ai-dev-training-demo`. Use a small local
synthetic dataset, multiple traceable processing modules, a boundary-condition
Bug, a measured but not yet quantified Performance task, and a later
Project Test-procedure change that leaves one previously correct reusable
workflow stale. The current illustrative migration starts with
`unittest`, then moves/reorganizes tests and adopts a pinned
`pytest` development dependency; exact commands and failure behavior
remain subject to a minimal Trial.

For transition clarity, keep the boundary Bug correction (`STATE-00-FIXED`)
separate from Project-instruction introduction, and keep the measured
Performance change (`STATE-04-PERF`) separate from reusable-workflow
introduction. Treat these as proposed state refinements, not observed Demo
results or approved repository implementation.

Retain the proposal only if a minimal Trial confirms that package setup,
Build/Test, benchmark signal, and stale-workflow scenario can fit the
Curriculum and classroom environment. Keep all exact commands, measurements,
and Agent observations open until they are actually tested.

Rationale:

This candidate appears to offer a low domain-explanation cost and a
deterministic local input/output path while supporting the continuous Story.
A separate repository gives the Educational Demo Harness and its Git history
clear boundaries from the Training Production Harness. Purpose-built states
can be labeled as educationally designed rather than presented as real
production history.

Alternatives Considered:

#### Alternative A — C++ image-processing CLI

Advantages:

Visible image results and an explicit CMake/CTest Build/Test sequence.

Disadvantages:

Compiler/generator setup, image/data selection, and C++ explanation may
increase the Demo's cognitive and operational cost.

#### Alternative B — TypeScript event-log CLI

Advantages:

Clear compilation, a multi-module source path, local text fixtures, and a
Node test-runner option.

Disadvantages:

Node/TypeScript versioning and module/compiler configuration add setup and
audience-familiarity assumptions that have not been validated.

#### Alternative C — Existing or hybrid repository

Advantages:

May carry authentic project structure or a real workflow history.

Disadvantages:

No source, license, redistribution, modification, attribution, data, or
company-policy review has been completed. Do not select it based on assumed
permission or presumed Story fit.

Trade-offs:

Gains:

- One synthetic local domain can serve functional and performance tasks
  without external services or customer data.
- A separate linear history can show intentionally designed educational
  states without mixing training-material history with Demo history.
- The proposal prioritizes readability and continuity over language-specific
  teaching depth.

Costs:

- Python packaging still needs a pinned, prepared Build environment.
- No repository, command, benchmark, Agent result, or time measurement has
  been validated.
- A user preference for another language or an existing internal example
  could change the recommendation.

New risks:

- The chosen data pipeline may be too abstract or its performance change too
  small to observe.
- A controlled stale state may feel contrived unless its Project change and
  earlier-correct workflow are transparent.
- The selected Codex account or surface may not support a proposed
  product-specific workflow mechanism.

Related Invariants:

- INV-IDENTITY-001
- INV-DELIVERY-001
- INV-NARRATIVE-001
- INV-NARRATIVE-002
- INV-DEMO-001
- INV-DEMO-002
- INV-DEMO-003
- INV-DEMO-004
- INV-VERIFY-001

Affected Artifacts:

- plan/DEMO_ARCHITECTURE.md
- plan/DEMO_REPOSITORY_SPEC.md
- plan/DEMO_MATRIX.md
- plan/DEMO_RUNBOOK_SPEC.md
- Future Educational Demo repository, only after approval

Evidence:

- USER: STEP 06 §§61–100 requires candidate comparison, a proposed direction,
  trial boundaries, state/evaluation design, and a documented Gate.
- USER: STEP 06 §§101–110 requires implementation-readiness, ambiguity,
  failure-cause, verification, state-diff, scope-freeze, user-decision, and
  handoff audits.
- MASTER_PLAN: §8.2 and §§12–14 prefer an understandable continuous software
  Demo and problem-driven Story without selecting its language or domain.
- CURRICULUM: ACT 0–4 candidate Demo time allocations total 73 minutes;
  actual runtime remains unvalidated.
- RESEARCH: official technical references linked from
  plan/DEMO_ARCHITECTURE.md describe candidate packaging/build/test tools;
  they do not establish training-account or Agent behavior.
- TODO: no user language/domain decision, candidate Trial, or Demo run exists.

Training Relevance:

TBD

Reason:

The proposal itself is not automatically a learner-facing Meta Example.
Revisit only if the real selection and Trial history later provides a useful,
documented teaching example.

Follow-up:

Historical follow-up at proposal time: request a language/domain/location and
environment decision, then assess feasibility. This proposal is now
SUPERSEDED by DEC-0011; do not use this follow-up as current direction. STEP 07
validation follows DEC-0011/DEC-0012 after the user starts that step at the
selected sibling path.

Supersedes:

None

Superseded By:
DEC-0011

Approval:

This proposal was superseded by the user's explicit STEP 06 direction in
DEC-0011. Telemetry/log processing was not selected. Preserve this record as
the prior candidate rationale; it does not change MASTER_PLAN.md, an ACCEPTED
Decision, or a HARD Invariant. At the time of this proposal DEC-0007 and
DEC-0008 retained their then-current statuses; see their current Decision
records for subsequent updates.

### DEC-0011 — Select a Python synthetic image-processing Demo repository

Status:
ACCEPTED

Date:
2026-09-27

## Context

STEP 06 needs one continuous, understandable software Project that supports
the training's Prompt → Context → Harness → Loop Engineering evolution.
The audience includes many C++ Vision developers, while the course is not
intended to teach Python, C++, or Vision algorithms. DEC-0010 proposed a
Python telemetry pipeline, but the user has now supplied a final repository,
domain, environment, and delivery direction.

## Problem

Choose a Demo domain that feels familiar to the audience without making
domain expertise, language mechanics, or algorithm details the lesson. Keep
the Demo controlled and separate from the Training Production Harness, while
preserving the existing problem-driven Story and bounded verification work.

## Decision

Use a separate purpose-built repository named `ai-dev-training-demo` with
Python as its primary language and a synthetic local Image Processing CLI as
its domain. The conceptual pipeline is input image → loader → normalize →
filter → resize/transform → statistics → output. Determine exact modules and
boundaries in STEP 07 from the Story and implementation needs.

The repository should remain close to grayscale images, simple normalization
and filters, resize/transform operations, and basic statistics. Avoid complex
Computer Vision algorithms, Deep Learning inference, CUDA/GPU kernels,
camera calibration, stereo, 3D reconstruction, complex OpenCV pipelines, and
professional image-quality metrics. Use synthetic local images only; do not
use company data, customer data, or personal information.

Python is selected to reduce Code and Repository comprehension cost so the
course can focus on Agent behavior, repository investigation, Prompt,
Context, workflow, Verification, Harness, and Feedback Loop. This decision
does not claim that Python is superior to C++ or more suitable for AI work.

Keep dependencies minimal. Consider Python with NumPy as the initial
dependency direction. Add OpenCV only if the Story has a demonstrated need
and its API does not add undue cognitive load. Select any test dependency,
including pytest if considered, based on Demo stability and readability;
exact dependencies remain open until STEP 07.

For performance, retain a workflow-centered case with a Vision-intuitive
candidate such as unnecessary pixel-level repeated work, repeated allocation,
duplicate normalization, or a redundant transformation. Choose the actual
hot path only from implementation evidence. Teach Baseline → Investigate →
Plan → Implement → Correctness Test → Benchmark → Compare, not Python,
NumPy, or vectorization techniques.

Original DEC-0011 environment clause (historical; amended by DEC-0016): use
macOS with the then-current Codex Desktop for primary implementation and
validation. Design for OS independence where practical; STEP 07 does not
need to validate every OS. Use HYBRID delivery for Anchor Demos: attempt a
validated Live path while preparing a capture, expected result, and fallback
for every Story-critical case. ACT 4's Harness Improvement Loop is not
Live-only. Supporting Demos may be RECORDED, CAPTURED, or VISUAL. This
planning decision does not assert current product feature or account
availability; verify those facts before relying on a product-specific path.

Do not create the Demo repository or begin its implementation as part of this
decision. DEC-0012 subsequently records the selected local sibling path. Keep
the Training Production Harness and Educational Demo Harness separate.

In future Curriculum and Slide work, provide short transfer bridges from
Python patterns to C++ Vision practice: Python test runner (pytest if
selected) ↔ GoogleTest/CTest; Python
benchmark ↔ Google Benchmark or a project benchmark; Python modules ↔ `.cc` /
`.h` and libraries/modules; project instructions ↔ CMake, compiler flags,
coding conventions, and module constraints; performance workflow ↔ Release
build → benchmark → profile → optimize → correctness test → regression; and
Context routing ↔ architecture documents, module rules, algorithm
constraints, and performance guides. These are teaching mappings only and
do not require C++ code in the Demo repository.

Environment amendment:
The macOS/Codex Desktop clause above records the environment selected at the
time of DEC-0011. DEC-0016 supersedes that clause only: macOS is the current
development and partial automated-validation host, while the target learner
environment is primarily Windows-based and its exact setup remains open.
DEC-0011 remains ACCEPTED for its repository, language, domain, data, and
delivery choices.

## Rationale

Synthetic grayscale image operations give C++ Vision developers an intuitive
domain while keeping each transformation visible and the data local. Python
keeps source comprehension lighter so the training can foreground the AI
Engineering Story rather than language instruction. The small pipeline can
support repository exploration, bug investigation, Context, reusable
verification, performance comparison, Harness staleness, and Loop evaluation
without requiring advanced Vision knowledge. Future C++ transfer bridges
connect the patterns to participants' work without changing the Demo's
language or scope.

## Alternatives Considered

### Alternative A — Python telemetry/log-processing CLI (DEC-0010)

Advantages:

Deterministic synthetic input, concise Python source, and a pipeline shape
could support the same engineering Story.

Disadvantages:

The domain has less immediate familiarity for the large C++ Vision audience
and gives less intuitive visual continuity than image input and output.

Disposition:

Not selected; DEC-0010 is SUPERSEDED.

### Alternative B — C++ synthetic image-processing CLI

Advantages:

The language and domain align directly with many attendees; CMake and C++
test/benchmark practices could transfer directly.

Disadvantages:

C++ syntax and toolchain setup would increase comprehension and operational
cost for a course whose subject is AI Engineering evolution.

Disposition:

Not selected as the primary Demo language. Transfer examples will connect
Python patterns to C++ Vision practices without adding C++ Demo code.

### Alternative C — Other Vision or image-processing stack

Advantages:

A richer domain or established library might resemble production work more
closely.

Disadvantages:

Complex algorithms, dependencies, or professional metrics could make Vision
the lesson and increase setup cost.

Disposition:

Use only if a concrete STEP 07 need shows the simpler Python pipeline cannot
support the Story; evaluate changes through the project's decision process.

### Alternative D — TypeScript event-log CLI

Advantages:

An explicit compiler and multi-module source path can make Build and
repository exploration visible.

Disadvantages:

It is less familiar to the identified C++ Vision audience and provides less
intuitive visual continuity than simple image input/output.

Disposition:

Not selected; it does not provide a Story advantage over the chosen direction.

## Trade-offs

Gains:

- Familiar, visual data domain for the audience without making C++ or Vision
  expertise a prerequisite.
- Python keeps the course focus on investigation, Context, Verification,
  Harness, and Loop.
- Synthetic local inputs preserve state control and avoid company/customer
  data and external-service dependencies.
- C++ transfer remains visible in future teaching materials without
  increasing Demo repository complexity.

Costs:

- The primary Demo language differs from the main language of many attendees.
- Exact modules, image representation, dependencies, and test strategy remain
  to be worked out in STEP 07.
- A synthetic history must be transparently labeled as training-designed,
  not authentic production history.

New risks:

- Even simple image operations may invite algorithm questions that distract
  from the Story; keep the operations elementary and bounded.
- Performance differences may be too small or unstable; do not select a hot
  path or state a result without measurement.
- OpenCV or other dependencies may increase setup and cognitive cost; add
  them only when evidence supports the need.
- Current Codex interface, account, permissions, and feature behavior may
  differ by environment; verify before relying on a product-specific Demo.

## Related Invariants

- INV-AUDIENCE-001
- INV-OBJECTIVE-001
- INV-DELIVERY-001
- INV-NARRATIVE-001
- INV-NARRATIVE-002
- INV-DEMO-001
- INV-DEMO-002
- INV-DEMO-003
- INV-DEMO-004
- INV-VERIFY-001

## Affected Artifacts

- plan/DECISIONS.md and OQ-001/OQ-003 resolution notes
- plan/DEMO_ARCHITECTURE.md
- plan/DEMO_REPOSITORY_SPEC.md
- plan/DEMO_MATRIX.md
- plan/DEMO_RUNBOOK_SPEC.md where its scope or status language depends on
  the selected repository/environment
- Future Curriculum and Slide material for C++ Vision transfer bridges
- Future Educational Demo repository, after STEP 07 begins with the exact
  filesystem path

## Evidence

- USER: explicit STEP 06 Decision supplied on 2026-09-27 in the current
  conversation; it sets audience context, repository, language, domain,
  complexity limits, dependency direction, performance teaching goal,
  location timing, environment, delivery strategy, and required plan updates.
- MASTER_PLAN: established six-hour developer course, no participant
  exercises, continuous problem-driven AI Engineering Story, and emphasis on
  Verification.
- DEMO_ARCHITECTURE / DEMO_REPOSITORY_SPEC: existing STEP 06 candidates show
  the Project must support continuous repository evolution; those candidate
  assessments are planning judgments, not Trial evidence.
- TODO: no implementation, Trial, benchmark, or product-account validation
  has occurred for this selected direction.

## Training Relevance

YES

Reason:

The choice itself can show how to select a domain that is familiar to the
audience while reducing language and domain complexity to preserve the
training's actual learning goal. The C++ mappings support practical transfer
without turning the Demo into a C++ or Vision lesson.

## Follow-up

DEC-0012 records the local sibling path selected after DEC-0011. At STEP 07
start, create the separate repository there, then specify the smallest module
structure that serves the Story, choose dependencies and a test approach
based on stability/readability, define one bounded bug and a measurable
performance candidate, and validate in macOS/Codex Desktop. Recheck current
product behavior when a Demo relies on it. Do not validate all OSes as a
STEP 07 requirement. Until STEP 07 is explicitly started, this record does
not authorize repository creation, code, Trial, commit, or push.

## Supersedes

DEC-0010

## Superseded By

None

## Approval

Accepted by the user's explicit STEP 06 Decision on 2026-09-27. The decision
implements the existing audience, delivery, narrative, Demo, and verification
invariants. It does not change MASTER_PLAN.md or a HARD Invariant.

### DEC-0012 — Place the Demo repository beside the training repository

Status:
ACCEPTED

Date:
2026-09-27

## Context

DEC-0011 selected a separate purpose-built `ai-dev-training-demo` repository
and deferred its exact local path. The user accepted the recommendation to
keep the two repositories adjacent in the current workspace.

## Problem

Choose a local checkout location that keeps the planning repository and the
educational Demo easy to navigate while preserving their separate Git state.

## Decision

Place the Demo repository at `../ai-dev-training-demo`, relative to the
`ai-dev-training` repository root. In the current workspace this resolves to
`/Users/noah/workspace/education/ai-dev-training-demo`. Keep it as an
independent Git repository, not a directory tracked inside `ai-dev-training`.
This decision selects the local path only; the Demo repository and its remote
are not created or configured until STEP 07 is explicitly started.

Keep Demo specifications, Story mappings, and runbooks in `ai-dev-training`.
When implementation begins, connect those plans to the Demo's actual Git
state through explicit commit or tag references rather than copying the Demo
repository into this one.

## Rationale

A sibling location keeps both checkouts convenient to inspect in one
workspace. Independent Git histories preserve the boundary between the
Training Production Harness and Educational Demo Harness and allow the Demo
to use its own state transitions.

## Alternatives Considered

### Alternative A — Track the Demo under `ai-dev-training/demos/`

Advantages:

One checkout would contain both plans and Demo files.

Disadvantages:

The Demo would share the training repository's history and reset boundary,
weakening the separation already selected in DEC-0011 and INV-DEMO-001.

### Alternative B — Keep the separate repository elsewhere in the workspace

Advantages:

The repositories would remain independently versioned.

Disadvantages:

An unrelated location would make the Demo less convenient to find alongside
the project that specifies and presents it.

## Trade-offs

Gains:

- Side-by-side local access with independent Git histories.
- A clear filesystem boundary between training-production and educational
  Demo work.

Costs:

- Cross-repository changes cannot be committed atomically and need explicit
  commit or tag references when their relationship matters.

New risks:

- The selected absolute path reflects the current workspace; another machine
  may need an equivalent sibling location.

## Related Invariants

- INV-DEMO-001

## Affected Artifacts

- plan/DECISIONS.md and OQ-001
- plan/DEMO_ARCHITECTURE.md
- plan/DEMO_REPOSITORY_SPEC.md
- plan/DEMO_MATRIX.md
- plan/DEMO_RUNBOOK_SPEC.md where repository location is referenced
- Future `ai-dev-training-demo` repository, only after STEP 07 starts

## Evidence

- USER: accepted the sibling-directory recommendation on 2026-09-27.
- OBSERVATION: the current `ai-dev-training` checkout is at
  `/Users/noah/workspace/education/ai-dev-training`.
- DEC-0011: requires the Educational Demo Harness to remain separate from the
  Training Production Harness.

## Training Relevance

NO

Reason:

This is a repository placement choice, not a learner-facing example.

## Follow-up

When STEP 07 is explicitly started, create the separate repository at the
selected sibling path. Decide and configure its Git remote during that step;
its remote URL is not selected here.

## Supersedes

None

## Superseded By

None

## Approval

Accepted by the user's explicit confirmation on 2026-09-27. This supplements
DEC-0011 without changing the selected Demo, language, domain, environment,
or delivery strategy.

### DEC-0013 — Grow project context in AGENTS.md before separating it

Status:
ACCEPTED

Date:
2026-09-28

## Context

STATE-01 records the first concise root `AGENTS.md`. The earlier downstream
Demo plan placed STATE-02 facts in natural Project sources and made `AGENTS.md`
a Router in that same transition. The user's STEP 07 §§54–60 instruction
instead directs STATE-02 to grow verified Project context in `AGENTS.md`,
classify its relevance, and defer Context Separation.

## Problem

Show why a Developer may reasonably add useful Project knowledge after the
first successful reuse, then make task relevance the next question. Do not
manufacture irrelevant filler, a model failure, or a Lost-in-the-Middle
result.

## Decision

At STATE-02, add a small, source-checked set of reusable Project facts to the
root `AGENTS.md`. Keep Product code unchanged. Do not split Context into
separate documents, add Skills, or create a reusable workflow in STATE-02.
Record candidate facts and classify them as ALWAYS-ON, ON-DEMAND, or WORKFLOW
before implementation. Use a bounded task to observe which accurate facts
are relevant, not to require an Agent failure. Defer routing and Context
Separation to STATE-03.

## Rationale

This follows the user's explicit STATE-02 sequence and preserves the larger
Story: useful reuse first, natural growth next, then relevance and separation.
The content will be chosen from verified repository behavior rather than a
target line count.

## Alternatives Considered

- Add facts to their natural Project documents in STATE-02 and make
  `AGENTS.md` a Router immediately: superseded by the user's explicit
  STATE-02 direction; this would move Context Separation too early.
- Inflate `AGENTS.md` with arbitrary or unrelated rules: rejected because it
  would fabricate the problem and contradict the relevance invariant.
- Add benchmark steps or a Skill during growth: rejected because those are
  future workflows, not Project facts, and are outside STATE-02.

## Trade-offs

Gains:

- The State transition visibly accumulates accurate Project context.
- A later Task can show that some always-present facts are not needed for
  every request without depending on failure.

Costs:

- Some of the added context will not apply to every task.
- The separation and routing improvement is deferred to STATE-03.

## Related Invariants

- INV-MATURITY-002
- INV-MATURITY-003
- INV-MATURITY-004
- INV-NARRATIVE-002

## Affected Artifacts

- plan/DEMO_REPOSITORY_SPEC.md
- plan/DEMO_ARCHITECTURE.md
- plan/DEMO_MATRIX.md
- Future STATE-02 Demo runbook and Trial prompt

## Evidence

- USER: explicit STEP 07 §§54–60 instruction on 2026-09-28.
- Repository inspection: pipeline order, P2 and crop contracts, CLI summary
  fields, test layout, sample fixture, and unmeasured allocation candidates
  were checked in the current `STATE-01` repository.
- MASTER_PLAN §§5.3 and INV-MATURITY-002/003/004 preserve gradual context
  growth followed by relevance and separation; no governing invariant or
  `MASTER_PLAN.md` rule is changed.

## Training Relevance

YES

Reason:

The intentional transition makes the initial benefit of reusable project
instructions visible before showing the maintenance and relevance question.

## Follow-up

The user explicitly authorized STATE-02 on 2026-09-28. Its verified
`AGENTS.md` growth was committed at `55c045523ed1409449d7eea5b0d873983fe101b6`
and tagged `STATE-02`, without a remote push. TRIAL-004 evidence and the
proposed STATE-03 Context plan are recorded in `plan/DEMO_MATRIX.md`. The
user's later STEP 07 §§81–90 instruction authorized the STATE-03 candidate
and TRIAL-005A/005B. Their validation and evidence are recorded in the same
matrix. The user accepted `DEC-0014` in STEP 07 §92. STATE-03 is recorded at
commit
`f3e2e37b1454e28c5de4c44682ebd49378ebae4b` and tag `STATE-03`, without a
remote push.

## Supersedes

None

## Superseded By

None

### DEC-0014 — Structure STATE-03 Context as task-focused documents

Status:
ACCEPTED

Date:
2026-09-28

## Context

STATE-02 is recorded at commit
`55c045523ed1409449d7eea5b0d873983fe101b6` and tag `STATE-02`. Its verified
root `AGENTS.md` contains useful Project facts with different task scopes.
TRIAL-004 showed that the build-documentation task did not need the image,
pipeline, test-layout, or CLI-summary details, without causing confusion or
failure.

## Problem

Preserve a small always-on instruction core while making detailed Project
facts available when a task needs them. Keep the structure proportionate to
the small Demo repository and do not claim that file separation improves
model performance.

## Decision

Accept STATE-03 as a documentation-only Context reorganization:

- Keep Project purpose, local synthetic-data constraint, README Build/Run
  pointer, full-test entry point, and core behavior/dependency rules in root
  `AGENTS.md`.
- Add a concise Router from pipeline/module questions to
  `docs/architecture.md`, image and output-contract questions to
  `docs/image-contracts.md`, and test-layout questions to `docs/testing.md`.
- Move each verified detail to one topic document without duplicating or
  changing its meaning.
- Keep only minimal focused-test guidance; do not add a workflow document or
  Skill in STATE-03.
- Do not change product code, tests, dependencies, or README unless evidence
  later shows a routing reference there is necessary.
- Treat this as an Engineering Pattern for Context scope, maintenance, and
  discovery, not as a mechanism that guarantees perfect selective loading.

The candidate structure and Trial prompts are specified in
`plan/DEMO_MATRIX.md`. User approval was explicit in STEP 07 §92 on
2026-09-29; the bounded Trial evidence and claim limits are recorded there.

## Rationale

Three short documents align with three distinct retrieval questions:
component flow, image behavior, and test navigation. They make the
STATE-02 Context scopes inspectable while preserving one concise entry point.

## Alternatives Considered

- Keep all detail in `AGENTS.md`: rejected for STATE-03 because it does not
  address the observed mix of task scopes.
- Put all detail in one `docs/project-context.md`: fewer files, but it keeps
  unrelated architecture, image contract, and test topics together.
- Use two documents: lower file count, but one document would combine
  architecture with image behavior or testing with implementation details.
- Create separate files for every small fact: rejected because it would
  add navigation overhead without a distinct topic need.

## Trade-offs

Gains:

- Keeps always-on instructions smaller and offers explicit topic routes.
- Makes the source and scope of detailed Project facts easier to maintain.

Costs:

- Adds three short documents and requires their facts to stay aligned with
  source code and tests.
- The bounded CLI Trials showed task-relevant image-contract access differed,
  while both tasks also read the architecture document. This is not a routing
  guarantee or a measured performance effect.

## Related Invariants

- INV-MATURITY-002
- INV-MATURITY-003
- INV-MATURITY-004
- INV-NARRATIVE-002
- INV-DEMO-001

## Affected Artifacts

- Demo root `AGENTS.md`
- Candidate `docs/architecture.md`
- Candidate `docs/image-contracts.md`
- Candidate `docs/testing.md`
- `plan/DEMO_MATRIX.md`
- `plan/DEMO_REPOSITORY_SPEC.md`
- `plan/DEMO_ARCHITECTURE.md`

## Evidence

- USER: STEP 07 §§73–80, received 2026-09-28.
- USER: STEP 07 §§81–90 authorized the candidate and Trials, received
  2026-09-28.
- STATE-02 commit/tag and required validation are recorded in
  `plan/DEMO_MATRIX.md`.
- TRIAL-004 is one bounded Codex CLI observation; it does not establish
  failure, confusion, or a performance effect.
- STATE-03 validation and TRIAL-005A/005B access observations are recorded
  in `plan/DEMO_MATRIX.md`; they do not establish performance improvement or
  general routing behavior.

## Training Relevance

YES

Reason:

The reorganization is the next Context Engineering step after observing that
accurate Project facts have different task scopes.

## Follow-up

The user explicitly authorized the STATE-03 candidate and TRIAL-005A/005B in
STEP 07 §§81–90 on 2026-09-28. The candidate passed repository validation and
both read-only Codex CLI Trials completed; evidence is recorded in
`plan/DEMO_MATRIX.md`. The user accepted the Context architecture in STEP 07
§92 on 2026-09-29. STATE-03 is recorded at commit
`f3e2e37b1454e28c5de4c44682ebd49378ebae4b` and tag `STATE-03`, without a
remote push. No STATE-04 work is included in this Decision.

## Supersedes

None

## Superseded By

None

## Supersedes

None

## Superseded By

None

## Approval

Accepted by the user's explicit STEP 07 §92 instruction on 2026-09-29. This
accepts the Context architecture and its bounded claim; it does not assert
perfect routing or measured performance gains.

Accepted by the user's explicit STEP 07 §§54–60 instruction on 2026-09-28.
This refines the downstream Demo state sequence without changing
`MASTER_PLAN.md` or a HARD Invariant.

### DEC-0015 — Select the resize scenario and measurement baseline

Status:
SUPERSEDED

Date:
2026-09-29

This record preserves the original scenario-selection and benchmark
preparation history. DEC-0019 supersedes only the product-change target for
STATE-04-PERF; the resize benchmark and its preparation decision remain
applicable as supporting measurement infrastructure.

## Context

The STEP 07 §§94–100 temporary Trial compared three source-grounded
performance candidates against the STATE-03 implementation. The resize
source-column coordinate candidate showed the clearest measured effect while
preserving output across the tested synthetic shapes. The Trial evidence and
claim boundaries are in `plan/DEMO_MATRIX.md`.

## Problem

Choose one main Performance Scenario and give later work a deterministic
Project-owned measurement tool. The benchmark must establish a real baseline
without mixing in an optimization, a reusable Harness procedure, or a
third-party dependency.

## Decision

- Select repeated source-column coordinate computation in
  `resize_nearest` as the primary Performance Scenario.
- Keep the statistics-list and normalization-constant candidates as
  supporting research. Do not mark either rejected: statistics trades lower
  temporary allocation for slower execution in the Trial, and normalization
  remains a valid but secondary candidate.
- Add a standard-library-only `benchmarks/benchmark_resize.py` with
  deterministic synthetic input, a correctness guard, repeated timing,
  median, sample range, and invocation runtime.
- Record this tool as a STATE-03-to-STATE-04 preparation commit, not as a
  separately named educational State. Do not add a state tag for the tool.
  Keep STATE-04 for the reusable performance procedure and STATE-04-PERF for
  the later evidence-backed product-code change.
- Record benchmark numbers as observations for the stated machine, runtime,
  implementation, and synthetic input; do not generalize them.

The user explicitly selected the primary scenario and authorized the
benchmark implementation in STEP 07 §§101–110. This decision does not create
STATE-04 or authorize the optimization or Performance Workflow Trial.

## Rationale

Precomputing output-column mappings removes repeated arithmetic across image
rows. The code is understandable without image-processing theory, the
prototype has a small diff, its output matched the baseline, and the measured
effect was well above the sample spread. A measurement tool establishes the
baseline needed for a later before/after comparison. Treating it as a
preparation commit preserves the existing Story: the reusable procedure
remains the next Harness change and the code optimization remains separate.

## Alternatives Considered

### Alternative A — Add a separately named benchmark State

Advantages:

- Makes the benchmark instrument visible as a discrete repository revision.

Disadvantages:

- Adds a learner-facing state without introducing the planned reusable
  workflow or a performance behavior change.
- Fragments the existing STATE-03 → STATE-04 → STATE-04-PERF sequence.

### Alternative B — Defer the benchmark tool until the workflow change

Advantages:

- Fewer preparatory commits.

Disadvantages:

- Leaves the baseline dependent on ad hoc measurement and prevents validating
  that the selected workload and output are stable before the workflow Trial.

## Trade-offs

Gains:

- Creates one deterministic, dependency-free baseline command and separates
  measurement from the later workflow and optimization.
- Keeps the existing named State Model and preserves candidate evidence.

Costs:

- Adds a small preparation commit that is not itself a named teaching State.
- The expected timing remains machine- and workload-specific and requires
  remeasurement in the classroom environment.

New risks:

- A checksum guard may need an intentional update if the image contract or
  deterministic input changes. Such a change must be reviewed against the
  correctness tests.

## Related Invariants

- INV-DEMO-001
- INV-DEMO-004
- INV-VERIFY-001

## Affected Artifacts

- `ai-dev-training-demo/benchmarks/benchmark_resize.py`
- `ai-dev-training-demo/README.md`
- `plan/DEMO_MATRIX.md`
- `plan/DEMO_REPOSITORY_SPEC.md`
- `plan/DEMO_ARCHITECTURE.md`

## Evidence

- USER: STEP 07 §§101–110, received 2026-09-29; selects resize as the main
  scenario, keeps the other findings as supporting research, and authorizes
  the benchmark baseline implementation.
- DEMO: temporary benchmark Trial recorded in `plan/DEMO_MATRIX.md`: for the
  stated input and host, resize changed from 148.827 ms to 35.139 ms median;
  output matched on the benchmark input and five additional shape pairs; the
  focused transform tests passed 3/3.
- OBSERVATION: STATE-03 State Model assigns the reusable procedure to
  STATE-04 and the later product-code optimization to STATE-04-PERF.

## Training Relevance

YES

Reason:

The baseline tool makes the measurement behind a later performance workflow
visible and supports Generated ≠ Done by pairing timing with correctness.

## Follow-up

The baseline tool and README command were committed as preparation commit
`cef7a27697d38667530fe028e7c2a1ed4703714b` after the STATE-03 tag, without a
new State tag or remote push. The 11-test suite, CLI smoke, checksum guard, and
three independent benchmark invocations passed; see `plan/DEMO_MATRIX.md`.
The resize optimization, reusable workflow, and Performance Workflow Trial
remain for later instructions. No Skill or STATE-04 was created.

## Supersedes

None

## Superseded By

DEC-0019 — replaces the selected STATE-04-PERF product-change target only;
the resize benchmark and its original preparation rationale remain in force.

## Approval

Accepted by the user's explicit STEP 07 §§101–110 instruction on 2026-09-29.
The preparation-commit choice preserves the existing named state transitions
and does not change `MASTER_PLAN.md` or a HARD Invariant.

### DEC-0016 — Reframe the Demo development and learner environments

Status:
ACCEPTED

Date:
2026-09-29

## Context

DEC-0011 recorded the then-current macOS/Codex Desktop environment for primary
implementation and validation. After TRIAL-006, the §§121–130 environment
audit recommended a dedicated macOS user because global Skills and plugin
hooks were available in the current CLI environment. The user clarified that
macOS is only the current production/validation host, learners are primarily
Windows-based, and global Harness influence does not require a clean-room
trial.

## Problem

Keep the author's machine from becoming an assumed learner requirement. Also
separate OS portability from the influence that global instructions, Skills,
plugins, hooks, MCP, and configuration may have on a Trial. Do not turn a
Prompt-only causal experiment into a prerequisite for observing Workflow
repetition.

## Decision

- Treat macOS as the current development and partial automated-validation
  host only. Do not make macOS-specific setup, users, or workflows a course
  requirement. Do not create a dedicated macOS account.
- Treat the learner environment as primarily Windows-based. Keep the WSL vs
  native Windows split, IDE, shell, and exact Codex interface open under
  OQ-003 until confirmed; do not infer them.
- Keep `ai-dev-training-demo` OS-independent where practical, using Python,
  standard-library-first code, local synthetic data, and no external service.
  Record current macOS benchmark values only as observations from that host.
- Treat global instructions, Skills, plugins, hooks, MCP, and configuration
  as possible global Harness influence. Preserve this as an Advanced Insight
  candidate after Harness Engineering; do not move it into Prompt
  Engineering.
- Frame the teaching candidate as an Agent Environment composed of
  repository instructions, global instructions, Skills, plugins, hooks, MCP,
  permissions, and model/configuration.
- Keep TRIAL-006 as PARTIAL evidence: retain its local correctness,
  measurement, and observed workflow evidence, but make no Prompt-only
  attribution claim. A Prompt-only controlled causal experiment is not a
  STEP 07 blocker.
- Continue considering `normalize` constant precomputation as the second
  Performance Task. If a CLI Trial is run, record global Harness components
  loaded or observed; mark attribution PARTIAL if they prevent a claim. Judge
  Workflow repetition from the task structure and observed procedure.
- Perform Codex Desktop Demo validation during Final Demo Rehearsal. Recheck
  only the Final Anchor in the actual presentation interface; consider a
  Windows rehearsal if that is the confirmed training environment.

## Rationale

The course must transfer to the developers' Windows-centric environment,
while the author can continue making progress on the available macOS host.
TRIAL-006 already preserves the useful evidence and its attribution limit.
Requiring OS-level isolation would conflate a local Harness influence with an
OS requirement and would delay the next task without answering a necessary
course question.

## Alternatives Considered

- Create a dedicated macOS user and require a clean global-Harness preflight:
  rejected by the user's explicit instruction; it does not establish the
  learner's Windows environment and is not needed for Workflow-repetition
  evidence.
- Create a Prompt-only A/B trial after removing personal Skills: deferred;
  Prompt causality is not the STEP 07 research objective.
- Treat TRIAL-006 as clean Prompt-only evidence: rejected because global
  Skills and plugin hooks were observed.
- Stop validation until Windows details are known: rejected for current
  repository work; preserve unknown audience details as Open Questions and
  defer interface-specific rehearsal.

## Trade-offs

Gains:

- Prevents the current host from being confused with the learner target.
- Allows the second Performance Task to proceed while preserving explicit
  evidence limits.
- Retains global Harness influence as a later, correctly placed teaching
  insight.

Costs:

- Does not establish Prompt-only causal effects or exact Windows behavior.
- Final interface and Windows-specific rehearsal remain future work.

## Related Invariants

- INV-AUDIENCE-001
- INV-MATURITY-005
- INV-MATURITY-009
- INV-MATURITY-010
- INV-DEMO-001
- INV-VERIFY-001

## Affected Artifacts

- `plan/DECISIONS.md`
- `plan/DEMO_ARCHITECTURE.md`
- `plan/DEMO_REPOSITORY_SPEC.md`
- `plan/DEMO_MATRIX.md`
- Future second Performance Task Trial and Final Demo Rehearsal

## Evidence

- USER: environment Decision revision received 2026-09-29.
- TRIAL-006: local correctness and measurement observations are preserved;
  four global Skills were loaded, plugin hook warnings appeared, and MCP
  startup failures were logged without an MCP tool call in the event log.
- `plan/DEMO_MATRIX.md` §§121–130: point-in-time environment inventory and
  prior isolation recommendation, now explicitly superseded for current
  project direction.

## Training Relevance

YES

Reason:

The discovered gap between repository instructions and the full Agent
environment is an Advanced Insight for after Harness Engineering.

## Follow-up

Keep WSL/native Windows, IDE, shell, and exact Codex interface open in OQ-003.
Continue development and suitable automated validation on macOS. Do not
create a user account, change global configuration, create a Skill or
STATE-04, or run the second Trial as part of this documentation update.

## Supersedes

The environment/primary implementation clause of DEC-0011 only. All other
DEC-0011 selections remain ACCEPTED. The dedicated macOS user recommendation
in OQ-015 and the environment audit is withdrawn; it was not an accepted
Decision.

## Superseded By

None

## Approval

Accepted by the user's explicit environment Decision revision on 2026-09-29.
This updates the environment interpretation without changing `MASTER_PLAN.md`
or a HARD Invariant.

### DEC-0017 — Use a repository-owned Skill for repeated performance work

Status:
ACCEPTED

Date:
2026-09-30

## Context

TRIAL-006 applied a performance investigation to `resize_nearest`; TRIAL-007
applied the same observable procedure to `normalize`, a distinct code path.
The earlier planning checkpoint treated a product Skill as conditional and
proposed a standalone workflow document. The user has now selected a
repository-owned Codex Skill as the procedure's implementation and source of
truth.

## Problem

Choose one maintained home for the repeatable procedure while keeping
project-specific facts and each task's objective and constraints in their
appropriate layers. Do not create a second document with the same procedure,
or turn the decision into an unsupported comparison between Skills and
Prompts.

## Decision

- Use `ai-dev-training-demo/.agents/skills/graypipe-performance/SKILL.md` as
  the sole repository-owned source for the repeated performance procedure.
- Do not create `workflows/performance-investigation.md` or another duplicate
  workflow document.
- Keep project facts, contracts, and commands in `AGENTS.md`, `README.md`, and
  maintained Project documentation. Keep the reusable procedure in the Skill.
  Keep the specific goal, constraints, and acceptance criteria in each task
  Prompt without repeating the procedure.
- Treat the Skill choice as an implementation decision about separating a
  repeated procedure from a task Prompt. It is not a claim that Skills are
  superior to Prompts.
- Add the deterministic statistics benchmark as a separate preparation
  change before the Skill. This benchmark preparation is not STATE-04 and does
  not include a product optimization.
- Keep the Story and named transitions intact: STATE-04 adds the reusable
  procedure; STATE-04-PERF remains the later measured product-code change.
- Follow the current official Skill format. OpenAI's current
  [Build skills documentation](https://learn.chatgpt.com/docs/build-skills)
  specifies repository Skills under `.agents/skills`, requires `name` and
  `description` in `SKILL.md`, and describes progressive discovery from the
  metadata to the full file. At Decision time, actual discovery/loading on the
  selected Demo surface remained unverified; TRIAL-008 later observed it in
  Codex CLI 0.154.0, while Desktop behavior remains open.

## Rationale

The procedure recurred across two separate performance paths, so a
repository-owned reusable unit now has an evidenced purpose. A Codex Skill is
the user-selected current mechanism and puts the procedure beside the Project
that owns it. A single source avoids drift between a workflow file and a Skill.
Separating project facts, reusable procedure, and task-specific goals also
makes clear what the repository already supplies and what each new task must
still state.

## Alternatives Considered

- Keep both a standalone workflow document and a Skill: rejected because the
  same procedure would have two sources that could drift.
- Repeat the full procedure in each performance task Prompt: rejected in favor
  of the user's decision to separate the recurring method from each task.
- Use a global Skill or plugin as the source: not selected because this
  Decision makes the Demo repository the owner of the reusable procedure.
- Claim that a Skill performs better than a Prompt: not evaluated and not part
  of this Decision.

## Trade-offs

Gains:

- Gives repeated performance guidance one repository-owned source.
- Keeps the task Prompt focused on the current goal, constraints, and evidence.
- Uses an official format designed to package reusable workflows.

Costs:

- Discovery and loading evidence is surface-specific: CLI behavior was
  observed in TRIAL-008; Desktop behavior still needs validation.
- Project documentation continues to be the source for changing project facts;
  the Skill must refer to it rather than copy it.

## Related Invariants

- INV-MATURITY-006
- INV-DEMO-001
- INV-VERIFY-001

## Affected Artifacts

- `plan/DECISIONS.md`
- `plan/DEMO_ARCHITECTURE.md`
- `plan/DEMO_REPOSITORY_SPEC.md`
- `plan/DEMO_MATRIX.md`
- `ai-dev-training-demo/README.md`
- `ai-dev-training-demo/benchmarks/benchmark_statistics.py`
- `ai-dev-training-demo/.agents/skills/graypipe-performance/SKILL.md`

## Evidence

- USER: STEP 07 §§151–160, received 2026-09-30; selects the Skill as the
  repeated procedure source, requests a separate statistics benchmark, and
  explicitly defers TRIAL-008, a STATE-04 commit/tag, product optimization,
  implicit invocation testing, and remote push.
- TRIAL-006 and TRIAL-007: the same performance investigation procedure was
  used on distinct code paths. Detailed observations and attribution limits
  remain in `plan/DEMO_MATRIX.md`.
- OpenAI: [Build skills documentation](https://learn.chatgpt.com/docs/build-skills),
  checked 2026-09-30, documents the current Skill structure and repository
  discovery path. It supports the implementation format; it does not prove
  discovery or loading in the selected Demo surface.
- Demo benchmark preparation: commit
  `4ad32b9175055818e89b66e6a44d4e3c8d6fab4b`, with three independent
  correctness-guarded statistics benchmark invocations.
- USER: STEP 07 §§161–180, received 2026-09-30; fixes TRIAL-008 evidence,
  authorizes the local STATE-04 Skill-only commit and tag, requires explicit
  evaluation of complex-task candidates before any Subagent, and prohibits
  remote push or copying the Trial's statistics optimization into the
  original Demo.
- TRIAL-008: explicit repository Skill discovery/invocation, instruction-body
  evidence, and workflow reuse passed on Codex CLI 0.154.0. Its candidate
  comparison found row reductions faster with substantially lower traced
  Python allocation, while a manual single pass was much slower. Keep those
  task-specific findings separate from the Skill attribution.
- STATE-04: commit `822f1c12c5f602d934a2fd29e48f05bf498b4bfa`, tag
  `STATE-04`; the commit adds only the repository-owned Skill. The complete
  validation record is in `plan/DEMO_MATRIX.md`.

## Training Relevance

YES

Reason:

The decision responds to repeated workflow friction and teaches separation
between project context, a reusable procedure, and a task-specific Prompt.
The format choice itself is not presented as a universal recommendation.

## Follow-up

TRIAL-008 was authorized by STEP 07 §§161–170 and is recorded in
`plan/DEMO_MATRIX.md`. It passed for explicit repository Skill discovery,
invocation, instruction-body evidence, and workflow reuse on Codex CLI 0.154.0.
Codex Desktop behavior, implicit invocation, and Skill-versus-Prompt
superiority remain unverified. STEP 07 §§171–180 then authorized the local
Skill-only STATE-04 commit `822f1c12c5f602d934a2fd29e48f05bf498b4bfa` and tag
`STATE-04`. The tag points to that commit. No remote push occurred, and the
statistics optimization was not copied into the original Demo repository.
Evaluate actual repository complexity before introducing any Subagent.

## Supersedes

The earlier conditional recommendation to keep a standalone repository
procedure and make product Skills optional in the prior STEP 07 checkpoint.
It does not supersede the performance Story, user-facing task requirements,
or the named STATE-04 / STATE-04-PERF separation.

## Superseded By

None

## Approval

Accepted by the user's explicit STEP 07 §§151–160 decision on 2026-09-30.
This changes the selected implementation mechanism and documentation only; it
does not change `MASTER_PLAN.md`, a HARD Invariant, or the Story.

### DEC-0018 — Defer Subagents until project complexity justifies them

Status:
ACCEPTED

Date:
2026-09-30

## Context

STATE-04 establishes the repository-owned performance Skill as a reusable
workflow. STEP 07 §§171–180 reviewed three candidate complex tasks (A/B/C)
before adding any Subagent. The user then directed a Trial-history audit and
asked that Subagent and Memory decisions reflect observed project needs.

## Problem

Decide whether the current Demo repository needs role-separated Agent work,
and record how that project-specific result changes the Demo while preserving
the Curriculum's conditional, conceptual explanation of Subagents.

## Decision

- Do not add a Subagent to the primary Demo repository at STATE-04.
- Keep `DEMO-07` **DEFERRED — NOT JUSTIFIED AT STATE-04**. It is not a primary
  Live Anchor or a supporting Live Demo. If a future explanation still helps,
  use a visual or captured external/conceptual case.
- Preserve the Curriculum Story that sufficiently complex projects may benefit
  from role and Context separation. Do not portray that conceptual case as an
  implementation or Trial outcome in this repository.
- Reconsider only when a real project task demonstrates enough independent
  investigation/context needs that one Agent is difficult to manage and the
  likely benefit exceeds duplicate work, handoff, coordination, and
  integration costs.

This Decision does not claim that Subagents are generally unhelpful, does not
change the Course's conceptual Story, and does not create STATE-05.

## Rationale

The repository is small. Candidates A/B/C are each feasible for one Agent;
their role-specific evidence overlaps, no candidate establishes a strong
Context-isolation need, and parallel investigation has little demonstrated
value. Separate work would repeat repository reads and add context transfer
and synthesis effort. Adding a mechanism without a concrete problem would
violate the Minimum Effective Harness principle and turn the Demo into a
feature checklist.

## Alternatives Considered

### Alternative A — Implement or simulate Subagents in the primary Demo

Advantages:

- Would produce a direct example of role-separated work.

Disadvantages:

- The current candidates do not need separate agents; simulation would add
  complexity without evidence of a product or task benefit.
- It would blur the distinction between the Curriculum's conceptual Story
  and what the primary repository actually demonstrates.

### Alternative B — Remove the Subagent concept from the Curriculum

Advantages:

- Would remove a supporting example that the current Demo cannot implement.

Disadvantages:

- The Conceptual Curriculum Story can still explain when role/context
  separation may help in a sufficiently complex project.
- It would discard a conditional insight even though the user selected an
  evidence-gated approach, not a general rejection.

## Trade-offs

Gains:

- Keeps the primary Demo honest about the complexity it has actually shown.
- Avoids coordination work that has no demonstrated value at STATE-04.
- Preserves an optional conceptual teaching moment about minimum effective
  structure.

Costs:

- There is no Subagent product interaction or primary repository result to
  show; the supporting explanation must remain conceptual or visual.

New risks:

- A later project evolution could make role separation valuable. Recheck the
  gate against an actual task instead of treating this state-specific
  decision as permanent.

## Related Invariants

- INV-MATURITY-005
- INV-MATURITY-007
- INV-MATURITY-009
- INV-DEMO-001
- INV-VERIFY-001

## Affected Artifacts

- `plan/DECISIONS.md`
- `plan/DEMO_MATRIX.md`
- `plan/DEMO_ARCHITECTURE.md`
- `plan/DEMO_REPOSITORY_SPEC.md`
- `plan/STORY_ARCHITECTURE.md`

## Evidence

- USER: explicit STEP 07 §§181–183 and §§190 instruction received
  2026-09-30; directs the STATE-04 decision, conceptual/primary Story split,
  and deferred status for `DEMO-07`.
- DEMO: Candidate A/B/C assessment in `plan/DEMO_MATRIX.md` §§171–180 found
  each task feasible for one Agent, with limited role separation and
  parallelism value and material coordination cost.
- DEMO: STATE-04 commit `822f1c12c5f602d934a2fd29e48f05bf498b4bfa` contains
  the Skill only; no Subagent was created or used.
- INVARIANT: `INV-MATURITY-007` requires balancing role-separation benefit
  with coordination, duplicate work, context transfer, and integration cost.
- INVARIANT: `INV-MATURITY-009` and `INV-DEMO-001` preserve problem-led
  Harness growth and one evolving primary Demo.

## Training Relevance

YES

Reason:

The result demonstrates that role separation is conditional on actual task
complexity; an absent mechanism can itself be a useful Minimum Effective
Harness teaching moment.

## Follow-up

`DEMO-07` remains deferred at STATE-04. Do not create a Subagent artifact or
STATE-05 for this result. Reassess after a real task or Project change creates
independent investigation needs that cannot be handled clearly by one Agent.
The detailed Trial audit and Memory assessment are in
`plan/DEMO_MATRIX.md`. No `MASTER_PLAN.md` or Invariant change is requested.

## Supersedes

The current-repository Subagent candidate status in DEC-0008 and the earlier
STEP 06 / STATE-04 proposal to show a captured Subagent result. It does not
supersede the conceptual Curriculum Story, the conditional Subagent teaching
candidate, or the Invariants.

## Superseded By

None

## Approval

Accepted by the user's explicit STEP 07 §§181–183 instruction on 2026-09-30.
The decision changes the current Demo selection and its evidence record; it
does not change `MASTER_PLAN.md`, a HARD Invariant, or the conceptual
Curriculum Story.

### DEC-0019 — Promote the `image_statistics` candidate to STATE-04-PERF

Status:
ACCEPTED

Date:
2026-09-30

## Context

STATE-04 established the repository-owned performance Skill and left product
code unchanged. TRIAL-008 compared statistics implementations and identified
row-level built-in reductions as a candidate, but its temporary code was not
copied into the original Demo. The user then directed a fresh re-investigation
from the STATE-04 baseline and authorized this product transition.

## Problem

Choose the product change for STATE-04-PERF while preserving the six-field
statistics behavior, API, CLI output, error behavior, and dependency set.
The existing DEC-0015 primary target was resize source-column precomputation;
the latest explicit instruction selects the `image_statistics` candidate for
this transition.

## Decision

- Promote the re-investigated `image_statistics` row-reduction candidate to
  the formal product history as STATE-04-PERF.
- Remove the flattened pixel list, derive the pixel count from validated
  image dimensions, and use built-in row-level reductions for minimum,
  maximum, and sum.
- Keep the resize benchmark, inputs, repetitions, and correctness guard
  unchanged as a supporting check. Do not optimize resize or normalization,
  refactor unrelated modules, or add dependencies.
- Require focused and full tests, both benchmark guards, CLI smoke, diff
  check, and final scope review before recording the State.
- Keep the product-only commit `6153b81c0187dd7d82c88bd1817fb683c98eb431`
  and tag `STATE-04-PERF` local. Preserve the `STATE-04` tag and do not push.
- Treat DEC-0015's original resize candidate as superseded only for this
  product-change target. Its resize benchmark preparation decision remains
  valid.

## Rationale

The user explicitly directed STATE-04-PERF to promote the TRIAL-008
`image_statistics` change, while requiring that it be re-investigated from a
new STATE-04 measurement instead of blindly copied. The flattened list was
visible in the current implementation and accounted for most of the measured
Python allocation peak. The minimal row-reduction change kept the public
summary intact, passed the exact six-field benchmark guard and all 11 tests,
and produced non-overlapping before/after timing ranges in the same measured
environment. The formal State therefore records the actual result, not
TRIAL-008's prior percentage as a target.

## Alternatives Considered

### Alternative A — Keep resize as the product-change target

Advantages:

- Preserves DEC-0015's original primary scenario without changing the target.

Disadvantages:

- Would not fulfill the user's latest explicit direction to promote the
  verified statistics candidate to STATE-04-PERF.

### Alternative B — Make no product change

Advantages:

- Avoids introducing a product commit if the fresh evidence fails to justify
  or verify the candidate.

Disadvantages:

- After the requested checks passed, this would leave the authorized
  STATE-04-PERF product transition unrecorded.

## Trade-offs

Gains:

- Promotes a previously temporary but measured candidate into the formal
  product history using a fresh baseline and verification.
- Keeps the benchmark and Skill unchanged, making the product change a
  distinct result of the existing Harness.

Costs:

- The runtime and allocation result is specific to one synthetic workload,
  CPython version, and host; classroom conditions require remeasurement.
- The resize target is no longer the selected product change in this
  transition, though its benchmark remains useful as a supporting check.

New risks:

- Future image representation or benchmark changes can alter the measured
  benefit; keep correctness guards authoritative and remeasure after changes.

## Related Invariants

- INV-DEMO-001
- INV-DEMO-004
- INV-VERIFY-001

## Affected Artifacts

- `ai-dev-training-demo/src/graypipe/statistics.py`
- `ai-dev-training-demo` Git history and `STATE-04-PERF` tag
- `plan/DECISIONS.md`
- `plan/DEMO_ARCHITECTURE.md`
- `plan/DEMO_MATRIX.md`
- `plan/DEMO_REPOSITORY_SPEC.md`

## Evidence

- USER: explicit STEP 07 §§191–200 instruction received 2026-09-30; selects
  `image_statistics`, requires fresh STATE-04 baseline measurement, defines
  the minimum checks and seven audit questions, authorizes a local
  product-only commit/tag after successful verification, and prohibits push
  or work beyond STATE-04-PERF.
- DEMO: clean baseline commit/tag `822f1c12c5f602d934a2fd29e48f05bf498b4bfa`
  / `STATE-04`; statistics median 15.468 ms/call, range 15.014–16.341 ms,
  and `tracemalloc` peak 6,675,804 bytes on CPython 3.9.6 / macOS 26.6.2
  arm64.
- DEMO: after-change median 10.769 ms/call, range 10.042–11.237 ms, and
  `tracemalloc` peak 380 bytes using the same input and procedure; the input
  fingerprint and all six statistics fields matched.
- DEMO: focused test 1/1, full suite 11/11, statistics and resize benchmark
  correctness guards, CLI smoke, `git diff HEAD^ HEAD --check`, and final
  one-file diff review passed. Full samples and scope limitations are in
  `plan/DEMO_MATRIX.md`.
- GIT: product-only commit `6153b81c0187dd7d82c88bd1817fb683c98eb431`,
  tagged `STATE-04-PERF`; `STATE-04` remains unchanged and no remote push was
  performed.

## Training Relevance

YES

Reason:

This is the evidence that a useful Harness can complete a bounded task: the
Project Context, routing, reusable procedure, deterministic benchmark, and
Tests support a verified Product Change before the Story introduces a new
Project Evolution problem.

## Follow-up

Preserve the **Working Harness Success** beat. In the next instruction,
investigate a real Project Evolution that could make a previously correct
performance Skill stale. Do not implement that change, create a stale Skill,
demonstrate Harness failure, begin Loop Engineering, or create STATE-05 until
the next task authorizes and specifies it. Subagents and Memory remain
unjustified for the present task.

## Supersedes

DEC-0015's selection of `resize_nearest` as the product-change target for
STATE-04-PERF. It does not supersede DEC-0015's resize benchmark preparation,
measurement controls, or State-separation decision. It does not change
`MASTER_PLAN.md`, a HARD Invariant, or the conceptual Curriculum Story.

## Superseded By

None

## Approval

Accepted by the user's explicit STEP 07 §§191–200 instruction on 2026-09-30.
All required verification passed before the product-only commit and tag.

### DEC-0020 — Defer Project Evolution implementation pending a qualifying candidate

Status:
PROPOSED

Date:
2026-10-01

## Context

STATE-04-PERF now establishes a verified Working Harness Success. The
STEP 07 §§201–210 instruction asks for a Project-side reason to precede any
future staleness and for one clear old Harness artifact to map to that
change. Five candidate types were compared against the current Demo source,
Project docs, and `graypipe-performance` Skill.

## Problem

Decide whether the current Project supports an implementation-ready change
that is independently reasonable as Product / Project work and can make one
previously correct Harness artifact stale without manufacturing a Failure.

## Decision

**Proposal: do not implement Candidates A–E yet.** None currently satisfies
both gates. The current Performance Skill does not hard-code benchmark
filenames, test paths, test runners, or benchmark output schema; it discovers
commands and test locations from Project sources. If those sources are
updated with a valid Project change, the Skill can remain correct. Candidate
B also lacks a present test-growth justification: the current suite has 11
tests in six modules, including one pipeline integration test.

Keep the accepted Harness-staleness Story direction as a design constraint,
but require a better-supported candidate or additional Project evidence
before implementation. Do not change Project code, Skills, instructions,
benchmarks, tests, or Harness artifacts as part of this candidate review.

## Rationale

Candidate A has visible shared benchmark-reporting code but no recorded
maintenance friction, and the generic Skill discovers the current README
command. Candidate B has clear test-map references but current test volume
does not justify restructuring, and the Skill discovers current test
locations. Candidate C has no product request and affects several sources.
Candidate D has no machine-readable consumer and the Skill does not pin a
serialization format. Candidate E has a plausible cross-platform rationale,
but exact learner shell/setup remains open under DEC-0016/OQ-003, while the
Skill delegates commands to Project docs. Selecting one solely because it
may cause staleness would reverse the required Project-first order.

## Alternatives Considered

### Alternative A — Implement the current test-layout scenario

Advantages:

- A deliberately invalidated test location or command could be easy to
  diagnose and evaluate.

Disadvantages:

- Eleven tests across six modules do not establish a current need for a
  directory or runner migration. The Skill itself remains dynamic and would
  not naturally become stale.

### Alternative B — Unify the benchmark commands now

Advantages:

- Two benchmark scripts share timing and report structure, so a common entry
  point could reduce future maintenance.

Disadvantages:

- No current maintenance problem is recorded, and the Skill explicitly
  discovers the current benchmark command from maintained Project sources.
  It would not create the planned stale-Skill evidence.

Other Candidates C–E and their artifact mappings are recorded in
`plan/DEMO_MATRIX.md`; none currently clears both gates.

## Trade-offs

Gains:

- Preserves the working STATE-04-PERF success and prevents an artificial
  Project change or outdated artifact.
- Makes the evidence gap explicit before any implementation or Failure Trial.

Costs:

- The stale-Harness transition is not ready to implement; a better candidate
  or new Project evidence is needed.

New risks:

- A future candidate may change more than one artifact. Re-run the stale
  mapping when an independently justified Project change is available.

## Related Invariants

- INV-NARRATIVE-002
- INV-MATURITY-006
- INV-MATURITY-010
- INV-DEMO-001
- INV-DEMO-002
- INV-VERIFY-001

## Affected Artifacts

- `plan/DECISIONS.md`
- `plan/DEMO_MATRIX.md`
- `plan/DEMO_REPOSITORY_SPEC.md`

## Evidence

- USER: explicit STEP 07 §§201–210 instruction received 2026-10-01; requires
  a Product-first change, evaluation of Candidates A–E, stale-artifact
  mapping, and no Project or Harness implementation in this stage.
- DEMO: STATE-04-PERF commit/tag
  `6153b81c0187dd7d82c88bd1817fb683c98eb431` remains the clean baseline.
- DEMO: current Test tree has 11 test methods in six modules: five focused
  modules and one pipeline integration module.
- DEMO: the repository Skill reads applicable project sources and discovers
  current measurement commands, test locations, and broad checks; it contains
  no hard-coded benchmark file, test file path, or test-runner command.
- EVALUATION: the five-candidate matrix and conditional artifact states are
  recorded in `plan/DEMO_MATRIX.md`. No candidate meets both gates without a
  stale artifact being retained for the purpose of producing failure.
- PLAN: the accepted stale-Harness Story direction is in
  `plan/DEMO_ARCHITECTURE.md`; this proposal does not supersede it and does
  not change `MASTER_PLAN.md` or an Invariant.

## Training Relevance

YES

Reason:

Rejecting an unsupported candidate protects the problem-driven Story and
teaches that Harness staleness must follow a real Project change rather than
be engineered first.

## Follow-up

Wait for a candidate with a concrete Project-side need. Before implementing
it, confirm one previously correct stale artifact, maintain the other
authoritative sources, and define a bounded evaluation/regression task. If
the stale artifact is no longer the Performance Skill, obtain approval for
that Story-level change before revising the accepted design.

## Supersedes

None

## Superseded By

None

## Approval

This is a PROPOSED assessment, not an approved Project change. It changes no
MASTER_PLAN content, HARD Invariant, accepted State, or product artifact.
Await the user's next instruction before implementation.

### DEC-0021 — Accept split Loop Demo evidence roles

Status:
ACCEPTED

Date:
2026-10-01

## Context

The STEP 06 history audit under OQ-013 found no sufficiently evidenced
production feedback Loop. Since then, actual Demo Trials, environment
correction, repository-state decisions, and the `STATE-04-PERF` working
Harness success have been recorded. The §§201–210 search found no justified
Product Evolution candidate that naturally makes the current Performance
Skill stale.

## Problem

Decide whether Loop Engineering must be implemented as an additional Git
state in the same software Demo repository, or whether actual Training
Production history can support the Loop while preserving the continuous
Product story and the prohibition on invented failures.

## Decision

**Separate ACT 4 Loop evidence into a conceptual stale-Harness case and a
factual Evaluation / Workflow Meta Case.** Keep the Primary Product Demo
continuous from `STATE-00` through its verified `STATE-04-PERF` endpoint. Use
TRIAL-006 → DEC-0016 → TRIAL-007 / TRIAL-008 as an authentic, supporting-only
example of a change to Training Production Trial-evaluation and reporting
rules. Do not claim that the Demo Product or `graypipe-performance` Skill
was changed or repaired.

Use `DEMO-04A` for a short VISUAL or CAPTURED CONTROLLED EXAMPLE of a
previously correct reusable workflow becoming stale after an independently
justified Project change. Label it conceptual; it is neither Demo repository
history nor Trial evidence. Use `DEMO-04B` for a captured timeline of
Candidate C. Keep the real Meta Case secondary to the Primary Product Story
and do not connect it causally to the conceptual case.

Distinguish all three teaching evidence types: observed Product Demo,
observed Meta Case, and conceptual controlled case. Use the same labels in
future Slides and Speaker Notes. Preserve the 22-minute ACT 4 Demo budget;
the internal slot estimate and the exact beat changes remain in
`plan/DEMO_MATRIX.md` pending the next Story / Demo Architecture update.
This Decision authorizes planning-document updates only, not Slides, a
visual asset, PPT, a new Trial, a new stale Harness State, or further changes
to the Demo repository.

## Rationale

TRIAL-006 provides a real execution and observed global Harness influence.
The evaluation preserved correctness and benchmark observations but limited
causal attribution because the configured global environment was not
controlled. DEC-0016 made a system-level correction: retain the run as
PARTIAL, accept global influence as a known limitation, and require later CLI
Trials to record observed influences rather than blocking progress on a
clean-room experiment. TRIAL-007's Prompt and result report a visible hook
and Skills, and TRIAL-008 contains a separate global-influence audit.
TRIAL-007's final report says no MCP warning, while its retained stderr
contains a Nimble `AuthRequired` error; no MCP tool result is shown. This
discrepancy makes the subsequent application of the reporting rule partial,
not proof of a complete environment inventory. The history still supplies a
bounded feedback chain without manufacturing a Product change.

Candidate C's ACT 4 use is accepted as a supporting Meta Case because it
changes how Training Production Trials are interpreted and how later Trial
evidence is recorded. It does not demonstrate a stale-Skill fix or measured
product / training-quality improvement. Candidate E supplies a real
same-repository Context iteration but occurred earlier in the maturity Story
and did not establish the planned post-Harness stale-Artifact Failure. The
separate stale-Harness teaching example is therefore explicitly conceptual
and controlled, not a reconstructed Demo-repository event.

## Alternatives Considered

### Alternative A — Require a Product-repository Loop State

Advantages:

- Keeps every central Demo transition in one Git history.
- Could directly connect a changed Product contract to a stale repository
  Harness artifact if an independently justified change is found.

Disadvantages:

- No candidate currently passes the independent Product-need and
  traceable-staleness gates.
- Selecting a test migration or other change only to force the planned
  failure would invent a Project requirement.

### Alternative B — Replace the shared Product Demo with the Meta Example

Advantages:

- Candidate C contains observed execution, system interpretation, and later
  evidence-reporting changes.

Disadvantages:

- It would violate the accepted role of the Meta Example as supporting only,
  displace the continuous Product story, and conflate Trial evaluation with
  Demo Product behavior.

## Trade-offs

Gains:

- Uses authentic history for a feedback Loop and keeps the successful Product
  baseline honest.
- Avoids an unsupported Product Evolution and false stale-Skill claim.
- Gives ACT 4 separate, explicit labels for conceptual stale-state material
  and observed evaluation-system changes.

Costs:

- The Meta Example is less concrete than editing a repository Skill in a
  single Demo State and requires careful evidence framing.
- The stale-Harness transition would remain conceptual/controlled unless a
  future Product change satisfies the existing gate.

New risks:

- Learners may conflate the global environment with the repository-owned
  Skill unless the changed layer is named explicitly.
- Later Trials showing the revised reporting rule do not prove an objective
  before/after gain in Trial quality or course-production quality.

## Related Invariants

- INV-LOOP-001
- INV-MATURITY-010
- INV-DEMO-001
- INV-DEMO-002
- INV-DEMO-003
- INV-DEMO-004
- INV-NARRATIVE-002

## Affected Artifacts

- `plan/DECISIONS.md` (OQ-013 evidence update)
- `plan/DEMO_MATRIX.md`
- `plan/DEMO_ARCHITECTURE.md`
- `plan/DEMO_REPOSITORY_SPEC.md` and `plan/DEMO_RUNBOOK_SPEC.md` (evaluation
  task labels and checks, aligned to §§221–230)
- `plan/STORY_ARCHITECTURE.md` (next update: evidence-role labels and beat
  transitions)
- Future ACT 4 captured or visual materials, only after approval

## Evidence

- USER: explicit STEP 07 §§221–230 direction received 2026-10-01; approves
  DEC-0021 as ACCEPTED, separates the conceptual stale-Harness case from the
  observed Meta Case, and preserves `STATE-00` → `STATE-04-PERF` as the
  Primary Product Demo.
- DEMO: TRIAL-006 performance task and environment audit are recorded in
  `plan/DEMO_MATRIX.md`; global Skills and plugin-hook warnings were observed,
  and no MCP result is attributed.
- USER / DECISION: DEC-0016 accepted the environment and attribution
  correction on 2026-09-29, preserving TRIAL-006 as PARTIAL and requiring
  later global-influence recording.
- DEMO: TRIAL-007 prompt and result in the retained disposable-run evidence
  explicitly record a UserPromptSubmit `analyze` hook and Skills. Its result
  says no MCP use or warning, but retained stderr contains a Nimble
  `AuthRequired` error; no MCP tool result is shown. Record the discrepancy
  and do not claim complete reporting.
- DEMO: TRIAL-008's recorded Global Harness Influence section lists global
  instruction/Skill context, hook warnings, and MCP initialization issues;
  no MCP tool result is attributed.
- EVALUATION: §§211–220 criterion review in `plan/DEMO_MATRIX.md` rates
  Candidate C as the strongest bounded chain and Candidate E as the
  strongest same-repository supporting iteration.
- INVARIANT: `INV-DEMO-003` and DEC-0005 permit only authentic supporting
  Meta Examples; they do not permit this case to replace the Product story.

## Training Relevance

YES

Reason:

It shows that evaluation evidence can change how later work is interpreted
and recorded, while keeping the limits of that change visible.

## Follow-up

Update Story and Demo Architecture records to preserve BEAT-037 through
BEAT-059 while assigning the stale-Harness setup to a conceptual controlled
case and the BEAT-058–059 supporting Meta slot to Candidate C. Keep the
22-minute ACT 4 budget and the Trial-evaluation / Demo Product boundary.
The user's evaluation mapping is recorded as EVAL-01 Bug, EVAL-02
Performance, EVAL-03 documentation-only, and EVAL-04 small refactor. Do not
implement a new Product State, stale Skill, visual asset, Trial, or PPT under
this Decision.

## Supersedes

None

## Superseded By

None

## Approval

The user accepted the evidence-role direction in STEP 07 §§221–230 on
2026-10-01. This Decision changes no `MASTER_PLAN.md` content, Invariant,
accepted Demo State, or Demo Product artifact. The Story / Demo Architecture
updates and all presentation assets remain a later step. Retain
`INV-DEMO-001` continuity and `INV-DEMO-003`'s supporting-only factual Meta
Example boundary.

### DEC-0022 — Separate Slide Map readiness from final content freeze

Status:
ACCEPTED

Date:
2026-10-02

## Context

STEP 07's final audit identified remaining product, research, terminology,
environment, and company-policy questions. The user authorized STEP 08 to
design the Slide Architecture and Slide Map while keeping those questions
visible until content is frozen.

## Problem

Treating unresolved content questions as a Slide Map blocker would prevent
structural planning even when uncertain claims can be labeled and validated
later. Treating the map as final content would hide unresolved evidence and
policy dependencies.

## Decision

Set the STEP 08 Slide Architecture and Slide Map gate to READY. OQ-003,
OQ-005, OQ-006, OQ-011, and OQ-014 do not block the map; resolve their
affected claims before Final Content Freeze. During STEP 08, mark only
risk-bearing claims with an optional status: VALIDATED, PROVISIONAL,
REQUIRES PRODUCT CHECK, REQUIRES COMPANY POLICY, CONCEPTUAL, OBSERVED
PRODUCT, or OBSERVED META. Keep observed and conceptual evidence distinct.

STEP 08 scope is the slide count and per-Section/Act count, key message,
Story Beat, Demo placement, Evidence Type, beginner/advanced payoff, C++
Vision bridge, and Q&A, Reflection, and Transition placement. It excludes
PPT creation, final visual design, complete Speaker Notes, image creation,
and Demo video production. Breaks remain outside the 360-minute total; STEP
08 may recommend break points, while the company decides the event schedule.

## Rationale

The Slide Map can organize the approved Story and evidence without presenting
uncertain material as settled fact. A separate content-freeze gate keeps
product, research, terminology, and policy checks explicit at the point when
claims become final.

## Alternatives Considered

### Alternative A

Block the Slide Map until all content questions are resolved.

Advantages:

Fewer provisional claims appear in planning.

Disadvantages:

Delays structural design even when uncertainties do not affect the Story.

### Alternative B

Treat the Slide Map as final content.

Advantages:

Would avoid a separate freeze checkpoint.

Disadvantages:

Would obscure outstanding evidence and company-policy checks.

## Trade-offs

Gains:

STEP 08 can proceed while claim validation remains traceable.

Costs:

Affected map entries may need revision before content freeze.

New risks:

Provisional labels must remain attached to the claims they qualify.

## Related Invariants

- INV-NARRATIVE-001
- INV-NARRATIVE-002
- INV-VERIFY-001
- INV-DELIVERY-001

## Affected Artifacts

- plan/DECISIONS.md
- plan/CURRICULUM.md
- plan/CURRICULUM_MATRIX.md
- plan/LEARNING_JOURNEY.md
- plan/STORY_ARCHITECTURE.md
- plan/DEMO_ARCHITECTURE.md
- plan/DEMO_MATRIX.md
- STEP 08 Slide Architecture and Slide Map

## Evidence

- USER: STEP 07 Final Audit decision pasted on 2026-10-02.

## Training Relevance

YES

Reason:

The gate distinction models how to plan structure while keeping uncertain
claims, evidence types, and organizational policy visible.

## Follow-up

Proceed with STEP 08 only after its separate user instruction. Keep the map
READY, carry unresolved claims with the approved optional statuses, and
resolve the listed Open Questions before Final Content Freeze.

## Supersedes

None

## Superseded By

None

## Approval

Accepted by the user's STEP 07 Final Audit decision on 2026-10-02. This
decision authorizes planning scope only; it does not authorize PPT creation
or final slide production.

### DEC-0023 — Freeze STEP 08 claims and course operational definitions

Status:
ACCEPTED

Date:
2026-10-06

## Context

The 80-Slide Map passed its structure, time, and delivery-mode revision.
Before visual design and content production, each core claim needs an
approved evidence boundary. OQ-011 also needs course-specific definitions;
OQ-006 needs a final research boundary for Slide 29.

## Problem

The map contains current product behavior, historical CLI trials, scoped
benchmark measurements, research findings, and teaching models. Treating
these as one evidence class would overstate current support or causality.

## Decision

Accept the claim boundaries in `plan/CLAIM_FREEZE.md`. Keep the 80-Slide Map,
360-minute schedule, delivery-mode totals, Story, and Demo selection frozen.
Mark the overall result FROZEN WITH OPEN ITEMS because target account/surface
and selected-environment checks remain open. Do not change Story, slide
count, time, or Demo scope through this claim audit.

Resolve OQ-011 for this course with these operational definitions:

- **Harness:** a deliberately designed working environment that helps an
  Agent work reliably in a Project.
- **Minimum Effective Harness:** a course heuristic to use only the
  Context, Workflow, and Verification structure needed for the current
  problem.
- **Loop Engineering:** the feedback model `Execution → Observation →
  Cause → System Change → Re-evaluation`.
- **AI-Native Development:** this course's framing for deliberately
  designing and operating Task boundaries, Project Context, Reusable
  Workflow, Verification, and Feedback Loops while developers retain
  responsibility.

These are course models, not official OpenAI definitions or universal
industry taxonomies.

Resolve OQ-006 only for Slide 29's bounded message: “More Context is not
automatically better.” Cite the reviewed research and do not generalize it
to current Codex behavior or all tasks and models.

## Rationale

The bounded wording preserves the approved Story while distinguishing
observed product behavior, historical trial evidence, academic findings,
and course models. Keeping the remaining product and environment checks open
prevents this freeze from implying account-wide or Desktop-wide validation.

## Alternatives Considered

### Alternative A

Leave all course terms and Slide 29 research claims provisional.

This would retain uncertainty that the user resolved with explicit
course-specific wording and reviewed source boundaries.

### Alternative B

Present the terms as official or universal definitions and the research as
current Codex evidence.

Rejected because neither claim is supported by the cited sources or the
user's instruction.

## Trade-offs

The course can now use stable operational definitions and a bounded research
claim. Current client, account, Windows setup, and presentation-mode claims
remain conditional until their target environment is checked.

## Related Invariants

- INV-NARRATIVE-001
- INV-NARRATIVE-002
- INV-LOOP-001
- INV-RESEARCH-001
- INV-RESEARCH-002
- INV-RESEARCH-004
- INV-VERIFY-001

## Affected Artifacts

- `plan/CLAIM_FREEZE.md`
- `plan/DECISIONS.md`
- `references/CLAIMS.md`
- `references/TERMINOLOGY.md`
- STEP 08 Slides 29, 50–53, 62, 65–77

## Evidence

- USER: STEP 08 §§131–140, received 2026-10-06; especially explicit
  instructions in §§136–139 and operational definitions in §137.
- OpenAI official product documentation checked 2026-10-06; source links are
  retained in `plan/CLAIM_FREEZE.md`.
- Primary research sources for the limited Slide 29 wording are linked in
  `plan/CLAIM_FREEZE.md`.

## Training Relevance

YES. The decision demonstrates how claim wording, evidence class, and target
environment boundaries are kept separate in a product-training project.

## Follow-up

Validate only the listed target-surface, account, and environment-dependent
claims before relying on them in speaker guidance or a live demonstration.
Reopen OQ-014 if internal/customer data or an external service is introduced.

## Supersedes

The open wording gates in OQ-006 and OQ-011, only for the limited claim
scopes stated above.

## Superseded By

None

## Approval

Accepted by the user's explicit STEP 08 §137 definitions and §§131–140
claim-freeze instruction on 2026-10-06.

### DEC-0024 — Conditionally freeze the Visual System for production

Status:
ACCEPTED

Date:
2026-10-11

## Context

The V1/V2 visual prototypes were reviewed before planning the 80-slide deck.
V2 added S16 / T06-A and locally exercised seven Layout Variants across six
Template families. Windows PowerPoint, actual projection, S72's timed
operation, and the remaining Template Variants have not been validated.

## Problem

The project needs a production baseline without treating a partial sample as
proof that all 11 Templates and 27 Variants work. Requiring prototypes for
every unrepresented Variant may add work without evidence of a structural
defect; proceeding without first-use checks could spread a layout problem.

## Decision

Select **A — CONDITIONAL FREEZE**. Use the current Visual Spec, Template
Architecture, and Slide-to-Template Map as the production baseline, with the
scoped statuses and per-Template first-use validation gates in
plan/VISUAL_TEMPLATE_FREEZE.md.

- Keep sampled Variants conditionally frozen only within their demonstrated
  scope. Keep every untested Template or Variant PROVISIONAL until its first
  concrete Slide is reviewed.
- If a first implementation reveals structural, density, evidence-boundary,
  or legibility problems, stop extending that Variant, resolve the problem,
  and revalidate before reusing it.
- Use a static S72 with speaker-led highlighting as the production default.
  Require a timed 20-minute rehearsal before final delivery; the existing
  operation cue is not complete Speaker Notes.
- Keep Windows PowerPoint and target-screen compatibility UNVERIFIED until
  the final-delivery validation in §§227–228 of the user's instruction is
  completed. Check it earlier when the target PC is available to reduce
  rework.
- Do not change the approved Slide Map, Claims, Story, slide count, time,
  Delivery Modes, Demo selection, or Demo Repository.

This gate timing applies the user's current instruction that Windows
validation is a final-delivery gate. The earlier P0-01 recommendation in
VISUAL_PROTOTYPE_REVIEW.md remains in the historical review and remains
OPEN; this decision does not claim that Windows compatibility is verified.

## Rationale

The eight-slide V2 rendered locally without observed clipping or overlap.
S16/T06-A is locally legible, and Product, Conceptual, Meta, and Teaching
Model boundaries remain distinguishable. The architecture and mapping define
the remaining Templates, and no unresolved structural failure has been
observed in the sampled Slides. Conditional first-use validation is therefore
supported; it does not turn missing evidence into a PASS.

## Alternatives Considered

### Alternative A — Conditional freeze

Use the current visual system as the baseline, validate untested Variants on
their first Slide, and keep target-environment validation as a delivery gate.
Selected because the tested sample shows no reason for a broad redesign.

### Alternative B — Require more prototypes before proceeding

This would test more Variants earlier, but current evidence identifies gaps,
not a demonstrated structural failure that requires a larger prototype set
before the next planning stage.

### Alternative C — Block

Not selected because the existing system supports the next planning stage
and no current evidence shows that the 80-slide design is infeasible.

## Trade-offs

This decision lets the project continue with a bounded design baseline while
preserving explicit validation gates. It carries rework risk if Windows font
substitution, projection, an untested Variant, or shared-style propagation
reveals a structural issue. Early target-PC review is recommended when
available; final delivery still requires the complete gate.

## Related Invariants

- INV-VERIFY-001
- INV-DIFFICULTY-003
- INV-NARRATIVE-001
- INV-SOT-003

## Affected Artifacts

- plan/VISUAL_TEMPLATE_FREEZE.md
- plan/VISUAL_SPEC.md
- plan/SLIDE_TEMPLATE_ARCHITECTURE.md
- plan/SLIDE_TEMPLATE_MAP.md
- plan/VISUAL_PROTOTYPE_REVIEW.md
- Future Speaker Notes Architecture and final 80-slide production

## Evidence

- plan/VISUAL_PROTOTYPE_EVALUATION.md, V2 section.
- plan/VISUAL_PROTOTYPE_REVIEW.md, including the preserved V1 review and
  additive V2 disposition.
- plan/VISUAL_PROTOTYPE_V2_RESULT.md.
- V2 PPTX and local renders in prototype/preview/v2/.
- User instruction STEP 08 §§221–230, received 2026-10-11.

## Training Relevance

YES. The decision demonstrates how a partial prototype can support a
conditional design baseline while preserving evidence limits and validation
gates.

## Follow-up

Proceed to Speaker Notes Architecture. Validate each provisional Template
when it is first implemented. Complete Windows / target-screen review,
product-surface and Live Demo checks where used, and the S72 timed rehearsal
before final delivery.

## Supersedes

None. Clarifies the current validation-gate timing from the user's
STEP 08 §§227–228 instruction; historical review findings remain preserved.

## Superseded By

None

## Approval

Accepted under the user's explicit STEP 08 §§221–230 request to assess the
evidence, select a freeze level, and record the result. This approval does
not authorize the final 80-slide PPT or complete Speaker Notes.

### DEC-0025 — Place S54 and S72 transitions after discussion

Status:
ACCEPTED

Date:
2026-10-11

## Context

The consolidated Slide Map recorded the S54 and S72 Mode allocations in an
order that disagreed with the Speaker Notes Architecture and the later Pilot
operating cues. The Pilot revision gate asked to trace the accepted Story and
Transition roles, choose one sequence, and align the affected planning
documents without changing any duration or aggregate.

## Problem

S54 closes ACT 3 and opens the move into the conceptual ACT 4 case. S72 closes
the ACT 4 teaching model and hands off to ACT 5. Placing Q&A after either
Transition would put discussion after its narrative handoff and leave the
last allocated minutes without a clean next-Act cue.

## Decision

Use these presenter operating sequences:

- S54: Reflection 3 minutes → Q&A 5 minutes → Transition 2 minutes.
- S72: Case 7 minutes → Reflection 2 minutes → Q&A 7 minutes →
  Transition 4 minutes.

The Transition is the last Mode on each Slide. At S54 it opens the
Working Harness callback on S55, which preserves the successful STATE-04-PERF
endpoint before S56 begins the separate conceptual stale-workflow case. At
S72 it closes ACT 4 with the TRANS-012 handoff to S73.

Only the ordering of the existing Mode allocations is clarified. Slide IDs,
titles, Evidence, Claims, Templates, per-Slide time, ACT totals, aggregate Mode
totals, Story beats, and Demo selections remain unchanged.

## Rationale

The user's earlier Pilot instructions explicitly gave the S54 and S72
sequences above. The Speaker Notes Architecture also placed Q&A before the
Transition. The approved Story makes each Transition a handoff to the next
beat or ACT, while the accepted curriculum places Q&A around major Story
transitions rather than after the course has already moved on. The final
Transition therefore gives the audience one clear closing cue without
removing or shifting any Q&A time.

## Alternatives Considered

- Keep the Slide Map's previous textual order. Rejected because it conflicts
  with the explicit Pilot operating order and leaves Q&A after the handoff.
- Move or reduce Q&A. Rejected because the aggregate schedule and per-Slide
  allocations are fixed.

## Trade-offs

This resolves presenter sequence and gives the next ACT a clear handoff.
Actual pacing and audience interaction are still unverified until rehearsal.

## Related Invariants

- INV-NARRATIVE-001
- INV-DELIVERY-001
- INV-VERIFY-001

## Affected Artifacts

- plan/SLIDE_MAP.md
- plan/SPEAKER_NOTES_ARCHITECTURE.md
- plan/SPEAKER_NOTES_PILOT.md
- plan/SPEAKER_NOTES_PILOT_EVALUATION.md
- plan/VISUAL_SPEC.md
- plan/SLIDE_TEMPLATE_MAP.md

## Evidence

- User-provided STEP 08 §246: S54 Reflection → Q&A → Transition.
- User-provided STEP 08 §248: S72 Case → Reflection → Q&A → Transition.
- User-provided STEP 08 §§251–260: audit, select, align, and validate the
  operational sequence while preserving all time allocations.
- plan/SLIDE_MAP.md, S54 and S72 Story roles and Transition cues.
- plan/SPEAKER_NOTES_ARCHITECTURE.md, §7 Interaction Rules.
- plan/CURRICULUM.md, DEC-0007 Q&A placement and ACT handoffs.
- plan/TRANSITIONS.md, TRANS-010 and TRANS-012.
- DEC-0024: static S72 and a timed rehearsal remain required; this Decision
  does not claim that rehearsal has occurred.

## Training Relevance

YES. The sequence preserves the difference between discussion time and the
final Story handoff, with no change to the fixed schedule.

## Follow-up

Keep the S72 rehearsal gate UNVERIFIED until a timed 20-minute rehearsal
records all four cutoffs, its no-question fallback, and the S73 handoff.
Do not treat this order decision as evidence that the pacing works in delivery.

## Supersedes

None. It clarifies only the S54 and S72 Mode order in the Slide Map.

## Superseded By

None

## Approval

Accepted under the user's STEP 08 §§251–260 instruction to resolve the order
and align the plan documents, consistent with the explicit operating sequences
in §§246 and 248. This does not authorize full Notes or PPT production.

### DEC-0026 — Freeze speaker notes standard and sequence ACT production

Status:
ACCEPTED

Date:
2026-10-11

## Context

The project has an approved 80-slide Map, a conditional Visual System and
Template freeze, a Speaker Notes Architecture, and seven evaluated Pilot Notes.
The next planning gate must establish whether those materials are sufficient
to begin production, preserve the unresolved validation boundaries, and give
the 80-slide work a controlled ACT-by-ACT order.

## Problem

Without a frozen Notes schema and a production sequence, later work could
change fields, Story timing, Evidence boundaries, or unverified product and
presentation assumptions while expanding from seven Pilot Slides to eighty.

## Decision

- Use the 19 fields in `SPEAKER_NOTES_ARCHITECTURE.md` as the Notes production
  schema, preserving the defined `N/A`, `TBD`, and Validation Status meanings.
- Keep the approved 80-slide schedule, per-Slide Mode splits, and DEC-0025
  sequences for S54 and S72 unchanged.
- Produce the final deck in order: ACT 0 S01–S09; ACT 1 S10–S21; ACT 2
  S22–S36; ACT 3 S37–S54; ACT 4 S55–S72; ACT 5 S73–S80.
- Complete Slide Content, Speaker Notes, Template application, Evidence
  connection, rendering, quality review, revision, and a Git checkpoint for an
  ACT before moving to the next ACT.
- Treat ACT 0 as ready to begin. Keep product-surface-specific work in S04–S06
  provisional until it uses only bounded TRIAL-001 evidence or passes the
  relevant current product and target-environment check.
- Keep S16, S35, and S67 fallback at PLANNED until final presentation media is
  selected and verified. Keep the S72 timed 20-minute rehearsal UNVERIFIED.
- Keep Windows PowerPoint, target account/surface, Live Demo environment, and
  unresolved Variant checks as their stated production or final-delivery gates.

This decision sets implementation order and status handling. It does not
authorize or record production of ACT 0, the 80-slide PPT, or the remaining
Speaker Notes.

## Rationale

The 19-field Architecture and seven Pilot records show a usable Notes pattern,
while the Pilot Evaluation explicitly leaves pacing, final media, and target
environment checks open. The V2 prototype validates editable slide structure
and local rendering only; it does not establish Windows compatibility or all
Template Variants. ACT-by-ACT work limits the scope of each review and makes
the next checkpoint depend on evidence from the ACT just completed.

The selected readiness allows work to start using the approved bounded
evidence. It keeps unverified product or environment claims provisional and
preserves separate final-delivery gates instead of treating prototype results
as broader validation.

## Alternatives Considered

### Alternative A — Begin ACT 0 under a conditional gate

Advantages:

- Starts production from the approved Map and existing evidence.
- Keeps unresolved surface and run details visible at Slide level.
- Makes each ACT reviewable before later work begins.

Disadvantages:

- Some operation details and Template Variants need checks during production.

### Alternative B — Require every product and Windows check before ACT 0

Advantages:

- Resolves more delivery uncertainty before the first production artifact.

Disadvantages:

- Delays work that can use already bounded teaching and Trial evidence.
- Treats final-delivery validation as a blanket prerequisite even where a
  Slide does not depend on that unresolved environment fact.

## Trade-offs

Gains:

- Preserves the schedule, Story, claim boundaries, and evidence status while
  enabling staged implementation.

Costs:

- Requires explicit provisional status and repeated scope checks during ACT
  reviews.

New risks:

- A later product, target-font, or Template check can require revision to an
  already-produced Slide. The ACT checkpoint and revision loop must record it.

## Related Invariants

- INV-DELIVERY-001
- INV-NARRATIVE-001
- INV-VERIFY-001
- INV-SOT-003

## Affected Artifacts

- plan/SPEAKER_NOTES_FREEZE.md
- plan/PRODUCTION_PLAN.md
- plan/VISUAL_TEMPLATE_FREEZE.md — align S72 Mode row order with DEC-0025
- plan/DECISIONS.md
- Future ACT production artifacts and Git checkpoints

## Evidence

- USER: STEP 08 §§261–270, including the 19-field scope, fixed time and Mode
  totals, high-risk Slide boundaries, fallback/rehearsal gates, ACT order, and
  production readiness criteria.
- plan/SPEAKER_NOTES_ARCHITECTURE.md: Notes schema and scope rules.
- plan/SPEAKER_NOTES_PILOT.md and
  plan/SPEAKER_NOTES_PILOT_EVALUATION.md: seven draft records, evaluation,
  and open rehearsal/media checks.
- plan/SLIDE_MAP.md: 80 Slides, ACT and Mode totals, and per-Slide allocation.
- plan/VISUAL_TEMPLATE_FREEZE.md and V2 evaluation: conditional system status
  and bounded prototype coverage.
- plan/DECISIONS.md, DEC-0025: S54 and S72 operating sequences.

## Training Relevance

YES

Reason:

The production sequence applies the course's evidence, verification, and
incremental system-improvement principles to development of the training deck.

## Follow-up

Begin ACT 0 only when separately instructed to create its deliverables. Keep
S04–S06 limited to TRIAL-001 evidence unless current product and target
environment checks are completed. For each ACT, preserve provisional states,
review its rendered results, and checkpoint it before starting the next ACT.
Complete the Windows, product-surface, fallback, and S72 rehearsal gates before
final delivery.

## Supersedes

None. This decision defines the production stage that follows DEC-0025 and
preserves the earlier conditional Visual freeze in DEC-0024.

## Superseded By

None

## Approval

Accepted under the user's explicit STEP 08 §§261–270 instruction to freeze the
Speaker Notes standard, assess ACT 0 readiness, and set the sequential
production strategy. No ACT deliverable was produced by this decision.


### DEC-0027 — Apply the presentation revision pilot across the full deck

Status:
ACCEPTED

Date:
2026-10-18

## Context

The user reviewed the original deck and accepted the four-slide presentation
revision pilot at commit `596d76e` (S05, S23, S45, S57). The course narrative
and evidence boundaries remain approved. The user now explicitly requests
application to all 80 slides, full rendered review, and commit/push.

## Problem

The original deck often exposes production instructions, repeats evidence
metadata, and names mechanisms without showing the concrete artifact or
comparison. DEMO-04A also leaves its independent Project-change rationale
unspecified, making the stale-workflow distinction hard to explain.

## Decision

- Apply the accepted pilot's audience-facing approach across S01–S80: concrete
  source excerpts, bounded code/diff, quantitative comparisons, clear diagrams,
  and concise questions. Keep source details and operational instructions in
  the aligned Notes. Keep essential evidence labels and limits on screen.
- Retain the 80 Slide IDs, titles, Story/ACT/Section/Beat/Demo mapping, approved
  360-minute time and Mode allocations, and Claim Freeze boundaries.
- Accept the S57 hypothetical setting: a need to verify module interactions
  expands the Project's official verification scope from unit tests to unit
  plus integration tests; a reusable Workflow still directs unit tests only.
  S56 starts with aligned unit-test scope. S57 exposes only the instruction
  mismatch. S58–65 continue as a conceptual investigation/evaluation model.
- This setting is not a graypipe migration, current Skill behavior, real Agent
  failure, missed-test observation, or PASS/FAIL result. Do not invent commands,
  logs, test counts, timings, or a new Trial. Preserve DEMO-04A/04B separation.
- Align the six ACT PPTX files, integrated PPTX, Notes, previews, and fallback
  provenance to the new presentation version. Keep prior evaluations as history.
- Keep Windows PowerPoint, actual target fonts, room projection, selected
  product/account surface, and timed rehearsal as independent unverified gates.

## Rationale

The pilot makes the problem, source material, and comparison visible while
retaining the explanation's evidence limits. The accepted S57 setting gives
an independent reason for changing verification scope without fabricating an
observed Product State. The user's explicit approval resolves its proposed
status and authorizes full-deck production.

## Alternatives

- Keep the original card-heavy slides: retains artifacts but leaves the
  confirmed audience-readability and concreteness problems unresolved.
- Apply only the four pilot slides: does not satisfy the full-deck request and
  leaves inconsistent presentation quality across the course.
- Replace the conceptual case with a new real Trial: outside this authorized
  scope and unnecessary to explain the approved teaching model.

## Trade-offs

The revision requires slide-specific layouts and Notes synchronization.
Concise screens move technical detail into Notes, so essential boundaries must
remain visible and the exact underlying evidence must remain traceable.

## Related Invariants

INV-IDENTITY-001, INV-IDENTITY-002, INV-NARRATIVE-001, INV-VERIFY-001,
INV-DEMO-003, INV-SOT-003.

## Affected Artifacts

plan/SLIDE_MAP.md, plan/SLIDE_TEMPLATE_MAP.md, plan/VISUAL_SPEC.md,
plan/VISUAL_PROTOTYPE_PLAN.md, plan/CLAIM_FREEZE.md, plan/DEMO_MATRIX.md,
plan/DEMO_ARCHITECTURE.md, demos/runbooks/demo-04a.md, production PPTX,
Notes, previews, validation and handoff documents.

## Evidence

User instruction: accept the four-slide pilot direction, confirm S57's
hypothetical setting, apply across all 80 slides, preserve Story/evidence
scope, review all renders, and commit/push. The accepted pilot is preserved in
prototype/presentation-revision-pilot/ at commit `596d76e`.

## Training Relevance

YES — production quality and claim accuracy require different checks; a
hypothetical teaching example can be concretized without becoming evidence.

## Follow-up

Complete full rendered review and source/Notes/time consistency checks. Run
the independent Windows, room, product-surface and rehearsal gates before
classroom delivery. No protected Claim expansion is authorized.

## Supersedes

The provisional S57 setting in the pilot review and the old requirement to
leave its conceptual Project-change rationale unspecified. Other existing
Decisions, including DEC-0021's evidence split, remain applicable.

## Approval

Explicit user approval in the 2026-10-18 request following the four-slide pilot.


### DEC-0028 — Integrate the approved teaching illustrations into production

Status:
ACCEPTED

Date:
2026-10-18

## Context

The user reviewed the S07/S37/S53/S72 illustration pilot at `fee00a2`, approved
integration into the full 80-slide PPTX, and requested another S72 clipping
review, rendered validation, commit and push.

## Problem

The approved pictures exist only in a four-slide review copy. Production PPTX,
ACT files, Notes and previews must use the same approved visual explanation.
S72's final question and claim-footer text boxes have insufficient vertical
slack for substitute font metrics.

## Decision

- Apply the approved illustrations to S07, S37, S53 and S72 in the integrated
  PPTX and corresponding ACT 0/3/4 files. Keep native editable text, shapes,
  Notes and the existing S45 chart.
- Keep the 80 Slide IDs, titles, Story/Section/Beat/Demo mapping, 360 minutes,
  Mode allocations, Evidence Types and Claim Freeze boundaries.
- Keep all four images labeled as generated teaching illustrations. S37's
  picture explains resize versus value-range conversion; the repeated
  procedure below it summarizes the historical Trials. The picture is not
  a Trial input/output, optimization result, or Prompt-only causal evidence.
- Keep S53/S72 as hypothetical C++ Vision transfer models. Highlighted hardware
  conditions do not establish a real incident, failure cause or measured result.
- Increase only S72's final-question and claim-footer box heights, raise its
  three question groups slightly, and re-render the exact final package.
- Align the four production Notes, embedded Notes, static fallback paths and
  previews. Preserve S72's prepared Q&A questions and its Case 7 / Reflection 2 /
  Q&A 7 / Transition 4 sequence.

## Rationale

The user has approved the explanatory image direction. Integrating it into
production makes the reviewable version the actual teaching deck. More line
height and spacing address S72's reported clipping while retaining text and
font sizes. Explicit image provenance prevents the illustrations from being
mistaken for observed Product or Meta evidence.

## Alternatives

- Retain only the pilot: leaves the approved pictures outside the actual deck.
- Rebuild the pictures or add new visual scenes: unnecessary for integration.
- Shrink or remove claim text: loses readability or evidence boundaries.

## Trade-offs

The picture artwork is raster content; text, labels and arrows remain editable.
Production layouts now depend on the preserved pilot image assets. Local
rendering cannot settle target-machine font or projection behavior.

## Related Invariants

INV-IDENTITY-001, INV-NARRATIVE-001, INV-VERIFY-001, INV-DEMO-003, INV-SOT-003.

## Affected Artifacts

Production integrated PPTX, ACT 0/3/4 PPTX, corresponding Markdown/embedded
Notes, previews, production layout source, and integration evaluation.

## Evidence

The user's explicit integration request and S72 clipping report. Approved
pilot: `prototype/image-illustration-pilot/`, commit `fee00a2`. Generated image
provenance and prompts remain in that directory. Local validation is recorded
in `production/evaluation/FULL_DECK_IMAGE_INTEGRATION.md`.

## Training Relevance

YES — visual explanations can become clearer without expanding evidence or
claim scope. Text-box geometry and target-environment rendering are separate
checks from source content correctness.

## Follow-up

Retain Windows PowerPoint, actual fonts, room projection, product/account
surface and timed rehearsal as independent UNVERIFIED gates.

## Approval

Explicit user approval to integrate all four images, preserve course and claim
scope, repair S72, render, commit and push.


### DEC-0029 — Complete the approved slide image candidates

Status:
ACCEPTED

Date:
2026-10-18

## Context

The user requested every previously recommended image placement. The earlier
review listed S03, S07, S37, S53, S57, S72 and S74, plus a conditional S41
original-capture option. DEC-0028 already integrated S07/S37/S53/S72.

## Problem

S03 still describes manual context collection without a work scene, S57's
test-scope comparison lacks a module-connection picture, and S74's State names
do not visually recall the earlier artifacts. The S41 option requires an
original capture that must not be fabricated.

## Decision

- Complete S03 with a generated teaching illustration of a person gathering
  implementation, test and contract context. Retain the question and friction;
  do not reveal the Agent solution before S04.
- Add native editable module/scope diagrams to S57's approved comparison:
  official unit plus integration scope versus reusable unit-only instructions.
  Keep the DEC-0027 hypothetical setting and no-execution-result boundary.
- Add native crops of the existing S16/S32/S45 slide renders to S74. Preserve
  all seven named States, their order and one-phrase meanings. Separate the
  excerpts from the rail and label their actual State references so column
  alignment does not imply an incorrect one-to-one mapping.
- Keep S07/S37/S53/S72 as already approved, including the S72 clipping repair.
- Retain the clearly labeled S41 reconstruction: no original CLI screenshot
  or recording was found in the training assets, Demo, prototype or production
  inventory. Render previews are not original execution captures.
- Preserve 80 slides, 360 minutes, titles, ACT/Section/Beat/Demo relationships,
  time/Mode allocations, Evidence Types and frozen Claim boundaries. Align
  affected ACT 0/4/5 files, Notes, previews and fallback provenance.

## Rationale

The three remaining visuals address the exact purposes identified in the
earlier recommendation. Scene art explains human work, editable scope diagrams
make the hypothetical comparison concrete, and source excerpts recall actual
teaching artifacts without adding evidence or product claims.

## Alternatives

- Add images to all 80 slides: exceeds the selected candidate set and can
  reduce space for existing evidence.
- Generate a fictional S41 terminal screenshot: fails the source condition.
- Generate new benchmark results or a real test run: unnecessary and outside
  the approved visual-production scope.

## Trade-offs

S74 excerpt text is a visual reminder, not material to reread at distance.
Native captions and Notes carry source identity and scope. Image source files
and crop metadata add a small asset dependency to the production build.

## Related Invariants

INV-IDENTITY-001, INV-NARRATIVE-001, INV-VERIFY-001, INV-DEMO-003, INV-SOT-003.

## Affected Artifacts

Production integrated and ACT 0/4/5 PPTX, Notes, previews, production source,
assets/slide-illustrations, fallback manifest and DEMO-12 operating description.

## Evidence

Explicit user request to apply all earlier recommended image placements.
Earlier recommendation recovered from the same conversation. Asset provenance
and exact prompt: assets/slide-illustrations/PROMPTS.md and ASSET_MANIFEST.json.
Local result: production/evaluation/FULL_DECK_IMAGE_EXPANSION.md.

## Training Relevance

YES — improving visual explanation requires distinguishing an illustration,
an observed source artifact and an unavailable original capture.

## Follow-up

Keep the S41 original-capture option conditional and retain all independent
Windows, font, room, product/account and rehearsal gates as UNVERIFIED.

## Approval

Explicit user approval to apply the full previously recommended candidate set.

### DEC-0030 — Apply the approved full-deck presentation polish

Status:
ACCEPTED

Date:
2026-10-18

## Context

The user reviewed the image-expanded 80-slide deck and requested an independent
audit before changes. The audit identified fourteen presentation improvements;
the user then explicitly instructed the project to proceed.

## Problem

Some images dominate their teaching questions, adjacent slides repeat similar
compositions, and a few source excerpts or evidence labels need clearer reading
order. These are presentation issues within the approved course architecture.

## Decision

- Apply all fourteen reviewed improvements: S37 procedure hierarchy, S48 scoped
  Memory conclusion, S72 spacing, S10–14 progression, S66 case-to-loop cues,
  S53 transfer mapping, S74 State reading order, S23/S43 bilingual hierarchy,
  S21/25, S30/31 and S38/39 role differentiation, S64 evidence status, S70
  terminology, S67–71 Meta sequence, S73–79 closing roles and S29 qualitative
  research-task structure.
- Reuse approved illustrations and native editable diagrams. Preserve original
  English excerpts; add only concise Korean meanings and presentation cues.
- Keep observed records, conceptual cases and teaching models separate. Past
  Trial references in S64 are not new evaluation results. Do not add numerical
  research results, execution captures, Trials or current-product claims.
- Preserve all 80 slide IDs, titles, ACT/Section/Beat/Demo mappings, 360 minutes,
  each time/Mode allocation, Evidence Types and frozen Claim boundaries.
- Align the full deck, six ACT packages, Notes, previews and fallback hashes.
  Keep S52's deliberate double-line OBSERVED_META frame.

## Rationale

The changes make existing decisions easier to see and explain. They address
specific audit findings without changing the approved maturity story or
strengthening its evidence.

## Alternatives

- Retain the current layouts: leaves the reviewed presentation issues open.
- Rebuild the story or shorten the course: outside the accepted revision.
- Add new product experiments or generated screenshots: unnecessary and outside
  the approved evidence boundary.

## Trade-offs

The revised screen cues need presenter familiarization. Local visual and
package checks do not establish classroom readability or timed operation.

## Related Invariants

INV-IDENTITY-001, INV-NARRATIVE-001, INV-VERIFY-001, INV-DEMO-003, INV-SOT-003.

## Affected Artifacts

Production integrated and ACT PPTX, Notes, previews, presentation source,
fallback manifest and production evaluation.

## Evidence

The independent 80-slide visual review and the user's subsequent instruction
to proceed with its fourteen recommendations. Implementation and validation:
production/evaluation/FULL_DECK_PRESENTATION_POLISH.md.

## Training Relevance

YES — a presentation can improve while its planning intent and evidence scope
remain stable and traceable.

## Follow-up

Windows PowerPoint, target fonts, room projection, product/account operation
and timed rehearsal remain separate UNVERIFIED gates.

## Approval

Explicit user instruction to proceed after reviewing the fourteen-item list.
