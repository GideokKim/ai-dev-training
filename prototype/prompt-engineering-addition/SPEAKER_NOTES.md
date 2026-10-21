# Prompt Engineering Methods — Addition Review Notes

> Historical pre-integration review snapshot: the timing question below was later resolved by the user. Current production follows DEC-0043,90slides/368minutes; original slide times remain unchanged. Use the current production Map/Notes and PROMPT_ENGINEERING_ADDITION_RESULT.md for final status.


Status: CONTENT READY / TIMING AND INTEGRATION PENDING.
Date: 2026-10-21. Baseline: 0772b4b (82 slides / 360 minutes).

S22–S29 are proposed insertion IDs, not the current production deck IDs.
Each one-minute allocation below is proposed for a brief introduction.
The current Full/ACT decks and their budgets remain unchanged.
Evidence: official documented recommendations checked on 2026-10-21,
with conceptual developer examples. No new Trial or measured improvement.

## S22 — 지시와 참고 자료의 구분

Slide ID: S22

Working Title: 지시와 참고 자료의 구분

ACT / Section: ACT 1 / proposed 1H — Practical Prompt Methods

Allocated Time: PROPOSED — 1 minute; integration timing awaits user selection

Mode Split: PROPOSED — Lecture 1 minute

Primary Message: 제목과 태그로 지시와 분석 자료의 경계를 표시한다.

Opening Question: “로그·명세·요청이 섞여 있을 때, 요청을 어떻게 바꾸면 될까?”

Speaker Flow:

1. (0:00–0:15 proposed) 사용 상황을 한 문장으로 짚는다. 필요한 때 선택하는 문장 도구이며 모든 요청에 여덟 기법을 채울 필요는 없다고 연결한다.
2. (0:15–0:45 proposed) 요청 전문을 낭독하지 않고 이 기법이 드러나는 두세 행만 가리킨다. 아래 문장은 복사해 자기 프로젝트 자료로 바꿔 사용할 교육용 예시다.

```text
# 요청
crop 경계 오류의 원인 후보만 설명해줘.
코드는 아직 수정하지 마.
자료에 없는 내용은 미확인으로 표시해줘.

# 참고 자료
명세: crop [1,3)의 폭은 2
로그 예: expected=2, actual=3
```

3. (0:45–1:00 proposed) 화면 하단의 핵심을 회수하고 한계를 짧게 짚는다. 다음은 입력과 기대 결과의 작은 예시의 활용 상황을 본다.

Evidence / Source: CLM-0032; official documented recommendations checked 2026-10-21. https://developers.openai.com/api/docs/guides/prompt-engineering. Evidence matrix: references/product/PROMPT_ENGINEERING_2026-10-21.md.

Claim Boundary: 교육용 요청 문장이다. 실제 TRIAL-002 입력·실행·비교 실험이 아니다. 구획은 읽을 경계를 알리는 수단입니다. 보안 격리나 자료의 진위를 보장하지 않습니다. 정확도·토큰·시간·성능 개선이나 모든 모델의 동일한 동작을 보장하지 않는다.

Beginner Explanation: “언제”의 상황에서 예시 문장을 출발점으로 삼고 실제 명세·파일·자료를 맞춰 넣는다. 요청 길이를 늘리는 것 자체가 목적은 아니다.

Advanced Insight: Treat the technique as a documented starting point. Check the selected model, workload, available tools, evidence and failure conditions before attributing an outcome to the prompt.

C++ Vision Bridge: 기존 crop의 끝 좌표 제외 명세와 제조 검사 pipeline에 적용하는 개념 예시다. 실제 C++ 구현·실행·오류 정책이나 장비 조건은 추가로 확정하지 않는다.

Demo Operation: N/A — static conceptual prompt example. No new Trial, model call, code change, benchmark or live surface demonstration.

Audience Interaction: 요청 예시를 눈으로 확인하게 하고 핵심 부분만 가리킨다. 작성 실습·공개 답변·의무 응답을 요구하지 않는다.

Transition: 다음은 입력과 기대 결과의 작은 예시의 활용 상황을 본다.

