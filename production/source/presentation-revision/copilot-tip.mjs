/** DEC-0101: add one company IDE tip after the retained S03. */
export const CURRENT_SLIDE_COUNT = 117;
export function afterCopilotTip(id) {
 const n=Number(id.slice(1));
 return `S${String(n+(n>=4?1:0)).padStart(2,'0')}`;
}
export function copilotReferences(value) {
 return String(value).replace(/(?<![A-Za-z0-9_])S(\d{2,3})(?:([–~])(\d{2,3}))?(?![\d_.-])/g,
  (whole,n,separator,end)=>{
   const start=Number(n)<=116?afterCopilotTip(`S${n}`):`S${n}`;
   return end?start+separator+afterCopilotTip(`S${end}`):start;
  });
}
export function migrate116Factories(previous) {
 return Object.fromEntries(Object.entries(previous).map(([id,factory])=>[
  afterCopilotTip(id),(p,H)=>{
   const slide=factory(p,H);
   for(const shape of slide.shapes.items){
    const before=String(shape.text),after=copilotReferences(before);
    if(before!==after)shape.text=after;
    if(shape.name)shape.name=copilotReferences(shape.name);
   }
   return slide;
  }
 ]));
}
export function copilotTipFactory(p,H) {
 const {C,text,rect,line,FONT,CODE}=H;
 const s=H.frame(p,'S04','코드 질문은 VS Code의 Copilot Chat에서',
  'ACT 0 · 회사에서 사용하는 GitHub Copilot',
  'GitHub Docs · VS Code Docs | 사용 방법을 재구성한 교육용 UI 도식',
  '실제 회사 화면·응답 아님 · 전달할 코드를 확인하고, 답을 다시 확인한다.',
  'TEACHING_MODEL');
 text(s,'앞의 C++ 예제도, 편집기 안에서 바로 질문해 보세요',64,160,1152,36,28,C.teal,true);
 // Reconstructed, editable editor/chat diagram, not an execution capture.
 rect(s,64,214,1152,316,C.white,C.line,1.5);
 rect(s,64,214,1152,36,'#E8EDF3');
 text(s,'Visual Studio Code',84,216,800,30,20,C.sub,true);
 rect(s,670,250,546,280,'#EEF4F5');
 text(s,'demo.cpp · 질문할 코드 선택',88,266,550,34,24,C.ink,true);
 rect(s,88,314,558,94,C.pale);
 text(s,'std::vector<int> a(3, 1);',104,324,530,30,25,C.ink,false,CODE);
 text(s,'std::vector<int> b{3, 1};',104,364,530,30,25,C.ink,false,CODE);
 text(s,'질문에 필요한 두 줄만 선택',88,441,552,34,24,C.sub);
 text(s,'GitHub Copilot Chat',698,266,486,34,24,C.ink,true);
 rect(s,698,314,486,44,C.white,C.line,1);
 text(s,'＋ Context: 선택한 코드 첨부',714,320,454,31,22,C.teal,true);
 rect(s,698,372,486,134,C.white,C.line,1.5);
 text(s,'두 vector의 원소 개수와 값이\n왜 다른지 설명해줘.\n코드는 수정하지 마.',714,383,454,88,24,C.ink);
 text(s,'Ask · 코드 설명 요청',714,475,454,24,18,C.sub);
 // A single connected operating sequence below the reconstructed window.
 const steps=[['1','코드 선택'],['2','Context 첨부·확인'],['3','질문하고 답 확인']];
 steps.forEach(([n,label],i)=>{
  const x=64+i*400;
  text(s,n,x,552,36,38,28,C.teal,true);
  text(s,label,x+44,552,324,38,27,C.ink,true);
  if(i<2)s.shapes.add({
   geometry:'connector',kind:'straight',
   name:`Copilot workflow step ${i+1} to ${i+2}`,
   position:{left:x+306,top:571,width:66,height:0},
   line:{fill:C.teal,width:2},
   tail:{type:'triangle',width:'med',length:'med'}
  });
 });
 return s;
}
