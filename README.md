# AI 개발자 교육

## 발표 자료 · DEC-0151

[통합 PPT](production/AI_Dev_Training_Full.pptx) · [ACT3 PPT](production/ACT_3.pptx) · [ACT4 PPT](production/ACT_4.pptx) · [ACT4 발표 Notes](production/notes/ACT_4_NOTES.md)

전체 113장·389분 중 ACT4는 S78–S97, 85분이다. S77에서는 점심 전 구현·테스트까지 맡겼던 요청과, 돌아와서 본 구현 시작 여부 질문을 한 화면에서 비교한다. S79는 그 질문에 “응, 시작해.”라고 답한 뒤 첫 구현의 지적을 사람이 다시 전달하는 장면이다. S80에서는 같은 상황을 루프로 다시 본다. S81은 기존 프롬프팅과 루프 엔지니어링의 진행 주체·컨텍스트·오류 처리·결과물을 비교한다. S82는 같은 첫 수정안의 목록 생성식을 확대한다. S83–S85에서는 전체 픽셀 복사를 행별 집계로 바꾼 뒤, 빠진 실행시간을 측정하고 다음 행동을 정한다. S88부터는 같은 흐름을 GitLab 이슈·작업 공간·팀 검토에 연결한 사내 운영 사례다. S87은 PairCoder 표 2의 코드 생성 실험, S95는 Goal 요청 예시다. [Slide Map](plan/SLIDE_MAP.md) · [S77 검토](production/evaluation/S77_LUNCH_HANDOFF.md) · [S79–S82 검토](production/evaluation/S79_S82_LUNCH_CONTINUITY.md) · [S83–S85 검토](production/evaluation/S83_S85_REVIEW_DECISIONS.md) · [S81 비교표](production/evaluation/S81_PROMPT_LOOP_COMPARISON.md)

## 이전 판본 기록

## DEC-0138 제작 기준 (2026-11-03)

현재 **113장·389분(6시간29분)**. 이전114장판 S68 “절차는 재사용하고, 답은 근거로 정한다”를 삭제한다.
삭제한 Lecture3분만 제외하고 다른 장에 시간이나 설명을 재분배하지 않는다. 방법/판단 도식·강의를 다른 Slide나 활성 Notes에 흡수하지 않는다.
새 참고 자료도 만들지 않는다. 기존 Claim 원칙·원문 SKILL·실행 근거와 원본은 기존 기록/Git 이력에 유지한다.
S66의 macOS풍 Prompt 창·footer 삭제를 유지하고, S67 제작 팁은 기존2분·화면을 유지한다.
S67은 제작 요청이 사용 예시임을 밝힌 뒤 앞서 Skill을 지정했던 실제 밝기 통계 작업으로 돌아간다.
현재 S68은 작업 목표→기존 구현→후보 비교를 설명하고 S69의 별도 제품 변경 전후 측정으로 이어진다. 삭제한 원칙 장을 이미 봤다고 전제하지 않는다.
현재 S68의 eyebrow는 “ACT 3 · Skill을 지정했던 실제 밝기 통계 작업”이며 Title·본문·기록 수치는 그대로다.
이전 S69–S114는 현재 S68–S113로-1한다. ACT3는18장·64분, ACT4는20장·85분, ACT5는16장·44분이다.
전역 Mode는 Lecture169/Demo44/Case102/Reflection19/Transition23/Q&A32다.
Native 표 S54, 차트 S69/S89, Memory S103, Goal S95/S96, 마지막 팁 찾아보기 S110–S112, Closing S113을 사용한다.
현재 S76의 Harness Q&A5분과 S77의 전환2분, ACT4의 같은 목표 구현·검토·수정과 연구 범위를 유지한다.
기존 Beat/Section/Demo/Trial/State/Claim ID와12Templates/28Variants·19Notes 필드는 유지한다.
이번 대상은 실제 지침/행동 대응표를 다뤘던 과거 판본의 다른 S68과 구분한다. 이전에 삭제한 감사 장은 복구하지 않는다.
새 Trial·실측·Skill 인과성/우월성·자동 준수·현재 제품 동작 주장은 없다. Windows·교육장·제품/계정·실측 리허설은 UNVERIFIED다.
Demo 저장소·Sites·발표 묶음은 변경하지 않는다. [삭제·연결 기획](plan/S68_PROCEDURE_RECAP_REMOVAL.md),
[번호 이행](plan/SLIDE_ID_MIGRATION_113_DEC0138.md), [현행 Map](plan/SLIDE_MAP.md)을 따른다. 아래 이전 판본은 당시 이력이다.

| ACT | Current slides | Count | Minutes |
|---|---|---:|---:|
| ACT 0 | S01–S14 | 14 | 42 |
| ACT 1 | S15–S37 | 23 | 64 |
| ACT 2 | S38–S59 | 22 | 90 |
| ACT 3 | S60–S77 | 18 | 64 |
| ACT 4 | S78–S97 | 20 | 85 |
| ACT 5 | S98–S113 | 16 | 44 |
| Total | S01–S113 | 113 | 389 |

[최신 통합 PPT](production/AI_Dev_Training_Full.pptx) · [현재 전달 안내](production/evaluation/FINAL_HANDOFF.md)

## 보존된 이전 판본

## 현재 제작 기준 — DEC-0136 (2026-11-02)

현재 **114장·392분(6시간32분)**. 이전118장판 S78–S82의5장·18분을 S77의 Harness Q&A5분과 새 S78의 전환2분으로 정리한다.
S77은 기존 조립 설명 Lecture2분+Q&A5분=7분이다. 같은 화면에서 Harness 질문을 마무리하고 별도3분 성찰·세 질문 화면은 두지 않는다.
새 S78 제목은 “준비한 작업 체계로, 한 목표를 끝까지 수행하려면?”, 핵심은 “이제는 한 작업의 다음 행동과 완료 판단을 연결한다.”다.
재사용할 Harness 기반 안에서 한 작업의 목표·구현·검토와 남은 문제의 수정·재검토 관계만 짧게 보여준다.
Harness 실패나 교체를 Loop의 필수 원인으로 삼지 않는다. 상세 상태 필드·모델 역할·연구·중단 분기는 ACT4에 남긴다.
이전 S78–S82의 원 Section3G/3I·BEAT-073은 출처 lineage로 유지한다. 현재 S77의 Q&A는 이전 S82의5분, 새 S78은 기존 전환2분이다.
이전 Lecture8분과 Reflection3분만 제거하며, ACT4의20장·85분과 기존 사례·연구·근거 범위는 유지한다. ACT4 진입 cue의 이전 세 요청/성찰 선행 전제만 정리한다.
이전 S83–S118은 현재 S79–S114로-4한다. ACT3는19장·67분, ACT5는16장·44분이다.
전역 Mode는 Lecture172/Demo44/Case102/Reflection19/Transition23/Q&A32다.
Native 표 S54, 차트 S70/S90, Memory S104, Goal S96/S97, 마지막 팁 찾아보기 S111–S113, Closing S114다.
S111은 삭제한 상태 전달 팁을 빼고 S13/S48/S56–S58/S62/S67/S72/S104/S96의8묶음만 안내한다. 전환 장을 새 팁으로 넣지 않는다.
12Templates/28Variants·19Notes 필드와 남아 있는 장의 ID·Beat/Section·배정·Claim Boundary를 유지한다.
새 Trial·실측·실제 Loop/Subagent/Memory 실행·자동 목표 달성 주장은 없다. Windows·교육장·제품/계정·실측 리허설은 UNVERIFIED다.
Demo 저장소·Sites·발표 묶음은 변경하지 않는다. [전환 기획](plan/ACT3_COMPACT_HANDOFF.md),
[번호 이행](plan/SLIDE_ID_MIGRATION_114_DEC0136.md), [현행 Map](plan/SLIDE_MAP.md)을 따른다. 아래 이전 판본은 당시 이력이다.

