# ACT 1 — Speaker Notes

Status: REVIEWED — S10–S21 follow the approved Slide Map and 19-field schema. The local Mac Keynote render, typography, visual density, Notes coverage, source/claim alignment, and ACT 1 time / Mode totals were checked. Windows PowerPoint, target PC fonts, room projection, and timed rehearsal remain UNVERIFIED.

Authority: `plan/SLIDE_MAP.md`, `plan/SLIDE_TEMPLATE_MAP.md`, `plan/VISUAL_SPEC.md`, `plan/VISUAL_TEMPLATE_FREEZE.md`, `plan/SPEAKER_NOTES_ARCHITECTURE.md`, `plan/SPEAKER_NOTES_FREEZE.md`, `plan/PRODUCTION_PLAN.md`, `plan/CLAIM_FREEZE.md`, `plan/DEMO_MATRIX.md`, `plan/DEMO_RUNBOOK_SPEC.md`, and `plan/DECISIONS.md`.

## S10 — Task에는 무엇이 아직 정해지지 않았을까?

Slide ID: S10

Working Title: Task에는 무엇이 아직 정해지지 않았을까?

ACT / Section: ACT 1 / 1A

Allocated Time: 7 minutes

Mode Split: Case 7 minutes

Primary Message: 코드가 보이더라도 무엇을 바꾸고, 무엇을 보존하며, 언제 끝났다고 판단할지는 요청에 명시되어야 한다.

Opening Question: “같은 Repository를 보더라도 Agent가 원하는 결과까지 자동으로 알 수 있을까?”

Speaker Flow:

1. (0:00–2:00) S09의 열린 질문을 회수하고 Repository 접근과 Task 의도를 분리한다.
2. (2:00–5:00) `filter 성능 개선` 요청 옆의 change / preserve / done 빈칸을 보여 준다.
3. (5:00–7:00) 무엇이 정해지지 않았는지 묻고 S11로 넘긴다. 실제 제품 실패 사례라고 부르지 않는다.

Evidence / Source: BEAT-004, TRIAL-001, CLM-0002. TEACHING_MODEL / CONCEPTUAL. TRIAL-001의 실제 실패 사례가 아니다.

Claim Boundary: 접근 가능한 Repository가 Task의 목표·변경 범위·보존 조건·완료 증거를 대신 알려주지는 않는다는 과정의 모델이다. Codex 실패나 Trial 결과로 말하지 않는다.

Beginner Explanation: Agent에게 코드가 보인다는 사실과 내가 원하는 변경을 설명했다는 사실은 다르다. 바꿀 것과 끝의 기준을 적어야 한다.

Advanced Insight: Task goal, constraints, and verification remain separate from repository access. Do not infer deterministic agent behavior from the conceptual example.

C++ Vision Bridge: N/A.

Demo Operation: N/A.

Audience Interaction: Case 질문을 따라가며 무엇이 비어 있는지 생각하게 한다. 공개 답변이나 실습은 요구하지 않는다.

Transition: 어떤 Task 정보가 빠졌는지 약한 요청 비교로 확인한다.

Time Management: 7분을 질문과 세 개의 미정 경계에 쓴다. 새 Prompt 체크리스트나 해결책을 미리 소개하지 않는다.

Fallback: READY — 정적 슬라이드 `production/ACT_1.pptx` S10 또는 `production/preview/act1/S10.png` 사용. 응답이 없어도 7분 후 S11로 이동한다.

Validation Status: REVIEWED — Source/claim alignment and local Mac Keynote render checked. Windows PowerPoint, target PC fonts, room projection and timed rehearsal remain unverified.

## S11 — 요청만으로는 의도가 보이지 않는다

Slide ID: S11

Working Title: 요청만으로는 의도가 보이지 않는다

ACT / Section: ACT 1 / 1B

Allocated Time: 4 minutes

Mode Split: Case 4 minutes

