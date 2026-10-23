# S62 실제 지식의 원래 출처와 Memory 판단 — DEC-0074

Date:2026-10-23 (Asia/Seoul). Baseline:`a476daf`. Structure:93slides/379minutes.

## Status

LOCAL REVIEW COMPLETE — S62 화면·19필드 Notes와 기획·PPT·Preview를 정렬했다.
Windows PowerPoint·실제 발표 글꼴·교육장·제품/계정·시간 리허설은 UNVERIFIED다.

## 지식과 원래 출처

기존 네 기준 띠와 긴 대응표를 실제 네 출처 노드로 정리했다. 각 노드에
짧은 지식과 파일/디렉터리 이름을 붙이고, 아래의 출처 확인 가능·후보 없음
판단으로 모았다. 모든 노드·텍스트·연결선은 편집 가능하다.

| 출처 | 화면의 실제 지식 | 원출처 |
|---|---|---|
| 코드 |crop 구현, 끝 좌표 제외|STATE-04-PERF src/graypipe/transform.py|
| 문서 |이미지 명세·모듈 연결 순서|docs/image-contracts.md, docs/architecture.md|
| Skill |성능 작업의 조사·검증 절차|.agents/skills/graypipe-performance/SKILL.md|
| Trial 기록 |측정값·입력·환경·날짜와 제품 이력|교육 저장소 plan/DEMO_MATRIX.md, 제품 Git commits/tags|

crop 동작은 코드와 문서에서 모두 확인한다. 출처는 배타적 지식 종류가 아니다.
네 기준(재발견 비용·재사용·출처/범위·갱신/무효화)은 Notes에 보존했다.
화면 공백 제외 글자는289→268이며, 감소 자체를 이해도나 학습 효과로 취급하지 않는다.

## Memory를 추가하지 않은 이유

[DEMO_MATRIX §§181–190](../../plan/DEMO_MATRIX.md)의 감사에서는 필요한 정보를
기존 출처에서 확인할 수 있었고, 출처가 없어 비싼 재조사를 반복한 별도 지식
후보를 찾지 못했다. 반복 절차는 이미 Skill에 있고, 환경 의존 수치는 날짜가
있는 Trial 기록이 적절했다. 따라서 [DEC-0018](../../plan/DECISIONS.md)의
no-extra-Memory 판단을 유지한다. 문서가 존재하면 언제나 Memory가 불필요하다는
규칙이나 검색 시간·비용의 측정 결과로 확장하지 않는다.

## S61→S62→S63

S61의 재현 조건은 명시적 가정이다. S62는 실제 출처 감사로 돌아와 보존 기준을
적용하고 현재 선택을 회수한다. S63에서는 이 출처와 도구들이 현재 작업의
어떤 책임을 맡았는지 전체 실제 구성으로 연결한다. S61/S63 화면·Notes와 기존
Transition은 그대로 유지했다.

## Evidence / Claim

[CLAIM_FREEZE](../../plan/CLAIM_FREEZE.md)의 OBSERVED_PRODUCT / TEACHING_MODEL,
FROZEN WITH SCOPE를 유지한다. 코드·명세·architecture·Skill을 STATE-04-PERF에서
읽기 전용으로 대조했고 원문 hash를 검증 기록에 남겼다. 이것은 새 제품
실행이나 Trial이 아니다. 기존 감사 문서는 변경하지 않았다.

- 도식은 보존된 지식 감사의 재구성이며 실제 읽기 순서·검색 trace·Memory 캡처가 아니다.
- Trial 기록의 파일은 교육 저장소의 plan/DEMO_MATRIX.md이며 제품 저장소 파일로 제시하지 않는다.
- 한 번의 측정은 입력·환경·날짜·버전에 한정한다. Skill의 절차 반복을 별도 Memory 필요성으로 세지 않는다.
- 신뢰도·출처·적용 범위·신선도·갱신/무효화와 재사용 가치를 함께 판단한다.
- 같은 프로젝트의 다음 작업도 재사용 대상이며 프로젝트 간 공유는 필수가 아니다.
- 현재 별도 후보 없음의 범위를 지키며 제품 Memory 기능 부재·일반적 무가치를 주장하지 않는다.
- Demo repository·State tag·새 Trial·제품 실행·발표 묶음 변경은 없다.

