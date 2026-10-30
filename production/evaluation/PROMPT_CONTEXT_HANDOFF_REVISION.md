# Prompt→Context 연결 보완 결과

Decision: DEC-0115. Date:2026-10-30. Baseline:`25a6d43`.

## Result

S36/S37을 Prompt Engineering에서 Context Engineering으로 넘어가는 전환으로
정리했다. S36의 화면·세 문장·문제 발견 역할은 유지한다. S37은 이번 목표와 공통
기준의 구분 뒤, 공통 기준을 프로젝트에서 관리하고 작업할 때 찾아 참고하게 할지 묻는다.
S39는 서로 다른 세 작업으로 범위를 넓히고 기준 변경을 여러 요청에 어떻게 반영할지 묻는다.

화면의 변경은 S37/S39 마지막 질문 두 곳이다. 글자 크기·상자 위치·제목·도식·그림·
State/Trial/Claim 경계는 같다. S36–S42 Notes와 해당 Map·기획 문서의 역할을 맞췄다.

| Slide | Role |
|---|---|
| S36 | 같은 crop 요청에서 다음에도 필요한 기준 발견 |
| S37 | 공통 기준의 관리 위치와 작업 시 참조 질문 |
| S38 | Context Engineering 관점 안내 |
| S39 | 서로 다른 세 작업에서도 공통 기준을 쓰는지 확인 |
| S40 | 실제 프로젝트 정보의 기록 위치·내용 |
| S41 | 기존 CLI 기록에서 지침을 활용한 관찰과 한계 |
| S42 | 관찰 뒤 Task Prompt/Project Context의 범위·수명 정리 |

S37의 질문은 “이 기준을 프로젝트에서 관리하고, 작업할 때 찾아 참고하게 할 수 없을까?”다.
S39는 “공통 기준이 바뀌면, 세 요청에 어떻게 반영할까?”다. 단순한 복사 입력의 수고에서
정보의 관리·제공 문제로 연결한다. S42는 앞 장의 문장 분류를 반복 시험하지 않고
실제 기록을 용어로 정리한다. 수행 절차·도구·환경의 구성은 기존 ACT3에 남긴다.

## Evidence / claim

S36/S37의 요청과 S39의 기준 변경 질문은 교육용 구성이다. 새 Trial, 실제 실패,
제품 동작, 자동 일치 보장 또는 측정 성과가 아니다. 이번 작업의 특수 조건은 요청에 남고
Prompt도 Context를 제공할 수 있다. 모든 반복 문장을 영구·전역 지침으로 바꾸지 않는다.

S40의 실제 STATE-01 기록과 S41의 TRIAL-003 활용 관찰을 분리한다. 실제 요청·지침·
실행 근거와 타 global Skill 영향·단독 인과성 미입증·현재 Desktop 미검증은 그대로다.
기록했다는 사실만으로 실제 참고·적용이나 모든 규칙의 강제 준수를 보장하지 않는다.
원본 DEMO_MATRIX.md, State/Trial, 실제 코드·테스트·benchmark 결과는 변경하지 않았다.

## Notes / planning alignment

S36–S42의7개 Notes를 운영 역할과 연결 질문에 맞췄다. 기존19필드와 배정을 유지한다.
S38 Notes의 오래된 전체420분은 현행417분으로 정정했다. S40 Map의 이전 Slide34
전환은 S41로, S42의 역전된 근거 구간은 S39–S41로 맞췄다. 실제 원문을 재작성하지 않았다.
현재 기획을 우선 표기하고 기존 상세 기획·Decision 이력을 보존했다. Template 배정·
12Templates/28Variants, 현재120개 Slide ID와 Story/Beat/Section/Demo/Claim ID는 같다.

## Validation

- 최종 Full120장·ACT1 23장·ACT2 22장의165PNG를1920×1080으로 렌더링했다.
- 구조·16:9·글꼴 정책·layout finding0·first-party import 검사를 통과했다.
- 변경 두 질문과 S36–S42를 개별 화면에서 확인하고 ACT1/ACT2 montage 흐름을 검토했다.
  새 잘림·겹침을 발견하지 않았다. 두 질문 외 픽셀은 같고 다른118장 화면도 같다.
- Source 렌더와 두 최종 화면이 같고, 전체120개 Full/ACT 화면이 일치한다.
  이번 변경 대상 외 ACT0/3/4/5의 원본 PPT와 Preview를 보존해 대조했다.
-120개19필드 Notes와 내장 Notes가 일치한다.113개 Notes는 그대로다.
- 각 PPT는 선언한 두 질문/일곱 Notes part만 바뀌었다. 나머지 part·이미지·native 표/
  차트·embedded workbook 바이트와 다른4개 ACT PPT는 같다.
-120장·417분, ACT42/64/90/96/85/40분, Lecture186/Demo49/Case105/Reflection22/
  Transition23/Q&A32분과 모든 장별 시간/Mode를 대조했다. S36/S37 합계9분도 같다.
- 기존44개 정적 Fallback의 역할·분류·경로를 유지하고 현재 해시를 맞췄다.

로컬 렌더는 Malgun Gothic/Consolas를 Apple SD Gothic Neo/Menlo로 대체했다.
Windows·발표PC·교육장·제품/계정·실측 리허설은 UNVERIFIED다. Demo 저장소·Sites·
발표 묶음은 변경하지 않았다. 실제 운영 검증을 완료 처리하지 않는다.

## Remaining items

P0: 이번 변경에서 발견하지 않음.
P1: 기존 사용자 Gate에서 실제 PC의 가독성과9분 Reflection/Transition/Q&A 운영 확인.
P2: 추가 변경 없음. 이번 기획을 새 제품·성과 주장으로 확대하지 않음.

## Artifacts

[통합 PPT](../AI_Dev_Training_Full.pptx), [ACT1](../ACT_1.pptx), [ACT2](../ACT_2.pptx),
[S37](../preview/full/S37.png), [S39](../preview/full/S39.png),
[ACT1 Notes](../notes/ACT_1_NOTES.md), [ACT2 Notes](../notes/ACT_2_NOTES.md),
[연결 기획](../../plan/ACT1_CONTEXT_HANDOFF.md), [현재 Map](../../plan/SLIDE_MAP.md).
