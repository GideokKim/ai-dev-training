/** Approved ACT 3 presentation polish. Existing evidence and images stay scoped. */
import fs from 'node:fs/promises';
import path from 'node:path';
import * as H from './helpers.mjs';

export async function loadHarnessPolishSlides(root) {
 const files={S39:'S37.png',S55:'S53.png'};
 const bytes=Object.fromEntries(await Promise.all(Object.entries(files).map(async ([id,file])=>[
  id,new Uint8Array(await fs.readFile(path.join(root,'prototype/image-illustration-pilot/assets',file)))
 ])));
 const {C,text,line,rect,arrow}=H;
 const make=(p,id,title,eyebrow,source,boundary,type='TEACHING_MODEL')=>{
  const s=H.frame(p,id,title,eyebrow,source,boundary,type);
  // Retain enough line height for the designated and preview font metrics.
  s.shapes.items.at(-1).position={left:64,top:650,width:1152,height:30};
  return s;
 };
 const illustration=(s,id,x,y,w,h,top=0,bottom=0,left=0,right=0)=>s.images.add({
  blob:bytes[id],contentType:'image/png',
  alt:id+' AI-generated teaching illustration; not a product screenshot or Trial output',
  fit:'contain',position:{left:x,top:y,width:w,height:h},crop:{left,top,right,bottom}
 });
 return {
  S39(p){
   const s=make(p,'S39','서로 다른 Performance Task,\n반복되는 절차','ACT 3 · 작업 방법도 반복된다',
    'TRIAL-006 / TRIAL-007 · 반복 절차는 기록 요약 · 위 그림은 AI 생성 설명용 삽화',
    'Global Harness 영향이 있어 Prompt만의 효과로 귀속하지 않음 · 그림은 최적화 전후 결과가 아님','OBSERVED_PRODUCT');
   const tile=(x,y,size)=>illustration(s,'S39',x,y,size,size,274/887,(887-592)/887,952/1774,(1774-1270)/1774);
   text(s,'A · 이미지 크기 변경',64,209,550,36,27,C.teal,true);
   text(s,'B · 픽셀값 범위 변환',670,209,546,36,27,C.teal,true);
   tile(76,276,63);tile(201,254,104);arrow(s,153,295,32,18);
   text(s,'resize_nearest',334,274,280,40,25,C.sub,false,H.CODE);
   tile(682,263,91);tile(828,263,91);arrow(s,785,297,30,18);
   text(s,'normalize',944,255,272,34,25,C.sub,false,H.CODE);
   text(s,'0–4095 → 0–255',944,292,272,32,24,C.sub);
   text(s,'값 예: 2048 → 128',944,326,272,31,23,C.teal);
   line(s,64,378,1152,C.teal,2);
   text(s,'두 Task에 반복된 작업 순서',64,391,1152,43,31,C.teal,true);
   text(s,'Baseline → 조사 → 계획 → 변경',64,449,1152,56,38,C.ink,true);
   text(s,'Test → Benchmark → 비교 → Review',64,518,1152,56,38,C.ink,true);
   return s;
  },
  S40(p){
   const s=make(p,'S40','Project 사실과 작업 절차는 다르다','ACT 3 · 알아야 할 것과 따라야 할 방법',
    '교육용 구분 · TRIAL-006/007의 반복 절차에서 출발',
    'Project 정보를 더 주는 것만으로 반복되는 절차의 유지 문제가 해결되지는 않는다');
   text(s,'무엇이 참인가?',64,221,550,46,34,C.teal,true);
   text(s,'어떤 순서로 일할까?',670,221,546,46,34,C.teal,true);
   line(s,64,283,550,C.teal,3);line(s,670,283,546,C.teal,3);
   text(s,'crop은 끝 열을 제외한다',64,311,550,46,30,C.ink,true);
   text(s,'[x_start, x_end)',64,361,550,43,29,C.sub,false,H.CODE);
   text(s,'변경 전에 측정한다\n변경 후 같은 입력으로 비교한다',670,311,546,91,29,C.ink,true);
   text(s,'Project Context',64,437,550,43,30,C.sub,true);
   text(s,'Workflow',670,437,546,43,30,C.sub,true);
   line(s,64,514,1152);
   text(s,'이번에 무엇을 원하는가?',64,539,490,43,29,C.ink,true);
   text(s,'현재 목표는 Task Prompt에',586,539,630,43,29,C.teal,true);
   return s;
  },
  S41(p){
   const s=make(p,'S41','Task, Context, Workflow의 역할','ACT 3 · 세 가지 책임을 나누기',
    '교육용 책임 구분 · 현재 목표 / 프로젝트 사실 / 반복 절차',
    'Prompt 밖에 둘 수 있는 정보라도 유지해야 할 책임은 서로 다르다');
   // Apply the three layers to one already introduced Task, rather than repeat
   // S40's example-classification exercise.
   rect(s,64,215,1152,104,C.pale);
   text(s,'Task Prompt',86,226,326,39,28,C.teal,true);
   text(s,'지금 무엇을 바꿀까?',86,269,326,34,25,C.sub);
   text(s,'normalize의 성능 조사',448,241,744,55,36,C.ink,true);
   line(s,64,352,1152);
   text(s,'Project Context',64,369,332,40,28,C.teal,true);
   text(s,'무엇을 지켜야 할까?',64,414,332,34,25,C.sub);
   text(s,'기존 이미지 동작과\n공개 계약 보존',448,366,768,87,31,C.ink,true);
   line(s,64,479,1152);
   text(s,'Reusable Workflow',64,495,332,40,28,C.teal,true);
   text(s,'어떤 순서로 확인할까?',64,540,332,34,25,C.sub);
   text(s,'baseline → 조사 → 검증 → 비교',448,514,768,47,30,C.ink,true);
   return s;
  },
  S45(p){
   const s=make(p,'S45','답을 담지 않는 Workflow','ACT 3 · 절차와 과제별 판단',
    'STATE-04의 SKILL.md 원문 일부 + 교육용 책임 구분',
    '특정 최적화 답·알고리즘·Trial 수치를 Skill의 정답으로 넣지 않았다','OBSERVED_PRODUCT');
   text(s,'변경 전에, 재현 가능한 기준부터',64,217,1152,45,32,C.teal,true);
   text(s,'“Establish a reproducible baseline before editing.”',64,269,1152,37,24,C.sub);
   line(s,64,328,1152);
   text(s,'측정상 이득이 없으면, 변경하지 않아도 된다',64,350,1152,44,31,C.teal,true);
   text(s,'“A measured result that does not justify a change is a\nvalid no-change conclusion.”',64,405,1152,66,24,C.sub);
   line(s,64,492,1152);
   text(s,'이번 Task에서 정할 답',64,505,330,38,26,C.sub,true);
   text(s,'알고리즘 · 실제 측정값 · trade-off',426,505,790,38,28,C.ink);
   text(s,'절차는 재사용하고, 답은 이번 근거로 결정한다',64,555,1152,41,30,C.ink,true);
   return s;
  },
  S50(p){
   const s=make(p,'S50','무엇이 다시 찾기 어려운 지식인가?','ACT 3 · 별도 지식 보존의 필요성 점검',
    '현재 Demo Repository의 지식 분류와 Memory 후보 점검',
    '별도 Memory로 남길 지속적 지식 후보는 찾지 못함 · 제품 Memory 동작 주장은 아님');
   text(s,'이번 사례에서는\n별도 Memory 후보를 찾지 못했다',64,201,1152,94,34,C.teal,true);
   const rs=[
    ['crop은 끝 열을 제외한다','코드 · image-contracts.md'],
    ['모듈은 어떤 순서로 이어지나','architecture.md'],
    ['성능을 어떻게 조사하고 확인하나','Repository Skill'],
    ['이번 실행에서 무엇을 측정했나','날짜가 있는 Trial 기록 · Git 이력']
   ];
   rs.forEach((r,i)=>{
    const y=319+i*57;line(s,64,y,1152);
    text(s,r[0],64,y+10,535,39,25,C.ink,true);
    arrow(s,619,y+20,35,18);
    text(s,r[1],704,y+10,512,39,25,C.sub);
   });
   text(s,'새 기록을 만들기 전에, 원래 출처를 먼저 찾는다',64,565,1152,37,28,C.ink,true);
   return s;
  },
  S55(p){
   const s=make(p,'S55','Engineering Pattern은 C++에도 전이된다','ACT 3 · 도구를 넘어 같은 판단을 적용하기',
    'C++ Vision 전이를 위한 교육용 예시 · AI 생성 설명용 삽화',
    '실제 C++ Demo·회사 장비·측정 결과가 아닙니다. 도구·빌드·하드웨어 조건은 프로젝트별 확인 필요');
   text(s,'Python Demo에서 확인한 질문을 C++ Vision 업무로',64,161,1152,37,28,C.teal,true);
   illustration(s,'S55',197.5,202,885,204,0.08,0.12);
   // The camera and source image together form the input stage. Numbered
   // captions link the four pictured objects to the three verification roles.
   text(s,'01  입력',211,406,427,31,22,C.teal,true,H.FONT,'center');
   text(s,'02  처리',676,406,270,31,22,C.teal,true,H.FONT,'center');
   text(s,'03  결과',972,406,221,31,22,C.teal,true,H.FONT,'center');
   const groups=[
    [64,'01  기준 조건은?','입력·계약에서\n빌드·하드웨어 가정까지'],
    [456,'02  어디를 조사할까?','측정한 코드 경로에서\n해당 모듈의 profile로'],
    [848,'03  무엇을 확인할까?','동작 계약에서\n모듈·회귀·통합 검증으로']
   ];
   for(const [x,t,b] of groups){
    line(s,x,441,368,C.line,1);
    text(s,t,x,449,368,37,26,C.teal,true);
    text(s,b,x,492,368,63,24,C.sub);
   }
   text(s,'baseline → profile → change → regression check',64,562,1152,36,29,C.teal,true);
   return s;
  }
 };
}
