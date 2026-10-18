# Illustration Pilot Notes

Scope: S07, S37, S53, S72. Original Slide IDs and the 19-field schema are preserved. This is a four-slide review copy, not a new curriculum.

## S07 — 코드를 AI에게 가져가는 대신 AI를 Repository로 데려간다

Slide ID: S07

Working Title: 코드를 AI에게 가져가는 대신 AI를 Repository로 데려간다

ACT / Section: ACT 0 / 0E

Allocated Time: 3 minutes

Mode Split: Lecture 3 minutes

Primary Message: Repository 조사는 개발자가 코드를 일일이 전달하는 대신 Agent가 사용 가능한 Context를 찾도록 할 수 있다.

Opening Question: “Context 수집의 일부를 누가 맡을 수 있는가?”

Speaker Flow:

1. **CALL BACK (0:00–0:45):** 왼쪽 Repository → 개발자 선택·복사 → AI 관계로 S02를 짧게 회수한다.
2. **TRANSFER (0:45–2:00):** 오른쪽 개발자 조사 요청 → Agent ↔ Repository로 시선을 옮긴다. 바뀌는 것은 Context를 찾는 주체의 일부이며 목표와 검증 책임을 전부 넘긴다는 뜻이 아니다.
3. **TRANSFER / TRANSITION (2:00–3:00):** 필요하면 큰 C++ 저장소에서도 모듈·테스트·계약을 찾는 상황을 한 문장으로 연결한다. Repository 접근이 원하는 Task를 정하지는 않는다는 S08 질문으로 이동한다.

Evidence / Source: DEMO-01 / TRIAL-001 단일 CLI 관찰; BEAT-003, CLM-0002, CLM-0009. 본문은 Context 수집 역할을 비교하는 TEACHING_MODEL이며 하단에 연결된 과거 관찰의 범위를 별도로 표시한다. 삽화 출처: prototype/image-illustration-pilot/assets/S07.png, built-in image_gen, 2026-10-18. 생성 프롬프트: prototype/image-illustration-pilot/PROMPTS.md. 실제 화면·현장 사진·관찰 자료가 아니다.

Claim Boundary: 이 관찰은 CLI 한 번에 한정되며 제품의 보편적 성능·반복성 주장이 아니다. Repository 접근이 Task 의도나 성공을 자동으로 정한다는 뜻이 아니다.

Beginner Explanation: 관련 코드를 모두 복사하기보다 Repository 조사를 요청할 수 있는 가능성을 본다.

Advanced Insight: Context 수집 책임의 일부와 Task 목표·판단 책임을 분리한다.

C++ Vision Bridge: CONTEXTUAL speaker cue — 큰 저장소의 모듈·테스트·계약을 찾는 상황을 필요할 때 한 문장으로 연결한다. 화면에 도구·빌드·hardware 목록을 추가하지 않는다.

Demo Operation: DEMO-01 bounded callback. 본문 삽화는 교육 모델이고 새 제품 동작 관찰이 아니다. S05에서 본 단일 CLI 기록을 근거로 한 가능성을 설명하며 새 UI나 실행을 보여 주지 않는다.

Audience Interaction: 별도 질의 없음. 청중이 Mental Shift를 비교해 볼 수 있도록 잠시 시선을 둔다.

Transition: “Repository 접근과 Task 의도는 같은가?”라고 물으며 S08에 간다.

Time Management: 좌·우 관계의 변화에 집중한다. Trial 상세와 수치를 반복하지 않는다. C++ 연결은 선택적인 한 문장이며 3분 안에 S08로 이동한다.

Fallback: Trial record를 표시할 수 없으면 Mental Shift만 Teaching Model로 설명한다. 제품 전반의 사실처럼 말하지 않는다. 검토본 정적 파일: prototype/image-illustration-pilot/preview/S07.png.

Validation Status: PILOT — 설명용 삽화의 역할과 기존 Claim을 대조한다. 로컬 렌더 검토 결과는 이 Pilot의 REVIEW.md에 기록한다. Windows PowerPoint, 교육장, 실제 시간 리허설은 UNVERIFIED.

