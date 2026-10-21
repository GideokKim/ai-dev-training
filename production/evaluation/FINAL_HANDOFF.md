# 최종 전달 안내 — AI 개발자 교육

갱신일: 2026-10-21 (Asia/Seoul). 최신 발표자료 기준: DEC-0039.
S17의 실제 Prompt 지시와 세로 관찰 순서를 01–05로 대응시키고, S18은 조사·계획에서 최소 수정으로 이어지도록 정렬했다. 두 장의 시간·근거 범위와 다른 80장의 화면·Notes를 유지했다.
S11/S12를 Prompt 입력창·동일 Agent의 가능한 선택·개념 비용 표시로 정렬하고, 새 S13에 미정 정보를 채운 목표 경로 예시를 추가한다. 기존 S13–81은 S14–82로 이동한다. S12 Case4를 2+2분으로 나눠 전체 360분과 ACT·Mode·Section 합계를 유지한다.
S01–10은 내용·번호·시간을 보존한다. 과거 Codex 진입·S10 검사 Task 수정은 당시 보고서로 연결한다.
사용자 지시로 묶음 생성은 중단 중이며 기존 ZIP은 DEC-0033의 이전 자료다.

**82장 PPT·전체 렌더·내장 Notes 로컬 정합성 확인 / 묶음 중단 / 실환경·리허설 UNVERIFIED.**

이 문서는 현재 후보와 남은 사용자 확인 항목의 시작점이다. 패키징 완료를
현장 발표 승인, Live 시연 검증 또는 청중에게 전달 완료로 해석하지 않는다.

## 1. 무엇을 열면 되는가

1. 최신 내용은 저장소의 [통합 PPT](../AI_Dev_Training_Full.pptx)를 연다.
2. 장별 화면은 `production/preview/full/`의 PNG와 montage에서 확인한다.
3. 전체 교육에는 [통합 PPT](../AI_Dev_Training_Full.pptx)를 사용한다.
   ACT 파일은 구간 연습·별도 열람용이며 통합본과 순서·화면·Notes가 대응한다.
4. [발표자 Notes](../notes/FULL_SPEAKER_NOTES.md),
   [예상 질문·답변](../presenter/EXPECTED_QA.md),
   [사용자 확인 체크리스트](USER_VALIDATION_CHECKLIST.md)를 함께 확인한다.
   기존 ZIP은 80장판이며 S01–S06 후속 수정, 신규 S08과 이번 S11–13 수정·82장 번호가 들어 있지 않다.

기존 묶음은 DEC-0033 시점의 **강사용 준비 자료**다. 청중 배포 대상·경로·범위는 미확정이며,
이번 작업에서 이메일·클라우드 업로드 등 외부 전달은 수행하지 않았다.

## 2. 정확한 현재 후보

아래 hash는 DEC-0039의 실제 82장 파일에서 다시 계산했다. 최신 PPT 구조·전체 렌더·82개 내장 Notes 대조는 `PROMPT_FLOW_REVISION.md`에 기록한다. DEC-0038의 삽입·시간선 검토는 당시 기록으로 유지한다. 실환경 검증은 포함하지 않는다.

| 항목 | 경로 / SHA-256 |
|---|---|
| 통합 PPT | `production/AI_Dev_Training_Full.pptx` |
| PPT SHA-256 | `8b27e8e00015997e0358ba594ee13b149253264e2b34d8360be00cd4f0479230` |
| 통합 Notes | `production/notes/FULL_SPEAKER_NOTES.md` |
| Notes SHA-256 | `280ea7dc1e60e8240119d518db0b54942fca03b616332f7ebc6b3ba1b8431f1e` |
| 전체 montage SHA-256 | `3b05c9796651bbd2edb3ec8a9804fd1b1c20cb71787625066987246ca75f41f8` |
| 묶음별 파일 목록·크기·SHA-256 | 저장소의 `delivery/PACKAGE_MANIFEST.json`; ZIP 내부의 `PACKAGE_MANIFEST.json` |
| ZIP 자체 SHA-256 | 저장소의 `delivery/AI_Dev_Training_Presenter_2026-10-21.zip.sha256` |

