# ACT 2 — Speaker Notes

Status: ALIGNED — DEC-0048 visualizes S36 document growth with audience-facing project phases; DEC-0047 S35 and DEC-0046 S34 remain preserved. Numbering: DEC-0043, 90-slide current sequence. Rendered/embedded Notes parity for the new sequence was checked locally; see production/evaluation/S36_CONTEXT_GROWTH_REVISION.md. The prior addition validation remains historical. Existing per-slide time/Mode values are preserved; the approved course totals are ACT 1 63 minutes and 368 minutes overall. Windows, room, account and timed rehearsal remain UNVERIFIED.

Historical alignment status: ALIGNED — DEC-0038의 82장 번호와 운영 지침을 정렬했다. 신규 제작본의 렌더·내장 Notes 대조는 production/evaluation/PROMPT_TIMELINE_REVISION.md에서 별도로 기록한다. 기존 81장판의 PASS를 승계하지 않는다. Windows, room, account, and timed rehearsal remain UNVERIFIED.

Authority: `plan/SLIDE_MAP.md`, `plan/SLIDE_TEMPLATE_MAP.md`, `plan/VISUAL_SPEC.md`, `plan/VISUAL_TEMPLATE_FREEZE.md`, `plan/SPEAKER_NOTES_ARCHITECTURE.md`, `plan/SPEAKER_NOTES_FREEZE.md`, `plan/PRODUCTION_PLAN.md`, `plan/CLAIM_FREEZE.md`, `plan/DEMO_MATRIX.md`, `plan/DEMO_RUNBOOK_SPEC.md`, and `plan/DECISIONS.md`.

Historical continuity revision: DEC-0032 (2026-10-20), 당시 80장판. Historical handoff review: production/evaluation/FULL_DECK_CONTINUITY_REVISION.md. Prior validation history remains below.

## S32 — 다른 Task에 같은 설명이 반복된다

Slide ID: S32

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

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_2.pptx`의 S32 또는 `production/preview/act2/S32.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

## S33 — 작은 Project Context의 첫 기록

Slide ID: S33

Working Title: 작은 Project Context의 첫 기록

ACT / Section: ACT 2 / 2B

Allocated Time: 4 minutes

Mode Split: Demo 4 minutes (HYBRID planned; activation unverified)

Primary Message: STATE-01의 실제 AGENTS.md에는 반복되는 프로젝트 목적, 실행 방법, 테스트 명령, 기본 제약이 기록되어 있다.

Opening Question: “반복되는 Project 정보를 한 번 기록하면 어떤 점이 달라질까?”

Speaker Flow:

1. (0:00–1:00) STATE-00-FIXED에서 STATE-01로 바뀐 것은 root AGENTS.md 한 파일 추가임을 설명한다.
2. (1:00–3:00) 네 발췌를 순서대로 가리킨다. 목적: 로컬 grayscale CLI. 실행: README의 준비된 명령. 테스트: 원문 명령. 제약: 범위를 지키고 관련 동작을 검증. 영어 문장을 모두 낭독하지 않는다.
3. (3:00–4:00) Task마다 반복 설명하던 사실을 저장소에 둔 설계 의도를 정리하고, 실제 활용 관찰은 S34로 넘긴다.

화면 진행: 한국어 의미를 먼저 읽고 바로 위의 실제 AGENTS.md 발췌와 대조한다. 강조한 CLI 목적·README·범위/검증 문구만 짚고 테스트 명령은 입력 실습이나 CLI 설명으로 확장하지 않는다.

Evidence / Source: STATE-01 / DEMO-02 / OBSERVED_PRODUCT. Demo tag `14baf81746a981d7cd96b7a014ea06f28c3dd6b4`, root `AGENTS.md` 2, 5, 9, 15행 발췌. 15줄/567bytes는 원문 메타데이터이며 화면의 중심 메시지로 쓰지 않는다. 테스트 명령은 `Run`과 구두점을 제외한 원문 명령 문자열이다. Source: `plan/DEMO_MATRIX.md` STATE-01 기록.

Claim Boundary: 실제 파일이 그 상태에 존재했다는 근거다. 성능, 정확도, 토큰 절감 또는 AGENTS.md 단독 인과효과를 주장하지 않는다. 제품 코드·테스트·README는 그 상태 전환에서 바뀌지 않았다. S34의 지침 활용 관찰을 이 장의 결과로 앞당기지 않는다. 현재 Desktop 자동 로딩이나 교육 환경을 검증한 것이 아니다.

Beginner Explanation: A small set of facts that applies across Project Tasks can be written down once in the repository.

