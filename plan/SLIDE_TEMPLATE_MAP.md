# STEP 08 — Slide-to-Template Mapping

> **현재 기준: DEC-0060 / 93장·379분; S51 내용 수정 DEC-0063, ACT3 전체 흐름 DEC-0062.** ACT2 S32–S49,18장·81분. 11개 Template/27개 Variant를 유지하며 신규3장은 기존 T09-A/T07-A/T03-A를 적용한다. [현재 번호 대조](SLIDE_ID_MIGRATION_93.md). 표 밖 과거 Prototype의 당시 번호·검증 이력은 보존한다.

Date: 2026-10-09

Status: COMPLETE WITH OPEN ITEMS

## 1. Authority and Boundary

This file assigns one primary Template and one defined Layout Variant to each
Slide ID S01–S93. It adds visual implementation guidance only. DEC-0036 authorizes S08 and DEC-0038 authorizes the new S13; existing Beat, Section, Demo, Trial and State IDs stay unchanged.

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
| T01-B Reflection / Discussion | Question at top; optional response lenses below; leave visible pause space. | — | Up to three lenses at once; S64 may reveal its five existing candidates sequentially and retain them for recap. Do not supply the audience’s answer in advance. S10 may use one six-node inspection pipeline as question context; its nodes are not six response lenses or a new teaching section (DEC-0037). |
| T01-C Q&A / Close | One Q&A or closing prompt; a small, fixed course-model footer if already in the Map. | — | One prompt and the existing close model only. |
| T02-A Scope Friction | Current task → missing boundary/context → unanswered question. | — | One task and one main friction. S12/S14 may show their five existing labels/questions. S11 may pair one prompt with the existing three-question list and a qualitative cost illustration; S12 may show up to three possible branches, not observed traces. |
| T02-B Repeated Friction | Two or three tasks with only the repeated burden highlighted. | — | At most three task columns and four repeated facts/steps; no solution yet. |
| T03-A Centered Mental Model | Central concept with labeled relations and a small number of surrounding nodes. DEC-0043 also uses one focal request block with two application cues and one takeaway for S22–S29. | — | Five major regions maximum; request text is one region, not separate nodes. |
| T03-B Layered System Diagram | Two or three responsibility/scope layers with explicit links. | Add CMP-CONTEXT-ROUTER when routing is the subject. | Three layers and five major nodes maximum. |
| T03-C Flow Diagram | Ordered flow with a clear start, direction, and endpoint/return where the Map calls for one. | Add CMP-WORKFLOW or CMP-LOOP when that reusable component is assigned. | Five steps maximum before reveal or grouping. |
| T04-A Side-by-side Comparison | Two aligned panels, same comparison axes, one central difference. | Add CMP-EVIDENCE for observed comparisons. | Two subjects; at most four comparison rows. New S13 may retain five compact input fields inside one Prompt and reuse S12’s three-path diagram; do not turn it into five comparison rows (DEC-0038). |
| T04-B Before / After | Matched before and after regions with one bounded change. | Add CMP-STATE and CMP-EVIDENCE for actual State comparisons. | One primary change and at most three context labels. |
| T04-C Access / Evidence Matrix | Task rows and grouped document/evidence columns; missing or variable access is explicit. | Add CMP-EVIDENCE and CMP-TRIAL for observed access. | Four comparison rows; group files by role instead of reproducing logs. |
| T05-A Watch-for Setup | WATCH FOR → Task / Trial → observation targets; outcome region stays empty. | CMP-TRIAL | One question and at most three watch criteria. Preserve an existing five-step action sequence as steps, not as five new criteria. |
| T06-A Investigation Trace / Diff | Failure → relevant path → bounded change → verification handoff. | CMP-TRIAL; CMP-DIFF only when exact code is shown. | One technical point; code excerpt 3–12 lines if used. |
| T06-B Verification Scorecard | Check, observed result, and supported scope in aligned rows. | CMP-TRIAL and CMP-EVIDENCE | Five existing checks maximum for S19; no unsupported benchmark row. |
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
| S08 — Repository 작업은 Codex에서 시작한다 | T03-C | CMP-WORKFLOW, CMP-CLAIM | — | R+T; official-source menu reconstruction, not a screenshot | DEMO-01 entry path only; Lecture | Single state; three connected steps | — | V01, V05 |
| S09 — Repository 접근과 Task 의도는 별개다 | T02-A | — | — | T | DEMO-01 remaining problem callback; Lecture | Single state | — | V09 |
| S10 — Repository를 보면 내가 원하는 것까지 알까? | T01-B | — | — | T; DEC-0037 hypothetical inspection pipeline, not execution evidence | DEMO-01 follow-up; one six-node context diagram, solid existing crop / dashed future connections; Transition/Q&A | Single state; no observed pass/fail | — | V09 |
| S11 — Task에는 무엇이 아직 정해지지 않았을까? | T02-A | — | — | C+T; generated Agent + qualitative token/time illustration, not measured exponential growth | Prompt input + preserved three-question list | Single state | — | V03, V05, V09 |
| S12 — 요청만으로는 의도가 보이지 않는다 | T02-A | — | — | C+T; three possible interpretations, not repeated executions | Prompt input + same-Agent parallel branches + five missing fields | Single state; three hypothetical paths | — | V03, V05, V09 |
| S13 — 원하는 작업 경로를 Prompt에 담는다 | T04-A | — | — | C+T; selected intended path, not a guaranteed or observed result | Five-field Prompt + same three paths, implementation intent highlighted; Case 2 min | Single state; one desired path emphasized | — | V03, V05, V09 |
| S14 — 개발자가 정해야 하는 경계 | T02-A | — | — | C+T | — | Single state | — | V09 |
| S15 — Task Specification의 다섯 책임 | T03-A | — | — | T | — | Single state | — | V10 |
| S16 — 더 긴 Prompt보다 분명한 경계 | T04-A | — | CMP-CLAIM, CMP-CPP | C+T | — | Single state | Supporting | V02, V08 |
| S17 — 요청한 과정은 기록에도 남았을까? | T05-A | CMP-TRIAL, CMP-EVIDENCE | CMP-CLAIM | P; actual request excerpts translated; observations summarized, target identifiers cross-checked against recorded code | DEMO-05 introduction; three paired request/observation rows 01–03; 04 edit detail on S18 and 05 result on S19; Lecture 2 min | Single state | — | V02, V03, V04 |
| S18 — 조사에서 한 줄 변경까지 | T06-A | CMP-TRIAL | CMP-DIFF, CMP-EVIDENCE | P | DEMO-05 EVIDENCE/process; recall 02 investigation / 03 plan before 04 edit; same crop diff; CAPTURED, 4 min | Single state | — | V03, V04 |
| S19 — 변경 결과와 확인 증거 | T06-B | CMP-TRIAL, CMP-EVIDENCE | CMP-DIFF | P | DEMO-05 WHAT HAPPENED/result; CAPTURED, 4 min | Single state | — | V02, V04 |
| S20 — Generated ≠ Done | T06-C | CMP-EVIDENCE | CMP-CLAIM | P+T; separate the recorded checks from the model | TRIAL-002 verification callback; Lecture | Single state | — | V01, V05 |
| S21 — Check마다 확인하는 범위 | T06-C | CMP-EVIDENCE | CMP-CLAIM, CMP-CPP | P+T; actual checks separated from the C++ teaching schematic | Left Check-to-claim table; right native vector cells and weak/specification assertions; Lecture 4 + Reflection 1 min | Single state | Supporting; DEC-0041 right-side example | V01, V05, V08 |
| S22 — 지시와 참고 자료의 구분 | T03-A | — | CMP-CLAIM | C+T; documented recommendation has a cited conceptual prompt | Static teaching request; no Trial or live slot; Lecture 1 min | Single state | — | V02, V05, V10 |
| S23 — 입력과 기대 결과의 작은 예시 | T03-A | — | CMP-CLAIM | C+T; documented recommendation has a cited conceptual prompt | Static teaching request; no Trial or live slot; Case 1 min | Single state | — | V02, V05, V10 |
| S24 — 바로 검토할 수 있는 결과 형식 | T03-A | — | CMP-CLAIM | C+T; documented recommendation has a cited conceptual prompt | Static teaching request; no Trial or live slot; Lecture 1 min | Single state | — | V02, V05, V10 |
| S25 — 근거가 있는 설명과 미확인의 구분 | T03-A | — | CMP-CLAIM | C+T; documented recommendation has a cited conceptual prompt | Static teaching request; no Trial or live slot; Lecture 1 min | Single state | — | V02, V05, V10 |
| S26 — 결과를 바꾸는 결정에서 확인 질문 | T03-A | — | CMP-CLAIM | C+T; documented recommendation has a cited conceptual prompt | Static teaching request; no Trial or live slot; Lecture 1 min | Single state | — | V02, V05, V10 |
| S27 — 큰 작업을 검토할 결과물로 나누기 | T03-A | — | CMP-CLAIM | C+T; documented recommendation has a cited conceptual prompt | Static teaching request; no Trial or live slot; Lecture 1 min | Single state | — | V02, V05, V10 |
| S28 — 기준을 지정한 코드 리뷰 요청 | T03-A | — | CMP-CLAIM | C+T; documented recommendation has a cited conceptual prompt | Static teaching request; no Trial or live slot; Lecture 1 min | Single state | — | V02, V05, V10 |
| S29 — 구체적인 근거로 수정 방향 피드백 | T03-A | — | CMP-CLAIM | C+T; documented recommendation has a cited conceptual prompt | Static teaching request; no Trial or live slot; Lecture 1 min | Single state | — | V02, V05, V10 |
| S30 — 이번 Task인가, 계속 유지할 Project 정보인가? | T01-B | — | — | T | — | Single state | — | V09 |
| S31 — 반복하는 설명을 두 범주로 나누기 | T04-A | — | — | C+T | — | Single state | — | V10 |
| S32 — 다른 Task에 같은 설명이 반복된다 | T02-B | — | CMP-WORKFLOW | T | DEMO-02 problem framing; no result yet | Single state | — | V09 |
| S33 — 작은 Project Context의 첫 기록 | T07-C | CMP-STATE, CMP-EVIDENCE | CMP-TRIAL | P | DEMO-02 EVIDENCE/state; HYBRID, 4 min | Single state | — | V03, V05 |
| S34 — AGENTS.md의 지침대로 검증했다 | T07-A | CMP-TRIAL, CMP-EVIDENCE, CMP-CLAIM | — | P | DEMO-02 WHAT HAPPENED/result; HYBRID, 4 min | Single state | — | V02, V05 |
| S35 — Task Prompt와 Project Context | T03-B | — | CMP-CONTEXT-ROUTER, CMP-CPP | T | — | Single state | Supporting | V08 |
| S36 — 정확한 정보도 계속 늘어난다 | T04-B | CMP-STATE, CMP-EVIDENCE | — | P | DEMO-06 state-growth evidence callback; Case, not extra Demo time | Single state | — | V03, V10 |
| S37 — 정확하지만 이번 작업에는 불필요한 정보 | T07-A | CMP-TRIAL, CMP-EVIDENCE, CMP-CLAIM | — | P | DEMO-06 TRIAL-004 evidence; CAPTURED, 2 min | Single state | — | V02, V05 |
| S38 — 정보의 범위와 제공 시점 | T03-B | CMP-CONTEXT-ROUTER | CMP-WORKFLOW | T | — | Single state; DEC-0060 scope/timing model with an unresolved procedure question; no completed workflow reuse | — | V05 |
| S39 — 많이 담아도 같은 근거를 똑같이 쓰는가? | T09-A | CMP-CLAIM | — | R | — | Single state; DEC-0060 Lost in the Middle only; task-position diagram and bounded observed finding | — | V02 |
| S40 — AI가 필요한 코드를 찾았다는 것을 무엇으로 확인할까? | T03-C | CMP-CLAIM | CMP-EVIDENCE | T+R; course checking questions separate from bounded supporting research | Existing crop code excerpt for a teaching request; no new run or Demo | Single state; request to existing code excerpt to three evidence questions; RepoQA secondary (DEC-0061) | — | V02, V04, V05 |
| S41 — 필요한 상세 정보로 가는 길 | T03-C | CMP-CONTEXT-ROUTER | CMP-CPP | T | — | Single state; DEC-0060 one question to a relevant detail source; path design, not observed read order | Supporting | V08 |
| S42 — AGENTS.md에는 무엇을 남길까? | T03-B | CMP-CONTEXT-ROUTER, CMP-CPP | — | T | — | Single state; DEC-0060 placement criteria rather than final directory listing | Supporting | V08 |
| S43 — 정보를 지우지 않고 위치를 나누기 | T04-B | CMP-STATE, CMP-EVIDENCE, CMP-CONTEXT-ROUTER, CMP-CPP | — | P+T; observed structure and teaching interpretation separated | DEMO-06 STATE-03 evidence; CAPTURED, 2 min | Single state; DEC-0060 observed semantic-preserving document migration, not routing lecture | Supporting | V01, V03, V08 |
| S44 — 서로 다른 두 Task가 무엇을 읽을까? | T05-A | CMP-TRIAL | CMP-CLAIM | P | DEMO-06 / TRIAL-005A/B WATCH; setup is Lecture | Single state; DEC-0060 two actual requests; watch accessed sources rather than rediscover crop answer | — | V02 |
| S45 — Crop Task에서 관찰한 접근 | T07-A | CMP-TRIAL, CMP-EVIDENCE, CMP-CLAIM | — | P | DEMO-06 / TRIAL-005A evidence/result; Case | Single state; DEC-0060 actual A access, specification and recorded answer | — | V02, V04, V05 |
| S46 — 의존성 질문은 설정과 소스로 답했다 | T07-A | CMP-TRIAL, CMP-EVIDENCE, CMP-CLAIM | — | P | DEMO-06 / TRIAL-005B evidence and recorded answer; Case4 | Single state; no fresh dependency execution | — | V02, V04, V05 |
| S47 — 두 Task에서 상세 문서 접근이 달랐다 | T04-C | CMP-TRIAL, CMP-EVIDENCE, CMP-CLAIM | — | P | DEMO-06 / TRIAL-005A/B comparison; CAPTURED, 1 min, plus Case/Reflection/Q&A as mapped | Single state; DEC-0060 native seven-path access comparison after both answers; limitations retained | — | V02, V04, V05 |
| S48 — Context 정리에서 확인한 네 가지 | T03-A | CMP-EVIDENCE, CMP-CLAIM | CMP-CONTEXT-ROUTER | P+T; separate scoped observations from the recap model | Four bounded State/Trial callbacks; no extra Demo | Single state | — | V01, V05 |
| S49 — 지식은 정리됐지만 절차는 반복된다 | T04-A | CMP-WORKFLOW, CMP-EVIDENCE | CMP-CLAIM | P+T; separate observed repeated prompt structure from the teaching question | — | Single state; DEC-0060 single reconstructed procedure question before next ACT evidence | — | V01, V05, V09 |
| S50 — 두 실제 요청에 같은 절차가 반복됐다 | T04-A | CMP-TRIAL, CMP-EVIDENCE, CMP-WORKFLOW, CMP-CLAIM | — | P | TRIAL-006/007 evidence; Case; attribution remains PARTIAL | Single state; DEC-0060 two retained request records compared; approved functional illustration retained | — | V02, V05, V09 |
| S51 — 테스트 명령을 언제 쓰고 무엇을 판단할까? | T03-A | CMP-WORKFLOW | — | T | — | Same source feeds before-change, after-change and completion judgments; identical test marker, distinct questions; DEC-0063 teaching example | — | V09 |
| S52 — 한 성능 작업에 세 책임을 적용하면 | T03-B | CMP-WORKFLOW | — | T | — | Single state | — | V10 |
| S53 — 반복 절차의 유지 위치를 선택한다 | T05-A | CMP-TRIAL, CMP-CLAIM | — | T; label current Skill surface/invocation as REQUIRES PRODUCT CHECK | DEMO-03 WATCH / question; no success result on this Slide | Single state | — | V02, V09 |
| S54 — Skill의 발견과 본문 포함을 확인했다 | T07-A | CMP-TRIAL, CMP-EVIDENCE, CMP-CLAIM | — | P | DEMO-03 EVIDENCE; HYBRID, 5 min; observed CLI scope only | Single state | — | V02, V03 |
| S55 — Skill의 지침과 관찰된 작업을 대응한다 | T04-A | CMP-TRIAL, CMP-EVIDENCE, CMP-WORKFLOW, CMP-CLAIM | — | P | DEMO-03 WHAT HAPPENED/comparison; HYBRID, 3 min; no superiority claim | Single state; native instruction/observation table; excerpts and recorded summaries, not raw logs | — | V02, V05 |
| S56 — 절차는 재사용하고, 답은 근거로 정한다 | T04-A | CMP-WORKFLOW, CMP-CLAIM | — | P+T; observed Skill contents and teaching distinction separated | DEMO-03 supporting explanation; Lecture, outside its 8 Demo minutes | Single state | — | V01, V02, V05 |
| S57 — 후보는 시간·할당량·동작을 함께 보고 고른다 | T07-B | CMP-TRIAL, CMP-EVIDENCE, CMP-BENCHMARK, CMP-CLAIM | — | P | DEMO-03 / TRIAL-008 evidence; Case, outside the 8 Demo minutes | Single state | — | V02, V05 |
| S58 — 선택한 변경을 같은 조건에서 검증했다 | T07-B | CMP-STATE, CMP-EVIDENCE, CMP-BENCHMARK, CMP-CLAIM | CMP-WORKFLOW | P | DEMO-03 / STATE-04-PERF result; Case, not additional Demo minutes | Single state | — | V02, V05 |
| S59 — 독립 조사를 나누면 무엇이 달라질까? | T03-C | CMP-DECISION, CMP-CLAIM | CMP-CPP | C+T; explicit hypothetical independent investigations | DEMO-07 hypothetical problem/roles first; VISUAL3 + Q&A1 | Single state | Contextual | V01, V05 |
| S60 — 이번 작업은 나눌 근거가 충분했을까? | T10-B | CMP-EVIDENCE, CMP-DECISION, CMP-CLAIM | — | P+T; current task decision, no Subagent run | DEMO-07 current-task audit; Lecture1 + VISUAL2 + Q&A1 | Single state | Contextual cue only | V08, V10 |
| S61 — 다음 작업에서도 다시 찾을 지식인가? | T03-C | CMP-DECISION, CMP-CLAIM | — | C+T; hypothetical cross-task knowledge, no product Memory claim | DEMO-08 hypothetical need; VISUAL2 + Case2 | Single state | — | V01, V05 |
| S62 — 남길지, 원래 출처를 참조할지 판단한다 | T10-B | CMP-EVIDENCE, CMP-DECISION, CMP-CLAIM | — | P+T; retained knowledge audit and four teaching criteria | DEMO-08 current source audit; Lecture4, no extra Demo time | Single state | — | V02, V05 |
| S63 — 이번 사례에서 실제로 사용한 구조 | T10-C | CMP-EVIDENCE, CMP-DECISION, CMP-CLAIM | CMP-WORKFLOW, CMP-CPP | P+T; project-specific audit is not a universal feature-count comparison | DEMO-09 EVIDENCE; CAPTURED, 3 min | Single state | Contextual | V01, V05, V08 |
| S64 — 이 구성이 함께 작동하는 것이 Harness다 | T03-B | CMP-EVIDENCE | CMP-WORKFLOW, CMP-CPP | P+T; observed STATE-04-PERF elements are inset from the course model | DEMO-09 system view; CAPTURED, 2 min | Single state | Contextual | V01, V05, V08 |
| S65 — 같은 Repository라도 실행 조건은 다를 수 있다 | T03-B | CMP-EVIDENCE, CMP-CLAIM | CMP-CPP | M+T; observed global influence is a separate Meta frame, not product state | DEMO-04B preview only; Lecture, no extra Demo time | Single state | Contextual | V01, V02, V07 |
| S66 — 우리 C++ 검사 작업에 옮겨 보면 | T03-A | CMP-CPP, CMP-WORKFLOW | CMP-CLAIM | T | — | Single state | Primary | V08 |
| S67 — 우리 팀의 반복 한 가지를 고르면 | T01-B | CMP-WORKFLOW | — | T | — | R1–R3; see Section 8 | Contextual cue only; no CMP-CPP assignment | V09, V10 |
| S68 — 여기까지는 잘 동작했다 | T07-C | CMP-STATE, CMP-EVIDENCE, CMP-CLAIM | — | P | DEMO-03/Primary Product Demo endpoint callback; Lecture/Reflection, no extra Demo time | Single state | — | V02, V05 |
| S69 — 개념 사례: Project와 Workflow는 현재 맞다 | T08-A | CMP-CLAIM | CMP-CPP | C | DEMO-04A WATCH / constructed starting condition; VISUAL, 2 min | Single state | Contextual | V06, V08 |
| S70 — Project는 바뀌고 Workflow는 남았다 | T08-A | CMP-CLAIM | — | C | DEMO-04A scenario change / conceptual EVIDENCE; VISUAL, 2 min | Single state | — | V06 |
| S71 — Task 해결과 System 문제는 다르다 | T08-C | CMP-CLAIM | — | C | DEMO-04A conceptual consequence; Case, no additional Demo time | Single state | — | V06, V09 |
| S72 — 원인에 맞는 Layer를 고르기 | T08-B | CMP-CLAIM, CMP-DECISION | CMP-CPP | C+T, separate scenario and teaching choice | DEMO-11 layer-selection synthesis; CAPTURED, 2 min; no Product State | Single state | Contextual | V06, V08 |
| S73 — 실패 지점과 원인 Layer 구분하기 | T08-C | CMP-CLAIM, CMP-DECISION | CMP-CPP | C+T, observed/inferred distinction stays labeled as scenario reasoning | DEMO-11 cause/layer synthesis; CAPTURED, 1 min; no Product State | Single state | Contextual | V06, V08 |
| S74 — 먼저 관찰하고, 그다음 가설을 세운다 | T08-C | CMP-CLAIM | — | C+T | — | Single state | — | V06 |
| S75 — Cause가 지지하는 최소 변경 | T08-B | CMP-CLAIM, CMP-DECISION | — | C+T | — | Single state | — | V06, V09 |
| S76 — 같은 Task의 재실행만으로 충분할까? | T08-B | CMP-CLAIM, CMP-WORKFLOW | CMP-CPP | C+T | — | Single state | Contextual | V06, V05 |
| S77 — 대표 작업으로 변경 범위를 확인하기 | T08-B | CMP-CLAIM, CMP-DECISION | CMP-CPP | C+T; four-row conceptual Evaluation Set and any prior observed references use separate Evidence frames | DEMO-10 static visual; 5 min; EVAL-01/02 are prior evidence references, EVAL-03/04 are designed; no new run or outcome | Single state | Contextual | V06, V05, V08 |
| S78 — Harness도 특정 실패에 맞춰 과적합될 수 있다 | T08-C | CMP-CLAIM, CMP-WORKFLOW | — | C+T | — | Single state | — | V06, V10 |
| S79 — Feedback을 System Change와 Evaluation으로 잇기 | T03-C | CMP-LOOP, CMP-CLAIM | — | C+T | Existing Loop model/visual; VISUAL, 2 min (no new Demo ID) | R1–R5; see Section 8 | — | V06, V07 |
| S80 — 실제 제작 기록: TRIAL-006 | T11-A | CMP-EVIDENCE, CMP-CLAIM | — | M | DEMO-04B timeline entry; CAPTURED, 2 min | Single state | — | V07 |
| S81 — 결과의 타당성과 원인 귀속은 별개다 | T11-B | CMP-EVIDENCE, CMP-CLAIM | CMP-TRIAL | M | DEMO-04B TRIAL-006 evidence/attribution; CAPTURED, 4 min | Single state | — | V02, V05, V07 |
| S82 — 평가와 보고 규칙을 Evidence에 맞추다 | T11-A | CMP-EVIDENCE, CMP-CLAIM | CMP-DECISION | M | DEMO-04B DEC-0016 change; CAPTURED, 2 min | Single state | — | V02, V07 |
| S83 — 후속 기록은 개선됐지만 완전하지 않았다 | T11-B | CMP-EVIDENCE, CMP-CLAIM | CMP-TRIAL | M | DEMO-04B follow-up TRIAL-007/008; Lecture/Case, no additional Demo time | Single state | — | V02, V07 |
| S84 — 실제 Meta Loop에서 바뀐 것 | T11-A | CMP-EVIDENCE, CMP-CLAIM | — | M | DEMO-04B timeline synthesis; Lecture/Case, no additional Demo time | Single state | — | V07 |
| S85 — Project와 환경이 바뀌면 검증도 다시 본다 | T03-C | CMP-CPP, CMP-LOOP, CMP-CLAIM | — | T with a separately dashed CONCEPTUAL example; no Product evidence frame | — | R1–R6; see Section 8 | Primary | V08, V10 |
| S86 — 전체 Story를 한 장으로 | T03-C | CMP-WORKFLOW | CMP-CPP | T | DEMO-12 story callback only; Lecture, outside 2-minute visual slot | Single state | Contextual | V10 |
| S87 — 하나의 Repository가 문제에 대응해 진화했다 | T07-C | CMP-STATE, CMP-EVIDENCE | CMP-CLAIM | P | DEMO-12 observed Product evolution; VISUAL, 2 min | Single state | — | V01, V03, V05 |
| S88 — 필요성이 입증되지 않은 것은 보류했다 | T10-A | CMP-EVIDENCE, CMP-DECISION, CMP-CLAIM | CMP-CPP | P+T; this project’s audit is not a universal feature-count comparison | — | Single state | Contextual | V01, V05, V08 |
| S89 — 위임이 늘어도 개발자 책임은 남는다 | T03-A | — | — | T | — | Single state | — | V10 |
| S90 — AI-Native Development는 이 교육의 운영 모델 | T03-A | — | CMP-CPP | T | — | Single state | Contextual | V08 |
| S91 — 어느 Layer에서 마찰이 반복되는가? | T10-B | CMP-DECISION, CMP-CPP, CMP-CLAIM | — | T; C++ example stays a transfer model, not a verified project procedure | — | Single state | Primary | V08, V09 |
| S92 — 다음 작은 행동을 개인적으로 고른다 | T01-B | — | CMP-CPP | T | — | Single state | Contextual | V09 |
| S93 — Q&A와 교육 마무리 | T01-C | — | — | T | — | Single state | — | V10 |