Time Management: 1분은 핵심 소개의 제안값이다. 전체 문장·출처·주의점 낭독은 생략한다. 실제 시간 적합성은 리허설 전까지 UNVERIFIED이며 기존 ACT 1 55분과 전체 360분의 변경 또는 재배분은 사용자 선택 전 적용하지 않는다.

Fallback: 이 8장 검토용 PPT 또는 prototype/prompt-engineering-addition/preview/S22.png를 사용한다. 현재 production Full/ACT PPT에는 아직 삽입하지 않았다.

Validation Status: CONTENT ALIGNED — final local render and embedded Notes validation is recorded in REVIEW.md. Windows PowerPoint, target fonts, room projection, current product/account and timed rehearsal remain UNVERIFIED.

## S23 — 입력과 기대 결과의 작은 예시

Slide ID: S23

Working Title: 입력과 기대 결과의 작은 예시

ACT / Section: ACT 1 / proposed 1H — Practical Prompt Methods

Allocated Time: PROPOSED — 1 minute; integration timing awaits user selection

Mode Split: PROPOSED — Case 1 minute

Primary Message: 설명만으로 부족할 때 입력과 원하는 결과를 함께 준다.

Opening Question: “범위·출력 패턴의 뜻이 엇갈릴 때, 요청을 어떻게 바꾸면 될까?”

Speaker Flow:

1. (0:00–0:15 proposed) 사용 상황을 한 문장으로 짚는다. 필요한 때 선택하는 문장 도구이며 모든 요청에 여덟 기법을 채울 필요는 없다고 연결한다.
2. (0:15–0:45 proposed) 요청 전문을 낭독하지 않고 이 기법이 드러나는 두세 행만 가리킨다. 아래 문장은 복사해 자기 프로젝트 자료로 바꿔 사용할 교육용 예시다.

```text
crop 범위 설명을 아래 형식으로 작성해줘.
입력 {1,2,3,4}에 대한 예시:
[1,3) ⇒ {2,3}, 폭 2
[0,1) ⇒ {1}, 폭 1

같은 형식으로 [2,4)를 설명해줘.
빈 범위·범위 초과 정책은 만들지 마.
```

3. (0:45–1:00 proposed) 화면 하단의 핵심을 회수하고 한계를 짧게 짚는다. 다음은 바로 검토할 수 있는 결과 형식의 활용 상황을 본다.

Evidence / Source: CLM-0033; official documented recommendations checked 2026-10-21. https://developers.openai.com/api/docs/guides/prompt-engineering; https://developers.openai.com/api/docs/guides/reasoning-best-practices. Evidence matrix: references/product/PROMPT_ENGINEERING_2026-10-21.md.

Claim Boundary: 교육용 요청 문장이다. 실제 TRIAL-002 입력·실행·비교 실험이 아니다. 예시와 명세를 일치시킵니다. 예시 몇 개가 모든 경계 조건의 명세를 대신하지 않습니다. 정확도·토큰·시간·성능 개선이나 모든 모델의 동일한 동작을 보장하지 않는다.

Beginner Explanation: “언제”의 상황에서 예시 문장을 출발점으로 삼고 실제 명세·파일·자료를 맞춰 넣는다. 요청 길이를 늘리는 것 자체가 목적은 아니다.

Advanced Insight: Treat the technique as a documented starting point. Check the selected model, workload, available tools, evidence and failure conditions before attributing an outcome to the prompt.

C++ Vision Bridge: 기존 crop의 끝 좌표 제외 명세와 제조 검사 pipeline에 적용하는 개념 예시다. 실제 C++ 구현·실행·오류 정책이나 장비 조건은 추가로 확정하지 않는다.

Demo Operation: N/A — static conceptual prompt example. No new Trial, model call, code change, benchmark or live surface demonstration.

Audience Interaction: 요청 예시를 눈으로 확인하게 하고 핵심 부분만 가리킨다. 작성 실습·공개 답변·의무 응답을 요구하지 않는다.

Transition: 다음은 바로 검토할 수 있는 결과 형식의 활용 상황을 본다.

