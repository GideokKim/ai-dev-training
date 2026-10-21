# STEP 08 — Speaker Notes Pilot Evaluation

> 현재 82장 번호는 DEC-0038의 [새 이행표](SLIDE_ID_MIGRATION_82.md)를 따른다. 이 문서 본문의 원래 판본 번호·실제 경로·검증 결과는 보존한다.
> **Historical Working Draft — 80장 판본.** 아래 원본 Slide ID, 프로토타입·Pilot 수, 실제 파일 경로와 당시 평가 결과를 보존한다. 현재 공식 Map은 DEC-0036의 81장 판본이며, 종전 S08–S80의 현재 번호는 S09–S81이다. 현재 번호는 [SLIDE_ID_MIGRATION.md](SLIDE_ID_MIGRATION.md)로 대조한다. 이 문서의 과거 판정을 새 판본의 검증 결과로 확대하지 않는다.

Date: 2026-10-11

## 1. Status

**COMPLETE WITH OPEN ITEMS**

Seven schema-complete draft records were checked against the approved Slide
Map, Notes Architecture, Demo evidence and claim boundaries. This is a
document review, not a speaker rehearsal or audience test. Final media
selection, presentation-target validation and S72's timed 20-minute rehearsal
remain open. S54 and S72 operating order is now aligned by DEC-0025.

## 2. Pilot Slides

| Slide | Operating type | Review | Finding |
|---|---|---|---|
| S16 | Code / Diff explanation | PARTIAL | Trial sequence, half-open contract, one-line change and bounded checks are clear. Final capture selection and spoken timing remain untested. |
| S35 | Observed Product Evidence | PARTIAL | The A/B access difference and non-claims are explicit. The complete matrix must remain legible at projection scale; final fallback selection is open. |
| S45 | Benchmark / Working Harness Success | PARTIAL | Bounded values and verification are traceable; Harness causality and RSS overclaim are prevented. Live explanation and final reference view are untested. |
| S54 | Reflection / Q&A / Transition | PASS for sequence; PARTIAL overall | Reflection → Q&A → Transition matches DEC-0025. The Q&A cutoff and actual pacing still need a read-through. |
| S56 | Conceptual Scenario | PARTIAL | The hypothetical starting state is clearly distinguished from graypipe history. Final visual and delivery fallback have not been validated. |
| S67 | Observed Meta Case | PARTIAL | The actual TRIAL-006 record is separated from Product evidence; attribution remains PARTIAL. Final capture and timing remain open. |
| S72 | 20-minute presentation operation | PARTIAL | Case → Reflection → Q&A → Transition is aligned by DEC-0025. Four time blocks and cues are laid out, but the timed rehearsal remains UNVERIFIED. |

## 3. Evaluation Criteria

Key: **PASS** = supported by current document/evidence review; **PARTIAL** =
design is drafted but needs live or target-environment validation; **N/A** =
the criterion does not apply to that Slide.

| Slide | Speaker clarity | Avoids slide repeat | Time / Mode | Evidence accuracy | Claim boundary | Beginner / advanced | C++ transfer | Overrun response | Fallback ready | Reusable pattern |
|---|---|---|---|---|---|---|---|---|---|---|
| S16 | PASS | PASS | PARTIAL | PASS | PASS | PASS | N/A | PASS | PARTIAL | PARTIAL |
| S35 | PASS | PASS | PARTIAL | PASS | PASS | PASS | N/A | PASS | PARTIAL | PARTIAL |
| S45 | PASS | PASS | PARTIAL | PASS | PASS | PASS | N/A | PASS | PARTIAL | PARTIAL |
| S54 | PASS | PASS | PARTIAL | PASS | PASS | PASS | PARTIAL | PASS | PARTIAL | PARTIAL |
| S56 | PASS | PASS | PARTIAL | PASS | PASS | PASS | PASS | PASS | PARTIAL | PARTIAL |
| S67 | PASS | PASS | PARTIAL | PASS | PASS | PASS | N/A | PASS | PARTIAL | PARTIAL |
| S72 | PARTIAL | PASS | PARTIAL | PASS | PASS | PASS | PASS | PARTIAL | PARTIAL | PARTIAL |

Time / Mode is PARTIAL for all Slides: allocation arithmetic is preserved, but
actual delivery pacing was not rehearsed. “Fallback ready” is not PASS because
the available V2 preview images are prototype copies, not selected final
presentation media. The S54/S72 silence cues are available as operating
instructions, but have not been rehearsed.

## 4. Notes Structure

- All seven notes contain the 19 fields in
  SPEAKER_NOTES_ARCHITECTURE.md.
- Speaker Flow uses slide-specific, speakable cues and follows the needed
  subset of Open → Explain → Show → Interpret → Transfer → Transition.
- Notes do not write the other 73 Slides, add exercises, create a full script,
  or modify PPT.
- Every note remains DRAFT until speaker read-through and the relevant
  delivery checks are complete.

## 5. Time / Mode Validation

The allocated time and Mode values were compared with SLIDE_MAP.md. S72's
pilot sequence totals 20 minutes:

| S72 segment | Pilot duration |
|---|---:|
| C++ Vision Case | 7 min |
| Reflection | 2 min |
| Q&A / Discussion | 7 min |
| Transition | 4 min |
| **Total** | **20 min** |

S54 totals 10 minutes: Reflection 3 + Q&A 5 + Transition 2. The course totals
remain 80 Slides / 360 minutes; ACT allocations remain 40 / 55 / 70 / 85 / 80
/ 30 and Mode totals remain Lecture 130, Demo 73, Case 83, Reflection 20,
Transition 22, Q&A 32. DEC-0025 changes only the written order of existing
Modes; it changes no duration or aggregate.

### Sequence resolution

- **S54:** final order is Reflection → Q&A → Transition.
- **S72:** final order is Case → Reflection → Q&A → Transition.
- SLIDE_MAP.md, SPEAKER_NOTES_ARCHITECTURE.md, SPEAKER_NOTES_PILOT.md,
  VISUAL_SPEC.md §8 and SLIDE_TEMPLATE_MAP.md R6 now state the same order.
- DEC-0025 records the reason: place each narrative Transition after its
  discussion so it closes the Slide and hands off to the next Story beat.
- CURRICULUM.md, DEC-0007, Claim Freeze, Slide titles, evidence, claims,
  templates, per-Slide minutes, ACT totals and aggregate Mode totals remain
  unchanged.

## 6. Demo / Evidence Accuracy

- **S16:** TRIAL-002 is a single isolated CLI run. The half-open contract,
  observed one-line correction and recorded checks are represented without
  claiming Desktop behavior or universal Prompt quality.
- **S35:** TRIAL-005A/B support a task-specific access difference and broader
  reads. Perfect routing is NOT PROVEN; token saving and performance
  improvement are NOT MEASURED.
- **S45:** STATE-04 to STATE-04-PERF values are bounded to the recorded input
  and environment. Tests, CLI smoke and benchmark guards remain separate
  verification evidence. The Notes do not attribute the performance change
  to Harness alone or treat tracemalloc peak as RSS.
- **S54:** Teaching Model and STATE-04-PERF callback remain separate; no
  claim that Subagent or Memory is universally unnecessary is introduced.
- **S56:** DEMO-04A is explicitly conceptual; no graypipe event, failure or
  Trial is invented.
- **S67:** TRIAL-006 is an Observed Meta case, not Product Code Loop evidence.
  Global influence is noted, attribution remains PARTIAL, and no MCP result or
  hook effect is inferred.
- **S72:** C++ Vision transfer is a Teaching Model. The GPU/toolchain example
  remains hypothetical; no measured result or platform-specific procedure is
  added.

## 7. Beginner / Advanced Coverage

Each Slide has a beginner anchor and an advanced extension or a documented
N/A. The cues share one narrative and do not split the audience into separate
tracks. S35 and S45 explicitly preserve limits on routing and causality.
Audience comprehension has not been tested, so these are content-coverage
findings, not observed learning outcomes.

## 8. C++ Vision Transfer

- S16, S35, S45 and S67: N/A, consistent with the Slide Map.
- S54: contextual carry-over only; it does not invent a C++ example.
- S56: generic Project build/test change transfer; the scenario remains
  conceptual.
- S72: primary transfer; it emphasizes rechecking assumptions and
  verification after change rather than listing tools or hardware steps.

## 9. Claim Boundary

**PASS for document review.** Each Note distinguishes observed Product,
Observed Meta, Conceptual Case and Teaching Model evidence. No Claim Freeze
boundary was expanded. Product-surface, final PC and projection claims remain
unverified and are not represented as validated.

## 10. Fallback Readiness

Status definitions: **READY** means the chosen file/path and its content have
been checked; **PLANNED** means evidence and a fallback route exist but the
presentation asset is not finalized; **TBD** means the source or route is not
identified.

| Slide | Status | Existing source / path | What it is, and what remains |
|---|---|---|---|
| S16 | PLANNED | plan/DEMO_MATRIX.md, TRIAL-002 record; prototype/preview/v2/S16.png | The Trial record contains the observed crop diff and checks. The PNG is a reconstructed, reflowed explainer labeled PROTOTYPE COPY, not a Trial screenshot. No final presentation capture/package is selected. |
| S35 | PLANNED | plan/DEMO_MATRIX.md, TRIAL-005A/B records; prototype/preview/v2/S35.png | The records preserve document-access traces. The PNG is a reconstructed access matrix labeled PROTOTYPE COPY, not a raw access-log capture. Final presentation selection and target-size review remain open. |
| S67 | PLANNED | plan/DEMO_MATRIX.md, TRIAL-006 record; prototype/preview/v2/S67.png | The record preserves global Harness influence and partial attribution. The PNG is a reconstructed timeline labeled PROTOTYPE COPY, not a CLI screenshot. Final presentation selection remains open. |

None is READY as a selected delivery fallback. No new capture was made. If
the PNGs are shown later, label them as explanatory reconstructions; consult
the Trial source record for the actual observations. Target-PC opening and
projection readability have not been checked. S45's metrics must be omitted
if the approved evidence source cannot be consulted; do not reconstruct
numbers from memory.

