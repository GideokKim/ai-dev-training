# Loop Engineering

## Current scope — DEC-0097

The course centers a fixed goal and completion criteria, implementation,
evidence-based review, revision and re-review, and an explicit next action.
Harness improvement across tasks remains related but is no longer the main
ACT4 case. CASE-LOOP-01 is designed, not executed.

## Research questions

- How does review feedback become the next revision under the same criteria?
- What do tool evidence, a review model and the controller each contribute?
- When has different-model critique helped, and what remains unproved here?

## Findings

- SRC-0223 Self-Refine studies same-model generation/feedback/refinement.
- SRC-0239 studies limits of intrinsic reasoning self-correction without external feedback.
- SRC-0237 ReConcile Table7 compares model composition under one reasoning discussion protocol.
- SRC-0238 CriticBench separates generation/critique/correction and reports some beneficial cross-model critique patterns.

## Teaching implication

Use model A implementation and a different model B review as a design choice
worth evaluating. Provide original criteria, diff and check records, then
verify critique before accepting it. Complete only with scoped evidence;
otherwise revise, or retain an unmet goal and escalate when blocked/limited.
No paper validates the current course model pair or a universal superiority.

## Historical research note

The earlier investigation below focused on Harness maintenance. Keep it as
history; it does not override the current user-approved priority.

# Loop Engineering

## Research Question

Loop Engineering은 automation과 어떻게 다른가?

## Why It Matters

Harness에서 Loop로 발전하는 구조를 schedule 기능 소개로 축소하지 않는다.

## Findings

- **Type: PRODUCT BEHAVIOR / Confidence: HIGH / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0118, SRC-0119, SRC-0120** — hooks, `codex exec`, GitHub Action are automation materials.
- **Type: ACADEMIC FINDING / Confidence: MEDIUM / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0222, SRC-0223** — reflection/self-feedback can improve agents in studied setups.
- **Type: PRODUCT BEHAVIOR / INDUSTRY PRACTICE / Confidence: MEDIUM / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0140, SRC-0224** — traces/evals can support iterative agent improvement.
- **Type: TEACHING MODEL / Confidence: HIGH / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0001** — Loop means observe failure, diagnose cause, modify harness/verification, re-evaluate.

## What the Evidence Does NOT Prove

Automation or CI trigger alone does not prove Loop Engineering. No source proves autonomous self-improvement guarantees quality.

## Implication for Training

Loop를 검증 가능한 feedback system 운영으로 설명한다.

## Demo Implication

Needs real or controlled repeated failure plus before/after evidence.

## Risks / Caveats

loop cost, false positives, eval overfitting, flaky tests, unreviewed automation.

## Open Questions

- OQ-009: criteria and observed recurrence pending.
- OQ-007: task/repo verification pending.

## Sources

SRC-0118, SRC-0119, SRC-0120, SRC-0140, SRC-0222, SRC-0223, SRC-0224


## DEC-0098 — Documented Goal continuation as a product application

Current S99/S100 illustrate Goal using SRC-0240/0241/0242 and CLM-0046/0047.
Persistent thread state and continuation help keep work moving toward a
defined outcome. Verification criteria and implementation/review role design
still need task-specific choices. This guidance does not activate Goal,
establish automatic heterogeneous-model review or extend the actual Demo
history. ACT5 distinguishes the guidance, Product history and consolidation
decisions. See plan/GOAL_TIPS_AND_ACT5_HANDOFF.md for the approved placement.
