# Prompt Instruction / Observable Action Mapping Revision

Date: 2026-10-21 (Asia/Seoul). Decision: DEC-0039. Baseline: `8959639`.
Status: **COMPLETE — LOCAL PRODUCTION / ALIGNMENT**.

## Requested Change

- **S17:** 좌측 Prompt 입력창 안에 실제 TRIAL-002 Goal·Constraints와 다섯 핵심 지시의 발췌·번역을 표시했다. 우측은 화살표 없는 세로 번호 01 재현 / 02 조사 / 03 계획 / 04 수정 / 05 검증·보고다. 동일 번호와 행 높이로 지시와 관찰 기준을 대응시킨다.
- **S18:** 기존 Before/After 한 줄 diff와 예시를 유지했다. 02 조사·03 계획을 회수해 04 수정으로 연결하고, 하단에서 다음 S19의 05 검증·보고로 넘긴다. 끝 좌표 제외 동작은 명세라는 표현으로 정렬했다.
- 우측 반복 설명을 제거해 번호와 핵심 행동만 읽히도록 정리했다. 다른 80장 화면과 Notes 레코드는 변경하지 않았다.

## Actual Prompt and Evidence

[TRIAL-002 기록](../../plan/DEMO_MATRIX.md)의 Prompt used 및 Investigation/visible plan checkpoint, Implementation, Verification을 대조했다. 원문 395–412행과 관찰 415–434행이 대응의 근거다.

| No. | Prompt instruction excerpt | Observable criterion / next evidence |
|---|---|---|
| 01 | first reproduce the current failure | 실패를 먼저 재현하는가 |
| 02 | inspect the related implementation and call path | 관련 구현과 호출 경로를 조사하는가; S18에서 회수 |
| 03 | before editing, send a concise user-visible change plan | 코드 수정 전 계획을 알리는가; S18에서 회수 |
| 04 | make only the necessary code change | 명세를 보존하는 최소 변경인가; S18 실제 crop slice diff |
| 05 | focused/full tests, CLI smoke if practical, final diff and exact evidence | 결과와 근거를 보고하는가; S19에 실제 검사 결과 유지 |

S17은 **WATCH / Lecture 2분**이다. 결과·PASS 수치와 로그를 미리 나열하지 않는다. 좌측은 핵심 지시의 번역 발췌이며 전체 원문이나 당시 입력창 Screenshot이 아니다. 생략한 격리·태그·미커밋 제약은 원본 기록에 보존한다. CLI smoke의 if practical 조건을 번역에도 유지한다.

이는 외부 행동과 지시의 대응이다. 내부 사고, Prompt 단독 인과성, 우월성, 결정론적 준수, 현재 Desktop·계정·모델·반복성을 증명하지 않는다. TRIAL-002는 2026-09-28 macOS Codex CLI 0.154.0의 단일 과거 실행이다. 기존 user-level Harness 영향 경계도 유지한다. 새 Trial, 제품 실행이나 측정은 없다.

S18의 실제 변경은 `row[x_start : x_end + 1]`에서 `row[x_start : x_end]`로 제한된다. `[x_start, x_end)` 명세, `crop(image, 1, 3)` 및 너비 3에서 2의 기존 예시와 STATE-00 → STATE-00-FIXED 근거를 유지한다. S18은 Demo4분, S19는 Demo4분으로 기존 DEMO-05 8분을 유지한다.

## Sequence and Notes

S16 교육용 구성 Prompt → S17 실제 Prompt 핵심 지시와 번호 관찰 기준 → S18 조사·계획과 한 줄 변경 → S19 검증 근거.

ACT 1 / Full Notes의 S17·S18을 번호 대응, Opening, Speaker Flow, 관찰 범위, Transition, Fallback에 맞췄다. 기존19필드, 제목·Primary Message·시간·Mode를 보존하고 PPT 내부 Notes와 대조했다. 전체82개 중 다른80개 Notes 레코드는 원문 동일하다.

## Official Artifacts

| File | Slides | SHA-256 |
|---|---:|---|
| production/AI_Dev_Training_Full.pptx | 82 | `8b27e8e00015997e0358ba594ee13b149253264e2b34d8360be00cd4f0479230` |
| production/ACT_1.pptx | 13 | `f0a9561f7023caf1463b1298038e75aca3deeef7305d0761c75599be5a6742bb` |

- Full Notes: `280ea7dc1e60e8240119d518db0b54942fca03b616332f7ebc6b3ba1b8431f1e`.
- Full montage: `3b05c9796651bbd2edb3ec8a9804fd1b1c20cb71787625066987246ca75f41f8` (1920×5670).
- 통합82개 및 ACT1 13개, 총95개 PNG를 finalized PPTX에서 다시 렌더링했다. 다른 ACT 파일은 변경하지 않았다.

## Validation

| Check | Result / scope |
|---|---|
| Count / identity | S01–S82, 82개 고유 순차 ID; 번호 변경 없음 |
| Time | ACT40/55/70/85/80/30 =360; Mode130/73/83/20/22/32 유지 |
| Protected Map fields | 모든82장의 제목·역할·질문·Core·Beat·Evidence·Claim·시간·Mode 불변 |
| Other slide content | 다른80장 XML 구조·연결 이미지·실제 PNG bytes 동일 |
| Other ACT files | ACT0/2/3/4/5 PPTX bytes 동일 |
| Notes | 82개×19필드, ACT/Full Markdown 및 내장 Notes 일치; 다른80레코드 불변 |
| Exact-file rendering | 통합82+ACT1 13=95개; ACT1의13개 Full/ACT PNG 동일 |
| Changed previews | 최종S17/S18 PNG와 확대 검토한 draft bytes 동일 |
| S17 requested structure | 01–05 각각 좌우2회, 화살표0; 같은 번호·행으로 대응 |
| Package / layout / font / import | 두 PPTX 모두 finding0 및 지정글꼴 정책·first-party reimport 통과 |
| Native chart | S47 chart 데이터 보존 |
| Visual review | S17/S18 확대·독립검토, S16–19 연결 대조; 새 잘림·겹침 발견 없음 |
| Current document links | 49개 local link, 누락0 |
| Static fallback | 실제29개 경로·1920×1080·SHA 재확인; S18 identity 갱신; 로컬 파일만 READY |

지정글꼴 Malgun Gothic/Consolas는 유지하며 로컬 Preview는 Apple SD Gothic Neo/Menlo 별칭을 사용했다. 로컬 구조·렌더 검토는 Windows·실제 발표 PC 글꼴·교육장 투사·현재 제품/계정·시간 리허설 검증을 대체하지 않는다.

## Updated Records and Remaining Gates

현재 Map/Template Mapping, DEC-0039, ACT1/Full Notes, 제작 source, ACT1/Full PPT·Preview, fallback manifest/DEMO-05, 최종 전달 안내와 사용자 체크리스트를 정렬했다. 과거 검토 문서·Prototype·Decision 본문은 보존했다. 묶음 ZIP·HTML·manifest와 Demo Repository·State tag는 변경하지 않았다.

이번 로컬 수정에서 남은 P0/P1: 없음. Windows, target account/product, room and timed rehearsal: **UNVERIFIED**.

**READY FOR USER REVIEW OF S17–S18**.

[Machine-readable validation](PROMPT_FLOW_REVISION_VALIDATION.json).
