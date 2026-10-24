# S66 밝기 통계 Demo의 세 기준을 C++ 검사로 — DEC-0078

Date:2026-10-24 (Asia/Seoul). Baseline:`5070e2c`. Structure:93slides/379minutes.

## Status

LOCAL REVIEW COMPLETE — S66 화면·19필드 Notes·기획·PPT·Preview를 정렬했다.
Windows PowerPoint·실제 발표 글꼴·교육장·제품/계정·시간 리허설은 UNVERIFIED다.

## 세 기준의 적용

기존 별도 C++ 목록을 실제 Demo→C++ 적용의 세 대응 행으로 바꿨다. 승인된
파이프라인 삽화는75% 배치 크기로 줄여 업무 맥락을 유지하고, 대응 행이
핵심 설명이 되도록 했다. 같은 crop을 유지했으며 원본 파일은 편집하지 않았다.

| 기준 | 밝기 통계 Demo에서 확인 | C++ 검사 업무에 적용 |
|---|---|---|
| 지킬 명세 |출력6항목 유지|ROI·픽셀값·입출력 명세를 실제 프로젝트에서 확인|
| 수행 방법 |기준선·경로 조사·변경·동일 조건 비교|검사 모듈에 같은 조사·최소 변경·검증 절차 적용|
| 검증 근거 |테스트·실행시간·Python 할당 피크|팀에 맞는 동작·회귀·통합·성능 근거로 확인|

하단에 입력·빌드·장비 조건도 함께 확인하도록 표시했다. 세 행은 파이프라인의
세 단계가 아니라 전체 검사 작업에 적용할 판단 기준이다. 구체적 임계값,
C++ 도구/명령·장비 선택이나 개선 수치는 새로 확정하지 않는다.

## S65→S66→S67

S65에서 코드 외의 적용 조건도 확인한 뒤, S66에서 실제 팀의 입력·빌드·장비
조건을 포함해 세 기준을 전이한다. S67은 자기 업무의 반복 한 가지와 위치·검토/
갱신 책임을 고르는 성찰이다. S65/S67 화면·Notes와 기존 S66 Transition은
그대로 유지했다. ACT4의 가상 프로젝트 변화나 결과를 미리 추가하지 않는다.

## 근거와 교육용 범위

[DEMO_MATRIX](../../plan/DEMO_MATRIX.md)의 TRIAL-008/STATE-04-PERF와 Working
Harness Success를 대조했다. 실제 밝기 통계의 동작 보존·수행 절차·검증 근거를
왼쪽에 요약하고 오른쪽은 기존 C++ 교육용 적용 범위로 유지한다.

- TEACHING_MODEL, PRIMARY C++ Bridge 및 T03-A 유지.
- C++ 구현·테스트/benchmark 실행·회사 장비·성능 성과는 없다.
- ROI·픽셀·입출력 명세와 빌드/장비 조건은 팀에서 실제 확인한다.
- Python 코드·측정 수치·tracemalloc 할당 지표를 C++ 구현/메모리 기준으로 복사하지 않는다.
- unittest→GoogleTest/CTest 또는 통합 검사, benchmark script→benchmark/profiler는 기존 예시이며 팀 표준 확인이 필요하다.
- 구체적 Windows/shell/IDE/hardware 지시를 추가하려면 대상 환경을 별도 확인한다.
- 각 Harness/Skill 요소의 단독 효과나 동일한 C++ 개선 결과를 주장하지 않는다.
- 실제 Trial·Product State·Demo repository/State tag·승인 이미지·발표 묶음은 변경하지 않았다.

## 이미지와 편집 가능성

[기존 삽화](../../prototype/image-illustration-pilot/assets/S53.png)는
2026-10-18 AI 생성 설명용 이미지다. [원 프롬프트](../../prototype/image-illustration-pilot/PROMPTS.md)를
보존했다. Full/ACT3 PPT 내장 이미지 bytes와 crop(top0.08/bottom0.12)은
이전 판본과 동일하며 위치·크기만 조정했다. crop은 새 이미지 편집 결과가 아니다.

