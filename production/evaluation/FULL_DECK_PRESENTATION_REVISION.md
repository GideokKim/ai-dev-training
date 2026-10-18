# Full Deck Presentation Revision

Date: 2026-10-18 (Asia/Seoul)

## Status

**COMPLETE — 로컬 제작·렌더링 검토 완료.** Windows PowerPoint, 교육장,
현재 제품/계정, 실제 시간 리허설은 **UNVERIFIED**다. 수업 운영 승인과
이번 발표용 수정의 완료를 구분한다.

사용자가 승인한 S05/S23/S45/S57 시안의 방향을 전체 80장에 적용했다.
승인 근거는 DEC-0027이며 시작 Git 기준은 `596d76e`다. 새 Demo Trial,
제품 코드 변경, 측정 결과 추가 또는 Claim 범위 확장은 하지 않았다.

## Deliverables

- [80장 통합 PPT](../AI_Dev_Training_Full.pptx)
- ACT_0.pptx–ACT_5.pptx: 통합본과 같은 내용·내장 Notes를 가진 여섯 파일
- [전체 Notes](../notes/FULL_SPEAKER_NOTES.md) 및 ACT별 Notes
- [전체 미리보기](../preview/full/montage.png), 개별 S01–S80 PNG, ACT별 PNG
- [검증 기록](FULL_DECK_PRESENTATION_REVISION_VALIDATION.json)
- `production/source/presentation-revision/`: 공통 스타일과 Slide별 편집 가능한 제작 원본

PPT의 본문·도식은 native text/shape이며 S45는 데이터가 포함된 native
bar chart다. 비교 행은 각각 편집 가능한 텍스트·구분선이다. 80장 전체를
이미지로 붙이지 않았다. 11개 논리 Template / 27개 Variant 매핑을 유지하되,
11개의 PowerPoint Slide Master를 새로 만들었다는 뜻은 아니다.

## Revision Principles

1. 제작 지시와 발표 운영 분 배분은 Notes에 두고, 청중이 볼 질문·자료·차이를 화면에 배치했다.
2. 코드·지침·접근 기록은 확인된 범위의 발췌 또는 재구성으로 표시했다.
3. 승인된 색상·서체·16:9·Evidence 문법을 공통 컴포넌트로 사용했다.
4. 실제 결과, 가상 사례, 연구, 교육 모델, Meta 기록의 범위를 유지했다.
5. 빈 결과 패널, 반복되는 관리 상태, 도구 이름 나열을 줄이고 각 장의 판단 대상을 드러냈다.

## Source of Truth and Time

원본 Slide Map의 80개 레코드를 필드별 대조했다. 바뀐 필드는 승인된
S57의 `Demo / Case Connection` 한 곳뿐이다. 제목·ID·ACT·Section·Beat·
시간·Mode·Evidence Type·Claim Status는 보존했다.

| ACT | 장수 | 분 |
|---|---:|---:|
| 0 | 9 | 40 |
| 1 | 12 | 55 |
| 2 | 15 | 70 |
| 3 | 18 | 85 |
| 4 | 18 | 80 |
| 5 | 8 | 30 |
| 합계 | 80 | 360 |

Lecture 130 / Demo 73 / Case 83 / Reflection 20 / Transition 22 / Q&A 32.
각 Slide의 Mode 합계가 해당 시간과 일치한다. 실제 발표 소요 시간의 적합성을
검증한 것은 아니다.

## S57 Accepted Setting

모듈 간 연결 동작까지 확인할 필요가 생겨 프로젝트의 검증 범위가 단위
테스트에서 단위+통합 테스트로 넓어졌다고 가정한다. 재사용 Workflow에는
단위 테스트만 지시하는 문구가 남아 있다. S56은 변화 전 일치 상태,
S57은 두 지시의 범위 차이, S58–65는 대응과 평가의 개념적 논의를 잇는다.

이 설정은 실제 graypipe 변경 이력, Agent 실행, 테스트 누락, PASS/FAIL
결과가 아니다. 임의 명령·로그·측정값을 만들지 않았다. 실제 Meta 사례인
DEMO-04B와 분리했다. 관련 Plan과 Runbook을 승인 결정에 맞췄다.