Time Management: 1분은 핵심 소개의 제안값이다. 전체 문장·출처·주의점 낭독은 생략한다. 실제 시간 적합성은 리허설 전까지 UNVERIFIED이며 기존 ACT 1 55분과 전체 360분의 변경 또는 재배분은 사용자 선택 전 적용하지 않는다.

Fallback: 이 8장 검토용 PPT 또는 prototype/prompt-engineering-addition/preview/S23.png를 사용한다. 현재 production Full/ACT PPT에는 아직 삽입하지 않았다.

Validation Status: CONTENT ALIGNED — final local render and embedded Notes validation is recorded in REVIEW.md. Windows PowerPoint, target fonts, room projection, current product/account and timed rehearsal remain UNVERIFIED.

## S24 — 바로 검토할 수 있는 결과 형식

Slide ID: S24

Working Title: 바로 검토할 수 있는 결과 형식

ACT / Section: ACT 1 / proposed 1H — Practical Prompt Methods

Allocated Time: PROPOSED — 1 minute; integration timing awaits user selection

Mode Split: PROPOSED — Lecture 1 minute

Primary Message: 받고 싶은 항목과 길이를 요청에 적는다.

Opening Question: “장황한 답을 다시 가공하게 될 때, 요청을 어떻게 바꾸면 될까?”

Speaker Flow:

1. (0:00–0:15 proposed) 사용 상황을 한 문장으로 짚는다. 필요한 때 선택하는 문장 도구이며 모든 요청에 여덟 기법을 채울 필요는 없다고 연결한다.
2. (0:15–0:45 proposed) 요청 전문을 낭독하지 않고 이 기법이 드러나는 두세 행만 가리킨다. 아래 문장은 복사해 자기 프로젝트 자료로 바꿔 사용할 교육용 예시다.

```text
crop 수정 결과를 다음 순서로 보고해줘.
1. 변경 파일과 바꾼 이유
2. 실제 실행한 확인 명령과 결과
3. 실행하지 못한 확인과 이유
4. 남은 위험과 확인이 필요한 결정
각 항목은 두 문장 이내로 써줘.
실행하지 않은 검사를 통과로 쓰지 마.
```

3. (0:45–1:00 proposed) 화면 하단의 핵심을 회수하고 한계를 짧게 짚는다. 다음은 근거가 있는 설명과 미확인의 구분의 활용 상황을 본다.

Evidence / Source: CLM-0034; official documented recommendations checked 2026-10-21. https://learn.chatgpt.com/docs/prompting; https://developers.openai.com/api/docs/guides/structured-outputs. Evidence matrix: references/product/PROMPT_ENGINEERING_2026-10-21.md.

Claim Boundary: 교육용 요청 문장이다. 실제 TRIAL-002 입력·실행·비교 실험이 아니다. 형식이 맞아도 내용은 확인해야 합니다. 채팅의 형식 요청은 API Structured Outputs와 별개입니다. 정확도·토큰·시간·성능 개선이나 모든 모델의 동일한 동작을 보장하지 않는다.

Beginner Explanation: “언제”의 상황에서 예시 문장을 출발점으로 삼고 실제 명세·파일·자료를 맞춰 넣는다. 요청 길이를 늘리는 것 자체가 목적은 아니다.

Advanced Insight: Treat the technique as a documented starting point. Check the selected model, workload, available tools, evidence and failure conditions before attributing an outcome to the prompt.

C++ Vision Bridge: 기존 crop의 끝 좌표 제외 명세와 제조 검사 pipeline에 적용하는 개념 예시다. 실제 C++ 구현·실행·오류 정책이나 장비 조건은 추가로 확정하지 않는다.

Demo Operation: N/A — static conceptual prompt example. No new Trial, model call, code change, benchmark or live surface demonstration.

Audience Interaction: 요청 예시를 눈으로 확인하게 하고 핵심 부분만 가리킨다. 작성 실습·공개 답변·의무 응답을 요구하지 않는다.

Transition: 다음은 근거가 있는 설명과 미확인의 구분의 활용 상황을 본다.

