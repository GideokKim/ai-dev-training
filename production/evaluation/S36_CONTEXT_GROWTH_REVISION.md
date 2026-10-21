# S36 — Audience-facing Context Growth Revision

Date: 2026-10-21. Baseline: e24ce4a. Decision: DEC-0048.
Status: **COMPLETE — LOCAL RENDER AND NOTES PARITY CHECKED**.

## Presentation Change

화면의 STATE-01/STATE-02를 **프로젝트 초기 / 현재 프로젝트**로 바꿨다.
가운데 ‘프로젝트 진행’ 화살표와 같은 폭의 짧은/길어진 AGENTS.md 도식으로
기존 정보 위에 내용이 누적되는 모습을 보여준다. 회색은 기존 정보,
청록색은 새로 더한 정보다. 줄 수·byte 수는 화면에서 제거했다.

처리 순서·이미지 명세·테스트 구조·CLI 출력의 실제 네 정보 유형을 유지하고,
‘이번 작업에도 모두 필요할까?’로 S37의 관련성 확인에 연결한다.
S35에서 Project Context의 위치·수명을 설명한 뒤 같은 문서의 축적을 보여준다.

문서 도식은 built-in image_gen의 생성 이미지이며 실제 캡처·정량 차트가 아니다.
[생성 프롬프트·파일 출처](../../assets/slide-illustrations/context-growth/README.md)를 보존했다.
제목·시점·파일명·예시·화살표는 native 편집 요소다.

## Source and Claim Scope

실제 전후 내용의 근거는 STATE-01/STATE-02 AGENTS.md와 plan/DEMO_MATRIX.md다.
원래15줄/567bytes와32줄/1,303bytes 메타데이터는 Notes·원본에 남긴다.
이미지의 길이는 정확한 비율이 아니며 경과 기간이나 장기 사용을 측정하지 않았다.
‘현재 프로젝트’는 Story의 STATE-02 시점이며 최신 Demo HEAD라는 뜻이 아니다.
정보 증가가 실패를 일으켰거나 내용이 부정확했다는 주장을 추가하지 않았다.
OBSERVED_PRODUCT는 실제 내용 비교의 근거 유형이며 생성 도식을 실행 기록으로
취급하지 않는다. 새 Trial·실험·Demo 변경은 없다.

## Rendering and Alignment

Full90장과 ACT2 15장의 최종 패키지를 다시 읽어105개 PNG를 생성했다.
S36 원본 크기와 S35-S37 연결을 검토했고 별도 시각 검토에서도 수정 권고는 없었다.
글자 잘림·겹침, 문서 비율, 내용 축적과 정보 유형의 대응을 확인했다.
다른89장의 텍스트·PNG·Notes 레코드와 다른 ACT PPT는 baseline을 유지한다.
90개 내장 Notes/19개 필드, ACT2/Full15쌍, package/layout/font-policy/import를 대조했다.
[검증 JSON](S36_CONTEXT_GROWTH_REVISION_VALIDATION.json)에 파일 식별자를 기록한다.

전체90장/368분, ACT2 15장/70분, S36 Case4분과 모든 장별 배분은 불변이다.
Malgun Gothic/Consolas 지정과 Apple SD Gothic Neo/Menlo 로컬 렌더 대체를 유지한다.
Windows·발표 PC·교육장·제품/계정·실측 리허설은 UNVERIFIED다.
묶음 ZIP/HTML은 갱신하지 않았다. 정상 산출물만 기존 origin/main에 일반 push한다.

## Outputs

- [수정 S36](../preview/full/S36.png)
- [통합 PPT](../AI_Dev_Training_Full.pptx)
- [ACT2 PPT](../ACT_2.pptx)
- [ACT2 Notes](../notes/ACT_2_NOTES.md)
