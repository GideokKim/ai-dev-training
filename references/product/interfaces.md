# Interfaces

## Research Question

Codex Desktop, CLI, IDE, Cloud, integration surface를 어떻게 구분해야 하는가?

## Why It Matters

“Codex를 쓴다”를 하나의 버튼이 아니라 execution surface와 permission model로 이해해야 한다.

## Findings

- **Type: PRODUCT BEHAVIOR / Confidence: HIGH / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0102, SRC-0103, SRC-0104, SRC-0105, SRC-0134** — Desktop, CLI, IDE, Cloud, ChatGPT Work/Codex는 서로 다른 surface와 작업 모델을 가진다.
- **Type: PRODUCT BEHAVIOR / Confidence: HIGH / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0106, SRC-0123, SRC-0135** — Local, Worktree, Cloud는 파일/명령 실행 위치와 isolation 방식이 다르다.
- **Type: PRODUCT BEHAVIOR / Confidence: MEDIUM / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0102** — 제품 이름과 UI placement는 migration/rollout에 따라 변할 수 있다.

## What the Evidence Does NOT Prove

한 surface 기능을 모든 Codex surface로 일반화하면 안 된다. local execution은 inference local-only가 아니다.

## Implication for Training

버튼보다 execution location, repository state, permission, diff, verification을 중심으로 설명한다.

## Demo Implication

Desktop 또는 CLI 중 primary surface는 OQ-003이 닫힌 뒤 선택한다.

## Risks / Caveats

OS preview, plan/role, admin controls, Git provider support, network policy가 모두 demo에 영향.

## Open Questions

- OQ-003: live demo surface 미정.
- OQ-005: product availability 미확인.
- OQ-014: company policy 미확인.

## Sources

SRC-0102, SRC-0103, SRC-0104, SRC-0105, SRC-0106, SRC-0123, SRC-0134, SRC-0135