## Evidence and Claim Review

| 구간 | 유지한 경계 |
|---|---|
| S05 | TRIAL-001 / STATE-00 재구성; CLI 0.154.0 읽기 전용, 수정 없음. 제품 호출 경로이며 Agent 읽기 순서로 주장하지 않음 |
| S16–17 | 실제 crop 반개구간 계약과 TRIAL-002의 bounded change·검증 범위 |
| S23–27 | 실제 AGENTS.md 내용/상태와 관찰을 구분. 의존성 추가는 task justification 조건. Global 영향과 관찰되지 않은 혼란 명시 |
| S29 | 두 연구의 과제·조건 범위. 현재 Codex의 일반 한계나 Routing 성능 향상 근거로 확대하지 않음 |
| S34–35 | 접근 차이 관찰; 완벽한 Routing 미입증, 토큰·성능 효과 미측정 |
| S41–42 | 과거 CLI의 명시 호출 관찰; 현재 Desktop·암묵 호출·Skill 우월성 미입증 |
| S44–45 | STATE-04 → STATE-04-PERF의 동일 입력/환경. 15.468 → 10.769 ms/call, tracemalloc 6,675,804 → 380 B. RSS 또는 Harness 단독 효과 아님 |
| S55–66 | S55 observed product, S56–65 conceptual, S66 teaching model |
| S64 | EVAL-01/02는 별도 과거 관찰 참고, 03/04는 설계. 네 작업 모두 새 Workflow 변경 후 평가 결과 없음 |
| S67–71 | 실제 Meta 평가·보고 기준의 변화; 결과 타당성과 원인 귀속 PARTIAL을 분리 |
| S72–80 | C++는 전이 모델, 마지막 회고는 기존 Evidence와 교육 모델의 범위 |

## Render Review Method

최종화된 PPTX를 Artifact Tool로 다시 불러와 1920×1080 PNG로 렌더링했다.
세 구간(S01–21, S22–54, S55–80)을 나눠 모든 장을 개별 시각 검토했고,
주 담당자는 승인 시안·ACT 경계·근거 위험 구간과 수정된 장을 추가 검토했다.
마지막 S26 열 간격 보정 후 80장과 여섯 ACT를 다시 내보냈다. 79장 PNG는
직전 개별 검토본과 SHA-256이 같았고, 바뀐 S26은 직접 다시 확인했다.
통합본과 ACT별 80개 PNG도 각각 동일한 SHA-256이었다.

검토 범위: 핵심 메시지, 제목·본문·코드 가독성, 한글 표시, 정보 밀도,
여백·정렬·겹침·잘림, Evidence 라벨, Story 연결. 아래 PASS는 이 로컬
시각 검토 범위다. 실제 사람의 5–10초 인지 실험이나 교육장 투사 검증이 아니다.

폰트 지정은 기존 Malgun Gothic / Consolas를 보존했다. 로컬 preview에서
Nanum Gothic / D2Coding 계열의 alias 등록을 사용했으며 glyph별 실제 fallback
선택은 검증하지 않았다. Mac 결과로 Windows 호환성을 PASS 처리하지 않는다.

## Slide-by-Slide Local Review

