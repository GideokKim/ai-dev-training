/** DEC-0179: apply one macOS window language to displayed request inputs. */
export const MAC_PROMPT_CHANGED_IDS=[
 'S04','S06','S11','S12','S16','S17','S18','S21','S22','S27',
 'S28','S29','S30','S31','S32','S33','S34','S35','S36','S37',
 'S39','S42','S44','S46','S50','S51','S53','S58','S59','S61',
 'S63','S64','S65','S67','S71','S79','S92'
];
export const MAC_PROMPT_RETAINED_IDS=['S41','S66','S77','S96'];

const near=(a,b)=>Math.abs(a-b)<0.1;
const value=shape=>String(shape.text);

export function applyMacPromptStyle(slide,id,H) {
 if(!MAC_PROMPT_CHANGED_IDS.includes(id))return;
 const {C,text,rect,line,FONT}=H;
 const findText=(label)=>{
  const found=slide.shapes.items.filter(s=>value(s)===label);
  if(found.length!==1)throw new Error(`${id}: expected one text ${label}, got ${found.length}`);
  return found[0];
 };
 const setTextStyle=(shape,fontSize,color=C.ink,bold=true)=>{
  shape.text.style={typeface:FONT,fontSize,color,bold,alignment:'left',verticalAlignment:'middle',autoFit:'none',wrap:'none',insets:0};
 };
 const moveText=(label,position,fontSize,color=C.ink)=>{
  const shape=findText(label);shape.position={...shape.position,...position};
  if(fontSize)setTextStyle(shape,fontSize,color);
  return shape;
 };
 const atBox=([x,y,w,h])=>{
  const found=slide.shapes.items.filter(s=>!value(s).trim()&&
   near(s.position.left,x)&&near(s.position.top,y)&&near(s.position.width,w)&&near(s.position.height,h));
  if(found.length!==1)throw new Error(`${id}: expected one box ${x},${y},${w},${h}, got ${found.length}`);
  return found[0];
 };
 const window=({box,bounds,title,header=43,overlay=false,outline=false})=>{
  const [x,y,w,h]=bounds??box;
  let outer;
  if(box){outer=atBox(box);outer.position={left:x,top:y,width:w,height:h};}
  else{
   outer=rect(slide,x,y,w,h,outline?'none':C.white,C.line,1.5);
   if(!overlay)outer.sendToBack();
  }
  outer.name=`Mac prompt frame ${id} ${x} ${y}`;
  outer.borderRadius=12;
  if(!outline)outer.fill=C.white;
  outer.line={fill:C.line,width:1.5};
  const oldHeader=title?slide.shapes.items.find(s=>value(s)===title&&s.position.left>=x&&s.position.left<x+w&&s.position.top>=y&&s.position.top<y+h):null;
  for(const shape of [...slide.shapes.items]){
   const p=shape.position;
   if(p.height<0.1&&p.width>=w*.75&&p.left>=x&&p.left+p.width<=x+w+.1&&p.top>y+8&&p.top<y+59)shape.delete();
  }
  const chrome=rect(slide,x+1,y+1,w-2,header-1,'#EDF1F5');
  chrome.borderRadius=11;chrome.name=`Mac prompt chrome ${id} ${x} ${y}`;
  const compact=header<40,diameter=compact?9:12,gap=compact?15:20;
  const offset=compact?13:18,titleOffset=compact?68:91;
  ['#FF5F57','#FEBC2E','#28C840'].forEach((fill,index)=>{
   slide.shapes.add({name:`Mac prompt window control ${id} ${x} ${y} ${index+1}`,geometry:'ellipse',
    position:{left:x+offset+index*gap,top:y+(header-diameter)/2,width:diameter,height:diameter},
    fill,line:{fill:'none',width:0}});
  });
  const divider=line(slide,x+1,y+header+3,w-2,C.line,1);
  divider.name=`Mac prompt divider ${id} ${x} ${y}`;
  const size=compact?18:(w<600?18:20);
  if(oldHeader){
   oldHeader.position={left:x+titleOffset,top:y+4,width:w-titleOffset-18,height:header-7};
   setTextStyle(oldHeader,size,C.sub);
   oldHeader.bringToFront();
  }else{
   const label=text(slide,title??'작업 요청',x+titleOffset,y+4,w-titleOffset-18,header-7,size,C.sub,true,FONT);
   label.name=`Mac prompt title ${id} ${x} ${y}`;
  }
  return outer;
 };
 const standard=(box,title,header=43)=>window({box,title,header});

 switch(id){
  case 'S04':
   standard([64,214,1152,316],'Visual Studio Code',36);
   break;
  case 'S06':standard([64,235,680,321],'조사 요청 · 입력창 형태로 재구성');break;
  case 'S11':
  case 'S12':
   window({bounds:[828,291,388,245],title:id==='S11'?'ChatGPT':'Codex · graypipe',header:30,overlay:true,outline:true});
   break;
  case 'S16':standard([64,252,382,172],'요청 입력 · 교육용 재구성',36);break;
  case 'S17':standard([64,210,440,164],'요청 입력 · 교육용 재구성',36);break;
  case 'S18':standard([64,216,550,322],'요청 입력 · 교육용 재구성',36);break;
  case 'S21':standard([64,184,850,382],'TRIAL-002 · 실제 요청 발췌·번역');break;
  case 'S22':standard([64,174,546,368],'실제로 보낸 요청 · 발췌·번역',36);break;
  case 'S27':
   standard([64,296,556,219],'검증 요청');
   standard([660,296,556,219],'검증 요청');
   break;
  case 'S28':case 'S30':case 'S31':case 'S32':case 'S33':case 'S34':case 'S35':
   standard([64,270,776,284],'요청 예시');break;
  case 'S29':standard([64,270,776,284],'가상 팀 기준을 전달하는 요청 예시');break;
  case 'S36':standard([64,198,1152,252],'작업 요청 · 교육용 예시');break;
  case 'S37':standard([64,198,766,318],'앞 장과 같은 요청 · 교육용 예시');break;
  case 'S39':
   ['crop 경계를 수정해줘','통계 계산을 조사해줘','빌드 안내를 명확히 해줘'].forEach((goal,i)=>{
    const x=64+i*392;
    for(const shape of [...slide.shapes.items]){
     const p=shape.position;
     if(near(p.left,x)&&near(p.top,344)&&near(p.width,360)&&p.height<.1)shape.delete();
    }
    window({bounds:[x,274,360,248],title:'작업 요청',header:30});
    moveText(goal,{left:x+16,top:316,width:328,height:36},26);
   });
   break;
  case 'S42':standard([64,382,300,146],'작업별 요청 예',30);break;
  case 'S44':standard([64,228,464,310],'Prompt · 실제 요청 발췌·번역');break;
  case 'S46':standard([64,400,478,144],'작업 요청');break;
  case 'S50':standard([64,298,300,208],'01  작업 요청',36);break;
  case 'S51':
   standard([64,244,548,224],'Prompt · 요청 A');
   standard([668,244,548,224],'Prompt · 요청 B');
   break;
  case 'S53':
   window({bounds:[64,167,1152,77],title:'요청 B',header:30});
   moveText('“실행 의존성과 빌드 도구를 구분해 알려줘.”',{left:84,top:202,width:1112,height:40});
   break;
  case 'S58':
   window({box:[64,501,1152,80],bounds:[64,456,1152,125],title:'변경 전에, 작업 폴더의 지침까지 확인하도록 요청',header:36});
   break;
  case 'S59':
   window({box:[64,174,1152,64],bounds:[64,164,1152,84],title:'이번 요청',header:30});
   moveText('normalize 성능을 조사해줘.',{left:84,top:204,width:1112,height:36});
   break;
  case 'S61':
   window({bounds:[64,280,542,275],title:'작업 요청 A',header:30});
   window({bounds:[674,280,542,275],title:'작업 요청 B',header:30});
   break;
  case 'S63':
   standard([64,210,744,92],'이번 목표',30);
   moveText('normalize 성능을 조사해줘.',{left:84,top:252,width:704,height:38});
   break;
  case 'S64':
   [
    [232,82,'A  resize_nearest 성능 조사','이번 목표 · 허용 범위 · 보존 조건'],
    [338,82,'B  normalize 성능 조사','이번 목표 · 허용 범위 · 보존 조건'],
    [454,90,'C  README를 영어로 수정해줘.','문서 문구 수정']
   ].forEach(([y,h,goal,detail])=>{
    const sub=slide.shapes.items.find(s=>value(s)===detail&&near(s.position.top,y+(y===454?52:47)));
    if(!sub)throw new Error(`${id}: missing annotation ${y}`);
    window({box:[64,y,520,h],bounds:[64,y,520,94],title:'작업 요청',header:30});
    moveText(goal,{left:84,top:y+35,width:480,height:31},25,y===454?C.ink:C.teal);
    sub.position={left:84,top:y+68,width:480,height:21};setTextStyle(sub,20,C.sub,false);
   });
   break;
  case 'S65':
   window({bounds:[64,248,250,240],title:'Codex 입력',header:36});
   moveText('/skills',{left:84,top:329,width:210,height:58});
   break;
  case 'S67':standard([64,254,644,237],'Codex · 요청 예시');break;
  case 'S71':{
   window({box:[64,526,1152,76],bounds:[64,511,1152,91],title:'03  사용 요청',header:30});
   const body=moveText('perf_reviewer Subagent로 성능을 조사하고,\n결과를 기다린 뒤 근거를 확인해 종합해줘.',{left:86,top:551,width:1108,height:42},24);
   body.text.replace(String(body.text),String(body.text).replace('\n',' '));
   break;
  }
  case 'S79':
   window({bounds:[668,177,548,98],title:'내가 보낸 답',header:30,overlay:true,outline:true});
   standard([447,319,769,132],'검토 뒤, 내가 다시 보낸 요청',36);
   break;
  case 'S92':
   window({bounds:[64,163,1152,94],title:'활용 예시',header:30});
   moveText('“검토 결과는 영향이 큰 순서로 보여줘.”',{left:84,top:202,width:1112,height:47});
   moveText('이전에 말한 선호를 다음 코드 리뷰에서도 참고할 수 있다.',{left:84,top:267,width:1112,height:33});
   break;
  default:throw new Error(`Missing macOS prompt style adapter for ${id}`);
 }
}
