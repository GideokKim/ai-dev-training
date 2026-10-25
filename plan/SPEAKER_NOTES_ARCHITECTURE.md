# STEP 08 — Speaker Notes Architecture

## 현재 마지막 팁 요약 — DEC-0088 (2026-10-25)

현재 **102장·390분(6시간30분)**. ACT 중간의 제목/ID 찾아보기6장을 제거하고,
마지막 Q&A/Closing 바로 앞의 **S99–S101**로 통합했다. 기존 팁17장의 설명·배지와
99개 본문 장의 내용·장별 시간/Mode·근거는 유지한다. ACT 사이 설명은 바로 이어진다.
ACT 장수13/21/18/18/18/14, 시간42/63/81/85/80/39분. Mode Lecture154/Demo73/
Case88/Reflection21/Transition22/Q&A32분. 팁 요약3장만 Lecture1분씩 배정한다.
[팁 위치/분류](PRACTICAL_APPLICATION_TIPS.md), [105→102 이행표](SLIDE_ID_MIGRATION_102.md),
[현행 Slide Map](SLIDE_MAP.md)을 따른다. 아래 과거 승인/검증 기록은 당시 판본이다.
Windows·교육장·제품/계정·실측 리허설은 UNVERIFIED이며 새 Trial/성과는 없다.

## Historical application tips — DEC-0087 (2026-10-25)

현재105장·393분(6시간33분). 기존99장의 내용·장별 배정·근거 범위를 보존하고,
17개 적용 기준에 “실무 적용 팁” 공통 배지·분류를 붙였다. 각 ACT의 다음 문제·성찰·
마무리 앞에는 제목/ID 찾아보기1장·Lecture1분씩 추가한다. ACT 장수14/22/19/19/19/12,
시간43/64/82/86/81/37분. Mode157/73/88/21/22/32분. 새 제품 실행·Trial·검증 결과는 없다.
[팁 기준/목록](PRACTICAL_APPLICATION_TIPS.md), [현재99→105 이행표](SLIDE_ID_MIGRATION_105.md),
[현행 Slide Map](SLIDE_MAP.md)을 우선한다. 아래 이전 제작·Prototype·동결 기록의
번호/시간은 당시 판본이며 현행 근거 상태를 상향하지 않는다. 실환경·리허설은 UNVERIFIED다.

## Historical ACT0 sequence — DEC-0084

S05 결과→S06 근거→S07 별도 실행 오류→S08 필요한 Context→S09 사람의 전달
→S10 Agent의 허용된 조사→S11 Codex 진입→S12 접근과 의도→S13 다음 Task.
현재99장·387분 / ACT0 13장·42분. 이전 S08–S96은 S11–S99이며, 기존
Beat/Section/Demo/Trial/State IDs·11Template/27Variant·19Notes 필드를 유지한다.
이전 세 장의 Demo8분과 Case5분을 나누고 Lecture2분만 더했다. 새 Trial·복구·
우월성 측정은 없다. 아래 과거 설명/Prototype/검증 본문의 번호는 당시 판본이다.
[현재 설계](ACT0_CONTEXT_EXPANSION.md), [이행표](SLIDE_ID_MIGRATION_99.md),
[결과](../production/evaluation/ACT_0_CONTEXT_EXPANSION.md)를 우선한다.

## Historical ACT5 reassessment — DEC-0083

S90의 AI-Native 설계 관점 뒤에 S91 조건 변화에 따른 기존 Harness 재평가,
S92 유지·통합·제거 후보, S93 같은 대표 작업·기준으로 확인을 배치한다.
S88의 처음부터 도입하지 않은 판단과, 이미 쓰던 구조의 후속 재평가는 다르다.
이전 S91/S92/S93은 S94/S95/S96이며, 문제·다음 행동에 통합·제거 후보를 포함한다.
현재96장·385분 / ACT5 11장·36분. 기존 Slide별 시간·Mode와 Beat/Section/
Demo/Trial/State IDs는 유지한다.11Template/27Variant와19Notes 필드를 재사용한다.
[현재 설계](ACT5_HARNESS_REASSESSMENT.md), [번호 대조](SLIDE_ID_MIGRATION_96.md),
[로컬 검토](../production/evaluation/ACT_5_HARNESS_REASSESSMENT.md)를 기준으로 한다.
아래 이전 수정·Prototype·검증 본문은 당시 번호·범위의 이력이다.
새 Trial·측정 성과·Demo State를 추가하지 않는다. 발표 묶음은 갱신하지 않는다.

## Historical ACT5 refinement — DEC-0082

