# VS Code + GitHub Copilot 팁 추가 결과

Decision: DEC-0101. Date:2026-10-26. Baseline:`673dcc0`.
Status: LOCAL PASS; external environment and rehearsal UNVERIFIED.

## 추가 범위

기존 S03 뒤 새 S04 한 장만 Lecture2분 추가했다. 회사에서 사용하는 조합으로
같은 std::vector 예제를 선택→Context 첨부·확인→Ask 질문→답 확인하는 정적 도식이다.
이전 S04는 현재 S05, 이전 S12는 현재 S13이다. 두 장의 문구·디자인을 그대로 유지했다.
다른 기존116장의 내용·시각 구성·근거·장별 시간/Mode도 보존하고 번호/참조만 옮겼다.
기존 마지막 팁 찾아보기에도 새 행을 넣지 않았다. Notes는 신규19필드와 번호/경로만 정렬했다.

## 근거와 시간

GitHub/VS Code 공식 안내를2026-10-26 확인해 새 Notes에 연결했다.
실제 회사 UI·Copilot 응답·실행 캡처가 아니며 회사 계정 확인·조직 정책·전체 자동
Context 전달·정확성·시간 절감의 근거를 만들지 않았다. 새 Trial/비교 실험은 없다.
117장·412분, ACT 장수15/22/19/26/20/15, 시간45/64/82/96/85/40분.
Mode Lecture178/Demo49/Case105/Reflection22/Transition26/Q&A32분.
기존 ACT0의43분에2분만 더했고 다른 ACT 배정은 바꾸지 않았다.

## 검증

- 최종 Full117장과6ACT117장,234개1920×1080PNG를 각 최종 PPTX에서 렌더링했다.
- Full/ACT117개 화면의 픽셀 및 Notes 대응을 확인했다.
- 기존232개 화면 XML과232개 내장 Notes XML(Full+ACT)은 원본에 ID/현재 참조만
  변환한 결과와 바이트가 일치한다. 모든 기하·글꼴·색·기존 이미지·차트·워크북을 유지했다.
- S01–S03은 기존PNG와 바이트까지 동일하다. 기존 원본 이미지/차트/워크북38개 패키지
  파트의 바이트도 대조했다. Native 표 현재 S54/S63, 차트 S67/S94를 보존했다.
- 새 S04를 원해상도로, ACT0의15장을 순서대로 검토했다. 새 팁의 제목·코드·질문·
  조작3단계·교육용 도식 표기를 읽을 수 있고 잘림/겹침을 발견하지 않았다.
- 7개 PPTX의 first-party package/layout/import 검사를 완료했다. 기존 표의 추정 경고는
  동일하며, 로컬 검사는 Windows PowerPoint나 교육장 검증을 대신하지 않는다.
- 117개 Notes의19필드·ACT/Full 대응, 장별 Mode 합계,117개 Template 배정과412분을 대조했다.
- 현재44개 정적 fallback의 역할·근거를 유지하고 번호·경로·파일 식별자만 정렬했다.
  Trial 원문·State/Tag·Demo Repository·웹/Sites·발표 묶음은 변경하지 않았다.

## 유지할 외부 Gate

회사 계정의 Copilot 지원/사용 경로, Windows PowerPoint·실제 글꼴·교육장 투사·
시간 리허설은 UNVERIFIED다. 이번 추가 범위의 로컬 신규 잘림/겹침 이슈는 발견하지 않았다.
기존 검증·이력은 보존한다. 웹은116장 원본의 이전 판본이므로 별도 요청 시 동기화한다.

[새 팁](../preview/full/S04.png), [ACT0 전체](../preview/act0/montage.png),
[통합 PPT](../AI_Dev_Training_Full.pptx), [ACT0 PPT](../ACT_0.pptx),
[Notes](../notes/ACT_0_NOTES.md), [검사 기록](COPILOT_IDE_TIP_VALIDATION.json),
[설계](../../plan/COPILOT_IDE_TIP.md), [번호 이행](../../plan/SLIDE_ID_MIGRATION_117.md).
