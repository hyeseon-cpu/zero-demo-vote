/* =========================================================
   운영진 수정 영역 — 이 파일만 고치면 됩니다
   - videoUrl: 유튜브 일부공개 링크
   - tryUrl: 체험 링크
   - thumb: 대표 이미지 경로 (images/ 폴더 기준, 16:9, 1600×900 권장)
   - id: 내부 식별자 (바꾸면 참가자들의 확인 기록이 초기화되니 그대로 두세요)
            파일이 없거나 비워두면 기본 일러스트가 표시됨
   - form: 구글 폼 문항과의 연결 정보 (아래 주의 참고)

   [구글 폼 주의]
   투표 페이지가 구글 폼에 직접 제출합니다. 폼 문항을 추가/삭제/수정하면
   entry 번호가 바뀌어 응답이 조용히 누락될 수 있으니, 폼을 고쳤다면
   반드시 테스트 제출 후 응답 시트에 들어오는지 확인하세요.
   선택지 문구(예/아니오, 직접 체험 등)도 폼과 글자 하나까지 같아야 합니다.
   ========================================================= */
const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSc_u7RWYYy1E-CVuaOZYjR11x_BagLD4rp0z7AaMQV3uPs6sg/viewform";
const FORM_ENTRIES = {
  studentId: "entry.1608341470",   // 학번
  pick: "entry.1856759437",        // 둘 중 하나만 남긴다면?
  reason: "entry.1121295101",      // 그렇게 고른 이유
  feedback: "entry.1202539256",    // 아쉬운 점이나 개선 아이디어 (선택)
  phone: "entry.1727087053"        // 전화번호 - 이벤트 상품 전달용 (선택)
};

// 투표 마감 시각 (한국 시간). 이후에는 투표 버튼이 닫힘
const VOTE_DEADLINE = "2026-10-07T18:00:00+09:00";

const SERVICES = [
  {
    id: "lecture",
    name: "캐치캐치",
    team: "이러다 놓치겠어, catch, catch",
    color: "#2563EB", ink: "#1D4ED8",
    thumb: "images/catchcatch.jpg",
    oneline: "여러 온라인 강의를 자동으로 연속 재생하는 학습 보조 도구",
    before: "강의가 끝날 때마다 직접 다음 강의를 찾아 하나하나 재생해야 함",
    after: "2시간의 온라인 수업을 귀찮게 하는 클릭 10번이, 30초짜리 플리 생성으로 단축!",
    feature: "핸즈프리 온라인 강의 자동 재생",
    mission: "데모 사이트에서 직접 강의 두 개를 재생목록에 넣고, 자동 재생 해보기!",
    videoUrl: "https://youtu.be/_obet5gwXac",
    tryUrl: "https://catchcatch.ai.studio",
    form: {
      pickLabel: "온라인 강의 자동재생",  // '둘 중 하나만 남긴다면?' 선택지 문구
      how: "entry.1999191847",          // 이 서비스를 어떻게 확인했나요? (체크박스)
      felt: "entry.2023958700",         // 최근 한 달 안에 직접 겪어봤나요?
      reuse: "entry.1752264830",        // 다시 쓸 것 같다 (1~5)
      better: "entry.889074920"         // 기존 방식보다 확실히 나아졌다 (1~5)
    }
  },
  {
    id: "library",
    name: "Liverary",
    team: "Liverary",
    color: "#5B5BD6", ink: "#4747C2",
    thumb: "images/liverary.jpg",
    oneline: "도서관 자유석을 확인하고 공부 시간을 기록하는 서비스",
    before: "도서관 안을 돌아다니며 빈자리와 콘센트 있는 자리를 직접 찾아야 함",
    after: "배치도에서 빈자리와 콘센트 위치를 확인하고, 공부 시간도 함께 기록",
    feature: "자유석 위치·빈자리 확인",
    mission: "콘센트가 있는 빈자리를 찾아 이용해 보고, 종료 후 공부 기록을 확인해보기",
    videoUrl: "https://youtu.be/kJTjpnbBTJo",
    tryUrl: "https://liverary-demo.pages.dev/",
    form: {
      pickLabel: "도서관",
      how: "entry.1639756457",
      felt: "entry.1088831712",
      reuse: "entry.1785873018",
      better: "entry.1717739118"
    }
  }
];
