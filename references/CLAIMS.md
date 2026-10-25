# Claim Registry

## Training Risk

Training Risk는 claim이 slide, demo, speaker note에서 잘못 쓰였을 때 교육 목표나 안전한 해석을 얼마나 해칠 수 있는지를 뜻한다.

- LOW: wording이 조금 부정확해도 core Story나 제품/보안 판단을 크게 흔들지 않는다.
- MEDIUM: scope caveat를 빼면 제품 기능, research result, teaching model이 섞일 수 있다.
- HIGH: core Story, Source of Truth, product availability, security/company policy, benchmark interpretation, demo honesty에 직접 영향을 준다. HIGH claim은 slide/demo에 넣을 때 source scope, surface/account 조건, unresolved gap을 함께 표시한다. Unsupported HIGH claim은 사실처럼 말하지 않고 gap, candidate, 또는 do-not-claim으로 처리한다.

## Research Priority

Research Priority는 조사 순서를 뜻하며 Training Risk와 별도다. 기준과
종료 조건은 [Research Execution Protocol](RESEARCH_PROTOCOL.md)을 따른다.

- **P0 — Story Critical:** 틀리면 핵심 Story가 깨지는 제품 기능 또는 교육 Model.
- **P1 — Demo Critical:** Demo의 실행 가능성·환경·재현성에 직접 영향을 주는 항목.
- **P2 — Teaching Evidence:** 핵심 Insight를 뒷받침하는 학술·기술 근거.
- **P3 — Supporting Context:** 없어도 핵심 Story가 유지되는 부가 근거.


