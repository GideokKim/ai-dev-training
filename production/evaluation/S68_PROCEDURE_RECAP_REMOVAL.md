# S68 — 절차 회수 장 삭제와 실제 사례 복귀

Decision: DEC-0138. Date:2026-11-03. Baseline:`b3cdfcb`.
Status: LOCAL RENDER AND STRUCTURE VERIFIED.

## 삭제·연결

이전114장판 S68 “절차는 재사용하고, 답은 근거로 정한다”를 삭제했다.
해당 Skill 발췌·질문·채택/보류 도식과 3분 설명을 다른 장이나 활성 Notes에 이식하지 않았다.
원래 지침·실제 관찰의 근거 범위는 기존 원자료와 Git 이력에 남는다. 새 참고 자료를 만들지 않았다.
이는 과거에 삭제한 본문 포함 확인/상세 수행 감사 장과 다른 삭제다.

S67의 Skill 제작 팁 화면과 2분은 유지했다. Notes의 닫는 문장은 다음과 같다.
“지금 본 제작 요청은 사용 예시입니다. 이제 앞서 Skill을 지정했던 실제 밝기 통계 작업에서
어떤 근거로 구현을 선택했는지 보겠습니다.”

새 S68(이전 S69)은 실제 작업 목표→기존 구현→후보 비교로 바로 들어간다.
상단 안내만 “ACT 3 · Skill을 지정했던 실제 밝기 통계 작업”으로 바꿔 사용 예시에서
보존된 실제 작업 기록으로 돌아왔음을 화면에서도 확인할 수 있게 했다. 제목·본문·후보 비교 데이터는 같다.
S69(이전 S70)는 후보 선택과 구분한 별도 제품 변경 전후 측정을 유지한다.
TRIAL-008의 Skill을 제작 팁의 $skill-creator로 만들었다는 이력을 추가하지 않았다.
Skill이 후보 선택·성능 향상의 단독 원인이라는 주장도 추가하지 않았다.
S66의 최근 Mac 프롬프트창과 화면 footer 삭제는 그대로 보존했다.

## 번호·시간·Notes

현재 **113장·389분(6시간29분)**. 이전 S69–S114는 현재 S68–S113으로 한 칸 당겼다.
삭제한 Lecture3분만 제외하고 모든 남은 장의 시간·Mode·제목·역할·Section/Beat·근거 범위를 유지했다.
ACT 장수는14/23/22/18/20/16, 시간은42/64/90/64/85/44분이다.
ACT3는 S60–S77, ACT4는 S78–S97, ACT5는 S98–S113이다.
Mode는 Lecture169 / Demo44 / Case102 / Reflection19 / Transition23 / Q&A32분이다.
113개 Notes의19필드와 Full/ACT 내장 Notes226개를 대조했다.
Native 표 S54·차트 S69/S89, Memory S103, Goal S95/S96, 찾아보기 S110–S112로 정렬했다.
12Templates/28Variants의 설계 목록과 남은 Template Mapping을 유지했다.

## 렌더·검증

통합113장과 ACT0–5의113장, 총226개 최종 PNG를1920×1080으로 렌더링했다.
S66–S70과 ACT3/ACT4/ACT5 montage·마지막 찾아보기를 검토했다. 새 잘림·겹침·전환 단절을 발견하지 않았다.
남은113장의 텍스트와 픽셀을 이전 판과 대조했다. 새 S68의 상단 안내 변경과 번호·참조 변환 외 화면은 같다.
S66과 S67의 화면은 이전 판과 픽셀 단위로 같고, 새 S68의 후보 본문·비교 데이터도 같다.
Full/ACT의113장 렌더가 일치하며 기존 이미지와 native 차트값을 보존했다.
7개 PPTX의 ZIP·관계·컨텐츠 타입·16:9·글꼴 정책·native 표/차트·first-party import와
이전 파일 기준 OOXML 검사를 통과했다. 패키지별 layout finding은0건이다.
43개 정적 Fallback의 역할·분류를 유지하고 현재 번호·경로·해시를 정렬했다.
활성 manifest에는 삭제한 이전 S68이 없으므로 개수 변화나 새 관찰 기록 추가는 없다.

로컬 렌더는 Apple SD Gothic Neo/Menlo를 Malgun Gothic/Consolas의 대체로 사용했다.
Windows PowerPoint·실제 발표 PC/교육장·제품/계정·실측 리허설은 UNVERIFIED다.
389분은 배정 합계이며 실제 발표시간을 검증한 결과가 아니다.
Demo Repository·Sites·발표 묶음은 변경하지 않았다. 새 Trial·제품 실행·리허설은 수행하지 않았다.

## 산출물

[통합 PPT](../AI_Dev_Training_Full.pptx), [ACT3 PPT](../ACT_3.pptx),
[새 S68](../preview/full/S68.png), [전체 Notes](../notes/FULL_SPEAKER_NOTES.md),
[현재 Map](../../plan/SLIDE_MAP.md), [삭제·연결 기획](../../plan/S68_PROCEDURE_RECAP_REMOVAL.md),
[번호 대응표](../../plan/SLIDE_ID_MIGRATION_113_DEC0138.md),
[검증 요약](S68_PROCEDURE_RECAP_REMOVAL_VALIDATION.json), [현재 전달 안내](FINAL_HANDOFF.md).
