# Curriculum Matrix

> 최신 ACT3 설명 순서: DEC-0062 / [ACT3 흐름 설계](ACT3_FLOW_REVISION.md). S50–S67의18장·85분과 장별 시간·Mode·ID는 유지한다. Skill 문서/관찰 대응, Subagent·Memory의 가정→현재 선택, 실제 구성→전체 작업 환경의 역할을 정렬했다. 아래 원본 기획·과거 검증 이력은 보존한다.
> **현재 기준: DEC-0060 /93장·379분 (2026-10-22).** ACT 장수10/21/18/18/18/8, 시간40/63/81/85/80/30분. Mode Lecture143/Demo73/Case88/Reflection21/Transition22/Q&A32분. ACT2는 S32–S49이며 기존90장 내용·장별 시간을 보존하고3장·11분을 더했다. 사용자 허용 상한720분은 목표 시간이 아니다. [현재 번호 대조](SLIDE_ID_MIGRATION_93.md), [ACT2 흐름 설계](ACT2_FLOW_REVISION.md). 과거 Prototype/Decision/검증 기록은 당시 판본이며 실환경·리허설은 UNVERIFIED다.

## 현행 제작 기준과 원본 기획의 관계

아래 본문은 원래 Curriculum/Story 설계와 단계별 승인 이력을 보존한다. 그 안의 이전 장수·시간·당시 Slide 번호를 최신 PPT 번호로 읽지 않는다. 현재 Slide별 배정은 SLIDE_MAP.md,90→93 대조는 SLIDE_ID_MIGRATION_93.md가 기준이다. Beat/Section/Demo/Trial ID와 문제 중심 진화는 유지한다. ACT2에서는 연구 두 과제 분리, B 답변 회수, 성과 회수로11분만 추가한다.

| ACT | 현행 범위 | 장수 | 분 |
|---|---|---:|---:|
| ACT0 | S01–S10 |10|40|
| ACT1 | S11–S31 |21|63|
| ACT2 | S32–S49 |18|81|
| ACT3 | S50–S67 |18|85|
| ACT4 | S68–S85 |18|80|
| ACT5 | S86–S93 |8|30|
| 합계 | S01–S93 |93|379|

## 보존된 기획 본문 / 이전 승인 이력

> Status: STEP 04 COMPLETE; STEP 07 schedule decision accepted on 2026-10-02
> in DEC-0007. Approved totals are Lecture 130, Demo 73, Case 83,
> Reflection 20, Transition 22, and Q&A/Discussion 32 minutes. This matrix
> maps curriculum logic, evidence, and instructional roles, not individual
> Slides.

Related Invariants:
INV-OBJECTIVE-001, INV-AUDIENCE-001, INV-DELIVERY-001,
INV-NARRATIVE-001–002, INV-MATURITY-001–011, INV-LOOP-001,
INV-LEARNING-001–004, INV-VERIFY-001, INV-DIFFICULTY-001–003,
INV-RESPONSIBILITY-001, INV-DEMO-001–004.

The approved delivery-mode totals are:

| Mode | Minutes |
|---|---:|
| Lecture | 130 |
| Demo | 73 |
| Case | 83 |
| Reflection | 20 |
| Transition | 22 |
| Q&A/Discussion | 32 |
| **TOTAL** | **360** |

The per-section time vectors below are the earlier working allocation
(Lecture / Demo / Case / Reflection / Transition), not the approved aggregate
mode split. STEP 08 will place the Q&A pool near major transitions and the
course close, then reconcile section-level Reflection and Transition roles.
Reflection remains private and requires no answer. Demo labels are curriculum
roles and candidates, not commitments that a product surface or scenario is
available. Exact Slide-level times are outside this STEP 07 update.

