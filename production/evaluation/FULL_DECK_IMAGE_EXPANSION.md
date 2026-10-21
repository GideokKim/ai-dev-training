# Full Deck Image Candidate Completion

> Historical record — 이 문서는 DEC-0036 이전 80장 판의 번호와 검증 결과를 보존한다. 현재 81장 판과의 대응은 [Slide ID Migration](../../plan/SLIDE_ID_MIGRATION.md)을 따른다. 과거 PASS는 현재 파일의 재검증을 뜻하지 않는다.


Date: 2026-10-18 (Asia/Seoul).

Status: COMPLETE — 앞서 추천한 일반 후보 7장의 시각 자료 반영과 로컬 검토 완료.
조건부 후보 S41의 원본 실행 캡처는 확보되지 않았다.

Authority: DEC-0029. Baseline: `93d4912`.

## Recommendation Coverage

원래 이미지 검토 결과를 같은 대화에서 확인했다. 일반 후보는 아래 7장이며,
S41은 출처·환경이 확인되는 실제 화면이 있을 때만 권한 별도 조건부 후보였다.

| Slide | 반영한 시각 자료 | 이번 작업 | 근거 경계 |
|---|---|---|---|
| S03 | 여러 자료에서 Context를 직접 모으는 개발자 삽화 | 추가 | AI 생성 개념 장면. 특정 Trial의 실제 비용·실패를 뜻하지 않으며 Agent 해결책을 먼저 제시하지 않음 |
| S07 | 코드 조각 전달과 Repository 조사 위임의 2컷 비교 | 기존 반영 유지 | 목표·검토 책임 유지, 과거 CLI 관찰과 교육 모델 구분 |
| S37 | resize와 값 범위 변환 그림 | 기존 반영 유지 | 같은 tile 사용. 실제 Trial 입출력·최적화 전후 결과 아님. Prompt-only attribution은 PARTIAL |
| S53 | 가정적 C++ Vision 업무 장면 | 기존 반영 유지 | 실제 회사 장비·C++ 실행·성과가 아닌 전이 모델 |
| S57 | 각 모듈의 단위 범위와 연결을 포함하는 통합 범위 | 추가 | native 편집 도식. 현재 기준과 재사용 지시의 가상 간극이며 실행·누락·PASS/FAIL 없음 |
| S72 | 입력→코드→장치→출력과 변경 조건 | 기존 반영 유지 | 가상 조건의 표시이며 원인·결과 확정 아님. 이전 글자 상자 보정도 보존 |
| S74 | S16 crop diff, S32 문서 분리, S45 성능 비교의 실제 발표자료 발췌 | 추가 | 기존 자료를 회수하는 crop. 원본 실행 화면·새 측정 결과 아님. 일곱 State와 범위 보존 |

S41은 `assets/`, `demos/`, `prototype/`, `production/`의 이미지·영상 목록과
관련 Runbook·Trial 기록을 확인했다. 원본 CLI screenshot/recording을 찾지
못했다. 기존 S41 PNG는 발표자료 렌더이며 원본 캡처가 아니다. 따라서
`Codex CLI 0.154.0`, `/skills`, 명시 호출과 trace 관찰 범위를 표시한 기존
재구성 도식을 유지했다. 새 제품 실행이나 화면을 만들지 않았다.

## Deliverables

- [80장 통합 PPT](../AI_Dev_Training_Full.pptx)
- ACT 0/4/5 PPTX, 해당 Notes·개별 PNG·montage
- [이번에 추가한 세 장](../preview/full/additional-visuals-montage.png)
- [추천한 일곱 장](../preview/full/illustration-montage.png)
- [전체 Notes](../notes/FULL_SPEAKER_NOTES.md)
- [검증 기록](FULL_DECK_IMAGE_EXPANSION_VALIDATION.json)
- `assets/slide-illustrations/`: 생성 삽화, 발췌 원본, exact prompt, 출처·SHA·crop 범위
- `production/source/presentation-revision/`: 편집 가능한 제작 원본

