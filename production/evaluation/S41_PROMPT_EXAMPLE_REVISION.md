# S41 요청·9개 발표용 예시 수정 결과

Decision: DEC-0119. Date:2026-11-02. Baseline:`f871db1`.
Status: LOCAL RENDER / STRUCTURE VERIFIED; real presentation gates remain UNVERIFIED.

## Scope

S41의 작업 요청을 사용자가 제공한 아래 문장으로 교체했다. 줄바꿈만 조정했다.

> README.md에 Test 섹션을 만들어서 테스트 관련 내용 모아줘. README.md만 변경하고 최종 diff, 검증 근거를 보고해줘.

가운데 저장소 작업 지침 영역은 그대로 유지한다. 오른쪽은9/9 PASS의 발표용 예시다.
검증 예시/발표용 예시 라벨과 점선 프레임으로 실제 실행 기록과 구분했다.
테스트 명령 미포함 설명은 Prompt 창 밖에 두며 입력 문장에 포함하지 않는다.
120장·417분, S41 Demo4분과 ACT2 22장·90분 및 기존 Mode를 유지한다.

## Evidence boundary

사용자는9개가 실제 기록 정정이 아닌 발표용 예시라고 명시적으로 확정했다.
보존된 TRIAL-003의 원문과11/11 PASS는 plan/DEMO_MATRIX.md에 그대로 남겼다.
STATE-01의 정적 테스트 메서드 수도11개다. 이 확인은 테스트 실행이 아니다.
9개 예시를 새 Trial·현재 제품 재현·실제 suite 개수 정정으로 표현하지 않는다.

지침 활용 근거는 기존 CLI 실행이다. 실제 명령은
`PYTHONDONTWRITEBYTECODE=1 PYTHONPATH=src python3 -m unittest discover -s tests -v`다.
AGENTS.md의 테스트 명령을 사용한 관찰과 단독 인과성·자동 로딩·강제 준수 입증은
구분한다. Personal/global Skills도 실행됐다는 기존 한계는 유지한다.

S41은 OBSERVED_PRODUCT / TEACHING_MODEL로 정렬했다. 전체를 실제 실행 캡처로
표현하지 않고, 오른쪽은 별도 점선 영역/라벨, 하단은 실제 관찰/예시 구분을 사용한다.
모든 요소는 편집 가능한 native text/shape다. 가짜 로그나 실행 화면을 만들지 않았다.
기존 Trial·코드·지침·State/tag·실제 결과·성과 주장을 변경하지 않았다.

## Story and Notes

S40의 기록 위치→S41의 지침 활용 관찰과 발표용 예시→S42의 Task Prompt/Project
Context 구분으로 이어진다. S40/S42의 화면·Notes는 바꾸지 않았다.
S41 Notes의19개 필드를 정렬하고, 실제11개/발표용9개 및 새 Prompt 출처를 명시했다.
4분은 요청1분/기존 지침1분/예시와 실제 기록 구분1분/역할 정리·S42 연결1분이다.
HYBRID 활성화는 미검증이며 기본 경로는 정적 PPT/PNG다.9개 예시를 Live 결과처럼
만들기 위해 새 Trial을 실행하거나 저장소를 변경하지 않는다.

## Visual review

S40/S41/S42의 최종 개별 렌더를 대조하고 ACT2/전체 montage의 흐름을 확인했다.
S41의 Prompt·지침·결과·하단 범위에서 새 잘림·겹침을 발견하지 않았다.
가운데 AGENTS.md 영역은 원본과 문구·위치·서식 및 렌더 픽셀이 동일하다.
shape XML은 매번 생성되는 creation ID만 제외하고 대조했다.
기존 제목36pt, Prompt18pt, 결과37.5pt와 색·Safe Margin·M 연계를 유지한다.
T07-A를 유지하고 기존 Evidence Grammar의 점선/라벨을 예시 결과에 적용했다.

## Validation

- 통합120장과 ACT2 22장, 총142PNG를1920×1080으로 렌더링했다.
- 다른119개 화면은 baseline과 픽셀이 같고119개 Notes도 내용이 같다.
- Full/ACT2 22개 화면과 S41 source/final 화면이 각각 일치한다.
- 두 패키지에서 바뀐 part는 S41 Slide XML과 Notes XML 각각 하나뿐이다.
  rels/masters/media/native 표·차트/embedded workbook 등 나머지 part는 바이트가 같다.
- 다른5개 ACT PPT는 바이트가 같다.120개19필드 Notes와142개 내장 Notes를 대조했다.
- Slide/Story Beat/Section/Trial/State/Claim ID, 시간/Mode와 Template 배정은 유지한다.
- ACT 시간42/64/90/96/85/40, 장수14/23/22/26/20/15,
  Mode Lecture186/Demo49/Case105/Reflection22/Transition23/Q&A32, 합계417분이다.
- 패키지·16:9·폰트 정책·layout finding0·first-party import 검사를 통과했다.
-44개 정적 Fallback 경로·역할을 유지하고 S41의 분류에 교육용 예시를 명시했다.
  현재 PPT/Notes/Preview 해시를 정렬했다.

로컬 렌더는 Malgun Gothic/Consolas에 Apple SD Gothic Neo/Menlo를 대체 등록했다.
Windows PowerPoint·실제 발표PC/교육장·제품/계정·실측 리허설은 UNVERIFIED다.
Demo 저장소 HEAD/tag/작업 상태와 Sites/발표 묶음은 변경하지 않았다.

## Remaining issues

P0: 이번 수정에서 발견하지 않음.
P1: 실제 발표 화면 가독성과4분 운영은 별도 확인이 필요하다.
P2: 이번 수정에서 새로 발견한 항목 없음.

## Artifacts

[수정 S41](../preview/full/S41.png), [통합 PPT](../AI_Dev_Training_Full.pptx),
[ACT2 PPT](../ACT_2.pptx), [ACT2 Notes](../notes/ACT_2_NOTES.md),
[ACT2 Preview](../preview/act2/montage.png), [현재 Map](../../plan/SLIDE_MAP.md),
[원본 Trial](../../plan/DEMO_MATRIX.md), [Decision](../../plan/DECISIONS.md),
[전달 식별자](FINAL_HANDOFF.md), [사용자 검증](USER_VALIDATION_CHECKLIST.md).
