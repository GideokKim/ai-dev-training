# ACT 2 — Speaker Notes

Status: REVIEWED — S22–S36 follow the approved Slide Map and 19-field schema. Source alignment and local Mac Keynote rendering were reviewed. Keynote reported a missing font; the substituted family was not identified. Windows PowerPoint, target-PC font rendering, room projection, and a timed ACT 2 rehearsal remain UNVERIFIED.

Authority: `plan/SLIDE_MAP.md`, `plan/SLIDE_TEMPLATE_MAP.md`, `plan/VISUAL_SPEC.md`, `plan/VISUAL_TEMPLATE_FREEZE.md`, `plan/SPEAKER_NOTES_ARCHITECTURE.md`, `plan/SPEAKER_NOTES_FREEZE.md`, `plan/PRODUCTION_PLAN.md`, `plan/CLAIM_FREEZE.md`, `plan/DEMO_MATRIX.md`, `plan/DEMO_RUNBOOK_SPEC.md`, and `plan/DECISIONS.md`.

## S22 — 다른 Task에 같은 설명이 반복된다

Slide ID: S22

Working Title: 다른 Task에 같은 설명이 반복된다

ACT / Section: ACT 2 / 2A

Allocated Time: 5 minutes

Mode Split: Lecture 4 minutes + Case 1 minute

Primary Message: Bug fix, performance, and README Tasks can repeat the same Project facts because task-specific instructions and durable Project context have different scopes.

Opening Question: “Task는 다른데 왜 같은 설명을 계속 복사하고 있지?”

Speaker Flow:

1. (0:00–2:00) Bug fix, performance, and README Task cards appear with their own goals.
2. (2:00–4:00) Highlight the repeated test command, dependency policy, synthetic-data rule, and public-behavior constraint. Keep the shared facts visible without showing a solution.
3. (4:00–5:00) Ask the audience to notice the repetition; do not request a public answer.

Evidence / Source: BEAT-008, CLM-0003, CLM-0005. TEACHING_MODEL / CONCEPTUAL; the three cards are a constructed example, not a Trial.

Claim Boundary: Repetition can indicate a scope and lifetime question. This slide does not claim a product failure or introduce a repository instruction file as the answer.

Beginner Explanation: If every Task needs the same Project facts, consider whether those facts belong with the Task or with the Project.

Advanced Insight: Separate Task intent from durable constraints before choosing where to maintain them.

C++ Vision Bridge: N/A.

Demo Operation: N/A.

Audience Interaction: Use the final minute as a quiet case prompt. No hands-on activity or public response is required.

Transition: “공통 정보를 Prompt 밖에 둘 수 있을까?”

Time Management: Spend four minutes on the repeated facts and one minute on the question. Do not preview the solution.

Fallback: READY — use the static S22 slide in `production/ACT_2.pptx` or `production/preview/act2/S22.png`.

Validation Status: REVIEWED — source alignment checked; local Mac Keynote render checked; fallback font was not identified. Windows, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S23 — 작은 Project Context의 첫 기록

Slide ID: S23

Working Title: 작은 Project Context의 첫 기록

ACT / Section: ACT 2 / 2B

Allocated Time: 4 minutes

Mode Split: Demo 4 minutes (HYBRID planned; activation unverified)

Primary Message: The recorded STATE-01 repository contains a small root `AGENTS.md` with 15 lines and 567 bytes.

Opening Question: “반복되는 Project 정보를 한 번 기록하면 어떤 점이 달라질까?”

Speaker Flow:

1. (0:00–1:00) Set the observed state rail from `STATE-00-FIXED` to `STATE-01`.
2. (1:00–3:00) Show the reconstructed file card and its size, then point to project purpose, build/run guidance, test command, and key constraints.
3. (3:00–4:00) Keep attention on why recurring information was placed in the repository and hand off to the recorded use.

Evidence / Source: STATE-01, DEMO-02. OBSERVED_PRODUCT; file size and contents are limited to the recorded repository state. Visual is a reconstruction from repository evidence, not a live screenshot.

Claim Boundary: Do not imply that the current Codex Desktop surface or the audience’s environment was tested. The file is shown as a state artifact, not a product-feature tutorial.

