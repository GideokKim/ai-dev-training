# Curriculum Matrix

## 현재 ACT4 제작 기준 — DEC-0156 (2026-11-03)

| Section | 위치 | 분 | 판단 대상 |
|---|---|---:|---|
| 4R1 Goal-loop entry | S78–S80 | 9 | 사람의 재지시와 검토 지적의 직접 인계 |
| 4R2 One-goal walkthrough / GitLab workflow overview | S81–S84 | 19 | 두 진행 방식, 구성 역할, 여덟 단계와 GitLab 12단계의 대응 |
| 4R3 Component selection | S85 | 5 | 단계별 도구 선택과 빈 칸의 의미 |
| 4R4 Request and issue preparation | S86–S87 | 9 | 요청 분류·격리, 이슈 문서 작성·검증·등록 |
| 4R5 Implementation, review and state | S88–S94 | 26 | 구현·검사·MR, 작성·검토 연구, 외부 상태와 무인 실행 범위 |
| 4T1 Unattended stop conditions | S95 | 4 | 권한과 예산 경계에서 중단·인계 |
| 4R6 Evidence and transfer | S96–S97 | 13 | 사람이 이해한 변경을 승인하고 업무별 판단 경계를 고른 뒤 ACT5로 전환 |
| 합계 | S78–S97 | 85 | 강의 34 · 사례 37 · 성찰 4 · 질의 7 · 전환 3 |

S84–S97의 개별 시간·Mode는 공식 Slide Map과 같다. S84–S89에서 발표자가 읽는 화면은 정적 GitLab 설계 예시다.

[ACT4 장별 시간표와 PDF 쪽 대응](ACT4_LOOP_OPERATIONS_PROPOSAL.md) · [현행 Slide Map](SLIDE_MAP.md)

## 이전 제작 기준 — DEC-0138 (2026-11-03)

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
Demo 저장소·Sites·발표 묶음은 변경하지 않는다. [삭제·연결 기획](S68_PROCEDURE_RECAP_REMOVAL.md),
[번호 이행](SLIDE_ID_MIGRATION_113_DEC0138.md), [현행 Map](SLIDE_MAP.md)을 따른다. 아래 이전 판본은 당시 이력이다.

| ACT | Current slides | Count | Minutes |
|---|---|---:|---:|
| ACT 0 | S01–S14 | 14 | 42 |
| ACT 1 | S15–S37 | 23 | 64 |
| ACT 2 | S38–S59 | 22 | 90 |
| ACT 3 | S60–S77 | 18 | 64 |
| ACT 4 | S78–S97 | 20 | 85 |
| ACT 5 | S98–S113 | 16 | 44 |
| Total | S01–S113 | 113 | 389 |

## 보존된 이전 기획·판본 기록

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
Demo 저장소·Sites·발표 묶음은 변경하지 않는다. [전환 기획](ACT3_COMPACT_HANDOFF.md),
[번호 이행](SLIDE_ID_MIGRATION_114_DEC0136.md), [현행 Map](SLIDE_MAP.md)을 따른다. 아래 이전 판본은 당시 이력이다.

| ACT | Current slides | Count | Minutes |
|---|---|---:|---:|
| ACT 0 | S01–S14 | 14 | 42 |
| ACT 1 | S15–S37 | 23 | 64 |
| ACT 2 | S38–S59 | 22 | 90 |
| ACT 3 | S60–S78 | 19 | 67 |
| ACT 4 | S79–S98 | 20 | 85 |
| ACT 5 | S99–S114 | 16 | 44 |
| Total | S01–S114 | 114 | 392 |

## 보존된 이전 기획·판본 기록

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
[삭제·연결 기획](S78_REMOVAL.md), [번호 이행](SLIDE_ID_MIGRATION_118_DEC0135.md), [현행 Map](SLIDE_MAP.md)을 따른다.
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

## 보존된 이전 기획·판본 기록

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
Demo 저장소·Sites·발표 묶음은 변경하지 않는다. [이동 기획](MEMORY_ACT5_RELOCATION.md),
[번호 이행](SLIDE_ID_MIGRATION_MEMORY_ACT5_DEC0133.md), [현행 Map](SLIDE_MAP.md)을 따른다.
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

## 보존된 이전 기획·판본 기록

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
[삭제·연결 기획](S67_S76_REMOVAL.md), [번호 이행](SLIDE_ID_MIGRATION_119_DEC0132.md),
[현행 Map](SLIDE_MAP.md)을 따른다. 아래 이전 판본의 번호·시간·보존 방침은 당시 이력이며 현재 지시로 적용하지 않는다.

| ACT | Current slides | Count | Minutes |
|---|---|---:|---:|
| ACT 0 | S01–S14 | 14 | 42 |
| ACT 1 | S15–S37 | 23 | 64 |
| ACT 2 | S38–S59 | 22 | 90 |
| ACT 3 | S60–S84 | 25 | 84 |
| ACT 4 | S85–S104 | 20 | 85 |
| ACT 5 | S105–S119 | 15 | 40 |
| Total | S01–S119 | 119 | 405 |

## 보존된 이전 기획·판본 기록

## 현재 제작 기준 — DEC-0131 (2026-11-02)

