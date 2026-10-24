# S67 반복 한 가지와 위치·유지 책임 — DEC-0079

Date:2026-10-24 (Asia/Seoul). Baseline:`0288e84`. Structure:93slides/379minutes.

## Status

LOCAL REVIEW COMPLETE — S67 화면·19필드 Notes·기획·PPT·Preview를 정렬했다.
Windows PowerPoint·실제 발표 글꼴·교육장·제품/계정·시간 리허설은 UNVERIFIED다.

## 화면과 선택 흐름

텍스트 목록을 세 후보→하나 선택→위치/책임의 도식으로 정리했다. 세 후보를
같은 비중으로 제시하며 특정 유형을 먼저 정리해야 하는 정답으로 강조하지 않는다.

| 구간 | 화면 | 발표자가 회수할 질문 |
|---|---|---|
| 반복 후보 |반복 정보: 명세·프로젝트 안내 / 반복 절차: 조사·변경·검증 / 검증 근거: 테스트·측정 조건|우리 업무에서 무엇이 반복되는가?|
| 선택 |하나만 선택|먼저 정리할 한 가지는 무엇인가?|
| 유지 |어디에 둘까? / 누가 검토·갱신할까?|기존 출처와 팀 흐름을 확인하고 위치·유지 책임을 생각하는가?|
| 다음 질문 |프로젝트가 바뀌면 어떻게 점검할까?|현재 성공을 기준점으로 남기고 이후 변화에 무엇을 재확인할까?|

후보를 연결한 선은 하나를 고르는 관계다. 세 종류를 전부 합치거나 새 시스템을
만들라는 지시가 아니다. 필요한 파일명·구조·담당을 임의로 정하지 않는다.
검토와 갱신 담당은 역할로 생각해도 되며 같은 사람일 수 있다. 미정이면
미확정으로 남긴다. 도식·연결선·제목·본문은 Native text/shape로 편집 가능하다.
새 이미지나 제품 화면·청중 결과를 생성하지 않았다.

## S66→S67→S68

S66에서 밝기 통계 Demo의 명세·수행 방법·검증 근거를 C++ 검사 업무로 옮긴
뒤, S67에서 청중 자신의 반복 한 가지와 위치·유지 책임을 생각하게 한다.
S68은 실제 STATE-04-PERF의 성공을 다시 확인한다. S69부터 별도 가상 변화가
시작된다. S66/S68 화면·Notes와 기존 S67 Transition 문장은 보존했다.
현재의 실제 성공을 실패한 Harness로 해석하거나 변화/실패를 미리 만들어 넣지 않는다.

## 운영 / Notes / 시간

ACT3·Full Markdown과 두 PPT 내장 S67 Notes를 정렬했다.19필드·10분을 유지한다.

| 시간 | Mode | 정적 화면의 발표 초점 |
|---|---|---|
|0–0:30|Reflection|S66에서 자기 업무로 연결; 작성이나 발표는 요구하지 않음|
|0:30–1:30|Reflection|세 후보에서 먼저 정리할 한 가지 선택|
|1:30–2:15|Reflection|기존 원출처와 관리 흐름을 확인하고 둘 위치 생각|
|2:15–3:00|Reflection|검토·갱신 담당 또는 역할 생각; 미정 허용|
|3:00–8:00|Q&A|공유는 선택; 위치/담당 질문으로 회수;8분 cutoff|
|8:00–10:00|Transition|프로젝트 변화 질문→S68 실제 성공 회수→이후 별도 가상 변화|

질문이 없으면 ‘이미 관리되는 출처가 있나요?’, ‘기준이나 측정 조건이 바뀌면
누가 확인하나요?’를 사용하거나 조용히 생각할 시간을 준다. 필기·저장소 수정·
실습·즉석 산출물·필수 공개 답변을 요구하지 않는다. 문서·Skill·Subagent·Memory
추가가 정답이라는 인상을 주지 않는다. 원래 출처를 우선 확인한다.

R1/R2/R3는 정적 화면에서 발표자의 초점을 옮기는 운영 구분이다. Native animation이나
숨김 콘텐츠는 구현하지 않았다. Template Map의 현재 S67 운영을 이 기준으로
정렬하고, 이전90장 S64에 적힌 운영 표는 역사적 기록으로 내용 그대로 보존했다.
실제10분 운영 리허설·청중 반응·팀별 결정은 수집/검증하지 않았다.

