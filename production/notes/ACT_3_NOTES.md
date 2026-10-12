# ACT 3 — Speaker Notes

Status: REVIEWED — S37–S54 follow the approved Slide Map and 19-field schema. Source boundaries and local rendering were reviewed; external validation is recorded in `production/evaluation/ACT_3_EVALUATION.md`.

Authority: `plan/SLIDE_MAP.md`, `plan/SLIDE_TEMPLATE_MAP.md`, `plan/VISUAL_SPEC.md`, `plan/VISUAL_TEMPLATE_FREEZE.md`, `plan/SPEAKER_NOTES_ARCHITECTURE.md`, `plan/SPEAKER_NOTES_FREEZE.md`, `plan/PRODUCTION_PLAN.md`, `plan/CLAIM_FREEZE.md`, `plan/DEMO_MATRIX.md`, `plan/DEMO_RUNBOOK_SPEC.md`, and `plan/DECISIONS.md`.

## S37 — 서로 다른 Performance Task, 반복되는 절차

Slide ID: S37

Working Title: 서로 다른 Performance Task, 반복되는 절차

ACT / Section: ACT 3 / 3A

Allocated Time: 5 minutes

Mode Split: Case 5 minutes

Primary Message: TRIAL-006의 `resize_nearest`와 TRIAL-007의 `normalize`처럼 서로 다른 목표에서도 유사한 performance procedure가 반복될 수 있다.

Opening Question: “Task가 달라도 왜 같은 작업 방법을 계속 쓰고 있지?”

Speaker Flow:

1. (0:00–2:00) 서로 다른 두 Task goal을 나란히 보여준다.
2. (2:00–4:00) 두 기록에 반복된 baseline, 조사, 계획, 변경, test, benchmark, 비교, review를 강조한다.
3. (4:00–5:00) 반복 관찰과 원인 귀속을 분리하고 Prompt-only attribution이 PARTIAL임을 밝힌다.

Evidence / Source: TRIAL-006 (`resize_nearest`), TRIAL-007 (`normalize`), BEAT-018/020. Codex CLI 기록 실행의 workflow 비교.

Claim Boundary: 유사한 절차가 관찰됐지만 Prompt만의 효과로 귀속하지 않는다. 개별 성능 결과는 해당 코드·입력·환경에 한정한다.

Beginner Explanation: 서로 다른 작업에서도 조사하고 확인하는 순서가 반복될 수 있다.

Advanced Insight: Task별 목표와 지속해서 재사용할 절차를 구분하고, Global Harness가 미친 영향을 고려한다.

C++ Vision Bridge: N/A.

Demo Operation: TRIAL-006/007을 요약한 정적 재구성 도식을 사용한다. 새로운 실행이나 실제 터미널 화면이라고 말하지 않는다.

Audience Interaction: 두 Task의 공통 절차를 잠시 관찰하게 한다. 공개 답변은 요구하지 않는다.

Transition: “Project 지식과 작업 절차는 각각 어떤 질문에 답할까?”

Time Management: Case 5분을 두 Task 비교, 공통 절차, attribution 한계 순으로 쓴다. 수치 설명으로 확장하지 않는다.

Fallback: READY — `production/ACT_3.pptx`의 정적 비교 도식과 `production/preview/act3/S37.png`를 사용한다.

Validation Status: REVIEWED — Source, claim scope, and local Keynote render reviewed. Windows PowerPoint, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S38 — Project 사실과 작업 절차는 다르다

Slide ID: S38

Working Title: Project 사실과 작업 절차는 다르다

ACT / Section: ACT 3 / 3A

Allocated Time: 4 minutes

Mode Split: Lecture 4 minutes

Primary Message: Project에서 일반적으로 참인 사실과 반복되는 작업 방법은 서로 다른 설계 문제다.

Opening Question: “Agent가 알아야 할 것과 따라야 할 방법은 같은가?”

Speaker Flow:

1. (0:00–1:00) “What is true?”를 Context와 연결한다.
2. (1:00–3:00) “How to work?”를 Workflow에, “What do we want now?”를 Task Prompt에 연결한다.
3. (3:00–4:00) Task 사실, Project 사실, 반복 절차가 다른 책임임을 정리하고 질문을 연다.

Evidence / Source: BEAT-019, TRIAL-006/007. TEACHING_MODEL / CONCEPTUAL.

Claim Boundary: 교육용 구분이다. 공식 제품 분류나 특정 제품 기능이라고 표현하지 않는다.

Beginner Explanation: 프로젝트 설명은 무엇이 참인지 말하고, workflow는 어떤 순서로 일할지 말한다.

Advanced Insight: Project Context를 늘리는 것만으로 반복 절차의 유지 문제가 해결되지는 않는다.

C++ Vision Bridge: N/A.

Demo Operation: N/A.

Audience Interaction: 세 질문과 항목을 조용히 따라오게 한다. 분류 실습은 요구하지 않는다.

Transition: “작업 방법도 Repository가 재사용할 수 있을까?”

Time Management: 4분 동안 세 질문의 책임만 구분한다. Harness 전체 정의는 아직 제시하지 않는다.

Fallback: READY — 정적 세 질문 도식.

Validation Status: REVIEWED — Source, claim scope, and local Keynote render reviewed. Windows PowerPoint, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S39 — Task, Context, Workflow의 역할

Slide ID: S39

Working Title: Task, Context, Workflow의 역할

ACT / Section: ACT 3 / 3B