현재 **121장·411분(6시간51분)**. 이전122장판 S68의 독립 지침/행동 대응 장을 본편에서 삭제한다.
S67은 “지침 포함과 실제 수행은 별도로 확인한다”로 마무리하고 현재 S68 Skill 제작 팁으로 연결한다.
이전 S69–S122는 현재 S68–S121로 한 칸 당긴다. S65–S67의 Demo1/2/2분=기존5분은 유지한다.
삭제한 장의 Demo3+Case3=6분만 제외하며 다른 장에 재배분하지 않는다. ACT3는27장·90분이다.
Mode Lecture186/Demo46/Case102/Reflection22/Transition23/Q&A32를 사용한다.
상세 대응표·실제 실행 근거·조건·한계는 S67의 보충 Notes와 [참고 기록](../references/demo-evidence/skill-instruction-action-record.md)에 보존한다.
검증 원칙을 삭제하거나 지침 포함만으로 실제 수행·Skill 효과를 입증하지 않는다.
Native 표는 S54, 차트는 S71/S98이다.12Templates/28Variants·19Notes 필드와 기존 근거 ID를 유지한다.
Windows·교육장·제품/계정·실측 리허설은 UNVERIFIED다. Demo 저장소·Sites·발표 묶음은 변경하지 않는다.
[삭제·보존 기획](S68_REMOVAL_AND_EVIDENCE_RETENTION.md), [번호 이행](SLIDE_ID_MIGRATION_121_DEC0131.md),
[현행 Map](SLIDE_MAP.md)을 따른다. 아래 과거 판본의 번호·시간·검증 기록은 해당 이력이다.

| ACT | Current slides | Count | Minutes |
|---|---|---:|---:|
| ACT 0 | S01–S14 | 14 | 42 |
| ACT 1 | S15–S37 | 23 | 64 |
| ACT 2 | S38–S59 | 22 | 90 |
| ACT 3 | S60–S86 | 27 | 90 |
| ACT 4 | S87–S106 | 20 | 85 |
| ACT 5 | S107–S121 | 15 | 40 |
| Total | S01–S121 | 121 | 411 |

## 보존된 이전 기획·판본 기록

## 현재 제작 기준 — DEC-0130 (2026-11-02)

현재 **122장·417분(6시간57분)**. 이전120장판의 S65를 발견/명시 요청/본문 포함 확인의
S65–S67로 나눈다. Demo1/2/2분=기존5분이며 새 Trial·실행·성과를 추가하지 않는다.
이전 S66–S120은 현재 S68–S122로+2다. ACT3는28장·96분이며 다른 ACT 시간·장수는 같다.
Mode Lecture186/Demo49/Case105/Reflection22/Transition23/Q&A32를 유지한다.
Native 표 S54/S68, 차트 S72/S99.12Templates/28Variants·19Notes 필드를 유지한다.
CLI0.154.0 관찰과 현재 Desktop·계정·제품 확인, 본문 포함과 실제 수행을 구분한다.
Windows·교육장·제품/계정·실측 리허설은 UNVERIFIED다. Demo 저장소·Sites·묶음은 변경하지 않는다.
[분할 기획](S65_SKILL_EVIDENCE_SPLIT.md), [번호 이행](SLIDE_ID_MIGRATION_122_DEC0130.md),
[현행 Map](SLIDE_MAP.md)을 따른다. 아래 과거 판본의 번호/시간/검증 기록은 해당 이력이다.

| ACT | Current slides | Count | Minutes |
|---|---|---:|---:|
| ACT 0 | S01–S14 | 14 | 42 |
| ACT 1 | S15–S37 | 23 | 64 |
| ACT 2 | S38–S59 | 22 | 90 |
| ACT 3 | S60–S87 | 28 | 96 |
| ACT 4 | S88–S107 | 20 | 85 |
| ACT 5 | S108–S122 | 15 | 40 |
| Total | S01–S122 | 122 | 417 |

## 보존된 이전 기획·판본 기록

## 현재 Context 구간 순서 — DEC-0125 (2026-11-02)

현재 S45 연구 → S46 주의 사례 → S47 정보 분류 → S48 문서 배치 기준 → S49 실제 문서 분리 →
S50 설계한 탐색 경로 → S51–S54 실제 접근 관찰로 이어진다. 사용자가 지정한 이전120판본
번호 기준의 배치 순서 S46→S47→S45→S49→S50→S48을 적용했다. 현재 번호·시간·Mode는 [정식 Map](SLIDE_MAP.md),
[재배열과 대응표](ACT2_CONTEXT_SEQUENCE.md)를 따른다.120장·417분, ACT2 22장·90분,
해당6장·24분과 내용별 배정·Beat/Section/Demo/Trial/State/Claim ID·근거 범위는 유지한다.
아래 기존 판본의 S번호는 해당 판본의 이력이며 이번 대응표로 일괄 치환하지 않는다.

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
[현행 Map](SLIDE_MAP.md), [121→120 이행](SLIDE_ID_MIGRATION_120_DEC0114.md),
[검증 요청 설계](VERIFICATION_REQUEST_DESIGN.md)를 따른다. 아래 이전 번호·배정·검증 기록은 당시 이력이다.

## 보존된 이전 판본

## 현재 ACT1→ACT2 연결 — DEC-0113 (2026-10-27)

