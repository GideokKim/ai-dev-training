# Prompt Windows & Alternative Timelines Revision

Date: 2026-10-21 (Asia/Seoul). Decision: DEC-0038.
Baseline: `8e4a15e` (81 slides). Result: **COMPLETE — LOCAL PRODUCTION / ALIGNMENT**.

## Slide Changes

| Slide | Presentation change | Evidence boundary |
|---|---|---|
| S11 | filter 성능 개선해줘를 입력창 형태로 표시. 기존 우측 바꿀 것/보존할 것/완료 근거 질문 유지. 가운데 같은 Agent 삽화와 선택 질문, 하단 토큰·시간 상승 곡선. | AI 생성 교육 삽화; 수치·축척·배율 없는 개념 곡선. 실제 Agent 실패·측정 비용·기하급수 법칙이 아님. 필요한 정보를 되물을 수 있음. |
| S12 | crop test 고쳐줘 입력창, 같은 Agent에서 세 평행 시간선. 우측 세로 A 테스트 변경 / B 구현 변경 / C 먼저 질문. 하단 미정 정보 다섯 개 유지. | 가능한 해석의 도식. 실제 동일 Prompt 반복실행, 동시 Subagent, 분기 확률이나 변동성 측정이 아님. |
| New S13 | 같은 요청에 목표·보존·범위·확인·완료 정보를 추가. 같은 A/B/C 중 B 구현 최소수정 경로 강조, 다른 경로는 점선·옅은 글자로 보존. | 사람이 의도한 목표 경로. 실제 선택·정확성·성공·토큰 절감 보장이 아니며 검증이 계속 필요함. 실제 TRIAL-002 요청 원문이 아님. |

세 장 모두 Prompt 입력창·문구·시간선·곡선을 native PowerPoint text/shape로 편집할 수 있다. 같은 Agent의 동일성을 위해 같은 생성 삽화를 의도적으로 반복 사용했다. 원 이미지나 실행 Screenshot으로 위장하지 않는다. [삽화 파일·방법·정확한 프롬프트](../../assets/slide-illustrations/PROMPT_TIMELINE_SOURCES.md).

## Sequence

S10 검사 Task의 원하는 작업 질문 → S11 접근만으로 비어 있는 결정 → S12 같은 요청의 가능한 해석 → S13 정보가 채워진 목표 경로 → S14 다른 작업에 적용할 일반 질문·개인 Reflection → S15 과정의 Task Specification 틀 → S16 Before/After → S17 이후 실제 과거 Trial.

구체 예시를 본 뒤 S14를 미정 정보의 첫 발견처럼 운영하지 않도록 Map/Notes의 연결 문구를 조정했다. ACT 0은 원문·화면·Notes를 유지했다. S11 우측 질문은 원래 문구 그대로다. 그림의 판단 결과·성능·시간·토큰 효과를 관찰 근거로 추가하지 않는다.

## Numbering and Time

- S01–S12 번호 유지. 새 S13 삽입. 기존 S13–S81 → S14–S82.
- ACT 범위: S01–10 / S11–23 / S24–38 / S39–56 / S57–74 / S75–82.
- ACT 장수: 10 / 13 / 15 / 18 / 18 / 8.
- ACT 시간: 40 / 55 / 70 / 85 / 80 / 30 = 360분.
- Mode: Lecture130 / Demo73 / Case83 / Reflection20 / Transition22 / Q&A32 = 360분.
- 기존 S12 Case4분 → S12 Case2 + 새 S13 Case2. Section1B는 2+2+4=8분 유지.
- 기존 다른 장의 시간·Mode와 Beat·Section·Demo·Trial·Git State ID는 보존.
- 새 S13은 기존 T04-A와 M2 principle footer 재사용. 11개 Template family·27개 variant 유지.

## Official Artifacts

| File | Slides | SHA-256 |
|---|---:|---|
| production/AI_Dev_Training_Full.pptx | 82 | `817ac52788b61c9379b174d97c7c3fcdb7c9168c388323a65d3090f46fe16833` |
| production/ACT_0.pptx | 10 | `47914ebb88ae4a856827d1e7d93cb3706c4535634c2c58113f77f1c60ca4d132` |
| production/ACT_1.pptx | 13 | `41ef6e58472996546f5076012102656950f53a00c7e519a71b9907a24e1fb885` |
| production/ACT_2.pptx | 15 | `e41bf70af461b68750cb2fb3700a848f2b94bae9cac674b7c243fa837386dad5` |
| production/ACT_3.pptx | 18 | `ef72c0cc4312b9b07a5c22a6479f1e185d81f33dbeeb220a9e7f4b7aaff3bd9e` |
| production/ACT_4.pptx | 18 | `ec7e9f760227c07a2227ef58da67c1dffe5e6237db4281edb41ff01acbc370e0` |
| production/ACT_5.pptx | 8 | `975628845266261f18e12efe03b94db823c7f6cd422d2dd79e21fd3cc56b5755` |

