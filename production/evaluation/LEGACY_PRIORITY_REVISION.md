# Legacy Priority Reinforcement & Module Connections

Date: 2026-10-21 (Asia/Seoul). Authority: DEC-0033.
Baseline: `5c265ae`; presentation content from DEC-0032.

Status: COMPLETE — 승인한 네 보강, 80장 하단 M 연결 표시, Notes 정렬과
로컬 전체 렌더·개별 화면 검토를 마쳤다. 실환경·리허설은 UNVERIFIED다.

## Approved Content Changes

| Slide | 보강 | 기존 흐름과 시간 |
|---|---|---|
| S07 | Repository 접근 전 승인 도구·계정·자료·권한 범위 확인 | Context 수집 주체의 변화가 중심. 재설명과 선택적 C++ 해설을 줄여 접근 경계 45초를 배치. Lecture 3분 유지 |
| S14 | 4열 합성 입력의 `crop 1 3` → 원본 열 1·2, 폭 2라는 수용 조건 | 네 요청 비교 행과 C++ 연결 유지. Case 3분 중 90초를 구체 완료 조건에 배치. Lecture 6 + Case 3 = 9분 |
| S18 | 변경 이유·범위 / 검증 근거·결과 / 미확인 / 사람의 수용 판단 | Generated ≠ Done을 검토용 인계로 구체화. 기존 검사 재나열을 90초 인계 예시로 교체. Lecture 3분 유지 |
| S19 | 비어 있지 않음과 기대 열·폭 검사가 구별하는 계약 위반의 차이 | Check-to-Claim 표 유지. C++의 화면 문구는 Notes의 선택 참고로 남기고 검사 비교 90초로 교체. Lecture 4 + Reflection 1 = 5분 |

S14는 성공 조건, S18은 결과 인계와 미확인, S19는 검사가 계약 위반을
구별하는지에 초점을 둔다. 기존 전환 문구·Primary Message를 유지한다.
S31/S44/S79의 2순위 보강은 적용하지 않았다.

## Evidence Boundaries

- S07의 확인 원칙은 특정 회사의 허용·금지 목록이나 제품 보안 보장이 아니다.
- S14는 교육용 요청 예시이며 TRIAL-002의 당시 Prompt 또는 비교 실험이 아니다.
- S18은 과거 TRIAL-002 기록을 강의용으로 재구성했다. 실제 PR·당시 답변·사람의 승인 기록이 아니다.
- S19의 비어 있지 않음 검사는 빈 결과를 확인하는 데 의미가 있다. 다만 이
  입력의 끝 좌표 제외 계약을 구별하기에는 부족하다. 반례는 교육용이며
  새 실행·PASS/FAIL·당시 assertion 원문이 아니다.
- 기존 STATE/TRIAL 수치·출처·관찰/가상/Meta 구분과 S45 native chart 값을 유지했다.
- 새 Trial·Benchmark·제품 기능·이미지를 만들지 않았다. Demo 저장소는 변경하지 않았다.

## Module Footer

- S01–S80 모두에 작은 `M 연계` 메타데이터를 표시했다. 통합 및 ACT에 총 160개다.
- 원모듈의 관련 내용·원칙이며 모듈 전체 이수나 원사례의 재현을 뜻하지 않는다.
- 연결이 없는 18장은 `신규 확장`으로 표시했다. 직접 내용 22장, 원칙 연결 40장이다.
- M3·M7의 업무 방법은 현재 화면에서 직접 다루지 않아 라벨을 배정하지 않았다.
- [장별 연결·판정](LEGACY_MODULE_MAP.md)은 화면 반영 범위와 Notes 전용 내용을 구분한다.
- 지정 서체·기존 근거 글자 크기를 유지하며 M 메타데이터는 12pt로 작게 넣었다.
  Evidence/Boundary 두 줄과 분리하고 1080p 하단 72px Safe Margin을 지켰다.
- 하단 근거 구역을 소폭 위로 정렬했다. S74의 마지막 문장도 6px 위로 옮겨
  출처선과 분리했다. 나머지 76장의 화면 텍스트와 이미지 내용·crop은 동일하다.

## Notes / Planning Alignment

ACT 0/1과 통합 Notes의 네 레코드를 정렬했다. 80개 레코드와 19개 필드를 유지하고
각 ACT·통합 Markdown·7개 PPT 내장 Notes가 일치한다. S19의 C++ 대응은 Notes에
선택 참고로 명시하고 큰 Engineering Pattern 전이는 S53에 유지한다.

Slide Map은 네 장의 Core Message·Visual Concept·Speaker Intent에 보강 내용을
덧붙였다. ID·Title·Section·Beat/Demo·Evidence Type·시간·Mode·Transition은 유지했다.
Visual Spec은 기존 본문을 보존하고 사용자 승인 M footer 규칙만 덧붙였다.
MASTER_PLAN·INVARIANTS·CLAIM_FREEZE·CURRICULUM·Template Mapping·Story Beats는
baseline과 동일하다. 보완 전 [Legacy 대조 감사](LEGACY_M1_M9_COVERAGE_AUDIT.md)는
해당 baseline의 이력으로 보존한다.

## Render & Review

통합 80장과 ACT 0–5의 80장을 최종 PPTX에서 다시 import하여 1920×1080으로 렌더했다.
7개 PPT의 package·geometry·reference-font policy·first-party import 검사를 통과했고
package/layout finding은 0개다. full/ACT 대응 PNG는 80쌍 모두 byte-identical하다.

독립 검토 범위는 S01–26 / S27–54 / S55–80이다. 모든 개별 PNG를 열어 Notes와
대조했고 새 잘림·겹침·M label 충돌을 발견하지 못했다. 전체 montage로 흐름도
확인했다. S19의 위치 지시 문구를 `검사 비교`로 정리한 최종 재렌더를 별도 확인했다.
그 외 79장은 개별 검토한 첫 release와 최종 release PNG의 바이트가 동일하다.

S29 출처, S45 측정·인과 경계, S55→56과 S66→67의 Evidence 전환, S64 평가 상태,
S72 문구와 S74 출처선, S76의 긴 M label을 집중 확인했다. 로컬 P0/P1 발견 없음.
이 검토는 대상 PowerPoint·교육장 가독성·시간 리허설의 검증이 아니다.

## Time / Mode

- 80장 / 360분. ACT 장수 9/12/15/18/18/8; 시간 40/55/70/85/80/30분.
- Lecture 130 / Demo 73 / Case 83 / Reflection 20 / Transition 22 / Q&A 32분.
- 네 보강은 기존 Mode 안의 설명을 교체했다. 성찰·질문·전환 시간을 가져오지 않았다.
- 실제 설명 속도, S54/S72 운영과 360분 pacing은 리허설 전까지 UNVERIFIED다.

## Deliverables

- [통합 PPT](../AI_Dev_Training_Full.pptx)와 ACT 0–5 PPT
- [통합 Notes](../notes/FULL_SPEAKER_NOTES.md)와 ACT Notes
- [전체 montage](../preview/full/montage.png), [네 보강 화면](../preview/full/legacy-reinforcement-montage.png)
- [검증 기록](LEGACY_PRIORITY_REVISION_VALIDATION.json), [80장 M 연결 표](LEGACY_MODULE_MAP.md)

Windows PowerPoint·실제 발표 PC 글꼴·교육장 투사·제품/계정·Live 환경과
실측 리허설은 계속 UNVERIFIED다. 최종 해시·Fallback·전달 안내·오프라인 묶음은
이번 후보와 일치하도록 갱신한다.
