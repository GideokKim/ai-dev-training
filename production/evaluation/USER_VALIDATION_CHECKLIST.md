# 사용자 검증 체크리스트

갱신 기준일: 2026-10-21 (Asia/Seoul). 대상 후보: DEC-0035 S05–S06 수정 통합본. 기존 ZIP은 이전 DEC-0033 자료이며 이번에는 갱신하지 않는다.

상태: **USER REQUIRED — 실환경 확인·실측 리허설·최종 전달은 UNVERIFIED.**
아래 실환경 체크박스는 모두 미완료다. 로컬 제작 검토의 완료와 수업 운영·전달
승인을 구분한다.

대상 후보:

- 통합 덱: [production/AI_Dev_Training_Full.pptx](../AI_Dev_Training_Full.pptx)
- PPTX SHA-256: `656b278c1098f4383fd34c3ac7e4c281ef29c216e2a8bfc9729d38248612ba26`
- 통합 Notes: [production/notes/FULL_SPEAKER_NOTES.md](../notes/FULL_SPEAKER_NOTES.md)
- Notes SHA-256: `831c66db02c87f573ccaa4c338b687d9e5899efbb3e49095e3db5cc600c51454`
- 전체 정적 렌더: `production/preview/full/S01.png`–`S80.png`, [montage](../preview/full/montage.png)
- 오프라인 Demo 대안: [demos/runbooks/FALLBACK_MANIFEST.md](../../demos/runbooks/FALLBACK_MANIFEST.md)

두 파일의 해시는 이번 문서 갱신 시 실제 파일에서 확인했다. 다음은 최신
[발표용 보강 보고서](LEGACY_PRIORITY_REVISION.md)와
[검증 JSON](LEGACY_PRIORITY_REVISION_VALIDATION.json)에 기록된 로컬 완료 범위다.
이번 보강에서 통합·ACT 전체 렌더와 PPTX 구조 검사를 수행했다.
오프라인 ZIP의 payload 362개·entry 363개, CRC·추출 hash·내부 링크·Notes 정합성을
확인했다. 실제 발표 PC에서의 오프라인 재생은 여전히 UNVERIFIED다.

| 기존 로컬 확인 | 보고서에 기록된 결과 |
|---|---|
| 통합본 및 여섯 ACT PPTX | Package / geometry / reference-font policy / first-party import 검사 통과, layout finding 0개 |
| 전체 80장 최종 PNG | 개별 시각 검토 완료, 새 P0/P1 및 의미 있는 P2 없음; ACT와 통합 PNG 일치 |
| 구조·시간 | 80장 / 순수 교육 360분, Slide ID·ACT·시간·Mode·Claim 경계 보존 |
| Notes | 80개·장별 19필드 유지, Markdown·통합 및 ACT 내장 Notes 일치 |
| 승인된 발표용 보강 | DEC-0035 S05 폭 비교·S06 누락된 환경 Context 구분, 나머지 78장 화면·Notes 보존; 이전 DEC-0034 S01–S04 도입 수정, 나머지 76장 화면·Notes 보존; 이전 DEC-0033 S07/S14/S18/S19 본문·Notes 네 장 보강, 80장 M 연계 표시; 나머지 76장 본문·이미지 내용 보존 |
| Fallback 자료 | 최종 PPTX 및 등록 PNG 해시·미리보기 갱신 |

DEC-0032의 화면 14장·Notes 41개·전환 24개 정렬과 과거 후보의
“S73/S77 카드 행·callout geometry만 수정” 기록은 각각 그 시점의 이력이다.
이번 M 연계는 관련 내용·원칙을 뜻하며 원 모듈 전체 충족이 아니다.
S31/S44/S79의 2순위 보강은 적용하지 않았으며 장별 시간·Mode를 유지했다. 현재 후보의 화면·수정 범위는 최신 보고서와 이 체크리스트를 따른다.
지정 서체는 Malgun Gothic / Consolas이며 로컬 렌더는 Apple SD Gothic Neo /
Menlo alias를 사용했다. 로컬 결과는 실제 발표 PC의 글꼴 선택·대체를 검증하지 않는다.

검증자 / 확인 날짜·시간·시간대: ____________________
발표 PC 제조사·모델 / OS·빌드: ____________________
Windows PowerPoint 버전·빌드 / 32·64비트: ____________________
지정 글꼴 설치 버전 / 실제 대체 글꼴: ____________________
교육장·프로젝터 / 출력 해상도·배율·화면 비율: ____________________
운영 선택(정적 PPT/PNG 기본, Live/Hybrid 선택 여부): ____________________
Live/Hybrid 선택 시 계정 범위·Codex surface·제품 버전: ____________________

