/** DEC-0134: native Harness relationships, portable modules and assembly. */
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
   const s=H.frame(p,'S77','공통 기반에 프로젝트 기준을 연결한다','ACT 3 · 재사용할 부분과 새로 연결할 부분','프로젝트 적용 예시');
   text(s,'재사용할 수행 방법',64,200,292,36,28,C.teal,true);
   text(s,'이 프로젝트의 정보·조건',478,200,292,36,26,blue,true);
   module(s,64,264,292,258);
   text(s,'+',382,342,70,74,55,C.teal,true,FONT,'center');

   rect(s,478,264,292,258,C.white,blue,1.5);
   rect(s,478,244,110,20,bluePale,blue,1.5);
   rect(s,478,264,292,58,bluePale);
   text(s,'프로젝트 Context',496,278,256,35,26,blue,true);
   ['목표·명세','실제 명령·도구','권한·실행 조건'].forEach((label,i)=>{
    line(s,496,339+i*54,256,C.line,1);
    text(s,label,496,346+i*54,256,34,26,C.ink,i===0);
   });
   connect(s,794,390,96);

   rect(s,914,248,302,274,C.white,C.teal,1.5);
   text(s,'프로젝트에 맞춘\n개발 시스템',930,261,270,70,29,C.ink,true,FONT,'center');
   rect(s,938,346,254,60,C.pale,C.teal,1.5);
   text(s,'Harness',954,357,222,37,29,C.teal,true,FONT,'center');
   rect(s,956,409,218,52,bluePale,blue,1.5);
   rect(s,1056,400,18,18,bluePale,blue,1);
   text(s,'프로젝트 기준',968,417,194,35,25,blue,true,FONT,'center');
   text(s,'실행 · 검증 · 검토',930,480,270,29,24,C.teal,true,FONT,'center');
   rect(s,1042,522,48,14,C.line);rect(s,1006,536,120,8,C.line);
   text(s,'기반은 재사용하고, 적용 조건은 프로젝트에 맞춘다',64,565,1152,41,31,C.ink,true);
   footer(s);return s;
  }
 };
}
