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

### DEC-0031 — Package the current presenter materials for user validation

Status:
ACCEPTED

Date:
2026-10-19

## Context

DEC-0030 completed the current 80-slide presentation and local review. The
user requested updated handoff/checklist documents, anticipated questions and
answers, and an offline presenter bundle, followed by commit and push.

## Problem

The handoff and checklist still identify older PPTX releases. Presenter
materials are spread across the repository, and both integrated and ACT
preview paths are referenced by the existing Notes.

## Decision

- Identify the existing `a252c49` presentation artifacts by exact SHA-256.
  Refresh the current handoff, checklist and entry documentation.
- Add presenter Q&A using approved Slide, Claim and Trial scope. Do not add
  unverified current-product instructions, new research claims or course time.
- Create one dated offline ZIP with the integrated and ACT decks, all Notes,
  full and ACT previews, runbooks, current handoff/checklist, Q&A and linked
  reference documents. Provide a browser entry page and readable HTML copies.
- Preserve repository-relative paths, list payload hashes in a manifest, and
  keep the ZIP hash in a separate sidecar to avoid self-referential hashes.
- Label the result as local materials packaged for user validation. Leave
  target Windows/fonts, classroom, product/account, Live path and timed
  rehearsal UNVERIFIED. Static presentation remains the default.
- Keep PPTX, Notes, Slide Map, Claim Freeze, course timing and Demo repository
  unchanged. Do not run a Trial, claim a rehearsal, or distribute externally.

## Rationale

An exact, portable handoff prevents the presenter from using an old candidate
or losing offline fallback paths. User-only checks stay visible and separate
from package integrity and documentation work.

## Alternatives

- Send only the main PPTX: omits Notes, Q&A and offline fallback references.
- Copy the entire checkout: adds source code, unrelated prototypes and local
  history that the presenter does not need.
- Mark delivery complete after packaging: lacks target-environment evidence.

## Trade-offs

Full and ACT preview files duplicate some bytes but preserve existing paths
without modifying Notes or relying on Windows symbolic-link support. HTML
copies are generated views; Markdown and the approved plans remain authority.

## Related Invariants

INV-IDENTITY-001, INV-NARRATIVE-001, INV-VERIFY-001, INV-SOT-003.

## Affected Artifacts

Current handoff/checklist, presenter Q&A, runbook provenance, repository entry,
delivery ZIP/manifest, packaging source and package validation record.

## Evidence

Explicit user instruction to finish these preparation tasks and commit/push,
while leaving physical environment checks and rehearsal to the user.

## Training Relevance

YES — release identity, readable source links and validation boundaries are
part of an evidence-based engineering handoff.

## Follow-up

The presenter completes the pending real-environment and rehearsal checklist.
Any current Live demonstration needs its own verified account/path and fallback.

## Approval

Explicit user authorization for documentation, Q&A and presenter packaging.

### DEC-0032 — Align slide handoffs with the approved course story

Status:
ACCEPTED

Date:
2026-10-20

## Context

An independent review compared all 79 adjacent slide connections in the
current 80-slide deck with its rendered screens and Speaker Notes. The user
approved improving the whole presentation while retaining the story flow.

## Problem

Several handoffs rely on unstated presenter explanations. The S36 exit
question asks why procedures differ, although S36 and S37 show the same
procedure recurring. Other gaps concern example changes, the transition
from verification to reusable information, optional Harness components,
the actual Meta case, and the final personal action.

## Decision

- Improve the reviewed handoffs in existing slide objects and Speaker Notes.
  Use brief audience cues to explain the next slide's purpose. Preserve
  connections that already work rather than rewriting every slide.
- Align S36 with the observed repetition of procedures. Do not invent
  process-variation failures. Distinguish constructed Prompt examples from
  historical Trial requests and executions.
- Present Subagent and Memory as reviews of whether additional structure
  is justified. Keep the current Demo's decision not to add them.
- Identify the actual Meta case's change target as Trial evaluation and
  reporting. Keep it separate from the conceptual stale Workflow case and
  the observed Product path ending at STATE-04-PERF.
- Narrow the closing reflection from identifying friction to choosing one
  small personal action, without requiring records, sharing or submission.
- Align the official Slide Map's Transition fields and downstream operating
  cues with the approved wording. Preserve all other source fields, slide
  IDs, titles, order, Story/Section/Demo mappings, 360 minutes, per-slide
  Mode allocations, Evidence Types and frozen Claim boundaries.
- Render and review the full deck and ACT packages, align embedded and
  Markdown Notes, and refresh presenter-package provenance and hashes.

## Rationale

Clear handoffs make the existing problem-driven progression easier to
follow. The changes address the reviewed discontinuities without adding
new course content, evidence or product claims.

## Alternatives

- Keep the current presentation: leaves the identified handoff gaps.
- Reorder slides or redesign the course: unnecessary for these issues.
- Add new Trials or product demonstrations: outside this revision.

## Trade-offs

The presenter must become familiar with the revised cues. Brief screen
changes still require local rendering and visual inspection. They do not
establish timed pacing or target-environment compatibility.

## Related Invariants

INV-IDENTITY-001, INV-NARRATIVE-001, INV-VERIFY-001, INV-DEMO-003,
INV-SOT-003.

## Affected Artifacts

Slide Map Transition fields, Story transition operating cues, production
source, integrated and ACT PPTX, Notes, previews, revision evaluation,
fallback provenance, handoff/checklist and offline presenter bundle.

## Evidence

The current ACT-by-ACT continuity review and the user's explicit approval:
"흐름을 잃지말고 전체 개선해."

## Training Relevance

YES — improve the presentation while preserving its planning authority
and distinguishing observed records from teaching interpretations.

## Follow-up

Windows PowerPoint, target fonts, classroom projection, current account
and Live environment, and timed rehearsal remain UNVERIFIED. Preserve the
Demo repository, Product code and existing State tags.

## Approval

Explicit user instruction to improve the whole deck after the continuity
review. Existing authorization to checkpoint completed changes continues.

### DEC-0033 — Add the approved legacy bridges within the current course

Status:
ACCEPTED

Date:
2026-10-21

## Context

A read-only audit compared the teaching content in the legacy M1-M9 summary
with all 80 current slides and their Speaker Notes. The user reviewed which
missing topics would improve the current Repository-centered story and
explicitly approved four first-priority additions and module relation labels.

## Problem

The current story explains task boundaries and verification but leaves a few
practical links implicit: checking allowed access before connecting a
Repository, stating a concrete acceptance condition, handing a result to a
human reviewer, and checking whether a test distinguishes a contract defect.
Adding complete legacy modules would require a different course scope.

## Decision

- Add four teaching bridges to S07, S14, S18 and S19. Preserve the existing
  80-slide order, titles, IDs, Story/Section/Demo mappings, 360 minutes,
  per-slide time and Mode allocation, Primary Messages, Evidence Types and
  frozen observed Claim boundaries.
- In S07, use 45 seconds of the existing three-minute Lecture to explain
  checking approved tools, accounts, input material and access permission
  scope before connecting a Repository or passing material. Replace repeated
  explanation and optional C++ elaboration. Actual company allow/deny lists
  and approval procedures remain unconfirmed and must follow local policy.
- In S14, replace 90 seconds of the existing three-minute Case with a
  concrete acceptance condition: a four-column synthetic input, crop 1 3,
  source columns 1 and 2 only, and output width 2. Keep Lecture 6 + Case 3.
  This is a teaching reconstruction of the existing crop contract, not the
  historical TRIAL-002 Prompt or a new execution result.
- In S18, use 90 seconds of the existing three-minute Lecture for a short
  review handoff: reason and change scope, verification evidence and result,
  unverified points, and the human acceptance decision. Reuse the existing
  crop records and replace the repeated list of checks. The format is a
  teaching summary, not an actual PR, historical Agent answer or approval.
- In S19, use 90 seconds inside Lecture 4 for a contract-check comparison.
  A non-empty result check can detect an empty output but cannot distinguish
  the existing extra-column defect. Compare the expected source columns
  1 and 2 and width 2 for this input. Do not call the first check universally
  meaningless or claim the second proves correctness for every input.
  Replace optional C++ footer explanation and repeated introduction; retain
  Reflection 1. Add no new execution or PASS/FAIL result.
- Add consistent lower-screen M1-M9 relation labels across all 80 slides.
  Labels identify related teaching content or principles, with no direct
  relation indicated where appropriate. They do not certify full coverage
  or completion of a legacy module. Preserve existing Claim/source scope.
- Defer the second-priority additions: the S44 decision-summary format and
  review condition, the S31 onboarding cue, and the S79 task-selection cue.
  Do not add new images, product facts, Trials or Demo repository changes.
- Update the four affected Notes and only the necessary Core Message,
  Visual Concept and Speaker Intent fields in the Slide Map. Align the
  integrated/ACT decks, embedded/Markdown Notes, previews and presenter
  provenance after production changes. Preserve the original handoff causes.

## Rationale

The four additions make the current crop story more usable without a new
top-level topic or demonstration. Each answers a different question:
allowed access, a task's success condition, the evidence handed to a reviewer,
and whether a check can distinguish the relevant defect.

## Alternatives

- Restore complete M4-M6 tutorials: requires architecture, C++ implementation,
  testing tools and runtime evidence outside the current story and timing.
- Add every proposed bridge at once: increases density and duplicates the
  current Context, candidate-selection and personal-reflection explanations.
- Add module labels alone: improves navigation but leaves the four practical
  links implicit.

## Trade-offs

The additions replace existing explanation and optional elaboration. Their
zero net time is a planning allocation, not an observed rehearsal result.
The presenter must keep teaching examples separate from historical records.
Module labels need to remain small enough to preserve reading order.

## Related Invariants

INV-IDENTITY-001, INV-NARRATIVE-001, INV-LEARNING-003, INV-VERIFY-001,
INV-RESPONSIBILITY-001, INV-DEMO-003, INV-SOT-003.

## Affected Artifacts

S07/S14/S18/S19 Slide Map fields and Speaker Notes; production source;
all-slide module relation labels; integrated and ACT PPTX; embedded and
Markdown Notes; previews; revision evaluation; fallback provenance;
handoff/checklist and the offline presenter bundle.

## Evidence

production/evaluation/LEGACY_M1_M9_COVERAGE_AUDIT.md; current slide text,
Speaker Notes and Slide Map time/Mode allocations; existing TRIAL-001,
TRIAL-002 and crop contract records; explicit user approval on 2026-10-21
for the four first-priority changes and all-slide module relation labels.

## Training Relevance

YES — strengthen the practical links between task definition, evidence and
human review while preserving the approved problem-driven course story.

## Follow-up

Review local production renders and Notes alignment after the changes, then
refresh package provenance. Actual timing, Windows PowerPoint, target fonts,
classroom projection, current account and Live environment remain UNVERIFIED.
The deferred topics require a separate content decision before production.

## Approval

Explicit user approval on 2026-10-21 to implement the four first-priority
bridges and M1-M9 relation labels while preserving 80 slides and 360 minutes.


### DEC-0034 — Refine the opening visuals for the developer audience

Status:
ACCEPTED

Date:
2026-10-21

## Context

The user reviewed the S01/S02 opening prototype and requested final adoption
with a more instructive C++ initialization example. The next two slides also
needed a more familiar debugging representation and a prompt-entry layout.
The existing course story, 80 slide IDs, 360 minutes and observed Claim
boundaries remain the production baseline.

## Problem

The former S01 text competed with the opening reflection. The simple S02
initializer did not expose a useful source of confusion. The S03 paper-based
illustration did not show the information a Visual Studio developer already
checks while debugging. S04's prose needed a recognizable input surface, but
using a GoogleTest illustration beside a historical Python Trial can blur
the distinction between a teaching mockup and execution evidence.

## Decision

- Adopt S01's reviewed three-scene illustration with the editable captions
  for asking for an explanation, assigning investigation and checking a
  result. Keep the scenes equally weighted and preserve Lecture 1 minute
  plus Reflection 4 minutes. They are experience examples, not a ranking.
- Replace S02's simple initializer with `std::vector<int> a(3, 1);` and
  `std::vector<int> b{3, 1};`. For these expressions, explain three elements
  with value 1 versus the two listed elements 3 and 1. Keep the connected
  IDE copy -> Chatbot question -> IDE answer-check/apply flow and Lecture
  5 minutes. The native element diagrams explain semantics; they are not
  compiler output, a ChatGPT response, a new Trial or automatic IDE linkage.
- Replace S03's person-and-paper illustration with six parallel information
  areas: Test Explorer, Call Stack, source/references, locals/watch values,
  output/logs and the specification. Treat the specification as a possible
  external document. Each area can supply Context; the diagram is neither
  a required sequence nor a claim that every task needs every area.
  Use the Korean term for specification in this slide instead of contract.
  Preserve Case 4 minutes and leave the Agent answer for the next slide.
- Show S04's exact TRIAL-001 request in a generic reconstructed input panel.
  On the right, use a clearly labeled fictional GoogleTest UI with five
  passing items and one failing Crop item. Do not join the panels with an
  execution-result arrow. Keep the three observation targets: failing test,
  relevant implementation and product call path. Preserve Lecture 2 minutes
  and reveal the actual investigation findings in S05.
- Preserve S04's historical OBSERVED_PRODUCT role for its request and Trial
  setup. Label the right-hand GoogleTest picture as a separate teaching
  mockup. The actual TRIAL-001 runner remains Python `unittest`, with seven
  passing tests, one crop failure and three read-only environment errors
  in the full run. The fictional five-pass/one-fail list does not replace
  that record or establish a C++ run, current Desktop behavior or a fix.
- Align only the affected Slide Map descriptions, S01-S04 Markdown and
  embedded Notes, production visuals and rendered previews. Preserve
  titles, IDs, Story/Section/Demo mappings, total and per-slide time/Mode,
  the remaining 76 slides and the Demo repository. Keep existing M labels.
- Do not build or refresh presenter bundles during this iteration. Record
  production validation separately after rendering the exact updated file.

## Rationale

The opening now lets the speaker point to recognizable work, explain a small
but meaningful C++ question and identify each familiar debugging information
source as Context. The prompt UI supports the investigation question while
visible source labels protect the difference between a historical request
and a fictional C++ test-result illustration.

## Alternatives

- Keep the original text-heavy opening and simple initializer: leaves the
  user's presentation and audience-fit concerns unresolved.
- Present the GoogleTest picture as the historical Trial screen: contradicts
  the recorded Python runner and hides its separate environment limitations.
- Replace the Python Demo with a new C++ run: changes the continuous Project
  and requires new implementation and evidence beyond this approved scope.
- Expand C++ constructor or Visual Studio usage into tutorials: displaces the
  existing opening story and time allocation.

## Trade-offs

The paired constructor example and six information areas require concise
speaker cues. The two visual sources in S04 require visible labels and a
short spoken distinction. The revised time plan preserves the approved
allocation but does not establish real presentation pace before rehearsal.

## Related Invariants

INV-IDENTITY-001, INV-NARRATIVE-001, INV-LEARNING-003, INV-VERIFY-001,
INV-RESPONSIBILITY-001, INV-DEMO-003, INV-SOT-003.

