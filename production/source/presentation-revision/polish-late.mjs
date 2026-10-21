// Audience hierarchy and operating cues for the approved final review.
// All comparisons remain within their existing Trial or teaching-model scope.
function frame(p,H,id,title,eyebrow,source,boundary,type='TEACHING_MODEL'){
 const {C,FONT,text,line}=H;const s=p.slides.add();s.background.fill=C.bg;
 text(s,eyebrow,64,48,1030,28,19,C.teal,true);
 text(s,id,1120,48,96,28,19,C.sub,false,FONT,'right');
 text(s,title,64,84,1152,title.includes('\n')?112:64,title.includes('\n')?46:48,C.ink,true);
 const conceptual=type.includes('CONCEPTUAL'),meta=type.includes('META');
 const color=conceptual?C.warn:meta?C.teal:C.line;
 line(s,64,612,1152,color,conceptual||meta?2:1,conceptual?'dash':'solid');
 if(meta)line(s,64,606,1152,color,1);
 text(s,source,64,621,1152,28,19,conceptual?C.warn:C.sub,true);
 text(s,boundary,64,650,1152,30,19,C.sub);
 return s;
}

export const slides={
 S65:(p,H)=>{const {C,text,line,rect}=H;
  const s=frame(p,H,'S65','대표 작업으로 변경 범위를 확인하기','ACT 4 · CONCEPTUAL / 평가 설계','DEMO-10 · 네 작업 모두 이 Workflow 변경 후의 평가 결과는 없음','EVAL-01/02: 별도 과거 관찰 참고 · EVAL-03/04: 설계만 있음 · 새 실행·PASS/FAIL 없음','CONCEPTUAL');
  text(s,'작업 수보다, 서로 다른 위험을 덮는가?',64,194,1152,48,33,C.ink,true);
  rect(s,64,252,1152,42,C.amber);
  text(s,'평가 설계 · 네 작업 모두 이 Workflow 변경 뒤의 실행 결과는 없음',80,257,1120,32,25,C.warn,true);
  text(s,'대표 작업',64,307,300,34,23,C.sub,true);
  text(s,'무엇을 확인하기 위한 설계인가?',388,307,514,34,23,C.sub,true);
  text(s,'현재 근거 상태',930,307,286,34,23,C.sub,true);
  const vals=[
   ['EVAL-01','버그 수정','동작 계약을 확인하는가?','과거 관찰 참고','TRIAL-002'],
   ['EVAL-02','성능 변경','측정·검증 범위를 유지하는가?','과거 관찰 참고','STATE-04-PERF'],
   ['EVAL-03','문서만 수정','불필요한 절차를 강요하지 않는가?','설계 사례','새 평가 실행 없음'],
   ['EVAL-04','작은 리팩터링','다른 유효한 작업을 방해하지 않는가?','설계 사례','새 평가 실행 없음']
  ];
  vals.forEach((r,i)=>{const y=346+i*62;
   line(s,64,y,1152,C.warn,1,'dash');
   text(s,r[0],64,y+7,127,28,21,C.warn,true,H.CODE);
   text(s,r[1],192,y+6,168,38,25,C.ink,true);
   text(s,r[2],388,y+6,514,42,25,C.ink);
   text(s,r[3],930,y+4,286,29,22,C.teal,true);
   text(s,r[4],930,y+30,286,27,20,C.sub);
  });
  return s;
 },
 S67:(p,H)=>{const {C,text,line,arrow,rect}=H;
  const s=frame(p,H,'S67','Feedback을 System Change와\nEvaluation으로 잇기','ACT 4 · 이 교육의 Loop 모델','DEC-0023 · 교육용 운영 모델','모델의 자동 학습이나 실제 Product Loop를 관찰했다는 뜻은 아니다.','TEACHING_MODEL');
  text(s,'앞선 가상 사례의 판단을 다섯 단계로 묶으면',64,215,1152,42,29,C.sub);
  const items=[
   ['실행','무엇을 했나?','가상 Task\n현재 기준은\n단위 + 통합'],
   ['관찰','무엇이 보였나?','지침은 단위만\n검증 범위가 다름'],
   ['원인 판단','왜 생겼나?','오래된 지침이\n원인인지 확인'],
   ['시스템 변경','어디를 바꾸나?','확인됐다면\nWorkflow 갱신'],
   ['재평가','다른 작업도 괜찮나?','재실행 +\n다른 대표 작업']
  ];
  items.forEach((a,i)=>{const x=64+i*236;
   text(s,String(i+1).padStart(2,'0'),x,278,208,32,21,C.teal,true,H.CODE);
   line(s,x,319,208,C.teal,3);
   text(s,a[0],x,333,208,43,27,C.ink,true);
   text(s,a[1],x,384,208,34,i===4?21:23,C.sub);
   rect(s,x,433,208,113,C.pale);
   text(s,a[2],x+13,439,182,99,24,C.ink,true);
   if(i<4)arrow(s,x+214,350,17,15,C.teal);
  });
  text(s,'다음 작업에도 영향을 주는 변경으로 연결한다.',64,561,1152,38,31,C.teal,true);
  return s;
 },
 S68:(p,H)=>{const {C,text,line,arrow,rect}=H;
  const s=frame(p,H,'S68','실제 제작 기록: TRIAL-006','ACT 4 · OBSERVED META / Trial 평가·보고 기준','TRIAL-006 · 과거 Codex CLI 조사 기록의 재구성','앞의 가상 Workflow와 별개 사건이다. 제품 코드·Demo Skill의 수정 사례가 아니다.','OBSERVED_META');
  text(s,'성능 조사에 Prompt 밖의 환경도 함께 관여했다.',64,215,1152,52,34,C.teal,true);
  const events=[['작업 요청','성능 개선 작업'],['함께 관찰된 조건','Global Skill 관여\n시작 경고도 기록'],['결과 해석의 질문','Prompt만의 효과?\n귀속은 PARTIAL']];
  events.forEach((a,i)=>{const x=64+i*398;
   text(s,String(i+1).padStart(2,'0'),x,302,350,30,21,C.sub,true,H.CODE);
   text(s,a[0],x,343,350,44,29,C.ink,true);
   line(s,x,401,350,C.teal,3);
   text(s,a[1],x,421,350,98,29,i===2?C.warn:C.ink,i===2);
   if(i<2)arrow(s,x+358,366,27,20,C.teal);
  });
  text(s,'좋은 결과가 있다는 것과 원인을 안다는 것은 별개다.',64,554,1152,40,29,C.sub);
  return s;
 },
 S69:(p,H)=>{const {C,text,line,rect}=H;
  const s=frame(p,H,'S69','결과의 타당성과 원인 귀속은 별개다','ACT 4 · OBSERVED META / 두 가지 검증 질문','TRIAL-006 · resize_nearest · 7 one-call samples · 기록 재구성','기록된 합성 입력·CPython 3.9.6·macOS arm64의 결과. 현재 Desktop 또는 일반 효과가 아니다.','OBSERVED_META');
  text(s,'01',64,215,512,34,23,C.teal,true,H.CODE);
  text(s,'측정 결과는 유효한가?',64,263,512,52,33,C.teal,true);
  text(s,'02',704,215,512,34,23,C.warn,true,H.CODE);
  text(s,'무엇이 결과를 만들었나?',704,263,512,52,32,C.warn,true);
  line(s,64,337,512,C.teal,3);line(s,704,337,512,C.warn,3);
  text(s,'입력·출력 hash 일치\n같은 조건의 측정 기록',64,363,512,102,31,C.ink,true);
  text(s,'Global Skill이 평가 절차에 관여\nPrompt만의 효과는 분리 못함',704,363,512,102,29,C.ink,true);
  text(s,'144.2 → 33.5 ms/call median',64,475,512,42,26,C.sub);
  text(s,'인과 해석: PARTIAL',704,475,512,42,29,C.warn,true);
  text(s,'결과에 대한 확인과, 원인에 대한 확신을 따로 기록한다.',64,555,1152,42,30,C.teal,true);
  return s;
 },
 S70:(p,H)=>{const {C,text,line,arrow}=H;
  const s=frame(p,H,'S70','평가와 보고 규칙을 Evidence에 맞추다','ACT 4 · OBSERVED META / 실제 기록 방식 변경','TRIAL-006 → DEC-0016 · 평가·보고 기준을 요약한 도식','제품 코드·Demo Skill 수정이 아니며, 격리 환경에서 Prompt 효과를 검증한 것도 아니다.','OBSERVED_META');
  text(s,'DEC-0016 · 바뀐 것은 후속 Trial을 기록하는 기준',64,215,1152,52,33,C.teal,true);
  text(s,'기존 빈틈: 작업·Repository 중심으로 보고 주변 Harness 영향 설명이 부족했다.',64,280,1152,40,26,C.sub);
  const items=[['기존 결과 보존','TRIAL-006\nPARTIAL로 남김'],['진행 조건 명시','clean isolation을\n진행 조건으로 두지 않음'],['후속 기록 변경','관찰된 환경 영향을\n다음 Trial에 함께 기록']];
  items.forEach((a,i)=>{const x=64+i*398;
   line(s,x,352,350,C.teal,3);
   text(s,a[0],x,370,350,43,29,C.teal,true);
   text(s,a[1],x,431,350,98,i===1?27:29,C.ink,true);
   if(i<2)arrow(s,x+358,395,27,20,C.teal);
  });
  text(s,'기록 대상: Skills · 경고 / 실행·사용 여부 · 결과를 설명할 수 있는 범위',64,553,1152,44,26,C.sub);
  return s;
 },
 S71:(p,H)=>{const {C,text,line,rect}=H;
  const s=frame(p,H,'S71','후속 기록은 개선됐지만 완전하지 않았다','ACT 4 · OBSERVED META / 후속 기록 대조','TRIAL-007/008 · DEC-0016 · 원문 기록의 의미를 요약한 도식','MCP 작업 결과는 없음. 완전한 환경 목록이나 측정된 품질 향상을 뜻하지 않는다.','OBSERVED_META');
  text(s,'TRIAL-007',64,216,544,42,29,C.teal,true);
  text(s,'보고와 원문을 대조',64,268,544,40,28,C.ink,true);
  line(s,64,322,544,C.teal,3);
  text(s,'최종 보고',64,343,544,33,23,C.sub,true);
  text(s,'MCP 경고 없음',64,382,544,43,29,C.ink,true);
  text(s,'보존된 stderr · 진단 메시지 출력',64,444,544,33,23,C.sub,true);
  text(s,'Nimble AuthRequired',64,483,544,42,29,C.warn,true);
  text(s,'인증 필요 경고',64,532,544,35,25,C.warn);
  text(s,'TRIAL-008',704,216,512,42,29,C.teal,true);
  text(s,'사용 경로를 구분해 기록',704,268,512,40,28,C.ink,true);
  line(s,704,322,512,C.teal,3);
  rect(s,704,351,512,86,C.pale);
  text(s,'Repository Skill 호출',724,371,472,44,29,C.ink,true);
  text(s,'별도 기록',704,449,512,35,24,C.teal,true);
  rect(s,704,495,512,86,C.pale);
  text(s,'Global influence',724,515,472,44,29,C.ink,true);
  return s;
 },
 S72:(p,H)=>{const {C,text,line,rect}=H;
  const s=frame(p,H,'S72','실제 Meta Loop에서 바뀐 것','ACT 4 · OBSERVED META / 사례 회수','TRIAL-006 → DEC-0016 → TRIAL-007/008 · 실제 제작 기록','제품 코드의 개선이나 가상 stale Workflow의 복구 이력이 아니다.','OBSERVED_META');
  text(s,'바뀐 대상',64,221,1152,37,25,C.sub,true);
  text(s,'Trial을 평가하고 보고하는 기준',64,271,1152,60,40,C.teal,true);
  line(s,64,354,1152,C.teal,3);
  text(s,'남아 있는 확인 과제',64,374,1152,39,27,C.warn,true);
  const limits=[['원인별 효과','무엇이 기여했는가?'],['환경 목록의 완전성','빠진 조건은 없는가?'],['Trial 품질의 향상','실제로 더 좋아졌는가?']];
  limits.forEach((a,i)=>{const x=64+i*398;
   text(s,a[0],x,443,350,42,28,C.ink,true);
   text(s,a[1],x,491,350,41,25,C.sub);
  });
  text(s,'Feedback은 평가 체계도 바꿀 수 있다. 변경 뒤의 결과는 다시 확인한다.',64,556,1152,40,28,C.teal,true);
  return s;
 },
 S74:(p,H)=>{const {C,text,line,arrow}=H;
  const s=frame(p,H,'S74','여섯 시간의 Story를 한 장으로','ACT 5 · 전체 여정 회수','BEAT-060 · 이 교육의 문제 중심 진화 모델','앞의 방식을 버리거나, 모든 프로젝트가 같은 순서로 발전해야 한다는 뜻은 아니다.');
  text(s,'문제가 넓어질수록, 필요한 대응이 더해졌다.',64,202,1152,48,33,C.teal,true);
  const items=[['Chatbot','답을 구한다'],['Prompt','이번 작업을\n구체화한다'],['Context','프로젝트 지식을\n제공한다'],['Harness','일하는 환경을\n설계한다'],['Loop','피드백으로\n시스템을 고친다']];
  items.forEach((a,i)=>{const x=64+i*236;
   text(s,String(i+1).padStart(2,'0'),x,305,208,32,21,C.sub,true,H.CODE);
   line(s,x,352,208,C.teal,3);
   text(s,a[0],x,370,208,46,30,C.teal,true);
   text(s,a[1],x,438,208,90,26,C.ink,true);
   if(i<4)arrow(s,x+214,382,17,15,C.teal);
  });
  text(s,'지금 나는 AI를 어떤 방식으로 사용하고 있을까?',64,561,1152,39,30,C.ink,true);
  return s;
 },
 S76:(p,H)=>{const {C,text,line,rect}=H;
  const s=frame(p,H,'S76','필요성이 입증되지 않은 것은 보류했다','ACT 5 · 이번 Demo의 선택 기준','STATE-04-PERF · DEC-0018 · 이번 작업의 선택을 회고','모든 프로젝트에서 Subagent·Memory가 불필요하거나 적을수록 좋다는 뜻은 아니다.','OBSERVED_PRODUCT / TEACHING_MODEL');
  text(s,'이 구성요소가 현재 문제에 필요한가?',64,211,1152,50,35,C.teal,true);
  text(s,'이번 문제에 필요했던 것',64,306,544,43,29,C.teal,true);
  text(s,'이번에는 정당화하지 못한 것',704,306,512,43,28,C.warn,true);
  line(s,64,365,544,C.teal,3);line(s,704,365,512,C.warn,2);
  text(s,'Task Prompt\nContext와 Routing\n재사용 Workflow\nTests와 Benchmark',64,386,544,164,30,C.ink,true);
  text(s,'Subagent\nMemory',704,405,512,110,39,C.ink,true);
  text(s,'현재 문제가 필요로 하는 만큼 설계한다.',64,562,1152,38,30,C.teal,true);
  return s;
 },
 S77:(p,H)=>{const {C,text,line}=H;
  const s=frame(p,H,'S77','위임이 늘어도 개발자 책임은 남는다','ACT 5 · 개발자의 판단','BEAT-061–062 · 이 교육의 책임 원칙','Agent와 개발자의 역할을 고정된 분업표로 제시하는 것은 아니다.');
  text(s,'AI가 조사·생성·변경·실행·비교를 도와도',64,209,1152,48,32,C.sub);
  text(s,'결과를 수용하는 판단은 누가 하는가?',64,272,1152,54,36,C.teal,true);
  const items=[['목표','무엇을 해결할까?'],['판단','어떤 선택이\n적절할까?'],['검증','무엇으로\n확인할까?'],['책임','완료를\n수용해도 될까?']];
  items.forEach((a,i)=>{const x=64+i*294;line(s,x,368,262,C.teal,3);
   text(s,a[0],x,387,262,57,38,C.teal,true);
   text(s,a[1],x,463,262,77,27,C.ink,true);
  });
  text(s,'결과를 받는 일에는, 결과를 판단하는 책임이 함께 남는다.',64,562,1152,38,29,C.ink,true);
  return s;
 },
 S78:(p,H)=>{const {C,text,line,rect}=H;
  const s=frame(p,H,'S78','AI-Native Development는\n이 교육의 운영 모델','ACT 5 · 일하는 환경을 설계한다','DEC-0023 · 과정에서 사용하는 운영 모델','공식·보편 정의가 아니며, 모든 Task에 모든 구성요소를 넣으라는 뜻은 아니다.');
  text(s,'AI가 일할 조건과, 결과를 확인할 경로를 설계한다.',64,218,1152,49,32,C.teal,true);
  const vals=[['작업 경계','무엇을 맡기고\n어디까지 바꿀까?'],['지식 · 절차','무엇을 알고\n어떤 방식으로 일할까?'],['검증 · 피드백','어떻게 확인하고\n다음 작업을 바꿀까?']];
  vals.forEach((a,i)=>{const x=64+i*398;
   line(s,x,338,350,C.teal,3);
   text(s,a[0],x,358,350,46,30,C.teal,true);
   text(s,a[1],x,433,350,105,30,C.ink,true);
  });
  return s;
 },
 S79:(p,H)=>{const {C,text,line,rect}=H;
  const s=frame(p,H,'S79','어느 Layer에서 마찰이 반복되는가?','ACT 5 · C++ VISION / 내 업무로 연결','BEAT-068–069 · 업무 적용을 위한 교육용 질문','같은 수준의 선택지다. 특정 C++ 프로젝트에서 검증된 절차나 필수 도입 순서가 아니다.');
  text(s,'지금 내 업무와 가장 가까운 한 곳을 떠올려 본다.',64,189,1152,42,29,C.teal,true);
  const vals=[['A','Task','조사할 성능 병목의 범위가 흐리다'],['B','Context','빌드 조건·계약·하드웨어 가정을 반복 설명한다'],['C','Workflow','분석 → 변경 → 측정 → 회귀 확인을 매번 적는다'],['D','Verification','테스트와 Benchmark의 확인 기준이 모호하다'],['E','Feedback Loop','같은 문제가 다시 생겨도 관련 시스템을 안 바꾼다']];
  vals.forEach((a,i)=>{const y=255+i*65;line(s,64,y,1152);
   rect(s,64,y+13,38,38,C.pale);
   text(s,a[0],64,y+14,38,35,23,C.teal,true,H.CODE,'center');
   text(s,a[1],125,y+10,245,46,27,C.teal,true);
   text(s,a[2],395,y+10,821,46,27,C.ink);
  });
  return s;
 },
 S80:(p,H)=>{const {C,text,line}=H;
  const s=frame(p,H,'S80','다음 작은 행동을 개인적으로 고른다','ACT 5 · 잠시 생각해 보기','BEAT-070–071 · 개인 성찰','마음속으로 떠올리는 시간이다. 기록·발표·제출은 요구하지 않는다.');
  text(s,'떠올린 마찰에서, 작은 행동 하나를 마음속으로.',64,205,1152,50,34,C.teal,true);
  const items=[['01','반복 설명 하나를 다음 작업에서는 어떻게 줄일까?'],['02','AI가 다시 찾는 프로젝트 사실 하나를 어디에 둘까?'],['03','같은 실패가 또 생기면 어느 Layer부터 확인할까?']];
  items.forEach((a,i)=>{const y=299+i*91;line(s,64,y,1152,C.line,1);
   text(s,a[0],64,y+18,80,44,25,C.sub,true,H.CODE);
   text(s,a[1],176,y+16,1040,53,31,C.ink,true);
  });
  return s;
 }
};
