# STEP 08 — Slide Template Architecture

## Current ACT0 sequence — DEC-0084

S05 결과→S06 근거→S07 별도 실행 오류→S08 필요한 Context→S09 사람의 전달
→S10 Agent의 허용된 조사→S11 Codex 진입→S12 접근과 의도→S13 다음 Task.
현재99장·387분 / ACT0 13장·42분. 이전 S08–S96은 S11–S99이며, 기존
Beat/Section/Demo/Trial/State IDs·11Template/27Variant·19Notes 필드를 유지한다.
이전 세 장의 Demo8분과 Case5분을 나누고 Lecture2분만 더했다. 새 Trial·복구·
우월성 측정은 없다. 아래 과거 설명/Prototype/검증 본문의 번호는 당시 판본이다.
[현재 설계](ACT0_CONTEXT_EXPANSION.md), [이행표](SLIDE_ID_MIGRATION_99.md),
[결과](../production/evaluation/ACT_0_CONTEXT_EXPANSION.md)를 우선한다.

## Historical ACT5 reassessment — DEC-0083

S90의 AI-Native 설계 관점 뒤에 S91 조건 변화에 따른 기존 Harness 재평가,
S92 유지·통합·제거 후보, S93 같은 대표 작업·기준으로 확인을 배치한다.
S88의 처음부터 도입하지 않은 판단과, 이미 쓰던 구조의 후속 재평가는 다르다.
이전 S91/S92/S93은 S94/S95/S96이며, 문제·다음 행동에 통합·제거 후보를 포함한다.
현재96장·385분 / ACT5 11장·36분. 기존 Slide별 시간·Mode와 Beat/Section/
Demo/Trial/State IDs는 유지한다.11Template/27Variant와19Notes 필드를 재사용한다.
[현재 설계](ACT5_HARNESS_REASSESSMENT.md), [번호 대조](SLIDE_ID_MIGRATION_96.md),
[로컬 검토](../production/evaluation/ACT_5_HARNESS_REASSESSMENT.md)를 기준으로 한다.
아래 이전 수정·Prototype·검증 본문은 당시 번호·범위의 이력이다.
새 Trial·측정 성과·Demo State를 추가하지 않는다. 발표 묶음은 갱신하지 않는다.

## Historical ACT5 refinement — DEC-0082

[ACT5_FLOW_REVISION](ACT5_FLOW_REVISION.md) aligns S86–S93 as distinct
journey/history/selection/acceptance/system-design/problem/action/closing
roles. S87 retains every named Product State in three chronological groups
and keeps conceptual/Meta Loop examples separate. S91→S92 uses the same
A–E problem/action correspondence plus a common evidence question. S93
closes with Chatbot→Prompt→Context→Harness→Loop. Preserve93/379, ACT5
8/30, all Slide budgets/Modes, stable IDs,11Templates/27Variants and all
evidence limits. Earlier literal screen/operation cues are historical where
they differ. ACT4's latest handoff remains DEC-0081.

## Current ACT4 refinement — DEC-0081

S76–S85 now distinguish evaluation scope, representative-task risks, rule
side effects, evidence-to-next-judgment Loop, actual reporting changes and
C++ transfer. S82 is the recording decision, S83 its partial follow-up,
and S84 maps the actual records to the model. S85 closes the applied
judgment; S86 retains the full-course recap. Preserve93/379, every Slide
budget/Mode, stable IDs,11Templates/27Variants and all claim boundaries.
S68–S75 retain DEC-0080. Current cues and details are in
[ACT4_FLOW_REVISION](ACT4_FLOW_REVISION.md); earlier descriptions remain
history where their literal screen/operation cues differ.

## Current ACT3→ACT4 connection — DEC-0080

S67 closes location/maintenance ownership with recheck timing. S68 briefly
retains the observed success and opens maintenance; S69 connects reusable
Workflow to the role previously implemented as a Skill, without making the
conceptual case the same file/history. S70/S75 recover review/update roles.
S72→S73→S74 now means records to inspect→scenario information versus cause
hypothesis→response selection after assumed confirmation. S75 scopes human
update/review and S76 opens re-evaluation. S79 uses spaced, wrapped phases;
S65 is the environment preview and S80/S81 focus on evaluation/reporting.