| Claim ID | Claim | Type | Confidence | Evidence | Training Use | Status | Training Risk | Priority |
|----------|-------|------|------------|----------|--------------|--------|---------------|----------|
| CLM-0001 | This project is a six-hour developer training with no participant hands-on labs. | PROJECT CONVENTION | HIGH | SRC-0001, SRC-0002 | Scope guard | VERIFIED | HIGH | P0 |
| CLM-0002 | The training Story is Chatbot → Prompt → Context → Harness → Loop → AI-Native Development. | PROJECT CONVENTION | HIGH | SRC-0001, SRC-0002 | Story structure | VERIFIED | HIGH | P0 |
| CLM-0003 | `plan/` documents are the project Source of Truth, and `AGENTS.md` must not override them. | PROJECT CONVENTION | HIGH | SRC-0001, SRC-0002 | Governance | VERIFIED | HIGH | P3 |
| CLM-0004 | ChatGPT GitHub connector is a read/search context source, not proof of repository write/push capability. | PRODUCT BEHAVIOR | HIGH | SRC-0133 | ChatGPT vs Codex boundary | VERIFIED | MEDIUM | P1 |
| CLM-0005 | Codex supports repository-level and nested `AGENTS.md` instructions. | PRODUCT BEHAVIOR | HIGH | SRC-0110 | Context Engineering | VERIFIED | HIGH | P0 |
| CLM-0006 | Codex Skills are reusable workflow instructions/resources/scripts, but not required for every repeated task. | PRODUCT BEHAVIOR / HEURISTIC | MEDIUM | SRC-0111, SRC-0001 | Harness Engineering | PARTIAL | HIGH | P0 |
| CLM-0007 | Codex Subagents can isolate work in separate agent threads and may increase token/coordination cost. | PRODUCT BEHAVIOR | HIGH | SRC-0112 | Harness Engineering | VERIFIED | HIGH | P0 |
| CLM-0008 | Codex Memory is separate from current Context and project Source of Truth. | PRODUCT BEHAVIOR / PROJECT CONVENTION | HIGH | SRC-0113, SRC-0001, SRC-0002 | Memory lifecycle | VERIFIED | HIGH | P0 |
| CLM-0009 | Local/Worktree execution means files and commands run on the user computer, not that model inference is local-only. | PRODUCT BEHAVIOR | HIGH | SRC-0106, SRC-0132 | Security/data flow | VERIFIED | HIGH | P1 |
| CLM-0010 | Codex Cloud checks out a selected branch/commit in a configured cloud environment and runs setup/agent command loops there. | PRODUCT BEHAVIOR | HIGH | SRC-0105 | Demo reproducibility | VERIFIED | MEDIUM | P1 |
| CLM-0011 | Web search, shell network access, and Cloud agent internet access are separate capabilities. | PRODUCT BEHAVIOR | HIGH | SRC-0115, SRC-0124 | Tools and execution | VERIFIED | MEDIUM | P1 |
| CLM-0012 | Business/Enterprise/Edu product data handling does not decide whether company source code or customer data may be used. | PRODUCT BEHAVIOR / PROJECT CONVENTION | HIGH | SRC-0125, SRC-0132, SRC-0002 | Security policy | VERIFIED | HIGH | P1 |
| CLM-0013 | Data residency, inference residency, retention, and training use are separate policy dimensions. | PRODUCT BEHAVIOR | HIGH | SRC-0125, SRC-0126, SRC-0127, SRC-0128 | Security/data handling | VERIFIED | HIGH | P1 |
| CLM-0014 | A larger context window alone does not guarantee better repository understanding. | ACADEMIC FINDING / HEURISTIC | MEDIUM | SRC-0201, SRC-0202, SRC-0203, SRC-0204 | Context Engineering | VERIFIED | MEDIUM | P2 |
| CLM-0015 | Lost-in-the-middle research supports context placement caution, not a universal claim that current models cannot use middle context. | ACADEMIC FINDING | HIGH | SRC-0201 | Context caveat | VERIFIED | HIGH | P2 |
| CLM-0016 | Model capability and Harness/System design are distinct but complementary layers. | ACADEMIC FINDING / TEACHING MODEL | HIGH | SRC-0206, SRC-0137, SRC-0001 | Harness Story | VERIFIED | HIGH | P0 |
| CLM-0017 | Harness improvements cannot be claimed to fix every model limitation. | HEURISTIC | HIGH | SRC-0206, SRC-0137, SRC-0218 | Harness caveat | VERIFIED | HIGH | P0 |
| CLM-0018 | Benchmark scores must be scoped to task, model, scaffold, resource, and scoring conditions. | ACADEMIC FINDING | HIGH | SRC-0206, SRC-0207, SRC-0212, SRC-0220 | Benchmark literacy | VERIFIED | HIGH | P2 |
| CLM-0019 | Coding benchmark scores should not be turned into direct workplace productivity predictions. | ACADEMIC FINDING | HIGH | SRC-0213, SRC-0214, SRC-0207 | Evaluation caveat | VERIFIED | HIGH | P2 |
| CLM-0020 | Agent evals can vary across runs and require multiple traces/criteria for robust claims. | ACADEMIC FINDING | HIGH | SRC-0212, SRC-0211, SRC-0140 | Verification/Loop | VERIFIED | HIGH | P2 |
| CLM-0021 | Loop Engineering in this course means feedback-driven improvement, not automation alone. | TEACHING MODEL | HIGH | SRC-0001, SRC-0118, SRC-0119, SRC-0140, SRC-0224 | Loop Engineering | VERIFIED | HIGH | P0 |
| CLM-0022 | “Minimum Effective Harness” is a bounded project heuristic, not an official universal taxonomy. | HEURISTIC | HIGH | SRC-0001, SRC-0218 | Cost/complexity | VERIFIED | HIGH | P0 |
| CLM-0023 | AI-Native Development in this course is an operational teaching model, not a universal industry consensus. | TEACHING MODEL | HIGH | SRC-0136, SRC-0225, SRC-0226, SRC-0227, SRC-0001 | AI-Native chapter | VERIFIED | HIGH | P0 |
| CLM-0024 | AI coding tools make developer coding skill obsolete. | INDUSTRY CLAIM | LOW | SRC-0213, SRC-0216, SRC-0217 | Do-not-claim | UNVERIFIED | HIGH | P3 |
| CLM-0025 | Target training workspace supports all needed Codex Skills, Subagents, Memory, Cloud, MCP, and plugin features. | PRODUCT BEHAVIOR | LOW | SRC-0130, SRC-0131 | Demo planning | UNVERIFIED | HIGH | P1 |
| CLM-0026 | The company permits internal source code, customer data, credentials, and internal repository metadata in the selected OpenAI surfaces. | COMPANY POLICY | NONE | SRC-0125, SRC-0129, SRC-0131 | Security policy | UNVERIFIED | HIGH | P1 |
| CLM-0027 | Candidate demo failures A–I have been observed in this project. | PROJECT HISTORY | NONE | SRC-0003 | Demo honesty | UNVERIFIED | HIGH | P1 |
| CLM-0028 | SWE-Bench Pro leaderboard claims can be used without version/source qualification. | BENCHMARK CLAIM | MEDIUM | SRC-0209, SRC-0210, SRC-0143 | Benchmark caveat | CONFLICTED | HIGH | P3 |
| CLM-0029 | Codex can run available project verification commands when the selected environment and permissions allow; the observed check does not prove every aspect of correctness. | PRODUCT BEHAVIOR / HEURISTIC | HIGH | SRC-0103, SRC-0105, SRC-0139, SRC-0140 | Verification | VERIFIED | HIGH | P0 |
| CLM-0030 | This course uses Harness as a deliberately designed working environment that helps an Agent work reliably in a Project; this is not a universal taxonomy. | TEACHING MODEL | MEDIUM | SRC-0001, SRC-0137, SRC-0206, SRC-0218 | Harness Engineering | PARTIAL | HIGH | P0 |
| CLM-0031 | OpenAI Quickstart directs software-development work with codebase context and developer tools to Codex through the ChatGPT dropdown. This course follows that route; exact target UI and account availability remain unverified. | PRODUCT BEHAVIOR / DOCUMENTATION | HIGH | SRC-0228, SRC-0229 | Current S08 / DEC-0036 | VERIFIED | HIGH | P1 |

