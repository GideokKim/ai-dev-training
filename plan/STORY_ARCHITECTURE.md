# Detailed Story Architecture

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

## 이전 ACT 제목 슬라이드 — DEC-0090 (2026-10-25)

현재 **108장·396분(6시간36분)**. 각 ACT 시작에 승인된 한글 제목·부제1장을 넣는다.
기존102장의 내용·장별 시간/Mode·근거를 유지하고 제목6장에 Transition1분씩 추가한다.
ACT 장수14/22/19/19/19/15, 시간43/64/82/86/81/40분. Mode Lecture154/Demo73/
Case88/Reflection21/Transition28/Q&A32분. 새 제목은 S01/S15/S37/S56/S75/S94다.
제목은 주제만 안내하며 기존 첫 문제·질문·Demo를 대신 설명하지 않는다.
17개 팁 본문·배지와 마지막 팁 요약은 유지하며 현재 마지막 요약은 S105–S107이다.
본문 Template는 유지하고 제목 전용 T12-A를 추가해 **12Templates/28Variants**가 된다.
[제목 기준](ACT_TITLES.md), [102→108 번호](SLIDE_ID_MIGRATION_108.md), [Slide Map](SLIDE_MAP.md).
아래 이전 승인/검증 기록은 당시 판본이다. 실환경·제품/계정·리허설은 UNVERIFIED다.

## 이전 마지막 팁 요약 — DEC-0088 (2026-10-25)

현재 **102장·390분(6시간30분)**. ACT 중간의 제목/ID 찾아보기6장을 제거하고,
마지막 Q&A/Closing 바로 앞의 **S99–S101**로 통합했다. 기존 팁17장의 설명·배지와
99개 본문 장의 내용·장별 시간/Mode·근거는 유지한다. ACT 사이 설명은 바로 이어진다.
ACT 장수13/21/18/18/18/14, 시간42/63/81/85/80/39분. Mode Lecture154/Demo73/
Case88/Reflection21/Transition22/Q&A32분. 팁 요약3장만 Lecture1분씩 배정한다.
[팁 위치/분류](PRACTICAL_APPLICATION_TIPS.md), [105→102 이행표](SLIDE_ID_MIGRATION_102.md),
[현행 Slide Map](SLIDE_MAP.md)을 따른다. 아래 과거 승인/검증 기록은 당시 판본이다.
Windows·교육장·제품/계정·실측 리허설은 UNVERIFIED이며 새 Trial/성과는 없다.

## Historical application tips — DEC-0087 (2026-10-25)

현재105장·393분(6시간33분). 기존99장의 내용·장별 배정·근거 범위를 보존하고,
17개 적용 기준에 “실무 적용 팁” 공통 배지·분류를 붙였다. 각 ACT의 다음 문제·성찰·
마무리 앞에는 제목/ID 찾아보기1장·Lecture1분씩 추가한다. ACT 장수14/22/19/19/19/12,
시간43/64/82/86/81/37분. Mode157/73/88/21/22/32분. 새 제품 실행·Trial·검증 결과는 없다.
[팁 기준/목록](PRACTICAL_APPLICATION_TIPS.md), [현재99→105 이행표](SLIDE_ID_MIGRATION_105.md),
[현행 Slide Map](SLIDE_MAP.md)을 우선한다. 아래 이전 제작·Prototype·동결 기록의
번호/시간은 당시 판본이며 현행 근거 상태를 상향하지 않는다. 실환경·리허설은 UNVERIFIED다.

## Historical ACT0 sequence — DEC-0084

S05 결과→S06 근거→S07 별도 실행 오류→S08 필요한 Context→S09 사람의 전달
→S10 Agent의 허용된 조사→S11 Codex 진입→S12 접근과 의도→S13 다음 Task.
현재99장·387분 / ACT0 13장·42분. 이전 S08–S96은 S11–S99이며, 기존
Beat/Section/Demo/Trial/State IDs·11Template/27Variant·19Notes 필드를 유지한다.
이전 세 장의 Demo8분과 Case5분을 나누고 Lecture2분만 더했다. 새 Trial·복구·
우월성 측정은 없다. 아래 과거 설명/Prototype/검증 본문의 번호는 당시 판본이다.
[현재 설계](ACT0_CONTEXT_EXPANSION.md), [이행표](SLIDE_ID_MIGRATION_99.md),
[결과](../production/evaluation/ACT_0_CONTEXT_EXPANSION.md)를 우선한다.

## Historical ACT5 reassessment — DEC-0083

S90의 AI-Native 설계 관점 뒤에 S91 조건 변화에 따른 기존 Harness 재평가,
S92 유지·통합·제거 후보, S93 같은 대표 작업·기준으로 확인을 배치한다.
S88의 처음부터 도입하지 않은 판단과, 이미 쓰던 구조의 후속 재평가는 다르다.
이전 S91/S92/S93은 S94/S95/S96이며, 문제·다음 행동에 통합·제거 후보를 포함한다.
현재96장·385분 / ACT5 11장·36분. 기존 Slide별 시간·Mode와 Beat/Section/
Demo/Trial/State IDs는 유지한다.11Template/27Variant와19Notes 필드를 재사용한다.
[현재 설계](ACT5_HARNESS_REASSESSMENT.md), [번호 대조](SLIDE_ID_MIGRATION_96.md),
[로컬 검토](../production/evaluation/ACT_5_HARNESS_REASSESSMENT.md)를 기준으로 한다.
아래 이전 수정·Prototype·검증 본문은 당시 번호·범위의 이력이다.
새 Trial·측정 성과·Demo State를 추가하지 않는다. 발표 묶음은 갱신하지 않는다.

## Historical ACT5 refinement — DEC-0082

[ACT5_FLOW_REVISION](ACT5_FLOW_REVISION.md) aligns S86–S93 as distinct
journey/history/selection/acceptance/system-design/problem/action/closing
roles. S87 retains every named Product State in three chronological groups
and keeps conceptual/Meta Loop examples separate. S91→S92 uses the same
A–E problem/action correspondence plus a common evidence question. S93
closes with Chatbot→Prompt→Context→Harness→Loop. Preserve93/379, ACT5
8/30, all Slide budgets/Modes, stable IDs,11Templates/27Variants and all
evidence limits. Earlier literal screen/operation cues are historical where
they differ. ACT4's latest handoff remains DEC-0081.

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

## Current ACT3→ACT4 connection — DEC-0080

S67 closes location/maintenance ownership with recheck timing. S68 briefly
retains the observed success and opens maintenance; S69 connects reusable
Workflow to the role previously implemented as a Skill, without making the
conceptual case the same file/history. S70/S75 recover review/update roles.
S72→S73→S74 now means records to inspect→scenario information versus cause
hypothesis→response selection after assumed confirmation. S75 scopes human
update/review and S76 opens re-evaluation. S79 uses spaced, wrapped phases;
S65 is the environment preview and S80/S81 focus on evaluation/reporting.

Preserve93/379, ACT3 18/85, ACT4 18/80, every Slide time/Mode and stable IDs.
Template assignments S72=T08-C, S73=T08-C, S74=T08-B match redistributed
content; no Template/Variant is added. DEMO-11 remains S72 Demo2+S73 Demo1;
S74 stays Case2. Actual Product success, conceptual scenario and observed
Meta remain separate. Prior records below are history where literal current
cues differ. [Current connection design](ACT3_ACT4_HANDOFF_REVISION.md).

> 최신 ACT3 설명 순서: DEC-0062 / [ACT3 흐름 설계](ACT3_FLOW_REVISION.md). S50–S67의18장·85분과 장별 시간·Mode·ID는 유지한다. Skill 문서/관찰 대응, Subagent·Memory의 가정→현재 선택, 실제 구성→전체 작업 환경의 역할을 정렬했다. 아래 원본 기획·과거 검증 이력은 보존한다.
> **이전 기준: DEC-0087 /105장·393분(6시간33분,2026-10-25).** ACT 장수14/22/19/19/19/12, 시간43/64/82/86/81/37분. Mode Lecture157/Demo73/Case88/Reflection21/Transition22/Q&A32분. 기존99장의 배정을 보존하고6개의 찾아보기에 Lecture1분씩 추가했다. [팁 목록](PRACTICAL_APPLICATION_TIPS.md), [105장 이행표](SLIDE_ID_MIGRATION_105.md). 실환경·리허설은 UNVERIFIED다.

## 현행 제작 기준과 원본 기획의 관계

아래 본문은 원래 Curriculum/Story 설계와 단계별 승인 이력을 보존한다. 그 안의 이전 장수·시간·당시 Slide 번호를 최신 PPT 번호로 읽지 않는다. 현재 Slide별 배정은 SLIDE_MAP.md,96→99 대조는 SLIDE_ID_MIGRATION_99.md가 기준이다. Beat/Section/Demo/Trial ID와 문제 중심 진화는 유지한다. ACT2의11분·ACT5의6분 확장 뒤, DEC-0084에서 ACT0의 기존 설명을6장으로 풀고 Lecture2분을 더한다.

| ACT | 현행 범위 | 장수 | 분 |
|---|---|---:|---:|
| ACT0 | S01–S14 |14|43|
| ACT1 | S15–S36 |22|64|
| ACT2 | S37–S55 |19|82|
| ACT3 | S56–S79 |24|92|
| ACT4 | S80–S98 |19|81|
| ACT5 | S99–S113 |15|40|
| 합계 | S01–S113 |113|402|

## 보존된 기획 본문 / 이전 승인 이력

> Status: STEP 07 Story alignment and user gate resolution recorded through
> 2026-10-02. DEC-0007 is ACCEPTED with the 360-minute mode totals. The primary
> Product evidence ends at STATE-04-PERF; ACT 4 separates a conceptual
> stale-Harness case from an observed Training Production Meta Case. Older
> STEP 05/06 gates below are historical where their pending assumptions
> conflict with this current alignment.

## Purpose

This document bridges the six-hour Curriculum and the later Slide Map. It turns
the approved learning movement into one continuous Engineering Story and
preserves each Act's cause and effect so the Slide Map can group events without
inventing a new narrative. It is not a list of Slide titles, final slide
wording, Demo implementation, Speaker Notes, or a PPT.

The learner follows one ordinary software developer through an evolving
primary Product project. At each stage, a reasonable approach first helps.
Repetition, greater scope, or a project change then reveals a new friction.
Separately labeled conceptual and observed Meta cases support teaching without
extending the primary Product history.

## Story Principle

The learner sees how a developer's way of working can grow from asking a
chatbot a question to designing and improving a system for agent-assisted
development:

`Chatbot → Prompt → Context → Harness → Loop → AI-Native Development`

This is a problem-driven maturity story, not a feature sequence. The terms
appear only after the learner can see the problem they help address. Prompt,
Context, Harness, and Loop are expanding layers; later layers do not make
earlier ones obsolete.

