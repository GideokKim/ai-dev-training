# Story Transitions

> **현재 기준: DEC-0060 /93장·379분 (2026-10-22).** ACT 장수10/21/18/18/18/8, 시간40/63/81/85/80/30분. Mode Lecture143/Demo73/Case88/Reflection21/Transition22/Q&A32분. ACT2는 S32–S49이며 기존90장 내용·장별 시간을 보존하고3장·11분을 더했다. 사용자 허용 상한720분은 목표 시간이 아니다. [현재 번호 대조](SLIDE_ID_MIGRATION_93.md), [ACT2 흐름 설계](ACT2_FLOW_REVISION.md). 과거 Prototype/Decision/검증 기록은 당시 판본이며 실환경·리허설은 UNVERIFIED다.


> Status: STEP 05 baseline aligned to STEP 07 evidence on 2026-10-01. These
> transitions carry causal questions between events; they are not chapter
> titles or final slide copy. The observed Product path ends at
> `STATE-04-PERF`; conceptual and Meta evidence paths remain separate.

## Transition Rule

At a transition, leave the learner with the unresolved question produced by
the current Story state. Let the next event answer that question. Do not name
or define the next technology before the problem that earns it is visible.

The Transition Map connects adjacent Story Beats and preserves the current
Curriculum's ACT exit questions. Stable `TRANS-XXX` records below detail the
required major transitions, their causal handoff, a presenter phrase, and a
guardrail. They may be refined later without changing the protected
`Chatbot → Prompt → Context → Harness → Loop → AI-Native Development` sequence.

## Current Slide Handoffs — DEC-0032 / DEC-0036

The 2026-10-20 user-approved continuity revision aligns presentation cues
without changing Story Beats or evidence paths. Current literal handoffs
are the Transition fields in `plan/SLIDE_MAP.md` and the matching production
Notes. The Story-level map below retains its design history; it is not a
transcript of every current slide. S49 → S50 introduces observed procedure
repetition, not an observed variation failure.

| Connection | Presentation purpose | Boundary |
|---|---|---|
| S07 → S08 | Move from bringing AI to the Repository to the actual Codex entry path. | Official-source menu reconstruction; target UI/account remains unverified. |
| S08 → S09 | Move from shared Repository visibility to human final decisions and responsibility. | AI may investigate and propose; do not make an exclusive file-access claim. |
| S09 → S10 | Apply human decision ownership to a hypothetical inspection pipeline, then ask which task to request. | DEC-0037; dashed future connections are not missing repository functions or observed outcomes. |
| S10 → S11 | Carry the desired inspection task into the question of what the request must specify. | Keep the existing generic filter/crop teaching requests; do not claim the full inspection pipeline is implemented later. |
| S11 → S12 | Narrow the generic request to the previously investigated crop case. | Constructed requests are not actual Trial prompts. |
| S12 → S13 | Add the five missing fields to show the intended path among the same alternatives. | Teaching example only; no deterministic execution or PASS guarantee. |
| S13 → S14 | Generalize the concrete fields into developer questions, then retain private Reflection. | The example is authorized before the general model; do not repeat it as a second solution lecture. |
| S14 → S15 | Group the decisions and make relevant facts and process explicit. | The two sets of five are not a one-to-one taxonomy. |
| S16 → S17 | Move from a constructed request to three actual request/observed-process pairs from TRIAL-002. | The right side is a retained observation summary; target identifiers are code-checked. Do not imply S16 was executed or show invented raw logs. |
| S21 → S22 | Move from requested completion evidence to practical ways of expressing a task request. | Keep the accepted verification example; the new request examples are conceptual and add no Trial. |
| S22 → S29 | Follow eight bounded request methods from input boundaries through evidence-based revision feedback. | Official recommendations support the examples; no universal recipe, hidden-reasoning demand or measured benefit is claimed. |
| S29 → S30 | Ask which request conditions remain useful in the next task. | Task/Project classification remains a teaching model and motivates recurring Project Context. |
| S38 → S39 → S41 | Ask about context amount, view bounded research, then return to relevant-detail design. | Research does not prove current Codex failure or Routing benefits. |
| S41 → S42 | Move from the discovery route to what belongs in Core Context. | Preserve the distinct roles of the two screens. |
| S49 → S50 | Ask whether the same procedure must be written again. | Repetition is observed; variation failure is not claimed. |
| S51 → S52 | Apply the three responsibilities to one normalize task. | Reserve the Skill-reuse question for S53. |
| S54 → S55 | Compare where a common procedure resides across distinct tasks. | Not a controlled same-task or Skill-superiority comparison. |
| S58 → S59 → S61 | Review whether additional coordination or retained knowledge was justified. | Current Demo did not add Subagent or separate Memory. |
| S68 → S69 | Close the observed Product endpoint and begin a separate fictional case. | Do not turn the fiction into Product history. |
| S72 → S73 | Move from a cause-conditional response to how that cause is checked. | Symptoms alone do not establish a Workflow cause. |
| S78 → S79 | Combine preceding judgments into the five-stage operating model. | No new execution, automatic learning or completed evaluation. |
| S79 → S80 | Open the actual case about Trial evaluation and reporting. | Separate Meta history from the stale Workflow fiction. |
| S84 → S85 → S86 | Transfer the principle to C++ questions, then recall the whole journey. | Hypothetical transfer; preserve S85 timing and operating phases. |
| S86 → S87 | Review observed Product history within the broader teaching model. | Product history ends at STATE-04-PERF, without an observed Product Loop. |
| S88 → S89 | Connect component selection to responsibility for accepting results. | No fixed human/Agent division table. |
| S91 → S92 → S93 | Narrow one friction to one private small action, then take questions and close. | No submission, public commitment or mandatory activity. |

## Transition Map

