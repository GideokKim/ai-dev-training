# Prompt Engineering Methods — 2026-10-21

## Scope and evidence boundary

- Checked: **2026-10-21**. OpenAI 공식 문서 본문을 열어 아래 절을 확인했다.
- 대상: ACT 1의 기존 다섯 항목 요청 설계 이후에 삽입할 S22–S29의 여덟 기법.
  기존 Goal / Context / Constraints / Process / Verification을 다시 정의하지 않는다.
- `VERIFIED`는 **공식 문서에 해당 권고가 존재함**을 뜻한다. 기법의 보편적
  우월성, 특정 모델의 성능 향상, 교육용 Prompt의 실행 성공을 뜻하지 않는다.
- 아래 C++ crop / 제조 영상 처리 예시는 **TEACHING ADAPTATION / CONCEPTUAL**이다.
  이 조사에서 모델·코드·테스트를 실행하지 않았고, 새 Trial도 만들지 않았다.
  예시를 TRIAL-002의 실제 입력·출력·검증 기록으로 연결하지 않는다.
- 입력 자료, 제품 surface, 모델, 도구, 계정 권한에 따라 결과가 달라진다.
  Prompt만으로 자료 접근, 실행 도구, 형식 강제 또는 정확성이 보장되지 않는다.
- 대표 사례 집합을 이용한 전체 Prompt 평가 체계는 ACT 4에서 다룬다.
  이 추가 구간은 요청을 구체화하고 응답을 수정하는 방법에 한정한다.

> S22–S29는 DEC-0043의 신규8장이다. 기존 장별 시간을 유지하는 사용자 승인에 따라90장·368분으로 확장한다.

## Stable mapping

| Current slide | Claim ID | Method | Source IDs |
| --- | --- | --- | --- |
| S22 | CLM-0032 | Delimiters: 지시와 자료의 구획 표시 | SRC-0230, SRC-0231 |
| S23 | CLM-0033 | Few-shot: 필요한 입력/출력 예시 | SRC-0230, SRC-0231 |
| S24 | CLM-0034 | Output format: 결과 형식 지정 | SRC-0233, SRC-0234 |
| S25 | CLM-0035 | Grounding + unknown: 제공 근거와 모르는 부분 | SRC-0230, SRC-0234 |
| S26 | CLM-0036 | Material clarification: 결과를 바꾸는 질문 | SRC-0232, SRC-0235 |
| S27 | CLM-0037 | Task decomposition: 검토 가능한 작업 분리 | SRC-0232, SRC-0234, SRC-0231 |
| S28 | CLM-0038 | Criteria-focused review: 기준과 검토 관점 | SRC-0232, SRC-0234, SRC-0235, SRC-0230 |
| S29 | CLM-0039 | Concrete feedback: 구체적인 후속 수정 | SRC-0234 |

## Official source selectors

Selectors는 확인한 문서의 절 제목과 근거 위치를 뜻한다. 화면의 탐색 메뉴,
모델 홍보 문구 또는 검색 결과 요약을 기법의 근거로 사용하지 않는다.

| Source ID | URL | Verified sections / selectors | Supported scope |
| --- | --- | --- | --- |
| SRC-0230 | https://developers.openai.com/api/docs/guides/prompt-engineering | `Message formatting with Markdown and XML`; `Few-shot learning`; `Include relevant context information`; `Coding` | 구획 표시, 입력/출력 예시, 관련 자료 제공, 명확한 책임과 업무 지침을 권고한다. API 문서의 기법을 교육용 요청에 각색하며 효과 수치로 해석하지 않는다. |
| SRC-0231 | https://developers.openai.com/api/docs/guides/reasoning-best-practices | `How to prompt reasoning models effectively` | 간단하고 명확한 지시, 구획 표시, zero-shot을 먼저 시도한 뒤 필요한 예시, 구체적인 성공 기준을 권고한다. 추론 모델에 사고 과정 출력을 요구하는 문구가 불필요하거나 방해가 될 수 있다고 설명한다. |
| SRC-0232 | https://learn.chatgpt.com/guides/best-practices | `Plan first for difficult tasks`; `Improve reliability with testing and review` | 복잡하거나 모호한 작업의 사전 계획·질문, 관련 검사와 변경 검토를 권고한다. 실제 실행은 환경과 권한이 있어야 한다. 기존 `developers.openai.com/codex/learn/best-practices` 주소는 이 URL로 이동했다. |
| SRC-0233 | https://developers.openai.com/api/docs/guides/structured-outputs | `Structured model outputs`; `Handling user-generated input`; `Handling mistakes` | API의 JSON Schema 기반 Structured Outputs와 내용 오류의 잔존 가능성을 설명한다. 채팅에서 JSON을 요청하는 문장 자체가 이 기능은 아니다. |
| SRC-0234 | https://learn.chatgpt.com/docs/prompting | `Prompting overview`; `Set boundaries that prevent real problems`; `Make the result ready to use`; `Improve the result with follow-up messages`; `Prompting Codex`; `Iterate on UI with live updates`; `Review a GitHub pull request` | 필요한 형식·범위, 제공 자료만 사용하고 누락을 표시하는 경계, 구체적인 후속 수정과 검토 초점을 설명한다. UI 예시를 crop 코드에 적용하는 것은 교육용 각색이다. |
| SRC-0235 | https://developers.openai.com/api/docs/guides/latest-model | `Prompting best practices`; `Initiative and follow-through`; `Testing and verification` | 결과를 바꿀 추가 정보와 필요한 자율성, 작업에 맞는 검증 범위를 설명한다. 현재 GPT-6 계열을 위한 시작점이며 선택한 모델·업무에서 평가하라고 명시한다. |

