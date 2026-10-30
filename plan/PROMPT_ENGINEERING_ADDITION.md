# ACT 1 — Practical Prompt Engineering Addition

## Current approved content — DEC-0116 (2026-10-30)

Use the current S28–S35 mapping below. Historical S22–S29/90-slide entries
remain below as the DEC-0043 edition. Do not renumber the source factories.

The eight slides retain one minute each, with Case1 on S29 and Lecture7
on the others. ACT1 remains23slides/64minutes; the deck remains120/417.
Five core tools set teaching emphasis, not a mandatory prompt checklist.
Three conditional tools apply only when their named trigger is present.
No new Trial, comparison, performance saving or product verification.

| Current slide | Class | Method | Use condition | Claim |
|---|---|---|---|---|
| S28 | 조건부 | Delimiters | 요청과 로그·명세가 한 메시지에 섞일 때 | CLM-0032 |
| S29 | 조건부 | Few-shot examples | 사내 고유 표기·분류가 설명만으로 안 맞을 때 | CLM-0033 |
| S30 | 핵심 | Output format | 완료 보고에서 필요한 정보를 빨리 찾고 싶을 때 | CLM-0034 |
| S31 | 핵심 | Grounding | 설명을 믿기 전에 실제 자료를 대조해야 할 때 | CLM-0035 |
| S32 | 핵심 | Clarification | 사람의 선택에 따라 구현이나 완료 기준이 바뀔 때 | CLM-0036 |
| S33 | 조건부 | Task decomposition | 조사 결과를 보고 구현 범위를 결정해야 할 때 | CLM-0037 |
| S34 | 핵심 | Criteria-focused review | 변경안에서 놓치면 안 될 문제를 검토할 때 | CLM-0038 |
| S35 | 핵심 | Iterative refinement | 첫 제안의 어떤 부분이 요구와 다른지 알 때 | CLM-0039 |

S29 uses a fictional team's reporting labels, not actual company policy.
Start without examples; add them only when the intended local convention
is not conveyed. Do not show the example labels as executed results.
S30 output structure, S31 explanatory evidence, S34 change review and S35
specific correction remain distinct. S32 sets decision and autonomy bounds;
S33 uses a reviewable plan only when a material implementation choice remains.

Latest evidence: [2026-10-30 source matrix](../references/product/PROMPT_ENGINEERING_2026-10-30.md).
The section/Story/Trial/Claim IDs, time and template assignments stay stable.

### S28 — 지시와 참고 자료의 구분

- Priority: 조건부
- When: 요청과 로그·명세가 한 메시지에 섞일 때
- Primary Message: 여러 자료가 섞일 때, 제목으로 읽을 경계를 표시한다.
- Boundary: 구획은 해석을 돕는 표시이며, 보안 격리를 보장하지 않는다.
- Sources: SRC-0230, SRC-0231; CLM-0032

```text
# 요청
crop 경계 오류의 원인만 조사해줘.
코드는 수정하지 마.
# 참고 명세
crop [1,3)의 기대 폭은 2
# 참고 로그
expected=2, actual=3
```

### S29 — 입력과 기대 결과의 작은 예시

- Priority: 조건부
- When: 사내 고유 표기·분류가 설명만으로 안 맞을 때
- Primary Message: 모델이 모르는 우리 기준을 입력·출력 예시로 전달한다.
- Boundary: 가상 팀의 보고 기준 · 실제 사내 규정이나 실행 결과가 아님
- Sources: SRC-0230, SRC-0231; CLM-0033

```text
우리 팀의 보고 표기를 아래 예시처럼 맞춰줘.
테스트 로그 있음: [실행 확인] 명령·결과
코드만 검토함: [코드 검토] 파일·판단
근거를 못 찾음: [미확인] 필요한 자료

첨부한 변경 보고서를 같은 형식으로 정리해줘.
```

### S30 — 바로 검토할 수 있는 결과 형식

- Priority: 핵심
- When: 완료 보고에서 필요한 정보를 빨리 찾고 싶을 때
- Primary Message: 검토에 필요한 항목을 지정하고, 중요한 근거는 남긴다.
- Boundary: 형식과 내용은 별도 확인 · 채팅의 형식 요청은 API Structured Outputs와 다름
- Sources: SRC-0233, SRC-0234; CLM-0034

