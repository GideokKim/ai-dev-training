// Audience-facing revisions for ACT 0 and ACT 1. S05 reuses the approved pilot.
export const slides = {
  S01: (p, H) => {
    const { C, text, line } = H;
    const s = H.frame(p, 'S01', 'AI에게 지금 무엇을 맡기고 있는가?', 'ACT 0 · 익숙한 사용에서 시작하기', '생각해 보기 · 이 과정의 교육 모델', '자신의 경험 하나만 떠올려 보세요. 사용 수준을 평가하는 질문이 아닙니다.');
    text(s, '가장 최근에 AI에게 맡긴 일 하나', 64, 238, 1152, 58, 40, C.teal, true);
    text(s, '오류 설명을 들었나요?\n관련 코드를 조사하게 했나요?\n수정한 결과까지 확인하게 했나요?', 64, 324, 740, 174, 34, C.ink);
    line(s, 875, 252, 341, C.line, 2);
    text(s, '질문 · 생성\n조사 · 변경\n검증 · 작업 방식 개선', 875, 293, 341, 186, 29, C.sub);
    text(s, '익숙한 방식에서 출발해도 괜찮습니다.', 64, 543, 1152, 43, 30, C.ink);
    return s;
  },
  S02: (p, H) => {
    const { C, text, line, arrow, code } = H;
    const s = H.frame(p, 'S02', '작은 질문에는 Chatbot이 유용하다', 'ACT 0 · 작은 코드 질문', '교육용 예시 · 실제 ChatGPT 대화 캡처가 아님', '일반적인 질문 흐름을 설명하며 특정 제품의 정확도나 우월성을 주장하지 않습니다.', 'CONCEPTUAL');
    text(s, '“이 코드에서 무엇이 남을까?”', 64, 233, 1152, 44, 34, C.teal, true);
    code(s, 'row = [1, 2, 3, 4]\nrow[1:3]', 64, 308, 514, 150, 32);
    arrow(s, 603, 364, 48, 30);
    text(s, '[2, 3]', 705, 316, 460, 65, 52, C.ink, true, H.CODE);
    text(s, '끝 index 3은 포함하지 않습니다.', 705, 392, 490, 51, 29, C.sub);
    const labels = ['코드·오류', '복사', '질문', '답 확인', 'IDE로 복귀'];
    labels.forEach((v, i) => { text(s, v, 64 + i * 238, 526, 199, 40, 27, i === 2 ? C.teal : C.sub, i === 2); if (i < 4) arrow(s, 270 + i * 238, 539, 23, 15); });
    line(s, 64, 498, 1152);
    return s;
  },
  S03: (p, H) => {
    const { C, text, rect, line, arrow } = H;
    const s = H.frame(p, 'S03', '질문이 커지면 Context를 모으는 일이 생긴다', 'ACT 0 · 여러 파일을 가로지르는 질문', '개념 사례 · Repository 수준의 질문을 설명하는 관계도', '특정 Trial에서 실제로 발생한 비용이나 실패를 뜻하지 않습니다.', 'CONCEPTUAL');
    text(s, '“CLI 결과가 기대와 다른데, 어디서부터 봐야 할까?”', 64, 226, 1152, 48, 33, C.teal, true);
    const xs = [64, 460, 856];
    [['CLI', '입력은 어떻게 받나?'], ['처리 흐름', '어떤 연산을 호출하나?'], ['이미지 연산', '구현은 어떻게 생겼나?']].forEach((a, i) => {
      rect(s, xs[i], 313, 360, 126, i === 2 ? C.pale : C.white, C.line, 1);
      text(s, a[0], xs[i] + 24, 329, 312, 41, 33, C.ink, true);
      text(s, a[1], xs[i] + 24, 383, 312, 36, 28, C.sub);
      if (i < 2) arrow(s, xs[i] + 367, 362, 23, 18);
    });
    line(s, 64, 481, 1152);
    text(s, '테스트', 64, 512, 160, 40, 30, C.teal, true);
    text(s, '어떤 조건에서 실패했나?', 229, 512, 416, 40, 29, C.ink);
    text(s, '계약', 704, 512, 110, 40, 30, C.teal, true);
    text(s, '원래 기대한 동작은?', 826, 512, 390, 40, 29, C.ink);
    return s;
  },
  S04: (p, H) => {
    const { C, text, line } = H;
    const s = H.frame(p, 'S04', '파일명을 주지 않으면 Agent는 어디부터 볼까?', 'ACT 0 · Repository 조사 관찰', 'TRIAL-001 실제 요청 발췌 · Codex CLI 0.154.0 · macOS · 읽기 전용', '과거 단일 실행의 기록을 살펴봅니다. 현재 Desktop 동작은 미검증입니다.', 'OBSERVED_PRODUCT');
    text(s, '“현재 이 저장소에서 테스트 하나가 실패하고 있다.\n실패 원인을 조사해줘. 관련 구현과 호출 경로,\n실패하는 테스트를 확인해서 왜 실패하는지 설명해줘.\n아직 코드는 수정하지 마.”', 64, 222, 1152, 167, 31, C.ink);
    line(s, 64, 423, 1152);
    text(s, '찾았는지 확인할 세 가지', 64, 449, 1152, 37, 28, C.teal, true);
    ['실패하는 테스트', '관련 구현', '제품의 호출 경로'].forEach((v, i) => text(s, `${String(i + 1).padStart(2, '0')}  ${v}`, 64 + 396 * i, 519, 360, 46, 29, C.ink, true));
    return s;
  },
  S06: (p, H) => {
    const { C, text, rect, line } = H;
    const s = H.frame(p, 'S06', '관찰 결과와 실행 제한을 분리한다', 'ACT 0 · 전달한 Context와 실행 환경', 'TRIAL-001 관찰 + Context 범위의 교육용 해석 · Codex CLI 0.154.0 · 읽기 전용', 'Chatbot과의 비교 실험 아님 · 이 Trial에서 코드 수정·읽기 전용 권한 해제 없음', 'OBSERVED_PRODUCT');
    text(s, 'Chatbot에 코드·명세만 골라 넣었다면?', 64, 173, 1152, 42, 31, C.ink, true);
    text(s, '코드 Context로 논의할 수 있는 부분', 64, 237, 542, 41, 28, C.teal, true);
    text(s, '함께 전달하지 않은 실행 환경', 700, 237, 516, 41, 28, C.warn, true);
    rect(s, 64, 292, 542, 219, C.white, C.line, 1);
    rect(s, 700, 292, 516, 219, C.amber);
    text(s, '기대 폭 2 ↔ 포함 폭 3', 88, 310, 494, 46, 32, C.ink, true);
    text(s, '명세·테스트·구현을 비교\n추가된 열의 원인을 추론', 88, 373, 494, 72, 28, C.sub);
    text(s, 'TRIAL-001: 원인 설명·코드 미수정', 88, 461, 494, 34, 25, C.teal, true);
    text(s, '읽기 전용 · 임시 디렉터리 제한', 724, 310, 468, 46, 28, C.warn, true);
    text(s, '코드만으로는 부족\n실행 로그·권한 정보도 필요', 724, 373, 468, 72, 28, C.ink);
    text(s, 'TRIAL-001도 환경 오류 3건', 724, 461, 468, 34, 25, C.warn, true);
    text(s, '코드만 옮기면, 실행 환경의 단서는 빠진다.', 64, 530, 1152, 40, 31, C.teal, true);
    text(s, '실제 전체 기록: 7개 통과 · crop 실패 1건 · 환경 오류 3건', 64, 575, 1152, 25, 23, C.sub);
    return s;
  },
  S07: (p, H) => {
    const { C, text, rect, arrow, line } = H;
    const s = H.frame(p, 'S07', '코드를 AI에게 가져가는 대신\nAI를 Repository로 데려간다', 'ACT 0 · Context를 찾는 주체', '교육 모델 · 연결된 관찰: TRIAL-001에서 테스트·구현·호출 경로를 확인', '관찰은 단일 CLI 조사에 한정됩니다. Repository 접근이 작업의 목표까지 정하지는 않습니다.');
    text(s, '내가 관련 코드를 모아 전달', 64, 237, 1152, 42, 31, C.sub, true);
    text(s, 'Repository', 64, 307, 278, 50, 34, C.ink, true);
    arrow(s, 349, 321, 56, 24);
    rect(s, 430, 294, 345, 78, C.white, C.line, 1);
    text(s, '개발자: 선택·복사', 454, 310, 297, 46, 29, C.ink, true);
    arrow(s, 803, 321, 56, 24);
    text(s, 'AI', 910, 307, 276, 50, 34, C.ink, true);
    line(s, 64, 410, 1152);
    text(s, '조사할 일을 맡기고 근거를 확인', 64, 442, 1152, 43, 31, C.teal, true);
    text(s, '개발자: 조사 요청', 64, 518, 350, 48, 29, C.ink, true);
    arrow(s, 420, 532, 56, 24);
    text(s, 'Agent ↔ Repository', 524, 509, 692, 67, 38, C.teal, true);
    return s;
  },
  S09: (p, H) => {
    const { C, text, line } = H;
    const s = H.frame(p, 'S09', 'Repository 접근과 Task 의도는 별개다', 'ACT 0 · 접근할 정보와 정할 목표', '이 과정의 교육 모델 · Repository 접근과 작업 의도의 관계', '모든 제품이나 환경의 기능을 설명하는 공식 분류가 아닙니다.');
    text(s, '볼 수 있는 것', 64, 247, 508, 45, 32, C.teal, true);
    text(s, '정해야 하는 것', 754, 247, 462, 45, 32, C.teal, true);
    line(s, 64, 313, 508); line(s, 754, 313, 462);
    text(s, '파일\n구현\n테스트', 64, 346, 508, 176, 36, C.ink);
    text(s, '원하는 변화\n허용할 범위\n완료 판단', 754, 346, 462, 176, 36, C.ink);
    text(s, '≠', 610, 369, 102, 100, 64, C.teal, true);
    text(s, '코드가 보여도, 원하는 일은 따로 전달해야 한다.', 64, 551, 1152, 43, 29, C.ink, true);
    return s;
  },
  S10: (p, H) => {
    const { C, text, rect, line, arrow } = H;
    const s = H.frame(p, 'S10', 'Repository를 보면 내가 원하는 것까지 알까?',
      'ACT 0 · 제조 라인 검사 Task로 이어지는 질문',
      '교육용 검사 Task 가정 · 점선은 추가 정의·연결 범위 · 실제 실행 결과 아님',
      '실제 저장소에는 후속 함수도 있습니다. 도식은 실제 실행 순서나 함수의 미구현 상태를 재현하지 않습니다.');
    text(s, '제조 라인 검사장비로 확장한다면?', 64, 170, 1152, 34, 27, C.ink, true);
    text(s, '앞서 살펴본 기존 구현', 64, 215, 368, 32, 23, C.teal, true);
    text(s, '검사 흐름으로 추가 정의·연결할 범위', 456, 215, 760, 32, 23, C.warn, true);
    const xs = [64, 260, 456, 652, 848, 1044], w = 172;
    const labels = [
      ['촬영 이미지', 'Input'], ['ROI crop', '기존 구현 · 조사한 범위'],
      ['밝기 정규화', 'Normalize'], ['크기 맞춤', 'Resize'],
      ['통계·특징', 'Statistics'], ['양불 판정', '기준 미정']
    ];
    xs.forEach((x, i) => {
      const planned = i >= 2;
      rect(s, x, 258, w, 188, i === 1 ? C.pale : C.bg,
        planned ? C.warn : i === 1 ? C.teal : C.line, planned ? 2 : 1.5, planned ? 'dash' : 'solid');
      text(s, labels[i][0], x + 8, 383, w - 16, 34, 26, C.ink, true, H.FONT, 'center');
      text(s, labels[i][1], x + 5, 419, w - 10, 23, i === 1 ? 18 : 20, planned ? C.sub : C.teal, false, H.FONT, 'center');
      if (i < xs.length - 1) {
        if (i === 0) arrow(s, x + w + 4, 328, 16, 13, C.teal);
        else {
          line(s, x + w + 3, 334, 13, C.warn, 2, 'dash');
          arrow(s, x + w + 15, 329, 7, 10, C.warn);
        }
      }
    });
    const circle = (x, y, d, fill, stroke = 'none') => s.shapes.add({
      geometry: 'ellipse', position: {left: x, top: y, width: d, height: d},
      fill, line: {fill: stroke, width: stroke === 'none' ? 0 : 1.5}
    });
    // Schematic workpiece and ROI; no product image or measured pixel data.
    rect(s, 88, 284, 124, 86, '#E2E7EB', C.sub, 1.5);
    [[102,296],[177,296],[102,342],[177,342]].forEach(([x,y]) => circle(x,y,15,C.sub));
    rect(s, 146, 289, 56, 66, 'none', C.teal, 3);
    rect(s, 288, 281, 116, 90, '#E2E7EB', C.teal, 2);
    circle(343, 297, 27, C.sub); circle(343, 338, 27, C.sub);
    // Abstract processing symbols keep future outputs unspecified.
    const shades = ['#3F4B56','#66727D','#9DA7B0','#D5DCE2'];
    for (let j = 0; j < 4; j++) {
      rect(s, 485 + j * 28, 290, 25, 75, shades[j]);
    }
    rect(s, 679, 298, 45, 45, 'none', C.sub, 2);
    arrow(s, 733, 316, 18, 12, C.sub);
    rect(s, 760, 279, 42, 81, 'none', C.sub, 2);
    [25,53,77,45,20].forEach((h, j) => rect(s, 875 + j * 24, 366 - h, 15, h, '#82929E'));
    text(s, '?', 1077, 274, 106, 96, 75, C.warn, true, H.FONT, 'center');
    text(s, '지금 이 저장소에 어떤 일을 맡기고 싶으신가요?', 64, 479, 1152, 49, 35, C.ink, true);
    text(s, '그 원하는 결과까지 코드에 적혀 있을까요?', 64, 540, 1152, 42, 31, C.teal, true);
    return s;
  },
  S11: (p, H) => {
    const { C, text, rect, line } = H;
    const s = H.frame(p, 'S11', 'Task에는 무엇이 아직 정해지지 않았을까?', 'ACT 1 · 모호한 작업 요청', '교육용 구성 사례 · 실제 Agent 실패나 Trial 결과가 아님', 'Repository는 열려 있어도 작업의 목표·보존 조건·완료 기준이 자동으로 정해지지는 않습니다.', 'CONCEPTUAL');
    text(s, '같은 Repository를 보고 있습니다.', 64, 233, 1152, 44, 29, C.sub);
    rect(s, 64, 310, 566, 186, C.white, C.line, 1);
    text(s, '“filter 성능 개선해줘.”', 88, 340, 518, 114, 38, C.ink, true);
    const yy = [299, 395, 491];
    ['무엇을 바꿀까?', '무엇을 그대로 지킬까?', '무엇을 보면 끝났다고 할까?'].forEach((v, i) => { text(s, v, 704, yy[i], 512, 49, 31, C.teal, true); line(s, 704, yy[i] + 65, 512); });
    return s;
  },
  S12: (p, H) => {
    const { C, text, line, rect } = H;
    const s = H.frame(p, 'S12', '요청만으로는 의도가 보이지 않는다', 'ACT 1 · 앞서 본 crop 사례로 좁히기', '교육용 구성 사례 · TRIAL-002의 실제 Prompt가 아님', '짧은 요청을 비난하거나 이 요청이 특정 실패를 만들었다고 주장하지 않습니다.', 'CONCEPTUAL');
    text(s, '“crop test 고쳐줘”', 64, 228, 1152, 74, 50, C.ink, true);
    text(s, '테스트를 바꿀까?', 64, 344, 546, 58, 38, C.teal, true);
    text(s, '구현을 바꿀까?', 704, 344, 512, 58, 38, C.teal, true);
    line(s, 64, 444, 1152);
    text(s, '아직 정해지지 않은 정보', 64, 478, 1152, 38, 28, C.sub, true);
    ['목표의 세부', '보존 조건', '수정 범위', '확인 근거', '완료 조건'].forEach((v, i) => text(s, `${v} ?`, 64 + 234 * i, 539, 214, 42, 28, C.ink));
    return s;
  },
  S14: (p, H) => {
    const { C, text, line } = H;
    const s = H.frame(p, 'S14', '개발자가 정해야 하는 경계', 'ACT 1 · 요청을 보내기 전의 질문', '이 과정의 질문 틀 · 정답을 제시하는 분류 시험이 아님', '마지막 1분은 익숙한 작업 하나를 조용히 떠올려 보세요.', 'CONCEPTUAL');
    const questions = ['무엇을 바꿀까?', '무엇을 유지할까?', '어디까지 바꿔도 될까?', '무슨 근거로 확인할까?', '언제 완료라고 할까?'];
    questions.forEach((q, i) => { const y = 224 + i * 71; text(s, String(i + 1).padStart(2, '0'), 64, y, 80, 46, 28, C.teal, true); text(s, q, 170, y, 1046, 46, 35, C.ink, i === 0 || i === 4); if (i < 4) line(s, 170, y + 57, 1046); });
    return s;
  },
  S15: (p, H) => {
    const { C, text, rect, line } = H;
    const s = H.frame(p, 'S15', 'Task Specification의 다섯 책임', 'ACT 1 · 작업을 구체화하는 틀', '이 과정의 교육 모델 · 공식 OpenAI 분류나 모든 작업에 대한 법칙이 아님', '다섯 항목은 서로 분리된 기능이 아니라 하나의 작업 요청에 담는 책임입니다.');
    text(s, '앞의 질문을 묶고, 필요한 맥락과 작업 과정을 명시한다', 64, 164, 1152, 30, 23, C.sub);
    rect(s, 64, 226, 1152, 354, C.white, C.line, 1);
    const items = [['목표', 'Goal', '어떤 결과를 바꿀까?'], ['맥락', 'Context', '이 작업에 필요한 사실은?'], ['제약', 'Constraints', '무엇을 보존할까?'], ['과정', 'Process', '어떤 순서·경계를 지킬까?'], ['검증', 'Verification', '무엇으로 완료를 확인할까?']];
    items.forEach((a, i) => { const y = 242 + i * 65; text(s, a[0], 88, y, 145, 45, 31, C.teal, true); text(s, a[1], 253, y, 263, 45, 28, C.sub); text(s, a[2], 570, y, 618, 45, 31, C.ink); if (i < 4) line(s, 88, y + 53, 1100); });
    return s;
  },
  S16: (p, H) => {
    const { C, text, rect, line, arrow } = H;
    const s = H.frame(p, 'S16', '더 긴 Prompt보다 분명한 경계', 'ACT 1 · 같은 요청을 구체화하기', '교육용 Before / After · 실제 Trial Prompt나 우월성 비교 실험이 아님', 'C++ 적용도 작업 경계를 정하는 예시입니다. 특정 Windows·빌드 환경을 검증한 것은 아닙니다.', 'CONCEPTUAL');
    text(s, '처음 요청', 64, 225, 316, 42, 28, C.sub, true);
    text(s, '“crop test\n고쳐줘.”', 64, 294, 300, 130, 42, C.ink, true);
    arrow(s, 390, 345, 45, 26);
    text(s, '추가한 정보', 470, 225, 746, 42, 28, C.teal, true);
    const items = [
      ['목표·맥락', 'crop 경계 실패를 조사·수정한다.'],
      ['제약', '끝 좌표 제외, 무관한 API·의존성 유지'],
      ['과정', '재현 → 조사 → 계획 → 최소 수정'],
      ['검증', '집중·전체 Test + CLI smoke + diff'],
    ];
    items.forEach((a, i) => { const y = 283 + i * 65; line(s, 470, y - 4, 746); text(s, a[0], 470, y + 5, 144, 45, 28, C.teal, true); text(s, a[1], 628, y + 5, 588, 45, 28, C.ink); });
    rect(s, 64, 555, 1152, 42, C.pale);
    text(s, 'C++에도: 출력·API/ABI 보존 범위와 Release 검증 조건을 먼저 정한다.', 80, 557, 1120, 38, 28, C.teal);
    return s;
  },
  S17: (p, H) => {
    const { C, text, rect, line } = H;
    const s = H.frame(p, 'S17', '요청한 과정은 기록에도 남았을까?',
      'ACT 1 · 실제 요청과 관찰된 행동의 대응',
      'TRIAL-002 · 요청 발췌·번역 / 관찰 기록 요약 · 2026-09-28 · Codex CLI 0.154.0',
      '원문 로그 캡처 아님 · S16 예시의 실행 결과 아님 · 단일 CLI 관찰이며 Prompt 단독 효과는 미입증',
      'OBSERVED_PRODUCT');
    rect(s, 64, 174, 546, 368, C.white, C.line, 1);
    rect(s, 646, 174, 570, 368, C.pale, C.line, 1);
    text(s, '실제로 보낸 요청 · 발췌·번역', 84, 184, 506, 34, 26, C.ink, true);
    text(s, '관찰된 행동 · 기록 요약', 666, 184, 530, 34, 26, C.teal, true);
    text(s, '과정에 관한 핵심 지시 세 가지', 84, 218, 506, 25, 20, C.sub);
    text(s, '기록 요약과 대상 코드의 식별자를 대조', 666, 218, 530, 25, 20, C.sub);
    const requests = [
      '먼저 현재 실패를\n재현해줘.',
      '관련 구현과 호출 경로를\n조사해줘.',
      '수정 전 짧은 계획을 알리고,\n승인 대기 없이 계속해줘.'
    ];
    requests.forEach((request, i) => {
      const y = 254 + i * 100, n = String(i + 1).padStart(2, '0');
      text(s, n, 84, y, 36, 35, 27, C.teal, true);
      text(s, request, 132, y - 1, 458, 72, 27, C.ink, true);
      text(s, n, 666, y, 31, 35, 27, C.teal, true);
      if (i < 2) {
        line(s, 84, y + 83, 506);
        line(s, 666, y + 83, 530);
      }
    });
    text(s, '실패한 crop 테스트를 찾아 재현', 710, 254, 486, 35, 25, C.ink, true);
    text(s, 'test_crop_excludes_end_coordinate', 710, 294, 486, 29, 24, C.sub, false, H.CODE);
    text(s, 'cli.main · pipeline.process_image', 710, 354, 486, 32, 24, C.ink, true, H.CODE);
    text(s, 'transform.crop까지 제품 호출 경로 확인', 710, 394, 486, 29, 24, C.sub);
    text(s, '파일 수정 이벤트보다 먼저 계획 보고', 710, 454, 486, 35, 25, C.ink, true);
    text(s, '끝 좌표 명세·기존 Test·API 보존 계획', 710, 494, 486, 29, 24, C.sub);
    text(s, '04 최소 수정 내용  ·  S18', 64, 559, 546, 41, 27, C.teal, true);
    text(s, '05 확인·보고 결과  ·  S19', 646, 559, 570, 41, 27, C.teal, true);
    return s;
  },
  S18: (p, H) => {
    const { C, text, rect, line, arrow } = H;
    const s = H.frame(p, 'S18', '조사에서 한 줄 변경까지', 'ACT 1 · 요청한 보존 조건과 최소 변경을 대조', 'TRIAL-002 · STATE-00 → STATE-00-FIXED · 실제 diff를 재구성한 도식', 'src/graypipe/transform.py · 단일 CLI 기록 · 실제 터미널 화면이 아님', 'OBSERVED_PRODUCT');
    text(s, '요청한 02 조사 · 03 계획 · 04 최소 수정', 64, 224, 1152, 46, 30, C.teal, true);
    text(s, '끝 좌표를 제외하는 명세: [x_start, x_end)', 64, 292, 1152, 46, 32, C.ink, true);
    rect(s, 64, 371, 546, 123, C.redPale);
    rect(s, 670, 371, 546, 123, C.pale);
    text(s, '변경 전', 84, 383, 506, 35, 28, C.red, true);
    text(s, '변경 후', 690, 383, 506, 35, 28, C.teal, true);
    text(s, 'row[x_start : x_end + 1]', 84, 436, 506, 40, 28, C.red, true, H.CODE);
    text(s, 'row[x_start : x_end]', 690, 436, 506, 40, 28, C.teal, true, H.CODE);
    arrow(s, 625, 426, 30, 24);
    text(s, 'crop(image, 1, 3)', 64, 535, 430, 45, 29, C.sub, false, H.CODE);
    text(s, '너비 3 → 명세대로 너비 2', 534, 535, 682, 45, 32, C.ink, true);
    text(s, '다음은 요청한 05 확인·보고의 근거를 살펴본다.', 64, 581, 1152, 24, 22, C.teal);
    return s;
  },
  S19: (p, H) => {
    const { C, text, line } = H;
    const s = H.frame(p, 'S19', '변경 결과와 확인 증거', 'ACT 1 · 요청한 확인·보고와 기록의 대응', 'TRIAL-002 기록 요약 · 단일 Codex CLI 실행 · STATE-00-FIXED', '해당 테스트·입력·수정 범위의 확인입니다. 성능 benchmark는 수행하지 않았습니다.', 'OBSERVED_PRODUCT');
    const xs = [64, 460, 856];
    text(s, '요청한 확인·보고에 어떤 근거가 남았을까?', 64, 180, 1152, 32, 26, C.sub);
    const groups = [['관련 테스트 실행', '3 / 3', 'crop 관련 테스트 묶음', '프로젝트 전체 11 / 11 통과'], ['CLI 샘플 실행', 'PASS', 'CLI 샘플 실행 확인', '기록된 샘플의 실행 경로'], ['변경 내용 확인', '1줄', '한 파일의 crop 구현', 'git diff --check 통과']];
    groups.forEach((a, i) => { const x = xs[i]; text(s, a[0], x, 231, 360, 44, 30, C.teal, true); line(s, x, 293, 360); text(s, a[1], x, 320, 360, 91, 59, C.green, true); text(s, a[2], x, 440, 360, 47, 28, C.ink, true); text(s, a[3], x, 515, 360, 65, 28, C.sub); });
    return s;
  },
  S20: (p, H) => {
    const { C, text, rect, arrow, line } = H;
    const s = H.frame(p, 'S20', 'Generated ≠ Done', 'ACT 1 · 생성 뒤에 남는 판단', '교육 모델 · 관찰 예: TRIAL-002에서 테스트·CLI·diff를 확인', '검사는 주장과 위험에 맞춰 선택합니다. TRIAL-002에서 benchmark는 수행하지 않았습니다.');
    text(s, '코드가 나왔다', 64, 248, 380, 59, 40, C.ink, true);
    text(s, '완료라고 말할 수 있나?', 664, 248, 552, 59, 40, C.teal, true);
    arrow(s, 492, 262, 80, 31);
    rect(s, 64, 361, 1152, 151, C.white, C.line, 1);
    ['동작 테스트', '샘플 실행', '변경 검토'].forEach((v, i) => text(s, v, 88 + 376 * i, 393, 350, 61, 33, C.ink, true));
    line(s, 64, 542, 1152);
    text(s, '“더 빨라졌다”고 말하려면 → 해당 조건의 성능 측정도 필요', 64, 553, 1152, 41, 29, C.warn, true);
    return s;
  },
  S21: (p, H) => {
    const { C, text, line } = H;
    const s = H.frame(p, 'S21', 'Check마다 확인하는 범위', 'ACT 1 · 근거에 맞춰 말하기', '교육 모델 · TRIAL-002 실제 확인: 집중·전체 테스트 / CLI smoke / diff', 'Benchmark는 이 Trial에서 미실행. C++ 적용은 도구 사용법이 아닌 검증 범위의 예시입니다.');
    text(s, '확인 방법', 64, 220, 380, 40, 28, C.sub, true);
    text(s, '말할 수 있는 범위', 460, 220, 756, 40, 28, C.sub, true);
    const items = [['집중 테스트', '바뀐 동작의 해당 테스트 조건'], ['전체 테스트', '현재 suite에 담긴 회귀 범위'], ['CLI smoke', '샘플 입력의 통합 실행 경로'], ['diff 검토', '변경 범위와 의도하지 않은 수정'], ['성능 측정', '측정한 입력·환경에서의 성능']];
    items.forEach((a, i) => { const y = 274 + i * 53; line(s, 64, y - 4, 1152); text(s, a[0], 64, y + 2, 340, 43, 28, i === 4 ? C.warn : C.teal, true); text(s, a[1], 460, y + 2, 756, 43, 28, C.ink); });
    text(s, 'C++에서도: Release 실행·API/ABI·대상 데이터에 맞춰 근거를 고른다.', 64, 559, 1152, 39, 28, C.teal);
    return s;
  },
  S30: (p, H) => {
    const { C, text, line } = H;
    const s = H.frame(p, 'S30', '이번 Task인가,\n계속 유지할 Project 정보인가?', 'ACT 1 · 반복해서 쓰는 정보 돌아보기', '생각해 보기 · 이 과정의 교육 모델', '1분 동안 개인적으로 생각한 뒤 2분간 자발적인 질문을 받습니다.');
    text(s, '테스트 명령·보존 조건, 다음 요청에도 다시 쓰게 된다.', 64, 233, 1152, 53, 33, C.ink, true);
    text(s, '이번 작업에만?', 64, 355, 542, 60, 38, C.teal, true);
    text(s, '다음 작업에도?', 704, 355, 512, 60, 38, C.teal, true);
    line(s, 64, 485, 542, C.line, 2); line(s, 704, 485, 512, C.line, 2);
    text(s, '어떤 정보가 계속 남아 있어야 할까요?', 64, 547, 1152, 44, 31, C.ink);
    return s;
  },
  S31: (p, H) => {
    const { C, text, line, rect } = H;
    const s = H.frame(p, 'S31', '반복하는 설명을 두 범주로 나누기', 'ACT 1 · 정보의 수명과 범위', '교육용 후보 예시 · 모든 프로젝트에 적용되는 유일한 분류가 아님', '다음 질문: Project 정보를 왜 매번 Prompt에 다시 적고 있을까요?', 'CONCEPTUAL');
    text(s, '이번 Task', 64, 235, 542, 47, 35, C.teal, true);
    text(s, '계속 유지할 Project 정보', 704, 235, 512, 47, 33, C.teal, true);
    line(s, 64, 305, 542); line(s, 704, 305, 512);
    text(s, 'crop 경계 수정\n이번에는 README만 수정', 64, 338, 542, 132, 31, C.ink);
    text(s, '의존성 추가에는 작업상 근거 필요\n프로젝트 테스트 명령', 704, 338, 512, 132, 29, C.ink);
    rect(s, 64, 525, 1152, 65, C.pale);
    text(s, '정보마다 필요한 기간과 적용 범위가 다르다.', 84, 536, 1112, 43, 31, C.teal, true);
    return s;
  },
};
