# Presentation Revision Pilot — Speaker Notes

S05 / S23 / S45 / S57. 디자인 검토용 별도 4장. 전체 80장 Notes의 교체본이 아니다.
원래 시간 8 / 4 / 5 / 4분과 Mode를 유지한다.

## S05 — Agent가 Test와 호출 경로를 찾았다

Slide ID: S05

Working Title: Agent가 Test와 호출 경로를 찾았다

ACT / Section: ACT 0 / 0D

Allocated Time: 8 minutes

Mode Split: Demo 8 minutes (정적 TRIAL-001 기록·재구성 도식 기본 경로; HYBRID는 발표 환경 검증 전까지 비활성)

Primary Message: TRIAL-001 한 번의 읽기 전용 CLI 조사에서 Agent가 실패 Test, 구현 파일, 계약과 호출 경로를 찾아냈다.

Opening Question: “지정하지 않은 파일과 호출 경로를 실제로 찾아냈는가?”

Speaker Flow:

1. (0:00–1:00) TRIAL-001 기록과 STATE-00 테스트를 재구성한 화면임을 밝힌다. 입력의 숫자는 픽셀 값이며 색은 영역 구분용이다.
2. (1:00–3:00) `crop(image, 1, 3)`의 끝 좌표 제외 계약을 짚고 입력, 기대 두 열, 구현에 포함된 세 번째 열을 차례로 가리킨다. 결과 tuple은 원본 소스에 근거한 정적 재구성이다.
3. (3:00–5:00) 실패 테스트명과 `cli.main → pipeline.process_image → transform.crop` 호출 경로를 연결한다. 오른쪽 01–03은 설명 순서이며 Agent의 실제 파일 접근 시각 순서가 아니다.
4. (5:00–7:00) `row[x_start : x_end + 1]`에서 끝 좌표를 포함하게 되는 지점을 짚는다. 코드를 고치거나 새 Test를 실행하지 않는다.
5. (7:00–8:00) 읽기 전용 단일 CLI 조사 범위를 확인하고 S06의 관찰과 환경 한계 분리로 넘어간다.

Evidence / Source: TRIAL-001, DEMO-01, STATE-00, CLM-0002, CLM-0009. `plan/DEMO_MATRIX.md` TRIAL-001; Demo tag STATE-00 `22e7e2f806de2419b0df649107bbae14dea082eb`: `tests/test_transform.py:9–14`, `src/graypipe/transform.py:7–13`. 입력 ((1,2,3,4),(5,6,7,8)); 기대 ((2,3),(6,7)); 코드에 따른 결과 ((2,3,4),(6,7,8)). 마지막 배열은 새 실행 기록이 아닌 정적 재구성이다.

Claim Boundary: Codex CLI 0.154.0의 단일 읽기 전용 조사. 코드 수정 없음. 테스트 배열·구현에 따른 도식이며 screenshot이 아니다. 호출 화살표는 제품 호출 관계이고 Agent 접근 순서가 아니다. README에 기존 결함 안내가 있으므로 아무 힌트 없이 독자 발견했다고 말하지 않는다. 현재 Desktop, 계정, 반복 재현성과 보편적 탐색 능력은 미검증이다.

Beginner Explanation: 파일명을 미리 주지 않은 한 번의 조사에서 실패 Test와 관련 구현·호출 경로가 찾아졌다.

Advanced Insight: 찾은 경로와 설명은 그 run에서 확인된 범위다. 설명과 수정, 검증은 다른 단계이며 이 Trial에서는 코드를 바꾸지 않았다.

C++ Vision Bridge: N/A.

Demo Operation: 정적 자료만 사용한다. 시안 PPT 1장 / `preview/S05.png`의 입력 → 기대/구현 결과 → 실패 Test/호출 경로/구현 순서로 가리킨다. Live/HYBRID는 비활성. 기존 DEMO-01 원본 기록은 `demos/runbooks/demo-01.md` 및 `plan/DEMO_MATRIX.md`. 마지막 1분에는 S06 handoff로 이동한다.

