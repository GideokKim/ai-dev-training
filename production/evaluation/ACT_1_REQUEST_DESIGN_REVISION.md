# ACT 1 — Request Design and Verification Case Alignment

Date: 2026-10-21 (Asia/Seoul). Decision: [DEC-0042](../../plan/DECISIONS.md). Baseline: `d9ae395`.
Status: **COMPLETE — LOCAL PRODUCTION / ALIGNMENT**.

## 1. Current State and Scope

사용자 요청 시점의 e5596fd·미커밋 상태보다 현재 상태를 먼저 확인했다. 시작 HEAD는 d9ae395이고 작업 트리는 깨끗했다. S21의 vector·GoogleTest 개선 DEC-0041은 이미 기록된 기준이므로 보존했다. ACT 1의 현재 S11–S23, 13장/55분과 전체82장/360분을 유지했다.

이번 기준 문장: **“원하는 변화, 지켜야 할 조건, 완료를 판단할 근거를 요청에 담는다.”**

과정·검증도 요청할 내용이라는 연결을 분명히 했으며, 새로운 기법·테스트 강의·비교 실험을 추가하지 않았다. 역할·시간 재배분은 필요하지 않았다.

## 2. Slide Changes and Reasons

| Slide | Changed connection / reason | Time |
|---|---|---:|
| S11 | 미정 목표·보존 조건·완료 근거를 ACT 1의 요청 설계 주제로 고정. 승인된 Agent·토큰/시간 PNG 보존. | 7분 |
| S12 | filter에서 익숙한 crop으로 같은 모호함을 좁힌다는 짧은 전환 추가. 병렬 시간선은 가능한 해석. | 2분 |
| S13 | 교육용 구체 요청의 확인 항목을 쉬운 말로 풀어 쓰고, 원하는 변화·조건·완료 근거를 회수. | 2분 |
| S14 | 앞선 crop 답의 재설명을 줄이고 개발자가 정할 다섯 질문에 집중. | 4분 |
| S15 | 다섯 항목으로 일반화. 조사할 저장소 사실과 사람이 정할 목표·제약·완료 기준을 구분. 외부 요구는 필요한 만큼 제공한다고 Notes에 명시. | 4분 |
| S16 | Goal/Context/Constraints/Process/Verification 각각을 실제 교육용 요청 문장으로 표시. 저장소에서 관련 사실을 찾게 요청. | 9분 |
| S17 | 실제 TRIAL-002 Prompt 발췌·번역과 행동의 01–05 대응 보존. Process·Verification 지시를 읽는 장으로 정렬; S16의 실행 결과가 아님을 화면에도 표시. | 2분 |
| S18 | 요청한 조사·보존 조건·최소 수정과 실제 한 줄 diff를 연결. 명세·구현·폭 수치는 불변. | 4분 |
| S19 | 요청한 확인·보고와 실제 관련 테스트3/3·전체11/11·CLI PASS·한 파일 한 줄 변경을 대응. 실제 관련 테스트 묶음에는 resize도 포함. | 4분 |
| S20 | 변경 내용·확인 근거·미확인 사항을 요청하고 사람이 완료를 판단하는 인계로 회수. | 3분 |
| S21 | DEC-0041 vector·assertion을 그대로 두고 막연한 검사보다 명세·기대값에 맞는 완료 근거를 요청하는 예시로 연결. | 5분 |
| S22 | 구체 요청을 작성한 뒤에도 같은 테스트 명령·보존 조건을 다시 쓰는 마찰을 Reflection/Q&A로 제시. | 3분 |
| S23 | Task 정보와 계속 참고할 Project 정보의 수명·범위를 비교하고 S24의 반복 Context 문제로 연결. | 6분 |

[ACT 1 montage](../preview/act1/montage.png). 개별 PNG: `production/preview/act1/S11.png`–`S23.png`.

## 3. Sequence Review