Beginner Explanation: A small set of facts that applies across Project Tasks can be written down once in the repository.

Advanced Insight: The design choice is about context scope and maintenance ownership, not a measured quality or performance effect.

C++ Vision Bridge: N/A.

Demo Operation: Use the captured/reconstructed STATE-01 record. HYBRID or live activation is UNVERIFIED; do not switch to live execution during this presentation.

Audience Interaction: Point out the recurring facts without asking the audience to inspect a repository.

Transition: “이 안내가 실제 Task에서 어떻게 사용됐는지 기록을 보겠습니다.”

Time Management: Keep the file tour under two minutes. Do not read all lines or turn the slide into a feature manual.

Fallback: READY — use the static state reconstruction in `production/ACT_2.pptx` or `production/preview/act2/S23.png`; no live environment is required.

Validation Status: REVIEWED — STATE-01 source and local Mac Keynote render checked; fallback font was not identified. Current Desktop behavior, Windows PowerPoint, room projection, and timed rehearsal remain unverified.

## S24 — 한 번의 사용에서 확인된 것

Slide ID: S24

Working Title: 한 번의 사용에서 확인된 것

ACT / Section: ACT 2 / 2B

Allocated Time: 4 minutes

Mode Split: Demo 4 minutes (HYBRID planned; activation unverified)

Primary Message: In the recorded TRIAL-003 run, the agent inspected `AGENTS.md` and used the documented test command that was absent from the Task Prompt.

Opening Question: “Prompt에 없던 test command는 어디서 왔을까?”

Speaker Flow:

1. (0:00–1:00) Show that the Prompt did not include the full test command.
2. (1:00–3:00) Reveal the recorded sequence: `AGENTS.md` inspected → documented command used → full suite 11/11 PASS.
3. (3:00–4:00) State the attribution boundary and clarify that README-only scope came from the Task Prompt.

Evidence / Source: TRIAL-003, STATE-01, DEMO-02. OBSERVED_PRODUCT; one recorded CLI run. Personal/global Skills also ran.

Claim Boundary: This run does not isolate an independent causal effect of `AGENTS.md`, establish general superiority, or show that repository guidance alone determined file scope.

Beginner Explanation: The record shows one example where a Project test command was available outside the current Prompt and was used.

Advanced Insight: Keep the observed action, other active instructions, and Task scope separate when interpreting causality.

C++ Vision Bridge: N/A.

Demo Operation: Present the captured/reconstructed Trial record. Do not represent it as a current Desktop run or a live screenshot. HYBRID activation is UNVERIFIED.

Audience Interaction: Ask the opening question, pause briefly, then reveal the record. Do not require an answer.

Transition: “이번 Task의 Prompt와 Project가 계속 유지할 Context는 어떻게 다른가?”

Time Management: Use three minutes for the recorded sequence and one minute for the causal boundary. Do not elaborate on unrelated Trial details.

Fallback: READY — use the static evidence sequence in `production/ACT_2.pptx` or `production/preview/act2/S24.png`.

Validation Status: REVIEWED — Trial record and local Mac Keynote render checked; fallback font was not identified. Product-surface reproduction, Windows, room projection, and timed rehearsal remain unverified.

## S25 — Task Prompt와 Project Context

Slide ID: S25

Working Title: Task Prompt와 Project Context

ACT / Section: ACT 2 / 2C

Allocated Time: 5 minutes

Mode Split: Lecture 5 minutes

Primary Message: A Task Prompt describes what is wanted now; Project Context describes facts and constraints that generally remain true for the Project.

Opening Question: “이 정보는 언제까지 유효한가?”

Speaker Flow:

1. (0:00–1:00) Acknowledge that Prompt Engineering remains useful for specifying this Task.
2. (1:00–4:00) Compare task-specific crop change and README-only scope with reusable test entry and dependency policy.
3. (4:00–5:00) Ask which facts persist across Tasks and open the relevance question.

Evidence / Source: BEAT-009–010, TRANS-003, CLM-0003, CLM-0005. TEACHING_MODEL / CONCEPTUAL; examples summarize S22–S24.

Claim Boundary: This is a teaching model for scope and lifetime, not a formal OpenAI taxonomy or proof that one layer is always better.

