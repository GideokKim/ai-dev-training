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

Priority: NEAR-TERM
Priority Rationale: Set before Demo Architecture chooses and implements the software Demo.
Depends On: None
Blocks: Software Demo repository selection and architecture; project-specific work in OQ-002, OQ-007, and OQ-008.

Why it matters:
The same repository is preferred across the Story, but its domain, language,
source, and location are not selected.

When to decide:
During Demo Architecture design, before implementing the software Demo.

Other Dependencies:
Review audience accessibility, repository suitability, and any usage or data
permissions.

Current candidates:
None recorded.

Do not assume:
Do not assume a language, domain, source repository, or that the software
Demo belongs inside demos/ rather than in a separate repository.

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
Priority Rationale: Resolve before fixing the Live Demo scope and rehearsing the chosen environment.
Depends On: None; confirm the intended account, product surface, and access when planning the Demo.
Blocks: Live Demo scope and rehearsal. It does not block recording or fallback planning.

Why it matters:
Live Demos depend on product access, account permissions, screen flow,
network availability, and reliable fallback material.

When to decide:
During Demo Architecture and rehearsal planning.

Other Dependencies:
Verify the then-current Codex environment and required account access.

Current candidates:
None recorded.

Do not assume:
Do not assume which Codex product surface, account tier, or live/recorded Demo
mix will be available.

### OQ-004 — Design the detailed Curriculum and time allocation

Priority: NEAR-TERM
Priority Rationale: Resolve during Curriculum design before finalizing chapter timings and downstream Slide Map.
Depends On: OQ-001 and OQ-003 for Demo duration; OQ-011 for final term-dependent wording.
Blocks: Final detailed Curriculum timing and Slide Map; it does not block independent Research.

Why it matters:
The broad 360-minute structure is set, but session titles, transitions, and
detailed lecture/Demo durations are not.

When to decide:
During Curriculum design.

Other Dependencies:
Use the approved Story and estimate Demo durations.

Current candidates:
The broad Part timing in MASTER_PLAN §11.

Do not assume:
Do not change the 360-minute net total or remove a core Story connection to
fit a draft schedule.

### OQ-005 — Verify current ChatGPT and Codex product facts

Priority: BLOCKING
Priority Rationale: Resolve before using any current product behavior as a fact or relying on it in a product-specific Demo.
Depends On: OQ-003 for the target product surface and training environment.
Blocks: Claims and Demos that depend on unverified current ChatGPT or Codex behavior. Independent Research may continue.

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
Blocks: The affected research-backed claims in Curriculum or Slides. Other Research may continue.

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

### OQ-007 — Set project-specific verification examples

Priority: NEAR-TERM
Priority Rationale: Resolve after choosing the software Demo repository and before specifying its verification Demo.
Depends On: OQ-001.
Blocks: Repeatable project-specific Build, Test, Benchmark, Review, and completion examples.

Why it matters:
Build, Test, Benchmark, Review, and completion criteria depend on the chosen
software project and task.

When to decide:
During Demo design, after selecting the repository and examples.

Other Dependencies:
Repository commands, expected results, and a repeatable Demo state.

Current candidates:
None recorded.

Do not assume:
Do not invent test commands, performance goals, or successful results.

### OQ-008 — Design Skills, Subagents, Memory, and Harness examples

Priority: NEAR-TERM
Priority Rationale: Resolve during Demo Architecture after a suitable project and a real problem are identified.
Depends On: OQ-001, OQ-005, and OQ-007 where those decisions apply.
Blocks: Final product-specific Skills, Subagent, Memory, or Harness Demo choices; it does not block the core Story.

Why it matters:
These structures should solve observed or demonstrable problems rather than
be installed as a feature checklist.

When to decide:
During Demo Architecture and after Research for current product behavior.

Other Dependencies:
The selected project, actual repeated workflow, role boundaries, and
verification needs.

Current candidates:
None recorded.

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
improvement helped.

Current candidates:
None recorded.

Do not assume:
Do not invent a repetition threshold or claim an improvement worked without
evidence.

### OQ-010 — Set Slide Map, visual design, and final deck details

Priority: LATER
Priority Rationale: Resolve after the planning gate and the relevant Curriculum, Demo, and Research decisions.
Depends On: OQ-004 and relevant outcomes from OQ-001, OQ-003, OQ-005, OQ-006, and OQ-011.
Blocks: Final Slide Map and visual/deck design. PPT still requires the separate user instruction.

Why it matters:
Slide count, layout, visual style, live/recorded transitions, and final deck
format depend on the completed Story and Demo plan.

When to decide:
During Slide Map and subsequent slide-design work, after satisfying the
planning gate.

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
Blocks: Final operational term wording in Storyline and Slides. Other Research may continue.

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

Priority: LATER
Priority Rationale: Assess when Storyline and Demo planning can judge the relevance of actual project history.
Depends On: None; actual recorded history is the prerequisite, not another Open Question.
Blocks: Using this repository as a factual Meta Example; it does not block the core training Story.

Why it matters:
The project may provide an authentic supporting example only if meaningful
problems and responses actually occur.

When to decide:
When the training's Storyline and Demo plan are developed.

Other Dependencies:
Review the actual project history and whether an event clarifies the core
training Story.

Current candidates:
None recorded.

Do not assume:
Do not invent project failures, complexity, or improvement history.

### OQ-014 — Determine whether company security policy needs a dedicated section

Priority: BLOCKING
Priority Rationale: Resolve before making company-specific security claims or using internal/customer code or data in an AI product or Cloud Demo.
Depends On: None; obtain the policy or user clarification listed under Other Dependencies.
Blocks: Company-specific data-use guidance and affected internal/customer-data Demos. Generic Research may continue.

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


## Active Assumptions

No active assumptions are recorded. The following remain unknown and must not
be filled in implicitly; resolve relevant items through research or user
confirmation:

- Learner operating system, IDE, and programming language.
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