Primary Message: Repository를 볼 수 있어도 바꿀 범위와 완료 조건까지 알 수 있는 것은 아니다.

Opening Question: “Agent 입장에서 무엇을 결정해야 할까?”

Speaker Flow:

1. (0:00–0:45) 짧은 요청을 그대로 읽는다.
2. (0:45–3:00) Goal detail, Preserve, Scope, Evidence, Done의 빈 칸을 차례로 보여 준다.
3. (3:00–4:00) Agent에게 남은 결정을 묻고 Slide 12로 이동한다.

Evidence / Source: BEAT-004, CLM-0002. TEACHING_MODEL / CONCEPTUAL. 실제 Trial에서 사용한 약한 Prompt가 아니다.

Claim Boundary: `crop test 고쳐줘`는 수업용으로 구성한 예시다. 이 요청이 특정 Agent 실패를 일으켰다는 주장을 하지 않는다.

Beginner Explanation: 짧은 요청을 비난하지 않고, 그 안에 남아 있는 질문을 찾아본다.

Advanced Insight: Missing constraints are developer decisions that cannot be derived from repository access alone.

C++ Vision Bridge: N/A.

Demo Operation: N/A.

Audience Interaction: 각 빈 라벨을 잠깐 보여 주고 청중이 가능한 답을 생각하게 한다. 응답을 강요하지 않는다.

Transition: Slide 12에서 같은 요청을 개발자 결정 관점으로 해부한다.

Time Management: 4분 안에 한 요청과 다섯 빈칸만 다룬다. 빈칸의 정답이나 해결책은 제시하지 않는다.

Fallback: READY — 정적 슬라이드 `production/ACT_1.pptx` S11 또는 `production/preview/act1/S11.png` 사용. 청중 응답 없이 진행한다.

Validation Status: REVIEWED — Source/claim alignment and local Mac Keynote render checked. Windows PowerPoint, target PC fonts, room projection and timed rehearsal remain unverified.

## S12 — 개발자가 정해야 하는 경계

Slide ID: S12

Working Title: 개발자가 정해야 하는 경계

ACT / Section: ACT 1 / 1B

Allocated Time: 4 minutes

Mode Split: Case 3 minutes + Reflection 1 minute

Primary Message: Prompt의 실용적 가치는 문장 장식보다 Task ambiguity reduction에 있다.

Opening Question: “무엇을 바꾸고, 무엇을 유지하며, 어디까지 바꿔도 되는가?”

Speaker Flow:

1. (0:00–1:00) change와 preserve 질문을 먼저 둔다.
2. (1:00–3:00) scope, evidence, done을 이어서 보여 준다.
3. (3:00–4:00) 각자 익숙한 요청 하나를 떠올리는 조용한 Reflection으로 마친다.

Evidence / Source: BEAT-004, CLM-0002. TEACHING_MODEL / CONCEPTUAL. 특정 요청이 특정 실패를 반드시 만든다고 하지 않는다.

Claim Boundary: 다섯 질문은 수업용 질문 프레임이다. 특정한 단일 답이나 제품 기능으로 소개하지 않는다.

Beginner Explanation: 요청을 보내기 전에 바꿀 것, 지킬 것, 끝을 어떻게 볼지 묻는다.

Advanced Insight: Clarify scope, preserved contracts, acceptable change surface, and evidence before delegating.

C++ Vision Bridge: N/A.

Demo Operation: N/A.

Audience Interaction: 마지막 1분은 비공개 Reflection이다. 말하기, 노트북, Prompt 작성은 요구하지 않는다.

Transition: Slide 13에서 질문들을 실용적인 Task Specification 구조로 묶는다.

Time Management: Case 3분 후 Reflection 1분을 분리한다. 답을 제공하거나 공개 응답을 받지 않는다.

Fallback: READY — 정적 슬라이드 `production/ACT_1.pptx` S12 또는 `production/preview/act1/S12.png` 사용. 침묵은 정상 진행으로 본다.