```text
crop 수정 결과를 아래 항목으로 보고해줘.
1. 변경 파일과 이유
2. 실행한 검사·결과
3. 미실행 검사·이유
4. 남은 위험·결정
완료 판단에 필요한 근거는 생략하지 마.
```

### S31 — 근거가 있는 설명과 미확인의 구분

- Priority: 핵심
- When: 설명을 믿기 전에 실제 자료를 대조해야 할 때
- Primary Message: 중요한 판단에 근거를 받고, 추정·미확인은 구분한다.
- Boundary: 출처가 있어도 원문과 대조한다 · 인용 자체가 정확성의 보증은 아님
- Sources: SRC-0230, SRC-0234; CLM-0035

```text
crop의 명세·구현·테스트를 비교해줘.
중요한 결론마다 파일·함수 근거를 붙여줘.
확인한 내용과 추정·미확인을 구분해줘.
자료가 충돌하면 차이를 먼저 알려줘.
없는 정책은 만들어 채우지 마.
```

### S32 — 결과를 바꾸는 결정에서 확인 질문

- Priority: 핵심
- When: 사람의 선택에 따라 구현이나 완료 기준이 바뀔 때
- Primary Message: 조사할 사실은 찾게 하고, 결과를 바꾸는 결정은 묻는다.
- Boundary: 모든 세부를 질문하지 않는다 · 결정과 무관한 허용된 작업은 계속 진행
- Sources: SRC-0234, SRC-0235, SRC-0243; CLM-0036

```text
빈 crop 범위의 처리 정책을 조사해줘.
문서·테스트·호출부에서 먼저 찾아줘.
정책이 없어 동작을 선택해야 한다면
선택지와 영향을 정리하고 질문해줘.
그 선택에 의존하는 수정은 답변 뒤 진행해줘.
결정과 무관한 조사는 계속해줘.
```

### S33 — 큰 작업을 검토할 결과물로 나누기

- Priority: 조건부
- When: 조사 결과를 보고 구현 범위를 결정해야 할 때
- Primary Message: 중간 판단이 필요한 작업은, 구현 전에 검토할 계획을 받는다.
- Boundary: 작업 계획과 검토 지점을 요청한다 · 내부 사고 과정의 출력을 요구하지 않음
- Sources: SRC-0231, SRC-0232, SRC-0243; CLM-0037

```text
ROI 설정을 crop에 연결하려 한다.
먼저 현재 경로와 변경 후보를 조사해줘.
범위·호환성에 선택이 필요한 지점을 알려줘.
이번에는 수정 없이 계획만 제안해줘.

계획을 검토한 뒤 구현 범위를 정하겠다.
```

### S34 — 기준을 지정한 코드 리뷰 요청

- Priority: 핵심
- When: 변경안에서 놓치면 안 될 문제를 검토할 때
- Primary Message: 검토 기준과 실패 조건을 지정하고, 실제 검사와 구분한다.
- Boundary: 리뷰에도 누락이 있을 수 있다 · 실행 근거와 사람의 완료 판단을 함께 확인
- Sources: SRC-0232, SRC-0235, SRC-0243; CLM-0038

```text
crop 변경안에서 다음을 검토해줘.
끝 좌표 제외 명세·공개 API·오류 정책 보존
요청과 무관한 변경 여부
발견 사항은 위치·실패 조건·영향으로 보고해줘.
정적 검토와 실제 실행한 검사를 구분해줘.
이번에는 코드를 바꾸지 마.
```

### S35 — 구체적인 근거로 수정 방향 피드백

- Priority: 핵심
- When: 첫 제안의 어떤 부분이 요구와 다른지 알 때
- Primary Message: 어긋난 지점·기대 결과·유지할 조건으로 방향을 고친다.
- Boundary: 앞선 제안은 가상 예시 · 반복 요청만으로 품질 향상을 보장하지 않음
- Sources: SRC-0234; CLM-0039

```text
앞선 “기대 폭을 3으로 바꾸자”는 제안을
고쳐줘. 명세는 crop [1,3)에서 폭 2야.
테스트 기대값은 유지하고
구현의 끝 좌표 처리만 다시 검토해줘.
기존 API·의존성은 유지해줘.
바뀐 제안과 미확인 사항을 알려줘.
```

## Historical DEC-0043 edition

Date: 2026-10-21. Baseline: `0772b4b`. Decision: DEC-0043.
Status: **INTEGRATED —90SLIDES/368MINUTES; ORIGINAL SLIDES AND TIMES PRESERVED**.

