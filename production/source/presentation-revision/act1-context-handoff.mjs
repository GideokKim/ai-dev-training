/** DEC-0113/0115: carry one teaching request into the Prompt-to-Context handoff. */
export const HANDOFF_REQUEST = [
 'crop 경계 오류를 고쳐줘.',
 '기존 공개 API는 유지해.',
 '프로젝트에 정해진 테스트 명령으로 확인해.'
];

export function contextHandoffFactories(H) {
 const {C,text,rect,line} = H;
 const frame = (p,id,title,scope) => {
  const s = H.frame(p,id,title,'ACT 1 · 다음 작업에도 필요한 정보');
  for (const shape of [...s.shapes.items]) {
   if ([621,650].includes(shape.position.top)) shape.delete();
   else if (shape.position.top === 612) shape.position = {...shape.position,top:604};
  }
  text(s,scope,64,608,1152,24,19,C.sub);
  text(s,'M 연계 · M2',64,654,1152,18,16,C.sub,false,H.FONT,'right');
  return s;
 };
 return {
  S37(p) {
   const s = frame(p,'S37','다음 작업에도 이 내용을 다시 적어야 할까?',
    '교육용 요청 예시 · 실제 TRIAL-002 입력이나 수행 결과가 아님');
   rect(s,64,198,1152,252,C.white,C.line,1.5);
   text(s,'작업 요청 · 교육용 예시',88,210,1104,36,25,C.sub,true);
   line(s,88,253,1104);
   HANDOFF_REQUEST.forEach((value,i)=>text(s,value,88,274+i*52,1104,46,34,C.ink));
   text(s,'작업이 바뀌어도 다시 말하게 될 문장은?',64,507,1152,65,38,C.teal,true);
   return s;
  },
  S38(p) {
   const s = frame(p,'S38','작업마다 바뀌는 목표, 계속 쓰는 기준',
    '교육용 분리 예시 · 계속 적용할지는 프로젝트의 합의와 조건을 확인한다');
   rect(s,64,198,766,318,C.white,C.line,1.5);
   text(s,'앞 장과 같은 요청 · 교육용 예시',88,210,718,36,25,C.sub,true);
   line(s,88,253,718);
   text(s,HANDOFF_REQUEST[0],88,278,710,46,31,C.ink);
   rect(s,82,343,722,113,C.pale);
   text(s,HANDOFF_REQUEST[1],88,348,710,46,31,C.teal,true);
   text(s,HANDOFF_REQUEST[2],88,402,710,46,31,C.teal,true);
   line(s,830,301,58,C.sub,1.5);
   text(s,'이번 작업의 목표',906,270,310,44,28,C.ink,true);
   text(s,'이번 작업에만 적용',906,312,310,38,24,C.sub);
   s.shapes.add({geometry:'custom',name:'Shared criteria bracket',
    position:{left:830,top:367,width:58,height:60},fill:'none',
    line:{fill:C.teal,width:1.5},customPaths:[{width:58,height:60,commands:[
     {moveTo:{x:0,y:0}},{lineTo:{x:24,y:0}},{lineTo:{x:24,y:60}},
     {lineTo:{x:0,y:60}},{moveTo:{x:24,y:30}},{lineTo:{x:58,y:30}}
    ]}]});
   text(s,'계속 쓰는 기준',906,357,310,44,28,C.teal,true);
   text(s,'프로젝트에서 합의해\n여러 작업에 적용',906,402,310,74,24,C.sub);
   text(s,'이 기준을 프로젝트에서 관리하고, 작업할 때 찾아 참고하게 할 수 없을까?',64,540,1152,52,34,C.teal,true);
   return s;
  }
 };
}
