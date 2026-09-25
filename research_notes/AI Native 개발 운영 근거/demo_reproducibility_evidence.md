# Demo 재현성, 실패 시나리오, Before/After 증거

기준일: 2026-09-25. STEP 03 §§45–47 연구 메모다. OpenAI 제품 문서는 이 날짜에 확인했으며 제품 동작은 변할 수 있다. 외부 연구 결과, 제품 설명, 프로젝트 적용 제안과 확인되지 않은 사항을 구분한다. 이 프로젝트의 Demo·실험·점수·실패 재현은 수행하지 않았다.

## Key Question 1 — 무엇을 고정할 수 있고, Demo 재현성의 한계는 무엇인가?

### Takeaway

재현 가능한 Demo는 동일한 입력·저장소·환경·검증을 다시 준비하고, 무엇이 관찰됐는지 추적할 수 있는 Demo다. 모델이 만든 조사 순서나 답변이 매번 동일하다는 약속은 아니다. 결정적인 테스트 결과와 변동 가능한 에이전트 궤적을 구분해야 한다.

### Cited Findings

- Codex Cloud는 저장소를 선택한 branch 또는 commit SHA에서 checkout하고, 런타임 버전·setup/maintenance script·agent 인터넷 접근 정책을 설정하게 한다. setup은 인터넷을 사용할 수 있으며 agent 단계의 인터넷은 기본 차단이다. 컨테이너 cache는 최대 12시간 유지될 수 있고 재개 시 branch checkout과 선택적 maintenance가 실행된다. [Codex Cloud environments, OpenAI, 2026-09-25 확인](https://learn.chatgpt.com/docs/environments/cloud-environment) — 제품 설명에 대한 확신 높음, 변동성 높음.
- OpenAI-hosted sandbox의 Agents API는 Python/system/npm 패키지 버전과 setup 명령, 네트워크를 enabled/disabled/restricted로 설정하게 한다. 이는 Agents API 문서이므로 Codex Cloud나 ChatGPT UI 기능으로 일반화할 수 없다. [OpenAI-hosted sandboxes, OpenAI API, 2026-09-25 확인](https://developers.openai.com/api/docs/guides/agents-api/environments/openai-hosted) — API 범위의 확신 높음, 변동성 높음.
- Agents API Web Search에는 live, cached, disabled 모드가 있으며 live는 최신 웹을, cached는 저장 웹 자료를 검색한다. 2026-09-10 기록 예시도 실행 답변이 달라질 수 있다고 설명한다. 이는 Agents API 기능이다. [Web search, OpenAI API, 2026-09-25 확인](https://developers.openai.com/api/docs/guides/agents-api/tools/web-search) — API 범위의 확신 높음.
- Bjarnason, Silva, Monperrus의 On Randomness in Agentic Evals (arXiv v3, 2026-03-25; ICLR 2026 Workshop)는 SWE-Bench-Verified에서 3개 모델, 2개 scaffold, 두 temperature 설정, 10회 독립 반복을 대상으로 60,000개 trajectory를 분석했다. 단일-run pass@1의 관측 범위는 2.2–6.0 percentage point였고 temperature 0에서도 일부 설정은 표준편차가 1.5 point를 넘었다. 이는 논문 설정의 결과이지 모든 제품의 변동폭은 아니다. [논문](https://arxiv.org/abs/2602.07150) — 연구 범위 내 확신 중간 이상, 외삽 낮음.
- 같은 연구는 temperature 0에서도 추론 엔진의 수치 연산·병렬화·하드웨어 최적화·batching 등이 비결정성을 남길 수 있다고 논의한다. [논문 §2.4](https://arxiv.org/abs/2602.07150) — 해당 연구 설정에 중간 확신, 타 환경 일반화 제한.
- OpenAI Model selection 문서는 모델 가용성·도구·추론 설정·한도가 제품과 모델 버전에 따라 다를 수 있다고 한다. GPT-6 Astra API 페이지는 snapshot을 통한 버전 고정을 설명하지만, 2026-09-25에 확인한 현재 목록에는 날짜가 붙은 버전 식별자가 아니라 gpt-6-astra 이름만 보였다. 이 문서만으로 ChatGPT/Codex UI의 snapshot 고정 여부를 확인할 수 없다. [Model selection](https://developers.openai.com/api/docs/guides/model-selection), [GPT-6 Astra model page](https://developers.openai.com/api/docs/models/gpt-6-astra) — API 페이지에 대한 확신 중간, 변동성 높음.
- MASTER_PLAN §8.3은 시작 상태·prompt·예상 동작·관찰 화면·성공 조건·fallback·insight 기록을 요구하고, 중요한 Live Demo에 검증된 recording/screenshot을 fallback으로 두도록 한다. [MASTER_PLAN.md §8.3](../../plan/MASTER_PLAN.md) — 프로젝트 Source of Truth에 대한 확신 높음.

### Inferences

- 권장 실행 기록: Demo ID, task와 prompt, 시작 commit 및 clean/dirty 상태, 제품 표면·표시 모델명·가능한 버전/설정, 실행 시각, OS/container·runtime·dependency lock, setup/maintenance 내역, tool·permission·network/search mode, 정확한 검증 명령과 결과, diff·로그를 남긴다. 기록 목적은 전부 고정했다고 주장하는 것이 아니라 통제한 조건과 미확인 조건을 구분하는 것이다.
- 고정 가능한 요소는 commit SHA, prompt, 시작 파일 상태, test fixture, 지정 가능한 package/runtime 버전, 검증 명령, 네트워크 차단·제한 설정이다. Cloud cache의 사용·초기화 여부도 기록한다. 정확한 inference backend, 외부 서비스 상태, 전체 Cloud image digest가 UI에서 고정·노출되는지는 확인하지 못했다.
- 모델 alias/backend, agent의 탐색·도구 호출 경로, live 검색 결과, 외부 웹/API 응답은 변동될 수 있다. snapshot이나 offline fixture를 쓸 수 있으면 쓰고, 불가능하면 한계를 적는다. Temperature 0·commit SHA·snapshot 중 하나를 전체 run 동일성 보장으로 설명하지 않는다.
- 검증된 run의 녹화·screenshot·당시 diff·저장 로그는 날짜·commit·환경 설명과 함께 그 시점의 실행 증거로 제시할 수 있다. 다만 현재 Live 실행의 증거와 구분하고, 실행하지 않은 결과를 연출하지 않는다.

### Gaps

- Codex UI/desktop/cloud 표면별 모델 snapshot 선택 및 영구 고정 여부는 확인하지 못했다. Demo 전에 실제 쓸 제품 표면의 현재 설정을 다시 확인해야 한다.
- 이 저장소가 외부 검색·서비스를 필요로 하는지, cache reset 범위와 offline fixture 구성은 미정이고 실행되지 않았다.

## Key Question 2 — 실패 후보 A–I는 그럴듯하며, 반복 시연할 수 있는가?

### Takeaway

A–I는 Demo 설계용 가설이며 실제 프로젝트에서 발생했거나 재현된 실패가 아니다. 반복 가능한 시나리오에는 명시적인 시작 fixture와 관찰 가능한 성공·실패 기준이 필요하다. 아래 재현성 평가는 발생 빈도나 실측 성공률이 아니라, 후보를 의도적으로 구성했을 때의 정성 판단이다.

### Cited Findings

- OpenAI Harness Engineering (2026-02-11)은 내부 제품 개발에서 하나의 큰 AGENTS.md를 시도했을 때 task·코드·관련 문서를 밀어내고, 중요도를 흐리고, 낡은 규칙이 쌓였다고 회고한다. 이는 한 팀의 경험이며 통제 실험이나 길이 임계치가 아니다. [Harness engineering](https://openai.com/index/harness-engineering/) — 해당 사례에 중간 확신, 일반화는 낮음.
- Gloaguen 외 Evaluating AGENTS.md (arXiv, 2026-02-12 제출)는 SWE-bench와 12개 저장소의 138개 issue로 만든 CTXbench에서 context file을 비교했다. 자동 생성 context의 해결률 차이는 각각 −0.5%/−2%로 통계적으로 유의하지 않았지만 inference cost는 20%/23% 증가했다. 개발자 작성 context의 평균 +2.4%도 유의하지 않았고, 파일 길이와 성공률·비용의 뚜렷한 관계를 찾지 못했다고 보고한다. [논문](https://arxiv.org/abs/2602.11988) — paper 설정에 중간 확신, preprint·범위 제한.
- Khatri의 Do Context Files Help Coding Agents? (arXiv, 2026-07-28 제출)는 Codex·Claude Code, 3개 저장소의 17개 task, 288회 run, gold-test로 controlled ablation을 보고한다. 초록은 correctness 효과가 equivalence test상 ±10–15 percentage point보다 작았다고 요약한다. task 수가 제한된 preprint이므로 앞선 연구와 함께 전역 결론으로 만들 수 없다. [논문](https://arxiv.org/abs/2607.27250) — 설정 범위의 확신 중간 이하, 일반화 낮음.
- OpenAI Evaluation best practices는 instruction following, functional correctness, tool 선택·인자, handoff 등으로 평가 대상을 나누고 typical·edge·adversarial case 및 변경마다 반복 평가할 것을 권한다. 이 가이드는 A–I의 발생률 연구가 아니다. [Evaluation best practices](https://developers.openai.com/api/docs/guides/evaluation-best-practices) — 방법 권고에 높음, 실증 효과 크기는 아님.

### Inferences

아래 높음/중간/낮음은 수치 측정이 아닌 정성적 시연 설계 분류다. 반복성은 fixture를 고정했을 때의 가능성을 뜻한다.

| 후보 | 현실성·fixture 재현성 | 교육 가치 | 설계·회복 방향 |
|---|---|---|---|
| A. 모호한 prompt scope | 현실성 높음, 재현성 중간. 같은 입력에서도 해석·변경 범위가 달라질 수 있음. | 높음: 성공 조건과 범위 명시. | 모호한 가상 task를 고정하고 diff 범위를 관찰한다. 목표·비목표·완료 조건을 명확히 해 회복한다. |
| B. 빠진 repository 규칙 | 현실성 높음, 재현성 중간~높음. 규칙을 사후에 만들어 실패라 해서는 안 됨. | 높음: 저장소 규칙과 context. | canonical convention/test가 있는 가상 fixture를 쓴다. 규칙을 찾고 근거 source를 연결하도록 회복한다. |
| C. 지나치게 큰 AGENTS | 현실성 중간, 부정 효과 재현성 낮음~중간. 길이만의 인과 효과는 미확정. | 중간~높음: 관련성·유지보수성. | 길이 자체를 오류로 두지 말고 동일 task에서 불필요한 지침만 추가해 준수·누락·탐색·비용을 비교한다. 지도와 상세 자료 분리를 회복 가설로 둔다. |
| D. verification 누락 | 현실성 높음, 검증 명령이 고정되면 재현성 높음. 매 run 발생을 전제하지 않음. | 높음: 주장과 실제 검증 구분. | test/build command와 terminal 기록으로 실행·exit status를 확인한다. 검증 실행 후 주장과 결과를 일치시킨다. |
| E. 오래된 command | 현실성 높음, 문서와 tool 버전을 고정하면 재현성 높음. | 높음: 실행 결과로 절차 확인. | 의도적 teaching fixture로 구성한다. 최신 문서·스크립트로 갱신하고 같은 검증을 다시 실행한다. 프로젝트 과거 사건이라 부르지 않는다. |
| F. 과도한 조사 context | 현실성 중간~높음, 경로 재현성 낮음~중간. C의 정적 지침 분량이 아닌 task 중 수집 자료 문제. | 중간~높음: 조사 폭과 비용. | 필수 문맥은 유지하고 관련 없는 자료만 바꾼다. 탐색량·누락·시간·비용을 관찰하고 관련 자료만 선택·점진 노출한다. |
| G. 재발견·중복 조사 | 현실성 높음, 입력을 고정하면 반복성 중간~높음; 외부 자료가 변하면 낮아짐. | 중간: 결정과 조사 결과 보존. | 이전 결과 없는 fixture에서 중복 source/tool 호출을 관찰하고, 회복은 근거 링크가 있는 durable artifact를 남기는 것. 특정 memory 기능은 가정하지 않는다. |
| H. 오래된 memory/note | 현실성 중간, 오래된 note fixture는 반복 가능하나 agent가 이를 따를지는 변동. | 높음: 최신 Source of Truth 확인. | 예시의 오래된 note와 최신 canonical file을 놓고 날짜·authority 확인을 관찰한다. 이를 Codex 기본 memory의 오작동으로 묘사하지 않는다. |
| I. 누적된 상충 규칙 | 충돌 fixture는 재현성 높음, 어느 규칙을 택할지는 중간~낮음. | 높음: 책임·우선순위·canonical source. | 가상 규칙 충돌을 심고 출처 선택을 기록한다. 임의 선택 대신 책임과 우선순위를 정리한다. |

표는 시연 설계 제안이지 실제 실패 목록이 아니다. 특히 C·F·H·I는 실제 Codex의 발생 빈도나 제품 동작 보장이 아니다.

### Gaps

- 어떤 A–I도 이 프로젝트 저장소나 타 repository에서 실행하지 않았다. 실제 발생률·제품 버전별 재현 횟수·회복률은 미확정이다.
- Demo repository·기술 stack·검증 명령이 없어 B·D·E의 oracle 및 후보별 fixture가 없다.
- 연구 결과는 저장소·모델·task·context 생성법이 다르다. context 길이·질·목적·유지주기를 분리한 추가 연구 없이 전역 규칙을 도출할 수 없다.

## Key Question 3 — Before/After를 공정하게 보여주고 주장을 제한하려면?

### Takeaway

교육용 Before/After는 Harness 변경이 어떤 차이를 낼 수 있는지 설명하지만, 단 한 번의 전후 실행으로 개선 원인을 증명하지 못한다. 인과 주장을 하려면 task별 반복 run, 통제된 시작 상태와 검증, 변동성 보고가 필요하다.

### Cited Findings

- OpenAI agent evaluation 가이드는 목표·성공 기준·dataset·metric을 먼저 정하고, 결과 비교 후 변경마다 continuous evaluation을 하며 새로운 nondeterminism 사례를 추가하라고 한다. trace의 개별 조사와 dataset/eval run 비교를 구분한다. [Evaluation best practices](https://developers.openai.com/api/docs/guides/evaluation-best-practices), [Evaluate agent workflows](https://developers.openai.com/api/docs/guides/agent-evals) — 공식 권고에 높음, 프로젝트 성과의 실증은 아님.
- Agentic eval randomness 연구는 작은 개선을 단일 pass@1로 판단하지 말고 독립 반복과 power analysis를 고려하라고 권한다. 이는 해당 연구 setting의 권고이며 교육 Demo의 적정 반복 수는 정하지 않는다. [On Randomness in Agentic Evals](https://arxiv.org/abs/2602.07150) — 논문 설정에서 중간 이상, 직접 외삽은 제한.
- Codex Cloud는 선택 commit 외에도 cache 재개·maintenance·network 설정을 사용한다. 동일 commit만으로 전체 환경이 동일하다고 단정할 근거는 없다. [Codex Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment) — 문서 동작에 높음; 비노출 내부 변동 미확인.
- Agents API trace의 token usage는 best-effort이며 null 또는 사후 변경 가능하고 최종 청구값이 아니라고 공식 문서가 설명한다. 이는 Agents API 계량 제한이다. [Observability and usage](https://developers.openai.com/api/docs/guides/agents-api/observability) — API 문서에 높음; Codex UI로 일반화 불가.
- MASTER_PLAN §8.3은 시작 상태·prompt·성공 기준·관찰 증거·fallback을 기록하고, 검증된 녹화/screenshot을 fallback으로 인정한다. [MASTER_PLAN.md §8.3](../../plan/MASTER_PLAN.md) — 프로젝트 요구사항에 높음.

### Inferences

- **통제 변수:** 동일 task/prompt, baseline commit과 clean 시작 상태, test data·success oracle, tool·permission, dependency lock/runtime, setup·network·search 정책을 유지한다. prompt 자체가 변경 대상이면 그것만 intervention으로 명시한다. 수정된 Before working tree를 After의 시작점으로 쓰지 않는다.
- **모델과 환경:** 제품 표면·표시 모델명·reasoning/temperature 설정 및 확인 가능한 버전을 기록한다. 정확한 버전이 공개되지 않으면 모델을 고정했다고 주장하지 않는다. 양쪽을 fresh worktree/container에서 돌리거나 cache 조건을 맞춘다.
- **외부 자료와 검증:** MCP/plugin/browser/search 도구와 권한을 고정한다. live 자료가 불필요하면 저장 input/offline fixture를 사용한다. 필요하면 시각·search mode·allowed domains·반환 자료를 남긴다. 코드 상태는 동일 test/build/static check로 판정하고 exit status·diff를 저장한다. scope 준수 같은 정성 기준은 평가 주체와 rubric을 사전 정의한다. 프로젝트 기준/threshold는 미정이므로 임의 수치를 만들지 않는다.
- **Failure → Harness change → Re-evaluate:** baseline prompt·commit·diff·검증 output/log를 보존한다. 관찰 실패와 원인 가설을 나눈 후 관련 Harness 요소 하나를 바꾸고 동일 task를 fresh state에서 재실행한다. 원래 실패, 새 실패·scope 확장, 검증 비용을 함께 관찰한다. 효과가 반복되지 않으면 일반적 개선이라 표현하지 않는다.
- **표현:** 사전 녹화 1회와 사후 녹화 1회는 특정 조건의 illustrative demo다. prompt·repo·model·환경을 함께 바꾸면 차이의 원인을 분리할 수 없다. 반복 결과·변동폭을 보고하더라도 결론을 해당 task·모델·환경 범위로 한정한다.
- **표기 예시:** “Illustrative: 사전 준비된 두 실행 비교. 조건: task X, commit abc123, model 표시명 Y, 동일 테스트 Z. 변경: AGENTS 지침 1개. 각 1회이며 일반적 개선 효과를 주장하지 않음.” 확인되지 않은 버전·환경은 “미확인”으로 두고 녹화 날짜와 실행 당시 조건을 함께 적는다.
- 비용·latency는 함께 관찰할 수 있으나 모델·검색·tool·retry·계량 범위를 구분한다. Agents API trace usage는 최종 비용 근거로 혼용하지 않는다.

### Gaps

- Demo repository, 평가 사례집, 모델/환경, metric, 반복 수, 비용·지연 수집법이 선택되지 않았다. 프로젝트 검정력·최소 감지 효과·통과 기준은 미정이다.
- DECISIONS.md의 OQ-003(실행 환경/fallback), OQ-007(repository 검증 기준), OQ-009(Loop 평가 기준)는 Demo에서 확인할 사항이 남아 있다. 현재 failure corpus나 Before/After 결과는 없다. [DECISIONS.md](../../plan/DECISIONS.md)
- 제품 UI가 snapshot, 전체 environment image digest, inference backend, 정확한 end-to-end latency/cost를 고정·노출하는지는 확인하지 못했다. 실제 사용할 제품 표면을 정한 뒤 공식 문서를 재확인해야 한다.
