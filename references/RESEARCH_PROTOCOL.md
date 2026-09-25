# Research Execution Protocol

## Purpose

이 문서는 STEP 03 Research를 실행하고 기록하는 순서를 정한다. 교육 Story에
맞는 근거만 찾는 Confirmation Bias를 줄이고, 현재 제품 사실·학술 연구·교육용
해석의 범위를 분리한다. 이 문서는 `plan/MASTER_PLAN.md` 또는
`plan/INVARIANTS.md`를 수정하거나 대체하지 않는다.

## Execution Order

Research는 다음 순서를 기본으로 한다. 앞 단계의 사실 확인이 끝나기 전에
Story에 맞는 근거부터 선택하지 않는다.

| Phase | Focus | Primary question | Existing research route |
| --- | --- | --- | --- |
| A — Product Reality | ChatGPT/Codex surface, instructions, Skills, Subagents, Memory, execution, verification, tools, Git/worktree, automation | 교육 Demo에서 현재 실제로 무엇을 보여줄 수 있는가? | `product/`, `product/CAPABILITY_MATRIX.md` |
| B — Engineering Concepts | Prompt, Context, Harness, Loop, Verification, Evaluation, AI-Native Development | 사용하는 개념과 Teaching Model의 근거 및 경계는 어디까지인가? | `engineering/`, `TERMINOLOGY.md` |
| C — Academic / Technical Evidence | Long context, agent evaluation, memory, isolation, benchmarks, regression | 연구가 실제로 평가한 조건과 한계는 무엇인가? | `research/`, 원문을 검토한 상세 `research_notes/` |
| D — Story Validation | Phase A–C 결과와 승인된 기획의 대조 | 사실과 Story 사이에 conflict, gap 또는 수정 필요성이 있는가? | `CLAIMS.md`, `CONTRADICTIONS.md`, `STORY_DEPENDENCIES.md`, `RESEARCH_GAPS.md` |

Phase A 안에서는 다음 순서로 확인한다: Codex 전체 Product/Interface →
`AGENTS.md` → Skills → Subagents → Memory/persistent context → Build/Test/
Verification → Tools/MCP → Local/Cloud → Git/Worktree → Automation. 교육 Story에
필요하지 않은 항목은 Scope Control을 적용한다.

이미 만들어진 Research 자료는 순서를 이유로 삭제하거나 다시 쓰지 않는다. Story
검증은 제품·기술·학술 근거를 독립적으로 확인한 뒤 수행하고, 발견된 충돌은
`plan/INVARIANTS.md`와 `plan/DECISIONS.md`의 Change Control에 따라 기록한다.
교육 환경의 surface/account/OS가 미정인 OQ-003/OQ-005는 해소된 것으로
간주하지 않는다.

## Source Selection

### Current OpenAI product behavior

현재 OpenAI 제품 기능을 확인할 때는 `openai.com`, `help.openai.com`,
`developers.openai.com`, `platform.openai.com`, `github.com/openai` 등 실제 공식
Domain을 우선 탐색하고 일반 검색 결과를 근거로 바로 채택하지 않는다. 다음
순서로 탐색하고 사용한 자료가 뒷받침하는 범위를 기록한다.

1. OpenAI 공식 Documentation, Help Center, Developer Documentation
2. 관련 OpenAI 공식 GitHub Repository
3. OpenAI 공식 Announcement
4. 신뢰할 수 있는 Secondary Source
5. Community 보고

공식 출처에서 답을 확인하지 못하면 그 사실을 기록하고, Secondary/Community
자료를 공식 계약이나 보편적인 제품 동작처럼 표현하지 않는다. Community에서
찾은 중요한 주장은 가능한 경우 Primary Source 또는 직접 관찰로 되짚는다.

### Official GitHub and implementation details

