# 제품 사실과 교육 패턴을 분리하다

2026-09-25 기준 조사에서 ChatGPT와 Codex는 코드 대화, 저장소 읽기, 로컬·클라우드 실행, 지침 재사용, Skills, Subagents, 그리고 선택 가능한 Memory를 제공하지만, 기능의 실행 표면과 계정·관리자 설정에 따라 실제 범위가 달라진다. 따라서 교육에서 “할 수 있다”는 말은 제품·표면·설정의 범위를 붙여야 한다. “Context Router”, Harness Engineering, Loop Engineering은 제품 메뉴의 공식 명칭이나 보편적으로 확정된 표준 정의가 아니라, 공식 기능과 공개된 Engineering 사례를 토대로 이 교육이 사용하는 설계 패턴과 Operational Definition이다. Lost in the Middle 연구는 특정 모델과 검색 과제에서 위치 민감성을 보였지만 현재 ChatGPT/Codex의 모든 코딩 과제에 일반화할 근거는 아니다. 이 증거 기반은 Story를 바꿀 이유를 찾지 못했으며, Skills 경로와 Subagent 격리 범위에 해석 경계를 남긴다. 실제 회사 계정·정책과 Demo 저장소는 검증하지 않았으므로 그 부분은 후속 확인이 필요하다.

## 1. 증거의 종류와 기준일이 주장의 범위를 정한다

조사 기준일은 **2026-09-25**다. 제품·기능 문서는 같은 날짜에 확인했으며, 공개일이나 갱신일이 페이지에 보이지 않는 경우 날짜를 추측하지 않았다. 여기 인용한 현행 제품 문서 다수는 공개일을 표시하지 않는다. GitHub 연결 Help Center는 확인 당시 “Updated: 10 hours ago”라고 보였지만 정확한 날짜는 표시하지 않았다. 제품 동작은 volatile하므로 이 보고서는 해당 날짜의 문서상 상태를 기록하며, 실제 사내 계정에서의 가용성을 보증하지 않는다.

Source of Truth의 우선순위는 **Tier 1 — Primary / Official**, **Tier 2 — High-quality Secondary**, **Tier 3 — Community / Discussion** 순이다. 제품 기능은 OpenAI 공식 문서·Help Center·제품 공지·Developer 문서·공식 저장소로, 연구 주장은 원 논문 또는 공식 기술 자료로 우선 확인한다. Tier 2는 Primary Source로 부족한 부분을 보완하고, Tier 3은 사용자 경험이나 friction 탐색에만 보조적으로 쓴다. Tier 3만으로 제품 기능이나 기술 사실을 확정하지 않는다. 이번 세 노트의 중심 근거는 공식 OpenAI 출처와 학술 논문이다.

| 분류 | 이 보고서에서의 의미 |
| --- | --- |
| FACT | 공식 문서, 원 논문, 또는 실제 관찰이 뒷받침하는 명제 |
| PRODUCT BEHAVIOR | 확인일·표면·설정에 한정되는 현행 제품 동작 |
| ACADEMIC FINDING | 연구가 실제로 평가한 모델·과제·조건에 한정되는 결과 |
| INDUSTRY PRACTICE | 특정 조직이나 저자의 공개 사례이며 보편 법칙은 아님 |
| TEACHING MODEL | 복잡한 내용을 교육 Story로 구조화한 모델 |
| HEURISTIC | 실무적으로 유용하지만 항상 성립하지 않는 권고 |
| PROJECT CONVENTION | 이 과정 또는 Demo에서 의도적으로 정하는 구현 방식 |

Confidence는 근거의 명확성과 직접성에 대한 등급이며 제품의 안정성을 뜻하지 않는다. **HIGH**는 직접 확인 가능한 공식 문서·원 논문·실행 또는 서로 일치하는 강한 근거, **MEDIUM**은 공식 자료가 불완전하거나 상황에 따라 달라지는 동작, **LOW**는 설명이 불명확하거나 추론·비공식 보고에 크게 의존하는 경우다. **Volatility LOW/MEDIUM/HIGH**는 각각 상대적으로 안정적인 원리, 변경될 수 있는 범위, UI·가용성·기본값 등이 빠르게 바뀔 수 있는 제품 동작을 나타낸다. 역사적 논문의 본래 실험 결과는 비교적 낮은 변동성이지만 현재 제품에 적용하는 해석은 높다. 공개 페이지가 제공하지 않은 플랜·조직 정책·모델별 세부값은 확인된 것으로 취급하지 않는다.

