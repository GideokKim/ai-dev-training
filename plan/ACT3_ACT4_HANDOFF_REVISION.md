# ACT3→ACT4 Connection Revision — DEC-0080

> Historical design: DEC-0097 supersedes the ACT4 maintenance priority, old
> S100 and its operating budget. Preserve this record as history. Current
> design: [goal-loop replan](ACT4_GOAL_LOOP_REPLAN.md); current IDs: [Map](SLIDE_MAP.md).

## 현재 Codex 제작 팁 — DEC-0093 (2026-10-25)

현재115장·406분(6시간46분). 기존113장의 Story·장별 시간/Mode·근거를 유지하고
이전 S62 뒤 새 S63에 Skill 제작 팁, 이전 S66 뒤 새 S68에 Custom Agent 제작 팁을
각 Lecture2분씩 추가한다. 이전 S63–S66은 +1, 이전 S67 이후는 +2다.
ACT 장수14/22/19/26/19/15, 시간43/64/82/96/81/40분. Mode164/73/88/21/28/32분.
ACT4는 S82–S100의19장·81분, ACT5는 S101–S115의15장·40분을 그대로 유지한다.
실무 적용 팁은19개이며 마지막 찾아보기 S112–S114의 기존 세 장에 모두 연결한다.
공식 자료를 각색한 요청·문서 도식이며 실제 생성·실행·TRIAL-008 제작 이력이 아니다.
12Templates/28Variants·19Notes 필드 유지. 새 Trial·Agent/Skill 설치·Demo 저장소·묶음 변경 없음.
[현재 팁 설계](CODEX_AUTHORING_TIPS.md), [113→115 번호](SLIDE_ID_MIGRATION_115.md),
[Slide Map](SLIDE_MAP.md). 아래 이전 판본의 번호·시간·검증은 이력으로 보존한다.
Windows/교육장/제품·계정/실측 리허설은 UNVERIFIED다.

## 이전 ACT3→ACT4 연결 — DEC-0092 (2026-10-25)

113장·402분과 장별 시간/Mode·번호를 유지한다. S72–S73의 Harness 재사용 가치를
보존하고, S74–S79에서 **사람의 반복 보정이 다음 작업의 체계 개선으로 돌아오지 않는 문제**를
드러낸다. 확인한 성공→사람의 추가 확인→이번 요청과 공통 지침의 차이→반복 보정→
판단할 기록→근거·검토 책임의 순서다. S75–S77은 CONCEPTUAL이며 실제 반복 실패가 아니다.
ACT4 S80–S98의19장·81분·장별 역할·시간·Mode·근거·Notes는 변경하지 않는다.
[현재 연결 설계](ACT3_LOOP_HANDOFF.md), [Slide Map](SLIDE_MAP.md),
[로컬 수정 결과](../production/evaluation/ACT3_LOOP_HANDOFF_REVISION.md)를 우선한다.
기존12Templates/28Variants·19Notes 필드·17개 팁·마지막 목록 S110–S112를 유지한다.
아래 이전 설계·번호·평가는 당시 판본의 이력이다. Windows/교육장/제품·계정/실측 리허설은
UNVERIFIED이며 새 Trial·발표 묶음·Demo 저장소 변경은 없다.

## 이전 기준 — DEC-0091 (2026-10-25)

113장·402분. ACT3 S56–S79는24장·92분, ACT4 S80–S98은 기존19장·81분을 보존한다.
S71 뒤 재사용2장과 이전 S72 설명5장을 넣고 이전 독립 C++ 전이 S73은 삭제했다.
현재 범위·근거·장별 시간은 [Slide Map](SLIDE_MAP.md), [설계](HARNESS_REUSE_AND_EXECUTION_CONTEXT.md),
[108→113 번호](SLIDE_ID_MIGRATION_113.md)를 따른다. 기존12Templates/28Variants·19Notes 필드 유지.
마지막 팁 요약은 S110–S112이며 Windows/교육장/제품·계정/실측 리허설은 UNVERIFIED다.
아래의 이전 Decision·Prototype·평가는 당시 판본의 이력이며 새 Trial이나 전체 환경 감사가 아니다.

> Current numbering: DEC-0084 /99slides/387minutes. This design record retains its edition IDs. Use [96→99 migration](SLIDE_ID_MIGRATION_99.md), [current Slide Map](SLIDE_MAP.md) and [ACT0 expansion](ACT0_CONTEXT_EXPANSION.md) for the current presentation.

## Current ACT4 refinement — DEC-0081

S76–S85 now distinguish evaluation scope, representative-task risks, rule
side effects, evidence-to-next-judgment Loop, actual reporting changes and
C++ transfer. S82 is the recording decision, S83 its partial follow-up,
and S84 maps the actual records to the model. S85 closes the applied
judgment; S86 retains the full-course recap. Preserve93/379, every Slide
budget/Mode, stable IDs,11Templates/27Variants and all claim boundaries.
S68–S75 retain DEC-0080. Current cues and details are in
[ACT4_FLOW_REVISION](ACT4_FLOW_REVISION.md); earlier descriptions remain
history where their literal screen/operation cues differ.

Date:2026-10-24. Baseline:`0898c81`. User approved the independent review.
Status: IMPLEMENTED / LOCAL RENDER REVIEW COMPLETE.

## Preserved scope

