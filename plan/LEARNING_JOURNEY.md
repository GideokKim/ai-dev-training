# Learning Journey

## 현재 ACT3→ACT4 연결 — DEC-0092 (2026-10-25)

113장·402분과 장별 시간/Mode·번호를 유지한다. S72–S73의 Harness 재사용 가치를
보존하고, S74–S79에서 **사람의 반복 보정이 다음 작업의 체계 개선으로 돌아오지 않는 문제**를
드러낸다. 확인한 성공→사람의 추가 확인→이번 요청과 공통 지침의 차이→반복 보정→
판단할 기록→근거·검토 책임의 순서다. S75–S77은 CONCEPTUAL이며 실제 반복 실패가 아니다.
ACT4 S80–S98의19장·81분·장별 역할·시간·Mode·근거·Notes는 변경하지 않는다.
[현재 연결 설계](ACT3_LOOP_HANDOFF.md), [Slide Map](SLIDE_MAP.md),
[로컬 수정 결과](../production/evaluation/ACT3_LOOP_HANDOFF_REVISION.md)를 우선한다.
기존12Templates/28Variants·19Notes 필드·17개 팁·마지막 목록 S110–S112를 유지한다.
아래 이전 설계·번호·평가는 당시 판본의 이력이다. Windows/교육장/제품·계정/실측 리허설은
UNVERIFIED이며 새 Trial·발표 묶음·Demo 저장소 변경은 없다.

## 이전 기준 — DEC-0091 (2026-10-25)

113장·402분. ACT3 S56–S79는24장·92분, ACT4 S80–S98은 기존19장·81분을 보존한다.
S71 뒤 재사용2장과 이전 S72 설명5장을 넣고 이전 독립 C++ 전이 S73은 삭제했다.
현재 범위·근거·장별 시간은 [Slide Map](SLIDE_MAP.md), [설계](HARNESS_REUSE_AND_EXECUTION_CONTEXT.md),
[108→113 번호](SLIDE_ID_MIGRATION_113.md)를 따른다. 기존12Templates/28Variants·19Notes 필드 유지.
마지막 팁 요약은 S110–S112이며 Windows/교육장/제품·계정/실측 리허설은 UNVERIFIED다.
아래의 이전 Decision·Prototype·평가는 당시 판본의 이력이며 새 Trial이나 전체 환경 감사가 아니다.

> Status: STEP 04 COMPLETE; STEP 07 schedule decision accepted on 2026-10-02
> in DEC-0007. This document tracks learner mental-model changes and provides
> a Curriculum-level handoff, not a detailed Storyline or speaker script.

Related Invariants:
INV-OBJECTIVE-001, INV-AUDIENCE-001, INV-DELIVERY-001,
INV-NARRATIVE-001–002, INV-MATURITY-001–011, INV-LOOP-001,
INV-LEARNING-001–004, INV-VERIFY-001, INV-DIFFICULTY-001–003,
INV-RESPONSIBILITY-001, INV-DEMO-001–004.

## Starting State

A common starting mental model is:

> “AI is a tool I ask questions. I find code or an error, paste enough of it
> into ChatGPT, receive an answer, and apply it myself.”

Learners arrive with different experience. Some rarely use AI; some use
chatbots for code explanation and edits; others already delegate repository
tasks or design agent systems. These are different starting points, not
learner ranks. The course lets everyone follow one story and identify a useful
next step.

## Journey at a Glance

