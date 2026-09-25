# MASTER_PLAN 기획 Coverage Matrix

## 목적과 판정 기준

이 표는 현재까지 제공된 교육 기획의 핵심 요구사항이
[MASTER_PLAN.md](MASTER_PLAN.md)에 어디에 반영되었는지 추적한다.
상태는 구현이나 교육 자료 완성도가 아니라 Source of Truth 문서에 요구사항이
반영되었는지를 나타낸다.

| ID | Requirement | MASTER_PLAN Section | Status | Notes |
| --- | --- | --- | --- | --- |
| R01 | 순수 교육 6시간, 총 360분 | §1.2, §11 | COVERED | 휴식은 교육 시간에서 제외하고 권장 Part 시간 합계는 360분이다. |
| R02 | 개발자 대상 교육 | §1.1, §2.1 | COVERED | 교육 대상은 개발자다. |
| R03 | AI 활용 수준 편차 | §2.1–2.3 | COVERED | Level 0–4 분포와 수준별 Insight를 기록했다. |
| R04 | 현장 출장으로 심화 학습 시간이 부족한 교육생 | §2.1, §35, §41 | COVERED | 별도 AI 학습 시간이 부족한 Persona를 고려한다. |
| R05 | 교육생 직접 실습 없음 | §0.3, §1.3, §8.1, §22 | COVERED | 강사 Demo와 사례를 사용한다. |
| R06 | AI 사용 역량 균질화가 최우선 목표 | §3.1 | COVERED | 조직 전체의 역량 균질화를 최우선 목표로 명시했다. |
| R07 | Chatbot에서 출발 | §4.1, §5.1 | COVERED | 일반적인 ChatGPT 사용에서 시작한다. |
| R08 | Prompt Engineering 단계 | §5.2, §13.1 | COVERED | Prompt Engineering을 계속 필요한 단계로 다룬다. |
| R09 | Goal / Context / Constraints / Process / Verification | §5.2 | COVERED | Prompt 구성 요소와 예시를 기록했다. |
| R10 | 반복 Prompt 지시 문제 | §5.2 | COVERED | 같은 Project Rule과 Workflow를 반복 설명하는 문제에서 Context로 넘어간다. |
| R11 | Context Engineering | §5.3, §13.2 | COVERED | 필요한 정보를 필요한 시점에 제공하는 설계로 설명한다. |
| R12 | AGENTS.md 도입 | §5.3 | COVERED | 공통 지시를 repository 수준에서 재사용한다. |
| R13 | AGENTS.md 비대화의 문제 | §5.3 | COVERED | 관련성, 충돌, 과잉 Context와 관리 문제를 기록했다. |
| R14 | Lost in the Middle을 근거에 맞게 설명 | §0.2, §5.3, §21, §32 | PARTIAL | 과장 금지와 원자료 확인 요구는 기록했다. 구체적 연구 근거는 Research 단계에서 확인한다. |
| R15 | Context relevance | §5.3, §13.2 | COVERED | 필요 정보와 Task relevance를 중심에 둔다. |
| R16 | Progressive Disclosure | §5.3 | COVERED | 필요한 때 필요한 정보를 드러내는 흐름으로 설명한다. |
| R17 | AGENTS.md의 Router 역할 | §5.3 | COVERED | 모든 지식을 담기보다 관련 지식을 찾도록 안내하는 역할이다. |
| R18 | Context 분리 | §5.3 | COVERED | 핵심 원칙과 세부 자료를 필요에 따라 분리한다. |
| R19 | Harness Engineering | §5.4, §13.3 | COVERED | 지식 제공에서 작업 방법과 환경 설계로 확장한다. |
| R20 | Skills | §5.4, §8.2, §27, §42 | COVERED | 반복 Workflow를 재사용하고 일관되게 수행하는 맥락이다. |
| R21 | Subagents | §5.5, §23 | COVERED | Context explosion과 역할 복잡성을 줄이는 상황에서 다룬다. |
| R22 | Memory | §5.6, §23 | COVERED | 세션 사이에 재사용할 가치가 있는 지식을 관리한다. |
| R23 | Context와 Memory의 차이 | §5.6 | COVERED | NOW 필요한 정보와 기억할 정보를 구분한다. |
| R24 | Tools | §5.7, §13.3 | COVERED | Build / Test / Benchmark를 Harness 구성으로 연결한다. |
| R25 | Verification | §3.2, §6.2–6.4, §23 | COVERED | 생성 결과와 실제 검증 결과를 구분한다. |
| R26 | Harness Architecture | §5.7, §13.3 | COVERED | Context, Skills, Memory, Subagents, Tools를 연결한다. |
| R27 | Harness Technical Debt | §5.8, §14 | COVERED | Harness 자체가 stale해질 수 있음을 다룬다. |
| R28 | stale instruction | §5.8, §22 | COVERED | 프로젝트 변화 후 AGENTS.md 지침이 낡을 수 있다. |
| R29 | stale skill | §5.8, §22, §25 | COVERED | Build command 변화 후 Skill이 낡을 수 있다. |
| R30 | stale memory | §5.8, §23, §25 | COVERED | 오래되거나 잘못된 Memory의 위험을 다룬다. |
| R31 | Loop Engineering | §5.9, §14 | COVERED | 실행 결과와 Failure를 관찰해 System을 개선한다. |
| R32 | Product Loop | §14 | COVERED | Task → Code → Test → Fix → Test로 분리했다. |
| R33 | Harness Improvement Loop | §5.9, §14 | COVERED | Failure 분석 후 Instruction / Skill / Memory / Tool / Workflow를 개선한다. |
| R34 | Investigate → Plan → Implement → Verify → Review | §3.2, §6.1 | COVERED | 실무의 기본 Task Execution Pattern이다. |
| R35 | Generated ≠ Done | §6.2 | COVERED | 생성 자체는 완료 증거가 아니라고 명시했다. |
| R36 | 동일 Demo Repository가 교육 중 진화 | §8.2, §12, §27–28 | COVERED | 같은 프로젝트의 단계별 진화를 우선한다. Repository 구현은 후속 단계다. |
| R37 | Failure Demo | §8.3, §25 | COVERED | 실패를 원인과 Engineering 대응을 보여주는 재료로 사용한다. |
| R38 | 초급자 가치 | §2.3, §35, §41 | COVERED | Chatbot User의 다음 단계와 최소 결과를 정의했다. |
| R39 | 중급자 가치 | §2.3, §35, §41 | COVERED | Practical Codex User의 Context / Skill / Harness 관점을 정의했다. |
| R40 | 숙련자 가치 | §2.3, §35, §41 | COVERED | Advanced Agent User의 Harness / Loop 인사이트를 정의했다. |
| R41 | 교육자료 제작 Meta Example | §16, §29, §37 | COVERED | 실제 제작 과정의 문제와 개선만 보조 사례로 쓴다. |
| R42 | Developer Responsibility | §9, §15 | COVERED | Goal, Judgment, Verification과 최종 책임은 개발자에게 남는다. |
| R43 | 최신 OpenAI 공식 자료 검증 | §0.2, §21, §32 | PARTIAL | 확인 원칙과 대상 기능은 정했다. 실제 기능별 출처 확인은 Research 단계로 미뤘다. |
| R44 | Source of Truth | §0.1, §30 | COVERED | MASTER_PLAN을 최상위 기획 기준으로 둔다. |
| R45 | Change Policy | §31 | COVERED | Proposal / Reason / Impact를 제시하고 사용자 승인 전에는 변경하지 않는다. |
| R46 | 최종 AI-Native Development 메시지 | §5.10, §36–37 | COVERED | Question에서 System과 Feedback Loop로 확장한다. |

## 판정 요약

- COVERED: 44
- PARTIAL: 2
- MISSING: 0
- 전체 요구사항: 46

PARTIAL인 R14와 R43은 이 단계에서 본격 Research를 수행하지 않는 범위에 따른다.
MASTER_PLAN에는 필요한 근거 확인과 과장 방지 원칙이 기록되어 있으며,
구체적인 연구 출처와 현재 제품 기능 검증은 후속 Research에서 완료해야 한다.