The governing movement is:

`Current State → Attempt → Success → Scale → Friction → Question → Cause →
Engineering Response → Better State → New Problem`

## Protagonist

### Developer

The protagonist is a capable developer who has used ChatGPT for errors,
explanations, or small code questions, but has not systematically designed an
agent work system. Their choices make sense given the work in front of them.
The Story does not frame the developer as incompetent or careless.

## Project Evolution

The primary Product Demo follows its verified repository states:

`STATE-00 baseline + known crop bug → STATE-00-FIXED verified correction →
STATE-01 small root AGENTS.md → STATE-02 accurate but mixed-scope Context →
STATE-03 structured Context + routing → Benchmark preparation → STATE-04
repository-owned reusable Performance Skill → STATE-04-PERF verified,
evidence-based Product Change`

This observed Product history ends at `STATE-04-PERF`. The later Subagent and
Memory reviews are project-specific decision evidence, not new Product states.
Subagents and Memory remain conditional teaching choices. ACT 4's stale
workflow path is a separate conceptual controlled case; its observed Meta Case
comes from Training Production Trial history, not this Product repository.

### Coupled Evolution

Project complexity creates the reason for the developer's next shift. The
developer gradually delegates context discovery, specifies tasks, manages
reusable context, shapes work methods, and uses evidence to improve the system.
The developer retains goal-setting, judgment, risk assessment, verification,
review, and accountability throughout.

## Six-Act Event Architecture

The ACT durations below are approved in DEC-0007 and remain
40 / 55 / 70 / 85 / 80 / 30 minutes. Aggregate mode totals are Lecture 130,
Demo 73, Case 83, Reflection 20, Transition 22, and Q&A/Discussion 32 minutes.
STEP 08 will place Q&A near major transitions and the close, and reconcile
section-level Reflection and Transition placement. This Story table does not
assign Q&A to individual sections or Slides.

| Act | Story event | Initial approach and first value | Friction that earns the next step | Exit question |
|---|---|---|---|---|
| ACT 0 — 40 min | A familiar chatbot workflow meets a repository-wide question. The agent investigates available repository context and produces a useful bounded explanation. | Copying a small error or code fragment to ChatGPT is fast and useful. Repository exploration can move part of context gathering to an agent, subject to the selected surface and permissions. | The agent can inspect code but does not infer every unstated goal, boundary, or completion condition. | “같은 AI를 사용하는데 왜 사람마다 결과가 다를까?” |
| ACT 1 — 55 min | Repository access reveals a task-intent gap. The developer specifies a filter-performance task, investigates before editing, and sees a bounded prompt success. | Task-specific Goal, Context, Constraints, Process, and Verification make the requested work reviewable; investigation first is a reliable default, not a requirement for long planning on every small task. | Good task prompts still repeat build, test, API, and style information across Bug Fix, Performance, and Refactoring tasks. | “왜 나는 Project에 대해 똑같은 설명을 계속 하고 있지?” |
| ACT 2 — 70 min | Repeated Prompt context motivates `AGENTS.md`. Show its first bounded success before it grows; separate information by scope, treat `AGENTS.md` as a course-level Router pattern, and disclose only task-relevant context. | Reusable project rules and shorter task Prompts are a useful first improvement. Context Engineering then becomes information architecture: what stays core, where details live, and how a task can find them. | A relevant Context design still answers “what does the agent need to know?” It does not define “how should this work be performed?” | “Agent가 Project를 잘 이해하면 항상 같은 방식으로 잘 일할까?” |
| ACT 3 — 85 min | Use a labeled teaching model to expose process variation, then trace the recurring procedure in TRIAL-006/007 to the repository-owned Skill and its observed CLI use in TRIAL-008 and bounded STATE-04-PERF success. Audit whether current tasks justify Subagents; the review finds no, so present role separation as conditional. Audit Trial history for costly repeated discovery; no durable Memory candidate is justified. Connect the actual Project Context, routing, Skill, Benchmark, Tests, tools, and task Prompt boundary, then reveal the designed working environment and show the verified STATE-04-PERF result. | Minimum Effective Harness is an observed decision: the bounded Product change succeeds without Subagent or Memory. These are conditional mechanisms, not components to collect. | The working Harness is successful for this tested scope; a separate conceptual example asks how Project change could make an otherwise correct workflow stale. | “잘 만든 Harness가 Project 변화 뒤에도 계속 맞을까?” |
| ACT 4 — 80 min | Preserve two independent evidence paths. DEMO-04A is a labeled conceptual stale-Harness case: Project change → stale reusable workflow → friction → observation → cause hypothesis → scoped change → evaluation and regression check. DEMO-04B is the observed Meta timeline TRIAL-006 → DEC-0016 → TRIAL-007/008, showing a bounded change to Trial evaluation/reporting rules. Connect both through Execution → Observation → Cause → System Change → Re-evaluation, without claiming the conceptual case caused the Meta event. Recall the actual Minimum Effective Harness and distinguish Product Loop from Harness Improvement Loop. | Loop is feedback-based system improvement; automation and any particular mechanism remain optional. Evidence may be conceptual, observed, or partial, and its status must remain visible. | A passing check is bounded; a system change can overfit or affect another valid task. | “지금 자신의 업무에서 다음으로 바꿀 수 있는 것은 무엇인가?” |
| ACT 5 — 30 min | Recap the evolution and name the course's AI-Native Development teaching model. Make developer responsibility, Verification, the default task workflow, and the four Engineering layers visible as compact payoffs. Offer beginner and advanced perspectives within one Story, the seven Curriculum takeaways, and a private closing reflection. | The maturity path offers options without requiring every learner to adopt every mechanism. | A single adoption prescription would not fit the full range of learner starting points. | “현재 AI에게 어디까지 맡기고 있으며, 그 다음 단계에서 가장 먼저 바꿀 수 있는 것은 무엇인가?” |

The ACT 4 Beats elaborate the existing Curriculum sections for the Loop,
automation levels, cause analysis, and improving Context, Memory, Skills, and
delegation. They do not add minutes to the 80-minute Act. The observed Meta
example is supporting and remains subordinate to the Product Story. ACT 5's
responsibility, Verification, task
workflow, layer diagnosis, audience perspectives, takeaways, and reflection
are concise retrospective payoffs inside its existing two 15-minute sections;
they do not add minutes or new product demonstrations. If compression is
needed, remove duplicate examples before removing a protected takeaway or
responsibility boundary.

## Act 0 — Chatbot to Codex

**Starting State:** The developer asks ChatGPT about a code snippet or error
and manually chooses what context to paste.

**Key Events:** A project question crosses files. The developer would
otherwise search and carry context by hand. In a supported, permissioned
environment, Codex investigates a bounded repository question and explains
the relevant path.

**Success:** The developer sees the value of asking an agent to find available
repository context. The chatbot remains a useful tool for local questions.

**New Friction:** Repository access does not communicate the developer's
goal, scope, constraints, process, or completion evidence.

**Turning Point:** The first repository investigation succeeds; the remaining
variation is in what work the developer asked the agent to do.

**Insight:** The developer can bring AI to the repository, while remaining
responsible for task intent and judgment.

## Act 1 — Prompt Engineering

**Starting State:** The agent can inspect the repository, but a broad request
such as “optimize this code” leaves important intent unstated.

**Key Events:** The developer specifies Goal, relevant Context, Constraints,
Process, and Verification; requests investigation before changes; and sees a
bounded task succeed. Similar tasks then repeat project instructions.

**Success:** A well-scoped Prompt makes the work and completion conditions
more reviewable. Prompt Engineering has practical value at this stage.

**New Friction:** Build, Test, API, and Style information is repeated in
Bug Fix, Performance, and Refactoring Prompts.

**Turning Point:** Prompt success creates enough repeated work to ask which
information belongs beyond one task's instruction.

**Insight:** Prompt Engineering remains important; repeated project context
creates a separate organization problem.

## Act 2 — Context Engineering

**Starting State:** Reusable project facts are repeated across task Prompts.

**Key Events:** A concise `AGENTS.md` first reduces repetition. As project
rules and task types grow, information accumulates; a small task receives
irrelevant guidance. The developer separates, scopes, routes, and discloses
relevant Context while keeping research claims bounded.

**Success:** Project guidance can be reused, and task-relevant information can
be easier to find without repeating everything in every Prompt.

**New Friction:** The Agent may understand project information while still
performing the same kind of work inconsistently.

**Turning Point:** Better information organization does not define a repeatable
work method.

**Insight:** Context Engineering concerns what the Agent needs to know and
when it can find it, not maximizing context volume.

## Act 3 — Harness Engineering

**Starting State:** Project Context is better organized. A labeled model poses
process variation; TRIAL-006/007 record a recurring Performance procedure
before the repository-owned Skill and its bounded evidence are shown.

**Key Events:** A repository-owned Performance Skill supports a bounded task.
The Story then asks whether the current work justifies Subagents; the audited
Project tasks do not, because their independent Context needs are weak and
coordination overhead outweighs a demonstrated benefit. A Trial-history audit
classifies source facts, maintained documentation, reusable workflow, and
scoped observations; it finds no durable Memory candidate. The conditional
Subagent and Memory models remain available for different projects where
independent investigation or costly, reusable rediscovery is real. Tools and
Verification join the actual Project Context, routing, Skill, Benchmark,
Tests, and task Prompt boundary. The Harness is revealed as the designed
Project-level working environment, not a component checklist.

**Success:** The observed `STATE-04-PERF` product change passes the focused and
full Tests, Benchmark correctness guards, CLI smoke check, and diff review.
This is a Working Harness Success with no Subagent or Memory. The ACT 3 payoff
is Minimum Effective Harness: the smallest evidenced system was sufficient
for this bounded task.

**New Friction:** The demonstrated Harness remains successful in its tested
scope. A separate conceptual case asks how later Project change could make a
previously correct artifact stale; it is not the next state in the Product
Demo history.

**Turning Point:** The system view emerges after its actual parts and
conditional decisions have been examined.

**Insight:** Reliable agent work depends on intentionally designed working
conditions and checks; maturity is not the number of mechanisms installed.

## Act 4 — Loop Engineering

**Starting State:** The Product Demo is complete at `STATE-04-PERF`. ACT 4
keeps its conceptual teaching path separate from its observed production
history.

**Key Events:** DEMO-04A uses a conceptual controlled case: a justified
Project change leaves an old reusable workflow stale, exposing friction that
can be observed, diagnosed, addressed at the supported layer, and evaluated
with regression checks. It is not a Demo repository state or Trial. DEMO-04B
uses the actual supporting Meta Case `TRIAL-006 → DEC-0016 → TRIAL-007 /
TRIAL-008`: unexpected global-Harness presence limited attribution, evaluation
and reporting rules changed, and later evidence was recorded with remaining
partial limits. The two paths are not causally connected. The Story
distinguishes Product and Harness Improvement Loops, compares feedback
arrangements, treats Memory / Skill / delegation maintenance as conditional
teaching models, and recalls Minimum Effective Harness.

