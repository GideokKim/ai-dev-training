/** DEC-0080: maintenance ownership, diagnosis before change and bounded handoff. */
import * as H from './helpers.mjs';

export function loadAct34HandoffSlides(previous) {
 const {C,text,line,rect,arrow,FONT}=H;
 const original={...previous};
 const make=(p,id,title,eyebrow,source,boundary,type='CONCEPTUAL')=>{
  const s=H.frame(p,id,title,eyebrow,source,boundary,type);
  s.shapes.items.at(-1).position={left:64,top:650,width:1152,height:30};
  return s;
 };
 const replace=(s,from,to)=>{
  const q=s.shapes.items.find(q=>q.name===from.slice(0,60));
  if(!q)throw new Error('Missing retained text: '+from);
  q.text=to;q.name=to.slice(0,60);return q;
 };
 const connector=(s,x,y,w,h,up=false)=>s.shapes.add({geometry:'connector',kind:'straight',position:{left:x,top:y,width:w,height:h},line:{fill:C.teal,width:2.5},[up?'head':'tail']:{type:'triangle',width:'sm',length:'sm'}});
 return {
  S64(p){
   const s=original.S64(p,H);
   replace(s,'ACT 3 · 실제 작업의 구성에서 전체 작업 환경으로','ACT 3 · 구성에 실행 조건과 검토 책임을 연결');
   const reviewer=replace(s,'사람이 결과 검토','사람이 근거·결과 검토');
   reviewer.text.style={...reviewer.text.style,bold:true,color:C.teal};
   return s;
  },
  S67(p){
   const s=original.S67(p,H);
   replace(s,'다음: 프로젝트가 바뀌면 어떻게 점검할까?','위치와 담당을 생각했다면, 다시 확인할 때는?');
   return s;
  },
  S68(p){
   const s=make(p,'S68','확인한 성공을 유지하려면','ACT 4 · 성공한 작업 환경의 유지와 개선',
    'STATE-04-PERF · 밝기 통계의 실제 성공을 기준점으로 보존',
    '기록된 입력·코드·환경의 결과 · 다음 가상 사례는 별개이며 실제 실패 이력이 아님','OBSERVED_PRODUCT');
   text(s,'밝기 통계 작업은 검증된 결과로 마쳤다',64,205,1152,46,33,C.teal,true);
   [['동작 명세','출력 6항목 동일'],['테스트','전체 11/11 통과'],['성능 측정','같은 조건 · 결과 guard']].forEach(([title,body],i)=>{
    const x=64+i*400;line(s,x,280,352,C.teal,3);
    text(s,title,x,297,352,40,29,C.ink,true);text(s,body,x,350,352,42,26,C.sub);
   });
   line(s,64,432,1152);
   text(s,'이제 살펴볼 문제: 기준과 절차를 계속 맞게 유지하기',64,454,1152,44,31,C.ink,true);
   text(s,'어떤 변화가 생기면, 담당자가 다시 확인해야 할까?',64,526,1152,48,32,C.teal,true);
   return s;
  },
  S69(p){
   const s=make(p,'S69','처음에는 기준과 재사용 절차가 맞았다','ACT 4 · CONCEPTUAL / 별도 가상 사례의 출발점',
    'DEMO-04A · 프로젝트 기준과 재사용 지침이 일치한다는 가정',
    '실제 graypipe 이력·Agent 실행·테스트 결과 아님 · 앞의 Skill과 같은 역할이며 같은 파일이 아님');
   text(s,'Workflow = 재사용할 수행 절차 · 앞에서는 Skill로 관리',64,183,1152,40,27,C.teal,true);
   const cols=[[64,'프로젝트의 현재 기준','프로젝트 문서에서 확인'],[724,'Workflow · 재사용 지침','다음 작업에서 다시 읽음']];
   cols.forEach(([x,title,sub])=>{
    text(s,title,x,275,492,44,29,C.teal,true);line(s,x,334,492,C.teal,3);
    text(s,'단위 테스트',x,361,492,67,40,C.ink,true);text(s,sub,x,449,492,38,26,C.sub);
   });
   text(s,'=',598,361,84,67,40,C.teal,true,FONT,'center');
   text(s,'가정: 현재 기준에 맞춰 검토해 둔 절차',64,536,1152,42,30,C.ink,true);
   return s;
  },
  S70(p){
   const s=original.S70(p,H);
   replace(s,'프로젝트의 기준이 바뀌었을 때, 재사용 지침도 함께 바뀌었을까?','검토·갱신 담당은 이 차이를 언제 확인할까?');
   return s;
  },
  S71(p){
   const s=make(p,'S71','이번 요청과 다음 작업의 지침','ACT 4 · CONCEPTUAL / 요청 보정과 지침 유지',
    'DEMO-04A · 이번 요청을 보정하는 경우와 남아 있는 재사용 지침',
    '가능한 대응의 비교 · 실제 실행·복구 성공·검증 누락을 관찰한 결과 아님');
   text(s,'이번 요청에 통합 테스트를 더한다면?',64,190,1152,44,31,C.ink,true);
   text(s,'이번 요청',64,269,512,40,29,C.teal,true);
   rect(s,64,326,512,139,C.white,C.teal,1.5);
   text(s,'통합 테스트도 확인해 줘.',86,354,468,60,31,C.ink,true);
   text(s,'이번 Task의 범위를 보정',64,484,512,40,27,C.sub);
   text(s,'다음 작업의 Workflow',704,269,512,40,29,C.warn,true);
   rect(s,704,326,512,139,C.white,C.warn,1.5,'dash');
   text(s,'여전히 단위 테스트만 지시',726,354,468,60,30,C.ink,true);
   text(s,'재사용 지침은 별도 검토 필요',704,484,512,40,27,C.sub);
   text(s,'원인을 확인한 뒤, 다음 작업이 읽을 출처를 검토한다',64,550,1152,40,29,C.teal,true);
   return s;
  },
  S72(p){
   const s=make(p,'S72','원인을 고르기 전에 확인할 기록','ACT 4 · CONCEPTUAL / 조사할 대상과 근거',
    'DEMO-11 · 실제 문제라면 확인할 기록을 설계한 교육용 도식',
    '아래는 확인 대상 · 실행 기록·실패 결과를 만든 것이 아니며 한 원인을 미리 확정하지 않음');
   text(s,'검증이 충분한지\n무엇으로 판단할까?',64,266,410,106,35,C.ink,true);
   text(s,'증상에서 곧바로\n수정 대상으로 가지 않는다',64,422,410,82,27,C.sub);
   const rows=[['프로젝트 기준','현재 문서·명세'],['재사용 절차','실제로 읽은 지침'],['환경 · 권한','명령·허용 범위·실행 조건'],['제품 코드','변경 내용·검사 결과']];
   rows.forEach(([label,body],i)=>{const y=235+i*80;line(s,540,y,676,C.warn,1,'dash');text(s,label,540,y+12,220,46,27,C.warn,true);text(s,body,790,y+12,426,46,26,C.ink);});
   text(s,'실제 실행 경로와 현재 기준을 먼저 대조한다',64,566,1152,34,29,C.teal,true);
   return s;
  },
  S73(p){
   const s=make(p,'S73','주어진 정보와 원인 가설을 나눈다','ACT 4 · CONCEPTUAL / 사실과 원인 판단의 구분',
    'DEMO-04A · DEMO-11 · 구성된 사례의 전제와 확인할 가설',
    '가상 설정은 실제 Trial 관찰이 아님 · 실제 실행 경로와 참조 지침을 확인한 결과도 없음');
   text(s,'가상 사례에 주어진 정보',64,246,512,44,29,C.teal,true);
   text(s,'추가로 확인할 원인 가설',724,246,492,44,29,C.warn,true);
   line(s,64,310,492,C.teal,3);line(s,724,310,492,C.warn,3,'dash');
   text(s,'현재 기준: 단위 + 통합\n재사용 지침: 단위만',64,347,492,115,33,C.ink,true);
   text(s,'오래된 지침이\n원인일 수 있다',724,347,492,115,33,C.ink,true);
   text(s,'두 지침의 차이만으로, 실제 작업의 원인이 확정되지는 않는다',64,525,1152,68,29,C.teal,true);
   return s;
  },
  S74(p){
   const s=make(p,'S74','확인한 원인에 맞춰 변경 대상을 고른다','ACT 4 · CONCEPTUAL / 원인 확인 뒤의 선택',
    'DEMO-04A · 원인이 확인됐다고 가정한 세 대응의 범위 비교',
    'Workflow 원인이라는 조건 안의 판단 · 일반 정답·실제 Product 변경·새 실행 결과 아님');
   text(s,'가정: 재사용 Workflow가 원인으로 확인됐다면',64,186,1152,42,29,C.warn,true);
   const rows=[['이번 요청 보정','현재 Task의 요청 범위만 넓힘'],['전역 규칙 추가','다른 지침과 중복·충돌 가능'],['원인인 Workflow 갱신','다음 작업이 읽는 절차를 변경']];
   rows.forEach(([label,body],i)=>{const y=273+i*85;if(i===2)rect(s,64,y,1152,75,C.pale);line(s,64,y,1152);text(s,label,80,y+13,390,48,28,C.teal,true);text(s,body,500,y+13,696,48,28,C.ink);});
   text(s,'검토 담당: 확인한 원인과 변경할 위치가 맞는지 판단',64,559,1152,38,28,C.teal,true);
   return s;
  },
  S75(p){
   const s=make(p,'S75','확인된 범위만 검토하고 갱신한다','ACT 4 · CONCEPTUAL / 유지 책임과 최소 변경',
    'DEMO-04A · Workflow 원인이 확인됐다는 가정에서의 변경 설계',
    '역할의 교육용 예 · 실제 담당 배정·지침 수정·재평가 결과 아님 · 관련 없는 규칙은 유지');
   text(s,'원인이 뒷받침하는 지침을 갱신한다',64,188,1152,42,30,C.warn,true);
   text(s,'기존 재사용 지침',64,275,492,37,28,C.sub,true);line(s,64,326,492,C.warn,2,'dash');
   text(s,'단위 테스트 확인',64,347,492,60,34,C.ink,true);
   text(s,'갱신할 지침',724,275,492,37,28,C.teal,true);line(s,724,326,492,C.teal,3);
   text(s,'단위 + 통합 테스트 확인',724,347,492,60,33,C.ink,true);connector(s,584,376,100,0);
   const roles=[['갱신 담당','확인된 지침 수정'],['검토 담당','현재 기준·변경 범위 확인'],['다음 확인','같은 작업·대표 작업 평가']];
   roles.forEach(([label,body],i)=>{const x=64+i*400;line(s,x,457,352,C.teal,2);text(s,label,x,469,352,36,26,C.teal,true);text(s,body,x,515,352,36,25,C.ink);});
   text(s,'검토·갱신은 같은 사람이 맡을 수도 있다',64,570,1152,30,24,C.sub);
   return s;
  },
  S79(p){
   const s=make(p,'S79','관찰을 시스템 개선으로 잇는 Loop','ACT 4 · 이 교육의 Loop 운영 모델',
    'DEC-0023 · 가상 사례를 5단계로 정리한 교육용 모델',
    '실제 실행·수정·평가 결과 없음 · 모델의 자동 학습이나 관찰된 Product Loop가 아님','TEACHING_MODEL');
   text(s,'실행·관찰·원인 판단을 거쳐, 변경과 재평가로 연결한다',64,183,1152,40,28,C.sub);
   const steps=[
    ['실행','무엇을\n했나?','가상 작업의\n실행 경로 확인'],
    ['관찰','무엇이\n보였나?','현재 기준과\n읽은 지침 대조'],
    ['원인 판단','무슨 근거로\n판단하나?','오래된 지침이\n원인인지 확인'],
    ['시스템 변경','어디를\n바꾸나?','확인됐다면\n사람이 지침 갱신'],
    ['재평가','다른 작업도\n괜찮나?','같은 작업과\n대표 작업 평가']
   ];
   steps.forEach(([label,question,example],i)=>{const x=64+i*236;text(s,String(i+1).padStart(2,'0'),x,250,208,30,23,C.teal,true,H.CODE);line(s,x,296,208,C.teal,3);text(s,label,x,311,208,38,27,C.ink,true);text(s,question,x,365,208,70,26,C.sub);rect(s,x,452,208,69,C.pale);text(s,example,x+10,458,188,57,23,C.ink,true);if(i<4)connector(s,x+214,330,16,0);});
   s.shapes.add({geometry:'line',position:{left:1112,top:524,width:0,height:27},line:{fill:C.teal,width:2.5}});
   line(s,168,551,944,C.teal,2.5);connector(s,168,524,0,27,true);
   text(s,'다음 작업에서 다시 확인',64,566,1152,34,28,C.teal,true);
   return s;
  },
  S80(p){
   const s=make(p,'S80','평가에서 놓친 실행 조건','ACT 4 · OBSERVED META / 평가·보고의 빈틈',
    'TRIAL-006 · 과거 Codex CLI 성능 조사 기록의 재구성',
    '앞의 가상 Workflow와 별개 사건 · 실제 변경 대상은 평가·보고 기준이며 제품 코드·Demo Skill이 아님','OBSERVED_META');
   text(s,'앞서 본 환경 관찰을, 평가·보고 관점으로 돌아본다',64,188,1152,44,29,C.teal,true);
   const steps=[['관찰된 조건','전역 Skill 포함\n시작 단계 경고'],['평가의 빈틈','Prompt만의 효과는\n분리하지 못함'],['후속 질문','결과 확인과 원인 판단을\n어떻게 나눠 기록할까?']];
   steps.forEach(([label,body],i)=>{const x=64+i*400;text(s,String(i+1).padStart(2,'0'),x,287,352,32,23,C.sub,true,H.CODE);text(s,label,x,334,352,41,29,C.ink,true);line(s,x,393,352,C.teal,3);text(s,body,x,418,352,100,28,i===1?C.warn:C.ink,i===1);if(i<2)connector(s,x+360,370,30,0);});
   text(s,'같은 사건에서, 이번에는 평가 기준을 바꿀 필요를 살핀다',64,555,1152,41,29,C.teal,true);
   return s;
  }
 };
}
