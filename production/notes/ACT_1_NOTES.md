# ACT 1 — Speaker Notes

Status: REVIEWED — accepted presentation revision. Source, screen cues, and operation guidance are aligned. Exact-file render and embedded-Notes results are recorded in the integrated revision evaluation. Windows, room, account, and timed rehearsal remain UNVERIFIED.

Validation history: 이전 제작본의 local Mac Keynote 렌더·구조 검토 기록은 Git history와 기존 ACT 평가 문서에 보존한다. 이전 제작본의 PASS를 새 수정본의 검증 완료로 승계하지 않는다.

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

1. (0:00–2:00) S09의 열린 질문을 회수하고 “같은 Repository를 보고 있다”는 조건을 고정한다.
2. (2:00–5:00) “filter 성능 개선해줘”와 오른쪽의 무엇을 바꿀지·보존할지·완료로 볼지 세 질문을 차례로 가리킨다. 특정 답을 채우지 않는다.
3. (5:00–7:00) Repository 접근만으로 남은 결정을 정할 수 있는지 질문하며 S11로 넘긴다. 실제 제품 실패 사례나 관찰 결과로 말하지 않는다.

화면 진행: 이 장은 빈 조건을 발견하는 데 쓴다. 오른쪽 세 질문을 하나씩 짚으며 답은 채우지 않는다. 다음 장의 테스트/구현 두 해석을 여기서 미리 비교하지 않는다.

Evidence / Source: BEAT-004, TRIAL-001, CLM-0002. TEACHING_MODEL / CONCEPTUAL. TRIAL-001의 실제 실패 사례가 아니다.

Claim Boundary: 접근 가능한 Repository가 Task의 목표·변경 범위·보존 조건·완료 증거를 대신 알려주지는 않는다는 과정의 모델이다. Codex 실패나 Trial 결과로 말하지 않는다.

Beginner Explanation: Agent에게 코드가 보인다는 사실과 내가 원하는 변경을 설명했다는 사실은 다르다. 바꿀 것과 끝의 기준을 적어야 한다.

Advanced Insight: Task goal, constraints, and verification remain separate from repository access. Do not infer deterministic agent behavior from the conceptual example.

C++ Vision Bridge: N/A.

Demo Operation: N/A.

Audience Interaction: Case 질문을 따라가며 무엇이 비어 있는지 생각하게 한다. 공개 답변이나 실습은 요구하지 않는다.

Transition: 어떤 Task 정보가 빠졌는지 약한 요청 비교로 확인한다.

Time Management: 7분을 질문과 세 개의 미정 경계에 쓴다. 새 Prompt 체크리스트나 해결책을 미리 소개하지 않는다.

Fallback: 정적 기본 경로 — 정적 슬라이드 `production/ACT_1.pptx` S10 또는 `production/preview/act1/S10.png` 사용. 응답이 없어도 7분 후 S11로 이동한다. 새 제작본의 렌더·경로 대조는 통합 단계에서 수행한다.

Validation Status: REVIEWED — DEC-0030에서 승인한 화면 강조와 운영 Cue를 정렬했다. 최종 PPT/Notes/PNG 대조와 렌더 검토 결과는 production/evaluation/FULL_DECK_PRESENTATION_POLISH.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 제품·계정, 실제 시간 리허설은 UNVERIFIED.

## S11 — 요청만으로는 의도가 보이지 않는다

Slide ID: S11

Working Title: 요청만으로는 의도가 보이지 않는다

ACT / Section: ACT 1 / 1B

Allocated Time: 4 minutes

Mode Split: Case 4 minutes

Primary Message: Repository를 볼 수 있어도 바꿀 범위와 완료 조건까지 알 수 있는 것은 아니다.

Opening Question: “Agent 입장에서 무엇을 결정해야 할까?”

Speaker Flow:

1. (0:00–0:45) “crop test 고쳐줘”를 읽고 교육용 구성 요청임을 밝힌다.
2. (0:45–3:00) 테스트와 구현 중 무엇을 바꾸라는 뜻인지 두 질문을 비교한다. 이어 목표의 세부·보존 조건·수정 범위·확인 근거·완료 조건을 짚는다.
3. (3:00–4:00) 특정 답을 제시하지 않고 남은 결정의 주체를 S12로 넘긴다.

화면 진행: 이 장은 같은 요청의 두 해석에 집중한다. 왼쪽 테스트 변경과 오른쪽 구현 변경을 비교한 뒤, 아래 미정 정보를 짚는다. S10의 세 질문을 다시 강의하지 않는다.

Evidence / Source: BEAT-004, CLM-0002. TEACHING_MODEL / CONCEPTUAL. 실제 Trial에서 사용한 약한 Prompt가 아니다.

