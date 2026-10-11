# STEP 08 — Speaker Notes Pilot

Date: 2026-10-11

Status: DRAFT — seven pilot records; S54/S72 operation order is aligned by DEC-0025. Delivery rehearsal and final media selection remain open.

Authority: SLIDE_MAP.md, SPEAKER_NOTES_ARCHITECTURE.md, CLAIM_FREEZE.md and their referenced evidence. These notes do not change the approved Slide Map, Story, claims, total time, or Demo Repository.

The seven records below use the 19-field architecture schema. They are operating cues, not full scripts. Times inside a Slide are planning cues; they have not been rehearsed.

## S16 — 조사에서 한 줄 변경까지

Slide ID: S16

Working Title: 조사에서 한 줄 변경까지

ACT / Section: ACT 1 / 1D

Allocated Time: 4 minutes

Mode Split: Demo 4 minutes (CAPTURED)

Primary Message: 실패를 재현하고 호출 경로와 공개 계약을 확인한 뒤, 계약에 맞는 최소 경계 수정을 했다.

Opening Question: “수정 전에 어떤 근거를 확인했을까요?”

Speaker Flow:

1. **OPEN (0:00–0:30):** “먼저 결과보다 조사 순서를 보겠습니다.”
2. **SHOW (0:30–1:20):** 실패한 crop test와 CLI → pipeline → crop 호출 경로를 짚는다. 시험 로그 전체를 읽지 않는다.
3. **INTERPRET (1:20–2:15):** “[x_start, x_end)는 끝 좌표를 포함하지 않습니다. 구현은 x_end + 1까지 잘라 한 칸을 더 가져왔습니다.”
4. **SHOW (2:15–3:10):** 편집 전에 보인 계획과 한 줄 변경을 나란히 보여 준다: row[x_start : x_end + 1] → row[x_start : x_end].
5. **TRANSFER / TRANSITION (3:10–4:00):** “코드 문법보다 계약과 변경이 맞는지 확인하는 것이 핵심입니다.” 다음 장에서 변경을 뒷받침한 검증을 본다고 연결한다.

Evidence / Source: TRIAL-002, STATE-00 → STATE-00-FIXED; 격리된 worktree의 Codex CLI 0.154.0 단일 실행. 실패 재현, 호출 경로 조사, 편집 전 계획, 한 줄 변경, focused test 3/3, 전체 test 11/11, CLI smoke와 출력 픽셀 확인, diff-check가 기록돼 있다. 현재 Demo Repository의 crop 계약도 읽기 전용으로 확인했다.

Claim Boundary: 이 한 번의 CLI Trial에 한정한다. 모든 Prompt나 모델에서 같은 조사 순서가 보장된다고 일반화하지 않는다. Codex Desktop 또는 교육용 발표 화면에서의 동작으로 말하지 않는다.

Beginner Explanation: “끝 좌표는 포함하지 않는다”는 약속과 실제 코드가 같은지 먼저 맞춰 보고, 바꾼 뒤 테스트로 확인한다.

Advanced Insight: 공개 계약, 실패 재현, 호출 경로, 변경 범위, 결과 검증이 서로 추적 가능해야 한다.

C++ Vision Bridge: N/A.

Demo Operation: DEMO-05 / CAPTURED. WATCH FOR: 실패 재현, 편집 전 계획, 한 줄 diff. SHOW: 승인된 TRIAL-002 기록/캡처가 선택되면 그 구간만 보여 준다. Required environment: 최종 발표 PC와 선택된 media는 TBD. Start cue: 실패 test가 보이는 지점. Stop cue: 한 줄 diff와 검증 상태를 보인 뒤, 4분 종료 전에 닫는다. Fallback status: PLANNED — plan/DEMO_MATRIX.md의 TRIAL-002 기록이 있으며 prototype/preview/v2/S16.png는 재구성된 설명 도식이다. 실제 Terminal 캡처가 아니다.

