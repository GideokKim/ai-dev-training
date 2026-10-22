# STEP 08 — CLAIM / EVIDENCE FREEZE RESULT

> **현재 기준: DEC-0060 /93장·379분 (2026-10-22).** ACT 장수10/21/18/18/18/8, 시간40/63/81/85/80/30분. Mode Lecture143/Demo73/Case88/Reflection21/Transition22/Q&A32분. ACT2는 S32–S49이며 기존90장 내용·장별 시간을 보존하고3장·11분을 더했다. 사용자 허용 상한720분은 목표 시간이 아니다. [현재 번호 대조](SLIDE_ID_MIGRATION_93.md), [ACT2 흐름 설계](ACT2_FLOW_REVISION.md). 과거 Prototype/Decision/검증 기록은 당시 판본이며 실환경·리허설은 UNVERIFIED다.


> Historical82-slide clarification below; current owner is S67 and the conceptual segment is S66–S75.

## 2026-10-18 — S59 Conceptual Setting Clarification

Under DEC-0027 the user accepted a hypothetical Project need to verify module
interactions: the official scope expands from unit tests to unit plus
integration tests, while a reusable Workflow still directs only unit tests.
This remains CONCEPTUAL across S58–67. It adds no observed migration, Agent
failure, missing test, runner result, Product State or new Trial. The frozen
historical evidence and all numerical/inference limits below are unchanged.


Checked: 2026-10-06

Related decision: [DEC-0023 — Freeze STEP 08 claims and course operational definitions](DECISIONS.md)

This freeze applies the existing claim boundaries to the approved93-Slide Map under DEC-0060. The original 80-slide audit remains in Git history. Claim status is
multi-label: one slide can contain a teaching model and a separately scoped
product or Trial claim. The status applies to the exact wording and evidence
boundary below, not to every possible interpretation of a slide.

## 1. Status

**FROZEN WITH OPEN ITEMS.**

The claim boundaries, allowed operational definitions, and limited Slides39–40
research wording are frozen. The selected training account, presentation
surface, and concrete Windows environment have not been checked. Those open
items remain attached to the affected slides; they do not reopen the approved
Story, slide count, schedule, or Demo selection.

## 2. Slide Map

| Item | Result |
|---|---|
| Slides | 93; authorized by DEC-0060 |
| Story / sequence | Frozen; no Story change in this audit |
| Net time | 379 minutes; user-approved ACT2 extension, DEC-0060 |
| Delivery modes | Frozen: Lecture 143, Demo 73, Case 88, Reflection 21, Transition 22, Q&A 32 minutes |
| ACT counts | Frozen: ACT 0 = 10, ACT 1 = 21, ACT 2 = 18, ACT 3 = 18, ACT 4 = 18, ACT 5 = 8 |
| Demo selection | Frozen; no Demo added or replaced |

The freeze does not finalize product-dependent click paths, Speaker Notes,
visuals, or a live run.

## 3. Claim Status Summary

The status rows overlap where a slide has both a course model and an evidence
claim.

