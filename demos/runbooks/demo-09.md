# DEMO-09 — Verification and System Map

> Current DEC-0108 /119slides/417minutes. Current Map references (including callbacks, not all scheduled Demo slots): Use the current Map/Notes role; no new scheduled slot. Current static files and hashes follow [FALLBACK_MANIFEST.md](FALLBACK_MANIFEST.md). Former S15 is deleted; all later current IDs move down one. Earlier literal IDs below retain their historical edition. No new Trial or Live approval.

> Current DEC-0104 /120slides/420minutes. Current Map references (including callbacks, not all scheduled Demo slots): No new scheduled slot; retain the current Slide Map/Notes role. Use [FALLBACK_MANIFEST.md](FALLBACK_MANIFEST.md) for active paths/hashes and local-only readiness. Earlier literal Slide IDs below retain their historical edition. No new Trial or Live approval.

> Current edition: DEC-0097 /114slides/406minutes. This retained role uses S72, S73. Current paths/hashes/readiness: [FALLBACK_MANIFEST.md](FALLBACK_MANIFEST.md). Earlier dated statuses below are historical; no new Trial or Live approval.

## Current operation — DEC-0080

S72 briefly recaps actual roles; S73 emphasizes execution conditions and human evidence/result review rather than replaying the inputs. Preserve actual/teaching-model separation and Demo3+2, with S73 Lecture4 separately allocated.

Current local package/render/Notes/path validation is complete for DEC-0080.
Windows/product/account/room/timed rehearsal remain UNVERIFIED.
See [current connection design](../../plan/ACT3_ACT4_HANDOFF_REVISION.md).

## Current ACT3 operation — DEC-0076

S72→S73: S71의 지식 출처를 회수한 뒤 S72에서 목표·Context·Skill을 한 Agent의 밝기 통계 조사·변경에 적용하고 테스트·benchmark를 판단 근거로 연결한다. 세 입력은 순차 단계가 아니다. S73는 같은 배치를 전체 Harness로 묶고 실행 환경을 Agent·검증 도구 양쪽에 연결한다. 결과를 사람이 검토하며 교육용 모델과 실제 대응 범위를 구분한다. Demo3+2분과 S73 Lecture4분을 원래 배분대로 구분한다.
실제 근거·ID·시간·기존 선택은 보존한다. 최종 로컬 정적 파일 식별자는
[FALLBACK_MANIFEST](FALLBACK_MANIFEST.md)를 따른다. Windows/제품/계정/교육장/리허설은 UNVERIFIED다.


> Current references: DEC-0093 /115slides/406minutes. Current IDs/static paths follow SLIDE_ID_MIGRATION_115.md. Only new S63/S68 add Lecture, no Demo time. ACT4 remains19pages/81minutes; final tip indexes S112-S114. Windows/product/account/room/timed rehearsal UNVERIFIED.


Planning Status: CANDIDATE — supporting visual/captured record

Final Validation Status: READY — DEC-0080 local static paths, final-package renders, Notes and hashes checked. Windows/product/account/room/rehearsal remain UNVERIFIED. No new Trial.

Story Beat: BEAT-033–036

Related Invariants: INV-MATURITY-005, INV-MATURITY-009, INV-VERIFY-001

Act: ACT 3

Delivery Mode: VISUAL / CAPTURED static fallback

## Purpose

Connect a working system to bounded checks and evidence in STATE-04-PERF.

## Audience Question

작업 System이 관찰하고 확인해야 할 것은 무엇인가?

## Starting Repository State

STATE-03 → STATE-04-PERF

## Environment

Playback uses local offline PNGs rendered from the current integrated deck. The target Windows PC, education Codex account/surface, permissions, and room are not selected or verified. Historical Trial environments apply only to their recorded runs.

Historical source scope: TRIAL-008; STATE-03/04-PERF; Demo Matrix.

## Repository Commit / Tag

STATE-03 `f3e2e37b1454e28c5de4c44682ebd49378ebae4b`; STATE-04-PERF `6153b81c0187dd7d82c88bd1817fb683c98eb431`.

## Working Directory

`production/preview/full/` — open only the local PNGs listed below. The Demo repository remains read-only and is not used for playback.

## Prompt

N/A — this runbook does not invoke an Agent. Do not replay historical prompts. Any future Live path needs a separately verified target surface and an approved exact prompt.

## Expected Agent Behavior

No Agent is run in the default path. A future Live run must accept reasonable alternate paths and judge only the recorded success criteria; do not script an answer.

## Watch For

Recorded checks and system map; Subagent and Memory are not required components.

## Success Criteria

Separate the observed bounded checks from attribution to every Harness element.

