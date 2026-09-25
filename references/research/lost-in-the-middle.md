# Lost in the Middle

## Research Question

Lost-in-the-middle 연구는 Context Engineering 주장에 어떤 범위로 사용할 수 있는가?

## Why It Matters

긴 context를 넣는 것만으로 충분하다는 오해를 막는 academic evidence다.

## Findings

- **Type: ACADEMIC FINDING / Confidence: HIGH / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0201** — Liu et al. tested multi-document question answering and a synthetic key-value retrieval task, varying the position of relevant information in long inputs. In the NaturalQuestions-Open experiment, the authors used 2,655 answerable questions, Wikipedia passages up to 100 tokens, and 10, 20, or 30 passages with one answer passage and distractors. The evaluated models included MPT-30B-Instruct, LongChat-13B, GPT-3.5-Turbo variants, Claude-1.3 variants, and a smaller GPT-4 subset. They observed a U-shaped position effect in several settings: relevant information near the beginning or end was often used more accurately than information in the middle.
- **Type: ACADEMIC FINDING / Confidence: MEDIUM / Freshness: see Checked date for cited SRC IDs in SOURCES.md / Source: SRC-0202, SRC-0203** — later work shows retrieval/reasoning and literal/non-literal matching affect score meaning.

The original result is specific to the paper's historical model snapshots,
prompts, tasks, distractors, and scoring. It did not test current ChatGPT/Codex
models, `AGENTS.md`, repository editing, or coding-agent workflows. It must not
be presented as proof that current models cannot use middle context or that a
long instruction file necessarily fails. Repository and long-context studies
in `SRC-0202`–`SRC-0204` broaden the evidence, but they also use bounded tasks
and do not establish a universal coding-agent rule.

## What the Evidence Does NOT Prove

It does not prove current models cannot use middle context, that every long
`AGENTS.md` fails, or that all long contexts reduce performance. It is not
direct evidence about a current Codex coding task.

## Implication for Training

Use as one bounded reason to care about relevance, noise, conflict, staleness,
retrieval, and maintenance. Context Engineering is broader than positional
effects: selecting, structuring, retrieving, refreshing, and verifying task
evidence matters. Do not use Lost in the Middle as the sole rationale.

## Demo Implication

Do not stage deterministic “middle always fails” demo unless reproduced.

## Risks / Caveats

Models and context systems have changed; preserve task/model scope. Coding
agents also use repository structure, tools, search, tests, and multi-step
reasoning that the original QA task did not evaluate. Keep that connection as
a training inference, not as a direct finding of Liu et al.

## Open Questions

- OQ-008: context demo choice pending.

## Sources

SRC-0201, SRC-0202, SRC-0203, SRC-0204
