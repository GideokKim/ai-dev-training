# Four-slide Illustration Pilot

Status: LOCAL REVIEW COMPLETE — user visual review pending.

## Scope and authority

The user requested the recommended illustrations on S07, S37, S53 and S72,
while preserving course flow and evidence boundaries, with rendered previews.
This four-slide review copy follows `plan/SLIDE_MAP.md`,
`plan/SLIDE_TEMPLATE_MAP.md`, `plan/CLAIM_FREEZE.md`, and DEC-0027.
It does not change the 80-slide production deck or the Demo repository.

## Deliverables

- `AI_Dev_Training_Image_Pilot.pptx`: four slides in S07 / S37 / S53 / S72 order.
- `preview/`: four 1920×1080 PNGs and a 2×2 montage.
- `PILOT_NOTES.md`: the same 19-field Notes embedded in the review PPTX.
- `assets/`: four generated source illustrations.
- `PROMPTS.md`: complete built-in image_gen prompts and provenance.
- `VALIDATION.json`: package-independent ID, Notes, preview and hash checks.
- `source/build.mjs`: reproducible slide composition using the approved style.

## Slide review

| Slide | Image role | Retained boundary | Local review |
| --- | --- | --- | --- |
| S07 | Compare manually selected code snippets with delegated repository investigation. | Human goal setting and evidence review remain; the linked observation is one historical CLI Trial. | PASS |
| S37 | Show the difference between resizing and pixel-value rescaling, above the repeated procedure. | Generated teaching image, not a Trial output or optimization comparison; Prompt-only attribution remains limited. | PASS after revision |
| S53 | Give the Python-to-C++ pattern transfer a hypothetical Vision work setting. | No real company equipment, C++ implementation, team standard, performance result, or tool instruction is implied. | PASS |
| S72 | Provide a common scene for discussing changed input/build/hardware assumptions and verification. | Amber marks a hypothetical condition to examine, not an observed failure or proven cause. | PASS |

The S37 first draft used slightly different generated patterns for normalize.
Review identified the risk of implying a change in spatial content or contrast.
The final slide reuses one cropped source tile in native PowerPoint picture
objects: the resize pair differs only in displayed size; the normalize pair
uses identical crop and size, with an editable `2048 → 128` value example.
The picture is an illustration, not pixel-accurate output from a new Trial.
Image aspect ratios were corrected after the first render. S72's bottom
question was moved up to separate it from the evidence rule.

## Notes, timing and provenance

- Original Slide IDs, titles, Story roles and Claim boundaries are retained.
- S07: Lecture 3 minutes.
- S37: Case 5 minutes.
- S53: Lecture 5 minutes.
- S72: Case 7 + Reflection 2 + Q&A 7 + Transition 4 = 20 minutes.
- These selected slides total 33 minutes within the unchanged 360-minute plan.
- S07 uses left/right picture cues; S53/S72 cues now point at the image and
  questions. S72 retains static speaker-led operation and the original sequence.
- All four illustrations were generated with built-in image_gen on 2026-10-18.
  They are explicitly marked as AI-generated teaching illustrations on screen
  and in Notes. No current product screenshot or new Trial was created.

## Validation and limits

The exported PPTX was reimported and all four exact-file renders reviewed.
Package relationships, four-slide count, 16:9 geometry, reference typefaces,
and native text structure passed the local finalizer. The four embedded Notes
match Markdown and each contains the 19 required fields. No clipping, missing
Korean glyphs, or unintended text overlap was found in the local renders.

Slide text, labels, arrows and Notes remain editable. Illustrations are separate
raster picture objects; their internal artwork is not native vector content.
The source images remain in the repository and can be replaced independently.

The PPTX retains Malgun Gothic and Consolas. Local preview used Apple SD Gothic
Neo and Menlo aliases. Windows PowerPoint, presentation-room projection,
target-machine fonts and timed rehearsal remain UNVERIFIED. S72's actual
20-minute operation has not been rehearsed.

The production PPTX SHA-256 remains
`9f5e9276a6c197122c31af1fab1dfd22761650355fcacda8d34e70eebaf7fdbd`.
Only this Pilot directory is new. Production integration is a later step after
the user reviews this image direction.
