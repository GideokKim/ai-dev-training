# ACT 4 Production Evaluation

> Current: DEC-0093 /115slides/406minutes. New S63/S68 are Codex authoring tips. Retained113budgets/evidence and ACT4 nineteen pages/eighty-one minutes stay fixed; current IDs follow [113→115](../../plan/SLIDE_ID_MIGRATION_115.md). See [current local result](CODEX_AUTHORING_TIPS.md). Earlier audits retain their dated edition; external gates UNVERIFIED.

> Current edition: DEC-0091 /113slides/402minutes. ACT4: 19slides/81minutes, S80–S98. Existing19pages/time/Mode/evidence preserved; IDs shift by5. See [scoped revision](HARNESS_REUSE_REVISION.md) and [108→113](../../plan/SLIDE_ID_MIGRATION_113.md). Dated audits below retain their edition; external gates UNVERIFIED.

> Historical edition: DEC-0090 /108slides/396minutes. ACT4: 19slides/81minutes. Title S75 adds1Transition minute before the original body. See [ACT title result](ACT_TITLE_SLIDES.md) and [102→108](../../plan/SLIDE_ID_MIGRATION_108.md). Dated audits below retain their edition; external gates remain UNVERIFIED.

> Historical edition: DEC-0088 /102slides/390minutes. ACT4: 18slides/80minutes. See [final reference block](FINAL_PRACTICAL_TIPS_CONSOLIDATION.md) and [105→102](../../plan/SLIDE_ID_MIGRATION_102.md). Dated audit below retains its edition; external gates remain UNVERIFIED.

> Historical edition: DEC-0087 /105slides/393minutes. See [tip/index result](PRACTICAL_APPLICATION_TIPS.md) and [99→105](../../plan/SLIDE_ID_MIGRATION_105.md). Dated audit below retains its edition; external gates remain UNVERIFIED.

> Current edition: DEC-0084 /99slides/387minutes. See [ACT0 expansion result](ACT_0_CONTEXT_EXPANSION.md) and [96→99 migration](../../plan/SLIDE_ID_MIGRATION_99.md). The body below preserves this ACT's earlier evaluation IDs/results; its old PASS does not validate current Windows/room/rehearsal.

> Current-version router — 이 보고서의 번호·장수·파일·hash·검증 결과는 해당 Decision 당시의 역사적 판본이다. 현재 82장 번호는 [새 이행표](../../plan/SLIDE_ID_MIGRATION_82.md), 현재 제작 결과는 [Prompt·시간선 수정](PROMPT_TIMELINE_REVISION.md)을 따른다.

> Historical record — 이 문서는 DEC-0036 이전 80장 판의 번호와 검증 결과를 보존한다. 현재 81장 판과의 대응은 [Slide ID Migration](../../plan/SLIDE_ID_MIGRATION.md)을 따른다. 과거 PASS는 현재 파일의 재검증을 뜻하지 않는다.


## Status

**PARTIAL** — ACT 4 contains 18 editable slides (S55–S72), aligned embedded
and Markdown speaker notes, and local visual review. All 18 slides were
rendered from Keynote to 1920 × 1080 PNG previews. The local review found no
text clipping, shape overlap, broken Korean glyph, or safe-margin failure.
Keynote reported a missing font; the substituted font family was not
identified. Windows PowerPoint, target-PC fonts, room projection, current
Codex Desktop behavior, and the timed 80-minute ACT 4 rehearsal remain
unverified.

## Deliverables

- PowerPoint: `production/ACT_4.pptx` — 18 slides, S55–S72.
- Speaker Notes: `production/notes/ACT_4_NOTES.md` — 18 slides, 19 fields per
  slide.
- Embedded PowerPoint Notes: 18 of 18 slides; checked against the Markdown
  notes.
- Individual previews: `production/preview/act4/S55.png` through `S72.png`.
- Montage: `production/preview/act4/montage.png`.
- Evaluation: `production/evaluation/ACT_4_EVALUATION.md`.

The PPTX uses a 16:9 canvas and native editable text and shapes. It has no
picture objects replacing the slides. The Office document validator passed.
Local visual checks describe the Keynote render only; they do not certify
PowerPoint compatibility or target-room readability.

The final review led to two focused corrections before the final export:
S64's surrounding course-model frame was removed so the observed-reference
and conceptual-evaluation frames stand apart, and S68's Trial boundary now
includes the recorded `max=4095` input range. The updated PPTX was re-exported,
all 18 previews were refreshed, and both slides were visually rechecked.

## Slide-by-Slide Review