Advanced Insight: The design choice is about context scope and maintenance ownership, not a measured quality or performance effect.

C++ Vision Bridge: N/A.

Demo Operation: `production/ACT_2.pptx`의 S33 및 `production/preview/act2/S33.png`에 있는 실제 AGENTS.md 원문 발췌를 가리킨다. 편집기 screenshot이 아니다. Live/HYBRID는 발표 환경 검증 전까지 비활성이다.

Audience Interaction: Point out the recurring facts without asking the audience to inspect a repository.

Transition: “이 안내가 실제 Task에서 어떻게 사용됐는지 기록을 보겠습니다.”

Time Management: Demo 4분 유지. 1분 상태 전환, 2분 네 발췌, 1분 의미와 S34 handoff. 명령어 옵션별 설명은 생략한다.

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_2.pptx`의 S33 또는 `production/preview/act2/S33.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — DEC-0030에서 승인한 화면 강조와 운영 Cue를 정렬했다. 최종 PPT/Notes/PNG 대조와 렌더 검토 결과는 production/evaluation/FULL_DECK_PRESENTATION_POLISH.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 제품·계정, 실제 시간 리허설은 UNVERIFIED.

## S34 — AGENTS.md의 지침대로 검증했다

Slide ID: S34

Working Title: AGENTS.md의 지침대로 검증했다

ACT / Section: ACT 2 / 2B

Allocated Time: 4 minutes

Mode Split: Demo 4 minutes (HYBRID planned; activation unverified)

Primary Message: 이번 기록에서는 Agent가 AGENTS.md의 테스트 지침을 실제 작업에 적용했다. 작업 Prompt에는 검증 근거 보고가 있었지만 테스트 실행 명령은 없었다.

Opening Question: “Prompt에 다시 적지 않은 테스트 명령을 Agent는 어디에서 확인했을까?”

Speaker Flow:

1. (0:00–1:00) 왼쪽 Prompt 창의 실제 요청 핵심 발췌·번역을 읽는다. README Test 절의 과거 STATE-00 실패와 현재 checkout을 구분하고, README.md만 변경하며 최종 diff·관련 검증 근거를 보고하라는 실제 요청이다. 아래 원문 밖 주석은 교육자의 설명이며 Agent에게 보낸 문장이 아니다. 검증 자체를 요청하지 않은 것이 아니라 구체 테스트 명령을 Prompt에 넣지 않은 것이다.
2. (1:00–2:00) 가운데 AGENTS.md가 프로젝트 작업 지침이라는 역할을 강조한다. STATE-01 지침은 지정된 unittest 명령으로 테스트를 실행하라고 한다. TRIAL-003에서는 Agent가 루트 지침을 확인·출력한 뒤 그 프로젝트 테스트 명령을 실행했다. 파일을 읽었다는 사실에 더해 테스트 지침과 대응하는 실행 기록이 있음을 보여준다.
3. (2:00–3:00) 오른쪽 전체11/11 PASS는 당시 관찰 결과다. 실제 실행은 지침의 PYTHONPATH=src python3 -m unittest discover -s tests -v 앞에 PYTHONDONTWRITEBYTECODE=1을 붙였다. 전체 command bytes가 동일하다거나 새 실행 결과라고 표현하지 않는다. 명령 옵션별 설명이나 입력 실습으로 확장하지 않는다.
4. (3:00–4:00) 하단의 Prompt 밖 테스트 지침이 실제 실행에 적용됐다는 메시지를 회수한다. Personal/global Skills도 실행됐고 active instruction-chain dump가 없어 강제 준수 보장·AGENTS.md 단독 효과·모든 규칙 준수는 증명하지 않는다. README-only는 Prompt에도 있었으므로 독립적인 지침 효과로 세지 않는다. Task Prompt와 Project Context의 역할을 나누는 S35로 연결한다.

Evidence / Source: TRIAL-003 / STATE-01 / DEMO-02 / OBSERVED_PRODUCT. plan/DEMO_MATRIX.md의 Interface/Product627–634행, 실제 Prompt636–644행, Verification657–672행, Project Context Used674–678행. 지침 명령은 ai-dev-training-demo STATE-01 AGENTS.md9행과 대조했다. 행 번호는 DEC-0046 작성 시점의 locator다. 원본 Trial·지침은 수정하지 않았다.

