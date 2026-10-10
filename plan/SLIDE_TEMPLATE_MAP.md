# STEP 08 — Slide-to-Template Mapping

Date: 2026-10-09

Status: COMPLETE WITH OPEN ITEMS

## 1. Authority and Boundary

This file assigns one primary Template and one defined Layout Variant to each
Slide ID S01–S80. It adds visual implementation guidance only.

- plan/SLIDE_MAP.md remains the source for title, ACT, Section, Story Beat,
  role, audience question, claim, evidence references, time, and delivery mode.
- plan/VISUAL_SPEC.md remains the source for visual direction, typography,
  tokens, evidence grammar, and the three approved reveal sequences.
- plan/SLIDE_TEMPLATE_ARCHITECTURE.md remains the source for the 11 Template
  purposes, native layout requirements, and component semantics.
- plan/CLAIM_FREEZE.md, plan/INVARIANTS.md, plan/DECISIONS.md, and
  plan/MASTER_PLAN.md continue to govern claim limits and design authority.
- Nothing here changes Slide IDs, Story Beat IDs, Demo IDs, Sections,
  Evidence Types, Claim Status, content, time, or Delivery Mode.
- A component is a visual aid, not new evidence. Every actual result and
  citation stays traceable to the references already listed in SLIDE_MAP.md.
- Current product surfaces, accounts, permissions, exact capture selection,
  and the conceptual Runner example remain subject to their existing checks.

## 2. Evidence Grammar

The compact codes in the mapping table refer to these existing visual rules.
Mixed evidence must use separate frames or insets. Color alone never conveys
Evidence Type.

| Code | Evidence Type | Required visual grammar |
|---|---|---|
| P | OBSERVED_PRODUCT | Single solid Evidence frame; show the applicable State/Trial and scope. Use actual captures or clearly schematic diagrams. |
| M | OBSERVED_META | Double-line frame and timeline; keep it distinct from Demo Product States. |
| C | CONCEPTUAL | Dashed or stippled frame and persistent CONCEPTUAL label; never style it as a real terminal, Trial, or PASS/FAIL record. |
| R | RESEARCH | Claim-and-Source layout; keep study task, conditions, scope, and citation together. |
| T | TEACHING_MODEL | Clean neutral diagram; use COURSE MODEL or HEURISTIC where needed to prevent product-taxonomy claims. |

Grammar combinations such as P+T and M+T mean visibly separate frames, not a
blended evidence category. C+T means a dashed scenario and a separate clean
teaching model when both roles are present. Claim Status is inherited from the
Slide Map; it is not inferred from the frame style.

## 3. Reusable Component IDs

These stable IDs name the components defined in
plan/SLIDE_TEMPLATE_ARCHITECTURE.md. “Required” below means required when
listed for that Slide; native Template elements remain required by their
Template even when no reusable component is added.

| Component ID | Architecture component | Use boundary |
|---|---|---|
| CMP-STATE | State Rail | Actual Git States only. Never add Trial, Decision, or conceptual states. |
| CMP-EVIDENCE | Evidence Card | One scoped observation with its existing source and limitation. |
| CMP-TRIAL | Trial Card | A named Trial, task/question, observation, and run boundary. Separate WATCH from result. |
| CMP-DIFF | Code Diff | Actual bounded change only; keep to the approved relevant excerpt. |
| CMP-BENCHMARK | Benchmark Comparison | Existing measurement and conditions only; do not merge different Trials or State values. |
| CMP-CONTEXT-ROUTER | Context Router | Core-to-detail relationship; observed access and expected routing use distinct lines/labels. |
| CMP-WORKFLOW | Workflow Strip | Short ordered procedure, with observation versus teaching model labeled. |
| CMP-DECISION | Decision Matrix | Options, evidence-backed criteria, selected/deferred choice, and trade-off; no invented scores. |
| CMP-LOOP | Loop Diagram | Execution → Observation → Cause → System Change → Re-evaluation; no automatic learning claim. |
| CMP-CPP | C++ Bridge | PYTHON DEMO → ENGINEERING PATTERN → C++ VISION; a transfer inset, not a tool list or C++ implementation. |
| CMP-CLAIM | Claim Scope / Citation | Source, status/scope, date or version when needed, and unresolved limit. |

In the tables, Required and Optional list only reusable components beyond
native Template elements. “—” means the Template-native structure is
sufficient.

## 4. Layout Variant Registry

Each Template uses no more than three variants. Each row specifies its
structure, content regions, added required components, and density ceiling.

