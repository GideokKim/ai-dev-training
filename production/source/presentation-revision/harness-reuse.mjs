/** DEC-0091: reusable foundations and a paced execution-condition explanation. */
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

export function harnessReuseFactories(current) {
 const {C,text,line,rect,FONT}=H;
 const connector=(s,x,y,w,h=0,color=C.teal,dash='solid',reverse=false)=>s.shapes.add({
  geometry:'connector',kind:'straight',position:{left:x,top:y,width:w,height:h},
  line:{fill:color,width:2.5,style:dash},[reverse?'head':'tail']:{type:'triangle',width:'sm',length:'sm'}
 });
 const stem=(s,x,y,h,color=C.teal)=>s.shapes.add({geometry:'line',position:{left:x,top:y,width:0,height:h},line:{fill:color,width:2.5}});
 const make=(p,id,title,eyebrow,source,boundary,type='TEACHING_MODEL')=>H.frame(p,id,title,eyebrow,source,boundary,type);
 const replace=(s,from,to)=>{
  const shape=s.shapes.items.find(q=>String(q.text)===from);
  if(!shape)throw new Error('Missing reflection text: '+from);
  shape.text=to;shape.name=to.slice(0,60);
 };
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
   const s=make(p,'S74','임시 폴더 오류의 원인은 실행 권한이었다','ACT 3 · 앞의 실제 조사에서 실행 조건을 다시 보기',
    'OBSERVED_PRODUCT · TRIAL-001 / Codex CLI 0.154.0 · 기록 재구성',
    'Crop 결함과 별개인 실행 오류 · Agent가 권한 제한을 해결한 것은 아님','OBSERVED_PRODUCT');
   text(s,'Crop 결함과 별개로, 다른 테스트는 실행 환경에 막혔다',64,192,1152,42,29,C.sub);
   const stages=[['테스트 실행','임시 폴더가 필요',C.teal],['임시 폴더 생성','실행 환경에 생성 요청',C.teal],['읽기 전용 권한','생성할 수 없음',C.red]];
   stages.forEach(([title,body,color],i)=>{
    const x=64+i*400;rect(s,x,298,352,172,i===2?C.redPale:C.white,color,1.5);
    text(s,title,x+20,320,312,46,31,color,true);
    text(s,body,x+20,394,312,42,25,C.ink);
    if(i<2)connector(s,x+356,384,38);
   });
   text(s,'코드를 볼 수 있어도, 실행할 권한은 따로 필요하다',64,533,1152,50,33,C.ink,true);
   return s;
  },
  S75(p){
   const s=make(p,'S75','Agent의 실행 조건은 어디에서 오는가?','ACT 3 · 새 프로젝트에 연결할 실행 조건',
    '교육용 관계도 · Repository 안의 정보와 밖에서 적용되는 조건',
    '정확한 지침 로딩 순서·전체 설정 목록이 아님 · 현재 제품·계정·권한은 별도 확인');
   rect(s,64,265,356,214,C.white,C.line,1.5);
   text(s,'Repository 안',86,284,312,44,31,C.teal,true);
   text(s,'코드 · AGENTS.md\n프로젝트 문서 · Skill',86,355,312,92,27,C.ink);
   connector(s,420,372,100);
   rect(s,528,304,224,136,C.white,C.teal,1.5);
   text(s,'Agent',548,322,184,43,34,C.teal,true,FONT,'center');
   text(s,'작업 실행',548,380,184,40,28,C.ink,true,FONT,'center');
   connector(s,760,372,104,0,C.teal,'dash',true);
   text(s,'적용 확인',760,315,104,32,23,C.teal,true,FONT,'center');
   rect(s,872,265,344,214,C.pale,C.line,1.5);
   text(s,'Repository 밖',894,284,300,44,31,C.teal,true);
   text(s,'전역 지침 · Skills\n모델·설정 · 허용 권한',894,355,300,92,26,C.ink);
   text(s,'저장소를 옮긴 뒤에도, 적용되는 조건을 확인한다',64,541,1152,46,32,C.ink,true);
   return s;
  },
  S76(p){
   const s=make(p,'S76','실제 성능 조사에도 저장소 밖 지침이 들어왔다','ACT 3 · 실제 기록에서 확인한 외부 조건',
    'OBSERVED_META · TRIAL-006 / Codex CLI 0.154.0 · 기록 재구성',
    '전역 Skill의 관여는 관찰 · 개별 성능 효과·현재 Desktop 재현·전체 환경 감사는 미입증','OBSERVED_META');
   text(s,'이미지 크기 변경(Resize) 성능 조사 당시',64,192,1152,42,29,C.sub);
   rect(s,64,270,480,203,C.white,C.teal,1.5);
   text(s,'함께 포함된 전역 Skill',86,293,436,46,31,C.teal,true);
   text(s,'성능 조사 · 완료 검증 지침',86,374,436,56,28,C.ink);
   connector(s,554,369,140);
   rect(s,704,270,512,203,C.pale,C.teal,1.5);
   text(s,'실제 작업 기록',726,293,468,46,31,C.teal,true);
   text(s,'평가 상태 작성\n추가 동작 검증',726,360,468,90,30,C.ink,true);
   text(s,'별도 시작 관찰',64,533,236,40,27,C.teal,true);
   text(s,'자동 실행 설정 · 외부 도구 연결 경고',324,533,892,40,28,C.ink);
   return s;
  },
  S77(p){
   const s=make(p,'S77','시작 경고와 실제 사용은 구분해서 확인한다','ACT 3 · 경고·호출·결과가 알려 주는 범위',
    'OBSERVED_META · TRIAL-006의 시작 기록과 실제 작업 기록을 구분',
    'Hook 실행·소스 변경은 미입증 · MCP 작업 호출 없음 · 관찰한 Skill 관여는 별도 근거로 보존','OBSERVED_META');
   text(s,'시작 경고에서 확인',64,226,512,46,32,C.warn,true);
   text(s,'작업 기록에서 확인',704,226,512,46,32,C.teal,true);
   rect(s,64,298,512,208,C.white,C.warn,1.5,'dash');
   rect(s,704,298,512,208,C.white,C.teal,1.5);
   text(s,'자동 실행·외부 도구 연결 경고',86,320,468,43,27,C.ink,true);
   text(s,'경고만으로 실제 실행은 알 수 없음\n외부 도구를 부른 작업 기록은 없음',86,394,468,84,25,C.ink);
   text(s,'전역 Skill의 작업 관여',726,320,468,43,29,C.ink,true);
   text(s,'평가 상태 작성 · 추가 검증\n각각의 작업 기록으로 확인',726,394,468,84,27,C.ink);
   text(s,'실제 사용은, 해당 호출과 작업 결과로 확인한다',64,548,1152,44,32,C.ink,true);
   return s;
  },
  S78(p){
   const s=make(p,'S78','결과와 실행 조건을 함께 남긴다','ACT 3 · 다음 프로젝트에서도 확인할 출발점',
    '교육용 작업 기록 틀 · 실제 보고서 Screenshot이나 새 Trial 결과가 아님',
    '확인한 조건만 기록 · 미확인 항목은 남김 · 실제 평가·보고 기준 개선 과정은 ACT 4에서 확인');
   rect(s,64,238,1152,288,C.white,C.teal,1.5);
   const rows=[['작업','무엇을 바꾸고, 무엇을 지켰나?'],['실행 조건','어떤 지침·모델·권한이 적용됐나?'],['확인 근거','테스트·측정 결과와 남은 미확인은?']];
   rows.forEach(([label,body],i)=>{
    const y=252+i*90;if(i)line(s,86,y,1108,C.line,1);
    text(s,label,88,y+13,230,56,30,C.teal,true);
    text(s,body,340,y+13,852,56,30,C.ink,i===2);
   });
   text(s,'재사용할 기반과 함께, 어디까지 확인했는지도 남긴다',64,550,1152,44,32,C.ink,true);
   return s;
  },
  S79(p,helpers){
   const s=current.S79(p,helpers);
   replace(s,'ACT 3 · 반복을 고르고 유지할 책임을 정하기','ACT 3 · 다음 프로젝트에 남길 기반과 유지 책임');
   replace(s,'반복 정보','재사용할 안내');
   replace(s,'명세 · 프로젝트 안내','참고 위치 · 적용 범위');
   replace(s,'반복 절차','재사용할 절차');
   replace(s,'검증 근거','확인할 기준');
   replace(s,'테스트 · 측정 조건','테스트 · 기록 형식');
   replace(s,'어디에 둘까?','어디에 두고 연결할까?');
   replace(s,'위치와 담당을 생각했다면, 다시 확인할 때는?','다음 프로젝트에도 맞는지, 언제 다시 볼까?');
   return s;
  }
 };
}
