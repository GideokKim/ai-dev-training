/** DEC-0091 reuse; DEC-0092 repeated human corrections and the missing feedback. */
import * as H from './helpers.mjs';

export function map108Id(id) {
 const n=Number(id.slice(1));
 if(n===72||n===73)throw new Error('Removed source slide requires an explicit replacement: '+id);
 return `S${String(n>=74?n+5:n).padStart(2,'0')}`;
}

export function renumber108Text(value) {
 return String(value).replace(/(?<![A-Za-z0-9_/])S\d{2,3}(?![\d_.])/g,map108Id);
}

export function migrate108Factories(previous) {
 const result={};
 for(const [id,factory] of Object.entries(previous)){
  if(['S72','S73'].includes(id))continue;
  result[map108Id(id)]=(p,helpers)=>{
   const s=factory(p,helpers);
   for(const shape of s.shapes.items){
    const original=String(shape.text);
    const ids=[...new Set(original.match(/(?<![A-Za-z0-9_/])S\d{2,3}(?![\d_.])/g)??[])];
    // Temporary tokens preserve rich text and prevent cascading ID replacements.
    ids.forEach((old,i)=>shape.text.replace(old,`@@MIGRATION${i}@@`));
    ids.forEach((old,i)=>shape.text.replace(`@@MIGRATION${i}@@`,map108Id(old)));
    if(ids.length)shape.name=renumber108Text(shape.name??'');
   }
   return s;
  };
 }
 return result;
}

