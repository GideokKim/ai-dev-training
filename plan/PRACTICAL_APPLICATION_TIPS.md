# 실무 적용 팁 — 공통 표시와 마지막 통합 찾아보기

## 현재 제작 기준 — DEC-0108 / DEC-0109 / DEC-0110 (2026-10-27)

현재 **119장·417분(6시간57분)**. 이전 S15 제조 검사 전환 장을 삭제하고
이전 S16–S120을 S15–S119로 한 칸 당긴다. S14는 정보 접근과 사람의 최종 판단을
구분하던 이전 화면을 유지하고, ACT0 Q&A 후 ACT1 제목으로 이어간다.
삭제 장의 전환3분은 줄이고 Q&A3분은 S14에 남긴다. S14는 Lecture2+Q&A3=5분이다.
ACT별 장수14/22/22/26/20/15, 시간42/64/90/96/85/40분.
Mode Lecture186/Demo49/Case105/Reflection22/Transition23/Q&A32분.
다른 장의 내용·장별 시간/Mode·근거·Trial/State/Beat/Section ID는 유지한다.
ACT1 S16–S18은 DEC-0110에 따라 같은 crop 수정 요청으로 연결한다.
빠진 기준 확인→허용 범위 비교→구체 요청 순서이며 교육용 예시다.
S19–S21의 일반화·문장 대응과 S22 이후 실제 TRIAL-002는 구분한다.
[현재 ACT1 사례](ACT1_SINGLE_CROP_CASE.md)를 따른다.
Native 표는 S53/S65, 차트는 S69/S96, 마지막 팁 찾아보기는 S116–S118이다.
12Templates/28Variants·19Notes 필드는 유지한다. 제품·Windows·교육장·리허설은
UNVERIFIED다. Demo 저장소·Sites·발표 묶음은 변경하지 않는다.
[현재 Map](SLIDE_MAP.md), [번호 이행](SLIDE_ID_MIGRATION_119.md),
[삭제·연결 범위](ACT0_S15_REMOVAL.md)를 우선한다. 아래 이전 판본은 당시 이력이다.

## ACT0 용어 적용 — DEC-0106 (2026-10-27)

ACT0의 일반 설명은 “개발 프로젝트”, 폴더를 여는 조작은 “프로젝트 폴더”로 표현한다.
S01에서 코드·명세·테스트가 있는 프로젝트 폴더라는 뜻을 한 줄로 밝힌다.
프로젝트 파일과 실행 로그·권한 정보는 계속 구분한다. 실제 TRIAL-001 요청의 “이 저장소”와
Git/원문/파일명·식별자·과거 기록은 보존한다. 마지막 찾아보기 S117의 S13 제목 참조만 맞춘다.
120장·420분, ACT0 15장·45분 및 모든 장별 시간/Mode·근거는 그대로다.
[현재 용어 기준](ACT0_TERMINOLOGY.md), [현재 Map](SLIDE_MAP.md)를 따른다.
아래 이전 Repository 표기는 당시 기획/제작 이력이다.

## 현재 제작 기준 — DEC-0104 (2026-10-26)

현재 **120장·420분(7시간)**. 기존 S55 뒤에 실무 적용 팁 S56–S58을
Lecture3/3/2분으로 추가한다. 기존117장의 Story·근거·장별 시간/Mode는 유지한다.
이전 S56–S117은 +3 이행한다. ACT별 장수15/22/22/26/20/15,
시간45/64/90/96/85/40분. Mode Lecture186/Demo49/Case105/Reflection22/Transition26/Q&A32분.
S56 지침 배치 → S57 공통·모듈 지침 결합 → S58 적용 범위와 시작 시 자동 수집의 차이.
공식 안내를 활용한 프로젝트 적용 예이며 기존 graypipe의 실제 State/Trial에 추가한
관찰이 아니다. 기존 문서 Routing과 새로운 중첩 AGENTS.md의 지침 범위를 구분한다.
마지막 찾아보기 S117에 새3장을 묶은 항목만 추가한다.12Templates/28Variants·19Notes 필드 유지.
[현재 설계](AGENTS_SCOPE_TIPS.md), [번호 이행](SLIDE_ID_MIGRATION_120.md), [현재 Map](SLIDE_MAP.md).
아래 이전 번호·시간·제작/검증 결과는 당시 판본의 이력이다. 현재 목록은 위 기준을 따른다.
Windows/교육장/제품·계정/실측 리허설은 UNVERIFIED. Demo 저장소·웹·발표 묶음은 변경하지 않는다.

