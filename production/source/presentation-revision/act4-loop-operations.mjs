/** Approved final-ID ACT4 scenes. Each scene adds exactly one editable slide. */
import {actTitleFactories} from './act-titles.mjs';
import {addModuleFooter} from './legacy-priority.mjs';
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

  // Keep this finding in place while the next step changes between the two views.
  function firstReviewFinding(s) {
    const finding=rect(s,64,319,310,132,C.amber,C.warn,1.5); finding.borderRadius=8;
    text(s,'첫 구현의 검토 결과',85,332,270,34,23,C.warn,true);
    text(s,'전체 픽셀을 복사한\n임시 목록이 남았다',85,377,272,64,28,C.ink,true);
  }

  function acceptedFinding(slide) {
    const banner=rect(slide,64,181,1152,78,C.amber,C.warn,1.5);
    banner.borderRadius=8;
    text(slide,'검토 지적 · R1',83,198,207,42,23,C.warn,true);
    text(slide,'전체 픽셀을 복사하는 임시 목록이 남아 있다',307,192,891,55,33,C.ink,true);
  }

  const cover = actTitleFactories({titleSlides:[{
    act:4, slideId:'S78', displayTitle:'목표를 이룰 때까지\n수정하고 검토하기',
    subtitle:'Loop Engineering · 한 번 맡긴 일이 첫 결과에서 멈추는 순간'
  }]}, H).S78;

  return {
    S78(p) {
      const s=cover(p);
      addModuleFooter(s,'S78',{slideId:'S78',footerLabel:'M 연계 · ACT 안내'},H);
      return s;
    },
    S79(p) {
      const s=common(p,'S79','시작하라고 답했다. 그런데 한 번 더 내가 필요했다','점심에서 돌아온 뒤 · 같은 밝기 통계 작업','',caseKind);
      const thread=rect(s,64,177,1152,98,C.white,C.line,1.5); thread.borderRadius=9;
      text(s,'AI의 질문',85,186,535,26,19,C.sub,true);
      text(s,'“이대로 구현을 시작할까요?”',84,219,522,43,29,C.ink,true);
      connect(s,600,236,56,0,blue);
      text(s,'내가 보낸 답',693,186,495,26,19,blue,true);
      text(s,'“응, 시작해.”',692,219,495,43,32,blue,true);
      firstReviewFinding(s);
      connect(s,379,385,60,0,blue);
      const instruction=rect(s,447,319,769,132,bluePale,blue,1.5); instruction.borderRadius=8;
      text(s,'검토 뒤, 내가 다시 보낸 요청',471,332,715,34,23,blue,true);
      text(s,'“그 복사를 없애고, 같은 기준으로 다시 확인해줘.”',471,382,727,51,29,C.ink,true);
      takeaway(s,'구현을 시작할 때도, 지적을 반영해 고칠 때도 사람이 다시 지시했다');
      return s;
    },
    S80(p) {
      const s=common(p,'S80','같은 검토 결과가 다음 수정을 시작한다','사람의 재지시 없이 이어지는 수정과 재검토',reconstruction);
      lead(s,'같은 장면을 루프로 연결하면');
      firstReviewFinding(s);
      connect(s,379,385,60);
      const fix=rect(s,447,319,223,132,C.pale,C.teal,1.5); fix.borderRadius=8;
      text(s,'다음 구현',462,333,193,34,23,C.teal,true,FONT,'center');
      text(s,'행별로 집계',457,382,203,51,29,C.ink,true,FONT,'center');
      connect(s,674,385,47);
      const review=rect(s,729,319,254,132,C.white,C.teal,1.5); review.borderRadius=8;
      text(s,'같은 기준으로 재검토',740,333,232,34,23,C.teal,true,FONT,'center');
      text(s,'출력 · 메모리 · 시간',737,382,238,51,25,C.ink,true,FONT,'center');
      connect(s,988,385,74);
      text(s,'충족',987,343,76,34,23,C.teal,true,FONT,'center');
      node(s,'완료',1070,351,146,69,C.pale,C.teal,30);
      s.shapes.add({name:'Unmet criterion returns to implementation',geometry:'custom',
        position:{left:559,top:452,width:297,height:52},fill:'none',line:{fill:C.warn,width:3},
        customPaths:[{width:297,height:52,commands:[
          {moveTo:{x:297,y:0}},{lineTo:{x:297,y:31}},
          {quadBezTo:{x1:297,y1:51,x:277,y:51}},{lineTo:{x:20,y:51}},
          {quadBezTo:{x1:0,y1:51,x:0,y:31}},{lineTo:{x:0,y:2}}
        ]}]});
      connect(s,559,452,0,22,C.warn,true);
      text(s,'미달하면 다시 수정',579,458,256,34,23,C.warn,true,FONT,'center');
      takeaway(s,'사람의 재지시 없이 수정하고, 처음 맡긴 목표를 기준으로 완료를 판단한다');
      return s;
    },
    S81(p) {
      const s=common(p,'S81','기존 프롬프팅과 루프 엔지니어링','같은 밝기 통계 작업을 진행하는 두 방식','','TEACHING_MODEL','M5 · M6');
      const values=[
        ['항목','기존 프롬프팅','루프 엔지니어링'],
        ['누가 끌고 가나?','사람이 매번 다음 단계를 지시','목표와 기준에 따라 루프가 진행'],
        ['컨텍스트','세션에만 둔 맥락은 종료 시 끊김','외부 파일에 축적해 다음 작업에 재사용'],
        ['오류가 나면','사람이 확인하고 수정 지시','구현·검증이 서로 점검해 오류를 걸러냄'],
        ['결과물','개인 역량에 따라 결과 편차가 큼','작업 지식은 자산으로 축적\n독립 작업은 병렬 실행']
      ];
      const table=s.tables.add({rows:values.length,columns:3,left:64,top:172,width:1152,height:428,columnWidths:[191,449,512],values});
      table.styleOptions={headerRow:false,bandedRows:false};
      table.borders.assign({fill:C.line,width:0.8,style:'solid'});
      for(let r=0;r<values.length;r++){
        table.rows[r].height=r===0?56:93;
        for(let c=0;c<3;c++){
          const cell=table.getCell(r,c);
          cell.fill=r===0?(c===2?C.teal:c===1?blue:C.sub):(c===0?C.bg:C.white);
          cell.text.style={typeface:FONT,fontSize:r===0?23:c===0?25:24,color:r===0?C.white:c===0?C.teal:C.ink,bold:r===0||c===0,alignment:'left',verticalAlignment:'middle',autoFit:'none',wrap:'none'};
        }
      }
      return s;
    },
    S82(p) {
      const s=common(p,'S82','루프를 구성하는 여섯 가지 요소','한 목표의 구현·검토·수정을 연결하는 설계','','TEACHING_MODEL','신규 확장');
      // Original pictograms use native shapes so their appearance does not depend on an emoji font.
      function icon(x,y,ink,draw) {
        const badge=rect(s,x,y,60,60,C.white); badge.borderRadius=12;
        const box=(left,top,w,h,fill,stroke='none',width=0)=>rect(s,x+left,y+top,w,h,fill,stroke,width);
        const oval=(left,top,w,h,fill,stroke='none',width=0)=>s.shapes.add({
          geometry:'ellipse',position:{left:x+left,top:y+top,width:w,height:h},fill,line:{fill:stroke,width}
        });
        const stroke=(...points)=>s.shapes.add({
          geometry:'custom',position:{left:x,top:y,width:60,height:60},fill:'none',line:{fill:ink,width:3},
          customPaths:[{width:60,height:60,commands:points.map(([px,py],i)=>({[i?'lineTo':'moveTo']:{x:px,y:py}}))}]
        });
        draw({ink,box,oval,stroke});
      }
      const components=[
        ['오토메이션','시각·이벤트에 맞춰 작업 시작','#096975','#D8EFF0',({ink,oval,stroke})=>{
          oval(12,12,36,36,C.white,ink,3); stroke([30,18],[30,30],[39,35]);
        }],
        ['워크트리','작업별 변경을 별도 폴더로 분리','#285A96','#DEEAFB',({ink,oval,stroke})=>{
          stroke([19,16],[19,46]); stroke([19,34],[33,34],[42,25],[42,18]);
          for(const [cx,cy] of [[19,15],[19,46],[42,16]]) oval(cx-4,cy-4,8,8,C.white,ink,3);
        }],
        ['스킬','반복할 절차를 저장해 재사용','#4B6529','#EAF2D7',({ink,box,stroke})=>{
          box(15,12,31,38,C.white,ink,2.5); box(23,9,15,7,ink);
          for(const cy of [25,36]) {stroke([20,cy],[23,cy+3],[28,cy-3]); stroke([32,cy],[40,cy]);}
        }],
        ['커넥터','외부 이슈를 읽고 결과를 기록','#875415','#FAE8C7',({ink,box,stroke})=>{
          stroke([24,11],[24,22]); stroke([36,11],[36,22]);
          const plug=box(19,21,22,16,C.white,ink,3); plug.borderRadius=4;
          stroke([30,37],[30,43],[35,48],[44,48]);
        }],
        ['서브에이전트','검토를 나눠 맡기고 결과를 회수','#69498E','#EEE2F7',({ink,oval,box})=>{
          for(const [cx,cy] of [[40,19],[21,27]]){
            const body=box(cx-10,cy+8,20,12,ink);body.borderRadius=5;
            oval(cx-7,cy-7,14,14,C.white,ink,2.5);
          }
        }],
        ['상태/메모리','진행 기록으로 다음 작업 재개','#90445D','#F8E0E8',({ink,box,stroke})=>{
          const cover=box(15,10,32,40,C.white,ink,3);cover.borderRadius=3;
          stroke([22,11],[22,49]); stroke([28,23],[40,23]); stroke([28,32],[38,32]);
          box(35,12,6,7,ink);
        }]
      ];
      components.forEach(([name,description,ink,tint,draw],i)=>{
        const x=64+(i%3)*391;
        const y=175+Math.floor(i/3)*202;
        const card=rect(s,x,y,370,175,tint,ink,1);card.borderRadius=8;
        icon(x+17,y+20,ink,draw);
        text(s,name,x+93,y+25,260,50,33,ink,true);
        text(s,description,x+18,y+101,337,48,25,C.ink);
      });
      text(s,'작업에 필요한 역할을 골라 연결한다.',64,571,1152,37,25,C.teal,true);
      return s;
    },
    S83(p) {
      const s=common(p,'S83','목표에서 인계까지, 루프의 8단계','이슈 한 건을 수행하는 워크플로우','','TEACHING_MODEL','M5 · M6','검증·개선');
      const stages=[
        ['목표와 범위 정의','바꿀 것·지킬 것과 완료 기준 결정','목표·제약·완료 기준'],
        ['현재 상태 조사','코드·명세·기존 변경을 읽고 문제·성능 확인','조사 결과·재현 결과·기준선'],
        ['계획과 실행 환경 준비','변경 순서와 검증 방법 결정\n필요 시 워크트리·서브에이전트 준비','작업 계획·역할·실행 조건'],
        ['구현','정한 범위에서 코드 변경','변경 코드·테스트'],
        ['실행 검증','빌드·테스트·벤치마크 실행 후 기준선과 비교','실행 결과와 근거'],
        ['독립 검토','별도 관점에서 요구사항 누락·회귀·테스트 부족 검토','검토 의견·남은 문제'],
        ['다음 행동 판단','보완할지, 완료할지, 중단해 사람에게 물을지 판단','계속·완료·중단 판단'],
        ['결과 정리와 인계','최종 변경·검증 결과·미실행 항목·후속 작업 정리','사람이 확인할 결과 보고']
      ];
      const y0=203,step=49,railX=127;
      rect(s,103,158,1113,40,C.pale);
      text(s,'단계',154,160,220,36,24,C.teal,true);
      text(s,'하는 일',408,160,509,36,24,C.teal,true);
      text(s,'남기는 결과',933,160,269,36,24,C.teal,true);
      const center=i=>y0+step*i+step/2;
      rect(s,railX-1,center(0),2,center(7)-center(0),'#A7BBC5');
      connect(s,railX,center(6)+16,0,15,C.teal);
      const returnY=center(3),returnHeight=center(6)-returnY;
      s.shapes.add({name:'보완: 7단계 판단에서 4단계 구현으로 복귀',geometry:'custom',
        position:{left:74,top:returnY,width:36,height:returnHeight},
        fill:'none',line:{fill:C.warn,width:2.5},
        customPaths:[{width:36,height:returnHeight,commands:[
          {moveTo:{x:36,y:returnHeight}},{lineTo:{x:11,y:returnHeight}},
          {quadBezTo:{x1:0,y1:returnHeight,x:0,y:returnHeight-11}},
          {lineTo:{x:0,y:11}},{quadBezTo:{x1:0,y1:0,x:11,y:0}},
          {lineTo:{x:27,y:0}}
        ]}]});
      connect(s,96,returnY,15,0,C.warn);
      rect(s,54,returnY+returnHeight/2-14,42,28,C.bg);
      text(s,'보완',51,returnY+returnHeight/2-14,48,28,18,C.warn,true,FONT,'center');
      stages.forEach(([name,action,output],i)=>{
        const y=y0+step*i,cy=center(i);
        const color=i<3?blue:C.teal;
        s.shapes.add({name:'단계 '+(i+1),geometry:'ellipse',
          position:{left:railX-15,top:cy-15,width:30,height:30},
          fill:color,line:{fill:'none',width:0}});
        text(s,String(i+1),railX-15,cy-15,30,30,19,C.white,true,FONT,'center');
        text(s,name,154,y,248,step,23,C.ink,true);
        text(s,action,408,y,517,step,i===2?19:21,C.ink);
        text(s,output,933,y,278,step,21,C.sub);
        if(i<stages.length-1) line(s,153,y+step,1063,C.line,0.7);
      });
      text(s,'보완은 4단계로',66,625,270,43,27,C.warn,true);
      text(s,'완료는 8단계에서 보고',365,625,340,43,27,C.teal,true);
      text(s,'중단도 8단계에서 남은 일을 인계',730,625,490,43,27,C.ink,true);
      return s;
    },
    S84(p) {
      const s=common(p,'S84','그 지적을 받은 구현은 어디가 달라질까?','밝기 통계 · 검토자가 구현 담당에게 넘긴 지적',reconstruction,caseKind,'M5 · M6');
      acceptedFinding(s);
      label(s,'첫 구현 · v1',64,291,506,blue);
      label(s,'지적을 반영한 수정안 · v2',694,291,522);
      const before=rect(s,64,340,516,163,C.white,C.line,1.5); before.borderRadius=8;
      const after=rect(s,694,340,522,163,C.pale,C.teal,1.5); after.borderRadius=8;
      text(s,'전체 픽셀을 한 목록에 복사',85,351,478,53,30,C.ink,true);
      const cells=['1행 픽셀','2행 픽셀','…'];
      for(const [i,cell] of cells.entries()){
        const x=86+i*144;
        rect(s,x,423,144,53,bluePale,blue,1);
        text(s,cell,x+3,424,138,51,24,blue,true,FONT,'center');
      }
      connect(s,588,420,94);
      text(s,'한 행씩 읽으며 통계를 집계',715,351,481,53,30,C.ink,true);
      text(s,'최소·최대는 갱신하고 합은 누적',715,423,480,53,25,C.teal,true);
      takeaway(s,'전체 복사를 없앴다. 이것만으로 끝났을까?');
      return s;
    },
    S85(p) {
      const s=common(p,'S85','고친 뒤, 끝낼까 다시 고칠까?','밝기 통계 · 수정안을 같은 기준으로 재검토',reconstruction,'TEACHING_MODEL','M5 · M6','검증·개선');
      const measure=rect(s,64,177,1152,100,bluePale,blue,1.5); measure.borderRadius=8;
      text(s,'v2의 실행시간 기록이 없다면?',84,192,494,66,28,C.ink,true);
      connect(s,563,227,62,0,blue);
      text(s,'먼저 측정',647,188,550,38,29,blue,true);
      text(s,'같은 입력·환경에서 기준판과 수정안의 시간 비교',647,230,554,34,23,C.sub);
      const branches=[
        [302,'출력·할당·시간 모두 기준 충족','완료 보고','수정안과 검사 근거를 함께 제출',C.teal],
        [386,'검사·측정으로 확인된 기준 위반','재수정','예: 더 느려졌다면 고친 뒤 재측정',blue],
        [470,'측정 불가 또는 한도 도달','미완료 중단','빠진 근거와 막힌 이유를 사람에게 인계',C.warn]
      ];
      for(const [y,condition,action,details,color] of branches){
        line(s,64,y,1152);
        text(s,condition,70,y+13,439,55,27,C.ink,true);
        connect(s,511,y+41,60,0,color);
        text(s,action,592,y+13,181,55,29,color,true);
        text(s,details,793,y+13,421,55,23,C.sub);
      }
      takeaway(s,'측정값이 없으면 먼저 확인하고, 위반이 확인되면 다시 고친다');
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
      const s=common(p,'S88','구현·검토 루프를 팀 이슈에 어떻게 연결했을까?','사내 GitLab 운영 사례',article);
      lead(s,'팀은 이슈 한 건에 목표와 변경 후보, 검토 근거를 연결했다');
      label(s,'일을 맡긴다',72,250,253,blue);
      label(s,'한 이슈 안에서 작업한다',412,250,440);
      label(s,'팀에 전달한다',967,250,239,blue);
      node(s,'GitLab 이슈\n목표와 범위',64,312,266,132,bluePale,blue,29);
      connect(s,334,379,63,0,blue);
      const space=rect(s,401,300,478,156,C.white,C.teal,1.5); space.borderRadius=8;
      text(s,'이슈 전용 작업 공간',422,311,438,40,27,C.teal,true,FONT,'center');
      text(s,'구현',432,366,129,55,33,C.ink,true,FONT,'center');
      connect(s,563,393,101);
      text(s,'검토',675,366,159,55,33,C.ink,true,FONT,'center');
      connect(s,883,379,63,0,blue);
      node(s,'MR · 병합 요청\n팀원이 검토',953,312,263,132,bluePale,blue,29);
      takeaway(s,'에이전트가 변경안을 만들고, 병합은 팀원이 결정한다');
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
      const entries=[['이슈 ID','ISSUE-A'],['마지막 후보','v2 · 검토 완료'],['검토할 MR','MR-A'],['남은 일','변경 이유·검사 근거 확인']];
      entries.forEach(([k,v],i)=>{
        text(s,k,88,285+i*54,160,42,25,C.sub,true);
        text(s,v,255,285+i*54,420,42,27,C.ink);
      });
      connect(s,719,367,76);
      label(s,'다음 실행에서',826,256,380,blue);
      text(s,'MR-A의 변경과\n검사 근거를 다시 연다',826,316,384,126,34,C.ink,true);
      takeaway(s,'기록해 둔 식별자로 같은 이슈의 검토를 이어간다');
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
      takeaway(s,'같은 이슈를 재개할 때 기존 MR을 찾아 중복 변경을 피한다');
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