Preserve93/379, ACT3 18/85, ACT4 18/80, every Slide time/Mode and stable IDs.
Template assignments S72=T08-C, S73=T08-C, S74=T08-B match redistributed
content; no Template/Variant is added. DEMO-11 remains S72 Demo2+S73 Demo1;
S74 stays Case2. Actual Product success, conceptual scenario and observed
Meta remain separate. Prior records below are history where literal current
cues differ. [Current connection design](ACT3_ACT4_HANDOFF_REVISION.md).

> **현재 기준: DEC-0084 /99장·387분(6시간27분,2026-10-25).** ACT 장수13/21/18/18/18/11, 시간42/63/81/85/80/36분. Mode Lecture151/Demo73/Case88/Reflection21/Transition22/Q&A32분. 기존 S05–S07을6장으로 풀고 Lecture2분만 추가했다. 이전 S08–S96은 S11–S99다. [현재 이행표](SLIDE_ID_MIGRATION_99.md), [ACT0 설계](ACT0_CONTEXT_EXPANSION.md). 최초6시간과 이전 판본은 승인 이력이며 실환경·리허설은 UNVERIFIED다.


Date: 2026-10-09

Status: READY FOR SLIDE-TO-TEMPLATE MAPPING

## 1. Purpose and Boundary

이 문서는 plan/SLIDE_MAP.md의 90개 Slide 역할을 바탕으로 재사용할
Template와 Component의 설계 기준을 정한다. 현재 작업은 Template
Architecture까지다.

- 모든 Slide의 Template ID 배정은 하지 않는다.
- 93장 수, 순서, ID, Story Beat, Demo ID, Section ID, Claim, 시간,
  Delivery Mode를 바꾸지 않는다.
- Template는 내용을 추가하거나 주장 강도를 바꾸는 근거가 아니다.
- 최종 글꼴·색상·화면 기준은 plan/VISUAL_SPEC.md에 따른다.
- 내용과 Evidence 경계는 plan/SLIDE_MAP.md와 plan/CLAIM_FREEZE.md를
  따른다.

최초 80개 Slide를 역할·Evidence Type·Visual Concept 기준으로 검토했다. 현재 93장 판본에서는 DEC-0036의 S08(T03-C), DEC-0038의 S13(T04-A), DEC-0043의 S22–S29(T03-A)를 기존 variant에 적용하며, 11개 Template·27개 Variant를 유지한다.
별도 C++ 전용 Template는 두지 않는다. C++ Vision은 Primary Role과
상관없이 필요한 Template에 삽입할 수 있는 재사용 Bridge Component다.
이에 따라 구별해야 할 근거 화면을 합치지 않고 11개 Template를 선택했다.

## 2. Template Set

아래 Typical Slide IDs는 적용 가능성을 설명하는 예시다. 실제 Slide-to-
Template Mapping이 아니며, Mapping 단계에서 Slide Map의 Primary Role과
Evidence Type을 기준으로 하나씩 배정한다.

### T01 — Audience Prompt / Reflection

- **Purpose:** 청중의 현재 경험을 떠올리게 하거나 질문·성찰·Q&A를 연다.
- **Layout:** 큰 질문 하나를 중앙 또는 한쪽에 두고, 필요한 경우 1–3개의
  응답 관점을 배치한다. 청중이 답할 여백을 확보한다.
- **Required Components:** Audience Question; 승인된 경우 Reflection,
  Discussion 또는 Q&A 상태.
- **Optional Components:** 현재 ACT 표시; 질문 이해를 돕는 단순 도식.
- **Density Limit:** 핵심 질문 1개와 보조 단서 최대 3개. DEC-0037의 S10은 질문의 상황을 보여주는 6노드 검사 파이프라인 도식 한 개를 사용한다. 여섯 응답 관점·알고리즘 강의로 늘리지 않고 기존 질문·6분을 유지한다.
- **Evidence Rule:** 청중 참여만을 위한 화면은 Teaching Model로 둔다.
  제품 주장을 시각화하려면 해당 주장에 맞는 Evidence Card를 별도로
  사용한다. 응답이나 실천 약속을 강제하지 않는다.
- **Typical Slide IDs:** S01, S10, S30, S92, S93.

