# S66 — 큰 Prompt 창과 하단 출처 표기 정리

Decision: DEC-0137. Date:2026-11-03. Baseline:`00e9d54`.

현재 S66 “이번 요청에 사용할 Skill을 지정한다”만 수정한다. S68의 검토는 삭제 승인이 아니며 이번 작업에서 변경하지 않는다.
114장·392분, Slide ID·Title·Primary Role·Section·Story Beat·Demo2분·근거 범위를 유지한다.

## 요청 영역

S41과 같은 macOS풍 요청 창으로 만든다. 좌측 상단 신호등3개, “작업 요청” 헤더,
둥근 테두리, 보내기 control을 사용하고 실제 요청의 $graypipe-performance 호출과 번역 요약4줄을 그대로 둔다.
큰 요청 영역 안에서 Skill 이름과 이번 목표·보존 조건이 먼저 읽히게 한다.
UI 형태로 꾸민 역사적 요청 기록 도식이며 실제 제품 실행 Screenshot이나 현재 Codex Desktop UI를 검증한 화면이 아니다.

## 하단 문구와 근거

“Codex CLI 0.154.0 기록”만 화면에서 제거하고 M 연계는 유지한다. 새 대체 footer를 추가하지 않는다.
CLI 0.154.0·성공한 실제 trace·번역/재구성 구분·현재 제품 제한은 S66 Notes의 원래 Evidence/Claim Boundary에 보존한다.
Prompt의 내용, 현재 제품 동작에 대한 주장, 암묵 호출/자동 준수/Skill 효과의 해석 범위는 바꾸지 않는다.

## 정렬과 검증

[Map](SLIDE_MAP.md)의 S66 시각 설명과 footer, ACT3/FULL Notes의 같은 S66 운영 cue를 정렬한다.
렌더의 호출/요약4줄·창 테두리·control·잘림/겹침·하단 삭제·M 연계를 대조한다.
실제 평가 기록은 production/evaluation/S66_PROMPT_WINDOW.md에 둔다. 현재 콘텐츠 정렬을 실제 렌더 검증으로 취급하지 않는다.
새 실행·Trial·실측·제품 조사나 Demo 저장소 변경은 없다. Windows·교육장·제품/계정·실측 리허설은 UNVERIFIED다.
