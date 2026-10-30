# ACT1 — 목표별 검증 요청 설계

Decision: DEC-0114. Date:2026-10-30. Baseline:`c653623`.

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

| ACT | Current slides | Count | Minutes |
|---|---|---:|---:|
| ACT 0 | S01–S14 | 14 | 42 |
| ACT 1 | S15–S37 | 23 | 64 |
| ACT 2 | S38–S59 | 22 | 90 |
| ACT 3 | S60–S85 | 26 | 96 |
| ACT 4 | S86–S105 | 20 | 85 |
| ACT 5 | S106–S120 | 15 | 40 |
| Total | S01–S120 | 120 | 417 |

## Rationale

ACT0에서 기대 폭과 구현의 차이·테스트/명세 연결을 이미 보여줬다. 이전 S27/S28의 vector와 assertion 설명은 같은 수치로 돌아가 ACT1을 테스트 문법 수업처럼 보이게 했다. S26의 검사 범위 질문을 원하는 변화에 맞는 확인 요청으로 바로 적용한다. S25는 사람의 완료 판단, S26은 확인 방법 선택, S27은 검증 요청 작성으로 역할을 나눈다.

## Slide roles

| Slide | Role | Time / Mode | Template |
|---|---|---|---|
| S26 | 원하는 결과에 맞춰 확인 방법을 고른다. 판단할 질문→요청할 확인의5행. | Lecture2분 | T06-C |
| S27 | 같은 crop의 오류 수정/실행시간 단축에서 달라지는 검증 요청을 비교한다. | Lecture2+Reflection1분 | T04-A |

S27 왼쪽 요청은 기존 crop 명세를 기준으로 관련·전체 테스트, CLI 샘플과 최종 diff, 검사·결과·미확인 보고를 담는다. 오른쪽은 기존 동작 확인과 같은 입력·환경의 전후 시간 측정, 측정 조건·결과·미확인 보고를 담는다. 둘 다 교육용 작성 예시이며 실제 Trial의 요청 인용이 아니다. 명세 전문이나 기대값을 매번 복사하라는 뜻이 아니다.

## Boundaries

TRIAL-002의 기존 Python 요청·1줄 수정·관련3/3(일부 resize 포함)·전체11/11·CLI 샘플·diff 근거와 성능 미측정을 유지한다. 새 Trial·C++ 실행·benchmark·Prompt 우월성·시간/토큰 절감 성과를 추가하지 않는다. 기존 C++ 반례·assertion의 기술 의미와 한계는 S27 Notes의 선택 참고다. 기본5분 운영에서 다시 설명하지 않는다.

## Validation

120장/417분, ACT1 23장/64분, S26/S27 합계5분=Lecture4+Reflection1. 모든 최종 Full/ACT PPT를 렌더링하고 두 장 및 S24–S28, S35–S39 연결을 본다. 나머지118장은 번호·현재 참조 이외의 화면과 개별 배정·근거를 보존한다.19필드 Notes와 내장 Notes, Mapping,44정적 Fallback 경로·해시를 정렬한다. Windows·교육장·제품/계정·실측 리허설은 UNVERIFIED다. Demo 저장소·Site·발표 묶음을 변경하지 않는다.

[현행 Map](SLIDE_MAP.md), [번호 이행](SLIDE_ID_MIGRATION_120_DEC0114.md), [검토 결과](../production/evaluation/VERIFICATION_REQUEST_DESIGN_REVISION.md).
