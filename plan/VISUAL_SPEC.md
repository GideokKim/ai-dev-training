# STEP 08 — Visual Specification

Date: 2026-10-09

Status: COMPLETE WITH OPEN ITEMS

## 1. Purpose and Authority

이 문서는 승인된 80장 Slide Map에 적용할 시각 설계 기준이다. Slide의
순서, 제목, 역할, 주장, Evidence, Demo, 시간 또는 Delivery Mode를
변경하지 않는다.

- 콘텐츠와 Slide 역할의 기준: plan/SLIDE_MAP.md
- 주장과 근거 경계: plan/CLAIM_FREEZE.md
- 교육의 설계 제약: plan/MASTER_PLAN.md, plan/INVARIANTS.md
- 시각 방향 분석: plan/VISUAL_SYSTEM_ANALYSIS.md
- 재사용 레이아웃: plan/SLIDE_TEMPLATE_ARCHITECTURE.md

이 문서는 Visual Specification을 정의한다. 실제 PPT, master slide,
render, image, animation, Speaker Notes를 만들거나 확정하지 않는다.
제품·계정·Windows 환경에 종속되는 시각 요소도 해당 검증 전에는
미확정으로 둔다.

## 2. Visual Direction

### 추천 방향: Light Engineering Workbench

밝은 회백색 캔버스와 흰색 표면을 기본으로 하고, 짙은 본문색과 하나의
청록 계열 강조색을 사용한다. 시각 성격은 Engineering-led, Calm,
Evidence-driven, Modern으로 유지한다. 기본 형태는 제품 UI 모방이 아니라
간결한 벡터 도식, 비교, Trial 근거 카드다.

| 방향 | 장점 | 주의점 |
|---|---|---|
| 밝은 캔버스 | 비교, Evidence 카드, 인용, 개념 도식의 층을 차분하게 구분하기 쉽다. | 밝기와 대비는 실제 프로젝터에서 확인해야 한다. |
| 어두운 캔버스 | 코드와 터미널 패널을 강조하기 쉽다. | 교육 전반의 근거 카드와 긴 설명까지 어두운 화면으로 통일하면 화면 밀도가 높아 보일 수 있다. |

따라서 밝은 캔버스를 기본으로 선택하고, 코드가 반드시 필요한 경우에만
어두운 코드 패널을 제한적으로 사용한다. ACT마다 별도 색 테마를 만들지
않고 중립 배경과 공통 프레임을 유지한다.

### 반복되는 이야기의 시각 표현

Developer Workbench라는 하나의 시각 은유를 사용한다. 진행 표시가
필요하면 현재까지 공개된 구간만 표시한다. 아직 설명하지 않은 다음
단계를 앞 장에서 먼저 노출하지 않는다. 전체 진화인
CHATBOT → PROMPT → CONTEXT → HARNESS → LOOP는 Slide Map이 회수하는
시점에 완성 형태로 표시한다.

Loop의 되돌아가는 화살표는 평가 대상인 개발 시스템으로 연결한다.
모델의 자동 학습이나 제품의 자동 개선을 뜻하는 것처럼 그리지 않는다.

## 3. Presentation Format and Grid

| 항목 | 기준 |
|---|---|
| 화면 비율 | 16:9 |
| 작업 기준 좌표 | 1920 × 1080 |
| 구성 방식 | PowerPoint 기본 도형, 텍스트, 선을 우선하는 벡터 구성 |
| 실제 발표 환경 | 대형 화면을 가정하되, 장비·해상도·투사 거리·밝기는 미확정 |

### Safe Area와 화면 영역

- 좌우 Safe Margin: 각 96 px
- 상하 Safe Margin: 각 72 px
- 작업 Grid: Safe Area 안 12열, 열 간격 24 px
- Title Region: 대략 y=72–192 px
- Main Visual Region: 대략 y=216–904 px
- Evidence / Citation Region: 대략 y=920–976 px
- Footer / Navigation Region: 대략 y=984–1008 px

