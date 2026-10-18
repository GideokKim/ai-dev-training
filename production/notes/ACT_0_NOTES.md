# ACT 0 — Speaker Notes

Status: REVIEWED — accepted presentation revision. Source, screen cues, and operation guidance are aligned. Exact-file render and embedded-Notes results are recorded in the integrated revision evaluation. Windows, room, account, and timed rehearsal remain UNVERIFIED.

Validation history: 이전 제작본의 local Mac Keynote 렌더·구조 검토 기록은 Git history와 기존 ACT 평가 문서에 보존한다. 이전 제작본의 PASS를 새 수정본의 검증 완료로 승계하지 않는다.

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

1. **OPEN (0:00–1:00):** 화면의 질문을 읽고 사용 수준을 평가하는 자리가 아니라고 말한다. 최근 맡겼던 일 하나만 떠올리면 충분하다.
2. **REFLECTION (1:00–5:00):** 오류 설명, 코드 조사, 결과 확인 중 익숙한 경험을 조용히 떠올리게 한다. 오른쪽 업무 범위는 생각을 돕는 예시일 뿐 순위가 아니다. 응답이나 비교를 요구하지 않는다.

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

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.
## S02 — 작은 질문에는 Chatbot이 유용하다

Slide ID: S02

Working Title: 작은 질문에는 Chatbot이 유용하다

ACT / Section: ACT 0 / 0B

Allocated Time: 5 minutes

Mode Split: Lecture 5 minutes

Primary Message: 필요한 코드나 오류를 전달해 답을 받는 방식은 작은 질문에서 빠르고 유용할 수 있다.

Opening Question: “코드 일부나 오류를 ChatGPT에 물어본 적이 있는가?”

Speaker Flow:

1. **OPEN (0:00–1:00):** 화면의 두 줄 slice 예시를 보여 준다. 실제 ChatGPT 대화가 아니라 작은 코드 질문을 설명하기 위한 예시라고 알린다.
2. **EXPLAIN (1:00–3:30):** `row[1:3]`에서 index 1과 2의 값 `[2, 3]`을 짚고, 코드·오류 → 복사 → 질문 → 답 확인 → IDE 복귀 순서를 따라간다. 이처럼 필요한 Context를 사람이 골라 전달하는 방식을 인정한다.
3. **INTERPRET (3:30–5:00):** 작은 코드 조각의 뜻을 이해하는 데 유용할 수 있음을 말한다. 여러 파일을 가로지르는 질문으로 범위가 커질 때의 문제를 S03에 남긴다.

Evidence / Source: BEAT-001, CLM-0001, CLM-0002. TEACHING_MODEL / CONCEPTUAL. `row = [1, 2, 3, 4]`, `row[1:3]` → `[2, 3]`는 화면 설명용 코드 예시이며 실제 ChatGPT 응답이나 새 Trial 기록이 아니다.

Claim Boundary: 일반적인 예시이며 특정 제품 기능, 정확도, 성능 또는 다른 방식보다 우월하다는 주장으로 말하지 않는다.

Beginner Explanation: 오류나 작은 코드 조각을 함께 보여 주고 설명을 받는 것은 자연스러운 시작점이다.

Advanced Insight: 흐름에 필요한 Context를 개발자가 직접 선택해 복사한다. 여기서는 그 수고가 항상 문제라고 단정하지 않는다.

C++ Vision Bridge: N/A.

Demo Operation: N/A.

Audience Interaction: Opening question은 생각을 여는 질문이다. 손들기나 경험 발표를 요구하지 않는다.

Transition: 질문이 여러 파일·구현 경로로 커지면 무엇을 먼저 찾아야 하는지 S03에서 묻는다.

Time Management: 다섯 단계의 순서를 짚고 작은 질문에서의 장점을 먼저 말한다. 상세 Prompt 작성법은 다음 ACT에서 다룰 문제이므로 설명하지 않는다.