### Component Usage Index

Counts refer to Slide IDs with the component listed as Required or Optional.
This is a lookup index; the assignment and required/optional distinction in
the main table remain authoritative.

| Component ID | Slide count | Slide IDs |
|---|---:|---|
| CMP-STATE | 6 | S33, S36, S42, S55, S65, S84 |
| CMP-EVIDENCE | 34 | S05, S06, S07, S17, S18, S19, S20, S21, S33, S34, S36, S37, S42, S44, S45, S46, S47, S51, S52, S54, S55, S56, S58, S60, S61, S62, S65, S77, S78, S79, S80, S81, S84, S85 |
| CMP-TRIAL | 19 | S04, S05, S06, S17, S18, S19, S33, S34, S37, S43, S44, S45, S47, S50, S51, S52, S54, S78, S80 |
| CMP-DIFF | 2 | S18, S19 |
| CMP-BENCHMARK | 2 | S54, S55 |
| CMP-CONTEXT-ROUTER | 5 | S35, S38, S40, S41, S42 |
| CMP-WORKFLOW | 19 | S02, S03, S08, S32, S38, S46, S47, S48, S49, S52, S53, S55, S60, S61, S63, S64, S73, S75, S83 |
| CMP-DECISION | 12 | S56, S57, S58, S59, S60, S69, S70, S72, S74, S79, S85, S88 |
| CMP-LOOP | 2 | S76, S82 |
| CMP-CPP | 23 | S07, S16, S21, S35, S40, S41, S42, S57, S60, S61, S62, S63, S66, S69, S70, S73, S74, S82, S83, S85, S87, S88, S89 |
| CMP-CLAIM | 57 | S04, S06, S08, S16, S17, S20, S21, S22, S23, S24, S25, S26, S27, S28, S29, S34, S37, S39, S43, S44, S45, S46, S47, S50, S51, S52, S53, S54, S55, S56, S57, S58, S59, S60, S62, S63, S65, S66, S67, S68, S69, S70, S71, S72, S73, S74, S75, S76, S77, S78, S79, S80, S81, S82, S84, S85, S88 |

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
| DEMO-02 | S32 frames the repeated-fact problem; S33 STATE evidence; S34 TRIAL-003 result and attribution limit. A dedicated WATCH FOR result card is not separately specified. | HYBRID, 8 min: S33 4 + S34 4. | Use the approved before/after instructions and reviewed trace. Keep personal/global Skill influence visible in the result boundary. |
| DEMO-03 | S50 WATCH / open question; S51 TRIAL-008 discovery and explicit invocation EVIDENCE; S52 WHAT HAPPENED / Prompt-structure comparison. S53–55 are bounded case follow-through, not extra Demo minutes. | HYBRID, 8 min: S51 5 + S52 3. | The observed path is Codex CLI 0.154.0. Desktop behavior, implicit invocation, superiority, token saving, and speed improvement remain unclaimed. |
| DEMO-04A | S66 WATCH / starting condition; S67 conceptual change and schematic mismatch; S68–75 continue the conceptual case outside its 4-minute Demo slot. | VISUAL conceptual case, 4 min: S66 2 + S67 2. | Keep CONCEPTUAL visible. DEC-0027: official unit + integration scope versus reusable unit-only direction. No actual failure, command, or Product State. |
| DEMO-04B | S77 timeline entry; S78 TRIAL-006 EVIDENCE and attribution; S79 DEC-0016 change. S80–81 are the follow-up and synthesis outside the 8-minute Demo slot. | CAPTURED, 8 min: S77 2 + S78 4 + S79 2. | Use the approved dated timeline and claim audit. Preserve TRIAL-007 report/stderr discrepancy and all PARTIAL / UNKNOWN boundaries. |
| DEMO-05 | S17 introduction pairs three actual request excerpts with observed process-record summaries; S18 investigation/plan/edit EVIDENCE; S19 verification/result. | CAPTURED, 8 min: S18 4 + S19 4. | Prompt excerpts are labeled translation; do not show a full Prompt/log or claim access to hidden thought. S17 Lecture 2 min stays outside the Demo slot. |
| DEMO-06 | S37 TRIAL-004 evidence; S42 STATE-03 structure; S43 TRIAL-005A/B WATCH; S44–45 observed access and comparison. | VISUAL / CAPTURED, 5 min: S37 2 + S42 2 + S45 1. | Use the approved Context map and curated diff. S44 is Case time. Do not imply perfect routing, token savings, or measured performance improvement. |
| DEMO-07 | S56 frames the current task and its bounded result; S57 gives a conditional conceptual case, not observed product evidence. | VISUAL, 5 min: S56 3 + S57 2. | No product interaction or independent subagent result is selected. Keep the current-task decision local to this task. |
| DEMO-08 | S58 asks which knowledge might justify persistence and classifies the current Demo’s knowledge. | VISUAL, 2 min on S58. | No product Memory behavior or selected Memory candidate. S59 is the criteria callback, not extra Demo time. |
| DEMO-09 | S60 shows the project-specific component audit; S61 relates observed elements to the Harness teaching model. | CAPTURED / VISUAL, 5 min: S60 3 + S61 2. | Use the approved tool-to-check map and bounded checks. Subagent and Memory are not made required components. |
| DEMO-10 | S74 four-row conceptual Evaluation Set; prior EVAL-01/02 evidence references are separate from designed EVAL-03/04 cases. | VISUAL / CAPTURED conceptual matrix, 5 min on S74; no task execution. | If prior OBSERVED_PRODUCT references appear, use a separate solid frame; keep EVAL-03/04 without outcomes and do not imply a new Trial or PASS/FAIL result. |
| DEMO-11 | S69 layer-selection synthesis; S70 cause/layer distinction. The displayed alternatives remain part of the conceptual case. | CAPTURED / VISUAL synthesis, 3 min: S69 2 + S70 1. | No Product State or historical repair is added. Show only the source-approved choices and trade-offs. |
| DEMO-12 | S83 is the story callback; S84 is the actual State evolution evidence/result. | VISUAL, 2 min on S84. | Use the approved State rail. Do not combine Product States with the DEMO-04A conceptual path or DEMO-04B Meta timeline. |
| Loop model / visual (no Demo ID) | S76 reveals the bounded conceptual Loop and holds the complete model. | VISUAL, 2 min on S76. | Keep it separate from DEMO-04B and do not imply an observed Product Loop. |

