# Memory

## Research Question

Codex Memory는 현재 Context, repository instruction, Source of Truth와 어떻게 다른가?

## Why It Matters

Memory를 잘못 설명하면 오래된 선호나 정책을 사실처럼 사용할 수 있다.

## Findings

- **Type: PRODUCT BEHAVIOR / Confidence: HIGH / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0113** — Codex Memory는 persistent preference/context로 볼 수 있으며 current prompt context와 다르다.
- **Type: PROJECT CONVENTION / Confidence: HIGH / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0001, SRC-0002** — 확정 기획은 `plan/`이 Source of Truth이며 Memory가 대체하지 않는다.
- **Type: HEURISTIC / Confidence: MEDIUM / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0137** — stale memory/instruction은 bounded Harness Technical Debt analogy로 설명 가능하다.

## What the Evidence Does NOT Prove

Memory가 모든 workspace에서 켜져 있거나 최신 정책을 보장한다는 뜻은 아니다.

## Implication for Training

Memory, current Context, Source of Truth를 분리해 설명한다.

## Demo Implication

Memory demo는 target account availability가 확인된 뒤에만 candidate다.

## Risks / Caveats

관리자 설정, 계정 plan, surface별 노출이 high-volatility다.

## Open Questions

- OQ-005: Memory behavior/availability 미확인.
- OQ-008: Memory demo 선택 미정.

## Sources

SRC-0113, SRC-0001, SRC-0002, SRC-0137