[ACT5_FLOW_REVISION](ACT5_FLOW_REVISION.md) aligns S86–S93 as distinct
journey/history/selection/acceptance/system-design/problem/action/closing
roles. S87 retains every named Product State in three chronological groups
and keeps conceptual/Meta Loop examples separate. S91→S92 uses the same
A–E problem/action correspondence plus a common evidence question. S93
closes with Chatbot→Prompt→Context→Harness→Loop. Preserve93/379, ACT5
8/30, all Slide budgets/Modes, stable IDs,11Templates/27Variants and all
evidence limits. Earlier literal screen/operation cues are historical where
they differ. ACT4's latest handoff remains DEC-0081.

> **이전 기준: DEC-0087 /105장·393분(6시간33분,2026-10-25).** ACT 장수14/22/19/19/19/12, 시간43/64/82/86/81/37분. Mode Lecture157/Demo73/Case88/Reflection21/Transition22/Q&A32분. 기존99장의 배정을 보존하고6개의 찾아보기에 Lecture1분씩 추가했다. [팁 목록](PRACTICAL_APPLICATION_TIPS.md), [105장 이행표](SLIDE_ID_MIGRATION_105.md). 실환경·리허설은 UNVERIFIED다.


Date: 2026-10-11

Status: COMPLETE WITH OPEN ITEMS

Baseline: `09d1fc9`

## 1. Purpose and Authority

이 문서는 승인된 93장 Slide Map을 전달하기 위한 발표자 운영 규칙과
Speaker Notes schema를 정의한다. Slide 화면의 문구를 읽는 대본을 만들거나
93장 Notes 본문을 작성하지 않는다.

- Slide ID, 역할, Story, Evidence reference, 시간, Mode: `SLIDE_MAP.md`
- 주장과 Evidence 경계: `CLAIM_FREEZE.md`
- 교육 원칙과 보호 규칙: `MASTER_PLAN.md`, `INVARIANTS.md`
- 결정 및 변경 통제: `DECISIONS.md`
- Visual·Template 사용 및 미검증 범위: `VISUAL_SPEC.md`,
  `SLIDE_TEMPLATE_MAP.md`, `VISUAL_TEMPLATE_FREEZE.md`
- Demo의 실제 준비·실행·Fallback 세부: `DEMO_MATRIX.md`,
  `DEMO_RUNBOOK_SPEC.md`
- ACT Story와 인과 전환: `CURRICULUM.md`, `STORY_ARCHITECTURE.md`,
  `STORY_BEATS.md`, `TRANSITIONS.md`

이 문서는 위 Source of Truth를 바꾸지 않는다. 서로 충돌하거나 확인할 수
없는 정보는 임의로 채우지 않고 `TBD`, `미확정` 또는 `N/A`로 표시한다.
기능, 계정, 제품 표면, 권한, 환경에 관한 현재 사실을 Notes에 넣을 때는
필요한 최신 공식 자료와 실제 교육 대상 환경 확인을 별도로 완료한다.

## 2. Notes Purpose

Speaker Notes는 발표자가 해당 Slide의 핵심, 근거, 진행 순서와 다음
전환을 짧게 운영하도록 돕는다. Slide 화면에는 핵심 메시지와 주 시각물을
두고, Notes에는 설명, 보여줄 근거, 해석 한계와 진행 cue를 둔다.

Notes는 다음을 수행한다.

- Map에 있는 Audience Question으로 청중의 주의를 모은다.
- 앞 장에서 남긴 문제를 회수하고, 현재 Slide의 Primary Message를 설명한다.
- 필요한 근거를 보여 준 뒤 관찰 사실과 발표자의 해석을 구분한다.
- Beginner가 가져갈 판단 기준과 Advanced audience를 위한 조건·trade-off를
  한 흐름 안에서 전달한다.
- 배정된 Mode와 시간 안에 Demo, Reflection, Q&A 및 전환을 운영한다.
- Map, Claim Freeze, Runbook이 허용하는 Claim Boundary를 전달한다.

Notes가 수행하지 않는 일: 승인된 Slide의 역할·Story·근거·시간을 다시
설계하거나, 미확정 제품 설명을 보충하거나, 실제 Evidence가 없는 공백을
대본으로 메우는 일.

## 3. Notes Schema

각 Slide는 아래 레코드를 사용한다. `N/A`는 해당 필드가 그 Slide의 역할에
해당하지 않을 때 쓴다. `TBD`는 필요한 정보가 아직 확인되지 않았을 때 쓴다.
Map에 이미 기록된 정보를 복사할 경우 의미나 범위를 축약하지 않는다.

