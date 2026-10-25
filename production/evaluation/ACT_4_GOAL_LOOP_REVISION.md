# ACT4 — 목표 달성까지 이어지는 구현·검토·수정 루프

Decision: DEC-0097. Date:2026-10-25 (Asia/Seoul). Baseline:`b53b8dc`.
Status: **LOCAL RENDER / STRUCTURE / CONTENT REVIEW COMPLETE**.

## 수정 결과와 기획 의도

ACT4를 같은 목표의 **구현 → 도구 검증·다른 모델 검토 → 구체적인 피드백 → 수정 →
같은 기준으로 재검토 → 완료 판단**으로 제작했다. 재사용 지침을 유지·갱신하는 이야기로
수행 루프를 대신하지 않는다. 검토 결과가 다음 시도의 입력이 되는 되돌림을 화면에 보였다.

기존 S100의 GPU 적용 장은 사용자 지시로 삭제했다. 이전 S101–S115는 S100–S114다.
현재114장·406분(6시간46분), ACT4 S82–S99의18장·81분이다. 다른 ACT의 시간은
유지했다. 기존 Product/Meta Trial의 의미·날짜·State는 재해석하지 않았다.

| 범위 | 화면과 Notes의 역할 |
|---|---|
| S77–S81 | ACT3의 실제 성공 뒤, 사람이 남은 검토와 다음 수정을 계속 연결하는 문제 |
| S82–S84 | ACT4 제목 → 다음 수정의 연결 질문 → 고정할 목표·완료 조건 |
| S85–S89 | 모델 A 후보 → 도구 확인 → 다른 모델 B 검토 → 지적①과 수정① → 같은 기준 재검토 |
| S90–S91 | 닫힌 반복 경로와 완료·계속 수정·미충족 중단/사람 확인의 구분 |
| S92–S94 | 자기 수정 연구의 한계, ReConcile, CriticBench를 각각 범위 안에서 설명 |
| S95–S97 | 모델 역할 선택, 잘못된 검토의 재확인, 다음 시도에 이어 줄 상태와 한도 |
| S98–S99 | 실제 Product 기록·설계·연구의 경계 → 우리 업무의 목표/검토/되돌림 질문 |
| S100–S114 | ACT5의 조합·수용 책임·통합/제거·다음 행동과 마지막 찾아보기로 회수 |

ACT3 S77–S81 화면을 정렬하고 S76의 Notes 연결도 맞췄다. ACT5는 실제 Product 이력을
유지하면서 S101/S102/S105/S109/S110의 화면·Notes 및 마지막 팁 목록의 번호를 정렬했다.
기존 S109의 연결선·좌우 폭 수정은 현재 S108에 동일하게 보존했다.

## 사례와 연구의 근거 범위

CASE-LOOP-01은 **CONCEPTUAL / DESIGNED / NOT EXECUTED**다. 밝기 통계의 여섯 출력과
동작을 보존하면서 불필요한 임시 할당을 줄이고 실행시간 조건을 만족시키려는 설계다.
수치 목표·대표 입력·모델 조합·실행 표면은 TBD이며, 실제 모델 호출·수정·재검증·완료·
비용 개선을 관찰한 기록이 아니다. 가상 문제/후보/피드백을 실제 로그나 PASS로 표시하지 않았다.