**Success:** Learners see a general feedback pattern grounded by one
conceptual illustration and one separately bounded observed Meta timeline.
Neither is presented as a measured Product or training-quality improvement.

**New Friction:** One passing check is bounded evidence; changes can overfit,
add irrelevant rules, or affect another valid task.

**Turning Point:** Execution, observation, cause analysis, system change, and
re-evaluation form a feedback pattern. Repetition and automation alone are not
a Loop.

**Insight:** Loop Engineering uses evidence to judge whether a Product,
Harness, or working method should change and what later evaluation can support.

## Act 5 — AI-Native Development

**Starting State:** The learner has seen the entire progression and may mistake
it for a mandate to automate everything or build every Harness component.

**Key Events:** The course recaps the path, developer-owned judgment and
responsibility, Verification and the task workflow, and Prompt / Context /
Harness / Loop as distinct problem lenses. A missed-Test example applies the
four lenses. Beginner and advanced perspectives offer different next moves
within the same Story. The course recalls Minimum Effective Harness as a
heuristic, then revisits the seven Curriculum takeaways and private reflection.

**Success:** Learners leave with one shared mental model and a next step that
fits their current practice, without a required response or feature checklist.

**New Friction:** None is introduced; this is a deliberate close, not a new
maturity stage.

**Turning Point:** The developer's work expands from directly gathering and
applying answers toward defining goals, designing agent work conditions, and
judging evidence, while retaining responsibility.

**Insight:** AI-Native Development is this course's operational teaching
model: developers design agent work environments and feedback systems while
retaining goal, judgment, verification, and responsibility. It is not a
universal industry maturity standard.

## Full Evolution

| Stage | System change | Friction carried into the next stage |
|---|---|---|
| Chatbot | Developer carries selected code and errors to ChatGPT. | Project context spans files and must be gathered. |
| Codex repository exploration | Agent investigates available repository context. | Access does not specify intent or success conditions. |
| Prompt | Task intent, constraints, process, and verification are stated. | Project facts repeat across tasks. |
| Context | Project information is reused, scoped, and routed. | Knowing the project does not standardize how work is performed. |
| Harness | The observed Project uses Context, routing, a reusable Skill, Benchmark, Tests, tools, and a task Prompt boundary; Subagent and Memory are considered but not selected. | A separate conceptual case shows how Project change could make an artifact stale. |
| Loop | A conceptual stale-Harness case and a separate observed Trial-evaluation Meta Case illustrate bounded feedback without causal conflation. | The developer still needs to choose goals, evidence, risks, and trade-offs. |
| AI-Native Development | Developer designs agent work conditions and feedback while retaining responsibility. | Deliberate course close; no further maturity stage is prescribed. |

The final synthesis can also be shown as `Question → Task → Context → System
→ Feedback Loop`. This is a teaching model that ties the whole Story together,
not a claim about a universal development process.

## Core Recurring Themes

| Theme | How it recurs through the Story |
|---|---|
| Verification | Completion expectations start in the Prompt, become project-aware through Context, enter the Harness workflow, and extend to evaluating Harness changes. `Generated ≠ Done` remains the boundary. |
| Context | The developer moves from manually supplying snippets to making relevant information available at the right scope and time, while keeping durable knowledge distinct from current Context. |
| Developer responsibility | Delegation can expand; the developer continues to own goals, requirement judgments, trade-offs, risk, verification criteria, result interpretation, final review, and accountability. |
| Failure | A plausible failure is a signal to observe and investigate, not proof of its cause or an excuse to ridicule the Agent. |
| Evaluation | Reruns and representative checks make bounded claims about outcomes; regression checks and limits remain visible. |

## Causal Story Pattern

Each major shift follows this sequence:

`Current State → Trigger → Reasonable Attempt → Initial Success → Scale or
Repetition → Friction or Failure → Question → Cause → Engineering Response →
Better State → New Problem`

The sequence does not require a failure at every beat. The first repository
exploration success is deliberately given room before the next limitation is
introduced. A candidate failure remains labeled as illustrative until it is
observed or reproduced; see `CLM-0027` and `INV-DEMO-003`.

## Time and Continuity

Use elapsed-work signals such as “처음에는”, “비슷한 작업을 반복하면서”,
“프로젝트 규칙이 늘어나면서”, and “프로젝트가 바뀐 뒤” to make scale and
time legible. Exact DAY / WEEK / MONTH labels are optional and should not imply
that a specific real project followed this chronology. Never make the entire
system appear in one task or one afternoon.

Keep one project and its conceptual history across the Acts. If a future Demo
uses a different artifact for a subcase, explain its relationship to the shared
project and keep it in a supporting role.

## Product and Evidence Boundaries

- Product behaviors, interface names, account access, permissions, and
  availability remain conditional on current official documentation and the
  eventual training environment (`OQ-003`, `OQ-005`).
- Repository exploration is bounded by the selected surface, workspace, and
  permissions; do not imply that ChatGPT's GitHub connector can edit or execute
  repository work (`CLM-0004`, `CLM-0009`).
- `AGENTS.md`, Skills, Subagents, and Memory are distinct mechanisms. None is
  a universal prerequisite, and Memory is not this project's Source of Truth
  (`CLM-0003`, `CLM-0005`–`CLM-0008`).
- `Lost in the Middle` supports a bounded context-placement caution for the
  studied tasks and models. It does not establish that current coding agents
  fail on middle context or that every long instruction file fails
  (`CLM-0014`, `CLM-0015`).
- Harness and AI-Native Development remain course models; Harness wording is
  still subject to `OQ-011` (`CLM-0030`, `CLM-0023`).
- Loop means feedback-driven system improvement, not automation alone. Any
  evaluation claim must state what the evidence checked and its limits
  (`CLM-0020`, `CLM-0021`, `CLM-0029`).
- No failure, history, or before/after improvement may be presented as an
  observed project event without evidence. Use a labeled illustrative or
  controlled case when appropriate.

## Ending State

At the end of the six hours, every learner should leave with the shared
mental model `Question → Task → Context → System → Feedback Loop` and the
understanding that AI use can develop into a designed engineering system.
Learners should distinguish an Agent's completion claim from verification
evidence and understand that developers retain engineering judgment and
responsibility.

The next step depends on the learner's current practice. A chatbot-centered
learner can begin with repository exploration, investigation before changes,
and a request for relevant verification. An experienced Agent user can inspect
Context freshness, Skill fit, delegation overhead, Memory reliability,
Verification, repeated failure, and system evaluation. Neither path requires
everyone to adopt every mechanism, and the private reflection requires no
answer or presentation.

## Quality Audits

### Full Story Read-through

The three Story documents were reviewed as one continuous instructor-led
experience, not as isolated outlines.

| Story movement | Beats | Read-through result |
|---|---|---|
| Familiar ChatGPT use → repository-context cost → bounded Codex exploration → task-intent gap → Prompt success | BEAT-001–007 | PASS: the familiar approach is useful first; repository access then exposes a separate intent problem. |
| Prompt success → repeated Project facts → useful `AGENTS.md` → accumulation and relevance → separation and routing success | BEAT-007–017 | PASS: the first reusable-context success precedes its scaling problem and a more relevant design. |
| Organized Context → reusable workflow / Skill → Subagent decision → Memory audit → Tools and Verification → Harness reveal → STATE-04-PERF | BEAT-018–037 | PASS: the observed path ends in Working Harness Success; Subagent and Memory remain conditional and are not added to the Product history. |
| Product success → separate conceptual stale-Harness case; observed Trial history → evaluation/reporting change → Loop synthesis → Minimum Effective Harness | BEAT-037–059 | PASS: conceptual and observed Meta paths are labeled separately and share only the general feedback pattern. |
| Loop synthesis → developer responsibility → shared layer map and audience next steps → seven takeaways → private reflection | BEAT-060–071 | PASS: the close recalls one shared Story and does not require feature adoption or public participation. |

**Current STEP 07 read-through result: PASS WITH BOUNDED EVIDENCE.** The
Product path ends at verified `STATE-04-PERF`. Subagent and Memory are
conditional decisions, DEMO-04A is conceptual, and DEMO-04B is a subordinate
observed Meta Case with partial attribution limits. No observed stale Product
failure or Product Loop is claimed.

### Why Now Audit

Each mechanism appears after its distinct problem is visible.

| Concept | Why it appears at this point | Beat path | Result |
|---|---|---|---|
| Prompt Engineering | Codex can inspect repository context but cannot infer the developer's unstated task intent, constraints, or completion evidence. | BEAT-003–007 | PASS |
| `AGENTS.md` | A clear Prompt works, then repeated Project facts create a reuse problem across tasks. | BEAT-007–010 | PASS |
| Context separation and routing | Learners first see a useful `AGENTS.md`, its growth, and a task-relevance problem; separation answers that problem. | BEAT-010–017 | PASS |
| Workflow / Skill | Relevant information is available. A labeled teaching model illustrates process variation; separate Trial records show a recurring Performance procedure and its reuse in a repository-owned Skill. | BEAT-017–022 | PASS |
| Role separation / Subagents | The actual Project audit finds no need; a conditional model explains what independent investigations, specialization, isolation, or parallel work could justify delegation elsewhere. | BEAT-023–027 | PASS WITH BOUNDED EVIDENCE |
| Memory / durable knowledge | Trial history is classified; no costly missing durable fact justifies Memory in the primary Project. A conditional retention gate and conceptual example preserve the general lesson. | BEAT-028–032 | PASS WITH BOUNDED EVIDENCE |
| Harness architecture | The observed Project-level working environment combines Context, routing, Skill, Benchmark, Tests, tools, and task Prompt boundary; Subagent and Memory are absent by decision. | BEAT-033–037 | PASS |
| Loop Engineering | After Product success, a separate conceptual stale-Harness path and an independent observed Trial-evaluation Meta Case show evidence-bounded feedback. | BEAT-038–051, 058–059 | PASS WITH EVIDENCE LABELS |
| Minimum Effective Harness | The observed STATE-04-PERF success without Subagent or Memory is the ACT 3 payoff; the course heuristic is recalled in ACT 4/5. | BEAT-027, 037, 057, 068–071 | PASS |
| AI-Native Development | The learner has seen the complete progression and can now interpret it as a course model while keeping developer responsibility. | BEAT-060–071 | PASS |

### Could We Stop Here? Audit