### S72 Rehearsal Plan

**UNVERIFIED — the rehearsal was not performed in this revision.** When
separately authorized, time one run from slide appearance:

| Wall time | Segment and focus | Required cutoff |
|---|---|---|
| 0:00–7:00 | Case R1–R5: change, friction, fact/hypothesis, cause-matched layer, verification | End the Case at 7:00; keep the fact/hypothesis boundary and R5 verification. |
| 7:00–9:00 | Private Reflection | End at 9:00; do not require a response. |
| 9:00–16:00 | Q&A / Discussion; receive beginner and advanced questions | If none, use the fallback questions below; close at 16:00. |
| 16:00–20:00 | Transition to ACT 5 / S73 | Preserve four minutes for the final Story handoff; end at 20:00. |

No-question fallback: “초급 관점에서는 Project가 바뀐 뒤 무엇부터
확인할까요?” and “숙련 관점에서는 benchmark가 대표 작업을 반영하는지
어떻게 확인할까요?” Offer these as optional prompts; do not require an
answer.

Cutoff cue at 16:00: “질문은 여기까지 받고, 이제 핵심 모델을 다음 장으로
연결하겠습니다.” If an earlier segment overruns, shorten elaboration rather
than removing R3's evidence boundary, R5 verification, or the final handoff.
Record actual segment times, missed cues, readability, and whether all Mode
boundaries fit. This plan is not a rehearsal result.

## 11. Reusability

The same 19-field structure covers a captured Product investigation (S16),
observed routing evidence (S35), measured case (S45), reflection/Q&A (S54),
conceptual case (S56), observed Meta case (S67), and long Teaching Model with
C++ transfer (S72). This shows schema coverage across seven different
operating types only. It does not prove the schema will scale cleanly to all
80 Slides or replace a full-course read-through.

## 12. Required Revisions

### P0

None found in this document review.

### P1

| Slide / scope | Problem | Evidence | Proposed fix | Validation method |
|---|---|---|---|---|
| S72 | Static operation, cutoffs and fallback have not been tested in a 20-minute run. | No rehearsal record is present; DEC-0024 requires timed rehearsal. | Rehearse the DEC-0025 order, measure actual segment cutoffs, and revise cues if needed. | Separately authorized timed rehearsal with all four Mode boundaries and S73 handoff observed. |
| S16, S35, S67 | Final selected capture/reference and fallback package are not established by the prototype previews. | Trial records exist and the prototype PNGs are identified; no delivery asset is selected. | Select and review the source-record or explanatory visual fallback for each Slide; retain the actual-capture/reconstruction distinction. | Verify the selected files against the Trial and open them on the target presentation setup. |
| S35 | Projection-scale readability remains unverified. | Visual prototype review/freeze leaves target projection open. | Check the access matrix at realistic viewing size; simplify the display only if evidence meaning is preserved. | Target-size visual review with the matrix and caveats legible. |

### P2

| Scope | Problem | Proposed fix | Validation method |
|---|---|---|---|
| Seven pilot Slides | Actual speaker read-through has not tested rhythm, wording or handoffs. | Conduct a read-through using the aligned order. | Mark awkward cues and confirm each allocated duration. |
| All 80 Slides | Seven heterogeneous examples cannot establish full-course maintainability. | Recheck schema usage after broader Notes drafting is separately authorized. | Coverage and consistency review across the complete Notes set. |
| Windows / delivery target | Mac-side prototype review does not verify Windows PowerPoint or venue projection. | Keep these as delivery gates. | Open on target Windows PowerPoint, inspect fonts/line wraps/layout and presentation mode; verify the actual display. |

## 13. Open Items

1. Keep the S72 timed 20-minute rehearsal as a final-delivery gate.
2. Select and verify final capture/reference assets and fallbacks for S16,
   S35 and S67.
3. Check S35's matrix at realistic projection size.
4. Set interaction wait/cutoff details from rehearsal; do not invent response
   times in advance.
5. Keep Windows PowerPoint, final presentation PC and actual venue display
   unverified until directly checked.

## 14. Files Updated

- plan/SLIDE_MAP.md
- plan/SPEAKER_NOTES_ARCHITECTURE.md
- plan/SPEAKER_NOTES_PILOT.md
- plan/SPEAKER_NOTES_PILOT_EVALUATION.md
- plan/DECISIONS.md
- plan/VISUAL_SPEC.md
- plan/SLIDE_TEMPLATE_MAP.md

CURRICULUM.md, CLAIM_FREEZE.md, DEMO_MATRIX.md and
DEMO_RUNBOOK_SPEC.md were checked and left unchanged. No other file was
changed. The Demo Repository and PPTX files were not modified.

## 15. Git Checkpoint

Pending document-only validation, commit and push to the existing origin/main.
No force push. No Demo Repository changes.

## 16. Next Readiness

**READY FOR SPEAKER NOTES FREEZE** — operating order is aligned. Keep S72's
timed rehearsal and final fallback/target-screen checks as explicit
pre-delivery gates; this revision does not claim they are complete.