Audience Interaction: 질문은 청중이 결과를 먼저 추측하도록 하는 수사 질문이다. 응답이나 실습을 요구하지 않는다.

Transition: “이 변경이 맞다는 것은 무엇으로 확인했을까요?” — S17.

Time Management: 호출 경로 설명을 한 문장으로 제한한다. 시간이 모자라면 보조 로그를 생략하고 계약, 한 줄 diff, 검증 결과를 보존한다.

Fallback: 최종 승인 캡처가 없거나 표시되지 않으면 수치를 외워 재현하지 않는다. plan/DEMO_MATRIX.md의 TRIAL-002 기록에서 계약, diff, test 결과를 사용한다. 이 source-record fallback은 준비 계획이 있는 상태(PLANNED)이며, 발표용으로 선택된 asset과 대상 화면 검증은 TBD다. prototype/preview/v2/S16.png는 실제 캡처로 제시하지 않는다.

Validation Status: DRAFT — Trial 근거 대조 완료; 실제 발표 read-through, media 선택, 대상 화면 검증 미완료.

## S35 — Task별 접근은 달랐지만 완벽하지는 않다

Slide ID: S35

Working Title: Task별 접근은 달랐지만 완벽하지는 않다

ACT / Section: ACT 2 / 2G Structured Context

Allocated Time: 7 minutes

Mode Split: Demo 1 minute (CAPTURED) + Case 3 minutes + Reflection 2 minutes + Q&A 1 minute

Primary Message: 두 Task에서 상세 문서 접근 차이를 관찰했지만, 완벽한 routing이나 token·성능 이득은 측정하지 않았다.

Opening Question: “서로 다른 Task에서 Agent가 같은 상세 문서를 읽었을까요?”

Speaker Flow:

1. **OPEN (0:00–0:30):** A는 crop 계약, B는 runtime dependency 질문임을 짚고 표를 먼저 읽지 않게 한다.
2. **SHOW (0:30–1:30):** A/B 접근 matrix를 공개한다. A에서 image-contracts.md가 읽혔고 B에서는 읽히지 않은 차이를 가리킨다.
3. **INTERPRET (1:30–3:30):** “A와 B 모두 architecture.md를 읽었습니다. Task에 따른 차이는 보이지만 좁고 완벽한 routing은 아닙니다.” 파일 목록 전체를 낭독하지 않는다.
4. **REFLECTION (3:30–5:30):** “여러분의 Project에서는 Task마다 어떤 상세 정보가 달라질까요?” 조용히 생각할 시간을 둔다. 공유는 선택이다.
5. **Q&A / TRANSITION (5:30–7:00):** 짧게 질문을 받되 답이 없으면 “정보 정리는 도움이 되지만 절차 반복은 남아 있습니다”라고 이어 S36로 넘긴다.

Evidence / Source: TRIAL-005A/B, DEMO-06, STATE-03. A는 최종 실행에서 AGENTS.md, architecture.md, image-contracts.md, testing.md와 관련 source/test를 읽었다. B는 AGENTS.md, architecture.md, pyproject.toml, setup.cfg, README와 source를 읽고 image-contracts.md/testing.md는 읽지 않았다. testing.md 접근은 실행 간 변동이 있었다. 둘 다 파일을 수정하지 않았다.

Claim Boundary: Task별 상세 문서 접근 차이는 관찰됐다. Perfect routing: NOT PROVEN. Token saving: NOT MEASURED. Performance improvement: NOT MEASURED. 두 Task의 결과를 보편적 제품 동작으로 확대하지 않는다.

Beginner Explanation: 필요한 문서가 Task마다 다를 수 있으므로, 실제로 어떤 정보를 참고했는지 확인한다.

Advanced Insight: architecture.md의 공통 접근과 testing.md의 실행 간 변동은 선택 범위와 반복성 한계를 함께 보여 준다.

