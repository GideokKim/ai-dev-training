# Codex 인터페이스의 실행 모델, 권한, Git 및 Worktree

조사일: 2026-09-25  
범위: STEP 03 §§25–27. OpenAI Codex 공식 문서와 Git 공식 문서를 확인했다.  
해석 원칙: 제품 동작, 문서상 공백, 교육상 권고, 회사 정책 확인 필요 항목을 구분한다. Codex 기능은 변할 수 있으므로 실제 자료 제작 때 최신 공식 문서를 다시 확인한다.

## 25. Local vs Cloud Execution Research

### Takeaway

Local과 Cloud의 핵심 차이는 작업 파일과 명령이 실행되는 환경이다. Cloud 작업은 연결된 저장소를 격리된 환경에 checkout하며 준비 단계와 에이전트 단계의 네트워크·비밀 정보 취급이 다르다. 이를 모델 추론 자체가 로컬에서 수행된다는 뜻으로 설명해서는 안 된다.

### Cited Findings

- ChatGPT 데스크톱 Codex에서 Local은 현재 프로젝트 디렉터리에서, Worktree는 Git worktree에서, Cloud는 구성된 원격 환경에서 실행된다. Local과 Worktree는 사용자의 컴퓨터에서 실행된다. 이는 코드 명령의 위치를 설명하며 모델 추론의 위치까지 로컬이라고 말하지 않는다. [Codex environments](https://learn.chatgpt.com/docs/environments/modes)
- Codex CLI는 프로젝트 디렉터리에서 시작해 로컬 저장소를 살펴보고 수정하며 명령을 실행하는 터미널 인터페이스다. CLI는 로컬 컴퓨터에 설치된 도구를 사용한다. IDE 확장도 코드 옆에서 사용하는 로컬 Codex 인터페이스다. [Codex CLI](https://developers.openai.com/codex/cli/features)
- 데스크톱 앱의 Local environments 설정은 Worktree 준비 스크립트와 프로젝트 공통 동작을 구성한다. 앱은 설정을 프로젝트 루트의 .codex 아래에 저장할 수 있고, 새 Worktree를 만들 때 의존성 설치나 빌드 스크립트를 실행할 수 있다. [Local environments](https://learn.chatgpt.com/docs/environments/local-environment)
- Codex Cloud 설정은 GitHub 또는 GitLab(Beta) 연결, 저장소 선택, 환경 구성 순서다. Cloud chat을 시작하면 컨테이너가 선택한 저장소의 브랜치 또는 commit SHA를 checkout하고 setup script를 실행한다. 에이전트는 이 환경에서 터미널 명령을 반복 실행하고 변경 diff를 반환한다. [Codex cloud](https://learn.chatgpt.com/docs/cloud), [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment)
- Cloud의 기본 universal 이미지는 일반적인 언어·패키지·도구를 포함한다. 런타임 버전을 고정하거나 공통 패키지 매니저 자동 설치를 사용하거나 custom setup/maintenance script로 도구와 의존성을 설치할 수 있다. [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment)
- Cloud 준비/setup 단계는 인터넷에 접근할 수 있지만, 에이전트 단계는 기본적으로 인터넷이 꺼져 있다. 환경별로 에이전트 인터넷을 켜고 허용 도메인과 HTTP method를 제한하거나 제한 없이 둘 수 있다. [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment), [Agent internet access](https://learn.chatgpt.com/docs/cloud/internet-access)
- Cloud 환경의 environment variables는 setup 및 agent 단계 모두에서 사용할 수 있다. Secrets는 추가 암호화되어 task 실행 때만 복호화되지만 setup script에서만 쓸 수 있고 agent 단계 전에 제거된다. [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment)
- Cloud 작업 결과는 요약과 변경 diff로 검토하고 후속 수정이나 PR을 요청할 수 있다. GitHub/GitLab 연결 권한과 환경 설정에 따라 실제 통합 동작은 달라진다. [Codex cloud](https://learn.chatgpt.com/docs/cloud)

### Inferences

- Build/Test 성공은 실행한 코드 버전, 설치된 의존성, 런타임 버전, 네트워크 정책, setup/cache 상태의 조합에서 해당 명령이 성공했다는 증거다. 로컬·Cloud·CI·production이 같은 조건임을 입증하지 않는다. 이는 Cloud가 선택한 branch/SHA를 checkout하고 자체 컨테이너 및 setup을 사용한다는 문서에서 따르는 제한적 해석이다. [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment)
- Local은 호스트에 설치된 명령과 로컬 프로젝트 설정에 접근하고, Cloud는 기본 이미지 및 Cloud environment 설정으로 사용할 도구를 정한다. 따라서 두 환경의 tool availability가 같다고 가정하지 말고, 실행 위치, 실제 도구·버전, 검증 명령을 함께 확인하는 설명이 정확하다. [Codex CLI](https://developers.openai.com/codex/cli/features), [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment)
- 교육에서는 Local을 “내가 연 프로젝트/개발 환경에서 명령 실행”, Cloud를 “연결된 원격 저장소를 격리된 컨테이너에 checkout해 작업”으로 구분할 수 있다. ‘Local’이라는 UI 표시는 모델까지 내 장비에 있다는 보증이 아니다. 해당 문서들은 이 표시만으로 모델 추론 위치나 매 요청에서 어떤 파일 내용이 전송되는지 단정하도록 뒷받침하지 않는다. [Codex environments](https://learn.chatgpt.com/docs/environments/modes)
- Cloud에서 비밀 정보를 agent phase에 노출하지 않아야 하는 경우 일반 environment variable은 적절한 secret 경계가 아니다. setup 전용 secret이 agent에 자동 전달되는 것도 아니므로, agent가 실제로 사용할 권한은 회사의 별도 보안 절차에 따라 확인한다. [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment)

### Gaps

- 공개 문서는 Local/Cloud의 모든 기본 도구와 버전이 언제나 같다고 보장하지 않는다. Cloud에서 런타임·의존성을 고정할 수 있지만 사용자 호스트와의 완전한 재현성은 별도 확인이 필요하다. [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment)
- 회사 저장소의 허용 범위, 사설 네트워크·패키지 미러, 사용할 수 있는 비밀 정보, 데이터 반출 규칙은 공개 제품 문서로 결정할 수 없다. 이는 OpenAI 제품 동작이 아니라 회사 관리자 및 보안 담당자에게 확인할 항목이다.
- 이 보고 범위에서는 Local 요청별 모델 데이터 전송의 세부사항을 확인하지 않았다. 따라서 “로컬 실행이므로 코드가 절대 장비 밖으로 나가지 않는다”라고 교육하지 않는다.

## 26. Sandbox / Permission / Approval Research

### Takeaway

Sandbox는 명령이 파일과 네트워크에 기술적으로 접근할 수 있는 범위를 정하고, approval policy는 경계를 넘는 동작을 언제 사람 또는 자동 reviewer에게 보낼지를 정한다. 명령 이름만으로 보편적인 허용/차단 목록이 적용된다고 설명하기보다 실행 표면, 대상 경로, 네트워크, credential, 선택된 권한 프로필을 함께 확인해야 한다.

### Cited Findings

- OpenAI는 sandbox와 approval을 별도이지만 함께 동작하는 제어로 설명한다. Sandbox는 명령이 쓸 수 있는 파일과 네트워크를 제한하며 approval은 sandbox 밖의 파일 편집, 네트워크 사용 등 특정 경계 요청에서 멈추게 한다. 로컬 CLI/IDE에서는 OS 수준 메커니즘을 사용하고, 자식 프로세스로 실행되는 git, package manager, test runner에도 sandbox 경계가 적용된다. [Agent approvals & security](https://learn.chatgpt.com/docs/agent-approvals-security), [Sandbox](https://learn.chatgpt.com/docs/sandboxing)
- 로컬의 흔한 sandbox mode는 read-only, workspace-write, danger-full-access다. Workspace-write는 프로젝트 workspace 안에서 파일을 읽고 쓰며 routine command를 실행할 수 있다. Danger-full-access는 filesystem 및 network sandbox 경계를 제거한다. [Sandbox](https://learn.chatgpt.com/docs/sandboxing)
- On-request는 sandbox 안에서 허용된 명령은 실행하고 경계 밖 요청에서 approval을 받는다. Never는 approval prompt 없이 동작한다. 전체 권한(full access)은 danger-full-access와 never를 함께 쓰는 구성으로 문서화되어 있다. 현재 Codex/ChatGPT Work는 예전 untrusted approval policy 값을 지원하지 않는다. [Sandbox](https://learn.chatgpt.com/docs/sandboxing), [Agent approvals & security](https://learn.chatgpt.com/docs/agent-approvals-security)
- 기본 workspace-write의 writable root 아래에도 보호된 경로가 있다. .git, .agents, .codex는 재귀적으로 read-only 처리된다. 그러므로 일반 CLI shell에서 repository 파일 편집과 .git metadata 쓰기(예: commit/index 변경)는 같은 허용 동작이라고 보장할 수 없다. [Agent approvals & security](https://learn.chatgpt.com/docs/agent-approvals-security)
- 로컬 네트워크 접근은 기본적으로 꺼져 있고, sandbox·네트워크 설정은 구성 가능하다. 사용자는 CLI의 /permissions, 앱·IDE의 composer 아래 권한 메뉴에서 프로필을 선택한다. 조직 요구사항이나 로컬 설정에 따라 일부 모드는 표시되지 않거나 비활성화될 수 있다. [Permissions](https://learn.chatgpt.com/docs/permissions), [Sandbox](https://learn.chatgpt.com/docs/sandboxing)
- 데스크톱의 Ask for approval은 workspace 내 읽기/수정과 routine local command를 허용하고 인터넷 또는 workspace 경계를 벗어나면 사용자에게 묻는다. Approve for me/Auto-review는 적용 가능한 approval을 별도 reviewer agent로 보내며 sandbox 범위를 넓히지 않는다. Full access는 더 넓은 파일 편집 및 네트워크 명령을 approval 없이 허용할 수 있다. [Permissions](https://learn.chatgpt.com/docs/permissions), [Auto-review](https://learn.chatgpt.com/docs/sandboxing/auto-review)
- Cloud task는 사용자 컴퓨터가 아니라 OpenAI-managed 격리 컨테이너에서 실행된다. Setup 단계는 의존성 설치를 위해 인터넷을 사용할 수 있고, agent 단계는 기본 offline이며 environment별 network policy로 제한적으로 허용할 수 있다. 데스크톱 Local의 /permissions나 OS sandbox를 Cloud task가 그대로 사용한다고 문서화되어 있지 않다. [Agent approvals & security](https://learn.chatgpt.com/docs/agent-approvals-security), [Agent internet access](https://learn.chatgpt.com/docs/cloud/internet-access)
- Cloud environment variable은 agent phase에도 전달되지만 Cloud secret은 setup 단계에서만 사용할 수 있다. 그러므로 일반 environment variable을 secret이라고 부르거나 approval prompt만으로 비밀 정보가 안전하게 격리된다고 설명하면 부정확하다. [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment)
- Auto-review는 경계 요청의 reviewer를 바꾸는 기능이며 절대적 보안 보장이 아니다. OpenAI 문서는 민감 정보 외부 전송, credential 탐색, 넓은 보안 약화, 상당한 비가역적 손상을 낳는 파괴 동작 등을 reviewer가 차단하도록 설계되었다고 설명하면서 오류 가능성과 조직별 정책·sandbox 보완 필요도 명시한다. [Auto-review](https://learn.chatgpt.com/docs/sandboxing/auto-review)

### Inferences

- rm, git reset, git push, deployment 각각에 Codex가 언제나 동일한 명령별 차단 규칙을 적용한다고 설명할 근거는 확인되지 않았다. rm의 영향은 경로와 filesystem scope에, git reset의 영향은 선택된 reset 형식과 repository 상태에, git push의 외부 영향은 remote·credential·network 허용에, deployment는 실행 환경과 권한·대상에 달려 있다. Approval은 sandbox 경계 제어이지 회사의 배포 승인 체계를 대신하지 않는다. [Sandbox](https://learn.chatgpt.com/docs/sandboxing), [Agent approvals & security](https://learn.chatgpt.com/docs/agent-approvals-security)
- 기본 로컬 프로필에서는 .git read-only 보호가 있으므로 CLI가 수행하는 commit/reset/index 쓰기는 추가 권한 요청이나 실패 가능성을 고려해야 한다. 반면 Desktop의 Codex-managed Worktree UI는 branch 생성, commit, push, PR 동작을 별도로 제공한다. 두 인터페이스를 하나의 “git 명령은 전부 허용/차단” 규칙으로 합치지 않는다. [Agent approvals & security](https://learn.chatgpt.com/docs/agent-approvals-security), [Worktrees](https://learn.chatgpt.com/docs/environments/git-worktrees)
- Git push와 deployment는 로컬·Cloud에서 네트워크, remote/API 권한, 선택된 자격 증명이 맞아야 가능하다. Cloud agent internet 기본 OFF는 GitHub/GitLab 통합의 PR/branch 권한과 같은 설정이 아니다. 교육에서는 shell egress와 저장소 통합 권한을 별개로 설명한다. [Agent internet access](https://learn.chatgpt.com/docs/cloud/internet-access), [Codex cloud](https://learn.chatgpt.com/docs/cloud)
- 업무 책임은 위험한 명령을 금기어처럼 가르치는 대신 실행 전에 명령의 정확한 대상과 부수효과를 검토하고, 필요한 범위만 승인하며, 작업 전 Git 상태/복구점을 확인하고, 변경 diff·검증 결과를 확인하는 습관에 둘 수 있다. OpenAI도 좁은 permission scope, project boundary, 변경 검토를 권한다. [Sandbox](https://learn.chatgpt.com/docs/sandboxing), [Codex CLI](https://developers.openai.com/codex/cli/features)
- Production credential과 배포 권한은 product sandbox 설정과 별개의 회사 접근통제·승인사항으로 표시해야 한다. 조직의 명시적 규칙을 확인하기 전까지 교육 자료에서 구체 정책을 만들지 않는다.

### Gaps

- 공식 문서는 rm 또는 git reset을 모든 인터페이스·모든 권한 모드에서 한결같이 차단하는 명령별 목록을 제공하지 않는다. 제품별 화면에서 해당 명령을 수행할 경우 approval prompt의 설명과 범위를 확인해야 한다.
- 회사가 허용하는 production 접근, 배포 credential, branch protection, 외부 egress, Cloud secret 사용은 확인되지 않았다. 이 항목은 OpenAI 기본 설정에서 추론하지 말고 회사 담당자에게 별도 확인한다.
- 사용자별 OS·IDE·앱 버전, 조직의 강제 요구사항, Cloud 환경 네트워크 allowlist가 다를 수 있어 모든 수강자의 승인 화면이 같다고 보장할 수 없다. [Permissions](https://learn.chatgpt.com/docs/permissions), [Agent approvals & security](https://learn.chatgpt.com/docs/agent-approvals-security)

## 27. Git / Worktree Research

### Takeaway

Codex는 Git 저장소를 Local/Cloud 작업 및 Worktree 기능에 활용하고, 변경 diff를 검토하거나 branch·commit·push·PR 흐름에 참여할 수 있다. Worktree는 병렬 변경의 격리를 돕는 선택 기능이며 모든 Harness에 필수인 것은 아니다. 병렬 Subagent의 파일시스템 격리는 공개 문서로 확인되지 않았다.

### Cited Findings

- Codex CLI는 현재 폴더가 version-controlled인지 감지하고, version-controlled folder에는 Auto(workspace-write + on-request approvals), 그 외에는 read-only를 추천할 수 있다. /status로 workspace에 포함된 경로를 확인할 수 있다. [Agent approvals & security](https://learn.chatgpt.com/docs/agent-approvals-security)
- Codex Cloud에서는 GitHub 저장소 접근 권한을 연결하고 환경을 저장소에 연결한다. Cloud 작업은 선택된 저장소 branch 또는 commit SHA를 checkout하고 완료 뒤 변경 요약과 diff를 제공한다. GitHub/GitLab 통합에서 PR/MR 기반 작업을 시작할 수 있다. [Codex cloud](https://learn.chatgpt.com/docs/cloud), [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment)
- Git Worktree는 Git 저장소가 필요하다. Codex desktop은 Local, Worktree, Cloud를 시작 모드로 제시하며, Worktree를 고르면 출발 branch를 선택해 별도 checkout을 만든다. 기본은 detached HEAD이고 사용자가 Create branch here로 branch를 만들 수 있다. [Codex environments](https://learn.chatgpt.com/docs/environments/modes), [Worktrees](https://learn.chatgpt.com/docs/environments/git-worktrees)
- Worktree마다 파일 복사본이 있지만 Git metadata를 공유한다. Codex-managed Worktree에서 변경 사항을 branch로 만들고 commit, push, GitHub PR을 할 수 있다. Local과 Worktree 사이 Handoff는 필요한 Git 동작을 처리한다. Git은 같은 branch를 동시에 두 worktree에 checkout하지 못하게 한다. [Worktrees](https://learn.chatgpt.com/docs/environments/git-worktrees), [Git worktree](https://git-scm.com/docs/git-worktree)
- Cloud는 diff 확인 및 PR 열기 흐름을 제공한다. 로컬 CLI는 변경 검토를 지원하고 Git 명령은 sandbox 경계 아래에서 실행된다. 기본 workspace-write에서 .git은 read-only 보호 대상이므로 CLI 직접 Git metadata 수정과 desktop의 Codex-managed Git 동작은 구분한다. [Codex cloud](https://learn.chatgpt.com/docs/cloud), [Codex CLI](https://developers.openai.com/codex/cli/features), [Agent approvals & security](https://learn.chatgpt.com/docs/agent-approvals-security)
- Subagent 문서는 병렬 Subagent의 읽기 중심 작업을 출발점으로 권하며, write-heavy 병렬 작업은 동시 편집 충돌과 조정 비용을 높일 수 있다고 설명한다. 이는 주의 권고이지 동일 파일 자동 병합 보장은 아니다. [Subagents](https://learn.chatgpt.com/docs/agent-configuration/subagents)
- 서로 다른 branch에서 같은 파일의 같은 부분이 다르게 바뀌면 Git은 자동 병합하지 못하고 conflict를 표시한다. conflict 상태는 git status로 확인하고 사람이 내용을 해결한 뒤 stage하고 merge/commit을 완료한다. 같은 파일을 수정했다는 사실만으로 항상 conflict가 생기는 것은 아니다. [Git: Basic branching and merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging), [git-merge](https://git-scm.com/docs/git-merge), [git-status](https://git-scm.com/docs/git-status)
- Git Worktree는 제품 전체의 필수 기반이 아니다. Codex Local은 현재 프로젝트 디렉터리에서 동작할 수 있고, Worktree는 Git 저장소에서 병렬 대화의 checkout을 격리할 때 선택하는 방법이다. [Codex environments](https://learn.chatgpt.com/docs/environments/modes), [Worktrees](https://learn.chatgpt.com/docs/environments/git-worktrees)

### Inferences

- 병렬 구현 때 작업별 파일 책임을 나누거나 별도 branch/worktree에서 작업한 뒤 통합 diff와 테스트를 검토하는 방식은 동시 편집으로 인한 덮어쓰기 및 통합 문제를 줄일 수 있다. 이는 Worktree의 별도 파일 복사본 및 Subagent 문서의 write-heavy 주의에서 따르는 권고다. [Worktrees](https://learn.chatgpt.com/docs/environments/git-worktrees), [Subagents](https://learn.chatgpt.com/docs/agent-configuration/subagents)
- “서로 다른 파일이면 항상 안전” 또는 “같은 파일이면 반드시 conflict”라고 말하면 부정확하다. 같은 branch/working tree를 동시에 쓰면 파일 변경 경합이나 내용 덮어쓰기가 생길 수 있고, 별도 branch에서 같은 파일을 변경하면 Git merge가 성공할 수도, 동일 hunk에서 conflict가 날 수도 있다. 변경 영역과 의미 충돌은 diff 및 테스트로 확인해야 한다. [Subagents](https://learn.chatgpt.com/docs/agent-configuration/subagents), [Git: Basic branching and merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)
- Worktree는 여러 독립 chat에서 동시에 작업하거나 현재 checkout을 방해하지 않으려는 경우 유용하다. 단일 Local 작업, Git이 없는 프로젝트, 다른 isolation 방식이 있는 환경에 필수라고 일반화할 근거는 없다. [Codex environments](https://learn.chatgpt.com/docs/environments/modes), [Worktrees](https://learn.chatgpt.com/docs/environments/git-worktrees)
- Course Harness는 Worktree를 필수 구성요소가 아닌 병렬 작업 시 활용할 수 있는 하나의 격리 도구로 설명하는 것이 근거와 맞는다. 중요한 것은 작업 위험에 맞는 격리 전략 선택, 통합, 최종 검증이다.

### Gaps

- 공식 Subagent 문서는 병렬 작업의 이점과 write-heavy 변경의 충돌 위험을 다루지만, 같은 Local parent turn의 각 Subagent가 별도 filesystem/worktree를 받는지 명시하지 않는다. 따라서 Subagent가 자동으로 독립 Worktree에서 실행된다고 교육하지 않는다. Worktree 격리는 Codex desktop의 여러 Worktree chat에 대해 문서화되어 있다. [Subagents](https://learn.chatgpt.com/docs/agent-configuration/subagents), [Worktrees](https://learn.chatgpt.com/docs/environments/git-worktrees)
- Codex GUI가 conflict를 언제 자동 통합하고 언제 사용자에게 넘기는지 모든 인터페이스에 통용되는 완전한 규칙은 문서화되어 있지 않다. 실제 강의 시연 전에 선택한 Desktop/CLI/Cloud 버전에서 확인한다.
- 회사의 branching, protected branch, commit signing, PR review, push 및 deploy 권한 정책은 OpenAI Git 기능과 별도다. 본 조사에서는 회사 정책을 정하지 않는다.