Every learner may stop at a useful stage when it fits the work they actually
do. Later stages address wider or recurring problem scopes; they are not
automatically better or a required implementation ladder.

| Useful stopping point | When it can be enough | Evidence in the Story |
|---|---|---|
| Prompt Engineering | A small or one-off task may need only a clear request, suitable investigation, and task-appropriate verification. | BEAT-005–007 |
| Reusable Project Context | Repeated Project facts may be the main friction; concise, relevant guidance can be a substantial improvement. | BEAT-009–017 |
| Reusable workflow / basic Harness | A team with a recurring procedure can benefit from a repeatable workflow and checks without adding every other mechanism. | BEAT-020–022, BEAT-033–037 |
| Role separation or Memory | Consider only when independent investigation or costly rediscovery has evidence; the current Project justified neither. | BEAT-023–032 |
| Feedback Loop | It matters most when agent-assisted work and its Harness are operated over time and recurring evidence can guide maintenance. | BEAT-038–057 |

**Result: PASS.** The Story presents higher stages as a broader scope of
problems that may need attention, not as a universal ranking of learners or
an instruction to install every component.

### Minimum Effective Harness Placement Audit

The Story seeds task-sized choices before it names the heuristic, then recalls
them in the close. `Minimum Effective Harness` is a course Engineering
heuristic, not an official product configuration or fixed component list.

| Early cue | How the Story limits scope | Beat |
|---|---|---|
| Prompt | Investigation and planning are useful defaults, not a long ritual for every small task. | BEAT-006–007 |
| Context | Relevance and timing matter; not every Project needs elaborate routing or all available information. | BEAT-012–017 |
| Subagents | The actual candidate-task audit did not justify a Subagent; the conditional model gives evidence and cost criteria. | BEAT-023–027 |
| Memory | Trial history yielded no qualifying durable candidate; a conditional retention gate covers reuse, provenance, scope, and freshness. | BEAT-028–032 |
| ACT 3 payoff | STATE-04-PERF succeeds with Project Context, routing, Skill, Benchmark, Tests, tools, and task Prompt boundary; Subagent and Memory are not needed. | BEAT-035–037 |
| Loop | Choose manual, assisted, or automated feedback to match the risk; not every failure needs automation. | BEAT-052–057 |
| ACT 4/5 callback | Recall the observed minimum system as a fit example, then let learners select their own next step. | BEAT-057, BEAT-068–071 |

**Result: PASS.** The heuristic first has an observed ACT 3 payoff and then
returns in ACT 4/5, without changing the seven approved Curriculum takeaways
or adding time to any Act.

### Story Rhythm Audit

The events mix useful progress with questions, discovery, and payoff rather
than repeating a problem followed by a lecture.

| Rhythm | Story examples | Function |
|---|---|---|
| SUCCESS | BEAT-001, 003, 007, 010, 022, 037 | Establishes that the current approach and its first improvement have real value. |
| SURPRISE | BEAT-011–012, 038–040, 050 | Shows Context growth and, in a separate conceptual case, how time or a local correction can expose maintenance friction. |
| QUESTION | BEAT-018, 023–024, 040, 066 | Gives learners a reason to ask before naming the next mechanism. |
| DISCOVERY | BEAT-019, 029, 043–045 | Distinguishes process from knowledge, current Context from Memory, and observation from cause. |
| IMPROVEMENT | BEAT-045–049, 054–057 | Teaches a conceptual scoped response, evaluation, regression check, and conditional maintenance choices. |
| PAYOFF | BEAT-035–037, 051–053, 060–071 | Reveals the Harness and Loop after their parts, then recalls the full journey. |
| CALLBACK | BEAT-010–012 → 050; BEAT-005/007 → 034/047–049; BEAT-031 → 032/054 | Reuses earlier ideas to make the system feel continuous. |

**Result: PASS.** Final visual pacing and Demo rhythm remain for the later
Slide Map and rehearsal; this audit adds no sections or minutes.

### Callback Audit

| Callback | Earlier idea | Return later | Narrative connection |
|---|---|---|---|
| Verification | Prompt names task-specific completion evidence. BEAT-005–007. | Harness workflow checks and bounded Harness result, then Loop evaluation and regression. BEAT-034–037, BEAT-047–049. | Verification expands with the system; it never becomes synonymous with an Agent's completion claim. |
| Context bloat | `AGENTS.md` first helps and then accumulates information for different tasks. BEAT-009–012. | Failure-specific additions can recreate irrelevant Context during system improvement. BEAT-050–051. | Loop maintenance can repeat the earlier problem if the cause is answered with an indiscriminate rule. |
| Context relevance | Separate and route the information a task needs. BEAT-012–017. | Subagents raise role-specific Context isolation; Loop diagnosis can improve the layer that caused the friction. BEAT-023–027, BEAT-043–046. | Relevance applies at task, role, and system-maintenance scope. |
| Memory lifecycle | The current Project has no justified Memory candidate; conditional retention criteria are taught. BEAT-028–032. | A separate conceptual maintenance case refreshes or retires stale knowledge. BEAT-054. | Reuse creates a freshness and ownership responsibility; no Memory use is claimed for the Product Demo. |
| Skill lifecycle | The repository-owned Skill supports the verified STATE-04-PERF change. BEAT-020–022, 037. | An incomplete Skill is a separate conceptual maintenance example. BEAT-055. | The observed Skill remains a success; do not imply that ACT 4 repaired or invalidated it. |
| Repository to work environment | The developer brings an agent to available repository context. BEAT-003. | The learner sees the broader design of the Agent's working conditions and retains responsibility. BEAT-035–037, BEAT-060–062. | The Story grows from context access to system design without claiming the Agent owns engineering judgment. |

**Result: PASS.** These callbacks connect the major changes. Product and Meta
claims are made only where their observed paths are recorded; separate
conceptual examples remain labeled as such.

### Story Demo Role and Evidence Extraction

This index reflects the STEP 07 evidence alignment. It records each path's
Story role and evidence boundary; it does not decide later Slide, Live, or
captured presentation details.

| Story path | Beats | Use and evidence boundary |
|---|---|---|
| Primary Product Demo | BEAT-003; BEAT-009–017; BEAT-020–022; BEAT-033–037 | Observed product evolution ends in Working Harness Success at `STATE-04-PERF`. |
| Conditional teaching models | BEAT-023–032; BEAT-054–056 | Actual audits defer Subagent and Memory; role separation, retention, and maintenance remain conditional models. |
| DEMO-04A conceptual case | BEAT-038–049 | Controlled stale-workflow teaching path; not Product repository or Trial history. |
| DEMO-04B observed Meta Case | BEAT-058–059 | Supporting Training Production evaluation/reporting timeline; preserve attribution limits and subordinate role. |
| Visual and recap material | BEAT-004–007; BEAT-011–017; BEAT-035–036; BEAT-043–045; BEAT-050–053; BEAT-060–070 | Prompt comparison, Context routing, system/Loop diagrams, cause-to-layer map, automation choices, and final synthesis. |
| DO NOT DEMO | Beats marked `NONE`, especially BEAT-067–068 and BEAT-071 | Keep diagnostic questions and private audience reflection as explanation or reflection; do not invent a product interaction to fill time. |

Exact product-surface availability outside the observed run and presentation
format remain under the existing OQs. No Slide Map, Speaker Notes, PPT, or Demo
repository change is created by this index.

### STEP 05 Interim Gate (§100)

This is the pre-implementation gate recorded before STEP 06/07. Its pending
repository and evidence statements are historical where they differ from the
current alignment below.

| Gate | Result | Evidence or remaining boundary |
|---|---|---|
| One Developer and one evolving Project | PASS | Architecture and Beats follow the same illustrative project; its identity remains open. |
| Problem precedes each major solution | PASS | TRANS records give the problem and audience question before the reveal. |
| Solutions show an initial success before the next friction | PASS WITH DEMO GATE | Success states are explicit Story outcomes; observed or reproduced results are not claimed until Demo evidence exists. |
| Chatbot → Codex → Prompt → Context → Harness → Loop | PASS | The top-level order remains protected; AI-Native Development is the retrospective close. |
| `AGENTS.md` is useful before its limits appear | PASS | BEAT-009–010 success precedes accumulation and relevance. |
| Separation follows Context success and growth | PASS | BEAT-010–017 carries initial benefit, accumulation, relevance, routing, and bounded success. |
| Skill, Subagent, and Memory follow evidenced problems | PASS | The Skill follows workflow repetition; current task and Trial audits defer Subagent and Memory, while conditional models explain their decision gates. |
| Harness reveal follows its component problems and success | PASS | BEAT-033–037 connects the parts before the architecture reveal and bounded task. |
| Harness success precedes a separately labeled staleness case | PASS | `STATE-04-PERF` is observed success; BEAT-038–049 is explicitly conceptual; observed Meta evidence is separate in BEAT-058–059. |
| Evaluation and regression follow a system change | PASS | BEAT-045–049 requires rerun, representative evaluation, and regression checking. |
| Minimum Effective Harness guards against overengineering | PASS | Early cues and final recall are mapped above; no fixed feature list is prescribed. |
| Beginners and advanced users share the Story | PASS | Audience Audit and BEAT-068–069 layer next steps without separate tracks. |
| Product claims fit Research | PASS WITH RECHECK | Product behavior remains conditional and must be rechecked for the selected surface under OQ-003/OQ-005. |
| Demo repository, Slide Map, Speaker Notes, PPT remain unproduced | PASS FOR THIS GATE | These deliverables remain outside this Story step; the separate PPT authorization still applies. |

**Interim result: PASS WITH EVIDENCE GATES.** This is not the final STEP 05
quality audit or STEP 05 completion. The remaining work and OQ owners are
listed below.

### Beat Granularity and Causality Audit

A Beat is warranted when an event changes learner understanding or changes
the state of the developer, Agent, or Project in a way that matters to the
Story. A label such as “Context Engineering” is too broad: repeated Prompt
context, initial `AGENTS.md` success, accumulation, relevance, separation,
routing, and the process friction that follows are separate changes in
understanding. By contrast, “the Agent reads the next file” is a Demo detail
unless it changes what the learner understands or what the system can do.

The 71 Beats are divided around those meaningful shifts. The granularity
review passes: no Act is collapsed into one concept Beat, and individual
repository actions remain inside a Beat unless they change the Story state.

