# DEMO-07 — Subagent Decision Visual

## Current ACT3 operation — DEC-0072

S64→S65→S66: S64의 실제 제품 결과 뒤, S65는 C++ 독립 조사 가정으로 전환한다. 같은 세 조사를 한 Agent가 맡는 경우와 역할별로 나누는 경우를 비교하고 주 Agent의 분담·근거 확인·통합을 짚는다. S66은 같은 밝기 통계 함수·출력 명세를 공유한 실제 작업으로 돌아온다. 조사 결과를 코드 변경으로, 바뀐 코드를 출력·테스트·시간·할당량 확인으로 연결하고 기존 한 Agent 유지 판단과 전달·통합 비용을 회수한다. 실제 Subagent 실행이 아니다. Demo3+2분, Q&A1+1분과 Lecture1분은 원래 배분대로 구분한다.
실제 근거·ID·시간·기존 선택은 보존한다. 최종 로컬 정적 파일 식별자는
[FALLBACK_MANIFEST](FALLBACK_MANIFEST.md)를 따른다. Windows/제품/계정/교육장/리허설은 UNVERIFIED다.


> Current references: DEC-0087 /105slides/393minutes. Current IDs/static files follow SLIDE_ID_MIGRATION_105.md. Tip badges/reference indexes add no Demo time or Trial result. Local package/Notes/PNG parity checked; Windows/product/account/room/rehearsal UNVERIFIED.


Planning Status: DEFERRED — not justified at STATE-04

Final Validation Status: READY — DEC-0072 local static paths, visible IDs, final-package renders/Notes and hashes checked. Windows/product/account/room/rehearsal remain UNVERIFIED. No new Trial.

Story Beat: BEAT-023–027

Related Invariants: INV-MATURITY-007, INV-DEMO-004, INV-RESEARCH-001

Act: ACT 3

Delivery Mode: VISUAL ONLY; no product interaction selected

## Purpose

Compare independent role/context value with coordination cost as a conceptual decision, not a product tutorial.

## Audience Question

모든 조사 역할을 Agent 하나가 처리해야 할까?

## Starting Repository State

N/A — no Product State selected

## Environment

Playback uses local offline PNGs rendered from the current integrated deck. The target Windows PC, education Codex account/surface, permissions, and room are not selected or verified. Historical Trial environments apply only to their recorded runs.

Historical source scope: DEC-0018/0019; current Slide Map S59–60 (DEC-0062/0071/0072).

## Repository Commit / Tag

N/A — no Subagent Trial or state exists.

## Working Directory

`production/preview/full/` — open only the local PNGs listed below. The Demo repository remains read-only and is not used for playback.

## Prompt

N/A — this runbook does not invoke an Agent. Do not replay historical prompts. Any future Live path needs a separately verified target surface and an approved exact prompt.

## Expected Agent Behavior

No Agent is run in the default path. A future Live run must accept reasonable alternate paths and judge only the recorded success criteria; do not script an answer.

## Watch For

Only consider role separation if real tasks are independent; the C++ example is hypothetical.

## Success Criteria

Help the audience ask when role separation is worth coordination overhead.

## Expected Output

Static decision visual only.

## Verification

Open the listed PNGs offline and confirm Slide ID, label, and readable content. Every fallback is a 1920×1080 static render of the integrated PPTX, not a raw terminal screenshot, recording, or new Trial. Check SHA-256 in `FALLBACK_MANIFEST.md`. This validates only local static playback.

Evidence limit: No current interface support, speed/quality gain, parallelism benefit, or primary Live readiness.

## Estimated Time

5m: S65 Demo 3m + S66 Demo 2m; Q&A minute portions are separate.

Phase plan: S65 3m (hypothesis0.5 / single Agent0.75 / role assignment1 / integration and cost0.75) → S66 2m (investigation-to-change0.67 / changed-code checks0.67 / retained choice0.66). Keep S66 Lecture1m before its visual and Q&A1m after it. S65 Q&A1m also remains separate from Demo time.

Time Risk: LOW

Execution Risk: MEDIUM for future product use

Product Volatility: LOW for visual / HIGH for product mechanism

## Current-State Recheck

UNVERIFIED. The target product surface/account has not been checked. Before any Live/Hybrid use, record the selected account/surface, current official source, date, observed behavior, permission mode, and limits.

Live Value: LOW

Known Variance: account, product surface, permissions, model, operating system, and runtime may differ from historical records. Static playback avoids these dependencies but does not validate them.

## Failure Modes

Product variance: do not force the expected path. Environment failure: stop and use the listed fallback. Missing/inconsistent source: stop the claim and report it. Story mismatch: mark the slot for review. Do not repair the Demo repo or improvise evidence.

## Fallback

Default is the offline static presentation. Open: `production/preview/full/S65.png`, `production/preview/full/S66.png`

S65–S66 PNG; do not open a product Subagent pane.

Fallback readiness: READY for current local static files only; see FALLBACK_MANIFEST.md and production/evaluation/S60_TASK_DEPENDENCY_REVISION.md. Raw Trial capture and target-PC playback are not implied.

Captured Alternative provenance: DEC-0072 current final-package slide renders; S66 is revised and S65 remains byte-identical to the prior checkpoint. Past Trial evidence stays unchanged. These are labeled reconstructions or existing teaching visuals, not new execution captures. Target-PC/offline presentation operation remains UNVERIFIED.

Fallback Threshold: Static fallback is the default and starts immediately. Live/Hybrid is disabled. A Live cutoff remains TBD until a timed rehearsal establishes it.

## Reset

Static playback is read-only and requires no reset. Any future Live reproduction must use a separate copy/worktree at the recorded commit; do not move main or tags.

## Transition

S66 → S67: move from role choice to durable knowledge.

## Evidence

DEC-0018/0019; Slide Map S65–60.

## Do Not Claim

No current interface support, speed/quality gain, parallelism benefit, or primary Live readiness.

## Trial / Run Record

DEC-0084 updates current slide numbering and final-package static identities.
No new Trial, Product State, live approval or measured effect. The dated
records below retain their original edition references.


No new Trial or product execution was performed for this runbook. DEC-0072 aligns S60 dependencies, Notes and current static-file hashes; DEC-0071 retains the S59 comparison; DEC-0062 remains the prior whole-ACT flow decision; the DEC-0038 checks remain historical. Earlier static checks remain historical evidence, and the current READY scope covers local static files only. The recorded source remains the authority for historical dates, exact prompts, and environment details; unspecified fields are not reconstructed here.

Windows PowerPoint, target account/product behavior, timed instructor operation, and room projection remain UNVERIFIED.
