# DEMO-02 — Reusable Project Context

Planning Status: CANDIDATE — Anchor candidate

Final Validation Status: READY — DEC-0036 local static files, displayed IDs, dimensions and SHA-256 were checked after final rendering. Current-product, target Windows/room and rehearsal gates remain UNVERIFIED; no new Trial was run.

Story Beat: BEAT-008–010

Related Invariants: INV-DEMO-001, INV-DEMO-004, INV-VERIFY-001

Act: ACT 2

Delivery Mode: CAPTURED static fallback; proposed HYBRID disabled

## Purpose

Connect repeated Project facts in Prompts to a bounded first use of repository context.

## Audience Question

왜 같은 Project 사실을 매 Task마다 반복해야 할까?

## Starting Repository State

STATE-00-FIXED → STATE-01

## Environment

Playback uses local offline PNGs rendered from the current integrated deck. The target Windows PC, education Codex account/surface, permissions, and room are not selected or verified. Historical Trial environments apply only to their recorded runs.

Historical source scope: TRIAL-003; STATE-00-FIXED/STATE-01; plan/DEMO_MATRIX.md.

## Repository Commit / Tag

STATE-00-FIXED `6dab644ea53e899e6d65b70bc4383bd2901ded89`; STATE-01 `14baf81746a981d7cd96b7a014ea06f28c3dd6b4`.

## Working Directory

`production/preview/full/` — open only the local PNGs listed below. The Demo repository remains read-only and is not used for playback.

## Prompt

N/A — this runbook does not invoke an Agent. Do not replay historical prompts. Any future Live path needs a separately verified target surface and an approved exact prompt.

## Expected Agent Behavior

No Agent is run in the default path. A future Live run must accept reasonable alternate paths and judge only the recorded success criteria; do not script an answer.

## Watch For

State guidance and one observed documentation task; other global Skills also ran.

## Success Criteria

Separate task Prompt from stable Project context and keep causal attribution bounded.

## Expected Output

Approved state and trial summary; no replay.

## Verification

Open the listed PNGs offline and confirm Slide ID, label, and readable content. Every fallback is a 1920×1080 static render of the integrated PPTX, not a raw terminal screenshot, recording, or new Trial. Check SHA-256 in `FALLBACK_MANIFEST.md`. This validates only local static playback.

Evidence limit: Does not prove AGENTS.md alone caused the result or current Desktop retrieval.

## Estimated Time

8m: S24 4m + S25 4m; S23 is setup outside this slot.

Phase plan: S24 4m → S25 4m.

Time Risk: MEDIUM

Execution Risk: MEDIUM

Product Volatility: HIGH

## Current-State Recheck

UNVERIFIED. The target product surface/account has not been checked. Before any Live/Hybrid use, record the selected account/surface, current official source, date, observed behavior, permission mode, and limits.

Live Value: HIGH

Known Variance: account, product surface, permissions, model, operating system, and runtime may differ from historical records. Static playback avoids these dependencies but does not validate them.

## Failure Modes

Product variance: do not force the expected path. Environment failure: stop and use the listed fallback. Missing/inconsistent source: stop the claim and report it. Story mismatch: mark the slot for review. Do not repair the Demo repo or improvise evidence.

## Fallback

Default is the offline static presentation. Open: `production/preview/full/S23.png`, `production/preview/full/S24.png`, `production/preview/full/S25.png`

Show static S23–S25; explicitly retain the global-Skills attribution boundary.

Fallback readiness: UNVERIFIED for the DEC-0036 re-render until local file identity and playback paths are rechecked. The approved static fallback plan is preserved; raw Trial captures are not implied or created.

Captured Alternative provenance: DEC-0036 current slide numbering. Post-migration PPTX/PNG identity and fallback hashes must be checked in FALLBACK_MANIFEST.md and production/evaluation/CODEX_ENTRY_INSERTION.md. DEC-0033/DEC-0035 rendering records remain historical evidence. This alignment is not a target-PC playback test, raw terminal screenshot, recording, new Trial, or rehearsal.

Fallback Threshold: Static fallback is the default and starts immediately. Live/Hybrid is disabled. A Live cutoff remains TBD until a timed rehearsal establishes it.

## Reset

Static playback is read-only and requires no reset. Any future Live reproduction must use a separate copy/worktree at the recorded commit; do not move main or tags.

## Transition

S25 → S26: separate task request from Project context.

## Evidence

TRIAL-003; STATE-00-FIXED/STATE-01; plan/DEMO_MATRIX.md.

## Do Not Claim

Does not prove AGENTS.md alone caused the result or current Desktop retrieval.

## Trial / Run Record

No new Trial or product execution was performed for this runbook. Local work checked the existing static fallback only. The recorded source remains the authority for historical dates, exact prompts, and environment details; unspecified fields are not reconstructed here.

Windows PowerPoint, target account/product behavior, timed instructor operation, and room projection remain UNVERIFIED.
