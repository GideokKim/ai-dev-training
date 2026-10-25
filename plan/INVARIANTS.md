# Project Invariants

## Purpose

This document extracts the conditions that protect the approved training
design from silent drift. It does not replace, summarize, or amend
plan/MASTER_PLAN.md. The full rationale, narrative, and unresolved details
remain in the Source of Truth.

An invariant is a condition whose change could mean that the project is no
longer building the same training. A design preference that can be adjusted
without changing that identity is classified as GUIDING rather than HARD.

## Source-of-Truth Hierarchy

Apply the project authority order:

1. Latest explicit user instruction.
2. plan/MASTER_PLAN.md.
3. plan/INVARIANTS.md.
4. Approved decisions in plan/DECISIONS.md.
5. Downstream Curriculum, Storyline, Demo, and Slide artifacts.
6. AGENTS.md work rules.

AGENTS.md guides work behavior and does not independently change training
design. When a clear, latest user instruction supersedes an earlier plan,
preserve the change history. Surface conflicts and follow Change Control
before changing a governing document.

## Invariant Strength

- HARD: An explicit project requirement. Do not change it without the user's
  explicit approval.
- STRUCTURAL: A rule that protects the Story or learning structure. A proposed
  change requires impact analysis and user confirmation.
- GUIDING: A strong design preference that may be adjusted when there is a
  reason and evidence. Record material project-level choices in DECISIONS.md.

Changing MASTER_PLAN.md or this file remains subject to Change Control,
regardless of Strength. A GUIDING choice may be adjusted in a downstream
artifact without changing its underlying Source-of-Truth rule.

Each entry records Category, Strength, Rule, Rationale, Source, Validation,
and Change Policy. IDs are stable identifiers rather than section numbers;
keep them stable when this document is reordered and never reuse a retired ID.


## Training Identity

### INV-IDENTITY-001 — Training scope

- Category: Training Identity
- Strength: HARD
- Rule: This is a developer training about ChatGPT and Codex in AI-Native
  Development. The current net duration is410minutes under DEC-0098, within
  the user-authorized720-minute ceiling. Use116slides, including the approved
  two Goal tips after S98. Retain the18-slide/81-minute ACT4 basis and add
  Lecture4minutes. Keep other ACT budgets and actual evidence scope.
  The prior GPU slide remains deleted; retain all other approved tips.
- Historical DEC-0091 Rule:402minutes/113slides. Replace prior S72 with
  five paced explanations, add two reuse pages and remove prior S73 under
  explicit user approval. DEC-0092 then changes S74-S79 without more time.
- Historical Rule: Earlier DEC-0060 approved93slides/379minutes. The initial requirement
  was six hours /360minutes; the
  user explicitly authorized the extension on 2026-10-21.
- Rationale: The audience, subject, and duration define the scope of the
  training.
- Source: plan/MASTER_PLAN.md §§1.1–1.2
- Validation: Does the material preserve the developer scope and the current410-minute schedule and720-minute ceiling under DEC-0098?
- Change Policy: Require explicit user approval before changing the scope or
  duration.

### INV-IDENTITY-002 — Engineering-system evolution

- Category: Training Identity
- Strength: HARD
- Rule: The training shows how developers' use of AI can evolve into an
  Engineering System. It is not merely a ChatGPT feature tour, a Codex manual,
  or a Prompt-writing course.
- Rationale: This distinction defines the purpose and character of the
  program.
- Source: plan/MASTER_PLAN.md §§3–5, 36–37
- Validation: Does it teach AI-use evolution into an Engineering System rather than only features, a manual, or Prompt writing?
- Change Policy: Require explicit user approval before changing this identity.

## Audience

### INV-AUDIENCE-001 — Range of AI experience

- Category: Audience
- Strength: HARD
- Rule: Preserve the wide range of AI experience among developers, from rare
  use or chatbot-only use through repository-level Agent and Harness
  experience. Account for participants who have little time for separate,
  intensive AI study.
- Rationale: The training must serve the organization as it is, not only one
  maturity level.
- Source: plan/MASTER_PLAN.md §§2.1–2.3, 35, 41
- Validation: Does it account for the broad experience range and limited time for separate study?
- Change Policy: Require explicit user approval before narrowing the audience
  or assuming substantial prior study.

## Primary Objective

### INV-OBJECTIVE-001 — Raise the shared organizational baseline

- Category: Primary Objective
- Strength: HARD
- Rule: The primary objective is to make AI-use capability more consistent
  across the developer organization. Do not trade away this objective to
  maximize feature coverage, novelty, advanced depth, or appeal to only one
  audience level.
- Rationale: Organization-wide capability alignment is the stated highest
  priority.
- Source: plan/MASTER_PLAN.md §3.1; §39
- Validation: Does it raise the shared organizational AI-use baseline above feature breadth or one-level optimization?
- Change Policy: Require explicit user approval before changing the primary
  objective or its priority.

## Delivery Constraints

### INV-DELIVERY-001 — No participant hands-on exercises

- Category: Delivery Constraints
- Strength: HARD
- Rule: Participants do not bring or use laptops and are not asked to run
  Codex, write Prompts, clone a repository, code, complete individual
  exercises, or present exercise results. Deliver through lecture, real
  examples, Before/After comparisons, visuals, instructor-led Codex Demos,
  failures, result comparisons, and Insights.
- Rationale: The delivery format is designed for observation and shared
  instruction, not participant practice.
- Source: plan/MASTER_PLAN.md §§0.3, 1.3, 8.1, 22
- Validation: Does it avoid requiring participant laptops or hands-on exercises and use instructor-led evidence?
- Change Policy: Require explicit user approval before adding participant
  hands-on work or changing the delivery constraint.

## Narrative

### INV-NARRATIVE-001 — Preserve the top-level Story order

