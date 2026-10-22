# S40 — 코드 탐색 결과를 확인하는 질문으로 수정

## 상태와 범위

2026-10-22 (Asia/Seoul), DEC-0061. 기준 Git: `65dd8e8`.
**COMPLETE — 요청한 수정·로컬 렌더·문서 대조 범위.**

S40 화면을 수정하고 S39–S41의 설명·전환 Notes를 정렬했다. 전체93장·379분,
ACT2 S32–S49/18장·81분, S40 Lecture4분과 모든 기존 ID를 유지한다.
실제 발표 시간 적합성·Windows PowerPoint·교육장·제품/계정 검증은 UNVERIFIED다.

## 변경 이유와 화면

기존 화면은 RepoQA의 연구 과제 소개가 중심이어서 청중이 업무에서 무엇을
확인해야 하는지 드러나지 않았다. 새 제목은
“AI가 필요한 코드를 찾았다는 것을 무엇으로 확인할까?”다.

- 왼쪽: 교육용 crop 요청 → 보존된 기존 구현 일부.
- 오른쪽: 위치를 특정했나 / 요청한 동작과 맞나 / 주변 근거도 맞나.
- 하단: RepoQA를 기능 설명으로 함수를 찾는 과제의 보조 연구로 배치.

코드·문자·도형은 편집 가능한 PowerPoint 요소다. 코드는
`STATE-00-FIXED:src/graypipe/transform.py`의 crop 구현6–16행 중13행에서
`row[x_start : x_end]`를 발췌했다. “새 Agent 탐색 기록 아님”을 표시한다.
한 줄의 코드만으로 전체 구현의 정당성을 입증했다고 표현하지 않는다.

## S39 → S40 → S41

| Slide | 역할 | 연결 |
|---|---|---|
| S39 | 같은 근거의 위치와 활용을 구분한 Lost in the Middle 과제·제한된 관찰 | “코드에서도 필요한 구현을 찾았다는 답을 무엇으로 확인할까요?” |
| S40 | 코드 탐색 결과를 확인할 업무 질문 세 가지 | “확인할 근거를 정했다면, 그 명세와 코드를 어디서 찾게 할까요?” |
| S41 | 작업 요청에서 기본 안내를 거쳐 관련 상세 정보로 가는 경로 설계 | 다음 장의 기본 안내/상세 배치 기준으로 연결 |

S39 Notes에 남아 있던 두 연구 병렬 설명과 RepoQA75초 배분을 제거하고
현재 S39 화면의 단일 연구와4분 운영으로 정렬했다. S41은 시작30초에서
앞 장의 확인 질문을 회수한다. S39/S41 화면은 변경하지 않았다.

## Notes와 연구·관찰 경계

- Full/ACT2 Markdown 및 PPT 내부 Notes에서 S39–S41을 일치시켰다.
  전체93개×19필드, 다른90개 Notes 레코드는 그대로다.
- S40은 TEACHING_MODEL / RESEARCH다. 세 업무 질문은 교육용 기준이며
  RepoQA의 채점 기준, 공식 Codex 분류, 새 탐색 실행의 관찰 결과가 아니다.
- RepoQA의 기능 설명+코드 입력 → 함수 반환 → 정답 함수 유사도 비교,
  50저장소/5언어/500과제, 주 평가 코드 입력16K 조건은 Notes에 보존한다.
  16K는 CodeLlama tokenizer 기준의 실험 조건으로 전체 Prompt/현재 제품
  한도를 뜻하지 않는다. 모델·언어별 차이와 전체 Agent 업무와의 차이를 유지한다.
- 보존 연구: CLM-0015 / SRC-0204 / https://arxiv.org/abs/2406.06025.
  Lost in the Middle의 위치별 관찰을 재현한 연구로 설명하지 않는다.
- Routing 우월성·토큰 절약·성능 향상·현재 Codex 성공/실패에 관한 주장을
  추가하지 않았다. 새 Trial·비교 실험·Demo 테스트를 실행하지 않았다.

## 시간·Template 검증