export function harnessReuseFactories() {
 const {C,text,line,rect,FONT}=H;
 const connector=(s,x,y,w,h=0,color=C.teal,dash='solid',reverse=false)=>s.shapes.add({
  geometry:'connector',kind:'straight',position:{left:x,top:y,width:w,height:h},
  line:{fill:color,width:2.5,style:dash},[reverse?'head':'tail']:{type:'triangle',width:'sm',length:'sm'}
 });
 const stem=(s,x,y,h,color=C.teal)=>s.shapes.add({geometry:'line',position:{left:x,top:y,width:0,height:h},line:{fill:color,width:2.5}});
 const make=(p,id,title,eyebrow,source,boundary,type='TEACHING_MODEL')=>H.frame(p,id,title,eyebrow,source,boundary,type);
 return {
  S72(p){
   const s=make(p,'S72','만든 Harness를 다음 프로젝트의 기반으로','ACT 3 · 구축한 작업 체계의 재사용',
    '교육용 재사용 설계 예 · 조사·검증 방법과 도구 연결 방식을 축적',
    '다른 프로젝트로 옮겨 실행한 Demo는 아님 · 프로젝트별 적용 조건은 다음 장에서 연결');
   rect(s,64,244,466,266,C.white,C.teal,1.5);
   text(s,'검토해 둔 Harness 기반',88,263,418,48,33,C.teal,true);
   text(s,'조사 · 변경 · 검증 절차',88,341,418,44,28,C.ink,true);
   text(s,'도구 연결 · 결과 보고 방식',88,408,418,44,27,C.ink);
   line(s,530,377,126,C.teal,2.5);stem(s,656,281,204);
   [['프로젝트 A',243],['프로젝트 B',345],['프로젝트 C',447]].forEach(([label,y])=>{
    connector(s,656,y+38,122);
    rect(s,790,y,426,76,C.pale,C.line,1);
    text(s,label,810,y+15,386,46,31,C.teal,true);
   });
   text(s,'다음 프로젝트는, 만들어 둔 작업 체계에서 출발한다',64,552,1152,44,32,C.ink,true);
   return s;
  },
  S73(p){
   const s=make(p,'S73','공통 기반에 프로젝트 기준을 연결한다','ACT 3 · 재사용할 부분과 새로 연결할 부분',
    '교육용 Harness 적용 모델 · 공통 수행 틀 + 프로젝트별 기준',
    '전체 구성을 그대로 복사해도 작동한다는 보장이 아님 · 이식 결과·시간 절감은 미측정');
   text(s,'다시 쓰는 기반',64,213,512,46,33,C.teal,true);
   text(s,'프로젝트마다 연결',704,213,512,46,33,C.teal,true);
   rect(s,64,278,512,240,C.white,C.teal,1.5);
   rect(s,704,278,512,240,C.pale,C.line,1);
   ['조사·변경·검증의 수행 흐름','도구를 연결하는 방식','검증·보고에 남길 항목'].forEach((t,i)=>text(s,t,86,302+i*68,468,46,28,C.ink,i===0));
   ['목표 · 명세 · 프로젝트 Context','실제 빌드·테스트·측정 명령','허용 권한 · 실행 조건'].forEach((t,i)=>text(s,t,726,302+i*68,468,46,27,C.ink,i===0));
   text(s,'+',596,365,88,68,48,C.teal,true,FONT,'center');
   text(s,'기반은 재사용하고, 적용 조건은 프로젝트에 맞춘다',64,552,1152,44,32,C.ink,true);
   return s;
  },
  S74(p){
   const s=make(p,'S74','이번 성공만으로 다음 작업까지 확인되지는 않는다','ACT 3 · 재사용할 기반과 확인한 범위',
    'OBSERVED_PRODUCT · STATE-04-PERF의 성공 회수 / 오른쪽은 다음 작업에 대한 질문',
    '기록된 코드·입력·환경에서 확인한 결과 · 이후 모든 작업의 성공이나 실패를 관찰한 것은 아님','OBSERVED_PRODUCT / TEACHING_MODEL');
   text(s,'이번 작업에서 확인',64,220,480,44,31,C.teal,true);
   text(s,'다음 작업에서도 같을까?',736,220,480,44,31,C.teal,true);
   rect(s,64,286,480,218,C.white,C.teal,1.5);
   text(s,'밝기 통계 변경',88,310,432,49,34,C.ink,true);
   text(s,'명세 · 수행 방법 · 검증 근거',88,382,432,40,26,C.ink);
   text(s,'기록된 입력·코드·환경에서 확인',88,449,432,33,24,C.sub);
   connector(s,558,395,152);
   rect(s,736,286,480,218,C.white,C.line,1.5,'dash');
   text(s,'?',756,303,440,91,69,C.teal,true,FONT,'center');
   text(s,'다른 요구 · 입력 · 검증 범위',758,424,436,51,28,C.ink,true,FONT,'center');
   text(s,'잘 만든 기반도, 운영하며 새로 확인할 점이 생길 수 있다',64,550,1152,44,31,C.ink,true);
   return s;
  },
  S75(p){
   const s=make(p,'S75','작업 중 사람이 보정할 일이 생긴다면?','ACT 3 · CONCEPTUAL / 운영하며 발견하는 확인의 빈틈',
    '교육용 상황도 · 관련 동작의 확인이 더 필요하다는 가정',
    '실제 graypipe의 실패·누락 이력이 아님 · 원인은 아직 미확인 · 다음 장의 보정도 실행 결과가 아님','CONCEPTUAL');
   text(s,'이번 결과를 검토하다가, 추가로 확인할 부분을 찾았다면',64,189,1152,43,30,C.ink,true);
   const stages=[['Agent 작업','변경한 부분 확인'],['사람의 검토','관련 동작은?'],['추가 요청','관련 동작도\n확인해 주세요.']];
   stages.forEach(([title,body],i)=>{
    const x=64+i*400;rect(s,x,290,352,208,i===2?C.amber:C.white,i===2?C.warn:C.line,1.5,i===2?'dash':'solid');
    text(s,title,x+20,310,312,44,30,i===2?C.warn:C.teal,true);
    text(s,body,x+20,377,312,92,29,C.ink,i===2);
    if(i<2)connector(s,x+356,394,38);
   });
   text(s,'이 보정은 다음 작업에도 필요한 내용일까?',64,550,1152,44,32,C.teal,true);
   return s;
  },
  S76(p){
   const s=make(p,'S76','이번 요청은 보정해도, 공통 지침은 그대로다','ACT 3 · CONCEPTUAL / 현재 작업의 보정과 공통 수행 체계',
    '앞 장의 교육용 상황을 이어서 비교 · 실제 요청·지침 변경 기록이 아님',
    '이번 작업 범위를 보정하는 것과 공통 체계를 바꾸는 것은 별개 · 지침이 원인이라고 확정하지 않음','CONCEPTUAL');
   text(s,'이번 작업의 요청',64,222,512,45,32,C.teal,true);
   text(s,'다음에도 읽을 공통 지침',704,222,512,45,32,C.warn,true);
   rect(s,64,289,512,216,C.white,C.teal,1.5);
   text(s,'관련 동작도\n확인해 주세요.',88,315,464,91,35,C.ink,true);
   text(s,'현재 작업의 검증 범위를 보정',88,444,464,37,26,C.teal,true);
   rect(s,704,289,512,216,C.white,C.warn,1.5,'dash');
   text(s,'이전 수행 방법 그대로',728,344,464,55,33,C.ink,true);
   text(s,'공통 지침은 따로 갱신하지 않은 가정',728,444,464,37,25,C.sub);
   text(s,'대화에서 바로잡은 내용이, 공통 체계에 자동 반영되지는 않는다',64,550,1152,44,30,C.ink,true);
   return s;
  },
  S77(p){
   const s=make(p,'S77','다음 작업에서도 같은 보정이 반복된다면?','ACT 3 · CONCEPTUAL / 다음 작업에 돌아오지 않는 경험',
    '교육용 반복 도식 · 작업 A/B/C는 실제 Trial이나 Subagent 실행이 아님',
    '반복 횟수·토큰·시간·성공률을 측정한 결과가 아님 · 공통 지침을 갱신하지 않은 상황의 설명','CONCEPTUAL');
   rect(s,64,204,1152,61,C.white,C.line,1);
   text(s,'다음 작업이 읽는 공통 수행 지침은 그대로',84,214,1112,42,29,C.sub,true);
   ['작업 A','다음 작업 B','다음 작업 C'].forEach((label,i)=>{
    const x=64+i*400;
    rect(s,x,305,352,71,C.white,C.teal,1.5);text(s,label,x+18,321,316,40,30,C.teal,true);
    connector(s,x+176,381,0,30);
    rect(s,x,420,352,102,C.amber,C.warn,1.5,'dash');
    text(s,'사람: 관련 동작도\n확인해 주세요.',x+18,435,316,74,27,C.ink,true);
    if(i<2)connector(s,x+356,341,38);
   });
   text(s,'사람은 같은 보정을 반복하고, 다음 작업의 체계는 그대로다',64,553,1152,43,31,C.ink,true);
   return s;
  },
  S78(p){
   const s=make(p,'S78','반복 보정을 개선으로 잇는 기록','ACT 3 · 다음 작업의 체계를 검토할 근거',
    'TEACHING_MODEL · 수행 기록과 사람의 보정을 연결하는 기록 틀',
    '원인·변경 대상은 아직 미확정 · 실제 갱신·재평가 결과나 자동 학습을 보여주는 도식이 아님');
   text(s,'보정한 문장만 남기면, 어디를 고칠지 판단하기 어렵다',64,184,1152,44,30,C.ink,true);
   rect(s,64,258,656,273,C.white,C.teal,1.5);
   const rows=[['기준과 지침','무엇을 지키고 어떻게 일해야 했나?'],['실제 수행','어디까지 실행·확인했나?'],['사람의 보정','무엇을 추가로 확인하게 했나?']];
   rows.forEach(([label,body],i)=>{
    const y=273+i*80;if(i)line(s,86,y,612,C.line,1);
    text(s,label,86,y+8,176,55,27,C.teal,true);
    text(s,body,280,y+8,416,55,24,C.ink);
   });
   connector(s,730,394,112);
   text(s,'원인은 무엇일까?',864,278,352,48,30,C.teal,true);
   text(s,'어디를 바꿀까?',864,366,352,48,30,C.teal,true);
   text(s,'무엇으로 다시 확인할까?',864,454,352,48,28,C.teal,true);
   text(s,'기록을 근거로, 다음 작업에 쓸 체계를 검토해야 한다',64,552,1152,44,32,C.ink,true);
   return s;
  },
  S79(p){
   const s=make(p,'S79','같은 보정을 되풀이하지 않으려면?','ACT 3 · 내 업무의 반복 보정에서 Loop의 필요로',
    '개인 성찰 · 공유는 선택 · 앞의 반복 상황은 교육용 가정',
    '어떤 원인·수정 대상·담당도 미리 확정하지 않음 · ACT 4에서 원인 확인·변경·재평가를 다룸');
   const choices=[['다시 알려주는 정보','현재 기준 · 참고 위치'],['다시 지시하는 절차','조사 · 변경 · 보고'],['빠뜨린 확인 기준','관련 동작 · 검증 범위']];
   choices.forEach(([title,body],i)=>{
    const x=64+i*400;rect(s,x,213,352,102,C.white,C.line,1);
    text(s,title,x+18,225,316,35,28,C.teal,true);text(s,body,x+18,270,316,34,24,C.ink);
    stem(s,x+176,315,33);
   });
   line(s,240,348,800,C.teal,2.5);connector(s,640,348,0,23);
   rect(s,480,378,320,55,C.pale,C.teal,1.5);text(s,'반복 보정 하나 선택',496,385,288,40,28,C.teal,true,FONT,'center');
   stem(s,640,433,19);line(s,336,452,608,C.teal,2.5);
   [336,944].forEach(x=>connector(s,x,452,0,19));
   [[64,'어떤 근거·출처를 볼까?'],[672,'누가 검토하고 다시 확인할까?']].forEach(([x,label])=>{
    rect(s,x,479,544,66,C.white,C.line,1);text(s,label,x+16,489,512,46,28,C.ink,true);
   });
   text(s,'다음 ACT: 기록으로 원인을 확인하고, 체계를 고친 뒤 다시 평가한다',64,565,1152,37,28,C.teal,true);
   return s;
  }
 };
}
