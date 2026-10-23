# S59 단일 조사와 역할 분리 비교 — DEC-0071

Date:2026-10-23 (Asia/Seoul). Baseline:`4f8f8ee`. Structure:93slides/379minutes.

## Status

LOCAL REVIEW COMPLETE — S59 화면과19필드 Notes를 수정하고 기획·PPT·Preview를
정렬했다. 실제 Subagent 실행, 성능 비교, Demo repository 변경은 없다.
Windows PowerPoint·발표 글꼴·교육장·제품/계정·시간 리허설은 UNVERIFIED다.

## 수정 이유와 읽는 순서

기존 화면은 세 조사 항목을 나열해 한 Agent가 맡을 때와의 차이가 암묵적이었다.
이번에는 같은 성능·빌드·테스트와 참고 정보를 양쪽에 놓고 다음 순서로 읽는다.

1. 상단: 서로 기다리지 않아도 되는 조사라는 가정.
2. 왼쪽: 한 Agent가 세 조사와 결과 종합을 모두 맡음.
3. 오른쪽 위: 주 Agent가 조사 범위·결과 형식을 정함.
4. 오른쪽 가운데: Subagent들이 역할별 필요한 정보로 독립 조사.
5. 오른쪽 아래: 처음 분담한 같은 주 Agent가 근거를 확인하고 통합.

모든 역할·선·라벨은 편집 가능한 native text/shape/connector다. 시간축이나
성공·실패 배지를 붙이지 않았고 하단 점선·CONCEPTUAL 표기로 가정을 구분한다.
세부 전달 형식·충돌 점검과 비용은 Notes에서 설명한다.

## S58→S59→S60

| Slide | 역할 | 연결 |
|---|---|---|
| S58 | 실제 제품 변경의 시간·할당량·동작 확인 | 검증을 마친 뒤 추가 구조가 필요한지 질문 |
| S59 | C++ 독립 조사 가정에서 역할 분리와 통합 책임 설명 | 판단 기준을 실제 밝기 통계 작업에 적용할 질문 |
| S60 | 실제 작업에는 Subagent를 추가하지 않은 DEC-0018 판단 | 조사 의존성과 Context 가치·통합 비용을 검토 |

S58/S60 화면·Notes는 그대로 유지했다. S59 첫 문장에서 실제 기록에서 가정으로
전환함을 밝히며, 마지막 Transition은 기존의 실제 작업 판단 질문을 유지한다.

## Evidence / Claim Boundary

- 기존 [DEMO_MATRIX](../../plan/DEMO_MATRIX.md)·[DEMO_ARCHITECTURE](../../plan/DEMO_ARCHITECTURE.md)의 DEMO-07 가정과 BEAT-023–025를 유지한다.
- [CLAIM_FREEZE](../../plan/CLAIM_FREEZE.md)의 CONCEPTUAL / TEACHING_MODEL 범위다.
- 단일 Agent의 실패·느림, Subagent의 시간·품질·토큰 이득을 측정한 비교가 아니다.
- 화살표는 역할·결과 전달 관계이며 실제 trace나 동시 실행의 관찰이 아니다.
- 역할별로 필요한 정보를 나누되 공통 명세·제약이 불필요하다는 뜻은 아니다.
- S60의 실제 보류 판단은 모든 작업에 Subagent가 불필요하다는 결론이 아니다.

## Notes와 운영

ACT3·Full Markdown 및 두 PPT의 S59 내장 Notes를 정렬했다. Demo3분은 가정0.5,
단일 Agent0.75, 역할 분담1, 통합·비용0.75분이다. 이어 Q&A1분을 사용한다.
무질문 예비 질문은 ‘빌드 조사 결과가 나와야 성능 조사를 시작할 수 있다면?’이다.
3:45에 질문을 닫고4분에 S60으로 이동한다. 실제 리허설을 완료한 판정은 아니다.

## 렌더·정합성 검사

| 항목 | 확인 결과 |
|---|---|
| Full / ACT3 |93장·379분 /18장·85분 유지|
| S59 |4분: Demo3(VISUAL)+Q&A1, T03-C 유지|
| ACT 시간 |40/63/81/85/80/30분|
| Mode |Lecture143 / Demo73 / Case88 / Reflection21 / Transition22 / Q&A32|
| Notes |93개19필드, 해당 ACT/Full/PPT 내장 내용 일치|
| 최종 패키지 렌더 |Full93+ACT3 18, 총111개 PNG,1920×1080|
| 변경 범위 |S59만 변경; 다른92개 PNG·Notes 동일|
| ACT/Full 화면 |18개 대응 PNG hash 동일|
| 패키지·layout 자동 검사 |발견0건, 최종 패키지 재가져오기 통과|
| 시각 검토 |S58/S59/S60 개별 확인; S59 한글·분기/합류·여백·라벨 잘림/겹침 문제 미발견|
| Native evidence |S47/S55 표와 S58 chart·데이터 유지|
| Template / Variant |11개 /27개 유지|
| 정적 대안 |32개 중 S59 hash 갱신, 다른31개 동일|
| 그 외 |다른 ACT·승인 이미지·과거 Prototype·묶음·Demo repository/State tag 유지|

지정 서체 Malgun Gothic/Consolas와 로컬 대체 AppleSDGothicNeo/Menlo를 유지한다.
로컬 시각 검토를 Windows·원거리 투사·초급자 이해도 실험으로 해석하지 않는다.

## 남은 항목

이번 범위의 로컬 검사에서 미해결 P0/P1은 발견하지 않았다. 실제 교육장에서는
오른쪽 ‘같은 주 Agent’와 조사별 정보 라벨의 원거리 가독성을 확인해야 한다.
실제 발표 PC 재생, 제품/계정 및4분 운영 리허설은 기존 사용자 검증 Gate다.

## 산출물

| Artifact | Path / SHA-256 |
|---|---|
| Full |[통합 PPT](../AI_Dev_Training_Full.pptx)|
| Full SHA-256 |`01fa9c21e73a38e33a145ae7c87b2b1e1495397b760b26d8bfa2d724093ebd12`|
| ACT3 |[ACT3 PPT](../ACT_3.pptx)|
| ACT3 SHA-256 |`59ccbb894a0110ce5a644b5a89513bc2051ba5ee83bbdc61d658b28e2079093e`|
| Notes |[ACT3](../notes/ACT_3_NOTES.md) / [Full](../notes/FULL_SPEAKER_NOTES.md)|
| Full Notes SHA-256 |`98d16256cee0047e1d52aec2ece1a8cab52dd27c7f9363c61ffa6b7a188187ff`|
| 렌더 |[S59](../preview/full/S59.png) / [S58–S60](../preview/act3/S58-S60-continuity.png)|
| 검증 기록 |[Validation JSON](S59_ROLE_SPLIT_VALIDATION.json)|

기존main/origin의 정상 Git checkpoint를 따른다. Commit ID는 Git history에서
확인한다. Force push·Remote 변경·발표 자료 묶음 생성은 하지 않는다.
