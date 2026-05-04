# REN STUDIO Landing Page

정적 HTML/CSS/JS로 구성한 REN STUDIO 공식 랜딩페이지입니다.

## 파일 구조

- `index.html`: 페이지 섹션, SEO 메타태그, 콘텐츠 문구
- `styles.css`: 디자인 토큰, 반응형 레이아웃, 카드/폼 스타일
- `script.js`: 모바일 메뉴, 헤더 상태, 문의 폼 mailto 동작
- `assets/ren-studio-logo.png`: 제공 로고 이미지

## 수정 포인트

- 문의 수신 이메일은 `script.js`의 `CONTACT_EMAIL`과 `index.html`의 이메일 링크를 함께 변경합니다.
- Creators / Crew Partners 카드의 프로필, 장르, 소개 문구, SNS 링크는 `index.html` 안의 각 카드에서 수정합니다.
- 포인트 컬러는 `styles.css`의 `:root` 안 `--accent` 값으로 관리합니다.

## 실행

별도 빌드 과정 없이 `index.html`을 브라우저에서 열면 됩니다.
