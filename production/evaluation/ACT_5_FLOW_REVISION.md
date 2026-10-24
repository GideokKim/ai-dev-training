# ACT5 실제 제품 이력·다음 행동·교육 마무리 — DEC-0082

Date:2026-10-24 (Asia/Seoul). Baseline:`bfc63d0`.

## Status

LOCAL REVIEW COMPLETE. ACT5 S86–S93 화면8개와 Notes8개, 기획·Full/ACT5
PPT·Preview를 정렬했다. Windows PowerPoint·실제 발표 PC 글꼴·제품/계정·
교육장 투사·실측 리허설은 UNVERIFIED다. 과거 PASS를 승계하지 않았다.

## 흐름과 중복 정리

S85의 근거·검증 조건 질문에서 S86 전체 여정으로 연결한다. S86은 어떤 문제에
어떤 대응을 더했는지, S87은 실제 제품이 무엇을 바꿨는지 회수한다. S88은
구성의 사용·보류 이유, S89는 사람이 결과를 수용할 질문, S90은 그 판단을
지원할 작업 환경이다. S91에서 고른 문제 하나를 S92의 같은 글자 행동과
확인 근거로 이어 받고 S93은 남은 질문 후 원래 여정 용어로 닫는다.

## Slide별 변경·로컬 시각 검토

| Slide | Result | 변경한 역할과 검토 |
|---|---|---|
| S86 |LOCAL PASS|다섯 가로 열에 문제 단서·대응을 연결. 개인 수준 평가·다음 행동 선택은 뒤에 남김|
| S87 |LOCAL PASS|세 시간순 문제/실제 변경 행. 일곱 State 전부 보조 기록으로 유지. 역방향 읽기·작은 발췌 제거|
| S88 |LOCAL PASS|사용한 구성과 Subagent/Memory 보류 이유를 비교. ACT3 개념 재강의·비교 성과 없음|
| S89 |LOCAL PASS|AI 작업 결과→사람의 목표/판단/검증/책임 네 질문. 본문 반복 결론 축소|
| S90 |LOCAL PASS|맡길 범위·일할 조건·확인/피드백. 새 이론 대신 course-specific AI-Native 이름 회수|
| S91 |LOCAL PASS|C++ 업무의 증상을 먼저 읽고 보조 분류 확인. A–E 동등 선택·원인 검토 순서|
| S92 |LOCAL PASS|같은 A–E를 행동 후보로 연결하고 공통 확인 근거 질문. 개인 성찰2분 유지|
| S93 |LOCAL PASS|남은 질문→마지막 한 문장. S86과 같은 Chatbot/Prompt/Context/Harness/Loop로 종료|

LOCAL PASS는 현재1920×1080 렌더와 내용·운영 지시의 로컬 검토다. 실제
청중 이해도, Windows 호환성, 교육장 투사·실제 발표 시간의 검증이 아니다.

## S87 — 제품 이력과 근거 경계

- crop 경계 오류→끝 좌표 제외 명세에 맞춘 구현 수정:
  STATE-00→STATE-00-FIXED, TRIAL-002/S18.
- 프로젝트 지침 반복·증가→기본 안내·상세 문서:
  STATE-01→STATE-02→STATE-03, TRIAL-003/004/005A/B와 S43.
- 반복 조사·검증 절차→Skill 재사용·제품 변경 검증:
  STATE-04→STATE-04-PERF, TRIAL-008/S58.

세 묶음은 새 Git State나 maturity 등급이 아니다. 전체 모델의 Loop는 앞 ACT의
가상 지침 사례·별도 실제 교육 제작의 평가/보고 기록에서 다뤘다는 문장을
본문에 뒀다. Product endpoint를 늘리지 않았다. Native 도식은 실행 캡처가 아니다.
원본 세 발췌 asset·manifest·provenance는 동일하다. 현재 화면에서만 읽기 어려운
image instance3개를 제거했다. Routing 우월성·토큰 절감·RSS·Harness 단독 성능
인과성은 주장하지 않는다. 과거 CLI를 현재 Desktop 검증으로 바꾸지 않는다.

## S91→S92 — 문제·행동·확인 근거

A 요청 범위→목표/변경 범위 작성, B 반복 사실→출처/검토자,
C 반복 절차→둘 곳/갱신자, D 모호한 완료 기준→검사,
E 반복 실패→원문·원인·현재 기준 대조다. 모든 선택에 같은 확인 근거 질문을
연결한다. 원인 확인 뒤에 변경 여부를 판단하며 변경하지 않는 선택도 가능하다.
다섯 항목 전부의 도입·새 Skill/Memory·회사 담당자 배정·실습을 요구하지 않는다.
Reflection2분은 답변·기록·발표·제출·실천 약속 없는 개인 성찰이다.

## Notes·시간·용어

- 93개×19필드, ACT/Full Markdown과 PPT 내장 Notes를 대조했다.
- 변경8개 외85개 Notes 기록은 동일하다. S87은 현재 도식과 과거 발췌 provenance를
  구분하도록 Evidence/Claim 문구를 정렬했으며 기존 제한 범위는 보존했다.
