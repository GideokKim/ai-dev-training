# 6-Hour Curriculum

> Status: STEP 04 COMPLETE WITH OPEN QUESTIONS through §130. The detailed time
> allocation remains PROPOSED in DEC-0007 pending user review and later Demo
> runtime evidence. Product and Demo dependencies remain explicitly open.
> STEP 05 has not started.

Related Invariants:
INV-IDENTITY-001, INV-AUDIENCE-001, INV-OBJECTIVE-001,
INV-DELIVERY-001, INV-NARRATIVE-001–002, INV-MATURITY-001–011,
INV-LOOP-001, INV-LEARNING-001–004, INV-VERIFY-001,
INV-DIFFICULTY-001–003, INV-RESPONSIBILITY-001, INV-DEMO-001–004.

## Purpose

Design six net instructional hours (360 minutes) of developer training that
raises the shared organizational baseline for using ChatGPT and Codex in
software development. The course follows a problem-driven evolution from
chatbot use to task specification, relevant context, a designed agent work
system, and feedback-driven system improvement.

This document defines curriculum scope, learning movement, delivery modes,
and instructional time. It is not a Storyline, Slide Map, speaker script, or
Demo implementation plan.

## Audience

Developers have a wide range of AI experience, from rare chatbot use through
repository-level agent and Harness experience. The course uses one shared
Story rather than separate beginner and advanced tracks. Each stage provides
an accessible core idea and practical or advanced insight where it fits.

The opening self-location ladder is a non-evaluative mental model. It must
never be used to label or rank learners.

## Delivery Format

Instructor-led lecture, cases, Before/After comparisons, visual explanations,
and instructor-operated Codex demonstrations. There are no participant
laptops, hands-on exercises, required answers, or presentations. Reflection
means a short private pause to connect the idea to one's own work; no learner
is required to speak.

The schedule contains 360 net instructional minutes. Breaks are outside this
total. Live product behavior and Demo run times remain conditional on the
target environment and later Demo Architecture.

## Learning Outcomes

By the end of the course, learners should be able to:

1. Distinguish asking a chatbot about code from assigning repository-level
   investigation or development work to an agent.
2. Make a task clearer with the course's practical Goal, Context, Constraints,
   Process, and Verification checklist, and recognize why investigation and
   planning should precede implementation.
3. Separate task-specific and persistent project context, improve context
   relevance, and recognize the benefit and maintenance limits of AGENTS.md.
4. Explain why reliable agent work may need an environment and reusable
   process in addition to task instructions and context; choose components
   only to address an identified problem.
5. Distinguish a one-task Product Loop from a Harness Improvement Loop, trace
   repeated friction to a cause, and evaluate a system change before keeping
   it.
6. Keep developer judgment, verification, review, and accountability in view,
   and identify a useful next step from one's current practice.

## Overall Narrative

**Chatbot → Prompt → Context → Harness → Loop → AI-Native Development**

The sequence is a widening scope of engineering problems, not a series of
replacements or independent product-feature introductions:

- Chatbot to repository agent: who finds the context needed for development?
- Prompt: how can the developer communicate the task and completion conditions?
- Context: why repeat project information, and how should relevant information
  be available at the right time?
- Harness: what environment and process support reliable work?
- Loop: how can recurring failures improve the system used for future work?
- AI-Native Development: how do developers design task, context, environment,
  verification, and feedback while retaining responsibility?

The task-level pattern remains distinct from this maturity progression:

**Investigate → Plan → Implement → Verify → Review**

It first appears as a task instruction, then gains project context and reusable
workflow, and finally becomes an object that can be evaluated and improved.

### Demo Continuity

Use one evolving software Demo repository as the preferred story backbone,
separate from this training-planning repository. The intended timeline is:

**Initial repository → agent exploration → project instructions → context
growth → context routing → reusable workflow → role separation → durable
knowledge → mature Harness → project change → stale Harness → evaluated
improvement.**

The repository, domain, commands, and concrete states remain undecided under
OQ-001/OQ-007. This is a curriculum timeline, not a claim that these events
have happened. Demo failures must be observed or explicitly labeled as a
controlled/illustrative scenario.

## Time Overview

All values are net instructional minutes. L = Lecture, D = instructor Demo,
C = Case / Before-After / visual case, R = private Reflection, T = Transition.
Each section's mode values sum to its section duration. Reflection is not a
hands-on activity or required learner contribution.

| Act | Time | L | D | C | R | T |
|---|---:|---:|---:|---:|---:|---:|
| ACT 0 — Chatbot Developer | 40 | 13 | 8 | 9 | 5 | 5 |
| ACT 1 — Prompt Engineering | 55 | 19 | 8 | 17 | 6 | 5 |
| ACT 2 — Context Engineering | 70 | 27 | 13 | 15 | 7 | 8 |
| ACT 3 — Harness Engineering | 85 | 31 | 20 | 20 | 6 | 8 |
| ACT 4 — Loop Engineering | 80 | 27 | 22 | 17 | 6 | 8 |
| ACT 5 — AI-Native Development / Review | 30 | 13 | 2 | 5 | 6 | 4 |
| **TOTAL** | **360** | **130** | **73** | **83** | **36** | **38** |

The ACT allocation uses the broad schedule in MASTER_PLAN §11 as a baseline.
Harness and Loop receive enough time for their less familiar system-level
reasoning, while the opening stages still provide immediately usable value.
These are curriculum estimates: later Demo Architecture may refine the mode
mix within an ACT, but the net total and core Story remain 360 minutes.

## ACT 0 — Chatbot Developer and the Scope of Delegation

**Time:** 40 minutes
**Purpose:** Help learners recognize the range of ways developers currently
use AI, without ranking them, and introduce the change from carrying code and
context to a chatbot to letting an agent explore a repository.
**Starting Problem:** A familiar error or code fragment is copied into
ChatGPT, and the developer manually carries the answer back to the IDE.
**Learning Objectives:** Reflect on the scope of one's current AI use; explain
the difference between asking a question and delegating a development task;
recognize repository exploration as a context-gathering change.
**Demo Role:** Candidate Anchor Demo 1, a short repository exploration. The
repository and domain are not chosen yet. Do not show complex edits. If the
target surface is unavailable, use a clearly labeled diagram or captured
result.
**Audience Value:** Beginners see a familiar starting point and a concrete
next possibility. Practical Codex users see context-collection cost.
Experienced users can notice how much problem-solving work is already done
when a person manually chooses relevant context.
**Key Insight:** “코드를 AI에게 가져가지 말고 AI를 코드로 데려가라.” This
describes who searches the workspace for context; it does not claim that
Codex is generally a better coder than ChatGPT.
**Transition:** “같은 AI를 사용하는데 왜 사람마다 결과가 다를까?”

| Section | Min | L/D/C/R/T | Learning movement and teaching form |
|---|---:|---:|---|
| Familiar error and self-location | 10 | 4/0/3/2/1 | Open with the recognizable copy-error-to-ChatGPT-to-IDE pattern and ask whether learners have used AI this way. Let them privately consider their practice; do not assign them a level. |
| Range of delegation and simple roadmap | 15 | 6/0/4/2/3 | Show the non-evaluative range: Level 0, little AI use; Level 1, questions/search/error help; Level 2, code explanation/generation/modification; Level 3, repository-level agent tasks; Level 4, Context/Harness/Loop design. This is a self-reflection map, never an assessment or label. Reveal only Chatbot → Prompt → Context → Harness → Loop; reserve component details for later. Ask what changes when a task, not only a question, is delegated. |
| ChatGPT → Codex repository exploration | 15 | 3/8/2/1/1 | Candidate Demo: locate a feature in an unfamiliar repository through search, file reading, and path tracing. Keep it read-only and short. Compare who supplies the context in the two approaches. |

## ACT 1 — Prompt Engineering as Task Specification

**Time:** 55 minutes
**Purpose:** Make Prompt Engineering useful on its own before revealing the
need for persistent project context.
**Starting Problem:** The developer has not stated enough of the goal, scope,
constraints, desired process, or verification condition for the agent to
reliably align with the intended task.
**Learning Objectives:** Identify missing task information; use the course's
practical Prompt Checklist; request investigation and a plan before
implementation; distinguish task-specific information from information that
will recur across tasks.
**Demo Role:** Supporting Before/After case using the same illustrative task.
The checklist is a course teaching aid, not an official OpenAI framework.
Keep the comparison illustrative unless task, repository, model, environment,
and evaluation conditions can be held stable.
**Audience Value:** Beginners get a change they can use immediately. Practical
and experienced users get a task-specification lens, investigation-first
workflow, and explicit completion criteria.
**Key Insight:** A useful Prompt starts with a clear task specification; better
Prompts remain important as the system grows.
**Transition:** “그런데 왜 우리는 매번 같은 Project 설명을 반복할까?”

