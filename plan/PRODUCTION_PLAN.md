# STEP 08 — ACT-by-ACT Production Plan

> **현재 기준: DEC-0036 / 81장 (2026-10-21).** 새 S08을 삽입하고 종전 S08–S80을 S09–S81로 이동했다. 총 360분과 ACT·Mode 합계, 기존 Beat·Section·Demo·Trial·State ID는 유지한다. [번호 대조·문서 범위](SLIDE_ID_MIGRATION.md). 과거 프로토타입 경로와 명시된 80장 이력은 당시 번호를 보존한다.

Date: 2026-10-11

Status: READY FOR ACT 0 PRODUCTION

Related decision: DEC-0026

## 1. Purpose and Boundary

이 문서는 승인된 81장 Slide Map, 조건부 Visual System, Template Mapping과
Speaker Notes 기준에 따라 최종 교육자료를 ACT 단위로 제작하는 실행 순서를
정한다. 이번 문서는 제작 계획이며 실제 Slide content, Notes 본문, PPT를
생성하지 않는다.

기획 변경, Claim 확대, Slide 추가·삭제, 시간 재분배, Demo Repository 변경은
이 계획의 범위가 아니다. `SLIDE_MAP.md`와 각 상위 Source of Truth를 유지한다.

## 2. Production Readiness Gate

| 선행 조건 | 판정 | 범위와 제한 |
|---|---|---|
| Slide Map | 충족 | S01–S81, Slide별 역할·근거·시간·Mode가 기록돼 있다. |
| Claim Boundary | 충족 | `CLAIM_FREEZE.md`가 기준이며 제품·환경별 open check도 유지한다. |
| Visual System | 조건부 충족 | `VISUAL_TEMPLATE_FREEZE.md` 기준을 사용한다. Windows와 target screen은 최종 delivery Gate다. |
| Template Mapping | 충족 | 11개 Template과 27개 Variant가 Map에 있다. Prototype 미검증 Variant는 첫 적용 때 검증한다. |
| Speaker Notes 구조 | 충족 | 19개 필드와 N/A/TBD 및 범위가 명시돼 있다. |
| Pilot 정합성 | 조건부 충족 | 7개 Notes의 document review를 완료했다. 각 Notes는 DRAFT이며 pacing·media·실제 발표는 미검증이다. |
| PPT 제작 방식 | 샘플 범위 충족 | 8장 편집 가능한 V2 prototype과 local render가 확인됐다. 81장 일괄 제작, Windows, projection, shared-style propagation은 검증하지 않았다. |

### Slide-level provisional handling

- S04–S06은 TRIAL-001의 제한된 Codex CLI 관찰을 그 범위 그대로 사용할 수
  있다. 현재 Codex Desktop/계정 동작이나 최종 Live/Hybrid 실행 surface는
  확인되지 않았으므로 그 부분의 visual·operation·product claim은
  `PROVISIONAL` 또는 `TBD`로 관리한다.
- ACT 0에서 처음 적용할 T05-A(S04)와 T07-A(S05–S06)는 Visual Template Freeze의
  미검증 Variant다. 첫 구현에서 Problem/Watch와 Evidence frame, Claim 범위,
  화면 밀도 및 Map 역할을 검토한 뒤 같은 Variant를 반복 적용한다.
- 직접 근거가 없는 다른 Slide/Variant도 추정으로 채우지 않는다. 영향을 받는
  Slide만 `PROVISIONAL`로 두고, 필요한 근거가 확인된 뒤 해당 ACT 내에서
  재검토한다.
- 미검증 Variant의 첫 구현에서 구조·밀도·Claim 경계에 문제가 나오면 해당
  Variant의 반복 적용을 중지하고 수정·검증한다.

이 Gate들은 ACT 0 제작 시작을 막지 않는다. 미해결된 개별 Slide의 확정 또는
해당 Demo 운영 승인을 막으며, 그 상태를 다음 ACT로 숨기고 넘기지 않는다.

## 3. ACT Production Order

