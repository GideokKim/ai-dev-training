# Story Beats

> Status: STEP 05 COMPLETE WITH OPEN QUESTIONS through §120; baseline for STEP
> 06. Beats describe changes in learner understanding; they
> are not Slides. Scenario events and Demo outcomes remain illustrative until
> validated against an actual project and environment.

## Reading This File

Every Beat records its Act, purpose, current state, trigger, action, result,
interpretation, audience question, engineering response, new state, next
friction, audience layer, Demo potential, evidence, and Curriculum mapping.
Purpose states the learner or system change the Beat exists to create; it is
not a Slide title. Audience Layer uses `BASIC`, `PRACTICAL`, `ADVANCED`, or
`ALL` without creating separate courses. `ANCHOR` and `SUPPORTING` identify
Curriculum candidates only; `DEC-0008` remains `PROPOSED`, and product access
and runtime remain unresolved.

The project is a single unnamed teaching example. Its domain, repository,
timeline, events, and verification commands are not yet selected.

## ACT 0 — Chatbot and Repository Exploration

### BEAT-001 — A small question is quick to answer

- **Act:** ACT 0 — Chatbot and Repository Exploration
- **Purpose:** Validate chatbot use as a useful, bounded starting workflow.

- **Current State:** The developer is working in a small, understandable
  project and already knows how to ask ChatGPT about an error or code fragment.

- **Trigger:** A familiar error interrupts a task.

- **Action:** The developer finds the relevant snippet or error, asks a direct
  question, and applies or adapts the answer in the IDE.

- **Result:** The interaction is fast and accessible for a bounded question.

- **Interpretation:** This is a useful starting workflow, not a mistake. The
  AI only receives the material supplied to it.

- **Audience Question:** “이런 식으로 AI에게 질문해 본 적이 있는가?”

- **Engineering Response:** Acknowledge the value of the chatbot workflow and
  let the project question expand before suggesting a different mechanism.

- **New State:** The developer sees AI as a useful partner for local questions.

- **Next Friction:** The next issue spans multiple files, and the developer
  must decide which code to collect before asking.

- **Audience Layer:** ALL

- **Demo Potential:** VISUAL.

- **Evidence:** `CLM-0001`, `CLM-0002`; `plan/MASTER_PLAN.md` §§2–5.

- **Related Curriculum:** ACT 0 — familiar chatbot workflow and starting
  reflection.
### BEAT-002 — The project question crosses file boundaries

- **Act:** ACT 0 — Chatbot and Repository Exploration
- **Purpose:** Reveal the cost of manually gathering context for a project-wide question.

- **Current State:** The developer can ask about a snippet but the relevant
  path for a project-level question is not yet assembled in the conversation.

- **Trigger:** A hypothetical bug or feature question may involve an entry
  point, controller, processor, library, and tests.

- **Action:** The developer searches for related files, reads them, and copies
  selected material to the chatbot.

- **Result:** The developer can ask a more informed question, but spends effort
  reconstructing repository context first.

- **Interpretation:** The friction is the cost of locating and carrying
  context, not a failure of the earlier chatbot use.

- **Audience Question:** “AI에게 질문하기 전에 내가 이미 관련 코드를 다
  찾아야 하나?”

- **Engineering Response:** Ask whether the agent can investigate available
  repository context for a bounded read-only question.

- **New State:** Repository exploration becomes a reasonable next experiment.

- **Next Friction:** The agent must still be given a clear question and
  completion expectation.

- **Audience Layer:** BASIC

- **Demo Potential:** ANCHOR (candidate 1; conditional).

- **Evidence:** `CLM-0004`, `CLM-0009`; `references/STORY_DEPENDENCIES.md`
  (Repository-aware Codex work).

- **Related Curriculum:** ACT 0 — project-level question and context
  collection friction.
### BEAT-003 — The agent investigates the repository

- **Act:** ACT 0 — Chatbot and Repository Exploration
- **Purpose:** Demonstrate bounded repository exploration before introducing its limits.

- **Current State:** The developer has a repository-level question but would
  otherwise need to select the relevant files manually.

- **Trigger:** The developer asks where a feature is implemented and requests
  an explanation of its path.

- **Action:** In a supported, permissioned Codex environment, the agent
  searches, reads relevant files, traces related code, and reports what it
  found. Keep this first example read-only and bounded.

- **Result:** The response can identify relevant locations and explain their
  relationship, subject to the actual repository and surface.

- **Interpretation:** Some context gathering can move from developer to agent.
  The first success should be shown fully before a new limitation is raised.

- **Audience Question:** “내가 코드를 가져가는 것과 AI를 코드가 있는 곳으로
  데려가는 것은 무엇이 다를까?”

- **Engineering Response:** Make the shift in who searches for context
  explicit, then ask why outcomes can still differ between developers.

- **New State:** The developer can ask an agent to inspect repository context;
  this does not remove the developer's judgment or responsibility.

- **Next Friction:** The intended outcome, boundaries, process, and evidence of
  completion may remain implicit.

- **Audience Layer:** BASIC

- **Demo Potential:** ANCHOR (candidate 1; conditional on environment).

- **Evidence:** `CLM-0002`, `CLM-0009`; `references/product/CAPABILITY_MATRIX.md`;
  `OQ-003`, `OQ-005`.

- **Related Curriculum:** ACT 0 — ChatGPT → Codex repository exploration.
## ACT 1 — Prompt as Task Specification

### BEAT-004 — Repository access does not convey intent

- **Act:** ACT 1 — Prompt as Task Specification
- **Purpose:** Show that repository access does not supply unstated task intent.

- **Current State:** The agent can inspect the repository, but the developer
  may ask only “이 모듈 성능을 개선해줘.”

- **Trigger:** The request leaves the intended scope, acceptable trade-offs,
  process, and completion evidence unstated.

- **Action:** Use a clearly labeled task scenario to compare plausible
  mismatches: an unwanted public API change, a new dependency, an unapproved
  accuracy trade-off, a broad refactor, or a completion claim without a
  benchmark.

- **Result:** The agent has repository context but may produce work outside
  the developer's intent. These are candidate outcomes, not a claim that they
  occurred in a selected project.

- **Interpretation:** The cause in this scenario is missing Task
  Specification, not that Codex is “stupid.” Repository Context and Task
  Specification solve different problems.

- **Audience Question:** “Repository를 보여주는 것만으로 Agent가 원하는
  결과까지 자동으로 알 수 있을까?”

- **Engineering Response:** Make developer intent explicit as a Task
  Specification.

- **New State:** The developer recognizes a gap between code visibility and
  the requested outcome.

- **Next Friction:** The developer needs a practical way to state scope,
  constraints, process, and evidence of completion.

- **Audience Layer:** ALL

- **Demo Potential:** SUPPORTING (illustrative unless reproduced).

- **Evidence:** `CLM-0002`; `references/engineering/prompt-engineering.md`;
  `references/engineering/verification.md`.

- **Related Curriculum:** ACT 1 — same model, underspecified request.
### BEAT-005 — The task becomes a specification

- **Act:** ACT 1 — Prompt as Task Specification
- **Purpose:** Make the requested outcome, boundaries, process, and evidence reviewable.

- **Current State:** The developer has a repository-aware agent but has not
  described what a safe, successful performance change means.

- **Trigger:** The broad request could alter API, accuracy, dependencies, or
  scope without the developer's approval.

- **Action:** Rewrite it as a bounded task: reduce filter processing time;
  identify the relevant module and benchmark location; preserve the public
  API and result accuracy; add no dependency; investigate implementation and
  bottlenecks; propose a plan; implement only the approved scope; verify with
  unit tests and a benchmark where the selected project provides them.

- **Result:** The intended outcome, boundaries, sequence, and evidence are
  visible in the request. The exact project paths and checks remain TODO until
  a Demo repository is selected.

- **Interpretation:** The change is not merely a longer Prompt. The developer
  is specifying the task and the conditions under which it may be considered
  complete.

- **Audience Question:** “코딩을 시작하기 전에 무엇을 먼저 확인해야 할까?”

- **Engineering Response:** Request investigation before changes, then ask for
  a plan before approving implementation.

- **New State:** The task has explicit Goal, Context, Constraints, Process,
  and Verification conditions; this checklist is a course aid, not an official
  fixed OpenAI framework.

- **Next Friction:** Even a clear task can be undermined if the agent edits
  before the cause and intended change are understood.

- **Audience Layer:** ALL

- **Demo Potential:** SUPPORTING.

- **Evidence:** `references/engineering/prompt-engineering.md`;
  `CLM-0029`; `OQ-001`, `OQ-007`.

- **Related Curriculum:** ACT 1 — Practical Prompt Checklist and Before/After.
### BEAT-006 — Investigate before changing code

- **Act:** ACT 1 — Prompt as Task Specification
- **Purpose:** Make investigation precede code changes when the cause is uncertain.

- **Current State:** The developer can describe a task but may still ask for an
  immediate fix before the cause is understood.

- **Trigger:** A bug report admits several plausible causes or spans a call
  path and related tests.

- **Action:** Ask the agent to investigate without editing: inspect related
  code, trace the call path, examine tests, and list possible causes. Request a
  change plan after the findings are visible.

- **Result:** The developer can review findings and the plan before a code
  change begins.

- **Interpretation:** “Investigate first” is a reliable default because
  starting code changes immediately is not always the fastest route to a safe
  result. It does not require a long investigation and plan for every small,
  simple task.

- **Audience Question:** “원인과 계획을 확인한 뒤, 무엇으로 결과를 판단할까?”

- **Engineering Response:** Name task-appropriate tests, benchmarks, and review
  evidence in the task specification.

- **New State:** `Investigate → Plan` is a practical behavior inside the Prompt
  stage, not a replacement for the broader maturity sequence.

- **Next Friction:** A successful task request still repeats project-wide
  Build, Test, API, and Style rules in later tasks.

- **Audience Layer:** PRACTICAL

- **Demo Potential:** SUPPORTING.

- **Evidence:** `references/engineering/prompt-engineering.md`;
  `references/engineering/verification.md`; `INV-MATURITY-011`.

- **Related Curriculum:** ACT 1 — Investigation-first workflow and Prompt's
  value.
### BEAT-007 — A clear Prompt succeeds on its own

- **Act:** ACT 1 — Prompt as Task Specification
- **Purpose:** Let a clear Prompt succeed before introducing its scaling friction.

- **Current State:** The developer has specified the task and can inspect the
  agent's findings and plan before changes.

- **Trigger:** The same kind of filter-performance task is attempted with the
  clearer specification.

- **Action:** In a bounded Before/After case, show the same kind of task with
  and without the explicit Goal, Context, Constraints, Process, and
  Verification conditions.

- **Result:** The Story's intended success is visible: the change stays within
  the stated scope, preserves the API and accuracy constraints, adds no
  dependency, and reports unit-test and benchmark evidence. Establish that
  result in a controlled or observed case; otherwise label it an illustrative
  scenario rather than actual project history.

- **Interpretation:** Prompt Engineering can be a sufficiently good solution
  for the current task and project scale. Do not portray it as a failed
  stepping stone or claim universal effectiveness.

- **Audience Question:** “다른 Task에서도 매번 다시 적게 되는 Project 정보는
  무엇일까?”

- **Engineering Response:** Let several distinct tasks reveal which facts are
  task-specific and which persist across the project.

- **New State:** The developer has a useful Task Specification pattern and a
  reason to keep using it.

- **Next Friction:** Bug Fix, Performance, and Refactoring Prompts repeat the
  same Build, Test, API, and Coding Style details.

- **Audience Layer:** ALL

- **Demo Potential:** SUPPORTING (bounded comparison; outcome conditional).

- **Evidence:** `references/engineering/prompt-engineering.md`;
  `CLM-0029`; `CLM-0027` for the observed-history boundary.

- **Related Curriculum:** ACT 1 — Prompt Engineering Success and its transition
  to recurring project context.
## ACT 2 — Project Context and Relevance

### BEAT-008 — Good Project instructions are repeated in each Prompt

- **Act:** ACT 2 — Project Context and Relevance
- **Purpose:** Expose repeated project guidance across otherwise distinct task Prompts.

- **Current State:** A bounded task Prompt is useful, and the developer writes
  good task instructions.

- **Trigger:** The developer moves among a Bug Fix, Performance improvement,
  and Refactoring task over time.

- **Action:** For each, they restate Build and Test methods, the public API
  constraint, and Coding Style along with task-specific requirements.

- **Result:** The individual Prompts remain thoughtful, but recurring Project
  facts take effort to repeat and make each Prompt carry background that does
  not change with the task.

- **Interpretation:** Task-specific information and Project-persistent
  information are different. The developer's good Prompt practice is not the
  problem.

- **Audience Question:** “왜 나는 Project에 대해 똑같은 설명을 계속 하고
  있지?”

- **Engineering Response:** Ask whether concise Project facts can be written
  once in a repository instruction source.

- **New State:** The developer sees reuse of persistent Project Context as a
  reasonable next step.

- **Next Friction:** A reusable location must first be populated and its value
  demonstrated before any limit is introduced.

- **Audience Layer:** ALL

- **Demo Potential:** SUPPORTING.

- **Evidence:** `CLM-0003`, `CLM-0005`;
  `references/engineering/context-engineering.md`.

- **Related Curriculum:** ACT 2 — repeated project context.
### BEAT-009 — Project context moves into `AGENTS.md`

- **Act:** ACT 2 — Project Context and Relevance
- **Purpose:** Introduce reusable Project guidance as an answer to repeated context.

- **Current State:** Build, test, API, and style guidance is repeated across
  task Prompts.

- **Trigger:** The developer asks why the shared Project facts cannot be kept
  in the repository once.

- **Action:** Where supported, add concise project purpose, Build and Test
  commands, rules such as preserving the public API and not adding a
  dependency, and coding style to `AGENTS.md`. Keep the task Prompt focused on
  the specific bug and ask for cause investigation and a plan.

- **Result:** The source of recurring guidance moves from repeated Prompt
  text to a repository instruction artifact; the actual file contents and
  behavior remain to be demonstrated in a selected environment.

- **Interpretation:** This is the first Context Engineering turning point:
  task-specific instructions stay in the Prompt while reusable project
  guidance is made available through the repository.

- **Audience Question:** “Repository instruction을 재사용하면 실제로 무엇이
  달라지는가?”

- **Engineering Response:** Reuse the guidance across several bounded tasks
  and make its initial value visible.

- **New State:** A concise reusable Project instruction set exists; `plan/`
  remains this education project's Source of Truth.

- **Next Friction:** The learner needs to see the benefit before considering
  accumulation or routing concerns.

- **Audience Layer:** ALL

- **Demo Potential:** ANCHOR (candidate 2; conditional).

- **Evidence:** `CLM-0003`, `CLM-0005`;
  `references/product/agents-md.md`; `OQ-003`, `OQ-005`.