Validation Status: REVIEWED — Source/claim alignment and local Mac Keynote render checked. Windows PowerPoint, target PC fonts, room projection and timed rehearsal remain unverified.

## S13 — Task Specification의 다섯 책임

Slide ID: S13

Working Title: Task Specification의 다섯 책임

ACT / Section: ACT 1 / 1C

Allocated Time: 4 minutes

Mode Split: Lecture 4 minutes

Primary Message: Goal, Context, Constraints, Process, Verification은 작업을 구체화하는 교육용 틀이다.

Opening Question: “Agent가 작업을 검토 가능하게 수행하려면 무엇을 알아야 할까?”

Speaker Flow:

1. (0:00–0:45) Task Specification을 과정의 모델로 소개한다.
2. (0:45–3:15) 다섯 책임을 하나의 구조 안에서 연결해 설명한다.
3. (3:15–4:00) 각각이 어떤 미정 질문을 줄였는지 요약하고 S14로 간다.

Evidence / Source: BEAT-005, CLM-0029, OQ-001, OQ-007. TEACHING_MODEL / CONCEPTUAL.

Claim Boundary: 다섯 항목은 과정에서 쓰는 Task Specification 모델이지 공식 OpenAI taxonomy나 universal law가 아니다.

Beginner Explanation: 요청에는 목표, 필요한 상황, 지켜야 할 경계, 작업 흐름, 확인 방법이 들어갈 수 있다.

Advanced Insight: Separate task intent from retained project facts, and identify which judgment remains with the developer.

C++ Vision Bridge: N/A.

Demo Operation: N/A.

Audience Interaction: 설명 중간에 다섯 책임이 줄이는 불확실성을 확인한다. 청중에게 작성 실습을 시키지 않는다.

Transition: Slide 14에서 다섯 책임을 짧은 Before / After에 적용한다.

Time Management: 네 분 동안 각 항목을 한 문장으로 설명한다. 별도 Best Practice 목록이나 제품 기능으로 확장하지 않는다.

Fallback: READY — 정적 슬라이드 `production/ACT_1.pptx` S13 또는 `production/preview/act1/S13.png` 사용.

Validation Status: REVIEWED — Source/claim alignment and local Mac Keynote render checked. Windows PowerPoint, target PC fonts, room projection and timed rehearsal remain unverified.

## S14 — 더 긴 Prompt보다 분명한 경계

Slide ID: S14

Working Title: 더 긴 Prompt보다 분명한 경계

ACT / Section: ACT 1 / 1C + 1F

Allocated Time: 9 minutes

Mode Split: Lecture 6 minutes + Case 3 minutes

Primary Message: 유용성은 Prompt의 길이보다 Goal과 제약, 과정, 검증 경계가 분명한 데서 나온다.

Opening Question: “두 요청에서 실제로 달라진 정보는 무엇인가?”

Speaker Flow:

1. (0:00–2:00) Before 예시를 읽는다.
2. (2:00–5:00) After의 Goal/Context, Constraints, Process, Verification을 같은 축으로 비교한다.
3. (5:00–6:00) Supporting C++ inset을 연결한다.
4. (6:00–9:00) Case 질문으로 어떤 경계가 달라졌는지 생각하고, 이 비교가 실험 결과가 아님을 유지한다.

Evidence / Source: BEAT-005, TRIAL-002, CLM-0029, OQ-001, OQ-007. TEACHING_MODEL / CONCEPTUAL.

Claim Boundary: Before/After는 설명을 위한 개념 예시이며 Trial-002가 약한 Prompt와 구조화 Prompt의 우월성을 비교 검증했다는 뜻이 아니다.

Beginner Explanation: 긴 문장을 쓰는 것보다 바꿀 결과와 지킬 조건, 확인 방법을 드러내는 것이 도움이 되는 질문 틀이다.

Advanced Insight: Make the allowed change surface and completion evidence reviewable; do not claim a causal performance advantage.

