# ACT0 지정 문구 정리 결과

DEC-0180 · 2026-11-04 · 기준판 `bc0eaff`.

## 6개 주석 반영

| 주석 | Slide | 변경 |
|---|---|---|
| 1 | S03 | “필요한 코드와 맥락을 사람이 골라 전달한다.” 삭제 |
| 2 | S04 | 하단 “사용 예시” 삭제 |
| 3 | S06 | “TRIAL-001의 실제 조사 요청”을 “실제로 전달한 조사 요청”으로 변경 |
| 4 | S06 | 제목을 “Agent에게 테스트 실패 원인을 조사하게 한다”로 변경 |
| 5 | S06 | 하단 “우측은 GoogleTest 예시 · 실제 Trial은 Python” 삭제 |
| 6 | S06 | 하단 “Codex CLI 조사 기록 · 읽기 전용” 삭제 |

S05의 Context 수집 문제 → S06에서 Agent에게 실패 원인 조사 요청 → S07의 Crop 결과로 이어진다. 파일명을 주지 않는 기법을 새 주제처럼 부각하지 않고 실제 조사 목적과 관찰 대상을 보여준다.

## 보존 범위

원래 요청 문장, Mac 스타일 입력창, 실패 테스트·관련 구현·호출 경로의 관찰 항목과 우측 GoogleTest 그림을 그대로 유지했다. 우측의 “C++ 설명용 가상 화면” 표기도 유지했다. 실제 TRIAL-001 식별자·Codex CLI0.154.0·macOS·읽기 전용 조건·Python unittest 기록과 가상 C++ UI의 구분은 Notes의 Evidence / Source 및 Claim Boundary에 보존했다. 새 실행·제품 검증·비교 성과 주장은 없다.

S03의 코드·원소 도식·연결된3단계, S04의 편집기·Copilot 입력창·3단계와 공통 Mac 외형, 각 장의 M 연계 표시는 유지했다. 지정한6개 텍스트 객체 외 본문 문자열과 이미지 원본·위치·연결선은 그대로다.

## 검증

- Full111장과 ACT0 14장, 총125장을 최종 PPTX에서 렌더링하고 내장 Notes를19필드 Markdown과 대조했다. 변경3장의 실제 PNG에서 제목·여백·기존 도식·가상 화면 구분·M 연계를 확인했다.
- 지정 문구 영역 밖 픽셀과 나머지108장 화면은 기준판과 같다. ACT0 화면은 통합본의 같은 ID 화면과 일치한다.
- 111장·372분과 ACT별42/64/90/64/71/41분을 유지했다. Mode170/44/95/17/21/25분, 모든 ID·순서·Section·Story Beat·Template·Evidence Type·Claim Status는 그대로다.
- 2개 최종 PPTX의 패키지 무결성·재가져오기·폰트 정책·16:9·레이아웃 검사를 통과했다. 새 경고는 없다. 기존 Full S04/S54/S79 경고4건과 ACT0 S04 경고2건은 같은 대상이다. 실제 시각 검토 판정과 자동 경고를 구분한다.
- ACT1–5 PPT·Notes는 변경하지 않았다. Demo Repository·새 Trial·Sites·발표 묶음도 변경하지 않았다. Windows PowerPoint·교육장·실측 리허설은 UNVERIFIED다.

## 산출물

[통합 PPT](../AI_Dev_Training_Full.pptx) · [ACT0 PPT](../ACT_0.pptx) · [S03](../preview/full/S03.png) · [S04](../preview/full/S04.png) · [S06](../preview/full/S06.png) · [ACT0 미리보기](../preview/act0/montage.png) · [기계 대조 결과](ACT0_CAPTION_VALIDATION.json).

소스·Slide/Template Map·S06 제목을 포함한 현재 조사표·ACT0/Full Notes·Preview·현재 전달 문서·Fallback 해시를 정렬했다. 이전 기록은 보존한다.
