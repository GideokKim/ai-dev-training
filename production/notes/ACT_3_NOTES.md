# ACT 3 — Speaker Notes

Status: ALIGNED — DEC-0038의 82장 번호와 운영 지침을 정렬했다. 신규 제작본의 렌더·내장 Notes 대조는 production/evaluation/PROMPT_TIMELINE_REVISION.md에서 별도로 기록한다. 기존 81장판의 PASS를 승계하지 않는다. Windows, room, account, and timed rehearsal remain UNVERIFIED.

Authority: `plan/SLIDE_MAP.md`, `plan/SLIDE_TEMPLATE_MAP.md`, `plan/VISUAL_SPEC.md`, `plan/VISUAL_TEMPLATE_FREEZE.md`, `plan/SPEAKER_NOTES_ARCHITECTURE.md`, `plan/SPEAKER_NOTES_FREEZE.md`, `plan/PRODUCTION_PLAN.md`, `plan/CLAIM_FREEZE.md`, `plan/DEMO_MATRIX.md`, `plan/DEMO_RUNBOOK_SPEC.md`, and `plan/DECISIONS.md`.

Historical continuity revision: DEC-0032 (2026-10-20), 당시 80장판. Historical handoff review: production/evaluation/FULL_DECK_CONTINUITY_REVISION.md. Prior validation history remains below.

## S39 — 서로 다른 Performance Task, 반복되는 절차

Slide ID: S39

Working Title: 서로 다른 Performance Task, 반복되는 절차

ACT / Section: ACT 3 / 3A

Allocated Time: 5 minutes

Mode Split: Case 5 minutes

Primary Message: TRIAL-006의 `resize_nearest`와 TRIAL-007의 `normalize`처럼 서로 다른 목표에서도 유사한 performance procedure가 반복될 수 있다.

Opening Question: “Task가 달라도 왜 같은 작업 방법을 계속 쓰고 있지?”

Speaker Flow:

1. (0:00–2:00) 처음 30초에 그림으로 작업 대상을 확인한다. 왼쪽은 크기 변경, 오른쪽은 선언된 max_value를 255로 스케일하는 값 범위 변환이다. 0→0, 2048→128, 4095→255를 설명할 수 있지만 화질 개선으로 표현하지 않는다. 이어 두 Task goal을 비교한다.
2. (2:00–4:00) 두 기록에 반복된 baseline, 조사, 계획, 변경, test, benchmark, 비교, review를 강조한다.
3. (4:00–5:00) 반복 관찰과 원인 귀속을 분리하고 Prompt-only attribution이 PARTIAL임을 밝힌다. 앞 ACT에서 남긴 질문을 회수해, 서로 다른 목표에서도 같은 조사·검증 절차가 다시 쓰였다는 점을 다음 설계 문제로 삼는다.

화면 진행: 상단 두 그림은 목표 차이만 짧게 확인한다. 이후 중앙의 공통 절차를 Baseline부터 Review까지 차례로 가리키며 두 Task에서 반복된 부분을 본다. 그림은 실제 입출력이나 성능 전후 비교가 아니다.

Evidence / Source: TRIAL-006 (`resize_nearest`), TRIAL-007 (`normalize`), BEAT-018/020. Codex CLI 기록 실행의 workflow 비교. 함수 계약 참고: Demo STATE-04의 src/graypipe/transform.py 및 normalize.py. 삽화 출처: prototype/image-illustration-pilot/assets/S37.png, built-in image_gen, 2026-10-18. 생성 프롬프트: prototype/image-illustration-pilot/PROMPTS.md. 실제 화면·현장 사진·관찰 자료가 아니다.

Claim Boundary: 유사한 절차가 관찰됐지만 Prompt만의 효과로 귀속하지 않는다. 개별 성능 결과는 해당 코드·입력·환경에 한정한다. 그림은 기능 설명용 개념 예시이며 Trial의 입력·출력 파일이나 최적화 전후 결과가 아니다.

Beginner Explanation: 서로 다른 작업에서도 조사하고 확인하는 순서가 반복될 수 있다.

Advanced Insight: Task별 목표와 지속해서 재사용할 절차를 구분하고, Global Harness가 미친 영향을 고려한다.

C++ Vision Bridge: N/A.

Demo Operation: 위는 기능 설명용 AI 삽화, 아래는 TRIAL-006/007 기록에서 확인한 반복 절차 요약이다. 같은 grayscale tile을 크기만 달리하거나 동일 크기로 배치해 작업의 차이를 설명한다. 새로운 실행이나 실제 터미널 화면이라고 말하지 않는다.

Audience Interaction: 두 Task의 공통 절차를 잠시 관찰하게 한다. 공개 답변은 요구하지 않는다.

Transition: “Project 지식과 작업 절차는 각각 어떤 질문에 답할까?”

Time Management: Case 5분을 두 Task 비교, 공통 절차, attribution 한계 순으로 쓴다. 수치 설명으로 확장하지 않는다.

Fallback: 정적 발표 경로는 production/preview/act3/S39.png와 production/preview/full/S39.png다. 같은 그림을 가리키며 원래 질문과 Claim 경계를 설명한다. 설명용 삽화를 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — DEC-0030에서 승인한 화면 강조와 운영 Cue를 정렬했다. 최종 PPT/Notes/PNG 대조와 렌더 검토 결과는 production/evaluation/FULL_DECK_PRESENTATION_POLISH.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 제품·계정, 실제 시간 리허설은 UNVERIFIED.

## S40 — Project 사실과 작업 절차는 다르다

Slide ID: S40

Working Title: Project 사실과 작업 절차는 다르다

ACT / Section: ACT 3 / 3A

Allocated Time: 4 minutes

Mode Split: Lecture 4 minutes

Primary Message: Project에서 일반적으로 참인 사실과 반복되는 작업 방법은 서로 다른 설계 문제다.

Opening Question: “Agent가 알아야 할 것과 따라야 할 방법은 같은가?”