## Request and Teaching Role

사용자가 현재 S21 뒤에 실무 Prompt Engineering 기법을 소개하고 기존 S22–S23을 거쳐 ACT 2로 이동하도록 새 슬라이드 제작을 지시했다. 새 8장은 각자 사용 상황·바로 활용할 요청 예시·핵심·한계를 가진다. 강사는 핵심 문장과 예시의 두세 행만 짚으며, 슬라이드만 다시 보더라도 활용 방법을 알 수 있게 구성했다.

삽입 전 기준은 82장/360분, ACT 1 S11–S23 13장/55분이었다. 사용자 승인으로 기존 장별 시간을 유지하고 새 8장·8분을 추가한다. 현재는 총90장/368분, ACT1 S11–S31 21장/63분이다. 신규 ID S22–S29 뒤 기존 S22–S82는 S30–S90이 된다. 이 번호는 DEC-0043의 현재 제작 기준이다. 새 PPT·렌더 검증 결과는 production/evaluation/PROMPT_ENGINEERING_ADDITION_RESULT.md에 기록한다.

## Evidence and Selection

공식 자료 본문에서 현재 권고되는 지시·자료 구획, 필요한 예시, 출력 형식, 관련 자료·누락 표시, 중요한 모호함의 질문, 작업 분리, 구체적 리뷰, 후속 수정 요청을 확인했다. 개발자 예시는 기존 crop 명세·검사 pipeline에 맞춰 각색했다.

기존 Goal/Context/Constraints/Process/Verification 틀을 다시 소개하는 장은 추가하지 않았다. 내부 사고 과정을 길게 출력시키는 CoT 문구, 전문가 역할의 정확도 보장, 자기검토·다수결의 보편적 성과, API 설정을 채팅 명령처럼 쓰는 설명도 넣지 않았다. Prompt 비교 평가 프레임워크와 재사용 메커니즘은 이후 ACT의 역할로 보존한다.

[출처·Claim·범위](../references/product/PROMPT_ENGINEERING_2026-10-21.md).

## Time Decision — User Approved Extension

기존6시간·ACT1 55분은 이전 기준이다. 시간 선택을 확인한 뒤 사용자가 기존 슬라이드를 언제나 유지하고 시간을 늘려도 된다고 승인했다. **B안을 채택**해 기존82장·장별 시간·Mode를 전부 보존하고 새8장·8분을 추가한다. 다음 A안은 채택하지 않은 제안 이력이다.

### A — Rejected: compress existing explanation

새 8장 각1분(7분 Lecture, 1분 Case)을 기존 중복 설명 시간에서 마련한다.

| Existing Slide | Current | Proposed | Change |
|---|---|---|---|
| S14 | Case3 + Reflection1 =4 | Case2 + Reflection1 =3 | 질문 틀 설명1분 압축 |
| S15 | Lecture4 | Lecture3 | 다섯 항목 설명1분 압축 |
| S16 | Lecture6 + Case3 =9 | Lecture2 + Case3 =5 | 앞에서 본 질문·항목 재설명4분 압축 |
| S20 | Lecture3 | Lecture2 | 결과 인계 설명1분 압축 |
| S21 | Lecture4 + Reflection1 =5 | Lecture3 + Reflection1 =4 | 표의 반복 설명1분 압축 |

총8분을 새 소개로 옮긴다. 기존 Demo8분·Reflection4분·Transition3분·Q&A4분과 전체 Mode130/73/83/20/22/32는 유지한다. Section1B 7,1C 5,1E 4로 조정하고 신규1H 8을 둔다. 그 외 Section1A7/1D10/1F5/1G9는 유지한다. 이는 실제 리허설 결과가 아닌 제안이다.

### B — Accepted: retain existing slide times

기존 장별 시간을 유지하고 새 소개8분을 더한다. ACT1은63분, 전체368분이 된다. Mode는 Lecture137/Demo73/Case84/Reflection20/Transition22/Q&A32다. 이는2026-10-21 사용자가 승인한 기존6시간 기준의 확장이다. MASTER_PLAN과 INV-IDENTITY-001에 승인 근거를 보존한다.

## Layout and Readability

