# Long Context, Lost in the Middle, and Repository Evidence

조사 기준일: 2026-09-25. 모든 현행 제품 문서는 같은 날짜에 확인했다. 이 노트는 STEP 03의 Lost in the Middle 및 Context Window / Long Context 조사 범위를 다룬다. 제품 동작은 표면, 모델 ID, 날짜, 계정 설정에 따라 달라질 수 있다.

## 1. Lost in the Middle 원 논문이 실제로 확인한 것

### Takeaway

Liu 등은 입력 안의 관련 정보 위치를 통제해 다중 문서 QA와 합성 key-value 검색을 평가했고, 연구한 여러 2023년 모델에서 위치에 민감한 성능 저하를 관찰했다. 이 결과는 특정 모델·검색 과제의 행동 결과이며, 오늘날 ChatGPT/Codex의 모든 긴 Prompt나 코드 저장소 작업에서 “중간을 잊는다”는 보편 법칙을 뜻하지 않는다.

### Cited Findings

- Nelson F. Liu, Kevin Lin, John Hewitt, Ashwin Paranjape, Michele Bevilacqua, Fabio Petroni, Percy Liang의 논문은 2023-07-06 arXiv에 처음 제출되었고, 2024년 2월 TACL 12권 157–173쪽에 게재되었다. 2026-09-25 확인. 증거 유형: 동료 심사 학술 논문. 범위: 저자들이 2023년에 사용한 언어 모델과 실험 과제. 신뢰도: 논문의 서지·실험 보고에 대해 높음. 변동성: 역사적 결과는 낮음, 현재 제품에의 외삽은 높음. [arXiv 원문](https://arxiv.org/abs/2307.03172), [TACL 논문 및 PDF](https://aclanthology.org/2024.tacl-1.9/)
- 다중 문서 QA에는 NaturalQuestions-Open의 문단 답변이 있는 2,655개 질문을 사용했다. 각 Prompt에 최대 100-token Wikipedia passage를 여러 개 넣되 정확히 하나에 답을 두고 나머지를 distractor로 삼았다. 답 문서의 위치와 총 문서 수 10·20·30을 바꿨으며, 주 지표는 정답이 출력에 나타났는지 보는 accuracy였다. 2026-09-25 확인. 증거 유형: 통제 실험 설계. 범위: retrieval + QA, 하나의 gold passage와 인위적으로 구성한 distractor 문서. 신뢰도: 높음. 변동성: 낮음. [실험 설정과 결과](https://aclanthology.org/2024.tacl-1.9.pdf)
- 주 실험은 MPT-30B-Instruct, LongChat-13B (16K), GPT-3.5-Turbo 및 16K 변형, Claude-1.3 및 100K 변형을 평가했다. GPT-4 (8K)는 비용 때문에 다중 문서 QA의 일부만 측정했고, 저자들은 그 부분에서 더 높은 절대 성능과 유사한 위치 경향을 보고했다. 생성은 greedy decoding이었다. 2026-09-25 확인. 증거 유형: 학술 평가. 범위: 구형 특정 모델 스냅샷. 신뢰도: 높음. 변동성: 낮음(역사적 서술), 현재 제품 관련성은 매우 변동적. [모델 및 버전 정보](https://aclanthology.org/2024.tacl-1.9.pdf)
- 답 문서가 Context의 시작 또는 끝에 있을 때 정확도가 높고, 중간에 있을 때 낮아지는 U자형 곡선이 여러 설정에서 나타났다. GPT-3.5-Turbo는 20개·30개 문서 조건의 최악 위치에서 문서 없이 답하는 56.1% closed-book 정확도보다도 낮았다. 논문은 GPT-3.5의 최악 경우 성능 저하가 20%를 넘을 수 있다고 보고한다. 이는 논문 과제의 수치이지 현재 모델의 수치가 아니다. 2026-09-25 확인. 증거 유형: 실험 결과. 범위: 해당 QA 데이터, 모델 버전, Prompt, greedy decoding. 신뢰도: 높음. 변동성: 낮음(논문 결과), 일반화는 높게 변동. [TACL 논문](https://aclanthology.org/2024.tacl-1.9/)
- 별도의 합성 key-value 과제는 고유 UUID key-value 쌍 중 질문에 해당하는 value를 회수하게 했다. 일부 모델은 이 과제를 잘 풀었고, 다른 모델은 중간 위치에서 저하를 보였다. 질문을 데이터 앞뒤에 반복하는 query-aware 구성은 합성 회수 과제에는 큰 도움을 줄 수 있었지만 다중 문서 QA 경향은 조금만 바꿨다. 저자들의 open-domain QA 사례에서도 retrieved 문서를 20개에서 50개로 늘린 효과는 GPT-3.5-Turbo 약 1.5%, Claude-1.3 약 1%로 작았다. 2026-09-25 확인. 증거 유형: 합성 실험과 QA 사례 분석. 범위: 두 구체 과제에 한정. 신뢰도: 높음. 변동성: 낮음. [원 논문 PDF](https://aclanthology.org/2024.tacl-1.9.pdf)
- **비주장:** 논문은 GPT-6, 현재 Codex, AGENTS.md, 코드 저장소 편집을 평가하지 않았다. 성능 결과는 위치 민감성을 보여 주지만, 모든 모델이 항상 중간을 잊는다거나 특정 내부 attention 메커니즘이 원인이라고 입증하지 않는다. 논문 자체도 더 긴 입력이 정보 제공으로 도움을 줄 수 있는 한편 reasoning 대상 콘텐츠를 늘려 정확도를 낮출 수 있으며, 손익은 downstream task에 따라 달라진다고 한정한다. 2026-09-25 확인. 증거 유형: 실험 범위 및 저자 논의 검토. 신뢰도: 높음. 변동성: 낮음. [원 논문](https://aclanthology.org/2024.tacl-1.9/)

### Inferences

- 수업에서는 “관련 정보가 긴 입력의 위치에 따라 영향을 받은 일부 모델·과제가 보고되었다”라고 설명할 수 있다. “LLM은 항상 중간을 잊는다”나 “현재 Codex도 같은 실패를 한다”라고 단정할 수 없다. 이 범위 구분은 논문의 2023년 모델·QA/회수 설정과 현재 제품의 별도 검증 필요성에서 도출한 해석이다. [Liu et al.](https://aclanthology.org/2024.tacl-1.9/)
- 위치 실험을 재현한다면 모델 ID와 표면, Prompt, 입력 길이, 사실의 위치, 반복 횟수, 정답/오답/근거 없음 결과를 기록하고 현재 Codex 실험 결과를 논문 결과와 분리해야 한다. 이는 권장 Demo 설계이며 이 노트에서는 실험을 실행하지 않았다. [Liu et al.](https://aclanthology.org/2024.tacl-1.9/)

### Gaps

- TODO: 이 프로젝트의 현재 ChatGPT/Codex 모델을 사용한 통제된 위치 민감성 실험 및 코드 저장소 작업에서의 결과.
- TODO: 특정 모델·과제에서 성능이 떨어지기 시작하는 보편 token 임계값. 원 논문은 그러한 보편 임계값을 제시하지 않는다.

## 2. 후속 연구가 보여 주는 과제별 차이와 코드 저장소 증거

### Takeaway

후속 연구는 “긴 Context”를 단일 능력으로 취급하지 말아야 한다는 점을 강화한다. 일반 정보 회수, 연관 추론, 코드 검색, 저장소 QA, 코드 실행 추론은 서로 다른 과제이며, 더 많은 토큰은 어떤 설정에서 유용하지만 다른 설정에서는 잡음 또는 task mismatch를 더할 수 있다.

### Cited Findings

- **기존 근거의 재검증 — NoLiMa:** Ali Modarressi 등은 2025-02-07 제출, ICML 2025 논문에서 질문과 답변 needle의 어휘 겹침이 적은 연관 회수 과제를 제안했다. 128K 이상 Context를 표방한 12개 모델을 평가했으며, 1K 미만 짧은 입력에서 좋은 성능을 보인 뒤 32K에서는 10/12 모델이 짧은 Context 기준 점수의 절반 미만으로 떨어졌고 GPT-4o는 99.3%에서 69.7%로 감소했다. 2026-09-25 확인. 증거 유형: 동료 심사 학술 벤치마크. 범위: 비문자적 연관 회수; 저장소 코드 작업은 아님. 신뢰도: 해당 Benchmark 결과에 대해 높음. 변동성: 역사적 결과는 낮음, 새 모델 적용은 높음. [NoLiMa 원문](https://arxiv.org/abs/2502.05167)
- **코드의 긴 입력 평가 — RepoQA:** Jiawei Liu 등은 2024-06-10 제출된 연구에서 50개 공개 저장소, Python/C++/Java/TypeScript/Rust, 500개 Searching Needle Function 과제를 구성했다. 모델에 dependency 순으로 이어 붙인 최대 16K 코드 Context와 함수의 자연어 설명을 주고 목표 함수를 회수하게 했다. 33개 모델을 평가하고, 구문적으로 유효한 생성 코드 중 목표 함수와의 similarity threshold 0.8 이상을 성공으로 채점했다. GPT-4o와 Claude-3-Opus는 보고된 대표 결과에서 평균 90.6%였지만 언어별 점수는 달랐다. 2026-09-25 확인. 증거 유형: 학술 코드 Benchmark; arXiv 논문/ICML 표기. 범위: 설명으로 함수 하나 찾기, 저장소 전체의 아키텍처 이해나 편집은 아님. 신뢰도: 과제 결과에 높음. 변동성: 낮음(역사적 결과), 모델 일반화는 높음. [RepoQA 논문](https://arxiv.org/abs/2406.06025)
- **전체 저장소와 검색 비교 — CoReQA:** Chen 등은 2025년 공개한 저장소 질문응답 연구에서 GitHub issue/comment를 기반으로 190개 저장소, 4개 언어, 1,563 QA를 구성하고 무 Context, BM25 등 일반 retrieval, Context 제한 내 전체 저장소 제공을 비교했다. 저자들은 관련 Context retrieval이 성능을 조금 높였고, 전체 저장소 제공 역시 약간만 개선하며 점수가 여전히 낮았다고 보고했다. 2026-09-25 확인. 증거 유형: 학술 연구 원고(preprint; 이 자료에서 동료 심사 게재 여부는 확인하지 않음). 범위: repository QA와 저자들이 설정한 세 baseline, 모든 규모·모델·검색 방식에 대한 비교는 아님. 신뢰도: 저자 보고에 중간. 변동성: 낮음(보고 결과), 일반화는 높음. [CoReQA 원고](https://arxiv.org/abs/2501.03447)
- **저장소 QA 및 구조화 retrieval — SWE-QA:** Weihan Peng 등은 ACL Findings 2026 (2026년 7월)에서 15개 Python 저장소의 720개 QA를 제시했다. 표에는 13,300개 파일과 340만 줄 이상 코드가 포함되며 질문당 평균 3.19개 파일, 8.71개 함수의 추론이 필요했다. 6개 모델 중 GPT-5.1은 저장소 Context 없이 직접 Prompting할 때 61.41/100, Sliding Window RAG에서 66.79, OpenHands를 사용했을 때 70.79를 기록했다. 점수는 정확성·완전성·관련성·명료성·추론을 각 20점으로 평가한 LLM Judge이며, 인간 평가도 병행했다. 2026-09-25 확인. 증거 유형: 동료 심사 ACL Findings 논문. 범위: 고정된 Python repo QA 벤치마크, GPT-5.1·특정 RAG/agent 설정. **직접 Prompting baseline에는 repo Context가 없으므로 이 결과만으로 RAG가 전체 저장소를 전부 넣는 방식보다 우월하다고 말할 수 없다.** 신뢰도: 보고된 비교에 높음. 변동성: 낮음(논문 수치), 현행 Codex로의 적용은 높음. [SWE-QA 논문 및 수치](https://aclanthology.org/2026.findings-acl.402/)
- **노이즈 Context와 cross-file reasoning — RepoReasoner:** Yanlin Wang 등은 FSE 2026 게재 논문(2026-07-28 arXiv v1, PACMSE DOI 10.1145/3808131)에서 14개 Python 저장소로 만든 858개 Output Prediction과 169개 Call Chain Prediction 사례를 다뤘다. 일곱 모델을 평가했고 oracle Context를 줘도 최고 Output Prediction Pass@1이 69.1%였다. Call Chain Prediction은 precision은 높고 recall은 낮았다. Context를 10K에서 30K로 확장했을 때 Qwen-2.5-Coder-14B 등 일부 조건은 노이즈 영향으로 악화되었지만, 큰 모델은 일부에서 조금 개선됐다. 따라서 길이 효과가 모델·과제별로 다르다는 것이 결과이며, 항상 악화된다는 뜻도 아니다. 2026-09-25 확인. 증거 유형: 동료 심사 FSE 2026 연구. 범위: 두 Python 저장소 추론 과제, seven models, 구성된 Context 조건. 신뢰도: 연구가 측정한 결과에 높음. 변동성: 낮음(역사적 결과), 현행 모델 적용은 높음. [RepoReasoner 원문](https://arxiv.org/html/2607.25996v1)
- **과제 축의 차이 — Goldman et al.:** EMNLP 2024의 position paper는 긴 입력 평가를 총 token 길이만으로 묶지 않고, 필요한 정보를 찾기 어려운 정도인 Diffusion과 찾아야 하는 정보 범위인 Scope로 기술하자고 제안했다. 이 분류는 연구자 제안이지 보편적으로 채택된 표준 정의는 아니다. 2026-09-25 확인. 증거 유형: 학술 position paper/taxonomy. 범위: 장문 NLP Benchmark 분류. 신뢰도: 저자 제안에 높음. 변동성: 낮음. [EMNLP 2024 논문](https://aclanthology.org/2024.emnlp-main.924/)
- **AGENTS.md bloat와 코딩 에이전트 직접 근거:** OpenAI의 2026-02-11 Harness Engineering 사례는 한 내부 Codex 프로젝트에서 거대한 AGENTS.md가 Task·코드·관련 문서를 Context에서 밀어내고, 모든 지침이 똑같이 중요해 보이며, stale해지고 검증하기 어려워졌다고 팀의 경험을 보고했다. 짧은 entry point에서 관련 지식으로 이동하는 구성을 택했다. 이는 한 팀의 first-party engineering case이며 통제 비교/효과 크기/학술 실험이 아니다. 2026-09-25 확인. 증거 유형: OpenAI 내부 사례 보고. 범위: 한 Codex 기반 제품/저장소. 신뢰도: 해당 팀이 보고한 실무로 높음, 인과·보편 효과는 중간 이하. 변동성: 중간. [OpenAI Harness Engineering](https://openai.com/index/harness-engineering/)
- **현행 GPT-6 관련 직접 guidance:** OpenAI의 Codex 문서는 2026-09-11 GPT-6 Astra가 더 긴 지침을 따를 수 있지만 Context 안 지침에 더 민감할 수 있고, Skill 파일의 불명확하거나 상충하는 지침 때문에 작업을 일찍 멈출 수 있다고 안내한다. 같은 글은 모든 변경마다 문서 묶음 전체를 읽게 하면 Context를 쓰고 작업을 느리게 할 수 있으므로 Task에 필요한 문서만 가리키라고 권한다. 이 근거는 현행 Codex 지침 설계에 직접 관련되지만, AGENTS.md 길이별 오류율을 비교한 공개 실험은 아니다. 2026-09-25 확인. 증거 유형: OpenAI 공식 제품/프롬프트 guidance. 범위: GPT-6 Astra 설명과 예시, Codex instruction files; 다른 모델·표면으로 일반화하지 않음. 신뢰도: 공식 guidance 내용에 높음, 정량 인과 효과에 대해서는 중간 이하. 변동성: 높음. [OpenAI GPT-6 Astra 지침 설계 문서](https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra)

### Inferences

- 긴 Context는 저장소 QA의 retrieval 실패를 없애지 않으며, oracle/충분한 Context가 있어도 프로그램 흐름·다중 파일 의존성의 추론 오류가 남을 수 있다. SWE-QA와 RepoReasoner의 정확한 과제 결과에 한정해 이런 수업 메시지를 만들 수 있다. [SWE-QA](https://aclanthology.org/2026.findings-acl.402/), [RepoReasoner](https://arxiv.org/html/2607.25996v1)
- Search, 파일 탐색, symbol/test 검색 또는 query-time retrieval은 질문과 관련한 근거를 단계적으로 가져와 무관한 정보를 줄이는 설계 선택이 될 수 있다. SWE-QA의 RAG/agent 결과는 **repo Context가 없는 baseline 대비** 향상을 보였고, LiTM은 해당 QA 과제에서 불필요한 문서를 더 넣을 때 성능이 내려갈 수 있음을 보였다. 하지만 이는 “검색이 항상 전체 repo Context보다 낫다”는 증거가 아니다. CoReQA는 두 접근 모두 약간의 개선만 보였다고 했고, RepoQA는 특정 함수 회수 과제에 전체 코드 Context를 사용했다. [SWE-QA](https://aclanthology.org/2026.findings-acl.402/), [Liu et al.](https://aclanthology.org/2024.tacl-1.9/), [CoReQA](https://arxiv.org/abs/2501.03447), [RepoQA](https://arxiv.org/abs/2406.06025)
- Context Router / Progressive Disclosure의 근거는 “짧은 맵 → Task 관련 세부 자료”가 OpenAI 팀의 실무 패턴이며 GPT-6 공식 지침에도 Task마다 필요한 자료만 열어보라는 권고가 있다는 정도다. 이를 정확도 보장 또는 모든 repository에서 측정된 causal claim으로 가르치지 않는다. [OpenAI Harness Engineering](https://openai.com/index/harness-engineering/), [GPT-6 Astra guidance](https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra)

### Gaps

- TODO: 현재 ChatGPT/Codex 모델에서 저장소 크기, 검색 방식, 전체 Context 제공, 위치와 질문 종류를 교차해 비교한 통제 실험.
- TODO: 공개 연구들은 API/연구 모델을 평가한다. 본 프로젝트의 회사 repository, 최신 Codex surface, IDE/CLI/app의 실제 tool workflow를 검증하지 않았다.
- TODO: AGENTS.md의 byte/token 수, stale 지침, 충돌 지침을 조작해 수정 성공률·시간·실패율을 측정한 공개 controlled study는 이 범위에서 찾지 못했다. OpenAI 사례/guidance를 학술적 인과 증거로 바꾸지 않는다.

## 3. 현재 Context Window, Context Engineering 위험, 수업에서 사용할 문구

### Takeaway

Context window는 모델 요청이 받을 수 있는 token 용량의 상한이고, 그 용량이 관련 정보를 찾아 쓰는 품질을 나타내지는 않는다. 큰 Window는 선택지를 넓힐 수 있지만, 장황하거나 상충되거나 오래된 Context, 불필요한 파일, 부정확한 retrieval, 압축 시 사라진 세부는 품질·검증·비용·지연에 영향을 줄 수 있다.

### Cited Findings

- OpenAI API의 현재 공개 Models 문서는 model ID `gpt-6-astra`, `gpt-6-sol`, `gpt-6-luna` 각각에 **1,050,000 token Context window**, 128,000 max output을 명시한다. Conversation State 문서는 Context window를 한 요청에서 입력과 출력, 일부 모델에서는 reasoning tokens가 함께 사용하는 총량으로 정의한다. 2026-09-25 확인. Models 페이지는 개별 model ID를 명시하지만 값은 변경 가능한 제품 문서다. 증거 유형: OpenAI 공식 API model/API documentation. 범위: Responses/API model IDs. 신뢰도: 문서상 수치에 높음. 변동성: 높음. 이 수치를 Codex App/CLI/ChatGPT 대화의 effective budget으로 단정하지 않는다. [OpenAI Models](https://developers.openai.com/api/docs/models), [Conversation State](https://developers.openai.com/api/docs/guides/conversation-state)
- 이번 확인에서 Codex surface 전체에 공통으로 적용되는 별도 effective context budget, 매 요청의 system/tool/context 예약량, 또는 UI에서 실제 사용량을 보장하는 공개 사양은 찾지 못했다. API model ID의 max context가 Codex UI 대화에서 전부 사용자 Prompt/Repository 파일에 제공된다고 추론해서는 안 된다. 이 문장은 조사 범위의 한계이며, 제품 기능이 없다는 단정은 아니다. 2026-09-25 확인. 증거 유형: 공식 문서 범위 검색 결과. 신뢰도: 중간. 변동성: 높음. [Codex 모델/설정 문서 시작점](https://developers.openai.com/codex/), [OpenAI Models](https://developers.openai.com/api/docs/models)
- 용량과 이용 품질의 차이는 별도의 지표를 뜻한다. 용량은 최대 request token 수이고, 품질은 task-specific output이 정답·요구사항을 만족하는지다. LiTM, NoLiMa, RepoQA, SWE-QA 및 RepoReasoner는 각기 다른 retrieval/reasoning 지표에서 Context 길이 또는 task difficulty에 따라 결과가 달라짐을 보였다. 이는 “수용 가능하다”와 “정확히 활용한다”를 동일시하지 말라는 근거다. 2026-09-25 확인. 증거 유형: 공식 API 정의 + task-specific 학술 평가. 신뢰도: 높음. 변동성: 역사 결과는 낮음, 현재 모델 외삽은 높음. [API context 정의](https://developers.openai.com/api/docs/guides/conversation-state), [Liu et al.](https://aclanthology.org/2024.tacl-1.9/), [NoLiMa](https://arxiv.org/abs/2502.05167), [RepoReasoner](https://arxiv.org/html/2607.25996v1)
- OpenAI 공식 GPT-6 Astra guidance는 모델이 지침을 더 잘 따를 수 있지만 Context 속 지침에 더 민감해질 수 있고, 모호하거나 상충하는 Skill 지침이 작업 중단을 일으킬 수 있다고 한다. 공식 AGENTS.md guidance는 Task에 필요하지 않은 지침/문서를 매번 읽게 하면 Context를 소모하고 작업을 느리게 할 수 있으니 문서를 조건에 맞게 가리키고 최신으로 유지하라고 권한다. 이것은 불필요·모순·stale Context 위험의 제품 guidance이며, 모든 모델/모든 오류 유형에 대한 통제 실험은 아니다. 2026-09-25 확인. 증거 유형: OpenAI 공식 product guidance. 신뢰도: 공식 권고에 높음, 인과 크기에 중간 이하. 변동성: 높음. [GPT-6 Astra guidance](https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra), [Codex AGENTS.md](https://developers.openai.com/codex/agent-configuration/agents-md)
- OpenAI Responses API compaction은 긴 대화가 자랄 때 context size를 줄이면서 이후 턴에 필요한 state를 보존하는 기능으로 설명되고, 품질·비용·latency의 균형을 언급한다. 반환된 compaction item은 opaque라 사람이 읽거나 모든 세부가 보존되었는지 직접 확인할 수 없다. 문서는 lossless라고 보장하지 않는다. 따라서 exact requirements, identifiers, numbers, citations, counterexamples가 중요하면 요약·압축본만 신뢰하지 않고 원본 Source와 결과를 확인해야 한다는 것은 제품 설명에서 도출한 보수적 추론이다. 2026-09-25 확인. 증거 유형: API 기능 설명 + 명시적 추론. 신뢰도: 기능 설명에 높음, 세부 손실 가능성은 합리적 추론. 변동성: 높음. [OpenAI Compaction](https://developers.openai.com/api/docs/guides/compaction)
- API Conversation State는 대화 chain에서 이전 input tokens도 input usage로 청구된다고 명시하며, OpenAI API 가격표는 짧은 Context와 긴 Context 가격을 구분하고 tool call 및 관련 토큰에 별도 과금을 둘 수 있음을 설명한다. 실제 요금·계정 적용은 model, processing tier, cache, tool, 시점에 따라 다르므로 수업 자료에 금액을 넣기 전 재확인한다. 2026-09-25 확인. 증거 유형: 공식 billing/API docs. 신뢰도: 해당 API 과금 규정에 높음. 변동성: 높음. [Conversation State](https://developers.openai.com/api/docs/guides/conversation-state), [API Pricing](https://developers.openai.com/api/docs/pricing)
- Progressive Disclosure는 OpenAI Codex 내부 프로젝트의 short stable entry point→관련 정보 참조 패턴이며, OpenAI Agents SDK sandbox도 짧은 memory summary부터 시작해 필요할 때 검색·세부 기록을 추가로 여는 별도 예제를 제공한다. 둘은 특정 OpenAI 사례/SDK 설명이지 모든 Codex surface의 자동 동작이나 품질 보장은 아니다. Context를 검색·도구로 단계 제공하는 것이 Task에 맞을 수 있다는 교육적 근거로 사용하되, stale 문서·missed retrieval·누락 dependency를 확인하는 검증 단계를 둔다. 2026-09-25 확인. 증거 유형: 공식 engineering 사례와 공식 API example. 신뢰도: 보고된 구현에 높음, 외부 효과 전이는 중간. 변동성: 중간. [OpenAI Harness Engineering](https://openai.com/index/harness-engineering/), [Agents SDK sandbox memory](https://developers.openai.com/api/docs/guides/agents/sandboxes)

### Inferences

- 검색 도구가 저장소 전체를 한 번에 제공하는 것보다 유리할 수 있는 조건은 Task가 좁고 관련 파일을 찾을 수 있으며, 무관한 입력이 많을 때다. 그러나 검색이 필요한 파일/관계/테스트를 놓치면 결과가 악화될 수 있으므로 “검색이 더 좋다”가 아니라 “필요한 Context를 찾아 단계적으로 공급하고, 충분성과 정확성을 확인한다”라고 표현한다. SWE-QA는 no-repository-context 대비 RAG/agent 향상을, RepoReasoner는 불필요한 Context가 있는 일부 설정의 저하와 다른 모델의 개선을 함께 보여 준다. [SWE-QA](https://aclanthology.org/2026.findings-acl.402/), [RepoReasoner](https://arxiv.org/html/2607.25996v1)
- 압축·요약은 계속 쌓이는 대화의 토큰·latency를 줄이는 데 도움이 되지만, 계산값·정확한 명칭·단서·충돌 지침 같은 정밀 요소를 원본과 대조해야 한다. 첫 문장은 공식 API의 기능 목적이고 두 번째는 opaque compacted summary에 대한 예방적 추론이며, 측정한 compression error rate를 뜻하지 않는다. [OpenAI Compaction](https://developers.openai.com/api/docs/guides/compaction)
- 회사의 실제 계정·모델·관리자 정책, 저장소 크기, Codex App/CLI/IDE의 context allocation이 확인되기 전에는 1.05M 같은 API 수치나 연구 결과를 교육 Demo의 현재 환경 결과인 것처럼 표시하지 않는다. [OpenAI Models](https://developers.openai.com/api/docs/models)

#### 권장하는 범위 제한 문구

> Context window가 커지면 한 요청에 더 많은 정보를 담을 수 있다. 그러나 정보가 많아지는 것만으로 관련 근거를 정확히 찾고 연결한다는 보장은 없다. 일부 모델·과제에서는 위치, distractor, 연관 추론, 저장소 구조에 따라 결과가 달랐고, 현재 제품의 동작은 모델·표면·Task별로 확인해야 한다.

> AGENTS.md와 다른 프로젝트 문서는 Task에 필요한 근거를 찾기 쉽게 안내하고 최신 상태로 유지한다. 짧은 지침 지도와 on-demand search/retrieval은 유용한 설계 패턴이지만, 파일을 나누는 것만으로 정확도나 신뢰성이 보장되지는 않는다. 검색 누락, 오래된 문서, 요약 중 세부 누락을 검증한다.

### Gaps

- TODO: 이 회사에서 사용 가능한 실제 ChatGPT/Codex 모델 ID와 model snapshot, App/CLI/IDE 별 effective context limit 및 관리 정책을 관리자/계정에서 확인.
- TODO: 회사 repository에서 file search, shell/IDE search, whole-repository input, RAG, short router를 같은 model/version·질문·snapshot·verification 기준으로 비교하는 Demo/실험. 직접 실습 없음이라는 Master Plan 원칙을 유지하고 강사 Demo 여부는 이후 계획 문서에 따른다.
- TODO: 현재 Codex 모델에서 AGENTS.md 길이/충돌/staleness에 따른 task 성공률, time, context token, 오류율을 확인하는 공개 empirical evidence 또는 사내 측정.
- TODO: 비용·latency와 retrieval misses·compression omissions 사이의 수치 trade-off는 현재 계정/도구/요금표에 따라 측정해야 한다. 이 노트는 수치 결과를 만들지 않았다.

### Prior notes status

- **이미 정리되어 있고 이번에 재검증함:** Liu et al.의 U-shaped 위치 결과와 외삽 경계, NoLiMa의 단순 literal-match needle task 한계, Goldman et al.의 Diffusion/Scope 축, OpenAI Harness Engineering 사례의 progressive disclosure 패턴, 현재 GPT-6 지침 민감성. 해당 선행 근거는 [기존 context/memory 노트](../ChatGPT%20Codex%20기능%20근거/memory_and_context_evidence.md)에 기록되어 있다.
- **이번에 새로 보강함:** Repository 평가의 RepoQA, CoReQA, SWE-QA, RepoReasoner 결과; 공식 공개된 GPT-6 API model context 수치; API compaction과 token/billing/latency 관련 경계.
- **미해결:** 현행 사내 Codex surface와 company repo에서의 실제 측정. 연구의 task/model/metric을 현재 제품의 성능 증거로 대체하지 않는다.
