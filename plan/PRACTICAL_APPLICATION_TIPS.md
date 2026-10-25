# 실무 적용 팁 — 공통 표시와 마지막 통합 찾아보기

Decision: DEC-0088. Date:2026-10-25. Baseline:a0e0dc0.
Status: CONTENT ALIGNED; exact-package render/Notes checks are recorded separately.

## 배치 기준

팁의 설명17장은 각 문제와 적용을 이해하는 원래 자리에 둔다. “실무 적용 팁”
공통 배지와 사용 환경/요청 작성/Context 관리/수행 방법/업무 적용/검증·개선
분류를 유지한다. ACT 중간의 찾아보기6장은 제거한다. 각 ACT의 다음 문제·
성찰·전환이 직접 이어지게 하고, 마지막 회고 뒤 S99–S101에서 제목과 현재 ID만
한 번에 안내한다. S102의 기존 Q&A/Closing으로 마친다. 요약에서 전문을 재강의하지 않는다.

일반 개념·연구·실제 결과를 모두 팁으로 분류하지 않는다. 배지는 활용 목적이며
Evidence 등급이 아니다. S11의 사내 진입 안내는 대상 제품/계정의 실제 확인 전까지
UNVERIFIED다. Prompt 예시와 가상 평가 설계·실제 Trial을 구분한다. 새 Trial/성과는 없다.

## 공통 배지

Native rectangle x780/y44/w320/h34, fill#E8EDF3, 기존line/ink tokens와
Malgun Gothic18px를 유지한다. “실무 적용 팁 · [분류]”는 제목·본문·원본 이미지와
겹치지 않으며 원래 Evidence frame/claim footer를 보존한다. 마지막3장만
“실무 적용 팁 · 찾아보기”와 “마지막 정리 · 찾아보기 1/3–3/3”를 표시한다.

## 현재 팁 목록

| ACT | 이전105장 ID | 현재 ID | 분류 | 제목 | 선정 이유 | 근거 유형 |
|---|---|---|---|---|---|---|
|ACT0|S11|S11|사용 환경|Repository 작업은 Codex에서 시작한다|사내 사용 환경에서 개발 작업을 시작하는 경로|RESEARCH / TEACHING_MODEL|
|ACT1|S26|S25|요청 작성|지시와 참고 자료의 구분|독립적으로 참고할 수 있는 요청 문장과 적용 상황|RESEARCH / TEACHING_MODEL / CONCEPTUAL|
|ACT1|S27|S26|요청 작성|입력과 기대 결과의 작은 예시|독립적으로 참고할 수 있는 요청 문장과 적용 상황|RESEARCH / TEACHING_MODEL / CONCEPTUAL|
|ACT1|S28|S27|요청 작성|바로 검토할 수 있는 결과 형식|독립적으로 참고할 수 있는 요청 문장과 적용 상황|RESEARCH / TEACHING_MODEL / CONCEPTUAL|
|ACT1|S29|S28|요청 작성|근거가 있는 설명과 미확인의 구분|독립적으로 참고할 수 있는 요청 문장과 적용 상황|RESEARCH / TEACHING_MODEL / CONCEPTUAL|
|ACT1|S30|S29|요청 작성|결과를 바꾸는 결정에서 확인 질문|독립적으로 참고할 수 있는 요청 문장과 적용 상황|RESEARCH / TEACHING_MODEL / CONCEPTUAL|
|ACT1|S31|S30|요청 작성|큰 작업을 검토할 결과물로 나누기|독립적으로 참고할 수 있는 요청 문장과 적용 상황|RESEARCH / TEACHING_MODEL / CONCEPTUAL|
|ACT1|S32|S31|요청 작성|기준을 지정한 코드 리뷰 요청|독립적으로 참고할 수 있는 요청 문장과 적용 상황|RESEARCH / TEACHING_MODEL / CONCEPTUAL|
|ACT1|S33|S32|요청 작성|구체적인 근거로 수정 방향 피드백|독립적으로 참고할 수 있는 요청 문장과 적용 상황|RESEARCH / TEACHING_MODEL / CONCEPTUAL|
|ACT2|S47|S45|Context 관리|AGENTS.md에는 무엇을 남길까?|기본 안내와 상세 정보의 배치 기준|TEACHING_MODEL|
|ACT3|S57|S54|수행 방법|테스트 명령을 언제 쓰고 무엇을 판단할까?|검증 명령의 사용 시점과 판단 기준|TEACHING_MODEL|
|ACT3|S67|S64|Context 관리|이번 Context와 다시 쓸 지식|다음 작업에 남길 지식의 선정·관리 기준|CONCEPTUAL / TEACHING_MODEL|
|ACT3|S72|S69|업무 적용|밝기 통계의 판단을 C++ 검사에 적용하기|기존 명세·수행 방법·검증 근거의 C++ 적용|TEACHING_MODEL|
|ACT4|S79|S75|검증·개선|원인을 고르기 전에 확인할 기록|원인 선택 전에 확인할 기록 목록|CONCEPTUAL / TEACHING_MODEL|
|ACT4|S83|S79|검증·개선|지침을 고친 뒤, 무엇을 다시 확인할까?|지침 갱신 뒤 같은 작업과 다른 작업을 확인하는 질문|CONCEPTUAL / TEACHING_MODEL|
|ACT5|S100|S95|검증·개선|무엇을 남기고, 무엇을 덜어낼까?|기존 구성을 유지·통합·제거할 조건|TEACHING_MODEL|
|ACT5|S101|S96|검증·개선|덜어낸 뒤에도 필요한 일을 하는가?|통합·제거 후보의 비교·되돌림 기준|TEACHING_MODEL / RESEARCH|

