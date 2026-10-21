# ACT 5 — Speaker Notes

Status: NUMBERING ALIGNED — DEC-0043, 90-slide current sequence. Rendered/embedded Notes parity for the new sequence was checked locally; see production/evaluation/PROMPT_ENGINEERING_ADDITION_RESULT.md. Existing per-slide time/Mode values are preserved; the approved course totals are ACT 1 63 minutes and 368 minutes overall. Windows, room, account and timed rehearsal remain UNVERIFIED.

Historical alignment status: ALIGNED — DEC-0038의 82장 번호와 운영 지침을 정렬했다. 신규 제작본의 렌더·내장 Notes 대조는 production/evaluation/PROMPT_TIMELINE_REVISION.md에서 별도로 기록한다. 기존 81장판의 PASS를 승계하지 않는다. Windows, room, account, and timed rehearsal remain UNVERIFIED.

Authority: plan/SLIDE_MAP.md, plan/SLIDE_TEMPLATE_MAP.md, plan/VISUAL_SPEC.md, plan/VISUAL_TEMPLATE_FREEZE.md, plan/SPEAKER_NOTES_ARCHITECTURE.md, plan/SPEAKER_NOTES_FREEZE.md, plan/PRODUCTION_PLAN.md, plan/CLAIM_FREEZE.md, plan/DEMO_MATRIX.md, and plan/DECISIONS.md.

All eight slides use the approved 19-field schema. The revision builder reads these records for embedded PowerPoint Notes; parity must be checked on the final export.

Historical continuity revision: DEC-0032 (2026-10-20), 당시 80장판. Historical handoff review: production/evaluation/FULL_DECK_CONTINUITY_REVISION.md. Prior validation history remains below.

## S83 — 여섯 시간의 Story를 한 장으로

**Slide ID:**
S83

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
1. (0:00–0:30 / Lecture) 처음의 질문으로 돌아가 다섯 방식을 한눈에 보여준다.
2. (0:30–2:45 / Lecture) 각 행의 행동만 회수한다: 답을 구하기, 이번 작업 구체화, 프로젝트 지식 제공, 일하는 환경 설계, 피드백으로 시스템 수정. 새 용어를 덧붙이지 않는다.
3. (2:45–4:00 / Lecture) 앞의 방식이 사라지지 않고 문제에 맞는 대응이 더해졌다고 정리한다. S84 실제 Repository 이력→S85 선택 기준→S86 책임을 거쳐 S87에서 AI-Native 운영 모델을 회수한다.

화면 진행: 이 장은 다섯 방식이 어떤 문제에 대응했는지 여정을 회수한다. 실제 State 이름이나 책임 목록을 여기서 모두 설명하지 않고 S84와 S86에 남긴다.

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
다섯 개 행동 행을 차례로 가리킨다. 새로운 실행이나 상태를 추가하지 않는다. S87의 정의를 바로 다음 장에서 설명한다고 예고하지 않는다.

**Audience Interaction:**
Opening question을 띄우고 개인적으로 떠올리게 한다. 답변이나 현재 수준 발표를 요구하지 않는다.

**Transition:**
“전체 교육 모델 가운데, 하나의 Repository에서 실제로 확인한 변화만 다시 보겠습니다.” S84로 넘긴다.

**Time Management:**
총 4분, Lecture 4분. 각 단계 설명을 한 문장에 제한하고 앞선 ACT 내용을 다시 강의하지 않는다.

**Fallback:**
LOCAL STATIC ARTIFACT — production/ACT_5.pptx의 S83와 production/preview/act5/S83.png를 사용한다. 원본 실행 캡처 또는 새로운 Trial 결과로 표현하지 않는다. 로컬 렌더링 검토 결과는 통합 평가 문서에 기록한다.

**Validation Status:**
REVIEWED — DEC-0030에서 승인한 화면 강조와 운영 Cue를 정렬했다. 최종 PPT/Notes/PNG 대조와 렌더 검토 결과는 production/evaluation/FULL_DECK_PRESENTATION_POLISH.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 제품·계정, 실제 시간 리허설은 UNVERIFIED.

## S84 — 하나의 Repository가 문제에 대응해 진화했다

Slide ID: S84

Working Title: 하나의 Repository가 문제에 대응해 진화했다

ACT / Section: ACT 5 / 5A  PRIMARY DEMO EVOLUTION

Allocated Time: 3 minutes

Mode Split: Lecture 1분 + Demo 2분 (VISUAL)

Primary Message: 각 State는 해당 문제에 대응해 기록된 Engineering history다. State 순서는 기능 성숙도 등급이 아니다.