| Variant | Layout structure and content regions | Added required components | Density limit |
|---|---|---|---|
| T01-A Opening Question | One large question; quiet margin for individual thought. | — | One question, up to three short cues. |
| T01-B Reflection / Discussion | Question at top; optional response lenses below; leave visible pause space. | — | Up to three lenses at once; S54 may reveal its five existing candidates sequentially and retain them for recap. Do not supply the audience’s answer in advance. |
| T01-C Q&A / Close | One Q&A or closing prompt; a small, fixed course-model footer if already in the Map. | — | One prompt and the existing close model only. |
| T02-A Scope Friction | Current task → missing boundary/context → unanswered question. | — | One task and one main friction. S11–12 may show their five existing responsibility labels/questions as short blanks; do not add explanatory subcopy. |
| T02-B Repeated Friction | Two or three tasks with only the repeated burden highlighted. | — | At most three task columns and four repeated facts/steps; no solution yet. |
| T03-A Centered Mental Model | Central concept with labeled relations and a small number of surrounding nodes. | — | Five nodes maximum. |
| T03-B Layered System Diagram | Two or three responsibility/scope layers with explicit links. | Add CMP-CONTEXT-ROUTER when routing is the subject. | Three layers and five major nodes maximum. |
| T03-C Flow Diagram | Ordered flow with a clear start, direction, and endpoint/return where the Map calls for one. | Add CMP-WORKFLOW or CMP-LOOP when that reusable component is assigned. | Five steps maximum before reveal or grouping. |
| T04-A Side-by-side Comparison | Two aligned panels, same comparison axes, one central difference. | Add CMP-EVIDENCE for observed comparisons. | Two subjects; at most four rows. |
| T04-B Before / After | Matched before and after regions with one bounded change. | Add CMP-STATE and CMP-EVIDENCE for actual State comparisons. | One primary change and at most three context labels. |
| T04-C Access / Evidence Matrix | Task rows and grouped document/evidence columns; missing or variable access is explicit. | Add CMP-EVIDENCE and CMP-TRIAL for observed access. | Four comparison rows; group files by role instead of reproducing logs. |
| T05-A Watch-for Setup | WATCH FOR → Task / Trial → observation targets; outcome region stays empty. | CMP-TRIAL | One question and at most three watch criteria. Preserve an existing five-step action sequence as steps, not as five new criteria. |
| T06-A Investigation Trace / Diff | Failure → relevant path → bounded change → verification handoff. | CMP-TRIAL; CMP-DIFF only when exact code is shown. | One technical point; code excerpt 3–12 lines if used. |
| T06-B Verification Scorecard | Check, observed result, and supported scope in aligned rows. | CMP-TRIAL and CMP-EVIDENCE | Five existing checks maximum for S17; no unsupported benchmark row. |
| T06-C Check-to-Claim Map | Check types map to the specific claims they support. | CMP-EVIDENCE when actual checks are cited. | Five check-to-claim rows maximum. |
| T07-A Trial Evidence | One solid-frame Trial with question, key observation, and run limit. | CMP-EVIDENCE; CMP-TRIAL if task detail is needed. | One Trial and up to three observations. |
| T07-B Benchmark Evidence | Same axes for approved candidates; conditions and correctness guard remain nearby. | CMP-EVIDENCE and CMP-BENCHMARK | One comparison; use only the named Trial or State’s figures. |
| T07-C Git State Evidence | One actual State transition or a short actual State rail, with the shown scope. | CMP-STATE and CMP-EVIDENCE | One transition or the approved evolution rail; one phrase per State. |
| T08-A Conceptual Scenario | Dashed scenario states in causal order; assumptions remain visible. | CMP-CLAIM | Five states maximum; no real-looking product captures. |
| T08-B Conceptual Evaluation / Decision | Scenario, evaluation question, then intended decision or evaluation set. | CMP-CLAIM; CMP-DECISION when alternatives are compared. | Four evaluation tasks maximum; no invented outcome. |
| T08-C Cause / Response | Separate observation, cause hypothesis, response, and remaining uncertainty. | CMP-CLAIM; CMP-DECISION when selecting a layer. | One observation, one or more labeled hypotheses, one bounded response. |
| T09-A Claim and Source | One claim, study/task conditions, bounded finding, and nearby source. | CMP-CLAIM | One claim and at most two approved sources. |
| T10-A Decision Card | Problem → choice → reason → trade-off. | CMP-DECISION | One decision and one main trade-off. |
| T10-B Criteria Matrix | Options by explicit qualitative criteria; distinguish observed from hypothetical. | CMP-DECISION | Three decision options and four criteria maximum; up to four existing classification rows where the Map calls for classification; no made-up scoring. |
| T10-C Layer Selection | Cause → candidate layers → selected/deferred response and upkeep implication. | CMP-DECISION | Three candidate layers maximum; do not imply every layer is needed. |
| T11-A Meta Timeline | Double-frame timeline with actual Trial / Decision events and unresolved items. | CMP-EVIDENCE and CMP-CLAIM | Four timeline points maximum; keep uncertainty visible. |
| T11-B Attribution Comparison | Two aligned panels for result validity versus cause attribution, or reported versus retained evidence. | CMP-EVIDENCE and CMP-CLAIM | Two axes/panels; do not convert correlation into causality. |

## 5. Slide-to-Template Mapping

The title, ACT, Section, Primary Role, Story Beat, Evidence Type, Claim Status,
source references, time, and Delivery Mode remain exactly as in
plan/SLIDE_MAP.md. The table below adds the visual mapping and risk control.