Time Management: 1분은 핵심 소개의 제안값이다. 전체 문장·출처·주의점 낭독은 생략한다. 실제 시간 적합성은 리허설 전까지 UNVERIFIED이며 기존 ACT 1 55분과 전체 360분의 변경 또는 재배분은 사용자 선택 전 적용하지 않는다.

Fallback: 이 8장 검토용 PPT 또는 prototype/prompt-engineering-addition/preview/S24.png를 사용한다. 현재 production Full/ACT PPT에는 아직 삽입하지 않았다.

Validation Status: CONTENT ALIGNED — final local render and embedded Notes validation is recorded in REVIEW.md. Windows PowerPoint, target fonts, room projection, current product/account and timed rehearsal remain UNVERIFIED.

## S25 — 근거가 있는 설명과 미확인의 구분

Slide ID: S25

Working Title: 근거가 있는 설명과 미확인의 구분

ACT / Section: ACT 1 / proposed 1H — Practical Prompt Methods

Allocated Time: PROPOSED — 1 minute; integration timing awaits user selection

Mode Split: PROPOSED — Lecture 1 minute

Primary Message: 결론에 자료 위치를 붙이고, 확인하지 못한 것은 남긴다.

Opening Question: “저장소 설명의 출처를 확인해야 할 때, 요청을 어떻게 바꾸면 될까?”

Speaker Flow:

1. (0:00–0:15 proposed) 사용 상황을 한 문장으로 짚는다. 필요한 때 선택하는 문장 도구이며 모든 요청에 여덟 기법을 채울 필요는 없다고 연결한다.
2. (0:15–0:45 proposed) 요청 전문을 낭독하지 않고 이 기법이 드러나는 두세 행만 가리킨다. 아래 문장은 복사해 자기 프로젝트 자료로 바꿔 사용할 교육용 예시다.

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

3. (0:45–1:00 proposed) 화면 하단의 핵심을 회수하고 한계를 짧게 짚는다. 다음은 결과를 바꾸는 결정에서 확인 질문의 활용 상황을 본다.

Evidence / Source: CLM-0035; official documented recommendations checked 2026-10-21. https://developers.openai.com/api/docs/guides/prompt-engineering; https://learn.chatgpt.com/docs/prompting. Evidence matrix: references/product/PROMPT_ENGINEERING_2026-10-21.md.

Claim Boundary: 교육용 요청 문장이다. 실제 TRIAL-002 입력·실행·비교 실험이 아니다. 파일·줄 인용도 실제 내용과 대조합니다. 인용이 있다는 사실만으로 정확성이 보장되지는 않습니다. 정확도·토큰·시간·성능 개선이나 모든 모델의 동일한 동작을 보장하지 않는다.

Beginner Explanation: “언제”의 상황에서 예시 문장을 출발점으로 삼고 실제 명세·파일·자료를 맞춰 넣는다. 요청 길이를 늘리는 것 자체가 목적은 아니다.

Advanced Insight: Treat the technique as a documented starting point. Check the selected model, workload, available tools, evidence and failure conditions before attributing an outcome to the prompt.

C++ Vision Bridge: 기존 crop의 끝 좌표 제외 명세와 제조 검사 pipeline에 적용하는 개념 예시다. 실제 C++ 구현·실행·오류 정책이나 장비 조건은 추가로 확정하지 않는다.

Demo Operation: N/A — static conceptual prompt example. No new Trial, model call, code change, benchmark or live surface demonstration.

Audience Interaction: 요청 예시를 눈으로 확인하게 하고 핵심 부분만 가리킨다. 작성 실습·공개 답변·의무 응답을 요구하지 않는다.

Transition: 다음은 결과를 바꾸는 결정에서 확인 질문의 활용 상황을 본다.

Time Management: 1분은 핵심 소개의 제안값이다. 전체 문장·출처·주의점 낭독은 생략한다. 실제 시간 적합성은 리허설 전까지 UNVERIFIED이며 기존 ACT 1 55분과 전체 360분의 변경 또는 재배분은 사용자 선택 전 적용하지 않는다.

Fallback: 이 8장 검토용 PPT 또는 prototype/prompt-engineering-addition/preview/S25.png를 사용한다. 현재 production Full/ACT PPT에는 아직 삽입하지 않았다.

