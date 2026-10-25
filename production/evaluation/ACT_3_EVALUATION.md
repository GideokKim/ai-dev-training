# ACT 3 Production Evaluation

> Current edition: DEC-0091 /113slides/402minutes. ACT3: 24slides/92minutes, S56–S79. Existing per-page budgets stay fixed outside the approved ACT3 replacement. See [scoped revision](HARNESS_REUSE_REVISION.md) and [108→113](../../plan/SLIDE_ID_MIGRATION_113.md). Dated audits below retain their edition; external gates UNVERIFIED.

> Historical edition: DEC-0090 /108slides/396minutes. ACT3: 19slides/86minutes. Title S56 adds1Transition minute before the original body. See [ACT title result](ACT_TITLE_SLIDES.md) and [102→108](../../plan/SLIDE_ID_MIGRATION_108.md). Dated audits below retain their edition; external gates remain UNVERIFIED.

> Latest visual refinement: DEC-0089 / S54 gray branch arrows now match the2px connecting lines. See [local result](S54_BRANCH_ARROW_REVISION.md). Content/Notes/budgets and evidence scope are unchanged.

> Historical edition: DEC-0088 /102slides/390minutes. ACT3: 18slides/85minutes. See [final reference block](FINAL_PRACTICAL_TIPS_CONSOLIDATION.md) and [105→102](../../plan/SLIDE_ID_MIGRATION_102.md). Dated audit below retains its edition; external gates remain UNVERIFIED.

> Historical edition: DEC-0087 /105slides/393minutes. See [tip/index result](PRACTICAL_APPLICATION_TIPS.md) and [99→105](../../plan/SLIDE_ID_MIGRATION_105.md). Dated audit below retains its edition; external gates remain UNVERIFIED.

> Current edition: DEC-0084 /99slides/387minutes. See [ACT0 expansion result](ACT_0_CONTEXT_EXPANSION.md) and [96→99 migration](../../plan/SLIDE_ID_MIGRATION_99.md). The body below preserves this ACT's earlier evaluation IDs/results; its old PASS does not validate current Windows/room/rehearsal.

> Current-version router — 이 보고서의 번호·장수·파일·hash·검증 결과는 해당 Decision 당시의 역사적 판본이다. 현재 82장 번호는 [새 이행표](../../plan/SLIDE_ID_MIGRATION_82.md), 현재 제작 결과는 [Prompt·시간선 수정](PROMPT_TIMELINE_REVISION.md)을 따른다.

> Historical record — 이 문서는 DEC-0036 이전 80장 판의 번호와 검증 결과를 보존한다. 현재 81장 판과의 대응은 [Slide ID Migration](../../plan/SLIDE_ID_MIGRATION.md)을 따른다. 과거 PASS는 현재 파일의 재검증을 뜻하지 않는다.


## Status

**PARTIAL** — ACT 3 has 18 slides, aligned speaker notes, and local Keynote
render review. The deck is 16:9 and uses editable PowerPoint text and shapes.
Windows PowerPoint, the target presentation computer and its fonts, room
projection, the current Codex product surface, and a timed 85-minute rehearsal
remain unverified. Keynote warned that the presentation contains a missing
font; the substituted family was not identified.

## Deliverables

- PowerPoint: `production/ACT_3.pptx` — 18 slides, S37–S54.
- Speaker Notes: `production/notes/ACT_3_NOTES.md` — 18 slides, 19 fields per
  slide.
- Embedded PowerPoint Notes: 18 of 18 slides; checked against the Markdown
  notes.
- Individual previews: `production/preview/act3/S37.png` through `S54.png`.
- Montage: `production/preview/act3/montage.png`.
- Evaluation: `production/evaluation/ACT_3_EVALUATION.md`.

The PPTX has a 16:9 canvas, editable native text and shapes, and no picture
objects replacing the slides. The final local Keynote export rendered all 18
slides to 1920 × 1080 PNGs. Visual review found no clipping, overlap, broken
Korean glyph, or safe-margin issue. These results describe local rendering;
they do not certify Windows, target-PC, or room readability.

## Slide-by-Slide Review

