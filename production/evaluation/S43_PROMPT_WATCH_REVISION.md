# S43 — Prompt Windows and Neutral Observation Questions

Date: 2026-10-22. Baseline: da48de2. Decision: DEC-0056.
Status: **COMPLETE — LOCAL RENDER, REQUEST SCOPE AND NOTES CHECKED**.

## Presentation Change

S42의 문서 분리 전후에서 실제 접근을 관찰하는 질문으로 이어간다.
동일한 크기의 native 프롬프트창2개에 실제 TRIAL-005A/B 요청의 핵심을 발췌·번역했다.
읽기 전용·파일 변경 금지·근거 제시 조건은 원문에 있던 지시이므로 각 창 안에 둔다.
아래에는 다음 기록을 볼 중립 질문3개를 둔다.

1. 어떤 문서를 실제로 열었나?
2. 두 요청이 같은 문서를 읽었나?
3. 답에 사용한 근거는 무엇인가?

특정 문서로 가는 화살표나 예상 파일명, 접근 파일 목록, crop 정답·출력 폭,
의존성 존재 여부와 성공/실패 결과는 표시하지 않았다.
입력창·텍스트·관찰 질문은 native 편집 요소이며 실제 Screenshot이 아니다.
기존 제목·T05-A·BEAT-015/016·OBSERVED_PRODUCT setup·Claim Status·Lecture2분은 유지한다.

## Request Source Check

plan/DEMO_MATRIX.md의 TRIAL-005A/B 원문 Prompt와 실행 환경 기록을 직접 대조했다.

| 요청 | 원문에서 유지한 질문·조건 |
|---|---|
| A | current sample image, --crop 1 3의 source columns/output width/end inclusion, current contract/implementation 근거 |
| B | runtime dependencies의 존재와 판단 근거, build/package-only tools와의 구분 |
| 공통 | read-only, no file changes, evidence |

표의 옵션은 실제 원문의 `--crop 1 3`이다. 화면은 핵심 발췌·번역이며 원문 전체의
문자 단위 복사나 실제 제품 입력 화면을 주장하지 않는다. source line은 당시
Codex CLI0.154.0을 표시하고 현재 Desktop 검증과 구분한다. 같은 저장소의 별도
읽기 전용 실행 기록이며 나란한 화면 배치가 동시 Subagent 실행을 뜻하지 않는다.
새 Trial·테스트·제품 확인을 실행하지 않았다.

## Story and Claim Boundary

S42는 문서 배치, S43은 두 요청과 관찰 기준, S44–45는 실제 접근·답변 근거의 기록이다.
이번 장은 어디를 읽을지 답하지 않고, 기록에서 무엇을 확인할지만 알려준다.
파일을 연 기록과 최종 답변에서 제시한 근거를 나눠 보도록 Notes를 정렬했다.
열었다는 사실만으로 실제 답변 활용을 단정하지 않는다.
문서 분리만으로 자동 Routing·관련 문서만 읽음·AGENTS.md 단독 인과성·토큰 절약·
성능 개선을 주장하지 않으며 통제된 성능 비교 실험으로 설명하지 않는다.

## Validation

최종 통합90장과 ACT2 15장 패키지를 다시 읽어105개 PNG를 렌더링했다.
S43을 원본1920×1080에서 확인했으며 요청문·입력창 내 조건·관찰 질문·출처에
잘림·겹침은 발견하지 못했다. 검토한 초안과 최종 PNG는 byte 단위로 동일하다.
문서명·예상 경로·실제 접근 목록·정답·PASS/FAIL 판정의 미노출을 화면과 PPT XML에서 확인했다.

- 패키지 구조·레이아웃 findings0, first-party reimport PASS.
- Full90개/ACT2 15개 PNG는1920×1080이며 ACT2/Full15쌍이 일치한다.
- 다른89장 텍스트·PNG·Notes 레코드와 다른 ACT PPT는 baseline과 동일하다.
- 90개 내장 Notes/19개 필드와 ACT/Full Markdown 레코드를 대조했다.
- Template90행의 ID/Variant와 모든 장의 제목·시간·Mode는 불변이다.
- 90장/368분, ACT시간40/63/70/85/80/30, S43 Lecture2분은 불변이다.
- Mode: Lecture137/Demo73/Case84/Reflection20/Transition22/Q&A32분은 불변이다.
- Demo fallback29개 경로·hash·화면 크기는 그대로다. S43은 관찰 준비 장으로 Demo 시간을 추가하지 않는다.
- Demo Repository afef3e0/clean 유지. 새 Trial/제품 점검/묶음 ZIP·HTML 갱신 없음.

[검증 JSON](S43_PROMPT_WATCH_REVISION_VALIDATION.json)에 최종 파일 식별자를 기록한다.
지정 Malgun Gothic/Consolas와 로컬 Apple SD Gothic Neo/Menlo 대체 렌더를 유지한다.
Windows PowerPoint·발표 PC·교육장·제품/계정·실측 리허설은 UNVERIFIED다.
이전 평가·Decision 이력은 보존한다.

## Outputs

- [수정 S43](../preview/full/S43.png)
- [통합 PPT](../AI_Dev_Training_Full.pptx)
- [ACT2 PPT](../ACT_2.pptx)
- [ACT2 Notes](../notes/ACT_2_NOTES.md)