- **Related Curriculum:** ACT 2 — Context Engineering Turning Point.
### BEAT-010 — Reusable Project guidance succeeds at first

- **Act:** ACT 2 — Project Context and Relevance
- **Purpose:** Show the first benefit of project guidance before its growth problem.

- **Current State:** `AGENTS.md` holds a small set of recurring Project facts.

- **Trigger:** The developer performs several tasks that need some of those
  facts.

- **Action:** Show the instructions being reused in Bug Fix, Performance, and
  Refactoring cases; compare the repeated Project explanation with the
  simpler task-specific Prompt.

- **Result:** In the Story's bounded case, the developer repeats less Project
  explanation, writes shorter task Prompts, and reuses shared Build/Test and
  Project rules across tasks. Project onboarding can point to that shared
  guidance. Any claim that an agent recognized a rule or ran a command
  consistently must be supported by a controlled or observed case.

- **Interpretation:** `AGENTS.md` is a useful solution to the problem that
  existed at this project scale. Do not immediately reverse this success or
  claim a universal outcome.

- **Audience Question:** “Project가 더 커지고 Rule이 늘어나도 여기에 계속
  추가하면 될까?”

- **Engineering Response:** Let new Project needs accumulate over time, then
  inspect which guidance each task actually needs.

- **New State:** The developer has a credible, useful first Project Context
  design and is motivated to maintain it.

- **Next Friction:** Each new rule or workflow creates pressure to keep
  expanding the same file.

- **Audience Layer:** ALL

- **Demo Potential:** ANCHOR (candidate 2; success evidence conditional).

- **Evidence:** `CLM-0005`; `references/product/agents-md.md`;
  `references/CLAIMS.md` (Demo outcomes are case-bound).

- **Related Curriculum:** ACT 2 — `AGENTS.md`'s first success.
### BEAT-011 — Context accumulates as Project needs grow

- **Act:** ACT 2 — Project Context and Relevance
- **Purpose:** Connect the success of reusable guidance to later accumulation.

- **Current State:** A small `AGENTS.md` helped with the recurring Build,
  Test, and Style guidance.

- **Trigger:** New architecture, performance, Git, review, troubleshooting,
  release, benchmark, and compatibility rules appear over time.

- **Action:** Use the illustrative sequence 100 → 300 → 700 → 1500 lines to
  show the developer adding useful-seeming knowledge as it arises.

- **Result:** The file contains more Project knowledge, but this line-count
  sequence is a visual device, not a measured threshold or a claim that
  performance has failed.

- **Interpretation:** Adding a discovered rule was reasonable when it helped
  the preceding task. Scale changes the maintenance and relevance question.

- **Audience Question:** “이 모든 정보가 모든 Task에서 항상 필요한가?”

- **Engineering Response:** Follow one small Unit Test task and inspect which
  parts of the accumulated Project Context it needs.

- **New State:** The developer begins to distinguish context existence from
  task relevance.

- **Next Friction:** A simple task may be accompanied by many unrelated rules.

- **Audience Layer:** PRACTICAL

- **Demo Potential:** VISUAL (labeled line-count illustration).

- **Evidence:** `CLM-0014`, `CLM-0015`;
  `references/engineering/context-engineering.md`.

- **Related Curriculum:** ACT 2 — context accumulation and growth scenario.
### BEAT-012 — A small task receives unrelated Project Context

- **Act:** ACT 2 — Project Context and Relevance
- **Purpose:** Show how irrelevant context can reach a small task.

- **Current State:** One file collects useful Project rules for many kinds of
  work.

- **Trigger:** The next task is a small Unit Test change.

- **Action:** Show the context also containing performance-tuning guidance,
  release and deployment rules, benchmark workflow, architecture migration
  notes, Git conventions, compatibility policy, and debugging guidance.

- **Result:** Important and minor details coexist; some may be old, conflict,
  or have unclear relevance to this task. The maintenance burden is visible.

- **Interpretation:** The central question is relevance and selection, not
  token cost alone. This scenario does not assert a deterministic output
  failure.

- **Audience Question:** “작은 Unit Test 수정에 이 정보가 전부 필요한가?”

- **Engineering Response:** Introduce long-context evidence only as supporting
  context for the already visible relevance question.

- **New State:** The developer's question changes from where to store context
  to which context is needed, when, and from what source.

- **Next Friction:** The learner needs bounded evidence without overgeneralizing
  from one paper.

- **Audience Layer:** PRACTICAL

- **Demo Potential:** VISUAL (labeled relevance case).

- **Evidence:** `CLM-0014`, `CLM-0015`;
  `references/engineering/context-engineering.md`.

- **Related Curriculum:** ACT 2 — Context growth, relevance, and research
  caveat.
### BEAT-013 — Long-context research supports a bounded caution

- **Act:** ACT 2 — Project Context and Relevance
- **Purpose:** Ground a bounded caution about long-context information placement.

- **Current State:** A small task is shown beside a broad mix of Project
  guidance, raising a relevance question.

- **Trigger:** The developer asks whether a large context window means every
  item can always be used equally well.

- **Action:** Briefly describe Liu et al.'s `Lost in the Middle` experiments:
  multi-document question answering and synthetic key-value retrieval varied
  the position of relevant information. In the NaturalQuestions-Open setup,
  2,655 answerable questions used 10, 20, or 30 Wikipedia passages of up to
  100 tokens, with one answer passage and distractors. Tested models included
  MPT-30B-Instruct, LongChat-13B, GPT-3.5-Turbo and Claude-1.3 variants, plus
  a smaller GPT-4 subset.

- **Result:** In several studied settings, answer use showed a U-shaped
  position effect: relevant information near the beginning or end was often
  used more accurately than information in the middle.

- **Interpretation:** This is bounded evidence about those models, tasks,
  prompts, and conditions. It did not test current Codex, `AGENTS.md`,
  repository editing, or coding-agent workflows; it does not prove that
  current models fail on middle context or that long files necessarily fail.

- **Audience Question:** “모든 정보를 항상 한 번에 제공하지 않는 방법은
  없을까?”

- **Engineering Response:** Explore selecting and routing task-relevant context
  rather than treating context-window size as a guarantee of effective use.

- **New State:** The learner can distinguish context capacity from effective
  use while keeping the research claim in scope.

- **Next Friction:** How to retain shared rules while exposing only relevant
  details to each task remains to be designed.

- **Audience Layer:** ADVANCED

- **Demo Potential:** VISUAL (brief evidence case; no deterministic failure
  demo).

- **Evidence:** `CLM-0014`, `CLM-0015`;
  `references/research/lost-in-the-middle.md` (`SRC-0201`–`SRC-0204`).

- **Related Curriculum:** ACT 2 — Context growth, relevance, and bounded
  `Lost in the Middle` evidence.
### BEAT-014 — Context separation follows scope and timing

- **Act:** ACT 2 — Project Context and Relevance
- **Purpose:** Motivate separation by information scope, timing, and relevance.

- **Current State:** The developer knows that Project guidance can be reused
  and that not every task needs every detail.

- **Trigger:** The learner asks how to avoid supplying all information at once
  while preserving access to the source that a task does need.

- **Action:** Separate always-needed core guidance from architecture,
  troubleshooting, compatibility, performance, review, and release details
  according to their scope and when a task needs them. Example locations such
  as `docs/`, `rules/`, or `skills/` illustrate possible organization; the
  directory names themselves are not the design goal.

- **Result:** Information can be organized by role and use rather than
  collected in one Context file.

- **Interpretation:** Context Engineering becomes an information-architecture
  problem: what belongs where and when it should be available. A small
  Project may need no added routing; separate information only when scope,
  task variety, or freshness makes one source hard to use well.

- **Audience Question:** “Agent가 지금 필요한 정보를 어떻게 발견할까?”

- **Engineering Response:** Keep concise always-needed guidance in
  `AGENTS.md` and use it to point toward relevant sources.

- **New State:** The developer has separated knowledge by scope but now has a
  routing problem to solve.

- **Next Friction:** Splitting information does not guarantee the agent can
  find and receive relevant details at the right time.

- **Audience Layer:** PRACTICAL

- **Demo Potential:** VISUAL.

- **Evidence:** `CLM-0003`, `CLM-0005`, `CLM-0014`, `CLM-0015`;
  `references/FEATURE_CONCEPT_MATRIX.md`.

- **Related Curriculum:** ACT 2 — Separation, routing, and progressive
  disclosure; ACT 3 handoff.
### BEAT-015 — `AGENTS.md` acts as a Context Router

- **Act:** ACT 2 — Project Context and Relevance
- **Purpose:** Present AGENTS.md as a route to relevant project information.

- **Current State:** Core Project rules and detailed references have separate
  scopes and locations.

- **Trigger:** A task needs a particular source but the agent needs a way to
  discover it from the repository's core guidance.

- **Action:** Keep always-needed core context and concise routes to relevant
  documentation in `AGENTS.md`.

- **Result:** The file changes from a place intended to contain all Project
  knowledge into a small entry point that helps locate knowledge.

- **Interpretation:** “Context Router” is this course's Engineering pattern.
  Official Codex documentation supports repository and nested `AGENTS.md`
  instruction discovery; it does not establish this exact Router design as an
  official OpenAI pattern.

- **Audience Question:** “Task가 달라지면 필요한 Context도 어떻게 달라질까?”

- **Engineering Response:** Show an ordinary Bug Fix and a Performance task
  receiving different relevant detail from the same Project sources.

- **New State:** The learner sees information discovery as part of Context
  design, not just file organization.

- **Next Friction:** Routes must help the task receive the necessary details
  without making every detail initially present.

- **Audience Layer:** PRACTICAL

- **Demo Potential:** VISUAL (product-independent Router diagram).

- **Evidence:** `CLM-0003`, `CLM-0005`;
  `references/product/agents-md.md`; `references/FEATURE_CONCEPT_MATRIX.md`.

- **Related Curriculum:** ACT 2 — separation, routing, and progressive
  disclosure.
### BEAT-016 — Relevant Context is disclosed for the task

- **Act:** ACT 2 — Project Context and Relevance
- **Purpose:** Show task-relevant Context being disclosed without loading everything.

- **Current State:** Core guidance points to detail sources, but not every
  task needs every source.

- **Trigger:** A general Bug Fix and a Performance optimization need different
  project details.

- **Action:** For the Bug Fix, use core rules and Build/Test basics. For the
  Performance task, identify the need for performance guidance and benchmark
  procedure, then make those details available.

- **Result:** The Context path is visible as `Core Context → Task → Need
  identified → Relevant Context → Work`.

- **Interpretation:** This is Progressive Disclosure as a course-level
  information-design pattern. OpenAI Skills documentation also uses the term
  for its own loading behavior; that product behavior is distinct from this
  general pattern.

- **Audience Question:** “필요한 Context를 제때 찾게 만드는 책임은 누구에게
  있는가?”

- **Engineering Response:** Treat routing quality and freshness as design
  responsibilities, then show how the designed Context works across tasks.

- **New State:** The developer reduces always-present detail while preserving
  a path to task-relevant information.

- **Next Friction:** The routing itself must be maintained and checked; context
  separation creates a new responsibility.

- **Audience Layer:** ALL

- **Demo Potential:** VISUAL.

- **Evidence:** `CLM-0014`, `CLM-0015`;
  `references/FEATURE_CONCEPT_MATRIX.md`; `references/product/skills.md`.

- **Related Curriculum:** ACT 2 — separation, routing, and progressive
  disclosure.
### BEAT-017 — Structured Context succeeds across tasks

- **Act:** ACT 2 — Project Context and Relevance
- **Purpose:** Preserve the bounded success of structured context across tasks.

- **Current State:** Core rules, task-specific references, and routes to
  additional context are organized by scope.

- **Trigger:** The developer returns to several task types in the same Project.

- **Action:** Follow each task from its Prompt through core Project context
  and discovery of relevant detail before work begins.

- **Result:** The intended success is a concise task Prompt, always-needed
  rules retained, task-specific Context separated, less unrelated information
  present, and more manageable Project knowledge. Show these as bounded case
  outcomes; do not claim universal output improvements.

- **Interpretation:** Context Engineering is a meaningful improvement on its
  own. A beginner or intermediate learner could reasonably take this workflow
  as a substantial next step.

- **Audience Question:** “Project에 필요한 정보는 알려줬는데 왜 작업 방법은
  매번 달라질까?”

- **Engineering Response:** Compare executions of the same kind of
  Performance task.

- **New State:** The developer has an organized Context workflow that appears
  to fit the current work.

- **Next Friction:** Agent execution procedure may vary despite relevant
  Project information.

- **Audience Layer:** ALL

- **Demo Potential:** SUPPORTING.

- **Evidence:** `CLM-0003`, `CLM-0005`, `CLM-0014`;
  `references/engineering/context-engineering.md`.

- **Related Curriculum:** ACT 2 — Context Engineering success and ACT 3
  handoff.
## ACT 3 — Harness as a Designed Work System

### BEAT-018 — Context is organized, but execution still varies

- **Act:** ACT 3 — Harness as a Designed Work System
- **Purpose:** Reveal that organized Project knowledge does not ensure repeatable execution.

- **Current State:** Project Context is organized, and the Performance
  guideline and benchmark procedure can be found.

- **Trigger:** The developer asks for the same kind of Performance task on
  different occasions.

- **Action:** Compare three explicitly illustrative execution paths: Run A
  investigates, edits, tests, and stops; Run B measures a baseline, then
  investigates, edits, tests, benchmarks, and compares; Run C investigates,
  performs a broad refactor, tests, and stops.

- **Result:** The steps, scope, and verification vary even though relevant
  Project knowledge is available. These runs are a teaching scenario unless
  reproduced and recorded in a selected Demo environment.

- **Interpretation:** This variation is a Process problem. It is not evidence
  that the Project Context was absent or that a particular product feature
  failed.

- **Audience Question:** “Project에 대해 알아야 할 것을 다 알려줬는데 왜
  작업 방법은 매번 달라질까?”

- **Engineering Response:** Separate what the agent needs to know from how it
  should perform this class of work.

- **New State:** The developer can recognize a Knowledge problem and a
  Process problem as distinct.

- **Next Friction:** The ordered procedure itself is not yet expressed as a
  reusable asset.

- **Audience Layer:** ALL

- **Demo Potential:** SUPPORTING (labeled variation case).

- **Evidence:** `CLM-0006`, `CLM-0029`, `CLM-0030` (candidate wording);
  `references/engineering/harness-engineering.md`.

- **Related Curriculum:** ACT 3 — Context → Harness problem and bottom-up
  framing.
### BEAT-019 — Knowledge and Process answer different questions

- **Act:** ACT 3 — Harness as a Designed Work System
- **Purpose:** Distinguish facts an Agent knows from a process it follows.

