# Final Handoff — AI Developer Training

## Status

**PARTIAL — READY FOR USER VALIDATION**

자동화 가능한 로컬 검토·수정·문서화와 저장소 checkpoint가 완료되면 이 문서의 Git 정보를 보완한다. Windows PowerPoint, 실제 교육용 Codex 계정/surface, 교육장 장비, 전체 시간 리허설은 아직 확인되지 않았다. 외부 전달은 수행하지 않았다.

## Release Candidate

| Artifact | Path | SHA-256 / result |
|---|---|---|
| Integrated deck | `production/AI_Dev_Training_Full.pptx` | `c5e744e36d610e52179ff4f1f6979255a093b3794f83e6fa5b84dfa5cadcf19d` |
| Full speaker notes | `production/notes/FULL_SPEAKER_NOTES.md` | `96a28847d6f6f9d3f95ed25753d3e94b055653aa4c883f28c7761a445bdfbb1e` |
| Full preview inventory | `production/preview/full/S01.png`–`S80.png` | 80 files; each 1920×1080 |
| Montage | `production/preview/full/montage.png` | `43d3cb8b7abacd7aaa1d5aa8770c71c2dca73cac64b03e4d3b6e899c55829eab`; 1920×1600 |
| S73 render | `production/preview/full/S73.png` | `ae7466663aad459d7ecd21703b5097a6174ac5ee555d6e235125d3168c441c3a` |
| S77 render | `production/preview/full/S77.png` | `f0dd0398f123cdfb6492e6f9c074a26d1b19039ba0134ccf834b434ff03ba7f2` |

Renderer: Keynote 14.4 PDF export followed by macOS Quartz/CoreGraphics rasterization at 1920×1080. Host: macOS 26.6.2 (25G83). The temporary PDF and rendering scripts are not release artifacts. The preview was regenerated from the listed integrated-deck hash; Windows PowerPoint compatibility is not inferred from this render.

## Local Work Completed

- Reviewed the complete 80-slide render and integrated deck. Corrected only the integrated-deck geometry on S73 and S77 to bring the card row/callout within the established safe area. Updated those two PNGs and the montage. ACT source PPTX files, slide wording, notes, story, evidence, claims, IDs, timings, and modes remain unchanged.
- Checked the Office package: 373 ZIP entries; CRC check passed; 373 XML/relationship parts parsed; no missing internal relationship targets. `python-pptx` opened the deck with 80 slides at 16:9.
- Compared integrated slide text and embedded notes against ACT 0–5 source PPTX files: all 80 records matched. No ACT source deck was edited.
- Reconciled `plan/SLIDE_MAP.md`: 80 slides; ACT counts 9/12/15/18/18/8; ACT minutes 40/55/70/85/80/30; total 360. Mode totals match Lecture 130, Demo 73, Case 83, Reflection 20, Transition 22, Q&A 32. Each slide's mode total equals its allocation.
- Confirmed 80 Notes records with all 19 fields present and non-empty, and full Markdown/embedded-note content aligned. Two source issues are preserved and disclosed: 26 Validation Status fields in S55–S80 are freeform rather than the frozen status enumeration; S29's Research source retains a TODO about the RepoQA venue. Neither was silently rewritten.
- Added one operational runbook for each numbered Demo path (DEMO-04 split into DEMO-04A and DEMO-04B) and for LOOP-VISUAL. The runbooks use existing plan/Trial/state evidence only and point to static fallbacks; they do not execute an Agent or create a new Trial.
- Built a SHA-256 fallback manifest for 29 slide renders used by the runbooks. The fallback status is limited to local static playback. Raw terminal captures are not implied or fabricated.
- Ran the Demo repository's existing test suite read-only: 11 tests passed. Demo HEAD, branch, tags, no-remote configuration, and clean working tree were checked; the Demo repository was not modified.

## Known Local Layout Corrections

- S73's five-card recap and connectors were positioned inside the existing safe area; right edge is approximately 12.46 inches on a 13⅓-inch slide.
- S77's callout was moved left inside the same safe area; right edge is approximately 12.45 inches.
- These are geometry-only repairs in `production/AI_Dev_Training_Full.pptx`. Local Mac rendering and ACT source comparisons passed. This does not establish Windows rendering or room-distance readability.

## Demo State Preservation

The Demo repository remains read-only at `/Users/noah/workspace/education/ai-dev-training-demo`. Existing tags remain present: `STATE-00`, `STATE-00-FIXED`, `STATE-01`, `STATE-02`, `STATE-03`, `STATE-04`, `STATE-04-PERF`. No remote was added and no tag was moved.

## Open User Gates

1. Open/save/reopen/Slide Show the exact candidate on the target Windows PowerPoint build; inspect fonts, Korean, code, Notes, margins, and the focused Slide list in the validation checklist.
2. Select and verify the actual education Codex account/surface and permissions. Keep Live/Hybrid disabled until its target-specific path and fallback are rehearsed.
3. Test the deck and fallback on the actual room display/projector.
4. Rehearse the full 360-minute schedule, including S54 order and S72's 20-minute operation. Timings remain unverified until measured.
5. Review the two Notes-schema/open-source items if they affect production. Do not infer or invent missing source facts.
6. Obtain explicit approval for any protected plan change or external delivery.

Detailed steps and evidence fields: `production/evaluation/USER_VALIDATION_CHECKLIST.md`.
Runbooks and fallback files: `demos/runbooks/README.md` and `demos/runbooks/FALLBACK_MANIFEST.md`.
Execution evidence: `production/evaluation/MASTER_EXECUTION_STATUS.md`.

## Git Checkpoint

Training repository: existing `main` branch and existing `origin` only; force push prohibited. Geometry-only commit: `8b082b95b58a6dc48a42f251ea1e013c2c013414`. The final documentation checkpoint is the commit containing this handoff in Git history. The existing `origin/main` will be rechecked against final HEAD after push; this checkpoint does not approve classroom deployment or external delivery.

## Use Before Validation

Use the integrated PPTX for the full presentation. For an offline fallback, open the PNGs listed by the runbook and manifest. Explain only the Evidence and Claim boundary written in that runbook. If a target environment differs or a source cannot be opened, stop the Live path and return to the static slide fallback; do not generate new evidence during class.