C++ Vision Bridge: N/A.

Demo Operation: DEMO-06 / CAPTURED. WATCH FOR: A/B 표에서 image-contracts.md의 차이와 architecture.md의 공통 접근. SHOW: 검토된 TRIAL-005A/B access matrix. Required environment: 최종 발표 화면 TBD. Start cue: 서로 다른 Task 이름만 보이는 상태. Stop cue: 1분 내 표 공개 후 Case 해석으로 넘어간다. Fallback status: PLANNED — plan/DEMO_MATRIX.md의 TRIAL-005A/B access records가 있으며 prototype/preview/v2/S35.png는 그 내용을 요약한 재구성 matrix이지 실제 access log 캡처가 아니다.

Audience Interaction: Reflection 2분은 개인 생각이며 답변 제출을 요구하지 않는다. Q&A 1분은 질문을 받을 수 있지만 침묵이면 준비된 transition 문장으로 마친다. Wait time은 rehearsal 전까지 TBD.

Transition: “Context는 정리됐지만 반복되는 절차도 정리됐을까요?” — S36.

Time Management: 1분 Demo에서 문서명을 모두 읽지 않는다. 시간이 모자라면 고급 해석과 추가 질문을 줄이고, matrix의 차이와 세 가지 미입증 항목은 남긴다.

Fallback: 최종 선택 캡처가 없으면 Demo 시간을 늘리거나 접근을 재연하지 않는다. plan/DEMO_MATRIX.md의 TRIAL-005A/B 기록과 prototype/preview/v2/S35.png에 요약된 matrix를 바탕으로 A/B 차이만 설명한다. 이 source-record/재구성 도식 경로는 PLANNED이며, 발표용 asset 선택과 대상 화면 검증은 TBD다. 이미지를 실제 access log로 표현하지 않는다.

Validation Status: DRAFT — Trial 기록 및 matrix 대조 완료; 7분 운영, projection readability, 발표용 최종 캡처/fallback 미검증.

## S45 — Working Harness Success

Slide ID: S45

Working Title: Working Harness Success

ACT / Section: ACT 3 / 3D Working Harness

Allocated Time: 5 minutes

Mode Split: Case 5 minutes

Primary Message: STATE-04-PERF에서 이 입력과 환경에 한정된 benchmark 및 검증 결과를 확인한다. Harness가 성능 개선의 원인이라고 말하지 않는다.

Opening Question: “조사와 비교가 확인 가능한 결과로 이어졌을까요?”

Speaker Flow:

1. **OPEN (0:00–0:35):** “변경의 성공을 무엇으로 판단할지 먼저 보겠습니다.”
2. **SHOW (0:35–2:15):** STATE-04와 STATE-04-PERF의 median 15.468 → 10.769 ms/call, tracemalloc peak 6,675,804 → 380 B를 같은 표에서 보여 준다.
3. **INTERPRET (2:15–3:40):** “이 값은 기록된 입력과 실행 환경의 비교입니다. tracemalloc은 Python allocation peak이며 RSS 측정이 아닙니다.”
4. **VERIFY (3:40–4:35):** focused 1/1, 전체 11/11, CLI smoke, benchmark guard의 PASS를 함께 짚는다.
5. **TRANSITION (4:35–5:00):** “결과가 확인됐다는 것과 어떤 구성요소가 원인이었는지는 별개입니다.” 다음 질문으로 연결한다.

Evidence / Source: STATE-04 pre-change baseline, STATE-04-PERF result, DEC-0019. Deterministic synthetic input 1024×768, 786,432 pixels, CPython 3.9.6, macOS 26.6.2 arm64; 각 상태 7개 one-call sample. Focused 1/1, full suite 11/11, CLI smoke 및 입력 fingerprint/six-field correctness guards가 기록됐다.

