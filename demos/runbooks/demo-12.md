# DEMO-12 — Observed Evolution Recap

Planning Status: CANDIDATE — ACT 5 visual recap

Final Validation Status: VISUAL ONLY — local static fallback reviewed; no current-product run was performed.

Story Beat: BEAT-060–070

Related Invariants: INV-NARRATIVE-001, INV-DEMO-001, INV-DEMO-003, INV-VERIFY-001

Act: ACT 5

Delivery Mode: VISUAL ONLY

## Purpose

Recap the observed Product path and keep conceptual and Meta paths separate.

## Audience Question

처음의 workflow에서 무엇이 달라졌을까?

## Starting Repository State

STATE-00 → STATE-04-PERF; conceptual/Meta paths separate

## Environment

Playback uses local offline PNGs rendered from the current integrated deck. The target Windows PC, education Codex account/surface, permissions, and room are not selected or verified. Historical Trial environments apply only to their recorded runs.

Historical source scope: Existing State history; DEC-0020/0021; Slide Map S73–74.

## Repository Commit / Tag

STATE-00 `22e7e2f806de2419b0df649107bbae14dea082eb` → STATE-04-PERF `6153b81c0187dd7d82c88bd1817fb683c98eb431`.

## Working Directory

`production/preview/full/` — open only the local PNGs listed below. The Demo repository remains read-only and is not used for playback.

## Prompt

N/A — this runbook does not invoke an Agent. Do not replay historical prompts. Any future Live path needs a separately verified target surface and an approved exact prompt.

## Expected Agent Behavior

No Agent is run in the default path. A future Live run must accept reasonable alternate paths and judge only the recorded success criteria; do not script an answer.

## Watch For

Keep seven named States/endpoint and do not treat supporting commits as States.

## Success Criteria

Follow the six-hour mental-model evolution without implying automation.

## Expected Output

Static story and State recap. S74 includes excerpts of the existing S16 crop
diff diagram, S32 routing text and S45 recorded-data chart. The seven-State
rail and the excerpts have separate regions; captions name the actual State
ranges. These are existing teaching-slide renders, not raw execution captures
or newly measured results. Use the excerpts for recall rather than rereading
the small code or chart labels.

## Verification

Open the listed PNGs offline and confirm Slide ID, label, and readable content. Every fallback is a 1920×1080 static render of the integrated PPTX, not a raw terminal screenshot, recording, or new Trial. Check SHA-256 in `FALLBACK_MANIFEST.md`. This validates only local static playback.

Evidence limit: No universal maturity path, complete automation, or new Trial.

## Estimated Time

2m: S74 Demo allocation. S73 Lecture 4m is separate.

Phase plan: S74 2m.

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

Default is the offline static presentation. Open: `production/preview/full/S73.png`, `production/preview/full/S74.png`

Use S73–S74 PNGs from the DEC-0030 release. Full and ACT 5 previews match. Read S74 State numbers 01–07 along the arrows: top left to right, then bottom right to left. Its excerpts recall earlier teaching slides rather than raw execution captures.

Fallback readiness: READY for local static slide-render playback only. Raw Trial source captures are not implied or created.

Captured Alternative provenance: DEC-0030 integrated-deck static render; file identity and fallback paths rechecked on 2026-10-19. See `FALLBACK_MANIFEST.md` and `production/evaluation/FINAL_HANDOFF.md` for the exact PPTX hash and recorded rendering scope. This file check is not a target-PC playback test, raw terminal screenshot, recording, new Trial, or rehearsal.

Fallback Threshold: Static fallback is the default and starts immediately. Live/Hybrid is disabled. A Live cutoff remains TBD until a timed rehearsal establishes it.

## Reset

Static playback is read-only and requires no reset. Any future Live reproduction must use a separate copy/worktree at the recorded commit; do not move main or tags.

## Transition

S74 → S75: reflect on deliberately deferred components.

## Evidence

Existing State history; DEC-0020/0021; Slide Map S73–74.

## Do Not Claim

No universal maturity path, complete automation, or new Trial.

## Trial / Run Record

No new Trial or product execution was performed for this runbook. Local work checked the existing static fallback only. The recorded source remains the authority for historical dates, exact prompts, and environment details; unspecified fields are not reconstructed here.

Windows PowerPoint, target account/product behavior, timed instructor operation, and room projection remain UNVERIFIED.