Allocated Time: 5 minutes

Mode Split: Lecture 5 minutes

Primary Message: Task Prompt는 현재 목표, Project Context는 사실과 제약, Reusable Workflow는 특정 작업을 수행하는 방법을 담는다.

Opening Question: “현재 목표, Project 사실, 반복 절차는 어디에 속하는가?”

Speaker Flow:

1. (0:00–1:00) Task Prompt를 현재 목표와 연결한다.
2. (1:00–2:30) Project Context를 반복되는 사실과 제약으로 설명한다.
3. (2:30–4:00) Workflow를 `baseline → investigate → verify → compare`로 짧게 보인다.
4. (4:00–5:00) 셋이 Prompt 밖에 있어도 책임은 다르다고 정리한다.

Evidence / Source: BEAT-019, TRIAL-006/007. TEACHING_MODEL / CONCEPTUAL.

Claim Boundary: 세 Layer는 교육용 모델이다. Harness 전체 정의나 제품의 공식 분류로 부르지 않는다.

Beginner Explanation: 지금 원하는 일, 계속 유효한 프로젝트 정보, 반복할 작업 순서를 나눠 볼 수 있다.

Advanced Insight: 같은 위치에 저장될 수 있어도 소유권, 갱신 주기, Task별 적용은 다를 수 있다.

C++ Vision Bridge: N/A.

Demo Operation: N/A.

Audience Interaction: 각 Layer 예시를 조용히 따라오게 한다. 노트북 실습은 없다.

Transition: Slide 40에서 반복 절차를 repository-owned asset으로 옮길지 묻는다.

Time Management: 5분 동안 세 책임과 한 개의 workflow 예시만 설명한다.

Fallback: READY — 정적 세 Layer 도식.

Validation Status: REVIEWED — Source, claim scope, and local Keynote render reviewed. Windows PowerPoint, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S40 — 반복 절차를 Skill로 옮길 수 있을까?

Slide ID: S40

Working Title: 반복 절차를 Skill로 옮길 수 있을까?

ACT / Section: ACT 3 / 3C

Allocated Time: 4 minutes

Mode Split: Lecture 4 minutes

Primary Message: 반복 절차를 repository-owned Skill에 두는 것은 Task 목표와 Project 절차를 분리하려는 선택이다.

Opening Question: “긴 Procedure를 Prompt에서 빼도 같은 작업 흐름을 유지할 수 있을까?”

Speaker Flow:

1. (0:00–1:30) 목표와 반복 절차가 함께 들어간 Before를 보여준다.
2. (1:30–3:00) `$graypipe-performance`와 repository Skill을 후보 구조로 보여준다.
3. (3:00–4:00) 성공 결과를 앞당기지 않고 대상 surface와 호출 경로는 확인 대상이라고 말한다.

Evidence / Source: DEC-0017, BEAT-020/021, TRIAL-006/007/008. Skill 선택은 ACCEPTED; 동작 근거는 뒤의 TRIAL-008에 둔다.

Claim Boundary: 여기서는 설계 질문과 후보만 소개한다. 현재 Desktop/계정에서 이용 가능하다고 보장하거나 Skill 우월성을 주장하지 않는다.

Beginner Explanation: 같은 방법을 매번 Prompt에 복사하는 대신 프로젝트가 소유하는 위치를 검토할 수 있다.

Advanced Insight: 반복 근거에 따른 workflow 소유권 선택과 실제 발견·호출 증거를 구분한다.

C++ Vision Bridge: N/A.

Demo Operation: N/A.

Audience Interaction: 성공 여부를 추측하지 않도록 잠깐 멈추고 질문을 남긴다.

Transition: Slide 41에서 TRIAL-008의 발견과 명시적 호출 기록을 확인한다.

Time Management: 4분 중 3분은 문제와 후보를 설명하고, 마지막 1분에 product check 경계를 둔다.

Fallback: READY — 정적 Before/Candidate 도식.

Validation Status: REVIEWED — Source, claim scope, and local Keynote render reviewed. Windows PowerPoint, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S41 — Skill을 어떻게 발견하고 호출할까?

Slide ID: S41

Working Title: Skill을 어떻게 발견하고 호출할까?

ACT / Section: ACT 3 / 3C

Allocated Time: 5 minutes

Mode Split: Demo 5 minutes (HYBRID planned; activation unverified)

Primary Message: TRIAL-008에서 Codex CLI 0.154.0의 `/skills` 목록으로 repository Skill을 찾고 `$graypipe-performance`를 명시적으로 호출했으며, 실행 trace에 Skill 본문이 있었다.

Opening Question: “반복할 작업 절차를 Repository에서 어떻게 찾고 불러올까?”

Speaker Flow:

1. (0:00–1:00) 화면 도식이 재구성 자료이며 근거가 TRIAL-008임을 밝힌다.
2. (1:00–2:30) `/skills` selector가 `graypipe-performance`와 잘린 설명을 표시한 기록을 보여준다.
3. (2:30–4:00) 명시적 `$graypipe-performance` 호출과 실행 trace의 Skill 본문 증거를 순서대로 공개한다.
4. (4:00–5:00) CLI 버전·실행 범위를 밝히고 Desktop과 implicit invocation은 확인하지 않았다고 말한다.

Evidence / Source: TRIAL-008, DEC-0017, BEAT-021. Codex CLI 0.154.0, 명시적 호출, disposable workspace. 시각 자료는 기록의 재구성이다.