### T02 — Problem / Friction

- **Purpose:** Solution을 먼저 제시하지 않고 현재 Workflow의 문제와
  Friction을 이해시킨다.
- **Layout:** 현재 Task 또는 절차를 짧게 표현하고, 막히는 지점 하나와
  아직 답하지 않은 질문을 강조한다.
- **Required Components:** 현재 상황; Friction 지점; 청중이 알아볼 질문.
- **Optional Components:** 짧은 Workflow Strip; 영향 범위 표시.
- **Density Limit:** 절차 최대 3단계, 주된 Friction 한 곳, 짧은 결과 하나.
- **Evidence Rule:** 가정적 상황이면 CONCEPTUAL 표시를 유지한다. 실제
  실패라고 주장하는 경우에는 해당 State / Trial의 근거가 필요하다.
  해결책은 Map의 Story가 도입하기 전까지 보여주지 않는다.
- **Typical Slide IDs:** S03, S09, S12, S32, S50.

### T03 — Mental Model / System Diagram

- **DEC-0062 bounded application:** ACT3의 S59는 기존 C++ 독립 조사3개와 주 Agent의 통합을 연결하고 S61은 Task A→보존 가치 판단→Task B를 연결하는 기존 T03-C다. 모두 명시적 CONCEPTUAL/TEACHING_MODEL이며 실제 실행·기억 기능의 결과가 아니다. S60/S62의 T10-B는 현재 사례의 결정·지식 출처 감사와 기준을 별도로 회수한다. S55 T04-A는 지침 발췌와 관찰 요약의 native table이며 새 Template/Variant를 추가하지 않는다. 11개/27개를 유지한다.

- **DEC-0061 bounded application:** S40의 T03-C는 교육용 요청→보존된 코드 일부→세 확인 질문의 관계다. 주요 node는5개 이내이며 연결은 교육용 확인 관계이고 새 실행 기록이 아니다. RepoQA는 별도 보조 연구 영역으로 두고 질문3개를 논문의 채점 기준으로 돌리지 않는다. 새 Template/Variant는 추가하지 않는다.

- **DEC-0060 bounded application:** S48은 네 개별 관찰을 교육에서 확인한 순서로 연결하는 T03-A recap이다.4개 node와 관련 State/Trial을 표시하고, 연결선은 인과 효과가 아니라 Story 진행 순서를 뜻한다. 최대5개 node 규칙 안에서 구현하며 새로운 Template/Variant를 만들지 않는다.

- **DEC-0043 bounded application:** S22–S29의 T03-A는 하나의 핵심 요청 블록과 두 활용 cue, 한 줄 핵심을 사용한다. 요청·적용 관점의 관계를 설명하는 정적 교육 예시로, 노드나 화살표를 억지로 추가하지 않는다. 주요 영역은 5개 이내이며 출처·한계는 별도 하단에 유지한다. 이 범위의 렌더 검토는 `production/evaluation/PROMPT_ENGINEERING_ADDITION_RESULT.md`를 따른다.
- **Purpose:** 책임, Layer, 흐름, 관계를 하나의 교육용 모델로 정리한다.
- **Layout:** 계층, 경계, 흐름 중 하나를 선택한다. 주요 Node를 연결하고
  핵심 관계에 짧은 설명을 붙인다.
- **Required Components:** 관계가 명확한 Node와 Connector; 필요한
  경우 COURSE MODEL 또는 HEURISTIC Label.
- **Optional Components:** State Rail, Workflow Strip, C++ Bridge.
- **Density Limit:** 주요 Node 최대 5개를 기본으로 한다. 더 많은 정보가
  필요하면 상위·상세 Layer로 나누거나 Progressive Reveal을 쓴다.
- **Evidence Rule:** 개념도를 실제 제품 UI, 저장소 상태, 자동 동작으로
  위장하지 않는다. 실제 Trial 관찰이 모델 안에 함께 있으면 관찰 부분을
  별도 Evidence Card로 분리한다.
- **Typical Slide IDs:** S15, S35, S38, S51–52, S64, S66, S86, S90.

### T04 — Before / After / Comparison

- **Purpose:** 승인된 비교 기준에 따라 두 상태나 선택지를 읽기 쉽게
  대비한다.