| Slide | Primary Template / Variant | Required reusable components | Optional reusable components | Evidence grammar | Demo role / delivery slot | Reveal | C++ Bridge | Visual risk |
|---|---|---|---|---|---|---|---|---|
| S01 — AI에게 지금 무엇을 맡기고 있는가? | T01-A | — | — | T | — | Single state | — | V10 |
| S02 — 작은 질문에는 Chatbot이 유용하다 | T03-C | CMP-WORKFLOW | — | C+T; keep the workflow example bounded | — | Single state | — | V09 |
| S03 — 질문이 커지면 Context를 모으는 일이 생긴다 | T02-A | — | CMP-WORKFLOW | C+T | — | Single state | — | V09, V10 |
| S04 — 파일명을 주지 않으면 Agent는 어디부터 볼까? | T05-A | CMP-TRIAL | CMP-CLAIM | P | DEMO-01 WATCH; setup is Lecture, not extra Demo time | Single state | — | V02 |
| S05 — Agent가 Test와 호출 경로를 찾았다 | T07-A | CMP-EVIDENCE | CMP-TRIAL | P | DEMO-01 EVIDENCE; HYBRID, 8 min | Single state | — | V03, V04 |
| S06 — 관찰 결과와 실행 제한을 분리한다 | T07-A | CMP-EVIDENCE, CMP-CLAIM | CMP-TRIAL | P | DEMO-01 WHAT HAPPENED; Case; prepared capture is fallback, not extra Demo time | Single state | — | V01, V02 |
| S07 — 코드를 AI에게 가져가는 대신 AI를 Repository로 데려간다 | T04-B | CMP-EVIDENCE | CMP-CPP | P+T, in separate regions | DEMO-01 bounded callback; Lecture | Single state | Contextual | V01, V05, V08 |
| S08 — Repository 접근과 Task 의도는 별개다 | T02-A | — | — | T | DEMO-01 remaining problem callback; Lecture | Single state | — | V09 |
| S09 — Repository를 보면 내가 원하는 것까지 알까? | T01-B | — | — | T | DEMO-01 follow-up question; Transition/Q&A | Single state | — | V09 |
| S10 — Task에는 무엇이 아직 정해지지 않았을까? | T02-A | — | — | C+T | — | Single state | — | V09 |
| S11 — 요청만으로는 의도가 보이지 않는다 | T02-A | — | — | C+T | — | Single state | — | V09 |
| S12 — 개발자가 정해야 하는 경계 | T02-A | — | — | C+T | — | Single state | — | V09 |
| S13 — Task Specification의 다섯 책임 | T03-A | — | — | T | — | Single state | — | V10 |
| S14 — 더 긴 Prompt보다 분명한 경계 | T04-A | — | CMP-CLAIM, CMP-CPP | C+T | — | Single state | Supporting | V02, V08 |
| S15 — 먼저 무엇을 하는지 보자 | T05-A | CMP-TRIAL | CMP-CLAIM | P | DEMO-05 WATCH; setup is Lecture, not extra Demo time | Single state | — | V02 |
| S16 — 조사에서 한 줄 변경까지 | T06-A | CMP-TRIAL | CMP-DIFF, CMP-EVIDENCE | P | DEMO-05 EVIDENCE/process; CAPTURED, 4 min | Single state | — | V03, V04 |
| S17 — 변경 결과와 확인 증거 | T06-B | CMP-TRIAL, CMP-EVIDENCE | CMP-DIFF | P | DEMO-05 WHAT HAPPENED/result; CAPTURED, 4 min | Single state | — | V02, V04 |
| S18 — Generated ≠ Done | T06-C | CMP-EVIDENCE | CMP-CLAIM | P+T; separate the recorded checks from the model | TRIAL-002 verification callback; Lecture | Single state | — | V01, V05 |
| S19 — Check마다 확인하는 범위 | T06-C | CMP-EVIDENCE | CMP-CLAIM, CMP-CPP | P+T; actual checks and general check-to-claim model separated | TRIAL-002 evidence callback; Lecture/Reflection | Single state | Supporting | V01, V05, V08 |
| S20 — 이번 Task인가, 계속 유지할 Project 정보인가? | T01-B | — | — | T | — | Single state | — | V09 |
| S21 — 반복하는 설명을 두 범주로 나누기 | T04-A | — | — | C+T | — | Single state | — | V10 |
| S22 — 다른 Task에 같은 설명이 반복된다 | T02-B | — | CMP-WORKFLOW | T | DEMO-02 problem framing; no result yet | Single state | — | V09 |
| S23 — 작은 Project Context의 첫 기록 | T07-C | CMP-STATE, CMP-EVIDENCE | CMP-TRIAL | P | DEMO-02 EVIDENCE/state; HYBRID, 4 min | Single state | — | V03, V05 |
| S24 — 한 번의 사용에서 확인된 것 | T07-A | CMP-TRIAL, CMP-EVIDENCE, CMP-CLAIM | — | P | DEMO-02 WHAT HAPPENED/result; HYBRID, 4 min | Single state | — | V02, V05 |
| S25 — Task Prompt와 Project Context | T03-B | — | CMP-CONTEXT-ROUTER, CMP-CPP | T | — | Single state | Supporting | V08 |
| S26 — 정확한 정보도 계속 늘어난다 | T04-B | CMP-STATE, CMP-EVIDENCE | — | P | DEMO-06 state-growth evidence callback; Case, not extra Demo time | Single state | — | V03, V10 |
| S27 — 정확하지만 이번 Task에는 불필요한 정보 | T07-A | CMP-TRIAL, CMP-EVIDENCE, CMP-CLAIM | — | P | DEMO-06 TRIAL-004 evidence; CAPTURED, 2 min | Single state | — | V02, V05 |
| S28 — 정보의 범위와 제공 시점 | T03-B | CMP-CONTEXT-ROUTER | CMP-WORKFLOW | T | — | Single state | — | V05 |
| S29 — Long Context 연구가 말해주는 범위 | T09-A | CMP-CLAIM | — | R | — | Single state | — | V02 |
| S30 — 필요한 상세 정보로 가는 길 | T03-C | CMP-CONTEXT-ROUTER | CMP-CPP | T | — | Single state | Supporting | V08 |
| S31 — Core Context에서 상세 정보로 가는 길 | T03-B | CMP-CONTEXT-ROUTER, CMP-CPP | — | T | — | Single state | Supporting | V08 |
| S32 — 정보를 지우지 않고 위치를 나누기 | T04-B | CMP-STATE, CMP-EVIDENCE, CMP-CONTEXT-ROUTER, CMP-CPP | — | P+T; observed structure and teaching interpretation separated | DEMO-06 STATE-03 evidence; CAPTURED, 2 min | Single state | Supporting | V01, V03, V08 |
| S33 — 서로 다른 두 Task가 무엇을 읽을까? | T05-A | CMP-TRIAL | CMP-CLAIM | P | DEMO-06 / TRIAL-005A/B WATCH; setup is Lecture | Single state | — | V02 |
| S34 — Crop Task에서 관찰한 접근 | T07-A | CMP-TRIAL, CMP-EVIDENCE, CMP-CLAIM | — | P | DEMO-06 / TRIAL-005A evidence/result; Case | Single state | — | V02, V04, V05 |
| S35 — Task별 접근은 달랐지만 완벽하지는 않다 | T04-C | CMP-TRIAL, CMP-EVIDENCE, CMP-CLAIM | — | P | DEMO-06 / TRIAL-005A/B comparison; CAPTURED, 1 min, plus Case/Reflection/Q&A as mapped | Single state | — | V02, V04, V05 |
| S36 — 지식은 정리됐지만 절차는 반복된다 | T04-A | CMP-WORKFLOW, CMP-EVIDENCE | CMP-CLAIM | P+T; separate observed repeated prompt structure from the teaching question | — | Single state | — | V01, V05, V09 |
| S37 — 서로 다른 Performance Task, 반복되는 절차 | T04-A | CMP-TRIAL, CMP-EVIDENCE, CMP-WORKFLOW, CMP-CLAIM | — | P | TRIAL-006/007 evidence; Case; attribution remains PARTIAL | Single state | — | V02, V05, V09 |
| S38 — Project 사실과 작업 절차는 다르다 | T03-A | CMP-WORKFLOW | — | T | — | Single state | — | V09 |
| S39 — Task, Context, Workflow의 역할 | T03-B | CMP-WORKFLOW | — | T | — | Single state | — | V10 |
| S40 — 반복 절차를 Skill로 옮길 수 있을까? | T05-A | CMP-TRIAL, CMP-CLAIM | — | T; label current Skill surface/invocation as REQUIRES PRODUCT CHECK | DEMO-03 WATCH / question; no success result on this Slide | Single state | — | V02, V09 |
| S41 — Skill을 어떻게 발견하고 호출할까? | T07-A | CMP-TRIAL, CMP-EVIDENCE, CMP-CLAIM | — | P | DEMO-03 EVIDENCE; HYBRID, 5 min; observed CLI scope only | Single state | — | V02, V03 |
| S42 — 절차의 책임이 Prompt에서 Repository로 이동 | T04-A | CMP-TRIAL, CMP-EVIDENCE, CMP-WORKFLOW, CMP-CLAIM | — | P | DEMO-03 WHAT HAPPENED/comparison; HYBRID, 3 min; no superiority claim | Single state | — | V02, V05 |
| S43 — 답을 담지 않는 Workflow | T04-A | CMP-WORKFLOW, CMP-CLAIM | — | P+T; observed Skill contents and teaching distinction separated | DEMO-03 supporting explanation; Lecture, outside its 8 Demo minutes | Single state | — | V01, V02, V05 |
| S44 — 측정으로 후보를 고르다 | T07-B | CMP-TRIAL, CMP-EVIDENCE, CMP-BENCHMARK, CMP-CLAIM | — | P | DEMO-03 / TRIAL-008 evidence; Case, outside the 8 Demo minutes | Single state | — | V02, V05 |
| S45 — Working Harness Success | T07-B | CMP-STATE, CMP-EVIDENCE, CMP-BENCHMARK, CMP-CLAIM | CMP-WORKFLOW | P | DEMO-03 / STATE-04-PERF result; Case, not additional Demo minutes | Single state | — | V02, V05 |
| S46 — 이 작업에 Subagent가 필요했을까? | T10-B | CMP-EVIDENCE, CMP-DECISION, CMP-CLAIM | — | P+T; bounded task audit separate from general criteria | DEMO-07 visual question and current-task result; VISUAL, 3 min | Single state | — | V01, V05 |
| S47 — Subagent를 고려할 조건 | T10-B | CMP-DECISION, CMP-CLAIM | CMP-CPP | T; hypothetical C++ case is explicitly conceptual | DEMO-07 conditional scenario; VISUAL, 2 min; not an observed product Demo | Single state | Contextual | V08, V10 |
| S48 — 무엇이 다시 찾기 어려운 지식인가? | T10-B | CMP-EVIDENCE, CMP-DECISION, CMP-CLAIM | — | P+T; observed repository knowledge categories separate from Memory decision model | DEMO-08 knowledge classification; VISUAL, 2 min; no product Memory claim | Single state | — | V01, V05 |
| S49 — Memory는 재발견 비용으로 판단 | T10-B | CMP-DECISION, CMP-CLAIM | — | T | DEMO-08 criteria callback; Lecture, outside its 2 Demo minutes | Single state | — | V02, V05 |
| S50 — Minimum Effective Harness | T10-C | CMP-EVIDENCE, CMP-DECISION, CMP-CLAIM | CMP-WORKFLOW, CMP-CPP | P+T; project-specific audit is not a universal feature-count comparison | DEMO-09 EVIDENCE; CAPTURED, 3 min | Single state | Contextual | V01, V05, V08 |
| S51 — Harness는 작업 환경 설계다 | T03-B | CMP-EVIDENCE | CMP-WORKFLOW, CMP-CPP | P+T; observed STATE-04-PERF elements are inset from the course model | DEMO-09 system view; CAPTURED, 2 min | Single state | Contextual | V01, V05, V08 |
| S52 — Repository 밖의 환경도 결과에 영향을 준다 | T03-B | CMP-EVIDENCE, CMP-CLAIM | CMP-CPP | M+T; observed global influence is a separate Meta frame, not product state | DEMO-04B preview only; Lecture, no extra Demo time | Single state | Contextual | V01, V02, V07 |
| S53 — Engineering Pattern은 C++에도 전이된다 | T03-A | CMP-CPP, CMP-WORKFLOW | CMP-CLAIM | T | — | Single state | Primary | V08 |
| S54 — 필요한 구조부터 질문하기 | T01-B | CMP-WORKFLOW | — | T | — | R1–R3; see Section 8 | Contextual cue only; no CMP-CPP assignment | V09, V10 |
| S55 — 여기까지는 잘 동작했다 | T07-C | CMP-STATE, CMP-EVIDENCE, CMP-CLAIM | — | P | DEMO-03/Primary Product Demo endpoint callback; Lecture/Reflection, no extra Demo time | Single state | — | V02, V05 |
| S56 — 개념 사례: Project와 Workflow는 현재 맞다 | T08-A | CMP-CLAIM | CMP-CPP | C | DEMO-04A WATCH / constructed starting condition; VISUAL, 2 min | Single state | Contextual | V06, V08 |
| S57 — Project는 바뀌고 Workflow는 남았다 | T08-A | CMP-CLAIM | — | C | DEMO-04A scenario change / conceptual EVIDENCE; VISUAL, 2 min | Single state | — | V06 |
| S58 — Task 해결과 System 문제는 다르다 | T08-C | CMP-CLAIM | — | C | DEMO-04A conceptual consequence; Case, no additional Demo time | Single state | — | V06, V09 |
| S59 — 원인에 맞는 Layer를 고르기 | T08-B | CMP-CLAIM, CMP-DECISION | CMP-CPP | C+T, separate scenario and teaching choice | DEMO-11 layer-selection synthesis; CAPTURED, 2 min; no Product State | Single state | Contextual | V06, V08 |
| S60 — 실패 지점과 원인 Layer 구분하기 | T08-C | CMP-CLAIM, CMP-DECISION | CMP-CPP | C+T, observed/inferred distinction stays labeled as scenario reasoning | DEMO-11 cause/layer synthesis; CAPTURED, 1 min; no Product State | Single state | Contextual | V06, V08 |
| S61 — 먼저 관찰하고, 그다음 가설을 세운다 | T08-C | CMP-CLAIM | — | C+T | — | Single state | — | V06 |
| S62 — Cause가 지지하는 최소 변경 | T08-B | CMP-CLAIM, CMP-DECISION | — | C+T | — | Single state | — | V06, V09 |
| S63 — 같은 Task의 재실행만으로 충분할까? | T08-B | CMP-CLAIM, CMP-WORKFLOW | CMP-CPP | C+T | — | Single state | Contextual | V06, V05 |
| S64 — 대표 작업으로 변경 범위를 확인하기 | T08-B | CMP-CLAIM, CMP-DECISION | CMP-CPP | C+T; four-row conceptual Evaluation Set and any prior observed references use separate Evidence frames | DEMO-10 static visual; 5 min; EVAL-01/02 are prior evidence references, EVAL-03/04 are designed; no new run or outcome | Single state | Contextual | V06, V05, V08 |
| S65 — Harness도 특정 실패에 맞춰 과적합될 수 있다 | T08-C | CMP-CLAIM, CMP-WORKFLOW | — | C+T | — | Single state | — | V06, V10 |
| S66 — Feedback을 System Change와 Evaluation으로 잇기 | T03-C | CMP-LOOP, CMP-CLAIM | — | C+T | Existing Loop model/visual; VISUAL, 2 min (no new Demo ID) | R1–R5; see Section 8 | — | V06, V07 |
| S67 — 실제 제작 기록: TRIAL-006 | T11-A | CMP-EVIDENCE, CMP-CLAIM | — | M | DEMO-04B timeline entry; CAPTURED, 2 min | Single state | — | V07 |
| S68 — 결과의 타당성과 원인 귀속은 별개다 | T11-B | CMP-EVIDENCE, CMP-CLAIM | CMP-TRIAL | M | DEMO-04B TRIAL-006 evidence/attribution; CAPTURED, 4 min | Single state | — | V02, V05, V07 |
| S69 — 평가와 보고 규칙을 Evidence에 맞추다 | T11-A | CMP-EVIDENCE, CMP-CLAIM | CMP-DECISION | M | DEMO-04B DEC-0016 change; CAPTURED, 2 min | Single state | — | V02, V07 |
| S70 — 후속 기록은 개선됐지만 완전하지 않았다 | T11-B | CMP-EVIDENCE, CMP-CLAIM | CMP-TRIAL | M | DEMO-04B follow-up TRIAL-007/008; Lecture/Case, no additional Demo time | Single state | — | V02, V07 |
| S71 — 실제 Meta Loop에서 바뀐 것 | T11-A | CMP-EVIDENCE, CMP-CLAIM | — | M | DEMO-04B timeline synthesis; Lecture/Case, no additional Demo time | Single state | — | V07 |
| S72 — Project와 환경이 바뀌면 검증도 다시 본다 | T03-C | CMP-CPP, CMP-LOOP, CMP-CLAIM | — | T with a separately dashed CONCEPTUAL example; no Product evidence frame | — | R1–R6; see Section 8 | Primary | V08, V10 |
| S73 — 여섯 시간의 Story를 한 장으로 | T03-C | CMP-WORKFLOW | CMP-CPP | T | DEMO-12 story callback only; Lecture, outside 2-minute visual slot | Single state | Contextual | V10 |
| S74 — 하나의 Repository가 문제에 대응해 진화했다 | T07-C | CMP-STATE, CMP-EVIDENCE | CMP-CLAIM | P | DEMO-12 observed Product evolution; VISUAL, 2 min | Single state | — | V01, V03, V05 |
| S75 — 필요성이 입증되지 않은 것은 보류했다 | T10-A | CMP-EVIDENCE, CMP-DECISION, CMP-CLAIM | CMP-CPP | P+T; this project’s audit is not a universal feature-count comparison | — | Single state | Contextual | V01, V05, V08 |
| S76 — 위임이 늘어도 개발자 책임은 남는다 | T03-A | — | — | T | — | Single state | — | V10 |
| S77 — AI-Native Development는 이 교육의 운영 모델 | T03-A | — | CMP-CPP | T | — | Single state | Contextual | V08 |
| S78 — 어느 Layer에서 마찰이 반복되는가? | T10-B | CMP-DECISION, CMP-CPP, CMP-CLAIM | — | T; C++ example stays a transfer model, not a verified project procedure | — | Single state | Primary | V08, V09 |
| S79 — 다음 작은 행동을 개인적으로 고른다 | T01-B | — | CMP-CPP | T | — | Single state | Contextual | V09 |
| S80 — Q&A와 교육 마무리 | T01-C | — | — | T | — | Single state | — | V10 |