- Category: Narrative
- Strength: HARD
- Rule: Preserve the progression Chatbot → Prompt Engineering → Context
  Engineering → Harness Engineering → Loop Engineering → AI-Native
  Development, and present each stage as a response to the problem that makes
  the next stage useful. Do not add a new top-level stage or reorder these
  stages without approval.
- Rationale: The sequence explains a widening set of engineering problems and
  the responses to them.
- Source: plan/MASTER_PLAN.md §§4.1, 5, 31, 36, 40
- Validation: Does it preserve Chatbot → Prompt → Context → Harness → Loop → AI-Native Development and present stages as problem-driven evolution?
- Change Policy: Require explicit user approval for any change to the
  top-level stages or their order.

### INV-NARRATIVE-002 — Make the problem precede its solution

- Category: Narrative
- Strength: STRUCTURAL
- Rule: For each major transition, show a plausible attempt that works at
  first, then the problem and its cause, followed by an improvement and the
  next problem. Do not introduce a solution before learners understand why it
  is needed.
- Rationale: Each Engineering concept should arise from a concrete friction
  in the preceding way of working.
- Source: plan/MASTER_PLAN.md §§4.2, 5, 12, 17, 24–25, 40, 42
- Validation: Does each major solution follow a visible problem, cause, and need for improvement?
- Change Policy: A proposed change requires analysis of affected transitions
  and user confirmation.

## Engineering Maturity Model

### INV-MATURITY-001 — Expand the scope without replacing earlier layers

- Category: Engineering Maturity Model
- Strength: STRUCTURAL
- Rule: Prompt, Context, Harness, and Loop address progressively broader
  problems; later stages do not make earlier stages obsolete. Keep Prompt
  Engineering as the Task Instruction layer, including Goal, Context,
  Constraints, Process, and Verification. Explain its scaling limit as repeated
  project context and workflow being placed in every Prompt, not as Prompt
  Engineering being useless.
- Rationale: The training presents engineering evolution rather than a series
  of competing techniques.
- Source: plan/MASTER_PLAN.md §§5.2–5.4, 13, 42
- Validation: Are Prompt, Context, Harness, and Loop presented as expanding layers rather than replacements?
- Change Policy: A proposed change requires impact analysis across the
  maturity Story and user confirmation.

### INV-MATURITY-011 — Keep Task Execution separate from maturity

- Category: Engineering Maturity Model
- Strength: STRUCTURAL
- Rule: Preserve Investigate → Plan → Implement → Verify → Review as a
  task-level workflow. Do not present it as a competing maturity model to
  Prompt → Context → Harness → Loop. Early Prompts may request this workflow;
  a mature Harness may encode parts of it; Loop feedback may improve it.
- Rationale: The two sequences answer different questions: how one task runs
  and how the AI development system evolves.
- Source: plan/MASTER_PLAN.md §§3.2, 6.1, 14, 25
- Validation: Is the task workflow distinct from the system maturity progression?
- Change Policy: A proposed change requires impact analysis and user
  confirmation.

## Learning Philosophy

### INV-LEARNING-001 — Teach concepts through the shared problem story

- Category: Learning Philosophy
- Strength: STRUCTURAL
- Rule: Do not organize the training as a sequence of independent feature
  introductions or terminology definitions. Introduce a concept after the
  preceding problem has made its purpose understandable.
- Rationale: The shared Story should explain why a technique is introduced,
  not only what it is called.
- Source: plan/MASTER_PLAN.md §§1.3, 4–5, 17, 22, 24
- Validation: Are concepts connected to the shared problem story rather than presented as independent features?
- Change Policy: A proposed change requires impact analysis and user
  confirmation.

### INV-LEARNING-002 — Do not make Best Practice lists the main structure

- Category: Learning Philosophy
- Strength: STRUCTURAL
- Rule: Tips, Prompt examples, and Best Practice lists may support the
  training, but must not become its main structure. Connect each important
  practice to the Failure or Friction it addresses and teach the reasoning,
  not only the rule.
- Rationale: A reasoned response to a problem is more useful than memorizing
  an unsupported list of practices.
- Source: plan/MASTER_PLAN.md §§4–5, 8, 17, 22, 24–25; STEP 02 instruction §58
- Validation: Are Best Practices tied to the problems they solve instead of becoming the main structure?
- Change Policy: A proposed change requires impact analysis and user
  confirmation.

### INV-LEARNING-003 — Protect core connections when compressing content

- Category: Learning Philosophy
- Strength: STRUCTURAL
- Rule: If the six-hour plan needs compression, first remove duplicate
  examples, similar Prompts, peripheral feature introductions, secondary
  Demos, and excessive implementation detail. Preserve the objective,
  maturity progression, problem-driven transitions, Prompt role and limits,
  AGENTS.md benefit and growth problem, Context relevance, Progressive
  Disclosure, reasons for Skills/Subagents/Memory, Harness perspective and
  technical debt, Loop Engineering, Verification, task workflow, and
  developer responsibility. Reduce examples within a stage before deleting
  a core stage or causal connection.
- Rationale: Reducing example volume protects the training's intended
  Engineering Story.
- Source: plan/MASTER_PLAN.md §§1–9, 22–26, 31, 39–43; STEP 02 instruction §59
- Validation: Does compression reduce examples before removing core concepts or causal links?
- Change Policy: A proposed change to protected content requires impact
  analysis and user confirmation.

### INV-LEARNING-004 — Require a Story role for added content

- Category: Learning Philosophy
- Strength: STRUCTURAL
- Rule: Additional time or space is not a reason by itself to add material.
  New content must at least clarify an existing problem, strengthen a
  transition, improve practical application, improve Verification or
  Reliability, add a meaningful advanced insight, or strengthen a real
  Harness/Loop example. State the content's role in the whole Story before
  adding it.
- Rationale: The training should deepen its purpose rather than accumulate
  features because they are new or interesting.