The Demo-slot sum is 73 minutes:
8 + 8 + 8 + 4 + 8 + 8 + 5 + 5 + 2 + 5 + 5 + 3 + 2 + 2 = 73.
The order in this table is by identifier, not teaching sequence.

## 8. Progressive Reveal

Reveal timings are approximate presentation cues inside the already approved
Slide time and Delivery Mode. They do not create Slides, add time, or define
Speaker Notes.

### S64 — 10 minutes

| State | Approx. time / mode | Visible | Hidden until this state | Speaker trigger |
|---|---|---|---|---|
| R1 | 0–3 min; Reflection 3 | The opening question about recurring friction. | The candidate engineering structures and Loop transition. | Start with a pause; do not categorize audience answers. |
| R2 | 3–8 min; Q&A 5 | Reveal, in sequence: recurring Project facts → Context; repeated procedure → Workflow; independent parallel work → consider Subagent; costly rediscovery → consider Memory; needed confidence → Tests / Benchmark / Review. | Future Loop connection. Keep every structure conditional rather than mandatory. | Introduce each category only after the preceding one has been discussed. |
| R3 | 8–10 min; Transition 2 | The unresolved “what should the system do when evidence changes?” question leading to Loop Engineering. | Nothing; retain the complete map for the handoff. | Move from choosing needed structure to observing and improving it. |

