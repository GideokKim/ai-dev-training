# DEMO-09 — Verification and System Map

## Current ACT3 operation — DEC-0075

S63→S64: S62의 지식 출처를 회수한 뒤 S63에서 목표·Context·Skill을 한 Agent의 밝기 통계 조사·변경에 적용하고 테스트·benchmark를 판단 근거로 연결한다. 세 입력은 순차 단계가 아니다. S64는 이 실제 구성에서 전체 교육용 작업 환경 모델로 확장한다. Demo3+2분과 S64 Lecture4분을 원래 배분대로 구분한다.
실제 근거·ID·시간·기존 선택은 보존한다. 최종 로컬 정적 파일 식별자는
[FALLBACK_MANIFEST](FALLBACK_MANIFEST.md)를 따른다. Windows/제품/계정/교육장/리허설은 UNVERIFIED다.


> Current references: DEC-0075 /93slides/379minutes. Finalized package, local PNG identity/dimensions and Notes parity checked. Static summaries are not raw captures; Windows/product/account/room/rehearsal UNVERIFIED.


Planning Status: CANDIDATE — supporting visual/captured record

Final Validation Status: READY — DEC-0075 local static paths, visible IDs, final-package renders/Notes and hashes checked. Windows/product/account/room/rehearsal remain UNVERIFIED. No new Trial.

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

5m: S63 Demo 3m + S64 Demo 2m.

Phase plan: S63 Demo3m (source-to-role bridge0.33 / goal0.5 / Context0.42 / Skill0.42 / task-and-verification0.83 / scope-and-handoff0.5) → S64 Demo2m. S64 Lecture4m remains separately allocated.

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

Default is the offline static presentation. Open: `production/preview/full/S63.png`, `production/preview/full/S64.png`

Use S63–S64 PNGs; these are static summaries, not a live validation result.

Fallback readiness: READY for current local static files only; see FALLBACK_MANIFEST.md and production/evaluation/S63_TASK_ROLES_REVISION.md. Raw Trial capture and target-PC playback are not implied.

Captured Alternative provenance: DEC-0075 current final-package slide renders. Past Trial evidence stays unchanged. These are labeled reconstructions or existing teaching visuals, not new execution captures. Target-PC/offline presentation operation remains UNVERIFIED.

Fallback Threshold: Static fallback is the default and starts immediately. Live/Hybrid is disabled. A Live cutoff remains TBD until a timed rehearsal establishes it.

## Reset

Static playback is read-only and requires no reset. Any future Live reproduction must use a separate copy/worktree at the recorded commit; do not move main or tags.

## Transition

S64 → S65: introduce outside-repository environment factors.

## Evidence

TRIAL-008; STATE-03/04-PERF; Demo Matrix.

## Do Not Claim

No general performance gain or claim that every Harness component caused success.

## Trial / Run Record

No new Trial or product execution was performed for this runbook. DEC-0075 aligns S63 roles, Notes and current static-file hashes; DEC-0062 retains the original ACT3 flow, and DEC-0038 checks remain historical. Earlier static checks remain historical evidence, and the current READY scope covers local static files only. The recorded source remains the authority for historical dates, exact prompts, and environment details; unspecified fields are not reconstructed here.

Windows PowerPoint, target account/product behavior, timed instructor operation, and room projection remain UNVERIFIED.


## DEC-0075 bounded task-role recap

S63 summarizes actual task-specific goal, maintained project facts/constraints,
reusable repository procedure and bounded checks. The diagram is reconstructed
from preserved records, not a CLI screenshot, automatic loading trace or a new
execution. TRIAL-008's candidate and formal STATE-04-PERF re-verification remain
distinct. No component is isolated as the cause of improvement. No Subagent or
separate Memory was added. S64's screen and Notes remain unchanged.
