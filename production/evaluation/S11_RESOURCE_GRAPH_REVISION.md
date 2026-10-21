# S11 Resource Graph Image Revision

Date: 2026-10-21 (Asia/Seoul). Decision: DEC-0040. Baseline: `79fef49`.
Status: **COMPLETE — LOCAL PRODUCTION / ALIGNMENT**.

## Change

S11의 토큰 소모·작업 시간 우상향 곡선과 끝 화살표를 두 투명 PNG 이미지로 교체했다. 편집 가능한 곡선 객체2개와 화살표 문자2개를 제거했다. 기존 label, Prompt, Agent, 우측 세 질문, footer, 위치·내용은 유지한다.

[정확한 생성 프롬프트·방법·표현 경계](../../assets/slide-illustrations/S11_RESOURCE_GRAPH_SOURCES.md). built-in imagegen으로 생성했으며 CLI/API fallback은 사용하지 않았다. 생성 원본을 PNG 그대로 저장했다. 수치·단위·축 눈금·실측 데이터·기하급수 법칙은 추가하지 않았다. 비용이 커질 수 있다는 정성적 교육 삽화다.

| Image | Dimensions | SHA-256 |
|---|---:|---|
| assets/slide-illustrations/S11-token-growth.png | 2199×715 | `ffc791c203a2a7e5e3baab09d1fb1f175c2f71205489375381d81a830a7b3a5d` |
| assets/slide-illustrations/S11-time-growth.png | 2038×771 | `434356387439372adcb7bf78834b8842dbea5fb037267ce67fb0891065415063` |

## Final Artifacts

| File | Slides | SHA-256 |
|---|---:|---|
| production/AI_Dev_Training_Full.pptx | 82 | `d21a2759048632dc19aea8755a019215ce414958b37ce279d99515df0602f8e9` |
| production/ACT_1.pptx | 13 | `87d695cce0769278f1be1c02dda7702cb7bf0490f1522581344c277e4eea66bd` |

- Full Notes: `e6590b558b0ff2f64e046d17fb397cfb9eaafce8779f6d4db874cbdff51dcbb8`.
- Full montage: `a31576c3aebc43e3b5f3b8e9a8199a49c481b19ee075f6b575017a9e5b3b4bb6`.
- ACT1/Full S11 Notes에 새 이미지 출처와 정성 경계를 연결했다. 다른81개 Notes 레코드는 원문 동일하다.

## Validation

| Check | Result / scope |
|---|---|
| S11 image structure | 기존 Agent1 + 그래프 이미지2 = native picture3; native custom 곡선0 |
| S11 protected content | 그래프·화살표4객체 제외한 기존 native shape31개 구조·좌표·문구 동일 |
| Remaining81 slides | XML 구조·연결 이미지·PNG bytes 동일 |
| Other ACT files | ACT0/2/3/4/5 PPTX bytes 동일 |
| Notes | 82레코드×19필드; Full/ACT Markdown 및 두 새 PPT 내부 Notes 일치 |
| Exact-file rendering | Full82 + ACT1 13 =95 PNG; Full/ACT1 13쌍 동일 |
| Visual review | S11 확대·독립 검토; 최종 PNG와 검토 시안 bytes 동일; 새 잘림·겹침 없음 |
| Package / layout / font / import | 두 PPTX finding0, 지정글꼴 정책·first-party reimport 통과 |
| Budgets | 82장/360분, ACT40/55/70/85/80/30, Mode130/73/83/20/22/32 유지 |
| Claim boundary | TEACHING_MODEL/CONCEPTUAL; 실제 측정·실패·지수법칙 주장 없음 |
| Static fallback | 기존29개 PNG 경로·치수·hash 동일 확인; source-PPT hash 갱신 |

지정글꼴 Malgun Gothic/Consolas를 유지했다. 로컬 Preview는 Apple SD Gothic Neo/Menlo 별칭을 사용하며, Windows·실제 발표 PC 글꼴·교육장·현재 제품/계정·실측 리허설은 **UNVERIFIED**다.

## Scope and Remaining Items

Map의 S11 표현 지침, DEC-0040, S11 Notes·asset provenance·source, 두 PPT와 Preview, 현재 전달 안내·체크리스트·fallback source identity를 정렬했다. 기존 기록은 보존하며 발표용 묶음 ZIP/HTML/manifest와 Demo Repository·State·Trial은 변경하지 않았다. 로컬 수정에서 남은 P0/P1 없음.

**READY FOR USER REVIEW OF S11**.

[Machine-readable validation](S11_RESOURCE_GRAPH_REVISION_VALIDATION.json).
