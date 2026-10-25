# 실무 적용 팁 — 공통 표시와 ACT별 찾아보기

Decision:DEC-0087. Date:2026-10-25. Baseline:8c059c0.
Status: CONTENT ALIGNED; local render/package result is recorded separately.

## 기준

직접 재사용할 사용 경로·요청 예시·정보 배치·수행/검증/관리 기준을 가진 기존17장을
선정했다. 일반 개념·연구 소개·실제 결과 전체를 일괄적으로 팁으로 분류하지 않는다.
공통 명칭은 “실무 적용 팁”, 분류는 사용 환경/요청 작성/Context 관리/수행 방법/
업무 적용/검증·개선이다. 배지는 활용 목적을 표시하며 관찰·연구·교육용 예시의
근거 상태나 현재 제품/계정의 지원·실행 여부를 상향하지 않는다.

본문의 문제→이유→적용 흐름은 원래 자리에 두고, ACT 끝에는 위치만 모은다.
기존 팁의 설명을 추가하거나 성공 결과로 바꾸지 않는다. 특히 S11의 사내 진입
안내는 현재 대상 제품/계정의 실제 확인 전까지 UNVERIFIED다. Prompt 예시는
교육용 구성이고 ACT4의 조사/재평가 안내는 가상 조건과 평가 설계다.

## 공통 배지

상단 ACT 표시 오른쪽의 x780/y44/w320/h34에 Native 사각형과 글자를 둔다.
배경#E8EDF3, 외곽은 기존line token, 글자는 기존ink token/Malgun Gothic/18px다.
“실무 적용 팁 · [분류]”를 같은 위치·모양으로 표시하고 제목/본문·근거 footer와
겹치지 않게 한다. Evidence 색상과 프레임은 원래대로 보존한다.

## 기존 팁 목록

| ACT | 이전99장 ID | 현재 ID | 분류 | 제목 | 선정 이유 | 근거 유형 |
|---|---|---|---|---|---|---|
|ACT0|S11|S11|사용 환경|Repository 작업은 Codex에서 시작한다|사내 사용 환경에서 개발 작업을 시작하는 경로|RESEARCH / TEACHING_MODEL|
|ACT1|S25|S26|요청 작성|지시와 참고 자료의 구분|독립적으로 참고할 수 있는 요청 문장과 적용 상황|RESEARCH / TEACHING_MODEL / CONCEPTUAL|
|ACT1|S26|S27|요청 작성|입력과 기대 결과의 작은 예시|독립적으로 참고할 수 있는 요청 문장과 적용 상황|RESEARCH / TEACHING_MODEL / CONCEPTUAL|
|ACT1|S27|S28|요청 작성|바로 검토할 수 있는 결과 형식|독립적으로 참고할 수 있는 요청 문장과 적용 상황|RESEARCH / TEACHING_MODEL / CONCEPTUAL|
|ACT1|S28|S29|요청 작성|근거가 있는 설명과 미확인의 구분|독립적으로 참고할 수 있는 요청 문장과 적용 상황|RESEARCH / TEACHING_MODEL / CONCEPTUAL|
|ACT1|S29|S30|요청 작성|결과를 바꾸는 결정에서 확인 질문|독립적으로 참고할 수 있는 요청 문장과 적용 상황|RESEARCH / TEACHING_MODEL / CONCEPTUAL|
|ACT1|S30|S31|요청 작성|큰 작업을 검토할 결과물로 나누기|독립적으로 참고할 수 있는 요청 문장과 적용 상황|RESEARCH / TEACHING_MODEL / CONCEPTUAL|
|ACT1|S31|S32|요청 작성|기준을 지정한 코드 리뷰 요청|독립적으로 참고할 수 있는 요청 문장과 적용 상황|RESEARCH / TEACHING_MODEL / CONCEPTUAL|
|ACT1|S32|S33|요청 작성|구체적인 근거로 수정 방향 피드백|독립적으로 참고할 수 있는 요청 문장과 적용 상황|RESEARCH / TEACHING_MODEL / CONCEPTUAL|
|ACT2|S45|S47|Context 관리|AGENTS.md에는 무엇을 남길까?|기본 안내와 상세 정보의 배치 기준|TEACHING_MODEL|
|ACT3|S54|S57|수행 방법|테스트 명령을 언제 쓰고 무엇을 판단할까?|검증 명령의 사용 시점과 판단 기준|TEACHING_MODEL|
|ACT3|S64|S67|Context 관리|이번 Context와 다시 쓸 지식|다음 작업에 남길 지식의 선정·관리 기준|CONCEPTUAL / TEACHING_MODEL|
|ACT3|S69|S72|업무 적용|밝기 통계의 판단을 C++ 검사에 적용하기|기존 명세·수행 방법·검증 근거의 C++ 적용|TEACHING_MODEL|
|ACT4|S75|S79|검증·개선|원인을 고르기 전에 확인할 기록|원인 선택 전에 확인할 기록 목록|CONCEPTUAL / TEACHING_MODEL|
|ACT4|S79|S83|검증·개선|지침을 고친 뒤, 무엇을 다시 확인할까?|지침 갱신 뒤 같은 작업과 다른 작업을 확인하는 질문|CONCEPTUAL / TEACHING_MODEL|
|ACT5|S95|S100|검증·개선|무엇을 남기고, 무엇을 덜어낼까?|기존 구성을 유지·통합·제거할 조건|TEACHING_MODEL|
|ACT5|S96|S101|검증·개선|덜어낸 뒤에도 필요한 일을 하는가?|통합·제거 후보의 비교·되돌림 기준|TEACHING_MODEL / RESEARCH|