Fallback: 정적 코드 예시와 다섯 단계 흐름을 설명한다. 실제 ChatGPT 대화나 즉석 제품 화면으로 대체하지 않는다. 새 제작본의 PNG 경로는 `production/preview/act0/S02.png`; 통합 렌더 검토 후 사용한다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.
## S03 — 질문이 커지면 Context를 모으는 일이 생긴다

Slide ID: S03

Working Title: 질문이 커지면 Context를 모으는 일이 생긴다

ACT / Section: ACT 0 / 0C

Allocated Time: 4 minutes

Mode Split: Case 4 minutes

Primary Message: Repository 수준 질문에서는 사람이 관련 구현, 호출 경로, 테스트와 계약을 찾아 대화에 옮기는 일이 생길 수 있다.

Opening Question: “여러 파일에 걸친 질문을 하려면 무엇을 먼저 찾아야 할까?”

Speaker Flow:

1. **OPEN (0:00–1:00):** “CLI 결과가 기대와 다른데 어디서부터 볼까?”라는 개념 사례로 질문의 범위를 넓힌다.
2. **SHOW (1:00–2:30):** CLI → 처리 흐름 → 이미지 연산 관계를 따라간 뒤 아래의 테스트와 계약 질문을 짚는다. 실제 제품 호출 기록을 그대로 그린 화면이라고 하지 않는다.
3. **INTERPRET (2:30–4:00):** 개발자가 관련 파일과 조건을 찾아 대화로 옮겨야 할 수 있음을 설명한다. 아직 Agent가 이를 대신한다는 답을 제시하지 않고 S04의 관찰 질문으로 이동한다.

Evidence / Source: BEAT-002, CLM-0004, CLM-0009. TEACHING_MODEL / CONCEPTUAL.

Claim Boundary: 이 상황은 ACT 0의 문제 모델이다. 특정 Trial의 실제 실패나 모든 Repository 업무에서 반복되는 비용으로 주장하지 않는다.

Beginner Explanation: 질문이 커질수록 관련 파일과 테스트를 찾는 일이 먼저 생길 수 있다.

Advanced Insight: 여러 파일 간 계약과 호출 경로를 Context로 모으는 일이 코드 생성 전의 별도 부담이 될 수 있다.

C++ Vision Bridge: N/A.

Demo Operation: N/A — 다음 장에서 관찰 기준을 제시한다.

Audience Interaction: 수사 질문이다. 응답이나 직접 파일 탐색을 요구하지 않는다.

Transition: “파일명을 알려주지 않아도 Agent가 필요한 경로를 찾을까?”라고 질문하며 S04의 관찰 기준으로 넘어간다.

Time Management: 문제를 세 개 이내의 관계로 설명한다. 파일 목록을 늘리거나 해결책을 먼저 공개하지 않는다.

Fallback: 도식이 보이지 않으면 CLI 입력, 처리 흐름, 연산 구현의 세 관계와 테스트·계약 질문을 말로 연결한다. 이 사례를 특정 Trial의 실제 실패로 표현하지 않는다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.
## S04 — 파일명을 주지 않으면 Agent는 어디부터 볼까?

Slide ID: S04

Working Title: 파일명을 주지 않으면 Agent는 어디부터 볼까?

ACT / Section: ACT 0 / 0D

Allocated Time: 2 minutes

Mode Split: Lecture 2 minutes

Primary Message: Demo에서는 파일을 직접 지정하지 않았을 때의 Search → Read → Trace를 관찰한다.

Opening Question: “Agent가 Test, 구현, 호출 경로를 어떻게 찾는가?”

Speaker Flow:

1. **OPEN (0:00–0:30):** 화면의 실제 TRIAL-001 요청 발췌에서 파일명을 지정하지 않았고 코드를 수정하지 말라고 한 점을 짚는다.
2. **SET WATCH FOR (0:30–1:30):** 실패 테스트, 관련 구현, 제품 호출 경로의 세 관찰 대상을 차례로 가리킨다. 결과를 미리 알려 주지 않는다.
3. **SCOPE (1:30–2:00):** Codex CLI 0.154.0의 과거 읽기 전용 기록을 볼 것이라고 알린 뒤 S05로 넘긴다.

