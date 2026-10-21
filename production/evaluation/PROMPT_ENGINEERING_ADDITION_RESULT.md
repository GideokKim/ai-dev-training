# ACT 1 — Practical Prompt Engineering Addition Result

Date:2026-10-21. Decision:DEC-0043. Baseline:0772b4b.
Status: **COMPLETE — LOCAL ARTIFACT / RENDER REVIEW PASSED**.
Windows PowerPoint, target fonts, room projection, current product/account
and timed rehearsal remain **UNVERIFIED**.

## 1. Approved Change

사용자는 기존 S21과 S22 사이에 현재 유용한 Prompt Engineering 기법을
소개하도록 승인했다. 이어 “기존 슬라이드는 언제나 유지하고 시간은 더 늘려도
상관 없어 많이 늘려도 돼”라고 확인했다. 기존82장과 장별 배정은 그대로 두고
새8장에 각각1분을 더했다. 다른 ACT의 시간과 기존 Mode 배분을 줄이지 않았다.

- 현재: **90장 /368분(6시간8분)**.
- ACT 1: **S11–S31 /21장 /63분**.
- 새 소개: **S22–S29 /8장 /8분**.
- 기존 S22–S82: **S30–S90**으로 번호 이동.
- 기존 S22–S23의 Project Context 전환 역할은 현재 S30–S31에 보존한다.

## 2. Added Slides

| Slide | Method | Standalone use | Claim / Source |
|---|---|---|---|
| S22 | 지시와 참고 자료의 구분 | 요청과 명세·로그를 제목으로 나눠 읽을 경계를 표시 | CLM-0032 / SRC-0230–0231 |
| S23 | 입력과 기대 결과의 작은 예시 | 설명이 엇갈릴 때 명세와 맞는 범위·값·폭 예시 추가 | CLM-0033 / SRC-0230–0231 |
| S24 | 바로 검토할 수 있는 결과 형식 | 변경·실행한 확인·미실행·남은 위험 순서 지정 | CLM-0034 / SRC-0233–0234 |
| S25 | 근거가 있는 설명과 미확인의 구분 | 파일·함수·줄과 확인/추정/미확인 상태 요청 | CLM-0035 / SRC-0230,0234 |
| S26 | 결과를 바꾸는 결정에서 확인 질문 | 조사할 사실과 사람이 선택할 정책을 구분 | CLM-0036 / SRC-0232,0235 |
| S27 | 큰 작업을 검토할 결과물로 나누기 | 경로 조사 결과를 보고 다음 구현 범위를 결정 | CLM-0037 / SRC-0232,0234,0231 |
| S28 | 기준을 지정한 코드 리뷰 요청 | 보존할 명세·API·변경 범위와 보고할 근거 지정 | CLM-0038 / SRC-0232,0234,0235,0230 |
| S29 | 구체적인 근거로 수정 방향 피드백 | 첫 제안의 어긋난 지점·원하는 변경·유지 조건 전달 | CLM-0039 / SRC-0234 |

각 장은 사용 상황, 복사해서 프로젝트에 맞게 바꿀 Prompt 예시, 두 활용 cue,
핵심 메시지, 공식 출처와 한계를 가진다. 강사는 전문을 낭독하지 않고 두세 행을
가리키는 운영을 Notes에 적었다. 8개 기법을 모든 요청에 채워 넣는 규칙으로
설명하지 않는다. Prompt 원문은 [추가 기획](../../plan/PROMPT_ENGINEERING_ADDITION.md)에 보존한다.

## 3. Story Connection

S21의 완료 근거 확인 뒤 S22에서 요청 표현 도구를 소개한다. S29의
“다음 작업에도 같은 조건을 쓴다면?”을 받아 S30에서 Task/Project 정보의
범위를 묻고, S31의 분류 질문을 거쳐 S32의 반복 Context 문제로 넘어간다.
기존 요청 설계 → 실제 지시/행동/확인 기록 → 완료 판단의 흐름은 유지했다.
기법 소개에서 AGENTS.md나 Skill을 해답으로 미리 공개하지 않는다.

## 4. Evidence and Claim Scope

2026-10-21에 OpenAI 공식 문서 본문에서 권고를 확인했다.
[근거표](../../references/product/PROMPT_ENGINEERING_2026-10-21.md),
[Claims](../../references/CLAIMS.md), [Sources](../../references/sources/SOURCES.md)에
출처·주장·한계를 연결했다.

공식 권고가 있다는 사실을 확인했으며 교육용 요청을 실행·비교한 것은 아니다.
새8장은 실제 TRIAL-002 입력이나 C++ 실행 기록이 아니다. 구획 표시를 보안
격리로, 예시를 완전한 명세로, 채팅 형식 요청을 API Structured Outputs로,
검토 관점을 정확성 보장으로 설명하지 않는다. 토큰·시간·성능 개선 성과는
추가하지 않았다. Prompt 비교 평가 체계·재사용 메커니즘은 이후 ACT에 남긴다.

## 5. Preservation and Traceability

- 기존82장 Estimated Time / Delivery Mode / ACT / Section / Title / Story Beat /
  Evidence Type을 baseline과 대조했다. 기존 배정 변경0건이다.
- 최종 Full PPT의 기존82장 XML을 비교했다. 번호·내부 Slide 참조·생성 식별자를
  정규화하면 내용·도형·위치·스타일이82/82 동일하다.
