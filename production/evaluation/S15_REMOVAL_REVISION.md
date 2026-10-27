# 이전 S15 삭제 및 ACT0→ACT1 연결 결과

Decision: DEC-0108. Date:2026-10-27. Baseline:`ea74a74`.

## 변경

이전 S15의 제조 검사 파이프라인 전환 장을 삭제했다. S14는 기존 사람/Agent·자료·
최종 판단 책임과 “Agent는 제안하고, 사람은 최종 선택·승인한다”를 보존하고,
“결정한 목표·조건·완료 기준을 요청에 담는다”로 다음 ACT를 연다.
S14→새 S15 ACT1 제목→새 S16 모호한 filter 요청으로 이어진다. 이전 S16–S120은
S15–S119다. ACT1의 filter→crop 예시 전환 자체는 이번 범위에서 바꾸지 않았다.

Q&A3분은 S14에 남기고 이전 S15의 Transition3분을 줄였다. S14는 설명2+Q&A3=5분,
전체119장·417분이다. ACT 장수14/22/22/26/20/15, 시간42/64/90/96/85/40분,
Mode Lecture186/Demo49/Case105/Reflection22/Transition23/Q&A32분이다.
그 외 장별 배정·Story Beat·Trial/State·연구/제품/교육 모델의 근거는 유지했다.

현재 Map119장·Template Mapping·119개 Notes/19필드와7개 PPT를 정렬했다.
현재 참조·Preview 경로·44개 정적 Fallback·체크리스트·최종 전달 안내를 갱신했다.
과거 source factory/설정·이미지 파일명·출처 원문·DEC-0037 등은 당시 이력으로 보존했다.

## 로컬 검토

통합119장과 ACT별119장을 최종 파일에서 렌더링했다.7개 파일의 구조/layout/import,
238개 내장 Notes,119개의 장별 시간/Mode와 Full/ACT119개 화면 일치를 확인했다.
S14의 새 배치와 S13→S14→S15→S16 연결, 마지막 팁 참조를 직접 확인했다.
새 잘림·겹침은 발견하지 않았다. 다른118장은 현재 번호/참조 영역 외 픽셀이 같다.
Source 생성본과 최종 파일의 S14/S15/S16/S116/S117/S118도 일치한다.

원본 그림·표·차트·워크북과 대상 외 객체는 보존했다. 표는 S53/S65,
차트는 S69/S96으로 이동한다. 이전 S15/마지막 번호의 남은 정규 PNG7개를 제거했다.
출처 필드 원문은 모든 Notes에서 그대로다. UI 재구성·과거 CLI 관찰·가상 사례·연구의
경계를 강화하거나 바꾸지 않았다. 실측 리허설·Windows·제품/계정·교육장은 UNVERIFIED다.
로컬 글꼴은 Malgun Gothic/Consolas를 Apple SD Gothic Neo/Menlo로 대체해 렌더링했다.
Demo 저장소·Sites·발표 묶음은 변경하지 않았다.

[통합 PPT](../AI_Dev_Training_Full.pptx), [ACT0](../ACT_0.pptx), [ACT1](../ACT_1.pptx),
[S14](../preview/full/S14.png), [새 S15](../preview/full/S15.png),
[전체 Notes](../notes/FULL_SPEAKER_NOTES.md), [기획](../../plan/ACT0_S15_REMOVAL.md),
[번호 이행](../../plan/SLIDE_ID_MIGRATION_119.md).
