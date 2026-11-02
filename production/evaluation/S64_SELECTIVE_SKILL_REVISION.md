# S64 — 필요한 작업에만 Skill 선택

Decision: DEC-0128. Date:2026-11-02. Baseline:`b76e635`.
Status: LOCAL RENDER AND STRUCTURE VERIFIED.

## 수정

S64 제목을 “같은 Skill도 필요한 작업에만 쓴다”로 바꿨다.
기존 두 성능 요청에 C “README를 영어로 수정해줘.”를 추가했다.

| 요청 | 성능 조사 Skill | 이유 |
|---|---|---|
| A resize_nearest 성능 조사 | 같은 Skill 연결 | 반복되는 성능 조사 방법 재사용 |
| B normalize 성능 조사 | 같은 Skill 연결 | 다른 목표에 같은 방법 재사용 |
| C README 영어 수정 | 이 성능 조사 Skill 미사용 | 문서 문구 수정에는 성능 측정 절차가 필요하지 않음 |

공통 지침은 세 작업 모두 참고한다. A/B만 동일3px 선과 native 화살촉으로 연결하고,
C에는 선을 두지 않아 적용/비적용이 시각적으로 구분된다. 하단은 필요한 작업에만
방법을 연결한다는 문장으로 회수한다. 기존 색상·Typography·16:9·native 편집을 유지한다.

## AGENTS.md와 Skill 선택 이유

AGENTS.md에도 절차를 쓸 수 있고 한 곳에서 관리할 수 있다.
이번 선택 이유는 특정 작업 종류에 선택해 재사용할 방법의 단위가 필요하다는 점이다.
짧고 공통인 절차까지 모두 Skill로 옮길 필요는 없다. C에서도 공통 지침과 필요한 변경 검토는 남는다.
공식 Build skills/AGENTS.md 문서를 Notes에 연결하고 자동 준수·선택 정확성을 보장하지 않는다.

## 시간·연결·Notes

S63 한 작업의 목표·기준·방법 → S64 세 작업에 필요한 방법 선택 → S65 실제 CLI 발견·호출·본문 포함.
기존4분=Lecture4분을 공통 지침0:40/A·B1:00/C1:00/선택 이유0:45/전환0:35로 운영한다.
현재 Slide/Section/Beat/Demo/Trial/State/Claim ID·시간·Mode·T05-A를 유지한다.
S64의19필드 Markdown/내장 Notes를 맞추고 기존 발견 근거 참조의 오래된 번호를 S65로 정렬했다.
다른119장/Notes와 S63/S65는 유지한다.

## 근거 범위

A/B는 기존 성능 Task의 교육용 요약이며 이 두 Task에서 같은 Skill을 실제 호출했다는 뜻이 아니다.
C는 사용자가 제안한 비교용 요청으로, 실제 미호출 실험 결과·새 Trial·실제 제품 UI가 아니다.
화면은 TEACHING_MODEL, 현재 제품 표면/계정/호출 경로는 REQUIRES PRODUCT CHECK다.
DEC-0017, TRIAL-006/007의 반복과 귀속 한계, TRIAL-008의 역사적 CLI0.154.0 기록을 보존한다.
Skill 우월성·토큰 절감·속도 향상·자동 선택/준수·Harness 단독 인과성·현재 Desktop 재현을 주장하지 않는다.

## 검증

- Full120장과 ACT3 26장을1920×1080으로 렌더링했다. 개별 PNG146개.
- S64 및 S63→S64→S65를 실제 렌더로 검토했다. 이번 변경에서 잘림·겹침·잘못 연결된 선을 발견하지 않았다.
- 다른119장 화면은 이전과 픽셀이 같다. Full/ACT3 26장과 S64 source/final 화면이 일치한다.
- Full/ACT3에서 S64 slide/Notes XML만 바뀌었다. 다른 part·미디어·관계·표·차트·워크북·Theme/Layout은 바이트가 같다.
- 나머지5개 ACT PPT는 바이트가 같다.120개19필드 Notes와146개 내장 Notes를 대조했으며 다른119개 Notes는 같다.
- 120장·417분, ACT 장수14/23/22/26/20/15와 시간42/64/90/96/85/40을 유지한다.
- Mode Lecture186/Demo49/Case105/Reflection22/Transition23/Q&A32와 모든 장별 배정은 같다.
- 기존 T05-A와12Templates/28Variants,44개 정적 Fallback 역할·분류·경로를 유지한다.
- 패키지 무결성·16:9·layout finding0·first-party import·native 표/차트 검사를 통과했다.
- 기존 파일을 기준으로 OOXML schema/관계/컨텐츠 타입 검사를 통과했다(`validate.py --original`).
  S64 관련 경고는 없다. 기존 S04 연결선2건/S54 표 추정 여유0.01inch 경고는 그대로다.

로컬 렌더는 Malgun Gothic/Consolas를 Apple SD Gothic Neo/Menlo로 대체한다.
Windows PowerPoint·실제 발표PC/교육장·제품/계정·실측 리허설은 UNVERIFIED다.
이번 변경에서 새 P0/P1 문제를 발견하지 않았다. 실제 투사 가독성·발표 운영은 별도 Gate다.
Demo 저장소·Sites·발표 묶음을 변경하지 않았다. 새 Trial·Skill 실행·실제 리허설을 하지 않았다.

## 산출물

[수정 S64](../preview/full/S64.png), [통합 PPT](../AI_Dev_Training_Full.pptx),
[ACT3 PPT](../ACT_3.pptx), [ACT3 Notes](../notes/ACT_3_NOTES.md),
[설계](../../plan/S64_SELECTIVE_SKILL.md), [Map](../../plan/SLIDE_MAP.md),
[Claim Freeze](../../plan/CLAIM_FREEZE.md), [Decision](../../plan/DECISIONS.md),
[현재 파일 식별자](FINAL_HANDOFF.md).
