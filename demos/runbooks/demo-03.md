# DEMO-03 — Reusable Verification Workflow

> Current edition: DEC-0097 /114slides/406minutes. This retained role uses S61, S62. Current paths/hashes/readiness: [FALLBACK_MANIFEST.md](FALLBACK_MANIFEST.md). Earlier dated statuses below are historical; no new Trial or Live approval.

## Current ACT3 operation — DEC-0070

S61→S62: S61의 왼쪽 목록 발췌, 가운데 실제 호출과 요청 요약, 오른쪽 실행 trace의 이름·경로·전체 본문 순으로 짚는다. S62에서 본문 포함과 수행 근거를 구분한 뒤, 세 행의 지침 번역을 실제 출력·변경 전 메시지·최종 diff에 대응한다. 계획 지침의 조건부 표현과 관찰된 횟수·테스트 범위를 유지한다. 밝기 통계는 세 번째 Task이며 다른 Task와 성능 우열을 비교하지 않는다. 기본은 정적 기록/PNG이고 현재 Live/Hybrid는 미활성이다.
S64의 Lecture3분은 재사용 절차와 이번 근거·질문·채택/보류 경로를 설명한다. 이 경로는 교육용이며 실제 결과는 S65에서 회수한다. DEMO-03의8 Demo분에 추가하지 않는다.
S65의 Case5분은 밝기 통계 작업, 기존 임시 리스트 도식, 두 후보와 제외/선택 순으로 읽는다. S66의 별도 Case5분은 선택한 변경을 회수한 뒤 실행시간·Python 할당 피크·동작 검증을 세 영역으로 확인한다. 후보 비교와 formal 제품 상태 측정을 구분하며 Demo 시간은 늘리지 않는다.
실제 근거·ID·시간·기존 선택은 보존한다. 최종 로컬 정적 파일 식별자는
[FALLBACK_MANIFEST](FALLBACK_MANIFEST.md)를 따른다. Windows/제품/계정/교육장/리허설은 UNVERIFIED다.


> Current references: DEC-0093 /115slides/406minutes. Current IDs/static paths follow SLIDE_ID_MIGRATION_115.md. Only new S63/S68 add Lecture, no Demo time. ACT4 remains19pages/81minutes; final tip indexes S112-S114. Windows/product/account/room/timed rehearsal UNVERIFIED.


Planning Status: CANDIDATE — Anchor candidate

Final Validation Status: READY — DEC-0070 local static paths, visible IDs, final-package renders/Notes and hashes checked. Windows/product/account/room/rehearsal remain UNVERIFIED. No new Trial.

Story Beat: BEAT-020–022

Related Invariants: INV-DEMO-001, INV-DEMO-004, INV-VERIFY-001

Act: ACT 3

Delivery Mode: CAPTURED static fallback; proposed HYBRID disabled

## Purpose

Show the repository-owned reusable procedure and bounded verification records.

## Audience Question

왜 같은 verification procedure를 계속 반복할까?

## Starting Repository State

STATE-03 → STATE-04 → STATE-04-PERF

## Environment

Playback uses local offline PNGs rendered from the current integrated deck. The target Windows PC, education Codex account/surface, permissions, and room are not selected or verified. Historical Trial environments apply only to their recorded runs.

Historical source scope: TRIAL-008, STATE-03/04/04-PERF; plan/DEMO_MATRIX.md.

## Repository Commit / Tag

STATE-03 `f3e2e37b1454e28c5de4c44682ebd49378ebae4b`; STATE-04 `822f1c12c5f602d934a2fd29e48f05bf498b4bfa`; STATE-04-PERF `6153b81c0187dd7d82c88bd1817fb683c98eb431`.

## Working Directory

`production/preview/full/` — open only the local PNGs listed below. The Demo repository remains read-only and is not used for playback.

## Prompt

N/A — this runbook does not invoke an Agent. Do not replay historical prompts. Any future Live path needs a separately verified target surface and an approved exact prompt.