| From → To | What the learner has just seen | Unresolved friction | Audience question | Why the next event follows | Guardrail |
|---|---|---|---|---|---|
| Familiar chatbot use → repository-level question (BEAT-001 → 002) | A copied error or snippet is a quick, useful way to get help. | A larger question crosses several files; the developer must find and carry the context. | “AI에게 질문하기 전에 내가 이미 관련 코드를 다 찾아야 하나?” | A repository-aware investigation is a reasonable answer to context-gathering cost. | Do not portray chatbot use as wrong; keep the project bug hypothetical unless selected and observed. |
| Repository friction → first Codex exploration success (BEAT-002 → 003) | Context collection is consuming developer effort. | Can the agent locate relevant repository context itself? | “AI를 코드가 있는 곳으로 데려가면 무엇이 달라질까?” | Show one bounded search/read/trace explanation and allow its value to land. | Keep the first example read-only and subject to surface, permission, and repository setup. |
| First exploration success → task specification (BEAT-003 → 004) | The agent can investigate code the developer did not manually paste. | Repository access does not reveal unstated intent or completion expectations. | “같은 AI를 사용하는데 왜 사람마다 결과가 다를까?” | Compare the task request, not the agent's access, as a remaining source of variation. | Do not imply the agent inferred user intent or that all output differences have one cause. |
| Intent gap → Task Specification (BEAT-004 → 005) | Repository access still permits a request to change too much, add a dependency, trade accuracy, or omit a benchmark. | The developer's goal, boundaries, process, and completion evidence are unstated. | “Repository를 보여주는 것만으로 Agent가 원하는 결과를 알 수 있을까?” | Specify Goal, relevant Context, Constraints, Process, and Verification. | Frame candidate outcomes as illustrative unless observed; explain the gap as missing intent, not an unintelligent agent. |
| Task Specification → Investigate First (BEAT-005 → 006) | A bounded task says what is allowed and what evidence matters. | The agent may still begin editing before the cause is understood. | “수정하기 전에 먼저 무엇을 알아야 할까?” | Ask for read-only investigation and findings before an implementation plan. | Investigation-first is a reliable default, not a long mandatory ritual for every small task. |
| Investigate First → Prompt success (BEAT-006 → 007) | Findings and a plan can be reviewed before code changes. | The learner needs to see that a clear Prompt can work well at the current project scale. | “이 Task에서 명시한 조건과 검증이 실제로 확인되는가?” | Show a bounded case that respects scope and reports the named test/benchmark evidence. | Record actual outcomes or label the comparison illustrative; do not claim universal effectiveness. |
| Prompt success → repeated Project context (BEAT-007 → 008) | The task Prompt improved the work and is worth keeping. | Bug Fix, Performance, and Refactoring tasks repeat the same Build, Test, API, and Style facts. | “왜 나는 Project에 대해 똑같은 설명을 계속 하고 있지?” | Distinguish task-specific instructions from persistent Project facts. | Do not portray Prompt Engineering as a failed or obsolete solution. |
| Repeated Project context → `AGENTS.md` (BEAT-008 → 009) | Good Prompts still carry recurring project background. | Project facts must be reused without being copied into every request. | “Project 공통 정보를 Repository에 한 번 둘 수 있을까?” | Introduce concise project purpose, Build/Test, API/dependency rules, and Style guidance in a supported repository instruction file. | Keep canonical project plans distinct from `AGENTS.md`; check current product behavior and environment. |
| `AGENTS.md` introduction → first success (BEAT-009 → 010) | Reusable Project instructions now exist. | Their value needs to be visible before discussing growth or limits. | “이 지침을 여러 Task에서 재사용하면 무엇이 달라질까?” | Show a bounded reuse case and a simpler task-specific Prompt. | Reduced repetition is the intended Story value; claim behavioral consistency only with evidence. |
| First Context success → accumulation (BEAT-010 → 011) | Project guidance reduced repeated explanation for the tasks shown. | New rules and workflows create pressure to append more. | “새 Rule이 생길 때마다 계속 여기에 추가하면 될까?” | Let the file grow over time before evaluating task relevance. | Preserve the initial success; line counts are illustrative, not failure thresholds. |
| Accumulation → relevance case (BEAT-011 → 012) | The instruction file now contains information for many project activities. | A small Unit Test task arrives among performance-tuning, release, deployment, benchmark, migration, compatibility, and debugging guidance. | “이 작은 Task에 이 Context가 전부 필요한가?” | Inspect which facts matter, which are stale or conflicting, and how to maintain them. | Make relevance the primary issue; do not reduce the concern to token cost or claim deterministic failure. |
| Relevance problem → research evidence (BEAT-012 → 013) | The task/context mismatch is visible without any paper or product claim. | The learner asks whether context capacity means all positions are used equally well. | “큰 Context window와 효과적인 Context 사용은 같은 문제인가?” | Briefly introduce the bounded `Lost in the Middle` result after the practical problem. | Name studied task/model conditions and immediately state it did not test current Codex or `AGENTS.md`. |
| Bounded research → context separation (BEAT-013 → 014) | The study gives a scoped caution about position in specific long-context tasks. | The developer still needs a design that avoids supplying every fact to every task. | “모든 정보를 항상 한 번에 제공하지 않는 방법은 없을까?” | Separate information by scope and when a task needs it. | Treat this as a design question; do not present the paper as proof that a long instruction file fails. |
| Context separation → Router (BEAT-014 → 015) | Core guidance and task-specific references now have different scopes and possible locations. | The agent needs a way to discover a relevant source. | “Agent가 지금 필요한 정보를 어떻게 발견할까?” | Keep concise core context and point from it to relevant sources. | “Context Router” is the course's Engineering pattern, not an established official Product Pattern. |
| Router → Progressive Disclosure (BEAT-015 → 016) | `AGENTS.md` provides an entry point to project knowledge. | Bug Fix and Performance tasks need different information at different times. | “Task가 바뀌면 필요한 Context도 어떻게 달라질까?” | Show core Build/Test guidance first, then add Performance guidance and benchmark steps when the task needs them. | Keep the general teaching pattern separate from the product-specific Skills loading behavior. |
| Progressive Disclosure → Context success (BEAT-016 → 017) | Task-relevant Context is routed in stages. | Routes and references also need to be maintained and checked. | “이 Context 구조를 여러 Task에서 쓰면 무엇이 좋아지는가?” | Show the bounded workflow across multiple tasks before introducing a Process problem. | Present reduced irrelevant context as the case outcome; do not claim universal output improvement. |
| Context success → Process friction (BEAT-017 → 018) | Prompts are concise, core rules remain, and task-specific Context can be found. | A teaching model asks whether organized Context alone makes a work process repeatable. | “Project에 대해 알아야 할 것을 다 알려줬는데 왜 작업 방법은 매번 달라질까?” | Introduce the clearly labeled process-variation model, then distinguish it from actual workflow recurrence in TRIAL-006/007. | Do not imply that the Demo Product had observed process failures or that Context caused the variation. |
| Process variation → Knowledge vs Process (BEAT-018 → 019) | A labeled teaching model contrasts different process paths. | The learner may confuse missing Project knowledge with a missing procedure. | “정보를 아는 것과 일하는 방법은 같은가?” | Distinguish task Context from the ordered Performance workflow. | Run A/B/C are a TEACHING_MODEL, not recorded Product executions. |
| Knowledge/Process distinction → repeated procedure (BEAT-019 → 020) | The Context/workflow distinction is clear; TRIAL-006 and TRIAL-007 applied the same observable procedure to different performance targets. | The recurring workflow needs one maintained Project-level home. | “반복되는 작업 절차를 어떻게 재사용할까?” | Use the Trial record and DEC-0017 to show workflow repetition leading to a repository-owned Skill. | Do not claim that identical prompts or tasks were repeated. |
| Repeated procedure → repository-owned Skill (BEAT-020 → 021) | The procedure recurred across distinct Trial paths, and DEC-0017 selected a repository-owned Skill. | The selected CLI run must establish discovery and invocation for its own environment. | “선택한 환경에서 이 Workflow를 실제로 불러올 수 있는가?” | Show TRIAL-008's explicit Skill discovery and invocation on Codex CLI 0.154.0. | This is bounded CLI evidence, not universal behavior or a Skill-superiority claim. |
| Repository-owned Skill → bounded Product change (BEAT-021 → 022) | TRIAL-008 shows the Skill in the execution context for a real performance task. | The learner needs bounded Product and verification evidence without assuming causality. | “변경과 검증 기록이 실제로 무엇을 뒷받침하는가?” | Trace STATE-04-PERF and its tests, benchmark guards, CLI smoke, and diff review. | Do not isolate the Skill as the cause of the measured improvement or claim general consistency. |
| Workflow success → role-need audit (BEAT-022 → 023) | A reusable repository-owned Performance Skill supports bounded work. | Should the current Project add roles to its system? | “이 작업에 역할을 나눌 만큼 독립적인 조사가 필요한가?” | Review the actual candidate tasks and compare independent Context needs with handoff and integration cost. | The current audit does not justify Subagents; do not turn the decision into a later Product state. |
| Role-need audit → conditional role-separation model (BEAT-023 → 024) | Candidate tasks A/B/C fit one Agent; evidence overlaps and independent Context needs are weak. | Another task could have independent investigations or specialization needs. | “어떤 증거가 역할 분리를 정당화할까?” | Map independent work, role-specific Context, dependencies, and handoffs as a conditional model. | Keep the current Product path single-Agent; Subagent is not the inevitable next stage. |
| Role-separation model → optional Subagent mechanism (BEAT-024 → 025) | The criteria and costs of division are visible before a product term is used. | Learners need one possible mechanism for a justified split. | “필요한 경우 역할별 조사를 어떻게 분리할 수 있을까?” | Show a conceptual Main Agent and scoped investigations, then verify product-surface support before any real mechanism claim. | Keep the diagram conceptual; the primary Product Demo did not run Subagents. |
| Conditional Subagent model → reviewable success criterion (BEAT-025 → 026) | A role-scoped design could return separate evidence for integration. | A learner may mistake conceptual suitability for an observed result. | “무엇이 달라져야 역할 분리가 유용했다고 볼 수 있을까?” | Define useful, sourced findings, uncertainty, and integration as the criterion. | Do not claim Subagent success, speed, or quality improvement in the primary Demo. |
| Conditional success criterion → project-specific no decision (BEAT-026 → 027) | The hypothetical design has a criterion but has not been run in the Product Demo. | The current project may not satisfy the division gate. | “이 Project에서는 역할을 나누는 편익이 비용보다 큰가?” | Return to the actual task audit: one Agent is sufficient for current connected tasks. | DEC-0018 defers Subagents at STATE-04; do not imply an observed over-delegation failure. |
| Subagent decision → Trial-history knowledge audit (BEAT-027 → 028) | Subagent use was not justified by current Project tasks. | Repeated information in Trials may be a fact, a workflow, a task observation, or temporary environment detail. | “반복된 정보는 어떤 종류이며 다시 찾는 비용은 실제로 컸나?” | Classify the actual Trial history before considering Memory. | The audit found no costly missing durable fact; do not manufacture rediscovery. |
| Trial-history audit → Context vs Memory (BEAT-028 → 029) | Project facts, reusable procedure, and scoped Trial observations have different homes. | Learners may equate any repeated lookup with a Memory need. | “지금 필요한 Context와 다음에도 남겨 둘 지식은 어떻게 다른가?” | Compare immediate task Context with verified, costly-to-rediscover reusable knowledge. | The primary Project has no Memory candidate; the repeated Performance procedure belongs in its Skill. |
| Context/Memory distinction → conditional retention gate (BEAT-029 → 030) | The current audit found no candidate for persistent retention. | A future project may face a costly, repeated rediscovery problem. | “어떤 조건이라면 이 사실을 보존할 가치가 있을까?” | Check reuse, cost, source/provenance, scope, freshness, and maintenance before choosing storage. | Memory remains optional; product feature availability and canonical Source of Truth stay distinct. |
| Retention gate → conceptual reuse example (BEAT-030 → 031) | A future fact could meet the retention criteria. | Learners need to see the possible path into a later task. | “다음 Task에서 이 사실을 어디서 찾고 어떻게 확인할까?” | Use a labeled conceptual example with a source and freshness check. | Do not present a stored/reused fact or time saving as observed in this Project. |
| Conceptual reuse → lifecycle (BEAT-031 → 032) | A conceptual example shows possible cross-task reuse, not actual Product history. | A retained fact may lose freshness or scope. | “무엇을 남기며 언제 다시 확인하거나 버릴까?” | Teach validation, scope, retrieval, refresh, update, and retirement conditionally. | No Memory facility or stale Memory event is claimed for the primary Demo. |
| Conditional Memory model → tools in the work system (BEAT-032 → 033) | Memory lifecycle is one optional teaching model; the actual Project has Context, routing, and workflow. | Software work still needs observable actions and evidence. | “Agent가 답변한 뒤 실제 변경과 확인은 무엇으로 할까?” | Connect available tools to search, changes, tests, benchmark, diff, and review. | Keep Memory and Subagents out of the actual Harness diagram unless evidence justifies them. |
| Tools → structural Verification (BEAT-033 → 034) | The agent can search, inspect, edit, and execute within its environment. | Tool use alone does not establish that work is correct or complete. | “검증을 매번 기억해 요청하지 않아도 Workflow에 포함할 수 있을까?” | Compare a Prompt reminder with repeatable task workflows that include checks and review. | Preserve the “Generated ≠ Done” insight and task-level Verification. |
| Verification → Harness emerges (BEAT-034 → 035) | Reusable work methods now include tools and explicit checks. | Learners need a name for the larger system being assembled. | “우리는 Prompt를 넘어 어떤 전체 작업 환경을 설계하고 있는가?” | Trace the previously motivated parts before naming the course's Harness model. | Keep Harness wording provisional under OQ-011; do not lead with the completed architecture. |
| Harness emerges → actual system view (BEAT-035 → 036) | The working environment is defined as a designed Project-level system. | The learner needs to see how actual Project elements relate. | “Prompt를 넘어 이 Agent가 일할 환경은 어떻게 설계되었나?” | Show Project Context, routing, repository Skill, Benchmark, Tests, tools/environment, and task Prompt boundary. | Identify the diagram as an evidence-based teaching view, not a universal component list. |
| System view → `STATE-04-PERF` Working Harness Success (BEAT-036 → 037) | The actual system view is grounded in the Demo repository. | A diagram alone does not show whether it supported a task. | “이 System은 실제 Performance Task에서 어떻게 함께 작동했나?” | Trace the observed state path through the verified Product Change and review evidence. | The observed result passes recorded checks; no Subagent or Memory was used or required. |
| Working Harness Success → conceptual time shift (BEAT-037 → 038) | The Product Demo succeeds at `STATE-04-PERF` within its tested scope. | Learners may assume a successful system stays current automatically. | “Project가 바뀌면 Agent가 따르는 System도 함께 바뀔까?” | Start DEMO-04A as a separate conceptual case where a later Project change could stale an artifact. | Do not describe a subsequent Product state or imply that STATE-04-PERF became stale. |
| Conceptual time shift → conceptual stale workflow (BEAT-038 → 039) | A separate teaching scenario advances a Project while preserving one old workflow. | The workflow may direct a task to an obsolete command. | “이번 Task에서 옛 Workflow를 따르면 어떤 일이 생길까?” | Show the controlled mismatch and correct one task locally. | Label the whole event CONCEPTUAL; it is not observed repository chronology. |
| Conceptual local correction → conceptual recurrence (BEAT-039 → 040) | One controlled task is recovered but the hypothetical durable workflow is unchanged. | A later task in the same controlled scenario may repeat the friction. | “이번 Task를 바로잡았는데 다음 Task도 달라질까?” | Show recurrence only inside the labeled controlled case. | No observed stale-workflow recurrence is claimed. |
| Conceptual recurrence → Harness maintenance question (BEAT-040 → 041) | A controlled scenario repeats a correction because an old artifact remains. | Learners need a bounded name for system-maintenance cost. | “AI가 일하는 System도 유지보수 대상 아닌가?” | Use Harness Technical Debt as an engineering analogy. | The label is not official product terminology or a claim about the Demo repository. |
| Harness debt → Failure as Signal (BEAT-041 → 042) | Repeated corrections point to a Harness that may represent an earlier Project state. | The developer can keep treating each Failure as a local obstacle or investigate what made it likely. | “이 실패를 이번 Task에서 없애는 것과 System을 개선할 Signal로 보는 것은 어떻게 다를까?” | Reframe recurrence as a reason to investigate the system that shaped behavior. | A Failure is a signal, not proof that the Harness caused it or must change. |
| Failure signal → Observation (BEAT-042 → 043) | The developer asks why the same command keeps appearing. | The actual command, Context, Skill, Memory, Environment, and prior runs must be inspected. | “Agent가 무엇을 읽고 어떤 순서로 old command를 선택했을까?” | Observe the execution trace and compare it with current Project guidance. | Do not change the Harness before establishing what happened. |
| Observation → Cause hypothesis (BEAT-043 → 044) | The old command came from a stale Test Skill, while the Project README contains a current Bazel command. | Similar failures can have different causes, and observation alone is not diagnosis. | “이 Failure의 원인은 확인된 사실인가, 아직 가설인가?” | Compare instruction, Skill, routing, Environment, agent judgment, and task-specific explanations. | Distinguish observed facts from hypotheses and keep causality evidence-bounded. |
| Cause hypothesis → Right layer (BEAT-044 → 045) | Several plausible causes have been considered against the evidence. | A broad Prompt or global rule may target the wrong part of the system. | “모든 Agent Failure를 Prompt 문제로 처리하고 있지는 않을까?” | Map the cause to Prompt, Context, Skill, Memory, Tool, Workflow, or Environment. | Treat these as candidates, not a component checklist; choose the layer supported by evidence. |
| Right layer → Harness change (BEAT-045 → 046) | The stale Test Skill is the supported cause in the controlled case. | The developer must update the relevant artifact without implying autonomous self-modification. | “원인이 stale Test Skill이라면 어디를 어떻게 바꿔야 할까?” | Make a scoped update to the Skill or workflow and review related durable knowledge only if needed. | Product-assisted changes depend on verified capability; keep human review visible. |
| Harness change → Rerun (BEAT-046 → 047) | The relevant artifact now contains the current Project Test command. | The developer needs to check whether the agent uses it under the stated conditions. | “같은 Task가 이제 통과하면 Harness가 개선됐다고 말해도 될까?” | Rerun the same or a representative task and record command, environment, and result. | A single passing rerun is bounded evidence, not proof of full-system quality. |
| Rerun → Evaluation (BEAT-047 → 048) | The tested case may no longer show the original Failure. | One task does not reveal behavior across all relevant work. | “어떤 대표 Task와 기준으로 이 변경을 평가할까?” | Check representative Bug Fix, Performance, and Refactoring cases with stated criteria. | Evaluation can be small and repeatable; do not imply a large benchmark is required. |
| Evaluation → Regression check (BEAT-048 → 049) | The change behaves as expected on selected tasks. | A broad rule may block a different but valid task. | “한 Failure를 막은 Rule이 다른 Task를 막지는 않는가?” | Test for a regression, then keep, refine, or revert based on evidence. | A fix is not successful if it merely moves the failure to another valid task. |
| Regression → Context bloat risk (BEAT-049 → 050) | A change can fix one case while harming another. | Adding another instruction for every Failure may recreate the earlier Context problem. | “모든 Failure에 새 Rule을 추가하면 어떤 문제가 다시 생길까?” | Revisit Context relevance and show illustrative rule accumulation without treating counts as thresholds. | Not every Failure needs an Instruction; avoid fabricated project history. |
| Context bloat → Loop architecture reveal (BEAT-050 → 051) | The learner has seen observation, cause analysis, change, evaluation, regression, and the risk of rule bloat. | These steps need to be understood as one feedback system rather than a checklist of reactions. | “관찰한 경험을 어떻게 다음 실행의 더 나은 System으로 연결할까?” | Reveal Execute → Verify → Observe → Cause Analysis → Change → Evaluate → Regression Check → Next Task, with Product and Harness as possible change targets. | Distinguish the task-level Product Loop from the cross-task Harness Improvement Loop; “Learn” means a justified durable system change, not automatic model-weight learning or automation alone. |
| Loop reveal → Loop distinction (BEAT-051 → 052) | The feedback architecture has Product and Harness improvement outcomes. | Similar steps could make the task-level Product Loop and cross-task Harness Improvement Loop seem interchangeable. | “현재 Product Code를 고치는 Loop와 다음 Agent 작업을 개선하는 Loop는 무엇이 다른가?” | Compare each loop's unit, target, and connection. | Keep the training focus on Harness improvement without claiming the loops are independent. |
| Loop distinction → automation levels (BEAT-052 → 053) | Product Code and agent work systems can both receive feedback. | The learner may assume a Loop requires full automation. | “Feedback를 사람이 처리할지, Agent 도움을 받을지, 일부 자동화할지 어떻게 정할까?” | Compare manual, assisted, and automated arrangements under risk-aware controls. | Automation is neither the definition of a Loop nor a required maturity level. |
| Automation levels → Memory maintenance (BEAT-053 → 054) | Feedback can be handled at different automation levels. | A retained fact can become stale and misdirect later work. | “Project가 바뀐 뒤 Memory가 옛 상태를 말하면 어떻게 해야 할까?” | Reuse the Module X conflict, verify against the canonical Project source, then update or retire Memory and check a later task. | Keep project Source of Truth authoritative; label the scenario illustrative unless reproduced. |
| Memory maintenance → Skill maintenance (BEAT-054 → 055) | A stale Memory can be validated, updated, or retired. | Reusable Skills can also preserve incomplete procedures. | “Skill이 에러 없이 실행되어도 성과를 비교하지 못하면 충분한가?” | Add baseline, comparison, correctness, and regression checks to the Performance workflow. | Treat this as workflow quality; do not claim measured performance gains. |
| Skill maintenance → Subagent maintenance (BEAT-055 → 056) | The Skill's procedure is improved to make comparison and checks possible. | A fixed delegation structure may remain active even when tasks do not need it. | “작은 Task에도 모든 Subagent를 실행해야 할까?” | Classify work by complexity and keep only the roles that contribute useful evidence. | Do not claim cost or latency changes unless they are measured. |
| Subagent maintenance → Minimum Effective Harness (BEAT-056 → 057) | Delegation can expand or contract with task complexity. | Learners may equate maturity with adding more components. | “현재 반복되는 문제를 해결하는 데 필요한 최소 Harness는 무엇인가?” | Name Minimum Effective Harness as a project heuristic and fit mechanisms to recurring friction. | Do not present examples as a required feature checklist or official taxonomy. |
| Minimum Effective Harness → observed Meta Case (BEAT-057 → 058) | The observed Product succeeded with only its justified components. | A distinct real feedback case may show how evaluation/reporting rules change. | “실제 Trial Evidence가 Training Production의 평가 방식을 어떻게 바꾸었나?” | Trace TRIAL-006 → DEC-0016 → TRIAL-007/008 as DEMO-04B. | This is a supporting observed Meta Case, not a continuation or cause of DEMO-04A. |
| Observed Meta timeline → claim boundary (BEAT-058 → 059) | The actual timeline changed Trial-evaluation and reporting practice. | Evidence remains partial and could be overstated. | “이 기록이 뒷받침하는 것과 뒷받침하지 않는 것은 무엇인가?” | Preserve the TRIAL-007 report/stderr discrepancy and no-MCP-result limit; bound all claims. | Do not claim measured quality improvement, Product code change, or stale Skill repair. |
| Separate evidence paths → full recap (BEAT-059 → 060) | The conceptual stale case, observed Product path, and observed Meta Case have separate roles. | Learners may still perceive disconnected mechanisms. | “어떤 문제 때문에 각 단계가 필요했으며 어떤 경계가 남았나?” | Recap the single Prompt → Context → Harness → Loop Story and its evidence types. | Keep the top-level progression; do not merge the two ACT 4 paths. |
| Full evolution recap → AI-Native model (BEAT-060 → 061) | The learner can see the full path and its motivating frictions. | The learner needs a concise name for the resulting change in development practice. | “처음과 지금, Developer가 하는 일은 어떻게 달라졌을까?” | Compare the opening and ending work patterns and present the STEP 03 teaching model. | Label AI-Native Development as this course's model, not universal consensus or full automation. |
| AI-Native model → developer responsibility (BEAT-061 → 062) | The developer now designs tasks and agent work systems while work can be delegated. | Expanded delegation could be mistaken for surrendering judgment or accountability. | “AI가 더 많은 일을 맡아도 개발자가 계속 책임지는 것은 무엇인가?” | Name goal, trade-off, risk, verification, review, and accountability as developer responsibilities. | Do not imply coding skills are obsolete or treat role tendencies as a rigid division. |
| Developer responsibility → Verification payoff (BEAT-062 → 063) | The developer retains goals, judgment, verification criteria, risk decisions, review, and accountability. | An Agent's completion statement may still be mistaken for evidence. | “Agent가 끝났다고 말한 것과 완료를 확인할 수 있는 근거는 어떻게 다른가?” | Trace Verification from Prompt request through Context, reusable Harness workflow, and Loop evaluation. | Preserve Generated ≠ Done; Benchmark remains conditional on the task. |
| Verification payoff → task workflow payoff (BEAT-063 → 064) | Build, Test, optional Benchmark, Review, and Harness-change checks provide different evidence. | The learner may remember `Investigate → Plan → Implement → Verify → Review` only as a Prompt template. | “이 순서가 실제 작업에서 어떻게 발전했을까?” | Show it as a reliable default that can be supported by Context, Harness, and Loop. | Keep task execution distinct from the maturity progression; do not force every step onto every small task. |
| Task workflow → Engineering layers (BEAT-064 → 065) | One task workflow can appear at every maturity stage. | Prompt, Context, Harness, and Loop may be confused as competing fixes. | “각 Layer는 서로 다른 어떤 문제를 해결하는가?” | Compare the central question and object of each layer. | Show scope expansion; later layers do not obsolete earlier ones. |
| Four layers → missed-Test case (BEAT-065 → 066) | The learner can distinguish task instruction, information, work environment/process, and feedback. | The layer map needs a practical failure to become usable. | “Agent가 Test를 제대로 실행하지 않았다면 무엇부터 확인할까?” | Apply each layer as a separate diagnostic lens to the same failure. | The scenario is a diagnostic example; do not assert a cause before evidence. |
| Missed-Test case → diagnostic questions (BEAT-066 → 067) | A single failure may have Prompt, Context, Harness, or recurring-system causes. | Learners need concise questions to choose what to inspect next. | “다음에는 어떤 질문으로 원인을 좁힐 수 있을까?” | Gather practical questions for task clarity, information, routing, workflow, roles, Memory, Verification, and recurrence. | Treat the list as a future Cheat Sheet candidate; do not finalize its design here. |
| Diagnostic questions → beginner perspective (BEAT-067 → 068) | A set of questions can help locate a current friction. | A full Harness picture may make a beginner feel required to adopt everything. | “내일부터 이 모든 것을 만들지 않고 한 단계만 시도한다면 무엇일까?” | Offer a gradual path from current chatbot use to repository investigation, investigation-first, and relevant checks. | Use one shared Story and avoid turning the path into mandatory product installation. |
| Beginner next step → advanced perspective (BEAT-068 → 069) | A beginner can make one change suited to their current work. | Experienced users may already delegate work and need a reliability question. | “이미 Agent를 잘 쓰고 있다면 다음 병목은 Model일까, Harness일까?” | Examine stale Context, Skill fit, Subagent use, Memory, Verification, evaluation, recurrence, and technical debt. | Keep both perspectives inside the shared audience Story; more features are not the goal. |
| Advanced perspective → shared takeaways (BEAT-069 → 070) | Experienced users can examine system reliability without adding components. | Different next steps still need a common organizational baseline. | “서로 다른 경험에서 공통으로 가져갈 일곱 가지 Insight는 무엇인가?” | Revisit the seven takeaways already defined in the Curriculum. | Preserve the approved meanings; later shorten wording only without changing them. |
| Shared takeaways → private reflection (BEAT-070 → 071) | Learners share the seven takeaways but start from different practices. | The close should prompt personal transfer without requiring a public answer. | “내가 AI와 개발하는 방식에서 다음에 바꿀 수 있는 것은 무엇인가?” | End with one or two private questions and `Question → Task → Context → System → Feedback Loop`. | Add no feature, exercise, or new stage; participation remains optional. |

