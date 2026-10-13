# ACT 5 — Speaker Notes

Status: REVIEWED — S73–S80 use the approved 19-field schema. Local visual review is recorded in production/evaluation/ACT_5_EVALUATION.md. Windows PowerPoint, target-PC fonts, room projection, and timed delivery remain unverified.

Authority: plan/SLIDE_MAP.md, plan/SLIDE_TEMPLATE_MAP.md, plan/VISUAL_SPEC.md, plan/VISUAL_TEMPLATE_FREEZE.md, plan/SPEAKER_NOTES_ARCHITECTURE.md, plan/SPEAKER_NOTES_FREEZE.md, plan/PRODUCTION_PLAN.md, plan/CLAIM_FREEZE.md, plan/DEMO_MATRIX.md, and plan/DECISIONS.md.

All eight slides use the approved 19-field schema. Embedded PowerPoint Notes match the Markdown records.

## S73 — 여섯 시간의 Story를 한 장으로

**Slide ID:**
S73

**Working Title:**
여섯 시간의 Story를 한 장으로

**ACT / Section:**
ACT 5 / 5A  FULL STORY RECAP

**Allocated Time:**
4 minutes

**Mode Split:**
Lecture 4분

**Primary Message:**
Chatbot은 답을 구하고, Prompt는 Task를 구체화하며, Context는 필요한 Project 지식을 제공하고, Harness는 작업 환경을 설계하며, Loop는 Feedback으로 System을 개선한다.

**Opening Question:**
“나는 지금 AI를 어떤 방식으로 사용하고 있을까?”

**Speaker Flow:**
1. (0:00–0:30) 질문을 던지고 다섯 단계가 놓인 흐름을 전체로 보여준다.
2. (0:30–2:45) 각 단계의 한 문장 역할을 차례로 짚는다: 답을 구하기, Task를 구체화하기, Project 지식 제공하기, 작업 환경 설계하기, Feedback으로 System 개선하기.
3. (2:45–4:00) 단계가 앞 단계를 대체하지 않는다고 정리하고 하나의 Repository에서 보인 실제 변화로 넘긴다.

**Evidence / Source:**
TEACHING_MODEL · BEAT-060 · 앞선 ACT의 Story callback. 새 Demo는 실행하지 않는다.

**Claim Boundary:**
이 교육의 문제-driven 진화 모델이다. 각 단계는 앞 단계를 대체하거나 모든 개발자가 같은 maturity 순서로 이동해야 한다는 뜻이 아니다.

**Beginner Explanation:**
현재 사용 방식에서 다음으로 필요한 작은 engineering 대응 하나를 찾는다.

**Advanced Insight:**
어떤 문제가 다음 단계의 접근을 필요하게 했는지 시스템 관점으로 설명한다.

**C++ Vision Bridge:**
기존 Vision 사례를 선택적으로 회상할 수 있다. 새 C++ 기술 사례는 추가하지 않는다.

**Demo Operation:**
추가 실행 없음. 앞선 사례를 한 문장씩 연결하는 static diagram만 사용한다.

**Audience Interaction:**
Opening question을 띄우고 개인적으로 떠올리게 한다. 답변이나 현재 수준 발표를 요구하지 않는다.

**Transition:**
“이 흐름이 하나의 Repository에서는 어떤 변화로 기록됐을까요?” S74로 넘긴다.

**Time Management:**
총 4분, Lecture 4분. 각 단계 설명을 한 문장에 제한하고 앞선 ACT 내용을 다시 강의하지 않는다.

**Fallback:**
정적 vector diagram으로 진행한다. 애니메이션 또는 Live Demo가 필요하지 않다.

**Validation Status:**
LOCAL REVIEW COMPLETE — 5-step teaching diagram is legible and the non-ladder boundary is clear. Presenter pacing, Windows PowerPoint, and room projection remain unverified.


## S74 — 하나의 Repository가 문제에 대응해 진화했다