| 실환경 확인 범위 | 현재 상태 |
|---|---|
| 실제 발표 PC / Windows PowerPoint 열기·저장·Slide Show | UNVERIFIED |
| 발표 PC의 글꼴·줄바꿈 | UNVERIFIED |
| 교육장 투사·좌석 거리 가독성 | UNVERIFIED |
| 현재 제품·계정·권한 / 선택한 Live·Hybrid 동작 | UNVERIFIED |
| 실제 발표 PC에서 네트워크를 끈 정적 자료 재생·복귀 | UNVERIFIED |
| 전체 시간·S54·S72·무질문 상황 실측 리허설 | UNVERIFIED |
| 최종 전달 승인 및 외부 전달 | UNVERIFIED |

각 체크박스는 실제 확인 후 표시하고 PASS / FAIL / UNVERIFIED와 증거를
남긴다. 증거 없이 PASS로 바꾸지 않는다. 아래 필드로 항목별 기록을 남기거나
같은 필드를 갖춘 별도 기록에 연결한다. 증거는 Repository 또는 전달 묶음을
기준으로 한 상대 경로로 적는다.

| 항목 번호 | 판정 | 검증자 / 날짜·시간 | 기기 / OS·앱 버전 | Slide / 파일 | 문제·재현 조건 | 증거 경로 |
|---|---|---|---|---|---|---|
| __________ | UNVERIFIED | __________ | __________ | __________ | __________ | __________ |

실패가 있으면 해당 Slide와 환경을 기록하고, 보호된 Story·Claim·시간·Mode·
Demo State를 바꾸지 않는 국소 수정안을 작성한다. 기준 문서는
[MASTER_PLAN](../../plan/MASTER_PLAN.md), [INVARIANTS](../../plan/INVARIANTS.md),
[DECISIONS](../../plan/DECISIONS.md)다.

## 1. Windows PowerPoint와 발표 PC — UNVERIFIED

- [ ] 대상 해시의 통합 PPTX가 실제 발표 PC에서 복구 경고 없이 열린다.
- [ ] 임시 사본에 저장한 뒤 닫고 다시 열어도 80장이 유지된다.
- [ ] Slide ID와 순서가 S01–S80으로 유지된다.
- [ ] Slide Show 모드에서 화면 비율·전환·정적 도형·S45 native chart가 정상이다.
- [ ] Speaker Notes 80개가 예상 Slide에 연결되고 발표자 보기에서 읽힌다.
- [ ] 사용 글꼴과 실제 대체 글꼴을 기록했다.
- [ ] 한글 줄바꿈, 영문/한글 혼합, 코드, Citation, Evidence label을 확인했다.
- [ ] S72 왼쪽 장면→오른쪽 세 질문→하단 성찰 질문 순서가 읽히며 겹침·잘림이 없다.
- [ ] S74 번호·화살표가 상단 왼쪽→오른쪽, 하단 오른쪽→왼쪽으로 이어지고 아래 회상 발췌와 구분된다.
- [ ] S07/S14/S18/S19 보강과 S10–14, S21/25, S30/31, S38/39의 장별 역할 및 S67–71, S73–79의 흐름이 최신 Notes와 맞는다.
- [ ] 80장 하단 M 연계 표시가 Evidence/Boundary와 겹치지 않으며 모듈 전체 충족으로 읽히지 않는다.
- [ ] S23/S43 한국어 의미·원문, S37 절차, S48 결론, S53 연결, S64 근거 상태, S70 진단 설명이 읽힌다.
- [ ] 확인 증거(화면 캡처 또는 점검 기록) 경로: ____________________

전체 80장을 확인하되 S05, S09–14, S16, S23, S29, S35, S37, S43,
S45, S48, S53–56, S64, S66–80을 집중 확인한다. 전환은 S09→10,
S21→22, S36→37, S54→55, S55→56, S66→67, S72→73, S79→80을 점검한다.

결과 / 문제 Slide / 증거:

____________________________________________________________________

## 2. 운영 경로와 선택적 제품·계정 확인 — UNVERIFIED

정적 PPT/PNG와 준비된 과거 기록이 기본 운영 경로다. 과거 Trial을 그 범위로
설명하기 위해 현재 계정에서 같은 동작을 재현할 필요는 없다. Live/Hybrid를
선택하거나 현재 제품 동작을 직접 주장할 때 해당 조건을 확인한다. 사용하지
않는 경로는 운영 선택에 “미사용”을 기록하되, 실제 계정·Live 검증 상태는
UNVERIFIED로 유지한다.