Claim Boundary: `crop test 고쳐줘`는 수업용으로 구성한 예시다. 이 요청이 특정 Agent 실패를 일으켰다는 주장을 하지 않는다.

Beginner Explanation: 짧은 요청을 비난하지 않고, 그 안에 남아 있는 질문을 찾아본다.

Advanced Insight: Missing constraints are developer decisions that cannot be derived from repository access alone.

C++ Vision Bridge: N/A.

Demo Operation: N/A.

Audience Interaction: 두 해석과 아직 정해지지 않은 정보를 청중이 생각하도록 짧게 멈춘다. 공개 답이나 정답 분류를 요구하지 않는다.

Transition: Slide 12에서 같은 요청을 개발자 결정 관점으로 해부한다.

Time Management: 4분 안에 한 요청과 다섯 빈칸만 다룬다. 빈칸의 정답이나 해결책은 제시하지 않는다.

Fallback: 정적 기본 경로 — 정적 슬라이드 `production/ACT_1.pptx` S11 또는 `production/preview/act1/S11.png` 사용. 청중 응답 없이 진행한다. 새 제작본의 렌더·경로 대조는 통합 단계에서 수행한다.

Validation Status: REVIEWED — DEC-0030에서 승인한 화면 강조와 운영 Cue를 정렬했다. 최종 PPT/Notes/PNG 대조와 렌더 검토 결과는 production/evaluation/FULL_DECK_PRESENTATION_POLISH.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 제품·계정, 실제 시간 리허설은 UNVERIFIED.

## S12 — 개발자가 정해야 하는 경계

Slide ID: S12

Working Title: 개발자가 정해야 하는 경계

ACT / Section: ACT 1 / 1B

Allocated Time: 4 minutes

Mode Split: Case 3 minutes + Reflection 1 minute

Primary Message: Prompt의 실용적 가치는 문장 장식보다 Task ambiguity reduction에 있다.

Opening Question: “무엇을 바꾸고, 무엇을 유지하며, 어디까지 바꿔도 되는가?”

Speaker Flow:

1. (0:00–1:00) “무엇을 바꿀까?”와 “무엇을 유지할까?”를 짚는다.
2. (1:00–3:00) 허용 범위, 확인 근거, 완료 판단의 세 질문을 이어 읽는다. 이는 답이 아닌 개발자 판단 질문이다.
3. (3:00–4:00) 각자 익숙한 요청 하나를 떠올리는 조용한 Reflection으로 마친다. 요청문 작성이나 결과 공유를 시키지 않는다.

화면 진행: 이 장은 개발자가 판단할 다섯 질문을 번호 순서로 따라간다. 마지막 질문에서 1분 Reflection을 분리하고, 답이나 작성 과제를 요구하지 않는다.

Evidence / Source: BEAT-004, CLM-0002. TEACHING_MODEL / CONCEPTUAL. 특정 요청이 특정 실패를 반드시 만든다고 하지 않는다.

Claim Boundary: 다섯 질문은 수업용 질문 프레임이다. 특정한 단일 답이나 제품 기능으로 소개하지 않는다.

Beginner Explanation: 요청을 보내기 전에 바꿀 것, 지킬 것, 끝을 어떻게 볼지 묻는다.

Advanced Insight: Clarify scope, preserved contracts, acceptable change surface, and evidence before delegating.

C++ Vision Bridge: N/A.

Demo Operation: N/A.

Audience Interaction: 마지막 1분은 비공개 Reflection이다. 말하기, 노트북, Prompt 작성은 요구하지 않는다.

Transition: Slide 13에서 질문들을 실용적인 Task Specification 구조로 묶는다.

Time Management: Case 3분 후 Reflection 1분을 분리한다. 답을 제공하거나 공개 응답을 받지 않는다.

Fallback: 정적 기본 경로 — 정적 슬라이드 `production/ACT_1.pptx` S12 또는 `production/preview/act1/S12.png` 사용. 침묵은 정상 진행으로 본다. 새 제작본의 렌더·경로 대조는 통합 단계에서 수행한다.

Validation Status: REVIEWED — DEC-0030에서 승인한 화면 강조와 운영 Cue를 정렬했다. 최종 PPT/Notes/PNG 대조와 렌더 검토 결과는 production/evaluation/FULL_DECK_PRESENTATION_POLISH.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 제품·계정, 실제 시간 리허설은 UNVERIFIED.

## S13 — Task Specification의 다섯 책임

Slide ID: S13

Working Title: Task Specification의 다섯 책임

ACT / Section: ACT 1 / 1C

Allocated Time: 4 minutes

Mode Split: Lecture 4 minutes

Primary Message: Goal, Context, Constraints, Process, Verification은 작업을 구체화하는 교육용 틀이다.

