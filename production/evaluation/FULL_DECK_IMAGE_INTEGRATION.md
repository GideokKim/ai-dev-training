# Full Deck Illustration Integration

Date: 2026-10-18 (Asia/Seoul)

Status: COMPLETE — 승인된 네 장 반영과 로컬 렌더링 검토 완료.

Approval: DEC-0028. Baseline: `fee00a2`.

## Deliverables

- [80장 통합 PPT](../AI_Dev_Training_Full.pptx)
- ACT_0.pptx, ACT_3.pptx, ACT_4.pptx와 해당 Notes·PNG·montage
- [전체 Notes](../notes/FULL_SPEAKER_NOTES.md)
- [네 장 미리보기](../preview/full/illustration-montage.png)
- [검증 기록](FULL_DECK_IMAGE_INTEGRATION_VALIDATION.json)

네 장의 승인된 설명용 삽화를 실제 제작본에 반영했다. 기존 Pilot PPT·이미지
원본·프롬프트는 `prototype/image-illustration-pilot/`에 보존했다.
ACT 1/2/5 PPTX는 기존 파일과 byte-identical하다.

## Slide Changes and Evidence Boundaries

| Slide | 반영한 시각 자료 | 보존한 경계 | 로컬 검토 |
|---|---|---|---|
| [S07](../preview/full/S07.png) | 코드 조각을 직접 전달하는 장면과 Repository 조사를 맡기는 장면 | 설명용 교육 모델. 연결된 TRIAL-001 관찰은 과거 단일 CLI 실행이며 목표 설정·근거 검토는 개발자의 책임 | PASS |
| [S37](../preview/full/S37.png) | 같은 grayscale tile로 resize와 값 범위 변환을 설명하고, 아래에 두 Trial의 공통 절차 배치 | 그림은 실제 입력·출력 또는 최적화 전후 결과가 아님. 절차 반복은 관찰 기록 요약이며 Prompt-only attribution은 PARTIAL | PASS |
| [S53](../preview/full/S53.png) | 가정적 Vision 업무의 입력·처리·결과와 세 판단 질문 | 실제 C++ 구현·회사 장비·측정 결과가 아닌 Engineering Pattern 전이 모델 | PASS |
| [S72](../preview/full/S72.png) | 입력→코드→실행 장치→출력 장면, 변경 조건 표시와 세 확인 질문 | 황색 표시는 확인할 가상 조건. 실제 사건·실패 원인·측정된 결과를 뜻하지 않음 | PASS |

화면과 Notes에 AI 생성 설명용 삽화임을 표시했다. 이미지 생성은 Pilot 단계의
기존 자산을 재사용했다. 새 제품 화면, 실행 캡처, Demo Trial은 만들지 않았다.

## S72 Clipping Review and Repair

사용자가 Pilot의 일부 글자 잘림을 보고했다. 기존 PNG에서는 문장 끝의 가로
잘림이 확인되지 않았지만, 마지막 질문과 하단 Claim 상자는 글자 크기 대비
높이 여유가 부족했다. `wrap:none`, `autoFit:none`인 상태에서 글꼴·렌더러별
line box 차이가 영향을 줄 수 있어 S72 개별 상자를 보정했다.

| 요소 | 수정 전 (px) | 수정 후 (px) |
|---|---|---|
| 마지막 질문 | y569 / h29 / 글자27 | y565 / h40 / 글자27 |
| 하단 Claim | y650 / h22 / 글자19 | y650 / h30 / 글자19 |
| 세 질문 제목 | y506 | y500 |
| 세 질문 본문 | y540 / h28 | y534 / h34 |

문구와 글자 크기는 보존했다. 최종 PPTX에서 다시 렌더링한 S72에서 마지막
물음표와 Claim의 끝 마침표까지 확인했다. 질문·구분선·근거 문구 간 글자
겹침과 잘림은 발견되지 않았다. 공유 스타일을 바꿔 다른 장에 영향을 주지 않았다.

## Story, Time and Notes

Slide Map·Template Map·Claim Freeze는 baseline과 byte-identical하다.
80개 ID, ACT/Section/Beat/Demo 연결, 제목, 시간, Mode와 Claim은 유지했다.

| ACT | 장수 | 분 |
|---|---:|---:|
| 0 | 9 | 40 |
| 1 | 12 | 55 |
| 2 | 15 | 70 |
| 3 | 18 | 85 |
| 4 | 18 | 80 |
| 5 | 8 | 30 |
| 합계 | 80 | 360 |

Lecture 130 / Demo 73 / Case 83 / Reflection 20 / Transition 22 / Q&A 32분.
각 Slide의 Mode 합계와 배정 시간이 일치한다.

Notes는 S07/S37/S53/S72의 이미지 지시·출처·Fallback 경로·검증 기록만
정렬했다. 네 장 모두 19개 필드를 유지하고, 전체 80개 Markdown Notes와 ACT별
Notes, 일곱 PPTX의 내부 Notes가 서로 일치한다. 다른 76장 Notes는 공백
정규화 기준 기존 본문과 동일하다.

S72는 Case 0–7분 → Reflection 7–9분 → Q&A 9–16분 → Transition 16–20분을
유지한다. Q&A가 없을 때의 세 준비 질문과 Cutoff도 보존했다.

## Validation Method and Result

- 최종화한 통합 PPTX의 정확한 파일을 다시 import해 80장 전체를
  1920×1080 PNG로 렌더링했다. ACT 0/3/4의 최종 PPTX도 각각 렌더링했다.
- 네 장을 개별 크기로 검토하고 전체 montage와 인접 S06/S08/S36/S38/
  S52/S54/S71/S73를 확인했다. 별도 검토자도 같은 최종 PNG를 확인했다.
- 나머지 76장은 원본 PPTX와 생성 식별자를 제외한 Slide XML 내용·스타일·
  배치가 동일하며, PNG SHA-256도 모두 동일하다.
- 통합본과 ACT별 대응 PNG 80개가 일치한다. 76장에 대한 기존 시각 검토가
  이번 변경으로 무효화되지 않았음을 이 동일성 검사로 확인했다.
- 네 새 PPTX의 package, 16:9 geometry, 지정 서체, import 검사 통과.
  자동 layout finding은 0개다. 이 검사는 시각 검토와 구분한다.
- S45 native chart와 데이터 값이 유지됐다. 본문·라벨·화살표·Notes는
  편집 가능하며, 삽화 내부 그림만 별도 raster image다.
- Demo Repository는 변경하지 않았다. 새 Trial이나 Claim 확대는 없다.

PPTX의 지정 서체는 Malgun Gothic / Consolas다. 로컬 preview 과정에는
Apple SD Gothic Neo / Menlo alias를 등록했다. 이 등록이 모든 glyph의 실제
fallback 선택이나 대상 Windows 글꼴을 검증했다는 뜻은 아니다.

## Remaining Gates

새로운 P0/P1 문제는 발견되지 않았다. 아래 항목은 계속 UNVERIFIED다.

- Windows PowerPoint와 발표 PC의 실제 글꼴·발표 모드
- 교육장 투사와 원거리 가독성
- 최종 교육 계정·Codex 제품 surface와 Live 운영 조건
- 전체 pacing과 S72의 실제 20분 리허설

## Next Readiness

이미지가 반영된 80장 PPT의 사용자 검토 가능. 기존 최종 배포·리허설 Gate는
유지한다. 이번 로컬 제작 완료를 실제 교육 환경 검증 완료로 해석하지 않는다.