| ACT | Current slides | Count | Minutes |
|---|---|---:|---:|
| ACT 0 | S01–S14 | 14 | 42 |
| ACT 1 | S15–S37 | 23 | 64 |
| ACT 2 | S38–S59 | 22 | 90 |
| ACT 3 | S60–S78 | 19 | 67 |
| ACT 4 | S79–S98 | 20 | 85 |
| ACT 5 | S99–S114 | 16 | 44 |
| Total | S01–S114 | 114 | 392 |

[최신 통합 PPT](production/AI_Dev_Training_Full.pptx) · [현재 전달 안내](production/evaluation/FINAL_HANDOFF.md)

## 보존된 이전 판본

## 현재 제작 기준 — DEC-0135 (2026-11-02)

현재 **118장·403분(6시간43분)**. 이전119장판 S78 “이번 성공만으로 다음 작업까지 확인되지는 않는다”를 삭제한다.
삭제한 내용은 다른 Slide/활성 Notes에 흡수하지 않고 새 참고 자료도 만들지 않는다. 원본은 Git 이력·기존 원자료에 남는다.
현재 S77 프로젝트 기준 연결 → S78 첫 결과의 완료 여부 → S79 사람이 잇는 수정으로 바로 이어진다.
S77의 연결 질문은 “작업 체계를 갖췄다면, 첫 결과가 나왔을 때 바로 끝낼 수 있을까요?”다.
다음 작업의 일반적 적합성이나 경험 축적을 Loop의 원인으로 삼지 않고, 같은 목표 안의 구현·검토·수정을 이어간다.
이전 S79–S119는 현재 S78–S118로-1한다. 삭제한 Lecture2분만 제외하며 나머지 장별 시간/Mode·역할·Beat/Section·근거 ID를 유지한다.
ACT3는23장·78분, ACT4는20장·85분, ACT5는16장·44분이다. 전역 Mode는 Lecture180/Demo44/Case102/Reflection22/Transition23/Q&A32다.
Native 표 S54, 차트 S70/S94, Memory S108, Goal S100/S101, 마지막 팁 찾아보기 S115–S117을 사용한다.
S75–S77의 DEC-0134 시각 설계, ACT5 Memory의 원 Section3F·BEAT-026–028·4분과 12Templates/28Variants·19Notes 필드는 유지한다.
기존 검증 원칙과 실제 관찰의 범위는 기존 Evidence/Claim에서 유지한다. 삭제한 성공 범위 장이나 이전 감사 장을 복구하지 않는다.
새 Trial·실측·실제 반복/이식·Subagent/Memory 실행·현재 제품 동작 주장은 없다.
Windows·교육장·제품/계정·실측 리허설은 UNVERIFIED다. Demo 저장소·Sites·발표 묶음은 변경하지 않는다.
[삭제·연결 기획](plan/S78_REMOVAL.md), [번호 이행](plan/SLIDE_ID_MIGRATION_118_DEC0135.md), [현행 Map](plan/SLIDE_MAP.md)을 따른다.
아래 이전 판본의 번호·시간·연결은 당시 이력이며 현재 지시로 적용하지 않는다.

| ACT | Current slides | Count | Minutes |
|---|---|---:|---:|
| ACT 0 | S01–S14 | 14 | 42 |
| ACT 1 | S15–S37 | 23 | 64 |
| ACT 2 | S38–S59 | 22 | 90 |
| ACT 3 | S60–S82 | 23 | 78 |
| ACT 4 | S83–S102 | 20 | 85 |
| ACT 5 | S103–S118 | 16 | 44 |
| Total | S01–S118 | 118 | 403 |

[최신 통합 PPT](production/AI_Dev_Training_Full.pptx) · [현재 전달 안내](production/evaluation/FINAL_HANDOFF.md)

## 보존된 이전 판본

## 현재 제작 기준 — DEC-0133 (2026-11-02)

현재 **119장·405분(6시간45분)**. 이전119장판 S74의 Context/Memory 설명을 ACT5 현재 S109로 이동한다.
제목은 “이번에 알아낸 것 중, 다음에도 쓸 것은?”이며 기존4분(Demo2 VISUAL+Case2)을 그대로 옮긴다.
ACT3는 S73 역할 분리 판단 → S74 실제 작업 구성 → S75 Harness로 바로 잇는다. Memory를 미리 소개하거나 뒤에서 감사 결과를 확인한다고 예고하지 않는다.
ACT5는 S108 결과 수용 → S109 다음 작업에 쓸 지식 → S110 전체 작업 조건 설계로 연결한다.
S109는 C++ 프로젝트에서 성능 비교 조건을 확인했다는 교육용 가정이다. “Release 빌드·동일 입력으로 비교”를 재사용 후보로 삼고,
이번 로그·측정값은 날짜가 있는 작업 기록에 둔다. 재사용할 조건은 출처·적용 범위·갱신 조건과 남기고 다음 작업의 현재 조건과 대조해 Context로 쓴다.
S111–S113의 지침·역할·우회 절차 통합/제거와 지식의 재사용 판단을 구분한다. 새 기능 구축이나 제품 자동 기억·저장·회수의 시연이 아니다.
이전 S74→현재 S109, 이전 S75–S109는-1, 나머지 번호는 같다. 총장수·시간·전역 Mode182/44/102/22/23/32는 유지한다.
ACT3는24장·80분, ACT4는20장·85분, ACT5는16장·44분이다. 원 Section3F·BEAT-026–028·Claim/Demo ID는 유지하고 ACT5 배치를 명시한다.
Native 표 S54, 차트 S70/S95, Goal S101/S102, 마지막 팁 찾아보기 S116–S118이다.12Templates/28Variants·19Notes 필드를 유지한다.
INV-MATURITY-008의 Context/Memory 구분 목표는 유지한다. 기본 Harness에 Memory를 필수 구성으로 먼저 넣지 않는다.
이전121장판에서 삭제한 S67/S76의 본문 포함 확인·실제 지식 출처 감사를 복구하거나 다른 장에 흡수하지 않는다.
새 측정·Trial·실제 Memory 저장/회수·현재 제품 동작 주장은 없다. Windows·교육장·제품/계정·실측 리허설은 UNVERIFIED다.
Demo 저장소·Sites·발표 묶음은 변경하지 않는다. [이동 기획](plan/MEMORY_ACT5_RELOCATION.md),
[번호 이행](plan/SLIDE_ID_MIGRATION_MEMORY_ACT5_DEC0133.md), [현행 Map](plan/SLIDE_MAP.md)을 따른다.
아래 이전 배치·시간·연결은 당시 이력이며 현재 지시로 적용하지 않는다.

| ACT | Current slides | Count | Minutes |
|---|---|---:|---:|
| ACT 0 | S01–S14 | 14 | 42 |
| ACT 1 | S15–S37 | 23 | 64 |
| ACT 2 | S38–S59 | 22 | 90 |
| ACT 3 | S60–S83 | 24 | 80 |
| ACT 4 | S84–S103 | 20 | 85 |
| ACT 5 | S104–S119 | 16 | 44 |
| Total | S01–S119 | 119 | 405 |

[최신 통합 PPT](production/AI_Dev_Training_Full.pptx) · [현재 전달 안내](production/evaluation/FINAL_HANDOFF.md)

