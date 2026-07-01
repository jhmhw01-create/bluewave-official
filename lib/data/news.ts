export type NewsArticle = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: "release" | "event" | "media" | "notice";
  featured?: boolean;
};

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "BLUEWAVE, 1st Mini Album 'DEEP BLUE' 발매",
    excerpt:
      "다섯 개의 파도가 하나의 바다가 되는 순간. BLUEWAVE의 첫 미니 앨범 'DEEP BLUE'가 전 세계 동시 발매됩니다.",
    date: "2026.06.15",
    category: "release",
    featured: true,
  },
  {
    id: "2",
    title: "공식 팬클럽 'WAVES' 1기 모집 시작",
    excerpt:
      "BLUEWAVE와 함께하는 공식 팬클럽 WAVES 1기 멤버를 모집합니다. 특별한 혜택과 한정 굿즈를 만나보세요.",
    date: "2026.05.28",
    category: "event",
    featured: true,
  },
  {
    id: "3",
    title: "공식 응원봉 'Ocean Light' 공개",
    excerpt:
      "바다의 깊이를 담은 BLUEWAVE 공식 응원봉 'Ocean Light'가 드디어 공개됩니다. 5가지 멤버 컬러 연동 지원.",
    date: "2026.05.10",
    category: "notice",
  },
  {
    id: "4",
    title: "M COUNTDOWN 데뷔 무대 비하인드",
    excerpt:
      "데뷔 무대를 마친 BLUEWAVE 멤버들의 뜨거웠던 순간들. 무대 뒤에서 펼쳐진 진솔한 이야기를 전합니다.",
    date: "2026.04.22",
    category: "media",
  },
  {
    id: "5",
    title: "BLUEWAVE UNIVERSE 'The Tide' 세계관 공개",
    excerpt:
      "5개의 섬, 5명의 파도. BLUEWAVE만의 독창적인 세계관 'The Tide'의 첫 번째 챕터가 공개됩니다.",
    date: "2026.04.01",
    category: "notice",
  },
  {
    id: "6",
    title: "첫 팬사인회 'Meet the Wave' 개최",
    excerpt:
      "BLUEWAVE와 WAVES가 처음으로 만나는 특별한 자리. 서울, 도쿄, LA에서 팬사인회가 개최됩니다.",
    date: "2026.03.18",
    category: "event",
  },
];

export const newsCategories = [
  { id: "all", label: "ALL" },
  { id: "release", label: "RELEASE" },
  { id: "event", label: "EVENT" },
  { id: "media", label: "MEDIA" },
  { id: "notice", label: "NOTICE" },
] as const;
