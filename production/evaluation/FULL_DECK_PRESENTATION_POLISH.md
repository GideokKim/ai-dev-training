# Full Deck Presentation Polish

Started: 2026-10-18. Completed: 2026-10-19 (Asia/Seoul).

Status: COMPLETE — 승인된 14개 개선안 반영 및 전체 80장 로컬 렌더 검토 완료.

Authority: DEC-0030. Baseline: `0dc777c`.

## Revision Coverage

| # | Slide | 반영한 내용 | 유지한 범위 |
|---|---|---|---|
| 1 | S37 | 그림을 보조 크기로 줄이고 공통 8단계 절차를 본문 중심에 확대 | 두 Task, 2048→128 예시, 생성 삽화 표시, Prompt-only attribution PARTIAL |
| 2 | S48 | 이번 사례에서 별도 Memory 후보를 찾지 못했다는 결론을 본문에 배치 | 지식별 기존 출처 4행, 현재 사례 한정, 제품 Memory 동작 주장 없음 |
| 3 | S72 | 좌측 장면·우측 세 질문·하단 성찰 질문으로 읽는 순서를 분리 | 기존 질문, 가상 조건과 원인/결과 미확정 경계, 정적 운영, 20분 Mode |
| 4 | S10–14 | 빈 조건→두 해석→판단 질문→하나의 구조→개선 요청으로 시각적 초점을 구분 | 제목·Task 예시·다섯 책임·개념 비교·28분 및 장별 Mode |
| 5 | S66 | 기존 단위/통합 가상 사례를 5단계 모델의 질문에 연결 | 원인 확인과 Workflow 변경은 조건부, 새 실행/평가 결과 없음, 자동 학습 주장 없음 |
| 6 | S53 | 입력·처리·결과 번호와 기준 조건·조사 경로·검증 질문 연결 | 같은 C++ 전이 삽화, 실제 회사 장비·C++ 실행·성과 주장 없음 |
| 7 | S74 | 번호와 화살표로 7 State의 진행 방향을 명시하고 아래 회상 발췌와 분리 | 7개 이름·순서·의미, 세 원본 발췌와 실제 State 범위, 성숙도/Product Loop 아님 |
| 8 | S23/S43 | 한국어 의미를 우선 읽고 실제 영문 발췌를 바로 대조 | S23 원문 4개, S43 실제 Skill 문장 2개 전체 보존, 새 우월성 주장 없음 |
| 9 | S21/25, S30/31, S38/39 | 분류 후보/관찰 후 수명, 탐색 경로/Core 내용, 분류/동일 Task의 책임을 구분 | 기존 사례·현재 목표/사실/절차 책임, 장 삭제나 시간 변경 없음 |
| 10 | S64 | 네 행 모두 개념 평가 설계로 표현하고 행별 근거 상태를 직접 표시 | 01/02는 과거 관찰 참고, 03/04는 설계 사례, 변경 뒤 새 실행·PASS/FAIL 없음 |
| 11 | S70 | Nimble AuthRequired에 인증 필요 경고 설명, stderr에 진단 메시지 출력 설명 추가 | 최종 보고/보존 기록 불일치와 TRIAL-008의 별도 기록, MCP 작업 결과 없음 |
| 12 | S67–71 | 사건→두 검증 질문→기록 기준 결정→후속 대조→남은 한계로 각 장의 역할 구분 | 실제 Meta 기록, DEC-0016, 측정값 범위, 제품 코드/Skill 복구와 별개 |
| 13 | S73–79 | 여정·실제 State·선택 기준·책임·설계 질문·업무 선택·개인 성찰로 역할 구분 | 기존 여정·개발자 책임·과정 운영 모델·응답/제출 없는 성찰 |
| 14 | S29 | 관련 정보 위치와 Repository 코드 검색의 질적 과제 구조 도식 추가 | 기존 두 연구의 과제와 한정 문구, 수치 그래프·현재 Codex 성과 주장 없음 |

변경한 화면은 총 32장이다. 새로운 이미지 생성·제품 실행·Trial은 없으며,
승인된 삽화와 native PowerPoint text/shape/diagram을 재사용했다.
S52의 이중선은 의도된 OBSERVED_META 문법이므로 유지했다.

## Render Review

최종 PPTX를 다시 import하여 1920×1080 PNG로 렌더링했다. 통합 80장과
여섯 ACT를 모두 렌더링했으며, 서로 대응하는 PNG의 SHA-256도 일치했다.

세 검토 범위 S01–26 / S27–54 / S55–80에서 **모든 최종 개별 PNG**를
순서대로 확인했다. 초안 검토에서는 다음 세 가지 소규모 문제를 발견하여
최종 export 전에 수정했다.

