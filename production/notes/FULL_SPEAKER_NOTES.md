# Full Deck Speaker Notes

Status: INTEGRATED — 80 slide records copied in S01–S80 order from the six approved ACT Notes files. Slide content and claim boundaries were not rewritten.

Authority: `plan/SLIDE_MAP.md` and `plan/SPEAKER_NOTES_FREEZE.md`; per-slide source records remain the approved ACT Notes.

Each slide retains the 19-field Notes schema. ACT-specific PPTX Notes pages and this Markdown file are validated against the same Slide IDs and content.

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

## S10 — Task에는 무엇이 아직 정해지지 않았을까?

Slide ID: S10

Working Title: Task에는 무엇이 아직 정해지지 않았을까?

ACT / Section: ACT 1 / 1A

Allocated Time: 7 minutes

Mode Split: Case 7 minutes

Primary Message: 코드가 보이더라도 무엇을 바꾸고, 무엇을 보존하며, 언제 끝났다고 판단할지는 요청에 명시되어야 한다.

Opening Question: “같은 Repository를 보더라도 Agent가 원하는 결과까지 자동으로 알 수 있을까?”

Speaker Flow:

1. (0:00–2:00) S09의 열린 질문을 회수하고 Repository 접근과 Task 의도를 분리한다.
2. (2:00–5:00) `filter 성능 개선` 요청 옆의 change / preserve / done 빈칸을 보여 준다.
3. (5:00–7:00) 무엇이 정해지지 않았는지 묻고 S11로 넘긴다. 실제 제품 실패 사례라고 부르지 않는다.

Evidence / Source: BEAT-004, TRIAL-001, CLM-0002. TEACHING_MODEL / CONCEPTUAL. TRIAL-001의 실제 실패 사례가 아니다.

Claim Boundary: 접근 가능한 Repository가 Task의 목표·변경 범위·보존 조건·완료 증거를 대신 알려주지는 않는다는 과정의 모델이다. Codex 실패나 Trial 결과로 말하지 않는다.

Beginner Explanation: Agent에게 코드가 보인다는 사실과 내가 원하는 변경을 설명했다는 사실은 다르다. 바꿀 것과 끝의 기준을 적어야 한다.

Advanced Insight: Task goal, constraints, and verification remain separate from repository access. Do not infer deterministic agent behavior from the conceptual example.

C++ Vision Bridge: N/A.

Demo Operation: N/A.

Audience Interaction: Case 질문을 따라가며 무엇이 비어 있는지 생각하게 한다. 공개 답변이나 실습은 요구하지 않는다.

Transition: 어떤 Task 정보가 빠졌는지 약한 요청 비교로 확인한다.

Time Management: 7분을 질문과 세 개의 미정 경계에 쓴다. 새 Prompt 체크리스트나 해결책을 미리 소개하지 않는다.

Fallback: READY — 정적 슬라이드 `production/ACT_1.pptx` S10 또는 `production/preview/act1/S10.png` 사용. 응답이 없어도 7분 후 S11로 이동한다.

Validation Status: REVIEWED — Source/claim alignment and local Mac Keynote render checked. Windows PowerPoint, target PC fonts, room projection and timed rehearsal remain unverified.

## S11 — 요청만으로는 의도가 보이지 않는다

Slide ID: S11

Working Title: 요청만으로는 의도가 보이지 않는다

ACT / Section: ACT 1 / 1B

Allocated Time: 4 minutes

Mode Split: Case 4 minutes

Primary Message: Repository를 볼 수 있어도 바꿀 범위와 완료 조건까지 알 수 있는 것은 아니다.

Opening Question: “Agent 입장에서 무엇을 결정해야 할까?”

Speaker Flow:

1. (0:00–0:45) 짧은 요청을 그대로 읽는다.
2. (0:45–3:00) Goal detail, Preserve, Scope, Evidence, Done의 빈 칸을 차례로 보여 준다.
3. (3:00–4:00) Agent에게 남은 결정을 묻고 Slide 12로 이동한다.

Evidence / Source: BEAT-004, CLM-0002. TEACHING_MODEL / CONCEPTUAL. 실제 Trial에서 사용한 약한 Prompt가 아니다.

Claim Boundary: `crop test 고쳐줘`는 수업용으로 구성한 예시다. 이 요청이 특정 Agent 실패를 일으켰다는 주장을 하지 않는다.

Beginner Explanation: 짧은 요청을 비난하지 않고, 그 안에 남아 있는 질문을 찾아본다.

Advanced Insight: Missing constraints are developer decisions that cannot be derived from repository access alone.

C++ Vision Bridge: N/A.

Demo Operation: N/A.

Audience Interaction: 각 빈 라벨을 잠깐 보여 주고 청중이 가능한 답을 생각하게 한다. 응답을 강요하지 않는다.

Transition: Slide 12에서 같은 요청을 개발자 결정 관점으로 해부한다.

Time Management: 4분 안에 한 요청과 다섯 빈칸만 다룬다. 빈칸의 정답이나 해결책은 제시하지 않는다.

Fallback: READY — 정적 슬라이드 `production/ACT_1.pptx` S11 또는 `production/preview/act1/S11.png` 사용. 청중 응답 없이 진행한다.

Validation Status: REVIEWED — Source/claim alignment and local Mac Keynote render checked. Windows PowerPoint, target PC fonts, room projection and timed rehearsal remain unverified.

## S12 — 개발자가 정해야 하는 경계

Slide ID: S12

Working Title: 개발자가 정해야 하는 경계

ACT / Section: ACT 1 / 1B

Allocated Time: 4 minutes

Mode Split: Case 3 minutes + Reflection 1 minute

Primary Message: Prompt의 실용적 가치는 문장 장식보다 Task ambiguity reduction에 있다.

Opening Question: “무엇을 바꾸고, 무엇을 유지하며, 어디까지 바꿔도 되는가?”

Speaker Flow:

1. (0:00–1:00) change와 preserve 질문을 먼저 둔다.
2. (1:00–3:00) scope, evidence, done을 이어서 보여 준다.
3. (3:00–4:00) 각자 익숙한 요청 하나를 떠올리는 조용한 Reflection으로 마친다.

Evidence / Source: BEAT-004, CLM-0002. TEACHING_MODEL / CONCEPTUAL. 특정 요청이 특정 실패를 반드시 만든다고 하지 않는다.

Claim Boundary: 다섯 질문은 수업용 질문 프레임이다. 특정한 단일 답이나 제품 기능으로 소개하지 않는다.

Beginner Explanation: 요청을 보내기 전에 바꿀 것, 지킬 것, 끝을 어떻게 볼지 묻는다.

Advanced Insight: Clarify scope, preserved contracts, acceptable change surface, and evidence before delegating.

C++ Vision Bridge: N/A.

Demo Operation: N/A.

Audience Interaction: 마지막 1분은 비공개 Reflection이다. 말하기, 노트북, Prompt 작성은 요구하지 않는다.

Transition: Slide 13에서 질문들을 실용적인 Task Specification 구조로 묶는다.

Time Management: Case 3분 후 Reflection 1분을 분리한다. 답을 제공하거나 공개 응답을 받지 않는다.

Fallback: READY — 정적 슬라이드 `production/ACT_1.pptx` S12 또는 `production/preview/act1/S12.png` 사용. 침묵은 정상 진행으로 본다.

Validation Status: REVIEWED — Source/claim alignment and local Mac Keynote render checked. Windows PowerPoint, target PC fonts, room projection and timed rehearsal remain unverified.

## S13 — Task Specification의 다섯 책임

Slide ID: S13

Working Title: Task Specification의 다섯 책임

ACT / Section: ACT 1 / 1C

Allocated Time: 4 minutes

Mode Split: Lecture 4 minutes

Primary Message: Goal, Context, Constraints, Process, Verification은 작업을 구체화하는 교육용 틀이다.

Opening Question: “Agent가 작업을 검토 가능하게 수행하려면 무엇을 알아야 할까?”

Speaker Flow:

1. (0:00–0:45) Task Specification을 과정의 모델로 소개한다.
2. (0:45–3:15) 다섯 책임을 하나의 구조 안에서 연결해 설명한다.
3. (3:15–4:00) 각각이 어떤 미정 질문을 줄였는지 요약하고 S14로 간다.

Evidence / Source: BEAT-005, CLM-0029, OQ-001, OQ-007. TEACHING_MODEL / CONCEPTUAL.

Claim Boundary: 다섯 항목은 과정에서 쓰는 Task Specification 모델이지 공식 OpenAI taxonomy나 universal law가 아니다.

Beginner Explanation: 요청에는 목표, 필요한 상황, 지켜야 할 경계, 작업 흐름, 확인 방법이 들어갈 수 있다.

Advanced Insight: Separate task intent from retained project facts, and identify which judgment remains with the developer.

C++ Vision Bridge: N/A.

Demo Operation: N/A.

Audience Interaction: 설명 중간에 다섯 책임이 줄이는 불확실성을 확인한다. 청중에게 작성 실습을 시키지 않는다.

Transition: Slide 14에서 다섯 책임을 짧은 Before / After에 적용한다.

Time Management: 네 분 동안 각 항목을 한 문장으로 설명한다. 별도 Best Practice 목록이나 제품 기능으로 확장하지 않는다.

Fallback: READY — 정적 슬라이드 `production/ACT_1.pptx` S13 또는 `production/preview/act1/S13.png` 사용.

Validation Status: REVIEWED — Source/claim alignment and local Mac Keynote render checked. Windows PowerPoint, target PC fonts, room projection and timed rehearsal remain unverified.

## S14 — 더 긴 Prompt보다 분명한 경계

Slide ID: S14

Working Title: 더 긴 Prompt보다 분명한 경계

ACT / Section: ACT 1 / 1C + 1F

Allocated Time: 9 minutes

Mode Split: Lecture 6 minutes + Case 3 minutes

Primary Message: 유용성은 Prompt의 길이보다 Goal과 제약, 과정, 검증 경계가 분명한 데서 나온다.

Opening Question: “두 요청에서 실제로 달라진 정보는 무엇인가?”

Speaker Flow:

1. (0:00–2:00) Before 예시를 읽는다.
2. (2:00–5:00) After의 Goal/Context, Constraints, Process, Verification을 같은 축으로 비교한다.
3. (5:00–6:00) Supporting C++ inset을 연결한다.
4. (6:00–9:00) Case 질문으로 어떤 경계가 달라졌는지 생각하고, 이 비교가 실험 결과가 아님을 유지한다.

Evidence / Source: BEAT-005, TRIAL-002, CLM-0029, OQ-001, OQ-007. TEACHING_MODEL / CONCEPTUAL.

Claim Boundary: Before/After는 설명을 위한 개념 예시이며 Trial-002가 약한 Prompt와 구조화 Prompt의 우월성을 비교 검증했다는 뜻이 아니다.

Beginner Explanation: 긴 문장을 쓰는 것보다 바꿀 결과와 지킬 조건, 확인 방법을 드러내는 것이 도움이 되는 질문 틀이다.

Advanced Insight: Make the allowed change surface and completion evidence reviewable; do not claim a causal performance advantage.

C++ Vision Bridge: Supporting inset: Release build, public API/ABI, target hardware constraint, and appropriate tests are analogous boundaries. No concrete Windows, shell, IDE, or hardware procedure is asserted.

Demo Operation: N/A — the comparison is conceptual and is not the exact Trial-002 Prompt.

Audience Interaction: 마지막 Case 3분에는 두 요청에서 새로 명시된 책임을 마음속으로 비교한다. 발표 응답은 요구하지 않는다.

Transition: “이 요청을 받은 Agent는 수정부터 시작할까?”라는 질문으로 Trial 관찰에 들어간다.

Time Management: After는 네 줄의 비교 축으로 한정한다. 전체 Trial Prompt나 코드 지시를 화면에 복사하지 않는다. 시간이 부족하면 C++ inset을 생략한다.

Fallback: READY — 정적 비교 슬라이드 `production/ACT_1.pptx` S14 또는 `production/preview/act1/S14.png` 사용. Trial 결과로 대체하지 않는다.

Validation Status: REVIEWED — Source/claim alignment and local Mac Keynote render checked. Windows PowerPoint, target PC fonts, room projection and timed rehearsal remain unverified.

## S15 — 먼저 무엇을 하는지 보자

Slide ID: S15

Working Title: 먼저 무엇을 하는지 보자

ACT / Section: ACT 1 / 1D

Allocated Time: 2 minutes

Mode Split: Lecture 2 minutes

Primary Message: 이 한 번의 관찰에서는 재현, 조사, 계획, 수정, 검증 순서를 확인할 수 있다.

Opening Question: “이 요청을 받은 Agent가 수정부터 시작할까?”

Speaker Flow:

1. (0:00–0:35) “수정부터 시작할까?”를 제시한다.
2. (0:35–1:35) 다섯 단계를 watch sequence로 가리킨다.
3. (1:35–2:00) 결과 패널을 비워 둔 채 S16으로 이동한다.

Evidence / Source: BEAT-006, TRIAL-002, INV-MATURITY-011. OBSERVED_PRODUCT; one historical Codex CLI run only.

Claim Boundary: TRIAL-002는 2026-09-28 macOS Codex CLI 0.154.0의 단일 실행 기록이다. Desktop, 계정, 반복성 또는 다른 모델을 증명하지 않는다.

Beginner Explanation: 코드 변경 전 어떤 행동을 먼저 살펴볼지 정하면 Demo를 따라가기 쉽다.

Advanced Insight: Keep requested workflow separate from the events evidenced in the recorded run.

C++ Vision Bridge: N/A.

Demo Operation: DEMO-05 / CAPTURED RECORD-BASED WATCH. 2분 Lecture 동안 실제 실행을 재생하지 않는다. `reproduce → investigate → plan → edit → verify` 순서를 WATCH FOR로 제시하고 결과는 비워 둔다. Trial source: `plan/DEMO_MATRIX.md`, TRIAL-002; no current Desktop surface is shown.

Audience Interaction: 관찰 순서를 마음속으로 따라오게 한다. 응답이나 실습을 요구하지 않는다.

Transition: Slide 16에서 조사와 변경의 핵심 장면을 보여준다.

Time Management: 2분 안에 관찰 기준만 설명한다. Trial 결과를 앞당겨 보여 주거나 현재 제품 UI를 재현하지 않는다.

Fallback: READY — 정적 WATCH 슬라이드 `production/ACT_1.pptx` S15 또는 `production/preview/act1/S15.png` 사용. 라이브 실행은 이 단계에서 하지 않는다.

Validation Status: REVIEWED — Source/claim alignment and local Mac Keynote render checked. Windows PowerPoint, target PC fonts, room projection and timed rehearsal remain unverified.

## S16 — 조사에서 한 줄 변경까지

Slide ID: S16

Working Title: 조사에서 한 줄 변경까지

ACT / Section: ACT 1 / 1D

Allocated Time: 4 minutes

Mode Split: Demo 4 minutes (CAPTURED)

Primary Message: failing test와 호출 경로를 확인한 뒤, half-open 범위 계약을 보존하는 최소 변경을 했다.

Opening Question: “수정 전에 어떤 근거를 확인했는가?”

Speaker Flow:

1. (0:00–1:00) 실패 Test와 CLI → pipeline → crop 경로를 짚는다.
2. (1:00–2:00) half-open 계약 `[x_start, x_end)`를 읽는다.
3. (2:00–3:15) 코드 변경 전 계획을 알린 기록을 말한다.
4. (3:15–4:00) 한 줄 diff를 보여 주고 실행을 재현하지 않은 채 S17로 넘긴다.

Evidence / Source: BEAT-006, TRIAL-002, INV-MATURITY-011. OBSERVED_PRODUCT, one recorded CLI run.

Claim Boundary: 실제 변경은 `src/graypipe/transform.py`의 crop slice 한 줄이다. 이 기록은 한 번의 Codex CLI 실행에 한정되며 Prompt 우월성, Desktop 동작 또는 일반 성공률을 증명하지 않는다.

Beginner Explanation: 실패한 Test와 기대 계약을 먼저 맞춘 뒤 꼭 필요한 한 줄만 바꿨다.

Advanced Insight: The code change matches the half-open public contract and is limited to the recorded diff; the plan checkpoint preceded editing.

C++ Vision Bridge: N/A.

Demo Operation: DEMO-05 / CAPTURED historical evidence. Use the reconstructed diagram in this slide, not a terminal screenshot. The visible label is shortened to “crop boundary test”; source test ID: `test_crop_excludes_end_coordinate`. Show failing test → CLI/pipeline/crop path → `[x_start, x_end)` contract → recorded pre-edit plan checkpoint → one-line diff. Do not rerun Codex or modify Demo Repository. Source: TRIAL-002 record and STATE-00-FIXED code.

Audience Interaction: 변경 전에 확인한 근거를 청중이 화면 순서대로 따라오게 한다. 참가자의 코드 검토나 답변을 요구하지 않는다.

Transition: Slide 17에서 변경 결과를 어떤 확인으로 뒷받침했는지 본다.

Time Management: 4분 Demo 구간 안에서 관찰과 변경을 요약한다. 전체 로그와 파일을 보여 주지 않고, 다음 장의 검증 시간을 침범하지 않는다.

