# STEP 08 — Visual Prototype Evaluation

> **Historical Working Draft — 80장 판본.** 아래 원본 Slide ID, 프로토타입·Pilot 수, 실제 파일 경로와 당시 평가 결과를 보존한다. 현재 공식 Map은 DEC-0036의 81장 판본이며, 종전 S08–S80의 현재 번호는 S09–S81이다. 현재 번호는 [SLIDE_ID_MIGRATION.md](SLIDE_ID_MIGRATION.md)로 대조한다. 이 문서의 과거 판정을 새 판본의 검증 결과로 확대하지 않는다.

Date: 2026-10-10

Status: PARTIAL

## Scope and Result

Created the seven approved prototype slides S14, S35, S45, S56, S67, S72,
and S73 from the current Slide Map and Template Map. The presentation is
editable and uses native text and shapes on a 16:9 canvas. Every slide is
marked `PROTOTYPE COPY`.

The rendered slides were reviewed in the available Artifact Tool preview.
Package integrity and layout checks reported no findings or warnings, and
the same seven-slide file imported successfully through the first-party
Artifact Tool. These checks do not establish native PowerPoint behavior.

Overall status is PARTIAL because S72 has static cumulative emphasis rather
than authored reveal states or animation, and the specified fonts, Windows
PowerPoint compatibility, and presentation-room readability were not
verified in their target environment.

## Files Created

- `prototype/AI_Dev_Training_Visual_Prototype.pptx`
- `prototype/preview/S14.png`
- `prototype/preview/S35.png`
- `prototype/preview/S45.png`
- `prototype/preview/S56.png`
- `prototype/preview/S67.png`
- `prototype/preview/S72.png`
- `prototype/preview/S73.png`
- `prototype/preview/montage.png`
- `plan/VISUAL_PROTOTYPE_EVALUATION.md`

## Slide Evaluation

| Slide | Message / hierarchy | Evidence and claim boundary | Preview readability | Template / bridge | Result |
|---|---|---|---|---|---|
| S14 | Prompt comparison remains primary; C++ bridge is subordinate. | Illustrative comparison; no observed-product claim. | PASS in available preview. | T04-A; supporting C++ inset. | PASS |
| S35 | Compact A/B access matrix avoids a file-log dump. | TRIAL-005A/B distinction is retained; broader access is acknowledged; perfect routing, token savings, and performance improvement are not claimed. | PASS in available preview. | T04-C. | PASS |
| S45 | Correctness guard and measurements are visually bounded. | STATE-04 → STATE-04-PERF; measurements and environment are qualified; no Harness-only causal claim. | PASS in available preview. | T07-B. | PASS |
| S56 | Hypothetical stale-entry case is clearly separated from product history. | Persistent dashed CONCEPTUAL CASE frame; no actual failure, Trial, or result is implied. | PASS in available preview. | T08-A. | PASS |
| S67 | Meta-production timeline is distinct from Product Git States. | Double-line OBSERVED_META frame; TRIAL-006 and partial attribution are identified; no product change or MCP task result is claimed. | PASS in available preview. | T11-A. | PASS |
| S72 | C++ engineering-pattern transfer is organized as R1–R5, with R6 discussion separate. | Teaching model; GPU example is conceptual. | PASS in available preview; pacing and reveal are not fully interactive. | T03-C; primary C++ bridge. | PARTIAL |
| S73 | Chatbot → Prompt → Context → Harness → Loop reads as one connected story. | Explicit teaching-model marker; stages accumulate rather than replace one another. | PASS in available preview. | T03-C. | PASS |

PASS in the preview column means that the slide was rendered and visually
reviewed in the available preview. It does not certify the specified fonts,
PowerPoint rendering, or projector readability.

## Evidence and Claim Boundaries

- OBSERVED_PRODUCT is shown with a solid frame, CONCEPTUAL with a persistent
  dashed frame, and OBSERVED_META with a double-line frame.
- S14 is an illustrative comparison. S72 and S73 are teaching models.
- S35 preserves the limitation that observed access patterns do not prove
  superior routing, token savings, or a performance improvement.
- S45 retains the bounded evidence: 15.468 → 10.769 ms/call and
  6,675,804 → 380 B in the recorded comparison, alongside the functional
  and scope checks and measurement conditions. It does not attribute the
  result to the Harness alone.
- S56 does not portray the conceptual stale-workflow scenario as Demo history.
- S67 is production-process evidence; attribution remains PARTIAL.
- No claim, Product State, Trial, Demo Repository, Slide ID, or time allocation
  was changed for this prototype.

## Typography, Layout, and Compatibility

- Canvas: 13.3333 × 7.5 inches (16:9); exactly 7 slides.
- Requested font metadata is present: Malgun Gothic and Consolas.
- Neither font is installed on this authoring host. Local font matching falls
  back to Verdana and Andale Mono. The native font rendering check is false.
  Local LibreOffice rendering showed Korean glyph/fallback issues; no font
  files were copied or embedded.
- Available Artifact Tool previews were legible on visual inspection, but
  this does not resolve the host-font limitation.
- Windows PowerPoint compatibility: UNVERIFIED.
- Presentation-room / projector readability: UNVERIFIED.
- Package integrity: PASS, zero findings and warnings. Layout geometry: PASS,
  zero findings and warnings. First-party Artifact Tool import: PASS, 7 slides.
- The deck uses editable native text and shapes; no slide-wide images,
  embedded pictures, tables, or charts were used. No Speaker Notes content
  was authored.

## Progressive Reveal

S72 retains the five-step R1–R5 sequence and its timing cues, with R6
discussion shown separately from the five-step flow. The built file uses
static cumulative emphasis; no PowerPoint animation or saved reveal states
were authored or validated. Therefore S72's progressive-reveal criterion is
PARTIAL and requires a presentation-PC review if interactive pacing is needed.

