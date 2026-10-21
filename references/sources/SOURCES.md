# Sources

> Source ID는 이 `references/` tree 전체에서 안정적으로 사용한다. Checked 값은 기존 STEP 03 notes/reports에서 확인일을 명시한 경우에만 `2026-09-25`로 기록했다. 공개 문서가 발행일을 노출하지 않으면 `Published: Not shown`으로 둔다. `Topics`는 관련 Research Topic을 나타낸다. P0 또는 High-risk Claim의 핵심 Source는 아래 Claim / Topic cross-reference에도 연결한다. 새 Source Record에는 가능한 경우 정확한 작성자/기관, 원본 URL, 공개·업데이트일, 확인일, Claim ID, Research Topic을 보존한다. 논문은 확인된 DOI, arXiv ID, Conference/Journal을 추가하고, 확인되지 않은 값은 추측하지 않는다.

## Internal Source of Truth

### SRC-0001

Title: ChatGPT & Codex 개발자 교육 기획 원본
Organization / Authors: Project
Source Type: OTHER
URL: ../../plan/MASTER_PLAN.md
Published: 2026-09-25
Checked: 2026-09-25
Tier: 1
Topics: Story, delivery, maturity model, unresolved questions
Key Evidence: 6시간 개발자 교육, 직접 실습 없음, Chatbot → Prompt → Context → Harness → Loop → AI-Native progression, Problem-driven evolution.
Limitations: 제품 사실 근거가 아니라 프로젝트 기획 기준.
Volatility: LOW
Notes: 후속 산출물의 최상위 Source of Truth.

### SRC-0002

Title: Project Invariants
Organization / Authors: Project
Source Type: OTHER
URL: ../../plan/INVARIANTS.md
Published: 2026-09-25
Checked: 2026-09-25
Tier: 1
Topics: Governance, story protection, research use
Key Evidence: Source of Truth 우선순위, research fact boundary, demo/verification/invariant rules.
Limitations: 제품 기능을 입증하지 않음.
Volatility: LOW
Notes: 변경 필요 시 proposal과 사용자 승인 필요.

### SRC-0003

Title: Decision Log
Organization / Authors: Project
Source Type: OTHER
URL: ../../plan/DECISIONS.md
Published: 2026-09-25
Checked: 2026-09-25
Tier: 1
Topics: Decisions, open questions, demo planning
Key Evidence: DEC-0001~0006, OQ-001/OQ-003/OQ-005/OQ-007/OQ-008/OQ-009/OQ-014 unresolved mapping.
Limitations: 앞으로 발생할 결정을 기록하는 문서이며 기존 MASTER_PLAN을 대체하지 않음.
Volatility: MEDIUM
Notes: Decision이 추가될 수 있으나 기존 ID는 재사용하지 않음.

## OpenAI product and policy sources

### SRC-0101

Title: Codex
Organization / Authors: OpenAI
Source Type: OFFICIAL_ANNOUNCEMENT
URL: https://openai.com/codex/
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: ChatGPT/Codex product identity, surfaces, worktrees, code review
Key Evidence: Codex를 ChatGPT, IDE, terminal에서 사용할 수 있는 coding agent product로 설명.
Limitations: 제품 소개 성격이며 모든 surface의 기능 동일성을 보장하지 않음.
Volatility: HIGH
Notes: 기능 설명은 세부 공식 docs와 함께 사용.

### SRC-0102

Title: ChatGPT desktop app / Codex app documentation
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://developers.openai.com/codex/app
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: Interfaces, desktop app, local project context
Key Evidence: ChatGPT desktop app에서 ChatGPT와 Codex 작업 surface가 구분됨.
Limitations: UI와 OS 지원은 자주 바뀔 수 있음.
Volatility: HIGH
Notes: 실제 교육 계정에서 화면 명칭 재확인 필요.

### SRC-0103

Title: Codex CLI
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://developers.openai.com/codex/cli
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: CLI, local execution, command execution, resume, automation
Key Evidence: 프로젝트 디렉터리에서 파일 조사·편집·local development tools 실행, `codex exec` 흐름.
Limitations: 설치·권한·OS·조직 정책에 의존.
Volatility: HIGH
Notes: CLI version과 command behavior는 교육 전 재확인 필요.

### SRC-0104

Title: Codex IDE extension
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://developers.openai.com/codex/ide
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: IDE, editor context, diff review
Key Evidence: 열린 파일, 선택 영역, editor context, diff 확인, longer task handoff.
Limitations: VS Code 계열, Cursor, JetBrains, Xcode 경험을 동일하게 일반화할 수 없음.
Volatility: HIGH
Notes: IDE별 plugin 및 vendor 기능은 별도 확인.

### SRC-0105

Title: Codex Cloud environments
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://learn.chatgpt.com/docs/environments/cloud-environment
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: Cloud execution, setup, secrets, checkout, demo reproducibility
Key Evidence: branch/commit SHA checkout, setup/maintenance scripts, terminal command loop, diff, secrets lifecycle.
Limitations: 회사 네트워크, private dependency, Git provider, admin policy에 따라 달라질 수 있음.
Volatility: HIGH
Notes: Cloud 결과는 해당 container/setup 조건의 증거로만 사용.

### SRC-0106

Title: Codex environments
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://learn.chatgpt.com/docs/environments/modes
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: Local, Worktree, Cloud execution modes
Key Evidence: Local은 current project directory, Worktree는 Git worktree, Cloud는 configured cloud environment에서 실행; Local/Worktree는 user computer에서 실행.
Limitations: 모델 추론이 local-only라는 뜻이 아님.
Volatility: MEDIUM
Notes: 실행 위치와 inference 위치를 분리해 설명해야 함.

### SRC-0107

Title: Agent approvals and security
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://learn.chatgpt.com/docs/agent-approvals-security
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: Permissions, approval, sandbox
Key Evidence: sandbox와 approval policy를 구분하고, 경계 밖 작업에 사용자 승인을 요구할 수 있음.
Limitations: 구체적 위험은 OS, path, network, workspace policy에 따라 달라짐.
Volatility: MEDIUM
Notes: 교육에서는 권한을 개발자 책임과 연결.

