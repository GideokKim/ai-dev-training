# ACT 4 — Speaker Notes

Status: REVIEWED — accepted presentation revision. Source, screen cues, and operation guidance are aligned. Exact-file render and embedded-Notes results are recorded in the integrated revision evaluation. Windows, room, account, and timed rehearsal remain UNVERIFIED.

Authority: `plan/SLIDE_MAP.md`, `plan/SLIDE_TEMPLATE_MAP.md`, `plan/VISUAL_SPEC.md`, `plan/VISUAL_TEMPLATE_FREEZE.md`, `plan/SPEAKER_NOTES_ARCHITECTURE.md`, `plan/SPEAKER_NOTES_FREEZE.md`, `plan/PRODUCTION_PLAN.md`, `plan/CLAIM_FREEZE.md`, `plan/DEMO_MATRIX.md`, `plan/DEMO_RUNBOOK_SPEC.md`, and `plan/DECISIONS.md`.

All 18 slides use the approved 19-field schema. The revision builder reads these records for embedded PowerPoint Notes; parity must be checked on the final export.

Continuity revision: DEC-0032 (2026-10-20). Current handoff review: production/evaluation/FULL_DECK_CONTINUITY_REVISION.md. Prior validation history remains below.

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
1. (0:00–1:30 / Lecture) ACT 3의 STATE-04-PERF가 기록된 범위에서 성공한 endpoint임을 회수한다.
2. (1:30–3:00 / Lecture) 화면의 동작 계약, 전체 테스트 11/11, Benchmark guard 세 근거를 차례로 가리킨다. 새 실행이나 인과 비교는 하지 않는다.
3. (3:00–4:00 / Reflection) “프로젝트가 바뀐 뒤에도 맞을까?”를 개인적으로 생각하게 하고 다음 가상 사례로 넘어간다.

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
“이 실제 성공은 기준점으로 남기고, 별개의 가상 사례에서 Project와 Workflow가 어떻게 어긋날 수 있는지 보겠습니다.” S56으로 이동한다.

**Time Management:**
Lecture 3분 + Reflection 1분. 기존 ACT 3 설명을 다시 길게 열지 않는다.

**Fallback:**
LOCAL STATIC ARTIFACT — production/ACT_4.pptx의 S55와 production/preview/act4/S55.png를 사용한다. 원본 실행 캡처 또는 새로운 Trial 결과로 표현하지 않는다. 로컬 렌더링 검토 결과는 통합 평가 문서에 기록한다.

**Validation Status:**
REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

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
가상 사례의 시작에서는 프로젝트의 검증 기준과 재사용 Workflow의 지시가 모두 단위 테스트를 대상으로 한다.

**Opening Question:**
“지금 맞는 Project Workflow는 계속 맞을까?”

**Speaker Flow:**
1. (0:00–0:30 / VISUAL Demo) S55의 실제 성공을 기준점으로 남기고, 여기서부터 실제 graypipe 이력과 별개인 가상 사례를 시작한다고 말한다.
2. (0:30–1:30 / VISUAL Demo) 왼쪽 프로젝트 기준과 오른쪽 재사용 지침이 모두 단위 테스트를 가리키는 모습을 비교한다.
3. (1:30–2:00 / VISUAL Demo) 당시 기준에는 일치하는 절차였다는 출발점을 남긴다. 다음 장의 변경을 미리 설명하지 않는다.

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
CONCEPTUAL 정적 도식. 두 단위 테스트 범위와 가운데 등호를 가리킨다. 실행 캡처·명령·결과 badge는 없다.

**Audience Interaction:**
두 지시의 범위가 같은지 눈으로 비교한다. 답변이나 실행은 요구하지 않는다.

**Transition:**
Project가 바뀌었는데 재사용 Workflow가 그대로라면 어떻게 될까?

**Time Management:**
VISUAL Demo 2분. 첫 장면은 정상 상태로 두고 Project 변경을 앞당겨 보여주지 않는다.

**Fallback:**
LOCAL STATIC ARTIFACT — production/ACT_4.pptx의 S56와 production/preview/act4/S56.png를 사용한다. 원본 실행 캡처 또는 새로운 Trial 결과로 표현하지 않는다. 로컬 렌더링 검토 결과는 통합 평가 문서에 기록한다.

**Validation Status:**
REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

## S57 — Project는 바뀌고 Workflow는 남았다

Slide ID: S57

Working Title: Project는 바뀌고 Workflow는 남았다

ACT / Section: ACT 4 / 4B  CONCEPTUAL STALE HARNESS / DEMO-04A

Allocated Time: 4 minutes

Mode Split: Demo 2분 (VISUAL) + Case 2분

Primary Message: 모듈 연결 동작까지 검증해야 하는 가상 프로젝트에서 공식 기준은 단위+통합 테스트로 넓어졌지만 재사용 Workflow에는 단위 테스트 지시가 남아 있다. 이는 지시 범위의 차이다.

Opening Question: “다음 Task에서 old workflow를 따르면 누가 틀린 걸까?”

Speaker Flow:

