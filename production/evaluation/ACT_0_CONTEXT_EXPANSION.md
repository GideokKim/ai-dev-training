# ACT0 — Crop 조사와 Context 수집6장 확장 결과

Decision:DEC-0084. Date:2026-10-25. Baseline:3aa2fda.
Status: LOCAL PASS; Windows/room/product/account/timed rehearsal UNVERIFIED.

## 구성과 한 장의 역할

기존 S05–S07을 S05–S10의6장으로 나눴다. 설명을 줄여 생략하기보다 이해에
필요한 단계를 화면에서 구분했다. 이전 S08–S96은 S11–S99로 이동한다.

| Slide | 역할 | 화면 검토 |
|---|---|---|
|S05|기대 폭2와 구현 폭3의 Crop 결과|PASS — 첫 행 발췌·의도한 범위·추가 값4 구분|
|S06|실패 테스트·명세·구현의 연결|PASS — 호출 관계·설명 관계·실제 시간순 분리|
|S07|별도 임시 폴더 생성 오류|PASS — 읽기 전용 제한·Crop과 별개·미해결 명시|
|S08|판단에 필요한 파일·로그·권한|PASS — Repository 자료와 실행 조건을 구분해 종합|
|S09|사람의 직접 자료 선택·전달|PASS — 같은5자료·교육용 가정·비교 실험 아님|
|S10|Agent의 허용된 조사|PASS — 같은 배치·과거 CLI 근거·접근 전 확인·사람 책임|

S04의 실제 조사 요청→S05 결과→S06 근거→S07 별도 원인→S08 정보 종합→S09/S10
수집 주체 변경→S11 Codex 진입→S12 접근과 Task 의도→S13 검사 Task→S14 요청 설계로
이어진다. 기존 ACT1–5의 흐름을 바꾸지 않았고 이동한 교차 참조도 맞췄다.

## 근거 경계

실제 기록은2026-09-28 Codex CLI0.154.0의 읽기 전용 TRIAL-001이다. Crop 추가 열을
설명했으나 코드는 수정하지 않았다. 전체 명령의7통과/Crop 실패1/환경 오류3과
crop 관련 명령의2통과/같은 Crop 실패를 Notes에 보존했다. 환경 오류는 임시 디렉터리
생성 제한이며 Crop/Product 결함의 추가 증거가 아니다. Agent는 권한을 해제하지 않았다.
S06의 설명 관계는 실제 접근 시간순이 아니며 README의 기존 결함 안내도 공개했다.

S08/S09는 교육용 종합·직접 선택/첨부 가정이다. 로그·권한 정보를 주지 않은 것과
Chatbot의 해결 능력을 혼동하지 않는다. S10은 단일 과거 CLI 관찰에 한정하며
현재 Desktop·계정·효율 우위·반복성을 검증하지 않았다. Repository와 도구·권한은
다른 조건이다. 새 Trial·환경 복구·도구 비교·효과 측정을 만들지 않았다.

## 시간·Mode

현재99장·387분(6시간27분). ACT별42/63/81/85/80/36분, 장수13/21/18/18/18/11.
Mode Lecture151/Demo73/Case88/Reflection21/Transition22/Q&A32분.
기존 Demo8분은 S05/S06 각4, Case5분은 S07/S08의3/2로 나눴다. 기존 Agent 회수
Lecture2는 S10에 유지하고 S09 Lecture2만 추가했다. 다른 기존93개 배정은 동일하다.
실측 리허설과 시간 적합성은 미검증이며720분은 허용 상한이다.

## Notes·기획·번호

99Notes에19개 필드가 각각 한 번 존재하고 ACT Markdown/Full Markdown/PPT 내장본이
정규화 대조에서 일치한다. 현재 Slide/Template/module map, Curriculum·Story·
Notes/visual production 규칙·Demo 운영·이행표·DEC-0084를 정렬했다. 기존 Beat/
Section/Demo/Trial/State IDs,11Templates/27Variants와 원모듈 부분 연결 의미를 유지한다.
과거 Prototype·평가·원본 source asset은 당시 번호/파일명으로 보존한다.

## 렌더링·회귀 검사

- Full99+6ACT99, 총198개 최종 PNG를 재import 후1920×1080으로 렌더링했다.
- PPTX7개는16:9이며 Native text/shape/diagram·Notes 편집 가능성을 유지한다.
- 새6장과 lead-in/handoff·이동한 S20 교차 참조를 개별 검토하고 전체ACT0–5 overview를 확인했다.
- 기존93개 화면은 ID/교차 참조92개 text box를 제외한 영역의 픽셀이 이전판과 동일하다.
- ACT/Full99개 PNG와 Notes가 일치하고 검토한 초안10개와 최종 화면이 일치한다.
- 다른 기존 그림은 bytes/crop/position을 보존했다. 이전 S07의 삽화 파일/provenance는 보존하고 화면은 Native 관계도로 바꿨다.
- Native 표 S47→S50/S55→S58/S77→S80와 chart S58→S61의 원데이터를 대조했다.
- Package/layout geometry 오류0건, first-party reimport PASS. 기존 표 높이 추정0.01in 경고는 S50/ACT2 local16으로 이동했으며 원본 표·화면 형상은 동일하다.
- 정적 fallback34개는 실제 경로·크기·hash를 대조했다. DEMO-01은 S04–S08이며 Demo는 S05/S06의8분뿐이다.
- ACT 표준 범위 밖의 이전 번호 PNG15개만 정리했다. 과거 특별 continuity PNG는 역사로 보존하고 Preview README에 구분했다.
- Demo 저장소 HEAD/7tags, source assets·Prototype·발표 묶음은 동일하다.
- 추가 Office XSD는 현재 Python의 defusedxml 미설치로 UNAVAILABLE이며 PASS로 간주하지 않는다.

## 남은 Gate

새 P0/로컬 시각 P1 문제는 발견하지 않았다. 실제 Windows PowerPoint·발표 PC 글꼴,
교육장 투사·현재 제품/계정·Live 경로·S88의20분 및 전체387분 리허설은 UNVERIFIED다.
현재 로컬 렌더·구조 검사는 이 검증을 대신하지 않는다. 발표 묶음은 만들지 않았다.

## 산출물

- [통합 PPT](../AI_Dev_Training_Full.pptx), [ACT0](../ACT_0.pptx)
- [6장 미리보기](../preview/act0/S05-S10-context-sequence.png), [전후 연결](../preview/act0/S04-S13-context-sequence.png)
- [ACT0 Notes](../notes/ACT_0_NOTES.md), [Full Notes](../notes/FULL_SPEAKER_NOTES.md)
- [설계](../../plan/ACT0_CONTEXT_EXPANSION.md), [96→99 이행표](../../plan/SLIDE_ID_MIGRATION_99.md)
- [기계 검증](ACT_0_CONTEXT_EXPANSION_VALIDATION.json), [정적 대안](../../demos/runbooks/FALLBACK_MANIFEST.md)

## Git Checkpoint

정상 산출물과 관련 문서를 기존 origin/main에 일반 commit/push한다. 최종 Commit ID와
원격 일치는 완료 응답과 Git history에서 확인한다. Force push·remote 변경·Demo 저장소
변경·발표 묶음 재생성은 하지 않는다.