**Slide ID:**
S74

**Working Title:**
하나의 Repository가 문제에 대응해 진화했다

**ACT / Section:**
ACT 5 / 5A  PRIMARY DEMO EVOLUTION

**Allocated Time:**
3 minutes

**Mode Split:**
Lecture 1분 + Demo 2분 (VISUAL)

**Primary Message:**
각 State는 해당 문제에 대응해 기록된 Engineering history다. State 순서는 기능 성숙도 등급이 아니다.

**Opening Question:**
“이 Repository는 어떤 문제를 만나며 바뀌었나?”

**Speaker Flow:**
1. (0:00–1:00) State rail을 왼쪽부터 읽고, 각 변화가 특정 문제에 대응해 기록됐다고 설명한다.
2. (1:00–2:30) 두 번째 줄의 짧은 labels를 보며 bug fix, project context, routing, reusable workflow, bounded product change를 구분한다.
3. (2:30–3:00) 마지막 STATE-04-PERF를 bounded Working Harness Success로 닫고, benchmark-preparation commits는 named States가 아니라고 덧붙인다.

**Evidence / Source:**
OBSERVED_PRODUCT · `ai-dev-training-demo`의 named Git State/tag 기록과 DEMO-12. State 순서는 STATE-00 → STATE-00-FIXED → STATE-01 → STATE-02 → STATE-03 → STATE-04 → STATE-04-PERF다.

**Claim Boundary:**
기록된 State와 Demo evidence 범위에 한정한다. Benchmark preparation commits는 supporting history이며 별도 State가 아니다. Subagent, Memory, stale Harness 또는 Loop를 Product State로 표시하지 않는다.

**Beginner Explanation:**
변화가 기능 수를 늘리기 위한 것이 아니라 당시 확인된 문제에 대응했다는 점을 본다.

**Advanced Insight:**
Product State와 Conceptual 또는 Observed Meta 사례를 구분하고 bounded Product endpoint를 읽는다.

**C++ Vision Bridge:**
N/A.

**Demo Operation:**
DEMO-12 · VISUAL, 2분. 실제 Product State/tag를 요약한 static timeline이다. 새 Trial·repository 실행·추가 state는 없다. Benchmark preparation은 별도 State로 그리지 않는다.

**Audience Interaction:**
질문에 맞춰 각 State 아래 한 문구를 함께 훑는다. 평가 점수나 성숙도 단계로 읽지 않게 안내한다.

**Transition:**
“그러면 이 작업에서 Subagent와 Memory는 왜 없었을까요?” S75로 전환한다.

**Time Management:**
Lecture 1분 + VISUAL Demo 2분 = 3분. 세부 Trial을 재설명하지 않는다.

**Fallback:**
READY — 이 static vector timeline 자체가 기본 presentation path다. 외부 실행은 필요하지 않다.

**Validation Status:**
LOCAL REVIEW COMPLETE — all seven named States and bounded endpoint are legible; supporting benchmark history is not a State. Windows PowerPoint and room projection remain unverified.


## S75 — 필요성이 입증되지 않은 것은 보류했다

**Slide ID:**
S75

**Working Title:**
필요성이 입증되지 않은 것은 보류했다

**ACT / Section:**
ACT 5 / 5A  MINIMUM EFFECTIVE HARNESS CALLBACK

**Allocated Time:**
2 minutes

**Mode Split:**
Lecture 2분

**Primary Message:**
이 bounded task에서는 Subagent와 Memory를 추가할 충분한 근거가 없었다. “Use what the problem justifies.”

**Opening Question:**
“왜 현재 Demo의 최종 그림에 Subagent와 Memory가 없을까?”

**Speaker Flow:**
1. (0:00–0:30) 실제로 사용한 요소와 이번 사례에서 정당화되지 않은 요소를 시각적으로 나눠 보여준다.
2. (0:30–1:20) STATE-04-PERF의 bounded 성공과 DEC-0018의 범위를 설명한다.
3. (1:20–2:00) “More features ≠ More mature”와 “Less is always better도 아니다”를 짚고 기준을 남긴다.

