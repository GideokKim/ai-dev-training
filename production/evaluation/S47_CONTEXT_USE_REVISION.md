# S47 제공한 Context와 답변의 대응

Decision: DEC-0123. Date:2026-11-02. Baseline:`9dd1f2b`.
Status: LOCAL RENDER AND STRUCTURE VERIFIED.

## 수정과 연결

S47의 제목을 “내가 준 Context를 답에 제대로 반영했을까?”로 바꿨다.
왼쪽에는 시작 열 포함·끝 열 제외 명세와 너비6/crop 2 5 요청을 구분하고,
오른쪽에는 답변 예시의 포함 열2·3·4, 제외되는5, 출력 폭3을 보여준다.
같은 청록색으로 끝 열 제외 조건과 답의5 제외를 연결하고5−2=3도 대조한다.
하단은 “제공한 조건과 답의 결론을 직접 대조한다.” 한 문장이다.

S46은 화면의 정보 활용 질문을 S47로 넘기고, S48은 직접 제공했던 상세 명세를
필요한 작업에서 찾게 할 위치 안내로 이어진다. 두 장의 화면은 그대로이며
Map/Notes의 도입·마무리만 정렬했다. 기존 코드 탐색 세 질문과 RepoQA 서지·조건·
한계는 S47 Notes의 선택 참고 및 기존 참고 자료에 보존했다.

## 근거 경계

명세는 STATE-03 docs/image-contracts.md의 Crop 절을 요약했다.
너비6/crop 2 5와 답변은 교육용 구성이다. 실제 Agent 응답·TRIAL-005A/B 기록이나
새 Trial·테스트 결과가 아니다. “답변 예시”를 화면에 표시한다.
모델 내부 정보 활용의 인과, 현재 Codex 동작, Context/Routing 우월성, 토큰 절약,
성능 향상 또는 전체 코드 검증을 주장하지 않는다. 연구 범위도 확대하지 않는다.

S41 사용자 별도 실제 데모9개와 TRIAL-003 11개는 그대로 구분한다.
Demo 저장소·기존 State/Trial·Sites·발표 묶음은 변경하지 않았다.

## 렌더링과 Notes 검토

Full120장 및 ACT2 22장을1920×1080으로 렌더링했다. S46/S47/S48 개별 화면과
ACT2 montage로 연결을 확인하고, 전체120장 PNG를 이전 판본과 픽셀 대조했다.
S47에서 새 잘림·겹침을 발견하지 않았다.119개 다른 화면은 픽셀이 같다.
명세의18–21pt, 요청19.5pt, 열 번호28.5pt, 폭36pt와 기존36pt 제목을 유지한다.
Native text/shape와 기존 색·글꼴·Safe Margin·M 연계를 사용한다.
S47 답변 예시는 화면 이미지로 합성하지 않았다.

Notes는19필드와 S47 Lecture4분을 유지한다. S46의 마지막 질문, S47의 설명,
S48의 도입을 Full/ACT2 Markdown 및 PPT 내장 Notes에 맞췄다.
기존3개 코드 확인 질문과 RepoQA는 정규4분을 늘리지 않는 선택 참고다.
실제 리허설을 수행한 것은 아니다.

## 구조·배정 검증

- 120장·417분 및 ACT별 장수14/23/22/26/20/15를 유지한다.
- ACT 시간42/64/90/96/85/40분, Mode186/49/105/22/23/32분을 유지한다.
- S46 Lecture4분, S47 Lecture4분, S48 Lecture3분과 모든 ID·Mode를 보존한다.
- S47 T03-C와 전체 Template 배정을 유지한다.
- 두 패키지 각각 S47 slide XML 및 S46–S48 Notes XML3개만 바뀌었다.
- 기존 native 표·차트·미디어·워크북·관계·Theme/Layout는 바이트가 같다.
- 다른5개 ACT PPT, 나머지117개 Notes와119개 화면은 그대로다.
- 142개 내장 Notes와120개 Markdown Notes의19필드를 대조했다.
- Full/ACT2 22개 화면과 S47 source/final 화면이 각각 일치한다.
- 패키지 무결성·16:9·layout finding0·first-party import를 통과했다.
- 44개 정적 Fallback의 역할·분류·경로를 유지하고 현재 전달 해시를 정렬했다.

로컬 렌더는 Malgun Gothic/Consolas를 Apple SD Gothic Neo/Menlo로 대체한다.
Windows PowerPoint·실제 발표PC/교육장·제품/계정·실측 리허설은 UNVERIFIED다.
이번 수정에서 새 P0/P1 문제를 발견하지 않았다. 실제 투사 가독성과 운영은 별도 Gate다.

## 산출물

[수정 S47](../preview/full/S47.png), [통합 PPT](../AI_Dev_Training_Full.pptx),
[ACT2 PPT](../ACT_2.pptx), [ACT2 Notes](../notes/ACT_2_NOTES.md),
[설계](../../plan/S47_CONTEXT_USE_CHECK.md), [Map](../../plan/SLIDE_MAP.md),
[Claim Freeze](../../plan/CLAIM_FREEZE.md), [Decision](../../plan/DECISIONS.md),
[현재 파일 식별자](FINAL_HANDOFF.md).
