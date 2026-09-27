# Detailed Story Architecture

> Status: STEP 05 COMPLETE WITH OPEN QUESTIONS through §120; this Story is the
> baseline for STEP 06. Demo success, repository fit, current product
> availability, and observed outcomes remain unverified. Proposed timing and
> Demo candidates retain their existing Decision status.

## Purpose

This document bridges the six-hour Curriculum and the later Slide Map. It turns
the approved learning movement into one continuous Engineering Story and
preserves each Act's cause and effect so the Slide Map can group events without
inventing a new narrative. It is not a list of Slide titles, final slide
wording, Demo implementation, Speaker Notes, or a PPT.

The learner follows one ordinary software developer and one evolving software
project. At each stage, a reasonable approach first helps. Repetition, greater
scope, or a project change then reveals a new friction. The next Engineering
step answers that friction without making the previous step look foolish or
useless.

## Story Principle

The learner sees how a developer's way of working can grow from asking a
chatbot a question to designing and improving a system for agent-assisted
development:

`Chatbot → Prompt → Context → Harness → Loop → AI-Native Development`

This is a problem-driven maturity story, not a feature sequence. The terms
appear only after the learner can see the problem they help address. Prompt,
Context, Harness, and Loop are expanding layers; later layers do not make
earlier ones obsolete.

The governing movement is:

`Current State → Attempt → Success → Scale → Friction → Question → Cause →
Engineering Response → Better State → New Problem`

## Protagonist

### Developer

The protagonist is a capable developer who has used ChatGPT for errors,
explanations, or small code questions, but has not systematically designed an
agent work system. Their choices make sense given the work in front of them.
The Story does not frame the developer as incompetent or careless.

## Project Evolution

The same illustrative project grows in demands over time:

`Small and understandable → recurring tasks → reusable project rules →
multiple workflows → distinct investigation roles → project knowledge worth
retaining and maintaining → project change`

The demo repository, domain, language, actual events, and exact checks remain
open under the existing OQs. Examples in this Story are scenarios to validate
or label as illustrative; they are not claims about an already selected or
observed project.

### Coupled Evolution

Project complexity creates the reason for the developer's next shift. The
developer gradually delegates context discovery, specifies tasks, manages
reusable context, shapes work methods, and uses evidence to improve the system.
The developer retains goal-setting, judgment, risk assessment, verification,
review, and accountability throughout.

## Six-Act Event Architecture

The Act durations below are the current Curriculum proposal. `DEC-0007` is
still `PROPOSED`; these values are not treated here as user-approved timing.

| Act | Story event | Initial approach and first value | Friction that earns the next step | Exit question |
|---|---|---|---|---|
| ACT 0 — 40 min | A familiar chatbot workflow meets a repository-wide question. The agent investigates available repository context and produces a useful bounded explanation. | Copying a small error or code fragment to ChatGPT is fast and useful. Repository exploration can move part of context gathering to an agent, subject to the selected surface and permissions. | The agent can inspect code but does not infer every unstated goal, boundary, or completion condition. | “같은 AI를 사용하는데 왜 사람마다 결과가 다를까?” |
| ACT 1 — 55 min | Repository access reveals a task-intent gap. The developer specifies a filter-performance task, investigates before editing, and sees a bounded prompt success. | Task-specific Goal, Context, Constraints, Process, and Verification make the requested work reviewable; investigation first is a reliable default, not a requirement for long planning on every small task. | Good task prompts still repeat build, test, API, and style information across Bug Fix, Performance, and Refactoring tasks. | “왜 나는 Project에 대해 똑같은 설명을 계속 하고 있지?” |
| ACT 2 — 70 min | Repeated Prompt context motivates `AGENTS.md`. Show its first bounded success before it grows; separate information by scope, treat `AGENTS.md` as a course-level Router pattern, and disclose only task-relevant context. | Reusable project rules and shorter task Prompts are a useful first improvement. Context Engineering then becomes information architecture: what stays core, where details live, and how a task can find them. | A relevant Context design still answers “what does the agent need to know?” It does not define “how should this work be performed?” | “Agent가 Project를 잘 이해하면 항상 같은 방식으로 잘 일할까?” |
| ACT 3 — 85 min | In the same Performance task, show varying procedures despite organized Context. Distinguish project knowledge from Workflow, reveal repeated procedure Prompts, introduce a reusable Workflow or supported Skill, and show its bounded success. Expand complexity into role separation, conditional Subagents, Context Isolation, bounded success, and overuse costs. Repeated discovery motivates Memory; show what is worth retaining, cross-task reuse, and the Create → Validate → Scope → Retrieve → Refresh → Update/Retire lifecycle. Continue through Tools and structural Verification, then let the Harness emerge, reveal a conceptual architecture, and show its bounded success before Project change. | Workflow reuse, role separation, Memory, Tools, and Verification address specific frictions; product mechanisms remain conditional and are not a mandatory checklist. | A useful Harness may become stale as the Project changes over time. | “잘 만든 Harness가 Project 변화 뒤에도 계속 맞을까?” |
| ACT 4 — 80 min | After Harness success, time passes and the Project changes. A stale workflow causes one task failure, which the developer corrects locally; later tasks repeat the failure. Treat recurrence as a signal: observe execution, form a cause hypothesis, change the right layer, rerun, evaluate representative tasks, and check regression. Reveal and distinguish the Product Loop and Harness Improvement Loop, then compare manual, assisted, and automated feedback. Revisit Memory, Skills, and Subagents as maintainable Harness parts; derive Minimum Effective Harness from recurring friction. A verified history of this training repository may serve as an optional supporting example. | A local correction can solve one task, while recurring failure may require a change to the system shaping later tasks. Automation is one possible implementation level, not the definition or goal of a Loop. | A broad change can introduce rule bloat or harm another task; one passing check does not prove full quality. | “지금 자신의 업무에서 다음으로 바꿀 수 있는 것은 무엇인가?” |
| ACT 5 — 30 min | Recap the evolution and name the course's AI-Native Development teaching model. Make developer responsibility, Verification, the default task workflow, and the four Engineering layers visible as compact payoffs. Offer beginner and advanced perspectives within one Story, the seven Curriculum takeaways, and a private closing reflection. | The maturity path offers options without requiring every learner to adopt every mechanism. | A single adoption prescription would not fit the full range of learner starting points. | “현재 AI에게 어디까지 맡기고 있으며, 그 다음 단계에서 가장 먼저 바꿀 수 있는 것은 무엇인가?” |

The added ACT 4 Beats elaborate the existing Curriculum sections for the Loop,
automation levels, cause analysis, and improving Context, Memory, Skills, and
delegation. They do not add minutes to the 80-minute Act. The repository meta
example is optional and should be omitted if it does not fit the existing
allocation or lacks evidence. ACT 5's responsibility, Verification, task
workflow, layer diagnosis, audience perspectives, takeaways, and reflection
are concise retrospective payoffs inside its existing two 15-minute sections;
they do not add minutes or new product demonstrations. If compression is
needed, remove duplicate examples before removing a protected takeaway or
responsibility boundary.

## Act 0 — Chatbot to Codex

**Starting State:** The developer asks ChatGPT about a code snippet or error
and manually chooses what context to paste.

**Key Events:** A project question crosses files. The developer would
otherwise search and carry context by hand. In a supported, permissioned
environment, Codex investigates a bounded repository question and explains
the relevant path.

**Success:** The developer sees the value of asking an agent to find available
repository context. The chatbot remains a useful tool for local questions.

**New Friction:** Repository access does not communicate the developer's
goal, scope, constraints, process, or completion evidence.

**Turning Point:** The first repository investigation succeeds; the remaining
variation is in what work the developer asked the agent to do.

**Insight:** The developer can bring AI to the repository, while remaining
responsible for task intent and judgment.

## Act 1 — Prompt Engineering

**Starting State:** The agent can inspect the repository, but a broad request
such as “optimize this code” leaves important intent unstated.

**Key Events:** The developer specifies Goal, relevant Context, Constraints,
Process, and Verification; requests investigation before changes; and sees a
bounded task succeed. Similar tasks then repeat project instructions.

**Success:** A well-scoped Prompt makes the work and completion conditions
more reviewable. Prompt Engineering has practical value at this stage.

