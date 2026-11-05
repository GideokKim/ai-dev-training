# C++ 밝기 통계 사례 반영 결과

DEC-0183 · 2026-11-05 · 기준판 `1c985ec` · Status: PASS (local).

## 변경한 화면과 연결

| Slide | 변경 이유와 화면 |
|---|---|
| S68 | 같은 밝기 통계 기능의 별도 C++ 실험으로 교체했다. 입력 이미지→임시 vector 복사→통계 계산을 보여주고, 복사 없는 행별 연산1.138ms와 한 번 집계0.071ms를 비교해 후자를 선택한다. Python의 후보 순위를 옮기지 않는다. |
| S69 | 같은 C++ 실험의 복사 기준선과 선택한 후보를 시간·추가 픽셀 버퍼·결과 확인의 세 영역으로 보여준다. native chart와 편집 가능한 text/shape를 사용한다. |
| S72 | 상단만 “원래 Python Demo의 역할 판단”으로 바꿔 역할 분리 가정·제작 팁 뒤 원래 실제 작업의 판단으로 돌아옴을 표시한다. 기존 본문은 보존한다. |

S67/S68/S69/S70/S72/S73의 Notes와 Slide Map을 정렬했다. S67 제작 팁에서
별도 C++ 비교로 들어가고, S70은 교육용 역할 분리 비교이며, S72/S73은 원래
Python Demo의 판단·구성으로 돌아간다. S65/S66의 과거 CLI Skill 발견·호출은
변경하지 않는다. C++ 실험을 새 Skill 실행·제품 State의 결과로 설명하지 않는다.

## 채택한 근거

`EXP-CPP-STATS-001`의 보존된 결과를 사용한다. 동일1024×768 입력,
Apple M5 Max/arm64/macOS26.6.2, Apple clang21, C++20 Release 조건이다.

| 구현 | 중앙값 ms/호출 (표시값) | 계측한 임시 픽셀 버퍼 피크 |
|---|---:|---:|
| 전체 복사 기준 | 1.216 | 1,572,864 B |
| 행별 표준 연산 | 1.138 | 0 B |
| 한 번 순회 집계 | 0.071 | 0 B |

시간은 후보별63개 묶음 표본(21순환 라운드×3개 독립 프로세스)을 호출당으로
환산한 중앙값이다. 원시μs 값은 JSON/CSV에 보존하고 차트·워크북·화면은
ms 소수점3자리로 반올림했다. 개별 호출 지연 분포를 측정한 것은 아니다.
메모리는 별도 PMR 계측의 임시 픽셀 버퍼 요청만 포함한다. 입력 영상·스택·
전체 힙·RSS를 뜻하지 않는다. 기준선은 Python 전략의 C++ 포팅이며 기존
C++ 제품에서 발견한 결함이 아니다.

56개 입력에서 세 후보의 반환 결과168개가 Python 기준의6항목과 일치했다.
Release 및 ASan/UBSan에서 계약 검사20개도 통과했다. 새 실험 실행은 없고,
보존된 소스·원시 결과·해시를 그대로 사용했다. 기존 Python TRIAL-008과
STATE-04-PERF의 후보·15.468/10.769ms·6675804/380B·테스트 기록은
DEMO_MATRIX와 원자료·Git에 보존한다. Harness/Skill의 단독 인과효과나
현재 Codex 제품·Windows/MSVC의 결과로 확대하지 않는다.

## 렌더와 대조

- 최종 통합111장과 ACT3 18장, 총129장을 렌더링했다. 바뀐 세 장의 개별 화면과 전체 Montage를 시각 검토했다. 다른108장 화면은 기준판과 픽셀 단위로 같다.
- S72는 상단 표기 영역 밖 픽셀이 같다. 모든 기존 삽화 원본과 위치, S68/S69의 M 연계 문구·위치를 보존했다. 잘림·겹침을 새로 발견하지 않았다.
- 패키지 무결성·재가져오기·폰트 정책·16:9·레이아웃 검사를 통과했다. Full의 기존 S04/S54/S79 경고4건은 동일하며 ACT3는 경고0건이다. 실제 Windows PowerPoint 검증을 의미하지 않는다.
- S69는 native chart다. 수치 캐시와 내장 workbook의0.071/1.216이 일치하며 축0.0–1.5/간격0.5를 확인했다. native 표 S54/S81/S85는 보존했다.
- 내장 Notes129개를 Markdown의19필드와 대조했다. 변경된 여섯 장 외 Notes, 모든 Slide ID·제목·Story Beat·시간·Mode·Template 배정을 보존했다.
- 전체111장·372분, ACT별42/64/90/64/71/41분과 Mode Lecture170/Demo44/Case95/Reflection17/Transition21/Q&A25분을 유지한다. S68/S69는 각각 Case5분이다.
- ACT0/1/2/4/5 PPT·Notes와 Demo Repository는 변경하지 않았다. 기존 State Tag·원격 설정도 그대로다. Sites·발표 묶음은 갱신하지 않았다.

## 남은 확인

P0/P1: 이 변경에서 새로 발견한 항목 없음.

Windows PowerPoint·Windows/MSVC 성능·실제 발표 PC/교육장·제품/계정·실측
리허설은 UNVERIFIED다. 실제 발표에서는 S67→C++ 비교와 S72→Python 기록의
전환이 자연스럽고,0B의 범위를 청중이 구별하는지 확인한다.

[실험 원자료](../../demos/experiments/cpp-statistics/README.md) ·
[S68 미리보기](../preview/full/S68.png) · [S69](../preview/full/S69.png) ·
[S72](../preview/full/S72.png) · [통합 PPT](../AI_Dev_Training_Full.pptx) ·
[ACT3 PPT](../ACT_3.pptx) · [발표 Notes](../notes/ACT_3_NOTES.md) ·
[기계 대조 결과](CPP_STATISTICS_SLIDE_VALIDATION.json).
