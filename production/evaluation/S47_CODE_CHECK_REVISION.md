# S47 코드 확인 질문 중심 수정

Decision: DEC-0105. Date:2026-10-27. Baseline:`e10e785`.
Status: LOCAL PASS. Windows/교육장/제품·계정/리허설 UNVERIFIED.

## 화면

RepoQA 설명 띠와 연구 footer를 제거했다. 기존 crop 요청, 보존된 코드 한 줄,
위치·요청한 동작·필요한 주변 근거라는 세 확인 질문, 코드 발췌/새 탐색 기록 아님
표시는 유지한다. 하단은 “확인할 근거를 정했다면, 어디서 찾게 할까?”로 S48을 연결한다.
S46의 정보 존재/활용 구분→S47의 코드 확인→S48의 상세 근거 경로라는 흐름이다.
S46/S48은 화면·Notes·기획 레코드를 변경하지 않았다.

## Notes와 관련 연구

RepoQA의 서지·과제·조건·한계는 Notes와
[선택 참고](../../references/research/repoqa.md)에 보존했다. 정규 발표 흐름에서는
연구 소개를 생략한다. 관련 연구이며 세 확인 질문이나 Routing을 검증한 직접 근거가
아님을 유지했다. 기존 source/claim의 상세 기록도 삭제하지 않았다.

4분 Lecture를 S46 연결40초, 위치40초, 동작60초, 주변 근거60초, S48 연결40초로
정렬했다.19개 Notes 필드를 유지하며 Full과 ACT2의 내장/Markdown Notes를 맞췄다.
120장·420분, ACT45/64/90/96/85/40, Mode186/49/105/22/26/32분은 불변이다.
실제 리허설을 하거나 발표 시간을 새로 측정한 것은 아니다.

## 검증

- Full120장과 ACT2 22장의 최종 PPTX를 package/layout/import 검사 후 재입력해
 142개1920×1080 PNG로 렌더링했다. ACT2 22개 화면은 Full의 같은 장과 같다.
- S46/S47/S48을 개별 화면으로 검토했다. 새 잘림·겹침을 발견하지 않았다.
- 다른119장 Full 화면은 기존 PNG와 픽셀이 같다. S47의 요청·기존 코드·세 질문
 영역도 픽셀이 같다. 변경은 연구 영역/연구 footer 제거와 하단 연결 질문이다.
- 두 PPTX 각각 S47 slide XML과 Notes XML만 달라졌고 다른644개 파트는 바이트가 같다.
 Native 미디어·표·차트·워크북·Theme/Layout·M 표시는 유지한다.
- source factory로 S47을 다시 생성한 화면도 최종 편집본과 픽셀이 같다.
- 120개 Markdown Notes의19필드를 검사했고 S47 외119개는 원문과 같다.
 142개 내장 Notes와 현재 Markdown을 대조했다. S47 이외 Map 레코드도 그대로다.
- 다른5개 ACT PPTX는 바이트가 같다.44개 active fallback의 역할·경로·이미지 해시는
 그대로이며 최신 PPT/Notes/montage 식별자만 갱신했다. 과거 manifest는 그대로다.

연구의 범위, 실제 코드 출처, State/Trial 및 기존 Claim Boundary를 유지한다.
새 Trial·탐색·테스트 결과·효과 주장은 없다. Demo 저장소·웹·발표 묶음은 변경하지 않는다.
로컬 렌더링 글꼴은 Apple SD Gothic Neo/Menlo 대체이며 Windows 발표 환경의 증명이 아니다.

[수정 S47](../preview/full/S47.png), [통합 PPT](../AI_Dev_Training_Full.pptx),
[ACT2](../ACT_2.pptx), [전체 Notes](../notes/FULL_SPEAKER_NOTES.md),
[검사 기록](S47_CODE_CHECK_VALIDATION.json).
