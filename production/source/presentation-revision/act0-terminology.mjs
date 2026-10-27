/** DEC-0106: use concrete project terms at the current120-ID boundary. */
export const ACT0_DEFINITION = '코드·명세·테스트가 있는 프로젝트 폴더';
export const ACT0_TERM_REPLACEMENTS = {
 S01: {
  'AI를 Repository로\n데려가기': 'AI가 개발 프로젝트를\n직접 살펴보게 하기',
  'Chatbot → Repository Agent': 'Chatbot → 개발 프로젝트를 조사하는 Agent'
 },
 S06: {'ACT 0 · Repository 조사 관찰': 'ACT 0 · 개발 프로젝트 조사 기록'},
 S10: {
  'Repository의 자료': '프로젝트 파일의 정보',
  'Repository 접근과 실행 권한은 별개': '프로젝트 파일 접근과 실행 권한은 별개'
 },
 S13: {
  'Repository 작업은 Codex에서 시작한다': '개발 프로젝트 조사는 Codex에서 시작한다',
  'Repository 폴더 열기': '프로젝트 폴더 열기',
  '이 교육의 Repository 조사는 Codex로 진행한다.': '이 교육의 개발 프로젝트 조사는 Codex로 진행한다.'
 },
 S14: {'Repository 접근과 Task 의도는 별개다': '프로젝트를 봐도, 원하는 작업은 따로 정한다'},
 S15: {
  'Repository를 보면 내가 원하는 것까지 알까?': '프로젝트를 보면 내가 원하는 것까지 알까?',
  '지금 이 저장소에 어떤 일을 맡기고 싶으신가요?': '지금 이 프로젝트에서 어떤 일을 맡기고 싶으신가요?'
 },
 S117: {'Repository 작업은 Codex에서 시작한다': '개발 프로젝트 조사는 Codex에서 시작한다'}
};

export function applyAct0Terminology(slide, id, H) {
 const replacements = ACT0_TERM_REPLACEMENTS[id];
 if (!replacements) return;
 const matched = new Set();
 for (const shape of slide.shapes.items) {
  const before = String(shape.text);
  const entry = Object.entries(replacements).find(([old, current]) => before === old || before === current);
  if (!entry) continue;
  const [old, after] = entry;
  shape.text = after;
  shape.name = after.slice(0, 60);
  matched.add(old);
 }
 if (matched.size !== Object.keys(replacements).length) {
  throw new Error(`Missing terminology source text in ${id}`);
 }
 if (id === 'S01') H.text(slide, ACT0_DEFINITION, 64, 514, 1152, 34, 25, H.C.sub);
}
