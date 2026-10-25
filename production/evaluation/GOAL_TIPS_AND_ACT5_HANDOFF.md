# Goal 실무 적용 팁과 ACT4→ACT5 연결 검토 결과

Decision: DEC-0098. Date:2026-10-25 (Asia/Seoul). Baseline:`4615e0d`.
Status: **LOCAL RENDER / CONTENT / NOTES ALIGNMENT COMPLETE**.

## 추가한 두 장

| Slide | 메시지 | 구성과 근거 |
|---|---|---|
| S99 | Goal이 목표와 다음 작업을 이어준다 | /goal 목표 설정과 작업→근거 확인→계속/완료, 미충족 시 다음 작업으로 돌아가는 native 도식 |
| S100 | Goal에는 완료 근거와 멈출 조건을 담는다 | 밝기 통계의 할당량 목표·출력 보존·같은 입력의 테스트/측정·회귀/막힘 보고를 담은 요청 예시 |

두 장에 기존 공통 “실무 적용 팁” 배지와 수행 방법/검증·개선 분류를 적용했다.
각 Lecture2분이며 기존114장 배정은 줄이지 않았다. 현재 **116장·410분(6시간50분)**,
ACT4 S82–S101의20장·85분, ACT5 S102–S116의15장·40분이다.

Goal의 지속 목표와 계속 수행은 공식 안내로 확인한 기능이다. 도식은 실제 UI·실행 캡처가
아니며, 밝기 통계 Goal을 활성화하거나 새 Trial·모델 조합·성능/비용 실험을 실행하지 않았다.
기능을 켜면 다른 모델 검토자가 자동 배정되거나 목표 달성을 보장한다고 설명하지 않는다.
완료 기준·도구 근거·다른 모델 검토의 역할 설계와 사람의 수용 책임을 구분했다.

## ACT5 초반의 연결 검토

기존 구조는 유지할 수 있었다. Goal 안내 직후 실제 제품 이력으로 넘어갈 때 근거가
섞일 위험과, 더해 온 기능의 회고에서 필요한 조합을 고르는 관점으로 넘어가는 연결을 정렬했다.

| Current slide | 변경/판정 |
|---|---|
| S101 | 기존 성찰 질문은 보존하고 제품 기능 활용과 내 업무의 검증·검토 조합을 하단/Notes로 연결 |
| S102 | ACT5 승인 제목·부제·1분은 유지, Notes로 전환을 연결 |
| S103 | 다섯 단계 회고를 대응 선택 지도로 회수. 다음 수정의 단절과 플랫폼 기능 활용을 연결 |
| S104 | 기존 일곱 State·세 변경을 보존하고 Goal/다중 모델을 이 제품에서 실행 검증하지 않았음을 화면에 표시 |
| S105 | 화면은 번호만 이동. Subagent/Memory 보류는 그 과거 작업의 의존관계·지식 출처라는 범위를 Notes에서 강조 |
| S106 | 기존 네 수용 질문을 보존하고 Goal 완료 보고와 사람의 근거 확인을 화면/Notes로 연결 |
| S107→S108 | 현재 기능을 활용한 작업 조건 설계에서 플랫폼 변화에 따른 통합·제거 검토로 Notes 전환을 연결. 뒤 Anthropic 사례는 별도 출처로 유지 |

S104의 Notes에 남아 있던 옛 Crop 참조를 S23–S24, 지침/문서 범위를 S39–S53,
Skill/성능 범위를 S61–S66으로 바로잡았다. 이동한 Notes의 정적 Preview 경로도 현재
Slide ID와 맞췄다. 이전 Notes 안내는 삭제하지 않고 당시 판본의 이력으로 보존했다.

이후 조합·통합·제거와 같은 대표 작업의 회귀 확인, 개인 다음 행동, 마지막 찾아보기와
마무리의 역할·시간은 유지한다. 자체 반복 장치의 중복 역할을 재평가할 수 있다는 연결이며,
Goal이 모든 운영·검증·모델 역할을 대신한다거나 해당 구조의 제거 효과를 검증한 주장은 없다.

## 근거 범위와 현재성