- **Current State:** The agent can find the target module, performance rule,
  and benchmark command, while the execution sequence still varies.

- **Trigger:** The learner asks whether knowing the project is the same as
  knowing how to perform this class of task.

- **Action:** Distinguish the task's Context—benchmark command, performance
  guideline, target module—from a repeatable procedure: measure baseline,
  investigate, analyze bottleneck, change, run correctness tests, benchmark,
  compare, and check regression.

- **Result:** Project knowledge answers “What does the agent need to know?”;
  Workflow answers “How should the agent perform this kind of work?”

- **Interpretation:** The current gap is not solved merely by adding more
  Project facts to `AGENTS.md`.

- **Audience Question:** “작업 방법을 매번 처음부터 Prompt에 다시 써야 할까?”

- **Engineering Response:** Show the developer repeating the same procedure
  across Performance tasks.

- **New State:** Workflow is visible as a separate reusable design candidate.

- **Next Friction:** The same ordered steps are typed into Task 1, Task 2, and
  Task 3 Prompts.

- **Audience Layer:** ALL

- **Demo Potential:** VISUAL.

- **Evidence:** `CLM-0006`, `CLM-0029`;
  `references/engineering/harness-engineering.md`.

- **Related Curriculum:** ACT 3 — Context → Harness problem; repeated workflow.
### BEAT-020 — The same Performance procedure is repeated

- **Act:** ACT 3 — Harness as a Designed Work System
- **Purpose:** Show the same Performance method being repeated across tasks.

- **Current State:** A Performance procedure has become visible, but remains
  part of an individual task request.

- **Trigger:** The developer handles Performance Task 1, then Task 2, then
  Task 3 over time.

- **Action:** Show the developer retyping instructions to measure a baseline,
  investigate the target, analyze a bottleneck, plan a bounded change, test,
  benchmark, compare, and review.

- **Result:** Project knowledge is reusable, while the work procedure is
  still repeated in each Prompt.

- **Interpretation:** This is deliberately parallel to the earlier Prompt →
  Context transition: first the developer repeated Project knowledge; now
  they repeat the Work Procedure.

- **Audience Question:** “Project 지식을 재사용했던 것처럼 작업 방법도
  재사용할 수 없을까?”

- **Engineering Response:** Package or document the recurring procedure in a
  reusable form.

- **New State:** The developer has a concrete, repeated workflow to reuse.

- **Next Friction:** The reusable mechanism and its scope must be chosen and
  verified for the actual environment.

- **Audience Layer:** PRACTICAL

- **Demo Potential:** SUPPORTING.

- **Evidence:** `CLM-0006`, `CLM-0029`; `references/product/skills.md`;
  `references/STORY_DEPENDENCIES.md` (Skills).

- **Related Curriculum:** ACT 3 — Repeated workflow and Skill candidate.
### BEAT-021 — A reusable workflow answers the repetition

- **Act:** ACT 3 — Harness as a Designed Work System
- **Purpose:** Make the recurring procedure reusable after repetition becomes visible.

- **Current State:** The same Performance procedure has been repeated across
  several task prompts.

- **Trigger:** The developer wants to reuse the work method as a Project asset.

- **Action:** Define a Performance workflow: Baseline, Investigate, Plan,
  Implement, Correctness Test, Benchmark, Compare, and Review. Use a Codex
  Skill only if its current documented behavior and availability fit the
  selected training environment; a repository procedure is a fallback.

- **Result:** The task can select a reusable workflow rather than restating
  every step in its Prompt.

- **Interpretation:** The Engineering change is reusable procedure design.
  A Skill is one possible Product mechanism, not the concept itself.

- **Audience Question:** “이 절차를 다시 사용할 때 실제 작업에서도 필요한
  단계가 드러나는가?”

- **Engineering Response:** Run the same kind of Performance task with the
  workflow and examine its evidence.

- **New State:** The developer can provide a method for work, alongside
  Project knowledge.

- **Next Friction:** The method's practical value needs to be shown, and the
  larger Harness architecture should still wait.

- **Audience Layer:** PRACTICAL

- **Demo Potential:** ANCHOR (candidate 3; product mechanism conditional).

- **Evidence:** `CLM-0006`, `references/product/skills.md`;
  `references/STORY_DEPENDENCIES.md` (Skills); `OQ-005`, `OQ-008`.

- **Related Curriculum:** ACT 3 — Repeated workflow and Skill candidate.
### BEAT-022 — The repeated workflow succeeds in a bounded case

- **Act:** ACT 3 — Harness as a Designed Work System
- **Purpose:** Demonstrate bounded value from a reusable performance workflow.

- **Current State:** The Performance procedure is available as a reusable
  workflow.

- **Trigger:** The developer repeats a task of the same kind.

- **Action:** In a controlled or observed case, inspect whether the agent
  measures a baseline first, investigates, plans before edits, runs the
  correctness test and benchmark, and compares before/after evidence.

- **Result:** The desired bounded case makes those steps and their evidence
  visible. Claim improved consistency only to the extent supported by
  recorded runs and stated criteria; otherwise label the example
  illustrative.

- **Interpretation:** A reusable workflow can be valuable by itself. At this
  point, show the workflow insight rather than a completed Harness diagram.

- **Audience Question:** “Task가 더 복잡해져도 한 절차만으로 충분할까?”

- **Engineering Response:** Expand to a pipeline task that requires several
  distinct investigations.

- **New State:** The developer sees work procedure as reusable Project
  knowledge while keeping verification visible.

- **Next Friction:** A complex task combines independent Architecture,
  Performance, Test, and Documentation questions.

- **Audience Layer:** PRACTICAL

- **Demo Potential:** ANCHOR (candidate 3; evidence conditional).

- **Evidence:** `CLM-0006`, `CLM-0020`, `CLM-0029`;
  `references/product/skills.md`; `references/engineering/verification.md`.

- **Related Curriculum:** ACT 3 — repeated workflow and Skill success.
### BEAT-023 — Task complexity creates distinct investigation roles

- **Act:** ACT 3 — Harness as a Designed Work System
- **Purpose:** Let compound task complexity motivate distinct investigation roles.

- **Current State:** A reusable Performance workflow helps with a bounded
  task. As the same Project grows, a candidate performance concern now crosses
  a multi-module call path and creates regression questions.

- **Trigger:** A proposed optimization spans modules; understanding the
  architecture, measuring the bottleneck, and checking existing behavior all
  matter to a safe plan. Treat this as a Demo Assumption until a selected
  repository supports the scenario.

- **Action:** Show how one performance task creates related investigations:
  Architecture traces the affected call path and module relationships;
  Performance identifies and measures the bottleneck; Tests examine current
  behavior and regression risk; existing documentation may constrain a safe
  change. These are not unrelated tasks introduced solely to justify
  delegation. One Agent initially performs the investigations in sequence.

- **Result:** The work entails many file reads, several kinds of Context, and
  repeated shifts between investigation roles. Some questions depend on one
  another; others may be investigated independently.

- **Interpretation:** Complexity is not only a larger task. One agent is also
  carrying several roles and kinds of Context. The candidate is valid only if
  the chosen Project's code path and regression risks make those inquiries
  relevant together.

- **Audience Question:** “Task를 나누는 것뿐 아니라 역할과 Context도 나눌
  수 있을까?”

- **Engineering Response:** Make role separation visible as an Engineering
  problem before naming a product mechanism.

- **New State:** The learner can describe role and Context load without
  assuming a particular feature.

- **Next Friction:** Some investigations can be separated, but their findings
  still need deliberate handoff and integration.

- **Audience Layer:** PRACTICAL

- **Demo Potential:** SUPPORTING (complexity map).

- **Evidence:** CLM-0007; references/product/subagents.md;
  references/engineering/harness-engineering.md.

- **Related Curriculum:** ACT 3 — role/context complexity and Subagents.
### BEAT-024 — Role separation is a design choice

- **Act:** ACT 3 — Harness as a Designed Work System
- **Purpose:** Make role separation understandable before naming Subagents.

- **Current State:** One agent is switching among Architecture, Performance,
  Test, and Documentation investigations.

- **Trigger:** Some questions require distinct evidence, and some can be
  investigated independently.

- **Action:** Show role boundaries and dependencies in plain language. Identify
  what each investigation needs and what evidence must return to the person
  integrating the work. Do this before introducing the Subagent product term.

- **Result:** Role Separation is understandable as a way to manage
  responsibilities and Context, with integration remaining part of the task.

- **Interpretation:** The problem and its engineering response can be
  understood independently of whether a target product surface supports a
  particular agent mechanism.

- **Audience Question:** “이 역할별 조사를 실제 작업에서 어떻게 나눌 수
  있을까?”

- **Engineering Response:** Introduce Subagents as one possible mechanism,
  conditional on STEP 03 evidence and the selected training environment.

- **New State:** The learner has a problem that a mechanism may address.

- **Next Friction:** A mechanism must preserve useful context and return
  findings that the Main Agent can integrate.

- **Audience Layer:** PRACTICAL

- **Demo Potential:** VISUAL (problem-first role map).

- **Evidence:** CLM-0007; references/product/subagents.md;
  references/STORY_DEPENDENCIES.md (Subagents).

- **Related Curriculum:** ACT 3 — role/context complexity and Subagents.
### BEAT-025 — Subagents isolate investigation Context

- **Act:** ACT 3 — Harness as a Designed Work System
- **Purpose:** Introduce Subagents conditionally as one way to isolate investigation.

- **Current State:** Role boundaries are clear, but the work has not yet been
  divided among separate agent investigations.

- **Trigger:** The developer wants Architecture, Performance, and Test
  investigations to proceed within their own relevant scope.

- **Action:** Show a conceptual Main Agent with Architecture, Performance, and
  Test agents. Each investigates its area and returns evidence; the Main Agent
  integrates the results and writes the overall change plan. Use an actual
  Codex mechanism only if current research and target availability support it;
  otherwise keep the diagram conceptual.

- **Result:** Each investigation can focus on its relevant Context, and the
  Main Agent may not need to hold every detail from the outset.

- **Interpretation:** Context Isolation is a key design value. Concurrent work
  may help in some cases, but speed alone is not the reason to separate roles.

- **Audience Question:** “각 역할이 필요한 Context에 집중하면서 결과를
  어떻게 안전하게 합칠까?”

- **Engineering Response:** Make handoff content, uncertainty, and integration
  explicit, while keeping duplication, context loss, coordination, and
  integration cost visible.

- **New State:** The learner sees role-scoped investigation as an optional
  Context-management approach with trade-offs.

- **Next Friction:** The value of this arrangement must be judged by the work
  it makes clearer, not by the number of agents or a speed claim.

- **Audience Layer:** ADVANCED

- **Demo Potential:** SUPPORTING (conceptual diagram; product behavior
  conditional).

- **Evidence:** CLM-0007; references/product/subagents.md;
  references/engineering/harness-engineering.md.

- **Related Curriculum:** ACT 3 — role/context complexity and Subagents.
### BEAT-026 — A bounded task benefits from clear roles

- **Act:** ACT 3 — Harness as a Designed Work System
- **Purpose:** Show bounded role-separated work with reviewable handoffs.

- **Current State:** A complex investigation has explicit role boundaries and
  an integration point.

- **Trigger:** The same pipeline task needs Architecture, Performance, and
  Test evidence before a safe plan can be written.

- **Action:** Present the intended bounded scenario: each role investigates
  its scope, returns relevant findings, and the Main Agent integrates them.
  Keep it labeled as illustrative or controlled until a selected Demo records
  the actual runs and results.

- **Result:** In this scenario, roles are clear, investigation Context is
  separated, independent work is possible, and the Main Agent can focus on
  integration.

- **Interpretation:** The success criterion is useful division of work and
  integration, not a claim that Subagents are faster or always improve
  results.

- **Audience Question:** “이 구조가 유용했다면 다음 작업에도 역할을 더
  나누는 것이 좋을까?”

- **Engineering Response:** Test the boundary with a small task where
  coordination may exceed the investigation value.

- **New State:** The learner understands a bounded reason to use role
  separation while recognizing the evidence status of the example.

- **Next Friction:** A successful complex-task example can tempt the developer
  to delegate every task.

- **Audience Layer:** PRACTICAL

- **Demo Potential:** SUPPORTING (controlled or observed result required for
  outcome claims).

- **Evidence:** CLM-0007; INV-DEMO-003; references/product/subagents.md.

- **Related Curriculum:** ACT 3 — role/context complexity and Subagents.
### BEAT-027 — More agents can make a small task worse

- **Act:** ACT 3 — Harness as a Designed Work System
- **Purpose:** Show that applying every agent role to a small task can add overhead.

- **Current State:** Role separation appeared useful for a task with several
  distinct investigations.

- **Trigger:** The developer starts assigning Architecture, Performance, Test,
  Documentation, Security, and Review agents even to a small bug fix.

- **Action:** Compare the small task's limited investigation needs with the
  repeated setup, overlapping searches, coordination, result transfer, and
  integration the extra roles create. Treat slower execution and added
  token/compute use as possible outcomes unless measured.

- **Result:** Unnecessary agents can duplicate work, increase coordination and
  integration cost, consume more resources, or make the task slower.

- **Interpretation:** Agent count is not a measure of Harness maturity.
  Complexity earns a place only when it addresses an actual problem.

- **Audience Question:** “Agent가 많을수록 Harness가 더 성숙한 것일까?”

- **Engineering Response:** Keep the smallest arrangement that serves the
  observed task; connect this early insight to the later Minimum Effective
  Harness heuristic without introducing a component checklist.

- **New State:** The learner sees delegation as a scoped choice with costs,
  not a default.

- **Next Friction:** Even after a task ends, useful project facts may be
  rediscovered instead of reused.

- **Audience Layer:** ADVANCED

- **Demo Potential:** SUPPORTING (small-task comparison; outcome evidence
  conditional).

- **Evidence:** CLM-0007, CLM-0022; references/product/subagents.md;
  references/engineering/harness-engineering.md.

- **Related Curriculum:** ACT 3 — role/context complexity and Subagents; ACT 4
  — Improve Context, Memory, Skills, and delegation.
### BEAT-028 — Project facts are rediscovered across tasks

- **Act:** ACT 3 — Harness as a Designed Work System
- **Purpose:** Motivate retained knowledge through repeated project rediscovery.

- **Current State:** The Project has complex investigations, and separate
  roles do not by themselves preserve useful findings for later tasks.

- **Trigger:** Over time, several tasks encounter facts that are not always
  quick to infer from source code.

- **Action:** Show candidate findings: a test is flaky in a particular
  environment; Module X is in migration and should not receive new features;
  benchmarks are meaningful only in Release builds; API Y remains for external
  compatibility. Show a later task investigating the same fact again.

- **Result:** Each task may eventually find the needed information, but the
  same Project knowledge can cost investigation time repeatedly.