Claim Boundary: 단일 CLI 실행의 테스트 지침 사용 관찰이다. 테스트 명령이 없었다는 주석은 실제 지시문이 아니며, 요청에는 최종 diff와 관련 검증 근거 보고가 있었다. AGENTS.md가 모든 지침 준수를 강제했다거나 단독 원인이었다고 주장하지 않는다. Personal readchk/re0/sip도 실행됐고 active instruction-chain trace가 없다. README-only는 Prompt와 중복된 제약이며 local-data/runtime-dependency 규칙은 이번 작업에서 필요하지 않았다. 현재 Desktop·계정·반복성·성능·정확도·토큰 절감 근거가 아니다.

Beginner Explanation: 실제 Prompt는 현재 README 작업을 요청한다. AGENTS.md는 프로젝트 작업 지침을 담고 있으며 이 기록에서는 그 테스트 지침의 명령을 사용했다. 검증 근거 요청과 구체 테스트 명령의 위치를 구분한다.

Advanced Insight: Observed use of the repository test instruction is supported. Enforcement, an isolated instruction-loading cause and attribution of README-only scope to AGENTS.md are not established by this run.

C++ Vision Bridge: N/A.

Demo Operation: 기존 DEMO-02의 Demo4분에 실제 요청 발췌·번역, 외부 주석, 지침 적용 관찰,11/11 결과를 순서대로 가리킨다. 화면은 기록 요약이며 실제 제품 입력창·터미널 캡처 또는 현재 Desktop 실행이 아니다. HYBRID 활성화는 UNVERIFIED이고 기본 경로는 정적 PPT/PNG다.

Audience Interaction: Ask the opening question, pause briefly, then reveal the record. Do not require an answer.

Transition: “이번 Task의 Prompt와 Project가 계속 유지할 Context는 어떻게 다른가?”

Time Management: 1분 실제 요청과 외부 주석,1분 프로젝트 작업 지침,1분 테스트 실행·11/11 결과,1분 해석 한계와 S35 연결. Demo4분·기존 Mode는 유지하며 실측 리허설은 UNVERIFIED다.

Fallback: production/ACT_2.pptx S34 또는 production/preview/act2/S34.png를 정적 기본 경로로 사용한다. 실제 Prompt 발췌·번역과 원문 밖 주석을 구분한다. 로컬 렌더·내장 Notes 대조는 production/evaluation/S34_GUIDANCE_REVISION.md를 따른다. 원본 Trial 캡처나 새 실행을 만들지 않는다.

Validation Status: ALIGNED — DEC-0046의 실제 Prompt/외부 주석 분리와 관찰된 지침 준수 강조를 반영했다. 최종 PPT/Notes/PNG 검토는 production/evaluation/S34_GUIDANCE_REVISION.md에 기록한다. Windows PowerPoint·발표 PC 글꼴·교육장·현재 제품/계정·실측 리허설은 UNVERIFIED.


## S35 — Task Prompt와 Project Context

Slide ID: S35

Working Title: Task Prompt와 Project Context

ACT / Section: ACT 2 / 2C

Allocated Time: 5 minutes

Mode Split: Lecture 5 minutes

Primary Message: A Task Prompt describes what is wanted now; Project Context describes facts and constraints that generally remain true for the Project.

Opening Question: “이 정보는 언제까지 유효한가?”

Speaker Flow:

1. (0:00–1:00) S34의 실제 기록을 회수하고, 이번 목표와 여러 작업에서 다시 사용할 정보의 범위·수명을 구분한다.
2. (1:00–2:30) 왼쪽 테두리와 화살표를 따라 프롬프트창을 가리킨다. crop 수정과 이번 README-only는 서로 다른 작업별 요청 예다. 두 문장을 합친 실제 Prompt나 추가 Trial로 설명하지 않는다.
3. (2:30–4:00) 오른쪽 테두리와 화살표를 따라 AGENTS.md 문서를 가리킨다. 테스트 명령과 근거 기반 의존성 정책은 여러 작업에서 다시 참고할 프로젝트 정보다. AGENTS.md는 저장 방식의 예시이며 모든 Context를 이 파일 하나에 넣으라는 뜻은 아니다.
4. (4:00–5:00) 하단의 ‘다음 작업에서는 목표가 달라짐’과 ‘여러 작업에서 다시 참고’를 비교한다. C++의 공통 제약과 이번 알고리즘 변경 조건도 범위가 다를 수 있다는 짧은 예만 들고 S36의 정보 증가 질문으로 넘긴다.

화면 진행: 두 열에서 각각 예시 테두리 → 화살표 → 저장·전달 위치를 짚고 하단의 수명 차이를 회수한다. 창과 문서는 교육용 생성 이미지이고 내용·화살표·파일명은 native 편집 요소다. 실제 제품 UI나 실행 캡처가 아니다.