C++ Vision Bridge: Supporting inset: Release build, public API/ABI, target hardware constraint, and appropriate tests are analogous boundaries. No concrete Windows, shell, IDE, or hardware procedure is asserted.

Demo Operation: N/A — the comparison is conceptual and is not the exact Trial-002 Prompt.

Audience Interaction: 마지막 Case 3분에는 두 요청에서 새로 명시된 책임을 마음속으로 비교한다. 발표 응답은 요구하지 않는다.

Transition: “이 요청을 받은 Agent는 수정부터 시작할까?”라는 질문으로 Trial 관찰에 들어간다.

Time Management: After는 네 줄의 비교 축으로 한정한다. 전체 Trial Prompt나 코드 지시를 화면에 복사하지 않는다. 시간이 부족하면 C++ inset을 생략한다.

Fallback: READY — 정적 비교 슬라이드 `production/ACT_1.pptx` S14 또는 `production/preview/act1/S14.png` 사용. Trial 결과로 대체하지 않는다.

Validation Status: REVIEWED — Source/claim alignment and local Mac Keynote render checked. Windows PowerPoint, target PC fonts, room projection and timed rehearsal remain unverified.

## S15 — 먼저 무엇을 하는지 보자

Slide ID: S15

Working Title: 먼저 무엇을 하는지 보자

ACT / Section: ACT 1 / 1D

Allocated Time: 2 minutes

Mode Split: Lecture 2 minutes

Primary Message: 이 한 번의 관찰에서는 재현, 조사, 계획, 수정, 검증 순서를 확인할 수 있다.

Opening Question: “이 요청을 받은 Agent가 수정부터 시작할까?”

Speaker Flow:

1. (0:00–0:35) “수정부터 시작할까?”를 제시한다.
2. (0:35–1:35) 다섯 단계를 watch sequence로 가리킨다.
3. (1:35–2:00) 결과 패널을 비워 둔 채 S16으로 이동한다.

Evidence / Source: BEAT-006, TRIAL-002, INV-MATURITY-011. OBSERVED_PRODUCT; one historical Codex CLI run only.

Claim Boundary: TRIAL-002는 2026-09-28 macOS Codex CLI 0.154.0의 단일 실행 기록이다. Desktop, 계정, 반복성 또는 다른 모델을 증명하지 않는다.

Beginner Explanation: 코드 변경 전 어떤 행동을 먼저 살펴볼지 정하면 Demo를 따라가기 쉽다.

Advanced Insight: Keep requested workflow separate from the events evidenced in the recorded run.

C++ Vision Bridge: N/A.

Demo Operation: DEMO-05 / CAPTURED RECORD-BASED WATCH. 2분 Lecture 동안 실제 실행을 재생하지 않는다. `reproduce → investigate → plan → edit → verify` 순서를 WATCH FOR로 제시하고 결과는 비워 둔다. Trial source: `plan/DEMO_MATRIX.md`, TRIAL-002; no current Desktop surface is shown.

Audience Interaction: 관찰 순서를 마음속으로 따라오게 한다. 응답이나 실습을 요구하지 않는다.

Transition: Slide 16에서 조사와 변경의 핵심 장면을 보여준다.

Time Management: 2분 안에 관찰 기준만 설명한다. Trial 결과를 앞당겨 보여 주거나 현재 제품 UI를 재현하지 않는다.

Fallback: READY — 정적 WATCH 슬라이드 `production/ACT_1.pptx` S15 또는 `production/preview/act1/S15.png` 사용. 라이브 실행은 이 단계에서 하지 않는다.

Validation Status: REVIEWED — Source/claim alignment and local Mac Keynote render checked. Windows PowerPoint, target PC fonts, room projection and timed rehearsal remain unverified.

## S16 — 조사에서 한 줄 변경까지

Slide ID: S16

Working Title: 조사에서 한 줄 변경까지

ACT / Section: ACT 1 / 1D

Allocated Time: 4 minutes

Mode Split: Demo 4 minutes (CAPTURED)

