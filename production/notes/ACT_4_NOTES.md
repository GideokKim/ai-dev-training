# ACT 4 — Speaker Notes

Status: REVIEWED — S55–S72 follow the approved Slide Map. Local rendering and review are complete; Windows PowerPoint, room projection, target fonts, and the timed ACT 4 rehearsal remain unverified.

Authority: `plan/SLIDE_MAP.md`, `plan/SLIDE_TEMPLATE_MAP.md`, `plan/VISUAL_SPEC.md`, `plan/VISUAL_TEMPLATE_FREEZE.md`, `plan/SPEAKER_NOTES_ARCHITECTURE.md`, `plan/SPEAKER_NOTES_FREEZE.md`, `plan/PRODUCTION_PLAN.md`, `plan/CLAIM_FREEZE.md`, `plan/DEMO_MATRIX.md`, `plan/DEMO_RUNBOOK_SPEC.md`, and `plan/DECISIONS.md`.

All 18 slides use the approved 19-field schema. Embedded PowerPoint notes contain the same slide text as this Markdown file.

## S55 — 여기까지는 잘 동작했다

**Slide ID:**
S55

**Working Title:**
여기까지는 잘 동작했다

**ACT / Section:**
ACT 4 / 4A  WORKING HARNESS CALLBACK

**Allocated Time:**
4 minutes

**Mode Split:**
Lecture 3분 + Reflection 1분

**Primary Message:**
STATE-04-PERF는 bounded task에서 검증된 성공이다. 뒤에 나올 stale 사례는 별도의 개념 사례다.

**Opening Question:**
“잘 동작하는 System도 계속 맞는 상태로 남아 있을까?”

**Speaker Flow:**
1. (0:00–1:30) STATE-04-PERF를 bounded success로 회수한다.
2. (1:30–3:00) 같은 입력·환경에서의 검증을 작게 보여준다.
3. (3:00–4:00) 잠시 성찰하고 다음 장에서 다른 Conceptual frame으로 넘어간다.

**Evidence / Source:**
STATE-00 → STATE-04-PERF  ·  bounded image_statistics evidence

**Claim Boundary:**
STATE-04-PERF의 기록된 task, 코드 경로, 입력, runtime, host 및 검증 조건에 한정한다. 이 결과는 실제 stale Harness나 Product failure를 뜻하지 않는다.

**Beginner Explanation:**
먼저 잘 동작했던 현재 시스템을 기준점으로 둔다.

**Advanced Insight:**
성공한 Product State와 뒤의 Conceptual Case를 별도 Evidence frame으로 읽는다.

**C++ Vision Bridge:**
없음.

**Demo Operation:**
추가 실행 없음. 기존 ACT 3에서 승인된 STATE-04-PERF 결과를 짧게 회수한다. 수치는 현재 범위와 함께 보이고 일반 성과로 확대하지 않는다.

**Audience Interaction:**
1분 Reflection: “성공한 현재 상태도 Project 변화 뒤 다시 확인해야 할까?” 개인 생각만 하고 응답을 요구하지 않는다.

**Transition:**
Project가 정당한 이유로 바뀌면 작업 Workflow도 함께 바뀔까?

**Time Management:**
Lecture 3분 + Reflection 1분. 기존 ACT 3 설명을 다시 길게 열지 않는다.

**Fallback:**
READY — 이 Slide의 정적 vector diagram과 production/preview/act4/S55.png. Live run은 하지 않는다.

**Validation Status:**
로컬 렌더링과 source alignment 검토 대상. Windows PowerPoint, target-PC fonts, room projection, ACT 4 80분 rehearsal은 미검증.


## S56 — 개념 사례: Project와 Workflow는 현재 맞다

**Slide ID:**
S56

**Working Title:**
개념 사례: Project와 Workflow는 현재 맞다

**ACT / Section:**
ACT 4 / 4B  CONCEPTUAL STALE HARNESS / DEMO-04A

**Allocated Time:**
2 minutes

**Mode Split:**
Demo 2분 (VISUAL)

**Primary Message:**
개념 사례의 시작에서는 Project의 기준 절차와 재사용 Workflow가 모두 맞다.

**Opening Question:**
“지금 맞는 Project Workflow는 계속 맞을까?”

**Speaker Flow:**
1. (0:00–0:30) 이 장면이 구성된 교육 사례임을 먼저 밝힌다.
2. (0:30–1:30) Project source와 reusable workflow가 같은 OLD TEST ENTRY를 가리키는 상태를 보여준다.
3. (1:30–2:00) 아직 오류가 없고 정상적으로 정렬된 시작점임을 강조한다.

**Evidence / Source:**
DEMO-04A  ·  constructed starting condition  ·  no Trial

**Claim Boundary:**
CONCEPTUAL CASE. `ai-dev-training-demo`의 기록, Trial 또는 Product State가 아니다.

**Beginner Explanation:**
처음에는 현재 지침과 재사용 절차가 서로 맞아 있다.

**Advanced Insight:**
당시에 올바른 절차도 Project 변화 이후 stale해질 수 있다.

**C++ Vision Bridge:**
선택적 맥락: 실제 Project에서도 build/test structure가 바뀔 수 있다. 별도 C++ 사례로 확장하지 않는다.

**Demo Operation:**
VISUAL only. 실제 Runner, shell command, terminal capture, 결과 badge는 사용하지 않는다. 점선 CONCEPTUAL label을 전체 장면에 유지한다.

**Audience Interaction:**
Project source와 reusable workflow가 같은 test entry를 가리키는지 함께 본다. 답변 요구 없음.

**Transition:**
Project가 바뀌었는데 재사용 Workflow가 그대로라면 어떻게 될까?

**Time Management:**
VISUAL Demo 2분. 첫 장면은 정상 상태로 두고 Project 변경을 앞당겨 보여주지 않는다.

