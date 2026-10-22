# S41 — Shared Guidance and Task-Dependent Detail

Date: 2026-10-22. Baseline: 5bb26cb. Decision: DEC-0054.
Status: **COMPLETE — LOCAL RENDER, SOURCE SCOPE AND NOTES CHECKED**.

## Presentation Change

S40의 요청→AGENTS.md 안내→상세 명세 경로에서, 출발점과 상세 문서의 정보 범위를
정하는 질문으로 이어간다. 제목은 ‘AGENTS.md에는 무엇을 남길까?’로 명확히 했다.

- 왼쪽 큰 청록 문서: 항상 남길 기본 안내. 목적·요청 밖의 기존 동작 보존·빌드/검증
  시작점과 상세 문서 위치를 실제 내용에 근거한 짧은 예로 표시한다.
- 오른쪽 흰색 문서 묶음: 구조 확인의 처리 순서/모듈 역할, 이미지 동작 확인의
  crop/resize 명세, 검증 범위 확인의 관련 테스트 위치를 표시한다.
- 큰 이동 화살표를 사용하지 않고 공통 안내와 관련 작업의 상세라는 범위를 대비한다.
  하단은 두 정보의 위치를 요약하고 C++의 진입점/공통 제약과 알고리즘 명세/하드웨어
  조건을 패턴 수준으로 연결한다. 출처와 C++ 문장 사이 여백을 확보했다.

문서·텍스트는 native 편집 요소이며 새 이미지는 만들지 않았다.
S41 ID·역할·T03-B·BEAT-014·TEACHING_MODEL·Claim Status·Lecture4분은 유지한다.
과거 이행표·비활성 원본 factory·평가 문서의 옛 제목은 당시 버전의 이력으로 남긴다.

## Source and Claim Boundary

내용 예는 기존 Demo STATE-03 태그 f3e2e37b1454e28c5de4c44682ebd49378ebae4b를
읽기 전용으로 확인했다. AGENTS.md3–20은 로컬 이미지 처리의 목적, 범위/동작 보존,
README와 검증 시작점, 주제별 상세 위치를 안내한다. architecture는 처리 순서·모듈
역할, image-contracts는 crop·resize 규칙, testing은 테스트 위치·확인 범위를 담는다.
화면은 전체 파일 원문이 아니라 이 내용을 요약한 교육용 정보 배치 모델이다.

‘항상 남길’은 기본 안내에 유지할 범위이며 매 turn 강제 재읽기나 자동 로딩 보장이
아니다. 필요한 문서만 읽음, 같은 탐색 순서, 항상 올바른 선택·지침 준수, 단독 인과성,
성능/정확도/속도 향상·토큰 절약을 주장하지 않는다. 전체 테스트 지침을 모든 작업의
무조건 실행 규칙으로 확대하지 않는다. C++는 범위의 비유이며 실제 실행 결과가 아니다.
현재 Codex Desktop·계정·회사 정책으로 일반화하지 않는다.

## Story Continuity

S40은 한 요청이 상세 명세를 찾는 경로다. S41은 그 경로의 기본 안내와 상세에
어떤 정보를 둘지 정한다. S42는 실제 문서 분리 전후, S43–45는 문서 접근의 관찰이다.
S41에서 실제 분리 결과나 Trial의 성공을 미리 제시하지 않았다.

## Validation

최종 통합90장과 ACT2 15장 패키지를 다시 읽어105개 PNG를 렌더링했다.
최종 S41을 원본 크기로 확인했으며 본문·문서 경로·요약·출처의 잘림·겹침은
발견하지 못했다. 별도 시각 검토에서 두 범위의 구분과 S40/S42 역할 구분을 확인했고,
권고된 하단 여백을 보완했다. 독립 근거 검토에서 중요한 범위 왜곡은 발견되지 않았다.

- 패키지 구조·레이아웃 findings0, first-party reimport PASS.
- Full90개/ACT2 15개 PNG는1920×1080이며 ACT2/Full15쌍이 일치한다.
- 다른89장의 화면 텍스트·PNG·Notes 레코드와 다른 ACT PPT는 baseline과 동일하다.
- 90개 내장 Notes/19개 필드와 ACT/Full Markdown 레코드를 대조했다.
- Template90행의 ID/Variant는 불변이다. 현재 S41 제목은 Map/Notes/PPT와 일치한다.
- 90장/368분, ACT시간40/63/70/85/80/30, S41 Lecture4분은 불변이다.
- Mode: Lecture137/Demo73/Case84/Reflection20/Transition22/Q&A32분은 불변이다.
- 정적 Demo fallback29개 경로·hash·화면 크기는 그대로다.
- Demo Repository afef3e0/clean 유지. 새 Trial/제품 점검/묶음 ZIP·HTML 갱신 없음.

[검증 JSON](S41_CORE_DETAIL_REVISION_VALIDATION.json)에 최종 파일 식별자를 기록한다.
지정 Malgun Gothic/Consolas와 로컬 Apple SD Gothic Neo/Menlo 대체 렌더를 유지한다.
Windows PowerPoint·발표 PC·교육장·제품/계정·실측 리허설은 UNVERIFIED다.
이전 평가·Decision 이력은 보존한다.

## Outputs

- [수정 S41](../preview/full/S41.png)
- [통합 PPT](../AI_Dev_Training_Full.pptx)
- [ACT2 PPT](../ACT_2.pptx)
- [ACT2 Notes](../notes/ACT_2_NOTES.md)
