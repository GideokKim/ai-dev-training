# Agent Failure Modes

## Research Question

Agent 실패는 어떤 유형으로 설명할 수 있고 어떤 실패를 demo로 사용하면 안전한가?

## Why It Matters

Problem before Solution을 위해 실패를 보여주되, 꾸며낸 실패는 쓰지 않는다.

## Findings

- **Type: INDUSTRY PRACTICE / Confidence: MEDIUM / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0137** — stale rules, oversized/poorly maintained instruction context, insufficient tooling are real engineering patterns.
- **Type: ACADEMIC FINDING / Confidence: MEDIUM / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0221, SRC-0211** — coding agent failure can be trajectory/process issue; final pass/fail can hide lucky passes.
- **Type: PROJECT CONVENTION / Confidence: HIGH / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0003** — candidate failures are not observed project failures unless actually experienced.

## What the Evidence Does NOT Prove

Failure candidate A–I are not observed events and do not form a universal taxonomy.

## Implication for Training

Use authentic or clearly labeled illustrative evidence for each chapter problem.

## Demo Implication

High-quality demo failures need bounded task and oracle.

## Risks / Caveats

Blaming the model can hide task ambiguity, harness, context, verification, permission problems.

## Open Questions

- OQ-009: real repeated failure pending.
- OQ-007: repo and oracle pending.

## Sources

SRC-0137, SRC-0221, SRC-0211, SRC-0003