**Fallback:**
READY — 이 PPT의 conceptual vector diagram과 production/preview/act4/S56.png. 별도 실행 캡처는 사용하지 않는다.

**Validation Status:**
Conceptual label 및 dashed frame을 유지한다. 로컬 렌더 검토 후 Windows/target-room 조건은 미검증으로 둔다.


## S57 — Project는 바뀌고 Workflow는 남았다

**Slide ID:**
S57

**Working Title:**
Project는 바뀌고 Workflow는 남았다

**ACT / Section:**
ACT 4 / 4B  CONCEPTUAL STALE HARNESS / DEMO-04A

**Allocated Time:**
4 minutes

**Mode Split:**
Demo 2분 (VISUAL) + Case 2분

**Primary Message:**
Project 기준 절차는 정당한 변경에 맞게 갱신됐지만, 재사용 Workflow는 이전 절차를 계속 가리킨다. 이를 Agent의 지능 문제로 바로 결론 내릴 수 없다.

**Opening Question:**
“다음 Task에서 old workflow를 따르면 누가 틀린 걸까?”

**Speaker Flow:**
1. (0:00–1:00) Project가 정당한 이유로 변했지만 세부 사유는 미정이라고 말한다.
2. (1:00–2:30) Project source만 NEW TEST ENTRY로 이동시킨다.
3. (2:30–4:00) Workflow가 OLD TEST ENTRY에 남은 차이를 관찰한다.

**Evidence / Source:**
DEMO-04A  ·  conceptual Project evolution  ·  no actual migration

**Claim Boundary:**
가상 사례. 실제 Repository migration, Runner 변경 이력 또는 Codex failure가 아니다. 변경의 구체적 사유는 미확정이다.

**Beginner Explanation:**
Agent가 따르는 지침이 Project의 현재 절차와 맞는지 살핀다.

**Advanced Insight:**
Project source의 변화와 stale artifact의 위치를 분리해 본다.

**C++ Vision Bridge:**
없음.

**Demo Operation:**
VISUAL only. `OLD TEST ENTRY → NEW TEST ENTRY`는 추상적 label이다. 구체적인 command나 layout은 만들지 않는다.

**Audience Interaction:**
무엇이 바뀌었고 무엇이 남았는지 잠시 비교한다. Agent 탓이나 특정 실패를 가정하지 않는다.

**Transition:**
다음 Task가 예전 Workflow를 사용하면 어떤 결과가 생길까?

**Time Management:**
Demo 2분은 도식 공개에, Case 2분은 stale 간극을 해석하는 데 쓴다.

**Fallback:**
READY — 이 PPT의 conceptual vector diagram과 production/preview/act4/S57.png. 가짜 terminal capture는 사용하지 않는다.

**Validation Status:**
Conceptual label·선택하지 않은 Project-change reason 경계를 확인한다. 실제 Trial은 없다.


## S58 — Task 해결과 System 문제는 다르다

**Slide ID:**
S58

**Working Title:**
Task 해결과 System 문제는 다르다

**ACT / Section:**
ACT 4 / 4B  CONCEPTUAL STALE HARNESS / DEMO-04A

**Allocated Time:**
3 minutes

**Mode Split:**
Case 3분

**Primary Message:**
오래된 절차는 command 실패 또는 잘못된 검증 범위를 낳을 수 있다. Prompt 보정은 현재 Task를 풀 수도 있지만 reusable workflow는 stale한 채 남을 수 있다.

**Opening Question:**
“Prompt를 더 자세히 쓰면 이번 Task는 해결될까?”

**Speaker Flow:**
1. (0:00–1:00) 오래된 절차에서 생길 수 있는 두 가능성을 말한다.
2. (1:00–2:00) Prompt patch가 현재 Task를 풀 수 있음을 별도 칸에 둔다.
3. (2:00–3:00) reusable workflow가 바뀌지 않았음을 남긴다.

**Evidence / Source:**
DEMO-04A  ·  conceptual consequence  ·  no execution result

**Claim Boundary:**
가상 가능성만 제시한다. 구체적인 실패, 실행 결과, PASS/FAIL 또는 실제 Demo 이력은 없다.

**Beginner Explanation:**
이번 답을 고치는 것과 다음 작업의 절차까지 바꾸는 것은 다르다.

**Advanced Insight:**
Task-level workaround와 durable system correction을 구분한다.

**C++ Vision Bridge:**
없음.

**Demo Operation:**
추가 실행 없음. 두 가지 가능한 결과를 modal language로 설명하고 실제 출력처럼 표현하지 않는다.

**Audience Interaction:**
“이번 Task가 풀려도 다음 Task의 지침은 달라졌나?”를 생각하게 한다.

**Transition:**
그럼 Prompt, global rule, stale Workflow 중 어느 Layer를 살펴볼까?

**Time Management:**
Case 3분. 특정 오류 유형이나 결과에 한정하지 않는다.

**Fallback:**
READY — 이 PPT의 conceptual comparison diagram과 production/preview/act4/S58.png.

**Validation Status:**
가능성 표현과 결과 미확정 상태를 확인한다. 실행 증거는 주장하지 않는다.


## S59 — 원인에 맞는 Layer를 고르기

**Slide ID:**
S59

**Working Title:**
원인에 맞는 Layer를 고르기

**ACT / Section:**
ACT 4 / 4C  FIX THE RIGHT LAYER

**Allocated Time:**
2 minutes

**Mode Split:**
Demo 2분 (CAPTURED)

**Primary Message:**
Prompt patch는 현재 Task만 풀 수 있고 global rule은 중복·충돌을 만들 수 있다. Workflow가 원인으로 확인된 사례라면 그 source를 고친다.

