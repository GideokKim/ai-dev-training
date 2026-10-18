# 사용자 검증 체크리스트

상태: USER REQUIRED — 아래 실환경 확인은 현재 실행에서 수행하지 않았다.

대상 후보:

- 통합 덱: `production/AI_Dev_Training_Full.pptx`
- SHA-256: `c5e744e36d610e52179ff4f1f6979255a093b3794f83e6fa5b84dfa5cadcf19d`
- 전체 정적 렌더: `production/preview/full/S01.png`–`S80.png`
- 오프라인 Demo 대안: `demos/runbooks/FALLBACK_MANIFEST.md`

검증자: ____________________  날짜: ____________________
Windows PC / PowerPoint 빌드: ____________________
교육장 / 화면 비율: ____________________
교육 계정 / Codex surface: ____________________

각 항목에 PASS / FAIL / UNVERIFIED를 표시하고, 확인 날짜와 증거 경로를 남긴다. 실패가 있으면 해당 Slide와 환경을 기록하고, 보호된 Story·Claim·시간·Mode·Demo State를 바꾸지 않은 국소 수정 제안만 작성한다.

## 1. Windows PowerPoint

- [ ] 통합 PPTX가 복구 경고 없이 열린다.
- [ ] 임시 사본에 저장한 뒤 닫고 다시 열어도 80장이 유지된다.
- [ ] Slide ID와 순서가 S01–S80으로 유지된다.
- [ ] Slide Show 모드에서 화면 비율·전환·정적 도형이 정상이다.
- [ ] Speaker Notes 80개가 예상 Slide에 연결되어 읽힌다.
- [ ] 사용 글꼴과 실제 대체 글꼴을 기록했다.
- [ ] 한글 줄바꿈, 영문/한글 혼합, 코드, Citation, Evidence label을 확인했다.
- [ ] S73 카드 행과 S77 callout이 안전 여백 안에 있다.
- [ ] 확인 증거(화면 캡처 또는 점검 기록) 경로: ____________________

집중 확인 Slide: S05, S16, S35, S45, S54, S56, S64, S67, S72, S73, S77, S80.

결과 / 문제 Slide / 증거:

____________________________________________________________________

## 2. 교육용 Codex surface와 계정

- [ ] 실제 교육 계정 및 사용할 Codex surface를 선택했다.
- [ ] 현재 제품 버전·접근 권한·workspace/repository 접근 범위를 기록했다.
- [ ] 현재 공식 자료와 실제 계정 동작이 필요한 기능에 대해 재확인했다.
- [ ] Live/Hybrid를 쓸 경우 허용 모드와 작업 디렉터리를 별도로 확인했다.
- [ ] 발표 시작 전 Live 조건이 맞지 않을 때의 정적 fallback을 열어봤다.
- [ ] Live/Hybrid를 활성화하지 않는 경우에도 정적 경로만으로 Story가 전달된다.

기록할 점: TRIAL-001 및 TRIAL-008은 Codex CLI 0.154.0에서 관찰된 범위다. 이 기록은 현재 Desktop/교육 계정의 동작을 대신하지 않는다. 확인되지 않은 기능은 `UNVERIFIED`로 남긴다.

Surface / version / account scope / permission mode / evidence path:

____________________________________________________________________

## 3. 오프라인 Demo fallback

- [ ] 각 runbook에 나열된 PNG를 네트워크 없이 열었다.
- [ ] `demos/runbooks/FALLBACK_MANIFEST.md`의 파일 SHA-256이 일치한다.
- [ ] S05의 재구성 도식을 raw terminal screenshot으로 오해하지 않도록 label을 확인했다.
- [ ] S16 code/diff, S35 access matrix, S67 Meta timeline의 근거 경계를 확인했다.
- [ ] S64에서 EVAL-03/04가 설계된 확인 항목이며 결과가 없음을 확인했다.
- [ ] S66 Teaching Model과 S67 Observed Meta frame이 구분된다.
- [ ] fallback에서 다음 Slide로 넘어가는 cue가 작동한다.
- [ ] Live 실행을 시도하지 않고 정적 경로만으로 예정 시간에 맞춰 진행할 수 있다.

결과 / 파일 / 증거:

____________________________________________________________________

## 4. 교육장·프로젝터

- [ ] 실제 화면에서 16:9와 전체 안전 여백이 유지된다.
- [ ] 뒤쪽 좌석에서 제목, 핵심 diagram, Korean body, code, Citation, Evidence label을 읽을 수 있다.
- [ ] 화면 밝기·대비·프로젝터 scaling이 적절하다.
- [ ] S05 Evidence metadata와 S09 질문을 실제 거리에서 읽을 수 있다.
- [ ] S73/S77의 오른쪽 끝 요소가 화면에서 잘리지 않는다.
- [ ] 테스트 사진 또는 기록 경로: ____________________

## 5. 강사 시간 리허설

실제 리허설 전에는 시간 적합성을 PASS 처리하지 않는다. 실제 시작/종료 시간을 기록한다.

- [ ] 전체 360분을 리허설했다. 휴식 및 setup 시간을 교육 시간에 섞지 않았다.
- [ ] ACT 시간: ACT 0 40분 / ACT 1 55분 / ACT 2 70분 / ACT 3 85분 / ACT 4 80분 / ACT 5 30분.
- [ ] Mode 합계: Lecture 130 / Demo 73 / Case 83 / Reflection 20 / Transition 22 / Q&A 32분.
- [ ] S54 순서: Reflection 3 → Q&A 5 → Transition 2분.
- [ ] S72 순서: Case 7 → Reflection 2 → Q&A 7 → Transition 4분.
- [ ] S72에서 청중 질문이 없을 때의 Fallback Question과 시간 Cutoff를 사용했다.
- [ ] 각 Live/Hybrid 후보에서 fallback 복귀와 다음 Slide 전환을 리허설했다.
- [ ] 초과·축소 구간과 적용한 Cutoff를 기록했다.

ACT별 실측 / S54·S72 결과 / 근거 경로:

____________________________________________________________________

## 6. Claim·Evidence 보호

- [ ] 실제 관찰, Observed Meta, Conceptual, Teaching Model, Research 경계를 유지했다.
- [ ] 측정하지 않은 token 절감·성능 향상·품질 개선을 추가하지 않았다.
- [ ] 실제 수행하지 않은 EVAL-03/04를 PASS/FAIL로 말하지 않았다.
- [ ] 현재 Desktop 동작을 과거 CLI Trial의 결과로 표현하지 않았다.
- [ ] S73/S77 geometry 외에 Story·Claim·Slide ID·시간·Mode를 바꾸지 않았다.
- [ ] 보호 변경 필요 시 `PROPOSAL / REASON / EVIDENCE / IMPACT / CONFLICT / RECOMMENDATION`을 작성하고 승인 전 적용하지 않았다.

## 7. 최종 전달 승인

- [ ] Windows, 제품 계정, 교육장, 리허설 Gate가 모두 통과했다.
- [ ] 최종 PPTX와 Evidence 자료의 exact filename/hash를 확인했다.
- [ ] 전달 대상·경로와 공개 범위를 정했다.
- [ ] 외부 전달은 별도 명시 승인을 받은 뒤 수행한다.

최종 판정: PASS / PARTIAL / FAIL / UNVERIFIED

검증자 메모 및 승인 범위:

____________________________________________________________________
