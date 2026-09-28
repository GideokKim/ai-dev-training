# Product Capability Matrix

> Most checked values reflect STEP 03 notes/reports as of 2026-09-25. `AGENTS.md` and nested instruction scope were rechecked against SRC-0110 on 2026-09-28. “Official Support” is not company approval. “Demo Candidate” assumes a future demo repository and target account still need confirmation.

Classification: `YES` means the documented behavior is supported within the
stated scope; `PARTIAL` means support depends on interface, account, setup,
permissions, or other conditions; `NO` means official evidence says it is not
supported; `UNCLEAR` means support was not established by this research. Demo
Candidate `YES` / `MAYBE` / `NO` describes suitability for a future course demo,
not availability in the target workspace. No row is classified `NO` or
`UNCLEAR` because the listed behaviors have documented support or documented
conditional scope; unresolved target-workspace access is captured separately.

| Capability | Official Support | Interface | Evidence | Confidence | Demo Candidate | Volatility |
|------------|------------------|-----------|----------|------------|----------------|------------|
| Repository exploration | YES | Codex CLI, Desktop, IDE, Cloud; ChatGPT GitHub read-only context is separate | SRC-0103, SRC-0104, SRC-0105, SRC-0133 | HIGH | YES | HIGH |
| File read | YES | Codex Local/Worktree/Cloud within permissions; ChatGPT GitHub read-only for selected repos | SRC-0103, SRC-0105, SRC-0106, SRC-0133 | HIGH | YES | HIGH |
| File edit | YES | Codex Local/Worktree/Cloud within sandbox/approval and repository access | SRC-0103, SRC-0105, SRC-0107, SRC-0109 | HIGH | YES | HIGH |
| Command execution | YES | Codex CLI/Desktop local; Codex Cloud container | SRC-0103, SRC-0105, SRC-0106 | HIGH | YES | HIGH |
| Build | PARTIAL | Same as command execution; depends on toolchain/setup/dependencies | SRC-0103, SRC-0105 | MEDIUM | MAYBE | HIGH |
| Test | PARTIAL | Same as command execution; depends on repo test suite and environment | SRC-0103, SRC-0105, SRC-0139 | MEDIUM | MAYBE | HIGH |
| Web search | PARTIAL | ChatGPT/Codex web search; not same as shell/cloud network | SRC-0115, SRC-0124 | HIGH | MAYBE | HIGH |
| AGENTS.md | YES | Codex run-start instruction chain includes global and repository guidance | SRC-0110 | HIGH | YES | MEDIUM |
| Nested instructions | YES | Root-to-current-directory discovery; at most one selected instruction file per directory | SRC-0110 | HIGH | YES | MEDIUM |
| Skills | YES | Codex/ChatGPT supported surfaces, subject to feature availability | SRC-0111, SRC-0117 | MEDIUM | MAYBE | HIGH |
| Subagents | YES | Codex supported surfaces, subject to account/admin availability | SRC-0112 | MEDIUM | MAYBE | HIGH |
| Parallel agents | PARTIAL | Subagents and parallel Desktop/Cloud/worktree workflows; task independence matters | SRC-0112, SRC-0123, SRC-0219 | MEDIUM | MAYBE | HIGH |
| Memory | YES | Codex Memory where available/admin-allowed | SRC-0113 | MEDIUM | MAYBE | HIGH |
| Persistent project context | PARTIAL | `AGENTS.md`, project docs, Memory, local env config; not one universal guarantee | SRC-0110, SRC-0113, SRC-0135 | MEDIUM | MAYBE | HIGH |
| Worktree | YES | Codex Desktop/Local worktree mode for Git repositories | SRC-0123, SRC-0106 | HIGH | YES | MEDIUM |
| Git diff | YES | Codex diff display/review workflows | SRC-0103, SRC-0105, SRC-0122 | HIGH | YES | MEDIUM |
| Code review | YES | `/review`, GitHub PR review, ChatGPT Work code review contexts differ | SRC-0121, SRC-0122, SRC-0134 | HIGH | YES | HIGH |
| MCP / external tools | PARTIAL | MCP/Plugins/Apps subject to workspace/provider permissions | SRC-0116, SRC-0117, SRC-0131 | MEDIUM | MAYBE | HIGH |
| Cloud execution | YES | Codex Cloud configured environment | SRC-0105, SRC-0106 | HIGH | MAYBE | HIGH |
| Local execution | YES | Codex Local/Worktree on user computer for files/commands | SRC-0103, SRC-0106, SRC-0135 | HIGH | YES | HIGH |
| Task resume | PARTIAL | CLI/Desktop task continuation exists in product docs/notes, exact availability varies by surface | SRC-0103, SRC-0102 | MEDIUM | MAYBE | HIGH |
| Automation | PARTIAL | `codex exec`, hooks, GitHub Action, scheduled/triggered workflows; not equivalent to Loop Engineering | SRC-0118, SRC-0119, SRC-0120 | MEDIUM | MAYBE | HIGH |
