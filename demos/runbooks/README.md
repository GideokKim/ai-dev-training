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
- LOOP-VISUAL: approved teaching-model visual in S67.
- `FALLBACK_MANIFEST.md`: local PNG paths, SHA-256, provenance, and readiness scope.
- Current numbering: DEC-0036 / 2026-10-21, 81 slides / 360 minutes. See
  [the current insertion review](../../production/evaluation/CODEX_ENTRY_INSERTION.md)
  and [the numbering migration](../../plan/SLIDE_ID_MIGRATION.md).
  Rendering identity and fallback hashes were verified locally after the
  DEC-0036 final render. READY covers local static files only. Earlier DEC-0033/DEC-0035 release checks are historical results.
  M relation labels do not certify a complete legacy module; second-priority
  additions remain deferred. Presenter bundles are paused by user instruction.

The static fallback does not mean a historical Trial was reproduced or a current product surface is ready. Windows PowerPoint, target account, room/projector, and instructor rehearsal remain USER REQUIRED.

S10의 DEC-0037 검사 파이프라인 도식은 질문 배경이며 새 Demo가 아니다. 현재 Full PPT identity는 FALLBACK_MANIFEST를 따른다. 기존 29개 fallback PNG는 byte-identical하게 유지했다.
