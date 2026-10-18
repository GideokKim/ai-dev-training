# Presentation Revision Pilot

Date: 2026-10-18

Status: READY FOR USER REVIEW

Baseline: `06d0d5c`.

## Scope

사용자 요청에 따라 S05, S23, S45, S57을 실제 발표용으로 구체화한 별도
4장 시안이다. 전체 적용은 방향 검토 후 진행한다. 원본 80장 PPT,
공식 Slide Map, Claim Freeze, 전체 Notes 및 Demo Repository는 변경하지 않았다.

- [수정 시안 PPT](AI_Dev_Training_Presentation_Pilot.pptx)
- [발표자 Notes](PILOT_NOTES.md): 19개 필드 × 4장, PPT에도 동일 본문 삽입
- [전체 미리보기](preview/montage.webp)
- [검사 요약](VALIDATION.json)

## Changes

| Slide | 기존 화면의 문제 | 시안의 변경 | 유지한 경계 |
|---|---|---|---|
| S05 | 파일명·호출 경로만으로는 crop 문제가 잘 보이지 않음 | STATE-00 테스트의 2×4 입력, 기대 두 열, 구현이 포함하는 세 열을 나란히 표시. 오른쪽에 실패 테스트·호출 경로·구현 연결 | TRIAL-001 기록과 소스의 재구성. 실제 실행 캡처 아님. 읽기 전용·코드 미수정·과거 CLI 범위 유지 |
| S23 | 파일 크기와 내용 분류만 있고 실제 지침이 보이지 않음 | AGENTS.md의 목적·실행·테스트·기본 제약 원문 발췌와 핵심 단어 강조 | 문서 상태만 설명. 사용 관찰은 S24. 토큰·성능·정확도 개선 주장 없음 |
| S45 | 측정 수치가 카드에 나열되어 전후 차이를 읽어야 함 | 실행 시간을 0 기준 native bar chart로 비교. Python 할당 피크는 별도 수치로 표시. 검증 결과를 한 줄로 정리 | 동일 입력·환경의 코드 변경 결과. tracemalloc ≠ RSS. Harness/Skill 단독 인과 주장 없음 |
| S57 | 구체적인 변경 이유가 미정으로 노출되어 무엇이 낡았는지 모호함 | 공식 검증 기준은 단위+통합, 재사용 지시는 단위 테스트로 남아 있는 가상 설정 제안 | 실제 migration/Agent 실행/누락/PASS·FAIL 이력 아님. 새 설정은 검토 후보이며 공식 채택 대기 |

제목, Slide ID, ACT/Section, Story 역할과 시간/Mode는 유지했다. UI 모양의
반복 카드와 중복 상태 표식을 줄이고, 실제 데이터·원문·비교를 화면 중심에
놓았다. 출처와 해석 한계는 짧은 화면 근거 줄 및 상세 Notes에 보존했다.

## S57 Proposal

**PROPOSAL:** 모듈 연결 동작까지 검증해야 하므로 공식 검증 범위에 통합
테스트를 추가했지만, 재사용 Workflow에는 이전 단위 테스트 지시가 남은
상황을 DEMO-04A의 구체적 가상 설정으로 검토한다.

**REASON:** 기존 화면의 “구체적 사유 미정”은 청중이 stale Workflow의
의미를 판단하기 어렵게 한다. 두 지침의 범위를 구체적으로 비교할 필요가 있다.

**EVIDENCE:** 기존 S57 렌더링과 사용자 피드백. 새 제품 실행이나 관찰 근거는 없다.

**IMPACT:** 승인 후 S57 및 연결된 S58–65, DEMO-04A runbook, Notes의
정합성 검토가 필요하다. 실제 Product State 또는 Skill의 변경은 필요하지 않다.

**CONFLICT:** 기존 Visual Prototype Plan과 runbook은 구체적 변경 이유를
미확정으로 유지한다. Template Map §11은 추후 타당한 개념 사례 선택의
여지를 둔다. 따라서 이 시안에만 가정으로 표시하고 공식 문서의 미확정
상태를 자동 변경하지 않았다.

**RECOMMENDATION:** 화면의 지시 범위 비교를 검토받은 뒤, 채택 시 Decision
Log와 관련 기획 문서를 정렬한다. 현재 상태는 PROPOSED다. 실제 실행 결과를
추가하거나 S58의 결과를 이 장에서 먼저 보여 주지 않는다.

## Sources and Traceability

공통 기준: [Slide Map](../../plan/SLIDE_MAP.md),
[Claim Freeze](../../plan/CLAIM_FREEZE.md),
[Visual Spec](../../plan/VISUAL_SPEC.md),
[Speaker Notes Architecture](../../plan/SPEAKER_NOTES_ARCHITECTURE.md).

