# Long Context

## Current training use — DEC-0105

S47 focuses on teaching code-check questions. RepoQA remains optional related research in Notes and [this reference](repoqa.md), not an on-screen introduction or validation of the three checks. The research scope below is unchanged.

## Research Question

Long-context capability claims should be interpreted how in repository-agent training?

## Why It Matters

Bigger context window does not automatically mean better repository understanding.

## Findings

- **Type: ACADEMIC FINDING / Confidence: MEDIUM / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0202, SRC-0203** — benchmarks mix retrieval, reasoning, distractors, non-literal matching.
- **Type: ACADEMIC FINDING / Confidence: MEDIUM / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0204** — repository QA requires finding relevant code facts.
- **Type: PRODUCT BEHAVIOR / Confidence: MEDIUM / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0110, SRC-0113** — instructions and memory are not full repository understanding.

## What the Evidence Does NOT Prove

Long context does not prove correct reasoning, source truth, or safe company data use.

## Implication for Training

Frame Context Engineering as relevance and arrangement, not token maximization.

## Demo Implication

Show pasted code vs repository exploration vs selected context with labels.

## Risks / Caveats

Context overflow, stale files, generated docs, third-party docs can mislead.

## Open Questions

- OQ-001/OQ-007: repo and tasks pending.

## Sources

SRC-0202, SRC-0203, SRC-0204, SRC-0110, SRC-0113
