# ACT 1 Production Evaluation

> Current edition: DEC-0084 /99slides/387minutes. See [ACT0 expansion result](ACT_0_CONTEXT_EXPANSION.md) and [96→99 migration](../../plan/SLIDE_ID_MIGRATION_99.md). The body below preserves this ACT's earlier evaluation IDs/results; its old PASS does not validate current Windows/room/rehearsal.

> Current-version router — 이 보고서의 번호·장수·파일·hash·검증 결과는 해당 Decision 당시의 역사적 판본이다. 현재 82장 번호는 [새 이행표](../../plan/SLIDE_ID_MIGRATION_82.md), 현재 제작 결과는 [Prompt·시간선 수정](PROMPT_TIMELINE_REVISION.md)을 따른다.

> Historical record — 이 문서는 DEC-0036 이전 80장 판의 번호와 검증 결과를 보존한다. 현재 81장 판과의 대응은 [Slide ID Migration](../../plan/SLIDE_ID_MIGRATION.md)을 따른다. 과거 PASS는 현재 파일의 재검증을 뜻하지 않는다.


## Status

**PARTIAL** — ACT 1 production and local render review are complete. Windows
PowerPoint, target-PC font rendering, room projection, and a timed 55-minute
rehearsal remain unverified.

## Deliverables

- PowerPoint: `production/ACT_1.pptx` — 12 slides, S10–S21.
- Speaker Notes: `production/notes/ACT_1_NOTES.md`.
- Embedded PowerPoint Notes: 12 of 12 slides.
- Individual previews: `production/preview/act1/S10.png` through `S21.png`.
- Montage: `production/preview/act1/montage.png`.

The slides use editable native text and shapes. The slide XML contains no
full-slide picture objects. The deck uses a 16:9 canvas; all 12 exported
previews are 1920 × 1080. Each main title is 34 pt. The local Keynote render
showed no visible clipping or shape overlap after revision.

## Slide-by-Slide Review

| Slide | Local status | Review |
|---|---|---|
| S10 | PASS | Reconnects S09's open question to the missing change, preserve, and done boundaries. The example is labeled as a course model, not Trial evidence. |
| S11 | PASS | Makes the weak request and unanswered decisions visible without blaming the requester or presenting it as a Trial prompt. |
| S12 | PASS | Keeps the five questions open and separates the private one-minute reflection from the case discussion. |
| S13 | PASS | Presents Goal, Context, Constraints, Process, and Verification as a course model rather than an official product taxonomy. |
| S14 | PASS | Gives a compact conceptual before/after comparison, a supporting C++ bridge, and an explicit no-prompt-superiority boundary. The C++ inset spacing was corrected. |
| S15 | PASS | Sets up the recorded watch sequence and leaves the result for later slides. The CLI version and single-run scope are visible. |
| S16 | PASS | Shows the half-open crop contract and one-line change as a reconstructed record, not a terminal screenshot. The visible test label was shortened for readability; the exact test identifier remains in Notes. |
| S17 | PASS | Separates each observed check from the scope it supports and clearly marks the performance benchmark as not run. |
| S18 | PASS | Distinguishes the observed Trial from the course model with separate solid and dashed frames. The evidence summary now fits on two balanced lines. |
| S19 | PASS | Separates actual Trial checks from the check-to-claim model. The supporting C++ bridge spacing was corrected; benchmark remains marked not run. |
| S20 | PASS | Starts the Task-versus-Project reflection with empty buckets and does not supply the classification in advance. |
| S21 | PASS | Uses candidate examples to bridge into ACT 2 without presenting `AGENTS.md` as the answer. The next question centers on repeated Project explanation. |

The local PASS results cover the rendered slides and their source/claim
alignment. They do not mean the slides have been verified on Windows or in a
training room.

## TRIAL-002 Evidence and Claim Boundary

