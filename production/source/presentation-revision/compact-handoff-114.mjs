/** DEC-0136: close Harness, then introduce one task's goal-driven loop. */
import {addPracticalTipBadge} from './practical-tips.mjs';

export const CURRENT_SLIDE_COUNT=114;
export const COMPACT_FRESH_IDS=['S78','S111'];
export const COMPACT_TITLE='점심 먹고 왔는데, 계획만 와 있었다';
const slideId=n=>`S${String(n).padStart(2,'0')}`;

export const afterCompactHandoff=id=>{
 const n=Number(id.slice(1));
 return n>=78&&n<=82?null:slideId(n-(n>82?4:0));
};
export const beforeCompactHandoff=id=>{
 const n=Number(id.slice(1));
 return slideId(n+(n>78?4:0));
};
export function renumber118CompactText(value){
 const shift=n=>Number(n)>82?Number(n)-4:Number(n)>=78?78:Number(n);
 return String(value).replace(/(?<![A-Za-z0-9_./-])S(\d{2,3})(?:([–~])(S?)(\d{2,3}))?(?![A-Za-z0-9_./-])/g,
  (whole,start,sep,repeated,end)=>`${slideId(shift(start))}${end?sep+repeated+String(shift(end)).padStart(2,'0'):''}`);
}
export function applyCompactHandoff(slide){
 for(const shape of slide.shapes.items){
  const before=String(shape.text),after=renumber118CompactText(before);
  if(before!==after)shape.text=after;
  if(shape.name)shape.name=renumber118CompactText(shape.name);
 }
}

export function compactBridgeFactory(p,H){
 const {C,text,rect,line,FONT}=H;
 const s=H.frame(p,'S78',COMPACT_TITLE,'ACT 3 → ACT 4 · 교육용 대화 예시');
 const panelWidth=558;
 function chatWindow(x,when,who){
  text(s,when,x,178,panelWidth,44,32,C.ink,true);
  const pane=rect(s,x,237,panelWidth,338,C.white,C.line,1.5);
  pane.borderRadius=10;
  for(const [i,color] of ['#FF5F57','#FEBC2E','#28C840'].entries()){
   s.shapes.add({name:when+' 창 표시 '+(i+1),geometry:'ellipse',
    position:{left:x+18+i*15,top:255,width:9,height:9},fill:color,line:{fill:'none',width:0}});
  }
  text(s,who,x+73,241,panelWidth-94,36,20,C.sub,true);
  line(s,x+1,283,panelWidth-2);
 }
 chatWindow(64,'점심 가기 전','내가 보낸 요청');
 chatWindow(658,'점심 먹고 돌아온 뒤','AI가 보낸 답변');
 const badge=rect(s,86,300,356,31,C.pale);
 badge.borderRadius=5;
 text(s,'공통 Harness · 팀 지침과 검증 도구 준비됨',94,301,344,29,18,C.teal,true);
 text(s,'밝기 통계의 임시 메모리를 줄여줘.',88,351,506,44,27,C.sub);
 text(s,'수정할 위치와 검증 계획을 정리했습니다.',682,351,505,44,26,C.sub);
 for(const [x,phrase,fill,ink] of [
  [64,'수정하고 테스트까지 돌려줘.',C.pale,C.teal],
  [658,'이대로 구현을 시작할까요?',C.amber,C.warn]
 ]){
  const emphasis=rect(s,x+18,410,panelWidth-36,70,fill);
  emphasis.borderRadius=7;
  text(s,phrase,x+30,414,panelWidth-60,60,36,ink,true);
 }
 text(s,'돌아와서 결과를 볼게.',88,499,507,46,27,C.sub);
 const reply=rect(s,680,509,514,45,C.bg,C.line,1);
 reply.borderRadius=8;
 rect(s,695,519,2,25,C.sub);
 text(s,'M 연계 · M6 · M8',996,674,220,23,16,C.sub,false,FONT,'right');
 return s;
}

export function compactTipIndexFactory(p,H){
 const {C,text,line,rect,FONT}=H;
 const s=H.frame(p,'S111','실무 적용 팁 · 작업 환경과 기준','마지막 정리 · 찾아보기 1/3');
 addPracticalTipBadge(s,'찾아보기',H);
 text(s,'필요한 상황이 생기면, 아래 Slide로 돌아오세요',64,174,1152,43,30,C.teal,true);
 const entries=[
  ['S13','개발 프로젝트 조사는 Codex에서 시작한다'],
  ['S48','AGENTS.md에는 무엇을 남길까?'],
  ['S56–58','AGENTS.md의 위치와 적용 범위'],
  ['S62','테스트 명령을 언제 쓰고 무엇을 판단할까?'],
  ['S67','대화로 재사용할 Skill 만들기'],
  ['S72','대화로 조사 Agent 만들기'],
  ['S104','이번에 알아낸 것 중, 다음에도 쓸 것은?'],
  ['S96','Goal이 목표와 다음 작업을 이어준다']
 ];
 entries.forEach(([id,title],i)=>{
  const col=i<5?0:1,row=col===0?i:i-5,x=64+col*600,y=240+row*67;
  line(s,x,y,552,C.line,1);rect(s,x,y+11,120,44,C.pale);
  text(s,id,x,y+11,120,44,id.includes('–')?23:28,C.teal,true,FONT,'center');
  text(s,title,x+136,y+11,416,44,24,C.ink,true);
 });
 text(s,'M 연계 · 찾아보기',996,674,220,23,16,C.sub,false,FONT,'right');
 return s;
}

export function migrateCompactHandoffFactories(previous,H){
 const result=Object.fromEntries(Object.entries(previous)
  .filter(([id])=>afterCompactHandoff(id)!==null)
  .map(([id,factory])=>[afterCompactHandoff(id),factory]));
 result.S78=p=>compactBridgeFactory(p,H);
 result.S111=p=>compactTipIndexFactory(p,H);
 return result;
}
