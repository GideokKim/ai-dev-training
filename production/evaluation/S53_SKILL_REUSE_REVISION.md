# S53 Skill 재사용과 공동 관리 이유 — DEC-0065

Date:2026-10-22. Baseline:`43722fa`. Structure:93slides/379minutes.

## Status

PASS — 요청한 도식·Notes 정렬과 최종 패키지의 로컬 렌더 검토 완료.
Windows PowerPoint, 실제 글꼴·교육장·제품 계정·시간 리허설은 UNVERIFIED다.

## 수정 이유와 화면

기존 추상 질문 목록에서 두 작업의 요청과 하나의 Skill로 바꿔, Task마다
바뀌는 정보와 공동 관리할 방법을 눈으로 구분하게 했다.

- 제목: **반복 절차를 Skill로 모으는 이유**.
- 왼쪽 A: resize_nearest 성능 조사; B: normalize 성능 조사.
- 각 요청에서 이번 목표·허용 범위·보존 조건을 정한다.
- 오른쪽: graypipe-performance / SKILL.md 한 개에 공통 방법을 요약한다.
- 같은 문서에서 두 요청으로 갈라지는 연결은 필요한 작업에 재사용하려는 설계다.
- 하단: 같은 절차를 매번 다시 쓰지 않고 한 곳에서 관리하려는 이유를 표시한다.

프로젝트 공통 기준은 계속 적용된다. Task별 추가 조건과 공통 절차의 갱신 책임을
구분하며, 파일 이름만으로 Context와 절차를 배타적으로 나누지 않는다.

## S52 → S53 → S54

| Slide | 고유 역할 | 이번 처리 |
|---|---|---|
| S52 | 목표·기준·방법을 한 작업에 함께 적용 | 화면·Notes 유지. 마지막 다음 작업 질문을 회수 |
| S53 | 달라지는 요청과 한 곳의 재사용 방법, 선택 이유 | 두 요청/한 Skill 도식과19필드 Notes 수정 |
| S54 | 실제 CLI의 발견·명시 호출·본문 포함 관찰 | 화면·Notes 유지. 설계 선택 뒤 관찰 근거 확인 |

S51의 전/후 실행 순서와 S52의 관계 설명은 다시 강의하지 않는다. Skill 기능
tutorial이나 성공 결과를 S53에 먼저 보여주지 않는다.

## Evidence / Claim

BEAT-020/021, DEC-0017, TRIAL-006/007의 반복 요청, STATE-04 Skill 문서와
이후 TRIAL-008을 연결한 **TEACHING_MODEL / REQUIRES PRODUCT CHECK**다.
STATE-04 SKILL.md를 읽기 전용 Git 조회로 확인했으며 새 실행은 하지 않았다.

왼쪽은 실제 Prompt 전문이 아닌 교육용 요약이고, 오른쪽 절차도 원문 전체가
아닌 요약이다. 두 요청에 같은 Skill이 실제로 호출됐다는 기록을 만든 것이
아니다. 연결선은 설계 의도이며 자동 호출·지침 준수나 성공의 증명이 아니다.
계획 제시의 조건과 근거가 부족하면 변경하지 않는 판단은 원자료·Notes의 범위로
유지한다. AGENTS.md에도 절차를 둘 수 있고 모든 Task에 같은 Skill이 필수는 아니다.

Skill 우월성·토큰 절감·속도 향상·Harness 단독 인과성·현재 Desktop 가용성은
추가로 주장하지 않는다. 실제 CLI0.154.0 발견/명시 호출/본문 기록은 S54에 둔다.

## Notes / Time

S53의 ACT3/Full Markdown과 두 PPT 내부 Notes를 정렬했다. 다른92개 Notes는
변경하지 않았다. 기존 Lecture4분·19필드와 장별 Mode를 유지했다.