- Source: plan/MASTER_PLAN.md §§8–9, 17, 22, 37, 44; STEP 02 instruction §60
- Validation: Does each addition satisfy a stated role in the existing Story?
- Change Policy: A proposed change to this filter requires impact analysis
  and user confirmation.

## Context Engineering

### INV-MATURITY-002 — Context relevance and timing

- Category: Context Engineering
- Strength: STRUCTURAL
- Rule: Do not define Context Engineering as supplying as much information as
  possible. Preserve the question of what information an Agent needs, when it
  needs it, and where it should come from. Prefer relevance and timely
  availability over sheer volume.
- Rationale: Context quality depends on task relevance and availability at the
  right point in the work.
- Source: plan/MASTER_PLAN.md §§5.3, 13.2
- Validation: Is Context selected for task relevance, timing, and source instead of maximum volume?
- Change Policy: A proposed change requires impact analysis and user
  confirmation.

### INV-MATURITY-003 — Show AGENTS.md's benefit before its limits

- Category: Context Engineering
- Strength: STRUCTURAL
- Rule: Introduce reuse of repeated project context as the goal and AGENTS.md
  as the selected narrative example and mechanism. Show its initial benefit
  before showing how unrestricted growth can create irrelevant context,
  conflicting or stale instructions, maintenance cost, overload, and
  information-use concerns. Present a concise Router as the improvement;
  do not imply AGENTS.md is the only valid mechanism for every project or is
  inherently wrong.
- Rationale: The change from a helpful first solution to a constrained,
  maintainable Router must be visible in the Story.
- Source: plan/MASTER_PLAN.md §5.3
- Validation: Is repeated-context reuse presented as the goal, with AGENTS.md as a useful example whose benefits and limits emerge in the Story?
- Change Policy: A proposed change requires impact analysis and user
  confirmation.

### INV-MATURITY-004 — Use Progressive Disclosure for relevance

- Category: Context Engineering
- Strength: STRUCTURAL
- Rule: Explain context separation as making relevant information available
  for the relevant task at the relevant time. Do not treat file organization
  or splitting files as the goal by itself.
- Rationale: Progressive Disclosure solves an information-delivery problem,
  not a cosmetic file-layout problem.
- Source: plan/MASTER_PLAN.md §§5.3, 13.2
- Validation: Does context separation make relevant information available to the right task at the right time?
- Change Policy: A proposed change requires impact analysis and user
  confirmation.

## Harness Engineering

### INV-MATURITY-005 — Define Harness as a broader work system

- Category: Harness Engineering
- Strength: STRUCTURAL
- Rule: Harness Engineering extends Context Engineering to the environment
  and process needed for reliable work. State the engineering problem or goal
  before naming implementation mechanisms. Context, Instructions, Skills,
  Tools, Subagents, Memory, Verification, and Workflow may be mechanisms;
  do not present them as goals or a universal mandatory checklist.
- Rationale: The training's Harness concept is an operational framing for
  solving project-specific reliability problems.
- Source: plan/MASTER_PLAN.md §§5.4–5.7, 13.3; STEP 02 §86
- Validation: Does the material state the engineering problem or goal before presenting Harness components as possible mechanisms?
- Change Policy: A proposed change requires impact analysis and user
  confirmation.

### INV-MATURITY-006 — Introduce Skills through repeated workflow friction

- Category: Harness Engineering
- Strength: STRUCTURAL
- Rule: Introduce Skills to address work procedures that are repeatedly
  re-explained, executed inconsistently, or missing verification steps. Show
  reusable ways of working rather than presenting Skills as an advanced
  feature to collect.
- Rationale: This keeps the feature connected to a concrete problem and its
  Engineering response.
- Source: plan/MASTER_PLAN.md §§5.4, 8.2, 27
- Validation: Do Skills arise from repeated or inconsistent workflows and missing verification?
- Change Policy: A proposed change requires impact analysis and user
  confirmation.

### INV-MATURITY-007 — Balance Subagent benefits with coordination costs

- Category: Harness Engineering
- Strength: STRUCTURAL
- Rule: Introduce Subagents when one Agent's roles, context, investigation,
  or responsibilities become too complex. Explain costs such as coordination,
  duplicate work, context transfer, and result integration. Do not imply that
  more Subagents automatically produce better results.
- Rationale: Role separation is useful only when it addresses a real
  complexity cost.
- Source: plan/MASTER_PLAN.md §§5.5, 8.2, 23
- Validation: Are Subagent benefits balanced with coordination, duplication, transfer, and integration costs?
- Change Policy: A proposed change requires impact analysis and user
  confirmation.

### INV-MATURITY-008 — Distinguish Context from Memory

- Category: Harness Engineering
- Strength: STRUCTURAL
- Rule: Keep Context ("What does the agent need NOW?") distinct from Memory
  ("What should the system remember?"). Treat scope, reusability, freshness,
  and reliability as Memory concerns; do not frame Memory as a store for
  everything or as free of technical debt.
- Rationale: The distinction explains why a fact belongs in the current task
  context or may be worth retaining across tasks.
- Source: plan/MASTER_PLAN.md §§5.6, 23, 25
- Validation: Are current Context and retained Memory distinguished, including Memory lifecycle concerns?
- Change Policy: A proposed change requires impact analysis and user
  confirmation.

### INV-MATURITY-009 — Let the Harness architecture emerge

- Category: Harness Engineering
- Strength: STRUCTURAL
- Rule: Do not lead with a completed Harness diagram as a system to memorize.
  Let Context, Skills, Memory, Subagents, Tools, and Verification connect as
  the previously shown problems are solved. Show the completed architecture
  only in the latter part of the Harness chapter or in the final retrospective,
  to show how far the Story has progressed.
- Rationale: Learners should understand why the system has each part before
  seeing the combined architecture.
