# ACT0 제품 UI 표현

Decision: DEC-0107. Date: 2026-10-27. Baseline: `274b1d6`.

## 변경 범위

S11/S12의 오른쪽 영역만 각각 ChatGPT 웹 UI와 Codex 프로젝트 UI 재구성으로
바꾼다. 기존 자료 목록·사람/Agent·연결선·상단 삽화·제목·질문·전환을 유지한다.
전체120장·420분, ACT0 15장·45분과 장별 시간/Mode·ID·근거 범위를 바꾸지 않는다.

S11은 사람이 코드·테스트·명세, 실행 로그·권한 정보를 선택·첨부한 뒤 설명을
요청하는 화면이다. 새 응답이나 실제 비교 결과를 만들지 않는다. 화면 아래에는
“ChatGPT 웹 · 자료 첨부 예시”를 둔다.

S12는 프로젝트가 열린 Codex UI에 기존 조사 요약 세 가지를 담는다. 테스트·관련 코드,
Crop 명세와 구현 차이, 실행 중 권한 제한이다. 화면 아래 “화면 재구성 · 근거는
CLI 조사 기록”을 두어 과거 CLI 관찰과 Desktop UI 예시를 구분한다.
새 실행·로그·수정·테스트 집계·권한 해결·제품 재현 결과를 추가하지 않는다.

## 자료와 편집성

두 UI는 built-in image_gen으로 만든 raster 이미지다. 실제 제품 Screenshot이 아니다.
주변 text/shape/연결선과 짧은 caption은 기존 Native PowerPoint 객체를 유지한다.
[이미지 출처·범위](../assets/product-ui/README.md), [생성 지시](../assets/product-ui/PROMPTS.md).
실제 TRIAL-001 요청 발췌는 S06과 원자료 그대로다. 현재 계정의 UI·Windows·교육장·
리허설은 여전히 UNVERIFIED다.

## 정렬·검토

현재 Map의 Visual Concept과 Template Map의 정적 운영을 맞춘다. 두 장의 Notes에서
UI가 보여 주는 것과 관찰 근거를 구분한다. Full과 ACT0만 갱신하고 최종 파일에서
렌더링해 S10→S11→S12→S13 흐름·이미지 가독성·caption·잘림·겹침을 확인한다.
다른118장, 다른5개 ACT 파일과 Demo 저장소를 유지한다. 웹·발표 묶음은 변경하지 않는다.

[현재 Map](SLIDE_MAP.md), [수정 검토](../production/evaluation/ACT0_PRODUCT_UI_REVISION.md).
