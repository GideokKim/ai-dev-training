# Context 활용·지침 누락·그럴듯한 오답의 범위

Decision: DEC-0124. Verified:2026-11-02. Purpose: S47 terminology and boundary.

## 일차 출처

[Liu et al., Lost in the Middle, TACL2024](https://aclanthology.org/2024.tacl-1.9/)
는 문서 질문 답변/합성 key-value 검색에서 근거 위치를 바꿔 당시 모델·과제의 성능을
관찰한 연구다. 지침 누락→할루시네이션 인과나 현재 Codex를 검증한 연구로 사용하지 않는다.

[OpenAI, Why language models hallucinate](https://openai.com/index/why-language-models-hallucinate/)
(2025-09-05)는 그럴듯하지만 사실이 아닌 생성 진술을 할루시네이션으로 설명한다.
S47에서는 이 용어 설명만 참고한다. 모델별 수치·최신 제품 성능이나 이 crop 예시의
재현 근거를 이 자료에서 가져오지 않는다.

## 교육용 사례와 구분

지침 누락은 요구조건이 답에 반영되지 않은 문제이며, 할루시네이션과 같은 말로 취급하지
않는다. S47은 끝 열 제외 조건을 놓친 답과 명세를 지켰다는 근거 없는 단정을 함께
구성해, 두 문제를 주의하도록 설명한다. 어떤 실제 모델 내부 원인을 진단한 결과가 아니다.

실제 명세 출처는 Demo STATE-03의 docs/image-contracts.md Crop 절이다.
너비6/crop 2 5의 명세 기준은 열2·3·4/폭3이다. 열2·3·4·5/폭4는 의도적으로 만든
오답이며 새 Trial·실제 Agent 응답·테스트 결과가 아니다. 화면의 라벨과 Notes로 구분한다.
Routing이나 Context 분리로 오답이 사라진다는 성과·보장도 추가하지 않는다.