Beginner Explanation: Put the current goal in the Task request and distinguish it from facts the Project keeps using.

Advanced Insight: Scope and lifetime are useful dimensions for deciding ownership and update responsibility.

C++ Vision Bridge: Briefly distinguish a general Project constraint from a Task-specific algorithm condition; do not list tools or hardware.

Demo Operation: N/A.

Audience Interaction: Give the audience a brief silent pause to classify the examples mentally. Do not turn it into a hands-on task.

Transition: “정확한 정보를 더 많이 넣으면 언제나 괜찮을까?”

Time Management: Keep the model to two layers and four examples. Leave research and detailed routing for later slides.

Fallback: READY — use the static two-layer model in `production/ACT_2.pptx` or `production/preview/act2/S25.png`.

Validation Status: REVIEWED — source alignment checked; local Mac Keynote render checked; fallback font was not identified. Windows, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S26 — 정확한 정보도 계속 늘어난다

Slide ID: S26

Working Title: 정확한 정보도 계속 늘어난다

ACT / Section: ACT 2 / 2D

Allocated Time: 4 minutes

Mode Split: Case 4 minutes

Primary Message: STATE-02 grew from 15 lines / 567 bytes to 32 lines / 1,303 bytes as the Project recorded more details; growth alone is not evidence of failure.

Opening Question: “정확한 Project 정보라면 모든 Task에 늘 넣어도 될까?”

Speaker Flow:

1. (0:00–1:00) Show the observed STATE-01 → STATE-02 rail and size labels.
2. (1:00–3:00) Name the added categories: pipeline order, image contracts, test structure, and CLI fields.
3. (3:00–4:00) Move from “how much?” to “relevant to which Task?”

Evidence / Source: STATE-01 and STATE-02, BEAT-011, CLM-0014, CLM-0015. OBSERVED_PRODUCT; counts describe these recorded states only.

Claim Boundary: Do not label the growth as a failure threshold, claim that it caused an error, or imply that the content was inaccurate.

Beginner Explanation: More documented facts create a follow-up question: does each Task need all of them?

Advanced Insight: Maintenance cost and stale information are review considerations, not observed failures in this comparison.

C++ Vision Bridge: N/A.

Demo Operation: Use the two recorded state summaries; no live repository interaction is planned.

Audience Interaction: Treat the slide as a case question. Allow a short pause without requiring a public answer.

Transition: “작은 README Task에서 어떤 정보가 실제로 필요했을까?”

Time Management: Spend about one minute on counts and two on the categories. Do not imply a causal relationship between document size and behavior.

Fallback: READY — use the static state comparison in `production/ACT_2.pptx` or `production/preview/act2/S26.png`.

Validation Status: REVIEWED — state evidence and local Mac Keynote render checked; fallback font was not identified. Windows, room projection, and timed rehearsal remain unverified.

## S27 — 정확하지만 이번 Task에는 불필요한 정보

Slide ID: S27

Working Title: 정확하지만 이번 Task에는 불필요한 정보

ACT / Section: ACT 2 / 2D

Allocated Time: 4 minutes

Mode Split: Demo 2 minutes (CAPTURED) + Reflection 2 minutes

Primary Message: TRIAL-004 included Image context that was unnecessary for the README build-guidance Task, but no agent confusion or context-related failure was observed.

Opening Question: “README build 안내를 고치는 데 어떤 정보가 필요했을까?”

Speaker Flow:

1. (0:00–1:00) Frame the recorded README build-tool clarification Task.
2. (1:00–2:00) Contrast the relevant README / build configuration context with the unrelated crop and pipeline details present in the Project context.
3. (2:00–4:00) State “confusion not observed” and “context failure not observed,” then leave two minutes for quiet reflection.

Evidence / Source: TRIAL-004, BEAT-012, CLM-0014, CLM-0015. OBSERVED_PRODUCT; CAPTURED record of one Task.

Claim Boundary: Presence of unnecessary context is not evidence that the model failed, became confused, or performed worse. No such failure was observed.

Beginner Explanation: Correct information can still be unrelated to the current Task.

Advanced Insight: Distinguish context relevance from outcome quality; this Trial does not measure a performance effect.