**New Friction:** Build, Test, API, and Style information is repeated in
Bug Fix, Performance, and Refactoring Prompts.

**Turning Point:** Prompt success creates enough repeated work to ask which
information belongs beyond one task's instruction.

**Insight:** Prompt Engineering remains important; repeated project context
creates a separate organization problem.

## Act 2 — Context Engineering

**Starting State:** Reusable project facts are repeated across task Prompts.

**Key Events:** A concise `AGENTS.md` first reduces repetition. As project
rules and task types grow, information accumulates; a small task receives
irrelevant guidance. The developer separates, scopes, routes, and discloses
relevant Context while keeping research claims bounded.

**Success:** Project guidance can be reused, and task-relevant information can
be easier to find without repeating everything in every Prompt.

**New Friction:** The Agent may understand project information while still
performing the same kind of work inconsistently.

**Turning Point:** Better information organization does not define a repeatable
work method.

**Insight:** Context Engineering concerns what the Agent needs to know and
when it can find it, not maximizing context volume.

## Act 3 — Harness Engineering

**Starting State:** Context is better organized, but recurring Performance
tasks still vary in baseline, implementation, tests, and comparison.

**Key Events:** A repeated procedure motivates a reusable workflow or
supported Skill. Greater task complexity creates role and context-isolation
questions; Subagents remain conditional and their coordination costs visible.
Repeated discovery motivates retained knowledge and its lifecycle. Tools and
Verification are connected to a workflow. The previously motivated parts
form a conceptual Harness, which supports a bounded task.

**Success:** The learner sees a designed work system combine only the
information, methods, roles, tools, environment, and checks needed by its
tasks.

**New Friction:** Time and project change can make an artifact that once helped
the Agent stale.

**Turning Point:** The whole work environment becomes visible only after its
parts have answered distinct problems.

**Insight:** Reliable agent work asks not only what the Agent knows, but how
the work is structured and checked.

## Act 4 — Loop Engineering

**Starting State:** A Harness supports work under the Project assumptions it
was designed for.

**Key Events:** A project change makes a workflow stale; one task is corrected
locally, and a later task may repeat the failure. The developer observes
before diagnosing, forms a cause hypothesis, changes the supported layer,
reruns, evaluates representative work, and checks regression. Only after
these parts appear does the course reveal the full Loop. The Story distinguishes
Product and Harness loops; compares manual, assisted, and automated feedback;
revisits Memory, Skills, and delegation maintenance; and introduces Minimum
Effective Harness as a project heuristic. A training-repository meta example
is optional and gated by verifiable history.

**Success:** A justified, evaluated change can improve the system for the
tested scope and inform a later task.

**New Friction:** One passing check is bounded evidence; changes can overfit,
add irrelevant rules, or affect another valid task.

**Turning Point:** Repeated friction is investigated as a possible signal to
improve the system shaping future work, not proof that a Harness change is
always needed.

**Insight:** Loop Engineering is evidence-informed system improvement, not
automatic repetition or guaranteed self-improvement.

## Act 5 — AI-Native Development

**Starting State:** The learner has seen the entire progression and may mistake
it for a mandate to automate everything or build every Harness component.

**Key Events:** The course recaps the path, developer-owned judgment and
responsibility, Verification and the task workflow, and Prompt / Context /
Harness / Loop as distinct problem lenses. A missed-Test example applies the
four lenses. Beginner and advanced perspectives offer different next moves
within the same Story. The course recalls Minimum Effective Harness as a
heuristic, then revisits the seven Curriculum takeaways and private reflection.

**Success:** Learners leave with one shared mental model and a next step that
fits their current practice, without a required response or feature checklist.

**New Friction:** None is introduced; this is a deliberate close, not a new
maturity stage.

**Turning Point:** The developer's work expands from directly gathering and
applying answers toward defining goals, designing agent work conditions, and
judging evidence, while retaining responsibility.

**Insight:** AI-Native Development is this course's operational teaching
model: developers design agent work environments and feedback systems while
retaining goal, judgment, verification, and responsibility. It is not a
universal industry maturity standard.

## Full Evolution

| Stage | System change | Friction carried into the next stage |
|---|---|---|
| Chatbot | Developer carries selected code and errors to ChatGPT. | Project context spans files and must be gathered. |
| Codex repository exploration | Agent investigates available repository context. | Access does not specify intent or success conditions. |
| Prompt | Task intent, constraints, process, and verification are stated. | Project facts repeat across tasks. |
| Context | Project information is reused, scoped, and routed. | Knowing the project does not standardize how work is performed. |
| Harness | Workflow, optional roles, knowledge, tools, environment, and checks are designed around needs. | Project changes can make the system stale. |
| Loop | Observed outcomes inform a cause analysis and an evaluated system change. | The developer still needs to choose goals, evidence, risks, and trade-offs. |
| AI-Native Development | Developer designs agent work conditions and feedback while retaining responsibility. | Deliberate course close; no further maturity stage is prescribed. |

The final synthesis can also be shown as `Question → Task → Context → System
→ Feedback Loop`. This is a teaching model that ties the whole Story together,
not a claim about a universal development process.

## Core Recurring Themes

| Theme | How it recurs through the Story |
|---|---|
| Verification | Completion expectations start in the Prompt, become project-aware through Context, enter the Harness workflow, and extend to evaluating Harness changes. `Generated ≠ Done` remains the boundary. |
| Context | The developer moves from manually supplying snippets to making relevant information available at the right scope and time, while keeping durable knowledge distinct from current Context. |
| Developer responsibility | Delegation can expand; the developer continues to own goals, requirement judgments, trade-offs, risk, verification criteria, result interpretation, final review, and accountability. |
| Failure | A plausible failure is a signal to observe and investigate, not proof of its cause or an excuse to ridicule the Agent. |
| Evaluation | Reruns and representative checks make bounded claims about outcomes; regression checks and limits remain visible. |

## Causal Story Pattern

Each major shift follows this sequence:

`Current State → Trigger → Reasonable Attempt → Initial Success → Scale or
Repetition → Friction or Failure → Question → Cause → Engineering Response →
Better State → New Problem`

The sequence does not require a failure at every beat. The first repository
exploration success is deliberately given room before the next limitation is
introduced. A candidate failure remains labeled as illustrative until it is
observed or reproduced; see `CLM-0027` and `INV-DEMO-003`.

## Time and Continuity

Use elapsed-work signals such as “처음에는”, “비슷한 작업을 반복하면서”,
“프로젝트 규칙이 늘어나면서”, and “프로젝트가 바뀐 뒤” to make scale and
time legible. Exact DAY / WEEK / MONTH labels are optional and should not imply
that a specific real project followed this chronology. Never make the entire
system appear in one task or one afternoon.

Keep one project and its conceptual history across the Acts. If a future Demo
uses a different artifact for a subcase, explain its relationship to the shared
project and keep it in a supporting role.

## Product and Evidence Boundaries

- Product behaviors, interface names, account access, permissions, and
  availability remain conditional on current official documentation and the
  eventual training environment (`OQ-003`, `OQ-005`).
- Repository exploration is bounded by the selected surface, workspace, and
  permissions; do not imply that ChatGPT's GitHub connector can edit or execute
  repository work (`CLM-0004`, `CLM-0009`).
- `AGENTS.md`, Skills, Subagents, and Memory are distinct mechanisms. None is
  a universal prerequisite, and Memory is not this project's Source of Truth
  (`CLM-0003`, `CLM-0005`–`CLM-0008`).
- `Lost in the Middle` supports a bounded context-placement caution for the
  studied tasks and models. It does not establish that current coding agents
  fail on middle context or that every long instruction file fails
  (`CLM-0014`, `CLM-0015`).
- Harness and AI-Native Development remain course models; Harness wording is
  still subject to `OQ-011` (`CLM-0030`, `CLM-0023`).
- Loop means feedback-driven system improvement, not automation alone. Any
  evaluation claim must state what the evidence checked and its limits
  (`CLM-0020`, `CLM-0021`, `CLM-0029`).
- No failure, history, or before/after improvement may be presented as an
  observed project event without evidence. Use a labeled illustrative or
  controlled case when appropriate.

## Ending State

At the end of the six hours, every learner should leave with the shared
mental model `Question → Task → Context → System → Feedback Loop` and the
understanding that AI use can develop into a designed engineering system.
Learners should distinguish an Agent's completion claim from verification
evidence and understand that developers retain engineering judgment and
responsibility.