Claim Boundary: 관찰 수치는 이 입력·환경·Trial 범위에 한정한다. “Harness가 30% 성능을 올렸다”라고 말하지 않는다. Harness의 단독 인과효과, 다른 입력이나 PC에서의 성능, tracemalloc 값을 RSS처럼 표현하지 않는다.

Beginner Explanation: AI가 포함된 작업 환경은 변경을 조사하고 확인하는 데 도움을 줄 수 있지만, 결과는 테스트와 측정으로 따로 확인한다.

Advanced Insight: 실제 code change와 검증된 작업 환경의 역할을 분리한다. 숫자 하나만 비교하지 말고 입력 fingerprint, correctness guard, sample 수와 환경을 함께 둔다.

C++ Vision Bridge: N/A.

Demo Operation: N/A — Case slide이며 Live Demo를 실행하지 않는다. 검토 시 필요하면 STATE-04와 STATE-04-PERF의 기록된 evidence 표를 정적 자료로 참조한다.

Audience Interaction: 질문은 비교를 함께 해석하기 위한 prompt다. 발언을 요구하지 않는다.

Transition: “이 작업에 Subagent도 필요했을까요?” — S46.

Time Management: 두 지표와 correctness checks를 우선한다. 시간이 모자라면 각 sample 전체를 설명하지 않고 환경·sample 수·claim boundary를 보존한다.

Fallback: 표가 표시되지 않으면 수치를 기억으로 다시 만들지 않는다. 기록된 Trial 근거를 확인할 수 없으면 숫자 설명을 생략하고 검증 항목과 범위만 말한다. 최종 발표 자료에서 승인된 evidence를 찾기 쉽게 연결하는 방법은 TBD.

Validation Status: DRAFT — State/Trial 근거와 수치 대조 완료; Case read-through 및 최종 화면 자료 선택 미완료.

## S54 — 필요한 구조부터 질문하기

Slide ID: S54

Working Title: 필요한 구조부터 질문하기

ACT / Section: ACT 3 / 3I Discussion / Reflection / Transition

Allocated Time: 10 minutes

Mode Split: Reflection 3 minutes + Q&A 5 minutes + Transition 2 minutes

Primary Message: 기능을 늘리기 전에 반복되는 마찰과 원인을 보고 필요한 최소 구조를 고른다.

Opening Question: “내 업무에서 반복되는 마찰은 무엇인가?”

Speaker Flow:

1. **REFLECTION (0:00–3:00):** 질문을 화면에 둔다. “답을 적거나 공유하지 않아도 됩니다. 반복되는 마찰 하나를 마음속으로 골라 보세요.” 침묵을 허용한다.
2. **Q&A / DISCUSSION (3:00–8:00):** 청중이 질문하면 마찰의 종류와 필요한 최소 구조를 논의한다. 반복 Project 사실 → Context, 반복 절차 → Workflow, 독립적인 병렬 조사 → Subagent 검토, 비용 큰 재발견 → Memory 검토, 확인 필요 → Tests/Benchmark/Review 순으로 선택 기준을 짚는다. 어떤 기능도 필수 구성으로 제시하지 않는다.
3. **TRANSITION (8:00–10:00):** “잘 동작하는 Harness도 Project가 바뀐 뒤 계속 맞을까요?”라고 묻는다. S55에서 STATE-04-PERF의 성공 상태를 보존한 뒤 S56에서 별도의 개념 사례를 연다고 안내한다.

Evidence / Source: BEAT-035–038, STATE-04-PERF, DEC-0018, DEC-0021. TEACHING_MODEL. STATE-04-PERF는 Subagent와 Memory가 없어도 이 bounded 작업이 성공한 사례다. 이 사실을 모든 작업에서의 불필요성으로 일반화하지 않는다.

Claim Boundary: Subagent와 Memory는 조건부 선택이다. 더 많은 기능을 추가하는 것이 성공의 목표라고 말하지 않는다. 실제 참여자의 업무나 선택을 관찰한 evidence로 취급하지 않는다.

