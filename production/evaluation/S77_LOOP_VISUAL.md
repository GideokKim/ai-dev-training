# S77 — 목표 요청창과 구현·검토 반복 시각화

Decision: DEC-0140. Date:2026-11-03. Baseline:`39650f0`.
Status: LOCAL RENDER AND STRUCTURE VERIFIED.

## 수정

S77의 목표 영역을 둥근 macOS풍 요청창으로 정리했다. 작은 신호등3개와 기존 “이번 목표” 헤더,
“목표 · 완료 기준” 문구를 유지했다. 구현에서 검토로 향하는 위쪽 teal 곡선 화살표와
검토에서 구현으로 돌아오는 아래 amber 곡선 화살표를 하나의 반복 경로로 읽게 했다.
각 화살표는 선과 머리가 이어지는 native editable custom path다.
기존 “문제가 남으면 수정·재검토”가 복귀 조건을 설명하며 무조건 반복하는 관계가 아니다.
기존 점선의 꺾인 선과 구현→검토 직선만 교체했다. Harness 기반과 나머지 모든 문구는 같다.

## 내용·근거·Notes

113장·389분, ACT3 18장·64분, S77 Transition2분과 ACT4 20장·85분을 유지했다.
Slide ID·Title·역할·Section/Beat·Template·모든 시간/Mode·Evidence/Claim 원문은 같다.
도식은 TEACHING_MODEL이며 실제 Screenshot·새 실행/반복 기록·자동 완료 보장이 아니다.
Harness의 실패나 교체를 Loop의 필수 전제로 삼지 않는다. 자세한 상태·모델·연구·중단 분기는 ACT4에 남긴다.
Notes는 목표창→진행 곡선→조건부 복귀→다음 ACT 순서로 시각 cue만 정렬했다.
113개 Notes의19필드와 ACT/FULL 본문, 두 최종 PPT의 내장 Notes131개를 대조했다.

## 검증

최종 통합113장과 ACT3 18장, 총131개 PNG를1920×1080으로 렌더링했다.
S77을 원본과 대조해 목표창·루프·조건 문구·Harness 관계와 잘림·겹침을 확인했다.
텍스트는 전부 원본과 같고 변경은 도식 영역에 한정한다. 다른112장의 화면은 픽셀 단위로 같다.
Full/ACT3의18장 렌더가 같고 나머지5개 ACT PPT는 이전 파일과 바이트 단위로 같다.
2개 PPTX의 패키지·16:9·글꼴 정책·native 표/차트·first-party import 및 원본 기준 OOXML 검사를 통과했다.
Layout finding은0건이며 기존 이미지·차트값을 보존했다. 두 곡선은 native custom geometry로 남는다.
43개 정적 Fallback의 번호·역할·분류를 유지하고 변경 PNG·Full/Notes/montage 해시를 정렬했다.

로컬 렌더는 Apple SD Gothic Neo/Menlo를 Malgun Gothic/Consolas의 대체로 사용했다.
Windows PowerPoint·교육장·제품/계정·실측 리허설은 UNVERIFIED다.
새 Trial·실측·제품 실행은 없으며 Demo 저장소·Sites·발표 묶음은 변경하지 않았다.

## 산출물

[통합 PPT](../AI_Dev_Training_Full.pptx), [ACT3 PPT](../ACT_3.pptx),
[S77](../preview/full/S77.png), [현재 Map](../../plan/SLIDE_MAP.md),
[범위](../../plan/S77_LOOP_VISUAL.md), [Notes](../notes/ACT_3_NOTES.md),
[검증 요약](S77_LOOP_VISUAL_VALIDATION.json).