S03만 built-in image_gen으로 새로 생성했다. S57은 native text/shape/arrow,
S74는 기존 PNG를 그대로 보존하고 PowerPoint의 native crop을 적용했다.
이미지 전체를 새 실행 캡처처럼 꾸미지 않았다. 원래 S45 chart는 편집 가능한
native chart와 같은 데이터로 유지된다.

## Review and Repair

S03은 수작업 Context 수집을 그림의 중심에 두고, 구현·호출 경로 / 테스트 /
계약의 세 질문을 별도 native 텍스트로 배치했다. 다음 S04의 조사 질문을
미리 해결하지 않는다.

S57은 승인된 좌우 비교를 유지했다. 양쪽에 같은 모듈과 연결을 그려 실제
제품이 달라졌다는 인상을 피하고, 왼쪽 통합 범위와 오른쪽에 남은 단위
테스트 지시의 차이를 표시했다. 모듈 A/B는 가상 설명 표기다.

S74 초안에서는 위 State와 아래 발췌의 열 정렬이 잘못된 대응으로 읽힐
수 있다는 P1을 발견했다. `앞서 본 근거 다시 보기` 구분 영역과 각 발췌의
실제 State 범위를 추가해 해결했다. 작은 코드·경로·수치는 다시 읽는 용도가
아니라 앞서 본 장면을 회수하는 자료이며 native 캡션으로 설명한다.

최종 통합 PPTX를 다시 import해 렌더링한 세 PNG를 개별 크기로 확인했다.
별도 검토자는 S02→S03→S04, S56→S57→S58, S73→S74→S75도 대조했다.
잘림·겹침·새 근거 혼동은 발견되지 않았고 이전 P1은 해결됐다.

## Validation

- 통합본 80장과 해당 ACT 0/4/5의 최종 파일을 1920×1080으로 렌더링했다.
- Source of Truth의 Slide Map, Template Map, Claim Freeze는 baseline과 동일하다.
- 80장 / 360분, ACT 시간 40/55/70/85/80/30분, Mode 합계
  Lecture 130 / Demo 73 / Case 83 / Reflection 20 / Transition 22 / Q&A 32분 유지.
- 이번에 바뀐 Slide 내용·배치는 S03/S57/S74다. 나머지 77장은 generated ID를
  정규화한 XML·style·geometry와 PNG SHA-256이 동일하다. 기존 image 참조는
  relationship ID 대신 실제 media bytes의 SHA-256으로 대조했다.
- 80개 Markdown Notes와 ACT별 Notes, 일곱 PPTX 내부 Notes가 일치한다.
  각 장은 19개 필드를 유지하고 변경 Notes는 세 장뿐이다. 제목·배정 시간·
  Mode·Primary Message는 그대로다. S74 Claim에는 이미지 출처와 제한만 보강했다.
- 통합본과 ACT별 대응 PNG가 모두 일치한다. ACT 1/2/3 PPTX는 byte-identical하다.
- 네 새 PPTX의 package/geometry/font-policy/import 검사 통과. 자동 layout
  finding은 0개다. 이는 실제 시각 검토와 별도 판정이다.
- 발췌 원본 3개는 기존 S16/S32/S45 PNG와 byte-identical하며 manifest의
  SHA-256과 native crop 범위를 대조했다.
- Fallback manifest의 최종 PPTX SHA 및 S57/S74 등 모든 등록 PNG SHA를 갱신했다.
- Demo Repository, 제품 코드, State/tag는 변경하지 않았고 새 Trial도 실행하지 않았다.

지정 서체 Malgun Gothic / Consolas를 유지했다. 로컬 preview에는 Apple SD
Gothic Neo / Menlo alias를 등록했으며, 이것이 모든 glyph의 실제 fallback이나
Windows 폰트 선택을 검증했다는 뜻은 아니다.

## Remaining Conditions

새 P0/P1은 없다. Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 현재 교육
계정·제품 표면, 실제 pacing과 S72의 20분 운영은 계속 UNVERIFIED다.
S41 원본 캡처 조건도 미충족으로 남긴다.

## Next Readiness

추천 7장의 시각 자료가 포함된 80장 PPT를 사용자 검토에 사용할 수 있다.
기존 최종 배포 및 리허설 Gate는 유지한다.