## Major Transition Details

### TRANS-001 — Chatbot → Codex repository exploration

**From State:** The developer uses ChatGPT for local code questions and
manually selects the code or error to provide.

**Success:** A bounded question about supplied material is familiar and useful.

**New Friction:** A project-level question spans files, so the developer must
first find and carry relevant repository context.

**Audience Question:** “AI에게 질문하기 전에 내가 이미 관련 코드를 다
찾아야 하나?”

**Reveal:** In a supported, permissioned environment, ask Codex to investigate
available repository context for a bounded read-only question.

**Key Phrase:** “코드를 AI에게 가져가는 대신, AI가 코드가 있는 곳을
찾아가게 하면 어떨까?”

**Do Not Say:** “ChatGPT는 개발에 쓸 수 없고 Codex가 항상 Repository를
완벽하게 이해한다.”

**Evidence:** `CLM-0002`, `CLM-0009`; `OQ-003`, `OQ-005`;
`references/product/CAPABILITY_MATRIX.md`.

### TRANS-002 — Codex → Prompt Engineering

**From State:** A repository-aware Agent can inspect files relevant to a
bounded project question.

**Success:** The developer no longer has to manually paste every relevant
file for the demonstrated investigation.

**New Friction:** Repository visibility does not reveal the intended goal,
acceptable scope, process, trade-offs, or completion evidence.

