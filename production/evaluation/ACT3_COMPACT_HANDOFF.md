# ACT3 — Harness에서 한 작업의 Loop로 짧게 전환

Decision: DEC-0136. Date:2026-11-02. Baseline:`d1a2471`.
Status: LOCAL RENDER AND STRUCTURE VERIFIED.

## 변경 내용

이전 S78–S82의 다섯 장을 현재 S78 전환 한 장으로 교체했다.
제목은 “준비한 작업 체계로, 한 목표를 끝까지 수행하려면?”이다.
하단 Harness 기반(지침·Skill·도구·실행 환경) 위에 한 작업의 목표→구현→검토를 배치하고,
문제가 남으면 같은 구현으로 돌아오는 수정·재검토 점선을 표시했다.
하단 핵심 문장은 “이제는 한 작업의 다음 행동과 완료 판단을 연결한다”다.
텍스트와 관계도는 편집 가능한 PowerPoint 요소이며 새 이미지나 실행 캡처는 만들지 않았다.

Harness가 실패해야 Loop로 교체한다는 인과관계를 만들지 않는다.
재사용할 작업 기반과 같은 목표의 다음 행동·완료 판단이라는 설계 초점의 차이만 연다.
상태 전달 필드·모델 분리·완료/중단 분기·연구 설명은 ACT4 본문에 유지하고 전환에 복사하지 않았다.
현재 S79의 ACT4 제목을 거쳐 S80의 기존 다음 요청 사례와 S81의 완료 기준으로 이어진다.
S80 Notes의 입구는 삭제한 세 요청·성찰을 이미 보았다는 전제를 제거했다.

S77은 화면을 유지하고 기존 설명 2분 뒤 Harness Q&A 5분을 운영한다.
질문을 마친 뒤 S78의 2분 전환으로 넘어간다. Loop의 세 성찰 질문을 미리 운영하지 않는다.
현재 S111의 마지막 찾아보기에서 삭제한 “다음 수정에 넘길 기록” 팁을 제거했다.
다른 8개 항목의 제목·현재 ID를 유지하고 오른쪽 Goal 항목만 빈 자리로 올렸다.
삭제한 상세 설명을 다른 장이나 활성 Notes에 이식하지 않았다.

## 번호·시간·Notes

현재 **114장·392분(6시간32분)**. ACT 장수는 14/23/22/19/20/16,
시간은 42/64/90/67/85/44분이다. ACT3는 S60–S78, ACT4는 S79–S98, ACT5는 S99–S114다.
이전 S83–S118은 현재 S79–S114로 네 칸 당겼다.
이전 전환 구간의 Lecture 8분·Reflection 3분을 제외하고 Q&A 5분은 S77로 옮겼다.
기존 Transition 2분은 새 S78에서 운영한다. 기존 18분 구간은 Q&A 포함 7분이 된다.
Mode는 Lecture 172 / Demo 44 / Case 102 / Reflection 19 / Transition 23 / Q&A 32분이다.
S77과 새 전환 외 남은 장별 시간·Mode는 그대로이며 ACT4의 20장·85분을 유지했다.

114개 Notes의 19필드와 Full/ACT 내장 Notes 228개를 대조했다.
Native 표 S54·차트 S70/S90과 기존 차트값·이미지를 보존했다.
Memory는 S104, Goal 팁은 S96/S97, 마지막 찾아보기는 S111–S113이다.
기존 Section·Beat의 lineage를 보존하고 새 근거·Demo·Trial·Claim ID를 만들지 않았다.
12개 Template/28개 Variant의 설계 목록은 유지하고 전환은 기존 T03-B를 사용한다.

## 렌더·검증

통합 114장과 ACT0–5의 114장, 총 228개 최종 PNG를 1920×1080으로 렌더링했다.
6개 ACT montage와 S77–S81·S111을 개별 검토했다. 제목·글자·선·도형의 새 P0/P1 문제를 발견하지 않았다.
Notes 최종 정렬 전후의 화면은 모두 같고, Full/ACT의 114장 PNG도 일치한다.
새 S78과 수정된 S111을 제외한 남은 112장은 이전 판과 비교했다.
77장은 픽셀이 같고, 35장의 차이는 번호·참조 텍스트 영역에만 있다.
ACT4 20장의 화면·주제·배정·기존 근거 범위를 유지했다.

7개 최종 PPTX의 ZIP·관계·컨텐츠 타입·16:9·글꼴 정책·native 표/차트·first-party import와
이전 파일 기준 OOXML 검사를 통과했다. 패키지별 layout finding은 0건이다.
43개 정적 Fallback의 분류·역할을 유지하고 현재 번호·경로·해시를 정렬했다.
이전 S78–S82는 해당 manifest에 없으므로 새 전환을 실제 Demo 기록으로 추가하지 않았다.
새 S78의 정적 PPT/PNG는 로컬 파일로 검증했으며 제품 실행이나 Live 승인 근거가 아니다.

로컬 렌더는 Apple SD Gothic Neo/Menlo를 Malgun Gothic/Consolas의 대체로 사용했다.
Windows PowerPoint·실제 발표 PC/교육장·제품/계정·실측 리허설은 UNVERIFIED다.
392분은 배정 합계이며 실제 발표시간을 검증한 결과가 아니다.
Demo Repository·Sites·발표 묶음은 변경하지 않았다. 새 Trial·제품 실행·리허설은 수행하지 않았다.

## 산출물

[통합 PPT](../AI_Dev_Training_Full.pptx), [ACT3 PPT](../ACT_3.pptx),
[새 S78](../preview/full/S78.png), [전체 Notes](../notes/FULL_SPEAKER_NOTES.md),
[현재 Map](../../plan/SLIDE_MAP.md), [전환 기획](../../plan/ACT3_COMPACT_HANDOFF.md),
[번호 대응표](../../plan/SLIDE_ID_MIGRATION_114_DEC0136.md),
[검증 요약](ACT3_COMPACT_HANDOFF_VALIDATION.json), [현재 전달 안내](FINAL_HANDOFF.md).
