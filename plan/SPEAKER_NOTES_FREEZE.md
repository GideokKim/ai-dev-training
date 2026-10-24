# STEP 08 — Speaker Notes Freeze

## Current ACT3→ACT4 connection — DEC-0080

S67 closes location/maintenance ownership with recheck timing. S68 briefly
retains the observed success and opens maintenance; S69 connects reusable
Workflow to the role previously implemented as a Skill, without making the
conceptual case the same file/history. S70/S75 recover review/update roles.
S72→S73→S74 now means records to inspect→scenario information versus cause
hypothesis→response selection after assumed confirmation. S75 scopes human
update/review and S76 opens re-evaluation. S79 uses spaced, wrapped phases;
S65 is the environment preview and S80/S81 focus on evaluation/reporting.

Preserve93/379, ACT3 18/85, ACT4 18/80, every Slide time/Mode and stable IDs.
Template assignments S72=T08-C, S73=T08-C, S74=T08-B match redistributed
content; no Template/Variant is added. DEMO-11 remains S72 Demo2+S73 Demo1;
S74 stays Case2. Actual Product success, conceptual scenario and observed
Meta remain separate. Prior records below are history where literal current
cues differ. [Current connection design](ACT3_ACT4_HANDOFF_REVISION.md).

> **현재 기준: DEC-0060 /93장·379분 (2026-10-22).** ACT 장수10/21/18/18/18/8, 시간40/63/81/85/80/30분. Mode Lecture143/Demo73/Case88/Reflection21/Transition22/Q&A32분. ACT2는 S32–S49이며 기존90장 내용·장별 시간을 보존하고3장·11분을 더했다. 사용자 허용 상한720분은 목표 시간이 아니다. [현재 번호 대조](SLIDE_ID_MIGRATION_93.md), [ACT2 흐름 설계](ACT2_FLOW_REVISION.md). 과거 Prototype/Decision/검증 기록은 당시 판본이며 실환경·리허설은 UNVERIFIED다.


Date: 2026-10-11

Status: CONDITIONALLY FROZEN

Baseline: `a08301c`

Related decision: DEC-0026

## 1. Purpose and Authority

이 문서는 승인된 93장 PPT의 Notes 제작 기준을 동결한다. 새로운 강의 내용,
Slide 역할, Story, Evidence, Claim 또는 시간 배분을 설계하지 않는다.

- Slide ID, Story, Evidence reference, Slide별 시간과 Mode: `SLIDE_MAP.md`
- Claim과 Evidence 경계: `CLAIM_FREEZE.md`
- 발표자 운영 방식과 Notes schema: `SPEAKER_NOTES_ARCHITECTURE.md`
- 검토된 Notes 예시와 남은 검증: `SPEAKER_NOTES_PILOT.md`,
  `SPEAKER_NOTES_PILOT_EVALUATION.md`
- Template·시각 규칙 및 구현 상태: `SLIDE_TEMPLATE_MAP.md`,
  `VISUAL_TEMPLATE_FREEZE.md`
- 실제 Demo 조건과 Fallback: `DEMO_RUNBOOK_SPEC.md`, `DEMO_MATRIX.md`
- 결정 이력과 변경 통제: `DECISIONS.md`

이 동결은 Notes 제작 기준에 적용한다. Slide Map, Claim Freeze, Demo 근거,
제품 동작 또는 상위 기획을 대체하지 않는다. 충돌하거나 미확정인 내용은
추측하지 않고 `TBD`, `미확정`, `N/A` 또는 `PROVISIONAL`로 남긴다.

## 2. Freeze Scope

다음 19개 필드 이름과 역할을 전체 Notes의 고정 schema로 사용한다.

1. `Slide ID`
2. `Working Title`
3. `ACT / Section`
4. `Allocated Time`
5. `Mode Split`
6. `Primary Message`
7. `Opening Question`
8. `Speaker Flow`
9. `Evidence / Source`
10. `Claim Boundary`
11. `Beginner Explanation`
12. `Advanced Insight`
13. `C++ Vision Bridge`
14. `Demo Operation`
15. `Audience Interaction`
16. `Transition`
17. `Time Management`
18. `Fallback`
19. `Validation Status`

`Primary Message`, `Opening Question`, `Speaker Flow`, `Beginner Explanation`,
`Advanced Insight`, `Evidence / Source`, `Claim Boundary`, `Demo Operation`,
`Audience Interaction`, `Transition`, `Time Management`, `Fallback`은 Notes의
주요 운영 책임으로 유지한다. Map에 없는 주장이나 설명을 추가하지 않는다.

### N/A and TBD

- `N/A`: 해당 Slide의 역할에 적용되지 않음이 확인된 경우에만 쓴다.
- `TBD` / `미확정`: 필요한 근거나 결정이 아직 없는 경우 쓴다.
- 빈 칸을 완성도처럼 보이게 하려고 N/A로 바꾸지 않는다.
- 미확정 정보를 추정해 구체화하지 않는다.

