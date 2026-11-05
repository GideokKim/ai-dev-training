# Official Slide Map

## 현재 제작 기준 — DEC-0188 (2026-11-05)

전체 **109장·367분(6시간7분)**. 기준판316419a의 S27(강의2+성찰1분)과 S58(강의2분)을 삭제하고5분을 재배분하지 않는다. 남은 장의 시간/Mode·Beat/Section·근거 범위는 유지한다.

| ACT | Current slides | Count | Minutes |
|---|---|---:|---:|
| ACT 0 | S01–S14 | 14 | 42 |
| ACT 1 | S15–S36 | 22 | 61 |
| ACT 2 | S37–S57 | 21 | 88 |
| ACT 3 | S58–S75 | 18 | 64 |
| ACT 4 | S76–S94 | 19 | 71 |
| ACT 5 | S95–S109 | 15 | 41 |
| Total | S01–S109 | 109 | 367 |

Mode: Lecture166 / Demo44 / Case95 / Reflection16 / Transition21 / Q&A25분. Native 표 S53/S79/S83, C++ 차트 S67.19필드 Notes·12Templates/28Variants 구조를 유지한다.

현재 S61은 REQUEST·CONTEXT·WORKFLOW를 같은 작업에 적용하는 도식이다. AGENTS.md 위치/결합 팁은 S55–S56의두 장(1/2·2/2)이며 이후 S57의기존 Context→Workflow 전환으로 이어진다. Source는 기존111-ID 단계로 유지하고 마지막 경계에서 한 번만 번호를 변환한다. [삭제·수정 범위](ANNOTATION_REVISION_109.md)와 [전체 번호 대응](SLIDE_ID_MIGRATION_109_DEC0188.md)을 따른다. Windows·교육장·제품/계정·실측 리허설 Gate와 Demo Repository·실험·Sites·묶음은 변경하지 않는다.

## Current109 Slide Map — DEC-0188

### ACT 0 — 14 slides / 42 minutes

#### S01 — AI가 개발 프로젝트를 직접 살펴보게 하기

- **Slide ID:** S01
- **ACT:** ACT 0
- **Section:** 0A
- **Working Title:** AI가 개발 프로젝트를 직접 살펴보게 하기
- **Primary Role:** ACT의 제목과 설계 관점을 안내하고 기존 첫 문제 장으로 넘긴다. 새 기법·성과·기능 정의를 설명하는 장이 아니다.
- **Audience Question:** “이번 ACT에서는 어떤 관점으로 다음 문제를 살펴볼까?”
- **Core Message:** AI가 개발 프로젝트를 직접 살펴보게 하기 — Chatbot → 개발 프로젝트를 조사하는 Agent. 개발 프로젝트는 코드·명세·테스트가 있는 프로젝트 폴더를 뜻한다.
- **Story Beat:** BEAT-001
- **Curriculum Trace:** ACT 0의 승인된 주제를 안내하는 표지다. 기존 Curriculum Section/Beat를 재사용한다.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** TEACHING MODEL — ACT 주제 안내이며 새 제품 기능·Trial·성과·현재 제품 지원을 주장하지 않는다.
- **Visual Concept:** T12-A ACT Title. 두 줄 제목·부제와 “코드·명세·테스트가 있는 프로젝트 폴더”라는 한 줄 정의를 사용한다. 기존 ACT 번호·색·글꼴·과정 표기를 유지한다. 새 기능·성과·사진을 추가하지 않는다.
- **Demo / Case Connection:** N/A — 기존 ACT의 사례를 소개하기 전 주제만 안내한다. Demo 시간을 추가하지 않는다.
- **Beginner Payoff:** 지금부터 살펴볼 주제와 앞 구간과의 경계를 알아본다.
- **Advanced Payoff:** 해당 ACT가 다루는 설계 책임의 범위를 짧게 확인한다.
- **C++ Vision Bridge:** N/A — 기존 본문에 있는 C++ 연결을 유지한다.
- **Speaker Intent:** 제목·부제와 개발 프로젝트의 한 문장 뜻만 짧게 확인하고 기존 첫 문제로 넘긴다. 도구·기능 정의나 전체 파일 자동 열람·검증 완료로 확장하지 않는다.
- **Transition:** “이제 이 관점에서 첫 문제를 보겠습니다.”라고 S02 — AI에게 지금 무엇을 맡기고 있는가?로 이어간다.
- **Estimated Time:** 1분
- **Delivery Mode Allocation:** Transition 1분 = 1분
- **Evidence / Decision References:** DEC-0090; existing ACT/Story focus; no new evidence
- **ACT Subtitle:** Chatbot → 개발 프로젝트를 조사하는 Agent
- **Audience Footer:** 기존 ACT 제목 표기 유지

#### S02 — AI에게 지금 무엇을 맡기고 있는가?

- **Slide ID:** S02
- **ACT:** ACT 0
- **Section:** 0A
- **Working Title:** AI에게 지금 무엇을 맡기고 있는가?
- **Primary Role:** 교육 질문 열기, 비평가적 자기 위치 확인
- **Audience Question:** “나는 지금 AI에게 무엇을 맡기고 있는가?”
- **Core Message:** 자기 AI 활용을 평가하지 않고, 현재 맡기는 업무 범위를 돌아본다.
- **Story Beat:** BEAT-001
- **Curriculum Trace:** ACT 0 — familiar chatbot workflow and starting reflection.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** FROZEN — 기존99장의 Story·배정·Demo 범위를 보존한 현행115장 구조; 제품 기능 주장 없음
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
- **Audience Footer:** 없음 — M 연계 표시는 유지

#### S03 — 작은 질문에는 Chatbot이 유용하다

- **Slide ID:** S03
- **ACT:** ACT 0
- **Section:** 0B
- **Working Title:** 작은 질문에는 Chatbot이 유용하다
- **Primary Role:** 기존 Workflow 인정
- **Audience Question:** “코드 일부나 오류를 ChatGPT에 물어본 적이 있는가?”
- **Core Message:** 필요한 코드나 오류를 전달해 답을 받는 방식은 작은 질문에서 빠르고 유용할 수 있다.
- **Story Beat:** BEAT-001
- **Curriculum Trace:** ACT 0 — familiar chatbot workflow and starting reflection.
- **Evidence Type:** TEACHING_MODEL / CONCEPTUAL
- **Claim Status:** FROZEN — 기존99장의 Story·배정·Demo 범위를 보존한 현행115장 구조; TEACHING_MODEL; 일반적인 활용 예시이며 제품 우열 주장 없음
- **Visual Concept:** `std::vector<int> a(3, 1);` → `1, 1, 1`(3개)와 `std::vector<int> b{3, 1};` → `3, 1`(2개)를 비교한다. 아래의 연결된 native 흐름은 `IDE: 코드 선택·복사 → Chatbot: 붙여넣고 질문 → IDE: 답 확인·적용`이다. 원소 도식은 의미 설명이며 실행 로그·실제 ChatGPT 응답이 아니다. DEC-0034. 하단 “필요한 코드와 맥락을 사람이 골라 전달한다.” 문장은 삭제하고 초기화 비교·연결된 세 노드·M 연계 표시는 유지한다. DEC-0180.
- **Demo / Case Connection:** 짧은 오류 질문 사례
- **Beginner Payoff:** 자신의 익숙한 사용법이 교육의 출발점으로 인정된다.
- **Advanced Payoff:** 이 흐름에서 사람이 직접 선택하고 전달하는 Context를 알아차린다.
- **C++ Vision Bridge:** 일반적인 C++ 초기화 질문을 출발점으로 사용한다. Vision·특정 컴파일러/Windows 빌드·장비 실행을 추가하는 Demo는 아니다.
- **Speaker Intent:** 괄호와 중괄호로 달라지는 이 `std::vector<int>` 예제의 의미를 짚되 문법 강의로 확장하지 않는다. 작은 질문의 가치를 먼저 인정하고, 사람이 필요한 Context를 골라 전달한 뒤 답을 확인하는 흐름으로 연결한다. C++ 의미 근거는 Microsoft Learn의 vector constructors와 Initializers이며 실제 컴파일·실행을 했다고 표현하지 않는다.
- **Transition:** 질문이 여러 파일과 경계를 가로지르는 상황으로 확장한다.
- **Estimated Time:** 5분
- **Delivery Mode Allocation:** Lecture 5분 = 5분
- **Evidence / Decision References:** BEAT-001, CLM-0001, CLM-0002; DEC-0180
- **Audience Footer:** 없음 — M 연계 표시는 유지

#### S04 — 코드 질문은 VS Code의 Copilot Chat에서

- **Slide ID:** S04
- **ACT:** ACT 0
- **Section:** 0B
- **Working Title:** 코드 질문은 VS Code의 Copilot Chat에서
- **Primary Role:** S03의 작은 C++ 질문을 회사에서 사용하는 VS Code + GitHub Copilot에서 시작하는 실무 적용 팁
- **Audience Question:** “앞의 C++ 질문을 회사에서 사용하는 IDE 안에서 어떻게 물어볼까?”
- **Core Message:** 질문할 코드를 선택해 Copilot Chat의 Context로 첨부하고, 코드 설명을 요청한 뒤 답을 확인한다.
- **Story Beat:** BEAT-001
- **Curriculum Trace:** ACT 0 / 0B — familiar small-code question with a short company IDE tip; no new maturity stage, Demo or Trial.
- **Evidence Type:** RESEARCH / TEACHING_MODEL
- **Claim Status:** RESEARCH / TEACHING_MODEL / REQUIRES PRODUCT CHECK — 공식 안내를 각색한 UI 도식과 요청 예시다. 실제 회사 화면·Copilot 응답·선택/첨부/실행 기록이 아니다. 특정 계정의 기능·조직 정책·자동 Context 포함이나 정확성/시간 절감은 검증하지 않았다.
- **Visual Concept:** VS Code 편집기와 Copilot Chat을 나란히 배치한 native UI 도식. S03의 std::vector<int> a(3, 1); / b{3, 1}; 두 줄을 선택하고 Context 첨부 확인 후 Ask로 설명을 요청한다. 실제 응답·실행 결과는 넣지 않는다. 하단은 코드 선택→Context 첨부·확인→질문하고 답 확인이다. 요청 입력 부분은 기존 Mac 스타일의 제목 막대·세 색상 표시·밝은 본문·둥근 테두리로 통일한다. 문장·강조·앞뒤 관계는 보존하며 [공통 적용 범위](MAC_PROMPT_STYLE_AUDIT.md)를 따른다. 하단 “사용 예시” 표시는 제외하고 기존 UI·3단계·Mac 외형과 M 연계를 유지한다. DEC-0180.
- **Demo / Case Connection:** N/A — Lecture2분의 정적 활용 안내. 실제 회사 화면·실행·제품 비교 결과가 아니다.
- **Beginner Payoff:** 회사에서 사용하는 VS Code에서 관련 코드를 골라 Copilot Chat에 설명을 요청할 수 있다.
- **Advanced Payoff:** IDE 통합과 실제 전달 Context를 구분하고 필요한 코드 첨부 및 응답 확인 책임을 유지한다.
- **C++ Vision Bridge:** S03의 std::vector 초기화 예제를 그대로 사용한다. 실제 컴파일·실행·C++ 검사 파이프라인 검증은 추가하지 않는다.
- **Speaker Intent:** 두 코드 줄→선택한 코드 첨부→질문 문장→답 확인을2분 안에 설명한다. 설치·요금·모델·Agent 비교로 확장하지 않는다. VS Code와 다음 장의 Visual Studio 디버깅 정보 범주를 같은 제품 화면이라고 설명하지 않는다.
- **Transition:** “선택한 코드만으로 설명하기 어려운 문제라면, 어떤 자료가 더 필요할까요?” S05의 기존 Context 수집 문제로 이어간다.
- **Estimated Time:** 2분
- **Delivery Mode Allocation:** Lecture 2분 = 2분
- **Evidence / Decision References:** DEC-0101; GitHub/VS Code official guidance checked2026-10-26; no new execution claim; DEC-0179; DEC-0180
- **Practical Tip Classification:** 사용 환경
- **Audience Footer:** 없음 — 사용 예시 문구는 화면에서 제외하고 상세 근거는 Notes에 유지한다. DEC-0180.

#### S05 — 질문이 커지면 Context를 모으는 일이 생긴다

- **Slide ID:** S05
- **ACT:** ACT 0
- **Section:** 0C
- **Working Title:** 질문이 커지면 Context를 모으는 일이 생긴다
- **Primary Role:** 개발 프로젝트 범위 문제 제기
- **Audience Question:** “여러 파일에 걸친 질문을 하려면 무엇을 먼저 찾아야 할까?”
- **Core Message:** 개발 프로젝트 수준 질문에서는 사람이 관련 구현, 호출 경로, 테스트 결과와 명세서 등 필요한 정보를 찾아 대화에 옮기는 일이 생길 수 있다.
- **Story Beat:** BEAT-002
- **Curriculum Trace:** ACT 0 — project-level question and context collection friction.
- **Evidence Type:** TEACHING_MODEL / CONCEPTUAL
- **Claim Status:** FROZEN — 기존99장의 Story·배정·Demo 범위를 보존한 현행115장 구조; TEACHING_MODEL; 특정 Trial에서 발생한 문제로 주장하지 않음
- **Visual Concept:** Visual Studio 사용자에게 익숙한 정보 범주를 2×3 병렬 native 도식으로 보여 준다: 테스트 탐색기 / 호출 스택 / 소스·참조 / 지역 변수·조사식 / 출력·로그 / 명세서(외부 문서 포함). “이 정보 하나하나가 Context다”로 묶는다. 실제 UI 캡처·조사 순서·필수 체크리스트가 아니며 아직 Agent 해결책은 표시하지 않는다. 종이 문서를 든 인물 삽화는 사용하지 않는다. DEC-0034.
- **Demo / Case Connection:** 다음 Demo의 문제 상황 설정
- **Beginner Payoff:** 질문이 커질 때 수작업으로 Context를 모으는 부담을 알아차린다.
- **Advanced Payoff:** 반복되는 수고가 코드 생성보다 Context 수집에서 발생할 수 있음을 본다.
- **C++ Vision Bridge:** C++/Visual Studio 사용자에게 익숙한 디버깅 정보 범주를 활용한다. 특정 메뉴·제품 버전·빌드·장비 조작이나 실제 C++ 실행을 입증하는 예시는 아니다.
- **Speaker Intent:** 익숙한 Chatbot 방식의 가치를 유지하면서, 이미 살펴보는 테스트·코드·런타임 값·명세서가 각각 Context가 됨을 드러낸다. 필요한 정보를 골라 모으는 Friction을 설명하며 여섯 범주를 모두 요구하거나 Agent 해결책을 먼저 공개하지 않는다.
- **Transition:** “먼저 사람이 자료를 직접 첨부해 질문하는 방식을 보겠습니다.”
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Case 4분 = 4분
- **Evidence / Decision References:** BEAT-002, CLM-0004, CLM-0009; DEC-0185
- **Audience Footer:** 없음 — M 연계 표시는 유지

#### S06 — Chatbot은 주어진 Context만을 활용해서 조사한다

- **Slide ID:** S06
- **ACT:** ACT 0
- **Section:** 0D
- **Working Title:** Chatbot은 주어진 Context만을 활용해서 조사한다
- **Primary Role:** 프로젝트 자료를 사람이 선택·첨부하는 방식의 출발점을 보여준다.
- **Audience Question:** “Chatbot은 이 대화에 어떤 프로젝트 자료를 받았나요?”
- **Core Message:** 사람이 프로젝트 자료를 직접 첨부하는 대화 방식에서는 선택·전달한 정보가 조사의 출발점이다. 프로젝트 폴더의 나머지 파일이 자동으로 포함된 것으로 가정하지 않는다.
- **Story Beat:** BEAT-003
- **Curriculum Trace:** ACT 0 — ChatGPT → Codex repository exploration.
- **Evidence Type:** TEACHING_MODEL / CONCEPTUAL
- **Claim Status:** TEACHING MODEL — 직접 자료를 선택·첨부하는 대화 방식을 설명한다. 실제 Chatbot 입력·응답·품질·시간 비교가 아니며 Chatbot의 모든 기능·사전 지식·도구 접근을 정의하지 않는다. 과거 Agent 요청과 실제 조사 근거는 S12 Notes와 원자료에 보존한다.
- **Visual Concept:** 프로젝트 폴더의 테스트·명세·관련 코드가 사람의 선택·첨부를 거쳐 Mac 스타일 “조사 요청” 창으로 들어간다. 그 밖의 소스·문서는 창 밖에 남는다. 요청은 첨부 자료의 Crop 원인 설명과 코드 미수정을 요구하는 각색이다. 이전 실제 Agent 요청·GoogleTest 가상 UI를 Chatbot 실행처럼 보여주지 않는다.
- **Demo / Case Connection:** DEMO-01의 Lecture2분 도입. 자료 첨부 방식의 가정이며 S07/S08의 원래 CLI 관찰 근거 Demo8분과 구분한다.
- **Beginner Payoff:** 질문 문장 외에도 이 프로젝트의 어떤 자료를 전달했는지가 필요하다. 이 방식에서는 자료를 찾아 골라 넣는 사람이 출발점을 만든다.
- **Advanced Payoff:** 정보를 수집하는 주체와 AI의 분석 능력을 구분한다. 전달하지 않은 프로젝트 정보와 제품의 해결 능력 부족을 같은 것으로 취급하지 않는다.
- **C++ Vision Bridge:** N/A — 언어와 무관한 자료 전달 방식이다. 이전 GoogleTest 가상 목록은 이번 화면에서 제외하고 원래 Python CLI 근거는 보존한다.
- **Speaker Intent:** S05에서 살펴본 정보를 대화에 넣을 때 사람이 선택한다는 문제를 연다. 실제 Agent의 성공을 먼저 제시하지 않고 S07의 현상·S08의 필요한 근거로 이어간다.
- **Transition:** “먼저 같은 Crop 문제에서 어떤 결과 차이가 있었는지 보겠습니다.”
- **Estimated Time:** 2분
- **Delivery Mode Allocation:** Lecture 2분 = 2분
- **Evidence / Decision References:** BEAT-003, DEMO-01, STATE-00, TRIAL-001, CLM-0002, CLM-0009, OQ-003, OQ-005; DEC-0179; DEC-0180; DEC-0185
- **Audience Footer:** 없음 — 실제 실행을 뜻하는 보조 문구 없이 자료 첨부 관계를 보여준다. 근거·범위는 Notes에 보존한다.

#### S07 — Crop은 기대한 폭보다 한 열을 더 포함했다

- **Slide ID:** S07
- **ACT:** ACT 0
- **Section:** 0D
- **Working Title:** Crop은 기대한 폭보다 한 열을 더 포함했다
- **Primary Role:** Crop 실패의 현상을 기대한 폭과 실제 포함 값으로 먼저 이해시킨다.
- **Audience Question:** “끝 좌표3을 제외해야 한다면 어떤 값이 남아야 하나요?”
- **Core Message:** crop(image,1,3)의 끝 좌표 제외 명세는 원본 열1·2, 값2·3과 폭2를 기대한다. 기존 구현은 값4까지 포함해 폭3이 됐다.
- **Story Beat:** BEAT-003
- **Curriculum Trace:** ACT 0 — repository investigation, bounded findings and the collection-role mental shift.
- **Evidence Type:** OBSERVED_PRODUCT
- **Claim Status:** FROZEN WITH SCOPE — TRIAL-001·STATE-00의 Python Crop 한 건. 첫 행 발췌 재구성이며 코드 수정·C++ 할당/오버런·현재 Desktop 검증이 아니다.
- **Visual Concept:** 기존 첫 행1/2/3/4, 열index0–3, 기대2/3·폭2와 구현2/3/4·폭3 도식을 보존한다. 하단 “조사 기록 요약 · 코드 수정 없음”만 삭제하고 미수정 사실은 Notes에 유지한다.
- **Demo / Case Connection:** DEMO-01의 원래 CLI 관찰 근거8분을 S07/S08에4분씩 유지한다. 새 Chatbot 비교 실행은 없다.
- **Beginner Payoff:** 끝 좌표를 하나 더 포함하면 기대한 폭과 값이 달라지는 현상을 본다.
- **Advanced Payoff:** 의도한 범위와 실제 결과를 명세에 대조하고 메모리 할당·capacity 문제로 일반화하지 않는다.
- **C++ Vision Bridge:** S03의 원소 수 확인 질문만 회수한다. 실제 사례는 Python Crop이며 C++ 실행·할당 오류가 아니다.
- **Speaker Intent:** 기존 기대 폭2·실제 폭3과 값2/3/4를 그대로 보여준다. S06의 Chatbot 실행 결과로 귀속하지 않고 필요한 근거를 살펴볼 사례 현상으로 설명한다.
- **Transition:** “왜 다른지 설명하려면 어떤 테스트·명세·구현을 연결해야 하는지 보겠습니다.”
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Demo 4분 (CAPTURED / RECONSTRUCTED) = 4분
- **Evidence / Decision References:** BEAT-003, DEMO-01, TRIAL-001, CLM-0002, CLM-0009, OQ-003, OQ-005, DEC-0084; DEC-0185
- **Audience Footer:** 없음 — 지정 footer 삭제. 코드 미수정 사실과 원래 Python CLI 근거는 Notes에 보존한다.

#### S08 — 원인을 설명하려면 테스트·명세·구현을 연결해야 한다

- **Slide ID:** S08
- **ACT:** ACT 0
- **Section:** 0D
- **Working Title:** 원인을 설명하려면 테스트·명세·구현을 연결해야 한다
- **Primary Role:** Crop 현상을 설명할 세 근거가 프로젝트의 어디에 있는지 보여주고 자료 수집의 필요를 드러낸다.
- **Audience Question:** “폭2와 폭3의 차이를 설명하는 근거는 프로젝트의 어디에 있었나요?”
- **Core Message:** C++의 Crop 테스트·반개구간 명세·반복 조건 `x <= x_end && x < row.size()`를 연결해 폭2/폭3 차이를 설명한다. 필요한 자료는 테스트·README·구현 파일에 나뉘어 있어 찾아 연결해야 한다. 실제 과거 조사는 Python이며 C++ 구현 조건은 사용자가 제공한 표현으로 맞춘다.
- **Story Beat:** BEAT-003
- **Curriculum Trace:** ACT 0 — repository investigation, bounded findings and the collection-role mental shift.
- **Evidence Type:** TEACHING_MODEL / OBSERVED_PRODUCT (underlying Python record)
- **Claim Status:** FROZEN WITH SCOPE — C++ 의미 대응은 교육 모델이다. 실제 TRIAL-001은 Python CLI 기록이며 C++ Crop 실행·파일 발견·테스트 결과로 바꾸지 않는다. 관계/호출 도식은 Agent의 실제 접근 시간순이 아니고 원래 README 결함 안내도 보존한다.
- **Visual Concept:** 세 파일 아이콘과 테스트·명세·구현의 동일 구조를 유지한다. tests/crop_test.cpp의 Crop.EndExcluded/EXPECT_EQ(width, 2), README의 [x_start, x_end), src/transform.cpp의 `x <= x_end && x < row.size()`를 대응시킨다. 구현 조건은 && 뒤에서 두 줄로 나눠 기존 코드 영역에 표시한다. `<=`가 끝 좌표를 포함하고 `x < row.size()`는 행의 범위를 넘지 않게 하는 조건임을 Notes에서 설명한다. 하단 호출은 main()→process_image()→crop()이다. 파일명은 C++ 역할 예시이며 원래 실제 파일과 원문은 Notes에 보존한다. 지정 footer는 제거한다. DEC-0189.
- **Demo / Case Connection:** DEMO-01의 기존4Demo분 안에서 같은 Crop 결함을 C++ 의미로 설명한다. 원래 관찰은 Python TRIAL-001이며 새 C++ 실행이나 실제 캡처가 아니다.
- **Beginner Payoff:** 답만 듣는 대신 테스트·명세·구현이 어떻게 원인 설명을 뒷받침하는지 본다.
- **Advanced Payoff:** 코드 호출 관계·근거 연결·Agent 접근 시간순과 독립 발견 주장을 구분한다.
- **C++ Vision Bridge:** 기존 세 자료의 연결 구조를 C++ 파일·GoogleTest 확인 구문·사용자가 제공한 반복 조건으로 대응시킨다. 실제 Python 관찰의 언어·원문을 보존하며 C++ 실행·측정이나 Demo Repository 전환으로 해석하지 않는다.
- **Speaker Intent:** 코드 정답 설명보다 원인을 설명하기 위해 테스트·명세·구현을 찾아 연결해야 함을 읽게 한다. README에도 결함 안내가 있었으며 독립 발견·Chatbot 비교 결과로 바꾸지 않는다.
- **Transition:** “그런데 같은 전체 테스트에는 코드 결함과 원인이 다른 오류도 있었습니다.”
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Demo 4분 (CAPTURED / RECONSTRUCTED) = 4분
- **Evidence / Decision References:** BEAT-003, DEMO-01, TRIAL-001, CLM-0002, CLM-0009, OQ-003, OQ-005, DEC-0084; DEC-0185; DEC-0187; DEC-0189
- **Audience Footer:** 없음 — 원래 근거 관계·언어·원문은 Notes에 보존, M 연계 유지

#### S09 — 코드만으로 설명되지 않는 오류도 있었다

- **Slide ID:** S09
- **ACT:** ACT 0
- **Section:** 0D
- **Working Title:** 코드만으로 설명되지 않는 오류도 있었다
- **Primary Role:** Crop 실패와 별개인 전체 테스트의 실행 환경 오류를 한 사건으로 설명한다.
- **Audience Question:** “코드만 보냈다면 이 오류의 원인까지 설명할 수 있을까요?”
- **Core Message:** TRIAL-001 전체 테스트의 환경 오류3건은 읽기 전용 실행 조건이 임시 디렉터리 생성을 막아 발생했다. Crop 결함과 별개이며 Agent도 그 권한 제한을 해제하지 않았다.
- **Story Beat:** BEAT-003
- **Curriculum Trace:** ACT 0 — repository investigation, bounded findings and the collection-role mental shift.
- **Evidence Type:** OBSERVED_PRODUCT
- **Claim Status:** FROZEN WITH SCOPE — TRIAL-001 실행 환경 제한의 관찰. Product/Crop 결함이나 성공한 환경 복구, 현재 Desktop 동작의 근거가 아니다.
- **Visual Concept:** 왼쪽 테스트 파일→가운데 임시 폴더 생성 시도→오른쪽 읽기 전용 환경의 잠금/권한 경계로 연결한다. 앞 Crop 구현 문제와 별개라는 한 문장과 생성 불가 상태를 보이고 마지막은 실행 로그+권한 확인으로 S10에 연결한다. 파일·폴더·권한 아이콘은 앞뒤와 같은 시각 언어다. 실제 오류3건 집계·권한 미해결·원래 Python 환경은 Notes에 유지한다.
- **Demo / Case Connection:** DEMO-01의 별도 Case/교육용 해석·callback이며 Demo 시간을 추가하지 않는다.
- **Beginner Payoff:** 테스트가 실패하는 이유에는 코드 결함 외 실행 조건도 있음을 이해한다.
- **Advanced Payoff:** 제품 결함과 실행 제한을 분리하고, 제한 관찰과 권한 변경·해결을 구분한다.
- **C++ Vision Bridge:** N/A. 제조 현장/Windows에서 같은 오류가 관찰된 것으로 바꾸지 않는다.
- **Speaker Intent:** 코드 밖의 실행 자료도 조사에 필요하다는 역할만 맡긴다. 환경 문제를 Repository 접근의 해결 대상으로 제시하지 않는다.
- **Transition:** “지금까지 필요한 자료를 모으면, 프로젝트 파일과 실행 환경의 두 곳에 나뉩니다.”
- **Estimated Time:** 3분
- **Delivery Mode Allocation:** Case 3분 = 3분
- **Evidence / Decision References:** BEAT-003, DEMO-01, TRIAL-001, CLM-0002, CLM-0009, OQ-003, OQ-005, DEC-0084; DEC-0185; DEC-0187
- **Audience Footer:** 없음 — M 연계 표시는 유지

#### S10 — 이 자료를 매번 사람이 찾아 전달해야 할까?

- **Slide ID:** S10
- **ACT:** ACT 0
- **Section:** 0D
- **Working Title:** 이 자료를 매번 사람이 찾아 전달해야 할까?
- **Primary Role:** 필요한 자료를 모아 누가 찾고 연결해 전달할지 묻는다.
- **Audience Question:** “답변 전에 이 자료를 찾고 연결하는 일은 누가 할까요?”
- **Core Message:** Crop 원인을 설명한 테스트·명세·구현/호출 관계와 별도 실행 오류를 설명한 로그·권한 정보가 필요했다. 이 자료를 답변 전에 누가 찾고 연결해 전달할지 묻는다.
- **Story Beat:** BEAT-003
- **Curriculum Trace:** ACT 0 — repository investigation, bounded findings and the collection-role mental shift.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** TEACHING MODEL — TRIAL-001에서 살펴본 정보를 묶은 해석이며 새 실행·제품 우열이 아니다. 개발 프로젝트 접근은 실행 권한 확장을 뜻하지 않는다.
- **Visual Concept:** 프로젝트 폴더의 테스트·명세·구현/호출과 실행 환경의 로그·권한을 두 프레임으로 묶는다. 파일은 문서 아이콘, 권한은 자물쇠로 구분한다. 같은 조사에서 필요한 다섯 자료이며 마지막은 답변 전 수집·연결 작업으로 이어진다.
- **Demo / Case Connection:** DEMO-01의 별도 Case/교육용 해석·callback이며 Demo 시간을 추가하지 않는다.
- **Beginner Payoff:** Context가 단지 복사한 코드 조각만을 의미하지 않음을 이번 사건으로 이해한다.
- **Advanced Payoff:** 저장소에 있는 사실과 도구·권한이 제공하는 실행 조건의 출처를 구분한다.
- **C++ Vision Bridge:** N/A. 일반화된 새 C++ 규칙·장비 사례는 추가하지 않는다.
- **Speaker Intent:** Context 정의를 재강의하지 않고 필요한 자료의 출처를 모은 뒤 사람과 Agent의 수집 방식 비교를 연다.
- **Transition:** “먼저 이 자료를 사람이 직접 골라 Chatbot에 전달하는 방식입니다.”
- **Estimated Time:** 2분
- **Delivery Mode Allocation:** Case 2분 = 2분
- **Evidence / Decision References:** BEAT-003, DEMO-01, TRIAL-001, CLM-0002, CLM-0009, OQ-003, OQ-005, DEC-0084; DEC-0185
- **Audience Footer:** 프로젝트 파일 접근과 실행 권한은 별개

#### S11 — Chatbot에 줄 자료는 사람이 모은다

- **Slide ID:** S11
- **ACT:** ACT 0
- **Section:** 0E
- **Working Title:** Chatbot에 줄 자료는 사람이 모은다
- **Primary Role:** 동일한 조사 자료를 사람이 직접 선택·첨부하는 대화 방식의 준비 작업을 보여준다.
- **Audience Question:** “이 자료를 Chatbot에 넘기기 전에 누가 찾고 연결하나요?”
- **Core Message:** 자료를 직접 선택·첨부하는 대화 방식에서는 사람이 테스트·명세·구현·실행 로그·권한 정보를 찾아 연결해 전달한다. 이는 수집 주체를 설명하는 가정이며 모든 Chatbot 사용 방식이나 능력의 한계를 정하는 주장이 아니다.
- **Story Beat:** BEAT-003
- **Curriculum Trace:** ACT 0 — repository investigation, bounded findings and the collection-role mental shift.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** TEACHING MODEL — 실제 Chatbot 비교 실행·성능·불가능성 주장이 아니다. 환경 로그·권한 정보까지 전달하면 원인 분석 단서도 전달된다.
- **Visual Concept:** 기존 다섯 자료·사람·연결선·ChatGPT UI·우측 상단 삽화의 위치를 보존한다. 가운데는 “찾기 → 연결 → 첨부”, 마지막은 사람의 자료 수집을 명확히 한다. 제목은 삽화와 겹치지 않도록 짧게 표현한다. 실제 답변·비교 결과를 추가하지 않는다.
- **Demo / Case Connection:** DEMO-01의 별도 Case/교육용 해석·callback이며 Demo 시간을 추가하지 않는다.
- **Beginner Payoff:** 답변 전에도 사람이 관련 자료를 찾아 연결하는 일이 있음을 본다.
- **Advanced Payoff:** 정보가 전달되지 않은 상태와 도구의 문제 해결 능력을 구분한다.
- **C++ Vision Bridge:** Contextual cue — 큰 저장소에서 필요한 자료를 찾는 상황에만 연결한다.
- **Speaker Intent:** S10에서 모은 같은 자료를 사람이 찾아 연결해 첨부하는 과정을 보여주고 S12의 Agent와 비교한다.
- **Transition:** “같은 자료를 허용된 프로젝트에서 Agent가 직접 조사하게 하면 어떨까요?”
- **Estimated Time:** 2분
- **Delivery Mode Allocation:** Lecture 2분 = 2분
- **Evidence / Decision References:** BEAT-003, DEMO-01, TRIAL-001, CLM-0002, CLM-0009, OQ-003, OQ-005, DEC-0084, DEC-0085, DEC-0086, DEC-0107; DEC-0179; DEC-0185
- **Audience Footer:** 없음 — M 연계 표시는 유지

#### S12 — Agent는 프로젝트 폴더에서 직접 조사한다

- **Slide ID:** S12
- **ACT:** ACT 0
- **Section:** 0E
- **Working Title:** Agent는 프로젝트 폴더에서 직접 조사한다
- **Primary Role:** 같은 자료를 Agent가 허용된 범위에서 조사한 관계로 바꿔 보여주고 Codex 진입 안내로 연결한다.
- **Audience Question:** “같은 자료를 사람이 모두 복사하는 대신, Agent가 허용된 프로젝트에서 조사하게 할 수 있을까요?”
- **Core Message:** TRIAL-001에서 Agent가 허용된 파일·도구 범위의 테스트·코드·명세·실행 결과를 조사하고 Crop 원인과 실행 제한을 구분했다. 목표·검토 책임은 사람에게 남으며 접근 전 승인된 도구·계정·자료·권한 범위를 확인한다. S11과 달라지는 것은 자료 수집·연결의 일부를 맡기는 주체다. 더 좋은 답·시간 절감·권한 해결을 비교 입증한 것은 아니다.
- **Story Beat:** BEAT-003
- **Curriculum Trace:** ACT 0 — repository investigation, bounded findings and the collection-role mental shift.
- **Evidence Type:** OBSERVED_PRODUCT / TEACHING_MODEL
- **Claim Status:** FROZEN WITH SCOPE — 실제 관찰은 과거 Codex CLI0.154.0 한 번; TEACHING MODEL — 그림은 조사 관계의 각색. 현재 Desktop·일반 효율·반복성·권한 확대/해결을 주장하지 않는다.
- **Visual Concept:** S11과 같은 다섯 자료·배치를 유지하면서 주체가 Agent로 바뀐다. 기존 Codex UI와 삽화·CLI 출처 표기를 보존한다. 마지막은 자료 수집·연결 일부를 허용 범위에서 맡기는 이점이다. 긴 제목은 삽화와 겹치지 않도록 짧게 표현한다. 자료에서 Agent로 단방향 화살표를 두며 UI 아래 재구성 문구는 화면에서 제거하고 Notes에 보존한다.
- **Demo / Case Connection:** DEMO-01의 별도 Case/교육용 해석·callback이며 Demo 시간을 추가하지 않는다.
- **Beginner Payoff:** 관련 파일을 모두 직접 복사하기 전에 허용된 개발 프로젝트 조사를 요청할 수 있음을 본다.
- **Advanced Payoff:** Context 수집 역할의 일부와 목표 설정·권한·수용 판단 책임을 분리한다.
- **C++ Vision Bridge:** Contextual cue — 저장소의 모듈·테스트·명세 조사에만 연결한다.
- **Speaker Intent:** 과거 단일 CLI 조사에서 확인한 직접 조사 범위로 이점을 회수한다. 현재 Desktop 검증·권한 해결·품질/시간 우월성으로 확대하지 않는다. 원래 실제 Agent 요청은 이 장의 Notes와 원자료로 연결한다.
- **Transition:** “이 교육에서는 이 프로젝트 조사를 어디에서 시작할까요?”
- **Estimated Time:** 2분
- **Delivery Mode Allocation:** Lecture 2분 = 2분
- **Evidence / Decision References:** BEAT-003, DEMO-01, TRIAL-001, CLM-0002, CLM-0009, OQ-003, OQ-005, DEC-0084, DEC-0085, DEC-0086, DEC-0107; DEC-0179; DEC-0185; DEC-0188
- **Audience Footer:** 없음 — 원래 근거/예시/측정 범위는 Notes에 유지, M 연계 보존

#### S13 — 개발 프로젝트 조사는 Codex에서 시작한다

- **Slide ID:** S13
- **ACT:** ACT 0
- **Section:** 0E
- **Working Title:** 개발 프로젝트 조사는 Codex에서 시작한다
- **Primary Role:** 개발 프로젝트 조사로 들어가는 실제 제품 진입 경로 안내
- **Audience Question:** “ChatGPT 데스크톱 앱에서 개발 프로젝트 작업은 어디서 시작할까?”
- **Core Message:** 이 교육의 개발 프로젝트 개발 작업은 ChatGPT 데스크톱 앱 좌측 상단의 ChatGPT 메뉴에서 Codex를 선택하고, 프로젝트 프로젝트 폴더를 연 뒤 조사를 요청하는 경로로 시작한다. 이는 교육에서 선택한 개발 경로이며 다른 ChatGPT 기능의 파일 접근 가능성을 부정하지 않는다.
- **Story Beat:** BEAT-003
- **Curriculum Trace:** ACT 0 / 0E — repository exploration의 Mental Shift를 Codex 진입 경로와 연결.
- **Evidence Type:** RESEARCH / TEACHING_MODEL
- **Claim Status:** FROZEN WITH SCOPE — 2026-10-21 OpenAI 공식 Quickstart/App 문서의 Codex 진입 안내; REQUIRES PRODUCT CHECK — 좌측 상단 위치는 사용자 제공 UI 명세이고 현재 로컬 앱 UI·발표 계정·Windows의 실제 동작은 UNVERIFIED.
- **Visual Concept:** `ChatGPT 메뉴 → Codex 선택 → 프로젝트 폴더 선택`의 3단계 native 흐름과 “조사를 요청한다”는 짧은 다음 행동을 보여 준다. 메뉴는 공식 안내와 사용자 UI 명세를 바탕으로 재구성한 도식이며 실제 Screenshot이 아니다. ChatGPT와 Codex 선택지를 구분하되 계정의 모든 기능·메뉴를 복제하지 않는다. DEC-0087: 상단에 공통 배지 “실무 적용 팁 · 사용 환경”를 붙인다. 활용 목적 표시이며 기존 근거 유형·Claim Boundary는 유지한다.
- **Demo / Case Connection:** DEMO-01을 여는 제품 경로 설명; 새 Demo·Trial·Git State를 만들거나 과거 CLI 결과를 Desktop 증거로 사용하지 않음.
- **Beginner Payoff:** Chatbot 대화에서 개발 프로젝트 개발 작업으로 이동할 때 선택할 입구를 안다.
- **Advanced Payoff:** 기능 설명 문서와 계정·제품 표면에서 실제 확인해야 하는 진입 동작을 구분한다.
- **C++ Vision Bridge:** 없음 — 특정 IDE·CMake·컴파일러 조작으로 확장하지 않음.
- **Speaker Intent:** S12에서 실제 Agent 조사 범위를 회수한 뒤 기존 Codex 진입 안내로 연결한다. 화면·공식 근거·제품 미검증 범위는 유지한다.
- **Transition:** “이제 사람과 Agent가 같은 개발 프로젝트를 볼 수 있습니다. 그중 무엇을 함께 보고, 무엇을 사람이 최종 결정해야 할까요?”라고 S14를 연다.
- **Estimated Time:** 1분
- **Delivery Mode Allocation:** Lecture 1분 = 1분
- **Evidence / Decision References:** BEAT-003, DEC-0036, CLM-0031, SRC-0228, SRC-0229; OpenAI [Quickstart](https://learn.chatgpt.com/docs/quickstart?setup=app), [App](https://learn.chatgpt.com/docs/app), 2026-10-21 확인. 현재 제품·계정·Windows 재확인 Gate 유지., DEC-0087; DEC-0185
- **Practical Tip Classification:** 사용 환경
- **Audience Footer:** 메뉴 예시

#### S14 — 프로젝트를 봐도, 원하는 작업은 따로 정한다

- **Slide ID:** S14
- **ACT:** ACT 0
- **Section:** 0E / 0F
- **Working Title:** 프로젝트를 봐도, 원하는 작업은 따로 정한다
- **Primary Role:** 정보 접근·최종 판단 책임 구분, ACT0 Q&A 및 ACT1 전환
- **Audience Question:** “개발 프로젝트를 볼 수 있으면 원하는 작업도 알게 되는가?”
- **Core Message:** 사람과 AI Agent는 허용된 개발 프로젝트의 코드·명세·테스트를 함께 살펴볼 수 있다. 원하는 결과, 허용 범위와 완료 수락의 최종 결정·책임은 사람에게 있으며 AI는 조사와 제안을 도울 수 있다.
- **Story Beat:** BEAT-003 → BEAT-004 전환
- **Curriculum Trace:** ACT 0 / 0E–0F — 정보 접근·사람의 최종 판단, ACT0 Q&A와 ACT1 요청 설계 연결.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** FROZEN — 기존99장의 Story·배정·Demo 범위를 보존한 현행115장 구조; TEACHING_MODEL; 과정의 Mental Model이며 모든 제품·환경의 기능 주장 아님
- **Visual Concept:** `프로젝트 파일 접근 ≠ 작업 의도` 아래 두 영역을 병렬 배치한다. `볼 수 있는 것 — 코드·명세·테스트`에는 사람+AI Agent 아이콘을, `정해야 하는 것 — 목표·범위·완료 수락`에는 사람 아이콘과 “최종 결정·책임”을 표시한다. AI의 제안 가능성을 작은 보조 문구로 남겨 AI가 추론할 수 없다는 의미가 되지 않게 한다. 아이콘은 교육용 표현이며 실제 제품 UI가 아니다. DEC-0109에서 삭제 전 화면을 복원했다.
- **Demo / Case Connection:** DEMO-01 성공 뒤 남는 문제
- **Beginner Payoff:** 개발 프로젝트 접근을 주더라도 무엇을 원하는지 설명해야 함을 이해한다.
- **Advanced Payoff:** Context 탐색과 목표·판단 책임을 서로 다른 역할로 본다.
- **C++ Vision Bridge:** 없음
- **Speaker Intent:** 사람과 Agent가 함께 살펴볼 수 있는 정보와 사람이 최종 선택·승인할 목표·허용 범위·완료 수용을 이전 역할 도식 그대로 설명한다. Agent의 제안 가능성을 유지한다. 2분 설명 후 ACT0 Q&A3분을 운영하고, ACT1 제목으로 이동한다. 화면에 요청 작성 연결 문장을 추가하지 않는다.
- **Transition:** “이제 원하는 작업을 요청으로 어떻게 전달할지 보겠습니다.”라고 S15의 ACT1 제목을 연 뒤 S16의 기존 모호한 요청 사례로 이어간다.
- **Estimated Time:** 5분
- **Delivery Mode Allocation:** Lecture 2분 + Q&A 3분 = 5분
- **Evidence / Decision References:** BEAT-003, DEMO-01, TRIAL-001, CLM-0002, CLM-0009, OQ-003, OQ-005, DEC-0108, DEC-0109
- **Audience Footer:** 없음 — M 연계 표시는 유지

### ACT 1 — 22 slides / 61 minutes

#### S15 — Prompt를 작업 명세로 만들기

- **Slide ID:** S15
- **ACT:** ACT 1
- **Section:** 1A
- **Working Title:** Prompt를 작업 명세로 만들기
- **Primary Role:** ACT의 제목과 설계 관점을 안내하고 기존 첫 문제 장으로 넘긴다. 새 기법·성과·기능 정의를 설명하는 장이 아니다.
- **Audience Question:** “이번 ACT에서는 어떤 관점으로 다음 문제를 살펴볼까?”
- **Core Message:** Prompt를 작업 명세로 만들기 — Prompt Engineering · 요청 설계
- **Story Beat:** BEAT-004
- **Curriculum Trace:** ACT 1의 승인된 주제를 안내하는 표지다. 기존 Curriculum Section/Beat를 재사용한다.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** TEACHING MODEL — ACT 주제 안내이며 새 제품 기능·Trial·성과·현재 제품 지원을 주장하지 않는다.
- **Visual Concept:** T12-A ACT Title. 기존 밝은 배경·teal/ink/sub 색·글꼴을 사용한다. ACT 번호, 두 줄의 큰 한글 제목, 작은 승인 부제, 현재 Slide ID와 조용한 과정 표기만 둔다. 사진·결과·기능 목록은 추가하지 않는다.
- **Demo / Case Connection:** N/A — 기존 ACT의 사례를 소개하기 전 주제만 안내한다. Demo 시간을 추가하지 않는다.
- **Beginner Payoff:** 지금부터 살펴볼 주제와 앞 구간과의 경계를 알아본다.
- **Advanced Payoff:** 해당 ACT가 다루는 설계 책임의 범위를 짧게 확인한다.
- **C++ Vision Bridge:** N/A — 기존 본문에 있는 C++ 연결을 유지한다.
- **Speaker Intent:** 승인된 제목·부제를 가리키며 ACT의 방향만 안내한다. 용어 정의·모든 도구의 도입·성과 예고로 확장하지 않고 기존 첫 문제를 연다.
- **Transition:** “이제 이 관점에서 첫 문제를 보겠습니다.”라고 S16 — Task에는 무엇이 아직 정해지지 않았을까?로 이어간다.
- **Estimated Time:** 1분
- **Delivery Mode Allocation:** Transition 1분 = 1분
- **Evidence / Decision References:** DEC-0090; existing ACT/Story focus; no new evidence
- **ACT Subtitle:** Prompt Engineering · 요청 설계
- **Audience Footer:** 기존 ACT 제목 표기 유지

#### S16 — 이 요청에는 무엇이 빠졌을까?

- **Slide ID:** S16
- **ACT:** ACT 1
- **Section:** 1A
- **Working Title:** 이 요청에는 무엇이 빠졌을까?
- **Primary Role:** 같은 crop 사례에서 요청에 빠진 보존 기준·수정 범위·완료 근거를 드러낸다.
- **Audience Question:** “앞서 본 crop 실패를 고칠 때, 무엇을 지키고 어디까지 바꾸며 무엇을 확인해야 할까?”
- **Core Message:** crop 수정 목표는 같아도 보존 기준·허용 범위·확인 및 보고할 근거를 요청에서 더 분명히 할 수 있다.
- **Story Beat:** BEAT-004
- **Curriculum Trace:** ACT 1 — same model, underspecified request.
- **Evidence Type:** TEACHING_MODEL / CONCEPTUAL
- **Claim Status:** FROZEN — 기존99장의 Story·배정·Demo 범위를 보존한 현행115장 구조; TEACHING_MODEL / CONCEPTUAL. Agent의 실제 실패·정지·반복 실행·토큰/시간 실측·기하급수 법칙을 주장하지 않는다.
- **Visual Concept:** “crop test 고쳐줘” 입력창, 기존 동일 Agent 삽화, 지킬 기준/수정 범위/완료 근거의 세 질문을 함께 둔다. 토큰·작업 시간 PNG는 기존의 수치 없는 정성 개념도로 유지한다. 명세·기대값 유지 여부, 수정 허용 범위, 확인·보고 근거를 묻고 다음 장에서 같은 요청의 변경 범위를 비교한다. 실제 정지·비용 증가·절감 측정이 아니다. DEC-0110. 요청 입력 부분은 기존 Mac 스타일의 제목 막대·세 색상 표시·밝은 본문·둥근 테두리로 통일한다. 문장·강조·앞뒤 관계는 보존하며 [공통 적용 범위](MAC_PROMPT_STYLE_AUDIT.md)를 따른다. DEC-0184: “요청 입력 · 교육용 재구성”를 “요청 입력”로 간략화한다. 본문·도식·수치·시간·근거 범위와 Notes는 유지한다.
- **Demo / Case Connection:** ACT0에서 조사한 crop 실패를 떠올리는 교육용 수정 요청. S17과 같은 요청이며 별도의 filter 성능 사례로 전환하지 않는다. 실제 TRIAL-002 Prompt가 아니다.
- **Beginner Payoff:** 같은 사례에서 요청에 더할 보존·수정·확인 조건을 찾는다.
- **Advanced Payoff:** 코드 접근, Task 목표, 제약, 완료 증거를 구분한다.
- **C++ Vision Bridge:** 없음
- **Speaker Intent:** 앞서 본 crop 실패를 고친다는 목표로 시작하고 세 질문을 하나씩 짚는다. 저장소에서 조사할 명세·구현과 사람이 정할 허용 범위를 구분한다. Agent가 명세를 추론하지 못하거나 반드시 멈춘다고 말하지 않는다. 기존 비용 그림은 정성 개념도로만 짧게 회수한다.
- **Transition:** “같은 crop 요청에서, 어떤 변경을 허용한 것인지 비교해 보겠습니다.”라고 S17로 이동한다.
- **Estimated Time:** 7분
- **Delivery Mode Allocation:** Case 7분 = 7분
- **Evidence / Decision References:** BEAT-004, TRIAL-001 callback only, CLM-0002, DEC-0038, DEC-0040, DEC-0042, DEC-0110; DEC-0179; DEC-0184; DEC-0188
- **Audience Footer:** 없음 — 원래 근거/예시/측정 범위는 Notes에 유지, M 연계 보존

#### S17 — 어디까지 바꾸라는 요청일까?

- **Slide ID:** S17
- **ACT:** ACT 1
- **Section:** 1B
- **Working Title:** 어디까지 바꾸라는 요청일까?
- **Primary Role:** 같은 crop 요청에 대한 허용 범위와 선택의 조건을 비교한다.
- **Audience Question:** “테스트 기대값 변경과 구현 수정은 각각 언제 허용할 수 있을까?”
- **Core Message:** 기존 명세·기대값이 유효한 이 사례에서는 구현을 명세에 맞춘다. 기대값 변경에는 명세 변경의 정당성·승인이 필요하고, 의도·명세·조건이 충돌하면 먼저 확인한다.
- **Story Beat:** BEAT-004 — Repository access does not convey intent
- **Curriculum Trace:** ACT 1 — same model, underspecified request.
- **Evidence Type:** TEACHING_MODEL / CONCEPTUAL
- **Claim Status:** FROZEN — 기존99장의 Story·배정·Demo 범위를 보존한 현행115장 구조; TEACHING_MODEL / CONCEPTUAL. 평행 시간선은 가능한 해석의 교육용 도식이며 실제 반복 실행 결과가 아니다.
- **Visual Concept:** S16과 같은 “crop test 고쳐줘” 입력창과 동일 Agent를 유지한다. 세 경로는 테스트 기대값 변경(명세 변경의 정당성·승인 필요), 구현을 명세에 맞춤(기존 명세·기대값 유지), 변경 범위를 먼저 확인(의도·명세·조건 충돌 시 질문)이다. 아래 다섯 항목은 요청에서 더 분명히 할 정보로 표시한다. 실제 반복 실행·동시 Subagent·선택 확률을 나타내지 않는다. DEC-0110. 요청 입력 부분은 기존 Mac 스타일의 제목 막대·세 색상 표시·밝은 본문·둥근 테두리로 통일한다. 문장·강조·앞뒤 관계는 보존하며 [공통 적용 범위](MAC_PROMPT_STYLE_AUDIT.md)를 따른다. DEC-0184: “요청 입력 · 교육용 재구성”를 “요청 입력”로 간략화한다. 본문·도식·수치·시간·근거 범위와 Notes는 유지한다.
- **Demo / Case Connection:** S16과 같은 교육용 crop 요청이다. 실제 TRIAL-002 Prompt 또는 여러 번 실행한 결과가 아니다.
- **Beginner Payoff:** 아무 테스트나 바꿔 통과시키는 것과 명세에 맞춰 구현을 고치는 것의 조건을 구분한다.
- **Advanced Payoff:** 저장소에서 추론할 수 있는 명세와 사람이 승인할 변경 범위를 나누어 판단한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** 예시 전환 없이 같은 요청을 이어 읽는다. 기대값 변경을 실제 유효한 명세의 구현 수정과 동등하게 정당한 답으로 가르치지 않는다. Agent는 저장소 근거로 올바른 수정을 추론할 수 있으며 의도·명세·조건이 충돌하거나 변경 권한이 불명확할 때 확인할 수 있다.
- **Transition:** “이 사례에서는 기존 명세·기대값을 지키고 구현만 고치려 합니다. 그 범위와 확인·보고 조건을 요청에 담아 보겠습니다.”라고 S18로 이동한다.
- **Estimated Time:** 2분
- **Delivery Mode Allocation:** Case 2분 = 2분
- **Evidence / Decision References:** BEAT-004, CLM-0002, DEC-0038, DEC-0042, DEC-0110; DEC-0179; DEC-0184
- **Audience Footer:** 가능한 해석의 예시

#### S18 — 원하는 변경 범위를 요청에 담는다

- **Slide ID:** S18
- **ACT:** ACT 1
- **Section:** 1B
- **Working Title:** 원하는 변경 범위를 요청에 담는다
- **Primary Role:** 같은 crop 요청을 자연스러운 문장으로 구체화해 원하는 변경 범위를 보여준다.
- **Audience Question:** “보존·수정·확인·보고 조건을 함께 쓰면 어떤 변경을 원했는지 보일까?”
- **Core Message:** 같은 요청에 기존 명세·기대값 보존, crop 구현 최소 수정, 관련·전체 테스트 확인, 변경·검증·미확인 사항 보고를 담는다. 의도한 경로와 실제 검증 결과는 별개다.
- **Story Beat:** BEAT-004
- **Curriculum Trace:** ACT 1 — underspecified request → explicit intended path; next generalization and Task Specification.
- **Evidence Type:** TEACHING_MODEL / CONCEPTUAL
- **Claim Status:** FROZEN — 사용자 승인 교육용 예시. 목표 경로의 시각적 선택은 실제 실행 결과·성공·결정성 보장이 아니다.
- **Visual Concept:** 입력창에는 “crop test 고쳐줘”와 보존·최소 수정·테스트 확인·결과 보고의 네 문장을 둔다. crop(1,3)의 기대 열1·2/폭2는 입력창 위 작은 참고로 분리한다. 동일 세 경로 중 구현 최소 수정을 사람이 의도한 변경 범위로 강조한다. 다섯 항목의 분류표는 S20/S21의 역할로 남긴다. 실제 실행 또는 PASS 표시가 아니다. DEC-0110. 요청 입력 부분은 기존 Mac 스타일의 제목 막대·세 색상 표시·밝은 본문·둥근 테두리로 통일한다. 문장·강조·앞뒤 관계는 보존하며 [공통 적용 범위](MAC_PROMPT_STYLE_AUDIT.md)를 따른다. DEC-0184: “요청 입력 · 교육용 재구성”를 “요청 입력”로 간략화한다. 본문·도식·수치·시간·근거 범위와 Notes는 유지한다. 요청에서 B 경로로 이어지는 작은 화살표를 분기점의 세로 중앙에 맞춘다.
- **Demo / Case Connection:** S16/S17과 같은 교육용 crop 요청을 구체화한다. 끝 좌표 제외 명세는 기존 근거와 일치하지만 실제 TRIAL-002 원문 또는 재실행 결과로 표현하지 않는다.
- **Beginner Payoff:** 실제로 보낼 수 있는 짧은 요청 문장에서 지킬 조건·수정 범위·확인·보고 내용을 읽는다.
- **Advanced Payoff:** 의도된 경로의 명시와 실행의 결정성·검증된 결과를 분리한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** 네 문장과 사람이 의도한 구현 경로를 연결한다. 관련 테스트와 전체 테스트의 뜻만 짧게 풀고 명령·도구 강의를 하지 않는다. S19는 사람이 정할 질문, S20은 다섯 항목, S21에서 실제 TRIAL-002 요청을 읽고 S22에서 같은 입력의 행동 기록을 본다는 경계를 유지한다.
- **Transition:** “이제 답을 다시 읽기보다, 다른 요청에서도 개발자가 먼저 결정할 질문을 정리해 보겠습니다.”라고 S19로 연결한다.
- **Estimated Time:** 2분
- **Delivery Mode Allocation:** Case 2분 = 2분
- **Evidence / Decision References:** BEAT-004, CLM-0002, DEC-0038; crop 명세는 기존 TRIAL-002와 일치하는 교육용 예시, DEC-0042, DEC-0110; DEC-0179; DEC-0184; DEC-0188
- **Audience Footer:** 없음 — 원래 근거/예시/측정 범위는 Notes에 유지, M 연계 보존

#### S19 — 개발자가 정해야 하는 경계

- **Slide ID:** S19
- **ACT:** ACT 1
- **Section:** 1B
- **Working Title:** 개발자가 정해야 하는 경계
- **Primary Role:** 모호한 요청에 남은 결정을 질문 형태로 드러낸다.
- **Audience Question:** “다른 요청을 보내기 전, 개발자인 나는 무엇을 결정해야 할까?”
- **Core Message:** Prompt의 실용적 가치는 문장 장식보다 Task ambiguity reduction에 있다.
- **Story Beat:** BEAT-004
- **Curriculum Trace:** ACT 1 — same model, underspecified request.
- **Evidence Type:** TEACHING_MODEL / CONCEPTUAL
- **Claim Status:** FROZEN — 기존99장의 Story·배정·Demo 범위를 보존한 현행115장 구조; TEACHING_MODEL; CONCEPTUAL. 하나의 요청이 특정 실패를 반드시 만든다고 단정하지 않는다.
- **Visual Concept:** 기존 다섯 질문 배열을 유지하되, S18의 crop 답을 다시 읽지 않고 다른 요청을 보내기 전 개발자가 결정할 목표·보존·허용 범위·근거·완료 기준으로 회수한다.
- **Demo / Case Connection:** S17의 모호한 요청과 새 S18의 구체 예시에서 선택한 정보를 다섯 일반 질문으로 확장한다.
- **Beginner Payoff:** 다른 작업의 구체적인 답을 정하기 전에 확인할 일반 질문을 얻는다.
- **Advanced Payoff:** 작업 경계와 완료 증거를 어디까지 고정할지 본다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** 원하는 변화·우선순위·제약·완료 판단은 사람이 정하고, 저장소 구현·테스트 위치·현재 동작 같은 사실은 조사하도록 맡길 수 있음을 구분한다. 저장소에서 알 수 없는 외부 요구는 제공하되 모든 Context를 직접 작성하라는 인상을 피한다. Case3분과 사적 Reflection1분을 유지한다.
- **Transition:** “사람이 정할 답과 저장소에서 조사할 사실을 구분해, 다섯 항목의 작업 요청으로 정리해 보겠습니다.”라고 S20로 이동한다.
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Case 3분 + Reflection 1분 = 4분
- **Evidence / Decision References:** BEAT-004, CLM-0002, DEC-0042
- **Audience Footer:** 없음 — M 연계 표시는 유지

#### S20 — Task Specification의 다섯 책임

- **Slide ID:** S20
- **ACT:** ACT 1
- **Section:** 1C
- **Working Title:** Task Specification의 다섯 책임
- **Primary Role:** 과정에서 사용할 Task Specification 모델을 소개한다.
- **Audience Question:** “사람이 정할 답과 저장소에서 조사할 사실을 요청에 어떻게 담을까?”
- **Core Message:** Goal, Context, Constraints, Process, Verification은 작업을 구체화하는 교육용 틀이다.
- **Story Beat:** BEAT-005 — The task becomes a specification
- **Curriculum Trace:** ACT 1 — Practical Prompt Checklist and Before/After.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** FROZEN — 기존99장의 Story·배정·Demo 범위를 보존한 현행115장 구조; TEACHING_MODEL; CONCEPTUAL. 공식 OpenAI 공식이나 제품 기능으로 표현하지 않는다.
- **Visual Concept:** 기존 하나의 Task Specification 안의 Goal / Context / Constraints / Process / Verification 다섯 행을 유지한다. Context는 관련 사실·참고 위치와 저장소에서 조사할 내용을, Process와 Verification은 요청에 담을 진행·확인·보고 조건을 뜻하도록 짚는다.
- **Demo / Case Connection:** 같은 crop task를 예로 삼되, 이 장에서는 항목의 역할만 보여준다.
- **Beginner Payoff:** 요청에 담을 내용을 순서 있게 떠올릴 수 있다.
- **Advanced Payoff:** Agent에게 맡길 판단과 개발자가 고정할 판단을 구별한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** 새 기법이나 항목 암기 수업이 아니라 개발자가 정한 정보를 요청으로 정리하는 틀이다. 사람이 정할 목표·우선순위·제약·완료 근거와 Agent가 저장소에서 조사할 사실을 구분하고, S21에서는 실제 문장의 위치만 확인한다.
- **Transition:** “이 다섯 항목이 실제로 보낸 요청 문장의 어디에 들어가는지 보겠습니다.”라고 S21의 TRIAL-002 요청 발췌·번역으로 이동한다.
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Lecture 4분 = 4분
- **Evidence / Decision References:** BEAT-005, CLM-0029, OQ-001, OQ-007, DEC-0042, DEC-0111
- **Audience Footer:** 저장소 사실은 조사하게 하고, 목표·제약·완료 기준은 사람이 정한다

#### S21 — 실제 요청에는 무엇을 담았을까?

- **Slide ID:** S21
- **ACT:** ACT 1
- **Section:** 1C + 1F 통합
- **Working Title:** 실제 요청에는 무엇을 담았을까?
- **Primary Role:** TRIAL-002 실제 요청의 발췌·번역에 다섯 역할을 바깥 주석으로 연결한다.
- **Audience Question:** “실제로 보낸 요청에는 목표·맥락·제약·과정·검증이 어디에 담겨 있을까?”
- **Core Message:** 실제 요청은 Goal/Constraints/Process/Verification의 네 제목으로 작성됐다. 다섯 역할은 원문을 읽는 교육용 틀이며 Context는 관련 구현·호출 경로 등 조사 대상에서 읽는다. 원문에 없는 Context 문단을 만들지 않는다.
- **Story Beat:** BEAT-005
- **Curriculum Trace:** ACT 1 — Practical Prompt Checklist and Before/After.
- **Evidence Type:** OBSERVED_PRODUCT / TEACHING_MODEL
- **Claim Status:** FROZEN WITH SCOPE — 실제 입력은 TRIAL-002 보존 기록에 한정한다. 다섯 역할 주석과 명세 해석 예는 TEACHING_MODEL이다. 비교 실행·Prompt 우월성·비용 절감·반복성·현재 제품 검증의 근거가 아니다.
- **Visual Concept:** 왼쪽 하나의 요청 영역에 실제 Goal/Constraints/Process/Verification 네 제목과 핵심 발췌·번역을 둔다. 오른쪽 다섯 역할 주석을 얇은 선으로 연결한다. Context 주석은 Process의 “관련 구현과 호출 경로”를 짚으며 별도 원문 문단으로 넣지 않는다. 과정 01–03은 S22와 같은 문장이다. 기존 4열 crop 명세 예는 요청 영역 밖 “명세 해석 예”로 구분한다. C++ 적용은 Notes cue로 보존한다. DEC-0111. 요청 입력 부분은 기존 Mac 스타일의 제목 막대·세 색상 표시·밝은 본문·둥근 테두리로 통일한다. 문장·강조·앞뒤 관계는 보존하며 [공통 적용 범위](MAC_PROMPT_STYLE_AUDIT.md)를 따른다. DEC-0184: “실제 요청 발췌·번역 · 다섯 항목은 교육용 주석”를 화면에서 삭제한다. 본문·도식·수치·시간·근거 범위와 Notes는 유지한다.
- **Demo / Case Connection:** 실제 TRIAL-002 요청을 읽는 장이며 S22는 같은 요청의 과정 지시, S23은 실제 변경, S24는 검증 결과를 대조한다. S16–S18의 교육용 짧은 요청을 그대로 실행한 결과로 표현하지 않는다.
- **Beginner Payoff:** 다섯 역할이 반드시 다섯 제목으로 나뉘지 않아도 요청 문장에서 찾을 수 있음을 본다.
- **Advanced Payoff:** 실제 입력, 해석 주석, 명세 예와 관찰 결과를 구분한다. 하나의 문장은 조사 대상과 진행 방식의 역할을 함께 가질 수 있다.
- **C++ Vision Bridge:** SUPPORTING Notes cue — 출력·API/ABI 보존 범위와 Release 검증 조건을 먼저 정하는 기존 적용 예를 Notes에 유지한다. 실제 TRIAL-002 입력에 포함된 내용이나 Windows 검증으로 표현하지 않는다.
- **Speaker Intent:** S20의 틀을 다시 정의하지 않고 실제 입력의 위치를 짚는다. 네 실제 제목을 유지하고 다섯 주석은 바깥에 둔다. Context는 사람이 상세 내용을 모두 복사하는 것이 아니라 조사 대상을 가리킬 수도 있음을 보여준다. S21은 요청 내용만 읽고 S22에서 관찰 기록, S23/S24에서 변경·검증 결과를 확인한다. Lecture6분·Case3분 유지.
- **Transition:** “이 요청의 과정 지시 01–03이 실제 기록에는 어떻게 남았을까요?”라고 같은 요청과 관찰 기록을 대조하는 S22로 이동한다.
- **Estimated Time:** 9분
- **Delivery Mode Allocation:** Lecture 6분 + Case 3분 = 9분
- **Evidence / Decision References:** BEAT-005, TRIAL-002, CLM-0029, OQ-001, OQ-007, DEC-0042, DEC-0111; DEC-0179; DEC-0184
- **Audience Footer:** N/A — DEC-0184로 보조 설명 문구를 화면에서 삭제한다. 원래 출처·가정·Claim Boundary는 Notes에 보존하고 M 연계는 유지한다.

#### S22 — 요청한 과정은 기록에도 남았을까?

- **Slide ID:** S22
- **ACT:** ACT 1
- **Section:** 1D
- **Working Title:** 요청한 과정은 기록에도 남았을까?
- **Primary Role:** 실제 요청 문장과 관찰된 수정 전 행동을 세 쌍으로 대조하고 S23·S24의 결과 확인을 준비한다.
- **Audience Question:** “실제로 요청한 재현·조사·수정 전 계획은 기록에 어떻게 남았을까?”
- **Core Message:** 이 실행의 과정 지시를 실패 재현, 제품 호출 경로 확인, 파일 변경보다 앞선 계획 보고의 관찰 기록과 대조할 수 있다.
- **Story Beat:** BEAT-006 — Investigate before changing code
- **Curriculum Trace:** ACT 1 — Investigation-first workflow and Prompt's value.
- **Evidence Type:** OBSERVED_PRODUCT
- **Claim Status:** FROZEN — 기존99장의 Story·배정·Demo 범위를 보존한 현행115장 구조; FROZEN WITH SCOPE; OBSERVED PRODUCT — Codex CLI의 단일 TRIAL-002 실행에 한정한다.
- **Visual Concept:** S21과 같은 실제 요청의 Process 01–03 발췌·번역을 좌측에 유지하고, 우측 관찰 기록 요약과 같은 번호·행으로 대응시킨다. 좌측 소제목은 “앞 장의 같은 요청 · 과정 지시 01–03”이다. 우측 테스트명·호출 기호는 실제 대상 코드 식별자이며 원시 CLI 로그 인용이 아니다. 04 수정 내용은 S23, 05 검증 결과는 S24로 이어간다. 기존 관찰과 배치는 유지한다. 요청 입력 부분은 기존 Mac 스타일의 제목 막대·세 색상 표시·밝은 본문·둥근 테두리로 통일한다. 문장·강조·앞뒤 관계는 보존하며 [공통 적용 범위](MAC_PROMPT_STYLE_AUDIT.md)를 따른다.
- **Demo / Case Connection:** DEMO-05의 도입에서 S21에 제시한 실제 TRIAL-002 요청 중 Process를 관찰 요약과 대조한다. S23은 실제 변경, S24는 실제 검증 결과다.
- **Beginner Payoff:** 요청에 적은 작업 방식을 실제 외부 행동 기록에서 확인할 수 있음을 본다.
- **Advanced Payoff:** 요청·관찰 요약·대상 코드 식별자와 명령 원문·실행 출력의 근거 수준을 구분한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** S21에서 읽은 같은 실제 입력의 01 재현·02 조사·03 수정 전 계획을 회수하고 우측 외부 행동 기록과 대조한다. 다른 Prompt로 바뀐다고 소개하지 않는다. 원시 CLI 로그·계획 발언 원문·내부 사고를 보여주는 것은 아니며 구현 diff·통과 수치는 S23/S24에 남긴다.
- **Transition:** “요청한 과정이 기록에 남은 것을 확인했습니다. 이 조사와 계획 뒤 실제로 무엇을 바꿨는지 04 최소 수정 내용을 보겠습니다.”라고 S23로 이동한다. 05 확인·보고 결과는 S24에서 확인한다.
- **Estimated Time:** 2분
- **Delivery Mode Allocation:** Lecture 2분 = 2분
- **Evidence / Decision References:** BEAT-006, TRIAL-002, TRIAL-001, STATE-00, INV-MATURITY-011, DEC-0039, DEC-0042, DEC-0044, DEC-0111; DEC-0179
- **Audience Footer:** 같은 요청의 과정 지시와 관찰 기록 · 단일 CLI 실행

#### S23 — 조사에서 한 줄 변경까지

- **Slide ID:** S23
- **ACT:** ACT 1
- **Section:** 1D
- **Working Title:** 조사에서 한 줄 변경까지
- **Primary Role:** 조사 결과가 수정으로 이어진 흐름을 요약한다.
- **Audience Question:** “요청한 조사·보존 조건·최소 변경은 실제 diff에 어떻게 드러났을까?”
- **Core Message:** failing test와 호출 경로를 확인한 뒤, half-open 범위 계약을 보존하는 최소 변경을 했다.
- **Story Beat:** BEAT-006
- **Curriculum Trace:** ACT 1 — Investigation-first workflow and Prompt's value.
- **Evidence Type:** OBSERVED_PRODUCT
- **Claim Status:** FROZEN — 기존99장의 Story·배정·Demo 범위를 보존한 현행115장 구조; FROZEN WITH SCOPE; OBSERVED PRODUCT — 기록된 단일 CLI 실행에 한정한다.
- **Visual Concept:** 기존 crop Before/After 한 줄 diff와 너비3에서2의 변화를 유지한다. S22의 조사·수정 전 계획 및 끝 좌표 제외 보존 조건을 회수하고 실제 최소 변경이 요청 범위에 맞는지 대조한다.
- **Demo / Case Connection:** Trial 기록에서 재현, 조사, edit 전 계획, 변경 한 줄만 추린다.
- **Beginner Payoff:** 코드를 바꾸기 전에 원인과 기대 동작을 대조하는 이유를 본다.
- **Advanced Payoff:** 명시된 public contract와 diff 범위가 맞는지 검토한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** 실패 테스트·호출 경로 조사, 수정 전 계획, 명세 보존·최소 변경이라는 실제 요청과 실제 diff의 연결을 강조한다. 독립적인 디버깅·수정 절차 강의로 확장하지 않으며 Prompt 단독 인과성을 주장하지 않는다.
- **Transition:** “요청한 최소 수정까지 확인했습니다. 이제 요청에 적은 05 확인·보고가 어떤 기록으로 남았는지 보겠습니다.”라고 S24로 이동한다.
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Demo 4분 (CAPTURED) = 4분
- **Evidence / Decision References:** BEAT-006, TRIAL-002, INV-MATURITY-011, DEC-0039, DEC-0042
- **Audience Footer:** 실제 변경 diff

#### S24 — 변경 결과와 확인 증거

- **Slide ID:** S24
- **ACT:** ACT 1
- **Section:** 1D
- **Working Title:** 변경 결과와 확인 증거
- **Primary Role:** TRIAL-002의 검증 결과를 한 화면에서 확인한다.
- **Audience Question:** “요청한 확인·보고 사항은 어떤 검증 기록으로 남았을까?”
- **Core Message:** 이 사례의 결과는 생성된 코드뿐 아니라 명시된 검증과 diff 확인을 거친 변경이다.
- **Story Beat:** BEAT-007 — A clear Prompt succeeds on its own; INV-VERIFY-001
- **Curriculum Trace:** ACT 1 — Prompt Engineering Success and its transition to recurring project context.
- **Evidence Type:** OBSERVED_PRODUCT
- **Claim Status:** FROZEN — 기존99장의 Story·배정·Demo 범위를 보존한 현행115장 구조; FROZEN WITH SCOPE; OBSERVED PRODUCT — 한 번의 Codex CLI 실행 결과다.
- **Visual Concept:** 기존 동작/실행/범위의 세 묶음과 관련 테스트3/3·전체11/11·CLI PASS·한 파일/한 줄·diff 확인 수치를 유지한다. 각 묶음을 S22의 확인·보고 지시에 대응시킨다. 실제 집중 실행은 test_transform.py 묶음으로 resize 보존 테스트도 포함하므로 crop 테스트만3개로 좁히지 않는다. 영어 명칭은 쉬운 설명 뒤에 두며 원자료 명령과 결과는 그대로 유지한다.
- **Demo / Case Connection:** Trial의 실제 기록값.
- **Beginner Payoff:** “완료”를 주장할 때 결과와 확인 증거가 함께 필요함을 본다.
- **Advanced Payoff:** 각 증거를 해당 실행 범위에 한정해 평가한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** 테스트 용어와 결과를 별도로 나열하지 않고, 요청한 관련 테스트 묶음·프로젝트 전체 테스트·CLI 샘플 실행·변경 내용 확인이 기록에 어떻게 남았는지 본다. 성능·총 토큰·시간 개선 근거로 바꾸지 않고 미확인 사항과 사람의 완료 판단으로 연결한다.
- **Transition:** “이 확인 결과와 아직 모르는 점을 받아야 사람이 완료 여부를 판단할 수 있습니다. 무엇을 보고해 달라고 요청해야 할까요?”라고 S25으로 연결한다.
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Demo 4분 (CAPTURED) = 4분
- **Evidence / Decision References:** BEAT-007, INV-VERIFY-001, TRIAL-002, CLM-0029, CLM-0027, DEC-0042
- **Audience Footer:** 해당 수정·입력의 검증 기록 · 성능 미측정

#### S25 — Generated ≠ Done

- **Slide ID:** S25
- **ACT:** ACT 1
- **Section:** 1E
- **Working Title:** Generated ≠ Done
- **Primary Role:** 생성과 완료 판단 사이에 필요한 확인을 설명한다.
- **Audience Question:** “무엇을 확인·보고해 달라고 요청해야 완료를 판단할 수 있을까?”
- **Core Message:** Task는 결과뿐 아니라 적절한 검증과 review를 포함해야 한다. 변경 이유·범위, 검증 근거·결과, 미확인 사항, 사람의 수용 판단을 짧은 결과 인계로 연결한다.
- **Story Beat:** BEAT-007; INV-VERIFY-001
- **Curriculum Trace:** ACT 1 — Prompt Engineering Success and its transition to recurring project context.
- **Evidence Type:** OBSERVED_PRODUCT / TEACHING_MODEL
- **Claim Status:** FROZEN — 기존99장의 Story·배정·Demo 범위를 보존한 현행115장 구조; TEACHING_MODEL; OBSERVED PRODUCT는 TRIAL-002 결과에 한정하고, check와 claim의 관계는 일반 Engineering 모델로 구분한다.
- **Visual Concept:** 기존 생성과 완료 판단의 대비 및 변경 이유·범위/확인 근거·결과/미확인 사항/사람의 수용 판단 네 항목을 유지한다. 앞의 기록을 받아 판단하려면 무엇을 확인·보고해 달라고 요청해야 하는지 회수하는 화면이다.
- **Demo / Case Connection:** Trial에서 실제 수행한 확인과 성능 주장을 위한 조건부 benchmark를 구분한다.
- **Beginner Payoff:** 코드가 나왔다는 사실만으로 완료라고 판단하지 않는다.
- **Advanced Payoff:** 주장에 맞는 검증 근거를 선택한다.
- **C++ Vision Bridge:** S26에서 검사 범위를 고른 뒤 S27/S27의 교육용 vector·GoogleTest 예시에서 조건의 충분성을 보고 요청 문장으로 회수한다. Release/API/ABI 등 선택 참고는 Notes에 유지한다.
- **Speaker Intent:** Verification과 결과 보고도 작업 요청의 일부임을 중심에 둔다. 변경 내용·확인 결과·미확인을 받아 사람이 완료를 판단하며, 검사 이름을 따로 소개하는 수업으로 전환하지 않는다. S24의 통과 수치를 다시 읽지 않는다.
- **Transition:** “완료를 판단할 때, 무엇을 확인해 달라고 요청할까요?”라고 S26의 확인 범위 선택으로 이동한다.
- **Estimated Time:** 3분
- **Delivery Mode Allocation:** Lecture 3분 = 3분
- **Evidence / Decision References:** BEAT-007, INV-VERIFY-001, TRIAL-002, CLM-0029, CLM-0027, DEC-0042
- **Audience Footer:** 주장과 위험에 맞는 근거로 완료를 판단한다

#### S26 — 원하는 결과에 맞춰 확인 방법을 고른다

- **Slide ID:** S26
- **ACT:** ACT 1
- **Section:** 1E + 1F 통합
- **Working Title:** 원하는 결과에 맞춰 확인 방법을 고른다
- **Primary Role:** 판단할 결과에 따라 요청할 확인 방법을 선택한다.
- **Audience Question:** “원하는 결과를 무엇으로 확인해 달라고 요청할까?”
- **Core Message:** 명세 준수·기존 테스트 범위의 동작·CLI 샘플 경로·변경 범위·실행시간은 서로 다른 확인을 필요로 한다. 확인한 입력과 범위 안에서 판단한다.
- **Story Beat:** BEAT-007; INV-VERIFY-001
- **Curriculum Trace:** ACT 1 — 완료를 판단할 확인을 선택하고 목표에 맞는 검증 요청으로 작성한다. 요청 문장 도구와 반복 Project Context로 이어간다.
- **Evidence Type:** OBSERVED_PRODUCT / TEACHING_MODEL
- **Claim Status:** FROZEN WITH SCOPE / TEACHING MODEL — TRIAL-002에서 실제 수행한 관련·전체 테스트, CLI 샘플, diff 확인은 기존 Python 기록에 한정한다. 검사와 주장 범위의 대응은 교육 모델이며 성능 측정은 미실행이다.
- **Visual Concept:** 판단하고 싶은 것→요청할 확인의5행으로 읽는다. 기존 crop 명세의 수치·vector·assertion은 반복하지 않는다. 성능 행은 같은 조건의 전후 측정이며 Trial에서 미측정임을 footer로 유지한다.
- **Demo / Case Connection:** 실제 TRIAL-002 확인 기록을 회수하되 새로운 Demo 시간·실행·비교를 추가하지 않는다.
- **Beginner Payoff:** 완료를 판단하려는 질문에 맞는 확인을 요청한다.
- **Advanced Payoff:** 검사 범위를 통과 범위 이상으로 일반화하지 않는다.
- **C++ Vision Bridge:** 화면에는 C++ 코드나 vector 예시를 넣지 않는다. 삭제한 비교/선택 참고 원문은 기준판316419a의 Git 이력에 남기고 현재 장에 흡수하지 않는다.
- **Speaker Intent:** S25의 사람이 완료를 판단한다는 원칙에서 한 단계 구체화해 무엇을 확인하도록 요청할지 고른다. 모든 작업에 모든 검사를 일률적으로 요구하지 않는다.
- **Transition:** “확인할 기준을 골랐습니다. 이제 이를 분명하게 전달하는 요청 문장 도구를 보겠습니다.”라고 S27로 이동한다.
- **Estimated Time:** 2분
- **Delivery Mode Allocation:** Lecture 2분 = 2분
- **Evidence / Decision References:** BEAT-007, INV-VERIFY-001, TRIAL-002, CLM-0029, CLM-0027, DEC-0041, DEC-0042, DEC-0112, DEC-0114; DEC-0188
- **Audience Footer:** TRIAL-002는 Python 검증 기록 · 성능 측정은 수행하지 않음

#### S27 — 지시와 참고 자료의 구분

- **Slide ID:** S27
- **ACT:** ACT 1
- **Section:** 1H Practical Prompt Methods
- **Working Title:** 지시와 참고 자료의 구분
- **Primary Role:** 조건부 도구. 요청과 로그·명세가 한 메시지에 섞일 때 활용할 요청 문장과 선택 기준을 소개한다.
- **Audience Question:** “요청과 로그·명세가 한 메시지에 섞일 때, 어떻게 요청하면 될까?”
- **Core Message:** 여러 자료가 섞일 때, 제목으로 읽을 경계를 표시한다.
- **Story Beat:** BEAT-005, BEAT-007 — specified intent and completion evidence; no new product-history event.
- **Curriculum Trace:** ACT 1 — practical request expression, before recurring Project Context.
- **Evidence Type:** RESEARCH / TEACHING_MODEL / CONCEPTUAL
- **Claim Status:** FROZEN WITH SCOPE — CLM-0032; 공식 권고를2026-10-30 재확인했다. 교육용 각색이며 실제 Trial·효과 측정·모든 모델의 성공을 뜻하지 않는다.
- **Visual Concept:** DEC-0117: 기존 T03-A의 폰트·색·배지·M 연계를 유지하며 기법명 Delimiters와 짧은 뜻, 사용 상황을 상단에 둔다. 좌측 native Prompt는 적용 문장을 강조하고 우측은 기법별 관계 도식으로 표시한다. 요청/명세/로그 구획의 강조색을 보고, 오른쪽의 지시/비교 기준/관찰 자료 역할과 연결한다. 하단에 출처 문서·해당 절과 기존 Claim Boundary를 표시한다. 요청 입력 부분은 기존 Mac 스타일의 제목 막대·세 색상 표시·밝은 본문·둥근 테두리로 통일한다. 문장·강조·앞뒤 관계는 보존하며 [공통 적용 범위](MAC_PROMPT_STYLE_AUDIT.md)를 따른다.
- **Demo / Case Connection:** 기존 crop 명세/ROI 연결의 교육용 요청이다. 실제 TRIAL-002 원문·새 실행이 아니다.
- **Beginner Payoff:** 슬라이드만 보고 필요한 상황과 요청 문장을 활용할 수 있다.
- **Advanced Payoff:** 구획은 해석을 돕는 표시이며, 보안 격리를 보장하지 않는다.
- **C++ Vision Bridge:** 별도 Bridge component 없음. 기존 crop 명세에 적용하는 요청 예시이며 실제 C++ 실행·새 오류 정책을 추가하지 않는다.
- **Speaker Intent:** 기법명→사용 상황→강조 문장/도식 순서로1분에 설명한다. 구획의 존재보다 지시와 참고 자료의 역할을 구분한다. 모든 요청에 여덟 기법을 넣거나 공식 표준 분류로 암기시키지 않는다.
- **Transition:** 자료의 구획 다음에는, 모델이 모르는 팀 고유 표기를 예시로 알려주는 S28로 이동한다.
- **Estimated Time:** 1분
- **Delivery Mode Allocation:** Lecture 1분 = 1분
- **Evidence / Decision References:** CLM-0032, SRC-0230, SRC-0231, DEC-0043, DEC-0087, DEC-0116, references/product/PROMPT_ENGINEERING_2026-10-30.md; DEC-0179
- **Practical Tip Classification:** 요청 작성
- **Audience Footer:** 출처 · OpenAI, Prompt engineering · Message formatting with Markdown and XML / 구획은 해석을 돕는 표시이며, 보안 격리를 보장하지 않는다.
- **Prompt Tool Priority:** 조건부 — 명시한 상황이 있을 때만 추가한다.
- **Visible Method / Approach:** Delimiters — 지시와 참고 자료의 구획
- **Visible Citation:** 출처 · OpenAI, Prompt engineering · Message formatting with Markdown and XML; https://developers.openai.com/api/docs/guides/prompt-engineering#message-formatting-with-markdown-and-xml

#### S28 — 입력과 기대 결과의 작은 예시

- **Slide ID:** S28
- **ACT:** ACT 1
- **Section:** 1H Practical Prompt Methods
- **Working Title:** 입력과 기대 결과의 작은 예시
- **Primary Role:** 조건부 도구. 사내 고유 표기·분류가 설명만으로 안 맞을 때 활용할 요청 문장과 선택 기준을 소개한다.
- **Audience Question:** “사내 고유 표기·분류가 설명만으로 안 맞을 때, 어떻게 요청하면 될까?”
- **Core Message:** 모델이 모르는 우리 기준을 입력·출력 예시로 전달한다.
- **Story Beat:** BEAT-005, BEAT-007 — specified intent and completion evidence; no new product-history event.
- **Curriculum Trace:** ACT 1 — practical request expression, before recurring Project Context.
- **Evidence Type:** RESEARCH / TEACHING_MODEL / CONCEPTUAL
- **Claim Status:** FROZEN WITH SCOPE — CLM-0033; 공식 권고를2026-10-30 재확인했다. 교육용 각색이며 실제 Trial·효과 측정·모든 모델의 성공을 뜻하지 않는다.
- **Visual Concept:** DEC-0117: 기존 T03-A의 폰트·색·배지·M 연계를 유지하며 기법명 Few-shot Prompting와 짧은 뜻, 사용 상황을 상단에 둔다. 좌측 native Prompt는 적용 문장을 강조하고 우측은 기법별 관계 도식으로 표시한다. 세 입력 상태에서 팀 표기로 이어지는 예시 대응을 가리킨다. 오른쪽에서 간단히 요청→팀 기준 전달 여부→필요할 때만 예시 추가를 확인한다. 화살표는 예시의 입력/출력 대응이며 실제 실행 기록이 아니다. 하단에 출처 문서·해당 절과 기존 Claim Boundary를 표시한다. 요청 입력 부분은 기존 Mac 스타일의 제목 막대·세 색상 표시·밝은 본문·둥근 테두리로 통일한다. 문장·강조·앞뒤 관계는 보존하며 [공통 적용 범위](MAC_PROMPT_STYLE_AUDIT.md)를 따른다.
- **Demo / Case Connection:** 가상 팀 변경 보고 표기를 전달하는 교육용 예시다. 실제 사내 규정·정책·실행 결과 또는 TRIAL-002 원문이 아니다.
- **Beginner Payoff:** 슬라이드만 보고 필요한 상황과 요청 문장을 활용할 수 있다.
- **Advanced Payoff:** 가상 팀의 보고 기준 · 실제 사내 규정이나 실행 결과가 아님
- **C++ Vision Bridge:** 검사 업무의 변경 보고에 적용할 수 있는 가상 팀 표기 예시다. 실제 회사 규정·C++ 실행·오류 정책을 추가하지 않는다.
- **Speaker Intent:** 기법명→사용 상황→강조 문장/도식 순서로1분에 설명한다. 예시를 먼저 쌓지 않고 간단한 요청이 부족할 때 추가한다. 모든 요청에 여덟 기법을 넣거나 공식 표준 분류로 암기시키지 않는다.
- **Transition:** 예시가 필요한 상황을 확인했다. 다음 S29에서는 보고 전체의 항목과 읽을 순서를 정한다.
- **Estimated Time:** 1분
- **Delivery Mode Allocation:** Case 1분 = 1분
- **Evidence / Decision References:** CLM-0033, SRC-0230, SRC-0231, DEC-0043, DEC-0087, DEC-0116, references/product/PROMPT_ENGINEERING_2026-10-30.md; DEC-0179
- **Practical Tip Classification:** 요청 작성
- **Audience Footer:** 출처 · OpenAI, Reasoning best practices · How to prompt reasoning models effectively / 가상 팀의 보고 기준 · 실제 사내 규정이나 실행 결과가 아님
- **Prompt Tool Priority:** 조건부 — 명시한 상황이 있을 때만 추가한다.
- **Visible Method / Approach:** Few-shot Prompting — 입력·출력 예시로 기준 전달
- **Visible Citation:** 출처 · OpenAI, Reasoning best practices · How to prompt reasoning models effectively; https://developers.openai.com/api/docs/guides/reasoning-best-practices#how-to-prompt-reasoning-models-effectively

#### S29 — 바로 검토할 수 있는 결과 형식

- **Slide ID:** S29
- **ACT:** ACT 1
- **Section:** 1H Practical Prompt Methods
- **Working Title:** 바로 검토할 수 있는 결과 형식
- **Primary Role:** 핵심 도구. 완료 보고에서 필요한 정보를 빨리 찾고 싶을 때 활용할 요청 문장과 선택 기준을 소개한다.
- **Audience Question:** “완료 보고에서 필요한 정보를 빨리 찾고 싶을 때, 어떻게 요청하면 될까?”
- **Core Message:** 검토에 필요한 항목을 지정하고, 중요한 근거는 남긴다.
- **Story Beat:** BEAT-005, BEAT-007 — specified intent and completion evidence; no new product-history event.
- **Curriculum Trace:** ACT 1 — practical request expression, before recurring Project Context.
- **Evidence Type:** RESEARCH / TEACHING_MODEL / CONCEPTUAL
- **Claim Status:** FROZEN WITH SCOPE — CLM-0034; 공식 권고를2026-10-30 재확인했다. 교육용 각색이며 실제 Trial·효과 측정·모든 모델의 성공을 뜻하지 않는다.
- **Visual Concept:** DEC-0117: 기존 T03-A의 폰트·색·배지·M 연계를 유지하며 기법명 Output Format Specification와 짧은 뜻, 사용 상황을 상단에 둔다. 좌측 native Prompt는 적용 문장을 강조하고 우측은 기법별 관계 도식으로 표시한다. 강조한 네 보고 항목을 오른쪽 보고서 구조의01–04와 대응시킨다. 보고 항목을 정하는 것이며 실행한 결과를 새로 보여주지 않는다. 하단에 출처 문서·해당 절과 기존 Claim Boundary를 표시한다. 요청 입력 부분은 기존 Mac 스타일의 제목 막대·세 색상 표시·밝은 본문·둥근 테두리로 통일한다. 문장·강조·앞뒤 관계는 보존하며 [공통 적용 범위](MAC_PROMPT_STYLE_AUDIT.md)를 따른다.
- **Demo / Case Connection:** 기존 crop 명세/ROI 연결의 교육용 요청이다. 실제 TRIAL-002 원문·새 실행이 아니다.
- **Beginner Payoff:** 슬라이드만 보고 필요한 상황과 요청 문장을 활용할 수 있다.
- **Advanced Payoff:** 형식과 내용은 별도 확인 · 채팅의 형식 요청은 API Structured Outputs와 다름
- **C++ Vision Bridge:** 별도 Bridge component 없음. 기존 crop 명세에 적용하는 요청 예시이며 실제 C++ 실행·새 오류 정책을 추가하지 않는다.
- **Speaker Intent:** 기법명→사용 상황→강조 문장/도식 순서로1분에 설명한다. 기계적인 문장 수 제한보다 필요한 보고 항목을 정한다. 모든 요청에 여덟 기법을 넣거나 공식 표준 분류로 암기시키지 않는다.
- **Transition:** 보고 항목이 있어도 설명의 근거는 따로 확인한다. S30에서 중요한 판단을 자료와 연결한다.
- **Estimated Time:** 1분
- **Delivery Mode Allocation:** Lecture 1분 = 1분
- **Evidence / Decision References:** CLM-0034, SRC-0233, SRC-0234, DEC-0043, DEC-0087, DEC-0116, references/product/PROMPT_ENGINEERING_2026-10-30.md; DEC-0179
- **Practical Tip Classification:** 요청 작성
- **Audience Footer:** 출처 · OpenAI, Prompting · Make the result ready to use / 형식과 내용은 별도 확인 · 채팅의 형식 요청은 API Structured Outputs와 다름
- **Prompt Tool Priority:** 핵심 — 교육 우선순위이며 매 요청의 필수 항목은 아니다.
- **Visible Method / Approach:** Output Format Specification — 받을 결과의 구조 지정
- **Visible Citation:** 출처 · OpenAI, Prompting · Make the result ready to use; https://learn.chatgpt.com/docs/prompting#make-the-result-ready-to-use

#### S30 — 근거가 있는 설명과 미확인의 구분

- **Slide ID:** S30
- **ACT:** ACT 1
- **Section:** 1H Practical Prompt Methods
- **Working Title:** 근거가 있는 설명과 미확인의 구분
- **Primary Role:** 핵심 도구. 설명을 믿기 전에 실제 자료를 대조해야 할 때 활용할 요청 문장과 선택 기준을 소개한다.
- **Audience Question:** “설명을 믿기 전에 실제 자료를 대조해야 할 때, 어떻게 요청하면 될까?”
- **Core Message:** 중요한 판단에 근거를 받고, 추정·미확인은 구분한다.
- **Story Beat:** BEAT-005, BEAT-007 — specified intent and completion evidence; no new product-history event.
- **Curriculum Trace:** ACT 1 — practical request expression, before recurring Project Context.
- **Evidence Type:** RESEARCH / TEACHING_MODEL / CONCEPTUAL
- **Claim Status:** FROZEN WITH SCOPE — CLM-0035; 공식 권고를2026-10-30 재확인했다. 교육용 각색이며 실제 Trial·효과 측정·모든 모델의 성공을 뜻하지 않는다.
- **Visual Concept:** DEC-0117: 기존 T03-A의 폰트·색·배지·M 연계를 유지하며 기법명 Grounding와 짧은 뜻, 사용 상황을 상단에 둔다. 좌측 native Prompt는 적용 문장을 강조하고 우측은 기법별 관계 도식으로 표시한다. 강조한 파일·함수 근거와 확인/추정/미확인 구분을 읽고, 오른쪽의 명세·구현·테스트가 결론을 뒷받침하는 관계를 확인한다. 도식은 특정 자료에서 새 결론을 실제 도출했다는 기록이 아니다. 하단에 출처 문서·해당 절과 기존 Claim Boundary를 표시한다. 요청 입력 부분은 기존 Mac 스타일의 제목 막대·세 색상 표시·밝은 본문·둥근 테두리로 통일한다. 문장·강조·앞뒤 관계는 보존하며 [공통 적용 범위](MAC_PROMPT_STYLE_AUDIT.md)를 따른다.
- **Demo / Case Connection:** 기존 crop 명세/ROI 연결의 교육용 요청이다. 실제 TRIAL-002 원문·새 실행이 아니다.
- **Beginner Payoff:** 슬라이드만 보고 필요한 상황과 요청 문장을 활용할 수 있다.
- **Advanced Payoff:** 출처가 있어도 원문과 대조한다 · 인용 자체가 정확성의 보증은 아님
- **C++ Vision Bridge:** 별도 Bridge component 없음. 기존 crop 명세에 적용하는 요청 예시이며 실제 C++ 실행·새 오류 정책을 추가하지 않는다.
- **Speaker Intent:** 기법명→사용 상황→강조 문장/도식 순서로1분에 설명한다. S29의 보고 형식과 달리 여기서는 판단을 뒷받침하는 자료를 다룬다. 모든 요청에 여덟 기법을 넣거나 공식 표준 분류로 암기시키지 않는다.
- **Transition:** 자료를 찾아도 정책이 없다면 사람이 선택해야 한다. S31에서 질문할 결정의 범위를 본다.
- **Estimated Time:** 1분
- **Delivery Mode Allocation:** Lecture 1분 = 1분
- **Evidence / Decision References:** CLM-0035, SRC-0230, SRC-0234, DEC-0043, DEC-0087, DEC-0116, references/product/PROMPT_ENGINEERING_2026-10-30.md; DEC-0179
- **Practical Tip Classification:** 요청 작성
- **Audience Footer:** 출처 · OpenAI, Prompting · Add useful context / Set boundaries / 출처가 있어도 원문과 대조한다 · 인용 자체가 정확성의 보증은 아님
- **Prompt Tool Priority:** 핵심 — 교육 우선순위이며 매 요청의 필수 항목은 아니다.
- **Visible Method / Approach:** Grounding — 설명을 실제 자료에 연결
- **Visible Citation:** 출처 · OpenAI, Prompting · Add useful context / Set boundaries; https://learn.chatgpt.com/docs/prompting#add-useful-context

#### S31 — 결과를 바꾸는 결정에서 확인 질문

- **Slide ID:** S31
- **ACT:** ACT 1
- **Section:** 1H Practical Prompt Methods
- **Working Title:** 결과를 바꾸는 결정에서 확인 질문
- **Primary Role:** 핵심 도구. 사람의 선택에 따라 구현이나 완료 기준이 바뀔 때 활용할 요청 문장과 선택 기준을 소개한다.
- **Audience Question:** “사람의 선택에 따라 구현이나 완료 기준이 바뀔 때, 어떻게 요청하면 될까?”
- **Core Message:** 조사할 사실은 찾게 하고, 결과를 바꾸는 결정은 묻는다.
- **Story Beat:** BEAT-005, BEAT-007 — specified intent and completion evidence; no new product-history event.
- **Curriculum Trace:** ACT 1 — practical request expression, before recurring Project Context.
- **Evidence Type:** RESEARCH / TEACHING_MODEL / CONCEPTUAL
- **Claim Status:** FROZEN WITH SCOPE — CLM-0036; 공식 권고를2026-10-30 재확인했다. 교육용 각색이며 실제 Trial·효과 측정·모든 모델의 성공을 뜻하지 않는다.
- **Visual Concept:** DEC-0117: 기존 T03-A의 폰트·색·배지·M 연계를 유지하며 기법명 Clarifying Questions와 짧은 뜻, 사용 상황을 상단에 둔다. 좌측 native Prompt는 적용 문장을 강조하고 우측은 기법별 관계 도식으로 표시한다. 정책이 없을 때의 질문과 독립 조사 계속 문장을 짚고, 오른쪽에서 조사 후 남은 결정의 유무에 따라 진행/질문이 갈리는 구조를 본다. 하단에 출처 문서·해당 절과 기존 Claim Boundary를 표시한다. 요청 입력 부분은 기존 Mac 스타일의 제목 막대·세 색상 표시·밝은 본문·둥근 테두리로 통일한다. 문장·강조·앞뒤 관계는 보존하며 [공통 적용 범위](MAC_PROMPT_STYLE_AUDIT.md)를 따른다.
- **Demo / Case Connection:** 기존 crop 명세/ROI 연결의 교육용 요청이다. 실제 TRIAL-002 원문·새 실행이 아니다.
- **Beginner Payoff:** 슬라이드만 보고 필요한 상황과 요청 문장을 활용할 수 있다.
- **Advanced Payoff:** 모든 세부를 질문하지 않는다 · 결정과 무관한 허용된 작업은 계속 진행
- **C++ Vision Bridge:** 별도 Bridge component 없음. 기존 crop 명세에 적용하는 요청 예시이며 실제 C++ 실행·새 오류 정책을 추가하지 않는다.
- **Speaker Intent:** 기법명→사용 상황→강조 문장/도식 순서로1분에 설명한다. 조사 가능한 사실을 모두 사람에게 되묻지 않도록 범위를 정한다. 모든 요청에 여덟 기법을 넣거나 공식 표준 분류로 암기시키지 않는다.
- **Transition:** 사람의 결정이 필요한 변경은 구현 전에 검토할 계획을 받을 수 있다. S32에서 그 사용 조건을 본다.
- **Estimated Time:** 1분
- **Delivery Mode Allocation:** Lecture 1분 = 1분
- **Evidence / Decision References:** CLM-0036, SRC-0234, SRC-0235, SRC-0243, DEC-0043, DEC-0087, DEC-0116, references/product/PROMPT_ENGINEERING_2026-10-30.md; DEC-0179
- **Practical Tip Classification:** 요청 작성
- **Audience Footer:** 출처 · OpenAI, Using GPT-6 · Initiative and follow-through / 모든 세부를 질문하지 않는다 · 결정과 무관한 허용된 작업은 계속 진행
- **Prompt Tool Priority:** 핵심 — 교육 우선순위이며 매 요청의 필수 항목은 아니다.
- **Visible Method / Approach:** Clarifying Questions — 결과를 바꾸는 결정 확인
- **Visible Citation:** 출처 · OpenAI, Using GPT-6 · Initiative and follow-through; https://developers.openai.com/api/docs/guides/latest-model#initiative-and-follow-through

#### S32 — 큰 작업을 검토할 결과물로 나누기

- **Slide ID:** S32
- **ACT:** ACT 1
- **Section:** 1H Practical Prompt Methods
- **Working Title:** 큰 작업을 검토할 결과물로 나누기
- **Primary Role:** 조건부 도구. 조사 결과를 보고 구현 범위를 결정해야 할 때 활용할 요청 문장과 선택 기준을 소개한다.
- **Audience Question:** “조사 결과를 보고 구현 범위를 결정해야 할 때, 어떻게 요청하면 될까?”
- **Core Message:** 중간 판단이 필요한 작업은, 구현 전에 검토할 계획을 받는다.
- **Story Beat:** BEAT-005, BEAT-007 — specified intent and completion evidence; no new product-history event.
- **Curriculum Trace:** ACT 1 — practical request expression, before recurring Project Context.
- **Evidence Type:** RESEARCH / TEACHING_MODEL / CONCEPTUAL
- **Claim Status:** FROZEN WITH SCOPE — CLM-0037; 공식 권고를2026-10-30 재확인했다. 교육용 각색이며 실제 Trial·효과 측정·모든 모델의 성공을 뜻하지 않는다.
- **Visual Concept:** DEC-0117: 기존 T03-A의 폰트·색·배지·M 연계를 유지하며 기법명 Task Decomposition와 짧은 뜻, 사용 상황을 상단에 둔다. 좌측 native Prompt는 적용 문장을 강조하고 우측은 기법별 관계 도식으로 표시한다. 조사·선택 지점·수정 없는 계획 문장을 짚는다. 오른쪽01 조사 산출물/02 구현 전 계획/03 범위 선택은 사람이 검토할 결과의 경계다. 하단에 출처 문서·해당 절과 기존 Claim Boundary를 표시한다. 요청 입력 부분은 기존 Mac 스타일의 제목 막대·세 색상 표시·밝은 본문·둥근 테두리로 통일한다. 문장·강조·앞뒤 관계는 보존하며 [공통 적용 범위](MAC_PROMPT_STYLE_AUDIT.md)를 따른다.
- **Demo / Case Connection:** 기존 crop 명세/ROI 연결의 교육용 요청이다. 실제 TRIAL-002 원문·새 실행이 아니다.
- **Beginner Payoff:** 슬라이드만 보고 필요한 상황과 요청 문장을 활용할 수 있다.
- **Advanced Payoff:** 작업 계획과 검토 지점을 요청한다 · 내부 사고 과정의 출력을 요구하지 않음
- **C++ Vision Bridge:** 별도 Bridge component 없음. 기존 crop 명세에 적용하는 요청 예시이며 실제 C++ 실행·새 오류 정책을 추가하지 않는다.
- **Speaker Intent:** 기법명→사용 상황→강조 문장/도식 순서로1분에 설명한다. 큰 작업이라는 이유만으로 잘게 나누거나 승인 단계를 늘리지 않는다. 모든 요청에 여덟 기법을 넣거나 공식 표준 분류로 암기시키지 않는다.
- **Transition:** 계획 뒤의 변경안에서 무엇을 중점 검토할지 S33로 연결한다.
- **Estimated Time:** 1분
- **Delivery Mode Allocation:** Lecture 1분 = 1분
- **Evidence / Decision References:** CLM-0037, SRC-0231, SRC-0232, SRC-0243, DEC-0043, DEC-0087, DEC-0116, references/product/PROMPT_ENGINEERING_2026-10-30.md; DEC-0179
- **Practical Tip Classification:** 요청 작성
- **Audience Footer:** 출처 · OpenAI, Best practices · Plan first for difficult tasks / 작업 계획과 검토 지점을 요청한다 · 내부 사고 과정의 출력을 요구하지 않음
- **Prompt Tool Priority:** 조건부 — 명시한 상황이 있을 때만 추가한다.
- **Visible Method / Approach:** Task Decomposition — 검토할 산출물과 단계 구분
- **Visible Citation:** 출처 · OpenAI, Best practices · Plan first for difficult tasks; https://learn.chatgpt.com/guides/best-practices#plan-first-for-difficult-tasks

#### S33 — 기준을 지정한 코드 리뷰 요청

- **Slide ID:** S33
- **ACT:** ACT 1
- **Section:** 1H Practical Prompt Methods
- **Working Title:** 기준을 지정한 코드 리뷰 요청
- **Primary Role:** 핵심 도구. 변경안에서 놓치면 안 될 문제를 검토할 때 활용할 요청 문장과 선택 기준을 소개한다.
- **Audience Question:** “변경안에서 놓치면 안 될 문제를 검토할 때, 어떻게 요청하면 될까?”
- **Core Message:** 검토 기준과 실패 조건을 지정하고, 실제 검사와 구분한다.
- **Story Beat:** BEAT-005, BEAT-007 — specified intent and completion evidence; no new product-history event.
- **Curriculum Trace:** ACT 1 — practical request expression, before recurring Project Context.
- **Evidence Type:** RESEARCH / TEACHING_MODEL / CONCEPTUAL
- **Claim Status:** FROZEN WITH SCOPE — CLM-0038; 공식 권고를2026-10-30 재확인했다. 교육용 각색이며 실제 Trial·효과 측정·모든 모델의 성공을 뜻하지 않는다.
- **Visual Concept:** DEC-0117: 기존 T03-A의 폰트·색·배지·M 연계를 유지하며 기법명 Criteria-based Review와 짧은 뜻, 사용 상황을 상단에 둔다. 좌측 native Prompt는 적용 문장을 강조하고 우측은 기법별 관계 도식으로 표시한다. 명세·공개 API·변경 범위를 강조한 문장을 오른쪽 세 질문과 연결한다. 발견 사항은 위치·실패 조건·영향으로 보고하며 실제 검사와 정적 검토를 구분한다. 하단에 출처 문서·해당 절과 기존 Claim Boundary를 표시한다. 요청 입력 부분은 기존 Mac 스타일의 제목 막대·세 색상 표시·밝은 본문·둥근 테두리로 통일한다. 문장·강조·앞뒤 관계는 보존하며 [공통 적용 범위](MAC_PROMPT_STYLE_AUDIT.md)를 따른다.
- **Demo / Case Connection:** 기존 crop 명세/ROI 연결의 교육용 요청이다. 실제 TRIAL-002 원문·새 실행이 아니다.
- **Beginner Payoff:** 슬라이드만 보고 필요한 상황과 요청 문장을 활용할 수 있다.
- **Advanced Payoff:** 리뷰에도 누락이 있을 수 있다 · 실행 근거와 사람의 완료 판단을 함께 확인
- **C++ Vision Bridge:** 별도 Bridge component 없음. 기존 crop 명세에 적용하는 요청 예시이며 실제 C++ 실행·새 오류 정책을 추가하지 않는다.
- **Speaker Intent:** 기법명→사용 상황→강조 문장/도식 순서로1분에 설명한다. S30은 설명 근거, S33는 변경안의 위반 검토다. 문제 개수를 억지로 채우지 않는다. 모든 요청에 여덟 기법을 넣거나 공식 표준 분류로 암기시키지 않는다.
- **Transition:** 첫 제안이나 리뷰에서 요구와 다른 지점을 알았다면, S34에서 근거와 수정 범위를 전달한다.
- **Estimated Time:** 1분
- **Delivery Mode Allocation:** Lecture 1분 = 1분
- **Evidence / Decision References:** CLM-0038, SRC-0232, SRC-0235, SRC-0243, DEC-0043, DEC-0087, DEC-0116, references/product/PROMPT_ENGINEERING_2026-10-30.md; DEC-0179
- **Practical Tip Classification:** 요청 작성
- **Audience Footer:** 출처 · OpenAI, Best practices · Improve reliability with testing and review / 리뷰에도 누락이 있을 수 있다 · 실행 근거와 사람의 완료 판단을 함께 확인
- **Prompt Tool Priority:** 핵심 — 교육 우선순위이며 매 요청의 필수 항목은 아니다.
- **Visible Method / Approach:** Criteria-based Review — 기준을 지정한 변경 검토
- **Visible Citation:** 출처 · OpenAI, Best practices · Improve reliability with testing and review; https://learn.chatgpt.com/guides/best-practices#improve-reliability-with-testing-and-review

#### S34 — 구체적인 근거로 수정 방향 피드백

- **Slide ID:** S34
- **ACT:** ACT 1
- **Section:** 1H Practical Prompt Methods
- **Working Title:** 구체적인 근거로 수정 방향 피드백
- **Primary Role:** 핵심 도구. 첫 제안의 어떤 부분이 요구와 다른지 알 때 활용할 요청 문장과 선택 기준을 소개한다.
- **Audience Question:** “첫 제안의 어떤 부분이 요구와 다른지 알 때, 어떻게 요청하면 될까?”
- **Core Message:** 어긋난 지점·기대 결과·유지할 조건으로 방향을 고친다.
- **Story Beat:** BEAT-005, BEAT-007 — specified intent and completion evidence; no new product-history event.
- **Curriculum Trace:** ACT 1 — practical request expression, before recurring Project Context.
- **Evidence Type:** RESEARCH / TEACHING_MODEL / CONCEPTUAL
- **Claim Status:** FROZEN WITH SCOPE — CLM-0039; 공식 권고를2026-10-30 재확인했다. 교육용 각색이며 실제 Trial·효과 측정·모든 모델의 성공을 뜻하지 않는다.
- **Visual Concept:** DEC-0117: 기존 T03-A의 폰트·색·배지·M 연계를 유지하며 기법명 Iterative Refinement와 짧은 뜻, 사용 상황을 상단에 둔다. 좌측 native Prompt는 적용 문장을 강조하고 우측은 기법별 관계 도식으로 표시한다. 명세의 폭2와 보존 조건의 강조를 오른쪽 어긋난 지점/판단 근거/유지 조건에 대응시킨다. 가상의 잘못된 제안을 근거로 고치는 요청이며 실제 응답 실패나 개선 성과가 아니다. 하단에 출처 문서·해당 절과 기존 Claim Boundary를 표시한다. 요청 입력 부분은 기존 Mac 스타일의 제목 막대·세 색상 표시·밝은 본문·둥근 테두리로 통일한다. 문장·강조·앞뒤 관계는 보존하며 [공통 적용 범위](MAC_PROMPT_STYLE_AUDIT.md)를 따른다.
- **Demo / Case Connection:** 기존 crop 명세/ROI 연결의 교육용 요청이다. 실제 TRIAL-002 원문·새 실행이 아니다.
- **Beginner Payoff:** 슬라이드만 보고 필요한 상황과 요청 문장을 활용할 수 있다.
- **Advanced Payoff:** 앞선 제안은 가상 예시 · 반복 요청만으로 품질 향상을 보장하지 않음
- **C++ Vision Bridge:** 별도 Bridge component 없음. 기존 crop 명세에 적용하는 요청 예시이며 실제 C++ 실행·새 오류 정책을 추가하지 않는다.
- **Speaker Intent:** 기법명→사용 상황→강조 문장/도식 순서로1분에 설명한다. 고친 요청에도 다음 작업에 다시 적을 공통 조건이 남는지 S35으로 연결한다. 모든 요청에 여덟 기법을 넣거나 공식 표준 분류로 암기시키지 않는다.
- **Transition:** 요청을 구체화해도 다음 작업에 다시 적을 조건이 남습니다. S35에서 같은 crop 요청을 보며 찾아봅니다.
- **Estimated Time:** 1분
- **Delivery Mode Allocation:** Lecture 1분 = 1분
- **Evidence / Decision References:** CLM-0039, SRC-0234, DEC-0043, DEC-0087, DEC-0116, references/product/PROMPT_ENGINEERING_2026-10-30.md; DEC-0179
- **Practical Tip Classification:** 요청 작성
- **Audience Footer:** 출처 · OpenAI, Prompting · Improve the result with follow-up messages / 앞선 제안은 가상 예시 · 반복 요청만으로 품질 향상을 보장하지 않음
- **Prompt Tool Priority:** 핵심 — 교육 우선순위이며 매 요청의 필수 항목은 아니다.
- **Visible Method / Approach:** Iterative Refinement — 구체적 피드백으로 결과 수정
- **Visible Citation:** 출처 · OpenAI, Prompting · Improve the result with follow-up messages; https://learn.chatgpt.com/docs/prompting#improve-the-result-with-follow-up-messages

#### S35 — 다음 작업에도 이 내용을 다시 적어야 할까?

- **Slide ID:** S35
- **ACT:** ACT 1
- **Section:** 1G 첫 장
- **Working Title:** 다음 작업에도 이 내용을 다시 적어야 할까?
- **Primary Role:** 구체적인 crop 요청을 읽고 다음 작업에도 반복할 내용을 생각한다.
- **Audience Question:** “작업이 바뀌어도 다시 말하게 될 문장은 무엇일까요?”
- **Core Message:** 잘 작성한 요청에서도 다음 작업에 다시 필요한 정보·기준이 있음을 발견한다. 이번 목표와 공통 기준을 같은 세 문장에서 살피며, 관리 방법의 질문은 S36에서 연다.
- **Story Beat:** BEAT-007 → BEAT-008 handoff
- **Curriculum Trace:** ACT 1 — Prompt Engineering Success and its transition to recurring project context.; ACT 2 — repeated project context.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** TEACHING MODEL — 교육용 요청·Reflection 질문이다. 실제 TRIAL-002 입력·수행·비교·제품 기능·성과·유일한 정답 분류의 근거가 아니다.
- **Visual Concept:** 기존 T01-B의 큰 질문과 보조 단서3개를 하나의 prompt-shaped 요청 예시로 묶는다. 요청은 “crop 경계 오류를 고쳐줘. / 기존 공개 API는 유지해. / 프로젝트에 정해진 테스트 명령으로 확인해.”다. 세 문장은 같은 색이며 정답을 미리 강조하지 않는다. 빈 두 Bucket을 없애고 하단 질문 하나에 시선을 모은다. Native text/shape와 기존 M2 footer 유지. 요청 입력 부분은 기존 Mac 스타일의 제목 막대·세 색상 표시·밝은 본문·둥근 테두리로 통일한다. 문장·강조·앞뒤 관계는 보존하며 [공통 적용 범위](MAC_PROMPT_STYLE_AUDIT.md)를 따른다. DEC-0184: “작업 요청 · 교육용 예시”를 “작업 요청”로 간략화한다. “교육용 요청 예시 · 실제 TRIAL-002 입력이나 수행 결과가 아님”를 화면에서 삭제한다. 본문·도식·수치·시간·근거 범위와 Notes는 유지한다.
- **Demo / Case Connection:** 같은 crop 사례의 교육용 짧은 요청이다. 실제 TRIAL-002 원문을 재생하거나 새 실험을 하지 않는다. Reflection1분 뒤 자발적 Q&A2분.
- **Beginner Payoff:** 구체적인 요청 문장에서 다음에도 다시 말할 내용을 찾는다.
- **Advanced Payoff:** 반복되는 문장을 저장 방법의 답보다 먼저 검토한다. 반복 자체가 전역 지침의 정당성은 아니다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** S34의 요청 구체화 성과를 받아 같은 세 문장에서 반복되는 기준을 발견하게 한다. 화면과 시간은 유지하고, 공통 기준의 관리 질문은 S36에서 연다.
- **Transition:** “같은 요청에서 이번 목표와 계속 참고할 기준을 나눠 보고, 그 기준을 어디에서 관리할지 생각해 보겠습니다.”라고 S36로 이동한다.
- **Estimated Time:** 3분
- **Delivery Mode Allocation:** Reflection 1분 + Q&A 2분 = 3분
- **Evidence / Decision References:** BEAT-007, BEAT-008, CLM-0029, CLM-0027, CLM-0003, CLM-0005, DEC-0042, DEC-0113, DEC-0115; DEC-0179; DEC-0184
- **Audience Footer:** N/A — DEC-0184로 보조 설명 문구를 화면에서 삭제한다. 원래 출처·가정·Claim Boundary는 Notes에 보존하고 M 연계는 유지한다.

#### S36 — 작업마다 바뀌는 목표, 계속 쓰는 기준

- **Slide ID:** S36
- **ACT:** ACT 1
- **Section:** 1G 종료 및 ACT 2 전환
- **Working Title:** 작업마다 바뀌는 목표, 계속 쓰는 기준
- **Primary Role:** S35과 동일한 요청 문장을 이번 목표와 지속해서 적용할 기준으로 분리한다.
- **Audience Question:** “이 기준을 프로젝트에서 관리하고, 작업할 때 찾아 참고하게 할 수 없을까?”
- **Core Message:** 이번 작업의 목표·특수 조건은 요청에 담는다. 프로젝트에서 공통으로 적용하기로 합의한 정보·기준은 관리할 위치와 작업 시 제공·참조 방법을 설계한다.
- **Story Beat:** BEAT-007 → BEAT-008; TRANS-003
- **Curriculum Trace:** ACT 1 — Prompt Engineering Success and its transition to recurring project context.; ACT 2 — repeated project context.
- **Evidence Type:** TEACHING_MODEL / CONCEPTUAL
- **Claim Status:** TEACHING MODEL / CONCEPTUAL — 동일한 교육용 요청을 분리한 예시다. 실제 STATE-01 지침 원문·자동 적용·추가 실행·효과·유일한 분류 결과가 아니다. 계속 적용할지는 프로젝트의 합의와 조건을 확인한다.
- **Visual Concept:** 왼쪽에 S35과 동일한3문장 요청을 유지한다. crop 목표 한 줄은 이번 작업의 목표로 연결하고, API·정해진 테스트 명령 두 줄은 하나의 강조 영역과 얇은 bracket으로 “계속 쓰는 기준”에 연결한다. 오른쪽 설명은 “이번 작업에만 적용”과 “프로젝트에서 합의해 여러 작업에 적용”이다. README·의존성·다른 Task 예시를 화면에 추가하지 않는다. 마지막 질문은 공통 기준을 프로젝트에서 관리하고 작업할 때 찾아 참고하게 할지다. 요청 입력 부분은 기존 Mac 스타일의 제목 막대·세 색상 표시·밝은 본문·둥근 테두리로 통일한다. 문장·강조·앞뒤 관계는 보존하며 [공통 적용 범위](MAC_PROMPT_STYLE_AUDIT.md)를 따른다. DEC-0184: “앞 장과 같은 요청 · 교육용 예시”를 “앞 장과 같은 요청”로 간략화한다. “교육용 분리 예시 · 계속 적용할지는 프로젝트의 합의와 조건을 확인한다”를 화면에서 삭제한다. 본문·도식·수치·시간·근거 범위와 Notes는 유지한다.
- **Demo / Case Connection:** S35의 같은 crop 교육용 요청을 분리한 예다. 실제 TRIAL/STATE 원문·관찰 차이가 아니다. AGENTS.md·제품 저장 기능을 답으로 보여주지 않는다.
- **Beginner Payoff:** 무엇을 바꾸려는 목표와 계속 참고할 기준이 다른 역할임을 같은 문장에서 본다.
- **Advanced Payoff:** 공통 기준으로 둘지 여부는 반복 횟수만으로 정하지 않고 합의·수명·적용 범위를 확인한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** 같은 세 문장의 구분을 유지하고 마지막 질문을 공통 기준의 관리 위치와 작업 시 참조로 확장한다. Prompt→Context 전환이며 수행 절차·도구·환경 설계는 앞당기지 않는다. 다음 S38는 세 작업으로 범위를 넓힌다.
- **Transition:** “이 기준을 프로젝트에서 관리하고 작업할 때 찾아 참고하게 할 수 없을까요? 다음에는 서로 다른 세 작업에서도 같은 기준을 쓰는지 보겠습니다.”라고 S37 제목→S38로 이동한다.
- **Estimated Time:** 6분
- **Delivery Mode Allocation:** Reflection 1분 + Transition 3분 + Q&A 2분 = 6분
- **Evidence / Decision References:** BEAT-007, BEAT-008, TRANS-003, CLM-0029, CLM-0027, CLM-0003, CLM-0005, DEC-0042, DEC-0113, DEC-0115; DEC-0179; DEC-0184
- **Audience Footer:** N/A — DEC-0184로 보조 설명 문구를 화면에서 삭제한다. 원래 출처·가정·Claim Boundary는 Notes에 보존하고 M 연계는 유지한다.

### ACT 2 — 21 slides / 88 minutes

#### S37 — 필요한 정보를 찾아 쓰게 하기

- **Slide ID:** S37
- **ACT:** ACT 2
- **Section:** 2A
- **Working Title:** 필요한 정보를 찾아 쓰게 하기
- **Primary Role:** ACT의 제목과 설계 관점을 안내하고 기존 첫 문제 장으로 넘긴다. 새 기법·성과·기능 정의를 설명하는 장이 아니다.
- **Audience Question:** “이번 ACT에서는 어떤 관점으로 다음 문제를 살펴볼까?”
- **Core Message:** 필요한 정보를 찾아 쓰게 하기 — Context Engineering · 정보 설계
- **Story Beat:** BEAT-008 — Good Project instructions are repeated in each Prompt
- **Curriculum Trace:** ACT 2의 승인된 주제를 안내하는 표지다. 기존 Curriculum Section/Beat를 재사용한다.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** TEACHING MODEL — ACT 주제 안내이며 새 제품 기능·Trial·성과·현재 제품 지원을 주장하지 않는다.
- **Visual Concept:** T12-A ACT Title. 기존 밝은 배경·teal/ink/sub 색·글꼴을 사용한다. ACT 번호, 두 줄의 큰 한글 제목, 작은 승인 부제, 현재 Slide ID와 조용한 과정 표기만 둔다. 사진·결과·기능 목록은 추가하지 않는다.
- **Demo / Case Connection:** N/A — 기존 ACT의 사례를 소개하기 전 주제만 안내한다. Demo 시간을 추가하지 않는다.
- **Beginner Payoff:** 지금부터 살펴볼 주제와 앞 구간과의 경계를 알아본다.
- **Advanced Payoff:** 해당 ACT가 다루는 설계 책임의 범위를 짧게 확인한다.
- **C++ Vision Bridge:** N/A — 기존 본문에 있는 C++ 연결을 유지한다.
- **Speaker Intent:** 승인된 제목·부제를 가리키며 ACT의 방향만 안내한다. 용어 정의·모든 도구의 도입·성과 예고로 확장하지 않고 기존 첫 문제를 연다.
- **Transition:** “서로 다른 세 작업에서도 같은 프로젝트 기준이 필요한지 보겠습니다.”라고 S38로 이동한다.
- **Estimated Time:** 1분
- **Delivery Mode Allocation:** Transition 1분 = 1분
- **Evidence / Decision References:** DEC-0090; existing ACT/Story focus; no new evidence, DEC-0115
- **ACT Subtitle:** Context Engineering · 정보 설계
- **Audience Footer:** 기존 ACT 제목 표기 유지

#### S38 — 다른 Task에 같은 설명이 반복된다

- **Slide ID:** S38
- **ACT:** ACT 2
- **Section:** 2A
- **Working Title:** 다른 Task에 같은 설명이 반복된다
- **Primary Role:** 같은 프로젝트 기준이 서로 다른 세 작업의 요청에도 반복됨을 확인하고 관리 질문을 구체화한다.
- **Audience Question:** “불필요한 반복을 어떻게 줄일까?”
- **Core Message:** 버그 수정·성능 조사·README 수정의 목표는 달라도 같은 프로젝트 기준이 반복된다. 이 반복을 어떻게 줄일지 묻고 S39의 공통 지침 문서로 이어진다.
- **Story Beat:** BEAT-008 — Good Project instructions are repeated in each Prompt
- **Curriculum Trace:** ACT 2 — repeated project context.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** FROZEN — 기존99장의 Story·배정·Demo 범위를 보존한 현행115장 구조; FROZEN WITH SCOPE; CONCEPTUAL.
- **Visual Concept:** Task A/B/C Prompt 아래 반복되는 `test command`, `no runtime dependency`, `local synthetic data`, `preserve public behavior`를 강조한다. 하단에는 “불필요한 반복을 어떻게 줄일까?”를 둔다. 요청 입력 부분은 기존 Mac 스타일의 제목 막대·세 색상 표시·밝은 본문·둥근 테두리로 통일한다. 문장·강조·앞뒤 관계는 보존하며 [공통 적용 범위](MAC_PROMPT_STYLE_AUDIT.md)를 따른다.
- **Demo / Case Connection:** Bug Fix, Performance, README 작업을 나란히 놓은 구성 사례. 해결책은 아직 보여주지 않는다.
- **Beginner Payoff:** Task마다 반복되는 Project 정보를 알아차린다.
- **Advanced Payoff:** 작업별 지시와 지속되는 Project 제약을 분리해서 본다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** S36/S37의 한 요청에서 서로 다른 세 작업으로 넓혀 네 공통 기준의 반복을 확인한다. “불필요한 반복을 어떻게 줄일까?”라고 묻고 S39에서 같은 기준을 AGENTS.md에 모은다. 실제 반복 비용·절감 성과를 측정한 결과가 아니다.
- **Transition:** “세 요청에 반복되던 공통 기준을 AGENTS.md에 모아 보겠습니다.”라고 S39로 이동한다.
- **Estimated Time:** 5분
- **Delivery Mode Allocation:** Lecture 4분 + Case 1분 = 5분
- **Evidence / Decision References:** BEAT-008, CLM-0003, CLM-0005, DEC-0115; DEC-0179; DEC-0186
- **Audience Footer:** 없음 — M 연계 표시는 유지

#### S39 — 작은 Project Context의 첫 기록

- **Slide ID:** S39
- **ACT:** ACT 2
- **Section:** 2B
- **Working Title:** 작은 Project Context의 첫 기록
- **Primary Role:** 반복되는 프로젝트 정보의 실제 기록 위치와 내용을 확인한다.
- **Audience Question:** “반복되는 공통 기준을 AGENTS.md에 남기면, 요청마다 다시 적지 않아도 될까?”
- **Core Message:** S38에서 반복되던 테스트 실행·의존성 추가 조건·로컬 합성 데이터·기존 동작 보존을 AGENTS.md 한 곳에 모아 보여준다. 실제 STATE-01의 지침을 한국어 의미로 정리한 문서 도식이며, 기록과 실제 적용 관찰은 구분한다.
- **Story Beat:** BEAT-009 — Project context moves into `AGENTS.md`
- **Curriculum Trace:** ACT 2 — Context Engineering Turning Point.
- **Evidence Type:** OBSERVED_PRODUCT / TEACHING_MODEL
- **Claim Status:** FROZEN WITH SCOPE — 실제 STATE-01의 공통 지침을 S38와 같은 한국어 의미로 재구성했다. 네 줄의 원문 인용·전체 파일 캡처가 아니며 자동 로딩·강제 준수·효율 향상 주장이 아니다. 현재 제품/계정 REQUIRES PRODUCT CHECK.
- **Visual Concept:** 왼쪽에 S38의 버그 수정·성능 조사·README 수정이라는 세 작업을 두고 오른쪽 하나의 AGENTS.md 문서로 연결한다. 문서에는 지정된 테스트 실행·의존성 추가에는 근거 필요·로컬 합성 데이터 사용·기존 동작 보존을 앞 장과 같은 표현으로 둔다. 원문 테스트 명령은 첫 기준 아래 유지한다. 목적/Build 안내 전체는 Notes에 보존하고 화면의 STATE 전환·AGENTS.md 발췌 footer는 삭제한다.
- **Demo / Case Connection:** STATE-01의 실제 지침이 근거이며 같은 네 한국어 표현을 공유 문서로 모으는 설명용 배치다. 파일이 존재했다는 관찰과 S40의 실제 활용 기록은 구분한다.
- **Beginner Payoff:** 자주 반복되는 내용을 어디에 둘 수 있는지 본다.
- **Advanced Payoff:** Context를 task prompt와 repository 안내 사이에서 어떻게 나눌지 생각한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** S38의 반복 질문에 문서 한 곳이라는 배치로 답한다. 원문 전체를 읽거나 영어/한국어를 중복 낭독하지 않는다. 기록 자체로 자동 적용 결과를 결론내리지 않는다.
- **Transition:** “기록해 둔 것과 실제로 참고한 것은 각각 확인해야 합니다. 다음에는 이 지침을 사용한 실행 기록을 보겠습니다.”라고 S40로 이동한다.
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Demo 4분 (HYBRID) = 4분
- **Evidence / Decision References:** BEAT-009, STATE-01, CLM-0003, CLM-0005, OQ-003, OQ-005, DEC-0115; DEC-0186
- **Audience Footer:** 없음 — 원문·상태 근거는 Notes에 보존, M 연계 유지

#### S40 — AGENTS.md의 지침대로 검증했다

- **Slide ID:** S40
- **ACT:** ACT 2
- **Section:** 2B
- **Working Title:** AGENTS.md의 지침대로 검증했다
- **Primary Role:** 프로젝트 지침과 실행의 관계를 보여준다. 오른쪽9/9는 사용자가 별도로 진행한 실제 데모를 기준으로 하며 기존11개 TRIAL-003과 구분한다.
- **Audience Question:** “요청에 적지 않은 테스트 실행 명령은 어디에서 확인할까?”
- **Core Message:** “Prompt에는 없지만 AGENTS.md에 의해 테스트를 수행했다.” 구체 실행 명령을 지침에서 참고·사용한 기존 관찰로 제한한다.
- **Story Beat:** BEAT-010 — Reusable Project guidance succeeds at first
- **Curriculum Trace:** ACT 2 — `AGENTS.md`'s first success.
- **Evidence Type:** OBSERVED_PRODUCT / TEACHING_MODEL
- **Claim Status:** FROZEN WITH SCOPE — 실제 데모 결과9/9는 사용자 제공 별도 데모 정보다. 기존 TRIAL-003은11개 기록으로 보존한다. 두 실행을 합치거나 Codex의 새 실행·독립 재현·지침 단독 인과성으로 주장하지 않는다.
- **Visual Concept:** DEC-0120의 macOS Prompt 창·지침·강조·제목·핵심 문장·하단 주석 삭제 상태를 유지하고 오른쪽 숫자만9/9 PASS로 바꾼다. 사용자 별도 실제 데모에 대한 출처는 Notes에 구분한다.
- **Demo / Case Connection:** S40의 결과 수치는 사용자가 별도로 진행한 실제9개 데모에서 제공한 정보다. 기존 TRIAL-003의11개 실행과 제품/환경 조건은 보존된 별도 참고이며 새 데모에 전이하지 않는다. 새 Trial ID·실행은 만들지 않는다.
- **Beginner Payoff:** 반복 정보를 repository에 두는 방식의 첫 효용을 본다.
- **Advanced Payoff:** 프롬프트의 명령 부재·프로젝트 지침·실제 실행을 연결하되 지침 사용과 단독 인과 효과를 구분한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** 현재 요청과 프로젝트 지침의 역할은 유지하고 사용자 별도 실제 데모의9/9 결과를 표시한다. 숫자를 기존11개 Trial의 정정이나 Codex가 새로 실행·확인한 결과로 설명하지 않는다. 나머지 화면과 S41 연결을 유지한다.
- **Transition:** “이번 README 요청과, 실제 기록에서 다시 참고한 테스트 지침을 Task Prompt와 Project Context의 역할로 정리해 보겠습니다.”
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Demo 4분 (HYBRID) = 4분
- **Evidence / Decision References:** BEAT-010, TRIAL-003 (지침 활용 별도 참고), STATE-01, CLM-0005, DEC-0046, DEC-0115, DEC-0119, DEC-0120, DEC-0121; 사용자 제공 별도 실제 데모
- **Audience Footer:** 없음 — 사용자 주석에 따라 두 줄 삭제; 근거·해석 범위는 Notes에 보존; M 연계 유지

#### S41 — Task Prompt와 Project Context

- **Slide ID:** S41
- **ACT:** ACT 2
- **Section:** 2C
- **Working Title:** Task Prompt와 Project Context
- **Primary Role:** 앞선 실제 기록을 Task Prompt와 Project Context의 범위·수명 개념으로 정리한다.
- **Audience Question:** “이 정보는 언제까지 유효한가?”
- **Core Message:** 앞선 실제 기록의 현재 작업 요청과 재참고한 프로젝트 정보를 Task Prompt와 Project Context의 범위·수명으로 정리한다. 정보가 Prompt 또는 문서 한 곳에만 들어가야 한다는 뜻은 아니다.
- **Story Beat:** BEAT-009–010; TRANS-003
- **Curriculum Trace:** ACT 2 — Context Engineering Turning Point.; ACT 2 — `AGENTS.md`'s first success.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** FROZEN — 기존99장의 Story·배정·Demo 범위를 보존한 현행115장 구조; TEACHING_MODEL; REQUIRES PRODUCT CHECK — 구체적 Windows·shell·IDE·hardware 지시를 추가하는 경우; CONCEPTUAL.
- **Visual Concept:** 왼쪽의 작업별 요청 예(crop 수정 또는 이번 README-only)를 테두리로 묶어 화살표로 프롬프트창 도식에 연결한다. 오른쪽의 테스트 명령·의존성 정책을 별도 테두리로 묶어 화살표로 AGENTS.md 문서 도식에 연결한다. 하단의 목표 변화/여러 작업 재참고 비교를 유지한다. 두 이미지는 교육용 생성 도식이며 실제 제품 화면이나 실행 캡처가 아니다. 요청 입력 부분은 기존 Mac 스타일의 제목 막대·세 색상 표시·밝은 본문·둥근 테두리로 통일한다. 문장·강조·앞뒤 관계는 보존하며 [공통 적용 범위](MAC_PROMPT_STYLE_AUDIT.md)를 따른다.
- **Demo / Case Connection:** S38의 반복 설명과 S39의 실제 기록·S40의 활용 관찰을 교육 모델로 정리한다.
- **Beginner Payoff:** 현재 작업의 지시와 반복되는 Project 사실을 구별한다.
- **Advanced Payoff:** Context를 선택할 때 Scope와 Lifetime도 함께 본다.
- **C++ Vision Bridge:** 전용 목록 없이, 일반 제약과 Task별 알고리즘 조건이 다른 범위일 수 있음을 짧게 언급한다.
- **Speaker Intent:** S36의 구분을 다시 강의하기보다 S40/S41 기록을 역할 이름으로 정리한다. Prompt도 Context를 제공하고 이번 작업의 조건도 요청에 남는다. 문서 존재와 실제 참고·적용을 구분한다.
- **Transition:** “정확한 정보를 더 많이 넣으면 언제나 괜찮을까?”
- **Estimated Time:** 5분
- **Delivery Mode Allocation:** Lecture 5분 = 5분
- **Evidence / Decision References:** BEAT-009, TRANS-003, CLM-0003, CLM-0005, OQ-003, OQ-005, BEAT-010, DEC-0047, DEC-0115; DEC-0179
- **Audience Footer:** C++에서도 프로젝트 공통 제약과 이번 변경 조건은 범위가 다를 수 있다

#### S42 — 정확한 정보도 계속 늘어난다

- **Slide ID:** S42
- **ACT:** ACT 2
- **Section:** 2D
- **Working Title:** 정확한 정보도 계속 늘어난다
- **Primary Role:** 프로젝트 초기에서 이야기의 현재 시점까지 AGENTS.md에 정보가 누적된 모습을 보여준다. 내부 근거 연결은 STATE-01/STATE-02를 유지한다.
- **Audience Question:** “정확한 Project 정보라면 모든 Task에 늘 넣어도 될까?”
- **Core Message:** Context가 늘어난 사실만으로 실패를 뜻하지 않는다. 다음 질문은 각 Task에서의 관련성이다.
- **Story Beat:** BEAT-011 — Context accumulates as Project needs grow
- **Curriculum Trace:** ACT 2 — context accumulation and growth scenario.
- **Evidence Type:** OBSERVED_PRODUCT
- **Claim Status:** FROZEN — 기존99장의 Story·배정·Demo 범위를 보존한 현행115장 구조; FROZEN WITH SCOPE; OBSERVED PRODUCT STATE.
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
- **Audience Footer:** 정보가 늘었다는 사실만으로 실패를 뜻하지는 않는다

#### S43 — 정확하지만 이번 작업에는 불필요한 정보

- **Slide ID:** S43
- **ACT:** ACT 2
- **Section:** 2D
- **Working Title:** 정확하지만 이번 작업에는 불필요한 정보
- **Primary Role:** TRIAL-004에서 읽은 AGENTS.md 안의 지침·정보를 이번 작업과의 관련성으로 나눈다.
- **Audience Question:** “README build 안내를 고치는 데 어떤 정보가 필요했을까?”
- **Core Message:** TRIAL-004에서는 필요한 정보와 무관한 정보가 함께 있었지만, Agent 혼란이나 Context 관련 실패는 관찰되지 않았다.
- **Story Beat:** BEAT-012 — A small task receives unrelated Project Context
- **Curriculum Trace:** ACT 2 — Context growth, relevance, and research caveat.
- **Evidence Type:** OBSERVED_PRODUCT
- **Claim Status:** FROZEN — 기존99장의 Story·배정·Demo 범위를 보존한 현행115장 구조; FROZEN WITH SCOPE; OBSERVED PRODUCT. Context 증가가 실패를 일으켰다는 주장을 하지 않는다.
- **Visual Concept:** 왼쪽 실제 요청 프롬프트창은 유지한다. 오른쪽 제목은 ‘AGENTS.md에 적힌 내용’으로 명시한다. Build / Run의 README 빌드·실행 안내 참조와 Core Constraints의 변경 범위 제한·관련 동작 검증을 청록 실선으로 묶는다. Architecture/Image Contract/Test의 구조 설명/CLI Summary의 이미지 상세는 회색 점선으로 묶는다. README·pyproject.toml 자체나 고정 버전값을 AGENTS.md 내용으로 넣지 않는다. 색 외에도 문구와 선 형태로 구분하고, Agent가 AGENTS.md를 읽었으며 혼란·실패는 관찰되지 않았다는 경계를 유지한다. 요청 입력 부분은 기존 Mac 스타일의 제목 막대·세 색상 표시·밝은 본문·둥근 테두리로 통일한다. 문장·강조·앞뒤 관계는 보존하며 [공통 적용 범위](MAC_PROMPT_STYLE_AUDIT.md)를 따른다.
- **Demo / Case Connection:** README Build 안내에서 pinned build tools를 확인한 문서 Task. Agent 혼란 없음, Context 관련 실패 없음.
- **Beginner Payoff:** 정확한 정보라도 현재 Task와 관련 있는지 따져본다.
- **Advanced Payoff:** 무관한 Context의 존재와 실제로 관찰된 부정적 결과를 혼동하지 않는다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** 두 영역이 같은 AGENTS.md 안의 정보임을 짚고 이번 작업의 관련성을 구분한다. 혼란·실패 미관찰을 유지하며 S44에서 정보 제공과 실제 활용이 같은지 연구의 제한된 범위로 살핀다.
- **Transition:** “이번 기록에서는 혼란이 관찰되지 않았습니다. 그렇다면 정보가 입력에 있다는 것만으로 잘 활용됐다고 볼 수 있을까요?”
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Demo 2분 (CAPTURED) + Reflection 2분 = 4분
- **Evidence / Decision References:** BEAT-012, TRIAL-004, CLM-0014, CLM-0015, DEC-0049, DEC-0050; DEC-0179
- **Audience Footer:** 이 기록에서는 혼란·실패가 관찰되지 않음

#### S44 — 많이 담아도 같은 근거를 똑같이 쓰는가?

- **Slide ID:** S44
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
- **Speaker Intent:** Lost in the Middle의 과제·조건·제한된 관찰은 그대로 설명한다. 화면의 업무 질문을 받아 S45에서 내가 제공한 명세의 조건과 답의 결론을 대조하도록 연결한다. 연구가 이 확인 방식이나 현재 Codex를 검증한 것으로 확대하지 않는다.
- **Transition:** “내가 제공한 Context의 조건이 답에 반영됐는지는 어떻게 확인할까요?”
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Lecture 4분 = 4분
- **Evidence / Decision References:** BEAT-013, OQ-006, CLM-0014, SRC-0201, DEC-0052, DEC-0060
- **Audience Footer:** Lost in the Middle(2024) · 특정 연구 과제 결과 / 현재 Codex의 성능을 평가한 결과는 아님

#### S45 — 지침을 놓쳐도 답은 그럴듯할 수 있다

- **Slide ID:** S45
- **ACT:** ACT 2
- **Section:** 2E
- **Working Title:** 지침을 놓쳐도 답은 그럴듯할 수 있다
- **Primary Role:** S44의 정보 활용 주의를 지침 누락과 그럴듯한 오답에 대한 경계로 연결한다.
- **Audience Question:** “AI가 명세대로라고 말하면, 정말 지침을 다 지켰다고 볼 수 있을까?”
- **Core Message:** 지침을 놓친 그럴듯한 오답이 가능하므로, 답변의 확신 대신 제공한 지침과 근거를 대조한다.
- **Story Beat:** BEAT-013 — Long-context research supports a bounded caution
- **Curriculum Trace:** ACT 2 — bounded research caution → hypothetical omitted-condition warning → relevance classification.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** TEACHING MODEL — 기존 crop 명세로 지침 누락을 가정한 오답과 올바른 기준을 구성한다. 실제 Agent 응답·새 Trial·테스트 결과·모델 내부 원인·현재 Codex 실패율이나 지침 누락→할루시네이션 인과를 입증한 결과가 아니다. 지침 위반과 할루시네이션을 동의어로 쓰지 않으며 기존 연구·성능·Routing·토큰 주장 범위를 확대하지 않는다.
- **Visual Concept:** 왼쪽 명세/요청은 유지하고, 오른쪽에 “그럴듯한 오답 예시”와 “명세대로 해석했습니다”라는 단정을 둔다. 열2·3·4·5 중 제외해야 할5와 잘못된 폭4만 빨간색으로 강조하고 “놓친 조건: 끝 열 제외”를 표시한다. 아래에는 명세 기준 열2·3·4/폭3을 작게 대조한다. 하단은 그럴듯한 답도 지침·근거와 대조한다는 한 문장이다. 요청 입력 부분은 기존 Mac 스타일의 제목 막대·세 색상 표시·밝은 본문·둥근 테두리로 통일한다. 문장·강조·앞뒤 관계는 보존하며 [공통 적용 범위](MAC_PROMPT_STYLE_AUDIT.md)를 따른다.
- **Demo / Case Connection:** STATE-03 docs/image-contracts.md의 시작 포함·끝 제외 명세를 사용한 교육용 오답이다. 너비6/crop 2 5의 정답 기준은 열2·3·4/폭3이고, 화면의 열2·3·4·5/폭4는 의도적으로 잘못 구성했다. 실제 TRIAL-005A/B나 현재 제품 관찰이 아니다. 이전 코드·Trial·RepoQA 참고는 Notes에 보존한다.
- **Beginner Payoff:** 자연스러운 설명이나 명세 준수 단정 속에서도 빠진 조건을 직접 찾는다.
- **Advanced Payoff:** 지침 미반영·그럴듯한 거짓 주장·자기 보고·출력의 명세 위반·내부 원인 진단을 구분한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** S44의 제한된 정보 활용 연구를 받아, 지침과 모순되는 그럴듯한 오답을 교육용으로 대조한다. 실제 관찰·모델 내부 원인·단일 인과로 확대하지 않는다. 검증의 필요를 회수한 뒤 S46에서 관리할 정보의 관련 범위를 구분한다.
- **Transition:** “이런 근거를 작업에 맞게 관리하려면, 무엇이 공통이고 무엇이 작업마다 달라질까요?”
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Lecture 4분 = 4분
- **Evidence / Decision References:** BEAT-013, OQ-006, STATE-03 docs/image-contracts.md Crop, DEC-0052, DEC-0060, DEC-0061, DEC-0105, DEC-0123, DEC-0124; CLM-0014/SRC-0201 study scope retained; terminology reference: OpenAI Why language models hallucinate(2025-09-05), checked2026-11-02; prior code/Trial and RepoQA references remain in Notes; DEC-0125; DEC-0179
- **Audience Footer:** 없음 — M 연계 유지; 교육용 오답 예시는 본문 라벨로 구분

#### S46 — 작업이 달라도 필요한 정보는 같을까?

- **Slide ID:** S46
- **ACT:** ACT 2
- **Section:** 2E
- **Working Title:** 작업이 달라도 필요한 정보는 같을까?
- **Primary Role:** 작업에 공통인 정보와 각 작업에 필요한 정보를 분류한다. 파일 분리 결과를 먼저 보여주는 장으로 표현하지 않는다.
- **Audience Question:** “README 수정과 crop 조사에 공통인 정보와 서로 다른 정보는 무엇일까?”
- **Core Message:** 같은 프로젝트에서도 작업에 따라 필요한 정보가 다르다. 저장 위치를 정하기 전에 정보의 관련 범위를 구분한다.
- **Story Beat:** BEAT-012, BEAT-014
- **Curriculum Trace:** ACT 2 — Context growth, relevance, and research caveat.; ACT 2 — Separation, routing, and progressive disclosure.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** FROZEN — 기존99장의 Story·배정·Demo 범위를 보존한 현행115장 구조; TEACHING_MODEL; CONCEPTUAL. OpenAI의 공식 분류 체계로 표현하지 않는다.
- **Visual Concept:** 기존 README 수정/crop 조사 두 행과 공통 정보 영역을 유지한다. 오른쪽은 이번 작업에 필요한 정보라고 표시해 파일이나 문서의 분리 결과와 구분한다. 상단은 작업별 관련성, 하단 강조 질문은 공통 정보와 작업별 정보를 어디에 둘지 묻는다.
- **Demo / Case Connection:** S44/TRIAL-004에서 관찰한 관련성 구분을 회수한 교육용 비교다. STATE-02의 실제 내용과 기존 Trial 결과를 보존하며 두 새 작업의 실행 결과로 표현하지 않는다.
- **Beginner Payoff:** 모든 세부사항이 항상 필요한 것은 아님을 이해한다.
- **Advanced Payoff:** 정보의 공통/선택적 범위와 실제 읽기·활용 여부를 구분한다. 반복 절차 문제는 기존 S59/ACT3에 남긴다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** S45의 주의를 받아 정보의 관련 범위를 분류한다. 실제 파일 위치나 읽기 순서는 이 장에서 앞당기지 않고 S47의 문서 배치 기준으로 연결한다.
- **Transition:** “공통 정보와 작업별 정보는 어디에 둘까요?”
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Lecture 4분 = 4분
- **Evidence / Decision References:** BEAT-012, BEAT-014, STATE-02, CLM-0014, CLM-0015, CLM-0003, CLM-0005, DEC-0051, DEC-0060, DEC-0118; DEC-0125
- **Audience Footer:** 없음 — M 연계 표시는 유지

#### S47 — AGENTS.md에는 무엇을 남길까?

- **Slide ID:** S47
- **ACT:** ACT 2
- **Section:** 2F 시작 · 문서 배치 기준
- **Working Title:** AGENTS.md에는 무엇을 남길까?
- **Primary Role:** 공통 안내와 상세의 배치 기준을 제시한다.
- **Audience Question:** “무엇을 항상 읽고, 무엇을 필요할 때 찾게 할까?”
- **Core Message:** 여러 작업의 출발점이 되는 안내는 공통 위치에, 특정 질문의 깊은 명세는 관련 상세에 두고 참조 위치를 남긴다.
- **Story Beat:** BEAT-014 — Context separation follows scope and timing
- **Curriculum Trace:** ACT 2 — Separation, routing, and progressive disclosure; ACT 3 handoff.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** FROZEN — 기존99장의 Story·배정·Demo 범위를 보존한 현행115장 구조; FROZEN WITH SCOPE; TEACHING_MODEL; REQUIRES PRODUCT CHECK — 구체적 Windows·shell·IDE·hardware 지시를 추가하는 경우; CONCEPTUAL. 이 설계만으로 정보 검색 성능이 향상된다고 주장하지 않는다.
- **Visual Concept:** 정확한 최종 디렉터리 목록 대신 적용 범위·읽는 시점·유지할 내용이라는 같은 기준으로 기본 안내와 작업 상세를 비교한다. C++에서는 공통 빌드 진입점과 장비별 하드웨어 조건을 짧게 대조한다. DEC-0087: 상단에 공통 배지 “실무 적용 팁 · Context 관리”를 붙인다. 활용 목적 표시이며 기존 근거 유형·Claim Boundary는 유지한다. “C++에 적용하면” 보조 제목은 제거하며 두 적용 예시는 유지한다.
- **Demo / Case Connection:** STATE-03 구조를 설명하기 전 일반적인 Routing mental model을 보여준다.
- **Beginner Payoff:** 기본 안내와 상세 정보를 다른 역할로 볼 수 있다.
- **Advanced Payoff:** 항상 필요한 정보와 작업별 세부 정보의 위치를 설계한다.
- **C++ Vision Bridge:** 2H 통합 Bridge 1분. Core의 build/test entry와 Project 제약에서 알고리즘 계약·하드웨어 조건 같은 상세 정보로 이동하는 예를 든다.
- **Speaker Intent:** S46에서 나눈 정보 범위를 AGENTS.md의 공통 안내와 관련 상세의 문서 배치 기준으로 연결한다. 아직 실제 문서 재구성이나 읽기 결과를 보여주지 않는다. S48에서 같은 기준의 적용 전후를 확인한다.
- **Transition:** “이 배치 기준을 실제 프로젝트 문서에 적용하면 무엇이 달라질까요?”
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Lecture 4분 = 4분
- **Evidence / Decision References:** BEAT-014, STATE-03, CLM-0003, CLM-0005, CLM-0014, CLM-0015, DEC-0054, DEC-0060, DEC-0087; DEC-0186
- **Practical Tip Classification:** Context 관리
- **Audience Footer:** 명령·검증 기준도 기본 안내에 둘 수 있음

#### S48 — 정보를 지우지 않고 위치를 나누기

- **Slide ID:** S48
- **ACT:** ACT 2
- **Section:** 2F Scope·Routing
- **Working Title:** 정보를 지우지 않고 위치를 나누기
- **Primary Role:** 배치 기준을 적용한 실제 문서 재구성과 의미 보존을 보여준다.
- **Audience Question:** “정보를 나누면 무엇이 바뀌고, 무엇을 그대로 보존해야 할까?”
- **Core Message:** STATE-03은 세부 정보를 삭제하는 변화가 아니라 Scope에 맞는 위치로 옮기는 변화다.
- **Story Beat:** BEAT-014, BEAT-015 — Context separation and routing
- **Curriculum Trace:** ACT 2 — Separation, routing, and progressive disclosure; ACT 3 handoff.; ACT 2 — separation, routing, and progressive disclosure.
- **Evidence Type:** OBSERVED_PRODUCT / TEACHING_MODEL
- **Claim Status:** FROZEN — 기존99장의 Story·배정·Demo 범위를 보존한 현행115장 구조; FROZEN WITH SCOPE; TEACHING_MODEL; REQUIRES PRODUCT CHECK — 구체적 Windows·shell·IDE·hardware 지시를 추가하는 경우; STATE-03 파일 구조는 관찰된 상태다. Routing 효과는 교육용 패턴으로 한정하며 완벽한 검색을 주장하지 않는다.
- **Visual Concept:** 왼쪽 큰 AGENTS.md 안에 기본 안내와 A구조/CLI 요약·B이미지 명세·C테스트 구성을 함께 담고, 오른쪽은 기본 안내+문서 위치를 담은 AGENTS.md와 A/B/C 상세 문서3개로 분리한다. 같은 문자와 가로 화살표로 기존 주제의 위치를 대응시킨다. 하단은 핵심 정보 보존과 상세 위치 분리를 회수한다. 실제 문서 구조를 요약·재구성하며 재서술·상세화와 안내 추가가 포함됐음을 명시한다.
- **Demo / Case Connection:** STATE-02 → STATE-03의 실제 문서 구조. 내용 보존과 구조 변경을 구분한다.
- **Beginner Payoff:** 정보를 나누더라도 핵심 제약은 유지할 수 있음을 본다.
- **Advanced Payoff:** 중복과 의미 변경 없이 정보 출처를 정돈하는 기준을 본다.
- **C++ Vision Bridge:** 2H 통합 Bridge 2분. C++ 예시에서 Core 제약과 알고리즘·모듈·하드웨어 상세가 서로 다른 Scope일 수 있음을 연결한다.
- **Speaker Intent:** S47의 배치 기준을 실제 문서 전후에 적용해 A/B/C 핵심 정보 보존과 재서술·상세화 범위를 확인한다. Lecture0–1/Demo1–3/Case3–4/Lecture4–5로 Notes 운영을 일치시키고 S49 탐색 경로로 넘긴다.
- **Transition:** “이제 나눈 문서에서 crop 질문에 필요한 명세를 어떻게 찾아갈까요?”
- **Estimated Time:** 5분
- **Delivery Mode Allocation:** Lecture 2분 + Demo 2분 (CAPTURED) + Case 1분 = 5분
- **Evidence / Decision References:** BEAT-014, BEAT-015, STATE-02, STATE-03, CLM-0003, CLM-0005, CLM-0014, CLM-0015, DEC-0055, DEC-0060
- **Audience Footer:** 문서 구성 변경 · 성능·토큰 효과는 미측정

#### S49 — 분리한 문서에서 필요한 명세 찾기

- **Slide ID:** S49
- **ACT:** ACT 2
- **Section:** 2F · 탐색 경로
- **Working Title:** 분리한 문서에서 필요한 명세 찾기
- **Primary Role:** 실제 문서 재구성 후, 분리한 상세 명세로 가는 설계 경로를 설명하고 실제 접근 관찰로 넘긴다.
- **Audience Question:** “이 구조에서 crop 질문은 어떤 명세로 이어질까?”
- **Core Message:** 작업 질문에서 관련 상세 명세까지 도달할 위치를 기본 안내에서 찾게 설계한다.
- **Story Beat:** BEAT-014로 진입
- **Curriculum Trace:** ACT 2 — Separation, routing, and progressive disclosure; ACT 3 handoff.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** FROZEN — 기존99장의 Story·배정·Demo 범위를 보존한 현행115장 구조; TEACHING_MODEL; REQUIRES PRODUCT CHECK — 구체적 Windows·shell·IDE·hardware 지시를 추가하는 경우; CONCEPTUAL. Routing으로 성능 향상이나 Token 절약이 입증됐다고 주장하지 않는다.
- **Visual Concept:** S48에서 확인한 분리 구조를 바탕으로 요청→AGENTS.md 위치 안내→docs/image-contracts.md의 단일 경로를 보여준다. 분리 후의 활용임을 제목에 명시한다. 설계한 경로이며 실제 읽기 순서가 아니라는 표기를 유지하고 S50의 실제 관찰 질문으로 끝낸다. 요청 입력 부분은 기존 Mac 스타일의 제목 막대·세 색상 표시·밝은 본문·둥근 테두리로 통일한다. 문장·강조·앞뒤 관계는 보존하며 [공통 적용 범위](MAC_PROMPT_STYLE_AUDIT.md)를 따른다.
- **Demo / Case Connection:** S48에서 확인한 STATE-03 문서 구조를 바탕으로 관련 명세에 도달하는 경로를 설명한다. 실제 두 작업의 문서 접근 결과는 S50–S53에서 확인한다.
- **Beginner Payoff:** Project 안내와 Task별 상세 정보가 다른 역할을 할 수 있음을 본다.
- **Advanced Payoff:** 관련 문서로 연결하는 방식의 발견성·유지 비용을 다음 문제로 본다.
- **C++ Vision Bridge:** 작은 예 하나로 일반 Project 제약과 Task별 CMake 또는 알고리즘 계약을 구분한다. CMake·hardware 항목을 나열하지 않고 세부 Bridge는 다음 구간에 이어간다.
- **Speaker Intent:** S48의 실제 파일 분리를 회수한 뒤 이 구조에서 관련 상세에 도달하는 관계를 설명한다. 분리 기준이나 전후를 다시 강의하지 않으며, 실제 두 작업이 무엇을 읽었는지는 S50–S53에 남긴다.
- **Transition:** “이제 실제 두 작업에서는 어떤 문서를 읽고 답의 근거로 썼는지 관찰하겠습니다.”
- **Estimated Time:** 3분
- **Delivery Mode Allocation:** Lecture 3분 = 3분
- **Evidence / Decision References:** BEAT-014, STATE-03, CLM-0003, CLM-0005, CLM-0014, CLM-0015, DEC-0053, DEC-0060; DEC-0125; DEC-0179
- **Audience Footer:** 설계한 탐색 경로 · 실제 읽기 순서가 아님

#### S50 — 서로 다른 두 Task가 무엇을 읽을까?

- **Slide ID:** S50
- **ACT:** ACT 2
- **Section:** 2G Structured Context
- **Working Title:** 서로 다른 두 Task가 무엇을 읽을까?
- **Primary Role:** TRIAL-005A/B의 질문과 관찰 기준을 소개한다.
- **Audience Question:** “정답을 말하는 것과 실제 근거 접근을 확인하는 것은 어떻게 다를까?”
- **Core Message:** 관련 정보 접근을 확인하려면 Task별 실제 접근을 살펴봐야 한다.
- **Story Beat:** BEAT-015 → BEAT-016
- **Curriculum Trace:** ACT 2 — separation, routing, and progressive disclosure.
- **Evidence Type:** OBSERVED_PRODUCT
- **Claim Status:** FROZEN — 기존99장의 Story·배정·Demo 범위를 보존한 현행115장 구조; FROZEN WITH SCOPE; OBSERVED PRODUCT. 결과와 예상 경로를 미리 단정하지 않는다.
- **Visual Concept:** 동일한 프롬프트창2개에 TRIAL-005A/B의 실제 요청 핵심 발췌·번역을 나란히 둔다. A는 샘플 crop의 원본 열/출력 폭/끝 좌표와 현재 명세·구현 근거, B는 실행 의존성과 빌드/패키징 도구 구분을 묻는다. 파일 변경 금지·읽기 전용·근거 제시 조건은 각 입력창 안에 둔다. 아래는 실제 연 문서, 두 요청의 접근 공통/차이, 답을 뒷받침한 근거라는 관찰 질문3개만 표시한다. 특정 문서로 향하는 화살표·접근 목록·정답·성공 판정은 표시하지 않는다. 요청 입력 부분은 기존 Mac 스타일의 제목 막대·세 색상 표시·밝은 본문·둥근 테두리로 통일한다. 문장·강조·앞뒤 관계는 보존하며 [공통 적용 범위](MAC_PROMPT_STYLE_AUDIT.md)를 따른다.
- **Demo / Case Connection:** 두 read-only Trial prompt.
- **Beginner Payoff:** Task 질문에 따라 필요한 근거가 달라질 수 있음을 생각한다.
- **Advanced Payoff:** 문서 구조만이 아니라 실제 접근 경로를 평가한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** crop 반개구간 정답을 다시 푸는 퀴즈가 아니다. 같은 저장소에서 두 실제 읽기 전용 요청이 어떤 문서를 열고 무엇을 근거로 답했는지 관찰한다. 예상 파일·결과는 미리 공개하지 않고 S51(A), S52(B), S53(비교)로 이어간다.
- **Transition:** “먼저 요청 A에서 실제로 읽은 문서와 답변 근거를 확인합니다.”
- **Estimated Time:** 2분
- **Delivery Mode Allocation:** Lecture 2분 = 2분
- **Evidence / Decision References:** BEAT-015, BEAT-016, TRIAL-005A, TRIAL-005B, CLM-0003, CLM-0005, CLM-0014, CLM-0015, DEC-0056, DEC-0060; DEC-0179
- **Audience Footer:** 실제 요청 발췌

#### S51 — Crop Task에서 관찰한 접근

- **Slide ID:** S51
- **ACT:** ACT 2
- **Section:** 2G Structured Context
- **Working Title:** Crop Task에서 관찰한 접근
- **Primary Role:** TRIAL-005A의 문서 접근과 답을 요약한다.
- **Audience Question:** “Crop 명세를 묻는 Task에서 어떤 문서를 읽었고, 어떤 답을 얻었을까?”
- **Core Message:** TRIAL-005A의 최종 실행에서 image contract 문서 접근과 함께 정확한 crop 결과를 관찰했다.
- **Story Beat:** BEAT-016 — Relevant Context is disclosed for the task
- **Curriculum Trace:** ACT 2 — separation, routing, and progressive disclosure.
- **Evidence Type:** OBSERVED_PRODUCT
- **Claim Status:** FROZEN — 기존99장의 Story·배정·Demo 범위를 보존한 현행115장 구조; FROZEN WITH SCOPE; OBSERVED PRODUCT. 기록된 CLI 실행과 최종 반복 결과에 한정한다.
- **Visual Concept:** 요청 A의 `--crop 1 3` 질문을 회수한다. 최종 실행에서 읽은 Markdown 문서5개(`AGENTS.md`, `docs/architecture.md`, `docs/image-contracts.md`, `docs/testing.md`, `README.md`)를 접근 요약으로 나열하고 명세 문서를 강조한다. 해당 문서의 `[x_start, x_end)`와 원본 열0–3 중1·2 강조/출력 폭2/끝 좌표3 제외를 대조한다. 문서 목록은 읽기 순서가 아니며, 화살표는 문서 내용과 답의 대조 관계다. 하단에는 관찰된 사실 한 행만 둔다. 해석의 한계·최종 CLI footer는 화면에서 제거하고 Notes에 유지한다. testing.md의 연결 각주(*)도 제거한다.
- **Demo / Case Connection:** TRIAL-005A 최종 CLI 실행의 문서 접근과 답을 요약·재구성한다. 명세 외에 architecture·README·소스·관련 테스트도 확인했다. `testing.md`와 관련 테스트 접근은 최종 실행에서 관찰했고 이전 실행과 달랐다. 관련 문서 접근과 명세에 맞는 답을 관찰한 범위로 한정한다.
- **Beginner Payoff:** 결과 주장을 repository 근거와 연결해 본다.
- **Advanced Payoff:** 선택적 접근이 관찰됐어도 접근 범위가 완벽히 좁지는 않았음을 확인한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** crop 개념을 재강의하지 않고, 실제 연 문서·문서 명세·기록된 답을 구분한다. 열1·2/폭2/끝3제외는 명세와 답의 일치를 확인하는 예다. 전체 로그 낭독·읽기 순서·내부 인과성·최소 접근·효율 향상 주장을 피하고 다음 B의 근거와 답을 확인한다.
- **Transition:** “다른 질문인 실행 의존성 요청에서는 어떤 근거로 어떤 답을 얻었을까요?”
- **Estimated Time:** 5분
- **Delivery Mode Allocation:** Case 5분 = 5분
- **Evidence / Decision References:** BEAT-016, TRIAL-005A, CLM-0014, CLM-0015, DEC-0057, DEC-0060; DEC-0186
- **Audience Footer:** 없음 — 최종 실행 범위와 해석의 한계는 Notes에 보존

#### S52 — 의존성 질문은 설정과 소스로 답했다

- **Slide ID:** S52
- **ACT:** ACT 2
- **Section:** 2G Structured Context
- **Working Title:** 의존성 질문은 설정과 소스로 답했다
- **Primary Role:** TRIAL-005B의 실제 접근과 기록된 의존성 답변을 회수한다.
- **Audience Question:** “실행에 필요한 것과 빌드에만 쓰는 도구는 어떻게 구분했을까?”
- **Core Message:** TRIAL-005B는 설정·README·소스 등을 확인해 Python/표준 라이브러리 실행 조건과 별도 빌드 도구를 구분하고 third-party runtime dependency가 없다고 답했다.
- **Story Beat:** BEAT-016
- **Curriculum Trace:** ACT 2 — separation, routing, and progressive disclosure.
- **Evidence Type:** OBSERVED_PRODUCT
- **Claim Status:** FROZEN — 기존99장의 Story·배정·Demo 범위를 보존한 현행115장 구조; FROZEN WITH SCOPE; OBSERVED PRODUCT. 기록된 CLI 실행과 최종 반복 결과에 한정한다.
- **Visual Concept:** 왼쪽에 AGENTS.md/README/architecture 공통 안내와 pyproject.toml/setup.cfg/소스의 실제 확인을 묶는다. 오른쪽은 Python3.9+표준 라이브러리, third-party runtime 없음, setuptools/wheel 빌드 도구를 두 구역으로 구분한다. image-contracts/testing문서는 읽지 않았음을 비교의 연결로 남긴다. 요청 입력 부분은 기존 Mac 스타일의 제목 막대·세 색상 표시·밝은 본문·둥근 테두리로 통일한다. 문장·강조·앞뒤 관계는 보존하며 [공통 적용 범위](MAC_PROMPT_STYLE_AUDIT.md)를 따른다.
- **Demo / Case Connection:** TRIAL-005B 최종 읽기 전용 실행. third-party dependency 없음은 런타임 요구사항 자체가 없다는 뜻이 아니다. pip는 문서의 빌드 명령에 쓰였으며 runtime dependency로 바꾸지 않는다.
- **Beginner Payoff:** 결과 주장을 repository 근거와 연결해 본다.
- **Advanced Payoff:** 선택적 접근이 관찰됐어도 접근 범위가 완벽히 좁지는 않았음을 확인한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** S50의 B 요청을 화면에서 끝까지 회수한다. 기록된 답과 실제 확인한 설정·소스 범위를 연결하며 파일을 열었다는 사실과 내부 인과성을 구분한다. 새 실행/설치 검사로 표현하지 않는다.
- **Transition:** “이제 A와 B의 답이 아니라 실제 문서 접근 목록을 같은 기준으로 비교합니다.”
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Case 4분 = 4분
- **Evidence / Decision References:** BEAT-016, TRIAL-005B, STATE-03, CLM-0003, CLM-0005, DEC-0060; DEC-0179
- **Audience Footer:** 설정·소스에서 확인한 결과

#### S53 — 두 Task에서 상세 문서 접근이 달랐다

- **Slide ID:** S53
- **ACT:** ACT 2
- **Section:** 2G Structured Context
- **Working Title:** 두 Task에서 상세 문서 접근이 달랐다
- **Primary Role:** 앞에서 회수한 두 실제 답변의 문서 접근 차이와 해석 한계를 비교한다.
- **Audience Question:** “Task별 차이를 관찰한 것만으로 완벽한 Routing을 말할 수 있을까?”
- **Core Message:** Task에 따른 상세 문서 접근 차이는 관찰됐지만 perfect routing, token saving, 성능 향상은 입증되지 않았다.
- **Story Beat:** BEAT-016, BEAT-017
- **Curriculum Trace:** ACT 2 — separation, routing, and progressive disclosure.; ACT 2 — Context Engineering success and ACT 3 handoff.
- **Evidence Type:** OBSERVED_PRODUCT
- **Claim Status:** FROZEN — 기존99장의 Story·배정·Demo 범위를 보존한 현행115장 구조; FROZEN WITH SCOPE; OBSERVED PRODUCT. Routing의 보편적 우월성이나 성능 효과는 주장하지 않는다.
- **Visual Concept:** native 문서 접근 비교표의 두 열을 A·Crop 범위와 B·실행 의존성으로 표시한다. AGENTS.md·README.md·docs/architecture.md는 모두 읽음, docs/image-contracts.md·docs/testing.md는 A만 읽음, pyproject.toml·setup.cfg는 B만 읽음으로 비교한다. 차이가 있는 행의 실제 읽음 셀만 강조하고 미접근을 실패로 표시하지 않는다. 오른쪽에 관찰된 차이와 해석의 한계를 분리한다. testing.md의 최종 A 실행 범위·이전 실행과의 차이, 양쪽 소스 확인과 현재 Desktop 미검증을 표시한다.
- **Demo / Case Connection:** TRIAL-005A/B 최종 CLI 실행의 실제 접근을 요약·재구성한다. A는 이미지 명세·테스트 안내를, B는 pyproject.toml·setup.cfg를 읽었고 둘 다 AGENTS.md·구조 문서·README와 소스를 확인했다. B의 기록된 답은 third-party runtime dependency 없음이며 Python/표준 라이브러리와 build/package 도구를 구분했다. 현재 제품에서 다시 실행한 결과가 아니다.
- **Beginner Payoff:** Context가 Task에 맞게 선택되는지 확인해야 함을 안다.
- **Advanced Payoff:** 일부 선택적 접근과 넓은 접근, 실행 간 변동을 함께 해석한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** S51·46에서 각각 답까지 확인했으므로 여기서는 공통3문서와 달랐던 상세/설정4행을 비교한다. 전체 파일을 다시 설명하지 않는다. Reflection2/Q&A1은 “이 표가 입증한 것과 아직 모르는 것”만 다룬다. 다음에는 Context 정리 성과를 회수한다.
- **Transition:** “이 관찰을 포함해, Context를 정리하며 실제로 확인한 성과를 정리하겠습니다.”
- **Estimated Time:** 7분
- **Delivery Mode Allocation:** Demo 1분 (CAPTURED) + Case 3분 + Reflection 2분 + Q&A 1분 = 7분
- **Evidence / Decision References:** BEAT-016, BEAT-017, TRIAL-005A, TRIAL-005B, CLM-0014, CLM-0015, CLM-0003, CLM-0005, DEC-0058, DEC-0060
- **Audience Footer:** 최종 실행 기록 비교 · testing.md는 A의 최종 실행에서 관찰

#### S54 — 정보를 남기고, 작업에서 활용했는지 확인했다

- **Slide ID:** S54
- **ACT:** ACT 2
- **Section:** 2I Discussion·Transition
- **Working Title:** 정보를 남기고, 작업에서 활용했는지 확인했다
- **Primary Role:** Context Engineering의 성과와 근거 범위를 회수한다.
- **Audience Question:** “무엇을 남겼고, 작업에서 어떻게 참고됐는지 무엇으로 확인했을까?”
- **Core Message:** 공통 정보의 기록, 지침 활용, 핵심 정보를 보존한 재구성, Task별 상세 접근 차이는 각각의 보존된 근거로 확인했다. 일반적 효율 향상은 측정하지 않았다.
- **Story Beat:** BEAT-009–017
- **Curriculum Trace:** ACT 2 — observed context organization and bounded success recap.
- **Evidence Type:** OBSERVED_PRODUCT / TEACHING_MODEL
- **Claim Status:** FROZEN WITH SCOPE — 개별 State/Trial 관찰과 교육용 성과 정리를 구분한다. 일반적 효율·정확도 개선이나 단독 인과성을 주장하지 않는다.
- **Visual Concept:** 2×2의 네 native 그림: 반복 안내→AGENTS.md, 테스트 지침→Agent→실행창, 한 문서→기본 안내/구조·명세·테스트 문서, crop/의존성 질문→공통 안내/서로 다른 상세. 각 그림은 짧은 설명 한 줄을 사용하고 네 그림 사이의 화살표는 없앤다. STATE/TRIAL은 화면에서 제거하고 Notes에 보존한다. 정확한 실행 화면·시간순 로그·완벽한 선택 모형으로 표현하지 않는다.
- **Demo / Case Connection:** STATE-01, TRIAL-003, STATE-02→03, TRIAL-005A/B의 bounded callback. 새 Demo 시간이나 Trial이 아니다.
- **Beginner Payoff:** Context 작업으로 실제 무엇을 했는지 네 가지로 기억한다.
- **Advanced Payoff:** 구조/행동/효과 측정을 다른 수준의 주장으로 구분한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** S53의 개별 비교를 받아 좌상/우상/좌하/우하를 각30초로 회수한다. 지침 활용은 보존된 관찰, 문서 분리는 핵심 정보 보존, 상세 접근은 두 요청의 차이로 한정한다. 하단 질문으로 Reflection1분을 유지하고 기존 S55 적용 팁으로 연결한다.
- **Transition:** “우리 프로젝트에서는 AGENTS.md를 어디에 두고, 어느 범위의 지침을 확인할까요?” S55–S56의 적용 팁을 거친 뒤 S57의 기존 수행 방법 질문으로 돌아간다.
- **Estimated Time:** 3분
- **Delivery Mode Allocation:** Lecture 2분 + Reflection 1분 = 3분
- **Evidence / Decision References:** BEAT-009, BEAT-010, BEAT-014, BEAT-016, BEAT-017, STATE-01, STATE-02, STATE-03, TRIAL-003, TRIAL-005A, TRIAL-005B, DEC-0060, DEC-0126
- **Audience Footer:** 없음 — M 연계 표시는 유지

#### S55 — AGENTS.md는 어디에 둘까?

- **Slide ID:** S55
- **ACT:** ACT 2
- **Section:** 2I Discussion·Transition
- **Working Title:** AGENTS.md는 어디에 둘까?
- **Primary Role:** 폴더 위치별 지침 범위를 시각적으로 구분한다.
- **Audience Question:** “공통 규칙과 특정 모듈 규칙을 어디에 둘까?”
- **Core Message:** 개인 기본값과 프로젝트 공통 규칙, 모듈별 지침을 구분해 두고 현재 작업에 해당하는 범위를 확인한다.
- **Story Beat:** BEAT-017
- **Curriculum Trace:** ACT 2 / Context organization recap → practical scoped guidance → repeated workflow problem.
- **Evidence Type:** RESEARCH / TEACHING_MODEL
- **Claim Status:** TEACHING MODEL / REQUIRES PRODUCT CHECK — 공식 안내 기반 프로젝트 적용 예. 실제 파일 생성·Codex 실행·새 Trial 관찰이 아니다. 지침 적용 범위와 시작 시 수집 경로를 구분하며, 파일 존재·Agent 자기보고만으로 읽기/준수 완료를 입증하지 않는다. 지침은 권한·CI 강제 수단이 아니다.
- **Visual Concept:** 개인 기본값 띠 아래 inspection/AGENTS.md에서 src/vision/AGENTS.md와 src/device/AGENTS.md로 갈라지는 폴더 트리. crop.cpp가 속한 vision 경로를 강조하고 device 형제 경로는 회색으로 둔다.
- **Demo / Case Connection:** N/A — 공식 안내 기반 정적 적용 예. 기존 State/Trial의 새로운 관찰이 아니다.
- **Beginner Payoff:** 루트의 공통 규칙과 작업 폴더에만 필요한 규칙을 구분한다.
- **Advanced Payoff:** 규칙의 논리적 범위와 런타임 수집 여부를 혼동하지 않고 다음 장에서 병합 관계를 본다.
- **C++ Vision Bridge:** 가상 C++ 검사 프로젝트 inspection/src/vision/crop.cpp. 실제 graypipe 구현/실험 이력과 구분한다.
- **Speaker Intent:** 한 장의 핵심 질문만 짚는다. 1. (0–1분) S54는 실제 Demo의 Context 정리 회수였다. 여기부터 공식 지침을 적용한 별도 검사 프로젝트 예다. 개인 기본값의 언어/Git 규칙을 가리킨다. 2. (1–2분) 루트 공통 API 보존과 vision의 ROI 명세를 폴더 위치에 연결한다. device의 하드웨어 연동 규칙은 형제 모듈 규칙이다. 3. (2–3분) crop.cpp가 속한 가지를 짚는다. 이 그림은 적용 범위를 설명하며 전체 하위 파일의 자동 로드를 뜻하지 않는다. 다음은 공통·전용 규칙의 결합이다.
- **Transition:** “crop.cpp를 수정할 때, 공통 지침과 vision 지침은 어떻게 함께 적용될까요?” S56로 이어간다.
- **Estimated Time:** 3분
- **Delivery Mode Allocation:** Lecture 3분 = 3분
- **Evidence / Decision References:** DEC-0104; OpenAI AGENTS.md official guide; OpenAI Projects and chats, checked2026-10-26. Existing BEAT-017 preserved.; DEC-0188
- **Practical Tip Classification:** Context 관리
- **Audience Footer:** 프로젝트 적용 예시

#### S56 — 공통 지침에 모듈 지침을 더한다

- **Slide ID:** S56
- **ACT:** ACT 2
- **Section:** 2I Discussion·Transition
- **Working Title:** 공통 지침에 모듈 지침을 더한다
- **Primary Role:** 부모 규칙 유지와 충돌하는 기본값 우선순위를 구분한다.
- **Audience Question:** “모듈 지침이 있으면 루트 지침은 없어질까?”
- **Core Message:** 공통 지침을 유지하면서 모듈 전용 지침을 더한다. 충돌하는 기본값은 더 가까운 지침을 우선한다.
- **Story Beat:** BEAT-017
- **Curriculum Trace:** ACT 2 / Context organization recap → practical scoped guidance → repeated workflow problem.
- **Evidence Type:** RESEARCH / TEACHING_MODEL
- **Claim Status:** TEACHING MODEL / REQUIRES PRODUCT CHECK — 공식 안내 기반 프로젝트 적용 예. 실제 파일 생성·Codex 실행·새 Trial 관찰이 아니다. 지침 적용 범위와 시작 시 수집 경로를 구분하며, 파일 존재·Agent 자기보고만으로 읽기/준수 완료를 입증하지 않는다. 지침은 권한·CI 강제 수단이 아니다.
- **Visual Concept:** 루트 공통 지침 + vision 전용 지침 → 함께 적용할 목록. 공개 API 보존은 남고 기본 검증 진입점 ctest는 모듈 기본값 ctest -L vision으로 구체화한다. 필수 전체 회귀 테스트를 생략하라는 예시가 아니다.
- **Demo / Case Connection:** N/A — 공식 안내 기반 정적 적용 예. 기존 State/Trial의 새로운 관찰이 아니다.
- **Beginner Payoff:** 모듈 규칙을 추가해도 공통 제약이 남는다는 점을 이해한다.
- **Advanced Payoff:** 상속과 충돌 해결을 구별하고 검증 진입점 기본값과 필수 검증 의무를 혼동하지 않는다.
- **C++ Vision Bridge:** 가상 C++ 검사 프로젝트 inspection/src/vision/crop.cpp. 실제 graypipe 구현/실험 이력과 구분한다.
- **Speaker Intent:** 한 장의 핵심 질문만 짚는다. 1. (0–1분) 수정 대상은 같은 src/vision/crop.cpp다. 루트의 공개 API 유지와 기본 검증 진입점을 읽는다. 2. (1–2분) vision의 ROI 명세와 전용 검증 진입점을 더한다. 결합한 목록에서 공개 API 유지가 사라지지 않았음을 확인한다. 3. (2–3분) 충돌하는 기본값만 더 가까운 지침을 우선한다. ctest 예시는 기본 진입점 선택이며, 의무적인 전체 회귀 검사를 생략하거나 상위 승인·권한을 우회하는 규칙이 아니다. 다음 장에서 실제 수집을 따로 확인한다.
- **Transition:** “공통 규칙과 모듈 규칙을 배치했습니다. 이제 프로젝트 기준과 반복되는 작업 절차의 역할을 나눠 보겠습니다.”라고 S57로 이동한다.
- **Estimated Time:** 3분
- **Delivery Mode Allocation:** Lecture 3분 = 3분
- **Evidence / Decision References:** DEC-0104; OpenAI AGENTS.md official guide; OpenAI Projects and chats, checked2026-10-26. Existing BEAT-017 preserved.; DEC-0188
- **Practical Tip Classification:** Context 관리
- **Audience Footer:** 프로젝트 적용 예시

#### S57 — 프로젝트 기준과 작업 절차는 역할이 다르다

- **Slide ID:** S57
- **ACT:** ACT 2
- **Section:** 2I Discussion·Transition
- **Working Title:** 프로젝트 기준과 작업 절차는 역할이 다르다
- **Primary Role:** Context Engineering을 정리하고 Harness Engineering으로 전환한다.
- **Audience Question:** “같은 성능 조사 작업에서, 참고할 프로젝트 기준과 진행할 작업 순서는 어떻게 다를까요?”
- **Core Message:** 하나의 성능 조사에서 Project Context는 참고할 기준·안내, Workflow는 진행할 수행 방법이다. AGENTS.md의 공통 안내와 SKILL.md 후보의 재사용 절차를 역할로 구분한다. 파일 내용의 배타적 분류가 아니다. 기존 Task 목표/Context/Routing 구분과 반복 절차 문제를 유지한다.
- **Story Beat:** BEAT-017 → BEAT-018; TRANS-005
- **Curriculum Trace:** ACT 2 — Context Engineering success and ACT 3 handoff.; ACT 3 — Context → Harness problem and bottom-up framing.
- **Evidence Type:** OBSERVED_PRODUCT / TEACHING_MODEL
- **Claim Status:** FROZEN — 기존99장의 Story·배정·Demo 범위를 보존한 현행115장 구조; TEACHING_MODEL; Context 정리는 ACT 2의 주제이며, 다음 절차 반복 예시는 ACT 3의 질문이다. Trial Prompt만으로 전체 절차의 원인을 귀속하지 않는다.
- **Visual Concept:** 상단 normalize 성능 조사 요청 아래, 왼쪽은 기존 이미지 명세·테스트 명령 위치·측정 기준을 담은 AGENTS.md 문서, 오른쪽은 변경 전 측정→조사·계획·변경 판단→테스트·동일 조건 비교의3단계 레일이다. 아래에 기본 안내/재사용할 SKILL.md 후보를 표시한다. 문서와 레일을 대체 관계로 연결하지 않으며 하단에서 다음 요청에도 절차를 매번 적을지 묻는다. 요청 입력 부분은 기존 Mac 스타일의 제목 막대·세 색상 표시·밝은 본문·둥근 테두리로 통일한다. 문장·강조·앞뒤 관계는 보존하며 [공통 적용 범위](MAC_PROMPT_STYLE_AUDIT.md)를 따른다.
- **Demo / Case Connection:** S53의 관찰된 접근 차이와 미입증 경계를 회수한 뒤, 정보를 어디서 찾을지 나눈 것과 작업 방법을 매번 요청하는 문제를 구분한다. 다음 성능 작업의 공통 절차를 교육용 도식으로 압축하고 S59에서 TRIAL-006/007 기록을 더 살펴본다. 이 장의 Discussion은 실습이나 새 Demo가 아니다.
- **Beginner Payoff:** Project 정보를 잘 주는 것과 작업 방법을 정하는 것이 다른 문제임을 이해한다.
- **Advanced Payoff:** Context와 workflow의 역할을 구분하고 다음 설계 문제를 찾는다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** 앞의 두 팁에서 공통/모듈 지침을 배치한 내용을 받아 같은 작업의 기준과 순서를 대비한다. SKILL.md는 후보로만 예고하고 S59 실제 반복 기록, S60 실행 시점/판단, S61 목표·기준·방법 결합, S62 선택 이유를 앞당기지 않는다. Transition4 뒤 Q&A6과 마지막20초 전환을 유지한다.
- **Transition:** “우리 팀은 어떤 절차를 매번 다시 요청합니까? 다음에는 두 성능 Task의 실제 요청 기록에서 반복된 지시를 확인합니다.” 기존 연결 질문을 유지한 채 ACT 3 제목 S58를 거쳐 S59의 첫 문제로 이어간다. 제목의 Transition1분은 다음 ACT에 별도로 배정한다.
- **Estimated Time:** 10분
- **Delivery Mode Allocation:** Transition 4분 + Q&A 6분 = 10분
- **Evidence / Decision References:** BEAT-017, BEAT-018, TRANS-005, TRIAL-006, TRIAL-007, CLM-0003, CLM-0005, CLM-0014, CLM-0006, CLM-0029, CLM-0030, DEC-0059, DEC-0060, DEC-0127; OpenAI AGENTS.md / Build skills official guides, checked2026-11-02; DEC-0179; DEC-0188
- **Audience Footer:** 역할에 따른 배치 예 · AGENTS.md에도 절차를 둘 수 있음

### ACT 3 — 18 slides / 64 minutes

#### S58 — AI가 일할 방법과 환경 설계하기

- **Slide ID:** S58
- **ACT:** ACT 3
- **Section:** 3A Repeated Procedure
- **Working Title:** AI가 일할 방법과 환경 설계하기
- **Primary Role:** ACT의 제목과 설계 관점을 안내하고 기존 첫 문제 장으로 넘긴다. 새 기법·성과·기능 정의를 설명하는 장이 아니다.
- **Audience Question:** “이번 ACT에서는 어떤 관점으로 다음 문제를 살펴볼까?”
- **Core Message:** AI가 일할 방법과 환경 설계하기 — Harness Engineering · 수행 체계 설계
- **Story Beat:** BEAT-018, BEAT-020
- **Curriculum Trace:** ACT 3의 승인된 주제를 안내하는 표지다. 기존 Curriculum Section/Beat를 재사용한다.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** TEACHING MODEL — ACT 주제 안내이며 새 제품 기능·Trial·성과·현재 제품 지원을 주장하지 않는다.
- **Visual Concept:** T12-A ACT Title. 기존 밝은 배경·teal/ink/sub 색·글꼴을 사용한다. ACT 번호, 두 줄의 큰 한글 제목, 작은 승인 부제, 현재 Slide ID와 조용한 과정 표기만 둔다. 사진·결과·기능 목록은 추가하지 않는다.
- **Demo / Case Connection:** N/A — 기존 ACT의 사례를 소개하기 전 주제만 안내한다. Demo 시간을 추가하지 않는다.
- **Beginner Payoff:** 지금부터 살펴볼 주제와 앞 구간과의 경계를 알아본다.
- **Advanced Payoff:** 해당 ACT가 다루는 설계 책임의 범위를 짧게 확인한다.
- **C++ Vision Bridge:** N/A — 기존 본문에 있는 C++ 연결을 유지한다.
- **Speaker Intent:** 승인된 제목·부제를 가리키며 ACT의 방향만 안내한다. 용어 정의·모든 도구의 도입·성과 예고로 확장하지 않고 기존 첫 문제를 연다.
- **Transition:** “이제 이 관점에서 첫 문제를 보겠습니다.”라고 S59 — 두 실제 요청에 같은 절차가 반복됐다로 이어간다.
- **Estimated Time:** 1분
- **Delivery Mode Allocation:** Transition 1분 = 1분
- **Evidence / Decision References:** DEC-0090; existing ACT/Story focus; no new evidence
- **ACT Subtitle:** Harness Engineering · 수행 체계 설계
- **Audience Footer:** 기존 ACT 제목 표기 유지

#### S59 — 두 실제 요청에 같은 절차가 반복됐다

- **Slide ID:** S59
- **ACT:** ACT 3
- **Section:** 3A Repeated Procedure
- **Working Title:** 두 실제 요청에 같은 절차가 반복됐다
- **Primary Role:** ACT2의 남은 질문을 보존된 실제 두 요청으로 확인하고 작업 방법·환경 설계라는 방향을 안내한다.
- **Audience Question:** “목표가 달라도 왜 같은 작업 방법을 다시 요청할까?”
- **Core Message:** 서로 다른 두 성능 요청의 조사·계획·변경·검증 지시가 반복됐다. ACT3에서는 이 방법과 실행·검증 환경을 유지하는 문제를 다룬다.
- **Story Beat:** BEAT-018, BEAT-020
- **Curriculum Trace:** ACT 3 — Context → Harness problem and bottom-up framing.; ACT 3 — observed workflow and repository-owned Performance Skill.
- **Evidence Type:** OBSERVED_PRODUCT
- **Claim Status:** FROZEN — 기존99장의 Story·배정·Demo 범위를 보존한 현행115장 구조; FROZEN WITH SCOPE; PARTIAL attribution. 두 Trial의 절차 반복은 관찰됐지만 Prompt만의 효과로 귀속할 수 없다.
- **Visual Concept:** 기존 기능 삽화와 실제 요청 발췌/보존 요약의 세 행 대응을 유지한다. 상단에 Harness의 짧은 방향 안내만 추가하고 완성 구조는 후반에 둔다. 요청 입력 부분은 기존 Mac 스타일의 제목 막대·세 색상 표시·밝은 본문·둥근 테두리로 통일한다. 문장·강조·앞뒤 관계는 보존하며 [공통 적용 범위](MAC_PROMPT_STYLE_AUDIT.md)를 따른다.
- **Demo / Case Connection:** 각 Trial의 결과는 해당 코드·입력·환경에 한정한다. 성능 수치를 일반화하지 않는다.
- **Beginner Payoff:** 작업 방법도 반복되는 요소가 될 수 있음을 본다.
- **Advanced Payoff:** Task 목표와 재사용 가능한 절차의 경계를 찾는다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** ACT2의 남은 질문을 보존된 실제 두 요청으로 확인하고 작업 방법·환경 설계라는 방향을 안내한다. 기존 기획과 근거 범위를 유지하고 실제 기록·가정·운영 모델을 구분한다.
- **Transition:** “반복된 것은 명령 하나뿐일까요? 그 명령을 언제 쓰고 결과로 무엇을 판단할지도 보겠습니다.”
- **Estimated Time:** 5분
- **Delivery Mode Allocation:** Case 5분 = 5분
- **Evidence / Decision References:** BEAT-018, BEAT-020, TRIAL-006, CLM-0006, CLM-0029, CLM-0030, TRIAL-007, DEC-0017, DEC-0060, DEC-0062; DEC-0179
- **Audience Footer:** 없음 — 상세 출처·발췌/요약 구분은 Notes에 보존

#### S60 — 테스트 명령을 언제 쓰고 무엇을 판단할까?

- **Slide ID:** S60
- **ACT:** ACT 3
- **Section:** 3A Repeated Procedure
- **Working Title:** 테스트 명령을 언제 쓰고 무엇을 판단할까?
- **Primary Role:** 명령을 아는 것에서 사용 시점과 결과 판단을 함께 정하는 것으로 연결한다.
- **Audience Question:** “같은 테스트 명령을 변경 전과 변경 후에 실행하면 각각 무엇을 확인할까?”
- **Core Message:** 테스트 명령·명세·측정 방법을 작업의 어느 시점에 사용하고, 그 결과로 무엇을 판단할지 함께 정한다. 이 수행 방법도 AGENTS.md에 기록할 수 있다.
- **Story Beat:** BEAT-019 — Knowledge and Process answer different questions
- **Curriculum Trace:** ACT 3 — Context → Harness problem; repeated workflow.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** FROZEN — 기존99장의 Story·배정·Demo 범위를 보존한 현행115장 구조; TEACHING_MODEL; CONCEPTUAL.
- **Visual Concept:** 상단 AGENTS.md 정보 묶음에서 변경 전·변경 후·완료 판단으로 연결한다. 동일한 테스트 실행 표시를 앞의 두 시점에 재사용하고 확인 질문을 다르게 둔다. 실제 실행 결과는 표시하지 않는다. DEC-0087: 상단에 공통 배지 “실무 적용 팁 · 수행 방법”를 붙인다. 활용 목적 표시이며 기존 근거 유형·Claim Boundary는 유지한다.
- **Demo / Case Connection:** TRIAL-006/007의 절차 반복을 연결하되, 새 제품 기능이나 해결책은 아직 공개하지 않는다.
- **Beginner Payoff:** 같은 테스트를 실행해도 현재 상태 확인과 변경 영향 확인이라는 목적이 다를 수 있음을 이해한다.
- **Advanced Payoff:** 명령·명세를 참조하는 것에 더해 적용 시점과 결과 판단을 재사용할 수행 방법으로 명시한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** S59의 반복 요청에서 실행 시점과 판단 기준을 꺼내 구체화한 뒤 S61의 목표·기준·수행 방법 결합으로 연결한다. 저장 파일의 배타적 분류로 설명하지 않는다.
- **Transition:** “지금 본 수행 방법을 이번 요청의 목표, 프로젝트 기준과 함께 놓아 보겠습니다.”
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Lecture 4분 = 4분
- **Evidence / Decision References:** BEAT-019, TRIAL-006, TRIAL-007, CLM-0006, CLM-0029, DEC-0060, DEC-0062, DEC-0063, DEC-0087, DEC-0089
- **Practical Tip Classification:** 수행 방법
- **Audience Footer:** 수행 방법 예시 · AGENTS.md에 기록할 수도 있음

#### S61 — 목표·기준·방법을 한 작업에 적용한다

- **Slide ID:** S61
- **ACT:** ACT 3
- **Section:** 3B Context vs Workflow
- **Working Title:** 목표·기준·방법을 한 작업에 적용한다
- **Primary Role:** 이번 목표가 프로젝트 기준으로 둘러싼 작업에 들어오고 재사용할 방법을 그 작업에 적용하는 관계를 보여준다.
- **Audience Question:** “이번 목표를 향해 작업할 때, 무엇을 지키고 어떤 방법으로 진행할까?”
- **Core Message:** normalize 성능 조사라는 이번 목표를, 기존 이미지 동작·공개 명세를 보존하는 범위에서, 재사용할 측정·조사·검증·비교 방법을 적용해 수행한다.
- **Story Beat:** BEAT-019
- **Curriculum Trace:** ACT 3 — Context → Harness problem; repeated workflow.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** FROZEN — 기존99장의 Story·배정·Demo 범위를 보존한 현행115장 구조; TEACHING_MODEL; CONCEPTUAL.
- **Visual Concept:** 같은 크기의 세 영역에 REQUEST(이번 목표/Mac 요청창), CONTEXT(AGENTS.md의 기존 동작·명세 보존), WORKFLOW(재사용할 측정·조사·검증·비교 방법)를 분리한다. 각 입력의 같은 굵기 아래 화살표가 하나의 normalize 조사·변경 판단 영역으로 모인다. 순차 파이프라인이 아니라 병렬 역할의 동시 적용이다. 아래에서 다음 작업에도 필요할 수행 방법의 위치를 묻는다.
- **Demo / Case Connection:** TRIAL-006/007의 반복 절차를 개념 예로 연결한다.
- **Beginner Payoff:** 목표는 할 일, 프로젝트 기준은 지킬 범위, 수행 방법은 그 범위 안에서 일하는 방식임을 한 작업에서 이해한다.
- **Advanced Payoff:** 목표 달성과 동작 보존, 수행 방법의 적용은 함께 필요하며 저장 위치의 배타적 분류가 아님을 본다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** S60의 수행 방법을 이번 요청·프로젝트 기준과 함께 적용하는 장이다. 영어 역할명과 한국어 책임을 같은 크기의 세 영역에 고정하고 하나의 작업으로 모아, 분류 강의나 실제 실행으로 오해하지 않게 한다. 다음 S62에서 재사용 위치를 선택한다.
- **Transition:** “같은 수행 방법이 다음 작업에도 필요하다면, 어디에서 함께 유지할까요?”
- **Estimated Time:** 5분
- **Delivery Mode Allocation:** Lecture 5분 = 5분
- **Evidence / Decision References:** BEAT-019, TRIAL-006, TRIAL-007, CLM-0006, CLM-0029, DEC-0062, DEC-0063, DEC-0064; DEC-0179; DEC-0188
- **Audience Footer:** 없음 — M 연계 표시는 유지

#### S62 — 같은 Skill도 필요한 작업에만 쓴다

- **Slide ID:** S62
- **ACT:** ACT 3
- **Section:** 3C Reusable Skill 시작
- **Working Title:** 같은 Skill도 필요한 작업에만 쓴다
- **Primary Role:** 같은 성능 조사 Skill을 A/B에 재사용하고 C에는 쓰지 않는 비교로, 특정 작업에 선택해 쓸 수행 방법이라는 이유를 보여준다.
- **Audience Question:** “같은 프로젝트에서 작업한다고, 모든 요청에 같은 성능 조사 Skill이 필요할까?”
- **Core Message:** AGENTS.md의 공통 지침은 세 작업 모두 참고한다. 요청별 목표·허용 범위·보존 조건은 각각 정하고, 반복되는 성능 조사 방법은 Skill 한 곳에서 관리해 A/B에 연결한다. README 영어 수정 C에는 그 성능 조사 방법이 필요하지 않다.
- **Story Beat:** BEAT-020 → BEAT-021; DEC-0017
- **Curriculum Trace:** ACT 3 — observed workflow and repository-owned Performance Skill.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** FROZEN — 기존99장의 Story·배정·Demo 범위를 보존한 현행115장 구조; TEACHING_MODEL; REQUIRES PRODUCT CHECK — 대상 Skills 표면·계정·호출 경로; DEC-0017은 ACCEPTED. 현재 교육 환경에서의 Product availability는 `REQUIRES PRODUCT CHECK`. Skill discovery/invocation Trial 결과는 다음 구간에 둔다.
- **Visual Concept:** 왼쪽 A resize_nearest, B normalize 성능 조사 요청은 오른쪽 성능 조사 Skill 한 개에 같은3px 선/화살촉으로 연결한다. 아래 C README 영어 수정 요청에는 연결선을 두지 않고 “이 성능 조사 Skill은 사용하지 않음”을 표시한다. 상단은 세 작업 모두 공통 지침을 참고함을, 하단은 필요한 작업에만 방법을 연결함을 회수한다. 실제 호출/미호출 관찰 도식이 아니다. 요청 입력 부분은 기존 Mac 스타일의 제목 막대·세 색상 표시·밝은 본문·둥근 테두리로 통일한다. 문장·강조·앞뒤 관계는 보존하며 [공통 적용 범위](MAC_PROMPT_STYLE_AUDIT.md)를 따른다.
- **Demo / Case Connection:** DEC-0017의 프로젝트 소유 성능 조사 Skill 선택 이유를 설명한다. A/B는 기존 성능 Task의 교육용 요약, C는 사용자 제안 비교 요청이다. 성공 결과·Skill 전문·새 Trial을 제시하지 않는다.
- **Beginner Payoff:** 같은 프로젝트의 공통 기준은 유지하면서 작업 종류에 필요한 수행 방법만 선택한다는 점을 A/B와 C에서 이해한다.
- **Advanced Payoff:** 공동 관리만으로 AGENTS.md와 Skill을 구분하지 않고 적용 범위와 재사용 단위로 선택한다. 절차를 AGENTS.md에 둘 수도 있으며 실제 선택·호출·수행 근거는 별도로 확인한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** S61의 다음 작업 질문을 받아 공통 지침과 A/B의 같은 방법을 짚고 C의 미연결로 적용 범위를 드러낸다. 절차의 세부를 재강의하지 않고 매번 재작성하는 문제와 필요한 작업에 선택하는 이유를 연결한다. 실제 호출 근거는 다음 S63에서 확인한다.
- **Transition:** “먼저 당시 CLI 기록에서 재사용할 Skill을 어떻게 찾았는지 보겠습니다.”
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Lecture 4분 = 4분
- **Evidence / Decision References:** BEAT-020, BEAT-021, DEC-0017, TRIAL-006, TRIAL-007, TRIAL-008, OQ-005, DEC-0062, DEC-0064, DEC-0065, DEC-0066, DEC-0128, DEC-0130; DEC-0179
- **Audience Footer:** 작업별 Skill 선택을 보여주는 설계 예

#### S63 — 사용할 Skill을 목록에서 찾는다

- **Slide ID:** S63
- **ACT:** ACT 3
- **Section:** 3C Reusable Skill
- **Working Title:** 사용할 Skill을 목록에서 찾는다
- **Primary Role:** 필요한 성능 조사 Skill을 목록에서 확인한 실제 발견 근거를 한 장면으로 설명한다.
- **Audience Question:** “이번 성능 조사에 재사용할 방법을 어디서 찾았을까요?”
- **Core Message:** 밝기 통계 계산의 성능 조사에 재사용할 graypipe-performance를 당시 CLI의 /skills 목록에서 이름과 설명 일부로 확인했다. 목록 발견과 실제 요청 지정은 구분한다.
- **Story Beat:** BEAT-021 — Repository Skill의 발견과 호출
- **Curriculum Trace:** ACT 3 — observed workflow and repository-owned Performance Skill.
- **Evidence Type:** OBSERVED_PRODUCT / TEACHING_MODEL / RESEARCH
- **Claim Status:** FROZEN — 기존99장의 Story·배정·Demo 범위를 보존한 현행115장 구조; FROZEN WITH SCOPE; REQUIRES PRODUCT CHECK — 대상 Skills 표면·계정·호출 경로; Codex CLI 0.154.0에서 관찰. Desktop 동작과 암묵적 호출은 검증하지 않음. 현재 제품 표면의 상태는 **REQUIRES PRODUCT CHECK**. DEC-0186: /skill은 입력 중인 문자열의 교육용 표시이며 정식 명령이나 실제 입력 원문으로 주장하지 않는다. 공식 안내의 명령은 /skills다.
- **Visual Concept:** 상단에 밝기 통계 성능 조사라는 한 줄 목표를 둔다. 왼쪽 “명령 입력 중” 창의 /skill 문자열과 오른쪽 실제 과거 목록의 graypipe-performance 이름/잘린 설명을 큰 한 장면으로 보여준다. 경로·전체 Prompt·trace를 같은 장에 넣지 않는다. 요청 입력 부분은 기존 Mac 스타일의 제목 막대·세 색상 표시·밝은 본문·둥근 테두리로 통일한다. 문장·강조·앞뒤 관계는 보존하며 [공통 적용 범위](MAC_PROMPT_STYLE_AUDIT.md)를 따른다. 화면의 /skill은 입력 접두어 표현이며 정식 명령 /skills와 원래 실행 기록은 Notes에 구분한다. CLI 기록 footer는 제거한다.
- **Demo / Case Connection:** DEMO-03 / TRIAL-008. 세 번째 성능 조사인 image_statistics의 실행 시간 또는 할당량 조사 요청. 기본은 검증된 정적 기록 도식이며 현재 Live/Hybrid는 미활성이다.
- **Beginner Payoff:** 필요한 방법을 사용 가능한 목록에서 찾았다. 이름이 보였다는 것만으로 이번 작업에 사용됐다고 말하지 않는다.
- **Advanced Payoff:** 발견 가능성, 명시 선택, 본문 포함과 실제 수행을 구분한다. 목록에 파일 경로는 없었으며 보존된 영문 설명의 잘림을 임의로 복원하지 않는다.
- **C++ Vision Bridge:** 없음. 이 장에서 억지로 연결하지 않는다.
- **Speaker Intent:** S62 선택 이유 → S63 목록 발견 → S64 명시 요청 → 현재 S65 Skill 제작 팁으로 이어진다. 이 장의 기존 발견/요청 근거만 설명한다. 삭제한 본문 포함 확인과 상세 수행 대응은 이식하지 않는다.
- **Transition:** “찾은 Skill을 이번 작업 요청에는 어떻게 지정했을까요?”
- **Estimated Time:** 1분
- **Delivery Mode Allocation:** Demo 1분 (HYBRID) = 1분
- **Evidence / Decision References:** BEAT-021, TRIAL-008, DEC-0017, OQ-005, DEC-0062, DEC-0066, DEC-0130; DEC-0179; DEC-0186
- **Audience Footer:** 없음 — 실제 CLI 버전·/skills 입력 원문은 Notes에 보존

#### S64 — 이번 요청에 사용할 Skill을 지정한다

- **Slide ID:** S64
- **ACT:** ACT 3
- **Section:** 3C Reusable Skill
- **Working Title:** 이번 요청에 사용할 Skill을 지정한다
- **Primary Role:** 같은 Skill을 이번 작업 요청에 명시하고 목표/조건을 전달한 실제 호출 근거를 설명한다.
- **Audience Question:** “찾은 Skill을 이번 작업 요청에 어떻게 지정했을까요?”
- **Core Message:** 실제 요청 첫 줄의 $graypipe-performance로 사용할 방법을 명시하고, 이번 밝기 통계 목표·결과6항목 보존·범위·trade-off/no-change 조건을 함께 전달했다.
- **Story Beat:** BEAT-021 — Repository Skill의 발견과 호출
- **Curriculum Trace:** ACT 3 — observed workflow and repository-owned Performance Skill.
- **Evidence Type:** OBSERVED_PRODUCT
- **Claim Status:** FROZEN — 기존99장의 Story·배정·Demo 범위를 보존한 현행115장 구조; FROZEN WITH SCOPE; REQUIRES PRODUCT CHECK — 대상 Skills 표면·계정·호출 경로; Codex CLI 0.154.0에서 관찰. Desktop 동작과 암묵적 호출은 검증하지 않음. 현재 제품 표면의 상태는 **REQUIRES PRODUCT CHECK**.
- **Visual Concept:** S40과 같은 macOS풍의 큰 Prompt 창을 사용한다. 좌측 상단 신호등3개, “작업 요청” 헤더, 둥근 테두리와 보내기 control을 두고 기존 $graypipe-performance 호출과 실제 요청 번역 요약4줄을 그대로 유지한다. 창의 장식보다 호출과 이번 목표·조건이 먼저 읽히게 한다. 역사적 CLI 요청을 UI 형태로 재구성한 기록 도식이며 실제 제품 화면 캡처나 현재 Desktop 실행으로 표현하지 않는다. 하단 “Codex CLI 0.154.0 기록” 문구만 화면에서 제거하고 출처·버전·제한은 Notes에 보존한다. 대체 footer는 추가하지 않는다.
- **Demo / Case Connection:** DEMO-03 / TRIAL-008. 세 번째 성능 조사인 image_statistics의 실행 시간 또는 할당량 조사 요청. 기본은 검증된 정적 기록 도식이며 현재 Live/Hybrid는 미활성이다.
- **Beginner Payoff:** 반복할 방법은 Skill 이름으로 지정하고, 이번에 원하는 일과 지킬 조건은 요청에 적었다.
- **Advanced Payoff:** 명시 호출과 암묵 호출을 구분한다. 실제 Prompt의 임시 workspace·범위·결과 보존·trade-off와 no-change 조건을 유지하며 재사용 절차를 다시 복제하지 않는다.
- **C++ Vision Bridge:** 없음. 이 장에서 억지로 연결하지 않는다.
- **Speaker Intent:** S62 선택 이유 → S63 목록 발견 → S64 명시 요청 → 현재 S65 Skill 제작 팁으로 이어진다. 이 장의 기존 발견/요청 근거만 설명한다. 삭제한 본문 포함 확인과 상세 수행 대응은 이식하지 않는다.
- **Transition:** “이번 요청에는 재사용할 방법을 지정했습니다. 이제 우리 업무의 Skill을 만드는 시작 방법을 보겠습니다.”
- **Estimated Time:** 2분
- **Delivery Mode Allocation:** Demo 2분 (HYBRID) = 2분
- **Evidence / Decision References:** BEAT-021, TRIAL-008, DEC-0017, OQ-005, DEC-0062, DEC-0066, DEC-0130, DEC-0137
- **Audience Footer:** 없음 — CLI 버전·출처·재구성·제품 범위는 Notes에 보존; M 연계 표시는 유지

#### S65 — 대화로 재사용할 Skill 만들기

- **Slide ID:** S65
- **ACT:** ACT 3
- **Section:** 3C Reusable Skill
- **Working Title:** 대화로 재사용할 Skill 만들기
- **Primary Role:** 현재 Codex의 제작 시작 방법을 짧은 실무 적용 팁으로 보여준다. Codex의 $skill-creator에 반복할 작업과 사용 조건을 대화로 설명해 Skill 초안을 만들 수 있다. 생성된 지침을 확인하고 대표 요청에 사용해 다듬는다.
- **Audience Question:** “우리 작업 절차도 파일 문법부터 배우지 않고 Skill로 만들 수 있을까요?”
- **Core Message:** Codex의 $skill-creator에 반복할 작업과 사용 조건을 대화로 설명해 Skill 초안을 만들 수 있다. 생성된 지침을 확인하고 대표 요청에 사용해 다듬는다.
- **Story Beat:** BEAT-021 — 반복 절차의 위치 이동
- **Curriculum Trace:** ACT 3 — short current-product authoring tip inserted by DEC-0093; not a Trial or a replacement for the existing evidence/candidate/conditional-decision sequence.
- **Evidence Type:** RESEARCH / TEACHING_MODEL
- **Claim Status:** DOCUMENTED GUIDANCE / TEACHING_MODEL / REQUIRES PRODUCT CHECK — 공식 제작 경로를 설명한 교육용 예시다. TRIAL-008의 Skill을 이 방식으로 만든 이력이 아니고, 현재 계정에서 생성·호출·동작을 시험한 결과도 아니다. 자연어만으로 제작 도우미가 반드시 자동 호출되거나 생성만으로 좋은 지침이 된다고 보장하지 않는다.
- **Visual Concept:** 왼쪽 Codex 요청창에 $skill-creator와 성능 조사 절차를 재사용할 Skill로 만들어 달라는 예시를 둔다. 오른쪽은 생성될 SKILL.md의 언제/순서/보고 항목을 의미 재구성한 문서다. 아래는 실제 요청에 사용하고 다듬기의 세 번째 단계다. 실제 Screenshot·생성 완료 결과를 흉내내지 않는다. 요청 입력 부분은 기존 Mac 스타일의 제목 막대·세 색상 표시·밝은 본문·둥근 테두리로 통일한다. 문장·강조·앞뒤 관계는 보존하며 [공통 적용 범위](MAC_PROMPT_STYLE_AUDIT.md)를 따른다.
- **Demo / Case Connection:** 새 Demo 시간·Trial 없음. Lecture2분의 공식 안내 각색이며 과거 관찰/가상 사례/실제 구성 선택과 구분한다.
- **Beginner Payoff:** Skill 파일의 문법부터 직접 외울 필요 없이 Codex에 원하는 작업 방법을 설명해 제작을 시작할 수 있다.
- **Advanced Payoff:** 사용 조건·입출력·수행 방법의 범위를 좁히고 생성 지침의 검토와 대표 요청 평가를 구분한다. 좋은 실행 결과·정확성·효율을 자동 보장하지 않는다.
- **C++ Vision Bridge:** 없음. 제작 경로와 역할 범위를 설명하며 C++ 도구 목록을 추가하지 않는다.
- **Speaker Intent:** 한 장에서 제작 요청→생성 지침 확인→대표 요청 사용의 경로를 읽게 한다. 실제 제작·호출 Demo나 설정 문법 강의로 확장하지 않는다.
- **Transition:** “지금 본 제작 요청은 사용 예시입니다. 같은 밝기 통계 작업을 C++로 옮기면 어떤 구현을 고를지, 별도 비교 실험을 보겠습니다.”
- **Estimated Time:** 2분
- **Delivery Mode Allocation:** Lecture 2분 = 2분
- **Evidence / Decision References:** SRC-0111, CLM-0041, DEC-0093; DEC-0179; EXP-CPP-STATS-001; DEC-0183; demos/experiments/cpp-statistics/results/summary.json; DEC-0186
- **Practical Tip Classification:** 수행 방법
- **Audience Footer:** 없음 — 사용 예시와 지침 검토 범위는 Notes·본문에 유지

#### S66 — 밝기 통계 계산의 성능 개선 후보

- **Slide ID:** S66
- **ACT:** ACT 3
- **Section:** 3D Working Harness
- **Working Title:** 밝기 통계 계산의 성능 개선 후보
- **Primary Role:** 최적화 기법 강의 대신 근거에 따른 후보 선택을 보여준다.
- **Audience Question:** “같은 밝기 통계를 C++로 계산한다면, 두 후보 중 무엇을 고를까요?”
- **Core Message:** 같은 밝기 통계 기능을 C++로 옮긴 EXP-CPP-STATS-001에서 행별 표준 연산1.138ms와 한 번 집계0.071ms를 비교했다. 결과6항목을 유지했고 두 후보의 계측한 추가 픽셀 버퍼는0B였다. 이 Mac/Release 조건에서 한 번 집계를 선택한다.
- **Story Beat:** BEAT-022 — 측정과 비교를 거친 후보 선택
- **Curriculum Trace:** ACT 3 — observed workflow, verification, and Minimum Effective Harness.
- **Evidence Type:** OBSERVED_PRODUCT / TEACHING_MODEL
- **Claim Status:** FROZEN WITH SCOPE — 격리된 C++ 시험 코드의 동작·측정과 구조 재구성이다. 기존 Python TRIAL-008의 실행·결과·Skill 이력이나 정식 Demo 제품 State가 아니다. 후보 순위는 이 입력·호스트·컴파일 조건에 한정한다.
- **Visual Concept:** 상단에 같은 밝기 통계의 C++ 구현 비교라고 표시한다. 비교 기준의 입력 이미지→임시 vector 복사→최소·최대·평균 계산을 native 도식으로 보여준다. 하단에서 행별 min/max/sum1.138ms와 한 번 순회0.071ms를 비교하고 후자를 선택한다. 양쪽 결과6항목 동일·추가 픽셀 버퍼0B를 표시한다. 도식 셀 수는 실제 데이터나 성능 비율이 아니다.
- **Demo / Case Connection:** 기존 Python Skill 기록과 구분한 C++ 확장 실험의 후보 비교다. EXP-CPP-STATS-001의 같은 주 입력 결과를 S67에서 복사 기준선과 비교해 회수한다. Case5분은 기존 DEMO-03의 CLI 관찰 시간에 더하지 않는다.
- **Beginner Payoff:** 성능 개선은 아이디어가 아니라 같은 조건의 비교로 판단한다.
- **Advanced Payoff:** 시간·메모리 trade-off를 따로 보고 후보를 선택한다.
- **C++ Vision Bridge:** C++ 원생 비교 예제다. 입력은uint16_t 저장형, 주 측정 픽셀값0–255이며16비트 범위·행 여백도 별도로 확인했다. Windows/MSVC 실측은 아니다.
- **Speaker Intent:** S65의 제작 팁에서 동일 작업을 C++로 옮긴 별도 비교로 넘어온다. 기준 구현의 복사, 두 후보의 동일 출력, 시간과 버퍼를 보고 선택한 순서로 설명한다. Python 후보 순위를 가져오거나 Skill이 알고리즘을 제공·개선했다고 해석하지 않는다.
- **Transition:** “선택한 C++ 구현을 복사 기준과 비교해, 시간·추가 버퍼·동작을 함께 확인하겠습니다.”
- **Estimated Time:** 5분
- **Delivery Mode Allocation:** Case 5분 = 5분
- **Evidence / Decision References:** BEAT-022, TRIAL-008, STATE-04-PERF, INV-VERIFY-001, DEC-0062, DEC-0069, DEC-0070; EXP-CPP-STATS-001; DEC-0183; demos/experiments/cpp-statistics/results/summary.json
- **Audience Footer:** 동일1024×768·Apple M5 Max·Clang21 Release의 C++ 비교 실험. 내부 실험 ID는 화면에 표시하지 않는다.

#### S67 — 선택한 변경의 시간·메모리·동작 확인

- **Slide ID:** S67
- **ACT:** ACT 3
- **Section:** 3D Working Harness
- **Working Title:** 선택한 변경의 시간·메모리·동작 확인
- **Primary Role:** 선택한 C++ 구현의 같은 실험 결과를 실행시간·추가 픽셀 버퍼·동작 확인의 세 기준으로 회수한다.
- **Audience Question:** “빠르기만 한 것이 아니라, 추가 버퍼와 결과도 함께 확인됐을까요?”
- **Core Message:** EXP-CPP-STATS-001의 같은 입력에서 복사 기준1.216ms와 한 번 집계0.071ms를 비교했다. 계측한 임시 픽셀 버퍼는1,572,864→0B이고,56개 입력에서 세 후보의6항목이 Python 기준과 일치했다. 계약 검사20개와 메모리 오류 검사도 통과했다.
- **Story Beat:** BEAT-022, BEAT-037 — bounded change와 Working Harness Success
- **Curriculum Trace:** ACT 3 — observed workflow, verification, and Minimum Effective Harness.; ACT 3 — Tools, Verification, Harness reveal, and Working Harness Success; ACT 3 → ACT 4 handoff.
- **Evidence Type:** OBSERVED_PRODUCT / TEACHING_MODEL
- **Claim Status:** FROZEN WITH SCOPE — 새 C++ 실험의 코드·입력·호스트·컴파일 조건으로 한정한다. 메모리는 계측한 임시 픽셀 버퍼이며 전체 힙·스택·입력 영상·RSS가 아니다. Python 제품 변경·Skill 호출·Windows/MSVC 성과를 입증하지 않는다.
- **Visual Concept:** 상단에서 임시 복사 없이 한 번에 최소·최대·합계를 계산한 선택을 회수한다. 왼쪽 native chart는 복사 기준1.216ms와 한 번 집계0.071ms이며 수치 축은0–1.5, 간격0.5다. 가운데는 계측한 임시 픽셀 버퍼1,572,864→0B, 오른쪽은6항목 동일·56개 입력 대조·계약20개·메모리 오류 검사를 표시한다. 같은 실험의 세 측면이며 별도 제품 반영 전후 기록이라고 말하지 않는다.
- **Demo / Case Connection:** EXP-CPP-STATS-001의 copied_buffer와 fused_pass 및 외부 정답 대조를 사용한다. 기존 STATE-04→STATE-04-PERF Python 제품 측정은 원자료에 보존하고 현재 화면의 수치로 섞지 않는다.
- **Beginner Payoff:** AI의 제안은 테스트와 측정으로 확인한 뒤 결과물로 반영한다.
- **Advanced Payoff:** 원인에 대한 주장과 시스템을 사용해 검증한 관찰 결과를 분리한다.
- **C++ Vision Bridge:** 동일한 밝기 통계 기능의 실제 C++ 실험이다. 정식 C++ 제품·Windows/MSVC·실제 검사 장비에서의 결과가 아니다.
- **Speaker Intent:** 같은 C++ 실험의 결과를 시간·추가 버퍼·동작 순으로 읽는다.63개 묶음 표본을 호출당 시간으로 환산한 중앙값임을 Notes에 남기고 기존 Python7회 측정과 구분한다.0B를 전체 메모리로 해석하지 않으며 S68의 역할 분리 가정으로 넘긴다.
- **Transition:** “측정으로 구현을 골랐습니다. 이번에는 독립 조사를 여러 역할로 나눌 필요가 있는지 살펴보겠습니다.”
- **Estimated Time:** 5분
- **Delivery Mode Allocation:** Case 5분 = 5분
- **Evidence / Decision References:** BEAT-022, BEAT-037, STATE-04-PERF, STATE-04, TRIAL-008, INV-VERIFY-001, STATE-00, DEC-0018, INV-DEMO-003, DEC-0062, DEC-0070; EXP-CPP-STATS-001; DEC-0183; demos/experiments/cpp-statistics/results/summary.json
- **Audience Footer:** 추가 픽셀 버퍼만 계측·입력 영상과 전체 메모리 제외. 실행 환경은1024×768·Apple M5 Max·Clang21 Release.

#### S68 — 한 Agent 조사와 Subagent 역할 분리

- **Slide ID:** S68
- **ACT:** ACT 3
- **Section:** 3E Conditional Subagent Decision
- **Working Title:** 한 Agent 조사와 Subagent 역할 분리
- **Primary Role:** Subagent가 해결할 문제와 활용 관계를 현재 사례의 보류 결론보다 먼저 설명한다.
- **Audience Question:** “성능·빌드·테스트 조사가 서로 기다리지 않아도 된다면?”
- **Core Message:** 독립 조사와 별도 Context의 가치가 있고 결과 형식·전달 지점·통합 책임을 정할 수 있다면 역할 분리를 검토한다. C++ Vision 사례는 교육용 가정이며 조정·중복·전달·통합 비용을 함께 본다.
- **Story Beat:** BEAT-023–025 — Subagent 필요성 판단
- **Curriculum Trace:** ACT 3 — conditional role/context separation.; ACT 3 — role/context complexity and Subagents.; ACT 3 — conditional Subagent decision.
- **Evidence Type:** CONCEPTUAL / TEACHING_MODEL
- **Claim Status:** CONCEPTUAL CASE / TEACHING MODEL — 기존 C++ 역할 분리 가정을 먼저 설명한다. 실제 Subagent 실행·이득·현재 제품 기능의 관찰이 아니다.
- **Visual Concept:** 같은 성능·빌드·테스트 조사를 좌우에 놓는다. 왼쪽은 한 Agent가 세 조사와 종합을 맡고, 오른쪽은 주 Agent가 범위·결과 형식을 지정해 세 Subagent에 분담한 뒤 같은 주 Agent가 근거를 확인·통합한다. 역할별 소스·측정/환경·설정/테스트·명세를 병기한다. 본문의 조건부 질문과 비용 설명은 유지하고 시간축·승자 표시를 쓰지 않는다. 가정의 성격과 미측정 범위는 Notes에 보존한다. DEC-0184: “ACT 3 · 교육용 가정: 독립 조사와 결과 통합”를 “ACT 3 · 독립 조사와 결과 통합”로 간략화한다. 본문·도식·수치·시간·근거 범위와 Notes는 유지한다.
- **Demo / Case Connection:** DEMO-07: 기존 C++ 독립 조사 가정을 먼저 설명. 실제 Subagent 실행 없음. Demo3분 VISUAL, Q&A1분.
- **Beginner Payoff:** 역할별로 필요한 정보로 조사하고 주 Agent가 합치는 관계를 이해한다.
- **Advanced Payoff:** 독립성·Context 분리의 가치와 조정·중복·전달·통합 비용을 함께 판단한다.
- **C++ Vision Bridge:** CONTEXTUAL — 기존 C++ 독립 조사 가정. 실제 Subagent 실행이나 병렬 이득이 아니다.
- **Speaker Intent:** S67의 별도 C++ 비교 결과에서 독립 조사 역할의 교육용 가정으로 전환한다. 단일 Agent와 역할 분리를 같은 조사 항목으로 비교하고 독립성·필요 정보·통합 책임을 설명한다. S69 제작 팁 뒤 S70는 원래 Python Demo의 실제 역할 판단으로 복귀한다. 새 C++ 실험을 Subagent 실행 기록으로 설명하지 않는다.
- **Transition:** “독립 조사 역할을 나눌 수 있다면, 그 역할은 Codex에서 어떻게 만들어 다시 쓸까요?” S69 제작 팁을 거친 뒤 S70의 실제 밝기 통계 판단으로 돌아온다.
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Demo 3분 (VISUAL) + Q&A 1분 = 4분
- **Evidence / Decision References:** BEAT-023, DEC-0018, CLM-0007, BEAT-024, BEAT-025, DEC-0062, DEC-0071, DEC-0080; EXP-CPP-STATS-001; DEC-0183; demos/experiments/cpp-statistics/results/summary.json; DEC-0184
- **Audience Footer:** 역할 분리 예시 · 분담·조정 비용도 고려

#### S69 — 대화로 조사 Agent 만들기

- **Slide ID:** S69
- **ACT:** ACT 3
- **Section:** 3E Conditional Subagent Decision
- **Working Title:** 대화로 조사 Agent 만들기
- **Primary Role:** 현재 Codex의 제작 시작 방법을 짧은 실무 적용 팁으로 보여준다. Codex에 역할·사용 조건·보고 범위를 설명해 프로젝트용 Custom Agent TOML 작성을 요청할 수 있다. 파일의 역할 지침을 확인하고 다음 요청에서 그 이름의 Subagent로 조사를 명시한다.
- **Audience Question:** “반복해서 맡기는 조사 역할을 Codex에서 어떻게 만들어 다시 쓸까요?”
- **Core Message:** Codex에 역할·사용 조건·보고 범위를 설명해 프로젝트용 Custom Agent TOML 작성을 요청할 수 있다. 파일의 역할 지침을 확인하고 다음 요청에서 그 이름의 Subagent로 조사를 명시한다.
- **Story Beat:** BEAT-023, BEAT-024
- **Curriculum Trace:** ACT 3 — short current-product authoring tip inserted by DEC-0093; not a Trial or a replacement for the existing evidence/candidate/conditional-decision sequence.
- **Evidence Type:** RESEARCH / TEACHING_MODEL
- **Claim Status:** DOCUMENTED GUIDANCE / TEACHING_MODEL / REQUIRES PRODUCT CHECK — Codex Custom Agent 설정/사용 요청의 교육용 예시이며 실제 생성·로딩·분담 실행·성능 이득을 시험한 결과가 아니다. 별도의 agent-creator Skill이 존재한다고 말하지 않는다. 코드 수정 금지는 역할 지침이며 독립적인 읽기 전용 권한을 만드는 설정이 아니다. 기존 Demo의 NOT JUSTIFIED YET 판단은 유지한다.
- **Visual Concept:** 왼쪽 요청창은 S64과 같은 macOS풍 둥근 창·상단 신호등3개·요청 헤더·보내기 control을 사용하고 기존4줄을 그대로 둔다. perf_reviewer 역할 생성, 병목 후보 조사, 파일/함수/근거/미확인 보고, 코드 수정 금지 지침을 설명한다. 오른쪽 문서 도식은 .codex/agents/perf_reviewer.toml과 이름/사용 조건/역할을 보여준다. 하단에는 해당 이름의 Subagent로 조사하고 기다린 뒤 근거를 확인해 종합하라는 사용 요청 예시를 둔다. 요청 입력 부분은 기존 Mac 스타일의 제목 막대·세 색상 표시·밝은 본문·둥근 테두리로 통일한다. 문장·강조·앞뒤 관계는 보존하며 [공통 적용 범위](MAC_PROMPT_STYLE_AUDIT.md)를 따른다.
- **Demo / Case Connection:** 새 Demo 시간·Trial 없음. Lecture2분의 공식 안내 각색이며 과거 관찰/가상 사례/실제 구성 선택과 구분한다.
- **Beginner Payoff:** 어떤 조사를 언제 맡기고 무엇을 받으려는지 Codex에 설명하면 재사용할 역할 설정부터 작성하도록 요청할 수 있다.
- **Advanced Payoff:** 임시 분담과 재사용 가능한 역할 정의를 구분한다. 설정 파일의 필수 필드·역할 범위와 부모 권한의 상속, 주 Agent의 근거 검토·통합 책임을 분리한다.
- **C++ Vision Bridge:** 없음. 제작 경로와 역할 범위를 설명하며 C++ 도구 목록을 추가하지 않는다.
- **Speaker Intent:** 한 장에서 제작 요청→생성 지침 확인→대표 요청 사용의 경로를 읽게 한다. 실제 제작·호출 Demo나 설정 문법 강의로 확장하지 않는다.
- **Transition:** “필요할 때 역할을 만들어 쓸 수 있습니다. 하지만 이 밝기 통계 작업에서도 나눌 필요가 있었을까요?” 이전 S68이 이동한 S70에서 실제 보류 판단을 회수한다.
- **Estimated Time:** 2분
- **Delivery Mode Allocation:** Lecture 2분 = 2분
- **Evidence / Decision References:** SRC-0112, CLM-0042, DEC-0093; DEC-0179
- **Practical Tip Classification:** 수행 방법
- **Audience Footer:** N/A — DEC-0139로 기존 Audience footer1만 화면에서 삭제한다. 설정·사용 예시, 일회성/반복 역할의 구분과 출처·검증 범위는 Notes에 보존한다. M 연계는 유지한다.

#### S70 — 밝기 통계 작업을 나누지 않은 이유

- **Slide ID:** S70
- **ACT:** ACT 3
- **Section:** 3E Conditional Subagent Decision
- **Working Title:** 밝기 통계 작업을 나누지 않은 이유
- **Primary Role:** 앞 장의 역할 분리 기준을 현재 사례에 적용해 선택 이유를 회수한다.
- **Audience Question:** “S68의 독립 조사 기준을 이 밝기 통계 작업에도 적용할 수 있었을까요?”
- **Core Message:** 현재 작업은 같은 성능 경로·명세를 공유하고 조사→변경→검증의 의존성이 높았다. 별도 Context 이득과 결과 통합 비용을 검토한 결과 Subagent를 추가하지 않았다.
- **Story Beat:** BEAT-023–025 — 조건부 Subagent 판단
- **Curriculum Trace:** ACT 3 — conditional role/context separation.; ACT 3 — role/context complexity and Subagents.; ACT 3 — conditional Subagent decision.
- **Evidence Type:** OBSERVED_PRODUCT / TEACHING_MODEL
- **Claim Status:** FROZEN WITH SCOPE / TEACHING MODEL — DEC-0018 현재 Task 감사의 판단이며 실제 Subagent Trial이 아니다. 일반적 불필요성이나 기능 부재를 주장하지 않는다.
- **Visual Concept:** 상단을 “ACT 3 · 원래 Python Demo의 역할 판단”으로 표시한다. 기존 조사→변경→검증 의존관계·한 Agent 유지·통합 비용 도식과 문구는 보존한다. S66–S67의 C++ 확장 실험과 원래 Python 저장소의 역할 판단을 구분한다.
- **Demo / Case Connection:** DEMO-07: DEC-0018 현재 작업 판단을 회수. Lecture1분, Demo2분 VISUAL, Q&A1분.
- **Beginner Payoff:** 현재 Task의 앞뒤 의존성에 따라 역할 분리 여부를 판단한다.
- **Advanced Payoff:** NOT JUSTIFIED YET는 현재 감사의 선택이며 일반적 기능 가치와 다르다.
- **C++ Vision Bridge:** S68의 가정을 현재 Python Task와 구분해 회수한다.
- **Speaker Intent:** S68 가정과 S69 제작 팁 뒤 원래 Python Demo의 조사→변경→검증 의존성으로 돌아온다. 기존 DEC-0018 판단을 회수하며 새 C++ 실험의 역할 선택으로 바꾸지 않는다. 다음 S71의 원래 실제 구성으로 이어간다.
- **Transition:** “이번 작업에서 실제로 사용한 구성은 각각 어떤 역할을 맡았을까요?” 현재 S71로 이어간다.
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Lecture 1분 + Demo 2분 (VISUAL) + Q&A 1분 = 4분
- **Evidence / Decision References:** BEAT-023, DEC-0018, CLM-0007, BEAT-024, BEAT-025, DEC-0062, DEC-0072; EXP-CPP-STATS-001; DEC-0183; demos/experiments/cpp-statistics/results/summary.json
- **Audience Footer:** N/A — DEC-0139로 기존 Audience footer1만 화면에서 삭제한다. 이번 작업의 선택이라는 범위와 근거는 본문·Notes에 유지하고 M 연계는 보존한다.

#### S71 — 밝기 통계 작업에 쓰인 구성의 역할

- **Slide ID:** S71
- **ACT:** ACT 3
- **Section:** 3G Minimum Effective Harness
- **Working Title:** 밝기 통계 작업에 쓰인 구성의 역할
- **Primary Role:** 이 사례의 구체적인 구성과 사용 이유를 회수한다.
- **Audience Question:** “실제 밝기 통계 작업에서 목표·Context·Skill·검증 도구는 각각 무엇을 맡았을까요?”
- **Core Message:** 밝기 통계 목표/범위, AGENTS.md와 상세 문서, 재사용 Skill, 테스트·benchmark·실행 조건이 각각 목표·지식·방법·완료 근거를 맡았다. Subagent는 추가하지 않았다.
- **Story Beat:** BEAT-035, BEAT-037 — 해결된 마찰에서 Harness 구조 도출
- **Curriculum Trace:** ACT 3 — Tools, verification, and Harness reveal.; ACT 3 — Tools, Verification, Harness reveal, and Working Harness Success; ACT 3 → ACT 4 handoff.
- **Evidence Type:** OBSERVED_PRODUCT / TEACHING_MODEL
- **Claim Status:** FROZEN — 기존99장의 Story·배정·Demo 범위를 보존한 현행115장 구조; FROZEN WITH SCOPE; TEACHING_MODEL; 이번 작업에서 관찰한 구성을 일반적인 기능 수 우위 주장으로 확장하지 않는다.
- **Visual Concept:** 목표·Context·Skill을 왼쪽 세 입력으로 배치하고 한 Agent의 밝기 통계 조사·변경으로 모은다. 오른쪽 검증 도구는 테스트·benchmark와 출력·시간·할당량, 같은 입력·환경을 짧게 표시한다. 세 입력은 순차 단계가 아니며 네 책임의 실제 사용 관계를 재구성한다. 수치·파일 목록·전체 Harness 정의는 반복하지 않는다.
- **Demo / Case Connection:** STATE-04-PERF까지 이어진 작업과 검증 흐름.
- **Beginner Payoff:** Harness는 기능을 많이 모으는 일이 아니라 현재 문제에 필요한 구조를 마련하는 일이다.
- **Advanced Payoff:** 최소 구성은 문제와 검증 요건에 따라 달라진다는 점을 판단 기준으로 삼는다.
- **C++ Vision Bridge:** N/A — 이전 독립 C++ 전이 장은 DEC-0091에서 삭제했다. 실제 구성 회고와 Harness 재사용 설명으로 연결한다.
- **Speaker Intent:** S70에서 복귀한 원래 Python 작업의 목표·정보·방법·검증 도구 역할을 회수한다. S66–S67의 C++ 측정값을 이 구성의 성과로 사용하지 않는다. Python 수치의 원자료는 보존하며 화면에서 반복하지 않는다. 다음 S72에서 실행 환경과 검토 책임을 연결한다.
- **Transition:** “이 파일과 도구들이 어떤 관계로 작동하는지 전체 작업 환경으로 묶겠습니다.”
- **Estimated Time:** 3분
- **Delivery Mode Allocation:** Demo 3분 (CAPTURED) = 3분
- **Evidence / Decision References:** BEAT-035, BEAT-037, STATE-04-PERF, CLM-0016, CLM-0017, CLM-0030, OQ-011, STATE-00, DEC-0018, INV-DEMO-003, INV-VERIFY-001, DEC-0062, DEC-0075, DEC-0080; EXP-CPP-STATS-001; DEC-0183; demos/experiments/cpp-statistics/results/summary.json
- **Audience Footer:** 실제 구성과 기록의 요약

#### S72 — 함께 작동하는 작업 환경, Harness

- **Slide ID:** S72
- **ACT:** ACT 3
- **Section:** 3G Minimum Effective Harness 완성
- **Working Title:** 함께 작동하는 작업 환경, Harness
- **Primary Role:** 앞 장의 실제 구성 목록을 전체 작업 관계로 묶어 Harness 정의를 완성한다.
- **Audience Question:** “S71의 구성에 실행·검증 환경까지 함께 연결하면, Agent가 일하는 전체 구조는 어떻게 보일까요?”
- **Core Message:** 이 과정에서 Harness는 Agent가 신뢰성 있게 일하도록 목표·Context·재사용 절차·실행 도구·검증·검토 조건을 연결한 작업 환경과 방법의 운영 모델이다.
- **Story Beat:** BEAT-035, BEAT-036
- **Curriculum Trace:** ACT 3 — Tools, verification, and Harness reveal.
- **Evidence Type:** OBSERVED_PRODUCT / TEACHING_MODEL
- **Claim Status:** TEACHING_MODEL — DEC-0023의 과정 내 Harness 정의다. 점선의 선택 Subagent는 독립 조사 역할을 보여주는 교육용 확장이고 실제 STATE-04-PERF에는 추가하지 않았다. 기존 단일 Agent 구성의 관찰 범위와 구분하며 공식 OpenAI 정의·보편 필수 구성·역할 분리 효과를 주장하지 않는다.
- **Visual Concept:** 기존 목표·Context·Skill 입력군→주 Agent→검증 도구/사람의 근거·결과 검토와 하단 실행 환경을 유지한다. 주 Agent 아래에는 amber 점선의 작은 선택 Subagent를 두고 “선택 · 독립 조사”로 표시한다. 주 Agent가 조사 범위를 맡기고 결과가 다시 주 Agent로 돌아오는 관계를 보여주며 결과 확인·통합 책임은 주 Agent에 둔다. Subagent에서 제품 변경이나 검증 완료로 직접 연결하지 않는다. 입력군, Agent군(종속 선택 Subagent 포함), 검증/검토군, 공통 실행 환경의 계층으로 읽어 선택 요소가 주요 흐름을 압도하지 않게 한다. 색뿐 아니라 점선·선택 라벨로 실제 구성과 확장을 구분한다.
- **Demo / Case Connection:** Lecture4분은 실제 구성에 근거한 과정의 Harness 관계와 선택 역할을 설명한다. 이후 CAPTURED Demo2분은 STATE-04-PERF의 목표·Context·Skill·단일 Agent·검증 도구와 기록된 실행 조건만 대응한다. 점선 선택 Subagent는 실제 이 작업에 추가한 구성이나 관찰된 실행이 아니다.
- **Beginner Payoff:** Agent에게 Project 정보뿐 아니라 일하는 환경과 확인 방법도 필요하다는 점을 이해한다.
- **Advanced Payoff:** Harness를 특정 파일이나 기능이 아니라 Project별 신뢰성 문제를 해결하는 시스템으로 본다.
- **C++ Vision Bridge:** N/A — 다음 S73–S74은 여러 프로젝트에 적용할 공통 기반과 프로젝트별 조건의 교육용 설계다.
- **Speaker Intent:** S71의 실제 단일 Agent 구성에서 실행 조건과 사람의 검토 책임을 연결해 Harness 모델로 확장한다. 주 Agent의 통합 책임을 유지하면서 독립 조사에만 선택 Subagent를 둘 수 있는 관계를 짚는다. 지침·파일 목록은 반복하지 않는다. Lecture의 교육용 확장과 마지막2분의 실제 구성 대응을 구분하고 선택 Subagent를 실제 Demo처럼 설명하지 않는다. 다음 S73에서는 같은 기반을 다른 프로젝트에도 출발점으로 쓸 수 있다는 가치를 보여준다.
- **Transition:** “이렇게 만든 작업 체계를 다음 프로젝트에서도 출발점으로 쓸 수 있을까요?”
- **Estimated Time:** 6분
- **Delivery Mode Allocation:** Lecture 4분 + Demo 2분 (CAPTURED) = 6분
- **Evidence / Decision References:** BEAT-035, BEAT-036, STATE-04-PERF, OQ-011, CLM-0016, CLM-0017, CLM-0030, DEC-0062, DEC-0023, DEC-0076, DEC-0080, DEC-0134
- **Audience Footer:** 없음 — M 연계 표시는 유지

#### S73 — 만든 Harness를 다음 프로젝트의 기반으로

- **Slide ID:** S73
- **ACT:** ACT 3
- **Section:** 3G Minimum Effective Harness 완성
- **Working Title:** 만든 Harness를 다음 프로젝트의 기반으로
- **Primary Role:** 구축한 Harness를 다음 프로젝트의 출발점으로 재사용할 수 있다는 가치를 먼저 설명한다.
- **Audience Question:** “프로젝트가 바뀔 때마다 작업 방법까지 처음부터 다시 만들 필요가 있을까요?”
- **Core Message:** 검토해 둔 조사·변경·검증 절차와 도구 연결·보고 방식을 공통 기반으로 남겨 다음 프로젝트의 출발점으로 쓸 수 있다.
- **Story Beat:** BEAT-035, BEAT-036
- **Curriculum Trace:** ACT 3 — reusable Harness foundation, project bindings, and execution-condition literacy. Existing Section/Beat identities retained.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** TEACHING MODEL — 재사용의 설계 가치다. 다른 프로젝트에서 실행·검증한 Demo나 시간·성능 개선 성과가 아니다.
- **Visual Concept:** 하나의 큰 “공통 Harness” 모듈에서 동일한 작은 모듈 세 개가 프로젝트 A/B/C 내부에 들어가는 관계를 native text/shape로 보여준다. 큰 모듈과 세 작은 모듈은 같은 색·모양·내부 순서(조사·변경·검증/도구 연결·보고 틀)를 반복해 같은 기반임을 알아보게 한다. 프로젝트 외곽과 내부 모듈을 중첩해 단순히 프로젝트 이름으로 화살표를 보낸 것과 구분한다. 연결은 재사용의 설계 관계이며 자동 배포·무조건 작동·완료 판정이 아니다. 수치·성공 체크 없이 프로젝트 조건을 연결하는 질문을 다음 장에 남긴다.
- **Demo / Case Connection:** N/A — 교육용 적용 모델. 다른 프로젝트의 실제 이식·비교 실험이 아니다.
- **Beginner Payoff:** 한 번 정리한 일하는 방법을 다음 프로젝트에서 출발점으로 삼을 수 있다.
- **Advanced Payoff:** 공통 수행 틀을 축적하고 프로젝트별 명세·도구·권한의 연결을 분리한다.
- **C++ Vision Bridge:** N/A — 독립 C++ 전이 장을 삭제했다. 프로젝트별 명세·도구 연결의 일반 원리만 설명한다.
- **Speaker Intent:** S72에서 본 Harness를 같은 시각 모듈로 압축한 뒤 프로젝트 A/B/C 안에 반복해 배치한 부분을 짚는다. 공통 수행 틀을 다음 프로젝트의 출발점으로 쓸 수 있다는 한 가지 가치를 설명한다. 전체 구성의 자동 이식이나 검증 완료로 해석하지 않고 프로젝트별 명세·도구·권한을 연결하는 책임은 유지한다. 이어 S74에서 한 프로젝트 안의 여러 작업자가 그 기준을 공유하는 가치를 회수한다. ACT4의 반복 수정·후속 평가를 먼저 설명하지 않는다.
- **Transition:** “그 기반을 한 프로젝트 안에서 여러 사람이 함께 쓰면 무엇을 같게 유지해야 할까요?”
- **Estimated Time:** 2분
- **Delivery Mode Allocation:** Lecture 2분 = 2분
- **Evidence / Decision References:** DEC-0091; DEC-0023, BEAT-035, BEAT-036, INV-NARRATIVE-001, DEC-0134
- **Audience Footer:** 없음 — M 연계 표시는 유지

#### S74 — 누가 작업하더라도 프로젝트 기준은 같게

- **Slide ID:** S74
- **ACT:** ACT 3
- **Section:** 3G Minimum Effective Harness 완성
- **Working Title:** 누가 작업하더라도 프로젝트 기준은 같게
- **Primary Role:** 재사용한 Harness를 한 프로젝트의 여러 작업자와 각자의 AI가 공통으로 참조할 기준에 연결하고, 일하는 사람에 따른 설명·절차·완료 판단의 편차를 줄이려는 설계 가치를 설명한다.
- **Audience Question:** “같은 프로젝트인데 작업하는 사람마다 전달하는 조건과 확인 기준이 달라지면 어떨까요?”
- **Core Message:** 작업자와 AI의 접근 방법은 달라도, 프로젝트 명세·제약·재사용 절차·검증 기준을 공통 Harness로 공유해 같은 기준 안에서 작업하도록 설계한다.
- **Story Beat:** BEAT-035, BEAT-036
- **Curriculum Trace:** ACT 3 — reusable Harness foundation, project bindings, and execution-condition literacy. Existing Section/Beat identities retained.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** TEACHING MODEL — 공통 틀과 프로젝트별 조건을 나누는 설계다. 전체 Harness를 그대로 복사하면 작동한다는 보장·이식 성공·절감 측정은 없다.
- **Visual Concept:** 좌우 전후 설계 비교의 제목·작업자 A/B/C와 각자의 AI·오른쪽 공통 Harness는 유지한다. 왼쪽만 세 가상 경로로 구체화한다. A는 꼬불꼬불 우회하다 “검증 기준” 경계에 도달하고 “우회해서 도달”로 표시한다. B는 검증 경계 전에 끊기거나 멈추며 “검증 전 중단”으로 표시한다. C는 “기존 동작” 도식에 부딪히는 경로와 “기존 동작 훼손 위험”을 표시한다. 실제 로그·코드 파손이나 실패 실험이 아닌 조건부 TEACHING_MODEL이다. 오른쪽은 명세·제약/수행 절차/검증 기준을 공유하는 분리된 세 경로와 결과를 그대로 유지하고, 자동 준수·동일 코드·필수 실패·측정 성과를 주장하지 않는다. 실제 명령·도구·권한·실행 조건을 맞춰 연결할 책임은 Notes에 보존한다.
- **Demo / Case Connection:** N/A — 공통 기준을 두는 사용 전후의 교육용 설계 비교다. 실제 사람/Agent의 반복 실행·비교 실험, 이식 성공 또는 편차 감소를 측정한 결과가 아니다.
- **Beginner Payoff:** 사람마다 같은 프로젝트의 기준을 다시 설명하던 부담을 공통 작업 체계로 옮기는 이유를 이해한다.
- **Advanced Payoff:** 작업자별 자율적인 접근과 공통 명세·제약·검증 기준을 분리한다. 공통 기준은 프로젝트별 실제 명령·도구·권한·실행 조건과 연결하며, 사람의 검토 책임과 서로 다른 결과물을 유지한다.
- **C++ Vision Bridge:** N/A — 독립 C++ 전이 장을 삭제했다. 프로젝트별 명세·도구 연결의 일반 원리만 설명한다.
- **Speaker Intent:** S73의 재사용 가치에서 한 프로젝트의 공통 기준으로 이어진다. 왼쪽의 우회 도달·검증 전 중단·기존 동작 훼손 위험을 세 가상 장면으로 짧게 짚고 오른쪽의 공통 기준과 분리된 작업 경로를 비교한다. 실제 사고·비교 실험이나 Harness 부재의 필수 실패, 공통 Harness의 자동 준수로 설명하지 않는다. 기존 2분 설명과 같은 화면에서의 Harness Q&A 5분을 마친 뒤, S75에서 공통 기준과 도구가 준비된 팀의 점심 전후를 살펴본다.
- **Transition:** Harness Q&A를 마치고 “점심 먹으러 가기 전에 구현과 테스트를 맡겼다면, 돌아와서 무엇을 보고 싶으세요?”라고 묻는다.
- **Estimated Time:** 7분
- **Delivery Mode Allocation:** Lecture 2분 + Q&A 5분 = 7분
- **Evidence / Decision References:** DEC-0091; DEC-0023, BEAT-035, BEAT-036, INV-NARRATIVE-001, DEC-0134, DEC-0135, DEC-0136, DEC-0141; Q&A operation lineage: previous118 S79 / Section3I / BEAT-073
- **Audience Footer:** 프로젝트 적용 예시

#### S75 — 점심 먹고 왔는데, 계획만 와 있었다

- **Slide ID:** S75
- **ACT:** ACT 3
- **Section:** 3G Minimum Effective Harness 완성
- **Working Title:** 점심 먹고 왔는데, 계획만 와 있었다
- **Primary Role:** 실행을 맡겼는데 계획 단계에서 일이 멈춘 상황을 한 장에 담아, 청중이 작업의 다음 단계를 누가 시작하는지 생각하게 한다.
- **Audience Question:** 내가 기대한 수정 결과 대신, 이미 맡긴 구현을 시작하겠느냐는 질문이 남았다면?
- **Core Message:** 개발자는 수정과 테스트까지 요청하고 자리를 비웠다. 돌아와 보니 계획과 구현 시작 여부를 되묻는 답이 기다리고 있다.
- **Story Beat:** BEAT-073 — 사람이 이미 요청한 다음 단계를 다시 시작시켜야 하는 상황
- **Curriculum Trace:** ACT3의 기반 구성·재사용을 마친 뒤 ACT4의 단일 목표 수행으로 전환한다. 기존 Section3G와 BEAT-073을 사용한다. 이전118장판 S77–S81의 lineage이며 이전 S79의 Q&A5분은 S74로 이동하고 Reflection3분은 제거한다.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** TEACHING MODEL — 점심 전후를 가정해 쓴 대화다. 특정 제품의 실제 응답, 실행 기록, 지연 시간 또는 Harness의 실패를 보여주는 근거는 없다.
- **Visual Concept:** 두 대화창을 좌우에 둔다. 왼쪽은 ‘점심 먹으러 가기 전’과 “밝기 통계의 임시 메모리를 줄여줘. 수정하고 테스트까지 돌려줘.”다. 오른쪽은 ‘점심 먹고 돌아온 뒤’와 “수정할 위치와 검증 계획을 정리했습니다. 이대로 구현을 시작할까요?”다. “수정하고 테스트까지 돌려줘”와 “이대로 구현을 시작할까요?”를 같은 높이에서 크게 대비한다. ‘공통 Harness · 팀 지침과 검증 도구 준비됨’은 왼쪽에 작게 붙인다. 시선은 오른쪽 빈 입력란의 커서에서 끝난다. DEC-0184: “ACT 3 → ACT 4 · 교육용 대화 예시”를 “ACT 3 → ACT 4 · 점심 전후의 대화”로 간략화한다. 본문·도식·수치·시간·근거 범위와 Notes는 유지한다.
- **Demo / Case Connection:** 밝기 통계 맥락을 빌린 교육용 대화 예시. 새로운 Trial·제품 캡처나 실행 결과는 없다.
- **Beginner Payoff:** 돌아와 결과를 확인하려던 개발자가 왜 한 번 더 “시작해”라고 말해야 하는지 이해한다.
- **Advanced Payoff:** 이미 맡긴 구현을 재확인하는 상황과, 요구 충돌이나 권한 변경 때문에 사람이 새로 판단해야 하는 상황을 구별한다.
- **C++ Vision Bridge:** N/A — 새 구현 사례나 제품/언어별 조건은 추가하지 않는다.
- **Speaker Intent:** 점심 전 요청에서 수정과 테스트까지 맡긴 범위를 짚는다. 점심 후 답변은 마지막 질문에서 멈춰 읽는다. 별도의 Harness 설명이나 세 검증 항목은 여기서 펼치지 않는다.
- **Transition:** 오른쪽 입력란이 비어 있는 채로 S76로 넘긴다. S77에서 검토 후에도 사람이 다음 수정을 다시 요청하는 장면을 본다.
- **Estimated Time:** 2분
- **Delivery Mode Allocation:** Transition 2분 = 2분
- **Evidence / Decision References:** DEC-0148, DEC-0147 (이전 S75 배치), DEC-0146, DEC-0136; DEC-0023; BEAT-073; INV-LOOP-001; INV-VERIFY-001. Source slide lineage: previous118 S77/S78/S79/S80/S81; prior Section3G/3I operation records retained in history.; DEC-0184
- **Audience Footer:** 없음 — 상단은 점심 전후의 대화로 표시하고 하단은 M 연계만 유지한다. 교육용 가정·실제 실행과의 구분은 Notes에 보존한다. DEC-0184.

### ACT 4 — 19 slides / 71 minutes

#### S76 — 목표를 이룰 때까지 수정하고 검토하기

- **Slide ID:** S76
- **ACT:** ACT 4
- **Section:** 4R1 Goal-loop entry
- **Working Title:** 목표를 이룰 때까지 수정하고 검토하기
- **Primary Role:** ACT4의 범위를 밝히고, 한 번 맡긴 일이 첫 결과에서 멈추는 상황을 예고한다.
- **Audience Question:** 목표와 검토 기준을 정했는데도 왜 일이 첫 결과에서 멈출 수 있을까?
- **Core Message:** 같은 목표가 여전히 남아 있어도 검토 후의 다음 동작은 따로 시작해야 할 수 있다.
- **Story Beat:** BEAT-072
- **Curriculum Trace:** ACT 4 / 4R1 Goal-loop entry · DEC-0146
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** TEACHING MODEL — 같은 목표 안의 수정·검토를 교육의 운영 정의로 제시한다.
- **Visual Concept:** 기존 ACT 제목 레이아웃을 유지한다. 부제에서 첫 결과 이후의 멈춤을 예고한다.
- **Demo / Case Connection:** S75의 질문에서 S77의 밝기 통계 수동 인계 장면으로 전환
- **Beginner Payoff:** 한 작업의 첫 결과와 목표가 달성된 결과의 차이에 주목한다.
- **Advanced Payoff:** 작업 단위의 완료 여부와 후보 생성 한 번의 종료를 분리해 본다.
- **C++ Vision Bridge:** N/A — 이 장은 별도 C++ 사례를 다루지 않는다.
- **Speaker Intent:** 표지에서는 답을 제시하지 않는다. 점심 뒤 비어 있던 입력란에 개발자가 어떤 답을 했는지 다음 장에서 확인한다.
- **Transition:** “이대로 구현을 시작할까요?”라는 질문에 개발자가 답한 뒤, 첫 수정안까지 따라가 보자.
- **Estimated Time:** 1분
- **Delivery Mode Allocation:** Transition 1분 = 1분
- **Evidence / Decision References:** DEC-0149, DEC-0146, DEC-0145, DEC-0097, BEAT-072, CLM-0021
- **Audience Footer:** 기존 ACT 제목 표기
- **ACT Subtitle:** Loop Engineering · 한 번 맡긴 일이 첫 결과에서 멈추는 순간
- **ACT Display Title:** 목표를 이룰 때까지 / 수정하고 검토하기

#### S77 — 시작하라고 답했다. 그런데 한 번 더 내가 필요했다

- **Slide ID:** S77
- **ACT:** ACT 4
- **Section:** 4R1 Goal-loop entry
- **Working Title:** 시작하라고 답했다. 그런데 한 번 더 내가 필요했다
- **Primary Role:** 점심 뒤 계획에서 구현으로 넘어가는 답과, 첫 구현을 검토한 뒤 사람이 다시 수정을 시작시키는 지점을 한 작업 안에서 구분한다.
- **Audience Question:** 이미 “시작해”라고 답했는데, 첫 후보를 본 뒤 왜 내가 다시 요청할까?
- **Core Message:** 개발자는 구현을 시작시키고, 같은 목표에서 발견된 문제를 다음 수정에 넘기는 일도 맡는다.
- **Story Beat:** BEAT-073
- **Curriculum Trace:** ACT 4 / 4R1 Goal-loop entry · DEC-0149
- **Evidence Type:** CONCEPTUAL
- **Claim Status:** CONCEPTUAL CASE — 사람이 검토 지적을 옮겨 재요청하는 밝기 통계 예시. 실제 반복 횟수나 소요 시간, 개선 효과는 측정하지 않았다.
- **Visual Concept:** 상단에 S75의 질문 “이대로 구현을 시작할까요?”와 답 “응, 시작해.”를 이어 붙인다. 아래에서는 전체 픽셀 복사가 남았다는 첫 구현의 검토 지적을 보고 개발자가 복사를 없애고 재확인해 달라고 다시 입력한다. 요청 입력 부분은 기존 Mac 스타일의 제목 막대·세 색상 표시·밝은 본문·둥근 테두리로 통일한다. 문장·강조·앞뒤 관계는 보존하며 [공통 적용 범위](MAC_PROMPT_STYLE_AUDIT.md)를 따른다.
- **Demo / Case Connection:** CASE-LOOP-01 · 밝기 통계 교육용 재구성
- **Beginner Payoff:** 개발자가 같은 일을 계속하라는 신호를 보내는 모습을 알아본다.
- **Advanced Payoff:** 새 요구사항을 정해야 하는 판단과 이미 승인한 목표의 단순 재개를 구분한다.
- **C++ Vision Bridge:** N/A — 이 장은 별도 C++ 사례를 다루지 않는다.
- **Speaker Intent:** S75의 마지막 질문에 대한 짧은 답을 읽고 첫 구현으로 건너간다. 전체 픽셀 복사 지적을 받은 뒤 누가 다음 요청을 입력했는지 짚는다. 점심 전 요청을 다른 문장으로 재인용하지 않는다.
- **Transition:** 이제 같은 첫 검토 순간으로 돌아가서, 개발자가 다시 입력하던 자리에 무엇을 연결할지 본다.
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Lecture 2분 + Case 2분 = 4분
- **Evidence / Decision References:** DEC-0149, DEC-0146, DEC-0145, DEC-0097, BEAT-073, CASE-LOOP-01, CLM-0021; DEC-0179
- **Audience Footer:** 밝기 통계 사례 · 교육용 재구성

#### S78 — 같은 검토 결과가 다음 수정을 시작한다

- **Slide ID:** S78
- **ACT:** ACT 4
- **Section:** 4R1 Goal-loop entry
- **Working Title:** 같은 검토 결과가 다음 수정을 시작한다
- **Primary Role:** S77의 검토 지적을 루프에 전달하는 대안 경로를 같은 장면에서 비교한다.
- **Audience Question:** 같은 지적이 사람의 재지시 없이 다음 수정을 시작하려면 무엇을 연결할까?
- **Core Message:** 검토 지적을 다음 구현으로 보내고 같은 기준으로 재검토한다. 근거가 충족되면 마치고, 고칠 문제가 남으면 다시 수정한다.
- **Story Beat:** BEAT-077, BEAT-078, BEAT-079
- **Curriculum Trace:** ACT 4 / 4R1 Goal-loop entry · DEC-0149
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** TEACHING MODEL — 재수정과 완료에 필요한 근거를 설명하는 제어 흐름이다. 그림 속 후보의 기준 충족 여부나 실제 제품의 자율 완수를 관찰한 결과는 없다.
- **Visual Concept:** 같은 검토 장면을 루프로 다시 본다는 점을 먼저 밝힌다. S77의 지적 카드는 문구·위치·색을 유지한다. 지적을 행별 집계 수정으로 보내고 수정안을 같은 기준으로 재검토한다. 근거가 충족된 경로와 문제가 남아 다시 수정하는 경로를 표시한다.
- **Demo / Case Connection:** CASE-LOOP-01을 이용한 조건부 순환도
- **Beginner Payoff:** 같은 문제를 보고도 사람이 다시 지시하는 장면과 검토 결과가 수정을 시작하는 장면을 비교한다.
- **Advanced Payoff:** 수정 횟수와 관계없이 목표와 완료 기준을 유지한다. 근거를 얻을 수 없는 경우의 미완료 인계는 S83에서 다룬다.
- **C++ Vision Bridge:** N/A — 이 장은 별도 C++ 사례를 다루지 않는다.
- **Speaker Intent:** S77 뒤에 수정이 한 번 더 발생한 것으로 읽히지 않도록 같은 시점의 대안이라고 밝힌다. 지적 카드를 고정하고 사람의 입력 대신 수정과 재검토로 이어지는 선을 따라간다.
- **Transition:** 같은 지적을 사람이 다시 요청할 때와 루프가 이어받을 때, 다음 행동과 전달할 정보는 어떻게 달라질까?
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Lecture 3분 + Case 1분 = 4분
- **Evidence / Decision References:** DEC-0149, DEC-0146, DEC-0145, DEC-0097, BEAT-077, BEAT-078, BEAT-079, CASE-LOOP-01, CLM-0021
- **Audience Footer:** 본문 하단의 사례 설명은 생략한다. 교육용 재구성의 근거와 한계는 발표 Notes에 둔다.

#### S79 — 기존 프롬프팅과 루프 엔지니어링

- **Slide ID:** S79
- **ACT:** ACT 4
- **Section:** 4R2 One-goal walkthrough
- **Working Title:** 기존 프롬프팅과 루프 엔지니어링
- **Primary Role:** S77의 사람 주도 재요청과 S78의 검토 기반 반복을 한 작업의 두 진행 방식으로 비교한다.
- **Audience Question:** 누가 다음 단계를 시작하고, 어떤 정보와 결과를 넘기는가?
- **Core Message:** 다음 지시를 사람이 이어가는 대화와, 목표에 따라 구현·검증이 서로 점검하고 외부 파일에 기록한 작업 지식을 다시 쓰는 루프를 비교한다.
- **Story Beat:** BEAT-073, BEAT-077, BEAT-078, BEAT-079
- **Curriculum Trace:** ACT 4 / 4R2 One-goal walkthrough · DEC-0151, DEC-0153
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** TEACHING MODEL — 세션 안에만 둔 맥락과 외부 파일에 명시적으로 남긴 기록의 대비다. 개인 역량에 따른 편차와 독립 작업의 병렬 운용은 설계상 설명이며, 채팅 이력 삭제나 품질·속도의 실측을 뜻하지 않는다.
- **Visual Concept:** 기존 프롬프팅과 루프 엔지니어링을 짧은 구로 대비하는 편집 가능한 3열 표. 첫 행의 이름은 “진행 주체”다. 사람이 매번 다음 지시 / 목표와 기준에 따라 루프 진행, 세션 한정 맥락 / 외부 파일에 축적·재사용, 사람의 오류 확인·수정 지시 / 구현·검증의 교차 점검, 개인 역량에 따른 결과 편차 / 작업 지식의 자산화와 독립 작업 병렬 실행을 네 행에 둔다.
- **Demo / Case Connection:** CASE-LOOP-01 · S77와 S78이 같은 밝기 통계 지적을 전달한 두 방식. 표는 교육용 정리다.
- **Beginner Payoff:** 검토 뒤 사람이 다시 지시하는 경우와 같은 검사 결과가 다음 회차를 시작하는 경우를 구분한다.
- **Advanced Payoff:** 구현·검증 역할은 서로의 결과를 점검한다. 외부 파일에 누적한 작업 지식을 다시 쓰고, 의존성이 분리된 작업을 병렬로 실행할 수 있다.
- **C++ Vision Bridge:** N/A — 같은 밝기 통계 예시의 두 작업 방식에 집중한다.
- **Speaker Intent:** 양쪽 모두 사람이 목표와 기준을 정한다. 세션에서만 사용한 작업 맥락, 두 역할의 교차 점검, 파일로 남긴 지식의 재사용을 구체적으로 짚는다. 결과 편차는 정성적 예시로 설명한다.
- **Transition:** 검토 결과로 다음 행동을 이어가려면 어떤 역할을 연결할까?
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Lecture 2분 + Case 2분 = 4분
- **Evidence / Decision References:** DEC-0153, DEC-0151, DEC-0149, BEAT-074, BEAT-073, BEAT-077, BEAT-078, BEAT-079, CASE-LOOP-01, CLM-0021
- **Audience Footer:** 없음. 비교 범위와 출처는 발표 Notes에 둔다.

#### S80 — 루프를 구성하는 여섯 가지 요소

- **Slide ID:** S80
- **ACT:** ACT 4
- **Section:** 4R2 One-goal walkthrough
- **Working Title:** 루프를 구성하는 여섯 가지 요소
- **Primary Role:** 한 목표의 구현·검토·수정을 연결할 때 작업에 맞게 선택할 여섯 역할을 제시한다.
- **Audience Question:** 무엇이 작업을 시작하고, 어디서 무엇을 수행하며, 다음 회차는 어떤 기록을 이어받을까?
- **Core Message:** 오토메이션은 시작 조건을, 워크트리는 작업별 공간을, 스킬은 반복 절차를 맡는다. 커넥터로 외부 자료를 연결하고 서브에이전트에 검토를 맡길 수 있으며 상태/메모리로 다음 실행에 필요한 근거를 남긴다.
- **Story Beat:** BEAT-051
- **Curriculum Trace:** ACT 4 / 4R2 One-goal walkthrough · DEC-0167, DEC-0154, DEC-0152
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** TEACHING MODEL — 작업에 필요한 역할을 선택하는 교육용 설계다. 여섯 요소의 필수성, graypipe에서 모두 실행된 이력, 특정 제품·계정의 기능 가용성을 주장하지 않는다.
- **Visual Concept:** 3열×2행에 시계, 브랜치, 체크리스트, 플러그, 사람들, 기록장의 Lucide 아이콘을 한 이미지씩 둔다. 얇은 구분선으로 여섯 역할을 나누고, 역할별 강조색과 이름·한 줄 설명을 유지한다.
- **Demo / Case Connection:** 정적 설계 예시. CASE-LOOP-01의 검사·검토 인계에 필요한 역할을 구분한다. S86에서 실제 GitLab 사례를 소개한다.
- **Beginner Payoff:** 언제 시작할지, 어디서 수정할지, 무엇을 기억할지를 구체적인 도구 역할에 연결한다.
- **Advanced Payoff:** 작업 디렉터리와 위임 범위, 외부 연결 권한, 회차 사이에 남길 정보의 범위를 별도로 정한다.
- **C++ Vision Bridge:** N/A — 언어와 제품에 독립적인 역할 구성.
- **Speaker Intent:** 윗줄의 세 역할에서 시각·이벤트, 같은 저장소의 별도 디렉터리, 반복 검사 절차를 읽는다. 아랫줄의 세 역할은 이슈·검토 결과 게시, 위임한 검토의 회수, 마지막 후보·검사·남은 일의 인계로 설명한다.
- **Transition:** 여섯 역할 중 필요한 것을 골랐다면, 한 작업에서 언제 무엇을 하고 어떤 결과를 다음 단계에 넘길까?
- **Estimated Time:** 5분
- **Delivery Mode Allocation:** Lecture 2분 + Case 3분 = 5분
- **Evidence / Decision References:** DEC-0167, DEC-0154, DEC-0152, DEC-0151, BEAT-051, INV-LOOP-001, CLM-0021
- **Audience Footer:** 별도 근거 문구 없음. M 연계는 신규 확장으로 표시한다.

#### S81 — 목표에서 인계까지, 루프의 8단계

- **Slide ID:** S81
- **ACT:** ACT 4
- **Section:** 4R2 One-goal walkthrough
- **Working Title:** 목표에서 인계까지, 루프의 8단계
- **Primary Role:** 여덟 단계를 한 작업의 경로로 읽고 다시 구현하는 지점과 결과를 넘기는 지점을 찾는다.
- **Audience Question:** 검토에서 문제가 남으면 어디로 돌아가고, 완료하거나 막히면 어디로 갈까?
- **Core Message:** 목표·현황·계획을 정한 뒤 구현, 실행 검증, 독립 검토의 근거로 다음 행동을 고른다. 보완이면 구현부터 다시 수행한다. 완료하거나 막히면 결과와 미실행 사항을 정리해 사람에게 넘긴다.
- **Story Beat:** BEAT-074, BEAT-075, BEAT-076, BEAT-077, BEAT-078, BEAT-079
- **Curriculum Trace:** ACT 4 / 4R2 One-goal walkthrough · DEC-0155, DEC-0157
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** TEACHING MODEL — 사용자 제공 개발 워크플로우의 설계도다. 실행된 여덟 단계, 측정 결과, 필수 도구 또는 자동 완료를 뜻하지 않는다.
- **Visual Concept:** 제목 아래 여백을 늘려 흐름도 전체를 내려 배치한다. 노드·라벨·화살표를 함께 옮겨 기존 연결을 유지한다. 1–3에서 목표와 범위, 현재 상태, 계획과 환경을 준비한다. 4–7의 구현 → 실행 검증 → 독립 검토 → 다음 행동 판단을 중앙에 놓고 보완 화살표를 7에서 4로 되돌린다. 완료·중단은 8의 결과 인계로 연결한다. 화면에는 단계 이름과 경로를 표시하고, 단계별 활동과 산출물은 발표 Notes와 기획 원문표에 둔다.
- **Demo / Case Connection:** 사용자가 제공한 정적 작업 절차를 읽는다. 이어 S82에서 이 절차와 GitLab 작업의 네 구간을 연결한다.
- **Beginner Payoff:** 실행 검증의 산출물은 빌드·테스트·벤치마크 기록이고, 독립 검토의 산출물은 요구사항 누락·회귀 가능성·테스트 부족에 대한 의견임을 구별한다.
- **Advanced Payoff:** Worktree와 Subagent는 필요할 때 준비한다. 목표와 제약을 유지한 보완 경로와, 확인할 사항을 적어 사람에게 넘기는 중단 경로를 구분한다.
- **C++ Vision Bridge:** N/A — 언어와 도구에 독립적인 개발 워크플로우.
- **Speaker Intent:** 준비 구간을 한 번 짚고 검토 지적 하나를 7→4→5→6→7로 따라간다. 8에서 완료 근거를 건네는 경우와 중단 사유·미실행 항목·후속 작업을 건네는 경우를 말로 구분한다.
- **Transition:** 목표·검토·인계의 여덟 단계를 GitLab 이슈 한 건에 적용하면 어떤 팀 작업으로 나뉠까?
- **Estimated Time:** 5분
- **Delivery Mode Allocation:** Lecture 1분 + Case 4분 = 5분
- **Evidence / Decision References:** DEC-0155, DEC-0157, DEC-0152, BEAT-074–079, INV-LOOP-001, INV-VERIFY-001
- **Audience Footer:** N/A — 정적 교육용 작업 흐름.
- **Practical Tip Classification:** 검증·개선

#### S82 — 8단계를 GitLab 작업 12단계로 옮기면

- **Slide ID:** S82
- **ACT:** ACT 4
- **Section:** 4R2 GitLab workflow overview
- **Working Title:** 8단계를 GitLab 작업 12단계로 옮기면
- **Primary Role:** 단계 개수는 팀이 남겨야 할 산출물에 따라 달라진다.
- **Audience Question:** 한 목표가 GitLab의 어떤 산출물로 이어질까?
- **Core Message:** 8단계의 목표·검토·인계를 한 팀의 GitLab 흐름에 대입하면 요청 준비, 이슈 등록, 구현·테스트, 병합 요청의 네 구간으로 나눌 수 있다.
- **Story Beat:** BEAT-074, BEAT-077, BEAT-088
- **Curriculum Trace:** ACT 4 / 4R2 GitLab workflow overview · DEC-0156
- **Evidence Type:** CONCEPTUAL
- **Claim Status:** CONCEPTUAL CASE — 제공 PDF의 GitLab 설계 예시. 팀 운영 표준의 승인, 실제 실행, 자동 병합 또는 개선율은 확인하지 않았다.
- **Visual Concept:** 12개 작업을 네 구간으로 묶는다. 하단 문구로 구현·테스트 반복을 예고하고 S86에서 복귀선을 그린다.
- **Demo / Case Connection:** Loop Engineering Systems p.4에서 각색한 발표용 도식. 정적 사례로 설명한다.
- **Beginner Payoff:** 단계를 지나며 무엇이 생기는지 작업 공간, 이슈, 검증 기록, 병합 요청의 순서로 말할 수 있다.
- **Advanced Payoff:** GitLab에 등록하는 일과 코드 병합을 승인하는 일을 분리한다.
- **C++ Vision Bridge:** N/A — 이 장은 언어에 독립적인 작업 운영을 다룬다.
- **Speaker Intent:** 단계 개수는 팀이 남겨야 할 산출물에 따라 달라진다. S81의 검토와 인계가 어느 위치에 나타나는지 찾는다.
- **Transition:** 어느 단계에 어떤 도구를 연결할까?
- **Estimated Time:** 5분
- **Delivery Mode Allocation:** Lecture 1분 + Case 4분 = 5분
- **Evidence / Decision References:** DEC-0156, SRC-0246, CLM-0050
- **Audience Footer:** N/A — 화면의 맥락에서 사례 또는 설계 유형을 밝힌다.

#### S83 — 어느 단계에 어떤 도구를 연결할까?

- **Slide ID:** S83
- **ACT:** ACT 4
- **Section:** 4R3 Component selection
- **Working Title:** 어느 단계에 어떤 도구를 연결할까?
- **Primary Role:** 커넥터 행에서 7단계 이슈 등록과 12단계 MR 등록을 찾는다. 성찰에서는 다른 한 단계에 필요한 역할을 고른다.
- **Audience Question:** 어느 단계에 어떤 도구를 연결할까?
- **Core Message:** 이슈 등록(7단계)과 병합 요청 등록(12단계)은 모두 외부 시스템에 결과를 남기므로 커넥터를 쓴다. 다른 단계도 남길 결과를 보고 도구를 고른다.
- **Story Beat:** BEAT-051, BEAT-087, BEAT-088
- **Curriculum Trace:** ACT 4 / 4R3 Component selection · DEC-0156
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** TEACHING MODEL — 제공 자료의 설계 판단을 설명한다. 조직 정책, 실제 실행 사건이나 제품의 통제 기능을 검증한 결과가 아니다.
- **Visual Concept:** 12개 단계와 여섯 역할의 교차표를 읽는다. 예로 커넥터의 점 두 개를 따라 7단계 이슈 등록과 12단계 MR 등록을 짚는다.
- **Demo / Case Connection:** Loop Engineering Systems p.5에서 각색한 발표용 도식. 정적 사례로 설명한다.
- **Beginner Payoff:** 빈 칸을 채울 필요 없이 특정 단계에 필요한 역할을 고른다.
- **Advanced Payoff:** 같은 도구를 여러 단계에 연결하는 근거와 도구를 뺄 조건을 짚는다.
- **C++ Vision Bridge:** N/A — 이 장은 언어에 독립적인 작업 운영을 다룬다.
- **Speaker Intent:** 커넥터 행에서 7단계 이슈 등록과 12단계 MR 등록을 찾는다. 성찰에서는 다른 한 단계에 필요한 역할을 고른다.
- **Transition:** 먼저 요청을 분류하고 작업 공간을 분리한다
- **Estimated Time:** 5분
- **Delivery Mode Allocation:** Lecture 3분 + Reflection 2분 = 5분
- **Evidence / Decision References:** DEC-0156, SRC-0246, CLM-0050
- **Audience Footer:** N/A — 화면의 맥락에서 사례 또는 설계 유형을 밝힌다.
- **Practical Tip Classification:** 검증·개선

#### S84 — 먼저 요청을 분류하고 작업 공간을 분리한다

- **Slide ID:** S84
- **ACT:** ACT 4
- **Section:** 4R4 Request and issue preparation
- **Working Title:** 먼저 요청을 분류하고 작업 공간을 분리한다
- **Primary Role:** 접수한 요청, 읽어야 할 근거, 코드 변경을 둘 위치를 차례로 가리킨다.
- **Audience Question:** 이 요청은 어디에서 조사하고 구현할까?
- **Core Message:** 요청의 범위와 GitLab 흐름 적용 여부를 판단하고 기존 코드·지침·상태를 확인한 뒤 기준 브랜치에서 이슈 전용 작업 공간을 만든다.
- **Story Beat:** BEAT-074, BEAT-075, BEAT-087
- **Curriculum Trace:** ACT 4 / 4R4 Request and issue preparation · DEC-0156
- **Evidence Type:** CONCEPTUAL
- **Claim Status:** CONCEPTUAL CASE — 제공 PDF의 GitLab 설계 예시. 팀 운영 표준의 승인, 실제 실행, 자동 병합 또는 개선율은 확인하지 않았다.
- **Visual Concept:** ① 요청 분류 ② 사전 조사 ③ 브랜치와 워크트리 준비. 공통 기준점에서 분리한 작업 공간을 표시한다.
- **Demo / Case Connection:** Loop Engineering Systems p.6에서 각색한 발표용 도식. 정적 사례로 설명한다.
- **Beginner Payoff:** 어느 이슈의 변경인지 작업 공간에서 구분할 수 있다.
- **Advanced Payoff:** 워크트리 분리로 해결할 범위와 별도로 설정해야 할 실행 권한을 구별한다.
- **C++ Vision Bridge:** N/A — 이 장은 언어에 독립적인 작업 운영을 다룬다.
- **Speaker Intent:** 접수한 요청, 읽어야 할 근거, 코드 변경을 둘 위치를 차례로 가리킨다.
- **Transition:** 이슈 문서는 작성과 검증을 나눠 등록한다
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Lecture 3분 + Case 1분 = 4분
- **Evidence / Decision References:** DEC-0156, SRC-0246, CLM-0050
- **Audience Footer:** N/A — 화면의 맥락에서 사례 또는 설계 유형을 밝힌다.

#### S85 — 이슈 문서는 작성과 검증을 나눠 등록한다

- **Slide ID:** S85
- **ACT:** ACT 4
- **Section:** 4R4 Request and issue preparation
- **Working Title:** 이슈 문서는 작성과 검증을 나눠 등록한다
- **Primary Role:** 누락된 필드가 있으면 등록 전에 작성 단계로 넘긴다.
- **Audience Question:** 확인되지 않은 초안이 이슈로 등록되는 것을 어떻게 막을까?
- **Core Message:** 이슈 문서 초안을 별도 관점으로 확인하고 문서만 커밋한 뒤 이슈를 등록한다.
- **Story Beat:** BEAT-076, BEAT-088
- **Curriculum Trace:** ACT 4 / 4R4 Request and issue preparation · DEC-0156
- **Evidence Type:** CONCEPTUAL
- **Claim Status:** CONCEPTUAL CASE — 제공 PDF의 GitLab 설계 예시. 팀 운영 표준의 승인, 실제 실행, 자동 병합 또는 개선율은 확인하지 않았다.
- **Visual Concept:** ④ 작성 → ⑤ 검증 → ⑥ 문서 단독 커밋 → ⑦ 이슈 등록. 작성자·검토자와 등록 커넥터를 구분한다.
- **Demo / Case Connection:** Loop Engineering Systems p.7에서 각색한 발표용 도식. 정적 사례로 설명한다.
- **Beginner Payoff:** 이슈 등록 전에 검토할 수 있는 문서가 먼저 생긴다는 점을 이해한다.
- **Advanced Payoff:** 템플릿 형식 확인과 내용의 정확성 검토를 구별한다.
- **C++ Vision Bridge:** N/A — 이 장은 언어에 독립적인 작업 운영을 다룬다.
- **Speaker Intent:** 누락된 필드가 있으면 등록 전에 작성 단계로 넘긴다. 등록 후 남는 것은 추적 가능한 이슈다.
- **Transition:** 작은 변경마다 구현과 테스트를 반복한다
- **Estimated Time:** 5분
- **Delivery Mode Allocation:** Lecture 3분 + Case 2분 = 5분
- **Evidence / Decision References:** DEC-0156, SRC-0246, CLM-0050
- **Audience Footer:** N/A — 화면의 맥락에서 사례 또는 설계 유형을 밝힌다.

#### S86 — 작은 변경마다 구현과 테스트를 반복한다

- **Slide ID:** S86
- **ACT:** ACT 4
- **Section:** 4R5 Implementation, review and state
- **Working Title:** 작은 변경마다 구현과 테스트를 반복한다
- **Primary Role:** 한 지적과 관련 테스트가 다음 수정으로 이어지는 길을 따라간다.
- **Audience Question:** 테스트에서 문제가 드러나면 무엇이 다음 수정에 전달될까?
- **Core Message:** 격리된 작업 공간에서 작은 변경을 구현하고 테스트 결과나 검토 지적을 같은 변경의 다음 수정에 전달한다.
- **Story Beat:** BEAT-075, BEAT-076, BEAT-077, BEAT-078, BEAT-079
- **Curriculum Trace:** ACT 4 / 4R5 Implementation, review and state · DEC-0156
- **Evidence Type:** CONCEPTUAL
- **Claim Status:** CONCEPTUAL CASE — 제공 PDF의 GitLab 설계 예시. 팀 운영 표준의 승인, 실제 실행, 자동 병합 또는 개선율은 확인하지 않았다.
- **Visual Concept:** ⑧ 구현과 ⑨ 테스트를 복귀선으로 연결하고 완료 기준을 갖춘 후보만 밖으로 보낸다.
- **Demo / Case Connection:** Loop Engineering Systems p.8에서 각색한 발표용 도식. 정적 사례로 설명한다.
- **Beginner Payoff:** 언제 다시 수정하고 언제 다음 단계로 가는지 설명한다.
- **Advanced Payoff:** 동작 테스트 통과와 전체 목표 충족을 구분하고 누락된 근거를 확인한다.
- **C++ Vision Bridge:** N/A — 이 장은 언어에 독립적인 작업 운영을 다룬다.
- **Speaker Intent:** 한 지적과 관련 테스트가 다음 수정으로 이어지는 길을 따라간다. 한도를 만나면 미완료 사항을 남긴다.
- **Transition:** 변경과 근거를 묶어 병합 요청을 올린다
- **Estimated Time:** 5분
- **Delivery Mode Allocation:** Lecture 2분 + Case 3분 = 5분
- **Evidence / Decision References:** DEC-0156, SRC-0246, CLM-0050
- **Audience Footer:** N/A — 화면의 맥락에서 사례 또는 설계 유형을 밝힌다.

#### S87 — 변경과 근거를 묶어 병합 요청을 올린다

- **Slide ID:** S87
- **ACT:** ACT 4
- **Section:** 4R5 Implementation, review and state
- **Working Title:** 변경과 근거를 묶어 병합 요청을 올린다
- **Primary Role:** 문서 커밋과 실제 MR 등록 결과를 구분하고 병합 승인 책임을 확인한다.
- **Audience Question:** 사람이 어떤 자료를 받아야 병합을 판단할까?
- **Core Message:** 현재 변경과 검사 근거로 병합 요청 문서(MR mirror)를 갱신하고 문서만 커밋한 뒤 GitLab에 병합 요청을 등록한다.
- **Story Beat:** BEAT-088, BEAT-090
- **Curriculum Trace:** ACT 4 / 4R5 Implementation, review and state · DEC-0156
- **Evidence Type:** CONCEPTUAL
- **Claim Status:** CONCEPTUAL CASE — 제공 PDF의 GitLab 설계 예시. 팀 운영 표준의 승인, 실제 실행, 자동 병합 또는 개선율은 확인하지 않았다.
- **Visual Concept:** ⑩ MR 문서 작성 → ⑪ 문서 단독 커밋 → ⑫ MR 등록. 사람이 검토할 지점에서 멈춘다.
- **Demo / Case Connection:** Loop Engineering Systems p.9에서 각색한 발표용 도식. 정적 사례로 설명한다.
- **Beginner Payoff:** MR의 실제 의미가 사람이 후보를 검토할 수 있도록 요청을 올리는 것임을 이해한다.
- **Advanced Payoff:** 코드·근거·남은 문제를 특정 변경에 매달아 인계한다.
- **C++ Vision Bridge:** N/A — 이 장은 언어에 독립적인 작업 운영을 다룬다.
- **Speaker Intent:** 문서 커밋과 실제 MR 등록 결과를 구분하고 병합 승인 책임을 확인한다.
- **Transition:** 작성자와 검토자는 무엇을 주고받을까?
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Lecture 1분 + Case 3분 = 4분
- **Evidence / Decision References:** DEC-0156, SRC-0246, CLM-0050
- **Audience Footer:** N/A — 화면의 맥락에서 사례 또는 설계 유형을 밝힌다.

#### S88 — 작성자와 검토자는 무엇을 주고받을까?

- **Slide ID:** S88
- **ACT:** ACT 4
- **Section:** 4R5 Implementation, review and state
- **Working Title:** 작성자와 검토자는 무엇을 주고받을까?
- **Primary Role:** 두 모델에 작성·검토 역할을 맡긴 예에서 전달물과 회신을 따라간다.
- **Audience Question:** 작성자와 검토자는 무엇을 주고받을까?
- **Core Message:** 작성자는 행별 집계 변경안과 출력 6개의 비교 결과를 보낸다. 검토자는 아직 확인하지 못한 최대 할당량을 찾아 같은 입력으로 기준판과 수정안을 다시 측정해 달라고 회신한다.
- **Story Beat:** BEAT-076, BEAT-077, BEAT-082
- **Curriculum Trace:** ACT 4 / 4R5 Implementation, review and state · DEC-0156, DEC-0161
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** TEACHING MODEL — 두 모델 이름은 역할을 구분하는 교육용 배치에 사용한다. 조합의 실행·자동 연동·효과를 확인하지 않았다.
- **Visual Concept:** 작성자 GPT-6 Luna와 검토자 Claude Sonnet 5.5 사이에 변경안과 확인 결과가 가는 경로, 빠진 측정 요청이 돌아오는 경로를 구분한다.
- **Demo / Case Connection:** S87의 병합 요청을 검토하는 정적 예시. SRC-0246 p.10의 역할 분리를 밝기 통계 사례에 적용한 교육용 재구성이다.
- **Beginner Payoff:** 출력 일치 여부를 확인한 뒤에도 메모리 사용량을 검증할 일이 남을 수 있음을 설명한다.
- **Advanced Payoff:** 검토 지적에 비교 대상, 입력, 측정 지표를 명시해 다음 회차에서 재검사할 수 있게 한다.
- **C++ Vision Bridge:** N/A — 이 장은 언어에 독립적인 작업 운영을 다룬다.
- **Speaker Intent:** 1분 동안 두 역할을 짚고, 사례 3분에는 작성자가 넘긴 변경안·출력 6개 비교와 검토자의 최대 할당량 재측정 요청을 따라간다. 아직 실행하지 않은 재측정은 S89의 미해결 항목으로 넘긴다.
- **Transition:** 이번 검토에서 확인한 결과와 남은 지적을 다음 실행은 어디서 이어받을까?
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Lecture 1분 + Case 3분 = 4분
- **Evidence / Decision References:** DEC-0163, DEC-0161, DEC-0160, DEC-0156, SRC-0246, CLM-0050
- **Audience Footer:** 모델 역할 배치와 주고받는 내용은 교육용 예시로 표시한다.

#### S89 — 다음 실행이 이어받을 상태를 파일에 남긴다

- **Slide ID:** S89
- **ACT:** ACT 4
- **Section:** 4R5 Implementation, review and state
- **Working Title:** 다음 실행이 이어받을 상태를 파일에 남긴다
- **Primary Role:** S88의 검토 의견에서 아직 측정하지 않은 항목을 꺼내 다음 실행이 이어받을 파일로 옮긴다.
- **Audience Question:** 다음 실행은 무엇을 마친 상태에서, 어떤 검사부터 재개할까?
- **Core Message:** 밝기 통계의 행별 집계 변경에서 출력 6개 비교는 끝났지만 최대 할당량은 아직 측정하지 않았다. 이 구분을 기록하면 다음 실행은 같은 입력에서 기준판과 변경안의 최대 할당량을 비교하는 일부터 시작할 수 있다.
- **Story Beat:** BEAT-089
- **Curriculum Trace:** ACT 4 / 4R5 Implementation, review and state · DEC-0156, DEC-0164
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** TEACHING MODEL — 밝기 통계 사례를 재구성한 파일 예시. 실제 작업 로그, 자동 저장 동작이나 메모리 사용량 개선을 확인한 기록은 없다.
- **Visual Concept:** S88의 “최대 할당량 근거 없음”에서 가운데 접힌 종이 모양의 state.md로 이어진다. 파일에 “밝기 통계 · 행별 집계”, 완료한 “출력 6개 비교”, 미완료인 “최대 할당량 측정”을 적고 옆에 다음 실행의 첫 비교를 표시한다.
- **Demo / Case Connection:** SRC-0246 p.11의 외부 상태 개념을 S88 밝기 통계 사례에 적용했다. state.md는 팀이 정할 수 있는 파일명의 예시다.
- **Beginner Payoff:** 이미 비교한 출력과 아직 측정해야 할 최대 할당량을 구별해 다음 작업을 찾는다.
- **Advanced Payoff:** 같은 입력·기준판·변경안을 명시해 다음 실행이 같은 조건으로 비교하게 한다. 여러 작업에 적용할 지침은 AGENTS.md에, 이번 작업의 진행 상태는 state.md에 남긴다.
- **C++ Vision Bridge:** N/A — 이 장은 언어에 독립적인 작업 운영을 다룬다.
- **Speaker Intent:** 강의 1분에는 S88의 검토 지적을 파일에 잇는다. 사례 2분에는 파일의 완료·미완료를 가리키고, 다음 실행이 첫 측정에서 비교할 입력·기준판·변경안을 짚는다.
- **Transition:** 실행 상태는 파일로 남겼다. 이전 대화에서 익힌 개인 작업 선호는 다음 대화에서 어떻게 떠올릴까?
- **Estimated Time:** 3분
- **Delivery Mode Allocation:** Lecture 1분 + Case 2분 = 3분
- **Evidence / Decision References:** DEC-0164, DEC-0156, SRC-0246, CLM-0050
- **Audience Footer:** N/A — 화면의 맥락에서 사례 또는 설계 유형을 밝힌다.

#### S90 — Codex 메모리로 이전 대화의 맥락을 이어간다

- **Slide ID:** S90
- **ACT:** ACT 4
- **Section:** 4R5 Implementation, review and state
- **Working Title:** Codex 메모리로 이전 대화의 맥락을 이어간다
- **Primary Role:** 사내 계정에서 기능을 사용할 수 있을 때 로컬 Codex 메모리를 켜고 대화별로 제어하는 방법을 소개한다.
- **Audience Question:** 매번 반복하는 보고 형식을 다음 대화에서도 참고하게 하려면 어떻게 할까?
- **Core Message:** 선택한 기기에서 Codex 메모리를 켜면 대상 대화의 유용한 맥락을 이후 대화에서 참고할 수 있다. 각 대화가 기억을 읽거나 나중 기억에 기여할지는 따로 정한다.
- **Story Beat:** BEAT-089
- **Curriculum Trace:** ACT 4 / 4R5 Implementation, review and state · DEC-0158
- **Evidence Type:** RESEARCH / TEACHING_MODEL
- **Claim Status:** REQUIRES PRODUCT CHECK — 공식 문서로 확인한 기능과 절차. 발표 기기·교육 계정 UI, 실제 기억 생성·회상 여부는 미검증.
- **Visual Concept:** 데스크톱 앱의 기기 설정 경로와 /memories 대화별 제어를 한 번에 본다. 우측 상단에 공통 실무 적용 팁 · Context 관리 배지를 둔다. 요청 입력 부분은 기존 Mac 스타일의 제목 막대·세 색상 표시·밝은 본문·둥근 테두리로 통일한다. 문장·강조·앞뒤 관계는 보존하며 [공통 적용 범위](MAC_PROMPT_STYLE_AUDIT.md)를 따른다.
- **Demo / Case Connection:** 정적 제품 안내와 교육용 선호 예시. S89의 state.md는 작업 인계 기록이다. 메모리의 작동을 재현하는 데모 시간은 없다.
- **Beginner Payoff:** 작업 선호를 참고할 때와 팀 규칙 또는 실행 상태를 직접 확인할 때를 구분한다.
- **Advanced Payoff:** 기기 수준 활성화와 대화별 읽기·기여 선택을 구분하고, 선호가 최신인지 현재 요청에서 다시 확인한다.
- **C++ Vision Bridge:** N/A — 언어에 독립적인 로컬 클라이언트 기능.
- **Speaker Intent:** 먼저 Settings > Personalization > Enable Codex memories를 가리킨다. /memories에서 기존 기억 참조와 현재 대화의 기여를 구분한다. 선호는 보조 맥락, 팀 지침은 AGENTS.md, 작업 상태는 state.md에 둔다.
- **Transition:** 기억을 참고해도 작업 권한이 넓어지지는 않는다. 무인 실행에서 허용할 파일과 외부 작업 범위를 정해 보자.
- **Estimated Time:** 2분
- **Delivery Mode Allocation:** Lecture 2분 = 2분
- **Evidence / Decision References:** DEC-0158, SRC-0113, CLM-0008, CLM-0053, BEAT-089; DEC-0179
- **Audience Footer:** OpenAI · Memories · 공식 제품 안내.
- **Practical Tip Classification:** Context 관리

#### S91 — 무인 실행의 범위를 어디까지 허용할까?

- **Slide ID:** S91
- **ACT:** ACT 4
- **Section:** 4R5 Implementation, review and state
- **Working Title:** 무인 실행의 범위를 어디까지 허용할까?
- **Primary Role:** 작업 폴더 분리가 권한 격리를 보장하는지 물은 뒤 외부 효과와 승인 범위를 확인한다.
- **Audience Question:** 무인 실행의 범위를 어디까지 허용할까?
- **Core Message:** 실행 전에 작업 공간과 허용된 동작을 정의하고 파일 변경, 외부 호출, 자격 정보 사용과 비용에 경계를 둔다. 허용 범위는 사람이 판단하고 결과에 대한 책임도 사람이 진다.
- **Story Beat:** BEAT-079, BEAT-083
- **Curriculum Trace:** ACT 4 / 4R5 Implementation, review and state · DEC-0156
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** TEACHING MODEL — 제공 자료의 설계 판단을 설명한다. 조직 정책, 실제 실행 사건이나 제품의 통제 기능을 검증한 결과가 아니다.
- **Visual Concept:** Agent와 허용 영역 안의 지정 폴더 수정·테스트 및 승인한 외부 연결을 연결한다. 관련 없는 파일·비밀 키·배포 권한은 별도 금지 영역으로 두고 경계에서 연결선을 끊는다. 실제 설정 화면이나 차단 시험 결과가 아닌 권한 설계 도식이다. 하단에는 “허용 범위는 사람이 판단하고, 결과에 대한 책임도 사람이 진다”를 표시한다. 워크트리와 접근 권한 통제의 차이는 Notes에서 보존한다.
- **Demo / Case Connection:** Loop Engineering Systems p.12에서 각색한 발표용 도식. 정적 사례로 설명한다.
- **Beginner Payoff:** 자동화가 실행해도 되는 범위를 작업 전에 표현할 수 있다.
- **Advanced Payoff:** 최소 권한, 제한된 자격 정보, 격리와 비용 상한을 별도 통제로 다룬다.
- **C++ Vision Bridge:** N/A — 이 장은 언어에 독립적인 작업 운영을 다룬다.
- **Speaker Intent:** 허용·금지 도식을 따라 사람이 실행 범위를 판단하며 결과에도 책임을 진다는 하단 문장으로 마무리한다. 워크트리의 파일 분리와 실제 접근 통제의 차이는 Notes에서 설명한다.
- **Transition:** 권한·예산을 넘으면 멈추고 사람에게 넘긴다
- **Estimated Time:** 3분
- **Delivery Mode Allocation:** Lecture 1분 + Case 2분 = 3분
- **Evidence / Decision References:** DEC-0156, SRC-0246, CLM-0050; DEC-0177; DEC-0178
- **Audience Footer:** N/A — 화면의 맥락에서 사례 또는 설계 유형을 밝힌다.

#### S92 — 권한·예산을 넘으면 멈추고 사람에게 넘긴다

- **Slide ID:** S92
- **ACT:** ACT 4
- **Section:** 4T1 Unattended stop conditions
- **Working Title:** 권한·예산을 넘으면 멈추고 사람에게 넘긴다
- **Primary Role:** 허용 범위 안에서 보완하는 경우와 권한·예산을 넘어 중단하는 경우를 구분한다.
- **Audience Question:** 계속 실행할 수 없는 경우 어떤 근거를 넘길까?
- **Core Message:** 권한이 없거나 예산이 소진되면 추가 실행을 멈추고, 시도·근거·미완료 사항과 필요한 결정을 사람에게 넘긴다.
- **Story Beat:** BEAT-079, BEAT-083, BEAT-089
- **Curriculum Trace:** ACT 4 / 4T1 Unattended stop conditions · DEC-0156
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** TEACHING MODEL — 제공 자료의 설계 판단을 설명한다. 조직 정책, 실제 실행 사건이나 제품의 통제 기능을 검증한 결과가 아니다.
- **Visual Concept:** 권한과 예산의 경계에서 중단 후 인계 카드로 이어지는 분기.
- **Demo / Case Connection:** Loop Engineering Systems p.12에서 각색한 발표용 도식. 정적 사례로 설명한다.
- **Beginner Payoff:** 중단할 때 사람에게 무엇을 보고할지 고른다.
- **Advanced Payoff:** 권한 상승, 추가 비용, 재개 여부의 결정자를 명시한다.
- **C++ Vision Bridge:** N/A — 이 장은 언어에 독립적인 작업 운영을 다룬다.
- **Speaker Intent:** 허용 범위 안에서 보완하는 경우와 권한·예산을 넘어 중단하는 경우를 구분한다.
- **Transition:** 한도를 넘어 멈춘 경우를 보았다. AI가 완료했다고 보고한 경우, 사람은 병합 전에 무엇을 확인할까?
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Lecture 4분 = 4분
- **Evidence / Decision References:** DEC-0156, SRC-0246, CLM-0050
- **Audience Footer:** N/A — 화면의 맥락에서 사례 또는 설계 유형을 밝힌다.
- **Practical Tip Classification:** 작업 환경·검증

#### S93 — 병합 전, 사람이 검증한다

- **Slide ID:** S93
- **ACT:** ACT 4
- **Section:** 4R6 Evidence and transfer
- **Working Title:** 병합 전, 사람이 검증한다
- **Primary Role:** AI가 정상 완료를 보고한 경로에도 사람이 근거를 대조하고 병합 여부를 결정하는 지점(Human in the Loop)을 둔다.
- **Audience Question:** AI가 작업을 마쳤다고 보고하면, 병합하기 전에 내가 직접 확인할 것은 무엇일까?
- **Core Message:** AI가 변경을 제출하면 사람이 검증한다. 근거가 충분하면 병합을 승인하고, 부족하면 AI가 재측정한 결과를 받아 다시 검증한다.
- **Story Beat:** BEAT-090, BEAT-083
- **Curriculum Trace:** ACT 4 / 4R6 Evidence and transfer · DEC-0165, DEC-0162, DEC-0156
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** TEACHING MODEL — 팀의 병합 절차를 설계하는 교육용 예시. 실제 실행·측정 결과나 사내 병합 정책에 관한 주장은 없다.
- **Visual Concept:** 세 역할 픽토그램에 “AI 제출”, “사람 검증”, “병합 승인”만 붙인다. 승인 방향 화살표는 “근거 충분”, AI 제출로 돌아가는 선은 “근거 부족 · 재측정”으로 표시한다. 본문 문장·번호·하단 설명은 생략한다.
- **Demo / Case Connection:** PDF p.13의 엔지니어 검토 책임을 S88의 밝기 통계 사례로 설명한다. 검토 흐름과 두 결과는 교육용 조건 분기다.
- **Beginner Payoff:** AI의 완료 보고를 받은 뒤, 자신이 두 기준을 확인해야 하는 시점을 찾는다.
- **Advanced Payoff:** 기능 보존과 메모리 목표를 각각 검증하고, 비교할 입력이나 기준판 수치가 빠지면 재측정 조건을 지정한다.
- **C++ Vision Bridge:** N/A — 이 장은 언어에 독립적인 작업 운영을 다룬다.
- **Speaker Intent:** Notes에서 S92의 중단 인계와 AI가 정상적으로 완료를 보고한 상황을 구분한다. 사람이 밝기 통계의 기존 출력 6개와 동일 입력·기준판 대비 최대 할당량을 확인하는 예를 구두로 들고, 현재 S94의 Goal 요청으로 바로 이어간다. 삭제한 개인 성찰을 전제하지 않는다.
- **Transition:** 확인한 완료 근거와 중단 조건을 Goal 요청에 어떻게 담을까?
- **Estimated Time:** 2분
- **Delivery Mode Allocation:** Lecture 2분 = 2분
- **Evidence / Decision References:** DEC-0165, DEC-0162, DEC-0156, SRC-0246, CLM-0050; legacy M5·M6 (교육 내용 대응); DEC-0177
- **Audience Footer:** 본문 하단 설명 없음. 기존 M5·M6 모듈 연계 표기 유지.

#### S94 — Codex에서 /goal로 목표와 완료 기준을 정한다

- **Slide ID:** S94
- **ACT:** ACT 4
- **Section:** 4T2 Goal request
- **Working Title:** Codex에서 /goal로 목표와 완료 기준을 정한다
- **Primary Role:** S93까지의 완료 근거·중단 조건이라는 원칙을 일반적인 에지 검출 알고리즘 조사·비교 보고서의 /goal 입력 예시로 옮긴다.
- **Audience Question:** 원하는 변화와 검증 근거를 함께 제시해 다음 턴에서도 같은 목표를 판단하게 하려면 어떻게 요청할까?
- **Core Message:** /goal로 목표를 지정하면 Codex가 턴이 끝난 뒤 현재 근거로 충족 여부를 판단할 수 있다. 무엇을 보존하고 언제 완료하거나 중단할지 요청에 명시한다.
- **Story Beat:** BEAT-084, BEAT-085
- **Curriculum Trace:** ACT 4 / 4T2 Goal request · DEC-0159
- **Evidence Type:** RESEARCH / TEACHING_MODEL
- **Claim Status:** REQUIRES PRODUCT CHECK — 공식 문서의 지원 기능과 교육용 입력 예시. 발표 기기·교육 계정의 활성화와 실행은 미검증.
- **Visual Concept:** 공통 실무 적용 팁 · 검증·개선 배지와 기존 Mac 스타일 입력창을 유지한다. 에지 검출의 Sobel·Canny·Laplacian 조사 요청, 원리·장단점·적용 상황의 비교 범위, 비교표·선택 기준·참고 출처의 완료 기준, 근거 확인 불가·조사 막힘의 중단 조건을4줄로 보여준다. 일시 정지·재개 명령과 배치는 유지한다.
- **Demo / Case Connection:** 에지 검출 알고리즘을 조사해 비교 보고서를 만드는 교육용 요청이다. 실제 문헌 조사·보고서·코드 실행·성능 비교 결과를 제시하지 않는다. 기존 밝기 통계 Trial과 별개의 일반적인 활용 예시다.
- **Beginner Payoff:** 막연히 계속하라고 반복하는 대신 어떤 결과가 나오면 끝낼지, 막히면 무엇을 알려야 할지 적을 수 있다.
- **Advanced Payoff:** 실행 중 성공 판단이나 중단 보고를 검증 근거와 연결한다. 모델 역할 배분, 허용 권한, 비용 한도는 별도로 관리한다.
- **C++ Vision Bridge:** N/A — 요청 작성법은 언어에 독립적이다.
- **Speaker Intent:** 보고서라는 산출물과 세 후보의 비교 범위를 먼저 읽고, 비교표·선택 기준·참고 출처가 완료 판단의 근거임을 짚는다. 근거 확인이나 조사가 막히면 이유를 보고하도록 요청했다는 점을 확인한다. 특정 알고리즘 우열·속도·정확도 결과를 주장하지 않는다.
- **Transition:** 목표·근거·중단을 명시한 예시를 마치고, ACT5에서 내 업무에 필요한 구성과 덜어낼 구성을 고른다.
- **Estimated Time:** 2분
- **Delivery Mode Allocation:** Lecture 2분 = 2분
- **Evidence / Decision References:** DEC-0159, SRC-0240, SRC-0241, CLM-0046, CLM-0047, BEAT-084, BEAT-085; DEC-0177; DEC-0181
- **Audience Footer:** OpenAI · Using Goals in Codex · 공식 제품 안내.
- **Practical Tip Classification:** 검증·개선

### ACT 5 — 15 slides / 41 minutes

#### S95 — 내 업무에 맞게 조합하고 덜어내기

- **Slide ID:** S95
- **ACT:** ACT 5
- **Section:** 5A Full Story Recap
- **Working Title:** 내 업무에 맞게 조합하고 덜어내기
- **Primary Role:** ACT의 제목과 설계 관점을 안내하고 기존 첫 문제 장으로 넘긴다. 새 기법·성과·기능 정의를 설명하는 장이 아니다.
- **Audience Question:** “이번 ACT에서는 어떤 관점으로 다음 문제를 살펴볼까?”
- **Core Message:** 내 업무에 맞게 조합하고 덜어내기 — AI-Native Development · 업무 방식의 재설계
- **Story Beat:** BEAT-060
- **Curriculum Trace:** ACT 5의 승인된 주제를 안내하는 표지다. 기존 Curriculum Section/Beat를 재사용한다.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** TEACHING MODEL — ACT 주제 안내이며 새 제품 기능·Trial·성과·현재 제품 지원을 주장하지 않는다.
- **Visual Concept:** T12-A ACT Title. 기존 밝은 배경·teal/ink/sub 색·글꼴을 사용한다. ACT 번호, 두 줄의 큰 한글 제목, 작은 승인 부제, 현재 Slide ID와 조용한 과정 표기만 둔다. 사진·결과·기능 목록은 추가하지 않는다.
- **Demo / Case Connection:** N/A — 기존 ACT의 사례를 소개하기 전 주제만 안내한다. Demo 시간을 추가하지 않는다.
- **Beginner Payoff:** 지금부터 살펴볼 주제와 앞 구간과의 경계를 알아본다.
- **Advanced Payoff:** 해당 ACT가 다루는 설계 책임의 범위를 짧게 확인한다.
- **C++ Vision Bridge:** N/A — 기존 본문에 있는 C++ 연결을 유지한다.
- **Speaker Intent:** S93에서 확인한 사람 검증과 S94에서 문장으로 정한 완료·중단 기준을 회수한다. 이를 기준으로 내 업무에 필요한 구성과 덜어낼 구성을 고른다는 ACT 방향을 소개한다.
- **Transition:** S96에서 질문·답변에서 기준에 따른 작업으로 맡기는 범위가 넓어졌음을 회수한다.
- **Estimated Time:** 1분
- **Delivery Mode Allocation:** Transition 1분 = 1분
- **Evidence / Decision References:** DEC-0090; existing ACT/Story focus; no new evidence; DEC-0177
- **ACT Subtitle:** AI-Native Development · 업무 방식의 재설계
- **Audience Footer:** 기존 ACT 제목 표기 유지

#### S96 — AI에게 맡기는 범위가 넓어졌다

- **Slide ID:** S96
- **ACT:** ACT 5
- **Section:** 5A Full Story Recap
- **Working Title:** AI에게 맡기는 범위가 넓어졌다
- **Primary Role:** Chatbot에서 Prompt·Context·Harness·Loop로, 질문에 답하는 범위에서 기준에 따라 작업하고 검토·수정하는 범위로 넓어졌다.
- **Audience Question:** “이번 교육에서 AI에게 맡기는 범위는 어떻게 달라졌을까요?”
- **Core Message:** Chatbot에서 Prompt·Context·Harness·Loop로, 질문에 답하는 범위에서 기준에 따라 작업하고 검토·수정하는 범위로 넓어졌다.
- **Story Beat:** BEAT-060
- **Curriculum Trace:** ACT 5 — complete journey and seven takeaways.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** TEACHING MODEL — DEC-0099에서 승인한 교육 내용의 종합. 실제 Product/Meta 이력·새 실행·비교 성과가 아니며 개인 선택은 S107/S108에 남긴다.
- **Visual Concept:** 다섯 단계와 질문·목표/제약·정보/명세·수행 환경·검토/수정의 범위를 순서대로 표시한다. 개인 문제나 도구 선택 메뉴를 만들지 않는다.
- **Demo / Case Connection:** 기존 교육 내용의 설명용 구조다. 실제 이력은 참고 기록으로 보존하며 새 실행·결과를 제시하지 않는다.
- **Beginner Payoff:** Demo 저장소의 State·Trial을 몰라도 작업과 판단의 관계를 이해한다.
- **Advanced Payoff:** 개념의 범위 확대와 모든 구성요소의 도입 의무를 구분한다. 개인 문제 선택과 다음 행동은 S107/S108에서만 진행한다.
- **C++ Vision Bridge:** 별도 구현·성과를 추가하지 않는다. 개인 업무 적용은 S107/S108에 남긴다.
- **Speaker Intent:** 질문·답변에서 기준에 따른 작업으로 넓어진 범위를 회수한다. 마지막 질문을 읽고, S97의 정보·수행 방법·검증 도구에 연결한다. 개인 문제 선택은 S104, 다음 행동은 S105에서 진행한다.
- **Transition:** 이렇게 일을 맡기려면, AI에게 무엇을 연결해야 할까? 필요한 정보·수행 방법·검증 도구를 S97에서 확인한다.
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Lecture 4분 = 4분
- **Evidence / Decision References:** DEC-0099; INV-NARRATIVE-001; INV-RESPONSIBILITY-001; CLM-0021; CLM-0023; CLM-0024
- **Audience Footer:** 없음 — M 연계 표시는 유지

#### S97 — 작업 흐름에는 정보·절차·도구가 연결된다

- **Slide ID:** S97
- **ACT:** ACT 5
- **Section:** 5A Work Conditions
- **Working Title:** 작업 흐름에는 정보·절차·도구가 연결된다
- **Primary Role:** 프로젝트 정보와 명세, 재사용할 수행 방법, 테스트·측정 도구를 Agent의 작업에 연결해 변경 내용·확인 근거·미해결 항목을 남긴다.
- **Audience Question:** 이렇게 일을 맡기려면, AI에게 어떤 정보·수행 방법·검증 도구를 연결해야 할까?
- **Core Message:** 프로젝트 정보와 명세, 재사용할 수행 방법, 테스트·측정 도구를 Agent의 작업에 연결해 변경 내용·확인 근거·미해결 항목을 남긴다.
- **Story Beat:** BEAT-057, BEAT-060
- **Curriculum Trace:** ACT 3 payoff; ACT 4 Minimum Effective Harness callback; ACT 5 synthesis.; ACT 5 — complete journey and seven takeaways.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** TEACHING MODEL — DEC-0099에서 승인한 교육 내용의 종합. 실제 Product/Meta 이력·새 실행·비교 성과가 아니며 개인 선택은 S107/S108에 남긴다.
- **Visual Concept:** 왼쪽의 프로젝트 정보·재사용할 수행 방법·검증 도구와 가운데 Agent를 하나의 작업 시스템 프레임으로 묶는다. 세 입력의 역할별 색과 아이콘을 유지하고 조사·구현·검증·재수정을 거쳐 오른쪽 결과 기록의 변경 내용·확인 근거·미해결 항목으로 연결한다. 이 시스템 그림을 S98에서도 동일하게 사용한다.
- **Demo / Case Connection:** 기존 교육 내용의 설명용 구조다. 실제 이력은 참고 기록으로 보존하며 새 실행·결과를 제시하지 않는다.
- **Beginner Payoff:** Demo 저장소의 State·Trial을 몰라도 작업과 판단의 관계를 이해한다.
- **Advanced Payoff:** Context의 사실, Workflow의 방법, 도구가 제공하는 근거는 책임이 다르다. 모든 작업의 필수 구현·저장 방식이나 특정 구성이 더 우월하다는 결과를 제시하지 않는다.
- **C++ Vision Bridge:** 별도 구현·성과를 추가하지 않는다. 개인 업무 적용은 S107/S108에 남긴다.
- **Speaker Intent:** S96의 질문에 답하며 왼쪽 프레임 안의 프로젝트 정보·재사용할 수행 방법·검증 도구와 Agent를 하나의 구축한 작업 시스템으로 짚는다. 조사·구현·검증·재수정을 거쳐 오른쪽 결과 기록으로 시선을 옮기고, 같은 시스템을 유지한 S98에서 사람의 최종 결정으로 연결한다.
- **Transition:** 시스템이 결과와 근거를 준비했다면, 사람에게 남는 최종 결정은 무엇일까요? S98에서 수용·보완 요청·중단의 판단으로 이어간다.
- **Estimated Time:** 2분
- **Delivery Mode Allocation:** Lecture 2분 = 2분
- **Evidence / Decision References:** DEC-0171; DEC-0170; DEC-0099; INV-NARRATIVE-001; INV-RESPONSIBILITY-001; CLM-0021; CLM-0023; CLM-0024
- **Audience Footer:** 없음 — M 연계 표시는 유지

#### S98 — 시스템이 수행하고, 사람이 최종 결정한다

- **Slide ID:** S98
- **ACT:** ACT 5
- **Section:** 5A Developer Responsibility
- **Working Title:** 시스템이 수행하고, 사람이 최종 결정한다
- **Primary Role:** 구축한 시스템이 조사·구현·검증·재수정을 수행하고 결과와 근거를 남기므로, 사람은 그 근거를 확인해 수용·보완 요청·중단의 최종 결정에 집중한다.
- **Audience Question:** 이 시스템이 작업과 검증 근거를 준비하면, 사람에게 남는 결정은 무엇일까요?
- **Core Message:** 구축한 시스템이 조사·구현·검증·재수정을 수행하고 결과와 근거를 남기므로, 사람은 그 근거를 확인해 수용·보완 요청·중단의 최종 결정에 집중한다.
- **Story Beat:** BEAT-061–062
- **Curriculum Trace:** ACT 5 — beginning/ending comparison and AI-Native Development teaching model.; ACT 5 — Beginning/ending comparison and developer responsibility.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** TEACHING MODEL — DEC-0099에서 승인한 교육 내용의 종합. 실제 Product/Meta 이력·새 실행·비교 성과가 아니며 개인 선택은 S107/S108에 남긴다.
- **Visual Concept:** S97과 같은 위치·크기의 작업 시스템 프레임을 유지한다. 내부의 세 입력이 Agent의 조사·구현·검증·재수정으로 모이고, 결과와 근거 화살표가 오른쪽 사람으로 이어진다. 사람이 내리는 최종 결정을 수용·보완 요청·중단 세 가지로 표시한다. 같은 시스템의 역할에서 사람에게 남는 판단으로 초점을 이동한다.
- **Demo / Case Connection:** 기존 교육 내용의 설명용 구조다. 실제 이력은 참고 기록으로 보존하며 새 실행·결과를 제시하지 않는다.
- **Beginner Payoff:** 시스템이 수행하는 일과 사람이 최종 결정하는 일이 한눈에 구분된다.
- **Advanced Payoff:** 사람이 사전에 정한 목표·제약·권한 안에서 시스템을 활용하고, 결과의 목표 적합성·선택·검증 근거·남은 위험을 확인해 수용한다. 모든 단계의 무인 수행이나 결과 보장을 주장하지 않는다.
- **C++ Vision Bridge:** 별도 구현·성과를 추가하지 않는다. 개인 업무 적용은 S107/S108에 남긴다.
- **Speaker Intent:** S97의 시스템을 그대로 따라가며 사람이 모든 단계를 수동으로 다시 수행하지 않고 최종 결정에 집중할 수 있음을 설명한다. 완료 보고 자체를 근거로 취급하지 않는다. 근거를 읽고 수용·보완 요청·중단을 결정한 뒤 S99의 지식 선별로 이어간다. 개인 문제와 다음 행동 선택은 S107/S108에 남긴다.
- **Transition:** “수용한 결과 중 다음 작업에서도 다시 쓸 지식은 무엇일까요?” 현재 S99의 지식 선별 예로 이어간다.
- **Estimated Time:** 3분
- **Delivery Mode Allocation:** Lecture 3분 = 3분
- **Evidence / Decision References:** DEC-0171; DEC-0099; INV-NARRATIVE-001; INV-RESPONSIBILITY-001; CLM-0021; CLM-0023; CLM-0024
- **Audience Footer:** 없음 — M 연계 표시는 유지

#### S99 — Memory: 다음 작업에 다시 쓸 맥락

- **Slide ID:** S99
- **ACT:** ACT 5
- **Section:** 3F Conditional Memory Decision — ACT5 배치; 원 Section ID 유지
- **Working Title:** Memory: 다음 작업에 다시 쓸 맥락
- **Primary Role:** 유용한 작업 선호·프로젝트 지식·확인된 주의점을 다음 작업에 참고할 맥락으로 이어간다. 현재 Context와 메모리를 구분하고, 필수 지침은 문서에 두며 기억한 내용도 현재 조건과 대조한다.
- **Audience Question:** 다음 작업에서도 다시 설명할 선호와 프로젝트 지식은 어떻게 이어갈까요?
- **Core Message:** 유용한 작업 선호·프로젝트 지식·확인된 주의점을 다음 작업에 참고할 맥락으로 이어간다. 현재 Context와 메모리를 구분하고, 필수 지침은 문서에 두며 기억한 내용도 현재 조건과 대조한다.
- **Story Beat:** BEAT-026–028 — Memory 후보 검토
- **Curriculum Trace:** ACT5의 결과 수용과 전체 작업 방식 종합 사이에서 작업 간 유용한 맥락의 재사용을 설명한다. S98 → S99 → S100의 현재 위치를 유지한다. MASTER_PLAN §5.6과 INV-MATURITY-008, 원 Section3F/BEAT-026–028의 Context/Memory 구분 목표를 유지한다.
- **Evidence Type:** CONCEPTUAL / TEACHING_MODEL
- **Claim Status:** CONCEPTUAL CASE / TEACHING MODEL — 작업 간 지식 관리 가정이다. 현재 Demo에 Memory를 추가했거나 제품이 자동 기억·회수한다는 주장이 아니다.
- **Visual Concept:** 이번 작업 Context의 Agent → 선별 → Notebook으로 표시한 Memory → 참고 → 다음 작업 Context의 Agent 관계도다. 중앙에는 작업 선호·프로젝트 지식·확인된 주의점을 둔다. 다음 작업은 새 요청과 관련 기억을 함께 참고하되 현재 문서와 대조한다. 필수 지침은 문서에 둔다는 원칙을 아래에 크게 표시한다. 특정 제품 UI·저장 경로·자동 저장/회수 trace나 C++ 데모로 표현하지 않는다. 화면의 실무 적용 팁 배지는 삭제하고 M 연계 표시는 앞뒤 장과 같은 위치(64,654,1152×18)에 맞춘다. 분류와 최종 찾아보기 연결은 유지한다.
- **Demo / Case Connection:** DEMO-08 CONCEPTUAL VISUAL2 + Case2를 유지한다. 일반적인 메모리 역할을 설명하는 정적 시각 자료와 가상 선호/프로젝트 정보 사례이며 실제 Memory 저장·조회·갱신 실행 결과가 아니다. 설정·명령 사용법은 기존 S90에서 설명한다.
- **Beginner Payoff:** 메모리가 반복해서 필요한 맥락을 다음 작업에 참고하도록 돕는 역할임을 이해한다. 대화 전체를 그대로 복제하거나 필수 지침의 원본을 대체하는 개념과 구분한다.
- **Advanced Payoff:** 메모리는 다음 작업의 Context 일부가 될 수 있다. 출처·적용 범위·신선도를 확인하고 원본 문서가 충분하면 중복 저장을 의무화하지 않는다. 제품별 저장·조회·통제 방식과 계정 가용성은 별도 확인한다.
- **C++ Vision Bridge:** N/A — 현재 화면은 특정 언어·프로젝트에 의존하지 않는다. 이전 가상 C++ 성능 비교 조건 사례는 MEMORY_ACT5_RELOCATION.md와 Git 이력에 보존하며 실제 관찰로 승격하지 않는다.
- **Speaker Intent:** S98에서 수용한 결과 뒤에 다음에도 쓸 맥락을 선별하는 이유를 연다. 설정 화면을 다시 설명하지 않고 메모리의 일반 역할·참고·갱신·문서와의 경계를 설명한다. 같은 위치의 S100이 시스템 전체를 종합하고 S101–S103의 재평가로 이어지도록 한다.
- **Transition:** “다음 작업에 남길 지식까지 포함해, AI가 일할 조건과 확인 경로를 설계해야 합니다.” S100으로 이어간다.
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Demo 2분 (VISUAL) + Case 2분 = 4분
- **Evidence / Decision References:** BEAT-026, CLM-0008, SRC-0113, SRC-0249, INV-DEMO-003, DEC-0018, OQ-013, BEAT-027, BEAT-028, DEC-0062, DEC-0073, DEC-0080, DEC-0087, DEC-0133, DEC-0175; DEC-0176
- **Practical Tip Classification:** Context 관리
- **Audience Footer:** 필수 지침은 문서에 보존하고 메모리는 현재 조건과 대조

#### S100 — AI가 일할 조건과 확인 경로를 설계한다

- **Slide ID:** S100
- **ACT:** ACT 5
- **Section:** 5A AI-Native Development
- **Working Title:** AI가 일할 조건과 확인 경로를 설계한다
- **Primary Role:** 맡길 범위와 일할 조건, 검증·수정·재검토와 사람의 수용 판단을 연결해 개발 방식을 설계하고 운영한다.
- **Audience Question:** “우리가 설계한 것은 어떤 개발 방식이었을까요?”
- **Core Message:** 맡길 범위와 일할 조건, 검증·수정·재검토와 사람의 수용 판단을 연결해 개발 방식을 설계하고 운영한다.
- **Story Beat:** BEAT-061
- **Curriculum Trace:** ACT 5 — beginning/ending comparison and AI-Native Development teaching model.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** TEACHING MODEL — DEC-0099에서 승인한 교육 내용의 종합. 실제 Product/Meta 이력·새 실행·비교 성과가 아니며 개인 선택은 S107/S108에 남긴다.
- **Visual Concept:** 목표 아이콘의 맡길 범위 → 프로젝트 정보·수행 방법·도구/검토 역할과 Agent를 묶은 작업 시스템 → 결과와 근거를 받는 사람의 최종 판단을 한 도식으로 연결한다. S100/S101과 동일한 아이콘·색·프레임 문법을 사용한다. 하단의 선별한 지식 파일이 다음 작업에서 조건 대조 후 다시 정보로 들어가는 모습을 S99와 연결한다. 마지막 재평가 질문을 유지하고 삭제 승인된 교육 관점 설명 문장은 복구하지 않는다.
- **Demo / Case Connection:** 기존 교육 내용의 설명용 구조다. 실제 이력은 참고 기록으로 보존하며 새 실행·결과를 제시하지 않는다.
- **Beginner Payoff:** Demo 저장소의 State·Trial을 몰라도 작업과 판단의 관계를 이해한다.
- **Advanced Payoff:** 특정 제품 기능이나 모든 구성요소를 반드시 도입하는 목록과 개발 방식의 설계 관점을 구분한다. 무엇을 제거할지는 다음 구간에서 근거를 보고 판단한다.
- **C++ Vision Bridge:** 별도 구현·성과를 추가하지 않는다. 개인 업무 적용은 S107/S108에 남긴다.
- **Speaker Intent:** S96의 맡길 범위, S97의 시스템 구성, S98의 사람의 최종 판단과 S99의 지식 선별을 익숙한 아이콘으로 회수한다. 목표에서 시스템과 사람으로 읽은 뒤, 선별한 지식이 다음 작업의 정보가 되는 아래 연결을 짚는다. 마지막 질문에서 현재 구조도 재평가할 수 있음을 열고 S101–S103의 유지·통합·제거로 이어간다.
- **Transition:** 이렇게 설계한 작업 방식도 모델·플랫폼이 달라지면 그대로 필요할까요? S101부터 기존 구조의 통합·제거를 재평가합니다.
- **Estimated Time:** 3분
- **Delivery Mode Allocation:** Lecture 3분 = 3분
- **Evidence / Decision References:** DEC-0173; DEC-0099; INV-NARRATIVE-001; INV-RESPONSIBILITY-001; CLM-0021; CLM-0023; CLM-0024
- **Audience Footer:** 없음 — M 연계 표시는 유지

#### S101 — 모델·플랫폼이 바뀌면 Harness도 다시 본다

- **Slide ID:** S101
- **ACT:** ACT 5
- **Section:** 5A Harness Reassessment
- **Working Title:** 모델·플랫폼이 바뀌면 Harness도 다시 본다
- **Primary Role:** 이전에 필요했던 보조 구조도 모델·플랫폼·업무 조건 변화 뒤에는 다시 평가할 대상으로 전환한다.
- **Audience Question:** “그때 필요했던 보조 장치가 지금도 필요한가요?”
- **Core Message:** 모델이 맡을 수 있는 범위나 플랫폼 제공 기능이 달라졌다면, 기존 Router·Planner·담당 Subagent의 필요성을 재평가할 수 있다. 일부 기업 Agent의 통합 공개 사례는 재평가의 동기이며 보편적 우월성·현재 Codex 효과의 근거가 아니다.
- **Story Beat:** BEAT-061, BEAT-069
- **Curriculum Trace:** ACT 5 — AI-Native operating model and advanced reliability; reassess previously justified structure under changed conditions.
- **Evidence Type:** RESEARCH / TEACHING_MODEL
- **Claim Status:** FROZEN WITH SCOPE — CLM-0040의 공급사 공개 사례 요약; TEACHING MODEL — 비교 구조는 교육용 각색; 현재 Codex의 통합 효과는 미검증.
- **Visual Concept:** 왼쪽 Agent 아래의 Router·Planner·Subagent를 역할별 아이콘으로 표시하고, 모델·플랫폼 변화 화살표를 거쳐 오른쪽의 주 Agent Loop와 필요한 Skill·Tool 후보로 대비한다. 보조 역할을 다시 배치할 수 있는 공개 사례의 교육용 각색이며 현재 제품의 통합 전후나 우월성 증거가 아니다. 두 Agent의 아이콘·프레임 문법을 S100에서 회수하고 핵심 질문과 공개 출처 표기를 유지한다. DEC-0184: “ACT 5 · 재평가 1/3 · 공개 사례 + 교육용 구조 도식”를 “ACT 5 · 재평가 1/3 · 공개 사례와 구조 변화”로 간략화한다. 본문·도식·수치·시간·근거 범위와 Notes는 유지한다.
- **Demo / Case Connection:** 새 Demo/Trial/State 없음. 공급사 공개 사례와 교육용 판단 모델이며 우리 제품의 통합·제거 성과가 아니다.
- **Beginner Payoff:** 처음에는 필요했던 장치도 조건이 달라지면 다시 볼 수 있음을 이해한다.
- **Advanced Payoff:** 더 강한 모델·플랫폼 기능의 도입을 기존 구조의 자동 유지나 무조건 제거와 분리하고, 현재의 역할·경계를 재평가한다.
- **C++ Vision Bridge:** Contextual — 실제 C++ 구조·도구·성과를 새로 제시하지 않는다.
- **Speaker Intent:** S100의 재평가 질문을 받아 외부 보조 역할과 통합 후보의 역할 배치를 그림으로 비교한다. 조건 변화가 재평가의 계기이며 무조건 단일 Agent로 바꾸라는 처방이 아님을 설명하고 S102의 유지·통합·제거 기준으로 이어간다.
- **Transition:** “그렇다면 무엇을 보존하고, 어떤 부분을 합치거나 제거할 후보로 볼까요?”
- **Estimated Time:** 2분
- **Delivery Mode Allocation:** Lecture 2분 = 2분
- **Evidence / Decision References:** SRC-0236, CLM-0040, BEAT-061, BEAT-069, DEC-0083; DEC-0174; DEC-0184
- **Audience Footer:** Anthropic(2026) · 외부 기업의 통합 사례

#### S102 — 무엇을 남기고, 무엇을 덜어낼까?

- **Slide ID:** S102
- **ACT:** ACT 5
- **Section:** 5A Harness Reassessment
- **Working Title:** 무엇을 남기고, 무엇을 덜어낼까?
- **Primary Role:** 기존 구성의 존재 이유에 따라 유지·통합·제거 후보를 구분한다.
- **Audience Question:** “이 요소가 맡은 이유는 현재도 유효한가요?”
- **Core Message:** 목표·명세·검증 요구는 보존하고, 겹치는 지침·역할은 통합하며, 효용이 사라진 우회 절차는 제거 후보로 검토한다. 독립 병렬 조사·권한 분리처럼 유효한 이유가 있으면 구성은 유지할 수 있다.
- **Story Beat:** BEAT-057, BEAT-061, BEAT-069
- **Curriculum Trace:** ACT 5 — AI-Native operating model and advanced reliability; reassess previously justified structure under changed conditions.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** TEACHING MODEL — CLM-0022의 bounded heuristic을 기존 구성 재평가에 적용. 적을수록 좋다는 보편 법칙이나 성과가 아니다.
- **Visual Concept:** 같은 높이의 세 선택지를 보호 방패(유지), 두 문서가 하나로 모이는 그림(통합), 효용이 사라진 경유 절차를 우회하는 경로(제거 후보)로 구분한다. 목표·명세·권한·검증 기준은 보호하고 겹치는 지침·역할은 원출처·명확한 책임으로 정리한다. 독립 병렬 조사·권한 분리가 필요하면 Subagent를 유지할 수 있다는 조건과 기존 실무 적용 팁 배지를 유지한다. 그림은 후보 판단이며 실행·성공 결과가 아니다.
- **Demo / Case Connection:** 새 Demo/Trial/State 없음. 공급사 공개 사례와 교육용 판단 모델이며 우리 제품의 통합·제거 성과가 아니다.
- **Beginner Payoff:** 중요한 요구를 지우는 것과 중복된 구현·지침을 덜어내는 것을 구분한다.
- **Advanced Payoff:** 원출처·책임·필요한 격리 경계를 보존하면서 불필요한 조율·우회 구조를 재검토한다.
- **C++ Vision Bridge:** Contextual — 실제 C++ 구조·도구·성과를 새로 제시하지 않는다.
- **Speaker Intent:** 보호할 기준과 합치거나 덜어낼 보조 구조를 세 그림으로 구분한다. 세 선택지는 같은 수준의 판단이며 필수 순서가 아니다. 유효한 독립 조사·권한 경계는 남길 수 있음을 짚고 후보의 타당성을 S103에서 확인하도록 연결한다.
- **Transition:** “후보를 정했다면, 덜어낸 뒤에도 필요한 일을 하는지 무엇으로 확인할까요?”
- **Estimated Time:** 2분
- **Delivery Mode Allocation:** Lecture 2분 = 2분
- **Evidence / Decision References:** CLM-0022, CLM-0030, SRC-0236, BEAT-057, BEAT-061, BEAT-069, DEC-0083, DEC-0087; DEC-0174; DEC-0176
- **Practical Tip Classification:** 검증·개선
- **Audience Footer:** 표시하지 않음 — 사용자 지정 하단 문구 삭제. 근거·판단 조건은 본문과 Notes에 유지하며 M 연계 표시는 유지한다.

#### S103 — 덜어낸 뒤에도 필요한 일을 하는가?

- **Slide ID:** S103
- **ACT:** ACT 5
- **Section:** 5A Harness Reassessment
- **Working Title:** 덜어낸 뒤에도 필요한 일을 하는가?
- **Primary Role:** 통합·제거 후보의 채택을 대표 작업과 회귀·비용·위험 근거에 연결한다.
- **Audience Question:** “같은 대표 작업에서 무엇을 대조해야 덜어낸 구성을 수용할 수 있나요?”
- **Core Message:** 기존 구성과 통합·제거 후보를 같은 대표 작업·입력·기준으로 비교하도록 설계한다. 명세와 기존 동작·회귀를 먼저 보고 시간·비용·남은 위험을 함께 판단한다. 확인된 범위만 채택하고 나빠지면 되돌리고 이유를 기록한다.
- **Story Beat:** BEAT-061, BEAT-069
- **Curriculum Trace:** ACT 5 — AI-Native operating model and advanced reliability; reassess previously justified structure under changed conditions.
- **Evidence Type:** TEACHING_MODEL / RESEARCH
- **Claim Status:** TEACHING MODEL — 비교 평가 설계이며 실제 실행·PASS/FAIL·측정값 없음. FROZEN WITH SCOPE — SRC-0236의 대표 end-to-end 평가 권고와 통합 뒤 회귀 사례가 동기를 뒷받침한다.
- **Visual Concept:** 같은 대표 작업·입력·판단 기준을 하나의 입력 파일로 표시한다. S101에서 본 기존 다중 역할 구성과 통합·제거 후보를 작은 구조 그림으로 나누고 같은 평가 프레임에 합친다. 분기·합류는 같은 굵기의 둥근 꺾임으로 연결하며 화살촉은 후보 및 평가 프레임 도착부에만 둔다. 먼저 동작·회귀를 크게 강조하고 시간·비용, 남은 위험은 같은 기준으로 대조한다. 아래 기록 파일과 되돌림 아이콘으로 확인한 범위만 채택·악화 시 되돌림과 이유 기록을 대비한다. 화면 머리말은 “ACT 5 · 재평가 3/3 · 평가 설계”로만 표기하고 기존 실무 적용 팁 배지는 유지한다. 실제 실행 결과가 아닌 설계 예시라는 근거 경계는 Notes에 보존한다.
- **Demo / Case Connection:** 새 Demo/Trial/State 없음. 공급사 공개 사례와 교육용 판단 모델이며 우리 제품의 통합·제거 성과가 아니다.
- **Beginner Payoff:** 간단해졌다는 인상 대신 원래 할 일을 계속 수행하는지 확인한다.
- **Advanced Payoff:** 평가 범위·품질·회귀·시간/비용·남은 위험과 복구 조건을 분리해 수용 근거를 만든다. 모델/구성 외 조건의 차이도 기록한다.
- **C++ Vision Bridge:** Contextual — 실제 C++ 구조·도구·성과를 새로 제시하지 않는다.
- **Speaker Intent:** 같은 입력이 두 후보 구조로 나뉘었다가 동일한 평가 기준으로 모이는 선을 따라간다. 간단해졌다는 인상보다 동작·회귀를 먼저 확인하고 시간·비용·남은 위험을 함께 판단한다. 결과를 꾸며내지 않고 조건부 채택·되돌림·기록에서 S104의 개인 문제 선택으로 이어간다.
- **Transition:** “부족한 것뿐 아니라 겹쳐 쌓인 것도 포함해, 내 업무의 문제 하나를 골라봅시다.”
- **Estimated Time:** 2분
- **Delivery Mode Allocation:** Lecture 2분 = 2분
- **Evidence / Decision References:** SRC-0236, CLM-0040, BEAT-061, BEAT-069, INV-VERIFY-001, DEC-0083, DEC-0087; DEC-0174; DEC-0176; DEC-0177; DEC-0178
- **Practical Tip Classification:** 검증·개선
- **Audience Footer:** 표시하지 않음 — 사용자 지정 하단 문구 삭제. 근거·판단 조건은 본문과 Notes에 유지하며 M 연계 표시는 유지한다.

#### S104 — 내 업무에서는 무엇이 반복해서 막힐까?

- **Slide ID:** S104
- **ACT:** ACT 5
- **Section:** 5B C++ Vision / My Repository Transfer
- **Working Title:** 내 업무에서는 무엇이 반복해서 막힐까?
- **Primary Role:** 기존 A–E 문제의 E를 검토 지적이 다음 수정으로 이어지지 않는 문제로 정렬한다.
- **Audience Question:** “내 업무에서는 어떤 문제가 반복해서 막히나요?”
- **Core Message:** 기존 A–E 문제의 E를 검토 지적이 다음 수정으로 이어지지 않는 문제로 정렬한다.
- **Story Beat:** BEAT-068–069
- **Curriculum Trace:** ACT 5 — tailored audience next steps.; ACT 5 — advanced audience value and seven takeaways.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** FROZEN — 기존99장의 Story·배정·Demo 범위를 보존한 현행115장 구조; TEACHING_MODEL; REQUIRES PRODUCT CHECK — 구체적 Windows·shell·IDE·hardware 지시를 추가하는 경우; 적용 후보를 고르는 교육용 질문이다. 특정 C++ Project의 규칙이나 도구를 보장하지 않는다.
- **Visual Concept:** 화면 머리말은 “ACT 5 · 문제 하나 고르기”이며 C++ VISION 표시는 제거한다. 기존 다섯 선택지를 유지하고 E의 문제만 새 수행 루프와 일치시킴. S107/S108은 A–E 표식의 위치·크기와 행 간격을 공유한다. 두 장의 첫 행 기준선은 y253, 행 간격65, 표식38×38, 본문 시작x126이며 보조 문장도 y185에 맞춘다. S105 오른쪽 확인 근거 질문은 유지한다.
- **Demo / Case Connection:** C++ Vision 예시: 성능 병목 조사 Task, build mode·algorithm contract·hardware assumption Context, `profile → change → benchmark → regression` Workflow, test와 benchmark Verification, 반복 이슈의 System correction.
- **Beginner Payoff:** 기존 A–E 문제의 E를 검토 지적이 다음 수정으로 이어지지 않는 문제로 정렬한다.
- **Advanced Payoff:** 현재 부족한 기준과 과하게 쌓인 구성을 함께 보고 유지·통합·제거 후보를 근거에 연결한다.
- **C++ Vision Bridge:** Primary bridge. A 성능 병목 조사의 범위, B build mode/동작 명세/hardware assumption, C profile→change→benchmark→regression, D tests+benchmark의 기대 기준, E 반복 이슈의 원문·검증 기준 대조다. 실제 C++ 프로젝트 도구·절차·결과를 보장하지 않는다.
- **Speaker Intent:** 기존 A–E 문제의 E를 검토 지적이 다음 수정으로 이어지지 않는 문제로 정렬한다.
- **Transition:** “방금 고른 문제의 같은 글자를 따라, 다음 작업의 작은 행동 하나를 생각해 봅시다.”
- **Estimated Time:** 5분
- **Delivery Mode Allocation:** Case 1분 + Transition 4분 = 5분
- **Evidence / Decision References:** BEAT-068, INV-AUDIENCE-001, INV-DIFFICULTY-001, INV-LOOP-001, INV-RESPONSIBILITY-001, BEAT-069; DEC-0097; CLM-0021; DEC-0172; DEC-0177
- **Audience Footer:** 없음 — M 연계 표시는 유지

#### S105 — 고른 문제에서, 다음 행동 하나로

- **Slide ID:** S105
- **ACT:** ACT 5
- **Section:** 5B Final Reflection
- **Working Title:** 고른 문제에서, 다음 행동 하나로
- **Primary Role:** 선택한 문제의 E에서 검토 지적·다음 수정·완료 기준을 잇는 작은 행동을 고른다.
- **Audience Question:** “고른 문제에서 무엇을 작게 바꾸고, 어떤 근거로 확인해 볼까요?”
- **Core Message:** 선택한 문제의 E에서 검토 지적·다음 수정·완료 기준을 잇는 작은 행동을 고른다.
- **Story Beat:** BEAT-070–071
- **Curriculum Trace:** ACT 5 — seven takeaways and final reflection; `plan/CURRICULUM.md` (Core Takeaways).; ACT 5 — audience next steps, seven takeaways, and final reflection.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** FROZEN — 기존99장의 Story·배정·Demo 범위를 보존한 현행115장 구조; TEACHING_MODEL; 개인 Reflection이며 응답·공유·실천 약속을 요구하지 않는다.
- **Visual Concept:** 기존 A–E 행동·확인 근거·표식 정렬을 유지한다. 하단 “공유는 선택”과 오른쪽 보조 문구 “출처·검토·갱신 책임도 함께”를 삭제한다. 자발성과 관련 책임은 Notes에 보존한다.
- **Demo / Case Connection:** 새 Demo 없음. S104의 A–E 문제→같은 글자의 작은 행동→확인 근거라는 개인 성찰이다.
- **Beginner Payoff:** 선택한 문제의 E에서 검토 지적·다음 수정·완료 기준을 잇는 작은 행동을 고른다.
- **Advanced Payoff:** 추가·통합·제거 후보를 근거·유지 위치·검토 책임에 연결하고, 검증 결과에 따라 그대로 유지하거나 되돌리는 선택을 남긴다.
- **C++ Vision Bridge:** 각자의 Vision 업무에 질문을 적용할 수 있다.
- **Speaker Intent:** 선택한 문제의 E에서 검토 지적·다음 수정·완료 기준을 잇는 작은 행동을 고른다.
- **Transition:** “마지막 질문을 받기 전에, 실무에서 다시 찾아볼 팁의 위치를 한 번에 정리하겠습니다.”라고 S106의 마지막 찾아보기를 연다.
- **Estimated Time:** 4분
- **Delivery Mode Allocation:** Lecture 2분 + Reflection 2분 = 4분
- **Evidence / Decision References:** BEAT-070, INV-LEARNING-003, INV-DIFFICULTY-001, INV-DELIVERY-001, INV-NARRATIVE-001, BEAT-071; DEC-0097; CLM-0021; DEC-0172; DEC-0185
- **Audience Footer:** 없음 — 지정 보조 문구 두 개는 화면에서 제외하고 M 연계를 유지한다.

#### S106 — 실무 적용 팁 · 작업 환경과 기준

- **Slide ID:** S106
- **ACT:** ACT 5
- **Section:** 5B Final Reference Review
- **Working Title:** 실무 적용 팁 · 작업 환경과 기준
- **Primary Role:** 교육 마지막에 기존 실무 적용 팁의 제목과 현재 Slide ID를 모아, 필요한 상황에서 다시 찾게 하는 안내다.
- **Audience Question:** “필요한 상황에서 어떤 실무 적용 팁을 다시 찾아보면 될까요?”
- **Core Message:** 작업 환경과 기준의 팁은 S13, S47, S55–S56, S60, S65, S69, S90, S92, S99의 아홉 묶음이다.
- **Story Beat:** BEAT-070–071
- **Curriculum Trace:** ACT 5 / 최종 회고 뒤, 기존 Q&A·Closing 직전의 통합 찾아보기. 새 Maturity 단계·Demo가 아니다.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** TEACHING MODEL — 기존 제목·위치의 탐색 안내다. 새 제품 기능·Trial·성능·검증 결과를 주장하지 않는다.
- **Visual Concept:** 두 열의 찾아보기에서 S90의 Codex 메모리 사용 팁과 S92의 한도·인계를 해당 번호로 찾아간다.
- **Demo / Case Connection:** N/A — 기존 자료의 위치 안내이며 Demo 시간을 추가하지 않는다.
- **Beginner Payoff:** 필요한 상황에서 참고할 슬라이드를 찾을 수 있다.
- **Advanced Payoff:** 사례의 근거 상태를 유지한 채 재사용할 안내 위치를 구분한다.
- **C++ Vision Bridge:** N/A — 원래 팁의 적용 범위를 따른다.
- **Speaker Intent:** 제목과 위치만 짧게 짚고, 전문을 다시 설명하지 않는다. 청중에게 실습·작성·공개 답변을 요구하지 않는다. S90의 Codex 설정·조작과 S99의 일반적인 메모리 역할을 구분해 안내한다.
- **Transition:** “이제 요청 문장을 작성할 때 바로 참고할 팁을 모아 보겠습니다.”라고 S107으로 이어간다.
- **Estimated Time:** 1분
- **Delivery Mode Allocation:** Lecture 1분 = 1분
- **Evidence / Decision References:** DEC-0158, DEC-0156, DEC-0088, DEC-0104; S13, S47, S55–S56, S60, S65, S69, S90, S92, S99; DEC-0175; DEC-0188
- **Practical Tip Classification:** 찾아보기
- **Audience Footer:** 없음 — M 연계 표시는 유지

#### S107 — 실무 적용 팁 · 요청 작성

- **Slide ID:** S107
- **ACT:** ACT 5
- **Section:** 5B Final Reference Review
- **Working Title:** 실무 적용 팁 · 요청 작성
- **Primary Role:** 교육 마지막에 기존 실무 적용 팁의 제목과 현재 Slide ID를 모아, 필요한 상황에서 다시 찾게 하는 안내다.
- **Audience Question:** “필요한 상황에서 어떤 실무 적용 팁을 다시 찾아보면 될까요?”
- **Core Message:** 요청 작성에 필요한 기존 팁의 위치는 S27, S28, S29, S30, S31, S32, S33, S34다. 내용과 근거 범위는 각 원래 장을 따른다.
- **Story Beat:** BEAT-070–071
- **Curriculum Trace:** ACT 5 / 최종 회고 뒤, 기존 Q&A·Closing 직전의 통합 찾아보기. 새 Maturity 단계·Demo가 아니다.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** TEACHING MODEL — 기존 제목·위치의 탐색 안내다. 새 제품 기능·Trial·성능·검증 결과를 주장하지 않는다.
- **Visual Concept:** 공통 “실무 적용 팁 · 찾아보기” 배지와 분류별 기존 팁 제목·Slide ID 목록. 5개 또는8개 항목은 두 열,4개는 한 열로 배치한다. 설명 전문·새 결과·이미지를 반복하지 않는다.
- **Demo / Case Connection:** N/A — 기존 자료의 위치 안내이며 Demo 시간을 추가하지 않는다.
- **Beginner Payoff:** 필요한 상황에서 참고할 슬라이드를 찾을 수 있다.
- **Advanced Payoff:** 사례의 근거 상태를 유지한 채 재사용할 안내 위치를 구분한다.
- **C++ Vision Bridge:** N/A — 원래 팁의 적용 범위를 따른다.
- **Speaker Intent:** 제목과 위치만 짧게 짚고, 전문을 다시 설명하지 않는다. 청중에게 실습·작성·공개 답변을 요구하지 않는다.
- **Transition:** “요청 뒤에는 근거를 확인하고 기존 구성을 다시 판단할 기준이 필요합니다.”라고 S108으로 이어간다.
- **Estimated Time:** 1분
- **Delivery Mode Allocation:** Lecture 1분 = 1분
- **Evidence / Decision References:** DEC-0088; Related tip slides: S27, S28, S29, S30, S31, S32, S33, S34
- **Practical Tip Classification:** 찾아보기
- **Audience Footer:** 없음 — M 연계 표시는 유지

#### S108 — 실무 적용 팁 · 검증과 개선

- **Slide ID:** S108
- **ACT:** ACT 5
- **Section:** 5B Final Reference Review
- **Working Title:** 실무 적용 팁 · 검증과 개선
- **Primary Role:** 교육 마지막에 기존 실무 적용 팁의 제목과 현재 Slide ID를 모아, 필요한 상황에서 다시 찾게 하는 안내다.
- **Audience Question:** “필요한 상황에서 어떤 실무 적용 팁을 다시 찾아보면 될까요?”
- **Core Message:** 검증과 개선의 팁으로 S81 작업 흐름, S83 도구 선택, S92 중단·인계, S94 Goal 요청, S105/S106 재평가를 다시 찾는다.
- **Story Beat:** BEAT-070–071
- **Curriculum Trace:** ACT 5 / 최종 회고 뒤, 기존 Q&A·Closing 직전의 통합 찾아보기. 새 Maturity 단계·Demo가 아니다.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** TEACHING MODEL — 기존 제목·위치의 탐색 안내다. 새 제품 기능·Trial·성능·검증 결과를 주장하지 않는다.
- **Visual Concept:** 두 열의 팁 찾아보기에서 S81, S83, S92, S94, S102, S103의 여섯 제목과 위치를 제공한다.
- **Demo / Case Connection:** N/A — 기존 자료의 위치 안내이며 Demo 시간을 추가하지 않는다.
- **Beginner Payoff:** 필요한 상황에서 참고할 슬라이드를 찾을 수 있다.
- **Advanced Payoff:** 사례의 근거 상태를 유지한 채 재사용할 안내 위치를 구분한다.
- **C++ Vision Bridge:** N/A — 원래 팁의 적용 범위를 따른다.
- **Speaker Intent:** 제목과 위치만 짧게 짚고, 전문을 다시 설명하지 않는다. 청중에게 실습·작성·공개 답변을 요구하지 않는다.
- **Transition:** “생각한 한 가지는 마음속에 두고, 이제 남은 질문을 받겠습니다.”
- **Estimated Time:** 1분
- **Delivery Mode Allocation:** Lecture 1분 = 1분
- **Evidence / Decision References:** DEC-0159, DEC-0156, DEC-0088; S81, S83, S92, S94, S102, S103
- **Practical Tip Classification:** 찾아보기
- **Audience Footer:** 없음 — M 연계 표시는 유지

#### S109 — Q&A와 교육 마무리

- **Slide ID:** S109
- **ACT:** ACT 5
- **Section:** 5B Final Q&A / Closing
- **Working Title:** Q&A와 교육 마무리
- **Primary Role:** 남은 질문을 받은 뒤, 원래 다섯 여정 용어와 마지막 한 문장으로 교육을 닫는다.
- **Audience Question:** “남은 질문은 무엇인가요?”
- **Core Message:** 남은 질문을 받은 뒤 Chatbot→Prompt→Context→Harness→Loop의 같은 용어로 여정을 닫는다. 목표·판단·검증·책임을 유지하며 AI가 잘 일할 환경을 설계한다.
- **Story Beat:** BEAT-070–071
- **Curriculum Trace:** ACT 5 — seven takeaways and final reflection; `plan/CURRICULUM.md` (Core Takeaways).; ACT 5 — audience next steps, seven takeaways, and final reflection.
- **Evidence Type:** TEACHING_MODEL
- **Claim Status:** FROZEN — 기존99장의 Story·배정·Demo 범위를 보존한 현행115장 구조; TEACHING_MODEL; 화면 문구는 후보이며 최종 copywriting 때 다듬는다.
- **Visual Concept:** Q&A의 남은 질문은 위쪽, 마지막 한 문장은 중앙, Chatbot→Prompt→Context→Harness→Loop는 하단. Q&A4분 후 Closing Transition2분에 초점을 옮긴다. Question/Task/System을 다른 마지막 단계로 도입하지 않는다.
- **Demo / Case Connection:** 없음. 질문 시간.
- **Beginner Payoff:** 문제에 맞는 작은 대응과 결과를 확인할 근거를 기억한다.
- **Advanced Payoff:** 위임과 작업 System의 설계·평가·피드백을 개발자의 판단과 책임에 연결한다.
- **C++ Vision Bridge:** 없음.
- **Speaker Intent:** 남은 질문을 받은 뒤, 원래 다섯 여정 용어와 마지막 한 문장으로 교육을 닫는다. DEC-0082의 화면·발표 운영을 따른다.
- **Transition:** Q&A4분 뒤 Closing Transition2분. Chatbot → Prompt → Context → Harness → Loop와 마지막 한 문장으로 교육 종료.
- **Estimated Time:** 6분
- **Delivery Mode Allocation:** Transition 2분 + Q&A 4분 = 6분
- **Evidence / Decision References:** BEAT-070, INV-LEARNING-003, INV-DIFFICULTY-001, INV-DELIVERY-001, INV-NARRATIVE-001, BEAT-071
- **Audience Footer:** 목표·판단·검증·책임은 개발자에게 남는다

## Preserved111 introductory and historical records

<details>
<summary>Previous316419a metadata; original editions remain unchanged</summary>

# Official Slide Map

## 현재 제작 기준 — DEC-0177 (2026-11-04)

전체 **111장·372분(6시간12분)**. ACT별 장수는14/23/22/18/19/15장, 시간은42/64/90/64/71/41분이다. Mode는 Lecture170 / Demo44 / Case95 / Reflection17 / Transition21 / Q&A25분이다.

기준판 `724cda4`의 S96 “무엇을 자동화하고, 무엇을 사람이 결정할까?”를 삭제한다. 배정된11분(Reflection2 + Q&A7 + Transition2)도 제외하고 다른 장으로 옮기지 않는다. 이전 S97–S112는 현재 S96–S111로 한 칸씩 당긴다. ACT4는 S78–S96(19장·71분), ACT5는 S97–S111(15장·41분)이다.

S93은 사람이 자리를 비운 동안 허용할 수정·테스트·외부 연결과 접근 금지 대상을 Agent 중심 도식으로 구분한다. S95 사람 검증 뒤 현재 S96 Goal 요청 팁으로 바로 이어진다. 현재 S105(이전 S106)의 평가 도식은 분기·합류 연결선을 같은 굵기와 곡률로 정리하고, 현재 S106(이전 S107)의 화면 머리말에서 C++ VISION을 삭제한다. 근거·주장 경계·남은 장의 시간은 유지한다.

[수정·삭제·번호 대응](ACT45_ANNOTATION_REVISION.md) · [공식 Slide Map](SLIDE_MAP.md)

<details>
<summary>이전 제작 기준 안내 — 112장판 및 이전</summary>

## 현재 제작 기준 — DEC-0168 (2026-11-04)

S100의 중복 작업 흐름 장을 삭제했다. S99는 “이렇게 일을 맡기려면, AI에게 무엇을 연결해야 할까?”로 마무리하고, 새 S100은 필요한 정보·수행 방법·검증 도구를 설명한다. 이전 S101–S113은 새 S100–S112다. 삭제한 3분(강의 1 + 사례 2)을 제외하며 다른 장으로 옮기지 않는다. 전체 112장·383분, ACT5는 S98–S112의 15장·41분이다. ACT별 장수는 14/23/22/18/20/15, 시간은 42/64/90/64/82/41분이며 모드는 강의 170/데모 44/사례 95/성찰 19/전환 23/질의 32분이다.

[삭제·번호 대응 및 제작 기준](S100_WORKFLOW_RECAP_REMOVAL.md) · [현행 Slide Map](SLIDE_MAP.md)

전체 112장·383분. ACT4는 S78–S97(20장·82분), ACT5는 S98–S112(15장·41분)이다. DEC-0160에서 ACT4 연구 두 장을 제외했다.

S77의 점심 전후 대화에서 출발해 S79에서 사람이 첫 검토 지적을 다시 전달하는 상황과 S80에서 그 지적이 다음 수정으로 이어지는 상황을 비교한다. S81은 두 진행 방식을 정리하고, S82는 여섯 구성 역할, S83은 목표에서 사람 인계까지 여덟 작업 단계를 제시한다.

S84–S89는 GitLab 작업 12단계와 네 구간의 산출물을 보여준다. S90에서 작성자와 검토자가 주고받은 근거·남은 지적을 S91의 실행 상태 기록에 연결한다. S92는 Codex 메모리, S93–S94는 무인 실행의 권한·예산 한계, S95–S96은 병합 판단을 맡을 사람의 책임을 다룬다. S97에서 목표·완료 근거·중단 조건을 밝기 통계의 /goal 요청에 담고, S98에서 업무에 맞게 조합하거나 덜어낼 요소를 고른다.

편집 가능한 표는 S54·S81·S85, 차트는 S69에 둔다. S85의 12단계×여섯 역할 표는 PDF p.5의 점 위치를 따른다. S90의 검토 역할과 S91의 인계 기록은 작업 사이의 정보 전달로 연결한다. ACT4 실무 팁은 S83 ‘목표에서 인계까지, 루프의 8단계’, S85 ‘어느 단계에 어떤 도구를 연결할까?’, S92 ‘Codex 메모리로 이전 대화의 맥락을 이어간다’, S94 ‘권한·예산을 넘으면 멈추고 사람에게 넘긴다’, S97 ‘Codex에서 /goal로 목표와 완료 기준을 정한다’다. S109의 작업 환경·기준 찾아보기는 S92와 S94를, S111의 검증·개선 찾아보기는 S83/S85/S94/S97/S105/S106을 가리킨다.

[ACT4 장별 시간표와 PDF 쪽 대응](ACT4_LOOP_OPERATIONS_PROPOSAL.md) · [현행 Slide Map](SLIDE_MAP.md)

## 이전 제작 기준 — DEC-0138 (2026-11-03)

현재 **113장·389분(6시간29분)**. 이전114장판 S68 “절차는 재사용하고, 답은 근거로 정한다”를 삭제한다.
삭제한 Lecture3분만 제외하고 다른 장에 시간이나 설명을 재분배하지 않는다. 방법/판단 도식·강의를 다른 Slide나 활성 Notes에 흡수하지 않는다.
새 참고 자료도 만들지 않는다. 기존 Claim 원칙·원문 SKILL·실행 근거와 원본은 기존 기록/Git 이력에 유지한다.
S66의 macOS풍 Prompt 창·footer 삭제를 유지하고, S67 제작 팁은 기존2분·화면을 유지한다.
S67은 제작 요청이 사용 예시임을 밝힌 뒤 앞서 Skill을 지정했던 실제 밝기 통계 작업으로 돌아간다.
현재 S68은 작업 목표→기존 구현→후보 비교를 설명하고 S69의 별도 제품 변경 전후 측정으로 이어진다. 삭제한 원칙 장을 이미 봤다고 전제하지 않는다.
현재 S68의 eyebrow는 “ACT 3 · Skill을 지정했던 실제 밝기 통계 작업”이며 Title·본문·기록 수치는 그대로다.
이전 S69–S114는 현재 S68–S113로-1한다. ACT3는18장·64분, ACT4는20장·85분, ACT5는16장·44분이다.
전역 Mode는 Lecture169/Demo44/Case102/Reflection19/Transition23/Q&A32다.
Native 표 S54, 차트 S69/S89, Memory S103, Goal S95/S96, 마지막 팁 찾아보기 S110–S112, Closing S113을 사용한다.
현재 S76의 Harness Q&A5분과 S77의 전환2분, ACT4의 같은 목표 구현·검토·수정과 연구 범위를 유지한다.
기존 Beat/Section/Demo/Trial/State/Claim ID와12Templates/28Variants·19Notes 필드는 유지한다.
이번 대상은 실제 지침/행동 대응표를 다뤘던 과거 판본의 다른 S68과 구분한다. 이전에 삭제한 감사 장은 복구하지 않는다.
새 Trial·실측·Skill 인과성/우월성·자동 준수·현재 제품 동작 주장은 없다. Windows·교육장·제품/계정·실측 리허설은 UNVERIFIED다.
Demo 저장소·Sites·발표 묶음은 변경하지 않는다. [삭제·연결 기획](S68_PROCEDURE_RECAP_REMOVAL.md),
[번호 이행](SLIDE_ID_MIGRATION_113_DEC0138.md), [현행 Map](SLIDE_MAP.md)을 따른다. 아래 이전 판본은 당시 이력이다.

| ACT | Current slides | Count | Minutes |
|---|---|---:|---:|
| ACT 0 | S01–S14 | 14 | 42 |
| ACT 1 | S15–S37 | 23 | 64 |
| ACT 2 | S38–S59 | 22 | 90 |
| ACT 3 | S60–S77 | 18 | 64 |
| ACT 4 | S78–S97 | 20 | 82 |
| ACT 5 | S98–S112 | 15 | 41 |
| Total | S01–S112 | 112 | 383 |


</details>

## 유지할 현행 화면과 연결

S66의 DEC-0137 Prompt 창과 근거 경계를 유지한다. S75–S77의 이전 시각 설계는 현재 S74–S76의 같은 역할로 이어진다.
S67 제작 예시→S68 별도 C++ 후보 비교→S69 같은 C++ 실험의 측정·검증으로 연결한다(DEC-0183). S72에서는 원래 Python Demo의 역할 판단으로 돌아가며, 과거 Python 후보·제품 측정은 원자료에 보존한다.

### ACT 0 — 14 slides / 42 minutes

## Previous119-slide ACT3-Memory overview — preserved record

<details>
<summary>Previous DEC-0132 introductory record</summary>

# Official Slide Map

## 현재 제작 기준 — DEC-0132 (2026-11-02)

현재 **119장·405분(6시간45분)**. 이전121장판 S67의 Skill 본문 포함 확인과 S76의 Demo 지식 출처 감사를 삭제한다.
두 장의 설명·결론·대응표·보충 Notes를 인접 Slide나 활성 Notes에 흡수하지 않는다.
삭제된 장의 원본은 Git 이력에 남고 기존 Trial/State/참고 자료의 역사적 기록은 유지한다.
S65 목록 발견 → S66 명시 요청 → 현재 S67 Skill 제작 팁으로 바로 이어진다.
현재 S74 Context/다시 쓸 지식 → S75 실제 작업 구성의 역할 → S76 Harness 구조로 연결한다.
삭제한 Demo2+Lecture4=6분은 재배분하지 않는다. DEMO-03은 S65/S66의1+2=3Demo분이다.
ACT3는25장·84분이며 다른 ACT의 시간·장수와 기존 근거 ID는 유지한다.
Mode Lecture182/Demo44/Case102/Reflection22/Transition23/Q&A32를 사용한다.
Native 표는 S54, 차트는 S70/S96.12Templates/28Variants·19Notes 필드는 유지한다.
과거 CLI 관찰을 현재 Desktop·자동 준수·Skill 단독 효과로 확대하지 않는다.
Windows·교육장·제품/계정·실측 리허설은 UNVERIFIED다. Demo 저장소·Sites·묶음은 변경하지 않는다.
[삭제/연결 기획](S67_S76_REMOVAL.md), [번호 대응표](SLIDE_ID_MIGRATION_119_DEC0132.md)를 따른다.

| ACT | Current slides | Count | Minutes |
|---|---|---:|---:|
| ACT 0 | S01–S14 | 14 | 42 |
| ACT 1 | S15–S37 | 23 | 64 |
| ACT 2 | S38–S59 | 22 | 90 |
| ACT 3 | S60–S84 | 25 | 84 |
| ACT 4 | S85–S104 | 20 | 85 |
| ACT 5 | S105–S119 | 15 | 40 |
| Total | S01–S119 | 119 | 405 |

</details>

## Previous121-slide overview — preserved record

<details>
<summary>Previous121-slide introductory record</summary>

# Official Slide Map

## 현재 제작 기준 — DEC-0131 (2026-11-02)

현재 **121장·411분(6시간51분)**. 이전122장판의 S68 상세 수행 대응표를 본편에서 삭제한다.
표·원자료·조건·한계와 이전 Notes 전문은 [참고 기록](../references/demo-evidence/skill-instruction-action-record.md),
현재 S67 보충 Notes에 보존한다. S67은 “지침 포함과 실제 수행은 별도로 확인한다”로
마무리하고 현재 S68 Skill 제작 팁으로 연결한다. 이전 S69–S122는 현재 S68–S121로-1한다.
S65–S67의 Demo1/2/2분은 그대로다. 삭제한 장의 Demo3+Case3=6분을 제외하고 재배분하지 않는다.
Mode Lecture186/Demo46/Case102/Reflection22/Transition23/Q&A32를 유지한다.
ACT3는27장·90분이며 다른 ACT 시간·장수와 기존 근거 ID는 유지한다.
Native 표는 S54, 차트는 S71/S98.12Templates/28Variants·19Notes 필드는 유지한다.
과거 CLI 관찰을 현재 Desktop·자동 준수·Skill 단독 효과로 확대하지 않는다.
Windows·교육장·제품/계정·실측 리허설은 UNVERIFIED다. Demo 저장소·Sites·묶음은 변경하지 않는다.
[삭제/보존 기획](S68_REMOVAL_AND_EVIDENCE_RETENTION.md), [번호 대응표](SLIDE_ID_MIGRATION_121_DEC0131.md)를 따른다.

| ACT | Current slides | Count | Minutes |
|---|---|---:|---:|
| ACT 0 | S01–S14 | 14 | 42 |
| ACT 1 | S15–S37 | 23 | 64 |
| ACT 2 | S38–S59 | 22 | 90 |
| ACT 3 | S60–S86 | 27 | 90 |
| ACT 4 | S87–S106 | 20 | 85 |
| ACT 5 | S107–S121 | 15 | 40 |
| Total | S01–S121 | 121 | 411 |

</details>

## Previous122-slide overview — preserved record

<details>
<summary>Previous122-slide introductory record</summary>

# Official Slide Map

## 현재 제작 기준 — DEC-0130 (2026-11-02)

현재 **122장·417분(6시간57분)**. 이전120장판의 S65를 발견/명시 요청/본문 포함 확인의
S65–S67로 나눈다. Demo1/2/2분=기존5분이며 새 Trial·실행·성과를 추가하지 않는다.
이전 S66–S120은 현재 S68–S122로+2다. ACT3는28장·96분이며 다른 ACT 시간·장수는 같다.
Mode Lecture186/Demo49/Case105/Reflection22/Transition23/Q&A32를 유지한다.
Native 표 S54/S68, 차트 S72/S99.12Templates/28Variants·19Notes 필드를 유지한다.
CLI0.154.0 관찰과 현재 Desktop·계정·제품 확인, 본문 포함과 실제 수행을 구분한다.
Windows·교육장·제품/계정·실측 리허설은 UNVERIFIED다. Demo 저장소·Sites·묶음은 변경하지 않는다.
[분할 기획](S65_SKILL_EVIDENCE_SPLIT.md), [번호 이행](SLIDE_ID_MIGRATION_122_DEC0130.md),
[현행 Map](SLIDE_MAP.md)을 따른다. 아래 과거 판본의 번호/시간/검증 기록은 해당 이력이다.

| ACT | Current slides | Count | Minutes |
|---|---|---:|---:|
| ACT 0 | S01–S14 | 14 | 42 |
| ACT 1 | S15–S37 | 23 | 64 |
| ACT 2 | S38–S59 | 22 | 90 |
| ACT 3 | S60–S87 | 28 | 96 |
| ACT 4 | S88–S107 | 20 | 85 |
| ACT 5 | S108–S122 | 15 | 40 |
| Total | S01–S122 | 122 | 417 |

</details>

## Preserved120-slide overview — DEC-0130

<details>
<summary>Previous120-slide introductory planning record</summary>

# Official Slide Map

## 현재 Context 구간 순서 — DEC-0125 (2026-11-02)

현재 S45 연구 → S46 주의 사례 → S47 정보 분류 → S48 문서 배치 기준 → S49 실제 문서 분리 →
S50 설계한 탐색 경로 → S51–S54 실제 접근 관찰로 이어진다. 사용자가 지정한 이전120판본
번호 기준의 배치 순서 S46→S47→S45→S49→S50→S48을 적용했다. 현재 번호·시간·Mode는 [정식 Map](SLIDE_MAP.md),
[재배열과 대응표](ACT2_CONTEXT_SEQUENCE.md)를 따른다.120장·417분, ACT2 22장·90분,
해당6장·24분과 내용별 배정·Beat/Section/Demo/Trial/State/Claim ID·근거 범위는 유지한다.
아래 기존 판본의 S번호는 해당 판본의 이력이며 이번 대응표로 일괄 치환하지 않는다.

## 현재 제작 기준 — DEC-0114 (2026-10-30)

현재 **120장·417분(6시간57분)**. 이전121장 판본의 S26–S28을 S26–S27로 정리한다.
S26은 원하는 결과에 맞는 확인 방법을 선택하고, S27은 같은 crop의 오류 수정/시간 단축에
따라 달라지는 검증 요청을 비교한다. 이전 S28은 삭제하고 요청 작성 역할을 S27에서 회수한다.
S26 Lecture2분, S27 Lecture2+Reflection1분으로 기존5분=Lecture4+Reflection1을 유지한다.
이전 S29–S121은 현재 S28–S120으로 한 칸 당긴다. ACT별 장수14/23/22/26/20/15,
시간42/64/90/96/85/40분, Mode Lecture186/Demo49/Case105/Reflection22/Transition23/Q&A32분이다.
ACT0의 crop 명세 설명을 반복하지 않는다. 이전 C++ vector·assertion 반례는 S27 Notes의
선택 참고로 보존하며, 새 두 요청은 교육용 작성 예시이고 실제 TRIAL-002 원문/새 실행이 아니다.
TRIAL-002의 Python 기록·실제 Prompt·수정·검증·성능 미측정과 기존 Claim Boundary를 유지한다.
S25 완료 판단→S26 확인 선택→S27 목표별 요청→S28–S35 문장 도구→S36/S37 반복 Context→
ACT2 S38로 이어진다. 나머지 장의 내용·시간/Mode·Story/Beat/Section/Demo/Trial/State/Claim ID는 유지한다.
Native 표 S54/S66, 차트 S70/S97, 마지막 팁 찾아보기 S117–S119.12Templates/28Variants·19Notes 필드 유지.
Windows·교육장·현재 제품/계정·실측 리허설은 UNVERIFIED다. Demo 저장소·Sites·발표 묶음은 변경하지 않는다.
[현행 Map](SLIDE_MAP.md), [121→120 이행](SLIDE_ID_MIGRATION_120_DEC0114.md),
[검증 요청 설계](VERIFICATION_REQUEST_DESIGN.md)를 따른다. 아래 이전 번호·배정·검증 기록은 당시 이력이다.

| ACT | Current slides | Count | Minutes |
|---|---|---:|---:|
| ACT 0 | S01–S14 | 14 | 42 |
| ACT 1 | S15–S37 | 23 | 64 |
| ACT 2 | S38–S59 | 22 | 90 |
| ACT 3 | S60–S85 | 26 | 96 |
| ACT 4 | S86–S105 | 20 | 85 |
| ACT 5 | S106–S120 | 15 | 40 |
| Total | S01–S120 | 120 | 417 |

</details>

## Historical edition notices

<details>
<summary>121장까지의 이전 안내 — 원문 보존</summary>

# Official Slide Map

## 현재 ACT1→ACT2 연결 — DEC-0113 (2026-10-27)

121장·417분과 모든 장별 시간/Mode/ID를 유지한다. S36의 피드백 팁 뒤 S37은
교육용 crop 요청3문장에서 다음에도 반복할 내용을 생각하고, S38은 같은 문장을
이번 목표와 프로젝트에서 계속 적용하기로 한 기준으로 나눈다. 빈 분류 영역과
화면의 README/의존성 예시는 사용하지 않는다. 실제 TRIAL-002 원문·추가 실행·성과가
아니며 공통 기준의 범위는 프로젝트의 합의와 조건을 확인한다. 저장 방법은 미리 답하지
않고 S39 제목→S40의 서로 다른3작업에 같은 설명이 반복되는 장면으로 이어간다.
S37 Reflection1+Q&A2=3분, S38 Reflection1+Transition3+Q&A2=6분이다.
ACT1 24장·64분, 전체 Mode와 근거 범위는 그대로다. [현재 연결](ACT1_CONTEXT_HANDOFF.md),
[현행 Map](SLIDE_MAP.md)을 따른다. 아래 이전 번호·설계·검증 기록은 당시 이력이다.

## 현재 제작 기준 — DEC-0112 (2026-10-27)

현재 **121장·417분(6시간57분)**. 이전 S26을 S26–S28의3장으로 나눈다.
S26은 요청할 확인과 범위, S27은 비어 있지 않음 검사의 한계,
S28은 기대 결과·검사·보고를 담은 요청이다. 기존5분을90초/90초/120초로 나누고
Lecture4분+Reflection1분을 유지한다. 이전 S27–S119는 S29–S121로+2 이행한다.
ACT별 장수14/24/22/26/20/15, 시간42/64/90/96/85/40분.
Mode Lecture186/Demo49/Case105/Reflection22/Transition23/Q&A32분.
실제 TRIAL-002는 Python의 기존 관찰 기록이며 S27/S28의 C++ 반례·요청·assertion은
교육용 예시다. 당시 assertion 원문·추가 실행·PASS/FAIL·성능 측정으로 표현하지 않는다.
S21 실제 요청→S22 과정→S23 변경→S24 확인→S25 수용→S26–S28 완료 조건→
S29–S36 요청 문장 도구→S37–S38 반복 Project Context의 흐름을 유지한다.
원복한 S14, 기존 Story/Beat/Section/Demo/Trial/State/Claim ID와 나머지 장별 배정은 유지한다.
Native 표는 S55/S67, 차트는 S71/S98, 마지막 팁 찾아보기는 S118–S120이다.
12Templates/28Variants·19Notes 필드를 유지한다. Windows·교육장·현재 제품/계정·
실측 리허설은 UNVERIFIED다. Demo 저장소·Sites·발표 묶음을 변경하지 않는다.
[현재 Map](SLIDE_MAP.md), [번호 이행](SLIDE_ID_MIGRATION_121.md),
[3장 분할 기준](S26_VERIFICATION_REQUEST_SPLIT.md)을 우선한다.
아래 이전 판본의 번호·시간·평가·제작 기록은 당시 이력으로 보존한다.

| ACT | Current slides | Count | Minutes |
|---|---|---:|---:|
| ACT 0 | S01–S14 | 14 | 42 |
| ACT 1 | S15–S38 | 24 | 64 |
| ACT 2 | S39–S60 | 22 | 90 |
| ACT 3 | S61–S86 | 26 | 96 |
| ACT 4 | S87–S106 | 20 | 85 |
| ACT 5 | S107–S121 | 15 | 40 |
| Total | S01–S121 | 121 | 417 |


</details>

## Historical edition notices

<details>
<summary>119장까지의 이전 안내 — 원문 보존</summary>

# Official Slide Map

## 현재 제작 기준 — DEC-0108 / DEC-0109 / DEC-0110 / DEC-0111 (2026-10-27)

현재 **119장·417분(6시간57분)**. 이전 S15 제조 검사 전환 장을 삭제하고
이전 S16–S120을 S15–S119로 한 칸 당긴다. S14는 정보 접근과 사람의 최종 판단을
구분하던 이전 화면을 유지하고, ACT0 Q&A 후 ACT1 제목으로 이어간다.
삭제 장의 전환3분은 줄이고 Q&A3분은 S14에 남긴다. S14는 Lecture2+Q&A3=5분이다.
ACT별 장수14/22/22/26/20/15, 시간42/64/90/96/85/40분.
Mode Lecture186/Demo49/Case105/Reflection22/Transition23/Q&A32분.
다른 장의 내용·장별 시간/Mode·근거·Trial/State/Beat/Section ID는 유지한다.
ACT1 S16–S18은 DEC-0110에 따라 같은 crop 수정 요청으로 연결한다.
빠진 기준 확인→허용 범위 비교→구체 요청 순서이며 교육용 예시다.
S19–S20에서 일반화한 뒤 S21은 DEC-0111에 따라 실제 TRIAL-002 요청을
발췌·번역하고 다섯 역할을 원문 밖 주석으로 연결한다. Context 문단은 만들지 않는다.
S22는 같은 과정 지시 01–03을 행동 기록과 대조한다. S16–S18은 교육용 예시다.
[실제 요청 연결](S21_TRIAL_REQUEST_MAP.md)을 따른다.
[현재 ACT1 사례](ACT1_SINGLE_CROP_CASE.md)를 따른다.
Native 표는 S53/S65, 차트는 S69/S96, 마지막 팁 찾아보기는 S116–S118이다.
12Templates/28Variants·19Notes 필드는 유지한다. 제품·Windows·교육장·리허설은
UNVERIFIED다. Demo 저장소·Sites·발표 묶음은 변경하지 않는다.
[현재 Map](SLIDE_MAP.md), [번호 이행](SLIDE_ID_MIGRATION_119.md),
[삭제·연결 범위](ACT0_S15_REMOVAL.md)를 우선한다. 아래 이전 판본은 당시 이력이다.

| ACT | Current slides | Count | Minutes |
|---|---|---:|---:|
| ACT 0 | S01–S14 | 14 | 42 |
| ACT 1 | S15–S36 | 22 | 64 |
| ACT 2 | S37–S58 | 22 | 90 |
| ACT 3 | S59–S84 | 26 | 96 |
| ACT 4 | S85–S104 | 20 | 85 |
| ACT 5 | S105–S119 | 15 | 40 |
| Total | S01–S119 | 119 | 417 |


</details>

## Historical edition notices

<details>
<summary>120장 판본까지의 안내 — 원문 보존</summary>

# Official Slide Map

## 현재 제작 기준 — DEC-0104 (2026-10-26)

현재 **120장·420분(7시간)**. 기존 S55 뒤에 실무 적용 팁 S56–S58을
Lecture3/3/2분으로 추가한다. 기존117장의 Story·근거·장별 시간/Mode는 유지한다.
이전 S56–S117은 +3 이행한다. ACT별 장수15/22/22/26/20/15,
시간45/64/90/96/85/40분. Mode Lecture186/Demo49/Case105/Reflection22/Transition26/Q&A32분.
S56 지침 배치 → S57 공통·모듈 지침 결합 → S58 적용 범위와 시작 시 자동 수집의 차이.
공식 안내를 활용한 프로젝트 적용 예이며 기존 graypipe의 실제 State/Trial에 추가한
관찰이 아니다. 기존 문서 Routing과 새로운 중첩 AGENTS.md의 지침 범위를 구분한다.
마지막 찾아보기 S117에 새3장을 묶은 항목만 추가한다.12Templates/28Variants·19Notes 필드 유지.
[현재 설계](AGENTS_SCOPE_TIPS.md), [번호 이행](SLIDE_ID_MIGRATION_120.md), [현재 Map](SLIDE_MAP.md).
아래 이전 번호·시간·제작/검증 결과는 당시 판본의 이력이다. 현재 목록은 위 기준을 따른다.
Windows/교육장/제품·계정/실측 리허설은 UNVERIFIED. Demo 저장소·웹·발표 묶음은 변경하지 않는다.

## 현재 하단 표기 — DEC-0103 (2026-10-26)

117장·412분과 기존 본문/근거/장별 배정은 유지한다. 하단 제작·관리 문구를 삭제/축약하고 전체 상세는 Notes에 보존한다. 각 레코드의 Audience Footer와 [표기 기준](FOOTER_CLEANUP.md)을 따른다. 기존 M1–M9 표시는 유지한다.

## 현재 제작 기준 — DEC-0101 (2026-10-26)

현재 **117장·412분(6시간52분)**. 기존 S03 뒤에 VS Code + GitHub Copilot
사용 팁 S04를 Lecture2분으로 추가한다. 기존116장의 내용·디자인·장별 시간/Mode·
근거는 유지하며 이전 S04–S116의 번호와 현재 참조만 +1 이행한다.
이전 S04(현재 S05)와 이전 S12(현재 S13)의 문구·구성도 그대로 유지한다.
ACT 장수15/22/19/26/20/15, 시간45/64/82/96/85/40분.
Mode Lecture178/Demo49/Case105/Reflection22/Transition26/Q&A32분.
팁은 회사에서 사용하는 조합의 활용 안내이며 재구성한 UI·교육용 요청이다.
회사 화면·Copilot 응답·실행·효과를 관찰한 근거가 아니며 대상 계정은 미검증이다.
[추가 범위](COPILOT_IDE_TIP.md), [116→117 번호](SLIDE_ID_MIGRATION_117.md),
[현행 Map](SLIDE_MAP.md)를 따른다. 기존 팁 찾아보기는 새 항목을 넣지 않고
기존 제목·참조만 보존한다. 아래 이전 판본은 당시 번호·시간·검증 이력이다.
Windows/교육장/제품·계정/실측 리허설은 UNVERIFIED다. 웹·발표 묶음·Demo 저장소는 변경하지 않는다.

## 현재 ACT5 종합 — DEC-0099 (2026-10-25)

116장·410분과 ACT별 장수·시간을 유지한다. S103–S107은 Demo 사전 지식 없이
작업 범위·흐름·수행 조건·수용 책임을 종합한다. 개인 문제 선택과 다음 행동은
S111/S112에만 둔다. S104는 TEACHING_MODEL이며 VISUAL Demo2분을 Case2분으로
정렬한다. Mode Lecture176/Demo49/Case105/Reflection22/Transition26/Q&A32분.
[승인 설계](ACT5_OPENING_SYNTHESIS.md)를 우선한다. 기존 실제 이력은 보존 기록이며
새 Trial·제품 실행·성과 근거로 바꾸지 않는다. S108 이후와 근거 범위는 유지한다.

## 현재 제작 기준 — DEC-0098

116장·410분(6시간50분). ACT4 S82–S101은20장·85분, ACT5는 S102–S116의15장·40분이다. ACT 장수14/22/19/26/20/15와 시간43/64/82/96/85/40분. Mode Lecture176/Demo51/Case103/Reflection22/Transition26/Q&A32분이다.

S98 뒤에 Goal 실무 팁 S99/S100을 Lecture2분씩 추가했다. 기존114장의 시간·Mode·
Story·근거 범위를 유지한다. 이전 S99–S114는 S101–S116이다. Goal 안내는 공식 문서의
사용법을 각색한 도식이며 실제 활성화·새 Trial·자동 다중 모델 배정·성과의 근거가 아니다.
ACT5 초반은 대응 선택→실제 제품 이력의 경계→구성 보류 이유→수용 책임으로 이어진다.
[적용 설계](GOAL_TIPS_AND_ACT5_HANDOFF.md), [114→116 번호](SLIDE_ID_MIGRATION_116.md).
제품·계정·Windows·교육장·실측 리허설은 UNVERIFIED다.



</details>

## Historical consolidation and traceability records

아래 번호·배정·검증은 당시 판본의 이력이다. 현행 레코드와 DEC-0098이 우선한다.

## 현재 정합성 기준

114 records; ACT counts14/22/19/26/18/15; ACT minutes43/64/82/96/81/40.
Mode172/51/103/22/26/32=406. Each record is the active source for Notes and production.
Actual rendering/structure review is recorded in production/evaluation/ACT_4_GOAL_LOOP_REVISION.md.

## 이전 통합·승인 이력 —115장 제작판

아래 번호·정의·시간·검증은 이전 판본의 이력이다. 현재 제작 기준으로 적용하지 않는다.

#### Historical — STEP 08 — 통합 Slide Map (S01–S105)

#### Historical — 현재 ACT4 루프 판단 정렬 — DEC-0094 (2026-10-25)

현재115장·406분, ACT4 S82–S100의19장·81분과 모든 장별 시간/Mode/근거 등급을 유지한다.
S83/S86에서 작업 수행 루프와 체계 개선 루프를 구분한다. S90–S94는 변경 후보,
대조할 기록, 평가 뒤 완료·채택/재시도/중단·사람 확인을 연결한다. S99의 실제 후속
확인은 부분적이며 다음 개선 질문은 제안/미실행이다. S100은 기록·기준·재평가를
다음 작업으로 연결한다. [현재 설계](ACT4_LOOP_CONTROL.md). 아래 판본별 기록은 이력이다.

#### Historical — 현재 Codex 제작 팁 — DEC-0093 (2026-10-25)

현재115장·406분(6시간46분). 기존113장의 Story·장별 시간/Mode·근거를 유지하고
이전 S62 뒤 새 S63에 Skill 제작 팁, 이전 S66 뒤 새 S68에 Custom Agent 제작 팁을
각 Lecture2분씩 추가한다. 이전 S63–S66은 +1, 이전 S67 이후는 +2다.
ACT 장수14/22/19/26/19/15, 시간43/64/82/96/81/40분. Mode164/73/88/21/28/32분.
ACT4는 S82–S100의19장·81분, ACT5는 S101–S115의15장·40분을 그대로 유지한다.
실무 적용 팁은19개이며 마지막 찾아보기 S112–S114의 기존 세 장에 모두 연결한다.
공식 자료를 각색한 요청·문서 도식이며 실제 생성·실행·TRIAL-008 제작 이력이 아니다.
12Templates/28Variants·19Notes 필드 유지. 새 Trial·Agent/Skill 설치·Demo 저장소·묶음 변경 없음.
[현재 팁 설계](CODEX_AUTHORING_TIPS.md), [113→115 번호](SLIDE_ID_MIGRATION_115.md),
[Slide Map](SLIDE_MAP.md). 아래 이전 판본의 번호·시간·검증은 이력으로 보존한다.
Windows/교육장/제품·계정/실측 리허설은 UNVERIFIED다.

#### Historical — 이전 ACT3→ACT4 연결 — DEC-0092 (2026-10-25)

113장·402분, 장별 시간/Mode·번호 불변. S72–S73의 Harness 재사용 가치는 유지한다.
S74–S79는 확인한 성공→운영 중 사람의 보정→이번 요청과 원본 체계의 차이→반복 보정→
개선 판단에 필요한 기록→근거·검토 책임의 질문으로 ACT4의 필요를 드러낸다.
권한 오류·전역 지침·시작 경고 목록을 이 구간의 중심에서 뺀다. S75–S77의 반복 상황은
CONCEPTUAL이며 실제 graypipe 실패·반복 Trial이 아니다. 실제 기록은 원자료·ACT4에 보존한다.
ACT4 S80–S98의19장·81분·구성·장별 Mode·근거는 그대로다.
[현재 연결 설계](ACT3_LOOP_HANDOFF.md), [현재 검토](../production/evaluation/ACT3_LOOP_HANDOFF_REVISION.md).
Windows/교육장/제품·계정/실측 리허설 UNVERIFIED. 새 Trial·발표 묶음·Demo 저장소 변경 없음.

#### Historical — 이전 Harness 재사용·실행 조건 설명 — DEC-0091 (2026-10-25)

현재 **113장·402분(6시간42분)**. S71 다음 S72–S73에서 Harness 재사용의 가치를
먼저 설명하고, 이전 S72는 S74–S78의5장으로 나눈다. 이전 S73의 독립 C++ 전이 장은
사용자 승인으로 삭제한다. 기존 S74는 S79, ACT4는 S80–S98, ACT5는 S99–S113이다.
ACT4의19장·81분·구성·장별 Mode·실제 개선 사례는 그대로 보존한다.
신규7장은 Lecture2분씩14분이며, 교체3분과 삭제5분을 빼 순증6분이다.
ACT 장수14/22/19/24/19/15, 시간43/64/82/92/81/40분. Mode Lecture160/Demo73/
Case88/Reflection21/Transition28/Q&A32분.12Templates/28Variants와19개 Notes 필드를 유지한다.
재사용 설계는 교육용 모델이며 다른 프로젝트 이식·성능 효과를 실험한 결과가 아니다.
17개 실무 적용 팁은 유지하되 삭제한 C++ 팁 대신 S78 기록 팁을 마지막 S110에 연결한다.
[설계](HARNESS_REUSE_AND_EXECUTION_CONTEXT.md), [108→113 번호](SLIDE_ID_MIGRATION_113.md),
[현재 Slide Map](SLIDE_MAP.md). 아래 이전 판본의 번호·시간·검증 범위는 이력이다.
Windows·교육장·제품/계정·실측 리허설은 UNVERIFIED다. 발표 묶음·Demo 저장소는 변경하지 않는다.

#### Historical — 이전 ACT 제목 슬라이드 — DEC-0090 (2026-10-25)

현재108장·396분(6시간36분). 승인된 제목·부제로 각 ACT 시작에 제목1장씩 추가한다.
기존102장의 내용·장별 시간/Mode·근거 범위·팁 배지·마지막 팁 요약은 유지한다.
새 제목은 전환 안내이며 각 Transition1분이다. ACT14/22/19/19/19/15장,
43/64/82/86/81/40분. Mode Lecture154/Demo73/Case88/Reflection21/Transition28/Q&A32분.
제목 S01/S15/S37/S56/S75/S94 뒤에 기존 첫 문제 장이 이어진다.
[제목 기준](ACT_TITLES.md), [102→108 이행표](SLIDE_ID_MIGRATION_108.md).
이전 판본 기록은 당시 번호·시간이며 아래108개 Slide 필드가 현행 기준이다.

#### Historical — 이전 배치 / Historical placement — DEC-0088 (2026-10-25)

現在102장·390분(6시간30분). 기존17개 팁 본문과 공통 배지는 맥락에 남기고,
ACT 중간의6개 찾아보기는 없애 마지막 Q&A/Closing 직전의 S99–S101로 통합한다.
기존99개 본문 장의 내용·시간/Mode·근거는 보존한다. 마지막 찾아보기만3Lecture분이다.
ACT 장수13/21/18/18/18/14, 시간42/63/81/85/80/39분. Mode154/73/88/21/22/32분.
[배치 기준](PRACTICAL_APPLICATION_TIPS.md), [105→102 이행표](SLIDE_ID_MIGRATION_102.md).
아래 이전 승인·검증 기록은 당시 판본이다. 현행102개 필드는 아래 Slide Map을 따른다.

#### Historical — Current practical application tips — DEC-0087 (2026-10-25)

현재105장·393분(6시간33분). 기존99장의 내용·장별 배정을 보존하고 각 ACT의 전환
앞에 찾아보기1장/Lecture1분씩 추가했다.17개 기존 적용 기준에 “실무 적용 팁”과
분류 배지를 붙인다. 목록은 기존 제목·현재 ID만 안내하며 다음 문제/성찰/마무리의
순서를 보존한다. [팁 목록·배치 기준](PRACTICAL_APPLICATION_TIPS.md),
[99→105 이행표](SLIDE_ID_MIGRATION_105.md). 기존 근거 범위와 실환경 미검증은 유지한다.
아래 이전 판본 소개는 당시 기록이며 현행105개 필드는 이 문서의 Slide Map을 따른다.

#### Historical — Historical ACT0 expansion — DEC-0084 (2026-10-25)

S05–S07을 S05–S10의6장으로 나눈다: Crop 결과→근거 연결→별도 환경 오류→필요한 Context→사람의 전달→Agent의 조사. 현재99장·387분, ACT0 13장·42분이다. 기존 Demo8분과 Case5분을 나누고 Lecture2분만 추가한다. 이전 S08–S96은 S11–S99로 이동한다. [현재 번호 대조](SLIDE_ID_MIGRATION_99.md), [설계](ACT0_CONTEXT_EXPANSION.md)를 우선하며 아래 이전 기록은 당시 판본이다.

#### Historical — Historical ACT5 reassessment — DEC-0083 (2026-10-25)

S90 뒤에 S91–S93의 재평가3장을 추가한다. 모델·플랫폼·업무 조건 변화에 따른
기존 구조 재평가 → 유지·통합·제거 후보 → 대표 작업 검증으로 이어진다.
이전 S91–S93은 S94–S96이며, S94/S95의 A–E 문제·행동에 통합·제거를 연결한다.
현재96장·385분, ACT5 11장·36분이다. 기존93장의 내용과 장별 시간/Mode는
보존하고 Lecture2분씩만 더했다. [설계](ACT5_HARNESS_REASSESSMENT.md),
[번호 대조](SLIDE_ID_MIGRATION_96.md)를 우선한다. 아래 DEC-0082와 과거 기록의
당시 번호·장수는 이행표로 읽는다. 새 Trial·효과 측정·Demo State는 없다.

#### Historical — Historical ACT5 recap and closing — DEC-0082

S86–S93 follow [ACT5_FLOW_REVISION](ACT5_FLOW_REVISION.md): distinct
problem/response recap, bounded actual Product history, selection rationale,
human acceptance, work-system design, A–E problem/action and closing roles.
Preserve93/379, ACT5 8/30, every budget/Mode, stable IDs and evidence scope.
S87 retains seven State IDs; three chronological groups are not new States.
S93 uses Chatbot→Prompt→Context→Harness→Loop. Older literal screen cues are
history where they differ from the current fields below.

> **현재 ACT4 후반: DEC-0081.** S76–S85의 평가 범위·단계별 판단·실제 평가/보고 사례·C++ 적용과 S86 handoff를 정렬한다.93장·379분·장별 시간/Mode·근거 경계·Template/Beat IDs는 유지한다. S68–S75의 DEC-0080 흐름도 유지한다. [현재 설계](ACT4_FLOW_REVISION.md).

> **최신 ACT3→ACT4 연결: DEC-0080.** 유지 책임·Skill/Workflow 용어를 연결하고 S72–S74를 확인 대상→정보/가설→조건부 변경 대상 선택으로 정렬한다. S63–S65·S80–S81의 재설명을 줄이고 S69·S79 가독성을 개선한다.93장·379분·장별 시간/Mode·실제/가상/Meta 경계는 유지한다. [설계](ACT3_ACT4_HANDOFF_REVISION.md).

> **이전 S67 수정: DEC-0079.** 반복 정보·절차·검증 근거 중 하나를 고른 뒤 둘 위치와 검토·갱신 책임을 생각하는 도식으로 정리한다. 개인 성찰·선택적 공유, 기존10분/Mode와 실제 성공→별도 가상 변화 경계를 유지한다. [수정 검토](../production/evaluation/S67_REFLECTION_OWNERSHIP_REVISION.md).

> **이전 S66 수정: DEC-0078.** 명세·수행 방법·검증 근거를 밝기 통계 Demo→C++ 검사 업무의 세 대응 행으로 정리한다. 승인된 삽화와 교육용 경계·Lecture5분을 유지하고 입력·빌드·장비 조건을 S65와 연결한다. [수정 검토](../production/evaluation/S66_CPP_TRANSFER_REVISION.md).

> **이전 S65 수정: DEC-0077.** 같은 Repository와 저장소 밖 조건이 한 Agent 실행에 적용되는 관계를 보여준다. 상단 교육용 구성과 TRIAL-006의 실제 관찰·해석 한계를 구분하며 Meta 프레임·Lecture3분·기존 근거를 유지한다. [수정 검토](../production/evaluation/S65_EXTERNAL_CONDITIONS_REVISION.md).

> **이전 S64 수정: DEC-0076.** S63의 입력·작업·검증 구도를 전체 Harness로 묶고 실행 환경을 작업·검증 양쪽의 공통 기반으로 시각화한다. 교육용 정의와 제한된 실제 구성 대응, 사람의 검토 책임 및 기존 시간·근거를 유지한다. [수정 검토](../production/evaluation/S64_HARNESS_STRUCTURE_REVISION.md).

> **이전 S63 수정: DEC-0075.** 실제 밝기 통계 작업에서 목표·Context·Skill이 한 작업에 적용되고 테스트·benchmark가 판단 근거를 제공한 관계를 짧은 도식으로 정리한다. S62의 출처 감사와 S64의 전체 작업 환경 모델을 구분하며 근거·시간을 유지한다. [수정 검토](../production/evaluation/S63_TASK_ROLES_REVISION.md).

> **이전 S62 수정: DEC-0074.** 실제 Demo 지식의 원래 위치를 코드·문서·Skill·Trial 기록 네 출처로 시각화한다. 기존 출처에서 확인할 수 있었고 별도 보존 후보를 찾지 못했다는 Memory 판단을 연결하며 기존 근거·시간을 유지한다. [수정 검토](../production/evaluation/S62_KNOWLEDGE_SOURCES_REVISION.md).

> **이전 S61 수정: DEC-0073.** 이번 Context에서 다음에도 쓸 검증된 재현 조건을 골라 출처·범위·재확인 조건과 함께 유지할지 판단하는 도식으로 정리한다. 보존 목적과 다음 사용 전 현재 명세 대조를 연결하며 기존 CONCEPTUAL 경계를 유지한다. [수정 검토](../production/evaluation/S61_CONTEXT_RETENTION_REVISION.md).

> **이전 S60 수정: DEC-0072.** 실제 밝기 통계 작업에서 조사 결과를 코드 변경으로, 바뀐 코드를 검증으로 전달하는 의존관계를 시각화한다. 같은 코드·명세와 전달·통합 비용을 바탕으로 한 Agent를 유지한 기존 판단과 근거 범위를 보존한다. [수정 검토](../production/evaluation/S60_TASK_DEPENDENCY_REVISION.md).

> **이전 S59 수정: DEC-0071.** 같은 세 조사를 한 Agent가 맡는 경우와 Subagent별로 나누는 경우를 비교하고, 주 Agent의 분담·근거 확인·통합 책임을 연결한다. 기존 C++ 가정이며 실제 실행·이득을 주장하지 않는다. [수정 검토](../production/evaluation/S59_ROLE_SPLIT_REVISION.md).

> **이전 S57–S58 수정: DEC-0070.** 밝기 통계 작업·기존 임시 리스트·후보 선택을 연결하고, 제품 반영 후 시간·할당량·동작 검증을 세 영역으로 정리한다. S50–S56 흐름을 재검토하고 보존했다. [수정 검토](../production/evaluation/S57_S58_TASK_RESULT_REVISION.md).

> **이전 S57 수정: DEC-0069.** 공통 검증 조건과 후보별 시간·선택을 두 행에 정리해 S56의 판단 질문을 회수하고 S58의 제품 상태 검증으로 넘긴다. [수정 검토](../production/evaluation/S57_CANDIDATE_SELECTION_REVISION.md).

> **이전 S56 수정: DEC-0068.** 재사용할 Skill 절차와 이번 측정·검증 근거로 판단할 답을 관계도로 구분한다. [수정 검토](../production/evaluation/S56_REUSABLE_PROCEDURE_REVISION.md).

> **이전 S55 수정: DEC-0067.** 본문 포함과 수행 근거를 구분하고, Skill 지침의 번역 요약과 실제 출력·메시지·diff를 대응한다. [수정 검토](../production/evaluation/S55_SKILL_ACTION_EVIDENCE_REVISION.md).

> **이전 S53–S54 수정: DEC-0066.** S53의 연결선 굵기를 통일하고, S54의 목록·명시 호출·본문 포함 근거를 시각적으로 연결한다. [수정 검토](../production/evaluation/S53_S54_SKILL_EVIDENCE_REVISION.md).

> **이전 승인 기준: DEC-0060 /93장·379분 (2026-10-22).** ACT 2 전체 흐름 개선을 승인받아 연구 설명을 분리하고 의존성 답변/성과 회수3장을 보강했다. ACT 2는 S32–S49,18장·81분이다. 기존90장 내용과 각 장의 시간은 보존하며 신규 Lecture6/Case4/Reflection1분을 더한다. [90→93 번호·역할 대조](SLIDE_ID_MIGRATION_93.md). 사용자 허용 상한720분이며379분은 제작 기준, 리허설 실측은 UNVERIFIED다.

> **이전 S53 내용 수정: DEC-0065.** 작업마다 바뀌는 요청과 공동 관리할 Skill의 재사용 관계·선택 이유를 시각화한다. [S53 수정 검토](../production/evaluation/S53_SKILL_REUSE_REVISION.md).

> **이전 S52 내용 수정: DEC-0064.** 목표·프로젝트 기준·재사용할 수행 방법이 한 작업에 적용되는 관계를 시각화한다. [S52 수정 검토](../production/evaluation/S52_TASK_COMPOSITION_REVISION.md).

> **이전 S51 내용 수정: DEC-0063.** 테스트 명령의 적용 시점과 판단 기준을 시각화하고 S50·S52 Notes 연결을 정렬한다. [S51 수정 검토](../production/evaluation/S51_COMMAND_WORKFLOW_REVISION.md).

> **최신 ACT3 전체 흐름 수정: DEC-0062.** S50–S67/18장·85분, 기존 장별 시간·Mode·ID를 유지한다. Skill 문서와 관찰 기록을 대응하고, S59/S61의 명시적 가정 뒤 S60/S62에서 현재 사례의 선택을 회수한다. [ACT3 흐름 설계](ACT3_FLOW_REVISION.md). 실제 Subagent·Memory 사용이나 새로운 효과 측정은 추가하지 않는다.

> 상태: **COMPLETE WITH GAPS** — 승인된 93장 구조·시간·Mode를 통합했다. 대상 계정·제품 표면·구체적 Windows 환경의 확인은 CLAIM_FREEZE.md에 남은 범위대로 열어 둔다.
>
> 이 문서는 §§151–160의 지시에 따라 STEP 08 이후 공식 Slide Map의 Source of Truth다. 기존 10장 단위 결과는 Historical Working Draft로 보존하며, 이후 Slide 관련 산출물은 이 문서를 기준으로 한다. Map 내용 변경은 근거와 영향 범위를 DECISIONS.md에 기록한다.

#### Historical — 80장 최초 통합 이력 — 범위와 원본 복구

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

#### Historical — 기준 문서

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

#### Historical — 승인된 전체 일정

| ACT | Slide 수 | 시간 |
|---|---:|---:|
| ACT 0 | 14 | 43분 |
| ACT 1 | 22 | 64분 |
| ACT 2 | 19 | 82분 |
| ACT 3 | 24 | 92분 |
| ACT 4 | 19 | 81분 |
| ACT 5 | 15 | 40분 |
| **전체** | **113** | **402분** |

#### Historical — Section 시간

| ACT | 승인된 Section 분배 |
|---|---|
| ACT 0 | 0A 6 · 0B 5 · 0C 4 · 0D 15 · 0E 7 · 0F 6 = 43분 |
| ACT 1 | 1A 8 · 1B 8 · 1C 10 · 1D 10 · 1E 6 · 1F 5 · 1H 8 · 1G 9 = 64분 |
| ACT 2 | 2A 6 · 2B 8 · 2C 5 · 2D 8 · 2E 12 · 2F 9 · 2G 18 · 2H 3 · 2I 13 = 82분 |
| ACT 3 | 3A 10 / 3B 5 / 3C 15 / 3D 13 / 3E 8 / 3F 8 / 3G 23 / 3I 10 = 92분 |
| ACT 4 | 4A 5 · 4B 9 · 4C 8 · 4D 13 · 4E 11 · 4F 15 · 4G+4H 20 = 81분 |
| ACT 5 | 5A 22 · 5B 18 = 40분 |

#### Historical — Delivery Mode 합계

| Mode | 승인 시간 |
|---|---:|
| Lecture | 160분 |
| Demo | 73분 |
| Case | 88분 |
| Reflection | 21분 |
| Transition | 28분 |
| Q&A | 32분 |
| **전체** | **402분** |

ACT별 Mode 대조:

| ACT | Lecture | Demo | Case | Reflection | Transition | Q&A | 합계 |
|---|---:|---:|---:|---:|---:|---:|---:|
| ACT 0 | 15 | 8 | 9 | 4 | 4 | 3 | 43 |
| ACT 1 | 26 | 8 | 18 | 4 | 4 | 4 | 64 |
| ACT 2 | 34 | 13 | 18 | 5 | 5 | 7 | 82 |
| ACT 3 | 39 | 20 | 20 | 3 | 3 | 7 | 92 |
| ACT 4 | 22 | 22 | 22 | 3 | 5 | 7 | 81 |
| ACT 5 | 24 | 2 | 1 | 2 | 7 | 4 | 40 |
| **합계** | **160** | **73** | **88** | **21** | **28** | **32** | **402** |

#### Historical — Slide Map

#### Historical — ACT 0 — 14 slides / 43 minutes

## Current traceability and validation — DEC-0091

113slides/402minutes. ACT4 retains all19slides/81minutes and per-slide Mode.
New S72–S78 explain reuse and execution conditions; prior S73 is removed.
See HARNESS_REUSE_AND_EXECUTION_CONTEXT.md and SLIDE_ID_MIGRATION_113.md.

## Historical108-slide validation — DEC-0090

108slides/396minutes; six ACT title pages introduce the approved themes.
All102retained budgets/evidence and17tip badges remain. Final review:
production/evaluation/ACT_TITLE_SLIDES.md.

## Historical102-slide validation — DEC-0088

102slides/390minutes. All99body pages retain their content, budget and evidence;
17application badges remain. Six interleaved indexes become one final3page block
before the original Q&A/Closing. No new claim, product behavior or Trial is added.
Final checks: production/evaluation/FINAL_PRACTICAL_TIPS_CONSOLIDATION.md.

## Historical105-slide validation — DEC-0087

105slides/393minutes,17tip slides,6reference indexes. Existing99titles/budgets/modes,
Beat/Section/Demo/Trial/State/Claim IDs and source boundaries are preserved under
99→105. Indexes add navigation only; no product behavior or successful run is added.
Final package/Notes/PNG checks are recorded in production/evaluation/PRACTICAL_APPLICATION_TIPS.md.

## Historical99-slide audit — DEC-0084

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


## Historical current-router snapshot — before DEC-0135

# Official Slide Map

## Harness 관계·재사용·조립 시각화 — DEC-0134 (2026-11-02)

S75는 주 Agent 아래 선택 Subagent를 교육용 점선으로 분리하고 실제 Demo의 단일 Agent 범위를 유지한다.
S76은 같은 Harness 모듈이 프로젝트 A/B/C 내부에 재사용되는 모습, S77은 그 모듈과 프로젝트 Context의 조립 관계를 보여준다.
119장·405분·장별 시간/Mode·ID·Story Beat·Section과 근거 범위는 같다. [시각 설계](HARNESS_VISUAL_SYSTEM.md)를 따른다.

## 현재 제작 기준 — DEC-0133 (2026-11-02)

현재 **119장·405분(6시간45분)**. 이전 S74의 Context/Memory 학습을 현재 S109로 옮긴다.
현재 S108 결과 수용 → S109 재사용할 지식 선별 → S110 AI가 일할 조건 설계로 이어진다.
S109는 C++ 프로젝트에서 성능 비교 조건을 확인했다는 교육용 가정이다.
이번 로그·측정값과 다음에도 쓸 조건을 구분하고 출처·적용 범위·갱신 조건을 함께 남긴다.
'이 프로젝트에서는 Release 빌드·동일 입력으로 비교'는 가정의 기준이며 실제 Python Trial 결과가 아니다.
다음 작업에서 현재 조건과 대조해 지식을 Context로 활용한다. 제품 자동 저장·회수나 측정 성과를 주장하지 않는다.
이전 S75–S109는-1, 이전 S74는현재 S109, 나머지는 그대로다. ACT3 S73→S74 실제 구성으로 바로 잇는다.
앞선 ACT의 설명/화면에서 Memory를 먼저 강의하지 않고 반복 상태 전달의 기존 메시지만 유지한다.
원 Section3F·BEAT-026–028·Claim/Evidence ID를 유지하며 ACT5 배치를 명시한다.
S109의 기존4분(Demo2 VISUAL+Case2)을 함께 옮긴다. ACT3 24장·80분, ACT4 20장·85분, ACT5 16장·44분이다.
Mode Lecture182/Demo44/Case102/Reflection22/Transition23/Q&A32와 다른 장의 시간은 유지한다.
Native 표는 S54, 차트는 S70/S95.12Templates/28Variants·19Notes 필드를 유지한다.
삭제한 이전121판 S67/S76의 감사 내용은 복구하거나 흡수하지 않는다.
Windows·교육장·제품/계정·실측 리허설은 UNVERIFIED다. Demo 저장소·Sites·묶음은 변경하지 않는다.
[이동·개선 기획](MEMORY_ACT5_RELOCATION.md), [번호 대응표](SLIDE_ID_MIGRATION_MEMORY_ACT5_DEC0133.md)를 따른다.

| ACT | Current slides | Count | Minutes |
|---|---|---:|---:|
| ACT 0 | S01–S14 | 14 | 42 |
| ACT 1 | S15–S37 | 23 | 64 |
| ACT 2 | S38–S59 | 22 | 90 |
| ACT 3 | S60–S83 | 24 | 80 |
| ACT 4 | S84–S103 | 20 | 85 |
| ACT 5 | S104–S119 | 16 | 44 |
| Total | S01–S119 | 119 | 405 |

### ACT 0 — 14 slides / 42 minutes


## Historical current-router snapshot — before DEC-0136

# Official Slide Map

## 현재 제작 기준 — DEC-0135 (2026-11-02)

현재 **118장·403분(6시간43분)**. 이전119장판 S78 “이번 성공만으로 다음 작업까지 확인되지는 않는다”를 삭제한다.
삭제한 내용은 다른 Slide/활성 Notes에 흡수하지 않고 새 참고 자료도 만들지 않는다. 원본은 Git 이력·기존 원자료에 남는다.
현재 S77 프로젝트 기준 연결 → S78 첫 결과의 완료 여부 → S79 사람이 잇는 수정으로 바로 이어진다.
S77의 연결 질문은 “작업 체계를 갖췄다면, 첫 결과가 나왔을 때 바로 끝낼 수 있을까요?”다.
다음 작업의 일반적 적합성이나 경험 축적을 Loop의 원인으로 삼지 않고, 같은 목표 안의 구현·검토·수정을 이어간다.
이전 S79–S119는 현재 S78–S118로-1한다. 삭제한 Lecture2분만 제외하며 나머지 장별 시간/Mode·역할·Beat/Section·근거 ID를 유지한다.
ACT3는23장·78분, ACT4는20장·85분, ACT5는16장·44분이다. 전역 Mode는 Lecture180/Demo44/Case102/Reflection22/Transition23/Q&A32다.
Native 표 S54, 차트 S70/S94, Memory S108, Goal S100/S101, 마지막 팁 찾아보기 S115–S117을 사용한다.
S75–S77의 DEC-0134 시각 설계, ACT5 Memory의 원 Section3F·BEAT-026–028·4분과 12Templates/28Variants·19Notes 필드는 유지한다.
기존 검증 원칙과 실제 관찰의 범위는 기존 Evidence/Claim에서 유지한다. 삭제한 성공 범위 장이나 이전 감사 장을 복구하지 않는다.
새 Trial·실측·실제 반복/이식·Subagent/Memory 실행·현재 제품 동작 주장은 없다.
Windows·교육장·제품/계정·실측 리허설은 UNVERIFIED다. Demo 저장소·Sites·발표 묶음은 변경하지 않는다.
[삭제·연결 기획](S78_REMOVAL.md), [번호 이행](SLIDE_ID_MIGRATION_118_DEC0135.md), [현행 Map](SLIDE_MAP.md)을 따른다.
아래 이전 판본의 번호·시간·연결은 당시 이력이며 현재 지시로 적용하지 않는다.

| ACT | Current slides | Count | Minutes |
|---|---|---:|---:|
| ACT 0 | S01–S14 | 14 | 42 |
| ACT 1 | S15–S37 | 23 | 64 |
| ACT 2 | S38–S59 | 22 | 90 |
| ACT 3 | S60–S82 | 23 | 78 |
| ACT 4 | S83–S102 | 20 | 85 |
| ACT 5 | S103–S118 | 16 | 44 |
| Total | S01–S118 | 118 | 403 |

## 현재 Harness 시각 설계 — DEC-0134 유지

S75의 점선 선택 Subagent는 교육용 확장이고 실제 단일 Agent 근거와 구분한다.
S76의 동일 모듈 재사용과 S77의 프로젝트 Context 조립 관계를 유지한다.
[Harness 시각 설계](HARNESS_VISUAL_SYSTEM.md)를 따른다.

### ACT 0 — 14 slides / 42 minutes


## Historical current-router snapshot — before DEC-0138

# Official Slide Map

## 현재 제작 기준 — DEC-0136 (2026-11-02)

현재 **114장·392분(6시간32분)**. 이전118장판 S78–S82의5장·18분을 S77의 Harness Q&A5분과 새 S78의 전환2분으로 정리한다.
S77은 기존 조립 설명 Lecture2분+Q&A5분=7분이다. 같은 화면에서 Harness 질문을 마무리하고 별도3분 성찰·세 질문 화면은 두지 않는다.
새 S78 제목은 “준비한 작업 체계로, 한 목표를 끝까지 수행하려면?”, 핵심은 “이제는 한 작업의 다음 행동과 완료 판단을 연결한다.”다.
재사용할 Harness 기반 안에서 한 작업의 목표·구현·검토와 남은 문제의 수정·재검토 관계만 짧게 보여준다.
Harness 실패나 교체를 Loop의 필수 원인으로 삼지 않는다. 상세 상태 필드·모델 역할·연구·중단 분기는 ACT4에 남긴다.
이전 S78–S82의 원 Section3G/3I·BEAT-073은 출처 lineage로 유지한다. 현재 S77의 Q&A는 이전 S82의5분, 새 S78은 기존 전환2분이다.
이전 Lecture8분과 Reflection3분만 제거하며, ACT4의20장·85분과 기존 사례·연구·근거 범위는 유지한다. ACT4 진입 cue의 이전 세 요청/성찰 선행 전제만 정리한다.
이전 S83–S118은 현재 S79–S114로-4한다. ACT3는19장·67분, ACT5는16장·44분이다.
전역 Mode는 Lecture172/Demo44/Case102/Reflection19/Transition23/Q&A32다.
Native 표 S54, 차트 S70/S90, Memory S104, Goal S96/S97, 마지막 팁 찾아보기 S111–S113, Closing S114다.
S111은 삭제한 상태 전달 팁을 빼고 S13/S48/S56–S58/S62/S67/S72/S104/S96의8묶음만 안내한다. 전환 장을 새 팁으로 넣지 않는다.
12Templates/28Variants·19Notes 필드와 남아 있는 장의 ID·Beat/Section·배정·Claim Boundary를 유지한다.
새 Trial·실측·실제 Loop/Subagent/Memory 실행·자동 목표 달성 주장은 없다. Windows·교육장·제품/계정·실측 리허설은 UNVERIFIED다.
Demo 저장소·Sites·발표 묶음은 변경하지 않는다. [전환 기획](ACT3_COMPACT_HANDOFF.md),
[번호 이행](SLIDE_ID_MIGRATION_114_DEC0136.md), [현행 Map](SLIDE_MAP.md)을 따른다. 아래 이전 판본은 당시 이력이다.

| ACT | Current slides | Count | Minutes |
|---|---|---:|---:|
| ACT 0 | S01–S14 | 14 | 42 |
| ACT 1 | S15–S37 | 23 | 64 |
| ACT 2 | S38–S59 | 22 | 90 |
| ACT 3 | S60–S78 | 19 | 67 |
| ACT 4 | S79–S98 | 20 | 85 |
| ACT 5 | S99–S114 | 16 | 44 |
| Total | S01–S114 | 114 | 392 |

## 현재 Harness 시각 설계 — DEC-0134 유지

S75의 선택 Subagent는 실제 단일 Agent와 구분한다. S76의 공통 모듈 재사용과 S77의 프로젝트 Context 조립 관계를 유지한다.
S77의 설명을 마친 뒤 같은 화면에서 Harness 질문을 받고 새 S78의 단일 작업 전환으로 넘어간다.
[Harness 시각 설계](HARNESS_VISUAL_SYSTEM.md)를 따른다.

### ACT 0 — 14 slides / 42 minutes

</details>
