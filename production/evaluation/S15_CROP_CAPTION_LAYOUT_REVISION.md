# S15 crop 설명 배치 수정

Decision: DEC-0102. Date:2026-10-26. Baseline:`7d90672`.
Status: LOCAL PASS; Windows/room/rehearsal UNVERIFIED.

## 수정

“기존 구현 · 조사한 범위”를 **“조사한 범위”**로 줄였다. 위의 “앞서 살펴본 기존 구현”
안내는 그대로이므로 의미를 보존한다. crop 보조 설명을13.5pt에서 다른 단계와 같은15pt로 맞췄다.
여섯 단계의 사각형 높이를188px에서200px로 늘리고 보조 설명을 같은 줄에 정렬했다.
텍스트 상자 기준 좌우10px/하단12px 여백을 확보했다. 아래 질문 상자까지21px를 남겼다.

상단 제목·그림·ROI 도식·연결선·다른 단계 문구·하단 질문·근거와 한계 표기는 유지했다.
실선의 기존 조사 범위와 점선의 추가 정의/연결 범위 구분,117장·412분 및 장별 시간/Mode도 같다.
Notes 내용이 여전히 같은 의미를 설명하므로 Markdown/내장 Notes를 변경하지 않았다.

## 검증

- 최종 Full/ACT0의 S15를 각각1920×1080으로 재렌더링했다. 두 PNG는 픽셀이 같다.
- 원해상도로 짧아진 문구와 프레임 안 여백, 여섯 단계 정렬, 아래 질문 간격을 확인했다.
  로컬 렌더에서 새 잘림·겹침을 발견하지 않았다.
- 두 PPTX에서 바뀐 패키지 파트는 각각 `ppt/slides/slide15.xml` 하나뿐이다.
  다른 모든 Slide·Notes·이미지·차트·워크북·관계 파트는 이전과 바이트가 같다.
- S15의 텍스트 변경도 해당 보조 설명 하나뿐이다.12개 도형 변경은6개 프레임 높이와
 6개 보조 설명의 정렬/폭/높이, crop 보조 설명의 글자 크기로 한정된다.
- First-party package/layout 검사와 최종 파일 재입력을 확인했다. Full의 기존 표 추정 경고는
  동일하다. 지정 글꼴 Malgun Gothic/Consolas와 로컬 대체 글꼴을 구분한다.
- S15 이외의 PNG는 다시 만들거나 변경하지 않고 Full/ACT0 montage만 새 S15로 갱신했다.
- 현재 전달 문서와 정적 fallback 목록의 통합 PPT/연락판 파일 식별자를 정렬했다.
- Windows PowerPoint·실제 발표 PC 글꼴·교육장 투사·리허설은 미검증이다.
  특정 표시 환경에서 넘친 원인을 글꼴 문제로 확정하지 않는다.

새 Trial·제품 실행·성과 주장·웹/Sites·Demo Repository·발표 묶음 변경은 없다.

[수정 화면](../preview/full/S15.png), [ACT0 전체](../preview/act0/montage.png),
[통합 PPT](../AI_Dev_Training_Full.pptx), [ACT0 PPT](../ACT_0.pptx),
[검사 기록](S15_CROP_CAPTION_LAYOUT_VALIDATION.json).
