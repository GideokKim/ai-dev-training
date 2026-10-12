# ACT 0 — Speaker Notes

Status: REVISED — S01–S09 operational cues follow the approved Slide Map and
19-field Notes schema. Typography and S04–S06 static operation cues are revised.
The nine-slide Korean-visible preview set was rendered from the revised PPTX via
Keynote PDF and macOS PDFKit, then visually checked. Keynote reported missing
fonts; the deck requests Malgun Gothic and Consolas. Fontconfig on this Mac
matches those names to Nanum Gothic and Andale Mono, but the exact substitutions
used by Keynote are unconfirmed. Timed delivery, Windows PowerPoint, and room
projection remain unverified.

Authority: `plan/SLIDE_MAP.md`, `plan/SLIDE_TEMPLATE_MAP.md`,
`plan/SPEAKER_NOTES_ARCHITECTURE.md`, `plan/SPEAKER_NOTES_FREEZE.md`,
`plan/CLAIM_FREEZE.md`, `plan/DEMO_MATRIX.md`, and `plan/DECISIONS.md`.

## S01 — AI에게 지금 무엇을 맡기고 있는가?

Slide ID: S01

Working Title: AI에게 지금 무엇을 맡기고 있는가?

ACT / Section: ACT 0 / 0A

Allocated Time: 5 minutes

Mode Split: Lecture 1 minute + Reflection 4 minutes

Primary Message: 자기 AI 활용을 평가하지 않고, 현재 맡기는 업무 범위를 돌아본다.

Opening Question: “나는 지금 AI에게 무엇을 맡기고 있는가?”

Speaker Flow:

1. **OPEN (0:00–1:00):** 화면의 질문을 읽고 이 시간은 사용 수준을 평가하는 자리가 아니라고 말한다.
2. **REFLECTION (1:00–5:00):** 아래의 넓은 업무 범위 중 지금 익숙한 지점을 조용히 떠올리게 한다. 응답을 받거나 경험을 비교하지 않는다.

Evidence / Source: BEAT-001, CLM-0001, CLM-0002. TEACHING_MODEL.

Claim Boundary: 특정 AI 제품의 성능·우열 또는 개인의 숙련도를 평가하지 않는다. 질문과 업무 범위는 교육을 여는 모델이다.

Beginner Explanation: 지금 자주 맡기는 작은 일 하나를 떠올리면 충분하다. 아직 해보지 않은 사용법을 아는 척할 필요는 없다.

Advanced Insight: 서로 다른 출발점을 같은 문제 중심 Story에서 다룬다. 다음 단계 이름이나 고급 구성요소를 이 장에서 미리 설명하지 않는다.

C++ Vision Bridge: N/A.

Demo Operation: N/A.

Audience Interaction: Reflection은 개인적인 생각 시간이다. 답변·공유·실천 약속을 요구하지 않는다.

Transition: 작은 코드나 오류를 질문하는 익숙한 방식부터 인정하며 S02로 간다.

Time Management: Lecture 1분 후 4분간 침묵을 허용한다. 발표자가 예시를 길게 들거나 참석자에게 순서대로 묻지 않는다.

Fallback: 청중 반응이 없어도 기다린 뒤 다음 장으로 간다. 개인 경험을 말하게 하지 않는다.

Validation Status: DRAFT — Map, schema, local render 대조 완료; 실제 발표 속도와 교육장 가독성은 미검증.

## S02 — 작은 질문에는 Chatbot이 유용하다

Slide ID: S02

Working Title: 작은 질문에는 Chatbot이 유용하다

ACT / Section: ACT 0 / 0B

Allocated Time: 5 minutes

Mode Split: Lecture 5 minutes

Primary Message: 필요한 코드나 오류를 전달해 답을 받는 방식은 작은 질문에서 빠르고 유용할 수 있다.

Opening Question: “코드 일부나 오류를 ChatGPT에 물어본 적이 있는가?”

Speaker Flow:

1. **OPEN (0:00–1:00):** 익숙한 오류 질문을 떠올리게 한다. 이 사용법을 부족하거나 잘못된 방식으로 부르지 않는다.
2. **EXPLAIN (1:00–3:30):** `Code / Error → Copy → Ask → Copy Answer → IDE` 흐름을 따라가며 사람이 필요한 맥락을 골라 전달하는 점을 짚는다.
3. **INTERPRET (3:30–5:00):** 작은 질문에 이 흐름이 유용할 수 있음을 인정하고, 질문 범위가 여러 파일을 가로지를 때를 다음 장의 문제로 남긴다.

