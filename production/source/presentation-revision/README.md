# Presentation revision source

These modules reproduce the audience-facing revision accepted in DEC-0027.
DEC-0028 adds the approved S07/S37/S53/S72 teaching illustrations and the S72
text-box repair. The original pilot remains a historical review artifact.
DEC-0029 completes the remaining approved candidates S03/S57/S74. S41 retains
its labeled reconstruction because no original execution capture is available.
DEC-0030 applies the fourteen approved presentation improvements to 32 slides,
keeping all source mappings, time allocations and evidence boundaries.
DEC-0032 improves the reviewed adjacent-slide handoffs and private closing
reflection through the same factories. DEC-0033 reinforces S07/S14/S18/S19
and applies a bounded legacy-module connection footer to all 80 slides.
DEC-0034 applies the approved S01 opening illustration, S02 C++ initialization
comparison, S03 parallel debugging Context diagram and S04 prompt-input/fictional
GoogleTest presentation. The historical Trial remains a Python unittest record.
DEC-0035 connects S05 to the intended-versus-included width and distinguishes
S06 code Context from unprovided execution-environment information. The
counterfactual Chatbot framing is a teaching interpretation, not a comparison
experiment or a change to the historical Trial.
Slide identities, time allocations and evidence boundaries remain protected.
They use `@oai/artifact-tool`; text, diagrams and the S45 chart remain native
PowerPoint elements. Comparison rows are editable text and rule objects, not
flattened images. Content authority stays in `plan/`, and Notes are
read from the six `production/notes/ACT_*_NOTES.md` files.

- `helpers.mjs`: shared palette, typography, evidence rules and native elements.
- `pilot.mjs`: approved S05/S23/S45/S57 layouts.
- `act01.mjs`, `act23.mjs`, `act45.mjs`: slide-specific compositions.
- `illustrations.mjs`: four illustration layouts applied after the originals.
- `additional-visuals.mjs`: S03 scene and S74 source-slide excerpts.
- `test-scope-visual.mjs`: S57 native module and integration-scope diagram.
- `polish-early.mjs`, `polish-harness.mjs`, `polish-late.mjs`: approved reading
  hierarchy, bilingual excerpts, distinct slide roles and evidence labels.
- `polish-visuals.mjs`: S72 question hierarchy and S74 directed State rail.
- `legacy-priority.mjs`: the four approved teaching additions and safe-area footer.
- `legacy-module-map.json`: all 80 footer labels and bounded module relations.
- `act0-opening.mjs`: approved opening visuals; the GoogleTest image is a
  labeled teaching mockup, not a Trial capture or current product UI.
- `build.mjs`: draft/release export, package validation and exact-file rendering.

Use the bundled Codex runtime. Set `RUNTIME_NODE_MODULES`, `RUNTIME_PYTHON`,
`PRESENTATION_SKILL_DIR`, and a private `PRESENTATION_WORK_DIR` outside the
repository. For release builds set `PRESENTATION_BASELINE` to a preserved
reference PPTX. Optional preview-only font aliases are `KOREAN_PREVIEW_FONT`
and `CODE_PREVIEW_FONT`; these do not change the designated PPTX typefaces.

Run `build.mjs --release` for the full deck and six ACT files. A draft can be
limited with `--ids=S01,S02`. Use `--release --release-acts=0,3,4` to export the
full deck and only the affected ACTs for this illustration revision.
The subsequent S03/S57/S74 revision uses `--release --release-acts=0,4,5`.
Each build uses a fresh directory; the script
does not overwrite production deliverables. After source, render and package
review, copy the verified release files and PNGs into production. Windows,
classroom readability and rehearsal require separate validation.

Additional assets, exact prompt, source-render hashes and native crop windows
are preserved under `assets/slide-illustrations/`. The S74 excerpts reuse
frozen renders of the existing S16/S32/S45 teaching material. They are not raw
execution screenshots, and the original S45 chart stays editable in its slide.

DEC-0033 renders the full deck and every ACT because all footers change. The
M labels identify related teaching content or principles; they do not claim
completion of the original module. Unmatched slides say `신규 확장`.
