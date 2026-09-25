# Verification

## Research Question

AI-assisted development에서 verification은 무엇을 확인하고 무엇을 확인하지 못하는가?

## Why It Matters

반복 메시지는 “AI가 했다”가 아니라 “무엇을 어떤 기준으로 확인했는가”다.

## Findings

- **Type: PRODUCT BEHAVIOR / Confidence: HIGH / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0103, SRC-0105** — Codex can run local/cloud commands and attempt checks.
- **Type: PRODUCT PRACTICE / Confidence: HIGH / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0139, SRC-0140** — evals require task, dataset/fixtures, metrics/graders, traces, success criteria.
- **Type: ACADEMIC FINDING / Confidence: MEDIUM / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0212** — agent eval outcomes can vary across runs and consume substantial resources.

## What the Evidence Does NOT Prove

Passing tests does not prove product correctness, security, maintainability, or absence of semantic conflict.

## Implication for Training

Verification should appear across Prompt/Context/Harness/Loop.

## Demo Implication

Show exact command, environment, input, output, diff, and fallback artifact.

## Risks / Caveats

Flaky tests, insufficient fixtures, environment mismatch, score overclaiming.

## Open Questions

- OQ-007: exact commands pending.
- OQ-009: eval criteria pending.

## Sources

SRC-0103, SRC-0105, SRC-0139, SRC-0140, SRC-0212
