# DEMO-07 — Subagent Decision Visual

## Current ACT3 operation — DEC-0071

S58→S59→S60: S58의 실제 제품 결과 뒤, S59는 C++ 독립 조사 가정으로 전환한다. 같은 세 조사를 한 Agent가 맡는 경우와 역할별로 나누는 경우를 비교하고 주 Agent의 분담·근거 확인·통합을 짚는다. S60은 현재 의존적인 Task에 추가하지 않은 판단을 회수한다. 실제 Subagent 실행이 아니다. Demo3+2분, Q&A1+1분과 Lecture1분은 원래 배분대로 구분한다.
실제 근거·ID·시간·기존 선택은 보존한다. 최종 로컬 정적 파일 식별자는
[FALLBACK_MANIFEST](FALLBACK_MANIFEST.md)를 따른다. Windows/제품/계정/교육장/리허설은 UNVERIFIED다.


> Current references: DEC-0071 /93slides/379minutes. Finalized package, local PNG identity/dimensions and Notes parity checked. Static summaries are not raw captures; Windows/product/account/room/rehearsal UNVERIFIED.


Planning Status: DEFERRED — not justified at STATE-04

Final Validation Status: READY — DEC-0071 local static paths, visible IDs, final-package renders/Notes and hashes checked. Windows/product/account/room/rehearsal remain UNVERIFIED. No new Trial.

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

Historical source scope: DEC-0018/0019; current Slide Map S59–60 (DEC-0062/0071).

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

5m: S59 Demo 3m + S60 Demo 2m; Q&A minute portions are separate.

Phase plan: S59 3m (hypothesis0.5 / single Agent0.75 / role assignment1 / integration and cost0.75) → S60 2m. The S59 Q&A1m follows its3m visual and is separate from Demo time.

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

Default is the offline static presentation. Open: `production/preview/full/S59.png`, `production/preview/full/S60.png`

S59–S60 PNG; do not open a product Subagent pane.

Fallback readiness: READY for current local static files only; see FALLBACK_MANIFEST.md and production/evaluation/S59_ROLE_SPLIT_REVISION.md. Raw Trial capture and target-PC playback are not implied.

Captured Alternative provenance: DEC-0071 current final-package slide renders; S59 is revised and S60 remains byte-identical to the prior checkpoint. Past Trial evidence stays unchanged. These are labeled reconstructions or existing teaching visuals, not new execution captures. Target-PC/offline presentation operation remains UNVERIFIED.

Fallback Threshold: Static fallback is the default and starts immediately. Live/Hybrid is disabled. A Live cutoff remains TBD until a timed rehearsal establishes it.

## Reset

Static playback is read-only and requires no reset. Any future Live reproduction must use a separate copy/worktree at the recorded commit; do not move main or tags.

## Transition

S60 → S61: move from role choice to durable knowledge.

## Evidence

DEC-0018/0019; Slide Map S59–60.

## Do Not Claim

No current interface support, speed/quality gain, parallelism benefit, or primary Live readiness.

## Trial / Run Record

No new Trial or product execution was performed for this runbook. DEC-0071 aligns S59 comparison, Notes and current static-file hashes; DEC-0062 remains the prior whole-ACT flow decision; the DEC-0038 checks remain historical. Earlier static checks remain historical evidence, and the current READY scope covers local static files only. The recorded source remains the authority for historical dates, exact prompts, and environment details; unspecified fields are not reconstructed here.

Windows PowerPoint, target account/product behavior, timed instructor operation, and room projection remain UNVERIFIED.