- Source: plan/MASTER_PLAN.md §§5.7, 13.3, 22
- Validation: Does the completed Harness diagram appear only after its parts have emerged, late in the Harness chapter or in the retrospective?
- Change Policy: A proposed change requires impact analysis and user
  confirmation.

### INV-MATURITY-010 — Establish the missing feedback and control after Harness

- Category: Harness Engineering
- Strength: STRUCTURAL
- Rule: Preserve the value of reusable work methods and a bounded actual
  success. Then show why the next review, revision and completion decision
  for one goal still needs explicit feedback/control. Use conceptual labels
  for unobserved friction; do not require stale instructions as the only cause.
- Rationale: The audience must see why goal-directed iteration is needed.
- Source: Latest user approval; DEC-0096/0097; MASTER_PLAN sections5.8–5.9,14.
- Validation: Does ACT3 lead to the same goal's review/revision control?
- Change Policy: User confirmation remains required for structural changes.
- Historical rule: Harness staleness was previously the required transition.

## Loop Engineering

### INV-LOOP-001 — Use evidence to iterate toward the task goal

- Category: Loop Engineering
- Strength: STRUCTURAL
- Rule: Fix the goal and completion criteria; connect implementation,
  tool-based verification, review, revision and re-review. Feed remaining
  issues into the next attempt toward the same goal. Distinguish completion,
  revision/retry and an unmet-goal stop or human escalation. Include
  different-model implementation/review with research-scoped benefits,
  without claiming universal superiority or an unobserved successful loop.
  Harness improvement remains related but does not replace this core.
- Rationale: Explain a working feedback system rather than only updating
  instructions for future tasks or repeatedly invoking an Agent.
- Source: Latest user clarification and approval; DEC-0096/0097;
  MASTER_PLAN sections5.9and14; ACT4_GOAL_LOOP_REPLAN.
- Validation: Can a learner trace one review issue to a revision and the
  same completion criteria, and distinguish tool evidence from model opinion?
- Change Policy: A structural change requires analysis and user confirmation.
- Historical rule: Give the Harness Improvement Loop greater emphasis.
  That priority is superseded by the explicit current user approval.


## Demo Philosophy

### INV-DEMO-001 — Prefer continuity in the demo project

- Category: Demo Philosophy
- Strength: STRUCTURAL
- Rule: Prefer one understandable software repository that evolves across
  the training. Avoid unrelated projects for each chapter when a shared
  project can carry the Story. Keep the training-material repository distinct
  from the software demo repository.
- Rationale: Continuity helps learners see the same work improve as the AI
  development approach matures.
- Source: plan/MASTER_PLAN.md §§8.2, 12, 27–28
- Validation: Does the Demo plan prefer one evolving repository and keep it distinct from this training repository?
- Change Policy: A proposed departure requires feasibility and Story impact
  analysis, then user confirmation.

### INV-DEMO-002 — Connect failure to cause and response

- Category: Demo Philosophy
- Strength: STRUCTURAL
- Rule: Include meaningful failures where useful, but do not use them to
  ridicule an Agent or claim that AI is unintelligent. Connect each failure
  used in the Story to its cause and an Engineering response.
- Rationale: Failure should create understanding of the next improvement,
  rather than act as entertainment.
- Source: plan/MASTER_PLAN.md §§8.2–8.3, 25
- Validation: Does each failure used in the Story connect to its cause and Engineering response?
- Change Policy: A proposed change requires impact analysis and user
  confirmation.

### INV-DEMO-003 — Keep the Meta Example factual

- Category: Demo Philosophy
- Strength: HARD
- Rule: The ai-dev-training repository may provide a supporting Meta Example
  only through problems and improvements that actually occur. Do not invent
  failures, history, or complexity for the purpose of the training. Do not
  let the Meta Example replace the core training Story.
- Rationale: The Meta Example is valuable only as an honest record of real
  project experience and remains secondary to the planned curriculum.
- Source: plan/MASTER_PLAN.md §§16, 29, 37
- Validation: Are Meta Examples based only on actual events and kept secondary to the training Story?
- Change Policy: Require user approval before changing this rule; fabricated
  history must not be presented as real.

### INV-DEMO-004 — Answer a Story question with each Demo

- Category: Demo Philosophy
- Strength: STRUCTURAL
- Rule: Each Demo should answer a question that arose from the Story and
  should show evidence for an Insight. Do not make feature display the
  Demo's primary purpose.
- Rationale: Demos support the explanation and its causal transitions.
- Source: plan/MASTER_PLAN.md §§8.2–8.4, 25
- Validation: Does each Demo answer a question raised by the Story and support an Insight?
- Change Policy: A proposed change requires impact analysis and user
  confirmation.

### INV-DEMO-005 — Use slide scale as a guide

- Category: Demo Philosophy
- Strength: GUIDING
- Rule: Treat the estimate of about 60–70 slides as a planning guide, not a
  target. Preserve the Story's logical flow and avoid both meaningless
  fragmentation and compression that removes important transitions.
- Rationale: Actual slide count depends on pacing and Demo transitions.
- Source: plan/MASTER_PLAN.md §§17, 19, 33–34
- Validation: Is the slide-count estimate treated as guidance while preserving Story transitions?
- Change Policy: Adjust the estimate with a reason during Slide Map work;
  record material project-level choices in DECISIONS.md. Changing the
  underlying Source-of-Truth rule still requires user approval.

## Verification Philosophy

### INV-VERIFY-001 — Generated is not done

- Category: Verification Philosophy
- Strength: HARD
- Rule: Preserve Generated ≠ Done. Distinguish an Agent's completion claim
  from verified results. Show the applicable Build and Test evidence,
  Benchmark when needed, and Review before declaring work complete.
- Rationale: Code generation does not establish correctness or fitness for
  the task.
