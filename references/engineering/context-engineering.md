# Context Engineering

## Research Question

Context Engineering은 단순히 더 많은 토큰을 넣는 것과 어떻게 다른가?

## Why It Matters

“AI에게 필요한 것을 보게 한다”와 context overflow/irrelevance risk를 함께 가르쳐야 한다.

## Findings

- **Type: ACADEMIC FINDING / Confidence: HIGH / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0201** — Lost-in-the-middle research supports placement/relevance caution.
- **Type: ACADEMIC FINDING / Confidence: MEDIUM / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0202, SRC-0203, SRC-0204** — long-context ability depends on retrieval, reasoning, repository structure, benchmark design.
- **Type: PRODUCT BEHAVIOR / Confidence: HIGH / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0110, SRC-0113, SRC-0133** — repository instructions, memory, and GitHub connector are different context channels.

## What the Evidence Does NOT Prove

Long-context papers do not prove every current model fails on middle information. Product context channels do not decide company data permission.

## Implication for Training

Context Engineering means selecting and arranging relevant context, not maximizing tokens.

## Demo Implication

Demo can show repository exploration before modification. Oversized context failure remains candidate unless observed.

## Risks / Caveats

irrelevant context, stale Memory, duplicate instructions, private data exposure.

## Open Questions

- OQ-008: context channel choices 미정.
- OQ-014: internal data policy 미확인.

## Sources

SRC-0201, SRC-0202, SRC-0203, SRC-0204, SRC-0110, SRC-0113, SRC-0133
