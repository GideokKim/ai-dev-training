# Slide ID Migration — DEC-0038 / 82 Slides

Date: 2026-10-21. Baseline: `8e4a15e` (81 slides). Current: 82 slides.

## Rule and Preserved Totals

- S01–S12 번호 유지. 새 S13 “원하는 작업 경로를 Prompt에 담는다” 삽입.
- 종전 S13–S81 → S14–S82. Beat/Section/Demo/Trial/State ID 불변.
- S12 Case4 → S12 Case2 + 새 S13 Case2. 기존 S13(현재S14)의 Case3+Reflection1 유지.
- Section1B: S12 2 + S13 2 + S14 4 =8분.
- ACT 장수10/13/15/18/18/8. 범위S01–10 / S11–23 / S24–38 / S39–56 / S57–74 / S75–82.
- ACT 시간40/55/70/85/80/30, 전체360분.
- Mode Lecture130 / Demo73 / Case83 / Reflection20 / Transition22 / Q&A32분.
- 기존 [80→81장 이행표](SLIDE_ID_MIGRATION.md)는 DEC-0036 당시 판본으로 보존한다.

## Full Baseline Mapping — 81 Rows

| Baseline 81-slide ID | Current 82-slide ID | Preserved Working Title |
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
| S13 | S14 | 개발자가 정해야 하는 경계 |
| S14 | S15 | Task Specification의 다섯 책임 |
| S15 | S16 | 더 긴 Prompt보다 분명한 경계 |
| S16 | S17 | 먼저 무엇을 하는지 보자 |
| S17 | S18 | 조사에서 한 줄 변경까지 |
| S18 | S19 | 변경 결과와 확인 증거 |
| S19 | S20 | Generated ≠ Done |
| S20 | S21 | Check마다 확인하는 범위 |
| S21 | S22 | 이번 Task인가, 계속 유지할 Project 정보인가? |
| S22 | S23 | 반복하는 설명을 두 범주로 나누기 |
| S23 | S24 | 다른 Task에 같은 설명이 반복된다 |
| S24 | S25 | 작은 Project Context의 첫 기록 |
| S25 | S26 | 한 번의 사용에서 확인된 것 |
| S26 | S27 | Task Prompt와 Project Context |
| S27 | S28 | 정확한 정보도 계속 늘어난다 |
| S28 | S29 | 정확하지만 이번 Task에는 불필요한 정보 |
| S29 | S30 | 정보의 범위와 제공 시점 |
| S30 | S31 | Long Context 연구가 말해주는 범위 |
| S31 | S32 | 필요한 상세 정보로 가는 길 |
| S32 | S33 | Core Context에서 상세 정보로 가는 길 |
| S33 | S34 | 정보를 지우지 않고 위치를 나누기 |
| S34 | S35 | 서로 다른 두 Task가 무엇을 읽을까? |
| S35 | S36 | Crop Task에서 관찰한 접근 |
| S36 | S37 | Task별 접근은 달랐지만 완벽하지는 않다 |
| S37 | S38 | 지식은 정리됐지만 절차는 반복된다 |
| S38 | S39 | 서로 다른 Performance Task, 반복되는 절차 |
| S39 | S40 | Project 사실과 작업 절차는 다르다 |
| S40 | S41 | Task, Context, Workflow의 역할 |
| S41 | S42 | 반복 절차를 Skill로 옮길 수 있을까? |
| S42 | S43 | Skill을 어떻게 발견하고 호출할까? |
| S43 | S44 | 절차의 책임이 Prompt에서 Repository로 이동 |
| S44 | S45 | 답을 담지 않는 Workflow |
| S45 | S46 | 측정으로 후보를 고르다 |
| S46 | S47 | Working Harness Success |
| S47 | S48 | 이 작업에 Subagent가 필요했을까? |
| S48 | S49 | Subagent를 고려할 조건 |
| S49 | S50 | 무엇이 다시 찾기 어려운 지식인가? |
| S50 | S51 | Memory는 재발견 비용으로 판단 |
| S51 | S52 | Minimum Effective Harness |
| S52 | S53 | Harness는 작업 환경 설계다 |
| S53 | S54 | Repository 밖의 환경도 결과에 영향을 준다 |
| S54 | S55 | Engineering Pattern은 C++에도 전이된다 |
| S55 | S56 | 필요한 구조부터 질문하기 |
| S56 | S57 | 여기까지는 잘 동작했다 |
| S57 | S58 | 개념 사례: Project와 Workflow는 현재 맞다 |
| S58 | S59 | Project는 바뀌고 Workflow는 남았다 |
| S59 | S60 | Task 해결과 System 문제는 다르다 |
| S60 | S61 | 원인에 맞는 Layer를 고르기 |
| S61 | S62 | 실패 지점과 원인 Layer 구분하기 |
| S62 | S63 | 먼저 관찰하고, 그다음 가설을 세운다 |
| S63 | S64 | Cause가 지지하는 최소 변경 |
| S64 | S65 | 같은 Task의 재실행만으로 충분할까? |
| S65 | S66 | 대표 작업으로 변경 범위를 확인하기 |
| S66 | S67 | Harness도 특정 실패에 맞춰 과적합될 수 있다 |
| S67 | S68 | Feedback을 System Change와 Evaluation으로 잇기 |
| S68 | S69 | 실제 제작 기록: TRIAL-006 |
| S69 | S70 | 결과의 타당성과 원인 귀속은 별개다 |
| S70 | S71 | 평가와 보고 규칙을 Evidence에 맞추다 |
| S71 | S72 | 후속 기록은 개선됐지만 완전하지 않았다 |
| S72 | S73 | 실제 Meta Loop에서 바뀐 것 |
| S73 | S74 | Project와 환경이 바뀌면 검증도 다시 본다 |
| S74 | S75 | 여섯 시간의 Story를 한 장으로 |
| S75 | S76 | 하나의 Repository가 문제에 대응해 진화했다 |
| S76 | S77 | 필요성이 입증되지 않은 것은 보류했다 |
| S77 | S78 | 위임이 늘어도 개발자 책임은 남는다 |
| S78 | S79 | AI-Native Development는 이 교육의 운영 모델 |
| S79 | S80 | 어느 Layer에서 마찰이 반복되는가? |
| S80 | S81 | 다음 작은 행동을 개인적으로 고른다 |
| S81 | S82 | Q&A와 교육 마무리 |