### SRC-0108

Title: Sandboxing
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://learn.chatgpt.com/docs/sandboxing
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: Sandbox, local safety
Key Evidence: 파일 시스템·네트워크 접근 제한 개념.
Limitations: 실제 sandbox profile은 host와 설정에 따라 달라질 수 있음.
Volatility: MEDIUM
Notes: permission claim과 함께 사용.

### SRC-0109

Title: Permissions
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://learn.chatgpt.com/docs/permissions
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: Permission modes
Key Evidence: read-only, workspace-write, danger-full-access 같은 local mode와 승인 흐름.
Limitations: `danger-full-access` 같은 고위험 설정은 교육 기본값으로 제시하지 않음.
Volatility: MEDIUM
Notes: demo candidate 여부는 회사 정책 확인 필요.

### SRC-0110

Title: Custom instructions with AGENTS.md
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://learn.chatgpt.com/docs/agent-configuration/agents-md
Published: Not shown
Checked: 2026-09-28
Tier: 1
Topics: AGENTS.md, nested instructions, context engineering
Key Evidence: Codex builds an instruction chain at run start. It checks the
global Codex home, then the project root through the current working
directory; it selects at most one instruction file per directory and
combines the selected guidance from broader to narrower scope. The documented
default combined-size limit is 32 KiB.
Limitations: This documents the instruction mechanism, not target-account
availability or a guaranteed behavior for this training's Desktop setup. The
size limit is not a performance or quality threshold.
Volatility: MEDIUM
Notes: An instruction surface; it does not replace the project's source of
truth. Rechecked for STEP 07 STATE-01 planning.

### SRC-0111

Title: Build Skills
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://learn.chatgpt.com/docs/build-skills
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: Skills, reusable workflows
Key Evidence: Skills는 instruction, resources, scripts를 묶는 reusable workflow 단위이며, OpenAI docs describe progressive disclosure where the model first sees a skill name/description and loads the full skill only when selected.
Limitations: 모든 반복 작업에 Skill이 필요하다는 근거는 아님.
Volatility: HIGH
Notes: 교육 Demo 선택은 OQ-008에서 미확정.

### SRC-0112

Title: Subagents
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://learn.chatgpt.com/docs/agent-configuration/subagents
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: Subagents, parallel agents, context isolation
Key Evidence: separate agent thread, independent tasks, context noise reduction, token/coordination cost and write-conflict cautions.
Limitations: 병렬화가 항상 빠르거나 좋다는 근거는 아님.
Volatility: HIGH
Notes: agent delegation은 risk와 task independence에 맞춰야 함.

### SRC-0113

Title: Codex Memories
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://learn.chatgpt.com/docs/customization/memories
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: Memory, personalization, context boundary
Key Evidence: Codex Memory is persisted preference/context separate from current prompt context.
Limitations: 대상 training workspace에서 availability/admin behavior 미확인.
Volatility: HIGH
Notes: Memory는 project Source of Truth와 분리해 설명.

### SRC-0114

Title: Codex Prompting
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://developers.openai.com/codex/prompting
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: Prompting, investigation-first workflow
Key Evidence: effective prompting patterns for Codex tasks.
Limitations: 특정 prompt pattern이 모든 repository task에 통한다는 근거는 아님.
Volatility: MEDIUM
Notes: Prompt Engineering chapter의 제품 근거로 사용.

### SRC-0115

Title: Web search in ChatGPT and Codex
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://learn.chatgpt.com/docs/web-search
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: Web search, tools, external context
Key Evidence: web search modes and distinction from shell network access.
Limitations: Web results can be volatile and untrusted.
Volatility: HIGH
Notes: official docs first policy와 함께 사용.

### SRC-0116

Title: MCP in Codex and ChatGPT
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://learn.chatgpt.com/docs/extend/mcp
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: MCP, external tools, apps/connectors
Key Evidence: MCP connects external context/actions to ChatGPT/Codex surfaces.
Limitations: provider permissions and workspace controls still apply.
Volatility: HIGH
Notes: 회사 허용 정책을 결정하지 않음.

### SRC-0117

Title: Plugins
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://learn.chatgpt.com/docs/plugins
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: Plugins, Skills, MCP, hooks packaging
Key Evidence: Plugins can package Skills, MCP servers/connectors, UI, hooks.
Limitations: plugin installation does not bypass provider/workspace permissions.
Volatility: HIGH
Notes: Demo에서 기능 투어로 흐르지 않도록 주의.

### SRC-0118

Title: Hooks
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://learn.chatgpt.com/docs/hooks
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: Hooks, automation, loop materials
Key Evidence: lifecycle points such as PreToolUse/PostToolUse/Stop/SessionEnd can run scripts/tools.
Limitations: hook 자체가 feedback loop를 보장하지 않음.
Volatility: HIGH
Notes: Loop Engineering과 단순 automation을 구분.

### SRC-0119

Title: Non-interactive mode
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://learn.chatgpt.com/docs/non-interactive-mode
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: `codex exec`, automation, CI
Key Evidence: repeatable non-interactive execution path.
Limitations: 자동 실행이 자동 검증/학습을 의미하지 않음.
Volatility: HIGH
Notes: CI/automation candidate로만 사용.

### SRC-0120

Title: Codex GitHub Action
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://learn.chatgpt.com/docs/github-action
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: Automation, GitHub-triggered Codex
Key Evidence: GitHub workflow integration for triggered Codex work.
Limitations: repository permission, secrets, CI policy 미확인.
Volatility: HIGH
Notes: Demo scope에 포함할지 미정.

### SRC-0121

Title: GitHub code review
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://learn.chatgpt.com/docs/third-party/github
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: Code review, PR review, GitHub integration
Key Evidence: GitHub PR review integration and conditions.
Limitations: GitHub organization settings and app permissions apply.
Volatility: HIGH
Notes: code review demo는 candidate.

### SRC-0122

Title: Code review
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://learn.chatgpt.com/docs/code-review
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: `/review`, diff review
Key Evidence: Codex review workflow reviews a selected Git diff and does not itself apply changes.
Limitations: review output correctness is not guaranteed.
Volatility: MEDIUM
Notes: verification과 human review를 분리.

