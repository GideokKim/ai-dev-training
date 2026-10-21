# Codex Entry Slide Insertion & Numbering Migration

Date: 2026-10-21 (Asia/Seoul). Decision: DEC-0036.
Baseline: `6748990` (80 slides). Current candidate: **81 slides / 360 minutes**.

## Status

**COMPLETE — local production and document alignment.** 전체 81장과 6개 ACT PPT를 새 번호로 제작·렌더했다. Notes·경로·정적 Fallback을 대조했다. Windows PowerPoint, 교육장, 대상 제품·계정과 실측 리허설은 **UNVERIFIED**다.

## User-approved Changes

- 신규 **S08**을 S07 뒤에 삽입했다. ChatGPT 데스크톱 앱의 ChatGPT 메뉴에서 Codex를 선택하고 Repository 폴더를 열어 수정 전 조사를 요청하는 교육 경로다.
- 종전 S08은 **S09**다. 사람+AI Agent가 파일·구현·테스트를 확인하고, 원하는 결과·허용 범위·완료 수용은 사람이 최종 결정한다. Agent는 제안할 수 있다는 경계를 유지한다.
- 기존 S08–S80은 S09–S81로 1칸 이동했다. S01–S07 번호, Beat·Section·Demo·Trial·State ID는 보존했다.
- S07 Lecture 3분을 S07 2분 + 신규 S08 1분으로 나눠 6시간을 유지했다. Section 0E는 2+1+2=5분이다.
- 묶음·ZIP은 생성하거나 갱신하지 않았다. Demo Repository와 Trial은 변경하지 않았다.

## Product Evidence and Visual Provenance

