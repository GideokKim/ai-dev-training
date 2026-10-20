# DEMO-05 — Task Specification and Crop Boundary

Planning Status: CANDIDATE — supporting captured case

Final Validation Status: VISUAL ONLY — local static fallback reviewed; no current-product run was performed.

Story Beat: BEAT-004–007

Related Invariants: INV-DEMO-001, INV-VERIFY-001, INV-RESPONSIBILITY-001

Act: ACT 1

Delivery Mode: CAPTURED static fallback; short Live option disabled

## Purpose

Show how explicit task boundary and verification make a code change inspectable.

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

Evidence limit: No general correctness, current Desktop behavior, or all-input guarantee. S16 is a reconstructed code diagram, not an editor screenshot.

## Estimated Time

8m: S16 4m + S17 4m; S15 and S18 are outside.

Phase plan: S16 Code/Diff 4m → S17 evidence 4m.

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

Default is the offline static presentation. Open: `production/preview/full/S16.png`, `production/preview/full/S17.png`

Use S16–S17 PNG; do not add fabricated test logs.

Fallback readiness: READY for local static slide-render playback only. Raw Trial source captures are not implied or created.

Captured Alternative provenance: DEC-0032 integrated-deck static render; file identity and fallback paths rechecked on 2026-10-20. See `FALLBACK_MANIFEST.md` and `production/evaluation/FINAL_HANDOFF.md` for the exact PPTX hash and recorded rendering scope. This file check is not a target-PC playback test, raw terminal screenshot, recording, new Trial, or rehearsal.

Fallback Threshold: Static fallback is the default and starts immediately. Live/Hybrid is disabled. A Live cutoff remains TBD until a timed rehearsal establishes it.

## Reset

Static playback is read-only and requires no reset. Any future Live reproduction must use a separate copy/worktree at the recorded commit; do not move main or tags.

## Transition

S17 → S18: generated code is not done until checks are inspected.

## Evidence

TRIAL-002; STATE-00-FIXED; Demo matrix.

## Do Not Claim

No general correctness, current Desktop behavior, or all-input guarantee. S16 is a reconstructed code diagram, not an editor screenshot.

## Trial / Run Record

No new Trial or product execution was performed for this runbook. Local work checked the existing static fallback only. The recorded source remains the authority for historical dates, exact prompts, and environment details; unspecified fields are not reconstructed here.

Windows PowerPoint, target account/product behavior, timed instructor operation, and room projection remain UNVERIFIED.
