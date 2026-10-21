# Full Deck Continuity Revision

> Historical record — 이 문서는 DEC-0036 이전 80장 판의 번호와 검증 결과를 보존한다. 현재 81장 판과의 대응은 [Slide ID Migration](../../plan/SLIDE_ID_MIGRATION.md)을 따른다. 과거 PASS는 현재 파일의 재검증을 뜻하지 않는다.


Date: 2026-10-20 (Asia/Seoul). Authority: DEC-0032.
Baseline: `0ae43cc`, presentation artifacts from DEC-0030.

Status: COMPLETE — 전체 80장과 79개 인접 연결의 로컬 검토를 마쳤다.
기존 문제 중심 Story, 교육 대상·방식, 근거 범위와 시간은 유지했다.

## Improvements by ACT

| ACT | 연결 개선 | 보존한 의도 |
|---|---|---|
| 0 | S08의 접근/의도 구분을 S09에서 자기 작업에 적용하고 S10의 작업 요청 문제로 연결 | 작은 Chatbot 질문의 가치 인정, 읽기 전용 조사, 목표는 개발자가 설정 |
| 1 | filter에서 crop으로 사례를 좁히는 이유, 다섯 질문을 다섯 책임으로 묶는 과정, 구성 예시에서 실제 TRIAL-002로의 전환, 검증 지침의 재사용에서 정보 수명으로의 이동 | 기존 요청 예시·계약·조사·수정·검증, 예시와 실제 Prompt의 구분 |
| 2 | 정보의 양을 연구에서 보는 이유, 탐색 경로와 Core 내용의 역할 차이, 같은 조사·검증 절차를 다시 쓰는 문제 | 연구의 제한 범위, Routing 접근 관찰과 미측정 효과의 구분 |
| 3 | 분류를 normalize 한 Task에 적용, 서로 다른 요청의 공통 절차 위치 비교, Subagent와 별도 지식 보존의 필요성 점검 | 현재 Demo의 Subagent·Memory 미채택, Skill 우월성·단독 인과 주장 없음 |
| 4 | 실제 성공과 가상 사례 분리, 원인 확인 전제 설명, 부분 판단을 Loop로 종합, 실제 Meta 사례의 평가·보고 기준이라는 대상 명시, C++ 적용 질문으로 이동 | Product endpoint, 가상 Workflow, 교육 모델, 실제 Meta 기록의 별도 경계 |
| 5 | 전체 모델에서 실제 Product 이력만 회수, 구성 선택과 결과 수용 책임 연결, 마찰 진단을 개인의 작은 행동 선택으로 좁힘 | 순위·필수 도입 순서가 아닌 운영 모델, 기록·발표·제출 없는 개인 성찰 |

## Screen and Notes Coverage

화면을 바꾼 장은 14장이다.

S09, S11, S13, S15, S20, S29, S30, S31, S36, S46, S48, S66, S67, S79.

나머지 66장 PNG는 baseline과 SHA-256이 동일하다. 대부분 작은 표제나
기존 안내 문구를 바꾸었으며 S13에는 다섯 책임을 여는 짧은 안내를 추가했다.
S79의 세 질문은 기존 마찰에서 다음 행동 하나를 고르는 발문으로 좁혔다.
새 이미지, 화면 캡처, Trial, 제품 기능 또는 연구 결과는 추가하지 않았다.

Notes는 41개 레코드에서 전환·진입 질문·화면 진행을 다듬었다. 80개 레코드의
19필드와 ID·제목·ACT/Section·배정 시간·Mode·Primary Message·Evidence/Claim
등 보호된 내용은 유지했다. S35의 1–3분/3–4분 진행 표기만 승인된 Case 시간에
맞춰 정렬했다. 기존 Mode Split과 장별 시간은 바꾸지 않았다.

Slide Map은 24장의 Transition 필드만 Notes와 정렬했다. 다른 필드는 모두
baseline과 동일하다. `TRANSITIONS.md`에는 현재 발표 연결 Cue를 추가하고
기존 Story-level 설계 이력은 보존했다. 변경 이유는 DEC-0032에 기록했다.

## Independent Render Review

최종 PPTX를 다시 import하여 통합 80장과 ACT별 80장을 1920×1080으로 렌더링했다.
세 범위 S01–26 / S27–54 / S55–80의 모든 개별 PNG를 직접 검토하고 현재 Notes를
대조했다. 변경한 14장은 이전 PNG와 비교했다. 작성 범위와 다른 검토 범위를
배정하여 재검토했으며, 루트도 변경한 14장의 최종 개별 화면을 확인했다.

새 글자 잘림·겹침·Evidence 선 침범 또는 수정이 필요한 연결 문제는 발견하지
못했다. S13 안내 줄, S15 실제 기록 진입, S20 반복 지침 질문, S36 반복 절차
질문, S46/48 필요성 점검, S67 Meta 대상과 S79 개인 행동 선택을 별도 확인했다.

ACT 경계 S09→10, S21→22, S36→37, S54→55, S72→73을 확인했다. S55→56과
S66→67의 근거 유형 전환, S79→80의 성찰·Q&A 전환도 Notes와 맞는다.
S52의 이중선은 의도된 OBSERVED_META 표기로 유지했다.

## Preservation and Package Checks

- 80장 / 360분. ACT 장수 9/12/15/18/18/8, 시간 40/55/70/85/80/30분.
- Mode: Lecture 130 / Demo 73 / Case 83 / Reflection 20 / Transition 22 /
  Q&A 32분. 장별 Mode 합계와 배정 시간이 일치한다.
- MASTER_PLAN, INVARIANTS, CLAIM_FREEZE, SLIDE_TEMPLATE_MAP, VISUAL_SPEC,
  CURRICULUM, STORY_BEATS는 baseline과 byte-identical하다.
- Slide Map의 Transition 외 모든 필드, Slide/ACT/Section/Beat/Demo ID,
  Working Title과 근거 경계를 유지했다.
- 통합 및 ACT의 내장 Notes가 해당 Markdown과 일치한다. 대응하는 full/ACT
  PNG도 byte-identical하다. Native text/shape/diagram과 S45 chart를 유지했다.
- S45 chart 값은 이전과 같고, 최종 7개 PPTX의 package·geometry·reference-font
  policy·first-party import·native chart 검사 통과. Layout finding 0개.
- Demo 저장소, Product code, 기존 State/tag를 변경하지 않았다. 새 Trial 없음.

검사 세부: [validation JSON](FULL_DECK_CONTINUITY_REVISION_VALIDATION.json).

## Deliverables

- [80장 통합 PPT](../AI_Dev_Training_Full.pptx)
- [전체 미리보기](../preview/full/montage.png)
- [변경한 14장 미리보기](../preview/full/continuity-montage.png)
- [전체 발표자 Notes](../notes/FULL_SPEAKER_NOTES.md)
- ACT 0–5 PPTX, 각 ACT Notes 및 개별 PNG/montage

Fallback 해시와 전달 문서, 발표자용 묶음은 이 후보의 정확한 파일에 맞춰 갱신한다.
이전 DEC-0030 검토와 DEC-0031 묶음은 역사적 기록으로 보존한다.

## Remaining User Validation

지정 서체는 Malgun Gothic / Consolas이며 로컬 렌더는 기존과 같은 Apple SD
Gothic Neo / Menlo alias를 사용했다. Windows PowerPoint·발표 PC의 실제 글꼴,
교육장 투사, 현재 제품/계정·Live 환경, 360분 pacing과 S72의 20분 운영은
UNVERIFIED다. 로컬 정적 렌더와 Notes 검토를 실제 리허설로 취급하지 않는다.
