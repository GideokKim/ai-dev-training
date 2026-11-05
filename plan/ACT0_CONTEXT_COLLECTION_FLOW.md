# ACT0 — 조사에 필요한 Context의 수집 방식

DEC-0185 · 2026-11-05 · 기준판 `455f261`.

승인한 흐름은 문제 현상→필요한 근거→사람의 자료 수집→Agent에 허용된 조사
일부를 맡기는 이점이다. 실제 Agent 결과를 먼저 보여준 뒤 Chatbot과 비교하던
순서를 같은 S06–S12의 역할 재정렬로 개선한다. 장수·번호·시간·Mode는 바꾸지 않는다.

| Slide | 화면 제목 | 기존 배정 |
|---|---|---|
| S06 | Chatbot은 주어진 Context만을 활용해서 조사한다 | 2 minutes |
| S07 | Crop은 기대한 폭보다 한 열을 더 포함했다 | 4 minutes |
| S08 | 원인을 설명하려면 테스트·명세·구현을 연결해야 한다 | 4 minutes |
| S09 | 코드만으로 설명되지 않는 오류도 있었다 | 3 minutes |
| S10 | 이 자료를 매번 사람이 찾아 전달해야 할까? | 2 minutes |
| S11 | Chatbot에 줄 자료는 사람이 모은다 | 2 minutes |
| S12 | Agent는 프로젝트 폴더에서 직접 조사한다 | 2 minutes |

S06은 자료를 직접 첨부하는 대화 방식이다. “주어진 Context만”은 이 방식에서
사람이 전달한 프로젝트 자료라는 범위이며 제품의 모든 기능·도구·사전 지식을
규정하지 않는다. 요청은 세 자료를 첨부하는 각색이고 실제 Chatbot 실행이 없다.

S07–S09의 폭2/3·명세·구현·환경 오류3건은 보존된 Python CLI 기록을 바탕으로
설명한다. 앞 장 Chatbot 요청을 실행한 결과로 귀속하지 않는다. S08의
README·테스트·구현 위치는 STATE-00 파일을 읽기 전용으로 대조했다. README에는
기존 결함 안내도 있었다. 관계도·제품 호출 관계를 실제 Agent 접근 시간순과
혼동하지 않으며 환경 오류를 Agent의 우월성이나 탐색 성공의 근거로 사용하지 않는다.

S10은 프로젝트 파일3개/실행 환경2개의 출처를 구분하고, 답변 전에 필요한
수집·연결 작업을 질문한다. S11/S12는 같은 자료·배치·기존 삽화와 UI를 보존해
수집 주체만 비교한다. 긴 제목은 우측 삽화와 겹치지 않도록 뜻을 유지해 줄였다.
실제 Agent 근거와 원문 요청은 S12 Notes와 DEMO_MATRIX의 TRIAL-001에 둔다.
현재 Desktop 검증·권한 해결·답변 품질·시간/토큰 절감 비교를 추가하지 않는다.

S05의 도입과 S13 Notes의 회수 지점을 맞춘다. S06 제목 막대는 “조사 요청”만,
S07 지정 footer는 삭제한다. S107에서는 원래 선택한 footer “공유는 선택”과
승인된 기획의 보조 문구 “출처·검토·갱신 책임도 함께”를 삭제한다. 기존 A–E와
확인 근거·정렬을 보존하고 자발성과 검토 책임은 Notes에 남긴다.

전체111장·372분, ACT0 14장·42분, ACT5 15장·41분이다. S06–S12의19분과
S107의4분, 원래 Demo8분(S07/S08 각4분)을 유지한다. 새 Trial·Demo Repository·
제품 상태·실험·Sites·발표 묶음은 변경하지 않는다. Windows·교육장·현재 제품/계정·
실측 리허설은 UNVERIFIED다. 결과는
[렌더·대조 기록](../production/evaluation/ACT0_CONTEXT_COLLECTION_FLOW.md)을 따른다.

<details>
<summary>이전 S06의 실제 Agent 요청·가상 GoogleTest 설정·범위 보존</summary>