| Shift | Time | From | To | Trigger |
|---|---:|---|---|---|
| 1. Delegate repository investigation | 40 min | “I bring code and context to AI.” | “An agent can explore the development workspace for relevant context.” | ChatGPT → Codex repository exploration |
| 2. Specify the task | 55 min | “A short request should be enough.” | “I can state the goal, context, constraints, process, and verification conditions.” | Vague request and Before/After case |
| 3. Reuse project context | 35 min | “I repeat project rules in each task.” | “I can keep recurring project guidance with the project.” | AGENTS.md benefit |
| 4. Design context relevance | 35 min | “I should put everything in the main instruction file.” | “I should route relevant information to the task that needs it.” | Context growth and routing |
| 5. Design how work happens | 50 min | “Organized Context should make work repeatable.” | “The teaching model poses process variation; recorded Trials show a procedure recurring, while role separation remains conditional.” | Labeled variation model → TRIAL-006/007 procedure recurrence → repository Skill / Subagent audit |
| 6. Audit durable knowledge and reveal the Harness | 35 min | “Repeated information must be retained, and more features make a stronger system.” | “Classify repeated information; retain knowledge only when it passes a need-based gate. Reveal the actual bounded Harness.” | Trial-history audit finds no Memory candidate; STATE-04-PERF Working Harness Success |
| 7. Improve the system from feedback | 80 min | “A local correction may be enough.” | “Use evidence to inspect a cause, change a system, and re-evaluate within clear limits.” | Separate DEMO-04A conceptual staleness and DEMO-04B observed Meta feedback; synthesize their common pattern |
| 8. Integrate and choose a next step | 30 min | “Everyone must adopt the whole system, or AI replaces developers.” | “I can take one next step while retaining engineering responsibility.” | Beginning/ending comparison and reflection |
| **TOTAL** | **360 min** |  |  |  |

Approved delivery-mode totals are Lecture 130, Demo 73, Case 83,
Reflection 20, Transition 22, and Q&A/Discussion 32 minutes. The 32-minute
Q&A pool will be placed near major transitions and at the course close;
STEP 08 determines its exact placement and reconciles section-level
Reflection and Transition roles. The ACT durations and learner journey above
remain unchanged.

## Shift 1 — From Bringing Code to AI to Bringing an Agent to the Repository

**From:** A developer copies code, errors, and selected files into a chatbot.
**To:** An agent can search and read the repository in its work environment.
**Problem:** The developer spends effort finding and transferring context before
the AI can help.
**Concept:** The change is who searches for relevant repository context. It is
not a general claim that Codex writes better code than ChatGPT.
**Demo:** Candidate Anchor Demo 1: locate a feature in an unfamiliar
repository. Repository, domain, exact question, surface, and fallback remain
open; do not show complex modification in this first Demo.
**Insight:** “코드를 AI에게 가져가지 말고 AI를 코드로 데려가라.”
**Audience Value:** Newer users see a concrete way beyond code snippets.
Experienced users can notice the human context-gathering cost.
**Transition:** “같은 AI를 쓰는데 왜 사람마다 결과가 다를까?”

## Shift 2 — From Vague Requests to Task Specification

**From:** “이 코드 최적화해줘.”
**To:** State the goal and the information, constraints, process, and evidence
needed to complete the task.
**Problem:** A vague request leaves intent and completion conditions implicit.
**Concept:** Use the course's practical Goal, Context, Constraints, Process,
Verification checklist. Treat it as a teaching aid, not a fixed official
OpenAI framework. Keep Investigate → Plan → Implement → Verify → Review as a
task workflow, not a competing maturity model.
**Demo:** Supporting Before/After case using the same illustrative task. Do not
claim that one comparison proves general improvement.
**Insight:** Better task specification is independently useful and remains
valuable as Prompt, Context, Harness, and Loop evolve.
**Audience Value:** Beginners get an immediately usable way to ask. Practical
users get an investigation-first and verification-aware way to frame work.
Experienced users get a lens for task specification and controlled comparison.
**Transition:** “왜 우리는 같은 Project 규칙을 매번 다시 설명할까?”

## Shift 3 — From Repeating Project Rules to Reusing Project Context

