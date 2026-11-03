/** Product tips added to the retained 113-slide course by DEC-0158/0159. */
import {addPracticalTipBadge,drawTipIndexEntries} from './practical-tips.mjs';
import {drawWorkspaceTipRows} from './agents-scope-tips.mjs';

export const CURRENT_SLIDE_COUNT=115;
export const MEMORY_TIP_ID='S94';
export const GOAL_TIP_ID='S99';
const slideId=n=>'S'+String(n).padStart(2,'0');

export function beforeProductTips(id) {
  const n=Number(id.slice(1));
  if (id===MEMORY_TIP_ID || id===GOAL_TIP_ID) return null;
  return slideId(n - Number(n>94) - Number(n>99));
}

function shiftReferences(value) {
  const shift=n=>String(Number(n)+Number(n>=94)+Number(n>=98)).padStart(2,'0');
  return String(value).replace(
    /(?<![A-Za-z0-9_./-])S(\d{2,3})(?:([–~])(S?)(\d{2,3}))?(?![A-Za-z0-9_./-])/g,
    (_,n,sep,s,end)=>'S'+shift(n)+(end?sep+s+shift(end):'')
  );
}

export function applyProductTipNumbers(slide) {
  for (const shape of slide.shapes.items) {
    const before=String(shape.text),after=shiftReferences(before);
    if (before!==after) shape.text.replace(before,after);
    if (shape.name) shape.name=shiftReferences(shape.name);
  }
}

export function codexMemoriesTip(p,H,title) {
  const {C,FONT,CODE,text,line}=H;
  const s=H.frame(p,MEMORY_TIP_ID,title,'ACT 4 · 데스크톱 Codex 사용 팁',
    'OpenAI · Memories','','DOCUMENTED_PRODUCT');
  addPracticalTipBadge(s,'Context 관리',H);
  text(s,'활용 예시',64,178,130,39,23,C.teal,true);
  text(s,'“검토 결과는 영향이 큰 순서로 보여줘.”',197,166,1015,61,36,C.ink,true);
  text(s,'이전에 말한 선호를 다음 코드 리뷰에서도 참고할 수 있다.',197,233,1015,44,27,C.sub);
  line(s,64,306,547,C.teal,2);
  line(s,672,306,544,C.teal,2);
  text(s,'01   이 기기에서 켜기',64,324,547,46,29,C.ink,true);
  text(s,'Settings → Personalization',64,392,547,42,27,C.sub);
  text(s,'Enable Codex memories',64,443,547,43,29,C.teal,true);
  text(s,'02   이번 대화에서 선택하기',672,324,544,46,29,C.ink,true);
  text(s,'/memories',672,386,544,47,31,C.teal,true,CODE);
  text(s,'기존 메모리를 참고할지',672,444,544,35,24,C.ink);
  text(s,'이 대화를 새 메모리에 반영할지',672,487,544,35,24,C.ink);
  text(s,'검증 결과와 남은 일은 상태 파일(state.md)에 남긴다.',64,552,1152,48,29,C.ink,true);
  text(s,'M 연계 · 신규 확장',988,674,228,23,16,C.sub,false,FONT,'right');
  return s;
}

export function workspaceTipIndex(p,H,map) {
  const {C,FONT,text}=H;
  const s=H.frame(p,'S112',map.S112['Working Title'],'마지막 정리 · 찾아보기 1/3');
  addPracticalTipBadge(s,'찾아보기',H);
  text(s,'필요한 상황이 생기면, 아래 Slide로 돌아오세요',64,174,1152,43,30,C.teal,true);
  const ids=['S13','S48','S56–58','S62','S67','S71',MEMORY_TIP_ID,'S96','S105'];
  const entries=ids.map(id=>({id,fontSize:id===MEMORY_TIP_ID?21.5:24,title:id==='S56–58'?'AGENTS.md의 위치와 적용 범위':map[id]['Working Title']}));
  drawWorkspaceTipRows(s,entries,H);
  text(s,'M 연계 · 찾아보기',996,674,220,23,16,C.sub,false,FONT,'right');
  return s;
}

function codexGoalTip(p,H,title) {
  const {C,FONT,text,line,rect}=H;
  const s=H.frame(p,GOAL_TIP_ID,title,'ACT 4 · Codex 목표 설정',
    'OpenAI · Using Goals in Codex','','DOCUMENTED_PRODUCT');
  addPracticalTipBadge(s,'검증·개선',H);
  text(s,'같은 대화에서 턴이 바뀌어도 목표를 유지하고 완료 근거를 확인한다.',64,169,1152,52,31,C.ink,true);
  const window=rect(s,64,249,1152,243,C.white,C.line,1.5);window.borderRadius=12;
  const chrome=rect(s,65,250,1150,43,'#EDF1F5');chrome.borderRadius=11;
  ['#FF5F57','#FEBC2E','#28C840'].forEach((fill,i)=>{
    s.shapes.add({geometry:'ellipse',name:'Window control '+(i+1),
      position:{left:82+i*20,top:265,width:12,height:12},fill,line:{fill:'none',width:0}});
  });
  text(s,'Codex 요청 예시',156,257,950,29,20,C.sub,true);
  line(s,65,295,1150);
  const prompt=[
    '/goal 밝기 통계의 임시 메모리 사용량을 줄여줘.',
    '기존 출력 6개가 같고, 같은 입력에서 기준판보다 최대 할당량이 낮으면 완료해.',
    '측정할 수 없으면 중단하고 이유를 알려줘.'
  ].join('\n');
  text(s,prompt,95,316,1088,144,29,C.ink,true);
  text(s,'Codex CLI',64,525,181,51,25,C.sub,true);
  text(s,'/goal pause',253,525,224,51,29,C.teal,true,H.CODE);
  text(s,'일시정지',475,525,147,51,25,C.ink);
  text(s,'/goal resume',677,525,238,51,29,C.teal,true,H.CODE);
  text(s,'재개',918,525,192,51,25,C.ink);
  text(s,'M 연계 · 신규 확장',988,674,228,23,16,C.sub,false,FONT,'right');
  return s;
}

function verificationTipIndex(p,H,map) {
  const id='S114';
  const s=H.frame(p,id,map[id]['Working Title'],'마지막 정리 · 찾아보기 3/3');
  addPracticalTipBadge(s,'찾아보기',H);
  H.text(s,'필요한 상황이 생기면, 아래 Slide로 돌아오세요',64,174,1152,43,30,H.C.teal,true);
  const entries=['S83','S85','S96',GOAL_TIP_ID,'S108','S109'].map(slideId=>({
    slideId,title:map[slideId]['Working Title'],fontSize:slideId===GOAL_TIP_ID?22:25
  }));
  drawTipIndexEntries(s,entries,H);
  H.text(s,'M 연계 · 찾아보기',64,654,1152,28,16,H.C.sub,false,H.FONT,'right');
  return s;
}

export function productTipFactories(H,map) {
  return {
    [MEMORY_TIP_ID]:p=>codexMemoriesTip(p,H,map[MEMORY_TIP_ID]['Working Title']),
    [GOAL_TIP_ID]:p=>codexGoalTip(p,H,map[GOAL_TIP_ID]['Working Title']),
    S112:p=>workspaceTipIndex(p,H,map),
    S114:p=>verificationTipIndex(p,H,map)
  };
}
