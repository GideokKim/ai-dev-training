# ACT 2 — Speaker Notes

Status: REVIEWED — accepted presentation revision. Source, screen cues, and operation guidance are aligned. Exact-file render and embedded-Notes results are recorded in the integrated revision evaluation. Windows, room, account, and timed rehearsal remain UNVERIFIED.

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

1. (0:00–2:00) 버그 수정, 성능 조사, README 수정의 서로 다른 목표를 왼쪽부터 가리킨다.
2. (2:00–4:00) 아래에 반복된 네 줄을 비교한다. 테스트 실행, 근거가 있을 때 의존성 추가, 로컬 합성 데이터, 기존 동작 보존이다. 세 요청은 교육용 구성 예시이며 Trial 원문이 아니다.
3. (4:00–5:00) 같은 설명이 왜 다시 들어가는지 잠시 생각하게 한다. 아직 저장 위치나 기능을 답으로 제시하지 않는다.

Evidence / Source: BEAT-008, CLM-0003, CLM-0005. TEACHING_MODEL / CONCEPTUAL; the three cards are a constructed example, not a Trial.

Claim Boundary: Repetition can indicate a scope and lifetime question. This slide does not claim a product failure or introduce a repository instruction file as the answer.

Beginner Explanation: If every Task needs the same Project facts, consider whether those facts belong with the Task or with the Project.

Advanced Insight: Separate Task intent from durable constraints before choosing where to maintain them.

C++ Vision Bridge: N/A.

Demo Operation: N/A.

Audience Interaction: Use the final minute as a quiet case prompt. No hands-on activity or public response is required.

Transition: “공통 정보를 Prompt 밖에 둘 수 있을까?”

Time Management: Spend four minutes on the repeated facts and one minute on the question. Do not preview the solution.

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_2.pptx`의 S22 또는 `production/preview/act2/S22.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

## S23 — 작은 Project Context의 첫 기록

Slide ID: S23

Working Title: 작은 Project Context의 첫 기록

ACT / Section: ACT 2 / 2B

Allocated Time: 4 minutes

Mode Split: Demo 4 minutes (HYBRID planned; activation unverified)

Primary Message: STATE-01의 실제 AGENTS.md에는 반복되는 프로젝트 목적, 실행 방법, 테스트 명령, 기본 제약이 기록되어 있다.

Opening Question: “반복되는 Project 정보를 한 번 기록하면 어떤 점이 달라질까?”

Speaker Flow:

1. (0:00–1:00) STATE-00-FIXED에서 STATE-01로 바뀐 것은 root AGENTS.md 한 파일 추가임을 설명한다.
2. (1:00–3:00) 네 발췌를 순서대로 가리킨다. 목적: 로컬 grayscale CLI. 실행: README의 준비된 명령. 테스트: 원문 명령. 제약: 범위를 지키고 관련 동작을 검증. 영어 문장을 모두 낭독하지 않는다.
3. (3:00–4:00) Task마다 반복 설명하던 사실을 저장소에 둔 설계 의도를 정리하고, 실제 활용 관찰은 S24로 넘긴다.

Evidence / Source: STATE-01 / DEMO-02 / OBSERVED_PRODUCT. Demo tag `14baf81746a981d7cd96b7a014ea06f28c3dd6b4`, root `AGENTS.md` 2, 5, 9, 15행 발췌. 15줄/567bytes는 원문 메타데이터이며 화면의 중심 메시지로 쓰지 않는다. 테스트 명령은 `Run`과 구두점을 제외한 원문 명령 문자열이다. Source: `plan/DEMO_MATRIX.md` STATE-01 기록.

Claim Boundary: 실제 파일이 그 상태에 존재했다는 근거다. 성능, 정확도, 토큰 절감 또는 AGENTS.md 단독 인과효과를 주장하지 않는다. 제품 코드·테스트·README는 그 상태 전환에서 바뀌지 않았다. S24의 지침 활용 관찰을 이 장의 결과로 앞당기지 않는다. 현재 Desktop 자동 로딩이나 교육 환경을 검증한 것이 아니다.