Fallback: READY — 정적 PPTX S16 또는 `production/preview/act1/S16.png` 사용. 시각 도식은 기록에서 재구성한 자료이며 원본 화면 캡처가 아니다. 실행 실패 상황은 없다: Live를 하지 않는다.

Validation Status: REVIEWED — Source/claim alignment and local Mac Keynote render checked. Windows PowerPoint, target PC fonts, room projection and timed rehearsal remain unverified.

## S17 — 변경 결과와 확인 증거

Slide ID: S17

Working Title: 변경 결과와 확인 증거

ACT / Section: ACT 1 / 1D

Allocated Time: 4 minutes

Mode Split: Demo 4 minutes (CAPTURED)

Primary Message: 이 사례의 결과는 생성된 코드뿐 아니라 명시된 검증과 diff 확인을 거친 변경이다.

Opening Question: “생성된 변경을 어떤 확인이 뒷받침하는가?”

Speaker Flow:

1. (0:00–0:45) trial scope를 한 번 더 고정한다.
2. (0:45–2:45) 다섯 Check와 지원하는 범위를 차례로 읽는다.
3. (2:45–3:30) benchmark는 수행하지 않았음을 밝힌다.
4. (3:30–4:00) “이제 생성과 완료를 어떻게 나눌까?”로 넘긴다.

Evidence / Source: BEAT-007, INV-VERIFY-001, TRIAL-002, CLM-0029, CLM-0027. OBSERVED_PRODUCT, one Codex CLI run.

Claim Boundary: Focused test 3/3, full suite 11/11, CLI smoke PASS, diff 1 file / 1 line, and `git diff --check` PASS are the recorded results of TRIAL-002. They do not establish every input, platform, or future product run.

Beginner Explanation: 완료라고 말할 때 코드와 함께 어떤 확인이 있었는지 보여 준다.

Advanced Insight: Each check supports a bounded claim: targeted behavior, existing suite coverage, one sample CLI path, and change scope. No benchmark was run.

C++ Vision Bridge: N/A.

Demo Operation: DEMO-05 / CAPTURED result summary from the TRIAL-002 record. Read the five checks and their scopes. No actual terminal screenshot or new execution is used. Keep Benchmark marked NOT RUN; do not infer performance.

Audience Interaction: 각 Check가 무엇을 뒷받침하는지 읽게 한다. 청중에게 테스트 실행을 요구하지 않는다.

Transition: 생성 자체와 완료 판단을 구분하는 Slide 18로 간다.

Time Management: 5개 항목에 각 한 문장만 사용한다. 모델·제품의 일반 우월성이나 performance를 말하지 않는다.

Fallback: READY — 정적 PPTX S17 또는 `production/preview/act1/S17.png` 사용. 수치는 TRIAL-002 기록에 한정한다; 새로운 pass 수치를 추가하지 않는다.

Validation Status: REVIEWED — Source/claim alignment and local Mac Keynote render checked. Windows PowerPoint, target PC fonts, room projection and timed rehearsal remain unverified.

## S18 — Generated ≠ Done

Slide ID: S18

Working Title: Generated ≠ Done

ACT / Section: ACT 1 / 1E

Allocated Time: 3 minutes

Mode Split: Lecture 3 minutes

Primary Message: Task는 결과뿐 아니라 적절한 검증과 review를 포함해야 한다.

Opening Question: “어떤 Check가 어떤 Claim을 뒷받침하는가?”

Speaker Flow:

1. (0:00–0:45) `Generated`와 `Done?` 사이의 질문을 연다.
2. (0:45–1:30) TRIAL-002의 결과 기록을 관찰 카드에서 짚는다.
3. (1:30–2:30) Test, Smoke, Benchmark if needed, Diff review를 Teaching Model로 제시한다.
4. (2:30–3:00) Slide 19로 넘긴다.

Evidence / Source: BEAT-007, INV-VERIFY-001, TRIAL-002, CLM-0029, CLM-0027. OBSERVED_PRODUCT and separate TEACHING_MODEL.

Claim Boundary: TRIAL-002 observations are shown in a solid frame; the check-to-claim relationship is a course model. A benchmark is conditional and was not run in TRIAL-002.

Beginner Explanation: 코드가 생성됐다는 사실은 완료를 판단하는 한 가지 정보일 뿐이다.

Advanced Insight: Choose checks from the task’s risk and the exact claim being made; do not demand every check for every task.

C++ Vision Bridge: Slide 19 contains the approved Supporting C++ transfer inset. Do not duplicate it here.

Demo Operation: TRIAL-002 verification callback only; outside DEMO-05’s 8-minute slot. A small observed-evidence inset is separate from the conceptual Teaching Model. No new Demo execution.

Audience Interaction: 별도 Q&A 시간은 배정되지 않았다. 청중에게 생각할 질문을 주고 다음 장에서 범위를 보여 준다.

Transition: Slide 19에서 각 Check가 뒷받침하는 범위를 비교한다.

Time Management: 세 분 안에 기록 사실과 Teaching Model을 분리한다. S17의 다섯 수치를 다시 읽지 않는다.

Fallback: READY — 정적 PPTX S18 또는 `production/preview/act1/S18.png` 사용. Observed Product와 course model frame의 구분을 유지한다.

Validation Status: REVIEWED — Source/claim alignment and local Mac Keynote render checked. Windows PowerPoint, target PC fonts, room projection and timed rehearsal remain unverified.

## S19 — Check마다 확인하는 범위

Slide ID: S19

Working Title: Check마다 확인하는 범위

ACT / Section: ACT 1 / 1E + 1F

Allocated Time: 5 minutes

Mode Split: Lecture 4 minutes + Reflection 1 minute

Primary Message: Check 하나가 모든 정확성을 증명하지는 않는다.

Opening Question: “이 Check로 무엇까지 말할 수 있는가?”

Speaker Flow:

1. (0:00–1:00) 왼쪽 Trial 카드에서 실제 수행한 Check를 보인다.
2. (1:00–3:00) 오른쪽 Teaching Model의 다섯 check-to-claim 대응을 설명한다.
3. (3:00–4:00) C++ Vision inset을 같은 원리의 transfer로 짚는다.
4. (4:00–5:00) 개인 Reflection으로 마친다.

Evidence / Source: BEAT-007, INV-VERIFY-001, TRIAL-002, CLM-0029, CLM-0027. Actual checks are separate from the TEACHING_MODEL mapping.

Claim Boundary: Focused/full tests, CLI smoke, and diff review are actual TRIAL-002 checks. The mapping is a course model; benchmark was not run. No single check proves all correctness.

Beginner Explanation: Focused test는 바뀐 동작을, 전체 Test는 기존 suite의 범위를, smoke는 sample 실행 경로를 확인한다.

Advanced Insight: For C++ projects, match Release build, API/ABI checks, regression tests, and measurement to the claim and risk. These are illustrative engineering patterns, not this Demo repository’s tooling.

C++ Vision Bridge: Supporting Bridge: `build claim → Release build`; `compatibility claim → API / ABI review`; `performance claim → benchmark with named workload`. No Windows, shell, IDE, or hardware setup is asserted.

Demo Operation: TRIAL-002 evidence callback outside the 8-minute Demo slot. Keep the observed Trial card solid and the generic check-to-claim map separate. The benchmark row explicitly says it was not run in the Trial.

Audience Interaction: 마지막 1분은 각자가 익숙한 Check와 그 Check가 뒷받침하는 Claim을 조용히 생각한다. 결과 발표는 요구하지 않는다.

Transition: 다음 작업에도 반복할 정보를 청중이 구분하도록 질문을 연다.

Time Management: Lecture 4분과 Reflection 1분을 분리한다. Advanced C++ examples are optional under time pressure; keep the scope labels.

Fallback: READY — 정적 PPTX S19 또는 `production/preview/act1/S19.png` 사용. Trial check 수치와 일반 model frame을 합치지 않는다.

Validation Status: REVIEWED — Source/claim alignment and local Mac Keynote render checked. Windows PowerPoint, target PC fonts, room projection and timed rehearsal remain unverified.

## S20 — 이번 Task인가, 계속 유지할 Project 정보인가?

Slide ID: S20

Working Title: 이번 Task인가, 계속 유지할 Project 정보인가?

ACT / Section: ACT 1 / 1G

Allocated Time: 3 minutes

Mode Split: Reflection 1 minute + Q&A 2 minutes

Primary Message: 두 종류의 정보를 구분할 필요가 있음을 먼저 인식한다.

Opening Question: “매번 Prompt에 반복해서 쓰는 내용 중 이번 Task에만 필요한 것은 무엇이고, Project가 계속 유지해야 할 것은 무엇인가?”

Speaker Flow:

1. (0:00–1:00) 제목 질문을 제시하고 두 Bucket을 비워 둔다.
2. (1:00–3:00) 선택적인 Q&A를 받되 응답이 없어도 진행한다.
3. (3:00) S21에서 예시 후보를 확인하겠다고 전환한다.

Evidence / Source: BEAT-007 → BEAT-008 handoff, CLM-0029, CLM-0027, CLM-0003, CLM-0005. TEACHING_MODEL.

Claim Boundary: 두 Bucket은 Reflection을 위한 과정의 모델이다. 이 장에서는 정답, 제품 기능, AGENTS.md 또는 완전한 분류를 제시하지 않는다.

Beginner Explanation: 이번 요청에만 필요한 말과 여러 번 반복할 수 있는 규칙이 다를 수 있음을 생각한다.

Advanced Insight: Consider information lifetime and scope without deciding the storage mechanism yet.

C++ Vision Bridge: N/A.

Demo Operation: N/A.

Audience Interaction: 순서: Reflection 1분 후 Q&A 2분. Reflection은 사적 생각 시간이고 공유는 자발적이다. 응답이 없으면 질문을 한 번 더 읽고 진행한다.

Transition: Slide 21에서 Reflection/Discussion을 회수하고 “왜 Project 설명을 매번 다시 쓰는가?”라는 ACT 2 질문으로 넘긴다.

Time Management: Reflection 1분, Q&A 2분을 보존한다. 긴 토론이나 개인 업무 공개를 요구하지 않는다.

Fallback: READY — 정적 질문 슬라이드 `production/ACT_1.pptx` S20 또는 `production/preview/act1/S20.png` 사용. 공유 응답이 없어도 다음으로 진행한다.

Validation Status: REVIEWED — Source/claim alignment and local Mac Keynote render checked. Windows PowerPoint, target PC fonts, room projection and timed rehearsal remain unverified.

## S21 — 반복하는 설명을 두 범주로 나누기

Slide ID: S21

Working Title: 반복하는 설명을 두 범주로 나누기

ACT / Section: ACT 1 / 1G

Allocated Time: 6 minutes

Mode Split: Reflection 1 minute + Transition 3 minutes + Q&A 2 minutes

Primary Message: Task 정보와 Project 정보는 수명과 적용 범위가 다르다.

Opening Question: “이번 Task에만 필요한 정보와 Project가 계속 유지할 정보는 무엇일까?”

Speaker Flow:

1. (0:00–1:00) S20의 두 빈 Bucket을 회수한다.
2. (1:00–2:00) 제시된 항목을 후보 예시로 읽는다.
3. (2:00–5:00) 정보의 수명·범위 차이와 “왜 반복하는가?”라는 다음 문제를 연결한다.
4. (5:00–6:00) 선택적인 Q&A를 받고 ACT 2로 이동한다.

Evidence / Source: BEAT-007, BEAT-008, TRANS-003, CLM-0029, CLM-0027, CLM-0003, CLM-0005. TEACHING_MODEL / CONCEPTUAL.

Claim Boundary: 항목은 작업 경계와 유지 기간을 생각하게 하는 후보 예시다. 유일한 정답, classification test, product mechanism으로 말하지 않는다. AGENTS.md는 이 Slide에서 답으로 제시하지 않는다.

Beginner Explanation: 요청 한 번에만 필요한 정보와 프로젝트가 계속 참고할 수 있는 정보를 구별해 본다.

Advanced Insight: Information reuse scope and lifetime may differ; the next ACT will examine the repeated-fact problem before introducing a mechanism.

C++ Vision Bridge: N/A.

Demo Operation: N/A.

Audience Interaction: Reflection 1분 후 map 순서대로 ACT 2 Transition 3분, Q&A 2분. 예시는 후보로만 말하고, 자발적 응답을 받되 정답 분류를 평가하지 않는다.

Transition: “그런데 Project 정보를 왜 매번 Prompt에 다시 적고 있을까?”

Time Management: Map 순서 Reflection 1 + Transition 3 + Q&A 2분을 지킨다. Project Context 해결책이나 AGENTS.md를 미리 노출하지 않는다.

Fallback: READY — 정적 비교 슬라이드 `production/ACT_1.pptx` S21 또는 `production/preview/act1/S21.png` 사용. Q&A가 없어도 마지막 Transition 질문 후 ACT 2로 간다.

Validation Status: REVIEWED — Source/claim alignment and local Mac Keynote render checked. Windows PowerPoint, target PC fonts, room projection and timed rehearsal remain unverified.

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

## S37 — 서로 다른 Performance Task, 반복되는 절차

Slide ID: S37

Working Title: 서로 다른 Performance Task, 반복되는 절차

ACT / Section: ACT 3 / 3A

Allocated Time: 5 minutes

Mode Split: Case 5 minutes

Primary Message: TRIAL-006의 `resize_nearest`와 TRIAL-007의 `normalize`처럼 서로 다른 목표에서도 유사한 performance procedure가 반복될 수 있다.

Opening Question: “Task가 달라도 왜 같은 작업 방법을 계속 쓰고 있지?”

Speaker Flow:

1. (0:00–2:00) 서로 다른 두 Task goal을 나란히 보여준다.
2. (2:00–4:00) 두 기록에 반복된 baseline, 조사, 계획, 변경, test, benchmark, 비교, review를 강조한다.
3. (4:00–5:00) 반복 관찰과 원인 귀속을 분리하고 Prompt-only attribution이 PARTIAL임을 밝힌다.

Evidence / Source: TRIAL-006 (`resize_nearest`), TRIAL-007 (`normalize`), BEAT-018/020. Codex CLI 기록 실행의 workflow 비교.

Claim Boundary: 유사한 절차가 관찰됐지만 Prompt만의 효과로 귀속하지 않는다. 개별 성능 결과는 해당 코드·입력·환경에 한정한다.

Beginner Explanation: 서로 다른 작업에서도 조사하고 확인하는 순서가 반복될 수 있다.

Advanced Insight: Task별 목표와 지속해서 재사용할 절차를 구분하고, Global Harness가 미친 영향을 고려한다.

C++ Vision Bridge: N/A.

Demo Operation: TRIAL-006/007을 요약한 정적 재구성 도식을 사용한다. 새로운 실행이나 실제 터미널 화면이라고 말하지 않는다.

Audience Interaction: 두 Task의 공통 절차를 잠시 관찰하게 한다. 공개 답변은 요구하지 않는다.

Transition: “Project 지식과 작업 절차는 각각 어떤 질문에 답할까?”

Time Management: Case 5분을 두 Task 비교, 공통 절차, attribution 한계 순으로 쓴다. 수치 설명으로 확장하지 않는다.

Fallback: READY — `production/ACT_3.pptx`의 정적 비교 도식과 `production/preview/act3/S37.png`를 사용한다.

Validation Status: REVIEWED — Source, claim scope, and local Keynote render reviewed. Windows PowerPoint, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S38 — Project 사실과 작업 절차는 다르다

Slide ID: S38

Working Title: Project 사실과 작업 절차는 다르다

ACT / Section: ACT 3 / 3A

Allocated Time: 4 minutes

Mode Split: Lecture 4 minutes

Primary Message: Project에서 일반적으로 참인 사실과 반복되는 작업 방법은 서로 다른 설계 문제다.

Opening Question: “Agent가 알아야 할 것과 따라야 할 방법은 같은가?”

Speaker Flow:

1. (0:00–1:00) “What is true?”를 Context와 연결한다.
2. (1:00–3:00) “How to work?”를 Workflow에, “What do we want now?”를 Task Prompt에 연결한다.
3. (3:00–4:00) Task 사실, Project 사실, 반복 절차가 다른 책임임을 정리하고 질문을 연다.

Evidence / Source: BEAT-019, TRIAL-006/007. TEACHING_MODEL / CONCEPTUAL.

Claim Boundary: 교육용 구분이다. 공식 제품 분류나 특정 제품 기능이라고 표현하지 않는다.

Beginner Explanation: 프로젝트 설명은 무엇이 참인지 말하고, workflow는 어떤 순서로 일할지 말한다.

Advanced Insight: Project Context를 늘리는 것만으로 반복 절차의 유지 문제가 해결되지는 않는다.

C++ Vision Bridge: N/A.

Demo Operation: N/A.

Audience Interaction: 세 질문과 항목을 조용히 따라오게 한다. 분류 실습은 요구하지 않는다.

Transition: “작업 방법도 Repository가 재사용할 수 있을까?”

Time Management: 4분 동안 세 질문의 책임만 구분한다. Harness 전체 정의는 아직 제시하지 않는다.

Fallback: READY — 정적 세 질문 도식.

Validation Status: REVIEWED — Source, claim scope, and local Keynote render reviewed. Windows PowerPoint, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S39 — Task, Context, Workflow의 역할