### S76 — 11 minutes

| State | Approx. time / mode | Visible | Hidden until this state | Speaker trigger |
|---|---|---|---|---|
| R1 | 0–1.5 min; Lecture | Execution. | Observation and later stages. | Begin with one bounded task execution. |
| R2 | 1.5–3 min; Lecture | Execution → Observation. | Cause and later stages. | Add only what was observed; do not explain cause yet. |
| R3 | 3–5 min; Lecture | Add Cause. Label inference as a cause judgment, not an automatic diagnosis. | System Change and Re-evaluation. | Ask what evidence supports the cause. |
| R4 | 5–7 min; Lecture | Add System Change at the cause-matched layer. | Re-evaluation. | Show that a system change is a developer decision. |
| R5 | 7–9 min; Lecture | Add Re-evaluation and the return connector; keep the whole Loop visible. | None. | Ask what must be checked again after the change. |
| Hold | 9–11 min; VISUAL Demo 2 | Full model remains visible without additional claims. | None. | Use the visual interval to read the complete model and its boundary. |

### S82 — 20 minutes

| State | Approx. time / mode | Visible | Hidden until this state | Speaker trigger |
|---|---|---|---|---|
| R1 | 0–1 min; Case | A labeled conceptual Project / Environment change. | Friction and later response. | Introduce one bounded change, such as a changed GPU architecture assumption. |
| R2 | 1–2 min; Case | The new friction observed after the change. | Cause and selected layer. | State what is observed before proposing why. |
| R3 | 2–4 min; Case | Confirmed facts beside a separately labeled cause hypothesis. | Correct Layer and verification. | Ask which fact supports or weakens the hypothesis. |
| R4 | 4–5 min; Case | The cause-matched change Layer. | Verification result. | Select only the relevant layer; do not enumerate unverified tools. |
| R5 | 5–7 min; Case | Benchmark / regression conditions to revisit; no invented result. | Discussion prompts. | Ask what changed in the verification conditions. |
| R6 | 7–20 min; Reflection 2, Q&A 7, Transition 4 | Keep the five-step flow visible; show the discussion prompt outside the flow so it does not become a sixth workflow step. | None. | Let participants select a relevant layer; do not ask them to perform a lab or claim a universal fix. Put the final transition after Q&A. |

