# Additional slide visuals

> Historical asset record — 원 Slide ID는 당시 80장판을 보존한다. DEC-0036 당시 S57→S58 / S74→S75 / 발췌 S16/S32/S45→S17/S33/S46 대응은 [번호 이행표](../../plan/SLIDE_ID_MIGRATION.md)를 따른다. 원 프롬프트·실제 파일명은 유지한다. 신규 S08/S09 출처·아이콘은 [CODEX_ENTRY_SOURCES.md](CODEX_ENTRY_SOURCES.md)에 기록한다.

현재 DEC-0038의 82장 번호는 [새 이행표](../../plan/SLIDE_ID_MIGRATION_82.md)를 따른다. 새 Agent·시간선 출처는 [PROMPT_TIMELINE_SOURCES.md](PROMPT_TIMELINE_SOURCES.md)에 기록한다.

Date: 2026-10-18 (Asia/Seoul).

Current opening revision: DEC-0034, 2026-10-21. The S03 person-and-paper
asset below is historical; production now uses a native parallel Context
diagram. The approved S01 asset is `S01-cases.png`, with its original prompt
in `prototype/act0-opening-revision/IMAGE_PROMPT.md`. The S04 fictional
GoogleTest image is `S04-google-test-mock.png`; its exact generation prompt
and evidence limits are in `S04_PROMPT.md`. No image is a new Trial capture.

## S03 — Generated context-collection illustration

Asset: `S03-context-collection.png`.

Method: built-in `image_gen`, new illustration, no reference image.
The scene is hypothetical. It is not a Trial capture or current product UI.

Prompt:

Use case: illustration-story. Asset type: explanatory illustration for S03 of a Korean developer training PowerPoint, not a screenshot. Primary request: a developer manually gathers context from implementation code, call-path notes, failing-test notes, and an input/output contract before asking a repository-level question. Scene: one adult developer at a desk, looking between several separate document sheets and an ordinary monitor; carefully selecting a few relevant scraps and arranging them together. Show three small distinct groups of materials around the person: code sheets with code-like lines, test sheets with neutral check-box outlines (no pass/fail results), and contract/reference sheets with a simple input/output sketch. A small blank speech/question bubble may show a question mark only. The human is doing the selecting; no agent/robot, no autonomous search, no solution, no before/after success. Style: polished restrained engineering editorial illustration, clean fine charcoal outlines and subtle soft shading, light gray #F4F6F8 background blending to edges, dark slate, cool neutral gray, and muted deep teal #0B6172 accents. Match a Light Engineering Workbench presentation. Composition: wide horizontal 2:1 canvas, all important objects within the central 85 percent, person waist-up in lower center, documents arranged left and right, uncluttered and legible as a teaching image. No readable text, no headings, no watermark, no brand logos, no UI chrome, no fictional logs or metrics. This is a hypothetical teaching scene and should be clearly illustration rather than a photograph.

## S57 — Native test-scope diagram

No image generation. Editable PowerPoint text, rectangles and arrows show
individual modules versus their connection. This diagram implements the
accepted DEC-0027 hypothetical scenario without asserting a test run.

## S74 — Existing slide excerpts

No image generation. `recap/S16-source.png`, `recap/S32-source.png` and
`recap/S45-source.png` are byte-identical copies of the production slide
renders at baseline commit `93d4912`. Native PowerPoint crops select the
regions listed in `ASSET_MANIFEST.json`; source files remain intact.
These are excerpts of teaching diagrams and a recorded-data chart, not raw
terminal screenshots, newly measured results, or photographs.

The four earlier generated illustrations and prompts remain in
`prototype/image-illustration-pilot/`.
