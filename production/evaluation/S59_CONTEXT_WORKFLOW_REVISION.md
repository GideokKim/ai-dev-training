# S59 — Project Context와 Workflow 역할 비교

Decision: DEC-0127. Date:2026-11-02. Baseline:`09b7359`.
Status: LOCAL RENDER AND STRUCTURE VERIFIED.

## 수정

S59 제목을 “프로젝트 기준과 작업 절차는 역할이 다르다”로 바꿨다.
상단의 “normalize 성능을 조사해줘.”라는 한 요청 아래 두 역할을 비교한다.

| Project Context | Workflow |
|---|---|
| 무엇을 참고하고 지켜야 할까? | 어떤 순서로 진행할까? |
| AGENTS.md 문서의 기준·안내 | 번호와 연결선이 있는3단계 레일 |
| 기존 이미지 명세 보존 / 테스트 명령 위치 / 성능 측정 기준 | 변경 전 측정 / 조사·계획·변경 판단 / 테스트·동일 조건 비교 |
| 여러 작업의 기본 안내 | SKILL.md 후보, 필요한 작업에 재사용 |

하단은 다음 요청에도 이 순서를 매번 적어야 할지 묻는다.
파일 배치를 배타적인 제품 규칙으로 오해하지 않도록 “역할에 따른 배치 예 · AGENTS.md에도 절차를 둘 수 있음”을 남겼다.
문서와 레일 사이에 대체·진화 화살표를 넣지 않는다. native 편집 가능한 비교 그림이다.
초안 렌더에서 하단 간격을 확인하고 요청/그림/설명 위치를 조정해 질문과 Footer 여백을 확보했다.

## 시간·앞뒤 연결·Notes

S58 적용 지침 확인 → S59 기준/수행 방법 비교 → S60 ACT3 표지 → S61 실제 반복 요청.
S62의 실행 시점/판단, S63의 목표·기준·방법 결합, S64의 Skill 선택 이유를 유지한다.
S59는 역할 구분과 재사용 후보까지만 안내하며 실제 Skill 발견·호출을 앞당기지 않는다.

Transition0–4분은 요청/질문0.75, 문서1, 레일1, 후보 배치·반복 질문1.25다.
Q&A4–9:40 뒤 마지막20초에 기존 전환을 이어간다.
총10분=Transition4+Q&A6이며 Lecture/Demo/실습을 추가하지 않는다.
Markdown/내장 Notes의 제목·질문·설명 순서·출처/경계·Fallback을 정렬했다.

## 근거 범위

화면은 기존 성능 사례를 요약한 교육용 모델이며 새 Prompt 실행·실제 UI·Trace·성과 수치가 아니다.
기존 TRIAL-006/007의 절차 반복과 환경 영향에 따른 귀속 한계를 유지한다.
관찰된 반복 기록은 S61에서 확인하고 제품 가용성·암묵 호출·자동 준수·Skill 우월성·
토큰 절감·Harness 단독 효과를 새로 주장하지 않는다.

Project Context는 이 장에서 프로젝트 기준/안내라는 역할을 가리킨다.
넓은 모델 입력 Context에는 Workflow 지침도 포함된다. AGENTS.md에도 절차를 쓸 수 있고
Skill에도 참고 지식을 담을 수 있다. 공식 설명은 다음 Notes 출처로 연결했다.
[OpenAI AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md),
[OpenAI Build skills](https://learn.chatgpt.com/docs/build-skills), checked2026-11-02.

## 검증

- Full120장과 ACT2 22장을1920×1080으로 렌더링했다(개별 PNG142개).
- S59 개별 화면, S58→S59→S60→S61 연결과 ACT2 montage를 검토했다.
  이번 변경에서 잘림·겹침·잘못 연결된 선을 발견하지 않았다.
- 다른119장 화면은 이전과 픽셀이 같다. Full/ACT2 22장과 S59 source/final 화면이 일치한다.
- Full/ACT2 각각 S59 slide XML과 Notes XML만 바뀌었다. 미디어·관계·표·차트·워크북·
  Theme/Layout 등 다른 part는 바이트가 같다. 다른5개 ACT PPT도 바이트가 같다.
- 120개19필드 Notes와142개 내장 Notes를 대조했다. S59 외119개 Notes는 같다.
- 120장·417분, ACT 장수14/23/22/26/20/15와 ACT 시간42/64/90/96/85/40을 유지한다.
- 전체 Mode Lecture186/Demo49/Case105/Reflection22/Transition23/Q&A32와 장별 배정은 같다.
- 기존 T04-A,12Templates/28Variants와 Slide/Section/Beat/Demo/Trial/State/Claim ID를 유지한다.
- 패키지 무결성·16:9·layout finding0·first-party import를 통과했다. S59 관련 경고는 없다.
  기존 S04 연결선2건/S54 표 추정 여유0.01inch 경고는 그대로다.
- 44개 정적 Fallback 역할·분류·경로를 유지하고 현재 원본 해시/전달 문서를 맞췄다.

로컬 렌더는 Malgun Gothic/Consolas를 Apple SD Gothic Neo/Menlo로 대체한다.
Windows PowerPoint·실제 발표PC/교육장·제품/계정·실측 리허설은 UNVERIFIED다.
이번 변경에서 새 P0/P1 문제를 발견하지 않았다. 실제 투사 가독성·운영은 별도 Gate다.
Demo 저장소·Sites·발표 묶음을 변경하지 않았으며 새 Trial·Skill 실행·리허설을 하지 않았다.

## 산출물

[수정 S59](../preview/full/S59.png), [통합 PPT](../AI_Dev_Training_Full.pptx),
[ACT2 PPT](../ACT_2.pptx), [ACT2 Notes](../notes/ACT_2_NOTES.md),
[설계](../../plan/S59_CONTEXT_WORKFLOW.md), [Map](../../plan/SLIDE_MAP.md),
[Claim Freeze](../../plan/CLAIM_FREEZE.md), [Decision](../../plan/DECISIONS.md),
[현재 파일 식별자](FINAL_HANDOFF.md).
