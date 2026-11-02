/** DEC-0132: delete two audit pages without moving their content elsewhere. */
export const CURRENT_SLIDE_COUNT=119;
const slideId=n=>`S${String(n).padStart(2,'0')}`;
const trimmedIds=new Set([67,76]);
export const afterAct3Trim=id=>{
 const n=Number(id.slice(1));
 return trimmedIds.has(n)?null:slideId(n-(n>67?1:0)-(n>76?1:0));
};
export const beforeAct3Trim=id=>{
 const n=Number(id.slice(1));
 return slideId(n+(n>=67?1:0)+(n>=75?1:0));
};

export function renumber121Text(value){
 const shift=n=>Number(n)-(Number(n)>=67?1:0)-(Number(n)>=76?1:0);
 return String(value).replace(/(?<![A-Za-z0-9_./-])S(\d{2,3})(?:([–~])(S?)(\d{2,3}))?(?![A-Za-z0-9_./-])/g,
  (whole,start,sep,repeated,end)=>`${slideId(shift(start))}${end?sep+repeated+String(shift(end)).padStart(2,'0'):''}`);
}

export function migrateAct3TrimFactories(previous){
 return Object.fromEntries(Object.entries(previous)
  .filter(([id])=>afterAct3Trim(id)!==null)
  .map(([id,factory])=>[afterAct3Trim(id),factory]));
}

export function applyAct3Trim(slide){
 for(const shape of slide.shapes.items){
  const before=String(shape.text),after=renumber121Text(before);
  if(before!==after)shape.text=after;
  if(shape.name)shape.name=renumber121Text(shape.name);
 }
}