Audience Interaction: 청중은 S04의 세 Watch For를 확인한다. 중간 응답이나 실습을 요구하지 않는다.

Transition: 발견 사실을 다음 장에서 Repository 관찰과 실행 환경 제한으로 나눈다.

Time Management: Demo 8분 유지. 1분 출처, 2분 배열, 2분 Test/호출 경로, 2분 구현 차이, 1분 범위와 전환. 초과 시 파일 경로 반복 설명을 줄인다. 새 실행 또는 수정은 하지 않는다.

Fallback: LOCAL STATIC ARTIFACT — 시안 PPT의 S05와 같은 폴더 `preview/S05.png`를 사용한다. 원본 Trial 캡처 또는 Live 결과로 표현하지 않는다. 사용자 디자인 승인, Windows, 교육장 및 실제 운영 검증은 별도다.

Validation Status: REVIEWED — 원문과 local render 대조 완료. 네 장의 설계 방향은 사용자 검토 대기. Windows PowerPoint, 실제 발표 PC, 투사 가독성 및 시간 리허설 UNVERIFIED. S57 구체 가정은 PROPOSED.

## S23 — 작은 Project Context의 첫 기록

Slide ID: S23

Working Title: 작은 Project Context의 첫 기록

ACT / Section: ACT 2 / 2B

Allocated Time: 4 minutes

Mode Split: Demo 4 minutes (HYBRID planned; activation unverified)

Primary Message: STATE-01의 실제 AGENTS.md에는 반복되는 프로젝트 목적, 실행 방법, 테스트 명령, 기본 제약이 기록되어 있다.

Opening Question: “반복되는 Project 정보를 한 번 기록하면 어떤 점이 달라질까?”

Speaker Flow:

1. (0:00–1:00) STATE-00-FIXED에서 STATE-01로 바뀐 것은 root AGENTS.md 한 파일 추가임을 설명한다.
2. (1:00–3:00) 네 발췌를 순서대로 가리킨다. 목적: 로컬 grayscale CLI. 실행: README의 준비된 명령. 테스트: 원문 명령. 제약: 범위를 지키고 관련 동작을 검증. 영어 문장을 모두 낭독하지 않는다.
3. (3:00–4:00) Task마다 반복 설명하던 사실을 저장소에 둔 설계 의도를 정리하고, 실제 활용 관찰은 S24로 넘긴다.

Evidence / Source: STATE-01 / DEMO-02 / OBSERVED_PRODUCT. Demo tag `14baf81746a981d7cd96b7a014ea06f28c3dd6b4`, root `AGENTS.md` 2, 5, 9, 15행 발췌. 15줄/567bytes는 원문 메타데이터이며 화면의 중심 메시지로 쓰지 않는다. 테스트 명령은 `Run`과 구두점을 제외한 원문 명령 문자열이다. Source: `plan/DEMO_MATRIX.md` STATE-01 기록.

Claim Boundary: 실제 파일이 그 상태에 존재했다는 근거다. 성능, 정확도, 토큰 절감 또는 AGENTS.md 단독 인과효과를 주장하지 않는다. 제품 코드·테스트·README는 그 상태 전환에서 바뀌지 않았다. S24의 지침 활용 관찰을 이 장의 결과로 앞당기지 않는다. 현재 Desktop 자동 로딩이나 교육 환경을 검증한 것이 아니다.

Beginner Explanation: A small set of facts that applies across Project Tasks can be written down once in the repository.

Advanced Insight: The design choice is about context scope and maintenance ownership, not a measured quality or performance effect.

C++ Vision Bridge: N/A.

Demo Operation: 시안 PPT 2장 / `preview/S23.png`의 원문 발췌를 사용한다. 편집기 screenshot이 아니다. Live/HYBRID는 기존대로 비활성이다.

Audience Interaction: Point out the recurring facts without asking the audience to inspect a repository.