## S06 — Agent에게 테스트 실패 원인을 조사하게 한다

**Slide ID:**
S06

**Working Title:**
Agent에게 테스트 실패 원인을 조사하게 한다

**ACT / Section:**
ACT 0 / 0D

**Allocated Time:**
2 minutes

**Mode Split:**
Lecture 2 minutes

**Primary Message:**
실패 원인을 조사하되 코드는 수정하지 말라는 요청을 전달하고, 실패 테스트·관련 구현·호출 경로를 찾아 설명하는 과정을 관찰한다.

**Opening Question:**
“Agent가 실패 원인을 설명하려면 무엇을 확인해야 할까?”

**Speaker Flow:**
1. **READ THE REQUEST (0:00–0:30):** “실제로 전달한 조사 요청” 아래 입력창을 가리킨다. 실패 원인·관련 구현·호출 경로·테스트를 조사하되 아직 코드는 수정하지 말라는 요청임을 짚는다. 내부 기록 ID는 청중에게 소개하지 않는다. 파일명을 지정하지 않은 실제 요청이라는 사실은 보존한다. 입력창은 실제 현재 제품 screenshot이 아니다.
2. **SEPARATE THE ILLUSTRATION (0:30–1:00):** 우측은 C++ 청중이 익숙한 GoogleTest 형식으로 구성한 가상 UI이며, 여섯 항목 중 다섯 통과·하나 실패는 설명용 설정임을 알린다. TRIAL-001의 실제 runner는 Python `unittest`였고 이 가상 화면과 같은 실행 결과가 아니다. 가상 실패 행에서 실제 원인이나 코드 위치를 설명하지 않는다.
3. **SET WATCH FOR (1:00–1:45):** 실패 테스트, 관련 구현, 제품 호출 경로의 세 관찰 대상을 차례로 가리킨다. 실제로 발견된 파일명·원인·수정안은 S07–S08에 남긴다. 좌우 패널을 “이 Prompt를 실행해 이 결과가 나왔다”는 인과 화살표로 설명하지 않는다.
4. **SCOPE (1:45–2:00):** Codex CLI 0.154.0의 과거 읽기 전용 기록을 볼 것이라고 한 문장으로 제한하고 S07–S08로 넘긴다.

**Evidence / Source:**
DEMO-01, STATE-00, TRIAL-001, BEAT-003, OQ-003, OQ-005. `plan/DEMO_MATRIX.md` TRIAL-001의 요청 원문을 일반 입력창 형태로 재구성한다. 우측 GoogleTest 가상 UI(5개 통과·1개 실패)는 별도의 교육용 그림이며 실제 제품·실행·Trial 캡처가 아니다. 자산: `assets/slide-illustrations/S04-google-test-mock.png`; 생성 프롬프트: `assets/slide-illustrations/S04_PROMPT.md`. Read / Resize / Crop / Normalize / Statistics / Write의 여섯 항목과 Crop 실패는 가상 설정이다. TRIAL-001의 실제 Python `unittest` 전체 실행은 7개 통과·crop 실패 1건·읽기 전용 임시 디렉터리 환경 오류 3건이었다. 이 장은 setup이며 실제 발견 파일·원인·조사 결과는 S07–S08에서 연다.

보존된 상세 출처: 실제 요청: TRIAL-001 · Codex CLI 0.154.0 · macOS · 읽기 전용

**Claim Boundary:**
기록된 Trial은 격리된 비대화형 Codex CLI 0.154.0, macOS, `--sandbox read-only`, `--ignore-user-config` 조건에서 수행됐다. Codex Desktop·교육 계정·현재 제품 동작을 입증하지 않는다. 좌측 입력창은 실제 요청 원문의 재구성이고 우측 GoogleTest는 가상 UI다. 이 그림의 5 PASS/1 FAIL을 TRIAL-001의 실제 결과로 말하지 않으며, 실제 unittest의 환경 오류를 숨기거나 제품 결함으로 바꾸지 않는다. 실제 screenshot·새 Trial·C++ 실행은 없다.

