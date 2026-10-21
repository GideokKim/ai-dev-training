# Presentation revision source

Current sequence: **81 slides**, DEC-0036. The inserted S08 explains the
Codex entry point; the former S08–S80 now appear as S09–S81. The Slide IDs
below use the current sequence. Historical Decisions and prototypes retain
their original IDs; `plan/SLIDE_ID_MIGRATION.md` is the cross-version index.

These modules reproduce the audience-facing revision accepted in DEC-0027.
DEC-0028 adds the approved S07/S38/S54/S73 teaching illustrations and the S73
text-box repair. The original pilot remains a historical review artifact.
DEC-0029 completes the remaining approved candidates S03/S58/S75. S42 retains
its labeled reconstruction because no original execution capture is available.
DEC-0030 applies the fourteen approved presentation improvements to 32 slides,
keeping all source mappings, time allocations and evidence boundaries.
DEC-0032 improves the reviewed adjacent-slide handoffs and private closing
reflection through the same factories. DEC-0033 reinforces S07/S15/S19/S20
and applies a bounded legacy-module footer to the then-80-slide deck.
DEC-0034 applies the approved S01 opening illustration, S02 C++ initialization
comparison, S03 parallel debugging Context diagram and S04 prompt-input/fictional
GoogleTest presentation. The historical Trial remains a Python unittest record.
DEC-0035 connects S05 to the intended-versus-included width and distinguishes
S06 code Context from unprovided execution-environment information. The
counterfactual Chatbot framing is a teaching interpretation, not a comparison
experiment or a change to the historical Trial.
DEC-0036 authorizes this one-time renumbering and the S09 responsibility icons.
It keeps 360 minutes by splitting the old S07 Lecture 3 into S07 Lecture 2
and the new S08 Lecture 1. ACT slide counts are 10/12/15/18/18/8.
Other Story/Section/Demo/Trial identities and evidence boundaries remain
protected. The new product-entry composition is owned by `product-entry.mjs`.
They use `@oai/artifact-tool`; text, diagrams and the S46 chart remain native
PowerPoint elements. Comparison rows are editable text and rule objects, not
flattened images. Content authority stays in `plan/`, and Notes are
read from the six `production/notes/ACT_*_NOTES.md` files.

- `helpers.mjs`: shared palette, typography, evidence rules and native elements.
- `pilot.mjs`: approved S05/S24/S46/S58 layouts.
- `act01.mjs`, `act23.mjs`, `act45.mjs`: slide-specific compositions.
- `illustrations.mjs`: four illustration layouts applied after the originals.
- `additional-visuals.mjs`: S03 scene and S75 source-slide excerpts.
- `test-scope-visual.mjs`: S58 native module and integration-scope diagram.
- `polish-early.mjs`, `polish-harness.mjs`, `polish-late.mjs`: approved reading
  hierarchy, bilingual excerpts, distinct slide roles and evidence labels.
- `polish-visuals.mjs`: S73 question hierarchy and S75 directed State rail.
- `legacy-priority.mjs`: the four approved teaching additions and safe-area footer.
- `legacy-module-map.json`: all 81 footer labels and bounded module relations.
- `act0-opening.mjs`: approved opening visuals; the GoogleTest image is a
  labeled teaching mockup, not a Trial capture or current product UI.
- `product-entry.mjs`: new S08 Codex entry guidance and S09 human/Agent
  access versus human final-decision roles; applied before module footers.
- `build.mjs`: draft/release export, package validation and exact-file rendering.

Use the bundled Codex runtime. Set `RUNTIME_NODE_MODULES`, `RUNTIME_PYTHON`,
`PRESENTATION_SKILL_DIR`, and a private `PRESENTATION_WORK_DIR` outside the
repository. For release builds set `PRESENTATION_BASELINE` to a preserved
reference PPTX. Optional preview-only font aliases are `KOREAN_PREVIEW_FONT`
and `CODE_PREVIEW_FONT`; these do not change the designated PPTX typefaces.

Run `build.mjs --release` for the full deck and six ACT files. A draft can be
limited with `--ids=S01,S02`. Use `--release --release-acts=0,3,4` to export the
full deck and only the affected ACTs for this illustration revision.
The subsequent S03/S58/S75 revision uses `--release --release-acts=0,4,5`.
The DEC-0036 migration requires the full deck and every ACT because the
displayed Slide IDs and current cross-references shift after S07.
Each build uses a fresh directory; the script
does not overwrite production deliverables. After source, render and package
review, copy the verified release files and PNGs into production. Windows,
classroom readability and rehearsal require separate validation.

Additional assets, exact prompt, source-render hashes and native crop windows
are preserved under `assets/slide-illustrations/`. The S75 excerpts reuse
frozen renders of the existing S17/S33/S46 teaching material. They are not raw
execution screenshots, and the original S46 chart stays editable in its slide.

Historical bitmap filenames do not move with the current Slide IDs:

| Current Slide | Preserved asset filename |
|---|---|
| S38 | `prototype/image-illustration-pilot/assets/S37.png` |
| S54 | `prototype/image-illustration-pilot/assets/S53.png` |
| S73 | `prototype/image-illustration-pilot/assets/S72.png` |
| S17 | `assets/slide-illustrations/recap/S16-source.png` |
| S33 | `assets/slide-illustrations/recap/S32-source.png` |
| S46 | `assets/slide-illustrations/recap/S45-source.png` |

The source file maps current keys to those preserved assets explicitly.
Do not rename the source images or imply that their old prototype labels
were re-rendered during this migration. Presenter bundle generation remains
paused; this production builder does not invoke the delivery builder.

DEC-0033 renders the full deck and every ACT because all footers change. The
M labels identify related teaching content or principles; they do not claim
completion of the original module. Unmatched slides say `신규 확장`.