C++ Vision Bridge: N/A.

Demo Operation: Show the captured/reconstructed Trial record for two minutes. Do not run a new Trial or simulate a failure.

Audience Interaction: Use the last two minutes for private reflection: which context was relevant to this Task? No response or written exercise is required.

Transition: “필요한 정보를 항상 한 번에 넣지 않는 방법은 무엇일까?”

Time Management: Protect the two-minute Reflection. Explicitly state the absence of observed confusion before moving on.

Fallback: READY — use the static Trial summary in `production/ACT_2.pptx` or `production/preview/act2/S27.png`.

Validation Status: REVIEWED — Trial record and local Mac Keynote render checked; fallback font was not identified. Windows, room projection, and timed rehearsal remain unverified.

## S28 — 정보의 범위와 제공 시점

Slide ID: S28

Working Title: 정보의 범위와 제공 시점

ACT / Section: ACT 2 / 2E

Allocated Time: 4 minutes

Mode Split: Lecture 4 minutes

Primary Message: The course model separates always-on Project facts, task-relevant detail, and reusable workflow by scope and timing.

Opening Question: “무엇은 항상 필요하고, 무엇은 Task에 따라 찾아야 할까?”

Speaker Flow:

1. (0:00–1:00) Label the three buckets as a course model.
2. (1:00–3:00) Place basic Project constraints in Always-on, image contracts / architecture in On-demand, and a performance procedure in Workflow.
3. (3:00–4:00) Clarify that the Workflow example was not stored in STATE-02 and hand off to bounded research.

Evidence / Source: BEAT-012, BEAT-014, STATE-02, CLM-0014, CLM-0015, CLM-0003, CLM-0005. TEACHING_MODEL / CONCEPTUAL.

Claim Boundary: Always-on / On-demand / Workflow is a course model, not an official OpenAI classification. Do not claim token savings or improved performance.

Beginner Explanation: Some facts apply broadly; details matter for a smaller set of Tasks; a work procedure says how to approach a class of work.

Advanced Insight: Keep durable facts, selectively needed details, and workflow responsibility conceptually distinct even when they can all appear outside a Task Prompt.

C++ Vision Bridge: N/A.

Demo Operation: N/A.

Audience Interaction: Ask the audience to notice that information has different scopes; no category-writing exercise is required.

Transition: “Context window가 크면 모든 정보가 똑같이 활용될까?”

Time Management: Four minutes, one minute per bucket plus the boundary. Do not present this as a product feature taxonomy.

Fallback: READY — use the static course-model diagram in `production/ACT_2.pptx` or `production/preview/act2/S28.png`.

Validation Status: REVIEWED — source alignment checked; local Mac Keynote render checked; fallback font was not identified. Windows, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S29 — Long Context 연구가 말해주는 범위

Slide ID: S29

Working Title: Long Context 연구가 말해주는 범위

ACT / Section: ACT 2 / 2E

Allocated Time: 4 minutes

Mode Split: Lecture 4 minutes

Primary Message: Research in specific models and tasks supports a bounded caution: more context is not automatically better, and relevance or information position can matter under some conditions.

Opening Question: “Context window가 크면 모든 정보가 똑같이 활용될까?”

Speaker Flow:

1. (0:00–1:00) State the limited question, not a universal failure claim.
2. (1:00–3:00) Summarize Lost in the Middle and RepoQA at the level of their task scope and limits; show source titles, years, and links.
3. (3:00–4:00) Explicitly separate those studies from current Codex repository-coding behavior.

Evidence / Source: RESEARCH. Liu et al., “Lost in the Middle: How Language Models Use Long Contexts,” TACL 2024, 12:157–173, https://aclanthology.org/2024.tacl-1.9/; RepoQA (2024), arXiv:2406.06025, https://arxiv.org/abs/2406.06025. RepoQA venue remains TODO in the source plan and is not invented here.

Claim Boundary: Do not claim current Codex fails because of Lost in the Middle, create a context-length threshold, generalize results across all models/tasks, or invent numeric/curve data. Keep study conditions beside the conclusion.

Beginner Explanation: A larger context window does not guarantee that every included detail is equally useful in every task.