Claim Boundary: Product UI 스크린샷이나 현재 Codex Desktop 동작으로 표현하지 않는다. Skill path는 selector가 아니라 실행 trace에서 확인됐다. Implicit invocation은 테스트하지 않았다.

Beginner Explanation: 기록된 CLI 실행에서 Skill을 목록으로 찾고, 호출 표기를 입력해 사용했다.

Advanced Insight: Selector의 발견 증거와 실행 context의 본문 증거를 구별한다. 다른 surface·계정에 일반화하지 않는다.

C++ Vision Bridge: N/A.

Demo Operation: 기본 경로는 재구성된 TRIAL-008 기록이다. 실제 Codex CLI 실행으로 전환하지 않는다. 현재 제품 표면은 REQUIRES PRODUCT CHECK.

Audience Interaction: 발견, 명시적 호출, 본문 확인의 세 단계를 따라오게 한다. 조작을 요구하지 않는다.

Transition: “호출한 뒤 작업 Prompt에서는 무엇이 달라졌을까?”

Time Management: 발견 1.5분, 호출·본문 근거 1.5분, 범위 제한 1분. 실시간 제품 설명을 추가하지 않는다.

Fallback: READY — 정적 TRIAL-008 재구성 도식과 함께 deck 내 근거 설명을 사용한다. Live surface는 활성화하지 않는다.

Validation Status: REVIEWED — Source, claim scope, and local Keynote render reviewed. Windows PowerPoint, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S42 — 절차의 책임이 Prompt에서 Repository로 이동

Slide ID: S42

Working Title: 절차의 책임이 Prompt에서 Repository로 이동

ACT / Section: ACT 3 / 3C

Allocated Time: 6 minutes

Mode Split: Demo 3 minutes (HYBRID planned; activation unverified) + Case 3 minutes

Primary Message: TRIAL-007의 긴 Prompt가 포함하던 절차를 TRIAL-008에서는 명시적으로 호출한 Skill에 맡기고 Prompt에는 목표와 Task별 제약을 남겼다.

Opening Question: “같은 작업 절차를 매번 Prompt에 길게 적어야 할까?”

Speaker Flow:

1. (0:00–1:30) TRIAL-007의 goal, 제약, 긴 procedure를 요약한다.
2. (1:30–3:00) TRIAL-008의 goal, Task별 제약, 명시적 Skill 호출을 비교한다.
3. (3:00–5:00) 양쪽에 반복된 baseline, 조사, test, benchmark, compare, review를 잇는다.
4. (5:00–6:00) 책임 위치 변화만 관찰됐고 토큰 절감은 측정되지 않았다고 정리한다.

Evidence / Source: TRIAL-007/008, DEC-0017, BEAT-021. 관찰된 CLI 기록을 요약한 비교.

Claim Boundary: Skill 우월성, 속도 향상, token/character 절감은 입증되지 않았다. Prompt 구조와 다른 전역 요인의 인과 효과를 따로 분리하지 않는다.

Beginner Explanation: 반복되는 절차를 저장한 위치를 바꿔도 각 작업의 목표는 Prompt에 남는다.

Advanced Insight: 절차의 재사용 설계와 Prompt 길이·효율의 측정 주장을 혼동하지 않는다.

C++ Vision Bridge: N/A.

Demo Operation: 두 Trial을 요약한 정적 비교를 사용한다. 긴 Prompt 전문이나 실제 터미널 화면을 재현하지 않는다.

Audience Interaction: Case 시간에 공통 절차만 비교하도록 안내하고, 공개 응답은 요구하지 않는다.

Transition: “그 Skill에는 구체적인 답이 들어 있을까, 재사용할 작업 방법이 들어 있을까?”

Time Management: Demo 3분은 구조 비교, Case 3분은 공통 procedure와 책임 경계에 쓴다.

Fallback: READY — deck의 정적 Before/Candidate 비교를 사용한다. Live activation은 미확정이다.

Validation Status: REVIEWED — Source, claim scope, and local Keynote render reviewed. Windows PowerPoint, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S43 — 답을 담지 않는 Workflow

Slide ID: S43

Working Title: 답을 담지 않는 Workflow

ACT / Section: ACT 3 / 3D

Allocated Time: 3 minutes

Mode Split: Lecture 3 minutes

Primary Message: Reusable Skill은 검증 절차를 담고 특정 최적화 답이나 측정 결과를 미리 정답으로 고정하지 않는다.

Opening Question: “Skill이 작업 방법을 담는다면, 어디까지 미리 정해도 될까?”

Speaker Flow:

1. (0:00–1:00) Reusable workflow에 baseline, 조사, correctness check, benchmark, compare, review를 배치한다.
2. (1:00–2:00) Algorithm 선택과 실제 측정 결과는 각 Task의 판단으로 분리한다.
3. (2:00–3:00) Skill이 답을 더 잘 찾는다고 주장하지 않고 다음 후보 비교를 연다.

Evidence / Source: TRIAL-008, `graypipe-performance` Skill, DEC-0017, BEAT-022. OBSERVED_PRODUCT / TEACHING_MODEL.

Claim Boundary: 절차 재사용은 관찰됐지만 Skill이 더 나은 최적화 답을 제공한다는 근거는 아니다. Workflow는 task 결과를 고정하지 않는다.

Beginner Explanation: 작업 순서는 재사용할 수 있지만, 어떤 답이 맞는지는 매번 확인해야 한다.