The next step depends on the learner's current practice. A chatbot-centered
learner can begin with repository exploration, investigation before changes,
and a request for relevant verification. An experienced Agent user can inspect
Context freshness, Skill fit, delegation overhead, Memory reliability,
Verification, repeated failure, and system evaluation. Neither path requires
everyone to adopt every mechanism, and the private reflection requires no
answer or presentation.

## Quality Audits

### Full Story Read-through

The three Story documents were reviewed as one continuous instructor-led
experience, not as isolated outlines.

| Story movement | Beats | Read-through result |
|---|---|---|
| Familiar ChatGPT use → repository-context cost → bounded Codex exploration → task-intent gap → Prompt success | BEAT-001–007 | PASS: the familiar approach is useful first; repository access then exposes a separate intent problem. |
| Prompt success → repeated Project facts → useful `AGENTS.md` → accumulation and relevance → separation and routing success | BEAT-007–017 | PASS: the first reusable-context success precedes its scaling problem and a more relevant design. |
| Organized Context → inconsistent process → reusable workflow / Skill → role complexity / Subagents → repeated discovery / Memory → Tools and Verification → Harness success | BEAT-018–037 | PASS: each mechanism answers a distinct friction, with product availability and outcome evidence conditional. |
| Harness success → time and Project change → stale artifact → local recovery and possible recurrence → observation, cause, change, evaluation, regression → Loop → Minimum Effective Harness | BEAT-037–057 | PASS WITH DEMO GATE: the cause and recurrence must be observed or clearly labeled as controlled; the system change is evaluated before a benefit is claimed. |
| Loop synthesis → developer responsibility → shared layer map and audience next steps → seven takeaways → private reflection | BEAT-060–071 | PASS: the close recalls one shared Story and does not require feature adoption or public participation. |

**Read-through result: PASS WITH EVIDENCE GATES.** No concept needs to be
inserted ahead of its motivating friction. Repository selection, concrete
outcomes, and any observed recurrence remain unresolved; the optional training
repository example in BEAT-058–059 remains subordinate and evidence-gated.

### Why Now Audit

Each mechanism appears after its distinct problem is visible.

| Concept | Why it appears at this point | Beat path | Result |
|---|---|---|---|
| Prompt Engineering | Codex can inspect repository context but cannot infer the developer's unstated task intent, constraints, or completion evidence. | BEAT-003–007 | PASS |
| `AGENTS.md` | A clear Prompt works, then repeated Project facts create a reuse problem across tasks. | BEAT-007–010 | PASS |
| Context separation and routing | Learners first see a useful `AGENTS.md`, its growth, and a task-relevance problem; separation answers that problem. | BEAT-010–017 | PASS |
| Workflow / Skill | Relevant information is available, yet the same kind of work still varies and its procedure is repeated. | BEAT-017–022 | PASS |
| Role separation / Subagents | Reusable workflow has helped a bounded task; a broader task now combines distinct investigations and Context. | BEAT-022–027 | PASS |
| Memory / durable knowledge | Cross-task work reveals valuable facts being rediscovered; retaining all facts is explicitly not the answer. | BEAT-027–032 | PASS |
| Harness architecture | Context, methods, roles, knowledge, tools, execution, and checks have already answered separate needs. | BEAT-033–037 | PASS |
| Loop Engineering | A useful Harness has succeeded; time and Project change make an artifact stale, and possible recurrence earns system-level diagnosis. | BEAT-037–051 | PASS WITH DEMO GATE |
| Minimum Effective Harness | The Story has shown both useful mechanisms and the costs of overbuilding; this heuristic summarizes fit to recurring friction. | BEAT-027, BEAT-053–057 | PASS |
| AI-Native Development | The learner has seen the complete progression and can now interpret it as a course model while keeping developer responsibility. | BEAT-060–071 | PASS |

### Could We Stop Here? Audit

Every learner may stop at a useful stage when it fits the work they actually
do. Later stages address wider or recurring problem scopes; they are not
automatically better or a required implementation ladder.

| Useful stopping point | When it can be enough | Evidence in the Story |
|---|---|---|
| Prompt Engineering | A small or one-off task may need only a clear request, suitable investigation, and task-appropriate verification. | BEAT-005–007 |
| Reusable Project Context | Repeated Project facts may be the main friction; concise, relevant guidance can be a substantial improvement. | BEAT-009–017 |
| Reusable workflow / basic Harness | A team with a recurring procedure can benefit from a repeatable workflow and checks without adding every other mechanism. | BEAT-020–022, BEAT-033–037 |
| Role separation or Memory | Use only when task complexity or repeated rediscovery makes its benefit worth its coordination and maintenance cost. | BEAT-023–032 |
| Feedback Loop | It matters most when agent-assisted work and its Harness are operated over time and recurring evidence can guide maintenance. | BEAT-038–057 |

**Result: PASS.** The Story presents higher stages as a broader scope of
problems that may need attention, not as a universal ranking of learners or
an instruction to install every component.

### Minimum Effective Harness Placement Audit

The Story seeds task-sized choices before it names the heuristic, then recalls
them in the close. `Minimum Effective Harness` is a course Engineering
heuristic, not an official product configuration or fixed component list.

| Early cue | How the Story limits scope | Beat |
|---|---|---|
| Prompt | Investigation and planning are useful defaults, not a long ritual for every small task. | BEAT-006–007 |
| Context | Relevance and timing matter; not every Project needs elaborate routing or all available information. | BEAT-012–017 |
| Subagents | One Agent remains suitable for a small, bounded task; role separation earns its cost only when useful. | BEAT-025–027 |
| Memory | Retain only validated, scoped facts worth reusing; maintain or retire what becomes stale. | BEAT-028–032 |
| Loop | Choose manual, assisted, or automated feedback to match the risk; not every failure needs automation. | BEAT-052–057 |
| Synthesis | Recall the smallest system that addresses real recurring friction, then let learners choose a fitting next step. | BEAT-057, BEAT-068–071 |

**Result: PASS.** The heuristic counters overengineering across the Story and
is recalled without changing the seven approved Curriculum takeaways or
adding time to ACT 5.

### Story Rhythm Audit

The events mix useful progress with questions, discovery, and payoff rather
than repeating a problem followed by a lecture.

| Rhythm | Story examples | Function |
|---|---|---|
| SUCCESS | BEAT-001, 003, 007, 010, 022, 037 | Establishes that the current approach and its first improvement have real value. |
| SURPRISE | BEAT-011–012, 038–040, 050 | Shows how scope, time, or an attempted correction can expose an unanticipated friction. |
| QUESTION | BEAT-018, 023–024, 040, 066 | Gives learners a reason to ask before naming the next mechanism. |
| DISCOVERY | BEAT-019, 029, 043–045 | Distinguishes process from knowledge, current Context from Memory, and observation from cause. |
| IMPROVEMENT | BEAT-045–049, 054–057 | Shows a scoped system response, rerun, evaluation, regression check, and fit-based maintenance. |
| PAYOFF | BEAT-035–037, 051–053, 060–071 | Reveals the Harness and Loop after their parts, then recalls the full journey. |
| CALLBACK | BEAT-010–012 → 050; BEAT-005/007 → 034/047–049; BEAT-031 → 032/054 | Reuses earlier ideas to make the system feel continuous. |

**Result: PASS.** Final visual pacing and Demo rhythm remain for the later
Slide Map and rehearsal; this audit adds no sections or minutes.

### Callback Audit

