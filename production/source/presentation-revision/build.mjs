/** Build the accepted presentation revision using native Artifact Tool objects. */
import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';
import { createHash } from 'node:crypto';
import * as H from './helpers.mjs';
import {loopOperationsFactories} from './act4-loop-operations.mjs';
import {priorityFactories,addModuleFooter} from './legacy-priority.mjs';
import {promptTechniqueFactories} from './prompt-techniques.mjs';
import {actTitleFactories} from './act-titles.mjs';
import {migrate108Factories,harnessReuseFactories} from './harness-reuse.mjs';
import {migrate113Factories,codexAuthoringTipFactories} from './codex-authoring-tips.mjs';
import {act4LoopControlFactories} from './act4-loop-control.mjs';
import {goalLoopFactories} from './act4-goal-loop.mjs';
import {goalTipFactories} from './goal-tips.mjs';
import {act5SynthesisFactories} from './act5-synthesis.mjs';
import {afterCopilotTip,migrate116Factories,copilotTipFactory} from './copilot-tip.mjs';
import {afterScopeTips,migrate117Factories,scopeTipFactories,scopeTipIds,scopeTipIndexFactory} from './agents-scope-tips.mjs';
import {applyAudienceFooter} from './audience-footers.mjs';
import {applyAct0Terminology} from './act0-terminology.mjs';
import {afterAct0Removal,beforeAct0Removal,applyCurrent119} from './act0-handoff-119.mjs';
import {afterVerificationSplit,beforeVerificationSplit,applyCurrent121,verificationRequestFactories} from './verification-request-121.mjs';
import {afterVerificationDesign,beforeVerificationDesign,applyCurrent120,verificationDesignFactories} from './verification-request-design.mjs';
import {contextHandoffFactories} from './act1-context-handoff.mjs';
import {migrate99Factories,practicalTipIndexFactories,addPracticalTipBadge} from './practical-tips.mjs';
import {beforeContextSequence,reorderContextFactories,applyContextSequence} from './context-sequence-120.mjs';
import {isSkillEvidenceSlide,beforeSkillEvidenceSplit,migrateSkillEvidenceFactories,applySkillEvidenceSplit} from './skill-evidence-split-122.mjs';
import {beforeS68Removal,migrateS68RemovalFactories,applyS68Removal} from './skill-evidence-removal-121.mjs';
import {beforeAct3Trim,migrateAct3TrimFactories,applyAct3Trim} from './act3-trim-119.mjs';
import {beforeMemoryMove,migrateMemoryMoveFactories,applyMemoryMove} from './memory-act5-119.mjs';
import {HARNESS_VISUAL_IDS,harnessVisualFactories} from './harness-visual-system.mjs';
import {beforeS78Removal,migrateS78RemovalFactories,applyS78Removal} from './s78-removal-118.mjs';
import {COMPACT_FRESH_IDS,beforeCompactHandoff,migrateCompactHandoffFactories,applyCompactHandoff} from './compact-handoff-114.mjs';
import {CURRENT_SLIDE_COUNT,beforeProcedureRecapRemoval,migrateProcedureRecapRemovalFactories,applyProcedureRecapRemoval} from './procedure-recap-removal-113.mjs';

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
for(const m of mapText.matchAll(/^#### (S\d{2,3}) — ([\s\S]*?)(?=^#### S\d{2,3}|^## |$(?![\s\S]))/gm)){
 map[m[1]]=Object.fromEntries([...m[2].matchAll(/^- \*\*([^*]+):\*\* (.*)$/gm)].map(x=>[x[1],x[2]]));
}
if(Object.keys(map).length!==CURRENT_SLIDE_COUNT)throw new Error(`Expected ${CURRENT_SLIDE_COUNT} source records.`);
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
const tipConfig=JSON.parse(await fs.readFile(path.join(here,'practical-tips.json'),'utf8'));
const titleConfig=JSON.parse(await fs.readFile(path.join(here,'act-titles.json'),'utf8'));
// Historical source factories keep the99-to108 stage. DEC-0091 then replaces
// two source pages with seven and preserves every ACT4 page and allocation.
const previous={...migrate108Factories(migrate99Factories(factories,tipConfig)),...harnessReuseFactories()};
const current=migrate113Factories(previous);
for(const id of Object.keys(factories))delete factories[id];
Object.assign(factories,current,codexAuthoringTipFactories());
Object.assign(factories,act4LoopControlFactories({...factories}));
// Replace ACT4 at the115-ID stage, delete its old S100, then shift ACT5 once.
// Current title/tip configurations contain116IDs after Goal-tip migration.
const goalLoop=goalTipFactories(goalLoopFactories({...factories}));
for(const id of Object.keys(factories))delete factories[id];
Object.assign(factories,goalLoop,act5SynthesisFactories(),practicalTipIndexFactories(tipConfig,H),actTitleFactories(titleConfig,H));
// Preserve the retained116-ID source stages and migrate once at the boundary.
const withCopilot=migrate116Factories({...factories});
for(const id of Object.keys(factories))delete factories[id];
Object.assign(factories,withCopilot,{S04:p=>copilotTipFactory(p,H)});
// Retain earlier source editions; apply the117-to120 boundary exactly once.
const withScope=migrate117Factories({...factories});
for(const id of Object.keys(factories))delete factories[id];
const currentId=id=>afterScopeTips(afterCopilotTip(id));
Object.assign(factories,withScope,scopeTipFactories(H),{S117:scopeTipIndexFactory(tipConfig,H,currentId)});
const tipRecords=Object.fromEntries(tipConfig.tips.map(t=>[currentId(t.slideId),t]));
tipRecords.S04={category:'사용 환경'};
for(const id of scopeTipIds)tipRecords[id]={category:'Context 관리'};
tipRecords.S117={category:'찾아보기'};
const moduleMap=JSON.parse(await fs.readFile(path.join(here,'legacy-module-map.json'),'utf8'));
if(moduleMap.slides.length!==116)throw new Error('Expected 116 legacy module mappings.');
const moduleRecords=Object.fromEntries(moduleMap.slides.map(r=>[currentId(r.slideId),{...r,slideId:currentId(r.slideId)}]));
moduleRecords.S04={slideId:'S04',footerLabel:'M 연계 · 신규 확장',modules:[],scope:'new_extension'};
for(const id of scopeTipIds)moduleRecords[id]={slideId:id,footerLabel:'M 연계 · 신규 확장',modules:[],scope:'new_extension'};
const audienceFooters=JSON.parse(await fs.readFile(path.join(here,'audience-footers.json'),'utf8'));
// Keep all retained inputs at their documented editions. Delete and renumber
// only once after the 120-ID source construction and before current Notes.
const factories119=Object.fromEntries(Object.entries(factories)
 .filter(([id])=>afterAct0Removal(id)!==null)
 .map(([id,factory])=>[afterAct0Removal(id),factory]));
for(const id of Object.keys(factories))delete factories[id];
Object.assign(factories,factories119);
// DEC-0112 is a final119-to121 boundary; retained inputs keep their editions.
const factories121=Object.fromEntries(Object.entries(factories)
 .filter(([id])=>id!=='S26')
 .map(([id,factory])=>[afterVerificationSplit(id),factory]));
for(const id of Object.keys(factories))delete factories[id];
Object.assign(factories,factories121,verificationRequestFactories(H),contextHandoffFactories(H));
// DEC-0114 removes only121-ID S28 and replaces the two request-design pages.
const factories120=Object.fromEntries(Object.entries(factories)
 .filter(([id])=>afterVerificationDesign(id)!==null)
 .map(([id,factory])=>[afterVerificationDesign(id),factory]));
for(const id of Object.keys(factories))delete factories[id];
Object.assign(factories,factories120,verificationDesignFactories(H));
// DEC-0125 keeps source metadata in its documented pre-reorder120 edition.
const reordered120=reorderContextFactories(factories);
for(const id of Object.keys(factories))delete factories[id];
Object.assign(factories,reordered120);
// DEC-0130 adds one final120-to122 boundary without changing retained inputs.
const split122=migrateSkillEvidenceFactories(factories,H);
for(const id of Object.keys(factories))delete factories[id];
Object.assign(factories,split122);
const removed121=migrateS68RemovalFactories(factories);
for(const id of Object.keys(factories))delete factories[id];
Object.assign(factories,removed121);
const trimmed119=migrateAct3TrimFactories(factories);
for(const id of Object.keys(factories))delete factories[id];
Object.assign(factories,trimmed119);
const memory119=migrateMemoryMoveFactories(factories,H);
for(const id of Object.keys(factories))delete factories[id];
Object.assign(factories,memory119);
Object.assign(factories,harnessVisualFactories(H));
// DEC-0135 deletes only the119-ID S78; retained source editions stay intact.
const removed118=migrateS78RemovalFactories(factories);
for(const id of Object.keys(factories))delete factories[id];
Object.assign(factories,removed118);
// DEC-0136 replaces five transition pages with one and removes their tip entry.
const compact114=migrateCompactHandoffFactories(factories,H);
for(const id of Object.keys(factories))delete factories[id];
Object.assign(factories,compact114);
// DEC-0138 removes the114-ID S68 without transferring its recap elsewhere.
const recapRemoved113=migrateProcedureRecapRemovalFactories(factories);
for(const id of Object.keys(factories))delete factories[id];
Object.assign(factories,recapRemoved113);
// ACT4 entries use final IDs and already contain their audience-facing labels.
const operations = loopOperationsFactories(H);
const lookupChanges = {
 S110: {'Goal이 목표와 다음 작업을 이어준다': map.S95['Working Title']},
 S112: {
  '모델 B는 무엇을 근거로 검토할까?': map.S83['Working Title'],
  S87: 'S85', '언제 계속하고, 언제 끝낼까?': map.S85['Working Title'],
  S96: 'S95', 'Goal에는 완료 근거와 멈출 조건을 담는다': map.S95['Working Title']
 }
};
const notes={};
for(let act=0;act<6;act++){
 const text=await fs.readFile(path.join(ROOT,`production/notes/ACT_${act}_NOTES.md`),'utf8');
 for(const m of text.matchAll(/^## (S\d{2,3}) — [\s\S]*?(?=^## S\d{2,3}|$(?![\s\S]))/gm))notes[m[1]]=m[0].trim();
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
  if (operations[id]) {
   if (!notes[id]) throw new Error('Missing Notes '+id);
   const slide = operations[id](p);
   slide.speakerNotes.text = notes[id];
   continue;
  }
  const id114=beforeProcedureRecapRemoval(id);
  const freshCompact=COMPACT_FRESH_IDS.includes(id114);
  const id119Memory=beforeS78Removal(beforeCompactHandoff(id114));
  const freshCurrent=freshCompact||id119Memory==='S109'||HARNESS_VISUAL_IDS.includes(id119Memory);
  const id122=beforeS68Removal(beforeAct3Trim(beforeMemoryMove(id119Memory)));
  const isSplitSource=isSkillEvidenceSlide(id122);
  const sourceId=isSplitSource?null:beforeContextSequence(beforeSkillEvidenceSplit(id122));
  const id121=isSplitSource?null:beforeVerificationDesign(sourceId);
  const isCurrentSource=isSplitSource||['S26','S27','S37','S38'].includes(id121);
  const id119=isSplitSource?null:beforeVerificationSplit(id121);
  const id120=isCurrentSource?null:beforeAct0Removal(id119);
  const before=p.slides.items.length;const s=factories[id](p,H);
  if(p.slides.items.length!==before+1)throw new Error('Each factory must add exactly one slide: '+id);
  if(!isCurrentSource&&!freshCurrent){
   if(tipRecords[id120])addPracticalTipBadge(s,tipRecords[id120].category,H);
   addModuleFooter(s,id120,moduleRecords[id120],H);
   applyAudienceFooter(s,id120,audienceFooters,H);
   applyAct0Terminology(s,id120,H);
   applyCurrent119(s);
   applyCurrent121(s);
  }
  if(!isSplitSource&&!freshCurrent){
   applyCurrent120(s);
   applyContextSequence(s);
   applySkillEvidenceSplit(s);
  }
  if(!freshCurrent){
   applyS68Removal(s);
   applyAct3Trim(s);
   applyMemoryMove(s);
  }
  if(!freshCompact){
   applyS78Removal(s);
   applyCompactHandoff(s);
  }
  applyProcedureRecapRemoval(s);
  if (lookupChanges[id]) {
   for (const shape of s.shapes.items) {
    const oldText = String(shape.text);
    const replacement = lookupChanges[id][oldText];
    if (replacement) {
     shape.text.replace(oldText, replacement);
     shape.name = replacement;
    }
   }
  }
  if(!notes[id])throw new Error('Missing Notes '+id);
  s.speakerNotes.text=notes[id];
 }
 const candidate=path.join(buildDir,deck.name+'.candidate.pptx');await(await PresentationFile.exportPptx(p)).save(candidate);
 let final=candidate,receipt;
 if(process.argv.includes('--release')){
  final=path.join(outDir,deck.name+'.pptx');
  const chartOwners=deck.ids.map((id,i)=>['S69','S87'].includes(id)?i+1:0).filter(Boolean);
  const tableOwners=deck.ids.map((id,i)=>id==='S54'?i+1:0).filter(Boolean);
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
