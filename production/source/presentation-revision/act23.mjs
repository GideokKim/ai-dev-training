// ACT 2–3 presentation revision. S33 and S55 use the approved pilot.
import {readFileSync} from 'node:fs';
const contextGrowthImage=new Uint8Array(readFileSync(new URL('../../../assets/slide-illustrations/context-growth/agents-growth.png',import.meta.url)));
const make=(id,title,act,source,boundary,type,draw)=>(p,H)=>{
  const s=H.frame(p,id,title,act,source,boundary,type);
  draw(s,H);
  return s;
};

export const slides={
S32:make('S32','다른 Task에 같은 설명이 반복된다','ACT 2 · 반복되는 프로젝트 설명',
  '교육용 구성 사례 · Bug fix / Performance / README 작업',
  '서로 다른 요청에 같은 프로젝트 정보가 반복되는 상황을 보여준다','TEACHING_MODEL',
  (s,{C,text,rect,line})=>{
    const xs=[64,456,848];
    const heads=['버그 수정','성능 조사','README 수정'];
    const goals=['crop 경계를 수정해줘','통계 계산을 조사해줘','빌드 안내를 명확히 해줘'];
    xs.forEach((x,i)=>{
      text(s,heads[i],x,232,360,36,27,C.teal,true);
      text(s,goals[i],x,284,360,44,27,C.ink,true);
      line(s,x,344,360);
      rect(s,x,364,360,154,C.pale);
      text(s,'지정된 테스트 실행\n의존성 추가에는 근거 필요\n로컬 합성 데이터 사용\n기존 동작 보존',x+16,378,328,126,25,C.ink);
    });
    text(s,'요청은 다른데, 아래 설명은 왜 계속 같을까?',64,549,1152,40,31,C.teal,true);
  }),

S34:make('S34','AGENTS.md의 지침대로 검증했다','ACT 2 · 프로젝트 작업 지침을 실제 실행에 적용',
  'TRIAL-003 · 실제 요청 발췌·번역 / 실행 기록 요약 · Codex CLI 0.154.0',
  'Skills도 실행 · README-only는 Prompt에도 명시 · AGENTS.md 단독 효과·강제 준수 보장은 미입증','OBSERVED_PRODUCT',
  (s,{C,text,rect,line,arrow,CODE})=>{
    text(s,'Task Prompt',64,177,448,36,26,C.teal,true);
    text(s,'저장소의 작업 지침',576,177,328,36,26,C.teal,true);
    text(s,'실행 기록',968,177,248,36,26,C.teal,true);
    const prompt=rect(s,64,224,448,253,C.white,C.line,1.5);
    prompt.borderRadius=12;
    text(s,'실제 요청 · 핵심 발췌·번역',84,235,408,29,23,C.sub,true);
    line(s,84,274,408);
    text(s,'README의 Test 섹션을 고쳐줘.\n과거 STATE-00 실패와\n현재 checkout을 구분해줘.\n근거 없는 주장은 하지 마.\nREADME.md만 변경하고,\n최종 diff·검증 근거를 보고해줘.',84,283,408,181,24,C.ink);
    text(s,'원문 밖 주석',64,489,448,25,20,C.sub,true);
    text(s,'실제 요청에는 테스트 명령 미포함',64,518,448,30,24,C.sub);
    rect(s,576,224,328,253,C.pale,C.teal,1.5);
    text(s,'AGENTS.md',596,248,288,46,32,C.teal,true,CODE);
    text(s,'프로젝트 작업 규칙',596,307,288,28,23,C.sub);
    line(s,596,350,288);
    text(s,'지정된 명령으로\n전체 테스트를 실행',596,366,288,70,25,C.ink,true);
    text(s,'지침의 명령을 실제 사용',596,445,288,25,21,C.teal,true);
    text(s,'전체 테스트',968,270,248,43,31,C.ink,true);
    text(s,'11 / 11',968,333,248,67,50,C.green,true);
    text(s,'PASS',968,414,248,39,29,C.green,true);
    arrow(s,526,333,24,23);arrow(s,918,333,24,23);
    text(s,'Prompt 밖의 테스트 지침을 실제 실행에 적용했다',64,565,1152,36,30,C.teal,true);
  }),

S35:make('S35','Task Prompt와 Project Context','ACT 2 · 정보의 범위와 수명',
  '교육용 구분 · 현재 목표와 지속되는 프로젝트 사실',
  'C++에서도 프로젝트 공통 제약과 이번 알고리즘 변경 조건은 범위가 다를 수 있다','TEACHING_MODEL',
  (s,{C,text,line,rect})=>{
    text(s,'이번 작업이 끝나면?',64,230,1152,40,31,C.teal,true);
    const cols=[{x:64,head:'Task Prompt',sub:'지금 원하는 결과',a:'crop 경계 버그 수정',b:'이번에는 README만 변경',tail:'다음 작업에서는 목표가 달라짐'},
      {x:682,head:'Project Context',sub:'계속 참이어야 할 사실',a:'프로젝트의 테스트 명령',b:'의존성 추가에는 작업상 근거 필요',tail:'여러 작업에서 다시 참고'}];
    cols.forEach(c=>{line(s,c.x,298,534,C.teal,3);text(s,c.head,c.x,319,534,45,34,C.ink,true);text(s,c.sub,c.x,373,534,36,28,C.teal);text(s,c.a+'\n'+c.b,c.x,432,534,89,28,C.ink);rect(s,c.x,540,534,48,C.pale);text(s,c.tail,c.x+16,546,502,36,25,C.ink,true);});
  }),

S36:make('S36','정확한 정보도 계속 늘어난다','ACT 2 · Context가 쌓이는 과정',
  '실제 AGENTS.md 전후 내용을 바탕으로 재구성 · 문서는 교육용 생성 도식',
  '이야기 속 두 시점 비교 · 정보 증가가 실패를 일으켰다는 관찰은 아님','OBSERVED_PRODUCT',
  (s,{C,text,line,arrow,CODE})=>{
    text(s,'프로젝트 초기',64,197,300,43,31,C.sub,true);
    text(s,'현재 프로젝트',428,197,350,43,31,C.teal,true);
    s.images.add({blob:contextGrowthImage,contentType:'image/png',fit:'contain',
      alt:'교육용 생성 도식. 같은 폭의 초기 AGENTS.md와 기존 회색 정보 아래 청록색 새 정보가 늘어난 문서를 비교한다. 실제 문서 캡처나 정량 비교가 아님.',
      position:{left:64,top:238,width:554,height:342},
      crop:{left:317/1942,right:312/1942,top:0,bottom:0}});
    text(s,'AGENTS.md',84,301,155,28,22,C.ink,true,CODE,'center');
    text(s,'AGENTS.md',449,301,155,28,22,C.ink,true,CODE,'center');
    text(s,'프로젝트 진행',270,344,150,30,23,C.sub,true,undefined,'center');
    arrow(s,307,389,68,28);
    text(s,'목적 · 실행 · 테스트\n기본 제약',64,475,320,84,27,C.ink,true);
    text(s,'새로 기록한 정보',744,266,472,39,28,C.teal,true);
    const rows=[['처리 순서','load → … → write'],['이미지 명세','crop의 경계 규칙'],['테스트 구조','모듈별 · 입출력 검사'],['CLI 출력','크기 · 통계 필드']];
    rows.forEach((r,i)=>{const y=321+i*55;line(s,744,y,472);text(s,r[0],744,y+8,164,37,25,C.teal,true);text(s,r[1],926,y+8,290,37,24,C.ink);});
    text(s,'이번 작업에도 모두 필요할까?',744,553,472,39,28,C.teal,true);
  }),

S37:make('S37','정확하지만 이번 작업에는 불필요한 정보','ACT 2 · 관련성을 확인하기',
  'TRIAL-004 · Codex CLI 0.154.0 · 실제 요청 / AGENTS.md 지침 발췌·번역',
  'AGENTS.md도 읽음 · 혼란·Context 관련 실패는 관찰되지 않음 · 성능 효과 미측정','OBSERVED_PRODUCT',
  (s,{C,text,rect,line,arrow,CODE})=>{
    text(s,'README 수정 요청',64,179,464,35,26,C.ink,true);
    text(s,'AGENTS.md에 적힌 내용',612,179,604,35,26,C.ink,true);
    const prompt=rect(s,64,228,464,310,C.white,C.line,1.5);prompt.borderRadius=12;
    text(s,'Prompt · 실제 요청 발췌·번역',84,239,424,30,22,C.sub,true);
    line(s,84,278,424);
    text(s,'README의 Build 안내에\n빌드 도구·고정 버전을 적어줘.\npyproject.toml을 기준으로\nREADME.md만 바꿔줘.\n기존 명령은 유지하고\n패키지 설치·설정 변경은 하지 마.\n관련 검증 결과를 보고해줘.',84,287,424,236,25,C.ink);
    arrow(s,552,294,36,25);
    rect(s,612,228,604,151,C.pale,C.teal,2);
    text(s,'이번 수정에 필요한 지침',634,240,560,33,27,C.teal,true);
    text(s,'README의 빌드·실행 안내 참조\n변경 범위 제한 · 관련 동작 검증',634,285,560,65,25,C.ink);
    text(s,'Build / Run · Core Constraints',634,352,560,23,20,C.teal,false,CODE);
    rect(s,612,400,604,138,C.bg,C.sub,1.5,'dash');
    text(s,'정확하지만, 이번 수정에는 불필요',634,410,560,33,26,C.sub,true);
    text(s,'crop · resize의 이미지 명세\n처리 순서 · 테스트 구조 · CLI 필드',634,451,560,58,25,C.sub);
    text(s,'Architecture · Image Contract · Test 구조 · CLI Summary',634,511,560,23,19,C.sub);
    text(s,'필요한 Context는 이번 작업의 질문에 따라 달라진다',64,559,1152,39,30,C.teal,true);
  }),

S38:make('S38','정보의 범위와 제공 시점','ACT 2 · 언제 필요한 정보인가',
  '교육용 정보 설계 모델 · OpenAI의 공식 분류·제품 기능이 아님',
  '성능 조사 절차는 설명용 예시 · 실제 저장·실행 기록이나 성능 효과를 뜻하지 않음','TEACHING_MODEL',
  (s,{C,text,line,rect,arrow})=>{
    text(s,'정보는 언제 필요하고, 작업은 어떤 절차로 수행할까?',64,180,1152,43,30,C.teal,true);
    const vertical=(x,y,h)=>s.shapes.add({geometry:'line',position:{left:x,top:y,width:0,height:h},fill:'none',line:{fill:C.teal,width:2}});
    const task=(label,x,y,w=104,h=48)=>{rect(s,x,y,w,h,C.white,C.line,1);text(s,label,x,y+6,w,h-12,label.includes('\n')?21:23,C.ink,true,undefined,'center');};
    const xs=[64,464,864];
    ['항상 필요한 정보','작업에 따라 찾아볼 상세','반복되는 작업 절차'].forEach((t,i)=>{
      text(s,t,xs[i],253,352,39,28,C.ink,true);line(s,xs[i],309,352,C.line,1);
    });
    ['README\n수정','crop\n수정','성능\n조사'].forEach((t,i)=>{task(t,64+i*124,345,104,56);vertical(116+i*124,401,14);});
    line(s,116,415,248,C.teal,2);vertical(240,415,22);
    rect(s,64,437,352,92,C.pale,C.teal,1.5);
    text(s,'목적 · 기본 제약\n범위 준수 · 관련 검증',84,445,312,76,25,C.ink,true,undefined,'center');
    task('README\n수정',464,345,104,56);arrow(s,582,364,28,19);
    rect(s,624,349,192,48,C.pale,C.teal,1.5);text(s,'빌드 안내',624,355,192,36,25,C.teal,true,undefined,'center');
    task('crop\n수정',464,450,104,56);arrow(s,582,469,28,19);
    rect(s,624,454,192,48,C.white,C.line,1.5);text(s,'이미지 명세',624,460,192,36,25,C.ink,true,undefined,'center');
    task('성능 조사 A',864,345,164);task('성능 조사 B',1052,345,164);
    vertical(946,393,22);vertical(1134,393,22);line(s,946,415,188,C.teal,2);vertical(1040,415,22);
    rect(s,864,437,352,92,C.white,C.teal,1.5);
    text(s,'변경 전\n측정',880,447,94,72,24,C.ink,true,undefined,'center');
    arrow(s,986,475,20,16);text(s,'조사',1016,463,72,40,25,C.teal,true,undefined,'center');
    arrow(s,1096,475,20,16);text(s,'검증',1128,463,72,40,25,C.teal,true,undefined,'center');
    text(s,'여러 작업에 공통 적용',64,555,352,34,24,C.teal,true);
    text(s,'해당 작업에 맞춰 상세 확인',464,555,352,34,24,C.teal,true);
    text(s,'같은 종류의 작업마다 재사용',864,555,352,34,24,C.teal,true);
  }),

S39:make('S39','Long Context 연구가 말해주는 범위','ACT 2 · 정보의 양을 다시 묻는 연구',
  'Liu et al., Lost in the Middle, TACL 2024 · RepoQA, 2024',
  '특정 모델·과제의 결과 · 현재 Codex의 Repository coding 한계를 입증하지 않음','RESEARCH',
  (s,{C,text,line,rect})=>{
    text(s,'더 많은 Context가 항상 더 좋은 것은 아니다',64,224,1152,47,32,C.teal,true);
    line(s,64,292,1152);
    text(s,'Lost in the Middle',64,314,550,42,30,C.ink,true);
    text(s,'여러 문서의 질문 답변 · key-value 검색',64,369,550,38,25,C.sub);
    text(s,'관련 정보의 위치가\n일부 조건에서 중요할 수 있다',64,421,550,84,31,C.ink,true);
    text(s,'RepoQA',704,314,512,42,30,C.ink,true);
    text(s,'50개 Repository의 코드 검색 과제',704,369,512,38,25,C.sub);
    text(s,'관련 코드 정보를\n선택하고 찾는 능력을 평가',704,421,512,84,31,C.ink,true);
    text(s,'aclanthology.org/2024.tacl-1.9/',64,549,550,29,20,C.sub,false,'Consolas');
    text(s,'arxiv.org/abs/2406.06025',704,549,512,29,20,C.sub,false,'Consolas');
  }),

S40:make('S40','필요한 상세 정보로 가는 길','ACT 2 · Context를 찾게 하는 설계',
  '교육용 Routing 모델 · 실제 문서 접근 결과는 다음 구간에서 확인',
  '검색 성능 향상이나 토큰 절약을 입증한 그림이 아님','TEACHING_MODEL',
  (s,{C,text,flow})=>{
    text(s,'어떤 질문에서 어떤 상세 정보가 필요할까?',64,229,1152,43,32,C.teal,true);
    flow(s,[{title:'Task',body:'지금 해결할 질문'},{title:'Core Context',body:'프로젝트 안내와\n찾아갈 위치'},{title:'관련 상세 정보',body:'질문에 필요한\n계약 · 구조 · 테스트'}],{y:311,h:205,fontSize:31});
    text(s,'C++ 예: 공통 제약을 확인한 뒤, 해당 알고리즘의 계약으로',64,554,1152,35,26,C.sub);
  }),

S41:make('S41','Core Context에서 상세 정보로 가는 길','ACT 2 · 기본 안내와 상세 정보',
  '교육용 정보 설계 · Root/Core는 상세 정보의 출발점',
  'C++ 예: build/test 진입점과 기본 제약 → 알고리즘 계약·하드웨어 조건','TEACHING_MODEL',
  (s,{C,text,line,rect,arrow})=>{
    text(s,'기본 안내에 남기는 것',64,233,458,43,31,C.teal,true);
    rect(s,64,297,458,224,C.pale);
    text(s,'프로젝트의 목적\n항상 지켜야 할 제약\n상세 정보를 찾을 위치',88,320,410,166,31,C.ink,true);
    arrow(s,562,384,57,30);
    text(s,'필요할 때 펼치는 것',680,233,536,43,31,C.teal,true);
    [['architecture','모듈과 처리 순서'],['image contracts','이미지 동작의 계약'],['testing','테스트 위치와 범위']].forEach((r,i)=>{let y=298+i*78;line(s,680,y,536);text(s,r[0],680,y+10,230,48,26,C.ink,true);text(s,r[1],920,y+10,296,48,25,C.sub);});
    text(s,'모든 지식을 넣기보다, 상세 정보까지 가는 길을 안내한다',64,551,1152,39,29,C.ink,true);
  }),

S42:make('S42','정보를 지우지 않고 위치를 나누기','ACT 2 · STATE-03의 문서 구조',
  'STATE-02 → STATE-03 · 실제 파일 구조와 Routing 문구 발췌',
  '내용을 Scope에 맞춰 이동 · 구조 변화 자체가 완벽한 Routing이나 성능 향상 증거는 아님','OBSERVED_PRODUCT',
  (s,{C,text,rect,line,arrow})=>{
    text(s,'이전: AGENTS.md 안에 세부사항까지',64,224,1152,40,29,C.sub);
    text(s,'이후: 기본 안내 + 상세 문서로 가는 링크',64,276,1152,45,32,C.teal,true);
    const rs=[['처리 순서 · 모듈 역할','docs/architecture.md'],['이미지 형식 · crop · resize','docs/image-contracts.md'],['테스트 구조 · 관련 테스트','docs/testing.md']];
    rs.forEach((r,i)=>{let y=345+i*61;line(s,64,y,1152);text(s,r[0],64,y+9,510,42,27,C.ink);arrow(s,605,y+20,44,20);text(s,r[1],704,y+9,512,42,27,C.teal,true,'Consolas');});
    text(s,'원문: Test organization or relevant tests → docs/testing.md',64,552,1152,36,24,C.sub,false,'Consolas');
  }),

S43:make('S43','서로 다른 두 Task가 무엇을 읽을까?','ACT 2 · 관찰하기 전에 질문하기',
  'TRIAL-005A/B · 읽기 전용 Task의 질문을 재구성',
  '어떤 상세 문서를 읽을지는 실제 접근 기록으로 확인한다','OBSERVED_PRODUCT',
  (s,{C,text,line})=>{
    text(s,'Task A',64,233,520,36,26,C.teal,true);
    text(s,'Task B',704,233,512,36,26,C.teal,true);
    line(s,64,290,520,C.teal,3);line(s,704,290,512,C.teal,3);
    text(s,'crop 1 3은\n어떤 source column을\n포함하는가?',64,328,520,164,34,C.ink,true);
    text(s,'이 Project에\nruntime dependency가\n있는가?',704,328,512,164,34,C.ink,true);
    text(s,'두 Task에서 같은 상세 문서를 읽을까?',64,548,1152,44,33,C.teal,true);
  }),

S44:make('S44','Crop Task에서 관찰한 접근','ACT 2 · 질문과 근거를 연결하기',
  'TRIAL-005A · 최종 실행의 접근과 답을 기록에서 재구성',
  'architecture 등 넓은 Context도 접근 · testing.md는 최종 실행에서 관찰, 반복 간 차이 존재','OBSERVED_PRODUCT',
  (s,{C,text,rect,line})=>{
    text(s,'접근한 계약 문서',64,228,600,36,28,C.teal,true);
    text(s,'image-contracts.md',64,278,660,42,32,C.ink,true,'Consolas');
    rect(s,64,343,660,142,C.pale);
    text(s,'[x_start, x_end)',88,357,612,46,33,C.ink,true,'Consolas');
    text(s,'시작 열 포함 · 끝 좌표 제외',88,420,612,41,29,C.ink);
    text(s,'기록된 답',808,228,408,36,28,C.teal,true);
    text(s,'crop 1 3',808,278,408,42,32,C.ink,true,'Consolas');
    [0,1,2,3].forEach((n,i)=>{const x=808+i*94;rect(s,x,350,78,76,n===1||n===2?C.pale:C.white,C.line,1);text(s,String(n),x,364,78,44,33,n===1||n===2?C.teal:C.sub,true,'Malgun Gothic','center');});
    text(s,'포함 열: 1, 2\n출력 폭: 2',808,460,408,93,31,C.ink,true);
    text(s,'답을 파일의 계약과 연결해 확인했다',64,549,680,39,29,C.teal,true);
  }),

S45:make('S45','Task별 접근은 달랐지만 완벽하지는 않다','ACT 2 · 두 Task의 문서 접근 비교',
  'TRIAL-005A/B · 실제 접근 기록을 요약한 비교',
  '완벽한 Routing 미입증 · 토큰 절약·성능 개선 미측정 · 실행 간 변동 존재','OBSERVED_PRODUCT',
  (s,{C,text,line,rect})=>{
    text(s,'같은 Repository에서 질문이 달랐다',64,222,1152,43,31,C.teal,true);
    text(s,'문서',64,289,492,35,25,C.sub,true);
    text(s,'A · crop 계약',586,289,280,35,26,C.ink,true);
    text(s,'B · 실행 의존성',918,289,298,35,26,C.ink,true);
    const rs=[['image-contracts.md','읽음','읽지 않음'],['architecture.md','읽음','읽음'],['testing.md','최종 실행에서 읽음','읽지 않음']];
    rs.forEach((r,i)=>{const y=340+i*66;if(i===0)rect(s,64,y,1152,60,C.pale);else line(s,64,y,1152);text(s,r[0],78,y+10,490,40,27,C.ink,i===0,'Consolas');text(s,r[1],586,y+10,312,40,26,i===0?C.teal:C.sub,i===0);text(s,r[2],918,y+10,298,40,26,i===0?C.teal:C.sub,i===0);});
    text(s,'A에는 더 넓은 읽기도 존재 · B는 설정·README·source도 확인',64,556,1152,33,25,C.sub);
  }),

S46:make('S46','지식은 정리됐지만 절차는 반복된다','ACT 2 · 다음 문제로 넘어가기',
  'Project Context 정리 + TRIAL-006/007의 반복 절차 · 기록 요약과 교육용 해석',
  '절차가 반복된 원인을 Prompt만으로 분리하지 않음','TEACHING_MODEL',
  (s,{C,text,line,rect})=>{
    text(s,'정리한 것',64,232,520,38,29,C.teal,true);
    text(s,'아직 반복되는 것',704,232,512,38,29,C.teal,true);
    line(s,64,289,520,C.teal,3);line(s,704,289,512,C.teal,3);
    text(s,'현재 목표는 Prompt에\n공통 사실은 Project Context에\n상세 정보는 Routing으로',64,327,540,158,30,C.ink);
    text(s,'먼저 측정하고\n조사한 뒤 변경하고\n같은 조건으로 확인해줘',704,327,512,158,31,C.ink,true);
    text(s,'같은 작업 절차도 다시 써야 할까?',64,548,1152,44,34,C.teal,true);
  }),

S47:make('S47','서로 다른 Performance Task,\n반복되는 절차','ACT 3 · 작업 방법도 반복된다',
  'TRIAL-006 resize_nearest / TRIAL-007 normalize · 기록한 절차의 재구성',
  '반복은 관찰됐으나 global Harness 영향이 있어 Prompt만의 효과로 귀속하지 않음','OBSERVED_PRODUCT',
  (s,{C,text,line,rect})=>{
    text(s,'Task A · 이미지 크기 변경',64,239,540,40,29,C.ink,true);
    text(s,'Task B · 픽셀 범위 정규화',704,239,512,40,29,C.ink,true);
    text(s,'resize_nearest',64,289,540,39,28,C.sub,false,'Consolas');
    text(s,'normalize',704,289,512,39,28,C.sub,false,'Consolas');
    [64,704].forEach(x=>{rect(s,x,356,512,135,C.pale);text(s,'Baseline → 조사 → 계획 → 변경\nTest → Benchmark → 비교 → Review',x+18,377,476,91,25,C.ink,true);});
    text(s,'Task 목표가 달라도, 일하는 순서는 다시 쓰였다',64,547,1152,43,31,C.teal,true);
  }),

S48:make('S48','Project 사실과 작업 절차는 다르다','ACT 3 · 알아야 할 것과 따라야 할 방법',
  '교육용 구분 · TRIAL-006/007의 반복 절차에서 출발',
  'Project 정보를 더 주는 것만으로 반복되는 절차의 유지 문제가 해결되지는 않는다','TEACHING_MODEL',
  (s,{C,text,line,rect})=>{
    text(s,'무엇이 참인가?',64,233,520,46,34,C.teal,true);
    text(s,'어떤 순서로 일할까?',704,233,512,46,34,C.teal,true);
    line(s,64,299,520,C.teal,3);line(s,704,299,512,C.teal,3);
    text(s,'crop은 끝 열을 제외한다\n[x_start, x_end)',64,339,520,103,30,C.ink,true);
    text(s,'변경 전에 측정한다\n변경 후 같은 입력으로 비교한다',704,339,512,103,30,C.ink,true);
    text(s,'Project Context',64,476,520,40,29,C.sub,true);
    text(s,'Workflow',704,476,512,40,29,C.sub,true);
    text(s,'이번에 무엇을 원하는가?  →  현재 목표는 Task Prompt에',64,553,1152,35,28,C.ink);
  }),

S49:make('S49','Task, Context, Workflow의 역할','ACT 3 · 세 가지 책임을 나누기',
  '교육용 책임 구분 · 현재 목표 / 프로젝트 사실 / 반복 절차',
  'Prompt 밖에 둘 수 있는 정보라도 유지해야 할 책임은 서로 다르다','TEACHING_MODEL',
  (s,{C,text,line})=>{
    const rs=[['Task Prompt','지금 무엇을 바꿀까?','normalize의 성능 조사'],['Project Context','무엇을 지켜야 할까?','기존 이미지 동작과 공개 계약 보존'],['Reusable Workflow','어떤 순서로 확인할까?','baseline → 조사 → 검증 → 비교']];
    rs.forEach((r,i)=>{const y=232+i*116;line(s,64,y,1152);text(s,r[0],64,y+15,324,42,29,C.teal,true);text(s,r[1],435,y+15,781,42,30,C.ink,true);text(s,r[2],435,y+64,781,35,27,C.sub);});
  }),

S50:make('S50','반복 절차를 Skill로 옮길 수 있을까?','ACT 3 · 재사용할 구조를 선택하기',
  'DEC-0017 · 반복 절차를 Repository Skill로 옮기는 설계 후보',
  '아직 성공 결과를 제시하는 장이 아님 · 대상 제품·계정·호출 방식은 별도 확인 필요','TEACHING_MODEL',
  (s,{C,text,line,rect,arrow})=>{
    text(s,'매번 Prompt에 쓰기',64,231,520,42,31,C.sub,true);
    text(s,'후보: 절차는 Repository에',704,231,512,42,31,C.teal,true);
    line(s,64,295,520);line(s,704,295,512,C.teal,3);
    text(s,'현재 목표 + 이번 제약',64,322,520,44,29,C.ink,true);
    rect(s,64,386,520,114,C.pale);
    text(s,'baseline → 조사 → 변경\n테스트 → 측정 → 비교 → 검토',84,400,480,82,26,C.ink);
    text(s,'현재 목표 + 이번 제약',704,322,512,44,29,C.ink,true);
    text(s,'$graypipe-performance',704,396,512,48,31,C.teal,true,'Consolas');
    text(s,'반복 절차는 Repository Skill에',704,461,512,40,26,C.sub);
    text(s,'긴 절차를 빼도, 같은 작업 흐름을 유지할 수 있을까?',64,550,1152,42,30,C.ink,true);
  }),

S51:make('S51','Skill을 어떻게 발견하고 호출할까?','ACT 3 · TRIAL-008에서 확인한 경로',
  'TRIAL-008 · Codex CLI 0.154.0 · 기록 재구성, 실제 UI 캡처 아님',
  '경로·본문은 실행 trace에서 확인 · 현재 Desktop·암묵적 호출·교육 계정은 미검증','OBSERVED_PRODUCT',
  (s,{C,text,line,rect})=>{
    text(s,'01  목록에서 발견',64,230,1152,40,28,C.teal,true);
    text(s,'/skills  →  graypipe-performance',64,278,1152,43,31,C.ink,true,'Consolas');
    text(s,'표시된 설명: “Investigate repository performance with reproduc…”',64,328,1152,31,23,C.sub);
    line(s,64,378,1152);
    text(s,'02  작업 목표와 함께 명시적으로 호출',64,397,1152,39,28,C.teal,true);
    text(s,'$graypipe-performance',64,445,595,46,33,C.ink,true,'Consolas');
    text(s,'+ image_statistics 성능 조사',652,445,564,46,27,C.ink);
    line(s,64,512,1152);
    text(s,'03  실행 기록에서 Skill 본문 포함을 확인',64,532,1152,42,29,C.teal,true);
  }),

S52:make('S52','절차의 책임이 Prompt에서\nRepository로 이동','ACT 3 · 두 Trial의 요청 구조 비교',
  'TRIAL-007 / TRIAL-008 · 서로 다른 Task의 Prompt 구조를 요약',
  '절차를 둔 위치의 변화만 관찰 · Skill 우월성·토큰 절감·속도 향상은 입증하지 않음','OBSERVED_PRODUCT',
  (s,{C,text,line,rect})=>{
    text(s,'TRIAL-007 · normalize',64,232,520,37,27,C.sub,true,'Consolas');
    text(s,'TRIAL-008 · image_statistics',704,232,512,37,27,C.teal,true,'Consolas');
    line(s,64,290,520);line(s,704,290,512,C.teal,3);
    text(s,'목표 + 작업별 제약',64,314,520,43,31,C.ink,true);
    text(s,'목표 + 작업별 제약',704,314,512,43,31,C.ink,true);
    rect(s,64,383,520,104,C.pale);text(s,'긴 조사·검증 절차를\nPrompt에 다시 작성',86,396,476,80,29,C.ink);
    text(s,'$graypipe-performance',704,391,512,45,31,C.teal,true,'Consolas');
    text(s,'절차는 Repository Skill에',704,450,512,37,27,C.sub);
    text(s,'공통 흐름: baseline → 조사 → test / benchmark → 비교 / review',64,548,1152,41,26,C.ink,true);
  }),

S53:make('S53','답을 담지 않는 Workflow','ACT 3 · 절차와 과제별 판단',
  'STATE-04의 SKILL.md 원문 일부 + 교육용 책임 구분',
  '특정 최적화 답·알고리즘·Trial 수치를 Skill의 정답으로 넣지 않았다','OBSERVED_PRODUCT',
  (s,{C,text,line,rect})=>{
    text(s,'Skill에 실제로 담긴 지시',64,233,1152,42,31,C.teal,true);
    rect(s,64,298,1152,145,C.pale);
    text(s,'“Establish a reproducible baseline before editing.”',88,311,1104,48,29,C.ink,true);
    text(s,'“A measured result that does not justify a change is a\nvalid no-change conclusion.”',88,367,1104,61,25,C.ink);
    text(s,'작업마다 판단할 것',64,486,290,42,28,C.teal,true);
    text(s,'어떤 알고리즘?   ·   실제 측정값?   ·   감수할 trade-off?',374,486,842,42,28,C.ink);
    text(s,'절차는 재사용하고, 답은 이번 근거로 결정한다',64,550,1152,40,31,C.ink,true);
  }),

S54:make('S54','측정으로 후보를 고르다','ACT 3 · 시간과 메모리를 함께 비교',
  'TRIAL-008 · image_statistics 후보 비교 · 최종 STATE-04 전후 측정과는 별개',
  '합성 1024×768 · CPython 3.9.6 / macOS arm64 · 같은 6개 출력값 검증 · 정성 비교','OBSERVED_PRODUCT',
  (s,{C,text,line,rect})=>{
    text(s,'메모리가 적다는 이유만으로 고르지 않았다',64,225,1152,45,32,C.teal,true);
    text(s,'후보',64,301,482,39,26,C.sub,true);
    text(s,'Python 할당량',606,301,278,39,26,C.sub,true);
    text(s,'실행 시간',942,301,274,39,26,C.sub,true);
    line(s,64,353,1152);
    text(s,'수동 단일 순회',64,378,482,42,31,C.ink,true);
    text(s,'낮음',606,378,278,42,31,C.ink);
    text(s,'훨씬 느림',942,378,274,42,31,C.warn,true);
    rect(s,64,460,1152,94,C.pale);
    text(s,'행 단위 built-in reduction',80,484,496,45,29,C.ink,true);
    text(s,'낮게 유지',606,484,278,45,29,C.ink);
    text(s,'더 나음 → 선택',942,484,274,45,29,C.teal,true);
  }),

S56:make('S56','이 작업에 Subagent가 필요했을까?','ACT 3 · 추가 구조의 필요성 점검',
  'DEC-0018 · 현재 성능 작업에 대한 판단과 교육용 작업 구조',
  '현재 사례에서 추가하지 않았다는 결과 · 일반적으로 Subagent가 불필요하다는 뜻은 아님','TEACHING_MODEL',
  (s,{C,text,flow,line})=>{
    flow(s,[{title:'조사',body:'같은 성능 경로와\n계약을 확인'},{title:'변경',body:'조사 결과를 사용'},{title:'검증',body:'변경 결과를 확인'}],{y:240,h:172,fontSize:33});
    line(s,64,443,1152);
    text(s,'작업 독립성 낮음  ·  병렬 이득 제한적  ·  결과 통합 비용 존재',64,468,1152,43,28,C.ink);
    text(s,'이 Task에서는 Agent를 더 나눌 근거가 부족했다',64,548,1152,43,32,C.teal,true);
  }),

S57:make('S57','Subagent를 고려할 조건','ACT 3 · 독립 조사와 결과 통합',
  '교육용 가정 · C++ Repository의 조사들이 실제로 독립적일 때',
  '제품 실행 사례가 아님 · 작고 연결된 작업·Context 반복·큰 조정 비용이면 보류','CONCEPTUAL',
  (s,{C,text,line,rect,arrow})=>{
    text(s,'독립적으로 조사할 수 있는가?',64,229,1152,44,32,C.teal,true);
    const xs=[64,456,848];const ts=['성능 경로 조사','빌드 환경 조사','테스트 구조 조사'];
    xs.forEach((x,i)=>{line(s,x,320,360,C.teal,3);text(s,ts[i],x,339,360,48,30,C.ink,true);text(s,'가정: 다른 조사 결과를\n기다리지 않고 진행 가능',x,401,360,78,25,C.sub);});
    text(s,'↓',212,489,64,40,32,C.teal);text(s,'↓',604,489,64,40,32,C.teal);text(s,'↓',996,489,64,40,32,C.teal);
    rect(s,64,539,1152,51,C.pale);text(s,'시작 전에 정할 것: 결과 형식 · 전달 지점 · 합칠 책임',86,546,1108,37,28,C.ink,true);
  }),

S58:make('S58','무엇이 다시 찾기 어려운 지식인가?','ACT 3 · 별도 지식 보존의 필요성 점검',
  '현재 Demo Repository의 지식 분류와 Memory 후보 점검',
  '별도 Memory로 남길 지속적 지식 후보는 찾지 못함 · 제품 Memory 동작 주장은 아님','TEACHING_MODEL',
  (s,{C,text,line,arrow})=>{
    const rs=[['crop은 끝 열을 제외한다','코드 · image-contracts.md'],['모듈은 어떤 순서로 이어지나','architecture.md'],['성능을 어떻게 조사하고 확인하나','Repository Skill'],['이번 실행에서 무엇을 측정했나','날짜가 있는 Trial 기록 · Git 이력']];
    rs.forEach((r,i)=>{let y=231+i*83;line(s,64,y,1152);text(s,r[0],64,y+17,530,46,28,C.ink,true);arrow(s,619,y+30,35,20);text(s,r[1],704,y+17,512,46,27,C.teal,true);});
    text(s,'새 기록을 만들기 전에, 원래 출처를 먼저 찾는다',64,568,1152,30,26,C.sub);
  }),

S59:make('S59','Memory는 재발견 비용으로 판단','ACT 3 · 무엇을 남길 가치가 있는가',
  '교육용 의사결정 기준 · 별도 Memory의 필요성을 검토하는 질문',
  '현재 Demo에서는 조건에 맞는 후보 없음 · Memory 사용 여부는 성숙도 점수가 아님','TEACHING_MODEL',
  (s,{C,text,line})=>{
    const rs=[['01','다시 찾는 비용이 큰가?','이미 잘 관리되는 출처가 있다면 그곳을 참고'],['02','다음 작업에도 쓸 수 있는가?','일회성 실행 상태와 프로젝트 지식을 구별'],['03','출처와 적용 범위를 아는가?','어떤 프로젝트·조건에서 유효한지 기록'],['04','언제 다시 확인해야 하는가?','갱신 또는 무효화할 조건을 함께 관리']];
    rs.forEach((r,i)=>{const y=230+i*89;line(s,64,y,1152);text(s,r[0],64,y+16,70,40,28,C.teal,true);text(s,r[1],154,y+9,1062,40,29,C.ink,true);text(s,r[2],154,y+49,1062,31,24,C.sub);});
  }),

S60:make('S60','Minimum Effective Harness','ACT 3 · 이번 문제에 실제로 필요했던 구조',
  'STATE-04-PERF까지의 구성 · 현재 프로젝트 사례를 정리한 교육용 모델',
  'Subagent·별도 Memory는 추가하지 않음 · 필요한 구성은 문제와 검증 요건에 따라 달라짐','TEACHING_MODEL',
  (s,{C,text,line,rect})=>{
    text(s,'반복해서 부딪힌 문제 → 실제로 둔 구조',64,225,1152,44,32,C.teal,true);
    const rs=[['이번 목표와 범위','Task Prompt'],['프로젝트 사실과 상세 정보','AGENTS.md + docs Routing'],['같은 조사·검증 절차','graypipe-performance Skill'],['변경을 믿을 근거','Tests + Benchmark + Tools / Environment']];
    rs.forEach((r,i)=>{const y=297+i*67;line(s,64,y,1152);text(s,r[0],64,y+12,489,42,28,C.ink);text(s,'→',573,y+12,48,42,29,C.teal,true);text(s,r[1],652,y+12,564,42,26,C.teal,true);});
  }),

S61:make('S61','Harness는 작업 환경 설계다','ACT 3 · 개발자와 Agent가 일하는 환경',
  'Harness: Agent가 Project에서 신뢰성 있게 일하도록 설계한 작업 환경 · 이 과정의 운영 모델',
  '공식 제품 분류가 아님 · STATE-04-PERF 관찰 요소와 교육용 전체 모델을 구분한다','TEACHING_MODEL',
  (s,{C,text,rect,line,arrow})=>{
    rect(s,64,226,1152,273,C.white,C.line,1);
    text(s,'Project 작업 환경',88,243,1104,36,27,C.teal,true);
    text(s,'개발자 + Agent',390,302,500,66,43,C.ink,true,'Malgun Gothic','center');
    text(s,'현재 목표',88,325,260,45,29,C.sub);text(s,'확인할 결과',932,325,260,45,29,C.sub);
    arrow(s,337,337,40,22);arrow(s,902,337,25,22);
    line(s,88,403,1104);
    text(s,'Project Context / Routing     ·     Workflow     ·     Verification / Tools',88,425,1104,48,27,C.ink,true);
    text(s,'관찰한 구성',64,539,206,40,25,C.teal,true);
    text(s,'AGENTS.md · docs · Skill · Tests · Benchmark',290,539,926,40,28,C.ink);
  }),

S62:make('S62','Repository 밖의 환경도 결과에 영향을 준다','ACT 3 · 실행 환경의 경계',
  '관찰된 제작 이력의 예고 · Global Skills와 hook/MCP 시작 경고의 기록 존재',
  '전체 환경 목록이나 모든 요소의 인과 효과를 확인한 것은 아님 · 상세 근거는 ACT 4에서 확인','OBSERVED_META',
  (s,{C,text,rect,line})=>{
    text(s,'같은 Repository가 같은 실행 환경을 뜻할까?',64,226,1152,43,31,C.teal,true);
    rect(s,64,307,470,213,C.white,C.line,1);
    text(s,'Project Repository',88,327,422,45,31,C.ink,true);
    text(s,'코드 · AGENTS.md\nProject docs · Skill',88,398,422,91,29,C.ink);
    text(s,'바깥에서 함께 들어올 수 있는 조건',634,307,582,43,28,C.teal,true);
    const rows=[['지침','Global instructions · Skills'],['실행','Model/config · OS/runtime'],['도구와 권한','Hooks · MCP · Permissions']];
    rows.forEach((r,i)=>{const y=367+i*61;line(s,634,y,582);text(s,r[0],634,y+10,150,40,24,C.ink,true);text(s,r[1],795,y+10,421,40,24,C.sub);});
    text(s,'Repository 바깥의 흔적도, 결과를 해석할 때 기록한다',64,553,1152,37,29,C.ink,true);
  }),

S63:make('S63','Engineering Pattern은 C++에도 전이된다','ACT 3 · 도구를 넘어 같은 판단을 적용하기',
  'C++ Vision 전이를 위한 교육용 예시 · 실제 C++ Demo나 팀 표준 검증 결과가 아님',
  '구체적 빌드·IDE·셸·하드웨어 설정은 프로젝트별 확인 필요','TEACHING_MODEL',
  (s,{C,text,line})=>{
    text(s,'C++ Vision 성능 문제에서도 같은 질문을 한다',64,224,1152,44,31,C.teal,true);
    const rs=[['기준 조건은?','입력 · Project 계약','빌드 모드 · 알고리즘·하드웨어 조건'],['어디를 조사할까?','측정한 Python 코드 경로','해당 모듈의 profiler / benchmark'],['무엇을 확인할까?','동작 계약 · unittest','모듈 계약 · 회귀/통합 테스트']];
    text(s,'공통 질문',64,294,210,35,24,C.sub,true);text(s,'Python Demo',334,294,375,35,24,C.sub,true);text(s,'C++ Vision 적용 예',760,294,456,35,24,C.sub,true);
    rs.forEach((r,i)=>{let y=342+i*65;line(s,64,y,1152);text(s,r[0],64,y+11,245,42,27,C.ink,true);text(s,r[1],334,y+11,405,42,25,C.ink);text(s,r[2],760,y+11,456,42,24,C.teal,true);});
    text(s,'baseline → profile → change → regression check',64,551,1152,41,30,C.teal,true,'Consolas');
  }),

S64:make('S64','필요한 구조부터 질문하기','ACT 3 · 내 업무의 반복을 돌아보기',
  '자신의 업무를 생각해보기 · 공유는 선택',
  'STATE-04-PERF는 이 작업에서 잘 동작한 결과 · Subagent와 Memory는 조건부 선택','TEACHING_MODEL',
  (s,{C,text,line})=>{
    text(s,'내 업무에서 가장 자주 반복하는 설명은?',64,230,1152,45,33,C.teal,true);
    text(s,'“우리 프로젝트의 제약은…”',64,327,550,47,32,C.ink,true);
    text(s,'“먼저 측정하고, 끝나면 확인해…”',704,327,512,47,30,C.ink,true);
    text(s,'반복되는 사실',64,394,550,39,28,C.sub);
    text(s,'반복되는 절차',704,394,512,39,28,C.sub);
    line(s,64,471,1152);
    text(s,'지금 잘 동작한다면,\nProject가 바뀐 뒤에도 계속 맞을까?',64,507,1152,83,33,C.ink,true);
  }),
};

// AUTHOR_COMPLETE: S32, S34–S54, S56–S64. Preserve pilot S33/S55 externally.