| Callback | Earlier idea | Return later | Narrative connection |
|---|---|---|---|
| Verification | Prompt names task-specific completion evidence. BEAT-005–007. | Harness workflow checks and bounded Harness result, then Loop evaluation and regression. BEAT-034–037, BEAT-047–049. | Verification expands with the system; it never becomes synonymous with an Agent's completion claim. |
| Context bloat | `AGENTS.md` first helps and then accumulates information for different tasks. BEAT-009–012. | Failure-specific additions can recreate irrelevant Context during system improvement. BEAT-050–051. | Loop maintenance can repeat the earlier problem if the cause is answered with an indiscriminate rule. |
| Context relevance | Separate and route the information a task needs. BEAT-012–017. | Subagents raise role-specific Context isolation; Loop diagnosis can improve the layer that caused the friction. BEAT-023–027, BEAT-043–046. | Relevance applies at task, role, and system-maintenance scope. |
| Memory lifecycle | A retained fact helps when validated and scoped. BEAT-030–032. | Later Harness maintenance may refresh or retire Memory that no longer matches the Project. BEAT-054. | Reuse creates a freshness and ownership responsibility. |
| Skill lifecycle | A repeated workflow gains a reusable form and bounded success. BEAT-020–022. | A missing or stale step is later diagnosed as workflow quality and repaired only when the case supports it. BEAT-043–047, BEAT-055. | Reuse is useful but must stay aligned with current tasks and evidence. |
| Repository to work environment | The developer brings an agent to available repository context. BEAT-003. | The learner sees the broader design of the Agent's working conditions and retains responsibility. BEAT-035–037, BEAT-060–062. | The Story grows from context access to system design without claiming the Agent owns engineering judgment. |

**Result: PASS.** These callbacks connect the major changes; they are
candidate teaching links, not claims that a specific unselected Demo has
already occurred.

### Demo Candidate Extraction

The candidate index is derived from Story Beat labels and the four proposed
Anchor candidates in `DEC-0008`. It helps plan later work; it does not select
a Demo repository, product surface, or Live / captured format. `DEC-0008`
remains `PROPOSED`.

| Category | Candidate Beats | Use |
|---|---|---|
| ANCHOR CANDIDATE | BEAT-003; BEAT-009–017; BEAT-020–022; BEAT-039–049 | Repository exploration; reusable Project guidance and relevance; workflow with verification; stale artifact through bounded Loop evaluation. These are four grouped candidates, not a requirement for one Demo per Beat. |
| SUPPORTING CANDIDATE | BEAT-004–007; BEAT-023–027; BEAT-028–032; BEAT-054–056; BEAT-058–059 | Prompt comparison, role separation, retained knowledge, maintenance, and an optional history-backed meta example. |
| VISUAL CANDIDATE | BEAT-011–017; BEAT-035–036; BEAT-043–045; BEAT-050–053; BEAT-060–070 | Context growth and routing, system/Loop diagrams, cause-to-layer map, automation choices, and final synthesis. |
| DO NOT DEMO | Beats marked `NONE`, especially BEAT-067–068 and BEAT-071 | Keep diagnostic questions and private audience reflection as explanation or reflection; do not invent a product interaction to fill time. |

Product capability, reproduction, runtime, evidence, and fair fallback remain
open under the existing OQs. No Demo architecture or implementation is
created by this index.

### STEP 05 Interim Gate (§100)

| Gate | Result | Evidence or remaining boundary |
|---|---|---|
| One Developer and one evolving Project | PASS | Architecture and Beats follow the same illustrative project; its identity remains open. |
| Problem precedes each major solution | PASS | TRANS records give the problem and audience question before the reveal. |
| Solutions show an initial success before the next friction | PASS WITH DEMO GATE | Success states are explicit Story outcomes; observed or reproduced results are not claimed until Demo evidence exists. |
| Chatbot → Codex → Prompt → Context → Harness → Loop | PASS | The top-level order remains protected; AI-Native Development is the retrospective close. |
| `AGENTS.md` is useful before its limits appear | PASS | BEAT-009–010 success precedes accumulation and relevance. |
| Separation follows Context success and growth | PASS | BEAT-010–017 carries initial benefit, accumulation, relevance, routing, and bounded success. |
| Skill, Subagent, and Memory each follow their problem | PASS | Repetition, role/context complexity, and rediscovery precede the respective mechanism. |
| Harness reveal follows its component problems and success | PASS | BEAT-033–037 connects the parts before the architecture reveal and bounded task. |
| Harness success precedes staleness; Loop follows possible recurrence | PASS WITH DEMO GATE | BEAT-037–051 preserves order; recurrence and attribution need observation or a labeled controlled case. |
| Evaluation and regression follow a system change | PASS | BEAT-045–049 requires rerun, representative evaluation, and regression checking. |
| Minimum Effective Harness guards against overengineering | PASS | Early cues and final recall are mapped above; no fixed feature list is prescribed. |
| Beginners and advanced users share the Story | PASS | Audience Audit and BEAT-068–069 layer next steps without separate tracks. |
| Product claims fit Research | PASS WITH RECHECK | Product behavior remains conditional and must be rechecked for the selected surface under OQ-003/OQ-005. |
| Demo repository, Slide Map, Speaker Notes, PPT remain unproduced | PASS FOR THIS GATE | These deliverables remain outside this Story step; the separate PPT authorization still applies. |

**Interim result: PASS WITH EVIDENCE GATES.** This is not the final STEP 05
quality audit or STEP 05 completion. The remaining work and OQ owners are
listed below.

### Beat Granularity and Causality Audit

A Beat is warranted when an event changes learner understanding or changes
the state of the developer, Agent, or Project in a way that matters to the
Story. A label such as “Context Engineering” is too broad: repeated Prompt
context, initial `AGENTS.md` success, accumulation, relevance, separation,
routing, and the process friction that follows are separate changes in
understanding. By contrast, “the Agent reads the next file” is a Demo detail
unless it changes what the learner understands or what the system can do.

The 71 Beats are divided around those meaningful shifts. The granularity
review passes: no Act is collapsed into one concept Beat, and individual
repository actions remain inside a Beat unless they change the Story state.

| Causal handoff | Why the next Beat follows | Audit result |
|---|---|---|
| BEAT-008 → 010 → 011 | Repeated Project facts motivate reusable guidance; its first success makes adding more guidance reasonable, which creates accumulation. | PASS: the solution's success contributes to the next friction. |
| BEAT-014 → 017 → 018 | Separation and routing make relevant Context easier to find; after that success, repeated work procedures remain a distinct unresolved problem. | PASS: Context success is preserved before Process friction. |
| BEAT-020 → 022 → 023 | Repeated steps motivate a reusable workflow; a bounded success is followed by a more complex task that may need distinct investigations. | PASS: increasing scope, not solution failure, earns the next question. |
| BEAT-025 → 027 → 028 | Role separation can help a complex task, but the learner then sees its limits and a separate cross-task rediscovery problem. | PASS: success stays task-bounded; Memory answers a different friction. |
| BEAT-030 → 037 → 038 | Retained knowledge, tools, and checks join a bounded Harness success; time and Project change then create a plausible maintenance question. | PASS: the Loop is not introduced before a useful Harness is shown. |
| BEAT-039 → 051 | A local fix, possible recurrence, observation, hypothesis, scoped change, rerun, evaluation, and regression check accumulate before the Loop is named. | PASS WITH EVIDENCE GATE: recurrence and outcomes require observation or a labeled controlled case. |

The causal review checks that a new problem comes from scale, repetition,
complexity, or change in the same evolving Project. It does not require every
transition to contain a failure; several transitions follow a useful success
that exposes the next boundary.

### Transition Quality Audit

The major transitions are detailed and assigned stable IDs in
[TRANSITIONS.md](TRANSITIONS.md). Each is checked for prior value, a new
friction caused by scale, repetition, or change, an intuitive question before
the next term, a plausible engineering response, and an evidence / fairness
guardrail.

| Transition range | Audit result | Remaining gate |
|---|---|---|
| `TRANS-001`–`TRANS-003` — Chatbot → Codex → Prompt → Context | PASS: useful earlier methods remain useful; each next problem is distinct. | Repository surface and any displayed outcomes remain conditional. |
| `TRANS-004`–`TRANS-006` — AGENTS.md → separation; Context → Harness; Workflow → Skill | PASS: initial success precedes accumulation or workflow friction. | Keep the Skills product mechanism conditional and use a conceptual fallback if unavailable. |
| `TRANS-007`–`TRANS-009` — Single Agent → Subagent; rediscovery → Memory; components → Harness | PASS: mechanisms follow role, rediscovery, and integration problems. | Do not claim speed gains or imply the component list is mandatory. |
| `TRANS-010`–`TRANS-012` — Harness staleness → debt → Loop → AI-Native | PASS WITH EVIDENCE GATE: recurrence motivates investigation and a bounded system response. | Failures, causes, outcomes, and any meta history remain illustrative or controlled until verified. |