**Audience Question:** “같은 Repository를 보더라도 왜 요청에 따라 결과가
달라질까?”

**Reveal:** Specify the task's Goal, Context, Constraints, Process, and
Verification, and ask for investigation before changes when appropriate.

**Key Phrase:** “코드를 볼 수 있는 것과 내가 원하는 일을 아는 것은 같은가?”

**Do Not Say:** “Repository를 열어 주면 Agent가 의도를 알아서 추론한다.”

**Evidence:** `CLM-0002`; `references/engineering/prompt-engineering.md`;
`INV-NARRATIVE-002`.

### TRANS-003 — Prompt → Context Engineering

**From State:** A clear task Prompt can make one bounded task and its
completion conditions easier to review. DEC-0042 keeps the central request:
“원하는 변화, 지켜야 할 조건, 완료를 판단할 근거를 요청에 담는다.”
Investigation order and requested verification/reporting belong to that
request; they are not a separate testing course.

**Success:** Prompt Engineering is useful and remains part of later work.

**New Friction:** Similar Bug Fix, Performance, and Refactoring tasks repeat
the same Build, Test, API, and Style facts. In S30–S32, recurring test
commands and preserved conditions make that information-lifetime problem
visible even after the current request has been clarified.

**Audience Question:** “왜 Project에 대해 똑같은 설명을 매번 반복하고
있을까?”

