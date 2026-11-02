# S64 — 필요한 작업에만 Skill 선택

Decision: DEC-0128. Date:2026-11-02. Baseline:b76e635.

## 의도와 화면

같은 프로젝트의 작업이라도 같은 성능 조사 Skill이 모두 필요하지 않음을 보여준다.
S63에서 목표·기준·방법을 한 작업에 적용한 뒤 S64에서 방법의 재사용 범위를 비교한다.

| 요청 | 성능 조사 Skill 선택 | 화면 |
|---|---|---|
| A resize_nearest 성능 조사 | 공통 수행 방법 재사용 | Skill에서 A로 연결 |
| B normalize 성능 조사 | 공통 수행 방법 재사용 | 같은 Skill에서 B로 연결 |
| C README를 영어로 수정해줘. | 이 성능 조사 Skill은 쓰지 않음 | 선을 연결하지 않고 미사용 문구 표시 |

제목은 “같은 Skill도 필요한 작업에만 쓴다”. 공통 프로젝트 지침은 세 작업 모두 참고한다.
A/B는 이번 목표·허용 범위·보존 조건을 각각 정한다. Skill 내용은 기존 측정·조사·계획/변경 판단·
검증/동일 측정/보고의 요약이다. C의 문서 언어 변경에는 성능 측정 절차를 요구하지 않는다.
하단은 “반복 절차는 한 곳에 두고, 필요한 작업에만 연결한다”로 회수한다.
동일3px 선/작은 native 화살촉, 기존 Light Engineering Workbench·16:9·편집 가능한 text/shape를 유지한다.

## AGENTS.md와 구분하는 이유

AGENTS.md에도 절차를 쓸 수 있다. 한 곳에서 관리한다는 점만으로 Skill을 정당화하지 않는다.
여기서는 특정 작업 종류에 선택해 쓸 재사용 단위를 만들고자 Skill을 택한다.
짧고 널리 적용되는 절차까지 모두 Skill로 옮길 필요는 없다. 프로젝트 공통 기준과 필요한 검토는 C에도 남는다.
공식 자료의 이름/설명 탐색·명시 선택·선택 후 본문 로딩은 설계 배경이며 현재 발표 계정의 실증이 아니다.

- [OpenAI Build skills](https://learn.chatgpt.com/docs/build-skills)
- [OpenAI AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md)

2026-11-02 확인. 기존 DEC-0017의 선택과 TRIAL-006/007의 반복 관찰, TRIAL-008의 후속 CLI 기록은 유지한다.

## 근거 경계

A/B는 기존 실제 성능 Task를 요약한 교육용 요청이며 두 작업에서 이 Skill을 실제 호출했다는 뜻이 아니다.
C는 사용자가 제안한 비교용 요청으로 새 Trial·실제 미호출 관찰이 아니다. 자동 선택·지침 준수·
Skill 우월성·토큰 절감·속도 개선·Harness 단독 효과·현재 Desktop 동작을 증명하지 않는다.
성능 조사 Skill이 불필요하다는 말은 모든 Skill·프로젝트 지침·변경 검증이 불필요하다는 뜻이 아니다.
설계/선택, 본문 포함, 실제 수행, 측정 성과를 분리한다. TEACHING_MODEL / REQUIRES PRODUCT CHECK를 유지한다.

## 시간과 후속 연결

S64 Lecture4분: 공통 지침/전 장 회수0:40, A/B1:00, C1:00, 선택 이유0:45, S65 연결0:35.
S65에서 실제 CLI0.154.0 발견·명시 호출·본문 포함을 확인한다. S66은 지침과 실제 수행 기록을 비교한다.
120장·417분, ACT3 26장·96분, 모든 Slide/Section/Beat/Demo/Trial/State/Claim ID와 각 시간/Mode를 유지한다.
T05-A를 사용하며12Templates/28Variants를 바꾸지 않는다. 다른119장/Notes는 유지한다.

## 정렬·검증 범위

retained act3-continuity.mjs의 S53이 현행 S64다. 소스·footer·Map/Template Map·Notes·Claim/Decision·
Full/ACT3 PPT와 개별 PNG/montage·전달 식별자를 정렬한다. 기존 package의 S64 slide/Notes part만 교체한다.
전체 Full/ACT3를 렌더링하고 나머지119장·기존 Notes/미디어/표/차트/다른 ACT를 대조한다.
Windows·교육장·발표PC·제품/계정·실측 리허설은 UNVERIFIED다.
Demo Repository·Sites·발표 묶음은 변경하지 않는다. 새 Trial·Skill 실행·실제 리허설을 수행하지 않는다.
