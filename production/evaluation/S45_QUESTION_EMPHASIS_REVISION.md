# S45 하단 질문 강조

Date:2026-11-02. Decision: DEC-0122. Baseline:519bf6f.
Status: LOCAL RENDER AND STRUCTURE VERIFIED.

## 변경

“필요한 정보를 제공하면, 답에서도 제대로 활용할까?” 문구는 그대로 두고
진한 청록색 박스와34px(25.5pt) 굵은 흰색 글자로 강조했다.
기존30px(22.5pt)에서 크기와 대비를 높였다. 위쪽 제목·비교 도식은 그대로다.
S45 Notes의 마지막40초 진행 지침만 실제 강조 영역과 맞췄다.

## 보존

120장·417분, ACT2 22장·90분, S45 Lecture4분을 유지한다.
T03-B, 공통 안내/작업별 상세 구분과 S44→S45→S46 흐름도 같다.
기존 교육용 구성·관찰·연구의 근거 범위와 Claim Boundary를 변경하지 않는다.
새 Trial·제품 검증·Demo 저장소 변경·Sites 변경·발표 묶음 제작은 없다.
S41의 사용자 별도 실제 데모9개와 보존된 TRIAL-003 11개 구분도 유지한다.

## 확인

- 최종 Full120장과 ACT2 22장을1920×1080으로 렌더링했다.
- S45 변경 픽셀은 하단 질문 영역에만 있다. 나머지119장 화면은 픽셀이 같다.
- ACT2/Full22개 화면과 수정 S45의 source/final 렌더가 각각 일치한다.
- 개별 S45와 ACT2/full montage에서 잘림·겹침을 발견하지 않았다.
- 각 PPTX에서 바뀐 ZIP part는 해당 S45 slide/Notes XML뿐이다.
  기존 표·차트·이미지·관계·테마와 다른5개 ACT PPT는 바이트가 같다.
-120개19필드 Notes와142개 내장 Notes가 맞으며 다른119개 Notes는 같다.
- 기존 장별 시간/Mode·Template 배정과 총417분을 유지한다.
- 패키지 무결성·16:9·layout finding0·first-party import 검사를 통과했다.

로컬 렌더는 Malgun Gothic/Consolas를 Apple SD Gothic Neo/Menlo로 대체한다.
Windows PowerPoint·실제 발표 화면·교육장·제품/계정·실측 리허설은 UNVERIFIED다.
이번 수정에서 새 P0/P1 문제는 발견하지 않았다. 실제 투사 가독성은 별도 Gate다.

## 산출물

[수정 S45](../preview/full/S45.png), [통합 PPT](../AI_Dev_Training_Full.pptx),
[ACT2 PPT](../ACT_2.pptx), [ACT2 Notes](../notes/ACT_2_NOTES.md),
[Map](../../plan/SLIDE_MAP.md), [Decision](../../plan/DECISIONS.md),
[현재 파일 식별자](FINAL_HANDOFF.md).