### Component Usage Index

Counts refer to Slide IDs with the component listed as Required or Optional.
This is a lookup index; the assignment and required/optional distinction in
the main table remain authoritative.

| Component ID | Slide count | Slide IDs |
|---|---:|---|
| CMP-STATE | 6 | S23, S26, S32, S45, S55, S74 |
| CMP-EVIDENCE | 33 | S05–07, S16–19, S23–24, S26–27, S32, S34–37, S41–42, S44–46, S48, S50–52, S55, S67–71, S74–75 |
| CMP-TRIAL | 19 | S04–06, S15–17, S23–24, S27, S33–35, S37, S40–42, S44, S68, S70 |
| CMP-DIFF | 2 | S16–17 |
| CMP-BENCHMARK | 2 | S44–45 |
| CMP-CONTEXT-ROUTER | 5 | S25, S28, S30–32 |
| CMP-WORKFLOW | 18 | S02–03, S22, S28, S36–39, S42–43, S45, S50–51, S53–54, S63, S65, S73 |
| CMP-DECISION | 12 | S46–50, S59–60, S62, S64, S69, S75, S78 |
| CMP-LOOP | 2 | S66, S72 |
| CMP-CPP | 23 | S07, S14, S19, S25, S30–32, S47, S50–53, S56, S59–60, S63–64, S72–73, S75, S77–79 |
| CMP-CLAIM | 48 | S04, S06, S14–15, S18–19, S24, S27, S29, S33–37, S40–45, S46–50, S52–53, S55–72, S74–75, S78 |