Slide ID: S39

Working Title: Task, Context, Workflow의 역할

ACT / Section: ACT 3 / 3B

Allocated Time: 5 minutes

Mode Split: Lecture 5 minutes

Primary Message: Task Prompt는 현재 목표, Project Context는 사실과 제약, Reusable Workflow는 특정 작업을 수행하는 방법을 담는다.

Opening Question: “현재 목표, Project 사실, 반복 절차는 어디에 속하는가?”

Speaker Flow:

1. (0:00–1:00) Task Prompt를 현재 목표와 연결한다.
2. (1:00–2:30) Project Context를 반복되는 사실과 제약으로 설명한다.
3. (2:30–4:00) Workflow를 `baseline → investigate → verify → compare`로 짧게 보인다.
4. (4:00–5:00) 셋이 Prompt 밖에 있어도 책임은 다르다고 정리한다.

Evidence / Source: BEAT-019, TRIAL-006/007. TEACHING_MODEL / CONCEPTUAL.

Claim Boundary: 세 Layer는 교육용 모델이다. Harness 전체 정의나 제품의 공식 분류로 부르지 않는다.

Beginner Explanation: 지금 원하는 일, 계속 유효한 프로젝트 정보, 반복할 작업 순서를 나눠 볼 수 있다.

Advanced Insight: 같은 위치에 저장될 수 있어도 소유권, 갱신 주기, Task별 적용은 다를 수 있다.

C++ Vision Bridge: N/A.

Demo Operation: N/A.

Audience Interaction: 각 Layer 예시를 조용히 따라오게 한다. 노트북 실습은 없다.

Transition: Slide 40에서 반복 절차를 repository-owned asset으로 옮길지 묻는다.

Time Management: 5분 동안 세 책임과 한 개의 workflow 예시만 설명한다.

Fallback: READY — 정적 세 Layer 도식.

Validation Status: REVIEWED — Source, claim scope, and local Keynote render reviewed. Windows PowerPoint, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S40 — 반복 절차를 Skill로 옮길 수 있을까?

Slide ID: S40

Working Title: 반복 절차를 Skill로 옮길 수 있을까?

ACT / Section: ACT 3 / 3C

Allocated Time: 4 minutes

Mode Split: Lecture 4 minutes

Primary Message: 반복 절차를 repository-owned Skill에 두는 것은 Task 목표와 Project 절차를 분리하려는 선택이다.

Opening Question: “긴 Procedure를 Prompt에서 빼도 같은 작업 흐름을 유지할 수 있을까?”

Speaker Flow:

1. (0:00–1:30) 목표와 반복 절차가 함께 들어간 Before를 보여준다.
2. (1:30–3:00) `$graypipe-performance`와 repository Skill을 후보 구조로 보여준다.
3. (3:00–4:00) 성공 결과를 앞당기지 않고 대상 surface와 호출 경로는 확인 대상이라고 말한다.

Evidence / Source: DEC-0017, BEAT-020/021, TRIAL-006/007/008. Skill 선택은 ACCEPTED; 동작 근거는 뒤의 TRIAL-008에 둔다.

Claim Boundary: 여기서는 설계 질문과 후보만 소개한다. 현재 Desktop/계정에서 이용 가능하다고 보장하거나 Skill 우월성을 주장하지 않는다.

Beginner Explanation: 같은 방법을 매번 Prompt에 복사하는 대신 프로젝트가 소유하는 위치를 검토할 수 있다.

Advanced Insight: 반복 근거에 따른 workflow 소유권 선택과 실제 발견·호출 증거를 구분한다.

C++ Vision Bridge: N/A.

Demo Operation: N/A.

Audience Interaction: 성공 여부를 추측하지 않도록 잠깐 멈추고 질문을 남긴다.

Transition: Slide 41에서 TRIAL-008의 발견과 명시적 호출 기록을 확인한다.

Time Management: 4분 중 3분은 문제와 후보를 설명하고, 마지막 1분에 product check 경계를 둔다.

Fallback: READY — 정적 Before/Candidate 도식.

Validation Status: REVIEWED — Source, claim scope, and local Keynote render reviewed. Windows PowerPoint, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S41 — Skill을 어떻게 발견하고 호출할까?

Slide ID: S41

Working Title: Skill을 어떻게 발견하고 호출할까?

ACT / Section: ACT 3 / 3C

Allocated Time: 5 minutes

Mode Split: Demo 5 minutes (HYBRID planned; activation unverified)

Primary Message: TRIAL-008에서 Codex CLI 0.154.0의 `/skills` 목록으로 repository Skill을 찾고 `$graypipe-performance`를 명시적으로 호출했으며, 실행 trace에 Skill 본문이 있었다.

Opening Question: “반복할 작업 절차를 Repository에서 어떻게 찾고 불러올까?”

Speaker Flow:

1. (0:00–1:00) 화면 도식이 재구성 자료이며 근거가 TRIAL-008임을 밝힌다.
2. (1:00–2:30) `/skills` selector가 `graypipe-performance`와 잘린 설명을 표시한 기록을 보여준다.
3. (2:30–4:00) 명시적 `$graypipe-performance` 호출과 실행 trace의 Skill 본문 증거를 순서대로 공개한다.
4. (4:00–5:00) CLI 버전·실행 범위를 밝히고 Desktop과 implicit invocation은 확인하지 않았다고 말한다.

Evidence / Source: TRIAL-008, DEC-0017, BEAT-021. Codex CLI 0.154.0, 명시적 호출, disposable workspace. 시각 자료는 기록의 재구성이다.

Claim Boundary: Product UI 스크린샷이나 현재 Codex Desktop 동작으로 표현하지 않는다. Skill path는 selector가 아니라 실행 trace에서 확인됐다. Implicit invocation은 테스트하지 않았다.

Beginner Explanation: 기록된 CLI 실행에서 Skill을 목록으로 찾고, 호출 표기를 입력해 사용했다.

Advanced Insight: Selector의 발견 증거와 실행 context의 본문 증거를 구별한다. 다른 surface·계정에 일반화하지 않는다.

C++ Vision Bridge: N/A.

Demo Operation: 기본 경로는 재구성된 TRIAL-008 기록이다. 실제 Codex CLI 실행으로 전환하지 않는다. 현재 제품 표면은 REQUIRES PRODUCT CHECK.

Audience Interaction: 발견, 명시적 호출, 본문 확인의 세 단계를 따라오게 한다. 조작을 요구하지 않는다.

Transition: “호출한 뒤 작업 Prompt에서는 무엇이 달라졌을까?”

Time Management: 발견 1.5분, 호출·본문 근거 1.5분, 범위 제한 1분. 실시간 제품 설명을 추가하지 않는다.

Fallback: READY — 정적 TRIAL-008 재구성 도식과 함께 deck 내 근거 설명을 사용한다. Live surface는 활성화하지 않는다.

Validation Status: REVIEWED — Source, claim scope, and local Keynote render reviewed. Windows PowerPoint, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S42 — 절차의 책임이 Prompt에서 Repository로 이동

Slide ID: S42

Working Title: 절차의 책임이 Prompt에서 Repository로 이동

ACT / Section: ACT 3 / 3C

Allocated Time: 6 minutes

Mode Split: Demo 3 minutes (HYBRID planned; activation unverified) + Case 3 minutes

Primary Message: TRIAL-007의 긴 Prompt가 포함하던 절차를 TRIAL-008에서는 명시적으로 호출한 Skill에 맡기고 Prompt에는 목표와 Task별 제약을 남겼다.

Opening Question: “같은 작업 절차를 매번 Prompt에 길게 적어야 할까?”

Speaker Flow:

1. (0:00–1:30) TRIAL-007의 goal, 제약, 긴 procedure를 요약한다.
2. (1:30–3:00) TRIAL-008의 goal, Task별 제약, 명시적 Skill 호출을 비교한다.
3. (3:00–5:00) 양쪽에 반복된 baseline, 조사, test, benchmark, compare, review를 잇는다.
4. (5:00–6:00) 책임 위치 변화만 관찰됐고 토큰 절감은 측정되지 않았다고 정리한다.

Evidence / Source: TRIAL-007/008, DEC-0017, BEAT-021. 관찰된 CLI 기록을 요약한 비교.

Claim Boundary: Skill 우월성, 속도 향상, token/character 절감은 입증되지 않았다. Prompt 구조와 다른 전역 요인의 인과 효과를 따로 분리하지 않는다.

Beginner Explanation: 반복되는 절차를 저장한 위치를 바꿔도 각 작업의 목표는 Prompt에 남는다.

Advanced Insight: 절차의 재사용 설계와 Prompt 길이·효율의 측정 주장을 혼동하지 않는다.

C++ Vision Bridge: N/A.

Demo Operation: 두 Trial을 요약한 정적 비교를 사용한다. 긴 Prompt 전문이나 실제 터미널 화면을 재현하지 않는다.

Audience Interaction: Case 시간에 공통 절차만 비교하도록 안내하고, 공개 응답은 요구하지 않는다.

Transition: “그 Skill에는 구체적인 답이 들어 있을까, 재사용할 작업 방법이 들어 있을까?”

Time Management: Demo 3분은 구조 비교, Case 3분은 공통 procedure와 책임 경계에 쓴다.

Fallback: READY — deck의 정적 Before/Candidate 비교를 사용한다. Live activation은 미확정이다.

Validation Status: REVIEWED — Source, claim scope, and local Keynote render reviewed. Windows PowerPoint, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S43 — 답을 담지 않는 Workflow

Slide ID: S43

Working Title: 답을 담지 않는 Workflow

ACT / Section: ACT 3 / 3D

Allocated Time: 3 minutes

Mode Split: Lecture 3 minutes

Primary Message: Reusable Skill은 검증 절차를 담고 특정 최적화 답이나 측정 결과를 미리 정답으로 고정하지 않는다.

Opening Question: “Skill이 작업 방법을 담는다면, 어디까지 미리 정해도 될까?”

Speaker Flow:

1. (0:00–1:00) Reusable workflow에 baseline, 조사, correctness check, benchmark, compare, review를 배치한다.
2. (1:00–2:00) Algorithm 선택과 실제 측정 결과는 각 Task의 판단으로 분리한다.
3. (2:00–3:00) Skill이 답을 더 잘 찾는다고 주장하지 않고 다음 후보 비교를 연다.

Evidence / Source: TRIAL-008, `graypipe-performance` Skill, DEC-0017, BEAT-022. OBSERVED_PRODUCT / TEACHING_MODEL.

Claim Boundary: 절차 재사용은 관찰됐지만 Skill이 더 나은 최적화 답을 제공한다는 근거는 아니다. Workflow는 task 결과를 고정하지 않는다.

Beginner Explanation: 작업 순서는 재사용할 수 있지만, 어떤 답이 맞는지는 매번 확인해야 한다.

Advanced Insight: Input, runtime, benchmark, trade-off를 procedure definition과 섞지 않는다.

C++ Vision Bridge: N/A.

Demo Operation: Skill 내용을 절차 요약으로만 보여준다. 원문 전체를 제품 화면처럼 그리지 않는다.

Audience Interaction: 왼쪽의 절차와 오른쪽의 Task 판단을 구별하도록 안내한다.

Transition: “실제로 후보를 선택할 때는 무엇을 근거로 삼았을까?”

Time Management: 3분 동안 두 책임만 구분하며 algorithm 설명은 생략한다.

Fallback: READY — 정적 Workflow / Task Decision 도식.

Validation Status: REVIEWED — Source, claim scope, and local Keynote render reviewed. Windows PowerPoint, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S44 — 측정으로 후보를 고르다

Slide ID: S44

Working Title: 측정으로 후보를 고르다

ACT / Section: ACT 3 / 3D

Allocated Time: 5 minutes

Mode Split: Case 5 minutes

Primary Message: TRIAL-008의 `image_statistics` 후보 중 row-level built-in reduction은 수동 단일 순회보다 빠르면서 낮은 traced-memory 사용을 유지해 선택됐다.

Opening Question: “여러 구현 후보 중 무엇을 선택할지 어떻게 판단했을까?”

Speaker Flow:

1. (0:00–1:00) 후보 비교가 STATE-04 → STATE-04-PERF 공식 결과와 다른 Trial 단계임을 밝힌다.
2. (1:00–3:00) 수동 단일 순회는 traced memory가 적었지만 훨씬 느렸다는 정성 비교를 보여준다.
3. (3:00–4:00) Row-level built-in reduction 후보가 시간·메모리 trade-off에서 선택된 근거를 말한다.
4. (4:00–5:00) 동일한 six-field correctness guard와 workload 한계를 확인한다.

Evidence / Source: TRIAL-008 candidate comparison; `image_statistics`; synthetic 1024×768 image, CPython 3.9.6 / macOS 26.6.2 arm64; same six-field correctness guard.

Claim Boundary: 정확한 candidate 수치는 표시하지 않는다. Candidate 결과를 S45의 formal state benchmark와 섞지 않는다. Skill이 algorithm이나 결과를 만들었다고 하지 않는다.

Beginner Explanation: 적은 메모리만 보고 선택하지 않고 같은 조건에서 실행시간과 정확성을 함께 확인했다.

Advanced Insight: Candidate comparison과 named product-state before/after 측정은 Evidence 단계가 다르다.

C++ Vision Bridge: N/A.

Demo Operation: 정성 Candidate Comparison 카드만 사용한다. 새 benchmark를 실행하지 않는다.

Audience Interaction: Case 질문을 제시하고 실행시간과 메모리의 trade-off를 생각하게 한다.

Transition: “선택한 변화는 어떤 검증을 거쳐 제품 상태에 반영됐을까?”

Time Management: 5분 중 3분은 두 후보 차이, 1분은 correctness guard, 1분은 evidence 경계에 쓴다.

Fallback: READY — deck의 정성 비교 카드와 검증 조건을 사용한다.

Validation Status: REVIEWED — Source, claim scope, and local Keynote render reviewed. Windows PowerPoint, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S45 — Working Harness Success

Slide ID: S45

Working Title: Working Harness Success

ACT / Section: ACT 3 / 3D

Allocated Time: 5 minutes

Mode Split: Case 5 minutes

Primary Message: STATE-04 → STATE-04-PERF의 bounded `image_statistics` 변경은 기록된 조건에서 median과 traced allocation이 달랐고 정해진 tests, CLI, benchmark guards를 통과했다.

Opening Question: “조사와 비교가 실제로 확인 가능한 결과로 이어졌을까?”

Speaker Flow:

1. (0:00–1:00) Task부터 Product change까지의 Harness 사용 경로를 짧게 회수한다.
2. (1:00–2:30) Median `15.468 → 10.769 ms/call`을 named states와 함께 보여준다.
3. (2:30–3:30) `tracemalloc` peak `6,675,804 → 380 B`를 allocation 지표로 설명하고 RSS가 아님을 밝힌다.
4. (3:30–5:00) Focused 1/1, full 11/11, CLI smoke, benchmark guard PASS를 확인하고 인과 주장을 제한한다.

Evidence / Source: STATE-04 → STATE-04-PERF; TRIAL-008; deterministic synthetic 1024×768 image (786,432 pixels, max 255); CPython 3.9.6 / macOS 26.6.2 arm64; seven one-call samples per state.

Claim Boundary: 숫자는 이 입력, 코드 경로, host, runtime, 측정 조건에 한정한다. `tracemalloc`은 Python allocation peak이지 RSS가 아니다. Harness나 Skill이 성능 향상을 일으켰다고 하지 않는다.

Beginner Explanation: 바뀐 코드가 맞는지 Test와 같은 benchmark로 확인한 기록이 있다.

Advanced Insight: Observed product change와 시스템 구성요소의 단독 인과를 분리한다.

C++ Vision Bridge: N/A.

Demo Operation: 고정된 STATE-04 / STATE-04-PERF 수치와 guard 결과를 표시한다. 새 Trial이나 benchmark를 실행하지 않는다.

Audience Interaction: Case로 측정 조건과 verification을 짚고 일반화하지 않도록 안내한다.

Transition: “이 결과를 위해 Subagent도 필요했을까?”

Time Management: 5분을 metric 2.5분, test/CLI guards 1.5분, attribution limit 1분으로 나눈다.

Fallback: READY — static state comparison과 check summary를 사용한다.

Validation Status: REVIEWED — Source, claim scope, and local Keynote render reviewed. Windows PowerPoint, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S46 — 이 작업에 Subagent가 필요했을까?

Slide ID: S46

Working Title: 이 작업에 Subagent가 필요했을까?

ACT / Section: ACT 3 / 3E

Allocated Time: 4 minutes

Mode Split: Demo 3 minutes (VISUAL) + Q&A 1 minute

Primary Message: 현재 performance 작업은 하나의 Agent가 처리할 수 있었고 별도 Context의 병렬화 이득이 작아 Subagent를 정당화하지 않았다.

Opening Question: “성능 작업을 여러 Agent로 나누는 게 이 사례에 도움이 됐을까?”

Speaker Flow:

1. (0:00–1:00) Pipeline 변경, 영향 조사, 결과 검토가 한 흐름으로 연결됨을 보인다.
2. (1:00–3:00) 작업 독립성, 병렬 가능성, handoff/merge 비용으로 현재 사례를 점검한다.
3. (3:00–4:00) 마지막 Q&A 1분에 질문을 받고, 이번 판단은 현재 Task에만 적용한다고 말한다.

