/** Map the retained 96-slide source edition into DEC-0084's 99-slide edition. */
export function to99Id(id) {
 const n=Number(id.slice(1));
 return n>=8?`S${String(n+3).padStart(2,'0')}`:id;
}

export function renumber96Text(value) {
 return String(value).replace(/(?<![A-Za-z0-9])S(\d{2})(?!\d)/g,(id,n)=>
  Number(n)>=8&&Number(n)<=96?to99Id(id):id);
}

export function migrate96Factories(previous) {
 const result={};
 for(const [id,factory] of Object.entries(previous)){
  if(['S05','S06','S07'].includes(id))continue;
  const target=to99Id(id);
  result[target]=(p,H)=>{
   const s=factory(p,H);
   // Existing native labels put their text in the shape name. Only current
   // slide references change; source paths, image names and crops stay intact.
   for(const shape of s.shapes.items){
    const name=shape.name??'';
    const ids=[...new Set(name.match(/(?<![A-Za-z0-9])S\d{2}(?!\d)/g)??[])];
    for(const old of ids.sort().reverse()){
     if(Number(old.slice(1))>=8&&Number(old.slice(1))<=96)
      shape.text.replace(old,to99Id(old));
    }
    if(ids.length)shape.name=renumber96Text(name);
   }
   return s;
  };
 }
 return result;
}
