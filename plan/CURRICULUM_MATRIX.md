# Curriculum Matrix

> Status: STEP 04 COMPLETE WITH OPEN QUESTIONS through §130. DEC-0007
> remains PROPOSED pending user review. This matrix maps curriculum logic,
> evidence, and instructional roles, not individual Slides.

Related Invariants:
INV-OBJECTIVE-001, INV-AUDIENCE-001, INV-DELIVERY-001,
INV-NARRATIVE-001–002, INV-MATURITY-001–011, INV-LOOP-001,
INV-LEARNING-001–004, INV-VERIFY-001, INV-DIFFICULTY-001–003,
INV-RESPONSIBILITY-001, INV-DEMO-001–004.

Time format: total minutes (Lecture / Demo / Case / Reflection / Transition).
The reflection portion is a private pause, not an exercise or required
response. Demo labels are curriculum roles and candidates, not commitments
that a product surface or scenario is available.

| Act | Section | Time | Time Risk | Starting Problem | Concept | Audience Layer | Demo/Case | Core Insight | Evidence | Transition | Section Role |
|---|---|---:|---|---|---|---|---|---|---|
| ACT 0 | Familiar error and self-location | 10 (4/0/3/2/1) | LOW | Code or an error is copied to a chatbot and the answer is carried back manually. | Recognize current usage without ranking learners. | ALL | VISUAL CASE | Developers differ in how much of the problem-solving process they delegate. | CLM-0001; CLM-0002; INV-AUDIENCE-001 | “내가 AI에게 지금 어디까지 맡기고 있나?” | INTRODUCE, REFLECT |
| ACT 0 | Range of delegation and simple roadmap | 15 (6/0/4/2/3) | LOW | Chatbot use is familiar, but task delegation and system design are not yet visible. | Non-evaluative AI-use range; Chatbot → Prompt → Context → Harness → Loop. | ALL | VISUAL CASE | The roadmap previews a destination; reveal its internal parts only as problems arise. | CLM-0001; CLM-0002 | “AI에게 질문하는 것과 개발 Task를 맡기는 것은 무엇이 다른가?” | INTRODUCE, REFLECT |
| ACT 0 | ChatGPT → Codex repository exploration | 15 (3/8/2/1/1) | HIGH | The developer manually finds files and assembles repository context. | Agent-led repository search, reading, and path tracing. | ALL; ADVANCED insight on context-collection cost | ANCHOR DEMO (candidate) | The shift is who searches for context, not a claim that one product is a generally better coder. | Product/interface research; OQ-001, OQ-003, OQ-005 | “같은 AI를 쓰는데 왜 사람마다 결과가 다를까?” | DEMONSTRATE, TRANSITION |
| ACT 1 | Same model, underspecified request | 15 (5/0/7/2/1) | LOW | Vague requests leave scope, constraints, process, or completion evidence implicit. | Intent mismatch as a task-specification problem. | ALL | VISUAL CASE | Different results can reflect missing task information; no magic prompt is implied. | Prompt Engineering research; INV-MATURITY-001 | “무엇을 명확히 하면 결과가 달라질까?” | INTRODUCE, EXPLAIN |
| ACT 1 | Practical Prompt Checklist and Before/After | 20 (7/5/4/2/2) | MEDIUM | An agent does not know the goal, relevant context, forbidden changes, desired process, or completion condition. | Course checklist: Goal, Context, Constraints, Process, Verification. | ALL; PRACTICAL use | SUPPORTING DEMO | Learn which task information changes, not a prompt sentence to memorize. | Prompt Engineering; CLM-0029; course teaching checklist | “먼저 조사하고 계획하게 하면 무엇이 달라질까?” | EXPLAIN, DEMONSTRATE |
| ACT 1 | Investigation-first workflow and Prompt's value | 20 (7/3/6/2/2) | LOW | “Fix it” can skip diagnosis, planning, or verification; useful project facts recur across tasks. | Investigate → Plan → Implement → Verify → Review; task-specific vs project-persistent information. | ALL; ADVANCED insight on task specification and verification | SUPPORTING DEMO | Prompt improvements are valuable on their own; repeated project context is a different scaling problem. | INV-MATURITY-001, INV-MATURITY-011; Prompt Engineering research | “왜 매번 같은 Project 설명을 반복할까?” | EXPLAIN, EVOLVE, TRANSITION |
| ACT 2 | Repeated project context and AGENTS.md's first success | 20 (5/8/4/1/2) | MEDIUM | Build, test, style, and project constraints are repeated in each task. | Reuse core project instructions through AGENTS.md. | ALL | ANCHOR DEMO (candidate) | Move repeated project explanation from each Prompt into reusable project context. | CLM-0005; AGENTS.md research; OQ-001, OQ-003, OQ-005 | “AGENTS.md가 도움이 된다면 여기에 다 넣으면 될까?” | DEMONSTRATE, EXPLAIN |
| ACT 2 | Context definition and scope mental model | 15 (8/0/3/2/2) | LOW | Task information, project rules, workflow guidance, and retained knowledge are mixed. | What / when / where; Task, Project, Role/Workflow, Historical/Durable Context as a course model. | ALL; PRACTICAL / ADVANCED distinctions | VISUAL CASE | Context Engineering selects and places relevant information; this scope model is not an official taxonomy. | Context Engineering; Terminology Registry; CLM-0005, CLM-0008 | “모든 정보를 항상 제공해야 할까?” | EXPLAIN |
| ACT 2 | Context growth, relevance, and research caveat | 20 (8/2/6/2/2) | MEDIUM | A single instruction file accumulates material not needed by every task. | Relevance, staleness, conflict, maintenance, bounded long-context evidence. | ALL; ADVANCED research scope | VISUAL CASE | More context is not the goal; Lost in the Middle is a bounded study, not a universal current-model rule. | CLM-0014, CLM-0015; Lost in the Middle; OQ-006 | “필요한 정보를 필요한 Task에 어떻게 제공할까?” | INTRODUCE, EXPLAIN |
| ACT 2 | Separation, routing, and progressive disclosure | 15 (6/3/2/2/2) | MEDIUM | Splitting documents alone does not ensure the right information is found at the right time. | Core rules plus routes to task-relevant context; progressive disclosure and its trade-offs. | ALL; ADVANCED routing trade-offs | SUPPORTING DEMO | Routing and relevance are the goal; course context pattern is distinct from the Skills product loading behavior. | Context Engineering; Skills research; INV-MATURITY-004 | “Agent가 필요한 Context를 알면 늘 같은 방식으로 일할까?” | EVOLVE, TRANSITION |
| ACT 3 | Context → Harness problem and bottom-up framing | 15 (7/1/5/1/1) | MEDIUM | The agent can know project facts yet follow inconsistent work processes. | Candidate course framing: environment and process for reliable agent work; grow bottom-up. | ALL; ADVANCED system framing | VISUAL CASE | Ask what work system is needed before listing components. | CLM-0016, CLM-0017, CLM-0030 (partial); OQ-011 | “같은 절차를 매번 설명하지 않을 방법은?” | INTRODUCE, EXPLAIN |
| ACT 3 | Repeated workflow and Skill candidate | 20 (5/8/4/1/2) | HIGH | A repeated performance or test task depends on consistent ordering and checks. | Reusable workflow / current product Skill mechanism, where available. | ALL; PRACTICAL workflow design | ANCHOR DEMO (candidate) | The value is a reusable way of working and verification, not a shorter Prompt alone. | CLM-0006; Skills research; OQ-005, OQ-007, OQ-008 | “복합 Task의 여러 조사 역할을 하나의 Agent가 모두 맡아야 할까?” | DEMONSTRATE, EVOLVE |
| ACT 3 | Role/context complexity and Subagents | 15 (5/5/3/1/1) | MEDIUM | Architecture, performance, and test investigation compete for scope in one complex task. | Delegate independent investigation roles; integrate results and account for costs. | ALL; ADVANCED cost analysis | SUPPORTING DEMO | Subagents are an option when role/context separation is worth its coordination cost. | CLM-0007; Subagents research; OQ-005, OQ-008 | “지난번에 알아낸 Project 사실을 왜 다시 조사할까?” | EXPLAIN, EVOLVE |
| ACT 3 | Repeated discovery, Context vs Memory | 15 (7/2/3/1/2) | MEDIUM | Useful facts are rediscovered, but retaining every finding risks stale knowledge. | Current Context vs durable Memory; create, validate, scope, retrieve, refresh, update/retire. | ALL; ADVANCED lifecycle | VISUAL CASE | Reuse valuable knowledge deliberately; product Memory, repository facts, and Source of Truth differ. | CLM-0008; Memory research; OQ-005, OQ-008 | “알고 있는 것 외에 실행·확인할 수 있는 것은 무엇인가?” | INTRODUCE, EXPLAIN |
| ACT 3 | Tools, verification, and Harness reveal | 20 (7/4/5/2/2) | HIGH | Context and workflow guidance still need an environment that can observe, act, and check. | Tools, execution environment, workflow verification; reveal combined Harness after parts emerge. | ALL; ADVANCED system trade-offs | VISUAL CASE | Good model capability and a well-designed agent work system are complementary. | CLM-0016, CLM-0017, CLM-0029, CLM-0030 (partial); OQ-003, OQ-005, OQ-011 | “Project가 바뀌면 이 Harness도 계속 맞을까?” | DEMONSTRATE, VALIDATE, EVOLVE |
| ACT 4 | Project change and stale Harness | 20 (6/5/6/1/2) | HIGH | Project commands, paths, architecture, or constraints change while durable instructions remain old. | Harness Technical Debt as a bounded engineering analogy; repeated correction as a signal. | ALL; ADVANCED maintenance perspective | VISUAL CASE | A working Harness requires maintenance; illustrative failure is not claimed as observed history. | INV-MATURITY-010; Loop Engineering; OQ-001, OQ-007, OQ-009, OQ-011 | “반복 Failure를 현재 Task에서만 고칠 것인가?” | INTRODUCE |
| ACT 4 | Loop model, Product Loop, and automation levels | 15 (8/2/2/1/2) | HIGH | The same correction is given again, but no system change reaches the next task. | Feedback-driven improvement; distinguish Product Loop from Harness Improvement Loop and manual/assisted/automated levels. | ALL; ADVANCED evaluation limits | SUPPORTING DEMO | Loop Engineering is about feedback reaching system improvement, not automation or repetition alone. | CLM-0021; Loop Engineering; OQ-011 | “원인을 찾아 Harness를 바꿨다면 개선을 어떻게 확인할까?” | EXPLAIN, EVOLVE |
| ACT 4 | Cause analysis, change, evaluation, regression | 25 (5/11/5/2/2) | HIGH | A correction may target the wrong layer or fix one task while harming another. | Failure → cause → hypothesis → change → rerun → evaluation → regression → keep/revert. | ALL; ADVANCED evaluation and overfitting | ANCHOR DEMO (candidate) | A Harness change needs evidence; one pass does not establish complete quality. | CLM-0020, CLM-0021, CLM-0029; Verification research; OQ-001, OQ-007, OQ-009 | “개선 대상이 Instruction 하나가 아니라면 무엇을 바꿀까?” | DEMONSTRATE, VALIDATE |
| ACT 4 | Improve Context, Memory, Skills, and delegation | 20 (8/4/4/2/2) | MEDIUM | Repeated failures have different causes; adding rules to one file can recreate context bloat. | Improve routing, stale knowledge, workflow quality, role selection; Minimum Effective Harness heuristic. | ALL; ADVANCED system design | SUPPORTING DEMO | Use the smallest change that addresses observed friction; more components do not mean greater maturity. | CLM-0006–0008, CLM-0022; Loop Engineering; OQ-008, OQ-009, OQ-011 | “지금 자신의 위치에서 다음으로 바꿀 수 있는 것은 무엇인가?” | EVOLVE, REFLECT, TRANSITION |
| ACT 5 | Beginning/ending comparison and developer responsibility | 15 (7/2/3/2/1) | MEDIUM | Seeing greater agent capability can imply that full automation is required or developers become unnecessary. | Revisit the journey; retain developer goals, judgment, verification, risk review, and accountability. | ALL; ADVANCED team-level implications | VISUAL CASE | AI participation can expand without removing engineering responsibility. | CLM-0023, CLM-0024; INV-RESPONSIBILITY-001 | “각자의 업무에서 현실적인 다음 한 단계는 무엇인가?” | EXPLAIN, REFLECT |
| ACT 5 | Audience next steps, seven takeaways, final reflection | 15 (6/0/2/4/3) | LOW | A single identical assignment would not fit the range of learner maturity. | Stage-specific next steps and seven takeaways tied back to the shared Story. | ALL | VISUAL CASE | Learners may take the next step from their current position; they need not install the full system. | CLM-0001, CLM-0002, CLM-0023; INV-DIFFICULTY-001 | End with private reflection; no presentation or hands-on work is required. | REFLECT, TRANSITION |

