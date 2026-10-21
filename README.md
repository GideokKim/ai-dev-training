# AI 개발자 교육

## 목적

개발자 대상 ChatGPT & Codex 6시간 8분 사내 교육자료를 제작한다.
기획 기준은 [MASTER_PLAN](plan/MASTER_PLAN.md), 변경 이력은
[DECISIONS](plan/DECISIONS.md)를 따른다.

## 현재 상태

현재 번호 구성은 **90장 / DEC-0043**이다. S21 뒤 실무 Prompt 방법 8장을 S22–S29로 추가하고 기존 S22–S82는 S30–S90으로 이동한다.
기존 S01–S21, Story·Trial·State·근거 경계와 승인된 시각물은 보존한다.
기존 장별 시간을 유지하고 신규 Lecture 7분·Case 1분을 추가해 ACT 1 63분·전체 368분으로 확장한다. 새 PPT·전체 렌더·90개 내장 Notes의 로컬 정합성 검토를 완료했다.

- [실무 기법8장·90장 통합 검토](production/evaluation/PROMPT_ENGINEERING_ADDITION_RESULT.md)
- [추가8장 한눈에 보기](production/preview/act1/prompt-methods-montage.png)
- [최신 통합 PowerPoint](production/AI_Dev_Training_Full.pptx)
- [ACT 0 PowerPoint](production/ACT_0.pptx)
- [전체 발표자 Notes](production/notes/FULL_SPEAKER_NOTES.md)
- [공식 Slide Map](plan/SLIDE_MAP.md)
- [82장 → 90장 번호 대조와 문서 범위](plan/SLIDE_ID_MIGRATION_90.md)
- [이전81장 → 82장 이행 이력](plan/SLIDE_ID_MIGRATION_82.md)
- [이전80장 → 81장 이행 이력](plan/SLIDE_ID_MIGRATION.md)
- [이전 Prompt·시간선·82장 정렬 검토](production/evaluation/PROMPT_TIMELINE_REVISION.md)
- [이전 S10 검사 파이프라인 검토](production/evaluation/S10_INSPECTION_PIPELINE_REVISION.md)
- [이전 S08 추가·번호 정렬 검토](production/evaluation/CODEX_ENTRY_INSERTION.md)
- [현재 전달 안내와 후보 해시](production/evaluation/FINAL_HANDOFF.md)
- [예상 질문·답변](production/presenter/EXPECTED_QA.md)
- [사용자 실환경·리허설 체크리스트](production/evaluation/USER_VALIDATION_CHECKLIST.md)

최신 PPT·Notes·렌더 검토 결과는 해당 제작·평가 기록을 함께 확인한다.
기존80/81/82장 판본의 검사 결과를 현재90장 판본의 검증으로 대신하지 않는다.
Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 현재 제품·계정과 리허설은
실제로 확인되기 전까지 UNVERIFIED다. Codex 메뉴는 공식 자료 기반 재구성이며
현재 앱이나 발표 환경에서 캡처한 화면으로 표현하지 않는다.

발표자 묶음 생성은 사용자 요청에 따라 보류한다. 기존
[묶음 안내](delivery/README.md)와 ZIP은 **80장 판본의 과거 스냅샷**이며,
현재90장 PPT·Notes의 배포본으로 사용하지 않는다.

기본 시연은 검증된 기록을 바탕으로 한 정적 PPT/PNG다. 현재 계정·제품에서
Live로 재현된 것처럼 표현하지 않는다. 교육은 순수 368분이며 휴식은 별도다.

Demo는 형제 저장소 `ai-dev-training-demo`에서 관리한다. 기존 State/tag와
실제 Trial 기록을 보존한다. 이 번호 변경은 Demo 코드·State를 변경하지 않는다.
초기 구조와 이전 제작·검토 상태는 Git 및 기획·평가 문서에 보존한다.
