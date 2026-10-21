# STEP 08 — VISUAL PROTOTYPE V2 RESULT

> 현재 82장 번호는 DEC-0038의 [새 이행표](SLIDE_ID_MIGRATION_82.md)를 따른다. 이 문서 본문의 원래 판본 번호·실제 경로·검증 결과는 보존한다.
> **Historical Working Draft — 80장 판본.** 아래 원본 Slide ID, 프로토타입·Pilot 수, 실제 파일 경로와 당시 평가 결과를 보존한다. 현재 공식 Map은 DEC-0036의 81장 판본이며, 종전 S08–S80의 현재 번호는 S09–S81이다. 현재 번호는 [SLIDE_ID_MIGRATION.md](SLIDE_ID_MIGRATION.md)로 대조한다. 이 문서의 과거 판정을 새 판본의 검증 결과로 확대하지 않는다.

Date: 2026-10-11

## 1. Status

**PARTIAL.** The code/diff visual gap is addressed for local review. Windows
PowerPoint compatibility, projection readability, and the S72 timed rehearsal
remain open.

## 2. PPT

- Path: `prototype/AI_Dev_Training_Visual_Prototype_v2.pptx`
- Slide count: 8 — S14, S16, S35, S45, S56, S67, S72, S73.
- Editability: PASS. Text and shapes remain native and editable; no slide-wide
  images were used. The notes text is empty; no Speaker Notes content was
  authored.
- Canvas: 13.333 × 7.5 inches, 16:9.
- V1 is retained at `prototype/AI_Dev_Training_Visual_Prototype.pptx`; its
  SHA-256 is unchanged. V1 preview files are also unchanged.

## 3. Added Slide

S16 — “조사에서 한 줄 변경까지”, using T06-A. It includes the TRIAL-002
baseline failure, observed CLI → pipeline → crop() path, `[x_start, x_end)`
contract, edit-before plan, and the isolated one-line change. The two code
panels use 18 pt Consolas metadata. The excerpts are reflowed source text,
not a reconstructed terminal or screenshot.

## 4. Revisions

- S14, S35, S45, S56, S67, S72, and S73 remain unchanged in the PPTX; their
  slide XML is byte-identical to V1.
- S16's code panels were widened after the first local render wrapped the
  Before line. Final render keeps both changed lines on one line.
- S72 remains a static slide. The speaker-led operation cue is documented
  below; no animation or complete Speaker Notes were added.

## 5. Render Validation

- All 8 slides were rendered through LibreOffice Development 26.8 and
  inspected individually and as a montage in `prototype/preview/v2/`.
- PNG size: 1921 × 1080 per slide. Hangul rendered after selecting the host
  fontconfig configuration.
- Package / schema validation with the V1 file as original: PASS, no findings.
- Visual layout: PASS in the local render. All shapes are inside the 16:9
  canvas; no clipping or overlap was seen. This is not a Windows PowerPoint or
  projector check.
- S16 color contrast measured from the specified palette: primary 16.29:1,
  teal 7.08:1, red 5.79:1, green 5.76:1, amber 5.81:1. The evidence labels
  and line/frame patterns do not rely on color alone.

## 6. Code/Diff Readability

**PASS in the local render.** The excerpt is four lines per side, within the
3–12 line limit. The changed line is highlighted and labeled in each panel;
Before/After labels remain explicit. The code is 18 pt in the PPTX. The
recorded expected two columns and observed three columns are shown without
fabricating a terminal capture. Projection and Windows readability remain
unverified.

## 7. Evidence Grammar

**PASS in the inspected local render.** S16 and S35/S45 use explicit
OBSERVED_PRODUCT labels; S56 uses a dashed CONCEPTUAL frame; S67 uses a
double-line OBSERVED_META frame. S16's claims remain limited to the recorded
TRIAL-002 baseline, call path, and isolated change. No Claim Freeze or product
claim was strengthened.

## 8. S72 Operation

Use the static slide with speaker-led highlighting. These are operation cues,
not complete Speaker Notes:

| Time | Area | Cue |
|---|---|---|
| 0–1 | R1 — Project / environment | Point to the changed assumption. |
| 1–2 | R2 — Observe friction | State what changed. |
| 2–4 | R3 — Assess cause | Separate observed facts from a cause hypothesis. |
| 4–5 | R4 — Change the right layer | Match the change to the identified cause. |
| 5–7 | R5 — Reverify | Point to benchmark and regression checks. |
| 7–9 | R6 — Reflection | Hold on the question and invite individual thought. |
| 9–13 | R6 — Transition | Connect the pattern to the ACT 5 recap. |
| 13–20 | R6 — Q&A | Keep the model visible and take questions. |

The timed 20-minute rehearsal was not performed; S72 remains PARTIAL.

## 9. Windows Compatibility

**UNVERIFIED.** Windows PowerPoint and the target presentation device were not
available for this review. Local fontconfig lookup reports Verdana for Latin
Malgun Gothic, Nanum Gothic for Korean Malgun Gothic, and Andale Mono for
Consolas. These local substitutions do not establish Windows behavior.

## 10. Template Coverage

V2 samples T03-C, T04-A, T04-C, T06-A, T07-B, T08-A, and T11-A. T06-A is now
visually sampled; T06-B and T06-C are not. T01, T02, T05, T09, and T10 still
have no prototype slide. This sample does not validate all 11 templates or 27
layout variants.

## 11. Remaining Issues

### P0

- P0-01: review the exact eight-slide V2 in target Windows PowerPoint and at
  presentation size before full-deck expansion.
- P0-02: RESOLVED for local S16/T06-A visual coverage; Windows rendering is
  still part of P0-01.

### P1

- S35 file-path size remains unverified at projection scale.
- S72 operation cue is written, but its timed 20-minute rehearsal remains
  unperformed.
- Shared-template authoring and style-change propagation have not been
  validated against 80-slide expansion cost.

### P2

- S72 timing labels remain 13.5 pt.
- Existing top content begins at approximately 0.44 inch; target projector
  safe area is unknown.
- `PROTOTYPE COPY` remains as a review badge and should be removed from the
  final teaching deck.

## 12. Files Created / Updated

- Created `prototype/AI_Dev_Training_Visual_Prototype_v2.pptx`.
- Created eight V2 PNG previews and a montage in `prototype/preview/v2/`.
- Updated `plan/VISUAL_PROTOTYPE_EVALUATION.md` and
  `plan/VISUAL_PROTOTYPE_REVIEW.md` additively; V1 findings remain preserved.
- Created this result report.
- No Visual Spec, Slide Map, Claim Freeze, Demo Repository, final 80-slide
  PPT, or Speaker Notes content changed.

## 13. Git Checkpoint

The prototype and documentation are committed separately and pushed to the
existing `origin/main` branch. The checkpoint contains no Demo Repository
change and uses no force push. Commit hashes are reported in the task
completion summary.

## 14. Next Readiness

**NEEDS PROTOTYPE REVISION** before expanding to the final deck. P0-01 remains
open until Windows PowerPoint and target-size review are recorded.
