# S08 — C++ Crop 구현 조건 정정

DEC-0189 · 2026-11-05 · 기준bea4a22 · Status: PASS (local).

## 변경

오른쪽 std::vector 범위 생성식을 사용자가 실제 구현이라고 제공한 조건으로 바꿨다.

```cpp
x <= x_end &&
x < row.size()
```

기존 코드 영역의 위치·크기·24px(18pt) Consolas·빨강·세 자료 연결·M 연계 표시를 유지한다. `<=`가 끝 좌표를 포함하며 `x < row.size()`는 행 범위를 넘지 않게 하는 조건이라는 설명으로 Notes를 정렬했다. 조건을 수정한 결과가 아니라 명세와 차이가 나는 기존 구현을 보여준다.

## 보존

전체109장/367분, ACT0 14장/42분과 S08 Demo4분, 제목·Slide ID·Mode·Beat·Section·Template·Claim을 유지한다. 테스트/반개구간 명세/구현의 연결과 S07→S08→S09의 흐름을 바꾸지 않았다. 원래 Python TRIAL-001과 row[x_start : x_end + 1]은 Notes에 보존한다. C++ 조건의 출처는 이번 사용자 주석이며 새 C++ Crop 실행·테스트 결과·성능 검증으로 취급하지 않는다.

## 검증

- Full109장과 ACT0 14장, 총123개 렌더와 내장 Notes를 Markdown에 대조했다. Notes는 S08 한 구간만 바뀌며19개 필드를 유지한다.
- 기준판과 비교해 Full의 나머지108장과 ACT0의 나머지13장은 화면이 동일하다. 변경 장의 픽셀 차이는 기존 구현 코드 영역 안으로 한정된다.
- S08을 개별 화면으로 확인했다. 두 줄 조건식에 잘림·겹침이 없고 세 자료의 정렬을 유지한다. 두 PPT의 같은 S08 PNG도 일치한다.
- S08 native text 객체30만 변경했다. 코드 영역의 위치·크기·스타일, 기존 그림 bytes와 native 차트를 보존했다. 재작성 시 생성되는 creation ID와 관계 식별자는 내용 비교에서 정규화하고 실제 연결 대상과 픽셀을 별도로 대조했다.
- PPTX 패키지·재가져오기·16:9·폰트 정책·레이아웃 검사 통과. 새 finding0. Full4건/ACT0 2건의 기존 경고만 유지한다.
- 최신 전달 파일·Fallback 해시·Notes·기획 문서를 정렬한다. ACT1–5, Demo Repository·Trial·실험·Sites·발표 묶음은 변경하지 않는다.

Windows PowerPoint·교육장·실제 리허설·현재 제품/계정·C++ Crop 실행은 UNVERIFIED다. 새 P0/P1 문제는 발견하지 않았다.

[S08 미리보기](../preview/full/S08.png) · [기계 대조](S08_CROP_CONDITION_VALIDATION.json) · [기획](../../plan/ACT0_CPP_ENVIRONMENT_REVISION.md) · [Slide Map](../../plan/SLIDE_MAP.md).
