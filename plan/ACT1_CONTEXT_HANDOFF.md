# ACT1→ACT2 — 같은 crop 요청으로 연결

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

Decision: DEC-0113. Date:2026-10-27. Baseline:`e956bc0`.

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

## One teaching request

```text
crop 경계 오류를 고쳐줘.
기존 공개 API는 유지해.
프로젝트에 정해진 테스트 명령으로 확인해.
```

S37과 S38에 이 세 문장을 그대로 사용한다. 실제 TRIAL-002 요청 발췌가 아니며,
S21–S24의 실제 입력·행동·변경·검증 근거와 구분한다. 새 Trial·효과·모델 실행을 추가하지 않는다.

## Slide roles

| Slide | Question and visual | Time / Mode |
|---|---|---|
| S36 | 의도와 다른 제안의 수정·유지 조건. 기존 화면을 유지하고 Notes 전환만 정렬. | 기존 Lecture1 |
| S37 | 다음 작업에도 이 내용을 다시 적어야 할까? 같은3문장 요청을 중립 색으로 두고 질문 하나. 빈 Bucket·정답 강조 없음. | Reflection1 + Q&A2 = 3 |
| S38 | 작업마다 바뀌는 목표, 계속 쓰는 기준. 같은 요청에서 목표1줄과 기준2줄만 얇은 연결선·bracket으로 구분. | Reflection1 + Transition3 + Q&A2 = 6 |
| S39 | ACT2 제목. 기존 화면·Notes·배정 유지. | Transition1 |
| S40 | 다른3작업에도 같은 설명이 반복되는 교육용 장면. 기존 화면·Notes·배정 유지. | Lecture4 + Case1 |

## Boundary

API 유지·테스트 명령은 프로젝트에서 합의해 계속 적용하기로 한 경우의 기준이다.
반복되는 모든 문장을 자동으로 전역 지침이나 영구 정책으로 만들지 않는다.
어떤 테스트가 필요한지는 실제 프로젝트 기준과 작업 조건을 확인한다. 지침 저장·자동 수집·
AGENTS.md는 이 두 장의 답이 아니며 다음 ACT에서 문제를 본 뒤 설명한다.
기존 README/의존성 예시는 화면에서 빼고 필요한 범위의 조건을 Notes에 보존한다.
의존성 추가의 정당한 근거 조건을 무조건 금지로 바꾸지 않는다. Skill/Workflow의 반복 수행
절차도 여기서 먼저 완성하지 않는다.

## Preserved production contract

121장·417분, ACT1 24장·64분. S37/S38 합계9분=Reflection2+Transition3+Q&A4이며,
다른 장의 시간·Mode·Slide/Section/Beat/Demo/Trial/State/Claim ID와 기존 근거는 유지한다.
Native text/shape, M2 footer,12Templates/28Variants,19Notes 필드를 사용한다.
Full121장과 ACT1 24장을 최종 PPT에서 렌더링한다. 변경2장과 S36→S37→S38→S39→S40,
다른119장의 화면·Notes·미디어/표/차트/워크북을 대조한다. Windows·제품/계정·교육장·
실측 리허설은 UNVERIFIED다. Demo 저장소·Sites·발표 묶음을 변경하지 않는다.

[현행 Map](SLIDE_MAP.md), [검토 결과](../production/evaluation/ACT1_CONTEXT_HANDOFF_REVISION.md).