1. (0:00–1:00 / Demo) 실제 Trial과 별개인 가상 사례임을 밝힌다. 모듈 연결 동작까지 검증할 필요가 생겨 공식 범위에 통합 테스트를 추가한 사례다.
2. (1:00–2:00 / Demo) 왼쪽 A/B 각각의 박스와 둘 사이 연결까지 감싼 통합 범위를 가리킨다. 오른쪽에는 같은 모듈과 연결이 있지만 재사용 지시는 단위 테스트만 요구한다. 두 그림은 실행 결과가 아니라 지시 범위의 차이다.
3. (2:00–3:00 / Case) Project의 요구 변화와 재사용 지침의 미갱신을 구분한다.
4. (3:00–4:00 / Case) Agent가 실제로 무엇을 실행했는지 아직 보여주지 않았음을 짧게 알리고, 다음 요청을 보정해도 재사용 지침이 남는 질문으로 넘긴다.

Evidence / Source: DEMO-04A / DEC-0021 / BEAT-038–039 / CONCEPTUAL. 단위+통합 테스트 가상 설정은 발표용 Pilot에 대한 최신 사용자 승인으로 확정됐다. 실제 Repository 이력이나 Trial 근거가 추가된 것은 아니다. 편집 가능한 native 범위 도식: production/source/presentation-revision/test-scope-visual.mjs. 모듈 A/B는 사례를 설명하는 일반 표기이며 실제 graypipe 모듈을 식별하지 않는다.

Claim Boundary: 승인된 가상 설정이다. 실제 Repository migration, 기존 graypipe Skill, Agent 실행, 테스트 누락 또는 PASS/FAIL 결과를 뜻하지 않는다. 지시의 범위를 비교하며 실제 실행 결과는 보여주지 않는다.

Beginner Explanation: Agent가 따르는 지침이 Project의 현재 절차와 맞는지 살핀다.

Advanced Insight: Project source의 변화와 stale artifact의 위치를 분리해 본다.

C++ Vision Bridge: 없음.

Demo Operation: production/ACT_4.pptx의 S57와 production/preview/act4/S57.png 개념 도식을 사용한다. 구체적 명령·Runner 구현·테스트 수·실행 캡처를 추가하지 않는다. 각 모듈의 범위→왼쪽의 연결을 포함한 통합 범위→오른쪽에 남은 단위 테스트 지시를 차례로 가리킨다. 모듈의 실제 테스트가 실행됐거나 통합 테스트를 누락했다고 말하지 않는다.

Audience Interaction: 무엇이 바뀌었고 무엇이 남았는지 잠시 비교한다. Agent 탓이나 특정 실패를 가정하지 않는다.

Transition: “이번 요청에 통합 테스트도 확인해 달라고 쓰면, 다음 작업이 읽을 Workflow까지 바뀔까요?” S58로 이동한다.

Time Management: Demo 2분은 도식 공개에, Case 2분은 stale 간극을 해석하는 데 쓴다.

Fallback: LOCAL STATIC ARTIFACT — production/ACT_4.pptx의 S57와 production/preview/act4/S57.png를 사용한다. 원본 실행 캡처 또는 새로운 Trial 결과로 표현하지 않는다. 로컬 렌더링 검토 결과는 통합 평가 문서에 기록한다.

Validation Status: REVIEWED — 승인된 전체 이미지 후보의 반영과 로컬 렌더링 결과는 production/evaluation/FULL_DECK_IMAGE_EXPANSION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

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
이번 요청을 단위+통합 검증으로 보정할 수 있어도 재사용 Workflow의 단위 테스트 지시는 그대로 남을 수 있다. 현재 Task의 요청 범위와 재사용 절차의 변경을 구분한다.

**Opening Question:**
“Prompt를 더 자세히 쓰면 이번 Task는 해결될까?”

**Speaker Flow:**
1. (0:00–1:00 / Case) 이번 Prompt에 “통합 테스트도 확인해 줘”를 더하는 가능성을 소개한다.
2. (1:00–2:00 / Case) 왼쪽 이번 Task 요청은 넓힐 수 있지만 오른쪽 재사용 지침은 단위 테스트에 머무는 차이를 가리킨다.
3. (2:00–3:00 / Case) 요청 보정이 실제 성공을 입증하지 않으며 다음 Task의 절차까지 갱신하는 조치와 다르다고 정리한다.

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
승인된 가상 설정에서 가능한 Task 보정과 재사용 지침을 비교한다. 실행 결과·누락·복구 성공을 표시하지 않는다.

**Audience Interaction:**
“이번 Task가 풀려도 다음 Task의 지침은 달라졌나?”를 생각하게 한다.

**Transition:**
그럼 Prompt, global rule, stale Workflow 중 어느 Layer를 살펴볼까?

**Time Management:**
Case 3분. 가능한 대응과 지시 범위에 머물고 실제 command 실패나 성공 결과를 만들지 않는다.

**Fallback:**
LOCAL STATIC ARTIFACT — production/ACT_4.pptx의 S58와 production/preview/act4/S58.png를 사용한다. 원본 실행 캡처 또는 새로운 Trial 결과로 표현하지 않는다. 로컬 렌더링 검토 결과는 통합 평가 문서에 기록한다.

**Validation Status:**
REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

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
1. (0:00–0:30 / CAPTURED Demo) Prompt, 전역 규칙, 원인 Workflow의 세 행을 읽는다.
2. (0:30–1:15 / CAPTURED Demo) 각각 이번 요청만 바꾸는지, 넓은 곳에 새 규칙을 더하는지, 재사용 절차를 바꾸는지 비교한다.
3. (1:15–2:00 / CAPTURED Demo) Workflow가 원인으로 확인된 경우에만 마지막 선택이 맞다고 한정한다.

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
실제 실행 캡처가 아닌 가상 선택지의 정적 재구성이다. 세 행의 변경 범위를 비교하고 실제 Product 수정 diff처럼 말하지 않는다.

