/* =========================================================
   운영진 수정 영역 — 이 파일만 고치면 됩니다
   - videoUrl: 유튜브 일부공개 링크
   - tryUrl: 체험 링크
   - thumb: 대표 이미지 경로 (images/ 폴더 기준, 16:9 권장)
            파일이 없거나 비워두면 기본 일러스트가 표시됨
   - FORM_URL: 구글 폼 "사전 입력 링크"의 앞부분 (…/viewform)
   - ORDER_ENTRY: 사전 입력 링크에서 '본 순서' 문항의 entry 번호
   ========================================================= */
const FORM_URL = "";               // 예: "https://docs.google.com/forms/d/e/XXXX/viewform"
const ORDER_ENTRY = "";            // 예: "entry.123456789"

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
    tryUrl: ""
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
    tryUrl: ""
  }
];
