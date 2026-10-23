# AI 개발자 교육

## 목적

개발자 대상 ChatGPT & Codex 6시간 19분 사내 교육자료를 제작한다.
기획 기준은 [MASTER_PLAN](plan/MASTER_PLAN.md), 변경 이력은
[DECISIONS](plan/DECISIONS.md)를 따른다.

## 현재 상태

현재 제작 기준은 **DEC-0060 /93장·379분(6시간19분)**이다. ACT2는 S32–S49/18장·81분이며, 연구 분리·의존성 답변 회수·성과 정리와 ACT3 연결을 개선한다. 기존90장의 시간·근거 범위를 보존한다. [ACT2 흐름 개선](production/evaluation/ACT_2_FLOW_REVISION.md), [번호 대조](plan/SLIDE_ID_MIGRATION_93.md), [ACT2 미리보기](production/preview/act2/montage.png). 최종93장 렌더·93개 내장 Notes와 ACT/Full 정합성 검토를 완료했다.

최신 수정은 **DEC-0071 / S59 단일 조사와 역할 분리 비교**다. 같은 성능·빌드·테스트 조사를 한 Agent가 맡는 모습과 Subagent별로 나누는 모습을 비교한다. 주 Agent가 범위·결과 형식을 정하고 근거를 확인·통합하는 책임을 연결했다. 기존 가정·시간·근거 범위를 유지하고 S58→S59→S60 Notes와 렌더 흐름을 검토했다. [S59](production/preview/full/S59.png), [연속3장](production/preview/act3/S58-S60-continuity.png), [검토 기록](production/evaluation/S59_ROLE_SPLIT_REVISION.md).

이전 수정은 **DEC-0070 / S57–S58 작업·선택·검증 연결**이다. ACT3 앞부분을 재검토한 뒤 S57에 밝기 통계 작업과 기존 임시 리스트 구조를 보충했다. 두 후보의 선택을 S58의 실행시간·Python 할당 피크·동작 검증 세 영역으로 연결한다. Notes와 기존93장·379분, 근거 범위를 유지한다. [S57](production/preview/full/S57.png), [S58](production/preview/full/S58.png), [S56–S58](production/preview/act3/S56-S58-continuity.png), [검토 기록](production/evaluation/S57_S58_TASK_RESULT_REVISION.md).

이전 수정은 **DEC-0069 / S57 후보 선택의 시각적 정리**다. 두 후보의 공통 조건은 한 번만 표시하고, 실행시간 비교와 제외/선택을 두 행에 연결했다. 선택한 후보를 강조하며 상세 구현 설명은 Notes로 옮겼다. S56의 판단 질문과 S58의 제품 상태 검증을 연결하고93장·379분, 기존 근거 범위를 유지한다. [S57](production/preview/full/S57.png), [S56–S58](production/preview/act3/S56-S58-continuity.png), [검토 기록](production/evaluation/S57_CANDIDATE_SELECTION_REVISION.md).

이전 수정은 **DEC-0068 / S56 재사용 절차와 이번 판단**이다. 왼쪽 Skill의 재사용 방법을 오른쪽 이번 측정·검증 근거와 판단 질문으로 연결한다. 채택/보류는 교육용 판단 경로이며 실제 Trial 결과와 구분한다. Notes와93장·379분, 기존 관찰 범위를 유지한다. [S56](production/preview/full/S56.png), [S55–S57](production/preview/act3/S55-S57-continuity.png), [검토 기록](production/evaluation/S56_REUSABLE_PROCEDURE_REVISION.md).

이전 수정은 **DEC-0067 / S55 지침과 수행 기록 대응**다. S54의 본문 포함 근거에 이어, S55는 지침의 번역 요약과 실제 출력·변경 전 메시지·최종 diff를 세 행으로 대응한다. Notes와 현재93장·379분, 기존 관찰 범위를 유지한다. [S55](production/preview/full/S55.png), [S54–S56](production/preview/act3/S54-S56-continuity.png), [검토 기록](production/evaluation/S55_SKILL_ACTION_EVIDENCE_REVISION.md).

이전 수정은 **DEC-0066 / S53 연결선·S54 CLI 근거**다. S53 중앙의 연결선과 화살촉 굵기를 통일했다. S54는 CLI 목록, 명시 호출 요청, 실행 trace의 이름·경로·전체 본문을 구분해 보여준다. Notes와 전체93장·379분, 기존 관찰 범위를 유지한다. [S53](production/preview/full/S53.png), [S54](production/preview/full/S54.png), [S53–S55](production/preview/act3/S53-S55-continuity.png), [검토 기록](production/evaluation/S53_S54_SKILL_EVIDENCE_REVISION.md).