Advanced Insight: The cited work covers specific historical models and benchmark settings, including multi-document QA and synthetic retrieval; it does not establish a present-day Codex limitation.

C++ Vision Bridge: N/A.

Demo Operation: N/A. This is a research summary, not a deterministic product demonstration.

Audience Interaction: Use the opening question to invite a short mental prediction, then answer within the cited scope.

Transition: “필요한 정보를 Task에 맞춰 어떻게 찾게 할까?”

Time Management: Keep the paper descriptions concise and reserve the final minute for the transfer boundary.

Fallback: READY — use the static research cards in `production/ACT_2.pptx` or `production/preview/act2/S29.png`; the full references remain in the Notes.

Validation Status: REVIEWED — cited source scope checked against approved research notes; local Mac Keynote render checked; fallback font was not identified. Windows, room projection, and timed rehearsal remain unverified.

## S30 — 필요한 상세 정보로 가는 길

Slide ID: S30

Working Title: 필요한 상세 정보로 가는 길

ACT / Section: ACT 2 / 2F

Allocated Time: 3 minutes

Mode Split: Lecture 3 minutes

Primary Message: Context design asks what information a Task needs and when it should be available, rather than placing every detail in one place.

Opening Question: “모든 정보를 한 곳에 넣지 않고 필요한 정보에 도달할 수 있을까?”

Speaker Flow:

1. (0:00–1:00) Move from the question of context amount to the question of relevance and timing.
2. (1:00–2:00) Show `Task → Core Context → Relevant Detail when needed` as a course diagram.
3. (2:00–3:00) Give one short C++ example and reserve STATE-03 for the next sequence.

Evidence / Source: BEAT-014, STATE-03 as the upcoming example, CLM-0003, CLM-0005, CLM-0014, CLM-0015. TEACHING_MODEL / CONCEPTUAL.

Claim Boundary: This is a routing question, not evidence of performance improvement, token savings, or a product's automatic retrieval behavior.

Beginner Explanation: A short starting point can direct a reader toward more detail when a Task needs it.

Advanced Insight: Discovery and maintenance remain design concerns; this slide does not claim perfect retrieval.

C++ Vision Bridge: Distinguish a general Project constraint from a Task-specific CMake or algorithm contract. Do not list tools, hardware, or environment commands.

Demo Operation: N/A — STATE-03 results are reserved for the following section.

Audience Interaction: Let the routing question sit for a moment; do not reveal the Trial result.

Transition: “무엇을 항상 읽고, 무엇을 필요할 때 찾게 할까?”

Time Management: Keep this to one diagram and one brief C++ example. No product-specific implementation details.

Fallback: READY — use the static routing question diagram in `production/ACT_2.pptx` or `production/preview/act2/S30.png`.

Validation Status: REVIEWED — source alignment checked; local Mac Keynote render checked; fallback font was not identified. Windows, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S31 — Core Context에서 상세 정보로 가는 길

Slide ID: S31

Working Title: Core Context에서 상세 정보로 가는 길

ACT / Section: ACT 2 / 2F

Allocated Time: 4 minutes

Mode Split: Lecture 4 minutes

Primary Message: Root/Core Context can be a starting point that points toward detail, rather than an encyclopedia of all Project knowledge.

Opening Question: “무엇을 항상 읽고, 무엇을 필요할 때 찾게 할까?”

Speaker Flow:

1. (0:00–1:00) Show the ROOT / CORE card with purpose, basic constraints, and where to look.
2. (1:00–2:30) Connect it to Topic Detail: architecture, image contracts, and testing.
3. (2:30–4:00) Use the integrated C++ bridge and label the layout as a teaching model, not a performance technique.

Evidence / Source: BEAT-014, CLM-0003, CLM-0005, CLM-0014, CLM-0015. TEACHING_MODEL / CONCEPTUAL; describe STATE-03 structure in S32.

Claim Boundary: The model does not demonstrate better retrieval or lower cost. No automatic product behavior is claimed.

Beginner Explanation: Keep a small starting page and put specialized details in topic pages that it points to.

Advanced Insight: Choose core facts for cross-task stability and details for a narrower task scope; routing quality remains an empirical question.

C++ Vision Bridge: Core: build/test entry and Project constraints. Detail: algorithm contract and hardware assumptions. Keep it to this scope example.

