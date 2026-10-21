/** DEC-0043: practical request-writing examples, never additional Trial results. */
export const recipes = [
 {id:'S22',title:'지시와 참고 자료의 구분',method:'Delimiters',claim:'CLM-0032',
  when:'로그·명세·요청이 섞여 있을 때',
  message:'제목과 태그로 지시와 분석 자료의 경계를 표시한다.',
  prompt:'# 요청\ncrop 경계 오류의 원인 후보만 설명해줘.\n코드는 아직 수정하지 마.\n자료에 없는 내용은 미확인으로 표시해줘.\n\n# 참고 자료\n명세: crop [1,3)의 폭은 2\n로그 예: expected=2, actual=3',
  labels:[['따라야 할 요청','원인 후보 설명\n지금은 읽기 전용'],['분석할 자료','명세·로그 예시\n새 지시와 구분']],
  limit:'구획은 읽을 경계를 알리는 수단입니다. 보안 격리나 자료의 진위를 보장하지 않습니다.',
  source:'OpenAI Prompt engineering · Markdown / XML 구획 · 2026-10-21 확인',
  urls:['https://developers.openai.com/api/docs/guides/prompt-engineering'],variant:'T03-A'},
 {id:'S23',title:'입력과 기대 결과의 작은 예시',method:'Few-shot examples',claim:'CLM-0033',
  when:'범위·출력 패턴의 뜻이 엇갈릴 때',
  message:'설명만으로 부족할 때 입력과 원하는 결과를 함께 준다.',
  prompt:'crop 범위 설명을 아래 형식으로 작성해줘.\n입력 {1,2,3,4}에 대한 예시:\n[1,3) ⇒ {2,3}, 폭 2\n[0,1) ⇒ {1}, 폭 1\n\n같은 형식으로 [2,4)를 설명해줘.\n빈 범위·범위 초과 정책은 만들지 마.',
  labels:[['보여주는 패턴','범위\n포함한 값\n결과의 폭'],['추가할 때','설명만으로\n의도가 안 맞을 때']],
  limit:'예시와 명세를 일치시킵니다. 예시 몇 개가 모든 경계 조건의 명세를 대신하지 않습니다.',
  source:'OpenAI Prompt engineering · Few-shot / Reasoning best practices · 2026-10-21',
  urls:['https://developers.openai.com/api/docs/guides/prompt-engineering','https://developers.openai.com/api/docs/guides/reasoning-best-practices'],variant:'T03-A'},
 {id:'S24',title:'바로 검토할 수 있는 결과 형식',method:'Output format',claim:'CLM-0034',
  when:'장황한 답을 다시 가공하게 될 때',
  message:'받고 싶은 항목과 길이를 요청에 적는다.',
  prompt:'crop 수정 결과를 다음 순서로 보고해줘.\n1. 변경 파일과 바꾼 이유\n2. 실제 실행한 확인 명령과 결과\n3. 실행하지 못한 확인과 이유\n4. 남은 위험과 확인이 필요한 결정\n각 항목은 두 문장 이내로 써줘.\n실행하지 않은 검사를 통과로 쓰지 마.',
  labels:[['보고할 순서','변경 내용\n실행한 확인\n미확인·남은 결정'],['사용할 곳','검토·회의·인계\n필요한 형태를 지정']],
  limit:'형식이 맞아도 내용은 확인해야 합니다. 채팅의 형식 요청은 API Structured Outputs와 별개입니다.',
  source:'OpenAI Prompting / Structured model outputs · 출력 형식·내용 오류 구분 · 2026-10-21',
  urls:['https://learn.chatgpt.com/docs/prompting','https://developers.openai.com/api/docs/guides/structured-outputs'],variant:'T03-A'},
 {id:'S25',title:'근거가 있는 설명과 미확인의 구분',method:'Grounding',claim:'CLM-0035',
  when:'저장소 설명의 출처를 확인해야 할 때',
  message:'결론에 자료 위치를 붙이고, 확인하지 못한 것은 남긴다.',
  prompt:'crop의 명세·구현·테스트를 찾아 비교해줘.\n결론마다 실제 파일·함수·줄을 붙여줘.\n다음 세 상태를 구분해줘.\n- 자료에서 확인\n- 코드로부터 추정\n- 아직 미확인\n근거가 충돌하면 차이를 먼저 알려줘.\n찾지 못한 정책은 관례로 채우지 마.',
  labels:[['받아야 할 연결','주장과 자료 위치\n확인과 추정의 구분'],['다시 확인할 것','인용한 위치에\n실제 근거가 있나?']],
  limit:'파일·줄 인용도 실제 내용과 대조합니다. 인용이 있다는 사실만으로 정확성이 보장되지는 않습니다.',
  source:'OpenAI Prompt engineering / Prompting · 관련 자료·출처·불확실성 · 2026-10-21',
  urls:['https://developers.openai.com/api/docs/guides/prompt-engineering','https://learn.chatgpt.com/docs/prompting'],variant:'T03-A'},
 {id:'S26',title:'결과를 바꾸는 결정에서 확인 질문',method:'Clarification',claim:'CLM-0036',
  when:'정책을 사람이 선택해야 할 때',
  message:'조사할 사실과 답을 받아야 할 결정을 구분한다.',
  prompt:'빈 crop 범위의 처리 정책을 조사해줘.\n문서·테스트·호출부의 근거를 먼저 찾아줘.\n근거 없이 빈 결과와 오류 중 골라야 하면\n각 선택의 영향을 적고 질문해줘.\n그 결정에 의존하는 수정은 답변 뒤 진행해줘.\n그 선택과 무관한 조사는 계속해줘.',
  labels:[['저장소에 답이 있다','조사하고\n근거를 보고'],['정책 선택이 남았다','영향을 설명하고\n사람에게 질문']],
  limit:'모든 세부를 질문으로 돌리지 않습니다. 답에 따라 결과가 달라지는 선택에 집중합니다.',
  source:'OpenAI Best practices / Latest model · Initiative · 2026-10-21 확인',
  urls:['https://learn.chatgpt.com/guides/best-practices','https://developers.openai.com/api/docs/guides/latest-model'],variant:'T03-A'},
 {id:'S27',title:'큰 작업을 검토할 결과물로 나누기',method:'Task decomposition',claim:'CLM-0037',
  when:'조사 결과에 따라 구현 범위가 달라질 때',
  message:'다음 결정을 할 수 있는 작은 결과부터 요청한다.',
  prompt:'검사 pipeline에 ROI 설정을 연결하려 한다.\n이번에는 설정 입력에서 crop까지의 경로만\n조사하고, 변경 후보·미확인을 표로 정리해줘.\n코드는 아직 수정하지 마.\n\n그 결과를 보고 다음 요청에서\n파싱·유효성 확인 구현 범위를 정하겠다.',
  labels:[['첫 요청의 결과','현재 전달 경로\n변경 후보·미확인'],['다음 요청의 범위','선택한 경로에서\n한 부분만 구현']],
  limit:'단계는 작업·산출물의 경계입니다. 숨은 사고 과정을 길게 출력하라는 요청이 아닙니다.',
  source:'OpenAI Best practices · Plan first for difficult tasks · 2026-10-21 확인',
  urls:['https://learn.chatgpt.com/guides/best-practices','https://developers.openai.com/api/docs/guides/reasoning-best-practices'],variant:'T03-A'},
 {id:'S28',title:'기준을 지정한 코드 리뷰 요청',method:'Criteria-focused review',claim:'CLM-0038',
  when:'“검토해줘”의 범위를 분명히 할 때',
  message:'무엇을 찾을지와 어떤 근거로 보고할지를 지정한다.',
  prompt:'crop 변경안을 코드 리뷰 관점에서 봐줘.\n검토 기준은 다음과 같아.\n1. 끝 좌표 제외 명세 보존\n2. 공개 API와 기존 오류 정책 보존\n3. 요청과 무관한 변경 없음\n위반마다 위치·근거·영향·수정 제안을 써줘.\n자료로 판단 못 하면 미확인으로 남겨줘.\n이번 요청에서는 코드를 바꾸지 마.',
  labels:[['역할은 검토 관점','검토할 문제를\n구체적으로 지정'],['리뷰 항목의 형태','위치·기준·영향\n수정 제안과 근거']],
  limit:'리뷰 답변도 누락할 수 있습니다. 필요한 실행 확인·변경 검토·사람의 완료 판단을 함께 사용합니다.',
  source:'OpenAI Best practices · Testing and review / Prompting · Custom focus · 2026-10-21',
  urls:['https://learn.chatgpt.com/guides/best-practices','https://learn.chatgpt.com/docs/prompting'],variant:'T03-A'},
 {id:'S29',title:'구체적인 근거로 수정 방향 피드백',method:'Iterative refinement',claim:'CLM-0039',
  when:'첫 제안의 일부가 의도와 다를 때',
  message:'어긋난 지점과 원하는 변경, 유지할 조건을 적는다.',
  prompt:'앞선 “테스트 기대 폭을 3으로 바꾸자”는\n제안을 수정해줘. 원하는 명세는\ncrop [1,3)에서 폭 2야.\n테스트 기대값은 유지하고,\n구현의 끝 좌표 처리만 다시 검토해줘.\n기존 API·의존성은 유지해줘.\n바꾼 제안과 미확인 사항만 보고해줘.',
  labels:[['피드백에 담을 것','틀린 지점과 근거\n원하는 변경\n유지할 조건'],['남는 질문','다음 작업에도\n같은 조건을 쓴다면?']],
  limit:'앞선 제안은 가상 예시입니다. 원하는 답만 반복시키지 말고 명세와 실제 근거로 방향을 고칩니다.',
  source:'OpenAI Prompting · Improve the result with follow-up messages · 2026-10-21 확인',
  urls:['https://learn.chatgpt.com/docs/prompting'],variant:'T03-A'}
];

export function promptTechniqueFactories(H){
 const {C,text,line,rect}=H;
 return Object.fromEntries(recipes.map((r,index)=>[r.id,(p)=>{
  const s=H.frame(p,r.id,r.title,`ACT 1 · 요청 문장 도구 ${index+1}/8 · ${r.method}`,
   r.source,r.limit,'CONCEPTUAL');
  rect(s,64,170,186,40,C.pale);
  text(s,'이럴 때 사용',76,170,162,40,24,C.teal,true);
  text(s,r.when,274,170,942,40,27,C.ink);
  rect(s,64,226,754,328,C.white,C.line,1);
  text(s,'요청 예시 · 교육용 구성',84,237,714,30,23,C.sub,true);
  line(s,84,277,714);
  text(s,r.prompt,84,287,714,252,25,C.ink,false,H.FONT);
  r.labels.forEach(([label,body],i)=>{
   const y=230+i*158;
   text(s,label,864,y,352,35,26,C.teal,true);
   line(s,864,y+47,352);
   text(s,body,864,y+58,352,91,27,C.ink,i===1&&index===7);
  });
  text(s,r.message,64,566,1152,32,28,C.teal,true);
  return s;
 }]));
}