Beginner Explanation: 먼저 어디에서 반복해서 막히는지 찾고, 그 문제에 필요한 것만 고려한다.

Advanced Insight: 반복 사실, 반복 절차, 병렬성, 재발견 비용, verification 위험은 서로 다른 원인이므로 한 가지 Harness 답으로 합치지 않는다.

C++ Vision Bridge: 이전 C++ Vision 질문을 자신의 Project에 적용할 수 있는지 생각하게 하는 contextual cue만 쓴다. 새 C++ 사례나 도구 목록은 추가하지 않는다.

Demo Operation: N/A.

Audience Interaction: Reflection은 개인 성찰이며 제출·발언을 요구하지 않는다. Q&A에서는 초급·고급 질문 모두 받는다. 질문 대기 시간과 발언 분배 규칙은 rehearsal 후 확정하며 지금은 TBD. 질문이 없으면 위 다섯 마찰 유형을 하나씩 짧게 상기한 후 전환한다.

Transition: “잘 동작하는 Harness도 시간이 지나면 계속 맞을까요?” S55에서 성공 상태를 먼저 정리한 뒤 S56에서 가상 사례를 연다.

Time Management: Reflection 3분, Q&A 5분, Transition 2분을 분리한다. 답변이 길어지면 추가 토론을 끊고 아직 미해결인 Project 변화 질문을 남긴다.

Fallback: 청중 응답이 없으면 강사가 가상의 응답을 청중 발언처럼 꾸며내지 않는다. 다섯 마찰 범주를 cue로 사용하고, 정해진 시각에 Transition으로 이동한다.

Validation Status: DRAFT — Reflection/Q&A 운영 설계 완료; 대기 시간, Q&A cutoff 및 live read-through 미검증.

## S56 — 개념 사례: Project와 Workflow는 현재 맞다

Slide ID: S56

Working Title: 개념 사례: Project와 Workflow는 현재 맞다

ACT / Section: ACT 4 / 4B Conceptual Stale Harness / DEMO-04A

Allocated Time: 2 minutes

Mode Split: Demo 2 minutes (VISUAL)

Primary Message: 개념 사례는 Project의 현재 test entry와 재사용 Workflow가 맞는 상태에서 시작한다.

Opening Question: “지금 맞는 Project Workflow는 계속 맞을까요?”

Speaker Flow:

1. **OPEN (0:00–0:20):** “가상의 사례를 하나 보겠습니다.”
2. **SHOW (0:20–1:10):** 화면의 CONCEPTUAL CASE label과 PROJECT SOURCE = CURRENT WORKFLOW 관계를 가리킨다.
3. **INTERPRET (1:10–1:40):** “이 시작 시점에는 Project와 Workflow가 일치합니다. 아직 실제 실패나 낡은 지침이 발생한 장면은 아닙니다.”
4. **TRANSITION (1:40–2:00):** 후속 가상 변화에서 OLD TEST ENTRY → NEW TEST ENTRY를 다룰 것이라고만 예고한다.

Evidence / Source: DEMO-04A, BEAT-038, DEC-0021. CONCEPTUAL CASE이며 구성된 시작 조건이다. S56 visual prototype는 참고물이지만 최종 발표 asset은 아니다.

Claim Boundary: 이 장면은 ai-dev-training-demo의 실제 이력, Trial, 실패, 수정 결과가 아니다. OLD TEST ENTRY → NEW TEST ENTRY는 후속 가상 변화이며 관찰 결과처럼 연출하지 않는다.

Beginner Explanation: 오늘 맞는 안내도 Project가 바뀌면 내일은 다시 확인해야 할 수 있다.

Advanced Insight: Workflow의 타당성은 현재 Project 상태와 일치하는지에 달려 있다. 이 Slide는 그 관계의 정상 시작 상태만 설정한다.

