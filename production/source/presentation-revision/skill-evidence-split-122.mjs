/** DEC-0130: split the current120 S65 after all retained source adapters. */
export const CURRENT_SLIDE_COUNT = 122;
const slideId = n => `S${String(n).padStart(2, '0')}`;
export const isSkillEvidenceSlide = id => ['S65','S66','S67'].includes(id);
export const afterSkillEvidenceSplit = id => slideId(Number(id.slice(1)) + (Number(id.slice(1)) > 65 ? 2 : 0));
export const beforeSkillEvidenceSplit = id => isSkillEvidenceSlide(id) ? null : slideId(Number(id.slice(1)) - (Number(id.slice(1)) >= 68 ? 2 : 0));

export function renumberSkillEvidenceText(value) {
 return String(value).replace(
  /(?<![A-Za-z0-9_./-])S(\d{2,3})(?:([–~])(S?)(\d{2,3}))?(?![A-Za-z0-9_./-])/g,
  (whole,start,separator,repeatedS,end) => {
   const shift = n => Number(n) > 65 && Number(n) <= 120 ? Number(n) + 2 : Number(n);
   return `${slideId(shift(start))}${end ? separator + repeatedS + String(shift(end)).padStart(2,'0') : ''}`;
  });
}

export function applySkillEvidenceSplit(slide) {
 for (const shape of slide.shapes.items) {
  const before=String(shape.text),after=renumberSkillEvidenceText(before);
  if(before!==after)shape.text=after;
  if(shape.name)shape.name=renumberSkillEvidenceText(shape.name);
 }
}

export function skillEvidenceFactories(H) {
 const {C,text,rect,line,CODE,FONT}=H;
 const frame=(p,id,title)=>{
  const s=H.frame(p,id,title,'ACT 3 · 재사용 방법을 새 작업에 연결하기');
  for(const shape of [...s.shapes.items]){
   if([621,650].includes(shape.position.top))shape.delete();
   else if(shape.position.top===612)shape.position={...shape.position,top:604};
  }
  text(s,'Codex CLI 0.154.0 기록',64,608,1152,24,19,C.sub,true);
  text(s,'M 연계 · 신규 확장',64,654,1152,18,16,C.sub,false,FONT,'right');
  return s;
 };
 return {
  S65(p) {
   const s=frame(p,'S65','사용할 Skill을 목록에서 찾는다');
   text(s,'이번 작업: 밝기 통계 계산의 성능 조사',64,178,1152,44,31,C.ink,true);
   text(s,'/skills',64,294,250,58,42,C.teal,true,CODE);
   rect(s,340,248,876,240,C.white,C.line,1);
   text(s,'목록에서 확인한 Skill',364,263,828,36,25,C.sub);
   text(s,'graypipe-performance',364,320,828,60,42,C.teal,true,CODE);
   text(s,'Investigate repository performance\nwith reproduc…',364,404,828,66,28,C.sub,false,CODE);
   text(s,'이번 작업에 재사용할 방법을 찾았다',64,548,1152,47,33,C.teal,true);
   return s;
  },
  S66(p) {
   const s=frame(p,'S66','이번 요청에 사용할 Skill을 지정한다');
   // DEC-0137: match S41's prompt chrome; retain provenance in Notes.
   s.shapes.items.find(shape=>String(shape.text)==='Codex CLI 0.154.0 기록').delete();
   text(s,'찾은 이름을 이번 작업 요청에 직접 적었다',64,178,1152,44,31,C.ink,true);
   const promptWindow=rect(s,64,239,1152,300,C.white,C.line,1.5);
   promptWindow.borderRadius=12;
   const chrome=rect(s,65,240,1150,43,'#EDF1F5');chrome.borderRadius=11;
   ['#FF5F57','#FEBC2E','#28C840'].forEach((fill,i)=>{
    s.shapes.add({geometry:'ellipse',name:'Window control '+(i+1),position:{left:82+i*20,top:255,width:12,height:12},fill,line:{fill:'none',width:0}});
   });
   text(s,'작업 요청',155,247,950,29,20,C.sub,true);
   line(s,65,285,1150);
   text(s,'$graypipe-performance',88,286,1104,50,36,C.teal,true,CODE);
   line(s,88,347,1104);
   const prompt=[
    '임시 작업 공간에서 image_statistics의 성능을 조사해줘.',
    '실행 시간 또는 할당량을 개선할 근거가 있는지 확인해줘.',
    '기존 결과 6항목 보존 · 해당 코드 범위만 변경.',
    'trade-off와 근거를 보고하고, 변경하지 않는 결론도 허용.'
   ];
   prompt.forEach((value,i)=>text(s,value,88,361+i*39,i===3?1040:1104,36,28,C.ink));
   s.shapes.add({geometry:'ellipse',name:'Prompt send control',position:{left:1168,top:494,width:28,height:28},fill:C.teal,line:{fill:'none',width:0}});
   s.shapes.add({geometry:'upArrow',name:'Prompt send arrow',position:{left:1176,top:502,width:12,height:12},fill:C.white,line:{fill:'none',width:0}});
   text(s,'재사용할 방법 + 이번 목표·조건을 한 요청에 전달했다',64,551,1152,44,30,C.teal,true);
   return s;
  },
  S67(p) {
   const s=frame(p,'S67','Skill의 지침이 작업에 포함됐는지 확인한다');
   text(s,'같은 밝기 통계 작업의 실행 기록을 확인했다',64,178,1152,44,31,C.ink,true);
   rect(s,64,241,1152,258,C.white,C.line,1);
   text(s,'실행 기록의 <skill> 항목',88,253,1104,36,25,C.sub);
   text(s,'graypipe-performance',88,301,1104,54,40,C.teal,true,CODE);
   text(s,'.agents/skills/graypipe-performance/SKILL.md',88,364,1104,38,27,C.sub,false,CODE);
   line(s,88,417,1104);
   text(s,'SKILL.md의 전체 지침 본문 포함',88,435,1104,49,35,C.ink,true);
   text(s,'지침이 전달된 것은 확인했다',64,520,1152,44,32,C.teal,true);
   text(s,'실제로 지침대로 작업했는지는 작업 기록으로 확인한다',64,565,1152,35,28,C.ink,true);
   return s;
  }
 };
}

export function migrateSkillEvidenceFactories(previous,H) {
 return {
  ...Object.fromEntries(Object.entries(previous).filter(([id])=>id!=='S65')
   .map(([id,factory])=>[afterSkillEvidenceSplit(id),factory])),
  ...skillEvidenceFactories(H)
 };
}
