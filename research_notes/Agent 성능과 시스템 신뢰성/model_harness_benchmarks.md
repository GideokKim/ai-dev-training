# Model Capability, Agent Scaffold, Coding Agent Benchmarks

조사 기준일: 2026-09-25. §§31–33 근거 노트. 공개 벤치마크 점수는 특정
데이터셋·버전·모델 설정·에이전트 설정에서 관찰된 결과로 취급한다.

## 31. Model Capability vs Harness

### Takeaway

저장소 작업 결과는 모델만의 속성이 아니라 모델과 Scaffold/Harness, 지시·저장소
Context, 도구, 실행 환경, 테스트, 사용 가능 예산과 피드백 절차가 결합된 시스템의
결과다. 통제된 실험은 같은 모델에 다른 도구 인터페이스를 제공했을 때 점수가
달라질 수 있음을 보이고, 같은 인터페이스를 고정했을 때 모델 간 차이도 남는다.

### Cited Findings

- SWE-agent 연구는 GPT-4 Turbo를 사용한 SWE-bench Lite 300개 인스턴스에서
  Shell-only 시스템의 해결률 11.00%와 SWE-agent ACI의 18.00%를 보고했다.
  저자들은 같은 GPT-4 Turbo를 쓴 두 설정의 차이를 ACI의 효과로 설명하고
  상대 64% 증가라고 보고한다. 전체 SWE-bench 2,294개에서는 SWE-agent와
  GPT-4 Turbo가 12.47%(286/2,294), 같은 SWE-agent scaffold와 Claude 3 Opus가
  10.46%를 해결했다. 전자는 시스템 인터페이스 차이, 후자는 같은 scaffold에서
  모델 차이가 결과에 영향을 줄 수 있는 사례다. 비교는 논문에 기재된 해당
  설정과 데이터 분할에 한정한다. [SWE-agent, NeurIPS 2024 논문](https://papers.neurips.cc/paper_files/paper/2024/file/5a7c947568c1b1328ccc5230172e1e7c-Paper-Conference.pdf)
- SWE-agent의 ACI는 단순 모델 API wrapper만을 뜻하지 않는다. 논문은 작업용
  prompt template, 탐색·파일 보기·편집 명령, 환경 응답의 형식화 등을 설명하고
  도구 구성요소를 ablation했다. Lite 분할에서 요약 검색은 18%, 반복 검색은
  12%, 편집 linting을 뺀 설정은 18%에서 15%, 전체 파일 보기 설정은 18%에서
  12.7%로 달라졌다. 이는 특정 과제군에서 정보 탐색·편집 affordance·Context
  구성 변경이 모델 결과를 바꿀 수 있다는 증거이지, 어느 한 기능이 모든 저장소에서
  같은 폭으로 개선한다는 보장은 아니다. [SWE-agent 논문 ablation과 설정](https://papers.neurips.cc/paper_files/paper/2024/file/5a7c947568c1b1328ccc5230172e1e7c-Paper-Conference.pdf)
- 환경 자원도 측정 대상의 일부다. Anthropic은 Terminal-Bench 2.0에서 Claude 모델,
  Harness, task set을 고정하고 CPU/RAM 한도를 바꾼 내부 비교를 공개했다. 자원
  제한을 풀었을 때 성공률은 제한 설정보다 총 6%p 높았고(p < 0.01), 인프라 오류는
  5.8%에서 0.5%로 줄었다. 1x에서 3x 자원 구간의 성공률 차이는 통계적으로
  유의하지 않았으며(p=0.40), 이후에는 더 많은 자원이 무거운 의존성 설치·시험 실행
  등 실제 해결 접근을 가능하게 했다. 따라서 동일 모델·agent loop라도 샌드박스
  자원/운영 조건이 달라지면 점수가 달라질 수 있다. 이는 업계의 자체 실험·기술
  보고이며 독립 재현으로 확인된 보편 효과는 아니다. [Anthropic, Terminal-Bench 2.0 인프라 노이즈](https://www.anthropic.com/engineering/infrastructure-noise)
- OpenAI는 Codex 내부 사례에서 초기 진행 지연의 원인을 Codex 자체 능력 부족보다
  불충분하게 지정된 환경, 빠진 도구·추상화·내부 구조와 연결했다. 팀은 더 큰 목표를
  설계·코드·리뷰·테스트 단위로 나누고, 에이전트가 변경을 검토하고 피드백을 받아
  반복하도록 했다고 설명한다. 이는 실제 엔지니어링 사례지만 통제 실험이나 외부
  독립 감사는 아니다. [OpenAI, Harness engineering 사례](https://openai.com/index/harness-engineering/)
- OpenAI의 2026년 Agents API 설명은 Harness가 Context를 관리하고, 도구 사용과
  Subagent 조정을 돕는다고 명시한다. OpenAI가 Harness와 실행 인프라를 제공하고
  사용자가 compute environment를 선택할 수 있으며, 제품 설명은 모델 업데이트와
  Harness를 함께 유지·개선한다고 한다. 제품의 공식 사용례이지, 특정 Harness의
  효과량을 입증하는 controlled benchmark는 아니다. [OpenAI, Agents API](https://openai.com/index/introducing-the-agents-api/)
- OpenAI의 평가 원칙은 “강한 capability elicitation”과 “통제 비교”를 나눈다.
  전자는 능숙한 사용자가 합리적으로 쓸 도구·Harness·예산을 포함해 능력을 최대한
  드러내고, 후자는 공통 Harness 또는 사전에 정한 Harness 집합 아래 task, scoring,
  budget을 고정할 것을 권한다. OpenAI는 GPT-5.5 cyber range에서 Context
  compaction이 긴 tool interaction의 결과를 높였다고 보고하지만 공개 본문은 그
  Harness 비교의 정량 효과를 제시하지 않는다. [OpenAI, 제3자 평가 playbook](https://openai.com/index/trustworthy-third-party-evaluations-foundations/)
- 용어 차원에서 “Model Intelligence”와 “System Reliability”는 교육용 구분으로
  유용하지만, 이 자료에서 조사한 benchmark들이 두 개의 보편적이고 표준화된
  계량축으로 정의하지는 않는다. 구체적인 결과 주장은 평가할 task 분포·실행
  환경·예산·재시도 방식이 붙어야 해석 가능하다. [OpenAI, 평가 설정 공개 권고](https://openai.com/index/trustworthy-third-party-evaluations-foundations/)
- 모델 업그레이드가 Harness 문제를 자동 제거한다는 보장은 없다. OpenAI의 최신
  Codex 지침은 더 유능한 모델이 예전의 많은 handholding/scaffolding 없이도 일할
  수 있는 한편, 누적된 `AGENTS.md`·Skill·Prompt를 다시 점검하고 불필요하게 긴
  Context를 줄이라고 권한다. 즉 적절한 Harness 형태 자체도 모델 변화에 따라
  재검토 대상이다. [OpenAI Developers, GPT-6 Astra용 Skills/Prompt 재검토](https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra)

### Inferences

- 벤치마크 성능은 일반적으로 `model + scaffold/harness + task context + tools +
  runtime/environment + budget + verifier`의 조합 결과다. 연구자가 모델만의
  효과를 묻는지, 그 모델을 포함한 최선의 시스템 결과를 묻는지에 따라 설정을
  고정할지 최적화할지를 명시해야 한다. [SWE-agent 논문](https://papers.neurips.cc/paper_files/paper/2024/file/5a7c947568c1b1328ccc5230172e1e7c-Paper-Conference.pdf),
  [OpenAI 평가 playbook](https://openai.com/index/trustworthy-third-party-evaluations-foundations/)
- “좋은 모델”과 “좋은 개발 시스템”은 경쟁하는 선택지가 아니라 상이하면서
  상호작용하는 층위로 설명하는 편이 정확하다. 같은 scaffold에서 모델 차이가
  남을 수 있고, 같은 모델에서 scaffold·환경 차이도 남는다. 어떤 층의 변화가
  특정 업무에 필요한지는 그 저장소에서 검증해야 한다. [SWE-agent 논문](https://papers.neurips.cc/paper_files/paper/2024/file/5a7c947568c1b1328ccc5230172e1e7c-Paper-Conference.pdf),
  [Scale SWE-Bench Pro 결과](https://labs.scale.com/leaderboard/swe_bench_pro)
- “Harness가 낮은 모델을 무조건 보완한다”도 성립하지 않는다. 동일 SWE-agent
  설정에서 GPT-4 Turbo와 Claude 3 Opus 결과가 달랐고, 공개 에이전트 성능이 특정
  모델 능력의 한계를 넘는다고 입증하는 근거는 없다. 반대로 더 강한 모델도 깨진
  테스트·권한 부족·잘못 지정된 환경을 자동으로 고친다고 단정할 근거는 없다.
  [SWE-agent 논문](https://papers.neurips.cc/paper_files/paper/2024/file/5a7c947568c1b1328ccc5230172e1e7c-Paper-Conference.pdf),
  [OpenAI Harness 사례](https://openai.com/index/harness-engineering/)

### Gaps

- 이 연구에서 다룬 공개 실험들은 다양한 축을 한 번에 분리하지 않는다. Instructions,
  Memory, planning/decomposition, retries, verifier design 각각의 인과효과를 같은
  Coding Agent와 기업 저장소에서 분리해 추정하는 종합 factorial study는 확인하지
  못했다.
- OpenAI의 Harness/compaction 효과는 공식 내부 결과지만 공개 정량 자료가 없다.
  업무 생산성·조직 신뢰성으로 환산할 수 없다.
- “System Reliability”를 이 교육의 정량 목표나 표준 지표로 삼을 근거는 아직
  확보되지 않았다. 용어는 개념적 구분으로만 다루는 것이 안전하다.

## 32. Agent Scaffold

### Takeaway

학술·benchmark 문맥에서 `scaffold`는 모델이 작업을 수행하도록 감싸는 prompts,
action/tool interface, context flow, workflow와 실행 규칙을 가리키는 경우가 많다.
산업 문맥의 `harness`와 범위가 겹치지만 동일어로 표준화되지는 않았으며, 제품
Harness는 실행 인프라·샌드박스·세션 지속성까지 포함하는 더 넓은 쓰임도 있다.

### Cited Findings

- SWE-agent 논문은 SWE-agent를 LLM을 감싸서 컴퓨터 작업을 수행하게 하는
  autonomous agent/scaffolding 시스템으로 설명하고, 핵심 기여를 언어모델에 맞춘
  Agent-Computer Interface(ACI)로 다룬다. 이 ACI는 저장소를 탐색하고 코드 파일을
  읽고 수정하며 명령·테스트를 실행하는 작업 표면을 설계한다. [Yang et al., SWE-agent (NeurIPS 2024)](https://papers.neurips.cc/paper_files/paper/2024/file/5a7c947568c1b1328ccc5230172e1e7c-Paper-Conference.pdf)
- OpenAI의 SWE-bench Verified 소개는 GPT-4o의 33.2% 결과를 “best performing
  open-source scaffold, Agentless”에서 얻었다고 서술한다. 즉 공개 보고에서도
  “model”과 “scaffold”는 같은 항목이 아니라 모델을 task-solving agent로 만드는
  구성으로 구분된다. [OpenAI, SWE-bench Verified](https://openai.com/index/introducing-swe-bench-verified/)
- SWE-bench의 현재 공식 leaderboard는 일반 결과에서 `Model`, `Agent`, resolved
  percentage, cost, date, release를 별도 항목으로 표시한다. 다만 현재 Verified의
  기본 “Bash Only” 비교는 500개 Verified task에서 모든 모델을 같은
  mini-SWE-agent 환경으로 실행하는 view다. 이는 특정 leaderboard view가 model
  comparison을 위해 scaffold를 통제하는 예다. [SWE-bench Leaderboard](https://www.swebench.com/)
- OpenAI의 Agents API는 Harness를 Context 관리, 도구 사용 효율, Subagent 조정,
  장시간 실행 인프라, 파일 작업·코드 실행·중간 결과 저장이 함께 필요한 구성으로
  설명한다. OpenAI가 Harness를 관리하고, compute environment는 고객이 선택할 수
  있다고 분리한다. Agent harness와 environment는 관계가 있으나 분리 가능한
  요소임을 제품 설명 자체가 보여준다. [OpenAI, Agents API](https://openai.com/index/introducing-the-agents-api/)
- OpenAI의 Harness Engineering 글은 “systems, scaffolding, and leverage”를
  언급하고, repository tools·skills·issue decomposition·local/cloud review·test와
  feedback loop를 사례로 든다. 이 industry 사용례는 학술 논문의 한정된 scaffold보다
  시스템 구성 전반을 가리킨다. [OpenAI, Harness Engineering](https://openai.com/index/harness-engineering/)
- OpenAI의 Harness 용례는 때로 system runtime과 managed infrastructure를 묶고,
  OpenAI 고객 사례의 한 회사는 “Agents API supplies the harness; environment,
  context, UX stay ours”라고 역할을 더 좁게 나눈다. 이는 업계 용어의 실제 쓰임도
  일관된 경계로 고정돼 있지 않다는 사례다. [OpenAI, Agents API 및 고객 사례](https://openai.com/index/introducing-the-agents-api/)

### Inferences

- `scaffold`와 `harness`는 겹치는 구성요소를 부르는 용어이지, 서로 대체 가능한
  보편 표준 동의어라고 주장할 근거는 없다. 조사 문맥에서 Scaffold는 평가의
  모델 바깥 절차·도구와 비교 변수를 가리키고, OpenAI Harness는 제품 실행
  런타임과 인프라까지 포괄한다.
- “evaluation harness”는 task를 에이전트에 전달하고 실행을 기록한 뒤 점수를
  계산하는 측정 파이프라인을 뜻할 수 있다. “agent scaffold/harness”는 모델이
  일하는 과정을 형성하는 실행 시스템을 뜻할 수 있으므로, 두 용어를 쓸 때 평가
  runner와 agent runtime을 구별해야 한다. [SWE-bench 평가 설정](https://openai.com/index/introducing-swe-bench-verified/),
  [OpenAI Agents API](https://openai.com/index/introducing-the-agents-api/)
- 교육에서 Scaffold는 Harness가 모델 API 호출만을 뜻하지 않으며 그 바깥의
  작업 표면과 피드백 경로도 결과에 영향을 준다는 근거 용어로 쓸 수 있다. 다만
  초급자 대상 본문에 두 번째 전문 용어를 반드시 추가할 필요는 없으며, 용어 추가
  여부는 별도 curriculum/storyline 작성 시 다시 판단해야 한다.

### Gaps

- 현재 연구와 제품 문서 간에 `scaffold` 또는 `harness`의 업계 공통 정의·경계·필수
  구성요소를 정한 표준 문서는 확인하지 못했다.
- “Memory”가 모든 Scaffold/Harness에 필수인지, 선택적이며 task-specific한
  모듈인지는 일반화할 수 없다. 이 범위의 자료는 포함 예를 보여줄 뿐 필수 조건을
  확정하지 않는다.

## 33. Coding Agent Benchmarks

### Takeaway

Coding benchmark는 실제 저장소 형태의 문제를 제공하고 patch/test 통과나 더 넓은
품질 기준으로 특정 agent system을 평가하지만, 각 점수는 그 benchmark의 문제·검증기·
도구·예산 아래에서 얻은 결과다. 2026년 9월 현재 Verified와 Pro 모두 품질/오염
문제가 공개적으로 제기됐고 버전이 빠르게 변하므로, 점수 순위보다 무엇을 어떤
설정에서 측정했는지를 교육의 배경 근거로 삼는 것이 타당하다.

### Cited Findings

#### Benchmark별 범위와 한계

| Benchmark·버전 | 과제·실행·채점 | 점수 해석과 주요 한계 |
| --- | --- | --- |
| **SWE-bench (2023; ICLR 2024)** | 12개 Python 저장소에서 수집한 GitHub issue 2,294개다. Agent는 base commit 저장소와 issue 설명을 받고 patch를 만들며, fail-to-pass 및 pass-to-pass 테스트 통과 여부로 해결률을 평가한다. [원 논문](https://arxiv.org/abs/2310.06770), [OpenAI 평가 설명](https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/) | 실제 issue 기반 다중 파일 repository task이지만, 원본 issue와 PR 테스트가 정확하고 공정한 평가 task라는 보장은 없다. OpenAI는 underspecified prompt, 너무 좁거나 넓은 테스트, OS/Python 환경 차이에 따른 spurious fail을 문서화했다. [OpenAI audit](https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/) |
| **SWE-bench Verified (2024; 500개 고정 subset)** | 1,699개 샘플을 검토해 사람 검수자가 비문제적이라고 고른 원본의 500개 Python issue subset이며, Docker 환경과 issue-specific tests를 쓴다. [OpenAI, 출시·검수 방식](https://openai.com/index/introducing-swe-bench-verified/), [공식 leaderboard](https://www.swebench.com/) | 초기에는 원본의 underspecified/불공정 테스트 문제를 줄인 개선판이었다. 그러나 2026-02-23 OpenAI는 o3가 일관되게 못 푼 138개를 64회 실행 분석한 뒤 59.4%에 test/prompt의 material issue를 확인했고, 공개 repo/PR의 학습 오염도 근거로 frontier capability 출시 지표로 보고하지 말 것을 권고했다. 현재 공식 SWE-bench leaderboard에는 계속 남아 있어도, OpenAI는 더 이상 frontier progress 추적에 적절하지 않다고 한다. [OpenAI, 2026 감사 및 권고](https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/) |
| **SWE-Bench Pro Public (2025 release; public split 731개)** | 총 1,865 task, 41 repositories 중 public 731개와 held-out 858개, private commercial 276개로 설계했다. Public/held-out는 copyleft repo, commercial은 비공개 startup repo에서 오며, Docker build/test 환경, human-augmented requirements, fail-to-pass 및 pass-to-pass tests를 사용한다. [Scale paper](https://arxiv.org/abs/2509.16941), [Scale methodology/leaderboard](https://labs.scale.com/leaderboard/swe_bench_pro) | Long-horizon·다언어 저장소 문제에 더 가깝도록 만든 benchmark이며, 논문 초기 통제 설정은 SWE-Agent scaffold로 GPT-5 23.3% pass@1을 보고했다. 하지만 OpenAI는 2026-02에 Verified 대신 Pro를 추천했다가, 2026-07 audit에서 public 731 중 자동 검토 27.4%, 인간 검토 34.1%가 문제 task로 표시됐다고 보고하고, 이전 권고를 공식 철회했다. 2026-09-16 수정 preprint인 Pro Verified도 reward hacking/task quality 우려를 제기한다. 따라서 2025–26 Pro leaderboard snapshot을 benchmark 무결성이나 workplace capability의 확정 수치로 취급하지 않는다. [초기 Scale paper](https://arxiv.org/abs/2509.16941), [OpenAI Pro audit·권고 철회, 2026-07-08](https://openai.com/index/separating-signal-from-noise-coding-evaluations/), [SWE-Bench Pro Verified v2, 2026-09-16](https://arxiv.org/abs/2609.08149) |
| **Terminal-Bench 2.0 (2026 paper/version)** | Terminal environment에서 실제 workflow에서 영감을 받은 89개 난도 높은 task. Task별 고유 environment, human-written solution 및 comprehensive test로 완료를 확인한다. [Terminal-Bench 2.0 논문](https://arxiv.org/abs/2601.11868), [버전 공지](https://www.tbench.ai/news/announcement-2-0) | Repository issue fixing만이 아니라 coding agent가 필요한 CLI tool-use 작업 전반을 측정한다. 환경 자원 제한 방식만으로 같은 Claude/harness/task의 측정 결과가 달라질 수 있었다는 별도 내부 실험이 있다. 버전 2.0의 결과를 4.0 결과와 직접 비교하지 않는다. [Anthropic resource study](https://www.anthropic.com/engineering/infrastructure-noise) |
| **Terminal-Bench 4.0 (2026-08 release)** | 최신 버전은 software engineering 이외에 system configuration, data analysis를 포함한 complex terminal tasks를 평가한다. [Terminal-Bench news/version history](https://www.tbench.ai/news) | 버전 및 task/resource 정책이 계속 바뀌는 benchmark다. GPT-6 Astra 발표에 실린 Terminal-Bench 4.0 점수는 Astra 57.9%, GPT-5.6 Sol 37.3%, Claude Fable 5.1 55.8%이며, OpenAI는 GPT 평가가 research environment 또는 API에서 이뤄질 수 있고 production의 system prompts/tools와 달라질 수 있다고 밝힌다. 점수는 특정 버전·설정에 한정한다. [OpenAI GPT-6 Astra coding evals](https://openai.com/index/gpt-6-astra/), [평가 caveat](https://openai.com/index/gpt-6-astra/) |
| **DeepSWE 1.1 (2026)** | 113개 original long-horizon software engineering task, 91개 OSS repository, 5개 언어다. Task는 기존 public issue/PR에서 베끼지 않고 새로 작성하며, hand-written verifier는 특정 patch 구현이 아닌 요구 기능을 점검한다. 공개 leaderboard는 mini-SWE-agent로 모델 비교를 표준화한다. [논문](https://arxiv.org/abs/2607.07946), [v1.1 leaderboard/method](https://deepswe.datacurve.ai/) | 공개 issue recall 위험과 PR 테스트의 solution-specific bias를 줄이려는 보완 평가다. 독립 LLM judge와 verifier의 disagreement는 DeepSWE audit에서 1.4%, SWE-Bench Pro inherited tests에서 32.4%였으나, 저자도 이는 다른 독자의 의견 불일치이지 ground-truth error rate가 아니라고 한정한다. 점수는 새로운 benchmark의 평가/검증 방식 자체가 적절하다는 증명이 아니다. [DeepSWE paper](https://arxiv.org/abs/2607.07946) |
| **FrontierCode 1.1 Main/Extended (2026)** | 실제 OSS issue task를 저장소 maintainers가 만들고, correctness·test quality·scope discipline·style·repository conventions와 mergeability를 unit tests, rubric, verifiers로 채점한다. [Cognition methodology](https://cognition.com/frontiercode) | Binary test pass보다 PR 품질을 넓게 본다. OpenAI는 Astra의 1.1 Extended 64.5, Main 53.3을 발표했고 평가 방식에서 Codex developer message와 유사한 지시를 사용했다고 밝혔다. 점수는 공개 task suite의 해당 rubric 결과이며 실제 회사 PR 승인률이나 운영 생산성은 아니다. [OpenAI GPT-6 Astra](https://openai.com/index/gpt-6-astra/) |
| **CodeClash (2025 preprint)** | 구체적 issue 대신 high-level competitive goal을 주고, 모델이 여러 라운드 동안 codebase를 개선한 뒤 arena에서 경쟁하고 결과 로그를 다시 받는다. 논문은 8개 LM, 6개 arena, 1,680 tournaments·25,200 rounds를 보고한다. [CodeClash paper](https://arxiv.org/abs/2511.00839), [benchmark site](https://codeclash.ai/) | Goal-oriented iterative software development를 보려는 보완 연구이며, PR fixing benchmark나 업무 생산성 실험은 아니다. 저자 보고상 top LM은 RobotRumble의 전문가 인간 solution보다 크게 뒤졌고, 모델들은 장기 개선에 어려움 및 codebase decay를 보였다. [CodeClash](https://codeclash.ai/) |

#### OpenAI가 Codex/model 결과를 제시하는 방식의 최신 snapshot

- GPT-6 Astra 발표(2026-09)에 실린 공개 코딩 표는 Terminal-Bench 4.0 57.9%,
  DeepSWE v1.1 74.1%, FrontierCode 1.1 Extended 64.5, Main 53.3이다. Astra 표의
  scores는 “최대 reasoning effort 설정” 결과이며, OpenAI 평가는 research
  environment 또는 API에서 실행되어 실제 ChatGPT의 system prompts/tools와 다를 수
  있다고 명시한다. FrontierCode에는 Codex developer message의 일부와 유사한
  “깨끗하고 mergeable한 코드, 불필요한 테스트·정리 방지, repository 관례 읽기”
  지침을 썼으며 eval 전용 최적화 prompt는 아니었다. 그러므로 이는 제품 UI에서의
  모든 사용자가 받는 성능 보장이 아닌, OpenAI가 보고한 구성별 결과다.
  [OpenAI GPT-6 Astra 발표·평가 주석](https://openai.com/index/gpt-6-astra/)
- GPT-6 Sol/Luna 출시(2026-09-22)는 DeepSWE 1.1에서 Sol max effort 68.8%, Luna
  max effort 66.6%를 공개했다. OpenAI 문서는 이 평가를 복잡한 실제 저장소의
  software-engineering task라고 설명한다. 동일 발표의 GPT 평가는 연구환경/API에서
  수행되어 production ChatGPT와 차이가 날 수 있다고 명시하고 경쟁 모델 결과는
  공개 보고에서 얻었다고 한다. [OpenAI GPT-6 Sol/Luna 발표](https://openai.com/index/introducing-gpt-6-sol-and-luna/)
- 비교의 중요성을 보여주는 역사적 Codex 모델 예로 GPT-5.3-Codex 발표는 2026-02-05
  SWE-Bench Pro Public 56.8%, Terminal-Bench 2.0 77.3%를 xhigh effort에서 보고했다.
  이 benchmark/버전 설정은 GPT-6 Astra 표의 Terminal-Bench 4.0·DeepSWE·FrontierCode와
  task set이 다르므로 숫자를 모델 간 한 줄 순위로 잇지 않는다. [OpenAI GPT-5.3-Codex 발표](https://openai.com/index/introducing-gpt-5-3-codex/)
- Scale의 실시간 SWE-Bench Pro leaderboard는 조사일 화면에서 public split
  `gpt-5.4 (xHigh)`를 59.10±3.56으로 표시하고 별표로 mini-SWE-agent run을
  표기한다. 같은 표는 서로 다른 Harness/예산으로 실행된 항목을 포함하며,
  Scale의 public split이 731개라는 표기와 함께 현재 결과를 갱신한다. 같은 시점
  OpenAI는 해당 Pro 데이터의 약 30% 문제를 추정하고 사용 주의를 공지했다.
  따라서 59.10은 날짜·setup이 붙은 live snapshot일 뿐 공인된 capability ceiling이나
  workplace adoption score가 아니다. [Scale leaderboard](https://labs.scale.com/leaderboard/swe_bench_pro),
  [OpenAI audit](https://openai.com/index/separating-signal-from-noise-coding-evaluations/)

#### 생산성과의 구분

- SWE-bench 점수는 정해진 issue set의 pass rate이고, Terminal-Bench는 지정한 terminal
  task의 completion rate다. 둘 다 실제 조직에서 PR이 merge되는 비율, 개발자 시간,
  유지보수 비용, 사고/회귀, 배포 빈도 전체를 직접 측정하지 않는다. 각 benchmark의
  task 및 scoring definition은 위 원문에 한정되어 있다. [SWE-bench 원 논문](https://arxiv.org/abs/2310.06770),
  [Terminal-Bench 2.0 논문](https://arxiv.org/abs/2601.11868)
- 현실 생산성은 benchmark와 분리 측정해야 한다. METR의 2025 RCT는 숙련 OSS
  개발자 16명이 친숙한 mature project의 실제 task 246개를 수행할 때 초기 2025 AI
  도구 사용 허용군이 비허용 대비 완료 시간이 평균 19% 증가했다고 보고했다.
  이는 GPT-6/Codex 제품이나 모든 개발자에 대한 결론이 아니며 초기 2025 Cursor/Claude
  계열 도구와 제한된 숙련 OSS 표본의 한 설정이다. 여기서 얻는 제한된 점은
  “agent benchmark score를 곧바로 생산성 speedup으로 읽을 수 없다”는 것이다.
  [METR RCT 논문](https://arxiv.org/abs/2507.09089)
- Scale도 SWE-Bench Pro 결과에 관해 실제 효용의 궁극적 측정은 조직의 자체
  repository 성능이라고 안내한다. 이 주장은 benchmark 제공자의 설명이며
  모든 benchmark를 무효화하는 결과는 아니지만, 외부 점수를 회사의 생산성 예측치로
  번역하지 않는 근거가 된다. [Scale SWE-Bench Pro](https://scale.com/blog/swe-bench-pro)

### Inferences

- 교육에서 benchmark는 “현재 agent가 repository·terminal 환경의 다단계 task를
  수행할 수 있다”는 배경 증거 및 평가 한계 사례로만 쓰는 편이 근거에 맞는다.
  숫자 순위나 회사 생산성 약속으로 쓰지 않는다. [OpenAI SWE-bench Verified audit](https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/),
  [OpenAI SWE-Bench Pro audit](https://openai.com/index/separating-signal-from-noise-coding-evaluations/)
- 가능한 보고 단위는 `benchmark name+version / task count & language / model ID +
  reasoning effort / scaffold+harness / tools & runtime+resource budget / verifier /
  score+uncertainty / run date`다. 이 메타데이터가 없으면 같은 benchmark 이름 아래의
  score 차이도 원인 분해에 쓸 수 없다. [OpenAI trustworthy-evals playbook](https://openai.com/index/trustworthy-third-party-evaluations-foundations/),
  [Anthropic infrastructure study](https://www.anthropic.com/engineering/infrastructure-noise)
- 2026년 9월 스냅샷에서 SWE-bench Verified는 frontier tracking에서 신뢰도가 떨어졌고,
  Pro는 OpenAI가 추천을 철회했으며, Pro Verified는 신규 preprint다. DeepSWE,
  Terminal-Bench, FrontierCode는 task 정의가 서로 달라 상호 점수를 직접 비교할
  단일 척도가 아니며 모두 안정된 장기 기준이라고 보기에는 이르다. [OpenAI Verified audit](https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/),
  [OpenAI Pro audit](https://openai.com/index/separating-signal-from-noise-coding-evaluations/),
  [SWE-Bench Pro Verified, arXiv v2](https://arxiv.org/abs/2609.08149)

### Gaps

- §§33에서 요청한 “현재 의미 있는 benchmark 전체”를 완전하게 목록화하지 않았다.
  본 노트는 실제 저장소 patch, terminal workflow, mergeability 및 goal-oriented
  evolution을 대표하는 관련 benchmark만 골랐다. Benchmark field와 버전이 빠르게
  변하므로 이후 제작 전에 1차 출처를 재확인해야 한다.
- OpenAI의 공개 GPT-6 Astra benchmark 점수 중 Terminal-Bench, DeepSWE 등 일부는
  이 note에서 모델·버전·effort 외에 전체 harness/container/resource/token budget을
  모두 재구성할 자료가 없다. 이 설정의 미공개 세부사항을 비교·추정하지 않는다.
- SWE-Bench Pro와 Verified에 대한 기관별 평가가 상충한다. Scale은 task 품질·
  contamination 방지 장치를 설명하며 현재 leaderboard를 운영하고, OpenAI는 자체
  audit 후 task 무결성에 이의를 제기했으며, Pro Verified는 2026-09 arXiv preprint다.
  본 조사로는 어떤 새 변형이 장기적으로 업계 합의 표준이 될지 판단할 수 없다.
- METR RCT는 2025년 도구·16명의 경력 개발자·익숙한 OSS 작업이라는 단일 상황의
  결과다. 이를 현재 Codex의 효과, 초급자 효과 또는 회사 내 전체 SDLC 생산성으로
  확장할 수 없다.
