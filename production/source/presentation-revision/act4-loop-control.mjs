/** DEC-0094: distinguish execution and improvement loops at current IDs. */
import * as H from './helpers.mjs';

export function act4LoopControlFactories(previous) {
 const {C,text,line,rect,FONT,CODE}=H;
 const connector=(s,x,y,w,color=C.teal)=>s.shapes.add({geometry:'connector',kind:'straight',position:{left:x,top:y,width:w,height:0},line:{fill:color,width:2.5},tail:{type:'triangle',width:'sm',length:'sm'}});
 const vertical=(s,x,y,h,color=C.teal,up=false)=>s.shapes.add({geometry:'connector',kind:'straight',position:{left:x,top:y,width:0,height:h},line:{fill:color,width:2.5},...(up?{head:{type:'triangle',width:'sm',length:'sm'}}:{})});
 const make=(p,id,title,eyebrow,source,boundary,type='CONCEPTUAL')=>H.frame(p,id,title,eyebrow,source,boundary,type);
 const replace=(s,from,to)=>{
  const q=s.shapes.items.find(q=>String(q.text)===from);
  if(!q)throw new Error('Missing retained ACT4 text: '+from);
  q.text=to;q.name=to.slice(0,60);return q;
 };
 const stages=(s,labels,x,y,w,size=28,color=C.teal)=>{
  const gap=34,cw=(w-gap*(labels.length-1))/labels.length;
  labels.forEach((label,i)=>{
   const xx=x+i*(cw+gap);line(s,xx,y,cw,color,2.5);
   text(s,label,xx,y+15,cw,48,size,C.ink,true,FONT,'center');
   if(i<labels.length-1)connector(s,xx+cw+7,y+38,gap-14,color);
  });
 };
 return {
  S83(p){
   const s=make(p,'S83','확인한 성공을 유지하려면','ACT 4 · 이번 작업의 수행과 다음 작업의 체계',
    'STATE-04-PERF · 실제 성공 회수 / 아래 두 루프는 이 교육의 설명 모델',
    '기록된 성공만 관찰됨 · 아래 흐름은 실제 후속 실행·개선 성과가 아님','OBSERVED_PRODUCT');
   text(s,'확인한 성공: 출력 6항목 동일 · 전체 11/11 · 같은 조건의 성능 측정',64,183,1152,40,27,C.teal,true);
   text(s,'작업 수행 루프',64,279,232,40,30,C.teal,true);
   text(s,'이번 목표를 완료',64,326,232,36,25,C.sub);
   stages(s,['실행','검증','완료'],338,260,878,27);
   vertical(s,777,328,22);line(s,473,350,304,C.teal,2.5);vertical(s,473,328,22,C.teal,true);
   text(s,'미충족이면 수정·재검증',480,359,660,30,24,C.teal);
   text(s,'체계 개선 루프',64,431,232,40,30,C.warn,true);
   text(s,'다음에도 쓸 방법',64,478,262,36,24,C.sub);
   stages(s,['기록·보정','원인 검토','체계 갱신','재평가·적용'],338,412,878,26,C.warn);
   vertical(s,1119,481,25,C.warn);line(s,435,506,684,C.warn,2.5);vertical(s,435,481,25,C.warn,true);
   text(s,'다음 작업의 실행 기록을 다시 관찰',480,516,736,30,24,C.warn);
   text(s,'이 ACT: 반복 보정을 다음 작업이 읽을 기준으로 잇기',64,559,1152,40,30,C.teal,true);
   return s;
  },
  S86(p){
   const s=make(p,'S86','이번 요청과 다음 작업의 지침','ACT 4 · CONCEPTUAL / 두 루프가 바꾸는 범위',
    'DEMO-04A · 현재 요청의 보정과 다음 작업이 읽을 지침을 비교',
    '교육용 구성 · 실제 실행·완료·지침 변경 결과가 아님');
   text(s,'이번 요청에 통합 테스트를 더한다면?',64,186,1152,43,31,C.ink,true);
   text(s,'작업 수행 루프',64,267,512,41,30,C.teal,true);
   rect(s,64,325,512,91,C.white,C.teal,1.5);
   text(s,'통합 테스트도 확인해 줘.',86,342,468,54,30,C.ink,true);
   stages(s,['추가 확인','결과 검토','이번 작업 완료'],64,449,512,25);
   text(s,'체계 개선 루프의 대상',704,267,512,41,30,C.warn,true);
   rect(s,704,325,512,91,C.white,C.warn,1.5,'dash');
   text(s,'다음 작업의 Workflow\n단위 테스트만 지시',724,335,472,73,28,C.ink,true);
   text(s,'이번 요청이 끝나도, 원래 지침은 그대로',704,458,512,54,27,C.warn,true);
   text(s,'다음에도 필요한 보정이라면, 원인을 확인하고 재사용 출처를 검토',64,558,1152,40,28,C.teal,true);
   return s;
  },
  S90(p){
   const s=previous.S90(p,H);
   replace(s,'원인이 뒷받침하는 지침을 갱신한다','원인이 뒷받침하는 범위를 변경 후보에 반영한다');
   replace(s,'갱신할 지침','변경 후보 지침');
   replace(s,'다음 확인','채택 전 확인');
   replace(s,'같은 작업·대표 작업 평가','재평가 후 채택·재수정 판단');
   replace(s,'검토·갱신은 같은 사람이 맡을 수도 있다','검토·갱신은 같은 사람이 맡을 수 있다 · 변경했다고 바로 채택하지 않는다');
   return s;
  },
  S91(p){
   const s=make(p,'S91','지침을 고친 뒤, 무엇을 다시 확인할까?','ACT 4 · CONCEPTUAL / 평가 질문과 확인할 기록',
    'DEMO-04A · 단위 + 통합 지침으로 바꾼 후보의 평가 설계',
    '가상 사례 · 실제 변경·재실행·검사 결과 없음 · 평가 후 판단도 설계');
   const columns=[
    [64,C.teal,'같은 작업 다시 확인','필요한 단위·통합 검증을\n실제로 다루는가?','대조할 기록','실행 명령 · 검사 로그 · 최종 보고'],
    [704,C.warn,'다른 작업의 영향 확인','문서만 바꿀 때도\n불필요한 검증을 강요하나?','대조할 기록','요청 범위 · 적용 지침 · 실행 기록']
   ];
   columns.forEach(([x,color,title,question,label,evidence])=>{
    text(s,title,x,226,512,43,30,color,true);line(s,x,289,512,color,3);
    text(s,question,x,310,512,100,32,C.ink,true);
    text(s,label,x,445,512,31,24,color,true);
    text(s,evidence,x,492,512,43,25,C.sub);
   });
   text(s,'평가 근거를 보고 채택·재수정·판단 보류를 결정한다',64,559,1152,40,29,C.teal,true);
   return s;
  },
  S92(p){
   const s=make(p,'S92','대표 작업은 서로 다른 위험을 확인한다','ACT 4 · CONCEPTUAL / 작업과 평가 근거 연결',
    'DEMO-10 · EVAL-01~04의 평가 설계 · 네 작업 모두 변경 후 실행 결과 없음',
    '버그·성능은 별도 과거 사례 참고 · 문서·리팩터링은 설계만 있음 · 새 PASS/FAIL 없음');
   text(s,'작업별 요청과 실제 수행 기록을 대조하도록 설계한다',64,187,1152,43,30,C.ink,true);
   const values=[
    ['작업 종류','무엇을 대조할까?','기존 근거'],
    ['버그 수정','동작 명세 ↔ 검사 범위·결과','과거 사례 참고'],
    ['성능 변경','측정 조건 ↔ 결과·동작 확인','과거 사례 참고'],
    ['문서만 수정','요청 범위 ↔ 불필요한 검증 요구','평가 설계만 있음'],
    ['작은 리팩터링','보존 조건 ↔ 변경·검사 기록','평가 설계만 있음']
   ];
   const table=s.tables.add({rows:5,columns:3,left:64,top:262,width:1152,height:300,columnWidths:[240,624,288],values});
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
  S94(p){
   const s=make(p,'S94','평가한 뒤, 다음 행동을 결정한다','ACT 4 · 이 교육의 체계 개선 루프',
    'DEC-0023 / DEC-0094 · 앞선 가상 사례를 연결한 운영 설계',
    '실제 실행·수정·평가 결과 없음 · 제품의 자동 제어·모델 학습을 관찰한 것이 아님','TEACHING_MODEL');
   stages(s,['실행','관찰','원인 판단','변경 후보','재평가'],64,185,1152,27);
   text(s,'재평가의 근거로 다음 행동을 고른다',64,293,1152,40,30,C.teal,true);
   const routes=[
    [64,C.teal,'기준 충족','완료·채택','이번 작업은 완료\n검토한 체계만 다음 작업에'],
    [464,C.teal,'미충족 · 수정 가능','수정 후 재시도','원인·변경 범위를 다시 보고\n새 기록으로 재평가'],
    [864,C.warn,'근거 부족 · 한도 도달','중단·사람에게 확인','시도·남은 문제를 기록\n반복·시간·비용 한도 유지']
   ];
   routes.forEach(([x,color,condition,action,detail])=>{
    line(s,x,358,352,color,3);text(s,condition,x,377,352,37,26,color,true);
    text(s,action,x,434,352,45,32,C.ink,true);text(s,detail,x,503,352,64,25,C.sub);
   });
   return s;
  },
  S99(p){
   const s=make(p,'S99','실제 기록을 Loop의 단계에 대응하면','ACT 4 · 실제 제작 기록 / 확인한 변화와 다음 개선 질문',
    'TRIAL-006 → DEC-0016 → TRIAL-007/008 · 보존된 평가·보고 기록',
    '후속 확인은 부분적 · 원인 확정·품질 향상 미입증 · 다음 개선 질문은 제안이며 미실행','OBSERVED_META');
   const labels=['실행','관찰','해석 판단','기준 변경','후속 확인'];
   const records=['Resize 성능\n조사','전역 Skill과\n시작 경고','Prompt만의\n효과 분리 불가','평가·보고\n기준 변경','원문과 대조\n불일치도 남음'];
   labels.forEach((label,i)=>{
    const x=64+i*236;text(s,String(i+1).padStart(2,'0'),x,205,208,29,22,C.teal,true,CODE);line(s,x,245,208,C.teal,3);
    text(s,label,x,259,208,39,27,C.ink,true);text(s,records[i],x,316,208,82,26,C.ink);
    if(i<4)connector(s,x+214,278,16);
   });
   line(s,64,439,1152);
   text(s,'확인한 변화',64,458,512,35,26,C.teal,true);
   text(s,'평가·보고 기준을 바꿨다',64,507,512,43,31,C.ink,true);
   text(s,'다음 개선 질문 · 제안 / 미실행',704,458,512,35,25,C.warn,true);
   text(s,'왜 보고와 원문이 달랐을까?',704,507,512,43,30,C.ink,true);
   text(s,'불일치 기록 → 대조·검사 방법 재검토',704,560,512,32,24,C.warn);
   return s;
  },
  S100(p){
   const s=previous.S100(p,H);
   const q=replace(s,'근거를 확인한 뒤, 어떤 지침·검증 기준을 다시 볼까?','조건 기록 → 기준 검토·갱신 → 재평가 → 다음 작업에 적용');
   q.text.style={...q.text.style,fontSize:28};
   replace(s,'ACT 4 · C++ VISION / 적용을 위한 가상 질문','ACT 4 · C++ VISION / 반복할 검증 기준을 다음 작업에 연결');
   replace(s,'실제 C++ 사건·성능 결과가 아닙니다. 변경 표시는 확인할 조건을 뜻하며 원인이나 결과를 단정하지 않습니다.','교육용 적용 설계 · 실제 GPU 실행·기준 변경·재평가·다음 작업 적용 결과 없음');
   return s;
  }
 };
}
