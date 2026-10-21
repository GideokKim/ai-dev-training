# Presentation revision source

Current sequence: **82 slides**, DEC-0038. S11/S12 use prompt-window and
parallel-timeline teaching visuals; the inserted S13 shows a specified
intended path. Former S13–S81 now appear as S14–S82. S01–S12 keep their IDs,
and ACT 0 (S01–S10) keeps its accepted content. The current Slide IDs below
follow the 82-slide sequence. Historical Decisions, prototypes and captured
asset filenames retain their original IDs; `plan/SLIDE_ID_MIGRATION.md`
provides the cross-version index.

DEC-0039 refines S17 with translated excerpts of the actual TRIAL-002 Prompt
matched to vertical numbered observable actions, without arrows. S18 recalls
02 investigation / 03 plan before 04 minimal edit, then hands off to S19
verification. Both changes live in `act01.mjs`; the total remains 82 slides
and 360 minutes. Rebuild the full deck and ACT 1 with `--release
--release-acts=1`; leave other ACT packages untouched.

DEC-0040 replaces only S11's native token/time curve and arrow graphics
with two transparent imagegen PNGs in `prompt-timelines.mjs`. Labels and
all other content stay native and unchanged; the images remain qualitative
with no measurements. Rebuild Full + ACT 1 for this revision.

These modules reproduce the audience-facing revision accepted in DEC-0027.
DEC-0028 adds the approved S07/S39/S55/S74 teaching illustrations and the S74
text-box repair. The original pilot remains a historical review artifact.
DEC-0029 completes the remaining approved candidates S03/S59/S76. S43 retains
its labeled reconstruction because no original execution capture is available.
DEC-0030 applies the fourteen approved presentation improvements to 32 slides,
keeping all source mappings, time allocations and evidence boundaries.
DEC-0032 improves the reviewed adjacent-slide handoffs and private closing
reflection through the same factories. DEC-0033 reinforces S07/S16/S20/S21
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
and the new S08 Lecture 1. The then-current ACT counts were 10/12/15/18/18/8.
DEC-0037 grounds S10 in a hypothetical manufacturing inspection pipeline.
Solid crop marks the existing investigated scope; dashed downstream nodes
mark future inspection-task definitions/connections, not missing functions.
The original two questions and six-minute Transition/Q&A allocation remain.
Other Story/Section/Demo/Trial identities and evidence boundaries remain
protected. The product-entry composition is owned by `product-entry.mjs`.
DEC-0038 adds one slide after S12 and updates S11/S12. The current ACT counts
are 10/13/15/18/18/8 with the same 360 minutes and ACT/Mode totals. S12's old
Case 4 minutes become S12 Case 2 plus the inserted S13 Case 2. The new
`prompt-timelines.mjs` overlay loads after product-entry and before module
footers. Token/time growth is an explicitly qualitative conceptual graphic,
not a measured exponential law. Timeline branches depict possible readings;
the selected path is intended scope, not deterministic execution or success.
They use `@oai/artifact-tool`; text, diagrams and the S47 chart remain native
PowerPoint elements. Comparison rows are editable text and rule objects, not
flattened images. Content authority stays in `plan/`, and Notes are
read from the six `production/notes/ACT_*_NOTES.md` files.

- `helpers.mjs`: shared palette, typography, evidence rules and native elements.
- `pilot.mjs`: approved S05/S25/S47/S59 layouts.
- `act01.mjs`, `act23.mjs`, `act45.mjs`: slide-specific compositions.
- `illustrations.mjs`: four illustration layouts applied after the originals.
- `additional-visuals.mjs`: S03 scene and S76 source-slide excerpts.
- `test-scope-visual.mjs`: S59 native module and integration-scope diagram.
- `polish-early.mjs`, `polish-harness.mjs`, `polish-late.mjs`: approved reading
  hierarchy, bilingual excerpts, distinct slide roles and evidence labels.
- `polish-visuals.mjs`: S74 question hierarchy and S76 directed State rail.
- `legacy-priority.mjs`: the four approved teaching additions and safe-area footer.
- `legacy-module-map.json`: all 82 footer labels and bounded module relations.
- `act0-opening.mjs`: approved opening visuals; the GoogleTest image is a
  labeled teaching mockup, not a Trial capture or current product UI.
- `product-entry.mjs`: new S08 Codex entry guidance and S09 human/Agent
  access versus human final-decision roles; applied before module footers.
- `prompt-timelines.mjs`: root-owned S11/S12/S13 prompt-window, possible
  timeline interpretations and scoped intended-path teaching layouts.
- `build.mjs`: draft/release export, package validation and exact-file rendering.

Use the bundled Codex runtime. Set `RUNTIME_NODE_MODULES`, `RUNTIME_PYTHON`,
`PRESENTATION_SKILL_DIR`, and a private `PRESENTATION_WORK_DIR` outside the
repository. For release builds set `PRESENTATION_BASELINE` to a preserved
reference PPTX. Optional preview-only font aliases are `KOREAN_PREVIEW_FONT`
and `CODE_PREVIEW_FONT`; these do not change the designated PPTX typefaces.

Run `build.mjs --release` for the full deck and six ACT files. A draft can be
limited with `--ids=S01,S02`. Use `--release --release-acts=0,3,4` to export the
full deck and only the affected ACTs for this illustration revision.
The subsequent S03/S59/S76 revision uses `--release --release-acts=0,4,5`.
The DEC-0038 migration requires the full deck and ACT 1–5 because displayed
Slide IDs and current references shift after S12. ACT 0 remains an unchanged
accepted artifact; use `--release --release-acts=1,2,3,4,5` for this revision.
Each build uses a fresh directory; the script
does not overwrite production deliverables. After source, render and package
review, copy the verified release files and PNGs into production. Windows,
classroom readability and rehearsal require separate validation.

Additional assets, exact prompt, source-render hashes and native crop windows
are preserved under `assets/slide-illustrations/`. The S76 excerpts reuse
frozen renders of the existing S18/S34/S47 teaching material. They are not raw
execution screenshots, and the original S47 chart stays editable in its slide.

Historical bitmap filenames do not move with the current Slide IDs:

| Current Slide | Preserved asset filename |
|---|---|
| S39 | `prototype/image-illustration-pilot/assets/S37.png` |
| S55 | `prototype/image-illustration-pilot/assets/S53.png` |
| S74 | `prototype/image-illustration-pilot/assets/S72.png` |
| S18 | `assets/slide-illustrations/recap/S16-source.png` |
| S34 | `assets/slide-illustrations/recap/S32-source.png` |
| S47 | `assets/slide-illustrations/recap/S45-source.png` |

The source file maps current keys to those preserved assets explicitly.
Do not rename the source images or imply that their old prototype labels
were re-rendered during this migration. Presenter bundle generation remains
paused; this production builder does not invoke the delivery builder.

DEC-0033 renders the full deck and every ACT because all footers change. The
M labels identify related teaching content or principles; they do not claim
completion of the original module. Unmatched slides say `신규 확장`.
