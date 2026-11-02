# S78 — 독립 경고 장 삭제와 Harness→Loop 연결

Decision: DEC-0135. Date:2026-11-02. Baseline:`eaba601`.
Status: LOCAL RENDER AND STRUCTURE VERIFIED.

## 삭제와 연결

이전 S78 “이번 성공만으로 다음 작업까지 확인되지는 않는다”를 삭제했다.
해당 장의 문장·도식·밝기 통계 회수를 다른 Slide/활성 Notes에 이식하지 않았다.
실제 성공의 적용 범위를 제한하는 원칙과 원자료는 기존 Claim Boundary·참고 근거·Git 이력에 유지한다.

S77의 전환은 “작업 체계를 갖췄다면, 첫 결과가 나왔을 때 바로 끝낼 수 있을까요?”다.
새 S78(이전 S79)은 첫 결과의 미충족 항목, S79는 사람이 매번 이어주는 수정/재검토를 다룬다.
다른 작업의 적합성 보장에서 같은 목표의 구현·검토·수정으로 질문을 옮기는 불필요한 우회를 제거했다.
ACT4는 목표 달성까지의 수행 루프와 서로 다른 모델 연구의 기존 구성·85분을 유지한다.
S77 화면은 그대로 두고 Map/Notes의 연결만 정렬했다. 재사용 구조를 실제 이식 성공이나 측정 성과로 바꾸지 않았다.

## 번호·시간·Notes

현재 **118장·403분(6시간43분)**. 이전 S79–S119는 현재 S78–S118로 한 칸 당겼다.
삭제한 Lecture 2분만 제외했고 모든 남은 장의 시간·Mode·제목·Section/Beat·Evidence/Claim ID를 유지했다.
ACT 장수는 14/23/22/23/20/16, 시간은 42/64/90/78/85/44분이다.
Lecture 180 / Demo 44 / Case 102 / Reflection 22 / Transition 23 / Q&A 32분이며
각 장의 Mode 합계는 해당 시간과 일치한다.
118개 Notes의 19필드와 Full/ACT의 내장 Notes 236개를 대조했다.
Native 표 S54·차트 S70/S94, 12 Templates/28 Variants를 유지했다.
Memory는 ACT5 S108, Goal 팁은 S100/S101, 마지막 팁 찾아보기는 S115–S117이다.

Map의 ACT5 종합 5장(S104/S105/S106/S107/S109)에 기존부터 남아 있던 개인 선택 장 참조도
현재 문제/행동 장인 S113/S114로 맞췄다. 해당 Claim의 문구·근거 범위는 바꾸지 않았다.

## 렌더·품질 검토

통합 118장과 ACT0–5의 118장, 총 236개 최종 PNG를 1920×1080으로 렌더링했다.
6개 ACT montage와 S75–S84·S115–S118의 개별 화면을 검토했다.
남은 118장의 텍스트를 번호 변환 후 이전 판과 비교했다.
77장은 픽셀이 같고, 나머지 41장의 차이는 바뀐 Slide 번호·참조 텍스트 영역에만 있었다.
Full/ACT의 118장 PNG가 같고 기존 이미지·native 차트값도 보존했다.
새 장이나 화면 도식은 만들지 않았다. 새 P0/P1 잘림·겹침을 발견하지 않았다.

7개 PPTX의 ZIP·관계·컨텐츠 타입·16:9·글꼴 정책·native 표/차트·first-party import와
이전 파일을 기준으로 한 OOXML 검사를 통과했다. 패키지별 layout finding은 0건이다.
43개 정적 Fallback의 분류·역할을 유지하고 현재 번호·경로·해시를 정렬했다.

로컬 렌더는 Apple SD Gothic Neo/Menlo를 Malgun Gothic/Consolas의 대체로 사용했다.
Windows PowerPoint·실제 발표 PC/교육장·제품/계정·실측 리허설은 UNVERIFIED다.
403분은 배정 합계이며 실제 발표시간을 검증한 결과가 아니다.
Demo Repository·Sites·발표 묶음은 변경하지 않았다. 새 Trial·제품 실행·리허설은 수행하지 않았다.

## 산출물

[통합 PPT](../AI_Dev_Training_Full.pptx),[ACT3 PPT](../ACT_3.pptx),
[새 S78](../preview/full/S78.png),[전체 Notes](../notes/FULL_SPEAKER_NOTES.md),
[현재 Map](../../plan/SLIDE_MAP.md),[삭제·연결 기획](../../plan/S78_REMOVAL.md),
[번호 대응표](../../plan/SLIDE_ID_MIGRATION_118_DEC0135.md),
[검증 요약](S78_REMOVAL_VALIDATION.json),[현재 전달 안내](FINAL_HANDOFF.md).