## 6. Visual Risk Codes

| Code | Risk to prevent |
|---|---|
| V01 | Combining different Evidence Types in one undifferentiated frame. |
| V02 | Losing a source, Claim Status, scope, uncertainty, or causal boundary. |
| V03 | Reconstructing a screenshot, terminal, capture, State, or Trial as if it were authentic. |
| V04 | Turning source or log detail into a dense dump or unreadable code. |
| V05 | Claiming measured improvement, repeatability, perfect routing, causal effect, or general superiority beyond the cited evidence. |
| V06 | Making the DEMO-04A conceptual scenario look like actual repository history or observed failure. |
| V07 | Confusing the training-production Meta timeline with Demo Product evolution. |
| V08 | Turning a C++ transfer inset into tool, hardware, build-system, or unverified procedure lists. |
| V09 | Revealing a solution before the corresponding problem/question or supplying an audience answer early. |
| V10 | Exceeding the Template’s density ceiling or adding detail that the Slide Map does not need. |

## 7. Demo Role and Delivery Mapping

Role names follow the requested WATCH / EVIDENCE / WHAT HAPPENED sequence.
The exact slide-level minutes below are the approved SLIDE_MAP allocation;
they do not add Demo time. A role shown as “not separated” stays that way.
Only the existing delivery subtypes HYBRID, CAPTURED, and VISUAL are assigned.
No RECORDED or LIVE slot is introduced.