- 93slides/379minutes; ACT3 S50–S67,18slides/85minutes.
- ACT4 S68–S85,18slides/80minutes; all other ACTs remain unchanged.
- Every Slide ID, ACT, Section ID, per-slide time/Mode and existing Demo ID.
- Stable Story Beat identifiers; only S72–S74 mappings follow their moved roles.
- Actual Product success at STATE-04-PERF; separate conceptual DEMO-04A and
  observed evaluation/reporting DEMO-04B.
- Approved images, native S47/S55 tables and S58 chart/data.
- 11Templates/27Variants;32 static fallback files with the same membership.
- No Trial, product replay, Demo repository/State-tag change or presenter ZIP.

## Why this connection changes

The prior handoff repeats the project-change question at S67/S68. Maintenance
ownership is raised but not recovered in the conceptual case. Reusable Skill
and Workflow terminology needs a direct bridge. S72 chooses the response
before S73/S74 return to evidence/cause checks. S69 headings and S79 questions
need spacing. Repeated source/environment explanations obscure the new question.

## Current sequence

S63 actual role recap → S64 environment/review responsibility → S65 external
conditions → S66 C++ transfer → S67 one choice/location/owner → S68 recheck
trigger while retaining success → S69 separate aligned-case setup and term
bridge → S70 project-scope change and maintenance question → S71 current
request versus next-task instructions → S72 records to inspect → S73 scenario
information versus cause hypothesis → S74 response scope after assumed cause
confirmation → S75 human update/review and bounded change → S76 re-evaluation.

S79 consolidates the conceptual pattern with short wrapped questions and a
next-task return. S80 recalls the earlier environment observation to ask what
the evaluation/reporting system omitted; S81 separates result validity from
attribution; S82–S84 retain the actual decision/follow-up/unknowns.

## Slide responsibilities

| Slide | Revision | Fixed allocation |
|---|---|---|
| S59/S61 | Notes frame the two conditional-structure decisions as one connected question. |4/4min, original Mode|
| S63 | Summarize actual roles without repeating instructions/metrics. Notes only. |Demo3|
| S64 | Emphasize shared execution conditions and human evidence/result review. |Lecture4+Demo2|
| S65 | Presence/recording of conditions; defer detailed reporting history. Notes only. |Lecture3|
| S67 | Preserve one choice/location/owner and close with recheck timing. |Reflection3+Q&A5+Transition2|
| S68 | Brief actual-success boundary, maintenance question, one new recheck-trigger reflection. |Lecture3+Reflection1|
| S69 | Workflow as reusable procedure; Skill as earlier implementation; spaced columns. |Demo2 VISUAL|
| S70 | Preserve approved unit/integration diagram and recover maintenance ownership. |Demo2+Case2|
| S71 | Separate current-request patch and next-task instruction source. |Case3|
| S72 | Current source, selected instructions, environment/permissions, code/check records. |Demo2 CAPTURED|
| S73 | Scenario information is distinct from a cause hypothesis. |Lecture1+Demo1 CAPTURED|
| S74 | Compare request/global rule/source-Workflow response after assumed cause confirmation. |Case2|
| S75 | Cause-supported update, human review and next evaluation. |Lecture1+Case1|
| S76 | Recover S75 ownership before evaluation questions. Notes only. |Lecture1+Case3|
| S79 | Readable five-phase model, explicit human change and return to next task. |Lecture9+Demo2 VISUAL|
| S80 | Recall observations for evaluation/reporting question; do not repeat environment tour. |Demo2 CAPTURED|
| S81 | Focus the two reporting questions, preserve original metric/scope. Notes only. |Demo4 CAPTURED|

## Content redistribution without renumbering

| Current Slide | Material previously explained on | Current Beat mapping | Template |
|---|---|---|---|
| S72 |S73 investigation targets|BEAT-043/044|T08-C|
| S73 |S74 information/hypothesis|BEAT-043/044|T08-C|
| S74 |S72 response-scope comparison|BEAT-044/045|T08-B|

Other Beat IDs are retained. No new Story/Demo/Trial/Section identity is
created. DEMO-11 remains3Demo minutes at S72/S73; S74 uses its existing Case2.
Its original alternatives remain in the course rather than being removed.

## Ownership and evidence boundary

The conceptual reviewer/updater is a role example, not an actual company
assignment. One person may hold both roles. The role checks current Project
criteria against the reusable source, limits changes to supported causes,
and reviews re-evaluation evidence. It is not automatic model learning.

Workflow is a general reusable procedure. The earlier Skill is one observed
implementation of that role; this conceptual procedure is not the same file
or an extension of actual graypipe failure history. Scenario assumptions,
hypotheses and conditional responses are marked separately. No execution,
missing test, confirmed cause, repair or evaluated outcome is invented.

S65 and S80 use retained Meta evidence for different questions. Startup
warnings do not establish tool execution or task-result contribution.
Prompt-only attribution remains PARTIAL. Later reporting remains incomplete
and quality improvement is unmeasured.

## Visual and operational checks

Inspect S67→S68→S69→S70 and S71→S72→S73→S74→S75→S76 in sequence.
S69 has two separate headings; S79 has explicit question/example wraps and
five separated columns. All connectors are editable native objects.
R1–R5 are static speaker-focus cues; no native animation is claimed.

Render Full93+ACT3 18+ACT4 18,129PNGs. Check embedded Notes93x19, per-slide
budgets, unchanged other81visuals/75notes, current maps/runbooks/fallback
hashes and protected image/chart/table bytes/data. Check3finalPPTX packages.
Windows PowerPoint, target fonts/room, current product/account and timed
operation remain UNVERIFIED. Final results go to
[revision review](../production/evaluation/ACT3_ACT4_HANDOFF_REVISION.md).