- **S10→S11:** 제조 검사 Task에서 원하는 목표·조건·완료 근거가 저절로 정해지는지 회수한다.
- **S11→S13:** 같은 모호함을 filter에서 crop으로 좁히고, 원하는 경로를 요청에 명시한다. 실제 반복 실행·Subagent가 아니다.
- **S14→S16:** 개발자 질문 → 다섯 항목 → 교육용 요청의 해당 문장으로 역할을 나눴다. Context의 모든 내용을 사람이 직접 복사하라는 뜻이 아니다.
- **S16→S17:** “여기까지는 교육용 요청 예시였습니다. 이제 실제 기록에서는 어떤 지시를 전달했고, 그 지시와 작업 과정이 어떻게 연결됐는지 보겠습니다.”를 Notes에 명시했다. S17 하단에도 S16 예시의 실행 결과가 아니라고 표시했다.
- **S17→S19:** 실제 요청 01–05 → 조사·계획·보존 조건과 최소 diff → 요청한 확인·보고의 기록으로 이어진다. 일반 개발 절차 강의로 펼치지 않는다.
- **S20→S21:** 완료 판단을 위해 요청할 보고와, 명세 위반을 구별하는 검사의 기대값으로 회수했다.
- **S23→S24:** 잘 작성한 요청에서도 반복되는 테스트 명령·Project 보존 조건이 남는다. 저장 방식의 답은 ACT 2에서 문제를 본 뒤 소개한다.

## 4. Evidence and Claim Boundary

[TRIAL-002 원자료](../../plan/DEMO_MATRIX.md)의 Prompt·행동·명령·수치는 수정하지 않았다. 실제 Prompt의 Goal/Constraints/Process/Verification 발췌·번역을 대조했다. 원문에는 S16과 같은 별도의 Context heading이 없으며 S16 예시를 그대로 실행한 기록도 아니다.

- 실제 관찰: 2026-09-28 macOS Codex CLI0.154.0 단일 실행, `[x_start,x_end)` 보존, `row[x_start : x_end + 1]` → `row[x_start : x_end]`, 한 파일/한 줄 변경.
- 관련 테스트 묶음 `test_transform.py` 3/3에는 crop 경계·resize 보존·crop 오류 조건이 포함된다. “crop만 3개 실행”으로 확대하지 않는다. 프로젝트 전체11/11, 가능한 경우 요청한 CLI 샘플의 실제 성공, 최종 `git diff --check` 결과를 보존했다.
- 실제 실행에는 사용자 수준 Harness 영향도 있었다. 번호 대응은 관찰된 외부 행동이며 Prompt 단독 인과성·우월성·내부 사고·반복성을 입증하지 않는다.
- S11 비용 곡선은 수치 없는 개념도다. 총 토큰/시간 절감·기하급수 법칙·성능 개선을 새 성과로 말하지 않는다.
- S12/S13 병렬 경로는 교육용 구성. S16은 교육용 요청, S20은 결과 인계의 교육용 재구성이다.
- S21의 vector 입력{1,2,3,4}, 기대{2,3}, 반례{2,3,4} 및 GoogleTest assertion3개는 기존 교육용 예시다. 실제 Trial은 Python unittest이고 새 C++ 실행·PASS/FAIL은 없다.
- 현재 Codex Desktop·교육 계정·제품 표면·새 실험을 검증한 근거가 아니다. 당시 benchmark도 수행하지 않았다.

## 5. Notes and Terminology

ACT/Full Notes의 ACT 1 13개 레코드를 같은 내용으로 정렬했다. 19개 필드, Primary Message·Claim Boundary·시간·Mode는 보존했다. 첫 등장 시 crop 관련 테스트만 실행 / 프로젝트 전체 테스트 실행 / CLI 샘플 실행 확인 / 변경 내용 확인으로 설명하고 필요하면 뒤에 영어를 병기한다. 원본 인용·명령의 focused/full/smoke/diff는 바꾸지 않았다.

S19에는 실제 관련 테스트 묶음의 범위를 따로 설명했다. S20/S21의 기존 C++ 관련 참조는 현재 S21 화면과 S55 주패턴에 맞췄다. 다른69개 Map·Notes 레코드는 동일하다.

## 6. Final Artifacts