Beginner Explanation: A small set of facts that applies across Project Tasks can be written down once in the repository.

Advanced Insight: The design choice is about context scope and maintenance ownership, not a measured quality or performance effect.

C++ Vision Bridge: N/A.

Demo Operation: `production/ACT_2.pptx`의 S23 및 `production/preview/act2/S23.png`에 있는 실제 AGENTS.md 원문 발췌를 가리킨다. 편집기 screenshot이 아니다. Live/HYBRID는 발표 환경 검증 전까지 비활성이다.

Audience Interaction: Point out the recurring facts without asking the audience to inspect a repository.

Transition: “이 안내가 실제 Task에서 어떻게 사용됐는지 기록을 보겠습니다.”

Time Management: Demo 4분 유지. 1분 상태 전환, 2분 네 발췌, 1분 의미와 S24 handoff. 명령어 옵션별 설명은 생략한다.

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_2.pptx`의 S23 또는 `production/preview/act2/S23.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

## S24 — 한 번의 사용에서 확인된 것

Slide ID: S24

Working Title: 한 번의 사용에서 확인된 것

ACT / Section: ACT 2 / 2B

Allocated Time: 4 minutes

Mode Split: Demo 4 minutes (HYBRID planned; activation unverified)

Primary Message: In the recorded TRIAL-003 run, the agent inspected `AGENTS.md` and used the documented test command that was absent from the Task Prompt.

Opening Question: “Prompt에 없던 test command는 어디서 왔을까?”

Speaker Flow:

1. (0:00–1:00) 왼쪽 요청에는 README-only 범위가 있었지만 전체 테스트 명령은 없었다고 짚는다.
2. (1:00–3:00) 가운데 AGENTS.md 접근과 기록된 테스트 명령 사용을 오른쪽 11/11 PASS 기록에 연결한다. 화면은 Trial 기록을 요약한 설명 구조다.
3. (3:00–4:00) Personal/global Skills도 실행됐으므로 AGENTS.md 단독 효과를 분리할 수 없다고 밝힌다. README-only 범위는 요청에도 있었다고 마무리한다.

Evidence / Source: TRIAL-003, STATE-01, DEMO-02. OBSERVED_PRODUCT; one recorded CLI run. Personal/global Skills also ran.

Claim Boundary: This run does not isolate an independent causal effect of `AGENTS.md`, establish general superiority, or show that repository guidance alone determined file scope.

Beginner Explanation: The record shows one example where a Project test command was available outside the current Prompt and was used.

Advanced Insight: Keep the observed action, other active instructions, and Task scope separate when interpreting causality.

C++ Vision Bridge: N/A.

Demo Operation: Present the captured/reconstructed Trial record. Do not represent it as a current Desktop run or a live screenshot. HYBRID activation is UNVERIFIED.

Audience Interaction: Ask the opening question, pause briefly, then reveal the record. Do not require an answer.

Transition: “이번 Task의 Prompt와 Project가 계속 유지할 Context는 어떻게 다른가?”

Time Management: Use three minutes for the recorded sequence and one minute for the causal boundary. Do not elaborate on unrelated Trial details.

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_2.pptx`의 S24 또는 `production/preview/act2/S24.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

## S25 — Task Prompt와 Project Context

Slide ID: S25

Working Title: Task Prompt와 Project Context

ACT / Section: ACT 2 / 2C

Allocated Time: 5 minutes

Mode Split: Lecture 5 minutes

Primary Message: A Task Prompt describes what is wanted now; Project Context describes facts and constraints that generally remain true for the Project.

Opening Question: “이 정보는 언제까지 유효한가?”

Speaker Flow:

1. (0:00–1:00) ‘이번 작업이 끝나면?’이라는 질문으로 정보의 수명을 비교한다.
2. (1:00–4:00) 왼쪽 crop 수정과 README-only 범위, 오른쪽 테스트 명령과 근거 기반 의존성 정책을 연결한다. Prompt는 현재 목표를 표현하는 데 계속 필요하다.
3. (4:00–5:00) 어떤 사실이 다음 Task에도 유효한지 질문한다. C++에서도 공통 제약과 이번 알고리즘 변경 조건의 범위가 다를 수 있다는 짧은 예만 든다.

Evidence / Source: BEAT-009–010, TRANS-003, CLM-0003, CLM-0005. TEACHING_MODEL / CONCEPTUAL; examples summarize S22–S24.

Claim Boundary: This is a teaching model for scope and lifetime, not a formal OpenAI taxonomy or proof that one layer is always better.

Beginner Explanation: Put the current goal in the Task request and distinguish it from facts the Project keeps using.

Advanced Insight: Scope and lifetime are useful dimensions for deciding ownership and update responsibility.

C++ Vision Bridge: Briefly distinguish a general Project constraint from a Task-specific algorithm condition; do not list tools or hardware.

Demo Operation: N/A.

Audience Interaction: Give the audience a brief silent pause to classify the examples mentally. Do not turn it into a hands-on task.

Transition: “정확한 정보를 더 많이 넣으면 언제나 괜찮을까?”

Time Management: Keep the model to two layers and four examples. Leave research and detailed routing for later slides.

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_2.pptx`의 S25 또는 `production/preview/act2/S25.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

## S26 — 정확한 정보도 계속 늘어난다

Slide ID: S26

Working Title: 정확한 정보도 계속 늘어난다

ACT / Section: ACT 2 / 2D

Allocated Time: 4 minutes

Mode Split: Case 4 minutes

Primary Message: STATE-02 grew from 15 lines / 567 bytes to 32 lines / 1,303 bytes as the Project recorded more details; growth alone is not evidence of failure.

Opening Question: “정확한 Project 정보라면 모든 Task에 늘 넣어도 될까?”

Speaker Flow:

1. (0:00–1:00) STATE-01의 목적·실행·테스트·기본 제약에서 출발한다. 15줄/567 bytes와 32줄/1,303 bytes는 상태를 식별하는 크기 정보다.
2. (1:00–3:00) STATE-02에 더해진 처리 순서, 이미지 계약, 테스트 구조, CLI 출력의 실제 항목을 가리킨다. 처리 순서의 말줄임표는 선택적 invert/crop/resize 등의 중간 단계를 생략했다는 뜻이다.
3. (3:00–4:00) 크기 자체의 성능 의미를 부여하지 않고 ‘이번 Task에도 필요할까?’로 다음 장을 연다.

Evidence / Source: STATE-01 and STATE-02, BEAT-011, CLM-0014, CLM-0015. OBSERVED_PRODUCT; counts describe these recorded states only.

Claim Boundary: Do not label the growth as a failure threshold, claim that it caused an error, or imply that the content was inaccurate.

Beginner Explanation: More documented facts create a follow-up question: does each Task need all of them?

Advanced Insight: Maintenance cost and stale information are review considerations, not observed failures in this comparison.

C++ Vision Bridge: N/A.

Demo Operation: Use the two recorded state summaries; no live repository interaction is planned.

Audience Interaction: Treat the slide as a case question. Allow a short pause without requiring a public answer.

Transition: “작은 README Task에서 어떤 정보가 실제로 필요했을까?”

Time Management: 크기 식별은 짧게 끝내고 추가된 실제 정보 네 항목에 시간을 쓴다. 마지막 1분에는 관련성 질문으로 이동하며 문서 크기의 인과 효과를 만들지 않는다.

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_2.pptx`의 S26 또는 `production/preview/act2/S26.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

## S27 — 정확하지만 이번 Task에는 불필요한 정보

Slide ID: S27