이전 DEC-0033 묶음은 payload 362개·ZIP entry 363개이며 당시 CRC·추출 hash·내부 링크·
Notes 정합성 검증을 통과했다. ZIP 크기·hash는 외부 validation/sidecar에서 확인한다.
생성 전 기존 package manifest/validation은 이전 묶음의 결과이며 이번 후보에 승계하지 않는다.
Manifest에는 개별 payload 파일의 hash를 기록한다. Manifest 자신과 ZIP의 hash는
자기참조를 피하기 위해 payload에 포함하지 않는다. ZIP의 hash는 외부 sidecar에서
확인한다. 문서의 기준 해시와 실제 발표 파일이 다르면 점검 결과를 승계하지 않는다.

## 3. 포함 자료와 보존 범위

- 통합 82장 PPT와 ACT 0–5 PPT 6개. Native text/shape/diagram 및 S47 chart 편집 가능.
- 통합 Notes와 ACT Notes 6개. 82개 레코드, 각 19개 필드. PPT 내부 Notes 82개를 ACT/Full Markdown 레코드와 대조해 일치 확인했다.
- 통합 PNG 82개와 ACT PNG 82개, 전체/ACT montage. 기존 Notes의 두 경로를 모두 보존.
- DEMO-01–12 진행 지침(DEMO-04A/04B 분리), LOOP-VISUAL, fallback manifest.
- 최신 체크리스트·이 전달 안내·25개 예상 질문과 답변.
- 근거 범위 확인에 필요한 기획·연구 문서와 그 내부 링크 대상. 과거 날짜의
  Source/Trial 문서는 역사적 근거이며 현재 제품 동작·회사 허용 정책을 보증하지 않는다.
- 기존 ZIP의 브라우저 시작 화면·문서 HTML·바로가기는 이전 80장판 보관물이다. 이번에는 갱신하지 않는다.

교육은 82장 / 순수 360분이다. ACT 시간은 40/55/70/85/80/30분,
Mode는 Lecture 130 / Demo 73 / Case 83 / Reflection 20 / Transition 22 /
Q&A 32분이다. 예상 Q&A는 기존 질문 시간에 사용할 예비 답변이며 시간을 추가하지 않는다.
휴식·점심·장비 준비는 순수 교육 시간에 포함하지 않는다.

> Historical version note: 다음 문단은 당시 번호·장수의 기록이다. 현재 대응은 `plan/SLIDE_ID_MIGRATION_82.md`를 따른다.

DEC-0036의 현재 기준은 신규 S08을 포함한 81장이다. ACT 범위는 S01–10 / S11–22 / S23–37 / S38–55 / S56–73 / S74–81이며 장수는 10/12/15/18/18/8이다. S08 UI는 공식 자료 기반 재구성으로 실제 Screenshot이 아니며 대상 계정·Windows 동작은 UNVERIFIED다. 새 제작 검토: `production/evaluation/CODEX_ENTRY_INSERTION.md`.

> Historical version note: 다음 문단은 당시 번호·장수의 기록이다. 현재 대응은 `plan/SLIDE_ID_MIGRATION_82.md`를 따른다.

다음 DEC-0033–0035 설명은 **당시 80장판·당시 Slide ID**의 역사적 기록이다. 현재 번호는 `plan/SLIDE_ID_MIGRATION.md`를 참조한다.

DEC-0035에서는 S05의 명세 폭 2/포함 폭 3 비교와 S06의 코드 Context/실행 환경 구분을 보강했다. 나머지 78장 화면·Notes와 80장·360분을 유지했다. 실제 관찰과 Chatbot 입력 범위의 교육용 가정을 구분하며 새 Trial·묶음은 만들지 않았다. 현재 검토 기록은 `production/evaluation/ACT_0_CONTEXT_SCOPE_REVISION.md`다.