| Demo ID | Slide IDs and role | Delivery Type / approved Demo minutes | Fallback / boundary |
|---|---|---|---|
| DEMO-01 | S04 WATCH; S05 EVIDENCE; S06 WHAT HAPPENED / result limit; S07 callback. | HYBRID, 8 min on S05. | S06 may use the approved captured search/read/trace fallback. Do not count it as another Demo slot or imply the temporary-directory limitation was a product failure. |
| DEMO-02 | S22 frames the repeated-fact problem; S23 STATE evidence; S24 TRIAL-003 result and attribution limit. A dedicated WATCH FOR result card is not separately specified. | HYBRID, 8 min: S23 4 + S24 4. | Use the approved before/after instructions and reviewed trace. Keep personal/global Skill influence visible in the result boundary. |
| DEMO-03 | S40 WATCH / open question; S41 TRIAL-008 discovery and explicit invocation EVIDENCE; S42 WHAT HAPPENED / Prompt-structure comparison. S43–45 are bounded case follow-through, not extra Demo minutes. | HYBRID, 8 min: S41 5 + S42 3. | The observed path is Codex CLI 0.154.0. Desktop behavior, implicit invocation, superiority, token saving, and speed improvement remain unclaimed. |
| DEMO-04A | S56 WATCH / starting condition; S57 conceptual change and schematic mismatch; S58–65 continue the conceptual case outside its 4-minute Demo slot. | VISUAL conceptual case, 4 min: S56 2 + S57 2. | Keep CONCEPTUAL visible. Use OLD TEST ENTRY → NEW TEST ENTRY; validate a concrete Runner example only if one is later selected. No actual failure or Product State. |
| DEMO-04B | S67 timeline entry; S68 TRIAL-006 EVIDENCE and attribution; S69 DEC-0016 change. S70–71 are the follow-up and synthesis outside the 8-minute Demo slot. | CAPTURED, 8 min: S67 2 + S68 4 + S69 2. | Use the approved dated timeline and claim audit. Preserve TRIAL-007 report/stderr discrepancy and all PARTIAL / UNKNOWN boundaries. |
| DEMO-05 | S15 WATCH; S16 TRIAL-002 investigation/change EVIDENCE; S17 checks/result. | CAPTURED, 8 min: S16 4 + S17 4. | Use side-by-side prompt and bounded result capture; no full Prompt or log. |
| DEMO-06 | S27 TRIAL-004 evidence; S32 STATE-03 structure; S33 TRIAL-005A/B WATCH; S34–35 observed access and comparison. | VISUAL / CAPTURED, 5 min: S27 2 + S32 2 + S35 1. | Use the approved Context map and curated diff. S34 is Case time. Do not imply perfect routing, token savings, or measured performance improvement. |
| DEMO-07 | S46 frames the current task and its bounded result; S47 gives a conditional conceptual case, not observed product evidence. | VISUAL, 5 min: S46 3 + S47 2. | No product interaction or independent subagent result is selected. Keep the current-task decision local to this task. |
| DEMO-08 | S48 asks which knowledge might justify persistence and classifies the current Demo’s knowledge. | VISUAL, 2 min on S48. | No product Memory behavior or selected Memory candidate. S49 is the criteria callback, not extra Demo time. |
| DEMO-09 | S50 shows the project-specific component audit; S51 relates observed elements to the Harness teaching model. | CAPTURED / VISUAL, 5 min: S50 3 + S51 2. | Use the approved tool-to-check map and bounded checks. Subagent and Memory are not made required components. |
| DEMO-10 | S64 four-row conceptual Evaluation Set; prior EVAL-01/02 evidence references are separate from designed EVAL-03/04 cases. | VISUAL / CAPTURED conceptual matrix, 5 min on S64; no task execution. | If prior OBSERVED_PRODUCT references appear, use a separate solid frame; keep EVAL-03/04 without outcomes and do not imply a new Trial or PASS/FAIL result. |
| DEMO-11 | S59 layer-selection synthesis; S60 cause/layer distinction. The displayed alternatives remain part of the conceptual case. | CAPTURED / VISUAL synthesis, 3 min: S59 2 + S60 1. | No Product State or historical repair is added. Show only the source-approved choices and trade-offs. |
| DEMO-12 | S73 is the story callback; S74 is the actual State evolution evidence/result. | VISUAL, 2 min on S74. | Use the approved State rail. Do not combine Product States with the DEMO-04A conceptual path or DEMO-04B Meta timeline. |
| Loop model / visual (no Demo ID) | S66 reveals the bounded conceptual Loop and holds the complete model. | VISUAL, 2 min on S66. | Keep it separate from DEMO-04B and do not imply an observed Product Loop. |

