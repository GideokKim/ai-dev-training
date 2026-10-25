# ACT4 Flow Revision — DEC-0081

> Historical design: DEC-0097 supersedes the ACT4 maintenance priority, old
> S100 and its operating budget. Preserve this record as history. Current
> design: [goal-loop replan](ACT4_GOAL_LOOP_REPLAN.md); current IDs: [Map](SLIDE_MAP.md).

## 현재 ACT4 정렬 — DEC-0094 (2026-10-25)

현재115장·406분과 ACT4 S82–S100의19장·81분, 모든 장별 시간·Mode·근거 범위는
유지한다. 작업 수행 루프와 체계 개선 루프를 구분하고, 평가 후 완료·채택/재시도/
중단·사람 확인과 다음 작업에 넘길 기준·기록을 명시한다. 실제 Meta 사례의 후속
확인은 부분적이며 새 개선 질문은 제안/미실행이다. [현재 설계](ACT4_LOOP_CONTROL.md),
[현재 Slide Map](SLIDE_MAP.md)을 따른다. 아래 이전 번호·판정은 당시 기록이다.

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

Date:2026-10-24. Baseline:`c1e7795`.
Status: IMPLEMENTED / LOCAL FINAL RENDER REVIEW COMPLETE.

## Core intent

이번 작업의 수정에서 멈추지 않고, 다음 작업에도 맞도록 지침과 평가 기준을
검토·갱신한다. 현재 기준·실제 기록·원인 가설·확인된 변경 범위를 구분한다.

## Preserved boundaries

- Full93/379; ACT4 S68–S85 18/80. S76–S85는 기존10장/59분이다.
- ACT40/63/81/85/80/30; Mode143/73/88/21/22/32; 장별 배정 불변.
- S68의 실제 성공과 S69부터의 가상 지침 사례, S80–S84 실제 제작 기록을 분리.
- Slide/Beat/Section/Demo/Trial/State IDs 및11Templates/27Variants와 Mapping 유지.
- 평가 결과·확정 원인·수정/복구 성공·품질 효과·현재 제품 동작을 만들지 않음.
- 승인 이미지 bytes/crop, 기존 표/차트와 수치, 다른 ACT·Demo 코드/태그 유지.
- 실제 회사 담당 배정·직접 실습·새 Trial·발표 묶음·시간 재배분 없음.

## Slide roles and fixed allocation

| Slide | Distinct role | Existing budget |
|---|---|---|
| S76 |지침 갱신 가정 뒤 같은 작업 재확인과 다른 작업 영향 구분|Lecture1+Case3|
| S77 |네 대표 작업의 선정 이유와 기존 근거 상태|Demo5, 정적 평가 설계|
| S78 |전역 규칙의 작업별 영향·누적·충돌·편중과 유지 비용|Lecture4|
| S79 |단계별 근거가 다음 판단으로 넘어가는 모델|Lecture9+VISUAL Demo2|
| S80 |Resize 실제 제작 기록과 평가·보고가 개선 대상인 이유|CAPTURED Demo2|
| S81 |Resize 수치 확인 범위와 Prompt 인과 해석의 한계|CAPTURED Demo4|
| S82 |실제 후속 기록 기준 변경과 당시 진행 결정|Lecture1+CAPTURED Demo2|
| S83 |서로 다른 후속 기록의 부분 적용·원문 대조|Lecture1+Case2|
| S84 |실제 기록과 Loop 모델 대응·변경/미확인 회수|Lecture1+Case2|
| S85 |가상 GPU 변화의 검증 조건과 지침 유지 판단을 닫음|Case7+Reflection2+Q&A7+Transition4|

## Narrative handoffs

S75→S76: 변경이 필요했다고 가정한 뒤 무엇을 다시 확인해야 하는가?
S76→S77: 같은 작업 외에 어떤 작업을 골라 서로 다른 위험을 볼까?
S77→S78: 문서 작업을 골랐던 이유는 전역 규칙의 부작용을 보기 위해서다.
S78→S79: 근거가 다음 판단으로 넘어가고 부족하면 가설로 남기는 모델로 회수.
S79→S80: 별도 실제 사건으로 전환하며 개선 대상을 평가·보고 기준으로 확장.
S81→S82: 확인한 결과와 남은 인과 한계를 다음 기록에 어떻게 남길까?
S83→S84: 상세 오류를 반복하지 않고 실제 기록을 다섯 단계에 대응.
S84→S85: 조건이 달라졌을 때 무엇을 다시 확인할지 C++ 업무로 전이.
S85→S86: ACT4의 적용 판단은 닫고 전체 여정 회수는 S86에 넘긴다.

## First-time audience and terminology

평가할 작업 종류(버그·성능·문서·리팩터링)와 제품 검사 종류(단위·통합)를
구분한다. 전역 Skill/영향 표현은 본문에서 일관되게 쓰고 원문 식별자·영문은
출처/Notes에 남긴다. EVAL/Trial/Decision ID는 학습해야 할 개념이 아닌 추적
식별자다. S81은 밝기 통계와 다른 Resize 기록임을 본문에서 명시한다.

## Evidence and operation

S77의 네 작업 모두 가상 지침 변경 뒤 실행 결과가 없다. 버그/성능의 과거
참고와 문서/리팩터링의 설계를 상태 문구로 구분하고 선 종류로 안내하지 않는다.
S79는 실행과 관찰을 구분하되 실제 가상 사건의 실행·원인 확인 결과를 만들지
않는다. 기존9분 강의는 다음 판단의 근거/보류 기준을 다루고2분은 한 경로 회수다.

S82는 적용 지침·경고와 실제 사용·해석 범위를 병렬 기록 항목으로 보여준다.
PARTIAL 보존과 환경 격리를 진행 조건으로 두지 않은 당시 결정은 유지한다.
격리가 일반적으로 불필요하다거나 인과 검증이 끝났다는 결론은 없다.
S83는 왼쪽 보고/원문, 오른쪽 지침 경로다. S84는 상단5열 뒤 하단 회수다.
S84의 원인 판단은 해석 한계 판단, 재평가는 부분적 후속 기록 대조다.

S85의20분은 정적 화면을 강사가 운영한다.0–7 Case,7–9 Reflection,
9–16 Q&A,16–20 Transition. 실제 리허설은 UNVERIFIED이며, Case의 가상
조건과 세 질문을 동일한 문제로 연결한다. 마지막4분은 근거·기준 유지 판단을
닫는 시간이다. 전체 Chatbot→Prompt→Context→Harness→Loop 회수는 S86에 둔다.

## Validation and delivery

Full93와 ACT4 18을 최종 패키지에서 렌더링한다. 수정10장과 ACT4 전체,
S75→S76와 S85→S86를 시각 검토한다. 다른83화면/83Notes·다른 ACT·승인
이미지·기존 표/차트·32개 Fallback 구성원·Demo 코드/태그가 유지됐는지 확인한다.
Windows PowerPoint·실제 글꼴/교육장·제품/계정·시간 리허설은 UNVERIFIED다.
최종 결과는 [revision review](../production/evaluation/ACT_4_FLOW_REVISION.md)에 기록한다.