Working Title: 정확하지만 이번 Task에는 불필요한 정보

ACT / Section: ACT 2 / 2D

Allocated Time: 4 minutes

Mode Split: Demo 2 minutes (CAPTURED) + Reflection 2 minutes

Primary Message: TRIAL-004 included Image context that was unnecessary for the README build-guidance Task, but no agent confusion or context-related failure was observed.

Opening Question: “README build 안내를 고치는 데 어떤 정보가 필요했을까?”

Speaker Flow:

1. (0:00–1:00 / Demo) README의 build tools 안내를 고친 기록된 Task를 제시한다.
2. (1:00–2:00 / Demo) 왼쪽 README/build 설정과 오른쪽 crop·resize 계약/pipeline 상세를 비교한다. Agent 혼란과 Context 관련 실패는 관찰되지 않았음을 먼저 밝힌다.
3. (2:00–4:00 / Reflection) 정확한 정보와 이번 질문에 관련된 정보를 구분해 보게 한다. 공개 응답이나 작업은 요구하지 않는다.

Evidence / Source: TRIAL-004, BEAT-012, CLM-0014, CLM-0015. OBSERVED_PRODUCT; CAPTURED record of one Task.

Claim Boundary: Presence of unnecessary context is not evidence that the model failed, became confused, or performed worse. No such failure was observed.

Beginner Explanation: Correct information can still be unrelated to the current Task.

Advanced Insight: Distinguish context relevance from outcome quality; this Trial does not measure a performance effect.

C++ Vision Bridge: N/A.

Demo Operation: Show the captured/reconstructed Trial record for two minutes. Do not run a new Trial or simulate a failure.

Audience Interaction: Use the last two minutes for private reflection: which context was relevant to this Task? No response or written exercise is required.

Transition: “필요한 정보를 항상 한 번에 넣지 않는 방법은 무엇일까?”

Time Management: Protect the two-minute Reflection. Explicitly state the absence of observed confusion before moving on.

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_2.pptx`의 S27 또는 `production/preview/act2/S27.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

## S28 — 정보의 범위와 제공 시점

Slide ID: S28

Working Title: 정보의 범위와 제공 시점

ACT / Section: ACT 2 / 2E

Allocated Time: 4 minutes

Mode Split: Lecture 4 minutes

Primary Message: The course model separates always-on Project facts, task-relevant detail, and reusable workflow by scope and timing.

Opening Question: “무엇은 항상 필요하고, 무엇은 Task에 따라 찾아야 할까?”

Speaker Flow:

1. (0:00–1:00) 세 행이 이 과정에서 쓰는 정보 설계 모델임을 밝힌다.
2. (1:00–3:00) 기본 안내, 질문에 따른 상세, 특정 작업의 수행 방법을 순서대로 가리킨다. 각 행의 구체 예시를 하나씩 설명한다.
3. (3:00–4:00) 성능 조사 절차 예가 STATE-02에 저장돼 있었다는 뜻은 아니라고 한정한다. Context 양만으로 충분한지 연구 질문으로 넘어간다.

Evidence / Source: BEAT-012, BEAT-014, STATE-02, CLM-0014, CLM-0015, CLM-0003, CLM-0005. TEACHING_MODEL / CONCEPTUAL.

Claim Boundary: Always-on / On-demand / Workflow is a course model, not an official OpenAI classification. Do not claim token savings or improved performance.

Beginner Explanation: Some facts apply broadly; details matter for a smaller set of Tasks; a work procedure says how to approach a class of work.

Advanced Insight: Keep durable facts, selectively needed details, and workflow responsibility conceptually distinct even when they can all appear outside a Task Prompt.

C++ Vision Bridge: N/A.

Demo Operation: N/A.

Audience Interaction: Ask the audience to notice that information has different scopes; no category-writing exercise is required.

Transition: “Context window가 크면 모든 정보가 똑같이 활용될까?”