Opening Question: “Agent가 작업을 검토 가능하게 수행하려면 무엇을 알아야 할까?”

Speaker Flow:

1. (0:00–0:45) Task Specification을 이 과정의 작업 구체화 모델로 소개한다.
2. (0:45–3:15) 하나의 패널에서 목표·맥락·제약·과정·검증을 위에서 아래로 짚는다. 각 행의 오른쪽 질문이 어떤 미정을 줄이는지 한 문장씩 설명한다.
3. (3:15–4:00) 다섯 책임을 모두 길게 적으라는 뜻이 아니라 작업에 필요한 경계를 검토할 틀이라고 정리하고 S14로 간다.

화면 진행: 이 장은 한 작업 요청에 다섯 책임을 묶는 구조를 보여준다. 왼쪽 Task Specification에서 오른쪽 행으로 이동하며 S12의 질문을 구조로 정리한다.

Evidence / Source: BEAT-005, CLM-0029, OQ-001, OQ-007. TEACHING_MODEL / CONCEPTUAL.

Claim Boundary: 다섯 항목은 과정에서 쓰는 Task Specification 모델이지 공식 OpenAI taxonomy나 universal law가 아니다.

Beginner Explanation: 요청에는 목표, 필요한 상황, 지켜야 할 경계, 작업 흐름, 확인 방법이 들어갈 수 있다.

Advanced Insight: Separate task intent from retained project facts, and identify which judgment remains with the developer.

C++ Vision Bridge: N/A.

Demo Operation: N/A.

Audience Interaction: 설명 중간에 다섯 책임이 줄이는 불확실성을 확인한다. 청중에게 작성 실습을 시키지 않는다.

Transition: Slide 14에서 다섯 책임을 짧은 Before / After에 적용한다.

Time Management: 네 분 동안 각 항목을 한 문장으로 설명한다. 별도 Best Practice 목록이나 제품 기능으로 확장하지 않는다.

Fallback: 정적 기본 경로 — 정적 슬라이드 `production/ACT_1.pptx` S13 또는 `production/preview/act1/S13.png` 사용. 새 제작본의 렌더·경로 대조는 통합 단계에서 수행한다.

Validation Status: REVIEWED — DEC-0030에서 승인한 화면 강조와 운영 Cue를 정렬했다. 최종 PPT/Notes/PNG 대조와 렌더 검토 결과는 production/evaluation/FULL_DECK_PRESENTATION_POLISH.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 제품·계정, 실제 시간 리허설은 UNVERIFIED.

## S14 — 더 긴 Prompt보다 분명한 경계

Slide ID: S14

Working Title: 더 긴 Prompt보다 분명한 경계

ACT / Section: ACT 1 / 1C + 1F

Allocated Time: 9 minutes

Mode Split: Lecture 6 minutes + Case 3 minutes

Primary Message: 유용성은 Prompt의 길이보다 Goal과 제약, 과정, 검증 경계가 분명한 데서 나온다.

Opening Question: “두 요청에서 실제로 달라진 정보는 무엇인가?”

Speaker Flow:

1. (0:00–2:00) 왼쪽의 짧은 요청을 읽고 같은 crop 작업을 비교한다고 고정한다.
2. (2:00–5:00) 오른쪽에서 추가된 목표·맥락, 제약, 과정, 검증 정보를 순서대로 짚는다. 양쪽 모두 한국어 요청이며 영어라서 좋아졌다는 인상을 만들지 않는다.
3. (5:00–6:00) 하단 C++ 연결에서 출력·API/ABI 보존 범위와 Release 검증 조건도 작업 전에 정할 수 있음을 짧게 말한다.
4. (6:00–9:00) Case 질문으로 어떤 정보가 추가됐는지 비교한다. 실제 약한/강한 Prompt 비교 실험이 아니며 길이 자체의 효과를 입증하지 않는다고 유지한다.

화면 진행: 이 장은 실제로 더해진 정보의 비교다. 짧은 요청→추가한 네 행→하단 C++ 적용 순서로 가리킨다. 앞의 다섯 질문을 다시 나열하는 시간을 줄이고 보존 조건과 완료 근거가 드러난 위치를 짚는다.

Evidence / Source: BEAT-005, TRIAL-002, CLM-0029, OQ-001, OQ-007. TEACHING_MODEL / CONCEPTUAL.

Claim Boundary: Before/After는 설명을 위한 개념 예시이며 Trial-002가 약한 Prompt와 구조화 Prompt의 우월성을 비교 검증했다는 뜻이 아니다.

Beginner Explanation: 긴 문장을 쓰는 것보다 바꿀 결과와 지킬 조건, 확인 방법을 드러내는 것이 도움이 되는 질문 틀이다.

Advanced Insight: Make the allowed change surface and completion evidence reviewable; do not claim a causal performance advantage.

