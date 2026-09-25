# Research Snapshot

Snapshot Date: 2026-09-25

Status: STEP 03 final audit — COMPLETE WITH GAPS. Refresh product-dependent
entries before final Demo rehearsal and Slide content lock.

Evidence cutoff: Current product descriptions below refer to Source Records and
Research Notes checked 2026-09-25. This snapshot does not establish which
features the eventual training account or workspace can use. No Direct
Experiment is recorded for this checkpoint; the target environment is pending
OQ-003/OQ-005.

## Product Baseline

- **ChatGPT:** ChatGPT connectors and context sources have surface and workspace
  scope. The GitHub connector evidence is read/search context; it does not
  establish repository editing, command execution, commit, or push capability.
- **Codex:** Official material documents multiple work surfaces, including the
  ChatGPT desktop app, CLI, IDE extension, and Cloud. Local, Worktree, and Cloud
  execution have different environments. Do not assume identical feature
  availability, OS support, account access, permissions, or that local file
  execution means local-only model inference.
- **`AGENTS.md`:** Official Codex documentation supports repository and nested
  instruction files. This confirms the product mechanism; this project's use
  of `AGENTS.md` as a short Context Router remains a project pattern.
- **Skills:** Official documentation describes reusable workflow instructions,
  resources, optional scripts, and progressive disclosure. Availability and
  permissions in the target training workspace remain unverified.
- **Subagents:** Official documentation describes separate agent threads and
  independent work delegation; token use, coordination, and write conflicts
  remain relevant costs. Target workspace availability remains unverified.
- **Memory:** ChatGPT Memory, Codex local Memories, current thread Context, and
  repository Source of Truth have different scopes. Codex local Memories are
  documented for eligible surfaces, with feature controls and generation
  conditions; target account/admin behavior is unresolved.
- **Tools:** Web search, shell network, Cloud agent network access, MCP/apps,
  and local command execution are distinct capabilities with separate
  permissions or workspace/provider controls.
- **Verification:** Codex can run available project commands when the selected
  surface, environment, installed tools, and permissions allow. A passing test
  verifies only its checked criteria; command execution or code review does not
  prove complete correctness or security.

## Research Completeness Audit

The requested Product, Engineering, Academic/Evidence, and Governance topics
were checked against the approved `plan/MASTER_PLAN.md` and
`plan/INVARIANTS.md`. All topic areas have evidence or an explicitly bounded
unknown; there is no uncovered Story-critical topic. Target-workspace and
project-demo questions remain open and are not treated as research coverage.

| Area | Coverage checked | Evidence location | Audit result |
|------|-----------------|-------------------|--------------|
| Product | ChatGPT/Codex roles and interfaces; repository exploration, file changes, command execution, build/test, Local/Cloud; `AGENTS.md` and nested scope; Skills, Subagents, parallel agents, Memory/persistent context; Tools/MCP; Git/Worktree; verification/review; automation | `product/` topic pages and `product/CAPABILITY_MATRIX.md`; `SOURCES.md` | COVERED; target surface/account availability remains open under OQ-003/OQ-005. |
| Engineering | Prompt, Context, Harness, Loop, AI-Native Development; human checkpoints; Harness Technical Debt; Memory lifecycle; Context isolation; overengineering | `engineering/`; `TERMINOLOGY.md`; `reports/Agent 성능과 시스템 신뢰성.md`; `research_notes/Agent 성능과 시스템 신뢰성/`; `research_notes/AI Native 개발 운영 근거/` | COVERED; operational terminology remains provisional under OQ-011. |
| Academic / Evidence | Lost in the Middle, long context, agent evaluation, coding-agent benchmarks, regression/evaluation loops | `research/`; linked original-source records in `SOURCES.md`; detailed `research_notes/` and `reports/` | COVERED WITH SCOPE; findings remain tied to studied tasks, models, scaffolds, and evaluation conditions. |
| Governance | Fact vs Teaching Model; Product Feature vs Engineering Concept; Claim and Source registries; contradictions; gaps; Story dependencies; capability matrix | `CLAIMS.md`; `TERMINOLOGY.md`; `FEATURE_CONCEPT_MATRIX.md`; `sources/SOURCES.md`; `CONTRADICTIONS.md`; `RESEARCH_GAPS.md`; `STORY_DEPENDENCIES.md`; `product/CAPABILITY_MATRIX.md` | COVERED. |