## 9. C++ Vision Bridge

The Bridge is a reusable Component, not a separate Template. The current
component index assigns CMP-CPP to 23 Slides. The user-approved classification
is 3 PRIMARY, 6 SUPPORTING, and 14 CONTEXTUAL. A Slide Map cue without a
CMP-CPP component assignment is tracked separately below and is not included
in the count.

| Role | Slides | Rendering rule |
|---|---|---|
| PRIMARY | S63, S82, S88 | Give the engineering-pattern transfer diagram prominent space within the host Template. Keep PYTHON DEMO → ENGINEERING PATTERN → C++ VISION as the visual center; do not turn it into a tool list or C++ implementation lesson. |
| SUPPORTING | S16, S21, S35, S40–42 | Use a small inset or footer strip only. Preserve the host Slide’s main message and use one bounded transfer example. |
| CONTEXTUAL | S07, S57, S60–62, S66, S69–70, S73–74, S83, S85, S87, S89 | Treat as a Speaker cue. Add a small annotation only when it improves the host Slide and fits its density limit; the C++ component does not need a visible rendering. |

DEC-0041 permits S21's SUPPORTING C++ example in the right-side teaching
area beside a compact Check-to-claim table. Its native vector cells and
assertion excerpts explain the host Slide's verification message; this is
not a new PRIMARY Bridge, Template, variant, C++ Trial or tool tutorial.

