# Harness 재사용·실행 조건 설명 수정 결과

Date:2026-10-25. Decision: DEC-0091. Baseline:108d0d8.
Status: **PASS — 로컬 제작·렌더링·정합성 범위**.
Windows/교육장/제품·계정/실측 리허설: **UNVERIFIED**.

## 변경 결과

현재 **113장·402분(6시간42분)**. 기존 S71 뒤에 재사용2장을 넣고, 이전 S72를
실행 조건 설명5장으로 나눴다. 이전 S73의 독립 C++ 전이 장은 삭제했다.
다른 C++ 예시를 새로 만들거나 기존 근거를 강화하지 않았다.

| 현재 Slide | 변경 이유·핵심 역할 | 근거 구분 | 계획 시간 |
|---|---|---|---|
| S72 | 만든 Harness를 다음 프로젝트의 기반으로 | TEACHING_MODEL | Lecture2분 |
| S73 | 공통 기반에 프로젝트 기준을 연결한다 | TEACHING_MODEL | Lecture2분 |
| S74 | 임시 폴더 오류의 원인은 실행 권한이었다 | OBSERVED_PRODUCT | Lecture2분 |
| S75 | Agent의 실행 조건은 어디에서 오는가? | TEACHING_MODEL | Lecture2분 |
| S76 | 실제 성능 조사에도 저장소 밖 지침이 들어왔다 | OBSERVED_META | Lecture2분 |
| S77 | 시작 경고와 실제 사용은 구분해서 확인한다 | OBSERVED_META | Lecture2분 |
| S78 | 결과와 실행 조건을 함께 남긴다 | TEACHING_MODEL | Lecture2분 |
| S79 | 기존 성찰의 배치를 유지하고 재사용 기반·위치·갱신 책임으로 연결 | TEACHING_MODEL | Reflection3+Q&A5+Transition2분 |
| S110 | 삭제한 C++ 팁 대신 S78 기록 팁을 찾아보기에 연결 | 기존 탐색 역할 | 기존Lecture1분 |

S71 화면은 그대로 두고 Notes의 다음 질문을 재사용 가치로 맞췄다.
이전 S74는 S79이며, 다음 ACT 제목 S80→S81의 기존 실제 성공 회수로 연결된다.
나머지 보존 장은 필요한 번호·참조와 전체 시간 표기만 정렬했다.

## ACT4 보존 확인

이전 S75–S93은 현재 S80–S98이다. **19장·81분과 각 장의 역할·시간·Mode·
Evidence Type·Claim Boundary를 유지했다.** 모든19장 화면은 번호/참조 영역 밖의
픽셀이 기준 판본과 동일하다. Notes의 각 필드도 번호·현재 판본 표기와 제목 장의
전체 교육시간402분 표기 외 동일한 의미를 유지한다.

특히 이전 S88–S92→현재 S93–S97의 실제 개선 사례5장을 그대로 보존했다.
관찰 배경→결과/원인 해석 구분→기록 기준 변경→후속 원문 대조→Loop 대응의
내용과2/4/3/3/3분을 축소하지 않았다. ACT3 S76/S77에서는 Skill 관여와 경고/사용의
구분만 설명하고, 기록 기준을 왜 바꾸고 후속 기록을 어떻게 대조했는지는 ACT4에 남겼다.
가상 DEMO-04A와 실제 OBSERVED_META 사례를 합치지 않았다.

## 시간·Mode

| ACT | 현재 범위 | 장수 | 계획 분 |
|---|---|---:|---:|
| ACT0 | S01–S14 | 14 | 43 |
| ACT1 | S15–S36 | 22 | 64 |
| ACT2 | S37–S55 | 19 | 82 |
| ACT3 | S56–S79 | 24 | 92 |
| ACT4 | S80–S98 | 19 | 81 |
| ACT5 | S99–S113 | 15 | 40 |
| 합계 | S01–S113 |113|402|

108−2+7=113장.396−3−5+14=402분. 신규7장만 Lecture2분씩이며
나머지106개 보존 장의 시간·Mode는 동일하다.
Mode: Lecture160 / Demo73 / Case88 / Reflection21 / Transition28 / Q&A32=402분.
이는 계획 배정 검증이며 실제 시간 리허설 결과가 아니다.

## 렌더링·가독성

통합113장과6ACT113장, 총226개의1920×1080 PNG를 최종 PPTX에서 렌더링했다.
새 S72–S78, 변경 S79/S110은 개별 화면에서 제목·본문·한글/영문·도식 연결과
필수 근거 문구를 확인했다. ACT0–5 몽타주로 전체 흐름을 검토하고
S71–S81의 재사용→조건 확인→성찰→ACT4와 S98→S99→S100의 마무리 연결을 확인했다.
새 구간에서 의도하지 않은 잘림·겹침을 발견하지 않았다.
S76/S77 본문은 자동 실행 설정·외부 도구 연결이라는 쉬운 표현을 쓰고,
실제 Hook/MCP 기록의 범위와 원자료 명칭은 Notes·근거 문구에서 보존한다.