| Status | Slide IDs / claims |
|---|---|
| **FROZEN** | The approved project/map contract applies across Slides 1–93: developer training with a93-slide structure, a379-minute net schedule under DEC-0060, and the approved Story order. All90 prior slides and their368 minutes remain represented, with three additional explanations totaling11minutes. This is a project decision, not a product-performance claim. |
| **FROZEN WITH SCOPE** | S08 documented entry; S04–06 historical TRIAL-001; S17–19 TRIAL-002; S21 verification; S32–34 STATE-01/TRIAL-003; S36–37 STATE-02/TRIAL-004; S43 actual document reorganization; S44–47 TRIAL-005A/B requests, answers and access; S48 separately scoped recap; S50 TRIAL-006/007; S54–58 TRIAL-008/STATE-04-PERF; S63 component audit; S68 Product success; S80–84 Meta history; S86–87 evolution recap. Each named observation keeps its code/input/environment limits. |
| **TEACHING MODEL** | Task specification, current Prompt methods, Context placement, routing and workflow responsibilities remain course models. ACT2 S35/S38/S41–43/S48–49 and ACT3 S51–53 use teaching diagrams separate from actual observations. S39 is RESEARCH; S40 is a TEACHING_MODEL with separately bounded supporting RESEARCH (DEC-0061). S69–78 conceptual cases and S79 teaching model stay separate from S80–84 OBSERVED_META. |
| **CONCEPTUAL CASE** | **S69–78** DEMO-04A stale-Harness scenario and its evaluation path. Keep a visible `CONCEPTUAL` label throughout; its Project change, failure, cause, correction, and EVAL cases did not happen in the Demo repository. |
| **REQUIRES PRODUCT CHECK** | **S04–06** for a current Live/Hybrid repository-investigation path; **S08** for the exact ChatGPT dropdown position, selected account and Windows entry path; **S53–55** for the selected Skills surface, invocation, and account; **S59–62** if current Subagent/Memory product behavior is explained; **S65** for target configuration, feature availability, trust, and permissions. Concrete Windows/shell/IDE instructions on **S16, S21, S35, S41–43, S66, S85, S91** also require a target-environment check. |
| **REQUIRES RESEARCH CHECK** | None for the currently bounded Slides39–40 claims. The final slide must retain its citations. Any stronger claim about general degradation, current Codex behavior, or all models/tasks is outside this freeze and needs new research review. |
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
  Slides 53–55 may state the general documented mechanism with scope; they
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
mark that portion **REQUIRES PRODUCT CHECK**. Otherwise keep Slides 16, 20,
26, 31–33, 54, 73, and 79 at the pattern level.

## 6. Context Research

Approved Slides39–40 messages:

> More Context is not automatically better. Relevance, position, and retrieval
> can matter in specific tasks and models; these studies do not establish a
> current Codex repository-coding limitation.

The Liu et al. study evaluates multi-document question answering and key-value
retrieval; RepoQA evaluates code-search tasks collected from 50 repositories.
Both are bounded research settings, not a test of current Codex in this Demo
repository. Cite the studies on Slide 39 or its source line:
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
| “More context always hurts”; “Codex has Lost in the Middle” | DROP; keep only the study-bounded Slides39–40 messages. |
| Context routing or Progressive Disclosure saves tokens / improves performance | DROP; TRIAL-005A/B observed different document access, not token use or performance. |
| TRIAL-005 proves perfect routing | DROP; broader architecture reads and variable test-file access were observed. |
| A Skill is better than a Prompt, or the Skill caused the algorithm / speedup | DROP; the trials support repeatable workflow use, not Skill superiority or isolated causation. |
| “Harness made `image_statistics` 30.4% faster” | DROP; retain the scoped code-path benchmark in §8. |
| TRIAL-006's resize result was caused by its Prompt, repository Skill, Hook, or MCP | DROP; environment influence limits attribution and no MCP task result is evidenced. |
| Trial reporting improved product or training quality | DROP; no objective before/after quality metric was measured. |
| The constructed stale-Harness failure or candidate failures A–I actually occurred | DROP as observed history; S69–78 remains a labeled conceptual case. |
| Every training account supports every Skill, Subagent, Memory, Hook, MCP, plugin, Cloud, or permission path | DROP; support and account entitlement are distinct. |
| Company policy permits internal/customer data in the selected surface | DROP; no policy evidence or approval is recorded. |
| AI coding tools make developer coding skill obsolete; unqualified SWE-Bench Pro score | DROP; these are not needed for this Story and are unsupported at the required scope. |
| Harness, Loop Engineering, or AI-Native Development is an official / universal taxonomy | DROP; use the approved course definitions in §7 only. |

## 12. Content Freeze Blockers

| Open item | Blocks slide structure/design? | Blocks Speaker Notes / exact product instructions? | Blocks Live Demo? |
|---|---|---|---|
| Target account and surface checks for S04–06, S08, S53–55, S59–62, S65 | No; scoped Trial captures or a product-independent visual remain possible. | Yes for current UI paths, entitlement, invocation steps, and product behavior claims. | Yes until the chosen account and path are rehearsed; captured fallback remains available under the approved plan. |
| Windows-native / WSL / IDE / shell choice for concrete steps | No, if the slides stay at engineering-pattern level. | Yes for exact commands, setup instructions, and environment claims. | Yes for a Windows-specific live path until selected and rehearsed. |
| Slides39–40 citation placement | No; the research wording and sources are frozen. | Final notes / slide text must preserve the citations and study scope. | No. |
| Company policy for internal/customer data or external services | No current blocker; the map does not claim permission. | Yes before adding company-specific data-use instructions. | Yes before using such data/services; current synthetic local Demo is unaffected. |