| Section | Min | L/D/C/R/T | Learning movement and teaching form |
|---|---:|---:|---|
| Same model, underspecified request | 15 | 5/0/7/2/1 | Compare plausible outcomes of a vague request: scope drift, missed constraints, skipped checks, or a mismatch with intent. Do not claim a single outcome is inevitable. |
| Practical Prompt Checklist and Before/After | 20 | 7/5/4/2/2 | Use Goal, Context, Constraints, Process, Verification to ask what the agent needs to know and what counts as done. Compare two forms of the same task and inspect which information changed. |
| Investigation-first workflow and Prompt's value | 20 | 7/3/6/2/2 | Introduce Investigate → Plan → Implement → Verify → Review as a task-level pattern, without teaching every step in depth. Show Prompt improvements as worthwhile. Then contrast task-specific context with repeated project rules to motivate ACT 2. |

## ACT 2 — Context Engineering and Relevance

**Time:** 70 minutes
**Purpose:** Move repeated project knowledge out of every task Prompt and
toward relevant, maintainable context.
**Starting Problem:** The developer repeats build, test, conventions,
architecture, and constraints in Task A, Task B, and Task C because recurring
project knowledge has not been structured for reuse.
**Learning Objectives:** Explain the initial value of AGENTS.md; distinguish
task, project, role/workflow, and durable historical context as a course
mental model; discuss relevance and timing rather than token volume; describe
context routing and progressive disclosure with accurate scope.
**Demo Role:** Candidate Anchor Demo 2, AGENTS.md before/after. First show
reuse working for a small project, then introduce the growth problem. The
line-count progression is a visual teaching device, not a failure threshold.
Lost in the Middle is supporting, bounded research evidence, not the sole
reason for context separation.
**Audience Value:** Beginners see how to stop repeating project rules.
Practical users see the distinction between task and project context.
Experienced users see relevance, routing, staleness, and bounded long-context
evidence.
**Key Insight:** “Context는 많을수록 좋은 것이 아니라 필요한 순간에 필요한
정보가 중요하다.”
**Transition:** “Agent가 Project를 잘 이해하면 항상 같은 방식으로 잘 일할까?”

| Section | Min | L/D/C/R/T | Learning movement and teaching form |
|---|---:|---:|---|
| Repeated project context and AGENTS.md's first success | 20 | 5/8/4/1/2 | Contrast repeating project rules in every Prompt with storing core project instructions. Treat AGENTS.md as an instruction/routing mechanism, not a dumping ground or a replacement for project sources of truth. Candidate before/after Demo asks whether rules are recognized and work methods found; one run does not prove universal improvement. |
| Context definition and scope mental model | 15 | 8/0/3/2/2 | Ask what the agent needs, when, and from where. Introduce Task Context, Project Context, Role/Workflow Context, and Historical/Durable Knowledge as a course mental model, not an official OpenAI taxonomy. Preview Skills and Memory without teaching them yet. |
| Context growth, relevance, and research caveat | 20 | 8/2/6/2/2 | Let AGENTS.md visibly grow as a scenario (for example, 100 → 300 → 700 → 1500 lines), then ask whether every item is needed for every task. The counts are a teaching device, not a failure threshold. Discuss irrelevant, stale, conflicting, mixed-priority information and maintenance. Use Lost in the Middle briefly with its historical models, tasks, and generalization limits; do not say that current models cannot use middle context. |
| Separation, routing, and progressive disclosure | 15 | 6/3/2/2/2 | Move from “one file contains everything” to core rules plus routes to relevant information. Present progressive disclosure as a general course/context design pattern. Keep it distinct from the specific Skills loading behavior described by official product documentation; note routing and maintenance trade-offs. |

## ACT 3 — Harness Engineering as a Designed Work System

**Time:** 85 minutes
**Purpose:** Extend context design to the work environment and process needed
to support reliable, verifiable development work. Let components emerge from
problems rather than installing a universal checklist.
**Starting Problem:** Project context exists, but recurring workflows and
verification have not been structured as a reusable work system; the developer
must keep supplying or correcting the process.
**Learning Objectives:** Distinguish “what information is needed?” from “what
environment and process support the work?”; recognize reusable workflow,
role separation, durable knowledge, tools, and verification as optional
mechanisms; explain that their value depends on an actual need.
Possible mechanisms include Instructions, Context, Skills, Tools, Subagents,
Memory, Verification, Workflow, and Environment. They are not a mandatory
component checklist.
**Demo Role:** Candidate Anchor Demo 3, a repeated workflow using a reusable
mechanism and verification. Subagent and Memory examples remain supporting or
visual candidates. Product-specific behavior and target availability must be
checked before Demo design.
**Audience Value:** Beginners see a gradual path from Context to working
methods. Practical users see workflow reuse and verification. Experienced
users can examine role/context isolation, persistence lifecycle, coordination
cost, and system design.
**Key Insight:** “AI에게 지식만 주지 말고 일하는 방법과 환경을 설계하라.” The
Harness diagram appears only after its parts have solved visible problems.
**Transition:** “잘 만든 Harness가 Project 변화 뒤에도 계속 맞을까?”

| Section | Min | L/D/C/R/T | Learning movement and teaching form |
|---|---:|---:|---|
| Context → Harness problem and bottom-up framing | 15 | 7/1/5/1/1 | Show inconsistent work despite organized context. Introduce a candidate course framing around environment and process, explicitly not a universal taxonomy. Build bottom-up from observed friction; do not lead with a completed architecture. |
| Repeated workflow and Skill candidate | 20 | 5/8/4/1/2 | Distinguish a project fact such as a build command from the repeatable procedure for a performance task. Candidate Demo compares a Prompt with a reusable workflow and observes baseline, tests, benchmark, comparison, and verification. Use the current supported product mechanism only after verification. |
| Role/context complexity and Subagents | 15 | 5/5/3/1/1 | Compare one agent doing architecture, performance, and test investigation with separated roles. Explain result integration, duplicated work, context transfer, coordination, and compute/token cost. Use a conceptual diagram if live support is unavailable. |
| Repeated discovery, Context vs Memory | 15 | 7/2/3/1/2 | Ask why useful project facts are rediscovered. Distinguish “needed now” from “worth retaining,” then show a short Create → Validate → Scope → Retrieve → Refresh → Update/Retire lifecycle. Keep ChatGPT User Memory, Codex Product Memory, repository durable knowledge, and an engineering memory pattern distinct; none is a substitute for the project's Source of Truth. |
| Tools, verification, and Harness reveal | 20 | 7/4/5/2/2 | Connect repository search, file operations, commands, environment, workflow, and checks to observation and action. Mention MCP or Plugins only if the Story needs them; do not give a feature tour. Revisit the task-level workflow and make verification part of repeatable work. Only now reveal the combined Harness diagram and summarize why it may feel sufficient before introducing staleness. |

## ACT 4 — Loop Engineering and System Improvement

**Time:** 80 minutes
**Purpose:** Turn recurring failure or friction into evidence for improving
the system that shapes future agent work.
**Starting Problem:** Project reality changes but no maintenance feedback keeps
instructions, skills, memory, tools, or workflows current, so the developer
may repeat the same correction across tasks.
**Learning Objectives:** Recognize Harness Technical Debt as a course analogy;
separate one-task Product improvement from Harness Improvement; trace a
failure through cause and hypothesis; evaluate a Harness change and check for
regression; avoid equating automation with learning.
**Demo Role:** Candidate Anchor Demo 4: stale instruction → failure → pause →
cause analysis → Harness change → re-run → evaluation. Use only a real or
controlled, clearly labeled and repeatable state. If no observed recurrence
or reliable live environment exists, use a labeled visual case; do not invent
project history or claim an unobserved improvement.
**Audience Value:** Beginners learn that repeated correction can signal a
system problem. Practical users see a feedback pattern. Experienced users
can examine evaluation scope, regression, overfitting, cost, and the minimum
effective intervention.
**Key Insight:** “반복되는 Failure를 다음 Harness 개선으로 연결하라.” Here
“learning” means improving the system or durable knowledge, not changing
model weights.
**Transition:** “Failure를 System Improvement로 연결하면 AI를 개발 과정의
일부로 다루는 방식이 보인다. 이제 각자는 이 여정에서 어떤 다음 단계를
가져갈 수 있을까?”