Speaker Flow:

1. (0:00–1:00) 왼쪽 crop의 끝 열 제외 계약을 ‘무엇이 참인가?’와 연결한다.
2. (1:00–3:00) 오른쪽 변경 전 측정과 동일 입력 비교를 ‘어떤 순서로 일할까?’와 연결한다. 화면 아래의 현재 목표 질문은 Task Prompt의 책임이다.
3. (3:00–4:00) 사실과 절차는 둘 다 Prompt 밖에 놓일 수 있지만 유지할 책임이 다르다고 정리한다. 아직 Harness 전체 정의를 완성하지 않는다.

화면 진행: 문장을 무엇이 참인가/어떻게 일하는가/지금 무엇을 원하는가로 분류한다. 정답 시험을 진행하지 않는다. 다음 장은 이 세 책임을 하나의 Task에 함께 적용한다.

Evidence / Source: BEAT-019, TRIAL-006/007. TEACHING_MODEL / CONCEPTUAL.

Claim Boundary: 교육용 구분이다. 공식 제품 분류나 특정 제품 기능이라고 표현하지 않는다.

Beginner Explanation: 프로젝트 설명은 무엇이 참인지 말하고, workflow는 어떤 순서로 일할지 말한다.

Advanced Insight: Project Context를 늘리는 것만으로 반복 절차의 유지 문제가 해결되지는 않는다.

C++ Vision Bridge: N/A.

Demo Operation: N/A.

Audience Interaction: 세 질문과 항목을 조용히 따라오게 한다. 분류 실습은 요구하지 않는다.

Transition: “이 세 책임을 normalize 성능 조사 하나에 함께 적용해보겠습니다.”

Time Management: 4분 동안 세 질문의 책임만 구분한다. Harness 전체 정의는 아직 제시하지 않는다.

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_3.pptx`의 S40 또는 `production/preview/act3/S40.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — DEC-0030에서 승인한 화면 강조와 운영 Cue를 정렬했다. 최종 PPT/Notes/PNG 대조와 렌더 검토 결과는 production/evaluation/FULL_DECK_PRESENTATION_POLISH.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 제품·계정, 실제 시간 리허설은 UNVERIFIED.

## S41 — Task, Context, Workflow의 역할

Slide ID: S41

Working Title: Task, Context, Workflow의 역할

ACT / Section: ACT 3 / 3B

Allocated Time: 5 minutes

Mode Split: Lecture 5 minutes

Primary Message: Task Prompt는 현재 목표, Project Context는 사실과 제약, Reusable Workflow는 특정 작업을 수행하는 방법을 담는다.

Opening Question: “normalize 성능 조사 하나에 적용하면, 현재 목표와 Project 사실, 반복 절차는 각각 무엇일까?”

Speaker Flow:

1. (0:00–1:00) 앞 장에서 나눈 세 책임을 normalize 성능 조사라는 한 Task에 함께 적용한다. 첫 행을 이번 Task의 목표로 읽고, 아래 두 행은 그 목표를 수행할 때 지킬 사실과 재사용할 절차로 연결한다.
2. (1:00–2:30) 둘째 행에서 기존 이미지 동작과 공개 계약은 작업 중 지켜야 할 Project Context임을 짚는다.
3. (2:30–4:00) 셋째 행의 baseline → 조사 → 검증 → 비교를 재사용 Workflow와 연결한다.
4. (4:00–5:00) 세 책임의 위치가 Prompt 밖일 수 있다는 것과 책임이 같다는 것을 구분한다.

화면 진행: normalize라는 한 목표를 기준으로 Task Prompt, Project Context, Reusable Workflow가 각각 맡는 질문을 연결한다. S40의 분류 예시를 다시 나열하지 않는다.

Evidence / Source: BEAT-019, TRIAL-006/007. TEACHING_MODEL / CONCEPTUAL.

Claim Boundary: 세 Layer는 교육용 모델이다. Harness 전체 정의나 제품의 공식 분류로 부르지 않는다.

Beginner Explanation: 지금 원하는 일, 계속 유효한 프로젝트 정보, 반복할 작업 순서를 나눠 볼 수 있다.

Advanced Insight: 같은 위치에 저장될 수 있어도 소유권, 갱신 주기, Task별 적용은 다를 수 있다.

C++ Vision Bridge: N/A.

Demo Operation: N/A.

Audience Interaction: 각 Layer 예시를 조용히 따라오게 한다. 노트북 실습은 없다.

Transition: Slide 42에서 반복 절차를 repository-owned asset으로 옮길지 묻는다.

Time Management: 5분 동안 세 책임과 한 개의 workflow 예시만 설명한다.

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_3.pptx`의 S41 또는 `production/preview/act3/S41.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — DEC-0030에서 승인한 화면 강조와 운영 Cue를 정렬했다. 최종 PPT/Notes/PNG 대조와 렌더 검토 결과는 production/evaluation/FULL_DECK_PRESENTATION_POLISH.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 제품·계정, 실제 시간 리허설은 UNVERIFIED.

## S42 — 반복 절차를 Skill로 옮길 수 있을까?

Slide ID: S42

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

Transition: Slide 43에서 TRIAL-008의 발견과 명시적 호출 기록을 확인한다.

Time Management: 4분 중 3분은 문제와 후보를 설명하고, 마지막 1분에 product check 경계를 둔다.

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_3.pptx`의 S42 또는 `production/preview/act3/S42.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

## S43 — Skill을 어떻게 발견하고 호출할까?

Slide ID: S43

Working Title: Skill을 어떻게 발견하고 호출할까?

ACT / Section: ACT 3 / 3C

Allocated Time: 5 minutes

Mode Split: Demo 5 minutes (HYBRID planned; activation unverified)

Primary Message: TRIAL-008에서 Codex CLI 0.154.0의 `/skills` 목록으로 repository Skill을 찾고 `$graypipe-performance`를 명시적으로 호출했으며, 실행 trace에 Skill 본문이 있었다.