**Result: PASS WITH EVIDENCE GATES.** No transition needs a new failure
manufactured solely to justify the next concept. Preserve the earlier
approach's initial success and show the problem before naming a response.

### Failure Realism Audit

| Candidate case | Realistic? | Reproducible now? | Teaching and fairness boundary |
|---|---|---|---|
| Project build/test command changes while a reusable workflow is stale | Plausible in normal development. | TODO until a Demo repository and state sequence are selected. | Show canonical current instructions and an ordinary task; do not hide files, permissions, or access to force failure. Label a constructed case. |
| Formerly valid Memory conflicts with the current Project source | Plausible maintenance scenario. | TODO; no actual Memory behavior or project case is selected. | Compare against the canonical source; do not attribute the failure to Memory until observed. |
| Performance Skill omits a baseline | Plausible workflow-quality issue. | TODO until an actual Skill or controlled case is built. | Show an incomplete comparison step, not an artificial command error. Claim no performance gain without measurements. |
| All Subagents run for a small task | Plausible over-delegation scenario. | TODO until recorded or controlled. | Make duplicate work and coordination visible; quantify cost or latency only with evidence. |
| Agent fails to run a Test correctly | Plausible diagnostic case. | TODO; the root cause is intentionally undetermined. | Use it to compare four diagnostic lenses; do not stage blocked access or claim one layer caused it without evidence. |
| A later task repeats a stale-workflow correction | Plausible recurrence, but recurrence is a factual claim when presented as observed. | TODO until observed or explicitly reproduced in a controlled case. | Do not teach Loop as required from one event; retain uncertainty about cause. |

**Result: CONDITIONAL PASS.** The cases are plausible and teachable, but
their reproduction and actual Demo evidence remain open under the existing
OQs. No case may be presented as an observed project event prematurely.

### Success Realism Audit

| Success shown | Bounded claim | Do not claim |
|---|---|---|
| Chatbot answers a local question | A supplied snippet can support a bounded question. | Chatbot use is wrong or useless. |
| Repository exploration | A supported agent surface can investigate available repository context for a bounded task. | Every surface can edit / execute, infer intent, or inspect inaccessible files. |
| Prompt and project guidance | Explicit scope and reusable facts can address the specific repetition or ambiguity shown. | A Prompt or `AGENTS.md` guarantees correctness or perfect project understanding. |
| Workflow, Skill, and Subagent | A procedure or role split can structure selected work where supported. | Reuse guarantees identical results, or delegation guarantees speed. |
| Memory and Harness | Retained knowledge or a work system can support later tasks while accurate and appropriately scoped. | Memory remembers everything, or a Harness eliminates future failures. |
| Loop improvement | Evaluation may support keeping, refining, or reverting a change for the tested scope. | A single pass proves quality, the model learned automatically, or the system improves itself without judgment. |

**Result: PASS WITH BOUNDED CLAIMS.** All later Demo successes require
recorded outcomes, a clearly labeled controlled scenario, or a visual case.

### Story Evidence Audit

| Evidence class | Story use | Required boundary |
|---|---|---|
| Factual product behavior | Codex repository work, `AGENTS.md`, Skills, Subagents, Memory, execution surfaces | Cite and recheck current official sources for the selected product surface; preserve `OQ-003` / `OQ-005` scope. |
| Academic claim | Long-context position effects and related research | Keep conditions and limits visible; no general claim that current coding agents fail on middle context. |
| Teaching model | AI-Native Development, the maturity sequence, and the course's Loop wording | Label as this course's operational model, not industry consensus or product behavior (`OQ-011`). |
| Demo observation | Specific agent action, failure, recurrence, or before/after result | Use actual logs / artifacts or label the state as controlled / illustrative; never invent history. |
| Engineering heuristic | Minimum Effective Harness and task-sized mechanism choices | Label as a project heuristic; avoid universal thresholds or feature checklists. |

**Result: PASS WITH GATES.** Related claims and research appear in
`STORY_BEATS.md`; current product and concrete Demo claims remain conditional
until their evidence is selected and checked.

### Audience Audit

| Act | Beginner read-through | Advanced read-through | Guardrail |
|---|---|---|---|
| ACT 0 | Starts from the familiar act of asking about an error and collecting code. | Examines the boundary between asking and delegating repository investigation. | Explain repository exploration plainly and condition it on surface / permission. |
| ACT 1 | Uses an ordinary broad request to reveal missing task details. | Adds scope, trade-offs, completion evidence, and investigation-first reasoning. | Do not turn the opening into evaluation theory or make every task require long planning. |
| ACT 2 | Shows why project rules are repeated, then why relevance matters. | Adds routing, scope, timing, and bounded long-context evidence. | Explain Context before specialist terms; do not prescribe an instruction-file size. |
| ACT 3 | Separates what the Agent knows from how it works, then shows the parts accumulating for visible reasons. | Examines role/context isolation, coordination cost, Memory lifecycle, verification, and system fit. | Introduce product features conditionally; no component is a prerequisite. |
| ACT 4 | Follows a stale instruction, observes a repeat, and sees a cause checked before a change. | Examines evaluation scope, regression, overfitting, maintenance, and feedback design. | Label constructed states, distinguish observation from hypothesis, and avoid universal improvement claims. |
| ACT 5 | Leaves with one small next step and no adoption mandate. | Leaves with Agent System Reliability questions and a system-level review lens. | Keep both perspectives in one shared Story; do not split learners into tracks. |

**Result: PASS.** Each Act has an intuitive entry for beginners and an
engineering insight for experienced users. Technical depth is layered after
the observable problem rather than used as a prerequisite.

### Story Compression Test

The full Story compresses to this sentence without losing its direction:

> 개발자가 AI에게 질문하는 것에서 시작해, 반복되는 실제 개발 문제를
> 해결하면서 Prompt → Context → Harness → Loop로 AI 활용 환경을
> 점진적으로 Engineering한다.

| Act | One-sentence focus |
|---|---|
| ACT 0 | AI에게 코드를 가져가는 방식에서 AI를 Repository로 데려가는 방식으로. |
| ACT 1 | 모호한 요청에서 명확한 Task Specification으로. |
| ACT 2 | 반복 설명에서 필요한 Context를 설계하는 방식으로. |
| ACT 3 | Agent에게 정보를 주는 것에서 Agent가 일할 System을 만드는 방식으로. |
| ACT 4 | 현재 Failure를 고치는 것에서 Failure로 System을 개선하는 방식으로. |
| ACT 5 | AI Tool 사용에서 AI-Native Development Mental Model로. |

**Result: PASS.** The optional, evidence-gated training-repository example in
BEAT-058–059 supports the core Story but is not a required main-story event.
No other Beat falls outside the compressed narrative.

### Story Expansion Test

The narrative keeps the causal steps that would disappear in a feature-list
summary.

| Required transition | Preserved connective events | Beats | Result |
|---|---|---|---|
| Prompt → `AGENTS.md` | Prompt succeeds; repeated Project facts appear across later tasks before reusable guidance is introduced. | BEAT-007–009 | PASS |
| `AGENTS.md` → Context separation | Initial reuse succeeds; rules accumulate; a small task exposes relevance and maintenance; separation and routing then help. | BEAT-009–017 | PASS |
| Context → Skill | Organized Context is useful, but work procedure still varies and repeats before a Workflow / Skill is introduced. | BEAT-017–022 | PASS |
| Skill → Subagent | Workflow succeeds; a multi-module performance concern and regression risk create role / Context complexity in one connected task. | BEAT-022–027 | PASS WITH REPOSITORY-FIT GATE |
| Subagent → Memory | Role separation and its costs appear before repeated project knowledge is rediscovered across tasks. | BEAT-023–032 | PASS |
| Harness → Loop | Harness succeeds; time passes and Project assumptions change; a stale artifact is locally corrected; possible recurrence precedes observation, cause, change, evaluation, and regression. | BEAT-037–051 | PASS WITH DEMO GATE |

**Result: PASS WITH OPEN EVIDENCE GATES.** No listed transition is compressed
to an unexplained jump.

### Emotional and Cognitive Journey Audit

Expected reactions are recognition and insight, not staged drama.