- Asset SHA-256:`ee260d12c7a806b434e260ea929538925437b590c537354a1ab89ad3b8109a01`.
- Native text·행별 연결선은 편집 가능하다. 이미지 자체는 승인된 raster 삽화다.
- 신규 이미지 생성이나 실행 Screenshot 제작은 없다.

## Notes / 시간 / Demo

ACT3·Full Markdown과 두 PPT 내장 S66 Notes를 정렬했다.19필드·Lecture5분은
연결0.75, 명세1, 수행 방법1, 검증 근거1.25, 실행 조건0.67, 범위/전환0.33분이다.
도구 예시·측정량 차이·전체 Workflow 조건은 Notes에서 유지한다.
실제5분 운영 리허설은 UNVERIFIED다. Demo 시간이나 Trial을 추가하지 않았다.
S66은 Lecture Preview이며 기존32개 Demo fallback PNG와 각 역할은 유지한다.

## 렌더·정합성 검토

| 항목 | 결과 |
|---|---|
| Full / ACT3 |93장·379분 /18장·85분 유지|
| S66 |Lecture5분, T03-A, PRIMARY C++ Bridge|
| ACT 시간 |40/63/81/85/80/30분|
| Mode |Lecture143 / Demo73 / Case88 / Reflection21 / Transition22 / Q&A32|
| Notes |93개19필드; ACT·Full·PPT 내장 일치|
| 최종 패키지 렌더 |Full93+ACT3 18, 총111개 PNG,1920×1080|
| 수정 범위 |S66만 화면·Notes 변경, 다른92개 PNG·Notes 동일|
| ACT/Full 화면 |18개 대응 PNG hash 동일|
| 패키지·layout 자동 검사 |발견0건, 최종 패키지 재가져오기 통과|
| 추가 OOXML 검사 |기존 판본과 대조한 Full/ACT3 schema·관계 검사 통과, 자동 수정 없음|
| 개별 시각 검토 |S65/S66/S67 확인; S66의 삽화·두 열·세 대응 행·실행 조건 잘림/겹침 문제 미발견|
| 이미지 |원본 및 Full/ACT3 내장 bytes/crop 동일, 배치만75%|
| Native evidence |S47/S55 표와 S58 chart·데이터 보존|
| Template / Variant |11개 /27개 유지|
| 정적 대안 |기존32개 Demo fallback PNG hash 모두 동일|
| 그 외 |다른 ACT·승인 이미지 파일·Prototype·묶음·Demo repository/State tag 보존|

자동 검사와 실제 시각 검토를 구분했다. 지정 서체는 Malgun Gothic/Consolas,
로컬 대체는 AppleSDGothicNeo/Menlo다. 이번 로컬 범위에서 미해결 P0/P1은
발견하지 않았다. 실제 투사 화면에서 대응 행과 삽화의 가독성,5분 운영 및
Windows·교육장·제품/계정은 후속 검증으로 유지한다.

## 산출물

| Artifact | Path / SHA-256 |
|---|---|
| Full |[통합 PPT](../AI_Dev_Training_Full.pptx)|
| Full SHA-256 |`b549bbdfcf113394dc74b5d40e70013cb30cee111701176e6ed09c6d13ceb164`|
| ACT3 |[ACT3 PPT](../ACT_3.pptx)|
| ACT3 SHA-256 |`82efa6565421dc23c7c41859fc7c111fe18d7404ccf2cf7047277e83cb9b410d`|
| Notes |[ACT3](../notes/ACT_3_NOTES.md) / [Full](../notes/FULL_SPEAKER_NOTES.md)|
| Full Notes SHA-256 |`fade3ef28367f421536c6ad284a28b7146d891c9dc80f3bc82050c5a075c55d9`|
| Lecture Preview |[S66](../preview/full/S66.png)|
| S66 PNG SHA-256 |`5689a32c62712a03f0f6a54fc3bc253ff251e71cf5d30c8999de766896dc642c`|
| 연속 검토 |[S65–S67](../preview/act3/S65-S67-continuity.png)|
| 검증 |[Validation JSON](S66_CPP_TRANSFER_VALIDATION.json)|

기존main/origin의 정상 Git checkpoint를 따른다. Commit ID는 Git history에서
확인한다. Force push·Remote 변경·발표 자료 묶음 생성은 하지 않는다.
