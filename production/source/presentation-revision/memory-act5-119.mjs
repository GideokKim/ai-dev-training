/** DEC-0133: move cross-task knowledge management after result acceptance. */
import {addPracticalTipBadge} from './practical-tips.mjs';

const slideId=n=>`S${String(n).padStart(2,'0')}`;
export const afterMemoryMove=id=>{
 const n=Number(id.slice(1));
 return slideId(n===74?109:n>74&&n<=109?n-1:n);
};
export const beforeMemoryMove=id=>{
 const n=Number(id.slice(1));
 return slideId(n===109?74:n>=74&&n<109?n+1:n);
};
export const MEMORY_TITLE='이번에 알아낸 것 중, 다음에도 쓸 것은?';

export function renumber119MemoryText(value){
 const shift=n=>Number(n)===74?109:Number(n)>74&&Number(n)<=109?Number(n)-1:Number(n);
 return String(value).replace(/(?<![A-Za-z0-9_./-])S(\d{2,3})(?:([–~])(S?)(\d{2,3}))?(?![A-Za-z0-9_./-])/g,
  (whole,start,sep,repeated,end)=>`${slideId(shift(start))}${end?sep+repeated+String(shift(end)).padStart(2,'0'):''}`);
}

export function applyMemoryMove(slide){
 for(const shape of slide.shapes.items){
  const before=String(shape.text);
  const after=renumber119MemoryText(before)
   .replace('별도 Memory는 필수가 아님','다음 수정에 필요한 상태만 전달')
   .replace('별도 Memory나 프레임워크가 필수인 것은 아니다','별도 프레임워크가 필수인 것은 아니다')
   .replace('이번 Context와 다시 쓸 지식',MEMORY_TITLE);
  if(before!==after)shape.text=after;
  if(shape.name)shape.name=renumber119MemoryText(shape.name);
 }
}

export function memoryAct5Factory(p,H){
 const {C,text,rect,arrow}=H;
 const s=H.frame(p,'S109',MEMORY_TITLE,'ACT 5 · 작업 결과를 다음 업무로 잇기','','','CONCEPTUAL');
 addPracticalTipBadge(s,'Context 관리',H);
 text(s,'가정: C++ 성능 비교 조건을 다음 작업에서도 또 찾는다면?',64,171,1152,36,27,C.teal,true);
 const y=250,h=285,w=344;
 for(const x of [64,468,872])rect(s,x,y,w,h,C.white,C.line,1);
 text(s,'이번 작업 Context',84,222,324,30,25,C.teal,true);
 text(s,'다시 쓸 지식 · Memory',488,222,324,30,25,C.warn,true);
 text(s,'다음 작업 Context',892,222,324,30,25,C.teal,true);

 text(s,'확인한 측정 조건',88,274,296,35,29,C.ink,true);
 rect(s,88,326,296,83,C.pale);
 text(s,'Release 빌드\n동일 입력으로 비교',102,335,268,66,28,C.teal,true);
 text(s,'이번 로그·측정값은\n작업 기록에 남김',88,438,296,64,25,C.sub);

 arrow(s,420,365,36,18);
 text(s,'성능 비교 조건',492,274,296,35,29,C.ink,true);
 text(s,'출처\n적용 범위·버전\n다시 확인할 조건',492,341,296,123,27,C.sub);
 text(s,'재사용할 기준을 선별',492,482,296,29,24,C.warn,true);

 arrow(s,824,365,36,18);
 text(s,'현재 조건과 대조',896,274,296,35,29,C.ink,true);
 rect(s,896,337,296,62,C.pale);
 text(s,'같으면 활용',911,351,266,34,28,C.teal,true);
 text(s,'바뀌었다면\n재확인·갱신',896,432,296,70,27,C.ink,true);

 text(s,'기억한 정보도, 다음 작업에서는 현재 조건과 대조한다',64,558,1152,43,31,C.teal,true);
 text(s,'M 연계 · 신규 확장',996,674,220,23,16,C.sub,false,H.FONT,'right');
 return s;
}

export function migrateMemoryMoveFactories(previous,H){
 const result=Object.fromEntries(Object.entries(previous)
  .filter(([id])=>id!=='S74')
  .map(([id,factory])=>[afterMemoryMove(id),factory]));
 result.S109=p=>memoryAct5Factory(p,H);
 return result;
}