C++ Vision Bridge: SUPPORTING footer strip — 출력·API/ABI의 보존 범위와 Release 검증 조건을 먼저 정하는 사례다. 특정 Windows, shell, IDE, hardware의 실제 사용법이나 검증 결과로 주장하지 않는다.

Demo Operation: N/A — the comparison is conceptual and is not the exact Trial-002 Prompt.

Audience Interaction: 마지막 Case 3분에는 두 요청에서 새로 명시된 책임을 마음속으로 비교한다. 발표 응답은 요구하지 않는다.

Transition: “이 요청을 받은 Agent는 수정부터 시작할까?”라는 질문으로 Trial 관찰에 들어간다.

Time Management: After는 네 줄의 비교 축으로 한정한다. 전체 Trial Prompt나 코드 지시를 화면에 복사하지 않는다. 시간이 부족하면 C++ inset을 생략한다.

Fallback: 정적 기본 경로 — 정적 비교 슬라이드 `production/ACT_1.pptx` S14 또는 `production/preview/act1/S14.png` 사용. Trial 결과로 대체하지 않는다. 새 제작본의 렌더·경로 대조는 통합 단계에서 수행한다.

Validation Status: REVIEWED — DEC-0030에서 승인한 화면 강조와 운영 Cue를 정렬했다. 최종 PPT/Notes/PNG 대조와 렌더 검토 결과는 production/evaluation/FULL_DECK_PRESENTATION_POLISH.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 제품·계정, 실제 시간 리허설은 UNVERIFIED.

## S15 — 먼저 무엇을 하는지 보자

Slide ID: S15

Working Title: 먼저 무엇을 하는지 보자

ACT / Section: ACT 1 / 1D

Allocated Time: 2 minutes

Mode Split: Lecture 2 minutes

Primary Message: 이 한 번의 관찰에서는 재현, 조사, 계획, 수정, 검증 순서를 확인할 수 있다.

Opening Question: “이 요청을 받은 Agent가 수정부터 시작할까?”

Speaker Flow:

1. (0:00–0:35) “이 요청을 받으면 수정부터 시작할까?”를 제시한다.
2. (0:35–1:35) 재현 → 조사 → 계획 → 수정 → 검증의 다섯 관찰 단계를 가리킨다. 화면은 WATCH 기준이며 결과를 미리 읽어 주는 요약이 아니다.
3. (1:35–2:00) 단일 과거 CLI 기록의 행동을 다음 두 장에서 대조한다고 알리고 S16으로 이동한다.

Evidence / Source: BEAT-006, TRIAL-002, INV-MATURITY-011. OBSERVED_PRODUCT; one historical Codex CLI run only.

Claim Boundary: TRIAL-002는 2026-09-28 macOS Codex CLI 0.154.0의 단일 실행 기록이다. Desktop, 계정, 반복성 또는 다른 모델을 증명하지 않는다.

Beginner Explanation: 코드 변경 전 어떤 행동을 먼저 살펴볼지 정하면 Demo를 따라가기 쉽다.

Advanced Insight: Keep requested workflow separate from the events evidenced in the recorded run.

C++ Vision Bridge: N/A.

Demo Operation: DEMO-05 / CAPTURED RECORD-BASED WATCH. 2분 Lecture 동안 제품 실행을 재생하지 않는다. 요청한 재현·조사·계획·수정·검증을 관찰 기준으로 제시한다. Trial source: `plan/DEMO_MATRIX.md`, TRIAL-002. 현재 Desktop surface나 실제 터미널 캡처를 보여 주지 않는다.

Audience Interaction: 관찰 순서를 마음속으로 따라오게 한다. 응답이나 실습을 요구하지 않는다.

Transition: Slide 16에서 조사와 변경의 핵심 장면을 보여준다.

Time Management: 2분 안에 관찰 기준만 설명한다. Trial 결과를 앞당겨 보여 주거나 현재 제품 UI를 재현하지 않는다.

Fallback: 정적 기본 경로 — 정적 WATCH 슬라이드 `production/ACT_1.pptx` S15 또는 `production/preview/act1/S15.png` 사용. 라이브 실행은 이 단계에서 하지 않는다. 새 제작본의 렌더·경로 대조는 통합 단계에서 수행한다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.
## S16 — 조사에서 한 줄 변경까지

Slide ID: S16

Working Title: 조사에서 한 줄 변경까지

ACT / Section: ACT 1 / 1D

Allocated Time: 4 minutes

Mode Split: Demo 4 minutes (CAPTURED)

Primary Message: failing test와 호출 경로를 확인한 뒤, half-open 범위 계약을 보존하는 최소 변경을 했다.

Opening Question: “수정 전에 어떤 근거를 확인했는가?”

