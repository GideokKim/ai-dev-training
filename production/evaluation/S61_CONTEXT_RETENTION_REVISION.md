# S61 이번 Context와 다음 작업의 지식 — DEC-0073

Date:2026-10-23 (Asia/Seoul). Baseline:`00d73b0`. Structure:93slides/379minutes.

## Status

LOCAL REVIEW COMPLETE — S61 화면·19필드 Notes와 기획·PPT·Preview를 정렬했다.
Windows PowerPoint·실제 발표 글꼴·교육장·제품/계정·시간 리허설은 UNVERIFIED다.

## 시각적 구분과 보존 목적

기존 Task A/보존/Task B 도식에서는 무엇을 선택해서 남기는지 암묵적이었다.
이번에는 왼쪽 이번 Context 안의 확인한 재현 조건만 강조해 오른쪽 후보로
연결한다. 목표·현재 명세와 입력·로그도 지금 참고할 Context임을 함께 보여준다.

오른쪽의 재현 조건에는 필요한 입력·명령, 출처·적용 범위와 다시 확인할 조건을
붙인다. 같은 조건을 다시 조사하는 부담을 줄이려는 목적을 아래에 표시하고,
다음 작업에서 현재 명세와 대조하는 화살표를 잇는다. 기존 문서에 있으면
원래 출처를 참조한다는 규칙도 화면 하단에 유지한다.

화면 전체 공백 제외 글자는281→256이다. 정보 덩어리3개를2개로 정리하고
선택 항목을 색·포함 관계·이름으로 함께 구분했다. 글자 수 감소를 이해도나
학습 효과의 측정으로 취급하지 않는다. 도형·텍스트·연결선은 편집 가능하다.

## S60→S61→S62

- S60: 실제 밝기 통계 작업을 한 Agent로 이어간 선택을 회수한다.
- S61: 작업이 끝난 뒤 무엇을 남길지로 질문을 바꾸고 재현 조건의 교육용 가정을 설명한다.
- S62: 실제 Demo 지식은 이미 어디에 있었는지, 별도 후보가 있었는지 기존 감사를 적용한다.

S60/S62 화면·Notes는 그대로다. S61의 기존 Transition과 실제 별도 Memory를
추가하지 않았다는 다음 장의 결론을 보존한다.

## 근거와 해석 범위

[MASTER_PLAN §5.6](../../plan/MASTER_PLAN.md), [INV-MATURITY-008](../../plan/INVARIANTS.md),
BEAT-026–028과 [CLAIM_FREEZE](../../plan/CLAIM_FREEZE.md)의 CONCEPTUAL /
TEACHING_MODEL을 유지한다. [DEMO_MATRIX §§181–190](../../plan/DEMO_MATRIX.md)는
실제 재발견 비용·별도 후보가 확인되지 않았고 기존 문서·Skill·날짜 있는
Trial 기록이 각 정보를 담고 있음을 보존한다.

- 재현 조건은 기존 가정이다. 실제 오류·입력·명령·저장 파일을 새로 만들지 않는다.
- Context와 유지 지식은 배타적인 정보 종류가 아니다. 유지한 지식도 다음 작업의 Context가 될 수 있다.
- 보존 목적은 반복 조사 부담을 줄이려는 선택이며 시간·토큰 절감 측정이 아니다.
- 출처·적용 범위·신선도·갱신/무효화·신뢰도 관리가 필요하고 자동 정확성을 보장하지 않는다.
- 현재 로그·한 번의 측정·절차를 모두 Memory로 복제하지 않고 원래 적절한 저장 위치를 유지한다.
- 같은 프로젝트의 다음 작업에도 재사용할 수 있다. 프로젝트 간 공유는 필수가 아니다.
- 실제 Memory 사용·자동 저장/회수·새 Trial·Demo repository 변경은 없다.

## Notes와 시간

ACT3·Full Markdown 및 두 PPT의 S61 내장 Notes를 정렬했다. 총4분은 Demo2분과
Case2분이다. 정적 Demo는 S60 연결/가정0.5, Context와 선별0.75, 보존 지식과
다음 사용0.75분이다. Case는 보존 목적/신선도1분과 원래 출처/실제 사례 전환1분이다.
‘이미 문서에 있는 조건이라면?’을 짧게 회수할 수 있으며 Q&A 시간을 추가하지
않는다. 실제4분 운영을 리허설한 판정은 아니다.

## 렌더·정합성 검토

| 항목 | 확인 결과 |
|---|---|
| Full / ACT3 |93장·379분 /18장·85분 유지|
| S61 |4분: Demo2(VISUAL)+Case2, T03-C 유지|
| ACT 시간 |40/63/81/85/80/30분|
| Mode |Lecture143 / Demo73 / Case88 / Reflection21 / Transition22 / Q&A32|
| Notes |93개19필드; ACT·Full·PPT 내장 내용 일치|
| 최종 패키지 렌더 |Full93+ACT3 18, 총111개 PNG,1920×1080|
| 변경 범위 |S61만 변경; 다른92개 PNG·Notes 동일|
| ACT/Full 화면 |18개 대응 PNG hash 동일|
| 패키지·layout 자동 검사 |발견0건, 최종 패키지 재가져오기 통과|
| 개별 시각 검토 |S60/S61/S62 확인; S61 한글·선택/다음 사용 연결선·여백·라벨 잘림/겹침 문제 미발견|
| Native evidence |S47/S55 표와 S58 chart·데이터 유지|
| Template / Variant |11개 /27개 유지|
| 정적 대안 |32개 중 S61 hash 갱신, 다른31개 동일|
| 그 외 |다른 ACT·승인 이미지·Prototype·묶음·Demo repository/State tag 유지|

지정 서체 Malgun Gothic/Consolas와 로컬 대체 AppleSDGothicNeo/Menlo를 유지한다.
로컬 시각 검토를 Windows·원거리 투사·청중 이해도 검증으로 취급하지 않는다.

## 남은 항목

이번 로컬 검사에서 미해결 P0/P1은 발견하지 않았다. 실제 발표 환경에서는
‘Memory 후보’와 출처·적용 범위·재확인 조건의 원거리 가독성을 확인해야 한다.
발표 PC 재생·제품/계정·4분 운영 리허설은 기존 사용자 검증 Gate로 유지한다.

## 산출물

| Artifact | Path / SHA-256 |
|---|---|
| Full |[통합 PPT](../AI_Dev_Training_Full.pptx)|
| Full SHA-256 |`fcac43dddef0c8610968acf14b3cd178f3211ba04470a719f72f0229fa362eff`|
| ACT3 |[ACT3 PPT](../ACT_3.pptx)|
| ACT3 SHA-256 |`61c88fe246e0227d71b453eae3d61774d3e830e566cf9a355fa2063b1020385b`|
| Notes |[ACT3](../notes/ACT_3_NOTES.md) / [Full](../notes/FULL_SPEAKER_NOTES.md)|
| Full Notes SHA-256 |`8c820e076f509fbe9394d17622d414d4b09cf2233cde5f2301567de5697f2898`|
| 렌더 |[S61](../preview/full/S61.png) / [S60–S62](../preview/act3/S60-S62-continuity.png)|
| 검증 기록 |[Validation JSON](S61_CONTEXT_RETENTION_VALIDATION.json)|

기존main/origin의 정상 Git checkpoint를 따른다. Commit ID는 Git history에서
확인한다. Force push·Remote 변경·발표 자료 묶음 생성은 하지 않는다.