Evidence / Source: BEAT-001, CLM-0001, CLM-0002. TEACHING_MODEL / CONCEPTUAL 예시.

Claim Boundary: 일반적인 예시이며 특정 제품 기능, 정확도, 성능 또는 다른 방식보다 우월하다는 주장으로 말하지 않는다.

Beginner Explanation: 오류나 작은 코드 조각을 함께 보여 주고 설명을 받는 것은 자연스러운 시작점이다.

Advanced Insight: 흐름에 필요한 Context를 개발자가 직접 선택해 복사한다. 여기서는 그 수고가 항상 문제라고 단정하지 않는다.

C++ Vision Bridge: N/A.

Demo Operation: N/A.

Audience Interaction: Opening question은 생각을 여는 질문이다. 손들기나 경험 발표를 요구하지 않는다.

Transition: 질문이 여러 파일·구현 경로로 커지면 무엇을 먼저 찾아야 하는지 S03에서 묻는다.

Time Management: 다섯 단계의 순서를 짚고 작은 질문에서의 장점을 먼저 말한다. 상세 Prompt 작성법은 다음 ACT에서 다룰 문제이므로 설명하지 않는다.

Fallback: 발표자가 실제 사례를 준비하지 못해도 도식의 일반적인 오류 질문 흐름만 설명한다. 제품 화면을 즉석에서 만들지 않는다.

Validation Status: DRAFT — Map 역할과 교육 모델 대조 완료; 청중 이해도와 발표 속도는 미검증.

## S03 — 질문이 커지면 Context를 모으는 일이 생긴다

Slide ID: S03

Working Title: 질문이 커지면 Context를 모으는 일이 생긴다

ACT / Section: ACT 0 / 0C

Allocated Time: 4 minutes

Mode Split: Case 4 minutes

Primary Message: Repository 수준 질문에서는 사람이 관련 구현, 호출 경로, 테스트와 계약을 찾아 대화에 옮기는 일이 생길 수 있다.

Opening Question: “여러 파일에 걸친 질문을 하려면 무엇을 먼저 찾아야 할까?”

Speaker Flow:

1. **OPEN (0:00–1:00):** 단일 오류 설명에서 여러 파일에 걸친 Repository 질문으로 범위를 넓힌다.
2. **SHOW (1:00–2:30):** `Test`, `Implementation`, `Call path`, `Contract` 노드를 가리킨다. 이는 개념 도식이며 Trial에서 이미 발생한 문제라고 하지 않는다.
3. **INTERPRET (2:30–4:00):** 개발자가 연결된 정보를 찾아 대화에 옮기는 수고를 설명하고, 아직 Agent가 이를 대신한다는 해답은 보여주지 않는다.

Evidence / Source: BEAT-002, CLM-0004, CLM-0009. TEACHING_MODEL / CONCEPTUAL.

Claim Boundary: 이 상황은 ACT 0의 문제 모델이다. 특정 Trial의 실제 실패나 모든 Repository 업무에서 반복되는 비용으로 주장하지 않는다.

Beginner Explanation: 질문이 커질수록 관련 파일과 테스트를 찾는 일이 먼저 생길 수 있다.

Advanced Insight: 여러 파일 간 계약과 호출 경로를 Context로 모으는 일이 코드 생성 전의 별도 부담이 될 수 있다.

C++ Vision Bridge: N/A.

Demo Operation: N/A — 다음 장에서 관찰 기준을 제시한다.

Audience Interaction: 수사 질문이다. 응답이나 직접 파일 탐색을 요구하지 않는다.

Transition: “파일명을 알려주지 않아도 Agent가 필요한 경로를 찾을까?”라고 질문하며 S04의 관찰 기준으로 넘어간다.

Time Management: 문제를 세 개 이내의 관계로 설명한다. 파일 목록을 늘리거나 해결책을 먼저 공개하지 않는다.

Fallback: 도식이 보이지 않으면 Test, Implementation, Call path를 말로만 연결한다. 실제 Trial로 표현하지 않는다.

Validation Status: DRAFT — 개념 경계 및 T02-A 첫 구현 확인; 현장 가독성과 시간은 미검증.