The Demo-slot sum is 73 minutes:
8 + 8 + 8 + 4 + 8 + 8 + 5 + 5 + 2 + 5 + 5 + 3 + 2 + 2 = 73.
The order in this table is by identifier, not teaching sequence.

## 8. Progressive Reveal

Reveal timings are approximate presentation cues inside the already approved
Slide time and Delivery Mode. They do not create Slides, add time, or define
Speaker Notes.

### S54 — 10 minutes

| State | Approx. time / mode | Visible | Hidden until this state | Speaker trigger |
|---|---|---|---|---|
| R1 | 0–3 min; Reflection 3 | The opening question about recurring friction. | The candidate engineering structures and Loop transition. | Start with a pause; do not categorize audience answers. |
| R2 | 3–8 min; Q&A 5 | Reveal, in sequence: recurring Project facts → Context; repeated procedure → Workflow; independent parallel work → consider Subagent; costly rediscovery → consider Memory; needed confidence → Tests / Benchmark / Review. | Future Loop connection. Keep every structure conditional rather than mandatory. | Introduce each category only after the preceding one has been discussed. |
| R3 | 8–10 min; Transition 2 | The unresolved “what should the system do when evidence changes?” question leading to Loop Engineering. | Nothing; retain the complete map for the handoff. | Move from choosing needed structure to observing and improving it. |

### S66 — 11 minutes

| State | Approx. time / mode | Visible | Hidden until this state | Speaker trigger |
|---|---|---|---|---|
| R1 | 0–1.5 min; Lecture | Execution. | Observation and later stages. | Begin with one bounded task execution. |
| R2 | 1.5–3 min; Lecture | Execution → Observation. | Cause and later stages. | Add only what was observed; do not explain cause yet. |
| R3 | 3–5 min; Lecture | Add Cause. Label inference as a cause judgment, not an automatic diagnosis. | System Change and Re-evaluation. | Ask what evidence supports the cause. |
| R4 | 5–7 min; Lecture | Add System Change at the cause-matched layer. | Re-evaluation. | Show that a system change is a developer decision. |
| R5 | 7–9 min; Lecture | Add Re-evaluation and the return connector; keep the whole Loop visible. | None. | Ask what must be checked again after the change. |
| Hold | 9–11 min; VISUAL Demo 2 | Full model remains visible without additional claims. | None. | Use the visual interval to read the complete model and its boundary. |

### S72 — 20 minutes

| State | Approx. time / mode | Visible | Hidden until this state | Speaker trigger |
|---|---|---|---|---|
| R1 | 0–1 min; Case | A labeled conceptual Project / Environment change. | Friction and later response. | Introduce one bounded change, such as a changed GPU architecture assumption. |
| R2 | 1–2 min; Case | The new friction observed after the change. | Cause and selected layer. | State what is observed before proposing why. |
| R3 | 2–4 min; Case | Confirmed facts beside a separately labeled cause hypothesis. | Correct Layer and verification. | Ask which fact supports or weakens the hypothesis. |
| R4 | 4–5 min; Case | The cause-matched change Layer. | Verification result. | Select only the relevant layer; do not enumerate unverified tools. |
| R5 | 5–7 min; Case | Benchmark / regression conditions to revisit; no invented result. | Discussion prompts. | Ask what changed in the verification conditions. |
| R6 | 7–20 min; Reflection 2, Transition 4, Q&A 7 | Keep the five-step flow visible; show the discussion prompt outside the flow so it does not become a sixth workflow step. | None. | Let participants select a relevant layer; do not ask them to perform a lab or claim a universal fix. |

## 9. C++ Vision Bridge

