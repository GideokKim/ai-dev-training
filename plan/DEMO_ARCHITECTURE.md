# Demo Architecture

## 현재 ACT4 제작 기준 — DEC-0097 (2026-10-25)

사용자가 ACT4 재기획안을 승인했다. 현재114장·406분(6시간46분), ACT 장수
14/22/19/26/18/15와 시간43/64/82/96/81/40분이다. ACT4 S82–S99는18장·81분,
ACT5는 S100–S114다. 이전 S100 GPU 장을 삭제하고 이전 S101–S115를 -1 이행했다.
전체 Mode는 Lecture172/Demo51/Case103/Reflection22/Transition26/Q&A32분이다.
이전 ACT4의 visual/captured Demo22분을 포함한 배정을 새 설계에 맞춰 재배분했다.
새 반복 진행은 Case이며 실제 새 모델 호출·수정·검증·성과를 관찰한 Demo가 아니다.

ACT4의 중심은 **같은 목표의 구현 → 근거 있는 검토 → 수정 → 재검토 → 목표 충족 판단**이다.
Harness 개선은 관련 확장이며 이 수행 루프의 주 사례를 대신하지 않는다.
CASE-LOOP-01은 별도 교육용 밝기 통계 설계이고, S92–S94는 조건을 제한한 연구다.
현재 다중 모델 조합·제품 실행 표면·반복 효과는 미검증이다. 기존 Product/Meta
Trial과 새 설계의 근거를 합치지 않는다. 연구는 다른 모델의 보편적 우월성을 뜻하지 않는다.

[승인 설계](ACT4_GOAL_LOOP_REPLAN.md), [현행 Map](SLIDE_MAP.md),
[115→114 이행](SLIDE_ID_MIGRATION_114.md)을 따른다. 기존12Templates/28Variants,
19Notes 필드와19개 실무 적용 팁을 유지한다. 마지막 찾아보기는 S111–S113이다.
아래 이전 정의·번호·시간·검증은 이력이다. 새 기준과 충돌하면 현재 사용자 승인과
DEC-0097을 우선한다. Windows/교육장/제품·계정/실제 리허설은 UNVERIFIED다.
Demo Repository·기존 State/Trial·발표 묶음은 변경하지 않는다.


## CASE-LOOP-01 — Goal-directed brightness-statistics design

Current role: S84–S89 illustrates one fixed goal with candidates, tool
evidence, a different review model, revision and re-review. S90–S97 connects
the control/role/state design. Status: CONCEPTUAL / DESIGNED / NOT EXECUTED.

Goal: retain the six output fields and behavior while reducing unnecessary
temporary allocation and respecting a runtime condition. Numeric targets,
representative inputs, model identities and the execution surface are TBD.
The controller preserves fixed criteria and passes remaining issues and
evidence to the next revision. Completion differs from unmet-goal escalation.

Primary delivery: static native diagrams in ACT4, not Live or Hybrid.
Start: identify the fixed goal at S84. Stop: S89 closes the same-criteria
re-review; S90 names the whole loop. If time is short, retain the issue①→
revision① connection and evidence boundary, and shorten advanced extensions.
Fallback: the delivered ACT4 PPT and matching PNGs; target-PC playback is
UNVERIFIED. No new Trial, Product Git State, model call or benchmark is run.

Existing DEMO-04A/04B and EVAL-01–04 keep their original meaning and history.
They are supporting records, not the evidence for this new loop. Existing
Demo-10/11 main-deck allocations are replaced by the new Case sequence;
the historical twelve Demo identities are not silently assigned new results.


## 이전 Codex 제작 팁 — DEC-0093 (2026-10-25)

현재115장·406분(6시간46분). 기존113장의 Story·장별 시간/Mode·근거를 유지하고
이전 S62 뒤 새 S63에 Skill 제작 팁, 이전 S66 뒤 새 S68에 Custom Agent 제작 팁을
각 Lecture2분씩 추가한다. 이전 S63–S66은 +1, 이전 S67 이후는 +2다.
ACT 장수14/22/19/26/19/15, 시간43/64/82/96/81/40분. Mode164/73/88/21/28/32분.
ACT4는 S82–S100의19장·81분, ACT5는 S101–S115의15장·40분을 그대로 유지한다.
실무 적용 팁은19개이며 마지막 찾아보기 S112–S114의 기존 세 장에 모두 연결한다.
공식 자료를 각색한 요청·문서 도식이며 실제 생성·실행·TRIAL-008 제작 이력이 아니다.
12Templates/28Variants·19Notes 필드 유지. 새 Trial·Agent/Skill 설치·Demo 저장소·묶음 변경 없음.
[현재 팁 설계](CODEX_AUTHORING_TIPS.md), [113→115 번호](SLIDE_ID_MIGRATION_115.md),
[Slide Map](SLIDE_MAP.md). 아래 이전 판본의 번호·시간·검증은 이력으로 보존한다.
Windows/교육장/제품·계정/실측 리허설은 UNVERIFIED다.

## 이전 기준 — DEC-0091 (2026-10-25)

113장·402분. ACT3 S56–S79는24장·92분, ACT4 S80–S98은 기존19장·81분을 보존한다.
S71 뒤 재사용2장과 이전 S72 설명5장을 넣고 이전 독립 C++ 전이 S73은 삭제했다.
현재 범위·근거·장별 시간은 [Slide Map](SLIDE_MAP.md), [설계](HARNESS_REUSE_AND_EXECUTION_CONTEXT.md),
[108→113 번호](SLIDE_ID_MIGRATION_113.md)를 따른다. 기존12Templates/28Variants·19Notes 필드 유지.
마지막 팁 요약은 S110–S112이며 Windows/교육장/제품·계정/실측 리허설은 UNVERIFIED다.
아래의 이전 Decision·Prototype·평가는 당시 판본의 이력이며 새 Trial이나 전체 환경 감사가 아니다.

## 이전 ACT 제목 슬라이드 — DEC-0090 (2026-10-25)

현재 **108장·396분(6시간36분)**. 각 ACT 시작에 승인된 한글 제목·부제1장을 넣는다.
기존102장의 내용·장별 시간/Mode·근거를 유지하고 제목6장에 Transition1분씩 추가한다.
ACT 장수14/22/19/19/19/15, 시간43/64/82/86/81/40분. Mode Lecture154/Demo73/
Case88/Reflection21/Transition28/Q&A32분. 새 제목은 S01/S15/S37/S56/S75/S94다.
제목은 주제만 안내하며 기존 첫 문제·질문·Demo를 대신 설명하지 않는다.
17개 팁 본문·배지와 마지막 팁 요약은 유지하며 현재 마지막 요약은 S105–S107이다.
본문 Template는 유지하고 제목 전용 T12-A를 추가해 **12Templates/28Variants**가 된다.
[제목 기준](ACT_TITLES.md), [102→108 번호](SLIDE_ID_MIGRATION_108.md), [Slide Map](SLIDE_MAP.md).
아래 이전 승인/검증 기록은 당시 판본이다. 실환경·제품/계정·리허설은 UNVERIFIED다.

## 이전 마지막 팁 요약 — DEC-0088 (2026-10-25)

현재 **102장·390분(6시간30분)**. ACT 중간의 제목/ID 찾아보기6장을 제거하고,
마지막 Q&A/Closing 바로 앞의 **S99–S101**로 통합했다. 기존 팁17장의 설명·배지와
99개 본문 장의 내용·장별 시간/Mode·근거는 유지한다. ACT 사이 설명은 바로 이어진다.
ACT 장수13/21/18/18/18/14, 시간42/63/81/85/80/39분. Mode Lecture154/Demo73/
Case88/Reflection21/Transition22/Q&A32분. 팁 요약3장만 Lecture1분씩 배정한다.
[팁 위치/분류](PRACTICAL_APPLICATION_TIPS.md), [105→102 이행표](SLIDE_ID_MIGRATION_102.md),
[현행 Slide Map](SLIDE_MAP.md)을 따른다. 아래 과거 승인/검증 기록은 당시 판본이다.
Windows·교육장·제품/계정·실측 리허설은 UNVERIFIED이며 새 Trial/성과는 없다.

## Historical application tips — DEC-0087 (2026-10-25)

현재105장·393분(6시간33분). 기존99장의 내용·장별 배정·근거 범위를 보존하고,
17개 적용 기준에 “실무 적용 팁” 공통 배지·분류를 붙였다. 각 ACT의 다음 문제·성찰·
마무리 앞에는 제목/ID 찾아보기1장·Lecture1분씩 추가한다. ACT 장수14/22/19/19/19/12,
시간43/64/82/86/81/37분. Mode157/73/88/21/22/32분. 새 제품 실행·Trial·검증 결과는 없다.
[팁 기준/목록](PRACTICAL_APPLICATION_TIPS.md), [현재99→105 이행표](SLIDE_ID_MIGRATION_105.md),
[현행 Slide Map](SLIDE_MAP.md)을 우선한다. 아래 이전 제작·Prototype·동결 기록의
번호/시간은 당시 판본이며 현행 근거 상태를 상향하지 않는다. 실환경·리허설은 UNVERIFIED다.

## Historical ACT0 sequence — DEC-0084

S05 결과→S06 근거→S07 별도 실행 오류→S08 필요한 Context→S09 사람의 전달
→S10 Agent의 허용된 조사→S11 Codex 진입→S12 접근과 의도→S13 다음 Task.
현재99장·387분 / ACT0 13장·42분. 이전 S08–S96은 S11–S99이며, 기존
Beat/Section/Demo/Trial/State IDs·11Template/27Variant·19Notes 필드를 유지한다.
이전 세 장의 Demo8분과 Case5분을 나누고 Lecture2분만 더했다. 새 Trial·복구·
우월성 측정은 없다. 아래 과거 설명/Prototype/검증 본문의 번호는 당시 판본이다.
[현재 설계](ACT0_CONTEXT_EXPANSION.md), [이행표](SLIDE_ID_MIGRATION_99.md),
[결과](../production/evaluation/ACT_0_CONTEXT_EXPANSION.md)를 우선한다.

## Historical ACT5 reassessment — DEC-0083

