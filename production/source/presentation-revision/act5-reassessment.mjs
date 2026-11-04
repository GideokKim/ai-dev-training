/** Apply DEC-0083: reassess previously justified scaffolding as conditions change. */
import * as H from './helpers.mjs';
import {readFileSync} from 'node:fs';

export function loadAct5ReassessmentSlides() {
 const {C,text,line,rect}=H;
 const arrow=(s,x,y,w=32,h=0,color=C.teal)=>s.shapes.add({geometry:'connector',kind:'straight',
  position:{left:x,top:y,width:w,height:h},line:{fill:color,width:2.5},
  tail:{type:'triangle',width:'sm',length:'sm'}});
 const stroke=(s,x,y,w,h,color=C.teal)=>s.shapes.add({geometry:'connector',kind:'straight',
  position:{left:x,top:y,width:w,height:h},line:{fill:color,width:2.5}});
 const route=(s,name,x,y,w,h,commands)=>s.shapes.add({name,geometry:'custom',
  position:{left:x,top:y,width:w,height:h},fill:'none',line:{fill:C.teal,width:2.5},
  customPaths:[{width:w,height:h,commands}]});
 const icon=(s,name,x,y,size)=>{
  const bytes=readFileSync(new URL(`../../../assets/slide-illustrations/work-conditions/${name}.png`,import.meta.url));
  s.images.add({blob:new Uint8Array(bytes),contentType:'image/png',alt:name,fit:'contain',
   position:{left:x,top:y,width:size,height:size}});
 };
 const agent=(s,x,y,label)=>{
  s.shapes.add({geometry:'ellipse',position:{left:x-12,top:y-12,width:168,height:168},
   fill:C.pale,line:{fill:C.teal,width:2}});
  icon(s,'Bot',x+36,y+9,72);
  text(s,label,x-12,y+85,168,36,label==='Agent'?26:22,C.teal,true,H.FONT,'center');
 };
 const frame=(p,id,title,eyebrow,source,boundary)=>H.frame(p,id,title,eyebrow,source,boundary);
 return {
  S91(p){
   const s=frame(p,'S91','모델·플랫폼이 바뀌면 Harness도 다시 본다',
    'ACT 5 · 재평가 1/3 · 공개 사례 + 교육용 구조 도식',
    'SRC-0236 · Anthropic, 2026-10-22 · 일부 기업 Agent의 통합 사례를 각색',
    '우리 Demo의 관찰·효과 측정이 아님 · 새 모델이면 무조건 통합한다는 뜻은 아님');
   text(s,'그때 필요했던 보조 장치가, 지금도 필요할까?',64,185,1152,44,31,C.teal,true);
   text(s,'이전에 나눠 맡긴 역할',64,237,500,38,27,C.sub,true,H.FONT,'center');
   text(s,'통합을 검토할 후보',716,237,500,38,27,C.teal,true,H.FONT,'center');
   agent(s,242,287,'Agent');
   stroke(s,314,443,0,7,C.sub);stroke(s,140,450,348,0,C.sub);
   [['Router','Route'],['Planner','ListTree'],['Subagent','UsersRound']].forEach(([label,symbol],i)=>{
    const x=64+i*174;arrow(s,x+76,450,0,21,C.sub);
    rect(s,x,471,152,76,C.white,C.line,1);
    icon(s,symbol,x+60,476,32);
    text(s,label,x,511,152,32,22,C.ink,true,H.FONT,'center');
   });
   text(s,'모델·플랫폼\n변화',568,286,148,60,23,C.teal,true,H.FONT,'center');
   arrow(s,577,359,139);
   agent(s,894,287,'Agent Loop');
   stroke(s,966,443,0,7);stroke(s,832,450,268,0);
   arrow(s,832,450,0,24);arrow(s,1100,450,0,24);
   icon(s,'ListChecks',812,474,40);icon(s,'Wrench',1080,474,40);
   text(s,'Skill',790,519,84,32,23,C.teal,true,H.FONT,'center');
   text(s,'Tool',1050,519,100,32,23,C.teal,true,H.FONT,'center');
   text(s,'모델·플랫폼이 맡을 수 있는 일이 달라지면, 기존 보조 구조도 재평가한다',64,563,1152,37,27,C.ink,true);
   return s;
  },
  S92(p){
   const s=frame(p,'S92','무엇을 남기고, 무엇을 덜어낼까?',
    'ACT 5 · 재평가 2/3 · 이 교육의 판단 기준',
    'TEACHING MODEL · BEAT-057 / 061 / 069 · CLM-0022 · DEC-0083',
    '통합·제거는 후보 판단 · 안전·권한·명세·검증 요구를 없애는 처방이 아님');
   text(s,'없애기 전에, 각 요소가 맡은 이유부터 확인한다',64,185,1152,44,31,C.teal,true);
   [['유지',C.teal],['통합',C.teal],['제거 후보',C.warn]].forEach(([label,color],i)=>{
    const x=64+i*400;line(s,x,246,352,color,3);
    text(s,label,x,259,352,48,32,color,true);
   });
   icon(s,'ShieldCheck',192,332,96);
   text(s,'목표·명세\n권한·검증 기준',64,450,352,78,27,C.ink,true,H.FONT,'center');

   icon(s,'FileText',492,329,56);icon(s,'FileText',532,359,56);
   arrow(s,604,382,84);icon(s,'FileText',688,340,80);
   text(s,'겹치는 지침·역할\n한 출처 · 명확한 책임',464,450,352,78,26,C.ink,true,H.FONT,'center');

   s.shapes.add({geometry:'ellipse',position:{left:886,top:408,width:20,height:20},fill:C.warn,line:{fill:C.warn,width:1}});
   s.shapes.add({geometry:'ellipse',position:{left:1174,top:408,width:20,height:20},fill:C.warn,line:{fill:C.warn,width:1}});
   stroke(s,896,353,0,65,C.line);arrow(s,896,353,88,0,C.line);
   rect(s,984,318,112,74,C.white,C.line,1);
   icon(s,'Unplug',1024,324,32);
   text(s,'우회 절차',984,361,112,28,20,C.sub,true,H.FONT,'center');
   stroke(s,1096,353,88,0,C.line);stroke(s,1184,353,0,65,C.line);
   arrow(s,906,418,268,0,C.warn);
   text(s,'효용이 사라진\n우회 절차를 후보로',864,450,352,78,26,C.ink,true,H.FONT,'center');
   text(s,'독립 병렬 조사·권한 분리가 필요하다면, Subagent를 유지할 수 있다',64,565,1152,33,26,C.ink,true);
   return s;
  },
  S93(p){
   const s=frame(p,'S93','덜어낸 뒤에도 필요한 일을 하는가?',
    'ACT 5 · 재평가 3/3 · 평가 설계',
    'TEACHING MODEL · SRC-0236의 평가 권고를 각색 · CLM-0040 · DEC-0083',
    '새 비교 실험·측정 결과 없음 · 시간·비용만으로 채택하지 않음');
   text(s,'같은 대표 작업에서, 결과와 회귀부터 확인한다',64,185,1152,44,31,C.teal,true);
   icon(s,'FileText',132,320,64);
   text(s,'같은 대표 작업·입력',64,405,210,36,23,C.ink,true,H.FONT,'center');
   text(s,'같은 판단 기준',64,448,210,34,22,C.teal,true,H.FONT,'center');
   stroke(s,274,405,40,0);
   route(s,'Same input to existing structure',314,328,20,77,[
    {moveTo:{x:0,y:77}},{lineTo:{x:0,y:14}},
    {quadBezTo:{x1:0,y1:0,x:14,y:0}},{lineTo:{x:20,y:0}}]);
   route(s,'Same input to candidate structure',314,405,20,79,[
    {moveTo:{x:0,y:0}},{lineTo:{x:0,y:65}},
    {quadBezTo:{x1:0,y1:79,x:14,y:79}},{lineTo:{x:20,y:79}}]);
   arrow(s,334,328,26);arrow(s,334,484,26);
   rect(s,360,270,300,116,C.white,C.line,1.5);
   text(s,'기존 구성',376,280,268,36,26,C.ink,true);
   icon(s,'Bot',386,326,40);
   ['Route','ListTree','UsersRound'].forEach((symbol,i)=>{
    const x=450+i*58;rect(s,x,326,42,38,C.bg,C.line,1);icon(s,symbol,x+6,330,30);
   });
   rect(s,360,426,300,116,C.pale,C.line,1.5);
   text(s,'통합·제거 후보',376,436,268,36,26,C.teal,true);
   icon(s,'Bot',398,482,40);text(s,'Skill · Tool',468,482,170,36,23,C.ink,true);
   route(s,'Existing structure to shared evaluation',660,328,82,77,[
    {moveTo:{x:0,y:0}},{lineTo:{x:38,y:0}},
    {quadBezTo:{x1:52,y1:0,x:52,y:14}},{lineTo:{x:52,y:63}},
    {quadBezTo:{x1:52,y1:77,x:66,y:77}},{lineTo:{x:82,y:77}}]);
   route(s,'Candidate structure to shared evaluation',660,405,82,79,[
    {moveTo:{x:0,y:79}},{lineTo:{x:38,y:79}},
    {quadBezTo:{x1:52,y1:79,x:52,y:65}},{lineTo:{x:52,y:14}},
    {quadBezTo:{x1:52,y1:0,x:66,y:0}},{lineTo:{x:82,y:0}}]);
   arrow(s,742,405,44);

   rect(s,786,257,430,285,C.white,C.line,1.5);
   text(s,'같은 기준으로 비교',810,269,382,40,27,C.teal,true);
   rect(s,802,319,398,71,C.pale);
   text(s,'먼저, 동작·회귀',818,322,366,35,27,C.teal,true);
   text(s,'명세·기존 동작 유지?',818,359,366,28,22,C.ink);
   line(s,802,404,398,C.line,1);
   text(s,'시간 · 비용',818,407,180,35,24,C.teal,true);
   text(s,'기록으로 대조',1008,408,190,34,22,C.ink);
   line(s,802,470,398,C.line,1);
   text(s,'남은 위험',818,477,180,35,24,C.teal,true);
   text(s,'작업·권한 누락?',1008,478,190,34,22,C.ink);
   icon(s,'FileText',64,566,32);
   text(s,'확인한 범위만 채택',111,563,500,38,27,C.teal,true);
   icon(s,'Undo2',653,566,32);
   text(s,'나빠지면 되돌리고, 이유 기록',700,563,516,38,26,C.ink,true);
   return s;
  }
 };
}
