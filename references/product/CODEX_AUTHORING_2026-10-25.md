# Codex authoring evidence —2026-10-25

Decision: DEC-0093. Sources: SRC-0111/SRC-0112; Claims: CLM-0041/CLM-0042.
Official pages were fetched and their main authoring/schema sections read.

- [Build skills](https://learn.chatgpt.com/docs/build-skills): explicit
  `$skill-creator` starts a conversational workflow for purpose, triggers
  and instructions/resources. Repository discovery includes `.agents/skills/`.
- [Subagents](https://learn.chatgpt.com/docs/agent-configuration/subagents):
  request delegation directly; reuse project roles via `.codex/agents/*.toml`.
  Required keys: name, description, developer_instructions. No-edit guidance
  does not replace inherited parent permissions. One-off delegation and
  persistent custom-role authoring are different actions.

S63/S68 use Korean educational requests and editable document diagrams.
No actual file generation, installed Skill/Agent, delegated execution,
loading test or successful outcome is claimed. Do not replay these as
TRIAL-008 authoring history. Current client/account behavior remains a
delivery gate. No model/API/framework examples or version-specific model
selection are needed to explain the starting path.

Local source files in the training repository are presentation authoring
code only. No `.codex/agents` or `.agents/skills` setup is installed by this
revision. See [design](../../plan/CODEX_AUTHORING_TIPS.md).
