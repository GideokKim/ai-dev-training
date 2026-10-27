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
export function applyCurrent119(slide, id, H) {
 if (id === 'S14') {
  for (const shape of slide.shapes.items) {
   const value = String(shape.text);
   if (['파일\n구현\n테스트', '원하는 결과\n허용할 범위\n완료 수용'].includes(value)) {
    shape.position = {left:shape.position.left,top:389,width:shape.position.width,height:132};
    shape.text.style = {typeface:H.FONT,fontSize:32,color:H.C.ink,alignment:'left',verticalAlignment:'middle',autoFit:'none',wrap:'none',insets:0};
   }
   if (value === 'Agent는 제안하고, 사람은 최종 선택·승인한다.') {
    shape.position = {left:64,top:526,width:1152,height:28};
    shape.text.style = {typeface:H.FONT,fontSize:23,color:H.C.sub,bold:true,alignment:'left',verticalAlignment:'middle',autoFit:'none',wrap:'none',insets:0};
   }
  }
  H.text(slide,'결정한 목표·조건·완료 기준을 요청에 담는다.',64,564,1152,34,28,H.C.teal,true);
 }
 for (const shape of slide.shapes.items) {
  const before = String(shape.text), after = renumber120Text(before);
  if (before !== after) shape.text = after;
  if (shape.name) shape.name = renumber120Text(shape.name);
 }
}
