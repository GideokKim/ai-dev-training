# Research Foundation

## Purpose

이 `references/` tree는 STEP 03에서 조사한 제품 사실, 엔지니어링 개념, 학술·벤치마크 근거를 후속 Curriculum, Storyline, Demo Architecture, Slide Map이 재사용할 수 있게 정리한 Research Router다. 기존 `reports/`와 `research_notes/`는 조사 과정의 history로 보존하고, 이 폴더는 slide나 demo에 들어갈 가능성이 높은 핵심 근거의 canonical index 역할을 한다.

## Evidence Policy

- **Source Tier**: Tier 1은 OpenAI 공식 문서와 프로젝트 Source of Truth, Tier 2는 논문·공식 engineering blog·official announcement, Tier 3은 vendor blog·leaderboard·community 자료다.
- **Confidence**: HIGH는 source wording과 claim scope가 직접 맞는 경우, MEDIUM은 surface·account·benchmark condition에 묶이는 경우, LOW는 간접 근거 또는 user/company input이 필요한 경우다.
- **Freshness**: 제품 기능, plan/role/admin control, data policy, pricing, benchmark leaderboard는 high-volatility로 본다.
- **Fact Type**: PRODUCT BEHAVIOR, ACADEMIC FINDING, INDUSTRY PRACTICE, TEACHING MODEL, HEURISTIC, PROJECT CONVENTION을 구분한다.

## Research Process

- [Research Execution Protocol](RESEARCH_PROTOCOL.md): A — Product Reality → B — Engineering Concepts → C — Academic / Technical Evidence → D — Story Validation 순서와 출처·날짜·논문·실험 기록 규칙.
- [Research Snapshot](RESEARCH_SNAPSHOT.md): 조사 시점의 제품 기준선, Story 핵심 근거, 위험 Claim, 남은 Gap 및 재확인 항목.

## Research Areas

Product:

- [ChatGPT & Codex](product/chatgpt-codex.md)
- [AGENTS.md](product/agents-md.md)
- [Skills](product/skills.md)
- [Subagents](product/subagents.md)
- [Memory](product/memory.md)
- [Interfaces](product/interfaces.md)
- [Tools and Execution](product/tools-and-execution.md)
- [Data Security and Workspace](product/data-security-workspace.md)
- [Capability Matrix](product/CAPABILITY_MATRIX.md)

Engineering:

- [Prompt Engineering](engineering/prompt-engineering.md)
- [Context Engineering](engineering/context-engineering.md)
- [Harness Engineering](engineering/harness-engineering.md)
- [Loop Engineering](engineering/loop-engineering.md)
- [Verification](engineering/verification.md)
- [Agent Failure Modes](engineering/agent-failure-modes.md)
- [AI-Native Development](engineering/ai-native-development.md)

Academic / Benchmark:

- [Lost in the Middle](research/lost-in-the-middle.md)
- [Long Context](research/long-context.md)
- [Agent Evaluation](research/agent-evaluation.md)
- [Coding Agent Benchmarks](research/coding-agent-benchmarks.md)

Registries:

- [Terminology](TERMINOLOGY.md)
- [Feature / Concept Matrix](FEATURE_CONCEPT_MATRIX.md)
- [Story Dependencies](STORY_DEPENDENCIES.md)
- [Sources](sources/SOURCES.md)
- [Claims](CLAIMS.md)
- [Contradictions](CONTRADICTIONS.md)
- [Research Gaps](RESEARCH_GAPS.md)

## Critical Findings

- Codex는 단일 UI가 아니라 Desktop, CLI, IDE, Cloud, Remote/integration surface와 Local/Worktree/Cloud execution mode가 만나는 제품군이다.
- `AGENTS.md`, Skills, Subagents, Memory는 모두 Context/Harness 재료지만 서로 다른 층위다.
- Harness는 model capability를 대체하지 않고, model upgrade도 system design을 대체하지 않는다.
- Loop Engineering은 schedule이나 automation 자체가 아니라 실패 관찰, 원인 추적, Harness/verification 개선, 재평가의 feedback structure다.
- Company security allowance는 OpenAI product policy에서 자동 도출되지 않는다. OQ-014는 open 상태다.
- Product features and training concepts are separated in `FEATURE_CONCEPT_MATRIX.md`; story-critical dependencies and fallbacks are tracked in `STORY_DEPENDENCIES.md`.

## Open Research Questions

- OQ-001: 교육용 software demo repository/domain/language 미정.
- OQ-003: 실제 Live Demo surface, account, OS, network, fallback material 미정.
- OQ-005: target workspace/account/admin availability 미확인.
- OQ-006: Lost in the Middle와 long-context research claim scope는 조사됐지만, 최종 교육 표현 범위는 미확정.
- OQ-007: project-specific build/test/review/verification command 미정.
- OQ-008: Skill/Subagent/Memory/Harness demo 선택 미정.
- OQ-009: 실제 반복 실패와 evaluation criteria 미확정.
- OQ-011: Harness/Loop operational wording과 용어 선택 미확정.
- OQ-014: 회사 보안·데이터 정책 미확인.

## High-Volatility Items

Codex Desktop/CLI/IDE/Cloud availability, Skills/Subagents/Memory/Plugins/MCP rollout, Business/Enterprise/Edu data policy, pricing/usage limits, benchmark leaderboards.

## Story Conflicts

No active conflict with `plan/MASTER_PLAN.md` was found. Current research supports the existing story when claims remain scoped.