Evidence / Source: DEMO-01, STATE-00, TRIAL-001, BEAT-003, OQ-003, OQ-005. 이 장은 Trial setup이며 관찰 결과를 아직 공개하지 않는다.

Claim Boundary: 기록된 Trial은 격리된 비대화형 Codex CLI 0.154.0, macOS, `--sandbox read-only`, `--ignore-user-config` 조건에서 수행됐다. Codex Desktop, 교육 계정 또는 현재 제품 동작을 입증하지 않는다.

Beginner Explanation: 결과를 보기 전에 무엇을 관찰할지 정하면 단순히 답만 읽는 것보다 Demo를 따라가기 쉽다.

Advanced Insight: 답변뿐 아니라 파일 발견과 호출 경로 추적을 관찰 대상으로 둔다.

C++ Vision Bridge: N/A.

Demo Operation: DEMO-01 / WATCH. 기본 경로는 `production/ACT_0.pptx` S04–S06의 정적 발표다. S04에서 실제 요청 발췌와 세 관찰 대상을 설명하고 S05로 이동한다. PNG는 PPT의 재구성 도식 렌더이며 CLI 캡처가 아니다. 현재 Desktop·교육 계정·Live/HYBRID는 미검증이므로 활성화하지 않는다. 향후 대상 계정·surface, 읽기 전용 조건, runbook, 기대 관찰과 복귀 cue를 발표 환경에서 확인한 뒤에만 검토한다.

Audience Interaction: 응답을 요구하지 않는다. 세 관찰 항목을 청중이 마음속으로 따라오게 한다.

Transition: “실제 기록에서 어떤 Test와 경로가 발견됐을까요?”라고 묻고 S05에서 근거를 연다.

Time Management: 2분 안에 질문과 세 Watch For를 제시하고 Trial 환경의 범위를 한 문장으로 제한한다.

Fallback: 정적 기본 경로 — `production/ACT_0.pptx` S04 또는 `production/preview/act0/S04.png`. 새 제작본 렌더 검토는 통합 단계에서 수행한다. 화면 사용이 불가능하면 세 관찰 항목을 말로 제시하고 S05 기록 설명으로 이동한다. Live CLI/Desktop을 즉석에서 열지 않는다. Windows·발표 PC·교육장 표시는 UNVERIFIED.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.
## S05 — Agent가 Test와 호출 경로를 찾았다

Slide ID: S05

Working Title: Agent가 Test와 호출 경로를 찾았다

ACT / Section: ACT 0 / 0D

Allocated Time: 8 minutes

Mode Split: Demo 8 minutes (정적 TRIAL-001 기록·재구성 도식 기본 경로; HYBRID는 발표 환경 검증 전까지 비활성)

Primary Message: TRIAL-001 한 번의 읽기 전용 CLI 조사에서 Agent가 실패 Test, 구현 파일, 계약과 호출 경로를 찾아냈다.

Opening Question: “지정하지 않은 파일과 호출 경로를 실제로 찾아냈는가?”

Speaker Flow:

1. (0:00–1:00) TRIAL-001 기록과 STATE-00 테스트를 재구성한 화면임을 밝힌다. 입력의 숫자는 픽셀 값이며 색은 영역 구분용이다.
2. (1:00–3:00) `crop(image, 1, 3)`의 끝 좌표 제외 계약을 짚고 입력, 기대 두 열, 구현에 포함된 세 번째 열을 차례로 가리킨다. 결과 tuple은 원본 소스에 근거한 정적 재구성이다.
3. (3:00–5:00) 실패 테스트명과 `cli.main → pipeline.process_image → transform.crop` 호출 경로를 연결한다. 오른쪽 01–03은 설명 순서이며 Agent의 실제 파일 접근 시각 순서가 아니다.
4. (5:00–7:00) `row[x_start : x_end + 1]`에서 끝 좌표를 포함하게 되는 지점을 짚는다. 코드를 고치거나 새 Test를 실행하지 않는다.
5. (7:00–8:00) 읽기 전용 단일 CLI 조사 범위를 확인하고 S06의 관찰과 환경 한계 분리로 넘어간다.

