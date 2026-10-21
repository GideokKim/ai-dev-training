// Audience-facing ACT 4 and ACT 5 layouts. S59 is supplied by the approved pilot.
export const slides={
 S57:(p,H)=>{const {C,text,line,arrow}=H;const s=H.frame(p,'S57','여기까지는 잘 동작했다','ACT 4 · 확인된 제품 결과','STATE-04-PERF · image_statistics · 실제 기록 요약','기록된 입력·코드·환경의 결과이며, 뒤의 가상 사례와 별개다.','OBSERVED_PRODUCT');
 text(s,'작업을 맡기고, 결과를 확인할 수 있었다',64,222,1152,48,36,C.teal,true);
 ['동작 계약','테스트','성능 측정'].forEach((v,i)=>{const x=64+i*398;line(s,x,310,340,C.teal,3);text(s,v,x,330,340,50,32,C.ink,true);});
 text(s,'입력·출력 조건 확인',64,396,345,50,27);text(s,'전체 테스트 11/11',462,396,345,50,27);text(s,'Benchmark guard 확인',860,396,350,50,26);
 text(s,'그렇다면 프로젝트가 바뀐 뒤에도 맞을까?',64,514,1152,62,38,C.ink,true);return s;},
 S58:(p,H)=>{const {C,text,line}=H;const s=H.frame(p,'S58','개념 사례: Project와 Workflow는 현재 맞다','ACT 4 · CONCEPTUAL / 가상 사례','DEMO-04A · 프로젝트 변화 전의 가상 설정','실제 Repository 변경 이력, Agent 실행 또는 테스트 결과가 아니다.','CONCEPTUAL');
 text(s,'처음에는 두 기준이 같았다',64,220,1152,50,34,C.teal,true);
 text(s,'프로젝트의 검증 기준',64,310,500,44,30,C.teal,true);text(s,'재사용 Workflow의 지시',704,310,510,44,30,C.teal,true);
 line(s,64,368,512,C.teal,3);line(s,704,368,512,C.teal,3);
 text(s,'단위 테스트',64,405,512,66,42,C.ink,true);text(s,'단위 테스트',704,405,512,66,42,C.ink,true);text(s,'=',600,408,60,60,40,C.teal,true);
 text(s,'현재 프로젝트에 맞춰 만들어 둔 절차',64,520,1152,54,34,C.ink,true);return s;},
 S60:(p,H)=>{const {C,text,line,rect}=H;const s=H.frame(p,'S60','Task 해결과 System 문제는 다르다','ACT 4 · CONCEPTUAL / 가상 사례','DEMO-04A · 이번 요청과 재사용 지침의 범위 비교','아래는 가능한 대응이다. 실제 실행·복구 성공·검증 누락을 관찰한 결과가 아니다.','CONCEPTUAL');
 text(s,'이번 요청에 “통합 테스트도 확인해 줘”를 더한다면?',64,224,1152,54,33,C.ink,true);
 text(s,'이번 Task',64,322,500,44,30,C.teal,true);text(s,'다음 Task가 읽을 Workflow',704,322,512,44,29,C.warn,true);line(s,64,380,512,C.teal,3);line(s,704,380,512,C.warn,3,'dash');
 text(s,'단위 + 통합 테스트를\n확인하도록 요청 가능',64,400,512,112,34,C.ink,true);text(s,'여전히\n단위 테스트만 지시',704,400,512,112,34,C.ink,true);
 text(s,'이번 답을 보정해도, 재사용 절차는 그대로일 수 있다.',64,546,1152,40,31,C.teal,true);return s;},
 S61:(p,H)=>{const {C,text,rows}=H;const s=H.frame(p,'S61','원인에 맞는 Layer를 고르기','ACT 4 · CONCEPTUAL / 대응 범위 비교','DEMO-04A · DEMO-11 · 가상 사례의 선택지','Workflow가 원인으로 확인된 경우의 판단이며, 모든 문제의 정답은 아니다.','CONCEPTUAL');
 text(s,'무엇을 바꾸면 다음 작업에도 반영될까?',64,222,1152,48,34,C.ink,true);
 rows(s,[['이번 Prompt 보정','현재 Task의 요청 범위를 넓힌다'],['전역 규칙 추가','다른 지침과 중복·충돌할 수 있다'],['원인인 Workflow 갱신','다음 Task가 재사용할 절차를 바꾼다']],{y:310,rowH:82,labelW:360,fontSize:28});
 text(s,'선택 기준: 원인이 있는 곳과 변경할 곳이 맞는가?',64,563,1152,32,29,C.teal,true);return s;},
 S62:(p,H)=>{const {C,text,line,rect}=H;const s=H.frame(p,'S62','실패 지점과 원인 Layer 구분하기','ACT 4 · CONCEPTUAL / 원인 후보','DEMO-11 · 원인을 찾기 위한 교육용 관점','가능한 원인 후보이며, 증상만으로 한 원인을 확정하지 않는다.','CONCEPTUAL');
 text(s,'“요청한 검증이 충분한가?”',64,238,560,68,38,C.ink,true);text(s,'증상에서 바로 결론으로 가지 않는다',64,326,560,78,29,C.sub);
 const labs=[['Context','현재 기준이 맞는가?'],['Workflow','어떤 절차를 지시하는가?'],['환경 · 권한','실행 조건이 맞는가?'],['제품 코드','동작 자체의 문제인가?']];
 labs.forEach((r,i)=>{const y=238+i*82;line(s,704,y,512,C.warn,1,'dash');text(s,r[0],704,y+10,180,52,27,C.warn,true);text(s,r[1],904,y+10,312,52,25);});
 text(s,'확인할 기록부터 찾는다',64,490,550,72,35,C.teal,true);return s;},
 S63:(p,H)=>{const {C,text,line}=H;const s=H.frame(p,'S63','먼저 관찰하고, 그다음 가설을 세운다','ACT 4 · CONCEPTUAL / 가정과 추론','DEMO-04A · 구성된 사례의 전제와 원인 가설','가상 설정을 실제 Trial 관찰로 표현하지 않는다. 실행 결과는 아직 없다.','CONCEPTUAL');
 text(s,'사례에 주어진 정보',64,234,520,46,31,C.teal,true);text(s,'확인해야 할 가설',704,234,512,46,31,C.warn,true);line(s,64,300,512,C.teal,3);line(s,704,300,512,C.warn,3,'dash');
 text(s,'현재 기준: 단위 + 통합\n재사용 지침: 단위만',64,327,512,118,33,C.ink,true);text(s,'오래된 Workflow가\n문제의 원인일 수 있다',704,327,512,118,33,C.ink,true);
 text(s,'실행 경로와 실제로 읽은 지침을 대조해야 원인을 판단할 수 있다.',64,516,1152,66,31,C.teal,true);return s;},
 S64:(p,H)=>{const {C,text,line,arrow,rect}=H;const s=H.frame(p,'S64','Cause가 지지하는 최소 변경','ACT 4 · CONCEPTUAL / 원인에 맞는 수정','DEMO-04A · 원인이 확인됐다고 가정한 변경 설계','실제 코드·Skill 수정 또는 실행 결과가 아니다. 관련 없는 규칙은 임의로 바꾸지 않는다.','CONCEPTUAL');
 text(s,'Workflow가 원인으로 확인됐다면',64,222,1152,50,34,C.warn,true);
 text(s,'기존 재사용 지침',64,322,500,44,29,C.sub,true);text(s,'갱신할 지침',704,322,512,44,29,C.teal,true);line(s,64,379,512,C.warn,3,'dash');line(s,704,379,512,C.teal,3);
 text(s,'단위 테스트를 확인',64,411,512,64,36,C.ink,true);arrow(s,600,421,64,26);text(s,'단위 + 통합 테스트 확인',704,411,512,64,34,C.ink,true);
 text(s,'원인이 뒷받침하는 범위까지 바꾼다.',64,533,1152,52,35,C.teal,true);return s;},
 S65:(p,H)=>{const {C,text,line,arrow}=H;const s=H.frame(p,'S65','같은 Task의 재실행만으로 충분할까?','ACT 4 · CONCEPTUAL / 평가 범위','DEMO-04A · 변경 후 확인할 질문을 설계한 도식','재실행·회귀 테스트 결과는 없다. 두 검증 질문을 구분하는 가상 사례다.','CONCEPTUAL');
 text(s,'이번 작업을 다시 확인',64,235,512,52,34,C.teal,true);text(s,'다른 작업도 확인',704,235,512,52,34,C.warn,true);line(s,64,310,512,C.teal,3);line(s,704,310,512,C.warn,3,'dash');
 text(s,'요청했던 검증 범위를\n이제 다루는가?',64,348,512,116,35,C.ink,true);text(s,'바뀐 지침이 다른 작업을\n방해하지 않는가?',704,348,512,116,35,C.ink,true);
 text(s,'확인할 범위가 다르므로, 두 질문이 모두 필요하다.',64,540,1152,44,31,C.teal,true);return s;},
 S66:(p,H)=>{const {C,text,line,rect}=H;const s=H.frame(p,'S66','대표 작업으로 변경 범위를 확인하기','ACT 4 · CONCEPTUAL / 평가 설계','DEMO-10 · 네 작업 모두 이 Workflow 변경 후의 평가 결과는 없음','EVAL-01/02: 별도 과거 관찰 참고 · EVAL-03/04: 설계만 있음 · 새 실행·PASS/FAIL 없음','CONCEPTUAL');
 text(s,'작업 수보다, 서로 다른 위험을 덮는가?',64,214,1152,52,33,C.ink,true);
 const vals=[['버그 수정','동작 계약을 확인하는가?','EVAL-01 · TRIAL-002'],['성능 변경','측정과 검증 범위를 유지하는가?','EVAL-02 · STATE-04-PERF'],['문서만 수정','불필요한 절차를 강요하지 않는가?','EVAL-03 · 설계 사례'],['작은 리팩터링','다른 유효한 작업을 방해하지 않는가?','EVAL-04 · 설계 사례']];
 vals.forEach((r,i)=>{const y=285+i*72;line(s,64,y,1152,i<2?C.green:C.warn,1,i<2?'solid':'dash');text(s,r[0],64,y+8,240,52,28,C.ink,true);text(s,r[1],320,y+8,605,52,27);text(s,r[2],930,y+10,286,48,19,i<2?C.green:C.warn,true);});return s;},
 S67:(p,H)=>{const {C,text,line,rect,arrow}=H;const s=H.frame(p,'S67','Harness도 특정 실패에 맞춰\n과적합될 수 있다','ACT 4 · CONCEPTUAL / 규칙 유지보수','DEMO-04A · 과적합은 이 교육의 비유','Machine Learning의 통계적 과적합과 같은 현상이라는 주장이 아니다.','CONCEPTUAL');
 text(s,'실패할 때마다 규칙을 하나씩 더하면',64,228,1152,50,33,C.ink,true);
 const r=[['규칙 누적','읽고 유지할 내용이 커짐'],['규칙 충돌','서로 다른 지시가 섞임'],['특정 작업에만 맞춤','다른 작업에서 적합성 미확인']];r.forEach((a,i)=>{const x=64+i*394;line(s,x,330,350,C.warn,3,'dash');text(s,a[0],x,350,350,58,29,C.warn,true);text(s,a[1],x,425,350,88,24);});
 text(s,'원인을 확인하고, 대표 작업으로 평가하고, 불필요한 규칙을 정리한다.',64,548,1152,42,28,C.teal,true);return s;},
 S68:(p,H)=>{const {C,text,flow,line}=H;const s=H.frame(p,'S68','Feedback을 System Change와\nEvaluation으로 잇기','ACT 4 · 이 교육의 Loop 모델','DEC-0023 · 교육용 운영 모델','모델의 자동 학습이나 실제 Product Loop를 관찰했다는 뜻은 아니다.','TEACHING_MODEL');
 flow(s,[{title:'실행',body:'무엇을 했나?'},{title:'관찰',body:'무엇이 보였나?'},{title:'원인 판단',body:'왜 생겼나?'},{title:'시스템 변경',body:'어디를 바꾸나?'},{title:'재평가',body:'다른 작업도\n괜찮은가?'}],{y:282,h:198,fontSize:28});
 text(s,'다음 작업에도 영향을 주는 변경으로 연결한다.',64,520,1152,62,38,C.teal,true);return s;},
 S69:(p,H)=>{const {C,text,line,arrow}=H;const s=H.frame(p,'S69','실제 제작 기록: TRIAL-006','ACT 4 · OBSERVED META / 교육자료 제작 기록','TRIAL-006 · 과거 Codex CLI 조사 기록의 재구성','앞의 가상 Workflow와 별개 사건이다. 제품 코드·Demo Skill의 수정 사례가 아니다.','OBSERVED_META');
 text(s,'성능 조사에 Prompt 밖의 환경도 함께 관여했다.',64,220,1152,54,34,C.teal,true);
 text(s,'작업 요청',64,325,350,44,31,C.ink,true);text(s,'실행 환경',480,325,350,44,31,C.ink,true);text(s,'결과 해석',900,325,316,44,31,C.ink,true);
 line(s,64,390,350,C.teal,3);line(s,480,390,350,C.teal,3);line(s,900,390,316,C.teal,3);arrow(s,425,408,36,22);arrow(s,845,408,36,22);
 text(s,'성능 개선 작업',64,414,350,80,29);text(s,'Global Skill 관여\n시작 경고도 기록',480,414,350,94,28);text(s,'Prompt만의 효과?\n귀속은 PARTIAL',900,414,316,94,28,C.warn,true);
 text(s,'좋은 결과가 있다는 것과 원인을 안다는 것은 별개다.',64,548,1152,40,31,C.ink,true);return s;},
 S70:(p,H)=>{const {C,text,line}=H;const s=H.frame(p,'S70','결과의 타당성과 원인 귀속은 별개다','ACT 4 · OBSERVED META / 두 가지 검증 질문','TRIAL-006 · resize_nearest · 7 one-call samples · 기록 재구성','기록된 합성 입력·CPython 3.9.6·macOS arm64의 결과. 현재 Desktop 또는 일반 효과가 아니다.','OBSERVED_META');
 text(s,'측정 결과는 유효한가?',64,230,520,50,33,C.teal,true);text(s,'무엇이 결과를 만들었나?',704,230,512,50,32,C.warn,true);line(s,64,300,512,C.teal,3);line(s,704,300,512,C.warn,3);
 text(s,'입력·출력 hash 일치\n같은 조건의 측정 기록',64,325,512,100,31,C.ink,true);text(s,'Global Skill이 평가 절차에 관여\nPrompt만의 효과는 분리 못함',704,325,512,100,29,C.ink,true);
 text(s,'144.2 → 33.5 ms/call median',64,456,512,50,26,C.sub);text(s,'인과 해석: PARTIAL',704,456,512,50,31,C.warn,true);
 text(s,'측정된 변화와, 그 변화의 원인에 대한 확신을 따로 기록한다.',64,546,1152,40,30,C.teal,true);return s;},
 S71:(p,H)=>{const {C,text,line,arrow}=H;const s=H.frame(p,'S71','평가와 보고 규칙을 Evidence에 맞추다','ACT 4 · OBSERVED META / 실제 기록 방식 변경','TRIAL-006 → DEC-0016 · 평가·보고 기준을 요약한 도식','제품 코드·Demo Skill 수정이 아니며, 격리 환경에서 Prompt 효과를 검증한 것도 아니다.','OBSERVED_META');
 text(s,'이후 Trial에는 관찰된 환경 영향도 기록한다.',64,222,1152,52,35,C.teal,true);
 text(s,'기존 평가의 빈틈',64,325,512,44,30,C.sub,true);text(s,'후속 기록 기준',704,325,512,44,30,C.teal,true);line(s,64,385,512,C.line,2);line(s,704,385,512,C.teal,3);
 text(s,'작업과 Repository 중심\n주변 Harness 영향 설명 부족',64,408,512,114,30,C.ink,true);text(s,'관찰된 Skills · 경고 · 사용 여부\n결과를 설명할 수 있는 범위',704,408,512,114,29,C.ink,true);
 text(s,'기존 결과는 PARTIAL로 보존하고, 관찰된 조건을 함께 남긴다.',64,554,1152,36,28,C.teal,true);return s;},
 S72:(p,H)=>{const {C,text,line,rect}=H;const s=H.frame(p,'S72','후속 기록은 개선됐지만 완전하지 않았다','ACT 4 · OBSERVED META / 후속 기록 대조','TRIAL-007/008 · DEC-0016 · 원문 기록의 의미를 요약한 도식','MCP 작업 결과는 없음. 완전한 환경 목록이나 측정된 품질 향상을 뜻하지 않는다.','OBSERVED_META');
 text(s,'TRIAL-007 · 보고와 기록의 불일치',64,226,1152,46,30,C.ink,true);line(s,64,288,1152,C.teal,2);
 text(s,'최종 보고',64,315,245,48,28,C.teal,true);text(s,'MCP 경고 없음',332,315,884,48,30);
 text(s,'보존된 stderr',64,382,245,48,28,C.warn,true);text(s,'Nimble AuthRequired',332,382,884,48,30,C.warn,true);
 line(s,64,466,1152,C.line,1);text(s,'TRIAL-008',64,495,245,48,28,C.teal,true);text(s,'Repository Skill 호출과 Global influence를 별도 기록',332,495,884,62,27);
 return s;},
 S73:(p,H)=>{const {C,text,line,flow}=H;const s=H.frame(p,'S73','실제 Meta Loop에서 바뀐 것','ACT 4 · OBSERVED META / 사례 회수','TRIAL-006 → DEC-0016 → TRIAL-007/008 · 실제 제작 기록','제품 코드의 개선이나 가상 stale Workflow의 복구 이력이 아니다.','OBSERVED_META');
 text(s,'실제로 바뀐 것',64,240,512,48,32,C.teal,true);text(s,'아직 확인하지 못한 것',704,240,512,48,32,C.warn,true);line(s,64,310,512,C.teal,3);line(s,704,310,512,C.warn,3);
 text(s,'Trial을 평가하고\n보고하는 기준',64,350,512,116,39,C.ink,true);text(s,'원인별 효과\n환경 목록의 완전성\nTrial 품질의 향상',704,342,512,155,30,C.ink,true);
 text(s,'Feedback은 평가 체계도 바꿀 수 있다. 변경 뒤의 결과는 다시 확인한다.',64,548,1152,42,28,C.teal,true);return s;},
 S74:(p,H)=>{const {C,text,line,rows}=H;const s=H.frame(p,'S74','Project와 환경이 바뀌면\n검증도 다시 본다','ACT 4 · C++ VISION / 적용을 위한 가상 질문','BEAT-059 · TRANS-012 · 교육용 전이 모델','실제 C++ 사건·성능 결과·특정 도구 사용법을 검증한 사례가 아니다.','CONCEPTUAL / TEACHING_MODEL');
 text(s,'GPU · 빌드 · 측정 조건이 달라졌다면?',64,224,1152,50,35,C.teal,true);
 rows(s,[['기존 가정','어떤 조건에서 맞던 판단인가?'],['측정 조건','입력과 실행 조건은 비교 가능한가?'],['기능 계약','성능 변화와 함께 다시 확인할 동작은?']],{y:310,rowH:73,labelW:278,fontSize:29});
 text(s,'같은 문제가 반복될 때, 어느 Layer를 먼저 살펴볼까?',64,550,1152,40,32,C.ink,true);return s;},
 S75:(p,H)=>{const {C,text,line}=H;const s=H.frame(p,'S75','여섯 시간의 Story를 한 장으로','ACT 5 · 전체 여정 회수','BEAT-060 · 이 교육의 문제 중심 진화 모델','앞의 방식을 버리거나, 모든 프로젝트가 같은 순서로 발전해야 한다는 뜻은 아니다.','TEACHING_MODEL');
 const v=[['Chatbot','답을 구한다'],['Prompt','이번 작업을 구체화한다'],['Context','프로젝트 지식을 제공한다'],['Harness','일하는 환경을 설계한다'],['Loop','피드백으로 시스템을 고친다']];
 v.forEach((r,i)=>{const yy=220+i*65;line(s,64,yy,1152);text(s,r[0],64,yy+10,260,48,29,C.teal,true);text(s,r[1],380,yy+10,836,48,30);});
 text(s,'문제가 넓어질수록, 필요한 대응이 더해졌다.',64,566,1152,35,30,C.ink,true);return s;},
 S76:(p,H)=>{const {C,text,line}=H;const s=H.frame(p,'S76','하나의 Repository가 문제에 대응해 진화했다','ACT 5 · 확인된 제품 변화','DEMO-12 · STATE-00 → STATE-04-PERF · 실제 Git State 기록','상태는 변화 이력이다. 기능 성숙도 등급이나 Product Loop를 뜻하지 않는다.','OBSERVED_PRODUCT');
 const items=[['STATE-00','crop 경계 문제'],['STATE-00-FIXED','계약에 맞게 수정'],['STATE-01','프로젝트 지침'],['STATE-02','Context 증가'],['STATE-03','상세 정보로 연결'],['STATE-04','재사용 Workflow'],['STATE-04-PERF','검증된 제품 변경']];
 items.forEach((a,i)=>{const row=i<4?0:1,j=i<4?i:i-4,x=64+j*294,y=237+row*154;line(s,x,y,264,i===6?C.green:C.teal,3);text(s,a[0],x,y+13,264,36,22,i===6?C.green:C.teal,true);text(s,a[1],x,y+60,264,55,26,C.ink,true);});
 text(s,'각 변화의 출발점은, 그때 마주친 문제였다.',64,557,1152,40,32,C.teal,true);return s;},
 S77:(p,H)=>{const {C,text,line}=H;const s=H.frame(p,'S77','필요성이 입증되지 않은 것은 보류했다','ACT 5 · 이번 Demo의 선택 기준','STATE-04-PERF · DEC-0018 · 이번 작업의 선택을 회고','모든 프로젝트에서 Subagent·Memory가 불필요하거나 적을수록 좋다는 뜻은 아니다.','OBSERVED_PRODUCT / TEACHING_MODEL');
 text(s,'이번 문제에 필요했던 것',64,235,512,52,32,C.teal,true);text(s,'이번에는 정당화하지 못한 것',704,235,512,52,30,C.warn,true);line(s,64,310,512,C.teal,3);line(s,704,310,512,C.warn,2);
 text(s,'Task Prompt\nContext와 Routing\n재사용 Workflow\nTests와 Benchmark',64,332,512,179,30,C.ink,true);text(s,'Subagent\nMemory',704,348,512,122,39,C.ink,true);
 text(s,'현재 문제가 필요로 하는 만큼 설계한다.',64,548,1152,48,36,C.teal,true);return s;},
 S78:(p,H)=>{const {C,text,line}=H;const s=H.frame(p,'S78','위임이 늘어도 개발자 책임은 남는다','ACT 5 · 개발자의 판단','BEAT-061–062 · 이 교육의 책임 원칙','Agent와 개발자의 역할을 고정된 분업표로 제시하는 것은 아니다.','TEACHING_MODEL');
 text(s,'AI가 조사·생성·변경·실행·비교를 도와도',64,220,1152,50,33,C.sub);
 const items=[['목표','무엇을 해결할까?'],['판단','어떤 선택이 적절할까?'],['검증','무엇으로 확인할까?'],['책임','완료를 수용해도 될까?']];items.forEach((a,i)=>{const x=64+i*294;line(s,x,332,262,C.teal,3);text(s,a[0],x,354,262,58,38,C.teal,true);text(s,a[1],x,443,262,74,26,C.ink,true);});
 text(s,'결과를 받는 일에는, 결과를 판단하는 책임이 함께 남는다.',64,554,1152,40,30,C.ink,true);return s;},
 S79:(p,H)=>{const {C,text,rows}=H;const s=H.frame(p,'S79','AI-Native Development는\n이 교육의 운영 모델','ACT 5 · 일하는 환경을 설계한다','DEC-0023 · 과정에서 사용하는 운영 모델','공식·보편 정의가 아니며, 모든 Task에 모든 구성요소를 넣으라는 뜻은 아니다.','TEACHING_MODEL');
 text(s,'AI가 일할 조건과, 결과를 확인할 경로를 설계한다.',64,227,1152,52,32,C.teal,true);
 const vals=[['작업 경계','무엇을 맡기고 어디까지 바꿀까?'],['지식 · 절차','무엇을 알고, 어떤 방식으로 일할까?'],['검증 · 피드백','어떻게 확인하고 다음 작업을 바꿀까?']];rows(s,vals,{y:322,rowH:78,labelW:345,fontSize:29});return s;},
 S80:(p,H)=>{const {C,text,line}=H;const s=H.frame(p,'S80','어느 Layer에서 마찰이 반복되는가?','ACT 5 · C++ VISION / 내 업무로 연결','BEAT-068–069 · 업무 적용을 위한 교육용 질문','같은 수준의 선택지다. 특정 C++ 프로젝트에서 검증된 절차나 필수 도입 순서가 아니다.','TEACHING_MODEL');
 const v=[['Task','조사할 성능 병목의 범위가 흐리다'],['Context','빌드 조건·계약·하드웨어 가정을 반복 설명한다'],['Workflow','분석 → 변경 → 측정 → 회귀 확인을 매번 적는다'],['Verification','테스트와 Benchmark의 확인 기준이 모호하다'],['Feedback Loop','같은 문제가 다시 생겨도 관련 시스템을 안 바꾼다']];v.forEach((a,i)=>{const y=227+i*67;line(s,64,y,1152);text(s,a[0],64,y+8,300,49,27,C.teal,true);text(s,a[1],380,y+8,836,49,28);});
 text(s,'지금 내 업무와 가장 가까운 한 곳을 떠올려 본다.',64,568,1152,33,28,C.ink,true);return s;},
 S81:(p,H)=>{const {C,text,line}=H;const s=H.frame(p,'S81','다음 작은 행동을 개인적으로 고른다','ACT 5 · 잠시 생각해 보기','BEAT-070–071 · 개인 성찰','마음속으로 떠올리는 시간이다. 기록·발표·제출은 요구하지 않는다.','TEACHING_MODEL');
 const v=['내가 반복해서 적는 설명은 무엇인가?','AI가 반복해서 다시 찾는 프로젝트 사실은 무엇인가?','같은 실패가 또 생긴다면 어디를 고칠 것인가?'];v.forEach((t,i)=>{const y=250+i*102;line(s,64,y,1152,C.line,1);text(s,t,64,y+18,1152,66,34,C.ink,true);});return s;},
 S82:(p,H)=>{const {C,text,line}=H;const s=H.frame(p,'S82','Q&A와 교육 마무리','ACT 5 · 마지막 질문','BEAT-070–071 · 이 교육의 마무리','목표 · 판단 · 검증 · 책임은 개발자에게 남는다.','TEACHING_MODEL');
 text(s,'내 업무에서 무엇부터 바꿀까요?',64,230,1152,72,40,C.teal,true);
 line(s,64,354,1152,C.teal,2);text(s,'AI가 잘 일할 환경을\n설계한다.',64,391,1152,153,56,C.ink,true);
 text(s,'Question  →  Task  →  Context  →  System  →  Feedback Loop',64,564,1152,35,27,C.sub);return s;}
};