- Source: plan/MASTER_PLAN.md §§3.2, 6.2–6.4, 23, 39
- Validation: Does the material distinguish an Agent's claim from Build, Test, needed Benchmark, and Review evidence?
- Change Policy: Require explicit user approval before weakening the
  verification principle.

## Difficulty / Accessibility

### INV-DIFFICULTY-001 — One Story, value for different levels

- Category: Difficulty / Accessibility
- Strength: HARD
- Rule: Do not split learners into beginner, intermediate, and advanced
  courses. Keep one shared Story in which learners at different AI maturity
  levels can recognize their current practice and a useful next step.
- Rationale: The training's objective is organization-wide alignment across
  the experience range.
- Source: plan/MASTER_PLAN.md §§2.2–2.3, 26, 35, 41
- Validation: Can different experience levels follow the same Story and find a useful next step?
- Change Policy: Require explicit user approval before splitting the audience
  into separate courses or abandoning the shared Story.

### INV-DIFFICULTY-002 — Make the material understandable in-session

- Category: Difficulty / Accessibility
- Strength: STRUCTURAL
- Rule: Do not rely on advanced prior knowledge or substantial study after
  class for learners to understand the core message. Provide an intuitive
  explanation before practical detail and deeper Engineering insight.
- Rationale: Many participants have limited time for separate AI study, while
  the audience still includes experienced users.
- Source: plan/MASTER_PLAN.md §§2.1–2.3, 35, 41, 43
- Validation: Is core meaning understandable in-session before practical and deeper detail?
- Change Policy: A proposed change requires impact analysis across learner
  levels and user confirmation.

### INV-DIFFICULTY-003 — Keep visual pacing adaptable

- Category: Difficulty / Accessibility
- Strength: GUIDING
- Rule: Mix explanation with Screens, Prompts, repository views, comparisons,
  diagrams, Agent behavior, diffs, results, failures, questions, and Insight
  Cards where they support the Story. Avoid text-only delivery across the
  full six hours.
- Rationale: Learners are observers rather than hands-on participants, so
  visual evidence and pacing help maintain attention.
- Source: plan/MASTER_PLAN.md §§19–20, 33–34, 44
- Validation: Does visual pacing support the six-hour, instructor-led format without displacing the Story?
- Change Policy: Adapt the mix to the Curriculum and Demo plan; record
  material choices in DECISIONS.md. Do not use the mix to change delivery
  constraints or Story.

## Developer Responsibility

### INV-RESPONSIBILITY-001 — Keep engineering judgment with developers

- Category: Developer Responsibility
- Strength: HARD
- Rule: Do not teach that AI should own all development decisions. Developers
  retain responsibility for goals, problem definition, requirements,
  trade-offs, important architecture, verification criteria and
  interpretation, risk judgment, final review, and accountability.
- Rationale: Delegating work does not delegate engineering responsibility.
- Source: plan/MASTER_PLAN.md §§9, 15, 23, 30, 39
- Validation: Do developers retain responsibility for goals, judgment, verification, risks, review, and accountability?
- Change Policy: Require explicit user approval before changing this
  responsibility boundary.

## Research Integrity

### INV-RESEARCH-001 — Verify current product facts

- Category: Research Integrity
- Strength: HARD
- Rule: Do not assert current ChatGPT or Codex features from memory when
  product facts are needed. Prefer current official OpenAI material and
  identify scope or time/version limits when relevant. Separate Durable
  Engineering Insight from Current Product Implementation so a UI or feature
  change does not erase the underlying insight. For time-sensitive facts,
  record Checked Date, Source, Product / Feature, Observed Behavior, and
  Confidence in the relevant Research record when useful; do not date every
  Slide. Keep unverified feature claims TODO or undecided.
- Rationale: Product capabilities and interfaces can change, and may differ
  across products, accounts, or environments.
- Source: plan/MASTER_PLAN.md §§0.2, 5.1, 5.4, 5.6, 21, 32; STEP 02 §§87–88
- Validation: Are current product claims checked against official sources, separated from durable Engineering Insights, and dated in Research records when appropriate?
- Change Policy: Require explicit user approval before weakening this
  research rule; verify claims before using them as current facts.

### INV-RESEARCH-002 — Bound research claims and term definitions

- Category: Research Integrity
- Strength: HARD
- Rule: For Lost in the Middle and other research-based claims, use the
  original paper or a reliable technical source and stay within the evidence.
  Distinguish the training's Operational Definition for terms such as
  Harness Engineering and Loop Engineering from any broader industry usage.
- Rationale: Research and emerging terminology should not be overstated as
  universal fact or consensus.
- Source: plan/MASTER_PLAN.md §§0.2, 21, 32
- Validation: Are research claims bounded by evidence and operational term definitions distinguished from universal ones?
- Change Policy: Require explicit user approval before weakening this rule;
  correct unsupported claims before they enter downstream material.

### INV-RESEARCH-003 — Resolve evidence conflicts before changing the Story

- Category: Research Integrity
- Strength: HARD
- Rule: When Research contradicts a technical assumption in the Story, do
  not distort the Research to preserve the Story. Record FACT, CONFLICT,
  IMPACT, OPTIONS, and PROPOSAL. Research Integrity takes priority over
  presentation convenience; any required change to a HARD invariant still
  requires user approval.
- Rationale: The teaching model must not misrepresent confirmed technical
  facts.
- Source: plan/MASTER_PLAN.md §§0.2, 21, 31–32; STEP 02 instruction §54
- Validation: Are Research conflicts recorded and resolved without distorting evidence to fit the Story?
- Change Policy: Surface the conflict and options; get the required user
  approval before changing a HARD invariant or governing document.

### INV-RESEARCH-004 — Label facts, teaching models, heuristics, and conventions

- Category: Research Integrity
- Strength: HARD
- Rule: Distinguish FACT verified by an official source, paper, or actual
  execution; TEACHING MODEL simplified to aid understanding; HEURISTIC useful
  in practice but not universal; and PROJECT CONVENTION selected for this
  course or Demo. Do not present a teaching model or project convention as an
  official product requirement or universal law.