- [ ] 정적 기본 경로만으로 Story가 전달되며 현재 제품 실행을 요구하지 않음을 확인했다.
- [ ] Live/Hybrid를 쓸 경우 사용할 계정·surface·제품 버전·접근 권한·workspace/repository 범위를 기록했다.
- [ ] Live/Hybrid 또는 현재 제품 기능에 의존하는 설명은 최신 공식 자료와 해당 계정의 실제 동작으로 확인했다.
- [ ] Live/Hybrid를 쓸 경우 허용 모드·작업 디렉터리·시작 State·중단 조건을 확인했다.
- [ ] Live/Hybrid를 쓸 경우 네트워크·인증 실패 시 정적 fallback 복귀와 다음 Slide 전환을 리허설했다.
- [ ] 회사·고객 데이터 또는 회사 서비스를 사용할 경우에만 해당 사용·공개 정책과 권한을 확인했다.

기록할 점: TRIAL-001 및 TRIAL-008은 Codex CLI 0.154.0에서 관찰된 범위다. 이 기록은 현재 Desktop/교육 계정의 동작을 대신하지 않는다. 확인되지 않은 기능은 `UNVERIFIED`로 남긴다.

Surface / version / account scope / permission mode / evidence path:

____________________________________________________________________

## 3. 실제 발표 PC의 오프라인 Demo fallback — UNVERIFIED

- [ ] 발표 PC로 전달한 PPTX·Notes가 위 대상 해시와 일치한다.
- [ ] 전달한 PNG의 SHA-256이 fallback manifest의 해당 항목과 일치한다.
- [ ] 발표 PC에서 네트워크를 끈 뒤 각 runbook에 나열된 PNG와 필요한 Notes를 열었다.
- [ ] S05의 재구성 도식을 raw terminal screenshot으로 오해하지 않도록 label을 확인했다.
- [ ] S16 code/diff, S35 access matrix, S67 Meta timeline의 근거 경계를 확인했다.
- [ ] S64 네 행이 개념 평가 설계이며 EVAL-01/02는 과거 관찰 참고, EVAL-03/04는 설계 사례이고 변경 뒤 새 평가 결과가 없음을 확인했다.
- [ ] S66 Teaching Model과 S67 Observed Meta frame이 구분된다.
- [ ] S74 일곱 State와 아래 세 발췌를 회상 자료로 설명하며 새 Trial·추가 State로 표현하지 않았다.
- [ ] 자료를 열지 못할 때 runbook의 복구 cue와 다음 Slide 전환을 실제 발표 PC에서 확인했다.
- [ ] Live 실행을 시도하지 않고 정적 경로만으로 예정 시간에 맞춰 진행할 수 있다.

결과 / 파일 / 증거:

____________________________________________________________________

## 4. 교육장·프로젝터 — UNVERIFIED

- [ ] 실제 화면에서 16:9와 전체 안전 여백이 유지된다.
- [ ] 뒤쪽 좌석에서 제목, 핵심 diagram, Korean body, code, Citation, Evidence label을 읽을 수 있다.
- [ ] 화면 밝기·대비·프로젝터 scaling이 적절하다.
- [ ] S05 Evidence metadata와 S09 질문을 실제 거리에서 읽을 수 있다.
- [ ] S72 세 질문·하단 성찰 질문과 S74 State 번호·방향·native 캡션을 실제 거리에서 구분할 수 있다.
- [ ] S74 작은 발췌는 회상용으로 사용하고 세부 코드·수치를 뒤쪽 좌석에서 다시 읽도록 요구하지 않는다.
- [ ] S73–79를 포함한 최신 전체 화면의 가장자리 요소가 잘리지 않는다.
- [ ] 촬영 위치·기기·출력 설정·날짜·Slide와 테스트 사진 또는 기록 경로를 남겼다: ____________________

## 5. 강사 시간 리허설 — UNVERIFIED

실제 리허설 전에는 시간 적합성을 PASS 처리하지 않는다. 실제 시작/종료와
각 구간의 실측 시간을 기록한다. 청중은 노트북·실습·필수 응답·공유를 요구받지 않는다.

