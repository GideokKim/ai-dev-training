# Tools and Execution

## Research Question

File, command, web, MCP, plugin, hook, automation은 어떤 경계를 구분해야 하는가?

## Why It Matters

Harness Engineering은 도구를 많이 연결하는 것이 아니라 실행 경계와 검증을 설계하는 일이다.

## Findings

- **Type: PRODUCT BEHAVIOR / Confidence: HIGH / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0103, SRC-0105, SRC-0107, SRC-0108, SRC-0109** — Codex can read/edit files and run commands within selected environment subject to sandbox and approval.
- **Type: PRODUCT BEHAVIOR / Confidence: HIGH / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0115, SRC-0124** — Web search, shell network, Cloud agent internet access are separate capabilities.
- **Type: PRODUCT BEHAVIOR / Confidence: HIGH / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0116, SRC-0117, SRC-0118, SRC-0119, SRC-0120** — MCP, Plugins, Hooks, `codex exec`, GitHub Action are different tool/automation layers.

## What the Evidence Does NOT Prove

외부 tool 연결이 truth guarantee를 제공하거나 permission을 우회한다는 뜻은 아니다.

## Implication for Training

Prompt → Context → Harness 전환에서 “도구와 실행 환경을 설계한다”를 구체화한다.

## Demo Implication

Build/test command, web search for official docs, diff review are candidates; external apps require OQ-014.

## Risks / Caveats

Prompt injection, secret exposure, dependency/network instability, overautomation.

## Open Questions

- OQ-007: exact verification command 미정.
- OQ-008: tool/harness choice 미정.
- OQ-014: external tools/company data policy 미정.

## Sources

SRC-0103, SRC-0105, SRC-0107, SRC-0108, SRC-0109, SRC-0115, SRC-0116, SRC-0117, SRC-0118, SRC-0119, SRC-0120, SRC-0124
