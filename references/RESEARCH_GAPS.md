# Research Gaps

## GAP-0001 — Demo repository, domain, and language

Question:
Which software repository, language, and domain should the continuous demo use?

Why It Matters:
The verification commands, failure fixtures, and Before/After comparisons depend on the repository.

Attempted Sources:
SRC-0001, SRC-0003, existing STEP 03 reports.

Current Evidence:
MASTER_PLAN prefers a continuous demo repository, but the specific project is unresolved.

Confidence:
NONE

Risk:
Choosing references or demo claims before the repo exists can create fake failures or irrelevant verification.

Fallback:
Use product-independent conceptual examples until repository is selected.

Needs User Input:
YES

Related OQ:
OQ-001, OQ-007.

## GAP-0002 — Live demo surface and target account availability

Question:
Which Codex surface, OS, account, workspace, role, and network will be available for the training demo?

Why It Matters:
Desktop, CLI, IDE, Cloud, Skills, Subagents, Memory, MCP, and plugin features vary by plan/admin/role/rollout.

Attempted Sources:
SRC-0102, SRC-0103, SRC-0104, SRC-0105, SRC-0130, SRC-0131.

Current Evidence:
Current product docs describe capabilities, but target account/workspace availability is unverified.

Confidence:
LOW

Risk:
Slides or demo scripts may depend on unavailable features.

Fallback:
Use screenshots/recordings/logs accurately labeled with checked date and product surface.

Needs User Input:
YES

Related OQ:
OQ-003, OQ-005.

## GAP-0003 — Company security and data allowance

Question:
What company policy permits or forbids using internal source code, customer data, credentials, private docs, GitHub/GitLab integrations, Apps/MCP, and Cloud execution?

Why It Matters:
OpenAI product policy does not authorize company data use.

Attempted Sources:
SRC-0125, SRC-0126, SRC-0127, SRC-0128, SRC-0129, SRC-0131, SRC-0132.

Current Evidence:
Product data handling and admin controls are documented. Company policy is not provided.

Confidence:
NONE

Risk:
Training could model unsafe or unauthorized workflows.

Fallback:
Use public/sample repository and product-independent examples; label OQ-014 unresolved.

Needs User Input:
YES

Related OQ:
OQ-014.

## GAP-0004 — Product-specific Skill/Subagent/Memory/Harness demo choices

Question:
Which advanced configuration features should appear in demo, if any?

Why It Matters:
Too many features would turn the course into a product tour and violate problem-driven evolution.

Attempted Sources:
SRC-0111, SRC-0112, SRC-0113, SRC-0137, SRC-0001, SRC-0003.

Current Evidence:
Features are documented, but the demo should introduce them only when observed friction warrants them.

Confidence:
LOW

Risk:
Overengineering, instruction bloat, and unverified availability.

Fallback:
Keep advanced features as discussion topics or optional appendix until a real demo need appears.

Needs User Input:
NO

Related OQ:
OQ-008.

## GAP-0005 — Evaluation criteria and repeated failure evidence

Question:
What exact failure, metric, and before/after evidence will prove the Loop Engineering story?

Why It Matters:
Loop Engineering requires feedback-driven improvement, not a single anecdote.

Attempted Sources:
SRC-0139, SRC-0140, SRC-0212, SRC-0211, SRC-0224.

Current Evidence:
Evaluation methods are documented, but no project-specific recurring failure has been observed.

Confidence:
LOW

Risk:
Claiming causal improvement from an illustrative demo.

Fallback:
Label before/after material as illustrative and avoid performance/productivity claims.

Needs User Input:
NO

Related OQ:
OQ-009, OQ-007.

## GAP-0006 — Exact Codex artifact retention across every surface

Question:
What is the exact retention/deletion behavior for every Codex task artifact, local transcript, cloud cache, plugin log, external service record, and connector index?

Why It Matters:
Security training must not collapse all retention into one “30 days” rule.

Attempted Sources:
SRC-0126, SRC-0127, SRC-0128, SRC-0129, SRC-0131, SRC-0132.

Current Evidence:
ChatGPT chat/file retention and selected data residency/data handling rules are documented, but a complete per-artifact Codex retention map was not found in existing notes.

Confidence:
LOW

Risk:
Overstating deletion guarantees.

Fallback:
State only directly sourced retention facts and mark remaining details as workspace/vendor-specific.

Needs User Input:
NO

Related OQ:
OQ-005, OQ-014.

## GAP-0007 — Final operational wording for “AI-Native” and “Loop Engineering”

Question:
What final terminology should the course use so it preserves the Story without implying industry consensus?

Why It Matters:
External sources use overlapping terms with different scopes.

Attempted Sources:
SRC-0136, SRC-0225, SRC-0226, SRC-0227, SRC-0001.

Current Evidence:
The bounded operational definition is clear enough for research, but final storyline wording remains a material-design decision.

Confidence:
LOW

Risk:
Slides may make AI-Native sound like a universal maturity destination.

Fallback:
Label it as “이 교육에서의 operational usage” and keep Goal/Judgment/Verification/Responsibility as teaching model.

Needs User Input:
NO

Related OQ:
OQ-011.