Advanced Insight: Input, runtime, benchmark, trade-off를 procedure definition과 섞지 않는다.

C++ Vision Bridge: N/A.

Demo Operation: Skill 내용을 절차 요약으로만 보여준다. 원문 전체를 제품 화면처럼 그리지 않는다.

Audience Interaction: 왼쪽의 절차와 오른쪽의 Task 판단을 구별하도록 안내한다.

Transition: “실제로 후보를 선택할 때는 무엇을 근거로 삼았을까?”

Time Management: 3분 동안 두 책임만 구분하며 algorithm 설명은 생략한다.

Fallback: READY — 정적 Workflow / Task Decision 도식.

Validation Status: REVIEWED — Source, claim scope, and local Keynote render reviewed. Windows PowerPoint, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S44 — 측정으로 후보를 고르다

Slide ID: S44

Working Title: 측정으로 후보를 고르다

ACT / Section: ACT 3 / 3D

Allocated Time: 5 minutes

Mode Split: Case 5 minutes

Primary Message: TRIAL-008의 `image_statistics` 후보 중 row-level built-in reduction은 수동 단일 순회보다 빠르면서 낮은 traced-memory 사용을 유지해 선택됐다.

Opening Question: “여러 구현 후보 중 무엇을 선택할지 어떻게 판단했을까?”

Speaker Flow:

1. (0:00–1:00) 후보 비교가 STATE-04 → STATE-04-PERF 공식 결과와 다른 Trial 단계임을 밝힌다.
2. (1:00–3:00) 수동 단일 순회는 traced memory가 적었지만 훨씬 느렸다는 정성 비교를 보여준다.
3. (3:00–4:00) Row-level built-in reduction 후보가 시간·메모리 trade-off에서 선택된 근거를 말한다.
4. (4:00–5:00) 동일한 six-field correctness guard와 workload 한계를 확인한다.

Evidence / Source: TRIAL-008 candidate comparison; `image_statistics`; synthetic 1024×768 image, CPython 3.9.6 / macOS 26.6.2 arm64; same six-field correctness guard.

Claim Boundary: 정확한 candidate 수치는 표시하지 않는다. Candidate 결과를 S45의 formal state benchmark와 섞지 않는다. Skill이 algorithm이나 결과를 만들었다고 하지 않는다.

Beginner Explanation: 적은 메모리만 보고 선택하지 않고 같은 조건에서 실행시간과 정확성을 함께 확인했다.

Advanced Insight: Candidate comparison과 named product-state before/after 측정은 Evidence 단계가 다르다.

C++ Vision Bridge: N/A.

Demo Operation: 정성 Candidate Comparison 카드만 사용한다. 새 benchmark를 실행하지 않는다.

Audience Interaction: Case 질문을 제시하고 실행시간과 메모리의 trade-off를 생각하게 한다.

Transition: “선택한 변화는 어떤 검증을 거쳐 제품 상태에 반영됐을까?”

Time Management: 5분 중 3분은 두 후보 차이, 1분은 correctness guard, 1분은 evidence 경계에 쓴다.

Fallback: READY — deck의 정성 비교 카드와 검증 조건을 사용한다.

Validation Status: REVIEWED — Source, claim scope, and local Keynote render reviewed. Windows PowerPoint, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S45 — Working Harness Success

Slide ID: S45

Working Title: Working Harness Success

ACT / Section: ACT 3 / 3D

Allocated Time: 5 minutes

Mode Split: Case 5 minutes

Primary Message: STATE-04 → STATE-04-PERF의 bounded `image_statistics` 변경은 기록된 조건에서 median과 traced allocation이 달랐고 정해진 tests, CLI, benchmark guards를 통과했다.

Opening Question: “조사와 비교가 실제로 확인 가능한 결과로 이어졌을까?”

Speaker Flow:

1. (0:00–1:00) Task부터 Product change까지의 Harness 사용 경로를 짧게 회수한다.
2. (1:00–2:30) Median `15.468 → 10.769 ms/call`을 named states와 함께 보여준다.
3. (2:30–3:30) `tracemalloc` peak `6,675,804 → 380 B`를 allocation 지표로 설명하고 RSS가 아님을 밝힌다.
4. (3:30–5:00) Focused 1/1, full 11/11, CLI smoke, benchmark guard PASS를 확인하고 인과 주장을 제한한다.

Evidence / Source: STATE-04 → STATE-04-PERF; TRIAL-008; deterministic synthetic 1024×768 image (786,432 pixels, max 255); CPython 3.9.6 / macOS 26.6.2 arm64; seven one-call samples per state.

Claim Boundary: 숫자는 이 입력, 코드 경로, host, runtime, 측정 조건에 한정한다. `tracemalloc`은 Python allocation peak이지 RSS가 아니다. Harness나 Skill이 성능 향상을 일으켰다고 하지 않는다.

Beginner Explanation: 바뀐 코드가 맞는지 Test와 같은 benchmark로 확인한 기록이 있다.

Advanced Insight: Observed product change와 시스템 구성요소의 단독 인과를 분리한다.

C++ Vision Bridge: N/A.

Demo Operation: 고정된 STATE-04 / STATE-04-PERF 수치와 guard 결과를 표시한다. 새 Trial이나 benchmark를 실행하지 않는다.

Audience Interaction: Case로 측정 조건과 verification을 짚고 일반화하지 않도록 안내한다.

Transition: “이 결과를 위해 Subagent도 필요했을까?”

