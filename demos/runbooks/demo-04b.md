# DEMO-04B — Observed Training Production Meta Case

Planning Status: APPROVED SUPPORTING META ROLE

Final Validation Status: VISUAL ONLY — local static fallback reviewed; no current-product run was performed.

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

8m: S67 2m + S68 4m + S69 Demo 2m.

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

Default is the offline static presentation. Open: `production/preview/full/S67.png`, `production/preview/full/S68.png`, `production/preview/full/S69.png`

Show S67–S69; preserve the report/stderr discrepancy as unresolved.

Fallback readiness: READY for local static slide-render playback only. Raw Trial source captures are not implied or created.

Captured Alternative provenance: DEC-0033 integrated-deck static render; file identity and fallback paths rechecked on 2026-10-21. See `FALLBACK_MANIFEST.md` and `production/evaluation/FINAL_HANDOFF.md` for the exact PPTX hash and recorded rendering scope. This file check is not a target-PC playback test, raw terminal screenshot, recording, new Trial, or rehearsal.

Fallback Threshold: Static fallback is the default and starts immediately. Live/Hybrid is disabled. A Live cutoff remains TBD until a timed rehearsal establishes it.

## Reset

Static playback is read-only and requires no reset. Any future Live reproduction must use a separate copy/worktree at the recorded commit; do not move main or tags.

## Transition

S69 → S70: follow-up records improved but remained partial.

## Evidence

TRIAL-006/007/008, DEC-0016/0021, plan/DEMO_MATRIX.md.

## Do Not Claim

No Product state change, MCP task-result use, full environment inventory, Skill-caused improvement, or before/after quality gain.

## Trial / Run Record

No new Trial or product execution was performed for this runbook. Local work checked the existing static fallback only. The recorded source remains the authority for historical dates, exact prompts, and environment details; unspecified fields are not reconstructed here.

Windows PowerPoint, target account/product behavior, timed instructor operation, and room projection remain UNVERIFIED.
