/** DEC-0158: insert the product tip after the external-state example. */
import {addPracticalTipBadge} from './practical-tips.mjs';
import {drawWorkspaceTipRows} from './agents-scope-tips.mjs';

export const CURRENT_SLIDE_COUNT=114;
export const MEMORY_TIP_ID='S94';
const slideId=n=>'S'+String(n).padStart(2,'0');

export function beforeMemoriesTip(id) {
  const n=Number(id.slice(1));
  return n===94?null:slideId(n>94?n-1:n);
}

function shiftReferences(value) {
  const shift=n=>String(Number(n)+(Number(n)>=94?1:0)).padStart(2,'0');
  return String(value).replace(
    /(?<![A-Za-z0-9_./-])S(\d{2,3})(?:([–~])(S?)(\d{2,3}))?(?![A-Za-z0-9_./-])/g,
    (_,n,sep,s,end)=>'S'+shift(n)+(end?sep+s+shift(end):'')
  );
}

export function applyMemoriesTipNumbers(slide) {
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
  const s=H.frame(p,'S111',map.S111['Working Title'],'마지막 정리 · 찾아보기 1/3');
  addPracticalTipBadge(s,'찾아보기',H);
  text(s,'필요한 상황이 생기면, 아래 Slide로 돌아오세요',64,174,1152,43,30,C.teal,true);
  const ids=['S13','S48','S56–58','S62','S67','S71',MEMORY_TIP_ID,'S96','S104'];
  const entries=ids.map(id=>({id,fontSize:id===MEMORY_TIP_ID?21.5:24,title:id==='S56–58'?'AGENTS.md의 위치와 적용 범위':map[id]['Working Title']}));
  drawWorkspaceTipRows(s,entries,H);
  text(s,'M 연계 · 찾아보기',996,674,220,23,16,C.sub,false,FONT,'right');
  return s;
}
