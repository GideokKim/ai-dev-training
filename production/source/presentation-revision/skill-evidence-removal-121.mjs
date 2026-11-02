/** DEC-0131: remove the detailed action-audit page after the122-ID stage. */
export const CURRENT_SLIDE_COUNT=121;
const slideId=n=>`S${String(n).padStart(2,'0')}`;
export const afterS68Removal=id=>Number(id.slice(1))===68?null:slideId(Number(id.slice(1))-(Number(id.slice(1))>68?1:0));
export const beforeS68Removal=id=>slideId(Number(id.slice(1))+(Number(id.slice(1))>=68?1:0));

export function renumber122Text(value){
 const shift=n=>Number(n)===68?67:Number(n)>68&&Number(n)<=122?Number(n)-1:Number(n);
 return String(value).replace(/(?<![A-Za-z0-9_./-])S(\d{2,3})(?:([–~])(S?)(\d{2,3}))?(?![A-Za-z0-9_./-])/g,
  (whole,start,sep,repeated,end)=>`${slideId(shift(start))}${end?sep+repeated+String(shift(end)).padStart(2,'0'):''}`);
}
export function applyS68Removal(slide){
 for(const shape of slide.shapes.items){
  const before=String(shape.text),after=renumber122Text(before);
  if(before!==after)shape.text=after;
  if(shape.name)shape.name=renumber122Text(shape.name);
 }
}
export function migrateS68RemovalFactories(previous){
 const skillInclusionFactory=previous.S67;
 const result=Object.fromEntries(Object.entries(previous).filter(([id])=>id!=='S68').map(([id,factory])=>[afterS68Removal(id),factory]));
 result.S67=(p,H)=>{
  const s=skillInclusionFactory(p,H);
  for(const [from,to] of [
   ['지침이 전달된 것은 확인했다','지침 포함과 실제 수행은 별도로 확인한다'],
   ['실제로 지침대로 작업했는지는 작업 기록으로 확인한다','우리 업무의 절차도 Skill로 만들어 볼 수 있을까?']
  ]){
   const shape=s.shapes.items.find(q=>String(q.text)===from);
   if(!shape)throw new Error('Missing S67 closing text: '+from);
   shape.text=to;shape.name=to.slice(0,60);
  }
  return s;
 };
 return result;
}