| Section | Min | L/D/C/R/T | Learning movement and teaching form |
|---|---:|---:|---|
| Project change and stale Harness | 20 | 6/5/6/1/2 | Contrast an old build/test/workflow instruction with a changed project. Use Harness Technical Debt as a bounded engineering analogy. Show a repeated-failure scenario only as an illustrative case unless it is actually observed and recorded. |
| Loop model, Product Loop, and automation levels | 15 | 8/2/2/1/2 | Define the course's feedback-driven improvement candidate. Contrast Task → Code → Test → Fix with Agent outcome → cause analysis → system improvement → next execution. Distinguish manual, assisted, and automated feedback without treating automation as the goal. |
| Cause analysis, change, evaluation, and regression | 25 | 5/11/5/2/2 | Anchor Demo candidate: stop at stale-workflow failure, inspect the artifact, form a cause hypothesis, change the relevant element, rerun, evaluate, and check regression. A check pass is bounded evidence, not proof of every quality dimension. |
| Improve Context, Memory, Skills, and delegation | 20 | 8/4/4/2/2 | Show that improvement may mean fixing routing, retiring stale knowledge, completing a Skill, reducing unnecessary Subagents, or revising verification—not automatically adding rules. Introduce Minimum Effective Harness as a project heuristic and close the system-improvement story. |

## ACT 5 — AI-Native Development and Review

**Time:** 30 minutes
**Purpose:** Recall the complete learning journey, preserve developer
responsibility, and give learners a useful next step without requiring
everyone to adopt the full system.
**Starting Problem:** After seeing greater agent capability, learners may
mistake the journey for a mandate to automate everything or for a prediction
that developers become unnecessary.
**Learning Objectives:** Compare the opening and ending mental models; choose
a next step appropriate to one's current practice; name developer-owned
judgment and responsibility; summarize the seven course takeaways.
**Demo Role:** Short retrospective visual, not a new product demo. End with a
private reflection question; do not require an answer or presentation.
**Audience Value:** Each experience level gets a next step on the same Story;
advanced users see team-level system and regression questions.
**Key Insight:** The course's AI-Native Development framing is an operational
teaching model: developers design task, context, environment, verification,
and feedback while retaining responsibility. It is not a claim of universal
industry consensus or full automation.
**Transition:** End with “현재 여러분은 AI에게 어디까지 맡기고 있으며,
그 다음 단계에서 가장 먼저 바꿀 수 있는 것은 무엇인가?”

| Section | Min | L/D/C/R/T | Learning movement and teaching form |
|---|---:|---:|---|
| Beginning/ending comparison and developer responsibility | 15 | 7/2/3/2/1 | Compare asking about an error with task → agent → context/tools → execution → verification → feedback. Show role tendencies, not an absolute division: developers retain goals, judgment, risk, verification, review, and accountability. Reframe “Will AI replace developers?” toward differences in engineering practice. |
| Audience next steps, seven takeaways, final reflection | 15 | 6/0/2/4/3 | Give tailored next steps for chatbot-centered, Codex-introductory, context-using, Harness-using, and advanced learners. Recap the seven takeaways and leave one or two reflection questions without requiring participation. |

## Core Takeaways

1. AI에게 질문만 하지 말고 문제 해결 과정을 맡겨라.
2. 좋은 Prompt는 중요하다. 반복되는 Project Context는 구조화하라.
3. Context는 양보다 관련성과 적절한 시점이 중요하다.
4. AI에게 지식뿐 아니라 안정적으로 일할 방법과 환경을 설계하라.
5. Investigate → Plan → Implement → Verify → Review를 기본 작업 흐름으로
   활용하라.
6. Agent의 “완료했습니다”는 Verification 결과가 아니다.
7. 반복 Failure를 원인 분석과 다음 Harness 개선으로 연결하라.

## Time Validation

| ACT | Minutes |
|---|---:|
| ACT 0 | 40 |
| ACT 1 | 55 |
| ACT 2 | 70 |
| ACT 3 | 85 |
| ACT 4 | 80 |
| ACT 5 | 30 |
| **TOTAL** | **360** |

Mode totals: Lecture 130 + Demo 73 + Case 83 + Reflection 36 + Transition
38 = **360 minutes**. Section-level arithmetic is checked at the Curriculum
gate. Breaks are excluded.

## Research Dependencies

| Topic | Curriculum boundary and dependency |
|---|---|
| Current ChatGPT/Codex surface and feature availability | Repository exploration, Skill, Subagent, Memory, and other product Demo behavior is conditional on target surface/account/environment. Recheck current official OpenAI sources and the actual training workspace under OQ-003/OQ-005. Use documented fallbacks if unavailable. See [Capability Matrix](../references/product/CAPABILITY_MATRIX.md) and [Claim Registry](../references/CLAIMS.md). |
| Prompt checklist and task workflow | Goal / Context / Constraints / Process / Verification is this course's practical checklist, not an official fixed OpenAI framework. Keep it separate from the research-backed official Prompt Engineering wording. The task-level workflow remains distinct from the maturity sequence. |
| Context and long-context evidence | CLM-0014/CLM-0015 and [Lost in the Middle](../references/research/lost-in-the-middle.md) support bounded relevance and placement cautions, not a universal claim about current models or coding agents. Preserve study conditions and resolve final teaching wording under OQ-006. |
| AGENTS.md, Skills, Subagents, and Memory | See CLM-0005–0008. Explain product behavior only within cited scope; target availability remains open. A static or conceptual fallback preserves the underlying engineering problem. |
| Harness and Loop wording | CLM-0030 is partial and CLM-0021 is a course teaching model. Keep operational language provisional pending OQ-011; do not imply a universal industry taxonomy. |
| Verification and Evaluation | CLM-0020/CLM-0029 support scoped evaluation and available checks. Project commands, recurrence, and success criteria depend on the selected repository and observed evidence under OQ-001/OQ-007/OQ-009. |
| Data and case permission | Company policy is unresolved under OQ-014. Do not imply permission for internal/customer data. Case use and permission remain under OQ-002. Prefer public/sample material until confirmed. |

## Open Questions

- OQ-001: Select the continuous software Demo repository, domain, language,
  and location.
- OQ-002: Select real cases and confirm permission; do not presume internal
  cases can be used.
- OQ-003 / OQ-005: Confirm the target Demo surface, account, feature access,
  and fallbacks. Product-specific Demo plans remain conditional.
- OQ-004: The Curriculum quality and completion audit is recorded through
  §130; DEC-0007 remains PROPOSED pending user review. Refine Demo runtime
  estimates during Demo Architecture without changing the net total or
  removing a core Story connection.
- OQ-006: Finalize research-dependent teaching wording while retaining the
  bounded scope of long-context evidence.
- OQ-007: Select actual project build, test, benchmark, review commands and
  completion criteria after the repository is chosen.
- OQ-008: Select concrete Skills, Subagent, Memory, and Harness examples
  after repository, product availability, and verification needs are known.
- OQ-009: Define recurrence and evaluation criteria from observed evidence;
  do not invent a threshold or claim improvement without evaluation.
- OQ-011: Review and approve operational Harness and Loop wording before it
  is finalized in Storyline or teaching Slides.
- OQ-014: Determine company data-use policy before using internal/customer
  material or giving company-specific policy guidance.

Slides, detailed Storyline, Demo repository implementation, and Speaker Notes
remain outside this Curriculum gate. The §120 Curriculum gate passes and
STEP 04 completion checks are recorded through §130; downstream Demo and
product dependencies remain open.

## Intermediate Gate and Curriculum Drift Audit (through §110)

This section preserves the intermediate checks recorded through §110. Its
historical intermediate result is followed by the final §§111–120 gate below.

