# S65 — Skill 근거를 세 단계로 분리

Decision: DEC-0130. Date:2026-11-02. Baseline:`4640091`.

## 승인 범위

이전 S65 한 장을3장으로 나누되 기존 Demo5분과 앞뒤 흐름·근거를 보존한다.
현재 S64에서 필요한 작업에만 Skill을 선택하는 이유를 회수한다.
S65 목록 발견 → S66 요청의 명시 호출 → S67 전체 지침 본문 포함 → S68 실제 수행 기록 대조다.
현재122장·417분이며 ACT3는28장·96분이다. 이전 S66 이후 번호는+2한다.

## 세 장의 역할과 시각 설계

| Slide | 역할 | 화면의 핵심 | 시간 |
|---|---|---|---:|
| S65 | 사용할 방법을 찾음 | 밝기 통계 성능 조사라는 한 줄 목표, /skills, graypipe-performance와 잘린 설명 | Demo1분 |
| S66 | 이번 요청에 사용을 지정 | 큰 요청 영역의 $graypipe-performance, 목표·제약·허용 범위·보고 조건 | Demo2분 |
| S67 | 지침이 전달됐는지 확인 | 같은 실행의 Skill 이름·경로·전체 본문 포함 사실, 실제 수행의 다음 질문 | Demo2분 |

S65는 영어 설명을 임의로 복원하거나 경로가 목록에 보였다고 표현하지 않는다.
S66의 한글은 실제 요청의 번역 요약이다. 임시 workspace, 시간/할당량 개선의 근거 조사,
기존 결과6항목 보존, 해당 경로의 변경, trade-off/no-change 보고 조건을 유지한다.
S67은 이름·경로·전체 본문 포함을 큰 근거 프레임으로 요약한다. 지침 전문·절차·테스트 결과를 나열하지 않는다.
새 load 이벤트나 제품 UI를 만들지 않는다. 기본은 실제 기록의 재구성이고 Live/Hybrid는 미활성이다.
기존16:9·색상·글꼴·Safe Margin·native text/shape·T07-A를 유지한다.

## 원자료와 근거 경계

동일한 TRIAL-008/DEC-0017/BEAT-021을 사용한다. 새 Trial·기능 실험·Demo 실행은 없다.
보존된 실제 요청은 다음과 같다.

```text
$graypipe-performance
In a disposable trial workspace, investigate whether `image_statistics` has
an evidence-supported runtime or allocation improvement. Preserve its current
six-field behavior and limit any change to this path; report trade-offs or a
no-change result when that is what the evidence supports.
```

출처는 [DEMO_MATRIX](DEMO_MATRIX.md)의 TRIAL-008 Task Prompt/Skill Discovery/Invocation/Load Evidence다.
성공한 기록은 Codex CLI0.154.0/gpt-5.6-sol high이며 앞선 계정의 모델 거절과 구분한다.
목록은 이름/설명 일부, 요청은 명시 호출, trace는 같은 이름·경로·전체 본문 포함의 근거다.
별도의 load UI 이벤트, 암묵 호출, 현재 Desktop 동작, 모든 지침 준수·단독 효과·우월성·토큰 절감은 입증하지 않는다.
전역 Harness 동시 영향도 배제하지 않는다. 실제 지침 수행과 후보/benchmark 결과는 S68 이후에 남긴다.
OBSERVED_PRODUCT / FROZEN WITH SCOPE / REQUIRES PRODUCT CHECK를 유지한다.

## Notes와 운영

S65: 작업/앞 장 회수20초, 목록30초, 요청 전환10초.
S66: 이름30초, 목표/조건50초, 근거 구분20초, 다음 기록20초.
S67: 이름/위치40초, 본문 포함40초, 범위20초, 실제 수행 질문20초.
총5분은 기존 DEMO-03의 일부이고 뒤 S68 Demo3분과 합쳐 기존8Demo분을 유지한다.
다른 ACT/장별 시간·Mode는 바꾸지 않는다.19필드 Notes를 각 장에 적용한다.
S64 Notes의 마지막 연결과 S68 Notes의 본문 포함 참조를 새 구조에 맞춘다.

## 번호와 소스 정책

[122장 번호 이행](SLIDE_ID_MIGRATION_122_DEC0130.md)을 따른다.
retained 소스/JSON/과거 평가/기존 이미지 파일명은 이전 판본을 유지한다.
skill-evidence-split-122.mjs를 모든 기존 adapter 뒤에 한 번만 적용한다.
현재 Preview·Notes·Map·Template Map·전달/Fallback 경로는 현재 번호를 사용한다.
Story/Beat/Section/Demo/Trial/State/Claim ID는 바꾸지 않는다.
기존 S61/S70의 사용자 지정5문구 삭제와 S64의 A/B/C 비교를 보존한다.

## 검증과 Gate

통합122장과 영향 ACT의 실제 최종 패키지를 렌더링한다. 순서·내장 Notes·122개19필드·
시간/Mode·native 표/차트·기존 이미지/수치·S64→S65→S66→S67→S68 연결을 대조한다.
Windows PowerPoint·발표PC/교육장·제품/계정·실측 리허설은 UNVERIFIED로 유지한다.
Demo Repository·Sites·발표 묶음은 변경하지 않는다.