**Opening Question:**
“어디를 고치면 현재 Task와 다음 Task가 함께 달라질까?”

**Speaker Flow:**
1. (0:00–0:30) 세 선택지를 한 번에 보여준다.
2. (0:30–1:15) 각 선택이 바꾸는 범위를 비교한다.
3. (1:15–2:00) 이 사례가 Workflow 원인을 설정했을 때에만 C가 맞다고 제한한다.

**Evidence / Source:**
DEMO-11  ·  conceptual layer-selection synthesis

**Claim Boundary:**
가상 사례 안의 선택 논리다. C는 workflow 원인이 확인된 경우에 맞으며 일반적인 정답이나 Product modification이 아니다.

**Beginner Explanation:**
Prompt에 한 줄 더하기 전에 반복되는 원인이 있는 곳을 찾는다.

**Advanced Insight:**
원인이 뒷받침하는 좁은 layer를 선택하고 중복 지침 가능성을 따진다.

**C++ Vision Bridge:**
Context, workflow, toolchain 또는 test environment 중 원인이 있는 layer를 살핀다는 정도의 pattern transfer만 가능하다.

**Demo Operation:**
CAPTURED conceptual visual. 세 선택지의 범위만 비교한다. 실제 수정 diff나 Product state는 보여주지 않는다.

**Audience Interaction:**
A/B/C의 효과 범위를 소리 없이 비교하게 한다. 원인이 정해졌다고 일반화하지 않는다.

**Transition:**
보이는 실패 지점과 실제 원인 Layer는 항상 같을까?

**Time Management:**
CAPTURED 2분. Visual matrix만 설명하고 새 Product 근거를 추가하지 않는다.

**Fallback:**
READY — 이 PPT의 정적 layer comparison과 production/preview/act4/S59.png.

**Validation Status:**
Conceptual frame과 조건부 결론을 확인한다.


## S60 — 실패 지점과 원인 Layer 구분하기

**Slide ID:**
S60

**Working Title:**
실패 지점과 원인 Layer 구분하기

**ACT / Section:**
ACT 4 / 4C  FIX THE RIGHT LAYER

**Allocated Time:**
2 minutes

**Mode Split:**
Lecture 1분 + Demo 1분 (CAPTURED)

**Primary Message:**
증상은 Prompt나 실행 지점에 보일 수 있지만 원인은 Context, Workflow, Environment, Tool/Permission, Product code 등 다른 층에 있을 수 있다.

**Opening Question:**
“실패가 보인 Layer와 원인이 있는 Layer는 항상 같을까?”

**Speaker Flow:**
1. (0:00–0:45) 증상과 원인이 다른 위치일 수 있음을 소개한다.
2. (0:45–1:30) 가능한 layer를 같은 무게로 보여준다.
3. (1:30–2:00) 단일 인과 결론을 내리지 않고 관찰로 넘어간다.

**Evidence / Source:**
DEMO-11  ·  conceptual cause/layer synthesis

**Claim Boundary:**
교육용 debugging heuristic이다. 고정 진단표나 단일 원인 mapping이 아니며, 가상 사례의 원인은 조사로 확인해야 한다.

**Beginner Explanation:**
실패 메시지만 보고 Prompt나 Agent를 탓하지 않는다.

**Advanced Insight:**
Observation, cause hypothesis, system change, rerun, evaluation을 구분한다.

**C++ Vision Bridge:**
Build, environment, permission, project code를 후보로 분리하는 pattern만 제공한다.

**Demo Operation:**
CAPTURED conceptual diagram. 중심 symptom에서 여러 possible cause layer로 점선을 둔다. 단일 인과 화살표를 그리지 않는다.

**Audience Interaction:**
증상이 보여도 원인이 아직 미확정일 수 있음을 함께 확인한다.

**Transition:**
S61에서 이 사례의 가정과 확인할 가설을 분리한다.

**Time Management:**
Lecture 1분은 관점을 설명하고 CAPTURED visual 1분은 후보 layer만 보여준다.

**Fallback:**
READY — 이 PPT의 static cause-layer diagram과 production/preview/act4/S60.png.

**Validation Status:**
다중 후보·비인과 연결 표기가 의도대로 보이는지 확인한다.


## S61 — 먼저 관찰하고, 그다음 가설을 세운다

**Slide ID:**
S61

**Working Title:**
먼저 관찰하고, 그다음 가설을 세운다

**ACT / Section:**
ACT 4 / 4C  CAUSE / CHANGE

**Allocated Time:**
2 minutes

**Mode Split:**
Case 2분

**Primary Message:**
실행된 절차, 현재 Project 문서, 재사용 Workflow, 실패가 나타난 위치를 먼저 살핀다. 관찰한 사실과 원인 판단은 별개다.

**Opening Question:**
“원인을 추측하기 전에 무엇부터 확인해야 할까?”

**Speaker Flow:**
1. (0:00–0:45) `SCENARIO ASSUMPTIONS` 영역을 보여준다.
2. (0:45–1:30) `INFERENCE TO CHECK`에 stale workflow 가설을 둔다.
3. (1:30–2:00) 확정 전에 확인이 필요하다고 정리한다.

**Evidence / Source:**
DEMO-04A  ·  scenario assumptions and inference

**Claim Boundary:**
화면의 “scenario assumption”도 실제 Trial 관찰이 아니다. stale Workflow는 점검할 가설이지 확정 사실이 아니다.

**Beginner Explanation:**
원인을 정하기 전 현재 지침과 따라간 절차를 맞춰 본다.

**Advanced Insight:**
증거와 cause hypothesis의 확신 수준을 분리한다.

**C++ Vision Bridge:**
없음.

**Demo Operation:**
추가 실행 없음. 왼쪽은 사례가 가정하는 정보, 오른쪽은 검증할 가설로 표시한다.