**Audience Interaction:**
A/B/C의 효과 범위를 소리 없이 비교하게 한다. 원인이 정해졌다고 일반화하지 않는다.

**Transition:**
“앞에서는 원인이 확인됐을 때의 대응을 봤습니다. 이제 그 원인을 어떻게 확인할지 보겠습니다.” S60으로 이동한다.

**Time Management:**
CAPTURED 2분. Visual matrix만 설명하고 새 Product 근거를 추가하지 않는다.

**Fallback:**
LOCAL STATIC ARTIFACT — production/ACT_4.pptx의 S59와 production/preview/act4/S59.png를 사용한다. 원본 실행 캡처 또는 새로운 Trial 결과로 표현하지 않는다. 로컬 렌더링 검토 결과는 통합 평가 문서에 기록한다.

**Validation Status:**
REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

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
1. (0:00–0:45 / Lecture) S59의 선택은 원인 확인을 전제로 했음을 짚고, 이제 그 전제를 확인하는 방법을 본다고 안내한다. “요청한 검증이 충분한가?”라는 증상만으로 원인을 정할 수 없다고 설명한다.
2. (0:45–1:00 / Lecture) 현재 기준, 작업 절차, 실행 조건, 코드 동작을 다른 조사 대상으로 분리한다.
3. (1:00–2:00 / CAPTURED Demo) 오른쪽의 Context, Workflow, 환경·권한, 제품 코드 질문을 차례로 가리킨다. 어느 하나를 원인으로 확정하지 않는다.

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
가상 원인 후보의 정적 도식이다. 왼쪽 질문에서 오른쪽 점선 후보 목록으로 시선을 옮긴다. 단일 인과 화살표나 실행 결과가 없다.

**Audience Interaction:**
증상이 보여도 원인이 아직 미확정일 수 있음을 함께 확인한다.

**Transition:**
S61에서 이 사례의 가정과 확인할 가설을 분리한다.

**Time Management:**
Lecture 1분은 관점을 설명하고 CAPTURED visual 1분은 후보 layer만 보여준다.

**Fallback:**
LOCAL STATIC ARTIFACT — production/ACT_4.pptx의 S60와 production/preview/act4/S60.png를 사용한다. 원본 실행 캡처 또는 새로운 Trial 결과로 표현하지 않는다. 로컬 렌더링 검토 결과는 통합 평가 문서에 기록한다.

**Validation Status:**
REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

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
1. (0:00–0:45 / Case) 왼쪽의 현재 기준 단위+통합, 재사용 지침 단위만은 가상 설정에 주어진 정보라고 밝힌다.
2. (0:45–1:30 / Case) 오른쪽의 “오래된 Workflow가 원인일 수 있다”는 원인 가설로 구분한다.
3. (1:30–2:00 / Case) 실제 문제라면 실행 경로와 실제 읽은 지침을 대조해야 한다고 정리한다. 이 사례의 실제 실행 기록은 만들지 않는다.

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
왼쪽 가상 설정과 오른쪽 확인할 가설을 비교한다. OBSERVED 제품 기록이나 실제 실행 경로처럼 표현하지 않는다.

**Audience Interaction:**
두 칸을 읽고 어떤 문장이 가정이며 어떤 문장이 추론인지 구분해 본다. 답변 제출은 요구하지 않는다.

**Transition:**
Workflow 원인이 확인됐다면 어느 범위까지 바꿔야 할까?

**Time Management:**
Case 2분. 가상 전제와 실제 Evidence를 구별한다.

**Fallback:**
LOCAL STATIC ARTIFACT — production/ACT_4.pptx의 S61와 production/preview/act4/S61.png를 사용한다. 원본 실행 캡처 또는 새로운 Trial 결과로 표현하지 않는다. 로컬 렌더링 검토 결과는 통합 평가 문서에 기록한다.

**Validation Status:**
REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

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
1. (0:00–1:00 / Lecture) “Workflow가 원인으로 확인됐다면”이라는 조건을 먼저 읽고, 원인과 변경 범위를 맞추는 원칙을 설명한다.
2. (1:00–2:00 / Case) 가상 Workflow의 검증 대상 지시를 단위에서 단위+통합으로 갱신하는 설계를 가리킨다. 불필요한 전역 규칙이나 다른 파일을 함께 바꿀 이유는 제시하지 않는다.

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
화면의 두 지침은 가상 Before/After 설계다. 실제 변경 diff나 실행 결과가 아니다. 원인 확인 조건을 계속 유지한다.

**Audience Interaction:**
조건이 바뀌면 수정 대상도 바뀔 수 있음을 잠시 생각하게 한다.

**Transition:**
변경 뒤 같은 Task를 다시 통과하면 Harness는 충분히 검증된 걸까?

**Time Management:**
Lecture 1분은 원칙, Case 1분은 가상 workflow 변화에 쓴다.

**Fallback:**
LOCAL STATIC ARTIFACT — production/ACT_4.pptx의 S62와 production/preview/act4/S62.png를 사용한다. 원본 실행 캡처 또는 새로운 Trial 결과로 표현하지 않는다. 로컬 렌더링 검토 결과는 통합 평가 문서에 기록한다.

