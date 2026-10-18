# Presentation revision source

These modules reproduce the audience-facing revision accepted in DEC-0027.
They use `@oai/artifact-tool`; text, diagrams and the S45 chart remain native
PowerPoint elements. Comparison rows are editable text and rule objects, not
flattened images. Content authority stays in `plan/`, and Notes are
read from the six `production/notes/ACT_*_NOTES.md` files.

- `helpers.mjs`: shared palette, typography, evidence rules and native elements.
- `pilot.mjs`: approved S05/S23/S45/S57 layouts.
- `act01.mjs`, `act23.mjs`, `act45.mjs`: slide-specific compositions.
- `build.mjs`: draft/release export, package validation and exact-file rendering.

Use the bundled Codex runtime. Set `RUNTIME_NODE_MODULES`, `RUNTIME_PYTHON`,
`PRESENTATION_SKILL_DIR`, and a private `PRESENTATION_WORK_DIR` outside the
repository. For release builds set `PRESENTATION_BASELINE` to a preserved
reference PPTX. Optional preview-only font aliases are `KOREAN_PREVIEW_FONT`
and `CODE_PREVIEW_FONT`; these do not change the designated PPTX typefaces.

Run `build.mjs --release` for the full deck and six ACT files. A draft can be
limited with `--ids=S01,S02`. Each build uses a fresh directory; the script
does not overwrite production deliverables. After source, render and package
review, copy the verified release files and PNGs into production. Windows,
classroom readability and rehearsal require separate validation.