Speaker Flow:

1. (0:00–1:00) 상단의 실패 테스트 → 호출 경로 → 계약 확인 → 수정 전 계획을 읽는다. 실패 테스트명은 `test_crop_excludes_end_coordinate`, 제품 호출 관계는 `cli.main → pipeline.process_image → transform.crop`이다.
2. (1:00–2:00) `[x_start, x_end)`가 끝 좌표를 제외하는 계약임을 확인한다. S05의 `crop(image, 1, 3)` 예시를 짧게 회수한다.
3. (2:00–3:15) 왼쪽 `row[x_start : x_end + 1]`에서 오른쪽 `row[x_start : x_end]`로 바뀐 실제 한 줄 diff를 가리킨다. 수정 전에 계획을 알린 기록이 있었다고 말한다.
4. (3:15–4:00) 이 입력의 너비 3이 계약대로 2가 되는 변화로 정리한다. 정적 소스·diff 재구성이며 새 실행이나 screenshot이 아님을 유지하고 S17로 넘긴다.

Evidence / Source: BEAT-006, TRIAL-002, INV-MATURITY-011. OBSERVED_PRODUCT, one recorded CLI run.

Claim Boundary: 실제 변경은 `src/graypipe/transform.py`의 crop slice 한 줄이다. 이 기록은 한 번의 Codex CLI 실행에 한정되며 Prompt 우월성, Desktop 동작 또는 일반 성공률을 증명하지 않는다.

Beginner Explanation: 실패한 Test와 기대 계약을 먼저 맞춘 뒤 꼭 필요한 한 줄만 바꿨다.

Advanced Insight: The code change matches the half-open public contract and is limited to the recorded diff; the plan checkpoint preceded editing.

C++ Vision Bridge: N/A.

Demo Operation: DEMO-05 / CAPTURED historical evidence. `production/ACT_1.pptx` S16의 실제 diff 재구성 도식을 사용한다. 실패 테스트·호출 경로·계약·수정 전 계획 → Before/After slice → 너비 변화를 순서대로 가리킨다. source test ID: `test_crop_excludes_end_coordinate`. Source: TRIAL-002 record, STATE-00 및 STATE-00-FIXED의 `src/graypipe/transform.py`. 전체 파일이나 새 실행을 보여 주지 않는다.

Audience Interaction: 변경 전에 확인한 근거를 청중이 화면 순서대로 따라오게 한다. 참가자의 코드 검토나 답변을 요구하지 않는다.

Transition: Slide 17에서 변경 결과를 어떤 확인으로 뒷받침했는지 본다.

Time Management: 4분 Demo 구간 안에서 관찰과 변경을 요약한다. 전체 로그와 파일을 보여 주지 않고, 다음 장의 검증 시간을 침범하지 않는다.

Fallback: 정적 기본 경로 — 정적 PPTX S16 또는 `production/preview/act1/S16.png` 사용. 시각 도식은 기록에서 재구성한 자료이며 원본 화면 캡처가 아니다. 실행 실패 상황은 없다: Live를 하지 않는다. 새 제작본의 렌더·경로 대조는 통합 단계에서 수행한다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.
## S17 — 변경 결과와 확인 증거

Slide ID: S17

Working Title: 변경 결과와 확인 증거

ACT / Section: ACT 1 / 1D

Allocated Time: 4 minutes

Mode Split: Demo 4 minutes (CAPTURED)

Primary Message: 이 사례의 결과는 생성된 코드뿐 아니라 명시된 검증과 diff 확인을 거친 변경이다.

Opening Question: “생성된 변경을 어떤 확인이 뒷받침하는가?”

Speaker Flow:

1. (0:00–0:45) 단일 TRIAL-002의 변경 뒤 기록임을 고정한다.
2. (0:45–2:45) 동작 확인(집중 3/3·전체 11/11), 실행 확인(CLI smoke PASS), 범위 확인(한 파일·한 줄·diff check)을 세 묶음으로 읽는다. 각각 확인한 범위가 다름을 설명한다.
3. (2:45–3:30) 하단의 성능 benchmark 미실행을 밝힌다. 이 테스트 통과를 성능 개선 근거로 바꾸지 않는다.
4. (3:30–4:00) 생성된 코드와 완료 판단의 차이로 S18에 넘긴다.

Evidence / Source: BEAT-007, INV-VERIFY-001, TRIAL-002, CLM-0029, CLM-0027. OBSERVED_PRODUCT, one Codex CLI run.

Claim Boundary: Focused test 3/3, full suite 11/11, CLI smoke PASS, diff 1 file / 1 line, and `git diff --check` PASS are the recorded results of TRIAL-002. They do not establish every input, platform, or future product run.

