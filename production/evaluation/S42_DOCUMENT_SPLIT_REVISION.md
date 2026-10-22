# S42 — Document Reorganization and Retained Core Facts

Date: 2026-10-22. Baseline: ce6b06d. Decision: DEC-0055.
Status: **COMPLETE — LOCAL RENDER, STATE EVIDENCE AND NOTES CHECKED**.

## Presentation Change

S41의 기본 안내/상세 정보 구분을 실제 문서 재구성의 전후로 연결했다.
왼쪽 한 AGENTS.md에 기본 안내와 A구조/CLI 요약·B이미지 명세·C테스트 구성을 함께
보여주고, 오른쪽은 기본 안내+문서 위치를 담은 AGENTS.md와 상세 문서3개로 나눴다.
같은 A/B/C 문자와 가로 화살표로 각 주제가 어디로 갔는지 대응시킨다.
기본 안내가 남은 관계와 상세가 이동한 관계를 구분하고 핵심 정보 보존을 회수한다.

표시 내용은 기록의 요약·재구성이다. 재서술/상세화와 문서 위치 안내 추가가 포함된다는
점을 화면과 Notes에 명시해 단순 문자 복사로 오해하지 않게 했다.
본문의 STATE 번호는 분리 전/후라는 말로 대체하고 원래 태그는 출처에 남겼다.
도식·문서·문자·화살표는 native 편집 요소이며 실제 Screenshot이 아니다.
기존 제목·T04-B·BEAT-014/015·Evidence/Claim Status·5분 Mode를 유지한다.

## State Evidence and Preservation Scope

STATE-02:55c045523ed1409449d7eea5b0d873983fe101b6.
STATE-03:f3e2e37b1454e28c5de4c44682ebd49378ebae4b.
기존 태그를 읽기 전용으로 대조했다. 변경 파일은 AGENTS.md와 새 docs3개뿐이며
제품 코드·테스트·의존성 설정·README는 그대로다. plan/DEMO_MATRIX.md의 보존 대응표와
후속 관찰 경계를 대조했다. 이번에 제품 코드나 태그를 변경하거나 Trial/테스트를 실행하지 않았다.

| 분리 전의 정보 | 분리 후 위치 |
|---|---|
| Project/로컬 데이터, Build/Run, 전체 검증, 동작/의존성/범위 제약 | AGENTS.md의 Project/Always-on Guidance |
| Architecture + CLI Summary | docs/architecture.md |
| Image Contract | docs/image-contracts.md |
| Test의 모듈 구성·통합 검증·좁은 검사 안내 | docs/testing.md 및 root의 공통 검증 안내 |
| 주제별 상세 문서 위치 | AGENTS.md Context Routing에 추가 |

핵심 사실·제약이 유지된다는 주장이다. architecture의 모듈 책임 표, 이미지 규칙의
상세 조건, testing의 테스트별 범위/명령 예처럼 재서술·상세화도 포함됐다.
문자 단위 완전 동일, 모든 내용의 단순 이동, 총 정보량 불변을 주장하지 않는다.

## Story and Claim Boundary

S41은 배치 기준, S42는 기록된 문서 재구성, S43–45는 실제 Task의 접근 관찰이다.
실제 파일 구조와 주제 대응은 OBSERVED_PRODUCT이고 도식과 Routing 해석은
TEACHING_MODEL이다. 화살표는 재배치 관계이며 실제 읽기 순서·필요 문서만 자동 선택·
완벽한 Routing·AGENTS.md 단독 인과성·토큰/성능 효과가 아니다.
C++는 정보 범위의 전이 패턴이며 구체적 환경 조작이나 실측 결과가 아니다.
S84에 사용된 고정된 과거 S42 발췌 이미지는 당시 근거 범위로 그대로 보존했다.

## Validation

최종 통합90장과 ACT2 15장 패키지를 다시 읽어105개 PNG를 렌더링했다.
S42 원본 크기에서 전후 문서·주제 대응·핵심 문구·출처의 잘림/겹침은 발견하지 못했다.
별도 시각 검토에서 기본 안내 보존과 상세 위치 분리가 읽힌다는 점을 확인했고,
권고된 하단 C++ 문장의 출처 간격을 보완했다. 독립 근거 검토에 중요한 왜곡은 없었다.

- 패키지 구조·레이아웃 findings0, first-party reimport PASS.
- Full90개/ACT2 15개 PNG는1920×1080이며 ACT2/Full15쌍이 일치한다.
- 다른89장 텍스트·PNG·Notes 레코드와 다른 ACT PPT는 baseline과 동일하다.
- 90개 내장 Notes/19개 필드와 ACT/Full Markdown 레코드를 대조했다.
- Template90행의 ID/Variant와 모든 장의 제목·시간·Mode는 불변이다.
- 90장/368분, ACT시간40/63/70/85/80/30, S42 Lecture2+Demo2+Case1=5분은 불변이다.
- Mode: Lecture137/Demo73/Case84/Reflection20/Transition22/Q&A32분은 불변이다.
- C++ Bridge2분은 Case1분+마지막 Lecture1분 안에 통합하며 시간을 중복 계산하지 않는다.
- DEMO-06 fallback의 S42 PNG/hash를 갱신했고 다른28개는 동일하다. 전체29개 경로·hash·크기를 확인했다.
- Demo Repository afef3e0/clean 및 태그 유지. 새 Trial/제품 점검/묶음 ZIP·HTML 갱신 없음.

[검증 JSON](S42_DOCUMENT_SPLIT_REVISION_VALIDATION.json)에 최종 파일 식별자를 기록한다.
지정 Malgun Gothic/Consolas와 로컬 Apple SD Gothic Neo/Menlo 대체 렌더를 유지한다.
Windows PowerPoint·발표 PC·교육장·제품/계정·실측 리허설은 UNVERIFIED다.
이전 평가·Decision·발췌 자산 이력은 보존한다.

## Outputs

- [수정 S42](../preview/full/S42.png)
- [통합 PPT](../AI_Dev_Training_Full.pptx)
- [ACT2 PPT](../ACT_2.pptx)
- [ACT2 Notes](../notes/ACT_2_NOTES.md)
- [Fallback manifest](../../demos/runbooks/FALLBACK_MANIFEST.md)