**Reveal:** Separate task-specific instructions from reusable Project
information; introduce Context as an information design problem.

**Key Phrase:** “이번 Task의 요청과 Project가 계속 알아야 할 사실은 어디에
두는 것이 좋을까?”

**Do Not Say:** “Prompt Engineering은 Context Engineering이 나오면 더 이상
필요하지 않다.”

**Evidence:** `INV-MATURITY-001`; `plan/CURRICULUM.md` (Overall Narrative);
`references/engineering/context-engineering.md`.

### TRANS-004 — AGENTS.md → Context Separation

**From State:** Repeated Project guidance has been moved into a concise
`AGENTS.md` pattern.

**Success:** Several tasks can reuse common Project facts without copying them
into each Prompt.

**New Friction:** As more rules and workflows accumulate, information may be
irrelevant to a small task, stale, duplicated, or difficult to route.

**Audience Question:** “새로운 Rule이 생길 때마다 AGENTS.md에 모두 추가하면
될까?”

**Reveal:** Separate information by scope and task relevance; show routing and
progressive disclosure only after accumulation is visible.

**Key Phrase:** “파일에 정보가 있다는 것과 이번 Task에 필요한 Context라는
것은 같은가?”

**Do Not Say:** “AGENTS.md가 길어지면 특정 줄 수부터 Agent가 실패한다.”

