# Slide ID Migration — DEC-0043 /90 Slides

Date:2026-10-21. Baseline:0772b4b (82slides/360minutes).
Current:90slides/368minutes. Explicit user approval: preserve existing
slides at all times, allow additional duration.

## Rule

S01–S21 keep their numbers. New S22–S29 introduce eight practical Prompt
methods. Old S22–S82 become S30–S90 in a single mapping pass. Preserve all
original slide contents, titles, roles, Story/Section/Demo/Trial/State IDs,
allocated time and Mode. Source/capture filenames and prior audit hashes
remain historical. The existing82-slide artifact identities are not current results.

## Current Schedule

| ACT | Current range | Count | Minutes |
|---|---|---:|---:|
| ACT0 | S01–S10 |10|40|
| ACT1 | S11–S31 |21|63|
| ACT2 | S32–S46 |15|70|
| ACT3 | S47–S64 |18|85|
| ACT4 | S65–S82 |18|80|
| ACT5 | S83–S90 |8|30|
| Total | S01–S90 |90|368|

Add Lecture7 and Case1. Current modes: Lecture137/Demo73/Case84/
Reflection20/Transition22/Q&A32. Preserve original360minutes; no reduction
of any prior allocation. New section1H is8minutes after currentS21, before
oldS22–S23 (nowS30–S31). Native benchmark chart moves S47→S55.

## Full Baseline Mapping —82 Rows

