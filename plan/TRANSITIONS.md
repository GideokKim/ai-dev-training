# Story Transitions

> Status: STEP 05 COMPLETE WITH OPEN QUESTIONS through §120; baseline for
> STEP 06.
> the current STEP 04 Curriculum. These transitions carry causal questions
> between events; they are not chapter titles or final slide copy.

## Transition Rule

At a transition, leave the learner with the unresolved question produced by
the current Story state. Let the next event answer that question. Do not name
or define the next technology before the problem that earns it is visible.

The Transition Map connects adjacent Story Beats and preserves the current
Curriculum's ACT exit questions. Stable `TRANS-XXX` records below detail the
required major transitions, their causal handoff, a presenter phrase, and a
guardrail. They may be refined later without changing the protected
`Chatbot → Prompt → Context → Harness → Loop → AI-Native Development` sequence.

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
| Context success → Process friction (BEAT-017 → 018) | Prompts are concise, core rules remain, and task-specific Context can be found. | The same Performance task still follows different procedures. | “Project에 대해 알아야 할 것을 다 알려줬는데 왜 작업 방법은 매번 달라질까?” | Compare multiple labeled executions of the same task type. | Context organization is not claimed to cause procedural consistency. |
| Process variation → Knowledge vs Process (BEAT-018 → 019) | Performance executions differ in baseline, edit scope, tests, and benchmark use. | The learner may confuse missing Project knowledge with a missing procedure. | “정보를 아는 것과 일하는 방법을 아는 것은 같은가?” | Distinguish task Context from the ordered Performance workflow. | Treat Run A/B/C as illustrative unless reproduced and recorded. |
| Knowledge/Process distinction → repeated procedure (BEAT-019 → 020) | The needed Context and the desired task sequence are now distinct. | The same ordered steps are typed into each Performance Prompt. | “작업 방법도 재사용할 수 없을까?” | Show repeated procedure text across Task 1, Task 2, and Task 3. | Do not jump to a Skill name before repetition is visible. |
| Repeated procedure → reusable workflow (BEAT-020 → 021) | The developer repeatedly specifies the same baseline, investigation, plan, change, and checks. | The workflow is not yet a Project asset. | “같은 절차를 매번 Prompt에 쓰지 않고 제공할 수 있을까?” | Define one repeatable Performance workflow; use a supported Skill if available or a repository procedure fallback. | The reusable workflow is the Engineering idea; the Product feature is conditional. |
| Reusable workflow → bounded success (BEAT-021 → 022) | A Performance procedure now exists in a reusable form. | The learner needs to see its steps and checks in use. | “다시 실행했을 때 Baseline·Plan·Test·Benchmark·비교가 드러나는가?” | Examine a bounded run and its verification evidence. | Claim consistency only to the extent supported by recorded runs and criteria; keep the full Harness diagram for later. |
| Workflow success → complexity expansion (BEAT-022 → 023) | A reusable Performance workflow helps with one class of task. | A candidate performance issue crosses a multi-module call path and brings architecture, benchmark, test, and possible documentation constraints into one safe-change decision. | “하나의 Performance 절차로 이 복합 Task도 충분할까?” | Expand the same Project's task complexity and show why its call path and regression risk create distinct investigations. | Keep the same evolving Project; treat the case as a Demo Assumption until a selected repository supports it; do not portray workflow success as failure. |
| Complexity → Role Separation problem (BEAT-023 → 024) | One agent switches among investigation roles and kinds of Context; some questions may be independent. | Learners need to see role separation as an Engineering problem before hearing a product feature name. | “Task를 나누는 것뿐 아니라 역할과 Context도 나눌 수 있을까?” | Map role boundaries, dependencies, required Context, and evidence handoff in plain language. | Do not name Subagents before the Role Separation problem is clear. |
| Role Separation → Subagent mechanism (BEAT-024 → 025) | Role boundaries and integration needs are visible as a design problem. | The developer needs a possible way to perform separate investigations. | “이 역할별 조사를 실제 작업에서 어떻게 나눌 수 있을까?” | Introduce Subagents as one conditional mechanism and distinguish the conceptual diagram from current Product behavior. | Follow STEP 03 evidence and target-surface availability; otherwise use a conceptual fallback. |
| Subagent structure → bounded success (BEAT-025 → 026) | Main Agent and role-scoped investigations can isolate relevant Context and return evidence for integration. | The learner needs to see what would count as success without an unsupported speed claim. | “각 역할이 필요한 Context에 집중하면서 결과를 어떻게 안전하게 합칠까?” | Show clear roles, independent investigation where possible, useful handoff, and Main Agent integration. | Keep the case controlled or illustrative until selected Demo evidence exists; include context loss, duplication, coordination, and integration costs. |
| Bounded Subagent success → overuse (BEAT-026 → 027) | Role separation appears useful for a complex task when each role has a clear purpose. | The developer may generalize the success to every task. | “이 구조가 유용했다면 다음 작업에도 역할을 더 나누는 것이 좋을까?” | Contrast the complex investigation with a small bug fix and show possible coordination overhead. | Do not claim measured slowness or cost unless recorded; agent count is not maturity. |
| Subagent overuse → repeated discovery (BEAT-027 → 028) | More roles can add work when the task does not justify them. | Across tasks, useful project facts are still rediscovered. | “이미 알아낸 Project 사실을 왜 다음 Task에서 또 발견하고 있을까?” | Move from role coordination to a separate cross-task knowledge-reuse friction. | Keep candidate history illustrative unless the Demo repository establishes it. |
| Re-discovery → Context vs Memory question (BEAT-028 → 029) | Similar facts may be investigated again in later tasks. | Current Context answers what is needed now, but not what is worth keeping for later. | “지금 필요한 정보와 앞으로 다시 사용할 정보는 어떻게 구분할까?” | Let repeated benchmark-condition research motivate a distinct retention question. | Do not present Memory as more information in the current Context or introduce a product mechanism first. |
| Context/Memory distinction → retention design (BEAT-029 → 030) | Immediate Context and cross-task retention have different purposes. | A useful fact may be worth retaining, but a product's persistent mechanism is not yet selected or verified. | “어떤 지식을 보존해야 다음 작업에 실제로 도움이 될까?” | Separate the Engineering Memory pattern from product Memory and identify implementation options conditionally. | The Project's canonical Source of Truth remains authoritative; do not imply feature availability. |
| Memory design → bounded reuse (BEAT-030 → 031) | The developer has identified a candidate fact and possible durable locations. | The learner needs to see how validated knowledge may help a later task. | “이 정보는 어디에 보존하고, Task B에는 어떻게 제공해야 할까?” | Carry the Release-build benchmark condition from Task A into Task B's relevant Context. | Label the outcome controlled or illustrative until recorded; do not anthropomorphize AI memory or claim unmeasured time savings. |
| Memory reuse → lifecycle and staleness (BEAT-031 → 032) | A retained fact can prevent repeating its original investigation while it remains accurate. | The fact may become false after the Project changes. | “프로젝트가 바뀌어 기억이 틀리면 어떻게 발견하고 고칠까?” | Show validation, scope, freshness, update, and retirement with a formerly valid migration note. | Treat staleness as illustrative or observed according to evidence; do not jump straight to Loop Engineering. |
| Memory lifecycle → tools in the work system (BEAT-032 → 033) | Memory now has validation, scope, retrieval, freshness, update, and retirement concerns. | Context, workflow, role separation, and retained knowledge still need actions in a development environment. | “Agent가 답변한 뒤 실제 변경과 확인은 무엇으로 할까?” | Revisit search, file operations, Shell, Build, Test, Lint, Benchmark, Git diff, documentation, and external tools as task capabilities. | Connect tools to work and evidence; keep availability conditional and avoid a product-feature tour. |
| Tools → structural Verification (BEAT-033 → 034) | The agent can search, inspect, edit, and execute within its environment. | Tool use alone does not establish that work is correct or complete. | “검증을 매번 기억해 요청하지 않아도 Workflow에 포함할 수 있을까?” | Compare a Prompt reminder with repeatable task workflows that include checks and review. | Preserve the “Generated ≠ Done” insight and task-level Verification. |
| Verification → Harness emerges (BEAT-034 → 035) | Reusable work methods now include tools and explicit checks. | Learners need a name for the larger system being assembled. | “우리는 Prompt를 넘어 어떤 전체 작업 환경을 설계하고 있는가?” | Trace the previously motivated parts before naming the course's Harness model. | Keep Harness wording provisional under OQ-011; do not lead with the completed architecture. |
| Harness emerges → architecture reveal (BEAT-035 → 036) | The developer recognizes the shift from Prompt writing to shaping an agent work environment. | The learner may still not see how the parts relate or how the work pattern evolved. | “좋은 AI Model을 쓰는 것과 좋은 AI 개발 System을 만드는 것은 같은 문제인가?” | Show a product-independent conceptual diagram and compare the beginning and current work patterns. | Treat the diagram as a course model, with optional components and conditional product behavior. |
| Architecture reveal → Harness success (BEAT-036 → 037) | The assembled system is visible as Context, optional mechanisms, Tools, Execution, and Verification. | A diagram alone does not show whether those parts support a real task. | “이 System은 Performance Task에서 어떻게 함께 작동할까?” | Show one bounded performance task through investigation, plan, implementation, tests, benchmark, and review. | Label the scenario controlled or illustrative until recorded; avoid universal quality or speed claims. |
| Harness success → time passes (BEAT-037 → 038) | The Harness supports a task under the Project assumptions for which it was designed. | The learner may assume that the system remains current without maintenance. | “Project가 바뀌면 Agent가 따르는 System도 함께 바뀌었을까?” | Advance the same Project by weeks or months and show changes that may outpace its Harness artifacts. | Keep the same evolving Project; do not imply automatic synchronization. |
| Time passes → stale workflow (BEAT-038 → 039) | Project code and canonical documentation have changed, while some system components may still reflect the old state. | A task can follow an obsolete Build or Test workflow. | “이번 Task에서 옛 Workflow가 사용되면 어떤 일이 생길까?” | Show one clearly labeled CMake/CTest-to-Bazel mismatch and a developer correction. | Treat it as illustrative or controlled unless observed; resolve this task locally and do not introduce Loop from one event. |
| Local correction → repeated failure (BEAT-039 → 040) | The current task was recovered, but the durable workflow was not updated. | A later task may repeat the same mistake and require the same correction. | “이번 Task를 바로잡았는데 다음 Task도 달라질까?” | Show recurrence across later tasks with evidence status preserved. | Do not claim a real repeated failure without observation; use a controlled case when needed. |
| Repeated failure → Harness Technical Debt (BEAT-040 → 041) | The same correction can recur because an obsolete system artifact remains. | The learner needs to inspect what in the Harness has fallen behind. | “세 번째 같은 실수가 발생했다면 현재 Task만 고치는 것이 맞을까?” | Identify stale instructions, Skills, Memory, tool setup, duplicate rules, or an obsolete Workflow; compare their maintenance with Product Code. | Present Harness Technical Debt as a bounded Engineering analogy, not official Product terminology or a universal taxonomy. |
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
| Minimum Effective Harness → meta entry (BEAT-057 → 058) | The learner has a problem-shaped way to size a Harness. | The training repository may or may not have a sufficiently clear history to illustrate its own evolution. | “이 교육자료 Repository에도 확인 가능한 변화의 기록이 있는가?” | Review actual commits and artifacts before deciding whether to use the repository as a supporting example. | Keep this example conditional; never infer or fabricate past states. |
| Meta entry → bounded meta payoff (BEAT-058 → 059) | Any candidate repository milestones have been checked against the records. | Real changes do not by themselves prove their motivation or effectiveness. | “기록으로 확인되는 사실과 여기서 주장할 수 없는 것은 무엇인가?” | Map only supported milestones, explain what they illustrate, and keep the core software Demo primary. | Omit the example if evidence or available time is insufficient. If omitted, continue directly from BEAT-057 to BEAT-060. |
| Meta example or Minimum Effective Harness → full recap (BEAT-059 → 060; optional BEAT-057 → 060) | The Loop and its maintainable parts have been explored; any meta example remains bounded. | The course could still feel like a set of separate mechanisms. | “어떤 문제 때문에 각 단계가 필요해졌고, 다음 변화는 무엇을 해결했나?” | Recap the full Chatbot → Prompt → Context → Harness → Loop journey as one evolving Story. | Preserve problem-before-solution and the same-project narrative; meta material is supporting only. |
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
completion conditions easier to review.