| Slide | Template | 검토 초점 / 반영 사항 | 결과 |
|---|---|---|---|
| [S01](../preview/full/S01.png) | T01-A | AI에게 지금 무엇을 맡기고 있는가? — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S02](../preview/full/S02.png) | T03-C | 작은 질문에는 Chatbot이 유용하다 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S03](../preview/full/S03.png) | T02-A | 질문이 커지면 Context를 모으는 일이 생긴다 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S04](../preview/full/S04.png) | T05-A | 파일명을 주지 않으면 Agent는 어디부터 볼까? — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S05](../preview/full/S05.png) | T07-A | 실제 crop 테스트 배열과 추가 열, 호출 경로를 승인 시안 그대로 표시 | PASS |
| [S06](../preview/full/S06.png) | T07-A | 관찰 결과와 실행 제한을 분리한다 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S07](../preview/full/S07.png) | T04-B | 코드를 AI에게 가져가는 대신 AI를 Repository로 데려간다 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S08](../preview/full/S08.png) | T02-A | Repository 접근과 Task 의도는 별개다 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S09](../preview/full/S09.png) | T01-B | Repository를 보면 내가 원하는 것까지 알까? — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S10](../preview/full/S10.png) | T02-A | Task에는 무엇이 아직 정해지지 않았을까? — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S11](../preview/full/S11.png) | T02-A | 요청만으로는 의도가 보이지 않는다 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S12](../preview/full/S12.png) | T02-A | 개발자가 정해야 하는 경계 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S13](../preview/full/S13.png) | T03-A | Task Specification의 다섯 책임 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S14](../preview/full/S14.png) | T04-A | 더 긴 Prompt보다 분명한 경계 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S15](../preview/full/S15.png) | T05-A | 다섯 단계의 보조 설명을 축약해 간격 확보 | PASS |
| [S16](../preview/full/S16.png) | T06-A | 실제 crop 계약과 한 줄 변경을 Before/After로 비교 | PASS |
| [S17](../preview/full/S17.png) | T06-B | 변경 결과와 확인 증거 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S18](../preview/full/S18.png) | T06-C | Generated ≠ Done — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S19](../preview/full/S19.png) | T06-C | Check마다 확인하는 범위 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S20](../preview/full/S20.png) | T01-B | 이번 Task인가, 계속 유지할 Project 정보인가? — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S21](../preview/full/S21.png) | T04-A | 이번 Task와 지속 정보 구분; 의존성 추가의 정당화 조건 보존 | PASS |
| [S22](../preview/full/S22.png) | T02-B | 세 Task의 반복 정보 강조; 실제 의존성 조건으로 표현 정렬 | PASS |
| [S23](../preview/full/S23.png) | T07-C | AGENTS.md 실제 원문 발췌로 목적·실행·테스트·제약 구체화 | PASS |
| [S24](../preview/full/S24.png) | T07-A | 한 번의 사용에서 확인된 것 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S25](../preview/full/S25.png) | T03-B | Task Prompt와 Project Context — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S26](../preview/full/S26.png) | T04-B | 실제 문서 증가와 발췌 표시; 값 열 간격 재조정 | PASS |
| [S27](../preview/full/S27.png) | T07-A | 정확하지만 이번 Task에는 불필요한 정보 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S28](../preview/full/S28.png) | T03-B | 정보의 범위와 제공 시점 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S29](../preview/full/S29.png) | T09-A | 두 연구의 과제·범위와 출처를 구분; 현재 Codex 일반화 제외 | PASS |
| [S30](../preview/full/S30.png) | T03-C | 필요한 상세 정보로 가는 길 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S31](../preview/full/S31.png) | T03-B | Core Context에서 상세 정보로 가는 길 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S32](../preview/full/S32.png) | T04-B | 정보를 지우지 않고 위치를 나누기 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S33](../preview/full/S33.png) | T05-A | 서로 다른 두 Task가 무엇을 읽을까? — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S34](../preview/full/S34.png) | T07-A | Crop Task에서 관찰한 접근 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S35](../preview/full/S35.png) | T04-C | Task A/B의 실제 상세 문서 접근을 비교; 미측정 효과 명시 | PASS |
| [S36](../preview/full/S36.png) | T04-A | 화면에서 운영 시간 제거; Notes는 Transition 4분 → Q&A 6분 | PASS |
| [S37](../preview/full/S37.png) | T04-A | 서로 다른 Performance Task, 반복되는 절차 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S38](../preview/full/S38.png) | T03-A | Project 사실과 작업 절차는 다르다 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S39](../preview/full/S39.png) | T03-B | Task, Context, Workflow의 역할 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S40](../preview/full/S40.png) | T05-A | 반복 절차를 Skill로 옮길 수 있을까? — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S41](../preview/full/S41.png) | T07-A | 실제 discovery/invocation 기록 재구성; 현재 Desktop 검증과 구분 | PASS |
| [S42](../preview/full/S42.png) | T04-A | 절차의 책임이 Prompt에서 Repository로 이동 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S43](../preview/full/S43.png) | T04-A | 답을 담지 않는 Workflow — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S44](../preview/full/S44.png) | T07-B | 측정으로 후보를 고르다 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S45](../preview/full/S45.png) | T07-B | 승인된 수치의 native 차트와 할당량 비교; 측정 조건·인과 한계 유지 | PASS |
| [S46](../preview/full/S46.png) | T10-B | 이 작업에 Subagent가 필요했을까? — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S47](../preview/full/S47.png) | T10-B | Subagent를 고려할 조건 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S48](../preview/full/S48.png) | T10-B | 무엇이 다시 찾기 어려운 지식인가? — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S49](../preview/full/S49.png) | T10-B | Memory는 재발견 비용으로 판단 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S50](../preview/full/S50.png) | T10-C | Minimum Effective Harness — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S51](../preview/full/S51.png) | T03-B | Harness는 작업 환경 설계다 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S52](../preview/full/S52.png) | T03-B | Repository 밖의 환경도 결과에 영향을 준다 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S53](../preview/full/S53.png) | T03-A | Engineering Pattern은 C++에도 전이된다 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S54](../preview/full/S54.png) | T01-B | 화면에는 업무 질문; Notes에 Reflection 3 → Q&A 5 → Transition 2 | PASS |
| [S55](../preview/full/S55.png) | T07-C | 실제 검증된 제품 결과의 세 근거를 회수 | PASS |
| [S56](../preview/full/S56.png) | T08-A | 가상 사례 시작: 프로젝트와 Workflow 모두 단위 테스트 범위 | PASS |
| [S57](../preview/full/S57.png) | T08-A | 승인 설정: 단위+통합 테스트 기준과 단위만 지시하는 Workflow 비교 | PASS |
| [S58](../preview/full/S58.png) | T08-C | Task 해결과 System 문제는 다르다 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S59](../preview/full/S59.png) | T08-B | 원인에 맞는 Layer를 고르기 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S60](../preview/full/S60.png) | T08-C | 실패 지점과 원인 Layer 구분하기 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S61](../preview/full/S61.png) | T08-C | 먼저 관찰하고, 그다음 가설을 세운다 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S62](../preview/full/S62.png) | T08-B | Cause가 지지하는 최소 변경 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S63](../preview/full/S63.png) | T08-B | 같은 Task의 재실행만으로 충분할까? — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S64](../preview/full/S64.png) | T08-B | 평가 작업과 포함 이유; 과거 관찰 참고와 새 평가 미실행 구분 | PASS |
| [S65](../preview/full/S65.png) | T08-C | Harness도 특정 실패에 맞춰 과적합될 수 있다 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S66](../preview/full/S66.png) | T03-C | 다섯 단계 Loop 모델; 자동 학습 또는 실제 제품 Loop 주장 제외 | PASS |
| [S67](../preview/full/S67.png) | T11-A | 실제 Meta 기록을 작업·환경·해석 흐름으로 표시 | PASS |
| [S68](../preview/full/S68.png) | T11-B | 측정 결과와 Prompt-only 귀속 PARTIAL을 분리 | PASS |
| [S69](../preview/full/S69.png) | T11-A | 평가와 보고 규칙을 Evidence에 맞추다 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S70](../preview/full/S70.png) | T11-B | 최종 보고와 보존 stderr의 불일치를 구체적으로 대조 | PASS |
| [S71](../preview/full/S71.png) | T11-A | 실제 Meta Loop에서 바뀐 것 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S72](../preview/full/S72.png) | T03-C | C++ 전이 질문을 화면 중심에 배치; 20분 운영은 Notes에서 유지 | PASS |
| [S73](../preview/full/S73.png) | T03-C | 다섯 단계와 각 단계의 역할을 한 줄씩 회수 | PASS |
| [S74](../preview/full/S74.png) | T07-C | 하나의 Repository가 문제에 대응해 진화했다 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S75](../preview/full/S75.png) | T10-A | 필요성이 입증되지 않은 것은 보류했다 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S76](../preview/full/S76.png) | T03-A | 위임이 늘어도 개발자 책임은 남는다 — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S77](../preview/full/S77.png) | T03-A | 라벨을 지식·절차로 압축해 설명과의 간격 확보 | PASS |
| [S78](../preview/full/S78.png) | T10-B | 어느 Layer에서 마찰이 반복되는가? — 핵심·배치·근거와 Notes 순서 대조 | PASS |
| [S79](../preview/full/S79.png) | T01-B | 실천 약속·제출 요구 없이 개인 성찰 질문만 표시 | PASS |
| [S80](../preview/full/S80.png) | T01-C | 적용 질문과 승인된 종결 메시지로 마무리 | PASS |