**From:** Each task repeats build, test, style, architecture, and constraint
information.
**To:** Keep useful project-level guidance in a persistent project location,
with AGENTS.md as the narrative example.
**Problem:** Task Prompts become a repeated container for information that
applies across tasks.
**Concept:** Separate task-specific information from recurring project
information. Show AGENTS.md helping before discussing its limits; it is one
mechanism, not a universal answer.
**Demo:** Candidate Anchor Demo 2: compare Prompt-heavy and project-guidance
approaches, observing what the agent sees and how concise the task becomes.
One Demo run does not prove universal quality improvement.
**Insight:** Move repeated explanation from the Prompt to reusable Project
Context.
**Audience Value:** Chatbot-centered users see a practical starting point;
Codex users can inspect which project rules they keep repeating.
**Transition:** “도움이 되는 AGENTS.md에 모든 것을 넣으면 해결될까?”

## Shift 4 — From More Context to Relevant Context at the Right Time

**From:** Add more project information to one place whenever something new is
learned.
**To:** Decide what information belongs to the task, project, workflow, or
durable knowledge, and how the task can find it.
**Problem:** Not all instructions apply to every task; old, conflicting, or
irrelevant context creates maintenance and routing questions.
**Concept:** Use Task, Project, Role/Workflow, and Historical/Durable Context as
a course mental model. Treat context separation and progressive disclosure as
relevance patterns, not official universal taxonomies. Use Lost in the Middle
only as bounded historical research evidence, not proof about every current
model or coding task.
**Demo:** Visual case of a growing instruction file and a core-rule-plus-router
alternative; supporting research visual with scope caveat. File lengths are a
teaching device, not a deterministic failure threshold.
**Insight:** “필요한 순간에 필요한 Context를 설계한다.”
**Audience Value:** Newer users learn that one file need not contain
everything. Experienced users get relevance, retrieval, staleness, and
long-context scope questions.
**Transition:** “Agent가 필요한 정보를 안다면 항상 일관되게 일할까?”

## Shift 5 — From Project Understanding to Reliable Ways of Working

**From:** If the agent sees project facts, it should perform the task reliably.
**To:** Design a reusable work process and separate roles only when actual
friction justifies it.
**Problem:** Build, test, benchmark, review, or release procedures are
re-explained or executed inconsistently even when project context is present.
**Concept:** Harness is a candidate course framing for the environment and
process around agent work. Introduce Skill or another currently supported
reusable workflow mechanism when a process repeats. Introduce Subagents only
when role/context separation is worth coordination and integration costs. Do
not present either as mandatory components.
**Demo:** The observed primary Product path reaches STATE-04-PERF with a
reusable Performance Skill and bounded checks. The actual task audit defers
Subagents; a separate conditional model explains when role separation could
help. No Subagent is used in the Product Demo.
**Insight:** “AI에게 지식만 주지 말고 일하는 방법과 환경을 설계하라.”
**Audience Value:** Beginners see how project understanding differs from
consistent task execution. Experienced users can assess workflow and
delegation trade-offs.
**Transition:** “이미 발견한 Project 지식을 다음 작업에서도 쓸 수 있을까?”

## Shift 6 — From Repeated Information to Justified Retention and Harness
Emergence

**From:** Trial records contain repeated information, but repetition alone
does not show that a costly, missing Project fact needs durable retention.
**To:** Classify information by source and purpose, then retain it only when a
specific knowledge gap passes a reuse, cost, scope, provenance, and freshness
gate. Reveal the Harness from the needs demonstrated by the actual Product.
**Problem:** Canonical facts, maintained documentation, reusable workflows,
Trial observations, and temporary environment details have different homes.
The audit finds no durable Memory candidate in the primary Demo history.
**Concept:** Distinguish current Context from durable knowledge and repository
Source of Truth. Teach the Memory lifecycle conditionally. Connect tools,
environment, verification, and repeatable workflow. The observed Harness uses
Project Context, routing, a repository-owned Skill, Benchmark, Tests, tools,
and a task Prompt boundary; Subagent and Memory are not needed.
**Demo:** Show the Trial-history classification and its no-candidate result;
use visual material for the conditional Memory gate and lifecycle. Anchor the
Harness view in the observed STATE-04-PERF setup, not an idealized component
list.
**Insight:** The Harness is an emergent response to identified work problems,
not a feature checklist or a completed architecture to memorize.
**Audience Value:** Newer users retain the simple distinction between what is
needed now and what may be worth retaining. Experienced users see freshness,
scope, verification, and system-design concerns.
**Transition:** “잘 만든 Harness가 Project 변화 뒤에도 계속 맞을까?”

