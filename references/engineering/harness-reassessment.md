# Harness reassessment — public case and course interpretation

Checked:2026-10-25. Decision:DEC-0083. Slides:S91–S93.

## 공개 출처가 뒷받침하는 범위

- SRC-0236 / CLM-0040: [Anthropic의 공개 사례](https://claude.com/resources/articles/building-agents-when-to-fold-subagents-into-your-main-agent-loop), Diane Sarkis,2026-10-22. 일부 기업 Agent에서 Router/Planner/담당 Subagent를 주 Loop로 합치는 선택과 end-to-end 평가 필요성을 설명한다. 독립 병렬 업무·Context·권한 경계가 필요할 때는 Subagent를 유지할 수 있다고 한정한다. 공개된 공급사 사례이며 독립적인 일반 성능 검증이 아니다.
- SRC-0137: [OpenAI Harness engineering](https://openai.com/index/harness-engineering/), Ryan Lopopolo,2026-02-11. 저장소 지식을 작은 안내와 상세 출처로 조직하고 지속적인 정리·유지 작업을 수행한 특정 팀의 경험을 제공한다. 모든 Harness를 제거하라는 결론은 아니다.

## 교육용 해석

모델이 맡을 수 있는 범위·플랫폼 제공 기능·업무 조건이 실제로 바뀌면, 이전에
정당했던 구조도 현재 역할과 비용·경계를 다시 본다. 목표·명세·검증 요구를
보존하고 겹치는 역할/지침은 통합 후보, 효용이 사라진 우회 절차는 제거 후보로
검토한다. 같은 대표 작업·입력·기준으로 결과·회귀·시간/비용·남은 위험을 보고
확인된 범위만 채택하거나 되돌린다는 과정의 판단 모델이다.

## 주장하지 않는 내용

현재 Codex에서의 재현·현재 플랫폼 기능의 자동 대체·단일 Agent의 보편적 우월성·
우리 Demo의 토큰/시간/비용 절감·새 비교 실험·실제 통합 성공은 확인하지 않았다.
S91의 구조는 각색한 Native 도식이며 실행 Screenshot이 아니다. S93은 평가 설계만
보여주며 PASS/FAIL·측정값을 만들지 않는다. 원출처의 수치·모델명은 본 교육의
일반 성과처럼 가져오지 않는다. 실제 도입은 각자의 현재 환경에서 별도 확인한다.
