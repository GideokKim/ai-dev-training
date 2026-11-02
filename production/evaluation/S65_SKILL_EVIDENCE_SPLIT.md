# S65 — Skill 근거3장 분할 결과

Decision: DEC-0130. Date:2026-11-02. Baseline:`4640091`.
Status: LOCAL RENDER AND STRUCTURE VERIFIED.

## 결과

| Slide | 한 장의 역할 | 시간 |
|---|---|---:|
| S65 | 사용할 Skill을 목록에서 찾는다 | Demo1분 |
| S66 | 이번 요청에 사용할 Skill을 지정한다 | Demo2분 |
| S67 | Skill의 지침이 작업에 포함됐는지 확인한다 | Demo2분 |

이전 S65의5Demo분을 그대로 사용한다. S64의 필요한 작업 선택 → S65 발견 → S66 명시 요청 →
S67 본문 포함 확인 → S68 실제 지침/행동 대조로 이어진다. 처음의 한 줄 밝기 통계 작업을
같은 Skill 이름으로 세 장에 연결했다. 기존120장판 S66 이후는 현재 S68 이후로+2한다.
122장·417분, ACT3 28장·96분이며 다른 ACT 시간·Mode는 같다.

## 근거와 Notes

S65는 당시 목록의 이름/잘린 설명, S66은 실제 요청의 명시 호출과 번역 요약,
S67은 같은 성공한 실행의 이름·경로·전체 지침 본문 포함을 보여준다.
실제 요청의 임시 workspace·시간/할당량 근거 조사·6항목 보존·범위·trade-off/no-change 조건을 유지했다.
기록을 재구성한 정적 화면이며 실제 UI 캡처·새 실행·새 load 이벤트를 만들지 않았다.
TRIAL-008/DEC-0017/BEAT-021과 CLI0.154.0/gpt-5.6-sol high의 관찰 범위는 같다.
암묵 호출·현재 Desktop·자동 준수·Skill 단독 효과·우월성·토큰 절감을 주장하지 않는다.
S68에 실제 수행 기록을 남겨 본문 포함과 구분한다. 후보/benchmark 성과를 앞당기지 않는다.

122개19필드 Notes를 작성/번호 이행하고 Full/해당 ACT 내부 Notes와 맞췄다.
S64의 마지막 연결, 새 S68의 본문 포함 참조를 정렬했다.
ACT1 S25 Notes의 C++ 적용 참조는 현재 S78로 바꿨다. ACT1 화면과 나머지 package part는 그대로다.
소스의 과거 번호·JSON·asset명·과거 평가/문서 파일명은 보존하고 마지막122-ID adapter를 한 번만 적용한다.
기존 S61의3문구 삭제, 이전 S70(현재 S72)의2문구 삭제와 S64 A/B/C 비교를 보존했다.

## 전체 렌더/정합성 검증

- 통합122장 + ACT1 23장 + ACT3 28장 + ACT4 20장 + ACT5 15장, 개별 PNG208개를1920×1080으로 렌더링했다.
- 새3장 및 S64→S65→S66→S67→S68과 ACT3 montage를 실제 시각 검토했다.
  이번 수정에서 잘림·겹침·제목/본문 가독성 문제를 발견하지 않았다.
- 기존119장의 화면과 텍스트를 대조했다.64장은 이전과 픽셀이 같고55장은 번호/참조 영역만 다르다.
  본문 속 참조가 바뀐 장은 현재 S119/S121이며 나머지는 상단 Slide ID만 달라졌다.
- ACT3/4/5 현재 Preview 목록은28/20/15장이다. 이전 번호로 남은 PNG4개는 현재 폴더에서 제외하고 Git의 이전 판본에 보존했다.
- 모든 기존 이미지 바이트와 native chart의 범주/수치 cache가 같다. 새3장도 native text/shape로 편집 가능하다.
- Full과 ACT별86장 렌더가 일치한다. ACT0/ACT2 PPT는 이전과 바이트가 같다.
  ACT1은 S25 Notes XML 하나만 바뀌었다.
- 122개의19필드 Notes와208개 내장 Notes를 대조했다. 기존 Notes는 번호/현재 경로만 이행하고
  S64/S68의 연결을 새 구조에 맞췄다. 실제 원문·과거 보고서 경로와 근거 범위를 유지했다.
- 장수14/23/22/28/20/15, ACT 시간42/64/90/96/85/40, 전체417분을 확인했다.
- Mode Lecture186/Demo49/Case105/Reflection22/Transition23/Q&A32와 기존 장별 배정이 같다.
- T07-A를 세 장에 적용했다.12Templates/28Variants를 유지한다.
- Native 표는 S54/S68, 차트는 S72/S99다. 기존 소스 export에서 빠진 native chart의 편집 workbook 연결을
  검증된 literal-cache materialization으로 복구했고 값은 이전과 대조했다.
- 최종5개 PPT의 package integrity,16:9, layout finding0, first-party import, native 표/차트 검사,
  기존 파일 기준 OOXML schema/관계/컨텐츠 타입 검사를 통과했다.
- 대상 새3장/ACT3–5에는 layout 경고가 없다. 기존 S04 연결선2건/S54 표 추정0.01inch 경고는 그대로다.
- 현재 Fallback은46개다. 이전44개 역할/분류는 유지하고 이전 S65 한 개를 S65–S67의3개로 나눴다.
  기존5Demo분·다른 Demo 역할·과거 이력은 그대로이며 현재 번호/경로/해시를 맞췄다.

로컬 렌더는 Apple SD Gothic Neo/Menlo를 Malgun Gothic/Consolas의 대체로 사용한다.
Windows PowerPoint·발표PC/교육장·제품/계정·실측 리허설은 UNVERIFIED다.
5분은 배정 검증이며 실제 발표 시간 적합성을 검증한 리허설이 아니다.
Demo Repository·Sites·발표 묶음을 변경하지 않았다. 새 Trial·제품 실행·실제 리허설은 하지 않았다.

## 산출물과 참조

[수정 S65](../preview/full/S65.png), [수정 S66](../preview/full/S66.png), [수정 S67](../preview/full/S67.png),
[통합 PPT](../AI_Dev_Training_Full.pptx), [ACT3 PPT](../ACT_3.pptx),
[전체 Notes](../notes/FULL_SPEAKER_NOTES.md), [ACT3 Notes](../notes/ACT_3_NOTES.md),
[현행 Map](../../plan/SLIDE_MAP.md), [분할 설계](../../plan/S65_SKILL_EVIDENCE_SPLIT.md),
[번호 대응표](../../plan/SLIDE_ID_MIGRATION_122_DEC0130.md), [기계 검증 요약](S65_SKILL_EVIDENCE_SPLIT_VALIDATION.json),
[현재 파일 식별자](FINAL_HANDOFF.md).
