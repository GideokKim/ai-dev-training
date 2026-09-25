# ChatGPT & Codex

## Research Question

ChatGPT와 Codex를 개발자 교육에서 어떻게 구분해 설명해야 하는가?

## Why It Matters

교육생이 코드 조각을 붙여넣는 ChatGPT 사용에서 repository를 보는 Codex workflow로 이동하는 이유를 이해해야 한다.

## Findings

- **Type: PRODUCT BEHAVIOR / Confidence: HIGH / Freshness: 2026-09-25 / Source: SRC-0133, SRC-0101** — ChatGPT GitHub connector는 허용된 repository를 읽고 검색할 수 있지만 working tree 수정이나 push 근거는 아니다.
- **Type: PRODUCT BEHAVIOR / Confidence: HIGH / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0101, SRC-0102, SRC-0103, SRC-0104, SRC-0105** — Codex는 desktop, CLI, IDE, Cloud 같은 surface에서 coding agent workflow를 제공한다.
- **Type: TEACHING MODEL / Confidence: HIGH / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0001, SRC-0003** — 이 교육에서 ChatGPT는 질문·정리·작은 코드 이해의 시작점이고 Codex는 repository context와 tool execution 단계의 예시다.

## What the Evidence Does NOT Prove

ChatGPT가 낮은 수준이고 Codex가 항상 정답이라는 뜻은 아니다. 모든 계정에서 모든 기능이 활성화된다는 근거도 아니다.

## Implication for Training

초급자에게 “코드만 붙여넣기”에서 “repository를 보게 하기”로 전환하는 이유를 설명한다.

## Demo Implication

ChatGPT GitHub read-only 조사와 Codex repository edit/diff/test 흐름을 비교할 수 있다. 실제 target account 여부는 OQ-003/OQ-005다.

## Risks / Caveats

UI와 기능명이 고변동이다. 버튼 위치를 핵심 근거로 삼지 않는다.

## Open Questions

- OQ-003: live demo surface 미정.
- OQ-005: target workspace availability 미확인.

## Sources

SRC-0101, SRC-0102, SRC-0103, SRC-0104, SRC-0105, SRC-0133