## Method notes and conceptual developer prompts

아래 영문은 강의에서 복사할 수 있는 **교육용 요청 문장**이다. 실제 API의
`developer` role을 설정한 코드도 아니고, 모델에 전달하여 실행한 기록도 아니다.
대괄호는 사용자가 실제 자료를 넣을 자리다.

### S22 / CLM-0032 — Delimiters

- 사용: 긴 C++ 코드, 로그, 지시가 한 메시지에서 섞일 때.
- 공식 권고: Markdown 제목이나 XML로 논리적인 경계를 드러낸다.
- 각색: 코드와 로그를 자료로 표시하고 요청을 별도 구획에 둔다.
- 한계: 구획은 해석을 돕는다. 정확성이나 Prompt injection 차단을 보장하지 않는다.

```text
# Task
Review the attached C++ crop code for the stated defect.
# Source code
<code>[paste code]</code>
# Observed log
<log>[paste log]</log>
# Output
List findings with their supporting code or log excerpt.
```

### S23 / CLM-0033 — Few-shot

- 사용: 원하는 판단·보고 형식이 짧은 지시만으로 전달되지 않을 때.
- 공식 권고: 입력과 원하는 출력을 예시로 주되 지시와 일치시킨다.
- 각색: crop 변경 보고에서 증거 상태를 표현하는 예시를 준다.
- 한계: 추론 모델에서는 예시 없이 먼저 시도할 수 있다. 예시는 정답의
  대체물이 아니며 예시에 없는 crop 정책을 임의로 확정하지 않는다.

```text
Label each statement in the crop change report using these examples:
Input: A supplied test log shows this check passed.
Output: VERIFIED — cite the log.
Input: No execution evidence is supplied for this behavior.
Output: UNVERIFIED — name the missing evidence.
Now label the attached statements using the same format.
```

### S24 / CLM-0034 — Output format

- 사용: 검토 결과를 빠짐없이 비교하거나 후속 문서로 넘겨야 할 때.
- 공식 권고: 필요한 형식과 상세 수준을 지정한다.
- 각색: crop 검토 결과의 필드를 먼저 정한다.
- 한계: 채팅의 표·JSON 요청은 형식 강제 기능이 아니다. API Structured
  Outputs는 별도 Schema 설정이며, 형식 준수와 내용의 사실성은 구별한다.

```text
Report the C++ crop review as a table with these columns:
finding, evidence, affected behavior, proposed change, unverified point.
Use "none found" when no issue is supported.
Keep each cell to one short sentence.
```

### S25 / CLM-0035 — Grounding + unknown

- 사용: 제조 영상 처리 규격과 코드가 다르거나 자료가 누락됐을 때.
- 공식 권고: 관련 자료를 제공하고 제공 자료만으로 답하도록 제한하며 누락을 표시한다.
- 각색: 근거와 추정을 분리하고 없는 crop 정책을 발명하지 않게 요청한다.
- 한계: 출처를 요구해도 인용 오류가 생길 수 있다. 원문과 사람이 대조한다.

```text
Use only the supplied crop specification, C++ code, and log.
Separate supported findings from assumptions.
For each finding, cite the file or source excerpt.
If bounds behavior is not specified, write UNKNOWN and name
the decision or evidence needed. Do not invent the policy.
```

### S26 / CLM-0036 — Material clarification