- 통합 Notes: `756c7740cb2c01f5d9c05091520afb2e2792fa98468e27d07428001252c85a58`.
- Full montage: `05112951911b092db92ce0b39ae0e396f3fdfd10fc4d2b190e00ff6dbccdb76d`, 1920×5670.
- Full/ACT PNG: 각각 82개, 총164개. PNG1920×1080. Montage7개.
- Source: production/source/presentation-revision/prompt-timelines.mjs.

## Validation

| Check | Result / Scope |
|---|---|
| Slide IDs / Map | S01–S82, 82개 고유·순차 ID |
| Budgets | 전체/ACT/Mode/Section 합계 유지; 모든 Slide Mode 합계와 배정시간 일치 |
| Existing Map protected fields | 기존81개 Title/Role/Question/Core/Beat/Section/Evidence 보존; 번호 참조만 이동 |
| Notes schema / parity | 82개 ×19필드; Full/ACT Markdown과 7개 PPTX 내장 Notes 일치 |
| ACT 0 | Notes 파일 전체·Full S01–10 레코드 원문 동일; 10개 Full/ACT PNG baseline과 byte-identical |
| Existing visuals | 기존 S11/S12 제외한79개 Slide XML을 번호·관계/생성ID 정규화 후 비교: 차이 없음. 연결 이미지 bytes도 동일 |
| Exact render | 7개 finalized PPTX를 reimport해164개 PNG 생성; Full/ACT82쌍 SHA-256 일치 |
| Package / geometry / fonts / import | 7개 모두 package/geometry finding0, 지정글꼴 정책·first-party import 통과 |
| Native chart | 기존 S46→S47, chart 데이터 불변 |
| New visual review | S11/S12/S13 확대·독립 검토. S13 대비와 Prompt 제목 보완 후 재렌더. 검토한3개 draft와 final PNG byte-identical |
| Full sequence | 전체 ACT contact sheet 검토와 주요 경계8장 확대. 새 잘림·겹침·화면ID 잔재 발견 없음 |
| Static fallback | 실제29개 PNG 경로·표시ID·1920×1080·새SHA 확인, 로컬 정적 자료만 READY |
| Historical paths | 과거 bitmap·Prototype·검증 JSON·Trial·Decision 본문·ZIP 보존. 현재 owner ID를 별도로 연결 |
| Cross-references | 한글 조사와 붙은 ID까지 대조. Map12개 handoff와 다른 current plan17개 참조 누락 보완; Notes·Source 재검토 |

ACT 0 PPTX는 같은 화면·Notes로 다시 export되어 패키지 hash는 새로 계산했다. 내용·원본 제작 Source·10장 PNG를 변경한 것은 아니다. 지정글꼴은 Malgun Gothic/Consolas이며 로컬 미리보기는 Apple SD Gothic Neo/Menlo 별칭을 사용한다. Windows 실제 지정글꼴 렌더 검증으로 대체하지 않는다.

## Document Alignment

[82장 번호 대조표](../../plan/SLIDE_ID_MIGRATION_82.md)에 기존81개 대응과 기반 문서 검토를 기록했다. 현재 Map/Template/Visual/Freeze/Notes/Production/Transitions/Demo 연결, ACT/Full Notes, M 연결표, Runbook/Fallback, Q&A, 전달/체크리스트, Source와 Asset Manifest를 정렬했다.

이전 80장·81장 평가 문서는 원래 번호·hash·결과의 역사 판본으로 보존하고 현재 문서로 연결했다. 중간 80→81 번호표도 그대로 유지한다. 새 발표자 ZIP·HTML·package manifest는 만들지 않았고 Demo Repository·제품 코드·State tag·Trial은 변경하지 않았다.

## Remaining Gates

- 이번 변경으로 발견한 로컬 P0/P1: 없음.
- Windows PowerPoint·발표 PC 글꼴·교육장 투사·현재 제품/계정·Live·시간 리허설: UNVERIFIED.
- S74의20분 운영과 최종 배포 승인: 기존 Gate 유지.

**READY FOR USER REVIEW OF S11–S13**.

[Machine-readable validation](PROMPT_TIMELINE_REVISION_VALIDATION.json).