- **Interpretation:** This is a knowledge-reuse friction, distinct from
  Subagent coordination. Keep the examples illustrative unless the Demo
  repository establishes them.

- **Audience Question:** “이미 알아낸 Project 사실을 왜 다음 Task에서 또
  발견하고 있을까?”

- **Engineering Response:** Distinguish information needed by the current task
  from knowledge worth preserving for future tasks.

- **New State:** The learner recognizes repeated discovery as a new problem
  across task boundaries.

- **Next Friction:** The existing Context design helps with information needed
  now but does not answer what deserves retention.

- **Audience Layer:** PRACTICAL

- **Demo Potential:** SUPPORTING (re-discovery case; illustrative unless
  observed).

- **Evidence:** CLM-0008; references/product/memory.md;
  references/STORY_DEPENDENCIES.md (Memory).

- **Related Curriculum:** ACT 3 — repeated discovery, Context vs Memory.
### BEAT-029 — Context and Memory answer different questions

- **Act:** ACT 3 — Harness as a Designed Work System
- **Purpose:** Separate information needed now from knowledge retained across tasks.

- **Current State:** Tasks repeatedly investigate useful facts, such as the
  conditions under which the benchmark is meaningful.

- **Trigger:** Task 1 investigates those conditions, Task 2 repeats the
  investigation, and Task 3 does so again.

- **Action:** Contrast Context Engineering's question, “What information is
  needed now?”, with the new design question, “What is worth reusing later?”
  Let the repeated investigation create the Memory question before presenting
  a product feature.

- **Result:** Current task Context and cross-task retention have different
  scopes and purposes.

- **Interpretation:** Memory is a retention and reuse problem, not simply more
  information in the current Context.

- **Audience Question:** “지금 필요한 정보와 앞으로 다시 사용할 정보는
  어떻게 구분할까?”

- **Engineering Response:** Design what may be retained, why it is useful, and
  how its validity will be checked.

- **New State:** The learner can state the problem that motivates Memory.

- **Next Friction:** The engineering pattern must remain distinct from a
  particular product's persistent-memory behavior.

- **Audience Layer:** PRACTICAL

- **Demo Potential:** VISUAL (Context vs Memory question).

- **Evidence:** CLM-0008; references/product/memory.md;
  references/FEATURE_CONCEPT_MATRIX.md.

- **Related Curriculum:** ACT 3 — repeated discovery, Context vs Memory.
### BEAT-030 — Memory starts with what is worth retaining

- **Act:** ACT 3 — Harness as a Designed Work System
- **Purpose:** Choose candidate facts worth retaining before selecting a product mechanism.

- **Current State:** The developer can distinguish immediate task Context from
  information that may be useful across tasks.

- **Trigger:** Repeated investigation makes reuse valuable enough to consider.

- **Action:** Separate the Engineering Memory pattern from ChatGPT or Codex
  product Memory and persistent mechanisms. Depending on verified capability
  and project needs, candidate implementations may include durable project
  documentation, repository knowledge, a structured memory file, or a
  supported official persistent mechanism. Decide what to remember rather than
  assuming that every fact should be stored.

- **Result:** The developer has a retention design question and implementation
  options, while the project's canonical Source of Truth remains authoritative.

- **Interpretation:** The Story is about validated, scoped, reusable knowledge;
  it does not promise that a product feature is available in every account or
  environment.

- **Audience Question:** “어떤 지식을 보존해야 다음 작업에 실제로 도움이
  될까?”

- **Engineering Response:** Carry one validated, reusable fact from Task A
  into the appropriate Context for Task B.

- **New State:** Memory is understood as an Engineering problem before it is a
  named Product implementation.

- **Next Friction:** Reuse must produce a bounded benefit without suggesting
  human-like recall or unsupported product behavior.

- **Audience Layer:** PRACTICAL

- **Demo Potential:** SUPPORTING (implementation conditional).

- **Evidence:** CLM-0003, CLM-0008; references/product/memory.md;
  references/FEATURE_CONCEPT_MATRIX.md; references/STORY_DEPENDENCIES.md
  (Memory).

- **Related Curriculum:** ACT 3 — repeated discovery, Context vs Memory.
### BEAT-031 — A retained fact helps the next Performance task

- **Act:** ACT 3 — Harness as a Designed Work System
- **Purpose:** Show bounded reuse of a retained fact in a later task.

- **Current State:** A candidate fact has been checked and retained in a
  durable, appropriately scoped place.

- **Trigger:** Task B begins a new Performance investigation in the same
  Project.

- **Action:** Carry forward the fact that the benchmark must use a Release
  build. Show the agent finding and using that information in the relevant
  Context instead of repeating the original investigation. Label the scenario
  illustrative or controlled unless the selected Demo records this behavior.

- **Result:** The scenario can show less repeated discovery, reuse of
  Project-specific knowledge, a possible reduction in task-start investigation,
  and support for more consistent task decisions. Do not claim measured time
  savings without evidence.

- **Interpretation:** The system preserves and makes reusable a validated
  finding; the AI is not portrayed as remembering like a person.

- **Audience Question:** “이 정보는 어디에 보존하고, Task B에는 어떻게
  제공해야 할까?”

- **Engineering Response:** Inspect the stored fact's scope, source, and
  freshness before relying on it.

- **New State:** The learner sees the intended cross-task value of Memory.

- **Next Friction:** A retained fact can outlive the condition that made it
  true.

- **Audience Layer:** ADVANCED

- **Demo Potential:** SUPPORTING (controlled or observed result required for
  outcome claims).

- **Evidence:** CLM-0008; INV-DEMO-003; references/product/memory.md;
  references/engineering/harness-engineering.md.

- **Related Curriculum:** ACT 3 — repeated discovery, Context vs Memory.
### BEAT-032 — Memory has a lifecycle

- **Act:** ACT 3 — Harness as a Designed Work System
- **Purpose:** Establish validation, scope, freshness, update, and retirement for Memory.

- **Current State:** Retained knowledge can reduce re-discovery when it
  remains relevant and accurate.

- **Trigger:** The developer considers saving more facts: a temporary task
  detail, a durable Project rule, one error, an Architecture decision, or
  flaky-test information.

- **Action:** Introduce the lifecycle Create → Validate → Scope → Retrieve →
  Refresh → Update/Retire. Ask whether the information is verified or inferred,
  where it applies, when it should be retrieved, whether it is still current,
  and how to change or remove it. Do not ask beginners to memorize the stages.

- **Result:** Memory is treated as a maintained Project asset with scope,
  freshness, validation, update, and retirement.

- **Interpretation:** The key message is to manage what is worth remembering
  and when to discard it. Retained knowledge can itself become technical debt.

- **Audience Question:** “무엇을 기억하고, 언제 다시 확인하거나 버려야 할까?”

- **Engineering Response:** Continue from knowledge lifecycle to the tools and
  checks that make development work actionable and verifiable.

- **New State:** Learners recognize that Memory needs maintenance and is not
  an unlimited store or the canonical Source of Truth.

- **Next Friction:** Context, workflow, roles, and durable knowledge still
  need tools and verification to produce dependable development work.

- **Audience Layer:** PRACTICAL

- **Demo Potential:** VISUAL (Memory lifecycle and staleness).

- **Evidence:** CLM-0003, CLM-0008; INV-MATURITY-008;
  references/product/memory.md; references/engineering/harness-engineering.md.

- **Related Curriculum:** ACT 3 — Repeated discovery, Context vs Memory.
### BEAT-033 — Tools become part of the work system

- **Act:** ACT 3 — Harness as a Designed Work System
- **Purpose:** Connect work-system design to tools that enable observable actions.

- **Current State:** The agent can use repository Context, recurring
  Workflows, role separation, and durable knowledge.

- **Trigger:** Software work must search, inspect, change, run, compare, and
  review artifacts; generating an answer alone does not complete the task.

- **Action:** Revisit tools by the work they enable: Search; file read/edit;
  Shell; Build; Test; Lint; Benchmark; Git diff; Documentation or Web; and
  external tools when needed. Connect them to the environment in which the
  agent acts and evidence is collected.

- **Result:** Tools are visible as part of the system that lets an agent
  investigate and act in a real development environment.

- **Interpretation:** Tools are not an independent feature tour. Their value
  comes from how they support a workflow and allow results to be inspected.

- **Audience Question:** “Agent가 답변한 뒤 실제 변경과 확인은 무엇으로 할까?”

- **Engineering Response:** Connect available actions to explicit checks and
  evidence.

- **New State:** The learner sees tools as work-system capabilities, subject
  to the selected product surface and environment.

- **Next Friction:** Having tools does not establish that the work is correct
  or complete.

- **Audience Layer:** PRACTICAL

- **Demo Potential:** SUPPORTING (tool-to-work map).

- **Evidence:** CLM-0016, CLM-0017; references/engineering/verification.md;
  current availability remains subject to OQ-003 and OQ-005.

- **Related Curriculum:** ACT 3 — Tools, verification, and Harness reveal.
### BEAT-034 — Verification becomes part of the workflow

- **Act:** ACT 3 — Harness as a Designed Work System
- **Purpose:** Make Verification a repeatable part of task work.

- **Current State:** Tools can edit code and run checks, but the developer
  still has to request verification in individual task Prompts.

- **Trigger:** A task-level request such as “run the tests after the change”
  repeats across Bug Fix and Performance work.

- **Action:** Compare an early Prompt that asks for a test with reusable
  Bug-Fix and Performance workflows that include the relevant correctness
  tests, benchmark, comparison, and diff review.

- **Result:** Verification moves from a reminder in each Prompt into the
  repeatable work method, with evidence defined for the task.

- **Interpretation:** Verification is structural to trustworthy development
  work; generated is not the same as done.

- **Audience Question:** “검증을 매번 기억해 요청하지 않아도 Workflow에
  포함할 수 있을까?”

- **Engineering Response:** Connect project Context, Workflow, Tools,
  Environment, and Verification as parts that have emerged from earlier
  frictions.

- **New State:** Learners see verification as an expected part of a task
  workflow while retaining developer review and judgment.

- **Next Friction:** These parts now need a name and a coherent system view,
  without turning the course into a mandatory feature checklist.

- **Audience Layer:** ALL

- **Demo Potential:** VISUAL (Prompt reminder vs reusable checks).

- **Evidence:** CLM-0020, CLM-0029; INV-VERIFY-001;
  references/engineering/verification.md.

- **Related Curriculum:** ACT 3 — Tools, verification, and Harness reveal.
### BEAT-035 — The Harness emerges from solved frictions

- **Act:** ACT 3 — Harness as a Designed Work System
- **Purpose:** Name the broader work system after its parts have solved distinct frictions.

- **Current State:** Project Context, reusable Workflow, optional role
  separation, Memory, Tools, and Verification each answer a visible need.

- **Trigger:** The learner asks what the developer has been designing across
  these changes.

- **Action:** Trace the path from an agent with repository access, through
  reusable Context and Workflows, to role-scoped investigations, durable
  knowledge, tools, and checks.

- **Result:** The developer recognizes that the work has expanded beyond
  writing a better Prompt into shaping the environment in which an agent
  works.

- **Interpretation:** Name Harness as the course's candidate operational
  framing only after the pieces have appeared. Keep the definition provisional
  under OQ-011 and do not present a universal taxonomy.

- **Audience Question:** “우리는 Prompt를 넘어 어떤 전체 작업 환경을 설계하고
  있는가?”

- **Engineering Response:** Reveal a product-independent conceptual model of
  the assembled system.

- **New State:** The learner can understand why Harness is a system view of
  previously motivated parts.

- **Next Friction:** A combined diagram could be mistaken for a fixed product
  architecture or a required component list.

- **Audience Layer:** ALL

- **Demo Potential:** VISUAL.

- **Evidence:** CLM-0016, CLM-0017, CLM-0030; OQ-011;
  references/engineering/harness-engineering.md.

- **Related Curriculum:** ACT 3 — Tools, verification, and Harness reveal.
### BEAT-036 — The system view makes the progression visible

- **Act:** ACT 3 — Harness as a Designed Work System
- **Purpose:** Reveal how previously motivated components relate as a conceptual Harness.

- **Current State:** The learner recognizes the need for an overall view but
  has not yet seen how the parts relate.

- **Trigger:** A retrospective can show how far the developer's work pattern
  has evolved from the beginning.

- **Action:** Show this conceptual structure. Skills, Memory, Subagents, and
  Tools remain optional according to project needs and verified availability:

      Developer
          ↓
      Main Agent
       ├ Context
       ├ Skills / Memory
       ├ Subagents
       └ Tools → Build / Test / Benchmark
          ↓
      Execution
          ↓
      Verification

  Include Environment, Workflow, or Evaluation only where the research and
  Curriculum call for them.

- **Result:** The learner can compare the beginning (Developer → ChatGPT →
  Answer) with the current pattern (Developer → Agent System → Execution →
  Verification).

- **Interpretation:** The diagram is a course model, not a promise that every
  product surface exposes every component or that each project needs them all.

- **Audience Question:** “좋은 AI Model을 쓰는 것과 좋은 AI 개발 System을
  만드는 것은 같은 문제인가?”

- **Engineering Response:** Show one bounded task using the assembled system
  before revealing its maintenance problem.

- **New State:** Learners can see the system evolution and developer's
  continuing role.

- **Next Friction:** The learner needs to experience the value of a system
  that appears to fit the current Project.

- **Audience Layer:** ALL

- **Demo Potential:** VISUAL (conceptual system diagram and beginning/current
  comparison).

- **Evidence:** CLM-0016, CLM-0017, CLM-0030; OQ-011;
  references/engineering/harness-engineering.md.

- **Related Curriculum:** ACT 3 — Tools, verification, and Harness reveal.
### BEAT-037 — A well-fitted Harness succeeds at a bounded task

- **Act:** ACT 3 — Harness as a Designed Work System
- **Purpose:** Show a bounded task using the assembled Harness.

- **Current State:** The learner has seen the system view but not yet watched
  its parts support one development task.

- **Trigger:** The developer asks for an investigation and a safe improvement
  to a Performance problem.

- **Action:** In a controlled or observed case, provide relevant Project
  Context, a Performance Workflow, role separation where justified, validated
  Project knowledge, available Build/Benchmark tools, and Verification. Show
  the agent investigating, planning, implementing, testing, benchmarking, and
  reviewing.

- **Result:** The designed work system supports the task, while the developer
  concentrates on the task goal, trade-offs, and decision points. Keep the
  outcome bounded by recorded evidence or label it illustrative.

- **Interpretation:** Give the current Harness genuine value and a sense of
  completeness before advancing the Story; do not claim universal quality or
  measured speed gains.

- **Audience Question:** “이제 꽤 완성된 것 같은데, Project가 바뀌어도 계속
  맞을까?”

- **Engineering Response:** Let time pass and change Project assumptions.