DEC-0045: S22–S29의 사용 상황은 옅은 배경의 **“이럴 때 사용”** 라벨과 별도 본문으로 나눈다. 상황 설명 자체는 유지하고 라벨·상황이 하나의 문장처럼 읽히지 않도록 간격·색·굵기를 구분한다.

기존 Light Engineering Workbench, 16:9, 지정 글꼴, 여백과 하단 M2 원리 연결을 재사용한다. Prompt는 native text이며 출처·주의점도 편집 가능하다. 이 구간의 요청·활용 설명을 위한 T03-A 변형 적용은 통합 시 Template Mapping에 기록한다. 새 Template family나 제품 화면을 만들지 않는다.

## Approved Slide Content

### S22 — 지시와 참고 자료의 구분

- Method: Delimiters.
- When: 로그·명세·요청이 섞여 있을 때.
- Primary Message: 제목과 태그로 지시와 분석 자료의 경계를 표시한다.
- Evidence: CLM-0032; documented recommendation + conceptual developer adaptation.
- Claim Boundary: 구획은 읽을 경계를 알리는 수단입니다. 보안 격리나 자료의 진위를 보장하지 않습니다. 실제 TRIAL-002·새 실행·효과 측정 결과가 아니다.

```text
# 요청
crop 경계 오류의 원인 후보만 설명해줘.
코드는 아직 수정하지 마.
자료에 없는 내용은 미확인으로 표시해줘.

# 참고 자료
명세: crop [1,3)의 폭은 2
로그 예: expected=2, actual=3
```

### S23 — 입력과 기대 결과의 작은 예시

- Method: Few-shot examples.
- When: 범위·출력 패턴의 뜻이 엇갈릴 때.
- Primary Message: 설명만으로 부족할 때 입력과 원하는 결과를 함께 준다.
- Evidence: CLM-0033; documented recommendation + conceptual developer adaptation.
- Claim Boundary: 예시와 명세를 일치시킵니다. 예시 몇 개가 모든 경계 조건의 명세를 대신하지 않습니다. 실제 TRIAL-002·새 실행·효과 측정 결과가 아니다.

```text
crop 범위 설명을 아래 형식으로 작성해줘.
입력 {1,2,3,4}에 대한 예시:
[1,3) ⇒ {2,3}, 폭 2
[0,1) ⇒ {1}, 폭 1

같은 형식으로 [2,4)를 설명해줘.
빈 범위·범위 초과 정책은 만들지 마.
```

### S24 — 바로 검토할 수 있는 결과 형식

- Method: Output format.
- When: 장황한 답을 다시 가공하게 될 때.
- Primary Message: 받고 싶은 항목과 길이를 요청에 적는다.
- Evidence: CLM-0034; documented recommendation + conceptual developer adaptation.
- Claim Boundary: 형식이 맞아도 내용은 확인해야 합니다. 채팅의 형식 요청은 API Structured Outputs와 별개입니다. 실제 TRIAL-002·새 실행·효과 측정 결과가 아니다.

```text
crop 수정 결과를 다음 순서로 보고해줘.
1. 변경 파일과 바꾼 이유
2. 실제 실행한 확인 명령과 결과
3. 실행하지 못한 확인과 이유
4. 남은 위험과 확인이 필요한 결정
각 항목은 두 문장 이내로 써줘.
실행하지 않은 검사를 통과로 쓰지 마.
```

### S25 — 근거가 있는 설명과 미확인의 구분

- Method: Grounding.
- When: 저장소 설명의 출처를 확인해야 할 때.
- Primary Message: 결론에 자료 위치를 붙이고, 확인하지 못한 것은 남긴다.
- Evidence: CLM-0035; documented recommendation + conceptual developer adaptation.
- Claim Boundary: 파일·줄 인용도 실제 내용과 대조합니다. 인용이 있다는 사실만으로 정확성이 보장되지는 않습니다. 실제 TRIAL-002·새 실행·효과 측정 결과가 아니다.

```text
crop의 명세·구현·테스트를 찾아 비교해줘.
결론마다 실제 파일·함수·줄을 붙여줘.
다음 세 상태를 구분해줘.
- 자료에서 확인
- 코드로부터 추정
- 아직 미확인
근거가 충돌하면 차이를 먼저 알려줘.
찾지 못한 정책은 관례로 채우지 마.
```

### S26 — 결과를 바꾸는 결정에서 확인 질문

