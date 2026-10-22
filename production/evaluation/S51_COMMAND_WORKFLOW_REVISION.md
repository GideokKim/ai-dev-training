# S51 명령 적용 시점과 판단 기준 수정 — DEC-0063

Date:2026-10-22. Baseline:`5f8dc91`. Current structure:93slides/379minutes.

## Status

PASS — 요청한 화면·Notes 정렬과 로컬 최종 패키지 렌더 검토 완료.
Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 제품·계정, 실제 시간 리허설은
UNVERIFIED다. 새 Trial이나 제품 실험은 수행하지 않았다.

## S51 변경 이유와 화면

‘프로젝트가 안내할 것 / 반복 절차가 정할 것’은 안내 안에도 절차를 담을 수
있어 배타적 분류로 읽힐 수 있었다. 승인된 제안에 따라 하나의 정보 출처에서
그 정보를 사용하는 시점과 판단 질문으로 연결했다.

- 제목: **테스트 명령을 언제 쓰고 무엇을 판단할까?**
- 상단: AGENTS.md에서 확인할 테스트 실행 방법·보존할 동작 명세·측정 방법.
- 변경 전: 같은 테스트를 실행해 원래 상태를 확인하고 측정 기준을 확보.
- 변경 후: 테스트를 다시 실행하고 동일 조건으로 비교해 변경 영향을 확인.
- 완료 판단: 동작 보존·측정 결과·미확인 사항을 함께 보고.
- 동일한 native 테스트 실행 표시를 두 번 사용하고 시점별 질문을 다르게 표시.
- 하단: 실행 시점과 결과 판단 기준도 함께 정한다는 메시지와 교육용 경계.

이 도식은 핵심 시점만 보여준다. 조사·계획·변경 판단을 생략해도 된다는 뜻이
아니며 Notes에서 기존 실패 확인, 원인·범위 조사와 필요 시 변경 보류를 보존한다.
첫 렌더에서 하단 메시지와 Evidence 선의 간격이 좁아 본문 세로 배치를 조정한
뒤 최종 파일을 다시 렌더링했다. 장별 시간이나 내용 역할은 변경하지 않았다.

## S50 → S51 → S52

| Slide | 고유 역할 | 이번 수정 |
|---|---|---|
| S50 | 실제 두 요청에서 같은 방법의 반복 관찰 | 화면 유지. 마지막 발화를 명령의 사용 시점·판단 질문으로 연결 |
| S51 | 반복할 수행 방법의 의미를 구체화 | 상단 정보 출처와 변경 전·후·완료 판단의 시각적 연결 |
| S52 | 현재 목표·프로젝트 기준·수행 방법을 한 Task에 결합 | 화면 유지. 첫 발화에서 S51 방법을 회수하고 같은 절차 재설명을 피함 |

S53의 공유 위치/Skill 선택을 앞당기지 않는다. ‘방법도 AGENTS.md에 기록할 수
있다’를 화면과 Notes에서 유지하며 명령·문서·절차의 배타적 분류를 만들지 않는다.

## Evidence / Claim

BEAT-019 및 TRIAL-006/007 반복 요청을 활용한 **TEACHING_MODEL / CONCEPTUAL**이다.
AGENTS.md 원문·Trial 정확한 실행 순서·실제 결과의 재현이 아니다. 실제 PASS/FAIL,
새 성능 수치나 실행 로그를 만들지 않았다. 테스트 성공만으로 명세 전체 충족을
증명하지 않는다. S50의 Prompt-only attribution PARTIAL과 모든 기존 효과 제한을
유지한다. Skill 우월성·필수성, 토큰 절감, Harness 단독 인과성, 현재 Desktop
재현 주장은 없다. Demo repository와 모든 State tag는 유지한다.

## Notes / Planning

- ACT3와 Full Notes의 S50/S51/S52 및 PPT 내부 Notes를 정렬했다.
- S51은 기존19개 필드와 Lecture4분을 유지한다.
- S51 시간:0:00–0:45 정보 회수,0:45–2:15 전/후,2:15–3:15 완료,
  3:15–4:00 S52 연결. 실제 시간 적합성은 리허설 전 UNVERIFIED.