## Expected Output

Existing State/check summary and static map; no command is rerun.

## Verification

Open the listed PNGs offline and confirm Slide ID, label, and readable content. Every fallback is a 1920×1080 static render of the integrated PPTX, not a raw terminal screenshot, recording, or new Trial. Check SHA-256 in `FALLBACK_MANIFEST.md`. This validates only local static playback.

Evidence limit: No general performance gain or claim that every Harness component caused success.

## Estimated Time

5m: S72 Demo 3m + S73 Demo 2m.

Phase plan: S72 Demo3m (actual-task return0.5 / input roles1 / verification evidence1 / scope-and-handoff0.5) → S73 Demo2m (bounded configuration correspondence1.5 / external-condition question0.5). S73 Lecture4m focuses on environment and human review.

Time Risk: LOW

Execution Risk: LOW–MEDIUM

Product Volatility: LOW

## Current-State Recheck

UNVERIFIED. The target product surface/account has not been checked. Before any Live/Hybrid use, record the selected account/surface, current official source, date, observed behavior, permission mode, and limits.

Live Value: LOW

Known Variance: account, product surface, permissions, model, operating system, and runtime may differ from historical records. Static playback avoids these dependencies but does not validate them.

## Failure Modes

Product variance: do not force the expected path. Environment failure: stop and use the listed fallback. Missing/inconsistent source: stop the claim and report it. Story mismatch: mark the slot for review. Do not repair the Demo repo or improvise evidence.

## Fallback

Default is the offline static presentation. Open: `production/preview/full/S72.png`, `production/preview/full/S73.png`

Use S72–S73 PNGs; these are static summaries, not a live validation result.

Fallback readiness: READY for current local static files only; see FALLBACK_MANIFEST.md and production/evaluation/S64_HARNESS_STRUCTURE_REVISION.md. Raw Trial capture and target-PC playback are not implied.

Captured Alternative provenance: DEC-0076 current final-package slide renders. Past Trial evidence stays unchanged. These are labeled reconstructions or existing teaching visuals, not new execution captures. Target-PC/offline presentation operation remains UNVERIFIED.

Fallback Threshold: Static fallback is the default and starts immediately. Live/Hybrid is disabled. A Live cutoff remains TBD until a timed rehearsal establishes it.

## Reset

Static playback is read-only and requires no reset. Any future Live reproduction must use a separate copy/worktree at the recorded commit; do not move main or tags.

## Transition

S73 → S74/S75: retain the value of a reusable foundation and project bindings.
S76 recalls the bounded success; S77-S79 illustrate repeated human task
corrections without updating the shared method. S80/S81 open evidence and
review/recheck questions for ACT4. No added Demo time or actual failure.

## Evidence

TRIAL-008; STATE-03/04-PERF; Demo Matrix.

## Do Not Claim

No general performance gain or claim that every Harness component caused success.

## Trial / Run Record

DEC-0084 updates current slide numbering and final-package static identities.
No new Trial, Product State, live approval or measured effect. The dated
records below retain their original edition references.


No new Trial or product execution was performed for this runbook. DEC-0076 aligns S64 Harness relationships, Notes and current static-file hashes; DEC-0075 retains S63 task roles, DEC-0062 the original ACT3 flow, and DEC-0038 checks remain historical. Earlier static checks remain historical evidence, and the current READY scope covers local static files only. The recorded source remains the authority for historical dates, exact prompts, and environment details; unspecified fields are not reconstructed here.

Windows PowerPoint, target account/product behavior, timed instructor operation, and room projection remain UNVERIFIED.


## Previous DEC-0075 bounded task-role recap

S63 summarizes actual task-specific goal, maintained project facts/constraints,
reusable repository procedure and bounded checks. The diagram is reconstructed
from preserved records, not a CLI screenshot, automatic loading trace or a new
execution. TRIAL-008's candidate and formal STATE-04-PERF re-verification remain
distinct. No component is isolated as the cause of improvement. No Subagent or
separate Memory was added. At that checkpoint, S64's screen and Notes
remained unchanged.


## DEC-0076 course Harness model and shared environment

S64's outer frame connects goal/Context/Skill, Agent work, verification tools
and the execution environment. Upward connectors represent shared support
conditions, not a product execution trace. Human review follows tool evidence.
The course operational definition is DEC-0023, not an official product taxonomy.
The actual AGENTS.md/docs/Skill/tests/benchmark correspondence stays bounded
to STATE-04-PERF and is not a complete environment audit. Lecture4 describes
the model; the existing Demo2 recap remains static. S63 screen and Notes stay
unchanged, and S65 retains the repository-external environment question.
