// Editable scope diagrams for the approved conceptual case in DEC-0027.
export const slides={
S67:(p,H)=>{
 const {C,FONT,text,rect,line,arrow}=H;
 const s=p.slides.add();s.background.fill=C.bg;
 text(s,'ACT 4  ·  CONCEPTUAL / 가상 사례',64,48,1030,28,19,C.teal,true);
 text(s,'S67',1120,48,96,28,19,C.sub,false,FONT,'right');
 text(s,'Project는 바뀌고 Workflow는 남았다',64,84,1152,64,48,C.ink,true);
 text(s,'가정: 모듈 연결 동작도 검증해야 하는 프로젝트가 됐다',64,169,1152,44,30,C.ink);

 text(s,'현재 프로젝트의 기준',64,239,550,42,31,C.teal,true);
 text(s,'재사용 Workflow에 남은 지시',704,239,512,42,31,C.warn,true);
 line(s,64,296,520,C.teal,3);
 line(s,704,296,512,C.warn,3,'dash');
 text(s,'단위 테스트 · 각 모듈',64,312,520,38,27,C.ink,true);
 text(s,'단위 테스트 · 각 모듈',704,312,512,38,27,C.ink,true);

 // The outer frame denotes the newly required integration scope, not a result.
 rect(s,64,354,520,126,C.pale,C.teal,2);
 const module=(x,label)=>{
  rect(s,x,374,182,72,C.white,C.teal,2);
  text(s,label,x+12,391,158,36,27,C.ink,true,FONT,'center');
 };
 module(84,'모듈 A');module(382,'모듈 B');
 arrow(s,289,397,70,24,C.teal);
 text(s,'+ 통합 테스트 · 모듈 연결까지',64,488,520,40,28,C.teal,true);

 // The same modules and connection remain; only the recorded instruction differs.
 module(724,'모듈 A');module(1014,'모듈 B');
 arrow(s,925,397,68,24,C.sub);
 rect(s,704,480,512,52,'none',C.warn,2,'dash');
 text(s,'단위 테스트만 지시',728,487,464,38,29,C.warn,true);

 text(s,'프로젝트의 기준이 바뀌었을 때, 재사용 지침도 함께 바뀌었을까?',64,549,1152,42,30,C.ink,true);
 line(s,64,612,1152,C.warn,2,'dash');
 text(s,'DEMO-04A  |  가상 설정 · 실제 Repository 변경 이력이 아님',64,621,1152,27,19,C.warn,true);
 text(s,'두 지침의 범위 비교 · Agent 실행, 테스트 누락 또는 PASS / FAIL 결과를 뜻하지 않음',64,650,1152,28,19,C.sub);
 return s;
}
};
