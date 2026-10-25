/** Apply DEC-0083: reassess previously justified scaffolding as conditions change. */
import * as H from './helpers.mjs';

export function loadAct5ReassessmentSlides() {
 const {C,text,line,rect}=H;
 const arrow=(s,x,y,w=32,h=0)=>s.shapes.add({geometry:'connector',kind:'straight',
  position:{left:x,top:y,width:w,height:h},line:{fill:C.teal,width:2.5},
  tail:{type:'triangle',width:'sm',length:'sm'}});
 const stroke=(s,x,y,w,h)=>s.shapes.add({geometry:'connector',kind:'straight',
  position:{left:x,top:y,width:w,height:h},line:{fill:C.teal,width:2.5}});
 const frame=(p,id,title,eyebrow,source,boundary)=>H.frame(p,id,title,eyebrow,source,boundary);
 return {
  S91(p){
   const s=frame(p,'S91','모델·플랫폼이 바뀌면 Harness도 다시 본다',
    'ACT 5 · 재평가 1/3 · 공개 사례 + 교육용 구조 도식',
    'SRC-0236 · Anthropic, 2026-10-22 · 일부 기업 Agent의 통합 사례를 각색',
    '우리 Demo의 관찰·효과 측정이 아님 · 새 모델이면 무조건 통합한다는 뜻은 아님');
   text(s,'그때 필요했던 보조 장치가, 지금도 필요할까?',64,185,1152,44,31,C.teal,true);
   const lx=64,rx=716;
   line(s,lx,271,500,C.line,2);line(s,rx,271,500,C.teal,3);
   text(s,'이전 구성',lx,289,500,42,29,C.sub,true);
   text(s,'통합을 검토할 후보',rx,289,500,42,29,C.teal,true);
   rect(s,80,365,468,65,C.white,C.line,1);
   text(s,'요청을 조율하는 Agent',96,376,436,42,29,C.ink,true,H.FONT,'center');
   stroke(s,314,433,0,24);stroke(s,140,457,348,0);
   ['Router','Planner','담당 Subagent'].forEach((v,i)=>{
    const x=64+i*174;arrow(s,x+76,457,0,17);
    rect(s,x,479,152,67,C.white,C.line,1);text(s,v,x+5,490,142,43,22,C.ink,true,H.FONT,'center');
   });
   arrow(s,597,419,71);
   rect(s,736,356,460,94,C.pale);
   text(s,'하나의 Agent Loop',752,380,428,47,33,C.teal,true,H.FONT,'center');
   arrow(s,966,454,0,27);
   text(s,'필요한 Skill · Tool을 사용',736,499,460,48,28,C.ink,true,H.FONT,'center');
   text(s,'모델이 맡을 수 있는 범위·플랫폼 제공 기능이 달라졌다면, 기존 역할을 재평가한다',64,563,1152,37,26,C.ink,true);
   return s;
  },
  S92(p){
   const s=frame(p,'S92','무엇을 남기고, 무엇을 덜어낼까?',
    'ACT 5 · 재평가 2/3 · 이 교육의 판단 기준',
    'TEACHING MODEL · BEAT-057 / 061 / 069 · CLM-0022 · DEC-0083',
    '통합·제거는 후보 판단 · 안전·권한·명세·검증 요구를 없애는 처방이 아님');
   text(s,'없애기 전에, 각 요소가 맡은 이유부터 확인한다',64,185,1152,44,31,C.teal,true);
   const columns=[
    ['유지','목표 · 명세\n검증 기준','필요한 요구는 계속 보존',C.teal],
    ['통합','겹치는 지침 · 역할','한 출처 · 명확한 책임으로',C.teal],
    ['제거 후보','효용이 사라진\n우회 절차','현재도 필요한지 근거 확인',C.warn]
   ];
   columns.forEach(([name,body,caption,color],i)=>{
    const x=64+i*400;line(s,x,277,352,color,3);
    text(s,name,x,298,352,52,36,color,true);
    text(s,body,x,382,352,96,29,C.ink,true);
    text(s,caption,x,510,352,38,25,C.sub);
   });
   text(s,'독립 병렬 조사·권한 분리가 필요하다면, Subagent를 유지할 수 있다',64,565,1152,33,26,C.ink,true);
   return s;
  },
  S93(p){
   const s=frame(p,'S93','덜어낸 뒤에도 필요한 일을 하는가?',
    'ACT 5 · 재평가 3/3 · 평가 설계 / 실제 실행 결과 아님',
    'TEACHING MODEL · SRC-0236의 평가 권고를 각색 · CLM-0040 · DEC-0083',
    '새 비교 실험·측정 결과 없음 · 시간·비용만으로 채택하지 않음');
   text(s,'같은 대표 작업에서, 결과와 회귀부터 확인한다',64,185,1152,44,31,C.teal,true);
   rect(s,64,355,202,98,C.white,C.line,1);
   text(s,'같은 대표\n작업·입력',80,366,170,75,28,C.ink,true,H.FONT,'center');
   arrow(s,276,404,28);stroke(s,304,329,0,152);stroke(s,781,329,0,152);
   arrow(s,781,402,12);
   const branches=[['기존 구성',290,C.white],['통합·제거 후보',442,C.pale]];
   branches.forEach(([label,y,color])=>{
    arrow(s,304,y+39,51);rect(s,365,y,346,78,color,C.line,1);
    text(s,label,381,y+13,314,52,30,C.ink,true,H.FONT,'center');
    arrow(s,720,y+39,61);
   });
   text(s,'같은 기준으로 비교',803,272,413,40,27,C.teal,true);
   [['결과 · 회귀','명세와 기존 동작을 지키나?'],['시간 · 비용','기록으로 달라진 점을 보나?'],['남은 위험','놓친 작업·권한 조건은 없나?']].forEach(([label,q],i)=>{
    const y=327+i*70;line(s,803,y,413,C.line,1);
    text(s,label,803,y+5,413,31,25,C.teal,true);text(s,q,803,y+37,413,31,23,C.ink);
   });
   text(s,'확인한 범위만 채택한다',64,563,548,38,29,C.teal,true);
   text(s,'나빠지면 되돌리고, 이유를 남긴다',665,563,551,38,28,C.ink,true);
   return s;
  }
 };
}
