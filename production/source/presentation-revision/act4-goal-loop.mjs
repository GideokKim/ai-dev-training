/** DEC-0097: one goal, implementation/review feedback and bounded research. */
import * as H from './helpers.mjs';

const {C,FONT,CODE,text,line,rect}=H;
const link=(s,x,y,w,h=0,color=C.teal,reverse=false)=>s.shapes.add({
 geometry:'connector',kind:'straight',position:{left:x,top:y,width:w,height:h},
 line:{fill:color,width:2.5},[reverse?'head':'tail']:{type:'triangle',width:'sm',length:'sm'}
});
const stem=(s,x,y,h,color=C.teal)=>s.shapes.add({geometry:'line',
 position:{left:x,top:y,width:0,height:h},line:{fill:color,width:2.5}});
const make=(p,id,title,source,boundary,type='CONCEPTUAL')=>H.frame(p,id,title,
 `ACT 4 · ${type==='RESEARCH'?'연구 근거':type==='TEACHING_MODEL'?'루프 운영 설계':'같은 목표의 구현·검토 · 교육용 사례'}`,
 source,boundary,type);
const example='밝기 통계 최적화의 가상 진행 예 · 실제 Trial 또는 실행 캡처 아님';
const noRun='후보·지적·수정은 설명용 설계 · 실제 실행·측정·PASS/FAIL 결과 없음';
const goal=(s,label='같은 목표: 출력·동작 유지 / 임시 할당 줄이기 / 실행시간 조건 지키기')=>{
 line(s,64,185,1152,C.teal,2);text(s,label,64,199,1152,39,27,C.teal,true);
};
const actor=(s,x,y,w,label,body,color=C.teal)=>{
 rect(s,x,y,w,130,C.white,color,1.5);
 text(s,label,x+20,y+12,w-40,41,30,color,true);
 text(s,body,x+20,y+66,w-40,50,27,C.ink);
};
const change=(s,from,to)=>{
 const q=s.shapes.items.find(q=>String(q.text)===from);
 if(!q)throw new Error(`Missing retained goal-loop text: ${from}`);
 q.text=to;q.name=to.slice(0,60);return q;
};

export function renumber115Text(value){
 return String(value).replace(/(?<![A-Za-z0-9_/])S(\d{2,3})(?![\d_.])/g,(id,n)=>
  Number(n)>100?`S${String(Number(n)-1).padStart(2,'0')}`:id);
}

