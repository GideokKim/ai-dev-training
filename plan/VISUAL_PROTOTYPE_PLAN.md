# STEP 08 — Visual Prototype Readiness

Date: 2026-10-09

Status: READY FOR VISUAL PROTOTYPE

## 1. Purpose and Boundary

This document prepares a bounded visual prototype using the approved
80-Slide Map and template assignments. It does not create a PowerPoint,
rendered Slide, image, Speaker Note, or Demo Repository change.

Authority remains with MASTER_PLAN.md, INVARIANTS.md, DECISIONS.md,
SLIDE_MAP.md, SLIDE_TEMPLATE_ARCHITECTURE.md, VISUAL_SPEC.md,
SLIDE_TEMPLATE_MAP.md, CLAIM_FREEZE.md, and the Demo planning documents.
This plan changes no Story, Slide ID, Story Beat, Demo ID, time, Template, or
Layout Variant.

## 2. S64 / DEMO-10 Evaluation Scope

S64 presents a four-row conceptual evaluation set within DEMO-10's existing
five-minute slot. DEMO-10 is a static visual explanation; it does not execute
the four tasks or report a new outcome.

| ID | Purpose / task type | Execution and evidence | DEMO-10 role | Claim boundary |
|---|---|---|---|---|
| EVAL-01 | Bug fix; focused regression and scoped correction. | OBSERVED_PRODUCT in the separate STATE-00 → STATE-00-FIXED chain. It was not rerun as a DEMO-10 evaluation of the conceptual stale-Workflow change. | Prior task reference. | Do not present its earlier evidence as an outcome of DEMO-10 or DEMO-04A. |
| EVAL-02 | Performance task; baseline, functional-output check, and bounded measurement comparison. | OBSERVED_PRODUCT in the separate STATE-04 → STATE-04-PERF chain. It was not rerun as a DEMO-10 evaluation of the conceptual stale-Workflow change. | Prior task reference. | Keep measurement conditions and causal limits attached to the original evidence. Do not imply Harness-only causation. |
| EVAL-03 | Documentation-only adjacent task; avoid unjustified Build or benchmark work. | DESIGNED / CONCEPTUAL. No completed Trial, Product State, or result is recorded. | Designed evaluation case. | Do not show PASS, FAIL, or a measured cost. |
| EVAL-04 | Small-refactor adjacent task; select relevant checks without requiring a full benchmark. | DESIGNED / CONCEPTUAL. No completed Trial, Product State, or result is recorded. | Designed evaluation case. | Do not show PASS, FAIL, or a measured cost. |

### S64 Visual Grammar

- Use T08-B, the Conceptual Evaluation / Decision Variant, with exactly four
  evaluation rows: EVAL-01 through EVAL-04.
- The conceptual matrix columns are Task Type, Why Included, and Evidence
  Status. Keep each cell short enough to scan during the five-minute slot.
- Keep the four-row matrix in a dashed CONCEPTUAL frame. Mark EVAL-01/02 as
  prior observed task references, not results from this evaluation set;
  mark EVAL-03/04 as designed with no Trial outcome.
- If the historical STATE references are shown, place them in a separate,
  small solid OBSERVED_PRODUCT frame. Do not put their result details in the
  conceptual frame. The separate frame is a reference only, not a second
  Demo run.
- Do not display a PASS / FAIL column, score, count, or aggregate result.
  No outcome exists for EVAL-03/04 and no new DEMO-10 execution is planned.
- The matrix is a teaching example, not a mandatory evaluation suite for all
  Projects and not evidence of a Harness improvement.

This resolves the S64 / DEMO-10 mapping discrepancy without changing the
four task definitions or conflating observed history with conceptual design.

## 3. C++ Vision Bridge Inventory and Rendering

The current SLIDE_TEMPLATE_MAP.md assigns CMP-CPP to 23 Slides. Apply the
requested classification:

| Role | Slides | Rendering rule |
|---|---|---|
| PRIMARY | S53, S72, S78 | Prominent Engineering Pattern Transfer Diagram within the host Template: PYTHON DEMO → ENGINEERING PATTERN → C++ VISION. This is a pattern transfer, not a tool list or C++ implementation claim. |
| SUPPORTING | S14, S19, S25, S30, S31, S32 | Small inset or footer strip. Keep the existing Slide's main message dominant. |
| CONTEXTUAL | S07, S47, S50, S51, S52, S56, S59, S60, S63, S64, S73, S75, S77, S79 | Speaker cue by default. Add a small annotation only when it improves the Slide and fits its density limit; visible rendering is optional. |

The inventory totals 23 component assignments: 3 PRIMARY, 6 SUPPORTING,
and 14 CONTEXTUAL. Assignment to a Slide does not by itself require visible
rendering. S54 has a C++ Vision cue in SLIDE_MAP.md but no CMP-CPP component
assignment; treat it as a contextual Speaker cue outside the 23-Slide count.
S18 refers to S19's verification inset and gets no duplicate Bridge.

For all visible Bridges, preserve the Slide Map's C++ vision scope. Do not
repeat CMake, hardware, test-runner, IDE, or tool names as a list. Do not
imply that the Python Demo verifies a C++ project.

## 4. DEMO-04A Runner Case

Current clarification (2026-10-18, DEC-0027): the user has now accepted the
hypothetical unit → unit + integration verification-scope change and retained
unit-only Workflow direction. The earlier prototype rationale below is
historical; its TODO is resolved as a conceptual setting only. No actual
runner command, execution or PASS/FAIL result has been established.

