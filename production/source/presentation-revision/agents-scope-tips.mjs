/** DEC-0104: scoped instructions and actual startup discovery are distinct. */
export const CURRENT_SLIDE_COUNT = 120;
export const scopeTipIds = ['S56', 'S57', 'S58'];
export const afterScopeTips = id => {
 const n = Number(id.slice(1));
 return `S${String(n + (n >= 56 ? 3 : 0)).padStart(2, '0')}`;
};
export function scopeReferences(value) {
 return String(value).replace(/(?<![A-Za-z0-9_])S(\d{2,3})(?:([–~])(\d{2,3}))?(?![\d_.-])/g,
  (whole, n, separator, end) => {
   const start = Number(n) <= 117 ? afterScopeTips(`S${n}`) : `S${n}`;
   return end ? start + separator + afterScopeTips(`S${end}`) : start;
  });
}
export function migrate117Factories(previous) {
 return Object.fromEntries(Object.entries(previous).map(([id, factory]) => [
  afterScopeTips(id), (p, H) => {
   const slide = factory(p, H);
   for (const shape of slide.shapes.items) {
    const before = String(shape.text), after = scopeReferences(before);
    if (before !== after) shape.text = after;
    if (shape.name) shape.name = scopeReferences(shape.name);
   }
   return slide;
  }
 ]));
}

export function scopeTipFactories(H) {
 const { C, text, rect, line, CODE } = H;
 const frame = (p, id, title, step) => H.frame(p, id, title,
  `ACT 2 · AGENTS.md 활용 ${step}/3`, '프로젝트 적용 예시', '', 'TEACHING_MODEL');
 return {
  S56: p => {
   const s = frame(p, 'S56', 'AGENTS.md는 어디에 둘까?', 1);
   text(s, '공통 규칙은 루트에, 모듈 전용 규칙은 해당 폴더에', 64, 171, 1152, 42, 31, C.teal, true);
   rect(s, 64, 238, 1152, 66, '#E8EDF3');
   text(s, '~/.codex/AGENTS.md', 86, 253, 520, 34, 28, C.ink, true, CODE);
   text(s, '개인 기본값 · 언어 / Git 규칙', 686, 253, 504, 34, 25, C.sub);
   rect(s, 64, 334, 1152, 66, C.white, C.line, 1.5);
   text(s, 'inspection/AGENTS.md', 86, 350, 540, 34, 28, C.ink, true, CODE);
   text(s, '프로젝트 공통 · 공개 API 보존', 686, 350, 504, 34, 25, C.ink);
   // Native folder-tree connectors; same line width throughout.
   rect(s, 102, 400, 2, 146, C.line);
   line(s, 102, 456, 60, C.teal, 2);
   line(s, 102, 546, 60, C.line, 2);
   rect(s, 162, 422, 1054, 68, C.pale, C.teal, 1.5);
   text(s, 'src/vision/AGENTS.md', 182, 438, 498, 34, 27, C.teal, true, CODE);
   text(s, 'crop.cpp 작업 · ROI 명세', 686, 438, 504, 34, 26, C.teal, true);
   rect(s, 162, 512, 1054, 68, '#E8EDF3', C.line, 1);
   text(s, 'src/device/AGENTS.md', 182, 528, 498, 34, 27, C.sub, false, CODE);
   text(s, '다른 모듈 · 이번 코드의 범위 밖', 686, 528, 504, 34, 25, C.sub);
   return s;
  },
  S57: p => {
   const s = frame(p, 'S57', '공통 지침에 모듈 지침을 더한다', 2);
   text(s, '이번 작업: src/vision/crop.cpp 수정', 64, 171, 1152, 42, 31, C.teal, true);
   const blocks = [
    [64, 318, '루트의 공통 지침', '공개 API 유지\n기본 검증: ctest', C.white],
    [458, 318, 'vision의 전용 지침', 'ROI 명세 준수\n검증: ctest -L vision', C.pale],
    [880, 336, '함께 적용할 지침', '공개 API 유지\nROI 명세 준수\nctest -L vision', C.white]
   ];
   for (const [x, w, title, body, fill] of blocks) {
    rect(s, x, 252, w, 228, fill, C.line, 1.5);
    text(s, title, x + 20, 272, w - 40, 36, 27, C.teal, true);
    text(s, body, x + 20, 326, w - 40, 124, 25, C.ink);
   }
   text(s, '+', 398, 328, 44, 50, 42, C.teal, true, H.FONT, 'center');
   H.arrow(s, 804, 348, 48, 24, C.teal);
   text(s, '충돌하는 기본값은 더 가까운 지침을 우선', 64, 514, 1152, 40, 30, C.ink, true);
   text(s, '공통 지침 전체가 사라지는 것은 아닙니다', 64, 559, 1152, 32, 26, C.sub);
   return s;
  },
  S58: p => {
   const s = frame(p, 'S58', '적용할 지침을 실제로 읽었을까?', 3);
   text(s, '적용 범위와 시작 시 자동 수집 범위는 다릅니다', 64, 171, 1152, 42, 31, C.teal, true);
   for (const [x, title, cwd, chain, note] of [
    [64, '루트에서 시작', 'inspection/', '개인 기본값  →  루트', 'vision 지침은 별도로 찾아 읽기'],
    [664, '작업 폴더에서 시작', 'inspection/src/vision/', '개인 기본값  →  루트  →  vision', '시작 경로의 vision 지침까지 수집']
   ]) {
    text(s, title, x, 242, 552, 36, 28, C.ink, true);
    text(s, cwd, x, 287, 552, 32, 25, C.sub, false, CODE);
    rect(s, x, 334, 552, 60, C.pale);
    text(s, chain, x + 16, 347, 520, 34, 26, C.teal, true);
    text(s, note, x, 407, 552, 32, 25, C.ink);
   }
   text(s, '변경 전에, 작업 폴더의 지침까지 확인하도록 요청', 64, 456, 1152, 34, 27, C.ink, true);
   rect(s, 64, 501, 1152, 80, C.white, C.line, 1.5);
   text(s, '수정 전에 적용할 AGENTS.md의 경로와 핵심 규칙을 확인해줘.\n공통 규칙과 모듈별 규칙을 구분해줘.', 84, 511, 1112, 60, 26, C.ink);
   return s;
  }
 };
}

/** Keep the original eight entries and add one grouped lookup entry. */
export function scopeTipIndexFactory(config, H, map116Id) {
 return p => {
  const { C, text, line, rect } = H;
  const index = config.indexes[0];
  const s = H.frame(p, 'S117', index.title, '마지막 정리 · 찾아보기 1/3', '', '', 'TEACHING_MODEL');
  text(s, '필요한 상황이 생기면, 아래 Slide로 돌아오세요', 64, 174, 1152, 43, 30, C.teal, true);
  const entries = index.tipSlideIds.map(id => {
   const entry = config.tips.find(t => t.slideId === id);
   return { id: map116Id(id), title: entry.title };
  });
  entries.splice(2, 0, { id: 'S56–58', title: 'AGENTS.md의 위치와 적용 범위' });
  entries.forEach((entry, i) => {
   const col = i < 5 ? 0 : 1, row = col === 0 ? i : i - 5;
   const x = 64 + col * 600, y = 240 + row * 67;
   line(s, x, y, 552, C.line, 1);
   rect(s, x, y + 11, 120, 44, C.pale);
   text(s, entry.id, x, y + 11, 120, 44, entry.id.includes('–') ? 23 : 28, C.teal, true, H.FONT, 'center');
   text(s, entry.title, x + 136, y + 11, 416, 44, 24, C.ink, true);
  });
  return s;
 };
}
