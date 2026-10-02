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
- `FORM_URL`, `FORM_ENTRIES`, 서비스별 `form`: 투표 페이지 안의 설문을 구글 폼에 직접 제출하기 위한 연결 정보

### ⚠️ 구글 폼 수정 시 주의

투표 페이지는 구글 폼 화면을 거치지 않고 응답을 직접 제출합니다. 이 방식은 제출이 실패해도 페이지가 알 수 없습니다.

- 폼 문항을 추가·삭제·수정하거나 선택지 문구를 바꾸면 응답이 **조용히 누락**될 수 있습니다.
- 폼을 고쳤다면 반드시 투표 페이지에서 테스트 제출 → 응답 시트에 들어오는지 확인하세요.
- 테스트 후에는 응답 시트에서 테스트 행을 지우고, 브라우저의 "확인 기록"은 시크릿 창으로 새로 테스트하면 됩니다.

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