## S04 — 파일명을 주지 않으면 Agent는 어디부터 볼까?

Slide ID: S04

Working Title: 파일명을 주지 않으면 Agent는 어디부터 볼까?

ACT / Section: ACT 0 / 0D

Allocated Time: 2 minutes

Mode Split: Lecture 2 minutes

Primary Message: Demo에서는 파일을 직접 지정하지 않았을 때의 Search → Read → Trace를 관찰한다.

Opening Question: “Agent가 Test, 구현, 호출 경로를 어떻게 찾는가?”

Speaker Flow:

1. **OPEN (0:00–0:30):** 이번 관찰의 질문을 제시한다.
2. **SET WATCH FOR (0:30–1:30):** failing Test, 관련 구현, call path 세 가지를 차례로 읽는다. 결과 영역은 비워 둔다.
3. **SCOPE (1:30–2:00):** 기준 자료가 Codex CLI 0.154.0의 read-only TRIAL-001 기록임을 알리고 S05로 넘긴다.

Evidence / Source: DEMO-01, STATE-00, TRIAL-001, BEAT-003, OQ-003, OQ-005. 이 장은 Trial setup이며 관찰 결과를 아직 공개하지 않는다.

Claim Boundary: 기록된 Trial은 격리된 비대화형 Codex CLI 0.154.0, macOS, `--sandbox read-only`, `--ignore-user-config` 조건에서 수행됐다. Codex Desktop, 교육 계정 또는 현재 제품 동작을 입증하지 않는다.

Beginner Explanation: 결과를 보기 전에 무엇을 관찰할지 정하면 단순히 답만 읽는 것보다 Demo를 따라가기 쉽다.

Advanced Insight: 답변뿐 아니라 파일 발견과 호출 경로 추적을 관찰 대상으로 둔다.

C++ Vision Bridge: N/A.

Demo Operation: DEMO-01 / WATCH. 기본 경로는 정적 발표다. S04에서 Test, Implementation, Call path의 관찰 기준을 보여 주고 결과 영역은 비워 둔 뒤 S05로 이동한다. 자료는 `production/ACT_0.pptx`의 S04–S06과 `production/preview/act0/S04.png`–`S06.png`다. PNG는 PPT의 정적 렌더이며 실제 CLI 캡처가 아니다. 현재 Desktop·교육 계정 surface와 Live/Hybrid는 미검증이므로 지금 활성화하지 않는다. 향후 활성화하려면 대상 계정·surface, read-only 실행 조건, runbook, 기대 관찰 결과와 복귀 cue를 발표 환경에서 먼저 확인한다.

Audience Interaction: 응답을 요구하지 않는다. 세 관찰 항목을 청중이 마음속으로 따라오게 한다.

Transition: “실제 기록에서 어떤 Test와 경로가 발견됐을까요?”라고 묻고 S05에서 근거를 연다.

Time Management: 2분 안에 질문과 세 Watch For를 제시하고 Trial 환경의 범위를 한 문장으로 제한한다.

Fallback: READY — `production/ACT_0.pptx`의 S04 정적 슬라이드와 `production/preview/act0/S04.png`를 기본 발표 자료로 사용한다. 두 파일은 수정된 PPTX의 최종 로컬 렌더 결과다. 화면 공유가 모두 불가능하면 Test → Implementation → Call path를 말로 제시하고 S05의 기록 근거로 이동한다. Live CLI/Desktop을 즉석에서 열지 않는다. Windows·발표 PC·교육장 표시는 미검증이다.

Validation Status: REVIEWED — LOCAL STATIC PATH CONFIRMED — PPTX S04와 한글 표시 PNG를 확인함. 시간 리허설, 현재 제품 surface·교육 계정, Windows PowerPoint와 room readability는 UNVERIFIED.

## S05 — Agent가 Test와 호출 경로를 찾았다

Slide ID: S05

Working Title: Agent가 Test와 호출 경로를 찾았다

ACT / Section: ACT 0 / 0D

Allocated Time: 8 minutes

Mode Split: Demo 8 minutes (정적 TRIAL-001 기록·재구성 도식 기본 경로; HYBRID는 발표 환경 검증 전까지 비활성)

Primary Message: TRIAL-001 한 번의 읽기 전용 CLI 조사에서 Agent가 실패 Test, 구현 파일, 계약과 호출 경로를 찾아냈다.

