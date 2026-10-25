# S09/S10 — 기존 삽화 추가

Decision:DEC-0085. Date:2026-10-25. Baseline:1a8199f.
Status: LOCAL PASS; Windows/room/product/account/timed rehearsal UNVERIFIED.

## 반영

|Slide|추가한 장면|위치|유지한 화면|
|---|---|---|---|
|S09|사람이 자료를 찾아 골라 대화창에 전달|가운데 사람 카드 위 여백|5자료·사람·교육용 대화창·모든 문구/도형/배치|
|S10|Agent가 저장소 자료를 조사하고 사람이 검토|가운데 Agent 카드 위 여백|5자료·허용된 조사·관찰 요약·모든 문구/도형/배치|

원본 [S07.png](../../prototype/image-illustration-pilot/assets/S07.png)의 두 장면을
나눠 사용한다. 생성 지시는 [PROMPTS.md](../../prototype/image-illustration-pilot/PROMPTS.md)의
S07에 있으며 원본 bytes는 변경하지 않았다. 작은 교육용 삽화이며 실제 제품 UI나
TRIAL-001 실행 캡처가 아니다. 목표·권한·검토 책임과 과거 CLI/현재 Desktop 경계는 동일하다.

## 산출물

- [통합 PPT](../AI_Dev_Training_Full.pptx):99장/387분.
- [ACT0 PPT](../ACT_0.pptx):13장/42분.
- [두 장 미리보기](../preview/act0/S09-S10-illustrations.png).
- [ACT0 Notes](../notes/ACT_0_NOTES.md), [Full Notes](../notes/FULL_SPEAKER_NOTES.md).
- [검증 기록](S09_S10_ILLUSTRATION_ADDITION_VALIDATION.json).

## 확인한 범위

- S09/S10을 개별 검토했다. 기존 도식과 문구를 가리지 않으며 삽화 비율을 유지했다.
- Full99+ACT0 13,112PNG를 최종 패키지에서 렌더링했다. ACT0/Full13화면은 동일하다.
- 모든 기존 Native 글자·도형·스타일·배치는 동일하다. 화면 차이는 각 삽화 사각형 안뿐이다.
- 다른97개 Full 화면은 byte 동일하며 ACT1–5 PPTX, Native 표3개/차트,34fallback PNG가 동일하다.
-99x19Notes를 대조했다. S09/S10의 출처와 운영 Cue만 보충했고 다른97개 기록은 동일하다.
-99장/387분, ACT별42/63/81/85/80/36분과 모든 장별 Mode·Template 배정은 동일하다.
- 첫 파티 package/geometry 검사 오류0건, reimport PASS다. 기존 S50 표의0.01in 높이 추정 경고는 동일하다.
- Office XSD 검사는 defusedxml이 없어 UNAVAILABLE다. 실제 Windows/글꼴/교육장/제품·계정/시간 리허설은 UNVERIFIED다.
- 원본 asset·prototype·발표 묶음과 Demo Repository/7State tags를 변경하지 않았다. 새 Trial·성과 주장은 없다.

## Git

정상 산출물만 기존 origin/main에 일반 commit/push한다. Force push와 새 remote는 사용하지 않는다.
