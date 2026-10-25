# Slide ID migration —115to114

Decision: DEC-0097. Baseline:`b53b8dc`.

S01–S81 retain IDs. S82–S99 are redesigned ACT4 positions with new BEAT-072–083.
Prior S100 GPU page is deleted. Prior S101–S115 shift down by1.
Historical asset/Trial/State/Demo IDs and filenames do not change.
New CASE-LOOP-01 is a design, not a Trial or observed Demo.

| Prior115ID | Current114ID | Treatment / title |
|---|---|---|
| S01 | S01 | AI를 Repository로 데려가기 |
| S02 | S02 | AI에게 지금 무엇을 맡기고 있는가? |
| S03 | S03 | 작은 질문에는 Chatbot이 유용하다 |
| S04 | S04 | 질문이 커지면 Context를 모으는 일이 생긴다 |
| S05 | S05 | 파일명을 주지 않으면 Agent는 어디부터 볼까? |
| S06 | S06 | Crop은 기대한 폭보다 한 열을 더 포함했다 |
| S07 | S07 | 테스트·명세·구현을 연결해 원인을 설명했다 |
| S08 | S08 | 다른 테스트 오류는 임시 폴더 생성에서 발생했다 |
| S09 | S09 | 원인 판단에는 코드와 실행 환경 정보가 필요했다 |
| S10 | S10 | Chatbot에 이 자료를 직접 전달한다면? |
| S11 | S11 | Agent가 자료를 직접 찾아 연결했다 |
| S12 | S12 | Repository 작업은 Codex에서 시작한다 |
| S13 | S13 | Repository 접근과 Task 의도는 별개다 |
| S14 | S14 | Repository를 보면 내가 원하는 것까지 알까? |
| S15 | S15 | Prompt를 작업 명세로 만들기 |
| S16 | S16 | Task에는 무엇이 아직 정해지지 않았을까? |
| S17 | S17 | 요청만으로는 의도가 보이지 않는다 |
| S18 | S18 | 원하는 작업 경로를 Prompt에 담는다 |
| S19 | S19 | 개발자가 정해야 하는 경계 |
| S20 | S20 | Task Specification의 다섯 책임 |
| S21 | S21 | 더 긴 Prompt보다 분명한 경계 |
| S22 | S22 | 요청한 과정은 기록에도 남았을까? |
| S23 | S23 | 조사에서 한 줄 변경까지 |
| S24 | S24 | 변경 결과와 확인 증거 |
| S25 | S25 | Generated ≠ Done |
| S26 | S26 | Check마다 확인하는 범위 |
| S27 | S27 | 지시와 참고 자료의 구분 |
| S28 | S28 | 입력과 기대 결과의 작은 예시 |
| S29 | S29 | 바로 검토할 수 있는 결과 형식 |
| S30 | S30 | 근거가 있는 설명과 미확인의 구분 |
| S31 | S31 | 결과를 바꾸는 결정에서 확인 질문 |
| S32 | S32 | 큰 작업을 검토할 결과물로 나누기 |
| S33 | S33 | 기준을 지정한 코드 리뷰 요청 |
| S34 | S34 | 구체적인 근거로 수정 방향 피드백 |
| S35 | S35 | 이번 Task인가, 계속 유지할 Project 정보인가? |
| S36 | S36 | 반복하는 설명을 두 범주로 나누기 |
| S37 | S37 | 필요한 정보를 찾아 쓰게 하기 |
| S38 | S38 | 다른 Task에 같은 설명이 반복된다 |
| S39 | S39 | 작은 Project Context의 첫 기록 |
| S40 | S40 | AGENTS.md의 지침대로 검증했다 |
| S41 | S41 | Task Prompt와 Project Context |
| S42 | S42 | 정확한 정보도 계속 늘어난다 |
| S43 | S43 | 정확하지만 이번 작업에는 불필요한 정보 |
| S44 | S44 | 정보의 범위와 제공 시점 |
| S45 | S45 | 많이 담아도 같은 근거를 똑같이 쓰는가? |
| S46 | S46 | AI가 필요한 코드를 찾았다는 것을 무엇으로 확인할까? |
| S47 | S47 | 필요한 상세 정보로 가는 길 |
| S48 | S48 | AGENTS.md에는 무엇을 남길까? |
| S49 | S49 | 정보를 지우지 않고 위치를 나누기 |
| S50 | S50 | 서로 다른 두 Task가 무엇을 읽을까? |
| S51 | S51 | Crop Task에서 관찰한 접근 |
| S52 | S52 | 의존성 질문은 설정과 소스로 답했다 |
| S53 | S53 | 두 Task에서 상세 문서 접근이 달랐다 |
| S54 | S54 | Context 정리에서 확인한 네 가지 |
| S55 | S55 | 지식은 정리됐지만 절차는 반복된다 |
| S56 | S56 | AI가 일할 방법과 환경 설계하기 |
| S57 | S57 | 두 실제 요청에 같은 절차가 반복됐다 |
| S58 | S58 | 테스트 명령을 언제 쓰고 무엇을 판단할까? |
| S59 | S59 | 목표·기준·방법을 한 작업에 적용한다 |
| S60 | S60 | 반복 절차를 Skill로 모으는 이유 |
| S61 | S61 | Skill 발견·호출·본문 포함의 근거 |
| S62 | S62 | Skill 지침과 실제 작업 기록의 대응 |
| S63 | S63 | 대화로 재사용할 Skill 만들기 |
| S64 | S64 | 절차는 재사용하고, 답은 근거로 정한다 |
| S65 | S65 | 밝기 통계 계산의 성능 개선 후보 |
| S66 | S66 | 선택한 변경의 시간·메모리·동작 확인 |
| S67 | S67 | 한 Agent 조사와 Subagent 역할 분리 |
| S68 | S68 | 대화로 조사 Agent 만들기 |
| S69 | S69 | 밝기 통계 작업을 나누지 않은 이유 |
| S70 | S70 | 이번 Context와 다시 쓸 지식 |
| S71 | S71 | 실제 Demo 지식의 원래 출처 |
| S72 | S72 | 밝기 통계 작업에 쓰인 구성의 역할 |
| S73 | S73 | 함께 작동하는 작업 환경, Harness |
| S74 | S74 | 만든 Harness를 다음 프로젝트의 기반으로 |
| S75 | S75 | 공통 기반에 프로젝트 기준을 연결한다 |
| S76 | S76 | 이번 성공만으로 다음 작업까지 확인되지는 않는다 |
| S77 | S77 | 첫 결과 뒤에도, 확인할 일이 남는다면? |
| S78 | S78 | 남은 문제를 다음 수정으로 이어주는 사람 |
| S79 | S79 | 같은 목표의 수정과 검토가 끊기지 않게 |
| S80 | S80 | 다음 수정에 넘길 기록 |
| S81 | S81 | 내가 매번 이어 주는 다음 단계는 무엇일까? |
| S82 | S82 | ACT4 replacement: 목표를 이룰 때까지 수정하고 검토하기 |
| S83 | S83 | ACT4 replacement: 다음 수정도 사람이 매번 이어줘야 할까? |
| S84 | S84 | ACT4 replacement: 먼저, 무엇이 되면 완료인지 정한다 |
| S85 | S85 | ACT4 replacement: 모델 A가 첫 변경 후보를 만든다 |
| S86 | S86 | ACT4 replacement: 실제 동작과 비용은 도구로 확인한다 |
| S87 | S87 | ACT4 replacement: 모델 B는 무엇을 근거로 검토할까? |
| S88 | S88 | ACT4 replacement: 지적이 다음 수정으로 이어진다 |
| S89 | S89 | ACT4 replacement: 고쳤다면, 같은 기준으로 다시 본다 |
| S90 | S90 | ACT4 replacement: 같은 목표의 구현·검토 루프 |
| S91 | S91 | ACT4 replacement: 언제 계속하고, 언제 끝낼까? |
| S92 | S92 | ACT4 replacement: 구현한 모델에게 다시 물으면 충분할까? |
| S93 | S93 | ACT4 replacement: 다른 모델의 관점이 도움이 된 실험 |
| S94 | S94 | ACT4 replacement: 잘 만드는 능력과 잘 검토하는 능력 |
| S95 | S95 | ACT4 replacement: 구현과 검토에 모델을 어떻게 나눌까? |
| S96 | S96 | ACT4 replacement: 검토 모델의 말도 확인해야 한다 |
| S97 | S97 | ACT4 replacement: 반복하려면 무엇을 이어받아야 할까? |
| S98 | S98 | ACT4 replacement: 확인한 근거와 아직 실행하지 않은 설계 |
| S99 | S99 | ACT4 replacement: 우리 작업에는 어떤 루프가 필요할까? |
| S100 | DELETED | GPU conceptual page removed |
| S101 | S100 | 내 업무에 맞게 조합하고 덜어내기 |
| S102 | S101 | 문제에 맞춰, 일하는 방식을 넓혔다 |
| S103 | S102 | 실제 Demo는 문제에 맞춰 바뀌었다 |
| S104 | S103 | 이번 문제에 필요한 구성만 선택했다 |
| S105 | S104 | 결과를 수용할지는 사람이 판단한다 |
| S106 | S105 | AI가 일할 조건과 확인 경로를 설계한다 |
| S107 | S106 | 모델·플랫폼이 바뀌면 Harness도 다시 본다 |
| S108 | S107 | 무엇을 남기고, 무엇을 덜어낼까? |
| S109 | S108 | 덜어낸 뒤에도 필요한 일을 하는가? |
| S110 | S109 | 내 업무에서는 무엇이 반복해서 막힐까? |
| S111 | S110 | 고른 문제에서, 다음 행동 하나로 |
| S112 | S111 | 실무 적용 팁 · 작업 환경과 기준 |
| S113 | S112 | 실무 적용 팁 · 요청 작성 |
| S114 | S113 | 실무 적용 팁 · 검증과 개선 |
| S115 | S114 | Q&A와 교육 마무리 |

114장·406분. ACT4 S82–S99는18장·81분, ACT5는 S100–S114의15장·40분이다. ACT 장수14/22/19/26/18/15와 시간43/64/82/96/81/40분. Mode Lecture172/Demo51/Case103/Reflection22/Transition26/Q&A32분이다.
ACT4 Case37/Lecture30/Reflection4/Q&A7/Transition3=81; no new executed Demo.
Former ACT4 Demo22 was a historical visual/captured allocation; the new designed walkthrough is Case.
