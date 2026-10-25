# ACT 5 Production Evaluation

> Current edition: DEC-0090 /108slides/396minutes. ACT5: 15slides/40minutes. Title S94 adds1Transition minute before the original body. See [ACT title result](ACT_TITLE_SLIDES.md) and [102→108](../../plan/SLIDE_ID_MIGRATION_108.md). Dated audits below retain their edition; external gates remain UNVERIFIED.

> Historical edition: DEC-0088 /102slides/390minutes. ACT5: 14slides/39minutes. See [final reference block](FINAL_PRACTICAL_TIPS_CONSOLIDATION.md) and [105→102](../../plan/SLIDE_ID_MIGRATION_102.md). Dated audit below retains its edition; external gates remain UNVERIFIED.

> Historical edition: DEC-0087 /105slides/393minutes. See [tip/index result](PRACTICAL_APPLICATION_TIPS.md) and [99→105](../../plan/SLIDE_ID_MIGRATION_105.md). Dated audit below retains its edition; external gates remain UNVERIFIED.

> Current edition: DEC-0084 /99slides/387minutes. See [ACT0 expansion result](ACT_0_CONTEXT_EXPANSION.md) and [96→99 migration](../../plan/SLIDE_ID_MIGRATION_99.md). The body below preserves this ACT's earlier evaluation IDs/results; its old PASS does not validate current Windows/room/rehearsal.

> Current: DEC-0083 /96slides/385minutes; ACT5 S86–S96 11/36. [Harness reassessment result](ACT_5_HARNESS_REASSESSMENT.md) and [93→96 migration](../../plan/SLIDE_ID_MIGRATION_96.md) supersede current numbering. Earlier results below retain their historical scope. Windows/room/product/account/rehearsal UNVERIFIED.

> Historical review: DEC-0082 /93slides/379minutes, ACT5 S86–S93 8/30. See
> [ACT5 flow revision](ACT_5_FLOW_REVISION.md). The original evaluation below
> describes its historical version; past PASS does not validate current
> Windows/room/product/account/rehearsal.

> Current-version router — 이 보고서의 번호·장수·파일·hash·검증 결과는 해당 Decision 당시의 역사적 판본이다. 현재 82장 번호는 [새 이행표](../../plan/SLIDE_ID_MIGRATION_82.md), 현재 제작 결과는 [Prompt·시간선 수정](PROMPT_TIMELINE_REVISION.md)을 따른다.

> Historical record — 이 문서는 DEC-0036 이전 80장 판의 번호와 검증 결과를 보존한다. 현재 81장 판과의 대응은 [Slide ID Migration](../../plan/SLIDE_ID_MIGRATION.md)을 따른다. 과거 PASS는 현재 파일의 재검증을 뜻하지 않는다.


## Status

**PARTIAL — production and local review are complete; external presentation
checks remain open.** ACT 5 contains eight editable slides (S73–S80), and the
embedded PowerPoint Notes match the Markdown notes. All eight slides were
rendered to 1920 × 1080 PNG previews and reviewed locally. The PPTX structure
validator passed. Keynote reported a missing font during rendering; the
substitute family was not identified. Windows PowerPoint, target-PC fonts,
room projection, and timed delivery remain unverified.

## Deliverables

- PowerPoint: `production/ACT_5.pptx` — eight slides, S73–S80.
- Speaker Notes: `production/notes/ACT_5_NOTES.md` — 19 fields per slide.
- Embedded Notes: 8 of 8 slides; each embedded note block matches its
  Markdown section.
- Individual previews: `production/preview/act5/S73.png` through `S80.png`.
- Montage: `production/preview/act5/montage.png`.
- Evaluation: `production/evaluation/ACT_5_EVALUATION.md`.

The canvas is 16:9. The PPTX contains 241 native editable shapes and no
picture objects standing in for slides. The Office document validator passed.
Each individual preview is 1920 × 1080. These checks describe the local
Keynote render and PPTX structure; they do not establish Windows PowerPoint or
presentation-room compatibility.

## Slide-by-Slide Review

| Slide | Local status | Review |
|---|---|---|
| S73 | PASS | Recaps Chatbot → Prompt → Context → Harness → Loop as a course teaching model. The stages add engineering responses and do not replace earlier ones or form a required maturity ladder. |
| S74 | PASS | Shows only the seven named repository states from STATE-00 through STATE-04-PERF. Benchmark-preparation commits are identified as supporting history, not extra states. |
| S75 | PASS | Separates components used in the bounded task from Subagent and Memory, which were not justified there. It avoids a universal claim that either feature is unnecessary. |
| S76 | PASS | Shows agent-supported actions alongside developer goal, judgment, verification, and responsibility without declaring an absolute division of labor. |
| S77 | PASS | Labels AI-Native Development as this course's operational model and says the components are not mandatory for every task. |
| S78 | PASS | Presents five equally weighted transfer options. The C++ Vision material is labeled as an engineering-pattern transfer, not a verified project procedure. |
| S79 | PASS | Keeps reflection private and does not require a response, written commitment, or submission. |
| S80 | PASS | Allocates four minutes to Q&A and two to closing. It includes the no-question fallback and closes without adding a new technical concept. |