### Validation Status

Architecture에서 지정한 상태를 유지한다: `NOT STARTED`, `DRAFT`,
`REVIEWED`, `VALIDATED`, `BLOCKED`. `VALIDATED`에는 확인한 범위를 함께 쓴다.
문서 검토는 실제 발표, Windows PowerPoint, 제품 표면, 계정 또는 Live Demo
검증을 대신하지 않는다.

## 3. Time and Mode Freeze

`SLIDE_MAP.md`의 Slide별 Estimated Time 및 Mode Split이 유일한 운영 기준이다.
시간 또는 Mode 합계를 재배분하지 않는다.

| ACT | Slide range | Slide count | Time |
|---|---|---:|---:|
| ACT 0 | S01–S10 | 10 | 40분 |
| ACT 1 | S11–S31 | 21 | 63분 |
| ACT 2 | S32–S49 | 18 | 81분 |
| ACT 3 | S50–S67 | 18 | 85분 |
| ACT 4 | S68–S85 | 18 | 80분 |
| ACT 5 | S86–S93 | 8 | 30분 |
| **전체** | **S01–S93** | **93** | **379분** |

| Mode | 시간 |
|---|---:|
| Lecture | 143분 |
| Demo | 73분 |
| Case | 88분 |
| Reflection | 21분 |
| Transition | 22분 |
| Q&A | 32분 |
| **전체** | **379분** |

각 Slide의 Mode 순서는 배정 시간의 의미를 바꾸지 않는 운영 순서다. Mode별
합계와 Slide별 시간이 정확히 맞아야 하며, setup은 배정된 운영 기준을 따른다.

## 4. High-risk Slide Boundaries

DEC-0036 추가 경계: S08의 Codex 메뉴는 공식자료 기반 재구성이며 현재 UI·발표 계정·Windows는 UNVERIFIED다. S09는 정보 접근과 사람의 최종 책임을 구분하며 AI의 판단·제안 자체를 부정하지 않는다. S07 2분/S08 1분/S09 2분, Section 0E 5분을 적용한다.


| Slide | 동결할 진행 순서 / 근거 | 반드시 유지할 경계 |
|---|---|---|
| S18 | TRIAL-002의 crop 수정과 실제 기록된 check를 연결 | Crop은 `[x_start, x_end)` 계약이며 `row[x_start:x_end]`가 구현이다. 단일 CLI Trial 범위다. |
| S47 | TRIAL-005A/B의 Task별 문서 접근을 비교 | 관찰된 접근 차이와 해석을 분리한다. Perfect routing은 입증되지 않았고 token 절감·성능 향상은 측정되지 않았다. |
| S58 | STATE-04 → STATE-04-PERF의 benchmark와 verification | 값은 기록된 workload·환경에 한정한다. Harness를 단독 원인으로 돌리지 않고 `tracemalloc` peak를 RSS로 말하지 않는다. |
| S67 | Reflection 3분 → Q&A 5분 → Transition 2분 | 총 10분. Transition이 다음 Story로 마지막 handoff를 한다. DEC-0025. |
| S68–S69 | S68 Observed Product → S69 Conceptual Case | STATE-04-PERF endpoint와 구성된 stale-workflow 사례를 섞지 않는다. S69은 Demo Repository의 실제 사건이 아니다. |
| S79–S80 | S79 Teaching Model → S80 Observed Meta | S79은 과정의 개념 모델, S80은 TRIAL-006의 제작 기록이다. Product code 사건이나 완전한 인과 귀속으로 바꾸지 않는다. |
| S85 | Case 7분 → Reflection 2분 → Q&A 7분 → Transition 4분 | 정적 시각물과 Speaker-led highlighting을 기본으로 한다. 가상 C++ 사례는 실제 GPU/제품 Trial이 아니며 20분 rehearsal은 UNVERIFIED다. |

## 5. Evidence, Claim, and Product Gate

- Evidence Type과 Claim Status를 별도 축으로 유지한다.
- `OBSERVED_PRODUCT`, `OBSERVED_META`, `CONCEPTUAL`, `RESEARCH`,
  `TEACHING_MODEL`의 경계를 Notes와 화면에서 보존한다.
- 관찰값은 해당 Trial, State, 입력, 환경에 한정한다. 한 번의 결과로 제품
  전반의 우월성, 반복성, 성능 또는 단독 인과를 주장하지 않는다.
- 현재 제품 surface, 계정, 권한, 기능 또는 실행 경로를 말할 때는 승인된
  최신 공식 자료와 실제 대상 환경 확인이 필요하다. 확인 전에는 조건을
  `REQUIRES PRODUCT CHECK` / `TBD`로 유지한다.
