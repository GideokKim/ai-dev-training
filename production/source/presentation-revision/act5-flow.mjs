/** Apply DEC-0082: distinguish recap, bounded Product history and next action. */
import * as H from './helpers.mjs';

export function loadAct5FlowSlides() {
 const {C,FONT,CODE,text,line,rect}=H;
 const frame=(p,id,title,eyebrow,source,boundary,type='TEACHING_MODEL')=>{
  const s=H.frame(p,id,title,eyebrow,source,boundary,type);
  s.shapes.items.at(-1).position={left:64,top:650,width:1152,height:30};
  return s;
 };
 const arrow=(s,x,y,w=32)=>s.shapes.add({geometry:'connector',kind:'straight',
  position:{left:x,top:y,width:w,height:0},line:{fill:C.teal,width:2.5},
  tail:{type:'triangle',width:'sm',length:'sm'}});
 const journey=['Chatbot','Prompt','Context','Harness','Loop'];
 return {
  S86(p){
   const s=frame(p,'S86','문제에 맞춰, 일하는 방식을 넓혔다','ACT 5 · 전체 여정 회수',
    'BEAT-060 · 이 교육의 문제 중심 진화 모델',
    '앞의 방식을 버리거나, 모든 프로젝트가 같은 순서로 발전해야 한다는 뜻은 아니다.');
   text(s,'필요한 대응을 더하며, 여기까지 왔다',64,194,1152,46,31,C.teal,true);
   const triggers=['답을 구하던 출발점','요청이 모호하면','설명을 반복하면','절차를 반복하면','조건이 달라지면'];
   const actions=['질문하고\n답을 받는다','이번 작업을\n구체화한다','프로젝트 지식의\n출처를 둔다','일하는 환경을\n설계한다','근거를 확인해\n시스템을 고친다'];
   journey.forEach((name,i)=>{
    const x=64+i*236;
    text(s,triggers[i],x,292,208,40,24,C.sub);
    line(s,x,351,208,C.teal,3);text(s,name,x,370,208,47,30,C.teal,true);
    text(s,actions[i],x,443,208,91,27,C.ink,true);
    if(i<4)arrow(s,x+214,394,16);
   });
   text(s,'문제에 따라 더해진 대응이지, 기능을 모두 갖추는 순서는 아니다',64,563,1152,36,27,C.ink,true);
   return s;
  },
  S87(p){
   const s=frame(p,'S87','실제 Demo는 문제에 맞춰 바뀌었다','ACT 5 · OBSERVED PRODUCT / 제품 저장소의 변경 이력',
    'DEMO-12 · 실제 Git State 이력 · TRIAL-002 / TRIAL-005 / STATE-04-PERF',
    '기록을 요약한 도식 · State는 성숙도 등급이 아님 · 성능은 해당 코드·입력·환경 범위','OBSERVED_PRODUCT');
   text(s,'전체 교육 모델 중, 제품 저장소에서 확인한 변화만',64,188,1152,40,28,C.teal,true);
   text(s,'마주친 문제',64,253,310,32,23,C.sub,true);
   text(s,'실제로 바꾼 것',435,253,781,32,23,C.sub,true);
   const events=[
    ['crop 경계 오류','끝 좌표 제외 명세에 맞춰 구현 수정','STATE-00  →  STATE-00-FIXED'],
    ['프로젝트 지침의\n반복·증가','기본 안내와 필요한 상세 문서로 정리','STATE-01  →  STATE-02  →  STATE-03'],
    ['같은 조사·검증\n절차 반복','Skill을 재사용하고 제품 변경을 검증','STATE-04  →  STATE-04-PERF']
   ];
   events.forEach(([problem,response,states],i)=>{
    const y=300+i*84;line(s,64,y,1152,C.line,1);
    text(s,problem,64,y+9,310,62,26,C.ink,true);arrow(s,385,y+37,29);
    text(s,response,435,y+7,781,40,29,C.ink,true);
    text(s,states,435,y+48,781,28,21,C.sub,false,CODE);
   });
   text(s,'Loop는 앞 ACT의 가상 사례·실제 제작 기록에서 따로 살펴봤다',64,568,1152,32,26,C.teal,true);
   return s;
  },
  S88(p){
   const s=frame(p,'S88','이번 문제에 필요한 구성만 선택했다','ACT 5 · 이번 Demo의 선택 기준',
    'STATE-04-PERF · DEC-0018 · 현재 작업의 구성·지식 출처 감사',
    '비교 실험 결과가 아님 · 모든 프로젝트에 Subagent·Memory가 불필요하거나 적을수록 좋다는 뜻은 아님','OBSERVED_PRODUCT / TEACHING_MODEL');
   text(s,'도구 수보다, 현재 문제에서 필요한 이유를 본다',64,191,1152,44,30,C.teal,true);
   text(s,'사용한 구성',64,276,400,40,28,C.teal,true);line(s,64,330,400,C.teal,3);
   text(s,'작업 요청\nContext와 Routing\n재사용 Skill\n테스트와 Benchmark',64,352,400,175,29,C.ink,true);
   text(s,'이번에는 보류한 이유',560,276,656,40,28,C.warn,true);line(s,560,330,656,C.warn,2);
   text(s,'Subagent',560,350,200,35,25,C.teal,true);
   text(s,'같은 코드의 조사 → 변경 → 검증이 이어짐',560,393,656,43,28,C.ink);
   text(s,'Memory',560,465,200,35,25,C.teal,true);
   text(s,'필요한 지식이 기존 출처에 이미 있었음',560,508,656,43,28,C.ink);
   text(s,'현재 문제가 필요로 하는 만큼 설계한다',64,568,1152,32,28,C.ink,true);
   return s;
  },
  S89(p){
   const s=frame(p,'S89','결과를 수용할지는 사람이 판단한다','ACT 5 · 개발자에게 남는 판단과 책임',
    'BEAT-061–062 · 이 교육의 책임 원칙',
    'Agent와 개발자의 역할을 고정된 분업표로 제시하는 것은 아니다.');
   text(s,'AI가 조사·생성·변경·실행·비교를 도와도',64,194,1152,43,29,C.sub);
   text(s,'AI의 작업 결과',64,302,310,42,30,C.teal,true);
   rect(s,64,363,310,133,C.pale);
   text(s,'변경 내용\n실행·검사·비교 기록',82,384,274,89,27,C.ink,true);
   arrow(s,397,430,70);
   text(s,'사람의 수용 판단',510,270,706,39,28,C.teal,true);
   const questions=[
    [510,330,'목표','목표·제약에 맞나?'],[902,330,'판단','선택이 적절한가?'],
    [510,458,'검증','근거로 확인했나?'],[902,458,'책임','남은 위험을 수용할까?']
   ];
   for(const[x,y,label,q]of questions){line(s,x,y,314,C.teal,2);text(s,label,x,y+12,314,35,27,C.teal,true);text(s,q,x,y+57,314,46,27,C.ink,true);}
   return s;
  },
  S90(p){
   const s=frame(p,'S90','AI가 일할 조건과 확인 경로를 설계한다','ACT 5 · AI-Native Development / 이 교육의 운영 모델',
    'DEC-0023 · 과정에서 사용하는 운영 모델',
    '공식·보편 정의가 아니며, 모든 Task에 모든 구성요소를 넣으라는 뜻은 아니다.');
   text(s,'판단할 근거가 나오도록, 작업 환경을 준비한다',64,193,1152,44,30,C.teal,true);
   const nodes=[['맡길 범위','목표·제약·변경 범위','Task boundary'],['일할 조건','프로젝트 지식\n재사용할 수행 방법','Context · Workflow'],['확인과 피드백','검증 근거\n다음 작업의 개선','Verification · Feedback Loop']];
   nodes.forEach(([name,body,term],i)=>{
    const x=64+i*400;line(s,x,304,352,C.teal,3);
    text(s,name,x,326,352,46,31,C.teal,true);text(s,body,x,402,352,90,29,C.ink,true);
    text(s,term,x,509,352,33,21,C.sub);
    if(i<2)arrow(s,x+361,432,30);
   });
   text(s,'이 설계·운영 방식을, 이 교육에서는 AI-Native Development로 부른다',64,569,1152,31,26,C.ink,true);
   return s;
  },
  S91(p){
   const s=frame(p,'S91','내 업무에서는 무엇이 반복해서 막힐까?','ACT 5 · C++ VISION / 문제 하나 고르기',
    'BEAT-068–069 · 업무 적용을 위한 교육용 질문',
    'A–E는 같은 수준의 선택지 · 필수 도입 순서나 검증된 C++ 프로젝트 절차가 아님');
   text(s,'성능 조사·빌드·측정 업무에서, 가까운 문제 하나만',64,185,1152,42,29,C.teal,true);
   const problems=[
    ['A','성능 조사 범위가 모호하다','요청 · Task'],
    ['B','빌드·명세·장치 조건을 반복 설명한다','지식 · Context'],
    ['C','분석·변경·측정·회귀 확인을 매번 적는다','수행 방법 · Workflow'],
    ['D','테스트·측정의 확인 기준이 모호하다','검증 · Verification'],
    ['E','같은 실패 뒤에도 원인·기준을 다시 안 본다','개선 · Feedback Loop']
   ];
   problems.forEach(([id,problem,kind],i)=>{
    const y=253+i*65;line(s,64,y,1152,C.line,1);rect(s,64,y+13,38,38,C.pale);
    text(s,id,64,y+14,38,35,23,C.teal,true,FONT,'center');
    text(s,problem,126,y+10,730,48,27,C.ink,true);text(s,kind,882,y+10,334,48,24,C.teal);
   });
   return s;
  },
  S92(p){
   const s=frame(p,'S92','고른 문제에서, 다음 행동 하나로','ACT 5 · 개인 성찰 / 같은 글자로 이어 보기',
    'BEAT-070–071 · 다음 행동과 확인 근거를 떠올리는 개인 성찰',
    '마음속으로 떠올리는 시간 · 기록·발표·제출·실천 약속은 요구하지 않음');
   text(s,'방금 고른 A–E에서, 다음 작업의 작은 행동 하나만',64,184,1152,42,29,C.teal,true);
   const actions=[
    ['A','목표·변경 범위를 요청에 적어 본다'],
    ['B','반복 사실의 출처·검토자를 생각한다'],
    ['C','절차를 둘 곳·갱신할 사람을 생각한다'],
    ['D','완료 판단에 필요한 검사를 정해 본다'],
    ['E','반복 실패의 기록·원인부터 대조한다']
   ];
   actions.forEach(([id,action],i)=>{
    const y=268+i*59;line(s,64,y,750,C.line,1);rect(s,64,y+11,36,36,C.pale);
    text(s,id,64,y+11,36,36,23,C.teal,true,FONT,'center');text(s,action,123,y+5,691,49,26,C.ink,true);
   });
   text(s,'그리고,\n확인할 근거 하나',858,301,358,77,28,C.teal,true);
   text(s,'무엇이 달라졌는지\n어떤 기록으로 볼까?',858,409,358,99,29,C.ink,true);
   text(s,'요청 · 문서 · 검사 · 원문 기록',858,539,358,34,21,C.sub);
   return s;
  },
  S93(p){
   const s=frame(p,'S93','Q&A와 교육 마무리','ACT 5 · 남은 질문과 마지막 한 문장',
    'BEAT-070–071 · 이 교육의 마무리',
    '목표 · 판단 · 검증 · 책임은 개발자에게 남는다.');
   text(s,'남은 질문은 무엇인가요?',64,217,1152,57,33,C.teal,true);
   line(s,64,334,1152,C.teal,2);
   text(s,'AI가 잘 일할 환경을\n설계한다.',64,371,1152,154,56,C.ink,true);
   text(s,'Chatbot  →  Prompt  →  Context  →  Harness  →  Loop',64,561,1152,38,28,C.sub);
   return s;
  }
 };
}
