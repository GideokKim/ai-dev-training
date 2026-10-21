# S21 Specification Assertions / Vector Revision

Date: 2026-10-21 (Asia/Seoul). Decision: DEC-0041. Baseline: `e5596fd`.
Status: **COMPLETE — LOCAL PRODUCTION / ALIGNMENT**.

## Requested Change

S21의 다섯 확인 방법과 주장 범위를 왼쪽으로 모았다. 우측에는 S02의 native vector 원소 칸 표현을 재사용해, 검사 조건이 명세 위반을 구별하는지 보여준다. 제목·Story·Core·시간·Mode·Trial 근거는 그대로다.

- 기존 crop 첫 행 입력 `{1,2,3,4}`, 범위 `[1,3)`.
- 기대 vector `{2,3}`, 2개.
- 끝 좌표를 포함한 잘못된 결과 예 `{2,3,4}`, 3개. 제외할 값4를 붉게 강조.
- 빈 결과만 검사하는 `EXPECT_FALSE(actual.empty());`는 두 vector 모두 조건을 만족한다. 이 차이는 구별하지 못한다.
- `EXPECT_EQ(actual.size(), 2u);` 및 `EXPECT_EQ(actual, expected);`로 명세의 개수·값·순서를 대조한다. 화면의 expected는 위 기대 vector이며, 전체 선언은 Notes에 있다.

주제는 assertion의 개수를 늘리는 것이 아니라 명세 위반을 구별하는 조건을 쓰는 것이다. vector equality 자체가 길이도 비교하므로 size 행은 폭 명세를 따로 보여주는 교육상 중복이다. 한 입력의 기대값 비교가 모든 입력·플랫폼의 정확성을 보장하지 않는다.

## Code / Evidence Boundary

이 vector는 기존 Python crop 사례의 한 행을 C++로 재표현한 **교육용 도식**이다. 새 C++ 구현·실행·Trial·테스트 PASS/FAIL은 없다. 원본 Trial은 Python unittest이며 집중·전체 tests, CLI smoke, diff를 실제 확인했다. Benchmark는 미실행이다.

GoogleTest 테스트러너 assertion을 사용한다. 표준 C assert와 NDEBUG에 기대는 예시로 만들지 않았다. Notes의 맥락 코드:

```cpp
const std::vector<int> expected{2, 3};
// actual is the returned row being checked.
EXPECT_FALSE(actual.empty());   // only checks non-empty output
EXPECT_EQ(actual.size(), 2u);   // makes the width requirement explicit
EXPECT_EQ(actual, expected);    // compares size and ordered values
```

위 코드는 의미 비교용 fragment이며 이 단계에서 컴파일하거나 실행한 테스트가 아니다. 조건과 assertion의 의미는 [GoogleTest Primer](https://google.github.io/googletest/primer.html), vector 동등 비교는 [Microsoft vector operators](https://learn.microsoft.com/en-us/cpp/standard-library/vector-operators?view=msvc-170)의 공식 자료를 확인했다. 기존 [TRIAL-002](../../plan/DEMO_MATRIX.md)와 S05의 기대 열·폭을 유지한다.

## Presentation and Notes

좌측 표는 집중테스트—바뀐 동작·해당 조건, 전체테스트—현재 suite의 회귀 범위, smoke—샘플 통합 경로, diff—변경 범위, 성능측정—지정 입력·환경이라는 다섯 대응을 보존한다. 우측 vector·코드·설명은 편집 가능한 native text/shape다. 새로운 raster asset이나 Template family는 추가하지 않았다.

S20 완료 판단 → S21 검사 조건과 명세 위반 → S22 반복되는 검증 지침의 수명으로 연결한다. Lecture4분(소개30초/표2분/예시90초)과 Reflection1분을 유지했다. ACT1/Full Notes의 S21을 정렬하고 다른81개 레코드는 원문 보존했다.

## Final Artifacts

| File | Slides | SHA-256 |
|---|---:|---|
| production/AI_Dev_Training_Full.pptx | 82 | `5b4325dfa16cb401a2509ddc24a1788ba0893e219e9c6d86c469eb0cbdf63603` |
| production/ACT_1.pptx | 13 | `28d9b30788d9b8b15abb549bb7eccc958f3288cc52e3ff3f9046719fe24bf976` |

- Full Notes: `fbf9c7df6ac28fb1e3d0e46457f15c808d5ea0b944576d85276bdb8f40c19ca9`.
- Full montage: `7263db8be1234973e49f1b247b181afb91d310fdd07e087a24b1422bb031ce92`.

## Validation

| Check | Result / scope |
|---|---|
| Count / budgets | 82장/360분; ACT40/55/70/85/80/30; Mode130/73/83/20/22/32 유지 |
| S21 content | 기존 title/Core/role/evidence/claim/time 유지; 표5행·기대2/오류3·assertion3개 대조 |
| Remaining81 slides | XML 구조·연결 이미지·PNG bytes 동일 |
| Other ACT files | ACT0/2/3/4/5 PPTX bytes 동일 |
| Notes | 82레코드×19필드; Full/ACT Markdown 및 내장 Notes 일치 |
| Exact-file rendering | Full82 + ACT1 13 =95 PNG; Full/ACT1 13쌍 동일 |
| Visual review | S21 확대·독립 검토; 최종 PNG와 시안 bytes 동일; 새 잘림·겹침 없음 |
| Wording repair | 좌표3과 원소값4를 혼동하지 않도록 '제외할 값4'로 정렬 |
| Package / layout / font / import | 두 PPTX finding0, 지정글꼴 정책·first-party reimport 통과 |
| Native chart | S47 데이터 보존 |
| Fallback | 기존29개 PNG 경로·치수·hash 동일; source-PPT hash 갱신 |

지정글꼴 Malgun Gothic/Consolas를 유지했다. 로컬 Preview는 Apple SD Gothic Neo/Menlo 별칭을 사용하며, Windows·실제 발표 PC 글꼴·교육장·현재 제품/계정·실측 리허설은 **UNVERIFIED**다.

## Scope

Map/Template Mapping, DEC-0041, S21 Notes·source, 두 PPT·Preview, 현재 전달 안내·체크리스트·fallback source identity를 정렬했다. C++ Bridge는 기존 SUPPORTING 분류를 유지하며 우측 예시 공간을 사용자 지시로 허용했다. 과거 문서·Prototype·Decision, Demo Repository·State·Trial, 묶음 ZIP/HTML/manifest는 변경하지 않았다.

로컬 수정에서 남은 P0/P1 없음. **READY FOR USER REVIEW OF S21**.

[Machine-readable validation](S21_ASSERTION_SPEC_REVISION_VALIDATION.json).
