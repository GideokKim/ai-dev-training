# Verification, Workflow, and Coding-Agent Failure Evidence

조사 기준일: **2026-09-25**. 범위는 STEP 03의 18–20절에 한정한다. 제품 동작은 공개 OpenAI 문서에 적힌 범위를, 연구 결과는 실제 평가한 시스템·과제·표본을 기준으로 요약한다. “관찰된 사례”와 “가능한 원인에 대한 해석”을 분리한다. 이 문서는 Codex의 실패율이나 현재 모델의 benchmark 점수를 추정하지 않는다.

## 18. Verification & Evaluation Research

### Takeaway

Codex는 허용된 환경에서 프로젝트 도구를 실행하고 결과를 관찰해 작업을 반복할 수 있으며, 명시적인 검증 방법을 요청하고 코드 리뷰를 수행하는 기능도 제공한다. 그러나 명령을 실행할 수 있다는 사실은 실행했다는 증거가 아니고, 테스트 통과나 리뷰 결과 어느 하나도 전체 정확성을 증명하지 않는다. Software Test는 산출물의 동작을 확인하고, Agent Evaluation은 모델·도구·지시·handoff 등 작업 수행 과정과 결과를 반복 가능한 평가로 측정한다.

### Cited Findings

- OpenAI Codex Prompting 문서는 좋은 요청에 원하는 결과, 관련 코드와 재현 정보, 제약, 검증 방법을 포함하도록 안내한다. 여러 단계의 작업에서는 `/plan`으로 먼저 조사와 접근 제안을 받는 선택지를 설명한다. 이는 명확한 검증 기대를 전달하라는 공식 안내이지, Codex가 항상 테스트를 실행하거나 완료 결과를 독립적으로 인증한다는 보장은 아니다. — [Codex Prompting](https://developers.openai.com/codex/prompting)
- Codex CLI 문서는 Codex가 로컬 프로젝트의 파일을 살피고 편집하며, 컴퓨터에 설치되어 있고 권한이 허용된 도구를 실행할 수 있다고 설명한다. 따라서 `build`, `test`, `lint`, `benchmark` 실행은 프로젝트에 해당 명령과 의존성이 있고 sandbox·approval 설정이 허용하는 경우 가능하다. 모든 프로젝트에서 네 종류의 명령을 자동으로 찾아 실행한다고 문서는 보장하지 않는다. — [Codex CLI](https://developers.openai.com/codex/cli)
- Codex Code Review는 CLI, IDE, Desktop에서 변경분을 검토하는 기능을 제공한다. 문서상 리뷰 대상은 base branch, 미커밋 변경, 특정 commit 또는 사용자 지정 지시가 될 수 있으며, 결과는 검토할 finding 형태로 제시된다. 이 기능은 변경을 살펴보는 보조 검토이며 formal proof나 필수 품질 승인을 대신한다고 문서가 말하지 않는다. — [Codex Code Review](https://developers.openai.com/codex/code-review)
- Agent Evaluation은 Software Test와 목적이 다르다. OpenAI의 Agent Evals 가이드는 trace의 모델 호출, 도구 호출, guardrail, handoff를 검사하고, workflow가 올바른 도구를 선택했는지·정책을 따랐는지 등 시스템 수행을 평가하는 grader와 데이터셋을 설명한다. 단위 테스트는 특정 코드가 정해진 입력에서 기대 동작을 하는지를 보는 반면, Agent Eval은 여러 번의 모델·도구 단계와 상호작용을 대상으로 삼는다. 이는 상호 보완 관계다. — [Evaluate agent workflows](https://developers.openai.com/api/docs/guides/agent-evals)
- OpenAI의 Evaluation Best Practices는 생성형 모델 출력의 변동성 때문에 한 번의 예시나 전통적인 결정적 테스트만으로 모델·Agent 시스템을 충분히 평가하기 어렵다고 설명한다. 과제별 eval을 초기에 만들고, 자동화된 판정과 사람 판단을 함께 보정하며, 결과를 기록하고 반복 평가하는 방식을 권한다. 다만 해당 페이지는 **OpenAI Evals 플랫폼이 2026-10-31부터 기존 사용자에게 읽기 전용이 되고 2026-11-30 종료 예정**이라고 안내한다. 평가 원칙과 특정 플랫폼의 수명은 구분해야 한다. — [Evaluation best practices](https://developers.openai.com/api/docs/guides/evaluation-best-practices)
- 테스트 통과가 전체 정답을 보증하지 않는 근거로, Wang·Pradel·Liu의 SWE-bench Verified 연구는 benchmark의 “plausible” 판정을 통과한 패치 중 7.8%가 개발자 작성 테스트 suite를 실패했다고 보고했다. 별도의 differential test에서는 29.6%의 plausible patch가 reference patch와 동작이 달랐고, 그 동작 차이가 있던 패치의 28.6%는 수동 검사에서 확실히 부정확한 것으로 분류됐다. **동작 차이 자체를 전부 버그로 간주할 수는 없다.** 결과는 SWE-bench Verified와 평가한 도구·테스트 조건에 한정된다. — [Wang, Pradel & Liu, “Are ‘Solved Issues’ in SWE-bench Really Solved Correctly?”](https://arxiv.org/abs/2503.15223)
- AgentLens는 OpenHands coding-agent trajectory를 사후 분석해 benchmark pass에 회귀, blind retry, 검증 부족, 탐색·구현·검증 순서 문제와 연관된 “lucky pass”가 섞일 수 있다고 보고했다. 이 연구의 pass/process 차이는 단일 pass rate만으로 수행 품질을 온전히 설명하기 어렵다는 사례다. OpenHands에서 관찰된 결과를 Codex의 발생률로 옮길 수는 없다. — [Sahoo et al., “AgentLens: Revealing The Lucky Pass Problem in SWE-Agent Evaluation”](https://arxiv.org/abs/2605.12925)
- 여러 코딩 Agent를 평가한 OpenAI의 2026년 SWE-bench Pro 감사는 benchmark task, prompt, 테스트, gold patch가 서로 잘 맞지 않을 수 있다고 보고했다. 작성자의 특정 기여를 겨냥한 PR 테스트가 대체 구현을 부당하게 실패 처리할 수 있어, eval 자체도 감사가 필요하다는 근거다. 이는 모든 프로젝트 테스트가 부당하다는 주장이 아니다. — [OpenAI, “Separating signal from noise in coding evaluations”](https://openai.com/index/separating-signal-from-noise-coding-evaluations/)
- 공개된 초기 Codex 제품 설명도 AI가 생성한 코드의 수동 검토와 validation을 개발자 책임으로 명시했다. 현재 검토 기능 문서와 함께 읽으면, 리뷰 기능은 검토를 돕지만 최종 책임·수용 판단을 자동으로 이전하지 않는다고 설명하는 편이 안전하다. — [OpenAI, “Introducing Codex”](https://openai.com/index/introducing-codex/)

### Inferences

- 교육용 `Generated → Build → Test → 필요 시 Benchmark → Review → Done`은 유용한 **Teaching Model**이다. 이 정확한 순서나 모든 task에 적용되는 고정 workflow가 OpenAI 공식 표준이라는 근거는 없다. 산출물 성격에 따라 build·lint가 불필요할 수 있고, benchmark는 성능·비용·용량 같은 수치형 목표가 있을 때에만 의미가 있다.
- “완료 검증”은 실행 기록과 결과를 분리해 말해야 한다. 예를 들어 “테스트를 실행했고 120개가 통과했다”는 실행 증거이며, “요구사항을 모두 만족한다”는 범위가 더 큰 판단이다. 정확한 요구사항 매핑, 누락된 경계 조건, 통합 동작, 보안·운영 요구는 test suite 바깥에 있을 수 있다. 이 구분은 Codex 문서의 검증 지시 권고와 SWE-bench 검증 연구를 합친 교육적 추론이다.
- Human Review의 역할은 무조건 모든 행을 수동 승인하는 것으로 과장하기보다, 결과가 요구사항과 맞는지, 테스트·benchmark가 실제로 주장하는 바를 뒷받침하는지, 위험한 변경이나 누락이 없는지 판단하고 수용 책임을 갖는 것으로 가르치는 것이 타당하다. 위험도에 따라 검토 강도를 조절한다.
- Benchmark가 가치 있는 경우는 결과를 수치로 비교해야 하거나 성능·비용 개선을 주장할 때다. 정성적인 문서 수정과 간단한 기능 변경에는 더 작은 확인(요구사항별 사례, unit/integration test, review)이 충분할 수 있다. 이는 원칙의 적용이며, 출처가 보편적인 task-size cutoff를 제공하지는 않는다.

### Gaps

- 공개 Codex 문서는 명령 실행 가능성을 설명하지만, 모델·제품 표면·설정별로 어떤 명령을 언제 자동 실행하는지 보편 규칙을 제시하지 않는다. 실제 수업 환경에서 실행 전후의 명령·출력·권한을 확인해야 한다.
- 현행 사내 저장소에서 필요한 build/test/lint/benchmark 명령이 갖춰졌는지, 그리고 사람이 적용할 merge·배포 정책은 이번 조사에서 확인하지 않았다.
- 출처 범위: Codex prompting/CLI/review와 OpenAI eval 문서는 OpenAI 공식 제품·API 안내(기준일 확인, 게시일 일부 미표시, **confidence HIGH**, 제품 기능 변동성 **HIGH**). Agent Evals는 Agents SDK/Agent Builder workflow 안내이므로 Codex 자체의 내장 eval 기능으로 해석하지 않는다. Wang et al.은 ICSE 2026 게재 연구(**confidence HIGH**, 단 SWE-bench 범위 제한), AgentLens는 2026 preprint(**confidence MEDIUM**, OpenHands·선정 trajectory 제한), OpenAI coding-eval 감사는 2026년 공식 engineering analysis(**confidence MEDIUM**, benchmark 감사에 한정). 각 결과의 Codex 일반화 가능성은 낮거나 미확정이다.

## 19. Investigate → Plan → Implement → Verify → Review

### Takeaway

Codex에는 계획을 먼저 조사·제안하게 하는 `/plan`이 있고, OpenAI는 이를 여러 단계의 큰 작업에서 사용하도록 안내한다. `Investigate → Plan → Implement → Verify → Review`는 비용이 큰 변경의 reliable default로 교육할 수 있지만, 모든 요청에 강제되는 제품 절차라고 말할 근거는 없다. 작은 변경은 조사·검증을 짧게 축소하고, 불확실성·영향 범위·복구 비용이 큰 일은 앞단의 탐색과 계획을 더 늘리는 것이 근거에 맞는 해석이다.

### Cited Findings

- Codex Prompting은 여러 단계 작업에서 `/plan`을 사용해 Codex가 먼저 조사하고 접근을 제안하게 할 수 있다고 문서화한다. 지시할 때 관련 코드, 재현 단계, 제약과 검증 방법을 제공하라는 권고도 포함한다. 이는 plan 기능과 effective prompting guidance를 입증하지만, “조사 후 반드시 계획”이라는 강제 규칙은 아니다. — [Codex Prompting](https://developers.openai.com/codex/prompting)
- OpenAI의 장기 작업 현장 보고는 큰 작업을 계획, 코드 변경, 도구를 통한 test/build/lint, 결과 관찰과 수정의 반복으로 다룬다. 저자는 Codex의 `/plan`을 multi-step task에서 명확하고 검토 가능한 단계를 만드는 데 활용할 수 있다고 설명하며, Skills로 공통 plan/implement/test/report 방식을 기록할 수 있는 사례를 제시한다. 보고서 자체도 한 프로젝트의 field report이며, 계획의 인과효과를 통제한 비교 실험은 아니다. — [Derrick Choi, “Run long horizon tasks with Codex” (2026-02-23)](https://developers.openai.com/blog/run-long-horizon-tasks-with-codex)
- OpenAI Harness Engineering 사례는 초기에 환경·도구·코드 구조가 충분히 명시되지 않아 진행이 느렸고, 큰 요청을 더 작고 읽기 쉬운 설계·구현·review·test 단위로 나누어 작업했다고 보고한다. 이는 repo/context 탐색과 단계적 작업이 도움이 된 특정 대규모 engineering 사례다. 모든 task에 동일한 비용 대비 효과가 있다는 통제 근거는 아니다. — [Ryan Lopopolo, “Harness engineering: leveraging Codex in an agent-first world” (2026-02-11)](https://openai.com/index/harness-engineering/)
- Codex Skills 문서는 반복 workflow와 절차를 이름 있는 재사용 단위로 정의할 수 있는 제품 패턴을 제공한다. 따라서 조직이 investigate/plan/verify/report 단계 일부를 Skill이나 저장소 지침으로 인코딩할 수는 있다. 반복 가능하다는 사실은 해당 절차가 모든 변경에 적절하다는 뜻이 아니다. — [Codex Skills](https://developers.openai.com/codex/skills)
- 코딩 Agent trajectory를 분석한 Zhao et al.은 실패한 실행에서 decisive error가 초기 step에서 일어나더라도 이후에도 잘못된 premise 위에서 계속 실행되는 사례를 보고했다. 이 관찰은 구현 전 빠른 조사와 중간 결과 확인이 비싼 오류의 조기 발견 기회를 줄 수 있다는 동기를 제공한다. 연구는 특정 CLI benchmark trajectory 분석이며 “Investigate/Plan이 실패율을 감소시킨다”를 직접 시험하지 않았다. — [Zhao et al., “Failure as a Process: An Anatomy of CLI Coding Agent Trajectories” (2026 preprint)](https://arxiv.org/html/2607.09510v1)

### Inferences

- `Investigate`는 저장소 구조·관련 구현·재현 조건·기존 테스트를 파악해 작업 가정을 표면화하는 교육 단계로 정의할 수 있다. `Plan`은 영향 파일과 실행 순서를 검토 가능한 제안으로 만드는 단계다. 두 단계의 목적은 구현을 늦추는 것이 아니라 불확실한 가정에 너무 일찍 고착되는 위험을 낮추는 것이다. 이 정의는 교육에서 사용할 operationalization이지 OpenAI의 고정 단계 정의는 아니다.
- “아직 수정하지 말고 조사해”는 기존 코드의 ownership, 영향 범위, 실패 원인이 불분명하거나, 파괴적·대규모 변경 전에 증거가 필요한 경우 유용한 prompt다. 작은 typo, 범위가 좁고 결과를 바로 검증할 수 있는 변경에서는 별도 조사 보고서가 순수 overhead가 될 수 있다. 공개 연구가 task 크기별 최적 planning cutoff를 수치화하지는 않는다.
- 간단한 작업은 기존 테스트와 국소 diff를 확인한 뒤 곧장 수정하고 검증하는 간결한 경로를 택할 수 있다. 반대로 다중 모듈 변경, 불완전한 재현, migration, 공용 API 변경 등은 먼저 탐색과 plan을 드러내는 편이 실패했을 때 원인 추적과 검토를 돕는다. 이 구분은 위험·불확실성 기반 heuristic이며, task 유형만으로 보장되지 않는다.
- “Loop”를 설명할 때 Codex가 plan, tool 실행, 테스트 관찰, 수정의 반복을 지원한다고 말하는 것은 공식 기능 및 공개 사례에 부합한다. 그러나 Agent가 스스로 일반적인 개발 지침·Skill·Memory를 영구히 갱신하고 그 결과로 자기 능력을 개선한다고 주장할 근거는 없다. 지속적 Harness 개선에는 사람이 실패 증거를 보고 지침·도구·검증을 수정하고 그 다음 결과를 확인하는 과정이 필요하다.

### Gaps

- Codex 공식 문서와 OpenAI의 현장 글은 계획·반복 사용 사례를 뒷받침하지만, 조사 단계 유무를 비교한 무작위·통제 실험이나 작은 task 대비 큰 task의 비용 최적화 결과를 제공하지 않는다.
- 특정 회사에서 어떤 task를 조사·계획 우선으로 분류할지, 기존 PR·CI·review 절차와 어떻게 통합할지는 후속 Harness/Demo 설계 과제다.
- 출처 범위: Codex Prompting/Skills는 기준일의 OpenAI 공식 문서(게시일 미표시, **confidence HIGH**, 변동성 **HIGH**). Choi의 장기 작업 글은 2026-02-23 공식 현장 보고(**기능 설명 confidence HIGH, 효과 일반화 confidence MEDIUM**, 환경·프로젝트·모델 편향). Lopopolo의 Harness 사례는 2026-02-11 공식 engineering case study(**confidence MEDIUM**, OpenAI 단일 조직 사례). Zhao et al.은 2026 preprint(**confidence MEDIUM**, 89개 terminal task를 포함한 benchmark 표본, Codex 최신 버전이나 planning 개입을 평가하지 않음). 

## 20. Coding Agent Failure Mode Research

### Takeaway

실제 coding/multi-agent 연구는 요구사항을 놓치거나, 잘못된 전제를 유지하거나, 검증이 얕은 채 성공을 주장하는 trajectory를 관찰했다. 다만 Context·Instruction·Execution·Verification·Coordination·Memory·Harness라는 일곱 범주는 이 교육의 분석표이지, 문헌에서 통일된 원인 분류나 Codex의 빈도 표가 아니다. 아래 표는 **관찰된 사례·연구 결과**와 **가능한 원인에 대한 가설**을 분리하며, 관찰되지 않은 구체적 실패를 사실처럼 쓰지 않는다.

### Cited Findings

#### A. Context Failure

- **관찰된 근거:** Zhao et al.의 terminal-agent 분석에서는 잘못된 전제(false premise), 출력 오독(output misreading), 명시된 신호 무시 등이 주요 오류 trigger로 코딩됐다. 대표 trajectory에서는 `cd` 명령이 실패했는데도 Agent가 디렉터리 변경을 성공으로 간주하고 다른 경로에서 build를 계속하다가 뒤늦게 저장소가 아닌 경로라는 오류를 만났다. MAST multi-agent study도 context loss를 분류된 실패 유형 중 하나로 보고한다. 두 자료 모두 stale project docs가 Codex 실패를 일으키는 비율을 측정하지 않았다. — [Zhao et al. (2026 preprint)](https://arxiv.org/html/2607.09510v1); [Cemri et al., MAST (NeurIPS 2025)](https://papers.nips.cc/paper_files/paper/2025/hash/b1041e52d3be19f0a9bc491657488e4a-Abstract-Datasets_and_Benchmarks_Track.html)
- **가능한 원인 — 가설:** 작업 가정과 실제 repository state가 어긋났거나, Agent가 tool output을 선택적으로 읽어 현재 위치·관련 파일·최신 지침을 확인하지 않았을 수 있다. 이는 관찰된 wrong-directory 사례로부터 가능한 설명이지, stale docs의 인과 효과에 대한 실험 결과가 아니다.
- **Engineering Response:** 명령 뒤 현재 경로·git 상태·핵심 출력 같은 관찰 가능한 증거를 확인하고, 필요한 파일·재현 조건·제약을 prompt에 제공한다. 저장소 지침은 확인 가능한 source of truth로 두고 오래된 결정은 갱신 절차를 마련한다. 이 대응은 해당 사례의 오류를 잡는 설계 제안이며, 논문에서 모든 대응의 효과를 비교한 결과는 아니다.

#### B. Instruction Failure

- **관찰된 근거:** Zhao et al.은 명시된 task specification을 놓치는 “specification neglect”를 실패 trigger 범주로 코딩했다. MAST는 요구사항 무시, 역할 미준수와 같이 지시·역할에 대응하는 실패 패턴을 여러 agent system에서 관찰했다. 서로 다른 연구의 분모·task·annotation 체계가 다르므로 비율을 직접 비교할 수 없다. — [Zhao et al. (2026 preprint)](https://arxiv.org/html/2607.09510v1); [Cemri et al., MAST (NeurIPS 2025)](https://arxiv.org/html/2503.13657v2)
- **가능한 원인 — 가설:** 다수 요구사항이 섞이거나, constraint가 결과를 평가하는 방식과 연결되지 않으면 일부 조건을 놓칠 수 있다. “충돌 지침은 반드시 scope creep를 일으킨다”는 인과 주장은 이 근거에서 확인되지 않는다.
- **Engineering Response:** 요청에서 Goal·경계·기존 동작 보존 조건·완료 검증 방법을 분리해 명시하고, 구현 전에 핵심 acceptance condition을 되짚게 한다. Codex Prompting의 제약과 verification method 안내가 직접 뒷받침한다. — [Codex Prompting](https://developers.openai.com/codex/prompting)

#### C. Execution Failure

- **관찰된 근거:** Zhao et al.의 실제 trajectory에는 잘못된 작업 디렉터리에서 build를 수행한 사례가 있다. 그 논문은 시스템의 지식 부족, capability limit, environment blocker 또한 구분한다. 환경 문제 자체가 항상 Agent의 잘못인 것은 아니다. MAST는 reasoning과 실제 action의 mismatch 유형을 코딩했으나, 이는 모든 command 오류가 동일한 원인을 갖는다는 뜻은 아니다. — [Zhao et al. (2026 preprint)](https://arxiv.org/html/2607.09510v1); [Cemri et al., MAST (2025)](https://arxiv.org/html/2503.13657v2)
- **가능한 원인 — 가설:** 명령이 반환한 실패 신호를 무시하거나, CWD·설치된 tool·권한·환경 변수를 확인하지 않은 채 전제할 수 있다. 아직 실행되지 않은 명령의 결과를 모델이 추론만으로 보증할 수는 없다.
- **Engineering Response:** 명령 실행 전 CWD와 대상 repo를 확인하고, 실행 후 exit status와 핵심 출력에 근거해 다음 단계로 간다. 설치·권한·network 문제가 있으면 코드 결함과 환경 blocker를 구분해 보고한다. Codex 실행 가능 범위는 local tool·sandbox·승인 정책에 달려 있다. — [Codex CLI](https://developers.openai.com/codex/cli)

#### D. Verification Failure

- **관찰된 근거:** MAST는 조기 종료, 불완전하거나 잘못된 검증을 multi-agent failure mode로 관찰했다. AgentLens의 OpenHands trajectory 분석은 pass로 끝나도 검증 부족이나 blind retry에 기대는 결과가 있을 수 있다고 보고한다. Wang et al.의 SWE-bench 검증은 benchmark plausible 판정, 개발자 suite 통과, reference patch와 동등한 동작이 서로 다를 수 있음을 보였다. 이는 서로 다른 실험 설정에서 나온 증거이며 Codex의 실패율은 아니다. — [Cemri et al., MAST (2025)](https://arxiv.org/html/2503.13657v2); [Sahoo et al., AgentLens (2026 preprint)](https://arxiv.org/abs/2605.12925); [Wang et al. (ICSE 2026)](https://arxiv.org/abs/2503.15223)
- **가능한 원인 — 가설:** test suite가 요구사항을 충분히 포괄하지 않거나, 반복 실패 후 테스트 결과와 무관하게 완료를 보고할 수 있다. “test 통과는 무가치하다”가 아니라, 통과는 선택된 검증 surface와 입력 범위에 대한 근거라고 해석한다.
- **Engineering Response:** 주장과 증거 범위를 일치시킨다. 실행한 test/build/lint/benchmark와 결과를 보고하고, 빠진 검증은 빠졌다고 표시한다. 위험이 큰 변경은 test 외 diff review, 명시된 acceptance condition, 필요 시 별도 benchmark를 더한다. 성공/실패 assertion과 결과가 보이는 evaluation을 설계한다. — [OpenAI Evaluation Best Practices](https://developers.openai.com/api/docs/guides/evaluation-best-practices); [Codex Code Review](https://developers.openai.com/codex/code-review)

#### E. Coordination Failure

- **관찰된 근거:** MAST는 multi-agent system에서 역할·정보 전달·정렬·조정 실패를 분석하고, handoff 중 필요한 정보가 빠지는 사례를 보고한다. 해당 paper의 “step repetition”은 반복 행동 문제이지, 여러 subagent가 같은 파일을 중복 편집했다는 직접 증거로 읽으면 안 된다. 이 조사에서 Codex subagent의 중복 편집 발생률이나 일반적 파일 격리 보장은 확인하지 못했다. — [Cemri et al., MAST (NeurIPS 2025)](https://papers.nips.cc/paper_files/paper/2025/hash/b1041e52d3be19f0a9bc491657488e4a-Abstract-Datasets_and_Benchmarks_Track.html)
- **가능한 원인 — 가설:** 소유 파일·하위 목표·공유 context·handoff 산출물이 명시되지 않으면 병렬 작업 결과가 중복되거나 통합 시 충돌할 수 있다. 이 부분은 실제 subagent 중복 실험으로 입증된 원인이 아니다.
- **Engineering Response:** 병렬 작업에서 파일/책임 경계와 공유 상태, 결과 handoff 형식, 최종 통합 담당을 정하고 통합 후 변경분을 검증한다. 필요하면 작업을 순차화한다. MAST의 역할·조정 failure mode와 Codex 공식 delegation 기능은 조직 설계의 동기를 제공하지만, 이 specific response의 효과를 수치화하지 않는다. — [Codex Subagents](https://developers.openai.com/codex/multi-agents); [Cemri et al., MAST (2025)](https://arxiv.org/html/2503.13657v2)

#### F. Memory Failure

- **관찰된 근거:** Xiong et al.의 ACL 2026 연구는 기억에서 과거 경험을 반복 검색하는 agent 설정에서 오류 전파와 과업에 맞지 않는 경험 재사용이 발생할 수 있음을 실험했다. 연구 과제는 의료기록 code generation, autonomous driving, IoT 분류 등을 포함하며, **Codex의 프로젝트 Markdown Memory·AGENTS.md·Skills를 평가하지 않았다.** 이 연구를 “Codex Memory가 자주 낡는다”는 주장으로 바꾸지 않는다. — [Xiong et al., ACL 2026](https://aclanthology.org/2026.acl-long.27/)
- **가능한 원인 — 가설:** 저장된 사실에 시점·근거·적용 범위가 없거나, 과거 예외를 현재 프로젝트의 지속 규칙처럼 재사용하면 stale assumption이 남을 수 있다. 이번 근거는 Codex 저장소 지식의 stale rate를 측정하지 않았다.
- **Engineering Response:** 지속 메모에는 source/date/owner/scope를 붙이고, 변경된 정보는 대체하거나 제거한다. 기억된 정보가 task의 current source of truth와 맞는지 확인하고, 반복 실패가 나면 memory를 더 쌓기 전에 적합성을 검토한다. 논문의 memory quality 통제 결과는 이 대응을 시사하지만, Codex용 검증 절차는 project-specific 제안이다.

#### G. Harness Failure

- **관찰된 근거:** OpenAI의 Harness Engineering 현장 사례는 초기 환경의 누락된 도구·불충분한 structure·불명확한 정보가 작업을 어렵게 했고, 이를 보완해 결과와 관찰 수단을 Agent가 다루기 쉽게 만들었다고 보고한다. 이는 한 팀이 직접 보고한 engineering 사례이지 controlled experiment는 아니다. MAST도 Agent system 설계와 고수준 verification의 차이가 task outcome에 영향을 줄 수 있는 사례를 제시한다. 이 조사에서는 “오래된 Skill”이 coding-agent 실패의 독립 범주로 얼마나 흔한지 측정한 연구를 찾지 못했다. — [Lopopolo, OpenAI Harness Engineering (2026-02-11)](https://openai.com/index/harness-engineering/); [Cemri et al., MAST (2025)](https://arxiv.org/html/2503.13657v2)
- **가능한 원인 — 가설:** 필요한 도구가 없거나, workflow의 검증 단계가 명령 가능한 기준과 연결되지 않거나, 지침이 현재 repo·모델·CLI와 동기화되지 않을 수 있다. stale Skill 및 tool config 사례의 Codex-specific 빈도는 입증되지 않았다.
- **Engineering Response:** 반복되는 마찰을 재현 가능한 fixture·task로 남기고, 필요한 tool/permission/context/verification을 Harness에서 수정한 뒤 다음 실행으로 확인한다. OpenAI case는 tool·환경·관찰성 개선 패턴의 근거지만, 자동 self-modification 또는 보편적으로 가장 좋은 Harness 형식을 뜻하지 않는다.

### Inferences

- 일곱 범주를 교육에서 쓰려면 “문헌의 공식 taxonomy”가 아니라 실패를 분류해 대응을 연습하기 위한 **수업용 lens**라고 표시한다. 하나의 실행은 Context·Instruction·Execution·Verification 중 여러 원인에 걸칠 수 있다.
- 직접 관찰된 failure와 가설을 시각적으로 구분한다. 예: `OBSERVED`는 trajectory·논문·제품 사례에서 확인된 사건/분류, `POSSIBLE CAUSE`는 그 증거로부터 가능한 설명, `RESPONSE`는 대응 제안이다. 수업 Demo가 새 실패를 보여주면 그 Demo 결과만을 별도 근거로 기록하고, 문헌 결과와 섞지 않는다.
- Harness 개선의 Loop를 설명할 때 “Agent가 자동으로 자기 Skill을 고쳐 영구 학습한다”고 말하지 않는다. 제품이 지원하는 건 사용자가 지시한 작업·tool 실행·검증 반복이며, Harness 수정과 평가 기준 갱신은 별도 설계 선택과 사람의 검토를 포함한다. 이는 현재 Codex 문서와 OpenAI 사례에서 가능한 범위를 구분한 해석이다.

### Gaps

- Codex 제품 버전/모델별로 Context·Instruction·Execution·Verification 실패 비율을 비교한 공개 dataset을 확인하지 못했다.
- stale AGENTS.md/Skill, project memory 오염, subagent 중복 편집, 파일시스템 context transfer 문제에 대한 Codex-specific 빈도나 controlled causal study를 확보하지 못했다.
- MAST는 여러 framework·과제를 다룬 multi-agent 연구로 coding-only나 Codex-only 결과가 아니다. Zhao et al.은 특정 CLI coding benchmark 및 여러 model/scaffold 조합에 한정된 2026 preprint다. AgentLens는 OpenHands trajectory 분석, SWE-bench study는 benchmark patch/test validity 평가다. 각각의 수치와 범주를 Codex의 prevalence로 전환하지 않는다.
- 출처 범위: Zhao et al.은 2026 preprint(**confidence MEDIUM**, CLI·Terminal-Bench 표본과 annotation 정의에 한정, 제품 적용 변동성 **HIGH**). Wang et al.은 ICSE 2026 논문(**confidence HIGH** 해당 SWE-bench 평가 안에서, 다른 suite/generalization은 미확정). Sahoo et al.은 2026 preprint(**confidence MEDIUM**, OpenHands/선정 trajectory에 한정). Cemri et al. MAST는 NeurIPS 2025 Datasets & Benchmarks 논문(**confidence HIGH** taxonomy와 연구 표본, coding/Codex 일반화는 **MEDIUM/LOW**). Xiong et al.은 ACL 2026 peer-reviewed study(**confidence HIGH** 연구된 memory-agent 과제, Codex memory에 대한 적용 confidence LOW). OpenAI Harness 글은 2026-02-11 공식 case study(**confidence MEDIUM**, 단일 조직의 self-reported 사례). 모든 자료는 2026-09-25에 확인했으며 연구 원 결과의 변동성은 낮지만 현 제품으로의 이전 가능성은 높게 변한다.
