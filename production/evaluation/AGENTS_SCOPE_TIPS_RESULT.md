# AGENTS.md 실무 적용 팁 추가 결과

Decision: DEC-0104. Date:2026-10-26. Baseline:`981ae5e`.
Status: LOCAL PASS. Windows/제품·계정/교육장/실측 리허설 UNVERIFIED.

## 추가한 장과 연결

- S56 — AGENTS.md는 어디에 둘까?: 개인 기본값·루트 공통·모듈 전용 범위의 폴더 도식.
- S57 — 공통 지침에 모듈 지침을 더한다: 공통 제약은 유지하고 충돌하는 기본값을 구분.
- S58 — 적용할 지침을 실제로 읽었을까?: 시작 폴더별 자동 수집 경로와 파일 확인 요청.

기존 S55의 성과 회수→새3장 실무 적용→S59의 반복 절차 질문→S60 ACT3 제목으로 연결한다.
현재 마지막 찾아보기 S117에 새3장을 묶은 항목을 추가했다. 기존8개 항목과1분은 유지했다.
세 장 모두 실무 적용 팁·Context 관리 배지, T03-C, M 신규 확장 표시를 사용한다.

## 근거와 한계

OpenAI 공식 AGENTS.md 및 Projects 안내를2026-10-26 확인했다. 원본 링크와 세부 제한은
[설계](../../plan/AGENTS_SCOPE_TIPS.md)와 새 Notes의 Evidence / Source에 연결했다.
inspection/은 프로젝트 적용 예이며 실제 graypipe State/Trial을 새로 실행한 결과가 아니다.
지침의 적용 범위와 시작 시 자동 수집을 구분한다. 하위 폴더 전체 재귀 로드, 지침 준수 보장,
Agent 자기보고만으로 읽기 입증, 명령·권한 강제나 효과 개선으로 주장하지 않는다.

## 번호·시간·Notes

117→120장,412→420분. 추가 Lecture3/3/2분이다. 기존117장의 장별 배정은 불변이다.
ACT별 장수15/22/22/26/20/15, 시간45/64/90/96/85/40분.
Mode Lecture186/Demo49/Case105/Reflection22/Transition26/Q&A32분.
기존 Story Beat·Demo·Trial·State ID는 유지했다. 이전 S56–S117의 현재 번호·경로는+3이다.

120개 Markdown/240개 내장 Notes의19필드를 대조했다. S55의 전환과 S117의 위치 안내를
새3장에 맞췄다. 대조 중 ACT5 일부 내장 Notes가 이전 판본 번호를 갖고 있어 현재 Markdown과
정렬했다.7개 Time Management 필드의 오래된 전체/ACT/Mode 총계도 현재 값으로 맞췄다.
각 장의 발표 내용·시간·근거는 바꾸지 않았다. 과거 Trial 기록과 번호 이행 이력은 보존했다.

## 최종 PPTX와 렌더링 검토

- Full120장과 ACT별120장,7개 PPTX의 package/layout/import 검사를 완료했다.
- 최종7개 PPTX를 다시 읽어1920×1080 PNG240개를 생성했다.120개 Full/ACT 화면이 같다.
- 새 S56/S57/S58 및 S117을 개별 크기로 확인했다. 새 잘림·겹침·한글 깨짐은 발견하지 않았다.
- 120장 전체를20장씩 묶어 흐름과 시각 스타일을 점검했다. S55→팁3장→S59→ACT3가 이어진다.
- 찾아보기를 제외한 기존116장의 Native 본문·그림·표·차트·M 표시는 번호·참조 외 동일하다.
 해당116장의 픽셀도 번호/참조 text box 영역을 제외하면 이전과 같다.
- 기존 미디어·차트·워크북·Master/Layout 파트는 바이트가 같다. Native 표 S54/S66,
 차트 S70/S97을 유지한다.12Templates/28Variants를 유지하고 검증 범위를 상향하지 않았다.
- 44개 active fallback의 역할·근거는 유지하고 현재 경로·이미지/PPT/Notes 해시만 정렬했다.
- 기존 표의 소폭 텍스트 높이 추정 경고는 유지된다. 기존 화면보다 새로 악화된 부분은 없다.

로컬 렌더링은 Malgun Gothic/Consolas를 Apple SD Gothic Neo/Menlo로 대체한다.
Windows PowerPoint·실제 발표 글꼴·교육장·실제 계정/제품·실측 리허설은 검증하지 않았다.
새 Trial·실제 Codex 실행·Demo Repository·웹/Sites·발표 묶음 변경은 없다.

[통합 PPT](../AI_Dev_Training_Full.pptx), [ACT2](../ACT_2.pptx),
[3장 Preview](../preview/act2/AGENTS_scope_tips.png),
[전체 Preview](../preview/full/montage.png), [전체 Notes](../notes/FULL_SPEAKER_NOTES.md),
[검사 기록](AGENTS_SCOPE_TIPS_VALIDATION.json).
