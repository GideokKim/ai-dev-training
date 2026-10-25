/** DEC-0090: quiet ACT title pages with the user-approved titles/subtitles. */
export function actTitleFactories(config, H) {
 const {C,FONT,text,line}=H;
 return Object.fromEntries(config.titleSlides.map(item=>[item.slideId,p=>{
  const s=p.slides.add();
  s.background.fill=C.bg;
  text(s,`ACT ${item.act}`,64,48,1030,36,24,C.teal,true);
  text(s,item.slideId,1120,48,96,26,19,C.sub,false,FONT,'right');
  line(s,64,196,96,C.teal,3);
  text(s,item.displayTitle,64,238,1152,178,64,C.ink,true);
  text(s,item.subtitle,64,444,1152,52,30,C.teal);
  text(s,'ChatGPT & Codex · 개발자 교육',64,644,768,30,19,C.sub);
  return s;
 }]));
}