| Check | Result | Basis / remaining condition |
|---|---|---|
| Organization-wide AI capability alignment remains primary. | PASS | Purpose, Audience, and Outcomes retain INV-OBJECTIVE-001. |
| Net instructional time is exactly 360 minutes. | PASS | Section-level arithmetic and delivery-mode totals are checked below. |
| No participant hands-on activity is required. | PASS | Delivery Format and all private reflections state no laptop, lab, answer, or presentation requirement. |
| Chatbot → Prompt → Context → Harness → Loop → AI-Native order is preserved. | PASS | Overall Narrative and ACT order. |
| Each stage follows a problem that motivates it. | PASS | Every ACT states a Starting Problem and an ending transition question. |
| Prompt Engineering has practical value before its scaling limit. | PASS | ACT 1 demonstrates task specification and independent Prompt value before repeated project context. |
| AGENTS.md benefit precedes its limits. | PASS | ACT 2 begins with project-context reuse and a candidate success comparison. |
| Context growth arises after initial reuse. | PASS | ACT 2 moves from first success to an explicitly illustrative growth scenario. |
| Relevance, routing, and progressive disclosure connect. | PASS | ACT 2 Sections 3–4 distinguish course pattern from product-specific Skills behavior. |
| Skills arise from repeated workflow friction. | PASS | ACT 3 introduces reusable workflow after inconsistent repeated procedures. |
| Subagents arise from role/context complexity and include costs. | PASS | ACT 3 compares one-agent work and role separation, including coordination and integration. |
| Memory arises from repeated rediscovery and has a lifecycle. | PASS | ACT 3 distinguishes current Context, product Memory, durable project knowledge, and Source of Truth. |
| Harness architecture is revealed after its components. | PASS | ACT 3 reveals the diagram in its final section after Context, workflow, roles, memory, tools, and verification. |
| Harness staleness precedes Loop Engineering. | PASS | ACT 4 opens with project change and stale work instructions. |
| Loop is not simple repetition or automation. | PASS | ACT 4 distinguishes Product Loop, Harness Improvement Loop, and feedback automation levels. |
| Verification develops through the Story. | PASS | Prompt conditions → project checks → reusable workflow → evaluation/regression; see Learning Journey. |
| The same Demo repository is intended to evolve. | CONDITIONAL | The continuity timeline is defined; selecting the repository and validating scenarios remain OQ-001/OQ-002/OQ-007. |
| Beginners can follow while experienced learners gain insight. | PASS | Shared path with BASIC/PRACTICAL/ADVANCED layers and audience-specific next steps. |
| The curriculum does not become a product-feature showcase. | PASS | Feature mechanisms appear only after their problem; current availability stays conditional. |
| Research limits and unresolved product facts are respected. | CONDITIONAL | Boundaries and fallbacks are recorded; final product behavior and term wording remain under OQ-003/OQ-005/OQ-006/OQ-011. |
| AI-Native Development is not defined as full automation. | PASS | ACT 5 preserves developer judgment and labels the framing as a course model. |
| No Slide Map, Demo repository, or Speaker Notes were produced. | PASS | This gate contains Curriculum artifacts only. |

Gate timing validation: 21 sections, each 10–25 minutes; ACT totals are
40 + 55 + 70 + 85 + 80 + 30 = 360. Mode totals are Lecture 130, Demo 73,
Case 83, Reflection 36, and Transition 38 minutes, also totaling 360.
DEC-0007 records this detailed schedule as PROPOSED pending user review and
Demo runtime evidence.

**Intermediate gate result:** The three Curriculum files existed and the
structural and arithmetic checks passed at this point. The final STEP 04
decision is recorded in §120 below.

## Narrative Continuity Audit

| Transition | Completed thought | Status |
|---|---|---|
| ACT 0 → ACT 1 | “Codex를 통해 AI가 Repository 안에서 직접 작업할 수 있다는 것을 알게 되었다. 그런데 어떻게 지시하느냐에 따라 결과가 달라진다.” | PASS |
| ACT 1 → ACT 2 | “Task를 명확하게 지시하는 방법을 배웠다. 그런데 Project에서 반복되는 설명을 매번 Prompt에 다시 쓰고 있다.” | PASS |
| ACT 2 → ACT 3 | “필요한 Context를 구조화했다. 그런데 Agent가 어떤 순서와 방식으로 일하는지는 여전히 일관되지 않을 수 있다.” | PASS |
| ACT 3 → ACT 4 | “Agent가 안정적으로 일할 Harness를 만들었다. 그런데 Project가 변하면 Harness가 오래되어 반복 Failure를 만들 수 있다.” | PASS |
| ACT 4 → ACT 5 | “Failure를 System Improvement로 연결했다. 그 결과 AI를 단순 Tool이 아니라 개발 System의 일부로 다루는 방식이 보인다.” | PASS |

## Problem Ownership Audit

| Problem | Owner / cause represented in the Curriculum | Engineering response |
|---|---|---|
| Prompt | The developer has not made Goal, Constraints, Process, and Verification explicit enough for the intended task. | Specify the task; do not frame it as an inherently unintelligent model. |
| Context | Project information needs scope, relevance, placement, routing, and freshness management. | Reuse and route information; do not reduce the issue to context-window size. |
| Harness | Repeated work and checks have not been structured as a reusable process in the work system. | Add only the workflow, tool, role, environment, or verification structure that addresses the problem. |
| Loop | Repeated failures are corrected in the current task but feedback is not connected to a system change and later evaluation. | Analyze cause, form a hypothesis, make a scoped change, and evaluate it. |

**Result: PASS.** The narrative treats developer/system design as the engineering
work and does not organize the training as criticism of AI limitations.

## Agency Shift Audit

| Stage | Agent / System contribution grows to include | Developer agency that remains |
|---|---|---|
| Starting point | Returns an answer to a question. | Finds code/context, frames the problem, and applies the answer. |
| Repository exploration | Searches and reads repository context in the selected work environment, subject to access and permission. | Chooses the goal and judges whether the findings are relevant. |
| Prompt | Investigates, plans, and may execute a clearly specified task. | Defines Goal, Constraints, Process preference, and Verification conditions. |
| Context | Receives reusable project information through appropriate context sources. | Curates, scopes, and maintains project guidance. |
| Harness | Uses selected workflows, tools, environment, and checks to carry out work. | Designs the work system, sets risk-appropriate checkpoints, and interprets results. |
| Loop | Outcomes and failures can feed a later system improvement. | Owns cause judgment, approves consequential changes, and remains accountable. |

**Result: PASS.** Agency shifts from personally performing every step toward
designing and supervising task, context, and verification. Developer
responsibility does not disappear or become a rigid division of labor.

## Success at Different Starting Points

| Success level | A learner can leave with | Curriculum support |
|---|---|---|
| Minimum Success | Understand Codex's repository role; make a clearer task request; ask for investigation first; request and inspect verification evidence. | ACT 0–1; useful within the first 75 minutes. |
| Practical Success | Find repeated project context; consider AGENTS.md; improve context relevance; identify a reusable workflow. | ACT 2–3. |
| Advanced Success | Design a problem-shaped Harness; reason about evaluation, Harness Technical Debt, regression, and feedback loops. | ACT 3–4. |

**Result: PASS.** The complete Story is shown, but every learner is not required
to implement Loop Engineering or the full Harness.

## Redundancy Audit

| Repeated concept | First layer | Later layer | Why the return adds a new layer |
|---|---|---|---|
| Verification | Prompt states how completion will be checked. | Project context provides checks; a reusable workflow performs them; Loop evaluates a Harness change and regression. | Verification moves from a task request to an engineered and evaluated system property. |
| Context | Task facts are stated in the Prompt. | Repeated Project Context is reused; relevance is routed; role-specific or durable knowledge is selected and later improved. | Scope, reuse, timing, freshness, and feedback deepen progressively. |
| Task workflow | Investigate and Plan are requested in a Prompt. | Project rules supply commands; reusable workflows structure repeated execution; Loop can improve the workflow. | The same work pattern progresses from instruction to system behavior. |
| Product features | Each mechanism first answers a visible problem. | The Harness diagram later connects already introduced mechanisms. | The full system view synthesizes earlier learning rather than repeating feature definitions. |

**Result: PASS.** Repeated concepts gain a new scope or engineering function;
unchanged definitions and product tours are not planned as separate recaps.

## Curriculum Complexity and Term-Order Audit

| Term group | Problem and intuition come first | Term boundary |
|---|---|---|
| Agent / Codex | Show who searches the repository for context. | Do not imply that a product name guarantees an outcome or permission. |
| Prompt Engineering | Show outcome mismatch when Goal, Constraints, Process, and Verification are implicit. | Checklist is a course aid, not an official fixed framework. |
| Context Engineering / AGENTS.md | Show repeated Project information and the initial reuse benefit. | Context scope model is a teaching model; AGENTS.md is not every project's only answer or its Source of Truth. |
| Progressive Disclosure / Lost in the Middle | Show irrelevant or stale context and ask how the right information reaches the right task. | Keep Skills' documented loading behavior separate from the broader course pattern; keep academic scope bounded and supporting. |
| Skills / Subagents / Memory | Show repeated workflow, role/context complexity, and repeated rediscovery respectively. | Present as optional mechanisms with costs, product availability conditions, and lifecycle limits. |
| Harness / Harness Technical Debt | Show inconsistent process, then project change and stale artifacts. | Keep course operational wording provisional under OQ-011; Technical Debt is a bounded analogy. |
| Evaluation / Loop Engineering | Show recurring failure and the need to judge whether a change helped. | Do not equate automation, one successful run, or model-weight learning with the course Loop model. |
| AI-Native Development | Recap the complete journey and retained developer responsibility. | Label it as this course's operational teaching model, not universal industry consensus. |

