# STEP 08 — VISUAL SYSTEM ANALYSIS

Date: 2026-10-09

Status: ANALYSIS ONLY — no visual specification, slide rendering, imagery,
Speaker Notes, or PPT created.

## Scope and Source-of-Truth Check

This analysis follows `plan/MASTER_PLAN.md`, `plan/INVARIANTS.md`,
`plan/DECISIONS.md` (OQ-010 and DEC-0022/0023), and
`plan/CLAIM_FREEZE.md`. The frozen project boundary remains 80 slides and
360 instructional minutes. No Slide, Story, timing, or Demo change is proposed.

The detailed approved Slide Map is not currently consolidated as a file under
`plan/`. Slide-specific content and the final timing adjustments referenced
here come from the user's STEP 08 Map instructions. Before per-slide visual
specification or production, preserve that approved Map in the project's
Source of Truth so later work can trace slide titles, roles, evidence, and
timing to one durable artifact. This analysis does not reconstruct or revise
the Map.

## 1. Visual Design Goal

Make the 80-slide training read as one developer engineering story, not as a
sequence of ChatGPT and Codex feature explanations. Keep each screen technical,
readable, visual, and evidence-aware. A no-laptop audience should understand
the slide's current question or point within 5–10 seconds, including from the
back of a large room. Use visual evidence to clarify the story without making
slides feel like dense documents.

## 2. Design Personality

Use a personality that is:

- **Engineering-led:** show work, structure, decisions, and verification.
- **Calm:** avoid promotional urgency, flashy transitions, and decorative UI.
- **Evidence-driven:** make observed, conceptual, research, and teaching claims
  distinguishable.
- **Modern and readable:** use clean visual hierarchy without copying a
  product interface or relying on tiny technical text.

These are direction-setting traits, not a final visual specification.

## 3. Master Visual Narrative

Use one evolving **developer workbench / engineering system** as the recurring
metaphor. It begins as a single conversation and gains structure as the work
requires it:

`CHATBOT → PROMPT → CONTEXT → HARNESS → LOOP`

- **Chatbot:** one conversation surface.
- **Prompt:** a bounded task or specification card.
- **Context:** project information arranged in layers with routes to detail.
- **Harness:** connected project-owned context, reusable workflow, and
  verification around the task.
- **Loop:** execution evidence feeds a cause-based system change and
  re-evaluation.

Keep a common frame and recurring navigation across all five stages. Let the
focus area and small stage marker evolve; do not assign each ACT a separate
theme. The Loop should visibly return to the workbench/system being evaluated,
not depict automatic model self-learning.

## 4. Evidence Visual Grammar

Use framing, line style, iconography, and small labels together. Color alone
must never carry evidence meaning.

| Evidence Type | Candidate visual treatment |
|---|---|
| **OBSERVED_PRODUCT** | Repository / Trial evidence frame with named State, relevant code or diff, test result, or measurement. Keep the scope and run identity visible where needed. |
| **OBSERVED_META** | Production timeline or decision-trace frame with a visibly different border treatment from Product evidence. Keep it clear that it records how the training Demo was evaluated. |
| **CONCEPTUAL** | Bounded scenario card or diagram with a small persistent “Conceptual Example” marker. Never imitate a real terminal capture or imply that an unobserved failure occurred. |
| **RESEARCH** | Claim-and-source treatment with concise study scope and a readable citation. Preserve citations for Slide 29. |
| **TEACHING_MODEL** | Clean abstract diagram with simple labels and no screenshot or log styling. Identify it as a course model when confusion with product behavior is possible. |

Use explicit labels only where a visual could otherwise be mistaken for another
evidence type; avoid large evidence badges on every slide.

## 5. Core Components

Candidate reusable components:

- **State Rail:** approved repository evolution with the current State
  highlighted.
- **Evidence Card:** one observed result with source, State/Trial, and scope.
- **Trial Card:** task, watch-for cue, observed files/actions, and bounded
  result.