## 13. Slide IDs Requiring Later Validation

1. **Product surface/account:** S04–06; S08 (documented entry path; exact UI/account unverified); S53–55; S59–62 only if current feature
   behavior is shown; S65.
2. **Windows/environment specifics:** S16, S21, S35, S41–43, S66, S85, S91,
   but only where the slide adds concrete current commands, UI, permissions,
   shell, IDE, or hardware behavior. Pattern-level claims are frozen.
3. **Research citation fidelity:** S39–40 must retain the source citations and
   limits in §6. The research claim itself is frozen within that boundary.
4. **Benchmark source fidelity:** S58 and S81 values must be copied with the
   scope in §8. No new benchmark run is required. S57 stays qualitative unless
   a separately reviewed measurement method and all metadata are added.
5. **Company-policy recheck:** no current Slide ID. Reopen OQ-014 only if a
   later Speaker Note or Demo introduces internal/customer data or an external
   service.

## 14. Freeze Decision

- **82-Slide Map:** FROZEN under DEC-0036 and DEC-0038. The authorized S08 insertion and
  current numbering apply; total time, mode, Story progression and Demo
  selection retain their approved boundaries.
- **Claim set:** PARTIAL. Stable project facts, bounded Trial observations,
  course models, and the limited research claim are frozen. Product/account
  and concrete target-environment claims remain conditional.
- **Overall status:** FROZEN WITH OPEN ITEMS, consistent with DEC-0023.

## 15. Next Recommendation

Do **Product Validation** next for the selected presentation surface, account,
and Windows environment. Current research is sufficient for the bounded
Slides39–40 messages; preserve its citations during later slide production.

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

## DEC-0038 — S11–S13 Prompt and Parallel-Path Scope (2026-10-21)

- S11/S12의 입력창은 교육용 요청 구성이다. 실제 Trial Prompt·현재 제품 UI·내부 추론 화면이 아니다.
- S11의 고민하는 Agent는 AI 생성 교육용 의인화다. 선택이 남아 있음을 설명하며 실제 제품이 판단 불능·정지했다는 주장을 하지 않는다.
- 가파른 토큰·시간 그림은 재탐색·재시도가 길어질 때 비용이 늘 수 있다는 정성 개념도다. 실제 측정·배율·수학적 지수/기하급수 법칙·Prompt 개선의 비용 절감 성과를 주장하지 않는다.
- S12의 세 평행 경로는 같은 요청에서 가능한 해석/행동을 교육용으로 병렬 표시한 것이다. 실제 반복 실행·확률·분산·Subagent 동시 실행을 입증하지 않는다.
- 새 S13의 강조 경로는 목표·보존·범위·확인·완료 정보를 명시한 사람이 원하는 방향이다. 다른 경로의 제거, 결정성, 정확성 또는 Test PASS를 보장하지 않는다. 실행 후 검증은 여전히 필요하다.
- 이후 TRIAL-002의 실제 요청·관찰·검증은 해당 Evidence 구간에 남기며 이 예시로 소급·대체하지 않는다. 새 Trial·Demo·Product State는 없다.
- S12 Case4를 S12 Case2 + S13 Case2로 나눠 Section1B 8분과 ACT1 55분을 보존한다. 전체82장/360분, Mode130/73/83/20/22/32분이다.


## DEC-0043 — Practical request-method addition

S22–S29 introduce documented recommendations with conceptual developer
prompts under CLM-0032–0039 / SRC-0230–0235, checked2026-10-21. This verifies
that the guidance is documented, not that the examples were executed or
measured. Keep delimiters separate from security isolation, example prompts
from complete specifications, chat format requests from API Structured
Outputs, role instructions from proven expertise, and model reviews from
independent correctness evidence. Do not claim CoT magic, guaranteed
compliance, token savings or performance gains. The existing Trial and
current-product/account gates remain unchanged. Current old S22–S82 map to
S30–S90; time extends8 minutes without reducing any original allocation.


## DEC-0044 — S17 process-observation scope