Time Management: Four minutes, one minute per bucket plus the boundary. Do not present this as a product feature taxonomy.

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_2.pptx`의 S28 또는 `production/preview/act2/S28.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

## S29 — Long Context 연구가 말해주는 범위

Slide ID: S29

Working Title: Long Context 연구가 말해주는 범위

ACT / Section: ACT 2 / 2E

Allocated Time: 4 minutes

Mode Split: Lecture 4 minutes

Primary Message: Research in specific models and tasks supports a bounded caution: more context is not automatically better, and relevance or information position can matter under some conditions.

Opening Question: “Context window가 크면 모든 정보가 똑같이 활용될까?”

Speaker Flow:

1. (0:00–1:00) ‘더 많은 Context가 항상 더 좋은 것은 아니다’의 적용 범위를 특정 모델·과제에 한정한다.
2. (1:00–3:00) 왼쪽 Lost in the Middle의 여러 문서 질문 답변/key-value 검색, 오른쪽 RepoQA의 50개 Repository 코드 검색을 비교한다. 논문이 답한 질문과 승인된 핵심 결론만 말한다. 수치 그래프나 현재 Codex 성능 추정은 추가하지 않는다.
3. (3:00–4:00) 화면 하단의 두 출처와 Notes의 원문 링크를 안내한다. 이 Demo의 현재 Codex Repository coding을 직접 시험한 연구가 아님을 명시한다.

Evidence / Source: RESEARCH. Liu et al., “Lost in the Middle: How Language Models Use Long Contexts,” TACL 2024, 12:157–173, https://aclanthology.org/2024.tacl-1.9/; RepoQA (2024), arXiv:2406.06025, https://arxiv.org/abs/2406.06025. RepoQA venue remains TODO in the source plan and is not invented here.

Claim Boundary: Do not claim current Codex fails because of Lost in the Middle, create a context-length threshold, generalize results across all models/tasks, or invent numeric/curve data. Keep study conditions beside the conclusion.

Beginner Explanation: A larger context window does not guarantee that every included detail is equally useful in every task.

Advanced Insight: The cited work covers specific historical models and benchmark settings, including multi-document QA and synthetic retrieval; it does not establish a present-day Codex limitation.

C++ Vision Bridge: N/A.

Demo Operation: N/A. This is a research summary, not a deterministic product demonstration.

Audience Interaction: Use the opening question to invite a short mental prediction, then answer within the cited scope.

Transition: “필요한 정보를 Task에 맞춰 어떻게 찾게 할까?”

Time Management: Keep the paper descriptions concise and reserve the final minute for the transfer boundary.

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_2.pptx`의 S29 또는 `production/preview/act2/S29.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

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

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_2.pptx`의 S30 또는 `production/preview/act2/S30.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

## S31 — Core Context에서 상세 정보로 가는 길

Slide ID: S31

Working Title: Core Context에서 상세 정보로 가는 길

ACT / Section: ACT 2 / 2F

Allocated Time: 4 minutes

Mode Split: Lecture 4 minutes

Primary Message: Root/Core Context can be a starting point that points toward detail, rather than an encyclopedia of all Project knowledge.

Opening Question: “무엇을 항상 읽고, 무엇을 필요할 때 찾게 할까?”

Speaker Flow:

1. (0:00–1:00) 왼쪽 기본 안내의 목적, 상시 제약, 상세 정보 위치를 읽는 순서대로 가리킨다.
2. (1:00–2:30) 오른쪽 architecture, image contracts, testing으로 이어지는 관계를 설명한다. 화살표는 교육용 정보 설계 관계다.
3. (2:30–4:00) C++에서는 build/test 진입점과 기본 제약에서 해당 알고리즘 계약·하드웨어 조건으로 안내할 수 있음을 짧게 연결한다. Routing 성능 효과는 주장하지 않는다.

Evidence / Source: BEAT-014, CLM-0003, CLM-0005, CLM-0014, CLM-0015. TEACHING_MODEL / CONCEPTUAL; describe STATE-03 structure in S32.

