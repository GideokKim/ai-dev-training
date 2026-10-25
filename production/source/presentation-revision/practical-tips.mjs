/** DEC-0087: common application badges and per-ACT reference indexes. */
export function to105Id(id, config) {
 const n=Number(id.slice(1));
 return `S${String(n+config.insertBeforeSourceNumbers.filter(x=>x<=n).length).padStart(2,'0')}`;
}

export function renumber99Text(value, config) {
 return String(value).replace(/(?<![A-Za-z0-9_/])S(\d{2})(?![\d_.])/g,
  (id,n)=>Number(n)<=99?to105Id(id,config):id);
}

export function migrate99Factories(previous, config) {
 return Object.fromEntries(Object.entries(previous).map(([id,factory])=>[
  to105Id(id,config),(p,H)=>{
   const slide=factory(p,H);
   for(const shape of slide.shapes.items){
    const original=String(shape.text);
    const references=[...new Set(original.match(/(?<![A-Za-z0-9_/])S\d{2}(?![\d_.])/g)??[])];
    for(const old of references.sort().reverse())shape.text.replace(old,to105Id(old,config));
    if(references.length)shape.name=renumber99Text(shape.name??'',config);
   }
   return slide;
  }
 ]));
}

export function addPracticalTipBadge(slide, category, H) {
 const {text,rect,C}=H;
 rect(slide,780,44,320,34,'#E8EDF3',C.line,1);
 const badge=text(slide,`실무 적용 팁 · ${category}`,790,44,300,34,18,C.ink,true);
 badge.name='Practical application tip badge';
}

export function practicalTipIndexFactories(config, H) {
 const {C,text,line,rect}=H;
 return Object.fromEntries(config.indexes.map(index=>[index.slideId,p=>{
  const s=H.frame(p,index.slideId,index.title,`ACT ${index.act} · 필요한 팁 찾아보기`,
   '기존 팁의 제목·Slide ID를 모은 찾아보기 · DEC-0087',
   '배지는 활용 목적 표시 · 각 팁의 실제 관찰·교육용 예시·제품 확인 범위는 해당 장을 따른다.',
   'TEACHING_MODEL');
  addPracticalTipBadge(s,'찾아보기',H);
  text(s,'필요한 상황이 생기면, 아래 Slide로 돌아오세요',64,174,1152,43,30,C.teal,true);
  const entries=index.tipSlideIds.map(id=>config.tips.find(t=>t.slideId===id));
  const columns=entries.length>4?2:1;
  const rows=Math.ceil(entries.length/columns);
  const width=columns===2?552:1152;
  const rowHeight=rows===4?76:90;
  const startY=entries.length===1?310:260;
  entries.forEach((entry,i)=>{
   const col=Math.floor(i/rows),row=i%rows,x=64+col*600,y=startY+row*rowHeight;
   line(s,x,y,width,C.line,1);
   rect(s,x,y+13,94,45,C.pale);
   text(s,entry.slideId,x,y+13,94,45,28,C.teal,true,H.FONT,'center');
   text(s,entry.title,x+116,y+13,width-116,45,columns===2?25:32,C.ink,true);
  });
  return s;
 }]));
}