## Story-Critical Claim Gate

P0 Claims need source-backed confirmation before they can appear as definitive
facts in downstream Slides. “PASS WITH SCOPE” means the bounded wording is
supported; it does not mean the training account or Demo has been verified.

| Claim ID | Gate | Evidence boundary | Fallback |
|----------|------|-------------------|----------|
| CLM-0001, CLM-0002 | PASS — project convention | Confirmed by the approved `MASTER_PLAN`; not external product claims. | Preserve the approved training scope and Story. |
| CLM-0005 | PASS — official source | `SRC-0110` documents repository and nested `AGENTS.md` instructions. | Explain with a static repository example if live access is unavailable. |
| CLM-0006 | PASS WITH SCOPE | `SRC-0111` documents Skills; “not required for every repeated task” is a project heuristic, not a product rule. Target availability remains OQ-003/OQ-005. | Keep the reusable-workflow problem; use repository instructions or a labeled diagram if Skills are unavailable. |
| CLM-0007 | PASS WITH SCOPE | `SRC-0112` documents separate Subagent threads and costs; target workspace availability remains unresolved. | Use a conceptual delegation diagram. |
| CLM-0008 | PASS WITH SCOPE | `SRC-0113` documents product Memory; keep it separate from project Source of Truth and current Context. Target workspace behavior remains unresolved. | Teach the distinction with `plan/` and a diagram; do not depend on a Memory feature Demo. |
| CLM-0016, CLM-0017 | PASS WITH SCOPE | `SRC-0206`, `SRC-0137`, and `SRC-0218` support bounded model/scaffold and Harness claims; they do not prove universal causal improvement. | Use a product-independent model/system/checks diagram. |
| CLM-0021, CLM-0022 | PASS AS TRAINING MODEL / HEURISTIC by DEC-0023 | The accepted operational wording is course-specific. Product and research sources are examples, not universal definitions. | Label the course model/heuristic; avoid unsupported numeric thresholds or fabricated failures. |
| CLM-0023 | PASS AS TRAINING MODEL | Use the approved course framing; external terminology is not a universal maturity standard. | Label it “이 교육에서 사용하는 Model.” |
| CLM-0029 | PASS WITH SCOPE | Official guidance supports command execution and evidence-based checks; actual checks depend on repository, environment, and permissions. | Use a labeled illustrative check/diff; do not claim full correctness from a command pass. |
| CLM-0030 | PASS AS THIS COURSE'S TEACHING MODEL by DEC-0023; external/universal usage remains PARTIAL | The user approved bounded operational wording; cited sources do not establish a universal taxonomy. | Use a product-independent system diagram and label the definition as this course's model. |

