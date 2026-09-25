# Data Security and Workspace

## Research Question

OpenAI 제품 data handling, retention, residency, workspace controls를 회사 정책과 어떻게 분리할까?

## Why It Matters

사내 교육에서 “제품이 지원한다”와 “회사 데이터 사용이 허용된다”를 섞으면 안 된다.

## Findings

- **Type: PRODUCT BEHAVIOR / Confidence: HIGH / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0125, SRC-0132** — Business/Enterprise/Edu and API inputs/outputs are not used for training by default; personal ChatGPT/Codex may be used unless opted out.
- **Type: PRODUCT BEHAVIOR / Confidence: HIGH / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0126, SRC-0127** — data residency and inference residency have distinct scopes; Business residency has rollout and US safety/abuse copy limits.
- **Type: PRODUCT BEHAVIOR / Confidence: HIGH / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0128** — ChatGPT chat/file retention has feature-specific deletion scheduling, legal/security exceptions, Enterprise transient file and Library backup behavior.
- **Type: PRODUCT BEHAVIOR / Confidence: HIGH / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0129, SRC-0130, SRC-0131** — admins, roles, app access, provider permissions, RBAC, OAuth scopes, and workspace restrictions affect availability.

## What the Evidence Does NOT Prove

위 사실은 회사 내부 source code, customer data, credentials 사용 허용을 의미하지 않는다.

## Implication for Training

보안 파트를 OpenAI product facts와 company policy로 분리한다.

## Demo Implication

회사 정책 확인 전에는 public/sample repository를 사용한다.

## Risks / Caveats

제품 정책은 high-volatility다. target workspace 설정을 모르면 단정하지 않는다.

## Open Questions

- OQ-005: target account/workspace/admin behavior 미확인.
- OQ-014: company security/data policy 미확인.

## Sources

SRC-0125, SRC-0126, SRC-0127, SRC-0128, SRC-0129, SRC-0130, SRC-0131, SRC-0132