Primary Message: failing test와 호출 경로를 확인한 뒤, half-open 범위 계약을 보존하는 최소 변경을 했다.

Opening Question: “수정 전에 어떤 근거를 확인했는가?”

Speaker Flow:

1. (0:00–1:00) 실패 Test와 CLI → pipeline → crop 경로를 짚는다.
2. (1:00–2:00) half-open 계약 `[x_start, x_end)`를 읽는다.
3. (2:00–3:15) 코드 변경 전 계획을 알린 기록을 말한다.
4. (3:15–4:00) 한 줄 diff를 보여 주고 실행을 재현하지 않은 채 S17로 넘긴다.

Evidence / Source: BEAT-006, TRIAL-002, INV-MATURITY-011. OBSERVED_PRODUCT, one recorded CLI run.

Claim Boundary: 실제 변경은 `src/graypipe/transform.py`의 crop slice 한 줄이다. 이 기록은 한 번의 Codex CLI 실행에 한정되며 Prompt 우월성, Desktop 동작 또는 일반 성공률을 증명하지 않는다.

Beginner Explanation: 실패한 Test와 기대 계약을 먼저 맞춘 뒤 꼭 필요한 한 줄만 바꿨다.

Advanced Insight: The code change matches the half-open public contract and is limited to the recorded diff; the plan checkpoint preceded editing.

C++ Vision Bridge: N/A.

Demo Operation: DEMO-05 / CAPTURED historical evidence. Use the reconstructed diagram in this slide, not a terminal screenshot. The visible label is shortened to “crop boundary test”; source test ID: `test_crop_excludes_end_coordinate`. Show failing test → CLI/pipeline/crop path → `[x_start, x_end)` contract → recorded pre-edit plan checkpoint → one-line diff. Do not rerun Codex or modify Demo Repository. Source: TRIAL-002 record and STATE-00-FIXED code.

Audience Interaction: 변경 전에 확인한 근거를 청중이 화면 순서대로 따라오게 한다. 참가자의 코드 검토나 답변을 요구하지 않는다.

Transition: Slide 17에서 변경 결과를 어떤 확인으로 뒷받침했는지 본다.

Time Management: 4분 Demo 구간 안에서 관찰과 변경을 요약한다. 전체 로그와 파일을 보여 주지 않고, 다음 장의 검증 시간을 침범하지 않는다.

Fallback: READY — 정적 PPTX S16 또는 `production/preview/act1/S16.png` 사용. 시각 도식은 기록에서 재구성한 자료이며 원본 화면 캡처가 아니다. 실행 실패 상황은 없다: Live를 하지 않는다.

Validation Status: REVIEWED — Source/claim alignment and local Mac Keynote render checked. Windows PowerPoint, target PC fonts, room projection and timed rehearsal remain unverified.

## S17 — 변경 결과와 확인 증거

Slide ID: S17

Working Title: 변경 결과와 확인 증거

ACT / Section: ACT 1 / 1D

Allocated Time: 4 minutes

Mode Split: Demo 4 minutes (CAPTURED)

Primary Message: 이 사례의 결과는 생성된 코드뿐 아니라 명시된 검증과 diff 확인을 거친 변경이다.

Opening Question: “생성된 변경을 어떤 확인이 뒷받침하는가?”

Speaker Flow:

1. (0:00–0:45) trial scope를 한 번 더 고정한다.
2. (0:45–2:45) 다섯 Check와 지원하는 범위를 차례로 읽는다.
3. (2:45–3:30) benchmark는 수행하지 않았음을 밝힌다.
4. (3:30–4:00) “이제 생성과 완료를 어떻게 나눌까?”로 넘긴다.

Evidence / Source: BEAT-007, INV-VERIFY-001, TRIAL-002, CLM-0029, CLM-0027. OBSERVED_PRODUCT, one Codex CLI run.