## Shift 7 — From Repeated Correction to Feedback-Driven Improvement

**From:** In DEMO-04A's conceptual case, one correction solves the immediate
task while leaving the stale workflow unchanged. Separately, observed
Training Production Trials expose a limit in attribution.
**To:** Follow the shared feedback pattern while keeping those evidence paths
independent: observe, analyze cause, change the relevant system, and
re-evaluate within stated limits.
**Problem:** The conceptual Project change can make a workflow stale. In the
observed Meta history, global Harness presence limits attribution and prompts
a change to Trial evaluation/reporting rules. Neither path proves that the
other occurred.
**Concept:** Distinguish a Product Loop from a Harness Improvement Loop.
Improvement may be manual, assisted, or partly automated; automation alone is
not Loop Engineering. Analyze cause before changing a system. “System
learning” refers to a justified system or knowledge change, not model-weight
updates.
**Demo:** Keep DEMO-04A as a labeled conceptual stale-workflow case. Present
DEMO-04B as the observed timeline TRIAL-006 → DEC-0016 → TRIAL-007/008, with
attribution limits, the report/stderr discrepancy, and no measured quality
gain visible. Do not connect the cases causally or treat either as Product
Demo continuation.
**Insight:** “반복되는 Failure를 다음 Harness 개선으로 연결하라.” More
components or more instructions do not automatically mean a better Harness.
**Audience Value:** Beginners learn that repeated correction can indicate a
system issue. Experienced users can reason about evaluation, regression,
overfitting, cost, and Minimum Effective Harness.
**Transition:** “지금 자신의 업무에서 다음으로 바꿀 수 있는 것은 무엇인가?”

## Shift 8 — From Feature Adoption to Responsible AI-Native Development

**From:** Everyone must deploy a complete Harness, or developers will be
replaced by full automation.
**To:** Each developer can take a next step appropriate to their current
practice while retaining engineering judgment and responsibility.
**Problem:** A complex ending can feel like a mandate or erase the developer's
role.
**Concept:** Compare the beginning (question → answer → manual application)
with the expanded process (task → agent/context/work environment → execute →
verify → observe → improve). Present AI-Native Development as this course's
operational teaching model, not universal industry consensus.
**Demo:** Retrospective diagram and seven takeaways; no new feature tour,
hands-on exercise, or required learner presentation.
**Insight:** Delegation can expand while developers remain responsible for
goals, requirements, trade-offs, risk, verification, review, and accountability.
**Audience Value:** Each learner can identify one appropriate next step:
repository investigation, clearer task specification, project context,
context routing, workflow verification, Harness maintenance, or team-level
evaluation.
**Ending Reflection:** “현재 AI에게 어디까지 맡기고 있습니까?” and
“그 다음 단계에서 가장 먼저 바꿀 수 있는 것은 무엇입니까?”

## Audience-Specific Next Steps

| Current practice | A useful next step |
|---|---|
| Chatbot-centered | Use Codex to explore a repository where permitted; state a task clearly; ask for investigation first; request and inspect verification evidence. |
| New to Codex | Identify repeated project context; consider a concise AGENTS.md; use Investigate → Plan → Implement → Verify → Review. |
| Already using project context | Check whether one file contains unrelated guidance; improve routing and relevance; identify repeated workflows. |
| Already using a Harness | Check whether Skills, Subagents, Memory, and checks solve actual problems; review stale elements and recurring failures. |
| Advanced agent user | Design a feedback and regression approach; consider Minimum Effective Harness and team-level environment design. |

