# S45 공통 안내·작업별 상세 수정 결과

Decision: DEC-0118. Date:2026-11-02. Baseline:`774c52e`.
Status: LOCAL RENDER / STRUCTURE VERIFIED; real presentation gates remain UNVERIFIED.

## Scope and intent

S45만 수정했다. “공통 안내와 작업별 상세를 나눈다”로 제목을 명확히 하고,
여러 작업의 기본 안내/질문별 상세/반복 절차의 세 주제를 하나의 범위 비교로 정리했다.
기존120장·417분, S45 Lecture4분, ACT2 22장·90분과 모든 ID·Mode를 유지한다.

화면 상단에서 S44의 README 수정에는 이미지 상세 명세가 필요하지 않았음을 회수한다.
중앙에는 README 수정과 crop 조사가 함께 참고할 프로젝트 목적·공통 제약·실행/검증의
시작점을 두 행에 걸친 하나의 영역으로 표시한다. 오른쪽에는 각 작업에서 필요한
빌드 도구/설정과 좌표 범위/이미지 명세만 비교한다. 하단은 필요한 정보를 답에서도
활용하는지 묻고 S46으로 이어진다. 별도의 새 장·절차·연구 결과는 추가하지 않았다.

## Narrative and evidence

- S44: 실제 TRIAL-004의 관련 지침과 이번 작업에 불필요한 상세를 구분한다.
- S45: 그 관찰을 공통 안내와 작업별 상세의 범위 비교로 일반화한다.
- S46: 입력에 제공한 근거가 답에서 활용됐는지 연구 질문으로 살핀다.
- S59/ACT3: 반복되는 수행 절차의 유지 문제를 기존 위치와 배정에서 다룬다.

S44/S46/S59/ACT3의 화면·Notes·시간은 바꾸지 않았다. S45의 기존 절차 반복 열은
화면에서 제외하되 원래 Decision history와 후속 문제는 보존했다. 구체적인 파일 배치나
탐색 경로를 앞당기지 않고 화살표 없는 범위 비교로 정렬했다.

S45는 TEACHING_MODEL / CONCEPTUAL이다. 두 행을 새 실행 결과나 실제 읽기 순서로
표현하지 않는다. OpenAI 공식 분류·자동 지침 적용·완벽한 선택·토큰 절약·성능 향상은
주장하지 않는다. TRIAL-004에서 혼란·실패가 관찰되지 않았다는 기존 경계도 유지한다.
새 Trial·현재 제품 실험·Demo State 변경은 없으며 Claim Freeze는 그대로다.

## Visual and Notes review

S44/S45/S46의 최종 개별 렌더를 대조하고 ACT2 및 전체 montage의 흐름을 확인했다.
새 S45에서 잘림·겹침을 발견하지 않았다. 제목36pt, 작업24pt, 상세21pt,
공통 안내20.25–21.75pt, 다음 질문22.5pt로 기존 폰트·색·Safe Margin·M 연계를 유지한다.
기존 T03-B의 편집 가능한 native text/shape 비교도이며 전체 화면을 이미지로 바꾸지 않았다.

S45 Notes만19개 필드로 정렬했다. S44 회수40초/작업 구분40초/공통 안내60초/
상세 비교60초/S46 연결40초로 Lecture4분을 보존한다. 실제 리허설을 수행한 것은 아니다.

## Validation

- 통합120장과 ACT2 22장, 총142개 PNG를1920×1080으로 렌더링했다.
- 나머지119개 화면은 baseline과 픽셀이 같고119개 Notes도 내용이 같다.
- Full/ACT2 22개 화면과 S45 source/final 화면이 각각 일치한다.
- Full과 ACT2에서 바뀐 ZIP part는 S45 Slide XML과 해당 Notes XML 각각 하나뿐이다.
  나머지 masters/rels/media/native 표·차트/embedded workbooks는 바이트가 같다.
- 다른5개 ACT PPT는 바이트가 같다.120개19필드 Notes와142개 내장 Notes를 대조했다.
- 모든 Slide/Story Beat/Section/Trial/State/Claim ID, 시간/Mode와 Template 배정은 유지한다.
- ACT 시간42/64/90/96/85/40, 장수14/23/22/26/20/15,
  Mode Lecture186/Demo49/Case105/Reflection22/Transition23/Q&A32, 합계417분이다.
- 패키지·16:9·폰트 정책·layout finding0·first-party import 검사를 통과했다.
- 기존44개 정적 Fallback의 분류·역할·경로를 유지하고 현재 파일 해시를 정렬했다.

로컬 렌더는 Malgun Gothic/Consolas에 Apple SD Gothic Neo/Menlo를 대체 등록했다.
Windows PowerPoint·실제 발표PC/교육장·현재 제품/계정·실측 리허설은 UNVERIFIED다.
Demo 저장소 HEAD/tag/작업 상태와 Sites/발표 묶음을 변경하지 않았다.

## Remaining issues

P0: 이번 수정에서 발견하지 않음.
P1: 실제 발표 화면의 가독성과4분 운영은 별도 확인이 필요하다.
P2: 이 수정으로 새로 발견한 항목 없음.

## Artifacts

[수정 S45](../preview/full/S45.png), [통합 PPT](../AI_Dev_Training_Full.pptx),
[ACT2 PPT](../ACT_2.pptx), [ACT2 Notes](../notes/ACT_2_NOTES.md),
[ACT2 Preview](../preview/act2/montage.png), [현재 Map](../../plan/SLIDE_MAP.md),
[Decision](../../plan/DECISIONS.md), [전달 식별자](FINAL_HANDOFF.md),
[사용자 검증](USER_VALIDATION_CHECKLIST.md).