Opening Question: “이 Repository는 어떤 문제를 만나며 바뀌었나?”

Speaker Flow:

1. (0:00–1:00 / Lecture) 전체 교육 모델 가운데 실제 Product 이력만 회수하는 장임을 안내한다. 일곱 이름을 번호·화살표 순서로 읽고, 상단 왼쪽에서 오른쪽으로, 다음 하단 오른쪽에서 왼쪽으로 이동한다. State는 당시 문제에 대응한 이력임을 말한다.
2. (1:00–2:30 / VISUAL Demo) 아래 세 발췌(S18 crop 수정, S42 상세 문서 분리, S55 같은 조건의 성능 비교)를 가리키며 위의 일곱 State 변화와 연결한다. 작은 그림은 기억을 회수하는 용도이며 코드·경로·수치를 다시 읽는 시간이 아니다.
3. (2:30–3:00 / VISUAL Demo) STATE-04-PERF의 bounded endpoint에서 닫는다. Benchmark 준비 commit은 추가 State가 아니다.

화면 진행: State rail의 번호 01–07과 화살표를 따라간다. 상단은 왼쪽→오른쪽, 아래로 내려간 뒤 하단은 오른쪽→왼쪽으로 읽는다. 하단 발췌는 rail과 구분된 회상 자료이며 작은 코드·수치를 다시 읽거나 바로 위 State와 열 기준으로 대응시키지 않는다.

Evidence / Source: OBSERVED_PRODUCT · `ai-dev-training-demo`의 named Git State/tag 기록과 DEMO-12. State 순서는 STATE-00 → STATE-00-FIXED → STATE-01 → STATE-02 → STATE-03 → STATE-04 → STATE-04-PERF다. 발췌 원본: assets/slide-illustrations/recap/S16-source.png, S32-source.png, S45-source.png. 파일명은 최초80장판 캡처 시점의 번호이며 현재 대응은 S18/S42/S55다. 실제 Trial 원본 화면이 아닌 당시 production PNG 발췌다. S18은 TRIAL-002 diff 재구성, S42는 STATE-02→03 문구 발췌, S55는 STATE-04→04-PERF 단일 코드·입력·환경 비교다. SHA-256과 native crop 범위: assets/slide-illustrations/ASSET_MANIFEST.json.

Claim Boundary: 기록된 State와 Demo evidence 범위에 한정한다. Benchmark preparation commits는 supporting history이며 별도 State가 아니다. Subagent, Memory, stale Harness 또는 Loop를 Product State로 표시하지 않는다. 세 그림은 기존 발표자료 발췌이며 원본 실행 캡처가 아니다. S42로 Routing 우월성·토큰 절감을 주장하지 않고, S55는 tracemalloc 피크와 이 환경의 코드 변경 결과로 한정하며 RSS·Harness 단독 인과성으로 확대하지 않는다.

Beginner Explanation: 변화가 기능 수를 늘리기 위한 것이 아니라 당시 확인된 문제에 대응했다는 점을 본다.

Advanced Insight: Product State와 Conceptual 또는 Observed Meta 사례를 구분하고 bounded Product endpoint를 읽는다.

C++ Vision Bridge: N/A.

Demo Operation: DEMO-12 · VISUAL, 2분. 실제 Product State/tag를 요약한 static timeline이다. 새 Trial·repository 실행·추가 state는 없다. Benchmark preparation은 별도 State로 그리지 않는다. 세 발췌와 seven-State rail을 함께 사용하되 개별 Trial을 새로 실행하거나 재설명하지 않는다.

Audience Interaction: 질문에 맞춰 각 State 아래 한 문구를 함께 훑는다. 평가 점수나 성숙도 단계로 읽지 않게 안내한다.

Transition: “그러면 이 작업에서 Subagent와 Memory는 왜 없었을까요?” S85로 전환한다.

Time Management: Lecture 1분 + VISUAL Demo 2분 = 3분. 세부 Trial을 재설명하지 않는다.

Fallback: LOCAL STATIC ARTIFACT — production/ACT_5.pptx의 S84와 production/preview/act5/S84.png를 사용한다. 원본 실행 캡처 또는 새로운 Trial 결과로 표현하지 않는다. 로컬 렌더링 검토 결과는 통합 평가 문서에 기록한다.

Validation Status: REVIEWED — DEC-0030에서 승인한 화면 강조와 운영 Cue를 정렬했다. 최종 PPT/Notes/PNG 대조와 렌더 검토 결과는 production/evaluation/FULL_DECK_PRESENTATION_POLISH.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 제품·계정, 실제 시간 리허설은 UNVERIFIED.

