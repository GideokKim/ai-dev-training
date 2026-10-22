# Slide ID Migration — DEC-0060 / 93 Slides

Date:2026-10-22. Baseline:feae727 (90slides/368minutes).
Current:93slides/379minutes. User approval: improve the full ACT2 flow;
split dense explanations; permit more slides and net duration up to720minutes.
720minutes is a ceiling, not the scheduled duration. Rehearsal UNVERIFIED.

## Changes

- Old S39 separates into S39 Lost in the Middle and new S40 RepoQA.
- New S46 closes the dependency request with actual TRIAL-005B evidence.
- New S48 reclaims the four bounded Context accomplishments.
- S38 leaves workflow reuse unresolved; S41/42/43 have separate path,
  placement-criteria and actual-migration roles; S49 asks the remaining
  procedure-maintenance question; S50 compares two retained records;
  S51 distinguishes commands/rules from procedure ownership.
- All90 existing slide contents/time allocations remain represented.
  No original Beat/Section/Demo/Trial/State ID is changed or fabricated.
  Current S50–S93 correspond to old S47–S90. Historical reports, assets,
  source/capture filenames, Trial prompts and State tags keep their IDs.

## Current Schedule

| ACT | Current range | Count | Minutes |
|---|---|---:|---:|
| ACT0 | S01–S10 |10|40|
| ACT1 | S11–S31 |21|63|
| ACT2 | S32–S49 |18|81|
| ACT3 | S50–S67 |18|85|
| ACT4 | S68–S85 |18|80|
| ACT5 | S86–S93 |8|30|
| Total | S01–S93 |93|379|

New time only: Lecture6,Case4,Reflection1. Current modes:
Lecture143/Demo73/Case88/Reflection21/Transition22/Q&A32.
Native benchmark chart moves oldS55→S58; access table oldS45→S47.
11Templates/27Variants and the19-field Notes schema remain unchanged.

## Baseline Mapping —90 Rows