| Causal handoff | Why the next Beat follows | Audit result |
|---|---|---|
| BEAT-008 → 010 → 011 | Repeated Project facts motivate reusable guidance; its first success makes adding more guidance reasonable, which creates accumulation. | PASS: the solution's success contributes to the next friction. |
| BEAT-014 → 017 → 018 | Separation and routing make relevant Context easier to find; after that success, repeated work procedures remain a distinct unresolved problem. | PASS: Context success is preserved before Process friction. |
| BEAT-020 → 022 → 023 | Trial records establish procedure recurrence, TRIAL-008 observes repository Skill invocation, and STATE-04-PERF records bounded success before the project-specific role-need audit. | PASS: evidence roles are bounded and the audit finds Subagents are not justified in the current Project. |
| BEAT-023 → 027 → 028 | A project-specific audit defers Subagents, conditional role separation remains teachable, and Trial history is separately audited for durable knowledge. | PASS: neither mechanism is asserted as a primary Product state. |
| BEAT-030 → 037 → 038 | Conditional Memory criteria, tools, and checks lead to observed `STATE-04-PERF` success; a separate conceptual case then asks about later staleness. | PASS: no actual Product failure is inferred. |
| BEAT-038 → 051 | The conceptual case shows a stale workflow, local recovery, controlled recurrence, analysis, change, evaluation, and regression before the Loop is named. | PASS: every event is labeled conceptual, not observed Product history. |

The causal review checks that a new problem comes from scale, repetition,
complexity, or change in the same evolving Project. It does not require every
transition to contain a failure; several transitions follow a useful success
that exposes the next boundary.

### Transition Quality Audit

The major transitions are detailed and assigned stable IDs in
[TRANSITIONS.md](TRANSITIONS.md). Each is checked for prior value, a new
friction caused by scale, repetition, or change, an intuitive question before
the next term, a plausible engineering response, and an evidence / fairness
guardrail.

| Transition range | Audit result | Remaining gate |
|---|---|---|
| `TRANS-001`–`TRANS-003` — Chatbot → Codex → Prompt → Context | PASS: useful earlier methods remain useful; each next problem is distinct. | Repository surface and any displayed outcomes remain conditional. |
| `TRANS-004`–`TRANS-006` — AGENTS.md → separation; Context → Harness; Workflow → Skill | PASS: initial success precedes accumulation or workflow friction. | Keep the Skills product mechanism conditional and use a conceptual fallback if unavailable. |
| `TRANS-007`–`TRANS-009` — delegation decision; Memory audit; actual Harness reveal | PASS: current audits justify neither Subagent nor Memory; conditional models remain. | Do not claim speed gains or imply the component list is mandatory. |
| `TRANS-010`–`TRANS-012` — conceptual staleness + observed Meta feedback → Loop → AI-Native | PASS: both evidence paths and their limits are explicit. | Do not merge the two paths or claim Product-loop evidence. |

**Result: PASS WITH EVIDENCE GATES.** No transition needs a new failure
manufactured solely to justify the next concept. Preserve the earlier
approach's initial success and show the problem before naming a response.

### Failure and Scenario Evidence Audit

| Case | Story status | Teaching and evidence boundary |
|---|---|---|---|
| `DEMO-04A`: project change leaves a reusable workflow stale | Selected as a conceptual controlled case in BEAT-038–049. | It is not a Product State, Trial, or observed recurrence. A later Demo-design step may choose its visual or controlled presentation. |
| A retained fact conflicts with the current Project source | Conceptual Memory-maintenance example in BEAT-054; no such primary-Demo event occurred. | Compare with the canonical source; do not claim actual Memory use or failure. |
| A Performance Skill omits a baseline | Conceptual workflow-maintenance example in BEAT-055; the observed primary Skill remains a success. | Do not imply the primary Skill was incomplete or claim an unmeasured performance gain. |
| A fixed Subagent set runs for a small task | Conceptual task-sizing model in BEAT-056; the actual audit deferred Subagents. | Explain possible duplication and coordination; claim no measured cost or latency. |
| An Agent fails to run a Test correctly | Diagnostic teaching example in BEAT-066; no cause is asserted. | Use four diagnostic lenses without staging a product failure or inventing its cause. |
| A later task repeats a stale-workflow correction | Part of the labeled conceptual recurrence in DEMO-04A, not observed primary-Product history. | Do not present the recurrence as a Trial or as evidence that a Product Loop occurred. |

**Result: PASS WITH EVIDENCE LABELS.** The Story defines which examples are
conceptual and which history is observed. Later Demo design may choose how to
present a case, but must preserve its evidence type and claim limits.

### Success Realism Audit

| Success shown | Bounded claim | Do not claim |
|---|---|---|
| Chatbot answers a local question | A supplied snippet can support a bounded question. | Chatbot use is wrong or useless. |
| Repository exploration | A supported agent surface can investigate available repository context for a bounded task. | Every surface can edit / execute, infer intent, or inspect inaccessible files. |
| Prompt and project guidance | Explicit scope and reusable facts can address the specific repetition or ambiguity shown. | A Prompt or `AGENTS.md` guarantees correctness or perfect project understanding. |
| Workflow, Skill, and Subagent | A procedure or role split can structure selected work where supported. | Reuse guarantees identical results, or delegation guarantees speed. |
| Memory and Harness | Retained knowledge or a work system can support later tasks while accurate and appropriately scoped. | Memory remembers everything, or a Harness eliminates future failures. |
| Loop improvement | Evaluation may support keeping, refining, or reverting a change for the tested scope. | A single pass proves quality, the model learned automatically, or the system improves itself without judgment. |

**Result: PASS WITH BOUNDED CLAIMS.** All later Demo successes require
recorded outcomes, a clearly labeled controlled scenario, or a visual case.

### Story Evidence Audit

| Evidence class | Story use | Required boundary |
|---|---|---|
| Factual product behavior | Codex repository work, `AGENTS.md`, Skills, Subagents, Memory, execution surfaces | Cite and recheck current official sources for the selected product surface; preserve `OQ-003` / `OQ-005` scope. |
| Academic claim | Long-context position effects and related research | Keep conditions and limits visible; no general claim that current coding agents fail on middle context. |
| Teaching model | AI-Native Development, the maturity sequence, and the course's Loop wording | Label as this course's operational model, not industry consensus or product behavior (`OQ-011`). |
| Demo observation | Specific agent action, failure, recurrence, or before/after result | Use actual logs / artifacts or label the state as controlled / illustrative; never invent history. |
| Engineering heuristic | Minimum Effective Harness and task-sized mechanism choices | Label as a project heuristic; avoid universal thresholds or feature checklists. |

**Result: PASS WITH BOUNDED EVIDENCE.** The primary Product path and observed
Meta timeline are tied to recorded evidence in `STORY_BEATS.md`. Product
availability or behavior beyond the observed run remains conditional under
`OQ-003` / `OQ-005`.

### Audience Audit

| Act | Beginner read-through | Advanced read-through | Guardrail |
|---|---|---|---|
| ACT 0 | Starts from the familiar act of asking about an error and collecting code. | Examines the boundary between asking and delegating repository investigation. | Explain repository exploration plainly and condition it on surface / permission. |
| ACT 1 | Uses an ordinary broad request to reveal missing task details. | Adds scope, trade-offs, completion evidence, and investigation-first reasoning. | Do not turn the opening into evaluation theory or make every task require long planning. |
| ACT 2 | Shows why project rules are repeated, then why relevance matters. | Adds routing, scope, timing, and bounded long-context evidence. | Explain Context before specialist terms; do not prescribe an instruction-file size. |
| ACT 3 | Follows the reusable Performance workflow, then audits whether Subagents or Memory solve a demonstrated Project problem; neither is justified here. | Examines conditional role/context isolation, retention criteria, verification, and system fit. | The actual Harness succeeds without Subagent or Memory; teach both as problem-specific choices. |
| ACT 4 | Sees a labeled conceptual stale-Harness path and a separate observed Trial-evaluation Meta path. | Examines evaluation scope, regression, overfitting, maintenance, and feedback design. | Never present the conceptual path as actual history or Meta history as Product change. |
| ACT 5 | Leaves with one small next step and no adoption mandate. | Leaves with Agent System Reliability questions and a system-level review lens. | Keep both perspectives in one shared Story; do not split learners into tracks. |

**Result: PASS.** Each Act has an intuitive entry for beginners and an
engineering insight for experienced users. Technical depth is layered after
the observable problem rather than used as a prerequisite.

### Story Compression Test

The full Story compresses to this sentence without losing its direction:

> 개발자가 AI에게 질문하는 것에서 시작해, 반복되는 실제 개발 문제를
> 해결하면서 Prompt → Context → Harness → Loop로 AI 활용 환경을
> 점진적으로 Engineering한다.

| Act | One-sentence focus |
|---|---|
| ACT 0 | AI에게 코드를 가져가는 방식에서 AI를 Repository로 데려가는 방식으로. |
| ACT 1 | 모호한 요청에서 명확한 Task Specification으로. |
| ACT 2 | 반복 설명에서 필요한 Context를 설계하는 방식으로. |
| ACT 3 | Agent에게 정보를 주는 것에서 Agent가 일할 System을 만드는 방식으로. |
| ACT 4 | 현재 Failure를 고치는 것에서 Failure로 System을 개선하는 방식으로. |
| ACT 5 | AI Tool 사용에서 AI-Native Development Mental Model로. |

**Result: PASS.** The subordinate observed Meta Case in BEAT-058–059 supports
the core Story without extending the Product Demo or becoming a required
Product event. No other Beat falls outside the compressed narrative.

### Story Expansion Test

The narrative keeps the causal steps that would disappear in a feature-list
summary.

| Required transition | Preserved connective events | Beats | Result |
|---|---|---|---|
| Prompt → `AGENTS.md` | Prompt succeeds; repeated Project facts appear across later tasks before reusable guidance is introduced. | BEAT-007–009 | PASS |
| `AGENTS.md` → Context separation | Initial reuse succeeds; rules accumulate; a small task exposes relevance and maintenance; separation and routing then help. | BEAT-009–017 | PASS |
| Context → Skill | Organized Context is useful, but work procedure still varies and repeats before a Workflow / Skill is introduced. | BEAT-017–022 | PASS |
| Workflow → delegation decision | The reusable workflow succeeds; an audit then finds that current Project tasks fit one Agent, while a separate model defines when role separation could help. | BEAT-022–027 | PASS WITH BOUNDED EVIDENCE |
| Subagent decision → Memory audit | After Subagents are deferred, Trial history is classified; it reveals no costly missing durable fact. A conditional retention gate follows. | BEAT-023–032 | PASS WITH BOUNDED EVIDENCE |
| Harness → Loop | The Product Harness succeeds; a separate conceptual stale-workflow path and an independent observed Meta evaluation path feed a shared feedback model. | BEAT-037–059 | PASS WITH EVIDENCE LABELS |

**Result: PASS WITH BOUNDED EVIDENCE.** No listed transition is compressed to
an unexplained jump or treated as a Product event without evidence.

### Emotional and Cognitive Journey Audit

Expected reactions are recognition and insight, not staged drama.