S64 contains a contextual C++ Vision cue in SLIDE_MAP.md but has no CMP-CPP
component assignment. It is therefore not part of the 23-Slide component
inventory and must remain a Speaker cue unless the mapping is separately
revised. S20 points its verification inset to S21 and receives no duplicate
Bridge. S66’s optional connection does not create a second C++ conceptual
case. Keep all visible Bridges within their host Template and preserve the
Slide Map’s environment and claim limits.

## 10. Boundary and Traceability Audit

### S65 → S66

- S65 uses T07-C, a single-solid OBSERVED_PRODUCT frame with actual State
  references and the existing bounded success.
- S66 switches to T08-A and a dashed, persistent CONCEPTUAL label.
- The Product State rail does not continue into the constructed DEMO-04A case.
- No product success is attributed to the conceptual scenario.

### S76 → S77

- S76 uses T03-C, a clean Teaching Model plus a separately dashed conceptual
  frame; its five stages and VISUAL hold are not a Product Loop.
- S77 switches to T11-A, a double-line OBSERVED_META timeline.
- No Git State, Product failure, or Product code change is inserted into the
  Meta timeline.

### Claim and evidence checks

- Each row inherits Evidence Type, Claim Status, and the existing
  Evidence / Decision References from SLIDE_MAP.md; none is reclassified.