- **New State:** The learner understands why the system is useful in the
  conditions for which it was designed.

- **Next Friction:** Project and tools evolve; system components may not be
  updated at the same time.

- **Audience Layer:** PRACTICAL

- **Demo Potential:** SUPPORTING (bounded case; outcome evidence conditional).

- **Evidence:** CLM-0020, CLM-0029, CLM-0030; INV-DEMO-003;
  references/engineering/verification.md; OQ-007 and OQ-008.

- **Related Curriculum:** ACT 3 — Tools, verification, and Harness reveal;
  ACT 3 → ACT 4 handoff.
## ACT 4 — Loop and System Improvement

### BEAT-038 — Time passes while the Project changes

- **Act:** ACT 4 — Loop and System Improvement
- **Purpose:** Make elapsed time and project change visible before a stale failure.

- **Current State:** The Harness has supported work under the Project
  assumptions for which it was designed.

- **Trigger:** The Story advances by weeks or months while the same software
  Project continues to evolve.

- **Action:** Show Project changes such as a build-system migration, new test
  commands, directory or dependency changes, a completed Architecture
  migration, or a revised benchmark method. The code and canonical Project
  documentation are brought up to date, but do not assume every Harness
  component changes automatically.

- **Result:** Project reality moves forward while some instructions, Skills,
  Memory, tools, or Workflows may still describe the previous state.

- **Interpretation:** Time introduces a maintenance problem distinct from
  handling a larger task.

- **Audience Question:** “Project가 바뀌면 Agent가 따르는 System도 함께 바뀌었을까?”

- **Engineering Response:** Inspect one concrete mismatch between the current
  Project and a still-used Harness artifact.

- **New State:** Learners can identify time and project evolution as a source
  of Harness staleness.

- **Next Friction:** One old instruction or Workflow may still direct an
  otherwise capable agent to use an obsolete process.

- **Audience Layer:** ALL

- **Demo Potential:** SUPPORTING (timeline; keep chronology illustrative).

- **Evidence:** INV-MATURITY-010; plan/MASTER_PLAN.md §§5.8, 14;
  references/engineering/harness-engineering.md.

- **Related Curriculum:** ACT 4 — Project change and stale Harness.
### BEAT-039 — A stale workflow fails once and is corrected locally

- **Act:** ACT 4 — Loop and System Improvement
- **Purpose:** Resolve one stale-workflow failure locally without prematurely introducing Loop.

- **Current State:** The Project has migrated from CMake/CTest to Bazel, while
  an old Build or Test workflow remains.

- **Trigger:** A new task asks the agent to fix a bug and run the relevant
  tests.

- **Action:** In a clearly labeled controlled or illustrative case, show the
  agent making the code change and then following the old CMake/CTest
  instruction. The obsolete command fails; the developer corrects the agent
  that the Project now uses Bazel, reruns the relevant Bazel tests, and resolves
  the current task.

- **Result:** The immediate task can be recovered through a developer
  correction, but the stale durable instruction remains unchanged.

- **Interpretation:** A single correction can solve one task without updating
  what shapes future tasks. Do not introduce Loop Engineering from this event
  alone.

- **Audience Question:** “이번 Task를 바로잡았는데 다음 Task도 달라질까?”

- **Engineering Response:** Let a later task encounter the same outdated
  workflow before proposing a system-level improvement.

- **New State:** The learner sees both the immediate recovery and the
  unresolved source of future mismatch.

- **Next Friction:** The developer may have to repeat the same correction.

- **Audience Layer:** PRACTICAL

- **Demo Potential:** ANCHOR candidate 4 (only if controlled or observed and
  clearly labeled).

- **Evidence:** INV-MATURITY-010, INV-DEMO-003;
  plan/MASTER_PLAN.md §§5.8, 25; references/engineering/harness-engineering.md.

- **Related Curriculum:** ACT 4 — Project change and stale Harness.
### BEAT-040 — Repeated failure reveals the system question

- **Act:** ACT 4 — Loop and System Improvement
- **Purpose:** Use a later recurrence to earn a system-level question.

- **Current State:** The first task succeeded after a developer correction,
  but the old workflow was not updated.

- **Trigger:** A later task uses the same stale Test instruction; the
  developer corrects it again, and a further task repeats the pattern.

- **Action:** Show Task 1, Task 2, and Task 3 as a controlled or observed
  sequence: stale workflow, correction, completion; then the same workflow
  returns. Preserve the evidence status of each run.

- **Result:** Repeating a local correction can leave the source of the failure
  in place. The developer now has a reason to inspect the work system.

- **Interpretation:** A recurring failure shifts the question from “How do I
  finish this task?” to “What keeps shaping the next task this way?”

- **Audience Question:** “세 번째 같은 실수가 발생했다면 현재 Task만 고치는
  것이 맞을까?”

- **Engineering Response:** Examine the relevant Harness artifacts and assess
  whether the recurrence is real and caused by a stale system element.

- **New State:** The Harness-to-Loop problem is visible: repeated correction
  has not changed the system.

- **Next Friction:** The source may span instructions, Skills, Memory, tools,
  duplicated rules, or an obsolete Workflow.

- **Audience Layer:** ADVANCED

- **Demo Potential:** ANCHOR candidate 4 (repeated evidence required for an
  observed claim).

- **Evidence:** INV-MATURITY-010, INV-LOOP-001, INV-DEMO-003;
  plan/MASTER_PLAN.md §§5.8–5.9, 25.

- **Related Curriculum:** ACT 4 — Project change and stale Harness; Loop model.
### BEAT-041 — Harness Technical Debt names the maintenance problem

- **Act:** ACT 4 — Loop and System Improvement
- **Purpose:** Name Harness maintenance cost as a bounded technical-debt analogy.

- **Current State:** Multiple tasks may repeat a correction because part of
  the system still represents an earlier Project state.

- **Trigger:** Inspection finds stale instructions, Skills, or Memory,
  outdated tool configuration, duplicate rules, or an obsolete Workflow.

- **Action:** Compare the maintenance of Harness artifacts with familiar
  Product Code practices such as Versioning, Review, Testing, Refactoring, and
  Maintenance. Existing STEP 03 research treats “Harness Technical Debt” as
  a bounded Engineering analogy; do not call it official Product terminology
  or a universal taxonomy.

- **Result:** Learners can describe stale or inconsistent Harness parts as
  maintenance debt that may shape later agent work.

- **Interpretation:** The Harness is an Engineering Asset, not a
  maintenance-free end state or a universal component checklist.

- **Audience Question:** “AI가 일하는 System도 유지보수 대상 아닌가?”

- **Engineering Response:** Ask how to detect the system problem, determine
  its cause, and feed a justified change into later work.

- **New State:** The need for feedback-driven System Improvement is explicit.

- **Next Friction:** Naming debt does not establish its cause or prove that a
  proposed repair improves later tasks.

- **Audience Layer:** ADVANCED

- **Demo Potential:** SUPPORTING (analogy follows the concrete case).

- **Evidence:** INV-MATURITY-010, INV-LOOP-001;
  references/engineering/harness-engineering.md; plan/MASTER_PLAN.md §5.8.

- **Related Curriculum:** ACT 4 — Project change and stale Harness; Loop model.
### BEAT-042 — Failure becomes a signal about the system

- **Act:** ACT 4 — Loop and System Improvement
- **Purpose:** Reframe recurrence as a reason to investigate the system.

- **Current State:** The same stale Test workflow has required correction on
  more than one task.

- **Trigger:** The developer notices that solving the immediate task has not
  prevented the same behavior from returning.

- **Action:** Contrast the earlier view—Failure is an obstacle to remove from
  the current task—with the expanded view—Failure is a task problem and a
  possible signal that the system could improve. After correcting the old
  test command with the current Bazel command, ask why the agent selected the
  old command.

- **Result:** The question changes from “What should the agent do now?” to
  “Why did our system make this behavior likely?”

- **Interpretation:** A Failure is a reason to investigate, not proof by
  itself that the Harness is the cause or that a system change is needed.

- **Audience Question:** “이 실패를 이번 Task에서 없애는 것과 System을
  개선할 Signal로 보는 것은 어떻게 다를까?”

- **Engineering Response:** Observe what the agent actually read, selected,
  and did before changing anything.

- **New State:** The learner sees the beginning of Loop Engineering as a
  change in how recurring failures are interpreted.

- **Next Friction:** An improvement made before understanding the event may
  target the wrong layer.

- **Audience Layer:** PRACTICAL

- **Demo Potential:** SUPPORTING (failure interpretation).

- **Evidence:** INV-LOOP-001; references/engineering/loop-engineering.md;
  references/engineering/agent-failure-modes.md.

- **Related Curriculum:** ACT 4 — Loop model and cause analysis.
### BEAT-043 — Observe before changing the Harness

- **Act:** ACT 4 — Loop and System Improvement
- **Purpose:** Establish observation before a cause is diagnosed or a change is made.

- **Current State:** A recurring failure is a signal to inspect, not yet a
  diagnosis.

- **Trigger:** The developer needs evidence about how the agent arrived at the
  obsolete command.

- **Action:** Observe which command ran, which Context was read, which Skill or
  Memory was used, which Test was attempted, at what step the failure
  occurred, and whether a similar failure happened before. In the candidate
  example, compare the stale Test Skill with the current Project README's
  Bazel command.

- **Result:** The evidence may suggest that Project information exists but the
  agent is following a stale Harness artifact.

- **Interpretation:** Observation precedes improvement. Keep this diagnosis
  provisional until the artifact and run evidence support it.

- **Audience Question:** “Agent가 무엇을 읽고 어떤 순서로 old command를
  선택했을까?”

- **Engineering Response:** Use the observed path to form a cause hypothesis.

- **New State:** The learner can distinguish the actual execution trace from
  an assumption about what happened.

- **Next Friction:** The same visible Failure can still have several causes.

- **Audience Layer:** PRACTICAL

- **Demo Potential:** SUPPORTING (trace and artifact comparison).

- **Evidence:** CLM-0020, CLM-0029; INV-LOOP-001;
  references/engineering/loop-engineering.md;
  references/engineering/verification.md.

- **Related Curriculum:** ACT 4 — Loop model; cause analysis, change,
  evaluation, and regression.
### BEAT-044 — Form a cause hypothesis before editing a rule

- **Act:** ACT 4 — Loop and System Improvement
- **Purpose:** Separate evidence from a cause hypothesis.

- **Current State:** The developer has observations about the command,
  Context, workflow, environment, and prior runs.

- **Trigger:** A wrong Test command could result from more than one layer.

- **Action:** Compare possible causes: an incorrect instruction; a stale Skill;
  missing Context routing; Bazel unavailable in the Environment; correct
  information that the agent did not follow; or a task-specific exception.
  Form and label a cause hypothesis from evidence before making a change.

- **Result:** The developer separates observed facts from the explanation
  proposed for them.

- **Interpretation:** Debugging an Agent System uses the same discipline as
  debugging software: a Failure alone does not identify its cause.

- **Audience Question:** “이 Failure의 원인은 확인된 사실인가, 아직 가설인가?”

- **Engineering Response:** Choose the layer that the evidence implicates,
  then define a testable minimal change.

- **New State:** Cause analysis is visible as a step between observation and
  intervention.

- **Next Friction:** Treating every Failure as a Prompt problem or adding a
  general rule can create a mismatch elsewhere.

- **Audience Layer:** ADVANCED

- **Demo Potential:** VISUAL (Observation → Cause hypothesis).

- **Evidence:** INV-LOOP-001; references/engineering/loop-engineering.md;
  references/engineering/agent-failure-modes.md.

- **Related Curriculum:** ACT 4 — cause analysis, change, evaluation, and
  regression.
### BEAT-045 — Change the layer that matches the cause

- **Act:** ACT 4 — Loop and System Improvement
- **Purpose:** Map a supported cause to the appropriate system layer.

- **Current State:** The developer has a cause hypothesis, but has not chosen
  what to change.

- **Trigger:** Different causes point to different parts of the work system.

- **Action:** Map examples to candidate layers: a changed Project Test command
  may require updating Project Context or a Test Skill; a missing Performance
  baseline may require a Performance Workflow; undiscoverable rules may
  require context routing; old Architecture knowledge may require validating
  or retiring Memory; mixed investigation Context may call for role
  decomposition; tool or Environment problems require checking those layers.

- **Result:** The proposed response fits the diagnosed cause instead of
  defaulting to another Prompt or a new global rule.

- **Interpretation:** Reuse the full maturity Story as a debugging map:
  Prompt, Context, Skill, Memory, Tool, Workflow, and Environment can each be
  candidates, not a mandatory checklist.

- **Audience Question:** “모든 Agent Failure를 Prompt 문제로 처리하고 있지는
  않을까?”

- **Engineering Response:** Select the narrowest layer and state what evidence
  will show whether the change helped.

- **New State:** The developer can connect cause hypotheses to scoped system
  changes.

- **Next Friction:** The chosen Harness artifact must be changed without
  claiming that an agent autonomously rewrites its own system.

- **Audience Layer:** ADVANCED

- **Demo Potential:** VISUAL (cause-to-layer map).

- **Evidence:** INV-LOOP-001; CLM-0020, CLM-0029;
  references/engineering/harness-engineering.md;
  references/engineering/loop-engineering.md.

- **Related Curriculum:** ACT 4 — Improve Context, Memory, Skills, and
  delegation.
### BEAT-046 — Improve the stale Harness artifact

- **Act:** ACT 4 — Loop and System Improvement
- **Purpose:** Apply one scoped Harness change to the supported cause.

- **Current State:** Evidence supports the hypothesis that a Test Skill or
  durable Test workflow still contains the old command.

- **Trigger:** The developer chooses to update the part that supplied the
  obsolete command.

- **Action:** Show the scoped change from ctest to a Bazel test target command. Review
  related Context or Memory only if the evidence suggests they also need
  correction. The change may be made by the developer or through a
  product-supported, reviewed process.

- **Result:** The relevant Harness artifact now reflects the current Project
  command in the controlled scenario.

- **Interpretation:** The important change is that a diagnosed Failure led to
  a justified Harness update. Do not claim that the Agent autonomously
  modified its own Skill or instructions.

- **Audience Question:** “원인이 stale Test Skill이라면 어디를 어떻게 바꿔야 할까?”

- **Engineering Response:** Rerun the same or a representative task with the
  updated artifact.

- **New State:** The system change is explicit and can be evaluated.

- **Next Friction:** A corrected artifact does not yet prove that later work
  uses it reliably.

- **Audience Layer:** PRACTICAL

- **Demo Potential:** ANCHOR candidate 4 (implementation and result evidence
  conditional).

- **Evidence:** INV-LOOP-001; references/engineering/loop-engineering.md;
  current Product capability remains conditional under OQ-003 and OQ-005.