Opening Question: “반복할 작업 절차를 Repository에서 어떻게 찾고 불러올까?”

Speaker Flow:

1. (0:00–1:00) 세 단계는 TRIAL-008 기록을 읽기 좋게 재구성한 도식이며 실제 제품 UI 캡처가 아님을 밝힌다.
2. (1:00–2:30) /skills 목록에서 graypipe-performance와 잘린 설명이 표시된 기록을 가리킨다. 그 selector 화면에 Skill 경로가 표시됐다고 말하지 않는다.
3. (2:30–4:00) 명시적 $graypipe-performance 호출과 image_statistics 작업 목표를 보여준 뒤, 실행 trace에서 Skill 경로·본문 포함을 확인했다는 세 번째 행으로 이동한다.
4. (4:00–5:00) Codex CLI 0.154.0에서 확인한 범위다. 현재 Desktop, 암묵적 호출, 교육 계정의 표면은 별도 확인 대상으로 남긴다.

Evidence / Source: TRIAL-008, DEC-0017, BEAT-021. Codex CLI 0.154.0, 명시적 호출, disposable workspace. 시각 자료는 기록의 재구성이다.

Claim Boundary: Product UI 스크린샷이나 현재 Codex Desktop 동작으로 표현하지 않는다. Skill path는 selector가 아니라 실행 trace에서 확인됐다. Implicit invocation은 테스트하지 않았다.

Beginner Explanation: 기록된 CLI 실행에서 Skill을 목록으로 찾고, 호출 표기를 입력해 사용했다.

Advanced Insight: Selector의 발견 증거와 실행 context의 본문 증거를 구별한다. 다른 surface·계정에 일반화하지 않는다.

C++ Vision Bridge: N/A.

Demo Operation: 기본 경로는 재구성된 TRIAL-008 기록이다. 실제 Codex CLI 실행으로 전환하지 않는다. 현재 제품 표면은 REQUIRES PRODUCT CHECK.

Audience Interaction: 발견, 명시적 호출, 본문 확인의 세 단계를 따라오게 한다. 조작을 요구하지 않는다.

Transition: “다음에는 normalize와 image_statistics의 요청을 비교하겠습니다. 목표가 다른 두 Task에서 공통 절차를 어디에 두었는지 보겠습니다.”

Time Management: 발견 1.5분, 호출·본문 근거 1.5분, 범위 제한 1분. 실시간 제품 설명을 추가하지 않는다.

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_3.pptx`의 S43 또는 `production/preview/act3/S43.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

## S44 — 절차의 책임이 Prompt에서 Repository로 이동

Slide ID: S44

Working Title: 절차의 책임이 Prompt에서 Repository로 이동

ACT / Section: ACT 3 / 3C

Allocated Time: 6 minutes

Mode Split: Demo 3 minutes (HYBRID planned; activation unverified) + Case 3 minutes

Primary Message: TRIAL-007의 긴 Prompt가 포함하던 절차를 TRIAL-008에서는 명시적으로 호출한 Skill에 맡기고 Prompt에는 목표와 Task별 제약을 남겼다.

Opening Question: “목표가 다른 두 성능 Task에서도, 공통 절차를 둔 위치는 어떻게 달랐을까?”

Speaker Flow:

1. (0:00–1:30) normalize와 image_statistics는 목표가 다른 Task이므로 성능 결과를 맞대는 장이 아님을 밝힌다. 두 요청에서 공통 절차를 어디에 두었는지에 초점을 맞추고, TRIAL-007의 goal, 제약, 긴 procedure를 요약한다.
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

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_3.pptx`의 S44 또는 `production/preview/act3/S44.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

## S45 — 답을 담지 않는 Workflow

Slide ID: S45

Working Title: 답을 담지 않는 Workflow

ACT / Section: ACT 3 / 3D

Allocated Time: 3 minutes

Mode Split: Lecture 3 minutes

Primary Message: Reusable Skill은 검증 절차를 담고 특정 최적화 답이나 측정 결과를 미리 정답으로 고정하지 않는다.

Opening Question: “Skill이 작업 방법을 담는다면, 어디까지 미리 정해도 될까?”

Speaker Flow:

1. (0:00–1:00) 실제 Skill 발췌의 ‘편집 전 재현 가능한 baseline’과 ‘근거가 없으면 no-change도 유효’ 두 지시를 가리킨다. 영어를 모두 낭독하지 않고 한국어로 뜻을 설명한다.
2. (1:00–2:00) 아래의 알고리즘, 실제 측정값, 감수할 trade-off는 이번 Task에서 결정할 내용임을 구분한다.
3. (2:00–3:00) Skill에 특정 알고리즘·Trial 숫자를 정답으로 넣지 않았음을 확인하고, 실제 후보 비교로 넘어간다.

화면 진행: 한국어 뜻으로 baseline과 no-change 판단을 설명한 뒤 실제 영문 원문 두 문장을 확인한다. Skill에 최적화 답이 들어 있다는 인상을 주지 않는다.

Evidence / Source: TRIAL-008, `graypipe-performance` Skill, DEC-0017, BEAT-022. OBSERVED_PRODUCT / TEACHING_MODEL.

Claim Boundary: 절차 재사용은 관찰됐지만 Skill이 더 나은 최적화 답을 제공한다는 근거는 아니다. Workflow는 task 결과를 고정하지 않는다.

Beginner Explanation: 작업 순서는 재사용할 수 있지만, 어떤 답이 맞는지는 매번 확인해야 한다.

Advanced Insight: Input, runtime, benchmark, trade-off를 procedure definition과 섞지 않는다.

C++ Vision Bridge: N/A.

Demo Operation: STATE-04의 `.agents/skills/graypipe-performance/SKILL.md`에서 확인한 두 문장만 발췌한 정적 화면을 사용한다. 코드/제품 UI screenshot으로 표현하지 않으며 전체 Skill 본문을 낭독하지 않는다.

