/** DEC-0183: adopt the bounded C++ comparison without rewriting Python history. */
import fs from 'node:fs/promises';
import path from 'node:path';
import {addModuleFooter} from './legacy-priority.mjs';

export async function loadCppStatisticsSlides(root,H) {
 const summary=JSON.parse(await fs.readFile(path.join(root,'demos/experiments/cpp-statistics/results/summary.json'),'utf8'));
 if(summary.experiment_id!=='EXP-CPP-STATS-001'||summary.oracle_fixtures!==56)throw new Error('Unexpected C++ experiment evidence');
 const measured=Object.fromEntries(summary.results.filter(x=>x.workload==='main_1024x768').map(x=>[x.variant,x]));
 const base=measured.copied_buffer,row=measured.row_reductions,fused=measured.fused_pass;
 if(!base||!row||!fused||[base,row,fused].some(x=>x.samples!==63))throw new Error('Incomplete C++ candidate evidence');
 const {C,FONT,text,rect,line}=H;
 const ms=x=>x.median_us/1000;
 const make=(p,id,title,eyebrow,boundary,moduleLabel)=>{
  const slide=H.frame(p,id,title,eyebrow,
   '1024×768 · Apple M5 Max · Clang 21 · Release',boundary,'OBSERVED_PRODUCT');
  addModuleFooter(slide,id,{slideId:id,footerLabel:moduleLabel},H);
  return slide;
 };
 return {
  S68(p){
   const s=make(p,'S68','밝기 통계 계산의 성능 개선 후보',
    'ACT 3 · 같은 밝기 통계 작업의 C++ 구현 비교',
    '동일 출력·동일 입력에서 비교한 C++ 실험','M 연계 · M2 · M5 · M9');
   text(s,'이미지의 최소·최대·평균 밝기를 구하되, 기존 결과는 유지',64,177,1152,40,30,C.teal,true);
   text(s,'비교 기준',64,241,160,32,25,C.sub,true);
   text(s,'입력 이미지',228,232,190,31,23,C.ink,true,FONT,'center');
   for(let y=0;y<3;y++)for(let x=0;x<5;x++)rect(s,265+x*23,274+y*21,20,18,['#9BA8B5','#C7D0DA','#E0EFF0'][y],C.white,1);
   s.shapes.add({geometry:'connector',kind:'straight',position:{left:432,top:305,width:69,height:0},line:{fill:C.sub,width:3},tail:{type:'triangle',width:'sm',length:'sm'}});
   text(s,'임시 vector에 전체 픽셀 복사',526,232,438,31,25,C.ink,true,FONT,'center');
   for(let x=0;x<15;x++)rect(s,557+x*25,288,22,30,['#9BA8B5','#C7D0DA','#E0EFF0'][Math.floor(x/5)],C.white,1);
   text(s,'계산 전에 큰 임시 공간 사용',526,331,438,28,23,C.sub,false,FONT,'center');
   s.shapes.add({geometry:'connector',kind:'straight',position:{left:980,top:305,width:48,height:0},line:{fill:C.sub,width:3},tail:{type:'triangle',width:'sm',length:'sm'}});
   text(s,'최소·최대\n평균 계산',1052,268,164,73,27,C.ink,true,FONT,'center');
   line(s,64,381,1152);
   text(s,'복사 없이 계산하는 두 후보',64,397,660,35,28,C.teal,true);
   text(s,'실행시간 (ms/호출)',764,399,272,31,22,C.sub);
   [
    [444,'행마다 min·max·sum 계산',ms(row),'미선택',C.sub,C.white],
    [511,'한 번 순회하며 함께 계산',ms(fused),'선택',C.teal,C.pale]
   ].forEach(([y,label,value,decision,color,fill],index)=>{
    rect(s,64,y,1152,59,fill);
    text(s,label,84,y+8,648,43,30,index===0?C.sub:C.ink,true);
    text(s,value.toFixed(3),764,y+8,208,43,29,color,true);
    text(s,decision,1052,y+6,144,46,33,color,true,FONT,'center');
   });
   text(s,'결과 6항목 동일 · 두 후보 모두 추가 픽셀 버퍼 0 B',64,576,1152,28,23,C.sub);
   return s;
  },
  S69(p){
   const s=make(p,'S69','선택한 변경의 시간·메모리·동작 확인',
    'ACT 3 · 선택한 C++ 구현의 측정과 검증',
    '추가 픽셀 버퍼만 계측 · 입력 영상·전체 메모리 제외','M 연계 · M5');
   text(s,'선택한 변경: 임시 복사 없이, 한 번에 최소·최대·합계 계산',64,177,1152,40,29,C.teal,true);
   [[64,'실행시간',496],[620,'추가 픽셀 버퍼',284],[972,'동작 검증',244]].forEach(([x,label,width])=>text(s,label,x,254,width,40,31,C.ink,true));
   [582,934].forEach(x=>rect(s,x,253,1.5,300,C.line));
   text(s,'같은 입력 · 63표본 중앙값 (ms/호출)',64,301,496,30,22,C.sub);
   s.charts.add('bar',{
    name:'C++ statistics runtime comparison',position:{left:64,top:345,width:496,height:208},
    categories:['한 번 집계','복사 기준'],
    series:[{name:'Median ms/call',values:[fused,base].map(x=>Number(ms(x).toFixed(3))),points:[{idx:0,fill:C.teal},{idx:1,fill:'#9BA8B5'}],valuesFormatCode:'0.000'}],
    barOptions:{direction:'bar',grouping:'clustered',gapWidth:120,varyColors:true},hasLegend:false,
    xAxis:{visible:true,min:0,max:1.5,majorUnit:0.5,numberFormatCode:'0.0',textStyle:{fontSize:19,typeface:FONT,fill:C.sub},majorGridlines:{fill:C.line,width:1,style:'solid'},line:{fill:C.line,width:1,style:'solid'}},
    yAxis:{visible:true,min:0,max:1.5,majorUnit:0.5,numberFormatCode:'0.0',textStyle:{fontSize:22,typeface:FONT,fill:C.ink},line:{fill:'none',width:0},majorGridlines:null},
    dataLabels:{showValue:true,position:'outEnd',numberFormatCode:'0.000',textStyle:{fontSize:26,typeface:FONT,bold:true,fill:C.ink}},
    chartFill:C.bg,plotAreaFill:C.bg,chartLine:{fill:'none',width:0},plotAreaLine:{fill:'none',width:0}
   });
   text(s,'계측한 임시 버퍼 피크',620,301,284,30,22,C.sub);
   text(s,'복사 기준',620,353,284,29,23,C.sub);
   text(s,base.temporary_buffer_peak_bytes.toLocaleString('en-US')+' B',620,387,284,48,36,C.sub);
   text(s,'한 번 집계',620,460,284,29,23,C.teal,true);
   text(s,fused.temporary_buffer_peak_bytes+' B',620,494,284,58,48,C.teal,true);
   text(s,'Python 기준과 대조',972,301,244,30,22,C.sub);
   text(s,'결과 유지',972,358,244,51,38,C.green,true);
   text(s,'출력 6항목 동일',972,411,244,32,25,C.ink);
   text(s,'56개 입력 대조\n계약 검사 20개 통과\n메모리 오류 검사 통과',972,462,244,93,23,C.ink);
   return s;
  }
 };
}

export function applyCppStatisticsBoundary(slide,id) {
 if(id!=='S72')return;
 const before='ACT 3 · 실제 밝기 통계 작업의 역할 판단';
 const matches=slide.shapes.items.filter(x=>String(x.text)===before);
 if(matches.length!==1)throw new Error('Missing S72 Python return boundary');
 matches[0].text.replace(before,'ACT 3 · 원래 Python Demo의 역할 판단');
}