Evidence / Source: DEC-0018, BEAT-023–025; STATE-04 / STATE-04-PERF의 project/task complexity review. OBSERVED_PRODUCT / TEACHING_MODEL.

Claim Boundary: `NOT JUSTIFIED YET`는 현재 사례의 판단이다. Subagent 기능이 없거나 일반적으로 불필요하다는 뜻이 아니다.

Beginner Explanation: Agent를 늘리기 전에 실제로 독립시킬 작업이 있는지 본다.

Advanced Insight: 병렬화 이득, context separation, coordination 및 merge 비용을 함께 평가한다.

C++ Vision Bridge: 다음 Slide의 가정적 C++ 예시에서만 연결한다.

Demo Operation: 세 기준을 보여주는 정적 VISUAL Demo다. Product Subagent를 호출하지 않는다.

Audience Interaction: 마지막 1분 질문을 받는다. 질문이 없으면 “무엇을 독립 실행할 수 있었나?”를 짧게 던지고 계속한다.

Transition: “어떤 작업 구조라면 Subagent 검토가 타당해질까?”

Time Management: 시각 검토 3분, Q&A 1분을 보호한다.

Fallback: READY — static decision visual; 별도 제품 surface가 필요하지 않다.

Validation Status: REVIEWED — Source, claim scope, and local Keynote render reviewed. Windows PowerPoint, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S47 — Subagent를 고려할 조건

Slide ID: S47

Working Title: Subagent를 고려할 조건

ACT / Section: ACT 3 / 3E

Allocated Time: 4 minutes

Mode Split: Lecture 1 minute + Demo 2 minutes (VISUAL) + Q&A 1 minute

Primary Message: 독립된 조사와 Context, 병렬 가능성, 명확한 handoff가 있을 때 Subagent를 검토하고 조정 비용이 더 크면 보류한다.

Opening Question: “어떤 일이 실제로 독립된 병렬 작업일까?”

Speaker Flow:

1. (0:00–1:00) 조건부 판단을 위한 세 질문을 제시한다.
2. (1:00–3:00) 독립적인 조사 / 병렬 가능한 작업 / 명확한 handoff와 보류 신호를 비교한다.
3. (3:00–4:00) 대형 C++ Repository 사례는 가정이라고 표시하고 Q&A 1분을 연다.

Evidence / Source: BEAT-023–025, DEC-0018. TEACHING_MODEL; hypothetical C++ case.

Claim Boundary: 현재 Demo에서 관찰한 Subagent 결과가 아니다. 제품 동작·사용법은 설명하지 않는다.

Beginner Explanation: 서로 영향을 덜 주는 일을 나눌 수 있을 때만 여러 Agent를 고려한다.

Advanced Insight: Context 경계와 병렬 결과의 integration cost가 역할 분리의 이익보다 작아야 한다.

C++ Vision Bridge: C++ Repository에서 성능, build toolchain, test 조사가 실제로 독립적일 수 있다는 가정 예만 든다.

Demo Operation: Conceptual decision visual. Subagent 제품 실행이나 지원 여부를 보여주지 않는다.

Audience Interaction: Q&A 1분. 질문이 없으면 “결과를 합칠 책임자는 누구인가?”를 fallback 질문으로 사용한다.

Transition: “반복 절차 말고, 다시 찾기 어려운 지식도 남길 필요가 있었을까?”

Time Management: 세 조건, 보류 신호, 가정 예시를 각 한 번만 다룬다.

Fallback: READY — 정적 조건부 판단 도식.

Validation Status: REVIEWED — Source, claim scope, and local Keynote render reviewed. Windows PowerPoint, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S48 — 무엇이 다시 찾기 어려운 지식인가?

Slide ID: S48

Working Title: 무엇이 다시 찾기 어려운 지식인가?

ACT / Section: ACT 3 / 3F

Allocated Time: 4 minutes

Mode Split: Demo 2 minutes (VISUAL) + Case 2 minutes

Primary Message: 현재 Demo의 계약·명령·구조·절차·Trial 기록은 각각 유지 중인 Source of Truth에 있었고, 별도 Memory 후보는 발견되지 않았다.

Opening Question: “다음 작업에서 다시 발견하기 어려운 지식은 무엇일까?”

Speaker Flow:

1. (0:00–2:00) 계약·명령·아키텍처를 코드/docs로, 반복 절차를 Skill로, Trial 결과를 observation record로 연결한다.
2. (2:00–3:00) 이 분류가 현재 repository audit임을 명확히 한다.
3. (3:00–4:00) 다른 Source of Truth에 없는 costly rediscovery 후보를 검토할 필요를 연다.

Evidence / Source: DEC-0018, DEMO-08 knowledge audit, BEAT-026–028. OBSERVED_PRODUCT / TEACHING_MODEL.

Claim Boundary: 제품 Memory 기능의 존재, 범위, 성능에 관한 주장이 아니다. 현재 Demo에서 별도 보존 후보를 찾지 못했다는 범위다.

Beginner Explanation: 새 기억을 만들기 전에 같은 사실이 이미 어디에 기록돼 있는지 찾는다.

Advanced Insight: 출처, 적용 범위, 갱신 가능성과 기존 Source of Truth의 중복 여부를 검토한다.

C++ Vision Bridge: N/A.

Demo Operation: 네 지식 범주를 정적으로 연결하는 VISUAL Demo. Memory 기능을 실행하거나 흉내내지 않는다.

Audience Interaction: Case 2분 동안 어떤 지식이 어디에 이미 있는지 생각하도록 한다. 공유나 기록은 요구하지 않는다.

Transition: “그럼 어떤 지식에 Memory를 검토할 조건이 있을까?”

Time Management: 두 범주 예시와 현재 audit 결과를 중심으로 4분을 쓴다.

Fallback: READY — 정적 knowledge/source 분류도.

Validation Status: REVIEWED — Source, claim scope, and local Keynote render reviewed. Windows PowerPoint, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S49 — Memory는 재발견 비용으로 판단

Slide ID: S49

Working Title: Memory는 재발견 비용으로 판단

ACT / Section: ACT 3 / 3F

Allocated Time: 4 minutes

Mode Split: Lecture 4 minutes

Primary Message: 재발견 비용이 크고 Project 간 재사용 가능하며 출처·범위·신선도를 관리할 수 있을 때 Memory를 검토한다.

Opening Question: “무엇을 기억해 두어야 다음 작업의 비용이 실제로 줄어들까?”

Speaker Flow:

1. (0:00–1:00) 재발견 비용과 재사용성을 첫 질문으로 둔다.
2. (1:00–3:00) 출처·적용 범위·신선도·무효화 기준을 점검한다.
3. (3:00–4:00) 현재 Demo에서는 해당 조건을 만족하는 항목을 찾지 못했다고 정리한다.

Evidence / Source: DEC-0018, BEAT-026–028, INV-DEMO-003. TEACHING_MODEL.

Claim Boundary: 조건은 교육용 판단 model이지 제품 Memory 기능의 효과나 범위에 관한 claim이 아니다. 현재 Demo의 결정으로 한정한다.

Beginner Explanation: 나중에 다시 찾기 어렵고 실제로 반복해서 쓰는 지식인지 먼저 따져본다.

Advanced Insight: Provenance, scope, freshness, invalidation이 없으면 유지되는 기억이 오래된 정보가 될 수 있다.

C++ Vision Bridge: N/A.

Demo Operation: N/A.

Audience Interaction: 네 판단 질문을 하나씩 따라오게 한다. Memory를 만들라는 과제는 없다.

Transition: “현재 문제를 해결하는 데 실제로 필요했던 구조는 무엇이었을까?”

Time Management: 4분 동안 조건을 설명하고 기준을 feature checklist로 바꾸지 않는다.

Fallback: READY — 정적 decision criteria 카드.

Validation Status: REVIEWED — Source, claim scope, and local Keynote render reviewed. Windows PowerPoint, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S50 — Minimum Effective Harness

Slide ID: S50

Working Title: Minimum Effective Harness

ACT / Section: ACT 3 / 3G

Allocated Time: 3 minutes

Mode Split: Demo 3 minutes (CAPTURED)

Primary Message: STATE-04-PERF까지 이어진 현재 사례는 Prompt, Context와 Routing, reusable Skill, Benchmark, Tests, Tools/Environment를 사용했고 Subagent와 Memory를 추가하지 않았다.

Opening Question: “이번 작업을 위해 실제로 무엇이 필요했을까?”

Speaker Flow:

1. (0:00–1:00) Task에서 state outcome으로 이어진 실제 구성을 묶어 보인다.
2. (1:00–2:00) 필요한 Context, Skill, benchmark, tests와 environment를 연결한다.
3. (2:00–3:00) Subagent/Memory는 추가되지 않았으며 최소 구성은 문제에 따라 바뀐다고 정리한다.

Evidence / Source: STATE-00 → STATE-04-PERF, DEC-0018, INV-VERIFY-001, DEMO-09. OBSERVED_PRODUCT / TEACHING_MODEL.

Claim Boundary: 현재 프로젝트의 구성 감사다. 일반적인 최적 기능 수나 Harness가 성능을 개선한 인과 claim이 아니다.

Beginner Explanation: Harness는 기능을 많이 모으는 일이 아니라 현재 문제에 필요한 작업 환경을 마련하는 일이다.

Advanced Insight: “Minimum Effective”는 신뢰성 있게 해결할 조건을 충족하는 문제별 heuristic이며 숫자 기준이 없다.

C++ Vision Bridge: Slide 51–53에서 Project별 build, test, benchmark 절차로 연결한다. Python Skill을 C++로 복사하지 않는다.

Demo Operation: 승인된 State와 기록의 captured summary를 사용한다. Demo repository나 현재 제품을 실행하지 않는다.

Audience Interaction: 구성요소보다 문제와 evidence가 연결되는 흐름을 보게 한다.

Transition: 다음 Slide에서 Tools, Environment, Verification을 포함한 Harness 운영 정의를 묶는다.

Time Management: 3분 동안 실제 구성과 빠진 두 요소를 확인한다. 일반론으로 확장하지 않는다.

Fallback: READY — static STATE-04-PERF 구성 및 check summary.

Validation Status: REVIEWED — Source, claim scope, and local Keynote render reviewed. Windows PowerPoint, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S51 — Harness는 작업 환경 설계다

Slide ID: S51

Working Title: Harness는 작업 환경 설계다

ACT / Section: ACT 3 / 3G

Allocated Time: 6 minutes

Mode Split: Lecture 4 minutes + Demo 2 minutes (CAPTURED)

Primary Message: 이 교육에서 Harness는 Agent가 Project에서 안정적으로 일하도록 설계한 작업 환경과 절차를 뜻하는 운영 model이다.

Opening Question: “Harness는 결국 무엇을 의미하는가?”

Speaker Flow:

1. (0:00–2:00) Task Prompt, Project Context, Routing, Workflow, Verification, Tools/Environment를 작업 환경으로 묶는다.
2. (2:00–4:00) Developer와 Agent가 이 환경 안에서 일하는 개념 그림을 설명한다.
3. (4:00–6:00) STATE-04-PERF에서 관찰된 요소를 작은 evidence inset으로 연결하고, Subagent/Memory는 필수 구성으로 그리지 않는다.

Evidence / Source: DEC-0023, BEAT-035/036, STATE-04-PERF. OBSERVED_PRODUCT / TEACHING_MODEL.

Claim Boundary: 과정의 operational definition이다. 공식 OpenAI 정의나 보편적 industry standard로 제시하지 않는다.

Beginner Explanation: Agent가 알 정보뿐 아니라 일하는 절차와 결과를 확인하는 환경도 함께 설계한다.

Advanced Insight: Harness는 특정 파일이나 기능 목록이 아니라 Project별 신뢰성 문제를 해결하는 system model이다.

C++ Vision Bridge: Slide 53에서 C++ Project 환경에 같은 Engineering Pattern을 연결한다.

Demo Operation: `STATE-04-PERF` 요소만 captured inset으로 보인다. 실제 실행 화면 또는 모든 환경 요소의 인벤토리로 표현하지 않는다.

Audience Interaction: Evidence inset과 교육용 전체 model의 시각적 경계를 짚는다.

Transition: “그 작업 환경은 Repository 파일만으로 결정될까?”

Time Management: 개념 설명 4분, 관찰된 구성 2분. 기능 이름 열거에 시간을 쓰지 않는다.

Fallback: READY — 정적 Harness model 및 State evidence inset.

Validation Status: REVIEWED — Source, claim scope, and local Keynote render reviewed. Windows PowerPoint, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S52 — Repository 밖의 환경도 결과에 영향을 준다

Slide ID: S52

Working Title: Repository 밖의 환경도 결과에 영향을 준다

ACT / Section: ACT 3 / 3G

Allocated Time: 3 minutes

Mode Split: Lecture 3 minutes

Primary Message: Trial 결과를 해석할 때 Project repository 바깥의 Global instructions, Skills, Hooks, MCP, Permissions, Model/configuration, OS/runtime도 가능한 환경 층이다.

Opening Question: “Repository가 같으면 Agent 실행 환경도 같은가?”

Speaker Flow:

1. (0:00–1:00) Repository 경계 바깥에 가능한 실행 환경 요소를 둔다.
2. (1:00–2:00) Trial 기록에 global Skills와 hook trust/MCP startup 기록이 일부 있었다고 짚는다.
3. (2:00–3:00) 모든 요소가 결과를 바꿨다거나 environment 전체가 조사됐다는 뜻은 아니라고 한정한다.

Evidence / Source: TRIAL-006/007/008, DEC-0016/0021, BEAT-033/036. OBSERVED_META / TEACHING_MODEL.

Claim Boundary: 전체 영향의 완전한 inventory가 아니다. Hook 실행이나 MCP task result가 관찰됐다고 말하지 않는다. TRIAL-007의 보고와 stderr 차이를 이 장에서 재해석하지 않는다.

Beginner Explanation: 같은 repository여도 실행 설정이나 주변 지침은 다를 수 있다.

Advanced Insight: Ambient Harness 요인을 기록하고 Trial의 attribution 범위를 제한하되 미확인 인과를 만들지 않는다.

C++ Vision Bridge: 같은 C++ repository도 Toolchain, 권한, runtime 조건이 다를 수 있다는 정도로만 잇는다.

Demo Operation: ACT 4에서 다룰 Meta 근거는 상세히 재생하지 않는다. 정적 preview visual로만 다룬다.

Audience Interaction: 가능한 환경 층과 실제 확인된 흔적을 구분해 보도록 안내한다.

Transition: “이 환경 설계 원칙은 C++ Vision Project에 어떻게 옮겨갈까?”

Time Management: 3분 동안 환경 경계와 evidence 한계를 설명한다. 요소별 제품 기능 강의는 하지 않는다.

Fallback: READY — 정적 environment ring 및 “부분 관찰 / 전체 미확인” 표기.

Validation Status: REVIEWED — Source, claim scope, and local Keynote render reviewed. Windows PowerPoint, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S53 — Engineering Pattern은 C++에도 전이된다

Slide ID: S53

Working Title: Engineering Pattern은 C++에도 전이된다

ACT / Section: ACT 3 / 3H

Allocated Time: 5 minutes

Mode Split: Lecture 5 minutes

Primary Message: Python Demo의 코드나 도구를 복사하는 대신 Context, Verification, Benchmark, Reusable Workflow의 Engineering Pattern을 C++ Vision 업무에 대응시킨다.

Opening Question: “우리 Repository에서는 무엇이 Project Context이고 무엇이 Workflow인가?”

Speaker Flow:

1. (0:00–1:00) Python Demo와 C++ Vision을 두 열로 둔다.
2. (1:00–3:30) Project Context, tests, benchmark, workflow를 build/algorithm/hardware constraints, GoogleTest/CTest, profiler/benchmark, regression procedure에 대응한다.
3. (3:30–5:00) `baseline → profile → change → regression check`를 공통 패턴으로 회수한다.

Evidence / Source: BEAT-036, CLM-0016/0017/0030, OQ-011. TEACHING_MODEL.

Claim Boundary: 교육용 전이 예다. C++ Demo를 구현하거나 팀별 실제 도구 규칙을 검증한 것이 아니다.

Beginner Explanation: 언어가 달라도 먼저 프로젝트 규칙과 확인 방법을 찾는다.

Advanced Insight: Build mode, hardware assumptions, module contracts, and regression criteria belong to the actual project.

C++ Vision Bridge: PRIMARY — Python `unittest` → GoogleTest/CTest or integration checks; benchmark script → benchmark/profiler; Project Context → build, algorithm, hardware constraints. Team standards must be checked before choosing tools.

Demo Operation: N/A.

Audience Interaction: 청중이 자사 Project의 Context와 Workflow를 구분할 질문을 제시한다. 답변을 요구하지 않는다.

Transition: “현재 업무에서 어떤 구조가 실제로 필요한지 되돌아보자.”

Time Management: 5분 동안 도구 이름보다 패턴 대응을 중심으로 설명한다.

Fallback: READY — 정적 Python-to-C++ pattern transfer 도식.