### SRC-0123

Title: Git worktrees
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://learn.chatgpt.com/docs/environments/git-worktrees
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: Worktree, parallel work, isolation
Key Evidence: Codex can use Git worktree mode for isolated working copies.
Limitations: same-branch limitations and ignored file movement caveats apply.
Volatility: MEDIUM
Notes: good harness가 항상 worktree를 뜻하지 않음.

### SRC-0124

Title: Agent internet access for Codex Cloud
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://learn.chatgpt.com/docs/cloud/internet-access
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: Cloud network, external web, demo reproducibility
Key Evidence: Cloud agent phase network is controlled separately from setup network.
Limitations: domain/method settings and organization policy may vary.
Volatility: HIGH
Notes: web search, shell network, cloud egress를 구분.

### SRC-0125

Title: How your data is used to improve model performance
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: Data use, training opt-out, Business/Enterprise distinction
Key Evidence: business users' inputs/outputs are not used for training by default; personal ChatGPT/Codex can be used unless opted out.
Limitations: Company allowance and workspace settings remain separate.
Volatility: HIGH
Notes: Product policy does not authorize internal data use.

### SRC-0126

Title: Data residency and inference residency for ChatGPT
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://help.openai.com/en/articles/9903489-data-residency-and-inference-residency-for-chatgpt
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: Data residency, inference residency, Enterprise/Edu
Key Evidence: data residency = storage at rest for in-scope customer content; inference residency = eligible Enterprise/Edu GPU inference in supported region; Apps/MCP/Web Search and some processing may be outside region.
Limitations: Not every data type or feature is in scope; Codex Web unsupported while Codex app/CLI supported.
Volatility: HIGH
Notes: Regions/features must be rechecked before training.

### SRC-0127

Title: Where your ChatGPT Business content is stored
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://help.openai.com/en/articles/20001418-where-your-chatgpt-business-content-is-stored
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: Business residency, safety logs
Key Evidence: Business data residency rollout is gradual; non-US selection can still store safety/abuse data and limited-time prompt/response copy in the US.
Limitations: Business article does not describe Enterprise/Edu exceptions.
Volatility: HIGH
Notes: OQ-014 and target workspace still open.

### SRC-0128

Title: Chat and file retention in ChatGPT
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://help.openai.com/en/articles/8983778-chat-and-file-retention-in-chatgpt
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: Retention, deletion, Enterprise transient files, backups
Key Evidence: deleted saved chat and GPT/project/file data scheduled for permanent deletion within 30 days with security/legal exceptions; some Enterprise transient files can expire after 48 hours; inactive Library file backups may remain up to 30 additional days.
Limitations: Feature-specific ChatGPT chat/file retention; not a complete Codex artifact retention map.
Volatility: MEDIUM
Notes: Old opt-out slug redirects; use canonical URL.

### SRC-0129

Title: Data access for your managed ChatGPT account
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://help.openai.com/en/articles/20001067-data-access-for-your-managed-chatgpt-account
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: Managed accounts, admin access, export, audit, retention
Key Evidence: organization admins may access/export/audit/retain/delete managed account content and metadata where enabled and allowed.
Limitations: Actual admin settings unknown.
Volatility: MEDIUM
Notes: Useful for separating product feature from company policy.

### SRC-0130

Title: Roles and workspace permissions
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://learn.chatgpt.com/docs/enterprise/roles-and-workspace-permissions
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: RBAC, Codex cloud eligibility, local runtime policy
Key Evidence: ChatGPT roles, local client runtime policy, Codex cloud eligibility, API membership, connected service permissions are distinct.
Limitations: Feature availability can vary by plan/role/region.
Volatility: HIGH
Notes: Target workspace/account behavior remains a gap.

### SRC-0131

Title: Admin controls, security, and compliance for plugins and apps
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://help.openai.com/en/articles/11509118
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: Apps, plugins, MCP, admin controls, OAuth scopes
Key Evidence: plugin installation, app access, actions, provider approval, OAuth scopes, workspace restrictions are separate checks.
Limitations: Does not decide third-party provider policy or company allowance.
Volatility: HIGH
Notes: Product facts cannot close OQ-014.

### SRC-0132

Title: HIPAA configuration guide for Codex
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://learn.chatgpt.com/docs/hipaa-configuration
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: Codex data handling, Local/Cloud, training
Key Evidence: ChatGPT Enterprise and Codex data not used for training; Local Codex sends prompts/files for inference and stores inputs/outputs on workstation.
Limitations: HIPAA configuration scope; not a universal corporate approval.
Volatility: HIGH
Notes: Use only within scope.

### SRC-0133

Title: Connecting GitHub to ChatGPT
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://help.openai.com/en/articles/11145903-connecting-github-to-chatgpt
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: ChatGPT GitHub connector, read-only repository access
Key Evidence: ChatGPT GitHub connection can read/search allowed repositories and is distinct from Codex modification/push workflows.
Limitations: Surface availability depends on plan/admin/GitHub policy.
Volatility: HIGH
Notes: Helps separate ChatGPT context from Codex execution.

### SRC-0134

Title: ChatGPT Work and Codex
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: Work vs Codex, web/cloud surfaces
Key Evidence: ChatGPT Work and Codex are related but separate work surfaces.
Limitations: Product naming can change.
Volatility: HIGH
Notes: Use to avoid UI conflation.

### SRC-0135

Title: Local environments
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://learn.chatgpt.com/docs/environments/local-environment
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: Local environment config, desktop app
Key Evidence: local environment config for ChatGPT desktop Codex worktree setup/actions.
Limitations: Not the same as arbitrary shell environment or all CLI behavior.
Volatility: MEDIUM
Notes: Local execution doc pair with SRC-0106.

### SRC-0136

Title: Building an AI-Native Engineering Team
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://developers.openai.com/codex/guides/build-ai-native-engineering-team
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: AI-Native, role shift, responsibility
Key Evidence: Delegate / Review / Own framing; agent helps plan/implement/test/review while humans keep strategy and decisions.
Limitations: Product/organizational guide, not controlled productivity evidence.
Volatility: MEDIUM
Notes: Teaching model must not claim industry consensus.