영역의 경계는 작업 기준선이다. 특정 Slide에서 시각 구조를 설명하는 데
필요하면 비율을 조정하되, Safe Margin과 한 화면의 정보 위계를 지킨다.

### 영역별 사용

- Title: 짧은 제목 또는 현재 질문을 둔다. 최대 2줄을 기준으로 한다.
- Main Visual: 핵심 메시지 하나를 설명하는 가장 큰 도식, 증거 또는 비교를
  둔다.
- Evidence Metadata: State, Trial, 측정 범위, Evidence Type 등 해당
  Slide에서 오해를 막는 정보만 둔다.
- Citation: 인용 대상 주장이나 연구 도식에 가깝게 둔다. 출처 줄을
  Footer의 작은 글씨로만 숨기지 않는다.
- Footer: Slide 번호와 현재 ACT 또는 진행 표식만 둔다. 주장의 핵심이나
  해석 경계는 Footer로 보내지 않는다.

한 화면에는 Primary Message 한 개와 Dominant Visual 한 개를 둔다. 필요한
경우 이를 보완하는 Evidence strip 또는 짧은 Source block을 한 개까지
더할 수 있다. 장식용 아이콘, 전체 IDE 화면, 큰 Terminal 화면, 긴 문단,
읽을 수 없는 UI는 배제한다.

## 4. Typography

### 서체 후보 평가와 권고

| 후보 | 한글·영문 사용 | Windows / PowerPoint 고려 | 판단 |
|---|---|---|---|
| 맑은 고딕 (Malgun Gothic) | 한글 문장과 영문 용어를 한 화면에서 함께 쓰기 적합한 후보 | Windows 대상 발표를 우선 고려할 때 폰트 대체 위험이 상대적으로 낮은 후보. 발표 PC 설치 여부는 확인 필요 | 본문·제목의 1순위 권고 |
| Noto Sans KR | 한글 가독성을 위한 후보. 영문과 함께 쓰는 실제 글줄도 확인 필요 | 기본 설치를 전제하지 않는다. 배포 환경의 설치 또는 대체 동작을 확인해야 함 | 대체 후보 |
| Pretendard | 현대적인 산세리프 후보. 한글·영문 혼합 화면을 확인해야 함 | 설치되지 않은 PC에서는 대체 위험이 있다. 포함·대체 방식은 PowerPoint 환경에서 확인 필요 | 미설치 환경을 고려해 3순위 |

권고 서체는 맑은 고딕이다. 다만 실제 발표 PC에서 글꼴 설치와 PowerPoint
렌더링을 확인하기 전까지 설치 완료나 줄바꿈 호환성을 보장하지 않는다.
고정된 font embedding 동작을 가정하지 않는다.

코드는 Consolas를 우선 후보로 삼는다. 대상 PC에서 확인된 Monospace
서체만 대체로 허용한다. 언어별 색상만으로 문법을 구분하거나 특수 문자를
사용해 정렬을 맞추지 않는다.

### 글자 크기 범위

아래 값은 16:9 PowerPoint 화면의 권장 pt 범위다. 실제 투사 거리와 발표
환경은 미확정이므로, 최종 크기 판정은 현장 확인이 필요하다.

| 계층 | 권장 크기 |
|---|---:|
| Slide Title / 현재 질문 | 34–40 pt |
| Core Message | 28–32 pt |
| Diagram의 주요 Label | 21–26 pt |
| Evidence Detail / 보조 Label | 16–18 pt |
| Code | 18–22 pt |
| Citation / Source | 14–16 pt |
| Footer / Navigation | 14–16 pt |

Citation을 14 pt 미만으로 줄이거나, Code를 축소해 여러 줄을 억지로 넣지
않는다. 핵심 내용을 권장 최소 크기 안에 넣기 어렵다면 내용을 작은 글자로
줄이지 말고 도식·단계별 공개 또는 해당 Slide Map에 허용된 Evidence
요약으로 표현한다. 주장 경계와 필요한 Source는 제거하지 않는다.