- Map의 S50 Transition/S51 설명/S52 Speaker Intent와 S51 Template 행,
  ACT3 흐름 문서, Claim Freeze, DEC-0063 및 M2/M8 설명을 정렬했다.
- 기존 Decision·평가 이력과 다른90개 Notes를 유지했다.

## Rendering / Validation

최종 Full93장과 ACT3 18장, 총111개 PNG를 렌더링했다. S50/S51/S52를 개별
원본 크기로 검토하고 연속 보기와 전체 흐름을 확인했다. S51 제목·정보 출처·
연결선·시점별 질문·하단 경계에 잘림이나 의도치 않은 겹침을 발견하지 않았다.
레이아웃/PPTX 구조 검사에서 발견0건이며, 이 결과를 실환경 검증으로 보지 않는다.

| 확인 | 결과 |
|---|---|
| Full / ACT3 |93장 /18장|
| 전체 / ACT3 시간 |379분 /85분|
| S51 시간·Mode |Lecture4분 유지|
| ACT 시간 |40/63/81/85/80/30분|
| Mode 시간 |Lecture143, Demo73, Case88, Reflection21, Transition22, Q&A32|
| 화면 변경 |S51만; 다른92개 Full PNG는 baseline SHA-256과 동일|
| Notes 변경 |S50/S51/S52; 다른90개 레코드 동일|
| Notes schema |93개 모두19필드; Full/ACT/내장 Notes 대조|
| Full / ACT3 PNG |18개 대응 페이지 모두 동일|
| 표·차트 |S47/S55 native 표, S58 native chart 및 기존 데이터 유지|
| Template / Variant |11개 /27개 유지; S51 기존 T03-A|
| 폰트·편집 |Malgun Gothic/Consolas 유지; S51은 native text/shape|
| 다른 ACT·기존 이미지·묶음 |변경 없음; 발표자 묶음 제작 중단 유지|
| 정적 Demo 대안 |기존32개 PNG 유지; 새 Demo 시간 없음|

로컬 렌더에는 AppleSDGothicNeo/Menlo 별칭을 사용한다. 실제 Windows 글꼴·
줄바꿈이나 교육장 투사를 확인한 결과가 아니다.

## Deliverables / Current identities

| Artifact | Path / SHA-256 |
|---|---|
| Full |[통합 PPT](../AI_Dev_Training_Full.pptx)|
| Full SHA-256 |`360dda8e5e299972008149293a268e78de93b94a3acb432ed3f2f71b6f07471d`|
| ACT3 |[ACT3 PPT](../ACT_3.pptx)|
| ACT3 SHA-256 |`d0100455991732e59887c9ccab102ce4a735b85389be62706c5d152275c4d744`|
| Notes |[ACT3](../notes/ACT_3_NOTES.md) / [Full](../notes/FULL_SPEAKER_NOTES.md)|
| Full Notes SHA-256 |`3aef337d7afb52afb64e64fef6dd455d334124eab5990e5c1c4e076572ef10d4`|
| S51 |[최종 렌더](../preview/full/S51.png)|
| S50–S52 |[연속 보기](../preview/act3/S50-S52-continuity.png)|
| Full montage SHA-256 |`eea797d6e3ea35d2b1bbd09e937158e70bbbea42b77a88fe6e186197db0c33f6`|
| 파일·시간 대조 |[Validation](S51_COMMAND_WORKFLOW_VALIDATION.json)|

## Remaining issues / Git

P0/P1: 이번 S51 로컬 수정에서 미해결 항목 없음.
실환경 검증·제품 표면·시간 리허설은 기존 별도 Gate로 유지한다.
정상 산출물만 기존 main/origin/main Git checkpoint에 기록한다. Force push,
새 Remote, Demo repository 변경 또는 발표자 묶음 생성은 하지 않는다.