[OpenAI Quickstart](https://learn.chatgpt.com/docs/quickstart?setup=app)와 [앱 안내](https://learn.chatgpt.com/docs/app)를 2026-10-21 확인했다. SRC-0228/0229, CLM-0031은 codebase context와 developer tools가 필요한 개발 작업의 문서상 Codex 진입 경로를 뒷받침한다.

S08 UI는 native PowerPoint 도형·텍스트로 만든 **재구성 도식**이다. 좌측 상단 위치는 사용자 환경 설명을 따른다. 직접 앱 확인은 Computer Use가 해당 앱 접근을 허용하지 않아 수행하지 못했으며 다른 수단으로 우회하지 않았다. 실제 대상 UI·계정·권한 확인으로 표시하지 않는다. ChatGPT Work의 파일 접근까지 부정하는 “Codex만 Repository를 볼 수 있다”는 배타적 일반화는 하지 않는다.

S09의 사람/Agent 역할 그림은 AI 생성 교육용 아이콘이다. [출처·프롬프트](../../assets/slide-illustrations/CODEX_ENTRY_SOURCES.md)에 방법과 근거를 기록했다. 실제 제품 아이콘이나 Agent의 판단 불능을 뜻하지 않는다.

## Official Outputs

| File | Slides | SHA-256 |
|---|---:|---|
| AI_Dev_Training_Full | 81 | `c48051596d20e4cf157f9ea8c71e11be2f38aa71b8b00babcbb0f400a9fe73db` |
| ACT_0 | 10 | `ead83102a0d3a41d6576109ee542b4285b3780b44eeb69e5d93da09d2a369d7f` |
| ACT_1 | 12 | `ca67923ff50cec4b67a68a4041facaf186c2ba4f3e2234211dcb2c8c540ed418` |
| ACT_2 | 15 | `1d7954ae8722e1686edb8cf9d2148379ae96ffa1f550bf1b9d304d274d5a5611` |
| ACT_3 | 18 | `a4f27ba5fab3c197ad74f93df50aada91985a698c4073bf3bd8bfb78d58397d1` |
| ACT_4 | 18 | `20061d742d8335d00eb4d753169decbd9f6f5f9c54efadeb89f50eb056574b37` |
| ACT_5 | 8 | `ae2e5357cb75797edf2df170eff627f45843a35e5cdb273c173d5f6bd8317913` |

Native text / shapes / diagrams remain editable. S46 keeps the native data chart; its recorded data is unchanged. S09 uses a small generated icon asset alongside editable labels. Finalized PPTX를 다시 import한 실제 PNG를 공식 Preview로 사용했다.

- Full PNG: `production/preview/full/S01.png`–`S81.png` (81).
- ACT PNG: `production/preview/act0/`–`act5/` (10/12/15/18/18/8, total 81).
- Montage: Full + ACT 0–5 (7).
- PNG: 1920×1080. Full montage: 1920×5670.
- 통합 Notes SHA-256: `194119000f930cb96fe7733c8001c87fdbc53c03d66a6d1c533e18f624e704fb`.
- Full montage SHA-256: `a58444b85e829036ea5d88ad092d542fae76896285bcbc1d3ecd7370c44f1b2e`.

## Validation

| Check | Result / Scope |
|---|---|
| Unique Slide IDs | S01–S81, 81개 순차·고유 ID |
| ACT counts | 10 / 12 / 15 / 18 / 18 / 8 |
| ACT minutes | 40 / 55 / 70 / 85 / 80 / 30 = 360 |
| Mode minutes | Lecture130 / Demo73 / Case83 / Reflection20 / Transition22 / Q&A32 = 360 |
| Per-slide modes | 각 Mode 합계가 Estimated Time과 일치 |
| Map protected identity | 기존 80개 ACT·Section·Title·Beat·Evidence Type 보존; S07 외 시간·Mode 유지 |
| Templates | 81행; 기존 11개 family / 27개 variant; 신규 S08은 T03-C |
| Notes | 81개 × 19필드; ACT와 Full Markdown 동일; 7개 PPTX 내장 Notes와 일치 |
| Preview identity | Full/ACT 대응 PNG 81쌍 SHA-256 일치 |
| Package / geometry / fonts / import | 7개 모두 package·geometry finding 0, 지정 글꼴 정책 및 first-party reimport 통과 |
| Existing slide preservation | 종전 S08(새 S09)을 제외한 79장 XML을 번호·관계/생성ID 정규화 후 비교: 차이 없음 |
| Native chart | 종전 S45→S46, 정규화 chart XML 데이터 동일 |
| Asset paths | 과거 이미지 파일명·캡처 시점 번호 보존; 현재 소유권을 명시적으로 연결 |
| Fallback | 29개 실제 정적 PNG 경로·1920×1080·hash 확인, 로컬 정적 파일에 한해 READY |
| Local glyph / visual | 전체 ACT contact sheet 검토; 신규 S08/S09와 경계·고위험 장 확대 검토 |
| New clipping / overlap | 발견 없음 — 로컬 렌더 검토 범위 |

렌더 단계에서 신규 S08에 Source/Claim ID가 최종 추가되어 Full/ACT 0을 다시 생성했다. 이후 Full 81장 PNG가 첫 렌더와 전부 byte-identical임을 확인했고, 최종 파일의 내장 Notes를 다시 대조했다. 이전 렌더 결과를 근거 없이 승계하지 않았다.

글꼴은 PPTX에 Malgun Gothic / Consolas로 지정한다. 로컬 미리보기는 Apple SD Gothic Neo / Menlo 별칭으로 렌더했으며 지정 글꼴의 실제 Windows 렌더 검증은 아니다. 구조 검사와 시각 검토를 구분한다.

## Visual Review

| Range | Review |
|---|---|
| ACT 0 S01–10 | Opening→Context→Repository 전환→Codex 진입→사람의 목표/책임→다음 Task 질문이 이어진다. 신규 S08/S09는 큰 제목·메뉴·역할 그림이 읽히며 잘림·겹침 없음. |
| ACT 1 S11–22 | 번호·기존 Prompt 흐름 유지. S22→23의 반복 Project 정보 질문 연결 유지. |
| ACT 2 S23–37 | Context 정보 배치와 실제 접근 관찰 경계 유지. S37→38 반복 절차 질문 연결 유지. |
| ACT 3 S38–55 | 반복 절차→Skill→Harness 성공과 한계 유지. S46 chart와 S55 전환 정상. |
| ACT 4 S56–73 | Observed Product→Conceptual→Teaching Model→Observed Meta 경계 유지. 마지막 C++ 환경 전이 도식·질문 잘림 없음. |
| ACT 5 S74–81 | 전체 Story 회수·State rail·성찰·마무리 유지. source excerpt의 역사 파일명과 현재 소유권 구분. |

## Document Coverage and History

[번호 대조표](../../plan/SLIDE_ID_MIGRATION.md)에 기존 80개 대응과 plan 31개 검토 범위를 기록했다. 현재 Slide Map·Template Map·Visual Spec·Freeze·Notes 구조·Production Plan·Claim Freeze·Transitions·Demo Matrix를 정렬했다. ACT/Full Notes, 15개 Runbook 안내/Manifest, 예상 Q&A, 전달/체크리스트, M 연결표, 제작 Source와 Asset Manifest도 현재 번호로 맞췄다.

이전 Decision 본문·Prototype·Trial 기록·검증 JSON·실제 이미지 파일명·ZIP은 역사 이력이다. 과거 평가 Markdown 22개와 plan 역사 문서에는 판본 안내를 붙이고 본문·원래 번호·hash·결과를 보존했다. `research_notes/`의 `[S10]` 등 문헌 Source ID는 Slide ID가 아니므로 이동하지 않았다.

S01–S07은 기존 번호다. 신규 S08의 하단 M1 표시는 관련 원칙 연결이며 원 모듈 전체 충족을 뜻하지 않는다. 기존 M 연결표도 81행으로 정렬했다.

## Remaining Gates

- P0 / P1: 이번 삽입으로 새로 발견한 로컬 결함 없음.
- Windows PowerPoint·실제 발표 PC 글꼴·교육장 투사: UNVERIFIED.
- S08 실제 앱 메뉴 위치·대상 교육 계정·Repository 접근 권한: UNVERIFIED.
- 현재 Live/Hybrid 동작·발표기기 정적 파일 복귀·전체360분/S73 실측 리허설: UNVERIFIED.
- 기존 80장 ZIP은 역사 자료이며 현재 81장 배포본으로 사용하지 않는다.

## Next Readiness

**READY FOR USER SLIDE REVIEW** — 신규 S08과 S09 및 81장 전체 흐름을 검토할 수 있다. 실제 발표·배포 승인은 남은 환경·운영 Gate를 따른다.

Machine-readable results: [CODEX_ENTRY_INSERTION_VALIDATION.json](CODEX_ENTRY_INSERTION_VALIDATION.json).
