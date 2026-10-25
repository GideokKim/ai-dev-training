# STEP 08 — ACT 0 Production Evaluation

> Current: DEC-0093 /115slides/406minutes. New S63/S68 are Codex authoring tips. Retained113budgets/evidence and ACT4 nineteen pages/eighty-one minutes stay fixed; current IDs follow [113→115](../../plan/SLIDE_ID_MIGRATION_115.md). See [current local result](CODEX_AUTHORING_TIPS.md). Earlier audits retain their dated edition; external gates UNVERIFIED.

> Current edition: DEC-0091 /113slides/402minutes. ACT0: 14slides/43minutes, S01–S14. Existing per-page budgets stay fixed outside the approved ACT3 replacement. See [scoped revision](HARNESS_REUSE_REVISION.md) and [108→113](../../plan/SLIDE_ID_MIGRATION_113.md). Dated audits below retain their edition; external gates UNVERIFIED.

> Historical edition: DEC-0090 /108slides/396minutes. ACT0: 14slides/43minutes. Title S01 adds1Transition minute before the original body. See [ACT title result](ACT_TITLE_SLIDES.md) and [102→108](../../plan/SLIDE_ID_MIGRATION_108.md). Dated audits below retain their edition; external gates remain UNVERIFIED.

> Historical edition: DEC-0088 /102slides/390minutes. ACT0: 13slides/42minutes. See [final reference block](FINAL_PRACTICAL_TIPS_CONSOLIDATION.md) and [105→102](../../plan/SLIDE_ID_MIGRATION_102.md). Dated audit below retains its edition; external gates remain UNVERIFIED.

> Historical edition: DEC-0087 /105slides/393minutes. See [tip/index result](PRACTICAL_APPLICATION_TIPS.md) and [99→105](../../plan/SLIDE_ID_MIGRATION_105.md). Dated audit below retains its edition; external gates remain UNVERIFIED.

> Current edition: DEC-0084 /99slides/387minutes. See [ACT0 expansion result](ACT_0_CONTEXT_EXPANSION.md) and [96→99 migration](../../plan/SLIDE_ID_MIGRATION_99.md). The body below preserves this ACT's earlier evaluation IDs/results; its old PASS does not validate current Windows/room/rehearsal.

> Current-version router — 이 보고서의 번호·장수·파일·hash·검증 결과는 해당 Decision 당시의 역사적 판본이다. 현재 82장 번호는 [새 이행표](../../plan/SLIDE_ID_MIGRATION_82.md), 현재 제작 결과는 [Prompt·시간선 수정](PROMPT_TIMELINE_REVISION.md)을 따른다.

> Historical record — 이 문서는 DEC-0036 이전 80장 판의 번호와 검증 결과를 보존한다. 현재 81장 판과의 대응은 [Slide ID Migration](../../plan/SLIDE_ID_MIGRATION.md)을 따른다. 과거 PASS는 현재 파일의 재검증을 뜻하지 않는다.


Date: 2026-10-11
Scope: S01–S09 only
Overall status: **PARTIAL**

## Production Outputs

- PowerPoint: `production/ACT_0.pptx` — 9 slides, 16:9, native editable text and shapes.
- Speaker Notes: `production/notes/ACT_0_NOTES.md` — 9 records, each with all 19 approved fields.
- Embedded notes: present on all 9 PowerPoint slides.
- Previews: `production/preview/act0/S01.png` through `S09.png`, plus `montage.png`.

## Slide-by-Slide Evaluation

| Slide | Result | Review |
|---|---|---|
| S01 | PASS | Opens with a non-judgmental reflection. The three grouped ranges preserve the approved usage continuum without introducing later ACT detail. |
| S02 | PASS | Shows the approved five-step Chatbot workflow and acknowledges its usefulness for small questions. |
| S03 | PASS | Frames Repository-level context gathering as a conceptual problem and leaves the solution open. |
| S04 | PASS | Separates the read-only Trial task from three observation targets. The result region is empty; the CLI version and scope are visible. |
| S05 | PARTIAL | TRIAL-001 facts and limits are accurately shown in a clearly labeled reconstruction. No raw capture or current Desktop/account surface was verified, so the HYBRID path remains inactive. |
| S06 | PASS | Separates the reproduced Crop failure and unchanged code from the three read-only temporary-directory errors. The environment errors are not attributed to the Repository or Crop implementation. |
| S07 | PASS | Separates the teaching model from the single-run Product observation and keeps the C++ connection as a contextual inset. |
| S08 | PASS | Distinguishes Repository access from Task intent without teaching ACT 1’s detailed Task Specification. |
| S09 | PASS | Leaves the question open, preserves Transition then Q&A order, and hands off to Chatbot → Prompt without previewing ACT 1 content. |

