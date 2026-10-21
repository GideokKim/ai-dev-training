# DEMO-07 — Subagent Decision Visual

Planning Status: DEFERRED — not justified at STATE-04

Final Validation Status: READY — DEC-0036 local static files, displayed IDs, dimensions and SHA-256 were checked after final rendering. Current-product, target Windows/room and rehearsal gates remain UNVERIFIED; no new Trial was run.

Story Beat: BEAT-023–027

Related Invariants: INV-MATURITY-007, INV-DEMO-004, INV-RESEARCH-001

Act: ACT 3

Delivery Mode: VISUAL ONLY; no product interaction selected

## Purpose

Compare independent role/context value with coordination cost as a conceptual decision, not a product tutorial.

## Audience Question

모든 조사 역할을 Agent 하나가 처리해야 할까?

## Starting Repository State

N/A — no Product State selected

## Environment

Playback uses local offline PNGs rendered from the current integrated deck. The target Windows PC, education Codex account/surface, permissions, and room are not selected or verified. Historical Trial environments apply only to their recorded runs.

Historical source scope: DEC-0018/0019; Slide Map S47–48.

## Repository Commit / Tag

N/A — no Subagent Trial or state exists.

## Working Directory

`production/preview/full/` — open only the local PNGs listed below. The Demo repository remains read-only and is not used for playback.

## Prompt

N/A — this runbook does not invoke an Agent. Do not replay historical prompts. Any future Live path needs a separately verified target surface and an approved exact prompt.

## Expected Agent Behavior

No Agent is run in the default path. A future Live run must accept reasonable alternate paths and judge only the recorded success criteria; do not script an answer.

## Watch For

Only consider role separation if real tasks are independent; the C++ example is hypothetical.

## Success Criteria

Help the audience ask when role separation is worth coordination overhead.

## Expected Output

Static decision visual only.

## Verification

Open the listed PNGs offline and confirm Slide ID, label, and readable content. Every fallback is a 1920×1080 static render of the integrated PPTX, not a raw terminal screenshot, recording, or new Trial. Check SHA-256 in `FALLBACK_MANIFEST.md`. This validates only local static playback.

Evidence limit: No current interface support, speed/quality gain, parallelism benefit, or primary Live readiness.

## Estimated Time

5m: S47 Demo 3m + S48 Demo 2m; Q&A minute portions are separate.

Phase plan: S47 3m → S48 2m.

Time Risk: LOW

Execution Risk: MEDIUM for future product use

Product Volatility: LOW for visual / HIGH for product mechanism

## Current-State Recheck

UNVERIFIED. The target product surface/account has not been checked. Before any Live/Hybrid use, record the selected account/surface, current official source, date, observed behavior, permission mode, and limits.

Live Value: LOW

Known Variance: account, product surface, permissions, model, operating system, and runtime may differ from historical records. Static playback avoids these dependencies but does not validate them.

## Failure Modes

Product variance: do not force the expected path. Environment failure: stop and use the listed fallback. Missing/inconsistent source: stop the claim and report it. Story mismatch: mark the slot for review. Do not repair the Demo repo or improvise evidence.

## Fallback

Default is the offline static presentation. Open: `production/preview/full/S47.png`, `production/preview/full/S48.png`

S47–S48 PNG; do not open a product Subagent pane.

Fallback readiness: UNVERIFIED for the DEC-0036 re-render until local file identity and playback paths are rechecked. The approved static fallback plan is preserved; raw Trial captures are not implied or created.

Captured Alternative provenance: DEC-0036 current slide numbering. Post-migration PPTX/PNG identity and fallback hashes must be checked in FALLBACK_MANIFEST.md and production/evaluation/CODEX_ENTRY_INSERTION.md. DEC-0033/DEC-0035 rendering records remain historical evidence. This alignment is not a target-PC playback test, raw terminal screenshot, recording, new Trial, or rehearsal.

Fallback Threshold: Static fallback is the default and starts immediately. Live/Hybrid is disabled. A Live cutoff remains TBD until a timed rehearsal establishes it.

## Reset

Static playback is read-only and requires no reset. Any future Live reproduction must use a separate copy/worktree at the recorded commit; do not move main or tags.

## Transition

S48 → S49: move from role choice to durable knowledge.

## Evidence

DEC-0018/0019; Slide Map S47–48.

## Do Not Claim

No current interface support, speed/quality gain, parallelism benefit, or primary Live readiness.

## Trial / Run Record

No new Trial or product execution was performed for this runbook. Local work checked the existing static fallback only. The recorded source remains the authority for historical dates, exact prompts, and environment details; unspecified fields are not reconstructed here.

Windows PowerPoint, target account/product behavior, timed instructor operation, and room projection remain UNVERIFIED.
