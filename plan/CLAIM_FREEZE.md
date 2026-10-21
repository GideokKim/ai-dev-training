# STEP 08 — CLAIM / EVIDENCE FREEZE RESULT

> **현재 기준: DEC-0036 / 81장 (2026-10-21).** 새 S08을 삽입하고 종전 S08–S80을 S09–S81로 이동했다. 총 360분과 ACT·Mode 합계, 기존 Beat·Section·Demo·Trial·State ID는 유지한다. [번호 대조·문서 범위](SLIDE_ID_MIGRATION.md). 과거 프로토타입 경로와 명시된 80장 이력은 당시 번호를 보존한다.

## 2026-10-18 — S58 Conceptual Setting Clarification

Under DEC-0027 the user accepted a hypothetical Project need to verify module
interactions: the official scope expands from unit tests to unit plus
integration tests, while a reusable Workflow still directs only unit tests.
This remains CONCEPTUAL across S57–66. It adds no observed migration, Agent
failure, missing test, runner result, Product State or new Trial. The frozen
historical evidence and all numerical/inference limits below are unchanged.


Checked: 2026-10-06

Related decision: [DEC-0023 — Freeze STEP 08 claims and course operational definitions](DECISIONS.md)

This freeze applies the existing claim boundaries to the approved 81-Slide Map under DEC-0036. The original 80-slide audit remains in Git history. Claim status is
multi-label: one slide can contain a teaching model and a separately scoped
product or Trial claim. The status applies to the exact wording and evidence
boundary below, not to every possible interpretation of a slide.

## 1. Status

**FROZEN WITH OPEN ITEMS.**

The claim boundaries, allowed operational definitions, and limited Slide 30
research wording are frozen. The selected training account, presentation
surface, and concrete Windows environment have not been checked. Those open
items remain attached to the affected slides; they do not reopen the approved
Story, slide count, schedule, or Demo selection.

## 2. Slide Map

| Item | Result |
|---|---|
| Slides | 81; authorized by DEC-0036 |
| Story / sequence | Frozen; no Story change in this audit |
| Net time | 360 minutes; frozen |
| Delivery modes | Frozen: Lecture 130, Demo 73, Case 83, Reflection 20, Transition 22, Q&A 32 minutes |
| ACT counts | Frozen: ACT 0 = 10, ACT 1 = 12, ACT 2 = 15, ACT 3 = 18, ACT 4 = 18, ACT 5 = 8 |
| Demo selection | Frozen; no Demo added or replaced |

The freeze does not finalize product-dependent click paths, Speaker Notes,
visuals, or a live run.

## 3. Claim Status Summary

The status rows overlap where a slide has both a course model and an evidence
claim.

| Status | Slide IDs / claims |
|---|---|
| **FROZEN** | The approved project/map contract applies across Slides 01–81: six-hour developer training, 81-slide structure, 360-minute net schedule, and the approved Story order. This is a project decision, not a product-performance claim. |
| **FROZEN WITH SCOPE** | **S08** documents the scoped Codex entry path (CLM-0031), without a target-account/UI observation; **S04–06** repository exploration is historical Codex CLI Trial evidence; **S16–18** TRIAL-002; **S20** bounded verification example; **S23–25** STATE-01 / TRIAL-003; **S27–28** STATE-02; **S32–36** STATE-03 and TRIAL-005A/B; **S38** TRIAL-006/007 repeated procedure; **S42–46** TRIAL-008 and STATE-04-PERF facts; **S51** the project-specific component audit; **S56** observed Product success; **S68–72** the dated Meta Trial timeline; **S74–75** approved Story / repository evolution recap. Each remains bounded to its named State, Trial, code path, or environment. |
| **TEACHING MODEL** | **S02–03, S07–15, S19–22, S26, S29–33, S37, S39–41, S44, S47–55, S59–67, S73–81.** These are task-spec, context/workflow, routing, maturity, verification, decision, feedback, and transfer models. Label them as this course's models or heuristics; do not present them as official product taxonomies or universal laws. |
| **CONCEPTUAL CASE** | **S57–66** DEMO-04A stale-Harness scenario and its evaluation path. Keep a visible `CONCEPTUAL` label throughout; its Project change, failure, cause, correction, and EVAL cases did not happen in the Demo repository. |
| **REQUIRES PRODUCT CHECK** | **S04–06** for a current Live/Hybrid repository-investigation path; **S08** for the exact ChatGPT dropdown position, selected account and Windows entry path; **S41–43** for the selected Skills surface, invocation, and account; **S47–50** if current Subagent/Memory product behavior is explained; **S53** for target configuration, feature availability, trust, and permissions. Concrete Windows/shell/IDE instructions on **S15, S20, S26, S31–33, S54, S73, S79** also require a target-environment check. |
| **REQUIRES RESEARCH CHECK** | None for the currently bounded Slide 30 claim. The final slide must retain its citations. Any stronger claim about general degradation, current Codex behavior, or all models/tasks is outside this freeze and needs new research review. |
| **REQUIRES COMPANY POLICY** | None in the current Map. No slide claims that internal/customer data or external services are approved for use. |
| **DROP** | Do not include the unsupported candidates listed in §11: universal long-context failure, Context-routing performance/token savings, Skill superiority or causal speedup, unobserved Demo failures, complete ambient-tool attribution, universal feature availability, company data permission, unqualified benchmark claims, or official/universal Harness / Loop / AI-Native taxonomies. |

