# S77 — 루프 선과 방향 화살촉 재디자인

Decision: DEC-0142. Date:2026-11-03. Baseline:`f298b5f`.
Status: LOCAL RENDER AND STRUCTURE VERIFIED.

## 수정

기존 넓고 채워진 반타원 화살표2개를 제거하고, 3.5px로 굵기가 일정한 열린 순환선2개로 바꿨다.
위쪽 teal 진행선과 아래 amber 복귀선의 모서리는 같은 반경으로 둥글게 이어진다.
작은 native 화살촉을 각 수평 구간의 중앙에 두고 위는 오른쪽, 아래는 왼쪽을 가리키게 했다.
카드 접점에는 큰 화살촉을 두지 않아 선이 조용히 연결된다.
두 열린 선은 editable custom path이며 화살촉은 같은 굵기의 native connector다.

기존 모든 문구·카드 위치·Mac 스타일 목표창·Harness 기반·조건 문구·M 연계는 그대로다.
특히 직전 S76의 공통 기준 비교도 그대로 유지한다. 새 개념·제품 사실·실행 기록을 추가하지 않았다.
기존 TEACHING_MODEL이며 무조건 반복·자동 실행·완료 보장을 뜻하지 않는다.

## Notes·배정

113장·389분, ACT3 18장·64분, S77 Transition2분, ACT4 20장·85분을 유지했다.
Slide ID·Title·역할·Section/Beat·Template·모든 시간/Mode·Evidence/Claim은 그대로다.
S77 Notes의 시각 cue만 목표창→위쪽 진행선→아래쪽 조건부 복귀→다음 ACT 순서로 정렬했다.
이전 DEC-0140의 기획·평가 기록은 보존했다. Notes113개의19필드와 ACT/FULL 본문,
두 최종 PPT의 내장 Notes131개를 대조했다.

## 렌더·검증

최종 통합113장과 ACT3 18장, 총131개 PNG를1920×1080으로 렌더링했다.
S77의 선 굵기·곡률·화살촉 크기/중앙 정렬·진행 방향·접점·여백을 검토했다.
제목·목표창·카드·조건 문구·Harness와 잘리거나 겹치는 부분을 발견하지 않았다.
텍스트는 전부 이전 판과 같고 픽셀 차이는 두 루프 영역에 한정된다. 다른112장의 화면은 픽셀 단위로 같다.
Full/ACT3의18장 렌더가 일치하고 나머지5개 ACT PPT는 이전 파일과 바이트 단위로 같다.
2개 PPTX의 패키지·16:9·글꼴 정책·native 표/차트·first-party import와 원본 기준 OOXML 검사를 통과했다.
Layout finding은0건이며 기존 이미지와 native 차트값을 유지했다.
43개 정적 Fallback의 역할·분류·번호를 유지하고 최신 Full/Notes/montage/PNG 해시를 정렬했다.

로컬 렌더는 Apple SD Gothic Neo/Menlo를 Malgun Gothic/Consolas의 대체로 사용했다.
Windows PowerPoint·교육장·제품/계정·실측 리허설은 UNVERIFIED다.
새 Trial·측정·제품 실행은 없으며 Demo 저장소·Sites·발표 묶음은 변경하지 않았다.

## 산출물

[통합 PPT](../AI_Dev_Training_Full.pptx), [ACT3 PPT](../ACT_3.pptx),
[S77](../preview/full/S77.png), [현재 Map](../../plan/SLIDE_MAP.md),
[범위](../../plan/S77_LOOP_REDESIGN.md), [Notes](../notes/ACT_3_NOTES.md),
[검증 요약](S77_LOOP_REDESIGN_VALIDATION.json).