- OBSERVED_PRODUCT, OBSERVED_META, CONCEPTUAL, RESEARCH, and TEACHING_MODEL
  use distinct grammar. Mixed types use separate frames/insets.
- S65 is P. S66–75 are C, with a separate T area only on mixed-type Slides;
  S76 is C+T. S77–81 are M.
- S39 remains scoped to the approved research conditions and source.
- TRIAL-005 does not claim superior routing, token savings, or performance
  improvement.
- TRIAL-006/007 attribution remains PARTIAL where the Map says so.
- DEMO-04A and DEMO-10/11 evaluation visuals do not show results that did not
  occur.
- S74 keeps the four-row Evaluation Set conceptual. EVAL-01/02 historical
  evidence references, if shown, use a separate solid frame; EVAL-03/04 are
  designed examples with no Trial outcome.
- C++ Bridge component assignments are classified 3 PRIMARY, 6 SUPPORTING,
  and 14 CONTEXTUAL. Component assignment does not require visible rendering.
- All template and component references in the mapping resolve to the
  registries above.

### Count and time checks

- Slide IDs: S01–S90, 90 unique entries. DEC-0043 keeps S01–S21, inserts S22–S29 and maps former S22–S82 to S30–S90. All 82 original slides and their time/Mode allocations remain; prior insertions retain their historical records.
- ACT slide counts: 10 / 21 / 15 / 18 / 18 / 8.
- ACT time: 40 / 63 / 70 / 85 / 80 / 30 minutes.
- Total: 368 minutes, including seven added Lecture minutes and one added Case minute.
- Delivery Mode totals: Lecture 137, Demo 73, Case 84, Reflection 20,
  Transition 22, Q&A 32 minutes.
