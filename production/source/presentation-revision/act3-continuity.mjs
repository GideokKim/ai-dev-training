/** DEC-0062: repeated procedure, scoped evidence and conditional structures. */
import fs from 'node:fs/promises';
import path from 'node:path';
import * as H from './helpers.mjs';

export async function loadAct3ContinuitySlides(root, previous) {
 const {C,text,line,rect,arrow,CODE,FONT}=H;
 const cppIllustration=new Uint8Array(await fs.readFile(path.join(root,'prototype/image-illustration-pilot/assets/S53.png')));
 const original={...previous};
 const make=(p,id,title,eyebrow,source,boundary,type='TEACHING_MODEL')=>{
  const s=H.frame(p,id,title,eyebrow,source,boundary,type);
  s.shapes.items.at(-1).position={left:64,top:650,width:1152,height:30};
  return s;
 };
 const replace=(s,from,to)=>{
  const q=s.shapes.items.find(q=>q.name===from.slice(0,60));
  if(!q)throw new Error('Missing retained text: '+from);
  q.text=to;q.name=to.slice(0,60);
 };
 const down=(s,x,y,w=24,h=18,color=C.teal)=>s.shapes.add({geometry:'downArrow',position:{left:x,top:y,width:w,height:h},fill:color,line:{fill:'none',width:0}});
 const panel=(s,x,y,w,h,title,body,fill=C.white)=>{
  rect(s,x,y,w,h,fill,C.line,1);
  text(s,title,x+18,y+12,w-36,38,27,C.teal,true);
  text(s,body,x+18,y+67,w-36,h-78,27,C.ink);
 };
 return {
  S50(p){
   const s=original.S50(p,H);
   replace(s,'ACT 3 · 질문에서 보존된 기록으로','ACT 3 · Harness: 작업 방법과 실행·검증 환경 설계');
   return s;
  },
  S51(p){
   const s=make(p,'S51','테스트 명령을 언제 쓰고 무엇을 판단할까?','ACT 3 · 같은 정보를 작업에 적용하는 방법',
    '교육용 수행 예시 · TRIAL-006/007의 반복 요청을 바탕으로 구성',
    '실제 실행 순서·결과의 재현 아님 · 이 방법도 AGENTS.md에 기록할 수 있음');
   text(s,'예시: normalize 성능 조사',64,175,1152,40,29,C.teal,true);
   rect(s,64,235,1152,78,C.pale,C.line,1);
   text(s,'AGENTS.md',84,245,252,32,27,C.teal,true,CODE);
   text(s,'프로젝트에서 확인한 정보',84,278,252,27,21,C.sub);
   text(s,'테스트 실행 방법',378,254,246,40,27,C.ink,true);
   text(s,'보존할 동작 명세',663,254,254,40,27,C.ink,true);
   text(s,'성능 측정 방법',963,254,233,40,27,C.ink,true);
   // The same source feeds each stage; these are not exclusive file classes.
   s.shapes.add({geometry:'line',position:{left:640,top:313,width:0,height:20},fill:'none',line:{fill:C.line,width:2}});
   line(s,240,333,800,C.line,2);
   [240,640,1040].forEach(x=>down(s,x-9,333,18,18,C.line));
   const stages=[
    [64,'01  변경 전','현재 테스트·성능 확인','원래 상태는 어땠지?'],
    [464,'02  변경 후','같은 조건으로 다시 측정','무엇이 달라졌지?'],
    [864,'03  완료 판단','동작 보존 + 측정 결과','완료라고 말할 근거는?']
   ];
   stages.forEach(([x,title,body,question],i)=>{
    text(s,title,x,358,352,42,30,C.teal,true);
    if(i<2){
     rect(s,x,410,352,48,C.white,C.line,1);
     rect(s,x+12,418,31,31,C.teal);
     text(s,'T',x+12,418,31,31,22,C.white,true,CODE,'center');
     text(s,'테스트 실행',x+59,415,273,35,29,C.ink,true);
    }else{
     text(s,'결과와 미확인 사항 보고',x,415,352,35,27,C.ink,true);
    }
    text(s,body,x,469,352,34,26,C.sub);
    text(s,question,x,510,352,37,27,C.ink,true);
    if(i<2)arrow(s,x+362,426,28,18);
   });
   text(s,'명령과 함께, 실행할 시점과 결과의 판단 기준도 정한다',64,564,1152,33,29,C.teal,true);
   return s;
  },
  S52(p){
   const s=make(p,'S52','목표·기준·방법을 한 작업에 적용한다','ACT 3 · 이번 요청과 계속 쓸 기준·방법',
    '교육용 적용 예 · TRIAL-006/007의 목표·보존 조건·반복 방법을 한 작업에 연결',
    '관계 설명용 도식 · 실제 실행 기록이나 제품의 공식 분류가 아님');
   // The goal enters one work area; project criteria bound it and a method applies.
   rect(s,64,210,744,92,C.white,C.line,1);
   text(s,'이번 목표',84,225,164,42,29,C.teal,true);
   text(s,'normalize 성능을 조사해줘.',250,231,538,42,30,C.ink,true);
   down(s,420,311,27,23);
   rect(s,64,340,744,201,C.bg,C.teal,2);
   text(s,'프로젝트에서 지킬 기준',84,349,704,36,27,C.teal,true);
   text(s,'기존 이미지 동작 · 공개 명세 보존',84,389,704,36,29,C.ink,true);
   rect(s,84,445,704,74,C.white,C.line,1);
   text(s,'normalize 구현 조사 · 변경 여부 판단',100,460,672,43,29,C.ink,true);
   rect(s,936,210,280,331,C.pale,C.line,1);
   text(s,'재사용할\n수행 방법',956,227,240,83,31,C.teal,true);
   line(s,956,321,240);
   text(s,'측정·조사\n검증·비교',956,340,240,85,29,C.ink,true);
   text(s,'이번 작업에도 적용',956,458,240,37,25,C.teal,true);
   s.shapes.add({geometry:'leftArrow',position:{left:825,top:468,width:93,height:27},fill:C.teal,line:{fill:'none',width:0}});
   text(s,'같은 수행 방법이 다음 작업에도 필요하다면?',64,558,1152,39,30,C.teal,true);
   return s;
  },
  S53(p){
   const s=make(p,'S53','반복 절차를 Skill로 모으는 이유','ACT 3 · 이번 요청과 프로젝트가 유지할 수행 방법',
    'DEC-0017 · 프로젝트 Skill을 선택한 설계 의도 · 왼쪽 요청은 교육용 요약',
    '설계 선택이며 성공 증명 아님 · 현재 제품 표면·계정·호출 경로는 별도 확인');
   text(s,'작업마다 달라지는 요청',64,179,492,42,30,C.ink,true);
   const requests=[
    [244,'A  resize_nearest 성능 조사'],
    [399,'B  normalize 성능 조사']
   ];
   requests.forEach(([y,goal])=>{
    rect(s,64,y,488,121,C.white,C.line,1);
    text(s,goal,84,y+12,448,42,27,C.teal,true);
    text(s,'이번 목표 · 허용 범위 · 보존 조건',84,y+71,448,32,24,C.sub);
   });
   // A single repository-owned method feeds both task-specific requests.
   rect(s,736,244,480,276,C.pale,C.line,1);
   text(s,'한 곳에서 관리할 수행 방법',756,254,440,38,27,C.teal,true);
   text(s,'graypipe-performance / SKILL.md',756,302,440,32,22,C.ink,true,CODE);
   line(s,756,346,440);
   ['측정·조사','계획·변경 판단','검증·동일 측정·보고'].forEach((t,i)=>text(s,t,756,361+i*49,440,38,28,C.ink,true));
   // One stroke weight and native arrowheads keep the shared branch consistent.
   s.shapes.add({geometry:'line',position:{left:665,top:304,width:0,height:155},fill:'none',line:{fill:C.teal,width:3}});
   line(s,665,382,71,C.teal,3);
   [304,459].forEach(y=>s.shapes.add({geometry:'connector',kind:'straight',position:{left:558,top:y,width:107,height:0},line:{fill:C.teal,width:3},head:{type:'triangle',width:'sm',length:'sm'}}));
   text(s,'재사용',568,367,84,30,23,C.teal,true);
   text(s,'같은 절차를 매번 다시 쓰지 않고, 한 곳에서 관리한다',64,559,1152,38,30,C.teal,true);
   return s;
  },
  S54(p){
   const s=make(p,'S54','Skill 발견·호출·본문 포함의 근거','ACT 3 · 밝기 통계 작업에서 확인한 CLI 기록',
    'TRIAL-008 · Codex CLI 0.154.0 · 기록 발췌·번역·재구성 (실제 UI 캡처 아님)',
    '별도 load 이벤트 없음 · 지침 준수의 보장은 아님 · 현재 Desktop·암묵 호출 미검증','OBSERVED_PRODUCT');
   text(s,'재사용할 방법을 밝기 통계(image_statistics) 요청에 연결했다',64,174,1152,40,29,C.teal,true);
   const stages=[
    [64,328,'01  목록에서 발견'],
    [432,368,'02  요청에 명시 호출'],
    [840,376,'03  실행 기록 확인']
   ];
   stages.forEach(([x,w,title])=>{
    text(s,title,x,228,w,37,26,C.ink,true);
    line(s,x,272,w,C.teal,3);
   });
   [402,810].forEach(x=>s.shapes.add({geometry:'connector',kind:'straight',position:{left:x,top:247,width:20,height:0},line:{fill:C.teal,width:3},tail:{type:'triangle',width:'sm',length:'sm'}}));
   // Native evidence excerpts: no terminal chrome or invented UI events.
   text(s,'/skills',64,294,328,35,26,C.teal,true,CODE);
   rect(s,64,345,328,126,C.white,C.line,1);
   text(s,'graypipe-performance',80,357,296,34,23,C.teal,true,CODE);
   text(s,'Investigate repository\nperformance with reproduc…',80,404,296,52,19,C.sub,false,CODE);
   text(s,'이름·설명 일부 표시\n목록에는 경로가 없었음',64,490,328,66,24,C.sub);
   rect(s,432,294,368,244,C.white,C.line,1);
   text(s,'실제 요청의 발췌·번역 요약',448,306,336,29,20,C.sub);
   text(s,'$graypipe-performance',448,348,336,34,24,C.teal,true,CODE);
   line(s,448,394,336);
   text(s,'image_statistics 조사\n실행 시간 또는 할당량 개선\n결과 6항목 보존 · 범위 한정',448,410,336,107,24,C.ink);
   text(s,'실행 trace의 <skill> 항목',840,294,376,32,23,C.sub);
   text(s,'graypipe-performance',840,339,376,34,24,C.teal,true,CODE);
   text(s,'.agents/skills/\ngraypipe-performance/SKILL.md',840,386,376,58,21,C.ink,false,CODE);
   rect(s,840,466,376,72,C.pale,C.line,1);
   text(s,'SKILL.md 전체 본문 포함',856,475,344,32,26,C.teal,true);
   text(s,'절차 · 보고 · 제약',856,509,344,24,21,C.sub);
   text(s,'이름·경로·전체 본문으로, 이번 작업에 포함된 지침을 확인했다',64,566,1152,35,28,C.teal,true);
   return s;
  },
  S55(p){
   const s=make(p,'S55','Skill 지침과 실제 작업 기록의 대응','ACT 3 · 밝기 통계 작업에서 지침 수행 근거 확인',
    'TRIAL-008 · Codex CLI 0.154.0 · Skill 번역 요약 + 작업 기록 재구성 (실제 캡처 아님)',
    '관찰된 대응 · 전체 지침 준수·Skill 단독 인과성·우월성·토큰/속도 효과는 입증하지 않음','OBSERVED_PRODUCT');
   rect(s,64,183,440,59,C.white,C.line,1);
   text(s,'앞 장: Skill 본문 포함 확인',82,195,404,35,26,C.sub,true);
   s.shapes.add({geometry:'connector',kind:'straight',position:{left:516,top:212,width:32,height:0},line:{fill:C.teal,width:3},tail:{type:'triangle',width:'sm',length:'sm'}});
   rect(s,560,183,656,59,C.pale,C.line,1);
   text(s,'이번 장: 지침과 수행 기록 대조',580,195,616,35,27,C.teal,true);
   const values=[
    ['','Skill 지침 · 번역 요약','실제 작업 기록 · 관찰 요약'],
    ['01','변경 전에 기준선 측정','실행 출력: 변경 전 3회 측정\n입력 지문·결과 6항목 확인'],
    ['02','계획이 요구되면 변경 전에 공유\n허용 범위에서 최소 변경','변경 전 메시지 + 최종 diff\nstatistics.py의 해당 함수만 변경'],
    ['03','테스트 실행\n같은 입력·설정으로 다시 측정','함수 테스트 1/1 · 전체 11/11 통과\n같은 benchmark 3회 + CLI·diff 확인']
   ];
   const table=s.tables.add({rows:4,columns:3,left:64,top:258,width:1152,height:290,columnWidths:[64,476,612],values});
   table.styleOptions={headerRow:false,bandedRows:false};table.borders.assign({fill:C.line,width:0.8,style:'solid'});
   for(let r=0;r<4;r++){
    table.rows[r].height=[44,76,85,85][r];
    for(let c=0;c<3;c++){
     const cell=table.getCell(r,c);cell.fill=r===0||c===0?C.pale:C.white;
     cell.text.style={typeface:FONT,fontSize:c===0?27:25,color:r===0||c===0?C.teal:C.ink,bold:r===0||c<2,alignment:c===0?'center':'left',verticalAlignment:'middle',autoFit:'none',wrap:'none'};
    }
   }
   text(s,'본문 포함은 입력의 근거, 수행 여부는 작업 기록으로 확인한다',64,565,1152,31,27,C.teal,true);
   return s;
  },
  S56(p){
   const s=make(p,'S56','절차는 재사용하고, 답은 근거로 정한다','ACT 3 · Skill에 고정할 것과 이번에 판단할 것',
    'STATE-04 SKILL.md 번역 요약 + 교육용 질문·판단 경로 · 새 실행 결과가 아님',
    '특정 구현·Trial 수치를 미리 넣지 않았음 · 보류는 허용된 경로이며 TRIAL-008의 관찰 결과 아님','OBSERVED_PRODUCT / TEACHING_MODEL');
   rect(s,64,205,436,352,C.pale,C.line,1);
   text(s,'Skill · 재사용할 절차',84,217,396,37,29,C.teal,true);
   text(s,'이 Skill의 지침 일부 · 번역 요약',84,255,396,28,21,C.sub);
   const steps=[
    [304,'01','변경 전 기준선 측정'],
    [380,'02','같은 조건으로 검증·비교'],
    [456,'03','근거·trade-off·한계 보고']
   ];
   steps.forEach(([y,n,label])=>{
    text(s,n,84,y,46,38,27,C.teal,true);
    text(s,label,144,y,336,38,26,C.ink,true);
   });
   text(s,'다음 성능 작업에도 같은 방법',84,513,396,30,24,C.teal,true);
   text(s,'적용',518,334,62,31,23,C.teal,true,FONT,'center');
   s.shapes.add({geometry:'connector',kind:'straight',position:{left:516,top:380,width:64,height:0},line:{fill:C.teal,width:3},tail:{type:'triangle',width:'sm',length:'sm'}});
   rect(s,596,205,620,352,C.white,C.line,1);
   text(s,'이번 작업 · 근거로 판단할 답',616,217,580,37,29,C.teal,true);
   text(s,'밝기 통계 작업에서 답할 질문',616,255,580,28,21,C.sub);
   rect(s,616,295,580,55,C.pale);
   text(s,'이번 측정값 · 테스트 · diff',632,304,548,37,27,C.teal,true,FONT,'center');
   s.shapes.add({geometry:'connector',kind:'straight',position:{left:906,top:350,width:0,height:22},line:{fill:C.teal,width:2},tail:{type:'triangle',width:'sm',length:'sm'}});
   const answers=[
    [616,'구현','어떤 후보를 쓸까?'],
    [812,'측정값','시간·할당량은?'],
    [1008,'trade-off','무엇을 감수할까?']
   ];
   answers.forEach(([x,label,question])=>{
    text(s,label,x,380,188,29,23,C.sub,true,FONT,'center');
    text(s,question,x,411,188,33,23,C.ink,true,FONT,'center');
   });
   // Both branches are allowed decisions, not observed Trial outcomes.
   [710,906,1102].forEach(x=>s.shapes.add({geometry:'line',position:{left:x,top:447,width:0,height:15},fill:'none',line:{fill:C.line,width:2}}));
   line(s,710,462,392,C.line,2);
   [754,1058].forEach(x=>s.shapes.add({geometry:'connector',kind:'straight',position:{left:x,top:462,width:0,height:18},line:{fill:C.line,width:2},tail:{type:'triangle',width:'sm',length:'sm'}}));
   [[616,'근거가 뒷받침하면','변경 채택'],[920,'변경 근거가 부족하면','변경 보류']].forEach(([x,condition,decision])=>{
    rect(s,x,487,276,58,C.bg,C.line,1);
    text(s,condition,x+8,489,260,25,20,C.sub,false,FONT,'center');
    text(s,decision,x+8,514,260,28,25,C.teal,true,FONT,'center');
   });
   text(s,'변경을 정당화할 근거가 없다면, 보류도 유효한 결론이다',64,568,1152,32,28,C.ink,true);
   return s;
  },
  S57(p){
   const s=make(p,'S57','밝기 통계 계산의 성능 개선 후보','ACT 3 · Skill 절차로 조사하고, 기록으로 선택한 구현',
    'TRIAL-008 기록 요약·구현 도식 · 합성1024×768 · CPython3.9.6 / macOS arm64',
    '임시 메모리: Python 할당 피크 · 다음 장의 제품 상태 측정과 별개 · Skill 단독 효과 미입증','OBSERVED_PRODUCT');
   text(s,'이미지의 최소·최대·평균 밝기를 구하되, 기존 결과는 유지',64,177,1152,40,30,C.teal,true);
   // Editable implementation schematic, not a screenshot or sample output.
   text(s,'기존 구현',64,241,160,32,25,C.sub,true);
   text(s,'입력 이미지',228,232,190,31,23,C.ink,true,FONT,'center');
   for(let row=0;row<3;row++)for(let col=0;col<5;col++){
    rect(s,265+col*23,274+row*21,20,18,['#9BA8B5','#C7D0DA','#E0EFF0'][row],C.white,1);
   }
   s.shapes.add({geometry:'connector',kind:'straight',position:{left:432,top:305,width:69,height:0},line:{fill:C.sub,width:3},tail:{type:'triangle',width:'sm',length:'sm'}});
   text(s,'전체 픽셀을 임시 리스트로 모음',526,232,438,31,25,C.ink,true,FONT,'center');
   for(let i=0;i<15;i++)rect(s,557+i*25,288,22,30,['#9BA8B5','#C7D0DA','#E0EFF0'][Math.floor(i/5)],C.white,1);
   text(s,'계산 전에 큰 임시 공간 사용',526,331,438,28,23,C.sub,false,FONT,'center');
   s.shapes.add({geometry:'connector',kind:'straight',position:{left:980,top:305,width:48,height:0},line:{fill:C.sub,width:3},tail:{type:'triangle',width:'sm',length:'sm'}});
   text(s,'최소·최대\n평균 계산',1052,268,164,73,27,C.ink,true,FONT,'center');
   line(s,64,381,1152);
   text(s,'임시 리스트 없이 계산한 두 후보',64,397,660,35,28,C.teal,true);
   text(s,'두 후보 간 시간 비교',764,399,272,31,22,C.sub);
   const candidates=[
    [444,'픽셀마다 Python 반복','더 느림','제외',C.sub,C.white],
    [511,'행마다 내장 min·max·sum 사용','더 빠름','선택',C.teal,C.pale]
   ];
   candidates.forEach(([y,label,runtime,decision,color,fill],i)=>{
    rect(s,64,y,1152,59,fill);
    text(s,label,84,y+8,648,43,30,i===0?C.sub:C.ink,true);
    text(s,runtime,764,y+8,208,43,29,color,true);
    text(s,decision,1052,y+6,144,46,33,color,true,FONT,'center');
   });
   text(s,'두 후보 모두: 결과 6항목 동일 · 기존보다 낮은 임시 메모리',64,576,1152,28,23,C.sub);
   return s;
  },
  S58(p){
   const s=make(p,'S58','선택한 변경의 시간·메모리·동작 확인','ACT 3 · 밝기 통계 변경을 제품에 반영하고 다시 확인',
    'STATE-04 → STATE-04-PERF · 동일 합성1024×768 · CPython3.9.6 / macOS arm64',
    '이 입력·환경의 코드 변경 결과 · Python 할당 피크는 RSS 아님 · Harness/Skill 단독 효과 미입증','OBSERVED_PRODUCT');
   text(s,'선택한 변경: 큰 임시 리스트 없이, 행마다 min·max·sum 계산',64,177,1152,40,29,C.teal,true);
   const columns=[[64,'실행시간'],[620,'임시 메모리'],[972,'동작 검증']];
   columns.forEach(([x,label])=>text(s,label,x,254,244,40,31,C.ink,true));
   [582,934].forEach(x=>rect(s,x,253,1.5,300,C.line));
   text(s,'같은 입력 · 7회 중앙값 (ms/호출)',64,301,480,30,22,C.sub);
   s.charts.add('bar',{
    name:'Statistics runtime before and after',
    position:{left:64,top:345,width:496,height:208},
    categories:['변경 후','변경 전'],
    series:[{name:'Median ms/call',values:[10.769,15.468],points:[{idx:0,fill:C.teal},{idx:1,fill:'#9BA8B5'}],valuesFormatCode:'0.000'}],
    barOptions:{direction:'bar',grouping:'clustered',gapWidth:120,varyColors:true},hasLegend:false,
    xAxis:{visible:true,min:0,max:20,majorUnit:5,numberFormatCode:'0',textStyle:{fontSize:19,typeface:FONT,fill:C.sub},majorGridlines:{fill:C.line,width:1,style:'solid'},line:{fill:C.line,width:1,style:'solid'}},
    yAxis:{visible:true,numberFormatCode:'0',textStyle:{fontSize:22,typeface:FONT,fill:C.ink},line:{fill:'none',width:0},majorGridlines:null},
    dataLabels:{showValue:true,position:'outEnd',numberFormatCode:'0.000',textStyle:{fontSize:26,typeface:FONT,bold:true,fill:C.ink}},
    chartFill:C.bg,plotAreaFill:C.bg,chartLine:{fill:'none',width:0},plotAreaLine:{fill:'none',width:0}
   });
   text(s,'Python 할당 피크',620,301,284,30,22,C.sub);
   text(s,'변경 전',620,353,284,29,23,C.sub);
   text(s,'6,675,804 B',620,387,284,48,36,C.sub);
   text(s,'변경 후',620,460,284,29,23,C.teal,true);
   text(s,'380 B',620,494,284,58,48,C.teal,true);
   text(s,'기록된 검사 결과',972,301,244,30,22,C.sub);
   text(s,'결과 유지',972,358,244,51,38,C.green,true);
   text(s,'출력 6항목 동일',972,411,244,32,25,C.ink);
   text(s,'함수 테스트 1/1\n전체 테스트 11/11\nCLI 샘플 통과',972,462,244,93,24,C.ink);
   text(s,'후보 비교와 별도로, 실제 제품 변경 전후를 같은 조건에서 확인한 기록',64,575,1152,29,24,C.sub);
   return s;
  },
  S59(p){
   const s=make(p,'S59','한 Agent 조사와 Subagent 역할 분리','ACT 3 · 교육용 가정: 독립 조사와 결과 통합',
    'CONCEPTUAL · C++ 검사 프로젝트의 독립 조사 가정 · 실제 Subagent 실행 아님',
    '역할별로 필요한 정보 분리 · 조정·중복·전달·통합 비용 존재 · 시간·품질 이득 미측정','CONCEPTUAL / TEACHING_MODEL');
   text(s,'성능·빌드·테스트 조사가 서로 기다리지 않아도 된다면?',64,177,1152,40,30,C.teal,true);
   text(s,'한 Agent가 모두 조사',64,245,460,39,31,C.ink,true);
   text(s,'Subagent로 나눠 조사',612,245,604,39,31,C.ink,true);
   rect(s,558,245,1.5,339,C.line);
   // One owner contains all investigation roles; no sequential timing is implied.
   rect(s,64,300,460,184,C.white,C.line,1);
   text(s,'Agent',84,308,420,34,28,C.teal,true);
   line(s,84,347,420);
   const roles=[['성능 조사','소스·측정'],['빌드 조사','환경·설정'],['테스트 조사','테스트·명세']];
   roles.forEach(([role,context],i)=>{
    text(s,role,84,354+i*41,195,31,25,C.ink,true);
    text(s,context,290,354+i*41,214,31,24,C.sub);
   });
   s.shapes.add({geometry:'connector',kind:'straight',position:{left:294,top:484,width:0,height:48},line:{fill:C.teal,width:2.5},tail:{type:'triangle',width:'sm',length:'sm'}});
   rect(s,64,532,460,52,C.pale,C.line,1);
   text(s,'같은 Agent가 결과 확인·종합',80,540,428,36,27,C.teal,true,FONT,'center');
   // The same main agent assigns bounded roles and reviews returned evidence.
   rect(s,664,300,500,56,C.pale,C.line,1);
   text(s,'주 Agent: 범위·결과 형식 지정',680,310,468,36,26,C.teal,true,FONT,'center');
   s.shapes.add({geometry:'line',position:{left:914,top:356,width:0,height:15},fill:'none',line:{fill:C.teal,width:2.5}});
   line(s,706,371,416,C.teal,2.5);
   roles.forEach(([role,context],i)=>{
    const x=612+i*208,cx=x+94;
    s.shapes.add({geometry:'connector',kind:'straight',position:{left:cx,top:371,width:0,height:17},line:{fill:C.teal,width:2.5},tail:{type:'triangle',width:'sm',length:'sm'}});
    rect(s,x,388,188,108,C.white,C.line,1);
    text(s,`Subagent ${i+1}`,x+8,395,172,28,22,C.sub,false,FONT,'center');
    text(s,role,x+8,425,172,34,27,C.ink,true,FONT,'center');
    text(s,context,x+8,462,172,28,22,C.sub,false,FONT,'center');
    s.shapes.add({geometry:'line',position:{left:cx,top:496,width:0,height:15},fill:'none',line:{fill:C.teal,width:2.5}});
   });
   line(s,706,511,416,C.teal,2.5);
   s.shapes.add({geometry:'connector',kind:'straight',position:{left:914,top:511,width:0,height:21},line:{fill:C.teal,width:2.5},tail:{type:'triangle',width:'sm',length:'sm'}});
   rect(s,664,532,500,52,C.pale,C.line,1);
   text(s,'같은 주 Agent가 근거 확인·통합',680,540,468,36,27,C.teal,true,FONT,'center');
   return s;
  },
  S60(p){
   const s=make(p,'S60','밝기 통계 작업을 나누지 않은 이유','ACT 3 · 실제 밝기 통계 작업의 역할 판단',
    'DEC-0018 · 실제 작업의 판단을 재구성 · Subagent 실행 없음',
    '이 작업의 판단 · 역할 분리의 시간·품질 이득은 비교 실험하지 않음','OBSERVED_PRODUCT / TEACHING_MODEL');
   text(s,'같은 밝기 통계 함수 · 같은 출력 명세',64,184,1152,40,29,C.teal,true);
   const stages=[
    [64,'조사','기존 계산·명세\n변경 후보 확인'],
    [492,'변경','선택한 후보로\n계산 코드 변경'],
    [920,'검증','출력·테스트 확인\n시간·할당량 측정']
   ];
   stages.forEach(([x,label,body])=>{
    text(s,label,x,265,296,40,31,C.teal,true);
    line(s,x,314,296,C.line,2);
    text(s,body,x,337,296,81,29,C.ink,true);
   });
   [[376,'조사 결과'],[804,'바뀐 코드']].forEach(([x,label])=>{
    text(s,label,x,322,104,30,23,C.sub,false,FONT,'center');
    s.shapes.add({geometry:'connector',kind:'straight',position:{left:x,top:380,width:104,height:0},line:{fill:C.teal,width:2.5},tail:{type:'triangle',width:'sm',length:'sm'}});
   });
   text(s,'이번 작업은 한 Agent가 끝까지 수행',64,493,1152,47,34,C.teal,true);
   text(s,'나누면 같은 코드·명세 전달과 결과 통합이 필요',64,549,1152,36,27,C.sub);
   return s;
  },
  S61(p){
   const s=make(p,'S61','이번 Context와 다시 쓸 지식','ACT 3 · Context와 Memory의 역할',
    'CONCEPTUAL · 재현 조건을 다음 작업에도 쓴다는 가정 · 실제 Memory 사용 아님',
    '이미 문서에 있으면 그 출처를 참조 · 제품의 자동 저장·회수를 확인한 사례가 아님','CONCEPTUAL / TEACHING_MODEL');
   text(s,'가정: 다음 작업에도 필요한 재현 조건을 확인했다면?',64,184,1152,40,29,C.teal,true);
   text(s,'이번 작업 Context',64,264,460,40,31,C.teal,true);
   text(s,'다시 쓸 지식 · Memory 후보',734,264,482,40,30,C.warn,true);
   rect(s,64,320,460,170,C.white,C.line,1);
   text(s,'목표·현재 명세',84,332,420,33,26,C.sub);
   text(s,'현재 입력·로그',84,374,420,33,26,C.sub);
   rect(s,80,418,428,56,C.amber);
   text(s,'확인한 재현 조건',96,427,396,36,28,C.warn,true);
   text(s,'다시 쓸 내용',548,393,154,29,23,C.sub,false,FONT,'center');
   s.shapes.add({geometry:'connector',kind:'straight',position:{left:548,top:445,width:154,height:0},line:{fill:C.warn,width:2.5},tail:{type:'triangle',width:'sm',length:'sm'}});
   rect(s,734,320,482,170,C.white,C.line,1);
   text(s,'검증된 재현 조건',754,337,442,40,31,C.warn,true);
   text(s,'필요한 입력·명령과 출처\n적용 범위·다시 확인할 조건',754,390,442,68,25,C.sub);
   s.shapes.add({geometry:'connector',kind:'straight',position:{left:975,top:490,width:0,height:42},line:{fill:C.warn,width:2.5},tail:{type:'triangle',width:'sm',length:'sm'}});
   text(s,'목적: 같은 조건을 다시 조사하지 않도록',64,546,610,38,27,C.ink,true);
   text(s,'다음 작업에서 현재 명세와 대조',734,546,482,38,27,C.teal,true);
   return s;
  },
  S62(p){
   const s=make(p,'S62','실제 Demo 지식의 원래 출처','ACT 3 · 기존 출처를 확인한 Memory 판단',
    'DEC-0018 · 기존 Demo 지식 출처 감사 요약 · 제품 Memory 사용 기록 아님',
    '이 Demo에서 별도 후보를 찾지 못한 판단 · Memory의 일반적 불필요성을 주장하지 않음','OBSERVED_PRODUCT / TEACHING_MODEL');
   const sources=[
    ['코드','crop 구현\n끝 좌표 제외','transform.py'],
    ['문서','이미지 명세\n모듈 연결 순서','docs/'],
    ['Skill','성능 작업의\n조사·검증 절차','SKILL.md'],
    ['Trial 기록','측정값·입력·환경\n날짜·Git 이력','DEMO_MATRIX.md']
   ];
   sources.forEach(([label,knowledge,location],i)=>{
    const x=64+i*294,cx=x+135;
    rect(s,x,232,270,213,C.white,C.line,1);
    text(s,label,x+20,244,230,40,31,C.teal,true);
    line(s,x+20,298,230,C.line,1);
    text(s,knowledge,x+20,314,230,76,26,C.ink,true);
    text(s,location,x+20,403,230,29,24,C.sub,false,'Consolas');
    s.shapes.add({geometry:'line',position:{left:cx,top:445,width:0,height:42},fill:'none',line:{fill:C.teal,width:2.5}});
   });
   line(s,199,487,882,C.teal,2.5);
   s.shapes.add({geometry:'connector',kind:'straight',position:{left:640,top:487,width:0,height:27},line:{fill:C.teal,width:2.5},tail:{type:'triangle',width:'sm',length:'sm'}});
   text(s,'확인할 정보는 이미 원래 출처에 있었다',64,521,1152,40,31,C.ink,true,FONT,'center');
   text(s,'별도 보존 후보가 없어 Memory는 추가하지 않았다',64,568,1152,34,28,C.teal,true,FONT,'center');
   return s;
  },
  S63(p){
    const s=make(p,'S63','밝기 통계 작업에 쓰인 구성의 역할','ACT 3 · 실제 밝기 통계 작업의 구성',
      'STATE-04-PERF · 실제 구성·작업 기록 요약 · 도식 재구성',
      'Subagent·별도 Memory는 추가하지 않음 · 각 요소의 단독 성능 효과는 입증하지 않음','OBSERVED_PRODUCT / TEACHING_MODEL');
    const inputs=[
      ['목표','밝기 통계 성능 조사\n출력 6항목 유지'],
      ['Context','명세·명령·참고 위치\nAGENTS.md · 상세 문서'],
      ['Skill','기준선·조사·변경·비교\nRepository 성능 Skill']
    ];
    inputs.forEach(([label,body],i)=>{
      const y=198+i*137;
      rect(s,64,y,388,120,i===0?C.pale:C.white,C.line,1);
      text(s,label,84,y+9,348,36,28,C.teal,true);
      text(s,body,84,y+49,348,62,25,C.ink);
      line(s,452,y+60,70,C.teal,2.5);
    });
    s.shapes.add({geometry:'line',position:{left:522,top:258,width:0,height:274},line:{fill:C.teal,width:2.5}});
    s.shapes.add({geometry:'connector',kind:'straight',position:{left:522,top:395,width:32,height:0},line:{fill:C.teal,width:2.5},tail:{type:'triangle',width:'sm',length:'sm'}});
    rect(s,560,323,244,148,C.white,C.teal,1.5);
    text(s,'Agent',580,341,204,40,34,C.teal,true,FONT,'center');
    text(s,'밝기 통계\n조사·변경',580,391,204,71,29,C.ink,true,FONT,'center');
    s.shapes.add({geometry:'connector',kind:'straight',position:{left:804,top:395,width:112,height:0},line:{fill:C.teal,width:2.5},tail:{type:'triangle',width:'sm',length:'sm'}});
    rect(s,924,305,292,180,C.pale,C.teal,1.5);
    text(s,'검증 도구',944,320,252,40,31,C.teal,true);
    text(s,'테스트 · benchmark',944,372,252,36,25,C.ink,true);
    text(s,'출력·시간·할당량\n같은 입력·환경',944,417,252,62,24,C.ink);
   return s;
  },
  S64(p){
   const s=make(p,'S64','함께 작동하는 작업 환경, Harness','ACT 3 · 실제 작업의 구성에서 전체 작업 환경으로',
    '교육용 Harness 모델 · 사례 대응: AGENTS.md · docs · Skill · tests · benchmark',
    '공식 정의·필수 목록이 아님 · 모든 실행 조건의 감사·각 요소의 단독 성능 효과는 미입증','OBSERVED_PRODUCT / TEACHING_MODEL');
   rect(s,64,192,1152,408,C.white,C.line,1.5);
   const inputs=[
    ['목표','바꿀 것 · 지킬 조건'],
    ['Context','프로젝트 사실·명세'],
    ['Skill','재사용할 수행 방법']
   ];
   inputs.forEach(([label,body],i)=>{
    const y=216+i*98;
    rect(s,88,y,300,84,i===0?C.pale:C.white,C.line,1);
    text(s,label,106,y+4,264,33,28,C.teal,true);
    text(s,body,106,y+42,264,34,24,C.ink);
    line(s,388,y+42,48,C.teal,2.5);
   });
   s.shapes.add({geometry:'line',position:{left:436,top:258,width:0,height:196},line:{fill:C.teal,width:2.5}});
   s.shapes.add({geometry:'connector',kind:'straight',position:{left:436,top:380,width:62,height:0},line:{fill:C.teal,width:2.5},tail:{type:'triangle',width:'sm',length:'sm'}});
   rect(s,506,308,250,144,C.white,C.teal,1.5);
   text(s,'Agent',526,320,210,40,34,C.teal,true,FONT,'center');
   text(s,'조사 · 판단 · 변경',526,384,210,42,26,C.ink,true,FONT,'center');
   s.shapes.add({geometry:'connector',kind:'straight',position:{left:756,top:380,width:122,height:0},line:{fill:C.teal,width:2.5},tail:{type:'triangle',width:'sm',length:'sm'}});
   rect(s,886,308,306,144,C.pale,C.teal,1.5);
   text(s,'검증 도구',906,317,266,39,30,C.teal,true);
   text(s,'테스트 · benchmark',906,364,266,36,25,C.ink,true);
   text(s,'사람이 결과 검토',906,411,266,31,23,C.ink);
   [631,1039].forEach(x=>s.shapes.add({geometry:'connector',kind:'straight',position:{left:x,top:452,width:0,height:76},line:{fill:C.teal,width:2.5},head:{type:'triangle',width:'sm',length:'sm'}}));
   rect(s,88,528,1104,56,C.pale,C.line,1);
   text(s,'실행 환경',106,537,164,38,28,C.teal,true);
   text(s,'Repository · 입력 · 권한 · 실행·측정 조건',292,537,880,38,25,C.ink);
   return s;
  },
  S65(p){
   const s=make(p,'S65','같은 저장소여도 실행 조건은 다를 수 있다','ACT 3 · Harness의 실행 조건을 함께 기록',
    'OBSERVED_META · TRIAL-006 기록 요약 · 위 도식은 실행 조건의 교육용 구성',
    '전체 설정·권한 감사·개별 인과효과는 미입증 · 현재 제품·계정은 별도 확인','OBSERVED_META / TEACHING_MODEL');
   rect(s,64,224,356,172,C.white,C.line,1.5);
   text(s,'같은 Repository',84,238,316,43,31,C.teal,true);
   text(s,'코드 · AGENTS.md\n프로젝트 문서',84,300,316,78,27,C.ink);
   s.shapes.add({geometry:'connector',kind:'straight',position:{left:420,top:310,width:110,height:0},line:{fill:C.teal,width:2.5},tail:{type:'triangle',width:'sm',length:'sm'}});
   rect(s,538,244,224,132,C.white,C.teal,1.5);
   text(s,'Agent',558,260,184,43,34,C.teal,true,FONT,'center');
   text(s,'실행',558,320,184,43,31,C.ink,true,FONT,'center');
   text(s,'적용 확인',770,264,110,31,24,C.teal,true,FONT,'center');
   s.shapes.add({geometry:'connector',kind:'straight',position:{left:770,top:310,width:110,height:0},line:{fill:C.teal,width:2.5,style:'dash'},head:{type:'triangle',width:'sm',length:'sm'}});
   rect(s,888,224,328,172,C.pale,C.line,1.5);
   text(s,'저장소 밖 조건',908,238,288,43,31,C.teal,true);
   text(s,'전역 지침·Skills\n모델/설정 · 권한',908,300,288,78,26,C.ink);
   line(s,64,434,1152,C.line,1);
   text(s,'실제 관찰',64,457,190,43,28,C.teal,true);
   text(s,'전역 Skills 포함 · 시작 단계의 경고',290,457,926,43,29,C.ink,true);
   text(s,'해석의 한계',64,535,190,43,28,C.teal,true);
   text(s,'경고만으로 도구 실행·결과 기여는 알 수 없음',290,535,926,43,27,C.ink);
   return s;
  },
  S66(p){
   const s=make(p,'S66','밝기 통계의 판단을 C++ 검사에 적용하기','ACT 3 · 우리 검사 업무에 적용하기',
    '교육용 C++ 검사 적용 예 · 밝기 통계의 판단을 대응 · 기존 AI 생성 삽화',
    '실제 C++ 구현·회사 장비·측정 성과 아님 · 도구·빌드·장비 조건은 팀에서 확인');
   s.images.add({blob:cppIllustration,contentType:'image/png',
    alt:'S66 AI-generated teaching illustration; not a product screenshot or Trial output',
    fit:'contain',position:{left:308.125,top:165,width:663.75,height:153},
    crop:{left:0,top:0.08,right:0,bottom:0.12}});
   text(s,'밝기 통계 Demo에서 확인',276,334,354,36,28,C.teal,true);
   text(s,'C++ 검사 업무에 적용',776,334,440,36,28,C.teal,true);
   line(s,64,378,1152,C.line,1);
   const pairs=[
    ['지킬 명세','출력 6항목 유지','ROI · 픽셀값 명세'],
    ['수행 방법','기준선·조사·변경·비교','검사 모듈에 같은 절차'],
    ['검증 근거','테스트 · 시간·할당량','동작·회귀·성능 검증']
   ];
   pairs.forEach(([label,demo,cpp],i)=>{
    const y=386+i*60;
    text(s,label,64,y,190,44,27,C.teal,true);
    text(s,demo,276,y,354,44,26,C.ink,true);
    s.shapes.add({geometry:'connector',kind:'straight',position:{left:666,top:y+22,width:64,height:0},line:{fill:C.teal,width:2.5},tail:{type:'triangle',width:'sm',length:'sm'}});
    text(s,cpp,776,y,440,44,26,C.ink,true);
   });
   text(s,'입력·빌드·장비 조건도 함께 확인',64,567,1152,33,25,C.sub);
   return s;
  },
  S67(p){
   const s=make(p,'S67','우리 업무에서 먼저 정리할 한 가지','ACT 3 · 반복을 고르고 유지할 책임을 정하기',
    '개인 성찰 · 공유는 선택 · 실제 Demo의 성공은 기준점으로 유지',
    '교육용 적용 질문 · 기능 추가를 전제하지 않음 · 다음 ACT의 변화는 별도 가상 사례');
   const items=[['반복 정보','명세 · 프로젝트 안내'],['반복 절차','조사 · 변경 · 검증'],['검증 근거','테스트 · 측정 조건']];
   items.forEach(([title,body],i)=>{
    const x=64+i*400;
    rect(s,x,212,352,104,C.white,C.line,1);
    text(s,title,x+20,222,312,36,29,C.teal,true);
    text(s,body,x+20,266,312,36,24,C.ink);
    s.shapes.add({geometry:'line',position:{left:x+176,top:316,width:0,height:38},line:{fill:C.teal,width:2.5}});
   });
   line(s,240,354,800,C.teal,2.5);
   s.shapes.add({geometry:'connector',kind:'straight',position:{left:640,top:354,width:0,height:20},line:{fill:C.teal,width:2.5},tail:{type:'triangle',width:'sm',length:'sm'}});
   rect(s,520,380,240,58,C.pale,C.teal,1.5);
   text(s,'하나만 선택',536,389,208,40,30,C.teal,true,FONT,'center');
   s.shapes.add({geometry:'line',position:{left:640,top:438,width:0,height:18},line:{fill:C.teal,width:2.5}});
   line(s,336,456,608,C.teal,2.5);
   [336,944].forEach(x=>s.shapes.add({geometry:'connector',kind:'straight',position:{left:x,top:456,width:0,height:18},line:{fill:C.teal,width:2.5},tail:{type:'triangle',width:'sm',length:'sm'}}));
   [[64,'어디에 둘까?'],[672,'누가 검토·갱신할까?']].forEach(([x,question])=>{
    rect(s,x,480,544,72,C.white,C.line,1);
    text(s,question,x+20,490,504,50,30,C.ink,true);
   });
   text(s,'다음: 프로젝트가 바뀌면 어떻게 점검할까?',64,570,1152,35,27,C.teal,true);
   return s;
  }
 };
}
