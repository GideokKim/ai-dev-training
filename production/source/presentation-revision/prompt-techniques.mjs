/** DEC-0117: visible method names, citations and annotated teaching prompts.
 * Recipe IDs retain the historical source edition used by build.mjs.
 * Visuals illustrate request structure, never executed model results.
 */
export const recipes = [
  {
    "id": "S22",
    "current": "S28",
    "title": "지시와 참고 자료의 구분",
    "method": "Delimiters",
    "claim": "CLM-0032",
    "tier": "조건부",
    "when": "요청과 로그·명세가 한 메시지에 섞일 때",
    "message": "여러 자료가 섞일 때, 제목으로 읽을 경계를 표시한다.",
    "prompt": "# 요청\ncrop 경계 오류의 원인만 조사해줘.\n코드는 수정하지 마.\n# 참고 명세\ncrop [1,3)의 기대 폭은 2\n# 참고 로그\nexpected=2, actual=3",
    "labels": [
      [
        "구획이 필요한 상황",
        "지시와 자료가\n섞여 있을 때"
      ],
      [
        "짧고 명확한 요청",
        "태그를 매번\n추가할 필요 없음"
      ]
    ],
    "limit": "구획은 해석을 돕는 표시이며, 보안 격리를 보장하지 않는다.",
    "source": "OpenAI · Prompt engineering / Reasoning best practices · 2026-10-30 확인",
    "urls": [
      "https://developers.openai.com/api/docs/guides/prompt-engineering",
      "https://developers.openai.com/api/docs/guides/reasoning-best-practices"
    ],
    "takeaway": "구획의 존재보다 지시와 참고 자료의 역할을 구분한다.",
    "variant": "T03-A",
    "displayMethod": "Delimiters",
    "methodMeaning": "지시와 참고 자료의 구획",
    "visibleCitation": "출처 · OpenAI, Prompt engineering · Message formatting with Markdown and XML",
    "citationUrl": "https://developers.openai.com/api/docs/guides/prompt-engineering#message-formatting-with-markdown-and-xml",
    "highlightLines": [
      0,
      3,
      5
    ]
  },
  {
    "id": "S23",
    "current": "S29",
    "title": "입력과 기대 결과의 작은 예시",
    "method": "Few-shot examples",
    "claim": "CLM-0033",
    "tier": "조건부",
    "when": "사내 고유 표기·분류가 설명만으로 안 맞을 때",
    "message": "모델이 모르는 우리 기준을 입력·출력 예시로 전달한다.",
    "prompt": "우리 팀의 보고 표기를 아래 예시처럼 맞춰줘.\n테스트 로그 있음: [실행 확인] 명령·결과\n코드만 검토함: [코드 검토] 파일·판단\n근거를 못 찾음: [미확인] 필요한 자료\n\n첨부한 변경 보고서를 같은 형식으로 정리해줘.",
    "labels": [
      [
        "먼저 간단히 요청",
        "기준과 형식이\n맞는지 확인"
      ],
      [
        "부족할 때 예시 추가",
        "우리 팀이 쓰는\n표기·판정의 예"
      ]
    ],
    "limit": "가상 팀의 보고 기준 · 실제 사내 규정이나 실행 결과가 아님",
    "source": "OpenAI · Reasoning best practices · zero-shot 우선 / 필요한 예시 · 2026-10-30 확인",
    "urls": [
      "https://developers.openai.com/api/docs/guides/reasoning-best-practices",
      "https://developers.openai.com/api/docs/guides/prompt-engineering"
    ],
    "promptLabel": "가상 팀 기준을 전달하는 요청 예시",
    "takeaway": "예시를 먼저 쌓지 않고 간단한 요청이 부족할 때 추가한다.",
    "variant": "T03-A",
    "displayMethod": "Few-shot Prompting",
    "methodMeaning": "입력·출력 예시로 기준 전달",
    "visibleCitation": "출처 · OpenAI, Reasoning best practices · How to prompt reasoning models effectively",
    "citationUrl": "https://developers.openai.com/api/docs/guides/reasoning-best-practices#how-to-prompt-reasoning-models-effectively",
    "highlightLines": [
      1,
      2,
      3
    ]
  },
  {
    "id": "S24",
    "current": "S30",
    "title": "바로 검토할 수 있는 결과 형식",
    "method": "Output format",
    "claim": "CLM-0034",
    "tier": "핵심",
    "when": "완료 보고에서 필요한 정보를 빨리 찾고 싶을 때",
    "message": "검토에 필요한 항목을 지정하고, 중요한 근거는 남긴다.",
    "prompt": "crop 수정 결과를 아래 항목으로 보고해줘.\n1. 변경 파일과 이유\n2. 실행한 검사·결과\n3. 미실행 검사·이유\n4. 남은 위험·결정\n완료 판단에 필요한 근거는 생략하지 마.",
    "labels": [
      [
        "지정할 것",
        "보고 항목과\n읽을 순서"
      ],
      [
        "분량의 기준",
        "판단에 필요한\n근거를 담을 만큼"
      ]
    ],
    "limit": "형식과 내용은 별도 확인 · 채팅의 형식 요청은 API Structured Outputs와 다름",
    "source": "OpenAI · Prompting / Structured model outputs · 2026-10-30 확인",
    "urls": [
      "https://learn.chatgpt.com/docs/prompting",
      "https://developers.openai.com/api/docs/guides/structured-outputs"
    ],
    "takeaway": "기계적인 문장 수 제한보다 필요한 보고 항목을 정한다.",
    "variant": "T03-A",
    "displayMethod": "Output Format Specification",
    "methodMeaning": "받을 결과의 구조 지정",
    "visibleCitation": "출처 · OpenAI, Prompting · Make the result ready to use",
    "citationUrl": "https://learn.chatgpt.com/docs/prompting#make-the-result-ready-to-use",
    "highlightLines": [
      1,
      2,
      3,
      4
    ]
  },
  {
    "id": "S25",
    "current": "S31",
    "title": "근거가 있는 설명과 미확인의 구분",
    "method": "Grounding",
    "claim": "CLM-0035",
    "tier": "핵심",
    "when": "설명을 믿기 전에 실제 자료를 대조해야 할 때",
    "message": "중요한 판단에 근거를 받고, 추정·미확인은 구분한다.",
    "prompt": "crop의 명세·구현·테스트를 비교해줘.\n중요한 결론마다 파일·함수 근거를 붙여줘.\n확인한 내용과 추정·미확인을 구분해줘.\n자료가 충돌하면 차이를 먼저 알려줘.\n없는 정책은 만들어 채우지 마.",
    "labels": [
      [
        "받아야 할 것",
        "설명을 뒷받침하는\n실제 자료 위치"
      ],
      [
        "사람이 확인할 것",
        "인용한 원문과\n판단이 맞는지"
      ]
    ],
    "limit": "출처가 있어도 원문과 대조한다 · 인용 자체가 정확성의 보증은 아님",
    "source": "OpenAI · Prompting / Prompt engineering · 관련 자료와 미확인 · 2026-10-30 확인",
    "urls": [
      "https://learn.chatgpt.com/docs/prompting",
      "https://developers.openai.com/api/docs/guides/prompt-engineering"
    ],
    "takeaway": "S30의 보고 형식과 달리 여기서는 판단을 뒷받침하는 자료를 다룬다.",
    "variant": "T03-A",
    "displayMethod": "Grounding",
    "methodMeaning": "설명을 실제 자료에 연결",
    "visibleCitation": "출처 · OpenAI, Prompting · Add useful context / Set boundaries",
    "citationUrl": "https://learn.chatgpt.com/docs/prompting#add-useful-context",
    "highlightLines": [
      1,
      2
    ]
  },
  {
    "id": "S26",
    "current": "S32",
    "title": "결과를 바꾸는 결정에서 확인 질문",
    "method": "Clarification",
    "claim": "CLM-0036",
    "tier": "핵심",
    "when": "사람의 선택에 따라 구현이나 완료 기준이 바뀔 때",
    "message": "조사할 사실은 찾게 하고, 결과를 바꾸는 결정은 묻는다.",
    "prompt": "빈 crop 범위의 처리 정책을 조사해줘.\n문서·테스트·호출부에서 먼저 찾아줘.\n정책이 없어 동작을 선택해야 한다면\n선택지와 영향을 정리하고 질문해줘.\n그 선택에 의존하는 수정은 답변 뒤 진행해줘.\n결정과 무관한 조사는 계속해줘.",
    "labels": [
      [
        "자료에 답이 있으면",
        "직접 조사하고\n근거를 보고"
      ],
      [
        "결정이 남아 있으면",
        "영향을 설명하고\n사람에게 질문"
      ]
    ],
    "limit": "모든 세부를 질문하지 않는다 · 결정과 무관한 허용된 작업은 계속 진행",
    "source": "OpenAI · Using GPT-6 / Prompting · 질문과 자율성의 범위 · 2026-10-30 확인",
    "urls": [
      "https://developers.openai.com/api/docs/guides/latest-model",
      "https://learn.chatgpt.com/docs/prompting"
    ],
    "takeaway": "조사 가능한 사실을 모두 사람에게 되묻지 않도록 범위를 정한다.",
    "variant": "T03-A",
    "displayMethod": "Clarifying Questions",
    "methodMeaning": "결과를 바꾸는 결정 확인",
    "visibleCitation": "출처 · OpenAI, Using GPT-6 · Initiative and follow-through",
    "citationUrl": "https://developers.openai.com/api/docs/guides/latest-model#initiative-and-follow-through",
    "highlightLines": [
      2,
      3,
      5
    ]
  },
  {
    "id": "S27",
    "current": "S33",
    "title": "큰 작업을 검토할 결과물로 나누기",
    "method": "Task decomposition",
    "claim": "CLM-0037",
    "tier": "조건부",
    "when": "조사 결과를 보고 구현 범위를 결정해야 할 때",
    "message": "중간 판단이 필요한 작업은, 구현 전에 검토할 계획을 받는다.",
    "prompt": "ROI 설정을 crop에 연결하려 한다.\n먼저 현재 경로와 변경 후보를 조사해줘.\n범위·호환성에 선택이 필요한 지점을 알려줘.\n이번에는 수정 없이 계획만 제안해줘.\n\n계획을 검토한 뒤 구현 범위를 정하겠다.",
    "labels": [
      [
        "계획을 먼저 받을 때",
        "조사 결과로\n구현 범위가 바뀔 때"
      ],
      [
        "범위가 정해진 수정",
        "매 단계 멈추지 않고\n허용 범위에서 진행"
      ]
    ],
    "limit": "작업 계획과 검토 지점을 요청한다 · 내부 사고 과정의 출력을 요구하지 않음",
    "source": "OpenAI · Best practices / Reasoning best practices · 2026-10-30 확인",
    "urls": [
      "https://learn.chatgpt.com/guides/best-practices",
      "https://developers.openai.com/api/docs/guides/reasoning-best-practices"
    ],
    "takeaway": "큰 작업이라는 이유만으로 잘게 나누거나 승인 단계를 늘리지 않는다.",
    "variant": "T03-A",
    "displayMethod": "Task Decomposition",
    "methodMeaning": "검토할 산출물과 단계 구분",
    "visibleCitation": "출처 · OpenAI, Best practices · Plan first for difficult tasks",
    "citationUrl": "https://learn.chatgpt.com/guides/best-practices#plan-first-for-difficult-tasks",
    "highlightLines": [
      1,
      2,
      3
    ]
  },
  {
    "id": "S28",
    "current": "S34",
    "title": "기준을 지정한 코드 리뷰 요청",
    "method": "Criteria-focused review",
    "claim": "CLM-0038",
    "tier": "핵심",
    "when": "변경안에서 놓치면 안 될 문제를 검토할 때",
    "message": "검토 기준과 실패 조건을 지정하고, 실제 검사와 구분한다.",
    "prompt": "crop 변경안에서 다음을 검토해줘.\n끝 좌표 제외 명세·공개 API·오류 정책 보존\n요청과 무관한 변경 여부\n발견 사항은 위치·실패 조건·영향으로 보고해줘.\n정적 검토와 실제 실행한 검사를 구분해줘.\n이번에는 코드를 바꾸지 마.",
    "labels": [
      [
        "찾을 문제를 지정",
        "명세 위반과\n허용 범위 밖 변경"
      ],
      [
        "검증의 범위",
        "변경의 영향에 맞게\n필요한 검사 선택"
      ]
    ],
    "limit": "리뷰에도 누락이 있을 수 있다 · 실행 근거와 사람의 완료 판단을 함께 확인",
    "source": "OpenAI · Best practices / Using GPT-6 · 작업에 맞는 리뷰·검증 · 2026-10-30 확인",
    "urls": [
      "https://learn.chatgpt.com/guides/best-practices",
      "https://developers.openai.com/api/docs/guides/latest-model"
    ],
    "takeaway": "S31은 설명 근거, S34는 변경안의 위반 검토다. 문제 개수를 억지로 채우지 않는다.",
    "variant": "T03-A",
    "displayMethod": "Criteria-based Review",
    "methodMeaning": "기준을 지정한 변경 검토",
    "visibleCitation": "출처 · OpenAI, Best practices · Improve reliability with testing and review",
    "citationUrl": "https://learn.chatgpt.com/guides/best-practices#improve-reliability-with-testing-and-review",
    "highlightLines": [
      1,
      2,
      3
    ]
  },
  {
    "id": "S29",
    "current": "S35",
    "title": "구체적인 근거로 수정 방향 피드백",
    "method": "Iterative refinement",
    "claim": "CLM-0039",
    "tier": "핵심",
    "when": "첫 제안의 어떤 부분이 요구와 다른지 알 때",
    "message": "어긋난 지점·기대 결과·유지할 조건으로 방향을 고친다.",
    "prompt": "앞선 “기대 폭을 3으로 바꾸자”는 제안을\n고쳐줘. 명세는 crop [1,3)에서 폭 2야.\n테스트 기대값은 유지하고\n구현의 끝 좌표 처리만 다시 검토해줘.\n기존 API·의존성은 유지해줘.\n바뀐 제안과 미확인 사항을 알려줘.",
    "labels": [
      [
        "피드백에 담을 것",
        "어긋난 지점과\n판단의 근거"
      ],
      [
        "수정 범위도 지정",
        "바꿀 부분과\n유지할 조건"
      ]
    ],
    "limit": "앞선 제안은 가상 예시 · 반복 요청만으로 품질 향상을 보장하지 않음",
    "source": "OpenAI · Prompting · 구체적인 후속 수정 · 2026-10-30 확인",
    "urls": [
      "https://learn.chatgpt.com/docs/prompting"
    ],
    "takeaway": "고친 요청에도 다음 작업에 다시 적을 공통 조건이 남는지 S36으로 연결한다.",
    "variant": "T03-A",
    "displayMethod": "Iterative Refinement",
    "methodMeaning": "구체적 피드백으로 결과 수정",
    "visibleCitation": "출처 · OpenAI, Prompting · Improve the result with follow-up messages",
    "citationUrl": "https://learn.chatgpt.com/docs/prompting#improve-the-result-with-follow-up-messages",
    "highlightLines": [
      1,
      2,
      4
    ]
  }
];