- Every Slide’s mode allocation continues to sum to its estimated time as
  recorded in SLIDE_MAP.md.

## 11. Open Items

- Current product-surface and account checks remain open where already marked
  REQUIRES PRODUCT CHECK in the Claim Freeze and Slide Map.
- Exact captures, screen crops, and fallback files remain to be selected or
  rehearsed from the existing Demo evidence; this map does not create them.
- DEMO-04A uses DEC-0027's approved hypothetical unit → unit + integration
  scope change with a unit-only reusable direction. No specific Runner command,
  Agent execution, failure or actual wrong-scope result is established.
- S76 and S82 state times are approximate reveal cues. Validate legibility
  and pacing during a future prototype without changing the approved Slide
  times or Delivery Mode totals.
- Prototype selection and acceptance criteria are recorded in
  plan/VISUAL_PROTOTYPE_PLAN.md. Windows PowerPoint compatibility remains
  unverified until checked on a target presentation PC.

These items do not prevent template assignment. They remain visible rather
than being resolved by invented product behavior or evidence.

## 12. Completion

- Template assignment: one Primary Template for every Slide S01–S90.
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
| T03 | 25 |
| T04 | 11 |
| T05 | 4 |
| T06 | 4 |
| T07 | 11 |
| T08 | 10 |
| T09 | 1 |
| T10 | 7 |
| T11 | 5 |
| **Total** | **90** |

**Next readiness:** READY FOR VISUAL PROTOTYPE. The mapped prototype set
covers five of the eleven Templates; the uncovered Template and Variant gaps
are recorded in plan/VISUAL_PROTOTYPE_PLAN.md.


## DEC-0044 — S17 request-to-observation introduction

Keep T05-A and its three-focus setup. S17 uses three paired native rows of actual request excerpts and scoped process observations before the edit/results on S18–S19. CMP-EVIDENCE makes the observed summary source explicit. No Trial screenshot, fabricated command, new result or new Template/Variant is added.