**Result: PASS.** Core terms follow Problem → Intuition → Term. Advanced terms
are not prerequisites for understanding the shared Story.

## Research Detail Placement Audit

- Keep the main ACT 2 explanation of Lost in the Middle short: identify its
  bounded historical finding and its limit for current models and coding tasks.
  Full experimental conditions remain in the linked Research note.
- Keep current Codex interface, configuration schema, and feature details in
  official references until the target environment is confirmed; the
  Curriculum states only what the later Demo must verify.
- Keep Subagent research, Memory taxonomy, benchmark setup, and evaluation
  variance as supporting or advanced detail unless they change a core Story
  decision.
- **Result: PASS.** Research supports the Mental Model without requiring
  learners to absorb the underlying technical research.

## Anchor Demo Dependency Audit

| Candidate Anchor Demo | If it succeeds | If execution fails or is unexpectedly slow | Planned fallback |
|---|---|---|---|
| 1. ChatGPT → Codex repository exploration | Show the agent finding relevant repository context and answer “who searches?” | Do not turn an environment failure into a product comparison or imply a general capability defect. | Later prepare a captured exploration, repository map, or diagram; continue with the context-ownership Insight. |
| 2. Prompt → Context / AGENTS.md | Show repeated Project guidance moved out of each task Prompt and where it is supplied. | If output quality shows no difference or the file is not discovered, do not claim AGENTS.md always improves results. | Show the static before/after Prompt and instruction files, and explain the context boundary. |
| 3. Context → Harness / reusable workflow | Show a repeated procedure with verification in the workflow. | If Skills are unavailable or execution exceeds the budget, do not imply the feature exists in the target account. | Use an approved captured trace, workflow artifact, or diagram; retain the reusable-process Insight. |
| 4. Harness → Loop improvement | Show a labeled stale artifact, its cause, a scoped change, and re-evaluation. | If the intended failure is not reproducible or the live run fails for another reason, do not claim a real recurrence or successful improvement. | Use a documented controlled case, captured output/diff, or diagram and state whether it is illustrative; retain the cause-to-evaluation Story. |

These fallbacks are planning requirements for later Demo Architecture, not
assets already captured. The Story does not depend on successful live execution.
All product-specific steps remain subject to OQ-003/OQ-005; actual repository
states and commands remain subject to OQ-001/OQ-007/OQ-009.

## Time Risk Audit

Time Risk is a delivery estimate, not permission to shorten the 360-minute
Curriculum. HIGH sections need a future Must Cover / Nice to Have split in
Speaker Notes and rehearsed fallbacks. If a Demo runs long, adjust its
presentation mode or section balance within the approved total without
removing a causal Story connection.

| High-risk section | Why risk is high | Must Cover | Nice to Have |
|---|---|---|---|
| ACT 0 — Repository exploration | Live search and unfamiliar-repository navigation can take longer than expected. | Who searches for context and what the agent found. | Trace every call path or inspect multiple tests. |
| ACT 3 — Reusable workflow | A real build/test/benchmark sequence may have setup or execution delay. | The recurring procedure and how verification belongs to it. | Wait for a lengthy benchmark live. |
| ACT 3 — Harness architecture reveal | Several mechanisms and their relationships can invite over-explanation. | Synthesize only components that have already solved a visible problem. | Tour every possible Harness component or product feature. |
| ACT 4 — Stale Harness and Loop | Failure, diagnosis, re-run, and evaluation create the longest Demo dependency chain. | Show the cause hypothesis, relevant system change, and bounded evaluation or fallback. | Add a second scenario or claim broader improvement. |
| ACT 4 — Loop model and automation levels | Distinguishing Product Loop, Harness Improvement Loop, and automation can invite lengthy discussion. | Explain feedback reaching system improvement and distinguish it from automation alone. | Detail every automation level or adjacent product feature. |

Other medium-risk sections are the Prompt Before/After, AGENTS.md
Before/After, Context-growth research aside, context routing, Subagent
comparison, Memory example, and Harness operational definition due to
discussion or explanation depth. Later timing may be refined during rehearsal;
the current net target remains 360 minutes.

## Curriculum Quality Scorecard

| Area | Result | Evidence / boundary |
|---|---|---|
| Objective — AI capability alignment is primary. | PASS | One shared developer Story; no feature-coverage objective replaces it. |
| Audience — Beginners can follow. | PASS | Familiar opening, intuitive problem-first progression, and Minimum Success within 75 minutes. |
| Audience — Experienced learners gain value. | PASS | Each ACT contains a practical or advanced layer without breaking Story order. |
| Narrative — One evolution Story and problem-first transitions. | PASS | Narrative Continuity Audit above; stages expand rather than replace prior layers. |
| Practicality — Near-term application and Codex connection. | PASS | Prompt checklist, investigate-first, repository exploration, project context, and verification. |
| Depth — Context → Harness → Loop without feature-list teaching. | PASS | Each mechanism appears after its Problem; full architecture is revealed late in ACT 3. |
| Demo — Anchor candidates and continuous repository story. | PASS | Four Anchor Demo roles and an evolving-repository timeline are defined; actual execution remains open. |
| Demo — Failure-to-improvement case. | PASS | ACT 4 includes a candidate failure → cause → system change → evaluation story; actual reproducibility remains open. |
| Verification — Generated ≠ Done and evaluation/regression. | PASS | Verification spirals from Prompt conditions to system change evaluation. |
| Delivery — No hands-on, visual changes, cognitive load considered. | PASS | Delivery Format, mode mix, pacing plan, and 10–25-minute sections. |
| Evidence — Research limits and product behavior are scoped. | PASS | Claim/topic references, fallbacks, and open product dependencies are explicit. |
| Time — Exactly 360 and not prematurely rebalanced. | PASS | Section and delivery-mode totals match the approved net duration and broad ACT baseline. |

**Scorecard result:** PASS at the Curriculum design level. Live Demo
availability, repository selection, real failures, exact product behavior, and
final term approval remain downstream dependencies, not unmarked assumptions.

## STEP 04 §§111–120 Final Curriculum Gate

This audit tests the existing Curriculum against compression, expansion,
audience comprehension, practical transfer, ACT boundaries, and STEP 05 input
readiness. It preserves the 360-minute baseline and does not create Slides,
Speaker Notes, or a detailed Storyline.

### §111 — Curriculum Compression Test

The removal test asks whether the next learning move would still make sense
without the section. The half-time test identifies what may be shortened
without removing its mental-model change. “Keep” protects a causal link; it
does not require equal treatment of every product mechanism.