## 근거와 Claim Boundary

- TEACHING_MODEL / 개인 성찰 질문이며 실제 청중 선택·팀 운영 결정·성과가 아니다.
- 기존 Story Beat·Core Message·S67 Transition·T01-B·10분/Mode를 유지한다.
- STATE-04-PERF 실제 성공과 다음 ACT의 가상 변화를 구분한다.
- 필요성·위치·유지 책임을 생각하는 질문이며 새 기능·문서·시스템을 전제하지 않는다.
- 실제 Trial·Product State·Demo repository/State tag·승인 이미지·발표 묶음은 변경하지 않았다.
- 현재 Codex 기능·성능·토큰 절감·절차의 단독 인과효과에 관한 새 주장을 하지 않는다.

## 렌더·정합성 검토

| 항목 | 결과 |
|---|---|
| Full / ACT3 |93장·379분 /18장·85분 유지|
| S67 |Reflection3→Q&A5→Transition2분, T01-B|
| ACT 시간 |40/63/81/85/80/30분|
| Mode |Lecture143 / Demo73 / Case88 / Reflection21 / Transition22 / Q&A32|
| Notes |93개19필드; ACT·Full·PPT 내장 일치|
| 최종 패키지 렌더 |Full93+ACT3 18, 총111개 PNG,1920×1080|
| 수정 범위 |S67만 화면·Notes 변경, 다른92개 PNG·Notes 동일|
| ACT/Full 화면 |18개 대응 PNG hash 동일|
| 패키지·layout 자동 검사 |발견0건, 최종 패키지 재가져오기 통과|
| Office schema 검사 |기준0288e84와 비교한 Full/ACT3 검사 통과, 자동 수리 없음|
| 개별 시각 검토 |S66/S67/S68 및 연속 도식 확인; S67 제목·세 후보·선택·두 질문·하단 경계의 잘림/겹침 문제 미발견|
| 편집 가능성 |Native text/shape; S67 이미지·Native table/chart 없음|
| Native evidence |S47/S55 표와 S58 chart·데이터 보존|
| Template / Variant |11개 /27개 유지|
| 정적 대안 |기존32개 Demo fallback PNG hash 모두 동일; S67 성찰 Preview는 inventory 밖|
| 그 외 |다른 ACT·승인 이미지 파일·Prototype·묶음·Demo repository/State tag 보존|

자동 검사와 실제 시각 검토를 구분했다. 지정 서체는 Malgun Gothic/Consolas,
로컬 대체는 AppleSDGothicNeo/Menlo다. 이번 로컬 범위에서 미해결 P0/P1은
발견하지 않았다. 실제 투사 화면에서 도식·하단 메타정보의 가독성,10분 운영 및
Windows·교육장·제품/계정은 후속 검증으로 유지한다.

## 산출물

| Artifact | Path / SHA-256 |
|---|---|
| Full |[통합 PPT](../AI_Dev_Training_Full.pptx)|
| Full SHA-256 |`b4afecfe77282ebfc38898f191ecb0f5ff2793ed488cd01c538131c81c0d1520`|
| ACT3 |[ACT3 PPT](../ACT_3.pptx)|
| ACT3 SHA-256 |`dc75304e54df82d8ea6d0c4d38a8b0928a8c7edc4ae4b1602b3785b2becc1db4`|
| Notes |[ACT3](../notes/ACT_3_NOTES.md) / [Full](../notes/FULL_SPEAKER_NOTES.md)|
| Full Notes SHA-256 |`a951a6838448f4a513bc3529326f90e1a2e11f8ea9b99be98d495307e8d9a986`|
| Reflection Preview |[S67](../preview/full/S67.png)|
| S67 PNG SHA-256 |`6c42dcc9d3103c1ccdb3b82ca1fc3ad20de5a7ca4c25aad44321fa54c11777be`|
| 연속 검토 |[S66–S68](../preview/act3/S66-S68-continuity.png)|
| 검증 |[Validation JSON](S67_REFLECTION_OWNERSHIP_VALIDATION.json)|

기존main/origin의 정상 Git checkpoint를 따른다. Commit ID는 Git history에서
확인한다. Force push·Remote 변경·발표 자료 묶음 생성은 하지 않는다.
