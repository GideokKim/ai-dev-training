# STEP 08 — 통합 Slide Map (S01–S93)

> **최신 S57–S58 수정: DEC-0070.** 밝기 통계 작업·기존 임시 리스트·후보 선택을 연결하고, 제품 반영 후 시간·할당량·동작 검증을 세 영역으로 정리한다. S50–S56 흐름을 재검토하고 보존했다. [수정 검토](../production/evaluation/S57_S58_TASK_RESULT_REVISION.md).

> **이전 S57 수정: DEC-0069.** 공통 검증 조건과 후보별 시간·선택을 두 행에 정리해 S56의 판단 질문을 회수하고 S58의 제품 상태 검증으로 넘긴다. [수정 검토](../production/evaluation/S57_CANDIDATE_SELECTION_REVISION.md).

> **이전 S56 수정: DEC-0068.** 재사용할 Skill 절차와 이번 측정·검증 근거로 판단할 답을 관계도로 구분한다. [수정 검토](../production/evaluation/S56_REUSABLE_PROCEDURE_REVISION.md).

> **이전 S55 수정: DEC-0067.** 본문 포함과 수행 근거를 구분하고, Skill 지침의 번역 요약과 실제 출력·메시지·diff를 대응한다. [수정 검토](../production/evaluation/S55_SKILL_ACTION_EVIDENCE_REVISION.md).

> **이전 S53–S54 수정: DEC-0066.** S53의 연결선 굵기를 통일하고, S54의 목록·명시 호출·본문 포함 근거를 시각적으로 연결한다. [수정 검토](../production/evaluation/S53_S54_SKILL_EVIDENCE_REVISION.md).

> **현재 기준: DEC-0060 / 93장·379분 (2026-10-22).** ACT 2 전체 흐름 개선을 승인받아 연구 설명을 분리하고 의존성 답변/성과 회수3장을 보강했다. ACT 2는 S32–S49,18장·81분이다. 기존90장 내용과 각 장의 시간은 보존하며 신규 Lecture6/Case4/Reflection1분을 더한다. [90→93 번호·역할 대조](SLIDE_ID_MIGRATION_93.md). 사용자 허용 상한720분이며379분은 제작 기준, 리허설 실측은 UNVERIFIED다.

> **이전 S53 내용 수정: DEC-0065.** 작업마다 바뀌는 요청과 공동 관리할 Skill의 재사용 관계·선택 이유를 시각화한다. [S53 수정 검토](../production/evaluation/S53_SKILL_REUSE_REVISION.md).

> **이전 S52 내용 수정: DEC-0064.** 목표·프로젝트 기준·재사용할 수행 방법이 한 작업에 적용되는 관계를 시각화한다. [S52 수정 검토](../production/evaluation/S52_TASK_COMPOSITION_REVISION.md).

> **이전 S51 내용 수정: DEC-0063.** 테스트 명령의 적용 시점과 판단 기준을 시각화하고 S50·S52 Notes 연결을 정렬한다. [S51 수정 검토](../production/evaluation/S51_COMMAND_WORKFLOW_REVISION.md).

> **최신 ACT3 전체 흐름 수정: DEC-0062.** S50–S67/18장·85분, 기존 장별 시간·Mode·ID를 유지한다. Skill 문서와 관찰 기록을 대응하고, S59/S61의 명시적 가정 뒤 S60/S62에서 현재 사례의 선택을 회수한다. [ACT3 흐름 설계](ACT3_FLOW_REVISION.md). 실제 Subagent·Memory 사용이나 새로운 효과 측정은 추가하지 않는다.

> 상태: **COMPLETE WITH GAPS** — 승인된 93장 구조·시간·Mode를 통합했다. 대상 계정·제품 표면·구체적 Windows 환경의 확인은 CLAIM_FREEZE.md에 남은 범위대로 열어 둔다.
>
> 이 문서는 §§151–160의 지시에 따라 STEP 08 이후 공식 Slide Map의 Source of Truth다. 기존 10장 단위 결과는 Historical Working Draft로 보존하며, 이후 Slide 관련 산출물은 이 문서를 기준으로 한다. Map 내용 변경은 근거와 영향 범위를 DECISIONS.md에 기록한다.

## 80장 최초 통합 이력 — 범위와 원본 복구

> 아래는 최초 80장 통합 당시의 원본 기록이다. 당시 80장 기록이다. 현재 90장 대응은 [DEC-0043 번호 대조 문서](SLIDE_ID_MIGRATION_90.md)를 적용한다.

이 작업은 새 Slide 설계가 아니라 기존 승인 결과의 통합이다. plan/에 Slide-level Map 파일이 없어 STEP 08 대화 기록에서 아래 여덟 원본 결과를 회수했다. 회수하지 못한 Slide 본문은 재작성하지 않았다.

| 원본 구간 | 확인 결과 |
|---|---|
| Slides 01–10 | 대화 기록에서 원본 결과 회수 |
| Slides 11–20 | 대화 기록에서 원본 결과 회수 |
| Slides 21–30 | 대화 기록에서 원본 결과 회수 |
| Slides 31–40 | 대화 기록에서 원본 결과 회수 |
| Slides 41–50 | 대화 기록에서 원본 결과 회수 |
| Slides 51–60 | 대화 기록에서 원본 결과 회수 |
| Slides 61–70 | 대화 기록에서 원본 결과 회수 |
| Slides 71–80 | 대화 기록에서 원본 결과 회수 |

통합 시 승인된 Revision의 분배를 적용했다. 시간과 Mode 분할을 제외한 원문 의미는 유지했다. 최종 Revision에서 승인된 Working Title 변경은 S10과 S78에 반영했다. S01–S80, 기존 Story Beat·Demo·Section ID는 추가·삭제·재번호화하지 않았다.

## 기준 문서

아래 문서와 CLAIM_FREEZE.md의 경계가 이 Map의 기획·근거 기준이다.

- [MASTER_PLAN.md](MASTER_PLAN.md)
- [INVARIANTS.md](INVARIANTS.md)
- [DECISIONS.md](DECISIONS.md)
- [CURRICULUM.md](CURRICULUM.md)
- [CURRICULUM_MATRIX.md](CURRICULUM_MATRIX.md)
- [STORY_ARCHITECTURE.md](STORY_ARCHITECTURE.md)
- [STORY_BEATS.md](STORY_BEATS.md)
- [TRANSITIONS.md](TRANSITIONS.md)
- [DEMO_ARCHITECTURE.md](DEMO_ARCHITECTURE.md)
- [DEMO_MATRIX.md](DEMO_MATRIX.md)
- [CLAIM_FREEZE.md](CLAIM_FREEZE.md)
- [VISUAL_SYSTEM_ANALYSIS.md](VISUAL_SYSTEM_ANALYSIS.md)

## 승인된 전체 일정

| ACT | Slide 수 | 시간 |
|---|---:|---:|
| ACT 0 | 10 | 40분 |
| ACT 1 | 21 | 63분 |
| ACT 2 | 18 | 81분 |
| ACT 3 | 18 | 85분 |
| ACT 4 | 18 | 80분 |
| ACT 5 | 8 | 30분 |
| **전체** | **93** | **379분** |

### Section 시간

| ACT | 승인된 Section 분배 |
|---|---|
| ACT 0 | 0A 5 · 0B 5 · 0C 4 · 0D 15 · 0E 5 · 0F 6 = 40분 |
| ACT 1 | 1A 7 · 1B 8 · 1C 10 · 1D 10 · 1E 6 · 1F 5 · 1H 8 · 1G 9 = 63분 |
| ACT 2 | 2A 5 · 2B 8 · 2C 5 · 2D 8 · 2E 12 · 2F 9 · 2G 18 · 2H 3 · 2I 13 = 81분 |
| ACT 3 | 3A 9 · 3B 5 · 3C 15 · 3D 13 · 3E 8 · 3F 8 · 3G 12 · 3H 5 · 3I 10 = 85분 |
| ACT 4 | 4A 4 · 4B 9 · 4C 8 · 4D 13 · 4E 11 · 4F 15 · 4G+4H 20 = 80분 |
| ACT 5 | 5A 15 · 5B 15 = 30분 |

### Delivery Mode 합계

| Mode | 승인 시간 |
|---|---:|
| Lecture | 143분 |
| Demo | 73분 |
| Case | 88분 |
| Reflection | 21분 |
| Transition | 22분 |
| Q&A | 32분 |
| **전체** | **379분** |

ACT별 Mode 대조:

| ACT | Lecture | Demo | Case | Reflection | Transition | Q&A | 합계 |
|---|---:|---:|---:|---:|---:|---:|---:|
| ACT 0 | 13 | 8 | 9 | 4 | 3 | 3 | 40 |
| ACT 1 | 26 | 8 | 18 | 4 | 3 | 4 | 63 |
| ACT 2 | 34 | 13 | 18 | 5 | 4 | 7 | 81 |
| ACT 3 | 33 | 20 | 20 | 3 | 2 | 7 | 85 |
| ACT 4 | 22 | 22 | 22 | 3 | 4 | 7 | 80 |
| ACT 5 | 15 | 2 | 1 | 2 | 6 | 4 | 30 |
| **합계** | **143** | **73** | **88** | **21** | **22** | **32** | **379** |

## Slide Map

DEC-0060은 기존90장의 내용·시간을 보존하면서 ACT2에 연구 분리4분, 의존성 답 회수4분, 성과 회수3분을 더한다. 기존 Section/Beat/Demo/Trial/State ID는 유지한다. 원래360분 및90장 통합·검증 기록은 당시 판본이며 현재 번호에는93장 이행표를 적용한다.

### ACT 0

#### S01 — AI에게 지금 무엇을 맡기고 있는가?

- **Slide ID:** S01
- **ACT:** ACT 0
- **Section:** 0A
- **Working Title:** AI에게 지금 무엇을 맡기고 있는가?
- **Primary Role:** 교육 질문 열기, 비평가적 자기 위치 확인
- **Audience Question:** “나는 지금 AI에게 무엇을 맡기고 있는가?”
- **Core Message:** 자기 AI 활용을 평가하지 않고, 현재 맡기는 업무 범위를 돌아본다.
- **Story Beat:** BEAT-001
- **Curriculum Trace:** ACT 0 — familiar chatbot workflow and starting reflection.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; 제품 기능 주장 없음
- **Visual Concept:** 같은 인물이 등장하는 세 교육용 삽화를 동등한 크기로 병렬 배치한다. “설명 받기 / 조사 맡기기 / 결과 확인”을 하나씩 짚고 최근 경험 하나를 떠올리게 한다. 숙련도 순서·필수 발전 단계로 연결하지 않으며 Prompt, Context, Harness, Loop라는 답은 아직 펼치지 않는다. DEC-0034.
- **Demo / Case Connection:** 시작 질문만 제시
- **Beginner Payoff:** 자신이 현재 익숙한 방식에서 출발해도 된다는 점을 확인한다.
- **Advanced Payoff:** 각자의 출발점이 다르더라도 한 Story 안에서 다음 문제를 따라간다.
- **C++ Vision Bridge:** 없음
- **Speaker Intent:** 1분 안에 세 장면을 각각 짧게 짚고, 청중에게 수준을 매기지 않은 채 개인 생각 시간 4분을 보존한다. AI 생성 교육용 삽화를 실제 제품 화면이나 관찰 결과로 설명하지 않는다.
- **Transition:** 작은 코드나 오류를 질문하는 친숙한 Workflow를 인정한다.
- **Estimated Time:** 5분
- **Delivery Mode Allocation:** Lecture 1분 + Reflection 4분 = 5분
- **Evidence / Decision References:** BEAT-001, CLM-0001, CLM-0002


#### S02 — 작은 질문에는 Chatbot이 유용하다

- **Slide ID:** S02
- **ACT:** ACT 0
- **Section:** 0B
- **Working Title:** 작은 질문에는 Chatbot이 유용하다
- **Primary Role:** 기존 Workflow 인정
- **Audience Question:** “코드 일부나 오류를 ChatGPT에 물어본 적이 있는가?”
- **Core Message:** 필요한 코드나 오류를 전달해 답을 받는 방식은 작은 질문에서 빠르고 유용할 수 있다.
- **Story Beat:** BEAT-001
- **Curriculum Trace:** ACT 0 — familiar chatbot workflow and starting reflection.
- **Evidence Type:** TEACHING_MODEL / CONCEPTUAL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; TEACHING_MODEL; 일반적인 활용 예시이며 제품 우열 주장 없음
- **Visual Concept:** `std::vector<int> a(3, 1);` → `1, 1, 1`(3개)와 `std::vector<int> b{3, 1};` → `3, 1`(2개)를 비교한다. 아래의 연결된 native 흐름은 `IDE: 코드 선택·복사 → Chatbot: 붙여넣고 질문 → IDE: 답 확인·적용`이다. 원소 도식은 의미 설명이며 실행 로그·실제 ChatGPT 응답이 아니다. DEC-0034.
- **Demo / Case Connection:** 짧은 오류 질문 사례
- **Beginner Payoff:** 자신의 익숙한 사용법이 교육의 출발점으로 인정된다.
- **Advanced Payoff:** 이 흐름에서 사람이 직접 선택하고 전달하는 Context를 알아차린다.
- **C++ Vision Bridge:** 일반적인 C++ 초기화 질문을 출발점으로 사용한다. Vision·특정 컴파일러/Windows 빌드·장비 실행을 추가하는 Demo는 아니다.
- **Speaker Intent:** 괄호와 중괄호로 달라지는 이 `std::vector<int>` 예제의 의미를 짚되 문법 강의로 확장하지 않는다. 작은 질문의 가치를 먼저 인정하고, 사람이 필요한 Context를 골라 전달한 뒤 답을 확인하는 흐름으로 연결한다. C++ 의미 근거는 Microsoft Learn의 vector constructors와 Initializers이며 실제 컴파일·실행을 했다고 표현하지 않는다.
- **Transition:** 질문이 여러 파일과 경계를 가로지르는 상황으로 확장한다.
- **Estimated Time:** 5분
- **Delivery Mode Allocation:** Lecture 5분 = 5분
- **Evidence / Decision References:** BEAT-001, CLM-0001, CLM-0002


#### S03 — 질문이 커지면 Context를 모으는 일이 생긴다

- **Slide ID:** S03
- **ACT:** ACT 0
- **Section:** 0C
- **Working Title:** 질문이 커지면 Context를 모으는 일이 생긴다
- **Primary Role:** Repository 범위 문제 제기
- **Audience Question:** “여러 파일에 걸친 질문을 하려면 무엇을 먼저 찾아야 할까?”
- **Core Message:** Repository 수준 질문에서는 사람이 관련 구현, 호출 경로, 테스트 결과와 명세서 등 필요한 정보를 찾아 대화에 옮기는 일이 생길 수 있다.
- **Story Beat:** BEAT-002
- **Curriculum Trace:** ACT 0 — project-level question and context collection friction.
- **Evidence Type:** TEACHING_MODEL / CONCEPTUAL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; TEACHING_MODEL; 특정 Trial에서 발생한 문제로 주장하지 않음
- **Visual Concept:** Visual Studio 사용자에게 익숙한 정보 범주를 2×3 병렬 native 도식으로 보여 준다: 테스트 탐색기 / 호출 스택 / 소스·참조 / 지역 변수·조사식 / 출력·로그 / 명세서(외부 문서 포함). “이 정보 하나하나가 Context다”로 묶는다. 실제 UI 캡처·조사 순서·필수 체크리스트가 아니며 아직 Agent 해결책은 표시하지 않는다. 종이 문서를 든 인물 삽화는 사용하지 않는다. DEC-0034.
- **Demo / Case Connection:** 다음 Demo의 문제 상황 설정
- **Beginner Payoff:** 질문이 커질 때 수작업으로 Context를 모으는 부담을 알아차린다.
- **Advanced Payoff:** 반복되는 수고가 코드 생성보다 Context 수집에서 발생할 수 있음을 본다.
- **C++ Vision Bridge:** C++/Visual Studio 사용자에게 익숙한 디버깅 정보 범주를 활용한다. 특정 메뉴·제품 버전·빌드·장비 조작이나 실제 C++ 실행을 입증하는 예시는 아니다.
- **Speaker Intent:** 익숙한 Chatbot 방식의 가치를 유지하면서, 이미 살펴보는 테스트·코드·런타임 값·명세서가 각각 Context가 됨을 드러낸다. 필요한 정보를 골라 모으는 Friction을 설명하며 여섯 범주를 모두 요구하거나 Agent 해결책을 먼저 공개하지 않는다.
- **Transition:** “파일명을 알려주지 않아도 Agent가 필요한 경로를 찾을까?”라는 Demo 질문으로 넘어간다.
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Case 4분 = 4분
- **Evidence / Decision References:** BEAT-002, CLM-0004, CLM-0009


#### S04 — 파일명을 주지 않으면 Agent는 어디부터 볼까?

- **Slide ID:** S04
- **ACT:** ACT 0
- **Section:** 0D
- **Working Title:** 파일명을 주지 않으면 Agent는 어디부터 볼까?
- **Primary Role:** Demo 전 관찰 기준 제시
- **Audience Question:** “Agent가 Test, 구현, 호출 경로를 어떻게 찾는가?”
- **Core Message:** Demo에서는 파일을 직접 지정하지 않았을 때의 Search → Read → Trace를 관찰한다.
- **Story Beat:** BEAT-003
- **Curriculum Trace:** ACT 0 — ChatGPT → Codex repository exploration.
- **Evidence Type:** OBSERVED_PRODUCT
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; FROZEN WITH SCOPE; REQUIRES PRODUCT CHECK — 현재 Live/Hybrid 제품 경로를 선택하는 경우; 현재 Codex Desktop·계정 동작은 **REQUIRES PRODUCT CHECK**. TRIAL-001은 Codex CLI 관찰만 뒷받침한다. 실제 요청 원문을 재구성한 입력창과 우측의 교육용 GoogleTest 가상 UI를 구분한다. 가상 UI의 5개 통과·1개 실패는 실제 Trial 결과가 아니다.
- **Visual Concept:** 좌측은 TRIAL-001 요청 원문을 일반 프롬프트 입력창 형태로 재구성한다. 우측은 `Read / Resize / Crop / Normalize / Statistics / Write` 중 Crop 하나가 실패하는 교육용 GoogleTest 가상 UI이며 `실제 TRIAL-001 아님`을 명시한다. 좌우를 실행 결과 화살표로 잇지 않는다. 아래에는 실패 테스트·관련 구현·호출 경로라는 세 관찰 항목을 유지하고, 실제 발견 파일과 원인은 S05에서 공개한다. DEC-0034.
- **Demo / Case Connection:** DEMO-01 setup. STATE-00 / TRIAL-001; 읽기 전용 질문
- **Beginner Payoff:** 무엇을 보고 판단하면 되는지 미리 안다.
- **Advanced Payoff:** 답의 품질만 보지 않고 Context를 찾는 과정도 관찰한다.
- **C++ Vision Bridge:** GoogleTest 형식은 C++ 청중을 위한 가상 설명 그림에만 사용한다. 실제 TRIAL-001은 Python unittest였으며 C++ 제품 State·실행·측정으로 전환하지 않는다.
- **Speaker Intent:** 먼저 실제 요청의 조건과 관찰 기준을 정한다. 입력창은 원문 재구성, GoogleTest는 별도 가상 UI임을 알리고, 실제 Trial의 결과·원인과 현재 제품 동작을 미리 단정하지 않는다.
- **Transition:** 실행 또는 준비된 캡처에서 발견된 파일과 경로를 보여준다.
- **Estimated Time:** 2분
- **Delivery Mode Allocation:** Lecture 2분 = 2분
- **Evidence / Decision References:** BEAT-003, DEMO-01, STATE-00, TRIAL-001, CLM-0002, CLM-0009, OQ-003, OQ-005


#### S05 — Agent가 Test와 호출 경로를 찾았다

- **Slide ID:** S05
- **ACT:** ACT 0
- **Section:** 0D
- **Working Title:** Agent가 Test와 호출 경로를 찾았다
- **Primary Role:** 관찰된 Demo 근거 제시
- **Audience Question:** “지정하지 않은 파일과 호출 경로를 실제로 찾아냈는가?”
- **Core Message:** TRIAL-001 한 번의 읽기 전용 CLI 조사에서 Agent가 실패 Test, 구현 파일, 계약과 호출 경로를 찾아냈다.
- **Story Beat:** BEAT-003
- **Curriculum Trace:** ACT 0 — ChatGPT → Codex repository exploration.
- **Evidence Type:** OBSERVED_PRODUCT
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; FROZEN WITH SCOPE; REQUIRES PRODUCT CHECK — 현재 Live/Hybrid 제품 경로를 선택하는 경우; 한 번의 Codex CLI 0.154.0 실행에 한정. Desktop·계정 동작이나 반복성을 입증하지 않는다.
- **Visual Concept:** 상단에서 “의도한 폭과 실제로 포함된 열 수가 달랐다”로 S02의 원소 수 질문을 회수한다. `crop(image, 1, 3)`의 끝 좌표 제외 명세와 원본 두 행 중 첫 행 `1, 2, 3, 4`만 발췌한 재구성을 비교한다. 기대 `2, 3`/폭 2와 구현 `2, 3, 4`/폭 3을 강조한다. `test_crop_excludes_end_coordinate`, `cli.main → process_image → crop`, `row[x_start : x_end + 1]`의 실제 근거를 유지한다. 새 실행이나 C++ 메모리 할당 사건이 아니다. DEC-0035.
- **Demo / Case Connection:** DEMO-01의 8분 Demo 구간. 실행 UI는 별도로 보여주며, 이 장에는 읽기 쉬운 증거 요약을 둔다.
- **Beginner Payoff:** 관련 파일을 모두 직접 대화창에 복사하지 않고 Repository 조사를 요청할 가능성을 본다.
- **Advanced Payoff:** 단일 실행에서 관찰한 탐색 결과와 일반적인 제품 보장을 구분한다.
- **C++ Vision Bridge:** S02의 두 유효한 `std::vector<int>` 초기화 표현과 의도한 원소 수·실제 포함 범위를 확인한다는 질문만 연결한다. 실제 관찰은 Python crop의 끝 좌표 포함 결함이며 C++ 메모리 할당·capacity·버퍼 오버런 또는 새 실행을 입증하지 않는다.
- **Speaker Intent:** Agent가 찾은 Test·소스·호출 경로를 읽게 하면서 폭 2/3의 차이를 한눈에 보이게 한다. “할당 길이가 잘못됐다”는 관찰로 바꾸지 않으며, 첫 행 발췌와 S02 연결이 각각 정적 재구성·교육용 해석임을 구분한다. 원인 설명과 코드 수정·검증도 별개로 유지한다.
- **Transition:** 무엇이 발견됐고 실행 환경에는 어떤 제한이 있었는지 구분한다.
- **Estimated Time:** 8분
- **Delivery Mode Allocation:** Demo 8분 (HYBRID) = 8분
- **Evidence / Decision References:** BEAT-003, DEMO-01, TRIAL-001, CLM-0002, CLM-0009, OQ-003, OQ-005


#### S06 — 관찰 결과와 실행 제한을 분리한다

- **Slide ID:** S06
- **ACT:** ACT 0
- **Section:** 0D
- **Working Title:** 관찰 결과와 실행 제한을 분리한다
- **Primary Role:** Demo 결과 해석 및 Evidence 경계
- **Audience Question:** “어떤 결과가 Repository 관찰이고, 어떤 결과가 실행 환경 제한인가?”
- **Core Message:** TRIAL-001은 Crop의 추가 열을 재현·설명했지만 코드는 수정하지 않았고, 임시 디렉터리를 만들지 못한 3건의 오류는 읽기 전용 환경 제한이었다.
- **Story Beat:** BEAT-003
- **Curriculum Trace:** ACT 0 — ChatGPT → Codex repository exploration.
- **Evidence Type:** OBSERVED_PRODUCT
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; FROZEN WITH SCOPE; REQUIRES PRODUCT CHECK — 현재 Live/Hybrid 제품 경로를 선택하는 경우; TRIAL-001 범위 내 관찰. 환경 오류를 Repository 또는 Crop 결함으로 분류하지 않는다.
- **Visual Concept:** 상단의 “Chatbot에 코드·명세만 골라 넣었다면?”은 교육용 가정이다. 좌측은 `코드 Context로 논의할 수 있는 부분 — 기대 폭 2 ↔ 포함 폭 3 / 명세·테스트·구현 비교 / TRIAL-001: 원인 설명·코드 미수정`, 우측은 `함께 전달하지 않은 실행 환경 — 읽기 전용·임시 디렉터리 제한 / 실행 로그·권한 정보도 필요 / 환경 오류 3건`으로 구분한다. “코드만 옮기면, 실행 환경의 단서는 빠진다”로 연결하되 실제 전체 기록 7개 통과 + crop 실패 1건 + 환경 오류 3건을 유지한다. 실제 Chatbot/Agent 비교 결과가 아니다. DEC-0035.
- **Demo / Case Connection:** DEMO-01의 `WHAT HAPPENED` 및 준비된 캡처 대안
- **Beginner Payoff:** 관찰된 결과와 실행 중 발생한 환경 문제를 혼동하지 않는다.
- **Advanced Payoff:** 유용한 조사 결과도 단일 실행·권한·환경의 범위 안에서 해석한다.
- **C++ Vision Bridge:** 없음
- **Speaker Intent:** 실제 Trial에서 확인한 코드 문제와 환경 제한을 먼저 구분하고, 코드·명세만 입력한 경우 빠지는 Context를 교육용 해석으로 설명한다. 환경 로그·권한 정보를 추가하면 Chatbot에도 분석 단서가 생길 수 있으므로 해결 불가능·제품 능력·Agent 우위를 단정하지 않는다. 이번 Agent도 권한 제한을 해제하거나 코드를 수정하지 않았다는 관찰 범위를 유지한다.
- **Transition:** Context를 찾는 주체가 바뀐 의미를 정리한다.
- **Estimated Time:** 5분
- **Delivery Mode Allocation:** Case 5분 = 5분
- **Evidence / Decision References:** BEAT-003, DEMO-01, TRIAL-001, CLM-0002, CLM-0009, OQ-003, OQ-005


#### S07 — 코드를 AI에게 가져가는 대신 AI를 Repository로 데려간다

- **Slide ID:** S07
- **ACT:** ACT 0
- **Section:** 0E
- **Working Title:** 코드를 AI에게 가져가는 대신 AI를 Repository로 데려간다
- **Primary Role:** Mental Shift 정리
- **Audience Question:** “Context 수집의 일부를 누가 맡을 수 있는가?”
- **Core Message:** Repository 조사는 개발자가 코드를 일일이 전달하는 대신 Agent가 사용 가능한 Context를 찾도록 할 수 있다. 연결·자료 전달 전 승인된 도구·계정·자료·접근 권한 범위를 먼저 확인한다. 회사별 실제 허용·금지 정책은 여기서 확정하지 않는다.
- **Story Beat:** BEAT-003
- **Curriculum Trace:** ACT 0 — ChatGPT → Codex repository exploration.
- **Evidence Type:** OBSERVED_PRODUCT / TEACHING_MODEL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; TEACHING_MODEL; 관찰은 CLI 한 번에 한정되며 제품의 보편적 성능 주장이 아님
- **Visual Concept:** `Bring code to AI → Bring AI to repository` 관계 비교를 유지한다. 작은 C++ Vision 인셋의 `large repository / modules / build config / tests / contracts`는 선택적 연결로 한정하고, 기존 재설명 시간을 줄여 도구·계정·자료·접근 권한의 사전 확인을 Notes에서 짧게 안내한다.
- **Demo / Case Connection:** DEMO-01 관찰 결과 회수
- **Beginner Payoff:** 관련 파일을 모두 복사하기 전에 Repository 조사를 요청해볼 수 있다.
- **Advanced Payoff:** Context 수집 책임의 이동과 목표 설정 책임을 구분한다.
- **C++ Vision Bridge:** 있음 — 독립 장이 아니라 같은 Mental Shift의 인셋
- **Speaker Intent:** 관찰한 변화가 “AI가 더 잘 코딩한다”가 아니라 “누가 Context를 찾는가”임을 강조한다. 2분 안에서 Mental Shift와 접근 범위 확인을 짧게 마치고, 실제로 어느 제품 경로에서 Repository를 여는지 S08로 이어 간다. 계정·자료·권한 확인을 생략하지 않는다.
- **Transition:** “그렇다면 이 교육에서는 어디에서 Repository를 열까요?”라고 새 S08의 Codex 진입 경로를 연다.
- **Estimated Time:** 2분
- **Delivery Mode Allocation:** Lecture 2분 = 2분
- **Evidence / Decision References:** BEAT-003, DEMO-01, TRIAL-001, CLM-0002, CLM-0009, OQ-003, OQ-005


#### S08 — Repository 작업은 Codex에서 시작한다

