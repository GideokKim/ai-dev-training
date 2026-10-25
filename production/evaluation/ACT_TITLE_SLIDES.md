# ACT Title Slides Result

Date:2026-10-25. Decision:DEC-0090. Baseline:86ba967.
Status: **PASS — local production/package/render/Notes alignment only.**
Windows PowerPoint, target fonts, room projection, product/account and
actual timed rehearsal remain **UNVERIFIED**.

## Approved Title Pages

| ACT | Slide ID | Title | Subtitle | First body |
|---|---|---|---|---|
|ACT0|S01|AI를 Repository로 데려가기|Chatbot → Repository Agent|S02|
|ACT1|S15|Prompt를 작업 명세로 만들기|Prompt Engineering · 요청 설계|S16|
|ACT2|S37|필요한 정보를 찾아 쓰게 하기|Context Engineering · 정보 설계|S38|
|ACT3|S56|AI가 일할 방법과 환경 설계하기|Harness Engineering · 수행 체계 설계|S57|
|ACT4|S75|기록과 피드백으로 시스템 개선하기|Loop Engineering · 개선 과정 설계|S76|
|ACT5|S94|내 업무에 맞게 조합하고 덜어내기|AI-Native Development · 업무 방식의 재설계|S95|

[6장 미리보기](../preview/full/act-title-slides.png),
[제목→첫 문제](../preview/full/act-title-handoffs.png),
[전체 흐름](../preview/full/montage.png), [통합 PPT](../AI_Dev_Training_Full.pptx).

## Design and Story

새 제목6장은 큰 한글 제목과 작은 승인 부제를 Native text/shape로 구성한다.
기존 밝은 배경·색·글꼴·여백을 사용하고 공통 T12-A를 적용한다. 제목은 ACT의
관점만 안내하며 용어/기법 정의·도구 목록·성공 결과를 미리 설명하지 않는다.
기존 첫 문제·청중 질문·Demo는 원래대로 이어진다. 이전 ACT의 마지막 질문을
보존하면서 새 제목을 경유하는 Cue만 Notes와 Map에 추가했다.

다른11Templates/27Variants·102개 기존 배정을 유지하고 제목 전용 T12-A를
추가해12Templates/28Variants로 정렬했다. T12-A는 로컬6장 구현 범위로
조건부 동결하며 Windows/교육장 확인을 대신하지 않는다.

## Time and Mode

| ACT | Range | Slides | Minutes |
|---|---|---:|---:|
|ACT0|S01–S14|14|43|
|ACT1|S15–S36|22|64|
|ACT2|S37–S55|19|82|
|ACT3|S56–S74|19|86|
|ACT4|S75–S93|19|81|
|ACT5|S94–S108|15|40|
| Total | S01–S108 |108|396|

Mode: Lecture154/Demo73/Case88/Reflection21/Transition28/Q&A32minutes.
제목마다 Transition1분씩 총6분을 더했다. 기존102장의390분과 각 장의 시간/
Mode는 그대로다. 제목의 안내를 본문 설명·Demo 시간과 중복 계산하지 않는다.
이는 계획 배정이며 실제396분 리허설 결과가 아니다.

## Render and Package Validation

- 최종 Full108+6ACT108의216개1920×1080PNGs를 재가져온 최종 패키지에서 렌더링했다.
-7패키지 모두16:9, 순서/Slide ID/Native text·shape/내장 Notes를 확인했다.
  package/geometry finding0, first-party import PASS.
-108개 Full/ACT 대응 PNG가 byte 동일하다. Draft/Final12개 표지/첫 문제 대응도 동일하다.
-6ACT의 전체 contact sheet, 제목6장, 제목/첫 문제 연결을 시각 검토했다.
  새 잘림·겹침·한글 누락은 관찰하지 않았다.
-102기존 화면은 번호/참조 영역 밖의 픽셀이 같고 실제 문구·이미지 bytes/crop/
  배치·Native tables/chart를 보존한다. 기존 S54 화살표 수정은 현재 S58에 유지한다.
- Native tables S53/S62/S85, chart S65의 실제 구조/근거는 기존과 같다.
-17개 실무 적용 팁 배지와 마지막3장 요약의 제목/ID가 해당 팁으로 연결된다.
  제목6장에는 팁 배지나 새 M1–M9 교수 연결을 추가하지 않는다.

## Notes and Reference Alignment

108x19Notes 필드와 ACT/Full Markdown·PPT 내장본이 일치한다. 기존 장의
설명 역할과 시간·근거는 유지하고 번호/참조와 ACT 제목 경유만 정렬했다.
현재 S12의 운영 총량 표기는 ACT0 43/전체396분이다.

기존 ACT2 Notes에서 누적 번호 변경으로 잘못 남아 있던 참조 범위5곳을
현재 Map의 실제 역할과 대조했다. 현재 S47은 S45–S46의 연구/근거 확인,
S48–S50의 관찰 결과 참조는 S51–S53으로 바로잡았다. 관찰·해석·Claim의
강도나 Trial 결과를 바꾸지 않고 잘못된 위치 표기만 수정했다.
현재 운영 Architecture의 마지막 Q&A는 S108, 전체 Transition은28분이다.

## Delivery and Preservation

34개 정적 fallback 경로/크기/해시를 대조하고 Full/Notes/몽타주의 현재 식별자를
갱신했다. 원래 Trial 기록과90장 역사적 전달 본문은 byte 그대로 보존했다.
Demo 저장소 HEAD·태그·clean 상태, 원본 이미지/Prototype/연구 자료/기존 묶음을
변경하지 않았다. 새 Trial·관찰 결과·성과·제품 확인·발표 묶음은 없다.

## Remaining Items

- P0/P1: 이번 추가로 새 문제가 관찰되지 않았다.
- P2: 기존 Native table의0.01in 경고가 현재 Full S53 / ACT2 local17에 남는다.
  해당 표의 원문/시각은 변하지 않았으며 새 표지의 문제와 구분한다.
- Optional Office XSD 검사는 defusedxml 부재로 UNAVAILABLE다. first-party
  package/geometry/reimport 통과와 구분한다. 의존성을 새로 설치하지 않았다.
- Windows PowerPoint/발표 PC 글꼴/교육장/제품·계정/실측 리허설은 UNVERIFIED다.

## Files and Checkpoint

Full/ACT0–5 PPTX, Notes/previews, 제목 소스·번호 adapter, Map/Template/module
맵, 기획·검증/운영 Router, 현재 Runbook/static identity와 전달 문서를 정렬했다.
[제목 기준](../../plan/ACT_TITLES.md), [102→108 이행표](../../plan/SLIDE_ID_MIGRATION_108.md),
[검증 기록](ACT_TITLE_SLIDES_VALIDATION.json).

정상 산출물만 Commit한 뒤 기존 origin/main으로 정상 Push한다. Force Push와
Demo 저장소 변경은 하지 않는다. Next readiness: READY FOR ACT TITLE REVIEW.
