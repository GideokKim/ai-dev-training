# Story Dependencies

> 이 문서는 교육 Story가 특정 제품 기능 하나에 종속되지 않도록 관리한다. Unsupported feature는 사실처럼 말하지 않고, 아래 fallback 순서로 같은 insight를 보존한다.

## Fallback Priority

1. Same insight via current official feature.
2. Repository-level pattern.
3. Product-independent concept demo.
4. Screenshot/diagram.
5. Omit detail only if core Story remains.

## Stage Dependency Matrix

| Stage | Required Claim / Capability | Evidence Status | Risk | Fallback |
|-------|-----------------------------|-----------------|------|----------|
| Chatbot | Source of Truth frames many learners as starting from chatbot/pasted-code use; product fact only supports GitHub connector read/search boundary, not the learner baseline itself. Related: CLM-0004; SRC-0001, SRC-0133. | VERIFIED | MEDIUM | Use product-independent pasted-code example or diagram if target connector is unavailable. |
| Prompt Engineering | Official Prompt Engineering definition is source-scoped; training candidate frames individual task Goal/Context/Constraints/expected behavior/result conditions, while broader Goal/Context/Constraints/Process/Verification is a checklist. Related: SRC-0144, SRC-0114, SRC-0001. | PARTIAL | MEDIUM | Use static prompt before/after example and label it illustrative. |
| Context Engineering | Larger context alone does not guarantee better repository understanding; context must be selected and routed. Related: CLM-0014, CLM-0015; SRC-0201, SRC-0202, SRC-0203, SRC-0204, SRC-0110, SRC-0113, SRC-0133. | VERIFIED | HIGH | Use repository-level pattern or diagram if live repository context is unavailable. |
| AGENTS.md | Codex supports repository-level/nested `AGENTS.md`; this project’s `plan/` remains Source of Truth. Related: CLM-0003, CLM-0005; SRC-0110, SRC-0001, SRC-0002. | VERIFIED | HIGH | Explain with repository-level static file example. |
| Context Separation | Current Context, Memory, AGENTS.md, project Source of Truth, and external evidence are different layers. Related: CLM-0003, CLM-0008; SRC-0110, SRC-0113, SRC-0001, SRC-0002. | VERIFIED | HIGH | Use diagram separating `plan/`, `AGENTS.md`, Memory, prompt, and tool outputs. |
| Skills | Skills are documented reusable workflows and use progressive disclosure, but target availability and demo value are unresolved. Related: CLM-0006, CLM-0025; SRC-0111, SRC-0117, SRC-0130, SRC-0131. | PARTIAL | HIGH | Use screenshot/diagram or omit feature detail while preserving reusable-workflow insight. |
| Subagents | Subagents are documented as separate agent threads and can raise token/coordination/write-conflict costs. Related: CLM-0007, CLM-0025; SRC-0112, SRC-0219, SRC-0130, SRC-0131. | VERIFIED | HIGH | Use conceptual delegation diagram if target workspace lacks support. |
| Memory | Codex Memory is documented, but target account/workspace/admin behavior remains unresolved. Related: CLM-0008, CLM-0025; SRC-0113, SRC-0001, SRC-0002, SRC-0130, SRC-0131. | PARTIAL | HIGH | Explain Memory as concept and keep project Source of Truth in `plan/`. |
| Harness Engineering | Model capability and Harness/System design are complementary; the candidate course definition remains subject to OQ-011 and does not make Harness a universal taxonomy or a cure for every model limit. Related: CLM-0016, CLM-0017, CLM-0022, CLM-0030; SRC-0206, SRC-0137, SRC-0218, SRC-0001. | PARTIAL | HIGH | Use a product-independent diagram of prompt/context/tools/checks; keep the term definition provisional until OQ-011 is resolved. |
| Harness Technical Debt | Stale rules, oversized/poorly maintained instruction context, and harness maintenance costs are supported as bounded case/analogy, not universal official term. Related: CLM-0022; SRC-0137, SRC-0218, SRC-0001. | PARTIAL | HIGH | Present as bounded analogy and avoid numeric thresholds. |
| Loop Engineering | Loop means feedback-driven improvement, not automation alone; project-specific repeated failure/eval criteria are still unresolved. Related: CLM-0020, CLM-0021; SRC-0140, SRC-0222, SRC-0223, SRC-0224, SRC-0001. | PARTIAL | HIGH | Use diagram or recorded illustrative loop until OQ-009 has evidence. |
| AI-Native Development | AI-Native is this training’s operational teaching model, not universal consensus or developer replacement. Related: CLM-0023, CLM-0024; SRC-0136, SRC-0225, SRC-0226, SRC-0213, SRC-0216, SRC-0217, SRC-0001. | VERIFIED | HIGH | Use final synthesis slide with explicit teaching-model label. |
| Repository-aware Codex work | Codex can explore/read/edit repository files and run commands subject to surface and permissions. Related: CLM-0009, CLM-0010; SRC-0101, SRC-0103, SRC-0104, SRC-0105, SRC-0106. | PARTIAL | HIGH | Use current official Codex surface; if unavailable, use captured diff/log/screenshot from checked setup. |
| Tools and execution | Web search, shell network, Cloud internet access, MCP/plugins/hooks/automation are separate layers. Related: CLM-0011; SRC-0115, SRC-0116, SRC-0117, SRC-0118, SRC-0119, SRC-0120, SRC-0124, SRC-0141. | PARTIAL | MEDIUM | Use official docs screenshots or diagram; avoid external tool demo if OQ-014 is unresolved. |
| Verification | Codex can run available project checks when the surface, environment, and permissions allow; a passing check or review output does not prove full correctness/security. Related: CLM-0020, CLM-0029; SRC-0103, SRC-0105, SRC-0139, SRC-0140, SRC-0212. | PARTIAL | HIGH | Use a product-independent test/diff review example and label limits; do not claim a command pass proves full correctness. |
| Before/After evidence | Benchmark/eval/demo claims must scope task, model, scaffold, resource, scoring, and run conditions. Related: CLM-0018, CLM-0019, CLM-0020; SRC-0206, SRC-0207, SRC-0212, SRC-0220, SRC-0213, SRC-0214. | VERIFIED | HIGH | Use screenshot/diagram/log with exact labels; avoid productivity claims. |
| Product security and workspace policy | OpenAI product data handling facts are supported; company allowance is not provided. Related: CLM-0012, CLM-0013, CLM-0026; SRC-0125, SRC-0126, SRC-0127, SRC-0128, SRC-0129, SRC-0131, SRC-0132. | PARTIAL | HIGH | Use public/sample repository and mark OQ-014 unresolved. |
| Demo honesty | Candidate failures are candidates unless actually observed or reproduced. Related: CLM-0027; SRC-0003. | UNVERIFIED | HIGH | Use labeled candidate example, screenshot, or omit failure detail if it would imply false history. |

## Notes

- The core Story must not depend on one volatile product feature such as a specific button, workspace setting, model, Memory behavior, Subagent availability, or Cloud account entitlement.
- Product facts checked as of 2026-09-25 should be rechecked before final demo and slide production.
- If a fallback reaches step 5, omit only the product detail. Do not omit the core insight unless it conflicts with `plan/MASTER_PLAN.md` or `plan/INVARIANTS.md`.