Claim Boundary: The model does not demonstrate better retrieval or lower cost. No automatic product behavior is claimed.

Beginner Explanation: Keep a small starting page and put specialized details in topic pages that it points to.

Advanced Insight: Choose core facts for cross-task stability and details for a narrower task scope; routing quality remains an empirical question.

C++ Vision Bridge: Core: build/test entry and Project constraints. Detail: algorithm contract and hardware assumptions. Keep it to this scope example.

Demo Operation: N/A — the observed repository structure follows on S32.

Audience Interaction: Ask what belongs in the core; do not solicit a complete taxonomy.

Transition: “Demo Repository에서는 이 Mental Model이 어떻게 반영됐을까?”

Time Management: Four minutes; keep the C++ bridge to one integrated minute and avoid listing CMake/hardware items.

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_2.pptx`의 S31 또는 `production/preview/act2/S31.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

## S32 — 정보를 지우지 않고 위치를 나누기

Slide ID: S32

Working Title: 정보를 지우지 않고 위치를 나누기

ACT / Section: ACT 2 / 2F

Allocated Time: 5 minutes

Mode Split: Lecture 2 minutes + Demo 2 minutes (CAPTURED) + Case 1 minute

Primary Message: STATE-03 reorganized the recorded detail from one growing `AGENTS.md` into a smaller core with links to topic documents.

Opening Question: “정보를 나누면 무엇이 바뀌고, 무엇을 그대로 보존해야 할까?”

Speaker Flow:

1. (0:00–1:00 / Lecture) STATE-02와 STATE-03은 실제 Repository 상태이며, 정보의 위치가 달라졌다고 밝힌다.
2. (1:00–3:00 / Demo) 커진 AGENTS.md와 분리된 docs를 비교한다. 오른쪽 실제 Routing 문구에서 어떤 질문을 어떤 문서로 안내하는지 발췌 한 줄씩 가리킨다.
3. (3:00–4:00 / Case) 정보를 없애기보다 Scope에 따라 놓을 위치를 나눈 설계 의도를 설명한다.
4. (4:00–5:00 / Lecture) C++도 기본 안내와 알고리즘/모듈 상세를 나누는 패턴으로 연결한다. 실제 접근 결과는 다음 두 Task에서 확인한다.

Evidence / Source: STATE-02, STATE-03, DEMO-06, BEAT-014–015, CLM-0003, CLM-0005, CLM-0014, CLM-0015. OBSERVED_PRODUCT for file structure; TEACHING_MODEL for the routing interpretation.

Claim Boundary: State structure is observed. Progressive Disclosure is a course pattern here; perfect routing, performance improvement, or token savings are not proven.

Beginner Explanation: The information was reorganized by topic; the slide does not show it being deleted.

Advanced Insight: Separate the evidence of file placement from the inference about how such a structure may help readers navigate.

C++ Vision Bridge: Core constraints stay at the entry point; algorithm, module, and hardware details belong with their relevant topic.

Demo Operation: Use the captured/reconstructed STATE-02 → STATE-03 record; no live file browsing. Do not portray the diagram as a product screenshot.

Audience Interaction: Ask what must remain unchanged when information is moved; accept silent reflection.

Transition: “두 Task가 같은 상세 문서를 읽는지 관찰해 보겠습니다.”

Time Management: Use the two Demo minutes for the before/after state, one for the Case, and keep the C++ bridge integrated into the lecture flow as approved.

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_2.pptx`의 S32 또는 `production/preview/act2/S32.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

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

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_2.pptx`의 S33 또는 `production/preview/act2/S33.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

## S34 — Crop Task에서 관찰한 접근

Slide ID: S34

Working Title: Crop Task에서 관찰한 접근

ACT / Section: ACT 2 / 2G

Allocated Time: 5 minutes

Mode Split: Case 5 minutes

