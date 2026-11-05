/** DEC-0184: remove production labels while retaining evidence in Notes. */
export const audienceExampleEdits = [
 {id:'S16',before:'요청 입력 · 교육용 재구성',after:'요청 입력'},
 {id:'S17',before:'요청 입력 · 교육용 재구성',after:'요청 입력'},
 {id:'S18',before:'요청 입력 · 교육용 재구성',after:'요청 입력'},
 {id:'S21',before:'실제 요청 발췌·번역 · 다섯 항목은 교육용 주석',after:null},
 {id:'S27',before:'교육용 요청 비교 · 실제 TRIAL-002 원문이나 새 실행 결과가 아님',after:null},
 {id:'S36',before:'작업 요청 · 교육용 예시',after:'작업 요청'},
 {id:'S36',before:'교육용 요청 예시 · 실제 TRIAL-002 입력이나 수행 결과가 아님',after:null},
 {id:'S37',before:'앞 장과 같은 요청 · 교육용 예시',after:'앞 장과 같은 요청'},
 {id:'S37',before:'교육용 분리 예시 · 계속 적용할지는 프로젝트의 합의와 조건을 확인한다',after:null},
 {id:'S70',before:'ACT 3 · 교육용 가정: 독립 조사와 결과 통합',after:'ACT 3 · 독립 조사와 결과 통합'},
 {id:'S77',before:'ACT 3 → ACT 4 · 교육용 대화 예시',after:'ACT 3 → ACT 4 · 점심 전후의 대화'},
 {id:'S103',before:'ACT 5 · 재평가 1/3 · 공개 사례 + 교육용 구조 도식',after:'ACT 5 · 재평가 1/3 · 공개 사례와 구조 변화'}
];

export function applyAudienceExampleCleanup(slide,id) {
 for(const edit of audienceExampleEdits.filter(edit=>edit.id===id)){
  const matches=slide.shapes.items.filter(shape=>String(shape.text)===edit.before);
  if(matches.length!==1)throw new Error(`Expected one audience label on ${id}: ${edit.before}`);
  const shape=matches[0];
  if(edit.after===null){shape.delete();continue;}
  shape.text.replace(edit.before,edit.after);
  if(shape.name===edit.before)shape.name=edit.after;
 }
}