Validation Status: CONTENT ALIGNED — final local render and embedded Notes validation is recorded in REVIEW.md. Windows PowerPoint, target fonts, room projection, current product/account and timed rehearsal remain UNVERIFIED.

## S26 — 결과를 바꾸는 결정에서 확인 질문

Slide ID: S26

Working Title: 결과를 바꾸는 결정에서 확인 질문

ACT / Section: ACT 1 / proposed 1H — Practical Prompt Methods

Allocated Time: PROPOSED — 1 minute; integration timing awaits user selection

Mode Split: PROPOSED — Lecture 1 minute

Primary Message: 조사할 사실과 답을 받아야 할 결정을 구분한다.

Opening Question: “정책을 사람이 선택해야 할 때, 요청을 어떻게 바꾸면 될까?”

Speaker Flow:

1. (0:00–0:15 proposed) 사용 상황을 한 문장으로 짚는다. 필요한 때 선택하는 문장 도구이며 모든 요청에 여덟 기법을 채울 필요는 없다고 연결한다.
2. (0:15–0:45 proposed) 요청 전문을 낭독하지 않고 이 기법이 드러나는 두세 행만 가리킨다. 아래 문장은 복사해 자기 프로젝트 자료로 바꿔 사용할 교육용 예시다.

```text
빈 crop 범위의 처리 정책을 조사해줘.
문서·테스트·호출부의 근거를 먼저 찾아줘.
근거 없이 빈 결과와 오류 중 골라야 하면
각 선택의 영향을 적고 질문해줘.
그 결정에 의존하는 수정은 답변 뒤 진행해줘.
그 선택과 무관한 조사는 계속해줘.
```

3. (0:45–1:00 proposed) 화면 하단의 핵심을 회수하고 한계를 짧게 짚는다. 다음은 큰 작업을 검토할 결과물로 나누기의 활용 상황을 본다.

Evidence / Source: CLM-0036; official documented recommendations checked 2026-10-21. https://learn.chatgpt.com/guides/best-practices; https://learn.chatgpt.com/docs/prompting. Evidence matrix: references/product/PROMPT_ENGINEERING_2026-10-21.md.

Claim Boundary: 교육용 요청 문장이다. 실제 TRIAL-002 입력·실행·비교 실험이 아니다. 모든 세부를 질문으로 돌리지 않습니다. 답에 따라 결과가 달라지는 선택에 집중합니다. 정확도·토큰·시간·성능 개선이나 모든 모델의 동일한 동작을 보장하지 않는다.

Beginner Explanation: “언제”의 상황에서 예시 문장을 출발점으로 삼고 실제 명세·파일·자료를 맞춰 넣는다. 요청 길이를 늘리는 것 자체가 목적은 아니다.

Advanced Insight: Treat the technique as a documented starting point. Check the selected model, workload, available tools, evidence and failure conditions before attributing an outcome to the prompt.

C++ Vision Bridge: 기존 crop의 끝 좌표 제외 명세와 제조 검사 pipeline에 적용하는 개념 예시다. 실제 C++ 구현·실행·오류 정책이나 장비 조건은 추가로 확정하지 않는다.

Demo Operation: N/A — static conceptual prompt example. No new Trial, model call, code change, benchmark or live surface demonstration.

Audience Interaction: 요청 예시를 눈으로 확인하게 하고 핵심 부분만 가리킨다. 작성 실습·공개 답변·의무 응답을 요구하지 않는다.

Transition: 다음은 큰 작업을 검토할 결과물로 나누기의 활용 상황을 본다.

Time Management: 1분은 핵심 소개의 제안값이다. 전체 문장·출처·주의점 낭독은 생략한다. 실제 시간 적합성은 리허설 전까지 UNVERIFIED이며 기존 ACT 1 55분과 전체 360분의 변경 또는 재배분은 사용자 선택 전 적용하지 않는다.

Fallback: 이 8장 검토용 PPT 또는 prototype/prompt-engineering-addition/preview/S26.png를 사용한다. 현재 production Full/ACT PPT에는 아직 삽입하지 않았다.

