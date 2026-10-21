# DEMO-11 — Layer and Minimality Synthesis

Planning Status: CANDIDATE — conceptual synthesis

Final Validation Status: VISUAL ONLY — local static fallback reviewed; no current-product run was performed.

Story Beat: BEAT-054–057

Related Invariants: INV-DEMO-002, INV-DEMO-004, INV-VERIFY-001

Act: ACT 4

Delivery Mode: VISUAL / CAPTURED conceptual synthesis

## Purpose

Compare minimal responses at Prompt, global rule, or reusable Workflow layers inside the conceptual stale case.

## Audience Question

가장 작은 evidence-supported system response는 무엇일까?

## Starting Repository State

N/A — conceptual case; no Product State

## Environment

Playback uses local offline PNGs rendered from the current integrated deck. The target Windows PC, education Codex account/surface, permissions, and room are not selected or verified. Historical Trial environments apply only to their recorded runs.

Historical source scope: DEC-0021; Slide Map S59–60.

## Repository Commit / Tag

N/A — no implementation State for the conceptual repair.

## Working Directory

`production/preview/full/` — open only the local PNGs listed below. The Demo repository remains read-only and is not used for playback.

## Prompt

N/A — this runbook does not invoke an Agent. Do not replay historical prompts. Any future Live path needs a separately verified target surface and an approved exact prompt.

## Expected Agent Behavior

No Agent is run in the default path. A future Live run must accept reasonable alternate paths and judge only the recorded success criteria; do not script an answer.

## Watch For

Select the source layer only because the case defines the cause there; make no real diff.

## Success Criteria

Explain how evidence bounds the repair layer.

## Expected Output

Static choice and cause visual only.

## Verification

Open the listed PNGs offline and confirm Slide ID, label, and readable content. Every fallback is a 1920×1080 static render of the integrated PPTX, not a raw terminal screenshot, recording, or new Trial. Check SHA-256 in `FALLBACK_MANIFEST.md`. This validates only local static playback.

Evidence limit: No actual Skill repair, observed failure cause, or executed regression result.

## Estimated Time

3m: S59 Demo 2m + S60 Demo 1m.

Phase plan: S59 2m → S60 Demo portion 1m.

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

Default is the offline static presentation. Open: `production/preview/full/S59.png`, `production/preview/full/S60.png`

Use S59–S60 PNGs and keep CONCEPTUAL labels visible.

Fallback readiness: READY for local static slide-render playback only. Raw Trial source captures are not implied or created.

Captured Alternative provenance: DEC-0033 integrated-deck static render; file identity and fallback paths rechecked on 2026-10-21. See `FALLBACK_MANIFEST.md` and `production/evaluation/FINAL_HANDOFF.md` for the exact PPTX hash and recorded rendering scope. This file check is not a target-PC playback test, raw terminal screenshot, recording, new Trial, or rehearsal.

Fallback Threshold: Static fallback is the default and starts immediately. Live/Hybrid is disabled. A Live cutoff remains TBD until a timed rehearsal establishes it.

## Reset

Static playback is read-only and requires no reset. Any future Live reproduction must use a separate copy/worktree at the recorded commit; do not move main or tags.

## Transition

S60 → S61: compare failure point with cause hypothesis.

## Evidence

DEC-0021; Slide Map S59–60.

## Do Not Claim

No actual Skill repair, observed failure cause, or executed regression result.

## Trial / Run Record

No new Trial or product execution was performed for this runbook. Local work checked the existing static fallback only. The recorded source remains the authority for historical dates, exact prompts, and environment details; unspecified fields are not reconstructed here.

Windows PowerPoint, target account/product behavior, timed instructor operation, and room projection remain UNVERIFIED.