## Template Coverage

The seven slides exercise six layout variants across five templates:

- T03-C: S72, S73
- T04-A: S14; T04-C: S35
- T07-B: S45
- T08-A: S56
- T11-A: S67

The remaining 21 layout variants and six templates without a prototype slide
remain untested. The seven-slide sample does not establish coverage of all 11
templates or 27 variants.

## Required Follow-up

1. Open the PPTX in the target Windows PowerPoint version and confirm font
   substitution, line wrapping, and visual fidelity.
2. Review mixed Korean, English, and code text on the actual presentation PC
   and at projected presentation size.
3. Decide whether S72 needs authored reveal states; if so, implement and
   validate them in the target PowerPoint environment.
4. Review the remaining template and variant coverage before extending the
   prototype to other slides.

## Next Readiness

**READY FOR PROTOTYPE REVIEW**, with Windows PowerPoint, target-font,
projection, and S72 reveal checks still open. This result does not authorize
the final 80-slide deck or Speaker Notes.

## V2 Evaluation — 2026-10-11

**Status: PARTIAL.** V2 contains S14, S16, S35, S45, S56, S67, S72, and S73
in the approved order. The seven original slide parts remain byte-identical
to V1. S16 adds the previously unvalidated T06-A investigation/code-diff
layout. No Slide Map, Claim Freeze, Product State, Trial, Demo Repository,
time, or Story content changed.

### Slide-by-Slide Result

| Slide | V2 visual and evidence review | Result |
|---|---|---|
| S14 | The prompt comparison remains primary and its C++ inset remains subordinate. No product claim is added. | PASS |
| S16 | TRIAL-002's baseline failure, observed call path, half-open contract, edit-before plan, and isolated one-line change are legible. The source excerpt is labeled as reflowed text, not a screenshot. Code is 18 pt. | PASS in the local render; target projection remains unverified. |
| S35 | The A/B document-access matrix remains readable and keeps the routing, token, and performance limits explicit. | PASS |
| S45 | The benchmark comparison and bounded checks remain legible; causal scope is unchanged. | PASS |
| S56 | A dashed frame and repeated CONCEPTUAL labels distinguish the hypothetical case from Product history. | PASS |
| S67 | The double-line OBSERVED META frame, Trial ID, and partial-attribution label remain distinct from Product evidence. | PASS |
| S72 | The static R1–R5 sequence and separate R6 area are readable. A speaker-led operation cue is documented; a timed 20-minute rehearsal was not performed. | PARTIAL |
| S73 | Chatbot → Prompt → Context → Harness → Loop remains one connected teaching model. | PASS |

### Render, Typography, and Layout

- Rendered all 8 slides with LibreOffice Development 26.8 to 1921 × 1080 PNGs
  and inspected the individual slides and montage in
  `prototype/preview/v2/`.
- The V2 PowerPoint canvas is 13.333 × 7.5 inches (16:9). Shape bounds are
  within the canvas. Visual inspection found no clipping or overlap in the
  available local render. S16's Before code line initially wrapped; widening
  its paired panels fixed that issue, and the final render keeps both changed
  lines on one line.
- S16 code uses 18 pt Consolas metadata. Host fontconfig lookup reports
  Verdana for Latin Malgun Gothic, Nanum Gothic for Korean Malgun Gothic, and
  Andale Mono for Consolas. These are local substitutions, not Windows font
  validation.
- S16 text/background contrast ratios calculated from the specified colors:
  primary 16.29:1, teal 7.08:1, red 5.79:1, green 5.76:1, and amber 5.81:1.
- Windows PowerPoint compatibility and room projection remain UNVERIFIED.

### Evidence Grammar and Operation

- S16 and S35/S45 use OBSERVED_PRODUCT labels with Trial/State scope.
- S56 retains the dashed CONCEPTUAL frame; S67 retains the double-line
  OBSERVED_META frame. Labels and frame styles carry the distinction; color
  alone is not used.
- S16 shows actual code from the STATE-00 baseline and TRIAL-002 isolated
  diff. The CLI → pipeline → crop() call path and recorded 2-column expected
  versus 3-column observed result are traceable to the existing Trial record.
  No simulated terminal capture or fabricated test output is shown.
- S72 remains static. The documented speaker-led cue sequence is R1 0–1,
  R2 1–2, R3 2–4, R4 4–5, R5 5–7, then R6 Reflection 7–9, Transition 9–13,
  and Q&A 13–20. It follows the approved 7 + 2 + 4 + 7 minute allocation.

### Template Coverage and Reuse

The eight slides exercise six template families: T03-C, T04-A, T04-C, T06-A,
T07-B, T08-A, and T11-A. T06-A is now visually sampled; T06-B and T06-C are
not. T01, T02, T05, T09, and T10 still have no prototype slide. The sample
does not validate all 11 templates or 27 layout variants. Repeated visual
tokens are apparent, but shared-template authoring and 80-slide change cost
remain unverified.

### Remaining Issues

- **P0:** Windows PowerPoint and projection validation for the eight-slide
  file remains required before full-deck expansion.
- **P1:** S35 path-size projection check, S72 timed operation rehearsal, and
  shared-template/change-cost validation remain open.
- **P2:** S72 auxiliary timing-tag size, the 0.44-inch top content position,
  and the prototype-only badge remain for target-environment or final-deck
  review.

The prototype PPTX remains editable native text and shapes. No Speaker Notes
content was authored. V1 and its previews remain unchanged. The Demo
Repository remains unchanged. See
`plan/VISUAL_PROTOTYPE_V2_RESULT.md` for the completion-gate report.
