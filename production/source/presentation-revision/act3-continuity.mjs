/** DEC-0062: repeated procedure, scoped evidence and conditional structures. */
import * as H from './helpers.mjs';

export async function loadAct3ContinuitySlides(root, previous) {
 const {C,text,line,rect,arrow,CODE,FONT}=H;
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
    'STATE-04 SKILL.md의 두 지침과 교육용 책임 구분 · 새 실행 결과가 아님',
    '특정 알고리즘·Trial 숫자를 정답으로 넣지 않았음 · no-change는 허용된 판단 경로','OBSERVED_PRODUCT / TEACHING_MODEL');
   panel(s,64,236,542,256,'Skill이 정할 방법','편집 전 재현 가능한 기준선\n같은 조건으로 검증·비교\n근거가 부족하면 변경 보류',C.pale);
   panel(s,674,236,542,256,'이번 작업에서 정할 답','어떤 알고리즘을 택할까?\n실제 시간·할당량은?\n어떤 trade-off를 감수할까?');
   text(s,'“A measured result that does not justify a change is a',64,522,1152,31,24,C.sub,false,CODE);
   text(s,'valid no-change conclusion.”',64,554,1152,31,24,C.sub,false,CODE);
   return s;
  },
  S57(p){
   const s=make(p,'S57','후보는 시간·할당량·동작을 함께 보고 고른다','ACT 3 · 밝기 통계 작업의 후보 선택 과정',
    'TRIAL-008 · image_statistics 후보 비교 · 합성1024×768 / CPython3.9.6 / macOS arm64',
    '정성 비교 · 아래 후보끼리의 비교는 다음 장의 제품 상태 전후 측정과 다름','OBSERVED_PRODUCT');
   text(s,'두 후보 모두 같은 결과 6항목을 확인했다',64,181,1152,41,30,C.teal,true);
   const rs=[['수동 단일 순회','낮은 할당량','훨씬 느림 → 제외',C.white,C.warn],['행 단위 built-in reduction','낮은 할당량 유지','더 나음 → 선택',C.pale,C.teal]];
   text(s,'후보',64,254,508,36,27,C.sub,true);
   text(s,'Python 할당량',610,254,250,36,27,C.sub,true);
   text(s,'실행 시간과 판단',905,254,311,36,27,C.sub,true);
   rs.forEach(([label,allocation,decision,fill,color],i)=>{
    const y=317+i*112;rect(s,64,y,1152,92,fill);
    text(s,label,80,y+19,510,54,29,C.ink,true);
    text(s,allocation,610,y+19,250,54,27,C.ink);
    text(s,decision,905,y+19,295,54,28,color,true);
   });
   text(s,'Skill에 정답을 넣지 않고, 측정 근거로 변경 후보를 선택했다',64,565,1152,35,27,C.ink,true);
   return s;
  },
  S58(p){
   const s=original.S58(p,H);
   replace(s,'Working Harness Success','선택한 변경을 같은 조건에서 검증했다');
   replace(s,'결과가 맞는지 확인하고, 같은 조건에서 비교했다','밝기 통계 · 동작 확인 + 동일 입력 비교');
   replace(s,'집중 테스트 1/1  ·  전체 11/11  ·  CLI  ·  입력·결과 guard','함수 테스트 1/1 · 전체 11/11 · CLI · 입력·결과 확인');
   return s;
  },
  S59(p){
   const s=make(p,'S59','독립 조사를 나누면 무엇이 달라질까?','ACT 3 · Subagent가 해결할 문제부터 보기',
    'CONCEPTUAL · C++ Vision 조사 업무를 가정한 역할·Context 분리 · 실제 Subagent 실행 아님',
    '독립 조사일 때의 설계 예 · 병렬 이득·시간 단축은 미측정 · 조정·중복·전달·통합 비용을 함께 판단','CONCEPTUAL / TEACHING_MODEL');
   text(s,'한 Agent에 모인 조사 중, 서로 기다리지 않아도 되는 부분은?',64,179,1152,42,29,C.teal,true);
   panel(s,64,251,352,202,'성능 경로 조사','느린 경로와 측정 근거\n필요한 소스·명세');
   panel(s,464,251,352,202,'빌드 환경 조사','재현 조건과 빌드 설정\n필요한 환경 문서');
   panel(s,864,251,352,202,'테스트 구조 조사','확인 범위와 회귀 위험\n필요한 테스트·명세');
   [226,626,1026].forEach(x=>down(s,x,470,28,22,C.warn));
   rect(s,64,519,1152,65,C.pale);
   text(s,'주 Agent가 합친다: 결과 형식 · 전달 지점 · 최종 검토 책임',84,531,1112,40,29,C.ink,true);
   return s;
  },
  S60(p){
   const s=make(p,'S60','이번 작업은 나눌 근거가 충분했을까?','ACT 3 · 실제 사례에 Subagent 선택 기준을 적용',
    'DEC-0018 · 현재 성능 작업의 의존성과 Context를 검토한 판단 · Subagent Trial 없음',
    '이 사례에서는 추가하지 않음 · 일반적으로 불필요하다는 결론이나 기능 제한 주장이 아님','OBSERVED_PRODUCT / TEACHING_MODEL');
   const items=[['조사','같은 성능 경로와\n명세를 확인'],['변경','조사 결과에 따라\n변경 후보를 선택'],['검증','변경 결과를\n같은 조건에서 확인']];
   items.forEach(([title,body],i)=>{
    const x=64+i*400;panel(s,x,238,352,181,title,body,i===0?C.pale:C.white);
    if(i<2)arrow(s,x+365,311,23,18);
   });
   text(s,'작업 독립성 낮음 · 별도 Context 이득 제한 · 결과 통합 비용 존재',64,462,1152,39,28,C.sub);
   text(s,'현재 사례: Agent를 더 나누지 않았다',64,524,1152,47,34,C.teal,true);
   text(s,'판단 기준: 독립성 · 필요한 Context · 전달 형식 · 통합 책임',64,576,1152,27,23,C.sub);
   return s;
  },
  S61(p){
   const s=make(p,'S61','다음 작업에서도 다시 찾을 지식인가?','ACT 3 · Memory가 해결할 문제부터 보기',
    'CONCEPTUAL · 작업 간 지식 재사용 가정 · 실제 재발견 기록·제품 Memory 구현 아님',
    'Context: 지금 필요한 정보 / Memory: 다음 작업에도 남길지 판단할 지식 · 자동 저장·정확성 보장 없음','CONCEPTUAL / TEACHING_MODEL');
   text(s,'조사로 얻은 지식이 다음 작업에도 필요하다면?',64,180,1152,42,31,C.teal,true);
   panel(s,64,259,324,226,'Task A · 조사','재현 조건이나\n주의점을 확인\n(교육용 가정)');
   arrow(s,402,351,32,22,C.warn);
   panel(s,464,259,352,226,'보존할 가치 판단','내용 · 출처 · 적용 범위\n다시 확인할 조건',C.pale);
   arrow(s,830,351,32,22,C.warn);
   panel(s,892,259,324,226,'Task B · 다시 사용','현재 명세와 대조한 뒤\n관련 지식만 참고');
   text(s,'원래 문서에 있으면 그 출처를 참조한다',64,533,1152,40,31,C.ink,true);
   text(s,'다음 장에서, 현재 Demo에 별도 보존 후보가 있었는지 판단한다',64,576,1152,27,23,C.sub);
   return s;
  },
  S62(p){
   const s=make(p,'S62','남길지, 원래 출처를 참조할지 판단한다','ACT 3 · Memory의 기준과 현재 사례의 선택',
    'DEC-0018 · Demo 지식 출처 점검 + 교육용 보존 기준 · 제품 Memory 기능에 대한 관찰 아님',
    '현재 별도 Memory 후보 없음 · 다음 작업 재사용이 기준이며 프로젝트 사이 재사용이 필수는 아님','OBSERVED_PRODUCT / TEACHING_MODEL');
   ['재발견 비용','다음 작업 재사용','출처·적용 범위','갱신·무효화 조건'].forEach((label,i)=>{
    const x=64+i*294;rect(s,x,189,270,56,C.pale);
    text(s,label,x+10,201,250,32,24,C.teal,true,FONT,'center');
   });
   const rows=[['crop의 끝 좌표 제외','코드 · 이미지 명세 문서'],['모듈이 이어지는 순서','architecture.md'],['성능 조사·검증 방법','Repository Skill'],['이번 실행의 측정값','날짜가 있는 Trial 기록 · Git 이력']];
   rows.forEach(([label,source],i)=>{
    const y=284+i*59;line(s,64,y,1152);
    text(s,label,64,y+8,488,42,27,C.ink,true);
    arrow(s,572,y+20,30,18);
    text(s,source,650,y+8,566,42,26,C.sub);
   });
   text(s,'이번 사례: 원래 출처를 유지하고, 별도 Memory는 추가하지 않았다',64,555,1152,43,29,C.teal,true);
   return s;
  },
  S63(p){
   const s=make(p,'S63','이번 사례에서 실제로 사용한 구조','ACT 3 · Minimum Effective Harness의 근거를 회수',
    'STATE-04-PERF까지의 구성 점검 · 보존된 기록과 교육용 책임 구분을 연결',
    'Subagent·별도 Memory는 추가하지 않음 · 보편적 최적 구성이나 기능 수 우위에 대한 주장이 아님','OBSERVED_PRODUCT / TEACHING_MODEL');
   const rows=[['현재 목표·범위','밝기 통계 조사 요청'],['참고할 명세·안내','AGENTS.md + 상세 문서'],['다시 쓸 수행 방법','graypipe-performance Skill'],['변경을 판단할 근거','테스트 + benchmark + 실행 환경']];
   rows.forEach(([question,answer],i)=>{
    const y=223+i*80;line(s,64,y,1152);
    text(s,question,64,y+17,496,47,30,C.ink,true);
    arrow(s,576,y+31,32,20);
    text(s,answer,650,y+17,566,47,i===2?27:29,C.teal,true);
   });
   text(s,'현재 문제와 확인 요구에 맞춰 구성한 작업 환경',64,570,1152,33,28,C.ink,true);
   return s;
  },
  S64(p){
   const s=make(p,'S64','이 구성이 함께 작동하는 것이 Harness다','ACT 3 · 작업 방법과 실행·검증 환경을 하나로 연결',
    '이 과정의 Harness 운영 모델 · 아래 관찰 구성은 STATE-04-PERF까지의 제한된 사례',
    '공식 제품 분류·보편적 필수 목록이 아님 · 특정 구성요소의 단독 성능 효과는 입증하지 않음','OBSERVED_PRODUCT / TEACHING_MODEL');
   rect(s,64,192,1152,337,C.white,C.line,1.5);
   text(s,'프로젝트 작업 환경',84,204,1112,35,25,C.teal,true);
   panel(s,88,271,274,147,'목표·허용 범위','개발자가 정한다',C.pale);
   arrow(s,379,323,29,22);
   panel(s,434,271,377,147,'Agent의 수행 방법','조사 → 판단 → 변경',C.white);
   arrow(s,828,323,29,22);
   panel(s,883,271,309,147,'완료 근거·검토','검증 결과를 확인',C.pale);
   text(s,'Context·재사용 절차 + 실행 도구·입력·권한·측정 환경',88,461,1104,42,28,C.ink,true);
   text(s,'관찰한 구성: AGENTS.md · docs · Skill · Tests · Benchmark',64,561,1152,39,26,C.sub);
   return s;
  },
  S65(p){
   const s=make(p,'S65','같은 Repository라도 실행 조건은 다를 수 있다','ACT 3 · 결과를 해석할 환경을 함께 기록',
    'OBSERVED_META · TRIAL-006/007/008의 전역 지침·시작 경고 관찰을 예고 · 상세는 ACT 4',
    '경고는 실행 기여의 증거가 아님 · 전체 환경 목록·Hook/MCP 인과효과·현재 제품 동작은 미검증','OBSERVED_META / TEACHING_MODEL');
   panel(s,64,237,446,235,'Repository 안','코드 · AGENTS.md\n상세 문서 · 재사용 Skill',C.white);
   text(s,'+',542,324,50,48,36,C.teal,true);
   panel(s,640,237,576,235,'바깥에서 들어온 관찰','전역 지침·Skills의 포함\nHook·MCP 초기화 경고',C.pale);
   text(s,'함께 남길 조건',64,516,246,40,28,C.teal,true);
   text(s,'적용 지침 · 모델/설정 · 권한 · OS/runtime',326,516,890,40,28,C.ink,true);
   text(s,'관찰한 흔적과, 결과에 영향을 줬다는 판단은 구분한다',64,568,1152,35,27,C.ink,true);
   return s;
  },
  S66(p){
   const s=original.S66(p,H);
   replace(s,'Engineering Pattern은 C++에도 전이된다','우리 C++ 검사 작업에 옮겨 보면');
   replace(s,'Python Demo에서 확인한 질문을 C++ Vision 업무로','밝기 통계에서 쓴 판단을, 같은 검사 파이프라인의 업무로');
   replace(s,'01  기준 조건은?','01  지킬 명세');
   replace(s,'입력·계약에서\n빌드·하드웨어 가정까지','ROI·픽셀값 명세\n빌드·하드웨어 조건');
   replace(s,'02  어디를 조사할까?','02  반복할 수행 방법');
   replace(s,'측정한 코드 경로에서\n해당 모듈의 profile로','기준선·해당 경로 조사\n변경·동일 조건 비교');
   replace(s,'03  무엇을 확인할까?','03  완료를 판단할 근거');
   replace(s,'동작 계약에서\n모듈·회귀·통합 검증으로','동작·회귀·통합 검증\n성능 측정 결과');
   replace(s,'baseline → profile → change → regression check','기준선 측정 → 경로 조사 → 변경 → 회귀 확인');
   return s;
  },
  S67(p){
   const s=make(p,'S67','우리 팀의 반복 한 가지를 고르면','ACT 3 · 필요한 구조와 유지할 책임을 되돌아보기',
    '개인 성찰·공유는 선택 · 실제 성공 STATE-04-PERF를 실패 사례로 재해석하지 않음',
    'Subagent·Memory는 조건부 선택 · 다음 ACT의 프로젝트 변화는 별도의 가상 사례');
   text(s,'내 업무에서 먼저 정리할 반복은 무엇인가?',64,184,1152,43,32,C.teal,true);
   const items=[['반복되는 정보','명세·기본 안내·상세 위치'],['반복되는 절차','조사·변경 판단·검증·보고'],['매번 필요한 근거','테스트·측정 조건·검토 결과']];
   items.forEach(([title,body],i)=>{
    const x=64+i*400;panel(s,x,278,352,166,title,body,i===1?C.pale:C.white);
   });
   text(s,'어디에 두고, 누가 검토하고 갱신할까?',64,487,1152,45,33,C.ink,true);
   text(s,'다음 질문: 프로젝트가 바뀌면 이 방법을 어떻게 점검할까?',64,562,1152,39,29,C.teal,true);
   return s;
  }
 };
}
