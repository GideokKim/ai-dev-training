# Loop Engineering

## 현행 ACT4 · DEC-0156

S83에서 8단계로 그린 한 작업의 루프를 S84–S89에서는 GitLab 이슈 하나로 따라간다. 요청을 분류하고 격리된 공간에서 작업한다. 검토한 이슈 문서를 먼저 등록한 뒤 코드 변경과 테스트를 반복하고, 마지막으로 사람이 검토할 병합 요청을 올린다. 12단계와 구성요소 매핑은 제공 자료의 운영 설계다. 병합 승인과 실제 효과 측정은 별개다. [자료 기록](../sources/SOURCES.md#src-0246)

S90의 역할 분리에서 두 질문이 생긴다. S91은 평가자가 품질이 비슷한 두 응답 중 자기 응답을 선호할 수 있는지, S92는 동일한 오류를 어느 출처의 발언으로 제시했을 때 더 자주 지적하는지 다룬다. 두 실험의 조건을 구별해야 어떤 검토를 별도로 맡길지 설명할 수 있다. 코드 변경의 완료 판단에는 테스트와 변경 근거도 필요하다. [Yang 등, 2026](https://arxiv.org/abs/2604.22891v4) · [Chen 등, 2026](https://arxiv.org/abs/2606.05976v2)

S93–S97은 실행 간 인계, 권한·자원 한도, 사람이 직접 설명하고 승인해야 할 결정을 다룬다. 앞 판본의 이종 모델 연구 예시는 참고 자료로 남아 있다. PairCoder의 HumanEval 표는 특정 과제·모델 조합의 비교이며, 저자의 GitLab 사례에서 품질 향상을 측정한 수치로 옮길 수 없다. [PairCoder 원문, 표 2](https://aclanthology.org/2026.findings-acl.149.pdf#page=7) · [사례 운영기](https://gideokkim.github.io/codex/loop-engineering/)

## Earlier DEC-0097 teaching sequence

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