## Current Visual / Claim Boundary

S11의 고민하는 Agent와 가파른 비용 그림은 교육용 개념이다. 실제 판단 불능·정지·토큰/시간 실측·기하급수 법칙의 증거가 아니다. S12의 세 시간선은 가능한 해석이며 실제 반복/병렬 실행이 아니다. 새 S13의 강조는 사람이 명시한 목표 방향이고 결정성·정확성·Test PASS를 보장하지 않는다. 실행 후 검증을 유지한다.

## Plan File Review Inventory

| Document | Action |
|---|---|
| [CLAIM_FREEZE.md](CLAIM_FREEZE.md) | 현재82장 연결 정렬 |
| [CURRICULUM.md](CURRICULUM.md) | 확인 후 무수정; 현재 Slide 번호/장수 충돌 없음 |
| [CURRICULUM_MATRIX.md](CURRICULUM_MATRIX.md) | 확인 후 무수정; 현재 Slide 번호/장수 충돌 없음 |
| [DECISIONS.md](DECISIONS.md) | DEC-0038 추가; 기존 Decision prefix 보존 |
| [DECISION_TEMPLATE.md](DECISION_TEMPLATE.md) | 확인 후 무수정; 현재 Slide 번호/장수 충돌 없음 |
| [DEMO_ARCHITECTURE.md](DEMO_ARCHITECTURE.md) | 확인 후 무수정; 현재 Slide 번호/장수 충돌 없음 |
| [DEMO_MATRIX.md](DEMO_MATRIX.md) | 현재82장 연결 정렬 |
| [DEMO_REPOSITORY_SPEC.md](DEMO_REPOSITORY_SPEC.md) | 확인 후 무수정; 현재 Slide 번호/장수 충돌 없음 |
| [DEMO_RUNBOOK_SPEC.md](DEMO_RUNBOOK_SPEC.md) | 확인 후 무수정; 현재 Slide 번호/장수 충돌 없음 |
| [INVARIANTS.md](INVARIANTS.md) | 확인 후 무수정; 현재 Slide 번호/장수 충돌 없음 |
| [LEARNING_JOURNEY.md](LEARNING_JOURNEY.md) | 확인 후 무수정; 현재 Slide 번호/장수 충돌 없음 |
| [MASTER_PLAN.md](MASTER_PLAN.md) | 확인 후 무수정; 현재 Slide 번호/장수 충돌 없음 |
| [MASTER_PLAN_COVERAGE.md](MASTER_PLAN_COVERAGE.md) | 확인 후 무수정; 현재 Slide 번호/장수 충돌 없음 |
| [PRODUCTION_PLAN.md](PRODUCTION_PLAN.md) | 현재82장 연결 정렬 |
| [SLIDE_ID_MIGRATION.md](SLIDE_ID_MIGRATION.md) | 역사 본문 보존; 새 이행표 안내만 추가 |
| [SLIDE_MAP.md](SLIDE_MAP.md) | 현재82장 연결 정렬 |
| [SLIDE_TEMPLATE_ARCHITECTURE.md](SLIDE_TEMPLATE_ARCHITECTURE.md) | 현재82장 연결 정렬 |
| [SLIDE_TEMPLATE_MAP.md](SLIDE_TEMPLATE_MAP.md) | 현재82장 연결 정렬 |
| [SPEAKER_NOTES_ARCHITECTURE.md](SPEAKER_NOTES_ARCHITECTURE.md) | 현재82장 연결 정렬 |
| [SPEAKER_NOTES_FREEZE.md](SPEAKER_NOTES_FREEZE.md) | 현재82장 연결 정렬 |
| [SPEAKER_NOTES_PILOT.md](SPEAKER_NOTES_PILOT.md) | 역사 본문 보존; 새 이행표 안내만 추가 |
| [SPEAKER_NOTES_PILOT_EVALUATION.md](SPEAKER_NOTES_PILOT_EVALUATION.md) | 역사 본문 보존; 새 이행표 안내만 추가 |
| [STORY_ARCHITECTURE.md](STORY_ARCHITECTURE.md) | 확인 후 무수정; 현재 Slide 번호/장수 충돌 없음 |
| [STORY_BEATS.md](STORY_BEATS.md) | 확인 후 무수정; 현재 Slide 번호/장수 충돌 없음 |
| [TRANSITIONS.md](TRANSITIONS.md) | 현재82장 연결 정렬 |
| [VISUAL_PROTOTYPE_EVALUATION.md](VISUAL_PROTOTYPE_EVALUATION.md) | 역사 본문 보존; 새 이행표 안내만 추가 |
| [VISUAL_PROTOTYPE_PLAN.md](VISUAL_PROTOTYPE_PLAN.md) | 역사 본문 보존; 새 이행표 안내만 추가 |
| [VISUAL_PROTOTYPE_REVIEW.md](VISUAL_PROTOTYPE_REVIEW.md) | 역사 본문 보존; 새 이행표 안내만 추가 |
| [VISUAL_PROTOTYPE_V2_RESULT.md](VISUAL_PROTOTYPE_V2_RESULT.md) | 역사 본문 보존; 새 이행표 안내만 추가 |
| [VISUAL_SPEC.md](VISUAL_SPEC.md) | 현재82장 연결 정렬 |
| [VISUAL_SYSTEM_ANALYSIS.md](VISUAL_SYSTEM_ANALYSIS.md) | 역사 본문 보존; 새 이행표 안내만 추가 |
| [VISUAL_TEMPLATE_FREEZE.md](VISUAL_TEMPLATE_FREEZE.md) | 현재82장 연결 정렬 |