- S86은 가로 열, S87은 위→아래 행, S89는 오른쪽2×2, S90은 세 가로 열,
  S91/S92는 같은 글자, S93은 Q&A 초점→마무리 초점으로 운영 Cue를 맞췄다.
- S93의 이전 Question/Task/Context/System/Feedback Loop 표현은 현재 사용하지
  않고 Chatbot→Prompt→Context→Harness→Loop로 통일했다. 새 개념이 아니다.
- ACT5 30분: S86 4/S87 3/S88 2/S89 3/S90 3/S91 5/S92 4/S93 6분.
- ACT5 Mode: Lecture15/Demo2/Case1/Reflection2/Transition6/Q&A4.
- S91 Case1+Transition4, S92 Lecture2+Reflection2,
  S93 Q&A4→Closing Transition2를 유지했다. 실제 시간 적합성은 UNVERIFIED다.
- Full93장·379분, ACT40/63/81/85/80/30,
  Mode Lecture143/Demo73/Case88/Reflection21/Transition22/Q&A32 유지.

## 렌더·패키지·보존 검토

| 항목 | 결과 |
|---|---|
| 최종 패키지/렌더 |Full93+ACT5 8, 총101개1920×1080 PNG|
| 시각 검토 |ACT5 8장 개별, Full ACT0–5 overview, S85→S86 경계·전체 ACT5 순서|
| 검토 화면/최종 화면 |8개 PNG가 검토 초안과 최종 패키지 렌더에서 byte 동일|
| 다른 화면/Notes |85개 PNG byte 동일,85개 Notes 기록 동일|
| Full/ACT5 |8개 대응 PNG hash 동일|
| 패키지/layout/reimport |오류 발견0건, 최종 PPTX 재가져오기 통과|
| Office XSD 추가 도구 |UNAVAILABLE: 현재 Python의 defusedxml 미설치. PASS로 표시하지 않음|
| Native evidence |S47/S55/S77 표 XML과 S58 chart 수치 보존|
| 이미지 |S87의3개 instance만 제거. 다른 이미지 bytes/crop/배치와 원본 asset 보존|
| Fallback |구성원32개 유지, S86/S87의2개 hash만 갱신|
| 기존 기획 |MASTER/INVARIANTS/Story Beat/Curriculum/Visual Spec/Production Plan 원본 유지|
| 기타 |ACT0–4 PPT·Demo HEAD/태그·Prototype·발표 ZIP 동일|

기존 S47 Native 표의 자동 추정 높이 경고0.01in는 기준 판본과 동일하고 표
XML·PNG도 동일하다. 이번 수정에서 새 경고를 만들지 않았다. 폰트는
Malgun Gothic/Consolas, 로컬 Preview alias는 AppleSDGothicNeo/Menlo다.
로컬 렌더링은 실제 Windows PowerPoint·발표 PC 글꼴 검증을 대신하지 않는다.

## Remaining issues

- P0: 이번 로컬 내용·패키지·렌더 검토에서 발견0건.
- P1: 이번 승인 범위의 미해결 문제 없음. 청중 이해도·실제 운영 성과는 미측정.
- P2: 기존 S47 자동 표 높이 경고와 실제 Windows/교육장/글꼴/계정/시간 리허설.
- 도구 제한: 추가 Office XSD 검사 미실행. 설치나 자동 수리 없이 first-party
  패키지/layout/reimport·Notes·PNG·원본 대조 검사를 완료했다.
- 발표 묶음 재생성 없음. 새로운 Trial·Live 실행·성과 주장은 없음.

## 산출물

| 항목 | 경로/식별자 |
|---|---|
| Full PPT |[AI_Dev_Training_Full.pptx](../AI_Dev_Training_Full.pptx)|
| Full SHA-256 |`79e45b8befb25d64b8b92c3f0962115fe64cdc5dcd468079bd70a1a0e600a58b`|
| ACT5 PPT |[ACT_5.pptx](../ACT_5.pptx)|
| ACT5 SHA-256 |`d24abd2d371c6e059a7ac5693ac52391afd85c9560654e1736f2694331dff4fa`|
| Full Notes |[FULL_SPEAKER_NOTES.md](../notes/FULL_SPEAKER_NOTES.md)|
| Full Notes SHA-256 |`49e476575460157c3d357ca42e93edb61477bcd64d60bdda9e85831923f5865d`|
| ACT5 Notes |[ACT_5_NOTES.md](../notes/ACT_5_NOTES.md)|
| Preview |[ACT5 montage](../preview/act5/montage.png),[ACT4→ACT5](../preview/act5/S85-S88-continuity.png)|
| Validation |[자동 대조 기록](ACT_5_FLOW_VALIDATION.json)|
| 기획·Decision |[ACT5 flow](../../plan/ACT5_FLOW_REVISION.md),[DEC-0082](../../plan/DECISIONS.md)|

## Git checkpoint

정상 산출물만 기존 origin/main에 commit/push한다. Force push와 Demo 저장소
변경은 없다. 실제 commit/push 결과는 Git history와 완료 보고에 기록한다.