Time Management: 5분을 metric 2.5분, test/CLI guards 1.5분, attribution limit 1분으로 나눈다.

Fallback: READY — static state comparison과 check summary를 사용한다.

Validation Status: REVIEWED — Source, claim scope, and local Keynote render reviewed. Windows PowerPoint, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S46 — 이 작업에 Subagent가 필요했을까?

Slide ID: S46

Working Title: 이 작업에 Subagent가 필요했을까?

ACT / Section: ACT 3 / 3E

Allocated Time: 4 minutes

Mode Split: Demo 3 minutes (VISUAL) + Q&A 1 minute

Primary Message: 현재 performance 작업은 하나의 Agent가 처리할 수 있었고 별도 Context의 병렬화 이득이 작아 Subagent를 정당화하지 않았다.

Opening Question: “성능 작업을 여러 Agent로 나누는 게 이 사례에 도움이 됐을까?”

Speaker Flow:

1. (0:00–1:00) Pipeline 변경, 영향 조사, 결과 검토가 한 흐름으로 연결됨을 보인다.
2. (1:00–3:00) 작업 독립성, 병렬 가능성, handoff/merge 비용으로 현재 사례를 점검한다.
3. (3:00–4:00) 마지막 Q&A 1분에 질문을 받고, 이번 판단은 현재 Task에만 적용한다고 말한다.

Evidence / Source: DEC-0018, BEAT-023–025; STATE-04 / STATE-04-PERF의 project/task complexity review. OBSERVED_PRODUCT / TEACHING_MODEL.

Claim Boundary: `NOT JUSTIFIED YET`는 현재 사례의 판단이다. Subagent 기능이 없거나 일반적으로 불필요하다는 뜻이 아니다.

Beginner Explanation: Agent를 늘리기 전에 실제로 독립시킬 작업이 있는지 본다.

Advanced Insight: 병렬화 이득, context separation, coordination 및 merge 비용을 함께 평가한다.

C++ Vision Bridge: 다음 Slide의 가정적 C++ 예시에서만 연결한다.

Demo Operation: 세 기준을 보여주는 정적 VISUAL Demo다. Product Subagent를 호출하지 않는다.

Audience Interaction: 마지막 1분 질문을 받는다. 질문이 없으면 “무엇을 독립 실행할 수 있었나?”를 짧게 던지고 계속한다.

Transition: “어떤 작업 구조라면 Subagent 검토가 타당해질까?”

Time Management: 시각 검토 3분, Q&A 1분을 보호한다.

Fallback: READY — static decision visual; 별도 제품 surface가 필요하지 않다.

Validation Status: REVIEWED — Source, claim scope, and local Keynote render reviewed. Windows PowerPoint, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S47 — Subagent를 고려할 조건

Slide ID: S47

Working Title: Subagent를 고려할 조건

ACT / Section: ACT 3 / 3E

Allocated Time: 4 minutes

Mode Split: Lecture 1 minute + Demo 2 minutes (VISUAL) + Q&A 1 minute

Primary Message: 독립된 조사와 Context, 병렬 가능성, 명확한 handoff가 있을 때 Subagent를 검토하고 조정 비용이 더 크면 보류한다.

Opening Question: “어떤 일이 실제로 독립된 병렬 작업일까?”

Speaker Flow:

1. (0:00–1:00) 조건부 판단을 위한 세 질문을 제시한다.
2. (1:00–3:00) 독립적인 조사 / 병렬 가능한 작업 / 명확한 handoff와 보류 신호를 비교한다.
3. (3:00–4:00) 대형 C++ Repository 사례는 가정이라고 표시하고 Q&A 1분을 연다.

Evidence / Source: BEAT-023–025, DEC-0018. TEACHING_MODEL; hypothetical C++ case.

Claim Boundary: 현재 Demo에서 관찰한 Subagent 결과가 아니다. 제품 동작·사용법은 설명하지 않는다.

Beginner Explanation: 서로 영향을 덜 주는 일을 나눌 수 있을 때만 여러 Agent를 고려한다.

Advanced Insight: Context 경계와 병렬 결과의 integration cost가 역할 분리의 이익보다 작아야 한다.

C++ Vision Bridge: C++ Repository에서 성능, build toolchain, test 조사가 실제로 독립적일 수 있다는 가정 예만 든다.

Demo Operation: Conceptual decision visual. Subagent 제품 실행이나 지원 여부를 보여주지 않는다.

Audience Interaction: Q&A 1분. 질문이 없으면 “결과를 합칠 책임자는 누구인가?”를 fallback 질문으로 사용한다.

Transition: “반복 절차 말고, 다시 찾기 어려운 지식도 남길 필요가 있었을까?”

Time Management: 세 조건, 보류 신호, 가정 예시를 각 한 번만 다룬다.

Fallback: READY — 정적 조건부 판단 도식.

Validation Status: REVIEWED — Source, claim scope, and local Keynote render reviewed. Windows PowerPoint, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S48 — 무엇이 다시 찾기 어려운 지식인가?

Slide ID: S48

Working Title: 무엇이 다시 찾기 어려운 지식인가?

ACT / Section: ACT 3 / 3F

Allocated Time: 4 minutes

Mode Split: Demo 2 minutes (VISUAL) + Case 2 minutes

Primary Message: 현재 Demo의 계약·명령·구조·절차·Trial 기록은 각각 유지 중인 Source of Truth에 있었고, 별도 Memory 후보는 발견되지 않았다.