DEC-0036의 현재 제작 범위는 81장이다. S07 Lecture 3분을 S07 2분 + 신규 S08 1분으로 나누고 종전 S08–S80을 S09–S81로 이동한다. S08의 실제 UI·계정·Windows 확인은 제품 Gate에 남긴다. 이전 80장 제작·검증 기록은 해당 판본의 이력이며, 현재 81장 결과는 새 제작 및 렌더 검토 기록으로 별도 확인한다.


ACT는 다음 순서로 하나씩 진행한다. 각 단계는 해당 ACT의 1차 산출물을
검토·수정하고 Git checkpoint를 만든 뒤에 다음 ACT를 시작한다.

| 순서 | ACT | Slide range | Slide 수 | 시간 | 완료 후 |
|---:|---|---|---:|---:|---|
| 1 | ACT 0 | S01–S10 | 10 | 40분 | 검토 및 checkpoint 후 ACT 1 |
| 2 | ACT 1 | S11–S22 | 12 | 55분 | 검토 및 checkpoint 후 ACT 2 |
| 3 | ACT 2 | S23–S37 | 15 | 70분 | 검토 및 checkpoint 후 ACT 3 |
| 4 | ACT 3 | S38–S55 | 18 | 85분 | 검토 및 checkpoint 후 ACT 4 |
| 5 | ACT 4 | S56–S73 | 18 | 80분 | 검토 및 checkpoint 후 ACT 5 |
| 6 | ACT 5 | S74–S81 | 8 | 30분 | 최종 delivery Gate 검토 |
| **합계** |  | **S01–S81** | **81** | **360분** |  |

ACT 시간은 `SLIDE_MAP.md`의 배정이며 break/setup을 포함하지 않는다.

## 4. Per-ACT Workflow

각 ACT에서 아래 순서를 지킨다.

1. **Slide Content:** Slide Map의 역할, 질문, 핵심 메시지, Story와 Transition을
   구현한다. 새 내용으로 Map을 대체하지 않는다.
2. **Speaker Notes:** 동결된 19-field schema로 해당 ACT의 Notes를 쓴다.
   N/A/TBD와 `PROVISIONAL` 근거를 그대로 드러낸다.
3. **Template:** 해당 Slide의 Mapping과 Visual System을 적용한다. 미검증
   Variant는 첫 Slide 적용 직후 구조·밀도·Evidence 경계를 검토한다.
4. **Evidence:** Demo, Trial, State, Research 또는 Teaching Model을 Map과
   Claim Freeze에 맞춰 연결한다. 재구성 그림을 원본 캡처로 표현하지 않는다.
5. **Render:** ACT 범위의 Slide를 제작 산출물로 렌더하고 파일·비율·잘림·겹침을
   확인한다. local render의 환경 범위를 기록한다.
6. **Quality Review:** Story 연속성, 초급/고급 설명, Evidence/Claim, 시간/Mode,
   Template 및 접근성 기준을 확인한다.
7. **Revision:** 관찰된 문제만 수정하고 다시 렌더·검토한다. 고정된 Map·Claim·시간
   변경이 필요하면 제작을 멈추고 Decision 절차를 거친다.
8. **Git Checkpoint:** 정상 산출물과 검증 범위를 기록·commit한다. 사용자 요청에
   따른 저장소별 Git 정책과 기존 remote 정책을 따른다.

현재 계획은 Demo Repository를 변경하거나 새로운 Trial을 수행하도록 승인하지
않는다. 개별 Demo 실행·capture는 해당 단계의 명시된 승인을 따르고, 근거 없이
실행된 것으로 기록하지 않는다.

## 5. Evidence, Claim, and Demo Gates

- Slide의 Evidence Type과 Claim Status는 서로 다른 상태로 기록한다.
- `OBSERVED_PRODUCT`, `OBSERVED_META`, `CONCEPTUAL`, `RESEARCH`,
  `TEACHING_MODEL`을 하나의 증거 프레임으로 섞지 않는다.
- Benchmark 값에는 workload와 환경 및 기록된 verification을 연결한다.
  Harness·Skill·Prompt가 단독 원인이라고 확대하지 않는다.
