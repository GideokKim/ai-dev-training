# S60 실제 작업의 의존관계와 선택 — DEC-0072

Date:2026-10-23 (Asia/Seoul). Baseline:`e26dbf8`. Structure:93slides/379minutes.

## Status

LOCAL REVIEW COMPLETE — S60 화면과19필드 Notes, 관련 기획·PPT·Preview를 정렬했다.
Windows PowerPoint·실제 발표 글꼴·교육장·제품/계정·시간 리허설은 UNVERIFIED다.

## 변경 이유와 도식

기존 화면의 조사·변경·검증 패널은 일반적인 절차를 제시했고, 각 단계가 앞의
무엇을 받아야 하는지가 암묵적이었다. 이번에는 세로 패널을 평평한 의존관계
도식으로 바꾸고 전달하는 결과를 두 화살표에 표시했다.

| 단계 | 화면의 내용 | 다음 단계와의 관계 |
|---|---|---|
| 조사 | 기존 계산·명세와 변경 후보 확인 | 조사 결과를 근거로 변경을 선택 |
| 변경 | 선택한 후보로 계산 코드 변경 | 바뀐 코드가 검증의 대상 |
| 검증 | 출력·테스트 확인과 시간·할당량 측정 | 선택한 변경의 결과를 확인 |

상단에는 같은 함수·출력 명세, 하단에는 한 Agent가 수행한 선택과 자료 전달·
결과 통합 부담을 남겼다. 화면 전체의 공백 제외 글자는260→211이다. 글자 수
감소를 이해도 향상이나 학습 효과의 측정으로 취급하지 않는다.

## S59→S60→S61

S59의 가정에서는 서로 기다리지 않는 성능·빌드·테스트 조사를 나눴다. S60은
S57/S58의 실제 밝기 통계 작업으로 돌아와 앞 결과를 받아 진행한 관계와 작은
자료 범위를 설명한다. 마지막에는 기존 Transition을 유지해, 다음 작업에도
별도로 남길 지식이 있었는지 S61로 넘어간다. S59/S61의 화면·Notes는 그대로다.

## 근거 범위

[DECISIONS](../../plan/DECISIONS.md)의 DEC-0018은 STATE-04에서 후보 A/B/C와
작은 저장소의 겹치는 조사 범위·Context·조정 비용을 검토한 기존 판단이다.
[DEMO_MATRIX](../../plan/DEMO_MATRIX.md) §§171–190과 후속 §§191–200은 각각
이 판단과 실제 밝기 통계 변경을 보존한다. 후속 제품 기록도 같은 작은 코드
경로와 명세에서 Subagent를 추가하지 않았음을 유지한다. [CLAIM_FREEZE](../../plan/CLAIM_FREEZE.md)의 OBSERVED_PRODUCT / TEACHING_MODEL을 따른다.

- 도식은 실제 작업/판단의 재구성으로, raw trace·실행 캡처가 아니다.
- 앞선 DEC-0018을 후속 성능 측정 시점의 새 결정처럼 바꾸지 않는다.
- 단계가 의존해도 역할 분리 설계는 가능하다. 이 작업에서 별도 독립 조사와
  Context 분리 가치가 충분하지 않았다는 기존 판단을 설명한다.
- 전달·통합 부담은 판단 근거이며 새로 측정한 시간·품질·토큰 차이가 아니다.
- 실제 Subagent 실행·일반적 불필요성·현재 제품 기능 부재를 주장하지 않는다.
- 새 Trial·benchmark·제품 실행과 Demo repository 변경은 없다.

## Notes와 시간

ACT3·Full Markdown 및 두 PPT의 S60 내장 Notes를 정렬했다. 총4분은 Lecture1,
VISUAL Demo2, Q&A1이다. Demo2분은 조사/변경0.67, 변경/검증0.67, 판단0.66이다.
무질문 예비 질문은 ‘서로 기다리지 않는 조사 범위가 커진다면?’이다. 3:45에
질문을 닫고4분에 지식 보존 질문으로 넘어간다. 수치·검사값은 S58을 반복
낭독하지 않으며 실제4분 운영을 리허설한 결과는 아니다.

## 렌더·정합성 검토

| 항목 | 확인 결과 |
|---|---|
| Full / ACT3 |93장·379분 /18장·85분 유지|
| S60 |4분: Lecture1+Demo2(VISUAL)+Q&A1, T10-B 유지|
| ACT 시간 |40/63/81/85/80/30분|
| Mode |Lecture143 / Demo73 / Case88 / Reflection21 / Transition22 / Q&A32|
| Notes |93개19필드; ACT·Full·PPT 내장 내용 일치|
| 최종 패키지 렌더 |Full93+ACT3 18, 총111개 PNG,1920×1080|
| 변경 범위 |S60만 변경, 다른92개 PNG·Notes 동일|
| ACT/Full 화면 |18개 대응 PNG hash 동일|
| 패키지·layout 자동 검사 |발견0건, 최종 패키지 재가져오기 통과|
| 개별 시각 검토 |S59/S60/S61 확인; S60의 한글·여백·두 전달 화살표 잘림/겹침 문제 미발견|
| Native evidence |S47/S55 표와 S58 chart·데이터 유지|
| Template / Variant |11개 /27개 유지|
| 정적 대안 |32개 중 S60 hash 갱신, 다른31개 동일|
| 그 외 |다른 ACT·승인 이미지·Prototype·묶음·Demo repository/State tag 유지|

지정 서체 Malgun Gothic/Consolas와 로컬 대체 AppleSDGothicNeo/Menlo를 유지한다.
로컬 시각 검토를 Windows·원거리 투사·청중 이해도 검증으로 취급하지 않는다.

## 남은 항목

이번 범위의 로컬 검사에서 미해결 P0/P1은 발견하지 않았다. 실제 교육장에서
작은 전달 라벨 ‘조사 결과’와 ‘바뀐 코드’의 원거리 가독성을 확인해야 한다.
발표 PC 재생·제품/계정·4분 운영 리허설은 기존 사용자 검증 Gate로 유지한다.

## 산출물

| Artifact | Path / SHA-256 |
|---|---|
| Full |[통합 PPT](../AI_Dev_Training_Full.pptx)|
| Full SHA-256 |`903f4f3aa291651f317f7d4ec0ab4db810931cb7ae2863bb67d64f92aa76bd94`|
| ACT3 |[ACT3 PPT](../ACT_3.pptx)|
| ACT3 SHA-256 |`ca2f397e9d69d59c90582c05bc73719407c50d7ba8b53398f2b29d4838085ea1`|
| Notes |[ACT3](../notes/ACT_3_NOTES.md) / [Full](../notes/FULL_SPEAKER_NOTES.md)|
| Full Notes SHA-256 |`78ffa9adabd2b5a5b5931f4b67bad7e0a012f566a919ed380a728b677a552b4d`|
| 렌더 |[S60](../preview/full/S60.png) / [S59–S61](../preview/act3/S59-S61-continuity.png)|
| 검증 기록 |[Validation JSON](S60_TASK_DEPENDENCY_VALIDATION.json)|

기존main/origin의 정상 Git checkpoint를 따른다. Commit ID는 Git history에서
확인한다. Force push·Remote 변경·발표 자료 묶음 생성은 하지 않는다.
