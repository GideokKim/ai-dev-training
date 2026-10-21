# S10 — Inspection Pipeline Revision

> Current-version router — 이 보고서의 번호·장수·파일·hash·검증 결과는 해당 Decision 당시의 역사적 판본이다. 현재 82장 번호는 [새 이행표](../../plan/SLIDE_ID_MIGRATION_82.md), 현재 제작 결과는 [Prompt·시간선 수정](PROMPT_TIMELINE_REVISION.md)을 따른다.

Date: 2026-10-21 (Asia/Seoul). Decision: DEC-0037.
Baseline: `c4f8bd6`. Status: **COMPLETE — LOCAL RENDER / DOCUMENT ALIGNMENT**.

## Request and Result

S10을 제조 라인 검사장비로 확장하는 교육용 파이프라인으로 바꿨다.
**촬영 이미지 → ROI crop → 밝기 정규화 → 크기 맞춤 → 통계·특징 → 양불 판정**.

- 입력 이미지와 ROI crop는 실선이다. crop는 “기존 구현·조사한 범위”이며 정상 완료·검증 완료 체크를 붙이지 않았다.
- 이후 네 단계는 점선이며 “검사 흐름으로 추가 정의·연결할 범위”로 표시했다. 마지막 양불 판정은 `? / 기준 미정`이다.
- 기존 제목과 두 질문 “지금 이 저장소에 어떤 일을 맡기고 싶으신가요?”, “그 원하는 결과까지 코드에 적혀 있을까요?”를 유지했다.
- 전체 도식·라벨·화살표·그림 기호는 native PowerPoint shape/text로 편집할 수 있다. 원본 사진·실행 화면·측정 그래프를 새로 만들지 않았다.

## Evidence Boundary

실제 STATE-00부터 normalize/resize/statistics와 실행 연결도 구현돼 있다.
확인 근거는 [Demo Repository Spec](../../plan/DEMO_REPOSITORY_SPEC.md)의 초기 모듈 범위와 sibling 저장소의 src/graypipe/pipeline.py 및 statistics.py를 읽은 결과다. 실제 순서는 load→normalize→optional invert/crop/resize→save→statistics이며 현재 도식의 제조 검사 순서와 다르다.

따라서 화면·Notes에서 이를 **가상의 검사 Task 정의·연결 범위**로 명시했다. 점선을 실제 함수 미구현으로 설명하지 않는다. 통계 카드의 막대는 추상 기호이고 실제 graypipe의 히스토그램·결함 특징·양불 판정 결과가 아니다. 일반적인 제조 검사 표준·정확도·성능을 검증했다는 주장도 하지 않는다.

S10은 TRIAL-001 조사 뒤, TRIAL-002 실제 수정 전이다. 기존 crop를 완성·정상·검증 완료로 표시하지 않아 다음 ACT의 수정 이유를 유지했다. 새 Trial·Product State·제조 검사 구현은 없다.

## Story and Later ACT Connections

| Context in S10 | Later connection | Limit |
|---|---|---|
| ROI crop | ACT 1 Task 명세·TRIAL-002 수정 | 지금 완료 체크나 해답을 공개하지 않음 |
| 좌표·밝기·입출력 크기 | ACT 2 Project Context·Image Contracts | 도식 자체가 명세서나 실제 실행 순서는 아님 |
| Normalize / Resize / Statistics | ACT 3 반복 성능 조사·재사용 Workflow | 특정 기능의 우월성·인과 성능 개선 주장 없음 |
| 단계와 전체 연결 | ACT 4 단위/통합 검증 범위와 환경 변화 | 가상 사례 경계 보존; 전체 검사기 구현을 약속하지 않음 |

S09의 사람 최종 책임에서 S10의 원하는 검사 작업 질문으로 이동하고,
S11의 모호한 요청에서 작업 명세 문제가 이어진다. 강사용 연결은 Notes에 적었지만
S10을 알고리즘 강의나 다음 ACT의 체크리스트 선행 설명으로 바꾸지 않았다.

## Time / Structure