- SRC-0240: [Long-running work](https://learn.chatgpt.com/docs/long-running-work).
- SRC-0241: [Using Goals in Codex](https://developers.openai.com/cookbook/examples/codex/using_goals_in_codex).
- SRC-0242: [App slash commands](https://learn.chatgpt.com/docs/reference/slash-commands).
- 위 문서는2026-10-25에 확인했다. CLM-0046/0047은 문서상 기능·작성 안내이며
  사내 계정·설정·제품 표면의 사용 가능 여부와 실제 작동은 UNVERIFIED다.
- ReConcile/CriticBench, 기존 Product/Meta/Trial/State의 의미와 범위는 보존했다.
  새 Goal 안내와 연구를 Product 실행 이력에 합치지 않았다.

## 시간·Mode·구조

| ACT | Slides | Count | Minutes |
|---|---|---:|---:|
|0|S01–S14|14|43|
|1|S15–S36|22|64|
|2|S37–S55|19|82|
|3|S56–S81|26|96|
|4|S82–S101|20|85|
|5|S102–S116|15|40|
|Total|S01–S116|116|410|

Full Mode: Lecture176/Demo51/Case103/Reflection22/Transition26/Q&A32분.
ACT4: Lecture34/Case37/Reflection4/Q&A7/Transition3=85분.
기존114개 Slide의 시간·Mode·Evidence Type은 그대로이며 새 두 장은 Lecture4분이다.
기존 성찰 S99는 S101로 이동했고 Reflection2→Q&A7→Transition2의11분을 보존했다.
12Templates/28Variants와19Notes 필드 유지. 실무 팁21개와 마지막 S113–S115의
제목/ID 대응을 확인했다. Goal 두 장은 기존 T03-C를 사용한다.

## 렌더링과 파일 검증

- 최종 Full116장, ACT4 20장, ACT5 15장을 최종 PPTX에서 재입력·렌더링했다.
  보존 ACT0–3의81장과 합친232개 현행 PNG의 Full/ACT116장 대응을 확인했다.
- 전체6ACT 연락판을 순서대로 검토하고 S98–S116은 개별 화면도 확인했다.
  수정하지 않은 S01–S98은 이전 렌더와 픽셀까지 동일하다.
- 새 잘림·겹침·한글 누락·연결선 불일치는 발견하지 않았다. Goal 도식의 귀환 화살표를
  위쪽 작업으로 향하도록 맞췄다. 현재 팁 목록의 두 열과 모든 제목/ID도 확인했다.
- 116개 Notes의19필드, ACT/Full Markdown 대응, 새3PPTX의 내장 Notes151개를 대조했다.
  기존 ACT0–3의 Notes 레코드와 PPTX는 그대로이며 안내 머리말만 현행 판본에 연결했다.
- 기존 그림17인스턴스의 bytes/crop/배치와 Native 표 S53/S62·차트 S66/S93을 보존했다.
  S93의79.0/72.2와0–100 값 축도 유지한다. 이전 연결선 수정은 현재 S110에 동일하다.
- Package/layout findings0. 기존 S53 Native 표0.01in 추정 경고는 동일하다.
  지정 Malgun Gothic/Consolas와 로컬 AppleSDGothicNeo/Menlo 대체를 구분한다.
- 출력 도구가 차트 데이터를 다시 준비한 중간 파일을 읽을 때 메모리 오류를 냈다.
  검증한 화면·차트·워크북을 보존하고 Notes만 동기화해 최종 구조·재입력·렌더·Notes
  검사를 완료했다. 중단된 파일과 임시 빌드는 산출물에 포함하지 않았다.
- 현행 정적 참조44개는 기존 Demo 참조25+설계/연구/성찰17+Goal 안내2페이지다.
  경로·해시·1920×1080을 확인했다. 이는 로컬 파일 준비이며 실행 캡처·Live 승인이 아니다.

## 남은 검증과 유지한 범위

P0/P1: 이번 로컬 제작 범위에서 남은 신규 수정 항목 없음.
P2: 기존 S53 표 추정 경고는 유지하며 실제 환경에서 최종 확인한다.
Windows PowerPoint·발표 PC 글꼴·교육장 투사·계정/제품 표면·실측 리허설은
UNVERIFIED다. Goal을 실제로 켠 다중 턴 진행·완료·막힘 판단도 검증하지 않았다.
Demo Repository의 HEAD·작업 상태·7개 State 태그·원격 없음 상태를 보존했다.
새 Trial·Goal 활성화·원본 근거·Prototype·발표 묶음 변경은 없다.

[통합 PPT](../AI_Dev_Training_Full.pptx), [ACT4](../ACT_4.pptx), [ACT5](../ACT_5.pptx),
[S99](../preview/full/S99.png), [S100](../preview/full/S100.png),
[ACT4 전체](../preview/act4/montage.png), [ACT5 전체](../preview/act5/montage.png),
[설계·연결 검토](../../plan/GOAL_TIPS_AND_ACT5_HANDOFF.md),
[번호 이행](../../plan/SLIDE_ID_MIGRATION_116.md),
[검사 기록](GOAL_TIPS_AND_ACT5_HANDOFF_VALIDATION.json).
