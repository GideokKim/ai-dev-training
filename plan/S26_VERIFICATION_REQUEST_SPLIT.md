# S26 — 완료 조건 요청을3장으로 나누기

Decision: DEC-0112. Date:2026-10-27. Baseline:`2f76021`.

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

## Roles and time

| Slide | Role | Time | Mode | Evidence | Template |
|---|---|---:|---|---|---|
| S26 | 무엇을 확인해 달라고 요청할까? | 90초 | Lecture1.5 | OBSERVED_PRODUCT / TEACHING_MODEL | T06-C |
| S27 | 비어 있지 않으면 올바른 결과일까? | 90초 | Lecture1.5 | TEACHING_MODEL | T06-C |
| S28 | 기대 결과를 요청에 적는다 | 120초 | Lecture1 + Reflection1 | TEACHING_MODEL | T04-A |

## Narrative and boundary

S25 사람의 완료 판단 → S26 확인할 범위 → S27 약한 조건의 한계 → S28 명세를 담은 요청 → S29 요청 문장 도구 → S37/S38 반복 Project Context → ACT2 S39.

실제 TRIAL-002는 Python이며 관련 테스트3/3·전체11/11·CLI 샘플·diff 확인의 기존 기록을 유지한다. 관련3건을 crop만의3건으로 바꾸지 않는다. 성능은 당시 미측정이다. 기대 {2,3}·잘못된 {2,3,4}·EXPECT_FALSE·교육용 Prompt·EXPECT_EQ는 실행하지 않은 C++ 예시다. 실제 Trial의 assertion이나 잘못된 출력이 통과한 기록으로 표현하지 않는다. vector 동등 비교는 길이·순서별 값을 비교하며 명시적 size assertion은 Notes의 선택적 설명으로 보존한다. 하나의 입력이 모든 정확성을 증명하지 않는다.

화면은 기존 Light Engineering Workbench·native text/shape·19Notes 필드·M5/M6 footer를 유지한다. 각 장은 역할 하나만 맡고 다른 장의 전체 도식이나 목록을 반복하지 않는다. 마지막1분은 조용한 Reflection이며 실습이나 새 Trial을 추가하지 않는다.

## Validation

최종7개 PPTX의 Full121장과 ACT별121장을 렌더링한다. 변경3장과 S24–S30, ACT1→ACT2 연결을 살핀다. 나머지118장의 본문·수치·그림·표·차트·워크북·Source/Trial ID를 보존하고 번호/현재 참조만 이행했는지 대조한다.121개19필드 Notes, 장별 Mode 합계, 전체417분과 ACT1 64분을 확인한다. Windows·발표PC·교육장·제품/계정·실측 리허설은 UNVERIFIED로 유지한다.

[현행 Map](SLIDE_MAP.md), [번호 이행](SLIDE_ID_MIGRATION_121.md), [결과](../production/evaluation/S26_REQUEST_SPLIT_REVISION.md).
