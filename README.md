# hannahkoo.github.io (personal site)

Plain HTML/CSS/JS, no build step. Free to host on GitHub Pages.

## Structure
```
index.html        Home
about.html         About + resume
portfolio.html     Work / case studies
contact.html       Contact
blog.html          Blog index
blog/first-post.html   Blog post template — copy this file for each new post
css/style.css      전체 디자인 시스템 (색/타입/레이아웃 토큰은 :root 변수)
js/main.js         모바일 네비 토글
assets/            profile.jpg, hero-bg.mp4(메인 배경영상), hero-poster.jpg 등
                   * 메인(index.html)은 OS 설정과 무관하게 항상 블랙배경/화이트글씨
                   * 배경영상 바꾸려면 assets/hero-bg.mp4 교체 (+ 포스터 첫프레임도)

## 폰트
- 사이트 전체: Lexend Deca(헤드라인/메뉴) + Inter(본문), 구글폰트
- 메인 헤드라인만: Geist Pixel(픽셀체) + Yarndings 12(심볼 W/e/u)
  * 심볼 색은 css/style.css 의 .hero-headline .sym-1/2/3 (형광 하늘/연두/노랑)
  * 크기 안 맞으면 .hero-headline 의 font-size clamp 최대값(57px)만 조절
```

## Deploy to GitHub Pages
1. 새 레포 만들기 (예: `hannahkoo.github.io` — 계정명과 똑같이 지으면 루트 도메인으로 바로 뜸.
   다른 이름이면 `https://<username>.github.io/<repo>/` 경로로 뜸)
2. 이 폴더 전체를 레포에 push
3. GitHub repo → Settings → Pages → Source를 `main` 브랜치 `/ (root)`로 설정
4. 몇 분 뒤 `https://<username>.github.io` (또는 `/<repo>/`)에서 확인

## 채워 넣어야 할 것들 (검색: `EDIT`)
- `index.html` — 히어로 문구, 프로젝트 2/3
- `about.html` — 회사명, 경력 타임라인, 이력서 PDF
- `portfolio.html` — 프로젝트 2/3 상세, 스크린샷/GIF
- `contact.html` — LinkedIn 링크
- `blog.html` / `blog/first-post.html` — 실제 글

전체 파일에서 `hello@example.com` 도 실제 이메일로 바꿔줘.

## 커스터마이징
색/폰트/여백은 전부 `css/style.css` 맨 위 `:root` 변수에서 관리돼.
`--accent` 하나만 바꿔도 버튼/링크/네비 밑줄 색이 전부 같이 바뀜.