Demo Operation: N/A — the observed repository structure follows on S32.

Audience Interaction: Ask what belongs in the core; do not solicit a complete taxonomy.

Transition: “Demo Repository에서는 이 Mental Model이 어떻게 반영됐을까?”

Time Management: Four minutes; keep the C++ bridge to one integrated minute and avoid listing CMake/hardware items.

Fallback: READY — use the static core/detail teaching diagram in `production/ACT_2.pptx` or `production/preview/act2/S31.png`.

Validation Status: REVIEWED — source alignment checked; local Mac Keynote render checked; fallback font was not identified. Windows, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S32 — 정보를 지우지 않고 위치를 나누기

Slide ID: S32

Working Title: 정보를 지우지 않고 위치를 나누기

ACT / Section: ACT 2 / 2F

Allocated Time: 5 minutes

Mode Split: Lecture 2 minutes + Demo 2 minutes (CAPTURED) + Case 1 minute

Primary Message: STATE-03 reorganized the recorded detail from one growing `AGENTS.md` into a smaller core with links to topic documents.

Opening Question: “정보를 나누면 무엇이 바뀌고, 무엇을 그대로 보존해야 할까?”

Speaker Flow:

1. (0:00–1:00) State that the STATE-02 and STATE-03 repository snapshots are observed product states.
2. (1:00–3:00) Compare one growing `AGENTS.md` with a smaller core and links to `docs/architecture.md`, `docs/image-contracts.md`, and `docs/testing.md`.
3. (3:00–4:00) Explain the teaching interpretation: relocate by scope while preserving detail.
4. (4:00–5:00) Mention the integrated C++ scope analogy and transition to two task-specific observations.

Evidence / Source: STATE-02, STATE-03, DEMO-06, BEAT-014–015, CLM-0003, CLM-0005, CLM-0014, CLM-0015. OBSERVED_PRODUCT for file structure; TEACHING_MODEL for the routing interpretation.

Claim Boundary: State structure is observed. Progressive Disclosure is a course pattern here; perfect routing, performance improvement, or token savings are not proven.

Beginner Explanation: The information was reorganized by topic; the slide does not show it being deleted.

Advanced Insight: Separate the evidence of file placement from the inference about how such a structure may help readers navigate.

C++ Vision Bridge: Core constraints stay at the entry point; algorithm, module, and hardware details belong with their relevant topic.

Demo Operation: Use the captured/reconstructed STATE-02 → STATE-03 record; no live file browsing. Do not portray the diagram as a product screenshot.

Audience Interaction: Ask what must remain unchanged when information is moved; accept silent reflection.

Transition: “두 Task가 같은 상세 문서를 읽는지 관찰해 보겠습니다.”

Time Management: Use the two Demo minutes for the before/after state, one for the Case, and keep the C++ bridge integrated into the lecture flow as approved.

Fallback: READY — use the static state comparison in `production/ACT_2.pptx` or `production/preview/act2/S32.png`.

Validation Status: REVIEWED — state evidence and local Mac Keynote render checked; fallback font was not identified. Current product UI, Windows, room projection, and timed rehearsal remain unverified.

## S33 — 서로 다른 두 Task가 무엇을 읽을까?

Slide ID: S33

Working Title: 서로 다른 두 Task가 무엇을 읽을까?

ACT / Section: ACT 2 / 2G

Allocated Time: 2 minutes

Mode Split: Lecture 2 minutes

Primary Message: Compare two read-only Task questions by observing what evidence each run actually accesses.

Opening Question: “두 Task에서 Agent가 같은 상세 문서를 읽을까?”

Speaker Flow:

1. (0:00–0:30) Set the watch-for question without proposing an answer.
2. (0:30–1:30) Show Task A: “crop 1 3에서 어떤 source column을 포함하는가?” and Task B: “runtime dependency가 있는가?”
3. (1:30–2:00) Invite the audience to notice whether the same detail appears in both records.

Evidence / Source: TRIAL-005A/B, BEAT-015–016, CLM-0003, CLM-0005, CLM-0014, CLM-0015. OBSERVED_PRODUCT setup; results are withheld until the next slides.