PASS means the slide passed the local static review for message, evidence boundary, visual hierarchy, template fit, and Notes coverage. It does not mean a live presentation or external environment was validated.

## Visual and Template Validation

- Mapped templates: S01 T01-A; S02 T03-C; S03 T02-A; S04 T05-A; S05–S06 T07-A; S07 T04-B; S08 T02-A; S09 T01-B.
- The deck uses the approved Light Engineering Workbench palette and 16:9 layout. All 9 slides were rendered and visually inspected at full resolution and in the montage.
- Local preview dimensions: 1921 × 1080 pixels per slide. The rendered images show no observed text clipping, shape overlap, or safe-margin violation.
- PPTX structure validation: **PASS**. The package contains 9 slides, 9 notes slides, 190 native shape/text objects, and no picture objects.
- The PPTX retains the specified Malgun Gothic and Consolas font names. Those fonts are not installed in this render environment, so local previews used a temporary font substitution to display Korean glyphs. Windows PowerPoint font rendering and compatibility remain **UNVERIFIED**.
- No actual projector, presentation-room, or audience-distance check was performed.

## Demo Evidence and Claim Boundary

- S04–S06 use TRIAL-001, a single isolated, non-interactive Codex CLI 0.154.0 run on macOS in a read-only environment.
- S05 is labeled `RECONSTRUCTED DIAGRAM / NOT A SCREENSHOT`; it shows the recorded failing Test, call path, half-open contract, and observed implementation boundary.
- No slide presents this Trial as evidence of current Codex Desktop behavior, an education account, repeatability, or general product performance.
- S06 keeps the full-suite Crop failure separate from three environment errors caused by inability to create temporary directories in the read-only sandbox. The code was not changed.
- The presentation account/surface and any HYBRID activation remain unverified. No Demo Repository files or states were changed.

## Time and Mode Audit

| Slide | Time | Mode allocation |
|---|---:|---|
| S01 | 5 | Lecture 1 + Reflection 4 |
| S02 | 5 | Lecture 5 |
| S03 | 4 | Case 4 |
| S04 | 2 | Lecture 2 |
| S05 | 8 | Demo 8 |
| S06 | 5 | Case 5 |
| S07 | 3 | Lecture 3 |
| S08 | 2 | Lecture 2 |
| S09 | 6 | Transition 3 + Q&A 3 |
| **ACT 0 total** | **40** | **Lecture 13 · Demo 8 · Case 9 · Reflection 4 · Transition 3 · Q&A 3 = 40** |

All Slide times and mode splits match `plan/SLIDE_MAP.md`; no time is double-counted. The S05 Slide Map subtype remains HYBRID, but this production does not activate that path before environment verification.

## Remaining Issues

- **P1 — Product surface / delivery:** Verify the intended education account, Codex surface, and demo path before activating any HYBRID delivery. Confirm whether a selected captured artifact can be used; otherwise retain the labeled reconstruction.
- **P1 — Windows:** Open the PPTX in Windows PowerPoint and check font substitution, Korean line breaks, code wrapping, shape alignment, citation/evidence readability, aspect ratio, and presentation mode. Mac/LibreOffice rendering does not satisfy this gate.
- **P2 — Live operation:** Rehearse the 40-minute ACT 0 pacing and S09 Transition/Q&A timing on the intended display. Audience response and presentation speed have not been tested.

No P0 visual or evidence-boundary issue remains in the locally inspected production artifact.

## Next Readiness

**READY FOR ACT 0 REVIEW** — local production is complete. Review does not imply Windows, current product-surface, or live-presentation validation.