**Validation Status:**
REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

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
1. (0:00–1:00 / Lecture) 왼쪽은 이번 작업의 요청 범위를 다시 다루는지 묻는 검증이라고 설명한다.
2. (1:00–2:30 / Case) 오른쪽은 바뀐 지침이 다른 유효한 작업을 방해하는지 묻는 질문임을 비교한다.
3. (2:30–4:00 / Case) 두 질문의 범위가 다르므로 대표 작업을 고르는 평가 설계가 필요하다고 연결한다. 어느 결과도 통과했다고 말하지 않는다.

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
이번 작업과 다른 작업의 검증 질문 두 영역을 비교한다. 실제 재실행이나 회귀 성공 결과는 없다.

**Audience Interaction:**
두 확인 질문의 범위가 다른 점을 비교한다.

**Transition:**
변경이 닿는 다른 작업 표면은 어떤 대표 Task로 볼까?

**Time Management:**
Lecture 1분 + Case 3분. 구체적인 pass/fail을 만들지 않는다.

**Fallback:**
LOCAL STATIC ARTIFACT — production/ACT_4.pptx의 S63와 production/preview/act4/S63.png를 사용한다. 원본 실행 캡처 또는 새로운 Trial 결과로 표현하지 않는다. 로컬 렌더링 검토 결과는 통합 평가 문서에 기록한다.

**Validation Status:**
REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

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
평가 작업의 수보다 서로 다른 사용 표면과 회귀 위험을 대표하는지가 중요하다. EVAL-01/02의 별도 과거 관찰 참고와 EVAL-03/04의 설계 사례를 구분하며, 이 Workflow 변경 뒤의 실행 결과는 없다.

**Opening Question:**
“무엇을 대표 Task로 고를까?”

**Speaker Flow:**
1. (0:00–1:00 / VISUAL Demo) “작업 수보다 서로 다른 위험을 덮는가?”라는 기준을 연다.
2. (1:00–2:00 / VISUAL Demo) 버그 수정은 동작 계약, 성능 변경은 측정과 검증 범위를 확인하기 위한 선택임을 짚는다. 우측 실선의 TRIAL-002와 STATE-04-PERF는 별도 과거 관찰 참고다.
3. (2:00–4:00 / VISUAL Demo) 문서만 수정하는 작업에는 불필요한 절차가 강요되지 않는지, 작은 리팩터링에는 유효한 다른 작업이 방해받지 않는지 묻는다. 두 행은 점선의 설계 사례이며 결과가 없다.
4. (4:00–5:00 / VISUAL Demo) 네 작업 모두 이번 가상 Workflow 변경 후 수행된 평가가 아님을 말하고 대표성을 기준으로 회수한다.

화면 진행: 각 행의 상태를 먼저 읽는다. EVAL-01/02의 과거 관찰 참고는 새 Workflow 평가 결과가 아니며 EVAL-03/04는 설계 사례다. 네 행 모두 변경 후 평가 PASS/FAIL이나 완료 결과를 표시하지 않는다.

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
중앙은 네 평가 작업의 선정 이유, 우측은 분리된 참고 근거/설계 상태다. EVAL-01/02의 과거 관찰 참고와 EVAL-03/04의 설계를 선과 색으로 구분한다. 새 실행·PASS/FAIL 결과는 표시하지 않는다.

**Audience Interaction:**
작업 이름보다 가운데 확인 질문을 읽도록 유도한다. 평가 작업을 많이 모으는 대신 어떤 위험을 보려는지 생각하게 한다.

**Transition:**
실패마다 규칙을 하나씩 더하면 평가 범위가 커지기만 할까?

**Time Management:**
Demo 5분은 static matrix 설명에 사용한다. 네 EVAL을 실제로 실행하지 않는다.

**Fallback:**
LOCAL STATIC ARTIFACT — production/ACT_4.pptx의 S64와 production/preview/act4/S64.png를 사용한다. 원본 실행 캡처 또는 새로운 Trial 결과로 표현하지 않는다. 로컬 렌더링 검토 결과는 통합 평가 문서에 기록한다.

**Validation Status:**
REVIEWED — DEC-0030에서 승인한 화면 강조와 운영 Cue를 정렬했다. 최종 PPT/Notes/PNG 대조와 렌더 검토 결과는 production/evaluation/FULL_DECK_PRESENTATION_POLISH.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 제품·계정, 실제 시간 리허설은 UNVERIFIED.

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
1. (0:00–1:00 / Lecture) 실패마다 규칙을 더하는 상황을 가정한다.
2. (1:00–2:30 / Lecture) 규칙 누적, 충돌, 특정 작업에만 맞춤 세 비용을 짚는다. 통계적 ML 과적합과 동일한 현상이라고 말하지 않는다.
3. (2:30–4:00 / Lecture) 원인 확인, 대표 작업 평가, 불필요한 규칙 정리라는 하단 판단 기준으로 돌아온다.

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
“지금까지 따로 본 관찰·원인 판단·변경·평가를, 다음 작업까지 이어지는 하나의 운영 순서로 묶겠습니다.” S66으로 이동한다.

**Time Management:**
Lecture 4분. 통계적 ML overfitting과 동일시하거나 보편 법칙으로 말하지 않는다.

