/** DEC-0134/0141: Harness relationships, reuse and shared project criteria. */
import {readFileSync} from 'node:fs';
export const HARNESS_VISUAL_IDS=['S75','S76','S77'];

export function harnessVisualFactories(H){
 const {C,text,rect,line,FONT}=H;
 const blue='#315C87',bluePale='#E1EBF6';
 const connect=(s,x,y,w,h=0,color=C.teal,dash='solid',reverse=false)=>s.shapes.add({
  geometry:'connector',kind:'straight',position:{left:x,top:y,width:w,height:h},
  line:{fill:color,width:2.5,style:dash},
  [reverse?'head':'tail']:{type:'triangle',width:'sm',length:'sm'}
 });
 const stem=(s,x,y,h,color=C.teal)=>s.shapes.add({
  geometry:'line',position:{left:x,top:y,width:0,height:h},line:{fill:color,width:2.5}
 });
 const footer=s=>text(s,'M 연계 · 신규 확장',996,674,220,23,16,C.sub,false,FONT,'right');
 const module=(s,x,y,w,h,{compact=false,title='Harness 기반'}={})=>{
  rect(s,x,y,w,h,C.white,C.teal,1.5);
  rect(s,x+w*.32,y-14,w*.36,14,C.pale,C.teal,1.5);
  text(s,title,x+16,y+12,w-32,38,compact?25:28,C.teal,true,FONT,compact?'center':'left');
  const labels=['조사·변경·검증','도구 연결','검토·보고'];
  const colors=[C.pale,bluePale,'#E1EFE7'];
  if(compact){
   colors.forEach((color,i)=>rect(s,x+18,y+61+i*19,w-36,10,color));
   text(s,'절차·도구·보고',x+8,y+h-29,w-16,23,18,C.sub,false,FONT,'center');
  }else{
   labels.forEach((label,i)=>{
    const yy=y+70+i*54;rect(s,x+16,yy,w-32,40,colors[i]);
    text(s,label,x+26,yy+3,w-52,34,26,C.ink,i===0);
   });
  }
 };
 return {
  S75(p){
   const s=H.frame(p,'S75','함께 작동하는 작업 환경, Harness','ACT 3 · 구성에 실행 조건과 검토 책임을 연결');
   rect(s,64,193,1152,407,C.white,C.line,1);
   [['목표','바꿀 것·지킬 조건',219],['Context','프로젝트 사실·명세',311],['Skill','재사용할 수행 방법',403]].forEach(([title,body,y])=>{
    rect(s,88,y,266,74,title==='목표'?C.pale:C.white,C.line,1);
    text(s,title,104,y+5,234,31,27,C.teal,true);
    text(s,body,104,y+40,234,27,23,C.ink);
    line(s,354,y+37,45,C.teal,2.5);
   });
   stem(s,399,256,184);connect(s,399,306,75);
   rect(s,474,236,260,140,C.white,C.teal,1.5);
   text(s,'주 Agent',494,247,220,40,32,C.teal,true,FONT,'center');
   text(s,'조사·판단·변경',494,298,220,32,25,C.ink,true,FONT,'center');
   text(s,'결과 확인·통합',494,339,220,27,23,C.teal,true,FONT,'center');

   connect(s,734,306,171);
   rect(s,905,250,287,155,C.pale,C.teal,1.5);
   text(s,'검증 도구',923,262,251,38,29,C.teal,true);
   text(s,'테스트·benchmark',923,314,251,32,25,C.ink,true);
   text(s,'사람이 근거·결과 검토',923,365,251,28,23,C.teal,true);

   rect(s,486,442,248,72,C.amber,C.warn,1.5,'dash');
   text(s,'Subagent · 선택',502,448,216,31,25,C.warn,true,FONT,'center');
   text(s,'독립 조사',502,484,216,24,22,C.ink,false,FONT,'center');
   connect(s,550,376,0,58,C.warn,'dash');
   connect(s,670,376,0,58,C.warn,'dash',true);
   text(s,'위임',496,395,48,26,20,C.warn);
   text(s,'결과 회수',682,395,112,26,20,C.warn);

   rect(s,88,540,1104,44,C.pale);
   text(s,'실행 환경',104,546,160,32,26,C.teal,true);
   text(s,'프로젝트 · 입력 · 권한 · 실행·측정 조건',284,548,888,28,24,C.ink);
   stem(s,818,356,184);connect(s,734,356,84,0,C.teal,'solid',true);
   connect(s,1050,405,0,135,C.teal,'solid',true);
   footer(s);return s;
  },
  S76(p){
   const s=H.frame(p,'S76','만든 Harness를 다음 프로젝트의 기반으로','ACT 3 · 구축한 작업 체계의 재사용');
   text(s,'한 번 정리한 작업 체계를 재사용',480,172,736,37,28,C.teal,true);
   module(s,64,282,344,246,{title:'검토해 둔 Harness'});
   line(s,408,404,72,C.teal,2.5);stem(s,480,220,184);
   line(s,480,220,632,C.teal,2.5);
   [['A',560,bluePale],['B',784,'#E1EFE7'],['C',1008,C.amber]].forEach(([label,x,tint])=>{
    connect(s,x+104,220,0,42);
    rect(s,x,248,100,22,tint,C.line,1);
    rect(s,x,270,208,260,C.white,C.line,1.5);
    text(s,'프로젝트 '+label,x+16,286,176,36,29,C.ink,true);
    module(s,x+20,355,168,142,{compact:true,title:'Harness'});
    text(s,'같은 기반',x+16,502,176,24,21,C.teal,true,FONT,'center');
   });
   text(s,'다음 프로젝트는, 만들어 둔 작업 체계에서 출발한다',64,558,1152,43,31,C.ink,true);
   footer(s);return s;
  },
  S77(p){
   // CurrentS76: a teaching comparison, not an observed before/after test.
   const s=H.frame(p,'S77','누가 작업하더라도 프로젝트 기준은 같게','ACT 3 · 같은 프로젝트, 여러 작업자의 공통 기준','프로젝트 적용 예시');
   const roleIcons=new Uint8Array(readFileSync(new URL('../../../assets/slide-illustrations/human-agent-icons.png',import.meta.url)));
   const icon=(role,x,y)=>s.images.add({
    blob:roleIcons,contentType:'image/png',fit:'contain',
    alt:role==='human'?'Individual developer pictogram':'That developer’s AI pictogram',
    position:{left:x,top:y,width:48,height:48},
    crop:{left:role==='human'?0:0.5,right:role==='human'?0.5:0,top:0,bottom:0}
   });
   const route=(name,x1,y1,x2,y2,color)=>s.shapes.add({
    geometry:'connector',kind:'straight',name,
    position:{left:Math.min(x1,x2),top:Math.min(y1,y2),width:Math.abs(x2-x1),height:Math.abs(y2-y1),verticalFlip:y2<y1},
    line:{fill:color,width:3},tail:{type:'triangle',width:'sm',length:'sm'}
   });
   const actor=(x,cy,label)=>{
    text(s,label,x,cy-18,28,36,26,C.ink,true);
    icon('human',x+32,cy-24);icon('agent',x+106,cy-24);
    connect(s,x+84,cy,18);
   };
   const result=(cx,cy,label,color)=>{
    s.shapes.add({geometry:'ellipse',name:'Separate work result '+label,position:{left:cx-19,top:cy-19,width:38,height:38},fill:C.white,line:{fill:color,width:2}});
    text(s,label,cx-18,cy-17,36,34,25,color,true,FONT,'center');
   };
   text(s,'같은 프로젝트 · 작업자 A/B/C와 각자의 AI',64,170,1152,34,25,C.sub);
   text(s,'각자 기준을 전달',64,218,552,40,30,C.ink,true);
   text(s,'공통 Harness로 기준을 공유',664,218,552,40,30,C.teal,true);
   line(s,64,266,552);line(s,664,266,552);
   stem(s,640,218,332,C.line);
   text(s,'전달하는 조건·절차·확인이 제각각이면',64,281,552,35,25,C.warn);

   const shared=rect(s,844,280,372,270,C.pale,C.teal,1.5);shared.borderRadius=10;
   text(s,'공통 Harness',862,289,336,38,31,C.teal,true);
   ['명세·제약','수행 절차','검증 기준'].forEach((label,i)=>text(s,label,854+i*116,331,126,31,22,C.teal,true,FONT,'center'));
   // Keep three independent work lanes: no merge and no identical-code claim.
   const rows=[382,454,526];
   const leftEnds=[[566,326],[596,430],[548,534]];
   rows.forEach((cy,i)=>{
    const label='ABC'[i];actor(64,cy,label);actor(664,cy,label);
    const [ex,ey]=leftEnds[i];
    route('Individual criteria route '+label,226,cy,ex-24,ey,i===1?blue:C.warn);
    result(ex,ey,label,i===1?blue:C.warn);
    rect(s,854,cy-19,274,38,C.white);
    route('Shared criteria work lane '+label,826,cy,1158,cy,C.teal);
    result(1188,cy,label,C.teal);
   });
   text(s,'기준이 달라질 수 있음',64,566,552,38,28,C.warn,true);
   text(s,'작업은 달라도, 판단 기준은 공유',664,566,552,38,28,C.teal,true);
   footer(s);return s;
  }
 };
}
