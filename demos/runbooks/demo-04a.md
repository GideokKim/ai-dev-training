# DEMO-04A — Conceptual Stale Workflow Case

Planning Status: APPROVED ROLE — conceptual controlled case

Final Validation Status: VISUAL ONLY — local static fallback reviewed; no current-product run was performed.

Story Beat: BEAT-038–046

Related Invariants: INV-DEMO-002, INV-DEMO-004, INV-RESEARCH-004

Act: ACT 4

Delivery Mode: VISUAL ONLY

## Purpose

Create a problem-first conceptual example of a previously correct workflow becoming stale after a Project change.

## Audience Question

Project가 바뀌면 재사용 Workflow는 계속 맞을까?

## Starting Repository State

N/A — no Product State or Trial

## Environment

Playback uses local offline PNGs rendered from the current integrated deck. The target Windows PC, education Codex account/surface, permissions, and room are not selected or verified. Historical Trial environments apply only to their recorded runs.

Historical source scope: DEC-0021; plan/DEMO_MATRIX.md DEMO-04A.

## Repository Commit / Tag

N/A — no Product State/tag exists.

## Working Directory

`production/preview/full/` — open only the local PNGs listed below. The Demo repository remains read-only and is not used for playback.

## Prompt

N/A — this runbook does not invoke an Agent. Do not replay historical prompts. Any future Live path needs a separately verified target surface and an approved exact prompt.

## Expected Agent Behavior

No Agent is run in the default path. A future Live run must accept reasonable alternate paths and judge only the recorded success criteria; do not script an answer.

## Watch For

CONCEPTUAL label; Project source uses NEW TEST ENTRY while workflow retains OLD TEST ENTRY; no execution result.

## Success Criteria

Recognize a stale-layer mismatch and distinguish it from observed product failure.

## Expected Output

Constructed state comparison only; no actual command or result.

## Verification

Open the listed PNGs offline and confirm Slide ID, label, and readable content. Every fallback is a 1920×1080 static render of the integrated PPTX, not a raw terminal screenshot, recording, or new Trial. Check SHA-256 in `FALLBACK_MANIFEST.md`. This validates only local static playback.

Evidence limit: No actual migration, command failure, Agent failure, Trial, or STATE-07+. Do not invent a reason for the Project change.

## Estimated Time

4m: S56 2m + S57 2m.

Phase plan: S56 2m → S57 2m.

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

Default is the offline static presentation. Open: `production/preview/full/S56.png`, `production/preview/full/S57.png`

Show S56–S57 static conceptual frames; keep the constructed-case label visible.

Fallback readiness: READY for local static slide-render playback only. Raw Trial source captures are not implied or created.

Captured Alternative provenance: static slide render generated/rechecked 2026-10-18 from the integrated PPTX; see `production/evaluation/FINAL_HANDOFF.md` for source PPTX hash and render details. This is not a raw terminal screenshot, recording, or new Trial output.

Fallback Threshold: Static fallback is the default and starts immediately. Live/Hybrid is disabled. A Live cutoff remains TBD until a timed rehearsal establishes it.

## Reset

Static playback is read-only and requires no reset. Any future Live reproduction must use a separate copy/worktree at the recorded commit; do not move main or tags.

## Transition

S57 → S58: distinguish task workaround from system problem.

## Evidence

DEC-0021; plan/DEMO_MATRIX.md DEMO-04A.

## Do Not Claim

No actual migration, command failure, Agent failure, Trial, or STATE-07+. Do not invent a reason for the Project change.

## Trial / Run Record

No new Trial or product execution was performed for this runbook. Local work checked the existing static fallback only. The recorded source remains the authority for historical dates, exact prompts, and environment details; unspecified fields are not reconstructed here.

Windows PowerPoint, target account/product behavior, timed instructor operation, and room projection remain UNVERIFIED.