## P0 Claim Final Audit

Source Tier lists all tiers represented by the cited evidence. A project
convention can be Tier 1 evidence for the training's intended Story, but it is
not external product evidence. `PARTIAL` entries remain bounded and have an
explicit fallback; none is promoted to an unqualified product guarantee.

| Claim | Evidence | Source Tier | Confidence | Status | Story Dependency | Fallback |
|-------|----------|-------------|------------|--------|------------------|----------|
| CLM-0001 — Six-hour developer training with no participant hands-on labs | SRC-0001, SRC-0002 | 1 | HIGH | VERIFIED | Whole training scope and delivery | Preserve the approved scope; use static/recorded examples where a live demonstration is unavailable. |
| CLM-0002 — Chatbot → Prompt → Context → Harness → Loop → AI-Native Development | SRC-0001, SRC-0002 | 1 | HIGH | VERIFIED | Core narrative | Preserve the sequence and explain unavailable product detail with existing product-independent fallbacks. |
| CLM-0005 — Repository and nested `AGENTS.md` support | SRC-0110 | 1 | HIGH | VERIFIED | Context → AGENTS.md | Use a static repository instruction-file example. |
| CLM-0006 — Skills as reusable workflow instructions/resources/scripts | SRC-0111, SRC-0001 | 1 | MEDIUM | PARTIAL | Skills → Harness | Keep the reusable-workflow problem; use repository instructions or a labeled diagram if Skills are unavailable. |
| CLM-0007 — Subagents as separate agent threads with coordination costs | SRC-0112 | 1 | HIGH | VERIFIED | Subagents → Harness | Use a conceptual delegation diagram if the target workspace lacks support. |
| CLM-0008 — Memory differs from current Context and project Source of Truth | SRC-0113, SRC-0001, SRC-0002 | 1 | HIGH | VERIFIED | Context Separation → Memory → Harness | Teach the distinction with `plan/` and a diagram; do not depend on a Memory feature demo. |
| CLM-0016 — Model capability and Harness/System are complementary layers | SRC-0206, SRC-0137, SRC-0001 | 1, 2 | HIGH | VERIFIED | Harness | Use a product-independent model/system/checks diagram. |
| CLM-0017 — Harness improvements do not fix every model limitation | SRC-0206, SRC-0137, SRC-0218 | 2 | HIGH | VERIFIED | Harness and its limits | Describe the bounded scaffold evidence; do not claim universal causal improvement. |
| CLM-0021 — Loop means feedback-driven improvement, not automation alone | SRC-0001, SRC-0118, SRC-0119, SRC-0140, SRC-0224 | 1, 2 | HIGH | VERIFIED | Harness Technical Debt → Loop | Label the course model; use an illustrative loop and do not claim an unobserved improvement. |
| CLM-0022 — “Minimum Effective Harness” is a project heuristic | SRC-0001, SRC-0218 | 1, 2 | HIGH | VERIFIED | Harness → Loop | Label it as a heuristic; avoid unsupported numeric thresholds or fabricated failures. |
| CLM-0023 — AI-Native Development is this course's operational model | SRC-0136, SRC-0225, SRC-0226, SRC-0227, SRC-0001 | 1, 2, 3 | HIGH | VERIFIED | AI-Native Development | Label it “이 교육에서 사용하는 Model”; do not present it as universal industry consensus. |
| CLM-0029 — Codex can run available project checks under environment/permission conditions | SRC-0103, SRC-0105, SRC-0139, SRC-0140 | 1 | HIGH | VERIFIED | Verification throughout the Story | Use a labeled illustrative check/diff; state what it verifies and do not claim full correctness. |
| CLM-0030 — Course operational model for Harness Engineering | SRC-0001, SRC-0137, SRC-0206, SRC-0218, DEC-0023 | 1, 2 | MEDIUM | PARTIAL | Harness | Use a product-independent system diagram and label the definition as this course's model; do not imply a universal taxonomy. |