The final file/link audit found all 10 required core files, 74 Source Records,
no missing `SRC-*` references in `references/`, and no broken relative Markdown
links in the `references/` tree. Source Tiers: Tier 1 = 44, Tier 2 = 28,
Tier 3 = 2.

## Story-Critical Findings

- The approved training remains a six-hour developer program with the
  `Chatbot → Prompt → Context → Harness → Loop → AI-Native Development` story
  and problem-before-solution transitions.
- Product features and durable Engineering Insights are separate. The core
  insights can survive unavailable Skills, Subagents, Memory, Cloud, or other
  volatile features through the fallbacks in
  [Story Dependencies](STORY_DEPENDENCIES.md).
- Long-context and benchmark findings are task-, model-, scaffold-, resource-,
  and scoring-specific. Historic findings are not direct evidence of current
  Codex behavior.
- Harness and Loop wording is this course's operational usage, not a settled
  universal taxonomy. Loop means evidence-informed feedback and improvement,
  not automation alone. The candidate Harness wording remains partial under
  OQ-011.
- Verification requires evidence and bounded claims; one successful check is
  not a complete correctness guarantee.
- No active conflict with `plan/MASTER_PLAN.md` is recorded in the current
  Research Foundation. Source/version/scope disagreements remain documented in
  [Contradictions](CONTRADICTIONS.md).

## Story Compatibility Audit

This checks the approved narrative chain without changing it. “Product
dependency” identifies detail that may need the listed fallback; it does not
replace the core Engineering Insight. Claim IDs, supporting Source IDs, and
the detailed dependency records are in [Story Dependencies](STORY_DEPENDENCIES.md)
and the [Source Registry](sources/SOURCES.md).

| Stage | Research support | Conflict / boundary | Product dependency | Fallback |
|-------|-----------------|---------------------|--------------------|----------|
| Chatbot | Project Source of Truth defines the learner starting point; connector evidence scopes read/search behavior. | Learner prevalence is a course framing, not a measured industry-wide fact. | Low; a ChatGPT connector example is optional. | Labeled pasted-code example or diagram. |
| Prompt | Official prompting sources and the plan support task framing. | A clear prompt does not supply missing repository context or verification. | Low. | Static before/after prompt example. |
| Context | Long-context and repository evidence support selecting and retrieving relevant information. | No universal rule that longer Context always performs worse; current coding-agent behavior is not inferred from older QA studies. | Low. | Repository-level diagram or checked search example. |
| `AGENTS.md` | Official Codex docs support repository and nested instruction discovery. | This does not make `AGENTS.md` this project's Source of Truth or establish a complete instruction-authority hierarchy. | Medium; Codex-specific feature and target availability. | Static repository instruction example. |
| Context Separation | Product and project evidence distinguish prompt Context, Memory, `AGENTS.md`, Source of Truth, and external evidence. | Persistence, inheritance, and isolation differ by surface; they are not interchangeable. | Medium. | Diagram the layers using `plan/` and labeled evidence sources. |
| Skills | Official docs describe reusable workflow instructions/resources/scripts. | “Not needed for every repeated task” is a heuristic; target access is unverified. | High. | Static workflow or labeled diagram. |
| Subagents | Official docs describe separate agent threads; research identifies coordination and evidence-handoff costs. | Do not imply automatic filesystem/context isolation or that parallel work is always faster. | High. | Conceptual delegation diagram with handoff checks. |
| Memory | Official docs and project convention separate Memory from current Context and `plan/`. | Target account behavior and company policy are not established. | High. | Use checked-in project documents and a layer diagram. |
| Harness | Scaffold research and an OpenAI engineering case support system-level design examples. | Candidate course definition is not a universal taxonomy; OQ-011 remains open. | Low for the concept; specific feature demos are high-dependency. | Product-independent system diagram; keep wording provisional. |
| Harness Technical Debt | Bounded cases support stale rules, context, tools, and maintenance cost as an analogy. | No universal feature term or numeric threshold was established. | Low. | Labeled analogy without invented metrics or history. |
| Loop | Official eval/improvement examples and agent-evaluation research support evidence-informed feedback. | Automation alone is not a Loop; this project has no observed recurring failure or proven improvement. | Medium for live examples. | Labeled illustrative loop; do not claim observed results. |
| AI-Native Development | Project framing and varied industry/academic uses support a bounded teaching model. | Not a consensus maturity standard or claim that developer skills are obsolete. | Low. | Label as this course's synthesis/model. |

