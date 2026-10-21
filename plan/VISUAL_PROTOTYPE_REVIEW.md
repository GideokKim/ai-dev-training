# STEP 08 — Visual Prototype Review Result

> **Historical Working Draft — 80장 판본.** 아래 원본 Slide ID, 프로토타입·Pilot 수, 실제 파일 경로와 당시 평가 결과를 보존한다. 현재 공식 Map은 DEC-0036의 81장 판본이며, 종전 S08–S80의 현재 번호는 S09–S81이다. 현재 번호는 [SLIDE_ID_MIGRATION.md](SLIDE_ID_MIGRATION.md)로 대조한다. 이 문서의 과거 판정을 새 판본의 검증 결과로 확대하지 않는다.

Date: 2026-10-10

Status: PARTIAL

## Scope and Sources

This review covers the seven approved prototype slides only. It does not
revise their content or the approved 80-slide plan.

Reviewed planning sources:

- `plan/SLIDE_MAP.md`
- `plan/SLIDE_TEMPLATE_MAP.md`
- `plan/VISUAL_SPEC.md`
- `plan/SLIDE_TEMPLATE_ARCHITECTURE.md`
- `plan/VISUAL_PROTOTYPE_PLAN.md`
- `plan/VISUAL_PROTOTYPE_EVALUATION.md`
- `plan/CLAIM_FREEZE.md`

Reviewed artifacts:

- `prototype/AI_Dev_Training_Visual_Prototype.pptx`
- `prototype/preview/montage.png`
- Individual renders `S14.png`, `S35.png`, `S45.png`, `S56.png`, `S67.png`,
  `S72.png`, and `S73.png` in `prototype/preview/`.

The PASS results already recorded for package integrity, layout checks, and
Artifact Tool import are structural/tool results. The slide judgments below
come from inspecting the actual rendered images. Neither result verifies
native Windows PowerPoint rendering or room projection.

## 1. Status

**PARTIAL**

The rendered slides have a consistent visual system, clear primary messages,
and distinct Product, Conceptual, and Meta evidence frames. No slide shows
visible clipping or an evidence-type mix-up in the reviewed preview.

The review is not complete for production readiness because Windows
PowerPoint and projection remain unverified, the authoring host substitutes
the specified fonts, S72 has not been rehearsed, and the code/diff template
T06 has no visual prototype.

## 2. Slide-by-Slide Review

### S14 — 더 긴 Prompt보다 분명한 경계

**PASS.** The title and side-by-side weak/requested task comparison read
immediately. The specified task is the dominant visual; the supporting C++
bridge stays in a narrow strip beneath it. The five task fields are readable
without showing a full prompt transcript. The illustrative/model labels
prevent the comparison from looking like Product evidence. No unnecessary
decoration or visible overflow was found.

### S35 — Task별 접근은 달랐지만 완벽하지는 않다

**PASS.** The A/B document-access matrix is the visual center and the title
states its limited conclusion. Three rows communicate task-specific detail
without turning into a file log. The variable `docs/testing.md` observation
and the lower `NOT ESTABLISHED / NOT MEASURED` band preserve the evidence
boundary. The slide is comparatively dense, but the task columns, row rules,
and caveat remain distinguishable in the full-size preview.

### S45 — Working Harness Success

**PASS.** The two bounded measurements dominate, recorded checks form a
separate right column, and the environment/sample note and causal limitation
remain adjacent to the values. The numeric hierarchy is clear within a few
seconds. The conditions line is smaller than the measurements, but remains
readable in the preview; target projection is still unverified. No
Harness-only causal claim is implied.

### S56 — 개념 사례: Project와 Workflow는 현재 맞다

**PASS.** The dashed frame, amber label, and repeated `CONCEPTUAL` wording
make the hypothetical starting condition visibly different from Product
history. The two matching entries and possible later change form one simple
visual. The note that no Trial, failure, stale workflow, or result is
asserted is legible and close to the example.

### S67 — 실제 제작 기록: TRIAL-006