- **Layout:** 같은 크기의 두 영역에 동일한 비교 축을 적용하고, 바뀐 점을
  하나의 중심 차이로 표시한다. 세 번째 선택지는 필요할 때만 쓴다.
- **Required Components:** 비교 대상; 비교 축; 차이의 범위.
- **Optional Components:** 변경 전후 Marker; Difference Callout;
  Evidence Card.
- **Density Limit:** 기본 2열, 최대 3개 비교 대상 또는 4개 비교 행.
  여러 Task를 작은 표로 압축하지 않는다.
- **Evidence Rule:** 실제 전후 비교는 State / Trial ID와 범위를 표시한다.
  관찰된 차이를 인과 효과 또는 일반적 우월성으로 바꾸지 않는다.
  개념 비교에는 CONCEPTUAL 또는 Teaching Model 표시를 사용한다.
- **Typical Slide IDs:** S16, S31, S36–37, S43, S47, S55.

### T05 — Demo Watch / Trial Setup

- **Purpose:** 결과를 보기 전에 Task와 관찰 기준을 청중에게 제시한다.
- **Layout:** WATCH FOR를 먼저 두고, Task와 관찰 대상 최대 3개를
  이어서 둔다. 결과 패널은 비워 둔다.
- **Required Components:** DEMO / TRIAL ID; 관찰할 Task 또는 질문;
  Watch-for 항목.
- **Optional Components:** 준비된 대체 경로 표시; 화면/실행 범위 표시.
- **Density Limit:** 질문 1개, 관찰 대상 최대 3개, 긴 Prompt 전문 없음.
- **Evidence Rule:** 관찰 전 Setup과 관찰 후 Evidence를 한 장의 결과처럼
  합치지 않는다. 제품 표면이 미확정이면 미확정으로 표시하고 현재 UI를
  재현한 그림을 넣지 않는다.
- **Typical Slide IDs:** S04, S17, S44, S53.

### T06 — Code / Diff / Verification

- **Purpose:** 제한된 코드 경계나 변경을 보여주고 어떤 확인이 이를
  뒷받침하는지 연결한다.
- **Layout:** 실제 변경 전후를 짧은 Code / Diff로 놓고, 아래 또는 옆에
  Focused Test, Smoke, Regression 또는 Benchmark 확인을 붙인다.
- **Required Components:** 파일 또는 함수 범위; 핵심 변경점; 실제로
  수행한 Verification과 그 범위.
- **Optional Components:** 한 단계 호출 경로; Contract Callout;
  Benchmark Comparison.
- **Density Limit:** 코드 3–12줄, 강조 변경 한 군데, 한 Slide당
  한 가지 기술적 요점.
- **Evidence Rule:** 실제 코드와 결과만 관찰 사실로 표시한다. 예시
  코드라면 CONCEPTUAL / TEACHING MODEL로 구분한다. 수행하지 않은
  Benchmark, Test, PASS 수치를 만들지 않는다.
- **Typical Slide IDs:** S18–21, S56–57.

### T07 — Observed Product Evidence

- **Purpose:** 실제 Demo Repository의 Git State, Trial, Code, Test 또는
  측정 결과를 제한된 범위 안에서 제시한다.
- **Layout:** 단일 실선 Evidence Frame 안에 State / Trial, 핵심 관찰,
  적용 범위와 남은 한계를 둔다.
- **Required Components:** 실제 State 또는 Trial Reference; 관찰 결과;
  해석 범위 또는 인과 제한.
- **Optional Components:** 짧은 Diff, 실제 코드 경로, 측정값, test 상태.
- **Density Limit:** 핵심 결과 1개와 관찰 사실 최대 3개. 전체 로그나
  전체 파일 대신 질문에 답하는 부분만 쓴다.
- **Evidence Rule:** 해당 기록에서 직접 관찰한 사실을 넘겨 일반화하지
  않는다. 성공이나 성능 효과를 주장할 때 CLAIM_FREEZE의 제한과
  승인된 측정 범위를 그대로 둔다. OBSERVED_META와 같은 Evidence
  Template을 사용하지 않는다.
- **Typical Slide IDs:** S05–06, S33–34, S45, S54, S57–58, S68, S87.

### T08 — Conceptual Scenario / Evaluation