## Reading the Matrix

- Audience Layer identifies who should find explicit value; each section remains
  part of one accessible Story. ADVANCED material is an optional depth layer,
  not a prerequisite.
- ANCHOR DEMO, SUPPORTING DEMO, and VISUAL CASE are planned roles. They do not
  assert target feature access, an observed failure, or a selected repository.
- Evidence names a Claim ID or research topic. See
  [Claim Registry](../references/CLAIMS.md), product and engineering topic
  pages, and unresolved questions in [DECISIONS.md](DECISIONS.md).
- The time split is a curriculum estimate. Later Demo Architecture may refine
  the section's mode mix while preserving the 360-minute total and Story.

## Section Role Legend

Each section is tagged with one or more of these instructional roles:

| Role | Meaning |
|---|---|
| INTRODUCE | Establish a new Problem or Mental Model. |
| DEMONSTRATE | Show an example, case, or agent behavior. |
| EXPLAIN | Make the cause or concept understandable. |
| EVOLVE | Develop the work system toward the next engineering stage. |
| VALIDATE | Check a result, Test, Evaluation, or evidence boundary. |
| REFLECT | Consolidate an Insight or help learners locate their practice. |
| TRANSITION | Connect the completed thought to the next Problem or course close. |

Role labels describe the section's Curriculum function, not a required Slide or
teaching format. All 21 sections have at least one explicit role.