## Notes와 시간

ACT3·Full Markdown 및 두 PPT의 S62 내장 Notes를 정렬했다. Lecture4분은
실제 감사 복귀0.5, 코드/문서0.83, Skill0.67, Trial/Git0.75, 기준/판단0.75,
선택/전환0.5다. 원문 경로와 보존 기준은 Notes에서 설명한다. Q&A 또는 Demo
시간을 추가하지 않았으며 실제4분 운영 리허설은 UNVERIFIED다.

## 렌더·정합성 검토

| 항목 | 확인 결과 |
|---|---|
| Full / ACT3 |93장·379분 /18장·85분 유지|
| S62 |Lecture4분, T10-B 유지|
| ACT 시간 |40/63/81/85/80/30분|
| Mode |Lecture143 / Demo73 / Case88 / Reflection21 / Transition22 / Q&A32|
| Notes |93개19필드; ACT·Full·PPT 내장 내용 일치|
| 최종 패키지 렌더 |Full93+ACT3 18, 총111개 PNG,1920×1080|
| 변경 범위 |S62만 변경; 다른92개 PNG·Notes 동일|
| ACT/Full 화면 |18개 대응 PNG hash 동일|
| 패키지·layout 자동 검사 |발견0건, 최종 패키지 재가져오기 통과|
| 개별 시각 검토 |S61/S62/S63 확인; S62의 한글·파일 라벨·연결선 잘림/겹침 문제 미발견|
| Native evidence |S47/S55 표와 S58 chart·데이터 유지|
| Template / Variant |11개 /27개 유지|
| 정적 대안 |32개 중 S62 hash 갱신, 다른31개 동일|
| 그 외 |다른 ACT·승인 이미지·Prototype·묶음·Demo repository/State tag 유지|

지정 서체 Malgun Gothic/Consolas와 로컬 대체 AppleSDGothicNeo/Menlo를 유지한다.
로컬 검토를 Windows·교육장 투사·실제 발표 시간·청중 이해도 검증으로 취급하지 않는다.
이번 범위의 로컬 검사에서 미해결 P0/P1은 발견하지 않았다. 실제 발표 환경에서
파일 라벨과 아래 판단 문장의 원거리 가독성을 확인해야 한다.

## 산출물

| Artifact | Path / SHA-256 |
|---|---|
| Full |[통합 PPT](../AI_Dev_Training_Full.pptx)|
| Full SHA-256 |`8613ab68c2c619afa6830d4bf073fb88714d818898b153dfb3a8e891beec7511`|
| ACT3 |[ACT3 PPT](../ACT_3.pptx)|
| ACT3 SHA-256 |`1b5f8bfe71ebbd0d6fe19bedc72b1c8760106797bfceede5bab5e728fb69b2a5`|
| Notes |[ACT3](../notes/ACT_3_NOTES.md) / [Full](../notes/FULL_SPEAKER_NOTES.md)|
| Full Notes SHA-256 |`a38a218a52d4ec8393096c154347a764118e1db74eaef427abb098a64385915d`|
| 렌더 |[S62](../preview/full/S62.png) / [S61–S63](../preview/act3/S61-S63-continuity.png)|
| 검증 기록 |[Validation JSON](S62_KNOWLEDGE_SOURCES_VALIDATION.json)|

기존main/origin의 정상 Git checkpoint를 따른다. Commit ID는 Git history에서
확인한다. Force push·Remote 변경·발표 자료 묶음 생성은 하지 않는다.