Claim Boundary: Focused test 3/3, full suite 11/11, CLI smoke PASS, diff 1 file / 1 line, and `git diff --check` PASS are the recorded results of TRIAL-002. They do not establish every input, platform, or future product run.

Beginner Explanation: 완료라고 말할 때 코드와 함께 어떤 확인이 있었는지 보여 준다.

Advanced Insight: Each check supports a bounded claim: targeted behavior, existing suite coverage, one sample CLI path, and change scope. No benchmark was run.

C++ Vision Bridge: N/A.

Demo Operation: DEMO-05 / CAPTURED result summary from the TRIAL-002 record. Read the five checks and their scopes. No actual terminal screenshot or new execution is used. Keep Benchmark marked NOT RUN; do not infer performance.

Audience Interaction: 각 Check가 무엇을 뒷받침하는지 읽게 한다. 청중에게 테스트 실행을 요구하지 않는다.

Transition: 생성 자체와 완료 판단을 구분하는 Slide 18로 간다.

Time Management: 5개 항목에 각 한 문장만 사용한다. 모델·제품의 일반 우월성이나 performance를 말하지 않는다.

Fallback: READY — 정적 PPTX S17 또는 `production/preview/act1/S17.png` 사용. 수치는 TRIAL-002 기록에 한정한다; 새로운 pass 수치를 추가하지 않는다.

Validation Status: REVIEWED — Source/claim alignment and local Mac Keynote render checked. Windows PowerPoint, target PC fonts, room projection and timed rehearsal remain unverified.

## S18 — Generated ≠ Done

Slide ID: S18

Working Title: Generated ≠ Done

ACT / Section: ACT 1 / 1E

Allocated Time: 3 minutes

Mode Split: Lecture 3 minutes

Primary Message: Task는 결과뿐 아니라 적절한 검증과 review를 포함해야 한다.

Opening Question: “어떤 Check가 어떤 Claim을 뒷받침하는가?”

Speaker Flow:

1. (0:00–0:45) `Generated`와 `Done?` 사이의 질문을 연다.
2. (0:45–1:30) TRIAL-002의 결과 기록을 관찰 카드에서 짚는다.
3. (1:30–2:30) Test, Smoke, Benchmark if needed, Diff review를 Teaching Model로 제시한다.
4. (2:30–3:00) Slide 19로 넘긴다.

Evidence / Source: BEAT-007, INV-VERIFY-001, TRIAL-002, CLM-0029, CLM-0027. OBSERVED_PRODUCT and separate TEACHING_MODEL.

Claim Boundary: TRIAL-002 observations are shown in a solid frame; the check-to-claim relationship is a course model. A benchmark is conditional and was not run in TRIAL-002.

Beginner Explanation: 코드가 생성됐다는 사실은 완료를 판단하는 한 가지 정보일 뿐이다.

Advanced Insight: Choose checks from the task’s risk and the exact claim being made; do not demand every check for every task.

C++ Vision Bridge: Slide 19 contains the approved Supporting C++ transfer inset. Do not duplicate it here.

Demo Operation: TRIAL-002 verification callback only; outside DEMO-05’s 8-minute slot. A small observed-evidence inset is separate from the conceptual Teaching Model. No new Demo execution.

Audience Interaction: 별도 Q&A 시간은 배정되지 않았다. 청중에게 생각할 질문을 주고 다음 장에서 범위를 보여 준다.

Transition: Slide 19에서 각 Check가 뒷받침하는 범위를 비교한다.

Time Management: 세 분 안에 기록 사실과 Teaching Model을 분리한다. S17의 다섯 수치를 다시 읽지 않는다.

Fallback: READY — 정적 PPTX S18 또는 `production/preview/act1/S18.png` 사용. Observed Product와 course model frame의 구분을 유지한다.

Validation Status: REVIEWED — Source/claim alignment and local Mac Keynote render checked. Windows PowerPoint, target PC fonts, room projection and timed rehearsal remain unverified.

## S19 — Check마다 확인하는 범위

Slide ID: S19