## 5. Color Tokens

기본 팔레트는 밝고 중립적인 바탕과 짙은 텍스트다. Accent는 현재 초점,
활성 경로, 선택된 항목에 한정한다. 의미상 상태는 색뿐 아니라 텍스트,
테두리, 형태를 함께 사용한다.

| Token | HEX | 사용 |
|---|---|---|
| Background | #F4F6F8 | 기본 캔버스 |
| Surface | #FFFFFF | 카드와 주요 콘텐츠 표면 |
| Primary Text | #17212B | 제목, 주요 메시지, 본문 |
| Secondary Text | #4D5A68 | 보조 설명과 세부 Label |
| Border | #C7D0DA | 카드 경계, 구획선; 작은 글자색으로 사용하지 않음 |
| Accent | #0B6172 | 현재 초점, 활성 경로, 선택된 관계 |
| Success | #176B4D | 승인된 PASS / 성공 Evidence에만 사용 |
| Warning | #805400 | 경계, 조건, 미확정 상태 |
| Failure | #B42318 | 관찰된 실패 또는 명시된 위험 |
| Muted | #5B6570 | 비활성 참고 요소; 핵심 주장에는 사용하지 않음 |

흰색 또는 Background 위에서의 텍스트 대비는 Primary 약 15.0:1,
Secondary 약 6.5:1, Accent 약 6.5:1, Success 약 6.5:1, Warning 약
6.6:1, Failure 약 6.6:1, Muted 약 5.5:1이다. 이는 선택된 HEX 쌍의
계산값이며 실제 Slide 전체나 이미지 위의 대비 검증 결과가 아니다.

WCAG 2.2의 일반 텍스트 기준 4.5:1 및 큰 텍스트 기준 3:1을 디자인 점검
목표로 사용한다. 이 설계 문서만으로 최종 PPT의 WCAG 적합성을 주장하지
않는다. [W3C, Understanding SC 1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum)

## 6. Evidence Visual Grammar

Evidence Type은 프레임, 선 모양, 명시적인 Label, Source 표기를 함께
사용해 구분한다. 색만으로 Evidence Type을 전달하지 않는다.

| Evidence Type | Frame / Line | Label | Citation / Source | Screenshot rule |
|---|---|---|---|---|
| OBSERVED_PRODUCT | 단일 실선 프레임. 실제 State 또는 Trial 근거 카드 | 필요한 경우 State ID, Trial ID, 실행 범위 표시 | 관찰 근거 가까이에 run 범위·측정 조건을 표시 | 실제 캡처 또는 실제 저장소 근거만 사용. 재구성 도식은 도식으로 보이게 한다. |
| OBSERVED_META | 이중선 프레임과 시간순 기록 선. Product Evidence와 다른 외곽 형식 | OBSERVED META를 식별 가능하게 표시 | Trial·Decision·날짜와 관찰 한계를 함께 표시 | 제작 과정의 실제 기록만 표시. Demo Product 변경으로 재현하지 않는다. |
| CONCEPTUAL | 점선 또는 점무늬 경계와 시나리오 카드 | 관련 구간에서 CONCEPTUAL을 계속 보이게 표시 | 외부 자료를 쓸 경우 출처를 별도로 유지 | 실제 Terminal, Trial Log, PASS 표시로 가장하지 않는다. |
| RESEARCH | 단정한 Claim-and-Source 영역, 연구 범위를 연결하는 선 | 연구 대상·Task·조건의 범위를 짧게 표시 | 원문 또는 승인된 연구 출처를 Claim 가까이에 인용 | 논문 Figure를 쓸 경우 출처와 해석 범위를 유지한다. 임의로 재구성한 값은 표시하지 않는다. |
| TEACHING_MODEL | 중립 배경의 간결한 도식과 관계선 | 제품 기능으로 오해될 수 있을 때 COURSE MODEL 또는 HEURISTIC 표시 | Slide Map / 관련 Claim ID가 필요한 주장에 연결 | 제품 화면 캡처나 실제 실행 로그처럼 보이는 표현 금지 |