**Evidence:** `CLM-0005`, `CLM-0014`, `CLM-0015`;
`references/engineering/context-engineering.md`.

### TRANS-005 — Context → Harness

**From State:** Relevant Project information is organized and available for
the task that needs it.

**Success:** The Agent has a better chance to find current Project facts
without receiving every rule on every task.

**New Friction:** Knowing Project facts does not by itself define a repeatable
work sequence, appropriate tools, roles, or checks.

**Audience Question:** “Agent가 Project를 잘 이해하면 항상 같은 방식으로
잘 일할까?”

**Reveal:** Use BEAT-018/019's labeled teaching model to pose process variation;
then show the observed procedure recurrence in TRIAL-006/007. Name Harness
only after its parts have earned their place.

**Key Phrase:** “무엇을 알아야 하는지와 어떻게 일해야 하는지는 같은
질문일까?”

**Do Not Say:** “Harness는 AGENTS.md에 모든 기능을 더한 목록이다.”

**Evidence:** `CLM-0030`; `OQ-011`;
`references/engineering/harness-engineering.md`.

### TRANS-006 — Repeated Workflow → Repository-owned Skill

**From State:** TRIAL-006 and TRIAL-007 apply the same observable Performance
procedure to different targets; DEC-0017 selects a repository-owned Skill.

**Success:** The procedure recurred across two distinct paths, giving the
Skill a recorded workflow-reuse rationale.

**New Friction:** The selected product surface still needs to show that the
repository Skill is discovered and invoked in the intended training run.

**Audience Question:** “선택한 환경에서 이 반복 절차를 재사용할 수
있는가?”