C++ Vision Bridge: 빌드·테스트 구조도 Project 변화의 영향을 받을 수 있다는 일반 원리만 연결한다. 구체적인 C++ 절차는 추가하지 않는다.

Demo Operation: DEMO-04A / VISUAL. Live 실행은 하지 않는다. WATCH FOR: 상시 표시된 CONCEPTUAL CASE label과 Project/Workflow 일치 관계. Required environment: 선택된 발표 화면 TBD. Start cue: label이 보일 때. Stop cue: 정상 시작 상태를 확인한 뒤 2분 종료 전에 S57로 넘긴다.

Audience Interaction: Opening question은 사례를 읽는 질문이다. 실제 응답을 기다리거나 받도록 요구하지 않는다.

Transition: “Project가 바뀌었는데 재사용 Workflow가 그대로라면 어떻게 될까요?” — S57.

Time Management: 이 장에서는 정상 상태만 설정한다. 변화·실패·수정 설명은 후속 장으로 남긴다.

Fallback: prototype visual이 없거나 표시되지 않으면 말로 “가상의 Project와 Workflow가 현재는 일치하는 시작 상태”라고 설명한다. 제품 증거처럼 보이는 캡처는 대체 자료로 사용하지 않는다.

Validation Status: DRAFT — Conceptual boundary 및 Map 역할 대조 완료; 최종 visual/fallback 및 2분 운영 미검증.

## S67 — 실제 제작 기록: TRIAL-006

Slide ID: S67

Working Title: 실제 제작 기록: TRIAL-006

ACT / Section: ACT 4 / 4F Observed Meta Loop / DEMO-04B 시작

Allocated Time: 2 minutes

Mode Split: Demo 2 minutes (CAPTURED)

Primary Message: 실제 교육자료 제작 평가의 TRIAL-006에서 global Harness 영향이 관찰돼 결과의 원인을 Prompt만으로 귀속할 수 없었다.

Opening Question: “이번에는 실제 제작 과정에서 무슨 일이 있었을까요?”

Speaker Flow:

1. **OPEN (0:00–0:20):** S56의 가상 사례와 다른 증거 종류임을 알리고 OBSERVED META CASE label을 가리킨다.
2. **SHOW (0:20–1:10):** TRIAL-006 기록에서 실행 조건, 네 개 global Skills, startup warning cue를 보여 준다.
3. **INTERPRET (1:10–1:40):** “이 환경 영향이 함께 있어 Prompt만의 효과라는 attribution은 PARTIAL입니다.”
4. **TRANSITION (1:40–2:00):** 후속 평가·보고 변화는 아직 결론 내리지 않고 다음 질문으로 넘긴다.

Evidence / Source: TRIAL-006, DEMO-04B, DEC-0016, DEC-0021. Codex CLI 0.154.0, gpt-5.6-sol, macOS 26.6.2 arm64, 격리된 writable worktree. 네 개의 global Skills와 hook/config 및 MCP startup/auth 경고가 기록됐다. MCP tool call/result 증거는 없고 hook의 결과 영향도 확인되지 않았다.

Claim Boundary: OBSERVED_META, 제품 코드나 graypipe Product State가 아니다. 실제 교육자료 제작 평가의 보조 사례이며 Prompt-only attribution은 PARTIAL이다. TRIAL-007/008의 후속 결과를 여기서 미리 말하지 않는다.

Beginner Explanation: 성공 결과를 봤더라도, 주변 환경이 함께 작동했다면 원인을 하나로 단정할 수 없다.

Advanced Insight: 실행 기록의 tool/skill presence와 실제 인과효과는 구분한다. 경고가 있었다는 사실만으로 기능 실패를 추론하지 않는다.

C++ Vision Bridge: N/A.