## 마지막 통합 찾아보기

| 현재 ID | 제목 | 기존 팁 위치 | 다음 장 | 배정 |
|---|---|---|---|---|
|S99|실무 적용 팁 · 작업 환경과 기준|S11, S45, S54, S64, S69|S100|Lecture1분|
|S100|실무 적용 팁 · 요청 작성|S25, S26, S27, S28, S29, S30, S31, S32|S101|Lecture1분|
|S101|실무 적용 팁 · 검증과 개선|S75, S79, S95, S96|S102|Lecture1분|

S99의5항목과 S100의8항목은 두 열, S101의4항목은 한 열이다. 기존 T03-A를
재사용하며11Templates/27Variants를 유지한다.17개 팁은 한 번씩만 목록에 나온다.
중간 ACT의 목록은 남기지 않는다. 마지막 요약은 별도 실습·새 개념·Demo가 아니다.

## 현재 배정

102장/390분. ACT13/21/18/18/18/14장,42/63/81/85/80/39분.
Mode Lecture154/Demo73/Case88/Reflection21/Transition22/Q&A32분.
기존99개 본문 장의 시간/Mode를 보존한다. 기존6목록의6분 대신 마지막3목록의
3분을 배정하므로 이전105장/393분에서3장/3분이 줄었다. 사용자 허용 상한은720분이다.
[Slide Map](SLIDE_MAP.md), [번호 이행표](SLIDE_ID_MIGRATION_102.md).

## 검증과 보존

Full102+6ACT102,204PNGs를 최종 패키지에서 렌더링한다. 마지막3장과 ACT 경계를
시각 검토하고99기존 화면의 문구·배치·이미지·Native evidence를 번호/참조 외 대조한다.
102x19Notes·ACT/Full/내장 대응,34정적 fallback의 현재 경로·해시를 확인한다.
실제/연구/가상/Meta 경계·State/Trial/Claim IDs·Demo시간·Demo 저장소·기존 자료 묶음은
변경하지 않는다. Windows/제품·계정/교육장/실측 리허설은 UNVERIFIED다.
[최종 결과](../production/evaluation/FINAL_PRACTICAL_TIPS_CONSOLIDATION.md).

## 이전 배치 이력

DEC-0087/a0e0dc0은105장·393분에서 ACT별 목록 S13/S34/S54/S73/S92/S104를
운영했다. 사용자가 중간 목록이 설명을 끊는다고 판단해 마지막 통합으로 변경했다.
이전 [결과](../production/evaluation/PRACTICAL_APPLICATION_TIPS.md)와
[99→105 이행표](SLIDE_ID_MIGRATION_105.md)는 당시 기록이다. 옛 목록 위치를
현재 운영 지시로 사용하지 않는다.