## S37 — 서로 다른 Performance Task, 반복되는 절차

Slide ID: S37

Working Title: 서로 다른 Performance Task, 반복되는 절차

ACT / Section: ACT 3 / 3A

Allocated Time: 5 minutes

Mode Split: Case 5 minutes

Primary Message: TRIAL-006의 `resize_nearest`와 TRIAL-007의 `normalize`처럼 서로 다른 목표에서도 유사한 performance procedure가 반복될 수 있다.

Opening Question: “Task가 달라도 왜 같은 작업 방법을 계속 쓰고 있지?”

Speaker Flow:

1. (0:00–2:00) 처음 30초에 그림으로 작업 대상을 확인한다. 왼쪽은 크기 변경, 오른쪽은 선언된 max_value를 255로 스케일하는 값 범위 변환이다. 0→0, 2048→128, 4095→255를 설명할 수 있지만 화질 개선으로 표현하지 않는다. 이어 두 Task goal을 비교한다.
2. (2:00–4:00) 두 기록에 반복된 baseline, 조사, 계획, 변경, test, benchmark, 비교, review를 강조한다.
3. (4:00–5:00) 반복 관찰과 원인 귀속을 분리하고 Prompt-only attribution이 PARTIAL임을 밝힌다.

Evidence / Source: TRIAL-006 (`resize_nearest`), TRIAL-007 (`normalize`), BEAT-018/020. Codex CLI 기록 실행의 workflow 비교. 함수 계약 참고: Demo STATE-04의 src/graypipe/transform.py 및 normalize.py. 삽화 출처: prototype/image-illustration-pilot/assets/S37.png, built-in image_gen, 2026-10-18. 생성 프롬프트: prototype/image-illustration-pilot/PROMPTS.md. 실제 화면·현장 사진·관찰 자료가 아니다.

Claim Boundary: 유사한 절차가 관찰됐지만 Prompt만의 효과로 귀속하지 않는다. 개별 성능 결과는 해당 코드·입력·환경에 한정한다. 그림은 기능 설명용 개념 예시이며 Trial의 입력·출력 파일이나 최적화 전후 결과가 아니다.

Beginner Explanation: 서로 다른 작업에서도 조사하고 확인하는 순서가 반복될 수 있다.

Advanced Insight: Task별 목표와 지속해서 재사용할 절차를 구분하고, Global Harness가 미친 영향을 고려한다.

C++ Vision Bridge: N/A.

Demo Operation: 위는 기능 설명용 AI 삽화, 아래는 TRIAL-006/007 기록에서 확인한 반복 절차 요약이다. 같은 grayscale tile을 크기만 달리하거나 동일 크기로 배치해 작업의 차이를 설명한다. 새로운 실행이나 실제 터미널 화면이라고 말하지 않는다.

Audience Interaction: 두 Task의 공통 절차를 잠시 관찰하게 한다. 공개 답변은 요구하지 않는다.

Transition: “Project 지식과 작업 절차는 각각 어떤 질문에 답할까?”

Time Management: Case 5분을 두 Task 비교, 공통 절차, attribution 한계 순으로 쓴다. 수치 설명으로 확장하지 않는다.

Fallback: 이 검토본의 정적 경로는 prototype/image-illustration-pilot/preview/S37.png다. 파일을 열 수 없다면 기존 production/ACT_3.pptx의 같은 Slide에서 원래 도식으로 설명할 수 있다. 두 버전 모두 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: PILOT — 설명용 삽화의 역할과 기존 Claim을 대조한다. 로컬 렌더 검토 결과는 이 Pilot의 REVIEW.md에 기록한다. Windows PowerPoint, 교육장, 실제 시간 리허설은 UNVERIFIED.

## S53 — Engineering Pattern은 C++에도 전이된다

Slide ID: S53

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

