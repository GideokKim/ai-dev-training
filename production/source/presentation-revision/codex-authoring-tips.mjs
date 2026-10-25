/** DEC-0093: two current Codex authoring tips, separate from Trial history. */
import * as H from './helpers.mjs';

export function map113Id(id) {
 const n=Number(id.slice(1));
 return `S${String(n+(n>62?1:0)+(n>66?1:0)).padStart(2,'0')}`;
}

export function migrate113Factories(previous) {
 return Object.fromEntries(Object.entries(previous).map(([id,factory])=>[
  map113Id(id),(p,helpers)=>{
   const s=factory(p,helpers);
   for(const shape of s.shapes.items){
    const original=String(shape.text);
    const ids=[...new Set(original.match(/(?<![A-Za-z0-9_/])S\d{2,3}(?![\d_.])/g)??[])];
    ids.forEach((old,i)=>shape.text.replace(old,`@@AUTHORING${i}@@`));
    ids.forEach((old,i)=>shape.text.replace(`@@AUTHORING${i}@@`,map113Id(old)));
    if(ids.length)shape.name=String(shape.name??'').replace(/(?<![A-Za-z0-9_/])S\d{2,3}(?![\d_.])/g,map113Id);
   }
   return s;
  }
 ]));
}

export function codexAuthoringTipFactories() {
 const {C,text,rect,line,CODE}=H;
 const arrow=(s,x,y,w)=>s.shapes.add({geometry:'connector',kind:'straight',position:{left:x,top:y,width:w,height:0},line:{fill:C.teal,width:2.5},tail:{type:'triangle',width:'sm',length:'sm'}});
 const prompt=(s,x,y,w,h)=>{
  rect(s,x,y,w,h,C.white,C.line,1.5);
  text(s,'Codex · 요청 예시',x+22,y+9,w-44,28,20,C.sub);
  line(s,x+20,y+49,w-40,C.line,1);
 };
 return {
  S63(p){
   const s=H.frame(p,'S63','대화로 재사용할 Skill 만들기','ACT 3 · Codex에서 반복 절차를 Skill로 남기기',
    'OpenAI Build skills · 2026-10-25 확인 · 요청과 생성 문서의 교육용 도식',
    '현재 제품 활용 팁 · TRIAL-008의 제작 이력이 아님 · 생성 뒤 사용 조건·지침을 검토하고 실제 요청으로 확인','RESEARCH / TEACHING_MODEL');
   text(s,'01  대화로 제작 요청',64,192,644,44,30,C.teal,true);
   text(s,'02  생성된 지침 확인',816,192,400,44,30,C.teal,true);
   prompt(s,64,254,644,237);
   text(s,'$skill-creator',86,315,600,39,28,C.teal,true,CODE);
   text(s,'방금 사용한 성능 조사·검증 절차를\n이 저장소에서 다시 쓸 Skill로 만들어줘.\n언제 쓰고 무엇을 보고할지도 정리해줘.',86,365,600,105,26,C.ink);
   arrow(s,724,371,72);
   rect(s,816,254,400,237,C.white,C.teal,1.5);
   text(s,'SKILL.md',840,275,352,43,32,C.teal,true,CODE);
   ['언제 쓸까?','어떤 순서로 일할까?','무엇을 보고할까?'].forEach((t,i)=>text(s,t,840,340+i*47,352,39,28,C.ink));
   text(s,'03  실제 요청에 써 보고 다듬기',64,530,1152,43,31,C.teal,true);
   text(s,'초안은 대화로 만들고, 재사용할 절차는 검토한다',64,568,1152,35,28,C.ink,true);
   return s;
  },
  S68(p){
   const s=H.frame(p,'S68','대화로 조사 Agent 만들기','ACT 3 · Codex에서 재사용할 조사 역할 정의',
    'OpenAI Subagents · 2026-10-25 확인 · Custom Agent 설정·사용 요청의 교육용 도식',
    '일회성 분담은 요청만으로 가능 · 반복 역할은 설정으로 재사용 · 실제 생성·실행 결과가 아니며 대상 환경에서 확인','RESEARCH / TEACHING_MODEL');
   text(s,'01  역할을 설명해 생성 요청',64,186,644,44,29,C.teal,true);
   text(s,'02  설정 파일 확인',816,186,400,44,30,C.teal,true);
   prompt(s,64,244,644,246);
   text(s,'이 저장소에 perf_reviewer Agent를 만들어줘.\n성능 조사 때 병목 후보를 찾고,\n파일·함수·근거·미확인을 보고하게 해줘.\n코드 수정 없이 조사만 하도록 지침을 써줘.',86,313,600,151,25,C.ink);
   arrow(s,724,366,72);
   rect(s,816,244,400,246,C.white,C.teal,1.5);
   text(s,'.codex/agents/',840,258,352,35,25,C.sub,false,CODE);
   text(s,'perf_reviewer.toml',840,302,352,39,26,C.teal,true,CODE);
   ['이름 · perf_reviewer','사용 조건 · 성능 조사','지침 · 근거를 찾아 보고'].forEach((t,i)=>text(s,t,840,358+i*39,352,35,25,C.ink));
   rect(s,64,526,1152,76,C.pale,C.line,1);
   text(s,'03  사용 요청',82,536,210,51,28,C.teal,true);
   text(s,'perf_reviewer Subagent로 성능을 조사하고,\n결과를 기다린 뒤 근거를 확인해 종합해줘.',312,535,880,56,25,C.ink,true);
   return s;
  }
 };
}