### SRC-0137

Title: Harness engineering: leveraging Codex in an agent-first world
Organization / Authors: OpenAI / Ryan Lopopolo
Source Type: ENGINEERING_BLOG
URL: https://openai.com/index/harness-engineering/
Published: 2026-02-11
Checked: 2026-09-25
Tier: 2
Topics: Harness Engineering, stale rules, large AGENTS.md, decomposition
Key Evidence: real engineering case where environment, tools, stale rules, and harness changes affected Codex usefulness.
Limitations: Anecdotal engineering case, not controlled experiment.
Volatility: MEDIUM
Notes: Supports bounded analogy only.

### SRC-0138

Title: Unrolling the Codex agent loop
Organization / Authors: OpenAI
Source Type: ENGINEERING_BLOG
URL: https://openai.com/index/unrolling-the-codex-agent-loop
Published: Not shown
Checked: 2026-09-25
Tier: 2
Topics: Agent loop, tools, context, execution
Key Evidence: Codex agent loop framing of reasoning, tools, environment, feedback.
Limitations: Product/engineering explanation, not a benchmark.
Volatility: MEDIUM
Notes: Supports loop concept, not autonomous quality guarantee.

### SRC-0139

Title: Evaluation best practices
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://developers.openai.com/api/docs/guides/evaluation-best-practices
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: Evaluation, before/after comparison, success criteria
Key Evidence: define goals, datasets, metrics, and continuous evaluation before changing prompts/agents.
Limitations: General eval guidance; project-specific criteria still need task/repo.
Volatility: MEDIUM
Notes: Verification chapter source.

### SRC-0140

Title: Evaluate agent workflows
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://developers.openai.com/api/docs/guides/agent-evals
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: Agent evaluation, traces, graders
Key Evidence: evaluate agent workflows with tasks, traces, grading, iteration.
Limitations: API/product eval guidance, not proof that a specific workflow works.
Volatility: HIGH
Notes: Use for loop/evaluation structure.

### SRC-0141

Title: Observability and usage
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://developers.openai.com/api/docs/guides/agents-api/observability
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: Cost, tokens, tool calls, subagents
Key Evidence: agent tasks may involve many model calls, tool calls, retries, sandbox compute, and third-party charges.
Limitations: API cost model may not equal ChatGPT product pricing.
Volatility: HIGH
Notes: Supports cost/complexity tradeoff.

### SRC-0142

Title: API Pricing
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://developers.openai.com/api/docs/pricing
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: Pricing, cost, model-specific rates
Key Evidence: model pricing is model-specific and changes over time.
Limitations: Does not provide universal complexity thresholds.
Volatility: HIGH
Notes: Recheck before using numeric cost in slides.

### SRC-0143

Title: Separating signal from noise in coding evaluations
Organization / Authors: OpenAI
Source Type: OFFICIAL_ANNOUNCEMENT
URL: https://openai.com/index/separating-signal-from-noise-coding-evaluations
Published: 2026-07-08
Checked: 2026-09-25
Tier: 2
Topics: SWE-Bench Pro, eval audit, benchmark caveats
Key Evidence: OpenAI withdrew/revised recommendations around SWE-Bench Pro due to benchmark issues.
Limitations: Announcement/audit statement, not raw benchmark dataset.
Volatility: MEDIUM
Notes: Use for contradiction log and benchmark caution.

### SRC-0144

Title: Prompt engineering
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://developers.openai.com/api/docs/guides/prompt-engineering
Published: Not shown
Checked: 2026-09-25
Tier: 1
Topics: Prompt engineering, instructions
Key Evidence: Defines prompt engineering as writing effective instructions so models consistently generate outputs that meet requirements.
Limitations: API guide wording; do not equate it with this training's broader checklist of Goal/Context/Constraints/Process/Verification.
Volatility: MEDIUM
Notes: Distinguish from Codex-specific prompting guidance in SRC-0114.


## Academic, benchmark, and engineering evidence


### SRC-0201

Title: Lost in the Middle: How Language Models Use Long Contexts
Organization / Authors: Liu et al.
Source Type: PAPER
URL: https://aclanthology.org/2024.tacl-1.9/
Published: 2024
Venue / Archive: Transactions of the Association for Computational Linguistics (TACL), 12, 157–173.
Archive ID: arXiv:2307.03172
Checked: 2026-10-22
Tier: 2
Topics: Lost in the middle, long context, context placement
Key Evidence: moving relevant information between beginning, middle and end in multi-document QA and synthetic key-value retrieval showed lower middle-position accuracy in several studied models/settings.
Limitations: Older models/tasks; does not prove all current models ignore middle context.
Volatility: MEDIUM
Notes: Primary ACL record/PDF rechecked for DEC-0052. Position diagrams are qualitative task reconstructions, not measured current-Codex curves.

### SRC-0202

Title: NoLiMa: Long-Context Evaluation Beyond Literal Matching
Organization / Authors: Modarressi et al.
Source Type: PAPER
URL: https://arxiv.org/abs/2502.05167
Published: 2025
Venue / Archive: International Conference on Machine Learning (ICML 2025).
Archive ID: arXiv:2502.05167
Checked: 2026-09-25
Tier: 2
Topics: Long context, non-literal matching
Key Evidence: long-context evaluation is sensitive to retrieval and reasoning requirements beyond exact string matching.
Limitations: Benchmark-specific; not a product feature claim.
Volatility: MEDIUM
Notes: Use for long-context caution.

### SRC-0203

Title: Is It Really Long Context if All You Need Is Retrieval?
Organization / Authors: Goldman et al.
Source Type: PAPER
URL: https://aclanthology.org/2024.emnlp-main.924/
Published: 2024
Venue / Archive: EMNLP 2024.
Archive URL: https://aclanthology.org/2024.emnlp-main.924/
Checked: 2026-09-25
Tier: 2
Topics: Long context, benchmark design
Key Evidence: some long-context tasks are dominated by retrieval and may not test richer context use.
Limitations: Academic evaluation critique, not a workplace productivity study.
Volatility: MEDIUM
Notes: Supports not overclaiming context window size.

### SRC-0204

