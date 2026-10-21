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
- LOOP-VISUAL: approved teaching-model visual in S68.
- `FALLBACK_MANIFEST.md`: local PNG paths, SHA-256, provenance, and readiness scope.
- Current numbering: DEC-0038 / 2026-10-21, 82 slides / 360 minutes. See
  [the current prompt/timeline review](../../production/evaluation/PROMPT_TIMELINE_REVISION.md)
  and [the numbering migration](../../plan/SLIDE_ID_MIGRATION_82.md).
  Rendering identity and fallback hashes were rechecked on the finalized
  DEC-0038 files. READY covers current local static files only.
  M relation labels do not certify a complete legacy module; second-priority
  additions remain deferred. Presenter bundles are paused by user instruction.

The static fallback does not mean a historical Trial was reproduced or a current product surface is ready. Windows PowerPoint, target account, room/projector, and instructor rehearsal remain USER REQUIRED.

S10의 DEC-0037 검사 파이프라인 도식은 질문 배경이며 새 Demo가 아니다. 현재 Full PPT identity는 FALLBACK_MANIFEST를 따른다. 이전 29개 fallback의 PASS를 승계하지 않고, 현재 번호의 29개 실제 PNG를 다시 확인했다.

S11–S13은 구성한 Prompt·생성 Agent 삽화·가능한 해석/비용 개념이다. 실제 반복 실행·분기 빈도·기하급수 성장 측정·동일 결과 보장이 아니다. 새 Demo/Trial은 추가하지 않는다.
