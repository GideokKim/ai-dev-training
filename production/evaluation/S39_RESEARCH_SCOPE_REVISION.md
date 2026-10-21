# S39 — Research Tasks, Findings and Transfer Limits

Date: 2026-10-22. Baseline: 7c30780. Decision: DEC-0052.
Status: **COMPLETE — LOCAL RENDER, PRIMARY SOURCES AND NOTES CHECKED**.

## Presentation Change

S38에서 구분한 정보의 범위·제공 시점을 ‘모두 넣으면 충분한가?’라는 질문으로 이어간다.
두 연구는 각자 과제 도식 하나와 제한된 관찰 하나로 표시해 한 장을 유지했다.

- Lost in the Middle: 문서 질문 답변/합성 key-value 검색에서 같은 근거를
  앞·중간·뒤로 이동시키는 비교를 보여준다. 일부 당시 모델·과제에서 중간 근거의
  정답률이 낮아졌다는 관찰로 한정했다. 블록 개수·면적은 실제 문서 수나 점수가 아니다.
- RepoQA: 기능 설명+제공된 코드→함수 코드 반환→정답 함수와 유사도 비교를 보여준다.
  모델·언어별 함수 찾기 성능 차이를 표시한다. ‘함수 회수’는 초급자가 독립적으로
  이해하기 쉽도록 ‘설명에 맞는 함수 찾기’로 풀어 썼다.
- 하단 두 행: 업무에 적용할 확인 질문과 현재 Codex에 대해 이 연구만으로는
  미입증인 실패율·보편 한계·Routing 효과를 분리한다. 출처 위 여백도 확보했다.

제목·역할·BEAT-013·RESEARCH·Claim Status·Lecture4분을 유지한다.
수치 그래프, 신규 제품 성능, 실제 실행 Screenshot은 추가하지 않았다.
텍스트·블록·화살표는 native 편집 요소다. 별도 이미지 생성이나 Slide 분할은 불필요했다.

## Primary Source Recheck

확인일:2026-10-22. 두 원문의 평가 과제와 해석 범위를 직접 확인했다.

| 연구 | 실제 평가 | 관찰 / 해석 범위 |
|---|---|---|
| [Lost in the Middle](https://aclanthology.org/2024.tacl-1.9/) | multi-document QA와 synthetic key-value retrieval에서 관련 근거의 위치·입력 길이 등을 변경 | 여러 당시 모델·설정에서 중간 위치의 정확도가 낮아졌다. 모든 모델·과제에서 같은 현상이 관찰된 것은 아니다. |
| [RepoQA](https://arxiv.org/abs/2406.06025) | 자연어 설명과 코드 입력에서 설명에 맞는 함수 코드를 반환하고 정답과 유사도 평가 | 50개 저장소/5개 언어/500개 과제, 주 실험 코드 입력16K토큰(CodeLlama tokenizer). 모델·언어별 성능 차이. 저장소 수정·도구 검색·테스트 실행의 평가는 아니다. |

RepoQA의 [본문](https://arxiv.org/html/2406.06025v1)과
[공식 프로젝트/인용](https://evalplus.github.io/repoqa.html)을 대조했다.
SRC-0204의 포괄적인 repository-QA 설명을 실제 description-to-function 과제로 좁혔다.
Venue TODO는 공식 인용에 따라 First Workshop on Long-Context Foundation Models
@ ICML2024로 해결했다. ICML 본회의라는 뜻이 아니다. 모델 수처럼 요약 간 차이가
있는 항목은 추가하지 않았다. SRC-0201도 같은 확인일과 제한된 관찰로 정렬했다.

## Story and Claim Boundary

S38 정보의 범위/시점/절차 구분 → S39 연구가 평가한 과제와 근거 활용 질문
→ S40 필요한 상세 정보로 가는 길의 흐름이다. 연구 자체가 Routing 설계를
검증했다는 전환은 사용하지 않는다.

이 연구들은 현재 Codex의 Repository 작업을 직접 평가한 자료가 아니다.
‘현재 모델은 중간을 잊는다’, ‘큰 Context는 언제나 나쁘다’, 보편 토큰 임계값,
Routing 우월성·토큰 절감·성능 개선을 주장하지 않는다. RepoQA의16K는 당시
주 실험의 코드 입력 조건이며 현재 Codex 한도나 전체 Prompt 길이가 아니다.
업무에서 실제로 근거를 활용했는지 확인하자는 것은 교육적 적용 질문이다.
기존 CLM-0014/0015·Claim Freeze의 범위를 강화하지 않았다.

## Validation

통합90장과 ACT2 15장의 최종 PPTX를 다시 읽어105개 PNG를 렌더링했다.
최종 S39를 원본 크기로 확인했으며 도식/결과/미입증 행의 잘림·겹침은 발견하지 못했다.
독립 검토에서 두 연구의 과제·조건·관찰·전이 한계에 중요한 문제는 없었다.
한 페이지에서 역할이 분리돼 있어 분할하지 않았다.

- Full/ACT2 패키지 구조·레이아웃 검사 findings0, first-party reimport PASS.
- 1920×1080, S39 도식과 RepoQA 화살표2개를 native 요소로 확인.
- 다른89장 텍스트·PNG·Notes 레코드와 다른 ACT PPT는 baseline과 동일.
- 90개 내장 Notes/19개 필드, ACT/Full Notes, ACT2 PNG15쌍 동일.
- 90장/368분, ACT시간40/63/70/85/80/30, S39 Lecture4분 불변.
- Mode: Lecture137/Demo73/Case84/Reflection20/Transition22/Q&A32분 불변.
- 정적 Demo fallback29개는 hash·경로·화면 크기를 재확인했고 변경 없음.
- Demo Repository HEAD afef3e0/clean 유지. 새 Trial 없음. ZIP/HTML 묶음 갱신 없음.

[검증 JSON](S39_RESEARCH_SCOPE_REVISION_VALIDATION.json)에 최종 파일 식별자를 기록한다.
지정 Malgun Gothic/Consolas와 로컬 Apple SD Gothic Neo/Menlo 대체 렌더를 유지한다.
Windows PowerPoint·발표 PC·교육장·제품/계정·실측 리허설은 UNVERIFIED다.
기존 리뷰·연구·Decision 이력은 보존한다.

## Outputs

- [수정 S39](../preview/full/S39.png)
- [통합 PPT](../AI_Dev_Training_Full.pptx)
- [ACT2 PPT](../ACT_2.pptx)
- [ACT2 Notes](../notes/ACT_2_NOTES.md)
- [Primary source registry](../../references/sources/SOURCES.md)