## Affected Artifacts

S01-S04 Slide Map visual descriptions and Notes; the S04 visual-scope note
in CLAIM_FREEZE; ACT 0 production source and assets; ACT 0 and integrated
PPTX embedded Notes; changed previews; the opening revision evaluation.
The previous two-slide prototype remains as a historical review artifact.

## Evidence

Explicit user approval on 2026-10-21 for the revised opening direction;
prototype/act0-opening-revision/NOTES.md and the reviewed S01/S02 previews;
plan/DEMO_MATRIX.md TRIAL-001 request, runner and recorded result;
Microsoft Learn vector constructors and Initializers, checked 2026-10-21:

- https://learn.microsoft.com/en-us/cpp/standard-library/vector-class?view=msvc-170#vector
- https://learn.microsoft.com/en-us/cpp/cpp/initializers?view=msvc-170

S01 asset: assets/slide-illustrations/S01-cases.png. Its generation prompt
is preserved in prototype/act0-opening-revision/IMAGE_PROMPT.md.
S04 asset: assets/slide-illustrations/S04-google-test-mock.png. Its exact
prompt is recorded in assets/slide-illustrations/S04_PROMPT.md. These are
teaching images, not historical product screenshots or execution evidence.

## Training Relevance

YES — use familiar developer information to open the Context question while
separating a useful illustration from the evidence it does not establish.

## Follow-up

Render and review the affected slides, verify embedded/Markdown Notes and
unchanged course timing, then record the observed local validation result in
production/evaluation/ACT_0_OPENING_REVISION.md. Windows PowerPoint, target
fonts, room projection, current account/Live behavior and timed rehearsal
remain UNVERIFIED. No new Trial is authorized by this visual revision.

## Approval

Explicit user instruction to finalize the revised S02 initialization example
and implement the S03/S04 visual changes while retaining the approved course
flow and evidence boundaries. The prior request to avoid presenter bundles
continues to apply.

### DEC-0035 — Connect observed crop scope to the Context boundary

Status:
ACCEPTED

Date:
2026-10-21

## Context

DEC-0034 replaced S02's small code question with two valid C++ vector
initialization expressions that produce different element counts and values.
The user requested a clearer connection from that question to S05, followed
by stronger emphasis in S06 on what code-only Context leaves out.
The historical repository investigation remains TRIAL-001.

## Problem

S05's crop illustration needs to expose the intended-versus-included width
without rewriting the Python defect as a C++ allocation incident. S06 also
needs to make the missing runtime Context visible without inventing a
Chatbot/Agent comparison or claiming that the Agent solved its permissions.

## Decision

- In S05, retain the title, OBSERVED_PRODUCT role, failed test, source and
  product call path. Introduce the comparison as intended width versus the
  number of columns actually included. For `crop(image, 1, 3)`, the
  end-exclusive specification selects source columns 1 and 2: width two.
  The existing `row[x_start : x_end + 1]` includes one extra column: width
  three. Keep the source values and use only the first row of the original
  two-row reconstruction, with an explicit excerpt label.
- Connect S02 and S05 through the question of intended count versus actual
  included elements. Both S02 vector initializations are valid. The bridge
  does not turn the actual crop endpoint defect into a C++ allocator,
  capacity, memory-allocation or buffer-overrun incident, or a new run.
- In S06, add the explicit teaching assumption that only code and the
  specification were selected for a Chatbot conversation. The left side
  identifies the code/specification clues available for discussing the
  width mismatch. Preserve the actual Trial label: cause explained, code
  unchanged. The right side identifies execution logs and permission
  information omitted by that assumption, alongside the actual read-only
  temporary-directory restriction and its three environment errors.
- Emphasize that copying code alone can omit execution-environment clues.
  Separate this interpretation from the historical observation. Supplying
  logs and permission information can also give a Chatbot analysis clues;
  no comparative experiment established inability or product superiority.
  The actual Agent observed its restriction and did not remove it.
- Retain the historical full-suite result: seven passes, one crop failure
  and three environment errors. They are different causes. Keep the
  focused-run record, no-edit result, historical CLI/environment scope and
  current Desktop/account limits intact.
- Preserve 80 slides, 360 minutes, slide IDs, titles, Story/Section/Demo
  mappings, Primary Messages, Evidence Types and existing Claim Statuses.
  Keep S05 at Demo eight minutes and S06 at Case five minutes. Revise their
  Markdown and embedded Notes, visuals and previews while preserving the
  other 78 slide/Notes records. Do not run a new Trial or change the Demo
  repository. Presenter bundle generation remains deferred.

## Rationale

The two revisions make adjacent slides answer different questions: which
included range differs from the intended one, and which information is
needed to distinguish a code defect from an execution restriction. Familiar
C++ experience supports the first question without replacing the observed
Python project. The second question explains Context selection without
converting a hypothetical omission into an unsupported tool ranking.

## Alternatives

- Describe the crop case as incorrect allocation length: implies a memory
  or allocation observation absent from TRIAL-001.
- Replace S05 with a new C++ failure: breaks the continuous repository
  evidence and requires implementation and validation beyond this scope.
- State that Chatbot cannot solve the right-hand problem: the record contains
  no Chatbot comparison, and additional runtime information can supply clues.
- Say that Agent access fixes permissions: the actual read-only restriction
  remained, and no code or permission change occurred.
- Keep the former slides unchanged: leaves the user's requested S02 linkage
  and missing-environment-Context point implicit.

## Trade-offs

The teaching bridge and the counterfactual assumption require short labels
and precise speaker cues. Use existing explanation time rather than adding
material. Preserved time allocation does not prove the actual presentation
pace before a timed rehearsal.

## Related Invariants

INV-IDENTITY-001, INV-NARRATIVE-001, INV-LEARNING-003, INV-VERIFY-001,
INV-RESPONSIBILITY-001, INV-DEMO-003, INV-SOT-003.

## Affected Artifacts

S05-S06 Slide Map visual/interpretation fields; their ACT 0 and Full
Speaker Notes; production source; ACT 0 and integrated PPTX; previews;
claim-boundary clarification; the Context-scope revision evaluation.
Historical TRIAL-001 source records and the Demo repository remain intact.

## Evidence

Explicit user instruction on 2026-10-21 to connect S05 to the revised S02
example and emphasize the environment information missing from code-only
Chatbot Context in S06. Existing sources: DEC-0034 S02 comparison;
plan/DEMO_MATRIX.md TRIAL-001; STATE-00 source/test reconstruction;
S05/S06 approved Slide Map, Notes and recorded full/focused suite results.
There is no new C++ execution, Chatbot comparison or environment repair.

## Training Relevance

YES — show how a familiar question can connect to observed evidence while
preserving the difference between missing information and proven inability.

## Follow-up

Render and review the affected slides, compare embedded/Markdown Notes and
verify unchanged course allocation. Record actual local results in
production/evaluation/ACT_0_CONTEXT_SCOPE_REVISION.md. Windows PowerPoint,
target fonts, room projection, current account/Live behavior and timed
rehearsal remain UNVERIFIED. No new Trial or bundle is authorized here.

## Approval

Explicit user request to revise S05 and S06 while continuing the approved
course flow. The requested meaning is expressed without expanding the
historical evidence or claiming an unperformed tool comparison.


---

# DEC-0036 — Insert the Codex entry path and migrate current slide IDs

## Status

ACCEPTED

## Date

2026-10-21

## Context

The approved 80-slide course reaches a mental shift on S07: bring AI to the
Repository. The user requests a concrete desktop entry step before the
former S08 distinction between Repository access and Task intent. The user
also requests person and Agent icons to clarify shared visibility and human
final responsibility. This explicit instruction authorizes the one-slide
addition and the downstream current-ID migration.

## Problem

The existing transition does not show where a learner selects Codex in the
ChatGPT desktop app. Adding that step without a migration could desynchronize
Slide Map, templates, Notes, PPTs and current delivery references. A universal
claim that only Codex can access files would exceed the documented scope.

## Decision

- Insert S08, "Repository work starts in Codex", between existing S07 and
  the former S08. Use ACT 0 / Section 0E / BEAT-003 / T03-C.
- Keep S01-S07. Shift the former S08-S80 once to S09-S81. Keep all existing
  Beat, Section, Demo, Trial, State and Decision IDs unchanged.
- Set the current course to 81 slides: ACT counts 10/12/15/18/18/8 and ranges
  S01-S10, S11-S22, S23-S37, S38-S55, S56-S73 and S74-S81.
- Preserve 360 net minutes, ACT times 40/55/70/85/80/30 and modes Lecture130,
  Demo73, Case83, Reflection20, Transition22 and Q&A32. Divide the former
  S07 Lecture three minutes into S07 two minutes plus S08 one minute. Keep
  the new S09 at Lecture two minutes, preserving Section 0E at five minutes.
- Show ChatGPT menu > Codex > project Repository folder, then request an
  investigation. Treat this as the development path selected for this course,
  not a universal restriction on other ChatGPT file-access features.
- Treat the menu as an official-source reconstruction. The top-left position
  is the user's UI specification; current local UI, target account and
  Windows behavior remain UNVERIFIED and REQUIRES PRODUCT CHECK.
- On S09 distinguish what a person and an authorized AI Agent may inspect
  from goals, allowed scope and final acceptance for which the person retains
  decision authority and responsibility. AI may investigate and propose.
- Preserve historical 80-slide prototype and Pilot files, actual asset paths and
  previous Decision bodies. Mark their version and link a full migration
  table. Update current references, official Map, templates and Notes.
- Defer presenter bundle regeneration as already requested. Do not alter the
  Demo repository, run a new Trial or broaden existing evidence claims.

## Rationale

A short product entry step connects the mental model to the learner's next
action. Reusing T03-C preserves the existing 11-template, 27-variant system.
Reassigning one Lecture minute retains the approved six-hour curriculum and
keeps the subsequent access-versus-intent question necessary. Explicit
historical versioning preserves the provenance of validated evidence.

## Alternatives

- Keep the entry explanation in Notes only: does not satisfy the requested
  new slide and visible product selection.
- Duplicate the old S08 ID or use S07A: contradicts the requested sequential
  renumbering and leaves production references ambiguous.
- Add course time: unnecessary because the existing 0E allocation can carry
  a one-minute entry explanation.
- Claim Codex is the only possible file-access surface: unsupported because
  other ChatGPT workflows, including Work, can provide file access.
- Rewrite historical prototype IDs and previous Decisions: destroys the link
  to actual recorded artifacts and validation scope.

## Trade-offs

The migration touches current planning and production references across the
course. Historical IDs need an explicit version label and lookup table.
The one-minute entry description cannot replace target-account setup or a
Windows product check. The new graphical responsibility boundary remains a
teaching model, not an assessment of Agent reasoning capacity.

## Related Invariants

INV-IDENTITY-001, INV-NARRATIVE-001, INV-LEARNING-003, INV-VERIFY-001,
INV-RESPONSIBILITY-001, INV-DEMO-003, INV-SOT-003, INV-RESEARCH-001.

## Affected Artifacts

Current Slide Map, Template Map, Claim Freeze, visual and Notes standards,
production plan, current transition/Demo references, ACT/full PPTs and Notes,
current previews and delivery checklists. Add plan/SLIDE_ID_MIGRATION.md.
Historical prototype and Pilot artifacts retain original IDs and content.

## Evidence

Explicit user instruction to insert one slide after S07, describe the
ChatGPT desktop app's top-left ChatGPT/Codex selection, migrate later slide
numbers and align foundation documents. OpenAI Quickstart and App docs were
retrieved on 2026-10-21:
https://learn.chatgpt.com/docs/quickstart?setup=app
https://learn.chatgpt.com/docs/app
Recorded as SRC-0228, SRC-0229 and the scoped claim CLM-0031.
The Quickstart describes choosing Codex from the ChatGPT dropdown for
codebase context and developer tools. Current local UI inspection is not
verified. No actual screenshot or new Product Trial is established.

## Training Relevance

YES — connect a Repository investigation mental model to a concrete product
entry while separating documented features, observed behavior and human
acceptance responsibility.

## Follow-up

Validate 81 unique slide IDs, current references, 19-field Notes, unchanged
ACT/Mode/Section totals, rendering and historical-path preservation. Keep
Windows PowerPoint, target fonts, room projection, current account/Live
behavior and timed rehearsal as separate UNVERIFIED gates. Do not regenerate
the presenter bundle until the user resumes that work.

## Approval

Explicit user instruction on 2026-10-21 authorizes the insertion, role icons,
sequential renumbering and all related foundation-document alignment.

# DEC-0037 — Ground S10 in a hypothetical inspection pipeline

## Status

ACCEPTED

## Date

2026-10-21

## Context

S10 closes ACT 0 by asking whether repository access reveals the desired
Task. The user requests a manufacturing inspection pipeline after ROI crop
so the audience can connect the question to its engineering work.

## Problem

A visual pipeline makes the desired future work concrete. However, the Demo
repository already implements normalize, resize, statistics and their
execution path from STATE-00. At S10, crop has been investigated in TRIAL-001
but the TRIAL-002 fix has not been introduced. A literal claim that only crop
exists or is fully verified would contradict the recorded Story.

## Decision

Use one native, editable six-node question-context diagram in S10:
input image, ROI crop, normalization, resizing, statistics/features, and
inspection decision. Mark existing crop and its input with solid outlines;
mark the additional inspection-task definitions/connections with dashed
outlines. Keep the last decision as a question mark with no pass/fail result.
Label the manufacturing integration as a hypothetical teaching Task, not
actual repository execution order or missing-function evidence. Preserve
S10's title, two visible questions, role, Beat, Evidence Type and six minutes
(Transition 3 plus Q&A 3). Keep 81 slides, 360 minutes and all other slides.
Update the Map, T01-B contextual-diagram guidance, Claim Freeze, transitions,
ACT/full Notes, official Full/ACT 0 PPT and previews, and release identities.
Do not change the Demo repository or create a presenter bundle.

## Rationale

The existing crop investigation gives the audience a familiar starting point.
Later normalization, resizing and statistics work provides continuity to
Context and Harness discussions, while undefined inspection decisions make
the Task-intent question concrete without teaching the ACT 1 solution early.

## Alternatives

- Leave only the abstract question: less concrete for manufacturing audiences.
- Claim downstream functions are unimplemented: conflicts with actual code.
- Mark crop as verified complete: removes the need for the next ACT's fix.
- Demonstrate a working inspection classifier: unsupported by recorded evidence.

## Trade-offs

The future integration scope needs a visible label because its order is not
the actual process_image call order. The six nodes are one background
illustration, not six audience-response lenses or an algorithm lecture.

## Related Invariants

INV-IDENTITY-001, INV-NARRATIVE-001, INV-VERIFY-001,
INV-RESPONSIBILITY-001, INV-DEMO-003, INV-SOT-003.

## Affected Artifacts

S10 source, Map/template guidance/Claim Freeze/transitions, ACT 0/full Notes,
Full and ACT 0 PPTX/previews, current handoff/checklist and evaluation.

## Evidence