121장·417분과 모든 장별 시간/Mode/ID를 유지한다. S36의 피드백 팁 뒤 S37은
교육용 crop 요청3문장에서 다음에도 반복할 내용을 생각하고, S38은 같은 문장을
이번 목표와 프로젝트에서 계속 적용하기로 한 기준으로 나눈다. 빈 분류 영역과
화면의 README/의존성 예시는 사용하지 않는다. 실제 TRIAL-002 원문·추가 실행·성과가
아니며 공통 기준의 범위는 프로젝트의 합의와 조건을 확인한다. 저장 방법은 미리 답하지
않고 S39 제목→S40의 서로 다른3작업에 같은 설명이 반복되는 장면으로 이어간다.
S37 Reflection1+Q&A2=3분, S38 Reflection1+Transition3+Q&A2=6분이다.
ACT1 24장·64분, 전체 Mode와 근거 범위는 그대로다. [현재 연결](ACT1_CONTEXT_HANDOFF.md),
[현행 Map](SLIDE_MAP.md)을 따른다. 아래 이전 번호·설계·검증 기록은 당시 이력이다.

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
[현재 Map](SLIDE_MAP.md), [번호 이행](SLIDE_ID_MIGRATION_121.md),
[3장 분할 기준](S26_VERIFICATION_REQUEST_SPLIT.md)을 우선한다.
아래 이전 판본의 번호·시간·평가·제작 기록은 당시 이력으로 보존한다.

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
[실제 요청 연결](S21_TRIAL_REQUEST_MAP.md)을 따른다.
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

## S47의 현재 표현 — DEC-0105 (2026-10-27)

S47 화면은 코드의 위치·요청한 동작·필요한 주변 근거를 확인하는 교육용 질문에 집중한다.
RepoQA는 정규 발표 설명과 화면에서 제외하고 Notes 및 [관련 연구](../references/research/repoqa.md)에 보존한다.
이 세 질문을 검증한 연구로 설명하지 않는다. S46의 정보 존재/활용 구분→S47의 코드 확인→
S48의 상세 근거 경로라는 연결을 유지한다.120장·420분과 모든 장별 시간/Mode는 불변이다.
코드 출처·기존 State/Trial·연구 조건과 한계는 유지한다. [현재 수정](../production/evaluation/S47_CODE_CHECK_REVISION.md).
아래 이전 판본의 RepoQA 화면 배치 설명은 제작 이력으로 보존한다.

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

| ACT | Current slides | Count | Minutes |
|---|---|---:|---:|
| ACT0 | S01–S15 |15|45|
| ACT1 | S16–S37 |22|64|
| ACT2 | S38–S59 |22|90|
| ACT3 | S60–S85 |26|96|
| ACT4 | S86–S105 |20|85|
| ACT5 | S106–S120 |15|40|
| Total | S01–S120 |120|420|

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

## 현재 ACT5 종합 — DEC-0099 (2026-10-25)

116장·410분과 ACT별 장수·시간을 유지한다. S103–S107은 Demo 사전 지식 없이
작업 범위·흐름·수행 조건·수용 책임을 종합한다. 개인 문제 선택과 다음 행동은
S111/S112에만 둔다. S104는 TEACHING_MODEL이며 VISUAL Demo2분을 Case2분으로
정렬한다. Mode Lecture176/Demo49/Case105/Reflection22/Transition26/Q&A32분.
[승인 설계](ACT5_OPENING_SYNTHESIS.md)를 우선한다. 기존 실제 이력은 보존 기록이며
새 Trial·제품 실행·성과 근거로 바꾸지 않는다. S108 이후와 근거 범위는 유지한다.

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


### Current ACT4 learning and evidence matrix — DEC-0098

| Section | Slides | Minutes | Evidence / role | Delivery |
|---|---|---:|---|---|
|4R1|S82–S83|5|Same-goal handoff problem|Transition1/Lecture2/Case2|
|4R2|S84–S89|26|Conceptual candidate/review/revision, not executed|Lecture4/Case22|
|4R3|S90–S91|10|Feedback and completion/control|Lecture6/Case2/Reflection2|
|4R4|S92–S94|13|Research under studied conditions|Lecture10/Case3|
|4R5|S95–S97|12|Roles, critique checking and state|Lecture6/Case6|
|4R6|S98/S101|15|Evidence boundary and reflection/Q&A/transition|Lecture2/Case2/Reflection2/Q&A7/Transition2|
|4T1|S99|2|Documented Goal continuation, static adaptation|Lecture2|
|4T2|S100|2|Goal request and blocked/completion criteria, unexecuted example|Lecture2|
|Total|S82–S101|85|Fixed-goal Loop with a bounded product tip|Lecture34/Case37/Reflection4/Q&A7/Transition3|


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

### 현재 ACT4 Story

ACT3 S77–S81: 첫 결과 뒤 남은 문제 → 사람이 다음 요청을 연결 → 수행 방법과
다음 행동 판단의 차이 → 이어받을 상태 → 반복 요청 성찰.
ACT4: 고정 목표 → v1 → 검사할 근거 → 다른 모델 B의 지적 → A의 v2 → 같은 기준
재검토 → 전체 루프와 종료 판단 → 연구 → 역할·근거·상태 설계 → ACT5 적용.
ACT5 S101은 이 여정을 회수하고 S102는 실제 제품 이력을 별도로 보존한다.
S105의 피드백과 S109–S110의 E 문제/행동은 같은 목표의 수정·재검토로 연결한다.
실제 Trial, 논문, 교육용 설계를 같은 결과로 합치지 않는다.

## Current ACT4 learning and evidence matrix

| Section | Slides | Minutes | Learning / observed behavior | Evidence | Delivery |
|---|---|---:|---|---|---|
|4R1|S82–S83|5|Identify the next review/revision handoff problem|Teaching/conceptual|Transition1/Lecture2/Case2|
|4R2|S84–S89|26|Trace fixed criteria, v1, tools, critique, v2 and re-review|CASE-LOOP-01 design only|Lecture4/Case22|
|4R3|S90–S91|10|Connect feedback and choose complete/revise/escalate|Teaching model|Lecture6/Case2/Reflection2|
|4R4|S92–S94|13|Interpret self-feedback and cross-model studies with limits|SRC-0223/0237/0238/0239|Lecture10/Case3|
|4R5|S95–S97|12|Choose roles, verify critiques and retain state/limits|Teaching model|Lecture6/Case6|
|4R6|S98–S99|15|Separate evidence classes and choose an application|Teaching model/individual reflection|Lecture2/Case2/Reflection2/Q&A7/Transition2|

