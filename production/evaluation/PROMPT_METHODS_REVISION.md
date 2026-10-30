# S28–S35 실무 Prompt 도구 수정 결과

Decision: DEC-0116. Date:2026-10-30. Baseline:`4b78af1`.

## Result

현재120장·417분 중 S28–S35만 수정했다.8개 장의 제목·ID·각1분과
Lecture7+Case1을 유지한다. 핵심5개와 조건부3개를 상단에 표시하고,
“이럴 때 사용”의 상황과 큰 Prompt 예시, 우측 선택 기준을 같은 위치에 둔다.
핵심은 교육 우선순위이며 모든 요청에5개 또는8개를 넣는 필수 공식이 아니다.

| Slide | Class | Revision | Visual review |
|---|---|---|---|
| S28 | 조건부 | 자료가 섞일 때 제목으로 구획; 짧은 요청의 불필요한 태그 제외 | 로컬 렌더에서 잘림·겹침 발견 없음 |
| S29 | 조건부 | 일반 crop 인덱싱 대신 가상 팀 보고 표기 예시; 간단한 요청부터 시도 | 로컬 렌더에서 잘림·겹침 발견 없음 |
| S30 | 핵심 | 보고 항목과 순서; 기계적 두 문장 제한 제거 | 로컬 렌더에서 잘림·겹침 발견 없음 |
| S31 | 핵심 | 중요한 판단과 실제 자료 연결; 확인·추정·미확인 구분 | 로컬 렌더에서 잘림·겹침 발견 없음 |
| S32 | 핵심 | 직접 조사할 사실과 질문할 결정; 독립 작업 계속 | 로컬 렌더에서 잘림·겹침 발견 없음 |
| S33 | 조건부 | 조사 결과로 구현 범위가 바뀔 때 계획 먼저; 작은 수정은 단계별 중단 강제 안 함 | 로컬 렌더에서 잘림·겹침 발견 없음 |
| S34 | 핵심 | 명세/API/변경 범위 리뷰; 정적 검토와 실행 검사 구분 | 로컬 렌더에서 잘림·겹침 발견 없음 |
| S35 | 핵심 | 어긋난 제안·근거·보존 조건으로 후속 수정 | 로컬 렌더에서 잘림·겹침 발견 없음 |

## Readability and flow

Prompt 본문을25CSSpx(18.75pt)에서29CSSpx(21.75pt)로 확대했다.
주요 메시지는30CSSpx(22.5pt), 우측 설명30CSSpx, 제목48CSSpx(36pt)다.
상황 라벨·본문을 분리하고, 하단에는 핵심 한 문장과 청중에게 필요한 근거 범위만 둔다.
기존 Light Engineering Workbench, 배지, M 연계,12Templates/28Variants를 유지한다.

S27의 목표별 확인 요청 뒤 필요한 도구를 선택하고, S30 보고 구조→S31 설명 근거→
S32 중요한 결정→S33 계획의 확인 지점→S34 변경안 리뷰→S35 구체적 수정으로 진행한다.
S35의 보존 조건에서 S36/S37의 반복 Context 질문으로 연결한다. S36 이후 화면은 같다.

## S29 / evidence boundary

[실행 확인]은 명령·결과가 있는 경우, [코드 검토]는 코드로 판단한 경우,
[미확인]은 근거가 없는 경우라는 가상 팀의 보고 예시다. 실제 회사 규정이나
수행 기록을 만들지 않았다. 첨부 보고서는 수강자가 실제 자료로 바꿀 자리다.
예시 없이 간단히 요청하고 의도가 전달되지 않을 때 예시를 추가한다.

2026-10-30 공식 문서7개를 확인해 SRC-0230–0235를 재확인하고 SRC-0243을 추가했다.
CLM-0032–0039는 권고의 존재만 뒷받침한다. Astra의 모델별 조언과 GPT-5.6 절의
내부 수치를 혼동하지 않는다. 새 효과 수치·Trial·C++ 실행·현재 계정 검증은 없다.
S30 자연어 형식과 API Schema, S31 인용과 실제 사실, S34 리뷰와 독립 근거를 구분한다.
S35의 앞선 제안은 가상 구성이며 반복 자체가 개선 성과가 아니다.

## Notes / planning

S28–S35의19필드 Notes와 Full/ACT1 내장 Notes를 정렬했다. 기존112개 Notes는 같다.
Map의 사용 상황·역할·전환·Claim 범위·출처와 Template 설명을 맞췄다.
MASTER_PLAN·CURRICULUM·STORY_ARCHITECTURE·Notes Architecture의 현재 공지,
PROMPT_ENGINEERING_ADDITION의 현행8장 내용, Claim Freeze·Sources·Claims·
DEC-0116에 판단과 근거를 연결했다. 이전2026-10-21 판본과 원본 기획은 보존했다.

## Validation

- 최종 Full120장과 ACT1 23장, 총143PNG를1920×1080으로 렌더링했다.
- 수정8장을 개별 화면으로 검토하고 ACT1/전체 montage의 흐름을 확인했다.
  수정 장의 새 잘림·겹침을 발견하지 않았다. 전체112개 나머지 화면은 픽셀이 같다.
- Full/ACT1의23개 화면이 서로 같고 수정8개는 source 렌더와도 같다.
- 각 패키지는8개 Slide XML과8개 Notes XML만 바뀌었다. 관계·master·이미지·
  native 표/차트·embedded workbook 등 다른 part는 바이트가 같다. 다른5개 ACT PPT도 같다.
-120개 Notes 각19필드, 해당143개 내장 Notes와 Markdown 내용을 대조했다.
-120장·417분, ACT42/64/90/96/85/40분과 장수14/23/22/26/20/15,
  Lecture186/Demo49/Case105/Reflection22/Transition23/Q&A32분은 같다.
- 장별 시간/Mode·Story/Section/Trial/Claim ID·Template 배정은 같다.
- 패키지·16:9·글꼴 정책·layout finding0·first-party import 검사를 통과했다.
-44개 정적 Fallback의 분류·역할·경로는 같고 현재 파일 해시를 정렬했다.

검증 도구의 초안 텍스트 추출은 빈 문단을 생략해 S29 예시 비교에 한 번 실패했다.
OOXML 문단을 그대로 읽도록 검증기를 수정해 재검사했으며 PPT 내용·렌더에는 문제가 없었다.

로컬 렌더는 Malgun Gothic/Consolas를 Apple SD Gothic Neo/Menlo로 대체했다.
Windows PowerPoint·발표PC 글꼴·교육장·현재 제품/계정·실측 리허설은 UNVERIFIED다.
Demo 저장소·Sites·발표 묶음은 변경하지 않았다.

## Remaining items

P0: 이번 수정에서 발견하지 않음.
P1: 실환경 글꼴·교육장 가독성 및8분 운영은 사용자 검증/리허설 Gate에 남긴다.
P2: 실제 회사 보고 규정으로 예시를 바꾸려면 제공받은 기준과 대조해야 한다.

## Artifacts

[통합 PPT](../AI_Dev_Training_Full.pptx), [ACT1](../ACT_1.pptx),
[S29](../preview/full/S29.png), [ACT1 Preview](../preview/act1/montage.png),
[Notes](../notes/ACT_1_NOTES.md), [기획](../../plan/PROMPT_ENGINEERING_ADDITION.md),
[근거](../../references/product/PROMPT_ENGINEERING_2026-10-30.md), [Map](../../plan/SLIDE_MAP.md).