| Slide | Local status | Review |
|---|---|---|
| S37 | PASS | Contrasts `resize_nearest` and `normalize`, highlighting the repeated procedure while keeping Prompt-only attribution PARTIAL. |
| S38 | PASS | Separates Project facts from recurring work procedure as a teaching model. |
| S39 | PASS | Clearly assigns current goal, Project facts, and reusable workflow to three distinct layers. |
| S40 | PASS | Poses repository-owned Skill as a candidate without showing an unverified success. |
| S41 | PASS | Shows discovery, explicit invocation, and trace evidence as a reconstruction from TRIAL-008; labels current Desktop and implicit behavior UNVERIFIED. |
| S42 | PASS | Compares procedure placement in the two recorded Tasks; does not claim Skill superiority, token savings, or speed improvement. |
| S43 | PASS | Separates reusable procedure from task-specific judgment and results. |
| S44 | PASS | Presents the TRIAL-008 candidate comparison qualitatively and keeps it separate from STATE-04-PERF measurements. |
| S45 | PASS | Shows bounded STATE-04-PERF runtime, traced allocation, and verification results with an explicit non-causality and tracemalloc/RSS boundary. |
| S46 | PASS | Limits the Subagent decision to this connected task and says NOT JUSTIFIED YET. |
| S47 | PASS | Presents conditional teaching criteria and labels the C++ scenario hypothetical. |
| S48 | PASS | Classifies existing Demo knowledge sources without asserting a product Memory capability. |
| S49 | PASS | Frames Memory as a conditional response to costly rediscovery, not a maturity requirement. |
| S50 | PASS | Summarizes the components used for this task and explicitly shows Subagent and Memory were not added. |
| S51 | PASS | Defines Harness as this course's operational model, not an official or universal taxonomy. |
| S52 | PASS | Signals that some global Harness influence was observed, without claiming a complete environment inventory or causal effect for every layer. |
| S53 | PASS | Transfers engineering patterns to C++ as a teaching model; does not imply a C++ Demo was implemented. |
| S54 | PASS | Preserves STATE-04-PERF as a successful case and closes in Reflection → Q&A → Transition order. |

PASS means the local rendered slide and its scoped content were reviewed. It
does not mean external presentation conditions or live product behavior were
validated.

## Skill Evidence

S37 uses TRIAL-006 (`resize_nearest`) and TRIAL-007 (`normalize`) to show a
similar performance procedure across different goals. The repetition is
observed, but Global Harness influence makes Prompt-only attribution PARTIAL.

S41–S42 use TRIAL-008 on Codex CLI 0.154.0. The record supports `/skills`
discovery, explicit `$graypipe-performance` invocation, and Skill body
presence in the execution trace. The visual is reconstructed from the record,
not a current product screenshot. The record does not show a separate product
“load” event. Skill superiority is NOT PROVEN, token savings are NOT MEASURED,
implicit invocation is NOT TESTED, and Codex Desktop behavior is NOT VERIFIED.
Current presentation-surface availability and any HYBRID activation require a
separate product check.

## Working Harness Success

S44 shows the TRIAL-008 `image_statistics` candidate comparison qualitatively
and does not mix those candidate results with the later formal STATE-04-PERF
measurements. S45 records the bounded STATE-04 → STATE-04-PERF result:

- Median runtime: 15.468 → 10.769 ms/call.
- `tracemalloc` peak: 6,675,804 → 380 bytes.
- Focused test: 1/1 PASS; full suite: 11/11 PASS.
- CLI smoke: PASS; benchmark guard: PASS.
- Scope shown: synthetic 1024 × 768 image, CPython 3.9.6, macOS 26.6.2 arm64,
  seven one-call samples per state.

These measurements are bounded to the recorded input, runtime, host, and
measurement conditions. `tracemalloc` is not process RSS. The result does not
attribute the performance change to Harness or Skill as a sole cause.

## Subagent / Memory Decision

S46–S47 state that Subagent use was **NOT JUSTIFIED YET for this task** because
the work was connected and manageable by one Agent, while independent parallel
work and its coordination cost did not support adding one. The hypothetical
C++ example is a teaching model. This is not a claim that Subagents are
unavailable or generally unnecessary.

S48–S49 state that Memory was **NOT JUSTIFIED YET for the current Demo** because
relevant facts and procedures already had sources in code, documentation,
Skills, Git history, or Trial evidence, and no costly recurring rediscovery
candidate was found. This is not a claim about product Memory behavior.

## Harness Definition / C++ Transfer

S50–S51 present the course's operational Harness definition: a deliberately
designed working environment that helps an Agent work reliably in a Project.
This is not presented as an official OpenAI definition, industry standard, or
feature checklist. The current example connects Task Prompt, Project Context
and routing, reusable Skill, benchmarks, tests, tools, and environment; it does
not make Subagent or Memory a required component.

S53 transfers the engineering pattern from Python to a C++ Vision setting:
Project constraints, build and test verification, and benchmark/profiling
workflow. It is a teaching example; no C++ implementation or team-specific
toolchain was tested.

## Time and Mode Validation