Evidence / Source: BEAT-036, CLM-0016/0017/0030, OQ-011. TEACHING_MODEL. 삽화 출처: prototype/image-illustration-pilot/assets/S53.png, built-in image_gen, 2026-10-18. 생성 프롬프트: prototype/image-illustration-pilot/PROMPTS.md. 실제 화면·현장 사진·관찰 자료가 아니다.

Claim Boundary: 교육용 전이 예다. C++ Demo를 구현하거나 팀별 실제 도구 규칙을 검증한 것이 아니다.

Beginner Explanation: 언어가 달라도 먼저 프로젝트 규칙과 확인 방법을 찾는다.

Advanced Insight: Build mode, hardware assumptions, module contracts, and regression criteria belong to the actual project.

C++ Vision Bridge: PRIMARY — Python `unittest` → GoogleTest/CTest or integration checks; benchmark script → benchmark/profiler; Project Context → build, algorithm, hardware constraints. Team standards must be checked before choosing tools.

Demo Operation: N/A. 그림은 가정적 Vision 업무의 Lecture용 삽화다. 입력·처리·결과를 가리키며 기준 조건, 조사 위치, 검증 범위를 연결한다.

Audience Interaction: 청중이 자사 Project의 Context와 Workflow를 구분할 질문을 제시한다. 답변을 요구하지 않는다.

Transition: “현재 업무에서 어떤 구조가 실제로 필요한지 되돌아보자.”

Time Management: 5분 동안 도구 이름보다 패턴 대응을 중심으로 설명한다.

Fallback: 이 검토본의 정적 경로는 prototype/image-illustration-pilot/preview/S53.png다. 파일을 열 수 없다면 기존 production/ACT_3.pptx의 같은 Slide에서 원래 도식으로 설명할 수 있다. 두 버전 모두 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.

Validation Status: PILOT — 설명용 삽화의 역할과 기존 Claim을 대조한다. 로컬 렌더 검토 결과는 이 Pilot의 REVIEW.md에 기록한다. Windows PowerPoint, 교육장, 실제 시간 리허설은 UNVERIFIED.

## S72 — Project와 환경이 바뀌면 검증도 다시 본다

Slide ID: S72

Working Title: Project와 환경이 바뀌면 검증도 다시 본다

ACT / Section: ACT 4 / 4G  C++ VISION TRANSFER  /  4H DISCUSSION & TRANSITION

Allocated Time: 20 minutes

Mode Split: Case 7분 + Reflection 2분 + Q&A 7분 + Transition 4분

Primary Message: Project나 환경이 바뀌면 기존 performance 가정과 verification 절차가 여전히 맞는지 다시 확인한다. 반복되는 마찰은 관찰하고 원인을 찾아 관련 layer를 바꾼 뒤 benchmark와 regression으로 확인한다.

Opening Question: “같은 문제가 두 번째로 생기면 다시 Prompt를 고칠까, System을 살펴볼까?”

Speaker Flow:

1. (0:00–2:00 / Case) GPU·빌드·측정 조건이 달라진 상황을 가정한다. 실제 C++ 사건이나 구체적 버전 조합을 주장하지 않는다.
2. (2:00–4:30 / Case) 그림의 입력·코드·장치와 기존 가정·측정 조건 질문을 가리킨다. 기존 판단이 어떤 조건에서 맞았는지, 입력과 실행 조건이 비교 가능한지 묻는다. 관찰된 성능 저하나 숫자를 만들지 않는다.
3. (4:30–7:00 / Case) 출력 그림과 기능 계약 질문에서 성능과 함께 다시 확인할 동작 범위를 살핀다. 반복 신호→원인 Layer 조사→관련 시스템 변경→Benchmark/Regression 재확인으로 연결한다.
4. (7:00–9:00 / Reflection) 하단 질문을 가리켜 자기 업무의 반복 마찰 하나를 마음속으로 떠올리게 한다. 기록·답변·발표는 요구하지 않는다.
5. (9:00–16:00 / Q&A) 질문을 받는다. 질문이 없으면 아래 Fallback 질문을 하나씩 골라 강사가 짧게 해설한다. 새로운 기술 사례나 제품 설정 강의를 열지 않는다.
6. (16:00–20:00 / Transition) 16분에 질문을 마감한다. 가정→측정 조건→기능 계약 세 질문을 전체 Story의 Context→Harness→Loop와 연결하고 S73의 여정 회수로 이동한다.

