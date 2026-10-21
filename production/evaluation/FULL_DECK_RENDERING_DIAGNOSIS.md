# STEP 08 — Full Deck Rendering Diagnosis & Final Revision

> Current-version router — 이 보고서의 번호·장수·파일·hash·검증 결과는 해당 Decision 당시의 역사적 판본이다. 현재 82장 번호는 [새 이행표](../../plan/SLIDE_ID_MIGRATION_82.md), 현재 제작 결과는 [Prompt·시간선 수정](PROMPT_TIMELINE_REVISION.md)을 따른다.

> Historical record — 이 문서는 DEC-0036 이전 80장 판의 번호와 검증 결과를 보존한다. 현재 81장 판과의 대응은 [Slide ID Migration](../../plan/SLIDE_ID_MIGRATION.md)을 따른다. 과거 PASS는 현재 파일의 재검증을 뜻하지 않는다.


기준 Commit: 4584ed0

진단일: 2026-10-14

## 1. Status

**PARTIAL — 로컬 렌더링과 S78/S80 수정은 확인했다. Windows PowerPoint와 실제 발표 화면은 미검증이다.**

한국어 누락의 원인은 통합 PPTX가 아니라 기존 PDF 미리보기 생성 과정의
Poppler CMap 처리 문제로 확인했다. Quartz 렌더링으로 S01–S80을 다시 만들었고,
S78/S80의 콘텐츠를 안전 영역 안에 배치했다.

## 2. Root Cause

### Confirmed

- 기존 누락은 Keynote PDF → Poppler/pdftoppm PNG 경로에서 발생했다.
- pdftoppm 실행 로그에 Adobe-Korea1 language pack/CMap mapping 누락과
  C1/C2 font tag를 알 수 없다는 메시지가 있었다.
- 같은 PDF→Poppler 경로로 ACT 원본과 통합본을 렌더링하면 두 쪽 모두에서
  한국어가 사라졌다.
- Keynote에서 PPTX를 직접 PNG로 내보내거나 Keynote PDF를 macOS
  Quartz/PDFKit으로 렌더링하면 한국어가 보였다.
- 통합본과 각 ACT 원본을 비교한 결과, 80개 Slide relationship 파일은 모두
  동일하다. Slide XML은 S78/S80을 제외한 78개가 원본과 byte-for-byte
  동일하고, S78/S80 차이는 이번에 적용한 geometry 수정뿐이다.
- Slide Layout과 Theme 파일 및 해당 관계 파일은 모두 대응 ACT 원본과 동일하다.
  통합본의 Slide Master XML은 패키지 내부 layout ID 숫자가 재할당되어 byte
  비교는 다르지만, 해당 ID를 정규화하면 6개 ACT의 구조가 모두 동일하다.
- 슬라이드 문구, 글꼴 run, paragraph 설정, Claim/Evidence 문구는 바꾸지 않았다.

### Ruled out in this comparison

이 진단에서 통합 과정의 Slide XML 손상, Slide relationship 변경, Theme/Layout
관계 차이는 발견되지 않았다. 이는 Windows PowerPoint 동작이나 모든 글꼴
대체 상황이 검증됐다는 뜻은 아니다.

## 3. Affected Slides

아래 표의 기존 문제 화면은 Git 기준 4584ed0의 통합 미리보기다.
ACT 원본과 통합본을 직접 Keynote PNG 및 macOS Quartz/PDFKit 경로로
렌더링하면 각 Slide의 한국어가 보인다. PPTX XML에도 표시 문구가 존재한다.

