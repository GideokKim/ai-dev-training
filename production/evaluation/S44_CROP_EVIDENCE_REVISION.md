# S44 — Crop Access Evidence, Specification and Recorded Answer

Date: 2026-10-22. Baseline: e9fb7b1. Decision: DEC-0057.
Status: **COMPLETE — LOCAL RENDER, EVIDENCE SCOPE AND NOTES CHECKED**.

## Presentation Change

S43의 Crop 요청 A와 관찰 질문을 실제 TRIAL-005A 최종 실행의 기록으로 회수한다.
화면은 문서 접근 요약 → 해당 명세 → 기록된 답을 나란히 보여준다.
아래에는 ‘관찰된 사실’과 ‘해석의 한계’를 별도 라벨·색상으로 구분했다.

- 접근 요약: AGENTS.md, docs/architecture.md, docs/image-contracts.md,
  docs/testing.md, README.md. 소스·관련 테스트 확인도 짧게 밝힌다.
- 명세: image-contracts.md의 `[x_start, x_end)`, 시작 포함·끝 제외.
- 답: 0부터 시작하는 원본 열1·2 포함, 출력 폭2, 끝 좌표3 제외.
- 경계: 더 넓은 접근도 관찰했다. 최소 문서 선택·효율 향상은 미입증이다.

명세 문서를 강조하고 연결한 첫 화살표는 파일과 내용의 대응이다.
‘대조’라고 표시한 두 번째 화살표는 명세와 기록된 답을 맞춰보는 관계다.
실제 파일 읽기 순서나 내부 추론 경로·단독 인과성을 그린 것이 아니다.
열0–3의 숫자는 픽셀 값이 아닌 원본 열 번호다. 모든 도식은 native 편집 요소다.
실제 제품 Screenshot이나 실행 로그를 만들어 넣지 않았다.
제목·T07-A·BEAT-016·OBSERVED_PRODUCT·Claim Status·Case5분은 유지한다.

## Primary Evidence Check

plan/DEMO_MATRIX.md의 TRIAL-005A 최종 실행 접근/답·실행 환경을 직접 대조했다.
STATE-03 태그의 docs/image-contracts.md, src/graypipe/transform.py,
data/sample.pgm도 읽기 전용으로 확인했다. 표본은4열이고, 구현은
`row[x_start : x_end]`다. 이 문서 작성 중 crop·테스트·새 Trial을 실행하지 않았다.

| 항목 | 실제 기록과 화면의 범위 |
|---|---|
| 실행 | Codex CLI0.154.0, 별도 임시 clone, ephemeral/read-only, 파일 변경 없음 |
| Markdown 문서 | 위5개를 최종 실행에서 읽었음. 나열 순서는 chronology가 아님 |
| 관련 근거 | 명세·소스·테스트와 기록된 답을 구분해 요약 |
| 실행 간 차이 | testing.md/관련 테스트 접근은 최종 실행에서 관찰했고 이전 실행과 달랐음 |
| 답 | source columns1/2 (zero-based), width2, end coordinate excluded |
| 범위 한계 | architecture·README 등 넓은 Context도 접근했음 |

명세에 맞는 답이 기록됐다는 것은 확인된다. 관련 문서만 최소로 읽었다는 뜻이나
그 명세 파일이 답을 만든 단독 원인이라는 뜻은 아니다. 토큰 절약·Routing 우월성·
성능 개선·현재 Codex Desktop 동작을 입증하는 자료로 확장하지 않는다.
README의 과거 STATE-00 결함 안내를 현재 결함의 근거로 사용하지 않았다.
Task B의 실제 접근 차이와 결과는 S45의 기존 비교 역할에 남겼다.

## Story and Notes Alignment

S43은 두 읽기 전용 요청과 관찰 기준, S44는 A의 접근·명세·답,
S45는 B와의 비교와 한계다. S43/S45와 다른88장은 수정하지 않았다.
S44 Notes는 요청·접근 요약1분 → 명세1분 → 답 대조1분 → 넓은 접근/변동1분
→ 한계 회수/S45 연결1분으로 Case5분을 유지한다.
파일 목록과 화살표를 읽기 순서·인과 경로로 설명하지 않도록 명시했다.

## Validation

최종 통합90장과 ACT2 15장 패키지에서105개 PNG를 렌더링했다.
S44 원본1920×1080을 직접 검토했으며 문서명·명세·열 도식·관찰/해석 라벨·출처에
잘림·겹침은 발견하지 못했다. 시각 검토한 초안 PNG와 최종 PNG가 byte 단위로
동일함을 확인했다. 구조 검사와 이 로컬 시각 검토는 별도 범위다.

- 패키지 구조·레이아웃 findings0, first-party reimport PASS.
- Full90개/ACT2 15개 PNG는1920×1080이며 ACT2/Full15쌍이 일치한다.
- 다른89장 텍스트·PNG·Notes 레코드와 다른 ACT PPT는 baseline과 동일하다.
- 90개 내장 Notes/19개 필드와 ACT/Full Markdown 레코드를 대조했다.
- Template90행의 ID/Variant와 모든 장의 제목·시간·Mode는 불변이다.
- 90장/368분, ACT시간40/63/70/85/80/30, S44 Case5분을 유지한다.
- Mode: Lecture137/Demo73/Case84/Reflection20/Transition22/Q&A32분을 유지한다.
- 기존 Demo fallback29개 경로·hash·화면 크기는 그대로다.
- Demo Repository afef3e0/clean 유지. 새 Trial/테스트/제품 점검/묶음 갱신 없음.

[검증 JSON](S44_CROP_EVIDENCE_REVISION_VALIDATION.json)에 현재 파일 식별자를 기록한다.
지정 Malgun Gothic/Consolas와 로컬 Apple SD Gothic Neo/Menlo 대체 렌더를 유지한다.
Windows PowerPoint·발표 PC 글꼴·교육장·현재 제품/계정·실측 리허설은 UNVERIFIED다.
기존 평가·Decision 이력은 보존한다.

## Outputs

- [수정 S44](../preview/full/S44.png)
- [통합 PPT](../AI_Dev_Training_Full.pptx)
- [ACT2 PPT](../ACT_2.pptx)
- [ACT2 Notes](../notes/ACT_2_NOTES.md)