필요하면 공식 Repository의 README, `docs/`, examples, changelog/release notes,
configuration schema, `AGENTS.md`·Skill·Subagent 관련 자료, CLI options를
살펴본다. Source Code는 공식 문서의 설명을 보강할 수 있지만, 내부 구현만으로
사용자에게 보장된 Product Contract를 추론하지 않는다. 구현 세부사항과 공식
지원 동작을 구별한다.

### Academic and technical sources

논문 기반 Claim에는 Blog 요약만 사용하지 않는다. 가능한 경우 원 논문을 읽고
아래 Academic Evidence Record를 채운다. 원문에서 확인하지 못한 항목은 추측하지
말고 `TODO` 또는 `미확정`으로 남긴다. 산업 사례·공식 기술 문서·Community 사례는
논문 결과와 다른 Evidence Type으로 표시한다.

## Dates, Versions, and Conflicts

제품 문서에 표시된 Published/Updated date, Product/CLI/App version, interface,
plan, OS를 확인할 수 있으면 기록한다. 날짜나 버전이 없으면 `Checked Date:
YYYY-MM-DD`를 기록한다. 자료가 충돌할 때는 게시일만으로 승자를 정하지 않고
surface, plan/account, OS, version, 설정 및 문서 범위 차이를 확인한다.

시간에 민감한 제품 사실에는 필요한 경우 다음을 기록한다.

- Checked Date
- Source ID / URL
- Product / Feature 및 surface
- 관찰되거나 문서화된 동작
- plan/account/OS/version 조건
- Confidence 및 Volatility

최종 교육자료에 사용하기 전에 HIGH-volatility 항목과 대상 환경 의존 항목을
다시 확인한다. 조사 당시의 확인일은 최신 상태를 영구 보장하지 않는다.

## Academic Evidence Record

학술 논문을 핵심 근거로 사용하면 관련 `references/research/` 문서 또는 상세
Research Note에 다음 항목을 기록하고 `SOURCES.md`의 안정적인 Source ID로
연결한다.

```text
Source ID:
Title:
Authors:
Venue / Archive:
Year:
Research Question:
Experimental Setup:
Models:
Tasks:
Main Finding:
Limitations:
Relevance to Training:
```

특히 Lost in the Middle, Long Context, Agent Memory, Agent Evaluation 결과는
모델·과제·환경·평가 방식 등 해석에 필요한 실험 조건을 생략하지 않는다. 논문이
역사적·기초적 결과라면 `Foundational Finding`, 현행 제품 동작 근거는
`Current Evidence`, 교육에서 도출한 의미는 `Training Interpretation`으로
분리한다. 오래된 연구 결과를 2026년 현재 모델 또는 Codex의 동작으로
일반화하지 않는다.

## Evidence Type and Confidence

- `FACT`, `PRODUCT BEHAVIOR`, `ACADEMIC FINDING`, `INDUSTRY PRACTICE`,
  `TEACHING MODEL`, `HEURISTIC`, `PROJECT CONVENTION`을 구분한다.
- 연구에서 직접 관찰된 결과와 그 결과를 교육에 적용한 해석을 구분한다.
- Community-only Claim은 `UNVERIFIED` 또는 `MEDIUM`/`LOW` Confidence로
  시작한다. Primary Source나 직접 검증이 확보되기 전에는 보편적 제품 사실로
  확정하지 않는다.
- 용어의 공식 정의, 학술적 사용, 산업 사용, Training Operational Definition을
  서로 대체 가능한 의미처럼 취급하지 않는다.

## Search Notes

중요 Topic의 검색 과정을 나중에 재검토할 필요가 있을 때만 핵심 Query와 확인한
공식 출처를 짧은 `Search Notes`로 남긴다. 검색 History가 최종 Evidence보다
커지지 않도록 모든 Query를 전사하지 않는다.

## Direct Product Verification

