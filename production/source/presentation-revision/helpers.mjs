export const FONT='Malgun Gothic', CODE='Consolas';
export const C={bg:'#F4F6F8',white:'#FFFFFF',ink:'#17212B',sub:'#4D5A68',line:'#C7D0DA',teal:'#0B6172',pale:'#E0EFF0',warn:'#805400',amber:'#FAEAC9',red:'#B42318',redPale:'#FBE4DF',green:'#176B4D'};
export function text(s,t,x,y,w,h,size=28,color=C.ink,bold=false,font=FONT,align='left'){
 const q=s.shapes.add({geometry:'textbox',name:String(t).slice(0,60),position:{left:x,top:y,width:w,height:h},fill:'none',line:{fill:'none',width:0}});
 q.text=t;q.text.style={typeface:font,fontSize:size,color,bold,alignment:align,verticalAlignment:'middle',autoFit:'none',wrap:'none',insets:0};return q;
}
export function rect(s,x,y,w,h,fill=C.white,stroke='none',lw=0,dash='solid') {return s.shapes.add({geometry:'rect',position:{left:x,top:y,width:w,height:h},fill,line:{fill:stroke,width:lw,style:dash}});}
export function line(s,x,y,w,color=C.line,lw=1,dash='solid'){return s.shapes.add({geometry:'line',position:{left:x,top:y,width:w,height:0},fill:'none',line:{fill:color,width:lw,style:dash}});}
export function arrow(s,x,y,w=48,h=24,color=C.teal){return s.shapes.add({geometry:'rightArrow',position:{left:x,top:y,width:w,height:h},fill:color,line:{fill:'none',width:0}});}
export function frame(p,id,title,eyebrow,source='',boundary='',type='TEACHING_MODEL'){
 const s=p.slides.add();s.background.fill=C.bg;
 text(s,eyebrow,64,48,1030,26,19,C.teal,true);
 text(s,id,1120,48,96,26,19,C.sub,false,FONT,'right');
 text(s,title,64,84,1152,title.includes('\n')?112:64,title.includes('\n')?46:48,C.ink,true);
 const conceptual=type.includes('CONCEPTUAL'),meta=type.includes('META');
 const color=conceptual?C.warn:meta?C.teal:C.line;
 line(s,64,612,1152,color,conceptual||meta?2:1,conceptual?'dash':'solid');
 if(meta)line(s,64,606,1152,color,1);
 text(s,source,64,621,1152,26,19,conceptual?C.warn:C.sub,true);
 text(s,boundary,64,650,1152,22,19,C.sub);
 return s;
}
export function pixels(s,values,x,y,cell=54,colors){ values.forEach((row,i)=>row.forEach((v,j)=>{rect(s,x+j*(cell+4),y+i*(cell+4),cell,cell,colors?.[j]??C.white,C.line,1);text(s,String(v),x+j*(cell+4),y+i*(cell+4),cell,cell,29,C.ink,true,FONT,'center');}));}
export function flow(s,items,{x=64,y=290,w=1152,h=180,fontSize=30,color=C.teal}={}){
 const gap=42,cw=(w-gap*(items.length-1))/items.length;
 items.forEach((item,i)=>{const xx=x+i*(cw+gap);line(s,xx,y,cw,color,3);text(s,item.title??item,xx,y+20,cw,64,fontSize,C.ink,true);if(item.body)text(s,item.body,xx,y+100,cw,h-100,24,C.sub);if(i<items.length-1)arrow(s,xx+cw+9,y+44,24,16,color);});
}
export function rows(s,items,{x=64,y=250,w=1152,rowH=80,labelW=270,fontSize=27}={}){items.forEach((r,i)=>{const yy=y+i*rowH;line(s,x,yy,w);text(s,r[0],x,yy+12,labelW-24,rowH-22,fontSize,C.teal,true);text(s,r[1],x+labelW,yy+12,w-labelW,rowH-22,fontSize,C.ink);});}
export function code(s,t,x,y,w,h,size=26){rect(s,x,y,w,h,C.ink);return text(s,t,x+24,y+16,w-48,h-32,size,C.white,false,CODE);}