**Audience Interaction:**
두 칸을 읽고 어떤 문장이 가정이며 어떤 문장이 추론인지 구분해 본다. 답변 제출은 요구하지 않는다.

**Transition:**
Workflow 원인이 확인됐다면 어느 범위까지 바꿔야 할까?

**Time Management:**
Case 2분. 가상 전제와 실제 Evidence를 구별한다.

**Fallback:**
READY — 이 PPT의 two-column conceptual diagram과 production/preview/act4/S61.png.

**Validation Status:**
`OBSERVED`라고 오인할 표현이 없고 conceptual boundary가 살아 있는지 확인한다.


## S62 — Cause가 지지하는 최소 변경

**Slide ID:**
S62

**Working Title:**
Cause가 지지하는 최소 변경

**ACT / Section:**
ACT 4 / 4C  CAUSE / CHANGE

**Allocated Time:**
2 minutes

**Mode Split:**
Lecture 1분 + Case 1분

**Primary Message:**
이 사례에서 stale Workflow가 원인으로 확인됐다고 가정하면 우선 그 Workflow를 갱신한다. 중복된 오래된 지침은 원인일 때만 제거한다.

**Opening Question:**
“얼마나 바꿔야 할까?”

**Speaker Flow:**
1. (0:00–1:00) 원인 layer와 조치 layer의 관계를 설명한다.
2. (1:00–2:00) workflow 갱신과 조건부 obsolete instruction 정리를 보여준다.

**Evidence / Source:**
DEMO-04A  ·  conceptual cause-to-change path

**Claim Boundary:**
가상 사례의 조건부 대응이다. 실제 Product 변경이나 Trial 결과가 아니며, “최소”는 무조건 적게 바꾸라는 뜻이 아니다.

**Beginner Explanation:**
새 규칙을 더하기 전에 실제 원인이 있는 곳을 고친다.

**Advanced Insight:**
Cause가 지지하는 가장 작은 durable change를 정한다.

**C++ Vision Bridge:**
없음.

**Demo Operation:**
추가 실행 없음. `if cause confirmed` 조건을 화면에 유지한다.

**Audience Interaction:**
조건이 바뀌면 수정 대상도 바뀔 수 있음을 잠시 생각하게 한다.

**Transition:**
변경 뒤 같은 Task를 다시 통과하면 Harness는 충분히 검증된 걸까?

**Time Management:**
Lecture 1분은 원칙, Case 1분은 가상 workflow 변화에 쓴다.

**Fallback:**
READY — 이 PPT의 static cause-to-change diagram과 production/preview/act4/S62.png.

**Validation Status:**
조건부 premise, 최소 변경 범위, actual-change 오인이 없는지 검토한다.


## S63 — 같은 Task의 재실행만으로 충분할까?

**Slide ID:**
S63

**Working Title:**
같은 Task의 재실행만으로 충분할까?

**ACT / Section:**
ACT 4 / 4D  EVALUATION & REGRESSION

**Allocated Time:**
4 minutes

**Mode Split:**
Lecture 1분 + Case 3분

**Primary Message:**
같은 Task의 재실행은 필요하지만 그것만으로 변경이 인접 작업에 영향을 주지 않는지는 알 수 없다.

**Opening Question:**
“Failure가 사라졌으면 Harness fix가 끝난 걸까?”

**Speaker Flow:**
1. (0:00–1:00) 같은 Task rerun이 답하는 범위를 말한다.
2. (1:00–2:30) 인접하거나 무관한 작업에서 생길 위험을 제시한다.
3. (2:30–4:00) EVAL 설계로 전환한다.

**Evidence / Source:**
DEMO-04A  ·  designed rerun and system evaluation path

**Claim Boundary:**
이 재실행과 확장 검증은 conceptual design이다. 실행 결과, pass count, regression success를 보여주지 않는다.

**Beginner Explanation:**
이번 작업이 다시 되는지와 다른 작업도 안전한지는 별도 질문이다.

**Advanced Insight:**
Task recovery는 필요 조건일 수 있어도 Harness-level validation을 대신하지 않는다.

**C++ Vision Bridge:**
같은 build/test 시나리오 재실행은 필요하지만 전체 회귀 위험을 모두 해소하지 않는다.

**Demo Operation:**
추가 실행 없음. `FIX TASK`와 `EVALUATE SYSTEM` 두 질문을 별도 카드로 보여준다.

**Audience Interaction:**
두 확인 질문의 범위가 다른 점을 비교한다.

**Transition:**
변경이 닿는 다른 작업 표면은 어떤 대표 Task로 볼까?

**Time Management:**
Lecture 1분 + Case 3분. 구체적인 pass/fail을 만들지 않는다.

**Fallback:**
READY — 이 PPT의 paired evaluation diagram과 production/preview/act4/S63.png.

**Validation Status:**
Task recovery와 system validation이 서로 다른 영역으로 읽히는지 검토한다.


## S64 — 대표 작업으로 변경 범위를 확인하기

**Slide ID:**
S64

**Working Title:**
대표 작업으로 변경 범위를 확인하기

**ACT / Section:**
ACT 4 / 4D  EVALUATION & REGRESSION

**Allocated Time:**
5 minutes

**Mode Split:**
Demo 5분 (VISUAL / CAPTURED conceptual matrix)

**Primary Message:**
EVAL-01/02의 prior observed evidence와 EVAL-03/04의 설계 사례를 분리해 보여준다. 어느 것도 Conceptual stale-workflow 변경의 결과는 아니다.

**Opening Question:**
“무엇을 대표 Task로 고를까?”

**Speaker Flow:**
1. (0:00–1:00) Evaluation을 task 수가 아니라 coverage 관점에서 연다.
2. (1:00–2:00) EVAL-01/02의 기존 Product evidence references를 separate solid frame으로 보여준다.
3. (2:00–4:00) 네-row conceptual set을 읽고 EVAL-03/04가 designed/no outcome임을 밝힌다.
4. (4:00–5:00) 새 실행이나 result가 없음을 재강조한다.

