# ACT0 — Context 수집 방식 연결 수정 결과

DEC-0185 · 2026-11-05 · 기준판 `455f261` · Status: PASS (local).

## 화면과 이야기

| Slide | 역할과 실제 반영 |
|---|---|
| S06 | 직접 자료를 첨부하는 대화 방식으로 새로 구성했다. 프로젝트 폴더→사람의 선택·첨부→Mac 스타일 “조사 요청” 창이며 그 밖의 파일은 대화 밖에 남는다. 이전 GoogleTest 가상 화면은 제외했다. |
| S07 | 기존 폭2/폭3·포함 값 비교를 보존하고 지정 footer만 삭제했다. 앞 장 Chatbot 요청의 실행 결과로 설명하지 않는다. |
| S08 | 테스트·명세·구현의 실제 자료 위치와 관계를 native 파일 아이콘으로 보여준다. 기존 호출 관계는 따로 유지하고 자료를 찾아 연결해야 한다는 결론으로 회수했다. |
| S09 | 원래 임시 폴더/읽기 전용 권한 도식을 유지했다. 코드 밖의 실행 로그·권한도 필요하다는 문장으로 연결했다. |
| S10 | 프로젝트 파일3개와 실행 환경2개를 구분해 모으고 누가 찾아 전달할지 질문한다. Context 정의를 반복하는 대신 자료 수집의 필요를 드러낸다. |
| S11 | 기존 ChatGPT UI·삽화와 다섯 자료·배치를 보존한다. 사람의 찾기→연결→첨부를 보여준다. |
| S12 | 같은 자료·배치에서 Agent의 허용된 직접 조사로 주체를 바꾼다. 원래 실제 CLI 기록으로 조사 일부를 맡긴 이점을 회수한다. |
| S107 | 지정 footer “공유는 선택”과 보조 문구 “출처·검토·갱신 책임도 함께”를 삭제했다. A–E 행동·확인 근거·표식 정렬은 보존했다. |

S11/S12의 처음 시안에서 긴 제목이 우측 삽화에 가려지는 것을 발견했다.
뜻을 유지해 각각 “Chatbot에 줄 자료는 사람이 모은다”, “Agent는 프로젝트
폴더에서 직접 조사한다”로 줄여 다시 렌더링했다. 다른 본문·삽화 크기·위치를
불필요하게 바꾸지 않았다. 새 슬라이드·새 이미지·제품 실행 화면은 만들지 않았다.
S06은 기존 사람 아이콘을 재사용하고, 폴더·파일·권한·요청창은 native 도식이다.

## 근거 범위

S06은 직접 프로젝트 자료를 첨부하는 방식의 가정이다. Chatbot의 모든 기능·
도구·사전 지식을 규정하거나 실제 입력·응답·비교 실험을 보여주는 장이 아니다.
S07–S09의 Crop·실행 제한은 원래 TRIAL-001의 Python CLI 근거다. 이를 새
Chatbot 요청의 결과로 귀속하지 않는다. S08의 자료 위치는 STATE-00의
README.md·tests/test_transform.py·src/graypipe/transform.py를 읽기 전용으로
확인했다. README에 이미 있던 결함 안내와 자료 관계/호출 관계/실제 접근 순서의
구분도 보존한다. 환경 오류는 별도 실행 제한이며 Agent 성능의 증거가 아니다.

원래 실제 Agent 요청·관찰·코드 미수정·권한 미해결·테스트 집계는 S12 Notes와
기존 DEMO_MATRIX에 남는다. S06의 이전 전체 Notes는 기획의 보존 구간에도
유지했다. Agent에게 자료 수집·연결 일부를 맡길 수 있다는 설명이며 답변 품질·
시간·토큰 절감·반복성·현재 Desktop·권한 확대/복구를 입증한 결과가 아니다.

## 문서와 운영

S05–S13/S107의 Notes10개와 공식 Map을 정렬했다. S05는 직접 첨부 방식으로
들어가고 S13은 S12에서 회수한 실제 Agent 조사에서 기존 Codex 진입 안내로
이어진다. Claim Freeze·Demo 범위·runbook·요청창 조사도 맞췄다. S107의
공유 비강제·검토 책임은 Notes에 유지한다. 슬라이드 번호·Beat/Section·Demo ID와
Template 배정은 유지하며 원래 Trial·State·Git Tag를 바꾸지 않는다.

## 검증

- 최종 Full111장+ACT0 14장+ACT5 15장, 총140개 렌더와 내장 Notes를19필드 Markdown에 대조했다.
- 변경8장의 최종 개별 화면과 ACT0 전체 Montage에서 S05→S06→S07–S10→S11/S12→S13/S14 흐름을 확인했다. 새 잘림·겹침을 발견하지 않았다. 실제 발표 시간 적합성은 리허설 전 미검증이다.
- 다른103장 화면은 기준판과 같다. S07은 삭제한 footer 밖, S107은 삭제한 두 문구 밖 픽셀이 같다. ACT0/ACT5의 해당 장은 Full과 같다.
- S11/S12 기존 삽화·UI의 원본 bytes·위치·crop을 보존했다. S06에서 제외한 GoogleTest 자산을 포함해 원래 assets/prototype 파일은 그대로다. M 연계 위치도 보존했다.
- PPTX 패키지·재가져오기·16:9·폰트 정책·레이아웃 검사를 통과했다. Full의 기존 S04/S54/S79 경고4건과 ACT0 S04 경고2건은 동일하고 ACT5는0건이다. 새 레이아웃 경고는 없다.
- native 표 S54/S81/S85와 S69의 C++ 차트·수치를 보존했다. ACT1/2/3/4 PPT는 변경하지 않았다.
- 전체111장·372분, ACT별42/64/90/64/71/41분과 Mode Lecture170/Demo44/Case95/Reflection17/Transition21/Q&A25분을 유지한다. S06–S12는19분, S107은4분이다. 기존 Demo8분은 S07/S08 각4분이다.
- 새 Trial·테스트/benchmark 실행, Demo Repository·실험 코드/원시 자료·Sites·발표 묶음 변경은 없다.

P0/P1: 이번 변경에서 새로 발견한 문제 없음.
Windows PowerPoint·발표 PC/교육장·현재 제품/계정·실측 리허설은 UNVERIFIED다.

[기획·이전 S06 Notes 보존](../../plan/ACT0_CONTEXT_COLLECTION_FLOW.md) ·
[기계 대조 결과](ACT0_CONTEXT_COLLECTION_VALIDATION.json) ·
[S06](../preview/full/S06.png) · [S08](../preview/full/S08.png) ·
[S11](../preview/full/S11.png) · [S12](../preview/full/S12.png) ·
[ACT0 미리보기](../preview/act0/montage.png) · [ACT0 Notes](../notes/ACT_0_NOTES.md).
