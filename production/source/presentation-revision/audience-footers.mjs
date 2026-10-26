/** DEC-0103: show audience-relevant scope and keep full provenance in Notes. */
export function applyAudienceFooter(slide,id,config,H) {
 const record=config.slides[id];
 if(!record)throw new Error('Missing audience footer record: '+id);
 if(record.lines===null)return;
 const existing=slide.shapes.items.filter(shape=>{
  const q=shape.position;
  return q.left===64&&q.width===1152&&[608,632].includes(q.top);
 }).sort((a,b)=>a.position.top-b.position.top);
 if(existing.length!==2)throw new Error('Expected two source footer rows: '+id);
 // Keep the existing frame and all body objects, including the M1-M9 label.
 existing.forEach((shape,index)=>{
  const value=record.lines[index];
  if(value===undefined){shape.delete();return;}
  shape.text=value;
  shape.name='Audience footer '+(index+1);
  shape.position={left:64,top:608+24*index,width:1152,height:index===0?24:22};
  shape.text.style={typeface:H.FONT,fontSize:19,color:H.C.sub,
   bold:index===0,alignment:'left',verticalAlignment:'middle',
   autoFit:'none',wrap:'none',insets:0};
 });
}
