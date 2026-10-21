# S37 — Request and Context Relevance Revision

Date: 2026-10-21. Baseline: 5a6c986. Decision: DEC-0049.
Status: **COMPLETE — LOCAL RENDER AND NOTES PARITY CHECKED**.

## Presentation Change

왼쪽에 실제 TRIAL-004 요청의 핵심 발췌·번역을 native 프롬프트창으로 표현했다.
README Build 안내의 빌드 도구·고정 버전 명시, pyproject.toml 기준, README-only,
기존 명령 유지, 패키지 설치·설정 변경 금지, 관련 검증 보고를 보존했다.

오른쪽 청록색 실선·면은 README 현재 안내와 pyproject.toml의 빌드 설정이다.
회색 점선은 정확하지만 이번 수정에 불필요했던 crop/resize 명세·처리 순서·
테스트 구조·CLI 필드다. 색뿐 아니라 라벨과 선 모양으로 구분한다.
필요한 검증과 이미지 테스트 구조 상세를 구분해 설명한다.

‘필요한 Context는 이번 작업의 질문에 따라 달라진다’로 S36의 누적 정보 질문을
회수하고 S38의 정보 범위·제공 시점으로 연결한다. 제목의 Task는 작업으로 바꿨다.
새 이미지 없이 전체 창·정보 영역·화살표·텍스트를 native 편집 요소로 구성했다.

## Evidence Scope

원문과 관찰은 plan/DEMO_MATRIX.md TRIAL-004 task/Agent behavior/Relevant Context/
Irrelevant-but-Correct Context를 대조했다. 원문 전체는 Notes·원본에 보존한다.
Codex CLI0.154.0의 기록이며 현재 Desktop이나 새 실행을 확인한 근거가 아니다.

Agent는 AGENTS.md, README.md, pyproject.toml을 읽었다. 회색 영역은 읽지 않았거나
틀린 정보라는 뜻이 아니다. 불필요한 정보로 인한 혼란·우회·Context 관련 실패는
관찰되지 않았고, 성능·토큰 효과도 측정하지 않았다. Prompt 자체가 파일·조건을
명시했으므로 성공을 확장된 Context의 단독 효과로 돌리지 않는다.

화면은 실제 기록을 바탕으로 한 native 재구성이지 원래 실행 화면 캡처가 아니다.
새 Trial·실험·Demo Repository 변경과 Claim 강화는 없다.

## Rendering and Notes

Full90장/ACT2 15장 최종 패키지를 다시 읽어105개 PNG를 생성했다.
S37 원본 크기와 S36-S38 연결을 확인했고 별도 시각 검토의 문구 권고도 반영했다.
요청의 ‘패키지 설치·설정 변경은 하지 마’와 ‘테스트 구조’를 명확히 했다.
글자 잘림·겹침, Prompt 가독성, 색/선/라벨의 구분을 확인했다.

다른89장의 텍스트·PNG·Notes 레코드와 다른 ACT PPT는 baseline과 동일하다.
90개 내장 Notes/19개 필드, ACT2/Full15쌍, package/layout/font-policy/import를 대조했다.
[검증 JSON](S37_CONTEXT_RELEVANCE_REVISION_VALIDATION.json)에 최종 식별자를 기록한다.
전체90장/368분, ACT2 15장/70분, S37 Demo2분·Reflection2분과 장별 배분을 유지한다.

Malgun Gothic/Consolas 지정과 Apple SD Gothic Neo/Menlo의 로컬 대체 렌더를 유지한다.
Windows·발표 PC·교육장·제품/계정·실측 리허설은 UNVERIFIED다.
묶음 ZIP/HTML을 갱신하지 않는다. 정상 산출물만 기존 origin/main에 일반 push한다.

## Outputs

- [수정 S37](../preview/full/S37.png)
- [통합 PPT](../AI_Dev_Training_Full.pptx)
- [ACT2 PPT](../ACT_2.pptx)
- [ACT2 Notes](../notes/ACT_2_NOTES.md)