**Success:** Prompt Engineering is useful and remains part of later work.

**New Friction:** Similar Bug Fix, Performance, and Refactoring tasks repeat
the same Build, Test, API, and Style facts.

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

**Reveal:** First show repeated workflow friction and the need to structure
how work is performed; name Harness only after its parts have earned their
place.

**Key Phrase:** “무엇을 알아야 하는지와 어떻게 일해야 하는지는 같은
질문일까?”

**Do Not Say:** “Harness는 AGENTS.md에 모든 기능을 더한 목록이다.”

**Evidence:** `CLM-0030`; `OQ-011`;
`references/engineering/harness-engineering.md`.

### TRANS-006 — Repeated Workflow → Skill

**From State:** The developer has identified a repeated procedure for a
Performance or other recurring task.

**Success:** A clear sequence can help structure one demonstrated run.

**New Friction:** Re-entering the same procedure in each Prompt adds
repetition and may omit steps or checks.

**Audience Question:** “같은 작업 방법을 매번 Prompt에 다시 쓰지 않고
재사용할 수 있을까?”

**Reveal:** Make the Engineering idea of a reusable workflow visible first;
introduce a supported Skill only if the chosen product surface permits it.

**Key Phrase:** “반복되는 작업 방법을 Project에서 다시 쓸 수 있는 형태로
둘 수 있을까?”

