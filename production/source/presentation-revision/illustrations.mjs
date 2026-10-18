/** Approved teaching illustrations; no image is Trial output or a product capture. */
import fs from 'node:fs/promises';
import path from 'node:path';
import * as H from './helpers.mjs';

export async function loadIllustrationSlides(root) {
 const ids=['S07','S37','S53','S72'];
 const bytes=Object.fromEntries(await Promise.all(ids.map(async id=>[id,new Uint8Array(await fs.readFile(path.join(root,'prototype/image-illustration-pilot/assets',id+'.png')))])));
 const {C,text,line}=H;
 function illustration(s,id,x,y,w,h,top=0,bottom=0,left=0,right=0){
  return s.images.add({blob:bytes[id],contentType:'image/png',alt:id+' AI-generated teaching illustration; not a product screenshot or Trial output',fit:'contain',position:{left:x,top:y,width:w,height:h},crop:{left,top,right,bottom}});
 }
 function label(s,t,x,y,w,size=27,color=C.teal){return text(s,t,x,y,w,34,size,color,true);}
 return {
 S07(p){
  const s=H.frame(p,'S07','코드를 AI에게 가져가는 대신\nAI를 Repository로 데려간다','ACT 0 · Context를 찾는 주체','교육 모델 · TRIAL-001 단일 CLI 관찰과 연결 · AI 생성 설명용 삽화','목표 설정과 근거 검토는 개발자에게 남습니다. Repository 접근이 Task 의도를 정하지는 않습니다.');
  label(s,'내가 골라 전달하는 Context',64,214,550,28,C.sub);
  label(s,'조사를 맡기고 근거를 확인',670,214,546,28);
  illustration(s,'S07',164,246,952,319,0.18,0.15);
  text(s,'코드 조각을 선택·복사',64,558,550,36,28,C.ink,true);
  text(s,'목표는 사람이, 탐색은 Agent와',670,558,546,36,28,C.teal,true);
  return s;
 },
 S37(p){
  const s=H.frame(p,'S37','서로 다른 Performance Task,\n반복되는 절차','ACT 3 · 작업 방법도 반복된다','TRIAL-006 / TRIAL-007 · 반복 절차는 기록 요약 · 위 그림은 AI 생성 설명용 삽화','Global Harness 영향이 있어 Prompt만의 효과로 귀속하지 않음 · 그림은 최적화 전후 결과가 아님');
  label(s,'A · 이미지 크기 변경',64,210,550,28);
  label(s,'B · 픽셀값 범위 변환',670,210,546,28);
  // Reuse one generated grayscale tile so rescaling cannot imply new content.
  const tile=(x,y,size)=>illustration(s,'S37',x,y,size,size,274/887,(887-592)/887,952/1774,(1774-1270)/1774);
  tile(126,305,116);tile(354,260,200);
  H.arrow(s,274,342,44,24,C.teal);
  tile(710,270,160);tile(1030,270,160);
  H.arrow(s,934,338,44,24,C.teal);
  text(s,'값 예: 2048 → 128',670,438,546,28,23,C.teal,false,H.FONT,'center');
  text(s,'resize_nearest',64,470,550,32,25,C.sub,false,H.CODE);
  text(s,'normalize  ·  0–4095 → 0–255',670,470,546,32,25,C.sub);
  line(s,64,514,550,C.teal,2);line(s,670,514,546,C.teal,2);
  for(const x of [64,670]){
   text(s,'Baseline → 조사 → 계획 → 변경',x,526,546,30,25,C.ink,true);
   text(s,'Test → Benchmark → 비교 → Review',x,561,546,30,25,C.ink,true);
  }
  return s;
 },
 S53(p){
  const s=H.frame(p,'S53','Engineering Pattern은 C++에도 전이된다','ACT 3 · 도구를 넘어 같은 판단을 적용하기','C++ Vision 전이를 위한 교육용 예시 · AI 생성 설명용 삽화','실제 C++ Demo·회사 장비·측정 결과가 아닙니다. 도구·빌드·하드웨어 조건은 프로젝트별 확인 필요');
  label(s,'Python Demo에서 확인한 질문을 C++ Vision 업무로',64,161,1152,28);
  illustration(s,'S53',197.5,201,885,236,0.08,0.12);
  const groups=[
   [64,'기준 조건은?','입력·계약에서\n빌드·하드웨어 가정까지'],
   [456,'어디를 조사할까?','측정한 코드 경로에서\n해당 모듈의 profile로'],
   [848,'무엇을 확인할까?','동작 계약에서\n모듈·회귀·통합 검증으로']
  ];
  for(const [x,t,b] of groups){label(s,t,x,438,368,27);text(s,b,x,476,368,62,24,C.sub);}
  text(s,'baseline → profile → change → regression check',64,558,1152,38,31,C.teal,true);
  return s;
 },
 S72(p){
  const s=H.frame(p,'S72','Project와 환경이 바뀌면\n검증도 다시 본다','ACT 4 · C++ VISION / 적용을 위한 가상 질문','BEAT-059 · TRANS-012 · 교육용 전이 모델 · AI 생성 설명용 삽화','실제 C++ 사건·성능 결과가 아닙니다. 변경 표시는 확인할 조건을 뜻하며 원인이나 결과를 단정하지 않습니다.','CONCEPTUAL / TEACHING_MODEL');
  // Keep a full line box for the claim footer across substitute font metrics.
  s.shapes.items.at(-1).position={left:64,top:650,width:1152,height:30};
  label(s,'GPU · 빌드 · 측정 조건이 달라졌다면?',64,207,1152,28);
  illustration(s,'S72',202.5,235,875,245,0.06,0.10);
  [['입력',230],['처리 코드',455],['실행 장치 · 변경 조건',655],['출력',970]].forEach(([t,x])=>text(s,t,x,476,260,27,21,C.sub,true));
  const groups=[
   [64,'기존 가정','어떤 조건에서 맞던 판단인가?'],
   [456,'측정 조건','입력과 실행 조건은 비교 가능한가?'],
   [848,'기능 계약','함께 다시 확인할 동작은?']
  ];
  for(const [x,t,b] of groups){label(s,t,x,500,368,25);text(s,b,x,534,368,34,22,C.sub);}
  text(s,'같은 문제가 반복될 때, 어느 Layer를 먼저 살펴볼까?',64,565,1152,40,27,C.ink,true);
  return s;
 }
};
}