**Evidence / Source:**
DEMO-10  ·  EVAL-01/02 prior Product references; EVAL-03/04 designed

**Claim Boundary:**
EVAL-01/02는 별도 Product task chain의 기존 참고 Evidence다. EVAL-03/04는 설계 사례이며 결과가 없다. 이번 stale-Workflow 변경 뒤의 PASS/FAIL 또는 새 Trial은 없다.

**Beginner Explanation:**
대표 작업은 다른 사용 방식을 확인하도록 골라야 한다.

**Advanced Insight:**
변경이 닿는 흔한 표면, 알려진 회귀 위험, 비교 대상이 없을 수 있는 task를 나눠 본다.

**C++ Vision Bridge:**
Contextual only: 대표 작업 선택은 Vision build, benchmark, docs 같은 surface에 적용할 수 있지만 별도 C++ case는 만들지 않는다.

**Demo Operation:**
5분 static matrix. 상단 solid frame은 이전 관찰 Product references만 표시한다. 하단 dashed matrix는 conceptual evaluation set이며 결과를 넣지 않는다.

**Audience Interaction:**
각 EVAL이 어떤 변경 표면을 확인하기 위해 설계됐는지 눈으로 따라간다. 질문 답 제출이나 실행은 없다.

**Transition:**
실패마다 규칙을 하나씩 더하면 평가 범위가 커지기만 할까?

**Time Management:**
Demo 5분은 static matrix 설명에 사용한다. 네 EVAL을 실제로 실행하지 않는다.

**Fallback:**
READY — 이 PPT의 separate evidence frames와 production/preview/act4/S64.png. 실행 캡처는 필요하지 않다.

**Validation Status:**
두 Evidence frame의 혼동, 미실행 outcome, PASS/FAIL badge 부재를 확인한다.


## S65 — Harness도 특정 실패에 맞춰 과적합될 수 있다

**Slide ID:**
S65

**Working Title:**
Harness도 특정 실패에 맞춰 과적합될 수 있다

**ACT / Section:**
ACT 4 / 4D  EVALUATION & REGRESSION

**Allocated Time:**
4 minutes

**Mode Split:**
Lecture 4분

**Primary Message:**
실패마다 전역 규칙을 덧붙이면 Harness가 비대해지거나 충돌하고 특정 Task에만 좁게 맞춰질 수 있다. 원인을 확인하고 대표 작업을 평가하며 불필요한 규칙은 정리한다.

**Opening Question:**
“한 번 실패했다고 규칙을 계속 추가하면 어떻게 될까?”

**Speaker Flow:**
1. (0:00–1:00) 매 실패마다 global rule을 넣는 흐름을 보여준다.
2. (1:00–2:30) bloat, conflict, narrow optimization 위험을 설명한다.
3. (2:30–4:00) 원인·대표 Evaluation·규칙 정리 흐름을 강조한다.

**Evidence / Source:**
DEMO-04A  ·  conceptual regression / maintenance model

**Claim Boundary:**
“Overfit”은 교육용 비유다. ML 통계적 overfitting과 같은 현상이라고 주장하지 않는다.

**Beginner Explanation:**
규칙 수를 늘리기보다 반복 원인을 살핀다.

**Advanced Insight:**
대표 task에서의 효과와 유지 비용을 같이 평가하고 obsolete rule을 제거한다.

**C++ Vision Bridge:**
없음.

**Demo Operation:**
없음. 반복 실패→규칙 누적 도식은 teaching model이며 실제 history가 아니다.

**Audience Interaction:**
누적 규칙이 낳을 수 있는 bloat, conflict, narrow fit을 같이 본다.

**Transition:**
관찰·원인·변경·평가가 연결될 때 이를 어떤 Engineering 관점으로 볼까?

**Time Management:**
Lecture 4분. 통계적 ML overfitting과 동일시하거나 보편 법칙으로 말하지 않는다.

**Fallback:**
READY — 이 PPT의 static teaching diagram과 production/preview/act4/S65.png.

**Validation Status:**
비유 라벨과 conceptual boundary가 보이는지 확인한다.


## S66 — Feedback을 System Change와 Evaluation으로 잇기

**Slide ID:**
S66

**Working Title:**
Feedback을 System Change와 Evaluation으로 잇기

**ACT / Section:**
ACT 4 / 4E  LOOP MENTAL MODEL

**Allocated Time:**
11 minutes

**Mode Split:**
Lecture 9분 + Demo 2분 (VISUAL)

**Primary Message:**
실행 결과와 반복되는 마찰을 관찰하고 원인과 재발 가능성을 판단한 뒤 적절한 System을 바꾸고 결과를 다시 평가할 때 Feedback은 System Improvement로 이어진다.

**Opening Question:**
“Feedback이 언제 Engineering이 되는가?”

**Speaker Flow:**
1. (0:00–2:00) R1 Execution에서 시작해 R2 Observation을 연결한다.
2. (2:00–5:00) R3 Cause는 관찰이 아니라 가설/판단임을 설명한다.
3. (5:00–7:00) R4 System Change의 대상은 원인 layer라고 짚는다.
4. (7:00–9:00) R5 Re-evaluation으로 현재 시스템을 평가한다.
5. (9:00–11:00) 완성 모델을 hold하고 자동 반복이 아님을 정리한다.

**Evidence / Source:**
DEC-0023  ·  course operational model  ·  no product loop

**Claim Boundary:**
이 교육의 operational model이다. 자동 학습, Agent self-learning, 무한 반복, observed Product loop를 뜻하지 않는다.