**Do Not Say:** “모든 반복 작업은 반드시 Skill이어야 하고 Skill은 언제나
동일한 결과를 보장한다.”

**Evidence:** `CLM-0006`; `OQ-008`; `references/TERMINOLOGY.md` (Skill);
`references/product/CAPABILITY_MATRIX.md`.

### TRANS-007 — Single Agent → Subagent

**From State:** A simple task can be handled by one Agent, while a more
complex task brings several kinds of investigation and context together.

**Success:** One Agent remains a reasonable choice for bounded tasks.

**New Friction:** On a complex task, one Agent may have to switch among
independent roles or carry too much unrelated investigation context.

**Audience Question:** “복잡한 조사에서 역할과 Context를 어떻게 나눌 수
있을까?”

**Reveal:** Consider role separation and context isolation; show Subagents as
one conditional mechanism, including handoff and coordination costs.

**Key Phrase:** “역할을 나누면 무엇이 쉬워지고, 결과를 합치는 비용은
무엇일까?”

**Do Not Say:** “Subagent를 많이 실행하면 항상 더 빠르고 정확하다.”

**Evidence:** `CLM-0007`; `OQ-003`, `OQ-005`, `OQ-008`;
`references/product/CAPABILITY_MATRIX.md`.

### TRANS-008 — Repeated Rediscovery → Memory