| Expected learner response | Story evidence | Result |
|---|---|---|
| “나도 이렇게 쓰는데.” | Familiar chatbot workflow and private self-location. BEAT-001. | PASS |
| “이런 것도 맡길 수 있구나.” | Bounded repository investigation and first useful result. BEAT-002–003. | PASS WITH DEMO GATE |
| “이건 내일부터 써먹겠다.” | Task specification and investigation-first workflow. BEAT-005–007. | PASS |
| “매번 설명할 필요가 없네.” | Reused project guidance works before it grows. BEAT-009–010. | PASS WITH DEMO GATE |
| “나도 비슷하게 다 넣고 있었는데.” | Accumulation makes relevance and maintenance visible. BEAT-011–016. | PASS; keep the example domain-neutral. |
| “작업 방법 자체를 재사용할 수 있네.” | A repeated procedure becomes a Workflow / Skill candidate. BEAT-020–022. | PASS WITH PRODUCT GATE |
| “복잡하면 역할을 나눌 수도 있구나.” | One connected multi-module task reveals independent investigations and handoff costs. BEAT-023–027. | PASS WITH REPOSITORY-FIT GATE |
| “왜 같은 걸 계속 조사했는지 이해된다.” | A fact is rediscovered, retained, reused, and given a lifecycle. BEAT-028–032. | PASS WITH PRODUCT GATE |
| “이게 하나의 System이구나.” | The Harness emerges after its parts have solved distinct problems. BEAT-033–037. | PASS |
| “이것도 관리해야 하는구나.” | Project change makes a useful artifact potentially stale. BEAT-038–041. | PASS WITH DEMO GATE |
| “실패 자체를 System 개선에 쓸 수 있네.” | Observation and cause hypothesis lead to scoped change and bounded evaluation. BEAT-042–051. | PASS WITH DEMO GATE |
| “내가 지금 어디 있고 다음에 뭘 할지 알겠다.” | Shared recap, fitting next steps, takeaways, and private reflection. BEAT-060–071. | PASS |

### Too-convenient Story and Domain Neutrality Audit

| Risk | Audit and treatment | Result |
|---|---|---|
| Subagents appear because several unrelated tasks suddenly run at once. | BEAT-023 now connects architecture tracing, bottleneck measurement, tests, and documentation to one candidate multi-module performance change and its regression risk. Verify that an actual selected repository supports the chain before using it. | PASS WITH REPOSITORY-FIT GATE |
| Memory appears after only one task. | BEAT-028–032 first establish useful Project facts being rediscovered across tasks and distinguish retention from current Context. | PASS |
| Stale Harness appears without elapsed time or change. | BEAT-038 advances the same Project over time and changes project assumptions before the stale instruction scenario. | PASS |
| A failure is arranged to force a feature. | Failure candidates are ordinary task / maintenance cases; observation, cause, and reproduction are evidence-gated. | PASS WITH DEMO GATE |
| The Story assumes GPU expertise. | The Story uses general software concerns: modules, call paths, bug fixes, performance, tests, benchmarks, build workflows, and architecture. A context-bloat example uses generic performance guidance, not a specialized algorithm. | PASS |

### Single Repository Feasibility Check

The Story is conceptually organized around one evolving Project, but no
candidate repository has been selected. Actual feasibility therefore remains
open under `OQ-001` and related Demo questions.

| Capability the primary Project should support | Story use | Current status |
|---|---|---|
| Multiple files, modules, call path, architecture documentation | Repository exploration, role complexity, and safe change reasoning. | REQUIRED; TODO after repository selection. |
| Build and Tests; a small Bug | Task specification, bounded workflow, and Verification. | REQUIRED; exact commands and cases are TODO. |
| Performance task and repeatable Benchmark | Workflow success and measurement before/after a change. | REQUIRED if a suitable case exists; commands and realistic criteria are TODO. |
| Reusable project rules and recurring Workflow | `AGENTS.md`, context routing, and Skill / Workflow candidates. | REQUIRED as a design capability; product implementation remains conditional. |
| Composite investigation and durable Project knowledge | Role separation, Context isolation, rediscovery, and Memory lifecycle. | DESIRABLE; validate against real task complexity and repository evidence. |
| A project or workflow change that makes an artifact stale | Harness maintenance and Loop trigger. | REQUIRED for the planned case; fair reproducibility is TODO. |

**Result: CONDITIONALLY FEASIBLE.** Do not force every capability into a
repository that does not naturally support it. If one Project cannot carry a
supporting mechanism honestly, keep the primary Story continuous and use a
clearly related visual or captured supporting case. Avoid unrelated projects
for individual Acts.

### Story Fact and Model Labels; Research Conflict Recheck

Use an explicit label only where a reader could confuse product fact, a
planned scenario, an observation, or a course model.

| Label | Use in this Story |
|---|---|
| FACT | A sourced, current product or research statement within its recorded scope. Product behavior remains conditional on the target surface and must be rechecked under `OQ-003` / `OQ-005`. |
| DEMO ASSUMPTION | A controlled or illustrative repository state, such as a stale Build / Test workflow; never present it as observed project history. |
| OBSERVATION | Reserve for an actual recorded Demo action or output; none is claimed by this Story draft. |
| TEACHING MODEL | The maturity sequence, Context Router pattern, Harness / Loop framing, and AI-Native Development are course operational models, not official product taxonomies. See `OQ-011`. |
| HEURISTIC | Minimum Effective Harness is a project heuristic for sizing a response to real recurring friction, not a universal threshold or required configuration. |

| Research-sensitive area | Story boundary checked | Result |
|---|---|---|
| `AGENTS.md` support and scope | Product documentation is cited for supported instruction discovery; the Story does not claim perfect understanding, replacement of `plan/` Source of Truth, or universal availability. | NO CONFLICT FOUND; recheck target environment. |
| Skills | Reusable workflow is the Engineering need; exact product mechanism and availability stay conditional. | NO CONFLICT FOUND; `OQ-005` / `OQ-008` remain open. |
| Subagents | Role separation is introduced before the feature; coordination, duplication, transfer, and integration costs are explicit; no speed promise. | NO CONFLICT FOUND; `OQ-005` / `OQ-008` remain open. |
| Memory | Product Memory is separated from current Context and canonical project Source of Truth; durable-knowledge pattern remains broader than one product feature. | NO CONFLICT FOUND; `OQ-005` / `OQ-008` remain open. |
| `Lost in the Middle` | Used only as bounded supporting evidence for studied long-context tasks; it does not establish a current Codex or `AGENTS.md` failure. | NO CONFLICT FOUND; preserve `OQ-006` limits. |
| Harness and Loop Engineering | Course operational models are distinguished from official product terms and universal industry consensus. | NO CONFLICT FOUND; final wording remains subject to `OQ-011`. |
| AI-Native Development | Labeled as the course's teaching model; developer judgment and responsibility remain. | NO CONFLICT FOUND. |

**Result: NO STEP 03 RESEARCH CONFLICT FOUND IN THE CURRENT STORY DRAFT.**
This is a scope recheck of the project Research artifacts, not fresh evidence
that product access or Demo outcomes are available.

### Story Drift Audit

| Drift signal | Status | Story evidence / guardrail |
|---|---|---|
| Product feature explanation grows larger than the Story | PASS | Product mechanisms follow a learner problem and remain conditional. |
| Too many Prompt examples | PASS | One task carries the checklist and investigation-first value; more variants are not required. |
| `AGENTS.md` becomes the center of the course | PASS | It is one useful ACT 2 response with growth, relevance, and routing limits. |
| Context Engineering becomes file-splitting technique | PASS | Relevance, timing, routing, and Progressive Disclosure lead the section. |
| Harness becomes a feature checklist | PASS | The need for methods, tools, environment, and checks is established before the architecture reveal. |
| Subagent becomes an advanced feature showcase | PASS | The connected role / Context problem and coordination costs precede the mechanism. |
| Memory is confused with a product feature or Source of Truth | PASS | Current Context, durable knowledge, product Memory, and canonical project plans are distinguished. |
| Loop is reduced to automation | PASS | Product Loop and Harness Improvement Loop are distinct; automation is a risk-shaped option. |
| Beginner simplicity removes Harness / Loop insight | PASS | Shared story retains system design, evaluation, and maintenance with layered entry points. |
| Advanced depth makes ACT 0 too technical | PASS | Advanced context-cost insight is an optional layer on a familiar opening. |
| Failure is made unrealistic for a Demo | PASS WITH DEMO GATE | Candidate cases use ordinary work; reproduction and causal attribution remain TODO. |
| Completed Harness appears too early | PASS | Full reveal follows Context, Workflow, roles, Memory, Tools, and Verification. |
| Product feature change would collapse the Story | PASS | The Engineering problem and product-independent fallbacks carry the narrative. |

