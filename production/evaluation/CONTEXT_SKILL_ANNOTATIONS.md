# Context / Skill 주석 반영 결과

DEC-0186 · 2026-11-05 · 기준 eae46d9 · Status: PASS (local).

## 반영한11개 주석

| 주석 | Slide | 반영과 보존 범위 |
|---|---|---|
|1|S48|“C++에 적용하면”만 제거. 공통 빌드·검증 진입점/장비별 조건의 두 예시는 유지.|
|2/3/4|S52|해석의 한계 제목/설명·최종 CLI footer 삭제. 설명이 사라진 testing.md 각주(*)도 제거. 실제 문서 접근·명세·열1/2·폭2·끝3제외 답은 유지.|
|5/6|S65|/skill로 입력 문자열 변경, 창 제목 “명령 입력 중”. CLI 버전 footer 제거. 실제 Skill 이름과 잘린 설명 보존.|
|7|S67|사용 예시/생성 지침 검토 footer 삭제. 생성 지침 확인·실제 요청에 사용하고 다듬기 단계는 본문/Notes에 유지.|
|8|S39|질문을 “불필요한 반복을 어떻게 줄일까?”로 교체. 세 요청과 반복된 네 지침은 유지.|
|9/10/11|S40|STATE 전환/발췌 footer 제거. 중복 영어·한국어 설명 대신 앞의 세 작업과 같은 네 지침을 하나의 AGENTS.md 문서로 연결.|

## S40과 앞뒤 연결

S39에서 반복을 확인하고 S40에서 같은 네 문장을 AGENTS.md에 모은 뒤 S41에서 실제 활용을 확인한다. S40의 테스트 명령은 원문을 유지한다. 한국어 네 규칙은 실제 STATE-01의 의존성·데이터·동작 보존·검증 조건을 의미로 정리한 문서 도식이며 한국어 원문 인용이나 전체 파일 캡처가 아니다. 원래 목적·Build 안내 발췌와 메타데이터는 Notes에 보존했다. 지침 기록과 실제 적용은 구분한다.

## 명령 표기와 실제 근거

2026-11-05 공식 [Build skills](https://learn.chatgpt.com/docs/build-skills)와 [Developer commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli)의 정식 명령은 /skills다. 실제 과거 관찰도 /skills였다. 사용자 요청의 /skill은 “명령 입력 중”이라는 표시와 함께 입력 접두어로 보여준다. /skill이 정식 실행 명령으로 성공했다고 주장하거나 원시 기록을 교체하지 않는다. 자동완성·교육 계정의 실제 동작을 새로 시험하지 않았다.

S52의 넓은 문서 접근, testing.md가 최종 실행에서 관찰된 범위, 최소 문서 선택·효율 향상 미입증은 Notes/Claim에 유지한다. 화면에서 지운 한계 문구를 성과 주장으로 바꾸지 않는다. 새 Trial·제품 실행·벤치마크·이미지 생성은 없다.

## 렌더·문서 대조

- Full111장+ACT2 22장+ACT3 18장,151개 렌더와 내장 Notes를19필드 Markdown에 대조했다.
- 최종 변경6개 화면을 개별 크기로 검토했다. 새 잘림·겹침을 발견하지 않았다. S40은 세 작업 라벨과 네 공통 지침의 관계가 중심이 되도록 배치했다.
- 다른105장 화면은 기준판과 같다. S39/S48/S52/S65/S67의 지정 변경 영역 밖 픽셀도 같다. 모든 이미지 bytes·위치·M 연계와 ACT/Full 화면 일치 확인.
- 전체111장·372분, ACT별14/23/22/18/19/15장과42/64/90/64/71/41분 유지. Mode Lecture170/Demo44/Case95/Reflection17/Transition21/Q&A25분 유지.
- 장별 Title·ID·시간·Mode·Beat·Section·Primary Template 유지. 실제 원문과 요약 구분을 위해 S40/S65의 Evidence 분류에 TEACHING_MODEL을 추가했다. 기존 관찰·Claim은 Notes에 보존했다.
- PPTX 구조/재가져오기/16:9/폰트 정책/레이아웃 검사 통과. 새 레이아웃 finding0. Full의 기존 S04/S54/S79 경고4건, ACT2 S54 표0.01inch 추정 경고1건은 같은 범위다. ACT3 경고0건.
- native 표 S54/S81/S85와 S69 C++ 차트/수치는 보존했다. ACT0/1/4/5 PPT는 변경하지 않았다.
- Demo Repository HEAD/작업 트리·State Tag와 실험/원시 자료·Sites·발표 묶음은 변경하지 않았다.

P0/P1: 이번 변경에서 새로 발견한 문제 없음. Windows PowerPoint·교육장·제품/계정/자동완성·실측 리허설은 UNVERIFIED.

[기획과 주석 대응](../../plan/CONTEXT_SKILL_ANNOTATIONS.md) · [기계 대조](CONTEXT_SKILL_ANNOTATION_VALIDATION.json) · [S40](../preview/full/S40.png) · [ACT2 Notes](../notes/ACT_2_NOTES.md) · [ACT3 Notes](../notes/ACT_3_NOTES.md).