Opening Question: “지정하지 않은 파일과 호출 경로를 실제로 찾아냈는가?”

Speaker Flow:

1. **OPEN (0:00–1:00):** 기록 근거를 사용한 정적 발표임을 밝히고, S05는 TRIAL-001을 재구성한 도식이며 실제 CLI screenshot이 아님을 말한다.
2. **SHOW (1:00–3:00):** `tests/test_transform.py::test_crop_excludes_end_coordinate`를 가리킨다.
3. **TRACE (3:00–5:00):** `cli.main()` → `pipeline.process_image()` → `transform.crop()` 경로를 따라간다.
4. **INTERPRET (5:00–7:00):** 계약 `[x_start, x_end)`와 관찰된 `row[x_start : x_end + 1]` 구현의 차이를 설명한다. 수정은 아직 하지 않았다고 말한다.
5. **SCOPE / HANDOFF (7:00–8:00):** 관찰은 단일 read-only CLI run에 한정됨을 다시 말하고 S06에서 결과와 환경 오류를 분리한다. 기본 경로에서는 이 마지막 1분에 Trial 결과를 요약해 handoff한다. 향후 별도 검증 후 Live를 허용해도 7:00에 hard stop하고 기록된 정적 경로로 복귀한다.

Evidence / Source: TRIAL-001, DEMO-01, STATE-00, CLM-0002, CLM-0009. 실패 Test 발견, 계약·구현 확인, 호출 경로 추적, extra-column 결과 설명, no-edit 준수는 해당 단일 run 기록에 있다.

Claim Boundary: Codex CLI 0.154.0의 단일 read-only 조사다. 반복성, Codex Desktop, 교육 계정, 현재 제품 기능 또는 보편적인 탐색 능력을 입증하지 않는다. 도식은 TRIAL-001 기록을 재구성한 설명이며 원본 screenshot이 아니다.

Beginner Explanation: 파일명을 미리 주지 않은 한 번의 조사에서 실패 Test와 관련 구현·호출 경로가 찾아졌다.

Advanced Insight: 찾은 경로와 설명은 그 run에서 확인된 범위다. 설명과 수정, 검증은 다른 단계이며 이 Trial에서는 코드를 바꾸지 않았다.

C++ Vision Bridge: N/A.

Demo Operation: DEMO-01 / 기본 경로는 `production/ACT_0.pptx` S05 또는 `production/preview/act0/S05.png`의 정적 evidence다. 근거는 `plan/DEMO_MATRIX.md`의 TRIAL-001 기록이며, 현재 산출물의 도식은 해당 기록의 재구성이다. Label `RECONSTRUCTED DIAGRAM · TRIAL-001 RECORD`와 `OBSERVED PRODUCT · CODEX CLI 0.154.0 · READ-ONLY`를 유지한다. 원본 터미널 캡처는 없으며 도식을 실제 캡처로 제시하지 않는다. Live/Hybrid는 현재 발표 계정·surface와 실행 조건이 확인되지 않아 비활성이다. 향후 검증을 거쳐 허용된 Live가 기대 결과를 보이지 않거나 권한·setup이 다르면 즉시 중단하고 “현재 환경에서는 이 과정을 확인할 수 없어, 기록된 TRIAL-001로 돌아가겠습니다.”라고 말한 뒤 S05 정적 도식으로 복귀한다. 복귀는 약 15초를 예상하되 실제 운영 시간은 리허설 전까지 미검증이다.

Audience Interaction: 청중은 S04의 세 Watch For를 확인한다. 중간 응답이나 실습을 요구하지 않는다.

Transition: 발견 사실을 다음 장에서 Repository 관찰과 실행 환경 제한으로 나눈다.

Time Management: 8분 배분은 유지한다: 0:00–1:00 범위와 재구성 표시, 1:00–3:00 Test, 3:00–5:00 path, 5:00–7:00 contract/구현 차이, 7:00–8:00 single-run 경계와 S06 handoff. 전체 로그·파일 목록·코드 수정은 보여 주지 않는다. Live를 향후 검증해 허용해도 7:00을 hard stop으로 삼고 총 8분을 넘기지 않는다.