The case is not a new execution. Numeric targets, representative inputs and
the actual model pair remain TBD. Windows and timed rehearsal stay unverified.

## 이전 ACT4 정렬 — DEC-0094 (2026-10-25)

현재115장·406분과 ACT4 S82–S100의19장·81분, 모든 장별 시간·Mode·근거 범위는
유지한다. 작업 수행 루프와 체계 개선 루프를 구분하고, 평가 후 완료·채택/재시도/
중단·사람 확인과 다음 작업에 넘길 기준·기록을 명시한다. 실제 Meta 사례의 후속
확인은 부분적이며 새 개선 질문은 제안/미실행이다. [현재 설계](ACT4_LOOP_CONTROL.md),
[현재 Slide Map](SLIDE_MAP.md)을 따른다. 아래 이전 번호·판정은 당시 기록이다.

## 이전 Codex 제작 팁 — DEC-0093 (2026-10-25)

현재115장·406분(6시간46분). 기존113장의 Story·장별 시간/Mode·근거를 유지하고
이전 S62 뒤 새 S63에 Skill 제작 팁, 이전 S66 뒤 새 S68에 Custom Agent 제작 팁을
각 Lecture2분씩 추가한다. 이전 S63–S66은 +1, 이전 S67 이후는 +2다.
ACT 장수14/22/19/26/19/15, 시간43/64/82/96/81/40분. Mode164/73/88/21/28/32분.
ACT4는 S82–S100의19장·81분, ACT5는 S101–S115의15장·40분을 그대로 유지한다.
실무 적용 팁은19개이며 마지막 찾아보기 S112–S114의 기존 세 장에 모두 연결한다.
공식 자료를 각색한 요청·문서 도식이며 실제 생성·실행·TRIAL-008 제작 이력이 아니다.
12Templates/28Variants·19Notes 필드 유지. 새 Trial·Agent/Skill 설치·Demo 저장소·묶음 변경 없음.
[현재 팁 설계](CODEX_AUTHORING_TIPS.md), [113→115 번호](SLIDE_ID_MIGRATION_115.md),
[Slide Map](SLIDE_MAP.md). 아래 이전 판본의 번호·시간·검증은 이력으로 보존한다.
Windows/교육장/제품·계정/실측 리허설은 UNVERIFIED다.

## 이전 ACT3→ACT4 연결 — DEC-0092 (2026-10-25)

113장·402분과 장별 시간/Mode·번호를 유지한다. S72–S73의 Harness 재사용 가치를
보존하고, S74–S79에서 **사람의 반복 보정이 다음 작업의 체계 개선으로 돌아오지 않는 문제**를
드러낸다. 확인한 성공→사람의 추가 확인→이번 요청과 공통 지침의 차이→반복 보정→
판단할 기록→근거·검토 책임의 순서다. S75–S77은 CONCEPTUAL이며 실제 반복 실패가 아니다.
ACT4 S80–S98의19장·81분·장별 역할·시간·Mode·근거·Notes는 변경하지 않는다.
[현재 연결 설계](ACT3_LOOP_HANDOFF.md), [Slide Map](SLIDE_MAP.md),
[로컬 수정 결과](../production/evaluation/ACT3_LOOP_HANDOFF_REVISION.md)를 우선한다.
기존12Templates/28Variants·19Notes 필드·17개 팁·마지막 목록 S110–S112를 유지한다.
아래 이전 설계·번호·평가는 당시 판본의 이력이다. Windows/교육장/제품·계정/실측 리허설은
UNVERIFIED이며 새 Trial·발표 묶음·Demo 저장소 변경은 없다.

## 이전 기준 — DEC-0091 (2026-10-25)

113장·402분. ACT3 S56–S79는24장·92분, ACT4 S80–S98은 기존19장·81분을 보존한다.
S71 뒤 재사용2장과 이전 S72 설명5장을 넣고 이전 독립 C++ 전이 S73은 삭제했다.
현재 범위·근거·장별 시간은 [Slide Map](SLIDE_MAP.md), [설계](HARNESS_REUSE_AND_EXECUTION_CONTEXT.md),
[108→113 번호](SLIDE_ID_MIGRATION_113.md)를 따른다. 기존12Templates/28Variants·19Notes 필드 유지.
마지막 팁 요약은 S110–S112이며 Windows/교육장/제품·계정/실측 리허설은 UNVERIFIED다.
아래의 이전 Decision·Prototype·평가는 당시 판본의 이력이며 새 Trial이나 전체 환경 감사가 아니다.

## 이전 ACT 제목 슬라이드 — DEC-0090 (2026-10-25)

현재 **108장·396분(6시간36분)**. 각 ACT 시작에 승인된 한글 제목·부제1장을 넣는다.
기존102장의 내용·장별 시간/Mode·근거를 유지하고 제목6장에 Transition1분씩 추가한다.
ACT 장수14/22/19/19/19/15, 시간43/64/82/86/81/40분. Mode Lecture154/Demo73/
Case88/Reflection21/Transition28/Q&A32분. 새 제목은 S01/S15/S37/S56/S75/S94다.
제목은 주제만 안내하며 기존 첫 문제·질문·Demo를 대신 설명하지 않는다.
17개 팁 본문·배지와 마지막 팁 요약은 유지하며 현재 마지막 요약은 S105–S107이다.
본문 Template는 유지하고 제목 전용 T12-A를 추가해 **12Templates/28Variants**가 된다.
[제목 기준](ACT_TITLES.md), [102→108 번호](SLIDE_ID_MIGRATION_108.md), [Slide Map](SLIDE_MAP.md).
아래 이전 승인/검증 기록은 당시 판본이다. 실환경·제품/계정·리허설은 UNVERIFIED다.