Evidence / Source: TRIAL-001, DEMO-01, STATE-00, CLM-0002, CLM-0009. `plan/DEMO_MATRIX.md` TRIAL-001; Demo tag STATE-00 `22e7e2f806de2419b0df649107bbae14dea082eb`: `tests/test_transform.py:9–14`, `src/graypipe/transform.py:7–13`. 입력 ((1,2,3,4),(5,6,7,8)); 기대 ((2,3),(6,7)); 코드에 따른 결과 ((2,3,4),(6,7,8)). 마지막 배열은 새 실행 기록이 아닌 정적 재구성이다.

Claim Boundary: Codex CLI 0.154.0의 단일 읽기 전용 조사. 코드 수정 없음. 테스트 배열·구현에 따른 도식이며 screenshot이 아니다. 호출 화살표는 제품 호출 관계이고 Agent 접근 순서가 아니다. README에 기존 결함 안내가 있으므로 아무 힌트 없이 독자 발견했다고 말하지 않는다. 현재 Desktop, 계정, 반복 재현성과 보편적 탐색 능력은 미검증이다.

Beginner Explanation: 파일명을 미리 주지 않은 한 번의 조사에서 실패 Test와 관련 구현·호출 경로가 찾아졌다.

Advanced Insight: 찾은 경로와 설명은 그 run에서 확인된 범위다. 설명과 수정, 검증은 다른 단계이며 이 Trial에서는 코드를 바꾸지 않았다.

C++ Vision Bridge: N/A.

Demo Operation: 정적 자료만 사용한다. `production/ACT_0.pptx` S05 / `production/preview/act0/S05.png`의 입력 → 기대/구현 결과 → 실패 Test/호출 경로/구현 순서로 가리킨다. Live/HYBRID는 비활성. 기존 DEMO-01 원본 기록은 `demos/runbooks/demo-01.md` 및 `plan/DEMO_MATRIX.md`. 마지막 1분에는 S06 handoff로 이동한다.

Audience Interaction: 청중은 S04의 세 Watch For를 확인한다. 중간 응답이나 실습을 요구하지 않는다.

Transition: 발견 사실을 다음 장에서 Repository 관찰과 실행 환경 제한으로 나눈다.

Time Management: Demo 8분 유지. 1분 출처, 2분 배열, 2분 Test/호출 경로, 2분 구현 차이, 1분 범위와 전환. 초과 시 파일 경로 반복 설명을 줄인다. 새 실행 또는 수정은 하지 않는다.

Fallback: 승인된 정적 도식 — `production/ACT_0.pptx` S05와 `production/preview/act0/S05.png`를 사용한다. 새 제작본 삽입·렌더 대조는 통합 단계에서 수행한다. 원본 Trial 캡처나 Live 결과로 표현하지 않는다. 발표용 시각 방향은 사용자 승인 완료이며 Windows·교육장·실제 운영 검증은 별도다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.
## S06 — 관찰 결과와 실행 제한을 분리한다

Slide ID: S06

Working Title: 관찰 결과와 실행 제한을 분리한다

ACT / Section: ACT 0 / 0D

Allocated Time: 5 minutes

Mode Split: Case 5 minutes

Primary Message: TRIAL-001은 Crop의 추가 열을 재현·설명했지만 코드는 수정하지 않았고, 임시 디렉터리를 만들지 못한 3건의 오류는 읽기 전용 환경 제한이었다.

Opening Question: “어떤 결과가 Repository 관찰이고, 어떤 결과가 실행 환경 제한인가?”

Speaker Flow:

1. **OPEN (0:00–0:45):** 왼쪽 “코드에서 확인한 문제”와 오른쪽 “실행 환경에서 생긴 제한”을 서로 다른 원인으로 읽는다.
2. **SHOW (0:45–2:15):** 왼쪽에서 한 열이 더 포함된 crop 동작과 테스트·호출 경로·계약의 연결을 짚는다. 조사 결과이며 코드는 그대로였음을 말한다.
3. **SHOW (2:15–3:30):** 오른쪽에서 읽기 전용 권한으로 임시 디렉터리 생성이 막힌 세 오류를 설명한다. crop 결함의 세 추가 증거가 아니다.
4. **INTERPRET / TRANSFER (3:30–5:00):** 아래의 전체 기록 7개 통과 + crop 실패 + 환경 오류 3건을 확인하고 관찰 사실과 실행 조건을 분리하는 판단으로 마무리한다.

