# ACT5 Flow Revision — DEC-0082

## 현재 Codex 제작 팁 — DEC-0093 (2026-10-25)

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

## 이전 기준 — DEC-0091 (2026-10-25)

113장·402분. ACT3 S56–S79는24장·92분, ACT4 S80–S98은 기존19장·81분을 보존한다.
S71 뒤 재사용2장과 이전 S72 설명5장을 넣고 이전 독립 C++ 전이 S73은 삭제했다.
현재 범위·근거·장별 시간은 [Slide Map](SLIDE_MAP.md), [설계](HARNESS_REUSE_AND_EXECUTION_CONTEXT.md),
[108→113 번호](SLIDE_ID_MIGRATION_113.md)를 따른다. 기존12Templates/28Variants·19Notes 필드 유지.
마지막 팁 요약은 S110–S112이며 Windows/교육장/제품·계정/실측 리허설은 UNVERIFIED다.
아래의 이전 Decision·Prototype·평가는 당시 판본의 이력이며 새 Trial이나 전체 환경 감사가 아니다.

> Current numbering: DEC-0084 /99slides/387minutes. This design record retains its edition IDs. Use [96→99 migration](SLIDE_ID_MIGRATION_99.md), [current Slide Map](SLIDE_MAP.md) and [ACT0 expansion](ACT0_CONTEXT_EXPANSION.md) for the current presentation.

Current revision: DEC-0083 /96slides/385minutes; ACT5 S86–S96 11/36.
New S91–S93 explain reassessment, keep/integrate/remove candidates and
representative-task verification. Former S91–S93 become S94–S96. Existing
records below retain their historical numbering. Use [current migration](SLIDE_ID_MIGRATION_96.md).

Date:2026-10-24. Baseline:`bfc63d0`.
Status: IMPLEMENTED / LOCAL FINAL RENDER REVIEW COMPLETE.

## Approved intent

전체 교육의 문제 중심 흐름과 실제 근거 범위를 유지하면서 처음 듣는 사람이
마지막 적용 판단까지 따라오게 한다. 사용자 승인된 ACT5 감사의 개선 실행이다.
S87의 내부 State·역방향 rail·작은 발췌, S91→S92의 빠진 문제/행동 연결,
S93의 다른 마무리 용어를 우선 정리하고 요약·질문 반복을 줄인다.

## Fixed boundaries

- Full93장·379분; ACT5 S86–S93 8장·30분. ACT40/63/81/85/80/30 유지.
- Mode Lecture143/Demo73/Case88/Reflection21/Transition22/Q&A32 유지.
- 모든 Slide/Beat/Section/Demo/Trial/State ID, 장별 배정,11Templates/27Variants 유지.
- 실제 Product·가상 사례·Teaching Model·Observed Meta의 범위를 혼합하지 않음.
- 새 Trial·비교 실험·개선 성과·제품 기능·실제 회사 절차를 만들지 않음.
- S01–S85 화면/Notes, ACT0–4 PPT, Demo 저장소·태그, 원본 assets/Prototype 유지.
- 발표 묶음을 재생성하지 않음. 직접 실습·공유·제출·실천 약속을 요구하지 않음.

## Slide roles and fixed allocation

| Slide | Distinct role | Existing budget |
|---|---|---|
| S86 |문제 때문에 필요해진 다섯 대응 회수|Lecture4|
| S87 |세 시간순 묶음으로 실제 제품 변화·일곱 State 회수|Lecture1+VISUAL Demo2|
| S88 |사용·보류 구성의 실제 판단 이유|Lecture2|
| S89 |AI 결과를 사람이 수용할 네 질문|Lecture3|
| S90 |판단 근거가 나올 작업 환경 설계·운영 모델의 이름|Lecture3|
| S91 |C++ 업무 증상에서 동등한 A–E 문제 하나 선택|Case1+Transition4|
| S92 |같은 글자의 다음 행동과 공통 확인 근거 질문|Lecture2+Reflection2|
| S93 |남은 질문 후 같은 다섯 용어와 한 문장으로 종료|Q&A4+Transition2|