Working Title: Check마다 확인하는 범위

ACT / Section: ACT 1 / 1E + 1F

Allocated Time: 5 minutes

Mode Split: Lecture 4 minutes + Reflection 1 minute

Primary Message: Check 하나가 모든 정확성을 증명하지는 않는다.

Opening Question: “이 Check로 무엇까지 말할 수 있는가?”

Speaker Flow:

1. (0:00–1:00) 왼쪽 Trial 카드에서 실제 수행한 Check를 보인다.
2. (1:00–3:00) 오른쪽 Teaching Model의 다섯 check-to-claim 대응을 설명한다.
3. (3:00–4:00) C++ Vision inset을 같은 원리의 transfer로 짚는다.
4. (4:00–5:00) 개인 Reflection으로 마친다.

Evidence / Source: BEAT-007, INV-VERIFY-001, TRIAL-002, CLM-0029, CLM-0027. Actual checks are separate from the TEACHING_MODEL mapping.

Claim Boundary: Focused/full tests, CLI smoke, and diff review are actual TRIAL-002 checks. The mapping is a course model; benchmark was not run. No single check proves all correctness.

Beginner Explanation: Focused test는 바뀐 동작을, 전체 Test는 기존 suite의 범위를, smoke는 sample 실행 경로를 확인한다.

Advanced Insight: For C++ projects, match Release build, API/ABI checks, regression tests, and measurement to the claim and risk. These are illustrative engineering patterns, not this Demo repository’s tooling.

C++ Vision Bridge: Supporting Bridge: `build claim → Release build`; `compatibility claim → API / ABI review`; `performance claim → benchmark with named workload`. No Windows, shell, IDE, or hardware setup is asserted.

Demo Operation: TRIAL-002 evidence callback outside the 8-minute Demo slot. Keep the observed Trial card solid and the generic check-to-claim map separate. The benchmark row explicitly says it was not run in the Trial.

Audience Interaction: 마지막 1분은 각자가 익숙한 Check와 그 Check가 뒷받침하는 Claim을 조용히 생각한다. 결과 발표는 요구하지 않는다.

Transition: 다음 작업에도 반복할 정보를 청중이 구분하도록 질문을 연다.

Time Management: Lecture 4분과 Reflection 1분을 분리한다. Advanced C++ examples are optional under time pressure; keep the scope labels.

Fallback: READY — 정적 PPTX S19 또는 `production/preview/act1/S19.png` 사용. Trial check 수치와 일반 model frame을 합치지 않는다.

Validation Status: REVIEWED — Source/claim alignment and local Mac Keynote render checked. Windows PowerPoint, target PC fonts, room projection and timed rehearsal remain unverified.

## S20 — 이번 Task인가, 계속 유지할 Project 정보인가?

Slide ID: S20

Working Title: 이번 Task인가, 계속 유지할 Project 정보인가?

ACT / Section: ACT 1 / 1G

Allocated Time: 3 minutes

Mode Split: Reflection 1 minute + Q&A 2 minutes

Primary Message: 두 종류의 정보를 구분할 필요가 있음을 먼저 인식한다.

Opening Question: “매번 Prompt에 반복해서 쓰는 내용 중 이번 Task에만 필요한 것은 무엇이고, Project가 계속 유지해야 할 것은 무엇인가?”

Speaker Flow:

1. (0:00–1:00) 제목 질문을 제시하고 두 Bucket을 비워 둔다.
2. (1:00–3:00) 선택적인 Q&A를 받되 응답이 없어도 진행한다.
3. (3:00) S21에서 예시 후보를 확인하겠다고 전환한다.

Evidence / Source: BEAT-007 → BEAT-008 handoff, CLM-0029, CLM-0027, CLM-0003, CLM-0005. TEACHING_MODEL.

Claim Boundary: 두 Bucket은 Reflection을 위한 과정의 모델이다. 이 장에서는 정답, 제품 기능, AGENTS.md 또는 완전한 분류를 제시하지 않는다.