- **Purpose:** 실제로 일어나지 않은 가정 사례를 사용해 진단, 선택,
  수정, 평가 방법을 설명한다.
- **Layout:** 점선 시나리오 Frame 안에서 상태 또는 선택 경로를 단계로
  보여준다. 관찰된 사실과 시나리오의 가정을 서로 다른 Label로 둔다.
- **Required Components:** 지속적인 CONCEPTUAL Label; 시작 조건;
  가정과 결론의 관계.
- **Optional Components:** Decision Matrix, Workflow Strip, Evaluation
  Set.
- **Density Limit:** 핵심 단계 최대 5개, 긴 사례 설명은 표시하지 않는다.
  생성하지 않은 PASS / FAIL, 수치, Trial ID를 쓰지 않는다.
- **Evidence Rule:** 실제 Terminal 캡처나 실제 Repository State처럼
  보이게 만들지 않는다. DEMO-04A의 Project 변경, 실패, 원인, 수정,
  EVAL은 이 규칙을 적용한다. TEACHING_MODEL이 함께 있으면 두 역할을
  Label로 구분한다.
- **Typical Slide IDs:** S69–78.

### T09 — Research / Source

- **Purpose:** 연구 기반 주장의 내용과 연구가 지지하지 않는 범위를 함께
  보여준다.
- **Layout:** 승인된 Claim 하나, 연구 조건 또는 측정 Task, 제한된 결과,
  출처를 한 화면 안에 둔다.
- **Required Components:** Claim; 대상 연구 / Task / 조건; 원문 Citation;
  일반화하지 않을 경계.
- **Optional Components:** 출처가 뒷받침하는 간단한 Figure 또는 비교.
- **Density Limit:** 핵심 Claim 하나, 출처 최대 2개, Figure 또는
  수치 표시는 질문에 답하는 범위로 제한한다.
- **Evidence Rule:** 연구 결과를 현재 Codex의 보편적 동작으로 바꾸지
  않는다. Slide 39의 승인 문구, 연구 설정, 인용을 보존한다.
- **Typical Slide IDs:** S39.

### T10 — Decision / Trade-off

- **Purpose:** 무엇을 선택하거나 보류했는지와 이유·영향을 함께 설명한다.
- **Layout:** Problem → Options / Criteria → Decision → Trade-off 순서의
  간결한 Matrix 또는 Decision Card를 사용한다.
- **Required Components:** Decision 상태 또는 범위; 선택 기준; 이유;
  주요 Trade-off.
- **Optional Components:** 영향받는 Layer; 보류한 요소; 후속 확인.
- **Density Limit:** 선택지 최대 3개, 판단 기준 최대 4개. 전 행이
  Evidence인 것처럼 보이는 큰 점수 표는 피한다.
- **Evidence Rule:** 실제 Trial 관찰, 교육적 판단, 미확정 대안을 서로
  구분한다. 한 프로젝트에서 채택하지 않은 구성요소를 모든 프로젝트에서
  불필요한 것으로 일반화하지 않는다.
- **Typical Slide IDs:** S59–63, S88.

### T11 — Observed Meta Timeline

- **Purpose:** 교육자료 제작 과정에서 실제로 발생한 평가와 Decision의
  변화를 보조 사례로 보여준다.
- **Layout:** OBSERVED META 이중선 Frame 안에 Trial과 Decision을 시간순으로
  놓는다. 무엇이 바뀌었고 무엇이 여전히 확인되지 않았는지 분리한다.
- **Required Components:** Trial / Decision ID; 실제 시간순 기록;
  관찰된 변화; 남은 불확실성.
- **Optional Components:** Attribution 경계; 보고 방식 전후 비교.
- **Density Limit:** 시간선 4단계 이내를 기본으로 하고, 각 단계는 한 줄로
  제한한다. 전체 제작 기록을 연표로 늘어놓지 않는다.
- **Evidence Rule:** Demo Product State Rail과 분리한다. 실제 Product 코드
  변경, Demo Skill 수정, 성공 원인, 품질 향상을 입증한 것처럼 표현하지
  않는다. Prompt-only attribution이 PARTIAL이면 그대로 유지한다.
