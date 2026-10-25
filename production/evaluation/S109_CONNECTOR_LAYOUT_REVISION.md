# S109 — 비교 도식의 연결선·좌우 폭 정렬

Decision: DEC-0095. Date:2026-10-25 (Asia/Seoul). Baseline:`ecdd57b`.
Status: LOCAL RENDER / GEOMETRY / CONTENT PRESERVATION CHECK COMPLETE.

사용자 주석 `annotation-mvnrpmoa-2`는 ACT5의 재평가3/3 슬라이드(S109)의
분기·합류 화살표와 좌우 객체 폭을 조정하도록 요청했다.

## 수정

- 입력 상자202→240px, 중앙 후보 상자346→320px로 조정했다.
- 중앙 두 상자는 같은 폭/높이이며, 분기와 합류의 세로선을 두 상자 중심에 맞췄다.
- 입력/분기/합류의 수평 연결5개는48px, 마지막 출력 연결은12→64px다.
- 선이 상자 경계까지 이어지도록 틈을 없앴다.8개 연결선의2.5px 굵기는 일치한다.
- 오른쪽 비교 기준을832px에서 시작하도록 옮기고 폭을384px로 맞췄다.
- 문구·글자 크기·Notes·Title/ID·템플릿·시간/Mode·기획·근거는 그대로다.
  같은 입력→두 구성→같은 평가 기준의 기존 의미를 유지한다.

## 검증

최종 Full115장과 ACT5 15장을 재입력·렌더링해130PNG를 확인했다. 수정한 S109의
최종 렌더는 검토한 초안과 동일하다. 미수정 Full114화면과 ACT5 14화면은 기존
렌더와 픽셀까지 같다. 다른5ACT의 PPTX는 파일 바이트가 같으며 Full/ACT115장
Preview 대응을 확인했다. 전체115장·406분, ACT5 15장·40분, S109 Lecture2분이다.

전체115개 Notes와6ACT/Full Markdown은 파일 바이트가 그대로이고 모든 PPT 내장
Notes가 대응한다. Native 표3개·차트1개와 모든 기존 그림의 bytes/crop/배치를
보존했다.8개 Native 연결선의 위치와 굵기를 실제 PPTX에서 대조했다.
패키지·관계·레이아웃 finding0이며 Artifact Tool 재입력은 통과했다.
S53의 기존 Native 표0.01in 추정 경고는 그대로이며 이번 변경과 무관하다.

개별 최종 S109과 S108→S109→S110의 연결 및 ACT5 전체 연락판을 시각 검토했다.
새 잘림·겹침·끊긴 연결·한글 누락은 발견하지 않았다. 지정 글꼴은 Malgun Gothic/
Consolas, 로컬 렌더 대체는 AppleSDGothicNeo/Menlo다. Windows/실제 발표 PC/교육장/
제품·계정/실측 리허설은 UNVERIFIED다.

원본 Evidence·assets·Prototype·Demo 저장소/7State태그·발표 묶음을 변경하지 않았다.
새 Trial·비교 실행·통합/제거 효과·PASS/FAIL 결과를 추가하지 않았다.
34개 Demo Fallback PNG는 변경 없이 현재 Full/몽타주 식별 정보만 갱신했다.

[수정 화면](../preview/full/S109.png), [ACT5 전체](../preview/act5/montage.png),
[Slide Map](../../plan/SLIDE_MAP.md), [현재 전달 식별](FINAL_HANDOFF.md).