Validation Status: REVIEWED — Source, claim scope, and local Keynote render reviewed. Windows PowerPoint, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S54 — 필요한 구조부터 질문하기

Slide ID: S54

Working Title: 필요한 구조부터 질문하기

ACT / Section: ACT 3 / 3I

Allocated Time: 10 minutes

Mode Split: Reflection 3 minutes + Q&A 5 minutes + Transition 2 minutes

Primary Message: 기능을 더하기 전에 반복되는 마찰을 찾고 원인과 검증 요구에 맞는 최소 구조를 판단한다.

Opening Question: “내 업무에서 지금 가장 반복되는 마찰은 무엇인가?”

Speaker Flow:

1. (0:00–3:00) 개인 reflection: Project 사실, 절차, 독립 병렬 조사, costly rediscovery, 검증 필요 가운데 현재 마찰을 생각하게 한다.
2. (3:00–8:00) Q&A 5분. 참여자가 원할 경우 마찰과 근거를 공유하게 한다. 답변이 없으면 “이 반복은 Context, Workflow, Coordination, 기억 중 무엇에 가까운가?”를 묻는다.
3. (8:00–10:00) STATE-04-PERF가 Subagent/Memory 없이 성공한 bounded Harness임을 보존하고 “Project가 바뀐 뒤에도 계속 맞을까?”로 ACT 4에 넘긴다.

Evidence / Source: STATE-04-PERF, DEC-0018/0021, BEAT-035–038, INV-VERIFY-001. TEACHING_MODEL; bounded observed product success.

Claim Boundary: 이 작업을 실패한 Harness로 재해석하지 않는다. Subagent와 Memory는 조건부 선택이다. 다음 ACT의 개념 사례를 실제 Demo Product failure로 미리 말하지 않는다.

Beginner Explanation: 먼저 반복되는 문제를 찾고, 필요한 구조만 고른다.

Advanced Insight: Project 변화가 가정을 무효화할 수 있는지 생각하되, 다음 ACT의 사례 결과를 먼저 공개하지 않는다.

C++ Vision Bridge: 앞 Slide의 Project별 C++ 적용 질문을 청중 업무로 가져온다.

Demo Operation: N/A.

Audience Interaction: 개인 reflection은 선택적이며 노트북·실습·필수 공개 응답은 없다. 질문은 5분만 사용한다.

Transition: “지금은 잘 동작하는 Harness도 Project가 바뀐 뒤 계속 맞을까?”

Time Management: Reflection 3분, Q&A 5분, Transition 2분. Q&A가 비어도 마지막 질문을 지키고, 초과 응답은 별도 질의로 안내한다.

Fallback: READY — 정적 S54 reflection / Q&A / handoff slide. 답변이 없으면 위 fallback question을 사용한다.

Validation Status: REVIEWED — Source, claim scope, and local Keynote render reviewed. Windows PowerPoint, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S55 — 여기까지는 잘 동작했다

**Slide ID:**
S55

**Working Title:**
여기까지는 잘 동작했다

**ACT / Section:**
ACT 4 / 4A  WORKING HARNESS CALLBACK

**Allocated Time:**
4 minutes

**Mode Split:**
Lecture 3분 + Reflection 1분

**Primary Message:**
STATE-04-PERF는 bounded task에서 검증된 성공이다. 뒤에 나올 stale 사례는 별도의 개념 사례다.

**Opening Question:**
“잘 동작하는 System도 계속 맞는 상태로 남아 있을까?”

**Speaker Flow:**
1. (0:00–1:30) STATE-04-PERF를 bounded success로 회수한다.
2. (1:30–3:00) 같은 입력·환경에서의 검증을 작게 보여준다.
3. (3:00–4:00) 잠시 성찰하고 다음 장에서 다른 Conceptual frame으로 넘어간다.

**Evidence / Source:**
STATE-00 → STATE-04-PERF  ·  bounded image_statistics evidence

**Claim Boundary:**
STATE-04-PERF의 기록된 task, 코드 경로, 입력, runtime, host 및 검증 조건에 한정한다. 이 결과는 실제 stale Harness나 Product failure를 뜻하지 않는다.

**Beginner Explanation:**
먼저 잘 동작했던 현재 시스템을 기준점으로 둔다.

**Advanced Insight:**
성공한 Product State와 뒤의 Conceptual Case를 별도 Evidence frame으로 읽는다.

**C++ Vision Bridge:**
없음.

**Demo Operation:**
추가 실행 없음. 기존 ACT 3에서 승인된 STATE-04-PERF 결과를 짧게 회수한다. 수치는 현재 범위와 함께 보이고 일반 성과로 확대하지 않는다.

**Audience Interaction:**
1분 Reflection: “성공한 현재 상태도 Project 변화 뒤 다시 확인해야 할까?” 개인 생각만 하고 응답을 요구하지 않는다.

**Transition:**
Project가 정당한 이유로 바뀌면 작업 Workflow도 함께 바뀔까?

**Time Management:**
Lecture 3분 + Reflection 1분. 기존 ACT 3 설명을 다시 길게 열지 않는다.

**Fallback:**
READY — 이 Slide의 정적 vector diagram과 production/preview/act4/S55.png. Live run은 하지 않는다.

**Validation Status:**
로컬 렌더링과 source alignment 검토 대상. Windows PowerPoint, target-PC fonts, room projection, ACT 4 80분 rehearsal은 미검증.

## S56 — 개념 사례: Project와 Workflow는 현재 맞다

**Slide ID:**
S56

**Working Title:**
개념 사례: Project와 Workflow는 현재 맞다

**ACT / Section:**
ACT 4 / 4B  CONCEPTUAL STALE HARNESS / DEMO-04A

**Allocated Time:**
2 minutes

**Mode Split:**
Demo 2분 (VISUAL)

**Primary Message:**
개념 사례의 시작에서는 Project의 기준 절차와 재사용 Workflow가 모두 맞다.

**Opening Question:**
“지금 맞는 Project Workflow는 계속 맞을까?”

**Speaker Flow:**
1. (0:00–0:30) 이 장면이 구성된 교육 사례임을 먼저 밝힌다.
2. (0:30–1:30) Project source와 reusable workflow가 같은 OLD TEST ENTRY를 가리키는 상태를 보여준다.
3. (1:30–2:00) 아직 오류가 없고 정상적으로 정렬된 시작점임을 강조한다.

**Evidence / Source:**
DEMO-04A  ·  constructed starting condition  ·  no Trial

**Claim Boundary:**
CONCEPTUAL CASE. `ai-dev-training-demo`의 기록, Trial 또는 Product State가 아니다.

**Beginner Explanation:**
처음에는 현재 지침과 재사용 절차가 서로 맞아 있다.

**Advanced Insight:**
당시에 올바른 절차도 Project 변화 이후 stale해질 수 있다.

**C++ Vision Bridge:**
선택적 맥락: 실제 Project에서도 build/test structure가 바뀔 수 있다. 별도 C++ 사례로 확장하지 않는다.

**Demo Operation:**
VISUAL only. 실제 Runner, shell command, terminal capture, 결과 badge는 사용하지 않는다. 점선 CONCEPTUAL label을 전체 장면에 유지한다.

**Audience Interaction:**
Project source와 reusable workflow가 같은 test entry를 가리키는지 함께 본다. 답변 요구 없음.

**Transition:**
Project가 바뀌었는데 재사용 Workflow가 그대로라면 어떻게 될까?

**Time Management:**
VISUAL Demo 2분. 첫 장면은 정상 상태로 두고 Project 변경을 앞당겨 보여주지 않는다.

**Fallback:**
READY — 이 PPT의 conceptual vector diagram과 production/preview/act4/S56.png. 별도 실행 캡처는 사용하지 않는다.

**Validation Status:**
Conceptual label 및 dashed frame을 유지한다. 로컬 렌더 검토 후 Windows/target-room 조건은 미검증으로 둔다.

## S57 — Project는 바뀌고 Workflow는 남았다

**Slide ID:**
S57

**Working Title:**
Project는 바뀌고 Workflow는 남았다

**ACT / Section:**
ACT 4 / 4B  CONCEPTUAL STALE HARNESS / DEMO-04A

**Allocated Time:**
4 minutes

**Mode Split:**
Demo 2분 (VISUAL) + Case 2분

**Primary Message:**
Project 기준 절차는 정당한 변경에 맞게 갱신됐지만, 재사용 Workflow는 이전 절차를 계속 가리킨다. 이를 Agent의 지능 문제로 바로 결론 내릴 수 없다.

**Opening Question:**
“다음 Task에서 old workflow를 따르면 누가 틀린 걸까?”

**Speaker Flow:**
1. (0:00–1:00) Project가 정당한 이유로 변했지만 세부 사유는 미정이라고 말한다.
2. (1:00–2:30) Project source만 NEW TEST ENTRY로 이동시킨다.
3. (2:30–4:00) Workflow가 OLD TEST ENTRY에 남은 차이를 관찰한다.

**Evidence / Source:**
DEMO-04A  ·  conceptual Project evolution  ·  no actual migration

**Claim Boundary:**
가상 사례. 실제 Repository migration, Runner 변경 이력 또는 Codex failure가 아니다. 변경의 구체적 사유는 미확정이다.

**Beginner Explanation:**
Agent가 따르는 지침이 Project의 현재 절차와 맞는지 살핀다.

**Advanced Insight:**
Project source의 변화와 stale artifact의 위치를 분리해 본다.

**C++ Vision Bridge:**
없음.

**Demo Operation:**
VISUAL only. `OLD TEST ENTRY → NEW TEST ENTRY`는 추상적 label이다. 구체적인 command나 layout은 만들지 않는다.

**Audience Interaction:**
무엇이 바뀌었고 무엇이 남았는지 잠시 비교한다. Agent 탓이나 특정 실패를 가정하지 않는다.

**Transition:**
다음 Task가 예전 Workflow를 사용하면 어떤 결과가 생길까?

**Time Management:**
Demo 2분은 도식 공개에, Case 2분은 stale 간극을 해석하는 데 쓴다.

**Fallback:**
READY — 이 PPT의 conceptual vector diagram과 production/preview/act4/S57.png. 가짜 terminal capture는 사용하지 않는다.

**Validation Status:**
Conceptual label·선택하지 않은 Project-change reason 경계를 확인한다. 실제 Trial은 없다.

## S58 — Task 해결과 System 문제는 다르다

**Slide ID:**
S58

**Working Title:**
Task 해결과 System 문제는 다르다

**ACT / Section:**
ACT 4 / 4B  CONCEPTUAL STALE HARNESS / DEMO-04A

**Allocated Time:**
3 minutes

**Mode Split:**
Case 3분

**Primary Message:**
오래된 절차는 command 실패 또는 잘못된 검증 범위를 낳을 수 있다. Prompt 보정은 현재 Task를 풀 수도 있지만 reusable workflow는 stale한 채 남을 수 있다.

**Opening Question:**
“Prompt를 더 자세히 쓰면 이번 Task는 해결될까?”

**Speaker Flow:**
1. (0:00–1:00) 오래된 절차에서 생길 수 있는 두 가능성을 말한다.
2. (1:00–2:00) Prompt patch가 현재 Task를 풀 수 있음을 별도 칸에 둔다.
3. (2:00–3:00) reusable workflow가 바뀌지 않았음을 남긴다.

**Evidence / Source:**
DEMO-04A  ·  conceptual consequence  ·  no execution result

**Claim Boundary:**
가상 가능성만 제시한다. 구체적인 실패, 실행 결과, PASS/FAIL 또는 실제 Demo 이력은 없다.

**Beginner Explanation:**
이번 답을 고치는 것과 다음 작업의 절차까지 바꾸는 것은 다르다.

**Advanced Insight:**
Task-level workaround와 durable system correction을 구분한다.

**C++ Vision Bridge:**
없음.

**Demo Operation:**
추가 실행 없음. 두 가지 가능한 결과를 modal language로 설명하고 실제 출력처럼 표현하지 않는다.

**Audience Interaction:**
“이번 Task가 풀려도 다음 Task의 지침은 달라졌나?”를 생각하게 한다.

**Transition:**
그럼 Prompt, global rule, stale Workflow 중 어느 Layer를 살펴볼까?

**Time Management:**
Case 3분. 특정 오류 유형이나 결과에 한정하지 않는다.

**Fallback:**
READY — 이 PPT의 conceptual comparison diagram과 production/preview/act4/S58.png.

**Validation Status:**
가능성 표현과 결과 미확정 상태를 확인한다. 실행 증거는 주장하지 않는다.

## S59 — 원인에 맞는 Layer를 고르기

**Slide ID:**
S59

**Working Title:**
원인에 맞는 Layer를 고르기

**ACT / Section:**
ACT 4 / 4C  FIX THE RIGHT LAYER

**Allocated Time:**
2 minutes

**Mode Split:**
Demo 2분 (CAPTURED)

**Primary Message:**
Prompt patch는 현재 Task만 풀 수 있고 global rule은 중복·충돌을 만들 수 있다. Workflow가 원인으로 확인된 사례라면 그 source를 고친다.

**Opening Question:**
“어디를 고치면 현재 Task와 다음 Task가 함께 달라질까?”

**Speaker Flow:**
1. (0:00–0:30) 세 선택지를 한 번에 보여준다.
2. (0:30–1:15) 각 선택이 바꾸는 범위를 비교한다.
3. (1:15–2:00) 이 사례가 Workflow 원인을 설정했을 때에만 C가 맞다고 제한한다.

**Evidence / Source:**
DEMO-11  ·  conceptual layer-selection synthesis

**Claim Boundary:**
가상 사례 안의 선택 논리다. C는 workflow 원인이 확인된 경우에 맞으며 일반적인 정답이나 Product modification이 아니다.

**Beginner Explanation:**
Prompt에 한 줄 더하기 전에 반복되는 원인이 있는 곳을 찾는다.

**Advanced Insight:**
원인이 뒷받침하는 좁은 layer를 선택하고 중복 지침 가능성을 따진다.

**C++ Vision Bridge:**
Context, workflow, toolchain 또는 test environment 중 원인이 있는 layer를 살핀다는 정도의 pattern transfer만 가능하다.

**Demo Operation:**
CAPTURED conceptual visual. 세 선택지의 범위만 비교한다. 실제 수정 diff나 Product state는 보여주지 않는다.

**Audience Interaction:**
A/B/C의 효과 범위를 소리 없이 비교하게 한다. 원인이 정해졌다고 일반화하지 않는다.

**Transition:**
보이는 실패 지점과 실제 원인 Layer는 항상 같을까?

**Time Management:**
CAPTURED 2분. Visual matrix만 설명하고 새 Product 근거를 추가하지 않는다.

**Fallback:**
READY — 이 PPT의 정적 layer comparison과 production/preview/act4/S59.png.

**Validation Status:**
Conceptual frame과 조건부 결론을 확인한다.

## S60 — 실패 지점과 원인 Layer 구분하기

**Slide ID:**
S60

**Working Title:**
실패 지점과 원인 Layer 구분하기

**ACT / Section:**
ACT 4 / 4C  FIX THE RIGHT LAYER

**Allocated Time:**
2 minutes

**Mode Split:**
Lecture 1분 + Demo 1분 (CAPTURED)

**Primary Message:**
증상은 Prompt나 실행 지점에 보일 수 있지만 원인은 Context, Workflow, Environment, Tool/Permission, Product code 등 다른 층에 있을 수 있다.

**Opening Question:**
“실패가 보인 Layer와 원인이 있는 Layer는 항상 같을까?”

**Speaker Flow:**
1. (0:00–0:45) 증상과 원인이 다른 위치일 수 있음을 소개한다.
2. (0:45–1:30) 가능한 layer를 같은 무게로 보여준다.
3. (1:30–2:00) 단일 인과 결론을 내리지 않고 관찰로 넘어간다.

**Evidence / Source:**
DEMO-11  ·  conceptual cause/layer synthesis

**Claim Boundary:**
교육용 debugging heuristic이다. 고정 진단표나 단일 원인 mapping이 아니며, 가상 사례의 원인은 조사로 확인해야 한다.

**Beginner Explanation:**
실패 메시지만 보고 Prompt나 Agent를 탓하지 않는다.

**Advanced Insight:**
Observation, cause hypothesis, system change, rerun, evaluation을 구분한다.

**C++ Vision Bridge:**
Build, environment, permission, project code를 후보로 분리하는 pattern만 제공한다.

**Demo Operation:**
CAPTURED conceptual diagram. 중심 symptom에서 여러 possible cause layer로 점선을 둔다. 단일 인과 화살표를 그리지 않는다.

**Audience Interaction:**
증상이 보여도 원인이 아직 미확정일 수 있음을 함께 확인한다.

**Transition:**
S61에서 이 사례의 가정과 확인할 가설을 분리한다.

**Time Management:**
Lecture 1분은 관점을 설명하고 CAPTURED visual 1분은 후보 layer만 보여준다.

**Fallback:**
READY — 이 PPT의 static cause-layer diagram과 production/preview/act4/S60.png.

**Validation Status:**
다중 후보·비인과 연결 표기가 의도대로 보이는지 확인한다.

## S61 — 먼저 관찰하고, 그다음 가설을 세운다

**Slide ID:**
S61

**Working Title:**
먼저 관찰하고, 그다음 가설을 세운다

