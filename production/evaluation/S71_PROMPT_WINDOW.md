# S71 — 조사 Agent 요청창과 두 하단 문구 정리

Decision: DEC-0139. Date:2026-11-03. Baseline:`4651019`.
Status: LOCAL RENDER AND STRUCTURE VERIFIED.

## 수정

S71 왼쪽 생성 요청만 S66과 같은 macOS풍 둥근 창·상단43px·신호등3개·보내기 control로 맞췄다.
기존 요청4줄, 오른쪽 설정 파일 도식, 아래 명시적 사용 요청은 그대로다.
S71의 “설정·사용 예시 · 일회성 분담은 요청, 반복 역할은 설정으로 재사용”와
S72의 “이 작업에서는 역할 분리를 보류”만 화면에서 삭제했다. M 연계는 그대로다.
S66의 기존 요청창과 다른111장의 화면은 바꾸지 않았다.

## 근거·Notes

113장·389분, 모든 ID·Title·역할·Section/Beat·Template·장별 시간/Mode를 유지했다.
S71은 Lecture2분, S72는 Lecture1+Demo2+Q&A1분이다.
S71은 공식 안내를 각색한 설정·사용 예시이며 실제 Screenshot·Agent 생성/분담 실행 기록이 아니다.
S72는 보존된 실제 작업의 판단을 재구성한 도식이며 Subagent 비교 실험은 없다.
화면에서 삭제한 문구의 의미, 기존 출처와 Claim Boundary를 ACT3/FULL Notes에 보존했다.
Notes113개의19필드·ACT/FULL 본문 일치와 두 최종 PPT의 내장 Notes131개를 대조했다.

## 검증

최종 통합113장과 ACT3 18장, 총131개 PNG를1920×1080으로 렌더링했다.
S71·S72를 원본과 나란히 대조했다. 창 안의4줄과 전송 버튼이 겹치지 않으며 우측/하단 도식을 가리지 않는다.
지정한 창/하단 영역 밖의 픽셀은 같고, 다른111장은 전체 픽셀이 같다.
Full/ACT3의18장 렌더가 같고 나머지5개 ACT PPT는 이전 파일과 바이트 단위로 같다.
2개 PPTX의 패키지·16:9·글꼴 정책·native 표/차트·first-party import와 원본 기준 OOXML 검사를 통과했다.
Layout finding은0건이며 기존 이미지·차트값은 그대로다.
43개 정적 Fallback의 번호·역할·분류를 유지하고 변경 PNG와 Full/Notes/montage 해시를 갱신했다.

로컬 렌더는 Apple SD Gothic Neo/Menlo를 Malgun Gothic/Consolas의 대체로 사용했다.
Windows PowerPoint·교육장·제품/계정·실측 리허설은 UNVERIFIED다.
새 Trial·실측·제품 실행은 없으며 Demo 저장소·Sites·발표 묶음은 변경하지 않았다.

## 산출물

[통합 PPT](../AI_Dev_Training_Full.pptx), [ACT3 PPT](../ACT_3.pptx),
[S71](../preview/full/S71.png), [S72](../preview/full/S72.png),
[현재 Map](../../plan/SLIDE_MAP.md), [범위](../../plan/S71_PROMPT_WINDOW.md),
[Notes](../notes/ACT_3_NOTES.md), [검증 요약](S71_PROMPT_WINDOW_VALIDATION.json).
