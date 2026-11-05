# 발표 화면의 교육용 보조 문구 정리

DEC-0184 · 2026-11-05 · 기준판 `fbc2c08` · Status: PASS (local).

## 반영 결과

전체111장 화면·표·차트와 공통 master/layout의 표시 text를 전수 검색했다.
교육용 제작 설명12곳을10개 Slide에서 정리했다. 화면의 해당 표시는0곳이다.
요청창·머리말8곳은 짧게 바꾸고 footer4개는 삭제했다.

| Slide | 화면 변경 |
|---|---|
| S16/S17/S18 | Mac 요청창 제목을 “요청 입력”으로 단순화. |
| S21 | 실제 요청 발췌·번역과 다섯 항목 주석을 설명하는 보조 footer 삭제. 실제 발췌 표기·요청 원문·주석은 그대로. |
| S27 | 교육용 요청 비교·실제 Trial이 아님을 설명하는 보조 footer 삭제. 두 검증 요청 본문은 그대로. |
| S36 | 창 제목을 “작업 요청”으로 바꾸고 지정 footer 삭제. |
| S37 | 창 제목을 “앞 장과 같은 요청”으로 바꾸고 지정 footer 삭제. |
| S70 | 머리말을 “ACT 3 · 독립 조사와 결과 통합”으로 단순화. |
| S77 | 머리말을 “ACT 3 → ACT 4 · 점심 전후의 대화”로 단순화. |
| S103 | 머리말을 “ACT 5 · 재평가 1/3 · 공개 사례와 구조 변화”로 단순화. |

[12곳의 문구 전후 목록](../../plan/AUDIENCE_EXAMPLE_LABEL_CLEANUP.md)을 따른다.
문구가 있는 native 객체만 수정·삭제했으며 다른 위치로 옮기거나 이미지로
덮지 않았다. 모든 본문·도식·화살표·수치·원래 이미지·Mac 창 모양·글꼴·M 연계를
보존했다. 직전 C++ 실험 반영은 별도 commit `fbc2c08`에 기록했다.

## 근거·Notes

모든 Markdown Notes와19필드 내용은 기준판과 같다. 실제 요청·관찰과 교육용
가정·재구성의 구분, 출처·Claim Boundary를 그대로 보존했다. 표시 삭제는 새
실행·실제 Chatbot 비교·Subagent 실행·성능 또는 제품 검증을 뜻하지 않는다.
Slide Map의 Core Message/Evidence Type/Claim Status와 시간·Mode·ID·Template은
그대로 두고 화면 지침·Decision 연결만 정렬했다. 기존 ACT0 흐름 기획은 이번
표시 정리에 적용하지 않았다. 새 Trial·Demo 저장소·Sites·묶음 변경은 없다.

## 검증

- 최종 Full111장+ACT1 23장+ACT3 18장+ACT5 15장, 총167장 렌더와 내장 Notes를 대조했다. 각 장19필드가 Markdown과 일치한다.
- 바뀐10장 각각을 실제 크기로 시각 검토했다. 요청창 제목·머리말이 한 줄로 읽히며, footer 삭제 후 본문·M 연계가 그대로다. 새 잘림·겹침을 발견하지 않았다.
- 나머지101장 화면은 기준판과 같고, 변경10장도 지정12개 영역 밖 픽셀이 같다. ACT별 화면은 통합본의 해당 장과 같다.
- PPTX 패키지·재가져오기·16:9·폰트 정책·레이아웃 검사를 통과했다. Full의 기존 S04/S54/S79 경고4건은 같고 ACT1/3/5는 경고0건이다. 새 구조·레이아웃 경고는 없다.
- 모든 이미지 원본·위치와 M footer를 보존했다. native 표 S54/S81/S85, S69의 C++ 차트·내장 값0.071/1.216ms를 보존했다.
- 전체111장·372분, ACT별42/64/90/64/71/41분과 Mode Lecture170/Demo44/Case95/Reflection17/Transition21/Q&A25분을 유지한다.
- ACT0/2/4 PPT와 모든 Notes, 실험 소스·원시 자료, Demo Repository는 변경하지 않았다.

P0/P1: 이번 변경에서 새로 발견한 문제 없음.
Windows PowerPoint·교육장·제품/계정·실측 리허설은 UNVERIFIED다.

[기계 대조 결과](AUDIENCE_EXAMPLE_LABEL_VALIDATION.json) ·
[S36](../preview/full/S36.png) · [S37](../preview/full/S37.png) ·
[통합 PPT](../AI_Dev_Training_Full.pptx) · [ACT1](../ACT_1.pptx) ·
[ACT3](../ACT_3.pptx) · [ACT5](../ACT_5.pptx).
