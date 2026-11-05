/** DEC-0185: establish the collection problem before the Agent payoff. */
import fs from 'node:fs/promises';
import path from 'node:path';
import {addModuleFooter} from './legacy-priority.mjs';

export async function loadAct0ContextCollectionSlides(root,H){
 const humanIcons=new Uint8Array(await fs.readFile(path.join(root,'assets/slide-illustrations/human-agent-icons.png')));
 const {C,FONT,CODE,text,rect,line}=H;
 const connect=(s,x,y,w,color=C.teal)=>s.shapes.add({geometry:'connector',kind:'straight',
  position:{left:x,top:y,width:w,height:0},line:{fill:color,width:2.5},
  tail:{type:'triangle',width:'sm',length:'sm'}});
 const make=(p,id,title,eyebrow,moduleLabel,source='')=>{
  const s=H.frame(p,id,title,'ACT 0 · '+eyebrow,source,'');
  addModuleFooter(s,id,{slideId:id,footerLabel:moduleLabel},H);
  for(const shape of [...s.shapes.items]){
   if(shape.position.left===64&&[608,632].includes(shape.position.top)&&!String(shape.text).trim())shape.delete();
  }
  return s;
 };
 const page=(s,x,y,color=C.teal,fill=C.white,scale=1)=>{
  const q=s.shapes.add({geometry:'custom',position:{left:x,top:y,width:28*scale,height:36*scale},
   fill,line:{fill:color,width:1.5},customPaths:[{width:28,height:36,commands:[
    {moveTo:{x:0,y:0}},{lineTo:{x:19,y:0}},{lineTo:{x:28,y:9}},
    {lineTo:{x:28,y:36}},{lineTo:{x:0,y:36}},{close:{}}
   ]}]});
  line(s,x+6*scale,y+18*scale,16*scale,color,1.5);
  line(s,x+6*scale,y+25*scale,12*scale,color,1.5);
  return q;
 };
 const macRequest=(s,x,y,w,h)=>{
  const outer=rect(s,x,y,w,h,C.white,C.line,1.5);outer.borderRadius=12;
  const chrome=rect(s,x+1,y+1,w-2,42,'#EDF1F5');chrome.borderRadius=11;
  ['#FF5F57','#FEBC2E','#28C840'].forEach((fill,i)=>s.shapes.add({geometry:'ellipse',
   position:{left:x+18+i*20,top:y+15,width:12,height:12},fill,line:{fill:'none',width:0}}));
  line(s,x+1,y+46,w-2,C.line,1);
  text(s,'조사 요청',x+91,y+4,w-109,36,20,C.sub,true);
 };
 return {
  S06(p){
   const s=make(p,'S06','Chatbot은 주어진 Context만을 활용해서 조사한다',
    '직접 자료를 첨부하는 대화 방식','M 연계 · M6');
   text(s,'이 대화에 넣을 프로젝트 자료는 사람이 고른다',64,180,1152,43,30,C.teal,true);
   rect(s,64,260,320,290,C.white,C.line,1.5);
   rect(s,64,246,124,18,C.pale,C.line,1.5);
   text(s,'프로젝트 폴더',82,277,284,34,27,C.ink,true);
   ['실패 테스트','Crop 명세','관련 코드'].forEach((label,i)=>{
    const y=331+i*54;page(s,84,y+4,C.teal,C.pale,.8);
    text(s,label,122,y,242,40,26,C.teal,true);
   });
   line(s,84,492,280,C.line,1,'dash');
   text(s,'그 밖의 소스·문서',84,501,280,32,23,C.sub);
   s.images.add({blob:humanIcons,contentType:'image/png',fit:'contain',
    alt:'Person selecting project files for the chat; reused teaching pictogram',
    position:{left:416,top:331,width:120,height:126},crop:{left:0,top:0,right:.5,bottom:0}});
   text(s,'선택·첨부',400,469,152,35,25,C.teal,true,FONT,'center');
   connect(s,389,399,21);connect(s,540,399,18);
   macRequest(s,564,260,652,290);
   ['실패 테스트','Crop 명세','관련 코드'].forEach((label,i)=>{
    rect(s,584+i*200,326,188,40,C.pale);
    text(s,label,592+i*200,329,172,34,23,C.teal,true,FONT,'center');
   });
   text(s,'첨부한 테스트·명세·코드를 보고\nCrop 실패 원인을 설명해줘.\n아직 코드는 수정하지 마.',586,390,608,118,28,C.ink);
   text(s,'＋',586,514,26,27,24,C.sub);
   s.shapes.add({geometry:'ellipse',position:{left:1163,top:509,width:32,height:32},fill:C.teal,line:{fill:'none',width:0}});
   text(s,'↑',1163,508,32,32,27,C.white,true,FONT,'center');
   text(s,'프로젝트 폴더 전체가 아니라, 골라 전달한 자료에서 시작한다',64,566,1152,36,29,C.teal,true);
   return s;
  },
  S08(p){
   const s=make(p,'S08','원인을 설명하려면 테스트·명세·구현을 연결해야 한다',
    '원인을 설명하는 데 필요한 근거','M 연계 · M5 · M6');
   text(s,'앞의 폭 2 / 폭 3 차이를 설명한 자료는 어디에 있었을까?',64,180,1152,43,30,C.teal,true);
   rect(s,64,251,1152,51,C.pale);
   text(s,'프로젝트 폴더 안에 있는 서로 다른 자료',84,258,1112,37,27,C.teal,true);
   const xs=[64,456,848],names=['Crop 테스트','Crop 명세','Crop 구현'];
   xs.forEach((x,i)=>{page(s,x,325);text(s,names[i],x+44,326,324,37,28,C.teal,true);});
   text(s,'tests/crop_test.cpp',64,374,368,30,20,C.sub,false,CODE);
   text(s,'README.md · crop 설명',456,374,368,30,21,C.sub);
   text(s,'src/transform.cpp',848,374,368,30,20,C.sub,false,CODE);
   text(s,'Crop.EndExcluded',64,420,368,38,26,C.ink,true,CODE);
   text(s,'EXPECT_EQ(width, 2);',64,464,368,36,24,C.ink,true,CODE);
   text(s,'[x_start, x_end)',456,420,368,38,29,C.ink,true,CODE);
   text(s,'끝 좌표 제외',456,464,368,36,27,C.ink,true);
   text(s,'std::vector<int>(\n  row.begin() + x_start,\n  row.begin() + x_end + 1)',848,414,368,104,24,C.red,true,CODE);
   connect(s,436,443,16);connect(s,828,443,16);
   text(s,'이 근거를 찾아 연결해야, 원인을 설명할 수 있다',64,530,1152,38,32,C.teal,true);
   text(s,'관련 호출 관계  main() → process_image() → crop()',64,576,1152,24,23,C.sub);
   return s;
  },
  S09(p){
   const s=make(p,'S09','코드만으로 설명되지 않는 오류도 있었다',
    '별도 실행 환경 오류','M 연계 · M6');
   text(s,'앞의 Crop 구현 문제와는 별개',64,180,1152,43,30,C.warn,true);
   // Keep the same file/folder/permission vocabulary as S08 and S10.
   text(s,'테스트 실행',64,265,240,42,30,C.teal,true,FONT,'center');
   page(s,150,327,C.teal,C.pale,2.5);
   text(s,'임시 파일을 쓰려 함',64,455,240,43,26,C.ink,true,FONT,'center');
   connect(s,322,373,68);
   text(s,'임시 폴더 생성',408,265,330,42,30,C.ink,true,FONT,'center');
   rect(s,464,342,228,105,C.white,C.line,2);
   rect(s,464,325,89,22,C.pale,C.line,2);
   text(s,'＋',544,362,70,62,45,C.teal,true,FONT,'center');
   text(s,'쓰기 권한 필요',408,455,330,43,26,C.sub,true,FONT,'center');
   connect(s,708,373,76,C.warn);
   const barrier=rect(s,810,310,8,160,C.redPale,C.red,1);
   barrier.name='Write permission boundary';
   rect(s,832,246,384,260,C.amber);
   text(s,'읽기 전용 환경',848,265,352,42,30,C.warn,true,FONT,'center');
   const shackle=rect(s,993,326,54,67,C.amber,C.warn,3);shackle.borderRadius=27;
   rect(s,974,365,92,66,C.amber,C.warn,3);
   s.shapes.add({geometry:'ellipse',position:{left:1014,top:387,width:12,height:12},fill:C.warn,line:{fill:'none',width:0}});
   text(s,'폴더 생성 불가',848,455,352,43,30,C.red,true,FONT,'center');
   text(s,'실행 로그 + 권한 정보도 확인해야 원인을 구분할 수 있다',64,552,1152,43,31,C.teal,true);
   return s;
  },
  S10(p){
   const s=make(p,'S10','이 자료를 매번 사람이 찾아 전달해야 할까?',
    '한 번의 Crop 조사에 필요한 자료','M 연계 · M6','프로젝트 파일 접근과 실행 권한은 별개');
   text(s,'코드의 원인과 실행 오류를 구분하려면, 두 곳의 자료가 필요하다',64,180,1152,43,29,C.teal,true);
   [[64,C.teal,C.pale,'프로젝트 폴더'],[656,C.warn,C.amber,'실행 환경']].forEach(([x,color,fill,title])=>{
    rect(s,x,270,560,258,C.white,color,1.5);
    rect(s,x+1,271,558,60,fill);
    text(s,title,x+24,281,512,40,30,color,true);
   });
   ['실패 테스트','Crop 명세','구현·호출'].forEach((label,i)=>{
    const x=88+i*176;page(s,x+58,354,C.teal,C.pale,1.25);
    text(s,label,x,415,160,43,26,C.teal,true,FONT,'center');
   });
   page(s,784,354,C.warn,C.amber,1.25);
   text(s,'실행 로그',680,415,244,43,27,C.warn,true,FONT,'center');
   const shackle=rect(s,1055,352,29,36,C.white,C.warn,2);shackle.borderRadius=14;
   rect(s,1045,370,49,33,C.amber,C.warn,2);
   s.shapes.add({geometry:'ellipse',position:{left:1066,top:381,width:7,height:7},fill:C.warn,line:{fill:'none',width:0}});
   text(s,'읽기·쓰기 권한',948,415,244,43,27,C.warn,true,FONT,'center');
   text(s,'답변 전에, 이 자료를 찾고 연결하는 일이 남는다',64,559,1152,43,32,C.teal,true);
   return s;
  }
 };
}