Beginner Explanation: 이번 요청에만 필요한 말과 여러 번 반복할 수 있는 규칙이 다를 수 있음을 생각한다.

Advanced Insight: Consider information lifetime and scope without deciding the storage mechanism yet.

C++ Vision Bridge: N/A.

Demo Operation: N/A.

Audience Interaction: 순서: Reflection 1분 후 Q&A 2분. Reflection은 사적 생각 시간이고 공유는 자발적이다. 응답이 없으면 질문을 한 번 더 읽고 진행한다.

Transition: Slide 21에서 Reflection/Discussion을 회수하고 “왜 Project 설명을 매번 다시 쓰는가?”라는 ACT 2 질문으로 넘긴다.

Time Management: Reflection 1분, Q&A 2분을 보존한다. 긴 토론이나 개인 업무 공개를 요구하지 않는다.

Fallback: READY — 정적 질문 슬라이드 `production/ACT_1.pptx` S20 또는 `production/preview/act1/S20.png` 사용. 공유 응답이 없어도 다음으로 진행한다.

Validation Status: REVIEWED — Source/claim alignment and local Mac Keynote render checked. Windows PowerPoint, target PC fonts, room projection and timed rehearsal remain unverified.

## S21 — 반복하는 설명을 두 범주로 나누기

Slide ID: S21

Working Title: 반복하는 설명을 두 범주로 나누기

ACT / Section: ACT 1 / 1G

Allocated Time: 6 minutes

Mode Split: Reflection 1 minute + Transition 3 minutes + Q&A 2 minutes

Primary Message: Task 정보와 Project 정보는 수명과 적용 범위가 다르다.

Opening Question: “이번 Task에만 필요한 정보와 Project가 계속 유지할 정보는 무엇일까?”

Speaker Flow:

1. (0:00–1:00) S20의 두 빈 Bucket을 회수한다.
2. (1:00–2:00) 제시된 항목을 후보 예시로 읽는다.
3. (2:00–5:00) 정보의 수명·범위 차이와 “왜 반복하는가?”라는 다음 문제를 연결한다.
4. (5:00–6:00) 선택적인 Q&A를 받고 ACT 2로 이동한다.

Evidence / Source: BEAT-007, BEAT-008, TRANS-003, CLM-0029, CLM-0027, CLM-0003, CLM-0005. TEACHING_MODEL / CONCEPTUAL.

Claim Boundary: 항목은 작업 경계와 유지 기간을 생각하게 하는 후보 예시다. 유일한 정답, classification test, product mechanism으로 말하지 않는다. AGENTS.md는 이 Slide에서 답으로 제시하지 않는다.

Beginner Explanation: 요청 한 번에만 필요한 정보와 프로젝트가 계속 참고할 수 있는 정보를 구별해 본다.

Advanced Insight: Information reuse scope and lifetime may differ; the next ACT will examine the repeated-fact problem before introducing a mechanism.

C++ Vision Bridge: N/A.

Demo Operation: N/A.

Audience Interaction: Reflection 1분 후 map 순서대로 ACT 2 Transition 3분, Q&A 2분. 예시는 후보로만 말하고, 자발적 응답을 받되 정답 분류를 평가하지 않는다.

Transition: “그런데 Project 정보를 왜 매번 Prompt에 다시 적고 있을까?”

Time Management: Map 순서 Reflection 1 + Transition 3 + Q&A 2분을 지킨다. Project Context 해결책이나 AGENTS.md를 미리 노출하지 않는다.

Fallback: READY — 정적 비교 슬라이드 `production/ACT_1.pptx` S21 또는 `production/preview/act1/S21.png` 사용. Q&A가 없어도 마지막 Transition 질문 후 ACT 2로 간다.

Validation Status: REVIEWED — Source/claim alignment and local Mac Keynote render checked. Windows PowerPoint, target PC fonts, room projection and timed rehearsal remain unverified.