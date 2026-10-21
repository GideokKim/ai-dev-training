/** Improve the approved image layouts without changing their evidence scope. */
import fs from 'node:fs/promises';
import path from 'node:path';
import * as H from './helpers.mjs';

export async function loadVisualPolishSlides(root) {
 const {C,text,line,arrow}=H;
 const files={S74:'prototype/image-illustration-pilot/assets/S72.png',S18:'assets/slide-illustrations/recap/S16-source.png',S34:'assets/slide-illustrations/recap/S32-source.png',S47:'assets/slide-illustrations/recap/S45-source.png'};
 const bytes=Object.fromEntries(await Promise.all(Object.entries(files).map(async([id,file])=>[id,new Uint8Array(await fs.readFile(path.join(root,file)))])));
 return {
  S74(p){
   const s=H.frame(p,'S74','Project와 환경이 바뀌면\n검증도 다시 본다','ACT 4 · C++ VISION / 적용을 위한 가상 질문','BEAT-059 · TRANS-012 · 교육용 전이 모델 · AI 생성 설명용 삽화','실제 C++ 사건·성능 결과가 아닙니다. 변경 표시는 확인할 조건을 뜻하며 원인이나 결과를 단정하지 않습니다.','CONCEPTUAL / TEACHING_MODEL');
   s.shapes.items.at(-1).position={left:64,top:650,width:1152,height:30};
   text(s,'GPU · 빌드 · 측정 조건이 달라졌다면?',64,210,1152,38,28,C.teal,true);
   s.images.add({blob:bytes.S74,contentType:'image/png',alt:'AI-generated teaching illustration of input, code, device conditions and output; not an observed C++ incident',fit:'contain',position:{left:64,top:281,width:720,height:202},crop:{left:0,top:0.06,right:0,bottom:0.10}});
   [['입력',64,160],['처리 코드',244,180],['실행 장치 · 변경 조건',424,244],['출력',674,110]].forEach(([t,x,w])=>text(s,t,x,491,w,30,20,C.sub,true,H.FONT,'center'));
   const questions=[
    ['01','기존 가정','어떤 조건에서\n맞던 판단인가?',261],
    ['02','측정 조건','입력과 실행 조건은\n비교 가능한가?',354],
    ['03','기능 계약','함께 다시 확인할\n동작은?',447]
   ];
   for(const[n,title,question,y]of questions){
    text(s,n,842,y,40,34,22,C.warn,true,H.CODE);
    text(s,title,890,y,326,34,25,C.teal,true);
    text(s,question,890,y+34,326,58,22,C.sub);
   }
   text(s,'같은 문제가 반복될 때, 어느 Layer를 먼저 살펴볼까?',64,557,1152,46,29,C.ink,true);
   return s;
  },
  S76(p){
   const s=H.frame(p,'S76','하나의 Repository가 문제에 대응해 진화했다','ACT 5 · 확인된 제품 변화','DEMO-12 · 실제 Git State 이력 · S18 / S34 / S47 발표자료 발췌','원본 실행 화면 아님 · 성능은 해당 코드·입력·환경 범위 · State는 성숙도 등급이나 Product Loop가 아님','OBSERVED_PRODUCT');
   s.shapes.items.at(-1).position={left:64,top:650,width:1152,height:30};
   const states=[['STATE-00','crop 경계 문제'],['STATE-00-FIXED','계약에 맞게 수정'],['STATE-01','프로젝트 지침'],['STATE-02','Context 증가'],['STATE-03','상세 정보로 연결'],['STATE-04','재사용 Workflow'],['STATE-04-PERF','검증된 제품 변경']];
   states.forEach(([id,meaning],i)=>{
    const top=i<4,x=top?64+i*294:848-(i-4)*392,y=top?164:281,w=top?264:368,color=i===6?C.green:C.teal;
    line(s,x,y,w,color,2);
    text(s,String(i+1).padStart(2,'0'),x,y+10,40,30,20,C.sub,true,H.CODE);
    text(s,id,x+44,y+10,w-44,30,21,color,true,H.CODE);
    text(s,meaning,x,y+46,w,38,26,C.ink,true);
    if(top&&i<3)arrow(s,x+w+6,y+45,22,16,C.teal);
    if(!top&&i<6)s.shapes.add({geometry:'leftArrow',position:{left:x-31,top:y+45,width:24,height:16},fill:C.teal,line:{fill:'none',width:0}});
   });
   s.shapes.add({geometry:'downArrow',position:{left:1067,top:251,width:22,height:24},fill:C.teal,line:{fill:'none',width:0}});
   line(s,64,378,1152,C.line,1);
   text(s,'앞서 본 근거 다시 보기',64,384,1152,28,19,C.sub,true);
   const excerpts=[['S18','crop 계약 수정','STATE-00 → STATE-00-FIXED',64,440,440],['S34','상세 문서로 분리','STATE-02 → STATE-03',456,425,365],['S47','같은 조건의 성능 비교','STATE-04 → STATE-04-PERF',848,360,540]];
   for(const[id,caption,states,x,sourceY,sourceHeight]of excerpts){
    const width=304,height=width*sourceHeight/1728;
    s.images.add({blob:bytes[id],contentType:'image/png',alt:`Frozen excerpt of ${id} teaching slide, not a raw execution capture`,fit:'contain',position:{left:x+32,top:414+(95-height)/2,width,height},crop:{left:96/1920,right:96/1920,top:sourceY/1080,bottom:(1080-sourceY-sourceHeight)/1080}});
    text(s,caption,x,513,368,32,23,C.teal,true);
    text(s,`${id} · ${states}`,x,545,368,28,19,C.sub,false,H.CODE);
   }
   text(s,'각 변화의 출발점은, 그때 마주친 문제였다.',64,577,1152,32,27,C.teal,true);
   return s;
  }
 };
}
