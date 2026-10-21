# 발표자 자료 묶음 준비 결과

날짜: 2026-10-21 (Asia/Seoul). 결정: DEC-0033; 묶음 정책 DEC-0031 유지.
발표자료 기준: `adba817` / DEC-0033.

상태: **로컬 발표자료·묶음 검증 완료 / 실환경·리허설 UNVERIFIED.**

## 수행 내용

- 현재 PPT·Notes·montage의 실제 해시로 체크리스트와 최종 전달 안내를 갱신했다.
- [현재 보강 검토](LEGACY_PRIORITY_REVISION.md)와
  [검증 기록](LEGACY_PRIORITY_REVISION_VALIDATION.json)을 전달 문서에 연결했다.
- S07·S14·S18·S19 본문과 Notes 네 장을 보강하고 80장 하단 M 연계 표시를 넣었다.
  M 표시는 관련 내용·원칙의 연결이며 원 모듈 전체 충족이나 원사례 재현이 아니다.
- 80장·360분·장별 시간·Mode를 유지하고 S31/S44/S79의 2순위 보강은 보류했다.
  설명 교체의 시간 배분은 편성안이며 실제 발화 시간은 리허설 전까지 UNVERIFIED다.
- 예상 질문 25개는 기존 6개 ACT 연결을 유지한다. 20–40초는 편집 목표이며 실제
  발화 실측 결과가 아니다. 기존 360분과 Q&A 32분에 시간을 추가하지 않는다.
- Demo 지침의 정적 자료 출처를 DEC-0033의 현재 통합본 및 fallback 해시와 연결했다.

## 묶음 생성·검증 결과

`delivery/AI_Dev_Training_Presenter_2026-10-21.zip`을 생성하고 실제 압축을 풀어
CRC·payload hash·상대 HTML 파일/anchor·Markdown 링크 대상과 Notes를 대조했다.
이는 로컬 파일 검사이며 실제 발표 PC 브라우저·PowerPoint·프로젝터 검증은 아니다.

| 항목 | 확인 결과 |
|---|---|
| Payload / ZIP entry | 362개 / 363개 |
| PPT / Notes | 7개 / 7개; 검토한 release hash 및 내장 Notes와 일치 |
| full / ACT PNG | 80개 / 80개; 대응 파일 byte 일치 |
| Slide HTML / Runbook 경로 | 80개 / 14개 |
| 원본 Markdown | 51개 |
| HTML 링크·anchor / 원본 링크 | 2,254개 / 134개 확인 |
| 외부 링크 | 25개; 네트워크로 다시 확인하지 않음 |
| CRC·추출 hash·상대 링크·원본 연결·Notes 정합성 | PASS, 로컬 범위 |

START_HERE.html, 문서 HTML과 Slide별 미리보기 페이지를 포함하고 Notes의
full/act fallback 경로를 보존했다. ZIP 크기와 자체 SHA-256은 현재
`delivery/PACKAGE_VALIDATION.json`과 `.zip.sha256`을 참조한다. 이 문서를 담는
ZIP의 hash를 문서에 다시 넣지 않아 자기참조를 피한다.

## 확정된 발표자료 확인 범위

- PPT 7개는 DEC-0033 보강 검증 기록의 실제 해시와 동일하다.
- 통합·ACT Markdown Notes와 7개 PPT 내부 Notes가 일치한다.
- 통합 80장과 ACT 80장 PNG를 렌더했다. 통합 80장은 개별 시각 검토했고
  ACT는 대응 PNG 80쌍의 byte 일치를 검증했다.
- MASTER_PLAN·INVARIANTS·Claim Freeze·Template Mapping 등 보호 원본을 유지했다.
- 본문 변경은 네 장, Notes 강화는 네 레코드이며 80장 M 연계 표시를 반영했다.
  S07 이미지 배치 조정 외 이미지 geometry를 유지하고 모든 원본 이미지 bytes와
  S45 native chart 값을 보존했다.
- ACT 장수 9/12/15/18/18/8, 시간 40/55/70/85/80/30, 전체 360분 유지.
- Mode Lecture 130 / Demo 73 / Case 83 / Reflection 20 / Transition 22 / Q&A 32분 유지.
- 새 제품 기능·가격·현재 계정 동작·연구 결과를 주장하지 않는다. 새 Trial·Demo 실행 없음.
- 실제 교육 계정·Windows·발표 PC·교육장·리허설을 PASS로 바꾸지 않았다.

묶음 생성 단계는 검토된 PPT·Notes·Slide Map·PNG를 추가로 수정하지 않는다.
생성물은 상대 경로로 동작하도록 구성하며 실행 코드·계정·설정·인증 파일·원본
로그를 넣지 않는다. 역사적 기획·Trial 문서의 로컬 경로는 출처 메타데이터이며
발표 기기에서 실행할 경로가 아니다.

파일별 hash는 저장소의 `delivery/PACKAGE_MANIFEST.json`, ZIP hash·압축 검사 결과는
`delivery/PACKAGE_VALIDATION.json` 및 `.zip.sha256`에서 확인한다.
Manifest와 ZIP 자신의 hash를 payload에 넣지 않아 자기참조를 피한다.
이번 묶음을 만드는 제작 스크립트와 원본 문서는 저장소에서 추적한다.

## 이전 묶음 이력

2026-10-20의 `9bc4144` / DEC-0032 묶음은 당시 흐름 개선 자료의 패키징 기록이다.
화면 14장·Notes 41개·Slide Map 전환 24개를 정렬하고 파일 hash·경로·ZIP
CRC/추출 bytes·HTML 상대 링크와 anchor를 대조했던 결과는 당시 후보의 근거로
보존한다. 해당 검사 결과를 DEC-0033의 새 ZIP 결과로 승계하지 않는다.
이전 2026-10-20 및 2026-10-19 ZIP은 역사적 묶음으로 유지한다.

## 남은 사용자 확인

[USER_VALIDATION_CHECKLIST](USER_VALIDATION_CHECKLIST.md)의 미체크 항목은 그대로 남는다.
실제 기기에서 압축 해제·오프라인 파일 열기·발표자 모드·글꼴·화면 가독성과
전체 시간, 네 보강의 발화 시간, S54/S72, 무질문 상황·fallback 복귀를 직접 확인해야 한다.
현재 제품·계정·Live 경로는 사용할 때 별도 확인한다.

[FINAL_HANDOFF](FINAL_HANDOFF.md)가 현재 후보와 남은 확인 항목의 시작점이다.
최종 청중 배포 대상·경로·공개 범위와 승인은 아직 확정하지 않았다.
이번 작업의 저장소 push는 별도 외부 자료 전달이나 현장 운영 승인으로 취급하지 않는다.
