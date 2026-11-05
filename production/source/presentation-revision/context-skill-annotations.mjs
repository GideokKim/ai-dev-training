/** DEC-0186: connect repeated context to its document and simplify labels. */
export function contextInstructionFactory(H) {
 const {C,CODE,FONT,text,rect,line,arrow}=H;
 return p=>{
  const s=H.frame(p,'S40','작은 Project Context의 첫 기록','ACT 2  ·  Project Context');
  for(const shape of [...s.shapes.items]){
   if([621,650].includes(shape.position.top))shape.delete();
   else if(shape.position.top===612)shape.position={...shape.position,top:604};
  }
  text(s,'세 요청에 반복되던 공통 기준을 한 곳에',64,170,1152,43,32,C.teal,true);
  text(s,'앞의 세 작업',64,248,236,40,28,C.sub,true);
  ['버그 수정','성능 조사','README 수정'].forEach((label,i)=>{
   text(s,label,64,320+i*68,204,40,29,C.ink,true);
  });
  arrow(s,286,391,40,26);
  text(s,'같은 기준을 공유',64,541,244,36,26,C.teal,true);
  const page=rect(s,352,238,864,346,C.white,C.line,1.5);
  page.name='Shared project instructions document';
  text(s,'AGENTS.md',380,249,808,44,32,C.ink,true,CODE);
  line(s,380,300,808,C.line,1.5);
  text(s,'지정된 테스트 실행',380,311,808,38,30,C.teal,true);
  text(s,'PYTHONPATH=src python3 -m unittest discover -s tests -v',380,352,808,30,23,C.sub,false,CODE);
  ['의존성 추가에는 근거 필요','로컬 합성 데이터 사용','기존 동작 보존'].forEach((label,i)=>{
   const y=396+i*55;
   line(s,380,y-7,808,C.line,1);
   text(s,label,380,y,808,40,30,C.ink,true);
  });
  text(s,'M 연계 · M2',64,654,1152,18,16,C.sub,false,FONT,'right');
  return s;
 };
}

const edits=[
 ['S39','공통 기준이 바뀌면, 세 요청에 어떻게 반영할까?','불필요한 반복을 어떻게 줄일까?'],
 ['S48','C++에 적용하면',null],
 ['S52','해석의 한계',null],
 ['S52','더 넓은 접근도 관찰 · 최소 문서 선택·효율 향상 미입증',null],
 ['S52','최종 CLI 기록 · testing.md는 최종 실행에서 관찰',null],
 ['S52','docs/testing.md *','docs/testing.md'],
 ['S65','/skills','/skill'],
 ['S65','Codex 입력','명령 입력 중'],
 ['S65','Codex CLI 0.154.0 기록',null],
 ['S67','사용 예시 · 생성 지침을 검토하고 실제 요청으로 확인',null]
];

export function applyContextSkillAnnotations(slide,id) {
 for(const [target,before,after] of edits.filter(([target])=>target===id)){
  const found=slide.shapes.items.filter(shape=>String(shape.text)===before);
  if(found.length!==1)throw new Error(`${target}: expected one annotation target: ${before}`);
  if(after===null)found[0].delete();
  else{
   found[0].text.replace(before,after);
   if(found[0].name===before)found[0].name=after;
  }
 }
}
