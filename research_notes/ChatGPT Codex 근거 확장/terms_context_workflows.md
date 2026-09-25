# Harness and Loop Engineering

## 11. Harness Engineering: 실제 용례, 범위, 교육에서의 정의

**Takeaway**

`Harness Engineering`은 OpenAI가 자사 개발 경험을 설명할 때 실제 사용한 표현이다. 다만 확인한 자료에서 이를 Codex의 독립 제품 기능명이나 업계가 합의한 표준 정의로 제시하지는 않는다. `agent harness`도 문헌과 제품 문서에 따라 모델 실행 루프만 가리키거나, 실행 환경과 도구·상태·검증까지 포함하는 넓은 시스템을 가리킨다.

**Cited Findings**

- OpenAI의 2026년 엔지니어링 사례는 제목과 본문에서 `harness engineering`을 사용한다. 그 사례에서 팀은 에이전트에 작업 의도와 환경을 제공하고, 저장소 구조·도구·검증·피드백 경로를 설계해 사람이 직접 작성하던 코드의 상당 부분을 에이전트가 처리하도록 했다. 이 사례에서 관찰한 실패는 환경과 추상화가 충분히 명시되지 않은 경우와 연결되며, 문서·도구·테스트·리뷰·복구 경로의 개선이 중요하게 다뤄진다. OpenAI 내부 제품 개발 사례이지 보편적 효과를 통제 실험으로 입증한 자료는 아니다. ([OpenAI, “Harness engineering”](https://openai.com/index/harness-engineering/), [S1])
- OpenAI의 Codex 기술 설명은 `harness`를 Codex의 핵심 에이전트 루프와 실행 로직으로 부른다. 이 문맥에서는 모델 호출, 도구 실행, 결과를 대화에 추가하고 다시 모델을 호출하는 런타임 기능과 컨텍스트 관리가 중심이다. 따라서 OpenAI 자료 안에서도 “Codex harness”라는 런타임 구현 설명과 넓은 엔지니어링 실천인 “harness engineering”을 구분할 필요가 있다. ([OpenAI, “Unrolling the Codex agent loop”](https://openai.com/index/unrolling-the-codex-agent-loop/), [S2])
- Anthropic의 managed agents 글은 세션, 하네스, 샌드박스를 구별하고 하네스를 모델 호출 루프와 도구 호출 라우팅을 맡는 층으로 설명한다. 반면 Microsoft Agent Framework 문서는 Agent Harness를 대화 상태·컨텍스트 공급자·도구·미들웨어·관찰성·실행 루프 등을 결합하는 런타임 스캐폴딩으로 설명한다. 이는 두 조직의 문서에서 `harness`가 서로 다른 폭으로 쓰인다는 근거다. ([Anthropic, “Scaling Managed Agents: Decoupling the brain from the hands”](https://www.anthropic.com/engineering/managed-agents), [S3]; [Microsoft Learn, “Agent Harness”](https://learn.microsoft.com/en-sg/agent-framework/concepts/harness), [S4])
- Anthropic의 에이전트 평가 자료는 평가 실행에 쓰이는 `eval harness`와 에이전트가 도구를 호출하고 결과를 반환하도록 하는 `agent harness`를 별도로 설명한다. `harness`는 에이전트 시스템을 둘러싼 평가 기반을 가리키기도 하므로, 문맥 없이 한 가지 뜻으로 고정하면 안 된다. ([Anthropic, “Demystifying evals for AI agents”](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents), [S5])
- 2026년 공개된 개념 논문도 `agent harness`가 제품 전체, 평가 스캐폴딩, 프레임워크, SDK, IDE 플러그인, 오케스트레이터 등 여러 범위로 느슨하게 쓰인다고 문제를 제기한다. 이는 용어의 경계가 정착되지 않았다는 보조 근거이지, 논문이 제안한 구분이 업계 표준이라는 증거는 아니다. ([Yifeng He 외, “What makes a harness a harness: necessary and sufficient conditions for an agent harness,” arXiv, 2026-06-11](https://arxiv.org/abs/2606.10106), [S6])

**교육에서 사용할 운영 정의**

이 교육에서는 MASTER_PLAN의 성숙도 서사와 Harness 장을 기준으로 다음과 같이 한정한다. `Harness Engineering`은 **에이전트가 업무를 안정적으로 수행하도록 작업 환경과 실행 프로세스를 설계·구성·개선하는 일**이다. 여기에는 지시, 컨텍스트 라우팅, 도구, Skills, Subagents, 검증, 워크플로와 복구 경로가 필요에 따라 포함될 수 있다. ([MASTER_PLAN §13](../../plan/MASTER_PLAN.md); 관련 규칙: [INV-MATURITY-003, INV-MATURITY-004, INV-MATURITY-006, INV-MATURITY-010](../../plan/INVARIANTS.md))

이것은 프로젝트의 **교육용 운영 정의**이지 OpenAI의 공식 정의나 업계 합의 정의라고 주장하지 않는다. 컴포넌트 목록은 표준 필수 목록이 아니다. 실제 사례의 실패와 업무 요구에 따라 필요한 구성요소가 달라진다.

| 용어 | 이 노트에서 구분하는 의미 | 주의점 |
|---|---|---|
| Agent harness | 모델 호출, 도구 실행, 상태·컨텍스트·흐름 관리를 가능하게 하는 에이전트 런타임/스캐폴딩 | 자료에 따라 좁은 실행 루프부터 넓은 에이전트 시스템까지 범위가 달라진다. |
| Harness Engineering | 그 런타임과 에이전트가 일할 환경·절차·검증 등을 의도적으로 설계하고 개선하는 실천 | OpenAI가 내부 사례에서 실제 사용한 용어다. 제품 메뉴/기능 이름이나 업계 표준이라는 뜻은 아니다. |
| Agent Framework | 에이전트를 만들기 위한 SDK·라이브러리·플랫폼과 그 추상화 | Framework가 harness 구현을 제공할 수 있지만, 둘은 같은 범주의 단어가 아니다. Microsoft 문서는 Agent Framework 안에 harness 구성 기능이 포함되는 사례를 보여 준다. |

**가능한 구성요소와 근거 범위**

| 구성요소 | 어떤 문제를 다루는가 | 범위 |
|---|---|---|
| Instructions / 문서 | 작업 방식, 경계, 저장소 관례를 전달 | OpenAI 사례는 짧은 진입점에서 주제별 문서로 연결하는 방식을 설명한다. |
| Context routing | 현재 작업과 관련된 정보만 적절한 때 제공 | Prompt/Context Engineering과 겹친다. 분리된 고정 모듈이라는 뜻은 아니다. |
| Tools / Skills / Subagents | 탐색·실행·반복 절차·전문화된 작업 지원 | 제품별 구현은 다르며 모두 항상 필요한 것은 아니다. |
| Workflow / state / recovery | 실행 순서, 상태, 한계, 실패 후 처리 | Microsoft의 런타임 설명과 OpenAI 사례를 근거로 한 교육상 분류다. |
| Verification / evaluation / observability | 결과를 검사하고 실패·마찰을 관찰 | 품질 기준 및 평가 설계에 의존한다. 한 가지 테스트만으로 신뢰성이 보장되지는 않는다. |

구성요소 분류는 MASTER_PLAN의 예시 목록과 위 1차 자료를 합쳐 교육을 위해 정리한 것이다. 업체들이 공동으로 승인한 분류 체계라는 근거는 없다.

**Inferences**

- 이 프로젝트에서는 `Agent Harness`를 구성/런타임 층, `Harness Engineering`을 그 층과 작업 환경을 만드는 설계·개선 실천으로 설명하면 초급자에게 용어의 역할을 구분해 줄 수 있다. 단, 실제 제품 문서가 harness를 넓게 부르는 경우에는 그 조직의 용례를 따로 표시한다.
- `Agent Framework`는 구현을 제공할 수 있는 개발 플랫폼 범주로 설명하는 것이 유용하다. 어느 플랫폼에서 framework와 harness의 경계가 정확히 어디인지까지 보편 규칙으로 일반화하지 않는다.

**Gaps**

- `Agent Harness`와 `Harness Engineering`의 업계 공통 정의 또는 규범 문서는 확인되지 않았다. 교육에서는 위 운영 정의를 사용하고 이후 실제 데모에서 범위를 재검토한다.
- 구성요소를 모두 갖춘 harness가 어느 조직·작업에서도 더 좋은 결과를 낸다는 비교 실험 근거는 이 자료 묶음에 없다.

## 12. Loop Engineering, 피드백, 평가, 반복과 자기 개선

**Takeaway**

“Loop Engineering”은 확인한 OpenAI 1차 자료의 정식 제품 기능명이나 고정된 정의가 아니다. IBM은 에이전트가 행동하고 관찰하고 다음 행동을 정해 반복하는 자동화 워크플로 설계라는 뜻으로 사용한다. 이 교육의 MASTER_PLAN은 그 한 번의 작업 내 루프에 그치지 않고, 작업 결과와 반복 마찰에서 배운 점을 다음 실행 또는 Harness 개선에 반영하는 시스템을 중심으로 정의한다. 두 용례를 같다고 쓰지 않는다.

**Cited Findings**

- IBM Think의 2026년 설명은 `Loop Engineering`을 에이전트가 목표를 달성하도록 최소한의 인간 개입으로 안내하는 반복 워크플로의 설계로 정의한다. 에이전트는 행동하고, 관찰하고, 결정하고, 반복한다. 이는 IBM의 용례를 보여 주는 자료다. 한 조직의 설명만으로 업계 합의라고 부를 수 없다. ([Ivan Belcic, Cole Stryker, “What Is Loop Engineering?”, IBM Think, 2026-07-17](https://www.ibm.com/think/topics/loop-engineering), [S7])
- OpenAI는 Codex를 설명할 때 `agent loop`라는 말을 사용해 모델 추론, 도구 호출 실행, 도구 결과 재투입의 런타임 사이클을 설명한다. 또 별도 Cookbook 예시는 `Agent Improvement Loop`라고 부르며 traces와 사람/모델 피드백으로 eval을 만들고 Codex에 harness 변경을 제안하게 한다. 명칭·층위가 서로 다르므로 이 용례만으로 OpenAI가 `Loop Engineering`을 같은 뜻의 공식 개념으로 채택했다고 말할 수 없다. ([OpenAI, Codex agent loop](https://openai.com/index/unrolling-the-codex-agent-loop/), [S2]; [Wesley Pasfield, “Build an Agent Improvement Loop with Traces, Evals, and Codex,” OpenAI Cookbook, 2026-05-12](https://developers.openai.com/cookbook/examples/agents_sdk/agent_improvement_loop), [S8])
- OpenAI Cookbook 예시는 합성 금융 분석가 데이터를 사용한다. 기본 구성은 추천된 harness 변경을 사람이 승인한 뒤 병합하며, 자동 PR/배포 등은 설정에 따라 가능하게 보여 준다. 예시의 평가는 도메인 전문가의 검토가 필요하다고 설명한다. 따라서 이 자료는 인간 검토가 포함된 개선 루프의 구현 예이지 완전자율 개선이 안전하거나 일반적으로 입증됐다는 결과가 아니다. ([S8])
- OpenAI와 Thrive Holdings의 세금 업무 사례는 실무자 수정, 운영 trace, 맞춤 eval, Codex 반복을 결합했다고 보고한다. 공개 글의 “self-improving”이라는 표현은 사람·운영 데이터·평가·Codex를 포함한 업무 시스템을 가리킨다. 이를 에이전트가 통제 없이 자기 코드를 수정했다는 뜻으로 읽을 근거는 없다. 성과 수치는 사례 당사자가 보고한 결과이며 독립 평가가 아니다. ([Aravind Srinivasan, Samay Shamdasani, Arthur Fernandes Araujo, John de Wasseige, “Building self-improving tax agents with Codex,” OpenAI, 2026-05-27](https://openai.com/index/building-self-improving-tax-agents-with-codex/), [S9])
- 연구 용례에서도 생성–비평–수정은 시스템 자체의 업데이트와 다르다. `Self-Refine`은 같은 언어 모델이 출력을 만들고 자기 피드백으로 반복 수정하는 방법이며 모델 가중치를 추가 학습하지 않는다. `Reflexion`은 경험에서 만든 언어 피드백을 episodic memory로 저장해 다음 시도에 사용하는 방법을 연구한다. 이 연구 결과는 각각 정해진 작업·모델·평가 설정 안에서 해석해야 한다. 자기 비평도 오류를 정확하게 찾는다는 보장이 없다. ([Aman Madaan 외, “Self-Refine: Iterative Refinement with Self-Feedback,” arXiv, 2023-03-30](https://arxiv.org/abs/2303.17651), [S10]; [Noah Shinn 외, “Reflexion: Language Agents with Verbal Reinforcement Learning,” arXiv, 2023-03-20](https://arxiv.org/abs/2303.11366), [S11])

**교육에서 구분할 용어**

| 용어 | 운영상 뜻 | 흔한 혼동 방지 |
|---|---|---|
| Feedback | 테스트 실패, 사람의 수정, 사용자의 선호, trace에서 관찰한 신호 | 그 자체로 합격/불합격 판단이나 해결책은 아니다. |
| Evaluation | 명시한 기준·테스트·전문가 판단으로 결과를 평가 | 신호를 모으는 일과 평가 기준을 적용하는 일을 구분한다. |
| Iteration | 한 작업 흐름에서 생성·실행·검증 등을 반복 | 반복 횟수만 늘어도 학습이나 시스템 개선이 생기는 것은 아니다. |
| Reflection / self-critique | 모델이 이전 결과를 서술적으로 검토해 다음 시도를 안내 | 반성문이 사실 검증을 대체하지 않는다. |
| Improvement | 제품 결과 또는 실행 시스템을 관찰 근거로 바꾸는 일 | 무엇이 바뀌었는지(코드, prompt, context, tool, test, workflow)를 명시한다. |
| Self-improvement | 사람과 자동화의 역할이 서로 다른 사례에 붙이는 넓고 모호한 표현 | 자동 코드 변경, 가중치 학습, harness 보강은 서로 다른 동작이다. 구체적으로 풀어 쓴다. |

**Loop의 두 층위**

- **Product Loop:** 한 작업의 산출물에 초점: `Task → Code → Test → Fix → Test`. 제품 코드나 문서의 품질을 개선한다.
- **Harness Improvement Loop:** 반복되는 에이전트 실행과 마찰에 초점: `Agent Execution → Failure/Friction → Cause Analysis → Recurrence Judgment → Harness Change → Next Execution`. 지시·Skill·Memory·도구·워크플로·검증 등이 실제로 바뀌어 다음 실행 조건을 개선한다.
- MASTER_PLAN의 Loop Engineering은 두 루프를 구별하고 Harness Improvement Loop에 우선적인 서사 비중을 둔다. 실행 루프는 이 시스템의 작업 단위일 수 있지만, 한 작업의 반복과 여러 작업 사이의 학습을 동의어로 취급하지 않는다. 끝없는 `while(true)` 실행 자체도 이 교육의 정의가 아니다. ([MASTER_PLAN §5.9, §14](../../plan/MASTER_PLAN.md); [INV-LOOP-001](../../plan/INVARIANTS.md))

**사람 지시 개선과 자율 자기 수정**

교육용 기본 설명은 **관찰된 마찰을 근거로 개선 후보를 만들고, 검증과 적절한 인간 검토를 거쳐 Harness를 바꾼 뒤 다음 실행에서 효과를 확인하는 흐름**이다. 자동 제안·diff 생성·테스트는 가능하지만, 이를 모델이 스스로 정확히 문제를 판단하고 production 시스템을 무검토 변경한다는 주장으로 확대하지 않는다. 승인 수준은 위험도와 시스템 운영에 따라 달라진다. OpenAI Cookbook의 기본 승인 사례와 자동화 옵션이 둘 다 이 구분을 보여 준다. ([S8]; 사람의 피드백과 eval을 활용한 운영 사례는 [S9])

**Inferences**

- IBM의 정의는 작업 안에서 자동화되는 action–observation–decision 루프에 가깝고, MASTER_PLAN의 중심은 작업 결과를 누적해 이후 시스템을 개선하는 상위 루프다. 교육에서는 이를 `실행 루프`와 `Harness 개선 루프`로 나눠 설명해야 서로 다른 문헌 용례를 숨기지 않으면서 기획 의도를 보전할 수 있다.
- “자기 개선”은 누가 무엇을 어떤 증거로 바꾸는지 함께 말해야 오해가 적다. 교육에서 사례의 인간 승인 여부와 변경 대상(코드 또는 Harness artifact)을 보이도록 한다.

**Gaps**

- `Loop Engineering`이 IBM 용례 외에도 어떤 의미로 사용되는지, 업계에서 어느 범위가 더 일반적인지는 현재 확인 자료만으로 정량화할 수 없다. **TODO:** 향후 교육에서 외부 사례를 추가할 경우 저자·조직·실제 루프 경계를 각각 확인한다.
- Production 환경에서 자율 Harness 수정이 인간 검토보다 안전하거나 효과적이라는 일반적 근거는 확인되지 않았다. 사례별 권한·승인·롤백·측정 조건을 확인해야 한다.

### 근거 출처와 범위 — Harness / Loop

| ID | 저자·날짜 | 자료 유형 / 이 자료가 뒷받침하는 범위 | 확신도 / 변동성 / 한계 |
|---|---|---|---|
| S1 | Ryan Lopopolo, OpenAI, 2026-02-11 | OpenAI 1차 엔지니어링 사례. OpenAI 내부 용례, 환경·도구·문서·검증 설계 설명 | 높음(당사자 용례); 중간(제품 운영 방식 변동 가능); 단일 조직의 회고, 비교실험 아님 |
| S2 | Michael Bolin, OpenAI, 2026-01-23 | OpenAI 1차 기술 설명. Codex 런타임의 agent loop/harness 용례 | 높음(해당 기술 설명); 중간(구현 변경 가능); Loop Engineering의 정의 자료는 아님 |
| S3 | Anthropic Engineering, 2026-04-08 | 1차 엔지니어링 설명. managed-agent에서 harness의 좁은 층위 | 높음(Anthropic의 추상화); 중간(제품 아키텍처 변동); 보편 정의 아님 |
| S4 | Microsoft Learn 저자 표기 없음, 게시일 미표시 | 1차 제품 문서. Microsoft Agent Framework에서 harness의 넓은 런타임 범위 | 높음(해당 framework 문서); 높음(프레임워크 API 변동); 이 제품의 구현 문서임 |
| S5 | Anthropic Engineering, 게시일 페이지에서 미확인 | 1차 엔지니어링 설명. eval harness와 agent harness의 구별 | 높음(문서가 쓰는 구별); 중간(자료 갱신 가능); 표준 용어집은 아님 |
| S6 | Yifeng He, Yinzhe Zhao, Jicheng Wang, Hao Chen, arXiv, 2026-06-11 | 개념 연구/프리프린트. harness 용어 범위의 다의성 문제 제기 | 중간(용례 관찰 근거); 높음(개념 문헌 확장 중); 동료심사·합의 표준으로 취급하지 않음 |
| S7 | Ivan Belcic, Cole Stryker, IBM Think, 2026-07-17 | 기업 기술 해설. IBM이 `Loop Engineering`을 사용하는 명시적 정의 | 높음(IBM 용례); 중간(새 용어 해석 변동); 단일 기업 글, 합의 근거 아님 |
| S8 | Wesley Pasfield, OpenAI Cookbook, 2026-05-12 | 1차 Cookbook 예시. trace→feedback→eval→Codex harness 개선, 인간 승인 기본값 및 설정 가능한 자동화 | 높음(예시 구현); 중간(코드/API 변동); 합성 데이터/예시이며 전문가 검토 필요 |
| S9 | Aravind Srinivasan, Samay Shamdasani, Arthur Fernandes Araujo, John de Wasseige, OpenAI, 2026-05-27 | 당사자 공동 공개 사례. 세금 업무에서 사람 수정·trace·eval·Codex 사용 보고 | 높음(당사자의 공개 설명); 높음(배포·성과 변동); 독립 검증이 아닌 회사 사례 |
| S10 | Aman Madaan 외, arXiv, 2023-03-30 | 연구 논문/프리프린트. 모델 출력 반복 수정과 자기 피드백의 실험 | 높음(논문이 정의한 방법); 낮음(개념은 안정적); 제한된 작업/모델, 모든 자기평가가 맞지 않음 |
| S11 | Noah Shinn 외, arXiv, 2023-03-20 | 연구 논문/프리프린트. verbal feedback/memory를 후속 시도에 사용하는 방법 | 높음(논문이 정의한 방법); 낮음(개념은 안정적); 결과를 연구 설정 밖의 일반 성능으로 확대 금지 |

모든 링크는 **2026-09-25** 확인. “확신도”는 링크된 자료가 해당 조직의 용례 또는 특정 연구 주장을 직접 뒷받침하는 정도이며, 업계 보편성에 대한 확신도를 뜻하지 않는다.

# Context and Prompt Engineering

## 13. Context Engineering과 Prompt Engineering의 관계

**Takeaway**

확인한 Anthropic 1차 자료에서 `Context Engineering`은 프롬프트의 문장만 만드는 일을 넘어, 추론 시점에 모델에 제공되는 상태를 선택·구성·유지하는 실천이다. Prompt Engineering은 주로 모델에게 어떻게 지시할지에 초점을 둔다. OpenAI가 Prompt Engineering이라는 안내와 Context Engineering이라는 Cookbook 주제를 사용하지만, `Context Engineering`을 특정 ChatGPT/Codex 제품 기능명 또는 모든 업체가 합의한 정의로 제시하는 자료는 확인하지 못했다.

**Cited Findings**

- Anthropic의 2025년 글은 자사에서 `context engineering`을 모델의 추론 시점에 제공할 최적의 토큰 집합을 선별·유지하는 전략으로 사용한다고 명시한다. 프롬프트 문구뿐 아니라 system instruction, 도구/MCP, 외부 데이터, 대화 기록 등 현재 모델에 공급되는 전체 상태를 다룬다는 점에서 Prompt Engineering보다 넓게 설명한다. 글 자체도 이 용어를 형성 중인 실천으로 표현한다. 이를 업계 전체의 정의로 승격하지 않는다. ([Prithvi Rajasekaran 외, “Effective context engineering for AI agents,” Anthropic, 2025-09-29](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents), [S12])
- OpenAI Prompt Engineering 가이드는 효과적인 지시를 작성해 모델이 요구사항을 일관되게 만족하도록 하는 방법으로 Prompt Engineering을 다룬다. 모델 출력은 비결정적이고 프롬프트 기법의 효과가 모델 유형·스냅샷에 따라 달라질 수 있으므로, 실제 사용 모델에서 평가하고 변경 시 재검증하라고 안내한다. ([OpenAI API Guide, “Prompt engineering”, 작성자·발행일 페이지 미표시](https://developers.openai.com/api/docs/guides/prompt-engineering), [S13])
- OpenAI Cookbook은 세션 기반 단기 기억 관리를 `Context Engineering`의 사례 주제로 명명한다. 이는 OpenAI 자료에서 관찰되는 용어의 용례이며, Codex의 독립된 기능 이름이나 규격이 아님을 구분한다. ([OpenAI Cookbook, “Context Engineering: Short-Term Memory Management with Sessions,” 2025-09-09](https://developers.openai.com/cookbook/examples/agents_sdk/session_memory), [S14])
- OpenAI의 Codex harness 기술 설명은 실행 루프에서 컨텍스트 관리가 함께 필요하다고 서술한다. MASTER_PLAN의 설명도 Context Engineering이 “무엇을, 언제 제공할지”를 다루고 Harness Engineering이 “그 작업을 수행할 환경과 프로세스는 무엇인지”를 다루도록 구분한다. 이 분리는 교육 서사상의 유용한 역할 구분이지 상호 배타적인 제품 모듈의 경계는 아니다. ([S2]; [MASTER_PLAN §13.1–13.3](../../plan/MASTER_PLAN.md); [INV-MATURITY-002, INV-MATURITY-004](../../plan/INVARIANTS.md))

**교육에서 사용할 운영 정의**

- `Prompt Engineering`: 목표·지시·형식·예시 등을 작성해 모델의 응답 또는 동작을 유도하는 일.
- `Context Engineering`: 작업에 필요한 정보를 골라 관련성·출처·양·전달 시점을 관리하여 모델의 현재 입력 상태를 구성하는 일. 검색 결과, 저장소 파일, 기록, 도구 결과, Memory가 쓰일 수 있다.
- `Harness Engineering`: 그런 컨텍스트 제공을 포함해 에이전트의 도구·실행·검증·복구가 작동하는 업무 환경과 절차를 설계·개선하는 일.

실제 시스템에서는 system prompt, 문서 라우팅, 검색, session memory, 도구 응답, Skills와 workflow가 서로 영향을 준다. 이 정의의 목적은 교육 흐름에서 질문을 나누는 것이지 기술 영역이 완전히 분리된다고 주장하는 것이 아니다.

**Inferences**

- Prompt는 입력의 지시 부분에 초점을 둔 기법, Context는 전체 추론 상태의 관리, Harness는 실행 업무 시스템의 설계라고 가르치면 Chatbot→Prompt→Context→Harness의 단계별 질문을 구별할 수 있다. 이 경계는 MASTER_PLAN에 정렬된 교육용 모델이다.

**Gaps**

- `Context Engineering`에 대해 OpenAI와 Anthropic 사이에 동일한 정식 정의 또는 완결된 공통 기준이 존재하는지는 확인되지 않았다. 현재는 Anthropic의 명시적 정의와 OpenAI의 주제 용례를 별도로 표시한다.

## 14. Prompt Engineering 원칙과 교육용 점검표

**Takeaway**

Prompt Engineering은 목표와 지시, 필요한 맥락, 출력 형식 등을 모델에 명료하게 전달하고 실제 대상 모델에서 결과를 평가하는 작업이다. 문장 길이나 고정 템플릿을 최대화하는 일이 아니다.

**Cited Findings**

OpenAI 1차 안내들은 역할·지시·맥락·예시·원하는 형식을 명확히 하고, 내용 구분자를 활용하며, 모델과 배포 조건에 맞춰 평가하라고 권한다. GPT-6 Astra 관련 자료도 기존 prompt와 skill을 새 모델에 맞춰 다시 검토하고 불필요하게 길거나 상충하는 지시를 줄이도록 안내한다. ([S13]; [Eric Provencher, “Rethinking skills and prompts for GPT-6 Astra,” OpenAI Developers, 2026-09-11](https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra), [S15])

교육에서는 아래 질문을 **현장용 점검표**로 활용할 수 있다. 이는 Goal/Context/Constraints/Process/Verification이라는 이름의 OpenAI 공식 프레임워크가 아니다.

1. **Goal:** 원하는 결과와 완료 기준은 무엇인가?
2. **Context:** 필요한 배경·파일·예시·사실은 무엇인가?
3. **Constraints:** 지켜야 할 경계와 금지 사항은 무엇인가?
4. **Process:** 먼저 조사할지, 계획·도구 호출·산출물 형식을 지정해야 하는가?
5. **Verification:** 무엇을 실행하거나 확인해야 완료로 볼 수 있는가?

상황에 따라 질문을 합치거나 일부를 생략한다. 중요한 사실·성공 기준·검증 방법이 prompt 밖(저장소 지시, Skill, test, 도구)에서 관리된다면 prompt 안에 모두 복제하지 않는다. 고정 틀을 강제하는 대신 작업 실패의 원인과 현재 모델·시스템을 근거로 어느 정보가 어디에 있어야 하는지 선택한다.

**Inferences**

- 최신 모델의 성능 변화가 기존 지시를 과하게 만들 수 있으므로, prompt 품질을 단순한 길이·구체성 극대화와 동일시하면 안 된다. 핵심 성공 조건은 실제 task와 검증 결과로 판단한다.

**Gaps**

- 다섯 항목 체크리스트의 범용성은 연구 결과로 검증된 것이 아니라 수업 설계용 heuristic이다. **TODO:** 실제 데모에서 누락·중복 항목이 있는지 검토한 뒤 필요하면 MASTER_PLAN 변경 절차를 밟는다.

### 근거 출처와 범위 — Context / Prompt

| ID | 저자·날짜 | 자료 유형 / 이 자료가 뒷받침하는 범위 | 확신도 / 변동성 / 한계 |
|---|---|---|---|
| S12 | Prithvi Rajasekaran 외, Anthropic Engineering, 2025-09-29 | 1차 엔지니어링 글. Anthropic의 Context Engineering 용례와 prompt와의 자체 구별 | 높음(Anthropic의 명시적 용례); 중간(실천 진화); 업계 합의 정의의 증거 아님 |
| S13 | OpenAI 문서팀, 발행일·개별 저자 페이지 미표시 | 공식 API 가이드. Prompt 작성·지시·평가의 권장사항 | 높음(문서가 명시한 절차); 높음(모델별 변경); 특정 자료의 권고이지 고정 수식 아님 |
| S14 | OpenAI Cookbook, 2025-09-09 | 공식 Cookbook 예시. Context Engineering이라는 주제명과 세션 관리 사례 | 높음(공식 용례); 중간(API/예제 변동); 제품 기능/표준 정의 증거 아님 |
| S15 | Eric Provencher, OpenAI Developers, 2026-09-11 | 1차 제품/모델 가이드. GPT-6 Astra용 Skills/prompt 재검토와 과잉 지시 위험 | 높음(해당 모델 권고); 높음(모델 세대 의존); 일반화 전 타 모델에서 확인 필요 |

모든 링크는 **2026-09-25** 확인. 최신 모델 권고는 모델 세대에 따라 바뀔 수 있으므로 제작 시점에 다시 확인한다.

# Progressive Disclosure

## 16. Progressive Disclosure의 배경, 에이전트 적용과 트레이드오프

**Takeaway**

Progressive Disclosure는 처음부터 모든 선택지·정보를 보여주지 않고, 필요할 때 세부사항을 드러내는 오래된 UX 원칙이다. 에이전트 문맥에서는 Skills나 참조 문서를 단계적으로 로드해 기본 컨텍스트를 줄이고 필요한 정보를 제때 제공하는 데 사용된다. 하지만 추가 단계는 라우팅 판단과 탐색 비용을 만들며, 더 많은 분할·계층이 언제나 성능을 높이지는 않는다.

**Cited Findings**

- Nielsen Norman Group의 Jakob Nielsen은 2006년 UX 글에서 처음에는 중요한 옵션만 보여 주고, 특수한 옵션은 사용자가 요청할 때 드러내는 패턴을 설명한다. 빈번하게 필요한 정보는 감추지 말고, 숨겨진 경로는 찾을 수 있게 표시해야 한다고 말한다. 이 자료는 UX에서 오랫동안 쓰인 설명을 보여 주지만, 용어를 최초로 만들었다거나 전체 개념의 역사적 기원이라는 증거로 사용하지 않는다. ([Jakob Nielsen, “Progressive Disclosure,” Nielsen Norman Group, 2006-12-03](https://www.nngroup.com/articles/progressive-disclosure/), [S16])
- Anthropic Skills 문서는 Skill의 메타데이터, `SKILL.md`, 추가 참조·스크립트 리소스를 필요에 따라 로드하는 세 단계의 progressive disclosure를 공식적으로 설명한다. ([Anthropic, “Agent Skills overview,” 게시일 페이지 미표시](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview), [S17])
- OpenAI의 Codex Skills 문서도 Skill 이름과 설명을 처음에 보고, 선택된 경우 전체 `SKILL.md`를 불러오는 progressive disclosure를 설명한다. 문서는 Skills 설명을 위한 컨텍스트 예산과 다수 Skill에서의 축약/생략 경고도 기재한다. 이는 Codex Skills의 구체적 기능 동작이며, 모든 Context Engineering 또는 모든 Codex 지시 파일이 동일하게 작동한다는 뜻은 아니다. ([OpenAI Codex, “Agent Skills”](https://developers.openai.com/codex/skills), [S18])
- OpenAI의 GPT-6 Astra 권고는 여러 Skills/AGENTS 지시가 길어지거나 서로 충돌하고, 설명이 잘려 잘못된 Skill 선택을 낳을 수 있다고 경고한다. 내용의 진입점과 세부 내용을 나누되, 매 작업마다 전체 문서나 저장소 지도를 무조건 읽게 하지 말고 필요에 따라 연결하라고 한다. 따라서 공개 문서 라우팅과 staged loading은 적절한 경우에 쓰는 설계 선택이며 무조건 많이 쪼개라는 규칙이 아니다. ([S15])
- 2026년 7월 arXiv 프리프린트는 장문 문서 QA 실험에서 단일 책의 성능이 harness에 따라 달랐고, 탐색 성능이 좋은 harness에서는 progressive disclosure의 추가 이점이 작았다고 보고한다. 여러 책이 있는 설정에서는 flat 또는 한 단계 방식이 더 나았고, 더 깊은 라우팅 단계가 정확도를 낮춘 조건도 보고했다. 실험은 특정 장문 QA benchmark·harness·모델의 범위이며 저장소 코딩이나 교육 자료 탐색을 직접 시험하지 않았다. 결과를 일반 규칙으로 확대하지 않는다. ([Yifeng He, Yinzhe Zhao, Jicheng Wang, Hao Chen, “Is Progressive Disclosure All You Need for Long-Context Agents?”, arXiv, 2026-07-20](https://arxiv.org/abs/2607.17598), [S19])

**에이전트용 적용 패턴**

1. 항상 필요하고 짧은 라우팅 지시 또는 Skill 이름·설명만 시작 컨텍스트에 둔다.
2. 작업이 해당 영역과 일치하면 상세 지시 파일이나 `SKILL.md`를 로드한다.
3. 세부 절차, 예시, 큰 참조 문서, 스크립트는 실제 필요가 있을 때 읽거나 실행한다.
4. 검증 결과와 실제 실패로 어떤 경로·지시가 도움이 됐는지 확인한다.

이 패턴은 OpenAI/Anthropic Skills 문서와 OpenAI Harness Engineering 사례에서 보이는 접근에 맞지만, 교육용 예시다. “더 많이 숨기기”가 목적은 아니다. 모델이 올바른 세부 자료를 빠르게 찾을 수 있어야 하고, 자주 필요한 정보를 깊은 경로에 감추면 오히려 작업 실패가 늘 수 있다.

**Routing / splitting의 이득과 비용**

| 결정 | 기대되는 이득 | 가능한 비용·실패 형태 |
|---|---|---|
| 정보 묶음을 관심사별 문서로 나누기 | 현재 task와 관계없는 지시가 최초 입력을 채우지 않음; 유지관리 경계가 명확해질 수 있음 | 어떤 파일이 필요한지 분류해야 함; 잘못된 라우팅·링크 누락·추가 탐색이 발생할 수 있음 |
| Skill을 메타데이터에서 본문·참조로 단계화 | 세부 절차를 필요할 때만 제공하고 Skills 라이브러리를 확장할 수 있음 | Skill 설명만 보고 오선택/미선택; 설명 길이와 개수로 초기 context 예산 압박; 본문 로드 및 도구 호출 비용 |
| 참조·예시·스크립트를 더 깊게 쪼개기 | 큰 작업 영역에서 덜 쓰는 정보의 노출을 줄임 | 추가 hop과 판단 단계; 검색이 불충분하면 필요한 근거가 누락됨; 계층이 깊어져 탐색의 이득보다 비용이 커짐 |
| 자주 쓰는 핵심 규칙을 전면에 유지 | 중요한 경계와 기본 동작을 놓칠 위험 감소 | 전면 지시가 비대해지고 중복·모순·노후화 위험이 커짐 |

OpenAI GPT-6 Astra의 관찰과 장문 QA 프리프린트는 이 트레이드오프를 뒷받침한다. 다만 정량 성능 수치는 프리프린트의 특정 문서 QA 실험으로 한정한다. ([S15], [S19])

**Inferences**

- 라우팅 계층은 예상 task 빈도, context 예산, 검색 도구 품질, 실패 비용에 맞춰 최소한으로 선택한다. 핵심 원칙은 분할 자체가 아니라 작업 적합성이며, 깊이를 늘리기 전 실제 task에서 발견 가능성과 누락을 검토한다.
- Progressive Disclosure는 Context Engineering의 한 방법이며 Harness의 한 구성 방식이기도 하다. 용어 수준이 다르므로 “Harness Engineering = Progressive Disclosure”라고 설명하지 않는다.

**Gaps**

- UX 원칙의 역사적 최초 제안자와 agent 시스템에서의 초기 도입 시점은 이번 자료만으로 확정하지 않는다. NN/g 글은 2006년의 UX 설명으로만 인용한다.
- 실제 Codex 저장소에서 AGENTS.md, Skills, 참조 문서를 어떤 깊이로 쪼개는 것이 효과적인지 비교 측정하지 않았다. **TODO:** 이후 demo의 task별 실제 라우팅 성공률, 누락, 불필요 탐색, 검증 결과를 기록해 교육 권장 수준을 정한다.
- 장문 QA 결과는 코드 저장소의 Skills/AGENTS.md 설계에 곧바로 적용할 수 없다. 데모나 추가 연구 전까지 수업에서는 “더 깊게 분할할수록 좋다”는 보편 주장을 하지 않는다.

### 근거 출처와 범위 — Progressive Disclosure

| ID | 저자·날짜 | 자료 유형 / 이 자료가 뒷받침하는 범위 | 확신도 / 변동성 / 한계 |
|---|---|---|---|
| S16 | Jakob Nielsen, Nielsen Norman Group, 2006-12-03 | UX 1차 설명. 단계적으로 옵션/세부 정보 제시, discoverability와 자주 쓰는 정보의 중요성 | 높음(저자의 UX 권고); 낮음(기본 원칙은 안정); 용어의 발명/최초 기원 증거 아님 |
| S17 | Anthropic 문서팀, 게시일 페이지 미표시 | 공식 제품 문서. Claude Agent Skills의 3단계 로딩 모델 | 높음(제품 문서의 동작); 높음(기능 변경 가능); Claude Skills 범위를 벗어나 일반화 금지 |
| S18 | OpenAI 문서팀, 게시일 페이지 미표시 | 공식 Codex Skills 문서. Skill 설명/본문의 단계적 로딩과 context 제한 | 높음(제품 문서의 동작); 높음(한도·문서 갱신 가능); Skills에 대한 설명이지 모든 Codex context 제공 방식 아님 |
| S15 | Eric Provencher, OpenAI Developers, 2026-09-11 | 모델/제품 가이드. 과다·충돌 지시, Skill 설명 길이와 조건부 라우팅의 실무 권고 | 높음(당시 모델 가이드); 높음(세대 의존); 시험된 모든 업무에 대한 독립 비교는 아님 |
| S19 | Yifeng He, Yinzhe Zhao, Jicheng Wang, Hao Chen, arXiv, 2026-07-20 | 장문 문서 QA 프리프린트. harness·코퍼스·라우팅 깊이에 따른 PD 효과 사례 | 중간(보고된 실험에 한함); 중간(후속 검증 가능); 코딩·저장소 사용과 benchmark 일반화 근거 아님 |

모든 링크는 **2026-09-25** 확인. 이 장의 실험 근거는 탐색·라우팅의 trade-off를 제시할 뿐 단일한 최적 구조를 결정하지 않는다.