## 이전 마지막 팁 요약 — DEC-0088 (2026-10-25)

현재 **102장·390분(6시간30분)**. ACT 중간의 제목/ID 찾아보기6장을 제거하고,
마지막 Q&A/Closing 바로 앞의 **S99–S101**로 통합했다. 기존 팁17장의 설명·배지와
99개 본문 장의 내용·장별 시간/Mode·근거는 유지한다. ACT 사이 설명은 바로 이어진다.
ACT 장수13/21/18/18/18/14, 시간42/63/81/85/80/39분. Mode Lecture154/Demo73/
Case88/Reflection21/Transition22/Q&A32분. 팁 요약3장만 Lecture1분씩 배정한다.
[팁 위치/분류](PRACTICAL_APPLICATION_TIPS.md), [105→102 이행표](SLIDE_ID_MIGRATION_102.md),
[현행 Slide Map](SLIDE_MAP.md)을 따른다. 아래 과거 승인/검증 기록은 당시 판본이다.
Windows·교육장·제품/계정·실측 리허설은 UNVERIFIED이며 새 Trial/성과는 없다.

## Historical application tips — DEC-0087 (2026-10-25)

현재105장·393분(6시간33분). 기존99장의 내용·장별 배정·근거 범위를 보존하고,
17개 적용 기준에 “실무 적용 팁” 공통 배지·분류를 붙였다. 각 ACT의 다음 문제·성찰·
마무리 앞에는 제목/ID 찾아보기1장·Lecture1분씩 추가한다. ACT 장수14/22/19/19/19/12,
시간43/64/82/86/81/37분. Mode157/73/88/21/22/32분. 새 제품 실행·Trial·검증 결과는 없다.
[팁 기준/목록](PRACTICAL_APPLICATION_TIPS.md), [현재99→105 이행표](SLIDE_ID_MIGRATION_105.md),
[현행 Slide Map](SLIDE_MAP.md)을 우선한다. 아래 이전 제작·Prototype·동결 기록의
번호/시간은 당시 판본이며 현행 근거 상태를 상향하지 않는다. 실환경·리허설은 UNVERIFIED다.

## Historical ACT0 sequence — DEC-0084

S05 결과→S06 근거→S07 별도 실행 오류→S08 필요한 Context→S09 사람의 전달
→S10 Agent의 허용된 조사→S11 Codex 진입→S12 접근과 의도→S13 다음 Task.
현재99장·387분 / ACT0 13장·42분. 이전 S08–S96은 S11–S99이며, 기존
Beat/Section/Demo/Trial/State IDs·11Template/27Variant·19Notes 필드를 유지한다.
이전 세 장의 Demo8분과 Case5분을 나누고 Lecture2분만 더했다. 새 Trial·복구·
우월성 측정은 없다. 아래 과거 설명/Prototype/검증 본문의 번호는 당시 판본이다.
[현재 설계](ACT0_CONTEXT_EXPANSION.md), [이행표](SLIDE_ID_MIGRATION_99.md),
[결과](../production/evaluation/ACT_0_CONTEXT_EXPANSION.md)를 우선한다.

## Historical ACT5 reassessment — DEC-0083

S90의 AI-Native 설계 관점 뒤에 S91 조건 변화에 따른 기존 Harness 재평가,
S92 유지·통합·제거 후보, S93 같은 대표 작업·기준으로 확인을 배치한다.
S88의 처음부터 도입하지 않은 판단과, 이미 쓰던 구조의 후속 재평가는 다르다.
이전 S91/S92/S93은 S94/S95/S96이며, 문제·다음 행동에 통합·제거 후보를 포함한다.
현재96장·385분 / ACT5 11장·36분. 기존 Slide별 시간·Mode와 Beat/Section/
Demo/Trial/State IDs는 유지한다.11Template/27Variant와19Notes 필드를 재사용한다.
[현재 설계](ACT5_HARNESS_REASSESSMENT.md), [번호 대조](SLIDE_ID_MIGRATION_96.md),
[로컬 검토](../production/evaluation/ACT_5_HARNESS_REASSESSMENT.md)를 기준으로 한다.
아래 이전 수정·Prototype·검증 본문은 당시 번호·범위의 이력이다.
새 Trial·측정 성과·Demo State를 추가하지 않는다. 발표 묶음은 갱신하지 않는다.

> 최신 ACT3 설명 순서: DEC-0062 / [ACT3 흐름 설계](ACT3_FLOW_REVISION.md). S50–S67의18장·85분과 장별 시간·Mode·ID는 유지한다. Skill 문서/관찰 대응, Subagent·Memory의 가정→현재 선택, 실제 구성→전체 작업 환경의 역할을 정렬했다. 아래 원본 기획·과거 검증 이력은 보존한다.
> **이전 기준: DEC-0087 /105장·393분(6시간33분,2026-10-25).** ACT 장수14/22/19/19/19/12, 시간43/64/82/86/81/37분. Mode Lecture157/Demo73/Case88/Reflection21/Transition22/Q&A32분. 기존99장의 배정을 보존하고6개의 찾아보기에 Lecture1분씩 추가했다. [팁 목록](PRACTICAL_APPLICATION_TIPS.md), [105장 이행표](SLIDE_ID_MIGRATION_105.md). 실환경·리허설은 UNVERIFIED다.