Audience Interaction: 왼쪽의 절차와 오른쪽의 Task 판단을 구별하도록 안내한다.

Transition: “실제로 후보를 선택할 때는 무엇을 근거로 삼았을까?”

Time Management: 3분 동안 두 책임만 구분하며 algorithm 설명은 생략한다.

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_3.pptx`의 S45 또는 `production/preview/act3/S45.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — DEC-0030에서 승인한 화면 강조와 운영 Cue를 정렬했다. 최종 PPT/Notes/PNG 대조와 렌더 검토 결과는 production/evaluation/FULL_DECK_PRESENTATION_POLISH.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 제품·계정, 실제 시간 리허설은 UNVERIFIED.

## S46 — 측정으로 후보를 고르다

Slide ID: S46

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

Claim Boundary: 정확한 candidate 수치는 표시하지 않는다. Candidate 결과를 S47의 formal state benchmark와 섞지 않는다. Skill이 algorithm이나 결과를 만들었다고 하지 않는다.

Beginner Explanation: 적은 메모리만 보고 선택하지 않고 같은 조건에서 실행시간과 정확성을 함께 확인했다.

Advanced Insight: Candidate comparison과 named product-state before/after 측정은 Evidence 단계가 다르다.

C++ Vision Bridge: N/A.

Demo Operation: 두 후보의 Python 할당량과 실행 시간 정성 비교를 사용한다. 후보별 새 숫자나 측정 그래프를 추가하지 않는다. 공식 STATE-04 전후 수치는 다음 S47에서 별도로 보여준다.

Audience Interaction: Case 질문을 제시하고 실행시간과 메모리의 trade-off를 생각하게 한다.

Transition: “선택한 변화는 어떤 검증을 거쳐 제품 상태에 반영됐을까?”

Time Management: 5분 중 3분은 두 후보 차이, 1분은 correctness guard, 1분은 evidence 경계에 쓴다.

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_3.pptx`의 S46 또는 `production/preview/act3/S46.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

## S47 — Working Harness Success

Slide ID: S47

Working Title: Working Harness Success

ACT / Section: ACT 3 / 3D

Allocated Time: 5 minutes

Mode Split: Case 5 minutes

Primary Message: STATE-04 → STATE-04-PERF의 bounded `image_statistics` 변경은 기록된 조건에서 median과 traced allocation이 달랐고 정해진 tests, CLI, benchmark guards를 통과했다.

Opening Question: “조사와 비교가 실제로 확인 가능한 결과로 이어졌을까?”

Speaker Flow:

1. (0:00–1:00) 이전 장의 후보 선택을 회수한다. 정식 STATE-04 baseline에서 변경한 결과이며 TRIAL-008의 후보 수치를 재사용한 것이 아님을 밝힌다.
2. (1:00–2:30) 0에서 시작하는 실행 시간 막대를 변경 전 15.468 → 변경 후 10.769 ms/call 순서로 가리킨다. 동일 입력에서 상태별 7회 one-call 측정의 중앙값이다.
3. (2:30–3:30) Python 할당 피크 6,675,804 → 380 bytes를 보여준다. 평탄화 임시 리스트 제거와 연결하되 프로세스 전체 메모리(RSS)나 일반 성능 보장으로 확대하지 않는다.
4. (3:30–5:00) 집중 Test 1/1, 전체 11/11, CLI와 입력/결과 guard 통과를 확인한다. 이 결과가 Harness/Skill 단독 인과효과를 입증하지 않음을 말한다. 이 확인된 결과를 기준으로 다음 구간에서는 추가 구조가 필요했는지 점검하며, 먼저 Agent를 더 나눌 근거가 있었는지 묻는다.

Evidence / Source: `plan/DEMO_MATRIX.md` STEP 07 §§191–200, STATE-04 → STATE-04-PERF; `plan/CLAIM_FREEZE.md` §8; DEC-0019. Baseline `822f1c12c5f602d934a2fd29e48f05bf498b4bfa`, result `6153b81c0187dd7d82c88bd1817fb683c98eb431`; `image_statistics`; deterministic synthetic 1024×768, 786,432 pixels, max255; CPython3.9.6 / macOS26.6.2 arm64; same input fingerprint, seven one-call samples per state. Median 15.468→10.769 ms/call; separate tracemalloc call peak 6,675,804→380 bytes; six-field result guard, focused1/1, full11/11, CLI smoke PASS. TRIAL-008 is candidate history only.

Claim Boundary: 숫자는 이 입력, 코드 경로, host, runtime, 측정 조건에 한정한다. `tracemalloc`은 Python allocation peak이지 RSS가 아니다. Harness나 Skill이 성능 향상을 일으켰다고 하지 않는다.

Beginner Explanation: 바뀐 코드가 맞는지 Test와 같은 benchmark로 확인한 기록이 있다.

Advanced Insight: Observed product change와 시스템 구성요소의 단독 인과를 분리한다.

C++ Vision Bridge: N/A.

Demo Operation: `production/ACT_3.pptx`의 S47 및 `production/preview/act3/S47.png`의 native chart와 수치 비교를 가리킨다. 새 Trial 또는 benchmark를 실행하지 않는다. 막대는 실행 시간만 표현하며 할당량은 별도 수치 비교다.

Audience Interaction: Case로 측정 조건과 verification을 짚고 일반화하지 않도록 안내한다.

Transition: “검증된 결과를 기준으로, Agent를 더 나눌 필요도 있었는지 점검해보겠습니다.”

Time Management: 5분을 metric 2.5분, test/CLI guards 1.5분, attribution limit 1분으로 나눈다.

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_3.pptx`의 S47 또는 `production/preview/act3/S47.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

## S48 — 이 작업에 Subagent가 필요했을까?

Slide ID: S48

Working Title: 이 작업에 Subagent가 필요했을까?

ACT / Section: ACT 3 / 3E

Allocated Time: 4 minutes