- S10: 6분, **Transition 3 → Q&A 3** 그대로.
- 81장 / 360분. ACT 장수10/12/15/18/18/8, ACT 시간40/55/70/85/80/30분.
- Mode: Lecture130 / Demo73 / Case83 / Reflection20 / Transition22 / Q&A32분.
- S10 Title·Primary Role·Audience Question·Core Message·Beat·Section·Evidence Type·Transition·시간·Mode 불변.
- Template T01-B 유지. 6노드는 질문 배경 도식 한 개이며 6개의 응답 관점이나 새 Template가 아니다. 기존 11개 family·27개 Variant 유지.
- M1/M2 principle footer 유지. 원모듈 이수나 새 M6 교수 범위를 추가하지 않음.

## Outputs

| File | Slides | SHA-256 |
|---|---:|---|
| production/AI_Dev_Training_Full.pptx | 81 | `5cc6a43f1e7efb26441eaf9c5ea681d4fff38f21633270a6b79bf7f5d73a94e8` |
| production/ACT_0.pptx | 10 | `5e6143b8f11d978d16ef47231a89c4de4b859f8bec47e4ad151e09fa7fb9c88f` |

- Full / ACT 0의 S10 PNG와 montage 갱신. Full/ACT S10 PNG 동일.
- Notes: ACT 0과 Full의 S10 19개 필드 및 PPT 내부 Notes 일치.
- 통합 Notes SHA-256: `0e197f3dc2c4ca85b484e754ea115fac30ad75f65b7ede95f716c572fe5b899b`.
- Full montage SHA-256: `7463cd54ec6a5aa1bac3292de027cb3d7bea0e5df2e65f89f8507f9914b12c46`.
- S10 PNG SHA-256: `52c869a15e6e9533c0fb8b9f2a7f5125d7f865a1bcc819d96fb654ecfb2e371f`.

## Validation

| Check | Result |
|---|---|
| Final PPTX package / geometry / font policy / import | Full과 ACT 0 모두 통과, package·geometry finding 0 |
| Actual finalized-package rendering | Full81 + ACT0 10 = 91 PNG |
| Local visual review | S10 확대·독립 검토, S09→S10→S11 연결 확인 |
| Text / layout | 제목·두 질문·실선/점선·기호·Evidence footer 가독성 확인; 잘림·겹침 발견 없음 |
| Unchanged slide structure | S10 외 80장 XML을 관계·생성ID 정규화 후 비교: 차이 없음 |
| Unchanged rendered files | 대응 PNG 91개 중 S10 두 경로만 변경; 나머지 89개 byte-identical |
| Map / Notes | S10 외 80개 레코드 불변; 81개 Notes × 19필드, Full/ACT/내장 Notes 일치 |
| Chart | S46 native chart 데이터 불변 |
| Fallback | 기존 29개 PNG 내용·경로·hash 불변; 현재 Full PPT identity 갱신 |
| Demo Repository / Trial / bundle | 변경·실행·생성 없음 |

로컬 렌더는 지정 글꼴 Malgun Gothic/Consolas에 Apple SD Gothic Neo/Menlo 별칭을 사용했다. Windows PowerPoint·실제 발표 PC 글꼴·교육장 투사·실측 리허설은 UNVERIFIED다. 이번 로컬 검사로 실환경 PASS를 부여하지 않았다.

## Documents Aligned

Slide Map, T01-B Template Map/Architecture, Claim Freeze, Transitions, DEC-0037,
ACT 0/Full Notes, 제작 Source/README, 현재 전달·체크리스트·Fallback identity를 정렬했다.
기존 DEC-0036 삽입 평가 본문/JSON은 역사 이력으로 보존하고 최신 평가 링크를 추가했다.
변경이 없는 상위 MASTER_PLAN/INVARIANTS·Demo Spec·나머지 ACT 자료는 유지했다.

## Remaining Items

P0/P1: 이번 수정에서 발견 없음. 대상 장비·교육장·계정과 실측 리허설은 기존 Gate로 남는다.

**READY FOR USER S10 REVIEW**.

[Machine-readable validation](S10_INSPECTION_PIPELINE_REVISION_VALIDATION.json).
