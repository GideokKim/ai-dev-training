# DEMO-01 — Repository Exploration

Planning Status: CANDIDATE — Anchor candidate

Final Validation Status: READY — DEC-0036 local static files, displayed IDs, dimensions and SHA-256 were checked after final rendering. Current-product, target Windows/room and rehearsal gates remain UNVERIFIED; no new Trial was run.

Story Beat: BEAT-002–003

Related Invariants: INV-DEMO-001, INV-DEMO-004, INV-VERIFY-001, INV-RESPONSIBILITY-001

Act: ACT 0

Delivery Mode: CAPTURED static fallback; proposed HYBRID disabled

## Purpose

Show that repository-level investigation can locate relevant tests and call paths without a preselected file list.

## Audience Question

파일명을 주지 않으면 Agent는 어디부터 볼까?

## Starting Repository State

STATE-00

## Environment

Playback uses local offline PNGs rendered from the current integrated deck. The target Windows PC, education Codex account/surface, permissions, and room are not selected or verified. Historical Trial environments apply only to their recorded runs.

Historical source scope: TRIAL-001; STATE-00; plan/DEMO_MATRIX.md.

## Repository Commit / Tag

STATE-00 `22e7e2f806de2419b0df649107bbae14dea082eb`

## Working Directory

`production/preview/full/` — open only the local PNGs listed below. The Demo repository remains read-only and is not used for playback.

## Prompt

N/A — this runbook does not invoke an Agent. Do not replay historical prompts. Any future Live path needs a separately verified target surface and an approved exact prompt.

## Expected Agent Behavior

No Agent is run in the default path. A future Live run must accept reasonable alternate paths and judge only the recorded success criteria; do not script an answer.

## Watch For

Recorded test → implementation → call path, crop specification mismatch, read-only limit. S05 explicitly shows the first source row and intended width 2 versus included width 3. S06's code-only Chatbot question is a teaching assumption; it does not report a tool comparison or permission repair. S04 shows the actual request in a reconstructed input panel; its right-side GoogleTest list is a fictional C++ teaching example. The historical Trial used Python unittest, not GoogleTest.

## Success Criteria

Explain the bounded finding and distinguish repository access from task intent.

## Expected Output

TRIAL-001 record summary only; no new output.

## Verification

Open the listed PNGs offline and confirm Slide ID, label, and readable content. Every fallback is a 1920×1080 static render of the integrated PPTX, not a raw terminal screenshot, recording, or new Trial. Check SHA-256 in `FALLBACK_MANIFEST.md`. This validates only local static playback.

Evidence limit: Codex CLI 0.154.0 only; no current Desktop, repeated success, general performance, or raw terminal screenshot claim.

## Estimated Time

8m Demo slot is S05; S04 2m setup and S06 5m interpretation are separately allocated.

Phase plan: S05: 8m; do not invent phase cuts or a Live cutoff.

Time Risk: MEDIUM

Execution Risk: MEDIUM

Product Volatility: HIGH

## Current-State Recheck

UNVERIFIED. The target product surface/account has not been checked. Before any Live/Hybrid use, record the selected account/surface, current official source, date, observed behavior, permission mode, and limits.

Live Value: HIGH

Known Variance: account, product surface, permissions, model, operating system, and runtime may differ from historical records. Static playback avoids these dependencies but does not validate them.

## Failure Modes

Product variance: do not force the expected path. Environment failure: stop and use the listed fallback. Missing/inconsistent source: stop the claim and report it. Story mismatch: mark the slot for review. Do not repair the Demo repo or improvise evidence.

## Fallback

Default is the offline static presentation. Open: `production/preview/full/S04.png`, `production/preview/full/S05.png`, `production/preview/full/S06.png`

Show S04→S05→S06 and retain `RECONSTRUCTED DIAGRAM` / `OBSERVED PRODUCT · CODEX CLI 0.154.0 · READ-ONLY` labels.

Fallback readiness: UNVERIFIED for the DEC-0036 re-render until local file identity and playback paths are rechecked. The approved static fallback plan is preserved; raw Trial captures are not implied or created.

Captured Alternative provenance: DEC-0036 current slide numbering. Post-migration PPTX/PNG identity and fallback hashes must be checked in FALLBACK_MANIFEST.md and production/evaluation/CODEX_ENTRY_INSERTION.md. DEC-0033/DEC-0035 rendering records remain historical evidence. This alignment is not a target-PC playback test, raw terminal screenshot, recording, new Trial, or rehearsal.

Fallback Threshold: Static fallback is the default and starts immediately. Live/Hybrid is disabled. A Live cutoff remains TBD until a timed rehearsal establishes it.

## Reset

Static playback is read-only and requires no reset. Any future Live reproduction must use a separate copy/worktree at the recorded commit; do not move main or tags.

## Transition

S06 → S07: repository access does not reveal developer intent.

## Evidence

TRIAL-001; STATE-00; plan/DEMO_MATRIX.md.

## Do Not Claim

Codex CLI 0.154.0 only; no current Desktop, repeated success, general performance, or raw terminal screenshot claim.

## Trial / Run Record

No new Trial or product execution was performed for this runbook. Local work checked the existing static fallback only. The recorded source remains the authority for historical dates, exact prompts, and environment details; unspecified fields are not reconstructed here.

Windows PowerPoint, target account/product behavior, timed instructor operation, and room projection remain UNVERIFIED.