Explicit user request on 2026-10-21. Existing DEMO_REPOSITORY_SPEC module
inventory and read-only inspection of pipeline.py/statistics.py. Existing
TRIAL-001/002 and TRIAL-006/007/008 records; no new Trial or measurement.

## Training Relevance

YES — distinguish existing capabilities, a desired product integration,
and the human decisions still required before asking an Agent to act.

## Follow-up

Render S10 and its S09/S11 neighbors; verify Notes parity, untouched slide
content, 81-slide/360-minute budgets and current artifact identities.
Keep target Windows/room/product and timed rehearsal gates UNVERIFIED.

## Approval

The user's explicit S10 revision request authorizes this bounded layout and
Task-context change. Historical evidence and core Story remain preserved.

# DEC-0038 — Visualize prompt ambiguity and the intended task path

## Status

ACCEPTED

## Date

2026-10-21

## Context

The user requests Prompt window layouts for S11/S12, a shared AI Agent
illustration, possible parallel task interpretations, and a new example
slide showing the desired path after missing information is supplied.

## Problem

The current questions are abstract. A concrete branch comparison can make
missing intent visible, but images of indecision, steep costs and a selected
branch could otherwise look like measured failures, exponential laws,
observed repeated runs or deterministic success guarantees.

## Decision

- Keep S11's three questions and seven Case minutes. Show its request in an
  editable Prompt window, an AI-generated teaching Agent, and a qualitative
  rising token/time concept without measured values, multipliers or formulas.
- Show S12's request in the same input grammar. Draw three possible paths:
  change tests, change implementation, or clarify first. Retain the five
  missing fields: goal detail, preserve, scope, evidence and done.
- Insert S13, “원하는 작업 경로를 Prompt에 담는다”, in ACT 1 / 1B /
  BEAT-004 using T04-A. Supply the five fields in a short teaching Prompt and
  highlight the desired implementation path in the same three-path diagram.
  Keep verification necessary and do not guarantee determinism/correctness.
- Split S12 Case4 into S12 Case2 plus S13 Case2. Preserve Section1B eight
  minutes, ACT1 55 minutes, all ACT and Mode totals, and the net 360 minutes.
- Keep current S01–S12 IDs; move old S13–S81 to S14–S82. ACT counts become
  10/13/15/18/18/8, with 82 total slides. Keep all Beat/Section/Demo/Trial/State
  IDs and historical prototype/asset paths stable.
- Reuse the existing 11 Templates/27 Variants. Reuse the same Agent image for
  the explicitly requested same-Agent comparison. Update current planning,
  Notes, source, PPTs, previews and current handoff references.
- Preserve prior Decision bodies,80/81-slide records and source provenance.
  Do not change the Demo repository or create a presenter bundle/new Trial.

## Rationale

The first two slides establish remaining choices before the new concrete
payoff. The following S14 generalizes the example into developer questions,
then S15 presents the Task Specification model. The same visual branch
positions make the difference attributable to communicated intent in this
teaching example, without turning it into an experimental causal claim.

## Alternatives

- Keep the new information in Notes only: does not satisfy the new slide.
- Add time: unnecessary because one Case interval can be split in place.
- Assert exponential growth or deterministic selection: no measurement or
  controlled repeat evidence supports these stronger claims.
- Rewrite historical Slide IDs: would break provenance of actual artifacts.

## Trade-offs

The insertion renumbers current references across the course. A new mapping
table links the 81-slide baseline to 82 slides. Historical snapshots keep their
own IDs. The cost metaphor needs an explicit qualitative label and the
highlighted branch needs an intended-path/verification boundary.

## Related Invariants

INV-IDENTITY-001, INV-NARRATIVE-001, INV-VERIFY-001,
INV-RESPONSIBILITY-001, INV-DEMO-003, INV-SOT-003.

## Affected Artifacts

Current Slide Map, Template Map/Architecture, Claim Freeze, Visual Spec,
Notes Architecture/Freeze, Production Plan, current transitions/Demo links,
PPT/source/Notes/previews, current handoff/checklist and numbering lookup.

## Evidence

Explicit user instruction on 2026-10-21. Existing crop contract and Trial
records bound the teaching Prompt; no new execution or measurement is added.

## Training Relevance

YES — make the practical purpose of communicated intent visible while
separating a teaching alternative from observed Agent behavior.

## Follow-up

Validate 82 unique Slide IDs, 81 baseline mappings, nineteen-field Notes,
ACT/Mode/Section totals, current paths, rendering and evidence boundaries.
Windows, target account/room and timed rehearsal stay UNVERIFIED.

## Approval

The user explicitly requests the two revised slides and insertion after S12.
This authorizes the bounded example and sequential numbering migration.


# DEC-0039 — Map prompt instructions to numbered observable actions

## Status

ACCEPTED

## Date

2026-10-21

## Context

The user requests a left Prompt input, a right vertical numbered workflow
without arrows on S17, and a limited S18 adjustment to continue that flow.

## Problem

The previous horizontal workflow does not show which instructions the long
Prompt asks the Agent to follow. A visible mapping must distinguish actual
Prompt excerpts, observable behavior, and hidden reasoning or causal claims.

## Decision

- Keep S17's title, T05-A, WATCH role and Lecture 2 minutes. Use the actual
  TRIAL-002 Goal/Constraints summary and five core instruction excerpts,
  explicitly labeled as translated excerpts rather than a full transcript.
- Align left instructions 01–05 with the same numbers and colors on the
  right: reproduce, investigate, plan, edit and verify. Use vertical order
  without arrows. Leave observed outcomes and check counts for S18–S19.
- Retain S18's title, T06-A, four CAPTURED Demo minutes, actual crop diff,
  end-exclusive specification and width 3-to-2 example. Recall S17's
  investigation/plan numbers before edit, then hand off to verification.
- Align the two current Map records, Template Mapping and nineteen-field
  ACT/Full Notes. Preserve 82 slides, 360 minutes and all ACT/Mode totals.
- Do not add an asset, Trial, product claim or presenter bundle. Do not
  change the Demo repository, historical records or other slide content.

## Rationale

Shared numbers make each instruction-to-action relationship readable while
keeping the Demo setup distinct from the following recorded change and
verification evidence. The actual Prompt remains authoritative in the
Trial record; on-slide excerpts support presentation readability.

## Alternatives

- Show the full original Prompt: its complete isolation and Git constraints
  create unnecessary density for the two-minute WATCH setup.
- Keep the horizontal arrows: does not provide the requested direct mapping.
- Claim the mapping proves internal thought or Prompt-only causality:
  unsupported by a single historical recorded CLI run.

## Trade-offs

The slide omits some original constraints. Mark the content as excerpts and
retain a source pointer and the complete Prompt in the Trial record.

## Related Invariants

INV-IDENTITY-001, INV-NARRATIVE-001, INV-MATURITY-011,
INV-VERIFY-001, INV-DEMO-003, INV-SOT-003.

## Affected Artifacts

Current S17/S18 Map and Template Mapping, ACT 1 and Full Notes,
ACT 1 and integrated PPTs, their previews, and current artifact identities.

## Evidence

Explicit user instruction on 2026-10-21. plan/DEMO_MATRIX.md TRIAL-002,
including Prompt used, visible plan checkpoint, implementation and
verification. No new execution or measurement.

## Training Relevance

YES — compare requested procedure with observable Agent actions and retain
verification as a separate step after the minimal change.

## Follow-up

Render S17/S18 and compare S16–S19 continuity; check unchanged slide content,
Notes parity, 82-slide/360-minute budgets and current artifact identities.
Windows, target product/account/room and timed rehearsal stay UNVERIFIED.

## Approval

The user's explicit S17/S18 request authorizes this bounded layout and
handoff refinement without extending the existing evidence claims.


# DEC-0040 — Use raster illustrations for S11 resource growth curves

## Status

ACCEPTED

## Date

2026-10-21

## Context

The user requests images in place of S11's editable token-consumption and
work-time curves.

## Problem

The current native curves do not match the requested image treatment.
Replacing their format must preserve the qualitative teaching boundary.

## Decision

Use two built-in-generated transparent PNG illustrations for the curves
and their arrow tips: S11-token-growth.png and S11-time-growth.png. Keep the
native text labels, existing placement, Prompt, Agent, questions, footer,
Case 7 minutes, 82 slides and 360 minutes unchanged. Add source provenance
and align only the affected S11 planning and Notes record.

## Rationale

Raster curve illustrations satisfy the requested presentation format while
retaining the existing explanation of possible re-exploration costs.

## Alternatives

Keep native curves: does not satisfy the request. Add measured axes or
numbers: unsupported by the evidence and unnecessary for this teaching case.

## Trade-offs

The curves are editable as images, but their paths are not native graph
objects. Text labels remain editable and the source assets are retained.

## Related Invariants

INV-IDENTITY-001, INV-NARRATIVE-001, INV-VERIFY-001, INV-SOT-003.

## Affected Artifacts

S11 Map, ACT 1 / Full Notes, raster assets and provenance, slide source,
ACT 1 / integrated PPTs, previews and current artifact identities.

## Evidence

Explicit user instruction on 2026-10-21. The previous qualitative concept
and its claim boundary remain as approved in DEC-0038. No new measurement.

## Training Relevance

YES — preserve the distinction between a teaching illustration and measured
resource use while applying the requested visual treatment.

## Follow-up

Render S11, check text and image placement, and compare unaffected slide
content, Notes parity, current hashes and the unchanged time budget.

## Approval

The explicit user request authorizes this bounded image-format change.


# DEC-0041 — Show specification assertions with the crop vector example

## Status

ACCEPTED

## Date

2026-10-21

## Context

The user requests a compact left Check-to-claim table and a right vector
example resembling S02, making the role of strict specification checks clear.

## Problem

The previous lower text says a weak check can miss an error without showing
which values differ or how an assertion can distinguish the specification.

## Decision

- Keep S21's five Check-to-claim meanings, title, core message, role,
  T06-C, evidence boundary and Lecture 4 / Reflection 1 minutes.
- Move the table left. On the right, use native vector cells for the
  existing first-row crop example: input {1,2,3,4}, range [1,3), expected
  {2,3} of size 2 and an erroneous {2,3,4} of size 3. Emphasize the extra 4.
- Compare EXPECT_FALSE(actual.empty()) with a named expected vector,
  EXPECT_EQ(actual.size(), 2u) and EXPECT_EQ(actual, expected). Use
  GoogleTest test-runner assertions as teaching code, not a C++ execution.
- Explain that vector equality already checks length, values and order;
  the size row makes the width requirement explicit, not stronger by count.
- Permit the bounded right-side SUPPORTING example within T06-C. Keep
  82 slides, 360 minutes, all ACT/Mode totals and the S21-to-S22 handoff.
- Align S21 Map, Template Mapping and nineteen-field ACT/Full Notes.
  Add no Trial, test run, asset, Demo-state change or presenter bundle.

## Rationale

Visible expected and erroneous elements make the missed endpoint concrete.
Assertions tied to the specification reveal what evidence the check provides
without turning more assertions into a claim of general correctness.

## Alternatives

Keep the lower text: does not make the missed value visible. Reuse S02's
constructor lesson: would divert from the ongoing crop specification.
Show a new PASS/FAIL run: not required or supported by current evidence.

## Trade-offs

The right example uses more space than a footer inset. It stays a supporting
verification example, with no new Template or C++ tooling lesson. One input
illustrates the boundary but does not establish all-input coverage.

## Related Invariants

INV-IDENTITY-001, INV-NARRATIVE-001, INV-VERIFY-001, INV-SOT-003.

## Affected Artifacts

S21 Map and Template Mapping, ACT 1 / Full Notes, slide source,
ACT 1 / integrated PPTs, previews and current artifact identities.

## Evidence

Explicit user instruction on 2026-10-21. Existing crop example and TRIAL-002
verification boundary. GoogleTest Primer and Microsoft vector-operator
reference support the assertion and equality semantics. No new execution.

## Training Relevance

YES — tie test evidence to the exact specification instead of equating a
present or successful test with complete behavior validation.

## Follow-up

Render S21 and review S20-to-S22 continuity, assertion legibility,
unchanged slide content, Notes parity and the existing time budget.
Keep Windows, target product/room and actual timed rehearsal UNVERIFIED.

## Approval

The explicit S21 revision request authorizes this bounded composition and
teaching-example change without extending the recorded Trial claims.


# DEC-0042 — Connect ACT 1 requests, recorded work and completion evidence

## Status

ACCEPTED

## Date

2026-10-21

## Context

The user requests clearer developer-facing Prompt Engineering continuity in
ACT 1 after the accepted S17 mapping, S11 raster graphs and S21 vector case.
The current baseline is d9ae395, not the stale e5596fd request-time snapshot.

## Problem

Longer process and testing explanations can read as separate lessons rather
than Process and Verification information that belongs in the work request.

## Decision

- Keep the through-line: state the desired change, preserved conditions and
  evidence needed for completion in the request.
- Connect the filter example to familiar crop ambiguity; retain conceptual
  parallel paths and qualitative token/time images without measured effects.
- Separate S14's developer decisions, S15's five-item framework and S16's
  concrete teaching-request sentences. Distinguish investigable repository
  facts from human goals, constraints, priorities and acceptance criteria.
- Preserve S17's numbered actual-Prompt mapping. Read S18's investigation,
  preservation and minimal diff, then S19's recorded checks as responses to
  the actual Process and Verification instructions. Do not identify the S16
  teaching Prompt as the actual Trial input.
- Reconnect S20's report and S21's accepted vector/assertion example to
  requested completion evidence and human judgment. Preserve DEC-0041.
- Explain relevant tests, project-wide tests, CLI sample execution and change
  review in plain Korean before needed English labels. Preserve raw commands,
  quotations and test counts. The actual targeted test_transform.py group
  includes resize coverage; do not label its three tests as crop-only.
- End with repeated test commands and preserved Project conditions to
  motivate S24. Add no technique, Trial, performance or cost comparison.
- Preserve 82 slides / 360 minutes, ACT 1's 13 slides / 55 minutes, titles,
  roles, IDs, per-slide time/Mode, evidence scope and the approved images.

## Rationale

Request design stays visible when investigation, test conditions, reporting
and acceptance evidence are traced back to what was requested. Distinct
slide jobs reduce repetition while preserving the approved narrative.

## Alternatives

Add a technique or allocate more teaching time: unnecessary and outside the
request. Reduce the original evidence or replace the S21 case: would discard
accepted work. Claim Prompt superiority or resource savings: unsupported.

## Trade-offs

Some request excerpts need shorter Korean wording and line breaks. Notes
retain fuller definitions and exact source boundaries; none of this makes
one verified input proof of all behavior or turns a schematic into a run.

## Related Invariants

INV-IDENTITY-001, INV-NARRATIVE-001, INV-VERIFY-001,
INV-RESPONSIBILITY-001, INV-DEMO-003, INV-SOT-003.

## Affected Artifacts

ACT 1 Slide Map, current curriculum/transition teaching guidance, ACT/Full
Notes, slide sources, ACT 1 / integrated PPTs, previews and current identities.

## Evidence

