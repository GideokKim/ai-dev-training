# Subagents

## Research Question

Subagents와 parallel agents는 언제 유용하고 언제 비용·조정 문제가 되는가?

## Why It Matters

숙련자에게 task 분해와 context isolation의 tradeoff를 가르쳐야 한다.

## Findings

- **Type: PRODUCT BEHAVIOR / Confidence: HIGH / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0112** — Subagents는 separate agent thread에서 독립 작업을 수행하고 main context noise를 줄일 수 있다.
- **Type: PRODUCT BEHAVIOR / Confidence: HIGH / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0112** — extra tokens와 simultaneous write conflict/coordination risk가 있다.
- **Type: ACADEMIC FINDING / Confidence: MEDIUM / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0219** — parallelism 연구는 일부 이득과 token consumption 증가를 함께 보고한다.

## What the Evidence Does NOT Prove

Parallelism이 항상 더 빠르거나 정확하다는 뜻은 아니다.

## Implication for Training

조사/구현/검증을 나누되 risk-based human checkpoint를 둔다.

## Demo Implication

독립 read-only research나 isolated worktree 작업으로 보여줄 수 있다.

## Risks / Caveats

작업 독립성이 낮으면 조정 비용과 의미 충돌이 커진다.

## Open Questions

- OQ-005: feature availability 미확인.
- OQ-008: subagent demo 선택 미정.

## Sources

SRC-0112, SRC-0219
