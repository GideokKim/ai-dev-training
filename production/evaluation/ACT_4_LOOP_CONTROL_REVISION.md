# ACT4 — 루프 구분·평가 후 판단과 다음 작업 연결

Decision: DEC-0094. Date:2026-10-25 (Asia/Seoul). Baseline:`ff936e1`.
Status: **LOCAL RENDER / STRUCTURE / CONTENT REVIEW COMPLETE**.

## 변경 범위와 유지한 기획

현재115장·406분과 ACT4 S82–S100의19장·81분을 유지했다. 모든 장별 시간·Mode,
Section/Beat/Demo/Trial/State ID·Evidence Type·Claim Status는 기준판과 같다.
작업 수행 루프와 체계 개선 루프를 구분하고 기존 체계 개선 중심의 기획을 보존했다.
원인 확인→변경 범위 선택→평가→실제 Meta 기록→C++ 적용의 기존 순서도 유지한다.

| Slide | 역할 | 변경 |
|---|---|---|
| S83 | 두 루프와 반복 보정 문제 | 실제 성공 한 줄과 교육용 두 루프·되돌림 경로를 구분 |
| S86 | 이번 완료와 다음 지침 | 현재 요청의 수행 흐름과 그대로 남은 재사용 출처 비교 |
| S90 | 변경과 채택 | 지침은 평가 전 변경 후보이며 채택 전 검토·평가 필요 |
| S91 | 평가 질문과 기록 | 실행 명령·검사 로그·보고를 요청/지침과 대조 |
| S92 | 대표 작업의 관찰 항목 | Native4작업 표에 대조할 근거를 구체화 |
| S94 | 평가 후 선택 | 기준 충족/수정 가능/근거 부족·한도에 따른 완료·재시도·중단 |
| S99 | 실제 확인과 후속 제안 | 해석 한계 판단·실제 기준 변경과 미실행 개선 질문 분리 |
| S100 | 다음 작업 연결 | 기존 GPU 삽화·질문을 기록→기준→재평가→다음 작업 적용으로 연결 |

S93/S98는 화면을 바꾸지 않고 다음 장의 판단·후속 질문으로 넘기는 Notes의 Transition만
정렬했다. 실제 성공·가상 지침 사례·실제 제작 기록의 근거를 합치지 않았다.

## 두 루프와 제어 판단

S83은 실행→검증→완료와 미충족 시 수정·재검증이라는 수행 흐름, 기록·보정→원인
검토→체계 갱신→재평가·적용 뒤 다음 작업의 기록으로 돌아오는 개선 흐름을 구분한다.
실제 STATE-04-PERF 성공은 위 한 줄이며 아래 반복 흐름은 관찰된 실행이 아니다.

S94의 세 선택은 교육용 설계다. 기준 충족이면 완료/검토한 변경 채택, 미충족이고
수정 가능하면 재시도, 근거 부족이나 반복·시간·비용 한도 도달이면 중단/사람 확인이다.
한도 수치나 특정 제품의 자동 집행을 확정하지 않았다. 불필요한 체계 변경은 하지 않고,
시도·조건·검사 결과·미해결 질문을 남기는 책임을 Notes에서 설명한다.

## 근거 범위

- S83의 실제 밝기 통계 성공은 원래 입력·코드·환경·검증 범위에 한정한다.
- S84–S93의 가상 사례는 원인 확인·수정·재실행·채택·중단 결과가 없다.
- S92의 EVAL-01/02 과거 참고는 별도 사건이며 EVAL-03/04는 설계만 있다.
  네 작업 모두 가상 지침 변경 뒤 실행 결과가 없고 PASS/FAIL을 만들지 않았다.
- S94는 교육용 운영 모델이다. 자동 실행·종료·제품 기능이나 모델 학습의 증거가 아니다.
- S95–S99의 실제 Resize 조사·DEC-0016 변경·후속 대조는 기존 기록만 사용했다.
  Prompt 효과 분리 불가는 원인 확정과 다르다. 불일치와 품질 향상 미측정은 유지했다.