## S85 — 필요성이 입증되지 않은 것은 보류했다

**Slide ID:**
S85

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
1. (0:00–0:30 / Lecture) 이번 작업에서 쓴 왼쪽 요소와 보류한 오른쪽 요소를 비교한다.
2. (0:30–1:20 / Lecture) STATE-04-PERF와 DEC-0018의 bounded 범위에서 Subagent·Memory 추가의 이득이 충분히 정당화되지 않았다고 설명한다.
3. (1:20–2:00 / Lecture) “현재 문제가 필요로 하는 만큼 설계한다”는 기준을 남긴다. 기능 수가 많거나 적다는 이유만으로 성숙도를 판단하지 않는다.

화면 진행: 이번 Demo에서 채택한 구성과 필요성을 입증하지 못한 구성을 대비한다. 여정 요약보다 무엇을 보류할지 판단한 기준에 집중한다.

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
“필요한 구성요소를 선택한 뒤에도, 그 결과가 충분한지 판단하는 책임은 남습니다. 무엇을 확인하고 완료를 수용해야 할까요?” S86으로 이동한다.

**Time Management:**
Lecture 2분. 구성요소를 다시 강의하지 않고 판단 근거와 범위에 집중한다.

**Fallback:**
LOCAL STATIC ARTIFACT — production/ACT_5.pptx의 S85와 production/preview/act5/S85.png를 사용한다. 원본 실행 캡처 또는 새로운 Trial 결과로 표현하지 않는다. 로컬 렌더링 검토 결과는 통합 평가 문서에 기록한다.

**Validation Status:**
REVIEWED — DEC-0030에서 승인한 화면 강조와 운영 Cue를 정렬했다. 최종 PPT/Notes/PNG 대조와 렌더 검토 결과는 production/evaluation/FULL_DECK_PRESENTATION_POLISH.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 제품·계정, 실제 시간 리허설은 UNVERIFIED.

## S86 — 위임이 늘어도 개발자 책임은 남는다

**Slide ID:**
S86

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
1. (0:00–0:40 / Lecture) S85의 구성요소 선택에서 결과를 수용하는 판단으로 이어 간다. AI가 도울 수 있는 행동은 상단 한 문장으로만 읽는다.
2. (0:40–2:20 / Lecture) 네 질문을 차례로 짚는다: 해결할 목표, 적절한 선택, 확인 근거, 완료 수용 여부.
3. (2:20–3:00 / Lecture) 역할의 절대적 분업이 아니라 개발자의 판단과 책임을 강조하고 S87의 운영 모델로 연결한다.

화면 진행: AI가 도울 수 있는 행동은 짧게 읽고 개발자에게 남는 목표·판단·검증·책임의 질문을 차례로 확인한다. 이전 장의 도구 채택 목록을 반복하지 않는다.

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
“이 역할 변화를 이 교육에서는 어떤 모델로 부를까요?” S87로 이동한다.

**Time Management:**
Lecture 3분. 다섯 Agent 행동을 상세 제품 기능처럼 설명하지 않는다.

**Fallback:**
LOCAL STATIC ARTIFACT — production/ACT_5.pptx의 S86와 production/preview/act5/S86.png를 사용한다. 원본 실행 캡처 또는 새로운 Trial 결과로 표현하지 않는다. 로컬 렌더링 검토 결과는 통합 평가 문서에 기록한다.

**Validation Status:**
REVIEWED — DEC-0030에서 승인한 화면 강조와 운영 Cue를 정렬했다. 최종 PPT/Notes/PNG 대조와 렌더 검토 결과는 production/evaluation/FULL_DECK_PRESENTATION_POLISH.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 제품·계정, 실제 시간 리허설은 UNVERIFIED.

## S87 — AI-Native Development는 이 교육의 운영 모델

**Slide ID:**
S87

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
1. (0:00–0:30 / Lecture) 이 과정이 AI가 일할 조건과 결과 확인 경로를 설계하는 방식에 AI-Native Development라는 운영 모델 이름을 붙였음을 밝힌다.
2. (0:30–2:20 / Lecture) 작업 경계, 프로젝트 지식·절차, 검증·피드백 세 행에서 각각 Task Boundary, Project Context/Reusable Workflow, Verification/Feedback Loop가 맡는 질문을 연결한다.
3. (2:20–3:00 / Lecture) 모든 Task에 모든 요소를 의무적으로 넣으라는 보편 정의가 아님을 한정하고 자신의 반복 마찰을 찾는 S88로 이동한다.