**PASS.** The double-line frame, `OBSERVED META` label, Trial ID, and
source line distinguish production-process evidence from Product Git State
evidence. The three-part task/context/attribution sequence is easy to scan.
`PARTIAL` attribution and the no-MCP-result statement are prominent enough
to prevent a Product change or isolated causal result from being inferred.

### S72 — Project와 환경이 바뀌면 검증도 다시 본다

**PARTIAL.** The R1–R5 sequence, its 0–7 minute cues, the separate
conceptual GPU example, and the R6 discussion state are all legible. The
slide is information-dense but its horizontal workflow and lower discussion
area stay separate. The current file is static, with R3 receiving the only
strong step emphasis; no sequential reveal states or animation were authored
or tested. Visual clarity passes, while the 20-minute presentation operation
still needs a rehearsal.

### S73 — 여섯 시간의 Story를 한 장으로

**PASS.** The five stages read as a connected sequence, the final Loop stage
has emphasis without hiding earlier stages, and the teaching-model label is
visible. Each card has a short explanation; the two concluding statements
reinforce continuity without adding a second competing diagram. No visible
clipping or evidence overclaim was found.

## 3. Typography

The PPTX XML declares **34.5 pt** for all seven slide titles, within the
34–40 pt target. The deck declares **Malgun Gothic** for Korean/English text
and **Consolas** for monospace text. Source references and footers are
typically **14.25 pt**, within the 14–16 pt citation/footer range. S45's
main measurements are 29.25 pt; its recorded-check labels are 16.5 pt.

Monospace content is limited: S14's short prompt is 27.75 pt, S35's file
paths are 16.5 pt, and S56's abstract old/new entry labels are 21.75 pt.
There is no representative code excerpt in this prototype, so the planned
18–22 pt code size has **not** been visually validated. S72's R1–R5 timing
tags are 13.5 pt. The recurring `PROTOTYPE COPY` badge is 12.75 pt and is
prototype labeling, not final-slide content.

On the authoring host, font matching resolves Malgun Gothic to Verdana and
Consolas to Andale Mono; the existing evaluation also records Korean
fallback issues in local LibreOffice rendering. The available preview is
legible, but it does not prove the specified fonts or line breaks render
correctly in Windows PowerPoint. Mixed Korean/English is visibly readable in
the preview; actual Windows code and projection readability remain
unverified.

## 4. Layout

The presentation is 13.333 × 7.5 inches (16:9). The seven previews show
consistent left/right content bounds, aligned title and footer regions, and
clear separation between cards. No visible overlap, truncation, or clipping
was found. S14's prompt panels, S35's access matrix, and S45's measurement
card each have a clear first-read area; S35 and S45 have the highest
information density, but neither appears to be a log dump.

The measured outer shape bounds are approximately x=0.83–12.50 in and
y=0.44–6.98 in. This is inside the horizontal safe area; the top begins
about 0.06 in above the 0.50 in vertical guide and the bottom is close to
the 7.00 in guide. It is not a visible clipping defect, but should be
checked on the target display. The prototype badge is useful for identifying
these review slides; omit it from the final teaching deck.

## 5. Evidence Grammar

The three reviewed evidence types remain distinct without relying on color
alone:

- **OBSERVED_PRODUCT — S35 / S45:** solid teal frame and explicit label.
- **CONCEPTUAL — S56:** persistent dashed amber frame and explicit label.
- **OBSERVED_META — S67:** double-line teal frame and explicit label.

S56 and S67 remain distinguishable by frame, line, and wording even if their
colors are ignored. S35/S45 do not visually imply the unmeasured routing,
token-saving, performance-causation, or Product-history claims prohibited
by `CLAIM_FREEZE.md`.

## 6. S72 Operation

**Recommended: A — static slide with speaker-led highlighting.** Use the
existing R1–R5 sequence as the 0–7 minute case, moving the pointer or
speaker's focus through each step. Keep R6 visible as the 7–20 minute
reflection, transition, and Q&A area: 2 + 4 + 7 minutes. This preserves the
approved timing and makes the discussion state explicit without requiring
PowerPoint animation. The current slide already separates R6 from the
workflow. Validate this operation with a timed 20-minute rehearsal; if the
audience loses the step sequence, revisit authored reveal states in a later
revision.