| Expected learner response | Story evidence | Result |
|---|---|---|
| “나도 이렇게 쓰는데.” | Familiar chatbot workflow and private self-location. BEAT-001. | PASS |
| “이런 것도 맡길 수 있구나.” | Bounded repository investigation and first useful result. BEAT-002–003. | PASS WITH DEMO GATE |
| “이건 내일부터 써먹겠다.” | Task specification and investigation-first workflow. BEAT-005–007. | PASS |
| “매번 설명할 필요가 없네.” | Reused project guidance works before it grows. BEAT-009–010. | PASS WITH DEMO GATE |
| “나도 비슷하게 다 넣고 있었는데.” | Accumulation makes relevance and maintenance visible. BEAT-011–016. | PASS; keep the example domain-neutral. |
| “작업 방법 자체를 재사용할 수 있네.” | The repository-owned Performance Skill supports the observed recurring workflow and its checks. BEAT-020–022. | PASS FOR PRIMARY DEMO; broader product availability remains conditional |
| “복잡해 보여도 역할을 나눌 필요가 있는지 따져야 하는구나.” | The actual candidate-task audit defers Subagents; a separate model names the conditions and costs for delegation. BEAT-023–027. | PASS WITH BOUNDED EVIDENCE |
| “반복된 정보라고 모두 Memory에 넣을 필요는 없구나.” | Trial history is classified by source and purpose; no costly missing durable fact is found, then a conditional retention gate is taught. BEAT-028–032. | PASS WITH BOUNDED EVIDENCE |
| “이게 하나의 System이구나.” | The Harness emerges after its parts have solved distinct problems. BEAT-033–037. | PASS |
| “이것도 관리해야 하는구나.” | Project change makes a useful artifact potentially stale. BEAT-038–041. | PASS WITH DEMO GATE |
| “실패 자체를 System 개선에 쓸 수 있네.” | Observation and cause hypothesis lead to scoped change and bounded evaluation. BEAT-042–051. | PASS WITH DEMO GATE |
| “내가 지금 어디 있고 다음에 뭘 할지 알겠다.” | Shared recap, fitting next steps, takeaways, and private reflection. BEAT-060–071. | PASS |

### Too-convenient Story and Domain Neutrality Audit

| Risk | Audit and treatment | Result |
|---|---|---|
| Subagents appear as an inevitable next feature. | BEAT-023 records the actual no-need audit; BEAT-024–026 teach a separate conditional role model. | PASS |
| Memory appears because Trial information repeats. | BEAT-028 classifies Trial history and finds no missing durable candidate; BEAT-030–032 retain only a conditional teaching model. | PASS |
| Stale Harness appears as later Product history. | BEAT-038–049 are the separately labeled conceptual DEMO-04A case; STATE-04-PERF remains the Product endpoint. | PASS |
| The observed Meta Case is used to prove a Product change. | BEAT-058–059 keep TRIAL-006 → DEC-0016 → TRIAL-007/008 in Training Production evaluation/reporting. | PASS |
| A failure is arranged to force a feature. | DEMO-04A and ACT 4 maintenance examples are labeled conceptual; the independent observed Meta Case preserves its attribution limits. | PASS WITH EVIDENCE LABELS |
| The Story assumes GPU expertise. | The Story uses general software concerns: modules, call paths, bug fixes, performance, tests, benchmarks, build workflows, and architecture. A context-bloat example uses generic performance guidance, not a specialized algorithm. | PASS |

### Primary Product Evidence Boundary Check

STEP 06/07 selected and validated the sibling Demo repository. The primary
Product Story ends at `STATE-04-PERF`; it does not extend into the ACT 4
stale-Harness case.

| Observed Product path | Story role | Boundary |
|---|---|---|
| `STATE-00` → `STATE-00-FIXED` | Known crop bug and verified `Investigate → Plan → Implement → Verify → Review` correction. | Preserve the original baseline and fix evidence. |
| `STATE-01` → `STATE-02` → `STATE-03` | Small root instructions, accurate but mixed-scope Context, then structured Context and routing. | No claim of perfect retrieval or measured efficiency. |
| Benchmark preparation → `STATE-04` | Reusable, repository-owned Performance Skill. | A repeated workflow need, not Memory evidence. |
| `STATE-04-PERF` | Skill-supported, evidence-based Product Change and Working Harness Success. | Bounded Tests, benchmark guards, CLI smoke, and diff review; no Subagent or Memory. |
| `BEAT-038–049` / DEMO-04A | Conceptual controlled stale-Harness path. | No Product State, Trial, or observed recurrence. |
| `BEAT-058–059` / DEMO-04B | Observed Training Production Meta Case. | Trial evaluation/reporting change; not Demo Product code or Skill repair. |

**Result: PASS.** The continuous Product Demo, conceptual teaching case, and
observed Meta Case have distinct evidence labels and roles. No repository
selection or post-STATE-04-PERF Product change is pending in this Story step.

### Story Fact and Model Labels; Research Conflict Recheck

Use an explicit label only where a reader could confuse product fact, a
planned scenario, an observation, or a course model.

| Label | Use in this Story |
|---|---|
| FACT | A sourced, current product or research statement within its recorded scope. Product behavior remains conditional on the target surface and must be rechecked under `OQ-003` / `OQ-005`. |
| OBSERVED_PRODUCT | Recorded Demo repository states and Trial results through `STATE-04-PERF`; no post-endpoint Product state is claimed. |
| OBSERVED_META | Recorded Training Production Trial-evaluation/reporting history; keep it supporting-only and bounded. |
| CONCEPTUAL | DEMO-04A and its stale-workflow chain; never present it as observed Product or Trial history. |
| DEMO ASSUMPTION | A controlled or illustrative scenario; label it and keep it outside recorded repository chronology. |
| OBSERVATION | Reserve for an actual recorded action or output; report attribution limits and unknowns. |
| TEACHING MODEL | The maturity sequence, Context Router pattern, Harness / Loop framing, and AI-Native Development are course operational models, not official product taxonomies. See `OQ-011`. |
| HEURISTIC | Minimum Effective Harness is a project heuristic for sizing a response to real recurring friction, not a universal threshold or required configuration. |

| Research-sensitive area | Story boundary checked | Result |
|---|---|---|
| `AGENTS.md` support and scope | Product documentation is cited for supported instruction discovery; the Story does not claim perfect understanding, replacement of `plan/` Source of Truth, or universal availability. | NO CONFLICT FOUND; recheck target environment. |
| Skills | TRIAL-008 observed explicit repository-Skill discovery and invocation in Codex CLI 0.154.0; Codex Desktop and broader behavior remain unverified. | NO CONFLICT FOUND; `OQ-005` / `OQ-008` remain open. |
| Subagents | Role separation is introduced before the feature; coordination, duplication, transfer, and integration costs are explicit; no speed promise. | NO CONFLICT FOUND; `OQ-005` / `OQ-008` remain open. |
| Memory | Product Memory is separated from current Context and canonical project Source of Truth; durable-knowledge pattern remains broader than one product feature. | NO CONFLICT FOUND; `OQ-005` / `OQ-008` remain open. |
| `Lost in the Middle` | Used only as bounded supporting evidence for studied long-context tasks; it does not establish a current Codex or `AGENTS.md` failure. | NO CONFLICT FOUND; preserve `OQ-006` limits. |
| Harness and Loop Engineering | Course operational models are distinguished from official product terms and universal industry consensus. | NO CONFLICT FOUND; final wording remains subject to `OQ-011`. |
| AI-Native Development | Labeled as the course's teaching model; developer judgment and responsibility remain. | NO CONFLICT FOUND. |

**Result: NO STEP 03 RESEARCH CONFLICT FOUND IN THE CURRENT STORY DRAFT.**
This is a scope recheck of the project Research artifacts, not fresh evidence
that product access or Demo outcomes are available.

### Story Drift Audit

| Drift signal | Status | Story evidence / guardrail |
|---|---|---|
| Product feature explanation grows larger than the Story | PASS | Product mechanisms follow a learner problem and remain conditional. |
| Too many Prompt examples | PASS | One task carries the checklist and investigation-first value; more variants are not required. |
| `AGENTS.md` becomes the center of the course | PASS | It is one useful ACT 2 response with growth, relevance, and routing limits. |
| Context Engineering becomes file-splitting technique | PASS | Relevance, timing, routing, and Progressive Disclosure lead the section. |
| Harness becomes a feature checklist | PASS | The need for methods, tools, environment, and checks is established before the architecture reveal. |
| Subagent becomes an advanced feature showcase | PASS | The actual no-need audit precedes a separate conditional role/Context model and its costs. |
| Memory is confused with a product feature or Source of Truth | PASS | Current Context, durable knowledge, product Memory, and canonical project plans are distinguished. |
| Loop is reduced to automation | PASS | Product Loop and Harness Improvement Loop are distinct; automation is a risk-shaped option. |
| Beginner simplicity removes Harness / Loop insight | PASS | Shared story retains system design, evaluation, and maintenance with layered entry points. |
| Advanced depth makes ACT 0 too technical | PASS | Advanced context-cost insight is an optional layer on a familiar opening. |
| Failure is made unrealistic for a Demo | PASS WITH EVIDENCE LABELS | DEMO-04A and ACT 4 maintenance examples are conceptual; the independent observed Meta Case preserves its attribution limits. |
| Completed Harness appears too early | PASS | Full reveal follows Context, Workflow, conditional role/Memory models, Tools, and Verification. |
| Product feature change would collapse the Story | PASS | The Engineering problem and product-independent fallbacks carry the narrative. |

### Story Beat Coverage Audit

All listed STEP 05 events have at least one Beat. The counts describe the
current Story structure, not a Slide estimate.

| Act | Beat range | Count | Coverage summary |
|---|---:|---:|---|
| ACT 0 — Chatbot and Repository Exploration | BEAT-001–003 | 3 | ChatGPT workflow, developer-supplied context, repository-level problem, bounded Codex investigation, first success. |
| ACT 1 — Prompt as Task Specification | BEAT-004–007 | 4 | Intent gap, structured Prompt, investigate first, bounded Prompt success, repeated Project context. |
| ACT 2 — Project Context and Relevance | BEAT-008–017 | 10 | `AGENTS.md` introduction and success, accumulation, relevance, bounded research, separation, Router, Progressive Disclosure, Context success. |
| ACT 3 — Harness as a Designed Work System | BEAT-018–037 | 20 | Process inconsistency, workflow / Skill and success, actual Subagent decision and conditional model, Trial-history Memory audit and conditional lifecycle, Tools, Verification, Harness reveal, and observed Product success. |
| ACT 4 — Loop and System Improvement | BEAT-038–059 | 22 | Labeled conceptual stale-workflow case and correction cycle, independent observed Meta evaluation/reporting history, shared feedback pattern, maintenance models, regression, bloat callback, and Minimum Effective Harness callback. |
| ACT 5 — AI-Native Development and Learner Reflection | BEAT-060–071 | 12 | Full recap, course model, responsibility, Verification and task workflow payoffs, four-layer diagnosis, audience next steps, takeaways, private reflection. |
| TOTAL | BEAT-001–071 | 71 | Each Beat records the requested schema; no target Beat count is imposed. |