Evidence / Source: TRIAL-001의 full suite 기록: 7 passing tests, 기대한 crop failure, 임시 디렉터리를 만들 수 없어 발생한 3 errors. Focused command 기록: 2 passing tests와 같은 crop failure. Working tree는 변경되지 않았다.

Claim Boundary: 세 errors는 read-only 환경의 temp-directory 제한이며 crop bug의 근거가 아니다. TRIAL-001은 코드 수정을 수행하지 않았다. Trial 범위 밖의 테스트 결과, 제품 동작 또는 반복성을 추론하지 않는다.

Beginner Explanation: 기능의 관찰 결과와 실행 환경의 제한을 서로 다른 원인으로 적는다.

Advanced Insight: 실제 결함 징후, 권한·환경 오류, 미측정 사항을 분류해 후속 판단이 잘못된 원인에 고정되지 않게 한다.

C++ Vision Bridge: N/A.

Demo Operation: DEMO-01 / WHAT HAPPENED. `production/ACT_0.pptx` S06의 흰 관찰 영역과 amber 환경 제한 영역을 순서대로 설명한다. 0:00–0:45 구분, 0:45–2:15 crop 관찰, 2:15–3:30 환경, 3:30–5:00 기록의 범위와 전환이다. 새 테스트나 제품 실행은 하지 않는다.

Audience Interaction: 질문은 결과 해석을 위한 Case cue다. 응답을 받거나 환경 오류를 해결하게 하지 않는다.

Transition: “Context를 찾는 주체가 바뀌면 무엇이 달라질까요?”라는 질문으로 S07에 연결한다.

Time Management: Repo observation과 environment limitation에 시간을 나눠 쓴다. 원인 경계를 줄여 말하더라도 3 errors를 crop 결함으로 부르지 않는다.

Fallback: 정적 기본 경로 — `production/ACT_0.pptx` S06 또는 `production/preview/act0/S06.png`. 새 제작본 렌더 검토는 통합 단계에서 수행한다. 화면을 사용할 수 없으면 기록된 숫자와 코드 문제/환경 제한 두 범주만 말로 설명한다. S05에서 이어지는 복귀 cue: “기록된 결과에서, 코드 문제와 실행 제한을 나눠 보겠습니다.” 운영 시간·Windows·room visibility는 UNVERIFIED.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.
## S07 — 코드를 AI에게 가져가는 대신 AI를 Repository로 데려간다

Slide ID: S07

Working Title: 코드를 AI에게 가져가는 대신 AI를 Repository로 데려간다

ACT / Section: ACT 0 / 0E

Allocated Time: 3 minutes

Mode Split: Lecture 3 minutes

Primary Message: Repository 조사는 개발자가 코드를 일일이 전달하는 대신 Agent가 사용 가능한 Context를 찾도록 할 수 있다.

Opening Question: “Context 수집의 일부를 누가 맡을 수 있는가?”

Speaker Flow:

1. **CALL BACK (0:00–0:45):** 위쪽 Repository → 개발자 선택·복사 → AI 관계로 S02를 짧게 회수한다.
2. **TRANSFER (0:45–2:00):** 아래쪽 개발자 조사 요청 → Agent ↔ Repository로 시선을 옮긴다. 바뀌는 것은 Context를 찾는 주체의 일부이며 목표와 검증 책임을 전부 넘긴다는 뜻이 아니다.
3. **TRANSFER / TRANSITION (2:00–3:00):** 필요하면 큰 C++ 저장소에서도 모듈·테스트·계약을 찾는 상황을 한 문장으로 연결한다. Repository 접근이 원하는 Task를 정하지는 않는다는 S08 질문으로 이동한다.