- **Related Curriculum:** ACT 4 — cause analysis and change.
### BEAT-047 — Rerun the task after the change

- **Act:** ACT 4 — Loop and System Improvement
- **Purpose:** Check the original failure with a rerun under recorded conditions.

- **Current State:** The stale Test workflow has been updated in the selected
  layer.

- **Trigger:** The developer needs to check whether the agent now uses the
  current command.

- **Action:** Rerun the same task or a representative task. Observe whether
  the updated workflow selects Bazel, the relevant tests execute, and the
  result is reported with its environment and evidence.

- **Result:** One rerun may show that the specific failure no longer occurs
  under the tested conditions.

- **Interpretation:** A successful rerun is evidence about this case, not
  proof that the entire Harness is improved or regression-free.

- **Audience Question:** “같은 Task가 이제 통과하면 Harness가 개선됐다고
  말해도 될까?”

- **Engineering Response:** Define what else should be evaluated and which
  related tasks could be affected.

- **New State:** The learner understands rerun as necessary but bounded
  evidence.

- **Next Friction:** Fixing one case could still harm a different, valid task.

- **Audience Layer:** PRACTICAL

- **Demo Potential:** ANCHOR candidate 4 (rerun evidence conditional).

- **Evidence:** CLM-0020, CLM-0029; INV-LOOP-001;
  references/engineering/verification.md.

- **Related Curriculum:** ACT 4 — cause analysis, change, evaluation, and
  regression.
### BEAT-048 — Evaluate the change on representative work

- **Act:** ACT 4 — Loop and System Improvement
- **Purpose:** Evaluate a change across selected representative tasks.

- **Current State:** The same or similar task may now pass after the Harness
  update.

- **Trigger:** The developer needs to judge whether the result generalizes to
  relevant use without building an oversized benchmark system.

- **Action:** Check a small set of representative cases, such as a Bug Fix,
  Performance task, and Refactoring task, with deterministic tests, known
  scenarios, and human review where appropriate. State the criteria and scope
  before interpreting the results.

- **Result:** Evaluation can show whether the new Test workflow behaves as
  expected across the selected tasks.

- **Interpretation:** Evaluation need not begin as a large Benchmark System;
  small, repeatable checks can provide bounded evidence.

- **Audience Question:** “어떤 대표 Task와 기준으로 이 변경을 평가할까?”

- **Engineering Response:** Check whether the improvement created a regression
  in a valid task that needs different behavior.

- **New State:** The learner sees Harness changes themselves as subjects of
  Verification and Evaluation.

- **Next Friction:** A rule that blocks the original Failure can also block
  legitimate work.

- **Audience Layer:** ADVANCED

- **Demo Potential:** SUPPORTING (representative task evaluation).

- **Evidence:** CLM-0020, CLM-0029; INV-LOOP-001;
  references/engineering/verification.md.

- **Related Curriculum:** ACT 4 — evaluation and regression; OQ-009.
### BEAT-049 — Check for regression in another valid task

- **Act:** ACT 4 — Loop and System Improvement
- **Purpose:** Check whether an improvement regresses another valid task.

- **Current State:** The Test workflow change works on the representative
  cases selected so far.

- **Trigger:** A proposed broad rule could affect work beyond the Failure it
  was meant to prevent.

- **Action:** Use a clearly labeled case: after a File A change causes a
  problem, a broad “never modify File A” rule is added; a later valid task
  needs to edit File A and is now blocked. Trace the cycle as Failure →
  Cause → Hypothesis → Change → Evaluation → Regression Check → Keep or
  Revert.

- **Result:** A change can resolve one Failure while creating a different
  problem; the learner sees why the system change itself needs review.

- **Interpretation:** “Failure → add Rule” alone is not a complete
  Improvement Loop.

- **Audience Question:** “한 Failure를 막은 Rule이 다른 Task를 막지는 않는가?”

- **Engineering Response:** Keep, refine, or revert based on declared criteria
  and regression evidence.

- **New State:** Regression checking is part of Harness improvement, not an
  optional afterthought.

- **Next Friction:** Repeatedly adding rules for every Failure can recreate
  the Context overload solved earlier.

- **Audience Layer:** ADVANCED

- **Demo Potential:** SUPPORTING (illustrative regression case unless
  reproduced).

- **Evidence:** INV-LOOP-001, INV-LEARNING-003, INV-DEMO-003;
  references/engineering/verification.md;
  references/engineering/agent-failure-modes.md.

- **Related Curriculum:** ACT 4 — evaluation and regression.
### BEAT-050 — Rule accumulation can recreate Context bloat

- **Act:** ACT 4 — Loop and System Improvement
- **Purpose:** Show how adding every failure as a rule recreates context bloat.

- **Current State:** The developer has seen that rules can address one
  Failure and can also create regression in another task.

- **Trigger:** The developer responds to every new issue by appending another
  instruction to AGENTS.md or the Harness.

- **Action:** Revisit the earlier Context growth story. Use an explicitly
  illustrative sequence such as 100 → 300 → 700 → 1,500 lines only if it
  helps show accumulation; these numbers are not evidence, a failure
  threshold, or a target.

- **Result:** An Improvement Loop that only adds rules can recreate irrelevant,
  conflicting, or difficult-to-maintain Context.

- **Interpretation:** Not every Failure needs another Instruction. The
  Improvement Loop itself needs engineering.

- **Audience Question:** “모든 Failure에 새 Rule을 추가하면 어떤 문제가 다시
  생길까?”

- **Engineering Response:** Consolidate, route, update, or retire information
  at the layer that addresses the cause; then evaluate the result.

- **New State:** The learner connects Loop Engineering back to Context
  relevance and sees overfitting and bloat as system risks.

- **Next Friction:** The learner needs a complete view of feedback-driven
  improvement after seeing its component decisions and risks.

- **Audience Layer:** PRACTICAL

- **Demo Potential:** VISUAL (Context growth recalled as an illustrative
  comparison).

- **Evidence:** INV-MATURITY-003, INV-LEARNING-003, INV-LOOP-001;
  references/engineering/harness-engineering.md;
  references/engineering/loop-engineering.md.

- **Related Curriculum:** ACT 4 — Improve Context, Memory, Skills, and
  delegation.
### BEAT-051 — Reveal the Loop after its parts have appeared

- **Act:** ACT 4 — Loop and System Improvement
- **Purpose:** Connect the visible feedback steps into one system architecture.

- **Current State:** The learner has seen a repeated Failure, observation,
  cause hypothesis, scoped change, rerun, evaluation, and regression risk.

- **Trigger:** The components now need to be connected as one feedback
  system.

- **Action:** Reveal the course-level Loop:

      Agent Task
        ↓
      Execute
        ↓
      Verify
        ↓
      Failure / Friction
        ↓
      Observe
        ↓
      Cause Analysis
        ↓
      Product Code or Harness Change
        ↓
      Evaluate
        ↓
      Regression Check
        ↓
      Next Task

  The task-level Product Loop (Bug → Code Change → Test → Fix → Test) resolves
  current code; the Harness Improvement Loop uses an agent outcome and
  recurring friction to change the work system for later tasks. “Learn” means
  a justified durable change to Context, Skills, Memory, Tool configuration,
  Workflow, or Evaluation; it does not mean model weights automatically
  change.

- **Result:** The learner sees how task outcomes can guide a future Product or
  Harness decision and feed the next execution.

- **Interpretation:** Loop Engineering emphasizes the Harness Improvement
  Loop while keeping it distinct from the Product Loop. It is a verifiable
  feedback system, not automatic repetition or a schedule that runs itself.

- **Audience Question:** “관찰한 경험을 어떻게 다음 실행의 더 나은 System으로
  연결할까?”

- **Engineering Response:** Compare the Product Loop's change to current
  code with the Harness Improvement Loop's effect on later agent work.

- **New State:** The complete Loop architecture is visible only after its
  parts and trade-offs have been explained.

- **Next Friction:** The Product Loop and Harness Improvement Loop share
  feedback steps and need a clear comparison of their targets and connection.

- **Audience Layer:** ALL

- **Demo Potential:** VISUAL (final Loop architecture).

- **Evidence:** CLM-0020, CLM-0021, CLM-0029; INV-LOOP-001;
  references/engineering/loop-engineering.md;
  references/engineering/verification.md.

- **Related Curriculum:** ACT 4 — Loop model, Product Loop, and automation
  levels; ACT 5 handoff.
### BEAT-052 — Separate the Product Loop from the Harness Improvement Loop

- **Act:** ACT 4 — Loop and System Improvement
- **Purpose:** Distinguish task-level Product correction from cross-task Harness improvement.

- **Current State:** The learner has seen the full feedback architecture and
  its possible Product or Harness improvement outcomes.

- **Trigger:** The two outcomes could sound like one loop because both use
  failures, changes, and verification.

- **Action:** Compare the task-level Product Loop — bug, code change, test,
  failure, another change, and passing test — with the cross-task Harness
  Improvement Loop — agent task, failure or friction, observation, cause
  analysis, Harness change, evaluation, regression check, and next task.
  Explain that Product test failures can reveal a workflow verification gap,
  while a Harness change can make a later Product bug fix more reliable.

- **Result:** The learner can name each loop's unit and improvement target:
  current Product Code versus the system shaping agent work across tasks.

- **Interpretation:** The course gives special attention to the Harness
  Improvement Loop without treating the loops as independent.

- **Audience Question:** “현재 코드의 실패를 고치는 것과 다음 작업의
  실패 가능성을 줄이는 것은 어떻게 연결될까?”

- **Engineering Response:** Show that the feedback path can remain manual,
  receive agent assistance, or automate selected changes and checks.

- **New State:** The learner can distinguish a task result from a durable
  change to the work system.

- **Next Friction:** The learner may assume that more automation means a more
  mature or better Loop.

- **Audience Layer:** ALL

- **Demo Potential:** VISUAL (side-by-side loop comparison).

- **Evidence:** `INV-LOOP-001`; `CLM-0020`, `CLM-0021`;
  `references/engineering/loop-engineering.md`.

- **Related Curriculum:** ACT 4 — Loop model, Product Loop, and automation
  levels.
### BEAT-053 — Choose a feedback automation level that fits the risk

- **Act:** ACT 4 — Loop and System Improvement
- **Purpose:** Show manual, assisted, and automated feedback as risk-shaped choices.

- **Current State:** Product and Harness improvement are distinct but
  connected feedback paths.

- **Trigger:** The learner may equate improvement with a fully automated
  self-modifying system.

- **Action:** Compare three possible operating levels. Manual: a developer
  observes, diagnoses, changes the Harness, and revalidates. Assisted: an
  agent analyzes evidence and proposes a change for developer review and
  approval before application and revalidation. Automated: selected Harness
  changes, reruns, or evaluations are automated from evaluation results,
  with controls appropriate to the risk.

- **Result:** Automation can be discussed as a design choice with review and
  risk boundaries, rather than as the required destination.

- **Interpretation:** The defining question is whether useful feedback
  changes a justified next execution; the automation level depends on task
  risk and context.

- **Audience Question:** “어떤 개선은 직접 해야 하고, 어떤 개선은
  제안받거나 자동화해도 안전할까?”

- **Engineering Response:** Revisit concrete Harness parts whose behavior
  can drift, starting with retained Memory.

- **New State:** The learner sees a range of feedback arrangements and keeps
  human review where the risk calls for it.

- **Next Friction:** A retained fact can remain available after it stops
  matching the Project.

- **Audience Layer:** ADVANCED

- **Demo Potential:** VISUAL (manual / assisted / automated comparison).

- **Evidence:** `INV-LOOP-001`; `CLM-0020`, `CLM-0021`;
  `references/engineering/loop-engineering.md`;
  `references/engineering/verification.md`.

- **Related Curriculum:** ACT 4 — Loop model, Product Loop, and automation
  levels.
### BEAT-054 — Retire Memory that no longer matches the Project

- **Act:** ACT 4 — Loop and System Improvement
- **Purpose:** Make stale Memory a concrete Harness improvement target.

- **Current State:** Earlier Story Beats showed Memory as a separate,
  reusable source of project knowledge with a lifecycle.

- **Trigger:** A formerly valid Memory says Module X is legacy and must not be
  changed, while the current canonical Project source says its migration is
  complete and the module is editable.

- **Action:** Observe the conflict between Memory and the current source,
  identify stale Memory as a cause hypothesis, validate the source of truth,
  update or retire the Memory, and check its effect on a later task.

- **Result:** The next task can use current project guidance instead of
  repeating an obsolete constraint.

- **Interpretation:** A system that retains knowledge also needs a mechanism
  to forget, refresh, or scope it. Memory remains distinct from the Project's
  authoritative source.

- **Audience Question:** “기억이 현재 Project 상태와 충돌하면 무엇을
  기준으로 확인하고 어떻게 갱신해야 할까?”

- **Engineering Response:** Apply the same maintenance question to a
  reusable Skill's procedure and checks.

- **New State:** The learner treats Memory maintenance as a valid Harness
  improvement target.

- **Next Friction:** A reusable Performance Skill can preserve an incomplete
  workflow even when its steps run without command errors.

- **Audience Layer:** PRACTICAL

- **Demo Potential:** SUPPORTING (illustrative conflict unless reproduced).

- **Evidence:** `CLM-0008`; `INV-LOOP-001`;
  `references/TERMINOLOGY.md` (Memory);
  `references/engineering/loop-engineering.md`.

- **Related Curriculum:** ACT 4 — Improve Context, Memory, Skills, and
  delegation.
### BEAT-055 — Repair an incomplete Performance Skill

- **Act:** ACT 4 — Loop and System Improvement
- **Purpose:** Improve workflow quality by completing the Performance Skill's evidence steps.

- **Current State:** A Performance Skill offers a reusable workflow for
  repeated work.

- **Trigger:** The Skill says Build → Modify → Benchmark but omits a baseline,
  so the result cannot be compared with the pre-change state.

- **Action:** Classify the missing comparison as a workflow-quality failure,
  not a command error. Revise the workflow to include Baseline → Investigate
  → Plan → Implement → Correctness Test → Benchmark → Compare → Regression
  Check, then use it for a later Performance task.

- **Result:** The updated procedure makes a before-and-after comparison and
  regression check part of the work it asks for.

- **Interpretation:** A Skill is a reusable workflow that may require
  maintenance; writing it once does not establish that it remains complete.

- **Audience Question:** “Workflow가 실행되기는 했는데, 개선 여부를
  판단할 Baseline이 없다면 무엇이 빠진 것일까?”

- **Engineering Response:** Check whether delegation structure is also sized
  to the task that uses it.

- **New State:** The learner recognizes that workflow quality itself can be
  evaluated and revised.

- **Next Friction:** A Subagent structure can add coordination work when it
  is applied to every task regardless of complexity.

- **Audience Layer:** PRACTICAL

