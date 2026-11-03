/** DEC-0136: close Harness, then introduce one task's goal-driven loop. */
import {addPracticalTipBadge} from './practical-tips.mjs';

export const CURRENT_SLIDE_COUNT=114;
export const COMPACT_FRESH_IDS=['S78','S111'];
export const COMPACT_TITLE='첫 수정안이 나오면, 팀은 이미 확인할 방법을 갖고 있다';
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
 const s=H.frame(p,'S78',COMPACT_TITLE,'ACT 3 · 공통 Harness를 한 작업에 적용');
 const change=rect(s,64,288,262,149,C.white,C.line,1.5);change.borderRadius=8;
 text(s,'검토할 변경',83,301,220,32,22,C.sub,true);
 text(s,'밝기 통계 수정안',83,342,228,44,29,C.ink,true);
 text(s,'기존 구현 / 수정안',83,393,226,30,22,C.sub);
 s.shapes.add({geometry:'connector',kind:'straight',
  position:{left:331,top:362,width:44,height:0},
  line:{fill:C.teal,width:2.5},tail:{type:'triangle',width:'sm',length:'sm'}
 });
 const shared=rect(s,384,203,832,317,C.pale,C.teal,1.5);shared.borderRadius=10;
 text(s,'팀이 준비해 둔 공통 Harness',409,223,782,48,34,C.teal,true);
 const methods=[
  ['결과가 그대로인가?', '같은 입력의 여섯 출력값 비교'],
  ['임시 메모리가 줄었는가?', '수정 전후 최대 할당량 비교'],
  ['더 느려지지 않았나?', '같은 조건에서 실행시간 측정']
 ];
 methods.forEach(([question,method],i)=>{
  const y=284+i*74;
  line(s,410,y,780,'#BAD1D4',1);
  text(s,question,410,y+10,324,52,27,C.ink,true);
  text(s,method,745,y+10,448,52,27,C.ink);
 });
 text(s,'이렇게 얻은 검토 결과를 다음 수정에도 이어 쓰려면?',64,548,1152,48,29,C.teal,true);
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