**Fallback:**
LOCAL STATIC ARTIFACT — production/ACT_4.pptx의 S65와 production/preview/act4/S65.png를 사용한다. 원본 실행 캡처 또는 새로운 Trial 결과로 표현하지 않는다. 로컬 렌더링 검토 결과는 통합 평가 문서에 기록한다.

**Validation Status:**
REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

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
“앞에서 나누어 본 판단을 어떤 순서로 이어야 다음 작업도 달라질까?”

**Speaker Flow:**
1. (0:00–2:00 / Lecture) 앞에서 따로 본 판단을 다섯 단계 운영 순서로 통합한다고 안내한다. 실행과 관찰의 질문을 구분하고, 가상 사례의 지시 범위 비교가 실행 결과와 다름을 짚는다.
2. (2:00–5:00 / Lecture) 원인 판단에는 실행 경로·선택한 지침 등 추가 확인이 필요함을 S61의 논리로 회수한다.
3. (5:00–7:00 / Lecture) 시스템 변경은 원인 Layer를 바꾸는 일이며, Prompt 보정과 재사용 Workflow 갱신의 범위가 다름을 회수한다.
4. (7:00–9:00 / Lecture) 같은 작업과 다른 대표 작업의 재평가가 답하는 질문을 비교한다. 새 결과는 제시하지 않는다.
5. (9:00–11:00 / VISUAL Demo) 정적 도식의 실행→관찰→원인 판단→시스템 변경→재평가를 순서대로 가리킨다. 자동 학습을 뜻하지 않는 교육용 운영 모델임을 닫고 실제 Meta 기록으로 전환한다.

화면 진행: 기존 가상 단위/통합 사례를 다섯 단계에 대응한다. 실행 범위 확인→현재 지시와 기준 비교→Workflow 원인 가설 확인→확인된 원인 Layer의 지시 갱신→같은/다른 대표 작업 재평가 순서다. 단계별 질문만 가리키며 실제 실행·변경 성공·새 평가 결과를 채우지 않는다.

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
정적 5단계 도식과 발표자 지목을 사용한다. R1–R5 내부 번호나 운영 시간은 청중 화면에 표시하지 않는다. 자동 애니메이션·실행·모델 학습 주장은 없다.

**Audience Interaction:**
“Feedback은 어느 순간 System change가 되는가?”를 생각하게 하고, 응답 제출은 요구하지 않는다.

**Transition:**
“이번에는 실제 교육 제작 기록에서 Trial의 평가·보고 기준을 살펴보겠습니다. 어떤 관찰이 그 기준을 돌아보게 했는지부터 보겠습니다.” S67로 이동한다.

**Time Management:**
Lecture 9분, 마지막 VISUAL Demo 2분. R1–R5는 approximate reveal cue이며 전체가 항상 표시되는 정적 도식으로 진행 가능.

**Fallback:**
LOCAL STATIC ARTIFACT — production/ACT_4.pptx의 S66와 production/preview/act4/S66.png를 사용한다. 원본 실행 캡처 또는 새로운 Trial 결과로 표현하지 않는다. 로컬 렌더링 검토 결과는 통합 평가 문서에 기록한다.

**Validation Status:**
REVIEWED — DEC-0030에서 승인한 화면 강조와 운영 Cue를 정렬했다. 최종 PPT/Notes/PNG 대조와 렌더 검토 결과는 production/evaluation/FULL_DECK_PRESENTATION_POLISH.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 제품·계정, 실제 시간 리허설은 UNVERIFIED.

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
“실제 제작 과정에서 Trial의 평가·보고 기준을 돌아보게 한 관찰은 무엇이었나?”

**Speaker Flow:**
1. (0:00–0:30 / CAPTURED Demo) OBSERVED META 표식과 이중선을 가리키며 앞의 가상 사례를 닫고 실제 교육 제작 기록으로 전환한다. 이번에 살펴볼 System은 Trial의 평가·보고 기준이라고 안내하고, 그 기준을 돌아보게 한 TRIAL-006의 관찰부터 연다.
2. (0:30–1:15 / CAPTURED Demo) 성능 작업 요청, Global Skill이 관여한 실행 환경, Prompt만의 효과로 분리하기 어려운 결과 해석의 세 영역을 짚는다.
3. (1:15–2:00 / CAPTURED Demo) PARTIAL은 결과가 없다는 뜻이 아니라 원인 귀속의 한계라고 열고 다음 장에서 두 질문을 나눈다.

화면 진행: 상단의 Trial 평가·보고 기준은 이번 실제 사례에서 살펴볼 대상을 안내한다. 이 장은 실제 사건을 여는 화면으로, TRIAL-006 요청과 함께 관찰된 Global Skill/시작 경고를 먼저 짚고 인과 해석의 두 질문은 다음 장으로 넘긴다. 앞의 가상 stale 사례와 별개임을 이중선과 표식으로 확인한다.

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
TRIAL-006 기록을 재구성한 native 도식이다. 작업 요청→실행 환경→결과 해석을 차례로 읽는다. 실제 terminal screenshot이 아니며 현재 Desktop 동작을 주장하지 않는다. Hook 경고는 효과 관찰을 뜻하지 않고 MCP 시작 경고는 작업 결과를 뜻하지 않는다.

**Audience Interaction:**
이 시점에 Evidence grammar가 바뀌었음을 보고 Conceptual case와 구별한다.