Demo Operation: DEMO-04B / CAPTURED. WATCH FOR: Trial timeline, 네 global Skills, partial attribution label. SHOW: 최종 선택된 승인 캡처가 있을 때만 해당 기록을 표시한다. Required environment: 발표 PC 및 selected capture TBD. Start cue: OBSERVED META CASE frame. Stop cue: partial attribution을 명시한 뒤 2분 내 마친다. Fallback status: PLANNED — plan/DEMO_MATRIX.md의 TRIAL-006 기록이 있으며 prototype/preview/v2/S67.png는 그 기록을 요약한 재구성 도식이다. 실제 CLI screenshot이 아니다.

Audience Interaction: 질문은 관찰과 원인 추론을 구분하기 위한 것이다. 응답을 요구하지 않는다.

Transition: “이 결과를 Task Prompt만의 효과라고 말할 수 있을까요?” — S68.

Time Management: 환경 한계만 설명한다. 네 Skills의 기능이나 후속 결과를 이 장에서 해설하지 않는다.

Fallback: 최종 승인 캡처가 준비되지 않으면 plan/DEMO_MATRIX.md의 TRIAL-006 기록에서 실행 조건과 partial attribution만 짧게 인용한다. 이 source-record/재구성 도식 경로는 PLANNED이며, 발표용 asset 선택과 대상 화면 검증은 TBD다. global 영향의 결과를 추측하거나 경고를 성공/실패로 바꾸어 말하지 않는다. prototype/preview/v2/S67.png를 실제 CLI 캡처로 제시하지 않는다.

Validation Status: DRAFT — Trial record와 attribution 경계 대조 완료; 최종 media 선택 및 실제 발표 운영 미완료.

## S72 — Project와 환경이 바뀌면 검증도 다시 본다

Slide ID: S72

Working Title: Project와 환경이 바뀌면 검증도 다시 본다

ACT / Section: ACT 4 / 4G C++ Vision Transfer + 4H Discussion / Transition

Allocated Time: 20 minutes

Mode Split: Case 7 minutes + Reflection 2 minutes + Q&A 7 minutes + Transition 4 minutes

Primary Message: Project나 환경의 변화 뒤에는 반복되는 마찰과 원인을 확인하고, 맞는 Layer를 바꾼 뒤 benchmark/regression으로 다시 검증한다. 목표는 Harness를 계속 키우는 일이 아니다.

Opening Question: “Project나 환경이 바뀌면 기존 검증은 그대로 믿어도 될까요?”

Speaker Flow:

1. **CASE — C++ Vision (0:00–7:00):**
   - **R1 / 0:00–1:00:** 가상의 Project/Environment change를 제시한다. “이 예시는 개념 모델이며 실제 Trial이 아닙니다.” Visual focus: 시작 노드.
   - **R2 / 1:00–2:00:** “무엇이 달라진 뒤 어떤 마찰이 보였나요?” 변화와 마찰 노드를 잇는다. Visual focus: observe.
   - **R3 / 2:00–4:00:** 확인된 사실과 원인 가설을 구분한다. “관찰한 것과 아직 추측인 것을 나눠 보겠습니다.” Visual focus: facts / hypothesis.
   - **R4 / 4:00–5:00:** 원인과 맞는 Layer를 선택한다. Prompt 수정으로 곧장 뛰지 않는다. Visual focus: cause → layer.
   - **R5 / 5:00–7:00:** benchmark 조건과 regression을 다시 확인한다. 수치나 개선 결과를 만들지 않는다. Visual focus: verification.
   각 단계의 cutoff는 각각 1, 2, 4, 5, 7분이다. 시간이 모자라면 각 R을 한 문장으로 축약하되 R3 원인 경계와 R5 verification은 남긴다.