DEC-0020 found no independently justified Project change among the reviewed
candidates that would naturally stale the current repository Skill.
DEC-0021 retains the stale-Workflow idea only as a conceptual controlled
case and requires its Project change to be independently justified. No
corresponding Project State, Trial, Runner migration, or failure was observed.

For a prototype, use the schematic labels:

**OLD TEST ENTRY → NEW TEST ENTRY**

Keep the whole path labeled CONCEPTUAL. The case may posit an independently
justified change in the Project's test organization, but it does not invent
the specific organizational reason. The exact reason remains TODO if a
concrete example is later needed.

The selected old/new entry has not been run or technically validated.
Therefore it is not established whether an old entry would fail, find no
tests, or verify the wrong scope. Show only that a reusable entry can be
stale relative to the newly declared Project entry; do not depict a failure
screen, missed test, or passing result. Revisit the consequence only if a
specific technically valid example is selected.

Use no shell command, Python syntax, or platform-specific setup. The
OLD TEST ENTRY / NEW TEST ENTRY labels are intended to be readable without
explaining Python or a test-runner command and remain suitable for a Windows
audience. This does not establish Windows execution or PowerPoint
compatibility.

## 5. Prototype Slide Selection

Build the prototype around these seven approved Slides and their current
Template mappings:

| Slide | Template / Variant | Validation purpose |
|---|---|---|
| S14 | T04-A | Compare Prompt boundaries and check that the supporting C++ inset stays subordinate to the core Prompt message. |
| S35 | T04-C | Present TRIAL-005A/B access evidence accurately, legibly, and without a file-access log dump or routing superiority claim. |
| S45 | T07-B | Test the benchmark evidence hierarchy, correctness guard, and bounded measurement conditions for Working Harness Success. |
| S56 | T08-A | Establish the persistent CONCEPTUAL grammar and ensure a conceptual starting condition cannot look like Product history. |
| S67 | T11-A | Separate the OBSERVED_META timeline from Product Git States and confirm Trial/Decision sources remain readable. |
| S72 | T03-C | Test the R1–R6 Progressive Reveal for pacing, persistence, and clarity across the long-duration Slide. |
| S73 | T03-C | Test whether the Full Story Recap communicates the approved Chatbot → Prompt → Context → Harness → Loop evolution as one connected course story. |

These seven Slides exercise six of the 27 Layout Variants across five of the
11 Templates. They do not validate every Template or every Variant.

### Template Coverage and Gaps

| Template | Prototype coverage | Remaining gap |
|---|---|---|
| T01 | None | All three Variants untested. |
| T02 | None | Both Variants untested. |
| T03 | T03-C via S72/S73 | T03-A and T03-B untested. |
| T04 | T04-A via S14; T04-C via S35 | T04-B untested. |
| T05 | None | T05-A untested. |
| T06 | None | All three Variants untested. |
| T07 | T07-B via S45 | T07-A and T07-C untested. |
| T08 | T08-A via S56 | T08-B and T08-C untested. |
| T09 | None | T09-A untested. |
| T10 | None | All three Variants untested. |
| T11 | T11-A via S67 | T11-B untested. |

## 6. Prototype Acceptance Criteria

The following are gates for the future prototype review, not claims that a
prototype has already passed. Record observed results against the exact
prototype file and target environment at that later stage.

| # | Acceptance criterion | Future verification |
|---:|---|---|
| 1 | Use a 16:9 slide canvas. | Inspect the document's page size and render all prototype Slides at that aspect ratio. |
| 2 | Preserve Windows PowerPoint compatibility. | Open and review in the target Windows PowerPoint version on a presentation PC. Until then, mark UNVERIFIED. |
| 3 | Keep Korean, English, and code readable. | Review mixed-language text and code at presentation scale; check fallback fonts and line wrapping on the target PC. |
| 4 | Respect safe margins. | Check every prototype Slide for clipping, projection-edge risk, and consistent content boundaries. |
| 5 | Distinguish Evidence Types. | Confirm frame, line style, explicit labels, and source cues carry meaning without color alone. |
| 6 | Give each Slide one core message. | Review titles and primary visual hierarchy against each Slide's Core Message in SLIDE_MAP.md. |
| 7 | Control C++ Bridge density. | Check PRIMARY, SUPPORTING, and CONTEXTUAL rendering against the rules in Section 3. |
| 8 | Preserve real Evidence exactly. | Trace every observed statement, state, trial, number, and capture to its existing source; reject invented or widened claims. |
| 9 | Support Progressive Reveal where mapped. | Step through S72's approved R1–R6 states and confirm timing and accumulated information remain legible. |
| 10 | Support expansion to 80 Slides. | Confirm the visual tokens and components can be reused with the complete 11-Template / 27-Variant registry; separately schedule the untested coverage listed above. |

Windows PowerPoint compatibility, actual projection readability, and all
render-dependent criteria remain UNVERIFIED until the prototype is opened
and reviewed in the target environment.

## 7. Readiness Result

- S64 / DEMO-10 includes EVAL-01–04 with observed history and conceptual
  design explicitly separated.
- CMP-CPP assignments are reconciled as 3 PRIMARY, 6 SUPPORTING, and
  14 CONTEXTUAL, with S54 tracked as a cue-only exception.
- DEMO-04A stays an abstract conceptual case and reports no unobserved
  Runner behavior.
- The seven prototype Slides, their validation purposes, and all uncovered
  Templates / Variants are explicit.
- All ten prototype acceptance criteria have a future verification method.
- Approved totals remain 80 Slides, 360 minutes, 11 Templates, and 27
  Variants.

**Next readiness: READY FOR VISUAL PROTOTYPE.** The actual prototype and its
rendering checks are future work; Windows compatibility is not yet verified.