**Beginner Explanation:**
같은 수정을 되풀이하는 대신 다음 작업에도 영향을 주는 System을 살핀다.

**Advanced Insight:**
자동화와 별개로 cause, recurrence, change layer, evaluation을 설계한다.

**C++ Vision Bridge:**
없음.

**Demo Operation:**
VISUAL 2분. 정적 five-stage diagram을 사용하고 R1–R5를 발표자 highlight로 단계별 공개한다. Animation은 필수가 아니다.

**Audience Interaction:**
“Feedback은 어느 순간 System change가 되는가?”를 생각하게 하고, 응답 제출은 요구하지 않는다.

**Transition:**
표기를 바꾸어 실제 교육 제작 기록에서의 별도 Loop를 살펴본다.

**Time Management:**
Lecture 9분, 마지막 VISUAL Demo 2분. R1–R5는 approximate reveal cue이며 전체가 항상 표시되는 정적 도식으로 진행 가능.

**Fallback:**
READY — 이 PPT의 editable five-stage model과 production/preview/act4/S66.png. 정적 강조로 대체 가능.

**Validation Status:**
Teaching model frame과 Meta evidence의 분리, 5단계 가독성을 검토한다.


## S67 — 실제 제작 기록: TRIAL-006

**Slide ID:**
S67

**Working Title:**
실제 제작 기록: TRIAL-006

**ACT / Section:**
ACT 4 / 4F  OBSERVED META LOOP / DEMO-04B

**Allocated Time:**
2 minutes

**Mode Split:**
Demo 2분 (CAPTURED)

**Primary Message:**
TRIAL-006은 Codex CLI에서 수행한 실제 성능 조사다. Global Skills와 시작 경고가 함께 관찰되어 Prompt-only attribution은 PARTIAL이다.

**Opening Question:**
“이번에는 실제 제작 과정에서 무슨 일이 있었나?”

**Speaker Flow:**
1. (0:00–0:30) dashed Conceptual frame를 닫고 double-line OBSERVED META frame으로 전환한다.
2. (0:30–1:15) TRIAL-006과 global influences를 보여준다.
3. (1:15–2:00) attribution이 PARTIAL임을 두드러지게 하고 상세는 다음 장에 남긴다.

**Evidence / Source:**
TRIAL-006  ·  DEC-0016  ·  TRIAL-007/008

**Claim Boundary:**
OBSERVED_META: 교육자료 제작·Trial 평가 기록이다. Demo Product change나 DEMO-04A 원인/수정 사례가 아니다. Codex CLI evidence를 현재 Desktop으로 일반화하지 않는다.

**Beginner Explanation:**
결과가 있다는 사실과 그 원인을 안다는 것은 다르다.

**Advanced Insight:**
ambient global environment가 있는 실행에서 attribution boundary를 기록한다.

**C++ Vision Bridge:**
없음.

**Demo Operation:**
CAPTURED static summary from trial/decision records; product screenshot이나 live run이 아니다. Double-line frame에서 `TRIAL-006 → global influence → PARTIAL → DEC-0016 → TRIAL-007/008`을 읽는다.

**Audience Interaction:**
이 시점에 Evidence grammar가 바뀌었음을 보고 Conceptual case와 구별한다.

**Transition:**
이 결과를 Task Prompt만의 효과라고 말할 수 있을까?

**Time Management:**
CAPTURED 2분. 실제 기록의 정적 요약을 사용하고 새 제품 실행은 하지 않는다.

**Fallback:**
READY — 이 PPT의 static timeline and label. Trial/Decision 근거는 plan/DEMO_MATRIX.md와 plan/DECISIONS.md에 한정.

**Validation Status:**
Observed Meta double frame, Timeline label, Conceptual Case와 다른 diagram structure를 확인한다.


## S68 — 결과의 타당성과 원인 귀속은 별개다

**Slide ID:**
S68

**Working Title:**
결과의 타당성과 원인 귀속은 별개다

**ACT / Section:**
ACT 4 / 4F  OBSERVED META LOOP / DEMO-04B

**Allocated Time:**
4 minutes

**Mode Split:**
Demo 4분 (CAPTURED)

**Primary Message:**
resize_nearest 측정은 기록된 코드·입력·runtime·host 범위에서 유효하지만, global Harness 영향 때문에 전체 workflow를 Prompt 하나의 효과로 분리할 수 없다.

**Opening Question:**
“측정 결과가 유효해도 원인을 Prompt 하나로 좁힐 수 있을까?”

**Speaker Flow:**
1. (0:00–1:00) Result validity와 Causal attribution을 다른 질문으로 둔다.
2. (1:00–2:00) 작은 supporting metric과 bounded input/runtime/host를 확인한다.
3. (2:00–3:15) Global Skill influence와 PARTIAL attribution을 설명한다.
4. (3:15–4:00) Hook/MCP 경고를 effect/result로 과장하지 않고 끝낸다.

**Evidence / Source:**
TRIAL-006  ·  7 one-call samples  ·  disposable worktree

**Claim Boundary:**
144.2 → 33.5 ms/call median은 기록된 synthetic 640×480 grayscale input (max 4095) → 960×720, CPython 3.9.6, macOS 26.6.2 arm64에 한정한다. Prompt-only attribution은 PARTIAL. 4.30×/76.8% hero metric은 사용하지 않는다.

**Beginner Explanation:**
숫자가 있어도 무엇이 결과를 만들었는지 자동으로 알 수는 없다.

**Advanced Insight:**
Result validity와 causal attribution의 확신 수준을 따로 보고한다.

**C++ Vision Bridge:**
필요하면 같은 원리를 C++ benchmark의 입력, compiler, host, toolchain 범위로 transfer하되 새 사례로 확장하지 않는다.

