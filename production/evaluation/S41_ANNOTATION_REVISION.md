# S41 주석 반영 결과

Decision: DEC-0120. Date:2026-11-02. Baseline:`7bb60c8`.
Status: LOCAL RENDER / STRUCTURE VERIFIED; presentation-environment gates remain UNVERIFIED.

## Annotation coverage

| Comment | Requested change | Applied change |
|---|---|---|
| 1 | 발표용 예시 라벨 삭제 | 라벨과 예시 점선 프레임을 삭제했다. |
| 2 | 실제 데모에서의 결과 | 요청한 제목을 표시하고 실제 기록의11/11 PASS를 사용했다. |
| 3 | Audience footer 2 삭제 | 해당 하단 주석을 삭제하고 해석 범위는 Notes에 유지했다. |
| 4 | 테스트 실행 명령 미포함 강조 | 글자를20.25pt·굵게·청록색으로 키우고 배경으로 강조했다. |
| 5 | macOS 신호등이 있는 Prompt 창 | native 신호등3개·창 제목·분리선·전송 버튼을 구성했다. |
| 6 | Audience footer 1 삭제 | 해당 하단 주석을 삭제하고 근거는 Notes에 유지했다. |
| 7 | 핵심 문구 수정 | “Prompt에는 없지만 AGENTS.md에 의해 테스트를 수행했다.”로 교체했다. |

M 연계와 가운데 AGENTS.md 영역은 유지한다. 사용자 제공 요청 본문도 그대로다.
이번 목표·Project 지침·실행 기록의 순서와 S40→S41→S42 연결을 보존한다.
120장·417분, S41 Demo4분과 ACT2 22장·90분 및 기존 Mode를 유지한다.

## Actual result and scope

“실제 데모에서의 결과”라는 최신 요청에 맞춰 보존된 TRIAL-003의11/11을 표시한다.
이전9/9는 DEC-0119의 발표용 예시였으며 실제 결과로 재분류하지 않았다.
당시 실제 테스트 명령과 결과·원문은 plan/DEMO_MATRIX.md에 그대로 남겼다.
새 Trial·테스트 실행·현재 Desktop 재현·Demo 저장소 변경을 수행하지 않았다.

왼쪽 요청과 macOS UI는 재구성이고, 동일 문장을 새로 실행한 결과라고 표현하지 않는다.
창·신호등·전송 버튼은 native text/shape이며 실제 제품 Screenshot이나 작동 UI가 아니다.
“Prompt에는 없지만”은 구체 테스트 명령이 없었다는 뜻이다. 원문에도 검증 근거 보고는
요청됐다. “AGENTS.md에 의해”는 지침의 명령을 참고·사용한 관찰로 제한한다.
Personal/global Skills도 적용됐고 단독 인과성·자동 로딩·모든 규칙 강제 준수는 미입증이다.
두 하단 주석을 삭제해도 이 해석 한계와 실제 근거는19개 필드 Notes에 보존했다.

## Visual review

S40/S41/S42의 최종 개별 화면과 ACT2/통합 montage를 검토했다.
Prompt 본문·전송 버튼·강조 영역·결과 제목·핵심 문장에서 새 잘림·겹침을 발견하지 않았다.
가운데 지침 영역의 문구·위치·서식과 렌더 픽셀이 같다. shape XML은 매 생성 시 바뀌는
shape ID/creation ID만 제외하고 대조했다. 제목36pt, Prompt18pt, 결과37.5pt,
강조20.25pt와 핵심 문장22.5pt다. 기존 색·Safe Margin·M 연계를 유지한다.
T07-A를 사용하고 새 Template/Variant는 추가하지 않았다.

## Validation

- 통합120장과 ACT2 22장, 총142PNG를1920×1080으로 렌더링했다.
- 다른119개 화면은 baseline과 픽셀이 같고119개 Notes도 내용이 같다.
- Full/ACT2 22개 화면과 S41 source/final 화면이 각각 일치한다.
- Full/ACT2에서 바뀐 part는 S41 Slide XML과 해당 Notes XML 각각 하나뿐이다.
  rels/masters/media/native 표·차트/embedded workbook 등 나머지 part는 바이트가 같다.
- 다른5개 ACT PPT는 바이트가 같다.120개19필드 Notes와142개 내장 Notes를 대조했다.
- Slide/Story Beat/Section/Trial/State/Claim ID, 시간/Mode와 Template 배정은 유지한다.
- ACT 시간42/64/90/96/85/40, 장수14/23/22/26/20/15,
  Mode Lecture186/Demo49/Case105/Reflection22/Transition23/Q&A32, 합계417분이다.
- 패키지·16:9·폰트 정책·layout finding0·first-party import 검사를 통과했다.
-44개 정적 Fallback 경로·역할을 유지하고 S41의 분류를 실제 결과/요청 재구성으로 맞췄다.
  현재 PPT/Notes/Preview 해시를 정렬했다.

로컬 렌더는 Malgun Gothic/Consolas에 Apple SD Gothic Neo/Menlo를 대체 등록했다.
Windows PowerPoint·실제 발표PC/교육장·제품/계정·실측 리허설은 UNVERIFIED다.
Demo 저장소 HEAD/tag/작업 상태와 Sites/발표 묶음은 변경하지 않았다.

## Remaining issues

P0: 이번 수정에서 발견하지 않음.
P1: 실제 Windows/교육장 가독성과4분 운영은 별도 확인이 필요하다.
P2: 이번 수정에서 새로 발견한 항목 없음.

## Artifacts

[수정 S41](../preview/full/S41.png), [통합 PPT](../AI_Dev_Training_Full.pptx),
[ACT2 PPT](../ACT_2.pptx), [ACT2 Notes](../notes/ACT_2_NOTES.md),
[ACT2 Preview](../preview/act2/montage.png), [현재 Map](../../plan/SLIDE_MAP.md),
[원본 Trial](../../plan/DEMO_MATRIX.md), [Decision](../../plan/DECISIONS.md),
[전달 식별자](FINAL_HANDOFF.md), [사용자 검증](USER_VALIDATION_CHECKLIST.md).
