# ACT1→ACT2 — S37/S38 연결 수정 결과

Decision: DEC-0113. Date:2026-10-27. Baseline:`e956bc0`.
Status: LOCAL RENDER / STRUCTURE PASS. External gates remain UNVERIFIED.

## Change and flow

| Slide | Change | Purpose |
|---|---|---|
| S36 | 기존 화면 유지. Notes의 오래된 번호를 빼고 같은 crop 요청을 돌아보는 전환으로 정렬. | 피드백 방법에서 다음에도 반복할 조건의 질문으로 연결. |
| S37 | 빈 Bucket을 같은3문장의 큰 요청 창과 질문으로 교체. 세 문장은 중립 색 유지. | 무엇을 보고 생각해야 하는지 분명한 Reflection 대상 제공. |
| S38 | 같은 문장을 그대로 두고 crop 목표와 API/테스트 기준을 얇은 선·bracket과 강조색으로 구분. | 새 사례 없이 역할·적용 범위의 차이를 읽고 공통 기준의 위치 질문을 남김. |
| S39/S40 | 화면·Notes·배정 유지. | ACT2 제목을 거쳐 세 작업에 같은 설명이 반복되는 장면으로 확대. |

두 화면의 요청은 다음과 같으며 문장이 완전히 일치한다.

```text
crop 경계 오류를 고쳐줘.
기존 공개 API는 유지해.
프로젝트에 정해진 테스트 명령으로 확인해.
```

S37의 질문은 “작업이 바뀌어도 다시 말하게 될 문장은?”이다.
S38은 이번 작업의 목표1줄과 계속 쓰는 기준2줄을 구분하고 “이 공통 기준을 어디에 두고
다시 참고할까요?”를 남긴다. 공통 기준을 둘 위치나 AGENTS.md를 답으로 먼저 제시하지 않는다.
README·의존성의 추가 예시는 화면에서 빼고 기존 조건의 선택 참고를 Notes에 보존했다.

## Evidence / claim boundary

교육용 요청·구분 도식이다. 실제 TRIAL-002 요청·STATE-01 원문·실행 결과·새 Trial·
기능 검증·효과나 자동 수집을 주장하지 않는다. S21–S24의 원문·관찰·변경·검증과
DEMO_MATRIX.md는 그대로다. 공통 기준의 적용 범위는 프로젝트의 합의와 조건을 확인한다.
모든 반복 문장이 전역·영구 지침이거나 모든 요청에 같은 테스트가 필수라고 일반화하지 않는다.
기존 의존성의 정당한 작업상 근거 조건을 무조건 금지로 바꾸지 않는다.

## Time / Mode

121장·417분. ACT1 S15–S38의24장·64분과 모든 개별 배정을 유지한다.

| Slide | Reflection | Transition | Q&A | Total |
|---|---:|---:|---:|---:|
| S37 | 1 | 0 | 2 | 3 |
| S38 | 1 | 3 | 2 | 6 |
| Total | 2 | 3 | 4 | 9 |

S39 제목의 Transition1분은 별도이며 중복 계산하지 않는다.
전체 Mode는 Lecture186/Demo49/Case105/Reflection22/Transition23/Q&A32분,
ACT 시간은42/64/90/96/85/40분이다. 실측 운영 적합성은 리허설 전까지 UNVERIFIED다.

## Validation

- 최종 통합121장과 ACT1 24장, 총145개의1920×1080 PNG를 렌더링했다.
- S36–S40을 개별 화면으로 검토하고 ACT1 전체 montage와 앞뒤 역할을 대조했다.
  새 잘림·겹침·깨진 연결선을 발견하지 않았다. 질문·요청·두 범위의 시선 순서가 분명하다.
- 최종 S37/S38은 source 생성 렌더와 픽셀이 같다. 같은3문장이 두 장에 각각1번씩 있다.
- 다른119장과 S36/S39/S40의 화면은 이전과 픽셀 단위로 같다.
- Full/ACT1 24개 화면과 내장 Notes145개를 공식 Markdown과 대조했다.
- 121개19필드 Notes 중 S36–S38의3개만 바뀌고 다른118개는 같다.
- 각 PPT에서 Slide XML2개와 Notes XML3개만 바뀌었다. 나머지 모든 package part·
  이미지 관계·미디어·native 표/차트·embedded workbook은 바이트가 같다.
- 다른5개 ACT PPT 파일은 바이트가 같다. 기존 Trial 원문·수정·검증 결과도 그대로다.
- 121개 Slide Map/Template Mapping과 모든 시간/Mode를 대조했다. S37 T01-B,
  S38 T04-A,12Templates/28Variants와 M2 footer를 유지한다. Native text/shape 편집 가능.
- 구조·16:9 크기·글꼴 정책·first-party import와 layout finding0 검사를 통과했다.

## Remaining gates

P0/P1: 이번 수정에서 새로 발견한 미해결 문제 없음.
Windows PowerPoint·발표 PC 글꼴·교육장 투사·현재 제품/계정·실측 리허설은 UNVERIFIED다.
로컬은 기존 Malgun Gothic/Consolas를 Apple SD Gothic Neo/Menlo로 대체해 렌더링했다.
Demo 저장소·Sites·발표 묶음은 변경하지 않았다. 새 Trial·제품 실행을 하지 않았다.

[S37](../preview/full/S37.png), [S38](../preview/full/S38.png),
[ACT1 montage](../preview/act1/montage.png), [통합 PPT](../AI_Dev_Training_Full.pptx),
[ACT1 PPT](../ACT_1.pptx), [Notes](../notes/ACT_1_NOTES.md),
[기획](../../plan/ACT1_CONTEXT_HANDOFF.md), [현재 Map](../../plan/SLIDE_MAP.md).