## 보존된 이전 판본

## 현재 제작 기준 — DEC-0132 (2026-11-02)

현재 **119장·405분(6시간45분)**. 이전121장판 S67(지침 본문 포함 확인)과 S76(실제 지식 출처 감사)을 삭제한다.
두 장의 내용·결론·표를 다른 Slide나 활성 Notes로 옮기지 않으며 새 참고 자료도 만들지 않는다.
원본과 근거는 Git 이력·기존 원자료에 남는다. 이전122장판 S68에서 이미 만든 참고 자료는 역사 기록으로 유지한다.
현재 S66 명시 요청 → S67 Skill 제작 팁, S74 Context 보존 → S75 실제 구성의 역할로 바로 연결한다.
삭제한 장을 다음에 확인한다고 예고하거나 새 S67/S75에서 그 내용을 봤다고 전제하지 않는다.
이전 S68–S75는-1, S77–S121은-2한다. 삭제한 Demo2분+Lecture4분만 제외하며 나머지 장별 시간을 재분배하지 않는다.
ACT3는25장·84분, Mode는 Lecture182/Demo44/Case102/Reflection22/Transition23/Q&A32다.
Native 표는 S54, 차트는 S70/S96, Goal 팁은 S102/S103, 마지막 팁 찾아보기는 S116–S118이다.
12Templates/28Variants·19Notes 필드·기존 Beat/Section/Demo/Trial/State/Claim ID와 근거 범위를 유지한다.
본문 포함이나 Memory 감사의 새 근거·성과를 만들지 않는다. 과거 CLI 관찰과 현재 제품 검증을 구분한다.
Windows·교육장·제품/계정·실측 리허설은 UNVERIFIED다. Demo 저장소·Sites·발표 묶음은 변경하지 않는다.
[삭제·연결 기획](plan/S67_S76_REMOVAL.md), [번호 이행](plan/SLIDE_ID_MIGRATION_119_DEC0132.md),
[현행 Map](plan/SLIDE_MAP.md)을 따른다. 아래 이전 판본의 번호·시간·보존 방침은 당시 이력이며 현재 지시로 적용하지 않는다.

| ACT | Current slides | Count | Minutes |
|---|---|---:|---:|
| ACT 0 | S01–S14 | 14 | 42 |
| ACT 1 | S15–S37 | 23 | 64 |
| ACT 2 | S38–S59 | 22 | 90 |
| ACT 3 | S60–S84 | 25 | 84 |
| ACT 4 | S85–S104 | 20 | 85 |
| ACT 5 | S105–S119 | 15 | 40 |
| Total | S01–S119 | 119 | 405 |

[최신 통합 PPT](production/AI_Dev_Training_Full.pptx) · [현재 전달 안내](production/evaluation/FINAL_HANDOFF.md)

## 보존된 이전 판본

## 현재 제작 기준 — DEC-0131 (2026-11-02)

현재 **121장·411분(6시간51분)**. 이전122장판 S68의 독립 지침/행동 대응 장을 본편에서 삭제한다.
S67은 “지침 포함과 실제 수행은 별도로 확인한다”로 마무리하고 현재 S68 Skill 제작 팁으로 연결한다.
이전 S69–S122는 현재 S68–S121로 한 칸 당긴다. S65–S67의 Demo1/2/2분=기존5분은 유지한다.
삭제한 장의 Demo3+Case3=6분만 제외하며 다른 장에 재배분하지 않는다. ACT3는27장·90분이다.
Mode Lecture186/Demo46/Case102/Reflection22/Transition23/Q&A32를 사용한다.
상세 대응표·실제 실행 근거·조건·한계는 S67의 보충 Notes와 [참고 기록](references/demo-evidence/skill-instruction-action-record.md)에 보존한다.
검증 원칙을 삭제하거나 지침 포함만으로 실제 수행·Skill 효과를 입증하지 않는다.
Native 표는 S54, 차트는 S71/S98이다.12Templates/28Variants·19Notes 필드와 기존 근거 ID를 유지한다.
Windows·교육장·제품/계정·실측 리허설은 UNVERIFIED다. Demo 저장소·Sites·발표 묶음은 변경하지 않는다.
[삭제·보존 기획](plan/S68_REMOVAL_AND_EVIDENCE_RETENTION.md), [번호 이행](plan/SLIDE_ID_MIGRATION_121_DEC0131.md),
[현행 Map](plan/SLIDE_MAP.md)을 따른다. 아래 과거 판본의 번호·시간·검증 기록은 해당 이력이다.

[최신 통합 PPT](production/AI_Dev_Training_Full.pptx) · [현재 전달 안내](production/evaluation/FINAL_HANDOFF.md)

## 보존된 이전 판본

## 현재 제작 기준 — DEC-0130 (2026-11-02)

현재 **122장·417분(6시간57분)**. 이전120장판의 S65를 발견/명시 요청/본문 포함 확인의
S65–S67로 나눈다. Demo1/2/2분=기존5분이며 새 Trial·실행·성과를 추가하지 않는다.
이전 S66–S120은 현재 S68–S122로+2다. ACT3는28장·96분이며 다른 ACT 시간·장수는 같다.
Mode Lecture186/Demo49/Case105/Reflection22/Transition23/Q&A32를 유지한다.
Native 표 S54/S68, 차트 S72/S99.12Templates/28Variants·19Notes 필드를 유지한다.
CLI0.154.0 관찰과 현재 Desktop·계정·제품 확인, 본문 포함과 실제 수행을 구분한다.
Windows·교육장·제품/계정·실측 리허설은 UNVERIFIED다. Demo 저장소·Sites·묶음은 변경하지 않는다.
[분할 기획](plan/S65_SKILL_EVIDENCE_SPLIT.md), [번호 이행](plan/SLIDE_ID_MIGRATION_122_DEC0130.md),
[현행 Map](plan/SLIDE_MAP.md)을 따른다. 아래 과거 판본의 번호/시간/검증 기록은 해당 이력이다.

[최신 통합 PPT](production/AI_Dev_Training_Full.pptx) · [현재 전달 안내](production/evaluation/FINAL_HANDOFF.md)

## 보존된 이전 판본

## 현재 제작 기준 — DEC-0114 (2026-10-30)

현재 **120장·417분(6시간57분)**. 이전121장 판본의 S26–S28을 S26–S27로 정리한다.
S26은 원하는 결과에 맞는 확인 방법을 선택하고, S27은 같은 crop의 오류 수정/시간 단축에
따라 달라지는 검증 요청을 비교한다. 이전 S28은 삭제하고 요청 작성 역할을 S27에서 회수한다.
S26 Lecture2분, S27 Lecture2+Reflection1분으로 기존5분=Lecture4+Reflection1을 유지한다.
이전 S29–S121은 현재 S28–S120으로 한 칸 당긴다. ACT별 장수14/23/22/26/20/15,
시간42/64/90/96/85/40분, Mode Lecture186/Demo49/Case105/Reflection22/Transition23/Q&A32분이다.
ACT0의 crop 명세 설명을 반복하지 않는다. 이전 C++ vector·assertion 반례는 S27 Notes의
선택 참고로 보존하며, 새 두 요청은 교육용 작성 예시이고 실제 TRIAL-002 원문/새 실행이 아니다.
TRIAL-002의 Python 기록·실제 Prompt·수정·검증·성능 미측정과 기존 Claim Boundary를 유지한다.
S25 완료 판단→S26 확인 선택→S27 목표별 요청→S28–S35 문장 도구→S36/S37 반복 Context→
ACT2 S38로 이어진다. 나머지 장의 내용·시간/Mode·Story/Beat/Section/Demo/Trial/State/Claim ID는 유지한다.
Native 표 S54/S66, 차트 S70/S97, 마지막 팁 찾아보기 S117–S119.12Templates/28Variants·19Notes 필드 유지.
Windows·교육장·현재 제품/계정·실측 리허설은 UNVERIFIED다. Demo 저장소·Sites·발표 묶음은 변경하지 않는다.
[현행 Map](plan/SLIDE_MAP.md), [121→120 이행](plan/SLIDE_ID_MIGRATION_120_DEC0114.md),
[검증 요청 설계](plan/VERIFICATION_REQUEST_DESIGN.md)를 따른다. 아래 이전 번호·배정·검증 기록은 당시 이력이다.

