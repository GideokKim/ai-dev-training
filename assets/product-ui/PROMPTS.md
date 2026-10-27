# Product UI illustration prompts

Decision: DEC-0107. Date: 2026-10-27.
Mode: built-in image_gen. Two new raster assets, no CLI fallback.
These are UI reconstructions, not screenshots or new execution evidence.

## S11 — ChatGPT web

Asset: S11-chatgpt-web.png

```text
Use case: ui-mockup.
Asset type: cropped application interface for the right-hand 388-by-245 pixel area of a Korean developer training PowerPoint. This is a teaching reconstruction of the ChatGPT web chat composer, not a claimed execution screenshot.
Primary request: Make a polished, very recognizable ChatGPT WEB chat window in light mode. Flat front-on screen crop, landscape aspect ratio 1.6:1, approximately 1600 x 1000. The UI fills the image edge to edge. Very subtle gray outer border, white main canvas, very pale gray narrow collapsed sidebar on left, a browser top bar showing chatgpt.com, the ChatGPT wordmark with a small dropdown at the top left of the app, small simple new-chat/sidebar controls. No perspective, no device, no surrounding desktop, no shadows or decorative objects.
Composition: reserve only about 12 percent of height for browser plus app header. The content is mainly an oversized authentic rounded ChatGPT message composer occupying the lower-middle, with two attached-file chips above a filled request. Include a small plus attachment control bottom-left and black circular upward send arrow bottom-right. Keep layout spacious and contemporary, not a dashboard and not a diagram. No assistant reply. The key audience takeaway is that a person has selected and attached the materials before asking ChatGPT.
Text verbatim and large enough to read when image is reduced to 388px wide: header "ChatGPT"; browser address "chatgpt.com"; first attachment chip "코드·테스트·명세"; second attachment chip "로그·권한 정보"; main filled prompt on two lines "이 자료로 crop 오류를" then "설명해줘."
Typography: exact crisp Korean Hangul in dark charcoal, large clear sans-serif. Main prompt roughly 80px at 1600px image width, header approximately 100px. Attachment chip labels approx 65px. The prompt text must be the dominant feature. Do not add any extra prose, any answer, PASS/FAIL, performance number, fake logs, plan tier, model name, personal account data, a timestamp, or citations. Background white, border neutral gray, icons charcoal. No badges, no giant logo, no illustration. Make it convincingly like the real ChatGPT website while simplifying to the composer used in this teaching example.
```

## S12 — Codex project

Asset: S12-codex-project.png

```text
Use case: ui-mockup.
Asset type: cropped Codex desktop interface for a Korean developer training slide, to be displayed in a 388-by-245 pixel inset. A teaching reconstruction of a desktop UI with a summary from a past CLI investigation, NOT a real observed desktop screenshot.
Primary request: Create a polished highly recognizable OpenAI Codex desktop app in light mode. Flat front-on screen crop, landscape ratio 1.6:1, approximately 1600 x 1000. Fill the entire image with the app, no outside desktop, no laptop, no perspective, no shadows. Crisp native macOS-like interface, pale gray sidebar occupying about 16 percent of width, white main chat pane. The upper-left product selector must say "Codex" with a small downward chevron. In the sidebar show a folder icon and the current project "graypipe"; other sidebar controls can be very small simple icons, no extra words. In main pane top bar show a small folder icon and "graypipe". Main chat thread uses understated typography, a small user prompt bubble near the top and a clear assistant summary in the middle. At the bottom place a quiet rounded empty composer with a plus sign and upward send arrow, no other words.
Text verbatim:
Top-left product name: "Codex".
Project name in sidebar and main bar: "graypipe".
User request bubble: "실패 원인을 조사해줘".
Small summary heading: "조사 요약".
Three primary summary lines, each on its own line, no checkmarks:
"테스트·관련 코드"
"Crop 명세와 구현 차이"
"실행 중 권한 제한".
Typography: make the three summary lines the dominant content, large crisp Korean sans-serif approximately 76px at 1600px width. Codex product name about 95px, request about 62px. Keep generous line spacing with no clipping. All these labels must be exactly readable. A subtle source-document icon next to summary is acceptable, but no colored PASS/FAIL marks or terminal transcript.
Constraints: Do not add fake commands, edited-code diffs, counts, performance results, timestamps, a model name, personal data, upgrade buttons or a claim of successful permission repair. The three short summary lines describe already-known observations, no extra answer prose. No web browser address bar. White and neutral gray, charcoal text, very subtle borders. No green/red status dashboard. Should immediately read as the Codex app's project chat, not an IDE or terminal.
```