Primary Message: In TRIAL-005A’s final run, the recorded Crop answer was supported by access to the image contract; some broader context was also read.

Opening Question: “Crop 계약을 묻는 Task에서 어떤 근거가 사용됐을까?”

Speaker Flow:

1. (0:00–1:00) image-contracts.md에 있는 반열린 구간 [x_start, x_end)을 가리킨다.
2. (1:00–3:00) 아래 숫자는 픽셀 값이 아니라 source column index임을 밝힌다. crop 1 3에서 강조한 열 1과 2, 결과 너비 2, 제외된 끝 좌표 3을 순서대로 짚는다.
3. (3:00–4:00) 하단에서 AGENTS.md, architecture.md도 읽었으며 testing.md는 최종 실행에서 읽었음을 확인한다. 완벽한 최소 문서 선택으로 해석하지 않는다.
4. (4:00–5:00) 계약이 필요한 Task에서 관련 문서 접근과 답이 관찰됐다는 범위로 마무리하고 Task B로 넘긴다.

Evidence / Source: TRIAL-005A, BEAT-016, CLM-0014, CLM-0015. OBSERVED_PRODUCT; recorded CLI final run and its access record.

Claim Boundary: The record supports that image-contract detail was accessed and the answer was observed in this run. It does not show perfect routing, that only relevant documents were read, or a measured efficiency gain.

Beginner Explanation: The Crop question had a matching contract document, and the recorded final run read it before giving the boundary result.

Advanced Insight: Include run variability and broader reads in the interpretation; `testing.md` access was not consistent across iterations.

C++ Vision Bridge: N/A.

Demo Operation: Use the captured/reconstructed record. Show the image contract and concise answer, not a full file-access log or fabricated terminal capture.

Audience Interaction: Ask which evidence supports the boundary answer; let the audience inspect the concise summary.

Transition: “Dependency Task와 비교하면 어떤 차이가 보일까?”

Time Management: Give the answer two minutes, the supporting document and limitation two minutes, then one minute for transition.

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_2.pptx`의 S34 또는 `production/preview/act2/S34.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

## S35 — Task별 접근은 달랐지만 완벽하지는 않다

Slide ID: S35

Working Title: Task별 접근은 달랐지만 완벽하지는 않다

ACT / Section: ACT 2 / 2G

Allocated Time: 7 minutes

Mode Split: Demo 1 minute (CAPTURED) + Case 3 minutes + Reflection 2 minutes + Q&A 1 minute

Primary Message: TRIAL-005A/B showed a task-specific difference in detailed document access, but did not prove perfect routing, token savings, or performance improvement.

Opening Question: “Task별 차이를 관찰한 것만으로 완벽한 Routing을 말할 수 있을까?”

Speaker Flow:

1. (0:00–1:00 / Demo) 강조한 첫 행에서 A는 image-contracts.md를 읽고 B는 읽지 않았음을 가리킨다.
2. (1:00–3:00 / Demo) architecture는 둘 다 읽었고 testing은 A의 최종 실행에서만 읽었다고 확인한다. B는 설정·README·source도 확인했다. A의 더 넓은 읽기와 실행 간 변동도 남아 있다.
3. (3:00–4:00 / Lecture) 완벽한 Routing 미입증, 토큰 절약·성능 개선 미측정을 분명히 말한다.
4. (4:00–6:00 / Reflection) 이 비교로 말할 수 있는 사실과 없는 효과를 조용히 구분해 보게 한다.
5. (6:00–7:00 / Q&A) 질문 하나를 받거나 준비된 질문을 던진다. 파일 접근 차이라는 관찰로 닫는다.

Evidence / Source: TRIAL-005A/B, BEAT-016–017, CLM-0014, CLM-0015, CLM-0003, CLM-0005. OBSERVED_PRODUCT; captured records, with observed run variability.

Claim Boundary: Task-specific access difference is observed. Broad reads also occurred. Do not claim complete routing, a general advantage, token savings, or performance gains.

