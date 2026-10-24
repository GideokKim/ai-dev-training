/** Apply DEC-0081 to evaluation, the observed reporting case and the ACT5 handoff. */
import * as H from './helpers.mjs';

export function loadAct4FlowSlides(original) {
 const previousS85=original.S85;
 const {C,FONT,CODE,text,line,rect}=H;
 const frame=(p,id,title,eyebrow,source,boundary,type='CONCEPTUAL / TEACHING_MODEL')=>{
  const s=H.frame(p,id,title,eyebrow,source,boundary,type);
  s.shapes.items.at(-1).position={left:64,top:650,width:1152,height:30};
  return s;
 };
 const connector=(s,x,y,w,h=0,up=false)=>s.shapes.add({
  geometry:'connector',kind:'straight',position:{left:x,top:y,width:w,height:h},
  line:{fill:C.teal,width:2.5},[up?'head':'tail']:{type:'triangle',width:'sm',length:'sm'}
 });
 const phases=['실행','관찰','원인 판단','시스템 변경','재평가'];
 return {
  S76(p){
   const s=frame(p,'S76','지침을 고친 뒤, 무엇을 다시 확인할까?','ACT 4 · CONCEPTUAL / 평가 범위',
    'DEMO-04A · 지침 변경 뒤 확인할 질문을 설계한 도식',
    '가상 사례 · 실제 변경·재실행·회귀 검증 결과는 없음');
   text(s,'가정: 단위 테스트 지침을 단위 + 통합 테스트로 갱신했다면',64,190,1152,42,28,C.sub);
   const cols=[
    [64,'같은 작업 다시 확인','필요한 단위·통합 검증을\n이제 다루는가?','이번 변경이 문제를 다루는지',C.teal],
    [704,'다른 작업에 적용','문서만 고치는 작업에도\n불필요한 검증을 강요하나?','주변 작업을 방해하지 않는지',C.warn]
   ];
   for(const[x,title,question,scope,color]of cols){
    text(s,title,x,285,512,44,32,color,true);line(s,x,347,512,color,3,x===704?'dash':'solid');
    text(s,question,x,374,512,111,32,C.ink,true);text(s,scope,x,504,512,38,26,C.sub);
   }
   text(s,'같은 작업의 재확인과, 다른 대표 작업의 영향 평가',64,563,1152,36,29,C.teal,true);
   return s;
  },
  S77(p){
   const s=frame(p,'S77','대표 작업은 서로 다른 위험을 확인한다','ACT 4 · CONCEPTUAL / 평가 작업의 선정',
    'DEMO-10 · EVAL-01~04 평가 설계 · 네 작업 모두 변경 후 실행 결과 없음',
    '버그·성능은 별도 과거 사례 참고 · 문서·리팩터링은 설계만 있음 · 새 실행·PASS/FAIL 없음');
   text(s,'지침을 바꿨다면, 서로 다른 작업에도 적용해 본다',64,190,1152,42,30,C.ink,true);
   const values=[
    ['작업 종류','확인하려는 위험','기존 근거'],
    ['버그 수정','동작 명세를 놓치지 않는가?','과거 사례 참고'],
    ['성능 변경','측정·검증 범위를 지키는가?','과거 사례 참고'],
    ['문서만 수정','불필요한 절차를 강요하는가?','평가 설계만 있음'],
    ['작은 리팩터링','다른 유효한 작업을 방해하는가?','평가 설계만 있음']
   ];
   const table=s.tables.add({rows:5,columns:3,left:64,top:264,width:1152,height:300,columnWidths:[240,624,288],values});
   table.styleOptions={headerRow:false,bandedRows:false};table.borders.assign({fill:C.line,width:0.8,style:'solid'});
   for(let r=0;r<5;r++){
    table.rows[r].height=r===0?48:63;
    for(let c=0;c<3;c++){
     const cell=table.getCell(r,c);cell.fill=r===0?C.pale:C.bg;
     cell.text.style={typeface:FONT,fontSize:r===0?25:c===2?24:26,color:r===0?C.teal:c===2?(r<3?C.teal:C.warn):C.ink,bold:r===0||c===0,alignment:'left',verticalAlignment:'middle',autoFit:'none',wrap:'none'};
    }
   }
   return s;
  },
  S78(p){
   const s=frame(p,'S78','한 작업에 맞춘 규칙,\n다른 작업에도 맞을까?','ACT 4 · CONCEPTUAL / 규칙의 영향과 유지 비용',
    'DEMO-04A · 특정 작업에만 맞추는 과적합은 교육용 비유',
    '아래는 가정의 비교 · 실제 실행·비용 측정 아님 · ML의 통계적 과적합과 동일시하지 않음');
   text(s,'가정: 모든 작업에 통합 테스트를 요구하도록 넓힌다면',64,216,1152,40,29,C.ink,true);
   text(s,'전역 지침',64,306,352,36,27,C.warn,true);
   line(s,64,356,352,C.warn,2,'dash');
   text(s,'모든 작업에\n통합 테스트',64,381,352,107,35,C.ink,true);
   connector(s,438,413,124);
   s.shapes.add({geometry:'line',position:{left:562,top:333,width:0,height:160},line:{fill:C.teal,width:2.5}});
   connector(s,562,333,102);connector(s,562,493,102);
   text(s,'코드 변경',704,287,512,38,29,C.teal,true);
   text(s,'필요한 검증 범위를 확인',704,335,512,49,29,C.ink);
   text(s,'문서만 수정',704,440,512,38,29,C.warn,true);
   text(s,'불필요한 절차가 될 수 있음',704,488,512,49,29,C.ink);
   text(s,'규칙 누적·충돌·특정 작업 편중을 보고, 원인과 범위에 맞춰 정리',64,563,1152,36,27,C.teal,true);
   return s;
  },
  S79(p){
   const s=frame(p,'S79','관찰을 시스템 개선으로 잇는 Loop','ACT 4 · 이 교육의 Loop 운영 모델',
    'DEC-0023 · 앞선 가상 사례를 정리한 운영 모델',
    '실제 실행·수정·평가 결과 없음 · 자동 학습이나 관찰된 Product Loop가 아님','TEACHING_MODEL');
   text(s,'앞 단계에서 얻은 근거로, 다음 단계의 판단을 한다',64,187,1152,42,29,C.sub);
   const questions=['요청·지침대로\n무엇을 했나?','기준과 무엇이\n달랐나?','무슨 근거로\n판단하나?','어느 출처를\n얼마나 바꾸나?','다른 작업에도\n괜찮나?'];
   const evidence=['수행한 작업의\n기록','현재 기준과의\n차이','확인한 원인과\n남은 가설','사람이 검토한\n출처·변경 범위','확인한 영향과\n남은 한계'];
   phases.forEach((label,i)=>{
    const x=64+i*236;text(s,String(i+1).padStart(2,'0'),x,253,208,30,23,C.teal,true,CODE);line(s,x,297,208,C.teal,3);
    text(s,label,x,312,208,38,27,C.ink,true);text(s,questions[i],x,363,208,74,26,C.sub);
    rect(s,x,459,208,75,C.pale);text(s,evidence[i],x+10,466,188,61,25,C.ink,true);
    if(i<4)connector(s,x+214,333,16);
   });
   s.shapes.add({geometry:'line',position:{left:1112,top:539,width:0,height:15},line:{fill:C.teal,width:2.5}});
   line(s,168,554,944,C.teal,2.5);connector(s,168,539,0,15,true);
   text(s,'다음 작업에서도, 기록과 근거로 다시 확인',64,567,1152,32,28,C.teal,true);
   return s;
  },
  S80(p){
   const s=frame(p,'S80','평가·보고 기준도 개선 대상이다','ACT 4 · 실제 교육 Demo 제작 기록 / OBSERVED_META',
    'TRIAL-006 · 과거 Codex CLI의 Resize 성능 조사 · 기록 재구성',
    '앞의 가상 지침과 별개 사건 · 개선 대상은 평가·보고 기준 · 제품 코드·Demo Skill 복구 아님','OBSERVED_META');
   text(s,'이번에는 성능 조사 결과를 평가·보고하던 방식을 본다',64,187,1152,45,30,C.teal,true);
   text(s,'당시 작업: 이미지 크기 변경 성능 조사 (Resize)',64,252,1152,38,27,C.sub);
   const events=[['관찰한 조건','전역 Skill 포함\n시작 단계 경고'],['판단의 한계','결과 전체를 Prompt의\n효과로 분리 못함'],['바꿀 대상','평가·보고에\n무엇을 남길까?']];
   events.forEach(([label,body],i)=>{const x=64+i*400;text(s,label,x,342,352,43,30,C.ink,true);line(s,x,402,352,C.teal,3);text(s,body,x,426,352,90,28,i===1?C.warn:C.ink,i===1);if(i<2)connector(s,x+360,373,30);});
   text(s,'지침의 유지에서, 결과를 판단·보고하는 기준의 유지로',64,559,1152,38,29,C.teal,true);
   return s;
  },
  S81(p){
   const s=frame(p,'S81','결과 확인과 원인 해석을 따로 기록한다','ACT 4 · 실제 제작 기록 / 확인 범위와 해석의 한계',
    'TRIAL-006 · resize_nearest · 같은 조건의 7 one-call samples · 기록 재구성',
    '기록된 합성 입력·CPython 3.9.6·macOS arm64 범위 · 현재 Desktop·일반 효과로 확대하지 않음','OBSERVED_META');
   text(s,'Resize 성능 조사 · 앞의 밝기 통계 Benchmark와 별도 기록',64,190,1152,40,27,C.sub);
   text(s,'측정 결과를 확인했나?',64,277,512,49,32,C.teal,true);
   text(s,'무엇의 효과인지 아는가?',704,277,512,49,32,C.warn,true);
   line(s,64,347,512,C.teal,3);line(s,704,347,512,C.warn,3);
   text(s,'입력·출력 hash 일치\n같은 조건의 7회 측정',64,373,512,99,31,C.ink,true);
   text(s,'전역 Skill이 평가 절차에 관여\nPrompt만의 효과는 분리 못함',704,373,512,99,29,C.ink,true);
   text(s,'144.2 → 33.5 ms/call median',64,488,512,41,26,C.sub);
   text(s,'원인 해석: PARTIAL',704,488,512,41,29,C.warn,true);
   text(s,'수치의 확인 범위와, 원인 해석의 한계를 함께 남긴다',64,561,1152,36,29,C.teal,true);
   return s;
  },
  S82(p){
   const s=frame(p,'S82','다음 조사에 남길 기록을 바꿨다','ACT 4 · 실제 제작 기록 / 평가·보고 기준의 변경',
    'DEC-0016 · TRIAL-006 판정 보존과 후속 기록 기준 변경 · 의미 요약',
    '제품 코드·Demo Skill 수정 아님 · 격리 실험이나 Prompt 인과 검증을 완료한 것도 아님','OBSERVED_META');
   text(s,'기존: 작업·저장소 중심의 보고',64,191,1152,37,27,C.sub);
   text(s,'변경: 실행 조건과 결과의 해석 범위도 함께 기록',64,247,1152,43,31,C.teal,true);
   const rows=[['적용된 지침','어떤 Skill·환경 조건이 관찰됐나?'],['경고와 실제 사용','시작 경고와 도구의 실제 실행·결과를 구분'],['해석 가능한 범위','확인된 결과와 원인 불확실성을 구분']];
   rows.forEach(([label,body],i)=>{const y=315+i*73;line(s,64,y,1152);text(s,label,64,y+12,304,43,27,C.teal,true);text(s,body,404,y+12,812,43,27,C.ink);});
   text(s,'당시 결정: PARTIAL 보존 · 환경 격리를 진행 조건으로 두지 않음',64,558,1152,39,25,C.sub);
   return s;
  },
  S83(p){
   const s=frame(p,'S83','후속 기록도 원문과 다시 대조했다','ACT 4 · 실제 제작 기록 / 후속 적용과 남은 불일치',
    'TRIAL-007/008 · 보고·원문 대조와 지침 사용 경로를 요약한 도식',
    'MCP 작업 결과 없음 · 두 기록의 서로 다른 확인 내용 · 완전한 환경 목록·품질 향상 미입증','OBSERVED_META');
   text(s,'보고와 원문에 남은 차이',64,221,544,43,30,C.teal,true);
   text(s,'구분해서 남긴 사용 경로',704,221,512,43,30,C.teal,true);
   text(s,'후속 기록 · TRIAL-007',64,275,544,31,22,C.sub);
   text(s,'후속 기록 · TRIAL-008',704,275,512,31,22,C.sub);
   line(s,64,323,544,C.teal,3);line(s,704,323,512,C.teal,3);
   text(s,'보고서',64,346,544,34,25,C.sub,true);
   text(s,'MCP 경고 없음',64,389,544,43,30,C.ink,true);
   text(s,'원문 진단 기록',64,456,544,34,25,C.sub,true);
   text(s,'인증 필요 경고가 남음',64,500,544,43,30,C.warn,true);
   text(s,'원문: Nimble AuthRequired',64,555,544,31,22,C.sub,false,CODE);
   text(s,'저장소 Skill의 명시 호출',704,365,512,55,30,C.ink,true);
   text(s,'서로 구분해 기록',704,443,512,36,26,C.teal,true);
   text(s,'전역 지침·Skill의 영향',704,506,512,55,30,C.ink,true);
   return s;
  },
  S84(p){
   const s=frame(p,'S84','실제 기록을 Loop의 단계에 대응하면','ACT 4 · 실제 제작 기록 / 운영 모델과의 대응',
    'TRIAL-006 → DEC-0016 → TRIAL-007/008 · 보존된 평가·보고 기록',
    '후속 대조는 부분적 확인 · 제품 코드·가상 Workflow 복구 아님 · 품질 향상은 미측정','OBSERVED_META');
   text(s,'성능 조사에서 얻은 관찰이 평가·보고 기준을 바꿨다',64,189,1152,43,30,C.teal,true);
   const records=['Resize 성능\n조사','전역 Skill과\n시작 경고','Prompt만의\n효과 분리 불가','평가·보고\n기준 변경','후속 기록 대조\n불일치도 남음'];
   phases.forEach((label,i)=>{const x=64+i*236;text(s,String(i+1).padStart(2,'0'),x,270,208,31,23,C.teal,true,CODE);line(s,x,315,208,C.teal,3);text(s,label,x,330,208,39,27,C.ink,true);text(s,records[i],x,390,208,91,26,C.ink);if(i<4)connector(s,x+214,349,16);});
   text(s,'바뀐 것: 평가·보고 기준',64,507,1152,39,30,C.teal,true);
   text(s,'미확인: 원인별 효과 · 환경 목록의 완전성 · Trial 품질 향상',64,561,1152,36,26,C.sub);
   return s;
  },
  S85(p){
   const s=previousS85(p,H);
   const changes={
    'Project와 환경이 바뀌면\n검증도 다시 본다':['GPU 변경 뒤, 검증 조건을 다시 본다',{left:64,top:84,width:1152,height:64},48],
    'GPU · 빌드 · 측정 조건이 달라졌다면?':['가정: 같은 검사 코드가 새 GPU에서 실행된다',{left:64,top:205,width:1152,height:42},29],
    '어떤 조건에서\n맞던 판단인가?':['예전 판단은 어떤\n장치·조건에서 유효했나?',null,26],
    '입력과 실행 조건은\n비교 가능한가?':['입력·빌드·측정 조건을\n다시 맞췄나?',null,26],
    '기능 계약':['동작 명세',null,25],
    '함께 다시 확인할\n동작은?':['장치가 달라도 지킬\n출력·동작은 무엇인가?',null,26],
    '같은 문제가 반복될 때, 어느 Layer를 먼저 살펴볼까?':['근거를 확인한 뒤, 어떤 지침·검증 기준을 다시 볼까?',{left:64,top:561,width:1152,height:39},28]
   };
   for(const[from,[to,position,fontSize]]of Object.entries(changes)){
    const q=s.shapes.items.find(q=>String(q.text)===from);if(!q)throw new Error('Missing S85 text: '+from);
    q.text=to;if(position)q.position=position;else if(to.includes('\n'))q.position={...q.position,height:64};
    q.text.style={...q.text.style,fontSize};
   }
   const questionRows={261:251,295:285,354:352,388:386,447:453,481:487};
   for(const q of s.shapes.items){
    const v=q.position;if(v.left<842||!(v.top in questionRows))continue;
    q.position={...v,left:v.left===842?800:848,top:questionRows[v.top],width:v.left===842?40:368};
   }
   return s;
  }
 };
}