Validation Status: CONTENT ALIGNED — final local render and embedded Notes validation is recorded in REVIEW.md. Windows PowerPoint, target fonts, room projection, current product/account and timed rehearsal remain UNVERIFIED.

## S27 — 큰 작업을 검토할 결과물로 나누기

Slide ID: S27

Working Title: 큰 작업을 검토할 결과물로 나누기

ACT / Section: ACT 1 / proposed 1H — Practical Prompt Methods

Allocated Time: PROPOSED — 1 minute; integration timing awaits user selection

Mode Split: PROPOSED — Lecture 1 minute

Primary Message: 다음 결정을 할 수 있는 작은 결과부터 요청한다.

Opening Question: “조사 결과에 따라 구현 범위가 달라질 때, 요청을 어떻게 바꾸면 될까?”

Speaker Flow:

1. (0:00–0:15 proposed) 사용 상황을 한 문장으로 짚는다. 필요한 때 선택하는 문장 도구이며 모든 요청에 여덟 기법을 채울 필요는 없다고 연결한다.
2. (0:15–0:45 proposed) 요청 전문을 낭독하지 않고 이 기법이 드러나는 두세 행만 가리킨다. 아래 문장은 복사해 자기 프로젝트 자료로 바꿔 사용할 교육용 예시다.

```text
검사 pipeline에 ROI 설정을 연결하려 한다.
이번에는 설정 입력에서 crop까지의 경로만
조사하고, 변경 후보·미확인을 표로 정리해줘.
코드는 아직 수정하지 마.

그 결과를 보고 다음 요청에서
파싱·유효성 확인 구현 범위를 정하겠다.
```

3. (0:45–1:00 proposed) 화면 하단의 핵심을 회수하고 한계를 짧게 짚는다. 다음은 기준을 지정한 코드 리뷰 요청의 활용 상황을 본다.

Evidence / Source: CLM-0037; official documented recommendations checked 2026-10-21. https://learn.chatgpt.com/guides/best-practices; https://developers.openai.com/api/docs/guides/reasoning-best-practices. Evidence matrix: references/product/PROMPT_ENGINEERING_2026-10-21.md.

Claim Boundary: 교육용 요청 문장이다. 실제 TRIAL-002 입력·실행·비교 실험이 아니다. 단계는 작업·산출물의 경계입니다. 숨은 사고 과정을 길게 출력하라는 요청이 아닙니다. 정확도·토큰·시간·성능 개선이나 모든 모델의 동일한 동작을 보장하지 않는다.

Beginner Explanation: “언제”의 상황에서 예시 문장을 출발점으로 삼고 실제 명세·파일·자료를 맞춰 넣는다. 요청 길이를 늘리는 것 자체가 목적은 아니다.

Advanced Insight: Treat the technique as a documented starting point. Check the selected model, workload, available tools, evidence and failure conditions before attributing an outcome to the prompt.

C++ Vision Bridge: 기존 crop의 끝 좌표 제외 명세와 제조 검사 pipeline에 적용하는 개념 예시다. 실제 C++ 구현·실행·오류 정책이나 장비 조건은 추가로 확정하지 않는다.

Demo Operation: N/A — static conceptual prompt example. No new Trial, model call, code change, benchmark or live surface demonstration.

Audience Interaction: 요청 예시를 눈으로 확인하게 하고 핵심 부분만 가리킨다. 작성 실습·공개 답변·의무 응답을 요구하지 않는다.

Transition: 다음은 기준을 지정한 코드 리뷰 요청의 활용 상황을 본다.

Time Management: 1분은 핵심 소개의 제안값이다. 전체 문장·출처·주의점 낭독은 생략한다. 실제 시간 적합성은 리허설 전까지 UNVERIFIED이며 기존 ACT 1 55분과 전체 360분의 변경 또는 재배분은 사용자 선택 전 적용하지 않는다.

Fallback: 이 8장 검토용 PPT 또는 prototype/prompt-engineering-addition/preview/S27.png를 사용한다. 현재 production Full/ACT PPT에는 아직 삽입하지 않았다.

