# 작업 원칙

1. 이 프로젝트는 개발자 대상 ChatGPT & Codex 사내 교육자료 제작 프로젝트다. 최초6시간 기획에서 사용자 승인으로393분으로 확장했으며 허용 상한은720분이다. 현재 시간은 plan 문서를 따른다.
2. `plan/`에 저장될 기획 문서를 Source of Truth로 사용한다.
3. 기획 문서와 충돌하는 내용을 임의로 추가하거나 변경하지 않는다.
4. 불확실한 내용은 추측하지 않고 TODO 또는 미확정으로 표시한다.
5. 현재 ChatGPT/Codex 기능에 관한 사실은 필요할 경우 최신 OpenAI 공식 자료를 우선 확인한다.
6. 최종 PPT 제작은 별도 지시 전까지 하지 않는다.
7. 기존 문서를 수정할 때 핵심 기획 의도를 삭제하거나 축약하지 않는다.
8. 실질적인 작업 전 `plan/MASTER_PLAN.md`, 관련 `plan/INVARIANTS.md`,
   `plan/DECISIONS.md`를 먼저 확인하고, 해당 작업의 plan 문서가 있으면
   함께 확인한다.
9. Source of Truth 우선순위와 변경 통제는 `plan/INVARIANTS.md`,
   결정 기록은 `plan/DECISIONS.md`를 따른다. 이 파일은 상세 Governance를
   복사하지 않고 작업 시작점을 안내하는 Router로 유지한다.
