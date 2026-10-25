# 실무 적용 팁 — 공통 배지·ACT별 찾아보기 반영 결과

Decision:DEC-0087. Date:2026-10-25. Baseline:8c059c0.
Status: LOCAL PASS; Windows/room/product/account/timed rehearsal UNVERIFIED.

## 반영 내용

17개의 기존 사용 경로·요청 문장·정보 배치·수행/검증/관리 기준에 공통
“실무 적용 팁” 배지와 분류를 붙였다. 본문은 원래 위치에 남기고 다음
문제·성찰·마무리 앞에6개의 제목/ID 찾아보기를 추가했다. 목록은 전문이나
새 적용법을 반복하지 않으며 원래 전환 질문은 Notes에서 이어받는다.

현재105장·393분(6시간33분). 기존99장의 모든 배정은 보존했고 각 목록에
Lecture1분씩 추가했다. ACT 장수14/22/19/19/19/12, 시간43/64/82/86/81/37분.
Mode Lecture157/Demo73/Case88/Reflection21/Transition22/Q&A32분이다.

## ACT별 팁과 찾아보기

| ACT | 팁 ID | 찾아보기 | 이후 기존 전환/성찰/마무리 |
|---|---|---|---|
|ACT0|S11|S13|S14 — Repository를 보면 내가 원하는 것까지 알까?|
|ACT1|S26, S27, S28, S29, S30, S31, S32, S33|S34|S35 — 이번 Task인가, 계속 유지할 Project 정보인가?|
|ACT2|S47|S54|S55 — 지식은 정리됐지만 절차는 반복된다|
|ACT3|S57, S67, S72|S73|S74 — 우리 업무에서 먼저 정리할 한 가지|
|ACT4|S79, S83|S92|S93 — GPU 변경 뒤, 검증 조건을 다시 본다|
|ACT5|S100, S101|S104|S105 — Q&A와 교육 마무리|

분류는 사용 환경/요청 작성/Context 관리/수행 방법/업무 적용/검증·개선이다.
S11의 사내 사용 경로와 ACT1의8개 Prompt 기법을 같은 배지로 찾을 수 있다.
ACT4의 조사·재평가 안내는 CONCEPTUAL/TEACHING_MODEL로 남고, ACT5의
유지·통합·제거 판단도 실제 성공 결과로 바꾸지 않았다. 배지는 활용 목적이다.

## 화면과 흐름 검토

-17개 팁과6개 찾아보기를 개별 검토했다. 같은 상단 배지가 제목·본문·근거 표시와 겹치지 않는다.
- ACT1의8개 제목/ID는 두 열에4개씩 표시해 가독성을 확인했다. 다른 ACT는 기존 항목 수대로 한 열로 정리했다.
-6ACT 개요와 각 목록 전후의 연결을 검토했다. 다음 문제·성찰·마무리 장은 원래 순서로 이어진다.
- 기존99화면은 번호·교차 참조·배지 영역 밖의 픽셀이 동일하다. 본문 문구/배치와 이미지 bytes/crop/위치는 보존했다.
- 팁 설명 전문·새 기법·새 제품 동작·실험 결과를 추가하지 않았다. 발표 묶음과 Demo 저장소/7State tags는 그대로다.

## 구조·Notes·시간 검증

- Full105+6ACT105,210개의 PNG를 최종 패키지에서 렌더링했다.105개 ACT/Full 화면·텍스트 대응이 같다.
-7개 PPTX의 package/geometry 오류0건, 첫 파티 reimport PASS다. Native 표3개와 차트의 데이터/XML을 대조했다.
-105x19Notes의 Markdown/ACT/Full/내장 대응을 확인했다. 팁 운영 표시, 목록 앞뒤 Cue, 새 목록 Notes를 정렬했다.
- S11 Notes의 이전360분/40분 총량 문구를 현행393분/ACT0 43분으로 정정했다. 이 장의1분은 보존했다.
- 기존99장의 제목·시간/Mode·Section/Beat/Demo/Trial/State/Claim ID·Template·M 연결은 유지했다.
-6목록은 기존 T03-A를 재사용하며11Template/27Variant다. M footer는 찾아보기로 표시하고 원모듈 교수 내용을 추가하지 않는다.
-34개 static fallback의 현행 ID/경로/치수/해시를 기록했다. 새 목록을 Demo 시간이나 실제 실행 근거로 합치지 않는다.
- 새 ACT 범위를 벗어난 이전 표준 PNG15개만 정리했다. Git history와 날짜가 붙은 기존 특별 미리보기는 보존했다.

## 남은 확인

P0: 새로 발견된 문제 없음.

기존 S50→현행S52 표의0.01in 추정 높이 경고는 Full/ACT2에서 동일하다.
현재 화면·Native 표 XML은 동일하고 이번 배지/목록과 무관하다. Office XSD
검사는 번들 Python의 defusedxml 미설치로 UNAVAILABLE다. 첫 파티 package/
geometry/reimport 확인을 Windows PowerPoint 검증으로 대체하지 않는다.

Windows PowerPoint·실제 발표 PC 글꼴·교육장 투사·현재 제품/계정·실측 리허설은
UNVERIFIED다. 실환경 체크박스를 완료로 바꾸거나 Live/HYBRID를 새로 승인하지 않았다.

## 자료

- [통합 PPT](../AI_Dev_Training_Full.pptx), [Full Notes](../notes/FULL_SPEAKER_NOTES.md).
- [배지·목록 예시](../preview/full/practical-tips-overview.png), [6ACT 찾아보기](../preview/full/practical-tip-indexes.png).
- [ACT0](../ACT_0.pptx), [ACT1](../ACT_1.pptx), [ACT2](../ACT_2.pptx), [ACT3](../ACT_3.pptx), [ACT4](../ACT_4.pptx), [ACT5](../ACT_5.pptx).
- [팁 선정·표시 기준](../../plan/PRACTICAL_APPLICATION_TIPS.md), [99→105](../../plan/SLIDE_ID_MIGRATION_105.md), [검증 기록](PRACTICAL_APPLICATION_TIPS_VALIDATION.json).
- [현재 fallback](../../demos/runbooks/FALLBACK_MANIFEST.md), [사용자 확인](USER_VALIDATION_CHECKLIST.md), [전달 안내](FINAL_HANDOFF.md).

## Git Checkpoint

정상 산출물만 기존 origin/main에 일반 commit/push한다. Force push·Demo 변경·새 묶음 생성은 하지 않는다.