| Slide | 누락이 두드러진 내용 | ACT / 통합본 직접 렌더 | XML | 기존 PDF→Poppler 미리보기의 증상 |
|---|---|---|---|---|
| S10 | “Task에는 무엇이 아직 정해지지 않았을까?” | 양쪽 모두 한국어 표시 | 있음 | 제목과 설명의 한국어가 빠지고 영문 조각과 문장부호만 남음 |
| S29 | “Long Context 연구가 말해주는 범위” 및 연구 요약 | 양쪽 모두 한국어 표시 | 있음 | 연구 카드의 한국어 요약이 비고 일부 영문만 표시 |
| S54 | “필요한 구조부터 질문하기” 및 Reflection 질문 | 양쪽 모두 한국어 표시 | 있음 | 질문/전환 문구가 사라지고 영문 구획명만 남음 |
| S76 | “위임이 늘어도 개발자 책임은 남는다” | 양쪽 모두 한국어 표시 | 있음 | 핵심 질문과 설명이 빠지고 영문 항목만 남음 |
| S78 | “어느 Layer에서 마찰이 반복되는가?”와 전이 질문 | 양쪽 모두 한국어 표시 | 있음 | 제목과 카드 설명이 빠지고 영문 항목만 남음 |
| S79 | “다음 작은 행동을 개인적으로 고른다”와 성찰 질문 | 양쪽 모두 한국어 표시 | 있음 | 질문 문구가 사라지고 번호/일부 영문만 남음 |
| S80 | “Q&A와 교육 마무리”와 closing 문구 | 양쪽 모두 한국어 표시 | 있음 | Q&A/마무리 설명이 빠지고 영문과 문장부호만 남음 |

S78/S80에는 한국어 렌더링 문제와 별개로 오른쪽 콘텐츠가 프레임 경계를 넘는
실제 geometry 문제가 있었다. 해당 문제는 통합본에서 수정했다.

## 4. ACT vs Full Rendering Comparison

원본 ACT PNG와 최종 통합 미리보기는 모두 1920×1080이다. 변경하지 않은
대표 Slide의 평균 RGB 절대 차이는 0–255 기준 0.10–0.43으로, 렌더러의
안티앨리어싱 차이 범위에서 시각적으로 거의 일치했다. S78/S80의 차이는
geometry 수정이 포함되어 더 크다.

| Slide | ACT 원본과 최종 통합 미리보기 간 평균 RGB 차이 (0–255) | 해석 |
|---|---:|---|
| S10 | 0.1577 | 문구와 배치가 동일한 수준 |
| S29 | 0.1754 | 문구와 배치가 동일한 수준 |
| S54 | 0.4265 | 문구와 배치가 동일한 수준 |
| S76 | 0.3249 | 문구와 배치가 동일한 수준 |
| S78 | 4.9137 | 카드 간격 조정 반영 |
| S79 | 0.0953 | 문구와 배치가 동일한 수준 |
| S80 | 1.2301 | 닫는 흐름의 수평 위치 조정 반영 |

픽셀 차이는 단독으로 가독성 판정에 사용하지 않았다. 기존 미리보기와
새 출력의 실제 화면을 확인했고, S78/S80은 전체 크기로 별도 검토했다.

## 5. Fixes Applied

- 전체 Preview를 Keynote PDF → macOS Quartz/PDFKit 렌더링으로 다시 생성했다.
  Poppler 경로는 사용하지 않았다.
- PPTX의 텍스트, 글꼴, 크기, Claim, Evidence, Notes는 수정하지 않았다.
- 통합 PPTX에서 geometry가 수정된 부분은 S78과 S80뿐이다.
- ACT 0–5 원본 PPTX, Slide Map, Claim Freeze, Demo Repository는 수정하지 않았다.

## 6. S78 / S80 Layout

Visual 기준은 1920×1080, 좌우 safe margin 96px, 상하 72px이다.

- **S78:** 다섯 카드를 같은 폭으로 유지하고 간격을 조정했다. 콘텐츠 그룹의
  가로 경계는 약 x=101.9–1819.0px이고, safe 범위 x=96–1824px 안에 있다.
  카드 간 간격은 약 33.28px이다. 문구와 글자 크기는 유지했다.
- **S80:** Q&A에서 closing으로 이어지는 전체 행을 왼쪽으로 약 39.6px 옮겼다.
  새 가로 경계는 약 x=107.3–1813.7px로 프레임과 safe 범위 안에 있다.
  문구와 글자 크기는 유지했다.

## 7. Full Render Validation

