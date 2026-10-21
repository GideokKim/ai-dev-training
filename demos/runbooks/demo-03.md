# DEMO-03 — Reusable Verification Workflow

Planning Status: CANDIDATE — Anchor candidate

Final Validation Status: READY — DEC-0038 local static files, displayed IDs, dimensions, render parity and SHA-256 checked. Target Windows/product/account/room/rehearsal remain UNVERIFIED. No new Trial was run.

Story Beat: BEAT-020–022

Related Invariants: INV-DEMO-001, INV-DEMO-004, INV-VERIFY-001

Act: ACT 3

Delivery Mode: CAPTURED static fallback; proposed HYBRID disabled

## Purpose

Show the repository-owned reusable procedure and bounded verification records.

## Audience Question

왜 같은 verification procedure를 계속 반복할까?

## Starting Repository State

STATE-03 → STATE-04 → STATE-04-PERF

## Environment

Playback uses local offline PNGs rendered from the current integrated deck. The target Windows PC, education Codex account/surface, permissions, and room are not selected or verified. Historical Trial environments apply only to their recorded runs.

Historical source scope: TRIAL-008, STATE-03/04/04-PERF; plan/DEMO_MATRIX.md.

## Repository Commit / Tag

STATE-03 `f3e2e37b1454e28c5de4c44682ebd49378ebae4b`; STATE-04 `822f1c12c5f602d934a2fd29e48f05bf498b4bfa`; STATE-04-PERF `6153b81c0187dd7d82c88bd1817fb683c98eb431`.

## Working Directory

`production/preview/full/` — open only the local PNGs listed below. The Demo repository remains read-only and is not used for playback.

## Prompt

N/A — this runbook does not invoke an Agent. Do not replay historical prompts. Any future Live path needs a separately verified target surface and an approved exact prompt.

## Expected Agent Behavior

No Agent is run in the default path. A future Live run must accept reasonable alternate paths and judge only the recorded success criteria; do not script an answer.

## Watch For

CLI 0.154.0 Skill discovery/invocation record; keep current Desktop unverified.

## Success Criteria

Describe the procedure and the limited CLI observation without a quality or superiority claim.

## Expected Output

Recorded Skill discovery/loading and workflow summary; no invocation now.

## Verification

Open the listed PNGs offline and confirm Slide ID, label, and readable content. Every fallback is a 1920×1080 static render of the integrated PPTX, not a raw terminal screenshot, recording, or new Trial. Check SHA-256 in `FALLBACK_MANIFEST.md`. This validates only local static playback.

Evidence limit: No Desktop-wide support, Skill superiority, causal performance gain, or measured quality improvement.

## Estimated Time

8m: S43 Demo 5m + S44 Demo 3m. S44 Case and S46–47 are separate allocations.

Phase plan: S43 5m → S44 Demo portion 3m.

Time Risk: HIGH

Execution Risk: MEDIUM–HIGH

Product Volatility: MEDIUM–HIGH

## Current-State Recheck

UNVERIFIED. The target product surface/account has not been checked. Before any Live/Hybrid use, record the selected account/surface, current official source, date, observed behavior, permission mode, and limits.

Live Value: MEDIUM–HIGH

Known Variance: account, product surface, permissions, model, operating system, and runtime may differ from historical records. Static playback avoids these dependencies but does not validate them.

## Failure Modes

Product variance: do not force the expected path. Environment failure: stop and use the listed fallback. Missing/inconsistent source: stop the claim and report it. Story mismatch: mark the slot for review. Do not repair the Demo repo or improvise evidence.

## Fallback

Default is the offline static presentation. Open: `production/preview/full/S43.png`, `production/preview/full/S44.png`

Show S43–S44 static summaries; do not show long Prompt text or fake terminal UI.

Fallback readiness: UNVERIFIED for DEC-0038 until the new files, displayed IDs, dimensions and hashes are checked. The approved static fallback plan remains; raw Trial captures are not implied.

Captured Alternative provenance: DEC-0038 current slide numbering. Check final PPTX/PNG identity and fallback hashes in FALLBACK_MANIFEST.md and production/evaluation/PROMPT_TIMELINE_REVISION.md after rendering. DEC-0033–0037 records remain historical. This is not a target-PC playback test, raw terminal screenshot, recording, new Trial or rehearsal.

Fallback Threshold: Static fallback is the default and starts immediately. Live/Hybrid is disabled. A Live cutoff remains TBD until a timed rehearsal establishes it.

## Reset

Static playback is read-only and requires no reset. Any future Live reproduction must use a separate copy/worktree at the recorded commit; do not move main or tags.

## Transition

S44 → S45: explain why the reusable procedure does not contain task answers.

## Evidence

TRIAL-008, STATE-03/04/04-PERF; plan/DEMO_MATRIX.md.

## Do Not Claim

No Desktop-wide support, Skill superiority, causal performance gain, or measured quality improvement.

## Trial / Run Record

No new Trial or product execution was performed for this runbook. Current migration aligns the static plan; the DEC-0038 local file/path/hash checks are complete. Earlier static checks remain historical evidence, and the current READY scope covers local static files only. The recorded source remains the authority for historical dates, exact prompts, and environment details; unspecified fields are not reconstructed here.

Windows PowerPoint, target account/product behavior, timed instructor operation, and room projection remain UNVERIFIED.