이전 내용 수정은 **DEC-0065 / S53 Skill 재사용과 공동 관리**다. 작업마다 바뀌는 요청 두 개와 공통 Skill 한 개를 연결하고 반복 절차를 한 곳에서 관리하는 이유를 시각화했다. S52의 한 작업 적용에서 S54의 실제 발견·호출 기록으로 이어지도록 Notes를 정렬했다. 기존93장·379분과 근거 범위는 유지한다. [S53 미리보기](production/preview/full/S53.png), [연속3장](production/preview/act3/S52-S54-continuity.png), [검토 기록](production/evaluation/S53_SKILL_REUSE_REVISION.md).

이전 **DEC-0064 / S52 한 작업에 목표·기준·방법 적용**을 유지한다. 목표가 들어오는 한 작업을 프로젝트 기준으로 감싸고 재사용할 수행 방법을 연결했다. S51과 설명을 나누고 S53의 공유 위치 질문으로 이어지도록 Notes를 정렬했다. 기존93장·379분과 근거 범위는 유지한다. [S52 미리보기](production/preview/full/S52.png), [연속3장](production/preview/act3/S51-S53-continuity.png), [검토 기록](production/evaluation/S52_TASK_COMPOSITION_REVISION.md).

이전 **DEC-0063 / S51 명령의 적용 시점과 판단**을 유지한다. 같은 테스트 명령을 변경 전·후에 사용하는 이유와 완료 판단을 연결하고 S50·S52 Notes를 정렬했다. 기존93장·379분과 근거 범위는 유지한다. [S51 미리보기](production/preview/full/S51.png), [연속3장](production/preview/act3/S50-S52-continuity.png), [검토 기록](production/evaluation/S51_COMMAND_WORKFLOW_REVISION.md).

이전 **DEC-0062 / ACT3 전체 흐름 개선**을 유지한다. 실제 Skill 발췌와 관찰 기록을 대응하고, Subagent·Memory의 가정 뒤 현재 선택을 회수하며, 실제 구성에서 전체 작업 환경으로 연결한다. ACT3는18장·85분, 전체93장·379분과 기존 근거 범위를 유지한다. [ACT3 전체 미리보기](production/preview/act3/montage.png), [ACT 경계 연결](production/preview/act3/continuity.png), [검토 기록](production/evaluation/ACT_3_FLOW_REVISION.md).

이전 **DEC-0061 / S40 코드 탐색 결과 확인**을 보존한다. 기존 crop 코드 발췌와 위치·요청한 동작·주변 근거의 세 질문을 중심으로 구성하고 RepoQA는 보조 연구로 뒀다. S39–S41 Notes를 정렬했으며 장수·시간·근거 범위는 유지한다. [S40 미리보기](production/preview/full/S40.png), [연속 3장](production/preview/act2/S39-S41-continuity.png), [검토 기록](production/evaluation/S40_CODE_EVIDENCE_REVISION.md).

## 이전 변경 이력 (당시 번호)

아래 이미지 링크는 현재 대응 장을 연다. 당시의 화면·기획·hash는 평가 기록과 해당 Git 판본을 따른다.

아래 이미지 링크는 현재 대응 장을 연다. 당시의 화면·기획·hash는 평가 기록과 해당 Git 판본을 따른다.

이전 수정은 DEC-0059의 S46 Context 정리/반복 절차 대비와 Harness 연결 도식이다. [현재 대응 S49](production/preview/full/S49.png), [검토 기록](production/evaluation/S46_WORKFLOW_HANDOFF_REVISION.md).

이전 수정은 DEC-0058의 S45 실제 문서 접근 비교/관찰과 해석 한계 도식이다. [현재 대응 S47](production/preview/full/S47.png), [검토 기록](production/evaluation/S45_ACCESS_COMPARISON_REVISION.md).

이전 수정은 DEC-0057의 S44 문서 접근·명세·기록된 답/해석 한계 도식이다. [현재 대응 S45](production/preview/full/S45.png), [검토 기록](production/evaluation/S44_CROP_EVIDENCE_REVISION.md).

이전 수정은 DEC-0056의 S43 두 요청창/관찰 질문 도식이다. [현재 대응 S44](production/preview/full/S44.png), [검토 기록](production/evaluation/S43_PROMPT_WATCH_REVISION.md).