```markdown
## SXX — [Working Title]

Slide ID:
Working Title:
ACT / Section:
Allocated Time:
Mode Split:
Primary Message:
Opening Question:
Speaker Flow:
Evidence / Source:
Claim Boundary:
Beginner Explanation:
Advanced Insight:
C++ Vision Bridge:
Demo Operation:
Audience Interaction:
Transition:
Time Management:
Fallback:
Validation Status:
```

| Field | 작성 규칙 |
|---|---|
| Slide ID / Working Title | `SLIDE_MAP.md`의 안정된 ID와 승인된 제목을 복사한다. |
| ACT / Section | Map의 ACT 및 Section ID를 그대로 사용한다. |
| Allocated Time | Map의 분 단위 시간을 복사한다. 준비 시간은 포함하지 않는다. |
| Mode Split | Map의 Mode와 분배, 해당 시 Demo subtype을 그대로 기록한다. 합계를 바꾸지 않는다. |
| Primary Message | Map의 핵심을 발표자가 한 번에 전달할 짧은 설명으로 구체화한다. 주장을 강화하지 않는다. |
| Opening Question | Map의 Audience Question을 사용하거나 그 질문을 보존하는 간결한 구어 표현을 쓴다. |
| Speaker Flow | §4의 필요한 단계만 순서대로 선택하고, 각 단계에 설명·화면 cue를 둔다. |
| Evidence / Source | 기존 State, Trial, Decision, Claim ID와 승인 Source를 연결한다. 보여줄 자료의 상태를 명시한다. |
| Claim Boundary | 허용되는 해석과 하지 말아야 할 일반화·인과 주장을 짧게 병기한다. 항상 필요하다. |
| Beginner Explanation | 전문 용어를 풀어 핵심 원리와 당장 쓸 수 있는 판단 기준을 말한다. |
| Advanced Insight | 조건, trade-off, 측정 한계 또는 System 관점의 확장이다. 시간 부족 시 생략할 수 있다. |
| C++ Vision Bridge | Map에 연결이 있을 때 Python Demo에서 Engineering Pattern으로 건너가는 설명을 둔다. 불필요한 장비·도구 목록은 만들지 않는다. |
| Demo Operation | Demo 관련 Slide에서 §6의 실행·관찰·중지·복구 정보를 채운다. 그 외는 `N/A`다. |
| Audience Interaction | Reflection, Q&A, 토론이 배정된 경우 질문, 기다릴 시간, 답변 범위와 다음 cue를 쓴다. |
| Transition | Map의 다음 질문 또는 Story 전환 이유를 이어 준다. 다음 해결책을 문제보다 먼저 공개하지 않는다. |
| Time Management | 핵심 메시지와 Mode 경계 안에서 말할 순서를 정한다. 초과 시 생략 가능한 항목을 표시한다. |
| Fallback | 실행 실패나 시간 위험에 대응할 이미 승인·검토된 경로를 지정한다. 없으면 `TBD`로 둔다. |
| Validation Status | `NOT STARTED`, `DRAFT`, `REVIEWED`, `VALIDATED`, `BLOCKED` 중 하나와 검증 범위를 기록한다. 범위가 없는 `VALIDATED` 표시는 금지한다. |

`VALIDATED`는 이 레코드에서 실제로 확인한 범위에만 적용한다. Notes의
문장 검토가 Windows PowerPoint, 현재 제품 표면, 계정 또는 Live Demo 검증을
대신하지 않는다. 각각의 상태는 별도로 표기한다.

## 4. Speaker Flow

S11은 1분 Lecture로 ChatGPT 메뉴 → Codex → Repository 폴더 → 조사 요청을 안내한다. 실제 캡처와 재구성 도식을 구분하고 현재 계정·Windows 검증을 미확정으로 남긴다. S12는 사람+Agent의 정보 접근과 사람의 최종 결정·책임을 구분하며 AI의 제안 가능성을 인정한다. S09–S10 2분 + S11 1분 + S12 2분으로 Section 0E 5분을 유지한다.


기본 단계는 필요할 때 아래 순서에서 선택한다. 모든 Slide에 여섯 단계를
기계적으로 넣지 않는다.

| Step | 목적 | 운영 |
|---|---|---|
| Open | 앞 장의 마찰 또는 현재 질문을 회수한다. | 한 가지 질문을 던지고, 답을 미리 말하지 않는다. |
| Explain | 핵심 원리와 관계를 설명한다. | Primary Message에 필요한 내용만 설명한다. |
| Show | Demo, 캡처, 비교 또는 도식을 보여 준다. | 실제 관찰과 Conceptual/Teaching Model을 표시대로 구분한다. |
| Interpret | 근거가 지지하는 의미와 한계를 해석한다. | “무엇을 봤나?”와 “무엇을 결론 낼 수 있나?”를 분리한다. |
| Transfer | 현업에서 사용할 판단 기준이나 C++ 연결을 제시한다. | Map에 있는 범위만 적용하고 새 사례를 사실처럼 보태지 않는다. |
| Transition | 남은 문제를 다음 장으로 넘긴다. | Map의 다음 질문으로 끝내고 해결책을 조기 공개하지 않는다. |