Mode Split: Demo 3 minutes (VISUAL) + Q&A 1 minute

Primary Message: 현재 performance 작업은 하나의 Agent가 처리할 수 있었고 별도 Context의 병렬화 이득이 작아 Subagent를 정당화하지 않았다.

Opening Question: “이미 확인한 결과에 이르기 위해, 여러 Agent로 일을 나누는 추가 구조도 필요했을까?”

Speaker Flow:

1. (0:00–1:00 / Demo) 앞 장에서 검증한 성능 Task로 돌아와 추가 구조의 필요성을 점검한다고 밝힌다. Subagent는 일을 다른 Agent에 나누는 선택이라는 뜻으로 짧게 설명하고, 조사 → 변경 → 검증을 왼쪽부터 가리킨다. 뒤 단계가 앞 결과를 사용하는 현재 Task의 의존 관계다.
2. (1:00–3:00 / Demo) 작업 독립성, 병렬 이득, 결과 통합 비용을 기준으로 이번 사례에서 Subagent 추가 근거가 부족했음을 설명한다.
3. (3:00–4:00 / Q&A) 질문이 없으면 ‘어느 단계를 독립 실행할 수 있었나?’를 묻는다. 일반적 Subagent 불필요 주장으로 확장하지 않는다.

Evidence / Source: DEC-0018, BEAT-023–025; STATE-04 / STATE-04-PERF의 project/task complexity review. OBSERVED_PRODUCT / TEACHING_MODEL.

Claim Boundary: `NOT JUSTIFIED YET`는 현재 사례의 판단이다. Subagent 기능이 없거나 일반적으로 불필요하다는 뜻이 아니다.

Beginner Explanation: Agent를 늘리기 전에 실제로 독립시킬 작업이 있는지 본다.

Advanced Insight: 병렬화 이득, context separation, coordination 및 merge 비용을 함께 평가한다.

C++ Vision Bridge: 다음 Slide의 가정적 C++ 예시에서만 연결한다.

Demo Operation: 세 기준을 보여주는 정적 VISUAL Demo다. Product Subagent를 호출하지 않는다.

Audience Interaction: 마지막 1분 질문을 받는다. 질문이 없으면 “무엇을 독립 실행할 수 있었나?”를 짧게 던지고 계속한다.

Transition: “어떤 작업 구조라면 Subagent 검토가 타당해질까?”

Time Management: 시각 검토 3분, Q&A 1분을 보호한다.

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_3.pptx`의 S48 또는 `production/preview/act3/S48.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

## S49 — Subagent를 고려할 조건

Slide ID: S49

Working Title: Subagent를 고려할 조건

ACT / Section: ACT 3 / 3E

Allocated Time: 4 minutes

Mode Split: Lecture 1 minute + Demo 2 minutes (VISUAL) + Q&A 1 minute

Primary Message: 독립된 조사와 Context, 병렬 가능성, 명확한 handoff가 있을 때 Subagent를 검토하고 조정 비용이 더 크면 보류한다.

Opening Question: “어떤 일이 실제로 독립된 병렬 작업일까?”

Speaker Flow:

1. (0:00–1:00 / Lecture) 실제 Demo가 아닌 조건부 C++ 조사 예시라고 먼저 밝힌다.
2. (1:00–3:00 / Demo) 성능 경로, 빌드 환경, 테스트 구조 조사가 서로 결과를 기다리지 않아도 된다는 가정을 비교한다. 세 화살표가 모이는 하단에서 결과 형식, 전달 지점, 합칠 책임을 시작 전에 정할 필요를 짚는다.
3. (3:00–4:00 / Q&A) 질문이 없으면 ‘결과를 합칠 책임자는 누구인가?’를 묻는다. 작업과 Context가 강하게 연결되거나 조정 비용이 크면 보류한다고 닫는다. 추가 구조의 필요성 점검을 이어가되, 다음에는 일을 나누는 문제에서 지식을 별도로 보존할 필요로 질문을 바꾼다.

Evidence / Source: BEAT-023–025, DEC-0018. TEACHING_MODEL; hypothetical C++ case.

Claim Boundary: 현재 Demo에서 관찰한 Subagent 결과가 아니다. 제품 동작·사용법은 설명하지 않는다.

Beginner Explanation: 서로 영향을 덜 주는 일을 나눌 수 있을 때만 여러 Agent를 고려한다.

Advanced Insight: Context 경계와 병렬 결과의 integration cost가 역할 분리의 이익보다 작아야 한다.

C++ Vision Bridge: C++ Repository에서 성능, build toolchain, test 조사가 실제로 독립적일 수 있다는 가정 예만 든다.

Demo Operation: Conceptual decision visual. Subagent 제품 실행이나 지원 여부를 보여주지 않는다.

Audience Interaction: Q&A 1분. 질문이 없으면 “결과를 합칠 책임자는 누구인가?”를 fallback 질문으로 사용한다.

Transition: “Agent를 나눌 필요를 봤으니, 이번에는 다음 작업을 위해 지식을 별도로 남길 필요도 있었는지 점검해보겠습니다.”

Time Management: 세 조건, 보류 신호, 가정 예시를 각 한 번만 다룬다.

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_3.pptx`의 S49 또는 `production/preview/act3/S49.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

## S50 — 무엇이 다시 찾기 어려운 지식인가?

Slide ID: S50

Working Title: 무엇이 다시 찾기 어려운 지식인가?

ACT / Section: ACT 3 / 3F

Allocated Time: 4 minutes

Mode Split: Demo 2 minutes (VISUAL) + Case 2 minutes

Primary Message: 현재 Demo의 계약·명령·구조·절차·Trial 기록은 각각 유지 중인 Source of Truth에 있었고, 별도 Memory 후보는 발견되지 않았다.

Opening Question: “다음 작업을 위해, 기존 출처와 별도로 보존할 지식도 있었을까?”

Speaker Flow:

1. (0:00–2:00 / Demo) 앞의 Agent 분리 검토에 이어, 이번에는 지식을 별도로 남길 필요를 점검한다고 밝힌다. 먼저 기존 출처를 찾으며 네 행의 질문을 실제 유지 위치에 연결한다. crop 계약은 코드/계약 문서, 모듈 순서는 architecture, 조사 절차는 Skill, 측정 결과는 날짜 있는 Trial/Git 기록이다.
2. (2:00–3:00 / Case) 현재 Demo에서 별도 Memory로 남길 후보를 찾지 못한 제한된 감사 결과임을 밝힌다.
3. (3:00–4:00 / Case) 새 기록을 만들기 전에 기존 출처를 먼저 찾는다는 질문을 다음 판단 기준으로 연결한다.

화면 진행: 본문의 현재 사례 한정 결론을 먼저 읽고 네 지식의 기존 출처를 대조한다. 이번에는 별도 Memory 후보를 찾지 못했다는 판단이며 다른 프로젝트나 제품 Memory 기능으로 일반화하지 않는다.

Evidence / Source: DEC-0018, DEMO-08 knowledge audit, BEAT-026–028. OBSERVED_PRODUCT / TEACHING_MODEL.

Claim Boundary: 제품 Memory 기능의 존재, 범위, 성능에 관한 주장이 아니다. 현재 Demo에서 별도 보존 후보를 찾지 못했다는 범위다.

Beginner Explanation: 새 기억을 만들기 전에 같은 사실이 이미 어디에 기록돼 있는지 찾는다.

Advanced Insight: 출처, 적용 범위, 갱신 가능성과 기존 Source of Truth의 중복 여부를 검토한다.

C++ Vision Bridge: N/A.

Demo Operation: 네 지식 범주를 정적으로 연결하는 VISUAL Demo. Memory 기능을 실행하거나 흉내내지 않는다.

Audience Interaction: Case 2분 동안 어떤 지식이 어디에 이미 있는지 생각하도록 한다. 공유나 기록은 요구하지 않는다.

Transition: “그럼 어떤 지식에 Memory를 검토할 조건이 있을까?”

Time Management: 네 행을 빠르게 연결한 뒤 계약과 측정 결과 두 범주의 출처 차이에 설명을 집중한다. 정적 Demo 2분, Case 2분을 유지한다.

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_3.pptx`의 S50 또는 `production/preview/act3/S50.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — DEC-0030에서 승인한 화면 강조와 운영 Cue를 정렬했다. 최종 PPT/Notes/PNG 대조와 렌더 검토 결과는 production/evaluation/FULL_DECK_PRESENTATION_POLISH.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 제품·계정, 실제 시간 리허설은 UNVERIFIED.

## S51 — Memory는 재발견 비용으로 판단

Slide ID: S51

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

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_3.pptx`의 S51 또는 `production/preview/act3/S51.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

## S52 — Minimum Effective Harness

Slide ID: S52

Working Title: Minimum Effective Harness

ACT / Section: ACT 3 / 3G

Allocated Time: 3 minutes

Mode Split: Demo 3 minutes (CAPTURED)

Primary Message: STATE-04-PERF까지 이어진 현재 사례는 Prompt, Context와 Routing, reusable Skill, Benchmark, Tests, Tools/Environment를 사용했고 Subagent와 Memory를 추가하지 않았다.

Opening Question: “이번 작업을 위해 실제로 무엇이 필요했을까?”

Speaker Flow:

1. (0:00–1:00) 왼쪽의 이번 목표·반복 정보·반복 절차·확인 근거라는 문제를 순서대로 읽는다.
2. (1:00–2:00) 오른쪽의 Task Prompt, AGENTS.md/docs Routing, graypipe-performance Skill, Tests/Benchmark/Tools/Environment에 연결한다. 현재 사례의 구성을 정리한 표다.
3. (2:00–3:00) Subagent와 별도 Memory는 추가하지 않았으며 필요한 구성은 문제와 검증 조건에 따라 달라진다고 말한다.

Evidence / Source: STATE-00 → STATE-04-PERF, DEC-0018, INV-VERIFY-001, DEMO-09. OBSERVED_PRODUCT / TEACHING_MODEL.

Claim Boundary: 현재 프로젝트의 구성 감사다. 일반적인 최적 기능 수나 Harness가 성능을 개선한 인과 claim이 아니다.

Beginner Explanation: Harness는 기능을 많이 모으는 일이 아니라 현재 문제에 필요한 작업 환경을 마련하는 일이다.

Advanced Insight: “Minimum Effective”는 신뢰성 있게 해결할 조건을 충족하는 문제별 heuristic이며 숫자 기준이 없다.

C++ Vision Bridge: Slide 53–55에서 Project별 build, test, benchmark 절차로 연결한다. Python Skill을 C++로 복사하지 않는다.

Demo Operation: 기록된 State의 구성을 표로 재구성한 CAPTURED 범위 요약이다. 실제 실행 캡처가 아니며 Demo Repository나 현재 제품을 실행하지 않는다.

Audience Interaction: 구성요소보다 문제와 evidence가 연결되는 흐름을 보게 한다.

Transition: 다음 Slide에서 Tools, Environment, Verification을 포함한 Harness 운영 정의를 묶는다.

Time Management: 3분 동안 실제 구성과 빠진 두 요소를 확인한다. 일반론으로 확장하지 않는다.

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_3.pptx`의 S52 또는 `production/preview/act3/S52.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

## S53 — Harness는 작업 환경 설계다

Slide ID: S53

Working Title: Harness는 작업 환경 설계다

ACT / Section: ACT 3 / 3G

Allocated Time: 6 minutes

Mode Split: Lecture 4 minutes + Demo 2 minutes (CAPTURED)

Primary Message: 이 교육에서 Harness는 Agent가 Project에서 안정적으로 일하도록 설계한 작업 환경과 절차를 뜻하는 운영 model이다.

Opening Question: “Harness는 결국 무엇을 의미하는가?”

Speaker Flow:

1. (0:00–2:00 / Lecture) 큰 프레임은 Project 작업 환경을 뜻하는 교육용 모델이라고 밝힌다. 현재 목표 → 개발자와 Agent → 확인할 결과를 가리킨다.
2. (2:00–4:00 / Lecture) 그 안의 Context/Routing, Workflow, Verification/Tools가 서로 다른 책임으로 연결됨을 설명한다.
3. (4:00–6:00 / Demo) 프레임 바깥 아래의 ‘관찰한 구성’ 줄에서 STATE-04-PERF의 실제 요소를 확인한다. 전체 환경 모델과 제한된 구성 관찰을 같은 증거로 취급하지 않는다.

Evidence / Source: DEC-0023, BEAT-035/036, STATE-04-PERF. OBSERVED_PRODUCT / TEACHING_MODEL.

Claim Boundary: 과정의 operational definition이다. 공식 OpenAI 정의나 보편적 industry standard로 제시하지 않는다.

Beginner Explanation: Agent가 알 정보뿐 아니라 일하는 절차와 결과를 확인하는 환경도 함께 설계한다.

Advanced Insight: Harness는 특정 파일이나 기능 목록이 아니라 Project별 신뢰성 문제를 해결하는 system model이다.

C++ Vision Bridge: Slide 55에서 C++ Project 환경에 같은 Engineering Pattern을 연결한다.

Demo Operation: 큰 프레임의 교육용 전체 모델과 아래 STATE-04-PERF 관찰 구성 줄을 분리해 보인다. 관찰 구성의 CAPTURED 요약도 기록 기반 재구성이며 실제 UI 캡처가 아니다.

Audience Interaction: Evidence inset과 교육용 전체 model의 시각적 경계를 짚는다.

Transition: “그 작업 환경은 Repository 파일만으로 결정될까?”

Time Management: 개념 설명 4분, 관찰된 구성 2분. 기능 이름 열거에 시간을 쓰지 않는다.

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_3.pptx`의 S53 또는 `production/preview/act3/S53.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

## S54 — Repository 밖의 환경도 결과에 영향을 준다

Slide ID: S54

Working Title: Repository 밖의 환경도 결과에 영향을 준다

ACT / Section: ACT 3 / 3G

Allocated Time: 3 minutes

Mode Split: Lecture 3 minutes

Primary Message: Trial 결과를 해석할 때 Project repository 바깥의 Global instructions, Skills, Hooks, MCP, Permissions, Model/configuration, OS/runtime도 가능한 환경 층이다.

Opening Question: “Repository가 같으면 Agent 실행 환경도 같은가?”

Speaker Flow:

1. (0:00–1:00) 왼쪽 Repository와 오른쪽 가능한 외부 조건을 나눠 가리킨다.
2. (1:00–2:00) 지침, 실행, 도구와 권한이라는 세 묶음 중 기록에서 확인된 것은 global Skills와 hook/MCP 시작 흔적 일부라고 말한다.
3. (2:00–3:00) 모든 요소의 작동·효과를 관찰한 목록이 아님을 한정한다. 자세한 제작 이력 근거는 ACT 4에 남긴다.

Evidence / Source: TRIAL-006/007/008, DEC-0016/0021, BEAT-033/036. OBSERVED_META / TEACHING_MODEL.

Claim Boundary: 전체 영향의 완전한 inventory가 아니다. Hook 실행이나 MCP task result가 관찰됐다고 말하지 않는다. TRIAL-007의 보고와 stderr 차이를 이 장에서 재해석하지 않는다.

Beginner Explanation: 같은 repository여도 실행 설정이나 주변 지침은 다를 수 있다.

Advanced Insight: Ambient Harness 요인을 기록하고 Trial의 attribution 범위를 제한하되 미확인 인과를 만들지 않는다.

C++ Vision Bridge: 같은 C++ repository도 Toolchain, 권한, runtime 조건이 다를 수 있다는 정도로만 잇는다.

Demo Operation: ACT 4에서 다룰 Meta 근거는 상세히 재생하지 않는다. 정적 preview visual로만 다룬다.

Audience Interaction: 가능한 환경 층과 실제 확인된 흔적을 구분해 보도록 안내한다.

Transition: “이 환경 설계 원칙은 C++ Vision Project에 어떻게 옮겨갈까?”

Time Management: 3분 동안 환경 경계와 evidence 한계를 설명한다. 요소별 제품 기능 강의는 하지 않는다.

Fallback: LOCAL STATIC ARTIFACT — `production/ACT_3.pptx`의 S54 또는 `production/preview/act3/S54.png`의 Repository/외부 환경 경계 비교를 사용한다. 새 화면과 경로의 최종 release 일치는 통합 검토에서 확인한다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.

## S55 — Engineering Pattern은 C++에도 전이된다

Slide ID: S55

Working Title: Engineering Pattern은 C++에도 전이된다

ACT / Section: ACT 3 / 3H

Allocated Time: 5 minutes

Mode Split: Lecture 5 minutes

Primary Message: Python Demo의 코드나 도구를 복사하는 대신 Context, Verification, Benchmark, Reusable Workflow의 Engineering Pattern을 C++ Vision 업무에 대응시킨다.

Opening Question: “우리 Repository에서는 무엇이 Project Context이고 무엇이 Workflow인가?”

Speaker Flow:

1. (0:00–1:00) 가정적 Vision 업무 장면임을 밝히고, 입력·처리·결과를 가리키며 Python Demo와 C++ Vision의 공통 질문을 안내한다.
2. (1:00–3:30) 기준 조건, 조사 경로, 확인 방법의 세 질문을 따라 입력/계약에서 빌드·알고리즘·하드웨어 조건으로, Python 경로에서 해당 모듈 측정으로, 동작 계약/테스트에서 회귀·통합 검증으로 연결한다.
3. (3:30–5:00) baseline → profile → change → regression check를 공통 패턴으로 회수한다. 구체 도구는 팀 표준 확인 후 선택하며 화면을 도구 목록 강의로 확장하지 않는다.

