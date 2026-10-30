/** DEC-0114: choose verification evidence, then write goal-specific requests. */
export const CURRENT_SLIDE_COUNT = 120;
export const afterVerificationDesign = id => {
 const n = Number(id.slice(1));
 return n === 28 ? null : `S${String(n > 28 ? n - 1 : n).padStart(2, '0')}`;
};
export const beforeVerificationDesign = id => {
 const n = Number(id.slice(1));
 return `S${String(n >= 28 ? n + 1 : n).padStart(2, '0')}`;
};
export function renumber121Text(value) {
 const shift = n => Number(n) > 121 ? String(n) : (afterVerificationDesign(`S${n}`) ?? 'S27').slice(1);
 return String(value).replace(/(?<![A-Za-z0-9_])S(\d{2,3})(?:([–~])(\d{2,3}))?(?!\d)/g,
  (whole, start, separator, end) => `S${shift(start)}${end ? separator + shift(end) : ''}`);
}
export function applyCurrent120(slide) {
 for (const shape of slide.shapes.items) {
  const before = String(shape.text), after = renumber121Text(before);
  if (before !== after) shape.text = after;
  if (shape.name) shape.name = renumber121Text(shape.name);
 }
}

export function verificationDesignFactories(H) {
 const {C,text,rect,line} = H;
 const frame = (p,id,title,scope) => {
  const s = H.frame(p,id,title,'ACT 1 · 완료 조건을 요청에 담기');
  for (const shape of [...s.shapes.items]) {
   if ([621,650].includes(shape.position.top)) shape.delete();
   else if (shape.position.top === 612) shape.position = {...shape.position,top:604};
  }
  text(s,scope,64,608,1152,24,22,C.sub);
  text(s,'M 연계 · M5 / M6',64,654,1152,18,16,C.sub,false,H.FONT,'right');
  return s;
 };
 return {
  S26(p) {
   const s = frame(p,'S26','원하는 결과에 맞춰 확인 방법을 고른다',
    'TRIAL-002는 Python 검증 기록 · 성능 측정은 수행하지 않음');
   text(s,'판단하고 싶은 것',80,196,640,40,29,C.sub,true);
   text(s,'요청할 확인',752,196,448,40,29,C.sub,true);
   const rows = [
    ['crop이 명세대로 동작하는가?','관련 동작 테스트'],
    ['기존 테스트가 다루던 동작도 유지되는가?','프로젝트 전체 테스트'],
    ['CLI 샘플 경로가 동작하는가?','CLI 샘플 실행'],
    ['요청한 범위만 수정했는가?','최종 diff 검토'],
    ['실행시간이 줄었는가?','같은 조건의 전후 측정']
   ];
   rows.forEach(([question,check],i) => {
    const y = 249 + i * 61;
    line(s,80,y,1120);
    text(s,question,80,y+8,640,47,30,C.ink);
    text(s,check,752,y+8,448,47,30,i===4?C.warn:C.teal,true);
   });
   return s;
  },
  S27(p) {
   const s = frame(p,'S27','목표가 달라지면 검증 요청도 달라진다',
    '교육용 요청 비교 · 실제 TRIAL-002 원문이나 새 실행 결과가 아님');
   text(s,'같은 crop · 검증 부분의 작성 예시',64,185,1152,36,25,C.sub);
   const columns = [
    {x:64,title:'목표 1 · 경계 오류 수정',accent:C.teal,lines:[
     '기존 crop 명세를 기준으로',
     '관련·전체 테스트를 실행해줘.',
     'CLI 샘플과 최종 diff도 확인하고,',
     '검사·결과·미확인을 보고해줘.'
    ]},
    {x:660,title:'목표 2 · 실행시간 단축',accent:C.teal,lines:[
     '기존 동작은 테스트로 확인해줘.',
     '같은 입력·환경에서',
     '변경 전후 시간을 측정해줘.',
     '측정 조건·결과·미확인을 보고해줘.'
    ]}
   ];
   for (const column of columns) {
    text(s,column.title,column.x,239,556,42,32,C.ink,true);
    rect(s,column.x,296,556,219,C.white,C.line,1.5);
    text(s,'검증 요청',column.x+22,308,512,28,21,C.sub,true);
    line(s,column.x+22,345,512);
    column.lines.forEach((value,i)=>text(s,value,column.x+22,357+i*35,512,34,27,
     (column.x===64 ? i===1 : i===1||i===2) ? column.accent : C.ink,
     column.x===64 ? i===1 : i===1||i===2));
   }
   text(s,'동작 확인과 성능 확인은 필요한 근거가 다르다',64,549,1152,44,32,C.teal,true,H.FONT,'center');
   return s;
  }
 };
}
