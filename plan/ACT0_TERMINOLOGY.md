# ACT0 용어 기준 — 개발 프로젝트 / 프로젝트 폴더

## 현재 제작 기준 — DEC-0108 / DEC-0109 / DEC-0110 / DEC-0111 (2026-10-27)

현재 **119장·417분(6시간57분)**. 이전 S15 제조 검사 전환 장을 삭제하고
이전 S16–S120을 S15–S119로 한 칸 당긴다. S14는 정보 접근과 사람의 최종 판단을
구분하던 이전 화면을 유지하고, ACT0 Q&A 후 ACT1 제목으로 이어간다.
삭제 장의 전환3분은 줄이고 Q&A3분은 S14에 남긴다. S14는 Lecture2+Q&A3=5분이다.
ACT별 장수14/22/22/26/20/15, 시간42/64/90/96/85/40분.
Mode Lecture186/Demo49/Case105/Reflection22/Transition23/Q&A32분.
다른 장의 내용·장별 시간/Mode·근거·Trial/State/Beat/Section ID는 유지한다.
ACT1 S16–S18은 DEC-0110에 따라 같은 crop 수정 요청으로 연결한다.
빠진 기준 확인→허용 범위 비교→구체 요청 순서이며 교육용 예시다.
S19–S20에서 일반화한 뒤 S21은 DEC-0111에 따라 실제 TRIAL-002 요청을
발췌·번역하고 다섯 역할을 원문 밖 주석으로 연결한다. Context 문단은 만들지 않는다.
S22는 같은 과정 지시 01–03을 행동 기록과 대조한다. S16–S18은 교육용 예시다.
[실제 요청 연결](S21_TRIAL_REQUEST_MAP.md)을 따른다.
[현재 ACT1 사례](ACT1_SINGLE_CROP_CASE.md)를 따른다.
Native 표는 S53/S65, 차트는 S69/S96, 마지막 팁 찾아보기는 S116–S118이다.
12Templates/28Variants·19Notes 필드는 유지한다. 제품·Windows·교육장·리허설은
UNVERIFIED다. Demo 저장소·Sites·발표 묶음은 변경하지 않는다.
[현재 Map](SLIDE_MAP.md), [번호 이행](SLIDE_ID_MIGRATION_119.md),
[삭제·연결 범위](ACT0_S15_REMOVAL.md)를 우선한다. 아래 이전 판본은 당시 이력이다.

Decision: DEC-0106. User approval:2026-10-27. Baseline:`c45135a`.

## 의미와 표현

ACT0에서 일반 설명의 기본 용어는 **개발 프로젝트**다. 처음 등장하는 S01에서
**코드·명세·테스트가 있는 프로젝트 폴더**라는 뜻을 한 줄로 밝힌다.
이후 맥락이 명확할 때는 프로젝트로 줄여 쓴다. 실제 폴더를 여는 조작은
**프로젝트 폴더**라고 표현한다. GitHub 원격 저장소나 Repository 설계 패턴으로
받아들일 여지를 줄이기 위한 용어 정리이며 새로운 기능·성과 설명이 아니다.

| Slide | 현재 표현 |
|---|---|
| S01 | AI가 개발 프로젝트를 직접 살펴보게 하기 |
| S01 부제 | Chatbot → 개발 프로젝트를 조사하는 Agent |
| S06 | 개발 프로젝트 조사 기록; 실제 요청의 “이 저장소”는 원문 보존 |
| S10 | 프로젝트 파일의 정보 / 프로젝트 파일 접근과 실행 권한은 별개 |
| S13 | 개발 프로젝트 조사는 Codex에서 시작한다 / 프로젝트 폴더 열기 |
| S14 | 프로젝트를 봐도, 원하는 작업은 따로 정한다 |
| S15 | 프로젝트를 보면 내가 원하는 것까지 알까? |
| S117 | S13의 새 제목을 동일하게 참조 |

## 유지할 경계

프로젝트 파일(코드·명세·테스트)과 실행 환경(로그·도구·권한)은 계속 구분한다.
프로젝트 폴더를 연다는 것이 실행 권한 확대, 모든 파일의 자동 로드, 목표/완료 조건의
자동 결정이나 전체 구현 검증을 뜻하지 않는다. 허용된 범위의 자료를 조사한다는
기존 설명을 유지한다. 사람의 목표·검토·최종 수용 책임도 바꾸지 않는다.

실제 TRIAL-001 요청 발췌의 “이 저장소”는 관찰 근거이므로 바꾸지 않는다.
Evidence / Source의 원문, 보존된 footer 인용, Git 용어, 파일/경로/식별자와 과거
제작·결정 기록도 보존한다. ACT1 이후의 일반 Repository 용어를 일괄 변경하지 않는다.
ACT5 S117은 기존 S13 제목의 찾아보기 참조 한 곳만 정렬한다.

## 제작 범위

120장·420분, ACT0 15장·45분, ACT별45/64/90/96/85/40분과 Mode
Lecture186/Demo49/Case105/Reflection22/Transition26/Q&A32분을 유지한다.
Slide ID·Story Beat·Section·Demo·Trial·State와 장별 시간/Mode를 변경하지 않는다.
기존 이미지·도식·C++ 코드·표·차트·M 표시는 유지한다. S01에 정의 한 줄을 더하고
나머지는 기존 text box의 용어만 맞춘다. Native editable text를 유지한다.

current120-ID의 마지막 표시 단계인 act0-terminology.mjs에서 적용한다.
이전 판본 factories/act-titles.json/practical-tips.json은 입력 단계 이력이며,
이를 일괄 재번호/재작성하지 않는다. 현재 Map/Notes와 최종 표시 overlay를 따른다.

[현재 Map](SLIDE_MAP.md), [검토 결과](../production/evaluation/ACT0_TERMINOLOGY_REVISION.md).
Demo 저장소·새 Trial·Sites·발표 묶음 변경은 없다. Windows/실환경/리허설은 미검증이다.