일반적인 흐름은 `Open → Explain → Show → Interpret → Transfer →
Transition`이지만, 예를 들어 Discussion은 `Open → 개인 성찰 → Transition`,
Evidence 요약은 `Open → Show → Interpret → Transition`처럼 줄인다.

## 5. Beginner / Advanced Strategy

한 교육 흐름 안에서 두 난이도를 지원한다. 초급·숙련자를 별도의 발표
트랙으로 나누지 않는다.

- **Beginner Anchor:** 쉬운 말로 핵심을 설명하고, 청중이 다음 업무에서
  적용할 수 있는 하나의 판단 기준을 준다.
- **Advanced Extension:** 조건, 대안, 범위, 원인 귀속 또는 검증 trade-off를
  추가한다. 별도의 새 Claim을 만들지 않는다.
- 시간 압박 시 Advanced Extension, 중복 예시, 부수적인 도구 설명 순으로
  줄인다. Primary Message와 Evidence / Claim Boundary는 유지한다.
- C++ Bridge는 Map에 승인된 경우에만 Pattern transfer로 사용한다. 실제
  C++ 구현, hardware 측정 또는 특정 toolchain 사실을 근거 없이 추가하지
  않는다.

## 6. Demo Operation

Demo 운영이 있는 Notes는 아래 순서로 작성한다. 실제 준비된 실행 절차와
환경 정보는 `DEMO_MATRIX.md` 및 해당 Demo Runbook을 기준으로 한다.

1. **WATCH FOR:** 이 실행에서 주목할 관찰을 소수로 한정한다.
2. **EXECUTE / SHOW:** `Delivery Type`에 맞는 실행 또는 자료 공개 cue를 둔다.
3. **OBSERVE:** 실제로 보인 출력·문서 접근·변경·검증만 기록한다.
4. **INTERPRET:** 관찰이 Story 질문에 답하는 범위와 한계를 말한다.
5. **FALLBACK:** 정해진 시간 안에 실행을 멈추고 승인된 대체 자료로 이어간다.

각 Demo Operation은 다음 필드를 빠짐없이 갖는다.

| 필수 정보 | 규칙 |
|---|---|
| Demo ID / Delivery Type | Map과 Runbook의 ID, `LIVE`, `RECORDED`, `CAPTURED`, `VISUAL`, `HYBRID` 상태를 사용한다. |
| Expected Evidence | 예상 결과가 아니라 실제 준비·검증된 근거를 특정한다. 아직 확인되지 않았다면 `TBD`다. |
| Required Environment | 확인된 OS, runtime, interface/account/model, permission 및 시작 상태만 기록한다. 미확정 항목은 미확정으로 둔다. |
| Start / Stop Cue | 관찰 지점을 명확히 하고, 예약된 해석·전환 시간을 침범하기 전에 멈출 cutoff를 rehearsal로 정한다. |
| Fallback Material | 검토된 캡처·녹화·도식과 전환 cue를 지정한다. 준비되지 않았다면 Demo 준비 항목으로 남긴다. |
| Failure Handling | 합리적인 대체 경로는 성공 기준으로 평가한다. 부분 누락은 Runbook이 허용할 때 한 번만 짧게 확인한다. 환경 실패는 준비된 자료로 전환한다. |
| Claim Boundary | 한 번의 실행, 제품 표면, 계정, 환경, Trial과 State가 증명하지 않는 내용을 적는다. |

전달 유형별 규칙:

- `LIVE`: 준비된 제한 시간 안에 운영한다. 실제 실행이 실패하면 성공한 것처럼
  즉흥 설명하지 않고 Runbook의 복구 경로를 따른다.
- `RECORDED` / `CAPTURED`: 녹화 또는 고정된 결과를 보여 준다. 이를 Live 실행,
  현재 계정의 동작, 추가 Trial로 설명하지 않는다.
- `VISUAL`: 도식·Teaching Model 또는 명시된 Conceptual Case다. 제품 로그,
  실제 Trial, 실제 PASS/FAIL의 외관을 빌리지 않는다.
- `HYBRID`: Live 구간과 준비된 fallback을 모두 적는다. Live 중단 시에도
  대체 자료로 Story를 이어 가고 관찰하지 않은 성공을 주장하지 않는다.

