/* =========================================================
   운영진 수정 영역 — 이 파일만 고치면 됩니다
   - videoUrl: 유튜브 일부공개 링크
   - tryUrl: 체험 링크
   - thumb: 대표 이미지 경로 (images/ 폴더 기준, 16:9, 1600×900 권장)
            파일이 없거나 비워두면 기본 일러스트가 표시됨
   - form: 구글 폼 문항과의 연결 정보 (아래 주의 참고)

   [구글 폼 주의]
   투표 페이지가 구글 폼에 직접 제출합니다. 폼 문항을 추가/삭제/수정하면
   entry 번호가 바뀌어 응답이 조용히 누락될 수 있으니, 폼을 고쳤다면
   반드시 테스트 제출 후 응답 시트에 들어오는지 확인하세요.
   선택지 문구(예/아니오, 직접 써봤다 등)도 폼과 글자 하나까지 같아야 합니다.
   ========================================================= */
const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSc_u7RWYYy1E-CVuaOZYjR11x_BagLD4rp0z7AaMQV3uPs6sg/viewform";
const FORM_ENTRIES = {
  studentId: "entry.1608341470",   // 학번
  pick: "entry.1856759437",        // 둘 중 하나만 남긴다면?
  reason: "entry.1121295101"       // 그렇게 고른 이유
};

const SERVICES = [
  {
    id: "lecture",
    name: "온라인 강의 자동재생",
    team: "Zero 1팀",
    color: "#4285F4", ink: "#1A73E8",
    thumb: "images/lecture.png",
    oneline: "다음 강의를 누르러 돌아올 필요 없이, 끝까지 알아서 이어 듣는 강의 도우미",
    before: "강의 하나가 끝날 때마다 화면으로 돌아와 다음 차시를 직접 눌러야 함",
    after: "한 번 켜두면 남은 차시가 순서대로 자동 재생되고 수강 완료까지 처리됨",
    feature: "남은 강의 자동 이어재생",
    mission: "샌드박스 강의 페이지에서 자동재생을 켜고 다음 차시로 넘어가는지 확인해보세요.",
    videoUrl: "",
    tryUrl: "",
    form: {
      pickLabel: "온라인 강의 자동재생",  // '둘 중 하나만 남긴다면?' 선택지 문구
      how: "entry.1999191847",          // 이 서비스를 어떻게 확인했나요?
      felt: "entry.2023958700",         // 최근 한 달 안에 직접 겪어봤나요?
      reuse: "entry.1752264830",        // 다시 쓸 것 같다 (1~5)
      better: "entry.889074920"         // 기존 방식보다 확실히 나아졌다 (1~5)
    }
  },
  {
    id: "library",
    name: "도서관 빈자리 알림",
    team: "Zero 2팀",
    color: "#34A853", ink: "#188038",
    thumb: "images/library.png",
    oneline: "열람실을 돌아다니지 않아도, 자리가 나면 먼저 알려주는 알림 서비스",
    before: "빈자리를 찾으러 열람실을 직접 돌아다니거나 좌석 현황을 계속 새로고침함",
    after: "원하는 열람실을 등록해두면 자리가 날 때 알림을 받고 바로 이동함",
    feature: "열람실 빈자리 알림 등록",
    mission: "알림 받을 열람실을 등록하고, 빈자리 알림을 받아보세요. (가상 데이터로 작동)",
    videoUrl: "",
    tryUrl: "",
    form: {
      pickLabel: "도서관",
      how: "entry.1373647333",
      felt: "entry.1088831712",
      reuse: "entry.1785873018",
      better: "entry.1717739118"
    }
  }
];