- 사용: 잘못 추정하면 crop 동작·허용 오차·완료 판단이 바뀔 때.
- 공식 권고: 복잡하거나 모호한 작업은 질문으로 구체화할 수 있다.
- 각색: 결과를 바꾸는 인간의 결정만 질문하고 조사 가능한 사실은 자료에서 찾는다.
- 한계: 모든 세부사항을 묻는 규칙이 아니다. 중요도와 자율성 수준을 요청에 맞춘다.

```text
Before changing the C++ crop behavior, identify missing decisions
that would materially change the implementation or acceptance criteria.
Ask up to three focused questions. Investigate repository facts
from the supplied files and continue analysis that does not depend
on the answers.
```

### S27 / CLM-0037 — Task decomposition

- 사용: crop 변경이 통계 계산과 후속 처리에 영향을 줄 때.
- 공식 권고: 어려운 작업은 편집 전에 조사하고 접근 방법을 계획할 수 있다.
- 각색: 단계별로 사람이 확인할 산출물과 검사 항목을 요청한다.
- 한계: 단순 작업을 불필요하게 세분화하지 않는다. 작업 계획을 요청하는 것과
  모델의 내부 사고 과정을 공개하라고 요구하는 것은 다르다.

```text
Split this crop change into three reviewable tasks:
1. Confirm the input contract and downstream dependencies.
2. Propose the smallest implementation change.
3. Identify focused checks and remaining risks.
For each task, name the deliverable and completion evidence.
```

### S28 / CLM-0038 — Criteria-focused review

- 사용: 검토자가 무엇을 확인해야 할지 불분명하거나 피상적인 칭찬만 나올 때.
- 공식 권고: 검토에 초점·기준을 주고 관련 검사와 변경 검토를 요청한다.
- 각색: “C++ 검토자”는 살펴볼 관점이고 전문성·정확성의 보증은 아니다.
- 한계: 동일 모델의 검토는 독립적인 정답 판정이 아니다. 실행 없이 검사 성공을
  쓰지 않는다. 검증은 작업에 맞는 범위로 수행한다.

```text
Review this change from a C++ maintainer's perspective.
Focus on bounds, integer overflow, buffer ownership,
and downstream compatibility. Report only supported findings
with code evidence and a concrete failure condition.
Separate static review from checks actually executed.
```

### S29 / CLM-0039 — Concrete feedback

- 사용: 첫 답변의 어떤 부분이 문제인지 알 수 있고 수정 범위를 좁힐 때.
- 공식 권고: 첫 결과를 검토하고 구체적인 후속 요청으로 다듬는다.
- 각색: 문제 위치·기대 변화·보존 조건을 함께 전달한다.
- 한계: 반복 횟수가 많다고 품질이 자동 개선되지 않는다. 피드백은 실제
  관찰·요구사항에 근거해야 한다. 전체 평가 체계는 ACT 4 범위다.

```text
Revise only the bounds-checking proposal in your previous answer.
It assumes a policy that the supplied specification does not define.
Replace that assumption with a focused question and list the
affected cases. Keep the public interface and other findings unchanged.
```

## Omission and interpretation guards

- “Think step by step”를 최신 추론 모델의 필수 주문으로 가르치지 않는다.
  SRC-0231의 근거는 추론 모델의 내부 추론과 Prompt 지침에 한정한다.
- SRC-0231에는 오래된 모델 비교·vision 지원 설명도 남아 있다. 해당 페이지를
  2026년 모델 기능 비교표의 근거로 사용하지 않는다.
- 역할 지정을 전부 낡았다고 단정하지 않는다. 업무 책임과 검토 관점을 주는
  용도와 “최고 전문가”라는 문구만으로 정확도가 올라간다는 주장은 구별한다.
- Self-consistency, 다수결, 자기비평을 보편적인 정확도 보증으로 설명하지 않는다.
  이번 문서에서 기법별 우열이나 효과 수치를 새로 주장하지 않는다.
- API `developer` role, `reasoning.effort`, Structured Outputs, tool access는
  구현·설정 기능이다. 같은 단어를 채팅에 적는 것과 동일하지 않다.
- 실제 기록은 원래 Trial의 증거 범위를 유지한다. 이 여덟 예시의 성공·속도·비용
  개선 또는 대상 회사 계정에서의 지원을 `VERIFIED`로 승격하지 않는다.

## Research record

- Source types: official documentation only; no new academic efficacy claim.
- Evidence action: opened the six official pages and inspected the named sections.
- Product execution: NOT EXECUTED.
- New Trial: NONE.
- Observed performance comparison: NONE.
- Target training account / product UI / permissions: UNVERIFIED.
- Existing research and historical Trial records: not renumbered or rewritten.