| Prior ID | Current ID | Current working title |
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
| S17 | S17 | 요청한 과정은 기록에도 남았을까? |
| S18 | S18 | 조사에서 한 줄 변경까지 |
| S19 | S19 | 변경 결과와 확인 증거 |
| S20 | S20 | Generated ≠ Done |
| S21 | S21 | Check마다 확인하는 범위 |
| S22 | S22 | 지시와 참고 자료의 구분 |
| S23 | S23 | 입력과 기대 결과의 작은 예시 |
| S24 | S24 | 바로 검토할 수 있는 결과 형식 |
| S25 | S25 | 근거가 있는 설명과 미확인의 구분 |
| S26 | S26 | 결과를 바꾸는 결정에서 확인 질문 |
| S27 | S27 | 큰 작업을 검토할 결과물로 나누기 |
| S28 | S28 | 기준을 지정한 코드 리뷰 요청 |
| S29 | S29 | 구체적인 근거로 수정 방향 피드백 |
| S30 | S30 | 이번 Task인가, 계속 유지할 Project 정보인가? |
| S31 | S31 | 반복하는 설명을 두 범주로 나누기 |
| S32 | S32 | 다른 Task에 같은 설명이 반복된다 |
| S33 | S33 | 작은 Project Context의 첫 기록 |
| S34 | S34 | AGENTS.md의 지침대로 검증했다 |
| S35 | S35 | Task Prompt와 Project Context |
| S36 | S36 | 정확한 정보도 계속 늘어난다 |
| S37 | S37 | 정확하지만 이번 작업에는 불필요한 정보 |
| S38 | S38 | 정보의 범위와 제공 시점 |
| S39 | S39 | 많이 담아도 같은 근거를 똑같이 쓰는가? |
| S40 | S41 | 필요한 상세 정보로 가는 길 |
| S41 | S42 | AGENTS.md에는 무엇을 남길까? |
| S42 | S43 | 정보를 지우지 않고 위치를 나누기 |
| S43 | S44 | 서로 다른 두 Task가 무엇을 읽을까? |
| S44 | S45 | Crop Task에서 관찰한 접근 |
| S45 | S47 | 두 Task에서 상세 문서 접근이 달랐다 |
| S46 | S49 | 지식은 정리됐지만 절차는 반복된다 |
| S47 | S50 | 두 실제 요청에 같은 절차가 반복됐다 |
| S48 | S51 | 테스트 명령과 작업 절차의 책임을 나눈다 |
| S49 | S52 | Task, Context, Workflow의 역할 |
| S50 | S53 | 반복 절차를 Skill로 옮길 수 있을까? |
| S51 | S54 | Skill을 어떻게 발견하고 호출할까? |
| S52 | S55 | 절차의 책임이 Prompt에서 Repository로 이동 |
| S53 | S56 | 답을 담지 않는 Workflow |
| S54 | S57 | 측정으로 후보를 고르다 |
| S55 | S58 | Working Harness Success |
| S56 | S59 | 이 작업에 Subagent가 필요했을까? |
| S57 | S60 | Subagent를 고려할 조건 |
| S58 | S61 | 무엇이 다시 찾기 어려운 지식인가? |
| S59 | S62 | Memory는 재발견 비용으로 판단 |
| S60 | S63 | Minimum Effective Harness |
| S61 | S64 | Harness는 작업 환경 설계다 |
| S62 | S65 | Repository 밖의 환경도 결과에 영향을 준다 |
| S63 | S66 | Engineering Pattern은 C++에도 전이된다 |
| S64 | S67 | 필요한 구조부터 질문하기 |
| S65 | S68 | 여기까지는 잘 동작했다 |
| S66 | S69 | 개념 사례: Project와 Workflow는 현재 맞다 |
| S67 | S70 | Project는 바뀌고 Workflow는 남았다 |
| S68 | S71 | Task 해결과 System 문제는 다르다 |
| S69 | S72 | 원인에 맞는 Layer를 고르기 |
| S70 | S73 | 실패 지점과 원인 Layer 구분하기 |
| S71 | S74 | 먼저 관찰하고, 그다음 가설을 세운다 |
| S72 | S75 | Cause가 지지하는 최소 변경 |
| S73 | S76 | 같은 Task의 재실행만으로 충분할까? |
| S74 | S77 | 대표 작업으로 변경 범위를 확인하기 |
| S75 | S78 | Harness도 특정 실패에 맞춰 과적합될 수 있다 |
| S76 | S79 | Feedback을 System Change와 Evaluation으로 잇기 |
| S77 | S80 | 실제 제작 기록: TRIAL-006 |
| S78 | S81 | 결과의 타당성과 원인 귀속은 별개다 |
| S79 | S82 | 평가와 보고 규칙을 Evidence에 맞추다 |
| S80 | S83 | 후속 기록은 개선됐지만 완전하지 않았다 |
| S81 | S84 | 실제 Meta Loop에서 바뀐 것 |
| S82 | S85 | Project와 환경이 바뀌면 검증도 다시 본다 |
| S83 | S86 | 전체 Story를 한 장으로 |
| S84 | S87 | 하나의 Repository가 문제에 대응해 진화했다 |
| S85 | S88 | 필요성이 입증되지 않은 것은 보류했다 |
| S86 | S89 | 위임이 늘어도 개발자 책임은 남는다 |
| S87 | S90 | AI-Native Development는 이 교육의 운영 모델 |
| S88 | S91 | 어느 Layer에서 마찰이 반복되는가? |
| S89 | S92 | 다음 작은 행동을 개인적으로 고른다 |
| S90 | S93 | Q&A와 교육 마무리 |

S48 uses existing T03-A: four scoped observation nodes connected in teaching Story order, not four comparison alternatives or a causal chain.11Templates/27Variants remain.
