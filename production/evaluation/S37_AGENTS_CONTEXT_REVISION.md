# S37 — AGENTS.md Internal Context Classification

Date: 2026-10-21. Baseline: da6dd26. Decision: DEC-0050.
Status: **COMPLETE — LOCAL RENDER AND NOTES PARITY CHECKED**.

## Correction

이전 우측의 필요한 Context가 README/pyproject.toml 파일 비교였던 점을 바로잡았다.
이제 우측 두 영역은 모두 **AGENTS.md에 적힌 내용**을 분류한다.
왼쪽 실제 요청 프롬프트창은 텍스트·배치·구조를 그대로 유지한다.

청록 실선은 Build / Run의 README 빌드·실행 안내 참조와 Core Constraints의
범위 준수·관련 동작 검증 지침이다. 회색 점선은 Architecture/Image Contract/
Test 중 구조 설명/CLI Summary의 이미지 처리 상세다. 원문 섹션 이름을 연결했다.
전체 Test 지침이나 요청된 검증을 불필요한 것으로 분류하지 않는다.

특정 README-only/pyproject.toml 기준은 왼쪽 실제 요청의 지시다. 고정 버전값은
pyproject.toml의 실제 데이터이며 AGENTS.md 내용으로 표시하지 않는다.

## Evidence and Boundary

STATE-02 AGENTS.md(55c045523ed1409449d7eea5b0d873983fe101b6) 원문과
plan/DEMO_MATRIX.md의 TRIAL-004 Relevant Context/Irrelevant-but-Correct Context를
대조했다. 원본 AGENTS.md나 Trial 자료는 수정하지 않았다.

TRIAL-004는 Codex CLI0.154.0의 역사적 단일 문서 작업이다. AGENTS.md도 읽었고
혼란·우회·Context 관련 실패는 관찰되지 않았다. 지침은 요청과 일치했지만
성공의 독립 원인으로 입증되지 않았다. 성능·토큰 효과는 미측정이다.
회색 영역은 틀린 정보·읽지 않은 정보라는 뜻이 아니다.
화면은 실제 기록의 native 발췌·번역 도식이며 제품 실행 화면 캡처가 아니다.

S36의 늘어난 AGENTS.md에서 어떤 지침·정보가 이번 일에 관련되는지 비교하고,
S38의 범위·제공 시점으로 연결한다. 새 Trial·실환경 검사·Demo 변경은 없다.
DEC-0049 결과는 당시 판본의 기록으로 남기며 본 수정이 우측 분류 기준을 대체한다.

## Validation

최종 Full90장/ACT2 15장을 다시 읽어105개 PNG를 생성했다.
S37 원본 크기와 S36-S38 연결, 청록 실선/회색 점선, 원문 섹션 대응을 검토했다.
별도 시각 검토에서 잘림·겹침이나 추가 수정 권고는 없었다.
왼쪽 Prompt 창의 native 요소4개는 자동 생성 식별자를 제외한 텍스트·서식·위치·구조가 baseline과 동일하다.
다른89장의 화면 텍스트·PNG·Notes와 다른 ACT PPT는 baseline을 유지한다.
90개 내장 Notes/19개 필드, Full/ACT2 PNG15쌍과 package/layout/font-policy/import를 대조했다.
[검증 JSON](S37_AGENTS_CONTEXT_REVISION_VALIDATION.json)에 최종 식별자를 기록한다.

전체90장/368분, ACT2 15장/70분, S37 Demo2분·Reflection2분과 장별 배분은 불변이다.
지정 Malgun Gothic/Consolas와 로컬 Apple SD Gothic Neo/Menlo 대체 렌더를 유지한다.
Windows·발표 PC·교육장·현재 제품/계정·실측 리허설은 UNVERIFIED다.
묶음 ZIP/HTML은 갱신하지 않는다. 정상 산출물만 기존 origin/main에 일반 push한다.

## Outputs

- [수정 S37](../preview/full/S37.png)
- [통합 PPT](../AI_Dev_Training_Full.pptx)
- [ACT2 PPT](../ACT_2.pptx)
- [ACT2 Notes](../notes/ACT_2_NOTES.md)
