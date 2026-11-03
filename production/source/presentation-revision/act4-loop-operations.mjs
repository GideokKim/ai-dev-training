/** Approved final-ID ACT4 scenes. Each scene adds exactly one editable slide. */
import {addPracticalTipBadge} from './practical-tips.mjs';

export function loopOperationsFactories(H) {
  const {C,FONT,CODE,text,rect,line} = H;
  const blue = '#315C87';
  const bluePale = '#E1EBF6';
  const article = '김기덕 · 사내 Codex 운영기 (2026.06.16)';
  const reconstruction = '밝기 통계 사례 · 교육용 재구성';
  const caseKind = 'CONCEPTUAL';
  const common = (p,id,title,eyebrow,source,kind='TEACHING_MODEL',modules='신규 확장',tip='') => {
    const slide = H.frame(p,id,title,'ACT 4 · '+eyebrow,source,'',kind);
    text(slide,'M 연계 · '+modules,988,674,228,23,16,C.sub,false,FONT,'right');
    if (tip) addPracticalTipBadge(slide,tip,H);
    return slide;
  };
  const label = (s,t,x,y,w,color=C.teal) => text(s,t,x,y,w,34,24,color,true);
  const lead = (s,t) => text(s,t,64,177,1152,48,31,C.teal,true);
  const takeaway = (s,t) => text(s,t,64,550,1152,52,30,C.ink,true);
  const connect = (s,x,y,w,h=0,color=C.teal,reverse=false) => s.shapes.add({
    geometry:'connector',kind:'straight',position:{left:x,top:y,width:w,height:h},
    line:{fill:color,width:2.5},[reverse?'head':'tail']:{type:'triangle',width:'sm',length:'sm'}
  });
  function node(s,title,x,y,w,h,tint=C.white,stroke=C.teal,size=30) {
    const box = rect(s,x,y,w,h,tint,stroke,1.5); box.borderRadius=8;
    text(s,title,x+10,y+4,w-20,h-8,size,C.ink,true,FONT,'center');
  }
  function row(s,y,left,right,accent=C.teal) {
    line(s,64,y,1152);
    text(s,left,70,y+11,295,48,27,accent,true);
    text(s,right,376,y+11,826,48,28,C.ink);
  }
  function requestWindow(s,x,y,w,h,title) {
    const body=rect(s,x,y,w,h,C.white,C.line,1.5); body.borderRadius=10;
    const chrome=rect(s,x+1,y+1,w-2,37,'#EDF1F5'); chrome.borderRadius=9;
    ['#FF5F57','#FEBC2E','#28C840'].forEach((fill,i)=>s.shapes.add({
      geometry:'ellipse',name:'Window control '+(i+1),
      position:{left:x+15+i*17,top:y+13,width:10,height:10},
      fill,line:{fill:'none',width:0}
    }));
    text(s,title,x+78,y+4,w-99,30,20,C.sub,true);
    line(s,x+1,y+39,w-2);
  }
  function section(s,x,y,w,kicker,title,detail,tint=C.teal) {
    line(s,x,y,w,tint,2);
    label(s,kicker,x,y+12,w,tint);
    text(s,title,x,y+67,w,58,34,C.ink,true);
    text(s,detail,x,y+140,w,92,26,C.sub);
  }

  return {
    S79(p) {
      const s=common(p,'S79','아침 6시, 어제 올린 MR이 열려 있다','사내 운영 사례',article);
      label(s,'어제',64,195,490);
      rect(s,64,244,474,212,C.white,C.line,1.5);
      text(s,'GitLab  /  병합 요청',88,259,420,38,24,C.sub);
      line(s,88,309,426);
      text(s,'코드 변경 검토 요청',88,324,426,57,35,C.ink,true);
      text(s,'열림 · 병합 대기',88,384,426,46,29,C.warn,true);
      connect(s,548,349,86);
      label(s,'오늘 06:00',664,195,552);
      text(s,'지금 새 이슈를\n시작해도 될까?',664,256,552,153,49,C.ink,true);
      takeaway(s,'무엇을 할지 정하려면, 앞선 작업의 상태부터 읽어야 한다');
      return s;
    },
    S80(p) {
      const s=common(p,'S80','두 화살표가 돌아가는 곳','두 범위의 루프','팀 운영 사례와 한 이슈의 교육용 설계');
      rect(s,64,205,1152,316,C.white,C.line,1.5);
      label(s,'팀의 다음 실행',86,216,310,blue);
      node(s,'이전 MR 상태',88,278,240,77,bluePale,blue,29);
      connect(s,328,316,57);
      node(s,'오늘의 작업',385,278,238,77,C.white,blue,29);
      connect(s,623,316,55);
      rect(s,678,249,506,180,C.pale,C.teal,1.5);
      label(s,'한 이슈 · 같은 목표',699,256,465);
      node(s,'구현',701,309,145,55,C.white,C.teal,26);
      node(s,'검토',1008,309,145,55,C.white,C.teal,26);
      connect(s,846,336,162);
      connect(s,780,392,293,0,C.warn,true);
      text(s,'남은 지적 → 다음 수정',786,365,293,28,20,C.warn,true,FONT,'center');
      connect(s,1073,365,0,27,C.warn); connect(s,780,365,0,27,C.warn,true);
      text(s,'대기 또는 진행',92,378,482,43,27,blue,true);
      text(s,'작업 기록 저장  →  다음 실행에서 다시 확인',91,457,1066,47,28,blue,true);
      takeaway(s,'이슈 안에서는 후보를 갱신하고, 다음 실행에서는 업무 상태를 읽는다');
      return s;
    },
    S81(p) {
      const s=common(p,'S81','이번 이슈의 완료 기준','밝기 통계 · 고정할 목표',reconstruction,caseKind,'M5 · M6');
      lead(s,'밝기 통계의 여섯 출력을 보존하면서 임시 메모리를 줄인다');
      label(s,'고정할 기준',70,254,295); label(s,'같은 대표 입력에서 확인할 근거',376,254,826);
      row(s,304,'출력과 동작','여섯 출력값과 기존 테스트를 기준판과 대조');
      row(s,379,'임시 할당','계산 중 Python 할당 피크를 기준판과 비교');
      row(s,454,'실행시간','같은 입력·환경·측정 방식으로 기준판과 비교');
      takeaway(s,'후보를 바꿀 때마다 같은 세 기준으로 돌아온다');
      return s;
    },
    S82(p) {
      const s=common(p,'S82','첫 후보에서 무엇을 확인할까','밝기 통계 · 후보 v1',reconstruction,caseKind,'M5 · M6');
      lead(s,'출력이 같아도 큰 임시 목록이 남아 있을 수 있다');
      label(s,'후보 v1 · 계산 부분 발췌 예시',64,260,570);
      rect(s,64,314,564,128,C.ink);
      text(s,'pixels = [v for row in rows\n            for v in row]',84,331,527,90,28,C.white,false,CODE);
      connect(s,644,377,65);
      label(s,'검토할 근거',736,260,480);
      text(s,'출력 검사',736,322,448,42,31,C.ink,true);
      text(s,'여섯 출력은 보존했는가?',736,367,455,34,25,C.sub);
      text(s,'할당 측정',736,415,448,42,31,C.ink,true);
      text(s,'전체 픽셀 복사 비용은 얼마인가?',736,460,470,34,25,C.sub);
      takeaway(s,'동작 검사와 할당 측정은 서로 다른 완료 조건을 확인한다');
      return s;
    },
    S83(p) {
      const s=common(p,'S83','Checker가 수정을 요청할 근거','밝기 통계 · 검토 지적',reconstruction,caseKind,'M5 · M6','검증·개선');
      lead(s,'검토자는 목표·명세와 후보의 diff, 검사 기록을 함께 읽는다');
      const decisions=[
        [260,'수용','R1  전체 픽셀 목록이 남음','목록 생성 위치를 다음 수정에 전달',C.teal],
        [349,'기각','출력 항목을 줄이자는 제안','여섯 출력을 보존한다는 명세와 충돌',C.sub],
        [438,'추가 확인','실행시간이 늘었다는 지적','같은 입력의 측정 기록 요청',C.warn]
      ];
      for(const [y,key,claim,evidence,color] of decisions) {
        line(s,64,y,1152);
        text(s,key,70,y+18,180,48,30,color,true);
        text(s,claim,270,y+18,456,48,27,C.ink,true);
        text(s,evidence,746,y+18,463,48,25,C.sub);
      }
      takeaway(s,'근거로 확인한 지적만 다음 구현 요청에 넣는다');
      return s;
    },
    S84(p) {
      const s=common(p,'S84','같은 지적이 v2의 입력이 된다','밝기 통계 · 검토에서 다음 요청으로',reconstruction,caseKind,'M5 · M6');
      rect(s,64,198,101,309,C.pale,C.teal,1.5);
      text(s,'R1',70,288,90,80,49,C.teal,true,FONT,'center');
      const rows=[
        [198,'v1 검토','전체 픽셀을 복사하는 임시 목록이 남아 있다.'],
        [300,'다음 요청','목록을 없애고 여섯 출력을 보존해.\n같은 입력으로 할당 피크와 실행시간을 다시 확인해.'],
        [421,'v2 재검토','전체 복사 줄 삭제 → 행별 min·max·sum 집계\n출력·할당 피크·시간 측정을 다시 대조한다.']
      ];
      for(const [y,key,body] of rows){
        line(s,187,y,1029);label(s,key,198,y+16,158);
        text(s,body,368,y+9,829,key==='다음 요청'?97:73,28,C.ink,key==='다음 요청');
      }
      takeaway(s,'시간 근거가 빠졌다면 R1에 남겨 두고 다시 확인한다');
      return s;
    },
    S85(p) {
      const s=common(p,'S85','다음 수정, 완료, 중단','밝기 통계 · 근거로 다음 행동 선택',reconstruction,caseKind,'M5 · M6','검증·개선');
      lead(s,'다시 검사한 R1을 어디로 보낼까?');
      const branches=[
        [256,'모든 기준 충족','완료 보고','후보와 검사 기록을 사람 검토에 제출',C.teal],
        [348,'수정할 위반이 남음','다음 수정','남은 지적과 근거를 같은 목표로 되돌림',blue],
        [440,'측정 불가·한도 도달','미완료 중단','막힌 조건을 남기고 사람에게 판단 요청',C.warn]
      ];
      for(const [y,condition,action,detail,color] of branches) {
        line(s,64,y,1152);
        text(s,condition,69,y+15,348,53,28,C.ink,true);
        connect(s,412,y+41,63,0,color);
        text(s,action,499,y+15,211,53,29,color,true);
        text(s,detail,736,y+15,470,53,24,C.sub);
      }
      takeaway(s,'중단한 작업은 남은 조건을 보존한 채 인계한다');
      return s;
    },
    S86(p) {
      const s=common(p,'S86','구현자와 검토자를 어떻게 고를까','모델 역할 배치','CriticBench (ACL Findings 2024) · 생성·검토·수정 능력 평가','RESEARCH','M5 · M6');
      section(s,64,229,552,'구현 담당  /  Maker','변경 후보를 만든다','명세와 범위에 맞는 diff,\n실행한 검사와 미확인 항목을 전달한다.');
      section(s,664,229,552,'검토 담당  /  Checker','근거를 대조한다','목표·diff·검사 결과를 읽고\n다음 수정에 쓸 지적을 제시한다.',blue);
      takeaway(s,'역할을 나눈 뒤, 같은 모델과 다른 모델 조합을 대표 작업에서 비교한다');
      return s;
    },
    S87(p) {
      const s=common(p,'S87','코드 생성 실험에서 검토 모델을 바꾸면','연구 · 코드 생성과 검토 모델 배치','Chen 외 · PairCoder (ACL Findings 2026) · 표 2, §4.6 · 반복 오류 시 역할 교대 허용','RESEARCH');
      lead(s,'HumanEval pass@1 (%)   ·   초기 구현 모델은 GPT-3.5-turbo');
      s.charts.add('bar',{
        name:'PairCoder HumanEval pass at one by initial reviewer',
        position:{left:64,top:244,width:756,height:284},
        categories:['단독','GPT-3.5-turbo','GPT-4','minimax-abab-chat'],
        series:[{name:'HumanEval pass@1 (%)',values:[69.51,81.16,90.01,48.19],
          points:[{idx:0,fill:'#9BA8B5'},{idx:1,fill:blue},{idx:2,fill:C.teal},{idx:3,fill:C.warn}],valuesFormatCode:'0.00'}],
        barOptions:{direction:'bar',grouping:'clustered',gapWidth:80,varyColors:true},hasLegend:false,
        xAxis:{visible:true,min:0,max:100,majorUnit:20,numberFormatCode:'0',textStyle:{fontSize:17,typeface:FONT,fill:C.sub},majorGridlines:{fill:C.line,width:1},line:{fill:C.line,width:1}},
        yAxis:{visible:true,min:0,max:100,majorUnit:20,numberFormatCode:'0',textStyle:{fontSize:20,typeface:FONT,fill:C.ink},line:{fill:'none',width:0},majorGridlines:null},
        dataLabels:{showValue:true,position:'outEnd',numberFormatCode:'0.00',textStyle:{fontSize:21,typeface:FONT,bold:true,fill:C.ink}},
        chartFill:C.bg,plotAreaFill:C.bg,chartLine:{fill:'none',width:0},plotAreaLine:{fill:'none',width:0}
      });
      label(s,'pass@1 · 첫 시도 정답률',858,259,352);
      text(s,'같은 모델 쌍\n81.16%',858,313,352,95,32,C.ink,true);
      text(s,'다른 모델 쌍은 이보다\n높거나 낮았다.',858,433,352,72,26,C.sub);
      takeaway(s,'팀의 대표 이슈에서 조합별 정답성·회귀·비용을 확인한다');
      return s;
    },
    S88(p) {
      const s=common(p,'S88','어제 MR 상태가 오늘의 첫 분기를 정한다','사내 운영 사례 · 다음 날의 첫 판단',article);
      label(s,'팀의 다음 실행',64,190,650,blue);
      node(s,'06:00\n이전 MR 조회',64,294,271,140,bluePale,blue,33);
      line(s,335,364,90,blue,2.5);
      rect(s,424,300,2.5,128,blue);
      connect(s,426,300,51,0,C.warn);connect(s,426,428,51,0,C.teal);
      node(s,'미병합',490,263,166,74,C.amber,C.warn,28);
      node(s,'병합됨',490,391,166,74,C.pale,C.teal,28);
      text(s,'새 이슈 보류 · 상태 기록',701,258,509,82,32,C.ink,true);
      text(s,'개선 단계에 맞는 다음 목표 선택',701,386,509,82,29,C.ink,true);
      takeaway(s,'같은 시각에 시작해도, 오늘의 행동은 어제의 상태가 정한다');
      return s;
    },
    S89(p) {
      const s=common(p,'S89','새 이슈에는 별도 작업 공간이 생긴다','사내 운영 사례 · 작업 격리',article);
      node(s,'GitLab 이슈',64,305,225,92,bluePale,blue,30);
      connect(s,289,350,67);
      rect(s,367,237,849,258,C.white,C.line,1.5);
      label(s,'이 이슈의 worktree · 분리된 작업 디렉터리',389,251,806);
      line(s,389,306,804);
      node(s,'Maker\n변경 초안',394,338,244,100,C.white,C.teal,29);
      connect(s,638,388,72);
      node(s,'Checker\n테스트 기준 검토',716,338,255,100,C.white,blue,27);
      text(s,'Skill에 둔\n수행 절차',990,341,191,96,25,C.sub,true);
      takeaway(s,'작업 공간과 검토 근거를 같은 이슈에 연결한다');
      return s;
    },
    S90(p) {
      const s=common(p,'S90','변경 후보가 팀의 MR이 되기까지','사내 운영 사례 · 도구 연결',article);
      section(s,64,242,340,'01  GitLab API','이슈 등록','목표와 작업 범위를\n이슈에 남긴다.');
      section(s,470,242,340,'02  작업 에이전트','변경·검토','작업 공간에서 후보를 만들고\n검사 근거를 확인한다.',blue);
      section(s,876,242,340,'03  GitLab API','MR 작성','팀원이 diff와 검토 근거를\n살펴볼 곳이 생긴다.');
      connect(s,406,348,55);connect(s,812,348,55);
      takeaway(s,'에이전트의 변경 후보가 MR을 통해 팀의 검토 대상으로 넘어간다');
      return s;
    },
    S91(p) {
      const s=common(p,'S91','내일 다시 읽을 상태는 무엇인가','사내 운영 사례에서 구성한 인계 예시','운영기의 Markdown 상태 기록을 각색한 필드 예시',caseKind);
      rect(s,64,205,640,322,C.white,C.line,1.5);
      label(s,'오늘 남길 인계 기록 · Markdown 예시',85,221,596);
      line(s,85,272,595);
      const entries=[['이슈 ID','ISSUE-A'],['마지막 후보','v2 · 검토 완료'],['MR 상태','MR-A · 열림'],['남은 일','팀원의 병합 결정 대기']];
      entries.forEach(([k,v],i)=>{
        text(s,k,88,285+i*54,160,42,25,C.sub,true);
        text(s,v,255,285+i*54,420,42,27,C.ink);
      });
      connect(s,719,367,76);
      label(s,'다음 실행의 첫 확인',826,256,380,blue);
      text(s,'MR-A가\n병합됐는가?',826,316,384,126,42,C.ink,true);
      takeaway(s,'다음 실행은 저장된 식별자로 현재 상태를 다시 조회한다');
      return s;
    },
    S92(p) {
      const s=common(p,'S92','사람이 병합 전에 읽을 것','사내 운영 사례 · 팀원의 병합 결정','병합 승인 주체는 운영기 기준 · diff와 검토 질문은 교육용 예시');
      lead(s,'검토 완료 보고를 받은 팀원이 diff를 다시 펼친다');
      section(s,64,266,350,'변경 이유','왜 바꿨나?','이 변경이 이슈의 목표와\n어떻게 연결되는가?');
      section(s,466,266,350,'검사 근거','무엇을 봤나?','어떤 입력·조건에서\n기존 동작을 확인했는가?',blue);
      section(s,868,266,348,'남은 위험','설명할 수 있나?','이유가 불분명한 변경은\n확인한 뒤 병합을 결정한다.',C.warn);
      label(s,'예시 diff · 기존 테스트',64,504,427);
      rect(s,64,542,427,52,C.ink);
      text(s,'- assert result == expected',82,549,391,38,22,C.white,false,CODE);
      connect(s,504,568,67,0,C.warn);
      text(s,'삭제 이유와 보존 근거를 확인할 때까지\n병합 보류',595,520,621,80,26,C.warn,true);
      return s;
    },
    S93(p) {
      const s=common(p,'S93','MR 상태를 조회할 수 없다면','교육용 변형 · 조회 실패', '사내 MR 흐름을 바탕으로 설계한 가상 분기',caseKind);
      lead(s,'조회 응답이 없으면 병합 여부는 아직 미확인이다');
      row(s,251,'1   식별자 보존','마지막 이슈·MR 식별자와 실패한 조회를 기록');
      row(s,332,'2   재시도 제한','정해 둔 횟수·시간 안에서 같은 MR을 다시 조회');
      row(s,413,'3   한도 도달','미확인 상태와 필요한 확인을 사람에게 인계',C.warn);
      takeaway(s,'재개할 때는 기존 MR 확인부터 시작해 중복 작업을 피한다');
      return s;
    },
    S94(p) {
      const s=common(p,'S94','회고 제안은 누가 적용할까','사내 운영 사례 · 두 가지 승인',article);
      section(s,64,235,550,'제품 코드','팀원이 MR 병합 결정','무엇을 바꿨고 어떤 근거가 있는지\n변경 후보를 검토한다.');
      section(s,666,235,550,'작업 규칙','운영 엔지니어가 승인','세션 회고에서 반복된 문제를 제안하고\n승인한 개선안을 규칙 파일에 반영한다.',blue);
      takeaway(s,'제품 변경과 다음 작업의 수행 규칙에는 각각 결정할 사람이 있다');
      return s;
    },
    S95(p) {
      const s=common(p,'S95','한 작업에 Goal을 쓴다면','제품 적용 · 밝기 통계 요청 예시','Codex Goal 요청 예시 · 교육 계정에서 제공 범위 확인','TEACHING_MODEL','신규 확장','수행 방법 · 검증·개선');
      requestWindow(s,64,205,790,306,'Codex · 목표 요청 예시');
      const prompt=[
        '/goal 밝기 통계의 임시 할당을 기준판보다 줄여줘.',
        '기존 여섯 출력은 보존해.',
        '같은 입력으로 출력·할당 피크·실행시간을 확인해.',
        '시간이 기준판보다 나빠지면 수정해.',
        '측정이 막히거나 같은 실패가 반복되면 이유를 보고해.'
      ];
      prompt.forEach((t,i)=>text(s,t,88,266+i*45,744,38,i===0?27:25,i===0?C.teal:C.ink,i===0));
      label(s,'목표에 담을 정보',909,244,290);
      text(s,'보존할 동작\n완료를 판단할 근거\n멈추고 보고할 조건',909,304,301,161,27,C.ink,true);
      takeaway(s,'턴을 이어갈 목표에 확인할 근거와 멈출 조건을 함께 둔다');
      return s;
    },
    S96(p) {
      const s=common(p,'S96','우리 팀의 첫 루프 범위','팀 적용 · 작은 범위에서 시작','운영기에서 가져온 적용 원칙 · 팀 설계 예시',caseKind);
      lead(s,'처음 맡길 개선 이슈 한 건을 고른다');
      node(s,'이슈 한 건',64,272,288,99,C.white,blue,32);
      connect(s,352,322,81);
      node(s,'수정 후보 한 개',446,272,329,99,C.white,C.teal,30);
      connect(s,775,322,80);
      node(s,'검토 후 사람 승인',866,272,350,99,C.pale,C.teal,30);
      line(s,64,433,1152);
      label(s,'반복될 때 연결할 것',64,449,350);
      text(s,'시작 시각  ·  작업 격리  ·  도구 연결  ·  상태 기록',393,444,820,53,28,C.ink,true);
      takeaway(s,'한 이슈에서 필요한 역할과 도구부터 선택한다');
      return s;
    },
    S97(p) {
      const s=common(p,'S97','어떤 판단을 맡기고 어디서 멈출까','ACT 4 마무리 · 개인 성찰과 Q&A','개인 성찰 · 공유는 선택');
      lead(s,'우리 팀의 이슈 하나를 떠올려 보세요');
      section(s,64,265,352,'목표','어디까지 맡길까?','바꿀 것과 지킬 조건을\n한 문장으로 정한다.');
      section(s,464,265,352,'근거','무엇으로 판단할까?','다음 수정을 요청할 때\n함께 전달할 증거를 고른다.',blue);
      section(s,864,265,352,'사람의 결정','언제 멈출까?','승인·확인·중단할 조건과\n담당자를 정한다.',C.warn);
      takeaway(s,'이 판단에 필요한 구성은 무엇이고, 무엇을 덜어낼 수 있을까?');
      return s;
    }
  };
}