[최신 통합 PPT](production/AI_Dev_Training_Full.pptx) · [현재 전달 안내](production/evaluation/FINAL_HANDOFF.md)

## 보존된 이전 판본

## 현재 제작 기준 — DEC-0112 (2026-10-27)

현재 **121장·417분(6시간57분)**. 이전 S26을 S26–S28의3장으로 나눈다.
S26은 요청할 확인과 범위, S27은 비어 있지 않음 검사의 한계,
S28은 기대 결과·검사·보고를 담은 요청이다. 기존5분을90초/90초/120초로 나누고
Lecture4분+Reflection1분을 유지한다. 이전 S27–S119는 S29–S121로+2 이행한다.
ACT별 장수14/24/22/26/20/15, 시간42/64/90/96/85/40분.
Mode Lecture186/Demo49/Case105/Reflection22/Transition23/Q&A32분.
실제 TRIAL-002는 Python의 기존 관찰 기록이며 S27/S28의 C++ 반례·요청·assertion은
교육용 예시다. 당시 assertion 원문·추가 실행·PASS/FAIL·성능 측정으로 표현하지 않는다.
S21 실제 요청→S22 과정→S23 변경→S24 확인→S25 수용→S26–S28 완료 조건→
S29–S36 요청 문장 도구→S37–S38 반복 Project Context의 흐름을 유지한다.
원복한 S14, 기존 Story/Beat/Section/Demo/Trial/State/Claim ID와 나머지 장별 배정은 유지한다.
Native 표는 S55/S67, 차트는 S71/S98, 마지막 팁 찾아보기는 S118–S120이다.
12Templates/28Variants·19Notes 필드를 유지한다. Windows·교육장·현재 제품/계정·
실측 리허설은 UNVERIFIED다. Demo 저장소·Sites·발표 묶음을 변경하지 않는다.
[현재 Map](plan/SLIDE_MAP.md), [번호 이행](plan/SLIDE_ID_MIGRATION_121.md),
[3장 분할 기준](plan/S26_VERIFICATION_REQUEST_SPLIT.md)을 우선한다.
아래 이전 판본의 번호·시간·평가·제작 기록은 당시 이력으로 보존한다.

[최신 통합 PPT](production/AI_Dev_Training_Full.pptx) · [현재 전달 안내](production/evaluation/FINAL_HANDOFF.md)

## 보존된 이전 판본

## 현재 제작 기준 — DEC-0108 / DEC-0109 / DEC-0110 / DEC-0111 (2026-10-27)

현재 **119장·417분(6시간57분)**. 이전 S15 제조 검사 전환 장을 삭제하고
이전 S16–S120을 S15–S119로 한 칸 당긴다. S14는 정보 접근과 사람의 최종 판단을
구분하던 이전 화면을 유지하고, ACT0 Q&A 후 ACT1 제목으로 이어간다.
삭제 장의 전환3분은 줄이고 Q&A3분은 S14에 남긴다. S14는 Lecture2+Q&A3=5분이다.
ACT별 장수14/22/22/26/20/15, 시간42/64/90/96/85/40분.
Mode Lecture186/Demo49/Case105/Reflection22/Transition23/Q&A32분.
다른 장의 내용·장별 시간/Mode·근거·Trial/State/Beat/Section ID는 유지한다.
ACT1 S16–S18은 DEC-0110에 따라 같은 crop 수정 요청으로 연결한다.
빠진 기준 확인→허용 범위 비교→구체 요청 순서이며 교육용 예시다.
S19–S20에서 일반화한 뒤 S21은 DEC-0111에 따라 실제 TRIAL-002 요청을
발췌·번역하고 다섯 역할을 원문 밖 주석으로 연결한다. Context 문단은 만들지 않는다.
S22는 같은 과정 지시 01–03을 행동 기록과 대조한다. S16–S18은 교육용 예시다.
[실제 요청 연결](plan/S21_TRIAL_REQUEST_MAP.md)을 따른다.
[현재 ACT1 사례](plan/ACT1_SINGLE_CROP_CASE.md)를 따른다.
Native 표는 S53/S65, 차트는 S69/S96, 마지막 팁 찾아보기는 S116–S118이다.
12Templates/28Variants·19Notes 필드는 유지한다. 제품·Windows·교육장·리허설은
UNVERIFIED다. Demo 저장소·Sites·발표 묶음은 변경하지 않는다.
[현재 Map](plan/SLIDE_MAP.md), [번호 이행](plan/SLIDE_ID_MIGRATION_119.md),
[삭제·연결 범위](plan/ACT0_S15_REMOVAL.md)를 우선한다. 아래 이전 판본은 당시 이력이다.

[최신 통합 PPT](production/AI_Dev_Training_Full.pptx) · [최종 전달 안내](production/evaluation/FINAL_HANDOFF.md)

## 이전 판본 안내

현재:120장·420분(7시간), DEC-0104. S55 뒤 AGENTS.md 실무 적용 팁3장을 추가했다. [현재 Slide Map](plan/SLIDE_MAP.md)과 [추가 설계](plan/AGENTS_SCOPE_TIPS.md)를 따른다. 아래 이전 수량·검증 기록은 이력이다.

현재 PPT: **DEC-0101 /117장·412분**. S03 뒤에 VS Code + GitHub Copilot 활용 팁
S04 한 장을 추가했다. 기존116장의 내용·디자인·장별 배정·근거는 유지하고 번호/참조만 정렬했다.
[최신 PPT](production/AI_Dev_Training_Full.pptx) · [새 팁](production/preview/full/S04.png) ·
[추가 결과](production/evaluation/COPILOT_IDE_TIP.md).
웹은 이전116장 판본으로 유지한다. 아래 이전 제작판 안내는 당시 이력이다.

