# Prompt 기법명·출처·디자인 수정 결과

Decision: DEC-0117. Date:2026-10-30. Baseline:`181305e`.
Status: LOCAL RENDER / STRUCTURE VERIFIED; presentation-environment gates remain UNVERIFIED.

## Scope

S28–S35의8장만 다시 설계했다. 기존 제목·요청 내용·메시지·핵심5/조건부3·
장별1분·Lecture7+Case1을 유지한다. 전체120장·417분과 기존 근거 범위는 같다.
기법/접근명과 뜻, 사용 상황, 적용 문장 강조, 기법별 관계 도식, 출처 문서·절을 표시한다.

| Slide | Method / approach | On-slide visual | Local visual check |
|---|---|---|---|
| S28 | Delimiters | 요청/명세/로그 제목 강조와 구획별 역할 | 새 잘림·겹침 발견 없음 |
| S29 | Few-shot Prompting | 입력 상태와 팀 표기의 대응표; 예시 추가 판단 분기 | 새 잘림·겹침 발견 없음 |
| S30 | Output Format Specification | 보고 항목 강조와01–04 보고서 구조 | 새 잘림·겹침 발견 없음 |
| S31 | Grounding | 근거 요청 강조; 명세/구현/테스트와 결론의 연결 | 새 잘림·겹침 발견 없음 |
| S32 | Clarifying Questions | 질문·독립 조사 문장 강조; 결정 유무에 따른 분기 | 새 잘림·겹침 발견 없음 |
| S33 | Task Decomposition | 조사/계획 요청 강조; 검토할 산출물01–03 | 새 잘림·겹침 발견 없음 |
| S34 | Criteria-based Review | 리뷰 기준 강조; 세 검토 질문과 발견 사항의 형태 | 새 잘림·겹침 발견 없음 |
| S35 | Iterative Refinement | 명세/보존 조건 강조; 어긋난 지점·근거·유지 조건 대응 | 새 잘림·겹침 발견 없음 |

## Design

기존 Light Engineering Workbench의 색·폰트·배지·M 연계를 유지했다. T03-A를
기법별 관계를 보여주는 구도로 다듬고 Template 수12개/Variant28개는 유지한다.
기법명31CSSpx, 요청28CSSpx(21pt), 인용19CSSpx(14.25pt), 제목48CSSpx(36pt)다.
사용 상황을 독립된 줄로 두고, 같은 비중의 긴 설명 목록 대신 선택한 문장과 도식을
연결한다. 강조는 색과 굵기를 함께 사용한다. 하단에는 공식 문서·절과 기존 범위를 둔다.
전부 native PowerPoint text/shape로 편집할 수 있으며 슬라이드를 이미지로 대체하지 않았다.

## Evidence / naming

각 화면 출처의 전체 URL·절과 Claim/Source ID는 Notes 및
[최신 근거표](../../references/product/PROMPT_ENGINEERING_2026-10-30.md)에 연결한다.
기법/접근명은 실무에서 쓰는 이름과 설명용 표기다. OpenAI의 공식8분류 또는
모든 모델의 표준 알고리즘이라고 주장하지 않는다. 특히 Output Format Specification은
자연어 출력 구조 요청이고 Criteria-based Review는 기준 리뷰를 설명하는 이름이다.
Task Decomposition은 검토할 조사/계획 산출물의 경계이며 특정 CoT 논문의 실행이 아니다.

S29는 동일한 가상 팀 기준이다. 콜론으로 적었던 세 예시를 입력/출력 대응 행으로
표현하며 실제 실행 결과를 만들지 않았다. 기존 요청 원문은 Notes에 그대로 남긴다.
S31의 자료/결론 그림, S32의 분기도 교육용 관계 설명이다. 새 Trial, 실제 사내 정책,
현재 제품 실행·형식 강제·토큰/시간 절감·정확도 향상 근거는 추가하지 않는다.

## Notes / planning

8개 Notes에서 기법명과 강조 문장/도식의 연결을 설명하도록 Speaker Flow를 맞췄다.
화면 출처와 명칭의 범위를 Source/Advanced Insight에 연결하고19필드를 유지한다.
현재 Map·Template 설명·Visual Spec·기법 추가 기획·MASTER_PLAN·DEC-0117을 정렬했다.
112개 다른 Notes, S27→실무 도구→S36/S37→ACT2의 기존 흐름과 시간을 보존했다.

## Validation

- 최종 통합120장과 ACT1 23장, 총143PNG를1920×1080으로 렌더링했다.
- 수정8장을 개별 화면으로 검토하고 ACT1/전체 montage의 흐름을 확인했다.
- 나머지112장 화면은 기존 Preview와 픽셀이 같고 다른5개 ACT PPT도 바이트가 같다.
- Full/ACT1의23개 화면과 수정8개 source/final 화면이 일치한다.
- 각 패키지의 변경은8개 Slide XML과8개 Notes XML이다. 관계/master/media/
  native 표·차트/embedded workbook 등 나머지 part는 바이트가 같다.
-120개19필드 Notes와143개 내장 Notes를 대조했다. 기존 요청 원문·주요 메시지·
  Claim/Story/Section/Trial ID·제목·시간/Mode·Template 배정은 같다.
-120장·417분, ACT42/64/90/96/85/40분, 장수14/23/22/26/20/15,
  Lecture186/Demo49/Case105/Reflection22/Transition23/Q&A32분을 유지한다.
- 패키지·16:9·font policy·layout finding0·first-party import 검사를 통과했다.
-44개 정적 Fallback의 역할·경로·분류는 같고 최종 파일 해시를 맞췄다.

로컬 렌더에는 Malgun Gothic/Consolas 대체로 Apple SD Gothic Neo/Menlo를 사용했다.
Windows PowerPoint·실제 발표PC·교육장·현재 제품/계정·실측 리허설은 UNVERIFIED다.
Demo 저장소·Sites·발표 묶음은 변경하지 않았다.

## Remaining issues

P0: 이번 수정에서 발견하지 않음.
P1: 실제 발표 화면에서 본문/인용 가독성과8분 소개 운영을 확인해야 한다.
P2: 실제 팀의 보고 규정으로 바꾸려면 제공받은 기준을 별도 대조해야 한다.

## Artifacts

[통합 PPT](../AI_Dev_Training_Full.pptx), [ACT1](../ACT_1.pptx),
[S29](../preview/full/S29.png), [S31](../preview/full/S31.png),
[8장 비교 Preview](../preview/act1/S28-S35.png), [ACT1 Preview](../preview/act1/montage.png), [Notes](../notes/ACT_1_NOTES.md),
[기획](../../plan/PROMPT_ENGINEERING_ADDITION.md), [Map](../../plan/SLIDE_MAP.md).