## 7. Template Reusability

The rendered slides visibly reuse a common canvas, title/metadata/footer
placement, card treatment, typography, and color tokens. The evidence-frame
grammar recurs consistently. S14 and S72 show the C++ Bridge at supporting
and primary scale. S45 provides one benchmark-card example; S67 provides one
Meta timeline example.

The final PPTX confirms editable native text and shapes, but the rendered
artifact does not establish whether a shared authoring component generated
them, how much slide-by-slide manual work was required, or the cost of
changing one token across 80 slides. Those authoring and maintenance costs
remain **unverified**; do not treat visual consistency alone as proof of
implementation reuse.

## 8. Missing Template Coverage

| Template | Prototype needed before 80-slide production? | Judgment |
|---|---|---|
| T01 — Audience Prompt / Reflection | No | Sparse question and whitespace can use the existing canvas/card language. Confirm discussion whitespace during final assembly. |
| T02 — Problem / Friction | No | The paired panels and rows in S14/S35 provide enough visual grammar for a short task/friction comparison. Keep the solution hidden where the Map requires it. |
| T05 — Demo Watch / Trial Setup | No | Trial IDs and task framing are already visible in S35/S67. Keep the outcome region empty; inspect this when the first full slide is assembled. |
| T06 — Code / Diff / Verification | **Yes** | No prototype tests code-size, a bounded diff, or the investigation-to-verification handoff. These are central developer evidence and cannot be inferred from a benchmark card alone. |
| T09 — Research / Source | No | S45 demonstrates nearby conditions and bounded findings; S67 demonstrates a readable source line. Use these as components, then check the specific claim, study conditions, and source together on S29. |
| T10 — Decision / Trade-off | No | S35 provides a matrix pattern and S56 provides an explicit conceptual frame. Apply the T10 rule against invented scores and keep observed/hypothetical choices labeled during slide review. |

### Minimum Additional Prototype Recommendation

**YES — one additional slide: S16 using T06-A.** It is the smallest useful
test of the currently unrepresented code/diff family: show only the
approved failing-test/call-path evidence, the bounded one-line change, and
the verification handoff. Do not recreate a full log or expand the Trial
claim. This review does not create that prototype.

## 9. P0 Issues

| ID / Slide | Problem and evidence | Proposed fix | Validation method |
|---|---|---|---|
| P0-01 / all 7 | Windows PowerPoint and projection are UNVERIFIED. The authoring host substitutes Verdana/Andale Mono for the declared fonts; this does not establish how the target Windows PC will render them. | Before expanding to 80 slides, open this exact prototype on the target Windows PowerPoint version and resolve any font substitution, wrapping, or layout defect. | Inspect all 7 slides at presentation size on the target PC; compare Korean/English wrapping, citations, metadata, and safe bounds. Record any font substitution. |
| P0-02 / S16, T06-A | The code/diff/investigation template is absent from the 7-slide sample, and no code-size or diff-legibility result exists. | Create the recommended S16 prototype in a later authorized step before full-deck expansion. | Confirm the bounded change and handoff read at 18–22 pt code when exact code is shown; trace all displayed facts to TRIAL-002. |

No observed Product/Conceptual/Meta evidence confusion or unreadable core text was found in the available preview.

## 10. P1 Issues

| ID / Slide | Problem and evidence | Proposed fix | Validation method |
|---|---|---|---|
| P1-01 / S35 | Monospace file paths are 16.5 pt, below the 18–22 pt code target. They are readable in the preview, but projection readability is unknown. | If target-screen review shows strain, raise the path labels toward 18 pt or shorten/group them only as allowed by the existing Map. | Review the exact slide at presentation size; preserve all three task-specific observations and the caveat. |
| P1-02 / S72 | Static R3 emphasis does not visually advance through R1–R5; the speaker-led operation has not been rehearsed. | Use the recommended A operation with speaker/laser highlighting; do not add native animation unless rehearsal reveals a navigation problem. | Timed 20-minute run that preserves R1–R5 in 7 minutes and R6's 2/4/7-minute modes. |
| P1-03 / deck source | Visual token consistency is visible, but the artifact alone cannot confirm shared-template authoring or 80-slide change cost. | During the next production step, validate the chosen authoring method with a token/style change and confirm it applies consistently to representative templates. | Change one shared style once and inspect representative slides from each used template; record which uncovered templates still need review. |

