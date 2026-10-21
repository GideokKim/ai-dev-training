# ACT 0 Context Scope Revision — S05/S06

> Historical record — 이 문서는 DEC-0036 이전 80장 판의 번호와 검증 결과를 보존한다. 현재 81장 판과의 대응은 [Slide ID Migration](../../plan/SLIDE_ID_MIGRATION.md)을 따른다. 과거 PASS는 현재 파일의 재검증을 뜻하지 않는다.


Date: 2026-10-21. Decision: DEC-0035. Local artifact status: PASS.

## S05 — Intended Width and Included Columns

Connect S02's element-count question to the existing crop investigation.
The original two-row test remains the authority; the screen explicitly shows
only its first row. For `crop(image, 1, 3)`, the half-open specification
selects source columns 1 and 2, giving values 2 and 3 and width 2. The
historical implementation includes column 3 as well, giving 2, 3, 4 and
width 3. Editable cells make the extra element visible.

Keep the actual failure test, product call path and
`row[x_start : x_end + 1]` source evidence. This remains a static
reconstruction of TRIAL-001, not a new run or screenshot. It is a range
mismatch, not an observed C++ allocation/capacity or buffer-overrun event.
Both S02 vector initializations are valid; the bridge concerns checking the
intended count against the actual meaning or included range.

## S06 — Code Context and Unprovided Environment Information

The question about copying code/specification into Chatbot is a teaching
assumption. It contrasts the information available for explaining the crop
width with the execution-log and permission information needed to understand
the read-only temporary-directory errors. The headline makes the missing
Context explicit, without asserting a measured Chatbot limitation.

Each panel labels the actual TRIAL-001 observation separately. The actual
full suite remains seven passes, one crop failure and three environment
errors. The Agent explained the crop issue and observed the permission
restriction; it neither edited code nor removed that restriction. Supplying
environment logs could also give a Chatbot analysis clues. No tool-comparison
experiment, superior repair ability or current product behavior is claimed.

## Validation

- Review both changed PNGs individually. Independent visual review found
  no clipping, unintended overlap, unreadable required text or evidence
  boundary issue. S05's first-row label and S06's assumption/Trial labels
  are visible.
- Finalize the full 80-slide PPTX and ACT 0 nine-slide PPTX, reimport each
  exact final file and render every slide at 1920×1080.
- Confirm the two final changed PNGs match the independently reviewed
  draft bytes. All other 78 full-slide PNG SHA-256 values match the prior
  production version. All nine ACT 0 PNGs match the corresponding full PNGs.
- Keep the other 78 Markdown Notes records byte-identical. All 80 Full and
  nine ACT 0 embedded Notes records match canonical Markdown, allowing XML
  whitespace serialization. Preserve the Notes field schema.
- Preserve Slide IDs, titles, ACT/Section/Story mappings, Primary Messages,
  Evidence Types, Claim Status, time and Mode allocation. The additional
  scope statement distinguishes observation from interpretation.
- Confirm 80 slides and 360 minutes. ACT time is 40/55/70/85/80/30; Mode
  totals are Lecture 130, Demo 73, Case 83, Reflection 20, Transition 22,
  Q&A 32. S05 stays Demo 8 minutes and S06 stays Case 5 minutes.
- Package integrity, declared geometry/fonts and Artifact Tool import pass
  for both final files. Native editable slide elements and the S45 chart
  remain intact.

Exact PPTX SHA-256 values and machine-readable results:
`production/evaluation/ACT_0_CONTEXT_SCOPE_REVISION_VALIDATION.json`.

## Scope and Remaining Gates

Update the integrated PPTX, ACT 0, two changed previews in both locations,
montages, aligned Notes/planning records and active fallback identity.
No new image, Trial, product execution or Demo repository change was made.
Presenter ZIPs and package manifests were not regenerated; the existing
bundle remains the earlier DEC-0033 snapshot.

Windows PowerPoint, target fonts, room projection, current product/account
behavior and timed rehearsal remain UNVERIFIED. Local artifact review and
the planned allocation do not establish successful real presentation timing.
