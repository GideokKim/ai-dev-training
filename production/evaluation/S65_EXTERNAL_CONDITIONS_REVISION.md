# S65 저장소 밖 실행 조건과 관찰의 한계 — DEC-0077

Date:2026-10-24 (Asia/Seoul). Baseline:`fc511b6`. Structure:93slides/379minutes.

## Status

LOCAL REVIEW COMPLETE — S65 화면·19필드 Notes·기획·PPT·Preview를 정렬했다.
Windows PowerPoint·실제 발표 글꼴·교육장·제품/계정·시간 리허설은 UNVERIFIED다.

## 수정 내용

기존 큰 두 패널과 긴 조건 목록을 한 Agent 실행에 모이는 두 입력과 두 행으로
정리했다. Repository와 외부 조건을 함께 보여주며 외부 선에는 점선·‘적용 확인’을
붙였다. 화면의 핵심은 코드가 같아도 세션에 어떤 조건이 적용됐는지 확인할
필요가 있다는 점이다. 두 환경을 실험해 다른 결과를 얻었다는 도식은 아니다.

| 영역 | 내용 | 범위 |
|---|---|---|
| 같은 Repository |코드·AGENTS.md·프로젝트 문서|실행 입력을 설명하는 교육용 구성, 정확한 Trial 파일 트리 아님|
| 저장소 밖 조건 |전역 지침·Skills, 모델/설정·권한|실제 적용 여부와 범위를 기록할 조건|
| 실제 관찰 |전역 Skills 포함·시작 단계의 경고|TRIAL-006 보존 기록 요약|
| 해석의 한계 |경고만으로 도구 실행·결과 기여를 알 수 없음|Hook 실행/소스 변경·MCP task result 사용을 입증하지 않음|

화면에서 생소한 Hook/MCP 이름과 OS/runtime 등 상세 목록은 Notes로 옮겼다.
의미·원출처·기존 한계를 삭제하지 않았다. 텍스트·노드·선은 모두 편집 가능하며
입력 선 굵기는2.5px다. OBSERVED_META 이중선 프레임을 유지했다.

## S64→S65→S66

S64의 공통 실행 환경에서 저장소 밖 적용 조건으로 시선을 확장한다. 실제
관찰의 한계를 확인한 뒤 S66에서 C++ 프로젝트의 명세·빌드·검증 조건에 같은
판단을 전이한다. S64/S66 화면·Notes와 S65의 기존 Transition은 유지했다.
ACT4의 실제 Meta Timeline·평가/보고 변경·보고 불일치를 앞당겨 재강의하지 않는다.

## 실제 관찰과 해석

[DEMO_MATRIX 환경 감사](../../plan/DEMO_MATRIX.md)와 그 문서의 Meta Evidence
Audit Claim/Status 표, [CLAIM_FREEZE](../../plan/CLAIM_FREEZE.md)를 대조했다.
원자료를 수정하거나 현재 호스트 설정을 새로 감사하지 않았다.

- TRIAL-006에서 전역 Skills4개 포함과 Hook 구성·MCP 연결/인증 시작 문제가 기록됐다.
- 전역 지침 파일 존재·발견 규칙과 완전한 주입 원문의 직접 관찰은 구분한다.
- Hook 경고가 실제 Hook 실행·소스 변경을 입증하지 않는다.
- MCP 시작 오류가 task call 또는 result 사용을 입증하지 않는다.
- 코드·동작 검사·benchmark의 해당 조건 관찰은 유지하지만 Prompt-only attribution은 PARTIAL이다.
- 모든 설정·권한의 전체 감사·개별 인과효과·Trial 품질 향상을 주장하지 않는다.
- TRIAL-007 보고/stderr MCP 경고 불일치 및 TRIAL-008의 부분적 전역 기록은 미해결 범위를 유지한다.
- 과거 CLI0.154.0 관찰을 현재 Desktop/제품·계정 동작으로 확대하지 않는다.
- Product State·측정 수치·Demo 역할은 변경하지 않았다.
- 새 Trial·환경 분리·설정/권한 변경·Demo repository/State tag 변경·발표 묶음 생성은 없다.