- Method: Clarification.
- When: 정책을 사람이 선택해야 할 때.
- Primary Message: 조사할 사실과 답을 받아야 할 결정을 구분한다.
- Evidence: CLM-0036; documented recommendation + conceptual developer adaptation.
- Claim Boundary: 모든 세부를 질문으로 돌리지 않습니다. 답에 따라 결과가 달라지는 선택에 집중합니다. 실제 TRIAL-002·새 실행·효과 측정 결과가 아니다.

```text
빈 crop 범위의 처리 정책을 조사해줘.
문서·테스트·호출부의 근거를 먼저 찾아줘.
근거 없이 빈 결과와 오류 중 골라야 하면
각 선택의 영향을 적고 질문해줘.
그 결정에 의존하는 수정은 답변 뒤 진행해줘.
그 선택과 무관한 조사는 계속해줘.
```

### S27 — 큰 작업을 검토할 결과물로 나누기

- Method: Task decomposition.
- When: 조사 결과에 따라 구현 범위가 달라질 때.
- Primary Message: 다음 결정을 할 수 있는 작은 결과부터 요청한다.
- Evidence: CLM-0037; documented recommendation + conceptual developer adaptation.
- Claim Boundary: 단계는 작업·산출물의 경계입니다. 숨은 사고 과정을 길게 출력하라는 요청이 아닙니다. 실제 TRIAL-002·새 실행·효과 측정 결과가 아니다.

```text
검사 pipeline에 ROI 설정을 연결하려 한다.
이번에는 설정 입력에서 crop까지의 경로만
조사하고, 변경 후보·미확인을 표로 정리해줘.
코드는 아직 수정하지 마.

그 결과를 보고 다음 요청에서
파싱·유효성 확인 구현 범위를 정하겠다.
```

### S28 — 기준을 지정한 코드 리뷰 요청

- Method: Criteria-focused review.
- When: “검토해줘”의 범위를 분명히 할 때.
- Primary Message: 무엇을 찾을지와 어떤 근거로 보고할지를 지정한다.
- Evidence: CLM-0038; documented recommendation + conceptual developer adaptation.
- Claim Boundary: 리뷰 답변도 누락할 수 있습니다. 필요한 실행 확인·변경 검토·사람의 완료 판단을 함께 사용합니다. 실제 TRIAL-002·새 실행·효과 측정 결과가 아니다.

```text
crop 변경안을 코드 리뷰 관점에서 봐줘.
검토 기준은 다음과 같아.
1. 끝 좌표 제외 명세 보존
2. 공개 API와 기존 오류 정책 보존
3. 요청과 무관한 변경 없음
위반마다 위치·근거·영향·수정 제안을 써줘.
자료로 판단 못 하면 미확인으로 남겨줘.
이번 요청에서는 코드를 바꾸지 마.
```

### S29 — 구체적인 근거로 수정 방향 피드백

- Method: Iterative refinement.
- When: 첫 제안의 일부가 의도와 다를 때.
- Primary Message: 어긋난 지점과 원하는 변경, 유지할 조건을 적는다.
- Evidence: CLM-0039; documented recommendation + conceptual developer adaptation.
- Claim Boundary: 앞선 제안은 가상 예시입니다. 원하는 답만 반복시키지 말고 명세와 실제 근거로 방향을 고칩니다. 실제 TRIAL-002·새 실행·효과 측정 결과가 아니다.

```text
앞선 “테스트 기대 폭을 3으로 바꾸자”는
제안을 수정해줘. 원하는 명세는
crop [1,3)에서 폭 2야.
테스트 기대값은 유지하고,
구현의 끝 좌표 처리만 다시 검토해줘.
기존 API·의존성은 유지해줘.
바꾼 제안과 미확인 사항만 보고해줘.
```

## Integration Readiness

- 신규8장 검토용 PPT·Preview·19필드 Notes·출처 연결을 준비한다.
- 기존82장 내용·장별 시간·Mode를 보존하고, 신규8장을 추가해 현재90장 Map과 Notes로 정렬한다.
- 전체90장 번호·Map·Template Map·현재 참조·Notes·PPT·Preview를 함께 정렬하고 전체 렌더를 검토한다.
- 실제 Trial/State/tag·Demo Repository·기존 이미지 pixels·과거 판본·묶음 ZIP/HTML은 변경하지 않는다.
- Windows, 발표 PC 글꼴, 교육장, 현재 제품/계정, 실측 리허설은 UNVERIFIED다.