Claim Boundary: Do not predict file access or reveal the observed result in advance. This setup does not imply perfect routing.

Beginner Explanation: Different questions may require different Project details; the next slides show what was observed.

Advanced Insight: Evaluate actual accesses rather than infer behavior from the directory structure alone.

C++ Vision Bridge: N/A.

Demo Operation: N/A — this is the watch setup; no new Trial is run.

Audience Interaction: Ask viewers to keep the comparison question in mind. No response is required.

Transition: “Crop Task의 기록에서 어떤 근거가 사용됐을까?”

Time Management: Two minutes only. Do not give the answer or turn the prompt into an exercise.

Fallback: READY — use the static A/B prompt cards in `production/ACT_2.pptx` or `production/preview/act2/S33.png`.

Validation Status: REVIEWED — Trial prompt scope checked; local Mac Keynote render checked; fallback font was not identified. Windows, room projection, and timed rehearsal remain unverified.

## S34 — Crop Task에서 관찰한 접근

Slide ID: S34

Working Title: Crop Task에서 관찰한 접근

ACT / Section: ACT 2 / 2G

Allocated Time: 5 minutes

Mode Split: Case 5 minutes

Primary Message: In TRIAL-005A’s final run, the recorded Crop answer was supported by access to the image contract; some broader context was also read.

Opening Question: “Crop 계약을 묻는 Task에서 어떤 근거가 사용됐을까?”

Speaker Flow:

1. (0:00–1:00) Reveal only the relevant observed path: root guidance → image contract.
2. (1:00–3:00) State the recorded answer: columns 1 and 2, output width 2, end coordinate 3 excluded.
3. (3:00–4:00) Add the scope nuance: architecture and other context were also accessed; `testing.md` was read in the final run only.
4. (4:00–5:00) Pause on what the observation supports and hand off to Task B.

Evidence / Source: TRIAL-005A, BEAT-016, CLM-0014, CLM-0015. OBSERVED_PRODUCT; recorded CLI final run and its access record.

Claim Boundary: The record supports that image-contract detail was accessed and the answer was observed in this run. It does not show perfect routing, that only relevant documents were read, or a measured efficiency gain.

Beginner Explanation: The Crop question had a matching contract document, and the recorded final run read it before giving the boundary result.

Advanced Insight: Include run variability and broader reads in the interpretation; `testing.md` access was not consistent across iterations.

C++ Vision Bridge: N/A.

Demo Operation: Use the captured/reconstructed record. Show the image contract and concise answer, not a full file-access log or fabricated terminal capture.

Audience Interaction: Ask which evidence supports the boundary answer; let the audience inspect the concise summary.

Transition: “Dependency Task와 비교하면 어떤 차이가 보일까?”

Time Management: Give the answer two minutes, the supporting document and limitation two minutes, then one minute for transition.

Fallback: READY — use the static evidence card in `production/ACT_2.pptx` or `production/preview/act2/S34.png`.

Validation Status: REVIEWED — Trial source and local Mac Keynote render checked; fallback font was not identified. Windows, room projection, and timed rehearsal remain unverified.

## S35 — Task별 접근은 달랐지만 완벽하지는 않다

Slide ID: S35

Working Title: Task별 접근은 달랐지만 완벽하지는 않다

ACT / Section: ACT 2 / 2G

Allocated Time: 7 minutes

Mode Split: Demo 1 minute (CAPTURED) + Case 3 minutes + Reflection 2 minutes + Q&A 1 minute

Primary Message: TRIAL-005A/B showed a task-specific difference in detailed document access, but did not prove perfect routing, token savings, or performance improvement.

Opening Question: “Task별 차이를 관찰한 것만으로 완벽한 Routing을 말할 수 있을까?”

Speaker Flow:

1. (0:00–1:00) Show a compact A/B matrix: A read `image-contracts.md`; B did not; both read `architecture.md`.
2. (1:00–3:00) Summarize Task B’s supporting access (`AGENTS.md`, architecture, `pyproject.toml`, `setup.cfg`, README, source) without listing every event.
3. (3:00–4:00) Mark the boundary: perfect routing NOT PROVEN; token saving NOT MEASURED; performance improvement NOT MEASURED.
4. (4:00–6:00) Use the two-minute Reflection to consider what the comparison supports and what it does not.
5. (6:00–7:00) Take one brief question or give the prepared fallback question, then recap the bounded observation.