### Current tip inventory

25tip slides:22retained (including S04) + S56/S57/S58. Final indexes remain3pages S117/S118/S119. S117 adds one grouped lookup for the three scope tips; S118/S119 change references only. Older JSON stays at its116-ID input stage and build adapters map it once.

## 현재117장 팁 위치 — DEC-0101

22개 팁 중 새 S04만 추가했다. 기존 마지막 찾아보기 화면은 새 행을 넣지 않고 기존 제목/참조만 유지한다. 아래 이전 판본 표는 이력이다.

| Slide | ACT | 분류 | 제목 |
|---|---|---|---|
| S04 | ACT 0 | 사용 환경 | 코드 질문은 VS Code의 Copilot Chat에서 |
| S13 | ACT 0 | 사용 환경 | Repository 작업은 Codex에서 시작한다 |
| S28 | ACT 1 | 요청 작성 | 지시와 참고 자료의 구분 |
| S29 | ACT 1 | 요청 작성 | 입력과 기대 결과의 작은 예시 |
| S30 | ACT 1 | 요청 작성 | 바로 검토할 수 있는 결과 형식 |
| S31 | ACT 1 | 요청 작성 | 근거가 있는 설명과 미확인의 구분 |
| S32 | ACT 1 | 요청 작성 | 결과를 바꾸는 결정에서 확인 질문 |
| S33 | ACT 1 | 요청 작성 | 큰 작업을 검토할 결과물로 나누기 |
| S34 | ACT 1 | 요청 작성 | 기준을 지정한 코드 리뷰 요청 |
| S35 | ACT 1 | 요청 작성 | 구체적인 근거로 수정 방향 피드백 |
| S49 | ACT 2 | Context 관리 | AGENTS.md에는 무엇을 남길까? |
| S59 | ACT 3 | 수행 방법 | 테스트 명령을 언제 쓰고 무엇을 판단할까? |
| S64 | ACT 3 | 수행 방법 | 대화로 재사용할 Skill 만들기 |
| S69 | ACT 3 | 수행 방법 | 대화로 조사 Agent 만들기 |
| S71 | ACT 3 | Context 관리 | 이번 Context와 다시 쓸 지식 |
| S81 | ACT 3 | 수행 방법 | 다음 수정에 넘길 기록 |
| S88 | ACT 4 | 검증·개선 | 모델 B는 무엇을 근거로 검토할까? |
| S92 | ACT 4 | 검증·개선 | 언제 계속하고, 언제 끝낼까? |
| S100 | ACT 4 | 수행 방법 | Goal이 목표와 다음 작업을 이어준다 |
| S101 | ACT 4 | 검증·개선 | Goal에는 완료 근거와 멈출 조건을 담는다 |
| S110 | ACT 5 | 검증·개선 | 무엇을 남기고, 무엇을 덜어낼까? |
| S111 | ACT 5 | 검증·개선 | 덜어낸 뒤에도 필요한 일을 하는가? |

## 현재 제작 기준 — DEC-0101 (2026-10-26)

현재 **117장·412분(6시간52분)**. 기존 S03 뒤에 VS Code + GitHub Copilot
사용 팁 S04를 Lecture2분으로 추가한다. 기존116장의 내용·디자인·장별 시간/Mode·
근거는 유지하며 이전 S04–S116의 번호와 현재 참조만 +1 이행한다.
이전 S04(현재 S05)와 이전 S12(현재 S13)의 문구·구성도 그대로 유지한다.
ACT 장수15/22/19/26/20/15, 시간45/64/82/96/85/40분.
Mode Lecture178/Demo49/Case105/Reflection22/Transition26/Q&A32분.
팁은 회사에서 사용하는 조합의 활용 안내이며 재구성한 UI·교육용 요청이다.
회사 화면·Copilot 응답·실행·효과를 관찰한 근거가 아니며 대상 계정은 미검증이다.
[추가 범위](COPILOT_IDE_TIP.md), [116→117 번호](SLIDE_ID_MIGRATION_117.md),
[현행 Map](SLIDE_MAP.md)를 따른다. 기존 팁 찾아보기는 새 항목을 넣지 않고
기존 제목·참조만 보존한다. 아래 이전 판본은 당시 번호·시간·검증 이력이다.
Windows/교육장/제품·계정/실측 리허설은 UNVERIFIED다. 웹·발표 묶음·Demo 저장소는 변경하지 않는다.

