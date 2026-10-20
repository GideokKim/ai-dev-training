# 발표자용 오프라인 자료 묶음

[발표자료 ZIP 내려받기](AI_Dev_Training_Presenter_2026-10-20.zip)

ZIP 전체를 압축 해제한 뒤 **START_HERE.html**을 여세요. 통합 PPT, ACT별 PPT,
발표자 Notes, 예상 질문 25개, 미리보기와 Demo 진행 지침으로 이동할 수 있습니다.
읽기용 HTML은 인터넷·서버 없이 열리며 실제 발표는 PowerPoint에서 진행합니다.

현재 상태: **로컬 자료 준비 완료 / 실환경·리허설 UNVERIFIED.**
강사용 준비 묶음이며 청중 배포나 현장 검증 완료를 뜻하지 않습니다.

- 발표자료: `9bc4144` / DEC-0032. 묶음: DEC-0032 (DEC-0031 정책 유지) / 2026-10-20.
- 80장 / 순수 360분. 휴식·점심·장비 준비는 별도입니다.
- 통합·ACT PPT 7개, Notes 7개, 통합 및 ACT PNG 각 80개와 montage를 포함합니다.
- 기본 Demo는 과거 기록에 근거한 정적 설명입니다. Live/Hybrid는 확인 전 비활성입니다.
- 기획·연구 출처는 날짜와 범위를 유지한 보관 문서입니다. 외부 링크 열기는 인터넷이 필요합니다.

[전달 안내](../production/evaluation/FINAL_HANDOFF.md) ·
[사용자 체크리스트](../production/evaluation/USER_VALIDATION_CHECKLIST.md) ·
[예상 질문·답변](../production/presenter/EXPECTED_QA.md)

## 파일 확인

- [파일별 목록·크기·SHA-256](PACKAGE_MANIFEST.json)
- [ZIP SHA-256](AI_Dev_Training_Presenter_2026-10-20.zip.sha256)
- [파일·링크·압축 확인 결과](PACKAGE_VALIDATION.json)

Manifest 자신의 hash와 ZIP hash는 payload manifest에서 제외합니다.
ZIP은 원본 옆 `.zip.sha256`으로 확인하며, 압축 해제 후 개별 파일은 manifest와
대조합니다. 자료가 수정되면 묶음을 다시 생성하고 실제 발표 PC에서 영향 범위를 재확인합니다.

## 재생성

제작자는 `production/source/delivery/build.mjs`를 bundled Node runtime으로 실행합니다.
`RUNTIME_NODE_MODULES`, 검토된 발표자료의 commit인 `PRESENTATION_ARTIFACT_COMMIT`,
저장소 밖 `DELIVERY_WORK_DIR`를 지정합니다. 현재 commit 값은 `9bc4144`입니다.
생성 스크립트는 기존 PPT·Notes를 수정하지 않으며, 명시된 발표자료와 연결된
문서만 복사합니다. `.git`, 설정·인증 파일, 원본 로그, 제작 코드 및 Demo 저장소는
ZIP에 넣지 않습니다. 실행 후 hash·CRC·상대 링크와 발표자료 기준 일치를 확인합니다.

이전 2026-10-19 ZIP은 이전 후보의 역사적 묶음으로 보존하며, 현재 발표에는 위 최신 ZIP을 사용합니다.