export function promptTechniqueFactories(H) {
 const {C,text,line,rect} = H;
 const down = (s,x,y) => s.shapes.add({geometry:'downArrow',
  position:{left:x,top:y,width:16,height:20},fill:C.teal,
  line:{fill:'none',width:0}});
 const label = (s,t,x,y,w=340,size=28,color=C.ink,bold=false) =>
  text(s,t,x,y,w,36,size,color,bold);
 const rule = (s,y) => line(s,876,y,340,C.line,1);
 const number = (s,n,t,y,body) => {
  label(s,n,876,y,44,23,C.teal,true);
  label(s,t,924,y,292,29,C.ink,true);
  if(body)label(s,body,924,y+35,292,23,C.sub);
 };
 function diagram(s,r) {
  const x=876;
  switch(r.current) {
   case 'S28':
    label(s,'구획마다 읽는 역할',x,275,340,29,C.ink,true);
    // These labels describe roles, not an observed execution sequence.
    [['# 요청','따라야 할 지시'],['# 참고 명세','비교할 기준'],['# 참고 로그','분석할 관찰 자료']].forEach(([a,b],i)=>{
     const y=331+i*67;label(s,a,x,y,340,25,C.teal,true);
     label(s,b,x,y+29,340,29,C.ink);if(i<2)rule(s,y+63);
    });break;
   case 'S29':
    label(s,'예시를 추가할까?',x,275,340,29,C.ink,true);
    label(s,'간단히 요청',x,326,340,31,C.teal,true);down(s,x+151,368);
    label(s,'팀 기준이 전달됐나?',x,397,340,28);
    label(s,'예',x,451,53,25,C.green,true);label(s,'그대로 사용',x+65,451,275,28);
    label(s,'아니오',x,497,85,25,C.warn,true);label(s,'예시 추가',x+103,497,237,28,C.teal,true);break;
   case 'S30':
    label(s,'받을 보고서의 구조',x,275,340,29,C.ink,true);
    ['변경 파일과 이유','실행한 검사·결과','미실행 검사·이유','남은 위험·결정'].forEach((t,i)=>{
     const y=326+i*53;label(s,String(i+1).padStart(2,'0'),x,y,44,23,C.teal,true);
     label(s,t,x+54,y,286,27);rule(s,y+44);
    });break;
   case 'S31':
    label(s,'결론을 뒷받침하는 자료',x,275,340,27,C.ink,true);
    ['명세','구현','테스트'].forEach((t,i)=>{
     rect(s,x+i*117,335,106,55,C.white,C.line,1);
     text(s,t,x+i*117,335,106,55,26,C.teal,true,H.FONT,'center');
    });
    down(s,x+151,406);label(s,'중요한 결론',x,445,340,32,C.ink,true);
    label(s,'확인 · 추정 · 미확인 구분',x,499,340,25,C.sub);break;
   case 'S32':
    label(s,'무엇을 질문할까?',x,275,340,29,C.ink,true);
    label(s,'문서·코드를 조사',x,326,340,29,C.teal,true);down(s,x+151,368);
    label(s,'결정할 정책이 남았나?',x,398,340,27);
    label(s,'없음',x,451,66,25,C.green,true);label(s,'근거로 진행',x+82,451,258,27);
    label(s,'있음',x,497,66,25,C.warn,true);label(s,'영향 설명·질문',x+82,497,258,27,C.teal,true);break;
   case 'S33':
    label(s,'검토할 산출물',x,275,340,29,C.ink,true);
    number(s,'01','현재 경로와 후보',330,'조사해서 확인');rule(s,399);
    number(s,'02','구현 전 계획',408,'선택할 범위·영향');rule(s,477);
    number(s,'03','구현 범위 선택',486);break;
   case 'S34':
    label(s,'변경안을 볼 기준',x,275,340,29,C.ink,true);
    ['명세와 맞는가?','공개 API를 보존했나?','요청한 범위만 바꿨나?'].forEach((t,i)=>{
     const y=331+i*49;label(s,t,x,y,340,27,C.teal,true);rule(s,y+40);
    });
    label(s,'발견 사항의 근거',x,489,340,24,C.sub,true);
    label(s,'위치 · 실패 조건 · 영향',x,518,340,25,C.ink);break;
   case 'S35':
    label(s,'피드백에서 지정할 것',x,275,340,28,C.ink,true);
    number(s,'01','어긋난 지점',330,'기대 폭을 바꾸자는 제안');rule(s,399);
    number(s,'02','판단의 근거',408,'명세의 기대 폭 2');rule(s,477);
    number(s,'03','유지할 조건',486,'테스트 · API · 의존성');break;
  }
 }
 return Object.fromEntries(recipes.map((r,index) => [r.id,p => {
  const s=H.frame(p,r.id,r.title,
   `ACT 1 · 요청 문장 도구 ${index+1}/8 · ${r.tier}`,
   r.visibleCitation,r.limit,'CONCEPTUAL');
  text(s,r.displayMethod,64,153,780,42,31,C.teal,true);
  text(s,r.methodMeaning,856,153,360,42,23,C.sub,false,H.FONT,'right');
  text(s,'사용 상황',64,208,142,36,24,C.sub,true);
  text(s,r.when,222,208,994,36,27,C.ink);
  line(s,64,254,1152,C.line,1);
  rect(s,64,270,776,284,C.white,C.line,1);
  text(s,r.promptLabel ?? '요청 예시',84,279,736,30,22,C.sub,true);
  line(s,84,315,736,C.line,1);
  if(r.current==='S29') {
   text(s,'우리 팀의 보고 표기를 아래 예시처럼 맞춰줘.',84,324,736,33,28,C.ink);
   [['테스트 로그 있음','[실행 확인] 명령·결과'],['코드만 검토함','[코드 검토] 파일·판단'],['근거를 못 찾음','[미확인] 필요한 자료']].forEach(([a,b],i)=>{
    const y=365+i*43;rect(s,84,y,736,38,C.pale);
    text(s,a,94,y,265,38,27,C.ink);
    H.arrow(s,374,y+12,24,14,C.teal);
    text(s,b,419,y,391,38,27,C.teal,true);
   });
   text(s,'첨부한 변경 보고서를 같은 형식으로 정리해줘.',84,506,736,34,27,C.ink);
  } else {
   const lines=r.prompt.split('\n');
   const lineHeight=lines.length===7?31:34;
   const top=lines.length===7?324:332;
   lines.forEach((t,i)=>{
    const y=top+i*lineHeight;
    const emphasis=r.highlightLines.includes(i);
    if(emphasis&&t)rect(s,84,y,736,lineHeight,C.pale);
    text(s,t,94,y,716,lineHeight,28,emphasis?C.teal:C.ink,emphasis);
   });
  }
  diagram(s,r);
  text(s,r.message,64,562,1152,38,29,C.teal,true);
  return s;
 }]));
}
