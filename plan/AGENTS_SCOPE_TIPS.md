# AGENTS.md 지침 범위와 실제 수집 — 실무 적용 팁

Decision: DEC-0104. Explicit user approval,2026-10-26.
Baseline:981ae5e /117slides/412minutes.

## 추가 범위와 연결

기존 S55의 Context 성과 회수 다음에 세 장을 추가한다. 기존 S56의 반복 절차
질문은 S59가 되어 ACT3 S60으로 이어진다. 기존117장의 역할·장별 배정·실제 근거는
유지한다. 새3장은 Lecture3/3/2분이며120장·420분이다.

| Slide | 질문 | 화면의 역할 | 시간 |
|---|---|---|---:|
| S56 | AGENTS.md는 어디에 둘까? | 개인 기본값/루트 공통/모듈 전용 지침의 폴더 트리 |3|
| S57 | 모듈 지침이 있으면 공통 지침은 없어질까? | 공통+전용→결합 목록; 충돌하는 기본값만 가까운 지침 우선 |3|
| S58 | 적용할 지침을 실제로 읽었을까? | 시작 경로에 따른 자동 수집 비교+경로/본문 확인 요청 |2|

배지는 세 장 모두 **실무 적용 팁 · Context 관리**. 기존 T03-C와 Native text/shape
도식을 사용한다. 새 Template/Variant를 만들지 않는다. 현재 마지막 찾아보기 S117에는
세 장을 묶은 **AGENTS.md의 위치와 적용 범위 · S56–S58** 한 항목만 더한다.
기존8항목은 유지하고 찾아보기 시간도1분 그대로다. 팁 전문을 끝에서 다시 강의하지 않는다.

## 적용 범위와 실제 읽기

- 적용 범위: 프로젝트 공통 규칙과 대상 코드가 속한 모듈 규칙의 관계를 설명한다.
- 실제 수집: 공식 안내의 시작 시 instruction chain은 프로젝트 루트에서 시작 작업
  폴더까지의 경로를 따른다. 모든 하위/형제 디렉터리를 재귀 수집한다는 뜻이 아니다.
- 루트에서 시작해 하위 코드를 다룰 경우 적용할 중첩 지침도 찾아 읽도록 요청한다.
  Agent의 답변만으로 읽기·준수를 입증하지 않고 파일 경로/본문과 필요 시 기록을 대조한다.
- 실행 중 터미널에서 cd하면 기존 세션 지침이 자동 재구성된다고 가르치지 않는다.
- 가까운 지침의 충돌 기본값 우선과 공통 지침 전체 폐기는 구분한다. 검증 진입점
  ctest/ctest -L vision 예는 필수 회귀 검사나 권한·안전 규칙의 우회가 아니다.
- AGENTS.md는 권한 경계나 명령 준수를 강제하는 테스트/CI가 아니다.

## 근거 범위

세 장의 inspection/src/vision/crop.cpp와 device 폴더는 프로젝트 적용 예다.
실제 graypipe에 중첩 AGENTS.md를 추가하거나 실행한 Trial 이력이 아니다.
기존 S48–S54의 기본 안내→상세 문서 Routing 관찰을 새 자동 로드 규칙의 실험으로
사용하지 않는다. 효율·토큰·성능·지침 준수율 개선을 주장하지 않는다.

[공식 AGENTS.md 안내](https://learn.chatgpt.com/docs/agent-configuration/agents-md),
[공식 Projects and chats 안내](https://learn.chatgpt.com/docs/projects)를2026-10-26 확인했다.
후자는 Desktop의 주 작업 폴더와 추가 첨부 폴더의 발견 차이를 설명하는 Notes 근거다.
AGENTS.override.md와 fallback 설정 등은 Notes에만 짧게 남겨 화면 밀도를 제한한다.
제품/계정 실환경 검증은 UNVERIFIED다.

## 유지할 기준

ACT별 장수15/22/22/26/20/15, 시간45/64/90/96/85/40.
Mode Lecture186/Demo49/Case105/Reflection22/Transition26/Q&A32.
12Templates/28Variants,19Notes fields, 기존 M1–M9 표시 유지.
새3장의 M 연계는 신규 확장으로 표시한다. 원문 하단 축약 정책 DEC-0103을 유지한다.
기존 State/Trial/연구/가상 사례 근거·Demo 저장소·웹·발표 묶음은 변경하지 않는다.

[현재 Map](SLIDE_MAP.md), [117→120 번호 이행](SLIDE_ID_MIGRATION_120.md),
[제작·검증 결과](../production/evaluation/AGENTS_SCOPE_TIPS_RESULT.md).
