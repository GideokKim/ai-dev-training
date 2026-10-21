# DEMO-05 — Task Specification and Crop Boundary

> Current numbering update — DEC-0043: 90-slide references are aligned. The previous validation/status/hash text is retained as release history. Finalized90-slide files, displayed IDs, render/Notes parity and current file hashes were checked locally under DEC-0043; no Trial is added. The validation covers static fallback only. Windows/product/account/room/rehearsal remain UNVERIFIED.

Planning Status: CANDIDATE — supporting captured case

Final Validation Status: READY — DEC-0043 local static paths, displayed IDs, dimensions, render/Notes parity and file hashes checked. Windows/product/account/room/rehearsal remain UNVERIFIED. No new Trial was run.

Story Beat: BEAT-004–007

Related Invariants: INV-DEMO-001, INV-VERIFY-001, INV-RESPONSIBILITY-001

Act: ACT 1

Delivery Mode: CAPTURED static fallback; short Live option disabled

## Purpose

Connect the actual request's preservation, minimal-edit and verification
instructions to the recorded diff and checks; use them as completion evidence.

## Audience Question

어떤 Task 정보가 요청을 실행 가능하게 만드는가?

## Starting Repository State

STATE-00 → STATE-00-FIXED

## Environment

Playback uses local offline PNGs rendered from the current integrated deck. The target Windows PC, education Codex account/surface, permissions, and room are not selected or verified. Historical Trial environments apply only to their recorded runs.

Historical source scope: TRIAL-002; STATE-00-FIXED; Demo matrix.

## Repository Commit / Tag

STATE-00-FIXED `6dab644ea53e899e6d65b70bc4383bd2901ded89`.

## Working Directory

`production/preview/full/` — open only the local PNGs listed below. The Demo repository remains read-only and is not used for playback.

## Prompt

N/A — this runbook does not invoke an Agent. Do not replay historical prompts. Any future Live path needs a separately verified target surface and an approved exact prompt.

## Expected Agent Behavior

No Agent is run in the default path. A future Live run must accept reasonable alternate paths and judge only the recorded success criteria; do not script an answer.

## Watch For

Half-open crop `[x_start, x_end)`; previous inclusive endpoint expression vs corrected exclusive endpoint; recorded verification.

## Success Criteria

Explain end-exclusive behavior and distinguish a code diff from verification evidence.

## Expected Output

Bounded Trial code/diff and test evidence; no new edit.

## Verification

Open the listed PNGs offline and confirm Slide ID, label, and readable content. Every fallback is a 1920×1080 static render of the integrated PPTX, not a raw terminal screenshot, recording, or new Trial. Check SHA-256 in `FALLBACK_MANIFEST.md`. This validates only local static playback.

Evidence limit: No general correctness, current Desktop behavior, or all-input guarantee. S18 is a reconstructed code diagram, not an editor screenshot.

## Estimated Time

8m: S18 4m + S19 4m; S17 and S20 are outside.

Phase plan: S18 Code/Diff 4m → S19 evidence 4m.

Time Risk: MEDIUM

Execution Risk: LOW–MEDIUM

Product Volatility: LOW

## Current-State Recheck

UNVERIFIED. The target product surface/account has not been checked. Before any Live/Hybrid use, record the selected account/surface, current official source, date, observed behavior, permission mode, and limits.

Live Value: MEDIUM–HIGH

Known Variance: account, product surface, permissions, model, operating system, and runtime may differ from historical records. Static playback avoids these dependencies but does not validate them.

## Failure Modes

Product variance: do not force the expected path. Environment failure: stop and use the listed fallback. Missing/inconsistent source: stop the claim and report it. Story mismatch: mark the slot for review. Do not repair the Demo repo or improvise evidence.

## Fallback

Default is the offline static presentation. Open: `production/preview/full/S18.png`, `production/preview/full/S19.png`

Use S18–S19 PNG; do not add fabricated test logs.

Fallback readiness: READY for DEC-0042 local static files. S18/S19 paths, displayed IDs, dimensions and hashes were checked after rendering. Target-PC playback remains UNVERIFIED; raw Trial captures are not implied.

Captured Alternative provenance: DEC-0042 request-to-evidence connections preserve DEC-0039 actual-Prompt mapping and DEC-0038 numbering. Current PPTX/PNG identity and fallback hashes are recorded in FALLBACK_MANIFEST.md and production/evaluation/ACT_1_REQUEST_DESIGN_REVISION.md. Earlier production records remain historical. This is not a target-PC playback test, raw terminal screenshot, recording, new Trial or rehearsal.

Fallback Threshold: Static fallback is the default and starts immediately. Live/Hybrid is disabled. A Live cutoff remains TBD until a timed rehearsal establishes it.

## Reset

Static playback is read-only and requires no reset. Any future Live reproduction must use a separate copy/worktree at the recorded commit; do not move main or tags.

## Transition

S19 → S20: request changed files, check evidence and unverified limits so a
human can judge completion. S18/S19 match the actual TRIAL-002 request, not
an execution of the teaching request on S16.

## Evidence

TRIAL-002; STATE-00-FIXED; Demo matrix.

## Do Not Claim

No general correctness, current Desktop behavior, or all-input guarantee. S18 is a reconstructed code diagram, not an editor screenshot.

## Trial / Run Record

No new Trial or product execution was performed for this runbook. Current migration aligns the static plan; the DEC-0039 local file/path/hash checks are complete. Earlier static checks remain historical evidence, and the current READY scope covers local static files only. The recorded source remains the authority for historical dates, exact prompts, and environment details; unspecified fields are not reconstructed here.

Windows PowerPoint, target account/product behavior, timed instructor operation, and room projection remain UNVERIFIED.
