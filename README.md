# Zero Demo Day 대중투표 페이지

GDGoC KNU Zero Demo Day People's Choice 투표 랜딩 페이지 (정적 사이트, 빌드 없음).

## 파일 구조

```
index.html     페이지 본체 (레이아웃·동작)
services.js    운영진 수정 영역: SERVICES, FORM_URL, ORDER_ENTRY
images/        대표 이미지 (16:9 권장)
.nojekyll      GitHub Pages가 Jekyll 처리 없이 그대로 서빙하도록
```

## 운영진이 바꿀 것

모두 `services.js`에 있습니다.

- `videoUrl` / `tryUrl`: 서비스별 시연영상(유튜브 일부공개)·체험 링크
- `thumb`: 대표 이미지 경로. `images/lecture.png`, `images/library.png`에 파일을 넣으면 표시되고, 파일이 없으면 기본 일러스트가 나옵니다. 다른 파일명·확장자(jpg, webp 등)를 쓰면 경로만 바꿔주세요.
- `FORM_URL`: 구글 폼 사전 입력 링크의 `…/viewform`까지
- `ORDER_ENTRY`: 사전 입력 링크에서 '본 순서' 문항의 `entry.XXXX`

## GitHub Pages 배포

먼저 github.com에서 **New repository**로 빈 레포를 만듭니다. (Public, README 추가 체크 해제 — 무료 계정은 Public 레포에서만 Pages 사용 가능)

그다음 이 폴더에서:

```bash
git add .
git commit -m "Zero Demo Day 투표 페이지"
git remote add origin https://github.com/<계정>/<저장소>.git
git push -u origin main
```

GitHub 저장소 → **Settings → Pages** → Source: **Deploy from a branch**, Branch: **main** / **(root)** → Save.
1~2분 뒤 `https://<계정>.github.io/<저장소>/` 에서 열립니다.

수정 후에는 다시 commit·push 하면 자동으로 반영됩니다. (브라우저 캐시로 바로 안 보이면 새로고침)

## 로컬 미리보기

`index.html`을 브라우저로 바로 열어도 동작합니다.