Fallback: READY — 기본 발표는 `production/ACT_0.pptx` S05와 `production/preview/act0/S05.png`의 정적 근거를 사용한다. 도식은 TRIAL-001 검증 기록을 재구성한 것이며 실제 terminal screenshot이 아니다. 현재 Live/HYBRID는 활성화하지 않는다. 향후 별도 검증 후 Live를 허용했을 때 권한, setup 또는 예상 관찰이 맞지 않으면 즉시 중단하고 “현재 환경에서는 이 과정을 확인할 수 없어, 기록된 TRIAL-001로 돌아가겠습니다.”라고 말한 뒤 S05 정적 도식으로 복귀한다. 전환은 약 15초로 예상하지만 리허설 전까지 UNVERIFIED. Windows·발표 PC·교육장 적합성은 미검증이다.

Validation Status: REVIEWED — LOCAL STATIC PATH CONFIRMED — Trial 기록, 재구성 표시, 수정 PPTX와 최종 S05 PNG를 확인함. 실제 CLI capture는 없으며 Live/HYBRID, 교육 계정/surface, Windows, room readability 및 8분 리허설은 UNVERIFIED.

## S06 — 관찰 결과와 실행 제한을 분리한다

Slide ID: S06

Working Title: 관찰 결과와 실행 제한을 분리한다

ACT / Section: ACT 0 / 0D

Allocated Time: 5 minutes

Mode Split: Case 5 minutes

Primary Message: TRIAL-001은 Crop의 추가 열을 재현·설명했지만 코드는 수정하지 않았고, 임시 디렉터리를 만들지 못한 3건의 오류는 읽기 전용 환경 제한이었다.

Opening Question: “어떤 결과가 Repository 관찰이고, 어떤 결과가 실행 환경 제한인가?”

Speaker Flow:

1. **OPEN (0:00–0:45):** 두 칸을 한 번에 보여 주되 Repository observation과 environment limitation을 서로 다른 질문으로 읽는다.
2. **SHOW (0:45–2:15):** 관찰 칸에서 실패 Test, 계약/구현 차이, 코드 미수정을 짚는다.
3. **SHOW (2:15–3:30):** 환경 칸에서 read-only sandbox가 임시 디렉터리 생성 3건을 막은 것을 짚는다.
4. **INTERPRET / TRANSFER (3:30–5:00):** 환경 오류를 Crop 또는 Repository 결함으로 분류하지 않고 “관찰 사실과 실행 조건을 나눠 본다”로 마무리한다.

Evidence / Source: TRIAL-001의 full suite 기록: 7 passing tests, 기대한 crop failure, 임시 디렉터리를 만들 수 없어 발생한 3 errors. Focused command 기록: 2 passing tests와 같은 crop failure. Working tree는 변경되지 않았다.

Claim Boundary: 세 errors는 read-only 환경의 temp-directory 제한이며 crop bug의 근거가 아니다. TRIAL-001은 코드 수정을 수행하지 않았다. Trial 범위 밖의 테스트 결과, 제품 동작 또는 반복성을 추론하지 않는다.

Beginner Explanation: 기능의 관찰 결과와 실행 환경의 제한을 서로 다른 원인으로 적는다.

Advanced Insight: 실제 결함 징후, 권한·환경 오류, 미측정 사항을 분류해 후속 판단이 잘못된 원인에 고정되지 않게 한다.

C++ Vision Bridge: N/A.

Demo Operation: DEMO-01 / WHAT HAPPENED. `production/ACT_0.pptx` S06 또는 `production/preview/act0/S06.png`로 관찰과 환경 제한을 정적으로 설명한다. 0:00–0:45 두 frame, 0:45–2:15 Repository observation, 2:15–3:30 environment limitation, 3:30–5:00 원인 경계와 S07 전이를 운영한다. 실행·새 테스트는 하지 않는다. Observation과 Environment limitation은 서로 다른 frame과 label로 유지한다.

Audience Interaction: 질문은 결과 해석을 위한 Case cue다. 응답을 받거나 환경 오류를 해결하게 하지 않는다.

Transition: “Context를 찾는 주체가 바뀌면 무엇이 달라질까요?”라는 질문으로 S07에 연결한다.

Time Management: Repo observation과 environment limitation에 시간을 나눠 쓴다. 원인 경계를 줄여 말하더라도 3 errors를 crop 결함으로 부르지 않는다.