## 현행 제작 기준과 원본 기획의 관계

아래 본문은 원래 Curriculum/Story 설계와 단계별 승인 이력을 보존한다. 그 안의 이전 장수·시간·당시 Slide 번호를 최신 PPT 번호로 읽지 않는다. 현재 Slide별 배정은 SLIDE_MAP.md,96→99 대조는 SLIDE_ID_MIGRATION_99.md가 기준이다. Beat/Section/Demo/Trial ID와 문제 중심 진화는 유지한다. ACT2의11분·ACT5의6분 확장 뒤, DEC-0084에서 ACT0의 기존 설명을6장으로 풀고 Lecture2분을 더한다.

| ACT | 현행 범위 | 장수 | 분 |
|---|---|---:|---:|
| ACT0 | S01–S14 |14|43|
| ACT1 | S15–S36 |22|64|
| ACT2 | S37–S55 |19|82|
| ACT3 | S56–S79 |24|92|
| ACT4 | S80–S98 |19|81|
| ACT5 | S99–S113 |15|40|
| 합계 | S01–S113 |113|402|

## 보존된 기획 본문 / 이전 승인 이력

> Status: STEP 04 COMPLETE; STEP 07 schedule decision accepted on 2026-10-02
> in DEC-0007. Approved totals are Lecture 130, Demo 73, Case 83,
> Reflection 20, Transition 22, and Q&A/Discussion 32 minutes. This matrix
> maps curriculum logic, evidence, and instructional roles, not individual
> Slides.

Related Invariants:
INV-OBJECTIVE-001, INV-AUDIENCE-001, INV-DELIVERY-001,
INV-NARRATIVE-001–002, INV-MATURITY-001–011, INV-LOOP-001,
INV-LEARNING-001–004, INV-VERIFY-001, INV-DIFFICULTY-001–003,
INV-RESPONSIBILITY-001, INV-DEMO-001–004.

The approved delivery-mode totals are:

| Mode | Minutes |
|---|---:|
| Lecture | 130 |
| Demo | 73 |
| Case | 83 |
| Reflection | 20 |
| Transition | 22 |
| Q&A/Discussion | 32 |
| **TOTAL** | **360** |

The per-section time vectors below are the earlier working allocation
(Lecture / Demo / Case / Reflection / Transition), not the approved aggregate
mode split. STEP 08 will place the Q&A pool near major transitions and the
course close, then reconcile section-level Reflection and Transition roles.
Reflection remains private and requires no answer. Demo labels are curriculum
roles and candidates, not commitments that a product surface or scenario is
available. Exact Slide-level times are outside this STEP 07 update.

