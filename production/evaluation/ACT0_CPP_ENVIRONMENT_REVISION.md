# ACT0 — C++ 대응 / 실행 환경 시각화 결과

DEC-0187 · 2026-11-05 · 기준6432cc6 · Status: PASS (local).

## 변경

| 주석 | Slide | 반영 |
|---|---|---|
|1|S08|“발견한 근거의 관계도” footer 제거.|
|2|S08|기존 세 파일/자료 연결 구조를 C++로 대응. tests/crop_test.cpp, Crop.EndExcluded, EXPECT_EQ(width, 2), std::vector iterator 생성식, src/transform.cpp, main()→process_image()→crop() 사용.|
|3|S09|테스트 파일→임시 폴더 생성 시도→읽기 전용 권한 경계와 잠금으로 교체. Crop 구현 문제와 별개임을 짚고 로그+권한 확인으로 S10에 연결.|

S08의 기대 폭2와 +1로 값4를 더 포함하는 차이는 S07의 같은4원소 행/시작1/끝3을 설명한다. 파일 아이콘·3열·명세·연결·중심 결론을 보존하고 C++ 생성식의3줄을 담도록 본문 아래 간격을 조정했다. 코드는24CSS px(18pt)로 렌더링했다. 전체 함수·유효성 검사나 실행 결과를 보여주는 장이 아니다.

S09는 쓰기 시도가 권한 경계에서 막히는 모습을 중심으로 한다.3건 집계는 Notes에 남기고 그림에는 임시 파일을 쓰려 했다는 동기, 폴더 생성의 쓰기 권한, 읽기 전용 제한만 둔다. 가짜 로그나 오류 문자열·Screenshot·복구 결과는 만들지 않았다.

## 근거 범위

실제 관찰은 원래 Python TRIAL-001이다. 원래 tests/test_transform.py·src/graypipe/transform.py·README.md, row[x_start : x_end + 1], cli.main→pipeline.process_image→transform.crop, README의 기존 결함 안내를 S08 Notes에 보존했다. C++ 파일명과 GoogleTest 확인 구문은 역할 대응이며 실제 Demo 파일·새 실행/실패/컴파일·C++ Crop Trial이 아니다. 별도 밝기 통계 C++ 실험을 이 Crop의 근거로 사용하지 않는다.

S09의 환경 오류3건은 별개다. 권한을 해제하거나 코드를 수정하지 않았고, Agent 성능 우위나 현재 Desktop 동작을 입증하지 않는다. 전체7통과/Crop실패1/환경오류3과 관련2통과/같은Crop실패의 원래 집계는 Notes에 유지한다.

## 검증

- Full111장+ACT0 14장,125개 렌더/내장 Notes를19필드 Markdown에 대조했다.
- 최종 S08/S09를 개별 크기로 확인하고 S07/S10의 언어와 자료 범주에 연결했다. 새 잘림·겹침을 발견하지 않았다. 나머지109장 화면은 기준판과 같다.
- S08의 파일명·확인 구문·생성식·호출 라벨은 C++이며 Python 표현/지정 footer는 화면에서 제거했다. 원문은 Notes에 남는다.
- 전체111장/372분과 ACT별14/23/22/18/19/15장 및42/64/90/64/71/41분, Mode170/44/95/17/21/25분 유지. S08 Demo4/S09 Case3분 유지.
- Slide ID/Title/Section/Beat/Primary Template·M 연계 위치와 모든 이미지 bytes/위치를 보존했다. ACT0의 화면은 Full과 일치한다.
- PPTX 구조/재가져오기/16:9/폰트 정책/레이아웃 검사 통과. 신규 finding0. 기존 Full S04/S54/S79 경고4건과 ACT0 S04 경고2건은 그대로다.
- native 표 S54/S81/S85, S69 C++ 차트·수치와 나머지 ACT1–5 PPT를 보존했다.
- 새 Trial·컴파일·제품 실행·benchmark·이미지 생성·Demo Repository/실험/Sites/발표 묶음 변경 없음.

P0/P1: 이번 변경에서 새로 발견한 문제 없음. C++ Crop 실행·Windows PowerPoint·발표PC/교육장·제품/계정·실측 리허설은 UNVERIFIED.

[기획과 범위](../../plan/ACT0_CPP_ENVIRONMENT_REVISION.md) · [기계 대조](ACT0_CPP_ENVIRONMENT_VALIDATION.json) · [S08](../preview/full/S08.png) · [S09](../preview/full/S09.png) · [ACT0 Notes](../notes/ACT_0_NOTES.md).
