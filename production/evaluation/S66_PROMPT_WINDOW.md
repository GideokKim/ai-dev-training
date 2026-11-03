# S66 — Mac 스타일 프롬프트창과 화면 출처 문구 정리

Decision: DEC-0137. Date:2026-11-03. Baseline:`00e9d54`.
Status: LOCAL RENDER AND STRUCTURE VERIFIED.

## 수정

S66의 요청 영역을 기존 S41과 같은 native 프롬프트창으로 바꿨다.
둥근 테두리·회색 제목 표시줄·빨강/노랑/초록 신호등·작업 요청 라벨·전송 버튼을 적용했다.
Skill 이름 `$graypipe-performance`와 요청 네 줄, 제목·핵심 문장은 그대로다.
전송 버튼과 분리하도록 마지막 요청 줄의 텍스트 영역 폭만 줄였으며 문구·글자 크기는 유지했다.
화면의 “Codex CLI 0.154.0 기록” 문구를 삭제하고 M 연계 표시는 유지했다.

이 창은 보존된 요청의 발췌·번역을 보여주는 편집 가능한 UI 형태의 재구성이다.
실제 제품 Screenshot이나 새 실행이 아니다. CLI 버전·원자료·trace·관찰 조건과 현재 제품 미검증 범위는
19필드 Notes의 Evidence/Claim Boundary에 그대로 보존했다.
검토만 요청했던 S68은 수정하거나 삭제하지 않았다.

## 검증

- 통합114장과 ACT3 19장, 총133개의 최종 PNG를1920×1080으로 렌더링했다.
- S66·참조 S41·ACT3 montage를 검토했다. 제목 표시줄·본문·전송 버튼에 새 잘림·겹침은 없다.
- 다른113장의 화면·텍스트는 이전 판과 동일하다. S66의 픽셀 변경도 요청 영역과 삭제한 footer 안에 한정된다.
- Skill 이름·요청 네 줄은 동일하며 S66의 나머지 화면 텍스트도 동일하다.
- Full/ACT3의19장 렌더와133개 내장 Notes를 대조했다. 나머지5개 ACT PPT와 해당 Notes는 바이트가 같다.
- 114장·392분, ACT별 배정·Mode·Template Mapping·Slide ID·Story Beat·Evidence/Claim Boundary를 유지했다.
- Native 표 S54·차트 S70/S90과 기존 이미지·차트값을 보존했다. 새 창은 native text/shape로 편집 가능하다.
- 두 패키지의 ZIP/관계/컨텐츠타입·16:9·글꼴 정책·native 표/차트·first-party import·OOXML 검사를 통과했다.
  패키지별 layout finding은0건이다.
- 기존43개 정적 Fallback의 역할·분류·경로는 같으며 현재 파일 해시를 정렬했다.

로컬 렌더는 Apple SD Gothic Neo/Menlo를 Malgun Gothic/Consolas의 대체로 사용한다.
Windows PowerPoint·실제 발표 PC/교육장·제품/계정·실측 리허설은 UNVERIFIED다.
Demo Repository·Sites·발표 묶음은 변경하지 않았다. 새 Trial·제품 실행은 수행하지 않았다.

## 산출물

[통합 PPT](../AI_Dev_Training_Full.pptx), [ACT3 PPT](../ACT_3.pptx),
[S66 미리보기](../preview/full/S66.png), [전체 Notes](../notes/FULL_SPEAKER_NOTES.md),
[시각 수정 기획](../../plan/S66_PROMPT_WINDOW.md), [검증 요약](S66_PROMPT_WINDOW_VALIDATION.json).