## 4. Product Claims

Current OpenAI documentation was checked on 2026-10-06. The documentation
supports these general product descriptions:

- Codex reads repository and nested `AGENTS.md` instructions according to
  documented discovery rules. This does not make `AGENTS.md` a replacement
  for the Project's `plan/` Source of Truth. [OpenAI `AGENTS.md` documentation](https://learn.chatgpt.com/docs/agent-configuration/agents-md)
- Skills are reusable instructions and resources. The documented repository
  location is `.agents/skills/<name>/SKILL.md`; current docs describe discovery
  and explicit invocation across supported Codex clients. The documented
  invocation differs by surface. [OpenAI Skills documentation](https://learn.chatgpt.com/docs/build-skills)
- Hooks can run scripts or MCP tools at Codex lifecycle points. Non-managed
  hooks require review and trust; this is not a claim that every hook runs in
  every workspace. [OpenAI Hooks documentation](https://learn.chatgpt.com/docs/hooks)
- The ChatGPT desktop app, Codex CLI, and IDE extension support MCP servers
  and share host configuration. Hosted plugin tools and local MCP connections
  have different behavior; connection, authentication, and policy remain
  separate checks. [OpenAI MCP documentation](https://learn.chatgpt.com/docs/extend/mcp)
- Current Windows desktop documentation describes native PowerShell / Windows
  sandbox and WSL2 execution options. This confirms documented product
  support, not the audience's installed version, account entitlement, or
  preferred setup. [Windows desktop documentation](https://learn.chatgpt.com/docs/windows/windows-app), [WSL documentation](https://learn.chatgpt.com/docs/windows/wsl)

Historical evidence remains distinct from current documentation:

- TRIAL-001 repository investigation and TRIAL-002 through TRIAL-008 are
  recorded CLI runs. TRIAL-008 observed `/skills`, explicit
  `$graypipe-performance` invocation, and the Skill body in Codex CLI
  0.154.0. This is evidence for that run, not Desktop-wide proof.
- Current docs support general Skills behavior, but the selected training
  account and presentation surface have not been rehearsed. Therefore
  Slides 41–43 may state the general documented mechanism with scope; they
  may not promise it is enabled or behaves identically in the target account.
- TRIAL-006/007/008 remain historical September 2026 evidence. Later product
  documentation does not rewrite or strengthen what those runs observed.

S04's DEC-0034 visual revision keeps two sources distinct: the historical
TRIAL-001 request is shown in a reconstructed input panel, while the GoogleTest
panel is a visibly labeled teaching mockup. Its five passing items and one
failing item are fictional UI data, not the Trial's execution result. The
actual Trial used Python `unittest`; its seven passes, one crop failure and
three read-only temporary-directory errors remain unchanged in the historical
record. Neither panel is a current Codex Desktop screenshot or a new run.

DEC-0035 keeps S05-S06's historical OBSERVED_PRODUCT claims within TRIAL-001.
S05 connects the intended-versus-included element count to S02 as a teaching
bridge. The actual defect remains Python crop's extra endpoint: expected
width two versus included width three. It does not establish a C++ allocator,
capacity, memory-allocation or buffer-overrun incident; both S02 vector
initializations are valid. S05's one-row diagram is an explicitly identified
excerpt of the original two-row source/test reconstruction.

S06's code/specification-only Chatbot scenario is a teaching interpretation,
not an observed comparison or a general capability claim. If environment
logs and permission information are supplied, a Chatbot may also have clues
for analysis. The actual Trial observed the three read-only environment
errors but neither changed code nor removed the permission restriction.
Do not turn missing Context into a claim that Chatbot cannot solve the
environment issue or that the Agent demonstrated superior repair ability.

### DEC-0036 — S08 entry path and S09 responsibility scope (2026-10-21)

OpenAI's [Quickstart](https://learn.chatgpt.com/docs/quickstart?setup=app)
and [App documentation](https://learn.chatgpt.com/docs/app) were checked on
2026-10-21 (SRC-0228 / SRC-0229; CLM-0031). They support choosing Codex from the ChatGPT dropdown for codebase
context and developer tools. S08 shows this course's development entry path:
ChatGPT menu → Codex → project Repository folder → investigation request.
The top-left position follows the user's UI specification; current local UI
inspection, target account and Windows behavior remain **UNVERIFIED / REQUIRES
PRODUCT CHECK**. The menu diagram is a reconstruction, not a captured screen.
The documented entry path is RESEARCH plus a TEACHING_MODEL visual, not a new
OBSERVED_PRODUCT run or evidence that historical CLI Trials ran on Desktop.

Do not state that only Codex can access files or repositories in every case;
ChatGPT Work can also provide file access. The selection here concerns the
Codex development path used in this training. S09 distinguishes information
that a person and authorized Agent may inspect from the human's final
acceptance, scope and responsibility. AI can suggest goals, plans and checks;
this is not a claim that AI cannot reason or that access determines intent.
No existing Product, Research or Meta claim is strengthened.

## 5. Windows / Environment Claims

Freeze these engineering patterns for the C++ Vision bridges: state the task
goal and constraints; identify the build/test entry point; check contracts;
measure a named bottleneck with an appropriate benchmark or profiler; and
run relevant regression checks. These are patterns, not a claim that the
Python Demo is a C++ build.

Keep the learner's native Windows versus WSL setup, IDE, shell, commands,
permissions, hardware assumptions, and Codex surface unspecified until checked.
If a slide shows concrete PowerShell, WSL, CMake, IDE, GPU, or Desktop steps,
mark that portion **REQUIRES PRODUCT CHECK**. Otherwise keep Slides 15, 20,
26, 31–33, 54, 73, and 79 at the pattern level.

## 6. Context Research

Approved Slide 30 message:

> More Context is not automatically better. Relevance, position, and retrieval
> can matter in specific tasks and models; these studies do not establish a
> current Codex repository-coding limitation.

The Liu et al. study evaluates multi-document question answering and key-value
retrieval; RepoQA evaluates code-search tasks collected from 50 repositories.
Both are bounded research settings, not a test of current Codex in this Demo
repository. Cite the studies on Slide 30 or its source line:
[Liu et al., *Lost in the Middle*, TACL 2024](https://aclanthology.org/2024.tacl-1.9/);
[RepoQA, *Evaluating Long Context Code Understanding*](https://arxiv.org/abs/2406.06025).

Do not say that long context always degrades performance, that current Codex
has a universal Lost-in-the-Middle limitation, or that Context routing / the
teaching use of Progressive Disclosure saves tokens or improves performance.

## 7. Operational Definitions

These exact bounded definitions resolve OQ-011 for this course under DEC-0023.

- **Harness:** a deliberately designed working environment that helps an
  Agent work reliably in a Project.
- **Minimum Effective Harness:** a course heuristic to use only the Context,
  Workflow, and Verification structure needed for the current problem. It is
  not a fixed feature list or numerical threshold.
- **Loop Engineering:** the feedback model `Execution → Observation → Cause
  → System Change → Re-evaluation`. Automation, Agent self-learning, and
  endless repetition are not part of the definition.
- **AI-Native Development:** this course's framing for deliberately designing
  and operating Task boundaries, Project Context, Reusable Workflow,
  Verification, and Feedback Loops while developers retain responsibility.

Call each one a course operational model or heuristic. Do not call it an
official OpenAI definition, universal industry taxonomy, or guaranteed
maturity sequence.

## 8. Benchmark Claims

| Slide | Allowed claim / numbers | Required scope | Do not claim |
|---|---|---|---|
| **45** | Keep the candidate comparison qualitative: the manual Python single-pass candidate used little traced memory but ran much slower; row-level built-in reductions were the measured candidate selected for the scoped Trial change. Omit exact candidate timing figures from this slide. | `image_statistics`; TRIAL-008; deterministic synthetic 1024×768 image (786,432 pixels, max 255); CPython 3.9.6 / macOS 26.6.2 arm64; same six-field correctness guard. This is candidate comparison evidence within one historical Trial, not the formal STATE-04 baseline/result pair. | Do not say the Skill supplied the algorithm, made the change faster, or is superior to a Prompt. Do not present candidate-comparison figures as the final benchmark. |
| **46** | `15.468 → 10.769 ms/call`; `tracemalloc` peak `6,675,804 → 380 bytes`. | `image_statistics`, STATE-04 → STATE-04-PERF; deterministic synthetic 1024×768 image (786,432 pixels, max 255), same input fingerprint, CPython 3.9.6 / macOS 26.6.2 arm64; seven one-call samples per state; focused test 1/1, full suite 11/11, CLI smoke, benchmark input / six-field guards passed. `tracemalloc` is Python allocation peak, not RSS. | Do not say “Harness made it 30.4% faster.” If mentioning the observed median change, say it was measured only for this input, code path, host, and runtime. The evidence shows a bounded code-change result, not a general Harness effect. |
| **69** | `144.2 → 33.5 ms/call` may appear only as small supporting evidence metadata; the Story remains valid without the number. | `resize_nearest`, TRIAL-006 disposable-worktree run; synthetic 640×480 grayscale input (`max_value=4095`) resized to 960×720; CPython 3.9.6 / macOS 26.6.2 arm64; seven one-call samples; input/output SHA-256 guards passed; one before/after pair. The Trial's Prompt-only attribution is PARTIAL because global Skills and other ambient configuration were present. | Do not make it a performance hero metric or attribute it to the Prompt, Skill, Harness, hook, or MCP. No MCP task result was observed. Do not imply this Trial change is in the current Product State. |

The recorded detailed inputs, samples, and correctness evidence are in
`plan/DEMO_MATRIX.md` and `plan/DEMO_REPOSITORY_SPEC.md`. Do not re-run or
retarget a benchmark merely to preserve a displayed number.

## 9. Meta Evidence

Freeze the supporting Meta timeline as:

`TRIAL-006 → DEC-0016 → TRIAL-007 / TRIAL-008`

- **TRIAL-006:** four global Skills were listed; hook trust/configuration
  warnings and MCP startup/authentication issues were recorded. No hook effect
  or MCP task result is evidenced. Local correctness and benchmark facts
  remain useful; Prompt-only attribution is PARTIAL.
- **DEC-0016:** corrected the distinction between the macOS development host
  and Windows-centered learner assumption; it changed environment/evaluation
  reporting policy, not Demo Product code.
- **TRIAL-007:** revised influence reporting was applied partially. Its report
  and retained stderr differ on an MCP warning; no MCP task result is shown.
- **TRIAL-008:** repository Skill discovery, explicit invocation, and body
  loading were observed in Codex CLI 0.154.0. The global inventory is partial.

This is an observed Training Production evaluation/reporting example. It does
not establish measured Trial-quality improvement, complete environment
capture, a Demo Product change, or a repository Skill repair. Keep the
TRIAL-007 report/stderr discrepancy visible if that detail is shown.

## 10. Company Policy

**Current blocker: NO.** The Map uses the synthetic local Demo repository and
does not claim that internal code, customer data, credentials, external MCP,
plugins, or cloud uploads are approved. OQ-014 remains open for company-specific
guidance. Reopen it before adding those data or service paths to Speaker Notes
or an actual Demo setup.

## 11. Claims Dropped / Weakened

| Candidate claim | Disposition |
|---|---|
| “More context always hurts”; “Codex has Lost in the Middle” | DROP; keep only the study-bounded Slide 30 message. |
| Context routing or Progressive Disclosure saves tokens / improves performance | DROP; TRIAL-005A/B observed different document access, not token use or performance. |
| TRIAL-005 proves perfect routing | DROP; broader architecture reads and variable test-file access were observed. |
| A Skill is better than a Prompt, or the Skill caused the algorithm / speedup | DROP; the trials support repeatable workflow use, not Skill superiority or isolated causation. |
| “Harness made `image_statistics` 30.4% faster” | DROP; retain the scoped code-path benchmark in §8. |
| TRIAL-006's resize result was caused by its Prompt, repository Skill, Hook, or MCP | DROP; environment influence limits attribution and no MCP task result is evidenced. |
| Trial reporting improved product or training quality | DROP; no objective before/after quality metric was measured. |
| The constructed stale-Harness failure or candidate failures A–I actually occurred | DROP as observed history; S57–66 remains a labeled conceptual case. |
| Every training account supports every Skill, Subagent, Memory, Hook, MCP, plugin, Cloud, or permission path | DROP; support and account entitlement are distinct. |
| Company policy permits internal/customer data in the selected surface | DROP; no policy evidence or approval is recorded. |
| AI coding tools make developer coding skill obsolete; unqualified SWE-Bench Pro score | DROP; these are not needed for this Story and are unsupported at the required scope. |
| Harness, Loop Engineering, or AI-Native Development is an official / universal taxonomy | DROP; use the approved course definitions in §7 only. |

## 12. Content Freeze Blockers

| Open item | Blocks slide structure/design? | Blocks Speaker Notes / exact product instructions? | Blocks Live Demo? |
|---|---|---|---|
| Target account and surface checks for S04–06, S08, S41–43, S47–50, S53 | No; scoped Trial captures or a product-independent visual remain possible. | Yes for current UI paths, entitlement, invocation steps, and product behavior claims. | Yes until the chosen account and path are rehearsed; captured fallback remains available under the approved plan. |
| Windows-native / WSL / IDE / shell choice for concrete steps | No, if the slides stay at engineering-pattern level. | Yes for exact commands, setup instructions, and environment claims. | Yes for a Windows-specific live path until selected and rehearsed. |
| Slide 30 citation placement | No; the research wording and sources are frozen. | Final notes / slide text must preserve the citations and study scope. | No. |
| Company policy for internal/customer data or external services | No current blocker; the map does not claim permission. | Yes before adding company-specific data-use instructions. | Yes before using such data/services; current synthetic local Demo is unaffected. |

## 13. Slide IDs Requiring Later Validation

1. **Product surface/account:** S04–06; S08 (documented entry path; exact UI/account unverified); S41–43; S47–50 only if current feature
   behavior is shown; S53.
2. **Windows/environment specifics:** S15, S20, S26, S31–33, S54, S73, S79,
   but only where the slide adds concrete current commands, UI, permissions,
   shell, IDE, or hardware behavior. Pattern-level claims are frozen.
3. **Research citation fidelity:** S30 must retain the source citations and
   limits in §6. The research claim itself is frozen within that boundary.
4. **Benchmark source fidelity:** S46 and S69 values must be copied with the
   scope in §8. No new benchmark run is required. S45 stays qualitative unless
   a separately reviewed measurement method and all metadata are added.
5. **Company-policy recheck:** no current Slide ID. Reopen OQ-014 only if a
   later Speaker Note or Demo introduces internal/customer data or an external
   service.

## 14. Freeze Decision

- **81-Slide Map:** FROZEN under DEC-0036. The authorized S08 insertion and
  current numbering apply; total time, mode, Story progression and Demo
  selection retain their approved boundaries.
- **Claim set:** PARTIAL. Stable project facts, bounded Trial observations,
  course models, and the limited research claim are frozen. Product/account
  and concrete target-environment claims remain conditional.
- **Overall status:** FROZEN WITH OPEN ITEMS, consistent with DEC-0023.

## 15. Next Recommendation

Do **Product Validation** next for the selected presentation surface, account,
and Windows environment. Current research is sufficient for the bounded
Slide 30 message; preserve its citations during later slide production.

Visual System Design can proceed in parallel only for product-independent
slides and diagrams. Keep the UI, Skills invocation, permission, and Windows
setup views open until the target environment is checked. This report does
not begin Visual System Design, Speaker Notes, or PPT production.

## DEC-0037 — S10 Manufacturing Inspection Task Context (2026-10-21)

S10은 TEACHING_MODEL이다. 제조 라인 검사장비로 확장한다는 가정 아래
촬영 이미지 → ROI crop → 밝기 정규화 → 크기 맞춤 → 통계·특징 → 양불 판정을
질문용 도식으로 사용한다. 실선 crop는 앞서 조사한 기존 구현이고 완료·정상
검증을 뜻하지 않는다. 점선은 해당 검사 Task에 추가로 정의·연결할 범위다.

실제 STATE-00부터 normalize/resize/statistics 함수와 실행 연결도 존재한다.
이 도식의 순서·점선을 실제 process_image 순서나 함수의 미구현 상태로 설명하지
않는다. 실제 graypipe 통계는 기본 픽셀 통계이며 도식의 막대가 측정한 히스토그램,
결함 검출 결과 또는 양불 판정 결과라는 주장을 하지 않는다. 판정은 ?로 남긴다.

S10의 제목·기존 질문·BEAT-003→004·TEACHING_MODEL·Transition3+Q&A3분,
S11 이후의 요청 구체화·crop 수정·Context·성능·검증 범위 Story는 유지한다.
새 Trial·Product State·제조 검사 구현을 추가하지 않는다.