2. **REFLECTION (7:00–9:00):** “내 업무에서 비슷한 변화가 발생한다면 무엇을 확인할까요?” 개인적으로 생각하게 한다. Visual focus: reflection cue. 답변 제출은 없다. 9분에 종료한다.
3. **Q&A / DISCUSSION (9:00–16:00):** 초급 질문에는 “무엇이 바뀌었고 무엇을 다시 확인할까?”를, 고급 질문에는 원인 귀속과 대표 benchmark/regression 조건을 연결한다. Visual focus: static flow 전체와 질문 중인 Layer만 가리킨다. 질문이 길어지면 16분에 마감한다.
4. **TRANSITION (16:00–20:00):** “Loop는 Harness를 계속 더하는 일이 아니라, 변화와 증거에 맞춰 필요한 것을 다시 확인하는 과정입니다.” AI-Native Development의 종합 Story로 연결한다. Visual focus: 전체 loop에서 AI-Native Development handoff. 20분에 종료한다.

Evidence / Source: S72 teaching model, BEAT-059, TRANS-012, DEC-0021, VISUAL_SPEC.md §8, VISUAL_TEMPLATE_FREEZE.md. GPU architecture/toolchain 변화는 개념 사례뿐이다. Slide는 static visual + speaker-led highlighting 기본이다.

Claim Boundary: 이 장은 TEACHING_MODEL이며 Product Trial 결과가 아니다. 특정 Windows, CUDA, GPU, hardware 또는 toolchain 절차가 검증됐다고 말하지 않는다. 가상 사례의 원인이나 benchmark 결과를 만들어내지 않는다.

Beginner Explanation: 환경이 바뀐 뒤에는 예전 절차를 그대로 반복하지 말고, 무엇이 달라졌는지와 다시 확인할 것을 찾는다.

Advanced Insight: 확인된 변화와 원인 가설을 분리하고, 원인과 같은 Layer에서 최소한으로 조정한 뒤 대표 작업의 benchmark/regression으로 범위를 확인한다.

C++ Vision Bridge: 중심 연결. 도구 이름이나 설정 목록보다 변화 후 검증 조건을 다시 확인하는 Engineering Pattern에 집중한다.

Demo Operation: N/A — 정적 teaching visual이며 Live/recorded Product Demo가 아니다. Highlight 순서는 R1 → R5 → Reflection → Q&A → Transition이다. 실제 GPU/hardware 화면을 붙이지 않는다.

Audience Interaction: Reflection은 응답 없는 개인 생각 시간이다. Q&A는 초급과 고급 질문 모두 허용하고, wait time은 rehearsal 전까지 TBD. 청중 질문이 없으면 fallback question으로 “초급 관점에서는 Project가 바뀐 뒤 무엇부터 확인할까요?”, “숙련 관점에서는 benchmark가 대표 작업을 반영하는지 어떻게 확인할까요?”를 제시한다. 답변을 강제하지 않는다.

Transition: “지금까지의 단계를 하나의 problem-driven Story로 되짚어 보겠습니다.” — S73.

Time Management: 구간은 Case 7 + Reflection 2 + Q&A 7 + Transition 4 = 20분이다. Cutoff cue: “질문은 여기까지 받고, 이제 핵심 모델을 다음 장으로 연결하겠습니다.” 16:00에 Q&A를 닫아 4분 handoff를 보장한다. 앞 구간이 늦어지면 부수 설명을 줄이고 R3의 사실/가설 경계와 R5 verification을 남긴다. 20:00에 끝낸다.

Fallback: 화면을 사용할 수 없으면 각 R1–R5를 말로 설명하고, 개념 사례라는 boundary를 반복한다. Q&A에 질문이 없으면 위 두 fallback question을 강사가 짧게 던진 뒤 응답을 강제하지 않고 16:00 cutoff cue로 넘어간다. 이 운영은 실제 20분 rehearsal로 검증되지 않았고 Windows/교육장 대체화면도 TBD다.

Validation Status: DRAFT — Flow 및 20분 산술 확인 완료; DEC-0025에 따라 Q&A 9–16분 → Transition 16–20분으로 관련 문서를 정렬했다. 실제 20분 rehearsal, audience Q&A, projection/target PC, fallback은 UNVERIFIED다.
