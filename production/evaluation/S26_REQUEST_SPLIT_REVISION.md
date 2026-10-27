# S26 완료 조건 요청 — 3장 분할 결과

Decision: DEC-0112. Date:2026-10-27. Baseline:`2f76021`.

## Result

기존 S26을 S26–S28로 나눴다.121장·417분, ACT1 S15–S38의24장·64분이다.
기존 S27–S119는 S29–S121로+2 이행했다. 기존 ACT별 시간과 전체Mode를 보존한다.

| Slide | Role | Time / Mode | Evidence |
|---|---|---|---|
| S26 | 무엇을 확인해 달라고 요청할까? — 확인과 범위5행만 | Lecture1.5분 | 기존 Python 확인 기록 + 교육용 범위 대응 |
| S27 | 비어 있지 않으면 올바른 결과일까? — 기대2개/명세 위반3개 | Lecture1.5분 | 실행하지 않은 C++ 반례 |
| S28 | 기대 결과를 요청에 적는다 — 입력·기대·확인·보고 | Lecture1분 + Reflection1분 | 교육용 요청·assertion |
| Total | 범위 선택 → 조건의 한계 → 완료 조건 요청 | 5분 = Lecture4 + Reflection1 | 새 Trial·성과 없음 |

S25 사람의 수용 판단에서 S26의 범위 선택, S27의 약한 조건 반례, S28의 요청 문장으로
이어지고 S29–S36 요청 문장 도구를 거쳐 S37/S38 반복 Context와 ACT2 S39로 연결한다.
각 장에 역할 하나를 두고 vector·코드·5행 목록·Prompt가 한 화면에서 경쟁하지 않게 했다.

## Evidence / claim

TRIAL-002는 기존 macOS Codex CLI0.154.0/Python 단일 관찰이다. 실제 요청 전문,
반열림 crop 명세,1줄 수정, 관련3/3·전체11/11·CLI 샘플·diff 확인을 바꾸지 않았다.
관련3건에는 resize도 있어 crop만의3건이라고 하지 않는다. Benchmark는 당시 미실행이다.

S27의 잘못된 {2,3,4}, EXPECT_FALSE와 S28의 요청·EXPECT_EQ는 C++ 교육용 예시다.
실제 assertion 원문·잘못된 출력이 통과한 기록·새 C++ 실행·PASS/FAIL로 표시하지 않는다.
각 화면 footer와 Notes에 그 경계를 남겼다. vector 동등 비교는 해당 입력의 길이·순서별
값을 비교하며 size assertion의 교육상 중복 의미는 Notes에 보존했다. 하나의 예시가
모든 입력·경계·플랫폼의 정확성을 증명하지 않는다. 새 성과·비용 절감·Prompt 우월성은 없다.

## Notes / planning alignment

121개19필드 Notes와 모든 PPT 내부 Notes를 일치시켰다. S25의 다음 장 cue,
S37의 회수 문장, 뒤 번호·정적경로·마지막 팁 찾아보기 참조를 정렬했다.
이전 S21 교육용 요청이라고 남아 있던 S24 Notes와 S18 전환의 오래된 설명은
이미 승인된 DEC-0111의 실제 S21 요청→S22 행동 기록 사실에 맞췄다. S15 Notes의
이전 전체420분은 현재417분으로 맞췄다. 이 Notes 정렬로 다른 화면은 바꾸지 않았다.

Slide Map, Template Map, 현재 Governance/기획 안내와 번호 이행표를 갱신했다.
T06-C와 T04-A를 재사용해12Templates/28Variants를 유지한다. 기존 원문·과거평가·
파일명·Decision/Trial/State/Claim/Beat/Section ID는 당시 이력으로 보존했다.

## Validation

- 최종7개 PPTX 구조·크기·글꼴 정책·first-party import 검사를 통과했다.
- 통합121장과 ACT별121장, 총242개의1920×1080 PNG를 최종 PPT에서 렌더링했다.
- Full/ACT 모든121개 화면이 픽셀 단위로 일치하고242개 내장 Notes가 공식 Notes와 같다.
- ACT별 montage 전체를 검토하고 S25–S29, S37–S39와 S118–S120을 개별 화면으로 확인했다.
- 새3장의 제목·본문·vector·코드·근거 footer와 앞뒤 연결에서 새 잘림·겹침을 발견하지 않았다.
- 남은118장의 본문·이미지·수치·객체를 보존했다.115장은 ID 영역을 제외한 픽셀이 같고,
  마지막3장의 차이는 찾아보기 참조 번호에 한정된다. 새3장은 source 렌더와도 같다.
- 원본 media·native 표/차트·embedded workbook 바이트가 그대로다. 표S55/S67, 차트S71/S98.
-121장·417분, ACT42/64/90/96/85/40분, Lecture186/Demo49/Case105/Reflection22/
  Transition23/Q&A32분을 중복 없이 대조했다. 다른118장의 개별 배정도 같다.
- 기존44개 정적 Fallback의 역할·경로·SHA-256을 현재 번호와 파일로 정렬했다.

로컬 렌더는 Malgun Gothic/Consolas를 Apple SD Gothic Neo/Menlo로 대체했다.
Windows PowerPoint·실제 발표PC 글꼴·교육장 투사·현재 제품/계정·실측 리허설은
UNVERIFIED다.90/90/120초 배정의 실제 운영 적합성도 리허설 전에는 확정하지 않는다.
Demo 저장소·Sites·발표 묶음·원격 설정은 변경하지 않았다.

## Remaining items

P0: 이번 변경에서 발견하지 않음.
P1: 실제 발표 환경의 글꼴·가독성 및5분 진행을 기존 사용자 검증 Gate에서 확인.
P2: 추가 변경 없음. 기존 미검증 항목을 PASS로 올리지 않음.

## Artifacts

[통합 PPT](../AI_Dev_Training_Full.pptx), [ACT1](../ACT_1.pptx),
[S26](../preview/full/S26.png), [S27](../preview/full/S27.png), [S28](../preview/full/S28.png),
[ACT1 montage](../preview/act1/montage.png), [전체 montage](../preview/full/montage.png),
[전체 Notes](../notes/FULL_SPEAKER_NOTES.md), [기획](../../plan/S26_VERIFICATION_REQUEST_SPLIT.md),
[번호 이행](../../plan/SLIDE_ID_MIGRATION_121.md), [현재 Map](../../plan/SLIDE_MAP.md).