- S11: 분기 위에서 목적지 없이 오른쪽을 향하던 화살표를 아래 방향으로 수정.
- S53: 질문을 8px, 하단 Workflow를 10px 위로 옮겨 Evidence 선과 간격 확보.
- S70: stderr 설명을 오류로만 한정하지 않도록 `진단 메시지 출력`으로 정리.

최종 개별 검토에서 새 P0/P1, 눈에 보이는 글자 잘림·의도치 않은 겹침·
본문/근거 경계 충돌은 발견하지 못했다. S72의 세 질문과 하단 문구, S74의
진행 방향과 발췌 출처도 별도 확인했다. 이는 로컬 렌더의 시각 판정이다.

전환은 S09→10, S21→22, S36→37, S54→55, S72→73을 확인했다.
추가로 S55→56의 실제 제품 결과/개념 사례, S66→67의 교육 모델/실제 Meta
기록 경계와 S79→80의 비공개 성찰/마지막 Q&A 연결을 대조했다.

## Notes Alignment

수정한 32장에 화면의 강조 순서와 발표자 지목 Cue를 정렬했다. 나머지
48개 Notes는 내용이 동일하다. 제목·시간·Mode·Primary Message·Evidence·
Claim Boundary 등 기존 17개 필드는 공백 정규화 후 그대로이며,
`Speaker Flow`와 검토 기록 필드만 수정했다. 19개 필드는 모두 유지한다.

S66은 단계별 질문을 순차적으로 가리키는 정적 운영이다. S72도 정적 화면과
발표자 진행을 유지하며 Case 7 / Reflection 2 / Q&A 7 / Transition 4분을
변경하지 않았다. 실제 20분 운영 리허설을 수행한 것은 아니다.

## Structural and Scope Validation

- `SLIDE_MAP.md`, `SLIDE_TEMPLATE_MAP.md`, `CLAIM_FREEZE.md`는 baseline과
  byte-identical하다. Slide/ACT/Section/Beat/Demo ID와 Claim 범위는 유지된다.
- 80장 / 360분. ACT 장수 9/12/15/18/18/8, 시간 40/55/70/85/80/30분.
- Mode: Lecture 130 / Demo 73 / Case 83 / Reflection 20 / Transition 22 /
  Q&A 32분. 각 Slide의 Mode 합계와 배정 시간이 일치한다.
- 변경한 32장 외 48장은 generated ID를 정규화한 XML/style/geometry와
  실제 PNG SHA-256이 baseline과 동일하다. Image 참조는 실제 media hash로 비교했다.
- 통합본 및 여섯 ACT의 embedded Notes가 해당 Markdown과 일치한다.
  80개 통합 Notes와 ACT별 Notes도 서로 일치한다.
- 실제 영문 원문, 7개 State 이름, S45 native chart 데이터가 보존됐다.
- 최종 7개 PPTX의 package, geometry, reference-font policy, first-party import
  검사 통과. 자동 layout finding 0개. 실제 시각 검토와는 별도 검사다.
- Fallback manifest의 통합 PPTX/등록 PNG hash와 미리보기를 최종 파일로 갱신했다.
- Demo Repository, 제품 코드, State/tag는 변경하지 않았다. 새 Trial 없음.

세부 결과: [validation JSON](FULL_DECK_PRESENTATION_POLISH_VALIDATION.json).

## Deliverables

- [80장 통합 PPT](../AI_Dev_Training_Full.pptx)
- [변경 대표 화면](../preview/full/presentation-polish-montage.png)
- [전체 미리보기](../preview/full/montage.png)
- [통합 Notes](../notes/FULL_SPEAKER_NOTES.md)
- 여섯 ACT PPTX, 해당 Notes·개별 PNG·montage

Native text/shape/diagram과 기존 S45 chart의 편집 가능성을 유지했다.
S74의 회상 이미지는 작은 코드를 다시 읽는 용도가 아니라 기존 장면을
기억하는 자료이며, 출처와 State 범위는 native 캡션과 Notes로 설명한다.

## Remaining Validation Gates

지정 서체는 Malgun Gothic / Consolas다. 로컬 preview는 Apple SD Gothic
Neo / Menlo alias를 사용했다. 이 결과가 실제 Windows 글꼴 선택이나 대체를
검증한 것은 아니다.

Windows PowerPoint, 발표 PC 글꼴, 교육장 투사, 현재 제품·계정·Live 환경,
전체 pacing 및 S72의 20분 리허설은 **UNVERIFIED**다. 이번 로컬 검토에서
새로 남은 P0/P1 또는 의미 있는 P2는 없다. 최종 배포 Gate는 유지한다.

## Next Readiness

14개 개선안이 반영된 80장 통합본을 사용자 검토에 사용할 수 있다.
