/** DEC-0177: omit the repeated reflection and retain the source editions. */
export const CURRENT_SLIDE_COUNT=111;

export function beforeAct4ReflectionRemoval(id) {
  const n=Number(id.slice(1));
  return 'S'+String(n+(n>=96?1:0)).padStart(2,'0');
}

export function applyAct4ReflectionNumbers(slide) {
  const renumber=value=>String(value).replace(
    /(?<![A-Za-z0-9_./-])S(\d{2,3})(?:([–~])(S?)(\d{2,3}))?(?![A-Za-z0-9_/-]|\.[A-Za-z0-9])/g,
    (_,start,separator,prefix,end)=>{
      const number=n=>String(Number(n)-(Number(n)>96?1:0)).padStart(2,'0');
      return 'S'+number(start)+(end?separator+prefix+number(end):'');
    }
  );
  for (const shape of slide.shapes.items) {
    const before=String(shape.text),after=renumber(before);
    if (before!==after) shape.text.replace(before,after);
    if (shape.name) shape.name=renumber(shape.name);
  }
}