Title: RepoQA: Evaluating Long Context Code Understanding
Organization / Authors: Liu et al. (RepoQA authors)
Source Type: PAPER
URL: https://arxiv.org/abs/2406.06025
Published: 2024
Archive ID: arXiv:2406.06025
Venue: First Workshop on Long-Context Foundation Models @ ICML2024, per the official project citation; not the ICML main conference.
Checked: 2026-10-22
Tier: 2
Topics: Long-context code understanding, description-to-function retrieval
Key Evidence: Searching Needle Function supplies a natural-language function description and code context, asks for the matching function code and compares it with the reference using code similarity. The benchmark contains50 repositories,5 languages and500 tasks; the main experiment fixes code input at16K tokens under the CodeLlama tokenizer. Performance differs across models and languages.
Limitations: This is not repository editing, tool-search, test execution, a context-length threshold or present-day Codex evaluation. The input setting and scoring do not establish a Routing benefit or a universal lost-in-the-middle effect.
Volatility: MEDIUM
Notes: Primary task/setting https://arxiv.org/html/2406.06025v1 and official citation https://evalplus.github.io/repoqa.html rechecked for DEC-0052. Narrow the prior generic repository-QA description to the actual function-finding task. Omit inconsistent model-count summaries and do not infer current product performance.

### SRC-0205

Title: Effective context engineering for AI agents
Organization / Authors: Anthropic
Source Type: ENGINEERING_BLOG
URL: https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
Published: 2025-09-29
Checked: 2026-09-25
Tier: 2
Topics: Context engineering, agent context
Key Evidence: context quality, compression, tool outputs, and external sources affect agent behavior.
Limitations: External vendor engineering guidance; publication date and current availability should be rechecked before final slide use.
Volatility: HIGH
Notes: Existing notes cite it; freshness conflict should be verified before final slide use.

### SRC-0206

Title: SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering
Organization / Authors: Yang et al.
Source Type: PAPER
URL: https://papers.neurips.cc/paper_files/paper/2024/file/5a7c947568c1b1328ccc5230172e1e7c-Paper-Conference.pdf
Published: 2024
Venue / Archive: NeurIPS 2024.
Checked: 2026-09-25
Tier: 2
Topics: Harness, agent scaffold, coding benchmarks
Key Evidence: same model with different tool/interface scaffolds shows different SWE-bench results; ACI ablations affect outcomes.
Limitations: Specific benchmark, model, scaffold, and resource conditions.
Volatility: MEDIUM
Notes: Do not translate score into workplace productivity.

### SRC-0207

Title: SWE-bench
Organization / Authors: SWE-bench authors
Source Type: PAPER
URL: https://arxiv.org/abs/2310.06770
Published: 2023
Archive ID: arXiv:2310.06770
Checked: 2026-09-25
Tier: 2
Topics: Coding-agent benchmark, issue resolution
Key Evidence: benchmark uses GitHub issues and tests to assess software engineering agents.
Limitations: test-based scoring can miss semantic correctness and workplace context.
Volatility: MEDIUM
Notes: Pair with benchmark critiques.

### SRC-0208

Title: Introducing SWE-bench Verified
Organization / Authors: OpenAI
Source Type: OFFICIAL_ANNOUNCEMENT
URL: https://openai.com/index/introducing-swe-bench-verified/
Published: Not shown
Checked: 2026-09-25
Tier: 2
Topics: SWE-bench Verified, benchmark curation
Key Evidence: OpenAI describes human-verified subset methodology and scoring caveats.
Limitations: Announcement, not independent peer review.
Volatility: MEDIUM
Notes: Useful for benchmark methodology caution.

### SRC-0209

Title: SWE-Bench Pro leaderboard
Organization / Authors: Scale AI
Source Type: ENGINEERING_BLOG
URL: https://labs.scale.com/leaderboard/swe_bench_pro
Published: Not shown
Checked: 2026-09-25
Tier: 3
Topics: SWE-Bench Pro, leaderboard, benchmark conflict
Key Evidence: leaderboard and methodology claims for SWE-Bench Pro.
Limitations: Source disagreement and audit concerns; current status volatile.
Volatility: HIGH
Notes: Use only with contradiction log.

### SRC-0210

Title: SWE-Bench Pro Verified v2
Organization / Authors: SWE-Bench Pro authors
Source Type: PAPER
URL: https://arxiv.org/abs/2609.08149
Published: 2026-09-16
Archive ID: arXiv:2609.08149
Checked: 2026-09-25
Tier: 2
Topics: SWE-Bench Pro, benchmark methodology
Key Evidence: revised benchmark paper/version used in notes.
Limitations: New and potentially changing; compare with leaderboard/audit sources.
Volatility: HIGH
Notes: Do not rely on one leaderboard claim alone.

### SRC-0211

Title: AgentLens: Revealing The Lucky Pass Problem in SWE-Agent Evaluation
Organization / Authors: Sahoo et al.
Source Type: PAPER
URL: https://arxiv.org/abs/2605.12925
Published: 2026
Checked: 2026-09-25
Tier: 2
Topics: Agent evaluation, lucky pass, benchmark variance
Key Evidence: agent benchmark results can hide failure processes and lucky passes.
Limitations: Specific evaluation setup.
Volatility: MEDIUM
Notes: Supports process-level evaluation.

### SRC-0212

Title: On Randomness in Agentic Evals
Organization / Authors: Agentic eval authors
Source Type: PAPER
URL: https://arxiv.org/abs/2602.07150
Published: 2026
Venue / Archive: ICLR 2026 Workshop on Agents in the Wild.
Archive ID: arXiv:2602.07150
Checked: 2026-09-25
Tier: 2
Topics: Agent eval variance, demo reproducibility
Key Evidence: pass@1 can vary across runs; temperature 0 does not remove all variance; trajectories used large token/tool budgets.
Limitations: Specific data and agent setup.
Volatility: MEDIUM
Notes: Use for repeatability and eval-cost caution.

### SRC-0213