### Slide 경계에서 반드시 유지할 구분

- S55는 STATE-04-PERF의 OBSERVED_PRODUCT 근거로 표시한다. 승인된 Test,
  benchmark 또는 상태 범위만 사용한다.
- S56–66은 DEMO-04A의 CONCEPTUAL / TEACHING_MODEL 영역이다. 이 사례의
  Project 변경, 실패, 원인, 수정, EVAL 결과가 실제 Demo Repository에서
  발생한 것처럼 그리지 않는다.
- S67–71은 교육 제작 과정의 OBSERVED_META 기록이다. DEMO-04A와 다른
  프레임 및 시간선으로 전환한다. Product Git State나 Product 실패로
  표시하지 않는다.
- S52처럼 Evidence와 Teaching Model이 함께 있는 경우, 관찰 조각과
  일반화한 도식을 각각 구별한다. 한 프레임이 두 종류의 근거인 것처럼
  합치지 않는다.
- S29는 승인된 연구 범위와 인용을 그대로 유지한다. 특정 Codex의 보편적
  Context 한계나 Context routing의 성능 효과로 확장하지 않는다.

## 7. Demo, Code, Diagram Rules

- Demo에서는 WATCH FOR → EVIDENCE → WHAT HAPPENED의 질문 순서를 따른다.
- Demo 화면에 보여주는 정보는 해당 질문에 필요한 Repository 경로, 문서
  접근, Diff, Test 또는 Benchmark만 남긴다.
- 코드가 핵심인 경우 3–12줄 범위로 제한하고, 한 Slide에서 한 경계 또는
  변경 지점을 강조한다.
- 변경과 검증은 붙여 보여주되, 코드 Diff와 Test 결과를 서로 대체하는
  것처럼 표시하지 않는다.
- 원본 Terminal 화면이 Evidence일 때만 실제 캡처를 사용한다. 설명용으로
  다시 만든 화면은 Diagram 또는 카드임을 분명히 한다.
- 제품·계정·환경 검증이 미완료인 Slide의 제품 화면은 캡처처럼 확정하지
  않는다. 필요한 위치는 TODO 또는 REQUIRES PRODUCT CHECK로 남긴다.
- 도식은 관계를 설명하기 위한 선임을 명확히 하고, 의미가 적힌 Label
  없이 화살표만 두지 않는다.

## 8. Progressive Reveal

아래는 한 Slide ID 안의 화면 상태 설계다. 실제 PowerPoint Animation,
시간별 Speaker Notes 또는 Slide 추가를 뜻하지 않는다. 추후 제작 시
애니메이션과 수동 단계 전환 중 방법을 선택할 수 있다.

### S54 — 필요한 구조부터 질문하기 (10분)

1. Reflection 3분: 어떤 마찰이 반복되는지 묻는 질문만 먼저 보여준다.
2. Q&A 5분: 반복되는 Project 사실, 반복 절차, 독립 조사, 재발견 비용,
   Verification 질문을 차례로 열어 본다. 각 구조가 항상 필요하다고
   미리 답하지 않는다.
3. Transition 2분: 필요한 구조를 설계하는 관점에서 Loop Engineering
   질문으로 이동한다.

화면 상태가 바뀌어도 Slide ID와 승인된 10분 분배는 그대로 둔다.

### S66 — Feedback을 System Change와 Evaluation으로 잇기 (11분)

Execution → Observation → Cause → System Change → Re-evaluation을 한
단계씩 공개한다. 마지막에는 전체 흐름과 System으로 되돌아가는 선을
함께 남긴다. 첫 9분은 Lecture 흐름으로 진행하고, 마지막 2분의 Visual
Demo 상태에서는 완성된 모델을 화면에 둔다. 이 도식은 이 과정의
Teaching Model이며 자동 학습을 의미하지 않는다.