화면 진행: 다섯 구성요소를 이 교육의 설계 질문으로 묶는다. 작업 경계→지식과 절차→검증과 피드백을 설명하되 공식·보편 정의나 의무적인 maturity 순서로 말하지 않는다.

**Evidence / Source:**
TEACHING_MODEL · DEC-0023의 course-specific operational framing.

**Claim Boundary:**
공식·보편 업계 표준 정의라고 말하지 않는다. 모든 task 또는 Demo에 다섯 구성요소를 의무적으로 도입하라는 뜻이 아니다.

**Beginner Explanation:**
AI 사용량을 늘리는 것만으로 끝내지 않고 반복되는 작은 마찰을 하나 개선한다.

**Advanced Insight:**
Model capability와 작업 System/Harness 설계를 구분해 다음 병목을 진단한다.

**C++ Vision Bridge:**
다음 S88에서 C++ Vision 업무와 자신의 Repository로 transfer한다.

**Demo Operation:**
N/A — 별도 실행 없음. 다섯 구성요소는 비교 가능한 system components로 보이며 maturity 순서가 아니다.

**Audience Interaction:**
Opening question을 남긴 뒤 course model의 범위를 확인한다. 공식 용어 정의나 정답 발표를 요구하지 않는다.

**Transition:**
“내 Repository에서는 어떤 Layer에서 마찰이 반복될까요?” S88로 넘긴다.

**Time Management:**
Lecture 3분. AI 사용량과 설계된 work system의 차이만 설명한다.

**Fallback:**
LOCAL STATIC ARTIFACT — production/ACT_5.pptx의 S87와 production/preview/act5/S87.png를 사용한다. 원본 실행 캡처 또는 새로운 Trial 결과로 표현하지 않는다. 로컬 렌더링 검토 결과는 통합 평가 문서에 기록한다.

**Validation Status:**
REVIEWED — DEC-0030에서 승인한 화면 강조와 운영 Cue를 정렬했다. 최종 PPT/Notes/PNG 대조와 렌더 검토 결과는 production/evaluation/FULL_DECK_PRESENTATION_POLISH.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 제품·계정, 실제 시간 리허설은 UNVERIFIED.

## S88 — 어느 Layer에서 마찰이 반복되는가?

**Slide ID:**
S88

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
1. (0:00–1:00 / Case) C++ Vision의 병목 범위, 빌드 조건·계약·하드웨어 가정, 분석·측정 절차를 업무에 비춰 보는 교육용 예시라고 밝힌다. 실제 프로젝트 사건이 아니다.
2. (1:00–3:00 / Transition) 다섯 행의 증상 질문을 읽으며 현재 자기 업무와 가까운 것이 있는지 마음속으로 떠올리게 한다. 같은 수준의 선택지이며 반드시 위에서부터 도입하는 순서가 아니다.
3. (3:00–5:00 / Transition) 떠올린 마찰 한 곳을 다음 작업의 작은 행동 하나로 좁히겠다고 안내하고 S89의 세 질문으로 연결한다. Task/Context/Workflow/Verification/Feedback의 새 개념 설명은 하지 않는다.

화면 진행: 자기 업무의 반복 마찰 한 곳을 고르는 적용 질문에 집중한다. 모든 Layer를 도입하라는 체크리스트로 읽지 않고 현재 문제와 가장 가까운 한 곳만 고르게 한다.

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
새 Demo가 없다. 왼쪽 Layer 이름보다 오른쪽 반복되는 마찰을 먼저 읽고, 선택지들은 같은 높이의 적용 후보임을 유지한다.

**Audience Interaction:**
선택지를 강사 주도로 비교한다. 청중에게 선택 발표, 투표, 실습, 제출을 요구하지 않는다.

**Transition:**
“방금 떠올린 한 곳에서, 다음 작업 때 다르게 해 볼 작은 행동 하나를 마음속으로 골라 봅시다.” S89로 이동한다.

**Time Management:**
Case 1분 + Transition 4분 = 5분. Transition 동안 새 사례를 열지 않고 reflection handoff만 수행한다.

**Fallback:**
LOCAL STATIC ARTIFACT — production/ACT_5.pptx의 S88와 production/preview/act5/S88.png를 사용한다. 원본 실행 캡처 또는 새로운 Trial 결과로 표현하지 않는다. 로컬 렌더링 검토 결과는 통합 평가 문서에 기록한다.

**Validation Status:**
REVIEWED — DEC-0030에서 승인한 화면 강조와 운영 Cue를 정렬했다. 최종 PPT/Notes/PNG 대조와 렌더 검토 결과는 production/evaluation/FULL_DECK_PRESENTATION_POLISH.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 제품·계정, 실제 시간 리허설은 UNVERIFIED.

