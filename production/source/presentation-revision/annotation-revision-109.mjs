/** DEC-0188: keep the retained 111-ID source and deliver 109 current slides. */
export const CURRENT_SLIDE_COUNT=109;
export const REMOVED_SOURCE_IDS=['S27','S58'];
const id=n=>'S'+String(n).padStart(2,'0');

export function afterAnnotationRemoval(value) {
 const n=Number(value.slice(1));
 return REMOVED_SOURCE_IDS.includes(value)?null:id(n-Number(n>27)-Number(n>58));
}

export function beforeAnnotationRemoval(value) {
 const n=Number(value.slice(1));
 return id(n+Number(n>=27)+Number(n>=57));
}

function renumber(value) {
 const shift=n=>{
  const target=afterAnnotationRemoval(id(Number(n)));
  if(!target)throw new Error('Retired slide reference in current screen: S'+n);
  return target.slice(1);
 };
 return String(value).replace(
  /(?<![A-Za-z0-9_./-])S(\d{2,3})(?:([–~])(S?)(\d{2,3}))?(?![A-Za-z0-9_./-])/g,
  (_,n,separator,prefix,end)=>'S'+shift(n)+(end?separator+prefix+shift(end):'')
 );
}

export function applyAnnotationRevision(slide,sourceId,H) {
 const replace=(before,after)=>{
  const found=slide.shapes.items.filter(s=>String(s.text)===before);
  if(found.length!==1)throw new Error(`${sourceId}: expected one annotation target: ${before}`);
  if(after===null)found[0].delete();
  else{found[0].text.replace(before,after);if(found[0].name===before)found[0].name=after;}
 };
 const shapeAt=(x,y,w,h)=>{
  const found=slide.shapes.items.filter(s=>!String(s.text).trim()&&
   Math.abs(s.position.left-x)<.1&&Math.abs(s.position.top-y)<.1&&
   Math.abs(s.position.width-w)<.1&&Math.abs(s.position.height-h)<.1);
  if(found.length!==1)throw new Error(`${sourceId}: expected one shape at ${x},${y}`);
  return found[0];
 };
 if(sourceId==='S12'){
  shapeAt(351,416,65,0).delete();
  slide.shapes.add({name:'Context collection to Agent',geometry:'connector',kind:'straight',
   position:{left:351,top:416,width:65,height:0},line:{fill:H.C.teal,width:2.5},
   tail:{type:'triangle',width:'sm',length:'sm'}});
  replace('Codex CLI 조사 기록',null);
  replace('화면 재구성 · 근거는 CLI 조사 기록',null);
 }
 if(sourceId==='S16')replace('개념도 · 실측 아님',null);
 if(sourceId==='S18'){
  shapeAt(623,405,34,21).position={left:625,top:417,width:36,height:22};
  replace('요청 예시 · 의도한 경로',null);
 }
 if(sourceId==='S56')replace('ACT 2 · AGENTS.md 활용 1/3','ACT 2 · AGENTS.md 활용 1/2');
 if(sourceId==='S57')replace('ACT 2 · AGENTS.md 활용 2/3','ACT 2 · AGENTS.md 활용 2/2');
 if(sourceId==='S108')replace('S56–58','S56–57');
 for(const shape of slide.shapes.items){
  const before=String(shape.text),after=renumber(before);
  if(before!==after)shape.text.replace(before,after);
  // Source object names retain their edition; only visible references migrate.
 }
}

export function requestContextWorkflowFactory(H) {
 const {C,FONT,CODE,text,rect,line}=H;
 return p=>{
  const s=H.frame(p,'S63','목표·기준·방법을 한 작업에 적용한다','ACT 3 · 이번 요청과 계속 쓸 기준·방법');
  for(const shape of [...s.shapes.items]){
   if([621,650].includes(shape.position.top))shape.delete();
   else if(shape.position.top===612)shape.position={...shape.position,top:604};
  }
  const xs=[64,460,856],width=360;
  ['REQUEST','CONTEXT','WORKFLOW'].forEach((label,i)=>{
   text(s,label,xs[i],178,width,38,29,i===2?C.green:C.teal,true);
  });
  const prompt=rect(s,64,237,width,202,C.white,C.line,1.5);prompt.borderRadius=12;
  const chrome=rect(s,65,238,width-2,39,'#EDF1F5');chrome.borderRadius=11;
  ['#FF5F57','#FEBC2E','#28C840'].forEach((fill,i)=>s.shapes.add({geometry:'ellipse',
   position:{left:81+i*18,top:252,width:11,height:11},fill,line:{fill:'none',width:0}}));
  text(s,'이번 목표',140,242,268,30,21,C.sub,true);line(s,65,280,width-2);
  text(s,'normalize 성능을\n조사해줘.',84,309,320,89,30,C.ink,true);
  rect(s,460,237,width,202,C.white,C.line,1.5);
  text(s,'지킬 기준',480,249,320,36,27,C.ink,true);
  text(s,'AGENTS.md',480,296,320,34,25,C.teal,true,CODE);
  line(s,480,338,320);
  text(s,'기존 이미지 동작\n공개 명세 보존',480,352,320,70,27,C.ink,true);
  rect(s,856,237,width,202,'#EDF5F0',C.line,1.5);
  text(s,'재사용할 수행 방법',876,249,320,36,27,C.green,true);
  ['측정','조사','검증·비교'].forEach((label,i)=>{
   text(s,String(i+1),878,299+i*39,34,32,23,C.green,true);
   text(s,label,921,299+i*39,275,32,27,C.ink,true);
  });
  xs.forEach(x=>s.shapes.add({geometry:'downArrow',name:'Input to the same task',
   position:{left:x+168,top:452,width:24,height:28},fill:C.teal,line:{fill:'none',width:0}}));
  rect(s,64,490,1152,66,C.pale);
  text(s,'한 작업에 함께 적용',84,501,346,43,29,C.teal,true);
  text(s,'normalize 구현 조사 · 변경 여부 판단',462,501,734,43,30,C.ink,true);
  text(s,'같은 수행 방법이 다음 작업에도 필요하다면?',64,565,1152,35,29,C.teal,true);
  text(s,'M 연계 · M2 · M8',64,654,1152,18,16,C.sub,false,FONT,'right');
  return s;
 };
}