**From State:** Each task receives relevant immediate Context, and the Agent
can investigate Project facts when needed.

**Success:** The current task can proceed with verified information.

**New Friction:** The same useful fact is rediscovered across later tasks.

**Audience Question:** “이미 확인한 Project 지식을 왜 다음 Task에서 또
조사하고 있을까?”

**Reveal:** Separate current Context from information worth retaining across
tasks; explain Memory lifecycle, scope, validation, freshness, and retirement.

**Key Phrase:** “이번 Task에 필요한 정보와 다음에도 남겨 둘 지식은 같은가?”

**Do Not Say:** “Memory는 모든 것을 기억하며 Project Source of Truth를
대신한다.”

**Evidence:** `CLM-0008`; `OQ-003`, `OQ-005`, `OQ-008`;
`references/TERMINOLOGY.md` (Memory).

### TRANS-009 — Components → Harness

**From State:** Workflow, optional roles, Memory, tools, environment, and
Verification have each appeared as responses to separate frictions.

**Success:** Each selected element has a visible task-related purpose.

**New Friction:** A collection of mechanisms does not yet show how they work
together around a real task or why each belongs in the system.

**Audience Question:** “필요에 따라 더해진 요소들을 하나의 작업 System으로
어떻게 볼 수 있을까?”

**Reveal:** Draw a conceptual, problem-shaped work system and show one bounded
task with conditional product mechanisms.

**Key Phrase:** “각 기능 이름보다 Agent가 일할 조건과 확인 방법을 함께
설계할 수 있을까?”

**Do Not Say:** “모든 Harness는 같은 정식 구성요소를 가져야 한다.”

**Evidence:** `CLM-0030`; `OQ-011`;
`references/engineering/harness-engineering.md`.

### TRANS-010 — Harness → Harness Technical Debt

**From State:** A bounded task has succeeded under the Project and Workflow
assumptions for which the Harness was designed.

**Success:** The system supported that task within the demonstrated scope.

**New Friction:** Project commands, architecture, or knowledge can change
while reusable instructions, Skills, or Memory remain unchanged.

**Audience Question:** “Project가 바뀐 뒤에도 Agent의 작업 System은 계속
현재 상태와 맞을까?”

**Reveal:** Advance the Project timeline and show a plausible stale artifact;
use Harness Technical Debt only as a bounded engineering analogy.

**Key Phrase:** “코드가 바뀌었는데 Workflow가 예전 상태를 말하면 어떤 일이
생길까?”

**Do Not Say:** “Harness에는 공식 Technical Debt 분류가 있고, 낡은 Rule은
항상 Failure를 일으킨다.”

**Evidence:** `CLM-0022`, `CLM-0030`; `OQ-001`, `OQ-007`, `OQ-009`;
`references/engineering/harness-engineering.md`.