### S72 — Project와 환경이 바뀌면 검증도 다시 본다 (20분)

전체 흐름을 항상 보이게 두고 현재 단계만 강조한다.

1. Project / Environment 변화
2. 관찰된 마찰
3. 확인된 사실과 원인 가설 분리
4. 원인에 맞는 수정 Layer
5. Benchmark / Regression 확인
6. 성찰과 Discussion

Delivery Mode의 순서는 Case 7분, Reflection 2분, Transition 4분,
Q&A 7분으로 유지한다. GPU Architecture 또는 Toolchain 변경은
CONCEPTUAL인 예시임을 계속 표시한다. 특정 Windows, CUDA, Hardware 설정을
검증된 절차로 채워 넣지 않는다.

## 9. Accessibility and Projection Readability

- 의미가 있는 색은 텍스트 Label, 테두리, 선 모양과 함께 쓴다.
- 기본 텍스트 조합은 일반 글자 4.5:1 이상, 큰 글자 3:1 이상을 목표로
  한다. 이미지, 코드 캡처, 색 면을 포함한 실제 PPT는 제작 시 별도
  대비 점검이 필요하다.
- Schematic 선에는 관계 이름을 붙인다. 점선·실선만으로 주장 상태를
  구분하지 않는다.
- 코드, 도식 Label, Citation이 최소 크기보다 작아지면 해당 화면을
  단순화하거나 공개 단계를 나눈다.
- 중요한 설명을 이미지에만 굽지 않는다. 제작 단계에서는 편집 가능한
  텍스트와 도형을 우선하고 접근성 검사에서 도식 대체 텍스트를 확인한다.
- 흑백 또는 색각 차이 환경에서도 Evidence Type과 상태를 읽을 수 있도록
  텍스트와 Frame 차이를 유지한다.

## 10. Windows / PowerPoint Compatibility

- 작업 기준은 Windows 대상 16:9 PowerPoint 발표를 염두에 두되, 실제
  발표 PC와 Office 버전은 아직 확인되지 않았다.
- 맑은 고딕과 Consolas를 우선 서체 후보로 두고, 대상 PC에서 대체 폰트,
  줄바꿈, 기호, 한글·영문 혼합 문장을 확인한다.
- PowerPoint 기본 텍스트 상자, 도형, 선을 우선한다. 특정 Add-in,
  Web-only font, emoji, 외부 렌더링에 의존하지 않는다.
- 폰트 파일 포함, 외부 SVG, 영상, 전환 효과가 꼭 필요한지와 대상 PC에서
  어떻게 동작하는지는 제작 전에 검증한다. 현재 단계에서 작동을 보장하지
  않는다.
- 발표 직전에는 노트북 보기 대신 실제 발표 화면 비율과 투사 거리에서
  줄바꿈, 잘림, 색 대비, 코드·Citation 가독성을 확인한다.

## 11. Open Items

- 대상 발표 PC의 Windows 및 PowerPoint 버전, 설치된 글꼴과 대체 글꼴.
- 실제 발표 장소의 투사 해상도, 밝기, 화면 크기, 최장 시청 거리.
- 실제 렌더에서의 글자 크기, Citation, Diagram 선 굵기, 대비 점검.
- 제품 계정과 시연 표면이 필요한 Slide의 현재 제품 동작 및 캡처 선택.
- 사용자 환경 확인이 필요한 Windows, Shell, IDE, Hardware 안내의 범위.
- 본 문서는 Slide별 레이아웃 배정을 하지 않는다. 다음 단계에서
  SLIDE_MAP.md의 Primary Role과 Evidence Type을 기준으로 매핑한다.

## 12. Completion Gate

Visual direction과 기본 토큰, 형식, 가독성 기준, Evidence Grammar,
진행 상태가 정의됐다. 최종 발표 환경 및 제품 검증은 후속 작업으로
남는다.

**Next readiness: READY FOR SLIDE-TO-TEMPLATE MAPPING.**

