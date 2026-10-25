/** DEC-0099: explain the course synthesis without Demo history assumptions. */
import * as H from './helpers.mjs';

const {C,text,rect,line}=H;
const arrow=(s,x,y,w)=>s.shapes.add({geometry:'connector',kind:'straight',
 position:{left:x,top:y,width:w,height:0},line:{fill:C.teal,width:2.5},
 tail:{type:'triangle',width:'sm',length:'sm'}});
const down=(s,x,y,h)=>s.shapes.add({geometry:'connector',kind:'straight',
 position:{left:x,top:y,width:0,height:h},line:{fill:C.teal,width:2.5},
 tail:{type:'triangle',width:'sm',length:'sm'}});
const frame=(p,id,title,eyebrow)=>H.frame(p,id,title,eyebrow,
 '교육에서 배운 관점의 종합 · TEACHING MODEL',
 '설명용 도식 · 실제 실행·측정 결과나 모든 작업의 필수 구성표가 아님');

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
  text(s,'한 번의 답변에서, 근거를 확인하며 일을 맡기는 방식으로',64,551,1152,46,31,C.ink,true);
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
  text(s,'Agent의 작업은 주어진 명세·수행 방법·확인 도구와 연결된다',64,190,1152,46,30,C.teal,true);
  const inputs=[['프로젝트 정보','코드 · 명세 · 프로젝트 지식'],['재사용할 수행 방법','조사 · 변경 · 검증 순서'],['검증 도구','테스트 · 측정 · 결과 비교']];
  inputs.forEach(([a,b],i)=>{
   const x=64+i*400;line(s,x,273,352,C.teal,3);
   text(s,a,x,291,352,43,29,C.teal,true);
   text(s,b,x,346,352,43,24,C.ink);
   if(i!==1)s.shapes.add({geometry:'line',position:{left:x+176,top:402,width:0,height:26},line:{fill:C.teal,width:2.5}});
  });
  line(s,240,428,800,C.teal,2.5);down(s,640,397,63);
  rect(s,416,460,448,71,C.pale);
  text(s,'조사·변경·검토하는 Agent',436,472,408,47,30,C.teal,true,H.FONT,'center');
  text(s,'결과로 남길 것: 변경 내용 · 확인 근거 · 미해결 항목',64,554,1152,43,29,C.ink,true);
  return s;
 },
 S106(p){
  const s=frame(p,'S106','결과를 수용할지는 사람이 판단한다','ACT 5 · 완료 보고와 수용 판단');
  text(s,'작업 완료 보고 뒤에도, 목표·근거·남은 위험을 확인한다',64,194,1152,43,30,C.teal,true);
  text(s,'AI의 작업 결과',64,302,310,42,30,C.teal,true);
  rect(s,64,363,310,133,C.pale);
  text(s,'변경 내용\n실행·검사·비교 기록',82,384,274,89,27,C.ink,true);
  arrow(s,397,430,70);text(s,'사람의 수용 판단',510,270,706,39,28,C.teal,true);
  for(const[x,y,label,q]of [[510,330,'목표','목표·제약에 맞나?'],[902,330,'판단','선택이 적절한가?'],[510,458,'검증','근거로 확인했나?'],[902,458,'책임','남은 위험을 수용할까?']]){
   line(s,x,y,314,C.teal,2);text(s,label,x,y+12,314,35,27,C.teal,true);text(s,q,x,y+57,314,46,27,C.ink,true);
  }
  return s;
 },
 S107(p){
  const s=frame(p,'S107','AI가 일할 조건과 확인 경로를 설계한다','ACT 5 · AI-Native Development / 이 교육의 관점');
  text(s,'작업을 맡기는 범위와, 수행·검토·수용의 연결을 설계한다',64,190,1152,46,30,C.teal,true);
  const nodes=[['맡길 범위','목표·제약\n완료 기준'],['일할 조건','정보·수행 방법\n도구·검토 역할'],['확인과 책임','검증·수정·재검토\n사람의 수용 판단']];
  nodes.forEach(([a,b],i)=>{
   const x=64+i*400;line(s,x,286,352,C.teal,3);text(s,a,x,308,352,45,31,C.teal,true);
   text(s,b,x,380,352,95,29,C.ink,true);if(i<2)arrow(s,x+361,420,30);
  });
  text(s,'이 교육에서는 이를 AI-Native Development의 관점으로 본다',64,510,1152,39,27,C.sub);
  text(s,'모델·플랫폼이 달라져도, 지금의 구성이 모두 필요할까?',64,562,1152,38,30,C.teal,true);
  return s;
 }
};}