## 11. P2 Issues

| ID / Slide | Problem and evidence | Proposed fix | Validation method |
|---|---|---|---|
| P2-01 / S72 | Timing tags are 13.5 pt, slightly below the 14–16 pt footer/navigation range. They are auxiliary and legible in the preview. | Consider 14 pt or larger if it fits without crowding the five-step row. | Check on Windows at presentation size. |
| P2-02 / all 7 | The topmost content begins near 0.44 in versus the 0.50 in guide; no clipping is visible. | If the projection safe area requires it, move the top band inward slightly during a future revision. | Check actual projector edge visibility; keep the title readable and the content grid aligned. |
| P2-03 / all 7 | `PROTOTYPE COPY` is a repeated review badge, not a teaching message. | Remove it in the final teaching deck. | Confirm it is absent from final slides while slide ID/ACT navigation remains. |

## 12. Recommended Revisions

1. Keep the current visual language and evidence-frame distinctions; no broad
   redesign is indicated by this review.
2. Complete the Windows PowerPoint and room-scale validation before expanding
   to the full deck.
3. Add one S16 / T06-A prototype to validate the missing code/diff family.
4. Operate S72 as a static slide with speaker-led highlighting, then retain
   that choice only if the timed rehearsal works.
5. Adjust S35 path size or S72 timing tags only if target-size review shows
   reduced readability; do not compress evidence or remove claim boundaries.
6. Remove the review badge from the final teaching deck.

## 13. Additional Prototype Needed?

**YES.** The minimum recommendation is S16 / T06-A because code/diff
readability and the change-to-verification handoff are not exercised by the
current seven slides. T01, T02, T05, T09, and T10 can use the existing visual
components as specified above, with their source-specific limits reviewed
when those slides are assembled.

## 14. Windows Validation Requirements

- Open the exact PPTX in the target Windows PowerPoint version.
- Record the actual font used for Malgun Gothic and Consolas; do not infer it
  from this host's `fc-match` result.
- Inspect mixed Korean/English wrapping, monospace file paths, citations,
  evidence labels, and metadata.
- Check for text overflow, changed line breaks, shape movement, and safe-area
  clipping on all seven slides.
- View at presentation scale and, if available, on the intended projector.
- Leave Windows compatibility UNVERIFIED until these checks are recorded.

## 15. Validation and Next Readiness

- Prototype count: **7**; slide IDs: **S14, S35, S45, S56, S67, S72, S73**.
- Canvas: **16:9**, 13.333 × 7.5 inches.
- Visual judgments: **6 PASS, 1 PARTIAL, 0 FAIL**; S72 is partial for
  operation/reveal validation, not for visible clipping.
- Evidence grammar: **PASS in the inspected preview**; Windows rendering
  remains open.
- Slide Map, Claim Freeze, story, times, template assignments, and Demo repo
  were not changed.
- PPTX, renders, and Demo repo were not modified. No Speaker Notes were
  created. No commit or push was made.

**Next readiness: READY FOR PROTOTYPE REVISION.** Complete P0-01 and the
S16/T06-A validation before declaring template coverage sufficient for
80-slide expansion.

## V2 Review Addendum — 2026-10-11

This addendum records the authorized V2 work. The V1 review above remains as
the historical review record; its findings are not deleted or rewritten.

### V2 Result

**PARTIAL.** The V2 order is S14, S16, S35, S45, S56, S67, S72, and S73.
All eight slides were rendered and inspected. The seven original slide XML
parts are byte-identical to V1. S16 was added as T06-A with the actual
TRIAL-002 baseline expression and isolated diff. The local preview uses the
host fontconfig and is not a Windows PowerPoint or projector check.