### Story Invariant Mapping

Meaningful story regions connect to their governing Invariants without
assigning an ID mechanically to every Beat.

| Story region | Related Invariants | Guardrail carried into the Story |
|---|---|---|
| Shared audience and Chatbot → Codex | `INV-IDENTITY-001`, `INV-AUDIENCE-001`, `INV-NARRATIVE-001–002`, `INV-DIFFICULTY-001` | Familiar entry, one Story, problem before mechanism. |
| Prompt and task workflow | `INV-MATURITY-001`, `INV-MATURITY-011`, `INV-LEARNING-001`, `INV-VERIFY-001` | Prompt remains useful; task execution is not the maturity sequence; evidence matters. |
| Context and `AGENTS.md` | `INV-MATURITY-002–004`, `INV-LEARNING-003` | Initial benefit before limits; relevance, freshness, routing, and timing. |
| Harness elements and reveal | `INV-MATURITY-005–009`, `INV-VERIFY-001` | Mechanisms follow real needs; Skills, Subagents, and Memory remain optional; reveal is bottom-up. |
| Harness staleness and Loop | `INV-MATURITY-010`, `INV-LOOP-001`, `INV-DEMO-002`, `INV-VERIFY-001` | Change and recurrence precede cause analysis; evaluate and check regression. |
| Final audience choices and responsibility | `INV-DIFFICULTY-001–002`, `INV-RESPONSIBILITY-001`, `INV-LEARNING-003` | One shared path; no adoption mandate; developer retains judgment and accountability. |

### Story Language Guidelines

Use a curious, nonjudgmental engineering tone. Useful connective phrases
include: “왜 이런 문제가 생겼을까요?”, “처음에는 잘 동작합니다.”,
“사용 범위가 커지면 어떤 문제가 보일까요?”, “정보의 문제가 아니라
작업 방법의 문제일 수 있습니다.”, and “현재 Task를 고치는 것과 System을
고치는 것은 다릅니다.”

Avoid describing beginners as wrong, calling a useful earlier method a
failure, presenting `AGENTS.md` as inherently bad, promising that Subagents
always help, saying Memory remembers everything, or claiming a Loop makes AI
self-improve. These phrases guide later Slides and Speaker Notes; neither is
created here.

## Historical STEP 06 Demo Architecture Input Package

This was the pre-implementation handoff. STEP 06 later selected and validated
`ai-dev-training-demo`; STEP 07 aligned the Story to the recorded outcomes.
The candidate and open-gate text below is retained as design history only and
is superseded where it conflicts with the current alignment recorded at the
end of this document.

### A. Primary Demo Story Requirements

Prefer one understandable software Project whose evolution can carry the
central Story: a task moves from a small question to recurring code work,
reusable Project context, a repeated workflow, multiple related modules, and
eventual Project / workflow change. The Demo should answer a Story question,
show bounded evidence, and leave the next friction visible.

### B. Anchor Demo Candidates

The four grouped candidates from `DEC-0008` remain `PROPOSED`:

1. ACT 0 — Read-only repository exploration (BEAT-002–003).
2. ACT 2 — Repeated Prompt context to useful project guidance, then relevance
   and routing (BEAT-008–017).
3. ACT 3 — A repeated workflow with visible verification and bounded success
   (BEAT-020–022).
4. ACT 4 — A labeled stale-artifact case through cause analysis, scoped change,
   rerun, evaluation, and regression check (BEAT-039–049).

They are transition candidates, not a requirement for one live Demo per Beat.

### C–D. Supporting and Visual-only Candidates

- **Supporting:** Prompt Before/After (BEAT-004–007); role separation and
  Subagent trade-offs (BEAT-023–027); Memory reuse / lifecycle (BEAT-028–032
  and BEAT-054); Skill maintenance (BEAT-055); training-repository history
  only if supported by actual records (BEAT-058–059).
- **Visual / captured:** Context growth and routing (BEAT-011–017); Harness
  diagram (BEAT-035–036); observation-to-cause / layer map (BEAT-043–045);
  instruction bloat and Loop variants (BEAT-050–053); final comparison,
  layers, and audience summary (BEAT-060–070).
- **Do not stage as a product Demo:** diagnostic questions and private
  reflection (BEAT-067–068, BEAT-071); keep them as explanation or reflection.

### E. Required Project Capabilities to Check

- Multiple files and modules with a traceable call path and understandable
  architecture documentation.
- A small Bug task and realistic behavior Tests.
- A Performance task with a meaningful, repeatable Benchmark if available.
- Project rules, a recurring Workflow, and a plausible reason to make reusable
  context or verification visible.
- A composite investigation whose roles arise from one connected task rather
  than simultaneous unrelated tasks.
- Historical facts worth retaining, with sources and freshness that can be
  checked.
- A real or explicitly controlled project / workflow change that can make an
  artifact stale without hiding relevant files or manufacturing failure.

Treat these as repository-selection criteria, not assumptions about a
repository that has not been chosen. OQ-001/OQ-002/OQ-007/OQ-009 remain open.

### F. Required Agent / Harness Capabilities to Check

Check whether the selected environment can support or illustrate `AGENTS.md`,
relevant-context routing, a reusable workflow, optional Subagent investigation,
durable knowledge and its lifecycle, task-level verification, a stale Harness
artifact, and evidence-informed feedback. Use a conceptual or captured
fallback when a product feature is unavailable or unreliable. Current product
support and target-account availability remain subject to OQ-003/OQ-005/OQ-008.

### Demo Story Handoffs for Anchor Candidates

Every selected candidate must be completed against this handoff before
implementation: Story Beat, Question, Starting State, Expected Action,
Expected Observation, Teaching Point, Failure Risk, Fallback, and Next Beat.

#### Anchor 1 — Repository exploration

- **Story Beat:** BEAT-002–003; advance to BEAT-004.
- **Question:** “AI에게 질문하기 전에 내가 이미 관련 코드를 다 찾아야 하나?”
- **Starting State:** One permitted repository is open; the developer has a
  bounded question about where a feature lives.
- **Expected Action:** The agent searches and reads relevant files, traces the
  path, and explains what it found without editing.
- **Expected Observation:** Relevant files and their relationship are visible
  and can be checked against the repository.
- **Teaching Point:** Some Context gathering can move to an Agent; access does
  not supply task intent.
- **Failure Risk:** Permission, workspace, indexing, or navigation may block or
  change the path; a correct-looking path may still be incomplete.
- **Fallback:** Captured search / file trace or a diagram from a reviewed run.
- **Next Beat:** BEAT-004 — repository access does not convey intent.

#### Anchor 2 — Repeated context, `AGENTS.md`, and relevance

- **Story Beat:** BEAT-008–017; advance to BEAT-018.
- **Question:** “왜 같은 Project 설명을 매번 반복하고, 새 Rule은 어디에 둘까?”
- **Starting State:** Several task prompts repeat a small set of Project facts;
  a concise reusable guidance artifact has not yet been shown.
- **Expected Action:** Show one bounded reuse success, then inspect which
  information a small task needs and route only relevant detail.
- **Expected Observation:** Repeated facts can be reused; a task and a broad
  guidance set have different relevance; a route can lead to supporting
  material.
- **Teaching Point:** `AGENTS.md` is initially useful; Context design concerns
  relevance, scope, and timing rather than file splitting alone.
- **Failure Risk:** Do not stage a deterministic model failure or infer that
  a line count causes one; target product discovery and current behavior need
  verification.
- **Fallback:** A labeled document comparison, context map, or captured
  before/after from a controlled case.
- **Next Beat:** BEAT-018 — organized Context does not make process consistent.

#### Anchor 3 — Reusable workflow and verification

- **Story Beat:** BEAT-020–022; advance to BEAT-023.
- **Question:** “같은 작업 방법을 매번 Prompt에 다시 쓰지 않고 재사용할 수 있을까?”
- **Starting State:** Repeated performance tasks have a task-appropriate
  baseline, procedure, checks, and comparison criteria.
- **Expected Action:** Apply a reusable sequence through investigation, plan,
  implementation, correctness checks, benchmark, comparison, and review.
- **Expected Observation:** The procedure makes its steps and verification
  visible; the run's outcome is bounded by its records and criteria.
- **Teaching Point:** Reusable Workflow is the Engineering solution; a
  product Skill is conditional and is not required to show the idea.
- **Failure Risk:** A benchmark or test may be noisy, unavailable, or
  nonrepresentative; do not claim a speed gain or guaranteed consistency.
- **Fallback:** A versioned workflow artifact plus a reviewed captured run or
  diagram of evidence points.
- **Next Beat:** BEAT-023 — project complexity creates related role questions.

#### Anchor 4 — Stale Harness through evaluated change

- **Story Beat:** BEAT-039–049; advance to BEAT-050–051.
- **Question:** “같은 Failure가 다시 나타난다면 이번 Task만 고치는 것으로 충분할까?”
- **Starting State:** A documented current Project command differs from an
  old reusable workflow. Use a controlled case if this state is not observed.
- **Expected Action:** Correct one task locally, establish whether the
  mismatch recurs, observe the trace, form a cause hypothesis, change the
  implicated artifact, rerun, evaluate representative work, and check
  regression.
- **Expected Observation:** The stale artifact, evidence for the hypothesis,
  scoped diff, rerun, evaluation result, and limits are all inspectable.
- **Teaching Point:** Repeated, diagnosed friction can inform an evaluated
  Harness change; one pass is not proof of universal improvement.
- **Failure Risk:** Recurrence, root cause, and improvement may differ from
  expectation; do not hide access, invent history, or claim an unsupported
  causal result.
- **Fallback:** A clearly labeled controlled timeline with captured trace,
  artifact diff, and bounded results, or a visual if a fair reproduction is
  not available.
- **Next Beat:** BEAT-050–051 — indiscriminate rules can recreate Context
  bloat; reveal the Loop after its parts.

### G. Open Questions for Demo Architecture

The Story leaves these choices unresolved and routes them to existing OQs:

| STEP 06 question | Existing OQ |
|---|---|
| Language, domain, repository source / location, and whether one Project can carry the needed events | OQ-001 |
| Real case suitability, use permission, and sensitive-data boundaries | OQ-002 / OQ-014 |
| Target product surface, account, Live vs recorded vs captured / visual split, and fallback | OQ-003 / OQ-005 |
| Build / Test / Benchmark examples and stale-state change | OQ-007 / OQ-009 |
| Whether Skills, Subagents, Memory, or a concrete Harness mechanism is available and justified | OQ-008 |
| Final operational wording for Harness / Loop teaching terms | OQ-011 |
| Whether actual training-repository history supports a secondary Meta Example | OQ-013 |

