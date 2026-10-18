// Approved pilot layouts, promoted under DEC-0027.
export const slides={
S05:(p,H)=>{
 const {C,FONT,CODE,text,rect,line,pixels}=H;
 const frame=(id,act,title,source,boundary,concept=false)=>H.frame(p,id,title,act,source,boundary,concept?'CONCEPTUAL':'OBSERVED_PRODUCT');

 const s=frame('S05','ACT 0  ·  Repository 탐색','Agent가 Test와 호출 경로를 찾았다',
 'TRIAL-001 기록·STATE-00 테스트 재구성  |  Codex CLI 0.154.0 · 읽기 전용',
 '실제 실행 화면이 아님 · 이 조사에서는 코드 수정 없음 · 현재 Desktop 동작 미검증');
 text(s,'crop(image, 1, 3)',64,165,560,43,34,C.teal,true,CODE);
 text(s,'끝 좌표 3은 포함하지 않는 계약',64,212,620,35,27,C.ink);
 text(s,'입력',64,270,72,40,24,C.sub,true);
 [0,1,2,3].forEach((v,i)=>text(s,String(v),156+i*70,255,66,28,21,C.sub,false,FONT,'center'));
 pixels(s,[[1,2,3,4],[5,6,7,8]],156,291,66,[C.white,C.pale,C.pale,C.white]);
 text(s,'열 index',446,255,132,28,20,C.sub);
 text(s,'기대',64,463,72,40,24,C.teal,true);
 pixels(s,[[2,3],[6,7]],156,458,50,[C.pale,C.pale]);
 text(s,'구현 결과',320,463,130,40,24,C.red,true);
 pixels(s,[[2,3,4],[6,7,8]],461,458,50,[C.pale,C.pale,C.redPale]);
 text(s,'한 열이 더 포함됨',461,570,205,26,22,C.red,true);
 rect(s,708,172,2,416,C.line);
 text(s,'조사에서 연결한 근거',752,172,460,36,28,C.ink,true);
 text(s,'01  실패 테스트',752,236,464,32,24,C.teal,true);
 text(s,'test_crop_excludes_\nend_coordinate',752,273,464,64,26,C.ink,false,CODE);
 text(s,'02  제품의 호출 경로',752,357,464,32,24,C.teal,true);
 text(s,'cli.main → process_image → crop',752,397,464,35,24,C.ink,false,CODE);
 text(s,'03  계약과 다른 구현',752,457,464,32,24,C.teal,true);
 text(s,'row[x_start : x_end + 1]',752,498,464,39,27,C.red,true,CODE);
 text(s,'계약: [x_start, x_end)',752,547,464,34,26,C.sub,false,CODE);

 return s;
},
S23:(p,H)=>{
 const {C,FONT,CODE,text,rect,line,pixels}=H;
 const frame=(id,act,title,source,boundary,concept=false)=>H.frame(p,id,title,act,source,boundary,concept?'CONCEPTUAL':'OBSERVED_PRODUCT');

 const s=frame('S23','ACT 2  ·  Project Context','작은 Project Context의 첫 기록',
 'OBSERVED PRODUCT  |  STATE-01 · AGENTS.md 실제 원문 발췌',
 '파일의 내용과 기록 위치를 보여주는 장 · Agent의 활용 관찰은 다음 장에서 확인');
 text(s,'반복해서 설명하던 내용을 저장소에 남겼다',64,170,1152,43,32,C.teal,true);
 text(s,'AGENTS.md',64,240,380,48,38,C.ink,true,CODE);
 text(s,'STATE-00-FIXED → STATE-01',750,246,466,36,22,C.sub,false,CODE,'right');
 line(s,64,306,1152);
 text(s,'프로젝트 목적',64,326,230,35,26,C.teal,true);
 text(s,'Local grayscale image-processing CLI using synthetic ASCII PGM data.',310,326,906,36,24,C.ink).text.get('grayscale image-processing CLI').bold=true;
 line(s,64,379,1152);
 text(s,'실행 방법',64,399,230,35,26,C.teal,true);
 text(s,'Use the prepared build and CLI commands documented in `README.md`.',310,399,906,36,24,C.ink).text.get('README.md').bold=true;
 line(s,64,452,1152);
 text(s,'테스트 명령',64,472,230,35,26,C.teal,true);
 text(s,'PYTHONPATH=src python3 -m unittest discover -s tests -v',310,472,906,36,24,C.ink,false,CODE);
 line(s,64,525,1152);
 text(s,'기본 제약',64,545,230,35,26,C.teal,true);
 text(s,'Keep changes scoped and verify relevant behavior.',310,545,906,36,24,C.ink).text.get('scoped and verify').bold=true;

 return s;
},
S45:(p,H)=>{
 const {C,FONT,CODE,text,rect,line,pixels}=H;
 const frame=(id,act,title,source,boundary,concept=false)=>H.frame(p,id,title,act,source,boundary,concept?'CONCEPTUAL':'OBSERVED_PRODUCT');

 const s=frame('S45','ACT 3  ·  Harness로 조사하고 검증하기','Working Harness Success',
 'STATE-04 → STATE-04-PERF  |  image_statistics · 합성 1024×768 · CPython 3.9.6 / macOS arm64',
 '동일 입력·상태별 7회 측정 · 이 환경의 코드 변경 결과이며 Harness 단독 효과는 입증하지 않음');
 text(s,'결과가 맞는지 확인하고, 같은 조건에서 비교했다',64,165,1152,43,32,C.teal,true);
 text(s,'실행 시간 중앙값',64,244,595,36,28,C.ink,true);
 text(s,'ms/call · 낮을수록 짧음',64,285,595,30,22,C.sub);
 const chart=s.charts.add('bar',{
  name:'Statistics runtime before and after',
  position:{left:64,top:322,width:650,height:230},
  categories:['변경 후','변경 전'],
  series:[{name:'Median ms/call',values:[10.769,15.468],points:[{idx:0,fill:C.teal},{idx:1,fill:'#9BA8B5'}],valuesFormatCode:'0.000'}],
  barOptions:{direction:'bar',grouping:'clustered',gapWidth:120,varyColors:true},hasLegend:false,
  xAxis:{visible:true,min:0,max:20,majorUnit:5,numberFormatCode:'0',textStyle:{fontSize:19,typeface:FONT,fill:C.sub},majorGridlines:{fill:C.line,width:1,style:'solid'},line:{fill:C.line,width:1,style:'solid'}},
  yAxis:{visible:true,numberFormatCode:'0',textStyle:{fontSize:24,typeface:FONT,fill:C.ink},line:{fill:'none',width:0},majorGridlines:null},
  dataLabels:{showValue:true,position:'outEnd',numberFormatCode:'0.000',textStyle:{fontSize:27,typeface:FONT,bold:true,fill:C.ink}},
  chartFill:C.bg,plotAreaFill:C.bg,chartLine:{fill:'none',width:0},plotAreaLine:{fill:'none',width:0}
 });
 rect(s,748,244,2,296,C.line);
 text(s,'Python 할당 피크',798,244,418,36,28,C.ink,true);
 text(s,'tracemalloc · 프로세스 RSS 아님',798,285,418,30,22,C.sub);
 text(s,'6,675,804 B',798,341,418,49,39,C.sub);
 text(s,'↓',798,397,46,52,36,C.teal);
 text(s,'380 B',856,397,360,65,56,C.teal,true);
 text(s,'평탄화 임시 리스트 제거',798,488,418,40,26,C.ink);
 text(s,'검증 완료',64,566,166,32,24,C.green,true);
 text(s,'집중 테스트 1/1  ·  전체 11/11  ·  CLI  ·  입력·결과 guard',238,566,978,32,24,C.ink);

 return s;
},
S57:(p,H)=>{
 const {C,FONT,CODE,text,rect,line,pixels}=H;
 const frame=(id,act,title,source,boundary,concept=false)=>H.frame(p,id,title,act,source,boundary,concept?'CONCEPTUAL':'OBSERVED_PRODUCT');

 const s=frame('S57','ACT 4  ·  CONCEPTUAL / 가상 사례','Project는 바뀌고 Workflow는 남았다',
 'DEMO-04A  |  가상 설정 · 실제 Repository 변경 이력이 아님',
 '두 지침의 범위를 비교하는 장 · Agent 실행, 테스트 누락 또는 PASS / FAIL 결과를 뜻하지 않음',true);
 text(s,'가정: 모듈 연결 동작도 검증해야 하는 프로젝트가 됐다',64,169,1152,44,30,C.ink);
 text(s,'현재 프로젝트의 기준',64,253,550,42,31,C.teal,true);
 text(s,'재사용 Workflow에 남은 지시',704,253,512,42,31,C.warn,true);
 line(s,64,314,520,C.teal,3);
 line(s,704,314,512,C.warn,3,'dash');
 text(s,'단위 테스트',64,351,520,46,33,C.ink,true);
 text(s,'단위 테스트',704,351,512,46,33,C.ink,true);
 rect(s,64,425,520,78,C.pale);
 text(s,'+ 통합 테스트',88,441,472,44,34,C.teal,true);
 rect(s,704,425,512,78,'none',C.warn,2,'dash');
 text(s,'단위 테스트만 지시',728,441,464,44,30,C.warn);
 text(s,'프로젝트의 기준이 바뀌었을 때, 재사용 지침도 함께 바뀌었을까?',64,549,1152,42,30,C.ink,true);

 return s;
}
};
