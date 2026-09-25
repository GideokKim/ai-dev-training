# Contradictions

## CON-0001 — SWE-Bench Pro source and version disagreement

Topic:
Coding-agent benchmark interpretation.

Source A:
SRC-0209

Claim:
Scale leaderboard/methodology presents SWE-Bench Pro results and leaderboard claims.

Source B:
SRC-0143, SRC-0210

Claim:
OpenAI audit/recommendation material and later SWE-Bench Pro Verified v2 require benchmark claims to be revised or version-scoped.

Conflict:
A single “SWE-Bench Pro score” can refer to different benchmark versions, curation states, and audit conclusions.

Possible Explanation:
Benchmark version changes, leaderboard methodology differences, audit findings, and evolving dataset quality controls.

Impact on Training:
Do not cite SWE-Bench Pro as a simple product ranking. If used, state version, source, date, scaffold/model conditions, and known caveats.

Resolution:
UNRESOLVED

Decision Needed:
NO

Related Decision:
None.

## CON-0002 — “Codex app” versus “ChatGPT desktop app” naming

Topic:
Product surface naming.

Source A:
SRC-0101

Claim:
OpenAI product material uses Codex as a coding agent product across ChatGPT, IDE, and terminal.

Source B:
SRC-0102, SRC-0134

Claim:
Current docs describe ChatGPT desktop app and distinguish ChatGPT Work/Codex surfaces.

Conflict:
Older or marketing language may say “Codex app,” while current surface may appear inside ChatGPT desktop app.

Possible Explanation:
Product migration and UI naming changes over time.

Impact on Training:
Use generic surface labels and verify screenshots immediately before slide/demo production.

Resolution:
RESOLVED

Decision Needed:
NO

Related Decision:
None.

## CON-0003 — Business data residency versus Enterprise/Edu residency scope

Topic:
Residency and workspace policy.

Source A:
SRC-0127

Claim:
Business data residency rollout is gradual and non-US selection still permits some US safety/abuse storage and limited-time prompt/response copies.

Source B:
SRC-0126

Claim:
Enterprise/Edu data residency and inference residency have eligible-region and feature-scope rules, including features outside scope.

Conflict:
A generic “ChatGPT data residency” statement can hide plan-specific differences and unsupported features.

Possible Explanation:
Different plans, features, and residency types.

Impact on Training:
Separate Business, Enterprise/Edu, data residency, inference residency, retention, and training-use claims.

Resolution:
RESOLVED

Decision Needed:
NO

Related Decision:
None.

No active contradiction with `plan/MASTER_PLAN.md` was found. The conflicts above are source/version/scope conflicts that require wording caution, not Story changes.
