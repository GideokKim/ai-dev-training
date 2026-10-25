/** DEC-0084: separate the crop finding, evidence, execution limit and collection roles. */
import fs from 'node:fs/promises';
import path from 'node:path';
import * as H from './helpers.mjs';

export async function loadAct0ContextExpansionSlides(root){
 const illustration=new Uint8Array(await fs.readFile(path.join(root,'prototype/image-illustration-pilot/assets/S07.png')));
 const {C,text,line,rect,FONT,CODE}=H;
 const connector=(s,x,y,w,h=0,arrow=false,both=false)=>s.shapes.add({
  geometry:'connector',kind:'straight',position:{left:x,top:y,width:w,height:h},
  line:{fill:C.teal,width:2.5},
  ...(arrow?{tail:{type:'triangle',width:'sm',length:'sm'}}:{}),
  ...(both?{head:{type:'triangle',width:'sm',length:'sm'}}:{})
 });
 const frame=(p,id,title,source,boundary,type='OBSERVED_PRODUCT')=>H.frame(
  p,id,title,'ACT 0 · '+({S05:'Crop 결과',S06:'원인을 설명한 근거',S07:'별도 실행 환경 오류',
  S08:'조사에 필요한 Context',S09:'사람의 자료 선택·전달',S10:'Agent의 허용된 조사'}[id]),source,boundary,type);
 const cells=(s,values,x,y,bad=false)=>values.forEach((value,i)=>{
  const extra=bad&&i===2;rect(s,x+i*95,y,82,75,extra?C.redPale:C.white,extra?C.red:C.teal,1.5);
  text(s,String(value),x+i*95,y+7,82,61,38,extra?C.red:C.ink,true,FONT,'center');
 });
 const records=['실패 테스트','Crop 명세','구현·호출 관계','실행 로그','읽기·쓰기 권한'];
 const collection=(p,id,title,isAgent)=>{
  const s=frame(p,id,title,
   isAgent?'TRIAL-001 단일 CLI 조사와 연결한 교육용 도식 · Codex CLI 0.154.0':
    'TEACHING MODEL · 자료를 직접 선택·첨부하는 대화 방식의 가정',
   isAgent?'권한 제한을 해제하지 않음 · 목표·검토 책임은 개발자에게 남음 · 현재 Desktop 미검증':
    '실제 Chatbot 비교 실행 아님 · 자료 전달 방식의 차이이며 제품 능력·효율 우위를 입증하지 않음',
   isAgent?'OBSERVED_PRODUCT / TEACHING_MODEL':'TEACHING_MODEL');
  text(s,isAgent?'같은 조사 자료를, 허용된 파일·도구 범위에서 찾는다':
   '답을 받기 전, 사람이 관련 자료를 찾아 전달하는 방식',64,185,1152,43,30,C.teal,true);
  // DEC-0086: enlarge the preserved scene in the upper-right whitespace.
  s.images.add({blob:illustration,contentType:'image/png',
   alt:(isAgent?'Agent-assisted investigation':'Manual context selection')+'; AI-generated teaching illustration, not a product screenshot or Trial output',
   fit:'contain',position:{left:935.254,top:80,width:280.746,height:198},
   crop:{left:isAgent?0.51:0.015,top:0.18,right:isAgent?0.015:0.51,bottom:0.15}});
  text(s,'필요한 정보',64,252,260,34,25,C.teal,true);
  records.forEach((label,i)=>{
   const y=296+i*50;rect(s,64,y,260,41,i<3?C.pale:C.amber);
   text(s,label,80,y+2,228,37,25,i<3?C.teal:C.warn,true);
   connector(s,324,y+20,27);
  });
  connector(s,351,316,0,200);connector(s,351,416,65,0,true,isAgent);
  rect(s,434,357,286,118,C.white,C.line,1);
  text(s,isAgent?'Agent':'사람',450,367,254,43,34,C.teal,true,FONT,'center');
  text(s,isAgent?'허용 범위에서 조사':'찾고 · 고르고 · 전달',450,422,254,38,25,C.ink,true,FONT,'center');
  connector(s,730,416,76,0,true);
  rect(s,828,291,388,245,C.white,C.line,1);
  text(s,isAgent?'관찰된 조사 내용':'대화창 · 교육용 가정',850,308,344,34,25,C.teal,true);
  line(s,850,358,344,C.line,1);
  text(s,isAgent?'실패 테스트 · 관련 코드\nCrop 명세와 구현 차이\n실행 중 권한 제한':
   '찾아 둔 자료와 질문을 전달\n코드 · 테스트 · 명세\n실행 로그 · 권한 정보',850,380,344,126,25,C.ink,true);
  text(s,isAgent?'접근 전: 승인된 도구·계정·자료·권한 범위를 확인한다':
   '어떤 자료를 골라 연결할지, 답을 받기 전에 판단해야 한다',64,562,1152,35,27,C.teal,true);
  return s;
 };
 return {
  S05(p){
   const s=frame(p,'S05','Crop은 기대한 폭보다 한 열을 더 포함했다',
    'TRIAL-001 · STATE-00 테스트·소스의 첫 행을 발췌한 재구성 · CLI 0.154.0',
    '실제 실행 Screenshot 아님 · 코드 수정 없음 · C++ 할당·capacity·버퍼 오버런 사례 아님');
   text(s,'crop(image, 1, 3) · 명세는 끝 좌표 3을 제외',64,185,1152,42,30,C.teal,true);
   text(s,'입력의 첫 행',64,294,274,42,28,C.sub,true);
   [0,1,2,3].forEach((n,i)=>text(s,String(n),390+i*95,245,82,34,23,C.sub,false,CODE,'center'));
   cells(s,[1,2,3,4],390,290);
   text(s,'명세 · 폭 2',160,405,430,45,34,C.teal,true);cells(s,[2,3],160,465);
   text(s,'구현 · 폭 3',738,405,478,45,34,C.red,true);cells(s,[2,3,4],738,465,true);
   text(s,'포함할 값은 2·3인데, 구현은 끝 열의 값 4까지 포함했다',64,562,1152,37,29,C.ink,true);
   return s;
  },
  S06(p){
   const s=frame(p,'S06','테스트·명세·구현을 연결해 원인을 설명했다',
    'TRIAL-001 · 발견한 테스트·명세·구현의 관계를 재구성 · Codex CLI 0.154.0',
    '자료 관계도이며 Agent의 시간순 접근 로그가 아님 · README에도 결함 안내가 있었음 · 코드 수정 없음');
   text(s,'앞의 폭 2 / 폭 3 차이를 설명한 근거',64,185,1152,43,30,C.teal,true);
   const xs=[64,464,864];
   ['실패 테스트','Crop 명세','실제 구현'].forEach((name,i)=>{
    line(s,xs[i],276,352,C.teal,2);text(s,name,xs[i],292,352,44,30,C.teal,true);
   });
   text(s,'test_crop_excludes_\nend_coordinate',64,365,352,90,25,C.ink,true,CODE);
   text(s,'[x_start, x_end)',464,370,352,43,29,C.ink,true,CODE);
   text(s,'끝 좌표 제외',464,424,352,42,28,C.ink,true);
   text(s,'row[x_start :\n    x_end + 1]',864,365,352,90,27,C.red,true,CODE);
   connector(s,425,397,29,0,true);connector(s,825,397,29,0,true);
   text(s,'기대 범위와 구현 범위의 차이가, 실패를 설명한다',64,493,1152,43,31,C.teal,true);
   text(s,'관련 코드의 호출 관계  cli.main → pipeline.process_image → transform.crop',64,559,1152,37,24,C.sub);
   return s;
  },
  S07(p){
   const s=frame(p,'S07','다른 테스트 오류는 임시 폴더 생성에서 발생했다',
    'TRIAL-001 전체 테스트 기록의 실행 환경 제한 · Codex CLI 0.154.0',
    'Crop 결함과 별개 · 실행 제한을 관찰했으며 권한을 해제하거나 코드를 수정하지 않음');
   text(s,'전체 테스트 실행 중 환경 오류 3건 · Crop 실패와 원인이 다르다',64,185,1152,43,29,C.warn,true);
   const items=[['테스트 실행','일부 테스트가 쓰기 필요'],['임시 폴더 생성 요청','실행 중 파일을 둘 위치 필요'],['생성 불가','읽기 전용 실행 권한']];
   items.forEach(([title,body],i)=>{
    const x=64+i*400;rect(s,x,305,352,112,i===2?C.amber:C.white,C.line,1);
    text(s,title,x+16,330,320,57,30,i===2?C.warn:C.ink,true,FONT,'center');
    text(s,body,x,447,352,52,25,i===2?C.warn:C.sub,true,FONT,'center');
    if(i<2)connector(s,x+361,362,29,0,true);
   });
   text(s,'원인은 구분했다. 권한 제한을 해결한 것은 아니다',64,548,1152,47,31,C.ink,true);
   return s;
  },
  S08(p){
   const s=frame(p,'S08','원인 판단에는 코드와 실행 환경 정보가 필요했다',
    'TEACHING MODEL · TRIAL-001에서 살펴본 정보를 묶은 교육용 도식',
    '파일은 Repository에서, 실행 조건은 도구·권한에서 확인 · Repository 접근이 권한을 늘리지는 않음',
    'TEACHING_MODEL');
   text(s,'앞선 두 문제를 판단할 때, 무엇을 살펴봤을까?',64,185,1152,44,30,C.teal,true);
   text(s,'Repository의 자료',64,279,500,40,29,C.teal,true);
   text(s,'실행 환경의 자료',716,279,500,40,29,C.warn,true);
   ['실패 테스트','Crop 명세','구현·호출'].forEach((v,i)=>{
    const x=64+i*174;rect(s,x,361,152,83,C.pale);text(s,v,x+6,380,140,45,25,C.teal,true,FONT,'center');
   });
   ['실행 로그','읽기·쓰기 권한'].forEach((v,i)=>{
    const x=716+i*261;rect(s,x,361,239,83,C.amber);text(s,v,x+12,380,215,45,25,C.warn,true,FONT,'center');
   });
   connector(s,314,459,0,43);connector(s,966,459,0,43);connector(s,314,502,652);
   connector(s,640,502,0,31,true);
   text(s,'원인을 판단하는 데 쓰는 정보, Context',64,550,1152,47,35,C.teal,true,FONT,'center');
   return s;
  },
  S09(p){return collection(p,'S09','Chatbot에 이 자료를 직접 전달한다면?',false);},
  S10(p){return collection(p,'S10','Agent가 자료를 직접 찾아 연결했다',true);}
 };
}