공식 자료만으로 중요한 제품 동작을 분명히 할 수 없고 현재 환경에서 최소
실험이 유용할 때만 직접 검증을 고려한다. 이번 STEP에서는 대규모 Demo
Repository를 만들거나 교육 Demo를 구현하지 않는다. 실행했다면 다음 형식으로
기록한다.

```text
Experiment ID: EXP-XXXX
Question:
Environment: OS / Codex Interface / Version / account scope, where known
Setup:
Observation:
Result: CONFIRMED / PARTIAL / NOT_CONFIRMED
Limitations:
Source Type: DIRECT OBSERVATION
```

환경·버전 등 확인되지 않은 값은 `TODO`로 표시한다. 한 환경에서의 관찰을 다른
제품 surface나 계정에 일반화하지 않는다. 임시 실험 산출물은 교육 Demo 자산으로
자동 승격하지 않는다.

## Scope Control

각 Topic을 깊게 조사하기 전에 다음을 확인한다.

1. MASTER_PLAN의 Story에 필요한가?
2. Curriculum 선택에 영향을 주는가?
3. Demo 가능 여부에 영향을 주는가?
4. Slide의 사실 주장으로 사용할 가능성이 있는가?
5. High-risk Claim인가?

모두 `NO`라면 STEP 03에서 더 깊게 조사하지 않는다. 목표는 모든 Codex 내부
구현을 아는 것이 아니라 6시간 교육의 Story, Curriculum, Demo 가능성 및 Slide
주장을 뒷받침할 충분한 Evidence를 확보하는 것이다.

## Research Stop Condition and Priority

### Stop condition

각 Topic은 아래 종료 기준 중 해당 Topic에 필요한 수준을 만족하면 1차 조사를
멈춘다. “더 찾을 것이 없음”을 종료 기준으로 삼지 않는다.

A. 교육에서 사용할 핵심 Claim이 신뢰할 수 있는 Source로 검증됨.
B. 현재 Product Behavior가 Official Source 또는 직접 실행으로 확인됨.
C. 공식 확인이 불가능한 부분을 `UNVERIFIED` 또는 `PARTIAL`로 분류함.
D. 과장하면 안 되는 범위와 한계를 확인함.
E. Demo 가능 여부를 판단할 근거를 확보함.
F. Story에 영향을 주는 Conflict를 발견하면 기록함.

해당 Topic에 Research Gap이 남아도, 그 Gap을 확인 불가능한 상태로 정확히
기록하고 적절한 Fallback을 연결했다면 검색을 무한히 계속하지 않는다.

### Priority

Research 시간과 근거 확인은 P0부터 사용한다. Priority는 조사의 우선순위이며
Claim의 `Training Risk`와는 다른 축이다.

| Priority | Meaning | Typical scope |
| --- | --- | --- |
| P0 — Story Critical | 틀리면 교육의 핵심 Story가 깨짐 | `AGENTS.md`, Skills, Subagents, Memory의 실제 지원 범위; Harness/Loop 정의; Verification 관련 Codex capability |
| P1 — Demo Critical | Demo 설계·재현 가능성에 직접 영향 | Codex App/CLI, command execution, worktree, parallel task, web access, Local/Cloud |
| P2 — Teaching Evidence | 핵심 Insight를 보강하는 연구 근거 | Lost in the Middle, Long Context, Agent Evaluation, Context Isolation, Memory lifecycle |
| P3 — Supporting Context | 있으면 도움이 되지만 없어도 Story 유지 가능 | 일부 benchmark와 부가 Industry/Product 사례 |

## Story-Critical Claim Gate

P0 Claim은 다음 근거 중 하나 이상이 확보되기 전까지 하위 Slide에서 확정적
사실로 쓰지 않는다.

- Tier 1 Source가 Claim을 직접 확인한다.
- 일치하는 Official Source와 Direct Experiment가 있다.
- 학술 Claim은 원 논문에서 직접 확인했다.
- 공식 정의가 없는 용어는 Industry Usage를 충분히 살피고, Training Definition임을
  명시한다.

