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
   // DEC-0125: retained S38 maps to S47 after the final sequence boundary.
   const s=make(p,'S38','작업이 달라도 필요한 정보는 같을까?','ACT 2 · 작업별 정보의 관련성',
    '교육용 정보 배치 모델 · TRIAL-004의 관련성 관찰을 바탕으로 설명',
    '파일 읽기 순서·자동 적용·성능 효과를 관찰한 그림이 아님');
   text(s,'같은 프로젝트라도, 작업에 따라 필요한 정보가 달라진다.',64,180,1152,40,26,C.sub);
   text(s,'이번 작업',64,252,282,40,28,C.ink,true);
   text(s,'두 작업에 공통',390,252,390,40,28,C.teal,true,FONT,'center');
   text(s,'이번 작업에 필요한 정보',824,252,392,40,28,C.ink,true);
   rect(s,390,314,390,204,C.pale,C.teal,1.5);
   ['프로젝트 목적','공통 제약','실행·검증의 시작점'].forEach((label,i)=>{
    text(s,label,414,333+i*56,342,42,i===2?27:29,C.teal,true,FONT,'center');
   });
   [['README 수정','빌드 도구·설정',326],['crop 조사','좌표 범위·이미지 명세',442]].forEach(([task,detail,y])=>{
    text(s,task,64,y,282,64,32,C.ink,true);
    text(s,detail,824,y,392,64,28,C.ink,true);
   });
   line(s,64,412,282);
   line(s,824,412,392);
   // Keep the approved emphasis and hand off to document placement.
   rect(s,64,548,1152,52,C.teal);
   text(s,'공통 정보와 작업별 정보는 어디에 둘까?',88,552,1104,44,34,C.white,true);
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
   // DEC-0125: retained S40 maps to S46; DEC-0124 caution stays intact.
   const s=make(p,'S40','지침을 놓쳐도 답은 그럴듯할 수 있다','ACT 2 · 지침 누락·할루시네이션 주의',
    '기존 crop 명세 기반 교육용 오답 예시',
    '새 Trial·실제 Agent 응답·현재 Codex의 실패 관찰이 아님','TEACHING_MODEL');
   text(s,'내가 제공한 정보',64,204,478,38,30,C.ink,true);
   text(s,'그럴듯한 오답 예시',652,204,564,38,30,C.ink,true);
   rect(s,64,262,478,116,C.pale,C.teal,1.5);
   text(s,'Context · 명세',84,270,438,30,24,C.teal,true);
   text(s,'시작 열은 포함한다.',84,305,438,32,28,C.ink,true);
   text(s,'끝 열은 제외한다.',84,339,438,32,28,C.teal,true);
   prompt(s,64,400,478,144,'작업 요청','너비 6인 이미지에서 crop 2 5의\n포함 열과 출력 폭을 알려줘.');
   text(s,'“명세대로 해석했습니다.”',652,257,564,36,26,C.sub,true);
   [2,3,4,5].forEach((column,i)=>{
    const x=652+i*108,wrong=column===5;
    rect(s,x,307,94,72,wrong?C.redPale:C.white,wrong?C.red:C.line,1.5);
    text(s,String(column),x,315,94,56,38,wrong?C.red:C.ink,true,CODE,'center');
   });
   text(s,'놓친 조건: 끝 열 제외',652,388,564,34,26,C.red,true);
   arrow(s,578,329,38,24);
   text(s,'출력 폭',652,449,120,38,28,C.ink,true);
   text(s,'4',784,437,60,60,48,C.red,true,CODE,'center');
   text(s,'5 − 2 + 1 = 4',874,451,342,36,26,C.sub,false,CODE);
   text(s,'명세 기준: 열 2·3·4, 폭 3',652,510,564,32,24,C.teal,true);
   text(s,'그럴듯한 답도, 지침·근거와 대조한다.',64,562,1152,42,32,C.teal,true);
   return s;
  },
  S41(p){
   const s=make(p,'S41','분리한 문서에서 필요한 명세 찾기','ACT 2 · 문서 분리 후의 탐색 경로',
    '교육용 탐색 경로 · 저장된 명세 기반 재구성 · 실제 읽기 순서가 아님',
    '자동 탐색·완벽한 선택·성능 향상·토큰 절약을 입증한 그림이 아님');
   text(s,'이 구조에서 crop 질문은 어떤 명세로 이어질까?',64,184,1152,44,31,C.teal,true);
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
   text(s,'이제 실제 작업에서 어떤 문서를 읽었는지 확인한다.',64,533,1152,41,31,C.teal,true);
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
   // DEC-0126: retained S48 is current S55; recap four bounded observations.
   const s=make(p,'S48','정보를 남기고, 작업에서 활용했는지 확인했다','ACT 2 · 정리한 정보와 실제 활용',
    'STATE-01 · TRIAL-003 · STATE-02→03 · TRIAL-005A/B의 개별 관찰 요약',
    '개별 관찰의 교육용 정리 · 보편적 정확도/효율 개선·독립적 인과성은 입증하지 않음','OBSERVED_PRODUCT / TEACHING_MODEL');
   const caption=(num,label,x,y)=>{
    text(s,num,x,y+3,34,33,22,C.teal,true,CODE);
    text(s,label,x+42,y,506,39,28,C.ink,true);
   };
   const page=(x,y,w,h,label)=>{
    rect(s,x,y,w,h,C.white,C.line,1.5);
    text(s,label,x+10,y+5,w-20,32,22,C.ink,true,CODE);
   };

   caption('01','공통 안내를 남겼다',64,187);
   [234,278,322].forEach(y=>{
    const q=rect(s,84,y,218,32,C.pale);q.borderRadius=7;
    text(s,'테스트·제약',96,y,194,32,24,C.teal,true,FONT,'center');
   });
   arrow(s,326,280,42,22);
   page(408,234,170,120,'AGENTS.md');
   [284,307,330].forEach((y,i)=>rect(s,426,y,134-i*14,10,C.teal));

   caption('02','남긴 지침을 작업에 활용했다',668,187);
   page(684,234,166,120,'AGENTS.md');
   rect(s,694,281,146,48,C.pale);
   text(s,'테스트 명령',698,287,138,34,23,C.teal,true,FONT,'center');
   arrow(s,863,281,20,16);
   s.shapes.add({geometry:'ellipse',name:'Agent reads the recorded guidance',position:{left:895,top:257,width:70,height:70},fill:C.pale,line:{fill:C.teal,width:1.5}});
   text(s,'Agent',895,271,70,40,22,C.teal,true,CODE,'center');
   arrow(s,977,281,20,16);
   rect(s,1009,234,191,120,C.ink);
   rect(s,1009,234,191,29,C.line);
   text(s,'실행창',1023,234,163,29,21,C.ink,true);
   text(s,'테스트 실행',1023,282,163,46,26,C.white,true,FONT,'center');

   caption('03','핵심을 보존하며 문서를 나눴다',64,379);
   page(84,428,170,118,'AGENTS.md');
   rect(s,98,468,142,12,C.teal);
   const detailColors=[C.sub,C.warn,C.green];
   detailColors.forEach((color,i)=>rect(s,98,489+i*19,142,9,color));
   arrow(s,290,469,42,22);
   page(356,428,248,39,'AGENTS.md');
   rect(s,570,439,20,13,C.teal);
   ['구조','명세','테스트'].forEach((label,i)=>{
    const x=356+i*86;
    rect(s,x,484,76,62,C.white,C.line,1.5);
    rect(s,x+8,493,60,9,detailColors[i]);
    text(s,label,x+4,510,68,31,22,C.ink,true,FONT,'center');
   });

   caption('04','질문에 따라 읽은 상세가 달랐다',668,379);
   [['crop 범위','이미지 명세',438],['실행 의존성','패키지 설정',502]].forEach(([task,detail,y])=>{
    const q=rect(s,680,y,142,42,C.white,C.line,1.5);q.borderRadius=7;
    text(s,task,684,y+3,134,36,23,C.ink,true,FONT,'center');
    arrow(s,833,y+14,20,14);
    rect(s,866,y,142,42,C.pale,C.teal,1.5);
    text(s,'AGENTS.md',872,y+5,130,32,21,C.teal,true,CODE,'center');
    arrow(s,1019,y+14,20,14);
    rect(s,1052,y,164,42,C.white,C.line,1.5);
    text(s,detail,1058,y+3,152,36,23,C.ink,true,FONT,'center');
   });
   text(s,'우리 팀에서 먼저 정리할 공통 안내나 상세 정보는 무엇인가요?',64,565,1152,34,28,C.teal,true);
   return s;
  },
  S49(p){
   // DEC-0127: retained S49 maps to current S59 at the ACT2 handoff.
   const s=make(p,'S49','프로젝트 기준과 작업 절차는 역할이 다르다','ACT 2 · 프로젝트 안내와 수행 방법',
    '교육용 요청 재구성 · 다음 ACT에서 TRIAL-006/007의 실제 기록을 비교',
    'Context 선택 완전 해결 미입증 · 다음 예시도 Prompt 단독 효과로 귀속하지 않음');
   const request=rect(s,64,174,1152,64,C.white,C.line,1.5);request.borderRadius=10;
   text(s,'이번 요청',84,188,142,36,24,C.teal,true);
   text(s,'normalize 성능을 조사해줘.',250,185,896,42,31,C.ink,true);

   text(s,'Project Context · 기준과 안내',64,257,542,38,29,C.teal,true);
   text(s,'무엇을 참고하고 지켜야 할까?',64,300,542,34,25,C.sub);
   text(s,'Workflow · 작업 순서',674,257,542,38,29,C.ink,true);
   text(s,'어떤 순서로 진행할까?',674,300,542,34,25,C.sub);

   rect(s,64,344,542,170,C.white,C.line,1.5);
   text(s,'AGENTS.md',88,354,494,40,31,C.ink,true,CODE);
   ['기존 이미지 명세 보존','테스트 명령의 위치','성능 측정 기준'].forEach((label,i)=>{
    const y=404+i*35;
    rect(s,88,y+8,10,10,C.teal);
    text(s,label,116,y,466,30,26,C.ink);
   });
   text(s,'여러 작업의 기본 안내',64,520,542,30,24,C.teal,true);

   ['변경 전 측정','조사·계획·변경 판단','테스트·동일 조건 비교'].forEach((label,i)=>{
    const y=350+i*53;
    s.shapes.add({geometry:'ellipse',position:{left:686,top:y+3,width:36,height:36},fill:C.pale,line:{fill:C.teal,width:1.5}});
    text(s,`0${i+1}`,686,y+3,36,36,21,C.teal,true,CODE,'center');
    text(s,label,750,y,466,42,28,C.ink,true);
    if(i<2)s.shapes.add({geometry:'connector',kind:'straight',position:{left:704,top:y+42,width:0,height:13},line:{fill:C.teal,width:2.5},tail:{type:'triangle',width:'sm',length:'sm'}});
   });
   text(s,'SKILL.md 후보 · 필요한 작업에 재사용',674,520,542,30,24,C.teal,true);
   text(s,'이 작업 순서를 다음 요청에도 매번 다시 적어야 할까요?',64,563,1152,36,30,C.teal,true);
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
   const cols=[{x:64,rows:['변경 전에 benchmark를 실행해줘.\n구현·명세·테스트를 조사해줘.','간단한 계획을 먼저 제시하고,\n근거 있는 최소 변경을 해줘.','관련·전체 테스트를 실행하고,\n같은 benchmark로 비교·검토해줘.']},
    {x:674,rows:['수정 전에 측정하고,\n소스·명세·테스트를 확인.','계획을 밝힌 뒤\n최소한의 변경을 수행.','관련·전체 테스트와 동일 측정,\nCLI·diff 확인 및 최종 검토.']}];
   cols.forEach(c=>{
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
