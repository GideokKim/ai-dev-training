# ACT1 — 같은 crop 사례 연결 수정

Decision: DEC-0110. Date:2026-10-27. Baseline:`44e33e0`.
Status: LOCAL RENDER / STRUCTURE PASS.

## Changes

| Slide | Before | After | Why |
|---|---|---|---|
| S16 | filter 성능 요청에서 미정 정보를 질문 | 앞서 본 crop 실패와 “crop test 고쳐줘”; 지킬 기준·수정 범위·완료 근거 | S17에서 예시를 바꾸지 않고 같은 요청을 발전시킨다. |
| S17 | crop으로 예시 전환; 조건 없는 세 가지 해석 | 같은 crop 요청; 기대값 변경은 정당성·승인 필요, 구현 수정은 기존 명세 보존, 충돌 시 확인 | 세 경로를 동등하게 정당한 답처럼 보이지 않게 한다. |
| S18 | 다섯 항목 표 형태 요청 | 자연스러운 보존·최소 수정·테스트 확인·보고 요청; 기대 열1·2/폭2는 작은 참고 | S20/S21의 분류표 역할을 남기고 구체화를 쉽게 읽는다. |

같은 Agent·토큰/시간 그림, 기본 배치·스타일, 각 장 시간과 Mode는 유지했다.
S19의 질문→S20 다섯 항목→S21 문장 대응→S22 실제 요청/기록 연결을 대조했고,
이미 역할이 나뉘어 있어 해당 화면과 Notes를 다시 만들지 않았다.

## Evidence / claim

S16–S18은 교육용 요청·도식이다. 실제 TRIAL-002 Prompt나 새 수행 결과가 아니다.
기존 명세·기대값이 유효한 이 사례에서는 구현을 명세에 맞춘다. 테스트 변경은
명세 자체를 정당하게 바꾸고 승인받는 경우에 검토한다. Agent가 기존 명세를
근거로 적절한 수정을 추론할 수 없다는 뜻이 아니다.

비용 그림은 수치 없는 정성 개념도다. 토큰/시간 실측·절감·기하급수 법칙·실제
Agent 실패·정지·내부 추론을 보여주지 않는다. 강조 경로는 의도한 변경 범위이며
실제 선택·정확성·결정성·성공 보장이 아니다. S22 이후 원문 발췌·번역과 관찰,
실제 수정·테스트 결과는 그대로다.

## Rendering and preservation

- 최종 Full119장과 ACT1 22장, 총141개1920×1080 PNG를 렌더링했다.
- 수정3장과 S19–S22 연결, ACT1 montage를 직접 확인했다. 새 잘림·겹침 없음.
- Full/ACT1의22개 화면은 픽셀이 같다. 수정3장은 source 미리보기와도 같다.
- 나머지116장과 원복 S14는 직전 화면과 픽셀이 같다. 다른5개 ACT PPT는 바이트가 같다.
- Full/ACT1 각각3개 Slide XML 및3개 Notes XML만 변경했다. 다른 package part,
  원래 이미지·관계·표·차트·워크북은 바이트가 같다. PPT text/shape 편집성을 유지한다.
-119개 Notes는19필드이며 내장141개 기록과 Markdown을 대조했다.
  S16–S18만 정렬했고 나머지116개 Notes는 같다.
- Map119개 ID와 Template Mapping, 모든 장별 시간·Mode·Evidence Type·Claim Status·
  Story Beat·Section·Curriculum Trace를 유지했다.
-119장·417분; ACT42/64/90/96/85/40분, ACT1 22장·64분.
  Mode Lecture186/Demo49/Case105/Reflection22/Transition23/Q&A32분.
- 정적 Fallback44개 파일과 해시를 확인했다. 새 Live/Hybrid 승인은 하지 않았다.

## Remaining gates

P0/P1: 이번 수정 범위에서 새로 발견한 미해결 문제 없음.
P2/외부 검증: Windows PowerPoint·발표 PC 글꼴·교육장 투사·제품/계정·실측 리허설
UNVERIFIED. 로컬은 기존 Malgun Gothic/Consolas를 Apple SD Gothic Neo/Menlo로 대체해
렌더링했다.7분/2분/2분은 승인 배정이며 실제 발표 시간을 측정한 것은 아니다.

Demo 저장소·Sites·발표 묶음은 변경하지 않았다. 새 Trial·비교 실험을 실행하지 않았다.

[S16](../preview/full/S16.png), [S17](../preview/full/S17.png),
[S18](../preview/full/S18.png), [ACT1 montage](../preview/act1/montage.png),
[통합 PPT](../AI_Dev_Training_Full.pptx), [ACT1 PPT](../ACT_1.pptx),
[ACT1 Notes](../notes/ACT_1_NOTES.md), [기획](../../plan/ACT1_SINGLE_CROP_CASE.md).