Evidence / Source: BEAT-009–010, TRANS-003, CLM-0003, CLM-0005, DEC-0047. TEACHING_MODEL / CONCEPTUAL; examples summarize S32–S34. Generated visual provenance and prompts: assets/slide-illustrations/task-context/README.md. No new Trial or product capture.

Claim Boundary: This is a teaching model for scope, lifetime and information placement, not a formal OpenAI taxonomy, an exclusive Context storage rule, observed UI or proof that one layer is always better. The prompt-window and Markdown images are generated teaching illustrations. Preserve the source Trial and its limits.

Beginner Explanation: Put the current goal in the Task request and distinguish it from facts the Project keeps using.

Advanced Insight: Scope and lifetime are useful dimensions for deciding ownership and update responsibility.

C++ Vision Bridge: Briefly distinguish a general Project constraint from a Task-specific algorithm condition; do not list tools or hardware.

Demo Operation: N/A.

Audience Interaction: Give the audience a brief silent pause to classify the examples mentally. Do not turn it into a hands-on task.

Transition: “정확한 정보를 더 많이 넣으면 언제나 괜찮을까?”

Time Management: Keep the model to two layers and four examples. Leave research and detailed routing for later slides.

Fallback: LOCAL STATIC ARTIFACT — production/ACT_2.pptx의 S35 또는 production/preview/act2/S35.png를 사용한다. 최종 패키지·PNG·Notes 일치는 production/evaluation/S35_CONTEXT_PLACEMENT_REVISION.md와 검증 JSON으로 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: ALIGNED — DEC-0047의 예시 테두리·대상 이미지·화살표와 두 열의 수명 비교를 반영했다. 로컬 최종 렌더와 Notes parity는 production/evaluation/S35_CONTEXT_PLACEMENT_REVISION.md를 따른다. Windows PowerPoint·발표 PC 글꼴·교육장·현재 제품/계정·실측 리허설은 UNVERIFIED.

## S36 — 정확한 정보도 계속 늘어난다

Slide ID: S36

Working Title: 정확한 정보도 계속 늘어난다

ACT / Section: ACT 2 / 2D

Allocated Time: 4 minutes

Mode Split: Case 4 minutes

Primary Message: 프로젝트가 진행되며 AGENTS.md에 필요한 정보가 더해졌다. 정보가 늘어난 사실 자체를 실패로 판단하지 않고 이번 Task에서 모두 필요한지 묻는다.

Opening Question: “정확한 Project 정보라면 모든 Task에 늘 넣어도 될까?”

Speaker Flow:

1. (0:00–1:00) 왼쪽 ‘프로젝트 초기’와 짧은 AGENTS.md를 가리킨다. 목적·실행·테스트·기본 제약처럼 처음의 공통 안내가 담겨 있었다. 저장소 State 번호나 줄 수를 외우게 하지 않는다.
2. (1:00–2:00) ‘프로젝트 진행’ 화살표를 따라 오른쪽 ‘현재 프로젝트’로 이동한다. 같은 폭의 문서에 기존 회색 정보가 남고 아래 청록색 정보가 더해진 모습을 짚는다. ‘현재’는 이야기의 이 시점이며 Demo HEAD라는 뜻이 아니다. 날짜·몇 달 등 경과 기간이나 자연 증가율은 말하지 않는다.
3. (2:00–3:00) 새로 기록한 실제 정보 네 가지를 확인한다. 처리 순서는 load → normalize → 선택적 invert/crop/resize → write이고, 화면은 중간 단계를 생략했다. 이미지 명세는 crop의 반열린 범위 [x_start, x_end) 등이며, 테스트 구조는 tests/test_pipeline.py 등의 모듈·입출력 검사다. CLI 출력은 width/height/pixel_count/minimum/maximum/mean 필드다. 화면에서 코드·경로 전체를 해설하지 않는다.
4. (3:00–4:00) ‘이번 작업에도 모두 필요할까?’를 질문한다. 정확한 정보가 추가됐지만 증가 자체가 Agent 오류를 일으켰다는 관찰은 아니다. S37의 작은 README 작업에서 관련성을 확인한다.

화면 진행: 초기 문서 → 프로젝트 진행 → 길어진 같은 문서 → 새 정보 네 유형 → 이번 Task의 관련성 질문. 문서 길이는 정보 축적의 생성 도식이며 실제 스크린샷이나 정확한 비율 비교가 아니다.