- **Typical Slide IDs:** S80–84. 다른 Slide에 OBSERVED_META가 포함될
  경우에도 이 Evidence Frame의 구분 규칙을 적용하되, 이 예시가
  Slide-to-Template 배정은 아니다.

## 3. Reusable Components

DEC-0036의 신규 S08은 기존 T03-C Flow Diagram을 사용한다. ChatGPT 메뉴 → Codex → Repository 폴더의 세 단계에 CMP-WORKFLOW/CMP-CLAIM을 적용하며 새 Template·Variant를 만들지 않는다. 메뉴 재구성은 RESEARCH / TEACHING_MODEL로 표시하고 대상 제품 경로를 OBSERVED_PRODUCT로 주장하지 않는다.


Component는 Template 안에 조합할 수 있는 설명 단위다. Component를
추가해도 Slide Map의 Primary Role과 Evidence Type은 바뀌지 않는다.

### State Rail

- **목적:** 실제 Demo Repository의 Git State 순서를 요약한다.
- **표시 정보:** 승인된 State ID와 각 State의 짧은 변화 설명.
- **시각적 구조:** 한 줄의 실제 Git State 진행선. 활성 State만 강조한다.
- **재사용 위치:** Product State 전후 비교와 Story 회고. 예: S33,
  S36, S43, S68, S87.
- **금지 표현:** conceptual 상태, Trial ID, Decision ID를 Git State와
  같은 노드로 섞지 않는다. State를 새로 만들거나 생략하지 않는다.

### Evidence Card

- **목적:** 하나의 관찰 결과와 해석 경계를 빠르게 읽게 한다.
- **표시 정보:** Evidence Type, State / Trial / Source, 관찰, 범위.
- **시각적 구조:** Evidence Type별 Frame과 Label을 가진 카드.
- **재사용 위치:** OBSERVED_PRODUCT 근거 요약, 관찰 사실과 해석이 함께
  있는 Slide.
- **금지 표현:** 여러 출처를 근거 범위 없이 한 Claim에 합치거나,
  미확정 추론을 관찰된 결과로 표시하지 않는다.

### Trial Card

- **목적:** 한 Trial의 질문과 관찰 결과를 연결한다.
- **표시 정보:** Trial ID, Task, 관찰 기준, 실행·환경 범위, 결과, 제한.
- **시각적 구조:** Watch-for 질문과 What Happened 결과를 서로 구분한
  짧은 카드.
- **재사용 위치:** Trial Setup 및 Trial 결과 설명.
- **금지 표현:** 전체 Prompt나 전체 로그를 축소해 넣지 않는다. 단일 실행을
  반복성·제품 전체 동작으로 일반화하지 않는다.

### Code Diff

- **목적:** 의미 있는 변경 경계 한 곳을 표시한다.
- **표시 정보:** 실제 파일 / 함수, 바뀐 줄, 변경 이유, 관련 확인.
- **시각적 구조:** 3–12줄의 편집 가능한 Diff 또는 가독성 있는 발췌.
- **재사용 위치:** 조사에서 변경으로 이어지는 Trial과 검증 설명.
- **금지 표현:** 전체 파일, 실제와 다른 코드, 테스트 결과와 연결되지 않은
  “완료” 표식.

### Benchmark Comparison

- **목적:** 승인된 측정값을 조건과 함께 비교한다.
- **표시 정보:** 대상 경로, 입력, 환경, 비교 기준, 통계 요약, guard /
  verification 상태.
- **시각적 구조:** 같은 축으로 비교하는 두 값 또는 분포 요약과 바로 붙은
  측정 조건.
- **재사용 위치:** 실제 Product Benchmark 또는 Meta Trial의 측정 근거.
- **금지 표현:** 측정 환경·표본·범위 없이 숫자를 Hero metric으로 사용,
  측정하지 않은 개선, 원인 귀속을 단정하는 문구.

### Context Router

- **목적:** Root / Core 정보와 Topic Detail의 역할 및 경로를 설명한다.
- **표시 정보:** 공통 Core, Task별 필요한 상세 주제, 실제로 확인된 접근.
- **시각적 구조:** Core entry에서 관련 Detail로 연결되는 경로. 예상 경로와
  Trial에서 관찰한 접근은 다른 선 / Label로 표시한다.