| 항목 | 결과 |
|---|---|
| 전체 |93장 /379분 |
| ACT 시간 |40 /63 /81 /85 /80 /30분 |
| Mode |Lecture143 /Demo73 /Case88 /Reflection21 /Transition22 /Q&A32분 |
| S40 |Lecture4분, 기존 배분 유지 |
| Template |기존 T03-C 적용. 전체11개/27개 Variant 유지 |
| Slide/Section/Beat/Demo/Trial/State ID |변경 없음 |

연구 과제 도식인 기존 T09-A에서 요청·코드·세 확인 질문의 관계를 보여주는
기존 T03-C로 Mapping을 정렬했다. 새 Template이나 Variant는 추가하지 않았다.

## 렌더링·품질 확인

최종 Full93장과 ACT2 18장, 총111개 PNG를 다시 생성했다. 최종 PPTX의
패키지·재가져오기·레이아웃 검사, 내장 Notes와 Markdown 대조를 수행했다.

- S40 최종1920×1080 화면을 직접 검토: 제목·요청·코드·확인 질문·출처가 읽히며
  잘림/겹침이 관찰되지 않았다. 로컬 레이아웃 검사 finding0.
- S39–S41 연속 화면을 직접 비교: 연구 관찰 → 업무용 확인 → 탐색 경로가 이어진다.
- 다른92장 최종 PNG는 기준 판본과 hash가 동일하다. ACT2/Full18장 PNG도 일치한다.
- Native 표 S47, native chart S58 및 연결 자료를 보존했다.
- 다른 ACT 패키지·prototype·승인 이미지·발표자 묶음은 변경하지 않았다.
- 지정 글꼴 Malgun Gothic/Consolas와 로컬 preview 대체 글꼴
  AppleSDGothicNeo/Menlo를 구분한다. Mac 렌더는 Windows 확인을 대신하지 않는다.

검사 수치·현재 파일 식별자:
[검증 JSON](S40_CODE_EVIDENCE_REVISION_VALIDATION.json).

## 산출물

| 항목 | 경로 / SHA-256 |
|---|---|
| Full93장 | [통합 PPT](../AI_Dev_Training_Full.pptx) |
| Full SHA-256 | `53fb1b90761091f0c1e95d7aba618e2369624143344d1e8282e635a8b6f3596e` |
| ACT2 18장 | [ACT2 PPT](../ACT_2.pptx) |
| ACT2 SHA-256 | `8763b918eab0fe30b7a5d718010f5f2325c7405eb5bf6489b93c4e2f0f2821c1` |
| Full Notes | [발표자 Notes](../notes/FULL_SPEAKER_NOTES.md) |
| Notes SHA-256 | `8d0dcfb148f4f46ebdf88178fda1eb3bf25aa5a07d11f20062739e03a62dd2ca` |
| S40 | [최종 PNG](../preview/full/S40.png) |
| S39–41 | [연속 검토 PNG](../preview/act2/S39-S41-continuity.png) |
| ACT2 전체 | [Montage](../preview/act2/montage.png) |

## 운영 식별자와 보존

현재 전달 안내·사용자 체크리스트·Fallback Manifest의 Full/Notes/Montage 해시를
갱신했다. 기존31개 fallback PNG의 파일·내용·해시는 그대로다. READY는 로컬 정적
파일이 있다는 범위다. Live/Hybrid 승인·실제 실행 캡처 준비 상태로 확대하지 않는다.

Demo repository의 HEAD `afef3e0`, 기존 State tag와 clean 상태를 보존했다.
기존 평가 보고서와 Decision 이력은 삭제하지 않았다. 새 결정 DEC-0061을 기록했다.
정상 산출물만 기존 main에 Commit/Push하는 세션 정책을 따른다.

## 남은 항목

P0/P1: 이번 요청의 로컬 수정 범위에서 발견되지 않음.
Windows PowerPoint, 실제 글꼴·투사 가독성, 제품/계정, 실측 리허설은 UNVERIFIED.
발표자 묶음 생성은 사용자 지시대로 계속 중단한다.