Beginner Explanation: 완료라고 말할 때 코드와 함께 어떤 확인이 있었는지 보여 준다.

Advanced Insight: Each check supports a bounded claim: targeted behavior, existing suite coverage, one sample CLI path, and change scope. No benchmark was run.

C++ Vision Bridge: N/A.

Demo Operation: DEMO-05 / CAPTURED result summary. 세 시각 묶음 안의 다섯 기록된 확인을 설명한다. 실제 터미널 screenshot이나 새 실행이 아니다. Focused 3/3, full 11/11, CLI PASS, one file/line, diff check PASS만 사용한다. Benchmark는 미실행이다.

Audience Interaction: 각 Check가 무엇을 뒷받침하는지 읽게 한다. 청중에게 테스트 실행을 요구하지 않는다.

Transition: 생성 자체와 완료 판단을 구분하는 Slide 18로 간다.

Time Management: 세 묶음에 각각 한 가지 확인 범위를 말한다. 다섯 로그를 전문으로 읽지 않는다. 마지막 30초에 생성과 완료의 차이로 전환한다.

Fallback: 정적 기본 경로 — 정적 PPTX S17 또는 `production/preview/act1/S17.png` 사용. 수치는 TRIAL-002 기록에 한정한다; 새로운 pass 수치를 추가하지 않는다. 새 제작본의 렌더·경로 대조는 통합 단계에서 수행한다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.
## S18 — Generated ≠ Done

Slide ID: S18

Working Title: Generated ≠ Done

ACT / Section: ACT 1 / 1E

Allocated Time: 3 minutes

Mode Split: Lecture 3 minutes

Primary Message: Task는 결과뿐 아니라 적절한 검증과 review를 포함해야 한다.

Opening Question: “어떤 Check가 어떤 Claim을 뒷받침하는가?”

Speaker Flow:

1. (0:00–0:45) 왼쪽 “코드가 나왔다”에서 오른쪽 “완료라고 말할 수 있나?”로 시선을 옮긴다.
2. (0:45–1:30) 가운데 동작 테스트·샘플 실행·변경 검토를 세 판단 근거로 설명한다. S17에서 본 관찰 사실은 하단 출처의 범위로만 회수한다.
3. (1:30–2:30) 성능 개선을 주장하는 작업에는 해당 입력·환경의 측정도 필요할 수 있다고 설명한다. TRIAL-002에서 benchmark가 실행됐다는 뜻이 아니다.
4. (2:30–3:00) 주장마다 필요한 근거가 다르다는 S19로 넘긴다.

Evidence / Source: BEAT-007, INV-VERIFY-001, TRIAL-002, CLM-0029, CLM-0027. OBSERVED_PRODUCT and separate TEACHING_MODEL.

Claim Boundary: 본문의 생성→완료 판단 관계와 확인 방법은 이 과정의 TEACHING_MODEL이다. 하단 출처에서 회수하는 TRIAL-002의 관찰은 테스트·CLI·diff에 한정된다. Benchmark는 조건부 검증 예이며 TRIAL-002에서 수행하지 않았다.

Beginner Explanation: 코드가 생성됐다는 사실은 완료를 판단하는 한 가지 정보일 뿐이다.

Advanced Insight: Choose checks from the task’s risk and the exact claim being made; do not demand every check for every task.

C++ Vision Bridge: Slide 19 contains the approved Supporting C++ transfer inset. Do not duplicate it here.

Demo Operation: TRIAL-002 verification callback only; DEMO-05의 8분 구간 밖이다. 별도 관찰 카드나 새 결과를 보여 주지 않고 하단 출처로 과거 확인 범위를 회수한다. 본문은 교육 모델로 설명한다.

Audience Interaction: 별도 Q&A 시간은 배정되지 않았다. 청중에게 생각할 질문을 주고 다음 장에서 범위를 보여 준다.

Transition: Slide 19에서 각 Check가 뒷받침하는 범위를 비교한다.

Time Management: 세 분 안에 기록 사실과 Teaching Model을 분리한다. S17의 다섯 수치를 다시 읽지 않는다.

Fallback: 정적 PPTX S18 또는 `production/preview/act1/S18.png`를 사용한다. 생성·완료의 관계는 교육 모델, TRIAL-002는 하단에 표시된 과거 관찰로 구분한다. 새 렌더 검토는 통합 단계에서 수행한다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.
## S19 — Check마다 확인하는 범위

Slide ID: S19

Working Title: Check마다 확인하는 범위

ACT / Section: ACT 1 / 1E + 1F

Allocated Time: 5 minutes

Mode Split: Lecture 4 minutes + Reflection 1 minute

Primary Message: Check 하나가 모든 정확성을 증명하지는 않는다.

Opening Question: “이 Check로 무엇까지 말할 수 있는가?”

