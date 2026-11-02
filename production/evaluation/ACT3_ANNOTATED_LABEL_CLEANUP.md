# ACT3 — 주석으로 지정한 문구5개 삭제

Decision: DEC-0129. Date:2026-11-02. Baseline:`c4fe85c`.
Status: LOCAL RENDER AND STRUCTURE VERIFIED.

## 삭제 범위

| Slide | 객체 ID | 삭제 문구 |
|---|---|---|
| S61 |13| 실제 요청의 핵심 발췌·번역 |
| S61 |23| 보존된 요청 요약의 번역 |
| S61 |5| 실제 요청 발췌·요약 — Audience footer1 |
| S70 |6| 해당 코드 변경의 측정 결과 · Harness/Skill 단독 효과는 미입증 — Audience footer2 |
| S70 |24| 후보 비교와 별도로, 실제 제품 변경 전후를 같은 조건에서 확인한 기록 |

그 외 텍스트·이미지·배치·폰트·수치·native chart·표·연결선·Footer/M표시는 유지했다.
S70의 첫 Footer “1024×768 합성 입력 · Python 할당 피크(RSS 아님)”은 그대로다.
소스의 실제 위치는 retained act2-continuity.mjs의 S50, act3-continuity.mjs의 S58이다.
현재 footer registry의 S61/S70 표시 목록과 Map을 정렬했다.

## Notes와 근거 범위

120개의19필드 Notes와 내장 Notes는 모두 이전과 바이트가 같다.
S61의 실제 발췌/보존 요약 차이, 설명용 삽화, 전역 Harness 영향에 따른 귀속 한계는 Notes에 남아 있다.
S70의 제품 상태·입력·환경·동일 조건, Python allocation peak/RSS 구분과 인과 한계도 Notes에 그대로 남아 있다.
화면 문구 삭제가 새로운 성과·일반화·현재 제품 검증을 뜻하지 않는다.
새 Trial·제품 실행·Demo 저장소 변경은 없다.

## 검증

- 통합120장과 ACT3 26장을1920×1080으로 렌더링했다. 개별 PNG146개.
- 실제 S61/S70 PNG를 검토했다. 선택한 문구만 삭제됐으며 이번 변경에서 잘림·겹침을 발견하지 않았다.
- 다른118장 화면은 픽셀이 같다. S61/S70에서도 선택한 객체의 영역 밖 픽셀은 같다.
- 두 현재 소스의 렌더와 최종 PNG가 일치하고, Full/ACT3 26장 렌더도 일치한다.
- Full/ACT3에서는 각2개의 slide XML만 바뀌었다. 원래 DOM에서 지정 객체만 제거한 결과와 같다.
- 모든 Notes·media·chart·workbook·relationships·Theme/Layout 등 다른 package part와 다른5개 ACT PPT는 바이트가 같다.
- 120개19필드 Notes와146개 내장 Notes를 대조했다.
- 120장·417분, ACT 장수14/23/22/26/20/15와 시간42/64/90/96/85/40을 유지한다.
- 전체 Mode Lecture186/Demo49/Case105/Reflection22/Transition23/Q&A32와 각 장 배정은 같다.
  S61/S70은 각각 기존 Case5분이다. Template/Variant·모든 근거 ID도 유지한다.
- 패키지 무결성·16:9·layout finding0·first-party import·native 표/차트 검사와
  기존 파일 기준 OOXML schema/관계/컨텐츠 타입 검사를 통과했다.
- 대상2장에는 layout 경고가 없다. 기존 S04 연결선2건/S54 표 추정0.01inch 경고는 그대로다.
- 정적 Fallback44개의 역할·분류·경로·해시는 유지하고 현재 PPT/Notes/montage 식별자를 맞췄다.

로컬 렌더는 Apple SD Gothic Neo/Menlo를 Malgun Gothic/Consolas의 대체로 사용한다.
Windows PowerPoint·실제 발표PC/교육장·제품/계정·실측 리허설은 UNVERIFIED다.
Demo Repository·Sites·발표 묶음을 변경하지 않았다.

## 산출물

[수정 S61](../preview/full/S61.png), [수정 S70](../preview/full/S70.png),
[통합 PPT](../AI_Dev_Training_Full.pptx), [ACT3 PPT](../ACT_3.pptx),
[보존 Notes](../notes/ACT_3_NOTES.md), [Map](../../plan/SLIDE_MAP.md),
[Decision](../../plan/DECISIONS.md), [현재 파일 식별자](FINAL_HANDOFF.md).
