# Demo Runbooks and Offline Fallbacks

These runbooks use approved Story and Demo evidence. They do not create a new Trial, Product State, prompt, or current-product claim. The default playback for this execution is the local static render of the integrated deck.

## Use

1. Open the runbook for the scheduled Demo.
2. Open its `production/preview/full/Sxx.png` files in Story order; each is a 1920×1080 slide render, not a raw terminal capture.
3. Keep the Evidence labels and claim boundaries visible.
4. Continue with the next-Slide transition. Do not activate Live/Hybrid before the user validation gates pass.
5. If a PNG cannot open, use `production/AI_Dev_Training_Full.pptx`. If neither opens, use only the approved verbal fallback and record the slot as UNVERIFIED.

## Inventory

- DEMO-01 through DEMO-12: one runbook per Demo ID.
- LOOP-VISUAL: approved teaching-model visual in S66.
- `FALLBACK_MANIFEST.md`: local PNG paths, SHA-256, provenance, and readiness scope.

The static fallback does not mean a historical Trial was reproduced or a current product surface is ready. Windows PowerPoint, target account, room/projector, and instructor rehearsal remain USER REQUIRED.
