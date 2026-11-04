/** DEC-0133: move cross-task knowledge management after result acceptance. */
import {readFileSync} from 'node:fs';

const slideId=n=>`S${String(n).padStart(2,'0')}`;
export const afterMemoryMove=id=>{
 const n=Number(id.slice(1));
 return slideId(n===74?109:n>74&&n<=109?n-1:n);
};
export const beforeMemoryMove=id=>{
 const n=Number(id.slice(1));
 return slideId(n===109?74:n>=74&&n<109?n+1:n);
};
export const MEMORY_TITLE='Memory: 다음 작업에 다시 쓸 맥락';

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
 const {C,text,rect}=H;
 const s=H.frame(p,'S109',MEMORY_TITLE,'ACT 5 · 작업 간 유용한 맥락을 이어가기','','','CONCEPTUAL');
 const icon=(name,x,y,size)=>{
  const bytes=readFileSync(new URL(`../../../assets/slide-illustrations/work-conditions/${name}.png`,import.meta.url));
  s.images.add({blob:new Uint8Array(bytes),contentType:'image/png',alt:name,fit:'contain',
   position:{left:x,top:y,width:size,height:size}});
 };
 const arrow=(x,y,width)=>s.shapes.add({geometry:'connector',kind:'straight',
  position:{left:x,top:y,width,height:0},line:{fill:C.teal,width:2.5},
  tail:{type:'triangle',width:'sm',length:'sm'}});
 text(s,'다시 설명할 선호와 프로젝트 지식을 이어간다',64,174,1152,40,29,C.teal,true);
 text(s,'이번 작업 · Context',64,239,300,38,26,C.teal,true,H.FONT,'center');
 icon('Bot',176,303,76);
 text(s,'이번에 확인한 정보\n사용자의 작업 선호',64,414,300,86,26,C.ink,true,H.FONT,'center');
 text(s,'선별',380,302,62,36,23,C.teal,true,H.FONT,'center');
 arrow(380,372,62);

 const memory=rect(s,458,237,364,304,'#FBF5E8','#CEAD78',1.5);
 memory.borderRadius=12;
 text(s,'Memory',482,250,316,44,34,C.warn,true,H.FONT,'center');
 icon('Notebook',596,310,88);
 text(s,'작업 선호\n프로젝트 지식\n확인된 주의점',482,406,316,96,25,C.ink,true,H.FONT,'center');
 text(s,'출처 · 적용 범위와 함께',482,507,316,30,21,C.sub,false,H.FONT,'center');

 text(s,'참고',838,302,62,36,23,C.teal,true,H.FONT,'center');
 arrow(838,372,62);
 text(s,'다음 작업 · Context',916,239,300,38,26,C.teal,true,H.FONT,'center');
 icon('Bot',1028,303,76);
 text(s,'새 요청 + 관련 기억\n현재 문서와 대조',916,414,300,86,26,C.ink,true,H.FONT,'center');
 text(s,'지켜야 할 지침은 문서로, 기억한 내용은 다시 확인한다',64,562,1152,43,30,C.teal,true);
 const footer=text(s,'M 연계 · 신규 확장',64,654,1152,18,16,C.sub,false,H.FONT,'right');
 footer.name='Legacy module connection';
 return s;
}

export function migrateMemoryMoveFactories(previous,H){
 const result=Object.fromEntries(Object.entries(previous)
  .filter(([id])=>id!=='S74')
  .map(([id,factory])=>[afterMemoryMove(id),factory]));
 result.S109=p=>memoryAct5Factory(p,H);
 return result;
}