The Bridge is a reusable Component, not a separate Template. The current
component index assigns CMP-CPP to 23 Slides. The user-approved classification
is 3 PRIMARY, 6 SUPPORTING, and 14 CONTEXTUAL. A Slide Map cue without a
CMP-CPP component assignment is tracked separately below and is not included
in the count.

| Role | Slides | Rendering rule |
|---|---|---|
| PRIMARY | S53, S72, S78 | Give the engineering-pattern transfer diagram prominent space within the host Template. Keep PYTHON DEMO → ENGINEERING PATTERN → C++ VISION as the visual center; do not turn it into a tool list or C++ implementation lesson. |
| SUPPORTING | S14, S19, S25, S30–32 | Use a small inset or footer strip only. Preserve the host Slide’s main message and use one bounded transfer example. |
| CONTEXTUAL | S07, S47, S50–52, S56, S59–60, S63–64, S73, S75, S77, S79 | Treat as a Speaker cue. Add a small annotation only when it improves the host Slide and fits its density limit; the C++ component does not need a visible rendering. |

S54 contains a contextual C++ Vision cue in SLIDE_MAP.md but has no CMP-CPP
component assignment. It is therefore not part of the 23-Slide component
inventory and must remain a Speaker cue unless the mapping is separately
revised. S18 points its verification inset to S19 and receives no duplicate
Bridge. S56’s optional connection does not create a second C++ conceptual
case. Keep all visible Bridges within their host Template and preserve the
Slide Map’s environment and claim limits.

## 10. Boundary and Traceability Audit

### S55 → S56

- S55 uses T07-C, a single-solid OBSERVED_PRODUCT frame with actual State
  references and the existing bounded success.
- S56 switches to T08-A and a dashed, persistent CONCEPTUAL label.
- The Product State rail does not continue into the constructed DEMO-04A case.
- No product success is attributed to the conceptual scenario.

### S66 → S67

- S66 uses T03-C, a clean Teaching Model plus a separately dashed conceptual
  frame; its five stages and VISUAL hold are not a Product Loop.
- S67 switches to T11-A, a double-line OBSERVED_META timeline.
- No Git State, Product failure, or Product code change is inserted into the
  Meta timeline.

### Claim and evidence checks

- Each row inherits Evidence Type, Claim Status, and the existing
  Evidence / Decision References from SLIDE_MAP.md; none is reclassified.
- OBSERVED_PRODUCT, OBSERVED_META, CONCEPTUAL, RESEARCH, and TEACHING_MODEL
  use distinct grammar. Mixed types use separate frames/insets.
- S55 is P. S56–65 are C, with a separate T area only on mixed-type Slides;
  S66 is C+T. S67–71 are M.
- S29 remains scoped to the approved research conditions and source.
- TRIAL-005 does not claim superior routing, token savings, or performance
  improvement.
- TRIAL-006/007 attribution remains PARTIAL where the Map says so.
- DEMO-04A and DEMO-10/11 evaluation visuals do not show results that did not
  occur.
- S64 keeps the four-row Evaluation Set conceptual. EVAL-01/02 historical
  evidence references, if shown, use a separate solid frame; EVAL-03/04 are
  designed examples with no Trial outcome.
- C++ Bridge component assignments are classified 3 PRIMARY, 6 SUPPORTING,
  and 14 CONTEXTUAL. Component assignment does not require visible rendering.
- All template and component references in the mapping resolve to the
  registries above.

### Count and time checks

- Slide IDs: S01–S80, 80 unique entries, no additions or removals.
- ACT slide counts: 9 / 12 / 15 / 18 / 18 / 8.
- ACT time: 40 / 55 / 70 / 85 / 80 / 30 minutes.
- Total: 360 minutes.
- Delivery Mode totals: Lecture 130, Demo 73, Case 83, Reflection 20,
  Transition 22, Q&A 32 minutes.
- Every Slide’s mode allocation continues to sum to its estimated time as
  recorded in SLIDE_MAP.md.

## 11. Open Items

- Current product-surface and account checks remain open where already marked
  REQUIRES PRODUCT CHECK in the Claim Freeze and Slide Map.
- Exact captures, screen crops, and fallback files remain to be selected or
  rehearsed from the existing Demo evidence; this map does not create them.
- DEMO-04A remains schematic as OLD TEST ENTRY → NEW TEST ENTRY. No specific
  Runner command, failure, or wrong-scope result is established; keep those
  details open unless a technically valid conceptual example is later chosen.
- S66 and S72 state times are approximate reveal cues. Validate legibility
  and pacing during a future prototype without changing the approved Slide
  times or Delivery Mode totals.
- Prototype selection and acceptance criteria are recorded in
  plan/VISUAL_PROTOTYPE_PLAN.md. Windows PowerPoint compatibility remains
  unverified until checked on a target presentation PC.

These items do not prevent template assignment. They remain visible rather
than being resolved by invented product behavior or evidence.

## 12. Completion

- Template assignment: one Primary Template for every Slide S01–S80.
- Layout variants: defined and limited to three per Template.
- Required / Optional reusable components: assigned per Slide.
- Evidence grammar, Demo roles, reveal states, and C++ Bridge: mapped.
- Source content, Claim Status, Evidence Type, time, and mode remain owned by
  the existing Source of Truth.

### Template Distribution

| Template | Slide count |
|---|---:|
| T01 | 6 |
| T02 | 6 |
| T03 | 16 |
| T04 | 10 |
| T05 | 4 |
| T06 | 4 |
| T07 | 11 |
| T08 | 10 |
| T09 | 1 |
| T10 | 7 |
| T11 | 5 |
| **Total** | **80** |

**Next readiness:** READY FOR VISUAL PROTOTYPE. The mapped prototype set
covers five of the eleven Templates; the uncovered Template and Variant gaps
are recorded in plan/VISUAL_PROTOTYPE_PLAN.md.
