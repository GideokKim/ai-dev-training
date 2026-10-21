# S17 — Request / Observed Action Revision

Date:2026-10-21. Baseline:dc149ca. Decision:DEC-0044.
Status: **COMPLETE — LOCAL RENDER AND NOTES REVIEW PASSED**.

## Change and Story Role

S17의 일반적인 작업 흐름 재진술을 실제 요청과 관찰 기록의 대응으로 바꿨다.
제목은 “요청한 과정은 기록에도 남았을까?”다. 실제 요청의 핵심 지시 세 가지를
왼쪽에, 기록으로 확인할 수 있는 대상·행동·이벤트 선후 관계를 오른쪽에 둔다.

| Row | Actual request excerpt / translation | Observed record summary |
|---|---|---|
| 01 | 먼저 현재 실패를 재현 | 실패한 crop 테스트를 찾아 재현한 기록. 대상은 test_crop_excludes_end_coordinate |
| 02 | 관련 구현과 호출 경로 조사 | CLI-to-pipeline-to-crop 조사 기록. 제품 호출 기호 cli.main / pipeline.process_image / transform.crop 대조 |
| 03 | 편집 전에 짧은 계획을 알리고 승인 대기 없이 계속 | 파일 변경 이벤트보다 앞선 계획 보고. 끝 좌표 명세·기존 테스트·API 보존 계획 |

하단에서04 최소 수정 내용은 S18,05 확인·보고 결과는 S19로 연결한다.
S18의 한 줄 diff·너비 변화와 S19의 검증 수치는 S17에서 반복하지 않는다.
S16은 교육용 요청 예시이며 S17의 실제 Trial 입력과 구분한다.

## Evidence and Boundaries

- 실제 요청: plan/DEMO_MATRIX.md, TRIAL-002 / Prompt used,395–413행.
- 실제 관찰 요약: 같은 문서의 Investigation and visible plan checkpoint,415–420행.
- 대상 코드 식별자: TRIAL-001의330–332행과 Demo 저장소의 STATE-00 테스트·CLI·pipeline 소스를 읽기 전용으로 대조했다.
- 행 번호는 이 문서 작성 시점의 locator다. 원본 문서는 변경하지 않았다.
- 우측은 **관찰 기록 요약**이다. 최초 재현 명령·실패 출력·계획 발언 원문,
  원시 CLI 이벤트 파일·시각을 확보한 것처럼 표현하지 않는다.
- TRIAL-002 요약 자체는 failing crop test와 CLI-to-pipeline-to-crop으로 기록한다.
  구체 테스트명·호출 기호는 위 자료로 식별한 대상이며 원문 로그 인용이 아니다.
- 제품 호출 경로를 Agent의 파일 읽기 순서·내부 사고 경로로 표현하지 않는다.
- 수정 후 Verification 절의 명령을 최초 재현 명령으로 배치하지 않았다.
- 기존 단일 macOS Codex CLI0.154.0 실행 범위다. 새 Trial, Prompt 단독 효과,
  반복성·일반 우월성·현재 Desktop 검증 근거를 추가하지 않았다.

## Notes and Planning Alignment

- S17의19개 Notes 필드를 실제 대응·시간 진행·근거 수준·다음 장 연결에 맞췄다.
- 2분 안에서 출처 구분15초, 재현30초, 호출 관계25초, 계획 보고30초,
  다음 장 연결20초로 진행한다. 실제 리허설 시간 적합성은 UNVERIFIED다.
- Full Notes에 같은 레코드를 반영하고 PPT 내부 Notes와 대조했다.
- S18/S19를 포함한 다른89개 Notes 레코드는 baseline과 동일하다.
- S17 Map, T05-A 매핑·관찰 근거 Component, Transition, M 연계 이유,
  DEMO-05 도입 안내를 정렬했다. Template 수·Variant 수는 바꾸지 않았다.

## Rendering and Preservation

- 최종 통합90장과 ACT1의21장, 총111개 PNG를1920×1080으로 렌더링했다.
- S17과 S16–S19 연결을 개별 화면으로 검토했다. 새 잘림·겹침·이미지 누락을
  발견하지 못했다. 우측 코드 식별자는24px(18pt)로 표시한다.
- 기존 Light Engineering Workbench,16:9, 글꼴 지정·색·Evidence 구분과 작은
  M5/M6 연계 footer를 유지한다. Native text/shape 편집이 가능하다.
- 다른89장 Full PNG와 화면 텍스트는 baseline과 동일하다. S18/S19 화면도 동일하다.
- ACT1/Full의21개 같은 Slide PNG가 일치하며90개 내장 Notes를 대조했다.
- 갱신한2개 PPTX의 package/layout/font-policy/import 검사 finding은0이다.
  로컬 preview는 Apple SD Gothic Neo/Menlo 대체 렌더링이며 최종 지정 글꼴은
  Malgun Gothic/Consolas다. Windows PowerPoint·실제 글꼴·교육장 투사는 UNVERIFIED다.
- 상세 수치·파일 식별자는 [검증 JSON](S17_REQUEST_ACTION_REVISION_VALIDATION.json)에 기록한다.

## Time and Git Scope

전체90장/368분, ACT1 21장/63분, S17 Lecture2분을 유지한다.
모든 Slide별 시간·Mode·ACT·Section·Story Beat·Evidence Type·Claim Status가 같다.
다른 ACT PPT는 변경하지 않았다. Demo 저장소와 State/tag, 실제 Trial은 그대로다.
발표자 묶음 ZIP/HTML도 생성하지 않았다.

정상 산출물을 기존 origin/main에 일반 commit/push한다. 실제 checkpoint는
Git 이력과 완료 보고에 기록한다. Windows/현재 제품·계정/실측 리허설은 남은
사용자 검증 항목이다.

## Outputs

- [수정 S17](../preview/full/S17.png)
- [통합 PPT](../AI_Dev_Training_Full.pptx)
- [ACT1 PPT](../ACT_1.pptx)
- [ACT1 Notes](../notes/ACT_1_NOTES.md)

**Next readiness: READY FOR S17 PRESENTATION REVIEW.**
