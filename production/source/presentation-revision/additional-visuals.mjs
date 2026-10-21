/** Complete the approved image candidates without expanding their claims. */
import fs from 'node:fs/promises';
import path from 'node:path';
import * as H from './helpers.mjs';
import { slides as testScopeSlides } from './test-scope-visual.mjs';

export async function loadAdditionalVisuals(root) {
 const assetDir=path.join(root,'assets/slide-illustrations');
 const files={S03:'S03-context-collection.png',S18:'recap/S16-source.png',S34:'recap/S32-source.png',S47:'recap/S45-source.png'};
 const bytes=Object.fromEntries(await Promise.all(Object.entries(files).map(async ([id,file])=>[id,new Uint8Array(await fs.readFile(path.join(assetDir,file)))])));
 const {C,text,line}=H;
 return {
  ...testScopeSlides,
  S03(p){
   const s=H.frame(p,'S03','질문이 커지면 Context를 모으는 일이 생긴다','ACT 0 · 여러 파일을 가로지르는 질문',
    '개념 사례 · 사람이 Context를 모으는 장면 · AI 생성 설명용 삽화',
    '특정 Trial에서 실제로 발생한 비용이나 실패를 뜻하지 않습니다.','CONCEPTUAL');
   s.shapes.items.at(-1).position={left:64,top:650,width:1152,height:30};
   text(s,'“CLI 결과가 기대와 다른데, 어디서부터 봐야 할까?”',64,171,1152,46,32,C.teal,true);
   s.images.add({blob:bytes.S03,contentType:'image/png',alt:'AI-generated conceptual illustration of a person manually collecting code, test and contract context; not a Trial capture',fit:'contain',position:{left:64,top:223,width:744,height:372}});
   const questions=[
    ['구현 · 호출 경로','CLI → 처리 흐름 → 연산',241],
    ['테스트','어떤 조건에서 실패했나?',350],
    ['계약','원래 기대한 동작은?',459]
   ];
   for(const [title,question,y] of questions){
    text(s,title,850,y,366,38,28,C.teal,true);
    text(s,question,850,y+43,366,36,24,C.sub);
   }
   text(s,'질문에 옮길 자료는?',850,558,366,38,27,C.ink,true);
   return s;
  },
  S76(p){
   const s=H.frame(p,'S76','하나의 Repository가 문제에 대응해 진화했다','ACT 5 · 확인된 제품 변화',
    'DEMO-12 · 실제 Git State 이력 · S18 / S34 / S47 발표자료 발췌',
    '원본 실행 화면 아님 · 성능은 해당 코드·입력·환경 범위 · State는 성숙도 등급이나 Product Loop가 아님','OBSERVED_PRODUCT');
   s.shapes.items.at(-1).position={left:64,top:650,width:1152,height:30};
   const items=[['STATE-00','crop 경계 문제'],['STATE-00-FIXED','계약에 맞게 수정'],['STATE-01','프로젝트 지침'],['STATE-02','Context 증가'],['STATE-03','상세 정보로 연결'],['STATE-04','재사용 Workflow'],['STATE-04-PERF','검증된 제품 변경']];
   items.forEach((item,i)=>{
    const row=i<4?0:1,j=i<4?i:i-4,x=64+j*(row?392:294),y=row?258:165,w=row?368:264,color=i===6?C.green:C.teal;
    line(s,x,y,w,color,2);
    text(s,item[0],x,y+10,w,32,22,color,true,H.CODE);
    text(s,item[1],x,y+47,w,36,26,C.ink,true);
   });
   line(s,64,351,1152,C.line,1);
   text(s,'앞서 본 근거 다시 보기',64,355,1152,26,19,C.sub,true);
   // These are frozen source-slide PNGs with editable native PowerPoint crops.
   // They recall earlier evidence; they are not new screenshots or measurements.
   const excerpts=[['S18','crop 계약 수정','STATE-00 → STATE-00-FIXED',64,440,440],['S34','상세 문서로 분리','STATE-02 → STATE-03',456,425,365],['S47','같은 조건의 성능 비교','STATE-04 → STATE-04-PERF',848,360,540]];
   for(const [id,caption,states,x,sourceY,sourceHeight] of excerpts){
    const width=368,height=width*sourceHeight/1728;
    s.images.add({blob:bytes[id],contentType:'image/png',alt:`Excerpt of existing ${id} teaching slide, not a raw execution capture; provenance in Notes and asset manifest`,fit:'contain',position:{left:x,top:386+(115-height)/2,width,height},crop:{left:96/1920,right:96/1920,top:sourceY/1080,bottom:(1080-sourceY-sourceHeight)/1080}});
    text(s,caption,x,507,368,30,23,C.teal,true);
    text(s,`${id} · ${states}`,x,539,368,28,19,C.sub,false,H.CODE);
   }
   text(s,'각 변화의 출발점은, 그때 마주친 문제였다.',64,572,1152,34,27,C.teal,true);
   return s;
  }
 };
}
