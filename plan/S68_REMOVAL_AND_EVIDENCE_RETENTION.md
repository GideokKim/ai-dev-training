# S68 — 본편 삭제와 근거 보존

Decision: DEC-0131. Date:2026-11-02. Baseline:`fa4e41f`.

## 승인과 목적

청중은 Demo 코드와 검증 환경을 미리 알지 못한다. 이전 S68은 작업 맥락이 충분히 설명되기 전에
statistics.py·측정3회·테스트1/1·11/11 등 상세 기록을 제시해 이해 부담을 더했다.
“요청한 과정과 실제 기록을 대조한다”는 원칙은 ACT1에 이미 있으므로 별도6분 장을 반복하지 않는다.
본편에서 그 장만 삭제하고 검증 원칙과 재현 가능한 근거는 Notes·참고 자료에 보존한다.

## 현재 흐름

S64 필요한 작업에만 Skill 선택 → S65 목록 발견 → S66 명시 요청 → S67 본문 포함 확인과 원칙 회수 →
S68 Skill 제작 팁 → S69 재사용할 절차/작업별 판단 → S70 작업 목적·후보 선택 → S71 실제 제품 결과다.
S67은 다음 장에서 상세 수행 대조를 보여주겠다고 예고하지 않는다.
화면은 “지침 포함과 실제 수행은 별도로 확인한다”로 끝내며 제작 팁으로 자연스럽게 넘어간다.
지침 포함을 실제 수행·정확성·Skill 단독 효과의 증거로 확대하지 않는다.

## 상세 근거 보존

[지침·행동 대응 참고 기록](../references/demo-evidence/skill-instruction-action-record.md)에 이전 S68의
전체 대응표와 실행 기록·Source·Claim Boundary·조건·수치를 유지한다. S67 Notes에도 보충 근거를 둔다.

보존할 세 대응:
- 변경 전 기준선 측정 ↔ 변경 전 benchmark3회 실행 출력·입력 지문·결과6항목 확인.
- 조건부 계획/허용 범위 변경 ↔ 변경 전 메시지·최종 diff·해당 함수 한 곳 변경.
- 테스트/동일 조건 측정 ↔ 함수1/1·전체11/11·변경 후3회·CLI·diff 기록.

“작업 또는 interface가 visible plan을 요구할 때”라는 계획 조건을 유지한다.
3회와11개는 관찰된 횟수/테스트 범위이며 Skill이 고정 요구한 값으로 바꾸지 않는다.
현재 발표 제품의 새 실행 결과·실제 UI 캡처·전체 지침 준수·독립 인과성으로 표현하지 않는다.
기존 TRIAL-008/DEC-0017/BEAT-021과 원자료를 그대로 보존하며 새 Trial을 하지 않는다.

## 시간·번호·제작 규칙

| ACT | Current slides | Count | Minutes |
|---|---|---:|---:|
| ACT 0 | S01–S14 | 14 | 42 |
| ACT 1 | S15–S37 | 23 | 64 |
| ACT 2 | S38–S59 | 22 | 90 |
| ACT 3 | S60–S86 | 27 | 90 |
| ACT 4 | S87–S106 | 20 | 85 |
| ACT 5 | S107–S121 | 15 | 40 |
| Total | S01–S121 | 121 | 411 |

삭제하는6분은 이전 S68의 Demo3+Case3이다. 다른 장에 시간을 재배분하지 않는다.
S65–S67의 Demo1/2/2분=5분은 유지한다. 전체 Mode는 Lecture186/Demo46/Case102/
Reflection22/Transition23/Q&A32다. 현재 DEMO-03의 scheduled Demo는5분이다.
상세 참고 기록을 별도 발표 시간이나 Live 실행으로 계산하지 않는다.

이전 S69–S122는 현재 S68–S121로 한 칸 당긴다. Story/Beat/Section/Demo/Trial/State/Claim ID는 유지한다.
[현재 번호 대응표](SLIDE_ID_MIGRATION_121_DEC0131.md)를 따른다.
Native 표는 S54만 남고 이전 S68 표는 참고 자료로 보존한다. Native 차트는 S71/S98이다.
12Templates/28Variants·19필드 Notes를 유지한다. 과거 소스/JSON/asset명/평가 파일명은 기존 판본을 보존한다.

## 검증과 Gate

통합121장과 영향 ACT를 최종 패키지로 렌더링하고 S67→S68 연결·본문·근거·번호·Notes·시간을 대조한다.
DEC-0129 당시120장판 S61의 문구 삭제와 S70(현재 S71)의 문구 삭제, S64 A/B/C 비교를 보존한다.
로컬 검사와 Windows PowerPoint·발표PC/교육장·제품/계정·실측 리허설을 구분한다.
실환경 Gate는 UNVERIFIED로 유지한다. Demo Repository·Sites·발표 묶음은 변경하지 않는다.
