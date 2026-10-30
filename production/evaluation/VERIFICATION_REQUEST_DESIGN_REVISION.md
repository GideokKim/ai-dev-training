# ACT1 — 검증 요청 설계 정리 결과

Decision: DEC-0114. Date:2026-10-30. Baseline:`c653623`.

## Result

이전 S26–S28을 두 장으로 정리했다. 현재120장·417분(6시간57분), ACT1 S15–S37의
23장·64분이다. 이전 S28은 삭제하고 검증 요청 작성 역할을 S27에서 회수했다.
이전 S29–S121은 현재 S28–S120으로 한 칸 당겼다. 그 밖의 내용과 개별 배정은 유지했다.

| Slide | Role | Time / Mode | Evidence |
|---|---|---|---|
| S26 | 원하는 결과에 맞춰 확인 방법을 고른다. 판단할 질문→요청할 확인의5행. | Lecture2분 | 기존 Python 검증 기록 + 교육용 범위 대응 |
| S27 | 같은 crop의 경계 오류 수정/실행시간 단축에서 달라지는 검증 요청 비교. | Lecture2+Reflection1분 | 두 요청 모두 교육용 작성 예시 |
| Total | 확인 방법 선택→목표별 검증 요청 | 5분=Lecture4+Reflection1 | 새 Trial·측정 결과 없음 |

S25 사람의 완료 판단→S26 확인 선택→S27 요청 작성→S28–S35 요청 문장 도구→
S36/S37 반복 Context→ACT2 S38/S39로 이어진다. ACT0에서 배운 기대 폭·vector를
재설명하지 않고, 원하는 변화에 맞는 근거를 요청하는 ACT1의 목적에 집중했다.
S25 화면은 유지하고 Notes의 다음 장 안내와 선택 참고 위치만 정렬했다.

## Evidence / claim

TRIAL-002는 기존 macOS Codex CLI0.154.0/Python 관찰이다. 실제 요청 전문,
반열림 crop 명세,1줄 수정, 관련3/3·전체11/11·CLI 샘플·diff 확인을 그대로 보존했다.
관련3건에는 resize도 있다. 당시 성능은 미측정이며 현재 Desktop 검증을 뜻하지 않는다.

S27은 두 목표의 검증 부분을 보여주는 교육용 요청이다. 실제 TRIAL-002 입력의 인용·
그대로 실행한 문장·새 측정 결과가 아니다. 목표2는 시간 단축 작업을 맡기는 가정이며
실제 성능 향상, 총 토큰/시간 절감 또는 Prompt 우월성을 주장하지 않는다.
명세는 저장소의 기준을 참조하며 모든 기대값을 매번 요청에 복사하도록 요구하지 않는다.
확인 결과를 실제 입력·조건·테스트 범위 밖으로 일반화하지 않는다.

이전 C++ vector·EXPECT_FALSE·EXPECT_EQ 예시는 S27 Notes의 선택 참고로 보존했다.
기본5분 설명에는 포함하지 않는다. 실제 Python assertion, 잘못된 출력의 PASS 기록,
새 GoogleTest/C++ 실행으로 표현하지 않는다. 기존 문서 출처의 기술 의미만 유지한다.

## Source / Notes / planning

versioned source의121-ID 판본과 기존 JSON/asset 이름은 그대로 유지하고, 마지막 경계에서
old S28을 삭제하고 새120-ID로 이행한다. S26/S27은 현재 source로 작성하고 다른 장은
기존 PPT package에서 번호/현재 참조와 Notes만 정렬해 미디어·native 개체를 보존했다.
T06-C/T04-A를 재사용해12Templates/28Variants와19Notes 필드를 유지한다.
Map/Template Map/현재 기획 안내·번호 이행표와 결정 기록을 정렬했다. DEC-0112는
DEC-0114로 대체된 범위를 명시하고 원문 이력·근거 경계를 보존했다.

## Validation

- 최종7개 PPTX의 구조·16:9·폰트 정책·layout finding0·first-party import를 통과했다.
- Full120장과 ACT별120장, 총240개의1920×1080 PNG를 최종 파일에서 렌더링했다.
- Full/ACT의120개 화면이 픽셀 단위로 같고240개 내장 Notes가 공식120개19필드 Notes와 같다.
- S26/S27과 앞뒤 S24–S28, S35–S39, 마지막 S117–S119를 개별 화면으로 확인했다.
  새 두 장의 제목·행 간격·요청 문장·근거 footer에서 새 잘림·겹침을 발견하지 않았다.
- ACT0–ACT5 montage를 검토했다. 나머지118장의 XML은 표시 ID/현재 참조 외에 같고,
  해당 번호 영역을 제외한 렌더 픽셀도 같다. ACT0 PPT는 바이트 단위로 같다.
- 원본 media·차트 데이터·embedded workbook 바이트가 그대로다. 표 S54/S66, 차트 S70/S97.
-120장·417분, ACT42/64/90/96/85/40분과 Lecture186/Demo49/Case105/Reflection22/
  Transition23/Q&A32분을 중복 없이 대조했다. 나머지118장의 개별 시간/Mode도 같다.
- 기존44개 정적 Fallback의 역할·분류를 유지하고 현재 경로·SHA-256을 갱신했다.

로컬 렌더는 Malgun Gothic/Consolas를 Apple SD Gothic Neo/Menlo로 대체했다.
Windows PowerPoint·발표PC 글꼴·교육장 투사·제품/계정·실측 리허설은 UNVERIFIED다.
2분/3분 배정의 실제 운영 적합성도 리허설 전에는 확정하지 않는다.
Demo 저장소·Sites·발표 묶음은 변경하지 않았고 새 Trial을 실행하지 않았다.

## Remaining items

P0: 이번 변경에서 발견하지 않음.
P1: 실제 발표 PC/교육장의 가독성과 두 장5분 운영은 기존 사용자 검증 Gate에서 확인.
P2: 선택 참고 assertion 설명은 필요한 질문이 있을 때만 사용. 기존 미검증 Gate 유지.

## Artifacts

[통합 PPT](../AI_Dev_Training_Full.pptx), [ACT1](../ACT_1.pptx),
[S26](../preview/full/S26.png), [S27](../preview/full/S27.png),
[ACT1 montage](../preview/act1/montage.png), [전체 montage](../preview/full/montage.png),
[Notes](../notes/ACT_1_NOTES.md), [기획](../../plan/VERIFICATION_REQUEST_DESIGN.md),
[번호 이행](../../plan/SLIDE_ID_MIGRATION_120_DEC0114.md), [현재 Map](../../plan/SLIDE_MAP.md).
