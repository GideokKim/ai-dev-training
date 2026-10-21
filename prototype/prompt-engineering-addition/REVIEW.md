# Practical Prompt Engineering — Eight-slide Review

> Historical pre-integration review snapshot: the timing question below was later resolved by the user. Current production follows DEC-0043,90slides/368minutes; original slide times remain unchanged. Use the current production Map/Notes and PROMPT_ENGINEERING_ADDITION_RESULT.md for final status.


Date: 2026-10-21. Baseline: 0772b4b. Decision: DEC-0043.
Status: **8-SLIDE REVIEW READY / TIMING AND FULL-DECK INTEGRATION PENDING**.

## Scope

현재 S21 뒤에 소개할 실무 기법8장을 제작했다. 각 장에 사용 상황, native text 요청 예시, 핵심 메시지, 공식 출처와 한계를 배치했다. 현재 production 통합본은82장/360분, ACT1은13장/55분이며 아직 바꾸지 않았다. S22–S29는 신규 삽입 예정 ID다. 시간 선택 후 기존 S22–S82를 S30–S90으로 옮겨 총90장으로 통합한다.

## Slide Review

| Planned ID | Topic | Claim | Result |
|---|---|---|---|
| S22 | 지시와 참고 자료의 구분 | CLM-0032 | LOCAL REVIEW COMPLETE |
| S23 | 입력과 기대 결과의 작은 예시 | CLM-0033 | LOCAL REVIEW COMPLETE |
| S24 | 바로 검토할 수 있는 결과 형식 | CLM-0034 | LOCAL REVIEW COMPLETE |
| S25 | 근거가 있는 설명과 미확인의 구분 | CLM-0035 | LOCAL REVIEW COMPLETE |
| S26 | 결과를 바꾸는 결정에서 확인 질문 | CLM-0036 | LOCAL REVIEW COMPLETE |
| S27 | 큰 작업을 검토할 결과물로 나누기 | CLM-0037 | LOCAL REVIEW COMPLETE |
| S28 | 기준을 지정한 코드 리뷰 요청 | CLM-0038 | LOCAL REVIEW COMPLETE |
| S29 | 구체적인 근거로 수정 방향 피드백 | CLM-0039 | LOCAL REVIEW COMPLETE |

8장 모두1920×1080 개별 렌더·독립 검토를 수행했다. 새 잘림·겹침·여백 이탈을 발견하지 못했다. S22의 미확인 표시 지시는 참고 자료 밖의 요청 구획으로 옮겼고, S28 역할은 검토할 관점을 구체화하는 표현으로 정리했다. 최종8개 PNG는 이 수정 후 검토한 시안과 bytes가 같다. 장당1분은 핵심 문장과 예시 두세 행을 짚는 운영 제안이며 리허설로 검증한 시간이 아니다.

## Files and Local Validation

- [8장 검토용 PPT](PROMPT_ENGINEERING_METHODS.pptx), 16:9, native text/shape, original proposed IDs visible.
- [발표자 Notes](SPEAKER_NOTES.md), 8개×19필드, PPT 내장 Notes와 일치. 시간은 PROPOSED로 표시했다.
- [Montage](preview/montage.png), 개별 preview/S22.png–S29.png.
- PPT SHA-256: `b035bccbae3a63c26db8d0bdb1642ef27ba50eb8d2224c43c972c10c4c270f1c`.
- Notes SHA-256: `b3c945f703a83f6a5b6dbb924c3a1480cea4d3d280bd6e49d2fc46c5d5519d00`.
- Package integrity / geometry finding0, reference font policy 및 first-party reimport 통과.
- 지정글꼴 Malgun Gothic/Consolas, 로컬 렌더 별칭 Apple SD Gothic Neo/Menlo.
- Windows PowerPoint·실제 발표 PC 글꼴·교육장·현재 제품/계정·실측 리허설: **UNVERIFIED**.

## Evidence Boundary

공식 문서가 권고하는 활용 방법을2026-10-21 본문에서 확인했다. 각 예시는 이 과정의 crop 명세·제조 검사 pipeline에 맞춘 교육용 각색이다. 새 모델 실행·TRIAL-002 입력·C++ 실행·Prompt 우월성·정확도/토큰/시간/성능 개선은 관찰하지 않았다. API Structured Outputs는 채팅의 출력 형식 요청과 구분한다. 내부 사고 과정을 출력시키는 문구·전문가 역할·자기검토를 정확성 보증으로 소개하지 않는다.

[기획·복사할 요청·시간 제안](../../plan/PROMPT_ENGINEERING_ADDITION.md).
[공식 근거와 해석 범위](../../references/product/PROMPT_ENGINEERING_2026-10-21.md).

## Timing Gate

사용자에게 두 안을 질문했고 답변을 기다린다.

- A: 기존 중복 설명8분을 새8장에 배분. ACT1 55분/전체360분과 Mode 총량 유지.
- B: 기존 장별 시간 유지 후8분 추가. ACT1 63분/전체368분.

기존 사용자의 주요 시간 재배분 별도 확인 조건에 따라, 답변 전에는 현재 Map·기존 Notes·Full/ACT PPT를 바꾸지 않는다. 내용 선택과 새8장 제작은 완료했고 전체 번호·시간·Notes·PPT·Preview의 통합은 대기 중이다.

## Preservation

기존7개 production PPTX와82개 Full PNG hash는 baseline과 동일하다. 기존 Map/Template Map/Full·ACT1 Notes도 동일하다. Demo Repository는 clean 상태를 유지하며 제품 코드·State/tag·새 Trial·묶음 ZIP/HTML은 변경하지 않았다.
