/** Approved final-ID ACT4 scenes. Each scene adds exactly one editable slide. */
import {actTitleFactories} from './act-titles.mjs';
import {addModuleFooter} from './legacy-priority.mjs';
import {addPracticalTipBadge} from './practical-tips.mjs';

export function loopOperationsFactories(H) {
  const {C,FONT,CODE,text,rect,line} = H;
  const blue = '#315C87';
  const bluePale = '#E1EBF6';
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

  const phases=[
    {title:'기획·준비',color:blue,tint:bluePale,items:['요청 분류','사전 조사','브랜치 준비']},
    {title:'문서·이슈',color:'#487339',tint:'#E7F0E1',items:['이슈 문서 작성','이슈 문서 검증','문서 단독 커밋','이슈 등록']},
    {title:'구현·테스트',color:'#875415',tint:'#FAE8C7',items:['작은 단위로 구현','테스트 시도']},
    {title:'병합 요청',color:'#69498E',tint:'#EEE2F7',items:['MR 초안 작성','문서 단독 커밋','MR 등록']}
  ];
  function phaseRail(s,active) {
    phases.forEach((phase,i)=>{
      const x=64+i*290,selected=i===active;
      rect(s,x,163,282,42,selected?phase.color:'#E6EAEE');
      text(s,(i+1)+'   '+phase.title,x+8,164,266,39,21,selected?C.white:C.sub,selected,FONT,'center');
    });
  }
  function panel(s,x,y,w,h,fill=C.white,color=C.line) {
    const box=rect(s,x,y,w,h,fill,color,1.3);
    box.borderRadius=9;
    return box;
  }
  function caption(s,t,x,y,w,color=C.sub,size=22) {
    return text(s,t,x,y,w,36,size,color,true);
  }
  function stage(s,num,heading,detail,x,y,w,phase) {
    line(s,x,y,w,phase.color,3);
    caption(s,num,x,y+14,w,phase.color);
    text(s,heading,x,y+62,w,52,34,C.ink,true);
    text(s,detail,x,y+129,w,85,25,C.sub);
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
      const loopFill='#E5F1F0';
      const centerY=365;
      const trackY=479;
      const phase=(title,x,w,tone)=>text(s,title,x,186,w,38,26,tone,true);
      const step=(number,title,x,w)=>{
        const box=rect(s,x,318,w,94,C.white,C.teal,1.5);box.borderRadius=9;
        text(s,number,x+4,328,w-8,27,20,C.teal,true,FONT,'center');
        text(s,title,x+4,359,w-8,43,28,C.ink,true,FONT,'center');
      };
      // Keep setup linear. Only the implementation, checks and decision repeat.
      const field=rect(s,312,167,668,356,loopFill);field.borderRadius=18;
      phase('준비',64,229,blue);
      phase('구현·검토 반복',335,600,C.teal);
      phase('사람에게 인계',1023,193,blue);
      const setup=[
        ['01','목표·범위',239],
        ['02','현재 상태 조사',302],
        ['03','계획·환경 준비',365]
      ];
      setup.forEach(([number,title,y],i)=>{
        if(i<2) connect(s,85,y+16,0,28,blue);
        s.shapes.add({name:'준비 단계 '+number,geometry:'ellipse',position:{left:65,top:y-16,width:40,height:32},fill:blue,line:{fill:'none',width:0}});
        text(s,number,65,y-16,40,32,19,C.white,true,FONT,'center');
        text(s,title,116,y-22,179,44,27,C.ink,true);
      });
      connect(s,302,centerY,29,0,blue);
      step('04','구현',337,111);
      step('05','실행 검증',479,126);
      step('06','독립 검토',636,126);
      connect(s,451,centerY,24,0,C.teal);
      connect(s,608,centerY,24,0,C.teal);
      connect(s,765,centerY,28,0,C.teal);
      s.shapes.add({name:'07 다음 행동 판단',geometry:'diamond',position:{left:797,top:294,width:161,height:142},fill:C.teal,line:{fill:'none',width:0}});
      text(s,'07',824,326,107,27,20,C.white,true,FONT,'center');
      text(s,'다음 행동',810,350,135,31,25,C.white,true,FONT,'center');
      text(s,'판단',824,377,107,30,25,C.white,true,FONT,'center');

      const startX=392,endX=877;
      const pathWidth=endX-startX, pathHeight=trackY-411;
      s.shapes.add({name:'보완 경로 · 판단에서 구현으로',geometry:'custom',position:{left:startX,top:411,width:pathWidth,height:pathHeight},fill:'none',line:{fill:C.warn,width:3.5},customPaths:[{width:pathWidth,height:pathHeight,commands:[
        {moveTo:{x:pathWidth,y:25}},{lineTo:{x:pathWidth,y:pathHeight-12}},
        {quadBezTo:{x1:pathWidth,y1:pathHeight,x:pathWidth-12,y:pathHeight}},
        {lineTo:{x:12,y:pathHeight}},{quadBezTo:{x1:0,y1:pathHeight,x:0,y:pathHeight-12}},
        {lineTo:{x:0,y:15}}
      ]}]});
      connect(s,startX,414,0,20,C.warn,true);
      text(s,'보완이 필요하면 다시 구현',438,430,370,40,24,C.warn,true,FONT,'center');

      connect(s,960,centerY,67,0,blue);
      const handoff=rect(s,1032,318,184,94,bluePale,blue,1.5);handoff.borderRadius=9;
      text(s,'08',1037,328,174,27,20,blue,true,FONT,'center');
      text(s,'결과 인계',1037,359,174,43,30,C.ink,true,FONT,'center');
      text(s,'완료 · 검증 결과',1029,428,190,35,23,blue,true,FONT,'center');
      text(s,'중단 · 남은 일',1029,465,190,35,23,C.sub,false,FONT,'center');
      return s;
    },
    S84(p) {
      const s=common(p,'S84','8단계를 GitLab 작업 12단계로 옮기면','GitLab 적용 예시 · 단계별로 남길 결과','','CONCEPTUAL');
      text(s,'이슈를 등록하고 병합을 요청하는 일까지 네 구간으로 나눈다.',64,168,1152,48,30,C.teal,true);
      let number=1;
      phases.forEach((phase,i)=>{
        const x=64+i*291;
        panel(s,x,244,277,273,C.white);
        rect(s,x,244,277,51,phase.color);
        text(s,phase.title,x+15,245,246,48,27,C.white,true);
        phase.items.forEach((item,j)=>{
          const y=309+j*49;
          text(s,String(number++).padStart(2,'0'),x+16,y,42,40,21,phase.color,true);
          text(s,item,x+59,y,214,40,24,C.ink,true);
        });
      });
      takeaway(s,'구현과 테스트는 필요할 만큼 반복하고, 마지막에 근거를 인계한다.');
      return s;
    },
    S85(p) {
      const s=common(p,'S85','어느 단계에 어떤 도구를 연결할까?','GitLab 적용 예시 · 12단계와 여섯 요소','','TEACHING_MODEL','신규 확장','검증·개선');
      const rows=[
        ['오토메이션',[1,6,11],'#096975'],['워크트리',[3,8],'#285A96'],
        ['스킬',[1,2,4,5],'#4B6529'],['커넥터',[7,12],'#875415'],
        ['서브에이전트',[4,5,8,9,10],'#69498E'],['상태/메모리',[2,10],'#90445D']
      ];
      const left=64, labelWidth=184, colWidth=80;
      text(s,'도구',left+9,164,labelWidth-10,36,21,C.sub,true);
      let phaseX=left+labelWidth;
      for (const phase of phases) {
        const width=colWidth*phase.items.length;
        rect(s,phaseX,163,width-2,41,phase.tint);
        text(s,phase.title,phaseX,163,width-2,41,21,phase.color,true,FONT,'center');
        phaseX+=width;
      }
      const values=[['단계',...Array.from({length:12},(_,i)=>String(i+1))],
        ...rows.map(([name,owners])=>[name,...Array.from({length:12},(_,i)=>owners.includes(i+1)?'●':'')])];
      const table=s.tables.add({rows:7,columns:13,left,top:209,width:labelWidth+12*colWidth,height:316,columnWidths:[labelWidth,...Array(12).fill(colWidth)],values});
      table.styleOptions={headerRow:false,bandedRows:false};
      table.borders.assign({fill:C.line,width:0.8,style:'solid'});
      for(let r=0;r<7;r++){
        table.rows[r].height=r===0?40:46;
        for(let c=0;c<13;c++){
          const cell=table.getCell(r,c);
          cell.fill=r===0?'#E9EDF1':C.white;
          cell.text.style={typeface:FONT,fontSize:r===0?19:c?23:21,color:r===0?C.sub:rows[r-1][2],bold:r===0||c===0,alignment:c?'center':'left',verticalAlignment:'middle',autoFit:'none',wrap:'none'};
        }
      }
      text(s,'예를 들어 7단계 이슈 등록과 12단계 MR 등록에는 커넥터를 쓴다.',64,550,1152,50,28,C.ink,true);
      return s;
    },
    S86(p) {
      const s=common(p,'S86','먼저 요청을 분류하고 작업 공간을 분리한다','GitLab 적용 예시 · 작업을 시작하기 전','','CONCEPTUAL');
      phaseRail(s,0);
      stage(s,'01','요청 분류','이 요청을 이슈로\n관리할지 결정한다.',64,254,340,phases[0]);
      stage(s,'02','사전 조사','관련 코드와 프로젝트\n지침을 먼저 읽는다.',466,254,340,phases[0]);
      stage(s,'03','브랜치 준비','기준 브랜치에서 분기해\n별도 워크트리에서 작업한다.',868,254,348,phases[0]);
      connect(s,413,347,40,0,blue); connect(s,815,347,40,0,blue);
      takeaway(s,'기준 코드는 어디에 있고, 이번 변경은 어디에서 할지 정해진다.');
      return s;
    },
    S87(p) {
      const s=common(p,'S87','이슈 문서는 작성과 검증을 나눠 등록한다','GitLab 적용 예시 · 구현 전에 합의할 내용','','CONCEPTUAL');
      phaseRail(s,1);
      const phase=phases[1];
      panel(s,64,239,444,286,C.white,phase.color);
      caption(s,'04   작성 담당',88,259,390,phase.color);
      text(s,'이슈 문서',88,310,385,52,36,C.ink,true);
      ['변경할 범위','지켜야 할 조건','완료를 확인할 방법'].forEach((item,i)=>{
        const y=383+i*39;
        rect(s,90,y+13,9,9,phase.color);
        text(s,item,112,y,358,38,23,C.ink);
      });
      connect(s,518,278,64,0,phase.color);
      [['05','별도 검토','빠진 요구사항·필수 항목 확인'],['06','문서 단독 커밋','검토한 문서의 버전을 기록'],['07','GitLab 이슈 등록','커넥터로 팀의 이슈에 게시']].forEach(([num,name,detail],i)=>{
        const y=240+i*96;
        line(s,608,y,608);
        caption(s,num,608,y+21,51,phase.color);
        text(s,name,662,y+7,550,42,27,C.ink,true);
        text(s,detail,662,y+47,550,37,22,C.sub);
      });
      takeaway(s,'검토에서 빠진 조건을 찾으면 문서를 고친 뒤 등록한다.');
      return s;
    },
    S88(p) {
      const s=common(p,'S88','작은 변경마다 구현과 테스트를 반복한다','GitLab 적용 예시 · 워크트리 한 곳에서','','CONCEPTUAL','M5 · M6');
      phaseRail(s,2);
      const phase=phases[2];
      panel(s,64,240,852,275,C.white,C.line);
      caption(s,'작업용 워크트리',85,254,765,C.sub);
      node(s,'08   구현 담당',120,345,270,70,phase.tint,phase.color,27);
      node(s,'09   테스트 담당',573,345,285,70,C.pale,C.teal,27);
      connect(s,402,363,152,0,phase.color);
      text(s,'변경 코드',403,312,146,39,21,phase.color,true,FONT,'center');
      s.shapes.add({name:'실패 근거를 구현 담당에게 반환',geometry:'custom',position:{left:254,top:416,width:460,height:55},fill:'none',line:{fill:C.teal,width:3},customPaths:[{width:460,height:55,commands:[{moveTo:{x:460,y:0}},{lineTo:{x:460,y:40}},{quadBezTo:{x1:460,y1:54,x:446,y:54}},{lineTo:{x:14,y:54}},{quadBezTo:{x1:0,y1:54,x:0,y:40}},{lineTo:{x:0,y:6}}]}]});
      connect(s,254,415,0,15,C.teal,true);
      text(s,'미달 · 실패 입력과 기대값을 돌려준다',275,425,420,37,21,C.teal,true,FONT,'center');
      connect(s,917,373,45,0,phase.color);
      caption(s,'기준 충족',981,301,230,phase.color);
      text(s,'변경 내용과\n테스트 결과 인계',981,351,237,94,28,C.ink,true);
      takeaway(s,'실행할 수 없는 검사는 따로 기록해 검토자에게 넘긴다.');
      return s;
    },
    S89(p) {
      const s=common(p,'S89','변경과 근거를 묶어 병합 요청을 올린다','GitLab 적용 예시 · MR은 병합 요청','','CONCEPTUAL');
      phaseRail(s,3);
      stage(s,'10','MR 초안 작성','변경 이유와 테스트 결과를\n로컬 문서에 모은다.',64,254,340,phases[3]);
      stage(s,'11','문서 단독 커밋','정리한 MR 문서를 코드와\n구분해 기록한다.',466,254,340,phases[3]);
      stage(s,'12','MR 등록','커넥터로 GitLab에\n병합 요청을 올린다.',868,254,348,phases[3]);
      connect(s,413,347,40,0,phases[3].color); connect(s,815,347,40,0,phases[3].color);
      takeaway(s,'팀원은 MR에서 변경과 근거를 검토한 뒤 병합 여부를 결정한다.');
      return s;
    },
    S90(p) {
      const s=common(p,'S90','작성자와 검토자는 무엇을 주고받을까?','독립 검토 설계 · 역할 사이에 넘기는 근거','');
      panel(s,64,224,390,247,bluePale,blue);
      caption(s,'작성자  /  Maker',88,247,342,blue);
      text(s,'변경 후보를 만든다',88,308,349,57,31,C.ink,true);
      text(s,'코드 차이와 실행 결과를\n검토자에게 넘긴다.',88,381,345,73,24,C.sub);
      panel(s,826,224,390,247,C.pale,C.teal);
      caption(s,'검토자  /  Checker',850,247,342,C.teal);
      text(s,'근거를 대조한다',850,308,348,57,31,C.ink,true);
      text(s,'요구사항과 결과를 비교해\n남은 문제를 찾는다.',850,381,347,73,24,C.sub);
      text(s,'후보 + 검사 근거',475,244,330,45,25,blue,true,FONT,'center');
      connect(s,464,311,350,0,blue);
      connect(s,464,388,350,0,C.teal,true);
      text(s,'구체적 지적 + 재검사 조건',461,412,357,48,23,C.teal,true,FONT,'center');
      takeaway(s,'작성과 검토에 서로 다른 모델을 쓸 수 있다. 완료는 테스트 근거로 판단한다.');
      return s;
    },
    S91(p) {
      const s=common(p,'S91','자기평가 점수만으로 완료를 정할 수 있을까?','연구 · LLM 심사자의 자기선호','Yang 외, 2026 · arXiv:2604.22891v4 · LLM 심사자의 자기선호 연구','RESEARCH');
      text(s,'실험 설계 · 20개 모델',64,181,530,36,22,C.teal,true);
      text(s,'답의 품질을 비슷하게 맞추어도 심사 모델은 자기 답을 더 고를까?',64,222,1152,59,31,C.ink,true);
      panel(s,64,318,547,161,C.white,blue);
      caption(s,'비교 대상 A',88,337,487,blue);
      text(s,'심사 모델이 작성한 답',88,390,482,57,32,C.ink,true);
      text(s,'vs',614,363,54,49,24,C.sub,true,FONT,'center');
      panel(s,674,318,542,161,C.white,C.teal);
      caption(s,'비교 대상 B',698,337,485,C.teal);
      text(s,'다른 모델이 작성한 답',698,390,482,57,32,C.ink,true);
      takeaway(s,'응답 품질을 맞춘 비교에서도 자기 답을 선호한 모델이 있었다.');
      return s;
    },
    S92(p) {
      const s=common(p,'S92','같은 오류도 남의 답에서 더 잘 찾을까?','연구 · 자기 답과 남의 답을 고치는 조건','Chen 외, 2026 · arXiv:2606.05976v2 · 오류 수정 연구 (프리프린트)','RESEARCH');
      panel(s,64,199,1152,92,bluePale,blue);
      text(s,'같은 오류가 있는 답',87,216,515,56,32,C.ink,true);
      text(s,'누가 쓴 답으로 제시하는지 바꿔 검토시킨다.',569,221,618,49,25,blue,true);
      section(s,64,327,554,'조건 A','내 이전 답으로 제시','자기 응답의 오류를 다시 살펴본다.',blue);
      section(s,671,327,545,'조건 B','외부에서 온 답으로 제시','같은 오류를 외부 답의 문제로 살펴본다.');
      takeaway(s,'외부 답으로 제시하면 명시적 오류 수정이 늘었다. 12개 조건 중 10개에서 유의했다.');
      return s;
    },
    S93(p) {
      const s=common(p,'S93','다음 실행이 이어받을 상태를 파일에 남긴다','루프 재개 · 상태 파일의 예시','');
      panel(s,64,226,300,234,C.white);
      caption(s,'이전 실행',85,249,255,blue);
      text(s,'무엇을\n시도했나?',85,315,257,98,36,C.ink,true);
      connect(s,372,345,60,0,blue);
      panel(s,443,198,392,294,bluePale,blue);
      text(s,'state.md',465,214,345,54,29,blue,true,CODE);
      line(s,466,278,345,blue,1);
      ['마지막 변경과 버전','검사 결과와 실패 입력','미해결 항목과 다음 단계'].forEach((item,i)=>text(s,item,466,297+i*52,349,44,24,C.ink,true));
      connect(s,845,345,61);
      panel(s,916,226,300,234,C.pale,C.teal);
      caption(s,'다음 실행',937,249,255,C.teal);
      text(s,'무엇부터\n확인할까?',937,315,257,98,36,C.ink,true);
      takeaway(s,'프로젝트 지침은 AGENTS.md에, 실행마다 변하는 값은 상태 기록에 둔다.');
      return s;
    },
    S94(p) {
      const s=common(p,'S94','무인 실행의 범위를 어디까지 허용할까?','실행 경계 설계 · 격리와 최소 권한','');
      text(s,'자동으로 다시 시도하기 전에, 쓸 수 있는 자원을 정한다.',64,171,1152,46,30,C.teal,true);
      panel(s,64,243,762,269,C.pale,C.teal);
      caption(s,'허용된 실행 환경',87,258,690,C.teal);
      panel(s,90,320,310,132,C.white);
      text(s,'작업 파일',109,334,267,46,28,C.ink,true);
      text(s,'지정한 폴더에서 변경',109,392,269,42,22,C.sub);
      panel(s,426,320,373,132,C.white);
      text(s,'외부 연결',446,334,328,46,28,C.ink,true);
      text(s,'승인한 대상·권한만 사용',446,392,332,42,22,C.sub);
      line(s,866,263,350,C.warn,3);
      caption(s,'권한 밖',866,281,340,C.warn);
      text(s,'관련 없는 파일\n비밀 키 · 배포 권한',866,347,350,96,29,C.ink,true);
      takeaway(s,'워크트리는 파일을 분리한다. 접근 권한은 실행 환경에서 따로 제한한다.');
      return s;
    },
    S95(p) {
      const s=common(p,'S95','권한·예산을 넘으면 멈추고 사람에게 넘긴다','실행 중단과 인계 · 운영 예시','','TEACHING_MODEL','신규 확장','수행 방법 · 검증·개선');
      panel(s,64,210,505,285,C.white);
      caption(s,'중단할 조건',87,229,462,C.warn);
      [['권한','승인받지 않은 외부 쓰기'],['예산','호출 비용·시간 한도 도달'],['재시도','정한 횟수에 도달']].forEach(([name,detail],i)=>{
        const y=286+i*60;
        line(s,88,y,455);
        text(s,name,88,y+5,90,44,24,C.warn,true);
        text(s,detail,179,y+5,365,44,23,C.ink);
      });
      connect(s,579,349,89,0,C.warn);
      panel(s,679,210,537,285,C.amber,C.warn);
      caption(s,'사람에게 인계',704,229,482,C.warn);
      text(s,'중단 이유와 마지막 상태',704,309,482,61,31,C.ink,true);
      text(s,'시도한 일, 남은 일,\n필요한 판단을 함께 전달한다.',704,399,481,73,24,C.sub);
      takeaway(s,'사람이 범위·예산을 다시 정하거나 작업을 종료한다.');
      return s;
    },
    S96(p) {
      const s=common(p,'S96','자동화가 만든 변경을 사람이 설명할 수 있나?','병합 전 사람의 판단 · 코드 검토 예시','','TEACHING_MODEL','M5 · M6');
      panel(s,64,210,576,291,C.white,C.line);
      caption(s,'병합 요청에서 발견한 변경',85,230,523,blue);
      rect(s,85,301,534,67,C.ink);
      text(s,'− assert result == expected',97,309,510,50,24,C.white,true,CODE);
      text(s,'검사는 끝났다. 그런데 왜 이 비교를 지웠을까?',85,398,532,66,24,C.ink,true);
      caption(s,'검토자가 확인할 것',684,221,528,C.teal);
      [['01','목표를 위해 이 삭제가 필요한가?'],['02','기존 동작을 어디에서 다시 확인했나?'],['03','확인할 수 없는 영향은 무엇인가?']].forEach(([n,t],i)=>{
        const y=283+i*69;
        line(s,684,y,531);
        text(s,n,684,y+10,50,45,21,C.teal,true);
        text(s,t,735,y+10,480,45,24,C.ink,true);
      });
      takeaway(s,'삭제 이유와 검증 근거를 설명할 수 있을 때 병합을 결정한다.');
      return s;
    },
    S97(p) {
      const s=common(p,'S97','무엇을 자동화하고, 무엇을 사람이 결정할까?','ACT 4 마무리 · 개인 성찰과 Q&A','');
      text(s,'우리 팀이 반복해서 맡기는 일 하나를 떠올려 보세요.',64,172,1152,50,31,C.teal,true);
      section(s,64,256,347,'01   맡길 일','어디까지 맡길까?','구현·테스트·재수정 중\n자동으로 이어갈 일을 고른다.',blue);
      section(s,463,256,354,'02   완료 근거','무엇으로 판단할까?','결과가 목표와 맞는지\n확인할 근거 하나를 정한다.');
      section(s,866,256,350,'03   사람의 결정','언제 멈출까?','승인해야 할 변경과\n판단할 사람을 정한다.',C.warn);
      takeaway(s,'다음 ACT에서는 내 업무에 남길 구성과 덜어낼 구성을 고른다.');
      return s;
    }
  };
}
