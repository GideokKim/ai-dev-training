# ACT 2 Production Evaluation

> Current-version router — 이 보고서의 번호·장수·파일·hash·검증 결과는 해당 Decision 당시의 역사적 판본이다. 현재 82장 번호는 [새 이행표](../../plan/SLIDE_ID_MIGRATION_82.md), 현재 제작 결과는 [Prompt·시간선 수정](PROMPT_TIMELINE_REVISION.md)을 따른다.

> Historical record — 이 문서는 DEC-0036 이전 80장 판의 번호와 검증 결과를 보존한다. 현재 81장 판과의 대응은 [Slide ID Migration](../../plan/SLIDE_ID_MIGRATION.md)을 따른다. 과거 PASS는 현재 파일의 재검증을 뜻하지 않는다.


## Status

**PARTIAL** — ACT 2 production and local Mac Keynote rendering review are
complete. Windows PowerPoint, target-PC font substitution, room projection,
and a timed 70-minute rehearsal remain unverified.

## Deliverables

- PowerPoint: `production/ACT_2.pptx` — 15 slides, S22–S36.
- Speaker Notes: `production/notes/ACT_2_NOTES.md`.
- Embedded PowerPoint Notes: 15 of 15 slides, aligned to the Markdown notes.
- Individual previews: `production/preview/act2/S22.png` through `S36.png`.
- Montage: `production/preview/act2/montage.png`.

The deck uses editable native PowerPoint text and shapes. The slide XML has no
picture objects used as full-slide artwork. The canvas is 16:9, and each local
preview is 1920 × 1080. Each primary title is 34 pt. The local render review
found no visible clipping, shape overlap, or broken Korean glyphs. Keynote
reported a missing font; the substituted font family was not identified.

## Slide-by-Slide Review

| Slide | Local status | Review |
|---|---|---|
| S22 | PASS | Frames repeated Project facts as a problem and leaves the solution open. The cards are a conceptual example, not Trial evidence. |
| S23 | PASS | Shows the recorded STATE-01 file size and content categories. The file card is reconstructed from repository evidence, not a screenshot or current product demonstration. |
| S24 | PASS | Shows the single TRIAL-003 command-use observation and 11/11 result while retaining the README-only Prompt scope and Personal/global Skill attribution boundary. |
| S25 | PASS | Separates current Task intent from recurring Project facts as a teaching model, without presenting an official OpenAI taxonomy. |
| S26 | PASS | Shows the recorded STATE-01 to STATE-02 size change and added detail categories. It does not equate growth with failure. |
| S27 | PASS | Distinguishes relevant from unnecessary Context and visibly marks Agent confusion and Context-related failure as NOT OBSERVED. |
| S28 | PASS | Presents Always-on, On-demand, and Workflow as a course model; notes that the workflow example is not stored in STATE-02. |
| S29 | PASS | Keeps the research claims bounded to studied tasks and models, cites the sources, and does not claim a current Codex failure or threshold. |
| S30 | PASS | Opens the routing question and states that routing performance or token savings are not proved. The C++ bridge stays to one scope distinction. |
| S31 | PASS | Separates Root/Core from Topic Detail and uses a compact C++ bridge without a tool or hardware list. |
| S32 | PASS | Separates the observed STATE-02 to STATE-03 structure from the teaching interpretation. The integrated C++ bridge maps core constraints to algorithm, module, and hardware detail. |
| S33 | PASS | Presents the two Task questions without disclosing their expected outcomes. |
| S34 | PASS | Shows the TRIAL-005A answer and the relevant contract document while preserving the broader-context and final-run-only `testing.md` qualifications. |
| S35 | PASS | Compares task-specific document access and visibly marks perfect routing as NOT PROVEN, token savings as NOT MEASURED, and performance gain as NOT MEASURED. |
| S36 | PASS | Recaps Prompt, Context, and routing, then frames repeated procedure as the next problem without revealing Skill as the answer. |

These PASS results cover local rendered appearance and the checked source and
claim boundaries. They do not certify Windows, target-PC, room, or live
presentation behavior.

## STATE-01 / STATE-02 Evidence

S23–S24 use the recorded STATE-01 root `AGENTS.md` (15 lines / 567 bytes) and
TRIAL-003. The recorded run inspected `AGENTS.md`, used a test command that was
not included in the Prompt, and reported 11/11 tests passing. The Prompt itself
specified README-only scope, and Personal/global Skills also ran. The material
therefore does not attribute file-scope compliance or an independent causal
effect to `AGENTS.md` alone. STATE-01 visuals are reconstructed from repository
evidence, not live screenshots.

S26–S27 compare STATE-01 with STATE-02 (32 lines / 1,303 bytes), which added
pipeline order, image contracts, test structure, and CLI fields. TRIAL-004 was
a README build-guidance task with unrelated Image Context present. Agent
confusion and Context-related failure were not observed. The slides do not
claim Context growth caused a failure.

## STATE-03 / Routing Evidence

S32 shows the observed STATE-02 to STATE-03 repository structure: a smaller
root file with links to `architecture.md`, `image-contracts.md`, and
`testing.md`. The routing interpretation is presented as a teaching model.