### Story Beat Coverage Audit

All listed STEP 05 events have at least one Beat. The counts describe the
current Story structure, not a Slide estimate.

| Act | Beat range | Count | Coverage summary |
|---|---:|---:|---|
| ACT 0 — Chatbot and Repository Exploration | BEAT-001–003 | 3 | ChatGPT workflow, developer-supplied context, repository-level problem, bounded Codex investigation, first success. |
| ACT 1 — Prompt as Task Specification | BEAT-004–007 | 4 | Intent gap, structured Prompt, investigate first, bounded Prompt success, repeated Project context. |
| ACT 2 — Project Context and Relevance | BEAT-008–017 | 10 | `AGENTS.md` introduction and success, accumulation, relevance, bounded research, separation, Router, Progressive Disclosure, Context success. |
| ACT 3 — Harness as a Designed Work System | BEAT-018–037 | 20 | Process inconsistency, workflow / Skill and success, composite task, roles / Subagents and trade-offs, rediscovery / Memory and lifecycle, Tools, structural Verification, bottom-up Harness emergence / reveal / success. |
| ACT 4 — Loop and System Improvement | BEAT-038–059 | 22 | Time and Project change, stale workflow, local correction and possible repeat, technical debt, observation / cause / layer / change / rerun / evaluation / regression, bloat callback, Loop reveal and distinction, maintenance, Minimum Effective Harness, optional factual meta example. |
| ACT 5 — AI-Native Development and Learner Reflection | BEAT-060–071 | 12 | Full recap, course model, responsibility, Verification and task workflow payoffs, four-layer diagnosis, audience next steps, takeaways, private reflection. |
| TOTAL | BEAT-001–071 | 71 | Each Beat records the requested schema; no target Beat count is imposed. |

### Story Invariant Mapping

Meaningful story regions connect to their governing Invariants without
assigning an ID mechanically to every Beat.

| Story region | Related Invariants | Guardrail carried into the Story |
|---|---|---|
| Shared audience and Chatbot → Codex | `INV-IDENTITY-001`, `INV-AUDIENCE-001`, `INV-NARRATIVE-001–002`, `INV-DIFFICULTY-001` | Familiar entry, one Story, problem before mechanism. |
| Prompt and task workflow | `INV-MATURITY-001`, `INV-MATURITY-011`, `INV-LEARNING-001`, `INV-VERIFY-001` | Prompt remains useful; task execution is not the maturity sequence; evidence matters. |
| Context and `AGENTS.md` | `INV-MATURITY-002–004`, `INV-LEARNING-003` | Initial benefit before limits; relevance, freshness, routing, and timing. |
| Harness elements and reveal | `INV-MATURITY-005–009`, `INV-VERIFY-001` | Mechanisms follow real needs; Skills, Subagents, and Memory remain optional; reveal is bottom-up. |
| Harness staleness and Loop | `INV-MATURITY-010`, `INV-LOOP-001`, `INV-DEMO-002`, `INV-VERIFY-001` | Change and recurrence precede cause analysis; evaluate and check regression. |
| Final audience choices and responsibility | `INV-DIFFICULTY-001–002`, `INV-RESPONSIBILITY-001`, `INV-LEARNING-003` | One shared path; no adoption mandate; developer retains judgment and accountability. |

### Story Language Guidelines

Use a curious, nonjudgmental engineering tone. Useful connective phrases
include: “왜 이런 문제가 생겼을까요?”, “처음에는 잘 동작합니다.”,
“사용 범위가 커지면 어떤 문제가 보일까요?”, “정보의 문제가 아니라
작업 방법의 문제일 수 있습니다.”, and “현재 Task를 고치는 것과 System을
고치는 것은 다릅니다.”

Avoid describing beginners as wrong, calling a useful earlier method a
failure, presenting `AGENTS.md` as inherently bad, promising that Subagents
always help, saying Memory remembers everything, or claiming a Loop makes AI
self-improve. These phrases guide later Slides and Speaker Notes; neither is
created here.

## STEP 06 Demo Architecture Input Package

This handoff preserves the Story questions for Demo Architecture. It does not
select a repository, build a Demo, or promote the proposed candidates to
approved decisions.

### A. Primary Demo Story Requirements

Prefer one understandable software Project whose evolution can carry the
central Story: a task moves from a small question to recurring code work,
reusable Project context, a repeated workflow, multiple related modules, and
eventual Project / workflow change. The Demo should answer a Story question,
show bounded evidence, and leave the next friction visible.

### B. Anchor Demo Candidates

The four grouped candidates from `DEC-0008` remain `PROPOSED`:

1. ACT 0 — Read-only repository exploration (BEAT-002–003).
2. ACT 2 — Repeated Prompt context to useful project guidance, then relevance
   and routing (BEAT-008–017).
3. ACT 3 — A repeated workflow with visible verification and bounded success
   (BEAT-020–022).
4. ACT 4 — A labeled stale-artifact case through cause analysis, scoped change,
   rerun, evaluation, and regression check (BEAT-039–049).

They are transition candidates, not a requirement for one live Demo per Beat.

### C–D. Supporting and Visual-only Candidates

- **Supporting:** Prompt Before/After (BEAT-004–007); role separation and
  Subagent trade-offs (BEAT-023–027); Memory reuse / lifecycle (BEAT-028–032
  and BEAT-054); Skill maintenance (BEAT-055); training-repository history
  only if supported by actual records (BEAT-058–059).
- **Visual / captured:** Context growth and routing (BEAT-011–017); Harness
  diagram (BEAT-035–036); observation-to-cause / layer map (BEAT-043–045);
  instruction bloat and Loop variants (BEAT-050–053); final comparison,
  layers, and audience summary (BEAT-060–070).
- **Do not stage as a product Demo:** diagnostic questions and private
  reflection (BEAT-067–068, BEAT-071); keep them as explanation or reflection.

### E. Required Project Capabilities to Check

- Multiple files and modules with a traceable call path and understandable
  architecture documentation.
- A small Bug task and realistic behavior Tests.
- A Performance task with a meaningful, repeatable Benchmark if available.
- Project rules, a recurring Workflow, and a plausible reason to make reusable
  context or verification visible.
- A composite investigation whose roles arise from one connected task rather
  than simultaneous unrelated tasks.
- Historical facts worth retaining, with sources and freshness that can be
  checked.
- A real or explicitly controlled project / workflow change that can make an
  artifact stale without hiding relevant files or manufacturing failure.

Treat these as repository-selection criteria, not assumptions about a
repository that has not been chosen. OQ-001/OQ-002/OQ-007/OQ-009 remain open.

### F. Required Agent / Harness Capabilities to Check

Check whether the selected environment can support or illustrate `AGENTS.md`,
relevant-context routing, a reusable workflow, optional Subagent investigation,
durable knowledge and its lifecycle, task-level verification, a stale Harness
artifact, and evidence-informed feedback. Use a conceptual or captured
fallback when a product feature is unavailable or unreliable. Current product
support and target-account availability remain subject to OQ-003/OQ-005/OQ-008.

### Demo Story Handoffs for Anchor Candidates

Every selected candidate must be completed against this handoff before
implementation: Story Beat, Question, Starting State, Expected Action,
Expected Observation, Teaching Point, Failure Risk, Fallback, and Next Beat.

#### Anchor 1 — Repository exploration

- **Story Beat:** BEAT-002–003; advance to BEAT-004.
- **Question:** “AI에게 질문하기 전에 내가 이미 관련 코드를 다 찾아야 하나?”
- **Starting State:** One permitted repository is open; the developer has a
  bounded question about where a feature lives.
- **Expected Action:** The agent searches and reads relevant files, traces the
  path, and explains what it found without editing.
- **Expected Observation:** Relevant files and their relationship are visible
  and can be checked against the repository.
- **Teaching Point:** Some Context gathering can move to an Agent; access does
  not supply task intent.
