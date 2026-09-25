# AI-Native Development and Developer Role Shift

조사 기준일: 2026-09-25. STEP 03 §§41–42 근거 노트. 용어 사용, 업계
권고, 관찰·실험 결과, 본 교육의 해석을 구분한다. 공개 연구는 대상과
도구가 빠르게 바뀌므로 아래 결과를 현재 모든 팀의 상태로 일반화하지 않는다.

## 41. “AI-Native Development” 용어와 교육용 운영 정의

### Takeaway

검토한 OpenAI·산업 분석·학술 자료에서 “AI-Native”는 공통 표준 정의라기보다
팀/프로세스, 업계의 변화 방향, 학술적 미래 비전 등 서로 다른 범위에 쓰인다.
따라서 “AI에게 질문하는 단계에서 AI agent가 일할 개발 환경과 검증·피드백
흐름을 설계하는 단계로의 이동”은 교육 서사를 연결하는 데 유용하나, 교육에서
정하는 운영 정의라고 한정해야 한다.

### Cited Findings

- **OpenAI 공식 제품·교육 자료:** 현재 OpenAI Codex 가이드는 “Building an
  AI-Native Engineering Team”이라는 제목으로, 코딩 agent를 계획·설계·구현·
  테스트·리뷰·배포·유지보수에 연결하는 팀/process guide를 제공한다. 예시
  구조는 반복 작업을 agent에 맡기고, 사람이 검토하고, 전략·최종 결정은
  조직이 소유하는 `Delegate / Review / Own`이다. 이는 OpenAI의 제품·운영
  관점 및 권고이지 통제 실험이나 업계 합의의 증거는 아니다. 웹 문서에는
  발행일이 표시되지 않아 2026-09-25 현재 확인한 판본으로 기록한다.
  [OpenAI Codex, Building an AI-Native Engineering Team](https://developers.openai.com/codex/guides/build-ai-native-engineering-team)
- **산업 분석가 용례:** Gartner의 2025-01-13 「Innovation Insight for
  AI-Native Software Engineering」 공개 초록은 AI-native 시대를 개발자
  창의성, agentic workflow, 빠른 feedback loop로 설명한다. 본문은 고객
  전용으로 잠겨 있으므로 여기서 인용하는 범위는 공개 초록에 한정한다.
  분석가의 프레임워크이지 경험적 효과 크기를 측정한 연구는 아니다.
  [Gartner, Innovation Insight for AI-Native Software Engineering](https://www.gartner.com/en/documents/6076795)
- **학술 비전 용례:** 2026-08-21 출판된 ACM TOSEM 논문은 “Software
  Engineering 3.0”이라는 AI-native 비전을 제시한다. 이를 코드 중심에서
  intent-first·대화형 개발로 이동하고 인간은 요구·의도를, AI teammate는
  구현을 맡는 접근으로 서술한다. 이 논문은 문헌 조사, 학계·산업 리더와의
  논의 및 저자들의 경험을 바탕으로 한 비전/도전과제 로드맵이며, 모든 조직의
  실제 변화나 도달점을 관찰한 종단 연구가 아니다.
  [Hassan et al., Towards AI-Native Software Engineering (SE 3.0), ACM TOSEM](https://doi.org/10.1145/3807901)
- **다른 산업 연구의 어휘:** Google DORA의 2025 보고서는 이름부터
  “State of AI-Assisted Software Development”로 두며, 거의 5,000명의 기술
  종사자 설문과 100시간이 넘는 정성 자료를 바탕으로 AI 도입과 팀·기술
  환경의 관계를 분석한다. 이 보고는 “AI-native”를 단일 표준 용어로 정하지
  않고, AI-assisted development와 이를 가능하게 하는 내부 context, 플랫폼,
  테스트·version control·빠른 feedback 환경을 다룬다. 결과는 설문 기반
  관계이며 인과 효과의 추정치로 해석할 수 없다.
  [Google Cloud/DORA, 2025 State of AI-Assisted Software Development](https://cloud.google.com/blog/products/ai-machine-learning/announcing-the-2025-dora-report)

### Inferences

- 검토한 주요 자료에서 “AI-native”의 범위는 하나로 고정되지 않는다. OpenAI는
  agent를 전 SDLC에 연결하는 engineering team/process를, Gartner는 개발
  방식의 시대·특성을, 학술 논문은 제안된 SE 3.0 패러다임을 가리킨다. 이는
  사용례의 비교에서 얻은 결론이지, 가능한 모든 자료를 조사해 표준이 없음을
  증명한 것은 아니다.
- 이 교육에서는 다음처럼 범위를 제한해 운영상 정의할 수 있다.

  > **이 교육에서 AI-Native Development란** 개발자가 목표·제약과 판단 기준을
  > 정하고, AI agent가 repository context와 도구를 사용해 개발 업무를 수행하며,
  > 사람이 테스트·리뷰·feedback으로 결과를 확인하고 다음 작업 방식을 개선하도록
  > 개발 환경과 workflow를 설계하는 접근을 뜻한다. 이는 업계 표준 정의나 모든
  > 조직이 도달할 미래를 선언하는 문장이 아니다.

- 위 정의는 단발성 질문에서 Context/Harness/Loop를 포함한 일하는 체계로
  발전하는 본 교육의 Story와 잘 맞는다. 다만 “AI-native”라는 외부 용어 자체가
  이 Story를 유일하게 의미한다고 가르치면 안 된다. OpenAI guide의 전 SDLC
  접근 및 DORA의 조직·feedback 환경 논의는 이 교육용 해석의 근거일 뿐,
  최종 Curriculum이나 Slide 표현을 정하는 결정은 아니다.

### Gaps

- AI-native software engineering에 관한 공개 자료를 체계적으로 모두 분류하거나
  표준화 문서·전문가 합의를 확인하지 않았다. 검토 범위 내에서는 안정된 공통
  정의를 찾지 못했으나, 이를 “정의가 전혀 없다”로 확대할 수 없다.
- OpenAI의 guide와 Gartner의 전체 보고서는 제품·산업 권고 성격이 강하며
  AI-native 조직의 성과를 공통 지표로 장기간 추적한 비교 연구가 아니다.
- 어떤 구체적 환경(예: agent 수, 자동화 수준, 인간 승인 단계)이 모든 개발팀에
  적합한지 이 자료들로 정할 수 없다. 회사의 실제 workflow·정책과 학습자
  환경은 별도 확인이 필요하다.

## 42. AI 지원 개발에서 개발자 역할과 필요한 전문성

### Takeaway

자료와 일부 실험은 초안 작성 비중이 줄어드는 작업에서 목표 정의, 요구사항
분해, repository context 제공, architecture 판단, 리뷰·검증·평가 및 최종
책임의 중요성을 지지한다. 그렇다고 코딩이나 software-engineering 지식이
불필요해졌다고 입증하지 않는다. 오히려 현재 근거는 AI 결과를 이해하고
틀림을 찾아내는 코드 읽기·debugging·개념 이해가 감독에 필요함을 뒷받침한다.

### Cited Findings

- **OpenAI의 역할 프레임(현행 Codex guide):** guide는 사람이 specification의
  모호함·edge case를 판단하고 일을 하위 작업으로 나누도록 돕는 agent를
  제안한다. Agent는 first-pass 구현·테스트·리뷰를 맡을 수 있고, 엔지니어는
  product behavior/spec을 명확히 하며 architecture·성능·보안·migration
  위험·maintainability를 검토하고 최종 merge/release를 소유한다고 권한다.
  테스트 생성도 제안하지만, 의도와 edge case를 확인하는 사람의 adversarial
  판단을 남겨둔다. 제품 제공자의 실무 가이드이며 전 조직의 실측 직무분석은
  아니다. 발행일은 공개 문서에서 확인되지 않았다.
  [OpenAI Codex, Building an AI-Native Engineering Team](https://developers.openai.com/codex/guides/build-ai-native-engineering-team)
- **개발자-보조도구 상호작용 관찰:** Barke et al.은 OOPSLA 2023 grounded
  theory 연구에서 다양한 AI 보조 경험을 가진 20명이 4개 언어로 작업하는
  과정을 관찰했다. 발견된 두 사용 방식은 다음 단계를 알고 AI를 가속기로
  쓰는 “acceleration”과, 다음 단계를 모를 때 선택지를 살피는 “exploration”이다.
  이는 개발자가 AI 응답을 수동 수신하는 것만이 아니라 작업 의도와 선택지를
  주도한다는 소규모 관찰 근거다. 2023년 code-completion 보조기 연구라 현재의
  자율형 multi-step coding agent와 조직 역할의 변화량을 측정하진 않았다.
  [Barke et al., Grounded Copilot (OOPSLA 2023)](https://arxiv.org/abs/2206.15000)
- **전문 개발자 역할의 종단 설문:** Vella & Blincoe는 2026-05-22 arXiv
  preprint에서 전문 개발자 설문을 6개월 간격으로 시행했다(첫 시점 158명,
  두 번째 101명, 두 시점 matched cohort 95명). 82%가 코드 작성 시간이
  줄었다고 보고했고, 저자들은 생성에서 검증 활동으로의 focus shift와 AI 결과를
  지시·평가·수정하는 “supervisory engineering work”를 제안했다. 84%가 두
  시점 모두 생산성 향상을 보고했지만, matched cohort에서 적어도 한 차원의
  개발자 경험 악화를 보고한 비율은 14%에서 27%가 됐다. 이는 자기보고 설문
  결과로 객관적 업무시간·코드 품질 또는 인과적 직무 대체의 측정은 아니다.
  [Vella & Blincoe, The Impact of AI Coding Assistants on Software Engineering](https://arxiv.org/abs/2605.23135)
- **코드·software-engineering 지식이 필요한 이유에 대한 통제 실험:** Anthropic
  연구자들의 2026-01 arXiv preprint는 일주일에 최소 한 번 Python을 쓰고 AI
  coding assistance를 사용해 본 개발자 52명(각 실험군 26명)을 무작위 배정해,
  처음 쓰는 Trio 비동기 라이브러리의 두 작업 후 이해도 퀴즈를 실시했다. AI
  지원군은 GPT-4o 기반 code-aware assistant를 사용했다. AI 지원군 퀴즈 평균은
  50%, 직접 코딩군은 67%였고 차이는 통계적으로 유의했다(Cohen’s d=0.738,
  p=0.010); AI 지원군은 평균 약 2분 빨랐지만 완료시간 차이는 유의하지 않았다.
  평가 영역은 debugging, code reading, library 개념 이해였으며, 이는 생성 코드의
  오류와 부적절한 사용법을 판단하는 데 필요한 역량으로 논문이 설정했다. 단일
  짧은 학습 과제이므로 장기간 업무 성과나 AI agent 감독 전반의 직접 추정치는
  아니다.
  [Shen & Tamkin, How AI Impacts Skill Formation (arXiv v2)](https://arxiv.org/abs/2601.20245)
- **프로그래밍 초급자에 대한 보조 근거:** 2025 FSE Companion 연구는 CS1 학생
  32명이 Code Llama가 생성한 코드를 읽는 160개 과제를 분석해 prompt 이해
  성공률 59.3%와 생성 코드 이해 성공률 32.5%를 보고했다. 초급 학습자 연구이고
  현업 개발자·저장소 Agent 실험이 아니지만, 자연어로 목표를 말하는 것만으로
  생성 코드를 안전하게 이해·판단할 수 있다고 가정하지 말라는 근거다.
  [Zi et al., Beginners Struggle to Understand LLM-Generated Code (FSE Companion 2025)](https://arxiv.org/abs/2504.19037)
- **AI 도구 사용 능력과 개발 경력의 관계:** Microsoft Research가 2025-06
  공개한 3개 기업의 무작위 field experiment(Microsoft, Accenture, 익명
  Fortune 100, 합계 4,867 개발자)는 AI code-completion assistant를 쓸 수
  있도록 한 그룹에서 완료 task 수가 26.08% 높다고 보고했다(SE 10.3%); 저자들은
  덜 경험한 개발자에게서 더 큰 사용률·생산성 향상을 관찰했다. 이는 특정 inline
  completion 도구와 task 수 지표의 결과다. “초급자가 더 이득”은 숙련된 리뷰·
  architecture 판단이 불필요하다는 뜻이 아니며 coding-agent workflow 전체로
  확장되지 않는다.
  [Cui et al., The Effects of Generative AI on High-Skilled Work (Microsoft Research, 2025)](https://www.microsoft.com/en-us/research/publication/the-effects-of-generative-ai-on-high-skilled-work-evidence-from-three-field-experiments-with-software-developers/)
- **생산성 수치의 맥락 의존성:** METR의 2025 RCT는 익숙한 대형 OSS 저장소에
  평균 5년 기여해 온 개발자 16명이 선택한 실제 작업 246개에서, 2025년 2–6월의
  Cursor Pro와 주로 Claude 3.5/3.7 Sonnet을 쓰도록 한 조건을 비교했다. AI 허용
  조건에서 작업시간이 평균 19% 늘었고 95% CI는 2–39% 증가였다. 반면 앞선
  Microsoft 기업 실험은 완료 task 수 증가를 보고했다. 모집단·도구·task·측정량이
  달라 두 추정치는 직접 대결하는 수치가 아니다.
  [Becker et al., Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity](https://arxiv.org/abs/2507.09089)
- **2026년 측정 한계와 자기보고:** METR은 agent 도입 후 57명(이전 참여자 10,
  신규 47)의 2025-08 이후 연구에서, AI 없는 조건을 피하는 참여자·task 선택,
  agent 대기 중 다른 일을 병행할 때의 시간 측정 문제 등을 확인해 추정치를
  “현 생산성 효과의 신뢰할 만한 신호가 아니다”라고 발표했다. 신규 참여자의
  원시 속도 추정은 -4%(95% CI -15%–+9%)였지만, 선택 편향으로 크기를 판단할
  수 없다고 했다. DORA 2025는 거의 5,000명 설문에서 90%가 업무에서 AI를
  사용하고 80% 이상이 생산성 향상을 인식했다고 보고하는 한편, AI 도입과
  software-delivery stability 사이에는 부정 관계도 보고했다. 각각 실험 중단
  성격의 방법론 업데이트와 자기보고/상관 연구이므로 일반적 생산성 약속이
  아니다.
  [METR, Changing our Developer Productivity Experiment Design (2026-02-24)](https://metr.org/blog/2026-02-24-uplift-update/); [Google Cloud/DORA 2025](https://cloud.google.com/blog/products/ai-machine-learning/announcing-the-2025-dora-report)

### Inferences

- 근거에 맞는 역할 표현은 “개발자는 코딩을 그만둔다”가 아니라 “모든 코드를
  직접 처음부터 작성하는 비중이 줄 수 있고, 목표·요구사항·분해·context·설계
  판단·검증·품질 책임의 상대적 중요성이 커질 수 있다”이다. 이 경향은 OpenAI의
  권고와 설문상 자기보고 역할 변화로 뒷받침되지만 모든 팀의 실제 변화나 도착점은
  아니다. [OpenAI Codex guide](https://developers.openai.com/codex/guides/build-ai-native-engineering-team); [Vella & Blincoe, 2026 preprint](https://arxiv.org/abs/2605.23135)
- “AI fluency”와 software-engineering expertise는 대체 관계로 관찰되지 않았다.
  전자는 agent에 의도를 전달하고 작업·context를 운용하는 능력, 후자는 요구의
  정합성·architecture·오류·비기능 조건을 판단하는 능력으로 교육에서 구별해
  설명할 수 있다. 다만 두 역량이 실제 저장소 agent 과제의 성과를 어떻게
  상호작용하는지 직접 분리해 측정한 현재 근거는 찾지 못했다. 초급자의 code
  comprehension 문제와 Trio 학습 RCT는 특히 읽기·debugging·개념 이해를 완전히
  건너뛰기 어렵다는 제한된 근거다. [Shen & Tamkin, 2026 preprint](https://arxiv.org/abs/2601.20245); [Zi et al., FSE Companion 2025](https://arxiv.org/abs/2504.19037)
- `Goal / Judgment / Verification / Responsibility`는 외부 표준으로 검증된 직무
  모델이라고 부를 근거가 없다. 이 네 항목은 프로젝트의 Source of Truth가
  개발자의 책임으로 고정한 내용을 교육에서 기억하기 쉽게 묶는 **프로젝트
  자체의 Teaching Model**로 소개할 수 있다. 각각 목표·요구 정의, trade-off와
  architecture 판단, 기준 설정·결과 해석, risk·review·최종 책임으로 풀어 설명할
  수 있다. 이 교육 모델의 적절성은 외부 연구에서 검증된 효과가 아니라
  `MASTER_PLAN`의 기획 원칙이다. [MASTER_PLAN.md](../../plan/MASTER_PLAN.md) §15, §39; [OpenAI Codex guide](https://developers.openai.com/codex/guides/build-ai-native-engineering-team); [Shen & Tamkin, 2026 preprint](https://arxiv.org/abs/2601.20245)
- 본문 교육에서 생산성 숫자는 “효과 보장”이 아니라 실험 조건·업무 종류·측정
  단위가 다르면 결과도 달라지고, task 처리와 안정성·품질을 함께 확인해야 한다는
  방법론 사례로만 쓰는 것이 타당하다. 모델·제품·AI 사용 경험·측정 설계가
  빠르게 바뀌므로 수치를 교육자료에 옮기기 전 최신 원 출처를 다시 확인해야
  한다. [Microsoft Research 2025](https://www.microsoft.com/en-us/research/publication/the-effects-of-generative-ai-on-high-skilled-work-evidence-from-three-field-experiments-with-software-developers/); [METR 2025 RCT](https://arxiv.org/abs/2507.09089); [METR 2026 methods update](https://metr.org/blog/2026-02-24-uplift-update/)

### Gaps

- AI coding tool/agent가 개발자의 실제 업무시간을 어떻게 바꾸는지에 대한
  연구는 빠르게 도구가 변하고, 설문·field experiment·task-level RCT가 서로
  다른 결과변수를 사용한다. Codex와 현재 agentic multi-agent 작업에서 초급·
  숙련 개발자의 역할과 성과를 비교한 장기 반복 연구는 이번 조사에서 확인하지
  못했다.
- Anthropic의 RCT는 GPT-4o 기반 chat assistant로 처음 접하는 단일 Python
  library를 배우는 단기 실험이다. 현업 repository 유지보수, 장기간 숙련도
  형성, 모든 사용 방식에서의 영향은 판단할 수 없다. 참여 방식별 퀴즈 차이는
  탐색적 분류이며 저자도 사용 패턴과 학습 결과 사이의 인과를 주장하지 않는다.
- `Goal / Judgment / Verification / Responsibility`의 학습 효과, 네 항목의
  완전성, 다른 역할 모델 대비 장점은 별도 교육평가 없이 단정할 수 없다.
- 생산성을 기업 전체 효과로 수치화하는 표준 기준은 이번 1차 연구 검토에서
  확인하지 못했다. 과제 완료 수·자기보고·작업 시간·제품 품질·안정성은 서로
  다른 측정치이므로 하나의 보편적 향상률로 통합하지 않는다.
- Gartner 본 보고서 전문은 유료 공개 제한이며, OpenAI의 AI-native guide는
  문서 발행일이 확인되지 않았다. 이 자료들은 용례/권고를 확인하는 데는
  쓸 수 있지만 용어의 정착 여부를 완결적으로 판정하는 자료는 아니다.