| ACT / Section | Beginner hook and term guard | If removed | If shortened |
|---|---|---|---|
| ACT 0 — Familiar error and self-location | Copy an error into a chatbot; no new term is needed. | Repository exploration remains intelligible, but the shared and non-ranking starting point weakens. | Keep the recognizable example and private self-location; remove extra discussion. |
| ACT 0 — Range of delegation and simple roadmap | Show asking, code help, and repository work as examples; explain the labels without ranking people. | ACT 1 can still follow, but learners lose the common map and orientation. | Use one roadmap visual; defer all component details. |
| ACT 0 — ChatGPT → Codex repository exploration | Show one search, one file, and one path to an answer; explain the selected product surface during Demo planning. | The first maturity change has no concrete demonstration. | Keep one read-only investigation and the “who finds context?” comparison. |
| ACT 1 — Same model, underspecified request | Start with “이 코드 최적화해줘” and one plausible mismatch. | The checklist appears before the problem it answers. | Use one task and one mismatch; avoid multiple failure examples. |
| ACT 1 — Practical Prompt Checklist and Before/After | Explain Goal, Context, Constraints, Process, and Verification in ordinary language. | Learners lose the first usable task-specification method. | Retain all five elements in one Before/After; cut additional prompt variants. |
| ACT 1 — Investigation-first workflow and Prompt value | Ask what “fix it” leaves implicit; define each workflow verb when introduced. | The value of a better Prompt and the need for persistent project context blur. | Keep investigation, planning, and explicit completion evidence; defer detailed workflow mechanics. |
| ACT 2 — Repeated project context and AGENTS.md first success | Repeat a build or test instruction, then explain AGENTS.md as project guidance. | Context reuse is discussed without first showing why it helps. | Use one repeated rule and one labeled before/after case. |
| ACT 2 — Context definition and scope mental model | Sort examples into task, project, workflow, or retained knowledge; label this a course model. | Later routing discussion lacks a simple way to distinguish kinds of information. | Keep the four examples and plain-language distinctions; defer terminology detail. |
| ACT 2 — Context growth, relevance, and research caveat | Use an explicitly illustrative file that gains stale or unrelated rules; explain “stale.” | The initial solution appears sufficient and no new Context problem motivates change. | Keep the growth problem and caveat; shorten research detail before removing the problem. |
| ACT 2 — Separation, routing, and progressive disclosure | Show a core instruction pointing to a relevant detail file; explain routing before naming the pattern. | The learner sees context growth but no better approach. | Keep one route example and trade-off; omit extra mechanisms. |
| ACT 3 — Context → Harness problem and bottom-up framing | Project facts are available, yet build/test steps vary; explain Harness after this friction. | A system-level solution appears without a system-level problem. | Keep one inconsistent workflow and ask what must be designed around it. |
| ACT 3 — Repeated workflow and Skill candidate | Use a familiar build-test-compare sequence; describe Skill as a candidate reusable procedure. | The Harness has no visible initial solution or success case. | Keep one repeated procedure and its verification; omit benchmark wait time and product tour. |
| ACT 3 — Role/context complexity and Subagents | Divide architecture, performance, and test questions; explain coordination and integration costs. | The main transition to stale Harness still works; advanced role/context insight is reduced. | Keep as a short optional advanced aside or diagram; it is not an Anchor Demo dependency. |
| ACT 3 — Repeated discovery, Context vs Memory | Reuse a fact such as which build is used for benchmarking; define “needed now” vs “worth retaining.” | The core workflow story remains, but durable-knowledge scope and freshness disappear. | Keep the distinction and a short lifecycle; compare product Memory details only after verification. |
| ACT 3 — Tools, verification, and Harness reveal | Contrast searching, acting, and checking; define verification as evidence for a stated condition. | The verification spiral and synthesized Harness have no culmination. | Keep the model/system/check connection and late reveal; omit adjacent MCP/Plugin features. |
| ACT 4 — Project change and stale Harness | A previously correct build or test instruction no longer matches the project; explain the analogy after the example. | Loop has no preceding maintenance failure to address. | Keep one changed project fact and its effect; label the case as illustrative unless observed. |
| ACT 4 — Loop model, Product Loop, and automation levels | Show a one-task fix that does not update future work; distinguish that from feedback to the system. | Learners can confuse repeated execution or automation with system improvement. | Keep the two-loop contrast; shorten automation-level detail. |
| ACT 4 — Cause analysis, change, evaluation, regression | Inspect one failure, form a cause hypothesis, change one relevant artifact, rerun, and check for regression. | Loop's central failure-to-improvement claim lacks an observable chain. | Preserve cause, scoped change, evaluation, and one regression check; cut a second scenario. |
| ACT 4 — Improve Context, Memory, Skills, and delegation | Use examples of stale guidance, excess roles, or a missing check; explain “minimum effective” as a heuristic. | The learner may conclude that every failure needs another rule in one file. | Keep the smallest-change principle; use one example and list other layers only as alternatives. |
| ACT 5 — Beginning/ending comparison and developer responsibility | Compare “ask and apply” with “delegate, verify, and review”; name developer-owned judgment. | The maturity journey may be read as full automation or replacement. | Keep one retrospective visual and responsibility statement; avoid a second feature recap. |
| ACT 5 — Audience next steps, seven takeaways, final reflection | Give examples for different starting practices; reflection stays private and optional. | There is no usable close or next-day action for different learners. | Group takeaways visually; retain one tailored next step and a private closing question. |

**Compression result:** No section is kept merely to fill six hours. The causal
spine is retained; secondary examples, research detail, and feature exposition
are the first material to shorten. The Subagent treatment is explicitly
supporting and can move to an advanced aside without breaking the core Story.

### §112 — Curriculum Expansion Test

The three system-level stages have enough planned time for a complete causal
movement. The schedule is an estimate, not a claim that a live Demo has been
rehearsed.

| Stage | Problem | Initial solution | Success | New problem | Better approach | Insight |
|---|---|---|---|---|---|---|
| Context Engineering — ACT 2, 70 min | Project rules repeat across tasks. | Reuse core instructions through AGENTS.md. | A small project can receive recurring guidance without repeating it in every Prompt; the Demo must observe and label the result. | Growth introduces irrelevant, stale, conflicting, or poorly routed information. | Keep core rules concise and route to task-relevant detail with progressive disclosure. | Relevance and timing matter more than accumulating context. |
| Harness Engineering — ACT 3, 85 min | Organized Context does not make process and checks consistent. | Start with a reusable workflow for a repeated task. | The same procedure makes its steps and verification visible. | More complex work creates role/context, knowledge freshness, tool, and maintenance questions. | Build a problem-shaped work system; use roles, Memory, tools, and checks only when they address observed friction. | Design how the agent works, not only what it knows; the parts are optional and unequal in depth. |
| Loop Engineering — ACT 4, 80 min | Project change leaves a previously useful artifact stale; a task correction is local. | Correct the current task and see a local improvement. | The current task may recover, subject to the controlled or observed evidence. | The same issue can recur; an over-broad change can regress other work. | Diagnose cause, make a scoped system change, rerun, evaluate, and check regression. | Feed recurring failure into measured system improvement; automation alone is not the Loop. |

Skills receives the primary reusable-workflow illustration. Subagents and
Memory remain supporting layers and do not receive the same depth or Demo
time. Actual section balance can be rehearsed later while protecting 360
minutes and every causal transition.

### §113 — Beginner Comprehension Walkthrough

The 21-section walkthrough below uses the Matrix's Starting Problem as its
intuitive entry point. Terms are named only after a familiar problem or
example; current product-specific behavior remains conditional on later
verification.

| ACT / Section | Intuitive entry and comprehension check |
|---|---|
| ACT 0 — Familiar error and self-location | Copying an error to a chatbot is recognizable; no prior product vocabulary is needed. |
| ACT 0 — Range of delegation and simple roadmap | Show examples before labels; state that the map locates a practice and does not rank a person. |
| ACT 0 — Repository exploration | Search for one feature and follow its file path; explain what “repository exploration” means on screen. |
| ACT 1 — Same model, underspecified request | “Optimize this code” shows the missing goal and completion condition before Prompt terminology. |
| ACT 1 — Practical Prompt Checklist and Before/After | Explain each checklist word with the same concrete task; do not assume learners know a prompt template. |
| ACT 1 — Investigation-first workflow and Prompt value | Define Investigate, Plan, Implement, Verify, Review as ordinary actions before showing the sequence. |
| ACT 2 — Repeated project context and AGENTS.md first success | Show repeated build/test rules first; introduce AGENTS.md as a file for project guidance, not a prerequisite term. |
| ACT 2 — Context definition and scope mental model | Use “task detail,” “project rule,” “workflow,” and “fact to retain” before naming the Context categories. |
| ACT 2 — Context growth, relevance, and research caveat | Demonstrate one old or unrelated rule; explain that line counts and research do not define a universal failure threshold. |
| ACT 2 — Separation, routing, and progressive disclosure | Draw a short rule that points to a relevant detail; name progressive disclosure after the drawing. |
| ACT 3 — Context → Harness problem and bottom-up framing | Show known project facts alongside inconsistent steps; introduce Harness only after asking what supports reliable work. |
| ACT 3 — Repeated workflow and Skill candidate | Walk through one recurring procedure; describe Skill in plain language and gate exact product details on verification. |
| ACT 3 — Role/context complexity and Subagents | Split three investigation questions on a diagram; explain the cost of combining results and avoid assuming product access. |
| ACT 3 — Repeated discovery, Context vs Memory | Reuse one project fact; define current need versus retained knowledge before lifecycle vocabulary. |
| ACT 3 — Tools, verification, and Harness reveal | Explain search, action, and checks through observable examples; do not require MCP/Plugin knowledge. |
| ACT 4 — Project change and stale Harness | A changed build command makes old instructions wrong; explain “stale” before “Harness Technical Debt.” |
| ACT 4 — Loop model, Product Loop, and automation levels | Contrast a local correction with a change that affects the next task before naming the two loops. |
| ACT 4 — Cause analysis, change, evaluation, regression | Show one cause hypothesis and rerun; define regression as a different behavior getting worse. |
| ACT 4 — Improve Context, Memory, Skills, and delegation | Show that the cause may be routing, stale knowledge, workflow, roles, or checks; define the smallest effective response. |
| ACT 5 — Beginning/ending comparison and developer responsibility | Use the opening and closing pictures to explain what changes and what judgment stays with the developer. |
| ACT 5 — Audience next steps, seven takeaways, final reflection | Give a familiar next action for each current practice; do not require speech, installation, or adoption of every component. |

