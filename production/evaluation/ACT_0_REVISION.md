# STEP 08 — ACT 0 REVISION RESULT

> Historical record — 이 문서는 DEC-0036 이전 80장 판의 번호와 검증 결과를 보존한다. 현재 81장 판과의 대응은 [Slide ID Migration](../../plan/SLIDE_ID_MIGRATION.md)을 따른다. 과거 PASS는 현재 파일의 재검증을 뜻하지 않는다.


Date: 2026-10-12
Baseline: `cd2f6b8`
Scope: ACT 0, S01–S09 only
Status: **PASS** (revision scope)

## Revision Scope

The approved Story, Slide IDs, Evidence Types, Claim Boundaries, 40-minute
allocation, and Mode totals remain unchanged. The P1 typography and DEMO-01
static-operation issues are resolved for local review. No Trial was run, and
this result does not certify Windows PowerPoint, room projection, or timed
presentation delivery.

## Typography Changes

- Slide titles: 30 pt → 34 pt on S01–S09, within the Visual Spec range.
- ACT/section markers: 10 pt → 14 pt.
- Slide ID/time navigation: 9 pt → 14 pt.
- S04 trial metadata and current-product limitation: 16 pt.
- S05 evidence metadata: 16 pt; call-path details: 16 pt; contract and
  implementation snippets: 18 pt.
- S06 observation/environment labels: 14 pt; supporting details: 16–18 pt.
  The environment limitation line is 16 pt and the widened text box leaves
  visible padding around the Korean text.

The resulting hierarchy is a reusable starting rule for ACT 1. The local
Keynote file reports missing fonts. Although Fontconfig on this Mac matches
Malgun Gothic to Nanum Gothic and Consolas to Andale Mono, that does not prove
which substitutions Keynote used. Windows font substitution and room-distance
readability remain unverified.

## Slide-by-Slide Changes

| Slide | Revision |
|---|---|
| S01 | Title and starting-point marker enlarged; reflection layout retained. |
| S02 | Step labels and teaching-model marker enlarged; five-step workflow retained. |
| S03 | Model, context, and question labels enlarged; conceptual problem frame retained. |
| S04 | Watch labels, Trial scope, and Desktop/account limitation enlarged; empty result area retained. |
| S05 | Product/reconstruction labels, run metadata, and code evidence enlarged; reconstruction remains distinct from a screenshot. |
| S06 | Evidence labels and limitation text enlarged; observation/environment panels remain separate; limitation text fit rechecked. |
| S07 | Teaching/evidence/C++ contextual labels and scope text enlarged; mental-shift message retained. |
| S08 | Model labels and supporting statement enlarged; Access ≠ Intent frame retained. |
| S09 | Discussion/transition labels enlarged; open question and handoff retained. |

## Demo Operation

Default delivery is static and record-based:

1. S04 frames Test, Implementation, and Call path as the observations.
2. S05 presents the TRIAL-001 record as a reconstructed diagram, not a
   terminal screenshot.
3. S06 separates the Repository observation from the read-only environment
   limitation.

The evidence remains bounded to one read-only Codex CLI 0.154.0 run on macOS.
It does not establish current Codex Desktop or education-account behavior.
Live/HYBRID stays inactive until the intended account, product surface,
read-only setup, runbook, expected observations, and fallback are checked in
the presentation environment. No new Trial was run.

If a separately verified Live segment is later allowed and fails or differs
from the expected setup, stop it, say “현재 환경에서는 이 과정을 확인할 수
없어, 기록된 TRIAL-001로 돌아가겠습니다.”, and return to the static S05
diagram. The fallback switch is estimated at about 15 seconds; that timing is
untested.

## Fallback Readiness

| Slide | Static PPTX path | PNG backup | Live/HYBRID |
|---|---|---|---|
| S04 | READY — WATCH slide and observation criteria | READY — final local S04 render | UNVERIFIED / inactive |
| S05 | READY — reconstructed TRIAL-001 diagram, not a capture | READY — final local S05 render | UNVERIFIED / inactive |
| S06 | READY — observation and environment limitation panels | READY — final local S06 render | Not used |

The READY status applies to the local static presentation files only. Windows,
room display, and the future Live route remain unverified.

## Speaker Notes Alignment

All 9 slides retain the 19-field Notes schema. S04–S06 Notes specify the static
route, actual PPTX and preview paths, evidence/product limits, transition cues,
and allocated times. Embedded PowerPoint Notes for S04–S06 match the Markdown
Notes after this revision. The Notes are usable as operational cues, but the
actual talk timing has not been rehearsed.

## Render Validation

- PPTX: 9 editable slides, 16:9 (13.333 × 7.5 inches).
- Keynote opened the revised PPTX and exported a 9-page PDF. macOS PDFKit
  produced nine 1920 × 1080 PNGs and a montage from that PDF.
- All nine final PNGs were visually inspected. Korean text is present; no
  clipping, unintended overlap, or safe-margin breach was observed. S04's
  intentionally blank result area remains blank. S05 clearly labels the diagram
  as reconstructed. S06's limitation line has adequate local card padding.
- Keynote's direct image export had clipped text and was discarded. It is not
  used as a preview or validation artifact.
- Keynote reported missing fonts. PPTX font declarations and local Fontconfig
  matches are documented above; exact Keynote substitution is unconfirmed.
- Windows PowerPoint and actual room projection: **UNVERIFIED**.

## Time / Mode Validation

| ACT 0 total | Lecture | Demo | Case | Reflection | Transition | Q&A |
|---:|---:|---:|---:|---:|---:|---:|
| 40 min | 13 min | 8 min | 9 min | 4 min | 3 min | 3 min |

Per-slide times and Mode allocations match `plan/SLIDE_MAP.md`. No time or
Mode was changed. Actual delivery timing remains unverified because no
rehearsal was performed.

## Remaining Issues

### P0

None found in the local slide review or Evidence boundary.

### P1

None remain for this ACT 0 revision gate.

### P2

- ACT 0 delivery timing, including the 8-minute S05 segment and estimated
  15-second Live-to-static fallback switch, has not been rehearsed.
- Shared-template reuse is not demonstrated by the editable PPTX.
- Windows PowerPoint font substitution, target presentation fonts, and room
  projection distance remain unverified.

## ACT 1 Production Gate

**READY FOR ACT 1 PRODUCTION.** The P1 typography and static DEMO-01 operation
issues are addressed, no P0 issue remains, all nine local renders were checked,
S04–S06 embedded Notes match the Markdown Notes, the static evidence route is
clear, and the approved claim/time/Mode boundaries remain intact. Windows,
room readability, and timed rehearsal remain validation items; they do not
block starting ACT 1 under the approved production gate.

## Git Checkpoint

This revision document, ACT 0 PPTX, matching Notes, and nine-slide local preview
set are included in the same production checkpoint. Commit and push results are
reported with the task completion summary.