- **Diff Card:** a small before/after code change tied to its verification.
- **Benchmark Card:** named path, input/environment metadata, comparison, and
  guard status.
- **Decision Card:** problem, decision, reason, and affected layer.
- **Context Router:** core entry point leading to task-specific detail.
- **Workflow Strip:** a reusable sequence of task steps.
- **Loop Diagram:** execution, observation, cause, system change, and
  re-evaluation.
- **C++ Bridge:** Python Demo → engineering pattern → C++ Vision.

Treat these as components to test in the next specification stage, not as
approved master-slide layouts.

## 6. Demo Grammar

Use the recurring sequence:

`WATCH FOR → EVIDENCE → WHAT HAPPENED`

Name the question before showing evidence. Present only the relevant repository
map, call path, document-access matrix, diff, test badge, benchmark card, or
workflow trace. When a selected live product surface is unavailable, use an
approved capture or bounded Trial record and label it as such; do not change
its evidence status. A reconstructed explanatory diagram must look like a
diagram, not a screenshot.

## 7. Code / Terminal Rule

- Show 3–12 code lines when code is essential, with one point per slide.
- Highlight the relevant boundary, contract, or changed line; prefer a small
  before/after diff such as `-1 / +1` when it explains the result.
- Tie implementation to the evidence that makes it trustworthy: test,
  benchmark, review, or contract check.
- Do not show a full file, a large terminal, or an IDE screenshot with
  unreadable text.
- Use a cropped terminal capture with a clear highlight only when the original
  capture itself is evidence. Otherwise use a visibly diagrammatic
  reconstruction.

## 8. Typography Hierarchy

Reserve a clear hierarchy for:

1. Short slide title / current question.
2. One dominant core message.
3. Primary diagram, evidence, or comparison.
4. Secondary labels and evidence metadata.
5. Code, source citation, or scope note.

The main message and primary visual should dominate from a distance. Keep
metadata, code, and citations distinct from the headline while large enough to
read. Specific typefaces and point sizes remain open until the visual
specification and target presentation dimensions are chosen.

## 9. Color Strategy

Use a restrained neutral foundation. A small narrative-stage accent may mark
the current position on the persistent progression rail and the active object
in a diagram. Avoid giving every ACT a full-screen color theme.

Encode evidence type primarily through frame, line treatment, and a concise
label rather than a second competing set of colors. Observed Product and
Observed Meta should have different frame treatments; Conceptual should use a
bounded scenario style; Research should foreground citation; Teaching Model
should remain diagrammatic. Pair every color cue with a non-color cue for
accessibility.

Exact palette, contrast values, and stage colors remain undecided until the
visual specification stage.

## 10. Diagram Strategy

Reuse components when the underlying relationship is the same:

- State Rail for repository evolution and recap.
- Context Router for core-to-detail information flow.
- Workflow Strip for repeatable procedures.
- Loop Diagram for feedback and system change.
- C++ Bridge for transfer from Python evidence to engineering practice.

Use slide-specific diagrams when they explain a distinct cause-and-effect
relationship, such as a crop boundary, benchmark comparison, stale-workflow
scenario, or project/environment change. Do not force every idea into one
template, and do not create a new timeline when the State Rail already serves
the same purpose.

## 11. C++ Vision Bridge

Keep a recurring bridge:

`PYTHON DEMO → ENGINEERING PATTERN → C++ VISION`

Use a small inset or footer strip on slides where the transfer supports the
main point. The approved primary bridge slides (53, 72, and 78) may give the
transfer more visual space while keeping the same component and sequence. Use
engineering parallels such as test → regression verification or benchmark →
baseline/compare; do not turn the bridge into a tool-logo catalog or imply that
the Python Demo is a C++ build.

On Slide 72, keep the GPU/toolchain change as an explicitly illustrative
teaching case. Do not imply that it happened in the Demo repository or choose
concrete Windows, CUDA, or hardware instructions before environment validation.