These are reflection prompts, not assignments or required implementation work.

## Agency Shift

| Journey point | Developer | Agent / System |
|---|---|---|
| Starting point | Finds code and context, asks a question, and applies the answer. | Returns an answer. |
| Repository exploration | Sets the task and decides what matters. | Searches and reads available repository context. |
| Prompt | Defines Goal, Constraints, desired Process, and Verification. | Investigates and plans against a clearer task. |
| Context | Curates reusable project guidance and its scope. | Receives relevant project knowledge through the available sources. |
| Harness | Designs process, tools, environment, and risk-appropriate checks. | Executes the task through the selected work system. |
| Loop | Judges causes, risks, and whether to keep a system change; remains accountable. | Provides outcomes and evidence that can inform the next improvement. |

This is a gradual shift from personally performing every step toward
engineering and supervising the work system, not a fixed division of labor.
Developer agency and responsibility remain throughout.

## Spiral Learning

| Concept | First encounter | Later development |
|---|---|---|
| Context | Task information in a Prompt | Project guidance; relevant routing; workflow-specific context; durable knowledge and context improvement |
| Verification | Explicit task completion condition | Project checks; repeatable workflow; evaluation and regression after Harness changes |
| Investigate → Plan → Implement → Verify → Review | Requested in a clearer task Prompt | Supplied by project context; partly encoded in workflow; examined and improved through feedback |
| Developer responsibility | Select task scope and constraints | Interpret results, judge risk and trade-offs, verify changes, review, and remain accountable |

## Pacing and Accessibility

- Open with a familiar situation and show only the simple maturity roadmap.
- At each ACT start, reuse the same simple roadmap with completed/current/
  future stages marked, so learners can orient themselves without a new
  feature inventory.
- Move from a concept to a case, Demo, diagram, failure, or Insight rather than
  stacking long text explanations.
- End each ACT with one Insight and begin the next with the problem that follows
  from the preceding solution.
- Keep one evolving software Demo repository as the preferred continuity
  pattern, but do not select or implement it in this Curriculum gate.
- Layer BASIC, PRACTICAL, and ADVANCED insights within the same Story. Advanced
  detail is optional depth, not a reason beginners should stop following.
- Keep research detail brief in the core narrative; fuller evidence belongs in
  Research references or later supporting material.
- Vary the rhythm across lecture, case, instructor Demo, question, diagram, and
  Insight. No stage requires a learner laptop or hands-on participation.

## Open Dependencies

The selected repository, cases, live product surface, account feature access,
project commands, observed failures, company data policy, and product-specific
Demo fallback remain open under OQ-001–OQ-009, OQ-011, and OQ-014 in
[DECISIONS.md](DECISIONS.md). These uncertainties do not change the learner
journey; they constrain what may be claimed or shown in later Demo planning.

The course's operational Harness and Loop wording remains provisional pending
OQ-011. Research-dependent claims must retain their limits. DEC-0007 is
ACCEPTED; DEC-0008 continues to govern its proposed Demo placement principles.
OQ-003, OQ-005, OQ-006, OQ-011, and OQ-014 gate affected claims at Final
Content Freeze, not the STEP 08 Slide Map, under DEC-0022.

## STEP 05 Handoff — ACT Architecture Inputs

The following records preserve the required inputs for a later Detailed Story
Architecture. “Success” describes what a future controlled or observed case
would need to show; it is not a claim that the event has already occurred.
Exact product behavior, repository states, and Demo results remain undecided.
Time budgets are current estimates in
Lecture / Demo / Case / Reflection / Transition order.

### ACT 0 — Chatbot Developer and Repository Exploration

- **Starting State:** A developer finds code or an error, copies selected
  material into a chatbot, and carries the answer back to the IDE. Learners
  have different experience levels.