| Act | Section | Time | Time Risk | Starting Problem | Concept | Audience Layer | Demo/Case | Core Insight | Evidence | Transition | Section Role |
|---|---|---:|---|---|---|---|---|---|---|
| ACT 0 | Familiar error and self-location | 10 (4/0/3/2/1) | LOW | Code or an error is copied to a chatbot and the answer is carried back manually. | Recognize current usage without ranking learners. | ALL | VISUAL CASE | Developers differ in how much of the problem-solving process they delegate. | CLM-0001; CLM-0002; INV-AUDIENCE-001 | “내가 AI에게 지금 어디까지 맡기고 있나?” | INTRODUCE, REFLECT |
| ACT 0 | Range of delegation and simple roadmap | 15 (6/0/4/2/3) | LOW | Chatbot use is familiar, but task delegation and system design are not yet visible. | Non-evaluative AI-use range; Chatbot → Prompt → Context → Harness → Loop. | ALL | VISUAL CASE | The roadmap previews a destination; reveal its internal parts only as problems arise. | CLM-0001; CLM-0002 | “AI에게 질문하는 것과 개발 Task를 맡기는 것은 무엇이 다른가?” | INTRODUCE, REFLECT |
| ACT 0 | ChatGPT → Codex repository exploration | 15 (3/8/2/1/1) | HIGH | The developer manually finds files and assembles repository context. | Agent-led repository search, reading, and path tracing. | ALL; ADVANCED insight on context-collection cost | ANCHOR DEMO (candidate) | The shift is who searches for context, not a claim that one product is a generally better coder. | Product/interface research; OQ-001, OQ-003, OQ-005 | “같은 AI를 쓰는데 왜 사람마다 결과가 다를까?” | DEMONSTRATE, TRANSITION |
| ACT 1 | Same model, underspecified request | 15 (5/0/7/2/1) | LOW | Vague requests leave scope, constraints, process, or completion evidence implicit. | Intent mismatch as a task-specification problem. | ALL | VISUAL CASE | Different results can reflect missing task information; no magic prompt is implied. | Prompt Engineering research; INV-MATURITY-001 | “무엇을 명확히 하면 결과가 달라질까?” | INTRODUCE, EXPLAIN |
| ACT 1 | Practical Prompt Checklist and Before/After | 20 (7/5/4/2/2) | MEDIUM | An agent does not know the goal, relevant context, forbidden changes, desired process, or completion condition. | Course checklist: Goal, Context, Constraints, Process, Verification. | ALL; PRACTICAL use | SUPPORTING DEMO | Learn which task information changes, not a prompt sentence to memorize. | Prompt Engineering; CLM-0029; course teaching checklist | “먼저 조사하고 계획하게 하면 무엇이 달라질까?” | EXPLAIN, DEMONSTRATE |
| ACT 1 | Investigation-first workflow and Prompt's value | 20 (7/3/6/2/2) | LOW | “Fix it” can skip diagnosis, planning, or verification; useful project facts recur across tasks. | Investigate → Plan → Implement → Verify → Review; task-specific vs project-persistent information. | ALL; ADVANCED insight on task specification and verification | SUPPORTING DEMO | Prompt improvements are valuable on their own; repeated project context is a different scaling problem. | INV-MATURITY-001, INV-MATURITY-011; Prompt Engineering research | “왜 매번 같은 Project 설명을 반복할까?” | EXPLAIN, EVOLVE, TRANSITION |
| ACT 2 | Repeated project context and AGENTS.md's first success | 20 (5/8/4/1/2) | MEDIUM | Build, test, style, and project constraints are repeated in each task. | Reuse core project instructions through AGENTS.md. | ALL | ANCHOR DEMO (candidate) | Move repeated project explanation from each Prompt into reusable project context. | CLM-0005; AGENTS.md research; OQ-001, OQ-003, OQ-005 | “AGENTS.md가 도움이 된다면 여기에 다 넣으면 될까?” | DEMONSTRATE, EXPLAIN |
| ACT 2 | Context definition and scope mental model | 15 (8/0/3/2/2) | LOW | Task information, project rules, workflow guidance, and retained knowledge are mixed. | What / when / where; Task, Project, Role/Workflow, Historical/Durable Context as a course model. | ALL; PRACTICAL / ADVANCED distinctions | VISUAL CASE | Context Engineering selects and places relevant information; this scope model is not an official taxonomy. | Context Engineering; Terminology Registry; CLM-0005, CLM-0008 | “모든 정보를 항상 제공해야 할까?” | EXPLAIN |
| ACT 2 | Context growth, relevance, and research caveat | 20 (8/2/6/2/2) | MEDIUM | A single instruction file accumulates material not needed by every task. | Relevance, staleness, conflict, maintenance, bounded long-context evidence. | ALL; ADVANCED research scope | VISUAL CASE | More context is not the goal; Lost in the Middle is a bounded study, not a universal current-model rule. | CLM-0014, CLM-0015; Lost in the Middle; OQ-006 | “필요한 정보를 필요한 Task에 어떻게 제공할까?” | INTRODUCE, EXPLAIN |
| ACT 2 | Separation, routing, and progressive disclosure | 15 (6/3/2/2/2) | MEDIUM | Splitting documents alone does not ensure the right information is found at the right time. | Core rules plus routes to task-relevant context; progressive disclosure and its trade-offs. | ALL; ADVANCED routing trade-offs | SUPPORTING DEMO | Routing and relevance are the goal; course context pattern is distinct from the Skills product loading behavior. | Context Engineering; Skills research; INV-MATURITY-004 | “Agent가 필요한 Context를 알면 늘 같은 방식으로 일할까?” | EVOLVE, TRANSITION |
| ACT 3 | Context → Harness problem and bottom-up framing | 15 (7/1/5/1/1) | MEDIUM | A labeled teaching model asks whether knowing Project facts makes work repeatable. | Candidate course framing: environment and process for reliable agent work; grow bottom-up. | ALL; ADVANCED system framing | VISUAL CASE | Ask what work system is needed before listing components. | CLM-0016, CLM-0017, CLM-0030 (partial); OQ-011 | “같은 절차를 매번 설명하지 않을 방법은?” | INTRODUCE, EXPLAIN |
| ACT 3 | Observed workflow and repository-owned Performance Skill | 20 (5/8/4/1/2) | HIGH | TRIAL-006 and TRIAL-007 reused the same observable procedure for different performance targets. | Follow the observed repository Skill discovery/invocation in TRIAL-008 and its verification path through STATE-04-PERF. | ALL; PRACTICAL workflow design | ANCHOR DEMO — OBSERVED PRODUCT PATH | Reusable work and bounded evidence matter; the record does not prove Skill superiority or isolate it as the cause of the Product improvement. | STATE-04-PERF; TRIAL-006/007/008; DEC-0017; OQ-005 | “이 작업에 더 필요한 구성요소가 있었을까?” | DEMONSTRATE, EVOLVE |
| ACT 3 | Role/context complexity and Subagents | 15 (5/5/3/1/1) | MEDIUM | The actual candidate-task audit finds overlapping evidence, weak independent Context needs, and no demonstrated need to split roles. | Record the no-need decision, then define conditions for a separate role-split model. | ALL; ADVANCED cost analysis | SUPPORTING / VISUAL MODEL | The current Project fits one Agent; Subagents remain conditional and are not used in the primary Demo. | DEC-0018; CLM-0007; Subagents research; OQ-005, OQ-008 | “이 작업에 독립적인 조사가 필요한가?” | EXPLAIN, EVOLVE |
| ACT 3 | Trial-history audit, Context vs Memory | 15 (7/2/3/1/2) | MEDIUM | Trial history repeats information, but no costly missing durable Project fact is identified. | Classify source facts, maintained documentation, reusable workflow, scoped observations, and temporary details; teach a conditional retention gate and lifecycle. | ALL; ADVANCED lifecycle | VISUAL CASE | No Memory candidate is justified for the primary Demo; distinguish Memory from Context, workflow, and Source of Truth. | DEC-0018; OQ-013; CLM-0008; Memory research | “이 반복 정보는 어디에 두어야 하고 남길 가치가 있는가?” | INTRODUCE, EXPLAIN |
| ACT 3 | Tools, verification, and Harness reveal | 20 (7/4/5/2/2) | HIGH | The observed Project has Context and a reusable Skill, but its success needs bounded execution evidence. | Reveal the observed Project-level work environment and Minimum Effective Harness payoff. | ALL; ADVANCED system trade-offs | VISUAL CASE | STATE-04-PERF succeeds without Subagent or Memory; it is the observed endpoint, not a checklist. | STATE-04-PERF; DEC-0018; CLM-0016, CLM-0017, CLM-0029; OQ-011 | “이 작업에 필요한 최소 작업 환경은 무엇인가?” | DEMONSTRATE, VALIDATE, EVOLVE |
| ACT 4 | Project change and stale Harness | 20 (6/5/6/1/2) | HIGH | A labeled conceptual Project change could leave a reusable workflow stale after the primary Demo has succeeded. | Use DEMO-04A to model elapsed time, mismatch, and maintenance debt. | ALL; ADVANCED maintenance perspective | VISUAL CASE | DEMO-04A is conceptual, not a Product State, Trial, or observed recurrence. | DEC-0021; INV-MATURITY-010; OQ-007, OQ-009, OQ-011 | “이 사례에서 무엇이 stale해졌으며 왜 그런가?” | INTRODUCE |
| ACT 4 | Loop model, Product Loop, and automation levels | 15 (8/2/2/1/2) | HIGH | DEMO-04A is conceptual; separately, observed Trial history shows an attribution limit. | Synthesize a general feedback pattern across two independent evidence paths; distinguish Product Loop from Harness Improvement Loop and manual/assisted/automated levels. | ALL; ADVANCED evaluation limits | SUPPORTING CASES | Do not join DEMO-04A causally to the observed DEMO-04B evaluation/reporting change. | DEC-0021; CLM-0021; Loop Engineering; OQ-011 | “각 경로가 실제로 뒷받침하는 결론은 무엇인가?” | EXPLAIN, EVOLVE |
| ACT 4 | Cause analysis, change, evaluation, regression | 25 (5/11/5/2/2) | HIGH | A conceptual correction needs a cause hypothesis and bounded checks; the observed Meta change concerns evaluation/reporting rules only. | Trace DEMO-04A's conceptual Failure → cause → hypothesis → change → rerun → evaluation → regression; bound DEMO-04B to its recorded scope. | ALL; ADVANCED evaluation and overfitting | CONCEPTUAL CASE + SUPPORTING META | No Product Skill repair or objective Trial-quality gain is claimed. | DEC-0016; DEC-0021; CLM-0020, CLM-0021, CLM-0029; Verification research | “이 경로의 근거는 어떤 변화까지 뒷받침하는가?” | DEMONSTRATE, VALIDATE |
| ACT 4 | Improve Context, Memory, Skills, and delegation | 20 (8/4/4/2/2) | MEDIUM | Maintenance choices are possible, but no such change is claimed for the observed Product or Meta paths. | Use conditional examples to teach routing, stale knowledge, workflow quality, role selection, and Minimum Effective Harness. | ALL; ADVANCED system design | SUPPORTING / VISUAL MODEL | Use the smallest change justified by evidence; do not imply every failure adds a component. | CLM-0006–0008, CLM-0022; DEC-0021; Loop Engineering | “지금 자신의 위치에서 다음으로 바꿀 수 있는 것은 무엇인가?” | EVOLVE, REFLECT, TRANSITION |
| ACT 5 | Beginning/ending comparison and developer responsibility | 15 (7/2/3/2/1) | MEDIUM | Seeing greater agent capability can imply that full automation is required or developers become unnecessary. | Revisit the journey; retain developer goals, judgment, verification, risk review, and accountability. | ALL; ADVANCED team-level implications | VISUAL CASE | AI participation can expand without removing engineering responsibility. | CLM-0023, CLM-0024; INV-RESPONSIBILITY-001 | “각자의 업무에서 현실적인 다음 한 단계는 무엇인가?” | EXPLAIN, REFLECT |
| ACT 5 | Audience next steps, seven takeaways, final reflection | 15 (6/0/2/4/3) | LOW | A single identical assignment would not fit the range of learner maturity. | Stage-specific next steps and seven takeaways tied back to the shared Story. | ALL | VISUAL CASE | Learners may take the next step from their current position; they need not install the full system. | CLM-0001, CLM-0002, CLM-0023; INV-DIFFICULTY-001 | End with private reflection; no presentation or hands-on work is required. | REFLECT, TRANSITION |

