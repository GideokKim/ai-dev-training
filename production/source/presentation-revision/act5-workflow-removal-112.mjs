/** DEC-0168: omit the repeated ACT5 workflow and number the retained slides. */
export const CURRENT_SLIDE_COUNT=112;

export function beforeAct5WorkflowRemoval(id) {
  const n=Number(id.slice(1));
  return 'S'+String(n+(n>=100?1:0)).padStart(2,'0');
}

export function applyAct5WorkflowNumbers(slide) {
  const renumber=value=>String(value).replace(
    /(?<![A-Za-z0-9_./-])S(\d{2,3})(?:([–~])(S?)(\d{2,3}))?(?![A-Za-z0-9_./-])/g,
    (_,start,separator,prefix,end)=>{
      const number=n=>String(Number(n)-(Number(n)>100?1:0)).padStart(2,'0');
      return 'S'+number(start)+(end?separator+prefix+number(end):'');
    }
  );
  for (const shape of slide.shapes.items) {
    const before=String(shape.text),after=renumber(before);
    if (before!==after) shape.text.replace(before,after);
    if (shape.name) shape.name=renumber(shape.name);
  }
}