- S99의 다음 대조/검사 방법 재검토는 제안/미실행이다. 후속 개선 성공을 주장하지 않는다.
- S100은 가상 GPU 적용 설계이며 기존 삽화·질문의 실제 실행 결과를 만들지 않았다.

## Notes와 시간

115개×19필드, ACT/Full Markdown과 모든 PPT 내장 Notes의 대응을 확인했다.
변경10개 외105Notes는 레코드 전체가 동일하다. 모든 원래 Claim Boundary는
문구를 보존하고 교육용 신규 연결의 범위만 덧붙였다.

ACT 장수14/22/19/26/19/15, 시간43/64/82/96/81/40분.
전체 Mode Lecture164/Demo73/Case88/Reflection21/Transition28/Q&A32분.
ACT4 Mode Lecture22/Demo22/Case22/Reflection3/Transition5/Q&A7분=81분.
S94의Lecture9+VISUAL Demo2와 S100의Case7→Reflection2→Q&A7→Transition4는
유지했다. 실제 시간 적합성·무질문 운영은 리허설 전까지 UNVERIFIED다.

## 렌더링·편집 가능성·구조

- 최종 Full115장과 ACT4 19장을 Artifact Tool에서 재입력해1920×1080으로 렌더링했다.
  새 PNG134장과 기존5ACT96장을 합친230PNG, Full/ACT115장 대응을 확인했다.
- 수정8장의 개별 화면을 검토했다. 다른107개 Full 화면과 ACT4의 미수정11장은
  이전 렌더와 픽셀까지 일치한다. 나머지5ACT PPTX/Notes도 파일 바이트가 동일하다.
- ACT0–5의 새 Full 렌더 연락판을 순서대로 검토했다. ACT3의 반복 보정 질문→
  ACT4의 두 범위→가상 사례→평가 후 선택→부분적인 실제 확인→GPU 적용→ACT5
  전체 여정으로 이어진다. 새 잘림·겹침·끊긴 선·문자 누락은 발견하지 않았다.
- 기존 그림의 bytes/crop/배치를 전부 비교했다. S100 삽화도 그대로다.
- Native 표 S53/S62와 차트 S66은 유지했다. S92는5행×3열 Native 평가 표로 유지한다.
  Native text/shape와19개 ACT4 내장 Notes는 편집 가능하다.
- 패키지·관계·화면 크기·레이아웃 검사 finding0, Artifact Tool import PASS.
- 기준판부터 있던 S53 Native 표의0.01in 추정 경고는 동일하다. 이번 변경 대상 밖이며
  픽셀 비교와 전체 흐름 검토에서 신규 변화가 없다. ACT4 레이아웃 경고는0이다.
- 지정 서체는 Malgun Gothic/Consolas, 로컬 렌더 대체는 AppleSDGothicNeo/Menlo다.
  로컬 렌더를 Windows PowerPoint·실제 발표 PC·교육장 확인으로 바꾸지 않는다.

## 이슈와 후속 Gate

P0: 이번 범위에서 새로 발견한 항목 없음.
P1: 이번 범위에서 남은 수정 항목 없음.
P2: 기존 S53 표 추정 경고는 기준판과 동일하게 유지. 실제 Windows/교육장 글꼴·투사,
현재 제품/계정·Live/Hybrid, S94/S100 및 전체 시간 리허설은 UNVERIFIED다.
현재 PPT는 로컬 제작/검토 상태이며 최종 실환경 발표 승인과 구분한다.

[설계](../../plan/ACT4_LOOP_CONTROL.md), [현재 Slide Map](../../plan/SLIDE_MAP.md),
[ACT4 Notes](../notes/ACT_4_NOTES.md), [수정4장](../preview/full/act4-loop-control.png),
[전후 연결](../preview/full/act4-loop-handoffs.png), [ACT4 전체](../preview/act4/montage.png),
[검사 기록](ACT_4_LOOP_CONTROL_VALIDATION.json), [사용자 확인](USER_VALIDATION_CHECKLIST.md).

Demo 저장소·기존7State 태그·원격 없음 상태, 원본 Evidence·assets·Prototype·
이전 평가 문서·발표 묶음은 변경하지 않았다. 새 Trial이나 성과 주장을 추가하지 않았다.
