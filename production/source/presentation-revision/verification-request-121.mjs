/** DEC-0112: pace the former S26 as three request-design slides. */
export const CURRENT_SLIDE_COUNT = 121;
export const afterVerificationSplit = id => {
 const n = Number(id.slice(1));
 return `S${String(n > 26 ? n + 2 : n).padStart(2, '0')}`;
};
export const beforeVerificationSplit = id => {
 const n = Number(id.slice(1));
 if (n === 27 || n === 28) return null;
 return `S${String(n > 28 ? n - 2 : n).padStart(2, '0')}`;
};
export function renumber119Text(value) {
 const shift = n => Number(n) > 119 ? String(n) : afterVerificationSplit(`S${n}`).slice(1);
 return String(value).replace(/(?<![A-Za-z0-9_])S(\d{2,3})(?:([–~])(\d{2,3}))?(?!\d)/g,
  (whole, start, separator, end) => `S${shift(start)}${end ? separator + shift(end) : ''}`);
}
export function applyCurrent121(slide) {
 for (const shape of slide.shapes.items) {
  const before = String(shape.text), after = renumber119Text(before);
  if (before !== after) shape.text = after;
  if (shape.name) shape.name = renumber119Text(shape.name);
 }
}

export function verificationRequestFactories(H) {
 const {C,text,rect,line} = H;
 const frame = (p,id,title,scope) => {
  const s = H.frame(p,id,title,'ACT 1 · 완료 조건을 요청에 담기');
  // Match the approved audience footer and legacy-module footer positions.
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
   const s = frame(p,'S26','무엇을 확인해 달라고 요청할까?',
    'TRIAL-002는 Python 검증 기록 · 성능 측정은 수행하지 않음');
   text(s,'요청할 확인',80,196,390,40,29,C.sub,true);
   text(s,'그 확인으로 알 수 있는 범위',512,196,688,40,29,C.sub,true);
   const rows = [
    ['관련 동작 테스트','바뀐 동작의 해당 입력·조건'],
    ['프로젝트 전체 테스트','현재 테스트가 다루는 회귀 범위'],
    ['CLI 샘플 실행','그 샘플의 통합 실행 경로'],
    ['변경 내용 확인','수정 범위와 의도치 않은 변경'],
    ['성능 측정','측정한 입력·환경에서의 성능']
   ];
   rows.forEach(([check,scope],i) => {
    const y = 249 + i * 61;
    line(s,80,y,1120);
    text(s,check,80,y+8,390,47,32,i===4?C.warn:C.teal,true);
    text(s,scope,512,y+8,688,47,32,C.ink);
   });
   return s;
  },
  S27(p) {
   const s = frame(p,'S27','비어 있지 않으면 올바른 결과일까?',
    'C++ 교육용 반례 · 실제 Trial의 assertion이나 실행 결과가 아님');
   text(s,'입력 {1, 2, 3, 4}에서 crop [1, 3)',64,188,1152,44,31,C.sub,false,H.CODE);
   const vector = (x,label,values,wrong=false) => {
    text(s,label,x,268,520,42,32,wrong?C.red:C.teal,true);
    values.forEach((v,i) => {
     const extra = wrong && i === 2;
     rect(s,x+i*100,326,88,82,extra?C.redPale:C.white,extra?C.red:C.teal,2);
     text(s,String(v),x+i*100,326,88,82,51,extra?C.red:C.teal,true,H.CODE,'center');
    });
    text(s,`${values.length}개`,x+334,341,180,53,38,wrong?C.red:C.teal,true);
   };
   vector(80,'명세의 기대 결과',[2,3]);
   vector(688,'명세를 어긴 결과',[2,3,4],true);
   text(s,'두 결과 모두 비어 있지 않다',64,435,1152,50,36,C.ink,true,H.FONT,'center');
   rect(s,64,503,1152,77,C.ink);
   text(s,'EXPECT_FALSE(actual.empty());',92,517,1096,47,29,C.white,false,H.CODE,'center');
   return s;
  },
  S28(p) {
   const s = frame(p,'S28','기대 결과를 요청에 적는다',
    'C++ 교육용 요청·검증 코드 · 실제 TRIAL-002 요청이나 새 실행 결과가 아님');
   rect(s,64,197,1152,247,C.white,C.line,1.5);
   text(s,'작업 요청',88,210,1104,36,25,C.sub,true);
   line(s,88,253,1104);
   [
    '입력 {1, 2, 3, 4}에서 crop [1, 3)을 적용했을 때',
    '결과가 {2, 3}이고 길이가 2인지 테스트로 확인해줘.',
    '실행한 검사와 결과, 미확인 사항도 보고해줘.'
   ].forEach((value,i)=>text(s,value,88,275+i*48,1104,44,31,i===1?C.teal:C.ink,i===1));
   text(s,'해당 입력의 개수·값·순서를 비교',64,468,1152,36,27,C.sub,true);
   text(s,'std::vector<int> expected{2, 3};',64,512,1152,34,27,C.teal,false,H.CODE);
   text(s,'EXPECT_EQ(actual, expected);',64,553,1152,34,27,C.teal,true,H.CODE);
   return s;
  }
 };
}