**ACT / Section:**
ACT 4 / 4C  CAUSE / CHANGE

**Allocated Time:**
2 minutes

**Mode Split:**
Case 2분

**Primary Message:**
실행된 절차, 현재 Project 문서, 재사용 Workflow, 실패가 나타난 위치를 먼저 살핀다. 관찰한 사실과 원인 판단은 별개다.

**Opening Question:**
“원인을 추측하기 전에 무엇부터 확인해야 할까?”

**Speaker Flow:**
1. (0:00–0:45) `SCENARIO ASSUMPTIONS` 영역을 보여준다.
2. (0:45–1:30) `INFERENCE TO CHECK`에 stale workflow 가설을 둔다.
3. (1:30–2:00) 확정 전에 확인이 필요하다고 정리한다.

**Evidence / Source:**
DEMO-04A  ·  scenario assumptions and inference

**Claim Boundary:**
화면의 “scenario assumption”도 실제 Trial 관찰이 아니다. stale Workflow는 점검할 가설이지 확정 사실이 아니다.

**Beginner Explanation:**
원인을 정하기 전 현재 지침과 따라간 절차를 맞춰 본다.

**Advanced Insight:**
증거와 cause hypothesis의 확신 수준을 분리한다.

**C++ Vision Bridge:**
없음.

**Demo Operation:**
추가 실행 없음. 왼쪽은 사례가 가정하는 정보, 오른쪽은 검증할 가설로 표시한다.

**Audience Interaction:**
두 칸을 읽고 어떤 문장이 가정이며 어떤 문장이 추론인지 구분해 본다. 답변 제출은 요구하지 않는다.

**Transition:**
Workflow 원인이 확인됐다면 어느 범위까지 바꿔야 할까?

**Time Management:**
Case 2분. 가상 전제와 실제 Evidence를 구별한다.

**Fallback:**
READY — 이 PPT의 two-column conceptual diagram과 production/preview/act4/S61.png.

**Validation Status:**
`OBSERVED`라고 오인할 표현이 없고 conceptual boundary가 살아 있는지 확인한다.

## S62 — Cause가 지지하는 최소 변경

**Slide ID:**
S62

**Working Title:**
Cause가 지지하는 최소 변경

**ACT / Section:**
ACT 4 / 4C  CAUSE / CHANGE

**Allocated Time:**
2 minutes

**Mode Split:**
Lecture 1분 + Case 1분

**Primary Message:**
이 사례에서 stale Workflow가 원인으로 확인됐다고 가정하면 우선 그 Workflow를 갱신한다. 중복된 오래된 지침은 원인일 때만 제거한다.

**Opening Question:**
“얼마나 바꿔야 할까?”

**Speaker Flow:**
1. (0:00–1:00) 원인 layer와 조치 layer의 관계를 설명한다.
2. (1:00–2:00) workflow 갱신과 조건부 obsolete instruction 정리를 보여준다.

**Evidence / Source:**
DEMO-04A  ·  conceptual cause-to-change path

**Claim Boundary:**
가상 사례의 조건부 대응이다. 실제 Product 변경이나 Trial 결과가 아니며, “최소”는 무조건 적게 바꾸라는 뜻이 아니다.

**Beginner Explanation:**
새 규칙을 더하기 전에 실제 원인이 있는 곳을 고친다.

**Advanced Insight:**
Cause가 지지하는 가장 작은 durable change를 정한다.

**C++ Vision Bridge:**
없음.

**Demo Operation:**
추가 실행 없음. `if cause confirmed` 조건을 화면에 유지한다.

**Audience Interaction:**
조건이 바뀌면 수정 대상도 바뀔 수 있음을 잠시 생각하게 한다.

**Transition:**
변경 뒤 같은 Task를 다시 통과하면 Harness는 충분히 검증된 걸까?

**Time Management:**
Lecture 1분은 원칙, Case 1분은 가상 workflow 변화에 쓴다.

**Fallback:**
READY — 이 PPT의 static cause-to-change diagram과 production/preview/act4/S62.png.

**Validation Status:**
조건부 premise, 최소 변경 범위, actual-change 오인이 없는지 검토한다.

## S63 — 같은 Task의 재실행만으로 충분할까?

**Slide ID:**
S63

**Working Title:**
같은 Task의 재실행만으로 충분할까?

**ACT / Section:**
ACT 4 / 4D  EVALUATION & REGRESSION

**Allocated Time:**
4 minutes

**Mode Split:**
Lecture 1분 + Case 3분

**Primary Message:**
같은 Task의 재실행은 필요하지만 그것만으로 변경이 인접 작업에 영향을 주지 않는지는 알 수 없다.

**Opening Question:**
“Failure가 사라졌으면 Harness fix가 끝난 걸까?”

**Speaker Flow:**
1. (0:00–1:00) 같은 Task rerun이 답하는 범위를 말한다.
2. (1:00–2:30) 인접하거나 무관한 작업에서 생길 위험을 제시한다.
3. (2:30–4:00) EVAL 설계로 전환한다.

**Evidence / Source:**
DEMO-04A  ·  designed rerun and system evaluation path

**Claim Boundary:**
이 재실행과 확장 검증은 conceptual design이다. 실행 결과, pass count, regression success를 보여주지 않는다.

**Beginner Explanation:**
이번 작업이 다시 되는지와 다른 작업도 안전한지는 별도 질문이다.

**Advanced Insight:**
Task recovery는 필요 조건일 수 있어도 Harness-level validation을 대신하지 않는다.

**C++ Vision Bridge:**
같은 build/test 시나리오 재실행은 필요하지만 전체 회귀 위험을 모두 해소하지 않는다.

**Demo Operation:**
추가 실행 없음. `FIX TASK`와 `EVALUATE SYSTEM` 두 질문을 별도 카드로 보여준다.

**Audience Interaction:**
두 확인 질문의 범위가 다른 점을 비교한다.

**Transition:**
변경이 닿는 다른 작업 표면은 어떤 대표 Task로 볼까?

**Time Management:**
Lecture 1분 + Case 3분. 구체적인 pass/fail을 만들지 않는다.

**Fallback:**
READY — 이 PPT의 paired evaluation diagram과 production/preview/act4/S63.png.

**Validation Status:**
Task recovery와 system validation이 서로 다른 영역으로 읽히는지 검토한다.

## S64 — 대표 작업으로 변경 범위를 확인하기

**Slide ID:**
S64

**Working Title:**
대표 작업으로 변경 범위를 확인하기

**ACT / Section:**
ACT 4 / 4D  EVALUATION & REGRESSION

**Allocated Time:**
5 minutes

**Mode Split:**
Demo 5분 (VISUAL / CAPTURED conceptual matrix)

**Primary Message:**
EVAL-01/02의 prior observed evidence와 EVAL-03/04의 설계 사례를 분리해 보여준다. 어느 것도 Conceptual stale-workflow 변경의 결과는 아니다.

**Opening Question:**
“무엇을 대표 Task로 고를까?”

**Speaker Flow:**
1. (0:00–1:00) Evaluation을 task 수가 아니라 coverage 관점에서 연다.
2. (1:00–2:00) EVAL-01/02의 기존 Product evidence references를 separate solid frame으로 보여준다.
3. (2:00–4:00) 네-row conceptual set을 읽고 EVAL-03/04가 designed/no outcome임을 밝힌다.
4. (4:00–5:00) 새 실행이나 result가 없음을 재강조한다.

**Evidence / Source:**
DEMO-10  ·  EVAL-01/02 prior Product references; EVAL-03/04 designed

**Claim Boundary:**
EVAL-01/02는 별도 Product task chain의 기존 참고 Evidence다. EVAL-03/04는 설계 사례이며 결과가 없다. 이번 stale-Workflow 변경 뒤의 PASS/FAIL 또는 새 Trial은 없다.

**Beginner Explanation:**
대표 작업은 다른 사용 방식을 확인하도록 골라야 한다.

**Advanced Insight:**
변경이 닿는 흔한 표면, 알려진 회귀 위험, 비교 대상이 없을 수 있는 task를 나눠 본다.

**C++ Vision Bridge:**
Contextual only: 대표 작업 선택은 Vision build, benchmark, docs 같은 surface에 적용할 수 있지만 별도 C++ case는 만들지 않는다.

**Demo Operation:**
5분 static matrix. 상단 solid frame은 이전 관찰 Product references만 표시한다. 하단 dashed matrix는 conceptual evaluation set이며 결과를 넣지 않는다.

**Audience Interaction:**
각 EVAL이 어떤 변경 표면을 확인하기 위해 설계됐는지 눈으로 따라간다. 질문 답 제출이나 실행은 없다.

**Transition:**
실패마다 규칙을 하나씩 더하면 평가 범위가 커지기만 할까?

**Time Management:**
Demo 5분은 static matrix 설명에 사용한다. 네 EVAL을 실제로 실행하지 않는다.

**Fallback:**
READY — 이 PPT의 separate evidence frames와 production/preview/act4/S64.png. 실행 캡처는 필요하지 않다.

**Validation Status:**
두 Evidence frame의 혼동, 미실행 outcome, PASS/FAIL badge 부재를 확인한다.

## S65 — Harness도 특정 실패에 맞춰 과적합될 수 있다

**Slide ID:**
S65

**Working Title:**
Harness도 특정 실패에 맞춰 과적합될 수 있다

**ACT / Section:**
ACT 4 / 4D  EVALUATION & REGRESSION

**Allocated Time:**
4 minutes

**Mode Split:**
Lecture 4분

**Primary Message:**
실패마다 전역 규칙을 덧붙이면 Harness가 비대해지거나 충돌하고 특정 Task에만 좁게 맞춰질 수 있다. 원인을 확인하고 대표 작업을 평가하며 불필요한 규칙은 정리한다.

**Opening Question:**
“한 번 실패했다고 규칙을 계속 추가하면 어떻게 될까?”

**Speaker Flow:**
1. (0:00–1:00) 매 실패마다 global rule을 넣는 흐름을 보여준다.
2. (1:00–2:30) bloat, conflict, narrow optimization 위험을 설명한다.
3. (2:30–4:00) 원인·대표 Evaluation·규칙 정리 흐름을 강조한다.

**Evidence / Source:**
DEMO-04A  ·  conceptual regression / maintenance model

**Claim Boundary:**
“Overfit”은 교육용 비유다. ML 통계적 overfitting과 같은 현상이라고 주장하지 않는다.

**Beginner Explanation:**
규칙 수를 늘리기보다 반복 원인을 살핀다.

**Advanced Insight:**
대표 task에서의 효과와 유지 비용을 같이 평가하고 obsolete rule을 제거한다.

**C++ Vision Bridge:**
없음.

**Demo Operation:**
없음. 반복 실패→규칙 누적 도식은 teaching model이며 실제 history가 아니다.

**Audience Interaction:**
누적 규칙이 낳을 수 있는 bloat, conflict, narrow fit을 같이 본다.

**Transition:**
관찰·원인·변경·평가가 연결될 때 이를 어떤 Engineering 관점으로 볼까?

**Time Management:**
Lecture 4분. 통계적 ML overfitting과 동일시하거나 보편 법칙으로 말하지 않는다.

**Fallback:**
READY — 이 PPT의 static teaching diagram과 production/preview/act4/S65.png.

**Validation Status:**
비유 라벨과 conceptual boundary가 보이는지 확인한다.

## S66 — Feedback을 System Change와 Evaluation으로 잇기

**Slide ID:**
S66

**Working Title:**
Feedback을 System Change와 Evaluation으로 잇기

**ACT / Section:**
ACT 4 / 4E  LOOP MENTAL MODEL

**Allocated Time:**
11 minutes

**Mode Split:**
Lecture 9분 + Demo 2분 (VISUAL)

**Primary Message:**
실행 결과와 반복되는 마찰을 관찰하고 원인과 재발 가능성을 판단한 뒤 적절한 System을 바꾸고 결과를 다시 평가할 때 Feedback은 System Improvement로 이어진다.

**Opening Question:**
“Feedback이 언제 Engineering이 되는가?”

**Speaker Flow:**
1. (0:00–2:00) R1 Execution에서 시작해 R2 Observation을 연결한다.
2. (2:00–5:00) R3 Cause는 관찰이 아니라 가설/판단임을 설명한다.
3. (5:00–7:00) R4 System Change의 대상은 원인 layer라고 짚는다.
4. (7:00–9:00) R5 Re-evaluation으로 현재 시스템을 평가한다.
5. (9:00–11:00) 완성 모델을 hold하고 자동 반복이 아님을 정리한다.

**Evidence / Source:**
DEC-0023  ·  course operational model  ·  no product loop

**Claim Boundary:**
이 교육의 operational model이다. 자동 학습, Agent self-learning, 무한 반복, observed Product loop를 뜻하지 않는다.

**Beginner Explanation:**
같은 수정을 되풀이하는 대신 다음 작업에도 영향을 주는 System을 살핀다.

**Advanced Insight:**
자동화와 별개로 cause, recurrence, change layer, evaluation을 설계한다.

**C++ Vision Bridge:**
없음.

**Demo Operation:**
VISUAL 2분. 정적 five-stage diagram을 사용하고 R1–R5를 발표자 highlight로 단계별 공개한다. Animation은 필수가 아니다.

**Audience Interaction:**
“Feedback은 어느 순간 System change가 되는가?”를 생각하게 하고, 응답 제출은 요구하지 않는다.

**Transition:**
표기를 바꾸어 실제 교육 제작 기록에서의 별도 Loop를 살펴본다.

**Time Management:**
Lecture 9분, 마지막 VISUAL Demo 2분. R1–R5는 approximate reveal cue이며 전체가 항상 표시되는 정적 도식으로 진행 가능.

**Fallback:**
READY — 이 PPT의 editable five-stage model과 production/preview/act4/S66.png. 정적 강조로 대체 가능.

**Validation Status:**
Teaching model frame과 Meta evidence의 분리, 5단계 가독성을 검토한다.

## S67 — 실제 제작 기록: TRIAL-006

**Slide ID:**
S67

**Working Title:**
실제 제작 기록: TRIAL-006

**ACT / Section:**
ACT 4 / 4F  OBSERVED META LOOP / DEMO-04B

**Allocated Time:**
2 minutes

**Mode Split:**
Demo 2분 (CAPTURED)

**Primary Message:**
TRIAL-006은 Codex CLI에서 수행한 실제 성능 조사다. Global Skills와 시작 경고가 함께 관찰되어 Prompt-only attribution은 PARTIAL이다.

**Opening Question:**
“이번에는 실제 제작 과정에서 무슨 일이 있었나?”

**Speaker Flow:**
1. (0:00–0:30) dashed Conceptual frame를 닫고 double-line OBSERVED META frame으로 전환한다.
2. (0:30–1:15) TRIAL-006과 global influences를 보여준다.
3. (1:15–2:00) attribution이 PARTIAL임을 두드러지게 하고 상세는 다음 장에 남긴다.

**Evidence / Source:**
TRIAL-006  ·  DEC-0016  ·  TRIAL-007/008

**Claim Boundary:**
OBSERVED_META: 교육자료 제작·Trial 평가 기록이다. Demo Product change나 DEMO-04A 원인/수정 사례가 아니다. Codex CLI evidence를 현재 Desktop으로 일반화하지 않는다.

**Beginner Explanation:**
결과가 있다는 사실과 그 원인을 안다는 것은 다르다.

**Advanced Insight:**
ambient global environment가 있는 실행에서 attribution boundary를 기록한다.

**C++ Vision Bridge:**
없음.

**Demo Operation:**
CAPTURED static summary from trial/decision records; product screenshot이나 live run이 아니다. Double-line frame에서 `TRIAL-006 → global influence → PARTIAL → DEC-0016 → TRIAL-007/008`을 읽는다.

**Audience Interaction:**
이 시점에 Evidence grammar가 바뀌었음을 보고 Conceptual case와 구별한다.

**Transition:**
이 결과를 Task Prompt만의 효과라고 말할 수 있을까?

**Time Management:**
CAPTURED 2분. 실제 기록의 정적 요약을 사용하고 새 제품 실행은 하지 않는다.

**Fallback:**
READY — 이 PPT의 static timeline and label. Trial/Decision 근거는 plan/DEMO_MATRIX.md와 plan/DECISIONS.md에 한정.

**Validation Status:**
Observed Meta double frame, Timeline label, Conceptual Case와 다른 diagram structure를 확인한다.

## S68 — 결과의 타당성과 원인 귀속은 별개다

**Slide ID:**
S68

**Working Title:**
결과의 타당성과 원인 귀속은 별개다

**ACT / Section:**
ACT 4 / 4F  OBSERVED META LOOP / DEMO-04B

**Allocated Time:**
4 minutes

**Mode Split:**
Demo 4분 (CAPTURED)

**Primary Message:**
resize_nearest 측정은 기록된 코드·입력·runtime·host 범위에서 유효하지만, global Harness 영향 때문에 전체 workflow를 Prompt 하나의 효과로 분리할 수 없다.

**Opening Question:**
“측정 결과가 유효해도 원인을 Prompt 하나로 좁힐 수 있을까?”

