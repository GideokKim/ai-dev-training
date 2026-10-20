# 발표자 자료 묶음 준비 결과

날짜: 2026-10-20 (Asia/Seoul). 결정: DEC-0032; 묶음 정책 DEC-0031 유지.
발표자료 기준: `9bc4144` / DEC-0032.

상태: **로컬 자료 준비 완료 / 실환경·리허설 UNVERIFIED.**

## 수행 내용

- 현재 PPT·Notes 해시로 체크리스트와 최종 전달 안내를 갱신했다.
- 체크리스트의 현재 후보와 로컬 검토 범위를 최신 흐름 개선 결과에 정렬했다.
- 예상 질문 25개를 6개 ACT에 연결했다. 20–40초는 편집 목표이며 실제 발화
  실측 결과가 아니다. 기존 360분과 Q&A 32분에 시간을 추가하지 않는다.
- 80장 PPT와 ACT 0–5 PPT, Notes, full/ACT PNG 각 80개, montage, 진행 지침,
  Q&A·체크리스트·전달 안내와 연결된 근거 문서를 하나의 ZIP으로 구성했다.
- ZIP 안에 START_HERE.html과 문서 HTML, 80개 Slide별 미리보기 페이지를 넣었다.
  상대 경로를 유지하며 Notes의 full/act fallback 경로를 모두 포함한다.
- Demo 지침의 정적 자료 출처를 DEC-0032의 현재 통합본 및 fallback 해시와 연결했다.

## 파일 확인 범위

로컬 파일의 hash·개수·경로와 실제 ZIP의 CRC/추출 bytes를 대조했다.
내부 Markdown 링크의 대상 문서까지 포함하고 생성 HTML의 상대 파일·anchor를 확인했다.
이 확인은 실제 발표 PC 브라우저·PowerPoint·프로젝터에서 열어본 결과가 아니다.

- PPT 7개는 DEC-0032 흐름 개선 검증 기록의 해시와 동일하다.
- 통합·ACT Markdown Notes와 7개 PPT 내부 Notes를 다시 대조했다.
- MASTER_PLAN·INVARIANTS·Claim Freeze·Template Mapping 등 보호 원본을 유지했다.
- 묶음 생성 단계에서는 검토된 PPT·Notes·Slide Map·PNG를 추가로 수정하지 않았다.
  흐름 개선 자체는 화면 14장·Notes 41개·Slide Map 전환 24개이며 세부 비교를 보존했다.
- ACT 장수 9/12/15/18/18/8, 시간 40/55/70/85/80/30, 전체 360분 유지.
- Mode Lecture 130 / Demo 73 / Case 83 / Reflection 20 / Transition 22 / Q&A 32분 유지.
- 새 제품 기능·가격·현재 계정 동작·연구 결과를 주장하지 않는다. 새 Trial·Demo 실행 없음.
- 실제 교육 계정·Windows·발표 PC·교육장·리허설을 PASS로 바꾸지 않았다.
- 생성물은 상대 경로로 동작하며 실행 코드·계정·설정·인증 파일·원본 로그를 포함하지 않는다.
  역사적 기획·Trial 문서의 로컬 경로는 출처 메타데이터이며 실행 경로가 아니다.

파일별 hash는 저장소의 `delivery/PACKAGE_MANIFEST.json`, ZIP hash·압축 검사 결과는
`delivery/PACKAGE_VALIDATION.json` 및 `.zip.sha256`에서 확인한다.
Manifest와 ZIP 자신의 hash를 payload에 넣지 않아 자기참조를 피한다.
이번 묶음을 만드는 제작 스크립트와 원본 문서는 저장소에서 추적한다.

## 남은 사용자 확인

[USER_VALIDATION_CHECKLIST](USER_VALIDATION_CHECKLIST.md)의 미체크 항목은 그대로 남는다.
실제 기기에서 압축 해제·오프라인 파일 열기·발표자 모드·글꼴·화면 가독성과
전체 시간, S54/S72, 무질문 상황·fallback 복귀를 직접 확인해야 한다.
현재 제품·계정·Live 경로는 사용할 때 별도 확인한다.

[FINAL_HANDOFF](FINAL_HANDOFF.md)가 현재 후보와 남은 확인 항목의 시작점이다.
최종 청중 배포 대상·경로·공개 범위와 승인은 아직 확정하지 않았다.
이번 작업의 저장소 push는 별도 외부 자료 전달이나 현장 운영 승인으로 취급하지 않는다.