## Teaching Suitability of Major Findings

This table preserves the STEP 03 Research-stage suitability assessment. Current
Slide wording and approval status are governed by `plan/CLAIM_FREEZE.md` and
DEC-0023; they supersede the candidate wording where applicable.

| Claim ID | Teaching Value | Complexity | Audience Relevance | Story Fit | Slide Candidate | Demo Candidate |
|----------|---------------|------------|--------------------|-----------|-----------------|----------------|
| CLM-0005 | HIGH | LOW | BASIC | Context Engineering | YES | MAYBE |
| CLM-0006 | HIGH | MEDIUM | PRACTICAL | Harness Engineering | YES | MAYBE |
| CLM-0007 | MEDIUM | HIGH | ADVANCED | Harness Engineering | MAYBE | MAYBE |
| CLM-0008 | HIGH | MEDIUM | PRACTICAL | Context → Harness → Loop | YES | MAYBE |
| CLM-0014 | HIGH | MEDIUM | BASIC | Context Engineering | YES | MAYBE |
| CLM-0015 | HIGH | MEDIUM | PRACTICAL | Context Engineering | YES | MAYBE |
| CLM-0016 | HIGH | LOW | BASIC | Harness Engineering | YES | YES — conceptual |
| CLM-0018 | MEDIUM | HIGH | ADVANCED | Verification / Loop Engineering | MAYBE | NO |
| CLM-0019 | HIGH | MEDIUM | PRACTICAL | AI-Native Development | YES | NO |
| CLM-0020 | HIGH | MEDIUM | PRACTICAL | Verification → Loop Engineering | YES | MAYBE |
| CLM-0021 | HIGH | MEDIUM | PRACTICAL | Loop Engineering | YES | MAYBE — illustrative only |
| CLM-0022 | MEDIUM | MEDIUM | ADVANCED | Harness → Loop Engineering | MAYBE | MAYBE |
| CLM-0023 | HIGH | MEDIUM | BASIC | AI-Native Development | YES | NO |
| CLM-0029 | HIGH | LOW | BASIC | Verification throughout the Story | YES | MAYBE |
| CLM-0030 | HIGH | MEDIUM | PRACTICAL | Harness Engineering | MAYBE | MAYBE — conceptual only |

## 2026-10-21 — Codex Entry Scope Addendum

CLM-0031 verifies the official documented route, not a live execution in the
training account. The current S08 is an editable reconstruction. The top-left
placement follows the user's environment description. Preserve the target
product/account gate, and do not turn the course's Codex path into a claim that
other ChatGPT surfaces cannot access files or repository context.

## 2026-10-21 — Prompt Engineering Methods Addendum

The claims below verify documented recommendations only. They do not verify
universal efficacy, superiority over another technique, successful execution
of a teaching Prompt, or availability in the target training account. The
eight added C++ crop examples are CONCEPTUAL / TEACHING ADAPTATION, not new
TRIAL-002 inputs or observations. Detailed sections, usage and limits are in
`product/PROMPT_ENGINEERING_2026-10-21.md`. Full Prompt evaluation remains
in ACT 4.