Explicit user ACT 1 request, current files at d9ae395, actual TRIAL-002 Prompt
and recorded work in DEMO_MATRIX.md, DEC-0038 through DEC-0041. No new run.

## Training Relevance

YES — connect requested intent, observable behavior, completion evidence and
the discovery of recurring Project Context without changing the course.

## Follow-up

Render and review all thirteen ACT 1 slides, S10/S24 handoffs, Notes parity,
protected fields, the unchanged budgets and historical evidence boundary.
Windows, target product/account/room and timed rehearsal remain UNVERIFIED.

## Approval

The user's explicit ACT 1 refinement request authorizes these bounded
connections and term explanations. No major role or time change is needed.


# DEC-0043 — Add practical Prompt Engineering reference slides

## Status

ACCEPTED — the user approves preserving every original slide and extending time.

## Date

2026-10-21

## Context

The user authorizes practical Prompt Engineering slides after current S21,
with each technique understandable from its own slide and briefly introduced
before current S22-S23 hand off to ACT 2. Baseline is 0772b4b, 82 slides,
360 minutes, ACT 1 13 slides and 55 minutes.

## Problem

The new reference slides need time. After being asked about allocation, the
user explicitly instructed: preserve the existing slides at all times and
allow the training duration to increase. This supersedes the old360-minute
cap for this authorized addition.

## Decision

Prepare eight standalone conceptual examples: delimiters, few-shot examples,
output format, grounding and unknowns, material clarification, task
separation, focused review, and concrete feedback. Keep each slide's use
case, copyable request, takeaway, source and limit visible.

Insert new S22-S29 and move old S22-S82 to S30-S90. Preserve every original
slide and allocated time/Mode. Add seven Lecture and one Case minute, making
ACT 1 21 slides /63 minutes, and the course90 slides /368 minutes.
Current totals: Lecture137, Demo73, Case84, Reflection20, Transition22,
Q&A32. Keep old S22-S23 as the transition to ACT 2, now S30-S31.

## Rationale

Concrete request sentences make a brief introduction useful as a reference.
The existing five-part request framework and historical Trial remain in
their roles. Methods are documented starting points, not universal laws or
measured improvements. Prompt evaluation and reusable systems remain later
ACT topics.

## Alternatives

A: retain ACT 1 55 and total 360 minutes, moving eight minutes from repeated
explanation into seven Lecture and one Case minute of method introduction.
B: retain existing slide allocations and add eight minutes, making ACT 1
63 and the total368. The user accepts B; do not shorten original slides.

## Trade-offs

One minute per example supports pointing out its key lines, not reading all
text aloud. More slides increase navigation; standalone source-backed
examples support later use. No actual rehearsal has established the pace.

## Related Invariants

INV-IDENTITY-001, INV-IDENTITY-002, INV-VERIFY-001,
INV-RESPONSIBILITY-001, INV-NARRATIVE-001.

## Affected Artifacts

Addition plan, documented claims and sources, eight-slide review snapshot,
current Map, template mapping, numbering references, source factories,
production notes, Full/ACT packages, previews and current artifact identities.
Update MASTER_PLAN and INV-IDENTITY-001 with the explicit duration approval.

## Evidence

Explicit user request and official OpenAI sources checked 2026-10-21:
SRC-0230 through SRC-0235, CLM-0032 through CLM-0039. No new Trial,
C++ execution, model comparison, cost or performance measurement.

## Training Relevance

YES — practical ways to convey the existing desired change, preserved
conditions and completion evidence, before recurring Project Context.

## Follow-up

Align the full slide architecture under the accepted time extension,
render the exact final packages and review the new handoffs. Preserve old
Trials, State tags, approved images and historical artifact paths. Keep
Windows, target product/account/room and rehearsal UNVERIFIED.

## Approval

The user authorizes content selection and slide addition, then explicitly
states that existing slides must always be retained and time may increase.
This approves the new90-slide /368-minute architecture without reducing any
prior allocation. No Trial or empirical claim changes.


# DEC-0044 — Match S17 requests to observed process records

## Status

ACCEPTED — explicit user instruction to revise S17 and align its Notes.

## Date

2026-10-21

## Context

S17 repeated its actual request as generic action labels. The user could not
identify its independent role between the teaching example on S16 and the
recorded edit/check results on S18-S19.

## Problem

A request beside synonymous procedure labels does not show what the Agent
actually did. Raw first-reproduction output and the exact plan utterance
are not available in the retained sources; fabricating them would exceed
the evidence boundary.

## Decision

Pair three translated actual request excerpts with the retained observation
summary: failing crop-test reproduction, product call-path investigation,
and a visible plan reported before the file-change event. Cross-check target
identifiers against TRIAL-001 and STATE-00 source; label them as identifiers,
not raw CLI excerpts. Preserve 01-03 and link 04 edit details to S18 and 05
verification results to S19. Keep S17 at Lecture2 minutes, T05-A,90 slides
and368 total minutes. Add no Trial, new command execution or effect claim.

## Rationale

Concrete observed targets and event order let the audience compare a
request with recorded external behavior. Reserving the diff, width change
and pass counts for S18-S19 gives each slide a separate role.

## Alternatives

Keep the previous five labels: rejected because they duplicate the request.
Reconstruct realistic raw logs or a quoted plan: rejected because the raw
text is unverified. Remove S17: not selected; preserve the existing slide.

## Trade-offs

The right side remains an explicitly labeled observation summary rather
than raw execution footage. Three pairs fit the existing two-minute slot;
complete request constraints and source limitations remain in Notes.

## Related Invariants

INV-VERIFY-001, INV-NARRATIVE-001, INV-RESPONSIBILITY-001.

## Affected Artifacts

S17 factory, Slide/Template Maps, Claim clarification, ACT1 and Full Notes,
Full/ACT1 PPTX and previews, current handoff identities and review document.

## Evidence

User request; DEMO_MATRIX TRIAL-002 Prompt used and Investigation and visible
plan checkpoint. Target identifiers: TRIAL-001 and the STATE-00 test/call
source. No current-product or repeated-run check was performed.

## Training Relevance

YES — process instructions can be checked against observable work records.

## Follow-up

Render the exact final Full and ACT1 packages, inspect S16-S19 continuity,
compare unchanged89 slide renders/Notes, and retain Windows/room/current
account and timed rehearsal as UNVERIFIED.


# DEC-0045 — Distinguish the prompt-method usage label

## Status

ACCEPTED — user feedback identifies an unclear usage cue on S22.

## Date

2026-10-21

## Context

The shared S22-S29 layout concatenates a bare Korean when label and the
usage condition into one text box. The user cannot immediately tell that
this line explains when to use the technique.

## Problem

The label reads as part of an incomplete sentence instead of a category.
The same ambiguity appears across all eight method slides.

## Decision

Use a separate pale badge reading "이럴 때 사용" with bold teal text, followed
by the unchanged condition in a distinct text box. Apply the common fix to
S22-S29 and align the eight Notes references. Preserve prompts, claims,
source scope, layout content,90 slides and368 minutes.

## Rationale

Explicit wording and spatial separation identify the line as a usage cue
without changing its teaching content.

## Alternatives

Punctuation alone retains a weak label. A separate full-width heading adds
unnecessary height. Use the existing line and visual tokens.

## Trade-offs

The badge adds a small shape and splits one text box into two; the current
condition text fits in the remaining width at the existing type size.

## Related Invariants

INV-NARRATIVE-001, INV-VERIFY-001.

## Affected Artifacts

Shared prompt-method factory, addition plan, eight Notes references,
Full/ACT1 packages, previews and current delivery identities.

## Evidence

User annotation on the S22 usage-condition element and its shared factory.
No new research, Trial, product claim or measurement is added.

## Training Relevance

YES — a standalone reference slide should state its applicable situation.

## Follow-up

Render all eight labels and preserve the other82 slides. Keep Windows,
room, product/account and timed rehearsal gates unchanged.


# DEC-0046 — Separate S34 prompt text and observed instruction use

## Status

ACCEPTED — explicit user feedback on S34 wording and guidance emphasis.

## Date

2026-10-21

## Context

The request block mixed README-only with a statement that the test command
was absent. The user interpreted the absence statement as an instruction.
The AGENTS.md column also underemphasized its role as project work guidance.

## Problem

Separate the actual task request, editorial annotation and observed guidance
use. The retained Trial cannot prove forced compliance or an isolated
AGENTS.md effect.

## Decision

Use a native prompt window for translated actual request excerpts, including
final diff and verification evidence. Place the test-command absence outside
as an explicit annotation. Emphasize AGENTS.md as project work instructions
and observed use of its test command. Preserve11/11, the four-minute Demo,
90 slides and368 minutes. Retain the Skills and duplicated-scope limits;
do not promote the observation into a guaranteed enforcement claim.

## Rationale

Readers can distinguish words sent to the Agent from explanatory notes.
The project-rule card makes the recorded instruction use prominent.

## Alternatives

Keep the absence statement inside the prompt: rejected as misleading.
Claim forced compliance: unsupported by the single-run evidence.

## Trade-offs

The prompt is a labeled excerpt; complete constraints stay in the Trial
source. Only the used test instruction is highlighted, not every rule.

## Related Invariants

INV-VERIFY-001, INV-NARRATIVE-001, INV-RESPONSIBILITY-001.

## Affected Artifacts

S34 factory, Slide/Template Maps, ACT2/Full Notes, Full/ACT2 PPTX, previews,
Demo02 fallback and current artifact identities.

## Evidence

User feedback; DEMO_MATRIX TRIAL-003 request, AGENTS inspection and command
execution; STATE-01 AGENTS.md9. No new Trial or live check.

## Training Relevance

YES — distinguish current Task requests from reusable project instructions.

## Follow-up

Render S33-S35 continuity, preserve other89 slide renders and Notes,
and keep Windows/room/account and timed rehearsal UNVERIFIED.


# DEC-0047 — Visualize S35 task and project information placement

## Status

ACCEPTED — explicit user direction on S35 destinations and arrows.

## Date

2026-10-21

## Context

S35 already contrasts the scope and lifetime of current task requests with
reusable project facts. Its text columns did not show where each goes.

## Problem

Make the prompt-window and Context-document destinations visible without
turning teaching examples into observed requests or product screenshots.

## Decision

Enclose each column's examples. Connect the left examples to a generated
prompt-window illustration and the right facts to a generated Markdown
page labeled AGENTS.md. Retain the native text, borders, arrows, headings
and lifetime comparison. Preserve S35's five-minute Lecture allocation,
all90 slides and368 minutes. Align Notes and the source Map.

## Rationale

Each arrow makes the destination explicit while the bottom comparison
retains the slide's original scope-and-lifetime purpose.

## Alternatives

Leave the two columns as text: insufficient for the requested distinction.
Use real product UI: unnecessary for the conceptual message.
Combine both task examples into one actual Prompt: misleading.

## Trade-offs

Generated silhouettes are decorative teaching illustrations. Core wording,
file labels and arrows remain editable. AGENTS.md is an example Context
location, not the only permitted location for all project knowledge.

## Related Invariants

INV-NARRATIVE-001, INV-VERIFY-001, INV-MATURITY-002.

## Affected Artifacts

S35 active factory, two illustrated assets and provenance, Slide Map,
ACT2/Full Notes, Full/ACT2 PPTX, previews and current handoff identities.

## Evidence

Current S35 scope/lifetime examples, S32-S34 teaching continuity and explicit
user feedback. No new Trial, UI check, measured benefit or Demo code change.

## Training Relevance

YES — show the relationship between information scope and its placement.

## Follow-up

Review the exact-package S35 render and S34-S36 continuity. Preserve other89
slide images and Notes. Keep Windows, room and rehearsal UNVERIFIED.


# DEC-0048 — Show S36 Context growth in audience-facing project phases

## Status

ACCEPTED — explicit user feedback on S36 comprehension and growth visuals.

## Date

2026-10-21

## Context

The audience sees the slides without browsing the repository. STATE labels
and line/byte counts did not explain the growth of project guidance.

## Problem

Show accumulated AGENTS.md information over project progression while
retaining the two recorded states and the limits of that evidence.

## Decision

Label the two document phases as project beginning and current project.
Connect them with project progression. Use a generated illustration of
one same-width document with gray retained information and teal additions.
Remove visible State IDs and size metrics. Keep the four actual added
information types, the relevance question and the four-minute Case budget.
Current project means the Story stage represented by STATE-02, not current
Demo HEAD. Preserve State IDs and exact size metadata in Notes and sources.

## Rationale

The phase labels work without repository knowledge. Added sections show
accumulation directly without treating file size as a performance metric.

## Alternatives

Keep State labels and explain them: unnecessary audience overhead.
Show a numeric size chart: not the requested qualitative presentation.
Claim a long measured period: unsupported by the retained records.

## Trade-offs

The document illustration conveys qualitative growth, not an exact ratio
or an actual screenshot. Its simplified lines do not reproduce source text.
Native headings, examples and the time-flow arrow remain editable.

## Related Invariants

INV-NARRATIVE-001, INV-MATURITY-002, INV-VERIFY-001.

## Affected Artifacts

S36 active source, illustration and provenance, Slide Map, ACT2/Full Notes,
Full/ACT2 PPTX, previews and current handoff identities.

## Evidence

User instruction, STATE-01/STATE-02 AGENTS.md and DEMO_MATRIX. No new Trial,
elapsed-time measurement, performance result or Demo repository change.

## Training Relevance

YES — accumulated information raises the next question of Task relevance.

## Follow-up

Review S35-S37 continuity and exact-package renders. Preserve other89 slides,
all time/Mode allocations and the boundary that growth did not prove failure.
Keep Windows, room, product/account and rehearsal UNVERIFIED.


# DEC-0049 — Make S37 request and Context relevance self-contained

## Status

ACCEPTED — explicit user request for a standalone S37 explanation.
Right-hand content selection is corrected by DEC-0050; the request window
and other approved scope remain valid.

## Date

2026-10-21

## Context

S36 now shows project guidance accumulating over time. S37 must make the
small README task and the relevance distinction understandable from the slide.

## Problem

Show the actual request as a prompt and separate needed Context from
accurate but unrelated details without implying a reading exclusion or failure.

## Decision

Use a native prompt window for translated actual TRIAL-004 excerpts. Keep
README-only, pyproject.toml authority, command preservation, no installation
or metadata edits and verification reporting. Show README/build settings in
a teal solid frame and image-processing details in a gray dashed frame.
Use explicit relevance labels in addition to color. Replace Task with the
plain Korean word for work in the title. Preserve4minutes, Demo2 plus
Reflection2, all90 slides and368minutes.

## Rationale

The task itself supplies the reason one Context group matters and the
other does not. The distinction remains meaningful without repository access.

## Alternatives

Keep a plain task heading: it does not show the actual request form.
Use red failure marks: inaccurate because no Context failure was observed.
Label the gray information unread: inaccurate because AGENTS.md was read.

## Trade-offs

The slide is a native reconstruction, not a product screenshot or full raw
transcript. The complete request remains in Notes and the retained source.
Test layout details are distinguished from the requested verification work.

## Related Invariants

INV-NARRATIVE-001, INV-MATURITY-002, INV-VERIFY-001.

