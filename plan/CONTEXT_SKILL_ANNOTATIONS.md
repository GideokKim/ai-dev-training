# Context / Skill 표시 정리 — DEC-0186

2026-11-05 · 기준 eae46d9 · 사용자 주석11개 반영 · 전체111장/372분 유지.

## 주석 대응

| 주석 | Slide | 반영 |
|---|---|---|
|1|S48|“C++에 적용하면” 보조 제목만 제거; 두 적용 예시는 유지.|
|2/3/4|S52|“해석의 한계” 제목/설명과 최종 CLI footer 제거. testing.md의 고립 각주(*)도 제거. 범위는 Notes에 유지.|
|5/6|S65|/skill 입력 문자열과 “명령 입력 중” 창. CLI footer 제거. 정식 명령/실제 과거 입력은 /skills로 Notes 보존.|
|7|S67|사용 예시·지침 검토 footer 제거; 본문·Notes의 검토 단계는 유지.|
|8|S39|하단 질문을 “불필요한 반복을 어떻게 줄일까?”로 교체.|
|9/10/11|S40|상태 번호/발췌 footer 제거. 앞 장의 네 공통 기준을 AGENTS.md 한 문서로 모음.|

## S39 → S40 → S41

S39의 서로 다른 세 목표 아래 테스트 실행·의존성 추가 조건·로컬 합성 데이터·기존 동작 보존이 반복된다. S40에서 같은 표현을 한 AGENTS.md 문서에 모으고 실제 테스트 명령을 연결한다. 목적·실행 안내를 영어와 한국어로 중복 낭독하던 구성은 Notes 원문 근거로 남긴다. S41은 기록된 지침을 실제로 참고하고 테스트했는지 확인하는 기존 역할을 유지한다. 이 파일 추가만으로 강제 준수·자동 로딩·토큰 절감을 입증하지 않는다.

S40은 실제 STATE-01의 영어 내용을 한국어 의미로 정리한 도식이다. 실제 파일이 이 네 한국어 줄로 구성됐다는 인용이 아니다. “로컬 합성 데이터”는 프로젝트 목적의 synthetic ASCII PGM과 local input/output 조건의 의미 요약이다. 상태 Tag·원문·테스트 명령·Git 이력은 변경하지 않는다.

## /skill 표시와 원문 구분

사용자 요청의 /skill은 화면에서 입력 중인 문자열로 보여준다. 공식 명령과 원래 실행 기록은 /skills이며 이를 /skill의 성공 실행으로 바꾸지 않는다. 이름·설명 잘림·목록 발견/실제 요청 지정 구분을 유지한다. 자동완성·교육 계정 동작은 새로 검증하지 않는다.

2026-11-05 확인: [OpenAI Build skills](https://learn.chatgpt.com/docs/build-skills), explicit invocation 절 및 [Developer commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli), Use skills with /skills 절. 버전·표면 차이와 현재 제품 확인 Gate를 Notes에 둔다.

## 검증 범위

Full111장과 ACT2 22장/ACT3 18장을 렌더링한다. 바뀐 여섯 장은 개별 검토하고 다른105장은 기준판과 화면·이미지를 대조한다. 19필드 Notes 내장/Markdown 일치, 장별 시간/Mode/Template/Beat와 native 표·차트를 확인한다. Windows·발표 PC·교육장·제품/계정·실측 리허설은 UNVERIFIED다. Demo Repository·실험·Sites·묶음은 변경하지 않는다.