| Claim ID | Claim | Type | Confidence | Evidence | Training Use | Status | Training Risk | Priority |
|----------|-------|------|------------|----------|--------------|--------|---------------|----------|
| CLM-0032 | OpenAI recommends Markdown/XML delimiters to clarify logical boundaries in prompts; delimiters do not establish a correctness or security guarantee. | DOCUMENTED RECOMMENDATION | HIGH | SRC-0230, SRC-0231 | Current S22 / delimiters | VERIFIED | MEDIUM | P2 |
| CLM-0033 | OpenAI documents input/output examples as a way to express a desired pattern; reasoning guidance recommends trying zero-shot first and adding closely aligned examples when needed. | DOCUMENTED RECOMMENDATION | HIGH | SRC-0230, SRC-0231 | Current S23 / few-shot | VERIFIED | MEDIUM | P2 |
| CLM-0034 | OpenAI recommends specifying the needed output format; requesting JSON in chat differs from API Structured Outputs, and schema-conforming content can still contain mistakes. | DOCUMENTED RECOMMENDATION / PRODUCT BOUNDARY | HIGH | SRC-0233, SRC-0234 | Current S24 / output format | VERIFIED | HIGH | P2 |
| CLM-0035 | OpenAI recommends supplying relevant context and can be instructed to use only supplied sources and flag missing information; this does not guarantee factual accuracy. | DOCUMENTED RECOMMENDATION | HIGH | SRC-0230, SRC-0234 | Current S25 / grounding and unknowns | VERIFIED | HIGH | P2 |
| CLM-0036 | OpenAI recommends clarifying complex or ambiguous work and tuning autonomy when additional input could materially change the result; this is not a universal rule to ask about every detail. | DOCUMENTED RECOMMENDATION | HIGH | SRC-0232, SRC-0235 | Current S26 / material clarification | VERIFIED | MEDIUM | P2 |
| CLM-0037 | OpenAI recommends planning before coding for difficult tasks and separately warns that internal chain-of-thought prompting can be unnecessary for reasoning models. | DOCUMENTED RECOMMENDATION | HIGH | SRC-0232, SRC-0234, SRC-0231 | Current S27 / task decomposition | VERIFIED | MEDIUM | P2 |
| CLM-0038 | OpenAI documents focused review instructions, explicit coding responsibilities and relevant verification; the teaching role is a review perspective, with no verified guarantee of expertise, independence or correctness. | DOCUMENTED RECOMMENDATION | HIGH | SRC-0232, SRC-0234, SRC-0235, SRC-0230 | Current S28 / criteria-focused review | VERIFIED | HIGH | P2 |
| CLM-0039 | OpenAI recommends reviewing an initial result and using specific follow-up prompts to refine it; repetition alone is not evidence of improvement. | DOCUMENTED RECOMMENDATION | HIGH | SRC-0234 | Current S29 / concrete feedback | VERIFIED | MEDIUM | P2 |


## DEC-0083 — Existing Harness reassessment

| Claim ID | Claim | Type | Confidence | Source | Use | Status | Volatility | Priority |
|---|---|---|---|---|---|---|---|---|
| CLM-0040 | Anthropic describes some enterprise-agent deployments that consolidated routing, planning or domain subagents into a main loop and recommends representative end-to-end evaluation; separate agents remain justified for some boundaries/work. | DOCUMENTED VENDOR CASE / RECOMMENDATION | HIGH for existence and scope of the published account | SRC-0236 | S91 scoped case; S93 evaluation-design motivation | VERIFIED WITH SCOPE; no course Demo/current Codex/general superiority claim | HIGH | P1 |

S92 is a TEACHING_MODEL extension of CLM-0022/0030. S93 is evaluation design,
not an executed comparison. No measured cost/time/token/quality gain is added.