**Transition:**
이 결과를 Task Prompt만의 효과라고 말할 수 있을까?

**Time Management:**
CAPTURED 2분. 실제 기록의 정적 요약을 사용하고 새 제품 실행은 하지 않는다.

**Fallback:**
LOCAL STATIC ARTIFACT — production/ACT_4.pptx의 S67와 production/preview/act4/S67.png를 사용한다. 원본 실행 캡처 또는 새로운 Trial 결과로 표현하지 않는다. 로컬 렌더링 검토 결과는 통합 평가 문서에 기록한다.

**Validation Status:**
REVIEWED — DEC-0030에서 승인한 화면 강조와 운영 Cue를 정렬했다. 최종 PPT/Notes/PNG 대조와 렌더 검토 결과는 production/evaluation/FULL_DECK_PRESENTATION_POLISH.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 제품·계정, 실제 시간 리허설은 UNVERIFIED.

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
1. (0:00–1:00 / CAPTURED Demo) 이번 수치는 S45의 image_statistics Benchmark와 별개인 TRIAL-006 resize_nearest 기록임을 먼저 짚는다. 왼쪽 “측정 결과는 유효한가?”와 오른쪽 “무엇이 결과를 만들었나?”를 독립된 질문으로 읽는다.
2. (1:00–2:00 / CAPTURED Demo) input/output hash와 같은 조건의 7회 one-call 측정 기록을 확인한다. 144.2→33.5 ms/call median은 작은 보조정보다. 합성 640×480 gray(max4095)→960×720, CPython 3.9.6, macOS 26.6.2 arm64 범위를 말한다.
3. (2:00–3:15 / CAPTURED Demo) performance-goal Global Skill이 evaluator·ledger·threshold에 관여한 기록을 설명한다. 수치 변화의 직접 원인이라고 단정하지 않는다.
4. (3:15–4:00 / CAPTURED Demo) Hook 경고와 효과, MCP 시작 오류와 작업 결과를 구분하고, 결과와 원인 해석을 별도로 기록해야 한다고 닫는다.

화면 진행: 왼쪽의 결과 타당성과 오른쪽의 원인 귀속을 각각 별도 질문으로 읽는다. 실제 hash와 측정 범위는 왼쪽에, Global 영향과 PARTIAL은 오른쪽에 대응한다. 수치를 새로운 실행 결과로 말하지 않는다.

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
LOCAL STATIC ARTIFACT — production/ACT_4.pptx의 S68와 production/preview/act4/S68.png를 사용한다. 원본 실행 캡처 또는 새로운 Trial 결과로 표현하지 않는다. 로컬 렌더링 검토 결과는 통합 평가 문서에 기록한다.

**Validation Status:**
REVIEWED — DEC-0030에서 승인한 화면 강조와 운영 Cue를 정렬했다. 최종 PPT/Notes/PNG 대조와 렌더 검토 결과는 production/evaluation/FULL_DECK_PRESENTATION_POLISH.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 제품·계정, 실제 시간 리허설은 UNVERIFIED.

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
1. (0:00–1:00 / Lecture) 기존 평가가 작업·Repository 중심이어서 주변 Harness 영향 설명이 충분하지 않았다고 짚는다.
2. (1:00–2:15 / CAPTURED Demo) 우측 후속 기록 기준에서 관찰한 Skill, 경고와 실제 사용 여부, 결과의 해석 범위를 차례로 가리킨다.
3. (2:15–3:00 / CAPTURED Demo) DEC-0016은 기존 결과를 PARTIAL로 보존하고 관찰된 조건을 함께 남기는 결정이었다고 정리한다. Product 코드/Skill 수정이나 격리 환경 구축은 아니다.

화면 진행: 이 장은 DEC-0016에서 바뀐 평가·보고 기준에 집중한다. 이전 기록의 빈틈→이후에 남길 환경 관찰 순서로 읽고 제품 코드나 Demo Skill 변경과 구분한다.

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
실제 평가·보고 결정의 의미를 Before/After로 재구성했다. 원문 직접 인용이나 Product diff로 표현하지 않는다. PARTIAL 보존과 관찰된 Global influence 기록을 변경 내용으로 한정한다.

**Audience Interaction:**
무엇이 바뀌었는지와 무엇이 바뀌지 않았는지 비교한다.

**Transition:**
이 기준은 TRIAL-007/008에 어떻게 적용됐을까?

**Time Management:**
Lecture 1분 + CAPTURED 2분. Trial/reporting boundary에만 머문다.

**Fallback:**
LOCAL STATIC ARTIFACT — production/ACT_4.pptx의 S69와 production/preview/act4/S69.png를 사용한다. 원본 실행 캡처 또는 새로운 Trial 결과로 표현하지 않는다. 로컬 렌더링 검토 결과는 통합 평가 문서에 기록한다.

**Validation Status:**
REVIEWED — DEC-0030에서 승인한 화면 강조와 운영 Cue를 정렬했다. 최종 PPT/Notes/PNG 대조와 렌더 검토 결과는 production/evaluation/FULL_DECK_PRESENTATION_POLISH.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 제품·계정, 실제 시간 리허설은 UNVERIFIED.

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
1. (0:00–1:00 / Lecture) TRIAL-007의 최종 보고 “MCP 경고 없음”과 보존된 stderr의 Nimble AuthRequired가 서로 맞지 않는 점을 가리킨다. 화면 문구는 원문 의미의 요약이다.
2. (1:00–2:00 / Case) 오류 표시는 MCP 작업 결과를 뜻하지 않음을 명확히 한다. TRIAL-008은 Repository Skill 발견·명시 호출과 Global influence를 따로 기록한 Codex CLI 0.154.0 사례다.
3. (2:00–3:00 / Case) 기록 경계가 명확해진 부분과 남은 불일치를 함께 보존한다. 완전한 목록이나 측정된 품질 개선이라고 말하지 않는다.

