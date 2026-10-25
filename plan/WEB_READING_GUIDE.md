# ACT 웹 읽기 가이드

Decision: DEC-0100. Date:2026-10-25.

## 목적과 기준

사용자 요청에 따라 ACT5 PPT 수정과 렌더링 검토를 먼저 완료한 뒤 Sites를 제작했다.
웹은 슬라이드 쇼가 아닌 ACT별 읽기 자료다. 기준은 DEC-0099의116장·410분 PPT와
그 내장 Notes이며, PPT가 변경된 커밋은 `e04b88e`다. 새로운 교육 지식·사례·연구·
제품 기능·Trial·성과를 추가하지 않고 같은 내용의 설명과 관계를 문장으로 풀어 쓴다.

## 웹 구성

- 처음 화면: 교육의 흐름, 여섯 ACT의 목차.
- ACT0–5: 각8/9/8/9/8/10개 절, 총52개 읽기 절.
- 안내: 원본 기준, 관찰·교육용 사례·연구·제품 안내의 구분.
- 검색: 주제·용어·Slide ID로 절을 찾아 이동.
- 원본: 절별 Slide ID·원본 화면·Notes 주장 범위와 통합 PPT 다운로드.

116개 Slide는 각각 하나의 주 읽기 절에 연결한다. 원본 PPT와116PNG를 그대로 복사해
참조 자료로 제공하며 이미지의 내용·크롭·의미를 새로 바꾸지 않는다. 원고는 읽기 사이트의
`content/chapters.json`, 원본은 `content/source-slides.json`이다. 교육의 Source of Truth는
여전히 plan/SLIDE_MAP.md와 확정 PPT다. 웹 원고가 독립 기획 원본이 되지 않는다.

## 내용 경계

과거 CLI 관찰을 현재 Desktop 실행 결과로 말하지 않는다. Context routing의 접근 차이를
토큰·성능 절감으로, Skill/Harness를 성능 개선의 단독 원인으로 바꾸지 않는다.
교육용 C++와 반복 루프 후보는 실제 Trial 결과가 아니다. 연구는 해당 모델·과제·조건에
한정한다. Goal은 공식 안내 각색이며 자동 다른 모델 검토·완료 보장을 주장하지 않는다.
ACT5 초반은 전체 관점, S108–S110은 재평가, S111/S112는 개인 적용이라는 역할을 지킨다.

## 게시와 접근

Site: https://ai-dev-training-guide.noah-potato.chatgpt.site

Sites project ID: `appgprj_6ade0d3b768881918411623ad56daffb`.
배포 Version:1. Status:SUCCEEDED. Access:OWNER_PRIVATE.
공개 범위나 다른 사람의 접근 권한은 확대하지 않았다.
Site source commit: `73cdf4af4887e3e6b7672f8e2720b16154c088cc`.
로컬 source checkout: `../sites/ai-dev-training-guide`.
사이트 생성·소스 연결·저장·비공개 배포는 Sites의 공식 절차를 사용했다.
인증 정보는 파일·Git·출력에 저장하지 않았다.

## 확인과 후속 관리

8개 정상 페이지와404,52개 절·116개 출처,517개 내부 링크/자산 경로, 원본 PPT·PNG의
해시를 확인했다. PC1440px·모바일320px 전체 페이지와390px 대표 페이지에서 가로
넘침이 없었다. 검색·결과 이동·원본 펼치기를 확인했고 배포된8개 페이지와 S105 이미지의
로딩도 확인했다. 원고와 원본을 수작업 대조해 근거 범위를 검토했다.

PPT 내용이 바뀌면 먼저 PPT·Notes·Map을 정렬하고 렌더링한다. 이후 관련 웹 절과 원본
데이터·다운로드·PNG를 갱신하고 출처 매핑·링크·반응형을 확인한 뒤 같은 Site ID로 배포한다.
Windows PowerPoint·발표 계정·교육장·실측 리허설은 별도 Gate이며 UNVERIFIED를 유지한다.
발표용 묶음 자료와 Demo Repository는 변경하지 않았다.

[내용 매핑](../references/WEB_READING_GUIDE_CONTENT_MAP.json),
[검토·배포 기록](../production/evaluation/WEB_READING_GUIDE_VALIDATION.json).