Validation Status: CONTENT ALIGNED — final local render and embedded Notes validation is recorded in REVIEW.md. Windows PowerPoint, target fonts, room projection, current product/account and timed rehearsal remain UNVERIFIED.

## S28 — 기준을 지정한 코드 리뷰 요청

Slide ID: S28

Working Title: 기준을 지정한 코드 리뷰 요청

ACT / Section: ACT 1 / proposed 1H — Practical Prompt Methods

Allocated Time: PROPOSED — 1 minute; integration timing awaits user selection

Mode Split: PROPOSED — Lecture 1 minute

Primary Message: 무엇을 찾을지와 어떤 근거로 보고할지를 지정한다.

Opening Question: ““검토해줘”의 범위를 분명히 할 때, 요청을 어떻게 바꾸면 될까?”

Speaker Flow:

1. (0:00–0:15 proposed) 사용 상황을 한 문장으로 짚는다. 필요한 때 선택하는 문장 도구이며 모든 요청에 여덟 기법을 채울 필요는 없다고 연결한다.
2. (0:15–0:45 proposed) 요청 전문을 낭독하지 않고 이 기법이 드러나는 두세 행만 가리킨다. 아래 문장은 복사해 자기 프로젝트 자료로 바꿔 사용할 교육용 예시다.

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

3. (0:45–1:00 proposed) 화면 하단의 핵심을 회수하고 한계를 짧게 짚는다. 다음은 구체적인 근거로 수정 방향 피드백의 활용 상황을 본다.

Evidence / Source: CLM-0038; official documented recommendations checked 2026-10-21. https://learn.chatgpt.com/guides/best-practices; https://learn.chatgpt.com/docs/prompting. Evidence matrix: references/product/PROMPT_ENGINEERING_2026-10-21.md.

Claim Boundary: 교육용 요청 문장이다. 실제 TRIAL-002 입력·실행·비교 실험이 아니다. 리뷰 답변도 누락할 수 있습니다. 필요한 실행 확인·변경 검토·사람의 완료 판단을 함께 사용합니다. 정확도·토큰·시간·성능 개선이나 모든 모델의 동일한 동작을 보장하지 않는다.

Beginner Explanation: “언제”의 상황에서 예시 문장을 출발점으로 삼고 실제 명세·파일·자료를 맞춰 넣는다. 요청 길이를 늘리는 것 자체가 목적은 아니다.

Advanced Insight: Treat the technique as a documented starting point. Check the selected model, workload, available tools, evidence and failure conditions before attributing an outcome to the prompt.

C++ Vision Bridge: 기존 crop의 끝 좌표 제외 명세와 제조 검사 pipeline에 적용하는 개념 예시다. 실제 C++ 구현·실행·오류 정책이나 장비 조건은 추가로 확정하지 않는다.

Demo Operation: N/A — static conceptual prompt example. No new Trial, model call, code change, benchmark or live surface demonstration.

Audience Interaction: 요청 예시를 눈으로 확인하게 하고 핵심 부분만 가리킨다. 작성 실습·공개 답변·의무 응답을 요구하지 않는다.

Transition: 다음은 구체적인 근거로 수정 방향 피드백의 활용 상황을 본다.

Time Management: 1분은 핵심 소개의 제안값이다. 전체 문장·출처·주의점 낭독은 생략한다. 실제 시간 적합성은 리허설 전까지 UNVERIFIED이며 기존 ACT 1 55분과 전체 360분의 변경 또는 재배분은 사용자 선택 전 적용하지 않는다.

Fallback: 이 8장 검토용 PPT 또는 prototype/prompt-engineering-addition/preview/S28.png를 사용한다. 현재 production Full/ACT PPT에는 아직 삽입하지 않았다.

Validation Status: CONTENT ALIGNED — final local render and embedded Notes validation is recorded in REVIEW.md. Windows PowerPoint, target fonts, room projection, current product/account and timed rehearsal remain UNVERIFIED.

## S29 — 구체적인 근거로 수정 방향 피드백

Slide ID: S29

Working Title: 구체적인 근거로 수정 방향 피드백

ACT / Section: ACT 1 / proposed 1H — Practical Prompt Methods

