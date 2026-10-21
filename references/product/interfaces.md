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

## 2026-10-21 — DEC-0036 Codex Entry Addendum

- **CLM-0031 / SRC-0228, SRC-0229:** OpenAI의 [Quickstart](https://learn.chatgpt.com/docs/quickstart?setup=app)는 codebase context와 developer tools를 사용하는 개발 작업에서 ChatGPT dropdown의 Codex 선택을 안내한다. [앱 안내](https://learn.chatgpt.com/docs/app)와 함께 확인했다.
- 현재 S08은 이 교육의 Repository 조사 경로를 설명하는 편집 가능한 재구성 도식이다. 좌측 상단이라는 위치는 사용자가 설명한 환경을 따른다. 실제 화면·계정·권한·발표 환경은 **UNVERIFIED**다.
- ChatGPT Work의 로컬 파일 접근도 구분한다. “Codex만 파일이나 Repository를 볼 수 있다”는 일반적인 배타적 주장은 하지 않는다. 이전 STEP 03의 관찰 날짜와 실행 표면 기록은 보존한다.