## Notes and Operational Alignment

- 80개 Notes에 19개 필드가 모두 존재하며 비어 있지 않다.
- Markdown의 ACT Notes, Full Notes, 통합 PPT 및 여섯 ACT PPT의 내장 Notes를 대조했다.
- 모든 Slide ID·제목·시간·Mode는 Map과 같다.
- S21의 예전 흐름 설명 1+4+1을 승인된 1+3+2로, S36의 예전 흐름 설명을 승인된 Transition 4 → Q&A 6으로 정렬했다. 배정 시간 자체를 변경하지 않았다.
- S54는 Reflection 3 → Q&A 5 → Transition 2를 유지한다.
- S72는 Case 7 → Reflection 2 → Q&A 7 → Transition 4를 유지한다. 무응답 질문과 Cutoff가 Notes에 있고 실제 20분 운영은 UNVERIFIED다.
- Notes는 REVIEWED로 정규화했다. 로컬 문서 검토와 실제 수업 리허설을 구분한다.

## Package and Artifact Checks

- 일곱 PPTX의 ZIP/XML 관계, 지정 16:9, 개수, font policy, heading/bullet geometry 검사: 오류 0.
- 모든 실제 shape는 검사 safe area 안에 존재. 눈에 보이는 잘림·겹침은 개별 시각 검토에서 추가 확인.
- S45 native chart: 값 cache와 embedded workbook snapshot 관계 확인. 실제 PowerPoint 열기 검증은 별도다.
- 전체·ACT 160개 개별 PNG 정상, Full/ACT 화면 동일. Montage는 같은 PNG에서 생성한 contact sheet다.
- 현재 Static fallback 29개 파일의 경로·크기·해시를 갱신했다. 이것은 Trial raw capture가 아니다.
- Demo Repository의 HEAD·태그·clean 상태는 유지했고 실행·수정·새 Trial을 하지 않았다.
- 임시 빌드·렌더러 캐시·개인 설정·인증 자료는 산출물에서 제외했다.

