# DEMO-09 — Verification and System Map

Planning Status: CANDIDATE — supporting visual/captured record

Final Validation Status: VISUAL ONLY — local static fallback reviewed; no current-product run was performed.

Story Beat: BEAT-033–036

Related Invariants: INV-MATURITY-005, INV-MATURITY-009, INV-VERIFY-001

Act: ACT 3

Delivery Mode: VISUAL / CAPTURED static fallback

## Purpose

Connect a working system to bounded checks and evidence in STATE-04-PERF.

## Audience Question

작업 System이 관찰하고 확인해야 할 것은 무엇인가?

## Starting Repository State

STATE-03 → STATE-04-PERF

## Environment

Playback uses local offline PNGs rendered from the current integrated deck. The target Windows PC, education Codex account/surface, permissions, and room are not selected or verified. Historical Trial environments apply only to their recorded runs.

Historical source scope: TRIAL-008; STATE-03/04-PERF; Demo Matrix.

## Repository Commit / Tag

STATE-03 `f3e2e37b1454e28c5de4c44682ebd49378ebae4b`; STATE-04-PERF `6153b81c0187dd7d82c88bd1817fb683c98eb431`.

## Working Directory

`production/preview/full/` — open only the local PNGs listed below. The Demo repository remains read-only and is not used for playback.

## Prompt

N/A — this runbook does not invoke an Agent. Do not replay historical prompts. Any future Live path needs a separately verified target surface and an approved exact prompt.

## Expected Agent Behavior

No Agent is run in the default path. A future Live run must accept reasonable alternate paths and judge only the recorded success criteria; do not script an answer.

## Watch For

Recorded checks and system map; Subagent and Memory are not required components.

## Success Criteria

Separate the observed bounded checks from attribution to every Harness element.

## Expected Output

Existing State/check summary and static map; no command is rerun.

## Verification

Open the listed PNGs offline and confirm Slide ID, label, and readable content. Every fallback is a 1920×1080 static render of the integrated PPTX, not a raw terminal screenshot, recording, or new Trial. Check SHA-256 in `FALLBACK_MANIFEST.md`. This validates only local static playback.

Evidence limit: No general performance gain or claim that every Harness component caused success.

## Estimated Time

5m: S50 Demo 3m + S51 Demo 2m.

Phase plan: S50 3m → S51 2m.

Time Risk: LOW

Execution Risk: LOW–MEDIUM

Product Volatility: LOW

## Current-State Recheck

UNVERIFIED. The target product surface/account has not been checked. Before any Live/Hybrid use, record the selected account/surface, current official source, date, observed behavior, permission mode, and limits.

Live Value: LOW

Known Variance: account, product surface, permissions, model, operating system, and runtime may differ from historical records. Static playback avoids these dependencies but does not validate them.

## Failure Modes

Product variance: do not force the expected path. Environment failure: stop and use the listed fallback. Missing/inconsistent source: stop the claim and report it. Story mismatch: mark the slot for review. Do not repair the Demo repo or improvise evidence.

## Fallback

Default is the offline static presentation. Open: `production/preview/full/S50.png`, `production/preview/full/S51.png`

Use S50–S51 PNGs; these are static summaries, not a live validation result.

Fallback readiness: READY for local static slide-render playback only. Raw Trial source captures are not implied or created.

Captured Alternative provenance: DEC-0030 integrated-deck static render; file identity and fallback paths rechecked on 2026-10-19. See `FALLBACK_MANIFEST.md` and `production/evaluation/FINAL_HANDOFF.md` for the exact PPTX hash and recorded rendering scope. This file check is not a target-PC playback test, raw terminal screenshot, recording, new Trial, or rehearsal.

Fallback Threshold: Static fallback is the default and starts immediately. Live/Hybrid is disabled. A Live cutoff remains TBD until a timed rehearsal establishes it.

## Reset

Static playback is read-only and requires no reset. Any future Live reproduction must use a separate copy/worktree at the recorded commit; do not move main or tags.

## Transition

S51 → S52: introduce outside-repository environment factors.

## Evidence

TRIAL-008; STATE-03/04-PERF; Demo Matrix.

## Do Not Claim

No general performance gain or claim that every Harness component caused success.

## Trial / Run Record

No new Trial or product execution was performed for this runbook. Local work checked the existing static fallback only. The recorded source remains the authority for historical dates, exact prompts, and environment details; unspecified fields are not reconstructed here.

Windows PowerPoint, target account/product behavior, timed instructor operation, and room projection remain UNVERIFIED.