- S17/S36/S68 fallback은 현재 `PLANNED`다. 선택된 최종 asset과 경로를 확인하기
  전에는 `READY`로 바꾸지 않는다. HYBRID Demo에 검증된 Fallback이 없으면
  최종 운영을 승인하지 않는다.
- 현재 계정, 제품 surface, permission, live path 또는 제품 동작을 포함하는
  Slide는 최신 공식 자료와 실제 대상 환경을 확인한다. 미확정이면 해당
  Slide/operation을 `PROVISIONAL`로 남긴다.

## 6. Final Delivery Gates

모든 ACT 제작 뒤 최종 배포 전에 다음을 확인한다.

- Windows PowerPoint에서 PPTX 열기, 저장, 발표 모드, 폰트 대체 및 줄바꿈.
- 한글·영문·코드·경로·citation의 target-size 가독성과 16:9 Safe Area.
- 실제 교육 계정과 사용 제품 surface, 권한, current product claims.
- Live/Hybrid Demo의 실행 경로, 실패 대응 및 승인된 Fallback.
- S17/S36/S68의 최종 자료 선택·파일·경로·내용 확인.
- S73 전체 20분 rehearsal: Case 0–7, Reflection 7–9, Q&A 9–16,
  Transition 16–20분과 cutoff·fallback.
- 81장·ACT 시간·Mode 합계·Claim Boundary·Evidence 연결 최종 대조.
- 첫 적용에서 조건부/미검증 상태였던 Template과 Variant의 확정 검토.

Mac 또는 LibreOffice local render는 Windows/교육장 확인을 대신하지 않는다.
리허설·target 환경 확인이 수행되지 않았다면 해당 항목은 `UNVERIFIED`로 둔다.

## 7. Open Items

| 항목 | 상태 | 영향 |
|---|---|---|
| 대상 Codex 계정과 제품 surface | OPEN | 특히 S04–S06의 현재 제품·Demo operation 표현 |
| DEMO-01 선택 surface 및 Live/Hybrid 운영 경로 | OPEN | 기존 CLI 관찰과 현재 교육 환경을 구분하고 final fallback을 확인 |
| S17/S36/S68 발표 fallback asset 선택 | PLANNED | 해당 Slide의 최종 presentation fallback 승인 |
| Windows PowerPoint 및 실제 발표 PC | UNVERIFIED | 전체 PPT final delivery |
| 11개 Template / 27개 Variant 전수 실제 구현 | PROVISIONAL until first use | 해당 Variant의 ACT 내 첫 적용 Gate |
| Shared-template 수정 전파 방식 | UNVERIFIED | 대량 제작 시 일관성·수정 비용 |
| S73 20분 timed rehearsal | UNVERIFIED | ACT 4/final delivery 운영 승인 |

## 8. Validation

- Slide Map 기준: 81장, S01–S81.
- ACT별 Slide/시간: 10/40, 12/55, 15/70, 18/85, 18/80, 8/30.
- 전체 교육 시간: 360분.
- Mode 합계: Lecture 130, Demo 73, Case 83, Reflection 20,
  Transition 22, Q&A 32분.
- Slide별 Mode 합계는 `SLIDE_MAP.md`의 Estimated Time 기준으로 검증한다.
- S55와 S73의 승인된 Mode 순서는 DEC-0025 및 `SPEAKER_NOTES_FREEZE.md`와 같다.
- 해당 판정은 제작 준비 Gate다. ACT 0 또는 이후 PPT 제작이 이 문서에서
  수행된 것은 아니다.

## 9. Next Readiness

**READY FOR ACT 0 PRODUCTION.**

이는 다음 단계에서 ACT 0의 실제 산출물 제작을 시작할 수 있다는 뜻이다.
이번 단계에서는 ACT 0 PPT, 81장 PPT 또는 전체 Notes를 만들지 않았다. ACT 0의
S04–S06에 현재 제품 surface 또는 Live/Hybrid 설명을 포함하려면 관련
`PROVISIONAL` Gate를 먼저 해결하거나, 기존 TRIAL-001의 범위만 사용한다.