## 현재 Goal 팁·ACT5 연결 — DEC-0098 (2026-10-25)

116장·410분(6시간50분). ACT4 S82–S101은20장·85분, ACT5는 S102–S116의15장·40분이다. ACT 장수14/22/19/26/20/15와 시간43/64/82/96/85/40분. Mode Lecture176/Demo51/Case103/Reflection22/Transition26/Q&A32분이다.

S98 뒤에 Goal 실무 적용 팁 S99/S100을 각 Lecture2분씩 추가한다. 기존114장 배정과
근거는 유지하며 이전 S99–S114만+2 이행한다. 실무 팁21개, 마지막 찾아보기 S113–S115다.
Goal 공식 안내는 제품 활용 예이고 새 Trial·Goal 활성화·자동 다중 모델 검토·성과의 근거가 아니다.
ACT5 초반은 필요한 대응 선택→실제 제품 이력과 Goal의 경계→보류 이유→수용 책임으로 정렬한다.
[설계·연결 검토](GOAL_TIPS_AND_ACT5_HANDOFF.md), [현행 Map](SLIDE_MAP.md),
[114→116 번호](SLIDE_ID_MIGRATION_116.md)를 따른다.12Templates/28Variants·19Notes 필드를 유지한다.
아래 이전 판본은 이력이다. 실환경·계정·제품 기능·실측 리허설은 UNVERIFIED다.
Demo Repository·기존 Trial/State·발표 묶음은 변경하지 않는다.


## 이전 ACT4 제작 기준 — DEC-0097 (2026-10-25)

사용자가 ACT4 재기획안을 승인했다. 현재114장·406분(6시간46분), ACT 장수
14/22/19/26/18/15와 시간43/64/82/96/81/40분이다. ACT4 S82–S99는18장·81분,
ACT5는 S100–S114다. 이전 S100 GPU 장을 삭제하고 이전 S101–S115를 -1 이행했다.
전체 Mode는 Lecture172/Demo51/Case103/Reflection22/Transition26/Q&A32분이다.
이전 ACT4의 visual/captured Demo22분을 포함한 배정을 새 설계에 맞춰 재배분했다.
새 반복 진행은 Case이며 실제 새 모델 호출·수정·검증·성과를 관찰한 Demo가 아니다.

ACT4의 중심은 **같은 목표의 구현 → 근거 있는 검토 → 수정 → 재검토 → 목표 충족 판단**이다.
Harness 개선은 관련 확장이며 이 수행 루프의 주 사례를 대신하지 않는다.
CASE-LOOP-01은 별도 교육용 밝기 통계 설계이고, S92–S94는 조건을 제한한 연구다.
현재 다중 모델 조합·제품 실행 표면·반복 효과는 미검증이다. 기존 Product/Meta
Trial과 새 설계의 근거를 합치지 않는다. 연구는 다른 모델의 보편적 우월성을 뜻하지 않는다.

[승인 설계](ACT4_GOAL_LOOP_REPLAN.md), [현행 Map](SLIDE_MAP.md),
[115→114 이행](SLIDE_ID_MIGRATION_114.md)을 따른다. 기존12Templates/28Variants,
19Notes 필드와19개 실무 적용 팁을 유지한다. 마지막 찾아보기는 S111–S113이다.
아래 이전 정의·번호·시간·검증은 이력이다. 새 기준과 충돌하면 현재 사용자 승인과
DEC-0097을 우선한다. Windows/교육장/제품·계정/실제 리허설은 UNVERIFIED다.
Demo Repository·기존 State/Trial·발표 묶음은 변경하지 않는다.


Current inventory: DEC-0093 /115slides/406minutes,19body tips and3final indexes S112-S114. New S63/S68 have 수행 방법 badges and are educational current-product authoring examples, not Trial history. The current table below supersedes earlier counts/numbering in the retained prose.