- **재사용 위치:** Context 구조와 Task별 문서 접근을 설명하는 Slide.
- **금지 표현:** 완벽한 Routing, Token 절감, 성능 개선을 근거 없이
  주장하지 않는다. 하나의 Core가 모든 문서를 읽었다고 암시하지 않는다.

### Workflow Strip

- **목적:** 반복 가능한 작업 순서를 간결하게 드러낸다.
- **표시 정보:** 현재 Task에서 반복되는 단계와 순서.
- **시각적 구조:** 읽기 쉬운 수평 또는 수직 단계선. 긴 문장 대신 짧은
  동사구를 둔다.
- **재사용 위치:** 관찰된 반복 절차, 교육용 Workflow Model, C++ 전이.
- **금지 표현:** 서로 다른 Trial에 공통으로 없었던 절차를 관찰된 공통
  증거처럼 표현하지 않는다.

### Decision Matrix

- **목적:** 선택 기준과 대안을 비교하고 Decision의 이유를 설명한다.
- **표시 정보:** 문제, 대안, 선택 기준, 선택 / 보류, Trade-off.
- **시각적 구조:** 간결한 2–3열 Matrix 또는 Decision Card. 비교하지 않은
  칸은 빈 점수로 채우지 않는다.
- **재사용 위치:** Subagent / Memory의 조건부 검토, 원인에 맞는
  Harness Layer 선택, 개인 적용 질문.
- **금지 표현:** 임의 점수, 측정하지 않은 순위, 보류 결정을 보편 규칙으로
  확장하지 않는다.

### Loop Diagram

- **목적:** Feedback이 원인 판단, System Change, Re-evaluation으로
  이어지는 교육 모델을 보여준다.
- **표시 정보:** Execution → Observation → Cause → System Change →
  Re-evaluation.
- **시각적 구조:** 단계를 순서대로 두고 마지막 선은 모델 또는 개발
  Workbench로 되돌린다.
- **재사용 위치:** Loop Engineering 개념과 최종 Story 요약.
- **금지 표현:** 모델의 자기 학습, 자동 변경, 무한 반복 또는 관찰되지 않은
  Product Loop라고 표시하지 않는다. 원인이 가설이면 가설로 표시한다.

### C++ Bridge

- **목적:** Python Demo에서 얻은 Engineering Pattern을 C++ Vision 업무에
  전이한다.
- **표시 정보:** Python Demo, 공통 Engineering Pattern, C++ Vision의 적용
  질문.
- **시각적 구조:** PYTHON DEMO → ENGINEERING PATTERN → C++ VISION의
  짧은 연결. 기존 Template의 작은 inset 또는 중심 도식으로 사용한다.
- **재사용 위치:** Map에 지정된 C++ Vision 전이 구간.
- **금지 표현:** Python Demo가 C++ 구현이나 C++ 검증을 대신했다고
  암시하지 않는다. 검증되지 않은 Windows, CMake, GPU, IDE, Hardware
  지시나 Tool 로고 목록을 추가하지 않는다.

### Claim Scope / Citation

- **목적:** Claim, Source, 적용 범위와 미확정 상태를 화면에서 추적할 수
  있게 한다.
- **표시 정보:** 관련 Claim ID 또는 짧은 Claim, Source / Trial, 날짜나
  버전이 필요한 경우의 메타데이터, Claim Status와 Scope.
- **시각적 구조:** Claim에 가까운 Source 줄 또는 별도 Evidence Band.
  최소 글자 크기와 대비는 VISUAL_SPEC.md를 따른다.
- **재사용 위치:** RESEARCH, Current Product Claim, Trial 관찰, 제한이
  중요한 비교.
- **금지 표현:** 축약으로 Source 범위를 지우거나, Citation을 작은
  Footer에만 숨기거나, 한 출처를 여러 범위의 Claim에 임의로 연결하지
  않는다.

## 4. Slide-to-Template Mapping Rules

### Template Selection

1. SLIDE_MAP에서 Slide ID, Primary Role, Evidence Type,
   Visual Concept을 확인한다.
2. Evidence boundary가 중요한 경우 그 구분을 보존하는 Template를 먼저
   선택한다: OBSERVED_PRODUCT → T07, CONCEPTUAL case → T08,
   RESEARCH → T09, OBSERVED_META → T11.