No Research result requires a change to the MASTER_PLAN Story. Product-specific
presentation can use these fallbacks without changing the protected sequence.

## High-Risk Claims

| Claim | Current state | Required handling |
| --- | --- | --- |
| CLM-0005 — `AGENTS.md` support | VERIFIED from official documentation | Recheck current wording and nested-file scope before final product slides. |
| CLM-0006 — Skills as reusable workflows | PARTIAL; official feature and project heuristic are combined | Separate documented Skill behavior from the heuristic that a Skill is not required for every repeated task. |
| CLM-0007 — Subagents | Product behavior documented; target availability unresolved | Keep the official scope and costs; use the conceptual fallback if unavailable. |
| CLM-0008 — Memory layers | Product behavior documented; target availability unresolved | Keep product Memory separate from current Context and project Source of Truth. |
| CLM-0030 — Harness Engineering course definition | PARTIAL; candidate wording only, OQ-011 remains open | Present system/scaffold evidence without finalizing the term wording. |
| CLM-0012, CLM-0013, CLM-0026 — Security and data use | Product data handling is documented; company allowance is UNVERIFIED | Do not imply OpenAI policy grants permission to use company/customer data. Follow OQ-014. |
| CLM-0018–CLM-0020 — Benchmarks and evaluation | VERIFIED only within source conditions | Name model, task, scaffold, resources, scoring, and run conditions where material. |
| CLM-0025 — Target workspace feature availability | UNVERIFIED | Do not promise a feature Demo before OQ-003/OQ-005 are resolved. |
| CLM-0027 — Candidate failures observed | UNVERIFIED | Do not present candidates A–I as events that occurred in this project. |
| CLM-0028 — Unqualified SWE-Bench Pro claims | CONFLICTED | Do not use an unqualified score; retain version/source qualification from CON-0001. |
| CLM-0029 — Verification command capability | VERIFIED WITH CONDITIONS | State the environment and what the check establishes; retain its fallback. |

## High-Volatility Product Features

Recheck surface names and UI paths; Desktop/CLI/IDE/Cloud availability; Skills,
Subagents, Memory, MCP, Apps/Plugins, worktree and automation rollout; plan,
role, region, and admin controls; security/data handling and retention; usage or
pricing; and current benchmark leaderboard status. Recheck against the target
surface/account where possible, not documentation alone.

## Unresolved Research Gaps

