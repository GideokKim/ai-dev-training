/** DEC-0138: remove the standalone Skill procedure-versus-answer recap. */
export const CURRENT_SLIDE_COUNT=113;
const slideId=n=>`S${String(n).padStart(2,'0')}`;

export const afterProcedureRecapRemoval=id=>{
 const n=Number(id.slice(1));
 return n===68?null:slideId(n-(n>68?1:0));
};
export const beforeProcedureRecapRemoval=id=>{
 const n=Number(id.slice(1));
 return slideId(n+(n>=68?1:0));
};

export function renumber114RecapText(value){
 const shift=n=>Number(n)-(Number(n)>68?1:0);
 return String(value).replace(/(?<![A-Za-z0-9_./-])S(\d{2,3})(?:([–~])(S?)(\d{2,3}))?(?![A-Za-z0-9_./-])/g,
  (whole,start,sep,repeated,end)=>`${slideId(shift(start))}${end?sep+repeated+String(shift(end)).padStart(2,'0'):''}`);
}

export function migrateProcedureRecapRemovalFactories(previous){
 return Object.fromEntries(Object.entries(previous)
  .filter(([id])=>afterProcedureRecapRemoval(id)!==null)
  .map(([id,factory])=>[afterProcedureRecapRemoval(id),factory]));
}

export function applyProcedureRecapRemoval(slide){
 for(const shape of slide.shapes.items){
  const before=String(shape.text),after=renumber114RecapText(before);
  if(before!==after)shape.text=after;
  if(shape.name)shape.name=renumber114RecapText(shape.name);
 }
}
