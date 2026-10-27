# ACT0 제품 UI 표현

## 현재 제작 기준 — DEC-0112 (2026-10-27)

현재 **121장·417분(6시간57분)**. 이전 S26을 S26–S28의3장으로 나눈다.
S26은 요청할 확인과 범위, S27은 비어 있지 않음 검사의 한계,
S28은 기대 결과·검사·보고를 담은 요청이다. 기존5분을90초/90초/120초로 나누고
Lecture4분+Reflection1분을 유지한다. 이전 S27–S119는 S29–S121로+2 이행한다.
ACT별 장수14/24/22/26/20/15, 시간42/64/90/96/85/40분.
Mode Lecture186/Demo49/Case105/Reflection22/Transition23/Q&A32분.
실제 TRIAL-002는 Python의 기존 관찰 기록이며 S27/S28의 C++ 반례·요청·assertion은
교육용 예시다. 당시 assertion 원문·추가 실행·PASS/FAIL·성능 측정으로 표현하지 않는다.
S21 실제 요청→S22 과정→S23 변경→S24 확인→S25 수용→S26–S28 완료 조건→
S29–S36 요청 문장 도구→S37–S38 반복 Project Context의 흐름을 유지한다.
원복한 S14, 기존 Story/Beat/Section/Demo/Trial/State/Claim ID와 나머지 장별 배정은 유지한다.
Native 표는 S55/S67, 차트는 S71/S98, 마지막 팁 찾아보기는 S118–S120이다.
12Templates/28Variants·19Notes 필드를 유지한다. Windows·교육장·현재 제품/계정·
실측 리허설은 UNVERIFIED다. Demo 저장소·Sites·발표 묶음을 변경하지 않는다.
[현재 Map](SLIDE_MAP.md), [번호 이행](SLIDE_ID_MIGRATION_121.md),
[3장 분할 기준](S26_VERIFICATION_REQUEST_SPLIT.md)을 우선한다.
아래 이전 판본의 번호·시간·평가·제작 기록은 당시 이력으로 보존한다.

## 보존된 이전 판본

## 현재 제작 기준 — DEC-0108 / DEC-0109 / DEC-0110 / DEC-0111 (2026-10-27)

현재 **119장·417분(6시간57분)**. 이전 S15 제조 검사 전환 장을 삭제하고
이전 S16–S120을 S15–S119로 한 칸 당긴다. S14는 정보 접근과 사람의 최종 판단을
구분하던 이전 화면을 유지하고, ACT0 Q&A 후 ACT1 제목으로 이어간다.
삭제 장의 전환3분은 줄이고 Q&A3분은 S14에 남긴다. S14는 Lecture2+Q&A3=5분이다.
ACT별 장수14/22/22/26/20/15, 시간42/64/90/96/85/40분.
Mode Lecture186/Demo49/Case105/Reflection22/Transition23/Q&A32분.
다른 장의 내용·장별 시간/Mode·근거·Trial/State/Beat/Section ID는 유지한다.
ACT1 S16–S18은 DEC-0110에 따라 같은 crop 수정 요청으로 연결한다.
빠진 기준 확인→허용 범위 비교→구체 요청 순서이며 교육용 예시다.
S19–S20에서 일반화한 뒤 S21은 DEC-0111에 따라 실제 TRIAL-002 요청을
발췌·번역하고 다섯 역할을 원문 밖 주석으로 연결한다. Context 문단은 만들지 않는다.
S22는 같은 과정 지시 01–03을 행동 기록과 대조한다. S16–S18은 교육용 예시다.
[실제 요청 연결](S21_TRIAL_REQUEST_MAP.md)을 따른다.
[현재 ACT1 사례](ACT1_SINGLE_CROP_CASE.md)를 따른다.
Native 표는 S53/S65, 차트는 S69/S96, 마지막 팁 찾아보기는 S116–S118이다.
12Templates/28Variants·19Notes 필드는 유지한다. 제품·Windows·교육장·리허설은
UNVERIFIED다. Demo 저장소·Sites·발표 묶음은 변경하지 않는다.
[현재 Map](SLIDE_MAP.md), [번호 이행](SLIDE_ID_MIGRATION_119.md),
[삭제·연결 범위](ACT0_S15_REMOVAL.md)를 우선한다. 아래 이전 판본은 당시 이력이다.

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
