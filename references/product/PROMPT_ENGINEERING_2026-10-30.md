# Prompt Engineering Methods — 2026-10-30

Decision: DEC-0116. Current slides: S28–S35. Checked:2026-10-30.

## Evidence boundary

VERIFIED WITH SCOPE means the official recommendation was present in the
opened page. It does not mean the teaching request was run or shown to
improve quality, tokens, elapsed time or performance. The five-core /
three-conditional classification is the user's approved teaching priority,
not a published ranking. No new Trial, C++ run or actual company policy.

The 2026-10-21 matrix remains [historical evidence](PROMPT_ENGINEERING_2026-10-21.md).
Its S22–S29 identifiers are historical. Use the current mapping below.
Existing Source and Claim IDs remain stable. The one new source is SRC-0243.

## Opened official pages and supported scope

| Source | Page | Checked sections | Supported recommendation | Scope limit |
|---|---|---|---|---|
| SRC-0230 | [Prompt engineering](https://developers.openai.com/api/docs/guides/prompt-engineering) | Message formatting with Markdown and XML; Few-shot learning; Include relevant context information | Logical boundaries, aligned input/output examples and relevant source material | Guidance for prompting; not an efficacy result for the course or all models. Delimiters are not a security boundary. |
| SRC-0231 | [Reasoning best practices](https://developers.openai.com/api/docs/guides/reasoning-best-practices#how-to-prompt-reasoning-models-effectively) | How to prompt reasoning models effectively | Direct instructions; delimiters where useful; start zero-shot and add aligned examples if needed; explicit goals/constraints | Includes historical reasoning-model discussion. Do not infer every current model/task needs examples or that all task plans are harmful. Internal thought-output prompting is distinct from a reviewable plan. |
| SRC-0232 | [Codex Best practices](https://learn.chatgpt.com/guides/best-practices) | Plan first for difficult tasks; Improve reliability with testing and review | Plan for complex/ambiguous work; focus review and relevant checks on the change | Does not require a plan/approval pause for every small task. Review does not certify correctness or prove tests were run. |
| SRC-0233 | [Structured model outputs](https://developers.openai.com/api/docs/guides/structured-outputs) | Structured model outputs; Handling mistakes | API JSON Schema adherence differs from ordinary text requests for a table or JSON; content may still be wrong | The slide uses a natural-language report format, not an API configuration or schema guarantee. |
| SRC-0234 | [Prompting](https://learn.chatgpt.com/docs/prompting) | Prompting overview; Describe the result you need; Add useful context; Set boundaries that prevent real problems; Make the result ready to use; Improve the result with follow-up messages; Prompting Codex | Include only relevant goals/sources/boundaries; ask for usable output and specific corrections; name verification | Do not require every field in every request or prescribe every step. Requests/citations alone do not establish facts or access. |
| SRC-0235 | [Using GPT-6](https://developers.openai.com/api/docs/guides/latest-model#prompting-best-practices) | Current GPT-6 Prompting best practices; Initiative and follow-through; Testing and verification | Tune clarification/autonomy and verification to the actual task | Current examples address observed GPT-6 Astra behavior and require evaluation with the selected model/workload. The separate GPT-5.6 section's numeric outcomes are not a GPT-6/course result. |
| SRC-0243 | [Rethinking skills and prompts for GPT-6 Astra](https://learn.chatgpt.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra) | Better skills; Up-to-date AGENTS.md; Decision boundaries; Persistence | Revisit inherited detailed recipes, unnecessary checking and approval constraints; state completion and stopping boundaries | OpenAI author guidance published2026-09-11, specifically discussing Astra. Not a controlled efficacy experiment or proof every model should use fewer instructions. |

## Current mapping and teaching decision

| Slide | Class | Claim | Sources | Current purpose |
|---|---|---|---|---|
| S28 | 조건부 | CLM-0032 | SRC-0230, SRC-0231 | 요청과 로그·명세가 한 메시지에 섞일 때 |
| S29 | 조건부 | CLM-0033 | SRC-0230, SRC-0231 | 사내 고유 표기·분류가 설명만으로 안 맞을 때 |
| S30 | 핵심 | CLM-0034 | SRC-0233, SRC-0234 | 완료 보고에서 필요한 정보를 빨리 찾고 싶을 때 |
| S31 | 핵심 | CLM-0035 | SRC-0230, SRC-0234 | 설명을 믿기 전에 실제 자료를 대조해야 할 때 |
| S32 | 핵심 | CLM-0036 | SRC-0234, SRC-0235, SRC-0243 | 사람의 선택에 따라 구현이나 완료 기준이 바뀔 때 |
| S33 | 조건부 | CLM-0037 | SRC-0231, SRC-0232, SRC-0243 | 조사 결과를 보고 구현 범위를 결정해야 할 때 |
| S34 | 핵심 | CLM-0038 | SRC-0232, SRC-0235, SRC-0243 | 변경안에서 놓치면 안 될 문제를 검토할 때 |
| S35 | 핵심 | CLM-0039 | SRC-0234 | 첫 제안의 어떤 부분이 요구와 다른지 알 때 |

## Editorial application

- S28: keep explicit request/reference headings when kinds of input are mixed.
  Do not require tags for a short clear request.
- S29: replace ordinary indexing examples with a fictional team's report
  labels. The value is supplying a convention the model does not know.
  First try a direct request; add examples if the convention remains unclear.
  This is an editorial adaptation, not evidence actual company rules exist.
- S30: specify reviewable report fields; remove the mechanical two-sentence
  cap so material evidence and risks remain visible.
- S31: request evidence for important conclusions and preserve unknowns;
  cross-check cited sources rather than accepting citations as proof.
- S32: investigate available facts, ask about material missing decisions,
  wait only for dependent work and continue allowed independent work.
- S33: request a plan/deliverable when investigation may change the chosen
  implementation scope. Do not force small fixed tasks into approval stages.
- S34: specify review criteria and supported failure conditions. Separate
  static review from actual checks; select checks proportionate to the change.
- S35: give the mismatch, expected behavior and preservation constraints.
  The prior proposal remains fictional; repetition is not measured improvement.

No full thought transcript, universal expert-persona advantage or automatic
self-review PASS is taught. Existing actual TRIAL-002 evidence remains on
its own slides. The target model/account, Windows, room and timed rehearsal
are UNVERIFIED. Representative evaluation would be needed before making
claims about the effect of a prompt change in the company's environment.