- 0:00–0:45: S52 질문 회수와 두 요청의 교육용 범위.
- 0:45–1:45: Task별 정보와 계속 적용할 프로젝트 기준.
- 1:45–3:00: 공통 Skill 연결과 한 곳에서 관리할 이유.
- 3:00–4:00: 설계 선택/제품 확인 경계와 S54 기록으로 전환.

실제4분 운영 적합성은 리허설 전 UNVERIFIED다.

## Render / Validation

최종 Full93장과 ACT3 18장, 총111개 PNG를 렌더링했다. S52/S53/S54를 개별
원본 크기로 검토하고 연속 보기와 전체 흐름을 확인했다. S53의 두 요청·공통
문서·연결선·하단 이유·Evidence 경계에서 잘림이나 의도치 않은 겹침을 발견하지
않았다. 구조/layout 발견0건은 실제 Windows 검증과 별개다.

| 항목 | 확인 결과 |
|---|---|
| Full / ACT3 |93장 /18장|
| 전체 / ACT3 시간 |379분 /85분|
| S53 |Lecture4분; ID·Section·Beat·Evidence Type·Claim Status 유지|
| ACT 시간 |40/63/81/85/80/30분|
| Mode 시간 |Lecture143, Demo73, Case88, Reflection21, Transition22, Q&A32|
| 화면 변경 |S53만; 다른92개 Full PNG는 baseline SHA-256과 동일|
| Notes 변경 |S53만; 다른92개 레코드 동일|
| Notes schema |93개 모두19필드; Full/ACT/내장 Notes 대조|
| Full / ACT3 PNG |18개 대응 페이지 동일|
| 표·차트 |S47/S55 native 표, S58 native chart 및 기존 데이터 유지|
| Template / Variant |11개 /27개; S53 기존 T05-A 유지|
| 편집·폰트 |Native text/shape; Malgun Gothic/Consolas 유지|
| 정적 Demo 대안 |기존32개 PNG 유지; 새 Demo 시간 없음|
| 다른 ACT·이미지·묶음·Demo repository |변경 없음; State tag 유지|

로컬 렌더는 기존 AppleSDGothicNeo/Menlo 별칭을 사용한다. 실제 Windows 글꼴·
줄바꿈·교육장 투사·실측 시간은 별도 Gate다.

## Deliverables / Current identities

| Artifact | Path / SHA-256 |
|---|---|
| Full |[통합 PPT](../AI_Dev_Training_Full.pptx)|
| Full SHA-256 |`9f2f7bedcafff8a8cf853574498586b7d2d3274280bcac9ed97b426895aec39c`|
| ACT3 |[ACT3 PPT](../ACT_3.pptx)|
| ACT3 SHA-256 |`b2acf82ca6a2acc00d31741230016adbb996574c042f7498dc0f94981f589f7c`|
| Notes |[ACT3](../notes/ACT_3_NOTES.md) / [Full](../notes/FULL_SPEAKER_NOTES.md)|
| Full Notes SHA-256 |`4d8cd082ead3a009d3e2e4e117bc5d635f2ea58dd17d521b0ff3d684bd26b3f6`|
| S53 |[최종 렌더](../preview/full/S53.png)|
| S52–S54 |[연속 보기](../preview/act3/S52-S54-continuity.png)|
| Full montage SHA-256 |`4fad32e7eb0fec4a509f39d03fd3fa9f67c1e060499cb50f1169915813eade22`|
| 파일·시간 대조 |[Validation](S53_SKILL_REUSE_VALIDATION.json)|

Map·Template 행·ACT3 흐름·Claim Freeze·DEC-0065와 기존 모듈 연계 설명을
정렬했다. 과거 Decision·평가 이력은 보존하고 현재 전달 문서의 hash를 갱신했다.

## Remaining issues / Git

P0/P1: 이번 S53 로컬 수정에서 미해결 항목 없음.
실환경·제품 표면·시간 리허설은 기존 별도 Gate로 유지한다.
정상 산출물만 기존 main/origin/main에 commit/push한다. Force push, Demo 변경,
새 Trial과 발표자 묶음 생성은 하지 않는다.
