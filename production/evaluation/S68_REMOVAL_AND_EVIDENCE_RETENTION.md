# S68 — 본편 삭제와 Skill 근거 보존 결과

Decision: DEC-0131. Date:2026-11-02. Baseline:`fa4e41f`.
Status: LOCAL RENDER AND STRUCTURE VERIFIED.

## 변경 내용

이전122장판 S68의 독립 상세 대응표를 본편에서 삭제했다. Demo 코드를 모르는 청중에게
구현 파일·측정 횟수·테스트 집계의 맥락을 새로 요구하지 않고, S67에서 확인 원칙을 회수한다.
S67의 마지막 두 문장을 “지침 포함과 실제 수행은 별도로 확인한다”,
“우리 업무의 절차도 Skill로 만들어 볼 수 있을까?”로 정리했다.
현재 S68은 기존 Skill 제작 팁이고, S69는 재사용할 절차와 이번 작업의 답을 나누는 장이다.
S65 발견 → S66 명시 요청 → S67 본문 포함·확인 원칙 → S68 제작 팁 → S69 절차/판단으로 이어진다.
이전 S69–S122는 현재 S68–S121로 한 칸 당겼다. Story/Beat/Section/Demo/Trial/State/Claim ID는 유지한다.

삭제한 상세3행표·관찰 횟수·계획 조건·허용 범위·테스트 결과·출처·해석 한계는
[S67 보충 Notes](../notes/ACT_3_NOTES.md)와 [별도 참고 기록](../../references/demo-evidence/skill-instruction-action-record.md)에 남겼다.
참고 기록에는 삭제 전 S68의19필드 Notes 전문과 당시 PNG의 정확한 복사도 보존했다.
현재 본편 시간에 다시 계산하거나, 실제 실행 UI 캡처·새 Trial로 표현하지 않는다.

## 범위와 근거

- TRIAL-008/DEC-0017/BEAT-021의 실제 관찰을 그대로 보존한다. CLI0.154.0의 기록이며 현재 Desktop 검증이 아니다.
- 본문 포함과 실제 수행, 선택한 지침/행동의 대응과 전체 지침 준수·Skill 단독 효과를 구분한다.
- 실제 수행을 미확인으로 바꾸지 않았으며, 상세 설명의 위치만 Notes·참고 자료로 옮겼다.
- “작업 또는 interface가 visible plan을 요구할 때”라는 조건과 실제3회·1/1·11/11을 유지한다.
  이 숫자를 Skill이 요구한 고정 기준으로 바꾸지 않는다.
- 기존 이미지·측정값·원자료·Claim Boundary와 S61/S71의 승인된 삭제 문구, S64 A/B/C 선택 도식은 유지했다.
- 새 Trial·비교 실험·제품 실행·리허설을 하지 않았다. Demo 저장소·Sites·발표용 묶음을 변경하지 않았다.

## 시간·Notes·Mapping

현재121장·411분이다. 삭제한 장의6분(Demo3+Case3)은 다른 장에 재배분하지 않았다.
S65–S67의1/2/2Demo분은 유지한다. ACT 장수14/23/22/27/20/15,
시간42/64/90/90/85/40, Mode Lecture186/Demo46/Case102/Reflection22/Transition23/Q&A32다.

121개의19필드 Notes와 Full/ACT 내장 Notes242개를 대조했다. 현재형 총시간의 오래된 표기와
S77의 이전 번호 참조도 현재 구조에 맞췄다. S69/S70의 DEMO-03 시간 표기는5Demo분으로 정렬했다.
Runbook의 DEMO-05 참조는 S22 도입·S23–S24의8Demo분, DEMO-09는 S77의3Demo분으로 현행화했다.
기존 판본의 문장·시간은 Historical 기록으로 보존한다.
Template Mapping121행,12Templates/28Variants를 유지한다. Native 표는 S54,
Native 차트는 S71/S98이다. 삭제한 이전 S68의 native table은 참고 자료에 정확히 보존했다.

## 렌더·구조·시각 검증

- 통합121장과 ACT0–5의121장, 총242개 최종 PNG를1920×1080으로 렌더링했다.
- 6개 ACT montage로 전체 흐름을 확인하고 S65–S70·S43·S95·S118을 개별 검토했다.
  S67→제작 팁 연결, 뒤 번호와 ACT 경계를 확인했으며 새 P0/P1 잘림·겹침을 발견하지 않았다.
- 수정한 S67 외에 유지한120장의 화면을 이전 판과 비교했다.66장은 픽셀이 같고54장은 번호·참조 영역만 다르다.
  본문 참조가 바뀐 곳은 S118/S120이며 나머지는 상단 번호다. 기존 모든 이미지 바이트와 차트 수치는 같다.
- Full/ACT121장의 픽셀이 일치한다. 7개 PPTX의19필드 내장 Notes가 Markdown과 모두 같다.
- 7개 패키지의ZIP/관계/컨텐츠타입,16:9, layout finding0, font policy, native 표·차트,
  first-party import 및 원본 기준 OOXML 검사를 통과했다.
- 기존 S04 연결선2건과 S54 표 높이 추정0.01inch 경고는 남아 있다. 이번 변경에서 새 경고는 없다.
- 현재45개 Fallback 경로·분류·해시를 정렬했다. 삭제한 상세표는 참고 자료로 보존하며 Live 승인으로 바꾸지 않았다.

로컬 렌더는 Apple SD Gothic Neo/Menlo를 Malgun Gothic/Consolas의 대체로 사용한다.
Windows PowerPoint·발표PC/교육장·제품/계정·실측 리허설은 UNVERIFIED다.
배정된411분은 합계 검증이며 실제 발표 소요시간을 검증한 결과가 아니다.

## 산출물

[통합 PPT](../AI_Dev_Training_Full.pptx), [ACT3 PPT](../ACT_3.pptx),
[S67](../preview/full/S67.png), [새 S68 제작 팁](../preview/full/S68.png),
[전체 Notes](../notes/FULL_SPEAKER_NOTES.md),
[현행 Map](../../plan/SLIDE_MAP.md), [삭제/보존 기획](../../plan/S68_REMOVAL_AND_EVIDENCE_RETENTION.md),
[번호 대응표](../../plan/SLIDE_ID_MIGRATION_121_DEC0131.md),
[검증 요약](S68_REMOVAL_AND_EVIDENCE_RETENTION_VALIDATION.json), [현재 전달 안내](FINAL_HANDOFF.md).