시연 대기 중에는 이미 정의한 WATCH FOR 하나를 가리킨다. 모든 tool call을
해설하거나 무응답 시간을 채우지 않는다. 실행이 Story를 뒷받침하지 않으면
Agent를 탓하지 말고 변동·환경 문제·가정 실패를 구분해 기록한다.

## 7. Interaction Rules

교육은 강사 주도 방식이다. 참여자의 노트북 사용, 코드 실행, 제출,
발언이나 정답 발표를 요구하지 않는다. 개인 Reflection은 응답을 요구하지
않는 짧은 생각 시간이다.

Reflection, Q&A 또는 토론이 배정된 Slide에는 다음을 적는다.

- 시작 질문 및 질문을 화면에 남길지 여부.
- 허용된 응답 범위와 침묵을 포함한 진행 방식.
- 기다릴 시간: 실제 발표 rehearsal에서 결정한다. 사전 합의가 없으면
  숫자를 지어내지 않고 `TBD`로 둔다.
- Mode 종료와 다음 cue. 응답이 없더라도 다음 내용을 진행할 수 있어야 한다.

고정 분배는 다음과 같다.

| Slide | Mode Split | 진행 조건 |
|---|---|---|
| S70 | Reflection 3분 · Q&A 5분 · Transition 2분 | 순서: Reflection → Q&A → Transition. 개인 성찰을 먼저 두고 Q&A를 받은 뒤, Transition을 마지막에 배치한다. 공유 답변을 요구하지 않는다. |
| S88 | Case 7분 · Reflection 2분 · Q&A 7분 · Transition 4분 | 순서: Case → Reflection → Q&A → Transition. Case를 R1–R5 순서로 안내하고, 개인 성찰과 Q&A를 구분한 뒤 ACT 5로 전환한다. |
| S96 | Q&A 4분 · Closing Transition 2분 | Q&A를 4분에 마감하고 2분 동안 승인된 핵심 모델로 종료한다. |

전체 Reflection 21분, Q&A 32분, Transition 22분은 각 Slide 배분과 함께
보존한다. 다른 Mode를 침범해 토론을 늘리지 않는다.

## 8. Time Management

`SLIDE_MAP.md`의 Slide별 Estimated Time과 Mode Split을 배타적인 390분
수업 시간으로 사용한다. 각 Slide의 Mode 분 합계는 Slide 시간과 같고,
Slide·Section·ACT의 합계도 승인된 값과 같아야 한다.

| ACT | Slide 수 | 승인 시간 |
|---|---:|---:|
| ACT 0 | 13 | 42분 |
| ACT 1 | 21 | 63분 |
| ACT 2 | 18 | 81분 |
| ACT 3 | 18 | 85분 |
| ACT 4 | 18 | 80분 |
| ACT 5 | 14 | 39분 |
| **합계** | **102** | **390분** |

| Mode | 승인 시간 |
|---|---:|
| Lecture | 154분 |
| Demo | 73분 |
| Case | 88분 |
| Reflection | 21분 |
| Transition | 22분 |
| Q&A | 32분 |
| **합계** | **390분** |

운영 규칙:

- Slide 안의 설명·Demo·질문 cue는 자기 배정 시간을 넘기지 않는다.
- 일반 Slide에서는 Primary Message와 필수 해석 한계를 우선한다. 시간 초과가
  예상되면 Advanced Extension, 반복 설명, 부수 예시를 먼저 생략한다.
- Demo는 cutoff에 도달하면 정해진 Fallback으로 전환한다. 해석과 다음
  Transition 시간을 Demo 대기 시간으로 쓰지 않는다.
- 질문이 남으면 지정 Q&A 시간을 넘기지 않고 별도 후속 경로가 승인된 경우에만
  그 경로를 안내한다. 다른 Slide의 시간으로 옮기지 않는다.
- 수업 전 setup은 교육 시간 밖에서 준비한다. 화면에 보이는 setup은 해당
  Slide/Demo 배정 시간 안에 포함한다.
- 휴식은 390분 외부다. Notes에서 ACT 또는 Mode 합계를 조정하지 않는다.

## 9. Evidence / Claim Rules

Notes와 발표 표현은 `CLAIM_FREEZE.md`의 Claim Status와 아래 Evidence Type을
구별한다. Visual frame은 구분을 돕지만 새로운 근거가 되지 않는다.