### TRANS-011 — Harness Failure → Loop Engineering

**From State:** A stale workflow has caused one task failure, and the
developer has corrected that task locally.

**Success:** The current task can recover without immediately changing every
durable instruction.

**New Friction:** A later task may repeat the same correction because the
system that shaped it was not changed.

**Audience Question:** “같은 Failure가 다시 나타난다면 이번 Task만 고치는
것으로 충분할까?”

**Reveal:** Observe execution, separate fact from cause hypothesis, change a
supported layer, rerun, evaluate representative tasks, and check regression.
Distinguish Product Loop from Harness Improvement Loop and keep automation
optional.

**Key Phrase:** “실패를 관찰하고 원인을 확인해 다음 실행의 System을 개선할
수 있을까?”

**Do Not Say:** “한 번의 실패가 Harness 원인을 증명하거나 Agent가 스스로
계속 학습하게 만든다.”

**Evidence:** `CLM-0020`, `CLM-0021`, `CLM-0029`; `OQ-009`;
`references/engineering/loop-engineering.md`;
`INV-LOOP-001`.

### TRANS-012 — Loop → AI-Native Development

**From State:** The learner has seen task outcomes feed a bounded, evaluated
change to Product Code or the system shaping later Agent work.

**Success:** Feedback can inform an appropriate next task or system decision.

**New Friction:** The learner may mistake greater delegation or automation
for transferring engineering judgment and accountability.

**Audience Question:** “시스템이 더 많은 일을 지원해도 Developer가 계속
책임지는 것은 무엇인가?”

**Reveal:** Recap the whole problem-driven Story and name AI-Native Development
as this course's operational teaching model: developers design agent work
environments and feedback systems while retaining goals, judgment,
verification, and responsibility.

**Key Phrase:** “AI를 사용하는 데서 AI가 일할 System을 설계하는 데로 관점이
어떻게 넓어졌을까?”

**Do Not Say:** “AI-Native는 업계가 합의한 최종 성숙도이거나 개발자의
코딩 역량이 더는 필요 없다는 뜻이다.”

**Evidence:** `CLM-0023`, `CLM-0024`; `OQ-011`;
`references/engineering/ai-native-development.md`;
`references/TERMINOLOGY.md` (AI-Native Development).

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
| Is the failure fair and recognizable rather than staged to ridicule an Agent? | PASS WITH DEMO GATE | Scenarios use ordinary tasks; actual reproductions and surface setup remain unresolved. |
| Is a failure being invented solely to justify the next technology? | PASS | No transition requires a fabricated observation; hypothetical states stay labeled. |

**Overall: PASS WITH EVIDENCE GATES.** Product behavior, failure
reproducibility, and observed outcomes are not implied by this audit.

## ACT Handoffs

### ACT 0 → ACT 1

**Carry forward:** Repository context can be investigated by an agent, within
the selected surface and permissions.

**Ask:** “같은 AI를 사용하는데 왜 사람마다 결과가 다를까?”

**Next event:** Reveal that repository visibility and task clarity solve
different problems. The agent may see the code and still lack intent,
constraints, and the requested evidence of completion.

### ACT 1 → ACT 2

**Carry forward:** A well-framed task is worth doing, and asking for
investigation and verification makes the work more reviewable.

**Ask:** “왜 우리는 매번 같은 Project 설명을 반복할까?”

**Next event:** Separate task-specific request details from recurring project
facts and let a small reusable guidance set work before exploring its limits.

### ACT 2 → ACT 3

**Carry forward:** Relevant project information is better organized, and the
first reusable guidance provided value.

**Ask:** “Agent가 Project를 잘 이해하면 항상 같은 방식으로 잘 일할까?”

**Next event:** Show a repeated procedure whose execution or checks are not
yet made reusable. Move from knowledge to the work method and environment.

### ACT 3 → ACT 4

**Carry forward:** A work system can combine only those context, workflow,
role, knowledge, tool, environment, and check elements that answer visible
needs.

**Ask:** “잘 만든 Harness가 Project 변화 뒤에도 계속 맞을까?”

**Next event:** Let time pass, resolve the first stale-workflow failure locally, then show its recurrence. Observe before diagnosing, make a scoped change, evaluate and check regression, revisit Context bloat, and reveal the full Loop only after its parts are visible.

### ACT 4 → ACT 5

**Carry forward:** A bounded, evidence-informed change can improve the system
for the evaluated scope; uncertainty and regression risk remain. The developer
still owns the goal, judgment, risk, verification criteria, and review.

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