**Beginner walkthrough result: PASS.** Every section has a concrete entry
point, a plain-language concept path, and a boundary against making optional
product details prerequisites. The Matrix provides the section-level problem,
concept, and teaching form used in this review.

### §114 — Advanced Value Walkthrough

| ACT | Advanced learner value | Placement guard |
|---|---|---|
| ACT 0 | Human context-collection cost and the boundary between asking and delegating. | Keep to a brief observation during the repository case. |
| ACT 1 | Task specification, explicit completion conditions, and controlled Before/After reasoning. | Keep the checklist usable; avoid turning the opening into evaluation theory. |
| ACT 2 | Context relevance, routing, freshness, progressive disclosure, and bounded long-context evidence. | Keep research conditions in a brief aside and the Research references. |
| ACT 3 | Work-system design, role/context isolation, coordination cost, knowledge lifecycle, and verification. | Skills is the main concrete workflow example; Subagents and Memory are supporting depth. |
| ACT 4 | Harness Technical Debt, evaluation scope, regression, overfitting, and feedback design. | Analyze one cause and one scoped change; avoid claiming universal improvement. |
| ACT 5 | Minimum Effective Harness and team-level responsibility for reliable AI-assisted work. | Present as optional synthesis after the shared Story, not a new adoption mandate. |

**Advanced walkthrough result: PASS.** Each ACT contains a distinct experienced
user insight. Advanced details are layered or moved to asides if they compete
with the main causal story; they are not deleted to simplify the course.

### §115 — Practical Transfer Audit

| ACT | A learner can answer “What can I do differently tomorrow?” with |
|---|---|
| ACT 0 | Before copying code, consider whether a permitted repository agent can investigate the relevant project context. |
| ACT 1 | State the task goal, constraints, and how completion will be checked; ask for investigation before implementation when useful. |
| ACT 2 | Identify repeated project context and decide what to keep, route, update, or retire. |
| ACT 3 | Identify one recurring workflow or verification step that may benefit from a reusable process. |
| ACT 4 | Treat recurring correction as a signal to inspect cause and system behavior, then evaluate any change. |
| ACT 5 | Choose one next step from the learner's current practice while retaining developer judgment and responsibility. |

**Practical transfer result: PASS.** These are next-day options and private
reflection prompts, not participant exercises or required implementation.

### §§116–117 — One-Sentence ACT and Chapter Boundary Tests

| ACT | One-sentence focus | Boundary: the next problem that opens or the deliberate ending |
|---|---|---|
| ACT 0 | From showing AI a code fragment to letting an agent inspect the repository context. | Ends when different task instructions become the next visible source of different outcomes. |
| ACT 1 | From an underspecified request to a clear task and completion condition. | Ends when project explanations recur across otherwise distinct tasks. |
| ACT 2 | From repeating project rules to routing relevant context. | Ends when the agent has project information but still performs recurring work inconsistently. |
| ACT 3 | From giving project knowledge to designing the work system around the task. | Ends when project change makes a previously useful part of that system stale. |
| ACT 4 | From correcting one failure to improving and evaluating the system for future work. | Ends when the shared Story is complete and the learner asks what next step fits their practice. |
| ACT 5 | From adopting AI tools to practicing AI-native development with retained developer responsibility. | Deliberate course close; no new maturity stage or required action follows. |

**Boundary result: PASS.** ACTs end at an emerging problem or an intentional
course close, not at a feature-list boundary.

### §118 — Curriculum Decision Record

The meaningful detailed-time decision is recorded as DEC-0007 in
[DECISIONS.md](DECISIONS.md). Its current status remains PROPOSED pending user
review and later Demo runtime evidence. The audits in §§111–120 do not introduce
a decision that changes a HARD or STRUCTURAL invariant, so no additional
Decision ID is created. No Decision is implicitly accepted by this gate.

### §119 — STEP 05 Input Readiness

[LEARNING_JOURNEY.md](LEARNING_JOURNEY.md) contains one compact handoff record
for each ACT with Starting State, Starting Problem, Attempt, Initial
Improvement, Success, New Problem, Next Improvement, Key Demo, Insight,
Transition Question, Time Budget, and Audience Value. These are Curriculum
inputs only; they do not specify a detailed event sequence or Slides.

### §120 — STEP 04 Final Gate

| Requirement | Result | Evidence / boundary |
|---|---|---|
| Curriculum files exist: CURRICULUM, MATRIX, LEARNING_JOURNEY; TIME_BUDGET if needed. | PASS | The three required files are present; the 360-minute allocation is recorded in CURRICULUM and its Matrix. A separate TIME_BUDGET file is not needed. |
| Net instructional time is exactly 360 minutes. | PASS | 21 sections, ACT totals, delivery-mode totals, and Journey totals each reconcile to 360. |
| Organization-wide AI capability alignment is primary. | PASS | Purpose, outcomes, and shared learner Story retain this objective. |
| No participant hands-on work; Demo / case / visual teaching is present. | PASS | Delivery is instructor-led, with private reflection only; planned Demo + Case time is 156 minutes and visual cases supplement it. |
| Chatbot → Prompt → Context → Harness → Loop → AI-Native; problem-driven transitions. | PASS | Overall Narrative, ACT Starting Problems, and ACT boundary/transition audits. |
| Beginner and advanced walkthroughs; practical transfer. | PASS | §113–§115 audits and audience-specific next steps. |
| Anchor Demo candidates, continuous repository story, failure case, and fallbacks. | PASS | Four candidate Anchors and a continuous timeline are recorded; ACT 4 is a labeled failure-to-improvement candidate; all have fallbacks. Selection, observed states, and runtime remain open. |
| Research alignment, scoped product claims, teaching model vs. fact. | PASS | Claim and product references remain bounded in [CLAIMS.md](../references/CLAIMS.md), [STORY_DEPENDENCIES.md](../references/STORY_DEPENDENCIES.md), and the Curriculum Research Dependencies section. Current product Demo behavior is not asserted as universal. |
| Investigate → Plan → Implement → Verify → Review spirals; Verification grows Prompt → Harness → Loop. | PASS | Learning Journey's Spiral Learning table and the ACT 1, ACT 3, and ACT 4 progression. |
| Harness Technical Debt, Evaluation, and Regression are connected to Loop. | PASS | ACT 4 and the failure-to-improvement candidate cover all three with evidence limits. |
| No Slide Map, Slide Content, Demo repository implementation, or Speaker Notes. | PASS | The deliverables remain Curriculum planning documents only. |

**§120 gate result: PASS at the Curriculum design level.** DEC-0007 remains
PROPOSED and open for user review; OQ-001–OQ-009, OQ-011, and OQ-014 retain
their stated downstream product, repository, case, and runtime dependencies.
Those boundaries are explicit and do not block the Curriculum-level gate.

## STEP 04 §§121–130 Completion Audit

### §121 — Final Time Table

Reflection and Transition are combined in the requested output. The existing
separate totals remain Reflection 36 minutes and Transition 38 minutes.

| ACT | Title | Lecture | Case | Demo | Reflection / Transition | Total |
|-----|-------|---------|------|------|-------------------------|-------|
| ACT 0 | Chatbot Developer and the Scope of Delegation | 13 | 9 | 8 | 10 | 40 |
| ACT 1 | Prompt Engineering as Task Specification | 19 | 17 | 8 | 11 | 55 |
| ACT 2 | Context Engineering and Relevance | 27 | 15 | 13 | 15 | 70 |
| ACT 3 | Harness Engineering as a Designed Work System | 31 | 20 | 20 | 14 | 85 |
| ACT 4 | Loop Engineering and System Improvement | 27 | 17 | 22 | 14 | 80 |
| ACT 5 | AI-Native Development and Review | 13 | 5 | 2 | 10 | 30 |
| **TOTAL** |  | **130** | **83** | **73** | **74** | **360** |

Previous Draft:
ACT totals 40 / 55 / 70 / 85 / 80 / 30 minutes; modes Lecture 130, Demo 73,
Case 83, Reflection 36, Transition 38 minutes.

Final:
ACT totals 40 / 55 / 70 / 85 / 80 / 30 minutes; the requested combined
Reflection / Transition column is 74 minutes.

Reason:
No change from initial baseline.

### §122 — Learning Journey Final Validation

The journey is organized around mental-model changes and their causal
triggers, not as a second topic list. The seven named shifts below map onto
the eight learner journey sections; shifts 5 and 6 split the Harness build
from the later feedback Loop.

