# DEMO-02 — Reusable Project Context

> Current numbering update — DEC-0043: 90-slide references are aligned. The previous validation/status/hash text is retained as release history. Finalized90-slide files, displayed IDs, render/Notes parity and current file hashes were checked locally under DEC-0043; no Trial is added. The validation covers static fallback only. Windows/product/account/room/rehearsal remain UNVERIFIED.

Planning Status: CANDIDATE — Anchor candidate

Final Validation Status: READY — DEC-0043 local static paths, displayed IDs, dimensions, render/Notes parity and file hashes checked. Windows/product/account/room/rehearsal remain UNVERIFIED. No new Trial was run.

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

8m: S33 4m + S34 4m; S32 is setup outside this slot.

Phase plan: S33 4m → S34 4m.

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

Default is the offline static presentation. Open: `production/preview/full/S32.png`, `production/preview/full/S33.png`, `production/preview/full/S34.png`

Show static S32–S34; explicitly retain the global-Skills attribution boundary.

Fallback readiness: UNVERIFIED for DEC-0038 until the new files, displayed IDs, dimensions and hashes are checked. The approved static fallback plan remains; raw Trial captures are not implied.

Captured Alternative provenance: DEC-0038 current slide numbering. Check final PPTX/PNG identity and fallback hashes in FALLBACK_MANIFEST.md and production/evaluation/PROMPT_TIMELINE_REVISION.md after rendering. DEC-0033–0037 records remain historical. This is not a target-PC playback test, raw terminal screenshot, recording, new Trial or rehearsal.

Fallback Threshold: Static fallback is the default and starts immediately. Live/Hybrid is disabled. A Live cutoff remains TBD until a timed rehearsal establishes it.

## Reset

Static playback is read-only and requires no reset. Any future Live reproduction must use a separate copy/worktree at the recorded commit; do not move main or tags.

## Transition

S34 → S35: separate task request from Project context.

## Evidence

TRIAL-003; STATE-00-FIXED/STATE-01; plan/DEMO_MATRIX.md.

## Do Not Claim

Does not prove AGENTS.md alone caused the result or current Desktop retrieval.

## Trial / Run Record

No new Trial or product execution was performed for this runbook. Current migration aligns the static plan; the DEC-0038 local file/path/hash checks are complete. Earlier static checks remain historical evidence, and the current READY scope covers local static files only. The recorded source remains the authority for historical dates, exact prompts, and environment details; unspecified fields are not reconstructed here.

Windows PowerPoint, target account/product behavior, timed instructor operation, and room projection remain UNVERIFIED.