- 제품 기능·계정·환경의 미확정 상태가 Notes schema나 고정 시간표를
  변경하게 하지 않는다. 근거가 직접 필요한 Slide는 제작 기록에서
  `PROVISIONAL`로 표시하고 해당 근거 Gate를 통과할 때까지 확정하지 않는다.

## 6. Fallback Gate

S18, S47, S80의 fallback 상태는 현재 모두 `PLANNED`다.

| Slide | 사용 가능한 기록 | 현재 상태 |
|---|---|---|
| S18 | `DEMO_MATRIX.md`의 TRIAL-002 기록; `prototype/preview/v2/S16.png` | PLANNED. PNG는 재구성된 prototype copy이며 실제 Trial screenshot이 아니다. |
| S47 | TRIAL-005A/B 기록; `prototype/preview/v2/S35.png` | PLANNED. PNG는 재구성된 접근 matrix이며 raw access log가 아니다. |
| S80 | TRIAL-006 기록; `prototype/preview/v2/S67.png` | PLANNED. PNG는 재구성된 timeline이며 CLI screenshot이 아니다. |

선택된 최종 자료의 파일·경로·내용을 확인하기 전에는 어느 것도 `READY`로
올리지 않는다. 기록, prototype copy, raw capture는 서로 구분해 표기한다.
Fallback이 없거나 검증되지 않은 HYBRID Demo는 최종 발표용으로 승인하지
않는다. 실행 실패 시 대체 경로를 실제 발표 흐름 안에서 확인한다.

## 7. S85 Rehearsal Gate

S85는 Case 0–7분, Reflection 7–9분, Q&A 9–16분, Transition 16–20분이다.
질문이 없는 경우의 fallback question과 16분 cutoff cue는 Pilot에 기록돼
있다. 실제 timed rehearsal, 청중 Q&A, 운영 속도 검증은 수행되지 않았으므로
`UNVERIFIED`로 유지한다. 운영 Cue는 완성 Notes나 검증 완료 판정이 아니다.

## 8. Final Delivery Gates

다음은 Notes schema freeze로 충족되었다고 간주하지 않는다.

- Windows PowerPoint에서 열기, 글꼴 대체, 한글·영문·코드 줄바꿈 확인.
- 실제 교육 계정과 선택한 Codex 제품 표면의 current-state 확인.
- Live Demo 실행 경로와 Fallback의 실제 점검 및 rehearsal.
- 대상 화면에서 Safe Area, citation, Evidence frame 확인.
- S85의 timed 20분 rehearsal.
- 선택된 최종 S18/S47/S80 자료의 파일과 내용 확인.

Mac / LibreOffice 렌더링은 Windows 검증을 대신하지 않는다. 최종 Gate의
증거가 기록되기 전에는 관련 항목을 UNVERIFIED로 둔다.

## 9. Change Control

Notes는 Slide Map, Claim Freeze, 승인된 Decision, Demo evidence를 구현한다.
여기서 Slide, Claim, Mode, ACT 시간 또는 Evidence 범위를 바꾸지 않는다.
변경 필요성이 발견되면 영향과 근거를 `DECISIONS.md`에 먼저 기록하고,
해당 Source of Truth를 변경하기 전 기존 승인 경계를 보존한다.

## 10. Validation Summary

- Notes Architecture에 정의된 schema: 19 fields.
- Pilot: 7개 Slide이며 각 Notes는 19 fields를 포함한다.
- Pilot 검토: `COMPLETE WITH OPEN ITEMS`; 이는 문서 검토이지 rehearsal이 아니다.
- S67/S85 순서: DEC-0025와 일치.
- 93 Slides, ACT별 40/63/81/85/80/30분, Mode별 143/73/88/21/22/32분 유지.
- 미검증 제품·Windows·fallback·rehearsal Gate는 미해결로 유지.

## 11. Next Readiness

**READY TO USE AS THE SPEAKER NOTES PRODUCTION STANDARD.**

이 준비 상태는 schema와 운영 기준의 사용을 허용한다. 82개 Notes가 작성·검토됐거나,
PPT·제품 표면·Fallback·Windows·실제 발표가 검증됐다는 뜻은 아니다.

## DEC-0038 — Prompt-Path Addition

신규 S13은 기존 19필드 구조를 사용한다. S11 Case7, S12 Case2, S13 Case2,
S14 Case3+Reflection1을 적용한다. S11 비용 도식은 정성 가정, S12 경로는 가능한
해석, S13 강조는 원하는 작업 방향으로 구분한다. 실제 결정성·정확성·비용 절감은
미입증이며 실행 후 검증 Gate를 보존한다. 공식82장 범위와 Notes 이행은
SLIDE_ID_MIGRATION_82.md 및 최신 제작 검토를 따른다.