**Speaker Flow:**
1. (0:00–1:00) Result validity와 Causal attribution을 다른 질문으로 둔다.
2. (1:00–2:00) 작은 supporting metric과 bounded input/runtime/host를 확인한다.
3. (2:00–3:15) Global Skill influence와 PARTIAL attribution을 설명한다.
4. (3:15–4:00) Hook/MCP 경고를 effect/result로 과장하지 않고 끝낸다.

**Evidence / Source:**
TRIAL-006  ·  7 one-call samples  ·  disposable worktree

**Claim Boundary:**
144.2 → 33.5 ms/call median은 기록된 synthetic 640×480 grayscale input (max 4095) → 960×720, CPython 3.9.6, macOS 26.6.2 arm64에 한정한다. Prompt-only attribution은 PARTIAL. 4.30×/76.8% hero metric은 사용하지 않는다.

**Beginner Explanation:**
숫자가 있어도 무엇이 결과를 만들었는지 자동으로 알 수는 없다.

**Advanced Insight:**
Result validity와 causal attribution의 확신 수준을 따로 보고한다.

**C++ Vision Bridge:**
필요하면 같은 원리를 C++ benchmark의 입력, compiler, host, toolchain 범위로 transfer하되 새 사례로 확장하지 않는다.

**Demo Operation:**
CAPTURED trial summary. Input/output SHA-256 guards matched; seven one-call samples. `performance-goal` global Skill influenced evaluator/ledger/threshold, but is not proven the direct cause of the metric. Hook warnings do not prove hook effect; MCP startup error does not evidence task result.

**Audience Interaction:**
왼쪽은 확인된 result validity, 오른쪽은 남은 attribution uncertainty를 비교한다.

**Transition:**
이 한계가 후속 Trial의 평가 방식에 어떤 변경을 만들었을까?

**Time Management:**
CAPTURED Demo 4분. 성능 숫자를 성과 발표처럼 연출하거나 일반화하지 않는다.

**Fallback:**
READY — 이 PPT의 static evidence card. 수치와 조건은 TRIAL-006 기록을 요약한 것이며 screenshot이 아니다.

**Validation Status:**
Metric의 시각적 dominance, scope, PARTIAL attribution, hook/MCP boundary를 검토한다.

## S69 — 평가와 보고 규칙을 Evidence에 맞추다

**Slide ID:**
S69

**Working Title:**
평가와 보고 규칙을 Evidence에 맞추다

**ACT / Section:**
ACT 4 / 4F  OBSERVED META LOOP / DEMO-04B

**Allocated Time:**
3 minutes

**Mode Split:**
Lecture 1분 + Demo 2분 (CAPTURED)

**Primary Message:**
DEC-0016은 TRIAL-006을 PARTIAL로 보존하고 clean isolation을 진행 조건으로 요구하지 않으며, 후속 CLI Trial에서 관찰된 global influence를 기록하도록 했다.

**Opening Question:**
“Prompt 효과를 분리할 수 없다면 다음 Trial은 어떻게 기록해야 할까?”

**Speaker Flow:**
1. (0:00–1:00) TRIAL-006 evidence에서 PARTIAL 판단으로 간다.
2. (1:00–2:15) DEC-0016이 후속 record에서 관찰된 global influence를 적도록 바꾼 점을 보여준다.
3. (2:15–3:00) code/Skill change가 아니며 clean isolation 조건도 아니라고 닫는다.

**Evidence / Source:**
TRIAL-006  →  DEC-0016  ·  evaluation / reporting policy

**Claim Boundary:**
실제 Training Production evaluation/reporting governance 변화다. Product code 또는 Demo Skill을 수정하지 않았고 clean isolation을 구축했다고 말하지 않는다.

**Beginner Explanation:**
환경 조건과 수행 도구가 다르면 결과 설명도 그 경계를 밝혀야 한다.

**Advanced Insight:**
미통제 조건을 숨기지 않고 Trial 결과의 사용 범위를 제한한다.

**C++ Vision Bridge:**
없음.

**Demo Operation:**
CAPTURED decision summary. Before/after policy만 보여주고 product repository diff를 가장하지 않는다.

**Audience Interaction:**
무엇이 바뀌었는지와 무엇이 바뀌지 않았는지 비교한다.

**Transition:**
이 기준은 TRIAL-007/008에 어떻게 적용됐을까?

**Time Management:**
Lecture 1분 + CAPTURED 2분. Trial/reporting boundary에만 머문다.

**Fallback:**
READY — 이 PPT의 static timeline and policy summary, source DEC-0016.

**Validation Status:**
Meta frame이 유지되고 change 대상이 evaluation/reporting policy로 보이는지 확인한다.

## S70 — 후속 기록은 개선됐지만 완전하지 않았다

**Slide ID:**
S70

**Working Title:**
후속 기록은 개선됐지만 완전하지 않았다

**ACT / Section:**
ACT 4 / 4F  OBSERVED META LOOP / DEMO-04B

**Allocated Time:**
3 minutes

**Mode Split:**
Lecture 1분 + Case 2분

**Primary Message:**
TRIAL-007은 global influence를 기록했지만 MCP report와 stderr가 불일치한다. TRIAL-008은 repository Skill 호출과 global influence를 별도로 기록했다. 품질 향상은 측정되지 않았다.

**Opening Question:**
“새로운 기록 규칙이 모든 불확실성을 해결했을까?”

**Speaker Flow:**
1. (0:00–1:00) TRIAL-007의 기록과 불일치를 보여준다.
2. (1:00–2:00) TRIAL-008의 명시적 Skill discovery/invocation 기록을 구분한다.
3. (2:00–3:00) 결과 품질 향상은 측정되지 않았다고 밝힌다.

**Evidence / Source:**
TRIAL-007 / TRIAL-008  ·  DEC-0016

**Claim Boundary:**
적용은 부분적이다. 완전한 environment inventory, 완벽한 report, 측정된 Trial-quality improvement를 주장하지 않는다. TRIAL-007의 stderr에는 Nimble AuthRequired가 있으나 MCP task result는 없다.

**Beginner Explanation:**
개선된 기록도 빠진 점과 불일치가 있는지 다시 본다.

**Advanced Insight:**
보고, stderr, global influence inventory를 서로 대조하고 claim boundary를 유지한다.

**C++ Vision Bridge:**
없음.

**Demo Operation:**
Trial records를 두 static cards로 비교한다. TRIAL-007의 report/stderr discrepancy는 보이게 유지한다. TRIAL-008을 current Desktop behavior로 제시하지 않는다.

**Audience Interaction:**
후속 기록이 무엇을 명확히 했고 무엇을 남겼는지 비교한다.

**Transition:**
S71에서 실제로 바뀐 System과 미확정 사항을 한 번에 회수한다.

**Time Management:**
Lecture 1분 + Case 2분. 불일치와 unknown을 숨기지 않는다.

**Fallback:**
READY — 이 PPT의 two-card static summary. Trial records are summarized, not presented as terminal screenshots.

**Validation Status:**
TRIAL-007 discrepancy, no MCP task result, TRIAL-008 CLI scope, no measured improvement를 검토한다.

## S71 — 실제 Meta Loop에서 바뀐 것

**Slide ID:**
S71

**Working Title:**
실제 Meta Loop에서 바뀐 것

**ACT / Section:**
ACT 4 / 4F  OBSERVED META LOOP

**Allocated Time:**
3 minutes

**Mode Split:**
Lecture 1분 + Case 2분

**Primary Message:**
TRIAL-006의 ambient influence 및 PARTIAL attribution은 DEC-0016의 Trial evaluation/reporting 변경으로 이어졌고 TRIAL-007/008에서 기록 경계가 부분적으로 적용됐다. Product code가 바뀐 것은 아니다.

**Opening Question:**
“무엇이 바뀌었고, 무엇은 아직 모르는가?”

**Speaker Flow:**
1. (0:00–1:00) timeline을 다섯 단계로 회수한다.
2. (1:00–2:00) Training Production evaluation/reporting이 바뀐 점을 말한다.
3. (2:00–3:00) attribution, environment inventory, quality effects가 미확정임을 남기고 C++ transfer로 넘긴다.

**Evidence / Source:**
TRIAL-006  →  DEC-0016  →  TRIAL-007/008

**Claim Boundary:**
후속 report에는 불일치가 남고 quality effect는 미측정이다. DEMO-04A conceptual stale workflow와 합치지 않는다.

**Beginner Explanation:**
실제로 바뀐 것과 아직 모르는 점을 구분한다.

**Advanced Insight:**
Loop의 system change는 평가·보고 거버넌스일 수 있으나 outcome은 재평가해야 한다.

**C++ Vision Bridge:**
없음.

**Demo Operation:**
추가 실행 없음. Timeline recap을 사용하고 S67–70의 세부를 재강의하지 않는다.

**Audience Interaction:**
Changed/Unknown 두 칸을 비교하며 Meta case를 정리한다.

**Transition:**
이 원리를 C++ Vision Project에 옮기면 무엇을 확인할까?

**Time Management:**
Lecture 1분 + Case 2분. preceding slides를 다시 풀어 설명하지 않는다.

**Fallback:**
READY — 이 PPT의 static Observed Meta timeline과 production/preview/act4/S71.png.

**Validation Status:**
Double-line Observed Meta frame, concise recap, open uncertainties가 유지되는지 확인한다.

## S72 — Project와 환경이 바뀌면 검증도 다시 본다

**Slide ID:**
S72

**Working Title:**
Project와 환경이 바뀌면 검증도 다시 본다

**ACT / Section:**
ACT 4 / 4G  C++ VISION TRANSFER  /  4H DISCUSSION & TRANSITION

**Allocated Time:**
20 minutes

**Mode Split:**
Case 7분 + Reflection 2분 + Q&A 7분 + Transition 4분

**Primary Message:**
Project나 환경이 바뀌면 기존 performance 가정과 verification 절차가 여전히 맞는지 다시 확인한다. 반복되는 마찰은 관찰하고 원인을 찾아 관련 layer를 바꾼 뒤 benchmark와 regression으로 확인한다.

**Opening Question:**
“같은 문제가 두 번째로 생기면 다시 Prompt를 고칠까, System을 살펴볼까?”

**Speaker Flow:**
1. (0:00–7:00) Case: toolchain/GPU/build·benchmark 조건 변화 시 verification 가정을 다시 확인하는 패턴을 설명한다.
2. (7:00–9:00) Reflection: 같은 마찰이 반복될 때 다시 확인할 system layer를 개인적으로 생각한다.
3. (9:00–16:00) Q&A: 질문을 받고, 질문이 없으면 fallback question을 쓴다.
4. (16:00–20:00) Transition: cutoff cue 후 ACT 5의 전체 problem-driven story recap을 예고한다.

**Evidence / Source:**
BEAT-059 / TRANS-012  ·  teaching transfer, not observed C++ incident

**Claim Boundary:**
COURSE MODEL / C++ VISION TRANSFER. Toolchain, CUDA/GPU architecture, build/benchmark configuration은 hypothetical teaching context이며 실제 Demo history가 아니다. 구체적인 Windows/shell/IDE/hardware setup을 주장하지 않는다.

**Beginner Explanation:**
같은 문제가 반복되면 Prompt 외에도 Project와 workflow를 살핀다.

**Advanced Insight:**
Project/environment 변화가 verification assumptions에 미치는 영향을 평가한다.

**C++ Vision Bridge:**
Primary bridge. 변화한 조건에서 기존 tuning 가정과 benchmark/regression 조건을 다시 확인하는 engineering pattern만 전한다.

**Demo Operation:**
정적 slide와 speaker-led highlighting. 별도 product/demo 실행 및 animation 의존 없음.

**Audience Interaction:**
0–7분 Case, 7–9분 개인 Reflection, 9–16분 Q&A, 16–20분 ACT5 Transition. 질문이 없으면 “이 사례에서 다시 확인할 가정 하나는 무엇인가?”를 fallback prompt로 사용한다.

**Transition:**
“이제 기능이 아니라, 처음의 문제에서 Loop까지 이어진 Story를 다시 연결해 보겠습니다.” ACT 5 S73으로 넘긴다.

**Time Management:**
S72 총 20분. 0–7 Case, 7–9 Reflection, 9–16 Q&A, 16–20 Transition. 16분에 Q&A를 마감하고 transition으로 이동한다. 실제 20분 rehearsal은 미수행.

**Fallback:**
READY — 정적 C++ Vision transfer visual과 in-deck timeline. live project 예시나 실행은 요구하지 않는다.

**Validation Status:**
20분 운영 cue는 문서화했으나 실제 rehearsal, Windows PowerPoint, target PC fonts, room readability는 UNVERIFIED.

## S73 — 여섯 시간의 Story를 한 장으로

**Slide ID:**
S73

**Working Title:**
여섯 시간의 Story를 한 장으로

**ACT / Section:**
ACT 5 / 5A  FULL STORY RECAP

**Allocated Time:**
4 minutes

**Mode Split:**
Lecture 4분

**Primary Message:**
Chatbot은 답을 구하고, Prompt는 Task를 구체화하며, Context는 필요한 Project 지식을 제공하고, Harness는 작업 환경을 설계하며, Loop는 Feedback으로 System을 개선한다.

**Opening Question:**
“나는 지금 AI를 어떤 방식으로 사용하고 있을까?”

**Speaker Flow:**
1. (0:00–0:30) 질문을 던지고 다섯 단계가 놓인 흐름을 전체로 보여준다.
2. (0:30–2:45) 각 단계의 한 문장 역할을 차례로 짚는다: 답을 구하기, Task를 구체화하기, Project 지식 제공하기, 작업 환경 설계하기, Feedback으로 System 개선하기.
3. (2:45–4:00) 단계가 앞 단계를 대체하지 않는다고 정리하고 하나의 Repository에서 보인 실제 변화로 넘긴다.

**Evidence / Source:**
TEACHING_MODEL · BEAT-060 · 앞선 ACT의 Story callback. 새 Demo는 실행하지 않는다.

**Claim Boundary:**
이 교육의 문제-driven 진화 모델이다. 각 단계는 앞 단계를 대체하거나 모든 개발자가 같은 maturity 순서로 이동해야 한다는 뜻이 아니다.

**Beginner Explanation:**
현재 사용 방식에서 다음으로 필요한 작은 engineering 대응 하나를 찾는다.

**Advanced Insight:**
어떤 문제가 다음 단계의 접근을 필요하게 했는지 시스템 관점으로 설명한다.

**C++ Vision Bridge:**
기존 Vision 사례를 선택적으로 회상할 수 있다. 새 C++ 기술 사례는 추가하지 않는다.

**Demo Operation:**
추가 실행 없음. 앞선 사례를 한 문장씩 연결하는 static diagram만 사용한다.

**Audience Interaction:**
Opening question을 띄우고 개인적으로 떠올리게 한다. 답변이나 현재 수준 발표를 요구하지 않는다.

**Transition:**
“이 흐름이 하나의 Repository에서는 어떤 변화로 기록됐을까요?” S74로 넘긴다.

**Time Management:**
총 4분, Lecture 4분. 각 단계 설명을 한 문장에 제한하고 앞선 ACT 내용을 다시 강의하지 않는다.

**Fallback:**
정적 vector diagram으로 진행한다. 애니메이션 또는 Live Demo가 필요하지 않다.

**Validation Status:**
LOCAL REVIEW COMPLETE — 5-step teaching diagram is legible and the non-ladder boundary is clear. Presenter pacing, Windows PowerPoint, and room projection remain unverified.

## S74 — 하나의 Repository가 문제에 대응해 진화했다

**Slide ID:**
S74

**Working Title:**
하나의 Repository가 문제에 대응해 진화했다

**ACT / Section:**
ACT 5 / 5A  PRIMARY DEMO EVOLUTION

**Allocated Time:**
3 minutes

**Mode Split:**
Lecture 1분 + Demo 2분 (VISUAL)

**Primary Message:**
각 State는 해당 문제에 대응해 기록된 Engineering history다. State 순서는 기능 성숙도 등급이 아니다.

**Opening Question:**
“이 Repository는 어떤 문제를 만나며 바뀌었나?”

**Speaker Flow:**
1. (0:00–1:00) State rail을 왼쪽부터 읽고, 각 변화가 특정 문제에 대응해 기록됐다고 설명한다.
2. (1:00–2:30) 두 번째 줄의 짧은 labels를 보며 bug fix, project context, routing, reusable workflow, bounded product change를 구분한다.
3. (2:30–3:00) 마지막 STATE-04-PERF를 bounded Working Harness Success로 닫고, benchmark-preparation commits는 named States가 아니라고 덧붙인다.

**Evidence / Source:**
OBSERVED_PRODUCT · `ai-dev-training-demo`의 named Git State/tag 기록과 DEMO-12. State 순서는 STATE-00 → STATE-00-FIXED → STATE-01 → STATE-02 → STATE-03 → STATE-04 → STATE-04-PERF다.

**Claim Boundary:**
기록된 State와 Demo evidence 범위에 한정한다. Benchmark preparation commits는 supporting history이며 별도 State가 아니다. Subagent, Memory, stale Harness 또는 Loop를 Product State로 표시하지 않는다.

**Beginner Explanation:**
변화가 기능 수를 늘리기 위한 것이 아니라 당시 확인된 문제에 대응했다는 점을 본다.

**Advanced Insight:**
Product State와 Conceptual 또는 Observed Meta 사례를 구분하고 bounded Product endpoint를 읽는다.