S17 pairs actual translated TRIAL-002 request excerpts with the retained
process-observation summary. Test and product call-path identifiers are
cross-checked against TRIAL-001 and STATE-00 code, not presented as raw
TRIAL-002 log quotations or an Agent file-reading order. First-reproduction
command/output, the plan utterance and raw event timestamps remain
unverified. Keep detailed edit/width results on S18 and check outcomes on
S19. No new run, causal claim or current Desktop validation is added.


## DEC-0046 — S34 guidance-use emphasis

Keep the actual request excerpt separate from the outside annotation that
the request omitted a test command. Verification evidence was requested.
Observed use of the AGENTS.md test instruction is supported; forced
compliance, all-rule adherence and isolated causality are not. Personal
skills also ran, and README-only was named in the Task Prompt.

## DEC-0060 — ACT2 sequence and unchanged claim boundaries

S39 retains CLM-0014/SRC-0201; S40 retains CLM-0015/SRC-0204. Original studies were reopened2026-10-22 to verify task/scope, without stronger claims or current-product evaluation. S46 shows the retained TRIAL-005B answer: Python3.9+stdlib and no third-party runtime dependencies; setuptools/wheel are build tools. S48 summarizes individual observations, not a new combined effectiveness result. S49 is a teaching request; S50 retains actual request/execution recurrence with PARTIAL Prompt-only attribution. S51 explicitly permits procedures in AGENTS.md while separating maintenance responsibility. No routing superiority, token savings, Skill superiority, new Trial, current Desktop guarantee or changed company policy.

## DEC-0061 — S40 task-evidence question and supporting RepoQA

S40 is TEACHING_MODEL / RESEARCH. Its three work questions (specific location,
request/behavior match, relevant surrounding evidence) are a course model,
not the RepoQA metric or an official Codex taxonomy. The shown crop line is
a bounded excerpt from STATE-00-FIXED used in a constructed teaching request;
no new Agent search/run is evidenced. RepoQA remains a secondary study of
description-based function search. Preserve its task,50repos/5languages/
500tasks and main16K code-input conditions in Notes, including model/language
variation and the difference from current end-to-end Agent work. No routing
superiority, token saving, performance gain or current-product guarantee.
S39 covers only its Lost in the Middle task; S41 stays navigation design.
All existing time/Mode, Slide/Beat/State/Trial IDs and effect limits remain.

## DEC-0062 — ACT3 procedure evidence and conditional decisions

93slides/379minutes and every per-slide budget/ID remain. S50 keeps the
retained TRIAL-006/007 request comparison and PARTIAL Prompt-only attribution.
S54 keeps CLI0.154.0 discovery, explicit invocation and trace-body inclusion
as separate observations; there was no separate UI load event. S55 pairs
actual Skill excerpts with existing TRIAL-008 observation summaries, not raw
logs or causal proof. Preserve visible-plan conditions and same-input/check
conditions in Notes. S57 remains qualitative candidate evidence; S58 retains
the separate STATE-04→STATE-04-PERF measurements and Python-allocation/RSS limit.

S59 and S61 are explicitly CONCEPTUAL / TEACHING_MODEL. The former reuses the
existing hypothetical C++ independent investigations; the latter illustrates
knowledge retention across tasks without inventing a rediscovery or Memory
run. S60 and S62 preserve the existing DEC-0018 task/source audits as
OBSERVED_PRODUCT / TEACHING_MODEL, not Subagent/Memory execution evidence.
Same-project next-task reuse can justify considering knowledge retention;
cross-project reuse is not required. No selected Memory candidate is asserted.

S63 is the actual configuration recap, S64 the course operational model,
S65 a bounded external-environment Meta preview, S66 a conceptual C++ transfer
and S67 the transition to a separately marked future conceptual scenario.
No Skill superiority, token saving, independent Harness performance effect,
current Desktop guarantee, observed Subagent benefit or automatic Memory claim.


## DEC-0063 — S51 command use and judgment questions

S51 remains TEACHING_MODEL / CONCEPTUAL. The normalize before/after/completion
diagram applies existing command, specification and measurement information.
It is not a verbatim AGENTS.md excerpt, an exact Trial execution sequence,
new measurement, success result or product trace. Identical test markers
show reuse at different times, not PASS outcomes. AGENTS.md may also contain
the full procedure. No exclusive file split, Skill requirement/superiority,
token saving, present-day Desktop guarantee or independent Harness effect.
S50 actual observations and PARTIAL attribution remain unchanged; S52 keeps
its existing three-role course model. All IDs, timing and claim scope stay.