export function applyAct0ContextCollection(slide,id){
 const replace=(before,after)=>{
  const found=slide.shapes.items.filter(q=>String(q.text)===before);
  if(found.length!==1)throw new Error(`${id}: expected one text ${before}`);
  if(after===null){found[0].delete();return;}
  found[0].text.replace(before,after);
  if(found[0].name===before)found[0].name=after.slice(0,60);
 };
 if(id==='S07')replace('조사 기록 요약 · 코드 수정 없음',null);
 if(id==='S11'){
  replace('Chatbot에 이 자료를 직접 전달한다면?','Chatbot에 줄 자료는 사람이 모은다');
  replace('답을 받기 전, 사람이 관련 자료를 찾아 전달하는 방식','같은 Crop 질문 · 필요한 자료를 직접 첨부하는 방식');
  replace('찾고 · 고르고 · 전달','찾기 → 연결 → 첨부');
  replace('어떤 자료를 골라 연결할지, 답을 받기 전에 판단해야 한다','답변 전에, 사람이 필요한 자료를 찾아 연결하고 첨부한다');
 }
 if(id==='S12'){
  replace('Agent가 자료를 직접 찾아 연결했다','Agent는 프로젝트 폴더에서 직접 조사한다');
  replace('접근 전: 승인된 도구·계정·자료·권한 범위를 확인한다','자료 수집·연결의 일부를, 허용 범위 안에서 Agent에게 맡긴다');
 }
 if(id==='S107'){
  replace('출처·검토·갱신 책임도 함께',null);
  replace('공유는 선택',null);
 }
}
