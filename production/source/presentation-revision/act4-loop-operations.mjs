/** Approved final-ID ACT4 scenes. Each scene adds exactly one editable slide. */
import {readFileSync} from 'node:fs';
import {actTitleFactories} from './act-titles.mjs';
import {addModuleFooter} from './legacy-priority.mjs';
import {addPracticalTipBadge} from './practical-tips.mjs';

export function loopOperationsFactories(H) {
  const {C,FONT,CODE,text,rect,line} = H;
  const blue = '#315C87';
  const bluePale = '#E1EBF6';
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
      const s=common(p,'S80','같은 검토 결과가 다음 수정을 시작한다','사람의 재지시 없이 이어지는 수정과 재검토','');
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
        ['진행 주체','사람이 매번 다음 단계를 지시','목표와 기준에 따라 루프가 진행'],
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
      const centerY=413, boxTop=centerY-47, boxBottom=centerY+47;
      const phase=(title,x,w,tone)=>text(s,title,x,234,w,38,26,tone,true);
      const step=(number,title,x,w)=>{
        const box=rect(s,x,boxTop,w,94,C.white,C.teal,1.5);box.borderRadius=9;
        text(s,number,x+4,boxTop+10,w-8,27,20,C.teal,true,FONT,'center');
        text(s,title,x+4,boxTop+41,w-8,43,28,C.ink,true,FONT,'center');
      };
      // Keep setup linear. Only the implementation, checks and decision repeat.
      const field=rect(s,312,215,668,356,loopFill);field.borderRadius=18;
      phase('준비',64,229,blue);
      phase('구현·검토 반복',335,600,C.teal);
      phase('사람에게 인계',1023,193,blue);
      const setup=[
        ['01','목표·범위',centerY-120],
        ['02','현재 상태 조사',centerY-60],
        ['03','계획·환경 준비',centerY]
      ];
      setup.forEach(([number,title,y],i)=>{
        const box=rect(s,64,y-20,228,40,C.white,'#A9BDCC',1);box.borderRadius=7;
        s.shapes.add({name:'준비 단계 '+number,geometry:'ellipse',position:{left:72,top:y-14,width:34,height:28},fill:blue,line:{fill:'none',width:0}});
        text(s,number,72,y-14,34,28,18,C.white,true,FONT,'center');
        text(s,title,115,y-20,171,40,25,C.ink,true);
        if(i<2) connect(s,89,y+20,0,20,blue);
      });
      connect(s,292,centerY,45,0,blue);
      step('04','구현',337,111);
      step('05','실행 검증',479,126);
      step('06','독립 검토',636,126);
      connect(s,448,centerY,31,0,C.teal);
      connect(s,605,centerY,31,0,C.teal);
      connect(s,762,centerY,35,0,C.teal);
      s.shapes.add({name:'07 다음 행동 판단',geometry:'diamond',position:{left:797,top:centerY-71,width:161,height:142},fill:C.teal,line:{fill:'none',width:0}});
      text(s,'07',824,centerY-39,107,27,20,C.white,true,FONT,'center');
      text(s,'다음 행동',810,centerY-15,135,31,25,C.white,true,FONT,'center');
      text(s,'판단',824,centerY+12,107,30,25,C.white,true,FONT,'center');

      const startX=392.5,endX=877.5;
      const pathWidth=endX-startX, pathHeight=67;
      s.shapes.add({name:'보완 경로 · 판단에서 구현으로',geometry:'custom',position:{left:startX,top:boxBottom,width:pathWidth,height:pathHeight},fill:'none',line:{fill:C.warn,width:2.5},customPaths:[{width:pathWidth,height:pathHeight,commands:[
        {moveTo:{x:pathWidth,y:24}},{lineTo:{x:pathWidth,y:pathHeight-12}},
        {quadBezTo:{x1:pathWidth,y1:pathHeight,x:pathWidth-12,y:pathHeight}},
        {lineTo:{x:12,y:pathHeight}},{quadBezTo:{x1:0,y1:pathHeight,x:0,y:pathHeight-12}},
        {lineTo:{x:0,y:16}}
      ]}]});
      connect(s,startX,boxBottom,0,16,C.warn,true);
      text(s,'보완이 필요하면 다시 구현',438,centerY+65,370,40,24,C.warn,true,FONT,'center');

      connect(s,958,centerY,74,0,blue);
      const handoff=rect(s,1032,boxTop,184,94,bluePale,blue,1.5);handoff.borderRadius=9;
      text(s,'08',1037,boxTop+10,174,27,20,blue,true,FONT,'center');
      text(s,'결과 인계',1037,boxTop+41,174,43,30,C.ink,true,FONT,'center');
      text(s,'완료 · 검증 결과',1029,centerY+63,190,35,23,blue,true,FONT,'center');
      text(s,'중단 · 남은 일',1029,centerY+100,190,35,23,C.sub,false,FONT,'center');
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
      const s=common(p,'S90','작성자와 검토자는 무엇을 주고받을까?','모델 배치 예시 · 밝기 통계의 메모리 개선','');
      const cardWidth=290;
      const role=(x,model,job,mark,alt,size,ink)=>{
        panel(s,x,216,cardWidth,277,C.white,C.line);
        text(s,job,x+15,234,cardWidth-30,45,29,ink,true,FONT,'center');
        const logo=readFileSync(new URL('../../../assets/slide-illustrations/model-handoff/'+mark,import.meta.url));
        s.images.add({blob:new Uint8Array(logo),contentType:'image/png',fit:'contain',alt,
          position:{left:x+(cardWidth-size)/2,top:344-size/2,width:size,height:size}});
        text(s,model,x+12,416,cardWidth-24,54,29,C.ink,true,FONT,'center');
      };
      role(64,'GPT-6 Luna','작성자','openai.png','OpenAI 로고',126,blue);
      role(926,'Claude Sonnet 5.5','검토자','claude.png','Claude 로고',86,C.teal);

      text(s,'행별 집계 변경안',375,211,530,45,32,blue,true,FONT,'center');
      text(s,'출력 6개 비교 결과',375,264,530,40,25,C.ink,false,FONT,'center');
      connect(s,367,318,546,0,blue);
      connect(s,367,384,546,0,C.teal,true);
      text(s,'최대 할당량 미확인',375,410,530,45,32,C.teal,true,FONT,'center');
      text(s,'같은 입력으로 기준판과 재측정',375,462,530,40,25,C.ink,false,FONT,'center');
      takeaway(s,'검토자가 빠진 근거를 짚으면, 작성자는 그 조건으로 다시 측정한다.');
      return s;
    },
    S93(p) {
      const s=common(p,'S93','다음 실행이 이어받을 상태를 파일에 남긴다','루프 재개 · 상태 파일의 예시','');
      caption(s,'검토자 회신',64,247,204,blue);
      text(s,'“최대 할당량\n근거가 없어요.”',64,300,221,98,32,C.ink,true);
      connect(s,293,348,50,0,blue);

      // Native paper and folded corner; the contents remain individually editable.
      const page=(name,x,y,w,h,points,fill)=>s.shapes.add({
        name,geometry:'custom',position:{left:x,top:y,width:w,height:h},
        fill,line:{fill:blue,width:2},customPaths:[{width:w,height:h,
          commands:points.map(([px,py],i)=>({[i?'lineTo':'moveTo']:{x:px,y:py}}))}]
      });
      page('상태 파일',352,168,477,350,[[0,0],[425,0],[477,52],[477,350],[0,350],[0,0]],C.white);
      page('접힌 문서 모서리',777,168,52,52,[[0,0],[52,52],[0,52],[0,0]],bluePale);
      text(s,'state.md',379,195,365,60,39,blue,true,CODE);
      line(s,379,265,424,C.line,1);
      text(s,'밝기 통계 · 행별 집계',379,279,424,48,28,C.ink,true);

      rect(s,385,359,26,26,C.pale,C.teal,2);
      s.shapes.add({name:'완료 체크 표시',geometry:'custom',position:{left:389,top:366,width:18,height:12},
        fill:'none',line:{fill:C.teal,width:2.8},customPaths:[{width:18,height:12,
          commands:[{moveTo:{x:0,y:6}},{lineTo:{x:6,y:12}},{lineTo:{x:18,y:0}}]}]});
      text(s,'출력 6개 비교',430,346,357,51,29,C.sub);
      rect(s,373,409,436,65,C.amber);
      rect(s,385,429,26,26,C.white,C.warn,2);
      text(s,'최대 할당량 측정',430,416,360,51,29,C.warn,true);

      connect(s,835,442,61,0,C.warn);
      caption(s,'다음 실행의 첫 작업',909,288,307,C.warn);
      text(s,'같은 입력으로\n기준판과 변경안의',909,342,307,84,30,C.ink,true);
      text(s,'최대 할당량 비교',909,427,307,49,32,C.warn,true);
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
      const s=common(p,'S96','병합 전, 사람이 검증한다','Human in the Loop','','TEACHING_MODEL','M5 · M6');
      const roles=new Uint8Array(readFileSync(new URL('../../../assets/slide-illustrations/human-agent-icons.png',import.meta.url)));
      const actor=(human,x,y,size)=>s.images.add({blob:roles,contentType:'image/png',fit:'contain',
        alt:human?'검증 근거를 확인하는 사람':'변경안과 검사 결과를 제출하는 AI',
        position:{left:x,top:y,width:size,height:size},
        crop:{left:human?0:.5,right:human?.5:0,top:0,bottom:0}});
      const circle=(name,cx,diameter,fill,stroke)=>s.shapes.add({name,geometry:'ellipse',
        position:{left:cx-diameter/2,top:321-diameter/2,width:diameter,height:diameter},
        fill,line:{fill:stroke,width:2}});
      circle('AI 제출 노드',220,210,C.white,blue);
      circle('사람 검증 노드',640,266,C.pale,C.teal);
      circle('병합 승인 노드',1060,210,C.white,C.teal);
      actor(false,169,230,102);
      actor(true,577,208,126);
      s.shapes.add({name:'병합 승인 체크',geometry:'custom',position:{left:1020,top:251,width:81,height:58},
        fill:'none',line:{fill:C.teal,width:9},customPaths:[{width:81,height:58,
          commands:[{moveTo:{x:3,y:31}},{lineTo:{x:29,y:55}},{lineTo:{x:78,y:3}}]}]});
      text(s,'AI 제출',134,343,172,49,32,blue,true,FONT,'center');
      text(s,'사람 검증',535,348,210,58,39,C.teal,true,FONT,'center');
      text(s,'병합 승인',972,343,176,49,32,C.teal,true,FONT,'center');

      connect(s,334,321,163,0,blue);
      text(s,'근거 충분',782,262,162,41,27,C.teal,true,FONT,'center');
      connect(s,783,321,162,0,C.teal);
      s.shapes.add({geometry:'custom',name:'근거 부족 시 사람에서 AI로 되돌아가는 경로',position:{left:220,top:432,width:420,height:102},
        fill:'none',line:{fill:C.warn,width:3},customPaths:[{width:420,height:102,commands:[
          {moveTo:{x:420,y:23}},{lineTo:{x:420,y:87}},{quadBezTo:{x1:420,y1:102,x:405,y:102}},
          {lineTo:{x:15,y:102}},{quadBezTo:{x1:0,y1:102,x:0,y:87}},{lineTo:{x:0,y:13}}
        ]}]});
      connect(s,220,430,0,18,C.warn,true);
      text(s,'근거 부족 · 재측정',270,467,320,46,28,C.warn,true,FONT,'center');
      return s;
    },
    S97(p) {
      const s=common(p,'S97','무엇을 자동화하고, 무엇을 사람이 결정할까?','ACT 4 마무리 · 개인 성찰과 Q&A','');
      text(s,'우리 팀이 반복해서 맡기는 일 하나를 떠올려 보세요.',64,172,1152,50,31,C.teal,true);
      section(s,64,256,347,'01   맡길 일','어디까지 맡길까?','구현·테스트·재수정 중\n자동으로 이어갈 일을 고른다.',blue);
      section(s,463,256,354,'02   완료 근거','무엇으로 판단할까?','결과가 목표와 맞는지\n확인할 근거 하나를 정한다.');
      section(s,866,256,350,'03   사람의 결정','언제 멈출까?','승인해야 할 변경과\n판단할 사람을 정한다.',C.warn);
      takeaway(s,'방금 고른 목표와 완료 기준을 Codex에 어떻게 맡길까?');
      return s;
    }
  };
}