**Reveal:** Show DEC-0017's repository-owned Skill choice, then use TRIAL-008
to show explicit discovery and invocation on Codex CLI 0.154.0.

**Key Phrase:** “반복된 작업 절차를 Project 안의 재사용 가능한 형태로
관리할 수 있을까?”

**Do Not Say:** “모든 반복 작업은 Skill이어야 하며 어느 제품 환경에서나
동일하게 발견되고 같은 결과를 보장한다.”

**Evidence:** DEC-0017; TRIAL-006/007 procedure recurrence; TRIAL-008 explicit
discovery/invocation on Codex CLI 0.154.0; Desktop behavior remains under
OQ-005.

### TRANS-007 — Task complexity → delegation decision

**From State:** A repository-owned reusable Performance workflow supports a
bounded task. The actual candidate-task audit is available for review.

**Success:** Current candidates fit one Agent; their evidence overlaps,
independent Context needs are weak, and expected coordination work is not
justified by a demonstrated benefit.

**New Friction:** A different task could contain independent investigations,
role specialization, Context isolation, or useful parallel work.

**Audience Question:** “어떤 증거가 역할 분리를 정당화하며 결과를 합칠
비용은 무엇인가?”

**Reveal:** Show Subagents as one conditional mechanism through a conceptual
role map. Consider it only when its independent evidence value exceeds
handoff, duplication, coordination, and integration costs.

**Key Phrase:** “Subagent는 다음 단계가 아니라 Task가 요구할 때 선택하는
도구다.”

**Do Not Say:** “복합적으로 보이는 Task는 반드시 Subagent가 필요하다” or
“현재 Demo에서 Subagent가 사용되었다.”

**Evidence:** `OBSERVED_PRODUCT` decision in DEC-0018 and
`plan/DEMO_MATRIX.md` §§171–180; `TEACHING_MODEL` in BEAT-024–026.

**Related Invariants:** `INV-MATURITY-007`, `INV-DEMO-003–004`.
### TRANS-008 — Trial-history audit → Memory decision

**From State:** Current Project Context and routing serve bounded tasks; the
Trial record contains repeated project, workflow, environment, and benchmark
information that needs classification.

**Success:** Project facts have source/code or maintained-document homes; the
repeated Performance procedure has a repository Skill; Trial observations are
scoped to task, host, runtime, and workload.

**New Friction:** No costly rediscovery of a reusable Project fact missing
from its maintained Source of Truth is evidenced.

**Audience Question:** “이 정보는 Context, Source of Truth, Workflow, Trial
Observation, temporary detail, 아니면 Durable Knowledge인가?”

**Reveal:** Explain Memory conditionally: consider it only when costly repeated
rediscovery and reusable scoped knowledge are supported by provenance and a
freshness path. The primary Project has no justified Memory candidate.

**Key Phrase:** “Memory는 반복해서 비싸게 다시 찾는 유효한 지식이 있을 때
고려한다.”

**Do Not Say:** “Trial에서 같은 정보를 봤으니 Memory가 필요하다” or
“Memory는 Source of Truth를 대신한다.”

**Evidence:** `OBSERVED_PRODUCT` history audit in `plan/DEMO_MATRIX.md`
§§181–200, 261–272 and OQ-013; conditional lifecycle in BEAT-030–032.

**Related Invariants:** `INV-MATURITY-008`, `INV-DEMO-003`.
### TRANS-009 — Actual components → Harness reveal

**From State:** The primary Product path has Project Context, routing, a
repository-owned Performance Skill, Benchmark, Tests, tools/environment, and
a task Prompt boundary.

**Success:** Those elements have distinct, evidence-backed roles. Subagent and
Memory were reviewed and were not needed for the bounded task.

**New Friction:** Learners need a system view without turning it into a fixed
feature count.

**Audience Question:** “Agent가 안정적으로 일하도록 Project 수준에서 어떤
작업 환경을 설계했는가?”

**Reveal:** Define Harness as an intentionally designed Project-level working
environment. Show the observed components after their frictions and roles are
visible; mark Subagent and Memory as optional and absent from this Product
Demo.

**Key Phrase:** “Harness는 보유한 기능의 수가 아니라 Agent의 작업 조건과
검증 방법을 설계하는 일이다.”

**Do Not Say:** “모든 Harness는 AGENTS, Skill, Subagent, Memory, Tools를
다 가져야 한다.”

**Evidence:** `OBSERVED_PRODUCT` at STATE-04-PERF; `TEACHING_MODEL` wording
under OQ-011; `INV-MATURITY-005`, `INV-MATURITY-009`.
### TRANS-010 — Working Harness Success → conceptual staleness

**From State:** The continuous Product Demo has ended at verified
`STATE-04-PERF`.

**Success:** The bounded Skill-supported Product Change passed the recorded
focused and full Tests, Benchmark correctness guards, CLI smoke check, and
diff review. It did not use Subagent or Memory.

**New Friction:** A successful system may not remain aligned after a later
Project change. This is a question for a separate teaching case, not an
observed change in the Demo repository.

**Audience Question:** “Project가 바뀐 뒤에도 Agent의 작업 환경은 계속
현재 상태와 맞을까?”

**Reveal:** Introduce DEMO-04A as a labeled conceptual controlled example of a
previously correct workflow becoming stale after an independently justified
Project change.

**Key Phrase:** “여기까지는 잘 동작합니다. 이제 별도의 개념 사례로 유지보수
문제를 살펴봅니다.”

**Do Not Say:** “STATE-04-PERF 뒤에 Demo Product가 바뀌어 Skill이 실패했다.”

**Evidence:** `OBSERVED_PRODUCT` at STATE-04-PERF; `CONCEPTUAL` in DEC-0021
and BEAT-038–049.

**Related Invariants:** `INV-MATURITY-010`, `INV-DEMO-003`.
### TRANS-011 — Feedback evidence → Loop Engineering

**From State:** DEMO-04A presents a conceptual stale-workflow path through
observation, cause analysis, a scoped system change, evaluation, and regression
checking. Separately, DEMO-04B presents actual Training Production Trial
history: TRIAL-006 → DEC-0016 → TRIAL-007 / TRIAL-008.

**Success:** The two paths expose a shared teaching pattern:
`Execution → Observation → Cause → System Change → Re-evaluation`.

**New Friction:** The common pattern could be mistaken for automatic repetition,
model self-learning, or evidence that the conceptual case caused the observed
Meta decision.

**Audience Question:** “서로 다른 Feedback 사례에서 무엇이 공통이고, 각
사례가 실제로 증명하는 범위는 어디까지인가?”

**Reveal:** Name feedback-driven system improvement after the steps appear.
Distinguish Product Loop from Harness Improvement Loop. Preserve each path's
evidence class and causal boundary.