Fallback: READY — 기본 발표는 `production/ACT_0.pptx` S06과 `production/preview/act0/S06.png`의 정적 화면을 사용한다. 화면이 안 보이면 TRIAL-001의 기록된 숫자와 Repository observation / environment limitation 두 범주만 말로 설명하고 새 결과를 보태지 않는다. S05에서 복귀한 경우 약 15초 뒤 S06으로 이어가며, 5분 Case time과 다음 Slide handoff를 지킨다. 전환 시간은 리허설 전까지 UNVERIFIED. Windows와 room visibility는 UNVERIFIED.

Validation Status: REVIEWED — LOCAL STATIC PATH CONFIRMED — 수정 PPTX와 최종 한글 표시 S06 PNG를 확인함. 5분 운영 리허설, Windows PowerPoint 및 room readability는 UNVERIFIED.

## S07 — 코드를 AI에게 가져가는 대신 AI를 Repository로 데려간다

Slide ID: S07

Working Title: 코드를 AI에게 가져가는 대신 AI를 Repository로 데려간다

ACT / Section: ACT 0 / 0E

Allocated Time: 3 minutes

Mode Split: Lecture 3 minutes

Primary Message: Repository 조사는 개발자가 코드를 일일이 전달하는 대신 Agent가 사용 가능한 Context를 찾도록 할 수 있다.

Opening Question: “Context 수집의 일부를 누가 맡을 수 있는가?”

Speaker Flow:

1. **CALL BACK (0:00–0:45):** S02의 copy-code-to-chat 흐름을 짧게 되짚는다.
2. **TRANSFER (0:45–2:00):** 분리된 Teaching Model에서 `Bring code to AI` → `Bring AI to repository`로 시선을 옮긴다. 역할 변화는 Context를 찾는 주체에 한정한다.
3. **C++ INSET / TRANSITION (2:00–3:00):** 별도 C++ inset에 large repository, modules, build config, tests, contracts를 놓고 Repository 접근과 Task 목표가 다름을 S08로 넘긴다.

Evidence / Source: DEMO-01 / TRIAL-001 단일 CLI 관찰; BEAT-003, CLM-0002, CLM-0009. Product observation과 TEACHING_MODEL은 별도 영역으로 둔다.

Claim Boundary: 이 관찰은 CLI 한 번에 한정되며 제품의 보편적 성능·반복성 주장이 아니다. Repository 접근이 Task 의도나 성공을 자동으로 정한다는 뜻이 아니다.

Beginner Explanation: 관련 코드를 모두 복사하기보다 Repository 조사를 요청할 수 있는 가능성을 본다.

Advanced Insight: Context 수집 책임의 일부와 Task 목표·판단 책임을 분리한다.

C++ Vision Bridge: CONTEXTUAL inset — large repository / modules / build config / tests / contracts. 도구나 hardware 목록으로 확장하지 않는다.

Demo Operation: DEMO-01 bounded callback. 실제 Product UI가 아니라 Trial record에서 요약한 `OBSERVED PRODUCT` inset을 사용하고 Teaching Model과 합치지 않는다.

Audience Interaction: 별도 질의 없음. 청중이 Mental Shift를 비교해 볼 수 있도록 잠시 시선을 둔다.

Transition: “Repository 접근과 Task 의도는 같은가?”라고 물으며 S08에 간다.

Time Management: Model, Evidence inset, C++ bridge를 각자 한 영역에 둔다. Trial 세부를 다시 설명하지 않는다.

Fallback: Trial record를 표시할 수 없으면 Mental Shift만 Teaching Model로 설명한다. 제품 전반의 사실처럼 말하지 않는다.

Validation Status: DRAFT — Trial과 Teaching Model의 분리, T04-B first implementation 및 C++ inset 확인; projection/target display 미검증.

## S08 — Repository 접근과 Task 의도는 별개다

Slide ID: S08

Working Title: Repository 접근과 Task 의도는 별개다

ACT / Section: ACT 0 / 0E

Allocated Time: 2 minutes

Mode Split: Lecture 2 minutes

Primary Message: Repository 탐색은 Context 수집에 도움을 줄 수 있지만, Task의 목표와 완료 조건까지 대신 정하지 않는다.

Opening Question: “Repository를 볼 수 있으면 원하는 작업도 알게 되는가?”

Speaker Flow:

1. **OPEN (0:00–0:30):** Repository access와 Task intent를 각각의 영역으로 보여 준다.
2. **EXPLAIN (0:30–1:30):** 접근 가능한 코드·정보가 목표 선택을 대신하지 않는다는 구분을 말한다.
3. **TRANSFER (1:30–2:00):** “무엇을 원하는지 전달하는 문제는 남아 있다”라고 하고 답을 청중에게 넘긴다.

Evidence / Source: BEAT-003 next friction, DEMO-01 callback, TRIAL-001; CLM-0002, CLM-0009. TEACHING_MODEL.

Claim Boundary: Mental Model이며 모든 제품·환경의 기능 설명이 아니다. Prompt 구조나 완료 조건의 구체 항목은 ACT 1에서 미리 설명하지 않는다.

Beginner Explanation: Agent가 Repository를 읽을 수 있어도 원하는 결과는 개발자가 말해야 한다.

Advanced Insight: Context access와 objective/acceptance responsibility는 별도 경계다.

C++ Vision Bridge: N/A.

Demo Operation: N/A — DEMO-01 성공 뒤 남는 문제를 설명한다.

Audience Interaction: Opening question은 수사 질문이다. 짧은 강의 시간에 답변을 요구하지 않는다.

Transition: “그렇다면 Repository를 보면 내가 원하는 것까지 알까요?”라고 S09의 논의 질문을 연다.

Time Management: Access와 Intent 두 축만 설명하고 ACT 1의 구조나 목록은 소개하지 않는다.

Fallback: 화면 도식이 보이지 않으면 두 책임의 차이를 말로 한 번 설명하고 S09로 간다.

Validation Status: DRAFT — Map 역할, T02-A first implementation, claim boundary 확인; 실제 발표 속도 미검증.

## S09 — Repository를 보면 내가 원하는 것까지 알까?

Slide ID: S09

Working Title: Repository를 보면 내가 원하는 것까지 알까?

ACT / Section: ACT 0 / 0F

Allocated Time: 6 minutes

Mode Split: Transition 3 minutes + Q&A 3 minutes

Primary Message: Repository를 볼 수 있다는 사실만으로 Task의 의도가 정해지지는 않는다.

Opening Question: “Repository를 볼 수 있으면 내가 원하는 것까지 알 수 있을까?”

Speaker Flow:

1. **DISCUSS / TRANSITION (0:00–3:00):** 질문을 남기고 Repository access가 제공하는 것과 아직 모르는 것을 떠올릴 시간을 준다. 대답을 미리 보여주지 않는다.
2. **Q&A (3:00–6:00):** 질문을 받는다. 질문이 없으면 같은 질문을 한 번 더 남기고 시간 후 ACT 1의 Prompt 문제로 handoff한다.

Evidence / Source: BEAT-003 → BEAT-004, TRANSITIONS.md의 승인된 ACT handoff, DEMO-01 callback, CLM-0002, CLM-0009. TEACHING_MODEL.

Claim Boundary: 이 장은 다음 문제를 여는 Teaching Model이다. ACT 1의 다섯 Task Specification 책임이나 구체적 해답을 공개하지 않는다.

Beginner Explanation: Repository 접근이 생긴 뒤에도 원하는 결과를 설명할 문제는 남아 있다.

Advanced Insight: 관찰 가능한 Context와 개발자가 정해야 할 의도를 구분하며 다음 Story 단계로 이동한다.

C++ Vision Bridge: N/A.

Demo Operation: N/A — 신규 Demo 또는 제품 기능 설명은 없다.

Audience Interaction: Q&A 3분은 선택적 질문 시간이다. 답변이나 공유를 강제하지 않는다. 침묵은 정상적인 결과로 둔다.

Transition: `Chatbot → Prompt`로 다음 ACT에 handoff한다. ACT 1의 내부 구조는 소개하지 않는다.

Time Management: Slide Map의 순서를 유지해 Transition 3분 뒤 Q&A 3분을 둔다. Q&A를 늘려 ACT 전체 시간을 옮기지 않는다.

Fallback: 질문이 없으면 Opening Question을 그대로 남기고 종료 cue로 ACT 1에 넘긴다. 강사가 질문에 답을 보태지 않는다.

Validation Status: DRAFT — 6분 / Mode split과 T01-B first implementation 확인; Q&A 운영·발표 시간·교육장 환경은 미검증.