Opening Question: “다음 작업에서 다시 발견하기 어려운 지식은 무엇일까?”

Speaker Flow:

1. (0:00–2:00) 계약·명령·아키텍처를 코드/docs로, 반복 절차를 Skill로, Trial 결과를 observation record로 연결한다.
2. (2:00–3:00) 이 분류가 현재 repository audit임을 명확히 한다.
3. (3:00–4:00) 다른 Source of Truth에 없는 costly rediscovery 후보를 검토할 필요를 연다.

Evidence / Source: DEC-0018, DEMO-08 knowledge audit, BEAT-026–028. OBSERVED_PRODUCT / TEACHING_MODEL.

Claim Boundary: 제품 Memory 기능의 존재, 범위, 성능에 관한 주장이 아니다. 현재 Demo에서 별도 보존 후보를 찾지 못했다는 범위다.

Beginner Explanation: 새 기억을 만들기 전에 같은 사실이 이미 어디에 기록돼 있는지 찾는다.

Advanced Insight: 출처, 적용 범위, 갱신 가능성과 기존 Source of Truth의 중복 여부를 검토한다.

C++ Vision Bridge: N/A.

Demo Operation: 네 지식 범주를 정적으로 연결하는 VISUAL Demo. Memory 기능을 실행하거나 흉내내지 않는다.

Audience Interaction: Case 2분 동안 어떤 지식이 어디에 이미 있는지 생각하도록 한다. 공유나 기록은 요구하지 않는다.

Transition: “그럼 어떤 지식에 Memory를 검토할 조건이 있을까?”

Time Management: 두 범주 예시와 현재 audit 결과를 중심으로 4분을 쓴다.

Fallback: READY — 정적 knowledge/source 분류도.

Validation Status: REVIEWED — Source, claim scope, and local Keynote render reviewed. Windows PowerPoint, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S49 — Memory는 재발견 비용으로 판단

Slide ID: S49

Working Title: Memory는 재발견 비용으로 판단

ACT / Section: ACT 3 / 3F

Allocated Time: 4 minutes

Mode Split: Lecture 4 minutes

Primary Message: 재발견 비용이 크고 Project 간 재사용 가능하며 출처·범위·신선도를 관리할 수 있을 때 Memory를 검토한다.

Opening Question: “무엇을 기억해 두어야 다음 작업의 비용이 실제로 줄어들까?”

Speaker Flow:

1. (0:00–1:00) 재발견 비용과 재사용성을 첫 질문으로 둔다.
2. (1:00–3:00) 출처·적용 범위·신선도·무효화 기준을 점검한다.
3. (3:00–4:00) 현재 Demo에서는 해당 조건을 만족하는 항목을 찾지 못했다고 정리한다.

Evidence / Source: DEC-0018, BEAT-026–028, INV-DEMO-003. TEACHING_MODEL.

Claim Boundary: 조건은 교육용 판단 model이지 제품 Memory 기능의 효과나 범위에 관한 claim이 아니다. 현재 Demo의 결정으로 한정한다.

Beginner Explanation: 나중에 다시 찾기 어렵고 실제로 반복해서 쓰는 지식인지 먼저 따져본다.

Advanced Insight: Provenance, scope, freshness, invalidation이 없으면 유지되는 기억이 오래된 정보가 될 수 있다.

C++ Vision Bridge: N/A.

Demo Operation: N/A.

Audience Interaction: 네 판단 질문을 하나씩 따라오게 한다. Memory를 만들라는 과제는 없다.

Transition: “현재 문제를 해결하는 데 실제로 필요했던 구조는 무엇이었을까?”

Time Management: 4분 동안 조건을 설명하고 기준을 feature checklist로 바꾸지 않는다.

Fallback: READY — 정적 decision criteria 카드.

Validation Status: REVIEWED — Source, claim scope, and local Keynote render reviewed. Windows PowerPoint, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S50 — Minimum Effective Harness

Slide ID: S50

Working Title: Minimum Effective Harness

ACT / Section: ACT 3 / 3G

Allocated Time: 3 minutes

Mode Split: Demo 3 minutes (CAPTURED)

Primary Message: STATE-04-PERF까지 이어진 현재 사례는 Prompt, Context와 Routing, reusable Skill, Benchmark, Tests, Tools/Environment를 사용했고 Subagent와 Memory를 추가하지 않았다.

Opening Question: “이번 작업을 위해 실제로 무엇이 필요했을까?”

Speaker Flow:

1. (0:00–1:00) Task에서 state outcome으로 이어진 실제 구성을 묶어 보인다.
2. (1:00–2:00) 필요한 Context, Skill, benchmark, tests와 environment를 연결한다.
3. (2:00–3:00) Subagent/Memory는 추가되지 않았으며 최소 구성은 문제에 따라 바뀐다고 정리한다.

Evidence / Source: STATE-00 → STATE-04-PERF, DEC-0018, INV-VERIFY-001, DEMO-09. OBSERVED_PRODUCT / TEACHING_MODEL.

Claim Boundary: 현재 프로젝트의 구성 감사다. 일반적인 최적 기능 수나 Harness가 성능을 개선한 인과 claim이 아니다.

Beginner Explanation: Harness는 기능을 많이 모으는 일이 아니라 현재 문제에 필요한 작업 환경을 마련하는 일이다.

Advanced Insight: “Minimum Effective”는 신뢰성 있게 해결할 조건을 충족하는 문제별 heuristic이며 숫자 기준이 없다.