- **Demo Potential:** SUPPORTING (controlled Skill comparison).

- **Evidence:** `CLM-0006`; `INV-LOOP-001`;
  `references/engineering/loop-engineering.md`;
  `references/engineering/verification.md`.

- **Related Curriculum:** ACT 4 — Improve Context, Memory, Skills, and
  delegation.
### BEAT-056 — Reduce Subagents that exceed task needs

- **Act:** ACT 4 — Loop and System Improvement
- **Purpose:** Right-size Subagent use to task complexity.

- **Current State:** Subagents have supported role-separated investigation
  in a complex task, with coordination and integration costs.

- **Trigger:** The initial Harness starts Main, Architecture, Performance,
  Test, Documentation, and Review agents even for a small change.

- **Action:** Observe duplicated investigation, handoff work, and potentially
  added cost or latency. Compare the structure with task complexity and
  route small tasks to the Main Agent, medium tasks to the Main Agent plus a
  needed specialist, and complex tasks to multiple specialists where their
  work can be integrated.

- **Result:** Delegation can be reduced or expanded based on the task rather
  than applied as a fixed topology.

- **Interpretation:** The relevant improvement may be removing unnecessary
  Harness components. Report measured cost or latency only when recorded.

- **Audience Question:** “작은 Task에도 모든 역할을 실행하는 구조가
  실제로 필요한가?”

- **Engineering Response:** State the broader design principle behind
  choosing or removing Harness parts.

- **New State:** The learner sees task-sized delegation as maintenance of the
  work system.

- **Next Friction:** A component count is not a useful measure of system
  maturity.

- **Audience Layer:** ADVANCED

- **Demo Potential:** SUPPORTING (illustrative task-size comparison).

- **Evidence:** `CLM-0007`; `CLM-0022`; `INV-LOOP-001`;
  `references/engineering/loop-engineering.md`.

- **Related Curriculum:** ACT 4 — Improve Context, Memory, Skills, and
  delegation.
### BEAT-057 — Fit a Minimum Effective Harness to the recurring problem

- **Act:** ACT 4 — Loop and System Improvement
- **Purpose:** Derive a minimum effective system from recurring friction, not feature count.

- **Current State:** Memory, Skills, and delegation can each be improved by
  adding, changing, or removing structure.

- **Trigger:** The learner asks whether the best Harness is the one with the
  most mechanisms.

- **Action:** Define Minimum Effective Harness as this project's teaching
  heuristic: the smallest system that addresses recurring failures or
  friction. Compare illustrative fits such as Prompt + `AGENTS.md` + tests
  for a small project; Context routing + reusable workflow + verification
  for recurring project work; and Subagents, Memory, Evaluation, or feedback
  mechanisms only when a complex workflow needs them.

- **Result:** Beginners can see that they need not build every mechanism at
  once; experienced learners can ask whether their existing Harness is
  overbuilt.

- **Interpretation:** Maturity is the ability to design a system that fits
  the problem, not the number of components installed.

- **Audience Question:** “우리에게 반복되는 어떤 문제를 해결하는 데
  지금 필요한 최소 구조는 무엇일까?”

- **Engineering Response:** If useful evidence exists, connect the model to
  the actual evolution of this training repository as a supporting example.

- **New State:** The learner can reason from recurring friction to an
  appropriately sized Harness.

- **Next Friction:** A meta example is credible only when its repository
  history and artifacts support the claimed sequence.

- **Audience Layer:** ALL

- **Demo Potential:** VISUAL; optional supporting repository example.

- **Evidence:** `CLM-0022`; `INV-LOOP-001`;
  `references/engineering/harness-engineering.md`.

- **Related Curriculum:** ACT 4 — Improve Context, Memory, Skills, and
  delegation; Minimum Effective Harness heuristic.
### BEAT-058 — Verify whether the training repository has a usable story

- **Act:** ACT 4 — Loop and System Improvement
- **Purpose:** Gate the training repository example on verifiable real history.

- **Current State:** The core evolving software Project has illustrated how
  a Harness can grow in response to friction.

- **Trigger:** The actual `ai-dev-training` repository may also have a
  meaningful, verifiable history of its own design changing over time.

- **Action:** Before teaching it, inspect the actual repository history and
  artifacts. Use only milestones that demonstrably existed in sequence, such
  as initial project guidance, later governance, research, or review
  structures, if those changes are supported by the records.

- **Result:** The instructor can decide whether a short meta example is
  evidence-backed and relevant enough to include.

- **Interpretation:** The repository is a candidate teaching example, not
  automatic proof of the Loop model. Do not infer past states from current
  documents or invent failure, motivation, or chronology.

- **Audience Question:** “이 교육자료를 만든 Repository에도 확인 가능한
  변화의 기록이 있는가?”

- **Engineering Response:** If the evidence is sufficient, map only those
  recorded changes to the Story; otherwise omit the meta example.

- **New State:** The meta example has an explicit evidence gate before it can
  be shown.

- **Next Friction:** Even real repository changes need a bounded explanation
  of what they demonstrate and what they do not.

- **Audience Layer:** PRACTICAL

- **Demo Potential:** SUPPORTING (optional; requires repository-history review).

- **Evidence:** `CLM-0027`; `INV-DEMO-003`;
  `references/STORY_DEPENDENCIES.md` (Demo honesty and project history).

- **Related Curriculum:** ACT 4 — optional supporting example within the
  system-improvement story; no additional time allocation.
### BEAT-059 — Keep the meta example subordinate to the core Story

- **Act:** ACT 4 — Loop and System Improvement
- **Purpose:** Keep any verified meta example supporting rather than replacing core Story.

- **Current State:** Selected repository changes, if any, are backed by
  actual commits and artifacts.

- **Trigger:** A real meta example could still distract from or replace the
  continuous software-project Demo Story.

- **Action:** Map verified milestones only: initial guidance; documented
  planning or context-loss concerns if recorded; governance or research
  structures when they actually appeared; and later mechanisms only if their
  introduction and use are verifiable. Keep the example brief and supporting.

- **Result:** Learners can see that system structure may evolve in response
  to documented needs while the core Demo remains the primary narrative.

- **Interpretation:** The example illustrates this repository's history; it
  does not prove that the same sequence is universal or that every mechanism
  improved outcomes.

- **Audience Question:** “실제 기록은 어떤 변화까지 보여 주며, 어떤
  결론까지는 뒷받침하지 않는가?”

- **Engineering Response:** Close the case and recap the full course
  progression as one connected evolution.

- **New State:** Any meta example remains evidence-bounded and subordinate.

- **Next Friction:** Learners need to see the whole journey as one evolving
  system rather than a collection of features.

- **Audience Layer:** PRACTICAL

- **Demo Potential:** SUPPORTING (optional; omit if evidence or time is insufficient).

- **Evidence:** `CLM-0027`; `INV-DEMO-003`;
  `references/STORY_DEPENDENCIES.md`.

- **Related Curriculum:** ACT 4 — optional supporting example; ACT 5
  transition to the full journey recap.
## ACT 5 — AI-Native Development and Learner Reflection

### BEAT-060 — Recap the complete evolution as one Story

- **Act:** ACT 5 — AI-Native Development and Learner Reflection
- **Purpose:** Integrate all stages as one problem-driven evolution.

- **Current State:** The learner has followed the same developer and Project
  from a local chatbot question through task specification, Context,
  Harness, and feedback-driven improvement.

- **Trigger:** The individual mechanisms could be remembered as disconnected
  feature introductions.

- **Action:** Revisit the sequence: ChatGPT answer with manually gathered
  Context; Codex repository investigation with task-intent gaps; structured
  Prompts with repeated project facts; `AGENTS.md` and Context routing with
  relevance concerns; Skills for recurring workflows; Subagents for role
  complexity; Memory for repeated discovery; a designed Harness combining
  relevant Context, Workflow, Tools, and Verification; growing system
  complexity and maintenance; stale Harness after Project change; and Loop
  improvement for future work.

- **Result:** The learner sees each mechanism as a response to an earlier
  friction in one evolving development system.

- **Interpretation:** The central Story is a widening engineering response,
  not a list of independent product features.

- **Audience Question:** “이 흐름에서 다음 단계가 필요해진 이유는
  무엇이었나?”

- **Engineering Response:** Compare the developer's work at the beginning
  and end, then name the course's AI-Native teaching model.

- **New State:** The learner can retell the sequence through its motivating
  problems and system changes.

- **Next Friction:** A complete recap still needs to clarify how the
  developer's role changed without implying that responsibility disappeared.

- **Audience Layer:** ALL

- **Demo Potential:** VISUAL (full evolution map).

- **Evidence:** `INV-NARRATIVE-001`; `INV-NARRATIVE-002`;
  `plan/CURRICULUM.md` (Overall Narrative).

- **Related Curriculum:** ACT 5 — complete journey and seven takeaways.
### BEAT-061 — Name the AI-Native Development turning point

- **Act:** ACT 5 — AI-Native Development and Learner Reflection
- **Purpose:** Name AI-Native Development as the course's operational role shift.

- **Current State:** The full problem-driven progression is visible as one
  evolving Story.

- **Trigger:** Learners need a concise mental model for the change from
  using AI for answers to designing agent-assisted development work.

- **Action:** Compare the early pattern — developer gathers Context, explores
  code, finds a solution, modifies it, and tests while AI answers — with the
  expanded pattern. The developer defines goals, tasks, constraints, system
  design, verification standards, trade-offs, and review. The agent and its
  Harness can help explore Context, investigate, execute, reuse workflows,
  use tools, verify, and provide feedback. Present these as role tendencies,
  not a rigid division of work.

- **Result:** Learners have a name for the course's expanded way of working:
  AI-Native Development.

- **Interpretation:** Use the STEP 03 teaching model: developers design
  agent work environments and feedback systems while retaining goal,
  judgment, verification, and responsibility. This is the course's
  operational model, not a universal maturity standard or a claim that
  coding skills are obsolete.

- **Audience Question:** “처음과 지금, Developer가 하는 일은 어떻게
  달라졌을까?”

- **Engineering Response:** Make the developer-owned decisions and
  accountability explicit before offering next steps.

- **New State:** The learner can describe the shift from using AI to
  designing a development system in which an agent can work.

- **Next Friction:** Delegating more work can be mistaken for handing off
  engineering judgment and responsibility.

- **Audience Layer:** ALL

- **Demo Potential:** VISUAL (opening/ending work-pattern comparison).

- **Evidence:** `CLM-0023`, `CLM-0024`;
  `references/engineering/ai-native-development.md`;
  `references/TERMINOLOGY.md` (AI-Native Development); `OQ-011`.

- **Related Curriculum:** ACT 5 — beginning/ending comparison and
  AI-Native Development teaching model.
### BEAT-062 — Developer agency changes; responsibility remains

- **Act:** ACT 5 — AI-Native Development and Learner Reflection
- **Purpose:** Clarify expanded delegation alongside retained engineering responsibility.

- **Current State:** Learners have seen work move from a question to
  repository investigation, task specification, reusable Context, designed
  methods, and system feedback.

- **Trigger:** The journey could be mistaken for “automate everything” or for
  developers no longer needing expertise.

- **Action:** Compare the initial and mature work patterns. Show that an
  Agent may, within the selected and supported environment, handle search and
  repository exploration, investigation, code
  generation, repetitive modification, Build/Test execution, initial review,
  and documentation. Show that the developer retains goal and problem
  definition, requirement and architecture trade-off judgment, risk judgment,
  verification criteria and result interpretation, final review, and
  responsibility. Present these as role tendencies, not an absolute
  division of work.

- **Result:** The learner sees expanded delegation alongside retained
  engineering judgment.

- **Interpretation:** AI-Native Development is this course's operational
  synthesis, not universal industry consensus or a claim that coding skill is
  obsolete.

- **Audience Question:** “AI가 더 많은 일을 맡아도 개발자가 계속 책임지는
  것은 무엇인가?”

- **Engineering Response:** Revisit Verification as the evidence that
  separates an Agent's completion statement from completed engineering work.

- **New State:** Learners can distinguish expanded delegation from the
  developer's continuing responsibility.

- **Next Friction:** The learner may understand who owns judgment but still
  treat an Agent's “done” statement as sufficient completion evidence.

- **Audience Layer:** ALL

- **Demo Potential:** VISUAL (developer and Agent role tendencies).

- **Evidence:** CLM-0001, CLM-0002, CLM-0023;
  references/engineering/ai-native-development.md; INV-RESPONSIBILITY-001.

- **Related Curriculum:** ACT 5 — Beginning/ending comparison and developer
  responsibility.
### BEAT-063 — Verification evolves from Prompt request to system evidence

- **Act:** ACT 5 — AI-Native Development and Learner Reflection
- **Purpose:** Show Verification evolving from a Prompt request to system evidence.

- **Current State:** The developer owns verification criteria and result
  interpretation, while work may be delegated.

- **Trigger:** A completion statement such as “수정했습니다” can be mistaken
  for evidence that the task is complete.

- **Action:** Trace Verification's evolution: a Prompt asks for tests; Context
  makes the Project's test method available; the Harness places checks in a
  reusable workflow; and the Loop evaluates and regression-checks a Harness
  change. Revisit `Generated → Build → Test`, then a Benchmark when needed,
  `Review → Done`. For a Harness change, show a second feedback path:
  Change → Evaluate → Regression Check → Keep / Revert.

- **Result:** Learners distinguish an Agent's completion claim from evidence
  appropriate to the task and distinguish Product verification from
  evaluating a change to the work system.

- **Interpretation:** Verification grew from an instruction into a workflow
  and a feedback condition. The developer still judges whether the evidence
  is enough for the task.

- **Audience Question:** “Agent가 ‘수정했습니다’라고 말한 것과 실제로
  완료되었다는 근거는 어떻게 다른가?”

- **Engineering Response:** Connect the different Verification mechanisms
  back to the task workflow used throughout the course.

- **New State:** Learners can name Build, Test, optional Benchmark, Review,
  and Harness-change evaluation as evidence rather than completion claims.

- **Next Friction:** A sequence introduced in an early Prompt may look like
  a rigid template rather than a reusable default.

- **Audience Layer:** ALL

- **Demo Potential:** VISUAL (Verification progression and evidence paths).

- **Evidence:** `INV-VERIFY-001`; `INV-RESPONSIBILITY-001`;
  `plan/MASTER_PLAN.md` §§6.2–6.4.

- **Related Curriculum:** ACT 5 — beginning/ending comparison and developer
  responsibility.
### BEAT-064 — The task workflow becomes a reliable default

- **Act:** ACT 5 — AI-Native Development and Learner Reflection
- **Purpose:** Revisit task execution as a reliable default across maturity stages.

- **Current State:** Learners have seen Verification progress from a request
  to a reusable process and system feedback.

- **Trigger:** `Investigate → Plan → Implement → Verify → Review` may be
  remembered only as a Prompt template.

