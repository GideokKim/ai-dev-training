/** DEC-0108: remove the former S15 at the final 120-to-119 boundary. */
export const CURRENT_SLIDE_COUNT = 119;
export const afterAct0Removal = id => {
 const n = Number(id.slice(1));
 return n === 15 ? null : `S${String(n > 15 ? n - 1 : n).padStart(2, '0')}`;
};
export const beforeAct0Removal = id => {
 const n = Number(id.slice(1));
 return `S${String(n >= 15 ? n + 1 : n).padStart(2, '0')}`;
};
export function renumber120Text(value) {
 const shift = n => {
  if (Number(n) > 120) return String(n);
  if (Number(n) === 15) throw new Error('A current reference points to removed S15');
  return afterAct0Removal(`S${n}`).slice(1);
 };
 return String(value).replace(/(?<![A-Za-z0-9_])S(\d{2,3})(?:([–~])(\d{2,3}))?(?!\d)/g,
  (whole, start, separator, end) => `S${shift(start)}${end ? separator + shift(end) : ''}`);
}
export function applyCurrent119(slide) {
 // DEC-0109 restores the original S14 design; keep only ID migration here.
 for (const shape of slide.shapes.items) {
  const before = String(shape.text), after = renumber120Text(before);
  if (before !== after) shape.text = after;
  if (shape.name) shape.name = renumber120Text(shape.name);
 }
}