## Affected Artifacts

S37 factory, Slide/Template Maps, ACT2/Full Notes, Full/ACT2 PPTX, previews
and current handoff identities.

## Evidence

Explicit user feedback and DEMO_MATRIX TRIAL-004 actual Prompt, Agent behavior,
relevant and irrelevant-but-correct Context. CLI0.154.0 is historical evidence.
No new Trial, live check, measured benefit or Demo repository change.

## Training Relevance

YES — relevance depends on the task question even when information is correct.

## Follow-up

Review S36-S38 continuity and final exact-package renders. Preserve other89
slides, all per-slide budgets and the absence of observed Context failure.
Keep Windows, room, product/account and rehearsal UNVERIFIED.


# DEC-0050 — Ground S37 relevance in AGENTS.md contents

## Status

ACCEPTED — explicit user correction of S37's right-hand comparison.

## Date

2026-10-21

## Context

DEC-0049 showed external README and pyproject.toml files in the relevant group.
The user clarified that both groups must classify contents of AGENTS.md.

## Problem

Restore the comparison to one guidance file without inventing build versions
or task-specific README-only instructions inside its general guidance.

## Decision

Keep the left actual-request window unchanged. Explicitly label the right
side as AGENTS.md contents. Highlight its Build / Run README pointer and
Core Constraints scope/verification guidance in teal. Keep Architecture,
Image Contract, Test structure details and CLI Summary in the gray group.
Preserve the solid/dashed visual distinction, four-minute Mode split,
all90 slides and368minutes. Correct only the right-hand selection of DEC-0049.

## Rationale

The audience can compare relevance within the same growing guidance file
introduced by S36, which is the intended Context Engineering example.

## Alternatives

Keep an external-file comparison: rejected by the user's clarification.
Put version numbers in AGENTS.md: inaccurate to the retained source.
Treat the entire Test section as unnecessary: overbroad for requested checks.

## Trade-offs

Selected guidance is translated and summarized, not a complete reproduction
of AGENTS.md. Specific task scope and build versions remain in their original
Prompt and build-setting sources. Matching guidance does not prove causality.

## Related Invariants

INV-NARRATIVE-001, INV-MATURITY-002, INV-VERIFY-001.

## Affected Artifacts

S37 source and Map, ACT2/Full Notes, Full/ACT2 PPTX, previews and current
handoff identities. Preserve DEC-0049's historical review and prior files.

## Evidence

Explicit user correction, STATE-02 AGENTS.md at55c0455 and TRIAL-004 Relevant
Context/Irrelevant-but-Correct Context. No new Trial or Demo code change.

## Training Relevance

YES — distinguish relevance among facts and guidance within one Context file.

## Follow-up

Verify unchanged left Prompt, other89 slides, all per-slide budgets and
source/Notes parity. Keep no-confusion/no-failure boundaries and unverified
Windows, room, product/account and rehearsal gates.


# DEC-0051 — Diagram S38 guidance, detail and reusable procedure

## Status

ACCEPTED — explicit user request to connect S38 with S37 visually.

## Date

2026-10-21

## Context

S37 distinguishes relevant guidance and unrelated detail inside AGENTS.md.
S38 must generalize the difference in a diagram understandable on its own.

## Problem

Distinguish common guidance, task-dependent detail and reusable procedure
without making them a rigid product taxonomy or claiming measured benefits.

## Decision

Replace the three text rows with three native relationship diagrams.
Several task types share common project guidance. README and crop requests
point to different relevant details. Two illustrative performance tasks
share one pre-change measurement, investigation and verification procedure.
Preserve the title,4minute Lecture, all90 slides and368minutes. Align Notes
and the Map while retaining the next Long Context research question.

## Rationale

Shared scope, selective detail and procedural reuse become different visible
relationships. The audience can infer their purposes without repository access.

## Alternatives

Keep the text table: insufficient for the requested visual explanation.
Show a linear three-step process: inaccurate because these are not stages.
Introduce Skill mechanisms now: exceeds this slide's role and story position.

## Trade-offs

The diagrams are a teaching model. The first two concern information scope
and timing; the last concerns the responsibility of a work method. A workflow
can itself be consulted on demand. These views are not mutually exclusive.
The routing arrows and performance examples are not observed execution.

## Related Invariants

INV-NARRATIVE-001, INV-MATURITY-002, INV-VERIFY-001.

## Affected Artifacts

S38 source and Map, ACT2/Full Notes, Full/ACT2 PPTX, previews and current
handoff identities.

## Evidence

User direction, approved S38 teaching role, S37/TRIAL-004 relevance boundary
and retained course planning. No new Trial, product check or Demo code change.

## Training Relevance

YES — distinguish what is generally true, which detail matters now and how
a kind of work should be performed.

## Follow-up

Review S37-S39 continuity, diagrams and Notes parity. Preserve other89 slides
and all per-slide budgets. Do not claim automatic routing, token savings,
performance improvement or a procedure actually stored in STATE-02.
Keep Windows, room, product/account and rehearsal UNVERIFIED.


# DEC-0052 — Show S39 research tasks and bounded transfer

## Status

ACCEPTED — explicit user request to connect S39 with S38 visually.

## Date

2026-10-22

## Context

S38 distinguishes common guidance, task-dependent details and procedure.
S39 must show what the cited research actually tested before returning to
S40's detail-routing design question.

## Problem

Study names and generic cautions alone hide the evaluated tasks and the
boundary between historical findings and present-day Codex performance.

## Decision

Keep one S39 with parallel native task diagrams and one scoped finding each.
Show position changes for Lost in the Middle and description/code input,
function-code return and similarity scoring for RepoQA. Separate an applied
work question from unproved current-Codex and Routing claims at the bottom.
Recheck primary sources and narrow SRC-0204 to its actual function task.
Retain90 slides,368minutes, S39 Lecture4 and every existing Slide ID/budget.
Align the Map, Notes, Full/ACT2 packages and artifact identities.

## Rationale

The inputs and evaluation are visible before the findings, so each research
claim is understandable without repository access. One page remains readable
and supports S38's question without adding a new research-lecture section.

## Alternatives

Keep the generic summary: insufficient task clarity.
Split into two slides: allowed, but unnecessary after local density review.
Show numeric curves or current-Codex results: exceeds available evidence.

## Trade-offs

The diagrams are qualitative task reconstructions, not screenshots or score
plots. RepoQA's16K code input is a historical main-experiment setting, not a
Codex limit. The papers motivate a work question but do not validate this
Demo's routing, token savings or product performance. The official RepoQA
citation is an ICML2024 workshop, not the main conference.

## Related Invariants

INV-NARRATIVE-001, INV-MATURITY-002, INV-RESEARCH-002,
INV-RESEARCH-004, INV-VERIFY-001.

## Affected Artifacts

S39 source and Map, ACT2/Full Notes, Full/ACT2 PPTX and previews, source
registry and current handoff identities. Preserve earlier review records.

## Evidence

Explicit user direction; primary Lost in the Middle ACL paper and RepoQA
paper/project checked2026-10-22. CLM-0014/0015 and SRC-0201/0204 retain their
bounded research scope. No new Trial, product check or Demo code change.

## Training Relevance

YES — distinguish a study's task, finding and justified transfer to work.

## Follow-up

Verify S38-S40 continuity, readable diagrams, all90 Notes and unchanged89
slides. Keep Windows, room, product/account and rehearsal UNVERIFIED.


# DEC-0053 — Connect S40 requests to guidance and detail

## Status

ACCEPTED — explicit user request to continue S39 with a visible routing path.

## Date

2026-10-22

## Context

S39 distinguishes research findings from a work question about evidence use.
S40 returns to designing where a task can find relevant detailed information.

## Problem

The abstract Task/Core/Detail labels do not show what the request asks,
what AGENTS.md provides or what the target document contributes.

## Decision

Show one native request-to-guidance-to-detail example. A crop boundary
question connects to AGENTS.md's image-behavior reference, then to the
half-open range specification in docs/image-contracts.md. Reconstruct the
request and guidance summary; label the path as a teaching model rather
than an observed reading sequence. Keep the C++ bridge at pattern level.
Retain the title,90slides,368minutes, S40 Lecture3 and all existing budgets.
Align the Map, template row, Notes, Full/ACT2 and current artifact identities.

## Rationale

The audience can distinguish the question, the document pointer and the
relevant specification without inspecting this repository. One example
leaves S41's Core-content decision and S42's recorded reorganization intact.

## Alternatives

Keep generic labels: insufficient for independent slide comprehension.
List every detail document: adds density and repeats the following slide.
Present the arrows as a recorded agent sequence: exceeds the evidence.

## Trade-offs

STATE-03 supplies actual filenames and a retained crop specification.
The diagram and request are teaching reconstructions, not a new Trial.
A document pointer does not prove automatic, exclusive or successful
retrieval, measured performance benefits, token savings or causality.
The C++ transfer is an engineering pattern, not a C++ execution result.

## Related Invariants

INV-NARRATIVE-001, INV-MATURITY-002, INV-MATURITY-004,
INV-RESEARCH-004, INV-VERIFY-001.

## Affected Artifacts

S40 source, Slide Map and template row, ACT2/Full Notes, Full/ACT2 PPTX,
previews and current handoff identities. Preserve earlier review history.

## Evidence

User direction; approved S40 teaching role; STATE-03 at f3e2e37, AGENTS.md
Context Routing and docs/image-contracts.md Crop specification. The later
TRIAL-005A/B observation stays distinct. No new Trial or Demo code change.

## Training Relevance

YES — separate a task question, project guidance and detailed specification.

## Follow-up

Review S39-S41 continuity, native diagram and Notes parity. Preserve other89
slides and every per-slide budget. Keep Windows, room, product/account and
rehearsal UNVERIFIED. Do not regenerate the presenter bundle.


# DEC-0054 — Distinguish S41 core guidance from task detail

## Status

ACCEPTED — explicit user request to distinguish guidance and detail visually.

## Date

2026-10-22

## Context

S40 shows one task reaching a specification through AGENTS.md guidance.
S41 must explain what belongs in that starting point versus topic detail.

## Problem

Generic Core/Detail labels do not show which facts are shared, when details
matter or which actual documents can hold the relevant information.

## Decision

Retitle S41 to ask what belongs in AGENTS.md. Show a large shared-guidance
document with purpose, scope-preservation constraints and entry/pointer
information. Contrast three detail documents with their task conditions:
structure, image behavior and test scope. Keep the C++ transfer at pattern
level. "Always keep" describes guidance placement, not automatic reading.
Preserve the S41 role, T03-B, Lecture4,90slides,368minutes and every budget.
Align the Map, template row, Notes, Full/ACT2 and current artifact identities.

## Rationale

The audience can distinguish common guidance from task-dependent detail
without reading the repository. A scope comparison avoids repeating S40's
path and leaves S42's actual reorganization and later access observations.

## Alternatives

Keep abstract labels: insufficient for independent comprehension.
Repeat the same three-step routing path: duplicates S40's role.
Present the groups as automatic loading behavior: exceeds the evidence.

## Trade-offs

STATE-03 supplies the retained filenames and content examples, summarized
for a teaching model. The slide is not a complete instruction-file copy or
a live product observation. Separation alone does not prove retrieval,
token savings, compliance, speed or performance benefits. Historical title
and migration records remain evidence of their earlier versions.

## Related Invariants

INV-NARRATIVE-001, INV-MATURITY-002, INV-MATURITY-004,
INV-RESEARCH-004, INV-VERIFY-001.

## Affected Artifacts

S41 active source, Slide Map and template row, ACT2/Full Notes, Full/ACT2 PPTX,
previews and current handoff identities. Preserve earlier review history.

## Evidence

User direction; approved S41 scope role; STATE-03 at f3e2e37, AGENTS.md and
its architecture, image-contracts and testing documents. No new Trial,
product check, C++ execution or Demo repository change.

## Training Relevance

YES — distinguish cross-task guidance from relevant task-specific detail.

## Follow-up

Review S40-S42 continuity, text fit, native comparison and Notes parity.
Preserve other89 slides and every per-slide budget. Keep Windows, room,
product/account and rehearsal UNVERIFIED. Do not regenerate the bundle.


# DEC-0055 — Show S42 document reorganization and retained facts

## Status

ACCEPTED — explicit user request to show document reorganization before/after.

## Date

2026-10-22

## Context

S41 defines the scope of shared guidance versus task-dependent detail.
S42 must show how the retained repository actually reorganized those topics.

## Problem

The existing topic-to-file list hides the prior single-file structure and
can make a shorter AGENTS.md look like information was discarded.

## Decision

Show one AGENTS.md with core guidance and A/B/C detail topics before the
change, then a smaller AGENTS.md and three detail documents afterward.
Match topics and retained guidance with labels and horizontal arrows.
Emphasize retained core facts while disclosing rewriting, elaboration and
added routing guidance. Keep the title, T04-B,5minute split,90slides and
368minutes. Align Notes, the Map, template row, decks and fallback identity.

## Rationale

The audience can see where each existing topic went and distinguish
reorganization from deletion without knowing repository state identifiers.
S43 remains the question about what agents actually access afterward.

## Alternatives

Keep the topic/file list: does not show the prior document structure.
Show only shorter text: can imply information removal or token savings.
Claim literal copying: inaccurate because detail and guidance were expanded.

## Trade-offs

The diagram summarizes Git state evidence rather than reproducing every
line or a raw execution screen. Retained facts are not a promise of
unchanged wording or total information volume. Added links do not prove
automatic retrieval, exclusive access, causality or measured benefits.
The S84 frozen historical excerpt stays unchanged within its stated scope.

## Related Invariants

INV-NARRATIVE-001, INV-MATURITY-002, INV-MATURITY-004,
INV-DEMO-001, INV-RESEARCH-004, INV-VERIFY-001.

## Affected Artifacts

S42 active source, Map/template row, ACT2/Full Notes and PPTX, previews,
DEMO-06 fallback hash and current handoff identities. Preserve review history.

## Evidence

User direction; STATE-02 at55c0455 and STATE-03 atf3e2e37, their four-file
context-only diff and the preservation mapping in plan/DEMO_MATRIX.md.
No new Trial, test run, current-product check or Demo repository mutation.

## Training Relevance

YES — distinguish semantic preservation, rewriting and information location.

## Follow-up

Review S41-S43 continuity, topic correspondence, native diagram and Notes
parity. Preserve other89 slides and every budget. Keep Windows, room,
product/account and rehearsal UNVERIFIED. Do not regenerate the bundle.


# DEC-0056 — Frame S43 requests and neutral observation questions

## Status

ACCEPTED — explicit user request for prompt windows and observation points.

## Date

2026-10-22

## Context

S42 shows document reorganization. S43 prepares the audience to observe
actual access under two different requests before seeing their results.

## Problem

The short question labels do not show the request conditions or tell the
audience which parts of the following records to compare.

## Decision