## Expected Agent Behavior

No Agent is run in the default path. A future Live run must accept reasonable alternate paths and judge only the recorded success criteria; do not script an answer.

## Watch For

CLI 0.154.0 Skill discovery/invocation record; keep current Desktop unverified.

## Success Criteria

Describe the procedure and the limited CLI observation without a quality or superiority claim.

## Expected Output

Recorded Skill discovery/loading and workflow summary; no invocation now.

## Verification

Open the listed PNGs offline and confirm Slide ID, label, and readable content. Every fallback is a 1920×1080 static render of the integrated PPTX, not a raw terminal screenshot, recording, or new Trial. Check SHA-256 in `FALLBACK_MANIFEST.md`. This validates only local static playback.

Evidence limit: No Desktop-wide support, Skill superiority, causal performance gain, or measured quality improvement.

## Estimated Time

8m: S61 Demo 5m + S62 Demo 3m. S62 Case and S65–S62 are separate allocations.

Phase plan: S61 5m → S62 Demo portion 3m.

Time Risk: HIGH

Execution Risk: MEDIUM–HIGH

Product Volatility: MEDIUM–HIGH

## Current-State Recheck

UNVERIFIED. The target product surface/account has not been checked. Before any Live/Hybrid use, record the selected account/surface, current official source, date, observed behavior, permission mode, and limits.

Live Value: MEDIUM–HIGH

Known Variance: account, product surface, permissions, model, operating system, and runtime may differ from historical records. Static playback avoids these dependencies but does not validate them.

## Failure Modes

Product variance: do not force the expected path. Environment failure: stop and use the listed fallback. Missing/inconsistent source: stop the claim and report it. Story mismatch: mark the slot for review. Do not repair the Demo repo or improvise evidence.

## Fallback

Default is the offline static presentation. Open: `production/preview/full/S61.png`, `production/preview/full/S62.png`

Show S61–S62 static summaries; do not show long Prompt text or fake terminal UI.

Fallback readiness: READY for current local static files only; see FALLBACK_MANIFEST.md and production/evaluation/S57_S58_TASK_RESULT_REVISION.md. Raw Trial capture and target-PC playback are not implied.

Captured Alternative provenance: DEC-0070 current final-package slide renders; S61/S58 are byte-preserved from DEC-0067. S65/S61 change only separate Case support pages. Past Trial evidence stays unchanged. These are labeled reconstructions or existing teaching visuals, not new execution captures. Target-PC/offline presentation operation remains UNVERIFIED.

Fallback Threshold: Static fallback is the default and starts immediately. Live/Hybrid is disabled. A Live cutoff remains TBD until a timed rehearsal establishes it.

## Reset

Static playback is read-only and requires no reset. Any future Live reproduction must use a separate copy/worktree at the recorded commit; do not move main or tags.

## Transition

S62 → S64: explain why the reusable procedure does not contain task answers.

## Evidence

TRIAL-008, STATE-03/04/04-PERF; plan/DEMO_MATRIX.md.

## Do Not Claim

No Desktop-wide support, Skill superiority, causal performance gain, or measured quality improvement.

## Trial / Run Record

DEC-0084 updates current slide numbering and final-package static identities.
No new Trial, Product State, live approval or measured effect. The dated
records below retain their original edition references.


No new Trial or product execution was performed for this runbook. DEC-0070 aligns the S57/S58 support pages and current package/Notes identities. DEC-0069 remains the previous S57 comparison revision. DEC-0068 remains the S56 procedure/judgment revision. DEC-0067 remains the S55 instruction/action revision. DEC-0066 remains the S54 evidence-location revision. DEC-0062 and DEC-0038 checks remain historical. Earlier static checks remain historical evidence, and the current READY scope covers local static files only. The recorded source remains the authority for historical dates, exact prompts, and environment details; unspecified fields are not reconstructed here.

Windows PowerPoint, target account/product behavior, timed instructor operation, and room projection remain UNVERIFIED.