DEC-0034에서는 S01 사례 그림, S02 혼동하기 쉬운 C++ 초기화 비교,
S03 병렬 Context 도식과 명세서 표현, S04 실제 요청 재구성·가상 GoogleTest
그림을 반영했다. 나머지 76장 화면과 Notes는 보존했고 묶음은 갱신하지 않았다.
현재 검토 기록은 `production/evaluation/ACT_0_OPENING_REVISION.md`다.

DEC-0033에서는 S07 승인된 도구·계정·자료·접근 범위 확인, S14 구체 완료 조건,
S18 검토용 결과 인계, S19 계약 위반을 구별하는 검사를 기존 설명 시간 안에 보강했다.
본문·Notes 네 장과 80장 M 연계 표시를 반영했으며 M 표시는 원 모듈 전체 충족이 아니다.
80장·360분·장별 Mode·Claim 경계·Demo 코드/State/tag는 유지하고 S31/S44/S79의
2순위 보강은 보류했다. 실제 시간 적합성은 리허설 전까지 UNVERIFIED다.

이전 DEC-0032의 화면 14장·Notes 41개·Slide Map Transition 24개 정렬은 보존된 이력이다.
묶음 생성 단계는
검토된 PPT·Notes를 추가로 변경하지 않는다. Demo 저장소 자체, `.git`, 제작 코드, 설정·인증 파일, 원본 실행 로그,
과거 prototype PPT와 캐시는 묶음에 넣지 않는다. 일부 역사적 근거에 기록된 로컬 경로는
과거 실행 메타데이터이며 발표 기기에서 실행할 경로가 아니다.

현재 82장 ACT 범위: S01–10 / S11–23 / S24–38 / S39–56 / S57–74 / S75–82; 장수10/13/15/18/18/8. S11 비용과 S12–13 시간선은 교육용 개념이며 실제 실행·배율·결정성/성공 보장이 아니다.

## 4. Demo 기본 경로

기본은 **기존 기록을 설명하는 정적 PPT/PNG**다. 원본 터미널 캡처나 실행 영상이 아니다.
[데모 안내](../../demos/runbooks/README.md)에서 시작하고, 문제가 생기면
[FALLBACK_MANIFEST](../../demos/runbooks/FALLBACK_MANIFEST.md)의 정적 화면으로 돌아간다.
기존 묶음 시작 화면의 Demo 링크는 당시 80장판이다. 현재 경로는 저장소 runbook을 따른다.

- 과거 Trial은 Codex CLI 0.154.0에서 관찰된 범위로 설명한다. 현재 Desktop·교육 계정의
  기능이나 동일한 재현 결과로 확대하지 않는다.
- S57는 관찰된 제품 결과, S58–67는 가상 사례, S68은 교육 모델, S69–73은 실제 제작 Meta 기록이다.
- S66의 EVAL-01/02는 과거 관찰 참고이며, EVAL-03/04는 설계 사례다. 네 작업 모두
  Workflow 변경 뒤 새 평가 결과가 없고 PASS/FAIL을 만들지 않는다.
- S47/S70의 수치는 기록된 코드·입력·환경 범위다. Harness/Skill/Prompt의 단독 효과가 아니다.
- Live/Hybrid는 현재 비활성이다. 추가할 때 대상 계정·제품·권한·실행 경로·복귀 절차와
  시간 제한을 따로 확인한다. 정적 설명만 할 때 Live 검증 완료를 요구하거나 주장하지 않는다.

## 5. 확인된 범위와 남은 사용자 확인