- Rationale: Learners need to know whether a statement is evidence, a
  simplification, practical guidance, or a local choice.
- Source: plan/MASTER_PLAN.md §§0.2, 21, 32; STEP 02 instruction §55
- Validation: Are facts distinguished from teaching models, heuristics, and project conventions?
- Change Policy: Require explicit user approval before weakening this
  distinction; label claims before using them as facts.

### INV-RESEARCH-005 — Seed terminology verification in this document

- Category: Research Integrity
- Strength: STRUCTURAL
- Rule: Keep the initial terminology-verification list in this
  INVARIANTS.md; do not create a separate Terminology file at this stage.
  During Research, distinguish for each term whether an OFFICIAL definition
  exists, relevant ACADEMIC definitions, INDUSTRY usage, and the definition
  used by this TRAINING. State an Operational Definition for Harness
  Engineering and Loop Engineering without claiming universal consensus.
  Seed the registry below with the required terms and leave unresearched
  entries TODO.
- Rationale: A small registry seed makes terminology research traceable
  without adding another project structure before it is needed.
- Source: plan/MASTER_PLAN.md §§21, 32; STEP 02 instruction §56
- Validation: Is terminology verification seeded here and later divided into Official, Academic, Industry, and Training meanings?
- Change Policy: Keep the registry in the existing plan structure unless the
  user later directs a separate artifact.

### Terminology Registry Seed

The entries below are research prompts, not completed definitions. Resolve
each layer during Research; do not infer that an official or academic
definition exists merely because it appears in this list.

| Term | OFFICIAL | ACADEMIC | INDUSTRY | TRAINING | Status |
| --- | --- | --- | --- | --- | --- |
| Prompt Engineering | TODO | TODO | TODO | TODO | TODO |
| Context Engineering | TODO | TODO | TODO | TODO | TODO |
| Harness Engineering | TODO | TODO | TODO | TODO | TODO |
| Loop Engineering | TODO | TODO | TODO | TODO | TODO |
| Agent | TODO | TODO | TODO | TODO | TODO |
| Subagent | TODO | TODO | TODO | TODO | TODO |
| Skill | TODO | TODO | TODO | TODO | TODO |
| Memory | TODO | TODO | TODO | TODO | TODO |
| Tool | TODO | TODO | TODO | TODO | TODO |
| AGENTS.md | TODO | TODO | TODO | TODO | TODO |
| Progressive Disclosure | TODO | TODO | TODO | TODO | TODO |
| Lost in the Middle | TODO | TODO | TODO | TODO | TODO |
| Verification | TODO | TODO | TODO | TODO | TODO |
| AI-Native Development | TODO | TODO | TODO | TODO | TODO |

## Source-of-Truth & Change Control

### INV-SOT-001 — Respect document authority

- Category: Source-of-Truth & Change Control
- Strength: HARD
- Rule: Apply the project authority order: latest explicit user instruction;
  plan/MASTER_PLAN.md; plan/INVARIANTS.md; approved decisions in
  plan/DECISIONS.md; downstream Curriculum, Storyline, Demo, and Slide
  artifacts; then AGENTS.md work rules. AGENTS.md guides work behavior and
  does not independently change training design. When a clear, latest user
  instruction supersedes an earlier plan, preserve the change history.
- Rationale: Clear precedence prevents an implementation artifact from
  silently redefining the training.
- Source: plan/MASTER_PLAN.md §§0.1, 30–31; STEP 02 instruction §33
- Validation: Do artifacts follow the authority order and surface conflicts instead of silently redefining the plan?
- Change Policy: Do not silently change document authority. Surface conflicts
  and follow Change Control before altering a governing document.

### INV-SOT-002 — Preserve the full planning source

- Category: Source-of-Truth & Change Control
- Strength: HARD
- Rule: MASTER_PLAN.md remains the full planning source, not a document to
  replace with this extraction. Do not silently omit or compress its core
  intent when creating or revising downstream artifacts. Record unresolved
  matters as TODO or undecided; do not guess.
- Rationale: The extracted Invariants protect selected conditions but do not
  carry all narrative detail or unresolved planning context.
- Source: plan/MASTER_PLAN.md §§0.1, 9–10, 30–31, 38–46
- Validation: Does the full MASTER_PLAN remain authoritative and are unresolved matters left open rather than guessed?
- Change Policy: Require explicit user approval to alter MASTER_PLAN.md or
  this invariant; surface conflicts before changing downstream content.

### INV-SOT-003 — Keep traceability lightweight and useful

- Category: Source-of-Truth & Change Control
- Strength: GUIDING
- Rule: Use stable Invariant and Decision IDs as a foundation for tracing
  User Intent → MASTER_PLAN → INVARIANTS → DECISIONS → CURRICULUM →
  STORYLINE → DEMO → SLIDE MAP → SLIDE CONTENT → PPT. A major Demo or Slide
  should be traceable to its upstream purpose where practical, and core
  MASTER_PLAN requirements should be traceable to their downstream
  implementation where practical. Do not build a complete Traceability
  System at this stage.
- Rationale: Stable IDs provide useful traceability without introducing
  process or tooling beyond the current project needs.
- Source: STEP 02 instruction §§36, 52
- Validation: Can major Demos and Slides be traced to purpose without building a full system prematurely?
- Change Policy: Adjust downstream traceability to project needs and record
  material choices in DECISIONS.md. A separate automated system requires a
  new user instruction.

### INV-CHANGE-001 — Propose changes before applying them

- Category: Source-of-Truth & Change Control
- Strength: HARD
- Rule: Do not change MASTER_PLAN.md or this file merely because another
  approach appears better. Before a proposed change, provide PROPOSAL,
  REASON, EVIDENCE, IMPACT, CONFLICT, and RECOMMENDATION. Keep the existing
  Source of Truth until the user approves. If a newer explicit user
  instruction supersedes an earlier decision, retain the prior decision and
  record the change history.