| File | Slides | SHA-256 |
|---|---:|---|
| production/AI_Dev_Training_Full.pptx | 82 | `22ebf381e9bc6a1430bd54d859f0308954a850e4235c41b4ff40cc13d6f2e2a2` |
| production/ACT_1.pptx | 13 | `aa2e13c14f387c2f15dc1debce742e38fa9f4b4ff165f9ca9b4c0b649bd2da0c` |

- Full Notes SHA-256: `37e907f2e48abc68a487205c8c378d4851ed4888fc33da486860857be4c24ed6`.
- Full montage SHA-256: `553622567384298b5f97af261d231a8bc713eab31a5489e194d69a44a0d29af5`.

Native text/shape와 승인 이미지를 유지했다. S47 native chart 데이터는 동일하다. 다른 ACT0/2/3/4/5 PPTX는 bytes까지 동일하며 묶음 ZIP/HTML은 만들거나 갱신하지 않았다.

## 7. Validation

| Check | Result / scope |
|---|---|
| Slide / time / Mode | 82장/360분; ACT40/55/70/85/80/30, Mode130/73/83/20/22/32 유지 |
| ACT 1 | 13장/55분; Lecture19/Demo8/Case17/Reflection4/Transition3/Q&A4; 장별 시간·Mode 불변 |
| Map 보호 필드 | ID/ACT/Section/title/role/Core/Beat/Evidence/Claim/time/Mode 동일 |
| Notes | 82×19필드, ACT/Full Markdown 및 양 PPT 내장 Notes 일치 |
| Exact-file render | 최종 Full82 + ACT1 13 =95개 PNG; ACT1/Full 13쌍 bytes 동일 |
| Unchanged scope | 다른69장 XML 구조·이미지·PNG 동일, 다른5개 ACT PPTX 동일 |
| Approved images | 전체82장에 연결된 이미지의 내용 hash 보존; S11 비용 PNG·Agent 포함 |
| Local visual review | S11–S23 개별1920×1080 검토 + 독립 검토 + S10/S24 경계 확인 |
| Final / reviewed draft | S17 하단 경계 추가를 최종 확대 확인, 나머지12장 시안과 최종 PNG 동일 |
| Clipping / overlap | 새 잘림·겹침·안전 여백 위반 발견 없음, 로컬 렌더 기준 |
| Package / layout / fonts / import | 두 PPTX 구조·geometry finding0, 지정글꼴 정책·first-party 재가져오기 통과 |
| Static fallback | 기존29개 파일 경로·치수·hash 확인; 바뀐 S18/S19 hash 갱신, 나머지27개 동일 |
| Historical evidence / Demo repo | 원자료 불변, 새 Trial·C++ 실행 없음; Demo HEAD afef3e0 clean 유지 |

지정글꼴 Malgun Gothic/Consolas는 유지했다. 로컬 Preview는 Apple SD Gothic Neo/Menlo 별칭으로 렌더링했다. 위 검사는 실제 Windows·교육장·실측 발표를 대신하지 않는다.

## 8. Remaining Issues and Readiness

- 로컬 수정 범위에서 P0/P1 없음. 주요 역할·시간 재배분 제안 없음.
- P2 선택 사항: S21의 기존 `suite` 용어를 최종 발표 때 “전체 테스트 묶음”으로 풀어 읽을 수 있다. Notes가 범위를 설명하며 도구 강의로 확장하지 않는다.
- Windows PowerPoint, 실제 발표 PC 글꼴·교육장 투사, 현재 제품/계정, 실측 리허설은 **UNVERIFIED** 유지.
- 정적 기본 경로는 기존 기록을 설명하는 PPT/PNG다. Live/Hybrid는 현재 승인하지 않았다.
- **READY FOR USER REVIEW OF ACT 1 REQUEST DESIGN**.

## 9. Updated Documents

Map·DEC-0042·기존 Curriculum의 bounded 연결 지침·Transitions, ACT/Full Notes,
활성 slide factory4개와 source README, Full/ACT1 PPT와 Preview,
DEMO-05 정적 운영 지침·fallback identity, 현재 전달 안내·사용자 체크리스트를 정렬했다.
과거 승인 내용·기획 의도·Claim Freeze는 보존했다.

[Machine-readable validation](ACT_1_REQUEST_DESIGN_REVISION_VALIDATION.json).
