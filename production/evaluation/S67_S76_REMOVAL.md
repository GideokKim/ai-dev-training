# S67·S76 삭제 및 앞뒤 연결 결과

Decision: DEC-0132. Date:2026-11-02. Baseline:`1b708c9`.
Status: LOCAL RENDER AND STRUCTURE VERIFIED.

## 변경 범위

이전121장판 S67과 S76을 본편과 활성19필드 Notes에서 삭제했다.
사용자의 “흡수시키지 말고 삭제한 다음 앞뒤만 다듬는다”는 지시에 따라 삭제한 두 장의
설명·결론·보충표를 다른 Slide/활성 Notes로 옮기거나 새 참고 자료로 만들지 않았다.
삭제 전 파일은 Git 이력에 남는다. 이미 존재했던 원자료·참고 기록의 본문은 그대로 유지하고
기존 참고 문서에는 현재판과 과거판을 구분하는 안내만 추가했다.

화면의 기존 내용·배치는 유지한다. 남은119장의 변경은 번호·기존 찾아보기 참조뿐이다.
인접 Notes/Map에서는 삭제한 장을 다음에 보거나 이미 봤다는 전제와 오래된 번호를 정리했다.
- S65 목록 발견 → S66 명시 요청 → 새S67 기존 Skill 제작 팁.
- 새S74 Context/다시 쓸 지식 → 새S75 실제 작업 구성의 역할 → 새S76 Harness 구조.
기존 인접 장에 이미 있던 설명·Claim Boundary는 유지했다. 새 결론을 덧붙이지 않았다.

## 번호·시간·Notes

이전 S01–S66은 그대로, S68–S75는-1, S77–S121은-2한다.
현재119장·405분(6시간45분), ACT장수14/23/22/25/20/15,
ACT시간42/64/90/84/85/40분이다. 삭제한 Demo2+Lecture4=6분은 재배분하지 않는다.
Mode Lecture182/Demo44/Case102/Reflection22/Transition23/Q&A32다.
DEMO-03의 S65/S66은 기존1/2분을 유지하며 총3Demo분이다.
나머지 모든 Slide의 시간·Mode는 이전과 같다.

119개×19필드 Notes와 통합/ACT의238개 내장 Notes를 대조했다.
현재 총시간·ACT3시간, 삭제장 예고와 참조·Preview 경로를 맞췄다.
과거 판본의 실제 요청·측정값·명령·경로와 근거 ID는 보존했다.
Template Mapping119행·12Templates/28Variants를 유지한다.
Native 표는 S54, 차트는 S70/S96이며 값·범주·편집성을 보존했다.

## 렌더·검증

- 통합119장과 ACT0–5의119장, 총238개 PNG를1920×1080으로 렌더링했다.
- ACT0–5 montage와 S66/S67·S74/S75·S116 개별 화면에서 흐름·번호·가독성을 확인했다.
  이번 삭제로 발생한 새로운 P0/P1 잘림·겹침·누락을 발견하지 않았다.
- 남은119장을 이전 판과 대조했다.66장은 픽셀이 같고53장은 번호·참조 영역만 다르다.
  본문 찾아보기 참조가 바뀐 곳은 현재 S116/S118이다. 새 본문 내용·이미지는 추가하지 않았다.
- 통합/ACT119장의 픽셀이 일치하고 모든 내장 Notes가 Markdown과 같다.
- 기존 이미지 바이트·차트 수치 cache·원자료·Story/Beat/Section/Trial/State/Claim ID는 유지한다.
- 7개 최종 PPTX의ZIP/관계/컨텐츠타입,16:9, layout finding0, font policy,
  native 표/차트, first-party import 및 원본 기준 OOXML 검사를 통과했다.
- 이전부터 있던 S04 연결선2건과 S54 표 높이 추정0.01inch 경고는 그대로다.
- 정적 Fallback은 삭제2개를 제외한43개로 정렬했다. 기존 분류·역할과 Live 미활성 범위를 유지한다.

로컬 렌더는 Apple SD Gothic Neo/Menlo를 Malgun Gothic/Consolas의 대체로 사용한다.
Windows PowerPoint·발표PC/교육장·제품/계정·실측 리허설은 UNVERIFIED다.
405분은 배정 합계이며 실제 발표시간의 검증 결과가 아니다.
Demo Repository·Sites·발표용 묶음을 변경하지 않았다. 새 Trial·제품 실행·리허설을 하지 않았다.

## 산출물

[통합 PPT](../AI_Dev_Training_Full.pptx), [ACT3 PPT](../ACT_3.pptx),
[전체 Notes](../notes/FULL_SPEAKER_NOTES.md), [ACT3 Montage](../preview/act3/montage.png),
[현재 Map](../../plan/SLIDE_MAP.md), [삭제/연결 기획](../../plan/S67_S76_REMOVAL.md),
[번호 대응표](../../plan/SLIDE_ID_MIGRATION_119_DEC0132.md),
[검증 요약](S67_S76_REMOVAL_VALIDATION.json), [현재 전달 안내](FINAL_HANDOFF.md).
