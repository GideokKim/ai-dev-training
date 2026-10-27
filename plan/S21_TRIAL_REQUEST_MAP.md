# S21 — 실제 요청과 다섯 역할 주석

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

## 보존된 이전 판본

Decision: DEC-0111. Date:2026-10-27. Baseline:`bb675c6`.

## Narrative

S16–S18은 같은 crop 사례의 교육용 짧은 요청·범위 비교·구체화다.
S19의 사람 판단 질문과 S20의 다섯 역할을 거쳐 S21에서 실제 TRIAL-002 입력을 읽는다.
S22는 같은 실제 입력의 과정01–03과 기존 관찰을 대조한다. S23은 실제 변경,
S24는 기존 검증 결과다. S21에서 먼저 결과를 공개하거나 별도 Prompt로 바꾸지 않는다.

## Original input and external annotations

원문 제목은 Goal / Constraints / Process / Verification 네 개다.
Context 제목/문단을 추가하지 않는다. 오른쪽 맥락 주석은 원문 Process의
“관련 구현과 호출 경로”를 조사 대상으로 읽는다. “이 저장소”도 위치를 지정한다.
같은 문장이 조사할 맥락과 작업 방식의 역할을 함께 할 수 있다.

| Teaching role | Actual source | Display boundary |
|---|---|---|
| Goal | Investigate and fix the failing crop-boundary test | 실제 입력 발췌·번역 |
| Context | in this repository; related implementation and call path | 별도 입력 문단이 없는 바깥 주석 |
| Constraints | public half-open contract, unrelated APIs, no dependencies, minimal change | 실제 입력 발췌·번역 |
| Process | reproduce, inspect, report plan before editing, continue without approval, necessary change only | 핵심01–03은 S22와 같은 문장; 나머지 절은 원문에 보존 |
| Verification | focused/full tests, conditional existing-input CLI smoke, diff, changed files and exact evidence | 실제 입력 발췌·번역 |

원문 전문과 화면에서 생략한 정답 표현 금지·worktree·State/tag·Harness·커밋 통제는
DEMO_MATRIX.md와 S21 Notes에 보존한다. 의미를 바꿔 새 요청으로 재작성하지 않는다.

## Visual / evidence

S21: 실제 요청 영역과 역할 주석 영역을 구분한다. 네 제목·Process01–03·검증 요청을
Native text/shape로 편집 가능하게 둔다. Context는 조사 대상에 얇은 선으로 연결한다.
crop 열1·2/폭2는 요청 영역 밖 “명세 해석 예”다. C++ 적용은 Notes에 보존한다.
S22: 좌측 소제목과 footer만 같은 요청 연결로 정렬한다. 기존 관찰·배치는 유지한다.
S20 화면은 유지하고 Notes 전환만 실제 요청으로 맞춘다.

실제 입력은 OBSERVED_PRODUCT의 기록이며 다섯 역할 분류와 명세 예는 TEACHING_MODEL이다.
단일 CLI 사례이고 짧은 요청과의 비교·우월성·비용 절감·반복성·현재 제품 검증이 아니다.
실제 입력과 관찰 요약을 원시 로그 캡처·내부 사고 기록으로 표현하지 않는다.

## Preserved budgets and gates

119장·417분. ACT1 S15–S36의22장·64분. S21 Lecture6+Case3=9분,
S22 Lecture2분, S20 Lecture4분과 나머지 모든 장별 Mode/시간을 유지한다.
12Templates/28Variants,19Notes 필드, 기존 Trial/State/Beat/Section ID를 유지한다.
최종 Full119장과 ACT1 22장을 렌더링하고, 변경2장과 S20–S24 연결을 확인한다.
다른117장·5개 ACT·기존 미디어/표/차트/워크북과 모든 장별 배정을 대조한다.
Windows·제품/계정·교육장·실측 리허설은 UNVERIFIED다.
Demo 저장소·Sites·묶음을 변경하거나 새 Trial을 실행하지 않는다.

[실제 원문](DEMO_MATRIX.md), [현행 Map](SLIDE_MAP.md),
[최종 검토](../production/evaluation/S21_TRIAL_REQUEST_REVISION.md).