화면 진행: TRIAL-007 최종 보고와 보존된 stderr를 대조한다. Nimble AuthRequired는 인증 필요 경고라는 뜻으로만 풀고 MCP 작업 결과나 도구 사용 성공으로 확대하지 않는다. 이후 TRIAL-008에서 호출과 Global influence를 따로 기록한 사실을 확인한다.

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
위쪽 두 행은 TRIAL-007 보고/stderr의 의미 대조이고, 아래 행은 TRIAL-008의 별도 기록을 요약한다. 실제 로그 캡처로 위장하지 않는다.

**Audience Interaction:**
후속 기록이 무엇을 명확히 했고 무엇을 남겼는지 비교한다.

**Transition:**
S71에서 실제로 바뀐 System과 미확정 사항을 한 번에 회수한다.

**Time Management:**
Lecture 1분 + Case 2분. 불일치와 unknown을 숨기지 않는다.

**Fallback:**
LOCAL STATIC ARTIFACT — production/ACT_4.pptx의 S70와 production/preview/act4/S70.png를 사용한다. 원본 실행 캡처 또는 새로운 Trial 결과로 표현하지 않는다. 로컬 렌더링 검토 결과는 통합 평가 문서에 기록한다.

**Validation Status:**
REVIEWED — DEC-0030에서 승인한 화면 강조와 운영 Cue를 정렬했다. 최종 PPT/Notes/PNG 대조와 렌더 검토 결과는 production/evaluation/FULL_DECK_PRESENTATION_POLISH.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 제품·계정, 실제 시간 리허설은 UNVERIFIED.

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
1. (0:00–1:00 / Lecture) TRIAL-006의 관찰→DEC-0016→후속 TRIAL-007/008이라는 실제 흐름을 한 문장으로 회수한다.
2. (1:00–2:00 / Case) 왼쪽에서 바뀐 대상이 교육 제작의 평가·보고 기준임을 짚는다.
3. (2:00–3:00 / Case) 오른쪽의 원인별 효과, 환경 목록의 완전성, Trial 품질 향상은 미확인이라고 남기고 C++ 전이로 이동한다.

화면 진행: 이 장은 Meta 사례의 남은 한계를 닫는다. 실제 바뀐 평가·보고 기준과 여전히 미확인인 원인별 효과·환경 목록·품질 향상을 나누고 S72의 적용 질문으로 넘긴다.

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
실제로 바뀐 것과 아직 확인 못한 것의 두 영역을 비교한다. 앞의 Timeline을 다시 길게 강의하거나 가상 Workflow의 실제 복구로 합치지 않는다.

**Audience Interaction:**
Changed/Unknown 두 칸을 비교하며 Meta case를 정리한다.

**Transition:**
“평가 체계를 바꾼 뒤에도 확인할 것이 남았습니다. 이 원리를 C++ Vision 업무로 옮겨, 환경이 달라졌을 때 검증 조건을 어떻게 다시 볼지 생각해 보겠습니다.” S72로 이동한다.

**Time Management:**
Lecture 1분 + Case 2분. preceding slides를 다시 풀어 설명하지 않는다.

**Fallback:**
LOCAL STATIC ARTIFACT — production/ACT_4.pptx의 S71와 production/preview/act4/S71.png를 사용한다. 원본 실행 캡처 또는 새로운 Trial 결과로 표현하지 않는다. 로컬 렌더링 검토 결과는 통합 평가 문서에 기록한다.

**Validation Status:**
REVIEWED — DEC-0030에서 승인한 화면 강조와 운영 Cue를 정렬했다. 최종 PPT/Notes/PNG 대조와 렌더 검토 결과는 production/evaluation/FULL_DECK_PRESENTATION_POLISH.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 제품·계정, 실제 시간 리허설은 UNVERIFIED.

## S72 — Project와 환경이 바뀌면 검증도 다시 본다

Slide ID: S72

Working Title: Project와 환경이 바뀌면 검증도 다시 본다

ACT / Section: ACT 4 / 4G  C++ VISION TRANSFER  /  4H DISCUSSION & TRANSITION

Allocated Time: 20 minutes

Mode Split: Case 7분 + Reflection 2분 + Q&A 7분 + Transition 4분

Primary Message: Project나 환경이 바뀌면 기존 performance 가정과 verification 절차가 여전히 맞는지 다시 확인한다. 반복되는 마찰은 관찰하고 원인을 찾아 관련 layer를 바꾼 뒤 benchmark와 regression으로 확인한다.

Opening Question: “같은 문제가 두 번째로 생기면 다시 Prompt를 고칠까, System을 살펴볼까?”

Speaker Flow:

1. (0:00–2:00 / Case) 앞의 평가 원리를 업무의 검증 조건에 적용해 본다고 안내하고 GPU·빌드·측정 조건이 달라진 상황을 가정한다. 실제 C++ 사건이나 구체적 버전 조합을 주장하지 않는다.
2. (2:00–4:30 / Case) 그림의 입력·코드·장치와 기존 가정·측정 조건 질문을 가리킨다. 기존 판단이 어떤 조건에서 맞았는지, 입력과 실행 조건이 비교 가능한지 묻는다. 관찰된 성능 저하나 숫자를 만들지 않는다.
3. (4:30–7:00 / Case) 출력 그림과 기능 계약 질문에서 성능과 함께 다시 확인할 동작 범위를 살핀다. 반복 신호→원인 Layer 조사→관련 시스템 변경→Benchmark/Regression 재확인으로 연결한다.
4. (7:00–9:00 / Reflection) 하단 질문을 가리켜 자기 업무의 반복 마찰 하나를 마음속으로 떠올리게 한다. 기록·답변·발표는 요구하지 않는다.
5. (9:00–16:00 / Q&A) 질문을 받는다. 질문이 없으면 아래 Fallback 질문을 하나씩 골라 강사가 짧게 해설한다. 새로운 기술 사례나 제품 설정 강의를 열지 않는다.
6. (16:00–20:00 / Transition) 16분에 질문을 마감한다. 가정→측정 조건→기능 계약 세 질문을 전체 Story의 Context→Harness→Loop와 연결하고 S73의 여정 회수로 이동한다.

화면 진행: 왼쪽 그림에서 조건 변화만 확인하고 오른쪽 01 기존 가정→02 측정 조건→03 기능 계약을 위에서 아래로 짚는다. 마지막에만 하단 큰 질문으로 시선을 옮긴다. 7–9분 Reflection, 9–16분 Q&A, 16–20분 Transition은 그대로이며 정적 화면을 사용한다.

Evidence / Source: BEAT-059 / TRANS-012  ·  teaching transfer, not observed C++ incident 삽화 출처: prototype/image-illustration-pilot/assets/S72.png, built-in image_gen, 2026-10-18. 생성 프롬프트: prototype/image-illustration-pilot/PROMPTS.md. 실제 화면·현장 사진·관찰 자료가 아니다.

Claim Boundary: COURSE MODEL / C++ VISION TRANSFER. Toolchain, CUDA/GPU architecture, build/benchmark configuration은 hypothetical teaching context이며 실제 Demo history가 아니다. 구체적인 Windows/shell/IDE/hardware setup을 주장하지 않는다.

Beginner Explanation: 같은 문제가 반복되면 Prompt 외에도 Project와 workflow를 살핀다.

Advanced Insight: Project/environment 변화가 verification assumptions에 미치는 영향을 평가한다.

C++ Vision Bridge: Primary bridge. 변화한 조건에서 기존 tuning 가정과 benchmark/regression 조건을 다시 확인하는 engineering pattern만 전한다.

Demo Operation: 정적 화면과 speaker-led highlighting을 사용한다. 화면에는 세 확인 대상과 성찰 질문을 두고, 20분 운영표는 Notes에만 둔다. Live 프로젝트·제품 실행·애니메이션 의존 없음. 정적 삽화의 입력→처리 코드→실행 장치→출력을 차례로 가리킨다. 황색 장치·설정 표시는 검토할 조건의 변화이며 실패 원인이 확정됐다는 뜻이 아니다.

Audience Interaction: 7–9분 개인 Reflection은 답변·공유 없이 진행한다. 9–16분 Q&A에서는 실제 회사 환경의 검증되지 않은 해결책을 단정하지 않고 어떤 조건을 확인해야 하는지로 답한다.

Transition: “이제 처음의 질문부터 Task·Context·Harness·Loop까지, 어떤 문제에 대응해 왔는지 전체 Story를 다시 연결하겠습니다.” ACT 5 S73으로 넘긴다.

Time Management: 0–7 Case 7분, 7–9 Reflection 2분, 9–16 Q&A 7분, 16–20 Transition 4분으로 20분을 유지한다. Cutoff cue: “이 질문은 여기까지 정리하고, 이제 처음 문제부터 지금의 Loop까지 연결해 보겠습니다.” 실제 20분 리허설은 수행하지 않았다. 0–2분 전체 그림/변경 표식, 2–4:30분 입력·코드·장치의 가정과 비교 조건, 4:30–7분 출력·기능 계약을 설명한다. 이후 7–9분 Reflection, 9–16분 Q&A, 16–20분 Transition을 유지한다.

Fallback: 정적 PPT/PNG를 기본 경로로 사용한다. Q&A가 없으면 ①“예전 Benchmark와 비교하기 전에 어떤 조건을 맞춰야 할까요?” ②“성능이 달라졌을 때 기능 계약은 무엇으로 다시 확인할까요?” ③“두 번째로 같은 문제가 생기면 Prompt 외에 무엇을 살펴볼까요?” 중 하나씩 선택한다. 응답을 요구하지 않고 기존 세 질문의 범위에서 강사가 짧게 해설한다. 정적 파일: production/preview/act4/S72.png 및 production/preview/full/S72.png.

Validation Status: REVIEWED — DEC-0030에서 승인한 화면 강조와 운영 Cue를 정렬했다. 최종 PPT/Notes/PNG 대조와 렌더 검토 결과는 production/evaluation/FULL_DECK_PRESENTATION_POLISH.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 제품·계정, 실제 시간 리허설은 UNVERIFIED.