C++ Vision Bridge: Slide 51–53에서 Project별 build, test, benchmark 절차로 연결한다. Python Skill을 C++로 복사하지 않는다.

Demo Operation: 승인된 State와 기록의 captured summary를 사용한다. Demo repository나 현재 제품을 실행하지 않는다.

Audience Interaction: 구성요소보다 문제와 evidence가 연결되는 흐름을 보게 한다.

Transition: 다음 Slide에서 Tools, Environment, Verification을 포함한 Harness 운영 정의를 묶는다.

Time Management: 3분 동안 실제 구성과 빠진 두 요소를 확인한다. 일반론으로 확장하지 않는다.

Fallback: READY — static STATE-04-PERF 구성 및 check summary.

Validation Status: REVIEWED — Source, claim scope, and local Keynote render reviewed. Windows PowerPoint, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S51 — Harness는 작업 환경 설계다

Slide ID: S51

Working Title: Harness는 작업 환경 설계다

ACT / Section: ACT 3 / 3G

Allocated Time: 6 minutes

Mode Split: Lecture 4 minutes + Demo 2 minutes (CAPTURED)

Primary Message: 이 교육에서 Harness는 Agent가 Project에서 안정적으로 일하도록 설계한 작업 환경과 절차를 뜻하는 운영 model이다.

Opening Question: “Harness는 결국 무엇을 의미하는가?”

Speaker Flow:

1. (0:00–2:00) Task Prompt, Project Context, Routing, Workflow, Verification, Tools/Environment를 작업 환경으로 묶는다.
2. (2:00–4:00) Developer와 Agent가 이 환경 안에서 일하는 개념 그림을 설명한다.
3. (4:00–6:00) STATE-04-PERF에서 관찰된 요소를 작은 evidence inset으로 연결하고, Subagent/Memory는 필수 구성으로 그리지 않는다.

Evidence / Source: DEC-0023, BEAT-035/036, STATE-04-PERF. OBSERVED_PRODUCT / TEACHING_MODEL.

Claim Boundary: 과정의 operational definition이다. 공식 OpenAI 정의나 보편적 industry standard로 제시하지 않는다.

Beginner Explanation: Agent가 알 정보뿐 아니라 일하는 절차와 결과를 확인하는 환경도 함께 설계한다.

Advanced Insight: Harness는 특정 파일이나 기능 목록이 아니라 Project별 신뢰성 문제를 해결하는 system model이다.

C++ Vision Bridge: Slide 53에서 C++ Project 환경에 같은 Engineering Pattern을 연결한다.

Demo Operation: `STATE-04-PERF` 요소만 captured inset으로 보인다. 실제 실행 화면 또는 모든 환경 요소의 인벤토리로 표현하지 않는다.

Audience Interaction: Evidence inset과 교육용 전체 model의 시각적 경계를 짚는다.

Transition: “그 작업 환경은 Repository 파일만으로 결정될까?”

Time Management: 개념 설명 4분, 관찰된 구성 2분. 기능 이름 열거에 시간을 쓰지 않는다.

Fallback: READY — 정적 Harness model 및 State evidence inset.

Validation Status: REVIEWED — Source, claim scope, and local Keynote render reviewed. Windows PowerPoint, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S52 — Repository 밖의 환경도 결과에 영향을 준다

Slide ID: S52

Working Title: Repository 밖의 환경도 결과에 영향을 준다

ACT / Section: ACT 3 / 3G

Allocated Time: 3 minutes

Mode Split: Lecture 3 minutes

Primary Message: Trial 결과를 해석할 때 Project repository 바깥의 Global instructions, Skills, Hooks, MCP, Permissions, Model/configuration, OS/runtime도 가능한 환경 층이다.

Opening Question: “Repository가 같으면 Agent 실행 환경도 같은가?”

Speaker Flow:

1. (0:00–1:00) Repository 경계 바깥에 가능한 실행 환경 요소를 둔다.
2. (1:00–2:00) Trial 기록에 global Skills와 hook trust/MCP startup 기록이 일부 있었다고 짚는다.
3. (2:00–3:00) 모든 요소가 결과를 바꿨다거나 environment 전체가 조사됐다는 뜻은 아니라고 한정한다.

Evidence / Source: TRIAL-006/007/008, DEC-0016/0021, BEAT-033/036. OBSERVED_META / TEACHING_MODEL.

Claim Boundary: 전체 영향의 완전한 inventory가 아니다. Hook 실행이나 MCP task result가 관찰됐다고 말하지 않는다. TRIAL-007의 보고와 stderr 차이를 이 장에서 재해석하지 않는다.

Beginner Explanation: 같은 repository여도 실행 설정이나 주변 지침은 다를 수 있다.

Advanced Insight: Ambient Harness 요인을 기록하고 Trial의 attribution 범위를 제한하되 미확인 인과를 만들지 않는다.

C++ Vision Bridge: 같은 C++ repository도 Toolchain, 권한, runtime 조건이 다를 수 있다는 정도로만 잇는다.

Demo Operation: ACT 4에서 다룰 Meta 근거는 상세히 재생하지 않는다. 정적 preview visual로만 다룬다.

Audience Interaction: 가능한 환경 층과 실제 확인된 흔적을 구분해 보도록 안내한다.

Transition: “이 환경 설계 원칙은 C++ Vision Project에 어떻게 옮겨갈까?”