**Evidence / Source:**
OBSERVED_PRODUCT / TEACHING_MODEL · STATE-04-PERF와 DEC-0018. 사용한 요소: task Prompt, Project Context/routing, reusable Skill/workflow, Tests와 benchmark. 이번 bounded task에서 Subagent와 Memory는 사용되지 않았다.

**Claim Boundary:**
이 Demo의 bounded 작업과 이 교육의 프로젝트별 heuristic이다. 모든 Project에 Subagent/Memory가 불필요하거나 적게 쓰는 것이 항상 낫다는 뜻이 아니다.

**Beginner Explanation:**
처음부터 모든 기능을 넣지 않고 지금 반복되는 마찰과 필요한 지원부터 찾는다.

**Advanced Insight:**
구성요소별 비용과 이득을 실제 task, context, verification 요구에 맞춰 평가한다.

**C++ Vision Bridge:**
자신의 Repository에서도 같은 정당화 질문을 적용할 수 있다. 새 C++ 절차는 추가하지 않는다.

**Demo Operation:**
추가 실행 없음. 왼쪽은 STATE-04-PERF의 system components, 오른쪽은 이번 사례에서 정당화되지 않은 Subagent/Memory다. 상태와 일반 규칙을 섞지 않는다.

**Audience Interaction:**
차이를 보고 “Use what the problem justifies”라는 기준을 가져간다. 도구 선택 답변이나 투표는 요구하지 않는다.

**Transition:**
“AI에게 더 많은 일을 맡겨도 개발자에게 남는 책임은 무엇일까요?” S76으로 이동한다.

**Time Management:**
Lecture 2분. 구성요소를 다시 강의하지 않고 판단 근거와 범위에 집중한다.

**Fallback:**
정적 2-panel evidence/model visual을 사용한다. 실행 기록이나 feature-count score는 사용하지 않는다.

**Validation Status:**
LOCAL REVIEW COMPLETE — observed task components are separated from Subagent/Memory non-use; this remains task-bounded. Windows PowerPoint and room projection remain unverified.


## S76 — 위임이 늘어도 개발자 책임은 남는다

**Slide ID:**
S76

**Working Title:**
위임이 늘어도 개발자 책임은 남는다

**ACT / Section:**
ACT 5 / 5A  DEVELOPER RESPONSIBILITY

**Allocated Time:**
3 minutes

**Mode Split:**
Lecture 3분

**Primary Message:**
Agent는 조사·생성·변경·실행·비교를 도울 수 있다. 개발자는 목표, 제약, 판단, Verification, 완료 여부와 결과 책임을 유지한다.

**Opening Question:**
“AI가 더 많은 일을 맡아도 개발자가 계속 책임지는 것은 무엇인가?”

**Speaker Flow:**
1. (0:00–0:40) Agent가 지원할 수 있는 행동 다섯 가지를 보여준다.
2. (0:40–2:20) Goal, Judgment, Verification, Responsibility를 중심으로 네 질문을 설명한다.
3. (2:20–3:00) 역할을 절대적으로 나누는 규칙이 아니라 결과 판단과 책임이 개발자에게 남는다는 점으로 닫는다.

**Evidence / Source:**
TEACHING_MODEL · BEAT-061–062. 새 Product feature나 책임 handoff evidence는 없다.

**Claim Boundary:**
이 교육에서 고정한 책임 원칙이다. Agent와 개발자의 역할을 절대적인 분업 규칙으로 제시하지 않는다. AI fear/control framing을 사용하지 않는다.

**Beginner Explanation:**
AI가 결과를 만들 수 있어도 무엇이 맞고 완료인지 판단하는 일은 남는다.

**Advanced Insight:**
위임 범위, 제약, 검증 기준과 최종 수용 기준을 함께 설계한다.