- 기존1,947개 도형과 이미지20회 사용, 고유 이미지13개의 bytes를 보존했다.
- native chart의 XML·값10.769/15.468 및 연결 workbook의 압축 해제된5개 파일이
  동일하다. ZIP 컨테이너의 생성 시각 차이는 데이터 변경으로 계산하지 않는다.
- S01–S21 Full PNG는 이전판과 bytes가 같다. ACT0 PPT/Notes도 변경하지 않았다.
- 기존 TRIAL/DEMO/STATE/BEAT 식별자와 실제 근거 범위는 유지한다.
- S21 Notes의 두 문단은 새 구간으로 연결되도록 정렬했다.
- S84 recap Notes의 출처 basename을 실제 `S16/S32/S45-source.png`로 교정했다.
  이전판 Notes에 이미 존재하던 잘못된 `S34/S47-source.png`가 번호 이동 과정에서
  다시 바뀐 것을 발견했다. 원본 파일명과 현재 대응 S18/S42/S55를 구분한다.
  원본 이미지·화면 내용·Trial 근거는 바꾸지 않았다.
- Map, Template Map, Claim Freeze, 현재 Notes·runbook·체크리스트·전달 문서와
  원본/현재 번호 대조표를 정렬했다. 역사적80/81/82장 문서·캡처 파일명은 보존한다.

## 6. Time and Mode Validation

| ACT | Range | Slides | Minutes |
|---|---|---:|---:|
| 0 | S01–S10 |10|40|
| 1 | S11–S31 |21|63|
| 2 | S32–S46 |15|70|
| 3 | S47–S64 |18|85|
| 4 | S65–S82 |18|80|
| 5 | S83–S90 |8|30|
| Total | S01–S90 |90|368|

Lecture137 / Demo73 / Case84 / Reflection20 / Transition22 / Q&A32 =368분.
추가8분은 Lecture7 + Case1이다. 기존82장 배정은 모두 유지했다.

## 7. Render, Notes and Template Validation

- 최종 Full90장과 갱신 ACT80장을 다시 읽어1920×1080으로 렌더링했다.
  ACT0의10장은 변경하지 않은 PPT/기존 PNG와의 일치를 확인했다.
  현재 Full/ACT PNG는 총180장이다.
- ACT1 전체21장과 S32,90장 montage, 다른 ACT의 고위험11장
  (S39/45/55/65/66/74/76/78/82/84/90)을 개별 시각 검토했다.
- 마지막 S26 출처 행을 짧게 정리하고 다시 렌더링해 오른쪽 잘림을 해소했다.
  최종본과 최초 통합본의 PNG 차이는 S26뿐이다. 기존82장 화면은 유지했다.
- 갱신한6개 PPTX의 package/geometry/font-policy/import 검사 finding은0이다.
  이는 로컬 구조·배치 검사이며 Windows PowerPoint 검증이 아니다.
  PPT 지정 글꼴은 Malgun Gothic/Consolas이며 로컬 preview는 Apple SD Gothic Neo/
  Menlo 대체 렌더링을 사용했다. 실제 발표 PC 글꼴 확인은 남아 있다.
- Full90개와 ACT 합계90개 레코드, PPT 내부 Notes를19개 필드로 대조했다.
  ACT/Full의 같은 Slide PNG90쌍도 일치한다.
- 11개 Template /27개 Variant를 유지한다. 새8장은 T03-A의 핵심 요청 블록과
  두 활용 cue를 쓰는 한정된 적용으로 규칙에 명시했다.
- 작은 M2 footer는 원리 연결이며 기존 M2 전체 내용을 충족한다는 의미가 아니다.
- Fallback29장의 실제 파일·크기·hash를 재확인하고 현재 manifest를 갱신했다.

## 8. Outputs

- [Full PPT](../AI_Dev_Training_Full.pptx)와 ACT1–5 PPT.
- [추가8장 한눈에 보기](../preview/act1/prompt-methods-montage.png), ACT1/Full/ACT별 PNG와 montage.
- [Full Notes](../notes/FULL_SPEAKER_NOTES.md)와 ACT1–5 Markdown Notes.
- [번호 대조표](../../plan/SLIDE_ID_MIGRATION_90.md), 현재 Map·Claim·Visual/Notes 기준.
- [검증 결과](PROMPT_ENGINEERING_ADDITION_VALIDATION.json), 최신 handoff/checklist/fallback.

사전8장 review는 `prototype/prompt-engineering-addition/`에 이력으로 보존한다.
그 안의 시간·통합 대기 상태는 당시 기록이다. 현재 기준은 이 문서와 Full PPT다.

## 9. Remaining Gates and Git Checkpoint

P0/P1 로컬 제작 차단 사항은 없다. 각1분의 설명 적합성, 전체368분과 S82의20분
운영, Windows/실제 글꼴/투사/제품·계정은 UNVERIFIED다. 실환경과 리허설의
확인은 사용자에게 남긴다. Demo 저장소는 afef3e0에서 clean 상태이며 기존
State/tag는 유지한다. 새 Trial·코드 실행 비교·묶음 ZIP/HTML 생성은 수행하지 않았다.

정상 산출물을 기존 origin/main에 일반 commit/push한다. 실제 commit ID와 push
결과는 Git 이력과 완료 보고에 기록한다. Force push는 사용하지 않는다.

**Next readiness: READY FOR ACT 1 CONTENT REVIEW.**