Evidence / Source: STATE-01 and STATE-02, BEAT-011, CLM-0014, CLM-0015, DEC-0048. OBSERVED_PRODUCT: 실제 AGENTS.md 전후 내용은 plan/DEMO_MATRIX.md와 보존 State tag를 따른다. 원본 메타데이터는15줄/567bytes와32줄/1,303bytes이며 화면에는 표시하지 않는다. STATE-02는55c045523ed1409449d7eea5b0d873983fe101b6이다. 생성 도식·프롬프트: assets/slide-illustrations/context-growth/README.md.

Claim Boundary: Do not label the growth as a failure threshold, claim that it caused an error, or imply that the content was inaccurate. The visual summarizes recorded document changes; its length is qualitative, no elapsed duration was measured, and current project means this Story stage, not the latest repository HEAD. It is a generated teaching diagram, not a document capture.

Beginner Explanation: More documented facts create a follow-up question: does each Task need all of them?

Advanced Insight: Maintenance cost and stale information are review considerations, not observed failures in this comparison.

C++ Vision Bridge: N/A.

Demo Operation: Use the static before/after document-content reconstruction. No live repository interaction, new Trial or elapsed-time experiment is planned.

Audience Interaction: Treat the slide as a case question. Allow a short pause without requiring a public answer.

Transition: “작은 README Task에서 어떤 정보가 실제로 필요했을까?”

Time Management: 초기 안내1분, 프로젝트 진행과 누적 모습1분, 새 정보 네 유형1분, 관련성 질문1분으로 Case4분을 유지한다. 숫자·용량 해설과 기간 추측을 하지 않고 문서 크기의 인과 효과를 만들지 않는다.

Fallback: LOCAL STATIC ARTIFACT — production/ACT_2.pptx의 S36 또는 production/preview/act2/S36.png를 사용한다. 최종 패키지·PNG·Notes 일치는 production/evaluation/S36_CONTEXT_GROWTH_REVISION.md와 검증 JSON을 따른다. 실제 문서 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: ALIGNED — DEC-0048의 청중용 시점 이름과 AGENTS.md 정보 축적 도식을 반영했다. 최종 렌더·Notes parity는 production/evaluation/S36_CONTEXT_GROWTH_REVISION.md를 따른다. Windows PowerPoint·발표 PC 글꼴·교육장·제품/계정·실측 리허설은 UNVERIFIED.

## S37 — 정확하지만 이번 Task에는 불필요한 정보

Slide ID: S37

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

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_2.pptx`의 S37 또는 `production/preview/act2/S37.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

## S38 — 정보의 범위와 제공 시점

Slide ID: S38

Working Title: 정보의 범위와 제공 시점

ACT / Section: ACT 2 / 2E

Allocated Time: 4 minutes

Mode Split: Lecture 4 minutes

Primary Message: The course model separates always-on Project facts, task-relevant detail, and reusable workflow by scope and timing.

Opening Question: “무엇은 항상 필요하고, 무엇은 Task에 따라 찾아야 할까?”

Speaker Flow:

1. (0:00–1:00) 세 행이 이 과정에서 쓰는 정보 설계 모델임을 밝힌다.
2. (1:00–3:00) 기본 안내, 질문에 따른 상세, 특정 작업의 수행 방법을 순서대로 가리킨다. 각 행의 구체 예시를 하나씩 설명한다.
3. (3:00–4:00) 성능 조사 절차 예가 STATE-02에 저장돼 있었다는 뜻은 아니라고 한정한다. 방금은 정보의 범위와 제공 시점을 나눴고, 다음에는 ‘Context 양만 늘리면 충분할까?’를 연구의 제한된 범위 안에서 살펴본다고 예고한다.

Evidence / Source: BEAT-012, BEAT-014, STATE-02, CLM-0014, CLM-0015, CLM-0003, CLM-0005. TEACHING_MODEL / CONCEPTUAL.

Claim Boundary: Always-on / On-demand / Workflow is a course model, not an official OpenAI classification. Do not claim token savings or improved performance.

Beginner Explanation: Some facts apply broadly; details matter for a smaller set of Tasks; a work procedure says how to approach a class of work.

Advanced Insight: Keep durable facts, selectively needed details, and workflow responsibility conceptually distinct even when they can all appear outside a Task Prompt.

C++ Vision Bridge: N/A.

Demo Operation: N/A.

Audience Interaction: Ask the audience to notice that information has different scopes; no category-writing exercise is required.

Transition: “필요한 때 찾게 하는 대신 모두 넣어두면 충분할까? 이 질문을 Long Context 연구의 범위 안에서 보겠습니다.”

Time Management: Four minutes, one minute per bucket plus the boundary. Do not present this as a product feature taxonomy.

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_2.pptx`의 S38 또는 `production/preview/act2/S38.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

