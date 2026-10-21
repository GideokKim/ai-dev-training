# S34 — Prompt and Project Instruction Revision

Date:2026-10-21. Baseline:2e10856. Decision:DEC-0046.
Status: **COMPLETE — LOCAL RENDER AND NOTES PARITY PASSED**.

## Presentation Change

실제 요청의 핵심 발췌·번역을 native Prompt 창에 배치했다.
“실제 요청에는 테스트 명령 미포함”은 창 아래 **원문 밖 주석**으로 분리했다.
요청의 최종 diff·검증 근거 보고는 남겨 검증 자체를 요청하지 않았다는 오해를 막았다.

AGENTS.md는 **프로젝트 작업 규칙** 카드로 강조했다. 지정된 전체 테스트 명령을
실행하라는 테스트 지침과 관찰된11/11 PASS를 연결한다. 제목은
“AGENTS.md의 지침대로 검증했다”이며, 하단에서 Prompt 밖 지침의 실제 적용을 회수한다.

## Evidence Scope

실제 TRIAL-003 요청·AGENTS.md 접근·테스트 실행은 plan/DEMO_MATRIX.md의
TRIAL-003 기록을 따른다. STATE-01 AGENTS.md9행의 프로젝트 테스트 명령을
사용했고 실제 실행에는 PYTHONDONTWRITEBYTECODE=1을 앞에 붙였다.

강조한 것은 **단일 실행에서 관찰된 테스트 지침의 사용**이다.
Personal/global Skills도 실행됐고 active instruction-chain dump가 없으므로
강제 준수 보장·모든 지침 준수·AGENTS.md 단독 효과로 확대하지 않는다.
README-only는 Prompt에도 있었으므로 독립적인 지침 효과로 세지 않는다.
원본 기록·지침·Demo 저장소는 수정하지 않았고 새 Trial은 실행하지 않았다.

## Alignment and Rendering

S34 Map·Template 제목과19개 Notes 필드를 정렬했다. S33의 프로젝트 지침 소개
다음에 실제 적용 관찰을 보여주고, S35의 Task/Project 정보 구분으로 연결한다.
현재Full90장과 ACT2 15장, 총105개 PNG를1920×1080으로 렌더링했다.
요청 창과 외부 주석의 분리, 텍스트 잘림·겹침, 지침·실행 결과의 연결을 확인했다.
두 PPTX의 package/layout/font-policy/import 검사 finding은0이다.
Full/ACT2 PNG15쌍과90개 내장 Notes를 대조했다.

다른89장 PNG·화면 텍스트·Notes 레코드는 baseline과 동일하다.
전체90장/368분, ACT2 15장/70분, S34 Demo4분 및 모든 장별 Mode를 유지한다.
지정 글꼴은 Malgun Gothic/Consolas이며 로컬 preview는 Apple SD Gothic Neo/Menlo로
대체 렌더링했다. Windows·교육장·제품/계정·실측 리허설은 UNVERIFIED다.
HYBRID는 활성화하지 않았고 기본 경로는 정적 PPT/PNG다.
묶음 ZIP/HTML과 다른 ACT PPT는 변경하지 않았다.

자세한 파일 식별자와 검사 수치는 [검증 JSON](S34_GUIDANCE_REVISION_VALIDATION.json)을 따른다.
정상 산출물만 기존 origin/main에 일반 commit/push한다. 실제 checkpoint는
Git 이력과 완료 보고에 기록한다.

## Outputs

- [수정 S34](../preview/full/S34.png)
- [통합 PPT](../AI_Dev_Training_Full.pptx)
- [ACT2 PPT](../ACT_2.pptx)
- [ACT2 Notes](../notes/ACT_2_NOTES.md)