Evidence / Source: BEAT-059 / TRANS-012  ·  teaching transfer, not observed C++ incident 삽화 출처: prototype/image-illustration-pilot/assets/S72.png, built-in image_gen, 2026-10-18. 생성 프롬프트: prototype/image-illustration-pilot/PROMPTS.md. 실제 화면·현장 사진·관찰 자료가 아니다.

Claim Boundary: COURSE MODEL / C++ VISION TRANSFER. Toolchain, CUDA/GPU architecture, build/benchmark configuration은 hypothetical teaching context이며 실제 Demo history가 아니다. 구체적인 Windows/shell/IDE/hardware setup을 주장하지 않는다.

Beginner Explanation: 같은 문제가 반복되면 Prompt 외에도 Project와 workflow를 살핀다.

Advanced Insight: Project/environment 변화가 verification assumptions에 미치는 영향을 평가한다.

C++ Vision Bridge: Primary bridge. 변화한 조건에서 기존 tuning 가정과 benchmark/regression 조건을 다시 확인하는 engineering pattern만 전한다.

Demo Operation: 정적 화면과 speaker-led highlighting을 사용한다. 화면에는 세 확인 대상과 성찰 질문을 두고, 20분 운영표는 Notes에만 둔다. Live 프로젝트·제품 실행·애니메이션 의존 없음. 정적 삽화의 입력→처리 코드→실행 장치→출력을 차례로 가리킨다. 황색 장치·설정 표시는 검토할 조건의 변화이며 실패 원인이 확정됐다는 뜻이 아니다.

Audience Interaction: 7–9분 개인 Reflection은 답변·공유 없이 진행한다. 9–16분 Q&A에서는 실제 회사 환경의 검증되지 않은 해결책을 단정하지 않고 어떤 조건을 확인해야 하는지로 답한다.

Transition: “이제 기능이 아니라, 처음의 문제에서 Loop까지 이어진 Story를 다시 연결해 보겠습니다.” ACT 5 S73으로 넘긴다.

Time Management: 0–7 Case 7분, 7–9 Reflection 2분, 9–16 Q&A 7분, 16–20 Transition 4분으로 20분을 유지한다. Cutoff cue: “이 질문은 여기까지 정리하고, 이제 처음 문제부터 지금의 Loop까지 연결해 보겠습니다.” 실제 20분 리허설은 수행하지 않았다. 0–2분 전체 그림/변경 표식, 2–4:30분 입력·코드·장치의 가정과 비교 조건, 4:30–7분 출력·기능 계약을 설명한다. 이후 7–9분 Reflection, 9–16분 Q&A, 16–20분 Transition을 유지한다.

Fallback: 정적 PPT/PNG를 기본 경로로 사용한다. Q&A가 없으면 ①“예전 Benchmark와 비교하기 전에 어떤 조건을 맞춰야 할까요?” ②“성능이 달라졌을 때 기능 계약은 무엇으로 다시 확인할까요?” ③“두 번째로 같은 문제가 생기면 Prompt 외에 무엇을 살펴볼까요?” 중 하나씩 선택한다. 응답을 요구하지 않고 기존 세 질문의 범위에서 강사가 짧게 해설한다. 검토본 정적 파일: prototype/image-illustration-pilot/preview/S72.png.

Validation Status: PILOT — 설명용 삽화의 역할과 기존 Claim을 대조한다. 로컬 렌더 검토 결과는 이 Pilot의 REVIEW.md에 기록한다. Windows PowerPoint, 교육장, 실제 시간 리허설은 UNVERIFIED.