### Finding Disposition

| Original finding | V2 status | Evidence / remaining work |
|---|---|---|
| P0-01 / Windows and projection | OPEN | The exact V2 file still needs review in the target Windows PowerPoint environment and at presentation size. Keep compatibility UNVERIFIED. |
| P0-02 / S16 T06-A | RESOLVED for local prototype coverage | S16 displays 18 pt code, the half-open contract, Trial-bounded failure and call path, the recorded pre-edit plan, and the one-line isolated diff. Final local render shows both changed lines without wrapping. This does not validate Windows rendering. |
| P1-01 / S35 path size | OPEN | V2 leaves the original S35 unchanged. The available screen render is not a projection test. |
| P1-02 / S72 operation | PARTIALLY ADDRESSED | Static slide plus speaker-led highlighting is documented. No timed 20-minute rehearsal was performed, so S72 remains PARTIAL. |
| P1-03 / shared-template cost | OPEN | Repeated visual tokens are visible, but shared-template authoring and change propagation were not tested. |
| P2-01 / S72 timing labels | OPEN | No target-size evidence justified changing these labels. |
| P2-02 / top safe margin | OPEN | Existing 0.44-inch top placement is unchanged; projector safe area is unverified. |
| P2-03 / prototype badge | DEFERRED | The review-only badge remains in V2 and should be removed from the final teaching deck. |

### S16 and Evidence Review

S16 is legible in the 1921 × 1080 local render with 18 pt code. Its excerpt
is reflowed source text, explicitly labeled as not a screenshot. It displays
the baseline expectation of two columns versus the observed three, the
CLI-to-pipeline-to-crop path, `[x_start, x_end)`, and the changed slice
endpoint. It does not claim that a single Trial establishes general Prompt
superiority or repeatability.

The local fontconfig lookup reports Verdana for Latin Malgun Gothic, Nanum
Gothic for Korean Malgun Gothic, and Andale Mono for Consolas. The specified
fonts remain in the PPTX; no font files were copied or embedded. Windows
compatibility remains UNVERIFIED.

S56's dashed CONCEPTUAL frame and S67's double-line OBSERVED META frame
remain visually distinct, with explicit labels in each. S16 and S35/S45
retain their observed-product boundaries. No Claim Freeze content changed.

### S72 Operation Cue

Use the static slide with speaker-led highlighting. This is a brief operation
cue, not complete Speaker Notes:

| Time | Area | Cue |
|---|---|---|
| 0–1 | R1 — Project / environment | Point to the changed assumption. |
| 1–2 | R2 — Observe friction | State what changed. |
| 2–4 | R3 — Assess cause | Separate observed facts from a cause hypothesis. |
| 4–5 | R4 — Change the right layer | Match the change to the identified cause. |
| 5–7 | R5 — Reverify | Point to benchmark and regression checks. |
| 7–9 | R6 — Reflection | Hold on the question and invite individual thought. |
| 9–13 | R6 — Transition | Connect the engineering pattern to the ACT 5 recap. |
| 13–20 | R6 — Q&A | Keep the whole model visible and take questions. |

The 20-minute rehearsal remains NOT PERFORMED; therefore S72 remains
PARTIAL.

### Template Coverage and Readiness

V2 samples T03-C, T04-A, T04-C, T06-A, T07-B, T08-A, and T11-A. T06-B/C
remain untested, as do T01, T02, T05, T09, and T10. The existing review's
recommendation for S16/T06-A is fulfilled; this does not establish coverage
of the remaining templates or all 27 variants.

The P0-02 code/diff gap is closed for local visual coverage. P0-01 remains
open. **Next readiness: NEEDS PROTOTYPE REVISION** before expanding the deck,
until Windows PowerPoint and target-size review are recorded. V1 and its
preview files remain intact. No Demo Repository, final 80-slide PPT, or
Speaker Notes content was changed.