Transition: “이 안내가 실제 Task에서 어떻게 사용됐는지 기록을 보겠습니다.”

Time Management: Demo 4분 유지. 1분 상태 전환, 2분 네 발췌, 1분 의미와 S24 handoff. 명령어 옵션별 설명은 생략한다.

Fallback: LOCAL STATIC ARTIFACT — 시안 PPT의 S23와 같은 폴더 `preview/S23.png`를 사용한다. 원본 Trial 캡처 또는 Live 결과로 표현하지 않는다. 사용자 디자인 승인, Windows, 교육장 및 실제 운영 검증은 별도다.

Validation Status: REVIEWED — 원문과 local render 대조 완료. 네 장의 설계 방향은 사용자 검토 대기. Windows PowerPoint, 실제 발표 PC, 투사 가독성 및 시간 리허설 UNVERIFIED. S57 구체 가정은 PROPOSED.

## S45 — Working Harness Success

Slide ID: S45

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
4. (3:30–5:00) 집중 Test 1/1, 전체 11/11, CLI와 입력/결과 guard 통과를 확인한다. 이 결과가 Harness/Skill 단독 인과효과를 입증하지 않음을 말하고 Subagent 필요성 질문으로 넘긴다.

Evidence / Source: `plan/DEMO_MATRIX.md` STEP 07 §§191–200, STATE-04 → STATE-04-PERF; `plan/CLAIM_FREEZE.md` §8; DEC-0019. Baseline `822f1c12c5f602d934a2fd29e48f05bf498b4bfa`, result `6153b81c0187dd7d82c88bd1817fb683c98eb431`; `image_statistics`; deterministic synthetic 1024×768, 786,432 pixels, max255; CPython3.9.6 / macOS26.6.2 arm64; same input fingerprint, seven one-call samples per state. Median 15.468→10.769 ms/call; separate tracemalloc call peak 6,675,804→380 bytes; six-field result guard, focused1/1, full11/11, CLI smoke PASS. TRIAL-008 is candidate history only.

Claim Boundary: 숫자는 이 입력, 코드 경로, host, runtime, 측정 조건에 한정한다. `tracemalloc`은 Python allocation peak이지 RSS가 아니다. Harness나 Skill이 성능 향상을 일으켰다고 하지 않는다.

Beginner Explanation: 바뀐 코드가 맞는지 Test와 같은 benchmark로 확인한 기록이 있다.

Advanced Insight: Observed product change와 시스템 구성요소의 단독 인과를 분리한다.

C++ Vision Bridge: N/A.

Demo Operation: 시안 PPT 3장 / `preview/S45.png`의 native chart와 숫자 비교를 가리킨다. 새 Trial 또는 benchmark는 실행하지 않는다. 막대는 실행 시간만 표현하며 할당량은 별도의 수치 비교다.

Audience Interaction: Case로 측정 조건과 verification을 짚고 일반화하지 않도록 안내한다.

Transition: “이 결과를 위해 Subagent도 필요했을까?”

Time Management: 5분을 metric 2.5분, test/CLI guards 1.5분, attribution limit 1분으로 나눈다.

Fallback: LOCAL STATIC ARTIFACT — 시안 PPT의 S45와 같은 폴더 `preview/S45.png`를 사용한다. 원본 Trial 캡처 또는 Live 결과로 표현하지 않는다. 사용자 디자인 승인, Windows, 교육장 및 실제 운영 검증은 별도다.

Validation Status: REVIEWED — 원문과 local render 대조 완료. 네 장의 설계 방향은 사용자 검토 대기. Windows PowerPoint, 실제 발표 PC, 투사 가독성 및 시간 리허설 UNVERIFIED. S57 구체 가정은 PROPOSED.

## S57 — Project는 바뀌고 Workflow는 남았다

Slide ID: S57

Working Title: Project는 바뀌고 Workflow는 남았다