| Slide | Local status | Review |
|---|---|---|
| S55 | PASS | Preserves STATE-04-PERF as bounded observed success and displays its state progression and verification evidence. |
| S56 | PASS | Opens DEMO-04A with a persistent conceptual label and a dotted frame; the initial state is not presented as a Trial. |
| S57 | PASS | Shows only the abstract OLD TEST ENTRY → NEW TEST ENTRY change and leaves the Project-change reason unspecified. |
| S58 | PASS | Separates a possible Task-level prompt patch from an unchanged reusable workflow; no execution result is implied. |
| S59 | PASS | Compares task-level, global-rule, and source-workflow response layers as a conceptual choice. |
| S60 | PASS | Distinguishes the visible symptom from possible causes without selecting a proven cause. |
| S61 | PASS | Separates scenario assumptions from inferences and does not claim an actual stale-run observation. |
| S62 | PASS | Shows a cause-matched minimum system change as a teaching model, with cleanup conditional on evidence. |
| S63 | PASS | Distinguishes rerunning the same Task from broader system validation; no completed validation is claimed. |
| S64 | PASS | Uses separate solid prior Product-reference and dashed conceptual-evaluation frames. EVAL-03/04 have no outcomes or PASS/FAIL labels. |
| S65 | PASS | Presents regression and Harness overfitting as a teaching analogy and explicitly distinguishes it from statistical ML overfitting. |
| S66 | PASS | Shows the five-step course Loop model as a static diagram with speaker highlighting; no automatic learning is implied. |
| S67 | PASS | Opens the observed training-production case in a double-line Meta frame, distinct from the conceptual case. |
| S68 | PASS | Separates result validity from causal attribution, keeps the metric secondary, and shows the recorded input/runtime/host boundary. |
| S69 | PASS | Identifies the observed change as evaluation/reporting policy, not Product code, Skill, or clean isolation. |
| S70 | PASS | Preserves the TRIAL-007 report/stderr discrepancy and shows that TRIAL-008 is separate evidence; no quality improvement is claimed. |
| S71 | PASS | Recaps what changed and what remains unknown without replaying the full case. |
| S72 | PARTIAL | The static teaching transfer and 20-minute operation cue are clear. The planned 20-minute rehearsal has not been performed. |

PASS describes local slide content and rendering. It does not mean external
presentation conditions or live product behavior were validated.

## DEMO-04A — Conceptual Evidence Boundary

S56–S65 use a constructed stale-workflow case. The slides and Notes mark it as
conceptual; they do not describe a failure in `graypipe` or the Demo
Repository. The case uses abstract OLD TEST ENTRY / NEW TEST ENTRY labels.
It does not invent a Runner migration reason, a concrete command, an error
screen, a terminal capture, or a PASS/FAIL result. The possible command
failure and wrong verification scope remain possible consequences, not
observations.

The conceptual frame differs from S55's solid observed Product frame.
S66's teaching model is also visually separate from the following
double-line observed Meta frame on S67.

## DEMO-04B — Observed Meta Evidence Boundary

S67–S71 describe changes in training-production evaluation and reporting,
not a Demo Product failure or code repair. The evidence is bounded to the
recorded CLI runs, including Codex CLI 0.154.0 where shown; it does not verify
current Codex Desktop behavior.

The sequence preserves the evidence limits:

- TRIAL-006 records global Skills influence and a PARTIAL prompt-only
  attribution. The metric does not establish a direct causal effect from the
  `performance-goal` Skill.
- The Hook warning has no observed code-change effect. The MCP startup issue
  has no task result shown.
- TRIAL-007's report says there was no MCP warning, while retained stderr
  contains `Nimble AuthRequired`; no MCP task result is shown.
- TRIAL-008 is separate evidence for repository Skill discovery and explicit
  invocation. No quality improvement was measured.

## Evaluation / Regression

S63 explains why rerunning one Task does not establish complete Harness
validation. S64's solid frame contains prior observed Product evidence
references for EVAL-01 and EVAL-02 on separate task chains. Its dashed frame
contains the conceptual four-row evaluation set. EVAL-03 and EVAL-04 are
designed cases with no Trial outcomes. The slide shows no new execution and
no PASS/FAIL result for the conceptual change.

S65 treats regression coverage and overfitting as a conceptual maintenance
problem. It does not equate Harness overfitting with statistical ML
overfitting.

## Loop Engineering Model

S66 presents the approved course operational model:

`Execution → Observation → Cause → System Change → Re-evaluation`.

The 11-minute slide allocates 9 minutes to Lecture and 2 minutes to a static
visual demonstration. The presenter highlights R1–R5; no animation or
automatic learning behavior is required or claimed.

## S72 Operation

S72 uses a static slide with speaker-led highlighting and a hypothetical C++
Vision teaching context. Toolchain, CUDA/GPU architecture, build, and
benchmark setup are examples of changing assumptions, not an observed C++
incident.

The approved 20-minute sequence is:

| Elapsed time | Mode | Operation |
|---|---|---|
| 0–7 min | Case | Explain the hypothetical C++ Vision transfer. |
| 7–9 min | Reflection | Invite individual reflection. |
| 9–16 min | Q&A | Take questions; if none arise, ask which assumption should be checked again. |
| 16–20 min | Transition | Give the cutoff cue and hand off to ACT 5 / S73. |

The Notes include the fallback question, 16-minute cutoff, and ACT 5
transition cue. A timed rehearsal was not performed; operational timing is
therefore unverified.

## Time and Mode Validation

| Slide | Time | Mode split |
|---|---:|---|
| S55 | 4 | Lecture 3, Reflection 1 |
| S56 | 2 | Demo 2 |
| S57 | 4 | Demo 2, Case 2 |
| S58 | 3 | Case 3 |
| S59 | 2 | Demo 2 |
| S60 | 2 | Lecture 1, Demo 1 |
| S61 | 2 | Case 2 |
| S62 | 2 | Lecture 1, Case 1 |
| S63 | 4 | Lecture 1, Case 3 |
| S64 | 5 | Demo 5 |
| S65 | 4 | Lecture 4 |
| S66 | 11 | Lecture 9, Demo 2 |
| S67 | 2 | Demo 2 |
| S68 | 4 | Demo 4 |
| S69 | 3 | Lecture 1, Demo 2 |
| S70 | 3 | Lecture 1, Case 2 |
| S71 | 3 | Lecture 1, Case 2 |
| S72 | 20 | Case 7, Reflection 2, Q&A 7, Transition 4 |
| **Total** | **80** | **Lecture 22, Demo 22, Case 22, Reflection 3, Transition 4, Q&A 7** |

Each slide's mode split equals its allocated time. The ACT total and mode
totals both equal 80 minutes. This arithmetic matches `plan/SLIDE_MAP.md`;
actual pacing remains unverified until a timed rehearsal.

## ACT 3 → ACT 4 Continuity

ACT 3 closes on the question of whether a currently working Harness will
remain aligned after the Project changes. S55 answers by preserving
STATE-04-PERF as an observed bounded success. S56 then explicitly opens a
separate conceptual stale-workflow case. The transition does not recast the
Product success as a failure.

## ACT 4 → ACT 5 Handoff

S72 ends its Q&A at minute 16, gives the planned four-minute Transition, and
hands off to S73 for the full story recap. No ACT 5 slide or full-deck
integration was produced.

## Visual / Template Validation

The 16:9 local render shows consistent typography, safe margins, Korean text,
and distinct Evidence grammars. Titles use the 34 pt production style. The
observed Product frame is solid, conceptual cases use a persistent label and
dashed frame, the Loop is a neutral teaching diagram, and observed Meta uses
a double-line frame. S64 keeps the prior observed references and conceptual
set in separate frames. Local visual review found no clipping, overlap, or
broken Korean glyph.

| Slide range | Template(s) | Local implementation |
|---|---|---|
| S55 | T07-C | Observed Product callback. |
| S56–S57 | T08-A | Conceptual initial and changed state. |
| S58, S60–S61, S65 | T08-C | Conceptual consequence, cause distinction, and regression analogy. |
| S59, S62–S64 | T08-B | Layer choice, minimal change, and evaluation matrix. |
| S66, S72 | T03-C | Loop model and C++ Vision teaching transfer. |
| S67, S69, S71 | T11-A | Observed Meta timeline and synthesis. |
| S68, S70 | T11-B | Observed Meta evidence and follow-up comparison. |

ACT 4 provides local examples of these mapped variants, not proof of broad
reuse across the full deck. The Keynote missing-font warning leaves the
substituted family unknown; Windows PowerPoint and target-PC font behavior
remain unverified.

## Remaining Issues

- **P0:** None found in local source alignment, Evidence boundaries, PPTX
  structure, or rendered slides.
- **P1:** None found that blocks the next ACT's production.
- **P2 / external validation:** Open the deck in Windows PowerPoint; identify
  target-PC font substitution; check Korean and English wrapping, shape
  alignment, Evidence frames, citations, and presentation mode; check room
  projection; conduct a timed 80-minute rehearsal.
- **Product surface:** Current Codex Desktop behavior and account-specific
  availability were not tested. The slides do not claim that they were.
- **Template follow-up:** Recheck T08 and T11 variants when subsequent ACTs
  reuse them; this local implementation does not prove broad reuse.

No new Demo Trial was run, no Claim boundary was changed, and the Demo
Repository was not modified.

**Next readiness: READY FOR ACT 5 PRODUCTION.** Windows, target-PC, room,
product-surface, and timed-rehearsal checks remain open validation gates; they
are not represented as complete.