S90의 AI-Native 설계 관점 뒤에 S91 조건 변화에 따른 기존 Harness 재평가,
S92 유지·통합·제거 후보, S93 같은 대표 작업·기준으로 확인을 배치한다.
S88의 처음부터 도입하지 않은 판단과, 이미 쓰던 구조의 후속 재평가는 다르다.
이전 S91/S92/S93은 S94/S95/S96이며, 문제·다음 행동에 통합·제거 후보를 포함한다.
현재96장·385분 / ACT5 11장·36분. 기존 Slide별 시간·Mode와 Beat/Section/
Demo/Trial/State IDs는 유지한다.11Template/27Variant와19Notes 필드를 재사용한다.
[현재 설계](ACT5_HARNESS_REASSESSMENT.md), [번호 대조](SLIDE_ID_MIGRATION_96.md),
[로컬 검토](../production/evaluation/ACT_5_HARNESS_REASSESSMENT.md)를 기준으로 한다.
아래 이전 수정·Prototype·검증 본문은 당시 번호·범위의 이력이다.
새 Trial·측정 성과·Demo State를 추가하지 않는다. 발표 묶음은 갱신하지 않는다.

> **이전 기준: DEC-0087 /105장·393분(6시간33분,2026-10-25).** ACT 장수14/22/19/19/19/12, 시간43/64/82/86/81/37분. Mode Lecture157/Demo73/Case88/Reflection21/Transition22/Q&A32분. 기존99장의 배정을 보존하고6개의 찾아보기에 Lecture1분씩 추가했다. [팁 목록](PRACTICAL_APPLICATION_TIPS.md), [105장 이행표](SLIDE_ID_MIGRATION_105.md). 실환경·리허설은 UNVERIFIED다.

## 2026-10-18 — DEMO-04A Clarification (DEC-0027)

The approved hypothetical setting is a legitimate need to verify module
interactions: Project verification expands from unit tests to unit plus
integration tests, but the reusable Workflow retains the unit-only direction.
This setting concretizes the existing conceptual role. It is not an observed
graypipe change, current Skill behavior, Agent run or test outcome. No exact
runner command is selected. The existing Demo sequence and durations remain.


> Status: **STEP 07 complete with open questions; DEC-0007 schedule accepted
> and DEC-0022 sets STEP 08 Slide Map readiness to READY (2026-10-02).
> Product path ends at STATE-04-PERF; DEC-0020/DEC-0021 govern the
> no-Product-Evolution outcome and separate conceptual/observed ACT 4 paths.
> Windows/Desktop rehearsal and current product checks remain open for Final
> Content Freeze; exact Q&A and Reflection/Transition placement is STEP 08
> work. No Demo remote.**
>
> Date: 2026-09-30
>
> This document turns the approved Story and Curriculum into a Demo design
> proposal. Most ratings and candidate outcomes below are planning judgments.
> Candidate comparison measurements and the committed benchmark baseline are
> recorded in `plan/DEMO_MATRIX.md`. The preparation commit is not a named
> Demo state or a rehearsed classroom result.

## Purpose

Design a small, reproducible instructor-led Demo system that makes the
training's Engineering evolution observable in one continuing software
Project:

`Chatbot → Prompt → Context → Harness → Loop → AI-Native Development`

The Demo answers a Story question at each transition. It does not organize
the training around a tour of product features or require participants to
bring laptops or perform exercises.

## Governing Sources

- `plan/MASTER_PLAN.md`: Source of Truth for the training identity,
  audience, delivery, Story, and six-hour limit.
- `plan/INVARIANTS.md`: especially
  `INV-NARRATIVE-001/002`, `INV-DELIVERY-001`,
  `INV-DEMO-001–004`, `INV-VERIFY-001`, and
  `INV-RESPONSIBILITY-001`.
- `plan/DECISIONS.md`: `DEC-0011` accepts the repository, language, domain,
  and delivery direction; `DEC-0012` selects its local sibling path;
  `DEC-0016` clarifies environment roles. `DEC-0010` is
  superseded. DEC-0007 is ACCEPTED as of 2026-10-02; DEC-0008 retains its
  status. OQ-001 and
  repository/delivery planning are resolved; DEC-0016 keeps exact Windows
  setup and the final presentation interface open under OQ-003. OQ-005 and
  other implementation questions remain governed there.