보존된 상세 범위: 우측은 가상 GoogleTest 예시 · 실제 Trial은 Python unittest · 현재 Desktop은 미검증

**Beginner Explanation:**
익숙한 테스트 목록에서 실패 하나를 보는 문제 상황을 떠올리고, 실제 기록에서는 Agent가 무엇을 찾아냈는지 다음 장에서 확인한다. 그림의 가상 목록과 실제 Trial 근거를 구분한다.

**Advanced Insight:**
답변뿐 아니라 파일 발견과 호출 경로 추적을 관찰 대상으로 둔다.

**C++ Vision Bridge:**
GoogleTest 형식을 C++ 청중을 위한 가상 설명 그림에만 사용한다. 실제 Demo repository는 Python unittest이며 C++ 제품 State·실행·측정으로 전환하지 않는다.

**Demo Operation:**
DEMO-01 / WATCH. 기본 경로는 `production/ACT_0.pptx` S06–S09–S10의 정적 발표다. S06에서는 좌측 실제 요청의 재구성, 우측 가상 GoogleTest UI의 경계, 세 관찰 대상을 설명하고 S07–S08로 이동한다. 정적 PNG는 PPT 렌더이며 CLI·현재 Desktop·실제 GoogleTest 캡처가 아니다. 현재 Desktop·교육 계정·Live/HYBRID는 미검증이므로 활성화하지 않는다. 향후 대상 계정·surface, 읽기 전용 조건, runbook, 기대 관찰과 복귀 cue를 발표 환경에서 확인한 뒤에만 검토한다. 기존 관찰 근거8분은 S07/S07에4분씩 나뉘며 S09/S09은 별도 Case다.

DEC-0179: 요청 입력 부분의 Mac 스타일 제목 막대·세 색상 표시를 사용한다. 원문과 강조, 지침·응답·근거의 구분은 유지하며 공통 창 외형을 실제 제품 실행의 증거로 해석하지 않는다.

DEC-0180: 새 제목과 “실제로 전달한 조사 요청”으로 S05의 Context 수집 문제를 받아 S07의 실제 Crop 결과로 넘긴다. 하단 출처 두 줄은 화면에서 제외하며 실행 환경·실제 Python 기록·가상 GoogleTest 구분은 Evidence / Source와 Claim Boundary에 유지한다.

**Audience Interaction:**
응답을 요구하지 않는다. 세 관찰 항목을 청중이 마음속으로 따라오게 한다.

**Transition:**
“먼저 Crop 결과를 보고, 이어서 그 원인을 설명한 근거를 확인하겠습니다.”

**Time Management:**
Lecture 2분 유지. 요청 30초, 실제/가상 화면 구분 30초, 세 Watch For 45초, 과거 CLI 범위와 S07–S08 전환 15초로 운영한다. 테스트 framework 설명이나 실제 실패 원인 공개를 이 장에 추가하지 않는다.

**Fallback:**
정적 기본 경로 — `production/ACT_0.pptx` S06 또는 `production/preview/act0/S06.png`. 이번 수정본과 PNG의 일치 여부는 제작 단계에서 확인한다. 화면 사용이 불가능하면 실제 요청의 조건과 세 관찰 항목을 말로 제시하고 S07–S08 기록 설명으로 이동한다. 가상 GoogleTest 설정을 실제 Trial 결과로 대신 말하거나 Live CLI/Desktop을 즉석에서 열지 않는다. Windows·발표 PC·교육장 표시는 UNVERIFIED.

**Validation Status:**
ALIGNED — DEC-0034에 따라 원문·Claim 경계와 제작용 화면/운영 지침을 정렬했다. 이번 수정본의 PPT 내장 Notes·최종 PNG 대조와 실제 렌더링 검토 결과는 `production/evaluation/ACT_0_OPENING_REVISION.md`에서 별도로 기록한다. 문서 정렬은 새 제작본의 렌더링 PASS나 실환경 검증을 뜻하지 않는다. Windows PowerPoint·실제 발표 PC 글꼴·교육장 투사·제품/계정·실측 리허설은 UNVERIFIED.



</details>