- **Failure Risk:** Permission, workspace, indexing, or navigation may block or
  change the path; a correct-looking path may still be incomplete.
- **Fallback:** Captured search / file trace or a diagram from a reviewed run.
- **Next Beat:** BEAT-004 — repository access does not convey intent.

#### Anchor 2 — Repeated context, `AGENTS.md`, and relevance

- **Story Beat:** BEAT-008–017; advance to BEAT-018.
- **Question:** “왜 같은 Project 설명을 매번 반복하고, 새 Rule은 어디에 둘까?”
- **Starting State:** Several task prompts repeat a small set of Project facts;
  a concise reusable guidance artifact has not yet been shown.
- **Expected Action:** Show one bounded reuse success, then inspect which
  information a small task needs and route only relevant detail.
- **Expected Observation:** Repeated facts can be reused; a task and a broad
  guidance set have different relevance; a route can lead to supporting
  material.
- **Teaching Point:** `AGENTS.md` is initially useful; Context design concerns
  relevance, scope, and timing rather than file splitting alone.
- **Failure Risk:** Do not stage a deterministic model failure or infer that
  a line count causes one; target product discovery and current behavior need
  verification.
- **Fallback:** A labeled document comparison, context map, or captured
  before/after from a controlled case.
- **Next Beat:** BEAT-018 — organized Context does not make process consistent.

#### Anchor 3 — Reusable workflow and verification

- **Story Beat:** BEAT-020–022; advance to BEAT-023.
- **Question:** “같은 작업 방법을 매번 Prompt에 다시 쓰지 않고 재사용할 수 있을까?”
- **Starting State:** Repeated performance tasks have a task-appropriate
  baseline, procedure, checks, and comparison criteria.
- **Expected Action:** Apply a reusable sequence through investigation, plan,
  implementation, correctness checks, benchmark, comparison, and review.
- **Expected Observation:** The procedure makes its steps and verification
  visible; the run's outcome is bounded by its records and criteria.
- **Teaching Point:** Reusable Workflow is the Engineering solution; a
  product Skill is conditional and is not required to show the idea.
- **Failure Risk:** A benchmark or test may be noisy, unavailable, or
  nonrepresentative; do not claim a speed gain or guaranteed consistency.
- **Fallback:** A versioned workflow artifact plus a reviewed captured run or
  diagram of evidence points.
- **Next Beat:** BEAT-023 — project complexity creates related role questions.

#### Anchor 4 — Stale Harness through evaluated change

- **Story Beat:** BEAT-039–049; advance to BEAT-050–051.
- **Question:** “같은 Failure가 다시 나타난다면 이번 Task만 고치는 것으로 충분할까?”
- **Starting State:** A documented current Project command differs from an
  old reusable workflow. Use a controlled case if this state is not observed.
- **Expected Action:** Correct one task locally, establish whether the
  mismatch recurs, observe the trace, form a cause hypothesis, change the
  implicated artifact, rerun, evaluate representative work, and check
  regression.
- **Expected Observation:** The stale artifact, evidence for the hypothesis,
  scoped diff, rerun, evaluation result, and limits are all inspectable.
- **Teaching Point:** Repeated, diagnosed friction can inform an evaluated
  Harness change; one pass is not proof of universal improvement.
- **Failure Risk:** Recurrence, root cause, and improvement may differ from
  expectation; do not hide access, invent history, or claim an unsupported
  causal result.
- **Fallback:** A clearly labeled controlled timeline with captured trace,
  artifact diff, and bounded results, or a visual if a fair reproduction is
  not available.
- **Next Beat:** BEAT-050–051 — indiscriminate rules can recreate Context
  bloat; reveal the Loop after its parts.

### G. Open Questions for Demo Architecture

The Story leaves these choices unresolved and routes them to existing OQs:

| STEP 06 question | Existing OQ |
|---|---|
| Language, domain, repository source / location, and whether one Project can carry the needed events | OQ-001 |
| Real case suitability, use permission, and sensitive-data boundaries | OQ-002 / OQ-014 |
| Target product surface, account, Live vs recorded vs captured / visual split, and fallback | OQ-003 / OQ-005 |
| Build / Test / Benchmark examples and stale-state change | OQ-007 / OQ-009 |
| Whether Skills, Subagents, Memory, or a concrete Harness mechanism is available and justified | OQ-008 |
| Final operational wording for Harness / Loop teaching terms | OQ-011 |
| Whether actual training-repository history supports a secondary Meta Example | OQ-013 |

No new Open Question is needed; the existing questions cover the candidates.

## Story Architecture Freeze Candidate

**Assessment:** READY AS A STEP 06 STORY BASELINE, WITH OPEN QUESTIONS.

“Freeze” means Demo or Slide convenience alone cannot silently alter the
causal Story. It does not prohibit corrections supported by new Research,
reproducibility limits, time-budget evidence, user direction, or a discovered
logical error. For a proposed change, state the reason and impact, identify
affected Beats and Transitions, compare it with the relevant Invariants and
Decisions, and record the decision before changing the governing Story. Do
not change the HARD narrative order without user approval.

## Curriculum and Governance Trace

The event-level map is in [STORY_BEATS.md](STORY_BEATS.md); questions and
causal handoffs are in [TRANSITIONS.md](TRANSITIONS.md). `CURRICULUM_MATRIX.md`
maps Curriculum sections to evidence, Invariants, and transitions; each Beat
links to its Curriculum section and Evidence, while the Transition Map names
the causal handoff. These existing links provide enough traceability for this
gate. A separate `STORY_TRACEABILITY.md` would repeat them and create another
file to keep synchronized, so it is not created.

The protected story order is `INV-NARRATIVE-001` (HARD). Problem-before-term,
continuous project evolution, emergent mechanisms, Harness staleness before
Loop, evidence-bounded claims, and one shared audience Story are governed by
the applicable STRUCTURAL and HARD Invariants listed in the beats and in
`plan/INVARIANTS.md`.

## Open Items for Later Steps

- Keep `DEC-0007` and `DEC-0008` in `PROPOSED`; do not infer user approval from
  this Story draft.
- Resolve the repository domain/language and Beat-level case feasibility under
  OQ-001/OQ-002; compare Live, recorded, and captured/visual approaches for
  selected candidates under OQ-003; verify current product behavior for the
  target surface under OQ-005.
- Select project checks and any stale-state example under OQ-007, recurring
  workflow / role / Memory implementations under OQ-008, and a fair stale
  Project change, recurrence, and evaluation criteria under OQ-009. Final
  Harness and Loop wording remains subject to OQ-011.
- Use the training-repository meta example only if OQ-013's actual-history
  review supports its sequence and relevance. These items already exist as
  Open Questions; this review adds no duplicate OQ.
- Treat this architecture as the story design layer. Slide Map, final slide
  text, Demo repository implementation, Speaker Notes, and PPT are later
  deliverables and are not created here.

## STEP 05 Final Gate (§110, §120)

| Area | Result | Basis and remaining boundary |
|---|---|---|
| Required Story files | PASS | Architecture, Beats, and Transitions exist. A separate Traceability file is not needed because the Matrix, Beat fields, Invariant map, and Transition map already connect the sources. |
| Narrative | PASS | One Developer and one evolving Project; problem-first transitions; bounded success states; bottom-up Harness reveal; staleness and possible recurrence before Loop; full recap. |
| Realism and evidence | PASS WITH OPEN QUESTIONS | Failures and improvements are plausible but remain Demo Assumptions unless reproduced or observed. No success result is claimed as actual Demo evidence. |
| Audience | PASS | Beginner entry and advanced system insight remain layered in one Story; no learner is told to implement every stage. |
| Engineering | PASS | Verification, Context, Skill / Memory maintenance, evaluation, regression, and Minimum Effective Harness callbacks are present. |
| Product / Research | PASS WITH RECHECK | No conflict with current STEP 03 Research records was found; selected-surface facts must be checked again under OQ-003/OQ-005. |
| Scope | PASS | No Demo repository, Slide Map, Speaker Notes, or PPT was created. STEP 06 has not been started. |

**STEP 05 result: COMPLETE WITH OPEN QUESTIONS.** The Story is ready as a
baseline for STEP 06. OQ-001–OQ-014 remain governed by `DECISIONS.md`; open
Demo feasibility and evidence questions do not require altering the Story
before Demo Architecture begins.