Evidence / Source: DEMO-01 / TRIAL-001 단일 CLI 관찰; BEAT-003, CLM-0002, CLM-0009. 본문은 Context 수집 역할을 비교하는 TEACHING_MODEL이며 하단에 연결된 과거 관찰의 범위를 별도로 표시한다.

Claim Boundary: 이 관찰은 CLI 한 번에 한정되며 제품의 보편적 성능·반복성 주장이 아니다. Repository 접근이 Task 의도나 성공을 자동으로 정한다는 뜻이 아니다.

Beginner Explanation: 관련 코드를 모두 복사하기보다 Repository 조사를 요청할 수 있는 가능성을 본다.

Advanced Insight: Context 수집 책임의 일부와 Task 목표·판단 책임을 분리한다.

C++ Vision Bridge: CONTEXTUAL speaker cue — 큰 저장소의 모듈·테스트·계약을 찾는 상황을 필요할 때 한 문장으로 연결한다. 화면에 도구·빌드·hardware 목록을 추가하지 않는다.

Demo Operation: DEMO-01 bounded callback. 본문 화살표는 교육 모델이고 새 제품 동작 관찰이 아니다. S05에서 본 단일 CLI 기록을 근거로 한 가능성을 설명하며 새 UI나 실행을 보여 주지 않는다.

Audience Interaction: 별도 질의 없음. 청중이 Mental Shift를 비교해 볼 수 있도록 잠시 시선을 둔다.

Transition: “Repository 접근과 Task 의도는 같은가?”라고 물으며 S08에 간다.

Time Management: 위·아래 관계의 변화에 집중한다. Trial 상세와 수치를 반복하지 않는다. C++ 연결은 선택적인 한 문장이며 3분 안에 S08로 이동한다.

Fallback: Trial record를 표시할 수 없으면 Mental Shift만 Teaching Model로 설명한다. 제품 전반의 사실처럼 말하지 않는다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.
## S08 — Repository 접근과 Task 의도는 별개다

Slide ID: S08

Working Title: Repository 접근과 Task 의도는 별개다

ACT / Section: ACT 0 / 0E

Allocated Time: 2 minutes

Mode Split: Lecture 2 minutes

Primary Message: Repository 탐색은 Context 수집에 도움을 줄 수 있지만, Task의 목표와 완료 조건까지 대신 정하지 않는다.

Opening Question: “Repository를 볼 수 있으면 원하는 작업도 알게 되는가?”

Speaker Flow:

1. **OPEN (0:00–0:30):** 왼쪽 “볼 수 있는 것”과 오른쪽 “정해야 하는 것”을 분리한다.
2. **EXPLAIN (0:30–1:30):** 파일·구현·테스트가 보여도 원하는 변화, 허용 범위, 완료 판단은 별도로 전달해야 한다는 구분만 설명한다.
3. **TRANSFER (1:30–2:00):** 가운데 ≠를 짚고 “코드가 보여도 원하는 일은 따로 전달해야 한다”로 마친다. ACT 1의 구체적인 요청 구조는 아직 소개하지 않는다.

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

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.
## S09 — Repository를 보면 내가 원하는 것까지 알까?

Slide ID: S09

Working Title: Repository를 보면 내가 원하는 것까지 알까?

ACT / Section: ACT 0 / 0F

Allocated Time: 6 minutes

Mode Split: Transition 3 minutes + Q&A 3 minutes

Primary Message: Repository를 볼 수 있다는 사실만으로 Task의 의도가 정해지지는 않는다.

Opening Question: “Repository를 볼 수 있으면 내가 원하는 것까지 알 수 있을까?”

Speaker Flow:

1. **DISCUSS / TRANSITION (0:00–3:00):** “지금 이 저장소에 어떤 일을 맡기고 싶은가?”와 “그 원하는 결과까지 코드에 적혀 있는가?”를 차례로 읽는다. 답이나 다음 단계의 체크리스트를 제시하지 않는다.
2. **Q&A (3:00–6:00):** 자발적인 질문을 받는다. 질문이 없으면 두 질문을 그대로 남긴 뒤 ACT 1의 모호한 요청으로 이동한다.

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

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.
