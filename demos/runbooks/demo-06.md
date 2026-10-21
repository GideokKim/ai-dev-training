# DEMO-06 — Context Relevance and Routing

> Current numbering update — DEC-0043: 90-slide references are aligned. The previous validation/status/hash text is retained as release history. Finalized90-slide files, displayed IDs, render/Notes parity and current file hashes were checked locally under DEC-0043; no Trial is added. The validation covers static fallback only. Windows/product/account/room/rehearsal remain UNVERIFIED.

Planning Status: CANDIDATE — supporting visual/captured record

Final Validation Status: READY — DEC-0043 local static paths, displayed IDs, dimensions, render/Notes parity and file hashes checked. Windows/product/account/room/rehearsal remain UNVERIFIED. No new Trial was run.

Story Beat: BEAT-011–017

Related Invariants: INV-MATURITY-002, INV-MATURITY-004, INV-DEMO-004, INV-VERIFY-001

Act: ACT 2

Delivery Mode: VISUAL / CAPTURED static fallback

## Purpose

Compare useful Project context with task-specific detail access, while treating routing as a teaching model and bounded observation.

## Audience Question

모든 Project 사실을 core instructions에 넣어야 할까?

## Starting Repository State

STATE-01 → STATE-03

## Environment

Playback uses local offline PNGs rendered from the current integrated deck. The target Windows PC, education Codex account/surface, permissions, and room are not selected or verified. Historical Trial environments apply only to their recorded runs.

Historical source scope: TRIAL-004/005A/B; STATE-01/02/03; Demo Matrix.

## Repository Commit / Tag

STATE-01 `14baf81746a981d7cd96b7a014ea06f28c3dd6b4`; STATE-03 `f3e2e37b1454e28c5de4c44682ebd49378ebae4b`.

## Working Directory

`production/preview/full/` — open only the local PNGs listed below. The Demo repository remains read-only and is not used for playback.

## Prompt

N/A — this runbook does not invoke an Agent. Do not replay historical prompts. Any future Live path needs a separately verified target surface and an approved exact prompt.

## Expected Agent Behavior

No Agent is run in the default path. A future Live run must accept reasonable alternate paths and judge only the recorded success criteria; do not script an answer.

## Watch For

Task-dependent document access; S45 explicitly says perfect routing, token saving, and performance improvement were not measured.

## Success Criteria

Separate Core/Detail teaching model from observed access; avoid a full access-log dump.

## Expected Output

Static context map, state structure, and A/B access matrix.

## Verification

Open the listed PNGs offline and confirm Slide ID, label, and readable content. Every fallback is a 1920×1080 static render of the integrated PPTX, not a raw terminal screenshot, recording, or new Trial. Check SHA-256 in `FALLBACK_MANIFEST.md`. This validates only local static playback.

Evidence limit: No perfect routing, token saving, or performance gain; Progressive Disclosure is a teaching model here.

## Estimated Time

5m total: S37 Demo 2m + S42 Demo 2m + S45 Demo 1m.

Phase plan: S37 2m → S42 2m → S45 1m.

Time Risk: LOW

Execution Risk: LOW

Product Volatility: LOW

## Current-State Recheck

UNVERIFIED. The target product surface/account has not been checked. Before any Live/Hybrid use, record the selected account/surface, current official source, date, observed behavior, permission mode, and limits.

Live Value: LOW

Known Variance: account, product surface, permissions, model, operating system, and runtime may differ from historical records. Static playback avoids these dependencies but does not validate them.

## Failure Modes

Product variance: do not force the expected path. Environment failure: stop and use the listed fallback. Missing/inconsistent source: stop the claim and report it. Story mismatch: mark the slot for review. Do not repair the Demo repo or improvise evidence.

## Fallback

Default is the offline static presentation. Open: `production/preview/full/S37.png`, `production/preview/full/S42.png`, `production/preview/full/S45.png`

Use S37/S42/S45 PNGs in Story order; S45 is a selected observation summary, not raw tool log.

Fallback readiness: UNVERIFIED for DEC-0038 until the new files, displayed IDs, dimensions and hashes are checked. The approved static fallback plan remains; raw Trial captures are not implied.

Captured Alternative provenance: DEC-0038 current slide numbering. Check final PPTX/PNG identity and fallback hashes in FALLBACK_MANIFEST.md and production/evaluation/PROMPT_TIMELINE_REVISION.md after rendering. DEC-0033–0037 records remain historical. This is not a target-PC playback test, raw terminal screenshot, recording, new Trial or rehearsal.

Fallback Threshold: Static fallback is the default and starts immediately. Live/Hybrid is disabled. A Live cutoff remains TBD until a timed rehearsal establishes it.

## Reset

Static playback is read-only and requires no reset. Any future Live reproduction must use a separate copy/worktree at the recorded commit; do not move main or tags.

## Transition

S45 → S46: procedure repetition remains after context organization.

## Evidence

TRIAL-004/005A/B; STATE-01/02/03; Demo Matrix.

## Do Not Claim

No perfect routing, token saving, or performance gain; Progressive Disclosure is a teaching model here.

## Trial / Run Record

No new Trial or product execution was performed for this runbook. Current migration aligns the static plan; the DEC-0038 local file/path/hash checks are complete. Earlier static checks remain historical evidence, and the current READY scope covers local static files only. The recorded source remains the authority for historical dates, exact prompts, and environment details; unspecified fields are not reconstructed here.

Windows PowerPoint, target account/product behavior, timed instructor operation, and room projection remain UNVERIFIED.
