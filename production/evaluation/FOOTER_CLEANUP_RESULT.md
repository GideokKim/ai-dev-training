# 전체 하단 문구 정리 결과

Decision: DEC-0103. Date:2026-10-26. Baseline:`aaed341`.
Status: LOCAL PASS; Windows/company-account/room/rehearsal UNVERIFIED.

## 화면 정리

111개 일반 장의 출처·설명222행을92행으로 축약했다.26개 장은 해당 하단 문구를 비웠다.
S02의 “교육용 사례 삽화·AI 생성 이미지·실제 제품 실행 화면 아님”과 중복 성찰 안내,
S104–S108의 동일한 종합/제작 해설, S114–S116의 찾아보기 자체 설명 등을 삭제했다.
제작 방법·생성 도구·내부 ID·상세 버전/확인일·발표 운영 안내는 화면에서 삭제/Notes로 이동했다.

실제/가상 구분, 측정 조건·지표와 인과 한계, 연구명·연도·과제, 핵심 검증/책임 원칙은
짧게 남겼다.117개 M 연계 표시와6개 ACT 제목 장의 과정명은 유지한다.
S17은 “개념도·실측 아님”, S67은 합성 입력/Python 할당 피크/단독 인과 한계,
S84–S90은 “가상 진행 예시”, S94는 ReConcile/StrategyQA 질의응답 실험을 표시한다.

## Notes와 추적

원래111개 장의 두 하단 문구를 Notes의 기존 Evidence / Source와 Claim Boundary에
원문대로 추가해 상세 출처·범위·미검증 정보를 보존했다. 새로운 필드를 만들지 않고
19필드·발표 흐름·목표·질문·시간/Mode·Fallback·Transition을 유지한다.
6개 ACT 제목 Notes는 그대로다. 전체 원본 하단345개는
[원본 기록](../../references/SLIDE_FOOTER_PROVENANCE_2026-10-26.json)에 보존했다.
[적용 기준](../../plan/FOOTER_CLEANUP.md), 현행 Map의 Audience Footer,
source의 audience-footers.json/overlay가 같은 최종117장 번호를 사용한다.

## 검증

- 최종 Full117장과6ACT117장,234개1920×1080PNG를 각 최종 PPTX에서 재입력·렌더링했다.
- 117개 Full/ACT 화면 전체 픽셀과 Notes가 같다.117개 본문 영역과 M 연계 영역의 픽셀은
 수정 전과 동일하다.6개 ACT 제목 화면도 전체가 이전과 같다.
- 234개 슬라이드의 본문·도형·이미지·표·차트·연결선·경계선·M label 객체가 원본과 같다.
 수정은 일반 하단 text 객체와 관련 Notes에만 한정된다. 미디어·차트·워크북·관계 파트는
 바이트가 같다. S15의 이전 caption/프레임 수정도 유지됐다.
- 234개 내장 Notes/117개 Markdown Notes의19필드를 대조했다. 추가한 출처/범위 외
 필드 값은 원본과 같고, 원래 상세222행도 모두 보존된다.
- Source overlay의 대표6장 생성/렌더를 확인해 재제작 시에도 이전 긴 문구가 돌아오지 않는다.
- 7개 PPTX의 first-party package/layout/import 검사를 완료했다. 기존 표의 추정 경고는
 동일하다. 개별 S02/S27/S67/S84/S94/S104에서 새 footer 잘림·겹침을 발견하지 않았다.
- 117장·412분, ACT45/64/82/96/85/40분과 Mode178/49/105/22/26/32분을 유지한다.
 기존 Map의 Story/Evidence/Claim/시간 필드는 동일하며 화면 표기 metadata만 추가했다.
- 44개 active fallback의 역할·경로·근거는 유지하고 이미지/PPT/Notes/연락판 해시만 갱신했다.

Windows PowerPoint·발표 PC 글꼴·교육장 투사·회사 계정/제품 표면·실측 리허설은 미검증이다.
새 Trial·제품 실행·성과·연구를 추가하지 않았다. Demo Repository·웹/Sites·발표 묶음은
변경하지 않았다. 이번 작업은 화면의 표현 정리이며 근거 등급을 높인 작업이 아니다.

[통합 PPT](../AI_Dev_Training_Full.pptx), [전체 Notes](../notes/FULL_SPEAKER_NOTES.md),
[전체 Preview](../preview/full/montage.png), [S02](../preview/full/S02.png),
[측정 범위 S67](../preview/full/S67.png), [가상 사례 S84](../preview/full/S84.png),
[연구 근거 S94](../preview/full/S94.png), [검사 기록](FOOTER_CLEANUP_VALIDATION.json).