## Reading the Matrix

- Audience Layer identifies who should find explicit value; each section remains
  part of one accessible Story. ADVANCED material is an optional depth layer,
  not a prerequisite.
- ANCHOR DEMO, SUPPORTING DEMO, and VISUAL CASE are planned roles. They do not
  assert target feature access, an observed failure, or a selected repository.
- Evidence names a Claim ID or research topic. See
  [Claim Registry](../references/CLAIMS.md), product and engineering topic
  pages, and unresolved questions in [DECISIONS.md](DECISIONS.md).
- The time split is a curriculum estimate. Later Demo Architecture may refine
  the section's mode mix while preserving the 360-minute total and Story.

## Section Role Legend

Each section is tagged with one or more of these instructional roles:

| Role | Meaning |
|---|---|
| INTRODUCE | Establish a new Problem or Mental Model. |
| DEMONSTRATE | Show an example, case, or agent behavior. |
| EXPLAIN | Make the cause or concept understandable. |
| EVOLVE | Develop the work system toward the next engineering stage. |
| VALIDATE | Check a result, Test, Evaluation, or evidence boundary. |
| REFLECT | Consolidate an Insight or help learners locate their practice. |
| TRANSITION | Connect the completed thought to the next Problem or course close. |

Role labels describe the section's Curriculum function, not a required Slide or
teaching format. All 21 sections have at least one explicit role.