| Evidence Type | Notes에서 지킬 경계 |
|---|---|
| `OBSERVED_PRODUCT` | 실제 Demo repository State, Trial 또는 확인된 결과를 그 범위로만 설명한다. |
| `OBSERVED_META` | 실제 교육자료 제작·평가 기록을 설명한다. Product code/State의 사건으로 바꾸지 않는다. |
| `CONCEPTUAL` | 구성된 사례임을 먼저 말하고 끝까지 유지한다. 관찰된 실패나 Trial 결과라고 하지 않는다. |
| `RESEARCH` | 연구 대상, 과제, 조건, 해석 한계와 출처를 함께 둔다. 현재 제품 동작의 증거로 쓰지 않는다. |
| `TEACHING_MODEL` | 이 과정의 설명 모델/heuristic으로 밝힌다. 공식 제품 taxonomy나 보편 법칙으로 말하지 않는다. |

Evidence Type과 Claim Status는 별개다. Slide에 여러 종류가 함께 있으면
각 종류와 근거를 따로 설명한다. `Observed`, `designed`, `conceptual`,
`unknown` 상태를 혼합하지 않는다.

- **관찰 / 해석:** 먼저 확인한 사실을 말하고, 그 사실에서 가능한 해석과
  범위를 이어 말한다. 한 번의 실행으로 일반 성능·우월성·인과를 주장하지
  않는다.
- **Benchmark:** 관련 수치를 사용할 때 입력, code path/State, host/runtime,
  sample 수 및 correctness guard를 해당 수치와 함께 둔다. `tracemalloc`은
  Python allocation peak이지 process RSS가 아니다. 전후 변화만으로 Harness,
  Skill 또는 Prompt의 단독 원인을 주장하지 않는다.
- **현재 제품 기능:** 제품 surface, 계정, 권한 또는 현재 동작을 말해야 하면
  공식 자료와 대상 환경 확인 전까지 `REQUIRES PRODUCT CHECK`/미확정 상태를
  Notes와 발표에서 유지한다.
- **시간 압박:** 핵심 설명은 줄일 수 있지만 Claim Boundary, benchmark 조건,
  Conceptual/Observed 구분은 제거하지 않는다.
- **변경:** Map/Claim Freeze의 의미를 바꾸고 싶다면 Notes에서 해결하지 않는다.
  `DECISIONS.md` Change Control 절차로 제안하고 승인을 기다린다.

## 10. Notes Length / Density

- 일반 Slide의 발표 설명은 핵심 3–6개 문장 수준으로 유지한다. 이는
  발표자가 말할 문장의 목표이지 화면에 문단을 추가하는 기준이 아니다.
- Demo는 설명 문단보다 WATCH FOR, 실행·자료 cue, 관찰, 해석, Fallback 중심으로
  적는다.
- Discussion/Reflection은 질문, 기다릴 시간, 예상 답변 범위, 다음 cue를
  중심으로 적는다.
- Evidence Slide는 관찰 사실, 해석, Claim Boundary를 구분해 짧게 쓴다.
- 추가 배경은 강의 중 장문으로 읽지 않는다. 필요한 경우 기존 Reference나
  별도 Appendix 후보로 연결한다. 이번 문서에서는 Appendix를 만들지 않는다.
- 화면의 시각 계층·읽기 순서를 다시 Notes로 옮기지 않는다. 발표자가 실제로
  짚어야 할 영역이나 Reveal 순서만 운영 cue로 기록한다.

## 11. Fallback Strategy

Fallback은 Demo별 Runbook에서 준비·검토된 자료와 cutoff에 연결한다.
확인되지 않은 녹화, 캡처, 명령, 결과, 제품 경로를 Notes에서 가정하지 않는다.

1. Agent가 합리적인 다른 경로를 사용해도 결과가 성공 기준을 충족하면 그
   경로를 유지하고 차이를 설명한다.
2. 필요한 관찰이 일부 빠졌다면 Runbook이 허용할 때 짧은 후속 요청을 한 번
   한다. 원하는 제품 기능이나 출력으로 억지 유도하지 않는다.
3. Network, dependency, permission, tool 또는 workspace 실패가 나면 준비된
   capture/recording으로 전환하고 환경 실패를 숨기지 않는다.
4. 실행이 불가능하면 검토된 visual 또는 recording으로 Story를 이어 가며,
   실행을 관찰한 것처럼 말하지 않는다.
5. Fallback 자료 자체가 준비되지 않았다면 해당 Live Demo를 성공한 것으로
   대체하지 않는다. 운영 상태를 `BLOCKED` 또는 미확정으로 남기고 재검토한다.

Captured material은 현재 제품 surface의 새 확인이 아니다. Conceptual visual은
Trial을 대체하는 Evidence가 아니다. `HYBRID`는 fallback이 준비되어야 한다.

## 12. High-risk Slides

이 표는 Notes 작성 및 검토 시 반드시 재확인할 경계다. 실제 Notes는 아직
작성되지 않았다. 세부 실행 파일과 증거는 각 Slide의 Map reference 및
`DEMO_MATRIX.md`에서 확인한다.