## S39 — Long Context 연구가 말해주는 범위

Slide ID: S39

Working Title: Long Context 연구가 말해주는 범위

ACT / Section: ACT 2 / 2E

Allocated Time: 4 minutes

Mode Split: Lecture 4 minutes

Primary Message: Research in specific models and tasks supports a bounded caution: more context is not automatically better, and relevance or information position can matter under some conditions.

Opening Question: “정보의 범위와 시점을 나눠봤는데, Context 양만 늘리면 충분할까?”

Speaker Flow:

1. (0:00–1:00) 앞 장의 정보 분류에서 잠시 물러나 ‘양만 늘리면 충분한가?’라는 질문을 보는 목적을 밝힌다. ‘더 많은 Context가 항상 더 좋은 것은 아니다’의 적용 범위를 특정 모델·과제에 한정한다.
2. (1:00–3:00) 왼쪽 Lost in the Middle의 여러 문서 질문 답변/key-value 검색, 오른쪽 RepoQA의 50개 Repository 코드 검색을 비교한다. 논문이 답한 질문과 승인된 핵심 결론만 말한다. 수치 그래프나 현재 Codex 성능 추정은 추가하지 않는다.
3. (3:00–4:00) 화면 하단의 두 출처와 Notes의 원문 링크를 안내한다. 이 Demo의 현재 Codex Repository coding을 직접 시험한 연구가 아님을 명시한다. 연구 소개를 마치고, 이번 Task에 필요한 상세 정보와 그 위치를 설계하는 질문으로 돌아간다.

화면 진행: 왼쪽은 관련 정보의 위치를 바꾸는 질적 과제 구조, 오른쪽은 Repository에서 관련 코드를 찾는 과제 구조다. 칠해진 블록은 정보 위치 표시이며 점수·성능·현재 Codex 결과를 뜻하지 않는다. 수치 그래프처럼 해석하지 않는다.

Evidence / Source: RESEARCH. Liu et al., “Lost in the Middle: How Language Models Use Long Contexts,” TACL 2024, 12:157–173, https://aclanthology.org/2024.tacl-1.9/; RepoQA (2024), arXiv:2406.06025, https://arxiv.org/abs/2406.06025. RepoQA venue remains TODO in the source plan and is not invented here.

Claim Boundary: Do not claim current Codex fails because of Lost in the Middle, create a context-length threshold, generalize results across all models/tasks, or invent numeric/curve data. Keep study conditions beside the conclusion.

Beginner Explanation: A larger context window does not guarantee that every included detail is equally useful in every task.

Advanced Insight: The cited work covers specific historical models and benchmark settings, including multi-document QA and synthetic retrieval; it does not establish a present-day Codex limitation.

C++ Vision Bridge: N/A.

Demo Operation: N/A. This is a research summary, not a deterministic product demonstration.

Audience Interaction: Use the opening question to invite a short mental prediction, then answer within the cited scope.

Transition: “이 연구가 Demo의 Routing을 검증한 것은 아닙니다. 이제 Task에 필요한 상세 정보를 어디서 찾게 할지 설계로 돌아가겠습니다.”

Time Management: Keep the paper descriptions concise and reserve the final minute for the transfer boundary.

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_2.pptx`의 S39 또는 `production/preview/act2/S39.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — DEC-0030에서 승인한 화면 강조와 운영 Cue를 정렬했다. 최종 PPT/Notes/PNG 대조와 렌더 검토 결과는 production/evaluation/FULL_DECK_PRESENTATION_POLISH.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 제품·계정, 실제 시간 리허설은 UNVERIFIED.

## S40 — 필요한 상세 정보로 가는 길

Slide ID: S40

Working Title: 필요한 상세 정보로 가는 길

ACT / Section: ACT 2 / 2F

Allocated Time: 3 minutes

Mode Split: Lecture 3 minutes

Primary Message: Context design asks what information a Task needs and when it should be available, rather than placing every detail in one place.

Opening Question: “Task가 필요한 상세 정보에 도달하는 경로는 어떻게 설계할까?”

Speaker Flow:

1. (0:00–1:00) Move from the question of context amount to the question of relevance and timing.
2. (1:00–2:00) Show `Task → Core Context → Relevant Detail when needed` as a course diagram.
3. (2:00–3:00) Give one short C++ example and reserve STATE-03 for the next sequence. 이 장에서는 찾아가는 경로를 보았고, 다음 장에서는 그 출발점인 Core에 무엇을 남길지 정한다고 마무리한다.