## S87 actual history

화면은 위에서 아래로 읽는 문제→실제 변경의 세 묶음이다.

1. crop 경계 오류→끝 좌표 제외 명세에 맞춘 구현 수정.
   STATE-00→STATE-00-FIXED, TRIAL-002/S18.
2. 프로젝트 지침의 반복·증가→기본 안내·상세 문서.
   STATE-01→STATE-02→STATE-03, TRIAL-003/004/005A/B와 S43.
3. 조사·검증 절차 반복→Skill 재사용·제품 변경 검증.
   STATE-04→STATE-04-PERF, TRIAL-008/S58.

세 묶음은 새 State가 아니다. 모든 실제 ID를 화면의 보조 기록과 Notes에
유지한다. Loop는 ACT4의 가상 지침 사례와 별도 실제 제작 평가·보고 기록에서
다뤘다고 명시한다. Product endpoint를 늘리지 않고 인과 효과도 만들지 않는다.
기존 작은 세 발췌는 재독을 유도해 화면에서 내리되 원본 asset/provenance는
삭제·수정하지 않는다. 현재 화면은 Native 요약 도식이며 실행 캡처가 아니다.

## S91 to S92 correspondence

| Same letter | Problem | Small action candidate |
|---|---|---|
| A |성능 조사 범위가 모호함|목표·변경 범위를 요청에 적어 보기|
| B |빌드·명세·장치 조건 반복 설명|반복 사실의 출처·검토자 생각하기|
| C |분석·변경·측정·회귀 확인 반복 작성|절차를 둘 곳·갱신할 사람 생각하기|
| D |테스트·측정의 확인 기준 모호함|완료 판단에 필요한 검사 정해 보기|
| E |반복 실패의 원인·기준 미검토|기록·원인부터 대조하기|

S92의 오른쪽 질문은 모든 선택에 적용한다: 무엇이 달라졌는지 어떤 기록으로
볼까? 단순히 같은 실패가 반복됐으니 시스템을 수정하라는 뜻이 아니다. 원문·
현재 기준·원인 근거를 확인한 뒤 변경 여부를 판단하며 그대로 두는 선택도 가능하다.
개인 Reflection2분, 답변·기록·발표·제출·실천 약속 없음. 새 Skill/Memory 생성
의무도 없다. 위치와 유지 책임은 특정 회사 담당자를 배정하지 않는 생각의 후보다.

## Closing and duplicate control

S86은 문제/대응의 여정, S87은 실제 Product, S88은 선택 이유, S89는 사람의
수용 판단, S90은 그 판단을 지원할 작업 조건이다. 같은 구성요소를 다시 강의하지
않는다. S91은 문제, S92는 행동·확인 근거, S93은 질문과 한 문장의 결론이다.
S93의 Question→Task→Context→System→Feedback Loop는 현재 사용하지 않고
Chatbot→Prompt→Context→Harness→Loop로 S86과 일치시킨다. 이전 표현과 이유는
Git/이전 문서 기록에 보존한다. Q&A4분 뒤 Closing Transition2분 순서는 유지한다.

## Validation and delivery

Full93와 ACT5 8을 최종 패키지에서 렌더링하고 ACT5 전체·S85→S86 경계를
개별 검토한다. 나머지85개 PNG/Notes, 기존 표/차트와 S87 외 이미지 bytes/crop/
위치, 모든 M 연계 Footer와 Template 배정,93×19 Notes 정합성을 대조한다.
S87에 쓰던 세 이미지 instance만 제거하며 원본 파일은 유지한다. Fallback32개
구성원을 유지하고 실제로 바뀐 hash만 갱신한다. Windows PowerPoint·실환경·
제품/계정·교육장·실측 리허설은 UNVERIFIED다. 정상 산출물을 commit/push한다.

Result: [ACT5 flow review](../production/evaluation/ACT_5_FLOW_REVISION.md).