| Slide | Time | Mode split |
|---|---:|---|
| S37 | 5 | Case 5 |
| S38 | 4 | Lecture 4 |
| S39 | 5 | Lecture 5 |
| S40 | 4 | Lecture 4 |
| S41 | 5 | Demo 5 |
| S42 | 6 | Demo 3, Case 3 |
| S43 | 3 | Lecture 3 |
| S44 | 5 | Case 5 |
| S45 | 5 | Case 5 |
| S46 | 4 | Demo 3, Q&A 1 |
| S47 | 4 | Lecture 1, Demo 2, Q&A 1 |
| S48 | 4 | Demo 2, Case 2 |
| S49 | 4 | Lecture 4 |
| S50 | 3 | Demo 3 |
| S51 | 6 | Lecture 4, Demo 2 |
| S52 | 3 | Lecture 3 |
| S53 | 5 | Lecture 5 |
| S54 | 10 | Reflection 3, Q&A 5, Transition 2 |
| **Total** | **85** | **Lecture 33, Demo 20, Case 20, Reflection 3, Transition 2, Q&A 7** |

Each slide's Mode split equals its allocated time. The 18 slide allocations sum
to 85 minutes and the Mode totals also sum to 85. The arithmetic matches
`plan/SLIDE_MAP.md`; actual pacing remains unverified until a timed rehearsal.
S54 follows the approved Reflection → Q&A → Transition sequence.

## ACT 2 → ACT 3 Continuity

ACT 2 ends by asking whether the remaining repetition is a Context problem.
ACT 3 opens with two distinct Performance Tasks and their repeated procedure,
then separates Project facts from workflow. The partial attribution boundary
remains visible before the Skill question is introduced.

## ACT 3 → ACT 4 Handoff

S54 asks whether a Harness that works now will still fit after the Project
changes. It preserves the observed STATE-04-PERF success rather than recasting
it as a failure. ACT 4 may begin from that success and introduce a new
staleness problem within its approved scope.

## Visual and Template Validation

The local render uses editable text and shapes and preserves the approved
slide IDs and Evidence framing. Main titles use the 34 pt production style; no
code-heavy slide required a code block below the specified 18–22 pt range.
Safe margins, spacing, contrast, visual hierarchy, and Korean rendering passed
local visual inspection. Citation legibility was checked in the rendered
slides; actual room-distance legibility is unverified.

| Slide | Mapped template | Local review |
|---|---|---|
| S37 | T04-A | Repeated procedure and partial attribution. |
| S38 | T03-A | Context vs. workflow teaching model. |
| S39 | T03-B | Task / Context / Workflow layers. |
| S40 | T05-A | Skill question; product check remains open. |
| S41 | T07-A | Reconstructed, bounded Skill evidence. |
| S42 | T04-A | Before/candidate procedure comparison. |
| S43 | T04-A | Reusable process vs. task-specific choice. |
| S44 | T07-B | Qualitative candidate comparison. |
| S45 | T07-B | Bounded product state and verification. |
| S46 | T10-B | Current-task Subagent decision. |
| S47 | T10-B | Conditional, hypothetical Subagent criteria. |
| S48 | T10-B | Knowledge-source audit. |
| S49 | T10-B | Conditional Memory decision criteria. |
| S50 | T10-C | Minimum Effective Harness case audit. |
| S51 | T03-B | Course model separated from observed inset. |
| S52 | T03-B | Partial observed global influence and teaching model. |
| S53 | T03-A | Python-to-C++ engineering pattern transfer. |
| S54 | T01-B | Reflection, Q&A, and ACT handoff. |

S46–S49 use T10-B and S50 uses T10-C as first implementations in this ACT.
Their rendered instances were reviewed, but this does not establish repeated
reuse or full coverage of every layout variant. The production typeface
fallback named by Keynote is unknown.

## Remaining Issues and Readiness

- **P0:** None found in local rendering, source alignment, or claim review.
- **P1:** None found for the local ACT 3 deliverable.
- **P2 / external validation:** Open the deck in Windows PowerPoint; identify
  target-PC font fallback; check Korean and code wrapping, shape alignment,
  Evidence frames, citations, and presentation mode; check room projection;
  conduct a timed 85-minute rehearsal.
- **Product surface:** Current Codex Skills surface, account availability, and
  HYBRID activation remain unverified. No current Desktop behavior is claimed.
- **Template follow-up:** Review T10-B/C behavior again when later ACT material
  uses them; this ACT provides a first implementation, not broad reuse proof.

No new Demo Trial was run, no Claim boundary was changed, and the Demo
Repository was not modified. No ACT 4 slides were created.

**Next readiness: READY FOR ACT 4 PRODUCTION.** Windows, target-PC, room,
product-surface, and timed-rehearsal checks remain open validation gates; they
are not represented as complete.
