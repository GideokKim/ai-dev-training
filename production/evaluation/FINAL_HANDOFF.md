# 최종 전달 안내 — AI 개발자 교육

갱신일: 2026-10-19 (Asia/Seoul). 자료 구성: DEC-0031.
발표자료 기준: `a252c49` / DEC-0030. 이후 문서·묶음 구성은 발표자료 변경과 구분한다.

**로컬 발표자료 제작·검토 완료 / 발표자용 묶음 준비 / 실환경·리허설 UNVERIFIED.**

이 문서는 현재 후보와 남은 사용자 확인 항목의 시작점이다. 패키징 완료를
현장 발표 승인, Live 시연 검증 또는 청중에게 전달 완료로 해석하지 않는다.

## 1. 무엇을 열면 되는가

1. 저장소의 `delivery/AI_Dev_Training_Presenter_2026-10-19.zip`을 내려받아
   **전체 압축을 푼다**. ZIP 안에서 PPT만 바로 실행하지 않는다.
2. 압축 해제한 폴더의 `START_HERE.html`을 브라우저에서 연다. 서버·인터넷·
   별도 프로그램 설치 없이 자료 탐색 페이지를 사용할 수 있다.
3. 전체 교육에는 [통합 PPT](../AI_Dev_Training_Full.pptx)를 사용한다.
   ACT 파일은 구간 연습·별도 열람용이며 통합본과 순서·화면·Notes가 대응한다.
4. [발표자 Notes](../notes/FULL_SPEAKER_NOTES.md),
   [예상 질문·답변](../presenter/EXPECTED_QA.md),
   [사용자 확인 체크리스트](USER_VALIDATION_CHECKLIST.md)를 함께 확인한다.
   묶음에는 각 Markdown의 읽기용 HTML도 들어 있다.

현재 묶음은 **강사용 준비 자료**다. 청중 배포 대상·경로·범위는 미확정이며,
이번 작업에서 이메일·클라우드 업로드 등 외부 전달은 수행하지 않았다.

## 2. 정확한 현재 후보

| 항목 | 경로 / SHA-256 |
|---|---|
| 통합 PPT | `production/AI_Dev_Training_Full.pptx` |
| PPT SHA-256 | `ef6c5b69a03bf7c243b144f5f7dded018d72dc84cbb657bff044e812557a17d6` |
| 통합 Notes | `production/notes/FULL_SPEAKER_NOTES.md` |
| Notes SHA-256 | `c1167e05e9fcd3153ddf59df96c294f185491ae623bdfd43c628ad5b438eabe1` |
| 전체 montage SHA-256 | `29dbc39cd08765e631753d292c7479c032fd725466b12972f10e44b8a3428e54` |
| 묶음별 파일 목록·크기·SHA-256 | 저장소의 `delivery/PACKAGE_MANIFEST.json`; ZIP 내부의 `PACKAGE_MANIFEST.json` |
| ZIP 자체 SHA-256 | 저장소의 `delivery/AI_Dev_Training_Presenter_2026-10-19.zip.sha256` |

Manifest에는 개별 payload 파일의 hash를 기록한다. Manifest 자신과 ZIP의 hash는
자기참조를 피하기 위해 payload에 포함하지 않는다. ZIP의 hash는 외부 sidecar에서
확인한다. 문서의 기준 해시와 실제 발표 파일이 다르면 점검 결과를 승계하지 않는다.

## 3. 포함 자료와 보존 범위

- 통합 80장 PPT와 ACT 0–5 PPT 6개. Native text/shape/diagram 및 S45 chart 편집 가능.
- 통합 Notes와 ACT Notes 6개. 80개 레코드, 각 19개 필드, PPT 내부 Notes와 일치.
- 통합 PNG 80개와 ACT PNG 80개, 전체/ACT montage. 기존 Notes의 두 경로를 모두 보존.
- DEMO-01–12 진행 지침(DEMO-04A/04B 분리), LOOP-VISUAL, fallback manifest.
- 최신 체크리스트·이 전달 안내·25개 예상 질문과 답변.
- 근거 범위 확인에 필요한 기획·연구 문서와 그 내부 링크 대상. 과거 날짜의
  Source/Trial 문서는 역사적 근거이며 현재 제품 동작·회사 허용 정책을 보증하지 않는다.
- 브라우저 시작 화면, 문서 HTML, Slide별 미리보기와 Notes 바로가기.

교육은 80장 / 순수 360분이다. ACT 시간은 40/55/70/85/80/30분,
Mode는 Lecture 130 / Demo 73 / Case 83 / Reflection 20 / Transition 22 /
Q&A 32분이다. 예상 Q&A는 기존 질문 시간에 사용할 예비 답변이며 시간을 추가하지 않는다.
휴식·점심·장비 준비는 순수 교육 시간에 포함하지 않는다.