| Slide | 운영상 위험 | Notes에서 반드시 보존할 것 |
|---|---|---|
| S21 | TRIAL-002 Code/Diff를 현재 Live 수정으로 오인하거나 원인·검증을 생략할 수 있다. | CAPTURED evidence임을 표시한다. 조사와 호출 경로 확인 뒤 `[x_start, x_end)` 계약을 지키는 한 줄 수정으로 이어진 사실만 설명한다. 전체 diff를 즉흥 재연하지 않는다. |
| S50 | Task별 문서 접근을 완벽한 Routing 또는 성능 효과로 일반화할 수 있다. | TRIAL-005A/B 비교와 변동을 함께 둔다. `image-contracts.md` 접근 차이는 관찰 사실로, perfect routing·token saving·performance improvement는 미입증으로 말한다. |
| S61 | Benchmark 값을 Harness의 단독 효과로 귀속하거나 측정 조건을 빠뜨릴 수 있다. | STATE-04 → STATE-04-PERF의 `image_statistics`: `15.468 → 10.769 ms/call`, `tracemalloc` peak `6,675,804 → 380 B`. Synthetic 1024×768 입력, 동일 fingerprint, CPython 3.9.6 / macOS 26.6.2 arm64, State별 7회 one-call sample, focused test 1/1, full suite 11/11, CLI smoke 및 benchmark/correctness guards를 보존한다. 이는 해당 code path와 환경의 bounded 결과이며 Harness의 단독 효과가 아니다. |
| S70 | Q&A·성찰이 배정 시간을 넘거나 응답을 요구하는 방식으로 바뀔 수 있다. | Reflection 3 + Q&A 5 + Transition 2분을 지킨다. 개인 성찰은 선택이며, 공유·제출을 요구하지 않는다. |
| S71 | 실제 Product 성공을 뒤의 Conceptual 사례와 합쳐 재해석할 수 있다. | STATE-04-PERF의 bounded success를 기준점으로 남기고 실제 stale failure라고 말하지 않는다. |
| S72 | 가상 시작 상태가 Product Trial처럼 보일 수 있다. | `CONCEPTUAL`/DEMO-04A 표시를 유지한다. Project 변화·실패·원인·수정은 실제 `ai-dev-training-demo` history가 아니다. |
| S82 | 과정의 Loop 모델을 제품의 자동 학습·자동 수정 기능으로 오해할 수 있다. | `Execution → Observation → Cause → System Change → Re-evaluation`을 Teaching Model로 설명한다. 자동화 또는 반복 그 자체를 Loop 성과로 주장하지 않는다. |
| S83–84 | 교육 제작 Meta 기록을 Product Demo나 Conceptual 사례의 후속 결과로 혼합할 수 있다. | `TRIAL-006 → DEC-0016 → TRIAL-007/008`의 OBSERVED_META 경로를 별도 표시한다. PARTIAL attribution, TRIAL-007 report/stderr 차이, 미측정 Trial-quality effect를 숨기지 않는다. |
| S84 | 보조 benchmark 수치를 성과 headline 또는 Prompt/Skill 인과로 확대할 수 있다. | `144.2 → 33.5 ms/call`은 작은 보조 Evidence로만 사용한다. `resize_nearest`, TRIAL-006 disposable worktree, synthetic 640×480 grayscale (`max_value=4095`) → 960×720, CPython 3.9.6 / macOS 26.6.2 arm64, 7회 one-call sample, input/output SHA-256 guard와 one before/after pair를 함께 둔다. Global Skills 등 ambient influence 때문에 Prompt-only attribution은 PARTIAL이며 Prompt·Skill·Harness·hook·MCP에 귀속하지 않는다. |
| S85–83 | 평가·보고 변경을 완전한 환경 통제나 검증 품질 향상으로 부를 수 있다. | DEC-0016은 평가·보고 정책 변경이다. 후속 적용은 부분적이며, TRIAL-007 MCP report/stderr 불일치와 quality 효과 미측정을 명시한다. |
| S87 | Meta Loop가 Product code 또는 `graypipe-performance` Skill을 수정했다고 오해할 수 있다. | 바뀐 것은 Training Production의 Trial 평가·보고 방식이다. Product State 변화, DEMO-04A의 인과, 완전한 개선은 주장하지 않는다. |
| S88 | 20분 운영을 리허설 완료로 오해하거나 구체적 C++/환경 예시를 현재 사실처럼 말할 수 있다. | 정적 Slide와 speaker-led highlighting을 기본으로 쓴다. Case 7 + Reflection 2 + Q&A 7 + Transition 4분을 유지한다. 20분 timed rehearsal은 미수행이며 Windows/target-screen은 미검증이다. |

