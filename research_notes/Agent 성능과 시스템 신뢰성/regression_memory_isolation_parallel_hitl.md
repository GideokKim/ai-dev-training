# Harness 회귀, Memory 수명주기, Context 분리와 Human-in-the-Loop

조사 기준일: 2026-09-25. 제품 동작은 OpenAI 공식 Codex/API 문서와 개발자 글을 우선 확인했고, 병렬 에이전트의 비용·지연 효과는 1차 연구를 보조 근거로 확인했다. 아래에서 **문서화된 제품 동작**, **관찰된 사례·연구 결과**, **교육 권고**를 분리한다. Codex 기능은 클라이언트 버전, 계정, 설정에 따라 바뀔 수 있다.

## 1. Harness 변경의 회귀와 기술 부채를 어떻게 확인할까?

### Takeaway

프롬프트와 규칙, Skills, 도구, Memory는 실행 시 모델에 제공되는 조건을 바꾸므로 변경 뒤 다른 작업의 선택·절차·산출물도 달라질 수 있다. 이를 일반 법칙이나 Codex에서 이미 측정된 회귀율로 말하지 말고, 대표 작업의 고정 입력과 실행 trace·산출물을 변경 전후 비교하는 회귀 평가로 확인한다.

### Cited Findings

- OpenAI의 Codex Skill 평가 가이드는 Skill 변경 때 선택이 안 됨, 필수 단계 생략, 불필요한 파일 생성 같은 회귀가 생길 수 있다고 설명한다. 권장 평가 단위는 `prompt → 기록된 실행(trace + artifacts) → 작은 검사 묶음 → 비교 가능한 점수`다. 결과뿐 아니라 Skill 호출 여부, 예상 명령 실행, 규약 준수도 확인하고, 결정적 검사와 rubric 평가를 함께 쓴다. [Testing Agent Skills Systematically with Evals](https://developers.openai.com/blog/eval-skills)
- OpenAI의 2026년 9월 Codex 지침은 Skill 설명이 모델 Context에 들어가며, 너무 길거나 Skill이 많으면 설명이 잘리고 선택이 어려워질 수 있다고 보고한다. 설명이 서로 모순되거나 무관한 작업에서도 Skill을 선택하도록 과도하게 넓게 쓰면 불필요한 지침이 로드될 수 있다. `AGENTS.md`는 repository 작업마다 적용될 수 있으므로 불필요한 강제 지시는 Context를 소모하고 일을 늦출 수 있다고 권한다. [Rethinking skills and prompts for GPT-6 Astra](https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra)
- OpenAI Model Optimization 문서는 prompt 변경 전 baseline을 만들고, 실제 입력을 대표하는 test set에서 결과를 측정한 뒤 조정하는 평가 순환을 권한다. 이는 특정 Codex Harness의 보장된 시험 절차라기보다 LLM 응용 평가 가이드다. [Model optimization](https://developers.openai.com/api/docs/guides/model-optimization)
- OpenAI의 Harness Engineering 사례는 repository 규칙을 custom linter와 structural test로 기계적으로 강제하고, review·refactor·bug에서 발견한 반복 교정을 문서나 도구에 반영했다고 보고한다. 같은 글은 에이전트가 repository의 기존 패턴을 되풀이하면서 drift를 키울 수 있고, 이를 줄이기 위해 정기 정리 작업을 만들었다고 설명한다. 수치와 효과는 단일 내부 사례의 자체 보고이며 대조군 실험은 아니다. [Harness engineering: leveraging Codex in an agent-first world](https://openai.com/index/harness-engineering/)
- Google Cloud의 2026-09-25 업계 글은 경직된 맞춤형 Harness에 과잉 투자하면 frontier model 발전 때 기술 부채와 매몰비용이 생길 수 있다고 Ryan Lopopolo의 발언을 요약한다. 이는 “Harness 변경에는 유지비가 있다”는 업계 견해의 한 사례다. [Agent Factory recap: Agent harnesses, shifting left, and autonomous coding](https://cloud.google.com/blog/topics/developers-practitioners/agent-factory-recap-agent-harnesses-shifting-left-and-autonomous-coding)
- OpenAI 공식 글은 “Harness engineering”을 제목과 분야 표현으로 쓰고, 별도 절에서 코드 패턴의 “entropy and garbage collection” 및 일반적인 “technical debt”를 논한다. Google Cloud 글도 맞춤 Harness 과잉 구축에 따른 기술 부채를 말한다. 확인한 자료에서 **“Harness technical debt”는 합의된 공식 기능명이나 표준 정의로 확인되지 않았다.** 교육에서는 stale instruction·Skill·Memory·도구·절차와 과도한 scaffold의 유지 부담을 가리키는 프로젝트의 설명용 shorthand/비유로 한정할 수 있다. [OpenAI Harness Engineering](https://openai.com/index/harness-engineering/), [Google Cloud recap](https://cloud.google.com/blog/topics/developers-practitioners/agent-factory-recap-agent-harnesses-shifting-left-and-autonomous-coding)

### Inferences

- 공유 `AGENTS.md`, Skill 설명·본문, tool schema/권한, Memory 생성·검색 정책을 바꾸면 그 자원을 사용하는 다른 작업도 영향을 받을 **가능성**이 있다. OpenAI 문서는 Skill 설명과 repository 지시가 Context에 들어온다고 설명하지만, 각 종류의 변경이 Codex의 다른 작업에 끼치는 회귀율이나 인과 효과를 계량하지는 않는다. 따라서 “영향이 발생한다”가 아니라 “공유 범위에 따라 재평가 대상이 된다”로 표현한다.
- 교육·Harness 평가를 위한 변경 전후 체크는 다음처럼 구성할 수 있다. (1) 작업 목적·필수 결과를 미리 정한다. (2) 성공 사례뿐 아니라 Skill이 실행되면 안 되는 사례, 경계·실패 사례를 포함한 작고 대표성 있는 회귀 묶음을 유지한다. (3) 같은 입력과 고정된 모델/도구/권한 설정으로 이전·신규 버전을 실행한다. (4) 성공, 필수 단계, 변경 파일·명령, 과잉 행동, latency·token 사용을 나누어 비교한다. (5) 결정적 검사는 파일·명령·테스트 결과에, 정성 평가는 작고 명시적인 rubric에 둔다. 실제 실패는 재현 사례로 추가하되 한 번의 예외를 곧바로 상시 규칙으로 만들지는 않는다. 이는 위 평가 문서의 방법을 교육용 변경 관리로 확장한 제안이다.
- 평가 묶음 자체의 과적합을 줄이려면 일부 사례를 보류하거나 주기적으로 실제 실패와 새로운 변형을 포함하는 편이 낫다. 이 권고는 일반적인 평가 설계상의 추론이며, 위 Codex Skill 예시가 이런 분할의 효과를 실험적으로 입증한 것은 아니다.
- 이 교육의 고정 Source of Truth는 [MASTER_PLAN.md](../../plan/MASTER_PLAN.md) §5.8, §14 및 [INVARIANTS.md](../../plan/INVARIANTS.md)의 `INV-MATURITY-010`, `INV-LOOP-001`이다. 자료에서는 Harness를 먼저 문제와 유지 부담의 맥락에 놓고, 실제 실패·반복성·원인·개선 전후 근거를 갖춘 Loop로 연결한다. 반복 기준이나 개선 성공을 근거 없이 꾸며내지 않는다.

### Gaps

- OpenAI의 Skill eval 글은 실용적 Codex 예시이지, Prompt/AGENTS.md/Memory/도구 각각의 장기적 회귀율이나 효과크기를 비교하는 연구는 아니다. 적절한 회귀 묶음의 보편적인 크기도 정하지 않는다.
- 확인한 1차 자료에는 “Harness technical debt”의 보편적으로 채택된 정의나 측정 단위가 없다. 용어를 수업에서 사용할 때는 프로젝트의 운용상 정의를 별도로 결정해야 한다.
- 제품 지침과 모델별 동작은 빠르게 바뀐다. GPT-6 Astra 관련 2026-09-11 글의 조언을 모든 모델·모든 Codex 환경에 그대로 일반화하지 않는다.

## 2. Memory를 만들고, 검증하고, 회수하는 방법은 무엇인가?

### Takeaway

Memory는 이전 작업에서 재사용할 만한 맥락을 불러오는 recall layer이며, 반드시 따라야 할 팀 규칙과 현재 상태를 대신하지 않는다. Codex local Memories의 자동 생성·사용 기능은 일부 lifecycle을 제공하지만, 신뢰성 검증과 오래된 기록의 수명 관리 전체를 보장하지 않으므로 교육에서는 수명주기를 운영 권고로 설명한다.

### Cited Findings

- 현재 OpenAI Codex 문서는 ChatGPT web의 ChatGPT Memory와 local Codex clients의 별도 local memory store를 명시적으로 구분한다. 필수 팀 지침은 `AGENTS.md`나 repository에 체크인된 문서에 두고, Memory는 항상 적용되어야 할 규칙의 단독 출처가 아닌 recall layer로 취급하라고 안내한다. [Memories — Codex](https://learn.chatgpt.com/docs/customization/memories)
- Codex local Memories는 기본적으로 꺼져 있다. 켜면 eligible prior chats의 유용한 맥락을 local memory files로 만들 수 있으며, 활성·짧은 세션은 생성을 건너뛰고, secret field를 redaction하며, 매 대화 종료 직후가 아니라 background에서 갱신할 수 있다. idle 대기 및 rate-limit 기준 때문에 갱신이 지연되거나 생략될 수 있다. 주 저장 파일은 `CODEX_HOME` 아래 `memories/`의 summaries, durable entries, recent inputs, supporting evidence 등이다. 문서는 이를 generated state로 설명하고, 수동 편집을 주 제어 수단으로 삼지 말라고 한다. 같은 문서의 `/memories` 및 설정으로 현재 대화가 기존 Memory를 쓸지, 향후 생성 입력이 될지 조정할 수 있다. `memories.disable_on_external_context = true`는 MCP/web/tool search 등 외부 Context를 사용한 대화를 Memory 생성 입력에서 제외하는 설정이다. [Memories — Codex](https://learn.chatgpt.com/docs/customization/memories)
- OpenAI ChatGPT의 Dreaming 설명은 이전 saved memory가 시간이 지나며 stale·부정확·무관해질 수 있다고 말하고, 이를 배경에서 대화 이력으로 재구성하는 ChatGPT Memory 기능을 소개한다. memory 평가 기준에 유용한 Context의 전달, 선호·제약 준수, 시간 경과에 따른 최신성이 포함된다. 이는 ChatGPT의 사용자 Memory 연구·제품 설명이지 Codex local memory 동작의 증거는 아니다. [Dreaming: Better memory for a more helpful ChatGPT](https://openai.com/index/chatgpt-memory-dreaming/)
- OpenAI 장기 Codex 작업 사례는 spec, plan, constraints, status, decisions를 Markdown 파일에 남겨 재사용하는 것을 “durable project memory”라 부르며, 계획 파일을 source of truth로 두고 milestone 검증과 상태 갱신을 했다고 보고한다. 이는 한 작업의 자체 보고 사례다. [Run long horizon tasks with Codex](https://developers.openai.com/blog/run-long-horizon-tasks-with-codex)

### Inferences

- 수업에서 제안할 lifecycle은 **교육용 운영 모델**이지 Codex의 버튼/API 기능 목록이 아니다.

  | 단계 | 운영 제안 |
  | --- | --- |
  | CREATE | 반복 사용 가치가 있고 비교적 안정적인 사실만 후보로 만든다. 출처, 확인 날짜, 적용 프로젝트/범위를 함께 남긴다. |
  | VALIDATE | 원본 문서, 실제 코드·테스트, 결정 기록과 대조한다. 추정·일회성 정보는 확정 지식으로 저장하지 않는다. |
  | SCOPE | 사용자 선호, 프로젝트 관례, 특정 작업 상태를 구별한다. 한 프로젝트 사실이 다른 repository나 사용자에게 적용되지 않게 범위를 정한다. |
  | RETRIEVE | 현재 질문이 과거 맥락에 의존할 때만 후보를 확인한다. 회수된 기억이 현재 코드/기획 문서와 맞는지 작업 전에 다시 검증한다. |
  | REFRESH | 기술, 담당, 절차, 결정이 바뀔 때 관련 기억을 다시 확인한다. 특정 주기나 만료 임계값은 근거 없이 고정하지 않는다. |
  | UPDATE | 근거가 바뀐 항목을 기존 기록과 연결해 갱신하고, 무엇이 왜 달라졌는지 보존한다. |
  | DELETE | obsolete, 잘못됨, 민감함, 더 이상 재사용 가치가 없는 기억을 제거하거나 사용 중지한다. 현재 Codex 문서가 이 lifecycle 전체를 지원하는 삭제 인터페이스를 약속한다고 말하지 않는다. |

- Codex의 `disable_on_external_context` 설정은 외부 tool/web 자료가 대화 기반 Memory 생성으로 넘어가지 않게 하는 선택지를 제공한다. 이 점은 외부 출처의 사실이 개인 Memory와 뒤섞일 가능성을 운영자가 별도 고려해야 함을 시사하지만, 문서는 오염 발생률이나 차단의 완전성을 측정하지 않는다.
- 제품 문서가 확인해 주는 것은 per-chat 사용·생성 제어와 generated files의 존재·생성 지연 등이다. 정확한 개별 기록 검색 알고리즘, 자동 최신성 판정, 제품 안에서의 개별 Memory 수정·삭제 절차는 이 조사 범위에서 명확히 문서화된 근거를 찾지 못했다. 교육에서는 Memory를 자동화 기능이 늘 유효하다고 가정하지 말고 현재 source of truth로 확인하는 습관을 강조한다.
- 권장 Source of Truth 층위: 팀이 승인한 `plan/`, `AGENTS.md`, version-controlled project docs와 실제 repository가 규칙·결정의 근거다. Memory는 해당 자료를 찾고 반복 설명을 줄이는 보조 계층이다. 이 프로젝트의 구체 규칙은 [MASTER_PLAN.md](../../plan/MASTER_PLAN.md) §0–§1, §5.6 및 [DECISIONS.md](../../plan/DECISIONS.md)의 Source-of-Truth 계층·Change Policy를 따른다.

### Gaps

- Codex local Memories가 프로젝트별로 격리되는지, 항목별 provenance·신뢰도·만료일을 어떻게 다루는지, 현재 지원되는 명시적 개별 삭제 흐름이 무엇인지는 공개 문서에서 분명하지 않았다. 제품별 지원을 Demo로 가정하기 전에 다시 확인해야 한다.
- Memory의 효용/오염/최신성에 대한 독립된 Codex 전용 성능평가를 확인하지 못했다. Dreaming 자료의 성능 설명은 별도 ChatGPT memory system을 대상으로 한다.

## 3. Context isolation, parallel agents, human checkpoints의 균형은 어떻게 잡을까?

### Takeaway

Subagent는 독립된 작업을 나누어 병렬 처리하고 조사 잡음을 주 Context에서 분리할 때 유용하지만, 자체 model/tool 실행 때문에 token 비용과 결과 통합 부담이 늘어난다. 개발자는 모든 저위험 단계를 승인할 필요도, 모든 판단을 위임할 수도 없다. 작업 경계는 위험에 맞게 설정하고 Goal·trade-off·검증 기준·최종 결과에 대한 책임은 개발자에게 남긴다.

### Cited Findings

- 현행 OpenAI Codex 문서는 app, CLI, IDE extension의 subagent workflow를 설명한다. 각 Subagent는 별도 agent thread에서 일하며, parent는 결과를 summary로 받는다. 문서는 noisy exploration/logs를 main Context 밖으로 옮기고 independent tasks를 병렬화하면 도움이 될 수 있다고 한다. Subagent는 각자 model/tool 실행을 하므로 단일 agent보다 더 많은 tokens를 소비한다. 읽기 중심 탐색·triage·요약부터 시작하고, 동시에 쓰는 작업은 충돌과 조정비용 때문에 더 조심하라고 명시한다. [Subagents — Codex](https://learn.chatgpt.com/docs/agent-configuration/subagents)
- OpenAI API의 Multi-agent 배포 체크리스트는 독립된 workstream을 구체적으로 쪼개고, 짧거나 순차 의존적이거나 같은 mutable resource를 쓰는 일에는 한 agent를 선호하라고 안내한다. 동일 workflow의 직접 tool call 방식과 비교해 성공, 필수 근거, total tokens, latency, cost를 측정하라고 한다. 이는 API 다중 agent용 안내이며 Codex UI의 정량 성능을 보고한 자료는 아니다. [API deployment checklist](https://developers.openai.com/api/docs/guides/deployment-checklist)
- 2026-08-06 제출 후 ICML 2026 채택으로 표시된 1차 연구는 GAIA benchmark에서 multi-agent inference-time parallelism이 일부 조건에서 정확도와 end-to-end latency를 개선하면서 token 사용을 늘렸고, 중간 난이도 작업에서 전략 조합이 유리했으며 과도한 병렬화가 항상 낫지는 않았다고 보고한다. 연구는 일반적인 GAIA 작업을 대상으로 하므로 Codex coding workflow의 효과를 직접 입증하지 않는다. [A Two-Tier Perspective on Inference-Time Parallelism in Multi-Agent LLM Systems](https://arxiv.org/abs/2608.05791)
- Codex 권한 문서는 local `workspace-write` 기본 구성이 workspace 안의 파일 편집과 routine local commands를 허용하고, workspace 밖 편집이나 network 같은 경계 밖 동작에는 승인 요청을 둘 수 있음을 설명한다. automatic review는 이미 승인이 필요한 요청을 검토하며 sandbox 경계를 대체하지 않는다. 문서화된 설정에는 low/medium/high/critical 위험에 대한 별도 처리와 사용자 authorization 조건이 포함된다. [Agent approvals & security](https://learn.chatgpt.com/docs/agent-approvals-security), [Sandboxing](https://learn.chatgpt.com/docs/sandboxing)

### Inferences

- **Context isolation의 이점**은 요구사항·결정·최종 합성이 들어 있는 main thread에서 조사 로그와 중간 산출물을 줄일 수 있다는 점이다. **대가**는 Subagent가 parent에 돌려주는 summary가 세부 증거를 모두 옮기지 않을 수 있다는 점이다. summary가 실제로 빠뜨리는 비율은 제품 문서가 측정하지 않으므로, “정보가 반드시 손실된다”가 아니라 “압축 handoff에서 중요한 증거가 빠질 수 있다”는 설계 위험으로 가르친다.
- 반환 형식에 질문, 조사 범위, 확인한 파일·라인/출처, 재현 명령, 결과, 불확실성·미확인 항목을 요구하고, 구현·결정 전에 main agent나 개발자가 원본 근거를 확인하도록 하는 것이 안전한 교육 제안이다.
- 병렬화 후보는 결과가 서로 의존하지 않고, 데이터·파일을 분리할 수 있으며, 합치는 작업이 단순한 조사·리뷰다. 같은 파일을 동시에 고치거나 한 단계의 결과가 다음 단계 입력인 작업에서는 파일 범위를 직교하게 나누거나 순차 처리한다. 예상 절약 시간이 조정·통합 비용보다 큰지 실제 지연·품질·tokens로 판단한다.
- 승인 설계는 위험과 영향도에 비례하게 둔다. 제한된 workspace 안의 통상적인 탐색·검증은 미리 정의한 경계에서 수행할 수 있게 하고, 권한 확대, 민감 데이터 접근, 파괴적 변경, 외부 시스템에 결과 쓰기/배포처럼 복구가 어렵거나 영향이 큰 단계는 사람 checkpoint를 두는 것이 합리적이다. 이는 Codex의 모든 제품 표면이 같은 규칙을 제공한다는 사실 주장이 아니라 risk-based 운영 권고다.
- 이 교육에서 개발자는 목표·요구사항·trade-off·중요 Architecture 판단, verification 기준과 결과 해석, 위험 판단, 최종 Review와 책임을 계속 맡는다. 근거는 [MASTER_PLAN.md](../../plan/MASTER_PLAN.md) §6, §15, [INVARIANTS.md](../../plan/INVARIANTS.md)의 `INV-MATURITY-007` 및 책임 관련 invariant다. 승인 클릭 수를 최소화하는 일과 agent에 모든 결정을 맡기는 일 모두 목표가 아니다.

### Gaps

- Codex Subagent가 반환하는 summary의 누락률이나 context-isolation이 정확도에 미치는 Codex 전용 효과는 공개 문서에서 수량화되지 않았다.
- 확인한 병렬화 연구는 coding/Codex 과제가 아니다. Codex 문서는 token 비용과 사용 시점을 설명하지만, 실제 developer throughput의 보편적인 증가율이나 권장 agent 수를 제시하지 않는다. 프로젝트별 A/B 결과가 필요하다.
- 현재 permission/approval UI와 기능은 surface·client·조직 설정에 따라 다를 수 있다. Demo에서 승인 동작을 보여줄 경우 대상 교육 환경에서 확인해야 한다. 위험 단계의 세부 목록과 누가 승인권자인지는 회사 보안 정책에 따라 미확정이다.

---

### Evidence quality and volatility summary

- **Codex 제품 동작:** OpenAI의 현행 Codex 문서가 직접 설명한 설정·동작은 해당 날짜 기준 신뢰도가 높지만, 제품·계정·클라이언트 버전 변화 가능성이 높다. 데모 직전 재확인이 필요하다.
- **평가·운영 방법:** OpenAI 개발자 글과 체크리스트가 제공한 구현 지침은 실용 근거다. 모든 조직·task에 일반화된 효과크기나 회귀 빈도는 아니다.
- **병렬 agent 효과:** ICML 2026 논문은 통제된 실험 근거지만 GAIA 범위라 coding task로의 외적 타당성은 제한된다. OpenAI 단일 harness 사례와 Google Cloud 업계 요약도 관찰·사례 자료이지 대조 실험이 아니다.
- **교육 적용:** 본 노트의 CREATE/VALIDATE/SCOPE/RETRIEVE/REFRESH/UPDATE/DELETE lifecycle, 회귀 묶음 설계, approval checkpoint는 제품 기능 주장이 아니라 [MASTER_PLAN.md](../../plan/MASTER_PLAN.md)의 Story와 원칙을 근거로 한 설계 제안이다. 프로젝트는 연구 결과만으로 Demo나 Source of Truth를 변경하지 않는다.