[ACT별 웹 읽기 가이드](https://ai-dev-training-guide.noah-potato.chatgpt.site) — 비공개 Sites. 확정 PPT116장과 내장 Notes를
6ACT·52개 절로 풀어 쓴 자료이며 새 교육 내용이나 성과를 추가하지 않는다.
[웹 관리 기준](plan/WEB_READING_GUIDE.md) · [최신 통합 PPT](production/AI_Dev_Training_Full.pptx).

현재116장·410분. ACT5 앞부분은 전체 관점의 종합, S111/S112는 개인 적용으로 역할을 분리했다. [최신 수정 결과](production/evaluation/ACT5_SYNTHESIS_REVISION.md)를 참고한다.

현재 제작판: **DEC-0098 /116장·410분**. Goal 팁 S99/S100과 ACT4→ACT5 연결을 정렬한다. ACT4 S82–S101/20장·85분, ACT5 S102–S116/15장·40분. 기존114장의 배정·근거는 유지하며 제품·실환경·리허설은 미검증이다.

[Goal 적용과 연결 설계](./plan/GOAL_TIPS_AND_ACT5_HANDOFF.md).

아래 이전 판본의 장수·번호·검증 기록은 당시 범위다.

## 현재 교육자료 — DEC-0097

114장·406분, ACT4 S82–S99의18장·81분, ACT5 S100–S114의15장·40분. Mode Lecture172/Demo51/Case103/Reflection22/Transition26/Q&A32분.

ACT4는 목표 달성까지 구현·검토·수정을 잇는 시스템과 서로 다른 모델의 연구 근거를
중심으로 재제작했다. 새 반복 사례는 교육용 설계이며 실제 새 모델 실행 결과가 아니다.
[통합 PPT](production/AI_Dev_Training_Full.pptx),
[ACT4](production/ACT_4.pptx), [Notes](production/notes/FULL_SPEAKER_NOTES.md),
[현재 기획](plan/ACT4_GOAL_LOOP_REPLAN.md),
[검토 기록](production/evaluation/ACT_4_GOAL_LOOP_REVISION.md).
실환경·계정·리허설은 UNVERIFIED다. 발표용 ZIP은 이번에 갱신하지 않는다.

## 이전 제작 이력

아래의 이전 번호·시간·검증은 해당 판본의 기록이다.

최신 배치 수정: **DEC-0095 / S109 연결선·좌우 폭 정렬**. 전체115장·406분과 문구·Notes·기획·근거는 그대로 유지했다. [수정 화면](production/preview/full/S109.png), [배치 검토](production/evaluation/S109_CONNECTOR_LAYOUT_REVISION.md). 실환경 미검증과 발표 묶음 제작 보류는 유지한다.

현재 기준: **DEC-0094 /115장·406분**. ACT4의19장·81분과 근거를 보존하며 작업 수행/체계 개선 루프와 평가 뒤 완료·재시도·중단, 다음 작업 연결을 정렬했다. [설계](plan/ACT4_LOOP_CONTROL.md), [결과](production/evaluation/ACT_4_LOOP_CONTROL_REVISION.md), [최신 전달 안내](production/evaluation/FINAL_HANDOFF.md)를 따른다. 실환경·리허설은 UNVERIFIED이며 Demo 저장소·발표 묶음은 변경하지 않았다.

이전 제작 팁 기준: **DEC-0093 /115장·406분(6시간46분)**. Codex Skill 제작 팁 S63과 조사 Agent 제작 팁 S68을 추가했다. 기존113장의 내용·배정·근거와 ACT4의19장·81분은 보존한다. [팁 설계](plan/CODEX_AUTHORING_TIPS.md), [113→115 번호](plan/SLIDE_ID_MIGRATION_115.md), [수정 결과](production/evaluation/CODEX_AUTHORING_TIPS.md), [최신 전달 안내](production/evaluation/FINAL_HANDOFF.md)를 따른다. 아래 과거 번호·평가는 해당 판본의 이력이다. 제품·계정/Windows/교육장/실측 리허설은 UNVERIFIED이며 발표 묶음·Demo 저장소는 변경하지 않는다.

현재 기준: **DEC-0091 /113장·402분(6시간42분)**. Harness 재사용 장점과 실행 조건을
S72–S78로 나누고, 이전 독립 C++ 전이 장을 삭제했다. ACT4의19장·81분은 보존했다.
[현재 설계](plan/HARNESS_REUSE_AND_EXECUTION_CONTEXT.md), [번호 대조](plan/SLIDE_ID_MIGRATION_113.md),
[Slide Map](plan/SLIDE_MAP.md)을 따른다. 아래 이전 제작 안내는 당시 판본이다.
발표 묶음·Demo 저장소는 변경하지 않으며 실환경·리허설은 UNVERIFIED다.

현재 기준은 **DEC-0090 /108장·396분(6시간36분)**이다. 각 ACT 시작에 승인된
제목·부제1장을 추가하고 기존102장의 내용·배정·근거를 보존했다. 제목은 Transition
1분씩이며 마지막 팁 요약은 S105–S107, 마무리는 S108이다.
[제목 기준](plan/ACT_TITLES.md), [102→108 번호](plan/SLIDE_ID_MIGRATION_108.md),
[최신 결과](production/evaluation/ACT_TITLE_SLIDES.md). 아래는 이전 제작 이력이다.
Windows·교육장·제품/계정·실측 리허설은 UNVERIFIED이며 발표 묶음은 만들지 않는다.

현재 기준은 **DEC-0088 /102장·390분(6시간30분)**이다. ACT 중간의 팁 목록을
없애 마지막 Q&A 직전 S99–S101에 모았다. 기존 팁17장의 설명·배지와 본문99장의
내용·배정·근거 범위는 유지한다. [최신 결과](production/evaluation/FINAL_PRACTICAL_TIPS_CONSOLIDATION.md),
[팁 목록](plan/PRACTICAL_APPLICATION_TIPS.md), [105→102 번호](plan/SLIDE_ID_MIGRATION_102.md).
아래 제작 기록은 과거 판본이다. 실환경·리허설은 UNVERIFIED이며 발표 묶음은 만들지 않는다.

현재 기준은 **DEC-0087 /105장·393분(6시간33분)**이다. 기존 팁17장에 공통
“실무 적용 팁” 배지·분류를 붙이고 각 ACT의 전환 앞에 제목/ID 목록을1장씩
추가했다. 기존99장의 내용·배정·근거 범위는 유지한다. [팁 목록](plan/PRACTICAL_APPLICATION_TIPS.md),
[현재 번호](plan/SLIDE_ID_MIGRATION_105.md), [검토 결과](production/evaluation/PRACTICAL_APPLICATION_TIPS.md).
실환경·리허설은 UNVERIFIED이며 발표 묶음은 갱신하지 않는다. 아래는 이전 제작 이력이다.

현재 기준은 **DEC-0084 /99장·387분(6시간27분)**, ACT0 **S01–S13/13장·42분**이다. 기존 S05–S07을 결과→근거→별도 환경 오류→필요한 정보→사람의 전달→Agent의 조사6장으로 나눴다. 이전 S08–S96은 S11–S99이며 기존 근거 범위를 유지한다. [현재 설계](plan/ACT0_CONTEXT_EXPANSION.md), [번호 대조](plan/SLIDE_ID_MIGRATION_99.md), [결과](production/evaluation/ACT_0_CONTEXT_EXPANSION.md). 아래 이전 기록은 당시 판본이다. 발표 묶음은 갱신하지 않는다.

현재 기준은 **DEC-0083 /96장·385분(6시간25분)**, ACT5 **S86–S96/11장·36분**이다. S90 뒤 재평가3장(기존 구조 재검토→유지·통합·제거 후보→대표 작업으로 확인)을 추가했다. 이전 S91–S93은 S94–S96이며 다음 행동에도 통합·제거를 연결했다. 기존 장별 시간·근거 범위는 보존한다. [현재 설계](plan/ACT5_HARNESS_REASSESSMENT.md), [번호 대조](plan/SLIDE_ID_MIGRATION_96.md), [최신 검토](production/evaluation/ACT_5_HARNESS_REASSESSMENT.md). 최종 Full96+ACT5 11의107개 PNG와96개 Notes를 대조했고 전체ACT 흐름·새 화면을 검토했다. Windows·교육장·제품 계정·시간 리허설은 UNVERIFIED다. 아래 이전 변경 기록은 당시 판본이다. 발표 묶음은 갱신하지 않는다.

현재 수정은 **DEC-0082 / ACT5 전체 회수·실제 제품 이력·다음 행동·마무리**다.
S87은 일곱 실제 State를 문제/변경의 세 시간순 묶음으로 정리했다. S91→S92는
같은 A–E 문제와 작은 행동·확인 근거를 연결한다. S93은 원래 다섯 여정 용어로
닫고, S86·S88–S90의 역할을 나눠 재설명을 줄였다.8개 Notes·기획을 정렬했다.
Full93장·379분, ACT5 8장·30분과 근거 범위·장별 배정을 유지한다. 전체93장과
ACT5 8장을 최종 패키지에서 렌더링해 검토했다. 실환경·리허설은 UNVERIFIED다.
[ACT5 전체](production/preview/act5/montage.png),
[ACT4→ACT5](production/preview/act5/S85-S88-continuity.png),
[검토 기록](production/evaluation/ACT_5_FLOW_REVISION.md).

이전 수정은 **DEC-0081 / ACT4 흐름·평가·실제 제작 기록과 ACT5 연결**이다.
S76–S85의 역할과 가독성을 정리하고10개 Notes·기획을 맞췄다. S77은 대표
작업/위험/근거 상태를 Native 표로, S79는 근거가 다음 판단으로 넘어가는 모델로,
S80–S84는 실제 평가·보고 기준의 변경과 부분적 후속 확인으로 구분한다.
S85는 GPU 변화의 가상 적용 판단을 닫고 전체 회수는 S86에 넘긴다.
93장·379분·장별 시간/Mode·근거 범위를 유지하며 새 Trial·발표 묶음은 없다.
[ACT4 전체](production/preview/act4/montage.png),
[ACT5 연결](production/preview/act4/S84-S86-continuity.png),
[검토 기록](production/evaluation/ACT_4_FLOW_REVISION.md).

## 목적

개발자 대상 ChatGPT & Codex 사내 교육자료를 제작한다. 현행 교육시간은406분이다.
기획 기준은 [MASTER_PLAN](plan/MASTER_PLAN.md), 변경 이력은
[DECISIONS](plan/DECISIONS.md)를 따른다.

## 현재 상태

현재 제작 기준은 **DEC-0060 /93장·379분(6시간19분)**이다. ACT2는 S32–S49/18장·81분이며, 연구 분리·의존성 답변 회수·성과 정리와 ACT3 연결을 개선한다. 기존90장의 시간·근거 범위를 보존한다. [ACT2 흐름 개선](production/evaluation/ACT_2_FLOW_REVISION.md), [번호 대조](plan/SLIDE_ID_MIGRATION_93.md), [ACT2 미리보기](production/preview/act2/montage.png). 최종93장 렌더·93개 내장 Notes와 ACT/Full 정합성 검토를 완료했다.

이전 수정은 **DEC-0080 / ACT3→ACT4 유지 책임·원인 확인 연결**이다. S67–S75의 위치·유지 책임과 Skill/Workflow 용어를 연결하고, 확인할 기록→정보/원인 가설→조건부 변경 대상 선택으로 정렬했다. S63–S65·S80–S81의 재설명을 줄이고 S69·S79 간격/줄바꿈을 개선했다.93장·379분·장별 시간/Mode·실제/가상/Meta 경계를 유지한다. [연속 흐름](production/preview/act4/S67-S72-continuity.png), [원인 확인과 변경](production/preview/act4/S72-S77-continuity.png), [검토 기록](production/evaluation/ACT3_ACT4_HANDOFF_REVISION.md).

이전 수정은 **DEC-0079 / S67 반복 한 가지와 위치·유지 책임** 정리다. 반복 정보·절차·검증 근거를 같은 비중의 후보로 보여주고, 하나를 골라 둘 위치와 검토·갱신 담당을 생각하도록 연결했다. S66의 자기 업무 적용→S68의 실제 성공 회수 흐름과 선택적 공유·10분/Mode·93장·379분을 유지한다. [S67](production/preview/full/S67.png), [연속3장](production/preview/act3/S66-S68-continuity.png), [검토 기록](production/evaluation/S67_REFLECTION_OWNERSHIP_REVISION.md).

이전 수정은 **DEC-0078 / S66 밝기 통계 Demo의 세 기준을 C++ 검사로** 정리다. 명세·수행 방법·검증 근거를 Demo→C++ 검사 업무의 세 대응 행으로 정리하고, 입력·빌드·장비 조건 확인을 S65와 연결했다. 기존 삽화의 bytes/crop과 교육용 경계·Lecture5분·93장·379분을 유지한다. [S66](production/preview/full/S66.png), [연속3장](production/preview/act3/S65-S67-continuity.png), [검토 기록](production/evaluation/S66_CPP_TRANSFER_REVISION.md).

이전 수정은 **DEC-0077 / S65 저장소 밖 실행 조건과 관찰의 한계**이다. 같은 Repository와 외부 지침·설정·권한이 한 Agent 실행에 적용되는 관계를 보여주고, TRIAL-006의 전역 Skills·시작 경고 관찰과 해석의 한계를 분리했다. Notes·Meta 프레임·Lecture3분과93장·379분을 유지한다. [S65](production/preview/full/S65.png), [연속3장](production/preview/act3/S64-S66-continuity.png), [검토 기록](production/evaluation/S65_EXTERNAL_CONDITIONS_REVISION.md).

이전 수정은 **DEC-0076 / S64 함께 작동하는 Harness 구조와 실행 환경**이다. S63의 입력·작업·검증 구도를 전체 Harness로 묶고, 실행 환경이 Agent와 검증 도구를 함께 뒷받침하는 관계를 연결했다. 사람의 결과 검토 책임과 교육용 정의·실제 구성 대응의 경계를 유지한다. Notes와93장·379분을 정렬했다. [S64](production/preview/full/S64.png), [연속3장](production/preview/act3/S63-S65-continuity.png), [검토 기록](production/evaluation/S64_HARNESS_STRUCTURE_REVISION.md).

이전 수정은 **DEC-0075 / S63 실제 밝기 통계 작업에서 구성의 역할**이다. 목표·Context·Skill을 한 Agent의 밝기 통계 조사·변경에 적용하고, 테스트·benchmark가 판단 근거를 제공한 관계를 시각화했다. Notes에 실제 요청 범위와 원출처·검증 한계를 유지하며93장·379분을 보존한다. [S63](production/preview/full/S63.png), [연속3장](production/preview/act3/S62-S64-continuity.png), [검토 기록](production/evaluation/S63_TASK_ROLES_REVISION.md).

이전 수정은 **DEC-0074 / S62 실제 지식의 원래 출처와 Memory 판단**이다. 코드·문서·Skill·Trial 기록에 이미 있던 지식을 네 출처에 대응하고, 별도 보존 후보를 찾지 못해 Memory를 추가하지 않은 기존 판단을 연결한다. Notes에 보존 기준과 원출처 경로를 유지하고93장·379분, 기존 근거 범위를 보존한다. [S62](production/preview/full/S62.png), [연속3장](production/preview/act3/S61-S63-continuity.png), [검토 기록](production/evaluation/S62_KNOWLEDGE_SOURCES_REVISION.md).

이전 수정은 **DEC-0073 / S61 이번 Context와 다음 작업의 지식**이다. 이번 Context에서 확인한 재현 조건을 골라 출처·범위·재확인 조건과 함께 남길지 판단하고, 다음 작업의 현재 명세와 대조하는 관계를 보여준다. 실제 Memory 사용이 아닌 기존 교육용 가정이며93장·379분과 근거 범위를 유지한다. [S61](production/preview/full/S61.png), [연속3장](production/preview/act3/S60-S62-continuity.png), [검토 기록](production/evaluation/S61_CONTEXT_RETENTION_REVISION.md).

이전 수정은 **DEC-0072 / S60 실제 작업의 의존관계와 선택**이다. 조사 결과를 코드 변경으로, 바뀐 코드를 출력·테스트·시간·할당량 검증으로 연결했다. 같은 좁은 자료 범위와 전달·통합 비용을 함께 본 한 Agent 유지 판단을 회수한다. Notes와93장·379분, 기존 근거 범위를 유지한다. [S60](production/preview/full/S60.png), [연속3장](production/preview/act3/S59-S61-continuity.png), [검토 기록](production/evaluation/S60_TASK_DEPENDENCY_REVISION.md).

이전 수정은 **DEC-0071 / S59 단일 조사와 역할 분리 비교**다. 같은 성능·빌드·테스트 조사를 한 Agent가 맡는 모습과 Subagent별로 나누는 모습을 비교한다. 주 Agent가 범위·결과 형식을 정하고 근거를 확인·통합하는 책임을 연결했다. 기존 가정·시간·근거 범위를 유지하고 S58→S59→S60 Notes와 렌더 흐름을 검토했다. [S59](production/preview/full/S59.png), [연속3장](production/preview/act3/S58-S60-continuity.png), [검토 기록](production/evaluation/S59_ROLE_SPLIT_REVISION.md).

이전 수정은 **DEC-0070 / S57–S58 작업·선택·검증 연결**이다. ACT3 앞부분을 재검토한 뒤 S57에 밝기 통계 작업과 기존 임시 리스트 구조를 보충했다. 두 후보의 선택을 S58의 실행시간·Python 할당 피크·동작 검증 세 영역으로 연결한다. Notes와 기존93장·379분, 근거 범위를 유지한다. [S57](production/preview/full/S57.png), [S58](production/preview/full/S58.png), [S56–S58](production/preview/act3/S56-S58-continuity.png), [검토 기록](production/evaluation/S57_S58_TASK_RESULT_REVISION.md).

이전 수정은 **DEC-0069 / S57 후보 선택의 시각적 정리**다. 두 후보의 공통 조건은 한 번만 표시하고, 실행시간 비교와 제외/선택을 두 행에 연결했다. 선택한 후보를 강조하며 상세 구현 설명은 Notes로 옮겼다. S56의 판단 질문과 S58의 제품 상태 검증을 연결하고93장·379분, 기존 근거 범위를 유지한다. [S57](production/preview/full/S57.png), [S56–S58](production/preview/act3/S56-S58-continuity.png), [검토 기록](production/evaluation/S57_CANDIDATE_SELECTION_REVISION.md).

이전 수정은 **DEC-0068 / S56 재사용 절차와 이번 판단**이다. 왼쪽 Skill의 재사용 방법을 오른쪽 이번 측정·검증 근거와 판단 질문으로 연결한다. 채택/보류는 교육용 판단 경로이며 실제 Trial 결과와 구분한다. Notes와93장·379분, 기존 관찰 범위를 유지한다. [S56](production/preview/full/S56.png), [S55–S57](production/preview/act3/S55-S57-continuity.png), [검토 기록](production/evaluation/S56_REUSABLE_PROCEDURE_REVISION.md).

이전 수정은 **DEC-0067 / S55 지침과 수행 기록 대응**다. S54의 본문 포함 근거에 이어, S55는 지침의 번역 요약과 실제 출력·변경 전 메시지·최종 diff를 세 행으로 대응한다. Notes와 현재93장·379분, 기존 관찰 범위를 유지한다. [S55](production/preview/full/S55.png), [S54–S56](production/preview/act3/S54-S56-continuity.png), [검토 기록](production/evaluation/S55_SKILL_ACTION_EVIDENCE_REVISION.md).

이전 수정은 **DEC-0066 / S53 연결선·S54 CLI 근거**다. S53 중앙의 연결선과 화살촉 굵기를 통일했다. S54는 CLI 목록, 명시 호출 요청, 실행 trace의 이름·경로·전체 본문을 구분해 보여준다. Notes와 전체93장·379분, 기존 관찰 범위를 유지한다. [S53](production/preview/full/S53.png), [S54](production/preview/full/S54.png), [S53–S55](production/preview/act3/S53-S55-continuity.png), [검토 기록](production/evaluation/S53_S54_SKILL_EVIDENCE_REVISION.md).

이전 내용 수정은 **DEC-0065 / S53 Skill 재사용과 공동 관리**다. 작업마다 바뀌는 요청 두 개와 공통 Skill 한 개를 연결하고 반복 절차를 한 곳에서 관리하는 이유를 시각화했다. S52의 한 작업 적용에서 S54의 실제 발견·호출 기록으로 이어지도록 Notes를 정렬했다. 기존93장·379분과 근거 범위는 유지한다. [S53 미리보기](production/preview/full/S53.png), [연속3장](production/preview/act3/S52-S54-continuity.png), [검토 기록](production/evaluation/S53_SKILL_REUSE_REVISION.md).

이전 **DEC-0064 / S52 한 작업에 목표·기준·방법 적용**을 유지한다. 목표가 들어오는 한 작업을 프로젝트 기준으로 감싸고 재사용할 수행 방법을 연결했다. S51과 설명을 나누고 S53의 공유 위치 질문으로 이어지도록 Notes를 정렬했다. 기존93장·379분과 근거 범위는 유지한다. [S52 미리보기](production/preview/full/S52.png), [연속3장](production/preview/act3/S51-S53-continuity.png), [검토 기록](production/evaluation/S52_TASK_COMPOSITION_REVISION.md).

이전 **DEC-0063 / S51 명령의 적용 시점과 판단**을 유지한다. 같은 테스트 명령을 변경 전·후에 사용하는 이유와 완료 판단을 연결하고 S50·S52 Notes를 정렬했다. 기존93장·379분과 근거 범위는 유지한다. [S51 미리보기](production/preview/full/S51.png), [연속3장](production/preview/act3/S50-S52-continuity.png), [검토 기록](production/evaluation/S51_COMMAND_WORKFLOW_REVISION.md).

이전 **DEC-0062 / ACT3 전체 흐름 개선**을 유지한다. 실제 Skill 발췌와 관찰 기록을 대응하고, Subagent·Memory의 가정 뒤 현재 선택을 회수하며, 실제 구성에서 전체 작업 환경으로 연결한다. ACT3는18장·85분, 전체93장·379분과 기존 근거 범위를 유지한다. [ACT3 전체 미리보기](production/preview/act3/montage.png), [ACT 경계 연결](production/preview/act3/continuity.png), [검토 기록](production/evaluation/ACT_3_FLOW_REVISION.md).

이전 **DEC-0061 / S40 코드 탐색 결과 확인**을 보존한다. 기존 crop 코드 발췌와 위치·요청한 동작·주변 근거의 세 질문을 중심으로 구성하고 RepoQA는 보조 연구로 뒀다. S39–S41 Notes를 정렬했으며 장수·시간·근거 범위는 유지한다. [S40 미리보기](production/preview/full/S40.png), [연속 3장](production/preview/act2/S39-S41-continuity.png), [검토 기록](production/evaluation/S40_CODE_EVIDENCE_REVISION.md).

## 이전 변경 이력 (당시 번호)

아래 이미지 링크는 현재 대응 장을 연다. 당시의 화면·기획·hash는 평가 기록과 해당 Git 판본을 따른다.

아래 이미지 링크는 현재 대응 장을 연다. 당시의 화면·기획·hash는 평가 기록과 해당 Git 판본을 따른다.

이전 수정은 DEC-0059의 S46 Context 정리/반복 절차 대비와 Harness 연결 도식이다. [현재 대응 S49](production/preview/full/S49.png), [검토 기록](production/evaluation/S46_WORKFLOW_HANDOFF_REVISION.md).

이전 수정은 DEC-0058의 S45 실제 문서 접근 비교/관찰과 해석 한계 도식이다. [현재 대응 S47](production/preview/full/S47.png), [검토 기록](production/evaluation/S45_ACCESS_COMPARISON_REVISION.md).

이전 수정은 DEC-0057의 S44 문서 접근·명세·기록된 답/해석 한계 도식이다. [현재 대응 S45](production/preview/full/S45.png), [검토 기록](production/evaluation/S44_CROP_EVIDENCE_REVISION.md).

이전 수정은 DEC-0056의 S43 두 요청창/관찰 질문 도식이다. [현재 대응 S44](production/preview/full/S44.png), [검토 기록](production/evaluation/S43_PROMPT_WATCH_REVISION.md).

이전 수정은 DEC-0055의 S42 문서 분리 전후/핵심 정보 보존 도식이다. [현재 대응 S43](production/preview/full/S43.png), [검토 기록](production/evaluation/S42_DOCUMENT_SPLIT_REVISION.md).

이전 수정은 DEC-0054의 S41 AGENTS.md 기본 안내/작업별 상세 구분이다. [현재 대응 S42](production/preview/full/S42.png), [검토 기록](production/evaluation/S41_CORE_DETAIL_REVISION.md).

이전 수정은 DEC-0053의 S40 작업 요청→AGENTS.md 안내→상세 명세 탐색 도식이다. [현재 대응 S41](production/preview/full/S41.png), [검토 기록](production/evaluation/S40_CONTEXT_PATH_REVISION.md).

이전 수정은 DEC-0052의 S39 연구별 과제·관찰·현재 Codex 적용 한계 도식이다. [현재 대응 S39](production/preview/full/S39.png), [검토 기록](production/evaluation/S39_RESEARCH_SCOPE_REVISION.md).

이전 수정은 DEC-0051의 S38 기본 안내·작업별 상세·재사용 절차 도식이다. [현재 대응 S38](production/preview/full/S38.png), [검토 기록](production/evaluation/S38_CONTEXT_MODEL_REVISION.md).

이전 수정은 DEC-0050의 S37 우측 분류 기준 교정이다. 두 Context 영역을 AGENTS.md 내부 지침·정보로 정렬했다. [현재 대응 S37](production/preview/full/S37.png), [검토 기록](production/evaluation/S37_AGENTS_CONTEXT_REVISION.md).

이전 수정은 DEC-0049의 S37 실제 요청창·청록 실선/회색 점선 Context 구분이다. [현재 대응 S37](production/preview/full/S37.png), [검토 기록](production/evaluation/S37_CONTEXT_RELEVANCE_REVISION.md).

이전 수정은 DEC-0048의 S36 프로젝트 초기/현재 프로젝트 비교와 AGENTS.md 정보 축적 도식이다. [현재 대응 S36](production/preview/full/S36.png), [검토 기록](production/evaluation/S36_CONTEXT_GROWTH_REVISION.md).

이전 수정은 DEC-0047의 S35 예시 테두리·프롬프트창/AGENTS.md 문서·화살표 연결이다. [현재 대응 S35](production/preview/full/S35.png), [검토 기록](production/evaluation/S35_CONTEXT_PLACEMENT_REVISION.md).

이전 수정은 DEC-0046의 S34 요청/주석 분리·지침 사용 관찰 강조다. [현재 대응 S34](production/preview/full/S34.png), [검토 기록](production/evaluation/S34_GUIDANCE_REVISION.md).

이전 수정은 DEC-0045의 사용 상황 라벨 분리다. [현재 대응 S22](production/preview/full/S22.png), [검토 기록](production/evaluation/PROMPT_USAGE_LABEL_REVISION.md).

이전 수정은 DEC-0044의 S17 요청·관찰 기록 대응이다. 다른89장과 시간·근거 범위를 유지했다. [현재 대응 S17](production/preview/full/S17.png), [검토 기록](production/evaluation/S17_REQUEST_ACTION_REVISION.md).

당시 번호 구성은 **90장 / DEC-0043**이었다. S21 뒤 실무 Prompt 방법 8장을 S22–S29로 추가하고 기존 S22–S82는 S30–S90으로 이동한다.
기존 S01–S21, Story·Trial·State·근거 경계와 승인된 시각물은 보존한다.
기존 장별 시간을 유지하고 신규 Lecture 7분·Case 1분을 추가해 ACT 1 63분·전체 368분으로 확장한다. 새 PPT·전체 렌더·90개 내장 Notes의 로컬 정합성 검토를 완료했다.

- [실무 기법8장·90장 통합 검토](production/evaluation/PROMPT_ENGINEERING_ADDITION_RESULT.md)
- [추가8장 한눈에 보기](production/preview/act1/prompt-methods-montage.png)
- [최신 통합 PowerPoint](production/AI_Dev_Training_Full.pptx)
- [ACT 0 PowerPoint](production/ACT_0.pptx)
- [전체 발표자 Notes](production/notes/FULL_SPEAKER_NOTES.md)
- [공식 Slide Map](plan/SLIDE_MAP.md)
- [82장 → 90장 번호 대조와 문서 범위](plan/SLIDE_ID_MIGRATION_90.md)
- [이전81장 → 82장 이행 이력](plan/SLIDE_ID_MIGRATION_82.md)
- [이전80장 → 81장 이행 이력](plan/SLIDE_ID_MIGRATION.md)
- [이전 Prompt·시간선·82장 정렬 검토](production/evaluation/PROMPT_TIMELINE_REVISION.md)
- [이전 S10 검사 파이프라인 검토](production/evaluation/S10_INSPECTION_PIPELINE_REVISION.md)
- [이전 S08 추가·번호 정렬 검토](production/evaluation/CODEX_ENTRY_INSERTION.md)
- [현재 전달 안내와 후보 해시](production/evaluation/FINAL_HANDOFF.md)
- [예상 질문·답변](production/presenter/EXPECTED_QA.md)
- [사용자 실환경·리허설 체크리스트](production/evaluation/USER_VALIDATION_CHECKLIST.md)

최신 PPT·Notes·렌더 검토 결과는 해당 제작·평가 기록을 함께 확인한다.
기존80/81/82장 판본의 검사 결과를 현재93장 판본의 검증으로 대신하지 않는다.
Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 현재 제품·계정과 리허설은
실제로 확인되기 전까지 UNVERIFIED다. Codex 메뉴는 공식 자료 기반 재구성이며
현재 앱이나 발표 환경에서 캡처한 화면으로 표현하지 않는다.

발표자 묶음 생성은 사용자 요청에 따라 보류한다. 기존
[묶음 안내](delivery/README.md)와 ZIP은 **80장 판본의 과거 스냅샷**이며,
현재93장 PPT·Notes의 배포본으로 사용하지 않는다.

기본 시연은 검증된 기록을 바탕으로 한 정적 PPT/PNG다. 현재 계정·제품에서
Live로 재현된 것처럼 표현하지 않는다. 교육은 순수 379분이며 휴식은 별도다.

Demo는 형제 저장소 `ai-dev-training-demo`에서 관리한다. 기존 State/tag와
실제 Trial 기록을 보존한다. 이 번호 변경은 Demo 코드·State를 변경하지 않는다.
초기 구조와 이전 제작·검토 상태는 Git 및 기획·평가 문서에 보존한다.