Speaker Flow:

1. (0:00–1:00) 표가 특정 테스트의 만능 효과를 뜻하지 않는다고 소개한다. 실제 TRIAL-002는 집중·전체 테스트, CLI smoke, diff를 확인했다는 하단 출처를 짚는다.
2. (1:00–3:00) 확인 방법 → 말할 수 있는 범위의 다섯 행을 설명한다. 성능 측정 행은 교육 모델이며 TRIAL-002에서 benchmark를 실행하지 않았다고 밝힌다.
3. (3:00–4:00) C++의 Release 실행, API/ABI, 대상 데이터도 어떤 주장을 확인할지에 맞춰 고르는 경계로 연결한다.
4. (4:00–5:00) 익숙한 Check가 뒷받침하는 Claim을 개인적으로 떠올리는 Reflection으로 마친다.

Evidence / Source: BEAT-007, INV-VERIFY-001, TRIAL-002, CLM-0029, CLM-0027. Actual checks are separate from the TEACHING_MODEL mapping.

Claim Boundary: Focused/full tests, CLI smoke, and diff review are actual TRIAL-002 checks. The mapping is a course model; benchmark was not run. No single check proves all correctness.

Beginner Explanation: Focused test는 바뀐 동작을, 전체 Test는 기존 suite의 범위를, smoke는 sample 실행 경로를 확인한다.

Advanced Insight: For C++ projects, match Release build, API/ABI checks, regression tests, and measurement to the claim and risk. These are illustrative engineering patterns, not this Demo repository’s tooling.

C++ Vision Bridge: Supporting Bridge: `build claim → Release build`; `compatibility claim → API / ABI review`; `performance claim → benchmark with named workload`. No Windows, shell, IDE, or hardware setup is asserted.

Demo Operation: TRIAL-002 evidence callback outside the 8-minute Demo slot. 본문 표는 일반적인 check-to-claim 교육 모델이다. 하단 출처에는 실제 Trial에서 수행한 확인만 따로 표시한다. Benchmark 미실행 경계를 유지하고 새 수치나 실행을 추가하지 않는다.

Audience Interaction: 마지막 1분은 각자가 익숙한 Check와 그 Check가 뒷받침하는 Claim을 조용히 생각한다. 결과 발표는 요구하지 않는다.

Transition: 다음 작업에도 반복할 정보를 청중이 구분하도록 질문을 연다.

Time Management: Lecture 4분과 Reflection 1분을 분리한다. Advanced C++ examples are optional under time pressure; keep the scope labels.

Fallback: 정적 PPTX S19 또는 `production/preview/act1/S19.png`를 사용한다. 표의 일반적인 범위와 하단 Trial 출처를 구분한다. 새 렌더 검토는 통합 단계에서 수행한다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.
## S20 — 이번 Task인가, 계속 유지할 Project 정보인가?

Slide ID: S20

Working Title: 이번 Task인가, 계속 유지할 Project 정보인가?

ACT / Section: ACT 1 / 1G

Allocated Time: 3 minutes

Mode Split: Reflection 1 minute + Q&A 2 minutes

Primary Message: 두 종류의 정보를 구분할 필요가 있음을 먼저 인식한다.

Opening Question: “매번 Prompt에 반복해서 쓰는 내용 중 이번 Task에만 필요한 것은 무엇이고, Project가 계속 유지해야 할 것은 무엇인가?”

Speaker Flow:

1. (0:00–1:00) 최근 요청에 썼던 문장 하나를 떠올리고 “이번 작업에만?”과 “다음 작업에도?” 중 어디에 해당할지 개인적으로 생각한다. 화면의 두 영역은 비워 둔다.
2. (1:00–3:00) 자발적인 Q&A를 받는다. 답이나 분류 기준을 미리 공개하지 않는다. 침묵도 정상 진행이다.
3. (3:00) S21에서 후보 예시를 함께 확인하겠다고 전환한다.

Evidence / Source: BEAT-007 → BEAT-008 handoff, CLM-0029, CLM-0027, CLM-0003, CLM-0005. TEACHING_MODEL.

Claim Boundary: 두 Bucket은 Reflection을 위한 과정의 모델이다. 이 장에서는 정답, 제품 기능, AGENTS.md 또는 완전한 분류를 제시하지 않는다.

Beginner Explanation: 이번 요청에만 필요한 말과 여러 번 반복할 수 있는 규칙이 다를 수 있음을 생각한다.

Advanced Insight: Consider information lifetime and scope without deciding the storage mechanism yet.

C++ Vision Bridge: N/A.

Demo Operation: N/A.

Audience Interaction: 순서: Reflection 1분 후 Q&A 2분. Reflection은 사적 생각 시간이고 공유는 자발적이다. 응답이 없으면 질문을 한 번 더 읽고 진행한다.