## ACT별 찾아보기와 전환

| ACT | 목록 ID | 연결되는 기존 팁 | 바로 다음 장 | 배정 |
|---|---|---|---|---|
|ACT0|S13|S11|S14 — Repository를 보면 내가 원하는 것까지 알까?|Lecture1분|
|ACT1|S34|S26, S27, S28, S29, S30, S31, S32, S33|S35 — 이번 Task인가, 계속 유지할 Project 정보인가?|Lecture1분|
|ACT2|S54|S47|S55 — 지식은 정리됐지만 절차는 반복된다|Lecture1분|
|ACT3|S73|S57, S67, S72|S74 — 우리 업무에서 먼저 정리할 한 가지|Lecture1분|
|ACT4|S92|S79, S83|S93 — GPU 변경 뒤, 검증 조건을 다시 본다|Lecture1분|
|ACT5|S104|S100, S101|S105 — Q&A와 교육 마무리|Lecture1분|

ACT0/1/2는 다음 문제를 여는 장 앞, ACT3/4는 적용 성찰·전환 앞, ACT5는 기존
마지막 Q&A/Closing 앞이다. 원래 다음 질문은 목록의 Transition Cue에서 이어받는다.
목록 자체는 제목·ID뿐이며 같은 팁의 전문이나 새 권고를 반복하지 않는다.
8개 Prompt 팁은 T03-A의 두 그룹에4개씩, 나머지는 한 열로 표시한다. 기존
11Template/27Variant와19Notes 필드, 기존99장의 시간/Mode/Beat/Section/Demo/
Trial/State/Claim ID를 유지한다. 새6장은 같은 Section/Beat의 탐색 가교다.

## 현재 배정

105장/393분. ACT14/22/19/19/19/12장,43/64/82/86/81/37분.
Mode Lecture157/Demo73/Case88/Reflection21/Transition22/Q&A32분.
각 목록1분은 독립 배정이며 본문 시간을 줄이거나 Demo 시간을 중복 계산하지 않는다.
[현재 Slide Map](SLIDE_MAP.md), [번호 이행표](SLIDE_ID_MIGRATION_105.md).

## 검증과 보존

Full105+6ACT105,210PNG를 최종 패키지에서 렌더링한다.17배지·6목록을 개별 검토하고
6ACT 흐름과 각 전환을 확인한다.99기존 화면은 ID/참조·배지 영역 밖의 픽셀과
문구/배치·이미지 bytes/crop·Native evidence를 대조한다.105x19Notes·ACT/Full/
내장 대응,34정적 fallback의 현재 경로/해시를 확인한다. 새 Trial/성과·실환경검증·
Demo 저장소 변경·발표 묶음 생성은 없다. [최종 결과](../production/evaluation/PRACTICAL_APPLICATION_TIPS.md).
