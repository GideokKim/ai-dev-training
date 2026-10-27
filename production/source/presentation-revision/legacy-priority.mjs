/** Apply DEC-0033 within the existing four slide roles and evidence boundaries. */
export function priorityFactories(factories,H){
 const originalS07=factories.S07;
 const {C,text,line,rect,arrow}=H;
 return {
  S07(p){
   const s=originalS07(p,H);
   const image=s.images.items[0];
   image.position={left:249,top:246,width:782,height:262};
   for(const q of s.shapes.items){
    if(q.position.top===558)q.position={...q.position,top:513};
   }
   text(s,'접근 전: 승인된 도구·계정·자료·권한 범위를 확인한다.',64,561,1152,33,25,C.sub);
   return s;
  },
  S16(p){
   // DEC-0111: retain the four actual headings and annotate five roles outside.
   const s=H.frame(p,'S16','실제 요청에는 무엇을 담았을까?','ACT 1 · 실제 요청에서 다섯 항목 찾기',
    'TRIAL-002 · 실제 요청 발췌·번역 · 다섯 항목은 교육용 주석',
    '명세 해석 예는 원문 밖 설명입니다. 단일 CLI 관찰이며 비교 실험·성과 보장이 아닙니다.','OBSERVED_PRODUCT / TEACHING_MODEL');
   rect(s,64,184,850,382,C.white,C.line,1.5);
   text(s,'TRIAL-002 · 실제 요청 발췌·번역',84,194,810,28,23,C.ink,true);
   line(s,84,229,810);
   const label=(value,y)=>text(s,value,84,y,154,30,19,C.sub,false,H.CODE);
   const body=(value,y)=>text(s,value,250,y,644,29,23.5,C.ink);
   label('Goal:',239);
   body('이 저장소의 crop 경계 테스트 실패를 조사하고 고쳐줘.',239);
   label('Constraints:',282);
   body('끝 좌표 제외 명세 [x_start, x_end)를 지켜줘.',280);
   body('무관한 API 변경·의존성 추가 없이 최소 수정해줘.',310);
   label('Process:',352);
   [
    '01  먼저 현재 실패를 재현해줘.',
    '02  관련 구현과 호출 경로를 조사해줘.',
    '03  수정 전 짧은 계획을 알리고, 승인 대기 없이 계속해줘.'
   ].forEach((value,i)=>{
    if(i===1)rect(s,287,383,208,29,C.amber);
    body(value,351+i*32);
   });
   label('Verification:',480);
   body('관련·전체 테스트를 실행해줘.',477);
   body('가능하면 기존 입력으로 CLI를 실행하고, 최종 변경을 확인해줘.',507);
   body('변경 파일과 정확한 검증 근거를 보고해줘.',537);
   text(s,'요청에서 읽는 다섯 역할',966,194,250,28,22,C.sub,true);
   const annotations=[
    ['목표 · Goal','고칠 실패',239,253,C.teal],
    ['제약 · Constraints','보존·허용 범위',293,307,C.teal],
    ['과정 · Process','작업 순서·수정 전 보고',355,369,C.teal],
    ['맥락 · Context','조사할 대상·위치',409,423,C.warn],
    ['검증 · Verification','확인·보고할 근거',489,503,C.teal]
   ];
   annotations.forEach(([title,detail,y,anchor,color])=>{
    line(s,914,anchor,36,color,1.5);
    text(s,title,966,y,250,30,22,color,true);
    text(s,detail,966,y+31,250,28,21,C.sub);
   });
   // The Context annotation reads the actual investigation target in Process.
   line(s,289,412,202,C.warn,1.5);
   s.shapes.add({geometry:'custom',name:'Context annotation leader',position:{left:491,top:412,width:423,height:11},fill:'none',line:{fill:C.warn,width:1.5},customPaths:[{width:423,height:11,commands:[{moveTo:{x:0,y:0}},{lineTo:{x:409,y:0}},{lineTo:{x:409,y:11}},{lineTo:{x:423,y:11}}]}]});
   rect(s,64,578,1152,27,C.pale);
   text(s,'명세 해석 예 · 4열 입력의 crop 1 3 → 원본 열 1·2, 폭 2',80,578,1120,27,22,C.teal,true);
   return s;
  },
  S20(p){
   const s=H.frame(p,'S20','Generated ≠ Done','ACT 1 · 확인·보고할 근거도 요청에 담기',
    '교육용 결과 인계 예 · TRIAL-002 기록 재구성 · 실제 PR 원문이 아님',
    '검사는 주장과 위험에 맞춰 선택합니다. TRIAL-002에서 benchmark는 수행하지 않았습니다.');
   text(s,'확인·보고도 요청한다',64,207,380,56,34,C.ink,true);
   arrow(s,492,220,80,31);
   text(s,'사람이 완료를 판단',664,207,552,56,38,C.teal,true);
   const rows=[
    ['무엇을 바꿨나?','끝 좌표 명세에 맞춰 crop 구현 1줄 수정'],
    ['무엇으로 확인했나?','관련 3/3 · 전체 11/11 · CLI 샘플·변경 확인'],
    ['무엇이 미확인인가?','성능 미측정 · 현재 Desktop 동작 미검증'],
    ['누가 완료를 판단하나?','근거와 남은 위험을 보고 사람이 결정']
   ];
   rows.forEach((r,i)=>{const y=291+i*60;line(s,64,y,1152);text(s,r[0],64,y+10,296,40,27,C.teal,true);text(s,r[1],380,y+10,836,40,28,C.ink);});
   text(s,'확인 방법·기대 결과·보고할 근거를 완료 조건으로 요청한다.',64,559,1152,37,28,C.teal,true);
   return s;
  },
  S21(p){
   const s=H.frame(p,'S21','Check마다 확인하는 범위','ACT 1 · 완료 조건을 명세로 요청하기',
    'TRIAL-002: 관련·전체 테스트 / CLI 샘플 실행 / 변경 확인 · 우측은 C++ 교육용 도식',
    '실제 Trial은 Python unittest입니다. Benchmark 미실행 · 우측은 새 실행·PASS 결과가 아닙니다.');
   text(s,'요청할 확인',64,197,178,36,25,C.sub,true);
   text(s,'말할 수 있는 범위',252,197,356,36,25,C.sub,true);
   const rows=[['관련 테스트','바뀐 동작의 해당 조건'],['전체 테스트','현재 suite의 회귀 범위'],['CLI 샘플 실행','샘플의 통합 실행 경로'],['변경 내용 확인','변경 범위·의도치 않은 수정'],['성능 측정','측정한 입력·환경의 성능']];
   rows.forEach((r,i)=>{const y=244+i*64;line(s,64,y,544);text(s,r[0],64,y+8,178,45,25,i===4?C.warn:C.teal,true);text(s,r[1],252,y+8,356,45,25,C.ink);});
   text(s,'요청한 명세를 assert로 확인한다',668,190,548,36,28,C.teal,true);
   text(s,'입력 {1, 2, 3, 4} · crop [1, 3)',668,232,548,30,24,C.sub,false,H.CODE);
   const vector=(label,values,y,bad=false)=>{
    text(s,label,668,y+6,153,38,23,bad?C.red:C.teal,true);
    values.forEach((value,i)=>{
     const x=838+i*64,extra=bad&&i===2;
     rect(s,x,y,54,50,extra?C.redPale:C.white,extra?C.red:C.teal,2);
     text(s,String(value),x,y,54,50,32,extra?C.red:C.teal,true,H.FONT,'center');
    });
    text(s,String(values.length)+'개',1060,y+6,156,38,26,bad?C.red:C.teal,true,H.FONT,'right');
   };
   vector('기대 expected',[2,3],276);
   vector('잘못된 actual',[2,3,4],341,true);
   text(s,'제외할 값 4가 있어도 비어 있지 않다',668,400,548,27,23,C.red);
   text(s,'EXPECT_FALSE(actual.empty());',668,434,548,31,24,C.sub,false,H.CODE);
   text(s,'이 조건만으로는 명세 위반을 놓친다',668,466,548,27,23,C.warn,true);
   text(s,'요청한 개수·값·순서를 비교',668,503,548,28,24,C.teal,true);
   text(s,'EXPECT_EQ(actual.size(), 2u);',668,535,548,29,24,C.teal,true,H.CODE);
   text(s,'EXPECT_EQ(actual, expected);',668,566,548,28,24,C.teal,true,H.CODE);
   return s;
  }
 };
}

/** Reserve a small footer inside the existing 72px (at 1080p) safe margin. */
export function addModuleFooter(s,id,record,H){
 if(!record||record.slideId!==id)throw new Error('Missing module mapping '+id);
 for(const q of s.shapes.items){
  const pos=q.position;
  if(pos.left===64&&pos.width===1152){
   if(pos.top===612&&pos.height===0)q.position={...pos,top:604};
   else if(pos.top===606&&pos.height===0)q.position={...pos,top:598};
   else if(pos.top===621)q.position={...pos,top:608,height:24};
   else if(pos.top===650)q.position={...pos,top:632,height:22};
   else if(id==='S101'&&pos.top===577&&pos.height===32)q.position={...pos,top:571};
  }
 }
 const footer=H.text(s,record.footerLabel,64,654,1152,18,16,H.C.sub,false,H.FONT,'right');
 footer.name='Legacy module connection';
}