**C++ Vision Bridge:**
N/A.

**Demo Operation:**
DEMO-12 · VISUAL, 2분. 실제 Product State/tag를 요약한 static timeline이다. 새 Trial·repository 실행·추가 state는 없다. Benchmark preparation은 별도 State로 그리지 않는다.

**Audience Interaction:**
질문에 맞춰 각 State 아래 한 문구를 함께 훑는다. 평가 점수나 성숙도 단계로 읽지 않게 안내한다.

**Transition:**
“그러면 이 작업에서 Subagent와 Memory는 왜 없었을까요?” S75로 전환한다.

**Time Management:**
Lecture 1분 + VISUAL Demo 2분 = 3분. 세부 Trial을 재설명하지 않는다.

**Fallback:**
READY — 이 static vector timeline 자체가 기본 presentation path다. 외부 실행은 필요하지 않다.

**Validation Status:**
LOCAL REVIEW COMPLETE — all seven named States and bounded endpoint are legible; supporting benchmark history is not a State. Windows PowerPoint and room projection remain unverified.

## S75 — 필요성이 입증되지 않은 것은 보류했다

**Slide ID:**
S75

**Working Title:**
필요성이 입증되지 않은 것은 보류했다

**ACT / Section:**
ACT 5 / 5A  MINIMUM EFFECTIVE HARNESS CALLBACK

**Allocated Time:**
2 minutes

**Mode Split:**
Lecture 2분

**Primary Message:**
이 bounded task에서는 Subagent와 Memory를 추가할 충분한 근거가 없었다. “Use what the problem justifies.”

**Opening Question:**
“왜 현재 Demo의 최종 그림에 Subagent와 Memory가 없을까?”

**Speaker Flow:**
1. (0:00–0:30) 실제로 사용한 요소와 이번 사례에서 정당화되지 않은 요소를 시각적으로 나눠 보여준다.
2. (0:30–1:20) STATE-04-PERF의 bounded 성공과 DEC-0018의 범위를 설명한다.
3. (1:20–2:00) “More features ≠ More mature”와 “Less is always better도 아니다”를 짚고 기준을 남긴다.

**Evidence / Source:**
OBSERVED_PRODUCT / TEACHING_MODEL · STATE-04-PERF와 DEC-0018. 사용한 요소: task Prompt, Project Context/routing, reusable Skill/workflow, Tests와 benchmark. 이번 bounded task에서 Subagent와 Memory는 사용되지 않았다.

**Claim Boundary:**
이 Demo의 bounded 작업과 이 교육의 프로젝트별 heuristic이다. 모든 Project에 Subagent/Memory가 불필요하거나 적게 쓰는 것이 항상 낫다는 뜻이 아니다.

**Beginner Explanation:**
처음부터 모든 기능을 넣지 않고 지금 반복되는 마찰과 필요한 지원부터 찾는다.

**Advanced Insight:**
구성요소별 비용과 이득을 실제 task, context, verification 요구에 맞춰 평가한다.

**C++ Vision Bridge:**
자신의 Repository에서도 같은 정당화 질문을 적용할 수 있다. 새 C++ 절차는 추가하지 않는다.

**Demo Operation:**
추가 실행 없음. 왼쪽은 STATE-04-PERF의 system components, 오른쪽은 이번 사례에서 정당화되지 않은 Subagent/Memory다. 상태와 일반 규칙을 섞지 않는다.

**Audience Interaction:**
차이를 보고 “Use what the problem justifies”라는 기준을 가져간다. 도구 선택 답변이나 투표는 요구하지 않는다.

**Transition:**
“AI에게 더 많은 일을 맡겨도 개발자에게 남는 책임은 무엇일까요?” S76으로 이동한다.

**Time Management:**
Lecture 2분. 구성요소를 다시 강의하지 않고 판단 근거와 범위에 집중한다.

**Fallback:**
정적 2-panel evidence/model visual을 사용한다. 실행 기록이나 feature-count score는 사용하지 않는다.

**Validation Status:**
LOCAL REVIEW COMPLETE — observed task components are separated from Subagent/Memory non-use; this remains task-bounded. Windows PowerPoint and room projection remain unverified.

## S76 — 위임이 늘어도 개발자 책임은 남는다

**Slide ID:**
S76

**Working Title:**
위임이 늘어도 개발자 책임은 남는다

**ACT / Section:**
ACT 5 / 5A  DEVELOPER RESPONSIBILITY

**Allocated Time:**
3 minutes

**Mode Split:**
Lecture 3분

**Primary Message:**
Agent는 조사·생성·변경·실행·비교를 도울 수 있다. 개발자는 목표, 제약, 판단, Verification, 완료 여부와 결과 책임을 유지한다.

**Opening Question:**
“AI가 더 많은 일을 맡아도 개발자가 계속 책임지는 것은 무엇인가?”

**Speaker Flow:**
1. (0:00–0:40) Agent가 지원할 수 있는 행동 다섯 가지를 보여준다.
2. (0:40–2:20) Goal, Judgment, Verification, Responsibility를 중심으로 네 질문을 설명한다.
3. (2:20–3:00) 역할을 절대적으로 나누는 규칙이 아니라 결과 판단과 책임이 개발자에게 남는다는 점으로 닫는다.

**Evidence / Source:**
TEACHING_MODEL · BEAT-061–062. 새 Product feature나 책임 handoff evidence는 없다.

**Claim Boundary:**
이 교육에서 고정한 책임 원칙이다. Agent와 개발자의 역할을 절대적인 분업 규칙으로 제시하지 않는다. AI fear/control framing을 사용하지 않는다.

**Beginner Explanation:**
AI가 결과를 만들 수 있어도 무엇이 맞고 완료인지 판단하는 일은 남는다.

**Advanced Insight:**
위임 범위, 제약, 검증 기준과 최종 수용 기준을 함께 설계한다.

**C++ Vision Bridge:**
N/A.

**Demo Operation:**
N/A — 별도 실행 없음. 정적 role/responsibility diagram.

**Audience Interaction:**
네 가지 책임 축을 읽고 자신의 완료 기준을 떠올리게 한다. 응답 요구 없음.

**Transition:**
“이 역할 변화를 이 교육에서는 어떤 모델로 부를까요?” S77로 이동한다.

**Time Management:**
Lecture 3분. 다섯 Agent 행동을 상세 제품 기능처럼 설명하지 않는다.

**Fallback:**
정적 diagram으로 진행하며 발표자가 각 responsibility card를 차례로 가리킨다.

**Validation Status:**
LOCAL REVIEW COMPLETE — support actions and developer responsibilities are distinct; no absolute role split is implied. Windows PowerPoint and room projection remain unverified.

## S77 — AI-Native Development는 이 교육의 운영 모델

**Slide ID:**
S77

**Working Title:**
AI-Native Development는 이 교육의 운영 모델

**ACT / Section:**
ACT 5 / 5A  AI-NATIVE DEVELOPMENT

**Allocated Time:**
3 minutes

**Mode Split:**
Lecture 3분

**Primary Message:**
이 교육은 Task Boundary, Project Context, Reusable Workflow, Verification, Feedback Loop를 의도적으로 설계·운영하는 방식을 AI-Native Development의 operational model로 사용한다.

**Opening Question:**
“AI에게 일을 많이 맡기면 AI-Native일까?”

**Speaker Flow:**
1. (0:00–0:30) 사용량 자체가 이 교육의 기준인지 묻는다.
2. (0:30–2:20) 다섯 구성요소를 하나의 working system 모델로 보여준다.
3. (2:20–3:00) 이는 이 교육의 framing이며 모든 task에 모든 component가 반드시 필요한 것은 아니라고 한정한다.

**Evidence / Source:**
TEACHING_MODEL · DEC-0023의 course-specific operational framing.

**Claim Boundary:**
공식·보편 업계 표준 정의라고 말하지 않는다. 모든 task 또는 Demo에 다섯 구성요소를 의무적으로 도입하라는 뜻이 아니다.

**Beginner Explanation:**
AI 사용량을 늘리는 것만으로 끝내지 않고 반복되는 작은 마찰을 하나 개선한다.

**Advanced Insight:**
Model capability와 작업 System/Harness 설계를 구분해 다음 병목을 진단한다.

**C++ Vision Bridge:**
다음 S78에서 C++ Vision 업무와 자신의 Repository로 transfer한다.

**Demo Operation:**
N/A — 별도 실행 없음. 다섯 구성요소는 비교 가능한 system components로 보이며 maturity 순서가 아니다.

**Audience Interaction:**
Opening question을 남긴 뒤 course model의 범위를 확인한다. 공식 용어 정의나 정답 발표를 요구하지 않는다.

**Transition:**
“내 Repository에서는 어떤 Layer에서 마찰이 반복될까요?” S78로 넘긴다.

**Time Management:**
Lecture 3분. AI 사용량과 설계된 work system의 차이만 설명한다.

**Fallback:**
정적 component model로 진행한다. 용어가 추가 정의로 확장되지 않게 DEC-0023 문구를 따른다.

**Validation Status:**
LOCAL REVIEW COMPLETE — course-specific operational model and non-universal scope are visible. Windows PowerPoint and room projection remain unverified.

## S78 — 어느 Layer에서 마찰이 반복되는가?

**Slide ID:**
S78

**Working Title:**
어느 Layer에서 마찰이 반복되는가?

**ACT / Section:**
ACT 5 / 5B  C++ VISION / MY REPOSITORY TRANSFER

**Allocated Time:**
5 minutes

**Mode Split:**
Case 1분 + Transition 4분

**Primary Message:**
Task, Context, Workflow, Verification, Repeated Failure Loop 중 현재 가장 큰 마찰과 가까운 한 곳을 선택한다. 정해진 maturity sequence가 아니다.

**Opening Question:**
“내 Repository에서 다음 주에 하나만 바꾼다면?”

**Speaker Flow:**
1. (0:00–1:00) C++ Vision transfer example을 보여주고 실제 project procedure가 아니라 pattern transfer임을 밝힌다.
2. (1:00–5:00) 다섯 선택지를 같은 수준으로 소개한다. 현재 가장 큰 반복 마찰을 생각하게 하고 S79 개인 Reflection으로 넘긴다.

**Evidence / Source:**
TEACHING_MODEL · C++ Vision engineering-pattern transfer. 실제 C++ Project, hardware, toolchain 또는 benchmark 결과는 사용하지 않는다.

**Claim Boundary:**
다섯 선택지는 같은 높이의 적용 후보이며 순서가 있는 maturity ladder가 아니다. 특정 C++ Project 규칙·도구·hardware 또는 검증된 procedure를 보장하지 않는다.

**Beginner Explanation:**
전체 Harness를 새로 만들기 전에 반복해서 설명하거나 확인하는 부분 하나를 찾는다.

**Advanced Insight:**
반복 비용, 위험과 verification surface를 보고 투자 지점을 고른다.

**C++ Vision Bridge:**
Primary bridge. 예시: 성능 병목 조사 Task; build mode/algorithm contract/hardware assumptions Context; profile → change → benchmark → regression Workflow; tests + benchmark Verification; 반복 이슈가 다시 생기면 관련 System 수정. 실제 project procedure가 아닌 pattern transfer.

**Demo Operation:**
N/A — 별도 Demo 없음. Case 1분은 transfer model 설명, Transition 4분은 S79 개인 Reflection으로 초점을 이동하는 cue다.

**Audience Interaction:**
선택지를 강사 주도로 비교한다. 청중에게 선택 발표, 투표, 실습, 제출을 요구하지 않는다.

**Transition:**
“마지막으로, 각자 업무에서 반복되는 마찰을 개인적으로 생각해 봅시다.” S79로 이동한다.

**Time Management:**
Case 1분 + Transition 4분 = 5분. Transition 동안 새 사례를 열지 않고 reflection handoff만 수행한다.

**Fallback:**
정적 5-option matrix를 사용한다. 특정 C++ toolchain이나 hardware 설명으로 확장하지 않는다.

**Validation Status:**
LOCAL REVIEW COMPLETE — five transfer options use equal visual weight; C++ example is labeled a pattern transfer. Target project applicability and room projection remain unverified.

## S79 — 다음 작은 행동을 개인적으로 고른다

**Slide ID:**
S79

**Working Title:**
다음 작은 행동을 개인적으로 고른다

**ACT / Section:**
ACT 5 / 5B  FINAL REFLECTION

**Allocated Time:**
4 minutes

**Mode Split:**
Lecture 2분 + Reflection 2분

**Primary Message:**
반복해서 적는 설명, AI가 다시 찾는 Project 사실, 반복되는 실패에서 고칠 System layer 가운데 한 가지를 생각한다.

**Opening Question:**
“내가 AI와 개발하는 방식에서 다음에 바꿀 수 있는 것은 무엇인가?”

**Speaker Flow:**
1. (0:00–1:00) S78의 다섯 선택지는 순서가 아니라는 점을 짧게 회수한다.
2. (1:00–2:00) 화면의 질문 세 가지를 차례로 소개한다.
3. (2:00–4:00) 두 분 동안 개인적으로 생각할 시간을 둔다. 답, 기록, 발표, 제출을 요구하지 않는다.

**Evidence / Source:**
TEACHING_MODEL · 승인된 private reflection prompt. 개인 업무에 대한 새 관찰 근거는 수집하지 않는다.

**Claim Boundary:**
개인 Reflection이며 응답, 공유, written commitment 또는 실제 업무 변경을 요구하지 않는다.

**Beginner Explanation:**
반복되는 설명이나 Project 사실을 AI가 다시 찾는 지점부터 생각한다.

**Advanced Insight:**
같은 실패가 반복될 때 Prompt 밖의 어떤 System layer가 원인인지 떠올린다.

**C++ Vision Bridge:**
자신의 Vision 또는 개발 Repository에 같은 질문을 개인적으로 적용할 수 있다.

**Demo Operation:**
N/A — 별도 Demo 없음.

**Audience Interaction:**
공유하지 않는 개인 성찰로 진행한다. 응답을 받기 위해 기다리지 않는다. 2분 뒤 바로 S80으로 이동한다.

**Transition:**
“이제 질문을 받고, 마지막 공통 모델로 마무리하겠습니다.” S80으로 넘긴다.

**Time Management:**
Lecture 2분 + Reflection 2분 = 4분. Reflection은 2분에 종료하고 Q&A와 섞지 않는다.

**Fallback:**
응답이나 기록이 없어도 문제 없이 진행한다. 질문이 끝나면 정해진 시간대로 종료한다.

**Validation Status:**
LOCAL REVIEW COMPLETE — private reflection boundary and no-response requirement are legible. Two-minute live pacing and room projection remain unverified.

## S80 — Q&A와 교육 마무리

**Slide ID:**
S80

**Working Title:**
Q&A와 교육 마무리

**ACT / Section:**
ACT 5 / 5B  FINAL Q&A / CLOSING

**Allocated Time:**
6 minutes

**Mode Split:**
Q&A 4분 + Closing Transition 2분

**Primary Message:**
Goal, Judgment, Verification, Responsibility를 유지하면서 AI가 일할 환경과 Feedback을 설계한다.

**Opening Question:**
“남은 질문은 무엇인가?”

**Speaker Flow:**
1. (0:00–4:00) Q&A를 진행한다. 질문이 없으면 준비된 FAQ 또는 개발 업무 적용 질문 “내 업무에서 먼저 살펴볼 layer는 무엇인가?”를 사용한다.
2. (4:00–6:00) Q&A를 종료하고 마지막 model과 closing line을 보여준다.
3. 종료 cue: “AI를 더 많이 쓰기보다, AI가 잘 일할 환경을 설계합니다.”

**Evidence / Source:**
TEACHING_MODEL · BEAT-070–071. 새로운 Product claim이나 기술 개념은 추가하지 않는다.

**Claim Boundary:**
AI-Native Development의 course-specific framing으로 닫는다. 제품 기능, 자동화 수준 또는 모든 상황의 단일 처방을 주장하지 않는다.

**Beginner Explanation:**
AI 사용량 대신 내 일에 필요한 환경과 확인 기준을 기억한다.

**Advanced Insight:**
Goal, Judgment, Verification, Responsibility를 유지하며 System의 Feedback 경로를 설계한다.

**C++ Vision Bridge:**
N/A.

**Demo Operation:**
N/A — Q&A와 closing visual만 사용한다.

**Audience Interaction:**
Q&A 4분. 질문이 없으면 FAQ 또는 개발 업무 적용 질문 하나를 사용하며 새로운 강의 topic을 열지 않는다.

**Transition:**
2분 closing transition: Question → Task → Context → System → Feedback Loop를 회수하고 교육을 마친다.

**Time Management:**
Q&A 4분 + Closing Transition 2분 = 6분. Q&A는 4분에 마감하고 추가 질문을 이유로 시간을 늘리지 않는다.

**Fallback:**
질문이 없으면 준비된 FAQ 또는 “내 업무에서 먼저 살펴볼 layer는 무엇인가?”를 묻는다. 답이 없어도 closing visual로 바로 전환한다.

**Validation Status:**
LOCAL REVIEW COMPLETE — Q&A fallback, 4+2 time split, closing statement, and final model are legible. Windows PowerPoint and room projection remain unverified.