S15–S17 use the recorded TRIAL-002 result: one macOS Codex CLI 0.154.0 run.
The recorded checks are focused tests 3/3, full suite 11/11, CLI smoke PASS,
one file and one changed line in the final diff, and `git diff --check` PASS.
The performance benchmark was not run.

The evidence is limited to that recorded run. It does not establish current
Codex Desktop behavior, repeatability, a general advantage of a structured
Prompt, or a causal effect attributable to the Prompt or Harness. S16's
visual is labeled as reconstructed
from the record, not as a real terminal capture.

S10–S14 and S20–S21 are conceptual or teaching-model material. S18–S19 keep
the recorded checks distinct from the general verification model.

## Time and Mode Validation

| Slide | Time | Mode split |
|---|---:|---|
| S10 | 7 | Case 7 |
| S11 | 4 | Case 4 |
| S12 | 4 | Case 3, Reflection 1 |
| S13 | 4 | Lecture 4 |
| S14 | 9 | Lecture 6, Case 3 |
| S15 | 2 | Lecture 2 |
| S16 | 4 | Demo 4 |
| S17 | 4 | Demo 4 |
| S18 | 3 | Lecture 3 |
| S19 | 5 | Lecture 4, Reflection 1 |
| S20 | 3 | Reflection 1, Q&A 2 |
| S21 | 6 | Reflection 1, Transition 3, Q&A 2 |
| **Total** | **55** | **Lecture 19, Demo 8, Case 17, Reflection 4, Transition 3, Q&A 4** |

Slide times and Mode allocations match `plan/SLIDE_MAP.md`. The allocation is
arithmetically verified; live pacing remains unverified until rehearsal.

## ACT 0 → ACT 1 → ACT 2 Continuity

- S09 asks whether Repository access also communicates Task intent. S10 picks
  up that question by identifying what is still unspecified.
- S20 asks the audience to distinguish Task-specific information from
  information that persists across Project work. S21 gives candidate examples
  and hands off with the question of why Project explanations are repeated.
- ACT 2 can introduce recurring Project context without repeating ACT 1's
  Task Specification lesson or revealing its answer early.

## Visual and Template Validation

| Slides | Assigned template | Local review |
|---|---|---|
| S10–S12 | T02-A | Three distinct stages: friction, unanswered request, developer boundaries. |
| S13 | T03-A | One Task Specification model with five responsibilities. |
| S14 | T04-A | Conceptual comparison with supporting C++ inset. |
| S15 | T05-A | Watch setup with no result shown in advance. |
| S16 | T06-A | Reconstructed code/diff evidence and half-open contract. |
| S17 | T06-B | Verification scorecard with supported scope. |
| S18–S19 | T06-C | Observed evidence is separated from the course model. |
| S20 | T01-B | Reflection begins with empty Task and Project buckets. |
| S21 | T04-A | Candidate examples and ACT 2 transition. |

Typography and spacing revisions completed:

- S14 and S19: moved supporting C++ text to remove overlap.
- S16: shortened the visible test caption and increased its size; preserved
  the exact test identifier in Speaker Notes.
- S18: balanced the evidence summary into two readable lines.
- S10–S21: removed a redundant lower-left ordinal; stable Slide IDs remain in
  the footer.

The local Keynote session reported a missing font and rendered using a
fallback. The substituted font was not identified. Windows font substitution,
Korean/English/code wrapping on the target PC, room-projection readability,
and slide-edge visibility therefore remain unverified.

## Remaining Issues and Readiness

- **P0:** None found in the local render and source/claim review.
- **P1:** No known blocking local issue remains after the revisions above.
- **P2 / external validation:** Windows PowerPoint open/render, target-PC
  fonts, room projection, and timed 55-minute rehearsal.

The ACT 1 materials and this evaluation are included in the same repository
checkpoint. No ACT 2 slides were produced, no new Trial was run, and the Demo
Repository was not modified.

**Next readiness: READY FOR ACT 2 PRODUCTION.** External validation remains a
final-delivery gate and is not represented as complete here.
