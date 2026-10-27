# S21 — TRIAL-002 실제 요청과 다섯 주석

Decision: DEC-0111. Date:2026-10-27. Baseline:`bb675c6`.
Status: LOCAL RENDER / STRUCTURE PASS. External gates remain UNVERIFIED.

## Changes and flow

| Slide | Change | Purpose |
|---|---|---|
| S20 | 화면 유지. Notes 전환만 실제 요청으로 정렬. | 다섯 역할을 설명한 뒤 실제 입력을 읽는다. |
| S21 | TRIAL-002 실제 요청 발췌·번역 + 원문 밖 다섯 역할 주석. | 무엇을 요청했는지 같은 입력에서 확인한다. |
| S22 | 같은 과정01–03임을 소제목·footer·Notes에 표시. | 다른 입력으로 전환하지 않고 기존 관찰과 대조한다. |
| S23–S24 | 기존 화면·Notes·관찰 유지. | 요청 뒤 실제 diff와 검증 결과를 확인한다. |

S21은 실제 Goal/Constraints/Process/Verification 네 제목을 유지한다.
Context는 “관련 구현과 호출 경로”의 대상·위치를 강조해 바깥 주석으로 연결했다.
원문에 없는 Context 제목/문단을 만들지 않았다. Process01–03은 S22의 문장과 같고,
번호는 두 화면의 대응을 위한 편집 표시다. 실제 원문의 문단 구조를 보존한 전문은
S21 Notes와 DEMO_MATRIX.md에 그대로 있다.

기존 열1·2/폭2는 요청 영역 밖 “명세 해석 예”로 구분했다. C++ 출력·API/ABI·Release
적용 예는 Notes cue로 보존했다. 실제 입력에 이 예제나 C++ 조건이 있었다고 말하지 않는다.
실험 통제·사전 정답 표현 금지·worktree·State/tag·Harness·커밋 조건도 전문에 보존했다.

## Evidence boundary

실제 입력은 보존된 TRIAL-002 기록이다. 다섯 역할 분류와 명세 예는 TEACHING_MODEL이다.
실제 요청·관찰 대응은 단일 Codex CLI0.154.0 실행 범위다. 요청이 모든 실행에서
준수되거나 짧은 요청보다 우월하다는 비교, 비용 절감·반복성·현재 Desktop 재현을
입증하지 않는다. S22 관찰은 기존 요약이며 원시 CLI/계획 발언 캡처가 아니다.
S16–S18은 교육용 요청으로 유지한다. 새 Trial·비교 실험·제품 실행은 하지 않았다.

## Validation

- 최종 Full119장과 ACT1 22장,141개1920×1080 PNG를 렌더링했다.
- S21/S22를 실제 렌더에서 개별 검토하고 S20–S24 및 ACT1 전체 흐름을 대조했다.
  새 잘림·겹침·누락 없이 주석과 실제 입력을 구분할 수 있다.
- 원문 네 제목을 확인했다. Context 주석은 실제 요청 영역 밖에 있다.
- 실제 Prompt 전문은 원본과 같다. Process의 세 지시는 S21/S22에서 같다.
- 다른117장과 원복 S14의 픽셀은 같다. S22는 소제목·footer 외 픽셀이 같다.
- Full/ACT1의22개 화면은 픽셀이 같다. 다른5개 ACT PPT 파일은 바이트가 같다.
- 각 PPT에서 Slide XML2개와 Notes XML3개만 바뀌었다. 나머지 part·미디어·관계·
  표·차트·워크북은 바이트가 같다. Native text/shape 편집성을 유지했다.
-119개19필드 Notes와 내장141개 기록을 대조했다. S20–S22만 변경했고 나머지116개는 같다.
-119장·417분. ACT42/64/90/96/85/40분, ACT1 22장·64분.
  Mode Lecture186/Demo49/Case105/Reflection22/Transition23/Q&A32분.
  S21 Lecture6+Case3=9분과 S22 Lecture2분 등 모든 장별 배정이 같다.
- Template Mapping119개,12Templates/28Variants를 유지했다.
  S21만 실제 입력/주석의 Evidence 분류를 정렬하고 다른118장의 Evidence/Claim은 같다.
- 정적 Fallback44개 파일·해시를 확인했다. Source identities는 최종 파일로 갱신했다.

## Remaining gates

P0/P1: 이번 수정 범위에서 새로 발견한 미해결 문제 없음.
Windows PowerPoint·발표 PC 글꼴·교육장 투사·현재 제품/계정·실측 리허설은 UNVERIFIED다.
로컬은 기존 Malgun Gothic/Consolas를 Apple SD Gothic Neo/Menlo로 대체해 렌더링했다.
실환경 체크를 완료로 바꾸지 않았다. Demo 저장소·Sites·발표 묶음은 변경하지 않았다.

[S21](../preview/full/S21.png), [S22](../preview/full/S22.png),
[ACT1 montage](../preview/act1/montage.png), [통합 PPT](../AI_Dev_Training_Full.pptx),
[ACT1 PPT](../ACT_1.pptx), [Notes](../notes/ACT_1_NOTES.md),
[기획](../../plan/S21_TRIAL_REQUEST_MAP.md).