**Demo Operation:**
CAPTURED trial summary. Input/output SHA-256 guards matched; seven one-call samples. `performance-goal` global Skill influenced evaluator/ledger/threshold, but is not proven the direct cause of the metric. Hook warnings do not prove hook effect; MCP startup error does not evidence task result.

**Audience Interaction:**
왼쪽은 확인된 result validity, 오른쪽은 남은 attribution uncertainty를 비교한다.

**Transition:**
이 한계가 후속 Trial의 평가 방식에 어떤 변경을 만들었을까?

**Time Management:**
CAPTURED Demo 4분. 성능 숫자를 성과 발표처럼 연출하거나 일반화하지 않는다.

**Fallback:**
READY — 이 PPT의 static evidence card. 수치와 조건은 TRIAL-006 기록을 요약한 것이며 screenshot이 아니다.

**Validation Status:**
Metric의 시각적 dominance, scope, PARTIAL attribution, hook/MCP boundary를 검토한다.


## S69 — 평가와 보고 규칙을 Evidence에 맞추다

**Slide ID:**
S69

**Working Title:**
평가와 보고 규칙을 Evidence에 맞추다

**ACT / Section:**
ACT 4 / 4F  OBSERVED META LOOP / DEMO-04B

**Allocated Time:**
3 minutes

**Mode Split:**
Lecture 1분 + Demo 2분 (CAPTURED)

**Primary Message:**
DEC-0016은 TRIAL-006을 PARTIAL로 보존하고 clean isolation을 진행 조건으로 요구하지 않으며, 후속 CLI Trial에서 관찰된 global influence를 기록하도록 했다.

**Opening Question:**
“Prompt 효과를 분리할 수 없다면 다음 Trial은 어떻게 기록해야 할까?”

**Speaker Flow:**
1. (0:00–1:00) TRIAL-006 evidence에서 PARTIAL 판단으로 간다.
2. (1:00–2:15) DEC-0016이 후속 record에서 관찰된 global influence를 적도록 바꾼 점을 보여준다.
3. (2:15–3:00) code/Skill change가 아니며 clean isolation 조건도 아니라고 닫는다.

**Evidence / Source:**
TRIAL-006  →  DEC-0016  ·  evaluation / reporting policy

**Claim Boundary:**
실제 Training Production evaluation/reporting governance 변화다. Product code 또는 Demo Skill을 수정하지 않았고 clean isolation을 구축했다고 말하지 않는다.

**Beginner Explanation:**
환경 조건과 수행 도구가 다르면 결과 설명도 그 경계를 밝혀야 한다.

**Advanced Insight:**
미통제 조건을 숨기지 않고 Trial 결과의 사용 범위를 제한한다.

**C++ Vision Bridge:**
없음.

**Demo Operation:**
CAPTURED decision summary. Before/after policy만 보여주고 product repository diff를 가장하지 않는다.

**Audience Interaction:**
무엇이 바뀌었는지와 무엇이 바뀌지 않았는지 비교한다.

**Transition:**
이 기준은 TRIAL-007/008에 어떻게 적용됐을까?

**Time Management:**
Lecture 1분 + CAPTURED 2분. Trial/reporting boundary에만 머문다.

**Fallback:**
READY — 이 PPT의 static timeline and policy summary, source DEC-0016.

**Validation Status:**
Meta frame이 유지되고 change 대상이 evaluation/reporting policy로 보이는지 확인한다.


## S70 — 후속 기록은 개선됐지만 완전하지 않았다

**Slide ID:**
S70

**Working Title:**
후속 기록은 개선됐지만 완전하지 않았다

**ACT / Section:**
ACT 4 / 4F  OBSERVED META LOOP / DEMO-04B

**Allocated Time:**
3 minutes

**Mode Split:**
Lecture 1분 + Case 2분

**Primary Message:**
TRIAL-007은 global influence를 기록했지만 MCP report와 stderr가 불일치한다. TRIAL-008은 repository Skill 호출과 global influence를 별도로 기록했다. 품질 향상은 측정되지 않았다.

**Opening Question:**
“새로운 기록 규칙이 모든 불확실성을 해결했을까?”

**Speaker Flow:**
1. (0:00–1:00) TRIAL-007의 기록과 불일치를 보여준다.
2. (1:00–2:00) TRIAL-008의 명시적 Skill discovery/invocation 기록을 구분한다.
3. (2:00–3:00) 결과 품질 향상은 측정되지 않았다고 밝힌다.

**Evidence / Source:**
TRIAL-007 / TRIAL-008  ·  DEC-0016

**Claim Boundary:**
적용은 부분적이다. 완전한 environment inventory, 완벽한 report, 측정된 Trial-quality improvement를 주장하지 않는다. TRIAL-007의 stderr에는 Nimble AuthRequired가 있으나 MCP task result는 없다.

**Beginner Explanation:**
개선된 기록도 빠진 점과 불일치가 있는지 다시 본다.

**Advanced Insight:**
보고, stderr, global influence inventory를 서로 대조하고 claim boundary를 유지한다.

**C++ Vision Bridge:**
없음.

**Demo Operation:**
Trial records를 두 static cards로 비교한다. TRIAL-007의 report/stderr discrepancy는 보이게 유지한다. TRIAL-008을 current Desktop behavior로 제시하지 않는다.

**Audience Interaction:**
후속 기록이 무엇을 명확히 했고 무엇을 남겼는지 비교한다.

**Transition:**
S71에서 실제로 바뀐 System과 미확정 사항을 한 번에 회수한다.

**Time Management:**
Lecture 1분 + Case 2분. 불일치와 unknown을 숨기지 않는다.

**Fallback:**
READY — 이 PPT의 two-card static summary. Trial records are summarized, not presented as terminal screenshots.

**Validation Status:**
TRIAL-007 discrepancy, no MCP task result, TRIAL-008 CLI scope, no measured improvement를 검토한다.