**Key Phrase:** “Loop는 실행을 반복하는 것만이 아니라 관찰을 통해 다음
System 결정을 평가하는 구조다.”

**Do Not Say:** “실제 Trial이 stale Product Skill을 고쳤다” or “한 번의
성공으로 System 품질 개선이 증명됐다.”

**Evidence:** `CONCEPTUAL` DEMO-04A and `OBSERVED_META` DEMO-04B under
DEC-0021; `INV-LOOP-001`; `plan/DEMO_MATRIX.md` §§221–230.

**Related Invariants:** `INV-LOOP-001`, `INV-DEMO-003–004`,
`INV-VERIFY-001`.
### TRANS-012 — Loop → AI-Native Development

**From State:** The learner has seen the observed Product success, a separate
conceptual maintenance case, and a bounded observed Meta feedback case.

**Success:** The Story connects them through evidence-informed system
improvement while preserving what each path does and does not support.

**New Friction:** The learner may mistake increasing delegation or automation
for transferring engineering judgment and accountability.

**Audience Question:** “시스템이 더 많은 일을 지원해도 Developer가 계속
책임지는 것은 무엇인가?”

**Reveal:** Recap the single problem-driven Story as this course's operational
AI-Native Development model: developers design agent work environments and
feedback while retaining goals, judgment, verification, and responsibility.

**Key Phrase:** “AI를 사용하는 데서 AI가 일할 System을 설계하는 데로 관점이
어떻게 넓어졌을까?”

**Do Not Say:** “AI-Native는 업계가 합의한 최종 성숙도이거나 개발자의
책임을 AI로 옮긴다는 뜻이다.”

**Evidence:** `INV-NARRATIVE-001–002`, `INV-LOOP-001`, `INV-DEMO-003`;
BEAT-060–071; the split evidence roles in DEC-0021.

## Transition Quality Audit

The twelve required major transitions are checked against the STEP 05 audit
questions. The Beat-level map remains in `Transition Map`; stable records above
preserve the causal handoff and presenter guardrails.

| Audit question | Result | Evidence in the Story |
|---|---|---|
| Does the previous method have a credible initial success? | PASS | Chatbot, task Prompt, initial `AGENTS.md`, workflows, and bounded Harness tasks retain their stated value. |
| Does the new friction arise from scale, repetition, complexity, or project change? | PASS | Each major transition records the event that makes the next problem visible. |
| Can learners feel the need before hearing the next term? | PASS | Each TRANS record places an audience question before the Engineering reveal. |
| Is the proposed response a plausible option rather than the only possible fix? | PASS | Product mechanisms are conditional; conceptual fallbacks remain available. |
| Is the failure fair and recognizable rather than staged to ridicule an Agent? | PASS WITH EVIDENCE LABELS | DEMO-04A is conceptual; the separate observed Meta path retains its recorded scope and attribution limits. |
| Is a failure being invented solely to justify the next technology? | PASS | No transition requires a fabricated observation; hypothetical states stay labeled. |

**Overall: PASS WITH EVIDENCE LABELS.** Observed Product and Meta outcomes
remain bounded to their records. Demo packaging and the selected presentation
surface still need their own checks; DEMO-04A remains conceptual.

## ACT Handoffs

### ACT 0 → ACT 1

**Carry forward:** Repository context can be investigated by an agent, within
the selected surface and permissions.

**Ask:** “저장소를 보더라도 원하는 변화·지킬 조건·완료 근거까지
자동으로 정해졌을까?”

**Next event:** Reveal that repository visibility and task clarity solve
different problems. The agent may see the code and still lack intent,
constraints, and the requested evidence of completion.

### ACT 1 → ACT 2

**Carry forward:** A well-framed task is worth doing. Desired changes,
preserved conditions, the investigation process, and requested verification
evidence belong to the task request. S17–S19 connect the actual recorded
request to observed work; S20–S21 bring the evidence back to human completion
judgment. The historical Trial is not an execution of S16's teaching Prompt.

**Ask:** “요청은 구체화했지만 같은 테스트 명령과 보존 조건을 다음
작업에도 다시 적는다. 왜 Project 설명을 매번 반복할까?”

**Next event:** Separate task-specific request details from recurring project
facts and let a small reusable guidance set work before exploring its limits.

### ACT 2 → ACT 3

**Carry forward:** Relevant project information is better organized, and the
first reusable guidance provided value.

**Ask:** “Agent가 Project를 잘 이해하면 항상 같은 방식으로 잘 일할까?”

**Next event:** Distinguish the labeled process-variation teaching model from
the observed recurrence across TRIAL-006/007, then follow DEC-0017 and
TRIAL-008 to the repository-owned Skill. Move from Project knowledge to the
reusable work method and environment.

### ACT 3 → ACT 4

**Carry forward:** `STATE-04-PERF` is a bounded, verified Product success. The
actual Harness used Project Context, routing, a reusable Performance Skill,
Benchmark, Tests, tools/environment, and a task Prompt boundary; it did not
need Subagent or Memory.

**Ask:** “Project 변화 뒤에도 이전에 잘 맞던 Workflow가 계속 맞을까?”

**Next event:** Start DEMO-04A as a separate, labeled conceptual controlled
case. Show stale-workflow friction, observation, cause, scoped change,
evaluation, and regression without adding a Product State or implying a real
Demo-repository failure. Later show DEMO-04B as a distinct observed Trial
history path.

### ACT 4 → ACT 5

**Carry forward:** The conceptual stale-Harness case and observed Meta Case
share a feedback pattern, but remain separate histories with different
Evidence Types. No measured Product or training-quality improvement is
claimed. The developer still owns the goal, judgment, risk, verification
criteria, and review.

**Ask:** “지금 자신의 업무에서 다음으로 바꿀 수 있는 것은 무엇인가?”

**Next event:** Synthesize the entire progression, then revisit Verification,
the task workflow, and the four Engineering layers as compact payoffs. Offer
beginner and advanced perspectives within the same Story, recap the seven
Curriculum takeaways, and end with a private reflection. Keep these within
ACT 5's existing 30 minutes.

## Transition Quality Checks

- The learner can state the friction before hearing the next technology term.
- The previous stage's first success remains credible and useful.
- The next step answers the unresolved question rather than arriving as a
  feature announcement.
- Failure, causal attribution, and improvement claims carry an evidence status.
- Transitions retain the single evolving project and shared audience Story.
- Product-independent fallbacks preserve the underlying insight when a
  product feature or target account is unavailable.


## DEC-0044 — S17 to edit and verification evidence

S17 pairs01 reproduction,02 product call-path investigation and03 pre-edit
plan with scoped observed records. Its bottom handoff reserves04 edit detail
for S18 and05 verification outcomes for S19. Keep S18/S19 screens and time
unchanged; do not repeat their diff, width or pass-count payload on S17.