## 2. ChatGPT와 Codex의 경계는 저장소 권한과 실행 위치에 있다

| 표면 | 2026-09-25에 확인한 동작과 범위 | Confidence / Volatility |
| --- | --- | --- |
| ChatGPT GitHub 연결 | 연결·허가된 저장소의 코드를 가져와 질문, 검색, 분석, 인용에 쓸 수 있다. 문서는 이 연결을 **읽기 전용**으로 설명하며, 코드 수정이나 GitHub push를 제공하는 Codex 작업과 구분한다. 연결·저장소 범위는 계정과 조직 승인에 좌우된다. ([ChatGPT GitHub 연결](https://help.openai.com/en/articles/11145903-connecting-github-to-chatgpt)) | HIGH / HIGH |
| ChatGPT Desktop | 현재 제품 문서는 하나의 Desktop app 안에서 ChatGPT 또는 Codex를 선택하는 흐름을 설명한다. 이 경험이 ChatGPT 모드에 Codex의 로컬 편집·명령 권한까지 있다는 뜻은 아니다. 표시 명칭, OS, 롤아웃은 재확인 대상이다. ([Codex App 문서](https://developers.openai.com/codex/app)) | HIGH(표면 선택)·MEDIUM(계정별 노출) / HIGH |
| Codex CLI·IDE·로컬 App 흐름 | 프로젝트 디렉터리와 로컬 개발 도구를 바탕으로 파일 탐색·수정 및 명령 실행을 수행할 수 있다. IDE는 열린 파일·선택 코드 등 편집기 Context를 제공한다. 실제 권한은 인증, 샌드박스, approval policy, OS 및 조직 설정에 따른다. ([CLI 문서](https://developers.openai.com/codex/cli), [IDE 문서](https://developers.openai.com/codex/ide), [샌드박스 문서](https://learn.chatgpt.com/docs/sandboxing)) | HIGH / HIGH |
| Codex Cloud | 지정한 branch 또는 commit을 container에 checkout하고 setup을 수행한 뒤 코드를 편집하고 명령·검증을 시도한다. agent 실행 단계는 기본 인터넷 차단이며 설정으로 허용 범위를 조정할 수 있다. 저장소 연결, dependency, 네트워크와 관리자 정책이 전제 조건이다. ([Cloud 환경](https://learn.chatgpt.com/docs/environments/cloud-environment), [Cloud 인터넷 접근](https://learn.chatgpt.com/docs/cloud/internet-access)) | HIGH / HIGH |
| Worktrees·Review | Desktop Codex는 Git worktree를 이용해 별도 checkout으로 작업할 수 있다. Codex의 /review와 GitHub PR review는 변경 사항을 살펴보는 기능이다. 이는 모든 Subagent가 자동으로 별도 worktree를 받는다는 뜻이 아니다. 코드 리뷰 안내도 저장소 규칙이 테스트, branch protection, required approvals를 대체하지 않는다고 명시한다. ([Worktrees](https://learn.chatgpt.com/docs/environments/git-worktrees), [Code Review](https://learn.chatgpt.com/docs/code-review), [GitHub PR Review](https://learn.chatgpt.com/docs/third-party/github)) | HIGH / MEDIUM–HIGH |

OpenAI 제품 설명은 Codex를 ChatGPT, IDE, terminal에서 이어 쓸 수 있는 코딩 에이전트로 제시하지만, **모든 표면이 동일한 모델·권한·기능을 제공한다고 보장하지 않는다**. Cloud가 test를 실행했다는 기록은 실행 사실이지 테스트의 충분성이나 변경의 정답성을 입증하지 않는다. 이 경계는 INV-VERIFY-001의 Generated ≠ Done과 일치한다. ([Codex 제품 페이지](https://openai.com/codex/), [Cloud 환경](https://learn.chatgpt.com/docs/environments/cloud-environment), [GitHub PR Review](https://learn.chatgpt.com/docs/third-party/github))

ChatGPT Work의 Code Review는 코드를 업로드하거나 설치된 source plugin으로 접근하게 한 뒤 PR, branch, commit, files와 검토 기준을 요청에 지정하는 형태로 설명된다. Codex의 /review는 Git repository 변경을 대상으로 하는 다른 작업 경로다. 두 가지를 “GitHub 연결”이라는 하나의 권한으로 설명하지 않는다. 어느 Workspace에서 Work·source plugin·Codex Review가 제공되는지는 확인하지 않았다. ([Codex Code Review](https://developers.openai.com/codex/code-review), [GitHub PR Review](https://learn.chatgpt.com/docs/third-party/github))

ChatGPT를 작은 코드 질문과 설명에 쓰고 실제 저장소 탐색·수정·실행이 필요할 때 Codex를 쓰는 흐름은 이 제품 경계에 맞는 **교육용 제안**이다. OpenAI가 규정한 필수 순서는 아니다. 회사 Workspace에서 GitHub 연결, Cloud, Work, Desktop의 기능을 사용할 수 있는지와 어떤 정책이 적용되는지는 확인하지 않았다.

## 3. AGENTS.md, Skills, Subagents는 공식 기능과 설계 선택을 나눠 가르친다

**AGENTS.md는 공식 Codex instruction mechanism**이다. 전역 범위는 기본적으로 Codex home인 ~/.codex를 사용하며 CODEX_HOME으로 경로를 바꿀 수 있다. 그곳에서는 AGENTS.override.md가 있으면 이를, 아니면 AGENTS.md를 읽고 첫 번째 non-empty 파일을 사용한다. 프로젝트에서는 project root(보통 Git root)에서 현재 작업 디렉터리까지 내려가며 각 디렉터리에서 AGENTS.override.md, AGENTS.md, 설정된 fallback 이름 순으로 확인하고 디렉터리마다 최대 하나를 포함한다. 발견한 지침은 root-to-leaf 순서로 합쳐지고 더 구체적인 뒤쪽 지침이 앞쪽 지침을 덮을 수 있다고 문서가 설명한다. 기본 합산 용량 한도는 32 KiB이며 fallback 이름과 한도는 설정 가능하다. 이는 문서 탐색·연결 순서에 관한 설명이지 모든 상충 지시의 완전한 authority hierarchy나 결정론적인 key-value 병합을 보장하는 설명은 아니다. 공식 문서는 시스템·개발자 지시 및 현재 사용자 Prompt와의 전체 우선순위도 완전히 규정하지 않는다. ([Codex AGENTS.md 문서](https://learn.chatgpt.com/docs/agent-configuration/agents-md))

OpenAI는 AGENTS.md를 간결하고 최신 상태로 두고, 작업에 따라 필요한 지침을 조건부로 가리키라고 권한다. AGENTS.md를 짧은 지도처럼 사용해 세부 문서로 안내하는 **“Context Router”는 이 교육의 TEACHING MODEL / PROJECT CONVENTION**이다. 공식 Codex feature name이 아니다. OpenAI의 2026-02-11 Harness Engineering 사례는 한 팀이 큰 AGENTS.md의 과밀·stale 문제에 대응해 짧은 entry point와 구조화한 문서를 쓴 사례를 보고하지만, 모든 조직에서 효과를 보장하는 통제 실험은 아니다. ([Codex AGENTS.md 문서](https://learn.chatgpt.com/docs/agent-configuration/agents-md), [OpenAI Harness Engineering 사례](https://openai.com/index/harness-engineering/), [GPT-6 Astra 지침 설계 글, 2026-09-11](https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra))

공식 예시는 repository-wide 규범을 root에, 세부 지침을 해당 디렉터리에 가까이 두는 구성을 뒷받침하며, 코드 formatting/lint 같은 기계 검사는 CI에 두라고 권한다. 다만 계층적 concatenation은 모델이 모든 상충 지시를 특정 방식으로 처리한다는 보장은 아니다. ([Codex AGENTS.md 문서](https://learn.chatgpt.com/docs/agent-configuration/agents-md))

**Skills는 공식 재사용 Workflow 형식**이다. Codex Skill은 SKILL.md와 name, description을 가진 디렉터리이며 선택적인 scripts, references, assets, UI metadata 등을 둘 수 있다. Codex의 repository Skill 탐색 위치는 현재 작업 디렉터리에서 repository root까지의 .agents/skills이고, user-level은 $HOME/.agents/skills, 관리자는 /etc/codex/skills, 그 외 내장 Skill도 있다. CLI/IDE에서는 $skill-name 또는 Skill 목록을 통해 명시 호출할 수 있고, 설명과 task가 맞으면 implicit selection도 가능하다. implicit invocation은 문서상 기본 허용이지만 Skill별로 끌 수 있고, 특정 문구에서 반드시 자동 선택된다는 보장은 없다. ChatGPT의 명시 선택은 @ 방식이다. ([Build Skills](https://learn.chatgpt.com/docs/build-skills))

Progressive disclosure는 공식 구현 근거가 있다. 초기 Skill 목록에는 이름·설명·경로가 들어가고, Skill이 선택되면 전체 SKILL.md를 읽는다. 문서는 목록에 2% context 또는 context 크기를 모를 때 8,000자 한도를 설명하며, Skill이 너무 많으면 설명이 줄거나 일부가 빠질 수 있다고 경고한다. 그러나 references나 assets가 전부 자동으로 함께 로드된다는 뜻은 아니다. “반복되어 마찰을 만든 Workflow를 Skill로 분리한다”는 유용한 **HEURISTIC / TEACHING MODEL**이며, 반복 횟수가 공식 진입 조건은 아니다. Master Plan §5.4의 예시 skills/ 트리는 Workflow 종류를 나눈 개념도처럼 읽을 수 있다. 이를 실행 가능한 Codex repository Skill의 discovery 경로로 제시할 경우에는 공식 .agents/skills/{skill-name}/SKILL.md와 구분해야 한다. ([Build Skills](https://learn.chatgpt.com/docs/build-skills), [Codex Plugin 구조](https://developers.openai.com/plugins/build/plugins))

**Subagents는 Codex의 공식 위임 기능**이다. 문서는 Codex Desktop, CLI, IDE에서 병렬 Subagent workflow를 설명하며, 독립적인 조사 task를 실행한 뒤 Main Agent가 결과를 모으는 흐름을 권한다. 직접 요청하거나 적용 가능한 AGENTS.md/Skill instruction에 따라 위임할 수 있고, local Codex에는 default, worker, explorer built-in agent가 문서화되어 있다. Custom agent는 personal 또는 repository .codex/agents/의 TOML 설정으로 역할별 developer instructions 등을 지정할 수 있다. ChatGPT Work의 제공 여부는 eligible account/model 조건에 좌우된다. ([Codex Subagents](https://learn.chatgpt.com/docs/agent-configuration/subagents))

Subagent는 각자의 agent thread에서 일하지만, **모든 Codex 표면에서 어떤 대화·Skill·project context가 상속되는지 동일하게 명세되어 있지 않다**. 공식 collaboration tool에는 넘길 대화 이력을 고르는 fork_turns가 있으나 그 설정을 모든 제품 표면의 기본값으로 일반화하면 안 된다. Agents API의 별도 context 설명도 API 범위다. 문서는 병렬 write 작업에서 충돌이 날 수 있다고 경고하며, worktree 문서는 독립 Codex chat의 checkout 격리를 다룬다. Subagent마다 별도 worktree를 자동 배정한다는 근거는 없다. 병렬 Agent는 모델·도구 호출 비용, coordination, 중복 조사와 결과 통합 부담을 늘릴 수 있다. ([Codex Subagents](https://learn.chatgpt.com/docs/agent-configuration/subagents), [Multi-agent Agents API](https://developers.openai.com/api/docs/guides/agents-api/multi-agent), [Worktrees](https://learn.chatgpt.com/docs/environments/git-worktrees), [공식 Codex collaboration specification](https://github.com/openai/codex/blob/main/codex-rs/core/src/tools/handlers/multi_agents_spec.rs#L3109-L3148))

교육에서 Architecture / Performance / Test Agent를 나누는 예시는 **task에 붙인 역할명으로 만든 재현 가능한 Demo 제안이지, Codex의 built-in agent 명칭이나 이 조사에서 실행·검증한 결과가 아니다**. 짧은 Skill을 명시 호출하는 방식과 읽기 전용·비중복 Subagent 조사 방식은 문서에 맞는 후보이다. 실제 제품의 호출 UI, 계정 권한, 파일 충돌 여부와 결과 품질은 선택한 Demo 환경에서 리허설해야 한다.

## 4. Memory는 개인화·로컬 기억·저장소 지식·현재 Context로 갈린다

현재 확인된 Memory를 하나의 feature로 뭉뚱그리면 범위를 오해한다.

| 계층 | 지속 범위와 제어 | 교육상 구분 |
| --- | --- | --- |
| ChatGPT User Memory | 계정·Workspace 조건에 따라 저장된 기억과 chat history 참조를 사용한다. ChatGPT는 과거 대화의 모든 세부를 기억하지 않으며 설정에서 검토·삭제할 수 있다. | 사용자 개인화 |
| Codex local Memories | 2026-09-25 공식 문서 기준 기본은 off. 활성화 시 일부 eligible 이전 대화에서 Memory 파일을 비동기로 만들고 재사용할 수 있다. 활성·짧은 session은 건너뛸 수 있고, 생성은 즉시 일어나지 않거나 rate limit 조건으로 생략될 수 있다. 앱/TUI의 /memories는 현재 chat의 이용·기여 여부를 제어한다. 저장소는 보통 Codex home 아래 local이며, Codex web과 ChatGPT Work는 같은 local store를 쓴다고 문서화되어 있지 않다. | 선택적 제품 기반 recall aid |
| Repository persistent context | AGENTS.md와 checked-in 문서는 저장소에 버전 관리되고 팀이 검토할 수 있는 지식이다. Codex가 모든 Markdown을 자동으로 읽는 것은 아니므로 지침과 task가 자료를 발견하도록 해야 한다. | 필요한 규칙의 예측 가능한 팀 Source of Truth |
| Active runtime context | 현재 task/thread의 대화, prompt, 읽은 파일, 도구 출력이 해당 실행에서 사용된다. 새 task/thread로 자동 이전되는 영구 프로젝트 지식과 다르다. | “지금 Agent가 필요로 하는 것” |
| Engineered agent Memory | 별도 시스템이 과거 실행에서 재사용할 정보를 추출·저장·검색·검토하는 설계다. OpenAI Agents SDK Sandbox는 저장소 파일, 요약, progressive retrieval 예를 제공하지만 Codex App의 local Memories와는 별도 제품 범위다. | 명시적으로 설계하는 Engineering Pattern |

([ChatGPT Memory](https://help.openai.com/en/articles/8590148-memory-in-chatgpt), [Codex Memories](https://developers.openai.com/codex/customization/memories), [Codex AGENTS.md](https://developers.openai.com/codex/agent-configuration/agents-md), [Codex agent loop](https://openai.com/index/unrolling-the-codex-agent-loop/), [Agents SDK Sandbox Memory](https://developers.openai.com/api/docs/guides/agents/sandboxes))

이 기능 설명은 공식 제품 문서에 근거하므로 문서상 동작의 Confidence는 HIGH다. 다만 ChatGPT Memory controls와 Codex local Memories의 제공 여부·기본값·관리정책은 plan, region, platform, Workspace 및 Codex host 설정에 따라 변할 수 있어 Volatility는 HIGH다. Repository 문서의 버전관리 가능성은 안정적인 설계 특성이지만 어떤 문서가 실제 task에서 로드되는지는 지침과 작업 흐름에 달려 있다. 이 조사에서는 수강생 계정이나 관리자 설정을 확인하지 않았다.

따라서 “Codex가 과거 작업을 기억하지 않는다”도, “모든 Task의 교훈이 자동 이월된다”도 정확하지 않다. **Codex local Memories가 켜져 있고, 대화가 생성 대상이며, chat의 사용·기여가 허용된 경우에만 일부 정보가 선택적으로 넘어갈 수 있다.** 반복해서 지켜야 할 팀 규칙은 OpenAI 문서가 권하는 대로 AGENTS.md 또는 checked-in 문서에 두고, 그것을 제품 Memory와 같은 것으로 부르지 않는다. stale 정보, 신뢰도, 제거·갱신, 회수 오류의 실측 품질은 조사되지 않았다. 제품 Memory 설정과 회사 계정의 허용 여부도 확인하지 않았다. ([Codex Memories](https://developers.openai.com/codex/customization/memories), [Codex AGENTS.md](https://developers.openai.com/codex/agent-configuration/agents-md))

Lost in the Middle은 이 Context 문제와 관련된 **학술 결과**지만, 주장 범위를 제한해야 한다. Liu 등의 2024 TACL 논문은 2023년 사용 가능 모델을 다중 문서 QA와 합성 key-value 검색에서 평가했고, 답이 포함된 문서가 시작·끝보다 중간에 있을 때 성능이 낮아지는 U자형 경향을 여러 설정에서 관찰했다. 다중 문서 QA는 10·20·30 문서 조건을 포함했고, GPT-3.5-Turbo의 중간 위치 결과가 closed-book 56.1% baseline 아래인 설정도 있었다. 이 결과는 현재 GPT-6/Codex, 모든 긴 Prompt 또는 repository coding을 평가한 결과가 아니다. ([Liu et al., TACL 2024](https://aclanthology.org/2024.tacl-1.9/))

2025년 NoLiMa 연구는 문자 그대로 일치하는 키워드가 적은 검색 평가를 사용했다. 128K 이상 context를 표방한 12개 모델 중 10개가 32K에서 강한 짧은 context baseline의 절반 미만으로 떨어졌고, GPT-4o 점수는 해당 benchmark에서 99.3%에서 69.7%로 낮아졌다. 이 역시 그 benchmark의 점수이지 코딩 정확도나 현재 Codex 사용자의 성공률은 아니다. 서로 다른 과제가 “long context”라는 한 말로 합쳐질 수 있다는 비판도 있다. 따라서 안전한 교육 주장은 **context window의 최대 크기가 관련 정보를 모든 과제에서 찾아 쓰는 능력을 보증하지 않는다**는 정도다. ([NoLiMa, ICML 2025](https://arxiv.org/abs/2502.05167), [Goldman et al., EMNLP 2024](https://aclanthology.org/2024.emnlp-main.924/))

재현 Demo를 원한다면 같은 모델·Prompt·답을 유지하고 관련 사실의 위치만 바꾸며, 사실이 없는 대조 조건을 둔 소규모 검색 실험을 설계할 수 있다. 정확한 모델, 제품 표면, context 길이, 반복 횟수와 결과를 기록해야 한다. 이는 **미실행 제안**이며, 이 보고서는 현재 Codex가 동일한 성능 곡선을 보였다고 주장하지 않는다. Progressive Disclosure도 정보를 나누기 위한 나누기가 아니라, task에 필요한 정보를 해당 시점에 찾도록 하는 **교육·Engineering 패턴**이다. ([Liu et al., TACL 2024](https://aclanthology.org/2024.tacl-1.9/), [Goldman et al., EMNLP 2024](https://aclanthology.org/2024.emnlp-main.924/), [OpenAI Harness Engineering](https://openai.com/index/harness-engineering/))

## 5. 용어·Open Question·기획 정합성을 근거 경계에 맞춘다

| 용어 | OFFICIAL | ACADEMIC | INDUSTRY | TRAINING에서의 경계 |
| --- | --- | --- | --- | --- |
| Agent | OpenAI API 문서는 지시를 수행하고 도구로 Context·행동을 다루는 LLM 시스템으로 설명한다. ([OpenAI Agents](https://developers.openai.com/api/docs/guides/agents)) | 보편 표준 정의는 이 범위에서 확인하지 않음 — TODO | Anthropic은 도구를 자율적으로 쓰는 LLM loop라는 실무 정의를 제시한다. ([Anthropic](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)) | 제품 문서와 구분해 Master Plan의 Course wording을 사용; 최종 Terminology registry에서 원문 대조 — TODO |
| Context Engineering | OpenAI SDK Cookbook에 session history/context 관리 제목과 기법이 있으나 제품 기능의 고정 정의는 아니다. ([OpenAI Cookbook](https://developers.openai.com/cookbook/examples/agents_sdk/session_memory)) | 공통 공식 정의 또는 합의를 이번 범위에서 확정하지 못함 — TODO | Anthropic의 token curation 정의는 한 조직의 practice 설명이지 consensus가 아니다. ([Anthropic](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)) | 무엇을, 언제, 어디서 Agent에 제공할지; 양보다 관련성과 시점. (INV-MATURITY-002) |
| Progressive Disclosure | OpenAI 사례에서 짧은 지도·요약부터 제공하고 필요 시 세부를 따라가는 pattern이 보인다. 제품 보장은 아님. ([Harness Engineering](https://openai.com/index/harness-engineering/), [SDK Sandbox](https://developers.openai.com/api/docs/guides/agents/sandboxes)) | 비교 효과·보편 정의 확인 안 됨 — TODO | OpenAI 사례로 본 실무 사용례 | 적합한 정보를 적합한 task·시점에 전달; 단순 파일 분할이 목적 아님. (INV-MATURITY-004) |
| Harness Engineering | OpenAI의 Engineering 사례가 이 용어를 사용하지만 제품 기능 glossary의 규범적 정의는 아니다. ([OpenAI Harness Engineering](https://openai.com/index/harness-engineering/)) | 보편 정의 확인 안 됨 — TODO | OpenAI 팀의 환경·문서·도구·검증 설계 사례 | Context에서 확장해 안정적 작업에 필요한 환경과 Process를 설계하는 course Operational Definition. (INV-MATURITY-005) |
| Loop Engineering | Codex agent loop는 제품 실행 반복을 설명하지만 “Loop Engineering”이라는 보편 제품 용어를 정의하지 않는다. ([Codex agent loop](https://openai.com/index/unrolling-the-codex-agent-loop/)) | 보편 정의 확인 안 됨 — TODO | OpenAI SDK의 Agent Improvement Loop 등 구체 사례가 있으나 표준 합의 아님. ([Agent Improvement Loop](https://developers.openai.com/cookbook/examples/agents_sdk/agent_improvement_loop)) | 관찰된 결과·반복 마찰에서 원인을 찾아 개발 시스템을 개선하고 후속 결과를 평가. 자동 반복과 구분. (INV-LOOP-001) |
| Memory | ChatGPT Memory, Codex local Memories, SDK/session Memory는 각각 다른 문서·scope다. ([ChatGPT Memory](https://help.openai.com/en/articles/8590148-memory-in-chatgpt), [Codex Memories](https://developers.openai.com/codex/customization/memories)) | 공통 정의 확인 안 됨 — TODO | 저장·검색·유지 방식이 다른 구현 사례 | Context “지금 필요한 것”과 Memory “시스템이 기억할 것”을 구분하고 신선도·신뢰성 고려. (INV-MATURITY-008) |
| Verification | OpenAI Goals 문서는 성공 여부를 검사하는 evidence surface를 설명한다. ([Codex Goals](https://developers.openai.com/cookbook/examples/codex/using_goals_in_codex)) | AI coding-agent verification의 보편 학술 정의는 미확인 — TODO | tests, logs, metrics, review 등 여러 evidence 사용례 | Generated ≠ Done; 적용되는 Build·Test·필요한 Benchmark·Review를 확인. (INV-VERIFY-001) |
| AI-Native Development | OpenAI business guide는 AI-native Engineering Team을 조직 workflow의 관점으로 다룬다. ([OpenAI guide](https://cdn.openai.com/business-guides-and-resources/building-an-ai-native-engineering-team.pdf)) | 2026 SE 3.0 논문은 vision/roadmap을 제안하지만 표준 합의는 아님. ([ACM TOSEM](https://doi.org/10.1145/3807901)) | OpenAI 사례는 Lifecycle 통합과 인간의 책임을 강조한다. ([OpenAI guide](https://cdn.openai.com/business-guides-and-resources/building-an-ai-native-engineering-team.pdf)) | MASTER_PLAN §§36–37의 결말과 course Story를 기준으로 함; 보편 인증·단일 아키텍처로 말하지 않음. |
| Lost in the Middle | OpenAI 제품 용어·기능 아님 | 특정 task·model 설정에서 위치 영향 보고. 역사적 finding은 유지하되 현 제품 일반화는 TODO. ([Liu et al.](https://aclanthology.org/2024.tacl-1.9/)) | 통칭이 서로 다른 long-context 과제를 뭉뚱그릴 수 있음. ([Goldman et al.](https://aclanthology.org/2024.emnlp-main.924/)) | 연구가 평가한 범위와 별도 현재 제품 실험을 분리. (INV-RESEARCH-002) |

이번 근거는 기존 MASTER_PLAN 및 INVARIANTS의 상위 Story와 충돌하지 않는다. 특히 “Context Router”는 가르칠 Engineering Pattern으로 한정하면 공식 AGENTS.md 기능과 양립하고, Harness·Loop의 교육 정의는 공식 제품 설명과 분리하면 유지 가능하다. 다만 실제 구현을 다룰 때 혼동하지 않도록 아래 해석 경계를 기록한다.

**FACT:** Codex 문서는 repository Skills discovery를 .agents/skills로 설명한다. MASTER_PLAN §5.4의 예시 skills/ 트리는 Workflow 종류를 보여주는 개념도처럼 읽을 수 있지만, 그 자체가 Codex의 local Skill discovery path라는 근거는 아니다.  
**CONFLICT:** 현재 Source of Truth와의 명시적 충돌은 아니다. 예시를 runnable Codex Skill 경로로 가르치는 경우에만 제품 사실과 충돌한다.  
**IMPACT:** OQ-008의 향후 Skill Demo와 해당 Slide/Story 설명.  
**OPTIONS:** skills/ 예시는 개념도라는 점을 설명하거나, 실제 Codex Demo는 공식 repository 경로인 .agents/skills/{skill-name}/SKILL.md에서 구현한다.  
**PROPOSAL:** MASTER_PLAN을 지금 수정하지 않는다. 향후 Demo에서 실제 Skill 파일을 만들 때 .agents/skills/를 사용하고, §5.4의 트리는 Workflow 분류 예시임을 혼동 없이 설명한다.

두 번째 해석 경계는 Subagent다. 공식 문서는 병렬 위임과 별도 agent thread를 뒷받침하지만, 제품 전반의 context inheritance와 파일시스템 격리를 보장하지 않는다. MASTER_PLAN §5.5의 역할별 Context는 교육 설계 목표로 유지할 수 있다. 미래 자료에서 이것을 자동 Context isolation 또는 Subagent별 worktree라는 제품 보장으로 확장하면 근거와 충돌한다. **제안:** task별 필요한 자료와 결과 handoff를 Demo 설계로 명시하고, thread·filesystem isolation은 실제 선택 표면에서 확인된 범위만 말한다. 이 보고서에서 기획 원문이나 invariant를 변경하지 않았다.

| Open Question | Research가 확정한 점 | 남은 확인과 상태 |
| --- | --- | --- |
| OQ-003 — Live Demo 환경과 fallback | Local CLI/IDE/App 및 Cloud의 차이와 문서상 전제 확인 | 대상 계정·OS·제품 표면·네트워크·권한과 fallback은 미확정. Demo 리허설 전까지 Open |
| OQ-005 — 현재 제품 사실 | ChatGPT GitHub read-only, Codex 실행 표면, AGENTS.md, Skills, Subagents, Memory의 일반 공개 문서 확인 | 플랜·Workspace 정책·개별 기능 entitlement와 UI 변경은 미확정; Demo 직전 재확인 필요 |
| OQ-006 — Context 연구 근거 | Liu et al. 및 NoLiMa 등 원 연구의 평가 범위와 제한을 확인 | 현재 GPT-6/Codex의 repository coding positional behavior 실험은 미실행; 역사적 주장은 bounded evidence로 활용 가능, 현재 제품 주장 Open |
| OQ-008 — Skills/Subagents/Memory/Harness Demo | 공식 기능과 training pattern 경계를 조사하고 재현 후보를 정리 | OQ-001 Demo 저장소, OQ-007 검증 예, 실제 반복 friction 및 environment에 따라 구조를 선택. Demo 결정은 Open |
| OQ-011 — Harness/Loop Operational Definition | 공식·학술·산업 사용과 course definition을 분리하는 근거 확보. INV-MATURITY-005, INV-LOOP-001을 보존할 수 있음 | 최종 Storyline·교육 문구를 기획 원문에 맞춰 확정해야 함. 용어 consensus가 아님을 표시하고, 결정이 끝날 때까지 OQ는 Open |
| OQ-014 — 회사 보안 정책 | 회사 정책에 대한 공개 출처나 내부 증거 없음 | 내부 코드 입력 허용, Cloud Agent, 고객 데이터, credentials, GitLab 접근, Business Workspace 관리정책 모두 미확정. 회사별 보안 주장을 쓰거나 민감 데이터 Demo를 진행하지 않음 |

이번 조사에서 새로운 Active Assumption은 두지 않았다. **후속 제작에서 이제 안전하게 재사용할 수 있는 것**은 표면별 ChatGPT/Codex 경계, AGENTS.md 지침 탐색의 문서화된 범위, Skills의 discovery·명시/암묵 호출 차이, Subagent 위임의 비용과 미확정 격리 경계, 제품 Memory의 분리된 범위, 그리고 제한을 함께 적은 Lost in the Middle 설명이다. Demo 후보는 전부 아직 제안일 뿐이며 조사 중 실제 실행한 Demo는 없다.

**추가 확인 전 확정해서는 안 되는 것**은 대상 계정에서의 기능 노출과 관리자 정책, 실제 Demo 환경·repository, Codex Memory가 회사 계정에서 켜질 수 있는지, Subagent의 해당 surface에서의 Context·filesystem 격리, 현재 제품의 코딩 과제에서 Lost in the Middle이 재현되는지, 그리고 OQ-014 회사 보안 정책이다. 이 보고서는 Evidence Base이지 Curriculum·Storyline·Demo 선택 또는 PPT 산출물이 아니다.

## 결론

제품 변화에 대비하는 가장 안정적인 교육 자산은 기능 목록 자체가 아니라 **제품 동작, 근거가 있는 Engineering 사례, 연구 결과, 교육의 Operational Definition을 서로 다른 출처 층으로 가르치는 것**이다. 현재 공개 근거는 MASTER_PLAN의 문제 중심 성숙도 Story를 유지하기에 충분하지만, 각 구현 Demo는 선택된 계정·저장소·실행 환경에서 다시 확인해야 한다. 특히 Memory는 이미 Codex local 기능이 존재하지만 항상 작동하는 Project Source of Truth가 아니며, Subagent는 병렬 위임을 제공해도 별도 작업공간을 뜻하지 않는다.
