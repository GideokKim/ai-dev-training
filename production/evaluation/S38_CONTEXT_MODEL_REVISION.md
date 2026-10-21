# S38 — Context Scope, Timing and Reusable Procedure Diagrams

Date: 2026-10-21. Baseline: 04f0d38. Decision: DEC-0051.
Status: **COMPLETE — LOCAL RENDER AND NOTES PARITY CHECKED**.

## Presentation Change

S37의 AGENTS.md 관련성 사례를 다음 세 가지 native 관계 도식으로 일반화했다.

- 기본 안내: README 수정/crop 수정/성능 조사가 공통 목적·제약·범위/검증 지침을 함께 참고한다.
- 작업별 상세: README 수정은 빌드 안내로, crop 수정은 이미지 명세로 향한다.
- 반복 절차: 교육용 성능 조사 A/B가 변경 전 측정→조사→검증 절차를 함께 쓴다.

각 도식 아래에서 공통 적용/해당 작업의 상세 확인/동종 작업의 재사용을 명시한다.
세 열 사이에 순차 단계 화살표를 넣지 않고 각 열의 다른 관계를 보여준다.
기존 제목·Story·4분 Lecture를 유지하고 S39의 제한된 연구 질문으로 넘긴다.
창·선·화살표·텍스트는 native 편집 요소이며 새 이미지는 만들지 않았다.

## Story and Claim Boundary

S37은 실제 기록에서 관련 지침과 불필요한 상세가 함께 있었다는 관찰이다.
S38은 그 문제를 정보의 범위·제공 시점과 수행 방법으로 나눠 보는 교육용 모델이다.
S39에서 모든 정보를 늘 넣으면 충분한가를 외부 연구의 제한된 범위로 살펴본다.

앞의 두 관점은 정보의 범위·제공 시점이고 마지막은 일의 수행 방법이다.
상호배타적인 제품 분류 체계가 아니며 재사용 절차도 필요할 때 찾아 쓸 수 있다.
도식의 화살표는 실제 자동 검색·완벽한 Routing을 관찰한 결과가 아니다.
성능 조사 A/B와 절차는 설명용 예이며 실제 TRIAL-006/007 기록, 당시 STATE-02에
저장되거나 실행된 Skill/Workflow로 표현하지 않는다. 토큰 절감·성능 효과는 주장하지 않는다.

TEACHING_MODEL과 기존 Claim Status를 유지했다. 새 제품 사실·Trial·Demo 변경은 없다.
공식 OpenAI 기능 분류나 제품 조작법을 추가하지 않고 후속 ACT의 역할도 유지한다.

## Validation

Full90장과 ACT2 15장 최종 패키지를 다시 읽어105개 PNG를 렌더링했다.
S38 원본 크기에서 작업 라벨·선 연결·공통 안내·선택적 상세·절차 순서와 가독성을 검토했다.
별도 시각 검토에서도 잘림·겹침이나 추가 수정 권고는 없었다.
다른89장의 텍스트·PNG·Notes와 다른 ACT PPT는 baseline을 유지한다.
90개 내장 Notes/19개 필드, Full/ACT2 PNG15쌍과 package/layout/font-policy/import를 대조했다.
[검증 JSON](S38_CONTEXT_MODEL_REVISION_VALIDATION.json)에 최종 식별자를 기록한다.

전체90장/368분, ACT2 15장/70분, S38 Lecture4분과 장별 배분은 불변이다.
지정 Malgun Gothic/Consolas와 로컬 Apple SD Gothic Neo/Menlo 대체 렌더를 유지한다.
Windows·발표 PC·교육장·제품/계정·실측 리허설은 UNVERIFIED다.
묶음 ZIP/HTML은 갱신하지 않는다. 정상 산출물만 기존 origin/main에 일반 push한다.

## Outputs

- [수정 S38](../preview/full/S38.png)
- [통합 PPT](../AI_Dev_Training_Full.pptx)
- [ACT2 PPT](../ACT_2.pptx)
- [ACT2 Notes](../notes/ACT_2_NOTES.md)
