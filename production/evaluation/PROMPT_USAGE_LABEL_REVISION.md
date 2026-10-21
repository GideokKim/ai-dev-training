# Prompt Method Usage Label Revision

Date:2026-10-21. Baseline:855ddef. Decision:DEC-0045.
Status: **COMPLETE — LOCAL RENDER AND NOTES PARITY PASSED**.

## Change

S22의 “언제  로그·명세·요청이 섞여 있을 때”가 하나의 문장처럼 읽힌다는
사용자 주석을 반영했다. 공통 형식을 사용하는 S22–S29를 함께 정렬했다.

- 기존: “언제”와 상황을 한 회색 text box에 연결.
- 수정: 옅은 배경·청록색 굵은 **“이럴 때 사용”** 라벨과 상황 설명을 분리.
- 라벨24px, 상황27px. 기존 상황 문구와 다른 내용의 위치·크기는 유지.
- Prompt, 출처·Claim Boundary, 핵심 메시지, 시간·순서·근거 범위는 동일.
- Notes8개의 Beginner Explanation에서 화면 라벨 이름만 맞췄다.

## Validation

최종 통합90장과 ACT1 21장을1920×1080으로 렌더링했다.
사용 상황이 있는8장을 개별 검토하고 새 잘림·겹침이 없음을 확인했다.
다른82장 PNG·화면 텍스트·Notes 레코드는 baseline과 동일하다.
Slide Map은 변경하지 않았으며90장/368분, ACT1 21장/63분을 유지한다.
Full/ACT1의21개 PNG와90개 내장 Notes를 대조했다.
두 PPTX의 package/layout/font-policy/import 검사 finding은0이다.
상세 결과·현재 파일 식별자는 [검증 JSON](PROMPT_USAGE_LABEL_REVISION_VALIDATION.json)에 기록한다.

현재8장 모음도 갱신했다. 다른 ACT PPT, Demo 저장소·Trial·State/tag,
묶음 ZIP/HTML은 변경하지 않았다. Windows·교육장·현재 제품/계정·리허설은
기존대로 UNVERIFIED다.

## Outputs

- [수정 S22](../preview/full/S22.png)
- [기법8장 모음](../preview/act1/prompt-methods-montage.png)
- [통합 PPT](../AI_Dev_Training_Full.pptx)
- [ACT1 PPT](../ACT_1.pptx)

정상 산출물만 기존 origin/main에 일반 commit/push한다. 실제 checkpoint는
Git 이력과 완료 보고에 기록한다.
