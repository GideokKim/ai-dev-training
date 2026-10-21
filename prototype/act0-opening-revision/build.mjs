/** Build and render only the two-slide review, without modifying production. */
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';
import {createRequire} from 'node:module';
import {createHash} from 'node:crypto';
import * as H from '../../production/source/presentation-revision/helpers.mjs';
import {addModuleFooter} from '../../production/source/presentation-revision/legacy-priority.mjs';
import {openingSlides} from './source.mjs';

const directory = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(directory, '../..');
const work = process.env.PRESENTATION_WORK_DIR;
const skill = process.env.PRESENTATION_SKILL_DIR;
const modules = process.env.RUNTIME_NODE_MODULES;
if (!work || !skill || !modules) throw new Error('Missing presentation runtime paths.');
const runtimeRequire = createRequire(path.join(modules, '__opening_review__.cjs'));
const {Presentation, PresentationFile, FileBlob} = await import(pathToFileURL(runtimeRequire.resolve('@oai/artifact-tool')).href);
const {GlobalFonts} = runtimeRequire('@napi-rs/canvas');
GlobalFonts.registerFromPath(process.env.KOREAN_PREVIEW_FONT, H.FONT);
GlobalFonts.registerFromPath(process.env.CODE_PREVIEW_FONT, H.CODE);
const {finalizePresentation} = await import(pathToFileURL(path.join(skill, 'container_tools/artifact_tool_utils.mjs')).href);
const stamp = process.env.PRESENTATION_BUILD_ID || Date.now().toString();
const build = path.join(work, 'build', stamp);
const output = path.join(work, 'output', stamp);
await fs.mkdir(build, {recursive: true});
await fs.mkdir(output, {recursive: true});
const notesText = await fs.readFile(path.join(directory, 'NOTES.md'), 'utf8');
const notes = Object.fromEntries([...notesText.matchAll(/^## (S\d\d) — [\s\S]*?(?=^## S\d\d|$(?![\s\S]))/gm)].map(m => [m[1], m[0].trim()]));
const modulesMap = JSON.parse(await fs.readFile(path.join(root, 'production/source/presentation-revision/legacy-module-map.json'), 'utf8'));
const moduleRecords = Object.fromEntries(modulesMap.slides.map(r => [r.slideId, r]));
const factories = await openingSlides(directory);
const ids = ['S01', 'S02'];
const presentation = Presentation.create({slideSize: {width: 1280, height: 720}});
presentation.theme.defaultFont = H.FONT;
for (const id of ids) {
  const slide = factories[id](presentation);
  addModuleFooter(slide, id, moduleRecords[id], H);
  if (!notes[id]) throw new Error('Missing Notes for ' + id);
  slide.speakerNotes.text = notes[id];
}
const baseline = path.join(root, 'production/AI_Dev_Training_Full.pptx');
const candidate = path.join(build, 'opening.candidate.pptx');
const final = path.join(output, 'ACT0_S01_S02_Review.pptx');
await (await PresentationFile.exportPptx(presentation)).save(candidate);
await finalizePresentation({
  workspaceDir: work, candidatePath: candidate, finalPath: final,
  pythonExecutable: process.env.RUNTIME_PYTHON,
  integrityValidatorPath: path.join(skill, 'container_tools/inspect_presentation_package_integrity.py'),
  layoutValidatorPath: path.join(skill, 'container_tools/inspect_presentation_layout_geometry.py'),
  layoutArgs: ['--expected-slide-size-emu', '12192000,6858000', '--validate-bullet-geometry', '--validate-heading-fit'],
  explicitTotalSlideCount: 2, requiredNativeChartOwnerSlides: [], requiredNativeTableOwnerSlides: [],
  fontPolicy: {basis: 'reference', families: [H.FONT, H.CODE], referencePath: baseline,
    referenceSha256: createHash('sha256').update(await fs.readFile(baseline)).digest('hex')},
  verifyArtifactToolImport: true, receiptPath: path.join(build, 'validation.json')
});
const rendered = await PresentationFile.importPptx(await FileBlob.load(final));
const preview = path.join(output, 'preview');
await fs.mkdir(preview, {recursive: true});
for (let i = 0; i < ids.length; i++) {
  const slide = rendered.slides.items[i];
  const png = await rendered.export({slide, format: 'png', scale: 1.5});
  await fs.writeFile(path.join(preview, ids[i] + '.png'), new Uint8Array(await png.arrayBuffer()));
  await fs.writeFile(path.join(build, ids[i] + '.layout.json'), await (await slide.export({format: 'layout'})).text());
  console.log('Rendered ' + ids[i]);
}
console.log('REVIEW_OUTPUT=' + output);