Show two editable prompt windows containing translated key excerpts from
TRIAL-005A/B. Preserve the crop scope, dependency/tool distinction and
read-only/no-change/evidence conditions. Add three neutral watch questions:
files opened, common/different accesses and evidence cited in the answer.
Do not show file routes, access lists, answers or success judgments.
Preserve the title, T05-A, Lecture2,90slides,368minutes and every budget.
Align the Map, template row, Notes, Full/ACT2 and current artifact identities.

## Rationale

The audience can understand both requests and what to watch without
repository access. Separating access from answer evidence supports the
next slides without turning a directory structure into a product claim.

## Alternatives

Keep two short topic labels: omits important request boundaries.
Connect requests to suggested files: reveals or biases the observation.
Show a live interface: not established by the retained historical record.

## Trade-offs

The windows are reconstructions of translated excerpts, not screenshots or
complete verbatim prompts. Side-by-side placement does not imply parallel
Subagents or a controlled performance comparison. Historical CLI evidence
is not current Desktop verification. No result is disclosed at this gate.

## Related Invariants

INV-NARRATIVE-001, INV-MATURITY-004, INV-DEMO-004,
INV-RESEARCH-004, INV-VERIFY-001.

## Affected Artifacts

S43 active source, Map/template row, ACT2/Full Notes and PPTX, previews and
current handoff identities. Preserve previous reviews and Demo artifacts.

## Evidence

User direction; TRIAL-005A/B original prompt records and environment in
plan/DEMO_MATRIX.md; approved S43 WATCH role. No new Trial, test run,
current-product check or Demo repository mutation.

## Training Relevance

YES — distinguish request scope, file access and reported answer evidence.

## Follow-up

Review S42-S44 continuity, prompt readability, no outcome leakage and Notes
parity. Preserve other89 slides and all budgets. Keep Windows, room,
product/account and rehearsal UNVERIFIED. Do not regenerate the bundle.


# DEC-0057 — Connect S44 access evidence with the crop answer

## Status

ACCEPTED — explicit user direction to visualize Crop evidence and scope.

## Date

2026-10-22

## Context

S43 presents two read-only requests and asks what documents are opened and
what evidence supports the answers. S44 pays off the Crop request before
S45 compares it with the dependency request.

## Problem

The previous two-column slide foregrounds the contract and answer but
leaves most observed document accesses and their scope in footer text.

## Decision

Show five Markdown documents read in TRIAL-005A's final run. Highlight
image-contracts.md and show its half-open crop specification beside the
recorded answer: source columns1/2, width2, end coordinate3 excluded.
Distinguish observed access/answer agreement from interpretation limits.
Keep the title, T07-A, Case5,90slides,368minutes and all other budgets.
Align the Map, Notes, Full/ACT2, previews and current artifact identities.

## Rationale

The audience can recover the request, accessed evidence and answer without
opening the repository. Explicit limits keep an observation from becoming
a claim about perfect routing, efficiency or exclusive causality.

## Alternatives

Keep the existing two-column view: leaves actual access scope implicit.
Show the full command log: obscures the evidence in incidental output.
Show a chronological path: the retained summary does not establish it.

## Trade-offs

The access list is a summary, not a complete log or reading sequence.
Arrows connect document content and answer for comparison; they do not
show an internal reasoning path. Source/test checks are summarized.
Historical CLI evidence does not verify current Desktop behavior.

## Related Invariants

INV-NARRATIVE-001, INV-MATURITY-004, INV-DEMO-004,
INV-RESEARCH-004, INV-VERIFY-001.

## Affected Artifacts

S44 active source, Map/template row, ACT2/Full Notes and PPTX, previews and
current handoff identities. Preserve prior reviews and Demo artifacts.

## Evidence

User direction; TRIAL-005A final-run access/answer and environment records
in plan/DEMO_MATRIX.md; read-only inspection of STATE-03 image contracts,
transform source and four-column sample. No new Trial or Demo test run.

## Training Relevance

YES — compare accessed sources, their specification and the reported
answer while preserving the limits of an observation.

## Follow-up

Check S43-S45 continuity, actual filenames, column diagram and Notes
parity. Preserve the other89 slides and all budgets. Keep Windows, room,
current product/account and rehearsal UNVERIFIED. Do not rebuild bundles.


# DEC-0058 — Compare S45 actual document access and interpretation limits

## Status

ACCEPTED — explicit user request to visualize the two access sets.

## Date

2026-10-22

## Context

S44 shows the Crop request's accessed documents, specification and answer.
S45 compares those observations with the dependency request before S46
recaps Context and introduces the remaining procedure repetition.

## Problem

The three-row comparison leaves shared reads and package configuration
mostly implicit. The scope boundary is easy to miss in footer text.

## Decision

Use a native editable matrix for seven document/configuration paths.
Show shared AGENTS.md, README and architecture reads. Show image-contract
and testing document reads for A, and package configuration reads for B.
Highlight observed read cells without treating unread cells as failures.
Place observed differences and interpretation limits beside the matrix.
Keep the title, T04-C,7minutes, all Mode splits,90slides and368minutes.
Align the Map, Notes, Full/ACT2, previews and DEMO-06 fallback identity.
Require the S45 native table during finalized-package validation.

## Rationale

The audience can compare the actual access sets without repository access.
Showing common and broader reads alongside differences avoids implying
perfect selection, efficiency or a causal effect from an access record.

## Alternatives

Keep only the original three rows: omits shared and configuration reads.
Show the complete log: obscures the comparison in incidental commands.
Use pass/fail icons: incorrectly turns access into a quality judgment.

## Trade-offs

The matrix summarizes final runs, not all commands or reading order.
Testing-document access varied across A invocations. Historical CLI
records do not verify current Desktop behavior or an internal cause.
No token saving or performance improvement was measured by this Trial.

## Related Invariants

INV-NARRATIVE-001, INV-MATURITY-004, INV-DEMO-004,
INV-RESEARCH-004, INV-VERIFY-001.

## Affected Artifacts

S45 source, finalizer table requirement, Map/template row, ACT2/Full Notes
and PPTX, previews, DEMO-06 static fallback and current artifact identities.
Preserve previous reviews, unrelated slides and the Demo repository.

## Evidence

User direction; final TRIAL-005A/B access, answer, environment and
invocation-variability records in plan/DEMO_MATRIX.md; CLAIM_FREEZE scope.
No new Trial, test run or current-product check.

## Training Relevance

YES — distinguish observed selection differences from guarantees or
measured efficiency claims while comparing real recorded accesses.

## Follow-up

Check every matrix cell, final-run asterisk, Notes and S44-S46 continuity.
Preserve the other89 slides and all budgets. Refresh the changed S45 static
fallback hash and preserve the other28. Keep external delivery gates
UNVERIFIED. Do not rebuild presenter bundles.


# DEC-0059 — Visualize S46 repeated procedure and the Harness handoff

## Status

ACCEPTED — explicit user direction to show the remaining workflow problem.

## Date

2026-10-22

## Context

S45 compares observed document access and its limits. S46 closes ACT2 and
opens the problem that the next Harness section investigates.

## Problem

The text-only contrast does not make repeated procedure requests visible
or clearly separate information organization from work-method ownership.

## Decision

Contrast a compact AGENTS.md/detail-document diagram with two native
request panels for resize and normalization performance work. Highlight
the same condensed measurement, investigation, planning, implementation,
testing, remeasurement, comparison and review text in both requests.
Close with a procedure-repetition question and a next-Harness marker.
Label the screen as a teaching reconstruction of retained workflow records.
Keep the title, T04-A, Transition4/Q&A6,90slides and368minutes.
Align Map, Notes, Full/ACT2, previews and current artifact identities.

## Rationale

The audience can see what was organized and what is still repeated. The
question hands off to S47's actual repeated-workflow evidence without
introducing the later mechanism or a success claim prematurely.

## Alternatives

Keep the text-only contrast: leaves the repeated request implicit.
Show full Trial prompts: too dense for a transition and duplicates S47.
Show a reusable mechanism now: resolves the question before its evidence.

## Trade-offs

The three-line request procedure condenses eight common elements; it is
not a verbatim prompt or an execution screenshot. The document diagram is
teaching placement, not a chronological access trace. Side-by-side requests
do not imply concurrent Subagents. Preserve global-influence attribution
limits and do not claim measured Context efficiency or perfect selection.

## Related Invariants

INV-NARRATIVE-001, INV-MATURITY-004, INV-DEMO-004,
INV-RESEARCH-004, INV-VERIFY-001.

## Affected Artifacts

S46 source, Map/template row, ACT2/Full Notes and PPTX, previews and current
artifact identities. Preserve previous reviews and the Demo repository.

## Evidence

User direction; retained TRIAL-006 actual Prompt/Repeated Workflow Elements
and TRIAL-007 Task Prompt/workflow summary in plan/DEMO_MATRIX.md;
CLAIM_FREEZE teaching-model and Prompt-only attribution boundaries.
No new Trial, test run or current-product check.

## Training Relevance

YES — distinguish organized Project knowledge from repeated work methods
and motivate Harness through a remaining developer problem.

## Follow-up

Review S45-S47 continuity, matching procedure text, connector visibility
and Notes parity. Preserve the other89 slides, every budget and all29 Demo
fallback PNGs. Keep external environment/rehearsal gates UNVERIFIED. Do not
rebuild presenter bundles.


# DEC-0060 — clarify ACT2 progression and add three bounded explanations

## Status

ACCEPTED — explicit user approval of the full ACT2 audit revisions,
additional slides and net duration up to720minutes.

## Date

2026-10-22

## Context

The90-slide/368-minute deck accumulated individual ACT2 revisions. The
whole-sequence audit identified premature workflow reuse, overlapping
routing explanations, two studies in one dense slide, an unclosed
dependency question and a repeated ACT2/ACT3 procedure introduction.

## Problem

Preserve each approved explanation and evidence boundary while giving each
slide a distinct narrative responsibility and making both task answers visible.

## Decision

Use93slides/379minutes; ACT2 becomes18slides/81minutes. Keep every existing
slide allocation and add Lecture4 for RepoQA, Case4 for the dependency answer,
and Lecture2/Reflection1 for a bounded Context accomplishments recap.
Use the existing11Templates/27Variants and19-field Notes schema.
Make S38's procedure column an unresolved next-ACT question. Separate
S41 path, S42 placement criteria and S43 observed document migration.
Use S45/S46 for the two recorded answers, S47 for access comparison and
S48 for the scoped recap. S49 poses the remaining procedure-maintenance
question; S50 compares retained requests; S51 explains responsibility
without claiming AGENTS.md cannot contain procedures. Preserve the approved
functional illustrations and the later Skill decision/success sequence.

## Rationale

The sequence moves from a real relevance problem through bounded research,
placement design and actual observations to a remaining work-method problem.
Extra space closes questions and separates evidence instead of repeating
explanations.720minutes is the user's ceiling, not a target to fill.

## Alternatives

Keep90slides: retains density and leaves the B answer implicit.
Rewrite every ACT: unnecessary; preserve unchanged ACT0/1 and downstream roles.
Allocate720minutes: no evidence that the material needs the full allowance.

## Trade-offs

Three added slides require an explicit90-to93 ID migration and refreshed
current operational references. Preserve historical assets, reports, Trial
identifiers, State tags and source filenames. Added time is a plan, not
measured rehearsal evidence. No new effect or product capability is claimed.

## Related Invariants

INV-IDENTITY-001, INV-NARRATIVE-001, INV-MATURITY-004,
INV-RESEARCH-004, INV-DEMO-004, INV-VERIFY-001.

## Affected Artifacts

Current Map/template rows, ACT2/ACT3 opening Notes and source, numbered
ACT3–5 source/Notes, Full/ACT2–5 PPTX and previews, current plan/operational
references, module footer map and static fallback identities. ACT0/1 packages,
Demo repository and presenter bundles remain untouched.

## Evidence

Latest user instruction; whole-ACT2 audit; retained State/Trial records in
DEMO_MATRIX.md; CLM-0014/0015 and original Lost in the Middle/RepoQA papers;
DEC-0043 and DEC-0046–0059. The source papers were reopened for scope checks.
No new Trial, installation, product replay or comparison experiment.

## Training Relevance

YES — distinguish facts, instructions, responsibility, observations and
performance claims while motivating Harness from the remaining problem.

## Follow-up

Render/review ACT2 with both boundaries, validate93/379 and per-slide Mode,
all19-field embedded Notes, unchanged content under ID migration, native
chart/table structure and current fallback links. Keep Windows, room,
product/account and timed rehearsal UNVERIFIED. Do not rebuild bundles.

DEC-0060 duration-label alignment: current S86 changes only the outdated six-hour recap title to “전체 Story를 한 장으로”. Its Story/Beat/time/Mode/evidence content remain unchanged. The earlier duration wording stays in historical records.


# DEC-0061 — center S40 on evidence for code-search results

## Status

ACCEPTED — explicit user approval of the revised S40 message and adjacent
S39/S41 continuity while preserving the approved Story and claim scope.

## Date

2026-10-22

## Context

S40 separated RepoQA from the prior research slide, but a study-centered
lecture did not make the developer's next action clear enough.

## Problem

Connect long-context caution to checking task-relevant code evidence before
S41 introduces a path to the relevant detail, without claiming routing gains.

## Decision

Use the question "AI가 필요한 코드를 찾았다는 것을 무엇으로 확인할까?".
Pair a constructed crop request and a bounded existing code excerpt with
three course-model questions: specific location, request/behavior match and
relevant surrounding sources. Keep RepoQA in a small supporting-study region
and preserve its exact task/conditions/limits in Notes. Apply existing T03-C
with TEACHING_MODEL/RESEARCH separated. Retain93slides/379minutes, S40 Lecture4,
all IDs and original evidence/effect limits. Only S40 changes on screen.
Align S39/S40/S41 Notes; remove the leftover two-study explanation/timing
from S39 Notes. Keep S39/S41 visual content and the other92 slides intact.

## Rationale

The slide gives the audience observable questions about a search result and
makes S41's navigation design necessary. The study supports the relevance
of code-search evaluation, not this course rubric or a product-effect claim.

## Alternatives

Keep the independent study introduction: the developer action stays implicit.
Remove all research conditions: loses provenance and inference boundaries.
Invent a new successful search: unsupported and unnecessary.

## Trade-offs

Research detail moves to Notes; the main illustration is educational and
not a new Agent trace. A one-line code excerpt cannot establish whole-function
correctness. Relevant additional sources depend on the task and risk.

## Related Invariants

INV-NARRATIVE-001, INV-RESEARCH-004, INV-DEMO-004, INV-VERIFY-001.

## Affected Artifacts

S40 factory, Map/template row, claim clarification, adjacent Notes, Full/ACT2
PPTX and previews, current delivery/fallback identities. No Demo code or tag,
other ACT package, Trial or presenter bundle changes.

## Evidence

Latest user request; current Map/Notes/Claim Freeze; existing crop implementation
at STATE-00-FIXED src/graypipe/transform.py; historical TRIAL-002; RepoQA
CLM-0015/SRC-0204. Read existing sources only; no new Trial or comparison.

## Training Relevance

YES — distinguish finding a name from providing task-relevant source evidence.

## Follow-up