P0 Claim이 `PARTIAL` 또는 `UNVERIFIED`이면 가능한 Demo/설명 Fallback을
`STORY_DEPENDENCIES.md` 또는 Claim gate 기록에 둔다. 특정 Product Feature가
사용 불가해도 underlying Engineering Insight를 유지할 수 있게 한다.

## Research, Decisions, Questions, and Invariants

Research Finding만으로 기획 문서를 직접 변경하지 않는다. 새 설계 선택이
필요하면 다음 순서를 따른다.

`Research Finding → Implication → Decision Needed? → DECISIONS.md PROPOSED
→ 사용자 승인(필요한 경우) → ACCEPTED → 하위 산출물 반영`

Research가 해소하지 못한 중요 질문은 기존 Open Question을 evidence에 맞게
갱신하거나 새 OQ 후보로 제안한다. Research Gap은 새 교육 기획이나 Decision을
임의로 승인하는 근거가 아니다.

Invariant와 충돌할 때는 다음을 구분한다.

- **Implementation Conflict:** Engineering Insight는 유지 가능하나 Product
  구현이 다름. Invariant는 보존하고 Demo/표현 변경 후보와 Fallback을 기록한다.
- **Teaching Model Conflict:** 기획 핵심 설명이 근거와 충돌함. 영향 분석 후
  `PROPOSED` Decision과 필요한 사용자 승인을 거친다.
- **Factual Error:** MASTER_PLAN에 사실 오류가 확인됨. 오류와 근거를 숨기지
  않고 변경 제안을 만들며, Source of Truth 변경 통제를 따른다.

Research Integrity가 presentation convenience보다 우선한다. HARD Invariant는
사용자 승인 없이 바꾸지 않는다.

## Teaching Suitability and Evidence Density

Fact라고 해서 자동으로 교육 콘텐츠에 포함하지 않는다. 주요 Finding마다
필요한 경우 다음을 기록한다.

```text
Teaching Value: HIGH / MEDIUM / LOW
Complexity: LOW / MEDIUM / HIGH
Audience Relevance: BASIC / PRACTICAL / ADVANCED
Story Fit: relevant Stage
Slide Candidate: YES / MAYBE / NO
Demo Candidate: YES / MAYBE / NO
```

교육 적합성 판단은 Research의 사실 여부와 구분한다. Research에서는 중요한
Claim의 Evidence를 충분히 연결하되, Slide citation 밀도는 이후 Slide Map 및
콘텐츠 제작에서 결정한다. 우선 Source 표시를 준비할 Claim은 현재 Product
capability, 연구 결과, benchmark 수치, Security/Data 정책, plan별 기능 차이,
논쟁 가능성이 있는 기술 주장이다. Diagram, Teaching Model, Project Convention은
필요하면 citation 대신 해당 교육의 Model/Convention임을 표시한다.

## Citation-Ready Source Records

`sources/SOURCES.md`의 Source Record에는 가능한 범위에서 정확한 제목,
작성자/기관, 원본 URL, Published/Updated 및 Checked date, 관련 Claim ID,
Research Topic을 보존한다. 논문은 확인 가능한 경우 DOI, arXiv ID,
Conference/Journal도 포함한다. `Topics` 필드는 Research Topic을 가리키며,
검색 결과 페이지 대신 가능한 한 원본 페이지를 연결한다. 날짜·식별자가 노출되지
않으면 추측하지 않고 `Not shown` 또는 `TODO`로 둔다.

## Research Snapshot

Research 종료 시점에는 `references/RESEARCH_SNAPSHOT.md`를 만든다. 이는 전체
Research를 복사하는 문서가 아니라, 교육자료 제작 당시 확인한 Product Baseline,
Story-Critical Findings, High-Risk Claims, High-Volatility 기능, 남은 Gaps,
필요 Decision, 최종 제작 전 재확인 항목을 날짜와 함께 남기는 Checkpoint다.