화면 진행: 현재 Task 질문에서 출발해 Core의 안내를 거쳐 상세 정보로 이동한다. 이 장의 초점은 어디로 찾아갈지이며, 다음 장에서 Core에 무엇을 남길지 정한다.

Evidence / Source: BEAT-014, STATE-03 as the upcoming example, CLM-0003, CLM-0005, CLM-0014, CLM-0015. TEACHING_MODEL / CONCEPTUAL.

Claim Boundary: This is a routing question, not evidence of performance improvement, token savings, or a product's automatic retrieval behavior.

Beginner Explanation: A short starting point can direct a reader toward more detail when a Task needs it.

Advanced Insight: Discovery and maintenance remain design concerns; this slide does not claim perfect retrieval.

C++ Vision Bridge: Distinguish a general Project constraint from a Task-specific CMake or algorithm contract. Do not list tools, hardware, or environment commands.

Demo Operation: N/A — STATE-03 results are reserved for the following section.

Audience Interaction: Let the routing question sit for a moment; do not reveal the Trial result.

Transition: “경로를 봤으니, 이제 그 출발점인 Core에 무엇을 남길지 정해보겠습니다.”

Time Management: Keep this to one diagram and one brief C++ example. No product-specific implementation details.

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_2.pptx`의 S40 또는 `production/preview/act2/S40.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — DEC-0030에서 승인한 화면 강조와 운영 Cue를 정렬했다. 최종 PPT/Notes/PNG 대조와 렌더 검토 결과는 production/evaluation/FULL_DECK_PRESENTATION_POLISH.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 제품·계정, 실제 시간 리허설은 UNVERIFIED.

## S41 — Core Context에서 상세 정보로 가는 길

Slide ID: S41

Working Title: Core Context에서 상세 정보로 가는 길

ACT / Section: ACT 2 / 2F

Allocated Time: 4 minutes

Mode Split: Lecture 4 minutes

Primary Message: Root/Core Context can be a starting point that points toward detail, rather than an encyclopedia of all Project knowledge.

Opening Question: “그 경로의 출발점인 Core에는 무엇을 남길까?”

Speaker Flow:

1. (0:00–1:00) 앞 장에서 본 탐색 경로의 출발점에 초점을 맞춘다. 왼쪽 기본 안내에 남길 목적, 상시 제약, 상세 정보 위치를 읽는 순서대로 가리킨다.
2. (1:00–2:30) 오른쪽 architecture, image contracts, testing으로 이어지는 관계를 설명한다. 화살표는 교육용 정보 설계 관계다.
3. (2:30–4:00) C++에서는 build/test 진입점과 기본 제약에서 해당 알고리즘 계약·하드웨어 조건으로 안내할 수 있음을 짧게 연결한다. Routing 성능 효과는 주장하지 않는다.

화면 진행: Core의 세 항목을 먼저 읽고 필요한 상세의 세 행으로 이동한다. S40의 탐색 경로를 반복 설명하기보다 항상 읽을 기본 안내와 필요할 때 찾을 상세의 경계를 확인한다.

Evidence / Source: BEAT-014, CLM-0003, CLM-0005, CLM-0014, CLM-0015. TEACHING_MODEL / CONCEPTUAL; describe STATE-03 structure in S42.

Claim Boundary: The model does not demonstrate better retrieval or lower cost. No automatic product behavior is claimed.

Beginner Explanation: Keep a small starting page and put specialized details in topic pages that it points to.

Advanced Insight: Choose core facts for cross-task stability and details for a narrower task scope; routing quality remains an empirical question.

C++ Vision Bridge: Core: build/test entry and Project constraints. Detail: algorithm contract and hardware assumptions. Keep it to this scope example.

Demo Operation: N/A — the observed repository structure follows on S42.

Audience Interaction: Ask what belongs in the core; do not solicit a complete taxonomy.

Transition: “Demo Repository에서는 이 Mental Model이 어떻게 반영됐을까?”

Time Management: Four minutes; keep the C++ bridge to one integrated minute and avoid listing CMake/hardware items.

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_2.pptx`의 S41 또는 `production/preview/act2/S41.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — DEC-0030에서 승인한 화면 강조와 운영 Cue를 정렬했다. 최종 PPT/Notes/PNG 대조와 렌더 검토 결과는 production/evaluation/FULL_DECK_PRESENTATION_POLISH.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 제품·계정, 실제 시간 리허설은 UNVERIFIED.

## S42 — 정보를 지우지 않고 위치를 나누기

Slide ID: S42

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

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_2.pptx`의 S42 또는 `production/preview/act2/S42.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

## S43 — 서로 다른 두 Task가 무엇을 읽을까?