- Rationale: The approval step protects the intended training and makes
  consequences visible before documents drift.
- Source: plan/MASTER_PLAN.md §31; STEP 02 instruction §34
- Validation: Are proposal, reason, evidence, impact, conflict, and recommendation provided before protected changes?
- Change Policy: Require explicit user approval before applying a change to a
  governing document or any protected condition.

### INV-CHANGE-002 — Apply Strength-specific review

- Category: Source-of-Truth & Change Control
- Strength: STRUCTURAL
- Rule: HARD changes require explicit approval; STRUCTURAL changes require
  impact analysis and user confirmation; GUIDING implementation choices may
  be adjusted with a reason and evidence. Do not interpret GUIDING as
  permission to edit MASTER_PLAN.md or this file without approval.
- Rationale: The Strength label makes the review required for a change
  proportional and explicit.
- Source: STEP 02 instruction §§34–35
- Validation: Is the approval level appropriate to HARD, STRUCTURAL, or GUIDING strength?
- Change Policy: Follow the rule stated here and the proposal format in
  INV-CHANGE-001.

### Applying Invariants by Artifact

Select the relevant subset for each artifact; do not copy every Invariant
mechanically into every document. A Related Invariants field may be placed
near the top or in metadata of major artifacts when it helps reviewers trace
the content. Avoid filling the body with IDs at the expense of readability.

| Artifact | Principal related Invariants |
| --- | --- |
| Research | INV-RESEARCH-001–005, INV-SOT-001–002, INV-CHANGE-001–002 |
| Curriculum | INV-OBJECTIVE-001, INV-AUDIENCE-001, INV-DELIVERY-001, INV-NARRATIVE-001–002, INV-DIFFICULTY-001–002, INV-LEARNING-001–004 |
| Storyline | INV-NARRATIVE-001–002, INV-MATURITY-001–011, INV-DEMO-001, INV-DIFFICULTY-001–002 |
| Demo | INV-DEMO-001–004, INV-VERIFY-001, INV-RESPONSIBILITY-001 |
| Slide Map | INV-NARRATIVE-001–002, INV-AUDIENCE-001, INV-DELIVERY-001, INV-DIFFICULTY-001–003, INV-LEARNING-001–004 |
| PPT | INV-DELIVERY-001, INV-AUDIENCE-001, INV-NARRATIVE-001–002, INV-DIFFICULTY-003, INV-VERIFY-001, INV-RESEARCH-001–005 |

### Traceability

Use this chain as a future traceability guide:

User Intent → MASTER_PLAN → INVARIANTS → DECISIONS → CURRICULUM →
STORYLINE → DEMO → SLIDE MAP → SLIDE CONTENT → PPT

When practical, be able to explain why a major Slide or Demo exists by tracing
it upward, and where a core MASTER_PLAN requirement is implemented by tracing
it downward. The current stage establishes stable IDs and references only; it
does not implement a complete Traceability System.

### Conflict handling

When a prompt, research result, Demo, or downstream artifact appears to
conflict with MASTER_PLAN.md or an invariant, do not silently choose a side.
Record the conflict and its evidence, leave the affected change unapplied, and
ask the user to decide where approval is required. An approved decision may
guide implementation but does not silently rewrite MASTER_PLAN.md.

## Drift Detection

Treat the following as Drift Signals during Research, Curriculum, Storyline,
Demo, Slide, Speaker Notes, or Harness work:

1. ChatGPT or Codex feature-description slides keep increasing.
2. Prompt examples multiply while the Context, Harness, or Loop Story weakens.
3. AGENTS.md authoring takes a disproportionate share of the training.
4. Harness components are listed without first showing the problem they solve.
5. Skills, Subagents, or Memory turn into an Advanced Feature Showcase.
6. Loop Engineering is reduced to repeated automatic execution.
7. Simplifying for beginners makes Harness or Loop content too shallow.
8. Optimizing for experienced users leaves beginners unable to follow the
   Story.
9. Demos become product-feature promotion.
10. Changing the project every chapter erases the continuous-evolution Story.
11. Slide convenience removes the Problem → Improvement connection.
12. Generated output is presented as a success without actual Verification.
13. Current Codex behavior is stated without checking official material.
14. Harness or Loop terminology is presented as a universally standardized
    definition without evidence.
15. The training-production Meta Example takes more space than the core
    training Story.
16. Best Practice lists become the main training structure instead of
    explaining the problems they address.
17. Compression removes core transitions or Engineering concepts before
    reducing redundant examples within a stage.
18. New content is added because a feature is interesting, without stating
    its role in the whole Story.

When a Drift Signal appears, stop work on the affected direction, check the
related Invariant and MASTER_PLAN.md, record the cause and evidence, then
propose a correction. Do not continue in a new direction without the required
approval.

## Validation Matrix

Use this table as a review checklist for downstream artifacts. A "No" answer
requires correction or a documented conflict and user decision before the
affected work proceeds.