- [GAP-0001](RESEARCH_GAPS.md#gap-0001--demo-repository-domain-and-language): demo
  repository, domain, language, and project-specific verification tasks are not
  selected. Related OQ-001/OQ-007.
- [GAP-0002](RESEARCH_GAPS.md#gap-0002--live-demo-surface-and-target-account-availability):
  target Codex surface, OS, account, workspace, role, and network are unverified.
  Related OQ-003/OQ-005.
- [GAP-0003](RESEARCH_GAPS.md#gap-0003--company-security-and-data-allowance):
  company policy for internal/customer data and integrations is not provided.
  Related OQ-014.
- [GAP-0004](RESEARCH_GAPS.md#gap-0004--product-specific-skillsubagentmemoryharness-demo-choices):
  no product-specific Skills/Subagent/Memory/Harness Demo is selected. Related
  OQ-008.
- [GAP-0005](RESEARCH_GAPS.md#gap-0005--evaluation-criteria-and-repeated-failure-evidence):
  there is no observed recurring project failure or project-specific eval
  threshold. Related OQ-007/OQ-009.
- [GAP-0006](RESEARCH_GAPS.md#gap-0006--exact-codex-artifact-retention-across-every-surface):
  a complete per-artifact retention map is not established. Related OQ-005/OQ-014.
- [GAP-0007](RESEARCH_GAPS.md#gap-0007--final-operational-wording-for-ai-native-and-loop-engineering):
  final Storyline wording for AI-Native and Loop remains open. Related OQ-011.
- OQ-006: the research scope for Lost in the Middle and long-context claims is
  recorded, but the exact final teaching wording remains open.
- OQ-002: real cases and permission to use them remain unconfirmed.

Unknowns remain unknown; the presence of a Gap does not authorize an assumption
or indefinite search.

## Decisions Required

No new Decision is created by this snapshot. Existing questions remain in
`plan/DECISIONS.md`; resolve them in their stated phase and do not mark them
ACCEPTED from Research alone:

- OQ-001/OQ-002/OQ-014: repository/case choice and data-use permission.
- OQ-003/OQ-005: target product surface, account, workspace, and feature access.
- OQ-006/OQ-011: final research-backed wording and Harness/Loop term usage.
- OQ-007/OQ-008/OQ-009: project checks, selected product Demo, and Loop criteria.

## Final Audit Result

- **STEP 03:** COMPLETE WITH GAPS. Research coverage and required artifacts are
  complete; remaining items are explicit target-environment, company-policy,
  and final-wording questions with fallbacks.
- **Claims:** 30 total — VERIFIED 23, PARTIAL 2, UNVERIFIED 4, CONFLICTED 1.
  The 13 P0 claims contain 11 VERIFIED and 2 PARTIAL entries; none is hidden,
  and each has a fallback in `CLAIMS.md`.
- **Capability matrix:** behavior classifications remain `YES` or `PARTIAL`;
  demo candidates are `YES` or `MAYBE`. Test is `MAYBE` pending the repository
  and verification-command choices in OQ-001/OQ-007.
- **Story impact:** KEEP AS-IS. No Research finding requires a MASTER_PLAN or
  Invariant change; use bounded wording and the listed fallbacks for
  product-dependent details.
- **STEP 04 readiness:** READY to begin Curriculum planning with the open gates
  visible. Resolve OQ-004 during Curriculum design; keep research-dependent
  wording provisional under OQ-006/OQ-011; confirm product/account details
  under OQ-003/OQ-005; do not make company-specific data-use claims before
  OQ-014 is resolved. This readiness result does not start STEP 04.

No MASTER_PLAN or Invariant change is proposed by this checkpoint.

## Recommended Recheck

1. Before Demo architecture and rehearsal, confirm OQ-003/OQ-005 against the
   actual training account, interface, OS, role, and permissions.
2. Before using internal/customer material or integrations, obtain the applicable
   company decision for OQ-014; otherwise use public/sample material.
3. Before fixing verification or Loop examples, select the repository and
   commands, preserve real failure evidence, and define criteria without
   inventing thresholds.
4. Close P0 Claim gates and recheck high-volatility official product sources
   before final Slide content and Demo capture.
5. Revisit P2/P3 evidence only when a specific Curriculum, Demo, or high-risk
   Slide claim depends on it; keep historic study conditions attached.
