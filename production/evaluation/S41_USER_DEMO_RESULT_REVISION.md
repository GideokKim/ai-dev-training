# S41 사용자 별도 데모 결과 수정

Decision: DEC-0121. Date:2026-11-02. Baseline:`8a21cd4`.
Status: LOCAL RENDER / STRUCTURE VERIFIED; separate demo result supplied by user.

## Change

S41의 결과를9/9 PASS로 수정했다. 사용자가 별도로 진행한 실제 데모의 전체 테스트가
9개라고 명시했다. 단순한 발표용 숫자나 기존 TRIAL-003의 정정으로 취급하지 않는다.
Prompt 창·작업 지침·강조·제목·핵심 문장·하단 주석 삭제 상태는 그대로 유지한다.
120장·417분, S41 Demo4분과 ACT2 22장·90분 및 기존 Mode를 보존한다.

## Provenance

표시한9개는2026-11-02 사용자 주석 “내가 따로 진행한 데모가 있어 거기선9개야”에
근거한 별도 실제 데모 정보다. 정확한 실행 날짜·제품 버전·환경·명령·원시 로그는
제공되지 않았으며 Codex가 새 실행이나 독립 재현을 수행한 것은 아니다.
기존 TRIAL-003의11개 실행·원문·조건은 plan/DEMO_MATRIX.md와 Git State에 그대로 남긴다.
두 데모를 합치거나 기존 Trial의 Codex CLI0.154.0 조건을9개 데모에 귀속하지 않는다.
별도 Trial ID·로그·테스트 결과를 만들지 않는다. 출처는 Notes/현재 Map/Claim Freeze/
DEC-0121에 정렬했다. AGENTS.md의 단독 인과성·강제 준수에 관한 경계도 유지한다.

## Validation

- 최종 Full120장과 ACT2 22장,142개 PNG를1920×1080으로 렌더링했다.
- S41의 바뀐 픽셀은 기존 결과 숫자의 영역 안에만 있다. 숫자 외 화면과 가운데 지침은 같다.
- 다른119개 화면은 baseline과 픽셀이 같고119개 Notes도 내용이 같다.
- Full/ACT2 22개 화면과 S41 source/final 화면이 각각 일치한다.
- 두 패키지에서 바뀐 part는 S41 Slide XML과 해당 Notes XML 각각 하나뿐이다.
  나머지 masters/rels/media/native 표·차트/workbook은 바이트가 같다.
- 다른5개 ACT PPT는 바이트가 같다.120개19필드 Notes와142개 내장 Notes를 대조했다.
- Slide/Story Beat/Section/Trial/State/Claim ID와 시간/Mode·Template 배정은 유지한다.
- ACT 시간42/64/90/96/85/40, 장수14/23/22/26/20/15,
  Mode Lecture186/Demo49/Case105/Reflection22/Transition23/Q&A32, 합계417분이다.
- 패키지·16:9·폰트 정책·layout finding0·first-party import 검사를 통과했다.
-44개 정적 Fallback 경로·역할을 유지하고 S41의 출처 분류·현재 파일 해시를 정렬했다.

최종 S41 개별 화면 및 ACT2/전체 montage를 확인했다. 새 잘림·겹침은 발견하지 않았다.
로컬 렌더에는 Malgun Gothic/Consolas 대체로 Apple SD Gothic Neo/Menlo를 사용했다.
Windows·발표PC·교육장·제품/계정·실측 리허설은 UNVERIFIED다.
Demo 저장소 HEAD/tag/작업 상태와 Sites/발표 묶음은 변경하지 않았다.

## Artifacts

[수정 S41](../preview/full/S41.png), [통합 PPT](../AI_Dev_Training_Full.pptx),
[ACT2 PPT](../ACT_2.pptx), [Notes](../notes/ACT_2_NOTES.md),
[현재 Map](../../plan/SLIDE_MAP.md), [전달 식별자](FINAL_HANDOFF.md),
[사용자 검증](USER_VALIDATION_CHECKLIST.md).
