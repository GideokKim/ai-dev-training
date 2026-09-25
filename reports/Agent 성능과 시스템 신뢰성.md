# Agent 성능은 시스템에서 드러난다

STEP 03의 31–40번 조사 결론은 분명하다. **Coding Agent의 결과는 모델 지능만의 속성이 아니라 model, scaffold/harness, repository context, tools, runtime environment, tests, feedback, task decomposition, memory, workflow가 결합된 시스템 결과**다. 같은 모델도 도구 인터페이스와 환경 자원이 달라지면 다른 결과를 낼 수 있고, 같은 scaffold 안에서도 모델 차이는 남는다([SWE-agent 논문](https://papers.neurips.cc/paper_files/paper/2024/file/5a7c947568c1b1328ccc5230172e1e7c-Paper-Conference.pdf), [Anthropic Terminal-Bench infrastructure study](https://www.anthropic.com/engineering/infrastructure-noise)). 따라서 교육에서는 “더 좋은 모델”과 “더 좋은 개발 시스템”을 경쟁 관계로 놓지 않는다. 둘은 다른 층위이며, 좋은 모델도 깨진 환경·낡은 지시·불충분한 검증을 자동으로 제거하지 않고, 좋은 Harness도 낮은 모델 capability를 무제한으로 보완하지 않는다. 이 보고서는 2026-09-25 기준으로 확인한 STEP 03 §§31–40 근거만 합성하며, STEP 03의 후속 구간과 교육용 Demo·Slide 결정은 아직 별도 작업이다.

## 모델과 Harness는 다른 층위에서 성능을 만든다

SWE-agent 연구는 모델과 scaffold를 분리해서 볼 수 있는 좋은 근거다. 논문은 GPT-4 Turbo를 사용한 SWE-bench Lite 300개 instance에서 shell-only system의 해결률 11.00%와 SWE-agent ACI의 해결률 18.00%를 비교했고, 같은 모델에 맞춘 Agent-Computer Interface가 결과를 바꿀 수 있음을 보였다. 같은 논문은 전체 SWE-bench 2,294개에서 GPT-4 Turbo와 SWE-agent가 12.47%, 같은 SWE-agent scaffold와 Claude 3 Opus가 10.46%를 해결했다고 보고했다. 이 두 비교는 같은 모델에서 interface 차이가 남고, 같은 scaffold에서도 모델 차이가 남는다는 점을 함께 보여준다([SWE-agent 논문](https://papers.neurips.cc/paper_files/paper/2024/file/5a7c947568c1b1328ccc5230172e1e7c-Paper-Conference.pdf)).

이 효과를 “Scaffold가 모델보다 중요하다”로 읽으면 곧 과장이 된다. SWE-agent의 ablation은 요약 검색, 반복 검색, 편집 linting, 전체 파일 보기 같은 작업 affordance가 특정 benchmark 결과에 영향을 줄 수 있음을 보여주지만, 어떤 기능이 모든 저장소에서 같은 폭으로 개선된다는 뜻은 아니다([SWE-agent 논문](https://papers.neurips.cc/paper_files/paper/2024/file/5a7c947568c1b1328ccc5230172e1e7c-Paper-Conference.pdf)). Anthropic의 Terminal-Bench 2.0 infrastructure study도 같은 Claude model, harness, task set에서 CPU/RAM 제한을 바꾸면 성공률과 infra error가 달라질 수 있음을 보고했다. 이 역시 환경 자원이 평가 결과의 일부라는 근거이지, 자원을 늘리면 항상 선형으로 좋아진다는 법칙은 아니다([Anthropic Terminal-Bench infrastructure study](https://www.anthropic.com/engineering/infrastructure-noise)).

`scaffold`와 `harness`는 겹치지만 같은 뜻으로 표준화된 말은 아니다. SWE-agent와 SWE-bench Verified 문맥의 scaffold는 모델을 task-solving agent로 만드는 prompts, action/tool interface, context flow, workflow를 가리키는 경우가 많다([OpenAI SWE-bench Verified](https://openai.com/index/introducing-swe-bench-verified/), [SWE-bench leaderboard](https://www.swebench.com/)). OpenAI의 Agents API와 Harness Engineering 글에서 harness는 context 관리, 도구 사용, subagent 조정, 장시간 실행 인프라, repository tools, review, tests, feedback loop까지 더 넓게 쓰인다([OpenAI Agents API](https://openai.com/index/introducing-the-agents-api/), [OpenAI Harness Engineering](https://openai.com/index/harness-engineering/)). 그러므로 이 교육의 안전한 설명은 **“Harness Engineering은 모델 바깥에서 agent가 일하는 환경과 절차를 설계하고 유지하는 운영 모델”**이며, 업계 표준 용어 정의처럼 말하지 않는다.

OpenAI의 Harness Engineering 사례는 모델 capability와 system design을 분리해서 설명할 실무 근거를 준다. OpenAI 내부 사례는 Codex 진행 지연을 모델 자체 능력 부족만으로 보지 않고, 불충분하게 지정된 환경, 빠진 도구·추상화, repository 구조, review와 test loop 문제와 연결해 설명한다([OpenAI Harness Engineering](https://openai.com/index/harness-engineering/)). 반대로 OpenAI의 최신 Codex/Skill 지침은 더 유능한 모델이 예전보다 덜 자세한 scaffolding으로도 일할 수 있지만, 누적된 `AGENTS.md`, Skills, prompts를 다시 점검하고 불필요하게 긴 context를 줄이라고 권한다([OpenAI Developers, GPT-6 Astra guidance](https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra)). 즉 모델 업그레이드는 Harness 문제를 자동으로 없애지 않고, 모델 변화는 Harness 자체를 재검토하게 만든다.

## Benchmark는 능력의 증거지만 생산성 예측은 아니다

Coding benchmark는 현재 agent가 repository 또는 terminal 환경의 다단계 task를 수행할 수 있다는 배경 근거로 쓸 수 있다. 하지만 각 점수는 benchmark name, version, task set, model, reasoning effort, scaffold, tools, runtime, resource budget, verifier, scoring rule, run date에 묶인 결과다. OpenAI의 third-party evaluation playbook도 강한 capability elicitation과 통제 비교를 구분하며, 공통 harness나 사전에 정한 harness 집합 아래 task, scoring, budget을 고정하라고 권한다([OpenAI third-party evals playbook](https://openai.com/index/trustworthy-third-party-evaluations-foundations/)).

SWE-bench와 SWE-bench Verified는 실제 GitHub issue 기반 repository task를 patch와 tests로 평가하는 흐름을 열었지만, OpenAI는 2026년에 Verified의 prompt/test/material issue와 contamination 문제를 들어 frontier progress 지표로 더 이상 사용하지 않겠다고 밝혔다([SWE-bench 원 논문](https://arxiv.org/abs/2310.06770), [OpenAI SWE-bench Verified audit](https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/)). SWE-Bench Pro는 long-horizon, multi-language repository task를 목표로 했지만, OpenAI는 2026-07 audit에서 public split의 상당한 task quality issue를 보고하고 이전 추천을 철회했다([Scale SWE-Bench Pro](https://labs.scale.com/leaderboard/swe_bench_pro), [OpenAI SWE-Bench Pro audit](https://openai.com/index/separating-signal-from-noise-coding-evaluations/)). 이 충돌은 benchmark를 버리라는 뜻이 아니다. 교육에서는 benchmark를 “무엇을 어떤 조건에서 측정하는가”를 보여주는 사례로 쓰고, leaderboard 숫자를 workplace productivity promise로 바꾸지 않는다.

Terminal-Bench, DeepSWE, FrontierCode, CodeClash는 서로 다른 관찰 창을 제공한다. Terminal-Bench는 terminal workflow completion을, DeepSWE는 새로 작성한 long-horizon software engineering task를, FrontierCode는 correctness뿐 아니라 scope discipline, style, repository convention, mergeability까지 보는 PR 품질 평가를 지향한다([Terminal-Bench 2.0](https://arxiv.org/abs/2601.11868), [DeepSWE](https://arxiv.org/abs/2607.07946), [FrontierCode methodology](https://cognition.com/frontiercode), [CodeClash](https://arxiv.org/abs/2511.00839)). OpenAI의 GPT-6 Astra 발표도 Terminal-Bench 4.0, DeepSWE v1.1, FrontierCode 1.1 점수를 제시하지만, research environment 또는 API에서 실행된 평가가 production ChatGPT의 system prompts와 tools와 다를 수 있다고 주석을 붙인다([OpenAI GPT-6 Astra](https://openai.com/index/gpt-6-astra/)). 이 조건을 떼어낸 순위표는 근거가 약해진다.

실제 사내 개발 생산성은 별도 측정 대상이다. SWE-bench 점수는 정해진 issue set의 resolved rate이고, Terminal-Bench는 지정한 terminal task completion rate다. 둘 다 회사의 PR merge rate, incident risk, maintenance cost, developer time, review burden, onboarding 효과를 직접 측정하지 않는다([SWE-bench 원 논문](https://arxiv.org/abs/2310.06770), [Terminal-Bench 2.0](https://arxiv.org/abs/2601.11868)). METR의 2025 RCT는 숙련 OSS 개발자 16명이 친숙한 mature project의 실제 task를 수행할 때, 초기 2025 AI tool 사용 허용군이 비허용 대비 완료 시간이 평균 19% 증가했다고 보고했다. 이 결과는 현재 Codex나 모든 개발자에게 일반화할 수 없지만, benchmark 점수를 생산성 speedup으로 곧장 번역하면 안 된다는 경고로는 충분하다([METR RCT](https://arxiv.org/abs/2507.09089)).

| Benchmark 또는 평가 | 이 교육에서 안전하게 쓰는 메시지 | 피해야 할 해석 |
| --- | --- | --- |
| SWE-bench / Verified | 실제 repository issue를 patch와 tests로 평가하는 흐름이 coding agent 평가의 기준점을 만들었다. | Verified 점수가 현재 frontier coding capability 또는 사내 생산성을 대표한다. |
| SWE-Bench Pro | 더 긴 repository task와 contamination 문제를 다루려는 시도가 있었다. | Pro public leaderboard를 안정된 단일 실력표로 쓴다. |
| Terminal-Bench | terminal 환경과 runtime resource가 agent 결과의 일부가 될 수 있다. | terminal benchmark 점수를 PR merge 품질로 읽는다. |
| DeepSWE / FrontierCode | task 설계, verifier, rubric, mergeability를 더 넓게 볼 수 있다. | 서로 다른 benchmark 점수를 한 줄 ranking으로 비교한다. |

## Agent evaluation은 Loop의 증거 표면을 만든다

Agent evaluation은 software test를 대체하는 별도 세계가 아니라, 비결정적이고 도구를 쓰는 agent system의 결과와 과정을 측정하기 위해 software test, lint, static analysis, benchmark, trace, rubric, human review를 함께 배치하는 상위 접근이다. OpenAI Evaluation Best Practices는 생성형 AI 출력이 가변적이므로 전통적 testing만으로 충분하지 않다고 설명하고, task-specific data, metric definition, iterative comparison, continuous evaluation을 권한다([OpenAI Evaluation Best Practices](https://developers.openai.com/api/docs/guides/evaluation-best-practices)). OpenAI Graders 문서는 string match, text similarity, model grader, Python grader처럼 결정적 검사와 의미 판단을 같은 eval suite 안에서 조합할 수 있음을 보여준다([OpenAI Graders](https://developers.openai.com/api/docs/guides/graders)).

Agent workflow는 최종 성공뿐 아니라 tool selection, tool arguments, handoff, instruction following, policy violation, final state, trace, duration, usage까지 관찰할 수 있다. OpenAI의 agent workflow evaluation 문서는 trace에 model call, tool call, guardrail, handoff 기록이 담길 수 있고, structured grader로 올바른 tool 선택이나 handoff 시점을 살펴볼 수 있다고 설명한다([OpenAI Agent workflow evals](https://developers.openai.com/api/docs/guides/agent-evals)). Agents API tracing 문서도 span별 상태, duration, model response, tool arguments/result, token usage를 inspect할 수 있다고 설명한다([OpenAI Agents API tracing](https://developers.openai.com/api/docs/guides/agents-api/tracing)). 다만 이 문서들은 API와 특정 product surface의 관측 가능성을 설명하는 자료다. Codex Desktop, CLI, IDE의 모든 일반 사용에서 같은 trace와 cost accounting이 보장된다고 일반화하지 않는다.

Loop Engineering에서 중요한 구조는 `Failure → Cause → Hypothesis → Change → Evaluation → Regression Check → Keep / Revert`다. OpenAI의 Agent Improvement Loop Cookbook은 trace에서 failure feedback을 만들고, Promptfoo eval로 바꾸고, Codex에게 harness 변경 제안을 넘긴 뒤 같은 eval suite를 다시 실행하는 예시를 제공한다([OpenAI Agent Improvement Loop Cookbook](https://developers.openai.com/cookbook/examples/agents_sdk/agent_improvement_loop)). 그러나 이 예시는 synthetic data, mock human feedback, 5개 trace를 포함한 cookbook flow다. 제품이나 실제 회사 workflow에서 Harness 변경이 보편적으로 성능을 개선한다는 통제 실험은 아니다.

Agentic eval에는 실행 간 변동도 남는다. `On Randomness in Agentic Evals`는 SWE-Bench-Verified에서 3개 model과 2개 scaffold에 걸친 60,000 trajectories를 분석했고, 단일 실행에서 계산한 pass@1 추정치가 실행 선택에 따라 2.2–6.0 percentage points 달라질 수 있다고 보고했다([On Randomness in Agentic Evals](https://arxiv.org/abs/2602.07150)). τ-bench도 여러 독립 시도의 일관성을 보는 `pass^k`를 제안했다([τ-bench](https://arxiv.org/abs/2406.12045)). 교육에서 얻는 결론은 단순하다. 한 번 성공한 trace는 희망적인 신호일 수 있지만, Harness 변경이 개선됐다는 주장은 같은 또는 동등한 조건에서 재평가해야 한다.

## Harness도 낡고 Memory도 검증되어야 한다

Harness Improvement는 항상 개선을 뜻하지 않는다. OpenAI의 Codex Skill eval 가이드는 Skill 변경 뒤 선택이 안 됨, 필수 단계 생략, 불필요한 파일 생성 같은 regression이 생길 수 있다고 설명하고, `prompt → trace + artifacts → 작은 검사 묶음 → 비교 가능한 점수` 흐름으로 Skill을 평가하라고 권한다([OpenAI Skill eval guide](https://developers.openai.com/blog/eval-skills)). OpenAI의 GPT-6 Astra guidance도 Skill 설명이 context에 들어가며 너무 길거나 많으면 description이 잘리거나 선택이 어려워질 수 있고, 서로 모순되거나 넓게 쓰인 description은 무관한 작업에서 불필요한 지침을 로드할 수 있다고 경고한다([OpenAI GPT-6 Astra guidance](https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra)).

따라서 “한 번 실패했으니 rule 하나 추가”는 Loop Engineering이 아니라 rule accumulation의 시작일 수 있다. 반복 실패를 막기 위한 instruction이 다른 task의 선택을 방해하거나, stale `AGENTS.md`가 바뀐 build command를 계속 지시하거나, Skill이 오래된 command를 실행하거나, Memory가 과거 결정을 현재 사실처럼 회수할 수 있다. OpenAI Harness Engineering 사례도 repository knowledge를 system of record로 만들고, custom linter와 structural test로 architecture 규칙을 강제하며, entropy와 garbage collection을 다룬다([OpenAI Harness Engineering](https://openai.com/index/harness-engineering/)). Google Cloud의 Agent Factory recap도 frontier model 변화 앞에서 과도하게 경직된 custom harness가 technical debt와 sunk cost를 만들 수 있다는 업계 견해를 소개한다([Google Cloud Agent Factory recap](https://cloud.google.com/blog/topics/developers-practitioners/agent-factory-recap-agent-harnesses-shifting-left-and-autonomous-coding)).

다만 **“Harness Technical Debt”는 확인한 자료에서 합의된 공식 기능명이나 universal term으로 확인되지 않았다**. 교육에서는 stale instruction, stale documentation, stale skill, stale memory, broken tool integration, outdated command, obsolete workflow, duplicated context, conflicting rules, unused configuration 같은 현상을 software technical debt와 연결하는 bounded analogy로 쓰는 것이 안전하다([OpenAI Harness Engineering](https://openai.com/index/harness-engineering/), [Google Cloud Agent Factory recap](https://cloud.google.com/blog/topics/developers-practitioners/agent-factory-recap-agent-harnesses-shifting-left-and-autonomous-coding)). 이 표현을 쓰더라도 “공식 용어”가 아니라 이 교육의 설명용 shorthand라고 밝혀야 한다.

Memory는 현재 Context와도, project Source of Truth와도 분리해야 한다. OpenAI의 Codex Memories 문서는 ChatGPT web의 ChatGPT Memory와 local Codex clients의 separate local memory store를 구분하고, 필수 팀 지침은 `AGENTS.md` 또는 checked-in documentation에 두며 Memory를 항상 적용되어야 하는 규칙의 유일한 출처로 삼지 말라고 설명한다([Codex Memories](https://learn.chatgpt.com/docs/customization/memories)). 같은 문서는 local memories가 useful context를 future work로 가져오는 recall layer이며, generated state 파일을 수동 편집하는 것을 primary control surface로 삼지 말라고 한다([Codex Memories](https://learn.chatgpt.com/docs/customization/memories)). ChatGPT Memory의 Dreaming 글도 saved memory가 시간이 지나며 stale, inaccurate, irrelevant해질 수 있음을 전제로 한다([OpenAI ChatGPT Memory Dreaming](https://openai.com/index/chatgpt-memory-dreaming/)).

이 근거에서 수업용 Memory lifecycle을 만들 수 있다. CREATE에서는 반복 사용 가치가 있고 안정적인 사실만 후보로 삼고, VALIDATE에서는 원본 문서·코드·테스트·결정 기록과 대조하며, SCOPE에서는 사용자·프로젝트·task 범위를 구분한다. RETRIEVE에서는 현재 질문이 과거 맥락에 의존할 때만 회수하고, REFRESH와 UPDATE에서는 기술·담당·절차·결정 변경을 반영하며, DELETE/RETIRE에서는 obsolete, incorrect, sensitive, low-value memory를 제거하거나 사용 중지한다. 이는 제품 버튼 목록이 아니라 교육용 운영 모델이다. 특히 repository 자체와 checked-in docs는 팀이 검토하고 version-control할 수 있는 Source of Truth이며, Memory는 그것을 찾고 반복 설명을 줄이는 보조 계층이다.

| Harness 변경 대상 | 가능한 regression 질문 | 근거가 허용하는 주장 |
| --- | --- | --- |
| Instruction / `AGENTS.md` | 다른 task에서 context bloat, conflict, stale command가 생겼는가? | 공유 지침 변경은 재평가 대상이다. 회귀율은 이 프로젝트에서 미측정이다. |
| Skill | 선택 누락, 과잉 선택, 필수 단계 생략, 불필요한 artifact가 생겼는가? | Skill eval은 trace와 artifacts 기준으로 설계할 수 있다. |
| Tool / environment | dependency, sandbox, network, resource 조건이 바뀌었는가? | 동일 model도 runtime 조건에 따라 결과가 달라질 수 있다. |
| Memory | scope, freshness, provenance, deletion 기준이 있는가? | Memory는 Source of Truth가 아니라 recall layer다. |

## 병렬성과 Human checkpoint는 위험에 맞춰 설계한다

Subagent와 parallel agent는 “많이 띄우면 빠르다”가 아니다. OpenAI Codex Subagents 문서는 app, CLI, IDE extension의 subagent workflow를 설명하며, 각 subagent가 separate agent thread에서 일하고 parent가 summary를 받는다고 한다. 문서는 noisy exploration/logs를 main context 밖으로 옮기고 independent tasks를 병렬화할 수 있다고 설명하지만, subagent가 각자 model/tool execution을 하므로 단일 agent보다 tokens를 더 쓸 수 있고, 동시에 쓰는 작업은 conflict와 coordination 비용 때문에 더 조심해야 한다고 안내한다([Codex Subagents](https://learn.chatgpt.com/docs/agent-configuration/subagents)).

Context isolation의 이점은 signal-to-noise를 줄이고 role-specific investigation을 분리할 수 있다는 점이다. 손실은 handoff에서 생긴다. Subagent가 parent에게 summary를 돌려주는 순간, 원본 trace, 파일 line, source nuance, negative finding, uncertainty가 빠질 수 있다. 제품 문서는 누락률을 수량화하지 않으므로 “정보가 반드시 손실된다”가 아니라 “압축 handoff에서 중요한 증거가 빠질 수 있다”로 가르쳐야 한다([Codex Subagents](https://learn.chatgpt.com/docs/agent-configuration/subagents)). 반환 형식에는 조사 범위, 확인한 파일·라인·URL, 실행 명령, 결과, 불확실성, 미확인 항목을 요구하고, 중요한 결정 전에는 main agent 또는 개발자가 원본 근거를 확인하도록 설계하는 편이 안전하다.

OpenAI API의 multi-agent deployment checklist도 독립 workstream을 구체적으로 쪼개고, 짧거나 순차 의존적이거나 같은 mutable resource를 쓰는 일에는 한 agent를 선호하라고 안내한다. 직접 tool call 방식과 multi-agent 방식의 success, required evidence, total tokens, latency, cost를 비교하라는 권고도 있다([OpenAI Agents API deployment checklist](https://developers.openai.com/api/docs/guides/deployment-checklist)). 별도 연구는 GAIA benchmark에서 multi-agent inference-time parallelism이 일부 조건에서 정확도와 latency를 개선하면서 token usage를 늘렸고, 과도한 병렬화가 항상 유리하지 않다고 보고했다([Two-tier perspective on multi-agent parallelism](https://arxiv.org/abs/2608.05791)). 이 연구는 Codex coding workflow를 직접 입증하지 않으므로, 수업에서는 trade-off 근거로만 쓴다.

Human-in-the-loop도 같은 위험 기반 구조가 맞다. Codex의 approval and security 문서는 `workspace-write`와 `on-request` 조합에서 workspace 안의 파일 편집과 명령 실행은 자동으로 할 수 있고, workspace 밖 파일 편집이나 network access처럼 sandbox 밖 요청에는 approval을 요구할 수 있다고 설명한다([Codex Agent approvals & security](https://learn.chatgpt.com/docs/agent-approvals-security)). automatic approval review는 이미 approval이 필요한 요청을 검토하는 layer이며, sandbox 경계 자체를 대체하지 않는다([Codex Agent approvals & security](https://learn.chatgpt.com/docs/agent-approvals-security)). 따라서 교육 메시지는 “모든 action을 사람이 승인하라”도, “agent에게 전부 맡겨라”도 아니다.

적절한 checkpoint는 task definition, plan review, permission approval, diff review, test interpretation, merge/deploy decision 같은 지점에 위험에 맞춰 둔다. 작고 되돌릴 수 있는 read-only 조사나 제한된 workspace 안의 routine edit는 Harness가 명확하면 빠르게 진행할 수 있다. 반면 권한 확대, 민감 데이터 접근, destructive command, external system write, production deploy, architecture trade-off, verification criteria, final responsibility는 사람의 판단이 남아야 한다. 이것은 회사 보안 정책을 대신하는 말이 아니다. OQ-014의 회사 내부 기준이 정해지기 전까지는 OpenAI 제품의 permission mechanism과 우리 회사의 허용 정책을 분리해야 한다.

## 남은 질문은 Demo 결정으로 닫지 않는다

이번 조사에서 MASTER_PLAN의 성숙도 Story를 바꿀 충돌은 보이지 않았다. 오히려 `Chatbot → Prompt → Context → Harness → Loop` 흐름은 더 정밀해졌다. Model capability와 system design은 서로 다른 층위이고, Harness는 점진적으로 등장해야 하며, Harness staleness가 Loop Engineering의 문제 배경이 된다. `INV-MATURITY-005–010`, `INV-LOOP-001`, `INV-RESEARCH-001–005`와 충돌하는 변경은 하지 않았다.

| Open Question | 이번 보고서가 확정한 점 | 남은 상태 |
| --- | --- | --- |
| OQ-005 | Codex Memory, Subagent, permission behavior는 2026-09-25 기준 공식 문서로 확인했다. | 대상 교육 계정, workspace, 관리자 설정, 실제 product surface availability는 아직 검증되지 않았으며 Demo 전 재확인이 필요하다. |
| OQ-007 | Verification은 tests, trace, rubric, human review, regression eval로 구성할 수 있다는 근거를 확보했다. | 교육용 project repository와 실제 verification command는 아직 미정이다. |
| OQ-008 | Skills, Subagents, Memory, Harness의 근거와 trade-off를 확보했다. | 제품별 Demo 선택과 실제 구조는 관찰된 friction과 target surface가 정해진 뒤 결정해야 한다. |
| OQ-009 | Loop 평가에는 failure, cause, hypothesis, change, re-evaluation, regression check가 필요하다는 근거를 확보했다. | 반복 failure와 evaluation criteria가 실제로 관찰되기 전까지 “Loop가 개선했다”는 주장은 미확정이다. |
| OQ-011 | Scaffold와 Harness 용례 근거는 bounded distinction을 뒷받침한다. | 업계 합의를 확립하지는 않으므로 최종 operational term wording은 Storyline과 material design에서 확정해야 한다. |
| OQ-014 | Codex permission, sandbox, approval의 공식 제품 범위는 확인했다. | 회사 보안·데이터·Cloud usage·credential·external write 정책은 확인되지 않았다. |

Source gap도 명확하다. Prompt, instruction, Skill, Memory, Context 변경 각각의 장기 회귀율을 같은 coding agent와 기업 repository에서 분리 추정한 종합 연구는 확인하지 못했다. Codex Subagent의 context-isolation 효과, summary 누락률, 실제 developer throughput 증가율도 공개 문서로 수량화되지 않았다. Codex local Memories의 프로젝트별 격리, 개별 memory provenance, freshness 판단, deletion workflow는 공식 문서만으로는 충분히 확정하지 못했다. 회사 계정에서의 실제 기능 노출과 보안 정책은 조사 대상에 포함되지 않았다.

## Conclusion

STEP 03 §§31–40의 핵심 가치는 교육 문장을 더 정확하게 만든다는 데 있다. “좋은 AI를 쓴다”는 말은 모델 선택만으로 끝나지 않는다. 개발자는 model capability를 존중하되, context, tools, tests, runtime, memory, subagent handoff, approval, review, regression eval이 함께 만드는 system reliability를 설계해야 한다.

다음 단계에서 바로 Slide나 Demo로 확정하면 너무 빠르다. 먼저 교육용 repository와 verification command를 정하고, 실제 반복 failure를 관찰한 뒤, 어떤 Harness 변경이 어떤 regression check를 통과했는지 기록해야 한다. 그때 비로소 Loop Engineering을 사례로 보여줄 수 있다.
