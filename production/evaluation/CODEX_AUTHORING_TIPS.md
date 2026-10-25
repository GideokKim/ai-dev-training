# Codex 제작 팁 추가 결과

Decision: DEC-0093. Date:2026-10-25. Baseline:`8d98563`.
Status: **LOCAL PASS / target environment and rehearsal UNVERIFIED**.

## 추가한 두 장

| 새 ID | 이전 위치 | 화면 | 시간 | 로컬 판정 |
|---|---|---|---|---|
| S63 | 이전 S62 뒤 | 대화로 재사용할 Skill 만들기: 명시 호출·제작 요청→SKILL.md 역할 확인→대표 요청에 사용·수정 |Lecture2분|PASS|
| S68 | 이전 S66 뒤 | 대화로 조사 Agent 만들기: 역할·사용 조건·보고 요청→프로젝트 TOML 확인→이름을 지정한 Subagent 조사·종합 요청 |Lecture2분|PASS|

현재 S62→S63→S64는 실제 지침/기록 대응→제작 시작→절차와 작업별 답의 구분이다.
현재 S67→S68→S69는 독립 조사 역할 분리 가정→Codex 제작 방법→실제 밝기 통계에서
분담하지 않은 이유다. 만들 수 있다는 사실을 도입 의무나 실제 Demo 선택 변경으로 쓰지 않는다.
주변 Notes 변경은 S62 Transition, S64 Opening Flow, S67 Transition이다.

## 근거와 Claim 경계

2026-10-25 공식 [Build skills](https://learn.chatgpt.com/docs/build-skills)와
[Subagents](https://learn.chatgpt.com/docs/agent-configuration/subagents) 본문을 재확인했다.
기존 Source ID SRC-0111/0112를 유지하고 재확인 기록·CLM-0041/0042를 추가했다.
RESEARCH/TEACHING_MODEL이며 현재 대상 제품·계정 확인은 별도다.
두 화면은 교육용 요청·문서 도식으로 실제 생성·호출 캡처가 아니다. TRIAL-008을
Skill Creator로 제작했다는 과거 이력을 만들지 않았다. Subagent용 별도 creator Skill이나
자동 호출 보장은 주장하지 않는다. 역할의 수정 금지 지침은 별도 읽기 전용 권한이 아니다.
일회성 분담과 재사용할 Custom Agent 설정을 구분한다.

## 보존·시간·번호

115장·406분, ACT 장수14/22/19/26/19/15, 시간43/64/82/96/81/40분.
Mode Lecture164/Demo73/Case88/Reflection21/Transition28/Q&A32분.
기존113장의 배정·Evidence Type·Claim 경계를 보존했다. 이전 S63–S66은 +1,
이전 S67 이후는 +2다. ACT4 현재 S82–S100의19장·81분·순서·실제/가상/Meta 사례와
Notes 역할을 유지한다. ACT5는15장·40분, 기존 마지막 찾아보기 세 장도 그대로다.
19개 팁과 목록 S112–S114를 대조했다.12Templates/28Variants와19Notes 필드를 유지한다.

## 렌더링·구조·Notes 검증

Full115+6ACT115, 총230개1920×1080 PNG를 최종 PPTX 재입력 후 렌더링했다.
115개의 Full/ACT 화면·Notes 대응과115×19필드를 확인했다.112개 보존 화면은
번호/참조 영역 밖 픽셀이 동일하다. 이전 S110의 첫 목록만7항목으로 확장됐다.
Native 표 S53/S62/S92와 차트 S66, 모든 보존 이미지의 bytes/crop/위치를 대조했다.
실제 기존 그림·근거 수치를 바꾸지 않았다. 새 화면은 Native text/shape로 편집 가능하다.

추가 두 장을 원해상도로 확인하고 ACT0–5 전체 흐름을 montage로 검토했다.
S63 하단 핵심 문장은 출처선에서 여유를 확보하도록 위로 옮겨 다시 렌더링했다.
새 화면·첫 목록에서 한글 깨짐·본문 잘림·도형 겹침을 발견하지 않았다.
First-party package/layout findings0,7개 PPTX 재입력 통과. 기존 표 경고는 Full S53과
ACT2 local17의0.01in overflow 두 view에 그대로 남으며 새 결함이 아니다.
별도 Office XSD/Windows PowerPoint 검증이나 실제 투사·제품 실행·시간 리허설을
한 것으로 표시하지 않는다.

## 파일과 후속 Gate

- [통합 PPT](../AI_Dev_Training_Full.pptx), [ACT3 PPT](../ACT_3.pptx).
- [통합 Notes](../notes/FULL_SPEAKER_NOTES.md), [ACT3 Notes](../notes/ACT_3_NOTES.md).
- [두 장](../preview/full/codex-authoring-tips.png), [연속 흐름](../preview/full/codex-authoring-sequence.png).
- [검사 기록](CODEX_AUTHORING_TIPS_VALIDATION.json), [번호 이행표](../../plan/SLIDE_ID_MIGRATION_115.md).
- [설계](../../plan/CODEX_AUTHORING_TIPS.md), [공식 근거](../../references/product/CODEX_AUTHORING_2026-10-25.md).
- Slide/Template/Claim/Tip/module 맵, 현재 기획/Notes 운영 표, 사용자 체크리스트,
  FAQ·runbook·전달 문서의 현재 번호와34fallback 식별자를 정렬했다.

P0/P1: 로컬 추가 범위에서 미해결 항목 없음. 현재 교육 제품·계정의 호출/생성/로딩,
Windows PowerPoint·글꼴·교육장·실측 리허설은 UNVERIFIED다.
기존 Trial 원문·State Tag·Demo 저장소·원본 이미지·Prototype·발표 묶음은 보존했다.
실제 Skill/Custom Agent 설치·사용이나 새 Trial·성과 주장은 없다.

Git: 정상 산출물만 Commit하고 기존 origin/main에 일반 Push한다. 최종 식별자는
완료 응답과 Git history를 따른다. Force Push·Remote 변경 없음.
Next readiness: **READY FOR USER REVIEW**.
