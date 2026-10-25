# 웹 읽기 가이드 제작·배포 결과

Decision: DEC-0100. Date:2026-10-25. Status: DEPLOYED — OWNER PRIVATE.

[웹 읽기 가이드](https://ai-dev-training-guide.noah-potato.chatgpt.site) · Version1.

ACT5 수정 PPT의 commit `e04b88e`와 내장 Notes를 기준으로6ACT·52개 읽기 절을
제작했다. 원본116장·410분과 근거 범위를 유지하며 새 Trial·연구·제품 실행·성과를
추가하지 않았다. PPT 원본과116PNG는 동일 bytes로 제공한다.

처음 화면과6ACT·안내의8개 페이지, 주제/Slide ID 검색, 이전·다음 ACT와 절별 목차,
원본 슬라이드/주장 범위 펼치기, 통합 PPT 다운로드를 제공한다. 개인 선택은 ACT5의
S111/S112에 해당하는 두 절에 남기고 초반의 전체 관점 정리와 구분했다.

## 검토

- 116개 Slide의 주 읽기 절 연결에 누락·중복 없음.
- 52개 절,517개 내부 링크/자산 경로에 깨진 경로 없음.
- 기준 PPT와 원본 PNG116개의 SHA-256 일치.
- 1440px와320px 전체8페이지,390px 대표4페이지에 가로 넘침 없음.
- 로컬 검색·결과 이동·근거 펼치기 확인.
- 배포된8페이지의 본문·판본 표시와 검색·결과 이동·S105 원본 이미지 로딩 확인.
- Sites가 확인한 pushed source와 Version1의 source commit 일치.
- 비공개 배포 성공과 사용자 브라우저의 실제 페이지 표시를 구분해 각각 확인.

웹 source commit:`73cdf4af4887e3e6b7672f8e2720b16154c088cc`. 교육 저장소와 별도의 Sites source 저장소로
관리한다. 인증 정보·로컬 캐시·발표 묶음은 업로드하지 않았다.

Windows PowerPoint·발표 PC 글꼴·교육장·교육 계정/제품·실측 리허설은 계속 UNVERIFIED다.
웹 표시 확인을 이들 Gate의 검증으로 대체하지 않는다.

[설계·관리 기준](../../plan/WEB_READING_GUIDE.md),
[내용 매핑](../../references/WEB_READING_GUIDE_CONTENT_MAP.json),
[검사·배포 기록](WEB_READING_GUIDE_VALIDATION.json).