- [ ] 전체 360분을 리허설했다. 휴식 및 setup 시간을 교육 시간에 섞지 않았다.
- [ ] ACT 시간: ACT 0 40분 / ACT 1 55분 / ACT 2 70분 / ACT 3 85분 / ACT 4 80분 / ACT 5 30분.
- [ ] Mode 합계: Lecture 130 / Demo 73 / Case 83 / Reflection 20 / Transition 22 / Q&A 32분.
- [ ] S07의 접근 경계 45초, S14 Case의 완료 조건 90초, S18 결과 인계 90초, S19 Lecture의 검사 비교 90초가 기존 장별 시간 안에 들어가며 S19 Reflection 1분을 지켰다.
- [ ] S54 순서: Reflection 3 → Q&A 5 → Transition 2분. 3분에 질문을 열고 8분에 마감하여 10분에 전환했다.
- [ ] S54 무질문 상황에서는 “이 반복은 Context, Workflow, Coordination, 기억 중 무엇에 가까운가?”를 사용하고 마지막 전환 질문을 지켰다.
- [ ] S72 순서: Case 7 → Reflection 2 → Q&A 7 → Transition 4분. 정적 화면으로 전체 20분을 실제 운영했다.
- [ ] S72 왼쪽 조건 변화→오른쪽 01 기존 가정·02 측정 조건·03 기능 계약→하단 성찰 질문의 지목 Cue를 사용했다.
- [ ] S72 무질문 상황에서 아래 준비 질문을 강사가 짧게 해설하고, 응답을 요구하지 않고 16분에 질문을 마감했다.
- [ ] S09/S21 및 마지막 S80도 질문이 없는 상황의 Notes fallback으로 진행했다.
- [ ] Live/Hybrid를 선택한 경우 중단·정적 fallback 복귀·다음 Slide 전환의 시간을 기록했다.
- [ ] 초과·축소 구간과 적용한 Cutoff를 기록했다.

S72 준비 질문: “예전 Benchmark와 비교하기 전에 어떤 조건을 맞춰야 할까요?”,
“성능이 달라졌을 때 기능 계약은 무엇으로 다시 확인할까요?”, “두 번째로 같은
문제가 생기면 Prompt 외에 무엇을 살펴볼까요?” 기존 세 질문의 범위에서
하나씩 사용하며 새 기술 사례나 제품 설정 강의를 열지 않는다.

S72 Cutoff: “이 질문은 여기까지 정리하고, 이제 처음 문제부터 지금의 Loop까지
연결해 보겠습니다.” 16–20분 Transition 뒤 S73으로 이동한다.

전체 시작·종료 / ACT별 실측 / S54·S72 및 무질문 결과 / 근거 경로:

____________________________________________________________________

## 6. Claim·Evidence 보호 — UNVERIFIED

- [ ] 실제 관찰, Observed Meta, Conceptual, Teaching Model, Research 경계를 유지했다.
- [ ] 측정하지 않은 token 절감·성능 향상·품질 개선을 추가하지 않았다.
- [ ] S64의 과거 관찰 참고와 평가 설계를 구분하고 새 EVAL-03/04 결과를 PASS/FAIL로 말하지 않았다.
- [ ] 현재 Desktop 동작을 과거 CLI Trial의 결과로 표현하지 않았다.
- [ ] S72 조건 변화는 가상 교육 맥락이며 실제 C++ 사건이나 확정된 실패 원인으로 표현하지 않았다.
- [ ] S74 State는 기록된 문제 대응 이력이며 성숙도 등급·Product Loop로 표현하지 않았다.
- [ ] DEC-0035의 현재 화면·Notes Cue를 기준으로 Story·Claim·Slide ID·ACT·시간·Mode·Demo State를 유지했다.
- [ ] S07은 회사별 허용·금지 정책 확인 결과가 아니며 S14 완료 조건·S18 결과 인계·S19 검사 비교는 교육용 예시로 설명했다. 실제 Prompt/PR 원문이나 새 실행·PASS 결과로 표현하지 않았다.
- [ ] 보호 변경 필요 시 `PROPOSAL / REASON / EVIDENCE / IMPACT / CONFLICT / RECOMMENDATION`을 작성하고 승인 전 적용하지 않았다.

## 7. 최종 전달 승인 — UNVERIFIED

- [ ] 선택한 운영 경로에 필요한 Windows·발표 PC 글꼴·교육장·오프라인 재생·시간 리허설 Gate의 증거를 확인했다.
- [ ] Live/Hybrid 또는 현재 제품 동작에 의존하는 경우 제품·계정·권한·Live 복귀 Gate의 증거도 확인했다.
- [ ] 최종 PPTX·Notes·Evidence 자료의 정확한 파일명과 해시를 기록했다.
- [ ] 미사용 경로·남은 UNVERIFIED 항목과 승인 범위를 기록했다.
- [ ] 전달 대상·경로·공개 범위를 정하고 최종 전달 명시 승인을 받았다.
- [ ] 외부 전달은 해당 승인을 받은 뒤 수행하고 전달 일시·파일·대상·증거를 기록했다.

최종 판정: **UNVERIFIED** (확인 후 PASS / PARTIAL / FAIL / UNVERIFIED 기록)

검증자 / 승인자·일시 / 승인 범위 / 전달 증거 경로:

____________________________________________________________________