## 12. Progressive Reveal Candidates

Progressive reveal is a presentation behavior to specify later, not permission
to add slides or create animations now. Preserve one semantic unit per mapped
slide and reveal only the next reasoning step.

- **Slide 54 — Harness Engineering Recap / Transition (10 minutes total):**
  first hold the reflection question, then reveal recurring friction and the
  matching minimum structure, then reveal the Harness → Loop transition. Keep
  Reflection (3), Q&A (5), and Transition (2) as distinct timing beats; do not
  compress them into a dense recap matrix.
- **Slide 66 — Loop Engineering (11 minutes):** reveal Execution → Observation
  → Cause → System Change → Re-evaluation in sequence, then leave the complete
  loop visible during synthesis and discussion. Emphasize that feedback becomes
  engineering through system change plus evaluation; avoid a static dense
  five-step paragraph.
- **Slide 72 — C++ Vision Loop Transfer (20 minutes):** reveal project or
  environment change → observed friction → cause → correct layer → benchmark /
  regression → discussion. Keep the current step highlighted while the full
  path remains visible. Mark the GPU architecture example as conceptual, and
  use the allotted reflection, Q&A, transition, and transfer time as separate
  presentation states without adding slides.

These staged states are candidates for the visual specification. Exact reveal
timing and implementation remain open.

## 13. Visual Density Rules

Use these as analysis-stage guardrails for the later visual specification:

- One primary message and one dominant visual per screen.
- Add at most one supporting evidence strip, annotation, or source block when
  it serves that message.
- Prefer a simple comparison or short sequence over a dense multi-column
  matrix.
- Reveal multi-step reasoning progressively on long mapped slides instead of
  shrinking labels to fit everything at once.
- Keep code within the 3–12-line rule and remove text that the speaker can
  explain without displaying.

The next stage may set measurable table, label, and metadata limits after
target display dimensions are known. No slide content or timing is changed by
these guardrails.

## 14. Accessibility / Room Readability

- Design for projection and a no-laptop audience; prioritize large key labels
  and simple shapes over detail density.
- Maintain strong contrast and pair color with labels, borders, or line styles.
- Avoid tiny UI, long paragraphs, unlabeled arrows, and code whose meaning
  depends on reading every character from the back of a room.
- Keep source and evidence scope attached to the claim without making the
  citation the main visual.
- Validate actual contrast and distance readability only after the target
  aspect ratio, room, and display are known; this analysis has not rendered or
  tested slides.

## 15. Product-dependent Slides

Keep product-dependent visual slots unresolved until the target account and
surface are checked:

- **Slides 04–06:** current live or hybrid repository-investigation path.
- **Slides 40–42:** selected Skills surface, invocation, account, and current
  behavior.
- **Slides 46–49:** current Subagent / Memory behavior only if described as a
  product feature.
- **Slide 52:** target configuration, availability, trust, and permissions.
- **Windows/environment specifics:** Slides 14, 19, 25, 30–32, 53, 72, and 78
  if they include concrete UI, commands, shell, IDE, permission, or hardware
  instructions. Pattern-level diagrams can proceed without those details.
- **Slide 29:** preserve the approved research scope and citations.
- **Slides 45 and 68:** preserve the frozen benchmark metadata and attribution
  limits if their values are displayed.

Use neutral placeholders or the already approved Trial evidence until these
checks are complete. Do not place unverified UI in a screenshot-style frame.

## 16. Next Readiness

**READY TO DEFINE VISUAL SPEC**, with two conditions carried forward:

1. Preserve the approved 80-slide Map as a consolidated `plan/` Source-of-Truth
   artifact before specifying per-slide layouts.
2. Keep the product/account/environment-dependent visual slots listed in §15
   unresolved until validation.

This gate authorizes only the next specification step. It does not authorize
master-slide construction, slide rendering, image generation, Speaker Notes,
PPT production, or changes to the frozen Map.
