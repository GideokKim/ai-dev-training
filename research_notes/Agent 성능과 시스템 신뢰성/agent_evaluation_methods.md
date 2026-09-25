# Agent Evaluation

**Research status:** 조사 기준일 2026-09-25. OpenAI 제품 문서는 현재 API 표면을 확인하기 위한 자료이며, 연구 결과는 해당 논문의 benchmark와 실험 범위 안에서만 해석한다. 이 프로젝트의 agent/Harness 평가 실행이나 점수는 아직 없다.

## 1. Agent evaluation은 무엇이며 software tests와 어떻게 다른가?

### Takeaway

Agent evaluation은 반복 가능한 입력과 명시된 성공 기준으로 모델 출력뿐 아니라 도구 선택, 실행 과정, 최종 상태 등 AI 시스템의 동작을 측정하는 절차다. Unit/integration test, lint, type/static checks와 대립하는 별도 기술이라기보다, 결정적으로 확인할 수 있는 소프트웨어 성질은 이 검사들로 확인하고 비결정적이며 과업에 의존하는 agent 동작은 trace, rubric, benchmark, human review 등을 결합해 평가하는 상위 접근으로 설명하는 편이 근거에 맞는다.

### Cited Findings

- OpenAI의 Evaluation Best Practices는 생성형 AI 출력이 가변적이므로 전통적인 software testing만으로 충분하지 않다고 설명하고, eval을 비결정적인 AI 시스템의 성능·정확도·신뢰성을 구조적으로 측정하는 테스트로 정의한다. 같은 문서는 산업 benchmark, 일반 점수, 특정 LLM application 평가를 별도 용례로 구분한다. OpenAI API 문서, 확인일 2026-09-25. [Evaluation best practices](https://developers.openai.com/api/docs/guides/evaluation-best-practices)
- OpenAI가 나열하는 metric-based evaluator에는 exact/string match, function-call accuracy, 실행 가능한 기능 검사(예: text-to-SQL)가 포함되며, 이런 점수는 자동 회귀 검사에 쓸 수 있다. 다만 용도에 맞지 않는 일반 지표는 nuance를 놓칠 수 있다. [Evaluation best practices](https://developers.openai.com/api/docs/guides/evaluation-best-practices)
- 같은 문서는 human review를 높은 품질의 판단 방식으로 다루면서 시간·비용이 많이 들고 전문가 사이에 불일치가 생길 수 있다고 경고한다. LLM-as-judge는 더 저렴하고 확장 가능하지만 position/verbosity bias 등이 있으므로 human label과의 일치도를 점검하고 rubric을 명확히 하라고 권한다. [Evaluation best practices](https://developers.openai.com/api/docs/guides/evaluation-best-practices)
- OpenAI의 Graders 문서는 단순한 pass/fail string check, reference와의 text similarity, model grader, Python 실행 grader를 구분한다. 즉 결정적 검사와 의미·문맥 판단을 같은 eval suite 안에서 함께 사용할 수 있다. [Graders](https://developers.openai.com/api/docs/guides/graders)
- OpenAI는 평가를 목표 정의 → 대표 데이터 수집 → 성공 기준에 맞는 지표 정의 → 비교·반복 → 변경마다 지속 실행하는 흐름으로 제시한다. 데이터 후보에는 human-curated, domain-specific, production 및 과거 기록이 있고, 전형·경계·adversarial 사례도 고려하라고 안내한다. [Evaluation best practices](https://developers.openai.com/api/docs/guides/evaluation-best-practices)
- OpenAI의 현재 API 문서는 기존 Evals 플랫폼을 2026-10-31 읽기 전용, 2026-11-30 종료 예정이라고 표시하고, 새 평가 작업에는 Datasets를 고려하라고 안내한다. 이는 평가 원리보다 제품/API 선택에 관한 변동성 높은 사실이다. 확인일 2026-09-25. [Working with evals](https://developers.openai.com/api/docs/guides/evals)

### Inferences

- 교육용 구분으로는 unit/integration, lint, type/static checks를 “코드·산출물에서 사전에 표현한 규칙을 검사하는 검증 표면”으로, agent eval을 “주어진 업무에서 결과와 행동이 의도에 맞는지 측정하는 표면”으로 놓을 수 있다. 두 범주는 겹친다. 예를 들어 코딩 agent의 eval이 실행 가능한 기능 검사 결과를 성공 기준 일부로 삼을 수 있다. 이는 고정된 업계 분류가 아니라 OpenAI가 함께 제시하는 metric-based 및 executable evaluator와 AI eval 정의를 바탕으로 한 교육용 설명이다. [Evaluation best practices](https://developers.openai.com/api/docs/guides/evaluation-best-practices), [Graders](https://developers.openai.com/api/docs/guides/graders)
- 외부 benchmark는 공통 과제에 대한 비교에 유용하지만 특정 팀의 repository, 사용자 분포, 안전·범위 제약을 자동으로 대표하지 않는다. 따라서 benchmark 점수와 프로젝트별 regression set의 결과를 같은 주장으로 취급하지 않는 것이 합리적이다. [Evaluation best practices](https://developers.openai.com/api/docs/guides/evaluation-best-practices)
- 평가 목적은 “agent가 잘했는가”라는 인상평을 수치화하는 데 그치지 않고, 어떤 기대 동작을 통과했는지와 어떤 failure가 남았는지를 비교 가능하게 만드는 것이다. [Evaluation best practices](https://developers.openai.com/api/docs/guides/evaluation-best-practices)

### Gaps

- 어떠한 unit/integration/lint 기준을 이 교육 프로젝트의 Demo에 쓸지 아직 정해지지 않았다. 기존 plan의 Demo repository 선택과 verification 기준이 정해지기 전에는 프로젝트별 기준·점수·통과 임계값을 만들 수 없다.
- OpenAI Evals API 문서의 제품 수명주기는 가까운 시기에 바뀔 예정이다. 최종 콘텐츠에서 특정 API 이름이나 UI 경로를 권장한다면 다시 공식 문서를 확인해야 한다.

## 2. Agent workflow에서 측정할 수 있는 것과 제품별 범위

### Takeaway

과업 성공, 지시 준수, 도구 선택·인자, handoff, 정책 위반, 최종 상태, trace, 실행 시간 및 사용량은 관찰 가능한 증거와 명시된 기준이 있으면 평가할 수 있다. 다만 trace는 기록된 행위를 보여줄 뿐 기준의 적절성이나 실제 작업의 완전성을 자동으로 증명하지 않으며, cost/usage 기록도 일부 제품 표면에서는 best-effort다.

### Cited Findings

- OpenAI의 agent workflow 문서는 trace에 한 번의 end-to-end 실행에서 발생한 model call, tool call, guardrail, handoff 기록이 담길 수 있고, structured grader로 올바른 tool 선택, handoff 시점, instruction/safety 위반, prompt 또는 routing 변경의 전 과정 효과를 살펴볼 수 있다고 한다. trace를 조사한 뒤 반복 가능한 비교가 필요해지면 dataset과 eval run으로 옮기라고 안내한다. 문서 표면은 Agents SDK 및 기존 Agent Builder의 `Logs > Traces`, Agents API session trace에 한정되어 있다. OpenAI API 문서, 확인일 2026-09-25. [Evaluate agent workflows](https://developers.openai.com/api/docs/guides/agent-evals)
- OpenAI Evaluation Best Practices는 single-agent 평가 대상으로 instruction following, functional correctness, tool selection, tool argument/data precision을 제시하고, multi-agent 시스템에는 각 agent가 선택하는 tool, handoff, instruction following, 출력·상태를 포함한 검사가 필요하다고 설명한다. [Evaluation best practices](https://developers.openai.com/api/docs/guides/evaluation-best-practices)
- τ-bench는 user와 agent의 동적 대화, domain-specific API tools와 policy, annotated goal state를 갖춘 benchmark다. 성공 여부를 대화 뒤 database state와 목표 상태를 비교해 판정하고, 여러 독립 시도의 일관성을 재는 `pass^k`를 제안했다. 실험에서 논문 저자들은 당시의 강한 function-calling agent도 과제 성공률과 반복 간 일관성이 낮을 수 있음을 보고했다. Yao et al., arXiv 2024, ICLR 2025. [τ-bench paper](https://arxiv.org/abs/2406.12045)
- Agents API tracing 문서는 span별 상태·시작/종료·duration, model response 입력/출력, tool 및 arguments/result, token usage를 inspect할 수 있다고 안내한다. 별도 usage 문서는 usage가 null/변경 가능한 best-effort 기록일 수 있고, 총 비용을 추정할 때 root/subagent 호출, retries, tool, sandbox, third-party 비용을 고려하라고 명시한다. 이는 Agents API의 제품별 trace/accounting 표면이지 모든 Codex UI의 보장된 기록 형식이라는 뜻은 아니다. OpenAI API 문서, 확인일 2026-09-25. [Tracing](https://developers.openai.com/api/docs/guides/agents-api/tracing), [Observability and usage](https://developers.openai.com/api/docs/guides/agents-api/observability)
- OpenAI의 Codex Goals 문서는 completion을 모델의 자체 선언이 아니라 구체적 evidence surface(테스트, benchmark, 보고서, 파일, command output 등)에 대조하라고 설명한다. Codex 장기 작업 사례도 milestone별 build/test/lint 결과와 diff 검토를 관찰 가능한 검증 예로 든다. 이 자료는 Codex 제품 사용 패턴이지 모든 Codex 클라이언트가 자동으로 같은 평가 데이터를 수집한다는 약속은 아니다. [Using Goals in Codex](https://developers.openai.com/cookbook/examples/codex/using_goals_in_codex), [Run long horizon tasks with Codex](https://developers.openai.com/blog/run-long-horizon-tasks-with-codex)

### Inferences

- “불필요한 변경”이나 “scope 준수”는 의도한 파일/산출물과 실제 diff를 대조하거나 reviewer rubric을 적용하면 평가 가능한 후보 차원이다. 텍스트 최종 답변만으로 판정하기 어렵기 때문에 repository diff, 허용 경계, task specification을 evaluator에 제공해야 한다. 이는 OpenAI trace 문서에 열거된 universal metric이 아니라, trace grader가 행동·정책을 평가할 수 있고 Codex Goals가 constraints와 verification surface를 명시하도록 하는 자료에서 도출한 측정 설계 제안이다. [Evaluate agent workflows](https://developers.openai.com/api/docs/guides/agent-evals), [Using Goals in Codex](https://developers.openai.com/cookbook/examples/codex/using_goals_in_codex)
- “검증을 빠짐없이 했는가”는 요구된 check 목록과 실제 command/tool trace 및 종료 결과를 대조해 볼 수 있다. 그러나 check가 실행되었다는 기록은 check가 충분하거나 올바른 assertion을 가졌다는 증거와 다르므로, test 결과·대상 산출물·review를 따로 확인해야 한다. 이는 trace의 tool call/result 기록과 Codex 문서의 evidence surface 원칙에서 도출한 한계다. [Tracing](https://developers.openai.com/api/docs/guides/agents-api/tracing), [Using Goals in Codex](https://developers.openai.com/cookbook/examples/codex/using_goals_in_codex)
- cost/latency는 품질과 분리된 평가 축으로 측정할 수 있다. 비교 시에는 같은 업무의 end-to-end elapsed time 및 root/subagent/retry 호출에서 생긴 사용량과 부대 비용을 함께 보아야 하며, API usage는 최종 청구액과 동일시하지 않는다. [Tracing](https://developers.openai.com/api/docs/guides/agents-api/tracing), [Observability and usage](https://developers.openai.com/api/docs/guides/agents-api/observability)

### Gaps

- 이 프로젝트에서 scope adherence, unnecessary change, verification completeness를 어떻게 판정할지와 필요한 관측 로그는 미정이다. 아직 project-specific eval을 만들거나 점수를 계산하지 않았다.
- Codex Desktop/CLI/IDE의 일반 사용에서 agent trace·비용·latency가 동일하게 기록된다는 근거는 이 조사 범위에서 확인하지 않았다. 제품별 API 관측 가능성을 Codex 전 제품의 성질로 일반화하지 않는다.

## 3. Harness 변경 전후 비교와 Failure → Harness change → re-evaluate 근거

### Takeaway

실패 사례를 재현 가능한 평가 케이스로 만들고 Harness 후보 변경 전후에 같은 성공 기준으로 다시 실행하는 것은 “개선했다고 보이는 변화”를 실제 증거와 분리하는 합리적인 방법이다. agent 결과에는 실행 간 변동이 있으므로 한 번의 성공이나 작은 단일 점수 변화만으로 효과를 단정하면 안 된다. OpenAI Cookbook은 이 연결을 구현하는 예시를 제공하지만 보편적 인과 효과를 입증한 통제 실험은 아니다.

### Cited Findings

- OpenAI Evaluation Best Practices는 eval을 일찍·자주 실행하고, 실제 사용 분포에 맞는 task-specific data를 사용하며, 모든 변경에서 continuous evaluation을 돌리고 기록에서 새로운 nondeterminism 사례를 eval set에 추가하라고 권한다. “it seems like it’s working” 같은 vibe-based 평가는 anti-pattern으로 명시한다. [Evaluation best practices](https://developers.openai.com/api/docs/guides/evaluation-best-practices)
- OpenAI의 공식 Agent Improvement Loop Cookbook(2026-05-12)은 fictional company의 synthetic diligence data에서 기본 5개 agent trace를 수집하고, 코드 안의 `generate_mock_human_feedback`와 모델 feedback으로 반복 이슈를 표현하며, feedback을 Promptfoo eval로 바꿔 Codex용 harness 변경 handoff를 만드는 흐름을 보여준다. 노트북은 현재 생성된 5개 eval이 통과한 결과와 함께, 이를 지속 가능한 regression suite에 보존하고 artifact parsing·validator·calculation correctness를 더 검사해야 한다고 적는다. 마지막 단계는 업데이트된 harness에 같은 eval suite를 다시 실행하는 것이다. [Build an Agent Improvement Loop with Traces, Evals, and Codex](https://developers.openai.com/cookbook/examples/agents_sdk/agent_improvement_loop)
- 위 Cookbook 예시는 방법의 구체적 흐름(관찰 trace → failure feedback → eval → ranked harness proposal → 구현 → 재평가)을 지원한다. 다만 예시의 합성 업무 데이터, 5개 trace, mock human feedback, 생성된 eval gate는 실제 production 사용자 평가나 변경 전후 controlled experiment가 아니다. 페이지 자체도 더 많은 실제 trace, eval refinement와 human review gate를 후속 단계로 제시한다. [Build an Agent Improvement Loop with Traces, Evals, and Codex](https://developers.openai.com/cookbook/examples/agents_sdk/agent_improvement_loop)
- Bjarnason, Silva, Monperrus의 `On Randomness in Agentic Evals`는 SWE-Bench-Verified에서 3개 model과 2개 scaffold 구성에 걸친 60,000 trajectories를 분석했다. 논문은 단일 실행에서 계산한 pass@1 추정치가 실행 선택에 따라 2.2–6.0 percentage points 달라졌고, temperature 0에서도 표준편차가 1.5 points를 넘는 사례를 보고한다. 저자들은 작은 차이를 보려면 task별 독립 반복 실행, 필요한 반복 횟수의 power analysis, pass@k와 pass^k 같은 복수 관점을 권한다. 이는 해당 benchmark 및 구성에서의 연구 결과이며 모든 agent/workload에 같은 변동 폭이 적용된다는 주장은 아니다. arXiv 2026-02-06; ICLR 2026 Workshop on Agents in the Wild. [On Randomness in Agentic Evals](https://arxiv.org/abs/2602.07150), [ICLR 2026 workshop paper](https://openreview.net/pdf/030b57388f7aa9e3a7ecb15e20541a8f2ed92f1b.pdf)
- τ-bench의 pass^k는 여러 독립 실행에서 모두 성공하는 신뢰성을 보기 위해 제안되었다. 같은 task 한 번의 성공과 여러 실행에서 반복 가능한 성공이 다른 질문이라는 점을 보여준다. [τ-bench paper](https://arxiv.org/abs/2406.12045)

### Inferences

- 비교 설계 제안(프로젝트 정책이나 확정 threshold가 아님): 기존 Harness와 후보 Harness의 버전, model/version, task data, tool/environment, evaluator를 기록하고 가능한 한 동일한 사례와 조건에서 비교한다. 먼저 관찰된 failure를 케이스로 보존하고, 정해진 success criteria를 candidate 양쪽에 동일하게 적용한다. 이는 OpenAI의 objective/data/metric/compare/continuous-evaluation 절차를 비교 상황에 적용한 권고다. [Evaluation best practices](https://developers.openai.com/api/docs/guides/evaluation-best-practices)
- 모델/환경 변동이 남는 workflow라면 동일 입력을 여러 독립 실행으로 비교하고 평균·분포·실패 양상도 함께 보아, 단일 성공이 우연인지 반복되는 효과인지 구분한다. 반복 수나 통과 threshold는 이 프로젝트에 대해 결정되지 않았으며 임의로 설정하지 않는다. 다회 실행 권고는 특정 SWE-Bench-Verified 실험에 근거한다. [On Randomness in Agentic Evals](https://arxiv.org/abs/2602.07150), [τ-bench paper](https://arxiv.org/abs/2406.12045)
- 성공률만 단독으로 비교하지 말고, task outcome 및 regression 외에 instruction/scope, tool path, verification evidence, latency, cost처럼 실제 목표에 관계된 차원을 별도로 본다. 그래야 품질 변화와 시간·비용 trade-off를 감추지 않는다. 어떤 차원을 실제 course project에서 쓸지는 plan의 Demo와 Loop 평가 설계가 정한 뒤 확정해야 한다. [Evaluate agent workflows](https://developers.openai.com/api/docs/guides/agent-evals), [Observability and usage](https://developers.openai.com/api/docs/guides/agents-api/observability)
- 관찰된 failure는 곧바로 새 규칙을 추가할 이유가 되지 않는다. 원인 분석에서 누락된 instruction, 이미 있지만 지켜지지 않은 instruction, tool/runtime 결함, test/observability 결함을 구분하고, 수정 후 회귀 케이스로 확인해야 “이 Harness 변화가 이 실패 유형을 줄였다”는 제한된 주장을 뒷받침할 수 있다. 이는 OpenAI Cookbook이 변경 추천 전 failure를 현재 Harness 상태와 대조해 유형화하고 재실행하는 예시를 가리킨다. [Build an Agent Improvement Loop with Traces, Evals, and Codex](https://developers.openai.com/cookbook/examples/agents_sdk/agent_improvement_loop)
- 평가 없이 개선 여부를 알 수 없다는 말은 “어떤 출력이 나아 보인다”는 인상만으로는 baseline 대비 기대 성능, regression, 비결정성, 비용·latency trade-off를 분리하지 못한다는 방법론적 추론이다. 무평가 상태에서 가능한 진술은 “Harness가 달라졌다”까지이며, “실패가 줄었다/시스템이 개선되었다”는 결론에는 재평가 증거가 필요하다. OpenAI 문서는 vibe-based 평가를 anti-pattern으로 규정하며, agentic eval 연구는 한 번의 실행만으로 작은 개선을 판정할 때 변동 오차가 개입할 수 있음을 보고한다. [Evaluation best practices](https://developers.openai.com/api/docs/guides/evaluation-best-practices), [On Randomness in Agentic Evals](https://arxiv.org/abs/2602.07150)

### Gaps

- `plan/DECISIONS.md`의 OQ-007/OQ-009에 해당하는 project-specific verification 및 Loop evaluation criteria, 교육용 Demo repository, 실패 사례는 아직 결정·실행되지 않았다. 따라서 이 노트는 측정 설계 원리만 제시하며 어떤 기준·점수·threshold도 결정하지 않는다.
- Cookbook의 end-to-end 재평가 절차는 교육용 workflow 예시로는 근거가 있지만, Harness 변경이 실제 사용자 업무의 성능을 인과적으로 개선한다는 독립 연구는 아니다. 프로젝트에서 그러한 주장을 하려면 선택된 Demo 환경에서 baseline/candidate 실행과 결과 review가 필요하다.
- LLM judge는 가성비와 확장성 면에서 유용할 수 있지만 인간 판단과의 편향·불일치 가능성이 남는다. 이 프로젝트에 human reviewer가 있는지, blind review 또는 judge calibration을 실제로 할 수 있는지는 미확정이다.