export function goalLoopFactories(previous){
 const result={};
 for(const [id,f]of Object.entries(previous)){
  const n=Number(id.slice(1));if(n>=82&&n<=100)continue;
  const next=n>100?`S${n-1}`:id;
  result[next]=(p,helpers)=>{
   const s=f(p,helpers);
   for(const q of s.shapes.items){
    const original=String(q.text),ids=[...new Set(original.match(/(?<![A-Za-z0-9_/])S\d{2,3}(?![\d_.])/g)??[])];
    ids.forEach((old,i)=>q.text.replace(old,`@@GOAL${i}@@`));
    ids.forEach((old,i)=>q.text.replace(`@@GOAL${i}@@`,renumber115Text(old)));
    if(ids.length)q.name=renumber115Text(q.name??'');
   }
   return s;
  };
 }
 Object.assign(result,{
  S77(p){
   const s=H.frame(p,'S77','첫 결과 뒤에도, 확인할 일이 남는다면?','ACT 3 · Harness에서 다음 수정으로',
    '교육용 상황 · 실제 밝기 통계의 실패나 검토 누락 이력이 아님',
    '앞의 실제 성공과 별개의 가정 · 새 실행·검토 결과 없음','CONCEPTUAL');
   actor(s,64,278,464,'재사용한 수행 방법','조사 · 변경 · 검사');
   link(s,548,341,116);
   actor(s,704,278,512,'첫 변경 결과','완료 기준을 모두 충족했을까?',C.warn);
   text(s,'작업 방법을 준비해도, 첫 결과가 곧 완료는 아니다',64,510,1152,53,33,C.ink,true);
   return s;
  },
  S78(p){
   const s=H.frame(p,'S78','남은 문제를 다음 수정으로 이어주는 사람','ACT 3 · 한 목표 안에서 반복되는 요청',
    '교육용 요청 예 · 같은 작업의 검토·수정을 사람이 연결하는 가정',
    '실제 비교 실험·반복 횟수·시간·토큰·실패를 관찰한 결과가 아님','CONCEPTUAL');
   text(s,'목표는 하나인데, 다음 단계는 매번 다시 요청한다',64,191,1152,46,31,C.teal,true);
   [['검토해 줘.','첫 결과 확인'],['지적한 부분을 고쳐 줘.','남은 문제 수정'],['다시 확인해 줘.','같은 기준 재검토']].forEach(([a,b],i)=>{
    const x=64+i*400;actor(s,x,310,352,`${i+1}  사람의 요청`,a,i===1?C.warn:C.teal);
    text(s,b,x,472,352,40,28,C.sub);if(i<2)link(s,x+363,376,28);
   });
   return s;
  },
  S79(p){
   const s=H.frame(p,'S79','같은 목표의 수정과 검토가 끊기지 않게','ACT 3 · 수행 절차와 반복 제어의 연결',
    '교육용 운영 설계 · Harness의 방법·도구를 반복 수행에 사용',
    'Harness에 원래 피드백이 없다는 뜻이 아님 · 자동 실행 제품 기능을 검증한 자료가 아님');
   text(s,'Harness가 제공하는 것',64,241,512,43,31,C.teal,true);
   text(s,'루프로 연결할 판단',704,241,512,43,31,C.teal,true);
   line(s,64,308,512,C.teal,3);line(s,704,308,512,C.teal,3);
   text(s,'어떤 방법으로 일할까?\n무엇으로 확인할까?',64,342,512,120,35,C.ink,true);
   text(s,'무엇이 아직 남았나?\n다음에 무엇을 고칠까?',704,342,512,120,35,C.ink,true);
   link(s,600,394,76);
   text(s,'검토에서 찾은 문제를, 같은 목표의 다음 수정에 전달한다',64,547,1152,43,31,C.teal,true);
   return s;
  },
  S80(p){
   const s=H.frame(p,'S80','다음 수정에 넘길 기록','ACT 3 · 반복을 이어 주는 최소 상태',
    'TEACHING_MODEL · 실제 새 기록 파일·Memory를 생성한 결과가 아님',
    '기존 지식의 출처는 유지 · 별도 Memory 시스템이나 새 도구를 필수로 요구하지 않음');
   const rows=[['목표·완료 기준','반복 중에도 지킬 기준'],['현재 변경과 검사','어디까지 만들고 확인했는가'],['남은 검토 지적','다음에 고칠 문제와 근거']];
   rows.forEach(([a,b],i)=>{
    const y=255+i*99;line(s,64,y,850,C.line,1);text(s,a,64,y+18,310,50,31,C.teal,true);text(s,b,406,y+18,508,50,29,C.ink);
   });
   link(s,938,394,74);text(s,'다음\n수정',1040,344,176,112,36,C.teal,true);
   text(s,'같은 목표와 남은 문제를 이어받으면, 처음부터 다시 설명하지 않는다',64,564,1152,35,28,C.ink,true);
   return s;
  },
  S81(p){
   const s=H.frame(p,'S81','내가 매번 이어 주는 다음 단계는 무엇일까?','ACT 3 · 성찰과 Loop Engineering 진입',
    '개인 성찰 · 기록·제출·공유는 선택 · 새 Trial 없음',
    '다음 ACT는 같은 목표의 구현·검토·수정 반복을 다룸 · 완전자율 성공을 보장하지 않음');
   const qs=[['검토','무엇을 더 확인해 달라고 하나?'],['수정','남은 문제를 다시 설명하나?'],['완료','끝내도 되는지 무엇으로 보나?']];
   qs.forEach(([a,b],i)=>{
    const y=240+i*100;text(s,a,64,y,210,50,33,C.teal,true);line(s,294,y+27,72,C.teal,2.5);text(s,b,406,y,810,50,33,C.ink,true);
   });
   text(s,'다음 ACT: 검토 결과가 다음 수정으로 돌아가는 시스템',64,566,1152,35,29,C.teal,true);
   return s;
  },
  S83(p){
   const s=make(p,'S83','다음 수정도 사람이 매번 이어줘야 할까?',example,noRun);
   goal(s,'사람이 연결하던 다음 요청을, 시스템의 다음 입력으로');
   actor(s,64,302,464,'사람이 보내던 다음 요청','검토 의견을 모아 다시 전달');
   link(s,552,367,112);
   actor(s,704,302,512,'다음 수정이 받을 입력','남은 지적 + 근거 + 현재 후보',C.warn);
   text(s,'목표는 유지하고, 남은 문제를 다음 수정에 넘긴다',64,535,1152,52,34,C.teal,true);
   return s;
  },
  S84(p){
   const s=make(p,'S84','먼저, 무엇이 되면 완료인지 정한다',example,
    '할당량 목표·실행시간 상한·대표 입력은 실행 전에 확정 · 현재 수치는 TBD');
   text(s,'밝기 통계 계산의 불필요한 임시 할당을 줄인다',64,188,1152,45,32,C.teal,true);
   const items=[['01','출력·동작 유지','기존 6개 출력과 명세'],['02','임시 할당 줄이기','같은 입력의 할당량 확인'],['03','실행시간 조건 지키기','같은 환경·측정 기준']];
   items.forEach(([n,a,b],i)=>{
    const x=64+i*400;text(s,n,x,287,352,39,25,C.teal,true,CODE);line(s,x,343,352,C.teal,3);
    text(s,a,x,367,352,46,33,C.ink,true);text(s,b,x,444,352,48,27,C.sub);
   });
   text(s,'반복 중에도 목표와 기준은 그대로',64,551,1152,44,33,C.teal,true);
   return s;
  },
  S85(p){
   const s=make(p,'S85','모델 A가 첫 변경 후보를 만든다',example,noRun);goal(s);
   text(s,'모델 A · 구현',64,285,340,46,33,C.teal,true);text(s,'후보 v1 · 가정한 계산 방식',480,285,736,46,32,C.ink,true);
   actor(s,64,366,340,'목표와 명세','조건에 맞는 변경 초안');link(s,421,431,41);
   [['입력',480,176],['전체 값 복사',704,272],['통계 계산',1024,192]].forEach(([t,x,w],i)=>{
    rect(s,x,375,w,110,i===1?C.amber:C.white,i===1?C.warn:C.line,1.5);text(s,t,x+12,405,w-24,46,30,i===1?C.warn:C.ink,true,FONT,'center');
   });
   link(s,664,431,30);link(s,984,431,30);
   text(s,'초안이 나왔다. 완료 기준을 만족하는지는 아직 확인 전이다',64,552,1152,43,30,C.teal,true);
   return s;
  },
  S86(p){
   const s=make(p,'S86','실제 동작과 비용은 도구로 확인한다',example,
    '검사할 항목의 설계 · 실제 명령 실행·측정값·통과 결과를 제시하는 장이 아님');goal(s);
   const cells=[['출력·동작','명세에 맞는 테스트','동작·값 보존'],['임시 할당','대표 입력의 할당량 측정','할당량 목표'],['실행시간','같은 환경에서 반복 측정','시간 허용 범위']];
   cells.forEach(([a,b,c],i)=>{
    const x=64+i*400;line(s,x,292,352,C.teal,3);text(s,a,x,311,352,43,34,C.ink,true);
    text(s,b,x,397,352,52,28,C.teal,true);text(s,c,x,480,352,38,26,C.sub);
   });
   text(s,'“확인했다”는 말 대신, 검사·측정 기록을 남긴다',64,552,1152,43,31,C.ink,true);
   return s;
  },
  S87(p){
   const s=make(p,'S87','모델 B는 무엇을 근거로 검토할까?',example,noRun);goal(s);
   text(s,'검토 입력',64,278,436,40,30,C.teal,true);
   text(s,'명세·완료 기준\n후보 v1의 변경 내용\n검사·측정 기록 또는 미확인',64,345,436,154,30,C.ink,true);
   link(s,524,405,84);
   text(s,'다른 모델 B · 검토',656,278,560,40,30,C.warn,true);
   text(s,'① 임시 목록이 남아 있다\n② 대표 입력의 확인 자료가 없다',656,345,560,120,31,C.ink,true);
   text(s,'위치 · 위반 기준 · 근거를 함께 제시',656,508,560,43,27,C.warn,true);
   return s;
  },
  S88(p){
   const s=make(p,'S88','지적이 다음 수정으로 이어진다',example,noRun);goal(s);
   text(s,'모델 B의 검토 지적',64,282,496,43,31,C.warn,true);
   text(s,'모델 A의 다음 후보 v2',720,282,496,43,31,C.teal,true);
   const rows=[['①  임시 목록이 남음','①  전체 값 복사 제거'],['②  확인 자료가 없음','②  같은 결과 검사 추가']];
   rows.forEach(([a,b],i)=>{
    const y=362+i*116;line(s,64,y,496,C.line,1);line(s,720,y,496,C.line,1);
    text(s,a,64,y+16,496,57,31,C.ink,true);text(s,b,720,y+16,496,57,31,C.ink,true);link(s,590,y+45,94);
   });
   return s;
  },
  S89(p){
   const s=make(p,'S89','고쳤다면, 같은 기준으로 다시 본다',example,
    '재검증·재검토의 운영 설계 · 후보 v2가 성공했다는 실제 결과는 없음');goal(s);
   actor(s,64,296,312,'후보 v2','수정한 변경과 기록');link(s,394,361,48);
   actor(s,464,296,352,'도구 + 모델 B','같은 기준으로 재확인');link(s,836,361,48);
   text(s,'기준 충족',920,300,296,43,31,C.teal,true);text(s,'완료 판단',920,353,296,42,31,C.ink,true);
   text(s,'남은 지적',920,446,296,40,29,C.warn,true);text(s,'후보 v3로 수정 계속',920,495,296,42,28,C.ink,true);
   line(s,218,524,654,C.warn,2.5);stem(s,872,426,98,C.warn);link(s,218,426,0,98,C.warn,true);
   text(s,'완료 기준을 낮춰서 끝내지 않는다',64,557,780,39,30,C.teal,true);
   return s;
  },
  S90(p){
   const s=make(p,'S90','같은 목표의 구현·검토 루프',
    'TEACHING_MODEL · 목표와 근거를 다음 수정에 연결하는 시스템',
    '구체적 제품 기능·자동 실행 이력·모델 학습·완료 성과를 관찰한 결과가 아님','TEACHING_MODEL');goal(s,'목표·완료 기준은 유지하고, 현재 후보와 남은 문제를 갱신한다');
   actor(s,64,286,320,'모델 A','구현 / 수정');actor(s,480,286,320,'검증 도구','테스트 / 측정');actor(s,896,286,320,'모델 B','변경과 근거 검토',C.warn);
   link(s,400,351,64);link(s,816,351,64);stem(s,1056,416,49,C.warn);
   rect(s,640,465,576,75,C.pale,C.teal,1.5);text(s,'근거를 보고 다음 행동 판단',660,480,536,44,31,C.teal,true);
   rect(s,64,465,480,75,C.amber,C.warn,1.5);
   text(s,'남은 문제 + 수정 요청',84,480,440,44,29,C.warn,true);link(s,552,503,72,0,C.warn,true);
   link(s,224,416,0,49,C.warn,true);
   text(s,'미충족이면, 검토 결과를 같은 목표의 다음 수정으로',64,562,1152,35,28,C.ink,true);
   return s;
  },
  S91(p){
   const s=make(p,'S91','언제 계속하고, 언제 끝낼까?',
    'TEACHING_MODEL · 반복의 종료와 다음 행동을 정하는 기준',
    '미완료 중단은 목표 달성과 다름 · 반복·시간·비용 한도 수치는 실행 전에 정함','TEACHING_MODEL');
   const choices=[['기준 충족','완료','확인 범위와 남은 한계 보고',C.teal],['미충족 · 수정 가능','다음 수정','남은 지적과 근거 전달',C.warn],['막힘 · 한도 도달','사람에게 확인','현재 상태와 미해결 문제 보존',C.red]];
   choices.forEach(([a,b,c,color],i)=>{
    const x=64+i*400;line(s,x,261,352,color,3);text(s,a,x,282,352,43,28,color,true);
    text(s,b,x,365,352,57,41,C.ink,true);text(s,c,x,475,352,72,28,C.sub);
   });
   return s;
  },
  S92(p){
   const s=make(p,'S92','구현한 모델에게 다시 물으면 충분할까?',
    'Self-Refine (2023) / Huang et al., ICLR 2024 · 서로 다른 실험 조건의 연구',
    '과거 연구 대상의 결과 · 현재 모든 모델의 자기 검토 능력이나 다중 모델 우월성을 뜻하지 않음','RESEARCH');
   text(s,'같은 모델의 피드백·수정',64,245,512,46,32,C.teal,true);
   text(s,'근거 없이 다시 생각하기',704,245,512,46,32,C.warn,true);
   line(s,64,310,512,C.teal,3);line(s,704,310,512,C.warn,3);
   text(s,'Self-Refine\n여러 과제에서 개선 보고',64,352,512,113,33,C.ink,true);
   text(s,'추론 자기 교정 연구\n악화되는 경우도 보고',704,352,512,113,33,C.ink,true);
   text(s,'검토 방식과 피드백의 근거를 설계해야 한다',64,546,1152,48,34,C.teal,true);
   return s;
  },
  S93(p){
   const s=make(p,'S93','다른 모델의 관점이 도움이 된 실험',
    'ReConcile · ACL 2024 · Table 7 · StrategyQA의 토론·합의 실험',
    '코드 수정 실험이 아님 · 현재 모델의 일반 성능·비용 개선으로 확대하지 않음','RESEARCH');
   text(s,'정확도 (%) · 같은 토론 방식에서 모델 구성을 비교',64,188,1152,42,29,C.teal,true);
   s.charts.add('bar',{
    name:'ReConcile StrategyQA model-composition ablation',
    position:{left:64,top:270,width:780,height:270},
    categories:['여러 모델 조합','ChatGPT 3개'],
    series:[{name:'Accuracy (%)',values:[79.0,72.2],points:[{idx:0,fill:C.teal},{idx:1,fill:'#9BA8B5'}],valuesFormatCode:'0.0'}],
    barOptions:{direction:'bar',grouping:'clustered',gapWidth:120,varyColors:true},hasLegend:false,
    xAxis:{visible:true,min:0,max:100,majorUnit:20,numberFormatCode:'0',textStyle:{fontSize:20,typeface:FONT,fill:C.sub},majorGridlines:{fill:C.line,width:1,style:'solid'},line:{fill:C.line,width:1}},
    yAxis:{visible:true,min:0,max:100,majorUnit:20,numberFormatCode:'0',textStyle:{fontSize:25,typeface:FONT,fill:C.ink},line:{fill:'none',width:0},majorGridlines:null},
    dataLabels:{showValue:true,position:'outEnd',numberFormatCode:'0.0',textStyle:{fontSize:29,typeface:FONT,bold:true,fill:C.ink}},
    chartFill:C.bg,plotAreaFill:C.bg,chartLine:{fill:'none',width:0},plotAreaLine:{fill:'none',width:0}
   });
   text(s,'+6.8%p',900,304,316,83,58,C.teal,true);
   text(s,'연구된 조합에서의 차이',900,408,316,44,25,C.ink,true);
   text(s,'“다른 모델이면 항상 좋다”는 결론은 아니다',64,556,1152,40,30,C.ink,true);
   return s;
  },
  S94(p){
   const s=make(p,'S94','잘 만드는 능력과 잘 검토하는 능력',
    'CriticBench · Findings of ACL 2024 · 17개 모델 / §4.2.5 교차 모델 검토',
    '일부 모델·과제에서의 결과 · 이 교육의 코드 루프 완료율·비용 개선을 측정한 연구가 아님','RESEARCH');
   const stages=[['생성','답을 만든다'],['검토','문제를 찾는다'],['수정','답을 고친다']];
   stages.forEach(([a,b],i)=>{
    const x=64+i*400;line(s,x,260,352,C.teal,3);text(s,a,x,281,352,47,35,C.teal,true);text(s,b,x,347,352,47,32,C.ink,true);
   });
   text(s,'모델의 세 능력이 항상 일치하지 않았다',64,460,1152,44,33,C.ink,true);
   text(s,'일부 다른 모델의 검토가, 자기 검토보다 나은 경우를 보고',64,539,1152,47,30,C.teal,true);
   return s;
  },
  S95(p){
   const s=make(p,'S95','구현과 검토에 모델을 어떻게 나눌까?',
    '연구를 참고한 개발 작업의 역할 배치 제안 · 현재 제품의 자동 배치 기능 설명 아님',
    '같은 모델의 역할 분리와 서로 다른 모델 조합을 구분 · 실제 조합의 효과는 별도 평가','TEACHING_MODEL');
   text(s,'역할만 나누는 구성',64,239,512,44,31,C.sub,true);
   text(s,'다른 모델로 나누는 구성',704,239,512,44,31,C.teal,true);
   actor(s,64,324,230,'모델 A','구현');actor(s,346,324,230,'모델 A','검토');link(s,306,389,28);
   actor(s,704,324,230,'모델 A','구현');actor(s,986,324,230,'모델 B','검토',C.warn);link(s,946,389,28);
   text(s,'이번 작업의 결과·오류 탐지·비용을 보고 조합을 평가한다',64,543,1152,49,31,C.teal,true);
   return s;
  },
  S96(p){
   const s=make(p,'S96','검토 모델의 말도 확인해야 한다',
    'TEACHING_MODEL · 검토 지적의 수용·기각과 추가 확인',
    '모델 동의·다수결만으로 완료하지 않음 · 검토 모델도 틀릴 수 있음','TEACHING_MODEL');
   actor(s,64,302,304,'모델 B의 지적','위치 · 기준 · 근거');link(s,388,367,52);
   actor(s,464,302,352,'명세·검사와 대조','수정 필요성이 맞는가?');link(s,836,367,48);
   text(s,'근거가 맞으면 수정',920,281,296,50,29,C.teal,true);
   text(s,'맞지 않으면 기각',920,379,296,50,29,C.ink,true);
   text(s,'모호하면 사람 확인',920,477,296,50,29,C.warn,true);
   return s;
  },
  S97(p){
   const s=make(p,'S97','반복하려면 무엇을 이어받아야 할까?',
    'TEACHING_MODEL · 같은 목표의 다음 시도를 위한 최소 기록',
    '새 Memory·프레임워크가 필수인 것은 아님 · 한도와 중단 후 재개는 별도 운영 기준','TEACHING_MODEL');
   const items=[['고정할 것','목표 · 완료 기준'],['갱신할 것','후보 · 검토 지적 · 검사 기록'],['제어할 것','남은 문제 · 반복·시간·비용 한도']];
   items.forEach(([a,b],i)=>{
    const y=246+i*100;line(s,64,y,824,C.line,1);text(s,a,64,y+18,246,46,31,C.teal,true);text(s,b,332,y+18,556,46,29,C.ink,true);
   });
   link(s,908,395,86);text(s,'다음\n시도',1022,341,194,111,38,C.teal,true);
   text(s,'같은 실패가 반복되거나 회귀하면, 계속 돌리기보다 원인을 확인한다',64,562,1152,35,28,C.ink,true);
   return s;
  },
  S98(p){
   const s=make(p,'S98','확인한 근거와 아직 실행하지 않은 설계',
    '기존 Product Trial / 인용한 연구 / CASE-LOOP-01 설계의 근거 경계',
    '기존 Trial을 다중 모델 루프의 실행 증거로 사용하지 않음 · 새 모델 조합·완료 성과 미검증','TEACHING_MODEL');
   const blocks=[['실제 Demo','관찰 기록','제품 변경·출력·측정 확인',C.teal],['논문','연구 결과','해당 모델·과제·조건의 결과',C.ink],['이번 루프','교육용 설계','새 실행·효과 검증 전',C.warn]];
   blocks.forEach(([a,b,c,color],i)=>{
    const x=64+i*400;line(s,x,266,352,color,3);text(s,a,x,288,352,48,35,color,true);
    text(s,b,x,374,352,48,31,C.ink,true);text(s,c,x,463,352,74,27,C.sub);
   });
   return s;
  },
  S99(p){
   const s=make(p,'S99','우리 작업에는 어떤 루프가 필요할까?',
    '개인 성찰과 Q&A · 실습·제출·구현 요구 없음',
    '목표·판단·검증·책임은 유지 · 다음 ACT에서 조합·통합·제거를 검토','TEACHING_MODEL');
   const qs=[['목표','무엇이 되면 완료인가?'],['피드백','어떤 지적을 다음 수정에 넘길까?'],['운영','누가 검토하고 언제 멈출까?']];
   qs.forEach(([a,b],i)=>{
    const y=241+i*98;text(s,a,64,y,210,49,33,C.teal,true);line(s,294,y+26,72,C.teal,2.5);text(s,b,406,y,810,49,33,C.ink,true);
   });
   text(s,'내 업무에 필요한 만큼 조합하고, 불필요한 구조는 덜어낸다',64,558,1152,40,30,C.teal,true);
   return s;
  }
 });
 // Reuse ACT5's approved layouts, changing only the Loop callback language.
 const callbacks={
  S101:[['조건이 달라지면','검토·수정이 이어지면'],['근거를 확인해\n시스템을 고친다','목표 충족까지\n검토·수정한다']],
  S102:[['Loop는 앞 ACT의 가상 사례·실제 제작 기록에서 따로 살펴봤다','Loop는 앞 ACT의 설계 사례·연구에서 살펴봤다 · 제품 실행 이력과 구분']],
  S105:[['검증 근거\n다음 작업의 개선','검증 근거\n목표까지 수정·재검토']],
  S109:[['같은 실패 뒤에도 원인·기준을 다시 안 본다','검토 지적이 다음 수정으로 이어지지 않는다']],
  S110:[['반복 실패의 기록·원인부터 대조한다','검토 지적·다음 수정·완료 기준을 잇는다']]
 };
 for(const[id,pairs]of Object.entries(callbacks)){
  const retained=result[id];result[id]=(p,helpers)=>{
   const s=retained(p,helpers);for(const[from,to]of pairs){const q=change(s,from,to);if(id==='S102')q.text.style={...q.text.style,fontSize:25};}
   return s;
  };
 }
 return result;
}