## Resolved Review Findings

| Slide | 수정 | 확인 |
|---|---|---|
| S15 | 다섯 단계 보조 설명 압축 | 최종 PNG 간격 확인 |
| S21–22 | blanket dependency 금지 문구를 실제 정당화 조건으로 정렬 | 원문 의미와 화면 확인 |
| S26 | 생략 단계 명시 및 값 열 간격 확대 | 최종 PNG 재검토 |
| S36/S54 | 화면의 운영 시간 제거, Notes에 보존 | 화면/Notes 대조 |
| S77 | 긴 라벨을 지식·절차로 압축 | 최종 PNG 간격 확인 |

## Remaining Gates

- 로컬 수정 범위에 남은 P0/P1은 발견하지 못했다.
- Windows PowerPoint 및 발표 PC 글꼴, 실제 투사 가독성: UNVERIFIED.
- 교육용 제품 표면·계정·권한, Live/Hybrid 경로: UNVERIFIED. 기본 경로는 준비된 정적 자료다.
- S72 및 전체 360분 리허설: UNVERIFIED. 배분의 산술적 일치와 운영 가능성은 다르다.
- S29의 RepoQA 세부 출판 venue 미확정 기록은 기존 Research에 남겨 두며 화면에서는 확인된 제목·연도·링크만 쓴다.
- 체크리스트: [USER_VALIDATION_CHECKLIST](USER_VALIDATION_CHECKLIST.md).

## Git Checkpoint

기존 `main` / `origin`에 정상 산출물만 기록한다. 상세 Commit ID는 Git history와
작업 완료 보고를 기준으로 한다. Force push, 새 remote, Demo Repository 변경은 없다.

## Next Readiness

**READY FOR USER REVIEW AND TARGET-ENVIRONMENT VALIDATION.**