Transition: Slide 21에서 Reflection/Discussion을 회수하고 “왜 Project 설명을 매번 다시 쓰는가?”라는 ACT 2 질문으로 넘긴다.

Time Management: Reflection 1분, Q&A 2분을 보존한다. 긴 토론이나 개인 업무 공개를 요구하지 않는다.

Fallback: 정적 기본 경로 — 정적 질문 슬라이드 `production/ACT_1.pptx` S20 또는 `production/preview/act1/S20.png` 사용. 공유 응답이 없어도 다음으로 진행한다. 새 제작본의 렌더·경로 대조는 통합 단계에서 수행한다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.
## S21 — 반복하는 설명을 두 범주로 나누기

Slide ID: S21

Working Title: 반복하는 설명을 두 범주로 나누기

ACT / Section: ACT 1 / 1G

Allocated Time: 6 minutes

Mode Split: Reflection 1 minute + Transition 3 minutes + Q&A 2 minutes

Primary Message: Task 정보와 Project 정보는 수명과 적용 범위가 다르다.

Opening Question: “이번 Task에만 필요한 정보와 Project가 계속 유지할 정보는 무엇일까?”

Speaker Flow:

1. (0:00–1:00, Reflection) S20의 두 질문을 회수하고 화면의 후보가 자신의 작업에서도 같은 수명·범위인지 조용히 생각하게 한다.
2. (1:00–2:00, Transition) crop 경계 수정·이번 README 수정과, 계속 유지할 의존성 추가 근거·테스트 명령의 후보 예시를 비교한다. 유일한 정답이나 실제 STATE-01 원문이라고 하지 않는다.
3. (2:00–4:00, Transition) 정보의 수명과 적용 범위 차이를 정리하고 “Project 정보를 왜 매번 Prompt에 다시 적고 있을까?”를 ACT 2의 질문으로 남긴다.
4. (4:00–6:00, Q&A) 자발적인 질문을 받고 6분에 ACT 2로 이동한다. 질문이 없으면 다음 문제를 다시 읽고 정시에 넘긴다.

화면 진행: 이 장의 두 열은 다음 ACT로 넘길 분류 후보다. 이번 목표와 여러 작업에 남길 사실의 수명이 다르다는 질문만 남긴다. 아직 S24 관찰 결과를 근거처럼 회수하지 않는다.

Evidence / Source: BEAT-007, BEAT-008, TRANS-003, CLM-0029, CLM-0027, CLM-0003, CLM-0005. TEACHING_MODEL / CONCEPTUAL.

Claim Boundary: 항목은 수명과 적용 범위를 생각하게 하는 교육용 후보 예시다. 화면의 의존성 예시는 실제 STATE-01 지침처럼 작업상 정당한 근거가 있으면 추가할 수 있다는 조건을 보존한다. 이 장은 그 지침의 실행 효과를 관찰한 결과가 아니다. 유일한 정답·classification test·제품 메커니즘으로 말하지 않는다. AGENTS.md는 이 장에서 답으로 제시하지 않는다.

Beginner Explanation: 요청 한 번에만 필요한 정보와 프로젝트가 계속 참고할 수 있는 정보를 구별해 본다.

Advanced Insight: Information reuse scope and lifetime may differ; the next ACT will examine the repeated-fact problem before introducing a mechanism.

C++ Vision Bridge: N/A.

Demo Operation: N/A.

Audience Interaction: Reflection 1분 후 map 순서대로 ACT 2 Transition 3분, Q&A 2분. 예시는 후보로만 말하고, 자발적 응답을 받되 정답 분류를 평가하지 않는다.

Transition: “그런데 Project 정보를 왜 매번 Prompt에 다시 적고 있을까?”

Time Management: 0–1분 Reflection, 1–4분 Transition, 4–6분 Q&A. 기존 Notes의 1–5분 전환/5–6분 Q&A 불일치를 승인된 Mode Split 1+3+2로 정렬한다. Project Context 해결책이나 AGENTS.md는 미리 공개하지 않는다.

Fallback: 정적 기본 경로 — 정적 비교 슬라이드 `production/ACT_1.pptx` S21 또는 `production/preview/act1/S21.png` 사용. Q&A가 없어도 마지막 Transition 질문 후 ACT 2로 간다. 새 제작본의 렌더·경로 대조는 통합 단계에서 수행한다.

Validation Status: REVIEWED — DEC-0030에서 승인한 화면 강조와 운영 Cue를 정렬했다. 최종 PPT/Notes/PNG 대조와 렌더 검토 결과는 production/evaluation/FULL_DECK_PRESENTATION_POLISH.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 제품·계정, 실제 시간 리허설은 UNVERIFIED.
