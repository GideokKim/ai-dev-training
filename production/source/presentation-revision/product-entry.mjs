/** Approved new S08 and renumbered S09; use bounded product documentation. */
import fs from 'node:fs/promises';
import path from 'node:path';
import * as H from './helpers.mjs';

export async function loadProductEntrySlides(root) {
  const roleIcons = new Uint8Array(await fs.readFile(path.join(root, 'assets/slide-illustrations/human-agent-icons.png')));
  const {C, FONT, text, rect, line, arrow} = H;
  const icon = (s, role, x, y, size = 88) => s.images.add({
    blob: roleIcons, contentType: 'image/png', fit: 'contain',
    alt: role === 'human' ? 'Human role teaching pictogram' : 'AI agent role teaching pictogram',
    position: {left: x, top: y, width: size, height: size},
    crop: {left: role === 'human' ? 0 : 0.5, right: role === 'human' ? 0.5 : 0, top: 0, bottom: 0}
  });
  return {
    S08(p) {
      const s = H.frame(p, 'S08', 'Repository 작업은 Codex에서 시작한다',
        'ACT 0 · ChatGPT 데스크톱 앱의 진입 경로',
        'OpenAI Quickstart · 공식 문서 2026-10-21 확인 · 앱 전환 메뉴 재구성',
        '교육용 도식입니다. 앱 버전·계정별 표시와 접근 권한은 발표 환경에서 확인합니다.',
        'RESEARCH / TEACHING_MODEL');
      text(s, '앱 좌측 상단에서 ChatGPT → Codex 선택', 64, 173, 1152, 42, 31, C.teal, true);
      rect(s, 64, 246, 456, 61, C.white, C.line, 2);
      text(s, 'ChatGPT', 88, 258, 340, 37, 30, C.ink, true);
      text(s, '▾', 448, 258, 48, 37, 29, C.sub, false, FONT, 'center');
      rect(s, 64, 315, 456, 150, C.white, C.line, 2);
      text(s, 'ChatGPT', 88, 328, 384, 45, 29, C.sub);
      rect(s, 74, 385, 436, 64, C.pale);
      text(s, 'Codex', 88, 394, 352, 44, 32, C.teal, true);
      text(s, '✓', 454, 395, 42, 42, 30, C.teal, true, FONT, 'center');
      text(s, '전환 메뉴 재구성', 64, 485, 456, 32, 23, C.sub);
      arrow(s, 551, 353, 61, 29);
      const steps = [
        ['01', 'Codex 선택', '개발 작업으로 전환'],
        ['02', 'Repository 폴더 열기', '코드가 있는 폴더를 작업 위치로'],
        ['03', '수정 전에 조사부터 요청', '찾은 파일과 근거를 함께 확인']
      ];
      steps.forEach(([number, title, body], i) => {
        const y = 239 + i * 93;
        text(s, number, 654, y + 2, 60, 34, 23, C.teal, true);
        text(s, title, 728, y, 488, 40, 29, C.ink, true);
        text(s, body, 728, y + 43, 488, 31, 24, C.sub);
      });
      text(s, '이 교육의 Repository 조사는 Codex로 진행한다.', 64, 554, 1152, 41, 31, C.teal, true);
      return s;
    },
    S09(p) {
      const s = H.frame(p, 'S09', 'Repository 접근과 Task 의도는 별개다',
        'ACT 0 · 누가 볼 수 있고, 누가 정하는가',
        '이 과정의 교육 모델 · 정보 접근과 최종 결정 책임의 구분 · AI 생성 역할 아이콘',
        'Agent는 조사·제안을 할 수 있습니다. 목표·허용 범위·완료 수용의 최종 결정과 책임은 사람에게 있습니다.',
        'TEACHING_MODEL');
      text(s, '볼 수 있는 것', 64, 198, 520, 44, 32, C.teal, true);
      text(s, '정해야 하는 것', 754, 198, 462, 44, 32, C.teal, true);
      icon(s, 'human', 64, 263, 88);
      text(s, '사람', 158, 285, 90, 37, 28, C.ink, true);
      text(s, '+', 249, 282, 38, 42, 33, C.sub, false, FONT, 'center');
      icon(s, 'agent', 290, 263, 88);
      text(s, 'AI Agent', 389, 285, 195, 37, 28, C.ink, true);
      icon(s, 'human', 754, 263, 88);
      text(s, '사람이 최종 결정', 858, 285, 358, 37, 29, C.teal, true);
      line(s, 64, 367, 520, C.line, 2);
      line(s, 754, 367, 462, C.line, 2);
      text(s, '파일\n구현\n테스트', 64, 398, 520, 150, 35, C.ink);
      text(s, '원하는 결과\n허용할 범위\n완료 수용', 754, 398, 462, 150, 35, C.ink);
      text(s, '≠', 610, 410, 102, 96, 64, C.teal, true, FONT, 'center');
      text(s, 'Agent는 제안하고, 사람은 최종 선택·승인한다.', 64, 563, 1152, 35, 28, C.teal, true);
      return s;
    }
  };
}