이번 준비에서 PPT·기존 Notes·Slide Map·Claim Freeze·Demo 코드와 State/tag는
변경하지 않았다. Demo 저장소 자체, `.git`, 제작 코드, 설정·인증 파일, 원본 실행 로그,
과거 prototype PPT와 캐시는 묶음에 넣지 않는다. 일부 역사적 근거에 기록된 로컬 경로는
과거 실행 메타데이터이며 발표 기기에서 실행할 경로가 아니다.

## 4. Demo 기본 경로

기본은 **기존 기록을 설명하는 정적 PPT/PNG**다. 원본 터미널 캡처나 실행 영상이 아니다.
[데모 안내](../../demos/runbooks/README.md)에서 시작하고, 문제가 생기면
[FALLBACK_MANIFEST](../../demos/runbooks/FALLBACK_MANIFEST.md)의 정적 화면으로 돌아간다.
묶음 시작 화면에는 Demo별 화면과 지침 링크가 있다.

- 과거 Trial은 Codex CLI 0.154.0에서 관찰된 범위로 설명한다. 현재 Desktop·교육 계정의
  기능이나 동일한 재현 결과로 확대하지 않는다.
- S55는 관찰된 제품 결과, S56–65는 가상 사례, S66은 교육 모델, S67–71은 실제 제작 Meta 기록이다.
- S64의 EVAL-01/02는 과거 관찰 참고이며, EVAL-03/04는 설계 사례다. 네 작업 모두
  Workflow 변경 뒤 새 평가 결과가 없고 PASS/FAIL을 만들지 않는다.
- S45/S68의 수치는 기록된 코드·입력·환경 범위다. Harness/Skill/Prompt의 단독 효과가 아니다.
- Live/Hybrid는 현재 비활성이다. 추가할 때 대상 계정·제품·권한·실행 경로·복귀 절차와
  시간 제한을 따로 확인한다. 정적 설명만 할 때 Live 검증 완료를 요구하거나 주장하지 않는다.

## 5. 확인된 범위와 남은 사용자 확인

| 항목 | 현재 상태 | 필요한 다음 근거 |
|---|---|---|
| DEC-0030 PPTX 구조·로컬 렌더·80장 개별 검토 | COMPLETE, 로컬 범위 | 기존 검토 기록 보존 |
| 이번 파일 복사·ZIP 무결성·내부 링크·hash 정합성 | LOCAL PACKAGE CHECK | 패키지 생성·확인 기록 참조 |
| 발표 PC / Windows PowerPoint / 글꼴 / 발표자 모드 | UNVERIFIED | 대상 장비에서 열기·저장·재열기·발표 모드 확인 |
| 발표 기기에서 오프라인 열기·fallback 복귀 | UNVERIFIED | 실제 기기에서 파일 열기와 다음 화면 전환 |
| 교육장·프로젝터·뒤쪽 좌석 가독성 | UNVERIFIED | 실제 화면·거리에서 점검 |
| 현재 제품·계정·Live/Hybrid 경로 | UNVERIFIED, 사용할 때 확인 | 선택한 환경과 동작·권한·복귀 기록 |
| 전체 360분 및 S54/S72 운영 | UNVERIFIED | 강사 직접 시간 측정 리허설 |
| 최종 배포 대상·경로·공개 범위·승인 | UNVERIFIED | 사용자 결정 및 명시 승인 |

S54: Reflection 3 → Q&A 5 → Transition 2분.
S72: Case 7 → Reflection 2 → Q&A 7 → Transition 4분.
청중 질문이 없는 상황의 대체 질문과 cutoff도 실제로 연습한다.

실환경·리허설 확인은 [체크리스트](USER_VALIDATION_CHECKLIST.md)에 장비·버전·날짜·
문제 Slide·근거 경로와 함께 기록한다. 새 파일로 바뀌면 영향받는 확인을 다시 수행한다.

## 6. 근거와 이력

- [현재 전체 검토](FULL_DECK_PRESENTATION_POLISH.md)와 [검증 기록](FULL_DECK_PRESENTATION_POLISH_VALIDATION.json)
- [패키징 결과](PRESENTER_PACKAGE_RESULT.md)
- [Slide Map](../../plan/SLIDE_MAP.md), [Claim Freeze](../../plan/CLAIM_FREEZE.md),
  [결정 이력](../../plan/DECISIONS.md)
- 이 문서의 이전 DEC-0027/그 이전 전달 기록은 Git `a252c49`의 같은 경로에 보존된다.
  그 기록의 이전 해시·렌더러·S73/S77 수정 설명은 현재 후보를 설명하지 않는다.

패키징 기준은 DEC-0031이며 기존 `origin/main`에 기록한다. 저장소 push는
현장 검증 통과나 청중 대상 전달 완료를 뜻하지 않는다.