변경 대상 외104개 보존 화면은 ID/참조 영역 밖의 픽셀이 기준 판본과 동일하다.
보존된 모든 이미지의 bytes/crop/위치를 비교했고 Native 표3개와 차트1개도 유지했다.
기존 S53의0.01in 표 높이 추정 경고(Full S53/ACT2 내부17)는 그대로다.
실제 로컬 화면에서는 하단 근거와 겹치지 않음을 확인했다. 이 추정 경고와
신규 잘림 문제를 혼동하지 않으며 Windows에서의 표 렌더링은 별도 확인 대상이다.

[새 설명 흐름](../preview/full/harness-reuse-sequence.png),
[ACT3](../preview/act3/montage.png), [전체](../preview/full/montage.png).

## Notes·기획·근거 정합성

- 113개 Notes 모두19필드. ACT별/Full Markdown과 각 PPTX의 내장 Notes를 대조했다.
- 각 Slide ID·Title·시간·Mode를 Map과 대조했다.6ACT의 화면/PNG/Notes는 Full과 일치한다.
- 12Templates/28Variants를 재사용한다. 기존106개 Template/모듈 연결 배정을 보존한다.
- 새17번째 기록 팁 S78을 넣고 삭제한 C++ 팁을 뺐다. 총17본문 팁/3마지막 요약을 유지한다.
- 기존34Demo fallback의 역할·시간·파일 경로·1920×1080·SHA-256을 현재 번호에 맞췄다.
- ACT 제목·부제와 승인된 이미지·스타일·기존 State/Trial/Demo/Beat ID는 유지했다.
- 현재 번호·시간을 Slide Map, Notes, 기획 Router, 제목/팁 목록, 전달 문서에 맞췄다.
- 기존 FAQ25문항은 남겨 두고 오래된 참고 ID를 실제 현재 Slide 역할과 대조해 정렬했다.
- Runbook의 Trial / Run Record 이후 원문과 Historical source scope는 보존했다.
  최종 전달 문서의 보존된90장 원문도 그대로 유지했다.

## Claim Boundary

S72/S73/S75/S78은 교육용 설계 모델이다. 실제 다른 프로젝트 이식이나 통제 비교를
수행하지 않았다. S74는 과거 TRIAL-001의 별도 권한 제한이며 해결했다고 주장하지 않는다.
S76/S77은 TRIAL-006의 실제 전역 Skill 포함·일부 작업 관여와 별도 시작 경고다.
실제 관여를 미확인으로 지우지 않으며 경고를 Hook 실행/MCP 작업 사용으로 강화하지 않는다.
전체 설정·권한 감사, 각 구성의 단독 인과효과, Prompt/Skill 우월성, 토큰·시간 절약,
현재 Desktop 재현·후속 Trial 품질 향상은 입증하지 않았다.
다른 프로젝트에 연결할 재사용 모델의 근거는 공식 자료의 반복 수행 방법 패키징이며,
Harness 전체를 그대로 복사해도 작동한다는 보장으로 확대하지 않았다.

## 남은 이슈·검증 Gate

P0: 이번 변경에서 발견한 문제 없음.
P1: 이번 변경에서 발견한 문제 없음.
P2: 기존 S53 Native 표 추정 경고의 대상 Windows 재확인.

Windows PowerPoint/대상 글꼴/교육장 투사/제품·계정/선택 Live·Hybrid/전체 및
S79·S98의 실측 운영 리허설은 UNVERIFIED다. Mac 렌더링으로 대신 판정하지 않았다.
로컬 구조 검사는 Office 실행 검사와 다르며, 선택적 Office XSD 도구는 번들 Python의
추가 모듈 부재로 실행하지 않았다. 필요한 first-party 패키지/기하/재가져오기 검사는 통과했다.

## Git 범위

정상 교육 산출물과 기획·검토 문서만 기록한다. 임시 build/캐시/도구 진단은
작업 저장소 밖에 둔다. 새 Trial·Demo 코드·State Tag·Remote는 변경하지 않았다.
발표 묶음은 생성·갱신하지 않았다. 기존 origin/main에 일반 Commit/Push한다.
최종 Commit 식별자와 원격 결과는 작업 완료 메시지에서 보고한다.

## Next Readiness

READY FOR USER REVIEW — 실행 환경·발표 리허설 Gate는 열어 둔다.

[현재 설계](../../plan/HARNESS_REUSE_AND_EXECUTION_CONTEXT.md),
[108→113 번호](../../plan/SLIDE_ID_MIGRATION_113.md),
[현재 전달 안내](FINAL_HANDOFF.md).
