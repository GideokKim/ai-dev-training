# ACT0 — C++ 대응과 실행 환경 시각화

## S08 구현 조건 정정 — DEC-0189

2026-11-05 · 기준bea4a22 · 현재109장/367분 유지.

오른쪽 구현을 사용자 제공 조건 `x <= x_end && x < row.size()`로 바꾼다. && 뒤에서 두 줄로 나누고 코드 영역·글꼴·색·세 자료의 배치는 유지한다. 끝 좌표를 포함하는 `<=`와 행 범위를 확인하는 `x < row.size()`의 의미를 Notes에 맞춘다. 기존 S07의 폭2/폭3, S08의 테스트·명세·구현 연결과 S09의 별도 권한 오류로 이어지는 흐름, S08의4Demo분은 그대로다.

사용자가 실제 구현이라고 알려준 조건을 반영한다. 원래 Python TRIAL-001, 원문 slice와 호출 경로는 Notes에 보존하며 새 C++ 실행이나 테스트 결과로 취급하지 않는다. Full109장/ACT0 14장의 렌더와 내장 Notes를 대조하고 S08 이외 화면을 기준판과 비교한다. Demo Repository·새 Trial·실험·Sites·묶음은 변경하지 않는다.

## 이전 DEC-0187 제작 기록

DEC-0187 · 2026-11-05 · 기준6432cc6 · 전체111장/372분 유지.

## S08

세 자료를 연결하는 기존 구조를 유지하고, tests/crop_test.cpp / Crop.EndExcluded / EXPECT_EQ(width, 2), README의 반개구간 명세, src/transform.cpp / std::vector iterator 범위 생성식을 보여준다. S07의4원소 입력에서 시작1/끝3이므로 기대 값2·3 두 개지만 잘못된 끝 iterator(+1)는 값4를 추가한다. 호출 관계는 main()→process_image()→crop()으로 언어를 맞춘다. “발견한 근거의 관계도” footer는 삭제한다.

이 파일명·확인 구문·생성식은 C++ 의미 대응이다. 원래 실행 언어는 Python이며 실제 tests/test_transform.py, README.md, src/graypipe/transform.py, row[x_start : x_end + 1] 및 cli.main→pipeline.process_image→transform.crop을 Notes에 보존한다. 새 C++ 파일·Crop 실험·GoogleTest 실행 결과를 만든 것이 아니다. C++ 밝기 통계 실험도 이 Crop의 근거가 아니다. 전체 함수·경계 검사 코드를 제공하는 장이 아니라 자료 관계를 보여주는 장이다.

## S09

기존3분과 실제 환경 오류 범위를 유지한다. 글 위주 세 상자 대신 테스트 파일/임시 폴더/잠금을 쓰고 쓰기 시도가 읽기 전용 권한 경계에 막히는 흐름을 보여준다. “앞의 Crop 구현 문제와는 별개”라는 문장으로 원인을 분리한다. 실행 로그+권한 확인이 다음 S10의 두 자료 범주로 이어진다.3건 집계는 Notes에 보존하며 Agent가 권한을 해제하거나 환경을 복구한 결과를 만들지 않는다.

## 보존과 검증

S07의 폭 비교와 S10의 프로젝트/실행 환경 자료 구조를 바꾸지 않는다. S08 Demo4분/S09 Case3분, 모든 Slide ID/Title/Section/Beat/Primary Template·19Notes 필드를 유지한다. Full111장+ACT0 14장을 렌더링하고 변경2장의 가독성·잘림·겹침·화살표와 다른109장 화면을 대조한다. 실제 발표PC·Windows·교육장·제품/계정·실측 리허설은 UNVERIFIED다. Demo Repository·Sites·묶음·실험은 변경하지 않는다.