- **Starting Problem:** The developer must gather repository context by hand;
  the AI sees only what was copied into the conversation.
- **Attempt:** Let a repository agent search for one feature, read relevant
  files, and trace a path to an answer.
- **Initial Improvement:** The agent performs part of the context search in
  its available repository workspace.
- **Success:** A bounded case identifies useful files and explains why they
  matter, subject to actual repository access and the selected product
  surface.
- **New Problem:** Different outcomes can still follow from different task
  scope, constraints, process, and completion expectations.
- **Next Improvement:** Make the task and its completion conditions explicit.
- **Key Demo:** Anchor candidate 1 — read-only repository exploration.
- **Insight:** “코드를 AI에게 가져가지 말고 AI를 코드로 데려가라.”
- **Transition Question:** “같은 AI를 사용하는데 왜 사람마다 결과가 다를까?”
- **Time Budget:** 40 min — 13 / 8 / 9 / 5 / 5.
- **Audience Value:** Newer users see a route beyond pasted snippets;
  experienced users notice human context-collection cost.

### ACT 1 — Prompt Engineering as Task Specification

- **Starting State:** The agent can inspect a repository, but the request may
  still be “이 코드 최적화해줘.”
- **Starting Problem:** Intent, scope, constraints, process, and the evidence
  required to call the task complete are implicit.
- **Attempt:** State Goal, Context, Constraints, Process, and Verification;
  request investigation and a plan before implementation where useful.
- **Initial Improvement:** The task describes intended scope and observable
  completion conditions more clearly.
- **Success:** A Before/After case makes the changed task information visible;
  one comparison is not a universal effectiveness claim.
- **New Problem:** Project build, test, style, and architecture rules recur
  across tasks.
- **Next Improvement:** Reuse persistent Project Context instead of repeating
  the same project facts in every Prompt.
- **Key Demo:** Supporting Before/After case using one illustrative task.
- **Insight:** A clear task specification is useful in its own right and
  remains valuable as the surrounding system grows.
- **Transition Question:** “왜 우리는 매번 같은 Project 설명을 반복할까?”
- **Time Budget:** 55 min — 19 / 8 / 17 / 6 / 5.
- **Audience Value:** Beginners get a usable request checklist; experienced
  users get explicit process and evaluation conditions.

### ACT 2 — Context Engineering and Relevance

- **Starting State:** The task is clearer, but each new task repeats project
  build, test, style, architecture, and constraint information.
- **Starting Problem:** Task Prompts are being used to carry recurring
  Project information.
- **Attempt:** Put concise recurring guidance in AGENTS.md and observe a
  small-project case before showing growth.
- **Initial Improvement:** Common project instructions can be reused instead
  of restated in every task.
- **Success:** A controlled case shows where the guidance is placed and what
  the agent receives; output differences must be observed, not presumed.
- **New Problem:** Accumulation can make guidance irrelevant, stale,
  conflicting, or difficult to route.
- **Next Improvement:** Separate core rules from task-relevant detail and
  route information for relevance and timing.
- **Key Demo:** Anchor candidate 2 — Prompt-heavy versus Project guidance,
  then a labeled context-growth and routing case.
- **Insight:** “Context는 많을수록 좋은 것이 아니라 필요한 순간에 필요한
  정보가 중요하다.”
- **Transition Question:** “Agent가 Project를 잘 이해하면 항상 같은 방식으로 잘 일할까?”
- **Time Budget:** 70 min — 27 / 13 / 15 / 7 / 8.
- **Audience Value:** Beginners see how to reuse project rules; experienced
  users examine relevance, routing, staleness, and bounded research evidence.

### ACT 3 — Harness Engineering as a Designed Work System

- **Starting State:** Project guidance is organized. A labeled teaching model
  poses process variation; TRIAL-006/007 record the same observable procedure
  across distinct performance tasks before its Skill reuse is examined.