Slide ID: S43

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

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_2.pptx`의 S43 또는 `production/preview/act2/S43.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

## S44 — Crop Task에서 관찰한 접근

Slide ID: S44

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

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_2.pptx`의 S44 또는 `production/preview/act2/S44.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

## S45 — Task별 접근은 달랐지만 완벽하지는 않다

Slide ID: S45

Working Title: Task별 접근은 달랐지만 완벽하지는 않다

ACT / Section: ACT 2 / 2G

Allocated Time: 7 minutes

Mode Split: Demo 1 minute (CAPTURED) + Case 3 minutes + Reflection 2 minutes + Q&A 1 minute

Primary Message: TRIAL-005A/B showed a task-specific difference in detailed document access, but did not prove perfect routing, token savings, or performance improvement.

Opening Question: “Task별 차이를 관찰한 것만으로 완벽한 Routing을 말할 수 있을까?”

Speaker Flow:

1. (0:00–1:00 / Demo) 강조한 첫 행에서 A는 image-contracts.md를 읽고 B는 읽지 않았음을 가리킨다.
2. (1:00–3:00 / Case) architecture는 둘 다 읽었고 testing은 A의 최종 실행에서만 읽었다고 확인한다. B는 설정·README·source도 확인했다. A의 더 넓은 읽기와 실행 간 변동도 남아 있다.
3. (3:00–4:00 / Case) 완벽한 Routing 미입증, 토큰 절약·성능 개선 미측정을 분명히 말한다.
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

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_2.pptx`의 S45 또는 `production/preview/act2/S45.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

## S46 — 지식은 정리됐지만 절차는 반복된다

Slide ID: S46

Working Title: 지식은 정리됐지만 절차는 반복된다

ACT / Section: ACT 2 / 2I

Allocated Time: 10 minutes

Mode Split: Transition 4 minutes + Q&A 6 minutes

Primary Message: Task Prompt, Project Context, and routing address different information responsibilities; a repeated work procedure can remain as a separate problem.

Opening Question: “Project 정보를 잘 정리했으면 문제가 끝난 걸까?”

Speaker Flow:

1. (0:00–2:00 / Transition) 왼쪽의 현재 목표, 공통 사실, 상세 정보 위치를 순서대로 회수한다.
2. (2:00–4:00 / Transition) 오른쪽 ‘먼저 측정하고, 조사한 뒤 변경하고, 같은 조건으로 확인’이라는 반복 절차를 보여준다. Context 선택을 완전히 해결했다는 뜻은 아니라고 밝힌다.
3. (4:00–10:00 / Q&A) ‘같은 작업 절차도 다시 써야 할까?’로 질문을 받는다. 질문이 없으면 사실과 절차의 책임 차이를 짚고 ‘Project 지식과 별개로 같은 조사·검증 절차도 매번 다시 적어야 할까?’를 던진다. 두 Task의 공통 절차를 다음 관찰 대상으로 삼는다. 마지막 짧은 handoff도 이 6분 안에 포함한다.

Evidence / Source: BEAT-017–018, TRANS-005, TRIAL-006/007 as context for the upcoming problem. OBSERVED_PRODUCT for repeated prompt structure with PARTIAL attribution; TEACHING_MODEL for the three responsibilities and the transition question.

Claim Boundary: Do not attribute the repeated procedure solely to the Trial Prompt; global Harness influence remains. Do not present Skill or another solution here.

Beginner Explanation: Knowing Project facts and repeating a reliable way of working are different needs.

Advanced Insight: Context can reduce repeated fact explanation while process ownership remains unresolved; keep observed repetition separate from its cause.

C++ Vision Bridge: N/A.

Demo Operation: N/A — use the concise recorded prompt-structure summary; no live run or new Trial.

Audience Interaction: 0–4분 Transition 뒤 4–10분 Q&A를 운영한다. 공개 응답은 선택이며 질문이 없으면 사실과 절차의 차이를 묻는 준비 질문을 사용한다. 별도 실습은 없다.

Transition: “Project 지식과 별개로 같은 조사·검증 절차도 매번 다시 적어야 할까? 다음 두 성능 Task의 기록에서 반복된 부분을 보겠습니다.”

Time Management: Transition 4분 → Q&A 6분, 총 10분을 유지한다. 마지막 handoff 문구도 Q&A 종료 전에 포함하며 추가 Transition 시간을 만들지 않는다. 답변이 길어지면 다음 질문을 받지 않고 ACT 3로 이동한다.

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_2.pptx`의 S46 또는 `production/preview/act2/S46.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다. 질문이 없으면 Audience Interaction의 준비 질문으로 진행한다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.