No new Open Question is needed; the existing questions cover the candidates.

## Story Architecture Freeze Candidate

**Assessment:** READY AS A STEP 06 STORY BASELINE, WITH OPEN QUESTIONS.

“Freeze” means Demo or Slide convenience alone cannot silently alter the
causal Story. It does not prohibit corrections supported by new Research,
reproducibility limits, time-budget evidence, user direction, or a discovered
logical error. For a proposed change, state the reason and impact, identify
affected Beats and Transitions, compare it with the relevant Invariants and
Decisions, and record the decision before changing the governing Story. Do
not change the HARD narrative order without user approval.

## Curriculum and Governance Trace

The event-level map is in [STORY_BEATS.md](STORY_BEATS.md); questions and
causal handoffs are in [TRANSITIONS.md](TRANSITIONS.md). `CURRICULUM_MATRIX.md`
maps Curriculum sections to evidence, Invariants, and transitions; each Beat
links to its Curriculum section and Evidence, while the Transition Map names
the causal handoff. These existing links provide enough traceability for this
gate. A separate `STORY_TRACEABILITY.md` would repeat them and create another
file to keep synchronized, so it is not created.

The protected story order is `INV-NARRATIVE-001` (HARD). Problem-before-term,
continuous project evolution, emergent mechanisms, Harness staleness before
Loop, evidence-bounded claims, and one shared audience Story are governed by
the applicable STRUCTURAL and HARD Invariants listed in the beats and in
`plan/INVARIANTS.md`.

## Open Items for Later Steps

- DEC-0007 was ACCEPTED by the user's STEP 07 decision on 2026-10-02.
  DEC-0008 remains PROPOSED; do not infer approval of its candidate Demo
  placement principles.
- Resolve the repository domain/language and Beat-level case feasibility under
  OQ-001/OQ-002; compare Live, recorded, and captured/visual approaches for
  selected candidates under OQ-003; verify current product behavior for the
  target surface under OQ-005.
- Select project checks and any stale-state example under OQ-007, recurring
  workflow / role / Memory implementations under OQ-008, and a fair stale
  Project change, recurrence, and evaluation criteria under OQ-009. Final
  Harness and Loop wording remains subject to OQ-011.
- Use the training-repository meta example only if OQ-013's actual-history
  review supports its sequence and relevance. These items already exist as
  Open Questions; this review adds no duplicate OQ.
- Treat this architecture as the story design layer. Slide Map, final slide
  text, Demo repository implementation, Speaker Notes, and PPT are later
  deliverables and are not created here.

## Historical STEP 05 Final Gate (§110, §120)

| Area | Result | Basis and remaining boundary |
|---|---|---|
| Required Story files | PASS | Architecture, Beats, and Transitions exist. A separate Traceability file is not needed because the Matrix, Beat fields, Invariant map, and Transition map already connect the sources. |
| Narrative | PASS | One Developer and one evolving Project; problem-first transitions; bounded success states; bottom-up Harness reveal; staleness and possible recurrence before Loop; full recap. |
| Realism and evidence | PASS WITH OPEN QUESTIONS | Failures and improvements are plausible but remain Demo Assumptions unless reproduced or observed. No success result is claimed as actual Demo evidence. |
| Audience | PASS | Beginner entry and advanced system insight remain layered in one Story; no learner is told to implement every stage. |
| Engineering | PASS | Verification, Context, Skill / Memory maintenance, evaluation, regression, and Minimum Effective Harness callbacks are present. |
| Product / Research | PASS WITH RECHECK | No conflict with current STEP 03 Research records was found; selected-surface facts must be checked again under OQ-003/OQ-005. |
| Scope | PASS | No Demo repository, Slide Map, Speaker Notes, or PPT was created. STEP 06 has not been started. |

**Historical STEP 05 result: COMPLETE WITH OPEN QUESTIONS.** This records the
pre-Demo baseline and is not the current evidence status. STEP 06/07 resolutions
and the current story gate are recorded below.

## STEP 07 — Subagent and Memory Evidence Reconciliation

**Initial check:** 2026-09-30. The following STEP 07 alignment, checked
2026-10-01, supersedes earlier forward-looking statements below.

Keep the Conceptual Curriculum Story and the Primary Demo repository as
separate evidence layers:

| Layer | Current treatment |
|---|---|
| Conceptual Curriculum Story | ACT 3 may explain that sufficiently complex work can create role/Context separation needs and that repeated, costly rediscovery can motivate retained knowledge. Subagents and Memory remain conditional engineering responses, not required maturity steps. |
| Primary Demo repository at STATE-04 | The observed project is small. Candidate tasks A/B/C fit one Agent, so no Subagent is implemented or used. Trial history contains no qualifying, costly rediscovery of a Project fact that is missing from current Sources of Truth. No Memory artifact or product Memory mechanism is selected. |

`DEC-0018` records the accepted Subagent decision. `DEMO-07` is
**DEFERRED — NOT JUSTIFIED AT STATE-04**: it has no primary or supporting
Live path. If a future project/task case makes the concept useful, show it as
a visual or captured external/conceptual case. A useful teaching moment may
be: “여기서 많은 팀이 Subagent를 떠올립니다. 하지만 이 Project에서는
아직 필요하지 않았습니다.” This statement describes the current Demo
evidence and must not be generalized to all projects.

Memory is **NOT JUSTIFIED YET** for the primary repository. Keep the ACT 3
Memory distinction and lifecycle as conceptual/visual teaching material only;
do not imply that the Trial history demonstrated a repository Memory need or
that a product Memory facility was used. Reassess only after actual repeated
rediscovery meets the project-specific reuse, cost, source-availability,
provenance, scope, and freshness conditions in `plan/DEMO_MATRIX.md`.

This evidence update clarifies the Demo fit; it does not remove the
conditional Curriculum concepts or change the six-hour structure,
`MASTER_PLAN.md`, or an Invariant. The primary Product Demo is complete at
`STATE-04-PERF`. The ACT 4 stale-workflow sequence is conceptual, while the
TRIAL-006 → DEC-0016 → TRIAL-007/008 sequence is the separate observed Meta
Case. No post-endpoint Product change, Subagent state, Memory artifact, stale
Harness, or Product Loop was created.

## STEP 07 — STATE-04-PERF Working Harness Success

**Checked:** 2026-09-30, then reconciled with the complete primary history on
2026-10-01.

Preserve the bounded success beat before the next Engineering Problem:

> “여기까지는 잘 동작합니다.”

The Developer supplied a task-specific Goal; the Project supplied maintained
Context; routing identified detailed Context; the repository-owned Skill
supplied the repeatable performance procedure; and the benchmark plus Tests
provided correctness and before/after evidence. The current Demo's
`image_statistics` change passed focused and full tests, both benchmark
correctness guards, the CLI smoke, and final diff review. This is evidence
that the Harness supported this bounded task, not proof that one component
alone caused the improvement or that every task needs the same components.

No Subagent or Memory was required for this connected, source-local task.
Keep their absence distinct from the conceptual Curriculum cases for
sufficiently complex parallel work or costly cross-task rediscovery. Do not
describe the working STATE-04 Harness as incomplete.

Only after recognizing this success does ACT 4 introduce a separate,
explicitly conceptual stale-workflow teaching case. It is not a continuation
of the primary Demo Git history. The observed Meta Case is independently
sourced to the Training Production Trial history. This alignment does not
change the six-hour course, `MASTER_PLAN.md`, or an Invariant.


## STEP 07 — Final Story Evidence Alignment

**Checked:** 2026-10-01 against `STATE-00` through `STATE-04-PERF`, the Trial
history audit, DEC-0018, DEC-0021, and the approved Demo plan.

### Evidence Paths

| Evidence label | Path | Story use and limit |
|---|---|---|
| `OBSERVED_PRODUCT` | `STATE-00 → STATE-00-FIXED → STATE-01 → STATE-02 → STATE-03 → Benchmark preparation → STATE-04 → STATE-04-PERF` | Continuous primary Product Demo; ends in verified Working Harness Success. No later Subagent, Memory, stale Harness, or Loop state is implied. |
| `CONCEPTUAL` | BEAT-038–049 / DEMO-04A | Controlled stale-Harness teaching case: change → stale workflow → friction → observation → cause → scoped system change → evaluation/regression. It is not Product history or Trial evidence. |
| `OBSERVED_META` | `TRIAL-006 → DEC-0016 → TRIAL-007 → TRIAL-008` / DEMO-04B | Supporting Training Production evaluation/reporting feedback. Keep attribution and TRIAL-007 report/stderr limits visible; claim no measured quality improvement. |
| `TEACHING_MODEL` | BEAT-018–019 process-variation comparison; conditional Subagent/Memory gates; Harness framing; shared Loop pattern | Explain a possible problem or mechanism without presenting it as observed Product history. |

### Current Story Decisions

- Subagent is a decision point. The current candidate tasks fit one Agent;
  independent Context needs are weak and coordination overhead is not justified.
  Teach delegation conditionally for genuine independent investigation,
  specialization, isolation, or parallel work.
- Trial history contains no justified durable Memory candidate. Teach Memory
  only when repeated rediscovery is costly and knowledge has reusable scope,
  provenance, and a freshness path.
- Define Harness as the intentionally designed Project-level working
  environment. In the observed Product Demo it consists of Project Context,
  routing, a reusable repository-owned Performance Skill, Benchmark, Tests,
  tools/environment, and a task Prompt boundary. Subagent and Memory were not
  needed.
- Minimum Effective Harness is an ACT 3 core payoff backed by
  `STATE-04-PERF` and a callback in ACT 4/5.
- ACT 4 keeps the conceptual stale-workflow case and observed Meta Case
  independent. Their common teaching pattern is
  `Execution → Observation → Cause → System Change → Re-evaluation`.

### Curriculum and Invariant Check

No Act order, six-hour duration, or approved Curriculum timing changed.
The top-level `Prompt → Context → Harness → Loop` sequence remains intact;
the distinction between task workflow and maturity progression is preserved.
No Invariant or `MASTER_PLAN.md` change is required. Relevant protections are
`INV-NARRATIVE-001–002`, `INV-MATURITY-005–010`, `INV-LOOP-001`,
`INV-DEMO-003–004`, and `INV-VERIFY-001`.

**Current Story alignment: PASS.** Use this section and the updated Beats /
Transitions as the current STEP 07 Story source; treat older STEP 05/06
candidate tables and open gates as historical records where superseded here.