이전 수정은 DEC-0055의 S42 문서 분리 전후/핵심 정보 보존 도식이다. [현재 대응 S43](production/preview/full/S43.png), [검토 기록](production/evaluation/S42_DOCUMENT_SPLIT_REVISION.md).

이전 수정은 DEC-0054의 S41 AGENTS.md 기본 안내/작업별 상세 구분이다. [현재 대응 S42](production/preview/full/S42.png), [검토 기록](production/evaluation/S41_CORE_DETAIL_REVISION.md).

이전 수정은 DEC-0053의 S40 작업 요청→AGENTS.md 안내→상세 명세 탐색 도식이다. [현재 대응 S41](production/preview/full/S41.png), [검토 기록](production/evaluation/S40_CONTEXT_PATH_REVISION.md).

이전 수정은 DEC-0052의 S39 연구별 과제·관찰·현재 Codex 적용 한계 도식이다. [현재 대응 S39](production/preview/full/S39.png), [검토 기록](production/evaluation/S39_RESEARCH_SCOPE_REVISION.md).

이전 수정은 DEC-0051의 S38 기본 안내·작업별 상세·재사용 절차 도식이다. [현재 대응 S38](production/preview/full/S38.png), [검토 기록](production/evaluation/S38_CONTEXT_MODEL_REVISION.md).

이전 수정은 DEC-0050의 S37 우측 분류 기준 교정이다. 두 Context 영역을 AGENTS.md 내부 지침·정보로 정렬했다. [현재 대응 S37](production/preview/full/S37.png), [검토 기록](production/evaluation/S37_AGENTS_CONTEXT_REVISION.md).

이전 수정은 DEC-0049의 S37 실제 요청창·청록 실선/회색 점선 Context 구분이다. [현재 대응 S37](production/preview/full/S37.png), [검토 기록](production/evaluation/S37_CONTEXT_RELEVANCE_REVISION.md).

이전 수정은 DEC-0048의 S36 프로젝트 초기/현재 프로젝트 비교와 AGENTS.md 정보 축적 도식이다. [현재 대응 S36](production/preview/full/S36.png), [검토 기록](production/evaluation/S36_CONTEXT_GROWTH_REVISION.md).

이전 수정은 DEC-0047의 S35 예시 테두리·프롬프트창/AGENTS.md 문서·화살표 연결이다. [현재 대응 S35](production/preview/full/S35.png), [검토 기록](production/evaluation/S35_CONTEXT_PLACEMENT_REVISION.md).

이전 수정은 DEC-0046의 S34 요청/주석 분리·지침 사용 관찰 강조다. [현재 대응 S34](production/preview/full/S34.png), [검토 기록](production/evaluation/S34_GUIDANCE_REVISION.md).

이전 수정은 DEC-0045의 사용 상황 라벨 분리다. [현재 대응 S22](production/preview/full/S22.png), [검토 기록](production/evaluation/PROMPT_USAGE_LABEL_REVISION.md).

이전 수정은 DEC-0044의 S17 요청·관찰 기록 대응이다. 다른89장과 시간·근거 범위를 유지했다. [현재 대응 S17](production/preview/full/S17.png), [검토 기록](production/evaluation/S17_REQUEST_ACTION_REVISION.md).

당시 번호 구성은 **90장 / DEC-0043**이었다. S21 뒤 실무 Prompt 방법 8장을 S22–S29로 추가하고 기존 S22–S82는 S30–S90으로 이동한다.
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
기존80/81/82장 판본의 검사 결과를 현재93장 판본의 검증으로 대신하지 않는다.
Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 현재 제품·계정과 리허설은
실제로 확인되기 전까지 UNVERIFIED다. Codex 메뉴는 공식 자료 기반 재구성이며
현재 앱이나 발표 환경에서 캡처한 화면으로 표현하지 않는다.

발표자 묶음 생성은 사용자 요청에 따라 보류한다. 기존
[묶음 안내](delivery/README.md)와 ZIP은 **80장 판본의 과거 스냅샷**이며,
현재93장 PPT·Notes의 배포본으로 사용하지 않는다.

기본 시연은 검증된 기록을 바탕으로 한 정적 PPT/PNG다. 현재 계정·제품에서
Live로 재현된 것처럼 표현하지 않는다. 교육은 순수 379분이며 휴식은 별도다.

Demo는 형제 저장소 `ai-dev-training-demo`에서 관리한다. 기존 State/tag와
실제 Trial 기록을 보존한다. 이 번호 변경은 Demo 코드·State를 변경하지 않는다.
초기 구조와 이전 제작·검토 상태는 Git 및 기획·평가 문서에 보존한다.