| Mental Model Shift | Trigger | Problem | Engineering Response | Result | Insight |
|---|---|---|---|---|---|
| Code to AI → AI to Repository | The developer must locate and select useful code before asking. | Context gathering is manual and limited to what was copied. | Let an agent search and read an available repository workspace. | The case can expose relevant paths and evidence without a complex edit. | Move context search toward the agent; keep the developer responsible for relevance. |
| Question → Task Specification | A repository agent receives an underspecified request. | Goal, constraints, process, and completion evidence are implicit. | State the task and request investigation, planning, and verification. | The requested work and completion conditions are clearer. | Task quality starts with communicating the task, not finding a magic phrase. |
| Repeated Prompt Context → Managed Project Context | Project rules recur across tasks. | Each task repeats build, test, style, and architecture details. | Reuse concise Project guidance, then examine scope and maintenance. | Repeated information can be carried by project context. | Separate task-specific instructions from recurring project knowledge. |
| More Context → Relevant Context | A useful instruction file begins to accumulate unrelated or stale details. | More information does not ensure that the right detail reaches the right task. | Keep core guidance concise and route to relevant detail. | Learners can reason about scope, freshness, and retrieval instead of token volume alone. | Relevance and timing matter more than accumulation. |
| Agent Instruction → Agent Environment / Harness | Project facts are available but recurring work is inconsistent. | Instructions alone do not make work steps and checks repeatable. | Add a reusable workflow first; consider roles, retained knowledge, tools, and checks only for visible needs. | Work steps and verification become observable parts of a designed work system. | Design how work is done as well as what the agent knows. |
| Task Correction → System Improvement | A local fix is followed by another stale or repeated failure. | Correcting the current task may leave the cause in the system untouched. | Analyze cause, change the relevant artifact, rerun, evaluate, and check regression. | Evidence can support keeping, refining, or reverting a system change. | Route recurring failure into a measured improvement loop. |
| Tool Usage → AI-Native Development | The complete progression can look like a mandate to automate everything. | A feature-centered ending can obscure developer judgment and responsibility. | Revisit the whole engineering process and offer next steps suited to different practices. | Each learner can identify a next step while retaining responsibility. | AI-Native Development is this course's operational model, not full automation. |

**Result: PASS.** Each shift connects a visible trigger and problem to an
engineering response, bounded result, and Insight. Product-independent
learning remains distinct from optional product illustrations.

### §123 — Curriculum Matrix Section Roles

Each Matrix section now has at least one explicit instructional role. These
roles can combine; they describe what the section does in the learning path,
not a mandatory slide format.

| Role | Meaning |
|---|---|
| INTRODUCE | Establish a new problem or mental model. |
| DEMONSTRATE | Show an example, case, or agent behavior. |
| EXPLAIN | Make the cause or concept understandable. |
| EVOLVE | Develop the system toward the next engineering stage. |
| VALIDATE | Check a result, test, evaluation, or evidence boundary. |
| REFLECT | Consolidate an Insight or help learners locate their practice. |
| TRANSITION | Connect the completed thought to the next problem or close. |

**Result: PASS.** All 21 sections have an instructional role in
[CURRICULUM_MATRIX.md](CURRICULUM_MATRIX.md).

### §124 — Story Coverage vs. Research Coverage

Research is wider than the learner-facing Story. Research evidence is used
only where it helps make a core claim more accurate or provides optional
depth; an unused claim remains in the Research foundation without being added
to fill curriculum time.

| Coverage | Claims / topics | Curriculum use |
|---|---|---|
| USED IN CORE | CLM-0001, CLM-0002, CLM-0005, CLM-0016, CLM-0017, CLM-0021, CLM-0023, CLM-0029, and provisional CLM-0030 | Training scope and sequence, AGENTS.md example, bounded model/system distinction, course-specific Loop and AI-Native models, and verification limits. CLM-0030 remains provisional under OQ-011. |
| USED AS SUPPORT | CLM-0006–0008, CLM-0014–0015, CLM-0020, CLM-0022; Skills, Subagent, Memory, Context, evaluation, and long-context research | Conditional product examples, advanced insight, and scope/evaluation caveats. Lost in the Middle remains brief supporting evidence, not a universal current-model claim. |
| NOT USED | CLM-0003–0004, CLM-0009–0013, CLM-0018–0019, CLM-0024–0028 | Governance, connector, data/security, workplace-productivity, benchmark-leaderboard, unverified-feature, company-policy, and unobserved-failure claims are not needed for this Curriculum. Keep their evidence/status in the Research files; do not add them solely for coverage. |

**Result: PASS.** The Curriculum uses the evidence needed for its Story and
leaves other Research available for later decisions or reference.

### §125 — Product Independence Check

| Hypothetical change | Does the Engineering Insight survive? | Delivery response |
|---|---|---|
| Codex UI changes shortly before training. | YES. Repository exploration, task specification, context relevance, verification, and feedback remain the learning sequence. | Recheck the current surface under OQ-003/OQ-005. Replace or shorten the product Demo with an approved recording, static trace, or conceptual visual; do not imply unsupported behavior. |
| A Skill or Subagent feature changes or is unavailable. | YES. Reusable work procedures and role/context separation remain engineering choices independent of a particular UI. | Use the workflow artifact or role diagram fallback. Keep current product behavior conditional and do not make either feature a required Harness component. |

**Result: PASS.** Product demonstrations illustrate the Story; the Story does
not depend on a particular interface or the continued availability of every
feature.

### §126 — Training-Repository Meta Example Candidate

| Candidate location | Candidate use | Evidence boundary |
|---|---|---|
| Context Engineering — ACT 2 | The planning repository's Source-of-Truth documents and routing guidance may illustrate separating authoritative plans from task context. | META EXAMPLE CANDIDATE only. Confirm the actual timeline and usefulness from repository history; do not claim an observed benefit without evidence. |
| Harness Engineering — ACT 3 | Later recurring Curriculum review or verification work may reveal a reusable process. | META EXAMPLE CANDIDATE only. No established Skill, Subagent, Memory, or automated Harness is claimed. |
| Loop Engineering — ACT 4 | Later repeated planning drift and an evaluated correction could become a supporting case. | META EXAMPLE CANDIDATE only. Current gate work is not evidence of recurrence or measured improvement. |

OQ-013 tracks whether actual project history eventually supports using a
candidate. Do not promote one into the Core Story or a Slide before reviewing
the history and evidence.

### §127 — Open Questions Update

No duplicate Open Question is added. Existing questions cover the unresolved
Curriculum, evidence, Demo, product, security, and later-slide choices:

| Existing question | Current scope |
|---|---|
| OQ-001 / OQ-002 / OQ-007 | Select the evolving Demo repository and permitted cases; define project-specific verification only after selection. |
| OQ-003 / OQ-005 / OQ-008 | Confirm target surface, access, current product behavior, and which feature examples are viable. |
| OQ-004 | User review of proposed ACT/mode allocation; later Demo runtime refinement without changing 360 minutes or the causal Story. |
| OQ-006 / OQ-011 | Preserve research scope and decide final course wording for Context, Harness, and Loop. |
| OQ-009 | Establish Loop recurrence and evaluation criteria from actual evidence. |
| OQ-010 | Set Slide Map and final deck details after planning and Demo decisions; PPT still requires separate instruction. |
| OQ-012 | Consider repository-specific Skills/Subagents/Memory only if real repeated friction occurs. |
| OQ-013 | Assess the candidate Meta Example against actual repository history. |
| OQ-014 | Confirm company data-use policy before company-specific guidance or internal/customer data use. |

**Result: PASS.** Decisions that cannot be resolved from Curriculum design
remain open with their existing dependencies and priorities.

### §128 — STEP 04 Decision Updates

The 360-minute ACT allocation and delivery-mode estimate did not change from
the initial baseline; DEC-0007 remains PROPOSED pending user review. A second
material curriculum proposal records four conditional Anchor Demo candidates,
keeps Subagents and Memory in supporting/visual roles, and places Lost in the
Middle as supporting evidence rather than a standalone feature or Research
chapter. See DEC-0008 in [DECISIONS.md](DECISIONS.md). No HARD or STRUCTURAL
invariant changed.

## STEP 04 Completion State

**Status: COMPLETE WITH OPEN QUESTIONS.** The curriculum quality and completion
checks pass. The remaining questions are explicitly recorded for their
appropriate later work; none requires inventing product behavior, repository
history, or Demo results to complete STEP 04. STEP 05 remains unstarted pending
a separate user instruction.
