# S76 — 개별 요청의 세 가지 가상 위험 경로

Decision: DEC-0143. Date:2026-11-03. Baseline:`729d773`.
Status: LOCAL RENDER AND STRUCTURE VERIFIED.

## 수정

S76 왼쪽의 단순한 세 사선과 A/B/C 끝 표시를 세 가지 가상 장면으로 바꿨다.
A는 굽이치는 경로 뒤 검증 기준에 도달하고, B는 중단 표시와 검증 기준까지 남은 간격으로 미도달을 보여준다.
C는 꺾인 붉은 경로와 “기존 동작” 블록의 깨진 경계로 기존 동작 훼손의 위험을 보여준다.
짧은 라벨은 “우회해서 도달” / “검증 전 중단” / “기존 동작 훼손 위험”이다.
왼쪽의 세로 점선은 검증 기준이며 실제 테스트 출력·실패 로그·실행 캡처가 아니다.
조건부 상단 문구와 “위험”을 유지해 Harness가 없으면 반드시 실패한다거나 실제 Demo가 훼손됐다고 표현하지 않는다.

오른쪽 공통 Harness의 명세·제약/수행 절차/검증 기준, 세 독립 경로와 결과는 그대로다.
성공 체크·PASS·자동 준수나 보장된 보호를 추가하지 않았다. 사람/AI·제목·하단 문구·footer도 보존했다.
S75/S77의 화면·현재 연결 cue는 바꾸지 않았다. 모든 경로와 위험 표시는 native editable 도식이다.

## Notes·배정·근거

113장·389분, ACT3 18장·64분, ACT4 20장·85분과 S76 Lecture2+Q&A5=7분은 그대로다.
Title·역할·Section/Beat·Template·모든 시간/Mode·기존 Evidence/Claim 원문을 유지했다.
Notes의 Speaker Flow/Operation은 세 경로를 실제 관찰이 아닌 설명용 가능성으로 읽도록 정렬했다.
기존 프로젝트별 실제 명령·도구·권한·실행 조건의 적용 지식도 유지한다.
Notes113개×19필드·ACT/FULL 본문과 두 최종 PPT의 내장 Notes131개를 대조했다.

## 렌더·검증

최종 통합113장과 ACT3 18장, 총131개 PNG를1920×1080으로 렌더링했다.
세 위험의 구분, 라벨·경로·중단 표시·검증 기준선·기존 동작 블록의 여백과 잘림/겹침을 검토했다.
픽셀 차이는 S76 왼쪽 경로 영역에 한정된다. 오른쪽 화면과 사람/AI 위치·제목·footer는 같다.
다른112장의 화면은 픽셀 단위로 같고 Full/ACT3의18장 렌더가 일치한다.
나머지5개 ACT PPT는 이전 파일과 바이트 단위로 같다. 기존 이미지·native 차트값은 유지했다.
2개 PPTX의 패키지·16:9·글꼴 정책·native 표/차트·first-party import와 원본 기준 OOXML 검사를 통과했다.
Layout finding은0건이다.43개 정적 Fallback의 번호·역할·분류와 최신 해시를 정렬했다.

로컬 렌더는 Apple SD Gothic Neo/Menlo를 Malgun Gothic/Consolas의 대체로 사용했다.
Windows PowerPoint·교육장·제품/계정·실측 리허설은 UNVERIFIED다.
새 Trial·측정·제품 실행·실제 파괴 작업은 없으며 Demo 저장소·Sites·발표 묶음은 변경하지 않았다.

## 산출물

[통합 PPT](../AI_Dev_Training_Full.pptx), [ACT3 PPT](../ACT_3.pptx),
[S76](../preview/full/S76.png), [현재 Map](../../plan/SLIDE_MAP.md),
[범위](../../plan/S76_DYNAMIC_ROUTES.md), [Notes](../notes/ACT_3_NOTES.md),
[검증 요약](S76_DYNAMIC_ROUTES_VALIDATION.json).