확인 후 변경하지 않은 기반 문서: CURRICULUM.md, CURRICULUM_MATRIX.md, DECISION_TEMPLATE.md, DEMO_ARCHITECTURE.md, DEMO_REPOSITORY_SPEC.md, DEMO_RUNBOOK_SPEC.md, INVARIANTS.md, LEARNING_JOURNEY.md, MASTER_PLAN.md, MASTER_PLAN_COVERAGE.md, STORY_ARCHITECTURE.md, STORY_BEATS.md. 원 기획 의도나 보호된 ID를 바꾸지 않는다.

## History / Paths

실제 Prototype80장·기존 Decision80/81장·관찰 Trial·검증 JSON·이미지 파일명·생성 프롬프트의 번호는 생성/캡처 당시 값을 유지한다. 현재 참조만 이동한다. VISUAL_TEMPLATE_FREEZE의 실제 Prototype Evidence·Coverage 열은 원래80장 번호다. `prototype/`·`assets/`·문헌 Source ID는 Slide 번호와 구분한다.

현재 운영 Notes/Runbook/전달 문서·Source·PPT·Preview는 별도 제작 작업에서 정렬한다. [최종 Prompt / Timeline 검토](../production/evaluation/PROMPT_TIMELINE_REVISION.md)는 실제 렌더·내장 Notes·경로 검증을 기록한다. 이 이행표의 문서 정렬은 Windows/계정/교육장/리허설 검증 PASS를 뜻하지 않는다.
