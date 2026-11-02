# S47 지침 누락·그럴듯한 오답 주의

Decision: DEC-0124. Date:2026-11-02. Baseline:`06b6462`.
Status: LOCAL RENDER AND STRUCTURE VERIFIED.

## 수정

제목을 “지침을 놓쳐도 답은 그럴듯할 수 있다”로 바꿨다.
왼쪽 명세와 너비6/crop 2 5 요청은 유지하고, 오른쪽을 “그럴듯한 오답 예시”로 구성했다.
명세대로 해석했다는 단정 아래 열2·3·4·5와 폭4를 보여준다. 제외해야 할5, 잘못된 폭4,
“놓친 조건: 끝 열 제외”를 빨간색으로 강조한다. 올바른 기준 열2·3·4/폭3도 함께 둔다.
하단 메시지는 “그럴듯한 답도, 지침·근거와 대조한다.”다.

S46의 정보 활용 질문을 받아, 빠진 조건과 답의 단정을 직접 확인하는 장이다.
S48은 상세 명세에 도달할 위치 안내로 이어진다. S46/S48 화면·Notes와 나머지119장은 같다.
S47 Notes/Map/설계/Claim Freeze를 이 주의 메시지에 맞췄다.

## 근거 범위

오답은 조건 누락을 가정한 교육용 구성이다. 실제 Agent가 이 답을 냈거나 지침을
내부에서 잊었음을 관찰한 결과가 아니다. 기존 Trial·제품 성능·실패율을 새로 주장하지 않는다.
S46의 연구는 당시 모델·과제의 근거 위치 조건에 한정한다. 이 논문이 지침 누락→
할루시네이션 인과나 현재 Codex를 검증했다고 설명하지 않는다.

지침 미반영과 그럴듯하지만 사실과 다른 주장은 구분하되 함께 주의한다.
OpenAI의 용어 설명은 Notes/참고 문서에서 정의 범위로만 사용한다. 모델별 수치는 차용하지 않는다.
[범위와 일차 출처](../../references/research/context-use-and-plausible-errors.md)를 따른다.
기존 코드 탐색 질문·RepoQA·실제 State/Trial과 S41 별도 사용자 데모9개/역사적11개 구분은 유지한다.

## 검증

- Full120장과 ACT2 22장을1920×1080으로 렌더링했다.
- S47 개별 화면, S46→S47→S48 연결과 ACT2 montage를 검토했다.
- 새 잘림·겹침을 발견하지 않았다. 다른119장 화면은 이전 판본과 픽셀이 같다.
- Full/ACT2 22개 화면과 S47 source/final 렌더가 각각 일치한다.
- 두 PPTX 각각 S47 slide XML 및 Notes XML만 바뀌었다. 나머지 native 표·차트·
  이미지·워크북·관계·Theme/Layout는 바이트가 같다.
- 다른5개 ACT PPT 및119개 Notes는 그대로다.120개19필드 Notes와142개 내장 Notes를 대조했다.
- 120장·417분, ACT 시간42/64/90/96/85/40, 장수14/23/22/26/20/15를 유지한다.
- Mode Lecture186/Demo49/Case105/Reflection22/Transition23/Q&A32와 S47 Lecture4분을 유지한다.
- 기존 T03-C,12Templates/28Variants와 모든 Slide/Beat/Section/Demo/Trial/State/Claim ID를 보존한다.
- 패키지 무결성·16:9·layout finding0·first-party import를 통과했다.
- 44개 정적 Fallback의 역할·분류·경로를 유지하고 현재 전달 해시를 맞췄다.

Native text/shape와 기존 글꼴·색·Safe Margin·M 표시를 사용한다.
로컬 렌더는 Malgun Gothic/Consolas를 Apple SD Gothic Neo/Menlo로 대체한다.
Windows PowerPoint·실제 발표PC/교육장·제품/계정·실측 리허설은 UNVERIFIED다.
이번 수정에서 새 P0/P1 문제를 발견하지 않았다. 실제 투사 가독성과 운영은 별도 Gate다.
Demo 저장소·Sites·발표 묶음은 변경하지 않았고 새 Trial도 실행하지 않았다.

## 산출물

[수정 S47](../preview/full/S47.png), [통합 PPT](../AI_Dev_Training_Full.pptx),
[ACT2 PPT](../ACT_2.pptx), [ACT2 Notes](../notes/ACT_2_NOTES.md),
[설계](../../plan/S47_CONTEXT_USE_CHECK.md), [Map](../../plan/SLIDE_MAP.md),
[Claim Freeze](../../plan/CLAIM_FREEZE.md), [Decision](../../plan/DECISIONS.md),
[현재 파일 식별자](FINAL_HANDOFF.md).