PASS denotes local content and rendering review only. It does not mean that
external presentation conditions or live pacing were validated.

## Full Story Recap

S73 recovers the approved progression from asking a chatbot for an answer,
through task prompting, project context, and a designed working environment,
to improving a system from feedback. S77 then names the course-specific
AI-Native operational model. The presentation does not add a new Product
feature or maturity stage.

## Product State Evolution

S74 displays the verified named State path:

`STATE-00 → STATE-00-FIXED → STATE-01 → STATE-02 → STATE-03 → STATE-04 → STATE-04-PERF`.

The Demo Repository tags were checked and match this path. The slide does not
add Subagent, Memory, stale Harness, or Loop as Product States. It describes
STATE-04-PERF as a bounded working result rather than a universal outcome.

## Minimum Effective Harness

S75 limits the Subagent and Memory decision to the current bounded task. It
keeps both ideas distinct from the task's Prompt, Context/routing, reusable
workflow, tests, and benchmark. “More features ≠ More mature” is paired with
the boundary that less is not always better; the decision rule is to use what
the problem justifies.

## Developer Responsibility

S76 shows investigation, generation, change, execution, and comparison as
actions an agent can support. Goal, judgment, verification, completion, and
responsibility remain part of the developer's work. The slide is a teaching
model, not a claim about mandatory role boundaries.

## AI-Native Definition

S77 identifies the model as course-specific, not an official or universal
industry definition. Task boundary, project context, reusable workflow,
verification, and feedback are presented as elements to design when justified
by the task, not as a compulsory checklist.

## C++ Vision Transfer

S78 gives five equally ranked choices: Task Specification, Project Context,
Reusable Workflow, Verification, and Repeated Failure Loop. The example
transfers engineering patterns; it does not claim a validated procedure for
any specific C++ repository, toolchain, hardware, or benchmark.

## Time and Mode Validation

| Slide | Time | Mode allocation |
|---|---:|---|
| S73 | 4 min | Lecture 4 |
| S74 | 3 min | Lecture 1, Demo 2 (visual) |
| S75 | 2 min | Lecture 2 |
| S76 | 3 min | Lecture 3 |
| S77 | 3 min | Lecture 3 |
| S78 | 5 min | Case 1, Transition 4 |
| S79 | 4 min | Lecture 2, Reflection 2 |
| S80 | 6 min | Q&A 4, Transition 2 |
| **Total** | **30 min** | **Lecture 15, Demo 2, Case 1, Reflection 2, Transition 6, Q&A 4** |

Every slide's Mode allocation equals its slide time. ACT 5 totals match the
approved 30-minute and Mode allocation. A timed rehearsal was not performed,
so live pacing remains unverified.

## ACT 4 → ACT 5 Continuity

S72's planned Transition hands off to S73's full-story recap. S73 then moves
to the actual repository history on S74. S78 transfers the engineering
questions to the learner's own work before S79's private reflection; S80
handles Q&A and closes the course. No ACT 0–4 slide or Demo Repository file
was changed.

## Visual / Template Validation

The local render uses a consistent 16:9 layout, visible Slide IDs, large
titles, safe margins, and editable native text and shapes. Visual review found
no clipping, overlap, broken Korean glyph, or evidence-frame confusion. S74
uses an observed Product frame; S75 distinguishes bounded Product facts from
the teaching rule; S76–S79 use teaching/transfer framing; and S79's private
reflection is visibly separate from S80's Q&A.

Keynote reported that the requested font was unavailable; the replacement
font family could not be identified. Korean text rendered legibly on this Mac.
Windows PowerPoint, target-PC font substitution and wrapping, room projection,
and presentation-mode readability remain **UNVERIFIED**.

## Remaining Issues

- **P0:** None found in local slide content, evidence boundaries, file
  structure, or rendered output.
- **P1:** None blocking full-deck integration.
- **P2 / external validation:** Open in Windows PowerPoint; verify font
  substitution, Korean/English wrapping, shape alignment, slide ratio, and
  presentation mode; check room projection; run a timed ACT 5 rehearsal.
- **P2 / planning alignment:** The S79 Transition in `plan/SLIDE_MAP.md`
  specifies `Question → Task → Context → System → Feedback Loop`, while the
  S80 Visual Concept field retains the shorter `Prompt → Context → Harness →
  Loop` shorthand. S80 follows the explicit S79 transition. No planning file
  was changed; reconcile this shorthand if the Slide Map is revised later.

No new Demo Trial was run, no Claim boundary was changed, and the Demo
Repository was not modified.

**Next readiness: READY FOR FULL DECK INTEGRATION.** The Slide Map shorthand
and external presentation checks remain visible review items; they are not
reported as validated or silently changed.
