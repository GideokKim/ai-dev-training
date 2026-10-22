# S52 목표·기준·수행 방법의 한 작업 적용 — DEC-0064

Date:2026-10-22. Baseline:`2fd3c7a`. Structure:93slides/379minutes.

## Status

PASS — 요청한 도식·Notes 정렬과 최종 파일의 로컬 렌더 검토 완료.
Windows PowerPoint, 실제 글꼴·교육장·제품 계정·시간 리허설은 UNVERIFIED다.

## 수정 이유와 화면

기존 세 패널과 더하기 표시는 역할 이름을 나열했지만 한 작업에서 함께
작동하는 관계가 암묵적이었다. 새 도식은 같은 normalize 작업에 연결한다.

- **이번 목표:** ‘normalize 성능을 조사해줘’가 작업 영역으로 들어온다.
- **프로젝트 기준:** 기존 이미지 동작·공개 명세 보존의 테두리가 작업을 감싼다.
- **한 작업:** 기준 안에서 normalize 구현을 조사하고 변경 여부를 판단한다.
- **재사용할 수행 방법:** 측정·조사·검증·비교 방법에서 같은 작업으로 연결한다.
- 하단의 다음 작업 재사용 질문은 S53의 유지 위치 선택으로 이어진다.

첫 렌더에서 제목이 오른쪽 여백에 가까워 ‘수행 방법’을 제목에서는 ‘방법’으로
줄였다. 본문 ‘재사용할 수행 방법’은 유지하고 폰트 크기를 줄이지 않았다.
최종 제목은 **목표·기준·방법을 한 작업에 적용한다**다.

## S51 → S52 → S53

| Slide | 역할 | 이번 처리 |
|---|---|---|
| S51 | 같은 명령의 사용 시점과 판단 질문 | 화면·Notes 유지. 변경 전/후 설명을 S52에서 반복하지 않음 |
| S52 | 이번 목표·지킬 기준·재사용 방법의 결합 | 한 작업 영역의 도식과19필드 Notes 수정 |
| S53 | 반복 방법의 공유 위치/Skill 후보 선택 | 화면·Notes 유지. S52의 마지막 재사용 질문을 회수 |

S52는 실행 순서를 다시 나열하거나 Skill 위치를 먼저 답하지 않는다.
목표가 달라져도 기준과 필요한 방법을 함께 적용한다는 관계가 고유 역할이다.

## Evidence / Claim

기존 BEAT-019와 TRIAL-006/007 목표·보존 조건·반복 요청에 연결한
**TEACHING_MODEL / CONCEPTUAL**이다. 실제 요청을 그대로 실행한 새 Trial이나
제품 공식 분류가 아니다. 테두리는 보존 의무를 설명하며 기술적 강제 장치나
준수 보장의 증거가 아니다. 성능 목표가 공개 명세 변경을 자동 허용하지 않는다.
세 책임은 같은 문서에 담을 수도 있다. 새 측정·PASS/FAIL·실행 로그·Skill
우월성·토큰 절감·Harness 단독 인과성·현재 Desktop 재현 주장은 추가하지 않았다.

## Notes / Time

S52의 ACT3/Full Markdown과 양쪽 PPT 내부 Notes를 정렬했다. S51/S53과 다른92개
Notes는 그대로다. S52는 기존 Lecture5분,19필드를 유지한다.

- 0:00–1:00: S51을 한 문장으로 회수하고 이번 목표를 짚는다.
- 1:00–2:30: 보존 기준과 그 안의 normalize 작업을 연결한다.
- 2:30–4:00: 오른쪽 수행 방법이 같은 작업에 적용됨을 설명한다.
- 4:00–5:00: 다음 작업 재사용 질문으로 S53에 연결한다.

실제5분 운영 적합성은 리허설 전 UNVERIFIED다. 근거가 부족하면 변경하지 않는
판단과 Task에 맞는 방법 선택을 Notes에 유지했다.

## Render / Validation

최종 Full93장과 ACT3 18장, 총111개 PNG를 렌더링했다. S51/S52/S53을 개별
원본 크기로 검토하고 연속 보기와 전체 흐름을 확인했다. S52의 제목·목표·
기준 테두리·내부 작업·방법 연결·하단 경계에서 잘림이나 의도치 않은 겹침을
발견하지 않았다. 구조/layout 발견0건을 실제 Windows 검증으로 취급하지 않는다.

| 항목 | 확인 결과 |
|---|---|
| Full / ACT3 |93장 /18장|
| 전체 / ACT3 시간 |379분 /85분|
| S52 |Lecture5분; ID·Section·Beat·Evidence Type·Claim Status 유지|
| ACT 시간 |40/63/81/85/80/30분|
| Mode 시간 |Lecture143, Demo73, Case88, Reflection21, Transition22, Q&A32|
| 화면 변경 |S52만; 다른92개 Full PNG는 baseline SHA-256과 동일|
| Notes 변경 |S52만; 다른92개 레코드 동일|
| Notes schema |93개 모두19필드; Full/ACT/내장 Notes 대조|
| Full / ACT3 PNG |18개 대응 페이지 동일|
| 표·차트 |S47/S55 native 표, S58 native chart 및 기존 데이터 유지|
| Template / Variant |11개 /27개; S52 기존 T03-B 유지|
| 편집·폰트 |Native text/shape; Malgun Gothic/Consolas 유지|
| 정적 Demo 대안 |기존32개 PNG 유지; 새 Demo 시간 없음|
| 다른 ACT·이미지·묶음·Demo repository |변경 없음; State tag 유지|

로컬 렌더는 기존 AppleSDGothicNeo/Menlo 별칭을 사용했다. Windows 실제 글꼴·
줄바꿈·교육장 투사·실측 시간 검증은 별도 Gate다.

## Deliverables / Current identities

| Artifact | Path / SHA-256 |
|---|---|
| Full |[통합 PPT](../AI_Dev_Training_Full.pptx)|
| Full SHA-256 |`a561733b99bb210bd39b74506ac55f728661cd820dfd4b9c270d447042aba57e`|
| ACT3 |[ACT3 PPT](../ACT_3.pptx)|
| ACT3 SHA-256 |`79535e10213abeebc8ad2f6f3aca39fc7cfa23354bdda51c9e9fe5c87fc63266`|
| Notes |[ACT3](../notes/ACT_3_NOTES.md) / [Full](../notes/FULL_SPEAKER_NOTES.md)|
| Full Notes SHA-256 |`0ebeac084d6798c69b4d22860c4639cc01157c88f23c21f23f158a42477b013e`|
| S52 |[최종 렌더](../preview/full/S52.png)|
| S51–S53 |[연속 보기](../preview/act3/S51-S53-continuity.png)|
| Full montage SHA-256 |`5f0fe0bd62e74da8dfc19a585306db02f2d8a88d95d253fbcea4ee5b7d9bad2b`|
| 파일·시간 대조 |[Validation](S52_TASK_COMPOSITION_VALIDATION.json)|

Map·Template 행·ACT3 흐름·Claim Freeze·DEC-0064와 M2/M8 설명을 정렬했다.
과거 Decision·평가 이력은 보존하고 현재 전달 문서의 파일 식별자를 갱신했다.

## Remaining issues / Git

P0/P1: 이번 S52 로컬 수정에서 미해결 항목 없음.
실환경·제품 표면·시간 리허설은 기존 별도 Gate로 유지한다.
정상 산출물만 기존 main/origin/main에 commit/push한다. Force push, Demo 변경,
새 Trial과 발표자 묶음 생성은 하지 않는다.