| Slide | 직접 대조한 원문 | 표현 시 주의 |
|---|---|---|
| S05 | [Demo Matrix](../../plan/DEMO_MATRIX.md) TRIAL-001; Demo STATE-00 `22e7e2f806de2419b0df649107bbae14dea082eb`, `tests/test_transform.py:9–14`, `src/graypipe/transform.py:7–13` | ((2,3,4),(6,7,8))은 소스로 재구성한 결과. 색은 실제 명암이 아닌 영역 강조. 호출 경로는 Agent의 접근 시간 순서가 아님. README에도 결함 안내가 있으므로 무힌트 독자 발견으로 주장하지 않음 |
| S23 | [Demo Matrix](../../plan/DEMO_MATRIX.md) STATE-01; Demo tag `14baf81746a981d7cd96b7a014ea06f28c3dd6b4`, `AGENTS.md` 2/5/9/15행 | 테스트 행은 원문의 명령 문자열. 파일은 실제 15줄/567bytes. 근거는 파일 상태이며 행동 개선 효과가 아님 |
| S45 | [Demo Matrix](../../plan/DEMO_MATRIX.md) STEP 07 §§191–200; [Claim Freeze §8](../../plan/CLAIM_FREEZE.md); DEC-0019 | STATE-04 `822f1c12c5f602d934a2fd29e48f05bf498b4bfa` → STATE-04-PERF `6153b81c0187dd7d82c88bd1817fb683c98eb431`. TRIAL-008 후보 수치와 혼합하지 않음 |
| S57 | [Slide Map](../../plan/SLIDE_MAP.md) S57; [Template Map §11](../../plan/SLIDE_TEMPLATE_MAP.md); [DEMO-04A runbook](../../demos/runbooks/demo-04a.md); DEC-0021 | 이번에 제안한 가상 설정. 실제 graypipe Skill 또는 Test history와 동일시하지 않음 |

## Time and Mode

| Slide | Time | Mode |
|---|---:|---|
| S05 | 8분 | Demo 8분 |
| S23 | 4분 | Demo 4분 |
| S45 | 5분 | Case 5분 |
| S57 | 4분 | Demo(VISUAL) 2분 + Case 2분 |

4장 부분집합은 21분이다. 80장/360분 계획을 대체하거나 시간을 재배분하지 않는다.
실제 시간 리허설은 수행하지 않았다.

## Validation

- 최종 PPTX 재가져오기 후 4장 전체를 1920×1080 PNG로 렌더링하고 개별 확인.
- 16:9, 제목 36pt, 코드 18–25.5pt, 근거/경계 최소 14.25pt. 제목/본문은
  기존 지정 서체 Malgun Gothic, 코드는 Consolas 유지.
- Native text/shape와 S45 native chart 1개. 슬라이드 전체 이미지화 없음.
- PPTX 관계·패키지 검사, 범위/글꼴 선언/제목 배치 검사에서 finding 0.
- 차트 cache와 내장 workbook의 10.769/15.468 값 일치. 축은 0–20,
  숫자 눈금은 정수, 데이터 라벨은 원래 소수점 유지.
- Notes 4개 모두 19개 필드 확인. 전체 Notes나 기존 ACT Notes는 교체하지 않음.
- 독립 시각 검토에서 제안된 계약 label, 원문 강조, 차트 순서·눈금,
  가상 지시 범위 명료화를 반영.
- 확인한 로컬 미리보기에서 한글 소실·잘림·의도하지 않은 겹침 없음.
- 로컬 renderer에는 Nanum Gothic / D2Coding preview alias를 등록했다.
  최종 PPTX에는 기존 Windows 지정 글꼴을 유지한다. 실제 glyph별 fallback
  선택을 확인한 것은 아니며 Windows 렌더링을 검증한 것도 아니다.

## Open Items

- 네 장의 발표용 방향과 S57 가상 설정에 대한 사용자 검토.
- Windows PowerPoint·발표 PC 글꼴·교육장 투사·시간 리허설: UNVERIFIED.
- 전체 80장에 대한 적용은 사용자 방향 확인 뒤 진행.

## Protected Artifacts

원본 `production/AI_Dev_Training_Full.pptx` SHA-256:
`c5e744e36d610e52179ff4f1f6979255a093b3794f83e6fa5b84dfa5cadcf19d`.

이번 작업에서 원본 파일, 공식 기획 문서, Demo Repository 및 기존 State
Tag를 변경하지 않았다.
