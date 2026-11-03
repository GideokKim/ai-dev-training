# S77 — 구현·검토 순환선 재디자인

Decision: DEC-0142. Date:2026-11-03. Baseline:`f298b5f`.

## 승인 범위

현재 S77의 넓고 납작한 채움형 반타원 화살표만 다시 디자인한다.
3.5px의 균일한 열린 선과 둥근 모서리로 순환 경로를 만들고 수평 중앙에 작은 native 방향 화살촉을 둔다.
상단은 teal·오른쪽 진행, 하단은 amber·왼쪽 조건부 복귀다. 카드 접점의 큰 화살촉을 제거한다.
상단 경로는 (589,286)에서 (629,246)·(952,246)을 거쳐 (992,286)으로 이어진다.
하단은 (992,390)에서 (952,430)·(629,430)을 거쳐 (589,390)으로 돌아온다.
기존 “문제가 남으면 수정·재검토”가 복귀 조건을 설명한다.

## 보존

모든 화면 문구·구현/검토 카드 좌표·macOS풍 목표창·Harness 기반·Title·M 연계를 유지한다.
현재 S76의 공통 기준 비교와 다른 슬라이드 화면은 바꾸지 않는다.
113장·389분, ACT3 18장·64분, S77 Transition2분과 ACT4 20장·85분은 그대로다.
Slide ID·Section/Beat·Template·Evidence Type·Claim Status·19Notes 필드를 유지한다.
실제 수행·자동 동작·무조건 반복·목표 달성 보장·새 Trial/측정/제품 검증을 뜻하지 않는다.
원래 Evidence/Source와 Claim Boundary는 Notes에 그대로 보존한다.
Demo 저장소·Sites·발표 묶음은 변경하지 않는다.

## 정렬·검증

[현재 Map](SLIDE_MAP.md)의 S77 Visual Concept과 ACT3/FULL Notes의 화면 cue만 정렬한다.
이전 DEC-0140의 기획·평가는 당시 이력으로 유지한다.
이 문서는 승인 범위이며 현재 렌더·검증 완료를 뜻하지 않는다.
현재 최종 PPT/PNG·내장 Notes 검증은 production/evaluation/S77_LOOP_REDESIGN.md에 별도 기록한다.
Windows·교육장·제품/계정·실측 리허설은 UNVERIFIED다.
