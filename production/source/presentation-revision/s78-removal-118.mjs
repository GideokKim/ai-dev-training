/** DEC-0135: remove the standalone cross-task scope warning. */
export const CURRENT_SLIDE_COUNT=118;
const slideId=n=>`S${String(n).padStart(2,'0')}`;

export const afterS78Removal=id=>{
 const n=Number(id.slice(1));
 return n===78?null:slideId(n-(n>78?1:0));
};
export const beforeS78Removal=id=>{
 const n=Number(id.slice(1));
 return slideId(n+(n>=78?1:0));
};

export function renumber119RemovalText(value){
 const shift=n=>Number(n)-(Number(n)>78?1:0);
 return String(value).replace(/(?<![A-Za-z0-9_./-])S(\d{2,3})(?:([–~])(S?)(\d{2,3}))?(?![A-Za-z0-9_./-])/g,
  (whole,start,sep,repeated,end)=>`${slideId(shift(start))}${end?sep+repeated+String(shift(end)).padStart(2,'0'):''}`);
}

export function migrateS78RemovalFactories(previous){
 return Object.fromEntries(Object.entries(previous)
  .filter(([id])=>afterS78Removal(id)!==null)
  .map(([id,factory])=>[afterS78Removal(id),factory]));
}

export function applyS78Removal(slide){
 for(const shape of slide.shapes.items){
  const before=String(shape.text),after=renumber119RemovalText(before);
  if(before!==after)shape.text=after;
  if(shape.name)shape.name=renumber119RemovalText(shape.name);
 }
}
