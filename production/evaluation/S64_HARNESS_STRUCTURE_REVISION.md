# S64 함께 작동하는 Harness 구조와 실행 환경 — DEC-0076

Date:2026-10-23 (Asia/Seoul). Baseline:`8dde9dc`. Structure:93slides/379minutes.

## Status

LOCAL REVIEW COMPLETE — S64 화면·19필드 Notes·기획·PPT·Preview를 정렬했다.
Windows PowerPoint·실제 발표 글꼴·교육장·제품/계정·시간 리허설은 UNVERIFIED다.

## 화면 구성과 이유

S63과 같은 입력·작업·확인 배치를 사용하고 전체를 하나의 작업 환경으로
묶었다. 기존 하단의 긴 구성 목록을 실행 환경의 두 연결로 바꿔 관계를 보여준다.
단순 파일 목록·용어 정의보다 하나의 구조를 읽도록 문구를 줄였다.

| 구성 | 화면의 역할 | 연결 |
|---|---|---|
| 목표 |바꿀 것·지킬 조건|Context·Skill과 함께 한 Agent 작업에 적용|
| Context |프로젝트 사실·명세|작업의 입력|
| Skill |재사용할 수행 방법|작업의 입력, 이번 답은 아님|
| Agent |조사·판단·변경|검증 근거로 이어지는 작업|
| 검증 도구 |테스트·benchmark|근거를 제공하고 사람이 결과 검토|
| 실행 환경 |Repository·입력·권한·실행/측정 조건|Agent와 검증 도구 모두를 뒷받침|

아래 실행 환경에서 위로 향하는 두 선이 공통 기반을 표현한다. 사람의 검토는
도구 종류가 아니라 개발자의 책임이다. 모든 텍스트·노드·연결선은 native 편집
가능하며 동일 종류의 연결선 굵기는2.5px로 맞췄다.

## S63→S64→S65

S63은 실제 밝기 통계 작업에서 사용한 구체적인 구성의 역할이다. S64는 같은
배치를 읽고 전체를 이 과정의 Harness 모델로 묶는다. S65는 실행 조건이
Repository 파일만으로 정해지는지 묻는다. S63/S65 화면·Notes 및 S64의 기존
Transition을 그대로 유지했다. 전역 지침·Hook/MCP 관찰을 이번 장에서 앞당겨
설명하거나 새 기능 목록을 만들지 않았다.

## Evidence / Claim

[DEC-0023](../../plan/DECISIONS.md)의 Harness 운영 정의를 유지한다. Agent가
프로젝트에서 신뢰성 있게 일하도록 의도적으로 설계한 작업 환경이라는
교육용 정의이며 공식 OpenAI 정의·보편적 산업 분류는 아니다.

[DEMO_MATRIX](../../plan/DEMO_MATRIX.md)의 Current Harness 및 §§191–200 Working
Harness Success에서 관찰한 AGENTS.md·docs·성능 Skill·테스트·benchmark와
기록된 입력/실행 조건을 대응한다. 모델과 실제 구성을 혼합해 모든 조건의
완전한 감사를 주장하지 않는다.

- OBSERVED_PRODUCT / TEACHING_MODEL, 기존 TEACHING_MODEL Claim Status 유지.
- 연결선은 관계 재구성이며 실제 호출 순서·자동 routing·새 실행 trace가 아니다.
- 큰 프레임은 과정의 작업 환경 모델이며 제품 UI를 재현하지 않는다.
- 결과 검토 책임은 사람에게 있고 검사·환경 설정이 정확성을 자동 보장하지 않는다.
- Skill/Prompt 우월성·토큰 절감·각 요소의 단독 성능 인과성은 주장하지 않는다.
- 과거 CLI 관찰을 현재 Desktop 실행 검증으로 바꾸지 않는다.
- Subagent와 별도 Memory는 필수로 추가하지 않는다.
- 새 Trial·비교 측정·Demo repository/State tag 변경·발표 묶음 생성은 없다.

## Notes / 시간

ACT3·Full Markdown 및 두 PPT 내장 S64 Notes를 정렬했다. 기존19필드·6분,
Lecture4+Demo2(CAPTURED)를 유지한다. Lecture는 사례→모델0.67, 세 입력0.83,
작업/검증/검토1, 실행 환경1, 정의/범위0.5분이다. Demo는 기존 실제 구성
대응1.5분, 환경 질문/전환0.5분이며 새 명령 실행이 아니다. S63 Demo3분과
중복 계산하지 않는다. 실제6분 리허설은 UNVERIFIED다.

## 렌더·정합성 검토

| 항목 | 결과 |
|---|---|
| Full / ACT3 |93장·379분 /18장·85분 유지|
| S64 |Lecture4+Demo2(CAPTURED), T03-B 유지|
| ACT 시간 |40/63/81/85/80/30분|
| Mode |Lecture143 / Demo73 / Case88 / Reflection21 / Transition22 / Q&A32|
| Notes |93개19필드; ACT·Full·PPT 내장 일치|
| 최종 패키지 렌더 |Full93+ACT3 18, 총111개 PNG,1920×1080|
| 수정 범위 |S64만 화면·Notes 변경, 다른92개 PNG·Notes 동일|
| ACT/Full 화면 |18개 대응 PNG hash 동일|
| 패키지·layout 자동 검사 |발견0건, 최종 패키지 재가져오기 통과|
| 추가 OOXML 검사 |기존 판본과 대조한 Full/ACT3 schema·관계 검사 통과, 자동 수정 없음|
| 개별 시각 검토 |S63/S64/S65 확인; S64의 한글·역할·환경 연결선·외곽 프레임 잘림/겹침 문제 미발견|
| Native evidence |S47/S55 표와 S58 chart·데이터 보존|
| Template / Variant |11개 /27개 유지|
| 정적 대안 |32개 중 S64 식별자 갱신, 다른31개 동일|
| 그 외 |다른 ACT·승인 이미지·Prototype·묶음·Demo repository/State tag 보존|

자동 구조 검사와 실제 시각 검토는 별도로 수행했다. 지정 서체는 Malgun
Gothic/Consolas, 로컬 대체는 AppleSDGothicNeo/Menlo다. 이번 로컬 범위에서
미해결 P0/P1은 발견하지 않았다. 실제 투사 화면에서 전체 도식과 환경 라벨의
원거리 가독성,6분 운영·Windows·제품/계정은 후속 검증으로 유지한다.

## 산출물

| Artifact | Path / SHA-256 |
|---|---|
| Full |[통합 PPT](../AI_Dev_Training_Full.pptx)|
| Full SHA-256 |`6c2018a99e8b3f0ef840d8670c82401c9ee2c233fb4c735115304f21e7725d1b`|
| ACT3 |[ACT3 PPT](../ACT_3.pptx)|
| ACT3 SHA-256 |`b3cc72bdd4fbb1c52e33f92131b5789586fe4aaa0c91166452794d87a6c7b2cf`|
| Notes |[ACT3](../notes/ACT_3_NOTES.md) / [Full](../notes/FULL_SPEAKER_NOTES.md)|
| Full Notes SHA-256 |`9d0ea36821eca588d5caff2f95034925b801492b9043675ec01e717fa13442af`|
| 렌더 |[S64](../preview/full/S64.png) / [S63–S65](../preview/act3/S63-S65-continuity.png)|
| 검증 |[Validation JSON](S64_HARNESS_STRUCTURE_VALIDATION.json)|

기존main/origin의 정상 Git checkpoint를 따른다. Commit ID는 Git history에서
확인한다. Force push·Remote 변경·발표 자료 묶음 생성은 하지 않는다.
