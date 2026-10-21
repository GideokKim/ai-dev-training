/** Apply the approved opening revisions without changing the historical Trials. */
import fs from 'node:fs/promises';
import path from 'node:path';
import * as H from './helpers.mjs';

export async function loadAct0OpeningSlides(root) {
  const assets = path.join(root, 'assets/slide-illustrations');
  const cases = new Uint8Array(await fs.readFile(path.join(assets, 'S01-cases.png')));
  const tests = new Uint8Array(await fs.readFile(path.join(assets, 'S04-google-test-mock.png')));
  const {C, FONT, text, rect, line, arrow} = H;
  return {
    S01(p) {
      const s = H.frame(p, 'S01', 'AI에게 지금 무엇을 맡기고 있는가?',
        'ACT 0 · 익숙한 사용에서 출발하기',
        '교육용 사례 삽화 · AI 생성 이미지 · 실제 제품 실행 화면 아님',
        '자신의 경험 하나만 떠올려 보세요. 사용 수준을 평가하는 질문이 아닙니다.');
      text(s, '최근 AI에 맡긴 일 하나를 떠올려 보세요.', 64, 174, 1152, 36, 28, C.sub);
      s.images.add({blob: cases, contentType: 'image/png', fit: 'contain',
        alt: 'Three equal teaching examples: explanation, investigation and result review. AI-generated illustration, not a product capture.',
        position: {left: 64, top: 214, width: 1152, height: 384}});
      for (const [label, x] of [['설명 받기', 64], ['조사 맡기기', 456], ['결과 확인', 848]]) {
        text(s, label, x, 549, 368, 40, 32, C.teal, true, FONT, 'center');
      }
      return s;
    },
    S02(p) {
      const s = H.frame(p, 'S02', '작은 질문에는 Chatbot이 유용하다',
        'ACT 0 · 혼동하기 쉬운 C++ 초기화',
        'Microsoft C++ 문서 기반 교육 예시 · 실제 ChatGPT 대화·실행 화면 아님',
        '괄호는 개수·값 생성자, 중괄호는 이 예시의 initializer_list 생성자를 사용합니다.',
        'CONCEPTUAL / TEACHING_MODEL');
      text(s, '괄호만 바뀌었는데, 같은 Vector일까?', 64, 174, 1152, 42, 31, C.ink, true);
      const rows = [
        {code: 'std::vector<int> a(3, 1);', values: [1, 1, 1], count: '3개', y: 236},
        {code: 'std::vector<int> b{3, 1};', values: [3, 1], count: '2개', y: 333}
      ];
      for (const row of rows) {
        H.code(s, row.code, 64, row.y, 720, 76, 28);
        arrow(s, 806, row.y + 25, 42, 25);
        row.values.forEach((value, i) => {
          const x = 882 + i * 84;
          rect(s, x, row.y + 5, 70, 66, C.white, C.teal, 2);
          text(s, String(value), x, row.y + 5, 70, 66, 35, C.teal, true, FONT, 'center');
        });
        text(s, row.count, 1150, row.y + 16, 66, 44, 26, C.sub, true, FONT, 'right');
      }
      for (const [x, label, body] of [[64, 'IDE', '코드 선택·복사'], [482, 'Chatbot', '붙여넣고 질문'], [900, 'IDE', '답 확인·적용']]) {
        rect(s, x, 457, 316, 108, label === 'Chatbot' ? C.pale : C.white, C.teal, 2);
        text(s, label, x + 16, 469, 284, 28, 22, C.teal, true, FONT, 'center');
        text(s, body, x + 16, 506, 284, 41, 28, C.ink, true, FONT, 'center');
      }
      arrow(s, 394, 499, 74, 27);
      arrow(s, 812, 499, 74, 27);
      text(s, '필요한 코드와 맥락을 사람이 골라 전달한다.', 64, 574, 1152, 26, 23, C.sub);
      return s;
    },
    S03(p) {
      const s = H.frame(p, 'S03', '질문이 커지면 Context를 모으는 일이 생긴다',
        'ACT 0 · Visual Studio에서 디버깅할 때 살펴보던 정보',
        'Visual Studio 사용자의 디버깅 정보를 설명하는 교육용 병렬 도식',
        '특정 Trial의 실제 화면이 아닙니다. 명세서는 IDE 밖에서도 함께 참고하는 문서입니다.',
        'CONCEPTUAL / TEACHING_MODEL');
      text(s, '“결과가 기대와 다르다” — 우리는 어디를 살펴볼까?', 64, 174, 1152, 42, 29, C.ink, true);
      const contexts = [
        ['테스트 탐색기', '실패한 테스트\n기대값과 실제값'],
        ['호출 스택', '어디서 호출됐나?\n함수와 호출 순서'],
        ['소스·참조', '관련 구현과 호출부\n코드의 분기'],
        ['지역 변수·조사식', '멈춘 지점의 입력\n변수의 실제 값'],
        ['출력·로그', '빌드·실행 메시지\n오류가 난 시점'],
        ['명세서 · 외부 문서', '기대하는 동작\n입력 범위·예외 조건']
      ];
      contexts.forEach(([label, body], i) => {
        const x = 64 + (i % 3) * 392, y = 235 + Math.floor(i / 3) * 160;
        rect(s, x, y, 368, 137, C.white, C.line, 1);
        text(s, label, x + 20, y + 10, 328, 34, 25, C.teal, true);
        line(s, x + 20, y + 50, 328, C.line, 1);
        text(s, body, x + 20, y + 59, 328, 66, 27, C.ink);
      });
      text(s, '이 정보 하나하나가 Context다.', 64, 552, 1152, 42, 32, C.teal, true, FONT, 'center');
      return s;
    },
    S04(p) {
      const s = H.frame(p, 'S04', '파일명을 주지 않으면 Agent는 어디부터 볼까?',
        'ACT 0 · Repository 조사 관찰',
        '실제 요청: TRIAL-001 · Codex CLI 0.154.0 · macOS · 읽기 전용',
        '우측은 가상 GoogleTest 예시 · 실제 Trial은 Python unittest · 현재 Desktop은 미검증',
        'OBSERVED_PRODUCT');
      text(s, 'TRIAL-001의 실제 조사 요청', 64, 181, 680, 39, 27, C.teal, true);
      text(s, '실패 하나가 있는 상황', 796, 181, 420, 39, 27, C.ink, true);
      text(s, 'C++ 설명용 가상 화면', 796, 219, 420, 28, 22, C.warn, true);
      rect(s, 64, 235, 680, 321, C.white, C.line, 2);
      text(s, '조사 요청 · 입력창 형태로 재구성', 84, 247, 640, 28, 21, C.sub);
      line(s, 84, 283, 640, C.line, 1);
      const prompt = '현재 이 저장소에서 테스트 하나가\n실패하고 있다. 실패 원인을 조사해줘.\n관련 구현과 호출 경로, 실패하는\n테스트를 확인해서 왜 실패하는지\n설명해줘.\n아직 코드는 수정하지 마.';
      text(s, prompt, 84, 297, 640, 195, 26, C.ink);
      text(s, '＋', 84, 511, 36, 30, 27, C.sub);
      s.shapes.add({geometry: 'ellipse', position: {left: 688, top: 510, width: 31, height: 31},
        fill: C.teal, line: {fill: 'none', width: 0}});
      text(s, '↑', 688, 508, 31, 31, 25, C.white, true, FONT, 'center');
      s.images.add({blob: tests, contentType: 'image/png', fit: 'contain',
        alt: 'Fictional GoogleTest Test Explorer illustration: five passed and one failed. Not an actual execution capture or TRIAL-001 evidence.',
        position: {left: 796, top: 250, width: 420, height: 315}});
      text(s, '관찰할 것    실패 테스트  ·  관련 구현  ·  호출 경로', 64, 568, 1152, 29, 26, C.teal, true);
      return s;
    }
  };
}