- S01–S80 PNG 80개를 각각 1920×1080으로 렌더링했다.
- production/preview/full/montage.png는 1920×1600이다.
- 20장씩 나눈 4개 contact sheet에서 한국어 표시, 큰 clipping, 겹침,
  비정상 줄바꿈과 전체 시각 일관성을 검토했다.
- 문제 목록 7개 Slide와 S78/S80은 원본 ACT 출력과 각각 확인했다.
- 최종 로컬 렌더에서 문제 Slide의 한국어가 보이고 S78/S80 콘텐츠가 safe
  영역 안에 있다.
- 이 검토는 macOS Quartz 렌더링에 대한 결과다. 원거리 투사 가독성은
  검증하지 않았다.

## 8. Notes Preservation

- PPTX에 포함된 Notes Slide 80개가 기준 버전과 byte-for-byte 동일하다.
- FULL_SPEAKER_NOTES.md의 S01–S80 각 기록에서 19개 필드를 확인했다.
- 각 Slide의 Notes 시간과 Slide Map 시간이 모두 일치한다.

## 9. Structural Validation

- PPTX ZIP CRC와 XML/relationship XML parse: **PASS**
- 모든 package-internal relationship target 존재: **PASS**
- python-pptx 독립 열기 검사: **PASS, 80 slides, 16:9**
- Slide ID와 순서: **S01–S80, 80장, 변경 없음**
- ACT별 시간: **40 / 55 / 70 / 85 / 80 / 30분**
- Mode별 시간: **Lecture 130 / Demo 73 / Case 83 / Reflection 20 / Transition 22 / Q&A 32분**
- 전체: **360분**
- 전체 Slide 문구 비교: **80장 모두 기준 버전과 동일**
- 원본 ACT와의 비교: **Slide relationship 80/80 동일; S78/S80을 제외한
  Slide XML 78/78 byte-for-byte 동일**
- 내장 Notes: **80/80 유지 및 기준 버전과 동일**
- ACT 0–5 원본 PPTX 변경: **없음**

문구와 관계 파일이 유지되어 Slide ID, Claim Boundary, Evidence Type도 변경되지
않았다. 실제 Claim 내용을 추가하거나 강화하지 않았다.

## 10. Remaining Issues

### P0

- 없음. 이번 로컬 렌더 경로에서 알려진 한국어 누락이나 S78/S80 safe-area
  초과는 재현되지 않았다.

### P1

- Windows PowerPoint, 실제 Windows 글꼴 대체, 발표 모드, 교육장 화면/프로젝터:
  **미검증**. 최종 배포 전 Windows 환경에서 확인해야 한다.
- LibreOffice는 통합본을 열지 못했고 generic source-load 오류를 냈다.
  Keynote에서는 통합본이 열리고 ZIP/XML/relationship 검사는 통과했다.
  이 현상은 기록했지만 원인을 특정하지 못했으며 Windows 결과를 대신하지 않는다.

### P2

- 없음. 이 작업 범위 밖의 기존 발표 리허설/실제 교육장 검증은 별도 Gate로
  유지한다.

## 11. Windows Validation

**UNVERIFIED.** 실제 Windows PowerPoint에서 파일 열기, 글꼴 대체, 한글/코드
줄바꿈, 도형 정렬, 화면 비율, 발표 모드와 투사 가독성을 확인하지 않았다.

## 12. Files Modified

- production/AI_Dev_Training_Full.pptx
- production/preview/full/S01.png–S80.png
- production/preview/full/montage.png
- production/evaluation/FULL_DECK_RENDERING_DIAGNOSIS.md (이 문서)

ACT 원본, 기획 문서, Demo Repository는 수정하지 않았다.

## 13. Git Checkpoint

- 기준: 4584ed0
- 브랜치: main
- 대상: 기존 origin/main
- 정책: 검증한 산출물만 commit하고 push하며 force push는 사용하지 않는다.

## 14. Next Readiness

**READY FOR DEMO / FALLBACK PREPARATION**

로컬 렌더와 레이아웃 수정은 다음 준비 단계로 이어갈 수 있다. Windows PowerPoint와
실제 발표 환경 검증은 최종 배포 Gate에 남아 있다.
