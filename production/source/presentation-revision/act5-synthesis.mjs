/** DEC-0099: explain the course synthesis without Demo history assumptions. */
import * as H from './helpers.mjs';
import {readFileSync} from 'node:fs';

const {C,text,rect,line}=H;
const arrow=(s,x,y,w)=>s.shapes.add({geometry:'connector',kind:'straight',
 position:{left:x,top:y,width:w,height:0},line:{fill:C.teal,width:2.5},
 tail:{type:'triangle',width:'sm',length:'sm'}});
const frame=(p,id,title,eyebrow)=>H.frame(p,id,title,eyebrow,
 '교육에서 배운 관점의 종합 · TEACHING MODEL',
 '설명용 도식 · 실제 실행·측정 결과나 모든 작업의 필수 구성표가 아님');


function workIcon(s,name,x,y,size,description) {
 const bytes=readFileSync(new URL(`../../../assets/slide-illustrations/work-conditions/${name}.png`,import.meta.url));
 s.images.add({blob:new Uint8Array(bytes),contentType:'image/png',alt:description,fit:'contain',
  position:{left:x,top:y,width:size,height:size}});
}

function workSystem(s) {
 const boundary=rect(s,64,185,810,395,'#EDF4F5','#B7CDD1',1.5);
 boundary.borderRadius=12;
 text(s,'구축한 작업 시스템',88,199,732,40,28,C.teal,true);
 const inputs=[
  ['프로젝트 정보','코드 · 명세 · 프로젝트 지식','FolderOpen','#285A96'],
  ['재사용할 수행 방법','조사 · 변경 · 검증 순서','ListChecks','#4B6529'],
  ['검증 도구','테스트 · 측정 · 결과 비교','Wrench','#875415']
 ];
 inputs.forEach(([name,detail,symbol,color],i)=>{
  const y=259+i*99;
  workIcon(s,symbol,87,y+7,42,name);
  text(s,name,143,y,296,38,25,color,true);
  text(s,detail,143,y+44,292,32,23,C.ink);
  line(s,451,y+40,37,C.teal,2.5);
 });
 s.shapes.add({geometry:'line',position:{left:488,top:299,width:0,height:198},line:{fill:C.teal,width:2.5}});
 arrow(s,488,398,78);
 s.shapes.add({name:'Agent work',geometry:'ellipse',position:{left:566,top:294,width:208,height:208},
  fill:C.pale,line:{fill:C.teal,width:2}});
 workIcon(s,'Bot',618,314,104,'Agent');
 text(s,'Agent',592,436,156,42,34,C.teal,true,H.FONT,'center');
 text(s,'조사·구현·검증·재수정',532,532,300,36,24,C.teal,true,H.FONT,'center');
}