| Act | Section | Time | Time Risk | Starting Problem | Concept | Audience Layer | Demo/Case | Core Insight | Evidence | Transition | Section Role |
|---|---|---:|---|---|---|---|---|---|---|
| ACT 0 | Familiar error and self-location | 10 (4/0/3/2/1) | LOW | Code or an error is copied to a chatbot and the answer is carried back manually. | Recognize current usage without ranking learners. | ALL | VISUAL CASE | Developers differ in how much of the problem-solving process they delegate. | CLM-0001; CLM-0002; INV-AUDIENCE-001 | “내가 AI에게 지금 어디까지 맡기고 있나?” | INTRODUCE, REFLECT |
| ACT 0 | Range of delegation and simple roadmap | 15 (6/0/4/2/3) | LOW | Chatbot use is familiar, but task delegation and system design are not yet visible. | Non-evaluative AI-use range; Chatbot → Prompt → Context → Harness → Loop. | ALL | VISUAL CASE | The roadmap previews a destination; reveal its internal parts only as problems arise. | CLM-0001; CLM-0002 | “AI에게 질문하는 것과 개발 Task를 맡기는 것은 무엇이 다른가?” | INTRODUCE, REFLECT |
| ACT 0 | ChatGPT → Codex repository exploration | 15 (3/8/2/1/1) | HIGH | The developer manually finds files and assembles repository context. | Agent-led repository search, reading, and path tracing. | ALL; ADVANCED insight on context-collection cost | ANCHOR DEMO (candidate) | The shift is who searches for context, not a claim that one product is a generally better coder. | Product/interface research; OQ-001, OQ-003, OQ-005 | “같은 AI를 쓰는데 왜 사람마다 결과가 다를까?” | DEMONSTRATE, TRANSITION |
| ACT 1 | Same model, underspecified request | 15 (5/0/7/2/1) | LOW | Vague requests leave scope, constraints, process, or completion evidence implicit. | Intent mismatch as a task-specification problem. | ALL | VISUAL CASE | Different results can reflect missing task information; no magic prompt is implied. | Prompt Engineering research; INV-MATURITY-001 | “무엇을 명확히 하면 결과가 달라질까?” | INTRODUCE, EXPLAIN |
| ACT 1 | Practical Prompt Checklist and Before/After | 20 (7/5/4/2/2) | MEDIUM | An agent does not know the goal, relevant context, forbidden changes, desired process, or completion condition. | Course checklist: Goal, Context, Constraints, Process, Verification. | ALL; PRACTICAL use | SUPPORTING DEMO | Learn which task information changes, not a prompt sentence to memorize. | Prompt Engineering; CLM-0029; course teaching checklist | “먼저 조사하고 계획하게 하면 무엇이 달라질까?” | EXPLAIN, DEMONSTRATE |
| ACT 1 | Investigation-first workflow and Prompt's value | 20 (7/3/6/2/2) | LOW | “Fix it” can skip diagnosis, planning, or verification; useful project facts recur across tasks. | Investigate → Plan → Implement → Verify → Review; task-specific vs project-persistent information. | ALL; ADVANCED insight on task specification and verification | SUPPORTING DEMO | Prompt improvements are valuable on their own; repeated project context is a different scaling problem. | INV-MATURITY-001, INV-MATURITY-011; Prompt Engineering research | “왜 매번 같은 Project 설명을 반복할까?” | EXPLAIN, EVOLVE, TRANSITION |
| ACT 2 | Repeated project context and AGENTS.md's first success | 20 (5/8/4/1/2) | MEDIUM | Build, test, style, and project constraints are repeated in each task. | Reuse core project instructions through AGENTS.md. | ALL | ANCHOR DEMO (candidate) | Move repeated project explanation from each Prompt into reusable project context. | CLM-0005; AGENTS.md research; OQ-001, OQ-003, OQ-005 | “AGENTS.md가 도움이 된다면 여기에 다 넣으면 될까?” | DEMONSTRATE, EXPLAIN |
| ACT 2 | Context definition and scope mental model | 15 (8/0/3/2/2) | LOW | Task information, project rules, workflow guidance, and retained knowledge are mixed. | What / when / where; Task, Project, Role/Workflow, Historical/Durable Context as a course model. | ALL; PRACTICAL / ADVANCED distinctions | VISUAL CASE | Context Engineering selects and places relevant information; this scope model is not an official taxonomy. | Context Engineering; Terminology Registry; CLM-0005, CLM-0008 | “모든 정보를 항상 제공해야 할까?” | EXPLAIN |
| ACT 2 | Context growth, relevance, and research caveat | 20 (8/2/6/2/2) | MEDIUM | A single instruction file accumulates material not needed by every task. | Relevance, staleness, conflict, maintenance, bounded long-context evidence. | ALL; ADVANCED research scope | VISUAL CASE | More context is not the goal; Lost in the Middle is a bounded study, not a universal current-model rule. | CLM-0014, CLM-0015; Lost in the Middle; OQ-006 | “필요한 정보를 필요한 Task에 어떻게 제공할까?” | INTRODUCE, EXPLAIN |
| ACT 2 | Separation, routing, and progressive disclosure | 15 (6/3/2/2/2) | MEDIUM | Splitting documents alone does not ensure the right information is found at the right time. | Core rules plus routes to task-relevant context; progressive disclosure and its trade-offs. | ALL; ADVANCED routing trade-offs | SUPPORTING DEMO | Routing and relevance are the goal; course context pattern is distinct from the Skills product loading behavior. | Context Engineering; Skills research; INV-MATURITY-004 | “Agent가 필요한 Context를 알면 늘 같은 방식으로 일할까?” | EVOLVE, TRANSITION |
| ACT 3 | Context → Harness problem and bottom-up framing | 15 (7/1/5/1/1) | MEDIUM | A labeled teaching model asks whether knowing Project facts makes work repeatable. | Candidate course framing: environment and process for reliable agent work; grow bottom-up. | ALL; ADVANCED system framing | VISUAL CASE | Ask what work system is needed before listing components. | CLM-0016, CLM-0017, CLM-0030 (partial); OQ-011 | “같은 절차를 매번 설명하지 않을 방법은?” | INTRODUCE, EXPLAIN |
| ACT 3 | Observed workflow and repository-owned Performance Skill | 20 (5/8/4/1/2) | HIGH | TRIAL-006 and TRIAL-007 reused the same observable procedure for different performance targets. | Follow the observed repository Skill discovery/invocation in TRIAL-008 and its verification path through STATE-04-PERF. | ALL; PRACTICAL workflow design | ANCHOR DEMO — OBSERVED PRODUCT PATH | Reusable work and bounded evidence matter; the record does not prove Skill superiority or isolate it as the cause of the Product improvement. | STATE-04-PERF; TRIAL-006/007/008; DEC-0017; OQ-005 | “이 작업에 더 필요한 구성요소가 있었을까?” | DEMONSTRATE, EVOLVE |
| ACT 3 | Role/context complexity and Subagents | 15 (5/5/3/1/1) | MEDIUM | The actual candidate-task audit finds overlapping evidence, weak independent Context needs, and no demonstrated need to split roles. | Record the no-need decision, then define conditions for a separate role-split model. | ALL; ADVANCED cost analysis | SUPPORTING / VISUAL MODEL | The current Project fits one Agent; Subagents remain conditional and are not used in the primary Demo. | DEC-0018; CLM-0007; Subagents research; OQ-005, OQ-008 | “이 작업에 독립적인 조사가 필요한가?” | EXPLAIN, EVOLVE |
| ACT 3 | Trial-history audit, Context vs Memory | 15 (7/2/3/1/2) | MEDIUM | Trial history repeats information, but no costly missing durable Project fact is identified. | Classify source facts, maintained documentation, reusable workflow, scoped observations, and temporary details; teach a conditional retention gate and lifecycle. | ALL; ADVANCED lifecycle | VISUAL CASE | No Memory candidate is justified for the primary Demo; distinguish Memory from Context, workflow, and Source of Truth. | DEC-0018; OQ-013; CLM-0008; Memory research | “이 반복 정보는 어디에 두어야 하고 남길 가치가 있는가?” | INTRODUCE, EXPLAIN |
| ACT 3 | Tools, verification, and Harness reveal | 20 (7/4/5/2/2) | HIGH | The observed Project has Context and a reusable Skill, but its success needs bounded execution evidence. | Reveal the observed Project-level work environment and Minimum Effective Harness payoff. | ALL; ADVANCED system trade-offs | VISUAL CASE | STATE-04-PERF succeeds without Subagent or Memory; it is the observed endpoint, not a checklist. | STATE-04-PERF; DEC-0018; CLM-0016, CLM-0017, CLM-0029; OQ-011 | “이 작업에 필요한 최소 작업 환경은 무엇인가?” | DEMONSTRATE, VALIDATE, EVOLVE |
| ACT 4 | Project change and stale Harness | 20 (6/5/6/1/2) | HIGH | A labeled conceptual Project change could leave a reusable workflow stale after the primary Demo has succeeded. | Use DEMO-04A to model elapsed time, mismatch, and maintenance debt. | ALL; ADVANCED maintenance perspective | VISUAL CASE | DEMO-04A is conceptual, not a Product State, Trial, or observed recurrence. | DEC-0021; INV-MATURITY-010; OQ-007, OQ-009, OQ-011 | “이 사례에서 무엇이 stale해졌으며 왜 그런가?” | INTRODUCE |
| ACT 4 | Loop model, Product Loop, and automation levels | 15 (8/2/2/1/2) | HIGH | DEMO-04A is conceptual; separately, observed Trial history shows an attribution limit. | Synthesize a general feedback pattern across two independent evidence paths; distinguish Product Loop from Harness Improvement Loop and manual/assisted/automated levels. | ALL; ADVANCED evaluation limits | SUPPORTING CASES | Do not join DEMO-04A causally to the observed DEMO-04B evaluation/reporting change. | DEC-0021; CLM-0021; Loop Engineering; OQ-011 | “각 경로가 실제로 뒷받침하는 결론은 무엇인가?” | EXPLAIN, EVOLVE |
| ACT 4 | Cause analysis, change, evaluation, regression | 25 (5/11/5/2/2) | HIGH | A conceptual correction needs a cause hypothesis and bounded checks; the observed Meta change concerns evaluation/reporting rules only. | Trace DEMO-04A's conceptual Failure → cause → hypothesis → change → rerun → evaluation → regression; bound DEMO-04B to its recorded scope. | ALL; ADVANCED evaluation and overfitting | CONCEPTUAL CASE + SUPPORTING META | No Product Skill repair or objective Trial-quality gain is claimed. | DEC-0016; DEC-0021; CLM-0020, CLM-0021, CLM-0029; Verification research | “이 경로의 근거는 어떤 변화까지 뒷받침하는가?” | DEMONSTRATE, VALIDATE |
| ACT 4 | Improve Context, Memory, Skills, and delegation | 20 (8/4/4/2/2) | MEDIUM | Maintenance choices are possible, but no such change is claimed for the observed Product or Meta paths. | Use conditional examples to teach routing, stale knowledge, workflow quality, role selection, and Minimum Effective Harness. | ALL; ADVANCED system design | SUPPORTING / VISUAL MODEL | Use the smallest change justified by evidence; do not imply every failure adds a component. | CLM-0006–0008, CLM-0022; DEC-0021; Loop Engineering | “지금 자신의 위치에서 다음으로 바꿀 수 있는 것은 무엇인가?” | EVOLVE, REFLECT, TRANSITION |
| ACT 5 | Beginning/ending comparison and developer responsibility | 15 (7/2/3/2/1) | MEDIUM | Seeing greater agent capability can imply that full automation is required or developers become unnecessary. | Revisit the journey; retain developer goals, judgment, verification, risk review, and accountability. | ALL; ADVANCED team-level implications | VISUAL CASE | AI participation can expand without removing engineering responsibility. | CLM-0023, CLM-0024; INV-RESPONSIBILITY-001 | “각자의 업무에서 현실적인 다음 한 단계는 무엇인가?” | EXPLAIN, REFLECT |
| ACT 5 | Audience next steps, seven takeaways, final reflection | 15 (6/0/2/4/3) | LOW | A single identical assignment would not fit the range of learner maturity. | Stage-specific next steps and seven takeaways tied back to the shared Story. | ALL | VISUAL CASE | Learners may take the next step from their current position; they need not install the full system. | CLM-0001, CLM-0002, CLM-0023; INV-DIFFICULTY-001 | End with private reflection; no presentation or hands-on work is required. | REFLECT, TRANSITION |

