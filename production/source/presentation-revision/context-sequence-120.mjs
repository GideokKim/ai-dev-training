/** DEC-0125: reorder six current120 slides after retained source adapters. */
const sequence = ['S46', 'S47', 'S45', 'S49', 'S50', 'S48'];
const currentId = n => `S${String(n).padStart(2, '0')}`;
const forward = Object.fromEntries(sequence.map((id, i) => [id, currentId(45 + i)]));
const reverse = Object.fromEntries(Object.entries(forward).map(([a, b]) => [b, a]));

export const afterContextSequence = id => forward[id] ?? id;
export const beforeContextSequence = id => reverse[id] ?? id;

export function reorderContextFactories(factories) {
 return Object.fromEntries(Object.entries(factories).map(([id, factory]) =>
  [afterContextSequence(id), factory]));
}

export function renumberContextText(value) {
 // Change current references once. Retained asset/report paths keep their IDs.
 return String(value).replace(
  /(?<![A-Za-z0-9_./-])S(\d{2,3})(?:([–~])(S?)(\d{2,3}))?(?![A-Za-z0-9_./-])/g,
  (whole, start, separator, repeatedS, end) => {
   if (!end) return afterContextSequence(currentId(Number(start)));
   const values = Array.from({length:Number(end)-Number(start)+1},
    (_, i) => Number(afterContextSequence(currentId(Number(start)+i)).slice(1)))
    .sort((a, b) => a-b);
   if (values.every((n, i) => n === Number(start)+i)) return whole;
   if (values.every((n, i) => n === values[0]+i))
    return `${currentId(values[0])}${separator}${repeatedS}${String(values.at(-1)).padStart(2, '0')}`;
   return values.map(currentId).join(', ');
  });
}

export function applyContextSequence(slide) {
 for (const shape of slide.shapes.items) {
  const before = String(shape.text), after = renumberContextText(before);
  if (before !== after) shape.text = after;
  if (shape.name) shape.name = renumberContextText(shape.name);
 }
}
