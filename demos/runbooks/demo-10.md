# DEMO-10 — Conceptual Evaluation Set

Planning Status: CANDIDATE — conceptual evaluation matrix

Final Validation Status: VISUAL ONLY — local static fallback reviewed; no current-product run was performed.

Story Beat: BEAT-047–049

Related Invariants: INV-DEMO-002, INV-DEMO-004, INV-VERIFY-001, INV-RESEARCH-004

Act: ACT 4

Delivery Mode: VISUAL ONLY / conceptual matrix

## Purpose

Show why one passing task cannot establish that a system change is safe across representative tasks.

## Audience Question

한 번의 passing task가 safe system change를 증명할까?

## Starting Repository State

N/A — no new Product State/task execution

## Environment

Playback uses local offline PNGs rendered from the current integrated deck. The target Windows PC, education Codex account/surface, permissions, and room are not selected or verified. Historical Trial environments apply only to their recorded runs.

Historical source scope: Demo Matrix evaluation scope and Slide Map S64.

## Repository Commit / Tag

EVAL-01/02 historical references; EVAL-03/04 designed checks only.

## Working Directory

`production/preview/full/` — open only the local PNGs listed below. The Demo repository remains read-only and is not used for playback.

## Prompt

N/A — this runbook does not invoke an Agent. Do not replay historical prompts. Any future Live path needs a separately verified target surface and an approved exact prompt.

## Expected Agent Behavior

No Agent is run in the default path. A future Live run must accept reasonable alternate paths and judge only the recorded success criteria; do not script an answer.

## Watch For

Separate observed historical references from designed adjacent-task checks; no outcome badge for EVAL-03/04.

## Success Criteria

Distinguish prior evidence from evaluation design.

## Expected Output

S64 four-row conceptual matrix, no execution.

## Verification

Open the listed PNGs offline and confirm Slide ID, label, and readable content. Every fallback is a 1920×1080 static render of the integrated PPTX, not a raw terminal screenshot, recording, or new Trial. Check SHA-256 in `FALLBACK_MANIFEST.md`. This validates only local static playback.

Evidence limit: Do not say EVAL-03/04 ran or passed/failed; do not merge their design with conceptual-case outcomes.

## Estimated Time

5m S64 Demo slot.

Phase plan: S64 5m; internal phase split not established.

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

Default is the offline static presentation. Open: `production/preview/full/S64.png`

Use S64.png; keep observed and designed frames separate.

Fallback readiness: READY for local static slide-render playback only. Raw Trial source captures are not implied or created.

Captured Alternative provenance: DEC-0030 integrated-deck static render; file identity and fallback paths rechecked on 2026-10-19. See `FALLBACK_MANIFEST.md` and `production/evaluation/FINAL_HANDOFF.md` for the exact PPTX hash and recorded rendering scope. This file check is not a target-PC playback test, raw terminal screenshot, recording, new Trial, or rehearsal.

Fallback Threshold: Static fallback is the default and starts immediately. Live/Hybrid is disabled. A Live cutoff remains TBD until a timed rehearsal establishes it.

## Reset

Static playback is read-only and requires no reset. Any future Live reproduction must use a separate copy/worktree at the recorded commit; do not move main or tags.

## Transition

S64 → S65: connect representative checks to overfitting risk.

## Evidence

Demo Matrix evaluation scope and Slide Map S64.

## Do Not Claim

Do not say EVAL-03/04 ran or passed/failed; do not merge their design with conceptual-case outcomes.

## Trial / Run Record

No new Trial or product execution was performed for this runbook. Local work checked the existing static fallback only. The recorded source remains the authority for historical dates, exact prompts, and environment details; unspecified fields are not reconstructed here.

Windows PowerPoint, target account/product behavior, timed instructor operation, and room projection remain UNVERIFIED.
