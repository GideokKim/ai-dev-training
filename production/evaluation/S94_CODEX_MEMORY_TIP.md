# Codex 메모리 사용 팁

현행 DEC-0160 판본에서는 [S92](../preview/full/S92.png)에 있다.

## 이전 판본 · S94

S93에서 실행 근거와 미해결 사항을 상태 파일로 넘긴 뒤, S94에서는 지난 대화에서 말한 개인 선호를 나중 코드 리뷰에서 참고하는 방법을 안내한다. 설정 경로와 대화별 명령을 분리하고, 실제 작업의 검증 결과는 상태 파일에 남긴다. 우측 상단에 기존 ‘실무 적용 팁 · Context 관리’ 배지를 사용했다. [OpenAI · Memories](https://learn.chatgpt.com/docs/customization/memories) · [당시 화면](https://github.com/GideokKim/ai-dev-training/blob/b6ed5fc13605d1db1d866f0dbfe9d41234b2b1dd/production/preview/full/S94.png)

## 이전 연구 사례 확인

기준판 `950cef2`의 S91 화면·Notes는 그대로다. 바로 전 GitLab 개편 전판 `0f6b282`에는 S87 ‘코드 생성 실험에서 검토 모델을 바꾸면’이 있었다. 같은 초기 구현 모델(GPT-3.5-turbo)의 HumanEval pass@1은 단독 69.51%, 초기 검토자를 동종 모델로 두면 81.16%, GPT-4면 90.01%, minimax-abab-chat이면 48.19%였다. 이 결과는 구현·검토 모델 조합을 고르는 질문에 직접 연결된다. 현재 S91은 품질이 비슷한 응답을 비교할 때 발생할 수 있는 평가자의 자기선호를 다룬다. [이전 발표 화면](https://github.com/GideokKim/ai-dev-training/blob/0f6b282c8ed12edaab04fa8a0ea7344ab9c264b3/production/preview/full/S87.png) · [PairCoder 표 2](https://aclanthology.org/2026.findings-acl.149.pdf#page=7)

## 검증

전체 114장·391분, ACT4 21장·87분. S94는 강의 2분이며 다른 슬라이드의 시간과 모드를 보존했다. ACT5는 S99에서 시작한다. S111의 작업 환경 찾아보기에 S94를 넣었고 S113의 관련 번호를 맞췄다.

통합·ACT4·ACT5의 151개 화면을 1920×1080으로 렌더하고 각 PPT의 내장 Notes와 Markdown을 대조했다. S01–S93은 기준판과 픽셀이 동일하고, 뒤 20장은 이전 번호의 화면과 대조했다. 두 찾아보기를 제외한 18장은 페이지 번호 위치에서만 픽셀 차이가 있었다. 세 PPT 모두 구조 검사를 통과했고 S94·S111의 레이아웃 경고는 0건이다. 교육 계정에서의 사용 가능 여부·회상 결과 및 Windows 발표 화면은 미검증이다.