| 화면 | 근거 | 말할 수 있는 범위 |
|---|---|---|
| S92 | [Self-Refine](https://arxiv.org/abs/2303.17651), [ICLR2024 자기 수정 연구](https://arxiv.org/abs/2310.01798) | 반복 피드백 구조와 외부 근거 없는 자기 수정의 한계. 다른 모델의 우월성 근거로 합치지 않음 |
| S93 | [ReConcile Table7/§6.2](https://aclanthology.org/2024.acl-long.381.pdf) | 해당 StrategyQA 모델 구성79.0±1.6 대 동일 ChatGPT 구성72.2±2.1, 차이6.8%p. 추론·토론/합의 실험이며 현재 Codex 코딩 루프의 효과가 아님 |
| S94 | [CriticBench §4.2.5/Fig8](https://aclanthology.org/2024.findings-acl.91.pdf) | 생성·비평 능력의 차이, 일부 다른 모델 비평의 이점은 능력·과제 조건에 의존. 항상 더 좋다는 보장이나 완전한 개발 루프 검증이 아님 |

SRC-0237–0239와 CLM-0043–0045를 등록했다. 모델 간 동의보다 명세·테스트·측정 근거를
우선한다. 검토 지적도 반증할 수 있고, 목표 미충족 중단을 완료라고 부르지 않는다.
새 사례는 실제 STATE-00–STATE-04-PERF/TRIAL-001–008의 연속 실행이 아니다.
과거 DEMO-04A/04B, EVAL-01–04, Meta 관찰은 원래 의미를 유지한 보조/이력 자료다.

## 시간·Mode·Notes·번호

| ACT | 범위 | 장수 | 분 |
|---|---|---:|---:|
| 0 | S01–S14 |14|43|
| 1 | S15–S36 |22|64|
| 2 | S37–S55 |19|82|
| 3 | S56–S81 |26|96|
| 4 | S82–S99 |18|81|
| 5 | S100–S114 |15|40|
| 합계 | S01–S114 |114|406|

ACT4 Mode는 Lecture30/Case37/Reflection4/Q&A7/Transition3=81분이다. 기존 ACT4의
visual/captured Demo22분을 새 설계에 맞춰 Case/설명으로 재배분했으며 실행하지 않은
새 사례에 Demo 시간을 붙이지 않았다. 전체 Lecture172/Demo51/Case103/Reflection22/
Transition26/Q&A32=406분이다. S99는 Reflection2→Q&A7→Transition2를 따른다.
모든 Slide의 Mode 합은 그 Slide 시간과 일치하며 실제 시간 적합성은 미실측이다.

114개 Notes의19필드, ACT/Full Markdown 대응, 새4PPTX에 내장된173개 Notes를
대조했다. SOT·Beat·Section·Claim·Template·ACT 제목·실무 팁·M 관계·번호 이행을
정렬했다.12Templates/28Variants·19개 본문 팁을 유지하고 마지막 목록은 S111–S113이다.

## 렌더링과 품질 검토

- 최종 Full114장 및 수정 ACT3/4/5의59장을 최종 PPTX 재입력 후1920×1080으로 렌더링했다.
  보존 ACT0–2의55장과 합쳐228개의 현행 PNG와 Full/ACT114장 대응을 확인했다.
- ACT0–5 전체 연락판을 순서대로 검토하고 S77–S114는 개별 화면도 확인했다.
  S01–S76은 이전 렌더와 픽셀까지 동일하다. ACT0–2 PPTX도 파일 바이트가 같다.
- 검토 중 S83의 반복 설명을 사람의 전달→시스템의 다음 입력으로 바꾸고, S90의 되돌림
  연결을 닫았으며 S93 차트의 값 축을0–100으로 고정했다. 최종본을 다시 렌더링했다.
- 새 잘림·겹침·끊긴 연결선·한글 누락은 발견하지 않았다. 이는 로컬 화면 검토이며
  원거리 투사나 실제 Windows PowerPoint 검증을 대신하지 않는다.
- ACT4 밖에서 유지한17개 그림 인스턴스의 bytes/crop/배치를 대조했다. 원본 asset은
  삭제하지 않았다. 표 S53/S62와 차트 S66을 보존하고 S93은 실제 수치를 가진 Native 차트다.
- Native text/shape/chart와 PPT 내장 Notes는 편집 가능하다. package/layout findings0,
  Artifact Tool import 확인. 기존 S53 Native 표의0.01in 추정 경고는 기준판과 동일하다.
- Full 출력 도구가 한 번 중단됐으나 별도 작업 경로에서 재시도해 최종 재입력·렌더·Notes
  검사를 완료했다. 중단된 중간 파일은 산출물에 포함하지 않았다.
- 지정 서체 Malgun Gothic/Consolas, 로컬 대체 AppleSDGothicNeo/Menlo를 사용했다.

## 정적 대안 자료·유지한 자산

현행 Demo 정적 참조25페이지와 새 사례/연구/교육 모델17페이지의 실제 경로·해시를
검사했다. 새42페이지는 전체 정적 참조의 합이며 관찰 Demo42건이나 원본 캡처를 뜻하지 않는다.
이전 ACT4의 DEMO-04A/04B/10/11/LOOP-VISUAL 경로는 현행 사례로 재사용하지 않고
이력/보조 기록으로 구분했다. DEMO-12는 S101/S102로 이동한다. Live/Hybrid 승인은 없다.
새 로컬 문서 링크100개와 배포 경로·해시·228개 PNG 대응을 확인했으며 누락 링크와
인증 정보 패턴은 없었다. `git diff --check`도 통과했다.
Demo Repository의 HEAD·작업 상태·7개 State 태그와 원격 없음 상태는 동일하다.
새 Trial·제품 기능 비교·효과 측정·발표 묶음·Prototype 변경은 없다.

## 남은 검증

P0: 이번 범위에서 새로 발견한 항목 없음.
P1: 이번 로컬 제작 범위에서 남은 수정 항목 없음.
P2: 기존 S53 표 추정 경고는 유지하며 Windows/실제 화면에서 최종 확인한다.

Windows PowerPoint·발표 PC 글꼴·교육장 투사·제품/계정·Live/Hybrid·전체 시간 리허설은
**UNVERIFIED**다. 새 다중 모델 사례의 실제 실행과 조합별 효과도 미검증이다.
현재 판정은 **READY FOR USER REVIEW / LOCAL PRODUCTION COMPLETE**이며 실제 발표 승인과 다르다.

[통합 PPT](../AI_Dev_Training_Full.pptx), [ACT4 PPT](../ACT_4.pptx),
[ACT4 전체 Preview](../preview/act4/montage.png), [Notes](../notes/ACT_4_NOTES.md),
[승인 설계](../../plan/ACT4_GOAL_LOOP_REPLAN.md), [번호 이행](../../plan/SLIDE_ID_MIGRATION_114.md),
[검사 기록](ACT_4_GOAL_LOOP_VALIDATION.json), [실환경 체크리스트](USER_VALIDATION_CHECKLIST.md).
