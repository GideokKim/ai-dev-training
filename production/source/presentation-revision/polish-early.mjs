// Approved presentation polish: distinguish each slide's audience task.
// Original evidence wording and the exact STATE-01 excerpts remain intact.
const make=(id,title,act,source,boundary,type,draw)=>(p,H)=>{
  const s=H.frame(p,id,title,act,source,boundary,type);
  draw(s,H);
  return s;
};

export const slides={
S11:make('S11','Task에는 무엇이 아직 정해지지 않았을까?','ACT 1 · 모호한 작업 요청',
  '교육용 구성 사례 · 실제 Agent 실패나 Trial 결과가 아님',
  'Repository는 열려 있어도 작업의 목표·보존 조건·완료 기준이 자동으로 정해지지는 않습니다.','CONCEPTUAL',
  (s,{C,text,rect,line,arrow})=>{
    text(s,'같은 Repository를 보고 있습니다.',64,207,1152,42,29,C.sub);
    rect(s,64,294,456,204,C.white,C.line,1);
    text(s,'요청',88,311,408,36,26,C.sub,true);
    text(s,'“filter 성능\n개선해줘.”',88,365,408,108,39,C.ink,true);
    arrow(s,554,378,48,27);
    [['바꿀 것','무엇을 바꿀까?'],['보존할 것','무엇을 그대로 지킬까?'],['완료 근거','무엇을 보면 끝났다고 할까?']].forEach((a,i)=>{
      const y=277+i*105;
      text(s,a[0],650,y,566,34,24,C.sub,true);
      line(s,650,y+78,566,C.line,2);
      text(s,a[1],650,y+32,520,42,30,C.teal,true);
      text(s,'?',1163,y+31,53,43,31,C.teal,true);
    });
  }),
S12:make('S12','요청만으로는 의도가 보이지 않는다','ACT 1 · 앞서 본 crop 사례로 좁히기',
  '교육용 구성 사례 · TRIAL-002의 실제 Prompt가 아님',
  '짧은 요청을 비난하거나 이 요청이 특정 실패를 만들었다고 주장하지 않습니다.','CONCEPTUAL',
  (s,{C,text,line,rect,arrow})=>{
    text(s,'“crop test 고쳐줘”',64,213,1152,69,48,C.ink,true);
    s.shapes.add({geometry:'downArrow',position:{left:628,top:298,width:24,height:31},fill:C.teal,line:{fill:'none',width:0}});
    line(s,320,337,640,C.line,2);
    rect(s,64,357,540,111,C.white,C.line,1);
    rect(s,676,357,540,111,C.white,C.line,1);
    text(s,'테스트를 바꿀까?',86,382,496,61,37,C.teal,true);
    text(s,'구현을 바꿀까?',698,382,496,61,37,C.teal,true);
    text(s,'아직 정해지지 않은 정보',64,498,1152,37,27,C.sub,true);
    ['목표의 세부','보존 조건','수정 범위','확인 근거','완료 조건'].forEach((v,i)=>text(s,`${v} ?`,64+234*i,549,214,37,27,C.ink));
  }),
S14:make('S14','개발자가 정해야 하는 경계','ACT 1 · 요청을 보내기 전의 질문',
  '이 과정의 질문 틀 · 정답을 제시하는 분류 시험이 아님',
  '마지막 1분은 익숙한 작업 하나를 조용히 떠올려 보세요.','CONCEPTUAL',
  (s,{C,text,line,rect})=>{
    text(s,'이번 작업에서 사람이 정할 질문은?',64,209,1152,43,31,C.sub);
    const qs=[['무엇을 바꿀까?','무엇을 유지할까?'],['어디까지 바꿔도 될까?','무슨 근거로 확인할까?']];
    qs.forEach((r,j)=>r.forEach((q,i)=>{
      const x=64+i*612,y=281+j*108;
      text(s,String(j*2+i+1).padStart(2,'0'),x,y,65,43,25,C.teal,true);
      text(s,q,x+75,y,465,49,32,C.ink,true);
      line(s,x+75,y+68,465);
    }));
    rect(s,64,516,1152,71,C.pale);
    text(s,'05',84,530,65,42,25,C.teal,true);
    text(s,'언제 완료라고 할까?',169,525,1023,52,36,C.teal,true);
  }),
S15:make('S15','Task Specification의 다섯 책임','ACT 1 · 작업을 구체화하는 틀',
  '이 과정의 교육 모델 · 공식 OpenAI 분류나 모든 작업에 대한 법칙이 아님',
  '저장소에서 확인할 사실은 조사하게 하고, 사람이 정할 목표·제약·완료 기준은 요청에 담습니다.','TEACHING_MODEL',
  (s,{C,text,rect,line})=>{
    text(s,'앞의 질문을, 요청 문장의 다섯 항목으로 정리한다',64,164,1152,30,23,C.sub);
    rect(s,64,204,1152,388,C.white,C.line,1);
    rect(s,64,204,322,388,C.pale);
    text(s,'하나의\nTask\nSpecification',88,268,274,176,36,C.teal,true);
    const rs=[['목표 · Goal','원하는 결과·우선순위'],['맥락 · Context','저장소에서 조사할 사실'],['제약 · Constraints','지킬 동작·변경 범위'],['과정 · Process','요청할 작업 순서·경계'],['검증 · Verification','요청할 확인·보고 내용']];
    rs.forEach((r,i)=>{const y=218+i*72;text(s,r[0],416,y,312,45,27,C.teal,true);text(s,r[1],755,y,437,45,28,C.ink);if(i<4)line(s,416,y+57,776);});
  }),
S16:make('S16','더 긴 Prompt보다 분명한 경계','ACT 1 · 같은 요청을 구체화하기',
  '교육용 Before / After · 실제 Trial Prompt나 우월성 비교 실험이 아님',
  'C++ 적용도 작업 경계를 정하는 예시입니다. 특정 Windows·빌드 환경을 검증한 것은 아닙니다.','CONCEPTUAL',
  (s,{C,text,rect,line,arrow})=>{
    text(s,'처음 요청',64,209,296,37,27,C.sub,true);
    text(s,'“crop test\n고쳐줘.”',64,282,292,123,41,C.ink,true);
    arrow(s,379,346,46,27);
    text(s,'추가한 정보',466,209,750,37,27,C.teal,true);
    const rs=[['목표·맥락','crop 경계 실패를 조사·수정한다.'],['제약','끝 좌표 제외, 무관한 API·의존성 유지'],['과정','재현 → 조사 → 계획 → 최소 수정'],['검증','집중·전체 Test + CLI smoke + diff']];
    rs.forEach((r,i)=>{const y=270+i*64;line(s,466,y,750);text(s,r[0],466,y+10,146,43,27,C.teal,true);text(s,r[1],626,y+10,590,43,27,C.ink,i===1||i===3);});
    rect(s,64,553,1152,46,C.pale);
    text(s,'C++에도: 출력·API/ABI 보존 범위와 Release 검증 조건을 먼저 정한다.',80,559,1120,35,27,C.teal);
  }),
S31:make('S31','반복하는 설명을 두 범주로 나누기','ACT 1 · 정보의 수명과 범위',
  '교육용 후보 예시 · 모든 프로젝트에 적용되는 유일한 분류가 아님',
  '다음 질문: Project 정보를 왜 매번 Prompt에 다시 적고 있을까요?','CONCEPTUAL',
  (s,{C,text,line,rect})=>{
    text(s,'테스트 명령과 보존 조건을, 다음 요청에도 다시 쓴다면?',64,172,1152,32,26,C.sub);
    text(s,'이번 Task',64,223,542,46,34,C.teal,true);
    text(s,'계속 유지할 Project 정보',704,223,512,46,32,C.teal,true);
    [['crop 경계 수정','이번에는 README만 수정'],['의존성 추가에는 작업상 근거 필요','프로젝트 전체 테스트 명령']].forEach((r,i)=>{
      const x=i?704:64,w=i?512:542;
      rect(s,x,298,w,188,C.white,C.line,1);
      text(s,r.join('\n'),x+20,322,w-40,125,i?28:31,C.ink);
      text(s,i?'여러 작업에서 참고할 후보':'이번 목표에 적용할 후보',x,504,w,39,26,C.sub);
    });
    text(s,'다음 작업에도 필요한 설명은, 어디에 두면 좋을까?',64,555,1152,39,30,C.teal,true);
  }),
S33:make('S33','작은 Project Context의 첫 기록','ACT 2  ·  Project Context',
  'OBSERVED PRODUCT  |  STATE-01 · AGENTS.md 실제 원문 발췌',
  '파일의 내용과 기록 위치를 보여주는 장 · Agent의 활용 관찰은 다음 장에서 확인','OBSERVED_PRODUCT',
  (s,{C,text,line,CODE})=>{
    text(s,'반복해서 설명하던 내용을 저장소에 남겼다',64,170,1152,43,32,C.teal,true);
    text(s,'AGENTS.md',64,231,380,44,34,C.ink,true,CODE);
    text(s,'STATE-00-FIXED → STATE-01',750,237,466,34,22,C.sub,false,CODE,'right');
    const rows=[
      ['프로젝트 목적','Local grayscale image-processing CLI using synthetic ASCII PGM data.','로컬 합성 이미지로 동작하는 흑백 처리 CLI'],
      ['실행 방법','Use the prepared build and CLI commands documented in `README.md`.','실행 방법은 README에서 확인'],
      ['테스트 명령','PYTHONPATH=src python3 -m unittest discover -s tests -v','반복해서 쓸 테스트 명령'],
      ['기본 제약','Keep changes scoped and verify relevant behavior.','범위를 지키고 관련 동작을 검증'],
    ];
    rows.forEach((r,i)=>{
      const y=287+i*77;line(s,64,y,1152);
      text(s,r[0],64,y+16,223,39,25,C.sub,true);
      const original=text(s,r[1],310,y+5,906,30,i===2?24:23,C.sub,false,i===2?CODE:undefined);
      if(i===0)original.text.get('grayscale image-processing CLI').bold=true;
      if(i===1)original.text.get('README.md').bold=true;
      if(i===3)original.text.get('scoped and verify').bold=true;
      text(s,r[2],310,y+37,906,35,27,C.teal,true);
    });
  }),
S35:make('S35','Task Prompt와 Project Context','ACT 2 · 정보의 범위와 수명',
  '교육용 구분 · 현재 목표와 지속되는 프로젝트 사실',
  'C++에서도 프로젝트 공통 제약과 이번 알고리즘 변경 조건은 범위가 다를 수 있다','TEACHING_MODEL',
  (s,{C,text,line,rect,arrow})=>{
    text(s,'방금 본 기록을 범위와 수명으로 읽어보면',64,208,1152,43,30,C.teal,true);
    text(s,'Task Prompt',64,281,516,45,34,C.ink,true);
    text(s,'Project Context',704,281,512,45,34,C.ink,true);
    line(s,64,345,516);line(s,704,345,512,C.teal,3);
    text(s,'지금 원하는 결과',64,363,516,36,26,C.sub,true);
    text(s,'계속 참이어야 할 사실',704,363,512,36,26,C.teal,true);
    text(s,'crop 경계 버그 수정\n이번에는 README만 변경',64,417,516,91,29,C.ink);
    text(s,'프로젝트의 테스트 명령\n의존성 추가에는 작업상 근거 필요',704,417,512,91,28,C.ink);
    rect(s,64,540,516,49,C.white,C.line,1);
    rect(s,704,540,512,49,C.pale);
    text(s,'다음 작업에서는 목표가 달라짐',80,547,484,36,25,C.sub,true);
    text(s,'여러 작업에서 다시 참고',720,547,480,36,27,C.teal,true);
  }),
S39:make('S39','Long Context 연구가 말해주는 범위','ACT 2 · 정보의 양을 다시 묻는 연구',
  'Liu et al., Lost in the Middle, TACL 2024 · RepoQA, 2024',
  '특정 모델·과제의 결과 · 현재 Codex의 Repository coding 한계를 입증하지 않음','RESEARCH',
  (s,{C,text,line,rect,arrow})=>{
    text(s,'더 많은 Context가 항상 더 좋은 것은 아니다',64,195,1152,44,32,C.teal,true);
    text(s,'Lost in the Middle',64,259,550,40,29,C.ink,true);
    text(s,'RepoQA',704,259,512,40,29,C.ink,true);
    text(s,'여러 문서의 질문 답변 · key-value 검색',64,306,550,32,24,C.sub);
    text(s,'50개 Repository의 코드 검색 과제',704,306,512,32,24,C.sub);
    text(s,'관련 정보의 위치를 달리하는 구성',64,351,550,32,24,C.sub,true);
    [0,2,4].forEach((target,row)=>{for(let i=0;i<5;i++){
      const x=64+i*107,y=398+row*30;
      rect(s,x,y,96,19,i===target?C.teal:C.white,C.line,1);
    }});
    text(s,'질문',704,355,114,38,26,C.teal,true);
    arrow(s,828,365,36,21);
    rect(s,884,349,332,119,C.white,C.line,1);
    text(s,'Repository의 코드',902,362,296,35,26,C.ink,true);
    text(s,'관련 코드 찾기',902,410,296,35,26,C.teal,true);
    text(s,'관련 정보의 위치가\n일부 조건에서 중요할 수 있다',64,499,550,70,28,C.ink,true);
    text(s,'관련 코드 정보를\n선택하고 찾는 능력을 평가',704,499,512,70,28,C.ink,true);
    text(s,'aclanthology.org/2024.tacl-1.9/',64,577,550,27,19,C.sub,false,'Consolas');
    text(s,'arxiv.org/abs/2406.06025',704,577,512,27,19,C.sub,false,'Consolas');
  }),
S40:make('S40','필요한 상세 정보로 가는 길','ACT 2 · 필요한 상세 정보의 탐색 경로',
  '교육용 Routing 모델 · 실제 문서 접근 결과는 다음 구간에서 확인',
  '검색 성능 향상이나 토큰 절약을 입증한 그림이 아님','TEACHING_MODEL',
  (s,{C,text,line,rect,arrow})=>{
    text(s,'어떤 질문에서 어떤 상세 정보가 필요할까?',64,222,1152,44,32,C.teal,true);
    const rs=[{x:64,w:310,head:'Task',body:'지금 해결할 질문'},{x:449,w:337,head:'Core Context',body:'프로젝트 안내와\n찾아갈 위치'},{x:862,w:354,head:'관련 상세 정보',body:'질문에 필요한\n계약 · 구조 · 테스트'}];
    rs.forEach((r,i)=>{line(s,r.x,318,r.w,i===0?C.ink:C.teal,3);text(s,r.head,r.x,342,r.w,45,30,C.ink,true);text(s,r.body,r.x,418,r.w,82,28,C.sub);if(i<2)arrow(s,r.x+r.w+20,374,35,23);});
    text(s,'C++ 예: 공통 제약을 확인한 뒤, 해당 알고리즘의 계약으로',64,552,1152,37,26,C.sub);
  }),
S41:make('S41','Core Context에서 상세 정보로 가는 길','ACT 2 · Core에 남길 기본 안내',
  '교육용 정보 설계 · Root/Core는 상세 정보의 출발점',
  'C++ 예: build/test 진입점과 기본 제약 → 알고리즘 계약·하드웨어 조건','TEACHING_MODEL',
  (s,{C,text,line,rect,arrow})=>{
    text(s,'무엇을 항상 읽고, 무엇을 필요할 때 찾게 할까?',64,209,1152,44,31,C.teal,true);
    rect(s,64,286,438,242,C.pale);
    text(s,'CORE · 기본 안내',88,301,390,41,30,C.teal,true);
    text(s,'프로젝트의 목적\n항상 지켜야 할 제약\n상세 정보를 찾을 위치',88,361,390,137,29,C.ink,true);
    arrow(s,542,393,53,29);
    text(s,'DETAIL · 필요한 상세',650,286,566,41,30,C.ink,true);
    [['architecture','모듈과 처리 순서'],['image contracts','이미지 동작의 계약'],['testing','테스트 위치와 범위']].forEach((r,i)=>{const y=345+i*63;line(s,650,y,566);text(s,r[0],650,y+11,237,39,25,C.teal,true);text(s,r[1],903,y+11,313,39,25,C.sub);});
    text(s,'모든 지식을 넣기보다, 상세 정보까지 가는 길을 안내한다',64,557,1152,37,29,C.ink,true);
  }),
};