export function act5SynthesisFactories(){return {
 S103(p){
  const s=frame(p,'S103','AI에게 맡기는 범위가 넓어졌다','ACT 5 · 전체 여정의 의미');
  text(s,'질문에 답하는 것에서, 기준에 따라 작업을 이어가는 방식으로',64,190,1152,46,30,C.teal,true);
  const items=[['Chatbot','질문과 답변'],['Prompt','목표와 제약'],['Context','필요한 정보와 명세'],['Harness','수행 방법과 환경'],['Loop','검토·수정·재검토']];
  items.forEach(([name,scope],i)=>{
   const x=64+i*236;line(s,x,298,208,C.teal,3);
   text(s,name,x,323,208,51,30,C.teal,true);
   const words=scope==='필요한 정보와 명세'?'필요한 정보와\n명세':scope==='수행 방법과 환경'?'수행 방법과\n환경':scope;
   text(s,words,x,407,208,85,27,C.ink,true);
   if(i<4)arrow(s,x+214,349,16);
  });
  text(s,'이렇게 일을 맡기려면, AI에게 무엇을 연결해야 할까?',64,551,1152,46,31,C.ink,true);
  return s;
 },
 S104(p){
  const s=frame(p,'S104','작업은 요청부터 검토·수정까지 이어진다','ACT 5 · 목표와 피드백이 연결되는 작업');
  text(s,'목표와 완료 기준을 유지하며, 남은 문제를 다음 수정으로 연결한다',64,190,1152,46,29,C.teal,true);
  const nodes=[['요청','목표·완료 기준'],['조사','필요한 자료 찾기'],['변경','정한 범위 수정'],['확인','테스트와 검토'],['판단','완료·수정·중단']];
  nodes.forEach(([a,b],i)=>{
   const x=64+i*236;line(s,x,292,208,C.teal,3);
   text(s,a,x,314,208,49,34,C.teal,true);
   text(s,b,x,388,208,48,25,C.ink,true);
   if(i<4)arrow(s,x+214,344,16);
  });
  line(s,640,517,472,C.teal,2.5);
  s.shapes.add({geometry:'line',position:{left:1112,top:453,width:0,height:64},line:{fill:C.teal,width:2.5}});
  s.shapes.add({geometry:'connector',kind:'straight',position:{left:640,top:453,width:0,height:64},line:{fill:C.teal,width:2.5},head:{type:'triangle',width:'sm',length:'sm'}});
  text(s,'남은 지적과 근거를 다음 수정에 전달',666,467,530,36,25,C.teal,true);
  text(s,'목표를 충족한 완료와, 검증하지 못한 중단을 구분한다',64,556,1152,43,29,C.ink,true);
  return s;
 },
 S105(p){
  const s=frame(p,'S105','작업 흐름에는 정보·절차·도구가 연결된다','ACT 5 · AI가 일하는 조건');
  workSystem(s);
  arrow(s,774,398,166);
  rect(s,940,240,276,309,C.white,C.line,1.5);
  workIcon(s,'FileText',960,259,35,'작업 결과 기록');
  text(s,'결과로 남길 것',1006,257,194,43,27,'#315C87',true);
  line(s,960,315,236,C.line,1);
  ['변경 내용','확인 근거','미해결 항목'].forEach((label,i)=>{
   text(s,label,967,335+i*66,229,44,28,C.ink,true);
  });
  return s;
 },
 S106(p){
  const s=frame(p,'S106','시스템이 수행하고, 사람이 최종 결정한다','ACT 5 · 시스템의 수행과 사람의 최종 결정');
  workSystem(s);
  text(s,'결과와 근거',806,350,170,38,24,'#315C87',true,H.FONT,'center');
  arrow(s,774,398,212);
  text(s,'최종 결정',940,244,276,44,30,C.teal,true,H.FONT,'center');
  s.shapes.add({name:'Human acceptance',geometry:'ellipse',position:{left:986,top:306,width:184,height:184},
   fill:C.white,line:{fill:C.teal,width:2}});
  workIcon(s,'UserRound',1028,322,100,'최종 결정을 하는 사람');
  text(s,'사람',1010,436,136,43,29,C.ink,true,H.FONT,'center');
  text(s,'수용 · 보완 요청 · 중단',940,528,276,38,22,C.ink,true,H.FONT,'center');
  return s;
 },
 S107(p){
  const s=frame(p,'S107','AI가 일할 조건과 확인 경로를 설계한다','ACT 5 · AI-Native Development / 이 교육의 관점');
  text(s,'맡길 범위',64,201,230,42,28,C.teal,true,H.FONT,'center');
  workIcon(s,'Target',133,270,92,'목표와 완료 기준');
  text(s,'목표 · 제약\n완료 기준',64,381,230,72,26,C.ink,true,H.FONT,'center');
  arrow(s,294,358,60);

  const system=rect(s,354,185,536,305,'#EDF4F5','#B7CDD1',1.5);
  system.borderRadius=12;
  text(s,'구축한 작업 시스템',376,198,492,43,28,C.teal,true);
  [['프로젝트 정보','FolderOpen'],['수행 방법','ListChecks'],['도구·검토 역할','Wrench']].forEach(([label,icon],i)=>{
   const x=372+i*164;
   workIcon(s,icon,x+62,258,32,label);
   text(s,label,x,299,156,36,22,C.ink,true,H.FONT,'center');
  });
  line(s,378,354,488,'#B7CDD1',1);
  workIcon(s,'Bot',418,386,64,'작업을 수행하는 Agent');
  text(s,'Agent',502,383,366,43,29,C.teal,true);
  text(s,'구현 · 검증 · 재수정',502,430,366,36,25,C.ink,true);

  text(s,'결과·근거',890,304,112,34,21,'#315C87',true,H.FONT,'center');
  arrow(s,890,358,112);
  text(s,'확인과 책임',940,201,276,42,28,C.teal,true,H.FONT,'center');
  s.shapes.add({name:'Human acceptance',geometry:'ellipse',position:{left:1002,top:282,width:152,height:152},
   fill:C.white,line:{fill:C.teal,width:2}});
  workIcon(s,'UserRound',1030,295,96,'결과와 근거로 최종 결정하는 사람');
  text(s,'사람',1010,392,136,40,26,C.ink,true,H.FONT,'center');
  text(s,'수용 · 보완 요청 · 중단',940,449,276,34,22,C.ink,true,H.FONT,'center');

  workIcon(s,'FileText',354,510,36,'다음 작업에 다시 쓸 지식');
  text(s,'선별한 지식',402,508,182,36,23,'#875415',true);
  line(s,585,526,49,C.teal,2.5);
  s.shapes.add({geometry:'connector',kind:'straight',position:{left:634,top:490,width:0,height:36},
   line:{fill:C.teal,width:2.5},head:{type:'triangle',width:'sm',length:'sm'}});
  text(s,'다음 작업에서\n조건 대조 후 재사용',664,498,306,54,22,C.teal,true);
  text(s,'모델·플랫폼이 달라져도, 지금의 구성이 모두 필요할까?',64,562,1152,38,30,C.teal,true);
  return s;
 }
};}
