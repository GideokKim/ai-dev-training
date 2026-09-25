# Skills

## Research Question

Codex Skills는 어떤 반복 작업에 적합하며 Prompt/AGENTS.md/Memory와 어떻게 다른가?

## Why It Matters

Skills는 reusable workflow의 제품 근거지만 기능 투어로 흐르기 쉽다.

## Findings

- **Type: PRODUCT BEHAVIOR / Confidence: HIGH / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0111** — Skills는 instruction, resources, scripts를 묶어 반복 가능한 절차를 제공한다.
- **Type: PRODUCT BEHAVIOR / Confidence: MEDIUM / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0117** — Plugin은 Skills, MCP servers/connectors, hooks 등을 package할 수 있으나 permission을 우회하지 않는다.
- **Type: HEURISTIC / Confidence: MEDIUM / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0001, SRC-0003** — Skill은 반복 failure/friction이 있을 때 도입하는 최소 구조 후보다.

## What the Evidence Does NOT Prove

Skill을 만들면 quality가 자동 개선되거나 모든 반복 작업에 Skill이 필요하다는 근거는 아니다.

## Implication for Training

반복 가능한 작업 방법이 생기는 시점에만 Prompt → Context → Harness 전환 재료로 소개한다.

## Demo Implication

검증 command나 checklist처럼 반복이 명확한 후보가 생기면 demo candidate가 될 수 있다.

## Risks / Caveats

Skill이 많으면 discoverability와 maintenance cost가 생긴다.

## Open Questions

- OQ-005: target account에서 Skill feature/admin behavior 미확인.
- OQ-008: 교육용 Skill 설계 미정.

## Sources

SRC-0111, SRC-0117, SRC-0001, SRC-0003