Render the final packages, compare S39/S40/S41, verify the other92 visible
slides, unchanged budgets,93 embedded19-field Notes and static paths/hashes.
Keep Windows/product/account/room/rehearsal UNVERIFIED. Follow standing Git
checkpoint policy and leave presenter bundles paused.


# DEC-0062 — connect ACT3 procedure evidence and conditional choices

## Status

ACCEPTED — explicit user approval to implement the whole ACT3 flow review,
align Notes/planning, render the full deck and commit/push. Optional splitting
is authorized; the existing18 slides can retain distinct responsibilities.

## Date

2026-10-22

## Context

ACT2 now ends with procedure-maintenance friction. The ACT3 review found
abstract Skill placement, weak instruction/action correspondence, decisions
before component motivation and repeated summaries. It also found stale
Notes headings, S54's four-minute summary inside five allocated minutes,
S62's unnecessary cross-project criterion and S63's invalid slide reference.

## Problem

Connect the remaining procedure problem to reusable instructions, actual
observations and a designed work environment, while preserving all recorded
successes, causal limits and the ACT4 conceptual/meta separation.

## Decision

Keep93slides/379minutes, ACT3 S50–S67/85minutes and all per-slide budgets,
Mode allocations and identities. S50 briefly orients work methods/environment;
S51 distinguishes maintenance responsibility; S52 applies three roles to one
normalize task; S53 selects a shared procedure home. S54 introduces brightness
statistics and separates discovery/invocation/body evidence. S55 pairs exact
Skill excerpts with retained observations in a native table; S56 separates
method from answer. Keep S57 candidate direction and S58 formal state data.

Use S59 for the existing conceptual C++ independent investigations before
S60 recovers the current no-Subagent decision. Use S61 for an explicit
cross-task knowledge-management model before S62 recovers the original-source
audit/no-extra-Memory decision. S63 shows actual assets, S64 their work-system
relationship, S65 bounded external conditions, S66 the approved C++ transfer
illustration and S67 maintenance ownership with the ACT4 handoff.

## Rationale

Each slide advances from a question to source evidence or a distinct design
choice. Problem and potential use precede conditional decisions, while the
completed Harness remains late in the chapter. Concrete task roles avoid
repeating feature names or turning the chapter into an optimization tutorial.

## Alternatives

Keep only a shorter Prompt/Skill comparison: leaves procedure content implicit.
Add more slides: unnecessary once roles are separated within the existing18.
Invent a successful Subagent or Memory run: unsupported and unauthorized.
Remove conditional choices: loses the minimum-effective-system judgment.

## Trade-offs

The internal scenario/decision order changes; all original observations and
criteria remain represented. S59/S61 explicitly use CONCEPTUAL/TEACHING_MODEL;
S60/S62 retain the current decision/source audits, not product-feature runs.
Current field details move to Notes where they are not needed on screen.

## Related Invariants

INV-NARRATIVE-001, INV-MATURITY-005–010, INV-VERIFY-001,
INV-DEMO-004, INV-RESEARCH-004.

## Affected Artifacts

ACT3 factory overlay, Map/template/visual/claim documents, current Story and
production routers,19-field ACT3/Full Notes, relevant Demo runbooks/fallback
identities, Full/ACT3 PPTX and previews. Other ACT packages, Demo repository,
State tags, approved image files and presenter bundles are unchanged.

## Evidence

Latest user instruction and whole-ACT3 review; STATE-04 SKILL.md;
TRIAL-006/007/008 retained Matrix records; DEC-0017/0018/0019/0021;
STATE-04→STATE-04-PERF measurements. No new Trial, experiment, product replay,
Subagent/Memory execution or stronger effect claim.

## Training Relevance

YES — trace procedure text to recorded work, choose components for a problem
and retain source, scope and maintenance responsibility.

## Follow-up

Render all Full93 and ACT3 18slides. Review all revised slides and boundaries,
compare75 unchanged Full PNGs and all other ACT packages, verify93×19 Notes,
native tables S47/S55, chart S58, budgets, links and fallback hashes.
Keep Windows/room/product/account/timed rehearsal UNVERIFIED. Commit normal
project outputs to existing origin/main without force; keep bundles paused.


# DEC-0063 — clarify S51 command use and completion judgments

## Status

ACCEPTED — explicit user approval of the proposed S51 information-to-use
diagram, adjacent continuity, Notes alignment and rendered review.

## Date

2026-10-22

## Context

The S51 guidance/procedure comparison used overlapping categories. Guidance
can include a procedure, so separate panels obscured the intended shift from
available project information to reusable ways of applying it.

## Problem

Make execution timing and result judgment concrete without duplicating S50's
actual repeated requests or S52's goal/context/method combination.

## Decision

Use a single project-information source and a normalize teaching example.
Connect test instructions, behavioral specifications and measurement methods
to before-change, after-change and completion judgments. Repeat the same
test marker with different questions, without real outcomes or fake logs.
Keep the procedure permissible in AGENTS.md and defer the shared-home choice
to S53. Align S50's spoken handoff and S52's opening. Only S51 changes visually;
only S50/S51/S52 Notes change. Retain93slides/379minutes, ACT3's85minutes,
S51 Lecture4 and every existing ID, budget, Mode, image and evidence boundary.

## Rationale

A shared example shows what a work method adds to known commands and sources.
It avoids an exclusive file classification and gives S52 a distinct role:
combine the method with the current goal and continuing project constraints.

## Alternatives

Rename the two panels only: the conceptual overlap remains.
Introduce Skill immediately: skips the problem and S53's design choice.
Reproduce a new run: unnecessary and outside the approved evidence scope.

## Trade-offs

The diagram abstracts investigation and change steps to focus on when the
same information is used and which questions it answers. Notes retain
investigation, existing failures, conditional no-change, comparison limits
and reporting. This example does not replace the complete performance method.

## Related Invariants

INV-NARRATIVE-001, INV-MATURITY-005, INV-MATURITY-006, INV-MATURITY-011,
INV-VERIFY-001, INV-DEMO-004.

## Affected Artifacts

S51 factory and Map/template row; S50 handoff/S52 opening; ACT3/Full Notes;
Full/ACT3 PPTX and previews; current document hashes and revision evaluation.
No other ACT package, Demo repository, State tag, Trial or presenter bundle.

## Evidence

Latest user instruction and accepted planning proposal; existing BEAT-019,
TRIAL-006/007 retained request records and DEC-0062. No new product research,
Trial, comparison experiment or product replay is needed for this course model.

## Training Relevance

YES — connect available project information to execution timing and judgment
while preserving the difference between a teaching model and observations.

## Follow-up

Render finalized Full/ACT3 files, inspect S50/S51/S52, compare92 other Full
PNGs and90 other Notes, preserve native tables/chart and all budgets. Update
current identities and follow the standing Git checkpoint policy. Keep
Windows, target fonts/room, product-account and timed rehearsal UNVERIFIED.


# DEC-0064 — combine S52 goal, criteria and reusable method

## Status

ACCEPTED — explicit user request to visualize how the three responsibilities
apply to one task, preserve S51 continuity and align Notes/rendered outputs.

## Date

2026-10-22

## Context

S51 now explains command timing and judgment questions. S52's three parallel
panels name the current goal, project criteria and method but leave their
joint application implicit and can repeat a process explanation.

## Problem

Show the relationship in a single task without reteaching S51's before/after
steps or introducing S53's procedure storage choice early.

## Decision

Show the normalize goal entering one work area. Enclose the implementation
investigation/change decision in preserved image behavior and public
specifications. Connect the reusable measurement/investigation/verification/
comparison method to that same work. Keep the next-task reuse question.
Only S52 changes visually and in Notes; retain S51/S53 as the adjacent
anchors. Preserve93slides/379minutes, S52 Lecture5, all IDs, Mode allocations,
templates, existing images and evidence scope. Reuse T03-B for the combined
three-role diagram; no new Template or Variant is required.

## Rationale

The goal names the work, criteria bound allowable changes, and the method
guides how that work is done. A single bounded work area makes these roles
visible together and earns the later question of shared method maintenance.

## Alternatives

Retain only three panels with plus signs: joint application stays implicit.
Repeat S51's timeline: weakens the distinct role of this slide.
Add a successful new execution or Skill call: exceeds the evidence scope.

## Trade-offs

The diagram abstracts detailed verification already explained on S51.
Notes retain no-change allowance, conditional application and causal limits.
The visual boundary describes an obligation, not guaranteed enforcement.

## Related Invariants

INV-NARRATIVE-001, INV-MATURITY-005, INV-MATURITY-006, INV-MATURITY-011,
INV-VERIFY-001, INV-DEMO-004.

## Affected Artifacts

S52 factory, Map/template row, ACT3 flow and claim notes, ACT3/Full Notes,
Full/ACT3 PPTX/previews, current artifact identities and revision evaluation.
No other ACT package, Demo repository, State tag, Trial or presenter bundle.

## Evidence

Latest user request; existing BEAT-019, TRIAL-006/007 retained requests and
preservation requirements; DEC-0062/0063. This is a course model without new
product research, Trial, comparison measurement or current-product replay.

## Training Relevance

YES — distinguish goal, enduring criteria and a reusable method through
their joint application to one task rather than isolated file categories.

## Follow-up

Render Full93 and ACT3 18slides; inspect S51/S52/S53, compare92 other Full
PNGs and92 other Notes, verify budgets/native tables/chart/current hashes.
Follow the standing Git checkpoint policy, preserve paused bundles, and keep
Windows, room, product-account and timed rehearsal UNVERIFIED.


# DEC-0065 — explain S53 shared Skill maintenance and task requests

## Status

ACCEPTED — explicit user request to distinguish varying requests and a
reusable method, explain the Skill choice, align Notes and render the result.

## Date

2026-10-22

## Context

S52 now applies a goal, project criteria and a method to one task. S53 still
compares abstract question lists and procedure names, leaving the reason
to choose a repository Skill and its next-task reuse implicit.

## Problem

Show which request information varies and why the shared procedure should
be maintained together, without repeating S51/S52 or preempting S54 evidence.

## Decision

Use two educational task-request summaries and one project-owned
graypipe-performance SKILL.md diagram. Connect the shared method to both
requests and state the purpose of maintaining the procedure in one place
instead of rewriting it per request. Keep current goals, permitted scope,
preservation conditions and project criteria. Retain DEC-0017's choice as a
design decision; show discovery/invocation evidence only on the next slide.
Only S53 changes visually and in Notes. Preserve93slides/379minutes,
S53 Lecture4, all IDs/Mode, T05-A, image assets and evidence boundaries.

## Rationale

The two requests make variation concrete while the single method makes
shared ownership and updating visible. Skill selection follows repeated
procedure friction and prepares learners to inspect actual inclusion evidence.

## Alternatives

Rename the two abstract panels: reuse and maintenance stay implicit.
Show a complete Skill tutorial: exceeds this slide's role and current checks.
Invent successful calls for both earlier tasks: unsupported and misleading.

## Trade-offs

Request and procedure text are summaries rather than literal full Prompts.
Connectors show intended reuse, not actual invocations by those trials.
Notes retain conditional selection, no-compliance guarantee and AGENTS.md
as another possible home for instructions. This is not a superiority claim.

## Related Invariants

INV-NARRATIVE-001, INV-MATURITY-005, INV-MATURITY-006, INV-MATURITY-011,
INV-VERIFY-001, INV-DEMO-004.

## Affected Artifacts

S53 factory, Map/template row, ACT3 flow and claim note, ACT3/Full Notes,
Full/ACT3 PPTX/previews, current identity documents and revision evaluation.
No other ACT package, Demo repository, State tag, Trial or presenter bundle.

## Evidence

Latest user request; BEAT-020/021, DEC-0017, TRIAL-006/007 repeated requests,
STATE-04 Skill document and later TRIAL-008 inclusion records. No new Trial,
benchmark, product replay or research is needed for the design diagram.

## Training Relevance

YES — connect repetitive work to a maintainable method and distinguish
design intent from observed product behavior and causal evidence.

## Follow-up

Render Full93 and ACT3 18slides, inspect S52/S53/S54 and compare92 other Full
PNGs/Notes. Preserve per-slide budgets, native tables/chart and current paths.
Follow standing Git checkpoint instructions; keep bundles paused and Windows,
room, current product-account and timed rehearsal UNVERIFIED.


# DEC-0066 — clarify Skill reuse connectors and CLI inclusion evidence

## Status

ACCEPTED — explicit user request to polish S53 connectors and explain S54
with observed discovery, invocation and instruction-body evidence.

## Date

2026-10-22

## Context

S53 mixes thick block arrows with a thin branch. S54 lists observations but
does not visually separate where each type of evidence was found.

## Problem

Make the shared method diagram coherent and connect its design intent to
readable CLI evidence without implying current product behavior or compliance.

## Decision

Retain S53 content and replace its mixed connector geometry with a uniform
stroke and small native arrowheads. Recompose S54 as three evidence locations:
the /skills entry, the explicit task request and the trace's Skill entry.
Show the retained name, request invocation, bounded task summary, relative
path and whole-body inclusion. Label excerpts, translations and reconstruction.
Preserve93slides/379minutes, S53 Lecture4, S54 Demo5, all IDs/Mode, T05-A/T07-A
and existing Claim Status. Align only S53/S54 Notes; keep S55's action review.

## Rationale

Uniform connectors make one shared source easier to follow. Separating the
three evidence locations lets learners see what was observed at each point
and why a selector entry alone does not establish instruction-body inclusion.

## Alternatives

Enlarge the existing list: leaves the evidence locations implicit.
Invent terminal screenshots or a load event: exceeds the retained evidence.
Show the entire Skill body: crowds this slide and preempts S55's review.

## Trade-offs

The request uses a Korean summary and the trace uses a relative path and
body-range summary. Notes preserve the exact request's scope and no-change
allowance. The observed record is historical and cannot approve a current
surface, implicit invocation, compliance, efficiency or isolated causality.

## Related Invariants

INV-NARRATIVE-001, INV-MATURITY-005, INV-MATURITY-006, INV-MATURITY-011,
INV-VERIFY-001, INV-DEMO-004.

## Affected Artifacts

S53/S54 factory and Notes, Map/template descriptions, ACT3 flow/claim note,
Full/ACT3 packages/previews, DEMO-03 static fallback identity and current
handoff/review documents. Other ACT packages, image assets, product repository,
State tags, Trial results and paused presenter bundles remain unchanged.

## Evidence

User request; DEC-0017/0062/0065; plan/DEMO_MATRIX.md TRIAL-008 discovery,
invocation and load evidence. Read-only reinspection of the retained session
01a0f22c-e6a8-7e50-a4e1-4a581d62266c confirms the task prompt and full Skill
body. No new Trial, product replay, benchmark or research result is added.

## Training Relevance

YES — distinguish intended reuse, explicit invocation and observed body
inclusion before judging how the instructions relate to the actual work.

## Follow-up

Render Full93 and ACT3 18slides, inspect S52–S55, compare91 other PNGs/Notes,
and update DEMO-03's changed S54 fallback identity. Preserve budgets and native
tables/chart. Follow standing Git checkpoint instructions and retain Windows,
room, product-account and timed rehearsal as UNVERIFIED.