## 13. Validation Rules

Speaker Notes Pilot 및 이후 Notes 검토에서 다음을 확인한다.

1. **Traceability:** Slide ID, 제목, ACT/Section, Primary Message, Evidence,
   Transition이 `SLIDE_MAP.md` 및 연결된 Story Beat/Claim과 일치한다.
2. **Timing:** Slide별 Mode 합계 = Allocated Time. Section/ACT 합계 및 전체
   Mode/390분 합계가 승인값과 일치한다. Reflection, Q&A, Transition을 다른
   Mode에 중복 계산하지 않는다.
3. **Evidence:** 명시한 State, Trial, Decision, Research source가 존재하고,
   관찰과 해석, 실제·개념·모델 경계가 유지된다. 근거 미확인은 `TBD`다.
4. **Demo readiness:** 해당 Slide의 Demo ID/Type, Evidence, Environment,
   cue, fallback, failure handling 및 Claim Boundary가 Runbook과 맞는다.
   실제 Runbook이 정하지 않은 준비물은 채우지 않는다.
5. **Interaction:** hands-on, 강제 발언·제출, 개인 성찰의 강제 공유가 없다.
   배정된 Q&A/Reflection/Transition 시간을 지킨다.
6. **Density:** 일반 설명은 3–6개 문장 수준이고, Demo는 절차형, Discussion은
   cue 중심, Evidence는 관찰/해석 분리형이다.
7. **Claim:** 시간 압박용 요약에도 Claim Boundary와 benchmark condition이
   남고, 제품 기능 또는 environment claim은 해당 check 상태를 표시한다.
8. **Delivery status:** `VALIDATED` 판정에 검증 대상과 환경·자료 범위를 쓴다.
   local render, Notes proofreading, captured result 중 어느 하나도 다른
   검증을 대신하지 않는다.
9. **Change control:** Map, Story, Claim, time, mode, Demo selection과 충돌하는
   내용이 발견되면 임의로 고치지 않고 Decision 제안으로 올린다.

## 14. Open Items

- 대상 Codex 계정·제품 표면과 현재 기능 확인은 Slide별로 필요한 시점에
  완료해야 한다. `CLAIM_FREEZE.md`의 `REQUIRES PRODUCT CHECK`를 닫지 않았다.
- Live/Hybrid Demo의 실제 환경, rehearsal 기반 fallback cutoff, 준비된
  capture/recording 여부는 해당 Runbook에서 확인해야 한다.
- Windows PowerPoint, 대상 글꼴, 교육장 화면/투사 검증은
  `VISUAL_TEMPLATE_FREEZE.md`의 최종 배포 Gate로 남아 있다.
- S88 20분 timed rehearsal은 아직 수행되지 않았다.
- Conditional/Provisional Template 및 Variant는 첫 실제 적용에서 각자의
  시각 Gate를 통과해야 한다.
- 다음 단계에서 Pilot Slide와 Notes 본문 작성 범위를 정해야 한다. 이 문서는
  Pilot 결과나 93장 Notes의 `VALIDATED`를 선언하지 않는다.

## 15. Next Readiness

**READY FOR SPEAKER NOTES PILOT.**

이 상태는 schema, flow, timing, evidence boundary 및 review gate를 사용해
제한된 Pilot Notes를 검토할 준비가 되었음을 뜻한다. 82장 완성 Notes, PPT
제작, 현재 제품 동작, Windows 호환성, Live Demo 또는 S80 rehearsal 완료를
뜻하지 않는다.

## 16. Updated Documents

- Created: `plan/SPEAKER_NOTES_ARCHITECTURE.md`

이 단계에서는 승인된 기획 Source 외의 문서, PPT, Demo Repository를 변경하지
않았다.

## DEC-0038 — S14–S17 Operating Alignment

S14은 Case7분을 유지한다. 요청 입력창과 우측 세 질문을 보존하고 Agent·비용
그림은 교육용 개념임을 구분한다. S15는 Case2분으로 가능한 세 해석과 빈 다섯 정보를
보여준다. 새 S16은 Case2분으로 같은 시간선에서 원하는 구현 경로를 명시한 예시를
읽는다. 이는 성공 결과가 아니므로 검증 필요를 남긴다. S17는 기존 Case3+Reflection1분을
유지하며 구체 예시의 정보를 일반적인 다섯 개발자 질문으로 확장한다.

19개 Notes 필드와 전체 ACT/Mode/Section 시간은 변하지 않는다. 가상의 시간선을
실제 실행·Subagent·확률로 설명하거나 토큰/시간의 지수 증가를 측정 사실로 표현하지 않는다.