## S71 — 실제 Meta Loop에서 바뀐 것

**Slide ID:**
S71

**Working Title:**
실제 Meta Loop에서 바뀐 것

**ACT / Section:**
ACT 4 / 4F  OBSERVED META LOOP

**Allocated Time:**
3 minutes

**Mode Split:**
Lecture 1분 + Case 2분

**Primary Message:**
TRIAL-006의 ambient influence 및 PARTIAL attribution은 DEC-0016의 Trial evaluation/reporting 변경으로 이어졌고 TRIAL-007/008에서 기록 경계가 부분적으로 적용됐다. Product code가 바뀐 것은 아니다.

**Opening Question:**
“무엇이 바뀌었고, 무엇은 아직 모르는가?”

**Speaker Flow:**
1. (0:00–1:00) timeline을 다섯 단계로 회수한다.
2. (1:00–2:00) Training Production evaluation/reporting이 바뀐 점을 말한다.
3. (2:00–3:00) attribution, environment inventory, quality effects가 미확정임을 남기고 C++ transfer로 넘긴다.

**Evidence / Source:**
TRIAL-006  →  DEC-0016  →  TRIAL-007/008

**Claim Boundary:**
후속 report에는 불일치가 남고 quality effect는 미측정이다. DEMO-04A conceptual stale workflow와 합치지 않는다.

**Beginner Explanation:**
실제로 바뀐 것과 아직 모르는 점을 구분한다.

**Advanced Insight:**
Loop의 system change는 평가·보고 거버넌스일 수 있으나 outcome은 재평가해야 한다.

**C++ Vision Bridge:**
없음.

**Demo Operation:**
추가 실행 없음. Timeline recap을 사용하고 S67–70의 세부를 재강의하지 않는다.

**Audience Interaction:**
Changed/Unknown 두 칸을 비교하며 Meta case를 정리한다.

**Transition:**
이 원리를 C++ Vision Project에 옮기면 무엇을 확인할까?

**Time Management:**
Lecture 1분 + Case 2분. preceding slides를 다시 풀어 설명하지 않는다.

**Fallback:**
READY — 이 PPT의 static Observed Meta timeline과 production/preview/act4/S71.png.

**Validation Status:**
Double-line Observed Meta frame, concise recap, open uncertainties가 유지되는지 확인한다.


## S72 — Project와 환경이 바뀌면 검증도 다시 본다

**Slide ID:**
S72

**Working Title:**
Project와 환경이 바뀌면 검증도 다시 본다

**ACT / Section:**
ACT 4 / 4G  C++ VISION TRANSFER  /  4H DISCUSSION & TRANSITION

**Allocated Time:**
20 minutes

**Mode Split:**
Case 7분 + Reflection 2분 + Q&A 7분 + Transition 4분

**Primary Message:**
Project나 환경이 바뀌면 기존 performance 가정과 verification 절차가 여전히 맞는지 다시 확인한다. 반복되는 마찰은 관찰하고 원인을 찾아 관련 layer를 바꾼 뒤 benchmark와 regression으로 확인한다.

**Opening Question:**
“같은 문제가 두 번째로 생기면 다시 Prompt를 고칠까, System을 살펴볼까?”

**Speaker Flow:**
1. (0:00–7:00) Case: toolchain/GPU/build·benchmark 조건 변화 시 verification 가정을 다시 확인하는 패턴을 설명한다.
2. (7:00–9:00) Reflection: 같은 마찰이 반복될 때 다시 확인할 system layer를 개인적으로 생각한다.
3. (9:00–16:00) Q&A: 질문을 받고, 질문이 없으면 fallback question을 쓴다.
4. (16:00–20:00) Transition: cutoff cue 후 ACT 5의 전체 problem-driven story recap을 예고한다.

**Evidence / Source:**
BEAT-059 / TRANS-012  ·  teaching transfer, not observed C++ incident

**Claim Boundary:**
COURSE MODEL / C++ VISION TRANSFER. Toolchain, CUDA/GPU architecture, build/benchmark configuration은 hypothetical teaching context이며 실제 Demo history가 아니다. 구체적인 Windows/shell/IDE/hardware setup을 주장하지 않는다.

**Beginner Explanation:**
같은 문제가 반복되면 Prompt 외에도 Project와 workflow를 살핀다.

**Advanced Insight:**
Project/environment 변화가 verification assumptions에 미치는 영향을 평가한다.

**C++ Vision Bridge:**
Primary bridge. 변화한 조건에서 기존 tuning 가정과 benchmark/regression 조건을 다시 확인하는 engineering pattern만 전한다.

**Demo Operation:**
정적 slide와 speaker-led highlighting. 별도 product/demo 실행 및 animation 의존 없음.

**Audience Interaction:**
0–7분 Case, 7–9분 개인 Reflection, 9–16분 Q&A, 16–20분 ACT5 Transition. 질문이 없으면 “이 사례에서 다시 확인할 가정 하나는 무엇인가?”를 fallback prompt로 사용한다.

**Transition:**
“이제 기능이 아니라, 처음의 문제에서 Loop까지 이어진 Story를 다시 연결해 보겠습니다.” ACT 5 S73으로 넘긴다.

**Time Management:**
S72 총 20분. 0–7 Case, 7–9 Reflection, 9–16 Q&A, 16–20 Transition. 16분에 Q&A를 마감하고 transition으로 이동한다. 실제 20분 rehearsal은 미수행.

**Fallback:**
READY — 정적 C++ Vision transfer visual과 in-deck timeline. live project 예시나 실행은 요구하지 않는다.

**Validation Status:**
20분 운영 cue는 문서화했으나 실제 rehearsal, Windows PowerPoint, target PC fonts, room readability는 UNVERIFIED.
