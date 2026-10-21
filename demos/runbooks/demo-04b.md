# DEMO-04B — Observed Training Production Meta Case

Planning Status: APPROVED SUPPORTING META ROLE

Final Validation Status: READY — DEC-0038 local static files, displayed IDs, dimensions, render parity and SHA-256 checked. Target Windows/product/account/room/rehearsal remain UNVERIFIED. No new Trial was run.

Story Beat: BEAT-058–059

Related Invariants: INV-DEMO-003, INV-DEMO-004, INV-VERIFY-001

Act: ACT 4

Delivery Mode: CAPTURED / VISUAL; supporting Meta Case

## Purpose

Show how observed Trial evidence changed Training Production evaluation/reporting, separately from Product code.

## Audience Question

관찰된 Trial evidence가 교육 제작의 평가·보고를 어떻게 바꾸었을까?

## Starting Repository State

N/A — no Demo Product State

## Environment

Playback uses local offline PNGs rendered from the current integrated deck. The target Windows PC, education Codex account/surface, permissions, and room are not selected or verified. Historical Trial environments apply only to their recorded runs.

Historical source scope: TRIAL-006/007/008, DEC-0016/0021, plan/DEMO_MATRIX.md.

## Repository Commit / Tag

N/A — do not assign a Product State to Meta history.

## Working Directory

`production/preview/full/` — open only the local PNGs listed below. The Demo repository remains read-only and is not used for playback.

## Prompt

N/A — this runbook does not invoke an Agent. Do not replay historical prompts. Any future Live path needs a separately verified target surface and an approved exact prompt.

## Expected Agent Behavior

No Agent is run in the default path. A future Live run must accept reasonable alternate paths and judge only the recorded success criteria; do not script an answer.

## Watch For

Observed Meta labels; bounded result validity vs partial Prompt attribution; retain TRIAL-007 report/stderr discrepancy.

## Success Criteria

Distinguish confirmed, partial, and unknown evidence and identify reporting policy as the change.

## Expected Output

Existing Training Production timeline and claim audit.

## Verification

Open the listed PNGs offline and confirm Slide ID, label, and readable content. Every fallback is a 1920×1080 static render of the integrated PPTX, not a raw terminal screenshot, recording, or new Trial. Check SHA-256 in `FALLBACK_MANIFEST.md`. This validates only local static playback.

Evidence limit: No Product state change, MCP task-result use, full environment inventory, Skill-caused improvement, or before/after quality gain.

## Estimated Time

8m: S69 2m + S70 4m + S71 Demo 2m.

Phase plan: 2m timeline → 4m attribution → 2m reporting boundary.

Time Risk: MEDIUM

Execution Risk: LOW

Product Volatility: LOW

## Current-State Recheck

UNVERIFIED. The target product surface/account has not been checked. Before any Live/Hybrid use, record the selected account/surface, current official source, date, observed behavior, permission mode, and limits.

Live Value: LOW

Known Variance: account, product surface, permissions, model, operating system, and runtime may differ from historical records. Static playback avoids these dependencies but does not validate them.

## Failure Modes

Product variance: do not force the expected path. Environment failure: stop and use the listed fallback. Missing/inconsistent source: stop the claim and report it. Story mismatch: mark the slot for review. Do not repair the Demo repo or improvise evidence.

## Fallback

Default is the offline static presentation. Open: `production/preview/full/S69.png`, `production/preview/full/S70.png`, `production/preview/full/S71.png`

Show S69–S71; preserve the report/stderr discrepancy as unresolved.

Fallback readiness: UNVERIFIED for DEC-0038 until the new files, displayed IDs, dimensions and hashes are checked. The approved static fallback plan remains; raw Trial captures are not implied.

Captured Alternative provenance: DEC-0038 current slide numbering. Check final PPTX/PNG identity and fallback hashes in FALLBACK_MANIFEST.md and production/evaluation/PROMPT_TIMELINE_REVISION.md after rendering. DEC-0033–0037 records remain historical. This is not a target-PC playback test, raw terminal screenshot, recording, new Trial or rehearsal.

Fallback Threshold: Static fallback is the default and starts immediately. Live/Hybrid is disabled. A Live cutoff remains TBD until a timed rehearsal establishes it.

## Reset

Static playback is read-only and requires no reset. Any future Live reproduction must use a separate copy/worktree at the recorded commit; do not move main or tags.

## Transition

S71 → S72: follow-up records improved but remained partial.

## Evidence

TRIAL-006/007/008, DEC-0016/0021, plan/DEMO_MATRIX.md.

## Do Not Claim

No Product state change, MCP task-result use, full environment inventory, Skill-caused improvement, or before/after quality gain.

## Trial / Run Record

No new Trial or product execution was performed for this runbook. Current migration aligns the static plan; the DEC-0038 local file/path/hash checks are complete. Earlier static checks remain historical evidence, and the current READY scope covers local static files only. The recorded source remains the authority for historical dates, exact prompts, and environment details; unspecified fields are not reconstructed here.

Windows PowerPoint, target account/product behavior, timed instructor operation, and room projection remain UNVERIFIED.