Title: Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity
Organization / Authors: METR / Becker et al.
Source Type: PAPER
URL: https://arxiv.org/abs/2507.09089
Published: 2025
Archive ID: arXiv:2507.09089
Checked: 2026-09-25
Tier: 2
Topics: Productivity, AI coding tools, role shift
Key Evidence: RCT found AI tools slowed experienced developers on familiar OSS tasks under the studied conditions.
Limitations: Early-2025 tools, specific participants/tasks; not universal productivity proof.
Volatility: MEDIUM
Notes: Use to prevent one-way productivity claims.

### SRC-0214

Title: The Effects of Generative AI on High-Skilled Work
Organization / Authors: Microsoft Research / Cui et al.
Source Type: PAPER
URL: https://www.microsoft.com/en-us/research/publication/the-effects-of-generative-ai-on-high-skilled-work-evidence-from-three-field-experiments-with-software-developers/
Published: 2025
Checked: 2026-09-25
Tier: 2
Topics: Productivity, field experiments
Key Evidence: field experiment reports task count changes for a code-completion assistant.
Limitations: Assistant/product/task context specific; not agentic repository work proof.
Volatility: MEDIUM
Notes: Contrast with METR.

### SRC-0215

Title: Grounded Copilot: How Programmers Interact with Code-Generating Models
Organization / Authors: Barke et al.
Source Type: PAPER
URL: https://arxiv.org/abs/2206.15000
Published: 2022
Archive ID: arXiv:2206.15000
Checked: 2026-09-25
Tier: 2
Topics: Developer role shift, acceleration, exploration
Key Evidence: developers use AI assistance for acceleration and exploration while retaining intent and choice.
Limitations: Earlier tools; qualitative/generalization limits.
Volatility: MEDIUM
Notes: Useful for teaching role framing.

### SRC-0216

Title: Beginners Struggle to Understand LLM-Generated Code
Organization / Authors: Zi et al.
Source Type: PAPER
URL: https://arxiv.org/abs/2504.19037
Published: 2025
Archive ID: arXiv:2504.19037
Checked: 2026-09-25
Tier: 2
Topics: Skill formation, beginner understanding
Key Evidence: beginners can struggle to understand LLM-generated code.
Limitations: Population/task-specific.
Volatility: MEDIUM
Notes: Do not claim coding skill is obsolete.

### SRC-0217

Title: How AI Impacts Skill Formation
Organization / Authors: Shen & Tamkin
Source Type: PAPER
URL: https://arxiv.org/abs/2601.20245
Published: 2026
Archive ID: arXiv:2601.20245
Checked: 2026-09-25
Tier: 2
Topics: Skill formation, learning, role shift
Key Evidence: AI assistance can improve speed in some tasks but lower measured understanding in studied condition.
Limitations: Specific library-learning experiment.
Volatility: MEDIUM
Notes: Supports verification/responsibility model.

### SRC-0218

Title: What makes a harness a harness
Organization / Authors: He et al.
Source Type: PAPER
URL: https://arxiv.org/abs/2606.10106
Published: 2026
Archive ID: arXiv:2606.10106
Checked: 2026-09-25
Tier: 2
Topics: Harness definition, scaffold
Key Evidence: attempts to characterize necessary/sufficient conditions for agent harness.
Limitations: Preprint; not a universal industry taxonomy.
Volatility: MEDIUM
Notes: Use cautiously with project teaching model.

### SRC-0219

Title: A Two-Tier Perspective on Inference-Time Parallelism in Multi-Agent LLM Systems
Organization / Authors: Multi-agent parallelism authors
Source Type: PAPER
URL: https://arxiv.org/abs/2608.05791
Published: 2026
Venue / Archive: ICML 2026; arXiv:2608.05791.
Checked: 2026-09-25
Tier: 2
Topics: Parallel agents, cost/latency tradeoff
Key Evidence: parallelism can improve some outcomes while increasing token consumption.
Limitations: Not Codex coding workflow proof.
Volatility: MEDIUM
Notes: Use as bounded tradeoff evidence.

### SRC-0220

Title: Infrastructure noise in Terminal-Bench 2.0
Organization / Authors: Anthropic
Source Type: ENGINEERING_BLOG
URL: https://www.anthropic.com/engineering/infrastructure-noise
Published: Not shown
Checked: 2026-09-25
Tier: 2
Topics: Evaluation, sandbox resources, benchmark noise
Key Evidence: changing CPU/RAM limits affected Terminal-Bench success and infrastructure errors in reported study.
Limitations: Vendor/internal experiment; not universal.
Volatility: MEDIUM
Notes: Supports resource/environment as evaluation variable.

### SRC-0221

Title: Failure as a Process: An Anatomy of CLI Coding Agent Trajectories
Organization / Authors: Zhao et al.
Source Type: PAPER
URL: https://arxiv.org/html/2607.09510v1
Published: 2026
Archive ID: arXiv:2607.09510v1
Checked: 2026-09-25
Tier: 2
Topics: Agent failure modes, trajectory analysis
Key Evidence: coding agent failures can emerge through process/trajectory, not only final answer quality.
Limitations: Specific agents/tasks and preprint status.
Volatility: MEDIUM
Notes: Use for failure taxonomy with caution.

### SRC-0222

Title: Reflexion: Language Agents with Verbal Reinforcement Learning
Organization / Authors: Shinn et al.
Source Type: PAPER
URL: https://arxiv.org/abs/2303.11366
Published: 2023
Archive ID: arXiv:2303.11366
Checked: 2026-09-25
Tier: 2
Topics: Feedback loops, reflection
Key Evidence: verbal feedback/reflection can improve agents in studied setups.
Limitations: Research setup, not product guarantee.
Volatility: MEDIUM
Notes: Loop concept evidence.

### SRC-0223

Title: Self-Refine: Iterative Refinement with Self-Feedback
Organization / Authors: Madaan et al.
Source Type: PAPER
URL: https://arxiv.org/abs/2303.17651
Published: 2023
Archive ID: arXiv:2303.17651
Checked: 2026-09-25
Tier: 2
Topics: Iterative improvement, self-feedback
Key Evidence: iterative self-feedback can improve output on studied tasks.
Limitations: Not repository engineering harness proof.
Volatility: MEDIUM
Notes: Use as academic background only.

### SRC-0224

