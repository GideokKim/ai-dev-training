# AGENTS.md

## Research Question

`AGENTS.md`는 Codex에서 어떤 역할을 하며 Source of Truth와 어떻게 구분되는가?

## Why It Matters

반복 설명을 줄이는 첫 Context Engineering 장치이지만, plan 문서와 충돌하면 안 된다.

## Findings

- **Type: PRODUCT BEHAVIOR / Confidence: HIGH / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0110** — Current OpenAI Docs say Codex builds an instruction chain at run start from the global Codex home through the project root to the current working directory. It selects at most one instruction file per directory and combines files from broad to narrow scope. The default combined-size limit is 32 KiB.
- **Type: PRODUCT BOUNDARY / Confidence: HIGH / Freshness: 2026-09-28 / Source: SRC-0110** — This official behavior does not establish that a target Desktop account or workspace will expose or use the instruction file as expected; verify the selected environment separately.
- **Type: PROJECT CONVENTION / Confidence: HIGH / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0001, SRC-0002** — 이 프로젝트에서는 `plan/`이 Source of Truth이고 `AGENTS.md`는 작업 원칙 router다.
- **Type: HEURISTIC / Confidence: MEDIUM / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0137, SRC-0201** — 오래된 규칙과 관련 없는 긴 context는 agent 결과를 방해할 수 있지만 길이 threshold는 확립되지 않았다.

## What the Evidence Does NOT Prove

`AGENTS.md`가 모든 prompt 문제를 해결하거나 MASTER_PLAN을 대체한다는 뜻은 아니다. 공식 제품 지원 범위는 실제 training account의 instruction discovery 검증을 대신하지 않는다.

## Implication for Training

Prompt에서 반복하던 규칙을 repository instruction으로 옮기는 전환점을 보여준다.

## Demo Implication

작은 repository rule 전후 비교는 가능하지만 실제 failure가 없으면 fabricated history로 말하지 않는다.

## Risks / Caveats

오래된 규칙, 중복 규칙, plan 충돌은 bounded Harness Technical Debt analogy로만 설명한다.

## Open Questions

- OQ-008: 어느 지침을 AGENTS.md, Skill, Memory에 둘지 미정.
- OQ-009: 반복 실패 전에는 개선 효과 주장 보류.

## Sources

SRC-0110, SRC-0137, SRC-0201, SRC-0001, SRC-0002