- **Action:** Show the workflow across the same evolving Story: repository
  exploration, and a Subagent only when justified and available, contribute
  to Investigate; the Agent
  synthesizes a Plan with a human checkpoint where needed; Agent and tools
  support Implementation; Build, Test, and Benchmark when relevant provide
  Verification evidence; and Agent review can be combined with human
  judgment. In the Loop stage, recurring workflow failures can themselves be
  observed and improved.

- **Result:** Learners see one practical task workflow persist across
  Prompt, Context, Harness, and Loop.

- **Interpretation:** It is a reliable default workflow, not a competing
  maturity model and not a mechanical requirement for every small task.

- **Audience Question:** “이 Workflow가 Prompt에 적힌 순서에서 실제
  작업 System의 일부로 어떻게 발전했을까?”

- **Engineering Response:** Compare the different engineering layers that
  support this task without treating them as replacements for one another.

- **New State:** Learners can separate how one task runs from how the
  development system evolves.

- **Next Friction:** The same missed Test can have different causes at
  different Engineering layers.

- **Audience Layer:** ALL

- **Demo Potential:** VISUAL (task workflow mapped across the Story).

- **Evidence:** `INV-MATURITY-011`; `INV-VERIFY-001`;
  `plan/MASTER_PLAN.md` §§6.1, 14.

- **Related Curriculum:** ACT 5 — beginning/ending comparison; task workflow
  payoff.
### BEAT-065 — Compare the four Engineering layers

- **Act:** ACT 5 — AI-Native Development and Learner Reflection
- **Purpose:** Provide a compact distinction among Prompt, Context, Harness, and Loop.

- **Current State:** The learner has connected one task workflow to system
  improvements over time.

- **Trigger:** Prompt, Context, Harness, and Loop may still sound like
  interchangeable ways to fix a bad result.

- **Action:** Compare their questions and primary objects: Prompt asks how to
  state this task clearly and concerns task instructions; Context asks what
  information the Agent needs and when and concerns information; Harness asks
  how to support reliable work and concerns environment and process; Loop
  asks how execution experience informs future system improvement and
  concerns feedback and improvement.

- **Result:** Learners can place the four concepts by the problem each one
  addresses.

- **Interpretation:** The layers expand the scope of engineering problems;
  Context, Harness, and Loop do not make a good task Prompt obsolete.

- **Audience Question:** “이 문제를 더 긴 Prompt로 고칠지, Context나
  Workflow 또는 Feedback를 살펴볼지 어떻게 구분할까?”

- **Engineering Response:** Apply all four lenses to one missed-Test case.

- **New State:** Learners have a compact map for locating a possible cause
  without assuming it in advance.

- **Next Friction:** A general layer map becomes useful only when applied to
  a recognizable failure.

- **Audience Layer:** ALL

- **Demo Potential:** VISUAL (four-layer comparison).

- **Evidence:** `INV-MATURITY-001`; `INV-LEARNING-001`;
  `plan/CURRICULUM.md` (Overall Narrative).

- **Related Curriculum:** ACT 5 — complete journey and seven takeaways.
### BEAT-066 — Diagnose one missed Test through four layers

- **Act:** ACT 5 — AI-Native Development and Learner Reflection
- **Purpose:** Apply four layers to a missed-Test case without assuming its cause.

- **Current State:** The learner can distinguish task instructions,
  information, work environment/process, and feedback.

- **Trigger:** An Agent did not run the Test properly.

- **Action:** Ask four separate questions: Prompt — was the Test expectation
  clear? Context — did the Agent have the correct Test command and scope?
  Harness — was Verification part of the Workflow? Loop — if the Failure
  recurs, what evidence identifies a system component to improve? Treat each
  as a diagnostic lens, not a conclusion about the actual cause.

- **Result:** Learners can move beyond automatically making the Prompt
  longer and investigate the layer supported by evidence.

- **Interpretation:** The same surface Failure can have different causes;
  diagnosis precedes choosing an improvement.

- **Audience Question:** “Agent가 Test를 제대로 실행하지 않았다면 먼저
  어떤 Layer를 확인해야 할까?”

- **Engineering Response:** Turn the four lenses into concise questions
  learners may use in their own work.

- **New State:** The learner has a practical way to separate possible
  instruction, information, workflow, and recurring-system issues.

- **Next Friction:** A useful diagnostic list could be mistaken for a finished
  Cheat Sheet before its wording and design are ready.

- **Audience Layer:** ALL

- **Demo Potential:** VISUAL (one failure across four layers).

- **Evidence:** `INV-LEARNING-004`; `INV-VERIFY-001`;
  `plan/MASTER_PLAN.md` §§6, 24.

- **Related Curriculum:** ACT 5 — beginning/ending comparison; practical
  application.
### BEAT-067 — Gather diagnostic questions for later use

- **Act:** ACT 5 — AI-Native Development and Learner Reflection
- **Purpose:** Collect reusable diagnostic questions without finalizing a Cheat Sheet.

- **Current State:** One missed-Test example shows why a failure should not
  automatically be treated as a Prompt problem.

- **Trigger:** Learners need questions that help them choose what to inspect
  in a real task.

- **Action:** Collect candidate questions: Is the task clear (Prompt)? Is
  needed information available (Context)? Can the Agent find it at the right
  time (Context routing)? Is a repeated method defined (Skill / Workflow)?
  Does one Agent carry too many roles (Subagent / decomposition)? Is the
  same Project knowledge rediscovered (Memory / durable knowledge)? Is the
  result verified (Verification)? Is the same Failure recurring (Loop /
  Harness improvement)?

- **Result:** Learners can select a useful next diagnostic question instead
  of reflexively extending a Prompt or adding another mechanism.

- **Interpretation:** This is a candidate for a later Cheat Sheet; do not
  finalize its layout or design during this Story step.

- **Audience Question:** “실패를 만났을 때 다음으로 확인할 질문은
  무엇인가?”

- **Engineering Response:** Show how beginners and experienced users can
  take different next steps within the same Story.

- **New State:** Learners can use the diagnostic questions as a bridge from
  the shared teaching Story to a relevant practice.

- **Next Friction:** An advanced system view can overwhelm beginners, while
  experienced users may need a reliability challenge.

- **Audience Layer:** PRACTICAL

- **Demo Potential:** NONE (possible later reference artifact).

- **Evidence:** `INV-DIFFICULTY-001`; `INV-LEARNING-002`;
  `plan/CURRICULUM.md` (ACT 5).

- **Related Curriculum:** ACT 5 — audience next steps; future Cheat Sheet
  candidate, not a current deliverable.
### BEAT-068 — Give beginners permission to advance one step at a time

- **Act:** ACT 5 — AI-Native Development and Learner Reflection
- **Purpose:** Give beginners a manageable next step instead of an adoption mandate.

- **Current State:** Learners have seen an expanded Harness and a set of
  possible diagnostic questions.

- **Trigger:** A beginner may conclude that starting tomorrow requires
  building every part of the illustrated system.

- **Action:** State that no one needs to build all of it at once. Offer a
  possible sequence from current chatbot use: try repository exploration
  with Codex where available; ask the Agent to investigate before changing
  code; ask for relevant Test evidence; consider concise project guidance
  only when Project work repeats.

- **Result:** A beginner can see a small, useful next move without needing
  the advanced mechanisms first.

- **Interpretation:** The shared Story does not prescribe the same adoption
  level to everyone; take one evidence-informed step from current practice.

- **Audience Question:** “내일부터 이 모든 것을 구축하지 않고 무엇부터
  시도할 수 있을까?”

- **Engineering Response:** Offer experienced users a reliability-oriented
  question on the same system.

- **New State:** Beginners can leave with a credible first move rather than
  an adoption checklist.

- **Next Friction:** Experienced users may already use Agents and need to
  examine whether their system remains reliable.

- **Audience Layer:** BASIC

- **Demo Potential:** NONE.

- **Evidence:** `INV-AUDIENCE-001`; `INV-DIFFICULTY-001`;
  `plan/MASTER_PLAN.md` §§2.2–2.3, 35.

- **Related Curriculum:** ACT 5 — tailored audience next steps.
### BEAT-069 — Challenge advanced users to examine system reliability

- **Act:** ACT 5 — AI-Native Development and Learner Reflection
- **Purpose:** Give advanced users a reliability challenge beyond adding more features.

- **Current State:** Experienced users can see that the beginner path does
  not require adopting every Harness component.

- **Trigger:** An experienced user may assume the next improvement always
  comes from a stronger model or more Agent features.

- **Action:** Ask whether the current bottleneck is the Model or the Harness.
  Inspect whether Context is stale, Skills fit real tasks, Subagents are
  proportionate, Memory is reliable, Verification is sufficient, Harness
  changes are evaluated, failures recur, or the Harness has become technical
  debt.

- **Result:** Advanced learners receive a system-reliability challenge that
  does not require adding more components.

- **Interpretation:** The next useful work may be maintenance, removal,
  verification, or evaluation. Agent System Reliability is the advanced
  synthesis lens, not a new top-level maturity stage.

- **Audience Question:** “이미 Agent를 잘 쓰고 있다면 다음 병목은 Model일까,
  Harness일까?”

- **Engineering Response:** Bring both learner perspectives back to the
  same seven course takeaways.

- **New State:** Advanced users can examine the reliability of their system
  while staying in the shared Story.

- **Next Friction:** Distinct next steps need a common summary that preserves
  the course's shared baseline.

- **Audience Layer:** ADVANCED

- **Demo Potential:** VISUAL (reliability review questions).

- **Evidence:** `INV-AUDIENCE-001`; `INV-LOOP-001`;
  `INV-RESPONSIBILITY-001`; `plan/MASTER_PLAN.md` §§14–15, 26, 35.

- **Related Curriculum:** ACT 5 — advanced audience value and seven
  takeaways.
### BEAT-070 — Close with the seven Curriculum takeaways

- **Act:** ACT 5 — AI-Native Development and Learner Reflection
- **Purpose:** Consolidate the approved seven Curriculum takeaways.

- **Current State:** Beginners and experienced users can each identify a
  suitable next step in the same Story.

- **Trigger:** A dense six-hour journey needs a concise, shared set of ideas
  to retain.

- **Action:** Revisit the seven takeaways already defined in the Curriculum:
  1. AI에게 질문만 하지 말고 문제 해결 과정을 맡겨라.
  2. 좋은 Prompt는 중요하다. 반복되는 Project Context는 구조화하라.
  3. Context는 양보다 관련성과 적절한 시점이 중요하다.
  4. AI에게 지식뿐 아니라 안정적으로 일할 방법과 환경을 설계하라.
  5. `Investigate → Plan → Implement → Verify → Review`를 기본 작업 흐름으로
     활용하라.
  6. Agent의 “완료했습니다”는 Verification 결과가 아니다.
  7. 반복 Failure를 원인 분석과 다음 Harness 개선으로 연결하라.

- **Result:** Learners retain a shared summary without erasing the different
  problems and reasoning behind each takeaway.

- **Interpretation:** This recap preserves the existing Curriculum's seven
  meanings; final slide wording may be shortened later without changing
  them. The seven takeaways are not seven required Harness components: close
  by recalling Minimum Effective Harness as the smallest system that addresses
  real recurring friction, a course heuristic rather than a fixed recipe.

- **Audience Question:** “오늘의 일곱 Insight 중 내 업무에서 가장 먼저
  떠오르는 것은 무엇인가?”

- **Engineering Response:** End with a private reflection and the final
  mental model, not another feature.

- **New State:** Learners share the course baseline and can connect it to a
  next action appropriate to their practice.

- **Next Friction:** The final minute should invite reflection without
  requiring an answer or a public contribution.

- **Audience Layer:** ALL

- **Demo Potential:** VISUAL (takeaway recap).

- **Evidence:** `INV-LEARNING-003`; `INV-DIFFICULTY-001`;
  `plan/MASTER_PLAN.md` §7.

- **Related Curriculum:** ACT 5 — seven takeaways and final reflection;
  `plan/CURRICULUM.md` (Core Takeaways).
### BEAT-071 — End with one private reflection

- **Act:** ACT 5 — AI-Native Development and Learner Reflection
- **Purpose:** Close with private reflection and no added stage or feature.

- **Current State:** The learner has seen the whole Story, preserved
  developer responsibility, Verification and task workflow, the layer map,
  and the shared takeaways.

- **Trigger:** A feature-focused ending would obscure the intended change in
  how learners think about AI-assisted development.

- **Action:** Introduce no new feature. Invite a private response to one or
  two closing questions: “현재 여러분은 AI에게 어디까지 맡기고
  있습니까?”, “그 다음 단계에서 가장 먼저 바꿀 수 있는 것은
  무엇입니까?”, or “매번 AI에게 반복해 설명하거나 같은 Failure를
  바로잡는 것은 무엇입니까?” Learners may also consider whether that
  friction points to Prompt, Context, Harness, or Feedback. Close with
  `Question → Task → Context → System → Feedback Loop`.

- **Result:** The course ends with a connection to the learner's work, not a
  required answer, presentation, or feature checklist.

- **Interpretation:** The desired outcome is to reconsider how one develops
  with AI, not merely to remember Codex feature names.

- **Audience Question:** “내가 AI와 개발하는 방식을 다시 생각하면 다음에
  바꿀 수 있는 것은 무엇인가?”

- **Engineering Response:** End the six-hour Story; add no further stage.

- **New State:** Each learner can privately name a suitable next step while
  the organization leaves with a shared mental model.

- **Next Friction:** None within this course.

- **Audience Layer:** ALL

- **Demo Potential:** NONE.

- **Evidence:** `INV-DELIVERY-001`; `INV-DIFFICULTY-001`;
  `INV-NARRATIVE-001`; `plan/CURRICULUM.md` (ACT 5).

- **Related Curriculum:** ACT 5 — audience next steps, seven takeaways, and
  final reflection.
## Beat Integrity Notes

- Events using “may,” “hypothetical,” “candidate,” or “illustrative” must keep
  that status in any later teaching material until evidence changes it.
- The first repository-exploration success is not immediately negated.
- A Skill, Subagent, Memory facility, or other product feature is a possible
  mechanism after its problem appears, not an ACT objective in itself.
- No Beat claims a universal performance improvement, a specific line-count
  failure threshold, or a real project failure that has not been recorded.
- Memory, Skill, and Subagent maintenance examples remain illustrative or
  controlled until their task states and outcomes are actually reproduced.
- Use the `ai-dev-training` meta example only when repository history and
  artifacts establish the events and their order; omit unsupported motivation
  or outcome claims.
- Manual, assisted, and automated feedback describe design options, not a
  promise that a particular product surface supports each option.
- Verification and developer responsibility recur throughout; the task
  workflow `Investigate → Plan → Implement → Verify → Review` is distinct from
  the maturity path.