## Notes / 시간 / Demo

ACT3·Full Markdown 및 두 PPT 내장 S65 Notes를 정렬했다.19필드·Lecture3분을
유지한다. S64 질문 회수0.33, 두 입력 관계0.67, 실제 관찰0.83, 해석 한계0.75,
기록 판단/전환0.42분이다. 실제3분 리허설은 UNVERIFIED다.

S65는 Lecture Preview이며 DEMO-04B의 ACT4 S80–S82/8Demo분은 그대로다.
기존32개 Demo fallback PNG를 모두 보존하고 S65를 그 inventory에 추가하지
않았다. 현재 source PPTX·Notes·montage 식별자만 갱신했다.

## 렌더·정합성 검토

| 항목 | 결과 |
|---|---|
| Full / ACT3 |93장·379분 /18장·85분 유지|
| S65 |Lecture3분, T03-B 유지|
| ACT 시간 |40/63/81/85/80/30분|
| Mode |Lecture143 / Demo73 / Case88 / Reflection21 / Transition22 / Q&A32|
| Notes |93개19필드; ACT·Full·PPT 내장 일치|
| 최종 패키지 렌더 |Full93+ACT3 18, 총111개 PNG,1920×1080|
| 수정 범위 |S65만 화면·Notes 변경, 다른92개 PNG·Notes 동일|
| ACT/Full 화면 |18개 대응 PNG hash 동일|
| 패키지·layout 자동 검사 |발견0건, 최종 패키지 재가져오기 통과|
| 추가 OOXML 검사 |기존 판본과 대조한 Full/ACT3 schema·관계 검사 통과, 자동 수정 없음|
| 개별 시각 검토 |S64/S65/S66 확인; S65의 제목·적용 확인·관찰/한계 행·Meta 프레임 잘림/겹침 문제 미발견|
| Native evidence |S47/S55 표와 S58 chart·데이터 보존|
| Template / Variant |11개 /27개 유지|
| 정적 대안 |기존32개 Demo fallback PNG hash 모두 동일|
| 그 외 |다른 ACT·승인 이미지·Prototype·묶음·Demo repository/State tag 보존|

자동 검사와 실제 시각 검토를 구분했다. 지정 서체는 Malgun Gothic/Consolas,
로컬 대체는 AppleSDGothicNeo/Menlo다. 이번 로컬 범위에서 미해결 P0/P1은
발견하지 않았다. 실제 발표에서 적용 확인 라벨·두 행의 원거리 가독성 및
3분 운영, Windows·교육장·제품/계정은 후속 검증으로 유지한다.

## 산출물

| Artifact | Path / SHA-256 |
|---|---|
| Full |[통합 PPT](../AI_Dev_Training_Full.pptx)|
| Full SHA-256 |`dc3897b0406d5efa887411bda2f653a63283907f471214bbc2358e0ef5204ebe`|
| ACT3 |[ACT3 PPT](../ACT_3.pptx)|
| ACT3 SHA-256 |`53603f0bd6ec21be807bd2867f81828147b13e26b7a5cf5afba3c275df1e510c`|
| Notes |[ACT3](../notes/ACT_3_NOTES.md) / [Full](../notes/FULL_SPEAKER_NOTES.md)|
| Full Notes SHA-256 |`c41796d1d6e7e7cb6d037f5695b5068a8192f6c93443522ab98c5ff0c98b83e7`|
| Lecture Preview |[S65](../preview/full/S65.png)|
| S65 PNG SHA-256 |`dca700ec8d57faaab01d226136b520206affdcae462bbf3b898d6d08f5fed9f2`|
| 연속 검토 |[S64–S66](../preview/act3/S64-S66-continuity.png)|
| 검증 |[Validation JSON](S65_EXTERNAL_CONDITIONS_VALIDATION.json)|

기존main/origin의 정상 Git checkpoint를 따른다. Commit ID는 Git history에서
확인한다. Force push·Remote 변경·발표 자료 묶음 생성은 하지 않는다.
