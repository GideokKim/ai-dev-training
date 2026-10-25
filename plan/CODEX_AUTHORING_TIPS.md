# Codex 제작 시작 팁 — Skill와 Custom Agent

Decision: DEC-0093. Date:2026-10-25. Baseline:`8d98563`.

## 삽입 위치와 목적

기존 S62 뒤 새 S63은 “우리 절차도 대화로 Skill로 만들 수 있다”는 시작 방법이다.
이전 S63이 이동한 S64에서 절차와 작업별 답의 구분으로 돌아온다.
기존 S66 뒤 새 S68은 Codex에 재사용할 조사 역할의 설정을 작성하도록 요청하는 팁이다.
이전 S67이 이동한 S69에서 실제 밝기 통계 작업에 역할 분리가 필요했는지 다시 판단한다.
만드는 방법을 알게 되는 것과 이 Demo에 새 기능을 추가해야 한다는 결론을 구분한다.

## S63 — 대화로 재사용할 Skill 만들기

왼쪽 요청창: `$skill-creator`를 명시하고 방금 사용한 성능 조사·검증 절차를
저장소에서 다시 쓸 Skill로 만들어 달라고 요청한다. 사용 조건과 보고 항목도 설명한다.
오른쪽 SKILL.md 문서: 언제 쓰는가 / 어떤 순서로 일하는가 / 무엇을 보고하는가.
하단 세 번째 단계: 실제 요청에 사용하고 다듬기. 초안 제작과 유용성 검증은 별개다.
자동 선택이 항상 일어난다고 보장하지 않으며 공식 명시 호출을 사용한다.
Repository용 Skill의 일반 탐색 위치는 `.agents/skills/`지만 파일 문법·설치 강의를 늘리지 않는다.

## S68 — 대화로 조사 Agent 만들기

왼쪽 요청창: `perf_reviewer`라는 프로젝트용 역할을 만들고, 성능 조사 때 병목 후보와
파일·함수·근거·미확인을 보고하며 코드 수정 없이 조사하도록 지침을 써 달라고 한다.
오른쪽 `.codex/agents/perf_reviewer.toml`: 이름 / 사용 조건 / 역할 지침의 세 책임을 보여준다.
필수 실제 필드는 `name`, `description`, `developer_instructions`이며 Notes에 기록한다.
하단: 그 이름의 Subagent로 조사하고 결과를 기다린 뒤 근거를 확인해 종합하라는 요청 예시다.

일회성 분담은 Codex에 직접 요청할 수 있다. 이 장의 파일은 같은 역할을 반복해서 쓰기
위한 선택이다. 별도의 `agent-creator` Skill을 호출하는 제품 동작을 가정하지 않는다.
부모의 권한·provider·MCP를 상속하며 “수정하지 말라”는 지침 자체가 독립 읽기 전용
실행 권한을 만드는 것은 아니다. 모델·요금·세부 설정·병렬 편집 강의는 추가하지 않는다.

## 근거와 경계

SRC-0111 / CLM-0041: [Build skills](https://learn.chatgpt.com/docs/build-skills).
SRC-0112 / CLM-0042: [Subagents](https://learn.chatgpt.com/docs/agent-configuration/subagents).
2026-10-25 공식 페이지 본문을 재확인했다. 화면은 현재 안내를 각색한 요청·문서 도식이며
실제 생성·호출 화면이나 TRIAL-008 Skill 제작 이력이 아니다. 제품 기능의 문서 확인과
현재 교육 계정/제품에서 성공적으로 사용한 관찰을 구분한다. 실제 새 Skill/Agent를
설치·호출하거나 설정을 바꾸지 않는다. Demo 저장소와 원기록도 변경하지 않는다.

## 시간·표시·제작

각 Lecture2분, 총4분 추가.115장·406분이며 기존113장 배정은 모두 유지한다.
ACT3 26장·96분, ACT4 19장·81분, ACT5 15장·40분이다. 기존12Templates/28Variants의
T03-C와 현재 요청창/문서 도식·색·서체를 재사용한다.19필드 Notes를 작성한다.
실무 적용 팁·수행 방법 배지를 두 장에 붙이고, 마지막 S112 목록에 연결한다.
본문 팁19개/마지막 목록3개다. 전체 번호는 [113→115](SLIDE_ID_MIGRATION_115.md)를 따른다.

Windows/교육장/제품·계정·실측 리허설은 UNVERIFIED다.
[현재 Slide Map](SLIDE_MAP.md), [로컬 결과](../production/evaluation/CODEX_AUTHORING_TIPS.md).