Title: Build an Agent Improvement Loop with Traces, Evals, and Codex
Organization / Authors: OpenAI Cookbook / Wesley Pasfield
Source Type: OFFICIAL_DOC
URL: https://developers.openai.com/cookbook/examples/agents_sdk/agent_improvement_loop
Published: 2026-05-12
Checked: 2026-09-25
Tier: 2
Topics: Improvement loop, traces, evals, Codex
Key Evidence: example process connecting traces, evals, and Codex for improving an agent.
Limitations: Cookbook/example; not evidence of universal self-improvement.
Volatility: MEDIUM
Notes: Use as example, not product guarantee.

### SRC-0225

Title: 2025 State of AI-Assisted Software Development
Organization / Authors: Google Cloud / DORA
Source Type: ENGINEERING_BLOG
URL: https://cloud.google.com/blog/products/ai-machine-learning/announcing-the-2025-dora-report
Published: 2025
Checked: 2026-09-25
Tier: 2
Topics: AI-assisted development, industry survey
Key Evidence: industry report framing of AI-assisted software development and organizational practice.
Limitations: Survey/report, not causal proof for this training.
Volatility: MEDIUM
Notes: External usage of AI-native adjacent terms.

### SRC-0226

Title: Towards AI-Native Software Engineering (SE 3.0)
Organization / Authors: Hassan et al.
Source Type: PAPER
URL: https://doi.org/10.1145/3807901
Published: 2026
Venue / Archive: ACM Transactions on Software Engineering and Methodology (TOSEM); DOI: 10.1145/3807901.
Checked: 2026-09-25
Tier: 2
Topics: AI-Native, role shift, SE 3.0
Key Evidence: AI-native software engineering as vision/roadmap.
Limitations: Not evidence that all organizations have reached a single maturity destination.
Volatility: MEDIUM
Notes: Use to distinguish external terminology from this course's operational usage.

### SRC-0227

Title: What Is Loop Engineering?
Organization / Authors: IBM Think
Source Type: ENGINEERING_BLOG
URL: https://www.ibm.com/think/topics/loop-engineering
Published: 2026-07-17
Checked: 2026-09-25
Tier: 3
Topics: Loop engineering term usage
Key Evidence: industry usage of loop engineering language.
Limitations: Vendor explainer; not a standard or academic definition.
Volatility: MEDIUM
Notes: Do not treat as consensus.

### SRC-0228

Title: ChatGPT Quickstart — app setup
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://learn.chatgpt.com/docs/quickstart?setup=app
Published: Not shown
Checked: 2026-10-21
Tier: 1
Topics: ChatGPT desktop app, Codex entry, codebase context
Key Evidence: The software-development path with codebase context and developer tools selects Codex from the ChatGPT dropdown.
Limitations: Documentation verification only. Exact top-left placement is the user's environment description; the target app/account and presentation environment remain UNVERIFIED. This does not establish exclusive repository or file access by Codex.
Volatility: HIGH
Notes: CLM-0031; DEC-0036; current S08 uses a labeled editable reconstruction, not a captured app screen.

### SRC-0229

Title: ChatGPT desktop app
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://learn.chatgpt.com/docs/app
Published: Not shown
Checked: 2026-10-21
Tier: 1
Topics: ChatGPT, Codex, local project work
Key Evidence: Describes the desktop app and its task surfaces; supports the course-specific Codex entry explanation together with SRC-0228.
Limitations: Local target UI, account permissions and live operation have not been validated. ChatGPT Work can also use local files, so avoid an exclusive file-access claim.
Volatility: HIGH
Notes: CLM-0031; pair the documented route with the presentation-environment gate.

## Claim / Research Topic Cross-Reference

핵심 Claim에서 역으로 원본 자료와 조사 분야를 찾기 위한 index다. 세부 제한과
현재 상태는 연결된 Claim 및 Research 문서에서 확인한다.

| Claim ID | Key Source IDs | Research Topic |
|----------|---------------|----------------|
| CLM-0001, CLM-0002 | SRC-0001, SRC-0002 | Training scope and Story |
| CLM-0005 | SRC-0110 | AGENTS.md / product instructions |
| CLM-0006 | SRC-0111 | Skills / reusable workflow |
| CLM-0007 | SRC-0112 | Subagents / delegation |
| CLM-0008 | SRC-0113 | Codex Memory / persistent context |
| CLM-0009, CLM-0010 | SRC-0105, SRC-0106, SRC-0132 | Local, Worktree, Cloud, data flow |
| CLM-0011 | SRC-0115, SRC-0124 | Web search, shell and Cloud network |
| CLM-0012, CLM-0013, CLM-0026 | SRC-0125–SRC-0132 | Data use, residency, retention, workspace policy |
| CLM-0014, CLM-0015 | SRC-0201–SRC-0204 | Long context and repository QA |
| CLM-0016, CLM-0017, CLM-0022, CLM-0030 | SRC-0137, SRC-0206, SRC-0218 | Harness, scaffold, model/system distinction |
| CLM-0018, CLM-0020 | SRC-0211, SRC-0212, SRC-0220 | Agent evaluation, variance and benchmark conditions |
| CLM-0019 | SRC-0207, SRC-0213, SRC-0214 | Coding benchmarks and developer productivity |
| CLM-0021 | SRC-0118–SRC-0120, SRC-0140, SRC-0222–SRC-0224 | Verification, feedback and improvement loops |
| CLM-0023, CLM-0024 | SRC-0136, SRC-0213, SRC-0216, SRC-0217, SRC-0225–SRC-0227 | AI-Native Development and developer role/skill evidence |
| CLM-0025 | SRC-0130, SRC-0131 | Target workspace, plan and admin availability |
| CLM-0027 | SRC-0003 | Demo honesty and project history |
| CLM-0028 | SRC-0143, SRC-0209, SRC-0210 | SWE-Bench Pro source/version conflict |
| CLM-0029 | SRC-0103, SRC-0105, SRC-0139, SRC-0140 | Verification capability and evaluation |
| CLM-0031 | SRC-0228, SRC-0229 | Documented ChatGPT dropdown to Codex development path; target UI remains unverified |

