# ACT 0 Opening Revision — S01–S04

> Historical record — 이 문서는 DEC-0036 이전 80장 판의 번호와 검증 결과를 보존한다. 현재 81장 판과의 대응은 [Slide ID Migration](../../plan/SLIDE_ID_MIGRATION.md)을 따른다. 과거 PASS는 현재 파일의 재검증을 뜻하지 않는다.


Date: 2026-10-21. Decision: DEC-0034. Local artifact status: PASS.

## Changes

| Slide | Revision | Preserved purpose |
|---|---|---|
| S01 | Promote the reviewed three-scene illustration with short editable captions. | Open reflection without ranking the audience. |
| S02 | Compare `std::vector<int> a(3, 1);` with `std::vector<int> b{3, 1};`; retain the connected IDE → Chatbot → IDE flow. | Recognize the usefulness of a small code question and the human selection of Context. |
| S03 | Replace the person-and-paper illustration with six parallel Context areas: tests, call stack, source/references, runtime variables, output/logs and specification documents. | Make the familiar work of gathering information visible before introducing the Agent solution. |
| S04 | Reconstruct the actual request as an editable prompt input; place a labeled fictional GoogleTest image on the right. | Establish what to observe before S05 opens the actual investigation result. |

The S02 example means three elements with value 1 for `a`, and two elements
with values 3 and 1 for `b`. Meaning was checked against Microsoft Learn
[vector constructors](https://learn.microsoft.com/en-us/cpp/standard-library/vector-class?view=msvc-170#vector)
and [Initializers](https://learn.microsoft.com/en-us/cpp/cpp/initializers?view=msvc-170).
No new compilation, test execution or ChatGPT response is asserted.

## Evidence Boundary

- S01 is an AI-generated teaching illustration with three equally weighted examples.
- S02 is a code explanation and a native teaching diagram, not a product capture.
- S03 is a native parallel teaching diagram. The specification document is
  external reference material, not a fabricated Visual Studio tool window.
- S04's left panel preserves the TRIAL-001 request with display line breaks.
  The panel represents an input area; it is not a current Codex UI screenshot.
- S04's right panel has six fictional GoogleTest items, five passed and one
  failed. Its native caption and internal `ILLUSTRATIVE MOCKUP` label distinguish
  it from the historical evidence. The real TRIAL-001 used Python unittest:
  seven passes, one crop failure and three read-only environment errors.
- S05 and S06 retain the actual investigation result, reconstruction labels,
  code path and environment limitations. No Trial or Demo repository changed.

## Local Validation

1. Finalize the integrated 80-slide PPTX and ACT 0 nine-slide PPTX with the
   existing Artifact Tool authoring pipeline and designated fonts.
2. Reimport each exact finalized PPTX and render all 80/9 slides at 1920×1080.
3. Review S01–S04 individually. An independent second review also found no
   clipping, unintended overlap, missing text or required visual correction.
4. Confirm final S01–S04 PNGs match the independently reviewed draft bytes.
5. Compare all 76 unchanged full-deck PNGs against the previous production
   files: all SHA-256 values match. ACT 0 and Full PNGs match for all nine slides.
6. Confirm the other 76 Markdown Notes records are byte-identical. Confirm
   all 80 Full and nine ACT 0 embedded Notes records match their canonical text,
   allowing XML whitespace serialization.
7. Preserve Slide IDs, titles, ACT/Section/Story mapping, Evidence Types,
   per-slide time/Mode and existing frozen claim scope. S04 adds an explicit
   limitation for the fictional GoogleTest UI without changing historical claims.
8. Confirm 80 slides, 360 minutes; ACT time 40/55/70/85/80/30; Mode totals
   Lecture 130, Demo 73, Case 83, Reflection 20, Transition 22 and Q&A 32.
9. Package integrity, declared font/geometry and Artifact Tool import pass
   for both final PPTX files. Native text, diagrams, prompt and S45 chart remain
   editable. The S01/S04 illustration assets are embedded images with source
   prompts and bounded provenance.

Details and final PPTX SHA-256 values:
`production/evaluation/ACT_0_OPENING_REVISION_VALIDATION.json`.

## Delivery Scope

Updated official files: `production/AI_Dev_Training_Full.pptx`,
`production/ACT_0.pptx`, the four affected previews in Full/ACT 0, both
montages and aligned Notes/planning documents. The earlier two-slide review
remains a historical prototype.

Presenter ZIPs and package manifests were not regenerated. The existing
presenter bundle is an earlier DEC-0033 snapshot and does not contain these
opening revisions. Use the production PPTX and current previews for review.

## Remaining Gates

Windows PowerPoint, target fonts, room projection, current product/account
behavior and timed rehearsal remain UNVERIFIED. A successful local rendering
or file inspection does not replace those checks. The planned S01/S02 timing
does not assert an observed rehearsal result.
