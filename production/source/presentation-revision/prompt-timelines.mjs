/** DEC-0038 / DEC-0110: one crop case, fictional UI and intended paths. */
import fs from 'node:fs/promises';
import path from 'node:path';
import * as H from './helpers.mjs';

export async function loadPromptTimelineSlides(root) {
  const agent = new Uint8Array(await fs.readFile(path.join(root, 'assets/slide-illustrations/task-choice-agent.png')));
  const tokenCurve = new Uint8Array(await fs.readFile(path.join(root, 'assets/slide-illustrations/S11-token-growth.png')));
  const timeCurve = new Uint8Array(await fs.readFile(path.join(root, 'assets/slide-illustrations/S11-time-growth.png')));
  const {C, FONT, text, rect, line, arrow} = H;
  const picture = (s,x,y,w,h) => s.images.add({blob:agent,contentType:'image/png',fit:'contain',alt:'The same fictional AI agent considering ambiguous task options',position:{left:x,top:y,width:w,height:h}});
  const dot = (s,x,y,d,color) => s.shapes.add({geometry:'ellipse',position:{left:x,top:y,width:d,height:d},fill:color,line:{fill:'none',width:0}});
  const pathShape = (s,x,y,w,h,commands,color,width=2,dash='solid',name='Conceptual path') => s.shapes.add({geometry:'custom',name,position:{left:x,top:y,width:w,height:h},fill:'none',line:{fill:color,width,style:dash},customPaths:[{width:w,height:h,commands}]});
  const prompt = (s,x,y,w,h,rows,{size=30,full=false}={}) => {
    const box=rect(s,x,y,w,h,C.white,C.line,1.5);box.borderRadius=12;
    text(s,'요청 입력 · 교육용 재구성',x+18,y+10,w-36,27,20,C.sub);
    line(s,x+18,y+47,w-36,C.line,1);
    if(full === 'natural'){
      text(s,'crop test 고쳐줘.',x+20,y+57,w-40,31,26,C.ink,true);
      rows.forEach((body,i)=>text(s,body,x+20,y+103+i*43,w-40,37,23,C.ink));
    } else if(full){
      text(s,'crop test 고쳐줘',x+20,y+57,w-40,31,26,C.ink,true);
      let yy=y+96;
      rows.forEach((r)=>{
        const multiline=r[1].includes('\n'),rowHeight=multiline?60:34;
        text(s,r[0],x+20,yy,66,33,23,C.teal,true);
        text(s,r[1],x+94,yy,w-114,multiline?56:33,23,C.ink);
        yy+=rowHeight;
      });
    } else text(s,rows,x+20,y+64,w-40,60,size,C.ink,true);
    text(s,'+',x+18,y+h-34,28,26,24,C.sub);
    dot(s,x+w-43,y+h-36,25,C.teal);
    text(s,'↑',x+w-43,y+h-37,25,26,22,C.white,true,FONT,'center');
  };
  const timelines = (s,{x=568,y=259,w=648,gap=96,selected=-1,labels}) => {
    const baseY=y+74;
    dot(s,x-7,baseY+gap-7,14,C.teal);
    labels.forEach((item,i)=>{
      const chosen=i===selected,color=chosen?C.teal:selected<0?C.sub:'#78848F';
      const commands=[{moveTo:{x:0,y:gap}},{cubicBezTo:{x1:52,y1:gap,x2:45,y2:i*gap,x:110,y:i*gap}},{lineTo:{x:w-12,y:i*gap}}];
      pathShape(s,x,baseY,w,2*gap,commands,color,chosen?4:2,selected>=0&&!chosen?'dash':'solid','Possible interpretation '+String.fromCharCode(65+i));
      dot(s,x+w-15,baseY+i*gap-4,8,color);
      text(s,String.fromCharCode(65+i),x+119,y+i*gap+7,30,32,21,color,true);
      text(s,item[0],x+158,y+i*gap,w-158,39,29,color,true);
      text(s,item[1],x+158,y+i*gap+39,w-158,28,22,color);
    });
  };
  const cost = (s,x,label,blob) => {
    text(s,label,x,542,128,33,25,C.warn,true);
    s.images.add({blob,contentType:'image/png',fit:'contain',alt:label+'의 정성적 증가를 표현한 AI 생성 개념 이미지. 측정값 없음.',position:{left:x+126,top:529,width:162,height:58}});
  };
  return {
    S11(p){
      const s=H.frame(p,'S11','이 요청에는 무엇이 빠졌을까?','ACT 1 · 요청에 남은 목표·조건·완료 근거',
        '교육용 구성 사례 · AI 생성 삽화 · 토큰/시간 곡선은 수치 없는 개념도',
        '실제 Agent 실패·측정 결과·기하급수 증가 법칙이 아닙니다. 필요한 정보를 되묻는 선택도 가능합니다.','CONCEPTUAL');
      text(s,'앞서 본 crop 실패를 고치려 합니다.',64,188,1152,39,28,C.sub);
      prompt(s,64,252,382,172,'crop test 고쳐줘',{size:31});
      picture(s,462,245,294,222);
      text(s,'요청의 경계를 확인',455,462,316,34,25,C.teal,true,FONT,'center');
      const questions=[['지킬 기준','명세·기대값을 유지할까?'],['수정 범위','어디까지 바꿔도 될까?'],['완료 근거','무엇을 확인·보고받을까?']];
      questions.forEach((r,i)=>{
        const y=237+i*103;
        text(s,r[0],796,y,420,30,23,C.sub,true);
        text(s,r[1],796,y+31,396,41,28,C.teal,true);
        text(s,'?',1188,y+31,28,40,28,C.teal,true,FONT,'right');
        line(s,796,y+78,420,C.line,1.5);
      });
      text(s,'재탐색·재시도가 길어질 수 있다',64,488,690,34,26,C.warn,true);
      cost(s,64,'토큰 소모',tokenCurve);cost(s,408,'작업 시간',timeCurve);
      return s;
    },
    S12(p){
      const s=H.frame(p,'S12','어디까지 바꾸라는 요청일까?','ACT 1 · 같은 요청에서 검토할 변경 범위',
        '교육용 병렬 시간선 · 실제 반복 실행·동시 Subagent·분기 확률을 관찰한 결과가 아님',
        '짧은 요청의 가능한 해석을 그렸습니다. 실제 TRIAL-002 Prompt나 특정 실패의 재현이 아닙니다.','CONCEPTUAL');
      text(s,'같은 crop 요청에서, 허용할 변경 범위를 비교한다.',64,163,1152,30,23,C.sub);
      prompt(s,64,210,440,164,'crop test 고쳐줘',{size:33});
      picture(s,165,379,190,140);
      text(s,'같은 AI Agent · 같은 요청',64,516,440,30,25,C.teal,true,FONT,'center');
      arrow(s,423,420,88,22,C.teal);
      text(s,'어떤 변경을 허용했을까?',568,199,648,35,27,C.sub,true);
      timelines(s,{labels:[['테스트 기대값 변경','명세 변경의 정당성·승인 필요'],['구현을 명세에 맞춤','기존 명세·기대값을 유지'],['변경 범위를 먼저 확인','의도·명세가 충돌하면 질문']]});
      text(s,'요청에서 더 분명히 할 정보',64,548,1152,26,23,C.sub,true);
      ['목표의 세부','보존 조건','수정 범위','확인 근거','완료 조건'].forEach((v,i)=>text(s,v+' ?',64+234*i,577,214,25,24,C.ink));
      return s;
    },
    S13(p){
      const s=H.frame(p,'S13','원하는 변경 범위를 요청에 담는다','ACT 1 · 같은 요청에 보존·수정·확인 조건 추가',
        '교육용 Prompt와 목표 경로 · TRIAL-002의 실제 요청·실행 결과가 아님',
        '의도한 경로 표시는 실제 선택·정확성·성공을 보장하지 않습니다. 변경 뒤 검증은 계속 필요합니다.','CONCEPTUAL');
      text(s,'기대값 · crop(1, 3) → 열 1·2, 폭 2',64,175,550,28,23,C.sub);
      prompt(s,64,216,550,322,[
        '기존 명세와 테스트 기대값은 유지하고,',
        '명세에 어긋난 crop 구현만 최소 수정해.',
        '관련 테스트와 전체 테스트를 확인하고,',
        '변경 내용·검증 결과·미확인 사항을 보고해.'
      ],{full:'natural'});
      text(s,'사람이 원하는 경로를 명시',652,175,564,33,27,C.teal,true);
      picture(s,637,214,152,114);
      arrow(s,623,405,34,21,C.teal);
      timelines(s,{x:679,y:268,w:537,gap:86,selected:1,labels:[
        ['테스트 기대값 변경','보존 조건과 맞지 않음'],
        ['crop 구현 최소 수정','사람이 명시한 변경 범위'],
        ['추가 질문 후 진행','필요한 정보가 남으면 확인']
      ]});
      rect(s,64,550,1152,43,C.pale);
      text(s,'원하는 변화·조건·완료 근거를 요청에 담는다.',80,553,1120,37,30,C.teal,true);
      return s;
    }
  };
}