Time Management: 3분 동안 환경 경계와 evidence 한계를 설명한다. 요소별 제품 기능 강의는 하지 않는다.

Fallback: READY — 정적 environment ring 및 “부분 관찰 / 전체 미확인” 표기.

Validation Status: REVIEWED — Source, claim scope, and local Keynote render reviewed. Windows PowerPoint, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S53 — Engineering Pattern은 C++에도 전이된다

Slide ID: S53

Working Title: Engineering Pattern은 C++에도 전이된다

ACT / Section: ACT 3 / 3H

Allocated Time: 5 minutes

Mode Split: Lecture 5 minutes

Primary Message: Python Demo의 코드나 도구를 복사하는 대신 Context, Verification, Benchmark, Reusable Workflow의 Engineering Pattern을 C++ Vision 업무에 대응시킨다.

Opening Question: “우리 Repository에서는 무엇이 Project Context이고 무엇이 Workflow인가?”

Speaker Flow:

1. (0:00–1:00) Python Demo와 C++ Vision을 두 열로 둔다.
2. (1:00–3:30) Project Context, tests, benchmark, workflow를 build/algorithm/hardware constraints, GoogleTest/CTest, profiler/benchmark, regression procedure에 대응한다.
3. (3:30–5:00) `baseline → profile → change → regression check`를 공통 패턴으로 회수한다.

Evidence / Source: BEAT-036, CLM-0016/0017/0030, OQ-011. TEACHING_MODEL.

Claim Boundary: 교육용 전이 예다. C++ Demo를 구현하거나 팀별 실제 도구 규칙을 검증한 것이 아니다.

Beginner Explanation: 언어가 달라도 먼저 프로젝트 규칙과 확인 방법을 찾는다.

Advanced Insight: Build mode, hardware assumptions, module contracts, and regression criteria belong to the actual project.

C++ Vision Bridge: PRIMARY — Python `unittest` → GoogleTest/CTest or integration checks; benchmark script → benchmark/profiler; Project Context → build, algorithm, hardware constraints. Team standards must be checked before choosing tools.

Demo Operation: N/A.

Audience Interaction: 청중이 자사 Project의 Context와 Workflow를 구분할 질문을 제시한다. 답변을 요구하지 않는다.

Transition: “현재 업무에서 어떤 구조가 실제로 필요한지 되돌아보자.”

Time Management: 5분 동안 도구 이름보다 패턴 대응을 중심으로 설명한다.

Fallback: READY — 정적 Python-to-C++ pattern transfer 도식.

Validation Status: REVIEWED — Source, claim scope, and local Keynote render reviewed. Windows PowerPoint, target-PC fonts, room projection, and timed rehearsal remain unverified.

## S54 — 필요한 구조부터 질문하기

Slide ID: S54

Working Title: 필요한 구조부터 질문하기

ACT / Section: ACT 3 / 3I

Allocated Time: 10 minutes

Mode Split: Reflection 3 minutes + Q&A 5 minutes + Transition 2 minutes

Primary Message: 기능을 더하기 전에 반복되는 마찰을 찾고 원인과 검증 요구에 맞는 최소 구조를 판단한다.

Opening Question: “내 업무에서 지금 가장 반복되는 마찰은 무엇인가?”

Speaker Flow:

1. (0:00–3:00) 개인 reflection: Project 사실, 절차, 독립 병렬 조사, costly rediscovery, 검증 필요 가운데 현재 마찰을 생각하게 한다.
2. (3:00–8:00) Q&A 5분. 참여자가 원할 경우 마찰과 근거를 공유하게 한다. 답변이 없으면 “이 반복은 Context, Workflow, Coordination, 기억 중 무엇에 가까운가?”를 묻는다.
3. (8:00–10:00) STATE-04-PERF가 Subagent/Memory 없이 성공한 bounded Harness임을 보존하고 “Project가 바뀐 뒤에도 계속 맞을까?”로 ACT 4에 넘긴다.

Evidence / Source: STATE-04-PERF, DEC-0018/0021, BEAT-035–038, INV-VERIFY-001. TEACHING_MODEL; bounded observed product success.

Claim Boundary: 이 작업을 실패한 Harness로 재해석하지 않는다. Subagent와 Memory는 조건부 선택이다. 다음 ACT의 개념 사례를 실제 Demo Product failure로 미리 말하지 않는다.

Beginner Explanation: 먼저 반복되는 문제를 찾고, 필요한 구조만 고른다.

Advanced Insight: Project 변화가 가정을 무효화할 수 있는지 생각하되, 다음 ACT의 사례 결과를 먼저 공개하지 않는다.

C++ Vision Bridge: 앞 Slide의 Project별 C++ 적용 질문을 청중 업무로 가져온다.

Demo Operation: N/A.

Audience Interaction: 개인 reflection은 선택적이며 노트북·실습·필수 공개 응답은 없다. 질문은 5분만 사용한다.

Transition: “지금은 잘 동작하는 Harness도 Project가 바뀐 뒤 계속 맞을까?”

Time Management: Reflection 3분, Q&A 5분, Transition 2분. Q&A가 비어도 마지막 질문을 지키고, 초과 응답은 별도 질의로 안내한다.

Fallback: READY — 정적 S54 reflection / Q&A / handoff slide. 답변이 없으면 위 fallback question을 사용한다.

Validation Status: REVIEWED — Source, claim scope, and local Keynote render reviewed. Windows PowerPoint, target-PC fonts, room projection, and timed rehearsal remain unverified.
