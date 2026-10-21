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
   const s=H.frame(p,'S16','더 긴 Prompt보다 분명한 경계','ACT 1 · 같은 요청을 구체화하기',
    '교육용 Before / After · 실제 Trial Prompt나 우월성 비교 실험이 아님',
    '완료 조건과 C++ 적용은 교육용 예시입니다. 특정 Windows·빌드 환경을 검증한 것은 아닙니다.','CONCEPTUAL');
   text(s,'처음 요청',64,209,296,37,27,C.sub,true);
   text(s,'“crop test\n고쳐줘.”',64,282,292,123,41,C.ink,true);
   arrow(s,379,346,46,27);
   text(s,'추가한 정보',466,209,750,37,27,C.teal,true);
   const rows=[['목표·맥락','crop 경계 실패를 조사·수정한다.'],['제약','끝 좌표 제외, 무관한 API·의존성 유지'],['과정','재현 → 조사 → 계획 → 최소 수정'],['검증','집중·전체 Test + CLI smoke + diff']];
   rows.forEach((r,i)=>{const y=258+i*59;line(s,466,y,750);text(s,r[0],466,y+7,146,43,26,C.teal,true);text(s,r[1],626,y+7,590,43,26,C.ink,i===1||i===3);});
   rect(s,64,510,1152,45,C.pale);
   text(s,'완료 조건 예 · 4열 입력의 crop 1 3 → 원본 열 1·2, 폭 2',80,516,1120,33,27,C.teal,true);
   text(s,'C++에도: 출력·API/ABI 보존 범위와 Release 검증 조건을 먼저 정한다.',64,566,1152,32,25,C.sub);
   return s;
  },
  S20(p){
   const s=H.frame(p,'S20','Generated ≠ Done','ACT 1 · 생성 뒤에 남는 판단',
    '교육용 결과 인계 예 · TRIAL-002 기록 재구성 · 실제 PR 원문이 아님',
    '검사는 주장과 위험에 맞춰 선택합니다. TRIAL-002에서 benchmark는 수행하지 않았습니다.');
   text(s,'코드가 나왔다',64,207,380,56,38,C.ink,true);
   arrow(s,492,220,80,31);
   text(s,'완료라고 말할 수 있나?',664,207,552,56,38,C.teal,true);
   const rows=[
    ['변경 이유·범위','끝 좌표 계약에 맞춰 crop 구현 1줄 수정'],
    ['검증 근거·결과','집중 3/3 · 전체 11/11 · CLI smoke · diff'],
    ['미확인 사항','성능 미측정 · 현재 Desktop 동작 미검증'],
    ['사람의 수용 판단','근거와 남은 위험을 보고 완료 여부 결정']
   ];
   rows.forEach((r,i)=>{const y=291+i*60;line(s,64,y,1152);text(s,r[0],64,y+10,296,40,27,C.teal,true);text(s,r[1],380,y+10,836,40,28,C.ink);});
   text(s,'“더 빨라졌다”고 말하려면 → 해당 조건의 성능 측정도 필요',64,559,1152,37,28,C.warn,true);
   return s;
  },
  S21(p){
   const s=H.frame(p,'S21','Check마다 확인하는 범위','ACT 1 · 근거에 맞춰 말하기',
    'TRIAL-002 실제 확인: 집중·전체 테스트 / CLI smoke / diff · 우측은 C++ 교육용 도식',
    '실제 Trial은 Python unittest입니다. Benchmark 미실행 · 우측은 새 실행·PASS 결과가 아닙니다.');
   text(s,'확인 방법',64,197,178,36,25,C.sub,true);
   text(s,'말할 수 있는 범위',252,197,356,36,25,C.sub,true);
   const rows=[['집중 테스트','바뀐 동작의 해당 조건'],['전체 테스트','현재 suite의 회귀 범위'],['CLI smoke','샘플의 통합 실행 경로'],['diff 검토','변경 범위·의도치 않은 수정'],['성능 측정','측정한 입력·환경의 성능']];
   rows.forEach((r,i)=>{const y=244+i*64;line(s,64,y,544);text(s,r[0],64,y+8,178,45,25,i===4?C.warn:C.teal,true);text(s,r[1],252,y+8,356,45,25,C.ink);});
   text(s,'명세를 assert에 담아야 한다',668,190,548,36,28,C.teal,true);
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
   text(s,'개수·값·순서를 명세와 비교',668,503,548,28,24,C.teal,true);
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
   else if(id==='S76'&&pos.top===577&&pos.height===32)q.position={...pos,top:571};
  }
 }
 const footer=H.text(s,record.footerLabel,64,654,1152,18,16,H.C.sub,false,H.FONT,'right');
 footer.name='Legacy module connection';
}
