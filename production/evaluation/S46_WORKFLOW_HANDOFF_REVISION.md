# S46 — Repeated Procedure and the Harness Handoff

Date: 2026-10-22. Baseline: 78e178c. Decision: DEC-0059.
Status: **COMPLETE — LOCAL RENDER, STORY BOUNDARY AND NOTES CHECKED**.

## Presentation Change

S45의 문서 접근 비교 뒤에 남는 작업 방법의 반복을 보여준다.

- 왼쪽: AGENTS.md의 기본 안내/문서 위치에서 상세 명세·구조·테스트 문서로
  이어지는 간단한 배치 도식. 이는 정보 범위와 위치의 정리를 회수한다.
- 오른쪽: 크기 변경/정규화라는 다른 성능 요청2개. 동일한3줄 절차를 같은 색으로
  강조해 매번 요청에 다시 넣는 부분이 보이게 했다.
- 하단: ‘같은 조사·검증 절차도 매번 다시 적어야 할까?’에서 ‘다음 · Harness’로
  연결한다. 구체적 메커니즘이나 성공 결과를 먼저 설명하지 않는다.

두 요청의 번호1/2는 새 성능 작업을 구분하는 교육용 라벨이다. S45의 Crop/의존성
A/B를 바꾸거나 기존 Slide/Trial ID를 변경한 것이 아니다. 문서 도식과 요청창은
native text/shape이며 실제 제품 Screenshot이나 원문 Prompt 전체가 아니다.
제목·T04-A·BEAT-017/018·TRANS-005·Evidence Type·Claim Status·시간/Mode를 유지했다.

## Evidence Check and Scope

plan/DEMO_MATRIX.md의 TRIAL-006 실제 Prompt/Repeated Workflow Elements와
TRIAL-007 Task Prompt/작업 결과 요약을 대조했다. 공통 요소는 다음과 같다.

| 기록된 공통 요소 | 교육용 요청의 압축 표현 |
|---|---|
| Baseline / Investigate | 먼저 측정·조사해줘. |
| Plan / Implement | 계획한 뒤 변경해줘. |
| Test / Benchmark / Compare / Review | 테스트·재측정·비교·검토해줘. |

실제 Prompt 전문의 문자 단위 발췌나 모든 제약을 표시한 화면으로 주장하지 않는다.
공통 절차 반복은 기록된 사실이며, 정보·목표·작업 방법의 책임 구분과 화면의
대비는 TEACHING_MODEL이다. 왼쪽 화살표는 문서 배치 관계로 실제 읽기 순서가 아니다.
병렬 요청창은 동시에 실행한 Subagent나 비교 실험을 뜻하지 않는다.

TRIAL-006/007에는 global Harness 영향이 있어 전체 행동을 Prompt 단독 효과로
귀속하지 않는다. Context 선택을 완전히 해결했다거나 효율·토큰·성능이 개선됐다는
성과도 추가하지 않았다. 과거 CLI 기록을 현재 Desktop 재현으로 표현하지 않는다.
새 Trial·테스트·제품 확인·Demo Repository 변경은 하지 않았다.

## Story and Notes Alignment

S45: 접근 차이와 한계 → S46: 정리한 정보와 남는 절차 반복 → S47: 실제 두 성능
Task 기록에서 공통 절차 확인. S46은 문제를 여는 장이며 S47의 세부 기록 역할은 유지한다.

- Transition0–1분: S45 범위 회수, 기본 안내와 상세 정보 배치.
- Transition1–2분: 다른 현재 목표인 두 성능 요청.
- Transition2–3분: 동일한 절차의 반복.
- Transition3–4분: 핵심 질문과 다음 Harness 구간.
- Q&A4–10분: 질문/준비 질문. 마지막20초의 S47 handoff도6분 안에 포함.

기존10분/Transition4·Q&A6을 유지하며 추가 Demo·Transition 시간을 만들지 않는다.
무응답 시 질문과9분40초 cutoff를 Notes에 명시했다. 실제 시간 리허설은 UNVERIFIED다.

## Validation

최종 통합90장과 ACT2 15장 패키지에서105개 PNG를 렌더링했다.
S46 원본1920×1080에서 문서 배치·동일한 절차2개·하단 질문/연결·출처·footer를
확인했다. 첫 초안에서 문서 뒤에 가려진 화살표 끝을 조정했고 draft02의 렌더에서
연결을 확인했다. 검토한 draft02와 최종 PNG가 byte 단위로 동일하다.
로컬 렌더에서 텍스트 잘림·겹침을 발견하지 못했다.

- 구조·레이아웃 findings0, first-party reimport PASS.
- 기존 S45 native table 필수 검사도 유지한다.
- 두 요청의 공통 절차3줄은 정확히 같은 텍스트이며 각각2회 나타난다.
- Full90개/ACT2 15개 PNG는1920×1080, ACT2/Full15쌍이 일치한다.
- 다른89장의 텍스트·PNG·Notes 및 다른 ACT PPT는 baseline과 같다.
- 90개 Notes/19개 필드, ACT/Full Markdown/내장 Notes가 일치한다.
- 모든 장별 제목·역할·Core Message·시간·Mode·Evidence/Claim Status를 보존했다.
- 90장/368분, ACT40/63/70/85/80/30분, Template90행의 ID/Variant를 유지한다.
- Mode: Lecture137/Demo73/Case84/Reflection20/Transition22/Q&A32분을 유지한다.
- Demo fallback29개 경로·hash·화면 크기는 그대로다.
- Demo Repository afef3e0/clean, 새 Trial/제품 확인/묶음 ZIP·HTML 갱신 없음.

[검증 JSON](S46_WORKFLOW_HANDOFF_REVISION_VALIDATION.json)에 현재 파일 식별자를 기록한다.
지정 Malgun Gothic/Consolas와 로컬 Apple SD Gothic Neo/Menlo 대체 렌더를 유지한다.
Windows PowerPoint·발표 PC 글꼴·교육장·현재 제품/계정·실측 리허설은 UNVERIFIED다.
기존 평가·Decision 이력은 보존한다.

## Outputs

- [수정 S46](../preview/full/S46.png)
- [통합 PPT](../AI_Dev_Training_Full.pptx)
- [ACT2 PPT](../ACT_2.pptx)
- [ACT2 Notes](../notes/ACT_2_NOTES.md)