| Invariant ID | Category | Strength | Validation Question |
| --- | --- | --- | --- |
| INV-IDENTITY-001 | Training Identity | HARD | Does the material preserve the developer scope and the current user-approved396-minute schedule and720-minute ceiling under DEC-0090? |
| INV-IDENTITY-002 | Training Identity | HARD | Does it teach AI-use evolution into an Engineering System rather than only features, a manual, or Prompt writing? |
| INV-AUDIENCE-001 | Audience | HARD | Does it account for the broad experience range and limited time for separate study? |
| INV-OBJECTIVE-001 | Primary Objective | HARD | Does it raise the shared organizational AI-use baseline above feature breadth or one-level optimization? |
| INV-DELIVERY-001 | Delivery Constraints | HARD | Does it avoid requiring participant laptops or hands-on exercises and use instructor-led evidence? |
| INV-NARRATIVE-001 | Narrative | HARD | Does it preserve Chatbot → Prompt → Context → Harness → Loop → AI-Native Development and present stages as problem-driven evolution? |
| INV-NARRATIVE-002 | Narrative | STRUCTURAL | Does each major solution follow a visible problem, cause, and need for improvement? |
| INV-MATURITY-001 | Engineering Maturity Model | STRUCTURAL | Are Prompt, Context, Harness, and Loop presented as expanding layers rather than replacements? |
| INV-MATURITY-011 | Engineering Maturity Model | STRUCTURAL | Is the task workflow distinct from the system maturity progression? |
| INV-LEARNING-001 | Learning Philosophy | STRUCTURAL | Are concepts connected to the shared problem story rather than presented as independent features? |
| INV-LEARNING-002 | Learning Philosophy | STRUCTURAL | Are Best Practices tied to the problems they solve instead of becoming the main structure? |
| INV-LEARNING-003 | Learning Philosophy | STRUCTURAL | Does compression reduce examples before removing core concepts or causal links? |
| INV-LEARNING-004 | Learning Philosophy | STRUCTURAL | Does each addition satisfy a stated role in the existing Story? |
| INV-MATURITY-002 | Context Engineering | STRUCTURAL | Is Context selected for task relevance, timing, and source instead of maximum volume? |
| INV-MATURITY-003 | Context Engineering | STRUCTURAL | Is repeated-context reuse presented as the goal, with AGENTS.md as a useful example whose benefits and limits emerge in the Story? |
| INV-MATURITY-004 | Context Engineering | STRUCTURAL | Does context separation make relevant information available to the right task at the right time? |
| INV-MATURITY-005 | Harness Engineering | STRUCTURAL | Does the material state the engineering problem or goal before presenting Harness components as possible mechanisms? |
| INV-MATURITY-006 | Harness Engineering | STRUCTURAL | Do Skills arise from repeated or inconsistent workflows and missing verification? |
| INV-MATURITY-007 | Harness Engineering | STRUCTURAL | Are Subagent benefits balanced with coordination, duplication, transfer, and integration costs? |
| INV-MATURITY-008 | Harness Engineering | STRUCTURAL | Are current Context and retained Memory distinguished, including Memory lifecycle concerns? |
| INV-MATURITY-009 | Harness Engineering | STRUCTURAL | Does the completed Harness diagram appear only after its parts have emerged, late in the Harness chapter or in the retrospective? |
| INV-MATURITY-010 | Harness Engineering | STRUCTURAL | Does ACT3 establish the need for goal-directed review/revision control? |
| INV-LOOP-001 | Loop Engineering | STRUCTURAL | Is review feedback connected to the next revision under fixed completion criteria with scoped model research? |
| INV-DEMO-001 | Demo Philosophy | STRUCTURAL | Does the Demo plan prefer one evolving repository and keep it distinct from this training repository? |
| INV-DEMO-002 | Demo Philosophy | STRUCTURAL | Does each failure used in the Story connect to its cause and Engineering response? |
| INV-DEMO-003 | Demo Philosophy | HARD | Are Meta Examples based only on actual events and kept secondary to the training Story? |
| INV-DEMO-004 | Demo Philosophy | STRUCTURAL | Does each Demo answer a question raised by the Story and support an Insight? |
| INV-DEMO-005 | Demo Philosophy | GUIDING | Is the slide-count estimate treated as guidance while preserving Story transitions? |
| INV-VERIFY-001 | Verification Philosophy | HARD | Does the material distinguish an Agent's claim from Build, Test, needed Benchmark, and Review evidence? |
| INV-DIFFICULTY-001 | Difficulty / Accessibility | HARD | Can different experience levels follow the same Story and find a useful next step? |
| INV-DIFFICULTY-002 | Difficulty / Accessibility | STRUCTURAL | Is core meaning understandable in-session before practical and deeper detail? |
| INV-DIFFICULTY-003 | Difficulty / Accessibility | GUIDING | Does visual pacing support the six-hour, instructor-led format without displacing the Story? |
| INV-RESPONSIBILITY-001 | Developer Responsibility | HARD | Do developers retain responsibility for goals, judgment, verification, risks, review, and accountability? |
| INV-RESEARCH-001 | Research Integrity | HARD | Are current product claims checked against official sources, separated from durable Engineering Insights, and dated in Research records when appropriate? |
| INV-RESEARCH-002 | Research Integrity | HARD | Are research claims bounded by evidence and operational term definitions distinguished from universal ones? |
| INV-RESEARCH-003 | Research Integrity | HARD | Are Research conflicts recorded and resolved without distorting evidence to fit the Story? |
| INV-RESEARCH-004 | Research Integrity | HARD | Are facts distinguished from teaching models, heuristics, and project conventions? |
| INV-RESEARCH-005 | Research Integrity | STRUCTURAL | Is terminology verification seeded here and later divided into Official, Academic, Industry, and Training meanings? |
| INV-SOT-001 | Source-of-Truth & Change Control | HARD | Do artifacts follow the authority order and surface conflicts instead of silently redefining the plan? |
| INV-SOT-002 | Source-of-Truth & Change Control | HARD | Does the full MASTER_PLAN remain authoritative and are unresolved matters left open rather than guessed? |
| INV-SOT-003 | Source-of-Truth & Change Control | GUIDING | Can major Demos and Slides be traced to purpose without building a full system prematurely? |
| INV-CHANGE-001 | Source-of-Truth & Change Control | HARD | Are proposal, reason, evidence, impact, conflict, and recommendation provided before protected changes? |
| INV-CHANGE-002 | Source-of-Truth & Change Control | STRUCTURAL | Is the approval level appropriate to HARD, STRUCTURAL, or GUIDING strength? |
