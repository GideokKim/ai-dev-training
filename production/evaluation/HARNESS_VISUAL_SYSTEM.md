# Harness — 구조·재사용·결합의 시각화 개선

Decision: DEC-0134. Date:2026-11-02. Baseline:`4ada660`.
Status: LOCAL RENDER AND STRUCTURE VERIFIED.

## 주석 대응

주석의 제목·선택 객체를 기준으로 최신119장판 S75–S77을 수정했다.
이전 번호로 S77/S78이라 부른 재사용·결합 장은 최신 S76/S77이다. 번호를 추가로 바꾸지 않는다.

| 현재 Slide | 변경 |
|---|---|
| S75 | 목표·Context·Skill → 주 Agent → 검증 도구·사람의 검토와 실행 환경을 유지하고 점선의 선택 Subagent 독립 조사·위임·결과 회수를 추가 |
| S76 | 큰 공통 Harness 모듈과 프로젝트 A/B/C 내부의 같은 모듈을 연결해 재사용을 표현. 요청한 Audience footer 삭제 |
| S77 | 같은 Harness 모듈 + 프로젝트 Context 문서 → 프로젝트에 맞춘 개발 시스템의 조립 관계로 표현 |

S75에서 결과 확인·통합은 주 Agent, 근거·결과의 검토는 사람의 책임으로 구분한다.
선택 Subagent는 앞서 배운 역할을 연결한 교육용 모델이다. 실제 밝기 통계 Demo에 추가하거나
실행한 것이 아니다. Lecture4분에서 모델을 설명하고 CAPTURED Demo2분은 기존 실제 단일 Agent
구성·검증 근거에만 대응한다. 앞 S74의 실제 구성과 뒤 모델의 선택 노드를 혼동하지 않는다.

S76은 재사용할 수행 흐름·도구 연결·검토/보고 틀을 같은 모듈로 반복해 보여준다.
다른 프로젝트에서 자동으로 설치되거나 동작을 검증한 결과가 아니다. 실제 이식·시간/성능 절감 결과를 만들지 않았다.
S77에서는 프로젝트 목표·명세·실제 명령/도구·권한/실행 조건을 연결한다. Context 문서는 이런
프로젝트별 정보와 연결 조건을 나타내는 도식이며 모두 하나의 md 파일에 넣으라는 뜻이 아니다.
조립된 시스템은 실행·검증·검토 책임의 관계를 보여준다. 성능·품질 향상의 측정 주장이 아니다.

## 흐름·범위

S74 실제 구성 → S75 선택 역할을 포함한 Harness 모델 → S76 공통 기반의 재사용 →
S77 프로젝트별 연결 → S78 실제로 확인한 성공 범위의 기존 흐름을 유지했다.
기존 제목·Primary Role·Section·Story Beat·근거 유형과 모든 시간·Mode를 유지했다.
S75 Claim Status는 TEACHING_MODEL을 유지하면서 선택 Subagent의 범위를 더 명확히 한정했다.
S76의 ‘재사용 설계 예시’ 문구를 제거하고 M 연계는 유지했다.

119장·405분, ACT장수14/23/22/24/20/16과 ACT시간42/64/90/80/85/44,
Mode Lecture182/Demo44/Case102/Reflection22/Transition23/Q&A32는 그대로다.
S75는6분(Lecture4+CAPTURED Demo2), S76/S77은각Lecture2분이다.
Template은 기존 T03계열을 적용했다. S77은T04-A에서기존T03-A로 바꾸며
T03=57/T04=16,12Templates/28Variants를 유지한다. Native 표S54·차트S70/S95도 같다.

ACT3/FULL Notes의 해당3개 블록만19필드와 화면 시선 순서에 맞췄다.
다른116장의 Map·Notes·Template행과 나머지ACT Notes/패키지는 그대로다.
Memory 선행 설명이나 삭제한 두 감사 장을 복구하지 않았다. 새 Trial·제품 실행은 하지 않았다.

## 렌더·구조 검증

- 통합119장과 ACT3 24장, 총143개 PNG를1920×1080으로 렌더링했다.
- S75–S77 개별 화면과 ACT3 montage를 시각 검토했다. 검토한 파일럿3장과 최종 패키지 렌더의 픽셀도 같다.
  새 P0/P1 잘림·겹침·제목/하단 가독성 문제를 발견하지 않았다.
- 다른116장의 화면은 이전과 픽셀이 같고 텍스트도 동일하다. Full/ACT3의24장 렌더도 일치한다.
- 새3장은 native text/shape/connector로 편집 가능하며 전체 Slide를 이미지로 만들지 않았다.
  연결선과 화살표의 선 두께는 같은 규칙으로 구현했다.
- 두 최종 PPTX의ZIP/관계/컨텐츠타입,16:9,layout finding0,font policy,native 표·차트,
  first-party import 및 이전 파일 기준 OOXML 검사를 통과했다.
- 143개 내장 Notes를 Markdown과 대조했다.119개의19필드·시간·Mode·근거 ID를 검증했다.
- 기존 이미지 바이트·차트 범주/수치 cache가 같다. 다른5개 ACT PPT는 이전과 바이트가 같다.
- 기존 S04 연결선2건/S54 표 높이 추정0.01inch 경고는 유지된다. 새 대상3장에는 새 경고가 없다.
- 기존43개 정적Fallback의 역할·분류·경로를 유지하고 변경한 파일의 해시를 정렬했다.

로컬 렌더는 Apple SD Gothic Neo/Menlo를 Malgun Gothic/Consolas의 대체로 사용한다.
Windows PowerPoint·발표PC/교육장·제품/계정·실측 리허설은 UNVERIFIED다.
배정 시간의 합계 검증을 실제 발표 리허설로 취급하지 않는다.
Demo Repository·Sites·발표용 묶음을 변경하지 않았다.

## 산출물

[통합 PPT](../AI_Dev_Training_Full.pptx), [ACT3 PPT](../ACT_3.pptx),
[S75](../preview/full/S75.png), [S76](../preview/full/S76.png), [S77](../preview/full/S77.png),
[전체 Notes](../notes/FULL_SPEAKER_NOTES.md), [시각 설계](../../plan/HARNESS_VISUAL_SYSTEM.md),
[현재 Map](../../plan/SLIDE_MAP.md), [검증 요약](HARNESS_VISUAL_SYSTEM_VALIDATION.json),
[현재 전달 안내](FINAL_HANDOFF.md).