## DEC-0064 — S52 goal, criteria and method applied together

S52 remains TEACHING_MODEL / CONCEPTUAL. The goal feeds a single normalize
work area bounded by existing image behavior/public specifications, while
the reusable method applies to that same work. The boundary is a teaching
representation of a requirement, not technical enforcement, compliance proof
or a product sandbox. Do not infer that a performance goal authorizes public
specification changes. The method may share a document with other guidance.
No Trial execution trace, new result, product classification, Skill superiority,
token saving or independent Harness causality is added. Preserve S51's timing
explanation and S53's later shared-home decision. All IDs/time/Mode stay.


## DEC-0065 — S53 shared Skill and task-specific requests

S53 remains a TEACHING_MODEL with REQUIRES PRODUCT CHECK. Two task goals are
educational request summaries; the one-Skill/two-task links show intended
reuse, not execution traces or proof that both earlier trials invoked that
Skill. DEC-0017 selects a repository-owned procedure unit. One-place
maintenance is its design rationale, not measured superiority, compliance,
token or performance improvement. Keep Task scope/preservation conditions
and project criteria; AGENTS.md may also contain procedures. Actual CLI
discovery/invocation/body evidence follows on S54, without current Desktop
guarantees. All timing/IDs/Mode and existing causality limits remain.


## DEC-0066 — S53 connector polish and S54 CLI evidence

S53 retains intended reuse and one-place maintenance, with consistent native
line connectors. S54 retains OBSERVED_PRODUCT / FROZEN WITH SCOPE and the
current-product check. Three excerpts/record reconstructions distinguish
selector discovery, explicit task invocation and the successful run's trace.
The selector showed a name and truncated description, not a file path. The
trace contained the same name, workspace Skill path and full instruction
body. The displayed path is repository-relative and the request is an excerpt
with a Korean summary. No invented load event or actual-UI screenshot is shown.
Full body inclusion does not establish compliance, isolated causality, implicit
invocation, superiority, token savings or present-day Desktop behavior.
S55 retains instruction/action correspondence; IDs, times and Mode stay fixed.


## DEC-0067 — S55 instruction and action correspondence

S55 retains OBSERVED_PRODUCT / FROZEN WITH SCOPE / REQUIRES PRODUCT CHECK.
Separate S54's full-body inclusion from three instruction/action pairs in
TRIAL-008. Translate the Skill instructions and summarize observed output,
a pre-edit progress message and the final source diff. Preserve the visible
plan condition and allowed change scope. Three benchmark invocations and
1/1 focused,11/11 full tests are historical observations, not fixed Skill
requirements. The screen reconstructs records, not a terminal capture.
Do not infer full instruction compliance, isolated Skill causality, Prompt
superiority, token savings, Skill-driven speedup or current Desktop behavior.
Keep candidate selection and product-state performance evidence in S57/S58.


## DEC-0068 — S56 reusable procedure and task-specific judgment

Retain OBSERVED_PRODUCT / TEACHING_MODEL and the existing S56 Claim Status.
The left diagram translates selected instructions from the actual STATE-04
Skill: baseline before editing, same-condition verification/comparison and
reporting evidence, trade-offs and limitations. The right side is a teaching
model of task evidence, questions and permitted adoption/no-change decisions.
No-change is allowed by Procedure5, not the observed TRIAL-008 outcome.
Do not treat the diagram as the whole procedure, an execution trace, two
observed branches or proof that this Skill supplies better answers. Preserve
scope, correctness and evidence requirements. Do not add current-product,
causality, token-saving or performance-effect claims. S57 retains actual
candidate choice and S58 retains product-state comparison.


## DEC-0069 — S57 concise candidate selection

S57 retains OBSERVED_PRODUCT / FROZEN WITH SCOPE. The visible two candidates
both preserved the six-field result and lowered traced Python peak allocation
relative to the existing flattening implementation. Runtime direction compares
the two candidates. Reject the slower manual Python loop and highlight the
selected row-level built-in reduction. Keep exact candidate figures off-screen
and preserve the original source records. Equal-length connectors indicate
comparison-to-decision relationships, not numeric magnitude or a new Trial.
Do not generalize Python allocation to RSS or attribute results to Skill alone.
S58 retains the separate formal STATE-04/STATE-04-PERF measurements.
