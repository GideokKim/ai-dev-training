# S76 — 여러 작업자가 공유하는 프로젝트 기준

Decision: DEC-0141. Date:2026-11-03. Baseline:`460b30a`.
Status: LOCAL RENDER AND STRUCTURE VERIFIED.

## 화면과 연결

S76을 “누가 작업하더라도 프로젝트 기준은 같게”로 수정했다.
좌우에 같은 프로젝트의 작업자 A/B/C와 각자의 AI를 배치한다.
왼쪽은 전달하는 조건·절차·확인이 제각각이면 경로와 기준이 달라질 수 있다는 설계상 위험이다.
오른쪽은 명세·제약/수행 절차/검증 기준을 공통 Harness로 공유하는 세 독립 경로다.
세 결과를 합치지 않고 A/B/C를 분리했으며 “작업은 달라도, 판단 기준은 공유”로 회수한다.
기존 ACT0의 사람/AI 삽화를 역할 pictogram으로 재사용했고, 선·프레임·문자는 native editable 객체다.
실제 사람/Agent의 Before/After 실험이나 편차 감소 성과, 동일 코드·자동 준수·자동 조율을 나타내지 않는다.

S75 화면의 다른 프로젝트 재사용 가치는 유지한다. Notes의 다음 질문만 한 프로젝트의 공통 기준으로 연결했다.
S77의 목표 요청창·구현/검토 곡선 루프와 모든 화면 문구는 그대로다. Notes 첫 cue만 공통 기준에서 한 목표 수행으로 정렬했다.
기존 S76의 목표·명세와 실제 빌드/테스트/측정 명령·도구, 권한·실행 조건을 프로젝트에 맞출 지식은
새 공통 기준을 실제 적용하는 방법으로 S76 Notes의 Speaker Flow/Advanced Insight에 보존했다.

## 배정·근거·Notes

113장·389분, ACT3 18장·64분, ACT4 20장·85분은 그대로다.
S76 Lecture2분+Harness Q&A5분=7분을 유지하고 번호·Section/Beat·Template·다른 장의 시간을 바꾸지 않았다.
현재 S76은 기존 T03-A 안의 두 집단 관계도이며12Templates/28Variants를 유지한다.
Map의 기존 Evidence Type/Claim Status와 Notes의 기존 Evidence/Source 및 Claim Boundary를 보존했다.
사용 전후는 TEACHING_MODEL 비교이며 관찰된 제품 성과나 현재 제품 실행 결과가 아니다.
Notes113개의19필드·ACT/FULL 본문 일치와 두 최종 PPT의 내장 Notes131개를 대조했다.

## 렌더·검증

최종 통합113장과 ACT3 18장, 총131개 PNG를1920×1080으로 렌더링했다.
S75–S77의 시안을 읽고 S76의 제목·역할·독립 경로·공통 기준 라벨·여백·잘림/겹침을 확인했다.
S76을 제외한112장의 화면은 픽셀 단위로 같다. Full/ACT3의18장 렌더가 일치한다.
나머지5개 ACT PPT는 이전 파일과 바이트 단위로 같다. 기존 이미지·native 차트값을 유지했다.
새로 연결한12개 pictogram은 기존 승인된 사람/AI PNG만 사용하며 새 이미지·제품 화면을 만들지 않았다.
2개 PPTX의 패키지·16:9·글꼴 정책·native 표/차트·first-party import와 원본 기준 OOXML 검사를 통과했다.
Layout finding은0건이다.43개 정적 Fallback의 번호·역할·분류와 최신 경로/해시를 정렬했다.

로컬 렌더는 Apple SD Gothic Neo/Menlo를 Malgun Gothic/Consolas의 대체로 사용했다.
Windows PowerPoint·교육장·제품/계정·실측 리허설은 UNVERIFIED다.
새 Trial·측정·제품 실행은 없으며 Demo 저장소·Sites·발표 묶음은 변경하지 않았다.

## 산출물

[통합 PPT](../AI_Dev_Training_Full.pptx), [ACT3 PPT](../ACT_3.pptx),
[S76](../preview/full/S76.png), [현재 Map](../../plan/SLIDE_MAP.md),
[범위](../../plan/S76_SHARED_CRITERIA.md), [Notes](../notes/ACT_3_NOTES.md),
[검증 요약](S76_SHARED_CRITERIA_VALIDATION.json).
