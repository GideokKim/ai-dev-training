# 발표자용 오프라인 자료 묶음 — 과거 80장판 보관

> Current production is DEC-0060 /93slides/379minutes. Bundle generation remains paused. Existing ZIP/HTML is a historical snapshot, not the current deck. Use production/AI_Dev_Training_Full.pptx and the current Notes.

**사용자 지시로 묶음 자료 생성·갱신을 중단한다.** 현재 번호 기준은 DEC-0043의 **90장 / 368분**이며 최신 자료는 [통합 PPT](../production/AI_Dev_Training_Full.pptx), [통합 Notes](../production/notes/FULL_SPEAKER_NOTES.md), [최종 전달 안내](../production/evaluation/FINAL_HANDOFF.md)를 따른다. 이번 작업에서 ZIP·HTML·package manifest를 생성하거나 바꾸지 않는다.

기존 [2026-10-21 ZIP](AI_Dev_Training_Presenter_2026-10-21.zip)은 `adba817` / DEC-0033의 **80장판 역사적 스냅샷**이다. S01–S06 후속 수정, 신규 S08, 현재 S09의 사람·Agent 역할 구분, S11–13의 Prompt/시간선 수정과 82장 번호는 포함하지 않는다. 과거 묶음을 최신 발표자료로 사용하지 않는다. 과거 자료를 열람할 때만 전체를 압축 해제하고 START_HERE.html을 연다.

## 보존된 묶음의 범위

- DEC-0033 / 2026-10-21, 당시 80장 / 순수 360분.
- 통합·ACT PPT 7개, Notes 7개, 당시 통합·ACT PNG 각 80개와 montage.
- 당시 S07·S14·S18·S19 보강과 M 연계 표시가 포함된다. 이는 원 모듈 전체 충족이 아니다.
- payload 362개·ZIP entry 363개. CRC·추출 hash·내부 링크·Notes 정합성은 당시 로컬 검사 결과다.
- Windows PowerPoint, 실제 발표 PC 글꼴, 교육장 투사, 계정·제품·Live/Hybrid와 시간 리허설은 별도 UNVERIFIED다.

## 보관물의 파일 확인

- [당시 파일별 목록·크기·SHA-256](PACKAGE_MANIFEST.json)
- [당시 ZIP SHA-256](AI_Dev_Training_Presenter_2026-10-21.zip.sha256)
- [당시 파일·링크·압축 검사](PACKAGE_VALIDATION.json)
- [2026-10-20 ZIP](AI_Dev_Training_Presenter_2026-10-20.zip)
- [2026-10-19 ZIP](AI_Dev_Training_Presenter_2026-10-19.zip)

Manifest 자신과 ZIP hash는 자기참조를 피하기 위해 payload manifest에서 제외한다. ZIP의 identity는 sidecar, 개별 payload는 당시 manifest와 대조한다. 이 값들을 현재 90장 산출물의 검증 근거로 승계하지 않는다.

## 재생성 정책

현재 재생성하지 않는다. 사용자의 새 묶음 생성 지시가 있을 때만 현재 발표자료·Notes·runbook·문서·미리보기와 hash를 먼저 검토하고 기존 `production/source/delivery/build.mjs` 절차를 재평가한다. 당시 `PRESENTATION_ARTIFACT_COMMIT=adba817` 값은 과거 스냅샷용이며 최신 값으로 사용하지 않는다. `.git`, 설정·인증 파일, 원본 로그, 제작 코드 및 Demo 저장소는 포함하지 않는다. 새 묶음이 나중에 승인되더라도 실제 발표 PC의 재생과 실환경 Gate는 별도로 확인한다.