3. 해당 Evidence Frame이 정해진 뒤 Primary Role에 맞춰 도식,
   비교, Demo Setup, Code / Diff, Decision, Audience Prompt 구조를
   선택한다.
4. 나머지 Secondary Role은 별도 Template를 추가하지 않고 필요한
   Component로 표시한다.
5. C++ Bridge는 전용 Template로 강제하지 않는다. 해당 Slide의 Primary
   Role에 맞는 Template에 Component로 둔다.

### Fallback

- 분명한 Evidence Type이 있는 Slide는 generic teaching layout으로
  대체하지 않는다.
- Teaching Model이 주 역할이고 별도 비교·질문 Layout이 필요하지 않으면
  T03을 기본 Fallback으로 사용한다.
- 역할 또는 Evidence가 불명확하거나 CLAIM_FREEZE와 맞지 않으면 임의
  Template나 시각적 근거를 만들어 채우지 않는다. TODO / 미확정으로 두고
  Source of Truth를 확인한다.
- 한 화면에 정보를 수용하지 못하면 글자 크기를 낮추는 대신 Progressive
  Reveal, 허용된 Component 조정, 또는 Slide Owner 검토를 사용한다.
  Slide 수·Content·시간 변경은 별도 승인 없이 하지 않는다.

### Mixed-role Slides

- 기본 Template는 SLIDE_MAP의 Primary Role로 정한다.
- Secondary Role은 Evidence Card, C++ Bridge, Citation, Question 등
  최소 Component로 표현한다.
- 각 역할이 서로 다른 Evidence Type이면 별도 Frame과 Label을 유지한다.
- 혼합된 내용 때문에 Primary Role이나 claim status를 판정하기 어려우면
  Template Mapping 전에 미확정 항목으로 기록한다.

### Evidence Conflict Rules

- OBSERVED_PRODUCT, OBSERVED_META, CONCEPTUAL, RESEARCH,
  TEACHING_MODEL은 VISUAL_SPEC.md의 서로 다른 시각 Grammar를 유지한다.
- 같은 화면에 둘 이상의 Evidence Type이 있으면 각 근거를 해당 Frame에
  따로 놓고 공통 Frame으로 합치지 않는다.
- S68 Product 성공에서 S69–79 Conceptual Case로 이동할 때 Conceptual
  Frame으로 분명히 전환한다.
- S79의 CONCEPTUAL / TEACHING_MODEL에서 S80–84 OBSERVED_META로 이동할
  때 Meta 전용 시간선 Frame과 OBSERVED META Label을 사용한다.
- 실제 Git State Rail에는 Git State만 둔다. Conceptual Evolution 또는
  Training Production Timeline을 같은 Rail에 넣지 않는다.
- Evidence가 Claim Freeze 경계에 맞지 않으면 시각적 설득을 위해
  근거를 강화하지 않는다. 해당 Claim과 Template 결정을 중단하고
  승인된 Source를 다시 확인한다.

## 5. Readiness

11개 Template의 목적, 구조, 필수·선택 Component, 밀도, Evidence 규칙을
정의했다. 공통 Component와 Fallback, 혼합 역할 및 Evidence 충돌 규칙도
정의했으며, 전체 93장 Template ID 배정은 다음 단계에 남겼다.

**Next readiness: READY FOR SLIDE-TO-TEMPLATE MAPPING.**

## DEC-0038 — Prompt / Parallel-Path Variants

S11/S12는 T02-A에서 입력창과 미정 경계를 보여준다. S11의 비용 기호는
수치·배율·실측 축이 없는 정성 개념도이며 기하급수 법칙이나 실제 정지의 증거가
아니다. S12의 동일 Agent 세 시간선은 가능한 해석 세 개이며 반복 실행 기록이 아니다.
새 S13은 T04-A로 다섯 정보를 담은 Prompt와 같은 후보 시간선을 비교하고 원하는
구현 경로를 강조한다. 다섯 필드는 Prompt 내부 정보이며 다섯 비교 행을 추가하는
것이 아니다. 목표 경로의 선택과 검증된 실행 결과·결정성 보장을 구분한다.
기존 11개 Template / 27개 Variant는 유지한다.
