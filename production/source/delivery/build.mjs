/** Package the approved presenter artifacts without editing the presentation. */
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';
import {createRequire} from 'node:module';
import {createHash} from 'node:crypto';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../../..');
const work=process.env.DELIVERY_WORK_DIR;
const modules=process.env.RUNTIME_NODE_MODULES;
if(!work||!modules)throw new Error('Set DELIVERY_WORK_DIR outside the repository and RUNTIME_NODE_MODULES.');
if(path.resolve(work).startsWith(root+path.sep))throw new Error('Staging must be outside the repository.');
const require=createRequire(path.join(modules,'__delivery_runtime__.cjs'));
const {Marked,Renderer}=await import(pathToFileURL(require.resolve('marked')).href);
const JSZip=require('jszip');
const date='2026-10-21',name='AI_Dev_Training_Presenter_'+date;
const artifactCommit=process.env.PRESENTATION_ARTIFACT_COMMIT;
if(!/^[a-f0-9]{7,40}$/.test(artifactCommit??''))throw new Error('Set PRESENTATION_ARTIFACT_COMMIT to the reviewed artifact commit.');
const stamp=new Date(date+'T00:00:00.000Z');
const output=path.join(root,'delivery');
await fs.mkdir(work,{recursive:true});
const stage=await fs.mkdtemp(path.join(work,name+'-'));
const sha=b=>createHash('sha256').update(b).digest('hex');
const escape=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const assert=(condition,message)=>{if(!condition)throw new Error(message);};
const read=async p=>fs.readFile(path.join(root,p));
const payload=new Map(),documents=new Set();
const parser=new Marked({gfm:true});
const external=href=>/^[a-z][a-z\d+.-]*:/i.test(href)||href.startsWith('//');
function localTarget(from,href){
 if(!href||href.startsWith('#')||external(href))return null;
 const file=decodeURIComponent(href.split('#')[0].split('?')[0]);
 assert(!file.startsWith('/'),'Absolute local link: '+from+' '+href);
 const target=path.posix.normalize(path.posix.join(path.posix.dirname(from),file));
 assert(!target.startsWith('../'),'Link escapes package: '+from+' '+href);
 return target;
}
async function add(p){
 if(payload.has(p))return;
 assert(!p.split('/').some(part=>part.startsWith('.')),'Hidden payload: '+p);
 assert(/^(production|demos\/runbooks|plan|references)\//.test(p),'Unexpected source area: '+p);
 assert(!p.startsWith('production/source/')&&!p.startsWith('production/evaluation/MASTER_EXECUTION_STATUS'),'Source/history excluded: '+p);
 assert(/\.(md|json|png|pptx)$/.test(p),'Unsupported payload: '+p);
 const info=await fs.lstat(path.join(root,p));assert(info.isFile()&&!info.isSymbolicLink(),'Not an ordinary file: '+p);
 payload.set(p,await read(p));
 if(!p.endsWith('.md'))return;
 documents.add(p);
 const links=[];
 parser.walkTokens(parser.lexer(payload.get(p).toString('utf8')),t=>{if(t.type==='link'||t.type==='image')links.push(t.href);});
 for(const href of links){const target=localTarget(p,href);if(target)await add(target);}
}
const primary=['production/AI_Dev_Training_Full.pptx','production/notes/FULL_SPEAKER_NOTES.md','production/presenter/EXPECTED_QA.md','production/evaluation/USER_VALIDATION_CHECKLIST.md','production/evaluation/FINAL_HANDOFF.md','production/evaluation/PRESENTER_PACKAGE_RESULT.md','production/evaluation/LEGACY_PRIORITY_REVISION.md','production/evaluation/LEGACY_PRIORITY_REVISION_VALIDATION.json','production/evaluation/LEGACY_MODULE_MAP.md'];
for(const p of primary)await add(p);
for(let a=0;a<6;a++){
 await add(`production/ACT_${a}.pptx`);await add(`production/notes/ACT_${a}_NOTES.md`);
 for(const p of await fs.readdir(path.join(root,`production/preview/act${a}`)))if(p.endsWith('.png'))await add(`production/preview/act${a}/${p}`);
}
for(const p of await fs.readdir(path.join(root,'production/preview/full'))){
 if(/^S\d\d\.png$/.test(p)||['montage.png','legacy-reinforcement-montage.png'].includes(p))await add('production/preview/full/'+p);
}
for(const p of await fs.readdir(path.join(root,'demos/runbooks')))if(p.endsWith('.md'))await add('demos/runbooks/'+p);

const validation=JSON.parse(payload.get('production/evaluation/LEGACY_PRIORITY_REVISION_VALIDATION.json'));
for(const p of validation.packages)assert(sha(payload.get(p.file))===p.sha256,'Artifact differs from reviewed release: '+p.file);
const map=payload.get('plan/SLIDE_MAP.md').toString('utf8');
const slides=[...map.matchAll(/^#### (S\d\d) — ([^\n]+)\n([\s\S]*?)(?=^#### S\d\d|^## |$(?![\s\S]))/gm)].map(m=>({id:m[1],title:m[2],fields:Object.fromEntries([...m[3].matchAll(/^- \*\*([^*]+):\*\* (.*)$/gm)].map(x=>[x[1],x[2]]))}));
assert(slides.length===80,'Slide Map count');
const actMinutes=[0,0,0,0,0,0],actCounts=[0,0,0,0,0,0],modeMinutes={Lecture:0,Demo:0,Case:0,Reflection:0,Transition:0,'Q&A':0};
for(const [i,s]of slides.entries()){
 assert(s.id==='S'+String(i+1).padStart(2,'0'),'Slide order');
 const a=Number(s.fields.ACT.slice(-1)),minutes=Number(s.fields['Estimated Time'].match(/[\d.]+/)[0]);actCounts[a]++;actMinutes[a]+=minutes;
 const modes=[...s.fields['Delivery Mode Allocation'].matchAll(/(Lecture|Demo|Case|Reflection|Transition|Q&A)\s+([\d.]+)분/g)];
 assert(modes.reduce((sum,m)=>sum+Number(m[2]),0)===minutes,s.id+' time/Mode mismatch');
 for(const m of modes)modeMinutes[m[1]]+=Number(m[2]);
 const full=`production/preview/full/${s.id}.png`,act=`production/preview/act${a}/${s.id}.png`;
 assert(sha(payload.get(full))===sha(payload.get(act)),s.id+' preview mismatch');
 for(const p of [full,act]){const b=payload.get(p);assert(b.readUInt32BE(16)===1920&&b.readUInt32BE(20)===1080,p+' dimensions');}
}
assert(JSON.stringify(actCounts)==='[9,12,15,18,18,8]','ACT count');
assert(JSON.stringify(actMinutes)==='[40,55,70,85,80,30]','ACT time');
assert(JSON.stringify(modeMinutes)===JSON.stringify({Lecture:130,Demo:73,Case:83,Reflection:20,Transition:22,'Q&A':32}),'Mode total');
const qa=payload.get('production/presenter/EXPECTED_QA.md').toString('utf8');
assert([...qa.matchAll(/^### \d{2}\. /gm)].length===25,'Q&A count');
const normalize=s=>s.replace(/\s+/g,' ').trim();
const records=text=>Object.fromEntries([...text.matchAll(/^## (S\d\d) — [\s\S]*?(?=^## S\d\d|$(?![\s\S]))/gm)].map(m=>[m[1],m[0].trim()]));
const notes=records(payload.get('production/notes/FULL_SPEAKER_NOTES.md').toString('utf8'));
const xmlText=xml=>[...xml.matchAll(/<a:t(?:\s[^>]*)?>([\s\S]*?)<\/a:t>/g)].map(m=>m[1].replace(/&(#x[\da-f]+|#\d+|amp|lt|gt|quot|apos);/gi,(_,entity)=>{
 if(entity.startsWith('#x'))return String.fromCodePoint(parseInt(entity.slice(2),16));
 if(entity.startsWith('#'))return String.fromCodePoint(Number(entity.slice(1)));
 return {amp:'&',lt:'<',gt:'>',quot:'"',apos:"'"}[entity];
})).join(' ');
assert(Object.keys(notes).length===80,'Full Notes count');
for(const name of ['AI_Dev_Training_Full',...Array.from({length:6},(_,a)=>`ACT_${a}`)]){
 const ids=name==='AI_Dev_Training_Full'?slides.map(s=>s.id):slides.filter(s=>s.fields.ACT===`ACT ${name.slice(-1)}`).map(s=>s.id);
 const deck=await JSZip.loadAsync(payload.get(`production/${name}.pptx`),{checkCRC32:true});
 if(name!=='AI_Dev_Training_Full'){
  const subset=records(payload.get(`production/notes/${name}_NOTES.md`).toString('utf8'));
  assert(JSON.stringify(Object.keys(subset))===JSON.stringify(ids),name+' Notes order');
  for(const id of ids)assert(normalize(subset[id])===normalize(notes[id]),id+' Markdown Notes mismatch');
 }
 for(const[i,id]of ids.entries()){
  const xml=await deck.file(`ppt/notesSlides/notesSlide${i+1}.xml`).async('string');
  assert(normalize(xmlText(xml))===normalize(notes[id]),name+' '+id+' embedded Notes mismatch');
 }
}
const checklist=payload.get('production/evaluation/USER_VALIDATION_CHECKLIST.md').toString('utf8');
assert(!/^- \[[xX]\]/m.test(checklist),'Human checks must remain unchecked');
for(const p of ['production/evaluation/USER_VALIDATION_CHECKLIST.md','production/evaluation/FINAL_HANDOFF.md']){
 const document=payload.get(p).toString('utf8');
 assert(document.includes(sha(payload.get('production/AI_Dev_Training_Full.pptx'))),'Stale PPT identity: '+p);
 assert(document.includes(sha(payload.get('production/notes/FULL_SPEAKER_NOTES.md'))),'Stale Notes identity: '+p);
}

const css=`:root{color-scheme:light}body{margin:0;background:#f4f6f8;color:#17212b;font:18px/1.65 system-ui,-apple-system,"Malgun Gothic",sans-serif}main{max-width:1120px;margin:auto;padding:32px 28px 80px}h1{font-size:36px;line-height:1.25}h2{margin-top:2em;border-top:1px solid #c7d0da;padding-top:.8em}h3{margin-top:1.5em}a{color:#0b6172;text-underline-offset:3px}nav{display:flex;gap:22px;flex-wrap:wrap;margin:0 0 24px}.status{background:#faeac9;padding:16px 22px;border-left:5px solid #805400}.muted{color:#4d5a68}table{width:100%;border-collapse:collapse;margin:20px 0;display:block;overflow:auto}th,td{border:1px solid #c7d0da;padding:10px 14px;text-align:left;vertical-align:top}code{font: .88em/1.5 Consolas,monospace;overflow-wrap:anywhere}pre{padding:16px;background:white;overflow:auto}pre code{white-space:pre-wrap}blockquote{border-left:4px solid #c7d0da;margin-left:0;padding-left:20px}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px}.grid figure{margin:0}.grid img,.slide{width:100%;height:auto;display:block}.grid img{border:1px solid #c7d0da}figcaption{font-size:15px}.large{display:inline-block;background:#0b6172;color:white;padding:12px 18px;text-decoration:none;border-radius:5px}.toc{columns:2;column-gap:40px}.toc li{break-inside:avoid;margin-bottom:8px}footer{margin-top:48px;border-top:1px solid #c7d0da;padding-top:12px;font-size:15px}input{width:18px;height:18px} @media(max-width:700px){main{padding:20px 14px}h1{font-size:28px}.toc{columns:1}}`;
function html(title,body,from='START_HERE.html'){
 const back=path.posix.relative(path.posix.dirname(from),'START_HERE.html')||'START_HERE.html';
 return `<!doctype html>\n<html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escape(title)}</title><style>${css}</style></head><body><main><nav><a href="${back}">발표자료 시작</a></nav>${body}<footer>DEC-0033 승인 보강·M 연계 발표자료 / 최신 묶음 · 실환경·리허설 UNVERIFIED · 외부 출처 링크는 인터넷이 필요합니다.</footer></main></body></html>\n`;
}
const slug=s=>s.toLowerCase().replace(/[^\p{L}\p{N}\p{M} _-]/gu,'').replaceAll(' ','-');
let sourceLinkCount=0;
for(const p of [...documents].sort()){
 const headings=[],used=new Map(),renderer=new Renderer();
 const routed=href=>{
  const target=localTarget(p,href);if(!target)return href;
  sourceLinkCount++;
  assert(payload.has(target),'Missing Markdown target '+p+' '+href);
  return target.endsWith('.md')?href.replace(/\.md(?=[?#]|$)/,'.html'):href;
 };
 renderer.heading=function(t){
  const base=/^S\d\d\b/.test(t.text)?t.text.slice(0,3).toLowerCase():slug(t.text);const n=used.get(base)||0;used.set(base,n+1);const id=base+(n?'-'+n:'');
  headings.push({id,title:t.text,level:t.depth});
  return `<h${t.depth} id="${escape(id)}">${this.parser.parseInline(t.tokens)}</h${t.depth}>\n`;
 };
 renderer.link=function(t){assert(!/^javascript:/i.test(t.href),'Unsafe link');return `<a href="${escape(routed(t.href))}">${this.parser.parseInline(t.tokens)}</a>`;};
 renderer.image=t=>{assert(!external(t.href),'Remote image not packaged');return `<img src="${escape(routed(t.href))}" alt="${escape(t.text)}" loading="lazy">`;};
 renderer.html=t=>escape(t.text);
 const md=new Marked({gfm:true,renderer});const content=md.parse(payload.get(p).toString('utf8'));
 const out=p.replace(/\.md$/,'.html');
 const toc=headings.filter(h=>(h.level===2||h.level===3)&&!h.title.startsWith('S')).map(h=>`<li><a href="#${escape(h.id)}">${escape(h.title)}</a></li>`).join('');
 const title=headings[0]?.title||path.basename(p);
 payload.set(out,Buffer.from(html(title,`<p class="muted">Markdown의 읽기용 HTML입니다. 과거 근거·제품 정보의 날짜와 범위를 유지합니다.</p>${toc?'<details><summary>문서 목차</summary><ul class="toc">'+toc+'</ul></details>':''}${content}`,out)));
}
const slideLinks=slides.map(s=>`<figure><a href="slides/${s.id}.html"><img loading="lazy" src="production/preview/full/${s.id}.png" alt="${escape(s.id+' '+s.title)}"></a><figcaption>${escape(s.id+' · '+s.title)}</figcaption></figure>`).join('');
const actRows=Array.from({length:6},(_,a)=>`<tr><td>ACT ${a}</td><td>${actCounts[a]}장 / ${actMinutes[a]}분</td><td><a href="production/ACT_${a}.pptx">PPT 열기</a></td><td><a href="production/notes/ACT_${a}_NOTES.html">발표자 Notes</a></td><td><a href="production/preview/act${a}/montage.png">전체 보기</a></td></tr>`).join('');
const fallback=payload.get('demos/runbooks/FALLBACK_MANIFEST.md').toString('utf8');
const demoRows=[];
for(const m of fallback.matchAll(/^- `([^`]+)`: (.+)$/gm)){
 if(!/^DEMO-|LOOP-VISUAL/.test(m[1]))continue;
 const id=m[1],book=id==='LOOP-VISUAL'?'loop-visual':id.toLowerCase();
 const links=[...m[2].matchAll(/`production\/preview\/full\/(S\d\d)\.png`/g)].map(q=>`<a href="slides/${q[1]}.html">${q[1]}</a>`).join(' → ');
 demoRows.push(`<tr><td>${escape(id)}</td><td><a href="demos/runbooks/${book}.html">진행 지침</a></td><td>${links}</td></tr>`);
}
assert(demoRows.length===14,'Expected 13 numbered paths and LOOP-VISUAL');
for(const [i,s]of slides.entries()){
 const a=Number(s.fields.ACT.slice(-1)),file=`slides/${s.id}.html`;
 const prev=i?`<a href="${slides[i-1].id}.html">← ${slides[i-1].id}</a>`:'',next=i<79?`<a href="${slides[i+1].id}.html">${slides[i+1].id} →</a>`:'';
 const body=`<h1>${escape(s.id+' · '+s.title)}</h1><p class="muted">${escape(s.fields.ACT+' · '+s.fields['Estimated Time']+' · '+s.fields['Delivery Mode Allocation'])}</p><nav>${prev}<a href="../production/notes/ACT_${a}_NOTES.html#${s.id.toLowerCase()}">이 장의 발표자 Notes</a>${next}</nav><a href="../production/preview/full/${s.id}.png"><img class="slide" src="../production/preview/full/${s.id}.png" alt="${escape(s.id+' '+s.title)}"></a><p>${escape(s.fields['Core Message'])}</p><p class="muted">화면의 관찰·개념·근거 경계는 기존 자료와 같습니다. 이 페이지는 PPT를 대체해 새 근거를 만드는 자료가 아닙니다.</p>`;
 payload.set(file,Buffer.from(html(s.id+' '+s.title,body,file)));
}
const body=`<h1>AI 개발자 교육 · 발표자료</h1><p class="status"><strong>로컬 자료 준비 완료 / 실환경·리허설 UNVERIFIED</strong><br>80장 · 순수 360분 · 발표자료 ${artifactCommit} / DEC-0033 · 묶음 ${date}</p><p>ZIP 전체를 압축 해제한 폴더에서 이 화면을 여세요. 자료 탐색은 인터넷·서버 없이 가능합니다. 실제 발표는 PowerPoint에서 진행합니다.</p><p><a class="large" href="production/AI_Dev_Training_Full.pptx">80장 통합 PPT 열기</a></p><nav><a href="production/notes/FULL_SPEAKER_NOTES.html">전체 발표자 Notes</a><a href="production/presenter/EXPECTED_QA.html">예상 질문·답변 25개</a><a href="production/evaluation/USER_VALIDATION_CHECKLIST.html">사용자 확인 체크리스트</a><a href="production/evaluation/FINAL_HANDOFF.html">전달 안내</a></nav><h2>발표 전에</h2><ol><li>실제 발표 PC의 PowerPoint에서 글꼴·발표자 보기와 화면을 확인하세요.</li><li>기본 Demo는 기록을 설명하는 정적 PPT/PNG입니다. 원본 실행 영상이나 현재 제품 실행으로 표현하지 않습니다.</li><li>Windows·교육장·현재 계정/Live·실측 리허설은 아직 확인하지 않았습니다. 강사용 준비 묶음이며 청중 배포 승인을 뜻하지 않습니다.</li><li>본문·Notes·FAQ의 시간과 근거 범위를 유지하세요. 휴식과 점심은 360분 외에 편성합니다.</li></ol><h2>ACT별 자료</h2><table><thead><tr><th>구간</th><th>분량</th><th>PPT</th><th>Notes</th><th>미리보기</th></tr></thead><tbody>${actRows}</tbody></table><h2>Demo별 정적 화면</h2><p>시작할 장 → 관찰할 근거 → 다음 장의 질문 순서로 진행하세요. Live/Hybrid는 별도 환경 확인과 리허설 전까지 비활성입니다.</p><table><thead><tr><th>Demo</th><th>진행 지침</th><th>정적 화면 순서</th></tr></thead><tbody>${demoRows.join('')}</tbody></table><h2>전체 80장</h2><p>하단 M 연계는 구 강의의 관련 내용·원칙을 뜻하며 모듈 전체 이수를 뜻하지 않습니다. 직접 연결이 없는 장은 신규 확장으로 표시합니다. <a href="production/evaluation/LEGACY_MODULE_MAP.html">80장 M 연결표</a></p><p><a href="production/preview/full/montage.png">전체 흐름 한눈에 보기</a> · <a href="production/preview/full/legacy-reinforcement-montage.png">최근 수정 대표 화면</a></p><div class="grid">${slideLinks}</div><h2>근거·파일 확인</h2><ul><li><a href="plan/SLIDE_MAP.html">공식 Slide Map</a> · <a href="plan/CLAIM_FREEZE.html">주장 범위</a></li><li><a href="production/evaluation/LEGACY_PRIORITY_REVISION.html">현재 로컬 검토</a> · <a href="demos/runbooks/FALLBACK_MANIFEST.html">Fallback 출처·해시</a></li><li><a href="PACKAGE_MANIFEST.json">묶음 파일 목록·SHA-256</a></li></ul><p class="muted">기획·연구·Trial 문서는 출처 확인용 보관 자료입니다. 과거 날짜의 제품 설명·실행 경로를 현재 지원이나 사용 지시로 해석하지 마세요. 외부 출처 링크는 인터넷이 필요합니다.</p>`;
payload.set('START_HERE.html',Buffer.from(html('AI 개발자 교육 · 발표자료',body)));
payload.set('README.md',Buffer.from(`# AI 개발자 교육 · 발표자 묶음\n\nZIP 전체를 압축 해제한 뒤 [START_HERE.html](START_HERE.html)을 여세요.\n\n80장/360분. 로컬 자료 준비 완료, 실환경·리허설 UNVERIFIED.\n기본 Demo는 정적 PPT/PNG입니다. 원본 터미널 캡처·녹화·현재 제품 실행을 뜻하지 않습니다.\nPowerPoint 발표는 실제 발표 PC에서 별도 확인해야 합니다.\n\n강사용 준비 묶음이며 청중 배포 또는 외부 전달 승인 완료를 뜻하지 않습니다.\n기획·Trial·연구 문서는 역사적 출처 확인용입니다.\n\n개별 파일은 PACKAGE_MANIFEST.json, ZIP 자체는 원본 ZIP 옆 sha256 파일로 확인합니다.\n별도 실행 코드·설정·계정·Demo 저장소를 포함하지 않습니다.\n`));
// Validate all relative HTML navigation against ordinary payload files.
let htmlLinks=0,externalLinks=0;
for(const [p,b]of payload){
 if(!p.endsWith('.html'))continue;
 const source=b.toString('utf8');assert(!/<script\b/i.test(source),'Unexpected script: '+p);
 for(const m of source.matchAll(/(?:href|src)="([^"]+)"/g)){
  const href=m[1].replaceAll('&amp;','&').replaceAll('&quot;','"');
  if(external(href)){externalLinks++;continue;}
  if(href==='PACKAGE_MANIFEST.json'&&p==='START_HERE.html')continue;
  const target=localTarget(p,href)||p;assert(payload.has(target),'Missing HTML target '+p+' '+href);htmlLinks++;
  const fragment=href.split('#')[1];
  if(fragment&&target.endsWith('.html'))assert(payload.get(target).toString('utf8').includes('id="'+decodeURIComponent(fragment)+'"'),'Missing HTML anchor '+p+' '+href);
 }
}
const files=[...payload].sort(([a],[b])=>a.localeCompare(b,'en')).map(([p,b])=>({path:p,bytes:b.length,sha256:sha(b),origin:documents.has(p)||/\.(pptx|png|json)$/.test(p)?'repository':'generated readable view'}));
const manifest={schemaVersion:1,package:name,date,timeZone:'Asia/Seoul',presentationArtifactCommit:artifactCommit,presentationDecision:'DEC-0033',packagingDecision:'DEC-0033',status:'PACKAGED — READY FOR USER VALIDATION',pptxSha256:sha(payload.get('production/AI_Dev_Training_Full.pptx')),notesSha256:sha(payload.get('production/notes/FULL_SPEAKER_NOTES.md')),slideCount:80,actCounts,actMinutes,modeMinutes,totalMinutes:360,faqCount:25,scope:{localFileIntegrity:'PASS',relativeHtmlLinks:'PASS',targetWindowsPowerPoint:'UNVERIFIED',targetFonts:'UNVERIFIED',actualPcOfflinePlayback:'UNVERIFIED',roomProjection:'UNVERIFIED',productAccountLive:'UNVERIFIED',timedRehearsal:'UNVERIFIED',externalDelivery:'NOT PERFORMED'},counts:{pptx:7,notes:7,fullSlidePngs:80,actSlidePngs:80,slideHtmlPages:80,runbookPaths:14,sourceMarkdown:documents.size,payloadFiles:files.length,htmlLinksChecked:htmlLinks,sourceLinksChecked:sourceLinkCount,externalLinksNotFetched:externalLinks},manifestExcludes:['PACKAGE_MANIFEST.json','ZIP archive','external ZIP checksum sidecar'],files};
const manifestBytes=Buffer.from(JSON.stringify(manifest,null,2)+'\n');payload.set('PACKAGE_MANIFEST.json',manifestBytes);
await fs.mkdir(output,{recursive:true});await fs.mkdir(stage,{recursive:true});
const zip=new JSZip();
for(const[p,b]of [...payload].sort(([a],[b])=>a.localeCompare(b,'en'))){
 const archivePath=name+'/'+p;assert(archivePath.length<230,'Windows path too long: '+archivePath);
 await fs.mkdir(path.dirname(path.join(stage,p)),{recursive:true});await fs.writeFile(path.join(stage,p),b);
 zip.file(archivePath,b,{date:stamp,unixPermissions:0o100644,createFolders:false});
}
const bytes=await zip.generateAsync({type:'nodebuffer',compression:'DEFLATE',compressionOptions:{level:6},platform:'UNIX'});
const loaded=await JSZip.loadAsync(bytes,{checkCRC32:true});assert(Object.keys(loaded.files).length===payload.size,'Archive count');
for(const[p,b]of payload){const entry=loaded.file(name+'/'+p);assert(entry&&sha(await entry.async('nodebuffer'))===sha(b),'Archive byte mismatch: '+p);}
const archivePath=path.join(output,name+'.zip');await fs.writeFile(archivePath,bytes);
await fs.writeFile(archivePath+'.sha256',sha(bytes)+'  '+name+'.zip\n');
await fs.writeFile(path.join(output,'PACKAGE_MANIFEST.json'),manifestBytes);
const result={date,package:name,archive:'delivery/'+name+'.zip',archiveSha256:sha(bytes),archiveBytes:bytes.length,payloadFiles:files.length,zipEntries:payload.size,crcAndPayloadHashes:'PASS',relativeHtmlFilesAndAnchors:'PASS',markdownSourceLinkClosure:'PASS',sourceArtifactHashesMatchReviewedRelease:true,embeddedAndMarkdownNotesMatch:true,counts:manifest.counts,sourcePptxUnchanged:true,sourceNotesUnchanged:true,userGates:manifest.scope};
await fs.writeFile(path.join(output,'PACKAGE_VALIDATION.json'),JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify({...result,privateExtractedDirectory:stage},null,2));
