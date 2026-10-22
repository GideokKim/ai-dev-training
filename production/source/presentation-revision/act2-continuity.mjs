/** DEC-0060: distinct ACT2 roles, bounded observations and ACT3 handoff. */
import fs from 'node:fs/promises';
import path from 'node:path';
import * as H from './helpers.mjs';

export async function loadAct2ContinuitySlides(root) {
 const {C,text,line,rect,arrow,CODE,FONT}=H;
 const illustration=new Uint8Array(await fs.readFile(path.join(root,'prototype/image-illustration-pilot/assets/S37.png')));
 const make=(p,id,title,eyebrow,source,boundary,type='TEACHING_MODEL')=>{
  const s=H.frame(p,id,title,eyebrow,source,boundary,type);
  s.shapes.items.at(-1).position={left:64,top:650,width:1152,height:30};
  return s;
 };
 const down=(s,x,y,w=24,h=18,color=C.teal)=>s.shapes.add({geometry:'downArrow',position:{left:x,top:y,width:w,height:h},fill:color,line:{fill:'none',width:0}});
 const prompt=(s,x,y,w,h,heading,body)=>{
  const q=rect(s,x,y,w,h,C.white,C.line,1.5);q.borderRadius=10;
  text(s,heading,x+20,y+10,w-40,32,24,C.teal,true);
  line(s,x+20,y+52,w-40);
  if(body)text(s,body,x+20,y+68,w-40,h-84,26,C.ink);
 };
 return {
  S38(p){
   const s=make(p,'S38','정보의 범위와 제공 시점','ACT 2 · 이번에는 Context의 범위를 정리',
    '교육용 구분 · 정보의 범위와 수행 방법은 서로 다른 축',
    '공식 제품 분류가 아님 · 오른쪽은 다음 ACT의 미해결 질문');
   text(s,'공통 안내와 상세는 나누고, 작업 방법은 질문으로 남긴다',64,181,1152,44,30,C.teal,true);
   const xs=[64,464,864];
   ['여러 작업의 기본 안내','질문에 맞춰 찾을 상세','아직 남은 질문'].forEach((t,i)=>{
    text(s,t,xs[i],253,352,40,28,i===2?C.sub:C.ink,true);
    line(s,xs[i],309,352,i===2?C.sub:C.line,1,i===2?'dash':'solid');
   });
   ['README','crop','성능 조사'].forEach((t,i)=>{
    rect(s,64+i*124,344,104,48,C.white,C.line,1);
    text(s,t,64+i*124,351,104,34,22,C.ink,true,FONT,'center');
   });
   down(s,226,410,28,18);
   rect(s,64,445,352,82,C.pale,C.teal,1.5);
   text(s,'목적 · 공통 제약\n실행·검증의 시작점',82,453,316,66,26,C.ink,true,FONT,'center');
   [['README','빌드 안내',344],['crop','이미지 명세',454]].forEach(([task,detail,y])=>{
    text(s,task,464,y,114,42,25,C.ink,true);
    arrow(s,581,y+13,25,18);
    rect(s,623,y,193,48,C.white,C.teal,1.5);
    text(s,detail,631,y+7,177,34,25,C.teal,true,FONT,'center');
   });
   [['성능 요청 A',344],['성능 요청 B',437]].forEach(([label,y])=>{
    rect(s,864,y,352,78,C.bg,C.sub,1.5,'dash');
    text(s,label,882,y+7,316,27,23,C.sub,true);
    text(s,'측정 · 조사 · 검증 …',882,y+40,316,30,25,C.ink);
   });
   text(s,'공통으로 참고할 범위',64,552,352,35,25,C.teal,true);
   text(s,'필요한 때 상세를 확인',464,552,352,35,25,C.teal,true);
   text(s,'방법의 반복은 ACT 3에서',864,552,352,35,24,C.sub,true);
   return s;
  },
  S39(p){
   const s=make(p,'S39','많이 담아도 같은 근거를 똑같이 쓰는가?','ACT 2 · Lost in the Middle이 확인한 질문',
    'Liu et al., TACL 2024 · aclanthology.org/2024.tacl-1.9/ · CLM-0014',
    '연구 과제 재구성 · 현재 Codex의 실패율·보편 한계·Routing 효과를 입증하지 않음','RESEARCH');
   text(s,'문서 질문 답변 · 합성 key-value 검색',64,183,1152,40,30,C.teal,true);
   text(s,'입력 안에서 같은 근거의 위치를 바꿨다',64,246,650,35,27,C.ink,true);
   ['앞','중간','뒤'].forEach((label,row)=>{
    const y=308+row*72;
    text(s,label,64,y+5,70,34,25,C.sub,true);
    for(let i=0;i<5;i++){
     const target=i===[0,2,4][row],x=152+i*104;
     rect(s,x,y,94,44,target?C.pale:C.white,target?C.teal:C.line,target?2:1);
     if(target)text(s,'근거',x,y+6,94,32,23,C.teal,true,FONT,'center');
    }
   });
   text(s,'관찰한 결과',760,246,456,36,28,C.teal,true);
   text(s,'일부 당시 모델·과제에서\n중간 근거의 정답률 저하',760,305,456,90,30,C.ink,true);
   line(s,760,424,456);
   text(s,'업무에서 확인할 질문',760,443,456,34,25,C.sub,true);
   text(s,'넣어준 정보를\n실제 답의 근거로 썼는가?',760,487,456,84,29,C.ink,true);
   text(s,'도식은 위치 비교 구조만 표시\n정답률 수치·현재 제품의 성능 곡선이 아님',64,548,644,54,22,C.sub);
   return s;
  },
  S40(p){
   const s=make(p,'S40','AI가 필요한 코드를 찾았다는 것을\n무엇으로 확인할까?','ACT 2 · 코드 탐색의 결과를 근거로 확인',
    '교육용 확인 예 · STATE-00-FIXED crop 발췌 / RepoQA(2024): arxiv.org/abs/2406.06025',
    '세 질문은 교육용 기준 · RepoQA가 이 Routing·현재 Codex의 업무 성능을 검증한 것은 아님','TEACHING_MODEL / RESEARCH');
   text(s,'확인할 작업 요청',64,222,452,32,25,C.ink,true);
   text(s,'업무용 확인 질문',576,222,640,32,25,C.teal,true);
   const request=rect(s,64,265,452,88,C.white,C.line,1.5);request.borderRadius=10;
   text(s,'crop 끝 좌표를 제외하는\n구현을 찾아줘.',84,274,412,68,27,C.ink,true);
   down(s,278,358,24,18);
   rect(s,64,384,452,132,C.ink);
   text(s,'기존 crop 구현의 일부',84,391,412,30,24,C.white,true);
   text(s,'src/graypipe/transform.py',84,427,412,28,24,C.line,false,CODE);
   text(s,'row[x_start : x_end]',84,466,412,36,28,C.white,true,CODE);
   text(s,'발췌 · 새 Agent 탐색 기록 아님',64,523,452,28,22,C.sub);
   arrow(s,532,415,26,20);
   const questions=[
    ['01','위치를 특정했나?','파일 경로 · 함수 · 관련 줄',270],
    ['02','요청한 동작과 맞나?','끝 좌표 제외 명세와 코드를 대조',368],
    ['03','주변 근거도 맞나?','필요한 호출부·테스트 기대값 확인',466]
   ];
   questions.forEach(([num,title,detail,y],i)=>{
    text(s,num,576,y,45,36,26,C.teal,true,CODE);
    text(s,title,634,y,582,36,29,C.ink,true);
    text(s,detail,634,y+42,582,34,25,C.sub);
    if(i<2)line(s,576,y+80,640);
   });
   rect(s,64,559,1152,43,C.pale);
   text(s,'보조 근거 · RepoQA',80,565,267,30,23,C.teal,true);
   text(s,'기능 설명으로 함수를 찾는 과제를 평가한 연구',366,565,834,30,24,C.ink);
   return s;
  },
  S41(p){
   const s=make(p,'S41','필요한 상세 정보로 가는 길','ACT 2 · 한 질문에서 답변 근거까지',
    '교육용 탐색 경로 · 저장된 명세 기반 재구성 · 실제 읽기 순서가 아님',
    '자동 탐색·완벽한 선택·성능 향상·토큰 절약을 입증한 그림이 아님');
   text(s,'이 요청은 어떤 문서를 근거로 답해야 할까?',64,184,1152,44,31,C.teal,true);
   prompt(s,64,298,300,208,'01  작업 요청','crop 끝 좌표가\n포함되는지\n명세를 확인해줘.');
   rect(s,444,298,376,208,C.pale,C.teal,1.5);
   text(s,'02  기본 안내',466,312,332,34,25,C.teal,true);
   text(s,'AGENTS.md',466,365,332,35,29,C.ink,true,CODE);
   text(s,'이미지 동작 · crop',466,412,332,32,25,C.ink);
   text(s,'관련 상세의 위치 안내',466,459,332,30,24,C.sub);
   rect(s,900,298,316,208,C.white,C.line,1.5);
   text(s,'03  답변 근거',920,312,276,34,25,C.teal,true);
   text(s,'docs/\nimage-contracts.md',920,363,276,65,24,C.ink,true,CODE);
   text(s,'[x_start, x_end)',920,457,276,35,25,C.ink,true,CODE);
   arrow(s,386,390,30,22);arrow(s,842,390,30,22);
   text(s,'질문 · 위치 안내 · 상세 명세를 연결한다',64,533,1152,41,31,C.teal,true);
   text(s,'C++ 예: 알고리즘 설명을 묻는 요청이라면 해당 모듈의 명세를 근거로 확인',64,577,1152,27,23,C.sub);
   return s;
  },
  S42(p){
   const s=make(p,'S42','AGENTS.md에는 무엇을 남길까?','ACT 2 · 파일 이름보다 정보의 배치 기준',
    '교육용 배치 기준 · 명령·검증 규칙도 Project 안내에 포함될 수 있음',
    '원칙과 상세의 구분은 유지·참조 설계 · 실제 자동 읽기 결과나 제품의 강제 분류가 아님');
   text(s,'여러 작업의 출발점인가, 특정 질문의 깊은 근거인가?',64,184,1152,44,30,C.teal,true);
   const cols=[{x:64,title:'공통 안내에 남길 것',color:C.pale,rows:[['적용 범위','여러 작업의 기본 방향'],['읽는 시점','작업의 시작점'],['유지할 내용','목적 · 제약 · 검증 진입점\n상세 문서의 위치']]},
    {x:674,title:'관련 상세로 나눌 것',color:C.white,rows:[['적용 범위','특정 질문의 세부 근거'],['읽는 시점','해당 작업에 필요할 때'],['유지할 내용','깊은 동작 명세 · 모듈 구조\n테스트 구성 · 장비 조건']]}];
   cols.forEach(c=>{
    text(s,c.title,c.x,250,542,40,29,C.teal,true);
    rect(s,c.x,301,542,237,c.color,c.color===C.pale?C.teal:C.line,1.5);
    c.rows.forEach(([label,body],i)=>{
     const y=315+i*67;
     text(s,label,c.x+20,y,112,33,24,C.sub,true);
     text(s,body,c.x+150,y,372,i===2?66:38,26,C.ink,true);
     if(i<2)line(s,c.x+20,y+53,502);
    });
   });
   text(s,'C++에 적용하면',64,562,240,34,25,C.sub,true);
   text(s,'공통 빌드·검증 진입점',332,562,390,34,26,C.teal,true);
   text(s,'장비별 하드웨어 조건',826,562,390,34,26,C.ink,true);
   return s;
  },
  S46(p){
   const s=make(p,'S46','의존성 질문은 설정과 소스로 답했다','ACT 2 · 요청 B의 근거와 기록된 답',
    'TRIAL-005B 최종 실행 · Codex CLI 0.154.0 · 실제 접근/답변 기록 요약',
    '과거 읽기 전용 실행의 재구성 · 새 설치 검사·현재 Desktop 검증 결과가 아님','OBSERVED_PRODUCT');
   text(s,'“실행 의존성과 빌드 도구를 구분해 알려줘.”',64,183,1152,44,31,C.teal,true);
   text(s,'실제로 확인한 근거',64,253,520,38,29,C.ink,true);
   text(s,'기록된 답',674,253,542,38,29,C.ink,true);
   rect(s,64,304,520,226,C.white,C.line,1.5);
   text(s,'pyproject.toml · setup.cfg',86,321,476,37,26,C.teal,true,CODE);
   text(s,'README와 소스 코드',86,371,476,38,28,C.ink,true);
   line(s,86,429,476);
   text(s,'공통 안내도 읽음',86,443,476,30,24,C.sub,true);
   text(s,'AGENTS.md · architecture.md',86,481,476,31,24,C.sub,false,CODE);
   rect(s,674,304,542,115,C.pale,C.teal,1.5);
   text(s,'실행',696,314,90,35,25,C.teal,true);
   text(s,'Python 3.9+ · 표준 라이브러리',802,315,392,35,26,C.ink,true);
   text(s,'별도 third-party runtime dependency 없음',696,368,498,33,25,C.ink,true);
   rect(s,674,440,542,90,C.white,C.line,1.5);
   text(s,'빌드',696,454,90,35,25,C.sub,true);
   text(s,'setuptools · wheel',802,454,392,35,28,C.ink,true,CODE);
   text(s,'image-contracts.md · testing.md는 읽지 않음',64,558,770,34,25,C.sub);
   text(s,'다음 · 두 접근 비교',868,558,348,34,25,C.teal,true,FONT,'right');
   return s;
  },
  S47(p){
   const s=make(p,'S47','두 Task에서 상세 문서 접근이 달랐다','ACT 2 · 두 답변을 확인한 뒤 접근을 비교',
    'TRIAL-005A/B 최종 실행 · Codex CLI 0.154.0 · 실제 접근 기록의 요약·재구성',
    '* testing.md는 A 최종 실행에서 관찰(이전 A와 다름) · 현재 Desktop 검증 아님','OBSERVED_PRODUCT');
   text(s,'공통 안내는 함께, 일부 상세와 설정은 다르게 읽었다',64,184,1152,43,30,C.teal,true);
   const values=[['문서 / 설정','A · Crop 범위','B · 실행 의존성'],['AGENTS.md','읽음','읽음'],['README.md','읽음','읽음'],['docs/architecture.md','읽음','읽음'],['docs/image-contracts.md','읽음','읽지 않음'],['docs/testing.md *','읽음','읽지 않음'],['pyproject.toml','읽지 않음','읽음'],['setup.cfg','읽지 않음','읽음']];
   const table=s.tables.add({rows:8,columns:3,left:64,top:244,width:748,height:312,columnWidths:[380,176,192],values});
   table.styleOptions={headerRow:false,bandedRows:false};table.borders.assign({fill:C.line,width:0.8,style:'solid'});
   for(let row=0;row<8;row++){
    table.rows[row].height=39;
    for(let col=0;col<3;col++){
     const cell=table.getCell(row,col),different=row>=4,read=values[row][col]==='읽음';
     cell.fill=row===0?C.bg:different&&col>0&&read?C.pale:C.white;
     cell.text.style={typeface:row>0&&col===0?CODE:FONT,fontSize:24,color:row===0?C.ink:different&&read?C.teal:C.sub,bold:row===0||different&&read,alignment:col===0?'left':'center',verticalAlignment:'middle',autoFit:'none',wrap:'none'};
    }
   }
   text(s,'관찰한 것',860,246,356,36,28,C.teal,true);
   text(s,'이미지 명세·테스트 안내: A만\n패키지 설정: B만',860,299,356,78,25,C.ink,true);
   text(s,'아직 말할 수 없는 것',860,407,356,36,27,C.warn,true);
   text(s,'항상 필요한 문서만 읽음\n토큰 절약·성능 개선',860,460,356,72,25,C.sub);
   text(s,'둘 다 구조 문서·소스도 확인 · 목록은 읽기 순서가 아님',64,573,1152,31,24,C.sub);
   return s;
  },
  S48(p){
   const s=make(p,'S48','Context 정리에서 확인한 네 가지','ACT 2 · 성과와 근거 범위를 회수',
    'STATE-01 · TRIAL-003 · STATE-02→03 · TRIAL-005A/B의 개별 관찰 요약',
    '개별 관찰의 교육용 정리 · 보편적 정확도/효율 개선·독립적 인과성은 입증하지 않음','OBSERVED_PRODUCT / TEACHING_MODEL');
   text(s,'정보를 기록하고, 찾아 쓴 근거를 확인했다',64,183,1152,44,32,C.teal,true);
   const items=[['01','기록','공통 안내를\n저장소에 남김','STATE-01'],['02','지침 활용','지정된 테스트\n명령을 실제 사용','TRIAL-003'],['03','정보 보존','핵심을 유지하고\n문서 위치를 나눔','STATE-02→03'],['04','접근 관찰','두 Task에서\n상세 접근이 달랐음','TRIAL-005A/B']];
   items.forEach(([num,title,body,source],i)=>{
    const x=64+i*294;
    text(s,num,x,263,264,33,24,C.sub,true,CODE);
    text(s,title,x,311,264,44,33,C.ink,true);
    line(s,x,370,264,C.teal,2);
    text(s,body,x,395,264,95,28,C.ink);
    text(s,source,x,509,264,32,23,C.sub,false,CODE);
    if(i<items.length-1)arrow(s,x+270,326,18,14);
   });
   text(s,'우리 팀에서 먼저 정리할 공통 안내나 상세 정보 한 가지는?',64,563,1152,37,28,C.teal,true);
   return s;
  },
  S49(p){
   const s=make(p,'S49','지식은 정리됐지만 절차는 반복된다','ACT 2 · 남은 질문에서 Harness로',
    '교육용 요청 재구성 · 다음 ACT에서 TRIAL-006/007의 실제 기록을 비교',
    'Context 선택 완전 해결 미입증 · 다음 예시도 Prompt 단독 효과로 귀속하지 않음');
   text(s,'필요한 정보의 위치와, 일을 수행하는 방법은 다른 질문',64,181,1152,44,30,C.teal,true);
   text(s,'정리한 것',64,250,454,38,29,C.teal,true);
   rect(s,64,308,454,184,C.white,C.line,1.5);
   text(s,'AGENTS.md',88,326,406,39,31,C.ink,true,CODE);
   text(s,'기본 안내 · 상세의 위치',88,375,406,35,27,C.sub);
   down(s,272,423,24,18);
   text(s,'필요한 명세 · 구조 · 테스트',88,451,406,32,26,C.ink,true);
   text(s,'아직 다시 요청하는 것',674,250,542,38,29,C.ink,true);
   prompt(s,674,308,542,210,'성능 조사 요청의 예','');
   text(s,'normalize 성능을 조사해줘.',694,371,502,34,27,C.ink,true);
   rect(s,694,414,502,88,C.pale);
   text(s,'먼저 측정·조사하고 계획해줘.\n변경 뒤 검증·재측정·비교·검토해줘.',710,425,470,66,25,C.ink);
   text(s,'이 절차를 누가 유지하고, 다음 작업에서 어떻게 다시 쓸까?',64,552,1152,42,30,C.teal,true);
   return s;
  },
  S50(p){
   const s=make(p,'S50','두 실제 요청에 같은 절차가 반복됐다','ACT 3 · 질문에서 보존된 기록으로',
    'TRIAL-006 실제 Prompt 발췌·번역 / TRIAL-007 보존된 Task Prompt 요약 · 그림은 설명용 삽화',
    'Global Harness 영향으로 Prompt-only attribution은 PARTIAL · 성능 전후 그림·현재 제품 화면 아님','OBSERVED_PRODUCT');
   const tile=(x)=>s.images.add({blob:illustration,contentType:'image/png',fit:'contain',position:{left:x,top:190,width:64,height:64},crop:{left:952/1774,right:(1774-1270)/1774,top:274/887,bottom:(887-592)/887},alt:'Approved AI-generated image-processing illustration; no observed input/output or benchmark result.'});
   tile(64);tile(674);
   text(s,'A · 크기 변경',148,190,448,37,29,C.teal,true);
   text(s,'resize_nearest',148,231,448,30,24,C.sub,false,CODE);
   text(s,'B · 픽셀값 정규화',758,190,458,37,29,C.teal,true);
   text(s,'normalize',758,231,458,30,24,C.sub,false,CODE);
   const cols=[{x:64,label:'실제 요청의 핵심 발췌·번역',rows:['변경 전에 benchmark를 실행해줘.\n구현·명세·테스트를 조사해줘.','간단한 계획을 먼저 제시하고,\n근거 있는 최소 변경을 해줘.','관련·전체 테스트를 실행하고,\n같은 benchmark로 비교·검토해줘.']},
    {x:674,label:'보존된 요청 요약의 번역',rows:['수정 전에 측정하고,\n소스·명세·테스트를 확인.','계획을 밝힌 뒤\n최소한의 변경을 수행.','관련·전체 테스트와 동일 측정,\nCLI·diff 확인 및 최종 검토.']}];
   cols.forEach(c=>{
    text(s,c.label,c.x,274,542,31,24,C.sub,true);
    c.rows.forEach((body,i)=>{
     const y=315+i*80;
     rect(s,c.x,y,542,76,i===1?C.white:C.pale,i===1?C.line:'none',i===1?1:0);
     text(s,`0${i+1}`,c.x+14,y+14,46,32,24,C.teal,true,CODE);
     text(s,body,c.x+78,y+5,448,65,25,C.ink);
    });
   });
   text(s,'목표는 달라도, 확인하고 판단하는 지시가 반복됐다',64,566,1152,30,24,C.teal,true);
   return s;
  },
  S51(p){
   const s=make(p,'S51','테스트 명령과 작업 절차의 책임을 나눈다','ACT 3 · 어떤 파일인가보다 무엇을 유지하는가',
    '교육용 책임 구분 · S34의 검증 지침과 TRIAL-006/007의 반복 절차를 연결',
    'AGENTS.md에도 절차를 쓸 수 있음 · 제품의 배타적 분류나 Skill 필요성의 보편 증명이 아님');
   const cols=[{x:64,title:'공통 안내의 책임',color:C.pale,rows:['무엇을 지켜야 하나?','어디서 테스트를 시작하나?','어떤 명세·제약을 참고하나?']},
    {x:674,title:'작업 절차의 책임',color:C.white,rows:['언제 측정·조사·변경하나?','어떤 조건으로 비교·중단하나?','무엇을 근거로 보고하나?']}];
   cols.forEach(c=>{
    text(s,c.title,c.x,217,542,44,33,C.teal,true);
    rect(s,c.x,286,542,223,c.color,c.color===C.pale?C.teal:C.line,1.5);
    c.rows.forEach((body,i)=>text(s,body,c.x+22,304+i*64,498,48,29,C.ink,i===1));
   });
   text(s,'AGENTS.md에도 절차를 쓸 수 있다.',64,541,1152,37,29,C.ink,true);
   text(s,'반복되는 방법을 누가 검토하고 고칠지, 유지할 단위를 정한다.',64,575,1152,31,27,C.teal,true);
   return s;
  }
 };
}