Decision: DEC-0088 placement; DEC-0090 ACT titles; DEC-0091 current numbering; DEC-0092 S78 feedback-record tip.
Current:113장·402분. 본문 팁17개와 마지막 찾아보기3장·Lecture3분을 유지한다.
이전 독립 C++ 팁을 삭제하고 S78의 기록 팁을 그 자리에 연결한다.

## 배치와 공통 배지

팁 본문은 원래 문제·적용 맥락에 둔다. ACT 중간에는 목록을 넣지 않고 마지막
회고 뒤 S110–S112에서 한 번에 안내한 뒤 S113의 기존 Q&A/Closing으로 끝낸다.
공통 배지는 활용 목적을 나타내며 실제/연구/교육용 사례의 근거 등급을 높이지 않는다.
Native rectangle x780/y44/w320/h34, fill#E8EDF3, 기존 line/ink와 Malgun Gothic18px를 유지한다.
마지막3장만 찾아보기 배지를 쓰며 제목6장에는 팁 배지를 추가하지 않는다.
기존12Templates/28Variants·19Notes 필드를 사용하고 새 Trial·성과를 추가하지 않는다.

## 현재 팁 목록

| ACT | 이전108장 ID | 현재113장 ID | 분류 | 제목 | 선정 이유 | 근거 유형 |
|---|---|---|---|---|---|---|
| ACT0 | 기존 | S12 | 사용 환경 | Repository 작업은 Codex에서 시작한다 | 사내 사용 환경에서 개발 작업을 시작하는 경로 | RESEARCH / TEACHING_MODEL |
| ACT1 | 기존 | S27 | 요청 작성 | 지시와 참고 자료의 구분 | 독립적으로 참고할 수 있는 요청 문장과 적용 상황 | RESEARCH / TEACHING_MODEL / CONCEPTUAL |
| ACT1 | 기존 | S28 | 요청 작성 | 입력과 기대 결과의 작은 예시 | 독립적으로 참고할 수 있는 요청 문장과 적용 상황 | RESEARCH / TEACHING_MODEL / CONCEPTUAL |
| ACT1 | 기존 | S29 | 요청 작성 | 바로 검토할 수 있는 결과 형식 | 독립적으로 참고할 수 있는 요청 문장과 적용 상황 | RESEARCH / TEACHING_MODEL / CONCEPTUAL |
| ACT1 | 기존 | S30 | 요청 작성 | 근거가 있는 설명과 미확인의 구분 | 독립적으로 참고할 수 있는 요청 문장과 적용 상황 | RESEARCH / TEACHING_MODEL / CONCEPTUAL |
| ACT1 | 기존 | S31 | 요청 작성 | 결과를 바꾸는 결정에서 확인 질문 | 독립적으로 참고할 수 있는 요청 문장과 적용 상황 | RESEARCH / TEACHING_MODEL / CONCEPTUAL |
| ACT1 | 기존 | S32 | 요청 작성 | 큰 작업을 검토할 결과물로 나누기 | 독립적으로 참고할 수 있는 요청 문장과 적용 상황 | RESEARCH / TEACHING_MODEL / CONCEPTUAL |
| ACT1 | 기존 | S33 | 요청 작성 | 기준을 지정한 코드 리뷰 요청 | 독립적으로 참고할 수 있는 요청 문장과 적용 상황 | RESEARCH / TEACHING_MODEL / CONCEPTUAL |
| ACT1 | 기존 | S34 | 요청 작성 | 구체적인 근거로 수정 방향 피드백 | 독립적으로 참고할 수 있는 요청 문장과 적용 상황 | RESEARCH / TEACHING_MODEL / CONCEPTUAL |
| ACT2 | 기존 | S48 | Context 관리 | AGENTS.md에는 무엇을 남길까? | 기본 안내와 상세 정보의 배치 기준 | TEACHING_MODEL |
| ACT3 | 기존 | S58 | 수행 방법 | 테스트 명령을 언제 쓰고 무엇을 판단할까? | 검증 명령의 사용 시점과 판단 기준 | TEACHING_MODEL |
| ACT3 | 신규 | S63 | 수행 방법 | 대화로 재사용할 Skill 만들기 | Codex에서 대화로 초안/역할 설정을 작성하고 확인·사용하는 공식 안내 각색 | RESEARCH / TEACHING_MODEL |
| ACT3 | 신규 | S68 | 수행 방법 | 대화로 조사 Agent 만들기 | Codex에서 대화로 초안/역할 설정을 작성하고 확인·사용하는 공식 안내 각색 | RESEARCH / TEACHING_MODEL |
| ACT3 | 기존 | S70 | Context 관리 | 이번 Context와 다시 쓸 지식 | 다음 작업에 남길 지식의 선정·관리 기준 | CONCEPTUAL / TEACHING_MODEL |
| ACT3 | 기존 | S80 | 수행 방법 | 반복 보정을 개선으로 잇는 기록 | 원래 기준·실제 수행·사람의 보정을 남겨 다음 작업의 체계 개선을 검토하는 틀 | TEACHING_MODEL |
| ACT4 | 기존 | S87 | 검증·개선 | 원인을 고르기 전에 확인할 기록 | 원인 선택 전에 확인할 기록 목록 | CONCEPTUAL / TEACHING_MODEL |
| ACT4 | 기존 | S91 | 검증·개선 | 지침을 고친 뒤, 무엇을 다시 확인할까? | 지침 갱신 뒤 같은 작업과 다른 작업을 확인하는 질문 | CONCEPTUAL / TEACHING_MODEL |
| ACT5 | 기존 | S108 | 검증·개선 | 무엇을 남기고, 무엇을 덜어낼까? | 기존 구성을 유지·통합·제거할 조건 | TEACHING_MODEL |
| ACT5 | 기존 | S109 | 검증·개선 | 덜어낸 뒤에도 필요한 일을 하는가? | 통합·제거 후보의 비교·되돌림 기준 | TEACHING_MODEL / RESEARCH |