## Reading the Matrix

- Audience Layer identifies who should find explicit value; each section remains
  part of one accessible Story. ADVANCED material is an optional depth layer,
  not a prerequisite.
- ANCHOR DEMO, SUPPORTING DEMO, and VISUAL CASE are planned roles. They do not
  assert target feature access, an observed failure, or a selected repository.
- Evidence names a Claim ID or research topic. See
  [Claim Registry](../references/CLAIMS.md), product and engineering topic
  pages, and unresolved questions in [DECISIONS.md](DECISIONS.md).
- The time split is a curriculum estimate. Later Demo Architecture may refine
  the section's mode mix while preserving the 360-minute total and Story.

## Section Role Legend

Each section is tagged with one or more of these instructional roles:

| Role | Meaning |
|---|---|
| INTRODUCE | Establish a new Problem or Mental Model. |
| DEMONSTRATE | Show an example, case, or agent behavior. |
| EXPLAIN | Make the cause or concept understandable. |
| EVOLVE | Develop the work system toward the next engineering stage. |
| VALIDATE | Check a result, Test, Evaluation, or evidence boundary. |
| REFLECT | Consolidate an Insight or help learners locate their practice. |
| TRANSITION | Connect the completed thought to the next Problem or course close. |

Role labels describe the section's Curriculum function, not a required Slide or
teaching format. All 21 sections have at least one explicit role.
