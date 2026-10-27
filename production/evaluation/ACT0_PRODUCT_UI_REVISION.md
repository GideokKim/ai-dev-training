# ACT0 제품 UI 수정 결과

Decision: DEC-0107. Date: 2026-10-27. Baseline: `274b1d6`.

S11의 오른쪽 대화창을 ChatGPT 웹 자료 첨부·요청 UI로 바꿨다. 사람이 골라 둔
코드·테스트·명세, 로그·권한 정보와 설명 요청만 보인다. 응답이나 비교 결과는 없다.
S12의 오른쪽은 graypipe 프로젝트가 열린 Codex UI에 기존 조사 요약을 담았다.
“화면 재구성 · 근거는 CLI 조사 기록”을 표시해 실제 Desktop 캡처와 구분한다.

두 UI는 built-in image_gen으로 생성했다. [원본·참고 범위](../../assets/product-ui/README.md),
[전체 생성 지시](../../assets/product-ui/PROMPTS.md)에 기록했다. 실제 TRIAL-001 요청과
관찰·환경 제한은 그대로다. 기존 사람/Agent·다섯 자료·연결선·상단 삽화·제목·
전환·장별 시간/Mode도 유지했다. UI 자체는 raster이며 주변 도식·문구는 Native다.

## 로컬 검토

통합120장과 ACT0 15장을 최종 파일에서 렌더링했다. S11/S12를 개별 화면으로
확인했으며 새 잘림·겹침은 발견하지 않았다. S10의 같은 자료→S11 사람의 전달→
S12 Agent의 허용된 조사→S13 Codex 진입이라는 흐름을 유지한다. 바뀐 영역은
오른쪽 UI와 caption뿐이며 나머지118장 화면은 이전과 픽셀이 같다.

Full/ACT0의15개 화면이 일치한다. 원본 media·표·차트·워크북·layout과 대상 외
객체는 보존했고 두 UI 이미지만 추가했다.120개 Notes의19필드와135개 내장 Notes를
대조했다. 두 장의 UI 설명·출처·운영을 정렬했으며 다른118개 Notes는 그대로다.
120장·420분, ACT45/64/90/96/85/40분과 모든 Mode 합계가 유지된다.

현재 실제 제품·계정·Windows·교육장·리허설은 UNVERIFIED다. 로컬 Malgun Gothic과
Consolas 렌더링에는 Apple SD Gothic Neo/Menlo 대체를 사용했다. 다른5개 ACT PPTX,
Demo 저장소·Sites·발표 묶음은 바꾸지 않았다.

[S11](../preview/full/S11.png), [S12](../preview/full/S12.png),
[ACT0 미리보기](../preview/act0/montage.png), [통합 PPT](../AI_Dev_Training_Full.pptx),
[ACT0 PPT](../ACT_0.pptx), [기획 범위](../../plan/ACT0_PRODUCT_UI.md).