Allocated Time: PROPOSED — 1 minute; integration timing awaits user selection

Mode Split: PROPOSED — Lecture 1 minute

Primary Message: 어긋난 지점과 원하는 변경, 유지할 조건을 적는다.

Opening Question: “첫 제안의 일부가 의도와 다를 때, 요청을 어떻게 바꾸면 될까?”

Speaker Flow:

1. (0:00–0:15 proposed) 사용 상황을 한 문장으로 짚는다. 필요한 때 선택하는 문장 도구이며 모든 요청에 여덟 기법을 채울 필요는 없다고 연결한다.
2. (0:15–0:45 proposed) 요청 전문을 낭독하지 않고 이 기법이 드러나는 두세 행만 가리킨다. 아래 문장은 복사해 자기 프로젝트 자료로 바꿔 사용할 교육용 예시다.

```text
앞선 “테스트 기대 폭을 3으로 바꾸자”는
제안을 수정해줘. 원하는 명세는
crop [1,3)에서 폭 2야.
테스트 기대값은 유지하고,
구현의 끝 좌표 처리만 다시 검토해줘.
기존 API·의존성은 유지해줘.
바꾼 제안과 미확인 사항만 보고해줘.
```

3. (0:45–1:00 proposed) 화면 하단의 핵심을 회수하고 한계를 짧게 짚는다. “이 조건 중 다음 작업에도 다시 적게 될 것은 무엇일까요?”라고 기존 S22–S23의 반복 Context 질문으로 연결한다. 통합 시 기존 두 장은 S30–S31이 될 예정이다.

Evidence / Source: CLM-0039; official documented recommendations checked 2026-10-21. https://learn.chatgpt.com/docs/prompting. Evidence matrix: references/product/PROMPT_ENGINEERING_2026-10-21.md.

Claim Boundary: 교육용 요청 문장이다. 실제 TRIAL-002 입력·실행·비교 실험이 아니다. 앞선 제안은 가상 예시입니다. 원하는 답만 반복시키지 말고 명세와 실제 근거로 방향을 고칩니다. 정확도·토큰·시간·성능 개선이나 모든 모델의 동일한 동작을 보장하지 않는다.

Beginner Explanation: “언제”의 상황에서 예시 문장을 출발점으로 삼고 실제 명세·파일·자료를 맞춰 넣는다. 요청 길이를 늘리는 것 자체가 목적은 아니다.

Advanced Insight: Treat the technique as a documented starting point. Check the selected model, workload, available tools, evidence and failure conditions before attributing an outcome to the prompt.

C++ Vision Bridge: 기존 crop의 끝 좌표 제외 명세와 제조 검사 pipeline에 적용하는 개념 예시다. 실제 C++ 구현·실행·오류 정책이나 장비 조건은 추가로 확정하지 않는다.

Demo Operation: N/A — static conceptual prompt example. No new Trial, model call, code change, benchmark or live surface demonstration.

Audience Interaction: 요청 예시를 눈으로 확인하게 하고 핵심 부분만 가리킨다. 작성 실습·공개 답변·의무 응답을 요구하지 않는다.

Transition: “이 조건 중 다음 작업에도 다시 적게 될 것은 무엇일까요?”라고 기존 S22–S23의 반복 Context 질문으로 연결한다. 통합 시 기존 두 장은 S30–S31이 될 예정이다.

Time Management: 1분은 핵심 소개의 제안값이다. 전체 문장·출처·주의점 낭독은 생략한다. 실제 시간 적합성은 리허설 전까지 UNVERIFIED이며 기존 ACT 1 55분과 전체 360분의 변경 또는 재배분은 사용자 선택 전 적용하지 않는다.

Fallback: 이 8장 검토용 PPT 또는 prototype/prompt-engineering-addition/preview/S29.png를 사용한다. 현재 production Full/ACT PPT에는 아직 삽입하지 않았다.

Validation Status: CONTENT ALIGNED — final local render and embedded Notes validation is recorded in REVIEW.md. Windows PowerPoint, target fonts, room projection, current product/account and timed rehearsal remain UNVERIFIED.
