# ACT2 Flow Revision — DEC-0060

> Current numbering: DEC-0084 /99slides/387minutes. This design record retains its edition IDs. Use [96→99 migration](SLIDE_ID_MIGRATION_99.md), [current Slide Map](SLIDE_MAP.md) and [ACT0 expansion](ACT0_CONTEXT_EXPANSION.md) for the current presentation.

Date:2026-10-22. Baseline:feae727 /90slides/368minutes.
User-approved additional duration ceiling:720minutes.
Current schedule:93slides/379minutes; ACT2 S32–S49/18slides/81minutes.

## Story

반복 설명 → Project 안내 기록 → 지침 활용 관찰 → 누적 정보의 관련성 문제 →
범위/시점 구분 → 위치 연구의 제한된 관찰 → 코드 탐색 결과 확인(RepoQA 보조) → 탐색 경로 → 배치 기준 → 실제 문서
재구성 → 두 요청 관찰 → A 답 → B 답 → 접근 비교 → 성과 회수 → 남은 절차 문제.
ACT3 S50은 실제 두 요청 기록의 대응, S51은 명령·규칙/수행 절차의 유지 책임,
S52는 normalize 한 Task에 세 책임 적용으로 각각 전진한다.

## Per-slide responsibility

| Slide | Role | Time / Mode |
|---|---|---|
| S32 | 이전 ACT의 반복 Prompt를 Project 정보 수명 문제로 연다. | Lecture 4분 + Case 1분 = 5분 |
| S33 | 실제 작은 AGENTS.md 기록을 보여준다. | Demo 4분 (HYBRID) = 4분 |
| S34 | 실제 지침 명령을 사용한 실행을 확인한다. | Demo 4분 (HYBRID) = 4분 |
| S35 | 방금 기록을 범위·수명 관점에서 정리한다. | Lecture 5분 = 5분 |
| S36 | 정확한 정보가 쌓이는 실제 두 문서 상태를 재구성한다. | Case 4분 = 4분 |
| S37 | README Build 작업에서 AGENTS.md 안 정보의 관련성을 구분한다. | Demo 2분 (CAPTURED) + Reflection 2분 = 4분 |
| S38 | 공통/상세를 나누고 수행 절차는 미해결 질문으로 남긴다. | Lecture 4분 = 4분 |
| S39 | Lost in the Middle의 위치 비교 과제와 제한된 관찰을 설명한다. | Lecture 4분 = 4분 |
| S40 | 필요한 코드의 위치·요청 대응·주변 근거를 확인할 질문을 제시하고 RepoQA를 보조로 둔다. | Lecture 4분 = 4분 |
| S41 | 한 요청에서 관련 명세까지의 설계 경로를 보여준다. | Lecture 3분 = 3분 |
| S42 | 공통 안내/상세를 어디에 둘지 판단 기준을 제시한다. | Lecture 4분 = 4분 |
| S43 | 그 기준을 실제 문서에 적용한 전후와 의미 보존을 확인한다. | Lecture 2분 + Demo 2분 (CAPTURED) + Case 1분 = 5분 |
| S44 | 두 실제 읽기 전용 요청과 관찰 질문을 제시한다. | Lecture 2분 = 2분 |
| S45 | A의 문서 접근·명세·기록된 답을 연결한다. | Case 5분 = 5분 |
| S46 | B의 설정·소스 접근·실행/빌드 의존성 답을 회수한다. | Case 4분 = 4분 |
| S47 | 두 답변을 재강의하지 않고 접근 공통·차이와 해석 한계를 비교한다. | Demo 1분 (CAPTURED) + Case 3분 + Reflection 2분 + Q&A 1분 = 7분 |
| S48 | 개별 근거로 확인한 네 성과를 회수한다. | Lecture 2분 + Reflection 1분 = 3분 |
| S49 | 수행 절차의 유지 책임 질문으로 ACT3에 넘긴다. | Transition 4분 + Q&A 6분 = 10분 |

## New scope and time

- S40 RepoQA4min Lecture: splits the previously combined S39 research content.
- S46 dependency4min Case: closes the existing B request with retained evidence.
- S48 recap3min (Lecture2/Reflection1): reclaims bounded accomplishments.
- All prior90 allocations stay. No removed original slide content or reduced time.
- Modes: Lecture143/Demo73/Case88/Reflection21/Transition22/Q&A32=379.
- No new Section/Beat/Demo/Trial/State ID. Existing2E gains4,2G gains4,
  2I gains3; C++ bridge3minutes remains integrated, never double-counted.

## Evidence boundaries

S34 instruction use does not establish forced compliance or AGENTS-only causality.
S37 relevant/unrelated is an educational classification of AGENTS contents;
it is not the later read/not-read access matrix. S39–40 keep distinct study
questions. S41 is designed navigation; S43 is observed document structure;
S45–47 are retained final Trial observations, not an inferred chronological
trace. A testing.md access varied across runs. B answered no third-party
runtime deps, while Python3.9+/stdlib are runtime requirements and
setuptools/wheel are build tools. Opening a file does not prove internal
causality. No perfect routing, token saving or performance improvement is
claimed. S48 aggregates references, not effects. S49 is a teaching request;
S50 compares retained records with PARTIAL Prompt-only attribution. S51
explicitly permits procedures in AGENTS.md and separates maintenance ownership.

## Primary research sources

- [Lost in the Middle, TACL2024](https://aclanthology.org/2024.tacl-1.9/)
  CLM-0014/SRC-0201; document QA and synthetic key-value position comparison.
- [RepoQA,2024v1](https://arxiv.org/html/2406.06025v1)
  CLM-0015/SRC-0204; description-based function search, not full Agent changes.

Reopened2026-10-22 for scope fidelity only. Existing frozen claims remain.
Main16K is RepoQA code-input length under its tokenizer, not the whole Prompt
or current Codex limit. Neither paper validates this project's routing gains.

## Production and validation

Keep11Templates/27Variants, native editable text/shapes, S47 native table,
S58 native chart and the19-field Notes schema. Preserve approved images and
historical filenames. Render all93 Full slides and ACT2–5, review ACT2 with
S31/S50–52 boundaries, compare unchanged texts under the migration, verify
Notes/paths/current fallback hashes. Final package results are recorded in
production/evaluation/ACT_2_FLOW_REVISION.md and its validation JSON.
Windows PowerPoint, target fonts/room/product/account and actual pacing
remain UNVERIFIED. No presenter bundle, Demo repository change or new Trial.

DEC-0060 duration-label alignment: current S86 changes only the outdated six-hour recap title to “전체 Story를 한 장으로”. Its Story/Beat/time/Mode/evidence content remain unchanged. The earlier duration wording stays in historical records.

S48 uses existing T03-A: four scoped observation nodes connected in teaching Story order, not four comparison alternatives or a causal chain.11Templates/27Variants remain.

## DEC-0061 — Current S39–S41 refinement

S39's research remains the bounded position-comparison study. S40 now asks
what evidence supports a code-search result, with an existing crop excerpt
and three course-model questions; RepoQA is supporting evidence only. S41
then asks how to reach those sources. The previous independent RepoQA
lecture description is the earlier DEC-0060 design, not the current primary
role. Slide count93/time379/ACT2 81/Lecture4 for S40 remain unchanged.