## 마지막 통합 찾아보기

| ID | 제목 | 참조 팁 | 다음 | 배정 |
|---|---|---|---|---|
| S112 | 실무 적용 팁 · 작업 환경과 기준 | S12, S48, S58, S63, S68, S70, S80 | S113 | Lecture1분 |
| S113 | 실무 적용 팁 · 요청 작성 | S27, S28, S29, S30, S31, S32, S33, S34 | S114 | Lecture1분 |
| S114 | 실무 적용 팁 · 검증과 개선 | S87, S91, S108, S109 | S115 | Lecture1분 |

17개 팁은 한 번씩만 목록에 나온다.5/8항목은 두 열,4항목은 한 열인 기존 T03-A다.
S78은 기준·실제 수행·사람의 보정을 비교할 교육용 기록 틀이며 실제 새 보고서·개선 결과가 아니다.
ACT4 팁 S85/S89의 기존 역할·시간·근거는 그대로다. 현재 Slide Map을 기준으로 한다.

## 현재 배정과 검증

113장·402분. ACT14/22/19/24/19/15장,43/64/82/92/81/40분.
Mode Lecture160/Demo73/Case88/Reflection21/Transition28/Q&A32분.
로컬 검토는 [재사용 설명 수정 결과](../production/evaluation/HARNESS_REUSE_REVISION.md)에 기록한다.
Windows/교육장/제품·계정/실측 리허설은 UNVERIFIED. 발표 묶음은 만들지 않는다.
[현행 Map](SLIDE_MAP.md), [108→113 이행표](SLIDE_ID_MIGRATION_113.md).

## 이전 배치 이력

DEC-0087/a0e0dc0은105장·393분에서 ACT별 목록 S13/S34/S54/S73/S92/S104를
운영했다. 사용자가 중간 목록이 흐름을 끊는다고 판단해 DEC-0088/619342a에서
마지막3장으로 통합해102장·390분이 됐다. 그 마지막 위치·역할을 유지한 채
DEC-0090에서 제목6장을 앞에 삽입한다. 과거 결과와 이행표는 당시 판본이다.
[DEC-0087 결과](../production/evaluation/PRACTICAL_APPLICATION_TIPS.md),
[DEC-0088 결과](../production/evaluation/FINAL_PRACTICAL_TIPS_CONSOLIDATION.md).
