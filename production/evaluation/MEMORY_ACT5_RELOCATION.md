# Memory — ACT5 이동과 지식 재사용 사례 개선

Decision: DEC-0133. Date:2026-11-02. Baseline:`ec6a1fb`.
Status: LOCAL RENDER AND STRUCTURE VERIFIED.

## 결과

이전 S74를 ACT5의 현재 S109로 옮겼다. S108 사람의 결과 수용 → S109 다음에도 쓸 지식 선별 →
S110 AI가 일할 조건과 확인 경로의 설계로 이어진다. ACT3는 S73의 역할 분리 판단에서
S74의 실제 구성 역할과 S75 Harness 구조로 바로 연결한다.

새 S109의 제목은 “이번에 알아낸 것 중, 다음에도 쓸 것은?”이다.
세 개의 native 영역으로 이번 작업 Context → 재사용할 지식/Memory → 다음 작업 Context를 보여준다.
C++ 프로젝트에서 같은 성능 비교 조건을 다음 작업에서도 다시 찾는다는 교육용 가정을 사용한다.
왼쪽 ‘Release 빌드·동일 입력’은 이 가상 프로젝트에서 확인한 비교 조건이다.
이번 로그·측정값은 작업 기록으로, 다시 쓸 조건은 출처·적용 범위/버전·재확인 조건과 구분해 남긴다.
다음 작업에서는 현재 조건과 대조해 활용하거나 재확인·갱신한다.

이는 실제 C++ 실행·측정·Memory 저장/회수 기록이나 과거 Python Demo에서 새로 발견한 조건이 아니다.
Release 조건을 모든 환경의 보편 규칙으로 주장하지 않는다. 제품의 자동 저장·회수나 조사시간·토큰 절감 성과를
주장하지 않으며 별도 Memory 구현을 요구하지 않는다. 원래 출처가 있으면 그 출처를 참조한다.
S111–S113의 구성요소 통합·제거와 이 장의 지식 선별은 서로 다른 판단으로 유지했다.

## 앞뒤 연결·선행 언급

- S73: 다음 지식 감사 예고 대신 실제로 사용한 구성의 역할로 연결한다.
- 현재 S74/S75: Memory 설명을 먼저 봤다는 전제를 제거하고 기존 실제 구성·Harness의 역할을 유지한다.
- 현재 S82: 선행 Memory footer를 ‘다음 수정에 필요한 상태만 전달’로 바꿨다.
- 현재 S99: footer의 Memory 선행 언급만 제거하고 별도 프레임워크가 필수는 아니라는 범위는 유지한다.
- S108→S109→S110: 수용한 결과에서 다음 작업에도 쓸 지식을 고르고, 그 판단까지 작업 조건 설계로 회수한다.
- S116: 옮긴 팁의 S109 번호·새 제목과 기록 S82·Goal S101을 정렬했다.

과거 Evidence/Claim Boundary의 원자료 포인터는 유지한다. 앞 ACT의 발표 흐름에서 Memory를 먼저
강의하지 않으며, 화면의 첫 Memory 표기는 현재 S109다. 기존에 삭제한 본문 포함 확인/지식 출처 감사 장을
다시 넣거나 그 내용을 다른 Slide에 흡수하지 않았다.

## 번호·시간·Notes

119장·405분 유지. 이전 S74→현재 S109, 이전 S75–S109는-1, 나머지는 그대로다.
ACT 장수14/23/22/24/20/16, ACT시간42/64/90/80/85/44다.
기존4분(Demo2 VISUAL+Case2)을 ACT3에서 ACT5로 함께 옮겼다. 전역 Mode는
Lecture182/Demo44/Case102/Reflection22/Transition23/Q&A32이며 모든 장별 배정은 그대로다.

원 Section3F·BEAT-026–028의 학습 목표와 근거 ID를 유지하고 ACT5 배치를 명시했다.
119개19필드 Notes와 Full/ACT238개 내장 Notes를 대조했다. 새 장의 3열 화면·운영 순서도 정렬했다.
Native 표 S54·차트 S70/S95,12Templates/28Variants와 기존 차트값·이미지를 보존했다.
Template S108/S110의 개인 문제/다음 행동 참조도 현재 S114/S115로 정렬했다.

## 렌더·검증

- 통합119장 + ACT0–5의119장, 총238개 최종 PNG를1920×1080으로 렌더링했다.
- 6개 ACT montage와 새 S109·S108/S110·S82/S99·S116을 개별 검토했다.
  새 P0/P1 잘림·겹침·번호 누락을 발견하지 않았다.
- 새로 설계한 S109 외118장의 화면과 텍스트를 이전 판과 대조했다.
  81장은 픽셀이 같고34장은 번호/참조만,3장은 요청된 footer·찾아보기 제목 영역만 다르다.
- Full/ACT119장 픽셀이 일치하고238개 내장 Notes가 Markdown과 같다.
- 7개 PPTX의ZIP/관계/컨텐츠타입,16:9,layout finding0,font policy,native 표·차트,
  first-party import 및 이전 파일 기준 OOXML 검사를 통과했다.
- 기존 S04 연결선2건/S54 표 높이 추정0.01inch 경고는 그대로다. 새 경고는 없다.
- 기존43개 정적Fallback의 분류·역할은 유지하고 번호·경로·해시를 정렬했다.

로컬 렌더는 Apple SD Gothic Neo/Menlo를 Malgun Gothic/Consolas의 대체로 사용한다.
Windows PowerPoint·발표PC/교육장·제품/계정·실측 리허설은 UNVERIFIED다.
405분은 배정 합계이며 실제 발표시간을 검증한 결과가 아니다.
Demo Repository·Sites·발표용 묶음은 변경하지 않았다. 새 Trial·제품 실행·리허설을 하지 않았다.

## 산출물

[통합 PPT](../AI_Dev_Training_Full.pptx), [ACT5 PPT](../ACT_5.pptx),
[새 S109](../preview/full/S109.png), [전체 Notes](../notes/FULL_SPEAKER_NOTES.md),
[현재 Map](../../plan/SLIDE_MAP.md), [이동·개선 기획](../../plan/MEMORY_ACT5_RELOCATION.md),
[번호 대응표](../../plan/SLIDE_ID_MIGRATION_MEMORY_ACT5_DEC0133.md),
[검증 요약](MEMORY_ACT5_RELOCATION_VALIDATION.json), [현재 전달 안내](FINAL_HANDOFF.md).