- **Starting Problem:** Instructions explain what the project is, but do not
  by themselves make the work process and its checks repeatable.
- **Attempt:** Follow the actual reusable Performance workflow and inspect
  whether Subagent or Memory solves a demonstrated problem; connect the
  selected Project tools and checks.
- **Initial Improvement:** The workflow makes task steps and verification
  visible and reusable.
- **Success:** STATE-04-PERF is the observed bounded Working Harness Success;
  the actual audits found no need for Subagent or Memory.
- **New Problem:** A separate conceptual case models how Project change may
  leave a reusable workflow stale.
- **Next Improvement:** Use evidence to improve the system and evaluate the
  result; keep conceptual and observed feedback paths separate.
- **Key Demo:** STATE-04-PERF is the primary Product endpoint. DEMO-04A is a
  conceptual stale-workflow case; DEMO-04B is a separate observed Meta case.
- **Insight:** “AI에게 지식만 주지 말고 일하는 방법과 환경을 설계하라.”
- **Transition Question:** “잘 만든 Harness가 Project 변화 뒤에도 계속 맞을까?”
- **Time Budget:** 85 min — 31 / 20 / 20 / 6 / 8.
- **Audience Value:** Beginners distinguish project facts from work method;
  experienced users examine context isolation, coordination, freshness, and
  system trade-offs.

### ACT 4 — Loop Engineering and System Improvement

- **Starting State:** The primary Product path ended with a bounded success at
  STATE-04-PERF. ACT 4 adds a conceptual maintenance case and a separate
  observed Trial-evaluation history.
- **Starting Problem:** DEMO-04A asks how one stale workflow could persist
  after Project change. DEMO-04B records that global Harness influence limited
  attribution in Training Production Trials.
- **Attempt:** In the conceptual case, inspect the stale artifact, form a cause
  hypothesis, make a scoped change, rerun, evaluate, and check regression. In
  the observed Meta case, trace the evaluation/reporting rule change and its
  later evidence limits.
- **Initial Improvement:** DEMO-04A models a possible scoped correction.
  DEMO-04B records a changed evaluation/reporting rule; it does not establish
  improved Product behavior or Trial quality.
- **Success:** The class can compare what each path supports without merging
  their histories or claiming an unmeasured outcome.
- **New Problem:** A broad conceptual fix can create bloat or harm another
  task; Meta evidence can also remain partial after a rule change.
- **Next Improvement:** Retain, refine, or revert a system change based on
  evaluation; use the smallest change justified by evidence.
- **Key Demo:** DEMO-04A conceptual stale-workflow path plus subordinate,
  observed DEMO-04B Trial-evaluation timeline; no causal link between them.
- **Insight:** “반복되는 Failure를 다음 Harness 개선으로 연결하라.”
- **Transition Question:** “지금 자신의 업무에서 다음으로 바꿀 수 있는 것은 무엇인가?”
- **Time Budget:** 80 min — 27 / 22 / 17 / 6 / 8.
- **Audience Value:** Beginners learn that repeated corrections may point to
  a system issue; experienced users examine evaluation, regression,
  overfitting, and maintenance.

### ACT 5 — AI-Native Development and Review

- **Starting State:** Learners have seen the whole progression from asking a
  chatbot to improving the work system around an agent.
- **Starting Problem:** A complex system can feel like a requirement for
  everyone, or suggest that developer judgment is no longer needed.
- **Attempt:** Compare beginning and ending work patterns, name developer
  responsibility, and offer next steps that fit different starting practices.
- **Initial Improvement:** Each learner can locate a possible next step
  without adopting every mechanism.
- **Success:** A learner can privately name one relevant next action and the
  judgment or verification they still own; no response is collected.
- **New Problem:** A single common adoption task would not fit all learner
  starting points.
- **Next Improvement:** Close with tailored options, shared takeaways, and a
  private reflection rather than another feature or required exercise.
