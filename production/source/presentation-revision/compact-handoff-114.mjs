/** DEC-0136: close Harness, then introduce one task's goal-driven loop. */
import {addPracticalTipBadge} from './practical-tips.mjs';

export const CURRENT_SLIDE_COUNT=114;
export const COMPACT_FRESH_IDS=['S78','S111'];
export const COMPACT_TITLE='검토에서 문제가 나오면, 다음 수정은 누가 시작할까?';
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
 const s=H.frame(p,'S78',COMPACT_TITLE,'ACT 3 → ACT 4 · 작업 체계와 한 작업의 수행');
 const forward=(x,y,w)=>s.shapes.add({
  geometry:'connector',kind:'straight',position:{left:x,top:y,width:w,height:0},
  line:{fill:C.teal,width:2.5},tail:{type:'triangle',width:'sm',length:'sm'}
 });
 rect(s,64,220,1152,336,C.white,C.line,1);
 text(s,'이번 작업',88,232,1096,32,25,C.teal,true);
 const prompt=rect(s,88,286,268,104,C.white,C.line,1.5);prompt.borderRadius=10;
 const chrome=rect(s,89,287,266,31,'#EDF1F5');chrome.borderRadius=9;
 ['#FF5F57','#FEBC2E','#28C840'].forEach((fill,i)=>{
  s.shapes.add({geometry:'ellipse',name:'Goal window control '+(i+1),position:{left:100+i*14,top:298,width:8,height:8},fill,line:{fill:'none',width:0}});
 });
 text(s,'이번 목표',146,290,192,25,20,C.teal,true);
 line(s,89,319,266,C.line,1);
 text(s,'목표 · 완료 기준',108,343,228,29,25,C.ink,false,FONT,'center');
 rect(s,446,286,228,104,C.white,C.teal,1.5);
 text(s,'첫 구현',462,314,196,48,34,C.ink,true,FONT,'center');
 rect(s,776,286,400,104,C.amber,C.warn,1.5);
 text(s,'검토 결과',796,300,360,32,24,C.warn,true,FONT,'center');
 text(s,'충족하지 못한 기준이 있다',790,342,372,40,27,C.ink,true,FONT,'center');
 forward(359,338,76);
 forward(678,338,87);
 rect(s,64,490,1152,66,C.pale,C.teal,1.5);
 text(s,'Harness',88,505,186,36,32,C.teal,true);
 text(s,'지침 · Skill · 도구 · 실행 환경',320,508,872,32,27,C.ink,true);
 text(s,'검토는 끝났고, 목표는 아직 남아 있다',64,566,1152,40,31,C.teal,true);
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