**C++ Vision Bridge:**
N/A.

**Demo Operation:**
N/A — 별도 실행 없음. 정적 role/responsibility diagram.

**Audience Interaction:**
네 가지 책임 축을 읽고 자신의 완료 기준을 떠올리게 한다. 응답 요구 없음.

**Transition:**
“이 역할 변화를 이 교육에서는 어떤 모델로 부를까요?” S77로 이동한다.

**Time Management:**
Lecture 3분. 다섯 Agent 행동을 상세 제품 기능처럼 설명하지 않는다.

**Fallback:**
정적 diagram으로 진행하며 발표자가 각 responsibility card를 차례로 가리킨다.

**Validation Status:**
LOCAL REVIEW COMPLETE — support actions and developer responsibilities are distinct; no absolute role split is implied. Windows PowerPoint and room projection remain unverified.


## S77 — AI-Native Development는 이 교육의 운영 모델

**Slide ID:**
S77

**Working Title:**
AI-Native Development는 이 교육의 운영 모델

**ACT / Section:**
ACT 5 / 5A  AI-NATIVE DEVELOPMENT

**Allocated Time:**
3 minutes

**Mode Split:**
Lecture 3분

**Primary Message:**
이 교육은 Task Boundary, Project Context, Reusable Workflow, Verification, Feedback Loop를 의도적으로 설계·운영하는 방식을 AI-Native Development의 operational model로 사용한다.

**Opening Question:**
“AI에게 일을 많이 맡기면 AI-Native일까?”

**Speaker Flow:**
1. (0:00–0:30) 사용량 자체가 이 교육의 기준인지 묻는다.
2. (0:30–2:20) 다섯 구성요소를 하나의 working system 모델로 보여준다.
3. (2:20–3:00) 이는 이 교육의 framing이며 모든 task에 모든 component가 반드시 필요한 것은 아니라고 한정한다.

**Evidence / Source:**
TEACHING_MODEL · DEC-0023의 course-specific operational framing.

**Claim Boundary:**
공식·보편 업계 표준 정의라고 말하지 않는다. 모든 task 또는 Demo에 다섯 구성요소를 의무적으로 도입하라는 뜻이 아니다.

**Beginner Explanation:**
AI 사용량을 늘리는 것만으로 끝내지 않고 반복되는 작은 마찰을 하나 개선한다.

**Advanced Insight:**
Model capability와 작업 System/Harness 설계를 구분해 다음 병목을 진단한다.

**C++ Vision Bridge:**
다음 S78에서 C++ Vision 업무와 자신의 Repository로 transfer한다.

**Demo Operation:**
N/A — 별도 실행 없음. 다섯 구성요소는 비교 가능한 system components로 보이며 maturity 순서가 아니다.

**Audience Interaction:**
Opening question을 남긴 뒤 course model의 범위를 확인한다. 공식 용어 정의나 정답 발표를 요구하지 않는다.

**Transition:**
“내 Repository에서는 어떤 Layer에서 마찰이 반복될까요?” S78로 넘긴다.

**Time Management:**
Lecture 3분. AI 사용량과 설계된 work system의 차이만 설명한다.

**Fallback:**
정적 component model로 진행한다. 용어가 추가 정의로 확장되지 않게 DEC-0023 문구를 따른다.

**Validation Status:**
LOCAL REVIEW COMPLETE — course-specific operational model and non-universal scope are visible. Windows PowerPoint and room projection remain unverified.


## S78 — 어느 Layer에서 마찰이 반복되는가?

**Slide ID:**
S78

**Working Title:**
어느 Layer에서 마찰이 반복되는가?

**ACT / Section:**
ACT 5 / 5B  C++ VISION / MY REPOSITORY TRANSFER

**Allocated Time:**
5 minutes

**Mode Split:**
Case 1분 + Transition 4분

**Primary Message:**
Task, Context, Workflow, Verification, Repeated Failure Loop 중 현재 가장 큰 마찰과 가까운 한 곳을 선택한다. 정해진 maturity sequence가 아니다.