화면 진행: 그림의 01 입력(카메라·원영상), 02 처리, 03 결과를 같은 번호의 질문과 연결한다. 입력의 기준 조건→처리 경로 조사→결과의 계약 검증 순서로 설명한 뒤 하단 workflow로 묶는다. 실제 회사 장비나 C++ 실행 사실은 추가하지 않는다.

Evidence / Source: BEAT-036, CLM-0016/0017/0030, OQ-011. TEACHING_MODEL. 삽화 출처: prototype/image-illustration-pilot/assets/S53.png, built-in image_gen, 2026-10-18. 생성 프롬프트: prototype/image-illustration-pilot/PROMPTS.md. 실제 화면·현장 사진·관찰 자료가 아니다.

Claim Boundary: 교육용 전이 예다. C++ Demo를 구현하거나 팀별 실제 도구 규칙을 검증한 것이 아니다.

Beginner Explanation: 언어가 달라도 먼저 프로젝트 규칙과 확인 방법을 찾는다.

Advanced Insight: Build mode, hardware assumptions, module contracts, and regression criteria belong to the actual project.

C++ Vision Bridge: PRIMARY — Python `unittest` → GoogleTest/CTest or integration checks; benchmark script → benchmark/profiler; Project Context → build, algorithm, hardware constraints. Team standards must be checked before choosing tools.

Demo Operation: N/A. 그림은 가정적 Vision 업무의 Lecture용 삽화다. 입력·처리·결과를 가리키며 기준 조건, 조사 위치, 검증 범위를 연결한다.

Audience Interaction: 청중이 자사 Project의 Context와 Workflow를 구분할 질문을 제시한다. 답변을 요구하지 않는다.

Transition: “현재 업무에서 어떤 구조가 실제로 필요한지 되돌아보자.”

Time Management: 5분 동안 도구 이름보다 패턴 대응을 중심으로 설명한다.

Fallback: 정적 발표 경로는 production/preview/act3/S55.png와 production/preview/full/S55.png다. 같은 그림을 가리키며 원래 질문과 Claim 경계를 설명한다. 설명용 삽화를 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: REVIEWED — DEC-0030에서 승인한 화면 강조와 운영 Cue를 정렬했다. 최종 PPT/Notes/PNG 대조와 렌더 검토 결과는 production/evaluation/FULL_DECK_PRESENTATION_POLISH.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 제품·계정, 실제 시간 리허설은 UNVERIFIED.

## S56 — 필요한 구조부터 질문하기

Slide ID: S56

Working Title: 필요한 구조부터 질문하기

ACT / Section: ACT 3 / 3I

Allocated Time: 10 minutes

Mode Split: Reflection 3 minutes + Q&A 5 minutes + Transition 2 minutes

Primary Message: 기능을 더하기 전에 반복되는 마찰을 찾고 원인과 검증 요구에 맞는 최소 구조를 판단한다.

Opening Question: “내 업무에서 지금 가장 반복되는 마찰은 무엇인가?”

Speaker Flow:

1. (0:00–3:00 / Reflection) 화면의 ‘우리 프로젝트의 제약은…’과 ‘먼저 측정하고, 끝나면 확인해…’를 가리킨다. 청중 업무의 반복이 사실인지 절차인지 조용히 생각하게 한다. 독립 조사, 재발견 비용, 검증 필요도 개인 점검 후보다.
2. (3:00–8:00 / Q&A) 원할 때만 마찰과 근거를 공유하게 한다. 질문이 없으면 ‘이 반복은 Context, Workflow, Coordination, 기억 중 무엇에 가까운가?’를 사용한다.
3. (8:00–10:00 / Transition) STATE-04-PERF의 제한된 성공을 유지하면서 화면 아래 ‘Project가 바뀐 뒤에도 계속 맞을까?’를 가리킨다. 다음 ACT의 가상 사례를 실제 제품 실패로 앞당기지 않는다.

Evidence / Source: STATE-04-PERF, DEC-0018/0021, BEAT-035–038, INV-VERIFY-001. TEACHING_MODEL; bounded observed product success.

Claim Boundary: 이 작업을 실패한 Harness로 재해석하지 않는다. Subagent와 Memory는 조건부 선택이다. 다음 ACT의 개념 사례를 실제 Demo Product failure로 미리 말하지 않는다.

Beginner Explanation: 먼저 반복되는 문제를 찾고, 필요한 구조만 고른다.

Advanced Insight: Project 변화가 가정을 무효화할 수 있는지 생각하되, 다음 ACT의 사례 결과를 먼저 공개하지 않는다.

C++ Vision Bridge: 앞 Slide의 Project별 C++ 적용 질문을 청중 업무로 가져온다.

Demo Operation: N/A.

Audience Interaction: 개인 reflection은 선택적이며 노트북·실습·필수 공개 응답은 없다. 질문은 5분만 사용한다.

Transition: “지금은 잘 동작하는 Harness도 Project가 바뀐 뒤 계속 맞을까?”

Time Management: Reflection 3분, Q&A 5분, Transition 2분. Q&A가 비어도 마지막 질문을 지키고, 초과 응답은 별도 질의로 안내한다.

Fallback: LOCAL STATIC ARTIFACT — 발표 기본 경로는 `production/ACT_3.pptx`의 S56 또는 `production/preview/act3/S56.png`다. 수정 초안 정적 화면은 존재하며 최종 release 경로·내용 일치는 통합 검토에서 확인한다. 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다. 질문이 없으면 Audience Interaction의 준비 질문으로 진행한다.

Validation Status: REVIEWED — 원문·Claim 경계, 화면의 설명 순서와 운영 지침을 대조했다. 최종 PPT/Notes/PNG 대조 결과는 production/evaluation/FULL_DECK_PRESENTATION_REVISION.md에 기록한다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 실제 시간 리허설은 UNVERIFIED.