# DEC-0067 — connect Skill instructions to observed work records

## Status

ACCEPTED — explicit user request to clarify S55 after S54 and align Notes.

## Date

2026-10-22

## Context

S54 now distinguishes discovery, explicit invocation and full instruction
body inclusion. S55 has long English excerpts and short activity summaries.

## Problem

Make the instruction/action relationship readable on its own and distinguish
provided instructions from evidence that corresponding work occurred.

## Decision

Preserve T04-A and its native table. Show three numbered pairs of translated
Skill instructions and recorded output, pre-edit message and final diff.
Keep conditional planning explicit. Show the observed three benchmark runs,
six-field checks and1/1 focused plus11/11 full test results. Label translated
summaries and record reconstruction. Align S55 Notes and current artifacts.
Preserve93slides/379minutes, S55 Demo3+Case3, all other slide content/Notes,
IDs, Mode, evidence types and claim boundaries. Keep S54/S56 unchanged.

## Rationale

Learners can identify which record supports each instruction without treating
body inclusion as proof of execution. The localized summary reduces reading
load while Notes retain exact commands and the conditional original wording.

## Alternatives

Keep long English excerpts: leaves the distinction implicit.
Invent terminal screenshots: would misrepresent the retained evidence.
Show every instruction and log: obscures the three pairs and preempts later
implementation and benchmark interpretation.

## Trade-offs

The slide selects three pairs and cannot demonstrate every instruction.
Counts describe this run, not a universal Skill policy. Input inclusion and
observed behavior do not isolate the Skill from concurrent global guidance.

## Related Invariants

INV-NARRATIVE-001, INV-MATURITY-005, INV-MATURITY-006, INV-MATURITY-011,
INV-VERIFY-001, INV-DEMO-004.

## Affected Artifacts

S55 factory, Map/template description, ACT3 flow, Claim Freeze, S55 Notes,
Full/ACT3 packages and previews, DEMO-03 static identity and current handoff.

## Evidence

User request; DEC-0017/0062/0066; STATE-04 Skill; TRIAL-008 in DEMO_MATRIX.
Read-only reinspection of session01a0f22c-e6a8-7e50-a4e1-4a581d62266c:
request/body, baseline output, pre-edit message, patch, after output, tests,
CLI sample and final diff. No new Trial or product execution.

## Training Relevance

YES — choose evidence appropriate to the claimed action and distinguish
instruction inclusion, observed execution and causal attribution.

## Follow-up

Render Full93 and ACT3 18slides. Inspect S54–S56, compare92 other pages and
Notes, preserve timing and table/chart data, and update changed S55 fallback
identity. Follow standing Git checkpoints. Keep Windows, room, product/account
and timed rehearsal UNVERIFIED. Presenter bundles remain paused.


# DEC-0068 — distinguish reusable Skill procedure from task judgment

## Status

ACCEPTED — explicit user request to revise S56 after S55 and align Notes.

## Date

2026-10-22

## Context

S55 now pairs Skill instructions with observed work. S56 uses two text lists
and a long quote to distinguish reusable procedure from task-specific answers.

## Problem

Make that distinction readable from the slide and preserve the transition
from observed work to the evidence-based candidate choice in S57.

## Decision

Keep the title and T04-A comparison. Diagram the Skill's reusable baseline,
verification/comparison and reporting instructions on the left. Connect them
to task evidence and questions about implementation, measurements and trade-offs
on the right. Show conditional adoption and no-change paths as a teaching model.
Retain the no-change source quote and its meaning in Notes.
Preserve 93 slides, 379 minutes and S56 Lecture3. Keep all IDs, Mode, evidence
and claim boundaries. Change only S56 content/Notes and align current artifacts.

## Rationale

The diagram separates what the procedure carries into another task from
what must be measured or judged for the present one. Conditional branches
make no-change understandable without inventing an observed outcome.

## Alternatives

Enlarge the existing lists: retains a mostly verbal distinction.
Fill in actual candidate answers now: preempts S57/S58.
Show a fixed winner or failure result: contradicts the evidence-dependent rule.

## Trade-offs

Selected instructions are translated and compressed for display. Notes retain
the source meaning and clarify that the diagram is not the full procedure.
The task-specific questions remain open until the next evidence slide.

## Related Invariants

INV-NARRATIVE-001, INV-MATURITY-005, INV-MATURITY-006, INV-MATURITY-011,
INV-VERIFY-001, INV-DEMO-004.

## Affected Artifacts

S56 factory, Map/template description, ACT3 flow, Claim Freeze, S56 Notes,
Full/ACT3 packages and previews, current handoff/static identities and review.

## Evidence

User request; DEC-0017/0062/0067; STATE-04 graypipe-performance Skill; retained
TRIAL-008 records in DEMO_MATRIX. Read-only inspection confirms the reusable
instructions and no-change allowance. No new Trial or product execution.

## Training Relevance

YES — keep reusable procedure and task-specific evidence/judgment distinct.

## Follow-up

Render Full93 and ACT3 18 slides, inspect S55–S57, compare92 other screens and
Notes, preserve native tables/chart and verify current artifact identities.
Follow standing Git checkpoints. Keep Windows, room, product/account and timed
rehearsal UNVERIFIED. Preserve the Demo repository and paused presenter bundles.


# DEC-0069 — simplify the candidate selection evidence on S57

## Status

ACCEPTED — explicit user request to improve S57 visually and reduce text.

## Date

2026-10-22

## Context

S56 distinguishes reusable procedures from evidence-based task judgments.
S58 presents the selected product change's formal state measurements.

## Problem

S57 repeats conditions across several text groups, making the selected
candidate and its reason difficult to locate while presenting.

## Decision

Use a shorter takeaway title, one shared-condition line and two native
candidate/runtime/decision lanes. Highlight the selected row and keep the
rejected row secondary. Translate row-level built-in reduction into a short
Korean label; retain exact implementation details and source scope in Notes.
Preserve the qualitative candidate evidence, Case5,93slides/379minutes,
T07-B, all IDs and Mode. Keep S56 and S58 unchanged.

## Rationale

One focal decision and a fixed reading order make the evidence easier to
follow without adding algorithms, results or claims to the course.

## Alternatives

Keep every implementation phrase on-screen: competes with the decision.
Add quantitative bars: violates the frozen qualitative candidate scope.
Add a slide: unnecessary for this two-candidate decision.

## Trade-offs

The screen shortens labels and removes repeated conclusions. Notes preserve
field names, implementation trade-offs and the two comparison baselines.

## Related Invariants

INV-NARRATIVE-001, INV-MATURITY-006, INV-VERIFY-001, INV-DEMO-004.

## Affected Artifacts

S57 source, Map/template description, ACT3 flow, Claim Freeze, S57 Notes,
Full/ACT3 packages and previews, current handoff identities and review.

## Evidence

User request; DEC-0062/0068; existing TRIAL-008 candidate comparison in
DEMO_MATRIX and the frozen qualitative claim. No new Trial or product run.

## Training Relevance

YES — preserve a measured trade-off while simplifying its presentation.

## Follow-up

Render final Full/ACT3 packages and inspect S56-S58. Preserve other92 screens,
Notes and native tables/chart, then follow standing Git checkpoints. Keep
Windows, room, product/account and timed rehearsal UNVERIFIED. Preserve the
Demo repository and paused presenter bundles.


# DEC-0070 — connect the brightness task to candidate and product evidence

## Status

ACCEPTED — explicit user request to review early ACT3 and revise S57/S58.

## Date

2026-10-23

## Context

S50–S56 progress from repeated procedure to Skill use and evidence-based task
judgment. The user could not understand S57 after its DEC-0069 shortening.
S58 must connect the selected change with its measured and verified results.

## Problem

Candidate names assume knowledge of the brightness-statistics function and
its full temporary list. Moving that explanation entirely into Notes removed
the context a first-time audience needs. S58 also subordinates behavior checks
to a small bottom line despite equal importance to timing and allocation.

## Decision

Keep S50–S56 screens and Notes after reviewing their distinct responsibilities.
On S57, show the task and existing list-allocation structure before the two
qualitative candidates. Identify the selected row-level built-in operations.
On S58, recall that change and separate runtime, Python peak allocation and
behavior checks into three visible areas. Preserve the native chart's exact
data and zero axis. Align the two Notes records and downstream planning.
This replaces DEC-0069's choice to put all implementation context in Notes;
its evidence limitations remain valid and its history stays intact.
Preserve both Case5 allocations, all93slides/379minutes, T07-B and claim scope.

## Rationale

Concrete task and data movement make the two candidates understandable before
asking the audience to interpret the selection. Keeping the product-state
results separate also prevents mixing them with the earlier Trial samples.

## Alternatives

Shorten candidate labels again: leaves the missing task context unresolved.
Teach detailed optimization code: distracts from reusable procedure and proof.
Add another slide: not needed for one compact task schematic and two choices.

## Trade-offs

S57 restores essential context rather than optimizing character count. Exact
field names, traversal details and sample conditions remain in Notes. S58
allocates separate space to behavior checks while retaining chart editability.

## Related Invariants

INV-NARRATIVE-001, INV-MATURITY-006, INV-VERIFY-001, INV-DEMO-004.

## Affected Artifacts

S57/S58 factories, Map/template descriptions, ACT3 flow, Claim Freeze, Notes,
Full/ACT3 packages, previews, current artifact identities and review report.

## Evidence

User feedback; existing TRIAL-008 Investigation/Implementation/Verification;
formal STATE-04-PERF record in DEMO_MATRIX §§191–200; Claim Freeze §8;
read-only review of S50–S59. No new benchmark or product execution.

## Training Relevance

YES — distinguish knowing a method from choosing and verifying a concrete
change using its task-specific evidence.

## Follow-up

Render Full93 and ACT3 18 slides; inspect changed slides and S50–S59 continuity.
Verify other91 screens/Notes unchanged, native chart data and embedded Notes
aligned, then follow standing normal Git checkpoints. Windows, room, account
and timed rehearsal remain UNVERIFIED. Keep Demo repository and bundles intact.


# DEC-0071 — compare investigation roles and show integration ownership

## Status

ACCEPTED — explicit user request to revise S59 and align Notes/rendering.

## Date

2026-10-23

## Context

S58 presents the selected brightness change's recorded verification.
S59 introduces the existing hypothetical C++ role-separation case before
S60 evaluates whether the actual task needed Subagents.

## Problem

The existing three investigation panels do not clearly compare ownership
when one Agent handles everything. A first-time audience may miss why
independent roles are considered and who checks and combines their output.

## Decision

Compare the same performance, build and test investigations side by side.
Show one Agent owning all three and synthesis on the left. On the right,
show the main Agent assigning scope/output to three Subagents, then receiving,
checking and integrating their evidence. Label the information each role uses.
Keep the independence question prominent and the cost/scope boundary visible.
Align only S59 Notes and its relevant planning and delivery references.

## Rationale

Using identical tasks isolates the organizational difference. A branching and
merging diagram makes assignment and final integration understandable without
a feature tutorial, long prose, or an implied measured performance comparison.

## Alternatives

Keep three role panels; this leaves the single-Agent comparison implicit.
Add a live Subagent demonstration; this lacks approved evidence and scope.
Add a benefit chart; no comparative speed or quality measurements exist.

## Trade-offs

The diagram adds a second structure but reuses three short labels across both.
Put detailed evidence-transfer expectations in Notes. Keep independence,
main-Agent ownership and conceptual status on screen.

## Related Invariants

INV-MATURITY-007, INV-DEMO-004, INV-RESEARCH-001.

## Affected Artifacts

S59 source, ACT3/Full PPTX and previews, S59 Notes, Slide Map, Template Map,
ACT3 flow reference, Claim Freeze, module rationale, DEMO-07 static runbook,
fallback hashes and current delivery references. Preserve all other slides.

## Evidence

User instruction; existing DEMO-07 conceptual C++ investigations; BEAT-023–025;
DEC-0018 and DEC-0062. No observed Subagent execution or comparative benefit.

## Training Relevance

Consider role/context separation when investigations can proceed independently,
and retain responsibility for evidence review and synthesis in the main Agent.
Apply these criteria to the actual task on S60 rather than prescribing adoption.

## Follow-up

Render and inspect S59 with S58/S60. Validate embedded Notes, the 93-slide/
379-minute structure, S59 Demo3+Q&A1 and unchanged evidence boundaries.
Keep Windows, target account/surface, room and timed rehearsal UNVERIFIED.
Use the existing authorized Git checkpoint without force push or new bundles.


# DEC-0072 — show task dependencies behind the single-Agent choice

## Status

ACCEPTED — explicit user request to revise S60 and align Notes/rendering.

## Date

2026-10-23

## Context

S59 compares hypothetical independent C++ investigations and main-Agent
integration. S60 applies those criteria to the actual brightness-statistics
task before S61 opens the knowledge-retention question.

## Problem

The existing three panels describe generic investigation, change and checking.
Their short arrows do not identify what one stage needs from the previous
stage. Extra abstract criteria repeat S59 and obscure the actual choice.

## Decision

Use a flat editable dependency diagram. Keep the shared function and output
specification visible. Connect investigation results to the selected code
change, then changed code to output/test/timing/allocation checks. Show the
retained single-Agent choice and transfer/integration cost in two short lines.
Align only S60 Notes and relevant planning, runbook and delivery references.

## Rationale

Concrete handoffs explain why this task did not provide the independent
investigations assumed on S59. The existing narrow and overlapping scope,
limited distinct-Context value and integration burden support the recorded
choice. Dependency alone is not proof that delegation is impossible.

## Alternatives

Keep generic phase panels; this leaves their dependencies implicit.
Repeat S59's role comparison; this duplicates its teaching purpose.
Run a new Subagent comparison; this would require new evidence and scope.

## Trade-offs

Move detailed candidate names, exact measurements and conditional reasoning
into Notes or their existing evidence slides. Keep the visible dependency,
choice and its cost readable without adding another feature explanation.

## Related Invariants

INV-MATURITY-007, INV-DEMO-004, INV-RESEARCH-001, INV-VERIFY-001.

## Affected Artifacts

S60 source, ACT3/Full PPTX and previews, S60 Notes, Slide Map, Template Map,
ACT3 flow reference, Claim Freeze, module rationale, DEMO-07 static runbook,
fallback hashes and current delivery references. Preserve all other slides.

## Evidence

User instruction; DEC-0018 STATE-04 task/repository audit; DEMO_MATRIX
STEP07 171-190 and later191-200 formal product-change record; BEAT-023-025;
DEC-0062 and DEC-0071. No Subagent run or comparative benefit measurement.

## Training Relevance

Apply role-separation criteria to actual task inputs and dependencies, and
retain one Agent when additional roles have insufficient demonstrated value.
Reassess if independent investigation scope and information needs grow.

## Follow-up

Render and inspect S60 with S59/S61. Validate the93-slide/379-minute structure,
S60 Lecture1+Demo2+Q&A1, Notes parity and unchanged evidence boundaries.
Keep Windows, target account/surface, room and timed rehearsal UNVERIFIED.
Use the authorized normal Git checkpoint without regenerating bundles.