**Opening Question:**
“내 Repository에서 다음 주에 하나만 바꾼다면?”

**Speaker Flow:**
1. (0:00–1:00) C++ Vision transfer example을 보여주고 실제 project procedure가 아니라 pattern transfer임을 밝힌다.
2. (1:00–5:00) 다섯 선택지를 같은 수준으로 소개한다. 현재 가장 큰 반복 마찰을 생각하게 하고 S79 개인 Reflection으로 넘긴다.

**Evidence / Source:**
TEACHING_MODEL · C++ Vision engineering-pattern transfer. 실제 C++ Project, hardware, toolchain 또는 benchmark 결과는 사용하지 않는다.

**Claim Boundary:**
다섯 선택지는 같은 높이의 적용 후보이며 순서가 있는 maturity ladder가 아니다. 특정 C++ Project 규칙·도구·hardware 또는 검증된 procedure를 보장하지 않는다.

**Beginner Explanation:**
전체 Harness를 새로 만들기 전에 반복해서 설명하거나 확인하는 부분 하나를 찾는다.

**Advanced Insight:**
반복 비용, 위험과 verification surface를 보고 투자 지점을 고른다.

**C++ Vision Bridge:**
Primary bridge. 예시: 성능 병목 조사 Task; build mode/algorithm contract/hardware assumptions Context; profile → change → benchmark → regression Workflow; tests + benchmark Verification; 반복 이슈가 다시 생기면 관련 System 수정. 실제 project procedure가 아닌 pattern transfer.

**Demo Operation:**
N/A — 별도 Demo 없음. Case 1분은 transfer model 설명, Transition 4분은 S79 개인 Reflection으로 초점을 이동하는 cue다.

**Audience Interaction:**
선택지를 강사 주도로 비교한다. 청중에게 선택 발표, 투표, 실습, 제출을 요구하지 않는다.

**Transition:**
“마지막으로, 각자 업무에서 반복되는 마찰을 개인적으로 생각해 봅시다.” S79로 이동한다.

**Time Management:**
Case 1분 + Transition 4분 = 5분. Transition 동안 새 사례를 열지 않고 reflection handoff만 수행한다.

**Fallback:**
정적 5-option matrix를 사용한다. 특정 C++ toolchain이나 hardware 설명으로 확장하지 않는다.

**Validation Status:**
LOCAL REVIEW COMPLETE — five transfer options use equal visual weight; C++ example is labeled a pattern transfer. Target project applicability and room projection remain unverified.


## S79 — 다음 작은 행동을 개인적으로 고른다

**Slide ID:**
S79

**Working Title:**
다음 작은 행동을 개인적으로 고른다

**ACT / Section:**
ACT 5 / 5B  FINAL REFLECTION

**Allocated Time:**
4 minutes

**Mode Split:**
Lecture 2분 + Reflection 2분

**Primary Message:**
반복해서 적는 설명, AI가 다시 찾는 Project 사실, 반복되는 실패에서 고칠 System layer 가운데 한 가지를 생각한다.

**Opening Question:**
“내가 AI와 개발하는 방식에서 다음에 바꿀 수 있는 것은 무엇인가?”

**Speaker Flow:**
1. (0:00–1:00) S78의 다섯 선택지는 순서가 아니라는 점을 짧게 회수한다.
2. (1:00–2:00) 화면의 질문 세 가지를 차례로 소개한다.
3. (2:00–4:00) 두 분 동안 개인적으로 생각할 시간을 둔다. 답, 기록, 발표, 제출을 요구하지 않는다.

**Evidence / Source:**
TEACHING_MODEL · 승인된 private reflection prompt. 개인 업무에 대한 새 관찰 근거는 수집하지 않는다.

**Claim Boundary:**
개인 Reflection이며 응답, 공유, written commitment 또는 실제 업무 변경을 요구하지 않는다.