- **Key Demo:** Retrospective beginning/ending visual; no new product Demo.
- **Insight:** AI participation can expand while developers retain
  responsibility for goals, trade-offs, risk, verification, review, and
  accountability.
- **Transition Question:** “현재 AI에게 어디까지 맡기고 있으며, 그 다음 단계에서 가장 먼저 바꿀 수 있는 것은 무엇인가?”
- **Time Budget:** 30 min — 13 / 2 / 5 / 6 / 4.
- **Audience Value:** Every learner can choose an appropriate next step;
  advanced learners retain team-level system design and responsibility.

## §122 Final Mental Model Validation

This validation checks the causal structure of the journey, not just whether
the concepts appear. Each shift connects a trigger and Problem to an
Engineering Response, a bounded Result, and an Insight. The detail below is
the mental-model path that the eight Journey shifts develop together.

| Shift | Journey section | Trigger | Problem | Engineering Response | Result | Insight |
|---|---|---|---|---|---|---|
| Code to AI → AI to Repository | Shift 1 | The developer manually collects files before asking. | The chatbot sees only selected snippets and errors. | Let an agent search and read relevant repository context in its available workspace. | A bounded case can surface files and paths relevant to the question. | Move context search toward the agent while the developer judges relevance. |
| Question → Task Specification | Shift 2 | The agent receives a vague request. | Goal, boundaries, process, and completion evidence are unclear. | Specify the task and ask for investigation, planning, and verification. | The work request becomes clearer and more reviewable. | Clear task conditions matter more than a magic Prompt. |
| Repeated Prompt Context → Managed Project Context | Shift 3 | Build, test, and project rules recur. | Repeating Project information makes every task Prompt carry the same background. | Put concise recurring guidance in a reusable Project location. | Common project context can be reused; its benefit can be examined before discussing limits. | Move repeated Project explanation out of every task. |
| More Context → Relevant Context | Shift 4 | The initially helpful file accumulates unrelated, old, or conflicting details. | More context does not guarantee that the relevant detail reaches the current task. | Route from core guidance to task-relevant detail and manage freshness. | Learners can reason about relevance and retrieval without a universal size threshold. | Supply the right context at the right time. |
| Agent Instruction → Agent Environment / Harness | Shifts 5–6 | A labeled model asks whether organized Context makes work repeatable; TRIAL-006/007 show procedure recurrence. | Project facts and reusable work methods answer different questions; the actual Project had no justified Subagent or Memory need. | Follow the repository Skill, verification evidence, and actual component audit before revealing Harness. | STATE-04-PERF succeeds within scope without Subagent or Memory. | Engineer the working environment around demonstrated needs, not a feature checklist. |
| Task Correction → System Improvement | Shift 7 | In DEMO-04A, a separate conceptual Project change makes a reusable workflow stale; independently, the observed Meta path encounters global Harness influence during Trial evaluation. | The conceptual path asks how to maintain a changed workflow; the observed path has bounded attribution for its Trial outcomes. | DEMO-04A models cause analysis, scoped change, rerun, evaluation, and regression checks. DEMO-04B records an evaluation and reporting-rule change followed by later Trials. | The paths share Execution → Observation → Cause → System Change → Re-evaluation, but remain independent and support different claims. | Feed observed or explicitly modeled friction into a system-improvement loop while keeping evidence status visible. |
| Tool Usage → AI-Native Development | Shift 8 | Learners see the whole progression and may assume complete adoption is required. | A tool-focused ending can obscure developer judgment and responsibility. | Synthesize task, context, work environment, verification, and feedback; offer next steps by starting practice. | Each learner can identify an appropriate next step and retained responsibility. | AI-Native Development is the course's operational teaching model, not full automation. |

**Result: PASS.** The Story survives a change in product interface because
these learning shifts are expressed as engineering problems and responses.
Exact product behavior and account availability remain subject to Research
and Demo checks.
