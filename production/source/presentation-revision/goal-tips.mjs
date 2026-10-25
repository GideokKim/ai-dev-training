/** DEC-0098: documented Goal guidance and the ACT4-to-ACT5 handoff. */
import * as H from './helpers.mjs';

const {C, text, rect, line, CODE} = H;
const arrow = (s, x, y, w, reverse=false) => s.shapes.add({
 geometry:'connector', kind:'straight', position:{left:x,top:y,width:w,height:0},
 line:{fill:C.teal,width:2.5},
 [reverse?'head':'tail']:{type:'triangle',width:'sm',length:'sm'}
});
const vertical = (s,x,y,h) => s.shapes.add({geometry:'line',
 position:{left:x,top:y,width:0,height:h},line:{fill:C.teal,width:2.5}});

export function map114GoalTipId(id) {
 const n = Number(id.slice(1));
 return `S${String(n + (n >= 99 ? 2 : 0)).padStart(2,'0')}`;
}

const setText = (s, from, to, fontSize) => {
 const q = s.shapes.items.find(q => String(q.text) === from);
 if (!q) throw new Error(`Missing retained handoff text: ${from}`);
 q.text = to; q.name = to.slice(0,60);
 if (fontSize) q.text.style = {...q.text.style,fontSize};
};

export function goalTipFactories(previous) {
 const result = {};
 for (const [id, factory] of Object.entries(previous)) {
  result[map114GoalTipId(id)] = (p, helpers) => {
   const s = factory(p, helpers);
   for (const q of s.shapes.items) {
    const ids = [...new Set(String(q.text).match(/(?<![A-Za-z0-9_/])S\d{2,3}(?![\d_.])/g)??[])];
    ids.forEach((old,i)=>q.text.replace(old,`@@GOALTIP${i}@@`));
    ids.forEach((old,i)=>q.text.replace(`@@GOALTIP${i}@@`,map114GoalTipId(old)));
    if(ids.length)q.name=String(q.name??'').replace(/(?<![A-Za-z0-9_/])S\d{2,3}(?![\d_.])/g,map114GoalTipId);
   }
   return s;
  };
 }
 result.S99 = p => {
  const s=H.frame(p,'S99','Goal이 목표와 다음 작업을 이어준다',
   'ACT 4 · 제품 기능으로 이어가는 루프',
   'OpenAI 공식 Goal 안내 · 2026-10-25 확인 · 사용법을 설명하는 도식',
   '실제 화면·실행 결과 아님 · 다른 모델 검토자는 별도 설계 · 사내 환경에서 사용 가능 여부 확인',
   'RESEARCH / TEACHING_MODEL');
  text(s,'ChatGPT 데스크톱에서 /goal로 목표를 설정한다',64,187,1152,43,31,C.teal,true);
  rect(s,64,263,336,242,C.white,C.line,1.5);
  text(s,'목표 설정',86,279,292,36,24,C.sub);
  line(s,84,331,296,C.line,1);
  text(s,'/goal',86,347,292,59,42,C.teal,true,CODE);
  text(s,'목표와 완료 기준을\n턴이 끝나도 유지',86,426,292,64,28,C.ink,true);
  const items=[['작업','구현 · 수정'],['근거 확인','테스트 · 검토'],['다음 판단','계속 / 완료']];
  items.forEach(([title,body],i)=>{
   const x=470+i*278;
   line(s,x,294,190,C.teal,3);
   text(s,title,x,317,190,48,32,C.teal,true);
   text(s,body,x,386,190,45,26,C.ink);
   if(i<2)arrow(s,x+209,369,49);
  });
  vertical(s,1121,448,59);
  line(s,565,507,556,C.teal,2.5);
  s.shapes.add({geometry:'connector',kind:'straight',
   position:{left:565,top:449,width:0,height:58},
   line:{fill:C.teal,width:2.5},head:{type:'triangle',width:'sm',length:'sm'}});
  text(s,'남은 문제가 있으면 다음 작업으로',630,462,480,35,25,C.teal,true);
  text(s,'Goal은 계속 수행을 연결하고, 완료는 근거로 판단한다',64,554,1152,43,32,C.ink,true);
  return s;
 };
 result.S100 = p => {
  const s=H.frame(p,'S100','Goal에는 완료 근거와 멈출 조건을 담는다',
   'ACT 4 · Goal 요청 작성 예시',
   'OpenAI Goals 작성 안내를 밝기 통계 작업으로 각색 · 실제 실행 요청·결과 아님',
   '기준판·대표 입력·측정 방법을 먼저 확정 · 완료 보장 없음 · 다중 모델 검토를 자동 구성한다는 뜻 아님',
   'RESEARCH / TEACHING_MODEL');
  text(s,'막연한 목표: /goal 성능을 개선해 줘.',64,181,1152,43,30,C.sub);
  rect(s,64,247,800,339,C.white,C.line,1.5);
  text(s,'완료를 확인할 수 있는 요청 예시',86,260,756,36,24,C.teal,true);
  line(s,84,313,760,C.line,1);
  const lines=[
   '/goal 밝기 통계의 임시 할당을 기준판보다 줄여줘.',
   '기존 6개 출력과 동작은 유지해.',
   '같은 대표 입력의 테스트·벤치마크로 확인해.',
   '실행시간이 기준판보다 나빠지면 완료로 처리하지 마.',
   '검증할 수 없거나 같은 실패가 반복되면,',
   '미완료 사유와 필요한 판단을 보고해.'
  ];
  lines.forEach((t,i)=>text(s,t,86,329+i*40,756,38,27,i===0?C.teal:C.ink,i===0));
  const labels=[['목표와 보존','할당량 감소 / 출력 유지'],['완료 근거','동작·할당량·시간 확인'],['멈출 조건','막힘을 완료와 구분']];
  labels.forEach(([a,b],i)=>{
   const y=275+i*108;line(s,910,y,306,C.teal,2);
   text(s,a,910,y+15,306,38,28,C.teal,true);
   text(s,b,910,y+59,306,37,25,C.ink);
  });
  return s;
 };
 const changes={
  S101:[['내 업무에 필요한 만큼 조합하고, 불필요한 구조는 덜어낸다',
   '제품 기능을 활용하고, 내 업무의 검증·검토를 조합한다',30]],
  S103:[['필요한 대응을 더하며, 여기까지 왔다','배운 대응 중, 내 문제에 필요한 것을 고른다'],
   ['검토·수정이 이어지면','다음 수정이 끊기면'],
   ['문제에 따라 더해진 대응이지, 기능을 모두 갖추는 순서는 아니다',
    '플랫폼이 맡는 기능은 활용하고, 필요한 기준과 검토를 조합한다',28]],
  S104:[['Loop는 앞 ACT의 설계 사례·연구에서 살펴봤다 · 제품 실행 이력과 구분',
   '다중 모델 루프·Goal 사용은 이 제품에서 실행 검증하지 않았다',27]],
  S106:[['AI가 조사·생성·변경·실행·비교를 도와도',
   'Goal이 완료를 보고해도, 수용할 근거는 사람이 확인한다',29]]
 };
 for(const[id,pairs]of Object.entries(changes)) {
  const factory=result[id];result[id]=(p,helpers)=>{
   const s=factory(p,helpers);
   for(const[from,to,size]of pairs)setText(s,from,to,size);
   return s;
  };
 }
 return result;
}