Beginner Explanation: A relevant document was read for one Task and not another, but the agent still read some shared and broader context.

Advanced Insight: A/B access differences are evidence about these runs only; they do not establish a stable policy or causal efficiency effect.

C++ Vision Bridge: N/A.

Demo Operation: 실제 기록을 요약한 문서 접근 비교표를 사용한다. image-contracts, architecture, testing 순서로 가리키며 testing의 최종 실행 범위와 변동을 유지한다. 토큰·성능 효과나 실제 터미널 화면으로 표현하지 않는다.

Audience Interaction: Keep three minutes for the Case, two for private Reflection, and one for Q&A. If no one responds, ask: “이 기록으로 말할 수 있는 범위는 어디까지일까요?”

Transition: “정보를 정리했는데도 남아 있는 반복은 무엇일까?”

Time Management: Protect the Mode boundaries. If discussion runs long, cut secondary file names before shortening the explicit claim boundary.

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_2.pptx`의 S35 또는 `production/preview/act2/S35.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

## S36 — 지식은 정리됐지만 절차는 반복된다

Slide ID: S36

Working Title: 지식은 정리됐지만 절차는 반복된다

ACT / Section: ACT 2 / 2I

Allocated Time: 10 minutes

Mode Split: Transition 4 minutes + Q&A 6 minutes

Primary Message: Task Prompt, Project Context, and routing address different information responsibilities; a repeated work procedure can remain as a separate problem.

Opening Question: “Project 정보를 잘 정리했으면 문제가 끝난 걸까?”

Speaker Flow:

1. (0:00–2:00 / Transition) 왼쪽의 현재 목표, 공통 사실, 상세 정보 위치를 순서대로 회수한다.
2. (2:00–4:00 / Transition) 오른쪽 ‘먼저 측정하고, 조사한 뒤 변경하고, 같은 조건으로 확인’이라는 반복 절차를 보여준다. Context 선택을 완전히 해결했다는 뜻은 아니라고 밝힌다.
3. (4:00–10:00 / Q&A) ‘이 반복도 Context만의 문제일까?’로 질문을 받는다. 질문이 없으면 사실과 절차의 책임 차이를 짚고 ‘Agent가 Project를 알아도 왜 작업 방법은 달라질까?’를 던진다. 마지막 짧은 handoff도 이 6분 안에 포함한다.

Evidence / Source: BEAT-017–018, TRANS-005, TRIAL-006/007 as context for the upcoming problem. OBSERVED_PRODUCT for repeated prompt structure with PARTIAL attribution; TEACHING_MODEL for the three responsibilities and the transition question.

Claim Boundary: Do not attribute the repeated procedure solely to the Trial Prompt; global Harness influence remains. Do not present Skill or another solution here.

Beginner Explanation: Knowing Project facts and repeating a reliable way of working are different needs.

Advanced Insight: Context can reduce repeated fact explanation while process ownership remains unresolved; keep observed repetition separate from its cause.

C++ Vision Bridge: N/A.

Demo Operation: N/A — use the concise recorded prompt-structure summary; no live run or new Trial.

Audience Interaction: 0–4분 Transition 뒤 4–10분 Q&A를 운영한다. 공개 응답은 선택이며 질문이 없으면 사실과 절차의 차이를 묻는 준비 질문을 사용한다. 별도 실습은 없다.

Transition: “Agent가 Project를 알아도 왜 작업 방법은 달라질까?”

Time Management: Transition 4분 → Q&A 6분, 총 10분을 유지한다. 마지막 handoff 문구도 Q&A 종료 전에 포함하며 추가 Transition 시간을 만들지 않는다. 답변이 길어지면 다음 질문을 받지 않고 ACT 3로 이동한다.

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_2.pptx`의 S36 또는 `production/preview/act2/S36.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다. 질문이 없으면 Audience Interaction의 준비 질문으로 진행한다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.