Evidence / Source: TRIAL-005A/B, BEAT-016–017, CLM-0014, CLM-0015, CLM-0003, CLM-0005. OBSERVED_PRODUCT; captured records, with observed run variability.

Claim Boundary: Task-specific access difference is observed. Broad reads also occurred. Do not claim complete routing, a general advantage, token savings, or performance gains.

Beginner Explanation: A relevant document was read for one Task and not another, but the agent still read some shared and broader context.

Advanced Insight: A/B access differences are evidence about these runs only; they do not establish a stable policy or causal efficiency effect.

C++ Vision Bridge: N/A.

Demo Operation: Use the captured/reconstructed access matrix; keep observed access separate from the not-measured outcomes. No new Trial is run.

Audience Interaction: Keep three minutes for the Case, two for private Reflection, and one for Q&A. If no one responds, ask: “이 기록으로 말할 수 있는 범위는 어디까지일까요?”

Transition: “정보를 정리했는데도 남아 있는 반복은 무엇일까?”

Time Management: Protect the Mode boundaries. If discussion runs long, cut secondary file names before shortening the explicit claim boundary.

Fallback: READY — use the static A/B matrix and boundary labels in `production/ACT_2.pptx` or `production/preview/act2/S35.png`.

Validation Status: REVIEWED — Trial comparison and local Mac Keynote render checked; fallback font was not identified. Windows, room projection, and timed rehearsal remain unverified.

## S36 — 지식은 정리됐지만 절차는 반복된다

Slide ID: S36

Working Title: 지식은 정리됐지만 절차는 반복된다

ACT / Section: ACT 2 / 2I

Allocated Time: 10 minutes

Mode Split: Transition 4 minutes + Q&A 6 minutes

Primary Message: Task Prompt, Project Context, and routing address different information responsibilities; a repeated work procedure can remain as a separate problem.

Opening Question: “Project 정보를 잘 정리했으면 문제가 끝난 걸까?”

Speaker Flow:

1. (0:00–2:00) Recap: Prompt = what is wanted now; Project Context = what is generally true; Routing = where relevant detail is.
2. (2:00–4:00) Put the repeated Performance Task procedure beside reduced information duplication. Do not claim the Trial fully solved Context selection.
3. (4:00–8:00) Run the problem-centered Transition: “이건 Context 문제일까?” Let the audience distinguish recurring facts from recurring procedure.
4. (8:00–10:00) Use the final Q&A time, then close with the question that opens ACT 3: “Agent가 Project를 알아도 왜 작업 방법은 달라질까?”

Evidence / Source: BEAT-017–018, TRANS-005, TRIAL-006/007 as context for the upcoming problem. OBSERVED_PRODUCT for repeated prompt structure with PARTIAL attribution; TEACHING_MODEL for the three responsibilities and the transition question.

Claim Boundary: Do not attribute the repeated procedure solely to the Trial Prompt; global Harness influence remains. Do not present Skill or another solution here.

Beginner Explanation: Knowing Project facts and repeating a reliable way of working are different needs.

Advanced Insight: Context can reduce repeated fact explanation while process ownership remains unresolved; keep observed repetition separate from its cause.

C++ Vision Bridge: N/A.

Demo Operation: N/A — use the concise recorded prompt-structure summary; no live run or new Trial.

Audience Interaction: Transition 4 minutes for the discussion question, then 6 minutes Q&A. If no one answers, ask whether the repeated items describe facts or actions.

Transition: “Agent가 Project를 알아도 왜 작업 방법은 달라질까?”

Time Management: The 4-minute Transition precedes the 6-minute Q&A. If Q&A is quiet, use the fallback question and still preserve the ACT 3 handoff.

Fallback: READY — use the static recap and repeated-procedure visual in `production/ACT_2.pptx` or `production/preview/act2/S36.png`.

Validation Status: REVIEWED — source/claim alignment checked; local Mac Keynote render checked; fallback font was not identified. Windows, target-PC fonts, room projection, and timed rehearsal remain unverified.
