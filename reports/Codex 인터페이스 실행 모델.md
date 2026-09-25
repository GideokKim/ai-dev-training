# Codex 표면은 실행 경계를 드러낸다

2026-09-25 기준으로 확인한 결론은 단순하다. **Codex는 하나의 UI가 아니라 여러 실행 표면과 권한 모델의 묶음**이며, 교육에서는 “Codex = Desktop 화면” 또는 “Codex = Cloud”처럼 설명하면 안 된다. ChatGPT Work/web, ChatGPT desktop app의 Codex view, Codex cloud, CLI, IDE extension은 서로 겹치는 개념을 쓰지만 저장소 접근, 명령 실행 위치, 네트워크, 승인, Git 흐름이 다르다([ChatGPT Work and Codex](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex), [Codex environments](https://learn.chatgpt.com/docs/environments/modes)). 이 차이는 UI 사용법보다 교육적으로 더 중요하다. 개발자는 AI에게 코드를 “보여주는” 수준을 넘어, 어느 환경에서 어떤 파일과 명령과 외부 도구를 쓰게 하는지 판단해야 하기 때문이다. 이 보고서는 STEP 03의 21–30번 조사만 합성하며, 이후 섹션이 오면 별도 근거로 이어져야 한다. 제품 가용성, 플랜, workspace role, 관리자 정책, 계정별 rollout은 모두 변동성이 높고, 회사 보안·데이터 정책은 아직 미확정이다.

## Codex는 네 종류의 작업 표면으로 나뉜다

교육에서 가장 먼저 막아야 할 오해는 **“Codex를 보여준다”가 곧 특정 화면 하나를 보여준다는 뜻이 아니라는 점**이다. ChatGPT desktop app은 ChatGPT와 Codex를 한 앱 안에 담지만 Codex view와 ChatGPT Chat/Work history는 구분된다. 기존 Codex app은 새 ChatGPT desktop app으로 이동하는 흐름이 문서화되어 있고, macOS·Windows·Linux preview의 지원 상태와 기능 차이는 계속 바뀔 수 있다([Moving to the new ChatGPT desktop app](https://help.openai.com/en/articles/20001276-moving-to-the-new-chatgpt-desktop-app), [Linux app preview](https://learn.chatgpt.com/docs/linux/linux-app)). 이 표면은 local repository, 터미널, diff, Git review, worktree, 여러 task 관리를 보여주기에 좋지만, sidebar나 버튼 위치 같은 UI 자체를 교육의 중심으로 만들면 곧 낡을 가능성이 높다.

Codex CLI는 같은 agentic development 개념을 terminal-native 방식으로 보여준다. 공식 quickstart는 macOS, Linux, Windows, npm, Homebrew 설치 경로를 제시하고, Windows에서는 native 경로와 WSL2 경로를 구분해야 한다([Codex CLI](https://developers.openai.com/codex/cli), [Windows WSL guide](https://learn.chatgpt.com/docs/windows/wsl)). CLI는 현재 저장소를 읽고 수정하며 로컬 명령을 실행하고, AGENTS.md, Skills, subagents, resume, `codex exec` 같은 automation 경로와 연결된다([AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md), [Non-interactive mode](https://learn.chatgpt.com/docs/non-interactive-mode)). 교육 목적상 CLI는 명령어 암기가 아니라, 같은 작업 원칙이 Desktop 화면 밖에서도 유지된다는 보조 증거로 쓰는 편이 맞다.

IDE extension은 개발자 교육에서 매력적인 표면이지만, 가장 쉽게 과잉 일반화되는 영역이기도 하다. OpenAI 문서는 VS Code, VS Code Insiders, Cursor, Windsurf용 Codex extension을 안내하고, Xcode와 JetBrains는 각각 별도 통합으로 구분한다([Codex IDE extension](https://developers.openai.com/codex/ide), [Using OpenAI models in Cursor](https://help.openai.com/en/articles/20001506-using-openai-models-in-cursor), [JetBrains Codex agent](https://www.jetbrains.com/help/ai-assistant/codex-agent.html)). IDE 안에서는 열린 파일, 선택 영역, editor context, 수정 diff, cloud handoff 같은 흐름을 보여줄 수 있다. 그러나 Cursor의 자체 Agent, JetBrains AI Assistant, Xcode Coding Assistant, VS Code extension은 같은 제품 경험이 아니다. 다양한 개발 환경을 쓰는 교육생에게는 특정 IDE 버튼보다 repository context, 조사, 변경, 실행, diff review라는 공통 구조를 가르치는 것이 더 범용적이다.

Codex cloud는 ChatGPT Work web과도 분리해야 한다. ChatGPT Work는 문서·조사·deliverable 중심의 일반 작업 표면이고, Codex cloud는 연결된 GitHub 또는 GitLab(Beta) 저장소를 OpenAI-managed cloud container에 checkout해 코드 작업을 수행하는 표면이다([ChatGPT Work and Codex](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex), [Codex cloud](https://developers.openai.com/codex/cloud), [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment)). 따라서 “웹에서 Codex를 쓴다”라는 말만으로는 실행 위치와 파일 권한을 설명할 수 없다. ChatGPT mobile Remote도 local repository를 모바일에서 직접 실행한다는 뜻이 아니라, 연결된 desktop/remote host의 Codex 작업을 확인하고 이어가는 조작 표면으로 봐야 한다([Codex Remote](https://developers.openai.com/codex/remote)).

| 표면 | 교육에서의 핵심 의미 | 주의할 경계 |
| --- | --- | --- |
| ChatGPT desktop app의 Codex view | local repo, terminal, diff, worktree, task 관리 시연 | UI 명칭과 배치가 고변동 |
| Codex CLI | terminal 기반 local agent, config, Skills, automation | Windows native와 WSL2를 분리 |
| IDE extension | editor context와 수정 review의 자연스러운 흐름 | VS Code 계열, Cursor, JetBrains, Xcode를 같은 UX로 말하지 않음 |
| Codex cloud | 연결된 원격 저장소를 cloud container에서 작업 | ChatGPT Work web과 실행 모델이 다름 |
| Remote·third-party integrations | 다른 곳에서 Codex 작업을 시작하거나 이어감 | 모바일·Slack·Linear·GitHub가 local execution을 뜻하지 않음 |

## Local과 cloud의 차이는 모델보다 작업 환경이다

Local과 Cloud를 설명할 때 가장 위험한 문장은 “local이면 내 컴퓨터에서 전부 돈다”이다. 문서가 말하는 local은 **파일과 명령이 사용자의 프로젝트 디렉터리 또는 worktree에서 실행된다는 뜻**이지, 모델 추론이 로컬 장비에서만 수행된다는 뜻으로 확인되지 않았다([Codex environments](https://learn.chatgpt.com/docs/environments/modes), [Codex CLI features](https://developers.openai.com/codex/cli/features)). Local Codex는 사용자의 shell, 설치된 dependency, 환경 변수, 파일 시스템, IDE 상태의 영향을 받는다. Cloud Codex는 선택한 branch 또는 commit SHA를 격리된 컨테이너에 checkout하고, setup script와 environment 설정을 바탕으로 의존성을 준비한 뒤 agent 단계에서 명령을 실행한다([Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment)).

Cloud의 네트워크와 secret 처리는 수업에서 특히 조심해야 한다. Cloud setup 단계는 의존성 설치를 위해 인터넷을 사용할 수 있지만, agent 단계 인터넷은 기본적으로 꺼져 있으며 환경별 정책으로 허용 도메인과 HTTP method를 제한할 수 있다([Agent internet access](https://learn.chatgpt.com/docs/cloud/internet-access)). Environment variable은 setup과 agent 단계 모두에 전달될 수 있지만, Cloud secret은 task 실행 때 복호화되고 setup 단계에서만 쓰이며 agent 단계 전에 제거되는 것으로 문서화되어 있다([Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment)). 그러므로 “Cloud에서 test가 돌았다”는 말은 해당 컨테이너, 해당 setup, 해당 네트워크와 dependency 조건에서 그 명령이 실행됐다는 증거다. 그것이 local, CI, staging, production과 동일한 조건이라는 보장은 아니다.

이 구분은 OQ-005와 OQ-014를 동시에 건드린다. 제품 사실의 일반 윤곽은 공식 문서로 조사됐지만, 실제 교육 계정에서 어떤 surface가 열려 있는지, 어떤 workspace policy가 적용되는지, 회사가 Cloud task에 어떤 저장소·데이터·secret을 허용하는지는 확인되지 않았다. 따라서 교육 자료에는 “OpenAI 제품 문서상 가능”과 “우리 회사 환경에서 허용”을 분리해야 한다. 회사 내부 보안 정책을 OpenAI product behavior로 대체해서는 안 된다.

## Permission과 Git은 개발자 책임을 가르치는 재료다

Codex의 권한 모델은 공포 중심 보안 이야기가 아니라, agentic development에서 개발자가 계속 책임을 유지하는 방법을 보여주는 좋은 재료다. OpenAI 문서는 sandbox와 approval을 분리해 설명한다. Sandbox는 명령이 접근할 수 있는 파일과 네트워크 범위를 제한하고, approval policy는 sandbox 밖 파일 편집, 네트워크 사용, 그 밖의 경계 요청에서 언제 멈추고 승인을 받을지를 정한다([Agent approvals and security](https://learn.chatgpt.com/docs/agent-approvals-security), [Sandboxing](https://learn.chatgpt.com/docs/sandboxing)). 흔한 local mode는 read-only, workspace-write, danger-full-access이며, danger-full-access 또는 `--yolo`류 흐름은 일반 교육 기본값처럼 제시하면 안 된다([Permissions](https://learn.chatgpt.com/docs/permissions)).

`rm`, `git reset`, `git push`, deployment, production credential 같은 항목은 명령 이름만으로 보편 차단 규칙을 설명하기 어렵다. 위험은 대상 경로, remote, credential, 네트워크, branch protection, sandbox mode, approval policy, 회사 배포 절차의 조합에서 생긴다. workspace-write에서도 `.git`, `.agents`, `.codex` 같은 보호 경로가 read-only가 될 수 있고, Desktop의 Codex-managed Git UI와 CLI shell에서 직접 Git metadata를 쓰는 경험은 같지 않다([Agent approvals and security](https://learn.chatgpt.com/docs/agent-approvals-security), [Local environments](https://learn.chatgpt.com/docs/environments/local-environment)). 교육에서는 “모든 권한을 주면 편하다”가 아니라, 필요한 범위만 승인하고 변경 diff와 실행 결과를 확인하며 복구 가능한 Git 상태를 유지하는 습관을 강조하는 편이 근거와 맞다.

Git과 worktree도 Harness의 필수 구성요소가 아니라, 병렬 작업과 isolation을 설명하는 선택 도구다. Codex desktop은 Local, Worktree, Cloud 시작 모드를 제공하고, Worktree를 고르면 Git 저장소의 별도 checkout에서 작업할 수 있다([Git worktrees](https://learn.chatgpt.com/docs/environments/git-worktrees)). Git 자체도 하나의 저장소에 여러 working tree를 둘 수 있지만, 같은 branch를 동시에 여러 worktree에 checkout하지 못하게 하는 등 자체 제약이 있다([git-worktree](https://git-scm.com/docs/git-worktree)). 병렬 agent가 같은 파일을 바꿀 때 생기는 문제는 “같은 파일이면 항상 conflict” 또는 “다른 파일이면 항상 안전”으로 단순화할 수 없다. Git merge는 동일 hunk 변경에서 conflict를 표시할 수 있고, 의미 충돌은 diff와 test로 확인해야 한다([Git branching and merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging), [git-merge](https://git-scm.com/docs/git-merge)).

따라서 향후 Demo에서 worktree를 쓰더라도 “좋은 Harness는 반드시 worktree를 쓴다”고 가르치면 과장이다. 더 정확한 메시지는 **작업 위험과 병렬성에 맞는 격리 방식을 선택하고, 통합 diff와 verification으로 마무리한다**는 것이다. 이 해석은 OQ-007을 열어 둔다. 실제 build, test, benchmark, review 명령과 성공 기준은 교육용 repository가 선택된 뒤에만 확정할 수 있다.

## Web, MCP, Plugins는 context 통로이지 진실 보증이 아니다

Codex는 외부 지식을 사용할 수 있지만, search와 shell network를 같은 것으로 설명하면 안 된다. Local Codex chat, CLI, IDE extension은 Codex Web Search를 사용할 수 있고, CLI에는 `--search` 및 `web_search` transcript/JSON 출력 흐름이 문서화되어 있다([Web search in ChatGPT and Codex](https://learn.chatgpt.com/docs/web-search), [Codex CLI](https://developers.openai.com/codex/cli)). Web Search mode에는 cached, indexed, live, disabled가 있으며, 이 search 경로는 local sandboxed shell command의 네트워크 접근과 분리된다([Web search in ChatGPT and Codex](https://learn.chatgpt.com/docs/web-search)). 반대로 Codex Cloud의 agent internet access는 cloud container의 agent 단계 egress 정책이다([Agent internet access](https://learn.chatgpt.com/docs/cloud/internet-access)). “웹 검색 가능”과 “shell에서 인터넷 가능”과 “Cloud agent가 외부 사이트에 접근 가능”은 서로 다른 주장이다.

외부 검색 결과는 repository context보다 항상 우월한 답이 아니다. 최신 API나 library behavior를 조사할 때 안전한 수업 메시지는 “공식·version-matched 문서를 우선 찾고, URL·확인일·버전을 기록하며, repository lockfile·wrapper·현재 구현과 대조한 뒤 작은 검증을 실행한다”이다. OpenAI 문서도 Web Search와 remote MCP 결과가 prompt injection을 포함할 수 있는 untrusted input이 될 수 있음을 경고하고, tool call logging, URL 확인, validation, approval control을 권한다([Deep Research safety guidance](https://developers.openai.com/api/docs/guides/deep-research), [MCP servers for the Responses API](https://developers.openai.com/api/docs/guides/tools-connectors-mcp)). “모르면 AI에게 먼저 조사시키자”는 맞는 메시지지만, “AI가 조사했으니 맞다”가 아니라 “AI에게 출처를 찾게 하고 사람이 근거와 재현을 확인한다”로 가르쳐야 한다.

Tools, MCP, Plugins, Skills, hooks도 층위가 다르다. MCP는 Codex와 ChatGPT에서 외부 도구와 context를 연결하는 지원 방식이며, desktop app, CLI, IDE extension은 같은 Codex host의 MCP configuration을 공유할 수 있다([MCP in Codex and ChatGPT](https://learn.chatgpt.com/docs/extend/mcp)). Plugins는 ChatGPT와 Codex의 지원 surface에서 쓰이는 installable package이며, Skills, MCP servers/connectors, optional UI, Codex hooks 등을 묶을 수 있다([Plugins](https://learn.chatgpt.com/docs/plugins), [Plugins in ChatGPT and Codex](https://help.openai.com/en/articles/20001256-plugins-in-chatgpt-and-codex)). Skills는 반복 가능한 지침과 optional resource/script를 담는 workflow 단위이고, hooks는 PreToolUse, PostToolUse, Stop, SessionEnd 같은 lifecycle 지점에서 script나 MCP tool을 실행하는 자동화 지점이다([Build skills](https://learn.chatgpt.com/docs/build-skills), [Hooks](https://learn.chatgpt.com/docs/hooks)).

이 구분은 Harness Architecture를 더 깨끗하게 만든다. MCP는 tool protocol과 external context/action의 통로이고, Plugin은 배포·설치 package이며, Skill은 반복 workflow instruction이고, hook은 정해진 lifecycle point의 자동 실행이다. 이 네 가지 중 어느 것도 필수 Harness 구성요소는 아니다. 교육용 Demo에서 외부 tool을 넣으면 “repository context 밖의 근거를 끌어온다”는 점을 강화할 수 있지만, issue tracker, 문서 저장소, database, browser, CI, internal service를 한꺼번에 연결하면 Story가 기능 투어로 흐를 위험이 크다. OQ-008은 그래서 아직 열려 있어야 한다. 실제 Skills/Subagents/Harness 구성은 Demo repository와 관찰된 문제를 보고 결정해야 한다.

## 자동화는 Loop Engineering의 재료일 뿐이다

STEP 03의 30번에서 가장 중요한 결론은 **Automation = Loop Engineering이 아니라는 것**이다. Reusable Instruction은 Skill처럼 같은 작업 방법을 반복 가능하게 만든다([Build skills](https://learn.chatgpt.com/docs/build-skills)). Script 또는 tool automation은 shell script, MCP tool, hook, `codex exec`처럼 정해진 시점이나 명령을 실행한다([Hooks](https://learn.chatgpt.com/docs/hooks), [Non-interactive mode](https://learn.chatgpt.com/docs/non-interactive-mode)). Agent delegation은 subagent에게 조사나 작업 일부를 맡기는 구조다([Subagents](https://learn.chatgpt.com/docs/agent-configuration/subagents)). Scheduled 또는 triggered automation은 시간, desktop schedule, ChatGPT web/mobile의 일부 app event, GitHub Actions, GitHub/GitLab PR/MR integration처럼 “언제 실행할지”를 정한다([Scheduled tasks](https://learn.chatgpt.com/docs/automations), [Codex GitHub Action](https://learn.chatgpt.com/docs/github-action), [GitHub code review](https://learn.chatgpt.com/docs/third-party/github), [GitLab code review](https://learn.chatgpt.com/docs/third-party/gitlab)).

Feedback-driven improvement는 이 네 가지와 다른 층위다. Loop Engineering의 핵심은 반복 실행 자체가 아니라, 실행 결과를 평가하고 원인을 찾아 다음 run 또는 Harness 자체를 바꾸고, 같은 또는 동등한 조건에서 다시 확인하는 것이다. 현재 공식 문서들은 schedule, Skills, hooks, CI runner, GitHub Action, subagents, review integration을 각각 제공하지만, “결과를 자동 채점하고 Harness 지침과 도구를 무검토로 고치며 품질을 보장하는 end-to-end self-improvement”를 보편 제품 기능으로 문서화하지 않는다([Scheduled tasks](https://learn.chatgpt.com/docs/automations), [Hooks](https://learn.chatgpt.com/docs/hooks), [Codex GitHub Action](https://learn.chatgpt.com/docs/github-action)). 따라서 완전 자동 self-improvement를 강의 핵심처럼 말하면 과장이다.

현실적인 Loop Demo는 timer나 GitHub event를 먼저 보여주는 것이 아니라, 작은 실패를 관찰하고, 실패 원인을 지침·Skill·검증 command·tool boundary 중 하나로 좁히고, 변경 diff를 검토한 뒤 같은 과제에서 개선 여부를 비교하는 형태가 더 안전하다. Schedule이나 CI는 그 loop를 반복 실행하게 하는 장치일 수 있지만, loop 자체는 평가와 학습 구조다. 이 보고서는 실제 반복 실패를 관찰하지 않았으므로 OQ-009는 해결되지 않았다. 반복 실패의 원인, 재현 조건, 개선 전후 지표가 생기기 전까지 “Loop가 작동했다”는 주장은 보류해야 한다.

## Open Questions는 더 좁게 정리된다

이번 조사는 일부 Open Question의 근거를 채웠지만, 어떤 질문도 Demo 결정으로 닫지 않는다. OQ-003은 live Demo surface와 account access가 여전히 미정이다. Desktop, CLI, IDE, Cloud의 후보와 제약은 파악했지만, 실제 교육 계정, OS, workspace, network, fallback material은 별도 확인이 필요하다. OQ-005는 공식 문서 기반 제품 사실을 상당 부분 확보했지만, 실제 target environment에서의 노출과 관리자 설정은 검증 전이다. 제품 자료에 넣을 문구는 2026-09-25 확인과 높은 변동성을 표시해야 한다.

OQ-007은 project-specific verification command와 repo가 아직 없어서 열려 있다. Local과 Cloud의 test 의미, Git diff, review, CI 연결 근거는 확보됐지만 어떤 명령을 성공 기준으로 삼을지는 Demo repository가 정해져야 말할 수 있다. OQ-008은 Skills, Subagents, Harness 선택이 Demo와 관찰된 friction에 의존하므로 아직 열려 있다. OQ-009는 실제 반복 실패와 평가 기준이 없어서 해결되지 않았다. OQ-014는 회사 보안·데이터 정책 자료가 없으므로 그대로 미확정이다. 이 보고서가 말할 수 있는 것은 OpenAI 제품 문서상의 권한·secret·network·tool 경계이지, 회사가 무엇을 허용한다는 결정이 아니다.

## Conclusion

이번 조사에서 교육 Story를 바꿀 충돌은 보이지 않았다. 오히려 Chatbot → Prompt → Context → Harness → Loop 흐름은 더 정밀해졌다. Codex는 특정 UI가 아니라 저장소, 명령, 권한, 도구, 외부 지식, Git 작업, 자동화가 만나는 실행 시스템이다. 그래서 교육의 중심은 “어느 버튼을 누르는가”가 아니라 “어떤 환경과 권한에서 어떤 근거로 어떤 변경을 만들고 검증하는가”가 되어야 한다.

다음 단계에서 이 보고서를 Demo 선택으로 바로 바꾸면 빠르지만 위험하다. 먼저 교육용 repository, 대상 계정, OS와 product surface, 회사 보안 정책, 검증 명령을 정해야 한다. 그다음 Desktop, CLI, IDE, Cloud 중 어떤 표면이 Story를 가장 적게 흐리면서 가장 정확하게 보여주는지 선택할 수 있다.
