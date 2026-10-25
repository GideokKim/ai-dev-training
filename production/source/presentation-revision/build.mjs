/** Build the accepted presentation revision using native Artifact Tool objects. */
import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';
import { createHash } from 'node:crypto';
import * as H from './helpers.mjs';
import {priorityFactories,addModuleFooter} from './legacy-priority.mjs';
import {promptTechniqueFactories} from './prompt-techniques.mjs';

const here=path.dirname(fileURLToPath(import.meta.url));
const ROOT=process.env.TRAINING_REPO??path.resolve(here,'../../..');
const WORK=process.env.PRESENTATION_WORK_DIR;
const SKILL=process.env.PRESENTATION_SKILL_DIR;
const MODULES=process.env.RUNTIME_NODE_MODULES;
if(!WORK||!SKILL||!MODULES)throw new Error('Set PRESENTATION_WORK_DIR, PRESENTATION_SKILL_DIR and RUNTIME_NODE_MODULES.');
const runtimeRequire=createRequire(path.join(MODULES,'__presentation_runtime__.cjs'));
const {Presentation,PresentationFile,FileBlob}=await import(pathToFileURL(runtimeRequire.resolve('@oai/artifact-tool')).href);
const {GlobalFonts,createCanvas,loadImage}=runtimeRequire('@napi-rs/canvas');
const aliases=[
 [process.env.KOREAN_PREVIEW_FONT,'Malgun Gothic'],
 [process.env.CODE_PREVIEW_FONT,'Consolas']
];
for(const [file,name] of aliases)if(file&&existsSync(file))GlobalFonts.registerFromPath(file,name);
const {finalizePresentation}=await import(pathToFileURL(path.join(SKILL,'container_tools/artifact_tool_utils.mjs')).href);
const mapText=await fs.readFile(path.join(ROOT,'plan/SLIDE_MAP.md'),'utf8');
const map={};
for(const m of mapText.matchAll(/^#### (S\d\d) — ([\s\S]*?)(?=^#### S\d\d|^## |$(?![\s\S]))/gm)){
 map[m[1]]=Object.fromEntries([...m[2].matchAll(/^- \*\*([^*]+):\*\* (.*)$/gm)].map(x=>[x[1],x[2]]));
}
if(Object.keys(map).length!==99)throw new Error('Expected 99 source records.');
const factories={};
for(const name of ['act01','act23','act45','pilot']){
 const file=path.join(here,name+'.mjs');
 if(existsSync(file))Object.assign(factories,(await import(pathToFileURL(file).href)).slides);
}
// Apply the user-approved illustration pilot after the original factories.
Object.assign(factories,await (await import('./illustrations.mjs')).loadIllustrationSlides(ROOT));
Object.assign(factories,await (await import('./additional-visuals.mjs')).loadAdditionalVisuals(ROOT));
// Apply the approved full-deck readability and presentation-flow revision.
for(const name of ['polish-early','polish-late'])Object.assign(factories,(await import(`./${name}.mjs`)).slides);
Object.assign(factories,await (await import('./polish-harness.mjs')).loadHarnessPolishSlides(ROOT));
Object.assign(factories,await (await import('./polish-visuals.mjs')).loadVisualPolishSlides(ROOT));
Object.assign(factories,await (await import('./act0-opening.mjs')).loadAct0OpeningSlides(ROOT));
Object.assign(factories,await (await import('./product-entry.mjs')).loadProductEntrySlides(ROOT));
Object.assign(factories,await (await import('./prompt-timelines.mjs')).loadPromptTimelineSlides(ROOT));
Object.assign(factories,priorityFactories(factories,H));
Object.assign(factories,promptTechniqueFactories(H));
Object.assign(factories,await (await import('./act2-continuity.mjs')).loadAct2ContinuitySlides(ROOT,factories));
Object.assign(factories,await (await import('./act3-continuity.mjs')).loadAct3ContinuitySlides(ROOT,factories));
Object.assign(factories,(await import('./act34-handoff.mjs')).loadAct34HandoffSlides(factories));
Object.assign(factories,(await import('./act4-flow.mjs')).loadAct4FlowSlides(factories));
Object.assign(factories,(await import('./act5-flow.mjs')).loadAct5FlowSlides());
Object.assign(factories,(await import('./act5-reassessment.mjs')).loadAct5ReassessmentSlides());
// Retained factories are the 96-slide source edition. Apply the approved
// numbering once, then replace only the expanded ACT0 sequence.
const migrated=(await import('./slide-numbering-99.mjs')).migrate96Factories(factories);
for(const id of Object.keys(factories))delete factories[id];
Object.assign(factories,migrated);
Object.assign(factories,await (await import('./act0-context-expansion.mjs')).loadAct0ContextExpansionSlides(ROOT));
const moduleMap=JSON.parse(await fs.readFile(path.join(here,'legacy-module-map.json'),'utf8'));
if(moduleMap.slides.length!==99)throw new Error('Expected 99 legacy module mappings.');
const moduleRecords=Object.fromEntries(moduleMap.slides.map(r=>[r.slideId,r]));
const notes={};
for(let act=0;act<6;act++){
 const text=await fs.readFile(path.join(ROOT,`production/notes/ACT_${act}_NOTES.md`),'utf8');
 for(const m of text.matchAll(/^## (S\d\d) — [\s\S]*?(?=^## S\d\d|$(?![\s\S]))/gm))notes[m[1]]=m[0].trim();
}
const idsArg=process.argv.find(a=>a.startsWith('--ids='))?.slice(6);
const ids=idsArg?idsArg.split(','):Object.keys(map);
const missing=ids.filter(id=>!factories[id]);if(missing.length)throw new Error('Missing authoring functions: '+missing.join(','));
const stamp=process.env.PRESENTATION_BUILD_ID??new Date().toISOString().replace(/[:.]/g,'-');
const buildDir=path.join(WORK,'build',stamp),outDir=path.join(WORK,'output',stamp);
await fs.mkdir(buildDir,{recursive:true});await fs.mkdir(outDir,{recursive:true});
const record={buildId:stamp,slideIds:ids,outputDirectory:outDir,notesCoverage:0,artifacts:[]};
const decks=[{name:'AI_Dev_Training_Full',ids}];
if(process.argv.includes('--release')){
 const selectedActs=process.argv.find(a=>a.startsWith('--release-acts='))?.slice(15).split(',').map(Number)??[0,1,2,3,4,5];
 for(const act of selectedActs)decks.push({name:`ACT_${act}`,ids:ids.filter(id=>map[id].ACT===`ACT ${act}`)});
}
const baseline=process.env.PRESENTATION_BASELINE??path.join(ROOT,'production/AI_Dev_Training_Full.pptx');
for(const deck of decks){
 const p=Presentation.create({slideSize:{width:1280,height:720}});p.theme.defaultFont=H.FONT;
 for(const id of deck.ids){
  const before=p.slides.items.length;const s=factories[id](p,H);
  if(p.slides.items.length!==before+1)throw new Error('Each factory must add exactly one slide: '+id);
  addModuleFooter(s,id,moduleRecords[id],H);
  if(!notes[id])throw new Error('Missing Notes '+id);
  s.speakerNotes.text=notes[id];
 }
 const candidate=path.join(buildDir,deck.name+'.candidate.pptx');await(await PresentationFile.exportPptx(p)).save(candidate);
 let final=candidate,receipt;
 if(process.argv.includes('--release')){
  final=path.join(outDir,deck.name+'.pptx');
  const chartOwners=deck.ids.map((id,i)=>id==='S61'?i+1:0).filter(Boolean);
  const tableOwners=deck.ids.map((id,i)=>['S50','S58','S80'].includes(id)?i+1:0).filter(Boolean);
  receipt=await finalizePresentation({
   workspaceDir:WORK,candidatePath:candidate,finalPath:final,
   pythonExecutable:process.env.RUNTIME_PYTHON,
   integrityValidatorPath:path.join(SKILL,'container_tools/inspect_presentation_package_integrity.py'),
   layoutValidatorPath:path.join(SKILL,'container_tools/inspect_presentation_layout_geometry.py'),
   layoutArgs:['--expected-slide-size-emu','12192000,6858000','--validate-bullet-geometry','--validate-heading-fit',...tableOwners.flatMap(owner=>['--require-native-table-slide',String(owner)])],
   explicitTotalSlideCount:deck.ids.length,requiredNativeChartOwnerSlides:chartOwners,requiredNativeTableOwnerSlides:tableOwners,materializeLiteralChartWorkbooks:true,
   fontPolicy:{basis:'reference',families:[H.FONT,H.CODE],referencePath:baseline,referenceSha256:createHash('sha256').update(await fs.readFile(baseline)).digest('hex')},
   verifyArtifactToolImport:true,receiptPath:path.join(buildDir,deck.name+'.validation.json')
  });
 }
 // Render the exact package that will be delivered, including materialized charts.
 const rendered=await PresentationFile.importPptx(await FileBlob.load(final));
 const dir=path.join(outDir,'preview',deck.name==='AI_Dev_Training_Full'?'full':deck.name.toLowerCase().replace('_',''));
 await fs.mkdir(dir,{recursive:true});
 for(let i=0;i<deck.ids.length;i++){
  const s=rendered.slides.items[i],id=deck.ids[i];
  const image=await rendered.export({slide:s,format:'png',scale:1.5});await fs.writeFile(path.join(dir,id+'.png'),new Uint8Array(await image.arrayBuffer()));
  const layout=await s.export({format:'layout'});await fs.writeFile(path.join(buildDir,deck.name+'-'+id+'.layout.json'),await layout.text());
  if(i%10===9||i===deck.ids.length-1)console.log(deck.name+': rendered '+(i+1)+'/'+deck.ids.length);
 }
 // Assemble a readable contact sheet from the already-rendered slide PNGs.
 const columns=deck.name==='AI_Dev_Training_Full'?4:3,tileWidth=1920/columns,tileHeight=tileWidth*9/16;
 const canvas=createCanvas(1920,Math.ceil(deck.ids.length/columns)*tileHeight),ctx=canvas.getContext('2d');
 ctx.fillStyle='#E4E9EE';ctx.fillRect(0,0,canvas.width,canvas.height);
 for(let i=0;i<deck.ids.length;i++)ctx.drawImage(await loadImage(path.join(dir,deck.ids[i]+'.png')),i%columns*tileWidth,Math.floor(i/columns)*tileHeight,tileWidth,tileHeight);
 await fs.writeFile(path.join(dir,'montage.png'),await canvas.encode('png'));
 record.artifacts.push({name:deck.name,path:final,slideCount:deck.ids.length,sha256:createHash('sha256').update(await fs.readFile(final)).digest('hex'),preview:dir,validated:!!receipt});
}
record.notesCoverage=ids.filter(id=>notes[id]).length;
await fs.writeFile(path.join(outDir,'build-summary.json'),JSON.stringify(record,null,2)+'\n');
console.log('BUILD_COMPLETE '+outDir);
