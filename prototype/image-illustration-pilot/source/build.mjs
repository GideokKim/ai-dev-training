/** Build the four-slide illustration review deck from the approved deck style. */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';
import { createHash } from 'node:crypto';
import * as H from '../../../production/source/presentation-revision/helpers.mjs';

const HERE=path.dirname(fileURLToPath(import.meta.url));
const DEST=path.resolve(HERE,'..');
const ROOT=path.resolve(HERE,'../../..');
const WORK=process.env.PRESENTATION_WORK_DIR;
const SKILL=process.env.PRESENTATION_SKILL_DIR;
const MODULES=process.env.RUNTIME_NODE_MODULES;
if(!WORK||!SKILL||!MODULES)throw new Error('Missing runtime paths.');
const req=createRequire(path.join(MODULES,'__image_pilot__.cjs'));
const {Presentation,PresentationFile,FileBlob}=await import(pathToFileURL(req.resolve('@oai/artifact-tool')).href);
const {GlobalFonts,createCanvas,loadImage}=req('@napi-rs/canvas');
GlobalFonts.registerFromPath('/System/Library/Fonts/AppleSDGothicNeo.ttc','Malgun Gothic');
GlobalFonts.registerFromPath('/System/Library/Fonts/Menlo.ttc','Consolas');
const {finalizePresentation}=await import(pathToFileURL(path.join(SKILL,'container_tools/artifact_tool_utils.mjs')).href);
const ids=['S07','S37','S53','S72'];
const bytes=Object.fromEntries(await Promise.all(ids.map(async id=>[id,new Uint8Array(await fs.readFile(path.join(DEST,'assets',id+'.png')))])));
const {C,text,line}=H;
function illustration(s,id,x,y,w,h,top=0,bottom=0,left=0,right=0){
 return s.images.add({blob:bytes[id],contentType:'image/png',alt:id+' AI-generated teaching illustration; not a product screenshot or Trial output',fit:'contain',position:{left:x,top:y,width:w,height:h},crop:{left,top,right,bottom}});
}
function label(s,t,x,y,w,size=27,color=C.teal){return text(s,t,x,y,w,34,size,color,true);}
const factories={
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
  label(s,'GPU · 빌드 · 측정 조건이 달라졌다면?',64,207,1152,28);
  illustration(s,'S72',202.5,235,875,245,0.06,0.10);
  [['입력',230],['처리 코드',455],['실행 장치 · 변경 조건',655],['출력',970]].forEach(([t,x])=>text(s,t,x,476,260,27,21,C.sub,true));
  const groups=[
   [64,'기존 가정','어떤 조건에서 맞던 판단인가?'],
   [456,'측정 조건','입력과 실행 조건은 비교 가능한가?'],
   [848,'기능 계약','함께 다시 확인할 동작은?']
  ];
  for(const [x,t,b] of groups){label(s,t,x,506,368,25);text(s,b,x,540,368,28,22,C.sub);}
  text(s,'같은 문제가 반복될 때, 어느 Layer를 먼저 살펴볼까?',64,569,1152,29,27,C.ink,true);
  return s;
 }
};

