# ACT5 — 기존 Harness 재평가와 통합·제거

> Current numbering: DEC-0084 /99slides/387minutes. This design record retains its edition IDs. Use [96→99 migration](SLIDE_ID_MIGRATION_99.md), [current Slide Map](SLIDE_MAP.md) and [ACT0 expansion](ACT0_CONTEXT_EXPANSION.md) for the current presentation.

Decision: DEC-0083. Date:2026-10-25. Baseline:6efd610.
Status: CONTENT ALIGNED; final package/render evidence is recorded separately.

## 승인 범위와 보존

S90 뒤3장, 각 Lecture2분을 더해96장·385분으로 확장한다. ACT5는11장·36분.
기존93장과 장별 시간·Mode는 보존한다. 이전 S91–S93만 S94–S96으로 이동한다.
다른 ACT 시간40/63/81/85/80분과 Demo73분은 그대로다. 발표 묶음·Demo 저장소·
기존 Trial/State/Beat/Section IDs·이미지는 변경하지 않는다.

## 문제 중심 연결

S90 환경 설계 → S91 조건 변화 뒤 기존 구조 재평가 → S92 유지·통합·제거 후보
→ S93 대표 작업·동일 기준으로 확인 → S94 내 업무의 부족/중복 문제 하나
→ S95 같은 글자의 작은 행동·근거·유지 책임 → S96 Q&A/마무리.

S88은 처음부터 근거가 부족해 Subagent/Memory를 도입하지 않은 선택이다.
신규3장은 이전에는 정당했던 구조가 나중 조건에서도 필요한지 묻는다.
Harness→Loop 뒤 새 maturity 단계가 생기는 것은 아니다. Loop의 평가·피드백을
기존 구조에 적용하는 ACT5 종합 관점이다. 모델 발전이 모든 제거를 정당화하지 않는다.

## Slide별 역할

| Slide | 역할 | 근거 구분 | Template | 시간 |
|---|---|---|---|---:|
| S91 | 조건 변화 뒤 역할 재평가 | 공급사 공개 사례 + 각색한 구조 도식 | T04-A | Lecture2 |
| S92 | 유지/통합/제거 후보 | 이 과정의 판단 모델 | T10-A | Lecture2 |
| S93 | 같은 작업·기준으로 확인 | 평가 설계, 실행 결과 없음 | T03-C | Lecture2 |
| S94 (이전 S91) | 부족한 기준/중복 구성 중 문제 하나 | 교육용 C++ 업무 전이 | T10-B | Case1+Transition4 |
| S95 (이전 S92) | 같은 A–E 행동과 확인 근거 | 선택 가능한 개인 성찰 | T01-B | Lecture2+Reflection2 |
| S96 (이전 S93) | Q&A와 원래 마지막 한 문장 | 기존 교육 모델 | T01-C | Q&A4+Transition2 |

## 기존 의도 보존

S94 B의 build mode·동작 명세·장치 조건, C의 profile→change→benchmark→regression
예시는 Notes에 보존하며 반복/중복 지침·겹치는 절차/역할의 증상으로 범위를 넓힌다.
S95 B는 원출처·검토자를 정하면서 중복 지침을 통합할 후보, C는 절차·역할의
통합·제거 후보와 둘 위치·갱신 책임을 연결한다. 추가·통합·제거 중 하나를
강요하지 않으며 유지/되돌림도 가능하다. 기존 개인 성찰과 비강제 원칙을 유지한다.
S96의 마지막 다섯 용어·화면 메시지·Q&A4→Closing Transition2 순서는 그대로다.

## 근거와 Claim 경계

SRC-0236/CLM-0040은 일부 기업 Agent를 다룬 공급사 공개 사례다. 우리 Demo의
변경 전후·현재 Codex의 성능·보편적 단일 Agent 우월성으로 일반화하지 않는다.
다이어그램은 출처를 각색한 교육용 구성이다. S92/S93은 TEACHING_MODEL이며
실행된 비교 실험·점수·PASS/FAIL·토큰/시간/비용 절감 수치를 표시하지 않는다.
기존 명세·안전·권한·검증 요구는 보존한다. 구성이 줄었다는 이유만으로 채택하지
않으며 결과·회귀·남은 위험과 시간·비용을 함께 보고 필요하면 되돌린다.
CLM-0022/0030과 BEAT-057/061/069를 확장해 연결하고 새 ID를 만들지 않는다.
출처 상세는 [연구 기록](../references/engineering/harness-reassessment.md).

## 제작·검증 Gate

96장 전체와 ACT5 11장을 최종 패키지에서 렌더링한다.96x19 Notes/ACT·Full·내장
대조, 기존 배정·Template·Beat 보존,90개 기존 화면 PNG 일치, 번호 이동한
마지막 화면의 내용 보존, 기존 Native table/chart·이미지·32개 fallback을 확인한다.
실제 Windows PowerPoint·발표 PC 글꼴·제품 계정·교육장·시간 리허설은 UNVERIFIED.
결과는 production/evaluation/ACT_5_HARNESS_REASSESSMENT.md에 기록한다.