## S89 — 다음 작은 행동을 개인적으로 고른다

**Slide ID:**
S89

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
“방금 떠올린 마찰에서, 다음 작업 때 다르게 해 볼 작은 행동 하나는 무엇인가?”

**Speaker Flow:**
1. (0:00–1:00 / Lecture) S88에서 떠올린 반복 마찰 한 곳을 이어 받아, 다음 작업에서 다르게 해 볼 작은 행동 하나를 고르는 시간이라고 안내한다.
2. (1:00–2:00 / Lecture) 화면의 반복 설명 하나를 줄이는 방법, 다시 찾는 프로젝트 사실 하나를 둘 곳, 같은 실패 때 먼저 확인할 Layer의 세 질문을 읽는다. 자신과 가까운 질문 하나를 바탕으로 다음 행동을 떠올리게 한다.
3. (2:00–4:00 / Reflection) 두 분 동안 다음 행동 하나를 조용히 개인적으로 고를 시간을 둔다. 답변·기록·발표·제출을 요구하지 않는다. 시간 뒤 S90 질문 시간으로 넘어간다.

화면 진행: 이번 장은 개인적인 선택을 위한 침묵을 허용한다. 앞의 여정·State·모델을 다시 강의하지 않고 작은 다음 행동 하나를 생각하게 한다. 답변·공유·공개 약속은 요구하지 않는다.

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
떠올린 마찰에 맞는 다음 행동 하나를 마음속으로 고르는 개인 성찰로 진행한다. 공유나 실천 약속을 요구하지 않고 응답을 받기 위해 기다리지 않는다. 2분 뒤 바로 S90으로 이동한다.

**Transition:**
“이제 질문을 받고, 마지막 공통 모델로 마무리하겠습니다.” S90으로 넘긴다.

**Time Management:**
Lecture 2분 + Reflection 2분 = 4분. Reflection은 2분에 종료하고 Q&A와 섞지 않는다.

**Fallback:**
LOCAL STATIC ARTIFACT — production/ACT_5.pptx의 S89와 production/preview/act5/S89.png를 사용한다. 원본 실행 캡처 또는 새로운 Trial 결과로 표현하지 않는다. 로컬 렌더링 검토 결과는 통합 평가 문서에 기록한다.

**Validation Status:**
REVIEWED — DEC-0030에서 승인한 화면 강조와 운영 Cue를 정렬했다. 최종 PPT/Notes/PNG 대조와 렌더 검토 결과는 production/evaluation/FULL_DECK_PRESENTATION_POLISH.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 제품·계정, 실제 시간 리허설은 UNVERIFIED.

## S90 — Q&A와 교육 마무리

**Slide ID:**
S90

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
1. (0:00–4:00 / Q&A) 상단의 “내 업무에서 무엇부터 바꿀까요?”를 가리키고 질문을 받는다. 질문이 없으면 “반복 설명을 줄이려면 Task와 Project Context 중 무엇을 살필까요?” 또는 “결과 확인 기준을 먼저 정한다면 어떤 업무부터 볼까요?”를 사용해 앞의 교육 모델 안에서 짧게 정리한다.
2. (4:00–6:00 / Closing Transition) 질문을 마감하고 중앙의 “AI가 잘 일할 환경을 설계한다”로 마무리한다. 하단 Question→Task→Context→System→Feedback Loop를 짧게 회수한다.
3. 종료 cue: “목표·판단·검증·책임을 유지하면서, AI가 잘 일할 환경을 설계합시다.”

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
추가 실행 없음. Q&A 운영 지시와 시간표는 Notes에만 두고 화면에는 질문과 마지막 한 문장을 남긴다.

**Audience Interaction:**
Q&A 4분. 질문이 없으면 FAQ 또는 개발 업무 적용 질문 하나를 사용하며 새로운 강의 topic을 열지 않는다.

**Transition:**
2분 closing transition: Question → Task → Context → System → Feedback Loop를 회수하고 교육을 마친다.

**Time Management:**
Q&A 4분 + Closing Transition 2분 = 6분. Q&A는 4분에 마감하고 추가 질문을 이유로 시간을 늘리지 않는다.

**Fallback:**
LOCAL STATIC ARTIFACT — production/ACT_5.pptx의 S90와 production/preview/act5/S90.png를 사용한다. 원본 실행 캡처 또는 새로운 Trial 결과로 표현하지 않는다. 로컬 렌더링 검토 결과는 통합 평가 문서에 기록한다.

**Validation Status:**
REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.