| 항목 | 현재 상태 | 필요한 다음 근거 |
|---|---|---|
| DEC-0039 82장 구조·렌더·Notes/PNG 정합성 | COMPLETE, 로컬 범위 | PROMPT_FLOW_REVISION.md 및 현재 산출물 hash |
| DEC-0037 S10 도식·81장 구조·렌더 | COMPLETE, 당시 로컬 범위 | S10_INSPECTION_PIPELINE_REVISION.md의 역사적 판본 |
| DEC-0036 신규 81장 번호 이행 | COMPLETE, 당시 로컬 범위 | CODEX_ENTRY_INSERTION.md의 역사적 판본 |
| DEC-0033 PPTX 구조·로컬 렌더·80장 개별 검토 | COMPLETE, 로컬 범위 | LEGACY_PRIORITY_REVISION 검토·검증 기록 |
| 이전 DEC-0033 ZIP 복사·무결성·내부 링크·hash 정합성 | LOCAL PACKAGE CHECK 완료 | payload 362개·entry 363개; 현재 manifest/validation 참조 |
| 발표 PC / Windows PowerPoint / 글꼴 / 발표자 모드 | UNVERIFIED | 대상 장비에서 열기·저장·재열기·발표 모드 확인 |
| 발표 기기에서 오프라인 열기·fallback 복귀 | UNVERIFIED | 실제 기기에서 파일 열기와 다음 화면 전환 |
| 교육장·프로젝터·뒤쪽 좌석 가독성 | UNVERIFIED | 실제 화면·거리에서 점검 |
| 현재 제품·계정·Live/Hybrid 경로 | UNVERIFIED, 사용할 때 확인 | 선택한 환경과 동작·권한·복귀 기록 |
| 전체 360분 및 S56/S74 운영 | UNVERIFIED | 강사 직접 시간 측정 리허설 |
| 최종 배포 대상·경로·공개 범위·승인 | UNVERIFIED | 사용자 결정 및 명시 승인 |

S56: Reflection 3 → Q&A 5 → Transition 2분.
S74: Case 7 → Reflection 2 → Q&A 7 → Transition 4분.
청중 질문이 없는 상황의 대체 질문과 cutoff도 실제로 연습한다.

실환경·리허설 확인은 [체크리스트](USER_VALIDATION_CHECKLIST.md)에 장비·버전·날짜·
문제 Slide·근거 경로와 함께 기록한다. 새 파일로 바뀌면 영향받는 확인을 다시 수행한다.

## 6. 근거와 이력

- [현재 Prompt 지시·관찰 순서 수정 검토](PROMPT_FLOW_REVISION.md)
- [이전 Prompt/시간선 수정·82장 검토](PROMPT_TIMELINE_REVISION.md)
- [이전 S10 검사 파이프라인 수정](S10_INSPECTION_PIPELINE_REVISION.md)
- [이전 81장 삽입·전체 검토](CODEX_ENTRY_INSERTION.md)
- [이전 80장 보강·전체 검토](LEGACY_PRIORITY_REVISION.md)와 [검증 기록](LEGACY_PRIORITY_REVISION_VALIDATION.json)
- [82장 M 연결·판정](LEGACY_MODULE_MAP.md)
- [이전 DEC-0032 연결 흐름 검토](FULL_DECK_CONTINUITY_REVISION.md)와 [당시 검증 기록](FULL_DECK_CONTINUITY_REVISION_VALIDATION.json)
- [패키징 결과](PRESENTER_PACKAGE_RESULT.md)
- [Slide Map](../../plan/SLIDE_MAP.md), [Claim Freeze](../../plan/CLAIM_FREEZE.md),
  [결정 이력](../../plan/DECISIONS.md)
- 이 문서의 이전 DEC-0027/그 이전 전달 기록은 Git `a252c49`의 같은 경로에 보존된다.
  그 기록의 이전 해시·렌더러·S74/S78 수정 설명은 현재 후보를 설명하지 않는다.

이전 2026-10-20 및 2026-10-19 ZIP은 역사적 묶음으로 보존한다.
현재 자료 기준은 DEC-0039, 기존 패키징 정책은 DEC-0031이며 묶음 생성은 보류한다. 기존 `origin/main`의 저장소 push는
현장 검증 통과나 청중 대상 전달 완료를 뜻하지 않는다.