const notes={};
for(const act of [0,3,4]){
 const md=await fs.readFile(path.join(ROOT,`production/notes/ACT_${act}_NOTES.md`),'utf8');
 for(const m of md.matchAll(/^## (S\d\d) — [\s\S]*?(?=^## S\d\d|$(?![\s\S]))/gm))if(ids.includes(m[1]))notes[m[1]]=m[0].trim();
}
function addToField(n,field,extra){return n.replace(new RegExp('^'+field+': (.*)$','m'),(_,v)=>field+': '+v+' '+extra);}
for(const id of ids)notes[id]=notes[id].replace(/^\*\*([^*\n]+):\*\*\n/gm,(_,field)=>field==='Speaker Flow'?field+':\n\n':field+': ');
notes.S07=notes.S07.replaceAll('위쪽','왼쪽').replaceAll('아래쪽','오른쪽').replace('위·아래 관계','좌·우 관계').replace('본문 화살표는','본문 삽화는');
notes.S37=notes.S37.replace('서로 다른 두 Task goal을 나란히 보여준다.','처음 30초에 그림으로 작업 대상을 확인한다. 왼쪽은 크기 변경, 오른쪽은 선언된 max_value를 255로 스케일하는 값 범위 변환이다. 0→0, 2048→128, 4095→255를 설명할 수 있지만 화질 개선으로 표현하지 않는다. 이어 두 Task goal을 비교한다.');
notes.S37=addToField(notes.S37,'Claim Boundary','그림은 기능 설명용 개념 예시이며 Trial의 입력·출력 파일이나 최적화 전후 결과가 아니다.');
notes.S37=addToField(notes.S37,'Evidence / Source','함수 계약 참고: Demo STATE-04의 src/graypipe/transform.py 및 normalize.py.');
notes.S37=notes.S37.replace(/^Demo Operation:.*$/m,'Demo Operation: 위는 기능 설명용 AI 삽화, 아래는 TRIAL-006/007 기록에서 확인한 반복 절차 요약이다. 같은 grayscale tile을 크기만 달리하거나 동일 크기로 배치해 작업의 차이를 설명한다. 새로운 실행이나 실제 터미널 화면이라고 말하지 않는다.');
notes.S53=addToField(notes.S53,'Demo Operation','그림은 가정적 Vision 업무의 Lecture용 삽화다. 입력·처리·결과를 가리키며 기준 조건, 조사 위치, 검증 범위를 연결한다.');
notes.S53=notes.S53.replace('Python Demo와 C++ Vision의 공통 질문이 표의 중심임을 안내한다.','가정적 Vision 업무 장면임을 밝히고, 입력·처리·결과를 가리키며 Python Demo와 C++ Vision의 공통 질문을 안내한다.').replace('확인 방법의 세 행을 따라','확인 방법의 세 질문을 따라');
notes.S72=notes.S72.replace('첫 두 행을 가리킨다.','그림의 입력·코드·장치와 기존 가정·측정 조건 질문을 가리킨다.').replace('기능 계약 행에서','출력 그림과 기능 계약 질문에서').replaceAll('세 행','세 질문');
notes.S72=notes.S72.replace('기존 세 질문의 질문 안에서','기존 세 질문의 범위에서');
notes.S72=addToField(notes.S72,'Demo Operation','정적 삽화의 입력→처리 코드→실행 장치→출력을 차례로 가리킨다. 황색 장치·설정 표시는 검토할 조건의 변화이며 실패 원인이 확정됐다는 뜻이 아니다.');
notes.S72=addToField(notes.S72,'Time Management','0–2분 전체 그림/변경 표식, 2–4:30분 입력·코드·장치의 가정과 비교 조건, 4:30–7분 출력·기능 계약을 설명한다. 이후 7–9분 Reflection, 9–16분 Q&A, 16–20분 Transition을 유지한다.');
for(const id of ids){
 notes[id]=addToField(notes[id],'Evidence / Source',`삽화 출처: prototype/image-illustration-pilot/assets/${id}.png, built-in image_gen, 2026-10-18. 생성 프롬프트: prototype/image-illustration-pilot/PROMPTS.md. 실제 화면·현장 사진·관찰 자료가 아니다.`);
 if(['S37','S53'].includes(id))notes[id]=notes[id].replace(/^Fallback:.*$/m,`Fallback: 이 검토본의 정적 경로는 prototype/image-illustration-pilot/preview/${id}.png다. 파일을 열 수 없다면 기존 production/ACT_3.pptx의 같은 Slide에서 원래 도식으로 설명할 수 있다. 두 버전 모두 실제 Trial 캡처나 현재 제품 실행으로 표현하지 않는다.`);
 else notes[id]=addToField(notes[id],'Fallback',`검토본 정적 파일: prototype/image-illustration-pilot/preview/${id}.png.`);
 notes[id]=notes[id].replace(/^Validation Status:.*$/m,'Validation Status: PILOT — 설명용 삽화의 역할과 기존 Claim을 대조한다. 로컬 렌더 검토 결과는 이 Pilot의 REVIEW.md에 기록한다. Windows PowerPoint, 교육장, 실제 시간 리허설은 UNVERIFIED.');
}
await fs.writeFile(path.join(DEST,'PILOT_NOTES.md'),'# Illustration Pilot Notes\n\nScope: S07, S37, S53, S72. Original Slide IDs and the 19-field schema are preserved. This is a four-slide review copy, not a new curriculum.\n\n'+ids.map(id=>notes[id]).join('\n\n')+'\n');
const stamp=new Date().toISOString().replace(/[:.]/g,'-');
const build=path.join(WORK,'build',stamp),out=path.join(WORK,'output',stamp);
await fs.mkdir(build,{recursive:true});await fs.mkdir(out,{recursive:true});
const p=Presentation.create({slideSize:{width:1280,height:720}});p.theme.defaultFont=H.FONT;
for(const id of ids){const s=factories[id](p);s.speakerNotes.text=notes[id];}
const candidate=path.join(build,'candidate.pptx'),final=path.join(out,'AI_Dev_Training_Image_Pilot.pptx');
await(await PresentationFile.exportPptx(p)).save(candidate);
const reference=path.join(ROOT,'production/AI_Dev_Training_Full.pptx');
await finalizePresentation({workspaceDir:WORK,candidatePath:candidate,finalPath:final,pythonExecutable:process.env.RUNTIME_PYTHON,
 integrityValidatorPath:path.join(SKILL,'container_tools/inspect_presentation_package_integrity.py'),
 layoutValidatorPath:path.join(SKILL,'container_tools/inspect_presentation_layout_geometry.py'),
 layoutArgs:['--expected-slide-size-emu','12192000,6858000','--validate-bullet-geometry','--validate-heading-fit'],
 explicitTotalSlideCount:4,requiredNativeChartOwnerSlides:[],requiredNativeTableOwnerSlides:[],
 fontPolicy:{basis:'reference',families:[H.FONT,H.CODE],referencePath:reference,referenceSha256:createHash('sha256').update(await fs.readFile(reference)).digest('hex')},
 verifyArtifactToolImport:true,receiptPath:path.join(build,'validation.json')});
const rendered=await PresentationFile.importPptx(await FileBlob.load(final));
await fs.mkdir(path.join(out,'preview'),{recursive:true});
for(let i=0;i<ids.length;i++){
 const s=rendered.slides.items[i];
 const png=await rendered.export({slide:s,format:'png',scale:1.5});
 await fs.writeFile(path.join(out,'preview',ids[i]+'.png'),new Uint8Array(await png.arrayBuffer()));
 const layout=await s.export({format:'layout'});await fs.writeFile(path.join(build,ids[i]+'.layout.json'),await layout.text());
 console.log('Rendered '+ids[i]);
}
const canvas=createCanvas(1920,1080),ctx=canvas.getContext('2d');
for(let i=0;i<ids.length;i++)ctx.drawImage(await loadImage(path.join(out,'preview',ids[i]+'.png')),i%2*960,Math.floor(i/2)*540,960,540);
await fs.writeFile(path.join(out,'preview','montage.png'),await canvas.encode('png'));
await fs.writeFile(path.join(WORK,'latest.json'),JSON.stringify({build,out,final},null,2));
console.log('BUILD_COMPLETE '+out);