**Beginner Explanation:**
반복되는 설명이나 Project 사실을 AI가 다시 찾는 지점부터 생각한다.

**Advanced Insight:**
같은 실패가 반복될 때 Prompt 밖의 어떤 System layer가 원인인지 떠올린다.

**C++ Vision Bridge:**
자신의 Vision 또는 개발 Repository에 같은 질문을 개인적으로 적용할 수 있다.

**Demo Operation:**
N/A — 별도 Demo 없음.

**Audience Interaction:**
공유하지 않는 개인 성찰로 진행한다. 응답을 받기 위해 기다리지 않는다. 2분 뒤 바로 S80으로 이동한다.

**Transition:**
“이제 질문을 받고, 마지막 공통 모델로 마무리하겠습니다.” S80으로 넘긴다.

**Time Management:**
Lecture 2분 + Reflection 2분 = 4분. Reflection은 2분에 종료하고 Q&A와 섞지 않는다.

**Fallback:**
응답이나 기록이 없어도 문제 없이 진행한다. 질문이 끝나면 정해진 시간대로 종료한다.

**Validation Status:**
LOCAL REVIEW COMPLETE — private reflection boundary and no-response requirement are legible. Two-minute live pacing and room projection remain unverified.


## S80 — Q&A와 교육 마무리

**Slide ID:**
S80

**Working Title:**
Q&A와 교육 마무리

**ACT / Section:**
ACT 5 / 5B  FINAL Q&A / CLOSING

**Allocated Time:**
6 minutes

**Mode Split:**
Q&A 4분 + Closing Transition 2분

**Primary Message:**
Goal, Judgment, Verification, Responsibility를 유지하면서 AI가 일할 환경과 Feedback을 설계한다.

**Opening Question:**
“남은 질문은 무엇인가?”

**Speaker Flow:**
1. (0:00–4:00) Q&A를 진행한다. 질문이 없으면 준비된 FAQ 또는 개발 업무 적용 질문 “내 업무에서 먼저 살펴볼 layer는 무엇인가?”를 사용한다.
2. (4:00–6:00) Q&A를 종료하고 마지막 model과 closing line을 보여준다.
3. 종료 cue: “AI를 더 많이 쓰기보다, AI가 잘 일할 환경을 설계합니다.”

**Evidence / Source:**
TEACHING_MODEL · BEAT-070–071. 새로운 Product claim이나 기술 개념은 추가하지 않는다.

**Claim Boundary:**
AI-Native Development의 course-specific framing으로 닫는다. 제품 기능, 자동화 수준 또는 모든 상황의 단일 처방을 주장하지 않는다.

**Beginner Explanation:**
AI 사용량 대신 내 일에 필요한 환경과 확인 기준을 기억한다.

**Advanced Insight:**
Goal, Judgment, Verification, Responsibility를 유지하며 System의 Feedback 경로를 설계한다.

**C++ Vision Bridge:**
N/A.

**Demo Operation:**
N/A — Q&A와 closing visual만 사용한다.

**Audience Interaction:**
Q&A 4분. 질문이 없으면 FAQ 또는 개발 업무 적용 질문 하나를 사용하며 새로운 강의 topic을 열지 않는다.

**Transition:**
2분 closing transition: Question → Task → Context → System → Feedback Loop를 회수하고 교육을 마친다.

**Time Management:**
Q&A 4분 + Closing Transition 2분 = 6분. Q&A는 4분에 마감하고 추가 질문을 이유로 시간을 늘리지 않는다.

**Fallback:**
질문이 없으면 준비된 FAQ 또는 “내 업무에서 먼저 살펴볼 layer는 무엇인가?”를 묻는다. 답이 없어도 closing visual로 바로 전환한다.

**Validation Status:**
LOCAL REVIEW COMPLETE — Q&A fallback, 4+2 time split, closing statement, and final model are legible. Windows PowerPoint and room projection remain unverified.