## 2026-10-21 — Prompt Engineering Sources Addendum

These entries record official documentation inspected on the checked date.
They support bounded recommendations, not new performance measurements or
observed execution of the added teaching examples.

### SRC-0230

Title: Prompt engineering
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://developers.openai.com/api/docs/guides/prompt-engineering
Published: Not shown
Checked: 2026-10-21
Tier: 1
Topics: Delimiters, examples, relevant context, coding responsibilities
Sections / Selectors: Message formatting with Markdown and XML; Few-shot learning; Include relevant context information; Coding
Key Evidence: Documents prompt boundaries, input/output examples, relevant source material and explicit workflow responsibilities.
Limitations: API documentation adapted to teaching requests; no universal efficacy or role-based accuracy guarantee. Delimiters alone are not a security boundary. C++ crop prompts are conceptual and not TRIAL-002 observations.
Volatility: HIGH
Notes: CLM-0032, CLM-0033, CLM-0035, CLM-0038; detailed scope in product/PROMPT_ENGINEERING_2026-10-21.md.

### SRC-0231

Title: Reasoning best practices
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://developers.openai.com/api/docs/guides/reasoning-best-practices
Published: Not shown
Checked: 2026-10-21
Tier: 1
Topics: Clear instructions, delimiters, zero-shot/few-shot, reasoning boundaries
Sections / Selectors: How to prompt reasoning models effectively
Key Evidence: Recommends direct instructions, clear sections and trying zero-shot before closely aligned examples; says chain-of-thought prompting can be unnecessary or harmful for reasoning models.
Limitations: Use the named prompting section only. Older model-family and vision-support descriptions on this page must not become current 2026 capability claims. No measured result for the teaching examples.
Volatility: HIGH
Notes: CLM-0032, CLM-0033, CLM-0037; distinguish reviewable task plans from requests for internal reasoning disclosure.

### SRC-0232

Title: Best practices
Organization / Authors: OpenAI / ChatGPT Learn
Source Type: OFFICIAL_DOC
URL: https://learn.chatgpt.com/guides/best-practices
Published: Not shown
Checked: 2026-10-21
Tier: 1
Topics: Planning, clarification, focused checks, code review
Sections / Selectors: Plan first for difficult tasks; Improve reliability with testing and review
Key Evidence: Recommends planning or interviewing for difficult/ambiguous tasks, relevant checks and review of changes.
Limitations: Documented guidance only. Tools, environment and permissions determine actual execution; a review does not prove complete correctness.
Volatility: HIGH
Notes: CLM-0036, CLM-0037, CLM-0038; https://developers.openai.com/codex/learn/best-practices redirected to this canonical URL when inspected.

### SRC-0233

Title: Structured model outputs
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://developers.openai.com/api/docs/guides/structured-outputs
Published: Not shown
Checked: 2026-10-21
Tier: 1
Topics: API JSON Schema, structured output, format/content distinction
Sections / Selectors: Structured model outputs; Handling user-generated input; Handling mistakes
Key Evidence: Describes API schema-conforming outputs and warns that structured outputs can still contain mistakes or fabricate fields for incompatible input unless handling is specified.
Limitations: This API mechanism is not activated merely by asking for JSON in a chat. Schema adherence does not establish factual correctness; no target account implementation was executed.
Volatility: HIGH
Notes: CLM-0034; teach as an API boundary alongside a plain-language output-format request.

### SRC-0234

Title: Prompting
Organization / Authors: OpenAI / ChatGPT Learn
Source Type: OFFICIAL_DOC
URL: https://learn.chatgpt.com/docs/prompting
Published: Not shown
Checked: 2026-10-21
Tier: 1
Topics: Output format, source grounding, unknowns, focused review, follow-up refinement
Sections / Selectors: Prompting overview; Set boundaries that prevent real problems; Make the result ready to use; Improve the result with follow-up messages; Prompting Codex; Iterate on UI with live updates; Review a GitHub pull request
Key Evidence: Recommends useful output constraints, source-only boundaries with missing information flagged, explicit review focus and small specific follow-up requests.
Limitations: Practical guidance, not a universal causal performance result. Adapting UI iteration or review examples to C++ crop is conceptual; follow-up messages do not establish improvement without evidence.
Volatility: HIGH
Notes: CLM-0034, CLM-0035, CLM-0037, CLM-0038, CLM-0039; no new Trial or efficacy statistic.

### SRC-0235

Title: Using GPT-6
Organization / Authors: OpenAI
Source Type: OFFICIAL_DOC
URL: https://developers.openai.com/api/docs/guides/latest-model
Published: Not shown
Checked: 2026-10-21
Tier: 1
Topics: Material clarification, autonomy, bounded verification, model-dependent prompts
Sections / Selectors: Prompting best practices; Initiative and follow-through; Testing and verification
Key Evidence: Provides starting prompts for task follow-through and clarification and recommends verification appropriate to the change.
Limitations: Guidance addresses observed GPT-6 Astra behavior and says to evaluate it with the selected model and workload. Do not generalize current model settings or performance claims to all models or account surfaces.
Volatility: HIGH
Notes: CLM-0036, CLM-0038; instructional adaptation only, not observed success of the course examples.

### Added claim cross-reference

| Claim ID | Key Source IDs | Research Topic |
|----------|----------------|----------------|
| CLM-0032 | SRC-0230, SRC-0231 | Prompt delimiters and their limits |
| CLM-0033 | SRC-0230, SRC-0231 | Aligned examples; zero-shot before few-shot when suitable |
| CLM-0034 | SRC-0233, SRC-0234 | Output contracts and API Structured Outputs boundary |
| CLM-0035 | SRC-0230, SRC-0234 | Supplied-source grounding and unknowns |
| CLM-0036 | SRC-0232, SRC-0235 | Material clarification and calibrated autonomy |
| CLM-0037 | SRC-0232, SRC-0234, SRC-0231 | Reviewable task decomposition and reasoning boundary |
| CLM-0038 | SRC-0232, SRC-0234, SRC-0235, SRC-0230 | Criteria-focused review and role as a perspective |
| CLM-0039 | SRC-0234 | Concrete feedback and scoped follow-up refinement |