- **Slide ID:** S08
- **ACT:** ACT 0
- **Section:** 0E
- **Working Title:** Repository 작업은 Codex에서 시작한다
- **Primary Role:** Repository 조사로 들어가는 실제 제품 진입 경로 안내
- **Audience Question:** “ChatGPT 데스크톱 앱에서 Repository 작업은 어디서 시작할까?”
- **Core Message:** 이 교육의 Repository 개발 작업은 ChatGPT 데스크톱 앱 좌측 상단의 ChatGPT 메뉴에서 Codex를 선택하고, 프로젝트 Repository 폴더를 연 뒤 조사를 요청하는 경로로 시작한다. 이는 교육에서 선택한 개발 경로이며 다른 ChatGPT 기능의 파일 접근 가능성을 부정하지 않는다.
- **Story Beat:** BEAT-003
- **Curriculum Trace:** ACT 0 / 0E — repository exploration의 Mental Shift를 Codex 진입 경로와 연결.
- **Evidence Type:** RESEARCH / TEACHING_MODEL
- **Claim Status:** FROZEN WITH SCOPE — 2026-10-21 OpenAI 공식 Quickstart/App 문서의 Codex 진입 안내; REQUIRES PRODUCT CHECK — 좌측 상단 위치는 사용자 제공 UI 명세이고 현재 로컬 앱 UI·발표 계정·Windows의 실제 동작은 UNVERIFIED.
- **Visual Concept:** `ChatGPT 메뉴 → Codex 선택 → Repository 폴더 선택`의 3단계 native 흐름과 “조사를 요청한다”는 짧은 다음 행동을 보여 준다. 메뉴는 공식 안내와 사용자 UI 명세를 바탕으로 재구성한 도식이며 실제 Screenshot이 아니다. ChatGPT와 Codex 선택지를 구분하되 계정의 모든 기능·메뉴를 복제하지 않는다.
- **Demo / Case Connection:** DEMO-01을 여는 제품 경로 설명; 새 Demo·Trial·Git State를 만들거나 과거 CLI 결과를 Desktop 증거로 사용하지 않음.
- **Beginner Payoff:** Chatbot 대화에서 Repository 개발 작업으로 이동할 때 선택할 입구를 안다.
- **Advanced Payoff:** 기능 설명 문서와 계정·제품 표면에서 실제 확인해야 하는 진입 동작을 구분한다.
- **C++ Vision Bridge:** 없음 — 특정 IDE·CMake·컴파일러 조작으로 확장하지 않음.
- **Speaker Intent:** 1분 안에 ChatGPT 메뉴의 Codex 선택과 Repository 폴더 연결을 짚고 조사 요청으로 끝낸다. 공식 문서 확인과 실제 화면 확인을 구분하고, “Repository 접근은 오직 Codex만 가능하다”는 보편 단정을 하지 않는다. ChatGPT Work도 파일 접근을 제공할 수 있으나 이 장의 경로는 Codex다.
- **Transition:** “이제 사람과 Agent가 같은 Repository를 볼 수 있습니다. 그중 무엇을 함께 보고, 무엇을 사람이 최종 결정해야 할까요?”라고 S09를 연다.
- **Estimated Time:** 1분
- **Delivery Mode Allocation:** Lecture 1분 = 1분
- **Evidence / Decision References:** BEAT-003, DEC-0036, CLM-0031, SRC-0228, SRC-0229; OpenAI [Quickstart](https://learn.chatgpt.com/docs/quickstart?setup=app), [App](https://learn.chatgpt.com/docs/app), 2026-10-21 확인. 현재 제품·계정·Windows 재확인 Gate 유지.


#### S09 — Repository 접근과 Task 의도는 별개다

- **Slide ID:** S09
- **ACT:** ACT 0
- **Section:** 0E
- **Working Title:** Repository 접근과 Task 의도는 별개다
- **Primary Role:** 초급자·숙련자 Insight 연결
- **Audience Question:** “Repository를 볼 수 있으면 원하는 작업도 알게 되는가?”
- **Core Message:** 사람과 AI Agent는 허용된 Repository의 코드·명세·테스트를 함께 살펴볼 수 있다. 원하는 결과, 허용 범위와 완료 수락의 최종 결정·책임은 사람에게 있으며 AI는 조사와 제안을 도울 수 있다.
- **Story Beat:** BEAT-003의 다음 Friction
- **Curriculum Trace:** ACT 0 — ChatGPT → Codex repository exploration.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; TEACHING_MODEL; 과정의 Mental Model이며 모든 제품·환경의 기능 주장 아님
- **Visual Concept:** `Repository Access ≠ Task Intent` 아래 두 영역을 병렬 배치한다. `볼 수 있는 것 — 코드·명세·테스트`에는 사람+AI Agent 아이콘을, `정해야 하는 것 — 목표·범위·완료 수락`에는 사람 아이콘과 “최종 결정·책임”을 표시한다. AI의 제안 가능성을 작은 보조 문구로 남겨 AI가 추론할 수 없다는 의미가 되지 않게 한다. 아이콘은 교육용 표현이며 실제 제품 UI가 아니다.
- **Demo / Case Connection:** DEMO-01 성공 뒤 남는 문제
- **Beginner Payoff:** Repository 접근을 주더라도 무엇을 원하는지 설명해야 함을 이해한다.
- **Advanced Payoff:** Context 탐색과 목표·판단 책임을 서로 다른 역할로 본다.
- **C++ Vision Bridge:** 없음
- **Speaker Intent:** 사람과 Agent가 함께 볼 수 있는 정보와 사람이 최종 승인·책임지는 판단을 아이콘으로 구분한다. AI도 목표·범위·검증안을 제안할 수 있음을 인정하되 의뢰자의 의도와 완료 수락이 자동 확정된다고 말하지 않는다. S08의 제품 진입과 S10의 개인 적용 질문 사이에서 책임 경계만 2분 안에 정리한다.
- **Transition:** “이 구분을 여러분이 지금 맡기고 싶은 일에 대입해 보겠습니다.”라고 S10의 개인 적용 질문을 연다.
- **Estimated Time:** 2분
- **Delivery Mode Allocation:** Lecture 2분 = 2분
- **Evidence / Decision References:** BEAT-003, DEMO-01, TRIAL-001, CLM-0002, CLM-0009, OQ-003, OQ-005


#### S10 — Repository를 보면 내가 원하는 것까지 알까?

- **Slide ID:** S10
- **ACT:** ACT 0
- **Section:** 0F
- **Working Title:** Repository를 보면 내가 원하는 것까지 알까?
- **Primary Role:** Discussion 및 ACT 전환
- **Audience Question:** “Repository를 볼 수 있으면 내가 원하는 것까지 알 수 있을까?”
- **Core Message:** Repository를 볼 수 있다는 사실만으로 Task의 의도가 정해지지는 않는다.
- **Story Beat:** BEAT-003 → BEAT-004 전환
- **Curriculum Trace:** ACT 0 — ChatGPT → Codex repository exploration.; ACT 1 — same model, underspecified request.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; TEACHING_MODEL; DEC-0037 제조 검사 Task 가정은 실제 저장소 실행 순서·미구현 상태·검증 결과가 아님
- **Visual Concept:** 제조 라인 검사장비로 확장하는 교육용 검사 Task를 입력 이미지 → ROI crop → 밝기 정규화(Normalize) → 크기 맞춤(Resize) → 통계·특징(Statistics) → 양불 판정으로 그린다. 입력·기존 crop는 실선, 후속 검사 단계는 점선이며 “검사 흐름으로 추가 정의·연결할 범위”로 표시한다. crop는 “기존 구현·조사한 범위”로 제한하고 정상 완료·검증 완료를 표시하지 않는다. 마지막 판정은 ? / 기준 미정으로 열어 둔다. 기존 질문 두 개를 하단에 크게 유지한다. 실제 저장소에는 후속 함수도 존재하므로 이 도식은 실제 실행 순서나 함수 미구현 상태의 재현이 아니다. DEC-0037.
- **Demo / Case Connection:** DEMO-01 후속 질문; 제조 검사장비로 확장하는 가상의 Task 맥락. 실제 Product State·Trial·양불 판정 결과를 추가하지 않는다.
- **Beginner Payoff:** Agent에게 맡길 때 원하는 결과를 말해야 한다는 문제를 발견한다.
- **Advanced Payoff:** 정보 접근성과 Task specification을 분리해 생각한다.
- **C++ Vision Bridge:** 없음
- **Speaker Intent:** 실선 crop와 점선의 후속 검사 범위를 약 1분 안에 짚어 원하는 검사 작업을 떠올리게 한다. 알고리즘 강의·완성된 요청·판정 기준을 먼저 제공하지 않는다. Normalize/Resize/Statistics는 뒤 ACT의 작업과 연결되는 배경이며 이 장에서 성능 개선이나 구현 완료를 주장하지 않는다.
- **Transition:** “방금 떠올린 원하는 결과를 작업 요청으로 전달하려면 무엇이 더 필요할까요?”라는 질문으로 `Chatbot → Prompt`를 handoff한다. ACT 1의 내부 구조는 소개하지 않는다.
- **Estimated Time:** 6분
- **Delivery Mode Allocation:** Transition 3분 + Q&A 3분 = 6분
- **Evidence / Decision References:** BEAT-003, BEAT-004, DEMO-01, CLM-0002, CLM-0009, OQ-003, OQ-005, DEC-0037; DEMO_REPOSITORY_SPEC의 초기 구현 범위와 실제 pipeline.py/statistics.py로 표현 경계 대조


### ACT 1

#### S11 — Task에는 무엇이 아직 정해지지 않았을까?

- **Slide ID:** S11
- **ACT:** ACT 1
- **Section:** 1A
- **Working Title:** Task에는 무엇이 아직 정해지지 않았을까?
- **Primary Role:** ACT 전환 회수, 새 문제 구체화
- **Audience Question:** “같은 Repository를 보더라도 Agent가 원하는 결과까지 자동으로 알 수 있을까?”
- **Core Message:** 코드가 보이더라도 무엇을 바꾸고, 무엇을 보존하며, 언제 끝났다고 판단할지는 요청에 명시되어야 한다.
- **Story Beat:** BEAT-004
- **Curriculum Trace:** ACT 1 — same model, underspecified request.
- **Evidence Type:** TEACHING_MODEL / CONCEPTUAL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; TEACHING_MODEL / CONCEPTUAL. Agent의 실제 실패·정지·반복 실행·토큰/시간 실측·기하급수 법칙을 주장하지 않는다.
- **Visual Concept:** “filter 성능 개선해줘”를 native Prompt 입력창으로 표시한다. 동일 AI Agent가 남은 선택을 검토하는 AI 생성 교육용 삽화를 놓고 우측의 바꿀 것/보존할 것/완료 근거 세 질문은 세로 리스트로 유지한다. 하단의 토큰 소모·작업 시간 곡선과 끝 화살표는 편집 가능한 그래프 객체 대신 두 개의 투명 PNG 삽화로 삽입한다. 각 텍스트 label과 기존 배치는 유지한다. 이미지는 추가 탐색·재시도 비용을 설명하는 정성 개념도다. 수치·배율·함수·측정 축을 넣지 않고 기하급수적 증가 법칙이나 실제 Agent 정지를 주장하지 않는다. DEC-0038, DEC-0040.
- **Demo / Case Connection:** filter 성능 요청의 미정 결정을 출발점으로, 같은 요청 모호함을 친숙한 crop 동작 명세로 좁혀 본다. 성능 비교 실험을 새로 시작하는 것이 아니다.
- **Beginner Payoff:** Repository 접근이 명확한 결과 요청을 대신하지 않는다는 점을 가져간다.
- **Advanced Payoff:** 코드 접근, Task 목표, 제약, 완료 증거를 구분한다.
- **C++ Vision Bridge:** 없음
- **Speaker Intent:** ACT 1의 핵심을 원하는 변화·지킬 조건·완료 근거를 요청에 담는 것으로 고정한다. 미정 세 질문을 짚고, 같은 모호함을 이미 본 crop 사례로 구체화한다고 전환 이유를 밝힌다. 기존 Agent·토큰/시간 PNG는 정성 교육 삽화이며 측정·절감·기하급수 법칙·실제 정지 기록이 아니다.
- **Transition:** “성능 요청에서 남은 결정을, 앞서 본 crop 사례로 좁혀 보겠습니다. 같은 모호함을 구체적으로 보기 위한 예시 전환입니다.”라고 S12로 이동한다.
- **Estimated Time:** 7분
- **Delivery Mode Allocation:** Case 7분 = 7분
- **Evidence / Decision References:** BEAT-004, TRIAL-001 callback only, CLM-0002, DEC-0038, DEC-0040, DEC-0042


#### S12 — 요청만으로는 의도가 보이지 않는다

- **Slide ID:** S12
- **ACT:** ACT 1
- **Section:** 1B
- **Working Title:** 요청만으로는 의도가 보이지 않는다
- **Primary Role:** 의도가 빠진 요청을 문제로 드러낸다. 요청한 개발자를 조롱하지 않는다.
- **Audience Question:** “Agent 입장에서 무엇을 결정해야 할까?”
- **Core Message:** Repository를 볼 수 있어도 바꿀 범위와 완료 조건까지 알 수 있는 것은 아니다.
- **Story Beat:** BEAT-004 — Repository access does not convey intent
- **Curriculum Trace:** ACT 1 — same model, underspecified request.
- **Evidence Type:** TEACHING_MODEL / CONCEPTUAL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; TEACHING_MODEL / CONCEPTUAL. 평행 시간선은 가능한 해석의 교육용 도식이며 실제 반복 실행 결과가 아니다.
- **Visual Concept:** “crop test 고쳐줘”를 Prompt 입력창으로 표시한다. 동일 AI Agent에서 가능한 해석의 평행 시간선 세 개가 분기한다. 우측 세로 행은 “테스트를 바꿀까?”, “구현을 바꿀까?”, “먼저 물어볼까?”이며 이는 예시 선택지다. 하단의 목표의 세부/보존 조건/수정 범위/확인 근거/완료 조건은 아직 빈 정보로 유지한다. 실제 반복 실행 기록·확률·분산 측정처럼 표현하지 않는다. DEC-0038.
- **Demo / Case Connection:** 앞서 조사한 crop 사례에 맞춘 교육용 요청이다. S11의 성능 목표를 실험하거나 실제 TRIAL-002 요청으로 바꾸지 않는다.
- **Beginner Payoff:** 요청에서 무엇이 빠져 있는지 볼 수 있다.
- **Advanced Payoff:** 저장소 접근 권한과 작업 의도 전달은 별개의 문제임을 확인한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** S11과 다른 예시를 갑자기 시작하지 않고 같은 요청 모호함을 crop에서 확인한다고 회수한다. 세 병렬 경로는 미정 의도의 가능한 해석이며 실제 반복 실험·동시 Subagent·분기 확률이 아니다.
- **Transition:** “이 미정 정보를 요청에 담으면, 어떤 작업 경로를 원한다는 뜻인지 더 분명해질까요?”라고 S13의 교육용 구체화 예시로 이동한다.
- **Estimated Time:** 2분
- **Delivery Mode Allocation:** Case 2분 = 2분
- **Evidence / Decision References:** BEAT-004, CLM-0002, DEC-0038, DEC-0042


#### S13 — 원하는 작업 경로를 Prompt에 담는다

- **Slide ID:** S13
- **ACT:** ACT 1
- **Section:** 1B
- **Working Title:** 원하는 작업 경로를 Prompt에 담는다
- **Primary Role:** 모호한 요청에 정보를 더해 원하는 해석을 좁히는 구체 예시
- **Audience Question:** “앞의 다섯 정보를 함께 전달하면, 어떤 경로를 원했는지 더 분명해질까?”
- **Core Message:** 목표·보존 조건·수정 범위·확인 근거·완료 조건을 명시하면 사람이 원하는 작업 경로를 구체화할 수 있다. 실제 실행의 결정성·정확성은 별도로 검증한다.
- **Story Beat:** BEAT-004
- **Curriculum Trace:** ACT 1 — underspecified request → explicit intended path; next generalization and Task Specification.
- **Evidence Type:** TEACHING_MODEL / CONCEPTUAL
- **Claim Status:** FROZEN — 사용자 승인 교육용 예시. 목표 경로의 시각적 선택은 실제 실행 결과·성공·결정성 보장이 아니다.
- **Visual Concept:** 기존 Prompt 입력창·동일 Agent·세 경로를 유지한다. 목표/보존/범위/확인/완료 정보를 채우고 사람이 의도한 구현 수정 경로를 강조한다. 확인 항목은 crop 관련 테스트만 실행·프로젝트 전체 테스트 실행·CLI 샘플 실행 확인·변경 내용 확인으로 풀어 설명하며 화면 공간에 맞춰 문장을 나눈다. 실제 선택·성공·정확성·결정성을 보장하는 그림이 아니다.
- **Demo / Case Connection:** 기존 crop 계약·TRIAL-002를 떠올리는 교육용 요청 예시다. 실제 Trial Prompt나 재실행이 아니며 관찰 근거는 이후 Demo 구간에서 구분한다.
- **Beginner Payoff:** 빠진 정보를 전달하는 것이 원하는 작업을 가리키는 데 어떤 역할을 하는지 볼 수 있다.
- **Advanced Payoff:** 의도된 경로의 명시와 실행의 결정성·검증된 결과를 분리한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** 구체 요청의 확인·보고 사항도 Prompt에 담는 내용으로 읽는다. 첫 확인 용어를 쉬운 말로 설명한 뒤 S14는 다른 작업에서 사람이 답할 질문, S15는 다섯 항목, S16은 요청 문장 속 위치로 역할을 나눠 반복을 줄인다.
- **Transition:** “이제 답을 다시 읽기보다, 다른 요청에서도 개발자가 먼저 결정할 질문을 정리해 보겠습니다.”라고 S14로 연결한다.
- **Estimated Time:** 2분
- **Delivery Mode Allocation:** Case 2분 = 2분
- **Evidence / Decision References:** BEAT-004, CLM-0002, DEC-0038; crop 명세는 기존 TRIAL-002와 일치하는 교육용 예시, DEC-0042


#### S14 — 개발자가 정해야 하는 경계

- **Slide ID:** S14
- **ACT:** ACT 1
- **Section:** 1B
- **Working Title:** 개발자가 정해야 하는 경계
- **Primary Role:** 모호한 요청에 남은 결정을 질문 형태로 드러낸다.
- **Audience Question:** “다른 요청을 보내기 전, 개발자인 나는 무엇을 결정해야 할까?”
- **Core Message:** Prompt의 실용적 가치는 문장 장식보다 Task ambiguity reduction에 있다.
- **Story Beat:** BEAT-004
- **Curriculum Trace:** ACT 1 — same model, underspecified request.
- **Evidence Type:** TEACHING_MODEL / CONCEPTUAL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; TEACHING_MODEL; CONCEPTUAL. 하나의 요청이 특정 실패를 반드시 만든다고 단정하지 않는다.
- **Visual Concept:** 기존 다섯 질문 배열을 유지하되, S13의 crop 답을 다시 읽지 않고 다른 요청을 보내기 전 개발자가 결정할 목표·보존·허용 범위·근거·완료 기준으로 회수한다.
- **Demo / Case Connection:** S12의 모호한 요청과 새 S13의 구체 예시에서 선택한 정보를 다섯 일반 질문으로 확장한다.
- **Beginner Payoff:** 다른 작업의 구체적인 답을 정하기 전에 확인할 일반 질문을 얻는다.
- **Advanced Payoff:** 작업 경계와 완료 증거를 어디까지 고정할지 본다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** 원하는 변화·우선순위·제약·완료 판단은 사람이 정하고, 저장소 구현·테스트 위치·현재 동작 같은 사실은 조사하도록 맡길 수 있음을 구분한다. 저장소에서 알 수 없는 외부 요구는 제공하되 모든 Context를 직접 작성하라는 인상을 피한다. Case3분과 사적 Reflection1분을 유지한다.
- **Transition:** “사람이 정할 답과 저장소에서 조사할 사실을 구분해, 다섯 항목의 작업 요청으로 정리해 보겠습니다.”라고 S15로 이동한다.
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Case 3분 + Reflection 1분 = 4분
- **Evidence / Decision References:** BEAT-004, CLM-0002, DEC-0042


#### S15 — Task Specification의 다섯 책임

- **Slide ID:** S15
- **ACT:** ACT 1
- **Section:** 1C
- **Working Title:** Task Specification의 다섯 책임
- **Primary Role:** 과정에서 사용할 Task Specification 모델을 소개한다.
- **Audience Question:** “사람이 정할 답과 저장소에서 조사할 사실을 요청에 어떻게 담을까?”
- **Core Message:** Goal, Context, Constraints, Process, Verification은 작업을 구체화하는 교육용 틀이다.
- **Story Beat:** BEAT-005 — The task becomes a specification
- **Curriculum Trace:** ACT 1 — Practical Prompt Checklist and Before/After.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; TEACHING_MODEL; CONCEPTUAL. 공식 OpenAI 공식이나 제품 기능으로 표현하지 않는다.
- **Visual Concept:** 기존 하나의 Task Specification 안의 Goal / Context / Constraints / Process / Verification 다섯 행을 유지한다. Context는 관련 사실·참고 위치와 저장소에서 조사할 내용을, Process와 Verification은 요청에 담을 진행·확인·보고 조건을 뜻하도록 짚는다.
- **Demo / Case Connection:** 같은 crop task를 예로 삼되, 이 장에서는 항목의 역할만 보여준다.
- **Beginner Payoff:** 요청에 담을 내용을 순서 있게 떠올릴 수 있다.
- **Advanced Payoff:** Agent에게 맡길 판단과 개발자가 고정할 판단을 구별한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** 새 기법이나 항목 암기 수업이 아니라 개발자가 정한 정보를 요청으로 정리하는 틀이다. 사람이 정할 목표·우선순위·제약·완료 근거와 Agent가 저장소에서 조사할 사실을 구분하고, S16에서는 실제 문장의 위치만 확인한다.
- **Transition:** “이 다섯 항목이 실제 요청 문장의 어디에 들어가는지 보겠습니다.”라고 S16의 교육용 요청 예시로 이동한다.
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Lecture 4분 = 4분
- **Evidence / Decision References:** BEAT-005, CLM-0029, OQ-001, OQ-007, DEC-0042


#### S16 — 더 긴 Prompt보다 분명한 경계

- **Slide ID:** S16
- **ACT:** ACT 1
- **Section:** 1C + 1F 통합
- **Working Title:** 더 긴 Prompt보다 분명한 경계
- **Primary Role:** 약한 요청과 구조화된 요청을 간결하게 비교한다.
- **Audience Question:** “다섯 항목은 구체적인 요청 문장의 어디에서 드러나는가?”
- **Core Message:** 유용성은 Prompt의 길이보다 Goal과 제약, 과정, 검증 경계가 분명한 데서 나온다. 기존 crop 계약을 4열 입력·crop 1 3·원본 열 1·2/출력 폭 2의 구체 완료 조건으로 연결한다.
- **Story Beat:** BEAT-005
- **Curriculum Trace:** ACT 1 — Practical Prompt Checklist and Before/After.
- **Evidence Type:** TEACHING_MODEL / CONCEPTUAL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; TEACHING_MODEL; REQUIRES PRODUCT CHECK — 구체적 Windows·shell·IDE·hardware 지시를 추가하는 경우; CONCEPTUAL. TRIAL-002가 약한 Prompt 대비 우월성을 실험했다는 뜻은 아니다.
- **Visual Concept:** 짧은 요청과 교육용 구체 요청의 Before/After를 유지하고 Goal·Context·Constraints·Process·Verification이 실제 문장 어디에서 드러나는지 대응시킨다. 저장소의 실패 테스트·호출 경로는 조사하도록 요청하고, 끝 좌표 제외·허용 변경·확인할 기대 열/폭은 명시한다. 확인 행은 관련 테스트·프로젝트 전체 테스트·가능한 CLI 샘플 실행·변경 내용 확인으로 풀어 쓴다. 4열 입력·crop1 3·원본 열1·2/폭2의 기존 완료 조건을 유지하며 실제 TRIAL-002 Prompt 원문으로 표현하지 않는다.
- **Demo / Case Connection:** 실무 적용 예시. TRIAL-002 전체 Prompt를 작은 글씨로 싣지 않는다.
- **Beginner Payoff:** 바로 재사용할 수 있는 요청 구성 원리를 본다.
- **Advanced Payoff:** 작업 범위, 사전 계획, 허용된 변경을 검토 가능한 경계로 다룬다.
- **C++ Vision Bridge:** 짧은 inset으로 Release build, public API/ABI, hardware constraint, test/benchmark 예를 든다. 도구 목록 강의는 하지 않는다.
- **Speaker Intent:** S13의 답과 S15 항목 정의를 반복하기보다 요청 문장의 정보 위치를 짚는다. 조사 순서와 확인·보고 조건도 Prompt에 담을 내용이다. 저장소의 사실을 직접 전부 복사하지 않고 조사 대상을 가리킬 수 있음을 보인다. Lecture6분·Case3분을 유지하고 S17에서 교육용 예시와 실제 요청 발췌를 명확히 구분한다.
- **Transition:** “여기까지는 교육용 요청 예시였습니다. 이제 실제 기록에서는 어떤 지시를 전달했고, 그 지시와 작업 과정이 어떻게 연결됐는지 보겠습니다.”라고 S17의 TRIAL-002 실제 Prompt 발췌·번역으로 이동한다.
- **Estimated Time:** 9분
- **Delivery Mode Allocation:** Lecture 6분 + Case 3분 = 9분
- **Evidence / Decision References:** BEAT-005, TRIAL-002, CLM-0029, OQ-001, OQ-007, DEC-0042


#### S17 — 요청한 과정은 기록에도 남았을까?

- **Slide ID:** S17
- **ACT:** ACT 1
- **Section:** 1D
- **Working Title:** 요청한 과정은 기록에도 남았을까?
- **Primary Role:** 실제 요청 문장과 관찰된 수정 전 행동을 세 쌍으로 대조하고 S18·S19의 결과 확인을 준비한다.
- **Audience Question:** “실제로 요청한 재현·조사·수정 전 계획은 기록에 어떻게 남았을까?”
- **Core Message:** 이 실행의 과정 지시를 실패 재현, 제품 호출 경로 확인, 파일 변경보다 앞선 계획 보고의 관찰 기록과 대조할 수 있다.
- **Story Beat:** BEAT-006 — Investigate before changing code
- **Curriculum Trace:** ACT 1 — Investigation-first workflow and Prompt's value.
- **Evidence Type:** OBSERVED_PRODUCT
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; FROZEN WITH SCOPE; OBSERVED PRODUCT — Codex CLI의 단일 TRIAL-002 실행에 한정한다.
- **Visual Concept:** 좌측 실제 Prompt의 핵심 과정 지시 발췌·번역과 우측 관찰 기록 요약을 01–03의 같은 번호·행으로 짝짓는다. 우측에는 재현된 crop 테스트명, 확인한 제품 호출 경로, 파일 변경 이벤트보다 앞선 계획 보고를 표시한다. 테스트명·호출 기호는 TRIAL-001/STATE-00 코드와 대조한 대상 식별자이며 TRIAL-002 원문 로그 인용이 아니다. 04 최소 수정 내용은 S18, 05 확인·보고 결과는 S19라는 하단 연결만 남긴다. 가짜 명령·실패 출력·계획 발언을 만들지 않고 실제 diff·너비·통과 수치는 반복하지 않는다.
- **Demo / Case Connection:** DEMO-05의 도입에서 실제 TRIAL-002 요청과 관찰된 수정 전 과정을 대조한다. 관찰 요약은 DEMO_MATRIX의 Investigation and visible plan checkpoint를 따른다. S18은 실제 변경, S19는 실제 검증 결과를 이어 확인한다.
- **Beginner Payoff:** 요청에 적은 작업 방식을 실제 외부 행동 기록에서 확인할 수 있음을 본다.
- **Advanced Payoff:** 요청·관찰 요약·대상 코드 식별자와 명령 원문·실행 출력의 근거 수준을 구분한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** 01 재현 요청과 실패 테스트 재현 기록, 02 조사 요청과 제품 호출 경로 확인, 03 편집 전 계획 요청과 파일 변경 전 계획 보고를 대응시킨다. 우측은 관찰 요약이며 원시 CLI 로그·실제 계획 문장 원문이 아님을 밝힌다. 구현 diff·너비 변화·테스트 통과 수치는 S18·S19에 남기고, 같은 요청이 모든 실행에서 준수되거나 Prompt가 단독 원인이라고 설명하지 않는다.
- **Transition:** “요청한 과정이 기록에 남은 것을 확인했습니다. 이 조사와 계획 뒤 실제로 무엇을 바꿨는지 04 최소 수정 내용을 보겠습니다.”라고 S18로 이동한다. 05 확인·보고 결과는 S19에서 확인한다.
- **Estimated Time:** 2분
- **Delivery Mode Allocation:** Lecture 2분 = 2분
- **Evidence / Decision References:** BEAT-006, TRIAL-002, TRIAL-001, STATE-00, INV-MATURITY-011, DEC-0039, DEC-0042, DEC-0044


#### S18 — 조사에서 한 줄 변경까지

- **Slide ID:** S18
- **ACT:** ACT 1
- **Section:** 1D
- **Working Title:** 조사에서 한 줄 변경까지
- **Primary Role:** 조사 결과가 수정으로 이어진 흐름을 요약한다.
- **Audience Question:** “요청한 조사·보존 조건·최소 변경은 실제 diff에 어떻게 드러났을까?”
- **Core Message:** failing test와 호출 경로를 확인한 뒤, half-open 범위 계약을 보존하는 최소 변경을 했다.
- **Story Beat:** BEAT-006
- **Curriculum Trace:** ACT 1 — Investigation-first workflow and Prompt's value.
- **Evidence Type:** OBSERVED_PRODUCT
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; FROZEN WITH SCOPE; OBSERVED PRODUCT — 기록된 단일 CLI 실행에 한정한다.
- **Visual Concept:** 기존 crop Before/After 한 줄 diff와 너비3에서2의 변화를 유지한다. S17의 조사·수정 전 계획 및 끝 좌표 제외 보존 조건을 회수하고 실제 최소 변경이 요청 범위에 맞는지 대조한다.
- **Demo / Case Connection:** Trial 기록에서 재현, 조사, edit 전 계획, 변경 한 줄만 추린다.
- **Beginner Payoff:** 코드를 바꾸기 전에 원인과 기대 동작을 대조하는 이유를 본다.
- **Advanced Payoff:** 명시된 public contract와 diff 범위가 맞는지 검토한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** 실패 테스트·호출 경로 조사, 수정 전 계획, 명세 보존·최소 변경이라는 실제 요청과 실제 diff의 연결을 강조한다. 독립적인 디버깅·수정 절차 강의로 확장하지 않으며 Prompt 단독 인과성을 주장하지 않는다.
- **Transition:** “요청한 최소 수정까지 확인했습니다. 이제 요청에 적은 05 확인·보고가 어떤 기록으로 남았는지 보겠습니다.”라고 S19로 이동한다.
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Demo 4분 (CAPTURED) = 4분
- **Evidence / Decision References:** BEAT-006, TRIAL-002, INV-MATURITY-011, DEC-0039, DEC-0042


#### S19 — 변경 결과와 확인 증거

- **Slide ID:** S19
- **ACT:** ACT 1
- **Section:** 1D
- **Working Title:** 변경 결과와 확인 증거
- **Primary Role:** TRIAL-002의 검증 결과를 한 화면에서 확인한다.
- **Audience Question:** “요청한 확인·보고 사항은 어떤 검증 기록으로 남았을까?”
- **Core Message:** 이 사례의 결과는 생성된 코드뿐 아니라 명시된 검증과 diff 확인을 거친 변경이다.
- **Story Beat:** BEAT-007 — A clear Prompt succeeds on its own; INV-VERIFY-001
- **Curriculum Trace:** ACT 1 — Prompt Engineering Success and its transition to recurring project context.
- **Evidence Type:** OBSERVED_PRODUCT
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; FROZEN WITH SCOPE; OBSERVED PRODUCT — 한 번의 Codex CLI 실행 결과다.
- **Visual Concept:** 기존 동작/실행/범위의 세 묶음과 관련 테스트3/3·전체11/11·CLI PASS·한 파일/한 줄·diff 확인 수치를 유지한다. 각 묶음을 S17의 확인·보고 지시에 대응시킨다. 실제 집중 실행은 test_transform.py 묶음으로 resize 보존 테스트도 포함하므로 crop 테스트만3개로 좁히지 않는다. 영어 명칭은 쉬운 설명 뒤에 두며 원자료 명령과 결과는 그대로 유지한다.
- **Demo / Case Connection:** Trial의 실제 기록값.
- **Beginner Payoff:** “완료”를 주장할 때 결과와 확인 증거가 함께 필요함을 본다.
- **Advanced Payoff:** 각 증거를 해당 실행 범위에 한정해 평가한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** 테스트 용어와 결과를 별도로 나열하지 않고, 요청한 관련 테스트 묶음·프로젝트 전체 테스트·CLI 샘플 실행·변경 내용 확인이 기록에 어떻게 남았는지 본다. 성능·총 토큰·시간 개선 근거로 바꾸지 않고 미확인 사항과 사람의 완료 판단으로 연결한다.
- **Transition:** “이 확인 결과와 아직 모르는 점을 받아야 사람이 완료 여부를 판단할 수 있습니다. 무엇을 보고해 달라고 요청해야 할까요?”라고 S20으로 연결한다.
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Demo 4분 (CAPTURED) = 4분
- **Evidence / Decision References:** BEAT-007, INV-VERIFY-001, TRIAL-002, CLM-0029, CLM-0027, DEC-0042


#### S20 — Generated ≠ Done

- **Slide ID:** S20
- **ACT:** ACT 1
- **Section:** 1E
- **Working Title:** Generated ≠ Done
- **Primary Role:** 생성과 완료 판단 사이에 필요한 확인을 설명한다.
- **Audience Question:** “무엇을 확인·보고해 달라고 요청해야 완료를 판단할 수 있을까?”
- **Core Message:** Task는 결과뿐 아니라 적절한 검증과 review를 포함해야 한다. 변경 이유·범위, 검증 근거·결과, 미확인 사항, 사람의 수용 판단을 짧은 결과 인계로 연결한다.
- **Story Beat:** BEAT-007; INV-VERIFY-001
- **Curriculum Trace:** ACT 1 — Prompt Engineering Success and its transition to recurring project context.
- **Evidence Type:** OBSERVED_PRODUCT / TEACHING_MODEL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; TEACHING_MODEL; OBSERVED PRODUCT는 TRIAL-002 결과에 한정하고, check와 claim의 관계는 일반 Engineering 모델로 구분한다.
- **Visual Concept:** 기존 생성과 완료 판단의 대비 및 변경 이유·범위/확인 근거·결과/미확인 사항/사람의 수용 판단 네 항목을 유지한다. 앞의 기록을 받아 판단하려면 무엇을 확인·보고해 달라고 요청해야 하는지 회수하는 화면이다.
- **Demo / Case Connection:** Trial에서 실제 수행한 확인과 성능 주장을 위한 조건부 benchmark를 구분한다.
- **Beginner Payoff:** 코드가 나왔다는 사실만으로 완료라고 판단하지 않는다.
- **Advanced Payoff:** 주장에 맞는 검증 근거를 선택한다.
- **C++ Vision Bridge:** S21 Notes의 선택적 C++ 검증 범위 참고로 연결한다. S21 화면 inset은 계약 비교로 대체했으며 주요 Engineering Pattern 전이는 S66에서 유지한다.
- **Speaker Intent:** Verification과 결과 보고도 작업 요청의 일부임을 중심에 둔다. 변경 내용·확인 결과·미확인을 받아 사람이 완료를 판단하며, 검사 이름을 따로 소개하는 수업으로 전환하지 않는다. S19의 통과 수치를 다시 읽지 않는다.
- **Transition:** “완료를 판단할 근거를 요청할 때, 어떤 검사와 기대값까지 명시해야 할까요?”라고 S21의 명세 기반 완료 조건으로 이동한다.
- **Estimated Time:** 3분
- **Delivery Mode Allocation:** Lecture 3분 = 3분
- **Evidence / Decision References:** BEAT-007, INV-VERIFY-001, TRIAL-002, CLM-0029, CLM-0027, DEC-0042


#### S21 — Check마다 확인하는 범위

- **Slide ID:** S21
- **ACT:** ACT 1
- **Section:** 1E + 1F 통합
- **Working Title:** Check마다 확인하는 범위
- **Primary Role:** Check의 종류와 각 Check가 뒷받침하는 주장을 연결한다.
- **Audience Question:** “완료 조건에 어떤 검사와 기대값을 적어야 할까?”
- **Core Message:** Check 하나가 모든 정확성을 증명하지는 않는다. 결과가 비어 있지 않다는 확인만으로 crop의 끝 좌표 제외 계약을 검증할 수 없으며, 해당 입력의 기대 열과 출력 폭을 비교해야 그 차이를 구별할 수 있다.
- **Story Beat:** BEAT-007; INV-VERIFY-001
- **Curriculum Trace:** ACT 1 — Prompt Engineering Success and its transition to recurring project context.
- **Evidence Type:** OBSERVED_PRODUCT / TEACHING_MODEL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; FROZEN WITH SCOPE; TEACHING_MODEL; REQUIRES PRODUCT CHECK — 구체적 Windows·shell·IDE·hardware 지시를 추가하는 경우; Trial의 실제 결과와 일반적인 검증 모델을 분리한다. TRIAL-002에서는 benchmark를 수행하지 않았다.
- **Visual Concept:** 좌측에 Focused test—변경 동작, full test—알려진 회귀 범위, smoke—통합 경로, diff review—범위와 의도치 않은 변경, benchmark—성능 주장의 다섯 대응을 압축해 유지한다. 우측은 S02와 같은 native vector 원소 칸으로 입력 {1,2,3,4}, crop [1,3), 기대 {2,3}·2개와 끝 좌표를 잘못 포함한 결과 {2,3,4}·3개를 비교하고 추가된 4를 강조한다. `EXPECT_FALSE(actual.empty());`는 두 결과를 구별하지 못한다. 이름 붙인 `std::vector<int> expected{2,3};`와 `EXPECT_EQ(actual.size(), 2u);`, `EXPECT_EQ(actual, expected);`로 해당 입력의 명세를 개수·값·순서 조건에 옮긴다. 오른쪽은 C++ 교육용 재표현이며 새 실행 결과·당시 assertion 원문이 아니다. DEC-0041.
- **Demo / Case Connection:** TRIAL-002의 tests, CLI smoke, diff 확인을 실제 예로 두고, benchmark는 필요한 경우의 예로 표시한다.
- **Beginner Payoff:** 검사 결과가 무엇을 말해주는지 과장하지 않는다.
- **Advanced Payoff:** C++ 프로젝트에는 GoogleTest/CTest, Release build, Google Benchmark/profiler, public API/ABI 확인 등을 상황에 맞게 연결할 수 있다.
- **C++ Vision Bridge:** 화면 우측의 SUPPORTING 예시로 기존 Python crop 첫 행을 C++ vector와 GoogleTest assertion 조건으로 재표현한다. S02의 원소 칸 표현을 재사용하되 초기화 생성자 설명을 반복하지 않는다. Release build·API/ABI·측정 조건 대응은 Notes의 선택 참고로 유지하며 Python Demo를 C++ 도구 강의로 전환하지 않는다.
- **Speaker Intent:** 기존 DEC-0041의 좌측 다섯 Check 범위와 우측 vector·GoogleTest 비교를 보존한다. 이 장을 명세 기반 완료 조건과 확인·보고 사항을 요청하는 구체 예로 읽는다. 비어 있지 않음과 기대 개수·값·순서의 차이는 assertion 수 자체가 아니라 구별할 명세 위반의 차이다. 실제 Python Trial·교육용 C++·새 실행/PASS 없음 경계와 Lecture4분/Reflection1분을 유지한다.
- **Transition:** “요청에 담을 내용은 정했습니다. 이제 상황에 맞게 전달하는 문장 도구를 보겠습니다.”라고 신규 S22로 연결한다.
- **Estimated Time:** 5분
- **Delivery Mode Allocation:** Lecture 4분 + Reflection 1분 = 5분
- **Evidence / Decision References:** BEAT-007, INV-VERIFY-001, TRIAL-002, CLM-0029, CLM-0027, DEC-0041, DEC-0042


#### S22 — 지시와 참고 자료의 구분

- **Slide ID:** S22
- **ACT:** ACT 1
- **Section:** 1H Practical Prompt Methods
- **Working Title:** 지시와 참고 자료의 구분
- **Primary Role:** 로그·명세·요청이 섞여 있을 때 활용할 요청 문장을 독립적인 참고 예시로 소개한다.
- **Audience Question:** “로그·명세·요청이 섞여 있을 때, 어떻게 요청하면 될까?”
- **Core Message:** 제목과 태그로 지시와 분석 자료의 경계를 표시한다.
- **Story Beat:** BEAT-005, BEAT-007 — specified intent and completion evidence; no new product-history event.
- **Curriculum Trace:** ACT 1 — practical request expression, before recurring Project Context.
- **Evidence Type:** RESEARCH / TEACHING_MODEL / CONCEPTUAL
- **Claim Status:** FROZEN WITH SCOPE — CLM-0032; 2026-10-21 공식 권고의 존재를 확인했다. 예시는 교육용 각색이며 실제 Trial·효과 측정·모든 모델의 성공을 뜻하지 않는다.
- **Visual Concept:** 기존 Light Engineering Workbench에서 사용 상황·native Prompt 예시·두 활용 cue·핵심 메시지·출처와 한계를 배치한다. 예시 원문은 PROMPT_ENGINEERING_ADDITION.md를 따른다.
- **Demo / Case Connection:** 기존 crop 명세 또는 제조 검사 pipeline의 교육용 요청이다. 실제 TRIAL-002 입력·새 실행이 아니다.
- **Beginner Payoff:** 슬라이드만 보고 필요한 상황과 요청 문장을 활용할 수 있다.
- **Advanced Payoff:** 구획은 읽을 경계를 알리는 수단입니다. 보안 격리나 자료의 진위를 보장하지 않습니다.
- **C++ Vision Bridge:** 별도 Bridge component 없음. 기존 crop 명세에 적용하는 요청 예시이며 실제 C++ 실행·새 오류 정책을 추가하지 않는다.
- **Speaker Intent:** 핵심과 요청 두세 행만 짚는다. 전문 낭독·실습·예시 실행은 하지 않는다. 필요한 기법만 선택하는 문장 도구다.
- **Transition:** 다음은 입력과 기대 결과의 작은 예시의 활용 상황을 본다.
- **Estimated Time:** 1분
- **Delivery Mode Allocation:** Lecture 1분 = 1분
- **Evidence / Decision References:** CLM-0032, DEC-0043, references/product/PROMPT_ENGINEERING_2026-10-21.md


#### S23 — 입력과 기대 결과의 작은 예시

- **Slide ID:** S23
- **ACT:** ACT 1
- **Section:** 1H Practical Prompt Methods
- **Working Title:** 입력과 기대 결과의 작은 예시
- **Primary Role:** 범위·출력 패턴의 뜻이 엇갈릴 때 활용할 요청 문장을 독립적인 참고 예시로 소개한다.
- **Audience Question:** “범위·출력 패턴의 뜻이 엇갈릴 때, 어떻게 요청하면 될까?”
- **Core Message:** 설명만으로 부족할 때 입력과 원하는 결과를 함께 준다.
- **Story Beat:** BEAT-005, BEAT-007 — specified intent and completion evidence; no new product-history event.
- **Curriculum Trace:** ACT 1 — practical request expression, before recurring Project Context.
- **Evidence Type:** RESEARCH / TEACHING_MODEL / CONCEPTUAL
- **Claim Status:** FROZEN WITH SCOPE — CLM-0033; 2026-10-21 공식 권고의 존재를 확인했다. 예시는 교육용 각색이며 실제 Trial·효과 측정·모든 모델의 성공을 뜻하지 않는다.
- **Visual Concept:** 기존 Light Engineering Workbench에서 사용 상황·native Prompt 예시·두 활용 cue·핵심 메시지·출처와 한계를 배치한다. 예시 원문은 PROMPT_ENGINEERING_ADDITION.md를 따른다.
- **Demo / Case Connection:** 기존 crop 명세 또는 제조 검사 pipeline의 교육용 요청이다. 실제 TRIAL-002 입력·새 실행이 아니다.
- **Beginner Payoff:** 슬라이드만 보고 필요한 상황과 요청 문장을 활용할 수 있다.
- **Advanced Payoff:** 예시와 명세를 일치시킵니다. 예시 몇 개가 모든 경계 조건의 명세를 대신하지 않습니다.
- **C++ Vision Bridge:** 별도 Bridge component 없음. 기존 crop 명세에 적용하는 요청 예시이며 실제 C++ 실행·새 오류 정책을 추가하지 않는다.
- **Speaker Intent:** 핵심과 요청 두세 행만 짚는다. 전문 낭독·실습·예시 실행은 하지 않는다. 필요한 기법만 선택하는 문장 도구다.
- **Transition:** 다음은 바로 검토할 수 있는 결과 형식의 활용 상황을 본다.
- **Estimated Time:** 1분
- **Delivery Mode Allocation:** Case 1분 = 1분
- **Evidence / Decision References:** CLM-0033, DEC-0043, references/product/PROMPT_ENGINEERING_2026-10-21.md


#### S24 — 바로 검토할 수 있는 결과 형식

- **Slide ID:** S24
- **ACT:** ACT 1
- **Section:** 1H Practical Prompt Methods
- **Working Title:** 바로 검토할 수 있는 결과 형식
- **Primary Role:** 장황한 답을 다시 가공하게 될 때 활용할 요청 문장을 독립적인 참고 예시로 소개한다.
- **Audience Question:** “장황한 답을 다시 가공하게 될 때, 어떻게 요청하면 될까?”
- **Core Message:** 받고 싶은 항목과 길이를 요청에 적는다.
- **Story Beat:** BEAT-005, BEAT-007 — specified intent and completion evidence; no new product-history event.
- **Curriculum Trace:** ACT 1 — practical request expression, before recurring Project Context.
- **Evidence Type:** RESEARCH / TEACHING_MODEL / CONCEPTUAL
- **Claim Status:** FROZEN WITH SCOPE — CLM-0034; 2026-10-21 공식 권고의 존재를 확인했다. 예시는 교육용 각색이며 실제 Trial·효과 측정·모든 모델의 성공을 뜻하지 않는다.
- **Visual Concept:** 기존 Light Engineering Workbench에서 사용 상황·native Prompt 예시·두 활용 cue·핵심 메시지·출처와 한계를 배치한다. 예시 원문은 PROMPT_ENGINEERING_ADDITION.md를 따른다.
- **Demo / Case Connection:** 기존 crop 명세 또는 제조 검사 pipeline의 교육용 요청이다. 실제 TRIAL-002 입력·새 실행이 아니다.
- **Beginner Payoff:** 슬라이드만 보고 필요한 상황과 요청 문장을 활용할 수 있다.
- **Advanced Payoff:** 형식이 맞아도 내용은 확인해야 합니다. 채팅의 형식 요청은 API Structured Outputs와 별개입니다.
- **C++ Vision Bridge:** 별도 Bridge component 없음. 기존 crop 명세에 적용하는 요청 예시이며 실제 C++ 실행·새 오류 정책을 추가하지 않는다.
- **Speaker Intent:** 핵심과 요청 두세 행만 짚는다. 전문 낭독·실습·예시 실행은 하지 않는다. 필요한 기법만 선택하는 문장 도구다.
- **Transition:** 다음은 근거가 있는 설명과 미확인의 구분의 활용 상황을 본다.
- **Estimated Time:** 1분
- **Delivery Mode Allocation:** Lecture 1분 = 1분
- **Evidence / Decision References:** CLM-0034, DEC-0043, references/product/PROMPT_ENGINEERING_2026-10-21.md


#### S25 — 근거가 있는 설명과 미확인의 구분

- **Slide ID:** S25
- **ACT:** ACT 1
- **Section:** 1H Practical Prompt Methods
- **Working Title:** 근거가 있는 설명과 미확인의 구분
- **Primary Role:** 저장소 설명의 출처를 확인해야 할 때 활용할 요청 문장을 독립적인 참고 예시로 소개한다.
- **Audience Question:** “저장소 설명의 출처를 확인해야 할 때, 어떻게 요청하면 될까?”
- **Core Message:** 결론에 자료 위치를 붙이고, 확인하지 못한 것은 남긴다.
- **Story Beat:** BEAT-005, BEAT-007 — specified intent and completion evidence; no new product-history event.
- **Curriculum Trace:** ACT 1 — practical request expression, before recurring Project Context.
- **Evidence Type:** RESEARCH / TEACHING_MODEL / CONCEPTUAL
- **Claim Status:** FROZEN WITH SCOPE — CLM-0035; 2026-10-21 공식 권고의 존재를 확인했다. 예시는 교육용 각색이며 실제 Trial·효과 측정·모든 모델의 성공을 뜻하지 않는다.
- **Visual Concept:** 기존 Light Engineering Workbench에서 사용 상황·native Prompt 예시·두 활용 cue·핵심 메시지·출처와 한계를 배치한다. 예시 원문은 PROMPT_ENGINEERING_ADDITION.md를 따른다.
- **Demo / Case Connection:** 기존 crop 명세 또는 제조 검사 pipeline의 교육용 요청이다. 실제 TRIAL-002 입력·새 실행이 아니다.
- **Beginner Payoff:** 슬라이드만 보고 필요한 상황과 요청 문장을 활용할 수 있다.
- **Advanced Payoff:** 파일·줄 인용도 실제 내용과 대조합니다. 인용이 있다는 사실만으로 정확성이 보장되지는 않습니다.
- **C++ Vision Bridge:** 별도 Bridge component 없음. 기존 crop 명세에 적용하는 요청 예시이며 실제 C++ 실행·새 오류 정책을 추가하지 않는다.
- **Speaker Intent:** 핵심과 요청 두세 행만 짚는다. 전문 낭독·실습·예시 실행은 하지 않는다. 필요한 기법만 선택하는 문장 도구다.
- **Transition:** 다음은 결과를 바꾸는 결정에서 확인 질문의 활용 상황을 본다.
- **Estimated Time:** 1분
- **Delivery Mode Allocation:** Lecture 1분 = 1분
- **Evidence / Decision References:** CLM-0035, DEC-0043, references/product/PROMPT_ENGINEERING_2026-10-21.md


#### S26 — 결과를 바꾸는 결정에서 확인 질문

- **Slide ID:** S26
- **ACT:** ACT 1
- **Section:** 1H Practical Prompt Methods
- **Working Title:** 결과를 바꾸는 결정에서 확인 질문
- **Primary Role:** 정책을 사람이 선택해야 할 때 활용할 요청 문장을 독립적인 참고 예시로 소개한다.
- **Audience Question:** “정책을 사람이 선택해야 할 때, 어떻게 요청하면 될까?”
- **Core Message:** 조사할 사실과 답을 받아야 할 결정을 구분한다.
- **Story Beat:** BEAT-005, BEAT-007 — specified intent and completion evidence; no new product-history event.
- **Curriculum Trace:** ACT 1 — practical request expression, before recurring Project Context.
- **Evidence Type:** RESEARCH / TEACHING_MODEL / CONCEPTUAL
- **Claim Status:** FROZEN WITH SCOPE — CLM-0036; 2026-10-21 공식 권고의 존재를 확인했다. 예시는 교육용 각색이며 실제 Trial·효과 측정·모든 모델의 성공을 뜻하지 않는다.
- **Visual Concept:** 기존 Light Engineering Workbench에서 사용 상황·native Prompt 예시·두 활용 cue·핵심 메시지·출처와 한계를 배치한다. 예시 원문은 PROMPT_ENGINEERING_ADDITION.md를 따른다.
- **Demo / Case Connection:** 기존 crop 명세 또는 제조 검사 pipeline의 교육용 요청이다. 실제 TRIAL-002 입력·새 실행이 아니다.
- **Beginner Payoff:** 슬라이드만 보고 필요한 상황과 요청 문장을 활용할 수 있다.
- **Advanced Payoff:** 모든 세부를 질문으로 돌리지 않습니다. 답에 따라 결과가 달라지는 선택에 집중합니다.
- **C++ Vision Bridge:** 별도 Bridge component 없음. 기존 crop 명세에 적용하는 요청 예시이며 실제 C++ 실행·새 오류 정책을 추가하지 않는다.
- **Speaker Intent:** 핵심과 요청 두세 행만 짚는다. 전문 낭독·실습·예시 실행은 하지 않는다. 필요한 기법만 선택하는 문장 도구다.
- **Transition:** 다음은 큰 작업을 검토할 결과물로 나누기의 활용 상황을 본다.
- **Estimated Time:** 1분
- **Delivery Mode Allocation:** Lecture 1분 = 1분
- **Evidence / Decision References:** CLM-0036, DEC-0043, references/product/PROMPT_ENGINEERING_2026-10-21.md


#### S27 — 큰 작업을 검토할 결과물로 나누기

- **Slide ID:** S27
- **ACT:** ACT 1
- **Section:** 1H Practical Prompt Methods
- **Working Title:** 큰 작업을 검토할 결과물로 나누기
- **Primary Role:** 조사 결과에 따라 구현 범위가 달라질 때 활용할 요청 문장을 독립적인 참고 예시로 소개한다.
- **Audience Question:** “조사 결과에 따라 구현 범위가 달라질 때, 어떻게 요청하면 될까?”
- **Core Message:** 다음 결정을 할 수 있는 작은 결과부터 요청한다.
- **Story Beat:** BEAT-005, BEAT-007 — specified intent and completion evidence; no new product-history event.
- **Curriculum Trace:** ACT 1 — practical request expression, before recurring Project Context.
- **Evidence Type:** RESEARCH / TEACHING_MODEL / CONCEPTUAL
- **Claim Status:** FROZEN WITH SCOPE — CLM-0037; 2026-10-21 공식 권고의 존재를 확인했다. 예시는 교육용 각색이며 실제 Trial·효과 측정·모든 모델의 성공을 뜻하지 않는다.
- **Visual Concept:** 기존 Light Engineering Workbench에서 사용 상황·native Prompt 예시·두 활용 cue·핵심 메시지·출처와 한계를 배치한다. 예시 원문은 PROMPT_ENGINEERING_ADDITION.md를 따른다.
- **Demo / Case Connection:** 기존 crop 명세 또는 제조 검사 pipeline의 교육용 요청이다. 실제 TRIAL-002 입력·새 실행이 아니다.
- **Beginner Payoff:** 슬라이드만 보고 필요한 상황과 요청 문장을 활용할 수 있다.
- **Advanced Payoff:** 단계는 작업·산출물의 경계입니다. 숨은 사고 과정을 길게 출력하라는 요청이 아닙니다.
- **C++ Vision Bridge:** 별도 Bridge component 없음. 기존 crop 명세에 적용하는 요청 예시이며 실제 C++ 실행·새 오류 정책을 추가하지 않는다.
- **Speaker Intent:** 핵심과 요청 두세 행만 짚는다. 전문 낭독·실습·예시 실행은 하지 않는다. 필요한 기법만 선택하는 문장 도구다.
- **Transition:** 다음은 기준을 지정한 코드 리뷰 요청의 활용 상황을 본다.
- **Estimated Time:** 1분
- **Delivery Mode Allocation:** Lecture 1분 = 1분
- **Evidence / Decision References:** CLM-0037, DEC-0043, references/product/PROMPT_ENGINEERING_2026-10-21.md


#### S28 — 기준을 지정한 코드 리뷰 요청

- **Slide ID:** S28
- **ACT:** ACT 1
- **Section:** 1H Practical Prompt Methods
- **Working Title:** 기준을 지정한 코드 리뷰 요청
- **Primary Role:** “검토해줘”의 범위를 분명히 할 때 활용할 요청 문장을 독립적인 참고 예시로 소개한다.
- **Audience Question:** ““검토해줘”의 범위를 분명히 할 때, 어떻게 요청하면 될까?”
- **Core Message:** 무엇을 찾을지와 어떤 근거로 보고할지를 지정한다.
- **Story Beat:** BEAT-005, BEAT-007 — specified intent and completion evidence; no new product-history event.
- **Curriculum Trace:** ACT 1 — practical request expression, before recurring Project Context.
- **Evidence Type:** RESEARCH / TEACHING_MODEL / CONCEPTUAL
- **Claim Status:** FROZEN WITH SCOPE — CLM-0038; 2026-10-21 공식 권고의 존재를 확인했다. 예시는 교육용 각색이며 실제 Trial·효과 측정·모든 모델의 성공을 뜻하지 않는다.
- **Visual Concept:** 기존 Light Engineering Workbench에서 사용 상황·native Prompt 예시·두 활용 cue·핵심 메시지·출처와 한계를 배치한다. 예시 원문은 PROMPT_ENGINEERING_ADDITION.md를 따른다.
- **Demo / Case Connection:** 기존 crop 명세 또는 제조 검사 pipeline의 교육용 요청이다. 실제 TRIAL-002 입력·새 실행이 아니다.
- **Beginner Payoff:** 슬라이드만 보고 필요한 상황과 요청 문장을 활용할 수 있다.
- **Advanced Payoff:** 리뷰 답변도 누락할 수 있습니다. 필요한 실행 확인·변경 검토·사람의 완료 판단을 함께 사용합니다.
- **C++ Vision Bridge:** 별도 Bridge component 없음. 기존 crop 명세에 적용하는 요청 예시이며 실제 C++ 실행·새 오류 정책을 추가하지 않는다.
- **Speaker Intent:** 핵심과 요청 두세 행만 짚는다. 전문 낭독·실습·예시 실행은 하지 않는다. 필요한 기법만 선택하는 문장 도구다.
- **Transition:** 다음은 구체적인 근거로 수정 방향 피드백의 활용 상황을 본다.
- **Estimated Time:** 1분
- **Delivery Mode Allocation:** Lecture 1분 = 1분
- **Evidence / Decision References:** CLM-0038, DEC-0043, references/product/PROMPT_ENGINEERING_2026-10-21.md


#### S29 — 구체적인 근거로 수정 방향 피드백

- **Slide ID:** S29
- **ACT:** ACT 1
- **Section:** 1H Practical Prompt Methods
- **Working Title:** 구체적인 근거로 수정 방향 피드백
- **Primary Role:** 첫 제안의 일부가 의도와 다를 때 활용할 요청 문장을 독립적인 참고 예시로 소개한다.
- **Audience Question:** “첫 제안의 일부가 의도와 다를 때, 어떻게 요청하면 될까?”
- **Core Message:** 어긋난 지점과 원하는 변경, 유지할 조건을 적는다.
- **Story Beat:** BEAT-005, BEAT-007 — specified intent and completion evidence; no new product-history event.
- **Curriculum Trace:** ACT 1 — practical request expression, before recurring Project Context.
- **Evidence Type:** RESEARCH / TEACHING_MODEL / CONCEPTUAL
- **Claim Status:** FROZEN WITH SCOPE — CLM-0039; 2026-10-21 공식 권고의 존재를 확인했다. 예시는 교육용 각색이며 실제 Trial·효과 측정·모든 모델의 성공을 뜻하지 않는다.
- **Visual Concept:** 기존 Light Engineering Workbench에서 사용 상황·native Prompt 예시·두 활용 cue·핵심 메시지·출처와 한계를 배치한다. 예시 원문은 PROMPT_ENGINEERING_ADDITION.md를 따른다.
- **Demo / Case Connection:** 기존 crop 명세 또는 제조 검사 pipeline의 교육용 요청이다. 실제 TRIAL-002 입력·새 실행이 아니다.
- **Beginner Payoff:** 슬라이드만 보고 필요한 상황과 요청 문장을 활용할 수 있다.
- **Advanced Payoff:** 앞선 제안은 가상 예시입니다. 원하는 답만 반복시키지 말고 명세와 실제 근거로 방향을 고칩니다.
- **C++ Vision Bridge:** 별도 Bridge component 없음. 기존 crop 명세에 적용하는 요청 예시이며 실제 C++ 실행·새 오류 정책을 추가하지 않는다.
- **Speaker Intent:** 핵심과 요청 두세 행만 짚는다. 전문 낭독·실습·예시 실행은 하지 않는다. 필요한 기법만 선택하는 문장 도구다.
- **Transition:** “이 조건 중 다음 작업에도 다시 적게 될 것은 무엇일까요?”라고 S30–S31의 반복 Project Context 질문으로 연결한다.
- **Estimated Time:** 1분
- **Delivery Mode Allocation:** Lecture 1분 = 1분
- **Evidence / Decision References:** CLM-0039, DEC-0043, references/product/PROMPT_ENGINEERING_2026-10-21.md


#### S30 — 이번 Task인가, 계속 유지할 Project 정보인가?

- **Slide ID:** S30
- **ACT:** ACT 1
- **Section:** 1G 첫 장
- **Working Title:** 이번 Task인가, 계속 유지할 Project 정보인가?
- **Primary Role:** Task-specific 정보와 Project-persistent 정보의 구분을 시작한다.
- **Audience Question:** “잘 쓴 요청의 테스트 명령과 보존 조건을, 다음 작업에도 다시 적어야 할까?”
- **Core Message:** 두 종류의 정보를 구분할 필요가 있음을 먼저 인식한다.
- **Story Beat:** BEAT-007 → BEAT-008 handoff
- **Curriculum Trace:** ACT 1 — Prompt Engineering Success and its transition to recurring project context.; ACT 2 — repeated project context.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; TEACHING_MODEL; CONCEPTUAL. 정답이나 제품 기능의 증거로 제시하지 않는다.
- **Visual Concept:** 비어 있는 두 Bucket: `THIS TASK`, `THIS PROJECT`.
- **Demo / Case Connection:** 청중의 업무를 떠올리는 짧은 Reflection과 자발적 Discussion. 정답 분류를 먼저 보여주지 않는다.
- **Beginner Payoff:** Task 요청과 계속 유지할 규칙이 다를 수 있음을 생각한다.
- **Advanced Payoff:** 반복 정보를 어디에 두고 어떻게 관리할지 다음 ACT의 문제로 인식한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** 요청을 구체화했지만 같은 테스트 명령·보존 조건을 다음 작업에도 다시 쓰는 마찰을 회수한다. 두 빈 영역은 Task/Project의 수명·범위를 생각할 질문으로 유지하며 정답이나 저장 메커니즘을 미리 제시하지 않는다.
- **Transition:** “방금 떠올린 반복 문장을 이번 Task 정보와 계속 참고할 Project 정보의 후보로 나눠 보겠습니다.”라고 S31으로 이동한다.
- **Estimated Time:** 3분
- **Delivery Mode Allocation:** Reflection 1분 + Q&A 2분 = 3분
- **Evidence / Decision References:** BEAT-007, BEAT-008, CLM-0029, CLM-0027, CLM-0003, CLM-0005, DEC-0042


#### S31 — 반복하는 설명을 두 범주로 나누기

- **Slide ID:** S31
- **ACT:** ACT 1
- **Section:** 1G 종료 및 ACT 2 전환
- **Working Title:** 반복하는 설명을 두 범주로 나누기
- **Primary Role:** Slide 30의 두 빈 Bucket을 예시로 회수한다.
- **Audience Question:** “같은 Project 설명을 다음 요청에서도 왜 반복하게 될까?”
- **Core Message:** Task 정보와 Project 정보는 수명과 적용 범위가 다르다.
- **Story Beat:** BEAT-007 → BEAT-008; TRANS-003
- **Curriculum Trace:** ACT 1 — Prompt Engineering Success and its transition to recurring project context.; ACT 2 — repeated project context.
- **Evidence Type:** TEACHING_MODEL / CONCEPTUAL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; TEACHING_MODEL; CONCEPTUAL. 분류 시험이나 유일한 정답으로 제시하지 않는다.
- **Visual Concept:** 기존 이번 Task/계속 유지할 Project 두 Bucket을 유지한다. crop 경계 수정·이번 README 수정은 현재 목표 후보, 의존성 추가의 작업상 근거·프로젝트 테스트 명령은 여러 작업에서 참고할 후보로 놓는다. 동일한 확인 명령과 보존 조건이 다시 요청에 들어간다는 마찰로 S32에 넘긴다.
- **Demo / Case Connection:** Slide 30에서 시작한 분류를 돕는 예시. 아직 `AGENTS.md`를 답으로 보여주지 않는다.
- **Beginner Payoff:** 매번 쓰는 정보와 이번 요청만의 정보를 구별해 본다.
- **Advanced Payoff:** 정보의 재사용 범위와 유지 기간을 검토한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** 잘 작성한 요청도 반복되는 Project 설명 문제를 남긴다는 순서로 회수한다. 정보 수명·적용 범위의 후보 비교만 하고 AGENTS.md나 완전한 분류를 먼저 답하지 않는다. Reflection1분·Transition3분·Q&A2분을 보존한다.
- **Transition:** “요청은 구체화했지만, 같은 테스트 명령과 보존 조건은 다음 작업에도 다시 적게 됩니다. Project 설명을 왜 매번 Prompt에 다시 쓰고 있을까요?”라고 S32의 반복 Project Context 문제로 연결한다.
- **Estimated Time:** 6분
- **Delivery Mode Allocation:** Reflection 1분 + Transition 3분 + Q&A 2분 = 6분
- **Evidence / Decision References:** BEAT-007, BEAT-008, TRANS-003, CLM-0029, CLM-0027, CLM-0003, CLM-0005, DEC-0042


### ACT 2

#### S32 — 다른 Task에 같은 설명이 반복된다

- **Slide ID:** S32
- **ACT:** ACT 2
- **Section:** 2A
- **Working Title:** 다른 Task에 같은 설명이 반복된다
- **Primary Role:** 반복되는 Project Context 문제를 보여준다.
- **Audience Question:** “Task는 다른데 왜 같은 설명을 계속 복사하고 있지?”
- **Core Message:** 반복은 Prompt 문장만의 문제가 아니라 정보의 Scope와 수명 문제일 수 있다.
- **Story Beat:** BEAT-008 — Good Project instructions are repeated in each Prompt
- **Curriculum Trace:** ACT 2 — repeated project context.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; FROZEN WITH SCOPE; CONCEPTUAL.
- **Visual Concept:** Task A/B/C Prompt 아래 반복되는 `test command`, `no runtime dependency`, `local synthetic data`, `preserve public behavior`를 강조한다.
- **Demo / Case Connection:** Bug Fix, Performance, README 작업을 나란히 놓은 구성 사례. 해결책은 아직 보여주지 않는다.
- **Beginner Payoff:** Task마다 반복되는 Project 정보를 알아차린다.
- **Advanced Payoff:** 작업별 지시와 지속되는 Project 제약을 분리해서 본다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** 반복되는 문장을 보여주되, 곧바로 기능 소개로 넘어가지 않는다.
- **Transition:** “공통 정보를 Prompt 밖에 둘 수 있을까?”
- **Estimated Time:** 5분
- **Delivery Mode Allocation:** Lecture 4분 + Case 1분 = 5분
- **Evidence / Decision References:** BEAT-008, CLM-0003, CLM-0005


#### S33 — 작은 Project Context의 첫 기록

- **Slide ID:** S33
- **ACT:** ACT 2
- **Section:** 2B
- **Working Title:** 작은 Project Context의 첫 기록
- **Primary Role:** STATE-00-FIXED에서 STATE-01로의 변화를 보여준다.
- **Audience Question:** “반복되는 Project 정보를 한 번 기록하면 어떤 점이 달라질까?”
- **Core Message:** STATE-01은 작은 Project 지침을 repository에 둔 실제 상태다.
- **Story Beat:** BEAT-009 — Project context moves into `AGENTS.md`
- **Curriculum Trace:** ACT 2 — Context Engineering Turning Point.
- **Evidence Type:** OBSERVED_PRODUCT
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; FROZEN WITH SCOPE; OBSERVED PRODUCT STATE. 파일 크기와 내용은 기록된 STATE-01에 한정한다.
- **Visual Concept:** `STATE-00-FIXED → STATE-01`; root `AGENTS.md`, 15 lines / 567 bytes를 표시한다. 파일을 기능 매뉴얼처럼 해설하지 않는다.
- **Demo / Case Connection:** 프로젝트 설명, Build/Run 안내, Test 명령, 핵심 제약이 담긴 실제 State를 보여준다.
- **Beginner Payoff:** 자주 반복되는 내용을 어디에 둘 수 있는지 본다.
- **Advanced Payoff:** Context를 task prompt와 repository 안내 사이에서 어떻게 나눌지 생각한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** 파일 기능보다 반복 설명을 repository 쪽으로 옮긴 설계 의도에 집중한다.
- **Transition:** Slide 34에서 한 번의 실제 사용 기록을 확인한다.
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Demo 4분 (HYBRID) = 4분
- **Evidence / Decision References:** BEAT-009, STATE-01, CLM-0003, CLM-0005, OQ-003, OQ-005


#### S34 — AGENTS.md의 지침대로 검증했다

- **Slide ID:** S34
- **ACT:** ACT 2
- **Section:** 2B
- **Working Title:** AGENTS.md의 지침대로 검증했다
- **Primary Role:** TRIAL-003 결과와 인과 해석의 한계를 함께 보여준다.
- **Audience Question:** “Prompt에 없던 test command는 어디서 왔을까?”
- **Core Message:** 작업 요청에는 테스트 실행 명령이 없었지만, 이 실행에서 Agent가 AGENTS.md를 확인하고 그 테스트 지침의 명령으로 검증한 기록이 있다.
- **Story Beat:** BEAT-010 — Reusable Project guidance succeeds at first
- **Curriculum Trace:** ACT 2 — `AGENTS.md`'s first success.
- **Evidence Type:** OBSERVED_PRODUCT
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; FROZEN WITH SCOPE; OBSERVED PRODUCT. AGENTS.md만의 독립적인 인과 효과나 보편적 우월성을 주장하지 않는다.
- **Visual Concept:** 왼쪽 native Prompt 창에는 실제 TRIAL-003 요청의 핵심 발췌·번역만 표시한다. 실제 요청에 테스트 명령이 없었다는 설명은 창 밖의 주석으로 분리한다. 가운데 AGENTS.md는 프로젝트 작업 지침으로 강조하고 지정된 명령으로 전체 테스트를 실행한다는 규칙을 요약한다. 오른쪽 전체11/11 PASS는 유지한다. README-only가 요청에도 명시됐고 Skills도 실행됐다는 한계는 보존한다.
- **Demo / Case Connection:** 문서 수정 Task의 관찰된 실행. Personal/global Skills도 실행되어 AGENTS.md만의 효과로 분리할 수 없다.
- **Beginner Payoff:** 반복 정보를 repository에 두는 방식의 첫 효용을 본다.
- **Advanced Payoff:** 실제 관찰과 원인 귀속을 분리한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** 실제 요청·원문 밖 주석·프로젝트 지침·관찰된 실행을 구분한다. 요청의 최종 diff와 관련 검증 근거 보고는 남기되 구체 테스트 명령은 없었다고 창 밖에서 설명한다. AGENTS.md의 테스트 지침을 실제 적용한 점을 강조하며 모든 규칙의 강제 준수·자동 로딩·단독 인과성을 주장하지 않는다.
- **Transition:** “이번 Task의 Prompt와 Project가 계속 유지할 Context는 어떻게 다른가?”
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Demo 4분 (HYBRID) = 4분
- **Evidence / Decision References:** BEAT-010, TRIAL-003, STATE-01, CLM-0005, DEC-0046


#### S35 — Task Prompt와 Project Context

- **Slide ID:** S35
- **ACT:** ACT 2
- **Section:** 2C
- **Working Title:** Task Prompt와 Project Context
- **Primary Role:** 정보의 Scope와 수명을 구분하는 Mental Model을 제시한다.
- **Audience Question:** “이 정보는 언제까지 유효한가?”
- **Core Message:** 현재 Task의 목표와 지속되는 Project 사실·규칙은 수명과 적용 범위가 다르다.
- **Story Beat:** BEAT-009–010; TRANS-003
- **Curriculum Trace:** ACT 2 — Context Engineering Turning Point.; ACT 2 — `AGENTS.md`'s first success.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; TEACHING_MODEL; REQUIRES PRODUCT CHECK — 구체적 Windows·shell·IDE·hardware 지시를 추가하는 경우; CONCEPTUAL.
- **Visual Concept:** 왼쪽의 작업별 요청 예(crop 수정 또는 이번 README-only)를 테두리로 묶어 화살표로 프롬프트창 도식에 연결한다. 오른쪽의 테스트 명령·의존성 정책을 별도 테두리로 묶어 화살표로 AGENTS.md 문서 도식에 연결한다. 하단의 목표 변화/여러 작업 재참고 비교를 유지한다. 두 이미지는 교육용 생성 도식이며 실제 제품 화면이나 실행 캡처가 아니다.
- **Demo / Case Connection:** Slide 32–34의 반복 설명과 첫 재사용을 정리한다.
- **Beginner Payoff:** 현재 작업의 지시와 반복되는 Project 사실을 구별한다.
- **Advanced Payoff:** Context를 선택할 때 Scope와 Lifetime도 함께 본다.
- **C++ Vision Bridge:** 전용 목록 없이, 일반 제약과 Task별 알고리즘 조건이 다른 범위일 수 있음을 짧게 언급한다.
- **Speaker Intent:** 이번 요청의 목표·수정 범위와 여러 Task가 재참고할 명령·규칙을 나눈다. 같은 내용이 Prompt 또는 문서 중 한 곳에만 들어갈 수 있다는 뜻이 아니다. 테스트 명령/검증 원칙도 Project 안내에 들어갈 수 있고, 이후 Harness 구간은 여러 단계의 수행·중간 판단을 누가 유지할지 다룬다. 승인된 두 생성 도식과 범위·수명 비교를 유지한다.
- **Transition:** “정확한 정보를 더 많이 넣으면 언제나 괜찮을까?”
- **Estimated Time:** 5분
- **Delivery Mode Allocation:** Lecture 5분 = 5분
- **Evidence / Decision References:** BEAT-009, TRANS-003, CLM-0003, CLM-0005, OQ-003, OQ-005, BEAT-010, DEC-0047


#### S36 — 정확한 정보도 계속 늘어난다

- **Slide ID:** S36
- **ACT:** ACT 2
- **Section:** 2D
- **Working Title:** 정확한 정보도 계속 늘어난다
- **Primary Role:** 프로젝트 초기에서 이야기의 현재 시점까지 AGENTS.md에 정보가 누적된 모습을 보여준다. 내부 근거 연결은 STATE-01/STATE-02를 유지한다.
- **Audience Question:** “정확한 Project 정보라면 모든 Task에 늘 넣어도 될까?”
- **Core Message:** Context가 늘어난 사실만으로 실패를 뜻하지 않는다. 다음 질문은 각 Task에서의 관련성이다.
- **Story Beat:** BEAT-011 — Context accumulates as Project needs grow
- **Curriculum Trace:** ACT 2 — context accumulation and growth scenario.
- **Evidence Type:** OBSERVED_PRODUCT
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; FROZEN WITH SCOPE; OBSERVED PRODUCT STATE.
- **Visual Concept:** 화면의 두 시점을 ‘프로젝트 초기’와 ‘현재 프로젝트’로 표시한다. 같은 폭의 짧은/길어진 AGENTS.md 생성 도식과 ‘프로젝트 진행’ 화살표로 정보 축적을 보여준다. 기존 정보는 회색, 추가 정보는 청록색이다. 오른쪽에 처리 순서·이미지 명세·테스트 구조·CLI 출력을 요약하고 관련성 질문으로 끝낸다. STATE ID·줄 수·byte 수·경과 기간은 화면에 표시하지 않는다. 길이와 색은 설명용이며 실제 문서 캡처·정량 그래프가 아니다.
- **Demo / Case Connection:** STATE-01과 STATE-02의 실제 AGENTS.md 내용 비교를 청중용 시간 흐름으로 재구성한다. ‘현재’는 이 Story 시점이며 Demo 저장소의 최신 HEAD가 아니다. 기간 측정이나 장기 운영을 관찰한 기록으로 표현하지 않는다. 원본 줄 수·용량은 Notes·근거 문서에만 보존한다.
- **Beginner Payoff:** 늘어난 내용 자체보다 이번 일에 필요한지를 묻는다.
- **Advanced Payoff:** 유지 비용, 오래된 정보, 범위 혼합 가능성을 검토한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** 정확한 정보가 들어갔다는 점과, 늘어난 Context가 실패를 일으켰다는 주장을 분리한다.
- **Transition:** Slide 37에서 작은 문서 Task가 실제로 어떤 정보를 필요로 했는지 본다.
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Case 4분 = 4분
- **Evidence / Decision References:** BEAT-011, STATE-01, STATE-02, CLM-0014, CLM-0015, DEC-0048


#### S37 — 정확하지만 이번 작업에는 불필요한 정보

- **Slide ID:** S37
- **ACT:** ACT 2
- **Section:** 2D
- **Working Title:** 정확하지만 이번 작업에는 불필요한 정보
- **Primary Role:** TRIAL-004에서 읽은 AGENTS.md 안의 지침·정보를 이번 작업과의 관련성으로 나눈다.
- **Audience Question:** “README build 안내를 고치는 데 어떤 정보가 필요했을까?”
- **Core Message:** TRIAL-004에서는 필요한 정보와 무관한 정보가 함께 있었지만, Agent 혼란이나 Context 관련 실패는 관찰되지 않았다.
- **Story Beat:** BEAT-012 — A small task receives unrelated Project Context
- **Curriculum Trace:** ACT 2 — Context growth, relevance, and research caveat.
- **Evidence Type:** OBSERVED_PRODUCT
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; FROZEN WITH SCOPE; OBSERVED PRODUCT. Context 증가가 실패를 일으켰다는 주장을 하지 않는다.
- **Visual Concept:** 왼쪽 실제 요청 프롬프트창은 유지한다. 오른쪽 제목은 ‘AGENTS.md에 적힌 내용’으로 명시한다. Build / Run의 README 빌드·실행 안내 참조와 Core Constraints의 변경 범위 제한·관련 동작 검증을 청록 실선으로 묶는다. Architecture/Image Contract/Test의 구조 설명/CLI Summary의 이미지 상세는 회색 점선으로 묶는다. README·pyproject.toml 자체나 고정 버전값을 AGENTS.md 내용으로 넣지 않는다. 색 외에도 문구와 선 형태로 구분하고, Agent가 AGENTS.md를 읽었으며 혼란·실패는 관찰되지 않았다는 경계를 유지한다.
- **Demo / Case Connection:** README Build 안내에서 pinned build tools를 확인한 문서 Task. Agent 혼란 없음, Context 관련 실패 없음.
- **Beginner Payoff:** 정확한 정보라도 현재 Task와 관련 있는지 따져본다.
- **Advanced Payoff:** 무관한 Context의 존재와 실제로 관찰된 부정적 결과를 혼동하지 않는다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** 프롬프트를 읽은 뒤 오른쪽의 두 영역이 모두 AGENTS.md 내부의 내용임을 먼저 짚는다. 필요한 프로젝트 지침과 이번 질문에 불필요했던 이미지 상세를 비교한다. 구체적인 README-only/pyproject.toml 기준은 실제 요청에, 버전값은 실제 빌드 설정에 있었음을 구분한다. 회색은 틀린 정보나 읽지 않은 정보라는 뜻이 아니다. S36의 누적 정보 질문을 회수하고 S38의 범위·제공 시점으로 넘기며 인과성·성능 주장으로 확대하지 않는다.
- **Transition:** “필요한 정보를 항상 한 번에 넣지 않는 방법은 무엇일까?”
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Demo 2분 (CAPTURED) + Reflection 2분 = 4분
- **Evidence / Decision References:** BEAT-012, TRIAL-004, CLM-0014, CLM-0015, DEC-0049, DEC-0050


#### S38 — 정보의 범위와 제공 시점

- **Slide ID:** S38
- **ACT:** ACT 2
- **Section:** 2E
- **Working Title:** 정보의 범위와 제공 시점
- **Primary Role:** 공통 안내·선택적 상세와 아직 해결하지 않은 수행 방법을 구분한다.
- **Audience Question:** “무엇은 항상 필요하고, 무엇은 Task에 따라 찾아야 할까?”
- **Core Message:** 공통 안내와 작업별 상세는 범위·제공 시점을 나눌 수 있다. 반복되는 수행 절차의 유지 방법은 다음 ACT에서 검토할 질문으로 남긴다.
- **Story Beat:** BEAT-012, BEAT-014
- **Curriculum Trace:** ACT 2 — Context growth, relevance, and research caveat.; ACT 2 — Separation, routing, and progressive disclosure; ACT 3 handoff.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; TEACHING_MODEL; CONCEPTUAL. OpenAI의 공식 분류 체계로 표현하지 않는다.
- **Visual Concept:** 세 열 중 앞의 두 열은 공통 안내와 Task별 상세의 배치를 비교한다. 세 번째는 분리된 성능 요청 A/B에 같은 절차가 반복된다는 미해결 질문을 회색 점선으로 표시하고 ACT 3에서 확인한다고 적는다. 하나의 재사용 Workflow로 합쳐진 완성 구조나 Skill은 보여주지 않는다.
- **Demo / Case Connection:** STATE-02의 분류 결과를 참조하되, 성능 조사 절차가 STATE-02에 실제로 저장됐다고 말하지 않는다.
- **Beginner Payoff:** 모든 세부사항이 항상 필요한 것은 아님을 이해한다.
- **Advanced Payoff:** 사실, Task별 세부정보, 절차를 구별하고 어디서 유지할지 생각한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** S37의 관련성 질문을 공통 안내/필요할 때 찾을 상세로 회수한다. 세 번째 열은 다음 문제의 예고이며 해결된 재사용 구조가 아니다. 정보의 범위와 수행 방법은 서로 다른 축이고 AGENTS.md에 절차를 쓰면 안 된다는 제품 규칙이 아니다.
- **Transition:** “정보를 제공했다는 사실과 필요한 근거를 활용했다는 사실을 구분해야 할까요? 두 연구가 실제로 확인한 질문을 각각 보겠습니다.”
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Lecture 4분 = 4분
- **Evidence / Decision References:** BEAT-012, BEAT-014, STATE-02, CLM-0014, CLM-0015, CLM-0003, CLM-0005, DEC-0051, DEC-0060


#### S39 — 많이 담아도 같은 근거를 똑같이 쓰는가?

- **Slide ID:** S39
- **ACT:** ACT 2
- **Section:** 2E
- **Working Title:** 많이 담아도 같은 근거를 똑같이 쓰는가?
- **Primary Role:** Lost in the Middle의 과제·위치 비교·제한된 관찰을 한 장에서 설명한다.
- **Audience Question:** “같은 근거가 입력의 어디에 있느냐에 따라 결과가 달랐을까?”
- **Core Message:** Lost in the Middle은 문서 QA와 key-value 검색에서 근거 위치를 바꿨을 때 일부 당시 모델·과제의 성능이 달라지는 현상을 관찰했다.
- **Story Beat:** BEAT-013 — Long-context research supports a bounded caution
- **Curriculum Trace:** ACT 2 — Context growth, relevance, and bounded `Lost in the Middle` evidence.
- **Evidence Type:** RESEARCH
- **Claim Status:** FROZEN WITH SCOPE — DEC-0023의 제한된 연구 주장. 인용과 연구 대상·조건을 유지하며 현재 Codex의 일반 한계로 확장하지 않는다.
- **Visual Concept:** 동일한 근거가 앞/중간/뒤에 놓인 입력을 세 행으로 재구성한다. 위치만 바꾼 과제와 관찰을 나누고 수치 없는 도식을 사용한다. 현재 Codex의 실패율·성능 곡선으로 표현하지 않는다.
- **Demo / Case Connection:** 결정론적 “중간 내용은 항상 실패” 시연은 하지 않는다.
- **Beginner Payoff:** 긴 Context가 곧 동일한 활용을 보장한다고 가정하지 않는다.
- **Advanced Payoff:** 연구 결과의 대상·조건과 현재 제품 주장을 분리한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** Lost in the Middle의 위치 비교 과제·조건·제한된 관찰만 설명한다. S40에서는 연구 소개를 반복하지 않고 필요한 코드에 도달했다는 답을 어떤 근거로 확인할지 업무 질문으로 이어간다.
- **Transition:** “코드에서도 필요한 구현을 찾았다는 답을 무엇으로 확인할까요?”
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Lecture 4분 = 4분
- **Evidence / Decision References:** BEAT-013, OQ-006, CLM-0014, SRC-0201, DEC-0052, DEC-0060


#### S40 — AI가 필요한 코드를 찾았다는 것을 무엇으로 확인할까?

- **Slide ID:** S40
- **ACT:** ACT 2
- **Section:** 2E
- **Working Title:** AI가 필요한 코드를 찾았다는 것을 무엇으로 확인할까?
- **Primary Role:** 코드 탐색 결과를 파일 위치·요청과의 동작 일치·필요한 주변 근거로 확인하는 업무 질문을 제시한다. RepoQA는 보조 연구로 둔다.
- **Audience Question:** “AI가 필요한 코드를 찾았다는 것을 무엇으로 확인할까?”
- **Core Message:** 함수 이름이나 찾았다는 답만 받지 말고 파일·함수·관련 줄, 요청 조건과 코드의 대응, 필요한 호출부·테스트 기대값을 확인한다. 세 질문은 교육용 기준이며 RepoQA의 채점 기준이 아니다.
- **Story Beat:** BEAT-013 — Long-context research supports a bounded caution
- **Curriculum Trace:** ACT 2 — bounded research caution to task-specific code evidence, then navigation design.
- **Evidence Type:** TEACHING_MODEL / RESEARCH
- **Claim Status:** TEACHING MODEL — 업무용 확인 질문; FROZEN WITH SCOPE — 보존된 crop 구현 발췌와 RepoQA의 제한된 연구 과제. 새로운 탐색 실행·정확도·성능·토큰 효과나 현재 Codex 동작을 주장하지 않는다.
- **Visual Concept:** 왼쪽 교육용 crop 요청에서 보존된 구현 일부로 연결하고, 오른쪽에 위치/요청한 동작/주변 근거라는 세 확인 질문을 둔다. 코드 발췌는 새 Agent 탐색 결과가 아니다. 아래 작은 보조 영역에 RepoQA가 기능 설명으로 함수 찾기를 평가한 연구임을 적는다. 데이터셋 수·16K 코드 입력 조건·모델/언어별 차이·함수 유사도 평가는 Notes에 보존한다.
- **Demo / Case Connection:** STATE-00-FIXED의 src/graypipe/transform.py, crop 일부 row[x_start : x_end]를 기존 사례의 교육용 확인 예로 인용한다. 실제 파일 경로·코드 한 줄을 인용한 것이며 이 요청을 실행하거나 Agent가 이번에 찾았다는 관찰이 아니다. 새 Trial·테스트·PASS/FAIL을 만들지 않는다.
- **Beginner Payoff:** 찾았다는 답에서 구체적인 위치와 관련 코드를 확인하는 질문을 가져간다.
- **Advanced Payoff:** 코드 위치의 특정, 요청 의미와의 대응, 필요한 연결 근거를 구분하며 검색 연구와 실제 Agent 업무 평가를 혼동하지 않는다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** 업무에서 확인할 질문을 중심에 두고 기존 crop 한 줄을 예로 짚는다. 경로/함수명 제시만으로 정확한 관련성을 보장하지 않고, 반대로 코드 한 줄만으로 전체 구현의 정당성도 확정하지 않는다. 필요 범위의 명세·호출부·테스트 기대값과 대조한다. RepoQA는 코드 검색도 별도로 평가한 연구라는 보조 연결이며 이번 세 질문을 검증한 연구나 Routing 개선 근거가 아니다.
- **Transition:** “확인할 근거를 정했다면, 그 명세와 코드를 어디서 찾게 할까요?”
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Lecture 4분 = 4분
- **Evidence / Decision References:** BEAT-013, OQ-006, STATE-00-FIXED, TRIAL-002 (existing crop implementation only), CLM-0015, SRC-0204, DEC-0052, DEC-0060, DEC-0061


#### S41 — 필요한 상세 정보로 가는 길

- **Slide ID:** S41
- **ACT:** ACT 2
- **Section:** 2F 시작
- **Working Title:** 필요한 상세 정보로 가는 길
- **Primary Role:** Context 분리에서 Routing 문제로 넘어간다.
- **Audience Question:** “이 요청은 어떤 문서를 근거로 답해야 할까?”
- **Core Message:** 작업 질문에서 관련 상세 명세까지 도달할 위치를 기본 안내에서 찾게 설계한다.
- **Story Beat:** BEAT-014로 진입
- **Curriculum Trace:** ACT 2 — Separation, routing, and progressive disclosure; ACT 3 handoff.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; TEACHING_MODEL; REQUIRES PRODUCT CHECK — 구체적 Windows·shell·IDE·hardware 지시를 추가하는 경우; CONCEPTUAL. Routing으로 성능 향상이나 Token 절약이 입증됐다고 주장하지 않는다.
- **Visual Concept:** 요청→AGENTS.md의 위치 안내→해당 상세 명세의 단일 경로. 문서 구조 전체는 해설하지 않고 이 질문에 필요한 근거까지 연결한다. 실제 읽기 순서와 구분한다.
- **Demo / Case Connection:** STATE-03 결과는 다음 구간에 남기고, 이 장에서는 질문과 개념만 제시한다.
- **Beginner Payoff:** Project 안내와 Task별 상세 정보가 다른 역할을 할 수 있음을 본다.
- **Advanced Payoff:** 관련 문서로 연결하는 방식의 발견성·유지 비용을 다음 문제로 본다.
- **C++ Vision Bridge:** 작은 예 하나로 일반 Project 제약과 Task별 CMake 또는 알고리즘 계약을 구분한다. CMake·hardware 항목을 나열하지 않고 세부 Bridge는 다음 구간에 이어간다.
- **Speaker Intent:** S40에서 정한 코드 탐색 결과의 확인 질문을 회수하고, 이제 그 명세와 구현에 도달할 경로를 설계한다. 질문·기본 안내·관련 상세를 구분하며 앞 장의 확인 기준이나 연구 소개를 반복하지 않는다. 다음 배치 기준/실제 파일 재구성은 미리 해설하지 않는다.
- **Transition:** “그렇다면 기본 안내와 상세를 나눌 기준은 무엇일까요?”
- **Estimated Time:** 3분
- **Delivery Mode Allocation:** Lecture 3분 = 3분
- **Evidence / Decision References:** BEAT-014, STATE-03, CLM-0003, CLM-0005, CLM-0014, CLM-0015, DEC-0053, DEC-0060


#### S42 — AGENTS.md에는 무엇을 남길까?

- **Slide ID:** S42
- **ACT:** ACT 2
- **Section:** 2F Scope·Routing
- **Working Title:** AGENTS.md에는 무엇을 남길까?
- **Primary Role:** 공통 안내와 상세의 배치 기준을 제시한다.
- **Audience Question:** “무엇을 항상 읽고, 무엇을 필요할 때 찾게 할까?”
- **Core Message:** 여러 작업의 출발점이 되는 안내는 공통 위치에, 특정 질문의 깊은 명세는 관련 상세에 두고 참조 위치를 남긴다.
- **Story Beat:** BEAT-014 — Context separation follows scope and timing
- **Curriculum Trace:** ACT 2 — Separation, routing, and progressive disclosure; ACT 3 handoff.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; FROZEN WITH SCOPE; TEACHING_MODEL; REQUIRES PRODUCT CHECK — 구체적 Windows·shell·IDE·hardware 지시를 추가하는 경우; CONCEPTUAL. 이 설계만으로 정보 검색 성능이 향상된다고 주장하지 않는다.
- **Visual Concept:** 정확한 최종 디렉터리 목록 대신 적용 범위·읽는 시점·유지할 내용이라는 같은 기준으로 기본 안내와 작업 상세를 비교한다. C++에서는 공통 빌드 진입점과 장비별 하드웨어 조건을 짧게 대조한다.
- **Demo / Case Connection:** STATE-03 구조를 설명하기 전 일반적인 Routing mental model을 보여준다.
- **Beginner Payoff:** 기본 안내와 상세 정보를 다른 역할로 볼 수 있다.
- **Advanced Payoff:** 항상 필요한 정보와 작업별 세부 정보의 위치를 설계한다.
- **C++ Vision Bridge:** 2H 통합 Bridge 1분. Core의 build/test entry와 Project 제약에서 알고리즘 계약·하드웨어 조건 같은 상세 정보로 이동하는 예를 든다.
- **Speaker Intent:** 파일명 외우기 대신 각 정보가 어떤 작업에 언제 필요한지 판단하는 기준을 설명한다. 명령·검증 규칙도 공통 안내가 될 수 있다. 실제3개 상세 문서로 옮긴 결과는 다음 장에 남긴다.
- **Transition:** “이 기준을 보존된 프로젝트 문서에 실제로 적용한 전후를 보겠습니다.”
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Lecture 4분 = 4분
- **Evidence / Decision References:** BEAT-014, STATE-03, CLM-0003, CLM-0005, CLM-0014, CLM-0015, DEC-0054, DEC-0060


#### S43 — 정보를 지우지 않고 위치를 나누기

- **Slide ID:** S43
- **ACT:** ACT 2
- **Section:** 2F Scope·Routing
- **Working Title:** 정보를 지우지 않고 위치를 나누기
- **Primary Role:** 배치 기준을 적용한 실제 문서 재구성과 의미 보존을 보여준다.
- **Audience Question:** “정보를 나누면 무엇이 바뀌고, 무엇을 그대로 보존해야 할까?”
- **Core Message:** STATE-03은 세부 정보를 삭제하는 변화가 아니라 Scope에 맞는 위치로 옮기는 변화다.
- **Story Beat:** BEAT-014, BEAT-015 — Context separation and routing
- **Curriculum Trace:** ACT 2 — Separation, routing, and progressive disclosure; ACT 3 handoff.; ACT 2 — separation, routing, and progressive disclosure.
- **Evidence Type:** OBSERVED_PRODUCT / TEACHING_MODEL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; FROZEN WITH SCOPE; TEACHING_MODEL; REQUIRES PRODUCT CHECK — 구체적 Windows·shell·IDE·hardware 지시를 추가하는 경우; STATE-03 파일 구조는 관찰된 상태다. Routing 효과는 교육용 패턴으로 한정하며 완벽한 검색을 주장하지 않는다.
- **Visual Concept:** 왼쪽 큰 AGENTS.md 안에 기본 안내와 A구조/CLI 요약·B이미지 명세·C테스트 구성을 함께 담고, 오른쪽은 기본 안내+문서 위치를 담은 AGENTS.md와 A/B/C 상세 문서3개로 분리한다. 같은 문자와 가로 화살표로 기존 주제의 위치를 대응시킨다. 하단은 핵심 정보 보존과 상세 위치 분리를 회수한다. 실제 문서 구조를 요약·재구성하며 재서술·상세화와 안내 추가가 포함됐음을 명시한다.
- **Demo / Case Connection:** STATE-02 → STATE-03의 실제 문서 구조. 내용 보존과 구조 변경을 구분한다.
- **Beginner Payoff:** 정보를 나누더라도 핵심 제약은 유지할 수 있음을 본다.
- **Advanced Payoff:** 중복과 의미 변경 없이 정보 출처를 정돈하는 기준을 본다.
- **C++ Vision Bridge:** 2H 통합 Bridge 2분. C++ 예시에서 Core 제약과 알고리즘·모듈·하드웨어 상세가 서로 다른 Scope일 수 있음을 연결한다.
- **Speaker Intent:** 앞 장은 배치 기준, 이 장은 실제 문서 변화를 확인하는 증거다. A/B/C 대응으로 원래 핵심 사실이 어디로 갔는지 확인하고 재서술·상세화와 정보 삭제를 구분한다. 일반 Routing 강의를 반복하지 않는다.
- **Transition:** “파일 구조를 나눴으니, 실제 두 요청은 어떤 근거를 열었는지 관찰하겠습니다.”
- **Estimated Time:** 5분
- **Delivery Mode Allocation:** Lecture 2분 + Demo 2분 (CAPTURED) + Case 1분 = 5분
- **Evidence / Decision References:** BEAT-014, BEAT-015, STATE-02, STATE-03, CLM-0003, CLM-0005, CLM-0014, CLM-0015, DEC-0055, DEC-0060


#### S44 — 서로 다른 두 Task가 무엇을 읽을까?

- **Slide ID:** S44
- **ACT:** ACT 2
- **Section:** 2G Structured Context
- **Working Title:** 서로 다른 두 Task가 무엇을 읽을까?
- **Primary Role:** TRIAL-005A/B의 질문과 관찰 기준을 소개한다.
- **Audience Question:** “정답을 말하는 것과 실제 근거 접근을 확인하는 것은 어떻게 다를까?”
- **Core Message:** 관련 정보 접근을 확인하려면 Task별 실제 접근을 살펴봐야 한다.
- **Story Beat:** BEAT-015 → BEAT-016
- **Curriculum Trace:** ACT 2 — separation, routing, and progressive disclosure.
- **Evidence Type:** OBSERVED_PRODUCT
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; FROZEN WITH SCOPE; OBSERVED PRODUCT. 결과와 예상 경로를 미리 단정하지 않는다.
- **Visual Concept:** 동일한 프롬프트창2개에 TRIAL-005A/B의 실제 요청 핵심 발췌·번역을 나란히 둔다. A는 샘플 crop의 원본 열/출력 폭/끝 좌표와 현재 명세·구현 근거, B는 실행 의존성과 빌드/패키징 도구 구분을 묻는다. 파일 변경 금지·읽기 전용·근거 제시 조건은 각 입력창 안에 둔다. 아래는 실제 연 문서, 두 요청의 접근 공통/차이, 답을 뒷받침한 근거라는 관찰 질문3개만 표시한다. 특정 문서로 향하는 화살표·접근 목록·정답·성공 판정은 표시하지 않는다.
- **Demo / Case Connection:** 두 read-only Trial prompt.
- **Beginner Payoff:** Task 질문에 따라 필요한 근거가 달라질 수 있음을 생각한다.
- **Advanced Payoff:** 문서 구조만이 아니라 실제 접근 경로를 평가한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** crop 반개구간 정답을 다시 푸는 퀴즈가 아니다. 같은 저장소에서 두 실제 읽기 전용 요청이 어떤 문서를 열고 무엇을 근거로 답했는지 관찰한다. 예상 파일·결과는 미리 공개하지 않고 S45(A), S46(B), S47(비교)로 이어간다.
- **Transition:** “먼저 요청 A에서 실제로 읽은 문서와 답변 근거를 확인합니다.”
- **Estimated Time:** 2분
- **Delivery Mode Allocation:** Lecture 2분 = 2분
- **Evidence / Decision References:** BEAT-015, BEAT-016, TRIAL-005A, TRIAL-005B, CLM-0003, CLM-0005, CLM-0014, CLM-0015, DEC-0056, DEC-0060


#### S45 — Crop Task에서 관찰한 접근

- **Slide ID:** S45
- **ACT:** ACT 2
- **Section:** 2G Structured Context
- **Working Title:** Crop Task에서 관찰한 접근
- **Primary Role:** TRIAL-005A의 문서 접근과 답을 요약한다.
- **Audience Question:** “Crop 명세를 묻는 Task에서 어떤 문서를 읽었고, 어떤 답을 얻었을까?”
- **Core Message:** TRIAL-005A의 최종 실행에서 image contract 문서 접근과 함께 정확한 crop 결과를 관찰했다.
- **Story Beat:** BEAT-016 — Relevant Context is disclosed for the task
- **Curriculum Trace:** ACT 2 — separation, routing, and progressive disclosure.
- **Evidence Type:** OBSERVED_PRODUCT
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; FROZEN WITH SCOPE; OBSERVED PRODUCT. 기록된 CLI 실행과 최종 반복 결과에 한정한다.
- **Visual Concept:** 요청 A의 `--crop 1 3` 질문을 회수한다. 최종 실행에서 읽은 Markdown 문서5개(`AGENTS.md`, `docs/architecture.md`, `docs/image-contracts.md`, `docs/testing.md`, `README.md`)를 접근 요약으로 나열하고 명세 문서를 강조한다. 해당 문서의 `[x_start, x_end)`와 원본 열0–3 중1·2 강조/출력 폭2/끝 좌표3 제외를 대조한다. 문서 목록은 읽기 순서가 아니며, 화살표는 문서 내용과 답의 대조 관계다. 하단은 관찰된 사실과 해석의 한계를 구분한다.
- **Demo / Case Connection:** TRIAL-005A 최종 CLI 실행의 문서 접근과 답을 요약·재구성한다. 명세 외에 architecture·README·소스·관련 테스트도 확인했다. `testing.md`와 관련 테스트 접근은 최종 실행에서 관찰했고 이전 실행과 달랐다. 관련 문서 접근과 명세에 맞는 답을 관찰한 범위로 한정한다.
- **Beginner Payoff:** 결과 주장을 repository 근거와 연결해 본다.
- **Advanced Payoff:** 선택적 접근이 관찰됐어도 접근 범위가 완벽히 좁지는 않았음을 확인한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** crop 개념을 재강의하지 않고, 실제 연 문서·문서 명세·기록된 답을 구분한다. 열1·2/폭2/끝3제외는 명세와 답의 일치를 확인하는 예다. 전체 로그 낭독·읽기 순서·내부 인과성·최소 접근·효율 향상 주장을 피하고 다음 B의 근거와 답을 확인한다.
- **Transition:** “다른 질문인 실행 의존성 요청에서는 어떤 근거로 어떤 답을 얻었을까요?”
- **Estimated Time:** 5분
- **Delivery Mode Allocation:** Case 5분 = 5분
- **Evidence / Decision References:** BEAT-016, TRIAL-005A, CLM-0014, CLM-0015, DEC-0057, DEC-0060


#### S46 — 의존성 질문은 설정과 소스로 답했다

- **Slide ID:** S46
- **ACT:** ACT 2
- **Section:** 2G Structured Context
- **Working Title:** 의존성 질문은 설정과 소스로 답했다
- **Primary Role:** TRIAL-005B의 실제 접근과 기록된 의존성 답변을 회수한다.
- **Audience Question:** “실행에 필요한 것과 빌드에만 쓰는 도구는 어떻게 구분했을까?”
- **Core Message:** TRIAL-005B는 설정·README·소스 등을 확인해 Python/표준 라이브러리 실행 조건과 별도 빌드 도구를 구분하고 third-party runtime dependency가 없다고 답했다.
- **Story Beat:** BEAT-016
- **Curriculum Trace:** ACT 2 — separation, routing, and progressive disclosure.
- **Evidence Type:** OBSERVED_PRODUCT
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; FROZEN WITH SCOPE; OBSERVED PRODUCT. 기록된 CLI 실행과 최종 반복 결과에 한정한다.
- **Visual Concept:** 왼쪽에 AGENTS.md/README/architecture 공통 안내와 pyproject.toml/setup.cfg/소스의 실제 확인을 묶는다. 오른쪽은 Python3.9+표준 라이브러리, third-party runtime 없음, setuptools/wheel 빌드 도구를 두 구역으로 구분한다. image-contracts/testing문서는 읽지 않았음을 비교의 연결로 남긴다.
- **Demo / Case Connection:** TRIAL-005B 최종 읽기 전용 실행. third-party dependency 없음은 런타임 요구사항 자체가 없다는 뜻이 아니다. pip는 문서의 빌드 명령에 쓰였으며 runtime dependency로 바꾸지 않는다.
- **Beginner Payoff:** 결과 주장을 repository 근거와 연결해 본다.
- **Advanced Payoff:** 선택적 접근이 관찰됐어도 접근 범위가 완벽히 좁지는 않았음을 확인한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** S44의 B 요청을 화면에서 끝까지 회수한다. 기록된 답과 실제 확인한 설정·소스 범위를 연결하며 파일을 열었다는 사실과 내부 인과성을 구분한다. 새 실행/설치 검사로 표현하지 않는다.
- **Transition:** “이제 A와 B의 답이 아니라 실제 문서 접근 목록을 같은 기준으로 비교합니다.”
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Case 4분 = 4분
- **Evidence / Decision References:** BEAT-016, TRIAL-005B, STATE-03, CLM-0003, CLM-0005, DEC-0060


#### S47 — 두 Task에서 상세 문서 접근이 달랐다

- **Slide ID:** S47
- **ACT:** ACT 2
- **Section:** 2G Structured Context
- **Working Title:** 두 Task에서 상세 문서 접근이 달랐다
- **Primary Role:** 앞에서 회수한 두 실제 답변의 문서 접근 차이와 해석 한계를 비교한다.
- **Audience Question:** “Task별 차이를 관찰한 것만으로 완벽한 Routing을 말할 수 있을까?”
- **Core Message:** Task에 따른 상세 문서 접근 차이는 관찰됐지만 perfect routing, token saving, 성능 향상은 입증되지 않았다.
- **Story Beat:** BEAT-016, BEAT-017
- **Curriculum Trace:** ACT 2 — separation, routing, and progressive disclosure.; ACT 2 — Context Engineering success and ACT 3 handoff.
- **Evidence Type:** OBSERVED_PRODUCT
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; FROZEN WITH SCOPE; OBSERVED PRODUCT. Routing의 보편적 우월성이나 성능 효과는 주장하지 않는다.
- **Visual Concept:** native 문서 접근 비교표의 두 열을 A·Crop 범위와 B·실행 의존성으로 표시한다. AGENTS.md·README.md·docs/architecture.md는 모두 읽음, docs/image-contracts.md·docs/testing.md는 A만 읽음, pyproject.toml·setup.cfg는 B만 읽음으로 비교한다. 차이가 있는 행의 실제 읽음 셀만 강조하고 미접근을 실패로 표시하지 않는다. 오른쪽에 관찰된 차이와 해석의 한계를 분리한다. testing.md의 최종 A 실행 범위·이전 실행과의 차이, 양쪽 소스 확인과 현재 Desktop 미검증을 표시한다.
- **Demo / Case Connection:** TRIAL-005A/B 최종 CLI 실행의 실제 접근을 요약·재구성한다. A는 이미지 명세·테스트 안내를, B는 pyproject.toml·setup.cfg를 읽었고 둘 다 AGENTS.md·구조 문서·README와 소스를 확인했다. B의 기록된 답은 third-party runtime dependency 없음이며 Python/표준 라이브러리와 build/package 도구를 구분했다. 현재 제품에서 다시 실행한 결과가 아니다.
- **Beginner Payoff:** Context가 Task에 맞게 선택되는지 확인해야 함을 안다.
- **Advanced Payoff:** 일부 선택적 접근과 넓은 접근, 실행 간 변동을 함께 해석한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** S45·46에서 각각 답까지 확인했으므로 여기서는 공통3문서와 달랐던 상세/설정4행을 비교한다. 전체 파일을 다시 설명하지 않는다. Reflection2/Q&A1은 “이 표가 입증한 것과 아직 모르는 것”만 다룬다. 다음에는 Context 정리 성과를 회수한다.
- **Transition:** “이 관찰을 포함해, Context를 정리하며 실제로 확인한 성과를 정리하겠습니다.”
- **Estimated Time:** 7분
- **Delivery Mode Allocation:** Demo 1분 (CAPTURED) + Case 3분 + Reflection 2분 + Q&A 1분 = 7분
- **Evidence / Decision References:** BEAT-016, BEAT-017, TRIAL-005A, TRIAL-005B, CLM-0014, CLM-0015, CLM-0003, CLM-0005, DEC-0058, DEC-0060


#### S48 — Context 정리에서 확인한 네 가지

- **Slide ID:** S48
- **ACT:** ACT 2
- **Section:** 2I Discussion·Transition
- **Working Title:** Context 정리에서 확인한 네 가지
- **Primary Role:** Context Engineering의 성과와 근거 범위를 회수한다.
- **Audience Question:** “무엇을 바꾸었고, 무엇까지 실제로 확인했을까?”
- **Core Message:** 공통 정보의 기록, 지침 활용, 핵심 정보를 보존한 재구성, Task별 상세 접근 차이는 각각의 보존된 근거로 확인했다. 일반적 효율 향상은 측정하지 않았다.
- **Story Beat:** BEAT-009–017
- **Curriculum Trace:** ACT 2 — observed context organization and bounded success recap.
- **Evidence Type:** OBSERVED_PRODUCT / TEACHING_MODEL
- **Claim Status:** FROZEN WITH SCOPE — 개별 State/Trial 관찰과 교육용 성과 정리를 구분한다. 일반적 효율·정확도 개선이나 단독 인과성을 주장하지 않는다.
- **Visual Concept:** 기록/지침 활용/문서 재구성/상세 접근의 네 node를 해당 State/Trial과 연결한다. 연결선은 교육의 진행 순서이며 독립적 인과효과를 뜻하지 않는다. 아래에 확인한 사실을 회수하고 성능·토큰 효과 미측정은 별도 경계로 둔다. 절차 재사용의 완성 답은 앞당기지 않는다.
- **Demo / Case Connection:** STATE-01, TRIAL-003, STATE-02→03, TRIAL-005A/B의 bounded callback. 새 Demo 시간이나 Trial이 아니다.
- **Beginner Payoff:** Context 작업으로 실제 무엇을 했는지 네 가지로 기억한다.
- **Advanced Payoff:** 구조/행동/효과 측정을 다른 수준의 주장으로 구분한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** S47의 한계만 남기지 않고 실제 성과를 긍정적으로 회수한다. 네 근거는 각각의 관찰이며 인과성 실험이나 보편 성공률을 만들지 않는다. Reflection1은 팀에서 정리할 정보 하나를 조용히 떠올리게 한다.
- **Transition:** “정보를 기록하고 찾아 쓸 길은 정리했습니다. 그런데 다음 작업의 수행 방법도 매번 다시 써야 할까요?”
- **Estimated Time:** 3분
- **Delivery Mode Allocation:** Lecture 2분 + Reflection 1분 = 3분
- **Evidence / Decision References:** BEAT-009, BEAT-010, BEAT-014, BEAT-016, BEAT-017, STATE-01, STATE-02, STATE-03, TRIAL-003, TRIAL-005A, TRIAL-005B, DEC-0060


#### S49 — 지식은 정리됐지만 절차는 반복된다

- **Slide ID:** S49
- **ACT:** ACT 2
- **Section:** 2I Discussion·Transition
- **Working Title:** 지식은 정리됐지만 절차는 반복된다
- **Primary Role:** Context Engineering을 정리하고 Harness Engineering으로 전환한다.
- **Audience Question:** “Project 정보를 잘 정리했으면 문제가 끝난 걸까?”
- **Core Message:** Prompt는 현재 원하는 것을, Project Context는 일반적으로 참인 것을, Routing은 관련 상세 정보의 위치를 다룬다. 반복되는 작업 절차는 별도의 문제로 남을 수 있다.
- **Story Beat:** BEAT-017 → BEAT-018; TRANS-005
- **Curriculum Trace:** ACT 2 — Context Engineering success and ACT 3 handoff.; ACT 3 — Context → Harness problem and bottom-up framing.
- **Evidence Type:** OBSERVED_PRODUCT / TEACHING_MODEL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; TEACHING_MODEL; Context 정리는 ACT 2의 주제이며, 다음 절차 반복 예시는 ACT 3의 질문이다. Trial Prompt만으로 전체 절차의 원인을 귀속하지 않는다.
- **Visual Concept:** 정리된 기본 안내/상세 문서를 왼쪽에 작게 회수하고 오른쪽에는 성능 조사 요청 하나와 다시 적는 측정·조사·계획·검증·비교/검토 요약을 둔다. 다음 장의 두 실제 Task 비교를 앞당기지 않는다.
- **Demo / Case Connection:** S47의 관찰된 접근 차이와 미입증 경계를 회수한 뒤, 정보를 어디서 찾을지 나눈 것과 작업 방법을 매번 요청하는 문제를 구분한다. 다음 성능 작업의 공통 절차를 교육용 도식으로 압축하고 S50에서 TRIAL-006/007 기록을 더 살펴본다. 이 장의 Discussion은 실습이나 새 Demo가 아니다.
- **Beginner Payoff:** Project 정보를 잘 주는 것과 작업 방법을 정하는 것이 다른 문제임을 이해한다.
- **Advanced Payoff:** Context와 workflow의 역할을 구분하고 다음 설계 문제를 찾는다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** S48의 성과를 반복 해설하지 않고 수행 방법을 누가 유지할지 질문한다. Transition4 뒤 Q&A6은 팀의 반복되는 방법을 묻고 마지막20초에 다음 기록으로 넘어간다. 두 실제 요청의 대응 기록은 S50에 남겨 역할을 나눈다.
- **Transition:** “우리 팀은 어떤 절차를 매번 다시 요청합니까? 다음에는 두 성능 Task의 실제 요청 기록에서 반복된 지시를 확인합니다.”
- **Estimated Time:** 10분
- **Delivery Mode Allocation:** Transition 4분 + Q&A 6분 = 10분
- **Evidence / Decision References:** BEAT-017, BEAT-018, TRANS-005, TRIAL-006, TRIAL-007, CLM-0003, CLM-0005, CLM-0014, CLM-0006, CLM-0029, CLM-0030, DEC-0059, DEC-0060


### ACT 3

#### S50 — 두 실제 요청에 같은 절차가 반복됐다

- **Slide ID:** S50
- **ACT:** ACT 3
- **Section:** 3A Repeated Procedure
- **Working Title:** 두 실제 요청에 같은 절차가 반복됐다
- **Primary Role:** ACT2의 남은 질문을 보존된 실제 두 요청으로 확인하고 작업 방법·환경 설계라는 방향을 안내한다.
- **Audience Question:** “목표가 달라도 왜 같은 작업 방법을 다시 요청할까?”
- **Core Message:** 서로 다른 두 성능 요청의 조사·계획·변경·검증 지시가 반복됐다. ACT3에서는 이 방법과 실행·검증 환경을 유지하는 문제를 다룬다.
- **Story Beat:** BEAT-018, BEAT-020
- **Curriculum Trace:** ACT 3 — Context → Harness problem and bottom-up framing.; ACT 3 — observed workflow and repository-owned Performance Skill.
- **Evidence Type:** OBSERVED_PRODUCT
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; FROZEN WITH SCOPE; PARTIAL attribution. 두 Trial의 절차 반복은 관찰됐지만 Prompt만의 효과로 귀속할 수 없다.
- **Visual Concept:** 기존 기능 삽화와 실제 요청 발췌/보존 요약의 세 행 대응을 유지한다. 상단에 Harness의 짧은 방향 안내만 추가하고 완성 구조는 후반에 둔다.
- **Demo / Case Connection:** 각 Trial의 결과는 해당 코드·입력·환경에 한정한다. 성능 수치를 일반화하지 않는다.
- **Beginner Payoff:** 작업 방법도 반복되는 요소가 될 수 있음을 본다.
- **Advanced Payoff:** Task 목표와 재사용 가능한 절차의 경계를 찾는다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** ACT2의 남은 질문을 보존된 실제 두 요청으로 확인하고 작업 방법·환경 설계라는 방향을 안내한다. 기존 기획과 근거 범위를 유지하고 실제 기록·가정·운영 모델을 구분한다.
- **Transition:** “반복된 것은 명령 하나뿐일까요? 그 명령을 언제 쓰고 결과로 무엇을 판단할지도 보겠습니다.”
- **Estimated Time:** 5분
- **Delivery Mode Allocation:** Case 5분 = 5분
- **Evidence / Decision References:** BEAT-018, BEAT-020, TRIAL-006, CLM-0006, CLM-0029, CLM-0030, TRIAL-007, DEC-0017, DEC-0060, DEC-0062


#### S51 — 테스트 명령을 언제 쓰고 무엇을 판단할까?

- **Slide ID:** S51
- **ACT:** ACT 3
- **Section:** 3A Repeated Procedure
- **Working Title:** 테스트 명령을 언제 쓰고 무엇을 판단할까?
- **Primary Role:** 명령을 아는 것에서 사용 시점과 결과 판단을 함께 정하는 것으로 연결한다.
- **Audience Question:** “같은 테스트 명령을 변경 전과 변경 후에 실행하면 각각 무엇을 확인할까?”
- **Core Message:** 테스트 명령·명세·측정 방법을 작업의 어느 시점에 사용하고, 그 결과로 무엇을 판단할지 함께 정한다. 이 수행 방법도 AGENTS.md에 기록할 수 있다.
- **Story Beat:** BEAT-019 — Knowledge and Process answer different questions
- **Curriculum Trace:** ACT 3 — Context → Harness problem; repeated workflow.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; TEACHING_MODEL; CONCEPTUAL.
- **Visual Concept:** 상단 AGENTS.md 정보 묶음에서 변경 전·변경 후·완료 판단으로 연결한다. 동일한 테스트 실행 표시를 앞의 두 시점에 재사용하고 확인 질문을 다르게 둔다. 실제 실행 결과는 표시하지 않는다.
- **Demo / Case Connection:** TRIAL-006/007의 절차 반복을 연결하되, 새 제품 기능이나 해결책은 아직 공개하지 않는다.
- **Beginner Payoff:** 같은 테스트를 실행해도 현재 상태 확인과 변경 영향 확인이라는 목적이 다를 수 있음을 이해한다.
- **Advanced Payoff:** 명령·명세를 참조하는 것에 더해 적용 시점과 결과 판단을 재사용할 수행 방법으로 명시한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** S50의 반복 요청에서 실행 시점과 판단 기준을 꺼내 구체화한 뒤 S52의 목표·기준·수행 방법 결합으로 연결한다. 저장 파일의 배타적 분류로 설명하지 않는다.
- **Transition:** “지금 본 수행 방법을 이번 요청의 목표, 프로젝트 기준과 함께 놓아 보겠습니다.”
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Lecture 4분 = 4분
- **Evidence / Decision References:** BEAT-019, TRIAL-006, TRIAL-007, CLM-0006, CLM-0029, DEC-0060, DEC-0062, DEC-0063


#### S52 — 목표·기준·방법을 한 작업에 적용한다

- **Slide ID:** S52
- **ACT:** ACT 3
- **Section:** 3B Context vs Workflow
- **Working Title:** 목표·기준·방법을 한 작업에 적용한다
- **Primary Role:** 이번 목표가 프로젝트 기준으로 둘러싼 작업에 들어오고 재사용할 방법을 그 작업에 적용하는 관계를 보여준다.
- **Audience Question:** “이번 목표를 향해 작업할 때, 무엇을 지키고 어떤 방법으로 진행할까?”
- **Core Message:** normalize 성능 조사라는 이번 목표를, 기존 이미지 동작·공개 명세를 보존하는 범위에서, 재사용할 측정·조사·검증·비교 방법을 적용해 수행한다.
- **Story Beat:** BEAT-019
- **Curriculum Trace:** ACT 3 — Context → Harness problem; repeated workflow.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; TEACHING_MODEL; CONCEPTUAL.
- **Visual Concept:** 상단 목표 요청이 아래 작업 영역에 들어온다. 기존 이미지 동작·공개 명세 보존의 테두리가 normalize 구현 조사·변경 판단을 감싸고, 오른쪽 재사용할 수행 방법에서 같은 작업으로 연결한다. S51의 변경 전/후 순서를 다시 나열하지 않는다.
- **Demo / Case Connection:** TRIAL-006/007의 반복 절차를 개념 예로 연결한다.
- **Beginner Payoff:** 목표는 할 일, 프로젝트 기준은 지킬 범위, 수행 방법은 그 범위 안에서 일하는 방식임을 한 작업에서 이해한다.
- **Advanced Payoff:** 목표 달성과 동작 보존, 수행 방법의 적용은 함께 필요하며 저장 위치의 배타적 분류가 아님을 본다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** S51에서 구체화한 수행 방법을 이번 목표·프로젝트 기준과 결합한다. 실행 시점과 판단 질문을 재설명하지 않고 작업을 향한 목표·작업을 감싸는 기준·작업에 적용할 방법의 관계를 짚는다. 다음 S53의 공유 위치 선택으로 연결한다.
- **Transition:** “같은 수행 방법이 다음 작업에도 필요하다면, 어디에서 함께 유지할까요?”
- **Estimated Time:** 5분
- **Delivery Mode Allocation:** Lecture 5분 = 5분
- **Evidence / Decision References:** BEAT-019, TRIAL-006, TRIAL-007, CLM-0006, CLM-0029, DEC-0062, DEC-0063, DEC-0064


#### S53 — 반복 절차를 Skill로 모으는 이유

- **Slide ID:** S53
- **ACT:** ACT 3
- **Section:** 3C Reusable Skill 시작
- **Working Title:** 반복 절차를 Skill로 모으는 이유
- **Primary Role:** 작업마다 바뀌는 요청과 한 곳에서 관리할 수행 방법을 연결해 프로젝트 Skill을 선택한 이유를 보여준다.
- **Audience Question:** “다음 작업에도 같은 방법이 필요하다면, 무엇을 다시 쓰고 무엇을 함께 관리할까?”
- **Core Message:** 작업마다 달라지는 목표·허용 범위·보존 조건은 이번 요청에 남기고, 같은 수행 방법은 프로젝트 Skill 한 곳에서 관리해 필요한 작업에 다시 연결하려는 선택이다.
- **Story Beat:** BEAT-020 → BEAT-021; DEC-0017
- **Curriculum Trace:** ACT 3 — observed workflow and repository-owned Performance Skill.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; TEACHING_MODEL; REQUIRES PRODUCT CHECK — 대상 Skills 표면·계정·호출 경로; DEC-0017은 ACCEPTED. 현재 교육 환경에서의 Product availability는 `REQUIRES PRODUCT CHECK`. Skill discovery/invocation Trial 결과는 다음 구간에 둔다.
- **Visual Concept:** 왼쪽 두 요청은 목표·허용 범위·보존 조건이 달라짐을 보여준다. 오른쪽 Skill 하나에서 동일한 3px 선과 작은 화살촉으로 두 요청에 연결하고, 같은 절차를 한 곳에서 관리한다는 이유를 하단에 둔다. 연결은 교육용 재사용 관계이며 실제 호출 기록이 아니다.
- **Demo / Case Connection:** 저장소 소유의 재사용 절차를 검토하기로 한 결정까지만 보여준다. 성공 결과나 Skill 전문은 제시하지 않는다.
- **Beginner Payoff:** 이번 요청에서 정할 내용과 여러 작업에 다시 연결할 방법을 구분하고 반복 절차를 Skill에 모으는 이유를 이해한다.
- **Advanced Payoff:** Task별 적용 조건과 공동 갱신할 절차의 관리 단위를 분리하며, 설계 선택과 실제 발견·호출 근거를 구분한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** S52의 다음 작업 질문을 회수해 두 요청이 같은 방법을 연결하는 모습을 보여준다. 방법의 단계별 실행을 다시 강의하지 않고 매번 재작성과 공동 관리의 차이를 설명한다. Skill은 이 사례의 구현 선택이며 실제 포함 근거는 다음 장에 둔다.
- **Transition:** “이제 당시 CLI 기록에서 이 Skill이 어떻게 발견되고, 작업 요청과 함께 호출됐는지 확인하겠습니다.”
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Lecture 4분 = 4분
- **Evidence / Decision References:** BEAT-020, BEAT-021, DEC-0017, TRIAL-006, TRIAL-007, TRIAL-008, OQ-005, DEC-0062, DEC-0064, DEC-0065, DEC-0066


#### S54 — Skill 발견·호출·본문 포함의 근거

- **Slide ID:** S54
- **ACT:** ACT 3
- **Section:** 3C Reusable Skill
- **Working Title:** Skill 발견·호출·본문 포함의 근거
- **Primary Role:** S53에서 선택한 Skill을 실제 새 작업에 연결한 기록을, 목록에서의 발견·요청의 명시 호출·실행 trace의 본문 확인이라는 세 근거로 시각화한다.
- **Audience Question:** “함께 관리할 Skill이 이번 작업에 포함됐다는 것을 어떤 기록으로 확인할까?”
- **Core Message:** TRIAL-008의 /skills 목록에는 이름·설명 일부가 보였고, 밝기 통계 작업 요청에 $graypipe-performance를 명시했다. 성공한 실행의 trace에는 같은 이름, Skill 경로와 전체 본문이 포함됐다. 이 관찰과 실제 지침 수행 여부는 구분한다.
- **Story Beat:** BEAT-021 — Repository Skill의 발견과 호출
- **Curriculum Trace:** ACT 3 — observed workflow and repository-owned Performance Skill.
- **Evidence Type:** OBSERVED_PRODUCT
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; FROZEN WITH SCOPE; REQUIRES PRODUCT CHECK — 대상 Skills 표면·계정·호출 경로; Codex CLI 0.154.0에서 관찰. Desktop 동작과 암묵적 호출은 검증하지 않음. 현재 제품 표면의 상태는 **REQUIRES PRODUCT CHECK**.
- **Visual Concept:** 왼쪽 /skills의 보존된 이름·잘린 설명, 가운데 명시 호출과 실제 요청의 발췌·번역 요약, 오른쪽 실행 trace의 이름·경로·전체 본문 영역을 가로로 연결한다. 본문을 길게 복제하지 않고 전체 본문 포함을 확인한 위치를 강조한다. 실제 UI 캡처가 아닌 기록 재구성임을 표시한다.
- **Demo / Case Connection:** DEMO-03 / TRIAL-008. 세 번째 성능 조사인 image_statistics의 실행 시간 또는 할당량 조사 요청. 기본은 검증된 정적 기록 도식이며 현재 Live/Hybrid는 미활성이다.
- **Beginner Payoff:** 목록에서 찾은 이름을 요청에 명시하고, 실행 기록에서 해당 Skill의 전체 지침이 들어왔는지 확인하는 흐름을 읽는다.
- **Advanced Payoff:** 목록의 발견 증거, 사용자가 명시한 호출, 실행에 제공된 본문 증거를 구분한다. 본문 포함만으로 지침 준수·효과·다른 제품 표면을 보장하지 않는다.
- **C++ Vision Bridge:** 없음. 이 장에서 억지로 연결하지 않는다.
- **Speaker Intent:** S53의 공통 절차 관리 의도를 실제 CLI 기록으로 회수한다. 각 영역에서 무엇을 관찰했는지 짚고, S55에서 확인할 지침과 행동의 대응은 미리 결론 내리지 않는다.
- **Transition:** “이름과 전체 본문이 포함된 근거는 확인했습니다. 다음은 그 지침과 실제 작업 기록을 대응해 보겠습니다.”
- **Estimated Time:** 5분
- **Delivery Mode Allocation:** Demo 5분 (HYBRID) = 5분
- **Evidence / Decision References:** BEAT-021, TRIAL-008, DEC-0017, OQ-005, DEC-0062, DEC-0066


#### S55 — Skill 지침과 실제 작업 기록의 대응

- **Slide ID:** S55
- **ACT:** ACT 3
- **Section:** 3C Reusable Skill
- **Working Title:** Skill 지침과 실제 작업 기록의 대응
- **Primary Role:** S54의 본문 포함 증거를 회수하고, Skill의 수행 지침과 실제 실행 출력·변경 전 메시지·diff를 행별로 대응해 수행 근거를 읽게 한다.
- **Audience Question:** “Skill 본문이 들어왔다면, 그 지침을 실제로 수행한 근거는 어디에서 확인할까?”
- **Core Message:** 본문 포함은 작업에 제공된 지침의 근거다. 실제 수행은 TRIAL-008의 기준선 실행 출력, 변경 전 계획 메시지와 최종 diff, 테스트·동일 조건 측정 기록으로 확인한다. 세 가지 관찰의 대응과 전체 지침 준수·Skill 단독 효과는 구분한다.
- **Story Beat:** BEAT-021 — 반복 절차의 위치 이동
- **Curriculum Trace:** ACT 3 — observed workflow and repository-owned Performance Skill.
- **Evidence Type:** OBSERVED_PRODUCT
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; FROZEN WITH SCOPE; REQUIRES PRODUCT CHECK — 대상 Skills 표면·계정·호출 경로; 관찰된 차이는 절차 책임의 위치다. Skill의 우수성, 토큰 절감, 속도 향상은 입증되지 않음.
- **Visual Concept:** 상단에서 앞 장의 본문 포함 확인과 이번 장의 수행 기록 대조를 구분한다. 번호가 있는 native table의 왼쪽은 Skill 지침의 한국어 번역 요약, 오른쪽은 실행 출력·메시지·diff의 관찰 요약이다. 01 기준선3회와6항목, 02 조건부 계획과허용 범위의변경, 03 테스트1/1·11/11과동일측정3회를 대응한다. 실제 캡처가 아닌 기록 재구성임을 표시한다.
- **Demo / Case Connection:** DEMO-03 / TRIAL-008 / STATE-04 Skill. S54의 발견·호출·본문 포함에서 이어지는 작업 기록 대조다. 기본은 검증된 정적 자료이며 현재 Live/Hybrid는 미활성이다. Task별 목표·6항목 보존·허용 범위는 실제 요청에 남겨둔 조건으로 Notes에서 회수한다.
- **Beginner Payoff:** 지침이 입력에 들어온 사실과, 실제로 측정·계획·검증을 수행한 기록을 나누어 확인한다.
- **Advanced Payoff:** 각 지침을 실행 출력·시점이 있는 메시지·최종 diff 같은 적절한 근거에 연결한다. 계획 지침의 조건부 표현을 보존하고 관찰된 대응을 모든 지침 준수나 독립적 인과성으로 일반화하지 않는다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** S54에서 확인한 전체 본문 포함을 짧게 회수한 뒤 세 행의 지침과 기록을 대조한다. 수치는 실행 횟수·확인 범위로만 사용하고 후보 선택과 성능 개선량은 뒤 슬라이드로 넘긴다.
- **Transition:** “지침과 실제 작업 기록의 대응은 확인했습니다. 이 Skill에 재사용할 절차와 이번 근거로 판단할 답을 어떻게 나눌까요?”
- **Estimated Time:** 6분
- **Delivery Mode Allocation:** Demo 3분 (HYBRID) + Case 3분 = 6분
- **Evidence / Decision References:** BEAT-021, TRIAL-007, TRIAL-008, DEC-0017, OQ-005, DEC-0062, DEC-0067


#### S56 — 절차는 재사용하고, 답은 근거로 정한다

- **Slide ID:** S56
- **ACT:** ACT 3
- **Section:** 3D Working Harness
- **Working Title:** 절차는 재사용하고, 답은 근거로 정한다
- **Primary Role:** 재사용한 방법이 특정 최적화 답을 공급한다는 오해를 막고 후보 선택으로 연결한다.
- **Audience Question:** “Skill에 고정할 방법과 이번 Task에서 정할 답은 무엇일까?”
- **Core Message:** Skill은 편집 전 재현 가능한 기준선, 검증·비교와 변경 보류 조건을 담는다. 알고리즘·측정값·trade-off는 Task별 근거로 결정하고 정답이나 Trial 수치를 미리 넣지 않는다.
- **Story Beat:** BEAT-022 — 재사용 가능한 절차와 작업별 판단의 분리
- **Curriculum Trace:** ACT 3 — observed workflow, verification, and Minimum Effective Harness.
- **Evidence Type:** OBSERVED_PRODUCT / TEACHING_MODEL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; FROZEN WITH SCOPE; TEACHING_MODEL; Repository Skill이 절차를 담도록 설계됐다는 사실은 관찰 가능. Skill이 답을 더 잘 찾아준다는 주장은 하지 않는다.
- **Visual Concept:** 왼쪽 pale 패널은 실제 Skill에서 번역 요약한 기준선 측정·동일 조건 검증/비교·근거와한계 보고를 번호로 묶고 다음 작업에도 재사용함을 표시한다. 적용 선으로 오른쪽 이번 작업의 측정값·테스트·diff에 연결한다. 아래 구현 후보·시간/할당량·trade-off 질문에서 변경 채택/보류의 교육용 판단 경로로 갈라진다. 조건을 양쪽에 표시하며 실제 Trial 결과처럼 강조하지 않는다.
- **Demo / Case Connection:** STATE-04의 graypipe-performance Skill에 특정 구현·benchmark 파일명·Trial 수치·macOS/Python 조건을 고정 답으로 넣지 않은 점을 Notes에서 확인한다. 오른쪽은 밝기 통계 작업의 질문과 허용된 판단 경로이며 실제 후보 선택은 S57에서 회수한다. Lecture 3분으로 DEMO-03의8 Demo분에 더하지 않는다.
- **Beginner Payoff:** 다음 작업에도 쓸 확인 방법과 이번 기록으로 채울 구현·측정값·trade-off를 구분한다. 변경 보류도 근거에 따른 유효한 답일 수 있음을 이해한다.
- **Advanced Payoff:** 측정값은 해당 입력·환경에서 얻고, 구현 채택은 동작 보존·같은 조건 비교·trade-off에 근거한다. 특정 결과를 재사용 절차의 고정 답으로 섞지 않으며 no-change의 허용과 실제 관찰을 구분한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** S55에서 지침과 수행 기록을 대응한 뒤, 무엇을 다음 작업에도 유지하고 무엇을 매번 근거로 채우는지 설명한다. 왼쪽 지침 요약, 오른쪽 근거·질문·판단 경로 순으로 읽고 S57의 실제 후보 선택으로 넘긴다. 절차 전체나 실제 실행 순서를 재현하는 그림이 아님을 유지한다.
- **Transition:** “그렇다면 밝기 통계의 구현 후보는 어떤 근거로 선택했을까요?”
- **Estimated Time:** 3분
- **Delivery Mode Allocation:** Lecture 3분 = 3분
- **Evidence / Decision References:** BEAT-022, DEC-0017, STATE-04-PERF, TRIAL-008, INV-VERIFY-001, DEC-0062, DEC-0068


#### S57 — 밝기 통계 계산의 성능 개선 후보

- **Slide ID:** S57
- **ACT:** ACT 3
- **Section:** 3D Working Harness
- **Working Title:** 밝기 통계 계산의 성능 개선 후보
- **Primary Role:** 최적화 기법 강의 대신 근거에 따른 후보 선택을 보여준다.
- **Audience Question:** “밝기 통계의 결과를 유지하면서, 어떤 계산 방식을 선택했을까요?”
- **Core Message:** TRIAL-008에서는 결과 6항목을 보존한 후보들의 실행시간과 traced allocation을 함께 봤다. 느린 수동 순회는 제외하고 낮은 할당량과 더 나은 실행시간의 행 단위 reduction을 선택했다.
- **Story Beat:** BEAT-022 — 측정과 비교를 거친 후보 선택
- **Curriculum Trace:** ACT 3 — observed workflow, verification, and Minimum Effective Harness.
- **Evidence Type:** OBSERVED_PRODUCT
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; FROZEN WITH SCOPE; 해당 Trial의 후보 간 비교 결과. Skill이 후보를 발견하거나 그 결과를 일으켰다는 인과 주장은 하지 않는다.
- **Visual Concept:** 상단에서 이미지의 최소·최대·평균을 구하는 작업과 기존 구현(행별 픽셀→전체 임시 리스트→통계)을 native 도식으로 설명한다. 하단은 임시 리스트 없이 계산한 두 후보의 시간 방향과 제외/선택을 비교한다. 결과6항목 보존·기존보다 낮은 Python 할당 피크를 명시하며 정확한 후보 수치는 표시하지 않는다. 칸은 실제 픽셀 값이나 측정량이 아니다.
- **Demo / Case Connection:** TRIAL-008의 image_statistics 후보 비교 요약. 수동 단일 순회와 행 단위 내장 min/max/sum을 정성적으로 비교한다. 기존 평탄화 구현은 할당량 비교 기준이며 S58의 formal 제품 상태 측정과 구분한다.
- **Beginner Payoff:** 성능 개선은 아이디어가 아니라 같은 조건의 비교로 판단한다.
- **Advanced Payoff:** 시간·메모리 trade-off를 따로 보고 후보를 선택한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** S56의 판단 질문을 구체적 밝기 통계 작업으로 회수한다. 작업 목적, 기존 임시 리스트, 두 대안, 기록에 따른 선택 순으로 읽는다. 처음 듣는 청중에게 후보 이름만 제시하지 않는다. 알고리즘 최적화 강의로 확대하지 않는다.
- **Transition:** “선택한 행 단위 계산을 제품 코드에 반영한 뒤, 실행시간·임시 메모리·동작을 다시 확인한 기록을 보겠습니다.”
- **Estimated Time:** 5분
- **Delivery Mode Allocation:** Case 5분 = 5분
- **Evidence / Decision References:** BEAT-022, TRIAL-008, STATE-04-PERF, INV-VERIFY-001, DEC-0062, DEC-0069, DEC-0070


#### S58 — 선택한 변경의 시간·메모리·동작 확인

- **Slide ID:** S58
- **ACT:** ACT 3
- **Section:** 3D Working Harness
- **Working Title:** 선택한 변경의 시간·메모리·동작 확인
- **Primary Role:** 재사용 절차 사례의 결과를 동작 확인과 동일 조건 측정으로 회수한다.
- **Audience Question:** “선택한 변경을 제품에 반영한 뒤, 시간·메모리·동작은 각각 어떻게 확인됐을까요?”
- **Core Message:** STATE-04→STATE-04-PERF 밝기 통계 변경은 기록된 입력·환경에서 동작 검사와 같은 조건의 측정을 거쳤다. 기존 수치와 검사 결과를 유지하고 Harness/Skill의 단독 인과효과와 구분한다.
- **Story Beat:** BEAT-022, BEAT-037 — bounded change와 Working Harness Success
- **Curriculum Trace:** ACT 3 — observed workflow, verification, and Minimum Effective Harness.; ACT 3 — Tools, Verification, Harness reveal, and Working Harness Success; ACT 3 → ACT 4 handoff.
- **Evidence Type:** OBSERVED_PRODUCT
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; FROZEN WITH SCOPE; 해당 프로젝트와 입력·환경에서 관찰된 값이다. Harness가 성능 향상을 일으켰다고 말하지 않는다.
- **Visual Concept:** 선택한 변경을 한 문장으로 회수하고, 실행시간 native chart / Python 할당 피크 전후 / 결과6항목·테스트·CLI 확인을 세 영역으로 구분한다. 기존15.468→10.769ms/call과6,675,804→380B, 검증 결과를 그대로 표시한다. 시간축은0에서 시작한다.
- **Demo / Case Connection:** STATE-04-PERF에 반영된 row-reduction 변경과 해당 상태의 검증 결과.
- **Beginner Payoff:** AI의 제안은 테스트와 측정으로 확인한 뒤 결과물로 반영한다.
- **Advanced Payoff:** 원인에 대한 주장과 시스템을 사용해 검증한 관찰 결과를 분리한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** S57의 후보 선택과 별도인 formal 제품 변경 전후 기록을 보여준다. 구현 회수, 시간, 임시 메모리, 동작 검증 순으로 한 영역씩 짚으며 결과 유지와 측정 범위를 함께 설명한다. 결과를 Harness/Skill의 단독 효과로 해석하지 않는다.
- **Transition:** “이 작업에 더 필요했던 구조도 있었을까요? 역할을 나누는 선택부터 검토하겠습니다.”
- **Estimated Time:** 5분
- **Delivery Mode Allocation:** Case 5분 = 5분
- **Evidence / Decision References:** BEAT-022, BEAT-037, STATE-04-PERF, STATE-04, TRIAL-008, INV-VERIFY-001, STATE-00, DEC-0018, INV-DEMO-003, DEC-0062, DEC-0070


#### S59 — 독립 조사를 나누면 무엇이 달라질까?

- **Slide ID:** S59
- **ACT:** ACT 3
- **Section:** 3E Conditional Subagent Decision
- **Working Title:** 독립 조사를 나누면 무엇이 달라질까?
- **Primary Role:** Subagent가 해결할 문제와 활용 관계를 현재 사례의 보류 결론보다 먼저 설명한다.
- **Audience Question:** “한 Agent에 모인 조사 중 서로 기다리지 않아도 되는 부분은 무엇일까?”
- **Core Message:** 독립 조사와 별도 Context의 가치가 있고 결과 형식·전달 지점·통합 책임을 정할 수 있다면 역할 분리를 검토한다. C++ Vision 사례는 교육용 가정이며 조정·중복·전달·통합 비용을 함께 본다.
- **Story Beat:** BEAT-023–025 — Subagent 필요성 판단
- **Curriculum Trace:** ACT 3 — conditional role/context separation.; ACT 3 — role/context complexity and Subagents.; ACT 3 — conditional Subagent decision.
- **Evidence Type:** CONCEPTUAL / TEACHING_MODEL
- **Claim Status:** CONCEPTUAL CASE / TEACHING MODEL — 기존 C++ 역할 분리 가정을 먼저 설명한다. 실제 Subagent 실행·이득·현재 제품 기능의 관찰이 아니다.
- **Visual Concept:** 명시적 CONCEPTUAL C++ 성능/빌드/테스트 독립 조사 세 패널 → 주 Agent의 통합·최종 검토. 미측정 이득을 표시하지 않는다.
- **Demo / Case Connection:** DEMO-07: 기존 C++ 독립 조사 가정을 먼저 설명. 실제 Subagent 실행 없음. Demo3분 VISUAL, Q&A1분.
- **Beginner Payoff:** 역할별로 필요한 정보로 조사하고 주 Agent가 합치는 관계를 이해한다.
- **Advanced Payoff:** 독립성·Context 분리의 가치와 조정·중복·전달·통합 비용을 함께 판단한다.
- **C++ Vision Bridge:** CONTEXTUAL — 기존 C++ 독립 조사 가정. 실제 Subagent 실행이나 병렬 이득이 아니다.
- **Speaker Intent:** Subagent가 해결할 문제와 활용 관계를 현재 사례의 보류 결론보다 먼저 설명한다. 기존 기획과 근거 범위를 유지하고 실제 기록·가정·운영 모델을 구분한다.
- **Transition:** “그 기준을 방금 밝기 통계 작업에 적용하면, 나누는 것이 필요했을까요?”
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Demo 3분 (VISUAL) + Q&A 1분 = 4분
- **Evidence / Decision References:** BEAT-023, DEC-0018, CLM-0007, BEAT-024, BEAT-025, DEC-0062


#### S60 — 이번 작업은 나눌 근거가 충분했을까?

- **Slide ID:** S60
- **ACT:** ACT 3
- **Section:** 3E Conditional Subagent Decision
- **Working Title:** 이번 작업은 나눌 근거가 충분했을까?
- **Primary Role:** 앞 장의 역할 분리 기준을 현재 사례에 적용해 선택 이유를 회수한다.
- **Audience Question:** “밝기 통계 작업의 조사·변경·검증을 실제로 독립시킬 수 있었을까?”
- **Core Message:** 현재 작업은 같은 성능 경로·명세를 공유하고 조사→변경→검증의 의존성이 높았다. 별도 Context 이득과 결과 통합 비용을 검토한 결과 Subagent를 추가하지 않았다.
- **Story Beat:** BEAT-023–025 — 조건부 Subagent 판단
- **Curriculum Trace:** ACT 3 — conditional role/context separation.; ACT 3 — role/context complexity and Subagents.; ACT 3 — conditional Subagent decision.
- **Evidence Type:** OBSERVED_PRODUCT / TEACHING_MODEL
- **Claim Status:** FROZEN WITH SCOPE / TEACHING MODEL — DEC-0018 현재 Task 감사의 판단이며 실제 Subagent Trial이 아니다. 일반적 불필요성이나 기능 부재를 주장하지 않는다.
- **Visual Concept:** 조사→변경→검증의 의존 관계와 독립성/Context/통합 비용, 현재 추가하지 않았다는 판단을 분리한다.
- **Demo / Case Connection:** DEMO-07: DEC-0018 현재 작업 판단을 회수. Lecture1분, Demo2분 VISUAL, Q&A1분.
- **Beginner Payoff:** 현재 Task의 앞뒤 의존성에 따라 역할 분리 여부를 판단한다.
- **Advanced Payoff:** NOT JUSTIFIED YET는 현재 감사의 선택이며 일반적 기능 가치와 다르다.
- **C++ Vision Bridge:** S59의 가정을 현재 Python Task와 구분해 회수한다.
- **Speaker Intent:** 앞 장의 역할 분리 기준을 현재 사례에 적용해 선택 이유를 회수한다. 기존 기획과 근거 범위를 유지하고 실제 기록·가정·운영 모델을 구분한다.
- **Transition:** “역할 분리의 필요성을 판단했습니다. 다음 작업에 별도로 남길 지식도 있었을까요?”
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Lecture 1분 + Demo 2분 (VISUAL) + Q&A 1분 = 4분
- **Evidence / Decision References:** BEAT-023, DEC-0018, CLM-0007, BEAT-024, BEAT-025, DEC-0062


#### S61 — 다음 작업에서도 다시 찾을 지식인가?

- **Slide ID:** S61
- **ACT:** ACT 3
- **Section:** 3F Conditional Memory Decision
- **Working Title:** 다음 작업에서도 다시 찾을 지식인가?
- **Primary Role:** Memory의 필요성과 관리 부담을 교육용 가정으로 먼저 이해하게 한다.
- **Audience Question:** “조사로 얻은 지식이 다음 작업에도 필요하다면 무엇을 남겨야 할까?”
- **Core Message:** 현재 Task에 필요한 Context와 다음 Task에도 보존할 가치가 있는 지식을 구분한다. 출처·적용 범위·갱신 조건을 관리하고 기존 문서에 있으면 그 출처를 참조한다.
- **Story Beat:** BEAT-026–028 — Memory 후보 검토
- **Curriculum Trace:** ACT 3 — conditional Subagent decision.; ACT 3 — Subagent trade-offs and Minimum Effective Harness.; ACT 3 — repeated discovery and Context vs Memory.
- **Evidence Type:** CONCEPTUAL / TEACHING_MODEL
- **Claim Status:** CONCEPTUAL CASE / TEACHING MODEL — 작업 간 지식 관리 가정이다. 현재 Demo에 Memory를 추가했거나 제품이 자동 기억·회수한다는 주장이 아니다.
- **Visual Concept:** CONCEPTUAL Task A 조사 → 출처·범위·갱신 조건과 함께 보존 가치 판단 → Task B의 현재 기준 대조. 자동 저장/정확성 보장 없이 표현한다.
- **Demo / Case Connection:** DEMO-08: 작업 간 지식 재사용의 명시적 교육용 가정. Demo2분 VISUAL, Case2분. 실제 Memory 사용 없음.
- **Beginner Payoff:** 지금 필요한 정보와 다음 작업에도 남길지 판단할 지식을 구분한다.
- **Advanced Payoff:** 출처·범위·신선도·갱신/무효화와 유지 비용을 관리한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** Memory의 필요성과 관리 부담을 교육용 가정으로 먼저 이해하게 한다. 기존 기획과 근거 범위를 유지하고 실제 기록·가정·운영 모델을 구분한다.
- **Transition:** “이제 원래 출처와 보존 기준을 놓고, 현재 Demo에 별도 후보가 있었는지 보겠습니다.”
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Demo 2분 (VISUAL) + Case 2분 = 4분
- **Evidence / Decision References:** BEAT-026, CLM-0007, INV-DEMO-003, DEC-0018, OQ-013, BEAT-027, BEAT-028, DEC-0062


#### S62 — 남길지, 원래 출처를 참조할지 판단한다

- **Slide ID:** S62
- **ACT:** ACT 3
- **Section:** 3F Conditional Memory Decision
- **Working Title:** 남길지, 원래 출처를 참조할지 판단한다
- **Primary Role:** Memory 기준과 현재 지식 감사의 실제 결론을 한 장에서 회수한다.
- **Audience Question:** “현재 Demo 지식은 이미 어디에 있고 별도 보존할 가치가 있었을까?”
- **Core Message:** 재발견 비용·다음 작업 재사용·출처와 적용 범위·갱신 조건을 보고 기존 출처를 먼저 확인한다. 현재 계약/구조/절차/측정 기록은 각각 근거가 있어 별도 Memory 후보를 찾지 못했다.
- **Story Beat:** BEAT-026–028 — Memory 필요성의 조건부 판단
- **Curriculum Trace:** ACT 3 — conditional Subagent decision.; ACT 3 — Subagent trade-offs and Minimum Effective Harness.; ACT 3 — repeated discovery and Context vs Memory.
- **Evidence Type:** OBSERVED_PRODUCT / TEACHING_MODEL
- **Claim Status:** FROZEN WITH SCOPE / TEACHING MODEL — DEC-0018 현재 Demo의 지식 감사와 보존 기준이다. 제품 Memory의 범위·효과나 일반적 불필요성을 주장하지 않는다.
- **Visual Concept:** 네 판단 기준 요약 위에 현재 지식4종→원래 출처를 대응하고 별도 Memory를 추가하지 않았다는 결론을 둔다.
- **Demo / Case Connection:** DEMO-08: 기존 지식 출처 감사와 별도 Memory 후보 없음의 결론. Lecture4분, 추가 Demo 시간 없음.
- **Beginner Payoff:** 원래 명세·문서·절차·측정 기록을 먼저 찾는다.
- **Advanced Payoff:** 같은 프로젝트의 다음 Task에도 재사용할 수 있다. 별도 Memory의 필요성은 출처와 유지 비용으로 판단한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** Memory 기준과 현재 지식 감사의 실제 결론을 한 장에서 회수한다. 기존 기획과 근거 범위를 유지하고 실제 기록·가정·운영 모델을 구분한다.
- **Transition:** “이 선택들을 모으면 이번 문제를 위해 실제로 사용한 구조는 무엇이었을까요?”
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Lecture 4분 = 4분
- **Evidence / Decision References:** BEAT-026, CLM-0007, INV-DEMO-003, DEC-0018, OQ-013, BEAT-027, BEAT-028, DEC-0062


#### S63 — 이번 사례에서 실제로 사용한 구조

- **Slide ID:** S63
- **ACT:** ACT 3
- **Section:** 3G Minimum Effective Harness
- **Working Title:** 이번 사례에서 실제로 사용한 구조
- **Primary Role:** 이 사례의 구체적인 구성과 사용 이유를 회수한다.
- **Audience Question:** “이번 문제에서 어떤 책임을 어떤 기존 자료와 도구가 맡았을까?”
- **Core Message:** 밝기 통계 목표/범위, AGENTS.md와 상세 문서, 재사용 Skill, 테스트·benchmark·실행 조건이 각각 목표·지식·방법·완료 근거를 맡았다. Subagent와 별도 Memory는 추가하지 않았다.
- **Story Beat:** BEAT-035, BEAT-037 — 해결된 마찰에서 Harness 구조 도출
- **Curriculum Trace:** ACT 3 — Tools, verification, and Harness reveal.; ACT 3 — Tools, Verification, Harness reveal, and Working Harness Success; ACT 3 → ACT 4 handoff.
- **Evidence Type:** OBSERVED_PRODUCT / TEACHING_MODEL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; FROZEN WITH SCOPE; TEACHING_MODEL; 이번 작업에서 관찰한 구성을 일반적인 기능 수 우위 주장으로 확장하지 않는다.
- **Visual Concept:** 현재 목표/참고할 정보/반복할 방법/완료 근거의 네 책임을 실제 사용한 구성에 대응한다. 전체 구조 정의는 다음 장에서 연결한다.
- **Demo / Case Connection:** STATE-04-PERF까지 이어진 작업과 검증 흐름.
- **Beginner Payoff:** Harness는 기능을 많이 모으는 일이 아니라 현재 문제에 필요한 구조를 마련하는 일이다.
- **Advanced Payoff:** 최소 구성은 문제와 검증 요건에 따라 달라진다는 점을 판단 기준으로 삼는다.
- **C++ Vision Bridge:** Slide 64 이후의 전이에서 빌드·테스트·benchmark 절차로 연결한다. Python Skill을 그대로 옮긴다고 가정하지 않는다.
- **Speaker Intent:** 이 사례의 구체적인 구성과 사용 이유를 회수한다. 기존 기획과 근거 범위를 유지하고 실제 기록·가정·운영 모델을 구분한다.
- **Transition:** “이 파일과 도구들이 어떤 관계로 작동하는지 전체 작업 환경으로 묶겠습니다.”
- **Estimated Time:** 3분
- **Delivery Mode Allocation:** Demo 3분 (CAPTURED) = 3분
- **Evidence / Decision References:** BEAT-035, BEAT-037, STATE-04-PERF, CLM-0016, CLM-0017, CLM-0030, OQ-011, STATE-00, DEC-0018, INV-DEMO-003, INV-VERIFY-001, DEC-0062


#### S64 — 이 구성이 함께 작동하는 것이 Harness다

- **Slide ID:** S64
- **ACT:** ACT 3
- **Section:** 3G Minimum Effective Harness 완성
- **Working Title:** 이 구성이 함께 작동하는 것이 Harness다
- **Primary Role:** 앞 장의 실제 구성 목록을 전체 작업 관계로 묶어 Harness 정의를 완성한다.
- **Audience Question:** “목표, Agent의 수행 방법, 완료 근거는 어떤 환경 안에서 연결될까?”
- **Core Message:** 이 과정에서 Harness는 Agent가 신뢰성 있게 일하도록 목표·Context·재사용 절차·실행 도구·검증·검토 조건을 연결한 작업 환경과 방법의 운영 모델이다.
- **Story Beat:** BEAT-035, BEAT-036
- **Curriculum Trace:** ACT 3 — Tools, verification, and Harness reveal.
- **Evidence Type:** OBSERVED_PRODUCT / TEACHING_MODEL
- **Claim Status:** TEACHING_MODEL — DEC-0023에서 확정한 이 과정의 Harness 정의. 공식 OpenAI 정의나 보편적 분류 체계가 아니다.
- **Visual Concept:** 작업 환경 프레임 안 목표/허용 범위→Agent 수행→완료 근거/검토와 Context·절차·도구·입력·권한·측정 조건을 연결한다. 관찰 구성은 별도 아래 행에 둔다.
- **Demo / Case Connection:** STATE-04-PERF에서 관찰한 요소를 근거로 삼되, Subagent와 Memory를 필수 요소로 넣지 않는다.
- **Beginner Payoff:** Agent에게 Project 정보뿐 아니라 일하는 환경과 확인 방법도 필요하다는 점을 이해한다.
- **Advanced Payoff:** Harness를 특정 파일이나 기능이 아니라 Project별 신뢰성 문제를 해결하는 시스템으로 본다.
- **C++ Vision Bridge:** Slide 66에서 다른 Project의 환경으로 전이한다.
- **Speaker Intent:** 앞 장의 실제 구성 목록을 전체 작업 관계로 묶어 Harness 정의를 완성한다. 기존 기획과 근거 범위를 유지하고 실제 기록·가정·운영 모델을 구분한다.
- **Transition:** “그 실행 조건이 Repository 파일만으로 모두 정해질까요?”
- **Estimated Time:** 6분
- **Delivery Mode Allocation:** Lecture 4분 + Demo 2분 (CAPTURED) = 6분
- **Evidence / Decision References:** BEAT-035, BEAT-036, STATE-04-PERF, OQ-011, CLM-0016, CLM-0017, CLM-0030, DEC-0062


#### S65 — 같은 Repository라도 실행 조건은 다를 수 있다

- **Slide ID:** S65
- **ACT:** ACT 3
- **Section:** 3G Minimum Effective Harness 완성
- **Working Title:** 같은 Repository라도 실행 조건은 다를 수 있다
- **Primary Role:** 제품 기능 목록을 강의하지 않고 실행 조건을 기록해야 하는 이유를 제한된 Meta 관찰로 예고한다.
- **Audience Question:** “결과를 해석하려면 Repository 밖에서 무엇이 들어왔는지도 알아야 하지 않을까?”
- **Core Message:** 과거 Trial에서 전역 지침·Skills와 시작 경고의 흔적이 있었다. 적용 지침, 모델/설정, 권한, OS/runtime도 결과 해석 시 기록할 조건이지만 모든 항목의 인과효과나 완전한 환경 감사를 입증한 것은 아니다.
- **Story Beat:** BEAT-033, BEAT-036
- **Curriculum Trace:** ACT 3 — Tools, verification, and Harness reveal.
- **Evidence Type:** OBSERVED_META / TEACHING_MODEL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; TEACHING_MODEL; REQUIRES PRODUCT CHECK — 대상 구성·기능 이용 가능성·trust·permissions; Trial 기록에서 global Harness 영향이 관찰됐다. 이는 전체 환경을 빠짐없이 파악했다거나 모든 항목이 결과를 바꿨다는 뜻은 아니다.
- **Visual Concept:** Repository 내부 구성 + 바깥에서 관찰된 지침/경고를 구분하고 기록할 조건과 미입증 인과효과를 분리한다. Meta 이중선 프레임을 유지한다.
- **Demo / Case Connection:** TRIAL 기록에서 확인된 global 환경 영향만 짧게 예고한다. 상세 근거는 ACT 4의 DEMO-04B에 둔다.
- **Beginner Payoff:** 결과가 예상과 다르면 Repository의 코드와 Prompt 외에도 환경을 살펴볼 수 있다.
- **Advanced Payoff:** Trial의 인과 해석에서 ambient Harness 요인을 기록하고 한계를 드러낸다.
- **C++ Vision Bridge:** 같은 C++ Repository라도 실행 설정, 권한, Toolchain 같은 환경 조건이 달라질 수 있다는 정도로 연결한다.
- **Speaker Intent:** 제품 기능 목록을 강의하지 않고 실행 조건을 기록해야 하는 이유를 제한된 Meta 관찰로 예고한다. 기존 기획과 근거 범위를 유지하고 실제 기록·가정·운영 모델을 구분한다.
- **Transition:** “이 작업 방법과 확인 기준을 우리 C++ 검사 업무로 옮겨 보겠습니다.”
- **Estimated Time:** 3분
- **Delivery Mode Allocation:** Lecture 3분 = 3분
- **Evidence / Decision References:** BEAT-033, BEAT-036, DEMO-04B, CLM-0016, CLM-0017, OQ-003, OQ-005, CLM-0030, OQ-011, DEC-0062


#### S66 — 우리 C++ 검사 작업에 옮겨 보면

- **Slide ID:** S66
- **ACT:** ACT 3
- **Section:** 3H C++ Vision Transfer
- **Working Title:** 우리 C++ 검사 작업에 옮겨 보면
- **Primary Role:** 앞의 구체적인 판단을 승인된 제조 검사 파이프라인 삽화와 연결한다.
- **Audience Question:** “밝기 통계에서 사용한 판단을 우리 검사 파이프라인에는 어떻게 적용할까?”
- **Core Message:** Python 코드를 복사하지 않고 지킬 명세, 반복할 수행 방법, 완료를 판단할 근거를 C++ Vision 검사 업무에 대응한다. 실제 C++ 구현·회사 장비·측정 성과는 아니다.
- **Story Beat:** BEAT-036
- **Curriculum Trace:** ACT 3 — Tools, verification, and Harness reveal.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; TEACHING_MODEL; REQUIRES PRODUCT CHECK — 구체적 Windows·shell·IDE·hardware 지시를 추가하는 경우; 교육용 전이 사례다. C++ 프로젝트마다 실제 도구·규칙이 다를 수 있다.
- **Visual Concept:** 기존 승인된 카메라/영상/처리/결과 삽화를 보존하고 아래 세 기준을 ROI·픽셀·빌드 조건, 기준선/경로 조사, 동작/회귀/성능 검증에 대응한다.
- **Demo / Case Connection:** Python의 Project Context, `unittest`, benchmark script, reusable workflow를 C++의 CMake/build 설정, 모듈 계약·알고리즘 제약·하드웨어 가정, GoogleTest/CTest 또는 통합 테스트, Release build와 benchmark/profiler에 대응시킨다.
- **Beginner Payoff:** 언어가 달라도 먼저 Project의 규칙과 검증 방법을 찾는다.
- **Advanced Payoff:** 성능 Workflow가 Project의 빌드 모드, 하드웨어 가정, 회귀 검증과 연결되도록 설계한다.
- **C++ Vision Bridge:** 이 Slide의 중심. 도구 선택은 예시로만 들고 팀의 실제 표준을 확인하도록 한다.
- **Speaker Intent:** 앞의 구체적인 판단을 승인된 제조 검사 파이프라인 삽화와 연결한다. 기존 기획과 근거 범위를 유지하고 실제 기록·가정·운영 모델을 구분한다.
- **Transition:** “우리 팀에서 먼저 정리할 반복 한 가지와 유지할 책임을 골라 보겠습니다.”
- **Estimated Time:** 5분
- **Delivery Mode Allocation:** Lecture 5분 = 5분
- **Evidence / Decision References:** BEAT-036, CLM-0016, CLM-0017, CLM-0030, OQ-011, DEC-0062


#### S67 — 우리 팀의 반복 한 가지를 고르면

- **Slide ID:** S67
- **ACT:** ACT 3
- **Section:** 3I Discussion / Reflection / Transition
- **Working Title:** 우리 팀의 반복 한 가지를 고르면
- **Primary Role:** 개인 성찰을 구체적인 유지 책임으로 회수하고 ACT4에 프로젝트 변화 점검을 넘긴다.
- **Audience Question:** “내 업무에서 먼저 정리할 반복과 유지할 책임은 무엇일까?”
- **Core Message:** 반복 정보·반복 절차·완료 근거 중 현재 마찰을 하나 고르고 어디에 두며 누가 검토·갱신할지 판단한다. 현재의 성공을 보존한 채 다음 ACT의 프로젝트 변화 질문을 연다.
- **Story Beat:** BEAT-035–037, BEAT-038로의 전환
- **Curriculum Trace:** ACT 3 — Tools, verification, and Harness reveal.; ACT 3 — Tools, Verification, Harness reveal, and Working Harness Success; ACT 3 → ACT 4 handoff.; ACT 4 — conceptual stale-Harness case.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; TEACHING_MODEL; Subagent와 Memory는 조건부 선택이다. Verification은 실제 작업의 필요와 위험에 맞춰 둔다.
- **Visual Concept:** 세 성찰 관점과 어디에 두고 누가 갱신할지의 질문. 마지막 줄에 프로젝트 변화 뒤 방법을 어떻게 점검할지 제시하며 S68의 결과 회수와 구분한다.
- **Demo / Case Connection:** STATE-04-PERF에서 Subagent와 Memory 없이 성공한 bounded Harness를 회고한다.
- **Beginner Payoff:** 자기 업무에서 먼저 고칠 반복 마찰 하나를 생각해 본다.
- **Advanced Payoff:** 필요한 구조를 증거와 비용에 따라 선택하고 불필요한 구성은 보류한다.
- **C++ Vision Bridge:** 앞 Slide의 C++ 적용 질문을 청중의 Project로 가져온다.
- **Speaker Intent:** 개인 성찰을 구체적인 유지 책임으로 회수하고 ACT4에 프로젝트 변화 점검을 넘긴다. 기존 기획과 근거 범위를 유지하고 실제 기록·가정·운영 모델을 구분한다.
- **Transition:** “여기까지 실제로 확인한 성공을 기준점으로 남기겠습니다. 다음에는 별도의 가상 프로젝트 변화에서 이 방법을 어떻게 점검할지 보겠습니다.”
- **Estimated Time:** 10분
- **Delivery Mode Allocation:** Reflection 3분 + Q&A 5분 + Transition 2분 = 10분
- **Evidence / Decision References:** BEAT-035, BEAT-038, STATE-04-PERF, CLM-0016, CLM-0017, CLM-0030, OQ-011, STATE-00, DEC-0018, INV-DEMO-003, INV-VERIFY-001, DEC-0021, INV-MATURITY-010, BEAT-036, BEAT-037, DEC-0062


### ACT 4

#### S68 — 여기까지는 잘 동작했다

- **Slide ID:** S68
- **ACT:** ACT 4
- **Section:** 4A Working Harness Callback
- **Working Title:** 여기까지는 잘 동작했다
- **Primary Role:** ACT 3의 성공을 보존한 채 ACT 4의 질문을 연다.
- **Audience Question:** “잘 동작하는 System도 계속 맞는 상태로 남아 있을까?”
- **Core Message:** STATE-04-PERF는 bounded task에서 검증된 성공이다. 뒤에 나올 stale 사례는 별도의 개념 사례다.
- **Story Beat:** BEAT-037, BEAT-038
- **Curriculum Trace:** ACT 3 — Tools, Verification, Harness reveal, and Working Harness Success; ACT 3 → ACT 4 handoff.; ACT 4 — conceptual stale-Harness case.
- **Evidence Type:** OBSERVED_PRODUCT
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; FROZEN WITH SCOPE; STATE-04-PERF의 테스트·benchmark 등 기록된 범위에 한정한다. 실제 stale Harness나 Product failure를 뜻하지 않는다.
- **Visual Concept:** `STATE-00 → … → STATE-04-PERF` 흐름을 짧게 보여주고 마지막 State에 “Working Harness Success”를 표시한다. 다음 개념 사례에는 다른 시각 스타일을 예고한다.
- **Demo / Case Connection:** STATE-04-PERF의 검증된 Product endpoint. 세부 State 설명을 반복하지 않는다.
- **Beginner Payoff:** 잘 동작했던 현재 시스템을 기준점으로 삼는다.
- **Advanced Payoff:** 이후 사례와 실제 Product history의 증거 경계를 분리한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** Loop 도입을 위해 성공을 실패였던 것처럼 다시 해석하지 않는다.
- **Transition:** “이 실제 성공은 기준점으로 남기고, 별개의 가상 사례에서 Project와 Workflow가 어떻게 어긋날 수 있는지 보겠습니다.” S69으로 이동한다.
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Lecture 3분 + Reflection 1분 = 4분
- **Evidence / Decision References:** BEAT-037, BEAT-038, STATE-04-PERF, STATE-00, DEC-0018, INV-DEMO-003, INV-VERIFY-001, DEC-0021, INV-MATURITY-010


#### S69 — 개념 사례: Project와 Workflow는 현재 맞다

- **Slide ID:** S69
- **ACT:** ACT 4
- **Section:** 4B Conceptual Stale Harness / DEMO-04A
- **Working Title:** 개념 사례: Project와 Workflow는 현재 맞다
- **Primary Role:** stale 사례의 정상 상태를 설정한다.
- **Audience Question:** “지금 맞는 Project Workflow는 계속 맞을까?”
- **Core Message:** 개념 사례의 시작에서는 Project의 기준 절차와 재사용 Workflow가 모두 맞다.
- **Story Beat:** BEAT-038
- **Curriculum Trace:** ACT 4 — conceptual stale-Harness case.
- **Evidence Type:** CONCEPTUAL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; CONCEPTUAL CASE — DEMO-04A 범위; 구성된 교육 사례다. `ai-dev-training-demo`의 기록이나 Trial이 아니다.
- **Visual Concept:** 화면에 계속 `CONCEPTUAL CASE`를 표시하고, `PROJECT SOURCE = CURRENT WORKFLOW`를 녹색으로 연결한다.
- **Demo / Case Connection:** 현재 Project의 test command와 재사용 Workflow가 일치하는 가상 상태. 구체적인 Runner 예시는 제작 시 기술적 타당성을 확인한다.
- **Beginner Payoff:** 원래 올바른 지침도 시간이 지나면 달라질 수 있음을 이해한다.
- **Advanced Payoff:** 당시 올바른 Workflow가 현재에도 올바른지는 Project 변화에 달렸음을 본다.
- **C++ Vision Bridge:** 실제 프로젝트에서도 빌드·테스트 구조가 바뀔 수 있다는 점은 적용 가능하나 별도 C++ 사례로 확장하지 않는다.
- **Speaker Intent:** 현재의 성공 상태를 유지하고, 다음 변화는 명시적으로 가상 사례로 시작한다.
- **Transition:** Project가 바뀌었는데 재사용 Workflow가 그대로라면 어떻게 될까?
- **Estimated Time:** 2분
- **Delivery Mode Allocation:** Demo 2분 (VISUAL) = 2분
- **Evidence / Decision References:** BEAT-038, DEMO-04A, DEC-0021, INV-MATURITY-010


#### S70 — Project는 바뀌고 Workflow는 남았다

- **Slide ID:** S70
- **ACT:** ACT 4
- **Section:** 4B Conceptual Stale Harness / DEMO-04A
- **Working Title:** Project는 바뀌고 Workflow는 남았다
- **Primary Role:** 정당한 Project 변화와 stale Workflow의 간극을 보여준다.
- **Audience Question:** “다음 Task에서 Agent가 old workflow를 따르면 누가 틀린 걸까?”
- **Core Message:** Project의 공식 절차는 정당한 변경에 맞게 갱신됐지만, 재사용 Workflow는 이전 절차를 계속 가리킨다. Agent의 지능 문제로 바로 결론 내릴 수 없다.
- **Story Beat:** BEAT-038, BEAT-039
- **Curriculum Trace:** ACT 4 — conceptual stale-Harness case.; ACT 4 — Project change and stale Harness.
- **Evidence Type:** CONCEPTUAL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; CONCEPTUAL CASE — DEMO-04A 범위; 가상 사례다. 실제 Repository migration이나 Codex failure로 표현하지 않는다.
- **Visual Concept:** `PROJECT SOURCE`가 새 절차로 이동하는 동안 `REUSABLE WORKFLOW`는 이전 위치에 남는 간극을 그린다.
- **Demo / Case Connection:** DEC-0027의 승인된 가상 설정: 모듈 연결 동작을 검증할 필요로 공식 기준은 단위+통합 테스트로 넓어졌지만 재사용 Workflow에는 단위 테스트 지시만 남는다. 정확한 command, 실제 실행 결과, Product State는 정의하지 않는다.
- **Beginner Payoff:** Agent가 따르는 지침이 Project의 현재 상태와 일치하는지 확인한다.
- **Advanced Payoff:** 상태 변화와 stale artifact의 위치를 구별한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** 변화는 Project 측의 정당한 이유로 시작하며, 사례 전체에 개념 사례 표시를 유지한다.
- **Transition:** 다음 Task가 예전 Workflow를 사용하면 어떤 결과가 생길까?
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Demo 2분 (VISUAL) + Case 2분 = 4분
- **Evidence / Decision References:** BEAT-038, BEAT-039, DEMO-04A, DEC-0021, INV-MATURITY-010, INV-DEMO-003


#### S71 — Task 해결과 System 문제는 다르다

- **Slide ID:** S71
- **ACT:** ACT 4
- **Section:** 4B Conceptual Stale Harness / DEMO-04A
- **Working Title:** Task 해결과 System 문제는 다르다
- **Primary Role:** stale Workflow가 현재 Task에 미치는 결과와 남은 System 문제를 분리한다.
- **Audience Question:** “Prompt를 더 자세히 쓰면 이번 Task는 해결될까?”
- **Core Message:** 오래된 절차를 따르면 command가 실패하거나 검증 범위가 어긋날 수 있다. Prompt 보정은 이번 Task를 풀 수도 있지만 재사용 Workflow는 stale한 채 남을 수 있다.
- **Story Beat:** BEAT-039
- **Curriculum Trace:** ACT 4 — Project change and stale Harness.
- **Evidence Type:** CONCEPTUAL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; TEACHING_MODEL; CONCEPTUAL CASE — DEMO-04A 범위; 가상 결과다. 구체적인 실패 유형은 제작 시 선택한 사례의 타당성을 확인해야 하며 실제 Demo 이력으로 표현하지 않는다.
- **Visual Concept:** `CURRENT TASK: prompt patch may unblock`와 `REUSABLE WORKFLOW: still stale`를 분리한다.
- **Demo / Case Connection:** DEMO-04A의 가상 후속 Task. Live 실행이 아닌 VISUAL/CAPTURED 설명.
- **Beginner Payoff:** 이번 답을 고치는 것과 다음 작업까지 바뀌게 하는 것을 구분한다.
- **Advanced Payoff:** task-level workaround와 durable system correction의 차이를 본다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** 이 장에서 해결책이나 Loop 정의를 먼저 공개하지 않는다. 실패 원인을 더 조사해야 한다는 질문을 남긴다.
- **Transition:** 그럼 Prompt, global rule, stale Workflow 중 어느 Layer를 고쳐야 할까?
- **Estimated Time:** 3분
- **Delivery Mode Allocation:** Case 3분 = 3분
- **Evidence / Decision References:** BEAT-039, DEMO-04A, INV-MATURITY-010, INV-DEMO-003


#### S72 — 원인에 맞는 Layer를 고르기

- **Slide ID:** S72
- **ACT:** ACT 4
- **Section:** 4C Fix the Right Layer
- **Working Title:** 원인에 맞는 Layer를 고르기
- **Primary Role:** 세 대응을 비교해 수정 대상이 원인에 달려 있음을 드러낸다.
- **Audience Question:** “어디를 고치면 현재 Task와 다음 Task가 함께 달라질까?”
- **Core Message:** Task Prompt patch는 이번 Task를 풀 수 있지만 stale Workflow를 남긴다. Global rule 추가는 중복이나 충돌을 만들 수 있다. Workflow가 원인으로 확인된 사례라면 그 Workflow를 갱신하는 편이 원인 Layer에 맞는다.
- **Story Beat:** BEAT-044, BEAT-045
- **Curriculum Trace:** ACT 4 — cause analysis, change, evaluation, and regression.; ACT 4 — Improve Context, Memory, Skills, and delegation.
- **Evidence Type:** CONCEPTUAL / TEACHING_MODEL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; TEACHING_MODEL; CONCEPTUAL CASE — DEMO-04A 범위; 이 비교는 DEMO-04A의 가상 원인에 한정한다. 실제 Product 수정을 의미하지 않는다.
- **Visual Concept:** `Patch current task` / `Add another global rule` / `Fix the source workflow`를 결과 범위와 함께 비교한다.
- **Demo / Case Connection:** 가상 Workflow 안의 이전 test 절차를 갱신하고, 필요할 때만 중복된 obsolete instruction을 제거한다.
- **Beginner Payoff:** 실패할 때마다 Prompt에 한 줄을 더하기 전에 원인을 찾는다.
- **Advanced Payoff:** 원인이 지지하는 가장 좁은 Layer를 선택하고 중복 지침을 살핀다.
- **C++ Vision Bridge:** Project 지침, Skill/Workflow, toolchain 또는 test 환경 중 원인에 해당하는 Layer를 확인한다.
- **Speaker Intent:** 세 번째 선택지를 무조건 정답으로 제시하지 않는다. 이 가상 사례가 Workflow 원인을 설정했기 때문에 해당 선택이 맞는다는 인과를 보여준다.
- **Transition:** “앞에서는 원인이 확인됐을 때의 대응을 봤습니다. 이제 그 원인을 어떻게 확인할지 보겠습니다.” S73으로 이동한다.
- **Estimated Time:** 2분
- **Delivery Mode Allocation:** Demo 2분 (CAPTURED) = 2분
- **Evidence / Decision References:** BEAT-044, BEAT-045, DEMO-04A, INV-LOOP-001, CLM-0020, CLM-0029


#### S73 — 실패 지점과 원인 Layer 구분하기

- **Slide ID:** S73
- **ACT:** ACT 4
- **Section:** 4C Fix the Right Layer 시작
- **Working Title:** 실패 지점과 원인 Layer 구분하기
- **Primary Role:** 실패 원인을 확인된 사실과 가설로 구분하는 관점을 연다.
- **Audience Question:** “실패가 보인 Layer와 원인이 있는 Layer는 항상 같을까?”
- **Core Message:** Prompt에서 증상이 드러나도 원인은 Context, Workflow, Environment, Tool/Permission, Product code 등 다른 Layer에 있을 수 있다. 실패 자체만으로 원인을 확정하지 않는다.
- **Story Beat:** BEAT-043–045
- **Curriculum Trace:** ACT 4 — Loop model; cause analysis, change, evaluation, and regression.; ACT 4 — cause analysis, change, evaluation, and regression.; ACT 4 — Improve Context, Memory, Skills, and delegation.
- **Evidence Type:** CONCEPTUAL / TEACHING_MODEL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; TEACHING_MODEL; CONCEPTUAL CASE — DEMO-04A 범위; 원인 Layer는 조사로 확인해야 한다. 이 분류는 디버깅 Mental Model이지 고정된 진단표가 아니다.
- **Visual Concept:** 가능한 Layer를 나열하되 한 증상에서 하나의 원인으로 향하는 화살표를 미리 고정하지 않는다. `Observe → Cause hypothesis → Change → Re-run → Evaluate`는 다음 구간의 작업 순서로 예고한다.
- **Demo / Case Connection:** 가상 test-command 사례에서 Project source와 stale Workflow를 대조할 필요성을 제시한다.
- **Beginner Payoff:** 실패 메시지만 보고 Prompt를 탓하거나 규칙을 추가하지 않는다.
- **Advanced Payoff:** 관찰, 원인 가설, 최소 변경, 재실행 결과를 구분한다.
- **C++ Vision Bridge:** 빌드·환경·권한·프로젝트 코드 문제를 서로 다른 후보 원인으로 살핀다.
- **Speaker Intent:** 아직 전체 Loop를 정의하지 않고, 다음 Slide 구간에서 관찰과 원인 분석을 시작하도록 질문을 넘긴다.
- **Transition:** Slide 74에서 실제 실행 경로와 선택한 Context/Workflow를 관찰하는 단계부터 이어간다.
- **Estimated Time:** 2분
- **Delivery Mode Allocation:** Lecture 1분 + Demo 1분 (CAPTURED) = 2분
- **Evidence / Decision References:** BEAT-043, DEMO-04A, CLM-0020, CLM-0029, INV-LOOP-001, BEAT-044, BEAT-045


#### S74 — 먼저 관찰하고, 그다음 가설을 세운다

- **Slide ID:** S74
- **ACT:** ACT 4
- **Section:** 4C Cause / Change
- **Working Title:** 먼저 관찰하고, 그다음 가설을 세운다
- **Primary Role:** 개념 사례에서 관찰 사실과 원인 추론을 구분한다.
- **Audience Question:** “원인을 추측하기 전에 무엇부터 확인해야 할까?”
- **Core Message:** 실행된 command, 선택된 instruction, 현재 Project 문서, 재사용 Workflow, 실패가 나타난 지점을 먼저 살핀다. 관찰과 원인 판단은 별개다.
- **Story Beat:** BEAT-043
- **Curriculum Trace:** ACT 4 — Loop model; cause analysis, change, evaluation, and regression.
- **Evidence Type:** CONCEPTUAL / TEACHING_MODEL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; TEACHING_MODEL; CONCEPTUAL CASE — DEMO-04A 범위; 구성된 사례다. 관찰 사실처럼 보이는 항목도 이 사례의 가정이며 실제 Trial 관찰이 아니다.
- **Visual Concept:** `OBSERVED`와 `INFERRED` 두 칸. `old command 실행`, `Project 문서의 새 절차`와 `Workflow가 stale할 수 있다`라는 가설을 분리한다.
- **Demo / Case Connection:** 가상 실행 경로와 Project source를 나란히 비교한다.
- **Beginner Payoff:** 실패 원인을 정하기 전에 실행 기록과 현재 지침을 확인한다.
- **Advanced Payoff:** 관찰 근거와 Cause hypothesis의 확신 수준을 구분한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** Workflow를 원인으로 단정하지 않고, 이를 확인해야 할 가설로 제시한다.
- **Transition:** Workflow가 원인으로 확인됐다면 얼마나 바꿔야 할까?
- **Estimated Time:** 2분
- **Delivery Mode Allocation:** Case 2분 = 2분
- **Evidence / Decision References:** BEAT-043, DEMO-04A, CLM-0020, CLM-0029, INV-LOOP-001


#### S75 — Cause가 지지하는 최소 변경

- **Slide ID:** S75
- **ACT:** ACT 4
- **Section:** 4C Cause / Change
- **Working Title:** Cause가 지지하는 최소 변경
- **Primary Role:** 확인된 원인에 맞춰 변경 범위를 좁힌다.
- **Audience Question:** “얼마나 바꿔야 할까?”
- **Core Message:** 이 사례에서 stale Workflow가 원인으로 확인됐다고 가정하면, 우선 그 Workflow를 갱신한다. 오래된 중복 지침도 원인일 때만 제거한다.
- **Story Beat:** BEAT-045–046
- **Curriculum Trace:** ACT 4 — Improve Context, Memory, Skills, and delegation.; ACT 4 — cause analysis and change.
- **Evidence Type:** CONCEPTUAL / TEACHING_MODEL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; TEACHING_MODEL; CONCEPTUAL CASE — DEMO-04A 범위; 가상 사례에서 전제한 원인에 대한 대응이다. 실제 Product 변경이나 Trial 결과가 아니다.
- **Visual Concept:** `Cause → Smallest durable change`. Prompt 재작성, global rule 추가, 대규모 Harness 재설계는 원인과 변경 범위가 어긋날 수 있음을 비교한다.
- **Demo / Case Connection:** 재사용 Workflow의 오래된 test 절차를 갱신한다.
- **Beginner Payoff:** 규칙을 더하기 전에 실제 원인이 있는 곳을 고친다.
- **Advanced Payoff:** 원인이 뒷받침하는 최소한의 durable change를 선택한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** “최소 변경”을 무조건 적게 바꾸라는 뜻으로 쓰지 않는다. 이번 가상 사례의 원인에 맞는 범위라는 점을 강조한다.
- **Transition:** 변경 뒤 같은 Task를 다시 통과하면 Harness가 충분히 검증된 걸까?
- **Estimated Time:** 2분
- **Delivery Mode Allocation:** Lecture 1분 + Case 1분 = 2분
- **Evidence / Decision References:** BEAT-045, DEMO-04A, INV-LOOP-001, CLM-0020, CLM-0029, OQ-003, OQ-005, BEAT-046


#### S76 — 같은 Task의 재실행만으로 충분할까?

- **Slide ID:** S76
- **ACT:** ACT 4
- **Section:** 4D Evaluation & Regression
- **Working Title:** 같은 Task의 재실행만으로 충분할까?
- **Primary Role:** Task recovery와 Harness validation을 구분한다.
- **Audience Question:** “Failure가 사라졌으면 Harness fix가 끝난 걸까?”
- **Core Message:** 같은 Task의 재실행은 필요하지만, 그 결과만으로 변경이 인접 작업을 방해하지 않는지는 알 수 없다.
- **Story Beat:** BEAT-047
- **Curriculum Trace:** ACT 4 — cause analysis, change, evaluation, and regression.
- **Evidence Type:** CONCEPTUAL / TEACHING_MODEL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; TEACHING_MODEL; CONCEPTUAL CASE — DEMO-04A 범위; 이 재실행은 설계된 사례다. 실행 결과나 통과 숫자는 없다.
- **Visual Concept:** `FIX TASK`와 `EVALUATE SYSTEM`을 분리한다. 첫 상자에서 같은 Task 재실행을, 둘째에서 대표 작업 확인을 보여준다.
- **Demo / Case Connection:** Workflow 변경 뒤 같은 가상 Task를 다시 실행한다.
- **Beginner Payoff:** 이번 작업의 해결과 다음 작업의 안전성을 구분한다.
- **Advanced Payoff:** 최소한의 변경이 다른 유효한 작업에 미치는 영향도 확인한다.
- **C++ Vision Bridge:** 동일 build/test 시나리오를 다시 실행하는 것은 필요하지만 그것만으로 회귀 위험 전체가 해소되지는 않는다는 점을 연결할 수 있다.
- **Speaker Intent:** “같은 Task를 통과했으니 Harness 검증 완료”라고 결론 내리지 않는다.
- **Transition:** 어떤 대표 작업으로 다른 사용 표면을 확인할까?
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Lecture 1분 + Case 3분 = 4분
- **Evidence / Decision References:** BEAT-047, DEMO-04A, CLM-0020, CLM-0029, INV-LOOP-001


#### S77 — 대표 작업으로 변경 범위를 확인하기

- **Slide ID:** S77
- **ACT:** ACT 4
- **Section:** 4D Evaluation & Regression
- **Working Title:** 대표 작업으로 변경 범위를 확인하기
- **Primary Role:** 변경된 Harness가 닿는 작업 표면을 대표하는 평가 구성을 소개한다.
- **Audience Question:** “무엇을 대표 Task로 고를까?”
- **Core Message:** Evaluation은 Task를 많이 모으는 것보다, 변경이 닿는 표면과 흔한 작업, 알려진 회귀 위험, 관련 없는 작업을 대표하는지가 중요하다.
- **Story Beat:** BEAT-048–049
- **Curriculum Trace:** ACT 4 — evaluation and regression; OQ-009.; ACT 4 — evaluation and regression.
- **Evidence Type:** CONCEPTUAL / TEACHING_MODEL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; TEACHING_MODEL; CONCEPTUAL CASE — DEMO-04A 범위; 이 stale-Workflow 변경 뒤의 EVAL-01~04 실행 결과는 없다. EVAL-01/02의 별도 관찰 기록이 이 변경을 평가한 결과인 것처럼 사용하지 않는다.
- **Visual Concept:** Bug Fix, Performance, Documentation-only, Small Refactor를 서로 다른 사용 표면으로 놓고 “무엇을 확인하기 위한 설계인가?”를 붙인다.
- **Demo / Case Connection:** EVAL-01 Bug Fix, EVAL-02 Performance, EVAL-03 Documentation-only, EVAL-04 Small Refactor를 가상 대표 작업으로 제시한다. PASS/FAIL 숫자는 만들지 않는다.
- **Beginner Payoff:** 한 가지 작업의 성공만으로 모든 업무가 안전하다고 단정하지 않는다.
- **Advanced Payoff:** 평가 집합을 변경 범위와 회귀 위험에 맞춰 고른다.
- **C++ Vision Bridge:** build/test 변경이라면 그 변경이 닿는 작업과 무관한 작업을 함께 고려할 수 있다.
- **Speaker Intent:** EVAL 항목을 모든 Project가 가져야 하는 고정 세트로 설명하지 않는다.
- **Transition:** 실패마다 규칙을 하나씩 더하면 평가 범위가 커지기만 할까?
- **Estimated Time:** 5분
- **Delivery Mode Allocation:** Demo 5분 (CAPTURED) = 5분
- **Evidence / Decision References:** BEAT-048, EVAL-01, EVAL-02, EVAL-03, EVAL-04, CLM-0020, CLM-0029, INV-LOOP-001, INV-LEARNING-003, INV-DEMO-003, BEAT-049


#### S78 — Harness도 특정 실패에 맞춰 과적합될 수 있다

- **Slide ID:** S78
- **ACT:** ACT 4
- **Section:** 4D Evaluation & Regression
- **Working Title:** Harness도 특정 실패에 맞춰 과적합될 수 있다
- **Primary Role:** 규칙 누적과 좁은 최적화가 만드는 회귀 위험을 설명한다.
- **Audience Question:** “한 번 실패했다고 규칙을 계속 추가하면 어떻게 될까?”
- **Core Message:** 실패마다 전역 규칙을 덧붙이면 Harness가 비대해지거나 충돌하고 특정 Task에만 좁게 맞춰질 수 있다. 실패 패턴과 원인을 확인하고 대표 작업을 평가하며, 불필요한 규칙은 제거하거나 단순화한다.
- **Story Beat:** BEAT-050
- **Curriculum Trace:** ACT 4 — Improve Context, Memory, Skills, and delegation.
- **Evidence Type:** CONCEPTUAL / TEACHING_MODEL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; TEACHING_MODEL; CONCEPTUAL CASE — DEMO-04A 범위; 여기서 쓰는 “overfit”은 교육용 비유다. Machine Learning의 통계적 overfitting과 완전히 같은 의미라고 주장하지 않는다.
- **Visual Concept:** `Failure 1 → Rule 1 → Failure 2 → Rule 2 → Failure 3 → Rule 3` 흐름이 `bloat / conflict / narrow optimization`으로 이어지는 그림. 옆에 개선 순서를 둔다.
- **Demo / Case Connection:** DEMO-04A에서 Prompt patch, global rule 추가, source Workflow 변경의 차이를 회수한다.
- **Beginner Payoff:** 규칙 수를 늘리는 대신 반복되는 원인을 확인한다.
- **Advanced Payoff:** 대표 작업에서의 효과와 비용을 평가하고 obsolete rule을 정리한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** 실패를 무조건 일반 규칙으로 바꾸는 것이 Loop의 목적이라는 오해를 막는다.
- **Transition:** “지금까지 따로 본 관찰·원인 판단·변경·평가를, 다음 작업까지 이어지는 하나의 운영 순서로 묶겠습니다.” S79으로 이동한다.
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Lecture 4분 = 4분
- **Evidence / Decision References:** BEAT-050, DEMO-04A, INV-MATURITY-003, INV-LEARNING-003, INV-LOOP-001


#### S79 — Feedback을 System Change와 Evaluation으로 잇기

- **Slide ID:** S79
- **ACT:** ACT 4
- **Section:** 4E Loop Mental Model
- **Working Title:** Feedback을 System Change와 Evaluation으로 잇기
- **Primary Role:** DEMO-04A의 개념 경로를 종합하고 Loop Engineering을 소개한다.
- **Audience Question:** “Feedback이 언제 Engineering이 되는가?”
- **Core Message:** 실행 결과와 반복되는 마찰을 관찰하고, 원인과 재발 가능성을 판단한 뒤, 적절한 System을 바꾸고 결과를 다시 평가할 때 Feedback은 System Improvement로 이어진다.
- **Story Beat:** BEAT-040, BEAT-051–052
- **Curriculum Trace:** ACT 4 — Project change and stale Harness; Loop model.; ACT 4 — Loop model, Product Loop, and automation levels; ACT 5 handoff.; ACT 4 — Loop model, Product Loop, and automation levels.
- **Evidence Type:** CONCEPTUAL / TEACHING_MODEL
- **Claim Status:** TEACHING_MODEL — DEC-0023에서 확정한 이 과정의 Loop 모델. 자동 학습이나 제품 Loop와 혼동하지 않는다.
- **Visual Concept:** `Execution → Observation → Cause → System Change → Re-evaluation` 흐름. 필요하면 Observation과 Cause 사이에 반복 마찰과 재발 판단을 표시한다.
- **Demo / Case Connection:** DEMO-04A의 가상 사례를 요약하되, 이후 Observed Meta 기록과는 아직 연결하지 않는다.
- **Beginner Payoff:** 매번 같은 수정을 반복하는 대신, 다음 실행에 영향을 주는 System을 살펴본다.
- **Advanced Payoff:** 자동화 수준과 별개로 Cause 판단, 재발 여부, 변경 대상, 평가를 설계한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** Loop를 자동 반복, Agent self-learning, 무한 실행, 규칙 누적으로 설명하지 않는다. 이 장은 개념 경로의 종합이다.
- **Transition:** “이번에는 실제 교육 제작 기록에서 Trial의 평가·보고 기준을 살펴보겠습니다. 어떤 관찰이 그 기준을 돌아보게 했는지부터 보겠습니다.” S80로 이동한다.
- **Estimated Time:** 11분
- **Delivery Mode Allocation:** Lecture 9분 + Demo 2분 (VISUAL) = 11분
- **Evidence / Decision References:** BEAT-040, BEAT-051, DEMO-04A, OQ-011, INV-MATURITY-010, INV-LOOP-001, INV-DEMO-003, CLM-0020, CLM-0021, CLM-0029, BEAT-052


#### S80 — 실제 제작 기록: TRIAL-006

- **Slide ID:** S80
- **ACT:** ACT 4
- **Section:** 4F Observed Meta Loop / DEMO-04B 시작
- **Working Title:** 실제 제작 기록: TRIAL-006
- **Primary Role:** DEMO-04A의 개념 사례를 닫고 실제 관찰 기록으로 전환한다.
- **Audience Question:** “이번에는 실제 제작 과정에서 무슨 일이 있었나?”
- **Core Message:** TRIAL-006은 Codex CLI에서 수행한 실제 성능 조사다. Global Skills와 시작 경고가 함께 관찰되어 Prompt만의 효과로 결과를 설명할 수 없었다.
- **Story Beat:** BEAT-058–059
- **Curriculum Trace:** ACT 4 — observed Meta feedback case.; ACT 4 → ACT 5 handoff.
- **Evidence Type:** OBSERVED_META
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; FROZEN WITH SCOPE; Training Production의 보조 사례다. Demo Product 변경이나 DEMO-04A의 원인·수정이 아니다.
- **Visual Concept:** DEMO-04A와 확연히 다른 색·레이아웃·타임라인으로 전환하고 `OBSERVED META CASE`를 상시 표시한다.
- **Demo / Case Connection:** TRIAL-006에서 시작해 실제 제작 평가·보고 변경으로 이어지는 기록을 연다.
- **Beginner Payoff:** 좋은 결과가 나왔다는 사실과 그 원인을 안다는 것은 다르다.
- **Advanced Payoff:** global environment가 있는 실행에서 attribution 경계를 다룬다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** Conceptual stale Workflow와 Observed Meta Loop를 같은 사건이나 인과관계로 합치지 않는다.
- **Transition:** 이 결과를 Task Prompt만의 효과라고 말할 수 있을까?
- **Estimated Time:** 2분
- **Delivery Mode Allocation:** Demo 2분 (CAPTURED) = 2분
- **Evidence / Decision References:** BEAT-058, TRIAL-006, DEMO-04B, DEMO-04A, DEC-0016, DEC-0021, TRIAL-007, TRIAL-008, INV-DEMO-003, BEAT-059


#### S81 — 결과의 타당성과 원인 귀속은 별개다

- **Slide ID:** S81
- **ACT:** ACT 4
- **Section:** 4F Observed Meta Loop / DEMO-04B
- **Working Title:** 결과의 타당성과 원인 귀속은 별개다
- **Primary Role:** TRIAL-006의 성능 결과와 Prompt-only attribution을 구분한다.
- **Audience Question:** “측정 결과가 유효해도 원인을 Prompt 하나로 좁힐 수 있을까?”
- **Core Message:** `resize_nearest` 측정값은 기록된 코드·입력·Python runtime·host 범위에서 유효하지만, global Harness 영향이 있어 전체 Workflow를 Prompt만의 효과로 분리할 수 없다.
- **Story Beat:** BEAT-058
- **Curriculum Trace:** ACT 4 — observed Meta feedback case.
- **Evidence Type:** OBSERVED_META
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; FROZEN WITH SCOPE; `144.2 → 33.5 ms/call median`은 특정 Trial의 측정 결과다. 4.30×, 76.8%를 성과용 Hero metric으로 쓰지 않고 일반화하지 않는다. Prompt-only attribution은 PARTIAL이다.
- **Visual Concept:** 화면 중심에는 `RESULT VALIDITY`와 `CAUSAL ATTRIBUTION`을 서로 다른 축으로 둔다. 수치는 작은 Evidence metadata로 표시한다.
- **Demo / Case Connection:** 기록된 input/output hash가 일치했다. `performance-goal` Skill이 evaluator/ledger 상태와 stricter threshold를 만든 것도 관찰된 global influence로 작게 표기하되, 측정값의 직접 원인으로 단정하지 않는다.
- **Beginner Payoff:** 숫자가 있다는 것만으로 누가 또는 무엇이 그 결과를 만들었는지 알 수 있는 것은 아니다.
- **Advanced Payoff:** 검증된 결과와 인과 주장의 강도를 따로 보고한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** 측정 개선 자랑이 아니라 Evidence boundary를 보여준다. Hook 설정 경고는 기록됐으나 Hook 실행 효과는 관찰되지 않았고, MCP 시작 경고는 있었지만 MCP 결과 사용은 확인되지 않았음을 구분한다.
- **Transition:** 이 attribution 한계가 후속 Trial 평가 방식에 어떤 변경을 만들었을까?
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Demo 4분 (CAPTURED) = 4분
- **Evidence / Decision References:** BEAT-058, TRIAL-006, DEC-0016, DEC-0021, TRIAL-007, TRIAL-008


#### S82 — 평가와 보고 규칙을 Evidence에 맞추다

- **Slide ID:** S82
- **ACT:** ACT 4
- **Section:** 4F Observed Meta Loop / DEMO-04B
- **Working Title:** 평가와 보고 규칙을 Evidence에 맞추다
- **Primary Role:** TRIAL-006에서 DEC-0016으로 이어진 실제 평가·환경 판단 변경을 설명한다.
- **Audience Question:** “Prompt 효과를 분리할 수 없다면 다음 Trial은 어떻게 기록해야 할까?”
- **Core Message:** 평가가 Repository와 Task만을 중심으로 보고 ambient Harness 영향을 충분히 다루지 못했다. DEC-0016은 TRIAL-006을 PARTIAL로 보존하고, clean isolation을 진행 조건으로 요구하지 않으며, 후속 CLI Trial에서 관찰된 global influence를 기록하도록 했다.
- **Story Beat:** BEAT-058–059
- **Curriculum Trace:** ACT 4 — observed Meta feedback case.; ACT 4 → ACT 5 handoff.
- **Evidence Type:** OBSERVED_META
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; FROZEN WITH SCOPE; 실제 Training Production 평가·환경 거버넌스 변경이다. Product 코드나 Demo Skill을 수정한 것이 아니다.
- **Visual Concept:** `TRIAL-006 evidence → attribution limit → DEC-0016 decision` 세 단계.
- **Demo / Case Connection:** Host와 learner environment의 구분, global influence의 가능성, PARTIAL 판정, 후속 기록 원칙을 요약한다. 후속 보고에서는 Skills, Hook 경고/실행 여부, MCP 경고/사용 여부, Model·Interface, attribution 경계를 구분해 기록한다.
- **Beginner Payoff:** 환경 조건과 수행 도구가 다르면 결과 설명도 그 경계를 밝혀야 한다.
- **Advanced Payoff:** 통제되지 않은 조건을 숨기지 않고 Trial 결과의 사용 범위를 제한한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** 실제 변경을 “깨끗한 환경을 만들어 Prompt 효과를 검증했다”라고 과장하지 않는다.
- **Transition:** 이후 TRIAL-007과 TRIAL-008은 이 변경을 어떻게 적용했을까?
- **Estimated Time:** 3분
- **Delivery Mode Allocation:** Lecture 1분 + Demo 2분 (CAPTURED) = 3분
- **Evidence / Decision References:** BEAT-058, TRIAL-006, DEC-0016, DEC-0021, TRIAL-007, TRIAL-008, INV-DEMO-003, BEAT-059


#### S83 — 후속 기록은 개선됐지만 완전하지 않았다

- **Slide ID:** S83
- **ACT:** ACT 4
- **Section:** 4F Observed Meta Loop / DEMO-04B
- **Working Title:** 후속 기록은 개선됐지만 완전하지 않았다
- **Primary Role:** TRIAL-007/008에서 평가·보고 변경이 적용된 범위와 한계를 보여준다.
- **Audience Question:** “새로운 기록 규칙이 모든 불확실성을 해결했을까?”
- **Core Message:** TRIAL-007은 global influence를 보고했지만 MCP 보고와 stderr 사이에 불일치가 남았다. TRIAL-008은 Repository Skill 호출과 global influence를 별도로 기록했다. 결과적으로 다음 실행에서 더 나은 질문과 명확한 claim boundary를 얻었지만, Trial 품질 향상이 측정된 것은 아니다.
- **Story Beat:** BEAT-058–059
- **Curriculum Trace:** ACT 4 — observed Meta feedback case.; ACT 4 → ACT 5 handoff.
- **Evidence Type:** OBSERVED_META
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; FROZEN WITH SCOPE; 적용은 부분적이다. 완전한 환경 목록, 완벽한 보고, 품질 향상은 입증되지 않았다.
- **Visual Concept:** 두 Trial을 나란히 놓고 `기록한 것 / 남은 불확실성`을 비교한다. TRIAL-007의 MCP report/stderr 불일치를 감추지 않는다.
- **Demo / Case Connection:** TRIAL-008은 Codex CLI에서 `graypipe-performance`를 명시적으로 발견·호출한 기록이다. Desktop 전체 동작 주장이나 품질 비교 수치는 포함하지 않는다.
- **Beginner Payoff:** 개선된 절차도 실제 적용 결과를 다시 보고 빠진 점을 확인한다.
- **Advanced Payoff:** 변경 후 지표가 없으면 개선된 질문과 기록 경계까지만 주장한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** 이 Loop의 결과를 “문제가 전부 해결됐다”가 아니라 “보고 방식과 claim boundary가 나아졌으나 한계가 남았다”로 전달한다.
- **Transition:** Slide 84에서 Observed Meta Loop를 한 장으로 회수한다.
- **Estimated Time:** 3분
- **Delivery Mode Allocation:** Lecture 1분 + Case 2분 = 3분
- **Evidence / Decision References:** BEAT-058, TRIAL-008, TRIAL-007, DEC-0016, DEC-0021, TRIAL-006, INV-DEMO-003, BEAT-059


#### S84 — 실제 Meta Loop에서 바뀐 것

- **Slide ID:** S84
- **ACT:** ACT 4
- **Section:** 4F Observed Meta Loop 마무리
- **Working Title:** 실제 Meta Loop에서 바뀐 것
- **Primary Role:** DEMO-04B의 실제 제작 기록을 한 장으로 회수한다.
- **Audience Question:** “무엇이 바뀌었고, 무엇은 아직 모르는가?”
- **Core Message:** TRIAL-006에서 관찰된 ambient Harness 영향과 PARTIAL attribution은 DEC-0016의 Trial 평가·보고 방식 변경으로 이어졌고, TRIAL-007/008에서 변경된 기록 경계가 부분적으로 적용됐다. 바뀐 것은 Product code가 아니라 Training Production의 평가·보고 체계다.
- **Story Beat:** BEAT-058–059
- **Curriculum Trace:** ACT 4 — observed Meta feedback case.; ACT 4 → ACT 5 handoff.
- **Evidence Type:** OBSERVED_META
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; FROZEN WITH SCOPE; 후속 보고에는 불일치와 미측정 품질 효과가 남아 있다. DEMO-04A의 conceptual stale Workflow와 합치지 않는다.
- **Visual Concept:** `TRIAL-006 → PARTIAL attribution → DEC-0016 → TRIAL-007/008 → 남은 불확실성`. DEMO-04A와 다른 시각 스타일을 유지한다.
- **Demo / Case Connection:** 평가·보고 방식의 실제 변화와 후속 기록. Product code나 `graypipe-performance` Skill 변경은 포함하지 않는다.
- **Beginner Payoff:** 실제로 확인된 변경과 아직 모르는 점을 구분한다.
- **Advanced Payoff:** Loop의 System Change가 Product code뿐 아니라 Evaluation/Workflow governance일 수도 있음을 본다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** “평가 방식이 완벽해졌다”거나 “품질이 향상됐다”고 말하지 않는다.
- **Transition:** “평가 체계를 바꾼 뒤에도 확인할 것이 남았습니다. 이 원리를 C++ Vision 업무로 옮겨, 환경이 달라졌을 때 검증 조건을 어떻게 다시 볼지 생각해 보겠습니다.” S85로 이동한다.
- **Estimated Time:** 3분
- **Delivery Mode Allocation:** Lecture 1분 + Case 2분 = 3분
- **Evidence / Decision References:** BEAT-058, DEMO-04B, TRIAL-006, DEC-0016, TRIAL-007, DEMO-04A, DEC-0021, TRIAL-008, INV-DEMO-003, BEAT-059


#### S85 — Project와 환경이 바뀌면 검증도 다시 본다

- **Slide ID:** S85
- **ACT:** ACT 4
- **Section:** 4G C++ Vision Transfer + 4H Discussion / Transition
- **Working Title:** Project와 환경이 바뀌면 검증도 다시 본다
- **Primary Role:** ACT 4의 Loop 원리를 C++ Vision 업무와 ACT 5의 종합으로 연결한다.
- **Audience Question:** “같은 문제가 두 번째로 생기면 다시 Prompt를 고칠까, System을 살펴볼까?”
- **Core Message:** Project나 환경이 바뀌면 기존 성능 가정과 검증 절차가 여전히 맞는지 확인한다. 반복되는 마찰은 관찰하고 원인을 찾아 관련 Layer를 바꾼 뒤 benchmark와 regression으로 확인한다.
- **Story Beat:** BEAT-059, TRANS-012
- **Curriculum Trace:** ACT 4 → ACT 5 handoff.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; TEACHING_MODEL; REQUIRES PRODUCT CHECK — 구체적 Windows·shell·IDE·hardware 지시를 추가하는 경우; GPU architecture나 toolchain 변화는 교육용 예시이지 Demo에서 실제 발생한 일이 아니다.
- **Visual Concept:** `Project / Environment change → friction 관찰 → 원인 판단 → 적절한 Layer 변경 → benchmark / regression`.
- **Demo / Case Connection:** GPU architecture가 바뀌면 기존 tuning 가정이 유효한지 다시 확인할 수 있다는 예시. CMake option, test environment, benchmark 설정을 전부 나열하지 않는다.
- **Beginner Payoff:** 같은 문제가 반복될 때마다 Prompt를 고치는 것 외에 Project와 Workflow도 살펴본다.
- **Advanced Payoff:** Project와 환경 변화가 Verification system에 미치는 영향도 평가한다.
- **C++ Vision Bridge:** 이번 장의 중심. 목록보다 “변화 후 검증 조건을 다시 확인한다”는 패턴에 집중한다.
- **Speaker Intent:** ACT 4에서 Harness를 계속 키우는 것이 Loop의 목적은 아니라는 점을 정리하고 ACT 5로 넘긴다.
- **Transition:** “이제 처음의 질문부터 Task·Context·Harness·Loop까지, 어떤 문제에 대응해 왔는지 전체 Story를 다시 연결하겠습니다.” ACT 5 S86으로 넘긴다.
- **Estimated Time:** 20분
- **Delivery Mode Allocation:** Case 7분 + Reflection 2분 + Q&A 7분 + Transition 4분 = 20분
- **Evidence / Decision References:** BEAT-059, TRANS-012, DEC-0021, INV-DEMO-003


### ACT 5

#### S86 — 전체 Story를 한 장으로

- **Slide ID:** S86
- **ACT:** ACT 5
- **Section:** 5A Full Story Recap
- **Working Title:** 전체 Story를 한 장으로
- **Primary Role:** 전체 여정을 한 흐름으로 회고한다.
- **Audience Question:** “나는 지금 AI를 어떤 방식으로 사용하고 있을까?”
- **Core Message:** Chatbot은 답을 구하고, Prompt는 Task를 구체화하며, Context는 필요한 Project 지식을 제공하고, Harness는 작업 환경을 설계하며, Loop는 피드백으로 System을 개선한다.
- **Story Beat:** BEAT-060
- **Curriculum Trace:** ACT 5 — complete journey and seven takeaways.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; FROZEN WITH SCOPE; TEACHING_MODEL; 이 교육의 진화 모델이다. 각 단계는 앞 단계를 대체하지 않는다.
- **Visual Concept:** `CHATBOT → PROMPT → CONTEXT → HARNESS → LOOP`에 각 한 문장 설명을 붙이고, AI-Native Development는 다음 장에서 회수한다.
- **Demo / Case Connection:** 전체 Demo 사례를 새로 시연하지 않고, 앞 단계에서 발생한 문제와 대응을 짧게 연결한다.
- **Beginner Payoff:** 지금 위치에서 시도할 수 있는 다음 단계 하나를 찾는다.
- **Advanced Payoff:** 각 Engineering 단계가 어떤 문제를 해결했는지 시스템 관점에서 설명한다.
- **C++ Vision Bridge:** 단계별 설명에 기존 Vision 사례를 선택적으로 회상한다. 새로운 기술 사례는 추가하지 않는다.
- **Speaker Intent:** 기능 이름을 나열하지 말고, 앞 단계의 한계가 다음 문제를 만들었던 흐름을 보여준다.
- **Transition:** “전체 교육 모델 가운데, 하나의 Repository에서 실제로 확인한 변화만 다시 보겠습니다.” S87로 넘긴다.
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Lecture 4분 = 4분
- **Evidence / Decision References:** BEAT-060, INV-NARRATIVE-001, INV-NARRATIVE-002


#### S87 — 하나의 Repository가 문제에 대응해 진화했다

- **Slide ID:** S87
- **ACT:** ACT 5
- **Section:** 5A Primary Demo Evolution
- **Working Title:** 하나의 Repository가 문제에 대응해 진화했다
- **Primary Role:** Primary Product Demo의 실제 State 변화를 회고한다.
- **Audience Question:** “이 Repository는 어떤 문제를 만나며 바뀌었나?”
- **Core Message:** State의 변화는 기능 성숙도 등급이 아니라 각 문제에 대응해 기록된 Engineering history다.
- **Story Beat:** BEAT-060
- **Curriculum Trace:** ACT 5 — complete journey and seven takeaways.
- **Evidence Type:** OBSERVED_PRODUCT
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; FROZEN WITH SCOPE; TEACHING_MODEL; State 의미는 기록된 Demo evidence 범위에 한정한다. Benchmark 준비 commit은 보조 이력이지 별도 State가 아니다.
- **Visual Concept:** `STATE-00 → STATE-00-FIXED → STATE-01 → STATE-02 → STATE-03 → STATE-04 → STATE-04-PERF`. 각 State에는 한 문구만 둔다.
- **Demo / Case Connection:** `Repository / bug → Prompt + verification → Project Context → Context growth → Routing → Reusable Workflow → Working Harness Success`.
- **Beginner Payoff:** 단계별 변화가 새 기능을 추가하기 위해서가 아니라 실제 문제에 대응했음을 본다.
- **Advanced Payoff:** 측정·검증된 Product endpoint와 개념적·Meta 사례를 구별한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** Subagent나 Memory를 거치지 않았다는 점을 빈 State처럼 보완하지 않는다.
- **Transition:** 그러면 현재 사례에는 왜 Subagent와 Memory가 없을까?
- **Estimated Time:** 3분
- **Delivery Mode Allocation:** Lecture 1분 + Demo 2분 (VISUAL) = 3분
- **Evidence / Decision References:** BEAT-060, INV-NARRATIVE-001, INV-NARRATIVE-002


#### S88 — 필요성이 입증되지 않은 것은 보류했다

- **Slide ID:** S88
- **ACT:** ACT 5
- **Section:** 5A Minimum Effective Harness Callback
- **Working Title:** 필요성이 입증되지 않은 것은 보류했다
- **Primary Role:** Minimum Effective Harness를 회수하고 불필요한 기능 추가를 경계한다.
- **Audience Question:** “왜 최종 그림에 Subagent와 Memory가 없을까?”
- **Core Message:** 현재 문제를 해결하는 데 필요성이 정당화되지 않았기 때문이다. 더 많은 기능이 더 높은 성숙도를 뜻하지 않지만, 적게 쓰는 것이 언제나 더 낫다는 뜻도 아니다.
- **Story Beat:** BEAT-057, BEAT-060
- **Curriculum Trace:** ACT 3 payoff; ACT 4 Minimum Effective Harness callback; ACT 5 synthesis.; ACT 5 — complete journey and seven takeaways.
- **Evidence Type:** OBSERVED_PRODUCT / TEACHING_MODEL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; TEACHING_MODEL; STATE-04-PERF의 bounded 성공과 이 교육의 프로젝트별 heuristic이다. 모든 Project에서 Subagent나 Memory가 불필요하다는 뜻은 아니다.
- **Visual Concept:** `필요했던 구조: Context / Routing / Workflow / Verification`과 `이번 사례에서 정당화되지 않음: Subagent / Memory`를 구분한다.
- **Demo / Case Connection:** STATE-04-PERF 성공을 근거로 필요한 요소와 보류한 요소를 회고한다.
- **Beginner Payoff:** 처음부터 모든 기능을 도입하지 않고 현재 마찰부터 찾는다.
- **Advanced Payoff:** 각 구성요소의 비용과 이득을 실제 문제에 맞춰 판단한다.
- **C++ Vision Bridge:** 필요하면 자신의 Repository 구성요소를 같은 질문으로 검토한다.
- **Speaker Intent:** “Use what the problem justifies”라는 기준을 유지한다.
- **Transition:** “필요한 구성요소를 선택한 뒤에도, 그 결과가 충분한지 판단하는 책임은 남습니다. 무엇을 확인하고 완료를 수용해야 할까요?” S89으로 이동한다.
- **Estimated Time:** 2분
- **Delivery Mode Allocation:** Lecture 2분 = 2분
- **Evidence / Decision References:** BEAT-057, BEAT-060, STATE-04-PERF, DEC-0018, DEC-0021, INV-NARRATIVE-001, INV-NARRATIVE-002


#### S89 — 위임이 늘어도 개발자 책임은 남는다

- **Slide ID:** S89
- **ACT:** ACT 5
- **Section:** 5A Developer Responsibility
- **Working Title:** 위임이 늘어도 개발자 책임은 남는다
- **Primary Role:** AI와 개발자의 역할을 설명하고 판단·책임의 경계를 고정한다.
- **Audience Question:** “AI가 더 많은 일을 맡아도 개발자가 계속 책임지는 것은 무엇인가?”
- **Core Message:** Agent는 조사, 생성, 변경, 실행, 비교를 지원할 수 있다. 개발자는 목표, 요구사항, trade-off, Verification 기준, 완료 판단과 결과에 대한 책임을 유지한다.
- **Story Beat:** BEAT-061–062
- **Curriculum Trace:** ACT 5 — beginning/ending comparison and AI-Native Development teaching model.; ACT 5 — Beginning/ending comparison and developer responsibility.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; TEACHING_MODEL; 이 교육에서 고정한 책임 원칙이다. Agent와 개발자 역할을 절대적인 분업 규칙으로 제시하지 않는다.
- **Visual Concept:** `GOAL / JUDGMENT / VERIFICATION / RESPONSIBILITY`를 중심에 두고 AI가 도울 수 있는 작업을 주변에 표시한다.
- **Demo / Case Connection:** 전체 Story의 역할 변화. 새 Product 기능 사례는 없다.
- **Beginner Payoff:** 결과를 받는 것과 결과에 책임지는 것을 구분한다.
- **Advanced Payoff:** 위임 범위와 인간의 위험 판단·최종 검토를 함께 설계한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** AI 공포나 통제 서사가 아니라 개발자의 engineering judgment를 설명한다.
- **Transition:** 이런 역할 변화를 이 교육에서는 어떤 모델로 부를까?
- **Estimated Time:** 3분
- **Delivery Mode Allocation:** Lecture 3분 = 3분
- **Evidence / Decision References:** BEAT-061, CLM-0023, CLM-0024, OQ-011, CLM-0001, CLM-0002, INV-RESPONSIBILITY-001, BEAT-062


#### S90 — AI-Native Development는 이 교육의 운영 모델

- **Slide ID:** S90
- **ACT:** ACT 5
- **Section:** 5A AI-Native Development
- **Working Title:** AI-Native Development는 이 교육의 운영 모델
- **Primary Role:** 전체 진화의 마지막 framing을 소개한다.
- **Audience Question:** “AI에게 일을 많이 맡기면 AI-Native일까?”
- **Core Message:** 이 교육의 AI-Native Development 모델은 Task boundary, Project Context, Reusable Workflow, Verification, Feedback Loop를 의도적으로 설계·운영하는 개발 방식이다.
- **Story Beat:** BEAT-061
- **Curriculum Trace:** ACT 5 — beginning/ending comparison and AI-Native Development teaching model.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** TEACHING_MODEL — DEC-0023에서 확정한 이 과정의 AI-Native Development framing. 공식·보편 정의로 말하지 않는다.
- **Visual Concept:** `AI usage volume`을 `designed working system`과 나란히 두고, 뒤쪽 축에 개발자의 Goal·Judgment·Verification·Responsibility를 표시한다.
- **Demo / Case Connection:** 전체 교육의 모델을 요약하며 새로운 기능은 추가하지 않는다.
- **Beginner Payoff:** 당장 AI 사용량을 늘리는 대신 작은 업무 마찰 하나를 개선할 수 있다.
- **Advanced Payoff:** Model 성능과 Harness/System 설계를 구분해 다음 병목을 진단한다.
- **C++ Vision Bridge:** 다음 장에서 개인 Repository와 Vision 업무로 전이한다.
- **Speaker Intent:** 최종 용어와 문구는 Content Freeze 전에 검토할 항목으로 남긴다.
- **Transition:** 자신의 Repository에서는 어떤 부분부터 바꿀 수 있을까?
- **Estimated Time:** 3분
- **Delivery Mode Allocation:** Lecture 3분 = 3분
- **Evidence / Decision References:** BEAT-061, OQ-011, CLM-0023, CLM-0024


#### S91 — 어느 Layer에서 마찰이 반복되는가?

- **Slide ID:** S91
- **ACT:** ACT 5
- **Section:** 5B C++ Vision / My Repository Transfer
- **Working Title:** 어느 Layer에서 마찰이 반복되는가?
- **Primary Role:** 서로 다른 경험 수준의 청중이 현재 마찰에 맞는 다음 단계를 고르게 한다.
- **Audience Question:** “내 Repository에서 다음에 바꿀 한 가지는 무엇일까?”
- **Core Message:** Task, Context, Workflow, Verification, Feedback 가운데 현재 반복되는 마찰과 가장 가까운 한 곳부터 검토한다. 이는 순서가 정해진 maturity ladder가 아니다.
- **Story Beat:** BEAT-068–069
- **Curriculum Trace:** ACT 5 — tailored audience next steps.; ACT 5 — advanced audience value and seven takeaways.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; TEACHING_MODEL; REQUIRES PRODUCT CHECK — 구체적 Windows·shell·IDE·hardware 지시를 추가하는 경우; 적용 후보를 고르는 교육용 질문이다. 특정 C++ Project의 규칙이나 도구를 보장하지 않는다.
- **Visual Concept:** A–E 선택지를 같은 수준으로 나란히 둔다: Task specification, Project Context, Reusable Workflow, Verification, Repeated Failure Loop.
- **Demo / Case Connection:** C++ Vision 예시: 성능 병목 조사 Task, build mode·algorithm contract·hardware assumption Context, `profile → change → benchmark → regression` Workflow, test와 benchmark Verification, 반복 이슈의 System correction.
- **Beginner Payoff:** 전체 System을 새로 만들지 않고 지금 반복되는 설명이나 확인부터 개선한다.
- **Advanced Payoff:** 반복 비용, 위험, verification surface에 따라 투자 대상을 고른다.
- **C++ Vision Bridge:** 중심 예시. Python 산출물 복사가 아니라 engineering pattern transfer를 강조한다.
- **Speaker Intent:** 선택·발표·제출을 요구하지 않는다.
- **Transition:** “방금 떠올린 한 곳에서, 다음 작업 때 다르게 해 볼 작은 행동 하나를 마음속으로 골라 봅시다.” S92로 이동한다.
- **Estimated Time:** 5분
- **Delivery Mode Allocation:** Case 1분 + Transition 4분 = 5분
- **Evidence / Decision References:** BEAT-068, INV-AUDIENCE-001, INV-DIFFICULTY-001, INV-LOOP-001, INV-RESPONSIBILITY-001, BEAT-069


#### S92 — 다음 작은 행동을 개인적으로 고른다

- **Slide ID:** S92
- **ACT:** ACT 5
- **Section:** 5B Final Reflection
- **Working Title:** 다음 작은 행동을 개인적으로 고른다
- **Primary Role:** 전체 Story를 청중의 업무에 연결하는 비공개 성찰 시간.
- **Audience Question:** “내가 AI와 개발하는 방식에서 다음에 바꿀 수 있는 것은 무엇인가?”
- **Core Message:** 반복해서 적는 설명, Agent가 다시 찾는 Project 사실, 두 번째로 발생한 실패에서 수정할 System layer 중 한 가지를 생각한다.
- **Story Beat:** BEAT-070–071
- **Curriculum Trace:** ACT 5 — seven takeaways and final reflection; `plan/CURRICULUM.md` (Core Takeaways).; ACT 5 — audience next steps, seven takeaways, and final reflection.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; TEACHING_MODEL; 개인 Reflection이며 응답·공유·실천 약속을 요구하지 않는다.
- **Visual Concept:** 세 질문을 차례로 보여주고 마지막에 선택적인 “다음 작은 행동 하나”를 둔다.
- **Demo / Case Connection:** 없음.
- **Beginner Payoff:** 업무에서 시도할 부담이 작은 한 단계를 찾는다.
- **Advanced Payoff:** 반복 원인과 다음 System 개선 지점을 점검한다.
- **C++ Vision Bridge:** 각자의 Vision 업무에 질문을 적용할 수 있다.
- **Speaker Intent:** 노트북, 실습, 발표를 요구하지 않는 private reflection으로 진행한다.
- **Transition:** 마지막 Q&A 후 `Question → Task → Context → System → Feedback Loop`로 닫는다.
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Lecture 2분 + Reflection 2분 = 4분
- **Evidence / Decision References:** BEAT-070, INV-LEARNING-003, INV-DIFFICULTY-001, INV-DELIVERY-001, INV-NARRATIVE-001, BEAT-071


#### S93 — Q&A와 교육 마무리

- **Slide ID:** S93
- **ACT:** ACT 5
- **Section:** 5B Final Q&A / Closing
- **Working Title:** Q&A와 교육 마무리
- **Primary Role:** 질문을 받고 공통 mental model로 교육을 마무리한다.
- **Audience Question:** 남은 질문은 무엇인가?
- **Core Message:** 교육의 마무리 기준은 AI 사용량이 아니라 Goal, Judgment, Verification, Responsibility를 유지하며 AI가 일할 환경과 Feedback을 설계하는 것이다.
- **Story Beat:** BEAT-070–071
- **Curriculum Trace:** ACT 5 — seven takeaways and final reflection; `plan/CURRICULUM.md` (Core Takeaways).; ACT 5 — audience next steps, seven takeaways, and final reflection.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** FROZEN — 93장 구조·Story·시간·Demo 범위; TEACHING_MODEL; 화면 문구는 후보이며 최종 copywriting 때 다듬는다.
- **Visual Concept:** `Prompt → Context → Harness → Loop`와 하단의 `Goal / Judgment / Verification / Responsibility`.
- **Demo / Case Connection:** 없음. 질문 시간.
- **Beginner Payoff:** 오늘 바로 적용할 수 있는 하나의 관점을 기억한다.
- **Advanced Payoff:** 다음 시스템 개선을 판단할 공통 기준을 가져간다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** 후보 문구 “AI를 더 많이 쓰는 것보다, AI가 잘 일할 수 있는 환경을 설계한다”를 사용하되 최종 문구는 후속 편집에서 확정한다. Q&A는 배정된 시간 안에서 진행한다.
- **Transition:** 교육 종료.
- **Estimated Time:** 6분
- **Delivery Mode Allocation:** Transition 2분 + Q&A 4분 = 6분
- **Evidence / Decision References:** BEAT-070, INV-LEARNING-003, INV-DIFFICULTY-001, INV-DELIVERY-001, INV-NARRATIVE-001, BEAT-071


## Historical post-integration validation (pre DEC-0060)

The following prior results describe their original editions. Current totals and IDs are in the current Map above and SLIDE_ID_MIGRATION_93.md.

## Traceability Audit

### Slide → Story Beat → Curriculum → Evidence → Claim

Slide별 Story Beat ID와 연결된 Related Curriculum을 위 Map에 함께 둔다. 참조된 Beat ID는 STORY_BEATS.md에서 확인했고, 각 Beat의 Related Curriculum과 Evidence 기록을 Slide의 Curriculum Trace 및 Evidence / Decision References에 이어 붙였다. Claim Status는 DEC-0023 및 CLAIM_FREEZE.md의 다중 상태 범위를 적용한다.

- S38는 연구 Claim을 FROZEN WITH SCOPE로 표시하고 CLM-0014/CLM-0015, 연구 자료, 최종 인용 보존 요건을 연결한다.
- TEACHING_MODEL에는 Product Evidence를 억지로 추가하지 않는다.
- Evidence Type과 Claim Status는 서로 다른 축이다. 한 Slide가 모델과 별도로 제한된 Product·Trial Evidence를 함께 포함할 수 있다.

### Slide → Demo → Trial → Git State

| Demo / Case | 연결된 근거 및 경계 | Git State / 상태 |
|---|---|---|
| DEMO-01 | TRIAL-001, repository 탐색의 단일 Codex CLI 관찰 | STATE-00 기준 탐색; 현재 Desktop 경로는 제품 확인 필요 |
| DEMO-05 | TRIAL-002, crop 경계 수정 및 검증 | STATE-00 → STATE-00-FIXED |
| DEMO-02 | TRIAL-003, AGENTS.md의 명령 확인이 포함된 단일 실행 | STATE-01 |
| DEMO-06 | TRIAL-004, TRIAL-005A/B, Context 상태 차이와 Task별 문서 접근 | STATE-02 → STATE-03 |
| DEMO-03 | TRIAL-008 Skill discovery/invocation; STATE-04-PERF 결과와는 원인 귀속을 분리 | STATE-04 → STATE-04-PERF; Skill 우월성·단독 인과 미주장 |
| DEMO-07 | Subagent를 고려하는 조건의 VISUAL / conceptual case | Product Trial 또는 Git State 없음; 기능이 보편적으로 필요하다고 주장하지 않음 |
| DEMO-08 | Memory 필요성 및 보존 판단의 VISUAL / conceptual case | Product Trial 또는 Git State 없음 |
| DEMO-09 | STATE-04-PERF 검증과 system map의 기록 | STATE-04-PERF; benchmark는 지정 workload·환경으로 제한 |
| DEMO-04A | Stale workflow의 개념 사례 | Observed Trial / Git State 없음; 모든 화면에 CONCEPTUAL 경계 유지 |
| Loop visual | Loop teaching model의 시각 사례 | Product Trial 또는 Git State 없음 |
| DEMO-10 | EVAL-01–04 평가 사례. EVAL-03/04는 개념적 설계 사례 | EVAL-01: STATE-00→STATE-00-FIXED; EVAL-02: STATE-04→STATE-04-PERF; EVAL-03/04: Product State 없음 |
| DEMO-11 | Layer / Minimum Effective Harness 해석용 사례 | Product State를 새로 만들지 않음 |
| DEMO-04B | TRIAL-006 → DEC-0016 → TRIAL-007/008의 실제 Training Production 평가·보고 Timeline | Demo Repository Product State 변화가 아님; OBSERVED_META |
| DEMO-12 | 승인된 Repository Evolution 회고 | STATE-00 → STATE-00-FIXED → STATE-01 → STATE-02 → STATE-03 → STATE-04 → STATE-04-PERF |

DEMO-07, DEMO-08, DEMO-04A, Loop visual, EVAL-03/04는 설계상 개념/Teaching 사례이므로 관찰 Trial이나 Product Git State를 강제로 연결하지 않는다. TRIAL-006/007/008의 Meta Evidence는 Demo Repository Git State로 취급하지 않는다.

### Research Claim

S38의 승인 문구는 “More Context is not automatically better.”에 한정한다. Lost in the Middle과 RepoQA의 대상 과제·조건을 현재 Codex의 Repository Coding 성능 주장으로 일반화하지 않는다. 최종 Slide 또는 해당 Source line에 [Liu et al., Lost in the Middle](https://aclanthology.org/2024.tacl-1.9/) 및 [RepoQA](https://arxiv.org/abs/2406.06025) 인용을 유지한다.

### Claim Freeze 적용

| Claim Freeze Status | 적용 범위 / 제한 |
|---|---|
| FROZEN | Slides 1–90의 승인된 구조·Story·시간·Demo 선택 |
| FROZEN WITH SCOPE | S04–06, S17–19, S21, S32–34, S36–37, S41–45, S47, S51–55, S60, S65, S77–81, S83–84 |
| TEACHING_MODEL | S02–03, S07–16, S20–31, S35, S38–42, S46, S48–50, S53, S56–64, S68–76, S82–90; course model/heuristic로 표시 |
| CONCEPTUAL CASE | S66–75 / DEMO-04A 및 평가 사례; 실제 Demo Repository 사건처럼 말하지 않음 |
| REQUIRES PRODUCT CHECK | S04–06, S08, S50–52, 조건부 S56–59, S62; 대상 계정·표면·Trust·Permission 확인 |
| REQUIRES PRODUCT CHECK (환경) | S16, S21, S35, S40–42, S63, S82, S87에서 구체적인 환경 명령·UI·hardware를 추가할 때 |
| REQUIRES RESEARCH CHECK | 제한된 S39 Claim에는 없음. 더 강한/넓은 Claim은 신규 Research Review 필요 |
| REQUIRES COMPANY POLICY | 현재 Map에는 없음. 회사·고객 데이터를 승인했다고 주장하지 않음 |

## 80장 최초 통합 이력 — Missing / Conflicting Information

> 아래는 최초 80장 통합 당시의 원본 기록이다. 현재 90장 대응은 [DEC-0043 번호 대조 문서](SLIDE_ID_MIGRATION_90.md)를 적용한다.

- 통합 전에는 plan/ 아래 Slide-level 80장 Map 파일이 없었다. 이에 따라 기존 맵의 Source Coverage는 저장소 파일이 아니라 대화 기록에서 회수했다. 이번 파일 생성으로 공식 Map의 저장 위치가 해소됐다.
- 입력본 S29의 Claim Status는 PROVISIONAL / OQ-006로 되어 있었으나, DEC-0023과 CLAIM_FREEZE.md가 제한된 연구 Claim을 확정했다. 본 문서는 해당 범위에서 FROZEN WITH SCOPE로 갱신하고 인용·조건을 유지한다.
- 입력본 S52, S67, S77의 OQ-011/PROVISIONAL 표기는 DEC-0023 이후에도 미확정으로 남은 것처럼 읽힐 수 있어 이 과정에서 승인된 운영 정의로 갱신했다. 공식·보편 정의라는 의미는 추가하지 않았다.
- S53 원본의 “OBSERVED_META preview”는 ACT 3에서 짧게 예고하는 근거로 보존하고, 전체 OBSERVED_META timeline은 S68–72에 둔다. Claim Status는 CLAIM_FREEZE.md에 따라 TEACHING_MODEL이며, 현재 제품 표면·계정에 관한 주장은 별도 Product Check 대상이다.
- Evidence Type과 Claim Status는 별도 축으로 유지했다. S44, S47, S49, S51–53, S75의 원본 multi-label Evidence는 관찰 근거와 과정 모델을 구분해 보존하고, Claim Status는 CLAIM_FREEZE.md의 범위를 따른다. S57–67은 CONCEPTUAL / TEACHING_MODEL이고 S68–72은 OBSERVED_META다.
- 다음 항목은 미확정 상태이며 Map 구조의 차단 요인이 아니다: 대상 Codex 계정·표면 및 live path(S04–06, S41–43, 조건부 S47–50, S53), 구체적인 Windows·IDE·shell·hardware 지침(해당 ID), 내부/고객 데이터 사용 정책(OQ-014; 현재 Slide claim 없음).

## Validation

- Slide IDs: S01–S90, 90개 고유 ID. DEC-0043에 따라 S01–S21을 유지하고 신규 S22–S29를 삽입하며 기존 S22–S82는 S30–S90으로 이동한다.
- ACT Slide 수 및 시간: 10/21/15/18/18/8장, 40/63/70/85/80/30분.
- 전체 시간: 368분. 기존 82장·360분의 장별 배정에 신규 Lecture 7분·Case 1분을 추가한다.
- Delivery Mode 합계: Lecture 137, Demo 73, Case 84, Reflection 20, Transition 22, Q&A 32분.
- 모든 Slide에서 Mode 합계 = Estimated Time.
- Demo subtype: HYBRID 24분, CAPTURED 34분, VISUAL 15분 = Demo 73분.
- Revision 대조: S64 10분, S76 11분, S82 20분, S90 6분.
- Section별 배분: 최종 MAP REVISION RESULT의 ACT/Section 합계와 일치.
- Story Beat 및 각 Beat의 Related Curriculum은 원본 자료에 있는 연결만 사용했다. Trial/Git State가 없는 Conceptual/Teaching Model은 그 공백을 유지했다.
- 근거 ID는 plan/ 및 references/의 승인 기록과 대조했다. S39 인용 경로는 저장소 내부 상대 경로로 바꿨다.

## Source of Truth

이 파일은 STEP 08 이후 공식 Slide Map이다. 기존 10장 단위 응답은 History/Working Draft이며, 본 파일의 승인된 내용과 충돌하면 본 파일과 연결된 DECISIONS.md / CLAIM_FREEZE.md를 우선 확인한다. Slide Map을 바꾸려면 Decision Log에 변경 이유와 영향 범위를 남긴다.

## 80장 최초 통합 당시 제작 범위 경계

> 아래는 최초 80장 통합 당시의 원본 기록이다. 현재 90장 대응은 [DEC-0043 번호 대조 문서](SLIDE_ID_MIGRATION_90.md)를 적용한다.

이번 산출물은 기획 문서다. Visual Spec, Template, Speaker Notes, PPT, Demo Repository 변경은 하지 않았다. Commit / Push도 하지 않았다.
