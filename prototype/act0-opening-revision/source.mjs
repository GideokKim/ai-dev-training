/** Two-slide visual review; preserve the official deck until review is complete. */
import fs from 'node:fs/promises';
import path from 'node:path';
import * as H from '../../production/source/presentation-revision/helpers.mjs';

export async function openingSlides(directory) {
  const image = new Uint8Array(await fs.readFile(path.join(directory, 'assets/S01-cases.png')));
  const {C, FONT, text, rect, arrow} = H;
  return {
    S01(p) {
      const s = H.frame(p, 'S01', 'AI에게 지금 무엇을 맡기고 있는가?',
        'ACT 0 · 익숙한 사용에서 출발하기',
        '교육용 사례 삽화 · AI 생성 이미지 · 실제 제품 실행 화면 아님',
        '자신의 경험 하나만 떠올려 보세요. 사용 수준을 평가하는 질문이 아닙니다.');
      text(s, '최근 AI에 맡긴 일 하나를 떠올려 보세요.', 64, 174, 1152, 36, 28, C.sub);
      s.images.add({blob: image, contentType: 'image/png', fit: 'contain',
        alt: 'Three equally weighted teaching illustrations: asking about code, investigating repository files, and reviewing a result. AI generated, not product evidence.',
        position: {left: 64, top: 214, width: 1152, height: 384}});
      for (const [caption, x] of [['설명 받기', 64], ['조사 맡기기', 456], ['결과 확인', 848]]) {
        text(s, caption, x, 549, 368, 40, 32, C.teal, true, FONT, 'center');
      }
      return s;
    },
    S02(p) {
      const s = H.frame(p, 'S02', '작은 질문에는 Chatbot이 유용하다',
        'ACT 0 · 코드 조각의 뜻을 묻는 익숙한 방식',
        'C++ 초기화·질문 흐름의 교육용 예시 · 실제 ChatGPT 대화 캡처 아님',
        '초기값을 설명하는 도식입니다. 실제 실행 결과나 자동 IDE 연동을 뜻하지 않습니다.',
        'CONCEPTUAL / TEACHING_MODEL');
      text(s, '이 초기화는 어떤 원소를 만들까?', 64, 190, 1152, 44, 32, C.ink, true);
      H.code(s, 'std::vector<int> values{1, 2, 3, 4};', 64, 255, 690, 116, 26);
      arrow(s, 779, 297, 42, 27);
      for (let i = 0; i < 4; i++) {
        const x = 844 + i * 96;
        rect(s, x, 266, 84, 70, C.white, C.teal, 2);
        text(s, String(i + 1), x, 266, 84, 70, 36, C.teal, true, FONT, 'center');
      }
      text(s, '4개 원소', 844, 348, 372, 34, 26, C.sub, false, FONT, 'center');
      const nodes = [
        [64, 'IDE', '코드 선택·복사'],
        [482, 'Chatbot', '붙여넣고 질문'],
        [900, 'IDE', '답 확인·적용']
      ];
      for (const [x, title, body] of nodes) {
        rect(s, x, 444, 316, 118, title === 'Chatbot' ? C.pale : C.white, C.teal, 2);
        text(s, title, x + 16, 458, 284, 29, 23, C.teal, true, FONT, 'center');
        text(s, body, x + 16, 500, 284, 43, 29, C.ink, true, FONT, 'center');
      }
      arrow(s, 394, 492, 74, 27);
      arrow(s, 812, 492, 74, 27);
      text(s, '필요한 코드와 맥락을 사람이 골라 전달한다.', 64, 574, 1152, 26, 23, C.sub);
      return s;
    }
  };
}