| Baseline ID | Current ID | Preserved working title |
|---|---|---|
| S01 | S01 | AI에게 지금 무엇을 맡기고 있는가? |
| S02 | S02 | 작은 질문에는 Chatbot이 유용하다 |
| S03 | S03 | 질문이 커지면 Context를 모으는 일이 생긴다 |
| S04 | S04 | 파일명을 주지 않으면 Agent는 어디부터 볼까? |
| S05 | S05 | Agent가 Test와 호출 경로를 찾았다 |
| S06 | S06 | 관찰 결과와 실행 제한을 분리한다 |
| S07 | S07 | 코드를 AI에게 가져가는 대신 AI를 Repository로 데려간다 |
| S08 | S08 | Repository 작업은 Codex에서 시작한다 |
| S09 | S09 | Repository 접근과 Task 의도는 별개다 |
| S10 | S10 | Repository를 보면 내가 원하는 것까지 알까? |
| S11 | S11 | Task에는 무엇이 아직 정해지지 않았을까? |
| S12 | S12 | 요청만으로는 의도가 보이지 않는다 |
| S13 | S13 | 원하는 작업 경로를 Prompt에 담는다 |
| S14 | S14 | 개발자가 정해야 하는 경계 |
| S15 | S15 | Task Specification의 다섯 책임 |
| S16 | S16 | 더 긴 Prompt보다 분명한 경계 |
| S17 | S17 | 먼저 무엇을 하는지 보자 |
| S18 | S18 | 조사에서 한 줄 변경까지 |
| S19 | S19 | 변경 결과와 확인 증거 |
| S20 | S20 | Generated ≠ Done |
| S21 | S21 | Check마다 확인하는 범위 |
| S22 | S30 | 이번 Task인가, 계속 유지할 Project 정보인가? |
| S23 | S31 | 반복하는 설명을 두 범주로 나누기 |
| S24 | S32 | 다른 Task에 같은 설명이 반복된다 |
| S25 | S33 | 작은 Project Context의 첫 기록 |
| S26 | S34 | 한 번의 사용에서 확인된 것 |
| S27 | S35 | Task Prompt와 Project Context |
| S28 | S36 | 정확한 정보도 계속 늘어난다 |
| S29 | S37 | 정확하지만 이번 Task에는 불필요한 정보 |
| S30 | S38 | 정보의 범위와 제공 시점 |
| S31 | S39 | Long Context 연구가 말해주는 범위 |
| S32 | S40 | 필요한 상세 정보로 가는 길 |
| S33 | S41 | Core Context에서 상세 정보로 가는 길 |
| S34 | S42 | 정보를 지우지 않고 위치를 나누기 |
| S35 | S43 | 서로 다른 두 Task가 무엇을 읽을까? |
| S36 | S44 | Crop Task에서 관찰한 접근 |
| S37 | S45 | Task별 접근은 달랐지만 완벽하지는 않다 |
| S38 | S46 | 지식은 정리됐지만 절차는 반복된다 |
| S39 | S47 | 서로 다른 Performance Task, 반복되는 절차 |
| S40 | S48 | Project 사실과 작업 절차는 다르다 |
| S41 | S49 | Task, Context, Workflow의 역할 |
| S42 | S50 | 반복 절차를 Skill로 옮길 수 있을까? |
| S43 | S51 | Skill을 어떻게 발견하고 호출할까? |
| S44 | S52 | 절차의 책임이 Prompt에서 Repository로 이동 |
| S45 | S53 | 답을 담지 않는 Workflow |
| S46 | S54 | 측정으로 후보를 고르다 |
| S47 | S55 | Working Harness Success |
| S48 | S56 | 이 작업에 Subagent가 필요했을까? |
| S49 | S57 | Subagent를 고려할 조건 |
| S50 | S58 | 무엇이 다시 찾기 어려운 지식인가? |
| S51 | S59 | Memory는 재발견 비용으로 판단 |
| S52 | S60 | Minimum Effective Harness |
| S53 | S61 | Harness는 작업 환경 설계다 |
| S54 | S62 | Repository 밖의 환경도 결과에 영향을 준다 |
| S55 | S63 | Engineering Pattern은 C++에도 전이된다 |
| S56 | S64 | 필요한 구조부터 질문하기 |
| S57 | S65 | 여기까지는 잘 동작했다 |
| S58 | S66 | 개념 사례: Project와 Workflow는 현재 맞다 |
| S59 | S67 | Project는 바뀌고 Workflow는 남았다 |
| S60 | S68 | Task 해결과 System 문제는 다르다 |
| S61 | S69 | 원인에 맞는 Layer를 고르기 |
| S62 | S70 | 실패 지점과 원인 Layer 구분하기 |
| S63 | S71 | 먼저 관찰하고, 그다음 가설을 세운다 |
| S64 | S72 | Cause가 지지하는 최소 변경 |
| S65 | S73 | 같은 Task의 재실행만으로 충분할까? |
| S66 | S74 | 대표 작업으로 변경 범위를 확인하기 |
| S67 | S75 | Harness도 특정 실패에 맞춰 과적합될 수 있다 |
| S68 | S76 | Feedback을 System Change와 Evaluation으로 잇기 |
| S69 | S77 | 실제 제작 기록: TRIAL-006 |
| S70 | S78 | 결과의 타당성과 원인 귀속은 별개다 |
| S71 | S79 | 평가와 보고 규칙을 Evidence에 맞추다 |
| S72 | S80 | 후속 기록은 개선됐지만 완전하지 않았다 |
| S73 | S81 | 실제 Meta Loop에서 바뀐 것 |
| S74 | S82 | Project와 환경이 바뀌면 검증도 다시 본다 |
| S75 | S83 | 여섯 시간의 Story를 한 장으로 |
| S76 | S84 | 하나의 Repository가 문제에 대응해 진화했다 |
| S77 | S85 | 필요성이 입증되지 않은 것은 보류했다 |
| S78 | S86 | 위임이 늘어도 개발자 책임은 남는다 |
| S79 | S87 | AI-Native Development는 이 교육의 운영 모델 |
| S80 | S88 | 어느 Layer에서 마찰이 반복되는가? |
| S81 | S89 | 다음 작은 행동을 개인적으로 고른다 |
| S82 | S90 | Q&A와 교육 마무리 |

## Current Sources and Historical Boundaries

Current Map, Template Mapping, operation Notes, source factories, Full/ACT
PPTs, previews, runbooks, Q&A, legacy-module links and current handoff identity
follow the new IDs. MASTER_PLAN and INV-IDENTITY-001 record the explicit
schedule extension. Existing historical Decisions, prototypes, captured
source images, source-generation prompts and prior validation JSON remain
unchanged. ASSET_MANIFEST changes current owners/references only; pixels,
filenames and capturedSourceSlide/originalAtCapture stay fixed.

Old SLIDE_ID_MIGRATION.md and SLIDE_ID_MIGRATION_82.md remain historical.
Current paths use this index; old audit references retain their edition IDs.
Production source/delivery builder and ZIP/HTML/package manifests remain
paused and do not represent the current90-slide deck.

Full local validation and current artifact identities:
production/evaluation/PROMPT_ENGINEERING_ADDITION_RESULT.md.
Windows/room/current products/accounts/timed rehearsal remain UNVERIFIED.
