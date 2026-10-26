# VS Code + GitHub Copilot 실무 적용 팁

Decision: DEC-0101. User-approved additive scope,2026-10-26.

## 범위

기존 S03 뒤 새 S04 한 장, Lecture2분. 기존116장의 문구·디자인·Notes 내용·
장별 시간/Mode·근거는 보존한다. 이전 S04와 S12도 개선하거나 완화하지 않는다.
이전 S04–S116은 S05–S117로 이동하며 번호·현재 참조/Preview 경로만 정렬한다.
새 팁을 기존 마지막 찾아보기 화면에 추가하지 않는다. 웹/Sites와 발표 묶음은 갱신하지 않는다.

## 화면과 연결

제목: 코드 질문은 VS Code의 Copilot Chat에서.
배지: 실무 적용 팁 · 사용 환경. 기존 T03-C.
S03의 std::vector<int> a(3, 1); / std::vector<int> b{3, 1}; 그대로 사용한다.
VS Code 편집기의 코드 선택→Copilot Chat의 Context 첨부·확인→Ask 질문을 큰 UI 도식으로 보여준다.
요청: “두 vector의 원소 개수와 값이 왜 다른지 설명해줘. 코드는 수정하지 마.”
실제 응답은 그리지 않는다. 실제 회사 화면이 아닌 교육용 재구성임을 표시한다.
끝 질문: “선택한 코드만으로 설명하기 어려운 문제라면, 어떤 자료가 더 필요할까요?”
이전 S04의 디버깅 Context 범주를 그대로 이어간다. Visual Studio와 VS Code를 혼용하지 않는다.

## 근거와 제한

- [GitHub Docs: Chat in IDE](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/chat-in-ide?tool=vscode),2026-10-26 확인. Ask는 코드 설명·질문을 위한 방식이다.
- [VS Code Docs: Add context to chat](https://code.visualstudio.com/docs/chat/copilot-chat-context),2026-10-26 확인. 관련 코드를 명시적으로 Context에 첨부·확인한다.
- 회사에서 이 조합을 사용한다는 사용자 지시를 활용 안내로 반영했다. 회사 의무 정책·승인 계정 검증·자동 전체 Context 전달·답의 정확성·시간 절감 주장은 없다.
- 기존 Codex 안내는 사용자가 변경하지 말도록 명시했다. 이전 S12의 내용은 현재 S13에 그대로 둔다.
- 실제 Copilot 사용/응답·컴파일·실행·비교 실험·새 Trial은 수행하지 않는다.

## 현재 배정

117slides/412minutes. ACT counts15/22/19/26/20/15, minutes45/64/82/96/85/40.
Mode Lecture178/Demo49/Case105/Reflection22/Transition26/Q&A32.
12Templates/28Variants,19Notes fields. 기존 장별 배정·실제 Product/Meta/연구/가상 근거를 보존한다.

[현재 Map](SLIDE_MAP.md), [번호 이행](SLIDE_ID_MIGRATION_117.md).
