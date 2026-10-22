# S45 — Actual Document Access Comparison and Interpretation Limits

Date: 2026-10-22. Baseline: 9994afe. Decision: DEC-0058.
Status: **COMPLETE — LOCAL RENDER, ACCESS MATRIX AND NOTES CHECKED**.

## Presentation Change

S44의 Crop 요청 A에 실행 의존성 요청 B의 실제 접근을 나란히 놓았다.
7개 문서/설정 경로를 native 편집 표로 비교하고, 차이가 있는 행의 실제 읽음
셀만 청록 면과 굵기로 강조한다. 미접근은 실패 판정으로 표시하지 않는다.
오른쪽에는 ‘관찰된 차이’와 ‘해석의 한계’를 별도 라벨로 구분했다.

| 문서 / 설정 | A: Crop 범위 | B: 실행 의존성 |
|---|---|---|
| AGENTS.md | 읽음 | 읽음 |
| README.md | 읽음 | 읽음 |
| docs/architecture.md | 읽음 | 읽음 |
| docs/image-contracts.md | 읽음 | 읽지 않음 |
| docs/testing.md | 최종 실행에서 읽음 | 읽지 않음 |
| pyproject.toml | 읽지 않음 | 읽음 |
| setup.cfg | 읽지 않음 | 읽음 |

두 요청 모두 소스도 확인했다는 정보를 표 아래에 남긴다. 소스 파일과 명령 전체를
열거하거나 실제 읽기 순서를 추측하지 않는다. 화면은 정적 기록의 요약·재구성으로
실제 terminal Screenshot이나 현재 Desktop 화면이 아니다.
기존 제목·T04-C·BEAT-016/017·OBSERVED_PRODUCT·Claim Status·7분을 유지한다.

## Evidence and Interpretation

plan/DEMO_MATRIX.md의 TRIAL-005A/B 최종 접근/답·환경·반복 실행 차이를 직접 대조했다.
실제 비교표의 모든 셀은 해당 기록과 일치한다. testing.md와 관련 테스트는 A의 최종
실행에서 관찰했고 이전 A 실행에서는 달랐다. 별표와 출처에서 이 범위를 밝힌다.
실행은 과거 Codex CLI0.154.0, 별도 임시 clone의 ephemeral/read-only 조건이다.

- 관찰: 이미지 명세/테스트 안내는 A만, 패키지 설정은 B만 읽었다.
- 함께 관찰: 두 요청 모두 구조 문서와 README를 포함한 넓은 접근이 있었다.
- 해석 한계: 완벽한 Routing·문서 선택 정책·AGENTS.md 단독 인과성은 미입증이다.
- 효과 한계: 토큰 절약·성능 개선을 측정하지 않았다. 시간 수치를 효과로 제시하지 않는다.
- 제품 범위: 과거 CLI 기록은 현재 Codex Desktop 재현의 근거가 아니다.

B의 기록된 답은 third-party runtime dependency가 없고 Python3.9+와 표준 라이브러리가
필요하며 setuptools/wheel 등은 build/package 도구라는 구분이다. 이를 Notes에 남기되
화면의 중심은 문서 접근 비교로 유지한다. 파일 접근과 답의 근거·인과성은 구분한다.
새 Trial·테스트·제품 확인·Demo Repository 변경은 하지 않았다.

## Story and Notes

S43의 두 요청 → S44의 Crop 명세/답 → S45의 공통/차이 접근과 해석 경계 → S46의
남은 절차 반복으로 연결한다. 다른89장과 Notes 레코드는 그대로다.

- Demo0–1분: 최종 기록의 두 접근 열과 강조 셀.
- Case1–4분: 공통/넓은 접근, 상세/설정 차이, 실행 간 변동과 한계.
- Reflection4–6분: 관찰과 보장·효과의 차이를 조용히 생각하는 시간.
- Q&A6–7분: 질문 하나, 또는 ‘이 기록만으로 문서 선택을 보장할 수 있을까요?’.

## Validation

통합90장과 ACT2 15장 최종 패키지에서105개 PNG를 렌더링했다.
S45 원본1920×1080에서 표의 행·열 대응, 읽음/읽지 않음, 오른쪽 관찰/한계,
별표·출처·기존 footer를 확인했다. 로컬 화면에서 잘림·겹침을 발견하지 못했다.
검토한 draft02 PNG와 최종 PNG가 byte 단위로 동일하다.

- 구조·레이아웃 findings0, first-party reimport PASS.
- S45는 native table1개/8행(머리글 포함)/3열이다. 모든 셀을 기록과 대조했다.
- Full45번째/ACT2 14번째 native table 존재를 finalizer에서 필수로 확인한다.
- 표 글자18pt, 기존 제목36pt와 지정 Malgun Gothic/Consolas를 유지했다.
- Full90개/ACT2 15개 PNG는1920×1080, ACT2/Full15쌍이 일치한다.
- 다른89장의 텍스트·PNG·Notes와 다른 ACT PPT는 baseline과 같다.
- 90개 Notes/19개 필드, ACT/Full Markdown/내장 Notes가 일치한다.
- 90장/368분, ACT40/63/70/85/80/30분, 모든 장별 시간/Mode/제목/Template ID를 유지한다.
- Mode: Lecture137/Demo73/Case84/Reflection20/Transition22/Q&A32분을 유지한다.
- DEMO-06 S45 정적 fallback hash를 갱신했고 다른28개 PNG는 동일하다.
- Demo Repository afef3e0/clean 유지. 묶음 ZIP/HTML은 갱신하지 않았다.

native table 필수 조건을 추가한 첫 private export는 검사 정책 선언이 누락되어 중단됐다.
owner와 layout 검사 정책을 함께 선언한 final02가 최종 검증·렌더 대상이다.
중간 candidate는 외부에 전달하지 않았다. 이 기록은 로컬 산출물 점검이며
Windows PowerPoint·목표 글꼴·교육장·현재 제품/계정·실측 리허설은 UNVERIFIED다.
로컬 대체 렌더 글꼴은 Apple SD Gothic Neo/Menlo다. 과거 평가와 Decision은 보존한다.

[검증 JSON](S45_ACCESS_COMPARISON_REVISION_VALIDATION.json)에 현재 산출물 식별자를 기록한다.

## Outputs

- [수정 S45](../preview/full/S45.png)
- [통합 PPT](../AI_Dev_Training_Full.pptx)
- [ACT2 PPT](../ACT_2.pptx)
- [ACT2 Notes](../notes/ACT_2_NOTES.md)