- `plan/CURRICULUM.md` and `plan/CURRICULUM_MATRIX.md: Demo roles
  and time allocations.
- `plan/STORY_ARCHITECTURE.md`, `plan/STORY_BEATS.md`, and
  `plan/TRANSITIONS.md`: causal sequence and Anchor handoffs.
- Research record: `references/README.md`,
  `references/CLAIMS.md`, `references/product/CAPABILITY_MATRIX.md`,
  and the linked product research. Current product behavior and account
  availability must be checked under OQ-005 before relying on them.

## Demo Philosophy

1. Keep one understandable Project evolving wherever candidate feasibility
   allows it. Keep its Educational Demo Harness separate from the Training
   Production Harness in `ai-dev-training`.
2. Show a plausible developer action that works before its limits become
   visible. Introduce a mechanism only when the Story has established a need.
3. Do not manipulate a Prompt to force a failure, success, command, or product
   feature. Use natural task-level requests and accept reasonable alternate
   paths.
4. Distinguish actual observations from controlled educational states. A
   controlled stale state is labeled as designed for training; it is not
   presented as real project history.
5. After failure, inspect evidence and form a cause hypothesis before changing
   the Harness. Change the layer implicated by the evidence and remove
   unnecessary duplicate guidance where appropriate.
6. Treat a successful command or one successful task as bounded evidence. Use
   a small representative evaluation set and a regression check.
7. Prefer Live only when it has high teaching value and low or medium
   execution risk. Use recorded, captured, visual, or Hybrid delivery where
   they make the Story clearer or more reliable.
8. Keep the Demo useful to both beginners and experienced developers. The
   audience includes many C++ Vision developers, but Python and Vision are
   context for the example, not the course subject; no participant
   hands-on work is required.

## Primary Repository Strategy

### Location and Source Strategy

**Accepted direction (DEC-0011/DEC-0012):** create the purpose-built
`ai-dev-training-demo` repository separately from `ai-dev-training`, at
`../ai-dev-training-demo` relative to the `ai-dev-training` repository root.
In the current workspace this resolves to
`/Users/noah/workspace/education/ai-dev-training-demo`.

| Strategy | Advantages | Risks | Current disposition |
|---|---|---|---|
| Existing repository | Authentic architecture and possibly real recurring work. | Permission, data, and Story-fit review remain necessary; the selected direction does not need outside code or data. | Not selected. |
| Purpose-built repository | Can keep the domain small, use synthetic data, shape incremental states, and label the designed history honestly. | Requires later implementation and validation; designed changes must remain plausible. | Selected by DEC-0011. |
| Hybrid | Could borrow a domain pattern while controlling the teaching repository. | Borrowed code/data add review and may blur which history is real. | Not selected. |

Keep both Harnesses distinct:

- **Training Production Harness:** instructions and planning used to create
  `ai-dev-training`.
- **Educational Demo Harness:** instructions, routed context, reusable work,
  durable project knowledge, verification, and any supported product
  mechanisms used in the separate Demo Project.

The actual training-repository history may become a secondary Meta Example
only if the events really occurred and are recorded. It never replaces the
continuous software Project Story.

### Candidate Comparison

Ratings are relative planning estimates using the STEP 06 priority order:
Story Fit, Audience Readability, Demo Reproducibility, Build/Test Quality,
Benchmark Quality, Context/Harness Evolution, cross-platform feasibility,
implementation effort, and maintenance cost. They are not Trial results.
For effort and maintenance, HIGH means more cost; otherwise HIGH is preferred.
The user selected a Python image-processing Demo for an audience with many
C++ Vision developers; ratings remain unvalidated.

| Candidate | Language / domain / strategy | Story | Readability | Repro | Build/Test | Benchmark | Context | Harness | Loop | Cross-platform | Impl. cost | Maint. cost | Disposition |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| A | Python / synthetic image-processing CLI / purpose-built | HIGH | HIGH | HIGH | TBD | TBD | HIGH | HIGH | HIGH | HIGH | LOW–MEDIUM | LOW–MEDIUM | SELECTED by DEC-0011; planning ratings only |
| B | C++ / small synthetic image-processing CLI / purpose-built | HIGH | MEDIUM | MEDIUM | HIGH | HIGH | HIGH | HIGH | HIGH | MEDIUM | HIGH | HIGH | Not selected as primary language; transfer target |
| C | Python / deterministic local telemetry-data pipeline / purpose-built | HIGH | HIGH | HIGH | MEDIUM | MEDIUM | HIGH | HIGH | HIGH | HIGH | LOW–MEDIUM | LOW–MEDIUM | Superseded; DEC-0010 is retained as history |
| D | TypeScript / deterministic local event-log CLI / purpose-built | HIGH | MEDIUM | MEDIUM–HIGH | HIGH | MEDIUM | HIGH | HIGH | HIGH | HIGH | MEDIUM | MEDIUM | Not selected |

#### Candidate A — Python Synthetic Image Processing CLI (Selected)

- **Advantages:** grayscale input, simple operations, and visible output give
  C++ Vision developers an intuitive domain; Python keeps Code and Repository
  comprehension cost low; synthetic local data supports controlled states.
- **Risks:** Python differs from the primary language of many attendees, and
  even elementary image processing can distract if algorithm detail expands.
- **Implementation status:** STATE-00 records the module boundaries, image
  representation, dependencies, and Build/Test commands. STEP 07 initially
  selected the resize source-column coordinate case and committed its
  benchmark baseline; §§191–200 selected the statistics row-reduction
  candidate for STATE-04-PERF. Classroom rehearsal remains pending.
- **Selection rationale:** familiar domain + lower code comprehension cost
  + continued focus on AI Engineering evolution.

#### Candidate B — C++ Synthetic Image Processing CLI

- **Advantages:** directly matches C++ Vision development and makes CMake,
  compiler, test, and benchmark practices immediately recognizable.
- **Risks:** syntax/toolchain explanation raises implementation and
  comprehension cost for a course whose subject is AI Engineering evolution.
- **Disposition:** not selected as the primary Demo language. Its practices
  will be represented by future C++ Vision transfer bridges without adding
  C++ code to the Demo repository.

#### Candidate C — Python Telemetry-Data Pipeline

- **Advantages:** concise source and deterministic synthetic input could
  support the engineering Story.
- **Risks:** less immediately familiar to the C++ Vision audience and less
  visually intuitive than synthetic image input/output.
- **Disposition:** superseded by DEC-0011; retain DEC-0010 for decision history.

#### Candidate D — TypeScript Event-Log CLI

- **Advantages:** a typed multi-module CLI and compiler output make Build
  visible; Node includes a test runner; synthetic text fixtures are easy to
  keep local and deterministic.
- **Risks:** Node and TypeScript versions must be pinned; module/compiler
  configuration and generated output add teaching and reset details; runtime
  warm-up may complicate a short performance comparison.
- **Blocking issues:** target Node runtime, dependency cache, audience
  familiarity, and benchmark stability are unknown.
- **Basis:** TypeScript documents project compilation in its
  [official compiler options](https://www.typescriptlang.org/docs/handbook/compiler-options);
  Node documents its built-in
  [test runner](https://nodejs.org/download/release/v24.15.0/docs/api/test.html).

The CMake, Python Packaging, TypeScript, and Node references describe tooling;
they do not establish that a candidate is usable in the eventual training
environment.

### Selected Repository Direction

**ACCEPTED by DEC-0011:** create a separate purpose-built Python repository
named `ai-dev-training-demo` whose domain is a synthetic Image Processing
CLI.

The user selected Python to reduce Code and Repository comprehension cost,
not because Python is better for AI or superior to C++. The conceptual path
is input image → loader → normalize → filter → resize/transform → statistics
→ output. Exact modules will be defined in STEP 07. Keep Vision operations
elementary and use synthetic local images only.

The C++ Vision transfer bridge is a future Curriculum/Slide concern. It maps
Python tests to GoogleTest/CTest, benchmarks to Google Benchmark or a project
benchmark, modules to `.cc`/`.h` and libraries/modules, project instructions
to CMake/compiler flags/conventions/module constraints, performance work to
Release build → benchmark → profile → optimize → correctness test →
regression, and Context routing to architecture/module/algorithm/performance
guides. It does not require C++ code in the Demo repository.

At STEP 06 completion, no Trial, repository, code, or performance
measurement existed. STEP 07 has since created STATE-00 at the selected local
sibling path, recorded bounded exploration and crop-fix Trials through Codex
CLI, and created the verified `STATE-00-FIXED` state. Evidence is recorded in
`plan/DEMO_REPOSITORY_SPEC.md` and `plan/DEMO_MATRIX.md`. No performance
result or Codex Desktop Anchor validation is claimed.

## Current Demo State Evolution

The observed Product path is `STATE-00 → STATE-00-FIXED → STATE-01 →
STATE-02 → STATE-03 → STATE-04 → STATE-04-PERF`. Benchmark preparation
commits are recorded evidence, not named States. `STATE-04-PERF` is the
Working Harness Success and the final Product endpoint for STEP 07.

After that endpoint, ACT 4 uses two separate paths: DEMO-04A is a conceptual
controlled stale-Harness case; DEMO-04B is an observed Training Production
evaluation/reporting Meta Case. Neither changes the Demo repository or adds
a Product State. DEC-0020/DEC-0021 supersede the earlier proposed STATE-05
through STATE-11 Product sequence; any older references below are historical
design records, not an implementation plan. Git history remains a
training-designed evolution, never authentic production history.

## Historical Stale Harness Scenario Comparison

This comparison predates the final Project Evolution candidate gate. It does
not authorize a Product change or State. DEC-0020 found no qualified Project
change; only the explicitly conceptual DEMO-04A case remains in the current
Story.

| Candidate | Audience clarity | Reproducibility | Cause clarity | Harness relevance | Loop relevance | Evaluation quality | Regression quality | Live stability | Implementation effort | Story continuity | Disposition |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| A. Build/Test workflow stale after Project test-procedure migration | HIGH | HIGH | HIGH | HIGH | HIGH | HIGH | HIGH | MEDIUM | MEDIUM | HIGH | Primary stale-scenario proposal |
| B. Benchmark workflow stale | MEDIUM | MEDIUM | MEDIUM | HIGH | HIGH | HIGH | MEDIUM | LOW–MEDIUM | MEDIUM | HIGH | Supporting comparison; benchmark noise adds explanation |
| C. Architecture/module knowledge stale | MEDIUM | MEDIUM | MEDIUM | MEDIUM | MEDIUM | MEDIUM | MEDIUM | MEDIUM | HIGH | MEDIUM | Lower priority; wrong-module cause needs context |
| D. Project rule stale or overbroad | HIGH | HIGH | HIGH | MEDIUM | HIGH | HIGH | HIGH | MEDIUM | LOW–MEDIUM | HIGH | Strong regression case, not primary stale story |
| E. Memory/durable knowledge stale | MEDIUM | MEDIUM | MEDIUM | HIGH | HIGH | MEDIUM | MEDIUM | LOW–MEDIUM | MEDIUM–HIGH | MEDIUM | Deferred; no current primary-Demo fact passes the Memory gate. Revisit only if a real durable-knowledge need is established. |

HIGH is favorable for every column except Implementation effort, where HIGH
means more cost. Scores are provisional judgments, not Trial results.

**Primary stale scenario (selected Story direction; implementation details
open):** after a working Harness is demonstrated, a documented Project need
changes the Test layout or procedure. Update the authoritative Project Test
source, but leave exactly one previously correct reusable performance
workflow stale. Choose the test runner and any dependency based on stability
and readability, then settle exact old/new layouts and commands in STEP 07.
The stale command must visibly fail for the intended stale-artifact reason,
not due to missing dependencies or an invalid environment.

Control other causes: keep the Project's current Test source, dependencies,
runtime, permissions, and environment valid and prepared; make the reusable
workflow the only outdated artifact. Show the earlier state where its command
was correct and the Project change that made it stale. Do not add a competing
rule to `AGENTS.md`.

The teaching point is Harness staleness, not why one Test framework is
better. If the selected migration feels artificial or the old command does
not make the stale artifact visible, choose another small Build/Test
procedure change and update this comparison before implementation.

The primary Anchor should show:

`recurring correction → observe → investigate evidence → cause hypothesis
→ scoped Harness change → rerun → evaluation → regression check`

Possible Project-evolution candidates include a test-runner change or a
test-layout change. These are alternatives, not current Project facts. Do not
add a contradictory `AGENTS.md` rule to paper over a stale reusable artifact.
If a task-level Prompt fixes one run, show why the stale artifact can affect
the next task.

Repeated failures may be represented by one live task plus captured history
for earlier tasks. Three live repetitions are unnecessary. If the timeline
was designed for education rather than observed, label it as a controlled
scenario.

## Anchor Demo Candidates

The first three Product Anchor delivery paths remain candidates. The ACT 4
evidence roles are accepted under DEC-0021, with visual/captured delivery and
no Live Product failure. Final surface choice and rehearsal remain open.
DEC-0011's HYBRID default applies to Product Anchors where Live behavior is
validated.

| Anchor | Story question | Starting/ending state | Proposed mode | Live value | Execution risk | Curriculum Demo allocation |
|---|---|---|---|---:|---:|---:|
| 1. Repository exploration | Must the Developer find every relevant file before asking? | STATE-00; read-only search and trace | HYBRID | HIGH | MEDIUM | 8 min, ACT 0 |
| 2. Project Context | Why repeat Project facts in every Task? | STATE-00-FIXED → STATE-01; same task before/after | HYBRID | HIGH | MEDIUM | 8 min, ACT 2 |
| 3. Reusable workflow | Why repeat the steps and checks for a recurring task? | STATE-03 → STATE-04 → STATE-04-PERF; bounded performance workflow | HYBRID | MEDIUM–HIGH | MEDIUM–HIGH | 8 min, ACT 3 |
| 4. Harness Improvement Loop | How should a stale reusable procedure be diagnosed and evaluated? | DEMO-04A conceptual case plus separate DEMO-04B observed Meta Case | VISUAL / CAPTURED; no Live Product failure | HIGH | LOW–MEDIUM | 22 min, ACT 4 |

“Live value” and “execution risk” are estimates before Trial, not validation.
An Anchor may be recorded or hybrid; Anchor count does not prescribe Live
count. See `plan/DEMO_MATRIX.md` for all supporting candidates, Visual
cases, coverage, and Act-level budget reconciliation.

## Live / Recorded / Captured Strategy

- **LIVE:** use for short, observable Agent investigation or verification
  when the target product surface supports it and a rehearsed task fits its
  time slot.
- **RECORDED:** use for long, variable workflows or product coordination
  where pausing live would obscure the Story.
- **CAPTURED:** use for reviewed terminal output, diff, logs, or results whose
  evidence matters more than the live interaction.
- **VISUAL:** use for Context growth/routing, system boundaries, or a lifecycle
  explanation that does not need execution.
- **HYBRID:** accepted default for Anchor Demos: attempt the Live step when
  validated, with a prepared capture, expected result, and fallback path for
  each Story-critical case. ACT 4's Harness Improvement Loop is not Live-only.

Current Codex features, Skill/Subagent/Memory availability, exact account,
and permission behavior remain conditional on OQ-005 and the STEP 03 research
record. Use an explicit repository workflow or a visual
explanation if a product mechanism is unavailable; do not claim that every
surface supports it.

## Failure, Reproducibility, and Fallback Strategy

Keep distinct:

- **Product variance:** a reasonable alternate Agent path; explain it if it
  still answers the Story question.
- **Demo environment failure:** network, dependency, permission, or tool
  failure; switch to prepared evidence.
- **Repository design failure:** the task, module boundary, or expected
  result is unclear; revise the candidate.
- **Story-assumption failure:** observed behavior does not support the
  expected engineering point; revise the Demo/Story relationship.
- **Product capability mismatch:** actual behavior differs from research;
  recheck the official source and selected environment.

For each run, capture the repository commit/state, prompt, working directory,
runtime/tool versions, build/test configuration, deterministic input,
Harness/instruction state, model/interface when available, observed output,
verification, and limitations. This reduces setup variance; it does not
guarantee an identical Agent response.

Fallback order: reasonable alternate path → brief task-specific follow-up →
captured result/diff → recording or visual. Do not hide failure or use a
fallback as evidence that a Live run succeeded.

## Time Budget

The existing Curriculum allots 73 instructor Demo minutes across six Acts.
This plan does not add minutes. Anchor windows consume 40 minutes; supporting
examples, verification visuals, and the recap remain inside the other 33
minutes. Detailed reconciliation is in `plan/DEMO_MATRIX.md`.

Setup performed before class is operational preparation, not instructional
time. Any on-screen setup, execution, observation, interpretation, and
transition during class must fit the current Curriculum section's Demo slot.
Final timing depends on repository and rehearsal evidence. If a slot is at
risk, move a Demo to Recorded/Captured, reduce a supporting example, or remove
duplication before cutting a Story-critical explanation.

## Research Dependencies and Open Questions

| Area | STEP 06 disposition | Existing governance |
|---|---|---|
| Repository language/domain/source/strategy/location | RESOLVED: Python synthetic image-processing CLI, separate purpose-built repository, local sibling path `../ai-dev-training-demo` | OQ-001 via DEC-0011/DEC-0012 |
| Real/internal example and usage permission | NOT REQUIRED for selected synthetic local data; revisit only if direction changes | OQ-002, OQ-014 |
| Environment roles and delivery strategy | macOS is the current development/partial automated-validation host; target audience is primarily Windows-based, with specifics open; OS-independent design; Anchor HYBRID | DEC-0016; OQ-003/OQ-005 for learner details and final rehearsal |
| Account, current product behavior, permissions, Live availability | OPEN for verification before product-dependent Demos | OQ-005 |
| Build/Test/Benchmark commands and actual outcomes | Direction specified; commands/results await STEP 07 implementation and validation | OQ-007 |
| Repository-owned performance Skill | TRIAL-008 PASS for explicit discovery/loading in Codex CLI 0.154.0; Desktop behavior unverified. Subagent and Memory remain conditional. | OQ-005, OQ-008 |
| Stale scenario, evaluation criteria, regression | PARTIALLY RESOLVED: candidates proposed; recurrence and effects need a fair controlled state or observed evidence | OQ-009 |
| Operational Harness/Loop wording | Continue using approved Curriculum language; confirm scope before final teaching claims | OQ-011 |
| Training repository as Meta Example | NOT USED in STEP 06; revisit only if later actual history is relevant | OQ-013 |

No new OQ is created. Keep the existing OQs in
`plan/DECISIONS.md`; this table records their STEP 06 disposition.

## Architecture Quality Audit

The implementation-sensitive rows below reflect current STEP 07 status after
the STATE-00 build. Tables explicitly labeled STEP 06 remain point-in-time
planning audits.

| Area | Result | Boundary |
|---|---|---|
| Story connection and continuous Project | PARTIAL | STATE-00 and STATE-00-FIXED exist; TRIAL-001 exploration and TRIAL-002 crop fix were observed via CLI. Later states and connected Desktop Anchor trials remain pending. |
| Beginner readability and advanced insight | NEEDS STEP 07 VALIDATION | Cold-read and projector review remain. |
| Build, Test, Benchmark, Verification | PARTIAL | STATE-00 build, CLI, tests, and reset were checked; STATE-00-FIXED focused/full tests, crop smoke, and fresh-tag test reset passed. Benchmark and later-state checks remain unvalidated. |
| Stale cause, evaluation, regression | PASS as a controlled scenario design | Do not describe recurrence or improvement as real without records. |
| Reproducibility and fallback | PARTIAL | STATE-00 and STATE-00-FIXED refs, environment, fixture, and Test reset are recorded; later-state commands and Desktop Demo captures remain TBD. |
| Product capability fit | PARTIAL | TRIAL-001/002 are bounded Codex CLI observations; do not infer Desktop, account, or feature support from them. |
| Claims and data integrity | PASS as constraints | Exact Demo evidence will be bounded by later runs. |

## Implementation Readiness Audit — STEP 06 §§101–110

This is a point-in-time audit of readiness at STEP 06 close. Its statements
that defer details to STEP 07 are historical; current STATE-00 outcomes are
recorded in the architecture status and repository evidence sections.

The following audit asks whether an implementation team can understand the
candidate without inventing its Story. “Specified” means the design direction
is explicit; it does not mean the repository or behavior has been tested.

| # | Implementation question | Current answer | Readiness / remaining evidence |
|---:|---|---|---|
| 1 | What Project should be built and where? | A separate purpose-built Python Synthetic Image Processing CLI named `ai-dev-training-demo`, at the sibling path `../ai-dev-training-demo`. | Repository direction accepted by DEC-0011; local path accepted by DEC-0012. |
| 2 | Why this Domain and Language? | Simple synthetic grayscale processing is familiar to C++ Vision developers; Python reduces code/repository comprehension cost. | User-selected; this is not a claim that Python is better for AI. |
| 3 | What is the initial architecture? | Conceptual path: input → loader → normalize → filter → resize/transform → statistics → output. | Exact module structure and dependency choices remain STEP 07 work. |
| 4 | What Bug should exist? | Candidate half-open crop boundary includes `x_end` when it should be excluded. | Planning candidate; settle exact operation, contract, and fixture in STEP 07. |
| 5 | What Performance bottleneck should exist? | DEC-0015 originally selected repeated source-column coordinate computation in `resize_nearest`; DEC-0019 supersedes that product-change target with the re-investigated `image_statistics` row-reduction candidate for STATE-04-PERF. | Keep the optimization separate from the benchmark and reusable workflow; do not teach Python/NumPy optimization or vectorization. The resize benchmark remains an unchanged supporting check. |
| 6 | What verifies correctness? | Boundary unit regression, normalization/aggregation unit checks, end-to-end integration, and output-equivalence checks. | Coverage direction specified; exact runnable commands and outcomes need Trial. |
| 7 | What measures Performance? | Same host/runtime/input/procedure before and after; correctness first; repeated observations and a robust summary. | Method specified; workload size, repetitions, signal, and benchmark command need Trial. |
| 8 | When does `AGENTS.md` appear? | At STATE-01, after repeated Project facts have made reuse valuable. | Specified; verify only stable, confirmed instructions enter it. |
| 9 | Why and how does Context grow? | Per user direction and DEC-0013, STATE-02 adds a small, verified set of recurring architecture, image-contract, test, and compatibility facts to root `AGENTS.md` before Context Separation. It does not manufacture filler or model failure. | Candidate implemented, validated, and observed in TRIAL-004; evidence and claim limits are recorded in `plan/DEMO_MATRIX.md`. |
| 10 | When is Context separated? | STATE-03 separates concise core rules from task-specific information and routes to maintained sources. | Story and mechanism specified; target-surface retrieval behavior is conditional. |
| 11 | What repeatable Workflow is selected? | `.agents/skills/graypipe-performance/SKILL.md`: baseline, inspect, plan, implement, Test, benchmark, compare, review. | DEC-0017 selects this as the sole repository-owned procedure; TRIAL-008 observed explicit discovery/loading on Codex CLI 0.154.0, while Desktop remains unverified. |
| 12 | What complex Task may use Subagents? | One performance investigation can split into independent architecture, measurement, and test questions, followed by main-agent synthesis. | Candidate A/B/C review found no current need; DEC-0018 defers Subagents and DEMO-07 until a real task crosses the complexity gate. |
| 13 | What Knowledge may be Durable? | A verified synthetic image workload limitation/provenance fact with source, scope, and refresh trigger. | The §§181–190 audit found the facts accessible in scripts/docs and no rediscovery cost; no Memory candidate currently qualifies. |
| 14 | How does the Project evolve? | Correct a bounded image-operation Bug; add Context and a reusable procedure; optimize separately; later change the Test layout/procedure for a documented need. | Candidate transitions specified below; validate each change in STEP 07. |
| 15 | Which Harness artifact becomes stale? | The formerly correct repository-owned performance Skill retains a previous Test path/procedure after the Project change. | Keep exactly one stale artifact and demonstrate prior correctness/later staleness. |
| 16 | How is Failure observed? | The stale Skill produces a visible failure for its outdated procedure. | Exact layout/runner and failure evidence are STEP 07 validation items. |
| 17 | Which Layer is changed? | Repair the Skill that contains the stale Test procedure; do not duplicate its command in `AGENTS.md`. | Cause-to-layer rule specified; observed evidence must support it. |
| 18 | What Evaluation is performed? | EVAL-01 bug fix, EVAL-02 performance, EVAL-03 docs-only task, EVAL-04 small refactor. | Tasks and evidence are specified in `DEMO_REPOSITORY_SPEC.md`; validate against the built Project. |
| 19 | Which Regression is checked? | EVAL-03/04 should remain appropriately scoped and must not inherit an overbroad “always benchmark” rule. | Negative checks specified; capture results after the Harness change. |
| 20 | How is every State restored? | Select its recorded commit/tag in a fresh or disposable checkout, prepare pinned dependencies, and confirm known Test/Benchmark inputs. | Restoration contract specified; actual refs, reset instructions, dependency identifiers, and known outcomes are implementation outputs. |

### Ambiguity, Failure Cause, and Verification Checks

| Audit | Result | Required control |
|---|---|---|
| Implementation ambiguity | STATE-00 implementation choices are recorded. The deterministic resize benchmark workload and three-invocation baseline are recorded in `plan/DEMO_MATRIX.md`; later-state and product details remain conditional. | Resolve later-state details and validate product-dependent behavior in STEP 07; do not invent Agent behavior. |
| Failure causality | The primary stale-state cause is one outdated repository-owned Skill Test procedure. | Keep current Project docs, `AGENTS.md`, runtime, dependencies, permissions, and environment correct; prove the old Skill worked before the Project change. |
| Initial Bug verification | TRIAL-002 reproduced the crop-boundary regression, made a one-line isolated fix, and passed focused/full tests plus a CLI smoke check; the change is recorded as STATE-00-FIXED. | Preserve the recorded Test, smoke, tag-reset, and diff evidence; Desktop behavior remains unvalidated. |
| Performance verification | Baseline → bounded code change → correctness/output equality → repeated benchmark → comparison. | Keep Bug and Performance changes separate and record host, runtime, workload, procedure, and observations. |
| Reusable workflow verification | Bounded task → repository-owned Skill → task-appropriate checks. | Confirm discovery/loading on the selected surface before claiming product-specific behavior. |
| Harness-change verification | Visible stale-Skill failure → evidence-based cause → Skill-only fix → same-task rerun → representative Evaluation and Regression. | Capture the same-task rerun and use EVAL-03/04 as adjacent-task checks; report omissions and limits rather than asserting success. |

### Historical STEP06 State Transition and Story Integrity Review

This readiness review predates STATE-04-PERF and DEC-0021. Its STATE-05
through STATE-11 transitions are superseded proposal history; the current
Product and ACT 4 paths are recorded in the STEP07 sections below.

The detailed state table is in `plan/DEMO_REPOSITORY_SPEC.md`. The main
diffs are deliberately separated:

| Transition | Principal change | Audit result |
|---|---|---|
| STATE-00 → STATE-00-FIXED | Fix only the bounded image-operation boundary Bug and its regression. | Separated from Harness changes. |
| STATE-00-FIXED → STATE-01 | Add concise `AGENTS.md`; no Product code change. | Context reuse follows the Bug-fix success. |
| STATE-01 → STATE-02 | Add a small set of verified recurring facts to root `AGENTS.md`; keep product code and other Harness components unchanged. | Context growth is labeled and user-directed; do not stage model failure or token-count effects. |
| STATE-02 → STATE-03 | Separate core instructions from on-demand Project detail and route to maintained sources. | Relevance responds to visible accumulation; no separation happens early. |
| STATE-03 → STATE-04 | Add `.agents/skills/graypipe-performance/SKILL.md` as the sole reusable performance procedure. | Process is separated from Project facts and task-specific Prompts. |
| STATE-04 → STATE-04-PERF | Apply the re-investigated `image_statistics` row-reduction change selected by DEC-0019 and record evidence. | Product change is separate from adding the Skill; the pre-existing resize benchmark remains a supporting check. |
| Former STATE-04-PERF → STATE-05/06 | Earlier conditional role-separation and durable-knowledge proposals. | Superseded as Product States; DEC-0018 defers Subagents and Memory is not justified. |
| Former STATE-07 → STATE-11 | Earlier proposed stale-Workflow Product change, failure, repair, and regression sequence. | Superseded by DEC-0020/DEC-0021; only conceptual DEMO-04A and observed Meta DEMO-04B remain. |

The designed history remains an educational scenario, not production history.
Do not add fake rules, hide project instructions, force an Agent error, or
present controlled repetition as an observed incident. The details preserve
the Curriculum's problem-driven transitions and do not add instructional
minutes.

### Scope Freeze Candidate

**Planning direction is frozen by DEC-0011/DEC-0012.** The initial STATE-00
baseline is implemented and reset-checked, with the planned crop defect
visible in its regression test. TRIAL-002's bounded fix was revalidated,
committed as `6dab644`, and tagged `STATE-00-FIXED`; the baseline tag is
unchanged. Later states, benchmark behavior, stale Skill, Desktop Agent
behavior, and current product support still need their own STEP 07
implementation/validation evidence.

### STEP 07 Handoff Package Audit

| Required handoff input | Current artifact / status |
|---|---|
| Demo Repository specification | `plan/DEMO_REPOSITORY_SPEC.md` — selected direction, STATE-00 baseline, and verified STATE-00-FIXED evidence recorded; STATE-01 is planned. |
| State Model or equivalent | State table and reproduction contract in `plan/DEMO_REPOSITORY_SPEC.md` — STATE-00/STATE-00-FIXED commit/tags and test resets recorded; later refs do not exist yet. |
| Demo Architecture | `plan/DEMO_ARCHITECTURE.md` — candidate architecture and gates. |
| Demo Matrix | `plan/DEMO_MATRIX.md` — timing and Beat mapping; state references must match this revision. |
| Runbook specification | `plan/DEMO_RUNBOOK_SPEC.md` — schema only; no runnable Runbooks. |
| Related accepted Decisions | `DEC-0011` accepts the repository/domain/delivery direction; `DEC-0012` selects its sibling path; `DEC-0016` clarifies environment roles; `DEC-0010` is SUPERSEDED. Anchor roles in `DEC-0008` remain PROPOSED. |
| Product capability constraints | `references/CLAIMS.md` and `references/product/CAPABILITY_MATRIX.md`; current account/surface behavior remains conditional under OQ-005. |
| Story Beat references | `plan/STORY_BEATS.md` and `plan/TRANSITIONS.md`, especially BEAT-002–007, 008–017, 020–022, 023–032, and 039–057. |

**Handoff status at STEP 06 close:** the package recorded the accepted
repository direction, selected sibling path, Story rationale, proposed
evolution, and later validation criteria. STEP 07 has since started; the
STATE-00 and STATE-00-FIXED implementation and observed results, STATE-01
record, and the STATE-02 candidate/TRIAL-004 evidence are recorded in
`plan/DEMO_REPOSITORY_SPEC.md` and `plan/DEMO_MATRIX.md`. STATE-02 is recorded
at commit `55c045523ed1409449d7eea5b0d873983fe101b6` and tag `STATE-02`; it
was not pushed. STATE-03 is recorded at commit
`f3e2e37b1454e28c5de4c44682ebd49378ebae4b` and tag `STATE-03`; it was not
pushed. `DEC-0014` is ACCEPTED. Performance candidate investigation and
benchmark baseline preparation under STEP 07 §§94–110 are recorded in the
Matrix, with `DEC-0015` accepted. Product-dependent Desktop Agent trials
remain pending. Do not redesign the Story as part of implementation.

## STEP 06 Completion Audit — §§111–120

### §111 — Meta Example Feasibility

The actual-history audit is recorded under OQ-013 in `plan/DECISIONS.md`.
`AGENTS.md` is currently a 15-line router, while the repository has not
recorded the repeated friction, production failure, or before/after quality
evidence needed to claim a Training Production Harness improvement.

| Candidate | Finding |
|---|---|
| Oversized `AGENTS.md`, repeated Project instruction, repeated Decision lookup | NOT OBSERVED as actual friction. The router is 15 lines; no repeated task/lookup event is recorded. |
| Context separation and routing | OBSERVED as a practice: `AGENTS.md` routes work to separate plan sources and the route is used. No prior Context failure or measured benefit is recorded, so this is not a complete Problem → Solution example. |
| Research Context overload and a Skill/Subagent/Memory becoming necessary | TOO EARLY; no downstream production event establishes the need. |
| Distinct Review passes | OBSERVED across Curriculum, Story, and Demo readiness. They were staged with different scopes; this does not show that the same Review Prompt was repeatedly rewritten. |
| Same Review Prompt rewritten, Research/Slide mismatch, Source-of-Truth Drift | NOT OBSERVED. The readiness review clarified one-time specification ambiguities, not a recorded invariant conflict or repeated drift. |
| Feedback Loop improved production quality | TOO EARLY. A plan review produced specification edits, but no implemented Demo or measured production-quality outcome exists. |

**Disposition:** do not use the repository as a factual Meta Example in this
training. This current-use decision does not preclude later authentic history,
does not change accepted `DEC-0005`, and does not replace the primary Demo.

### §112 — Primary Demo and Meta Example Roles

The primary Demo is the user-selected separate, purpose-built Python
Synthetic Image Processing CLI repository that carries the `Chatbot → Prompt
→ Context → Harness → Loop` evolution. The training repository could only be
a supporting illustration of actual production work; it is currently **NOT
USED**. The Demo need not cover every Story Beat and must not motivate
artificial Skills, Subagents, Memory, or failures.

### §113 — Training Production Harness Trigger Review

The STEP 02 triggers are evaluation signals, not authorization to build a
component. The project record through STEP 06 shows:

| Trigger | Current finding | Evidence / limit |
|---|---|---|
| A. Same Review Prompt repeatedly rewritten | NOT OBSERVED | No repeated rewrite caused by production friction is recorded. Sequential, differently scoped plan instructions do not establish this trigger. |
| B. Research and Slide fact-checking repeatedly diverge | TOO EARLY | No Slide Map or Slide content has been produced. |
| C. One Agent carries Curriculum, Demo, Slide, and Research with excessive Context | TOO EARLY | No observed overload or coordination failure is recorded; Slide work has not started. |
| D. New sessions repeatedly rediscover the same project facts | NOT OBSERVED | No repeated rediscovery event is recorded. |
| E. The same planning Drift recurs | NOT OBSERVED | One readiness pass clarified candidate-state and workflow details; recurrence of the same Drift is not recorded. |

Do not add a Skill, Subagent, Memory system, automated Evaluation, or other
Production Harness component on this evidence. If later friction occurs,
record the event, recurrence, cause, expected benefit, and upkeep or
coordination cost before proposing a response.

### §§114–115 — Curriculum Time and Story Recheck

`plan/DEMO_MATRIX.md` reconciles every Act to the existing 73-minute Demo
budget: ACT 0 8, ACT 1 8, ACT 2 13, ACT 3 20, ACT 4 22, and ACT 5 2 minutes.
The Demo plan adds no instructional time. ACT 3 and ACT 4 have no Demo-slot
buffer, so secondary role, retained-knowledge, reveal, loop-model, and
regression material stays captured or visual where appropriate. Longer
candidate Agent runs require rehearsal and a prepared Hybrid/Captured path.

The Story order remains problem-led and is expressed by Act/Beat rather than
Demo ID: repository exploration, Prompt, repeated Project Context, Context
routing, reusable workflow, optional roles/retained knowledge and Harness
reveal, stale Harness, then cause/evaluation/regression and retrospective.
Subagents, Skills, and Memory do not move ahead of the Problems that motivate
them. Time figures are proposed allocations, not selected or rehearsed
durations.

### §116 — Product Volatility

Per-Demo LOW/MEDIUM/HIGH estimates, rationale, and captured alternatives are
in `plan/DEMO_MATRIX.md`. HIGH Anchor candidates DEMO-01, DEMO-02, DEMO-04A,
and DEMO-04B require a current-state check against official OpenAI material
and the selected account/surface before Trial, plus a rehearsed fallback and
captured alternative. This is a future validation requirement, not a claim
that a product feature is currently available. Keep the Engineering Insight
usable if interface or product naming changes.

### §117 — STEP 07 Demo Validation Order

After user decisions and Demo implementation, validate each selected Demo in
this sequence:

1. Repository functional validation.
2. Build validation.
3. Test validation.
4. Benchmark validation.
5. State reset validation.
6. Agent Demo trial.
7. Success-criteria evaluation.
8. Timing measurement.
9. Variance observation.
10. Fallback validation.

Record actual outputs and limitations at each step. A difference from the
specification or Story expectation requires cause analysis; do not silently
treat it as a pass.

### §118 — Demo Acceptance Status

After STEP 07 validation, assign each Demo exactly one final status:

| Status | Acceptance meaning |
|---|---|
| VALIDATED LIVE | A rehearsed Live run met bounded success criteria in the selected environment. |
| VALIDATED HYBRID | The Live path and its prepared fallback were both checked. |
| VALIDATED RECORDED | A reviewed recording is suitable because Live risk is too high. |
| VALIDATED CAPTURED | Reviewed output, diff, log, or result is the suitable evidence. |
| VISUAL ONLY | A reviewed visual communicates the point more clearly than execution. |
| REJECTED | Teaching value or reproducibility is insufficient; preserve the reason. |

Until STEP 07 evidence exists, Matrix entries remain CANDIDATE or BLOCKED;
design review alone cannot grant a final acceptance status.

### §119 — STEP 06 Result

#### 1. Status

**COMPLETE WITH OPEN QUESTIONS (planning scope).** The user selected the
repository/domain, primary implementation environment, and delivery
strategy. No implementation, Trial, current product-account check, or Demo
result has been performed; these remain downstream validation items.

#### 2. Files Created

- `plan/DEMO_ARCHITECTURE.md`
- `plan/DEMO_REPOSITORY_SPEC.md`
- `plan/DEMO_MATRIX.md`
- `plan/DEMO_RUNBOOK_SPEC.md`

These are specifications and candidate plans; they are not the Demo
repository or executable Runbooks.

#### 3. Final Repository Direction at STEP 06 Close

| Field | Selected direction |
|---|---|
| Language | Python, to reduce Code and Repository comprehension cost; not because Python is better for AI than C++. |
| Domain | Synthetic Image Processing CLI with simple grayscale operations and basic statistics; no advanced Vision algorithms. |
| Strategy / location | Separate purpose-built `ai-dev-training-demo` at the sibling path `../ai-dev-training-demo`, selected by DEC-0011/DEC-0012. |
| Status at STEP 06 close | User-selected; implementation had not started at that checkpoint. STATE-00 implementation evidence is recorded in the later STEP 07 update. |

#### 4. Candidate Comparison

The earlier comparison considered C++ image processing, Python telemetry
(DEC-0010), and TypeScript event processing; DEC-0011 now records the selected
Python image-processing direction. Its domain is familiar to many C++ Vision
developers while Python reduces code/repository comprehension cost. DEC-0010
is SUPERSEDED; telemetry is not the selected direction. C++ code is not part
of the Demo repository; transfer bridges belong in future Curriculum/Slides.

#### 5. Repository Architecture

At STEP 06 close, the conceptual pipeline was input image → loader → normalize
→ filter → resize/transform → statistics → output. Exact module boundaries,
representation, dependencies, and setup were intentionally left to STEP 07;
the implemented STATE-00 choices are recorded in
`plan/DEMO_REPOSITORY_SPEC.md`.

#### 6. State Model (Historical STEP 06 Snapshot)

At STEP 06 close, the proposed sequence was STATE-00 (candidate image-operation boundary Bug) →
STATE-00-FIXED → STATE-01 through STATE-07 (Context, reusable workflow,
measured Performance, optional roles and knowledge, working Harness) →
STATE-08/09 (documented Project Test change and visible stale-workflow
failure) → STATE-10/11 (evidence-backed workflow repair, Evaluation, and
Regression). State commits, reset commands, and actual outcomes did not exist
at that planning checkpoint; STATE-00 was subsequently implemented and
reset-checked during STEP 07.

#### 7. Anchor Demos

| Anchor | Proposed mode | Time | Execution risk | Teaching point |
|---|---|---:|---|---|
| DEMO-01: read-only repository exploration | HYBRID | 8 min | MEDIUM | Let the Agent find and trace relevant repository context; prepared capture and fallback required. |
| DEMO-02: Project Context | HYBRID | 8 min | MEDIUM | Reuse verified project guidance rather than repeat it per task; prepared capture and fallback required. |
| DEMO-03: reusable workflow | HYBRID | 8 min | MEDIUM–HIGH | Make the repository-owned Skill procedure and its Verification visible; CLI discovery/loading passed in TRIAL-008, and Desktop rehearsal remains. |
| DEMO-04A/B: stale Harness and improvement Loop | HYBRID (not Live-only) | 16 min total | HIGH | Trace changed Project → stale Skill → cause → scoped repair → evaluation/regression; prepared capture and fallback required. |

Anchor roles remain proposed under DEC-0008; the HYBRID default and fallback
requirement are accepted by DEC-0011. Supporting evidence is mapped
separately in the Demo Matrix.

#### 8. Supporting Demos

Prompt Before/After; Context growth/routing; optional Subagent comparison;
durable repository knowledge; optional ACT 4 VIS-11 time/freshness case;
verification/Harness reveal; regression; and the ACT 5 evolution visual.
Role, Memory, and product-feature examples may be captured, visual, omitted,
or changed after need and availability checks. Memory staleness does not join
the primary stale-workflow Failure chain. VIS-11 uses existing ACT 4 Case time
and adds no Demo minutes.

#### 9. Primary Stale Harness Scenario

A documented Project Test-layout or procedure change leaves one previously
correct performance workflow stale. The exact runner and commands are not
selected. Current Project instructions and environment must be correct; the
stale procedure must be the sole cause of a visible failure. Diagnose first,
then change only the stale reusable workflow. Label the controlled history
as training-designed, not real project history.

#### 10. Evaluation / Regression

Use EVAL-01 bug-fix evidence, EVAL-02 performance baseline and comparison,
EVAL-04 scoped refactor, and EVAL-03 documentation-only task. After the
workflow repair, rerun the same task and use EVAL-03/04 to check against an
overbroad rule such as always running the full benchmark. No outcome is
claimed until captured.

#### 11. Demo Time

**73 minutes proposed**, exactly matching the Curriculum: ACT 0 8, ACT 1 8,
ACT 2 13, ACT 3 20, ACT 4 22, ACT 5 2. ACT 3/4 have zero Demo-slot buffer;
supporting content therefore needs captured/visual treatment if rehearsal
shows overload. No net time is added.

#### 12. Meta Example

**NOT USED as a learner-facing STEP 06 example.** OQ-013 records that
Context routing and distinct review passes are OBSERVED, while the same-prompt
friction and Source-of-Truth Drift are NOT OBSERVED. Temporal/product
outcomes and any measured production-quality improvement are TOO EARLY. Do
not present the actual planning activity as an evaluated quality gain.

#### 13. Decisions

At the original STEP 06 decision point, `DEC-0011` accepted the user's
repository, then-current environment, and delivery choices; DEC-0016 later
clarifies the environment role. DEC-0010 is SUPERSEDED. DEC-0005 is
unchanged. At STEP 06 close, DEC-0007 and DEC-0008 retained their then-current
PROPOSED statuses; DEC-0007 was accepted by the user on 2026-10-02, while
DEC-0008 remains PROPOSED.
The Meta Example disposition is recorded under OQ-013 and can be revisited
only if later authentic evidence appears.

#### 14. Open Questions

At STEP 06 close, OQ-001's repository direction and local sibling path were
resolved by DEC-0011/DEC-0012, while implementation details remained for
STEP 07. STATE-00 implementation details and evidence are now recorded in
`plan/DEMO_REPOSITORY_SPEC.md`; later states remain open.
OQ-003 is resolved for the planned environment/delivery strategy; exact
learner setup and presentation-surface checks remain open. OQ-004's aggregate
Curriculum approval is resolved by DEC-0007; Q&A and mode placement is STEP 08
work. Remaining questions include OQ-005 (current product and account checks),
OQ-007 (later-state verification and
benchmark examples), OQ-008 (Skill discovery/loading and optional
Subagent/Memory mechanisms), OQ-009 (Evaluation evidence),
OQ-011 (course wording), and OQ-013 (future authentic Meta Example).
OQ-002/OQ-014 do not block the selected synthetic-local-data direction;
revisit only if internal/company sources or claims are introduced.

#### 15. User Decisions Recorded

| Decision | User-selected direction | Deferred check |
|---|---|---|---|
| Repository source, language, domain, and location | Separate purpose-built Python Synthetic Image Processing CLI with synthetic local data at `../ai-dev-training-demo`. | STATE-00 package and module structure and the benchmark preparation commit are recorded; later states and product/account verification remain in STEP 07. |
| Rationale and audience transfer | Python lowers code/repository comprehension cost; C++ Vision practices appear as future Curriculum/Slide bridges, not Demo code. | Confirm final bridge presentation during Curriculum/Slide work. |
| Environment roles and delivery | macOS is the current development/partial automated-validation host; learners are primarily Windows-based; exact WSL/native Windows, IDE, shell, and Codex interface remain open; Demo is OS-independent where practical. Anchor HYBRID, ACT 4 not Live-only, supporting Demos may be RECORDED/CAPTURED/VISUAL. | DEC-0016; confirm product/account support and Final Anchor presentation path under OQ-003/OQ-005. |
| STATE-02 Context Growth order | Grow verified recurring Project context in root `AGENTS.md`; defer Context Separation to STATE-03. | Explicit user direction in STEP 07 §§54–60; recorded as DEC-0013. Select facts from repository evidence without filler or a line-count target. |

#### 16. STEP 07 Readiness — historical pre-STATE-04-PERF checkpoint

At this checkpoint, STEP 07 was in progress and TRIAL-006 was PARTIAL with its
change isolated. The repository was at the DEC-0012 sibling path. `DEC-0015`
selected repeated source-column coordinate computation in `resize_nearest`
as the primary performance scenario; the later user instruction and DEC-0019
supersede that target specifically for the STATE-04-PERF product change. The
deterministic standard-library benchmark is committed after
the STATE-03 tag as preparation commit
`cef7a27697d38667530fe028e7c2a1ed4703714b`; it does not create a named State.
TRIAL-006 ran in a detached worktree with Codex CLI 0.154.0 and model
`gpt-5.6-sol`. The requested baseline/investigate/plan/implement/test/
benchmark/compare/review sequence was observed and produced a 33.5 ms/call
median after a 144.2 ms/call baseline, with matching correctness hashes.
Global Skills also loaded and added an evaluator, so the Trial is PARTIAL and
does not isolate the Prompt's effect. Its one-file diff remains uncommitted
in `/tmp/ai-dev-training-demo-trial-006-20260929`; the original Demo
repository has no performance change or STATE-04. The §§111–120 checkpoint
was **READY TO DESIGN SECOND PERFORMANCE TASK**.
`STATE-01` remains
at commit `14baf81746a981d7cd96b7a014ea06f28c3dd6b4` and tag `STATE-01`.
`STATE-02` is at commit `55c045523ed1409449d7eea5b0d873983fe101b6` and tag
`STATE-02`; its 11 tests, CLI smoke, and diff check passed before commit.
`STATE-03` is recorded at commit
`f3e2e37b1454e28c5de4c44682ebd49378ebae4b` and tag `STATE-03`; its full
tests, CLI smoke, and diff check passed before commit. No Demo remote is
configured, so no push was performed. The STATE-02/03 evidence is in
`plan/DEMO_MATRIX.md`; `DEC-0013`, `DEC-0014`, and `DEC-0015` are accepted.
Performance candidate, benchmark, and TRIAL-006 evidence from STEP 07
§§94–120 is recorded in the Matrix.
Final presentation-interface/account behavior remains subject to OQ-003/OQ-005;
the Final Anchor rehearsal is deferred to Final Demo Rehearsal.

The §§121–130 environment audit and DEC-0016 update are recorded in
`plan/DEMO_MATRIX.md`. TRIAL-006's local correctness and measurement evidence
remains valid for the recorded host and workload; its Prompt-only attribution
is PARTIAL because global Skills and plugin hooks were present. OQ-015 is
resolved for current scope: global Harness influence is a known limitation,
not a blocker. The project is **READY TO DESIGN / RUN SECOND PERFORMANCE
TASK**; `normalize` constant precomputation remains the candidate. Record
global Harness components loaded or observed in a future CLI Trial and mark
attribution PARTIAL if needed. No dedicated macOS user, global configuration
change, Skill, STATE-04, or second Trial was created/run during this document
update. The Final Anchor is revalidated during Final Demo Rehearsal in the
actual presentation interface under OQ-003/OQ-005; consider Windows if it is
confirmed as the actual training environment.

### §120 — Completion Condition Audit (Historical STEP06 Snapshot)

`PASS — specified` means the planning artifact is present, not that a Demo
was executed. STEP 07 validation items prevent implementation readiness, but
they do not undo completion of the STEP 06 planning scope after the user has
resolved its direction gates. An unapproved role/design choice remains open.

| # | Completion condition | Result |
|---:|---|---|
| 1 | Demo Architecture is based on the Story. | PASS — specified; Story Beat links are present. |
| 2 | Primary repository candidates were compared. | PASS — candidates and trade-offs are recorded; Python synthetic image processing is selected. |
| 3 | Language/domain is chosen or a clear user Decision Gate remains. | PASS — user selection accepted in DEC-0011. |
| 4 | Repository is close to domain-neutral. | PASS — simple synthetic grayscale operations are selected; cold-read validation remains for STEP 07. |
| 5 | Build/Test/Benchmark directions are defined. | PASS — purpose and evidence controls specified; exact tools/commands remain STEP 07 work. |
| 6 | Initial Bug is defined. | PASS as candidate — crop-boundary defect specified; exact contract and observed test remain STEP 07 work. |
| 7 | Performance scenario is defined. | PASS as candidate — repeated pixel work/allocation/duplicate normalization/redundant transform; select measurable case from implementation evidence. |
| 8 | `AGENTS.md` first-success scenario is defined. | PASS — specified; product behavior needs Trial. |
| 9 | Context growth has an actual reason. | PASS — the user-directed, repository-sourced STATE-02 candidate passed one bounded Codex CLI relevance Trial; no model failure or token threshold is claimed. |
| 10 | Context-separation scenario is defined. | PASS — specified; retrieval behavior is conditional. |
| 11 | Reusable-workflow scenario is defined. | PASS — DEC-0017 selects the repository-owned Skill; TRIAL-008 observed explicit discovery/loading in Codex CLI 0.154.0, with Desktop still unverified. |
| 12 | Subagent scenario is based on actual complexity. | PASS WITH CURRENT DEFERRAL — DEC-0018 finds one Agent sufficient at STATE-04; keep only a future visual/captured conceptual case if the gate later passes. |
| 13 | Durable-knowledge scenario is defined. | CONDITIONAL — the current workload-fact candidate is already available from its sources and does not pass the Memory gate. |
| 14 | Memory staleness arises through time. | DEFERRED — no Memory artifact or qualifying durable fact exists; any future staleness illustration remains outside the primary stale-workflow chain. |
| 15 | A working Harness state exists. | STEP 07 IMPLEMENTATION — STATE-07 is specified but not built. |
| 16 | Project evolution is defined. | PASS — specified sequence; plausibility requires Trial. |
| 17 | Primary stale Harness scenario is clear. | PASS — specified; old command behavior needs Trial. |
| 18 | Failure cause can be traced to evidence. | PASS — sole stale Skill is isolated by design; actual failure evidence needs Trial. |
| 19 | Correct-layer change is possible. | PASS — update only the implicated Skill. |
| 20 | Evaluation task set is defined. | PASS — EVAL-01 through EVAL-04; outputs need Trial. |
| 21 | Regression scenario is defined. | PASS — EVAL-03/04 check for overbroad rules; outcome needs Trial. |
| 22 | Repository State Model exists. | PASS — proposed STATE-00 to STATE-11 table. |
| 23 | State reset strategy exists. | PASS — fresh/disposable checkout contract; real refs and commands need implementation. |
| 24 | Anchor Demo is selected. | OPEN DESIGN CHOICE — four roles remain proposed under DEC-0008; DEC-0011 accepts HYBRID as the Anchor default. |
| 25 | LIVE/RECORDED/CAPTURED/VISUAL modes are distinguished. | PASS — accepted HYBRID Anchor strategy plus supporting RECORDED/CAPTURED/VISUAL options. |
| 26 | Every Anchor has a fallback. | PASS as requirement — each Story-critical Anchor requires prepared capture, expected result, and fallback; prepare/rehearse in STEP 07. |
| 27 | Demo time matches the Curriculum. | PASS — 73 minutes, exact per-Act reconciliation. |
| 28 | Failure is not unfairly manipulated. | PASS — controlled states and observed failures must be labeled separately. |
| 29 | Success is not overstated. | PASS — bounded criteria and limits are required. |
| 30 | Product capability matches STEP 03 Research. | STEP 07 VALIDATION — recheck current account/surface behavior under OQ-005. |
| 31 | Training and Demo Harnesses are separate. | PASS — explicitly separate repositories and purposes. |
| 32 | Meta Example is not asserted without evidence. | PASS — audit says NOT USED for STEP 06. |
| 33 | Demo Repository had not yet been implemented at STEP 06 close. | PASS — no educational repository or state commits existed at that historical checkpoint. |
| 34 | Slide Map is not created. | PASS — none created. |
| 35 | PPT is not created. | PASS — none created. |

**§120 result:** the repository, environment, and delivery direction gates
are resolved; required planning artifacts and their boundaries are recorded.
The overall STEP 06 planning status is **COMPLETE WITH OPEN QUESTIONS**.
Anchor-role selection under DEC-0008 and implementation/validation items
remained open at STEP 06 close; STEP 07 has since started as recorded above.

## STEP 06 Gate

Required plan artifacts are present: `DEMO_ARCHITECTURE.md`,
`DEMO_REPOSITORY_SPEC.md`, `DEMO_MATRIX.md`, and `DEMO_RUNBOOK_SPEC.md`.
The specification has been updated from the implementation-readiness audit
and the accepted DEC-0011/DEC-0012. Selected planning direction does not
claim that behavior has been implemented, trialed, or observed.

**Documentation artifact gate:** PASS WITH OPEN QUESTIONS.

**STEP 06 status:** COMPLETE WITH OPEN QUESTIONS. The repository, local
sibling path, environment, and delivery direction are accepted by
DEC-0011/DEC-0012. Do not create the Demo repository, code, or Trial until the
user starts STEP 07. DEC-0008's Anchor roles remain proposed. Current
product/account support and feasibility evidence remain STEP 07 validation
items; do not imply these have been checked.

This STEP does not create the Demo Repository, educational Git states,
Slide Map, final slides, or PPT. It does not start STEP 07.

## STEP 07 STATE-04 and Complex-Task Readiness — 2026-09-30

DEC-0017 selects the repository-owned Codex Skill at
`../ai-dev-training-demo/.agents/skills/graypipe-performance/SKILL.md` as the
sole source for the repeated performance procedure. The older standalone
workflow-document proposal is superseded. The Demo repository now has separate
resize and statistics benchmark preparation commits after the STATE-03 tag;
the statistics baseline is `4ad32b9175055818e89b66e6a44d4e3c8d6fab4b`.

The Skill candidate is present and structurally validated in the Demo working
tree above the benchmark preparation commit. TRIAL-008 passed for explicit
discovery, invocation, instruction-body evidence, and workflow reuse in
Codex CLI 0.154.0. The statistics optimization stayed in the disposable
trial workspace. Detailed measurements, verification, and evidence limits
are in `plan/DEMO_MATRIX.md`.

**STATE-04:** commit `822f1c12c5f602d934a2fd29e48f05bf498b4bfa`, tag
`STATE-04`; the tag points to that commit. Required validation passed. No
remote push was made and the Demo repository has no configured remote.

**Complex-task readiness:** the current repository is deliberately small;
candidate analyses are in `plan/DEMO_MATRIX.md`. No Subagent is justified yet.
Codex Desktop behavior, product-code optimization, and later States remain
open. STEP 07 §§181–190 now records this Subagent decision as `DEC-0018` and
finds Memory **NOT JUSTIFIED YET** at STATE-04. The primary Demo Story fit is
clarified in `plan/STORY_ARCHITECTURE.md`; its conceptual Curriculum Story is
preserved. No `MASTER_PLAN.md` or HARD Invariant changes.

## STEP 07 §§181–190 — Role Separation and Memory Readiness

`DEC-0018` accepts **no Subagent at STATE-04**. Candidates A/B/C each fit a
single Agent, and the current repository does not show enough role-specific
Context or parallel investigation value to outweigh duplicate reads,
coordination, handoff, and integration cost. `DEMO-07` is **DEFERRED — NOT
JUSTIFIED AT STATE-04**: no primary or supporting Live Demo is selected. Keep
only a visual or captured external/conceptual case as a future option if it
still serves ACT 3.

The Trial-history audit found repeated task-relevant reads of facts that are
now accessible in source, configuration, project documentation, Git history,
the repository-owned Skill, or dated Trial evidence. It did not find an
expensive recurrence caused by an unavailable durable fact. The actual
repeated item was the performance workflow, already given a repository-owned
Skill by `DEC-0017`; benchmark observations remain tied to their code path,
input, host, and runtime. Memory is **NOT JUSTIFIED YET**. Keep its source,
scope, and lifecycle distinction in the conceptual/visual Curriculum Story;
do not add an artifact or product Memory mechanism.

The primary Demo can next continue toward the planned project-evolution and
stale-Skill problem after STATE-04-PERF is implemented and validated. This
readiness note does not create a new State, alter the six-hour Curriculum, or
authorize a project change. Detailed audit evidence and candidate
classifications are in `plan/DEMO_MATRIX.md`.

## STEP 07 — §§191–200 STATE-04-PERF Result

`DEC-0019` records the user's selection of the `image_statistics` candidate
for the product transition and supersedes DEC-0015's earlier product-change
target. The latter's resize benchmark and preparation history remain intact.
The code was re-investigated from STATE-04 and the only product file changed
was `src/graypipe/statistics.py`: the flattened pixel list was removed and
row-level built-in reductions now compute the minimum, maximum, and sum.

STATE-04 is commit/tag
`822f1c12c5f602d934a2fd29e48f05bf498b4bfa` / `STATE-04`. The statistics
benchmark was rerun before editing on CPython 3.9.6 / macOS 26.6.2 arm64 with
the same deterministic 1024×768 input, checksum, seven samples, and six-field
correctness guard used after the change. The baseline median was 15.468
ms/call (range 15.014–16.341 ms); the `tracemalloc` peak was 6,675,804 bytes.
After the change, the median was 10.769 ms/call (range 10.042–11.237 ms) and
the peak was 380 bytes. All six fields and the input checksum matched. This
bounded comparison is recorded with every sample and invocation time in
`plan/DEMO_MATRIX.md`.

Focused statistics test 1/1 and the full suite 11/11 passed. Both benchmark
correctness guards and the CLI crop smoke passed. `git diff HEAD^ HEAD
--check` passed and final review found only the intended statistics source
change. Commit `6153b81c0187dd7d82c88bd1817fb683c98eb431`
(`perf(statistics): remove flattened pixel allocation`) carries the product
change; lightweight tag `STATE-04-PERF` points to it while `STATE-04` remains
unchanged. No remote is configured and no push was made.

This is **Working Harness Success** for the bounded task: Project Context,
routing, the repository Skill, benchmarks, and tests together supported an
evidence-backed Product Change. The evidence does not justify Subagents or
Memory, and their absence does not make this Harness incomplete. Preserve the
teaching beat “여기까지는 잘 동작합니다” before investigating what future
Project Evolution could make a previously correct Skill stale. That Project
Evolution, stale Skill, Harness failure, Loop, and STATE-05 have not been
implemented.

## STEP 07 — §§211–220 LOOP EVIDENCE ARCHITECTURE REVIEW (HISTORICAL)

**Checked:** 2026-10-01.

**Status at that review: PROPOSED; not approved or implemented.** The full
evidence assessment is in `plan/DEMO_MATRIX.md`. The user later accepted the
evidence-role split in §§221–230; the current direction is recorded below.

### Primary Demo Role

Keep `ai-dev-training-demo` as the continuous Product Demo through its
verified `STATE-04-PERF` Working Harness Success. Do not add another Product
state to create a Loop or a stale Skill. Candidate E's STATE-03 Context
reorganization and TRIAL-005A/B access observations remain factual
same-repository evidence for Context iteration, not a post-Harness stale
workflow failure.

### Proposed ACT 4 Evidence Roles

| Existing anchor | Proposed evidence role | Boundary |
|---|---|---|
| DEMO-04A — changed Project vs old workflow | A short visual explicitly labeled conceptual / controlled, if a stale-Harness transition remains necessary. | Do not claim a real Demo-repository change, stale Skill, Agent failure, or recurring incident. No asset is created in this assessment. |
| DEMO-04B — Loop and evaluation | A captured, supporting Meta Example of TRIAL-006 → DEC-0016 → TRIAL-007 / TRIAL-008. | This demonstrates a change in Trial-evaluation and reporting policy, not a Demo Product or repository-owned Skill repair. Later application is partial: TRIAL-007's report says no MCP warning while retained stderr contains a Nimble `AuthRequired` error. No objective Trial-quality improvement was measured. |

Keep the current ACT 4 time allocation unless a later approved Story review
requires a change. The proposed evidence split preserves the primary Product
Story and keeps actual training-production history factual under DEC-0005 and
`INV-DEMO-003`.

### Story and Invariant Impact

No edit to `STORY_ARCHITECTURE.md`, `MASTER_PLAN.md`, or `INVARIANTS.md` is
made here. Any adoption changes the evidence role of the proposed ACT 4
Anchor and therefore remains subject to review against `INV-DEMO-001`,
`INV-DEMO-002`, `INV-DEMO-003`, `INV-MATURITY-010`, and `INV-LOOP-001`.
Keep the accepted order: show Harness success, make the stale-Harness issue
explicitly conceptual if no real Product change qualifies, then use the real
Meta Example to show evidence-informed system change and bounded
re-evaluation.

### Readiness

**Readiness at the time: READY TO REDESIGN LOOP DEMO.** This historical
proposal status was superseded by DEC-0021 ACCEPTED. No Product state, visual,
or Demo artifact was changed in that earlier assessment.

## STEP 07 — §§221–230 ACCEPTED HIGH-LEVEL LOOP DEMO DIRECTION

**Decision:** `DEC-0021` ACCEPTED. Detailed teaching evidence, audit, beat
mapping, and internal 22-minute allocation are recorded in
`plan/DEMO_MATRIX.md` §§221–230.

### Primary Product Story

Keep the observed Product Demo continuous through `STATE-00` →
`STATE-04-PERF`. This remains the only Product progression in the primary
Demo. Do not implement `STATE-05` or add a stale repository Skill, synthetic
Product Evolution, or Failure Trial.

### Accepted ACT 4 Evidence Roles

| Slot | Accepted role | Mode and boundary |
|---|---|---|
| DEMO-04A | TYPE 3 conceptual controlled stale-Harness case. | Short VISUAL or CAPTURED CONTROLLED EXAMPLE; no LIVE run, Product State, or actual-history claim. |
| DEMO-04B | TYPE 2 observed Training Production evaluation/workflow Meta Case: TRIAL-006 → DEC-0016 → TRIAL-007 → TRIAL-008. | CAPTURED / VISUAL; supporting only. Preserve the partial attribution and TRIAL-007 MCP report/stderr discrepancy. |
| Product Demo through STATE-04-PERF | TYPE 1 observed Product Demo. | Existing repository implementation, Trial and Git-state evidence; no Loop/staleness claim. |

The earlier single-repository `STATE-07 → STATE-11` ACT 4 proposal is
superseded as the selected teaching path. Its speculative states remain
non-implemented design history and must not be represented as actual events.

### Story and Detailed Architecture Work

The subsequent §§231–240 update reconciled BEAT-037 through BEAT-059 and the
problem-first sequence across the Story, Transition, Curriculum, and Demo
records. BEAT-038–049 use the TYPE 3 conceptual case, BEAT-050–057 preserve
the Loop and maintenance model, and BEAT-058–059 use TYPE 2 Meta evidence.
The detailed Anchor and State tables above are historical where labeled; the
current evidence roles and time mapping are in `plan/DEMO_MATRIX.md`.

### ACT 4 Demo Allocation

| Slot | Estimated minutes |
|---|---:|
| DEMO-04A conceptual case | 4 |
| Loop model / visual | 2 |
| DEMO-10 evaluation and regression | 5 |
| DEMO-11 layer and minimality synthesis | 3 |
| DEMO-04B observed Meta Case | 8 |
| **ACT 4 total** | **22** |

This reallocates existing ACT 4 Demo time and adds no instruction time.
Rehearse readability and density before finalizing these estimates.

### Readiness

**STEP 07 COMPLETE WITH OPEN QUESTIONS; STEP 08 SLIDE MAP READY.** The
2026-10-02 user decision accepts DEC-0007's aggregate schedule and DEC-0022's
separate Final Content Freeze Gate. OQ-003/OQ-005/OQ-006/OQ-011/OQ-014 do not
block structural Slide Map work; dependent claims remain provisional until
their checks are complete. Exact Q&A and Reflection/Transition placement is
STEP 08 work. This readiness does not authorize PPT, final visual design,
complete Speaker Notes, image creation, Demo videos, a new Trial, or further
Demo Product change.