TRIAL-005A/B show that `image-contracts.md` was read for the crop task and not
read for the runtime-dependency task; both tasks read `architecture.md`.
TRIAL-005A's final run also read `testing.md`; other broader context was read.
The evidence supports a task-specific access difference in these runs only.
Perfect routing is NOT PROVEN, token savings are NOT MEASURED, and performance
improvement is NOT MEASURED.

## Research Claim Boundary

S29 cites Liu et al., “Lost in the Middle: How Language Models Use Long
Contexts,” TACL 2024, and RepoQA (2024). It uses them for a bounded caution that
relevance, position, and retrieval can matter for particular studied tasks
and models. It does not generalize those results to a current Codex repository
coding limitation, claim a universal long-context failure, or invent a context
length threshold. RepoQA venue remains unspecified in the source material.

S28's Always-on / On-demand / Workflow grouping is a course teaching model,
not an official OpenAI classification. Its workflow example is not claimed to
be a saved artifact in STATE-02.

## Time and Mode Validation

| Slide | Time | Mode split |
|---|---:|---|
| S22 | 5 | Lecture 4, Case 1 |
| S23 | 4 | Demo 4 |
| S24 | 4 | Demo 4 |
| S25 | 5 | Lecture 5 |
| S26 | 4 | Case 4 |
| S27 | 4 | Demo 2, Reflection 2 |
| S28 | 4 | Lecture 4 |
| S29 | 4 | Lecture 4 |
| S30 | 3 | Lecture 3 |
| S31 | 4 | Lecture 4 |
| S32 | 5 | Lecture 2, Demo 2, Case 1 |
| S33 | 2 | Lecture 2 |
| S34 | 5 | Case 5 |
| S35 | 7 | Demo 1, Case 3, Reflection 2, Q&A 1 |
| S36 | 10 | Transition 4, Q&A 6 |
| **Total** | **70** | **Lecture 28, Demo 13, Case 14, Reflection 4, Transition 4, Q&A 7** |

Slide times and Mode splits match `plan/SLIDE_MAP.md` and sum to the approved
ACT 2 allocation. The arithmetic is verified; actual pacing remains
unverified until a timed rehearsal.

## ACT 1 → ACT 2 Continuity

ACT 1 ends by asking why Project explanations recur across different Tasks.
S22 resumes that exact problem with three Task examples and does not reveal
the repository-context answer before the problem is established. S23–S24 then
introduce the recorded STATE-01 and TRIAL-003 evidence.

## ACT 2 → ACT 3 Handoff

S36 recaps current Task intent, recurring Project facts, and the location of
relevant detail. It then asks whether organizing Project information solves
the remaining problem. Repeated procedure remains visible as an observed
pattern with partial attribution; ACT 3 can investigate workflow reuse
without presenting a Skill as the answer in advance.

## Visual and Template Validation

| Slide | Template | Local review |
|---|---|---|
| S22 | T02-B | Repeated-fact problem framing; no solution shown. |
| S23 | T07-C | Reconstructed STATE-01 artifact and bounded state metadata. |
| S24 | T07-A | Observed Trial result separated from attribution limits. |
| S25 | T03-B | Task Prompt and Project Context teaching model. |
| S26 | T04-B | State growth comparison, without a failure implication. |
| S27 | T07-A | Relevant and unnecessary information with NOT OBSERVED outcomes. |
| S28 | T03-B | Three-layer course model, labeled as non-official. |
| S29 | T09-A | Research references and application boundary. |
| S30 | T03-C | Routing question with a restrained supporting C++ bridge. |
| S31 | T03-B | Core-to-detail model with integrated C++ scope example. |
| S32 | T04-B | STATE-02/03 comparison and separated teaching interpretation. |
| S33 | T05-A | Two-task observation setup with outcomes withheld. |
| S34 | T07-A | Crop Trial evidence focused on the contract and answer. |
| S35 | T04-C | A/B access matrix with unmeasured effects stated separately. |
| S36 | T04-A | Recap and problem-led transition to ACT 3. |

The 15-slide local montage and individual previews were reviewed. The main
titles render at 34 pt. Citation text on S29 uses 14 pt. Safe margins, Korean
glyphs, visual hierarchy, and Evidence frames appear consistent in the local
render. No P0 or P1 local production blocker was found. Keynote reported a
missing font but did not identify the substituted family; Windows font
fallback and target-room distance remain external checks.

## Remaining Issues and Readiness

- **P0:** None found in the local render and source/claim review.
- **P1:** None found for local ACT 2 production.
- **P2 / external validation:** Windows PowerPoint open/render and font
  substitution; target-PC font and Korean/code wrapping; room projection;
  timed 70-minute rehearsal.
- **Product surface:** HYBRID activation remains unverified. Slides use
  captured/reconstructed records; no current Codex Desktop behavior is
  claimed.

The ACT 2 deck, notes, previews, and this evaluation are the only intended
deliverables in this checkpoint. No ACT 3 slides were produced, no new Demo
Trial was run, and the Demo Repository was not modified.

**Next readiness: READY FOR ACT 3 PRODUCTION.** Windows, room, target-PC, and
timed-rehearsal checks remain open validation gates and are not represented as
complete.