ACT / Section: ACT 4 / 4B  CONCEPTUAL STALE HARNESS / DEMO-04A

Allocated Time: 4 minutes

Mode Split: Demo 2분 (VISUAL) + Case 2분

Primary Message: Project 기준 절차는 정당한 변경에 맞게 갱신됐지만, 재사용 Workflow는 이전 절차를 계속 가리킨다. 이를 Agent의 지능 문제로 바로 결론 내릴 수 없다.

Opening Question: “다음 Task에서 old workflow를 따르면 누가 틀린 걸까?”

Speaker Flow:

1. (0:00–1:00 / Demo) 검토용 가정임을 밝힌다. 모듈 연결 동작까지 검증할 필요가 생겨 공식 범위에 통합 테스트를 추가한 설정이다.
2. (1:00–2:00 / Demo) 왼쪽 현재 기준의 단위+통합 테스트와 오른쪽 재사용 Workflow의 단위 테스트 지시를 대조한다. 화면은 지시 범위 비교이며 실행 결과가 아니다.
3. (2:00–3:30 / Case) 프로젝트가 변한 사실과 재사용 지침의 유지보수 위치를 구분한다. Agent 지능이나 실행 실패를 지금 판단하지 않는다.
4. (3:30–4:00 / Case) “다음 Task가 이 Workflow를 따르면 어떻게 될까?”로 S58에 연결한다. 복구 방법을 앞당기지 않는다.

Evidence / Source: DEMO-04A / DEC-0021 / BEAT-038·039 / CONCEPTUAL. `plan/SLIDE_MAP.md` S57, `plan/CLAIM_FREEZE.md`, `plan/SLIDE_TEMPLATE_MAP.md` §11, `demos/runbooks/demo-04a.md`. 단위+통합 테스트 가정은 이번 시안에서 제안한 설정이며 기존 실제 Evidence가 아니다. 공식 사례로의 채택은 사용자 방향 검토 후 결정한다.

Claim Boundary: 가상 사례·검토용 설정이다. graypipe Repository migration, Skill의 실제 지시, Agent 실행, 누락 테스트 또는 PASS/FAIL 결과가 아니다. 기존 Source of Truth의 구체적 변경 이유 미정 상태를 확정한 것으로 취급하지 않는다. 단지 현재 공식 기준과 재사용 지시의 범위를 비교한다.

Beginner Explanation: Agent가 따르는 지침이 Project의 현재 절차와 맞는지 살핀다.

Advanced Insight: Project source의 변화와 stale artifact의 위치를 분리해 본다.

C++ Vision Bridge: 없음.

Demo Operation: 시안 PPT 4장 / `preview/S57.png`의 개념 도식만 사용한다. 실제 명령, log, runner 구현, 테스트 수, 결과는 추가하지 않는다. 새 가정은 방향 검토 대상이다. 기존 graypipe Skill이나 Product State와 동일시하지 않는다.

Audience Interaction: 무엇이 바뀌었고 무엇이 남았는지 잠시 비교한다. Agent 탓이나 특정 실패를 가정하지 않는다.

Transition: 다음 Task가 예전 Workflow를 사용하면 어떤 결과가 생길까?

Time Management: 총 4분: Demo(VISUAL) 2분 → Case 2분. 테스트 조직에 대한 상세 설명을 줄이고 변화 이유와 지시 범위 차이만 남긴다.

Fallback: LOCAL STATIC ARTIFACT — 시안 PPT의 S57와 같은 폴더 `preview/S57.png`를 사용한다. 원본 Trial 캡처 또는 Live 결과로 표현하지 않는다. 사용자 디자인 승인, Windows, 교육장 및 실제 운영 검증은 별도다.

Validation Status: REVIEWED — 원문과 local render 대조 완료. 네 장의 설계 방향은 사용자 검토 대기. Windows PowerPoint, 실제 발표 PC, 투사 가독성 및 시간 리허설 UNVERIFIED. S57 구체 가정은 PROPOSED.
