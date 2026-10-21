# S35 — Task and Context Placement Revision

Date: 2026-10-21. Baseline: d23d784. Decision: DEC-0047.
Status: **COMPLETE — LOCAL RENDER AND NOTES PARITY CHECKED**.

## Presentation Change

왼쪽 작업별 요청 예와 오른쪽 프로젝트 공통 정보를 각각 테두리로 묶었다.
각 상자에서 화살표를 따라 프롬프트창 이미지와 AGENTS.md 문서 이미지로
시선이 이동한다. 하단의 목표 변화/여러 작업 재참고 비교는 유지한다.

두 PNG는 built-in image_gen으로 만든 교육용 도식이다. 실제 제품 UI·문서
캡처나 실행 기록이 아니다. [생성 프롬프트·출처](../../assets/slide-illustrations/task-context/README.md)를 보존했다.
핵심 예시·파일명·제목·수명 비교·테두리·화살표는 native 편집 요소다.

## Story and Claim Scope

S34의 실제 지침 적용 관찰 다음에 S35에서 정보의 범위·수명·위치를 정리하고,
S36의 정확한 정보 증가 질문으로 연결한다. 왼쪽 crop 수정과 README-only는
서로 다른 Task의 예이며 하나의 실제 Prompt가 아니다. AGENTS.md는 Context
저장 위치의 예시이며 모든 프로젝트 정보를 그 파일 하나에 넣으라는 뜻이 아니다.

TEACHING_MODEL, 기존 Claim Boundary, Slide ID, 장별 시간·Mode를 유지한다.
새 Trial·제품 UI 확인·성능 또는 토큰 절감 주장을 추가하지 않았다.
Demo Repository와 원본 Trial 문서는 변경하지 않았다.

## Rendering and Alignment

Full90장과 ACT2 15장의 최종 PPTX를 각각 다시 읽어105개 PNG를 생성했다.
S35를 원본 크기로 검토했고 별도 시각 검토에서도 수정 권고는 없었다.
텍스트 잘림·겹침, 이미지 비율, 테두리에서 이미지로 향하는 화살표를 확인했다.

다른89장의 화면 텍스트·PNG·Notes 레코드는 baseline과 동일하다.
90개 내장 Notes와 ACT/Full Markdown19개 필드를 대조했다.
Full/ACT2 PNG15쌍과 두 PPTX의 package/layout/font-policy/import를 확인했다.
자세한 파일 식별자와 검사 수치는 [검증 JSON](S35_CONTEXT_PLACEMENT_REVISION_VALIDATION.json)을 따른다.

전체90장/368분, ACT2 15장/70분, S35 Lecture5분 및 모든 장별 Mode는 불변이다.
Malgun Gothic/Consolas를 유지하고 로컬 preview는 Apple SD Gothic Neo/Menlo로
대체 렌더링했다. Windows·발표 PC·교육장·제품/계정·실측 리허설은 UNVERIFIED다.
다른 ACT PPT와 기존 ZIP/HTML은 갱신하지 않았다.

## Outputs

- [수정 S35](../preview/full/S35.png)
- [통합 PPT](../AI_Dev_Training_Full.pptx)
- [ACT2 PPT](../ACT_2.pptx)
- [ACT2 Notes](../notes/ACT_2_NOTES.md)

정상 산출물만 기존 origin/main에 일반 commit/push한다.
실제 checkpoint는 Git 이력과 완료 보고에 기록한다.
