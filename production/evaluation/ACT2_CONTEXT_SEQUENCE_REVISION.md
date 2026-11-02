# ACT2 Context 구간 순서·연결 수정

Decision: DEC-0125. Date:2026-11-02. Baseline:`6bb9678`.
Status: LOCAL RENDER AND STRUCTURE VERIFIED.

## 이전 번호와 현재 번호

| Current | Pre-reorder120 | Role | Time / Mode |
|---|---|---|---|
| S45 | S46 | Lost in the Middle의 제한된 연구 범위 | Lecture4 |
| S46 | S47 | 제공한 조건과 그럴듯한 오답 대조 | Lecture4 |
| S47 | S45 | 공통 정보와 작업별 정보의 관련성 분류 | Lecture4 |
| S48 | S49 | AGENTS.md와 상세 문서의 배치 기준 | Lecture4 |
| S49 | S50 | 실제 문서 분리 전후와 정보 보존 | Lecture2 + Demo2 + Case1 |
| S50 | S48 | 분리 후 관련 명세로 가는 설계 경로 | Lecture3 |

사용자가 요청한 이전 S46→S47→S45→S49→S50→S48을 현재 S45–S50으로 배치했다.
S51 이후 물리적 번호는 같다. 이전 판본·Decision·Trial·State·Beat·Claim ID와
asset/report 파일명은 변경하지 않는다.

## 역할·연결

S44의 실제 관련성 관찰 뒤, S45 연구와 S46 교육용 오답을 본다.
S47은 “작업이 달라도 필요한 정보는 같을까?”라는 질문으로 정보 자체의 관련 범위를
구분한다. 이미 파일을 분리했다는 인상을 피하고 “공통 정보와 작업별 정보는 어디에 둘까?”로 끝낸다.
S48은 문서 배치 기준만, S49는 실제 구조 변화만 맡는다.
S50은 “분리한 문서에서 필요한 명세 찾기”로 실제 분리 뒤의 활용을 보여준다.
마지막 문장은 “이제 실제 작업에서 어떤 문서를 읽었는지 확인한다.”로 S51에 연결한다.
S50의 경로는 설계한 관계이며 실제 읽기 순서와 구분한다.

이전 S50인 현재 S49 Notes는 다음 순서로 맞췄다.
0–1분 Lecture1 → 1–3분 CAPTURED Demo2 → 3–4분 Case1 → 4–5분 Lecture1.
Speaker Flow와 Time Management가 일치하며 총5분과 각 Mode는 변함없다.
S44 연결 Notes, S45–S50 Notes/내장 Notes와 S117 팁 찾아보기의 현재 S48 참조도 정렬했다.

## 검증

- Full120장, ACT2 22장, ACT5 15장을1920×1080으로 렌더링했다(개별 PNG157개).
- 수정한6장 순서·S44/S51 경계·ACT2 montage·S117 찾아보기를 시각 검토했다.
  이번 변경에서 새로운 잘림·겹침·번호 오류를 발견하지 않았다.
- 이동·수정7장 외113장 화면은 이전 판본과 픽셀이 같다.
- Full/ACT2 22장과 Full/ACT5 15장 화면, source/final7장 화면이 각각 일치한다.
- 단순 이동4장은 오른쪽 상단 번호를 제외하면 이전 내용의 화면과 픽셀이 같다.
- PPTX 변경 part는 Full15개, ACT2 13개, ACT5 2개다. 승인된 화면·Notes XML만 바뀌었다.
  미디어·관계·표·차트·워크북·Theme/Layout 등 나머지 part는 바이트가 같다.
- 다른4개 ACT PPT는 바이트가 같다.120개19필드 Notes와157개 내장 Notes를 대조했고,
  연결 수정8개 블록 외112개 Notes 내용은 이전과 같다.
- 120장·417분, ACT 장수14/23/22/26/20/15, ACT 시간42/64/90/96/85/40을 유지한다.
- 전체 Mode Lecture186/Demo49/Case105/Reflection22/Transition23/Q&A32를 유지한다.
  해당6장은24분=Lecture21/Demo2/Case1이다. 시간·Mode·Template·Section/Beat·Evidence는
  원래 내용에 따라 이동했다.12Templates/28Variants 체계는 그대로다.
- 패키지 무결성·16:9·layout finding0·first-party import를 통과했다.
  기존 경고 S04 connector/text2건과 S54 native table 추정 여유0.01inch는 그대로다.
  새 경고는 없다. 실제 PowerPoint·투사 가독성은 이 검사로 대체하지 않는다.
- 정적 Fallback44개 역할·분류를 유지했다. 실제 문서 분리 근거는 이전 S50에서 현재 S49로
  경로·번호·해시를 옮겼고, 현재 S50의 교육용 탐색 경로와 혼동하지 않는다.
- Map·Template Map·Claim Freeze·전환·기획 Router·최종 전달 식별자를 정렬했다.
  이전 판본의 기획 본문과 Decision은 이력으로 보존한다.

## 근거 범위·남은 검증

S45 연구는 당시 모델·과제·입력 위치/길이 조건의 결과다. 현재 Codex나 지침 누락→
할루시네이션 인과를 검증한 것으로 확대하지 않는다.
S46 오답은 교육용 가정으로 실제 Agent 응답·새 Trial·내부 원인 관찰이 아니다.
S47/S48/S50은 교육용 정보/배치/탐색 모형이며, S49는 보존된 STATE-02→03 실제 구조다.
읽기 순서 보장·완벽한 Routing·성능/토큰 절감은 주장하지 않는다.
S51–S54 실제 접근 근거와 한계, 사용자 별도 S41 데모9개와 역사적 TRIAL-003의11개 구분은 유지한다.

로컬 렌더는 Malgun Gothic/Consolas를 Apple SD Gothic Neo/Menlo로 대체한다.
Windows PowerPoint·실제 발표PC/교육장·제품/계정·실측 리허설은 UNVERIFIED다.
이번 변경에서 새 P0/P1 문제를 발견하지 않았다. Demo 저장소·Sites·발표 묶음은 변경하지 않았고
새 Trial·제품 실행·실측 리허설은 하지 않았다.

## 산출물

[6장 흐름](../preview/act2/context-sequence.png), [통합 PPT](../AI_Dev_Training_Full.pptx),
[ACT2 PPT](../ACT_2.pptx), [ACT5 PPT](../ACT_5.pptx),
[ACT2 Notes](../notes/ACT_2_NOTES.md), [현재 순서와 대응표](../../plan/ACT2_CONTEXT_SEQUENCE.md),
[Slide Map](../../plan/SLIDE_MAP.md), [Claim Freeze](../../plan/CLAIM_FREEZE.md),
[Decision](../../plan/DECISIONS.md), [현재 파일 식별자](FINAL_HANDOFF.md).
