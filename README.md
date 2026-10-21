# AI 개발자 교육

## 목적

개발자 대상 ChatGPT & Codex 6시간 사내 교육자료를 제작한다.
기획 기준은 [MASTER_PLAN](plan/MASTER_PLAN.md), 변경 이력은
[DECISIONS](plan/DECISIONS.md)를 따른다.

## 현재 상태

현재 공식 구성은 **81장·360분 / DEC-0037**이다. S07 다음에 Codex 진입 경로를
안내하는 S08을 추가했고, 종전 S08–S80은 S09–S81로 한 칸씩 이동한다.
S07 Lecture 3분을 S07 2분 + S08 1분으로 나눠 ACT별 시간과 Mode 총량을 유지한다.
S09는 사람·AI Agent가 함께 볼 수 있는 정보와 사람이 최종 결정·책임지는 범위를 구분한다.
S10은 제조 검사장비의 ROI crop 이후 작업을 교육용 파이프라인으로 보여준다. 실선은 앞서 조사한 crop, 점선은 해당 검사 Task에서 추가로 정의·연결할 범위이며 실제 함수 미구현을 뜻하지 않는다.
기존 Story와 근거 범위, M1–M9 하단 연결 표시는 유지하며 2순위 보강은 보류한다.

- [최신 통합 PowerPoint](production/AI_Dev_Training_Full.pptx)
- [ACT 0 PowerPoint](production/ACT_0.pptx)
- [전체 발표자 Notes](production/notes/FULL_SPEAKER_NOTES.md)
- [공식 Slide Map](plan/SLIDE_MAP.md)
- [80장 → 81장 번호 대조와 문서 범위](plan/SLIDE_ID_MIGRATION.md)
- [현재 S10 검사 파이프라인 검토](production/evaluation/S10_INSPECTION_PIPELINE_REVISION.md)
- [이전 S08 추가·번호 정렬 검토](production/evaluation/CODEX_ENTRY_INSERTION.md)
- [현재 전달 안내와 후보 해시](production/evaluation/FINAL_HANDOFF.md)
- [예상 질문·답변](production/presenter/EXPECTED_QA.md)
- [사용자 실환경·리허설 체크리스트](production/evaluation/USER_VALIDATION_CHECKLIST.md)

최신 PPT·Notes·렌더 검토 결과는 해당 제작·평가 기록을 함께 확인한다.
기존 80장 판본의 검사 결과를 81장 판본의 검증으로 대신하지 않는다.
Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 현재 제품·계정과 리허설은
실제로 확인되기 전까지 UNVERIFIED다. Codex 메뉴는 공식 자료 기반 재구성이며
현재 앱이나 발표 환경에서 캡처한 화면으로 표현하지 않는다.

발표자 묶음 생성은 사용자 요청에 따라 보류한다. 기존
[묶음 안내](delivery/README.md)와 ZIP은 **80장 판본의 과거 스냅샷**이며,
현재 81장 PPT·Notes의 배포본으로 사용하지 않는다.

기본 시연은 검증된 기록을 바탕으로 한 정적 PPT/PNG다. 현재 계정·제품에서
Live로 재현된 것처럼 표현하지 않는다. 교육은 순수 360분이며 휴식은 별도다.

Demo는 형제 저장소 `ai-dev-training-demo`에서 관리한다. 기존 State/tag와
실제 Trial 기록을 보존한다. 이 번호 변경은 Demo 코드·State를 변경하지 않는다.
초기 구조와 이전 제작·검토 상태는 Git 및 기획·평가 문서에 보존한다.
