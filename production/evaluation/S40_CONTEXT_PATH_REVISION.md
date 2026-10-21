# S40 — Task Request, Project Guidance and Relevant Detail

Date: 2026-10-22. Baseline: 8dfae82. Decision: DEC-0053.
Status: **COMPLETE — LOCAL RENDER, SOURCE SCOPE AND NOTES CHECKED**.

## Presentation Change

S39의 ‘필요한 근거를 실제로 찾아 활용했는가?’에서 문서 위치를 안내하는 설계로 돌아온다.
기존의 추상적인 Task/Core/Detail을 한 가지 crop 질문의 native 관계도로 바꿨다.

1. 작업 요청: crop 끝 좌표가 포함되는지 명세를 확인해 달라는 교육용 요청.
2. AGENTS.md: 이미지 동작/crop의 상세는 docs/image-contracts.md에 있다는 안내.
3. 관련 상세 문서: crop 좌표의 `[x_start, x_end)` 명세와 시작 포함·끝 제외 설명.

작업 질문, 위치 안내, 답에 필요한 명세를 화면에서 각각 구분한다.
하단에서 AGENTS.md가 상세 문서 위치를 안내하는 역할을 회수한다.
C++ Bridge는 공통 제약 확인 뒤 해당 알고리즘 명세에 도달하는 패턴으로 유지한다.
요청·문서·화살표·텍스트는 native 편집 요소이며 새 이미지는 만들지 않았다.
제목·T03-C·BEAT-014 진입·TEACHING_MODEL·Claim Status·Lecture3분을 유지한다.

## Source and Claim Boundary

문서명과 crop 명세는 Demo의 기존 STATE-03 태그
f3e2e37b1454e28c5de4c44682ebd49378ebae4b에서 읽기 전용으로 확인했다.
AGENTS.md17–20의 Context Routing은 이미지 동작/crop을 docs/image-contracts.md로 안내한다.
그 문서20–24는 반개구간 좌표 명세를 기록한다. 저장된 문서 내용의 근거이며
새로운 Trial·현재 제품 검증·C++ 실행 결과가 아니다.

Prompt 문장과 가운데 안내는 교육용 구성·요약이다. 화살표는 실제 문서를 읽은
시간 순서, 필요한 문서만 자동 선택한 결과, AGENTS.md 단독 인과성을 표현하지 않는다.
화면에 ‘교육용 탐색 모델 · 저장된 명세 기반 재구성 · 실제 읽기 순서가 아님’을 명시했다.
Routing 성능·정확도·속도 향상, 토큰 절감, Lost in the Middle 완화를 주장하지 않는다.
현재 Codex Desktop·계정 동작도 보장하지 않는다. 기존 Claim Freeze 범위는 불변이다.

## Story Continuity

- S39: 연구가 확인한 과제와 현재 제품에 대한 전이 범위를 구분한다.
- S40: 필요한 상세 정보로 가는 안내 관계를 한 요청으로 보여준다.
- S41: 그 출발점인 Core에 무엇을 남길지 정한다.
- S42 이후: 실제 문서 재구성과 TRIAL-005A/B의 접근 관찰을 확인한다.

S40에 Core 목록이나 실제 Before/After·Trial 성공을 추가하지 않았다.
뒤 장의 역할과 관찰/교육 모델의 경계를 유지한다.

## Validation

최종 통합90장과 ACT2 15장 패키지를 다시 읽어105개 PNG를 렌더링했다.
S40 원본 크기에서 질문·문서 경로·명세·화살표·출처의 잘림·겹침은 발견하지 못했다.
별도 시각 검토에서도 한 페이지 가독성과 S41 역할 구분에 추가 수정 권고가 없었다.
독립 근거 검토에서 문서명·명세·재구성 표시와 주장 범위에 중요한 문제는 없었다.

- 패키지 구조·레이아웃 findings0, first-party reimport PASS.
- Full90개/ACT2 15개 PNG는1920×1080이며 ACT2/Full15쌍이 일치한다.
- 다른89장의 화면 텍스트·PNG·Notes 레코드와 다른 ACT PPT는 baseline과 동일하다.
- 90개 내장 Notes/19개 필드와 ACT/Full Markdown 레코드를 대조했다.
- 90장/368분, ACT시간40/63/70/85/80/30, S40 Lecture3분은 불변이다.
- Mode: Lecture137/Demo73/Case84/Reflection20/Transition22/Q&A32분은 불변이다.
- 정적 Demo fallback29개 경로·hash·화면 크기는 그대로다.
- Demo Repository afef3e0/clean 유지. 새 Trial/제품 점검/묶음 ZIP·HTML 갱신 없음.

[검증 JSON](S40_CONTEXT_PATH_REVISION_VALIDATION.json)에 최종 파일 식별자를 기록한다.
지정 Malgun Gothic/Consolas와 로컬 Apple SD Gothic Neo/Menlo 대체 렌더를 유지한다.
Windows PowerPoint·발표 PC·교육장·제품/계정·실측 리허설은 UNVERIFIED다.
이전 평가·Decision 이력은 보존한다.

## Outputs

- [수정 S40](../preview/full/S40.png)
- [통합 PPT](../AI_Dev_Training_Full.pptx)
- [ACT2 PPT](../ACT_2.pptx)
- [ACT2 Notes](../notes/ACT_2_NOTES.md)
