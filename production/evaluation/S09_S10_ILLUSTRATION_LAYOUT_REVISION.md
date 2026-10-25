# S09/S10 — 삽화 확대·우측 상단 배치

Decision:DEC-0086. Date:2026-10-25. Baseline:10b1afe.
Status: LOCAL PASS; Windows/room/product/account/timed rehearsal UNVERIFIED.

## 변경

S09의 자료 선택·전달 장면과 S10의 Agent 조사 장면을 우측 상단으로 옮겼다.
가로·세로를 각각1.8배, 면적을3.24배로 키웠다. 오른쪽 출력 패널의 오른쪽
끝에 맞추고 패널 위13canvas-unit 간격을 남긴다. 제목·Slide ID·본문·화살표와
겹치지 않는다. 기존 도식과 문구·글꼴·위치는 그대로다.

원본 PNG/crop/비율,99장/387분, 장별 시간/Mode와 Claim Boundary는 동일하다.
기존 AI 생성 삽화이며 제품 화면이나 새 Trial 근거가 아니다.

## 산출물

- [통합 PPT](../AI_Dev_Training_Full.pptx), [ACT0 PPT](../ACT_0.pptx).
- [S09](../preview/act0/S09.png), [S10](../preview/act0/S10.png), [두 장 미리보기](../preview/act0/S09-S10-illustrations.png).
- [ACT0 Notes](../notes/ACT_0_NOTES.md), [Full Notes](../notes/FULL_SPEAKER_NOTES.md).
- [검증 기록](S09_S10_ILLUSTRATION_LAYOUT_REVISION_VALIDATION.json).

## 검증

- 두 장을 개별 검토했다. 확대·이동 후 잘림·겹침과 기존 글자 가림이 없다.
- Full99+ACT0 13,112PNG를 최종 패키지에서 렌더링하고 ACT0/Full13화면을 대조했다.
- 모든 기존 Native 글자·도형·스타일·위치는 동일하며 화면 변화는 이전/새 삽화 영역 안뿐이다.
- 다른97개 화면과 ACT1–5 PPTX는 byte 동일하다.99x19Notes 중 해당2장의 위치 Cue/출처만 정렬했다.
- 모든 장별 시간/Mode/Template과 Native 표/차트,34fallback PNG의 경로·해시를 보존했다.
- Package/geometry 오류0건, 첫 파티 reimport PASS다. S50의 기존0.01in 표 높이 추정 경고는 동일하다.
- Office XSD는 defusedxml이 없어 UNAVAILABLE이며 Windows·발표 PC 글꼴·제품/계정·교육장·시간 리허설은 UNVERIFIED다.
- 기존 원본 asset·prototype·발표 묶음과 Demo 저장소/7State tags는 변경하지 않았다.

## Git

정상 산출물만 기존 origin/main에 일반 commit/push한다. Force push는 사용하지 않는다.
