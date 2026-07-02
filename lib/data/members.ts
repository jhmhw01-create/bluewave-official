export type Member = {
  id: string;

  name: string;
  nameEn: string;

  wave: string;

  role: string;

  position: string;

  color: string;

  quote: string;

  story: string;

  keywords: string[];

  profileImage: string;

  images: string[];

  birthday: string;

  nationality: string;
};

export const members: Member[] = [
  {
    id: "junseo",

    name: "강준서",

    nameEn: "JUNSEO",

    wave: "CURRENT WAVE",

    role: "Main Dancer",

    position: "해류의 시작",

    color: "#163D73",

    quote: "흐름은 멈추지 않는다.",

    story:
      "CURRENT WAVE는 모든 파도의 시작이다.\n\n강준서는 누구보다 빠르게 흐르고, 누구보다 자유롭게 움직인다.\n\n멈추지 않는 해류처럼 그는 언제나 새로운 방향을 만들어낸다.\n\nBLUEWAVE의 가장 어린 막내이지만, 무대 위에서는 누구보다 강렬한 움직임으로 시선을 사로잡는다.",

    keywords: [
      "해류",
      "속도",
      "움직임",
    ],

    profileImage: "/images/junseo_profile.png",

    images: [
      "/images/junseo.png",
      "/images/junseo1.png",
      "/images/junseo2.png",
      "/images/junseo3.png",
      "/images/junseo4.png",
    ],

    birthday: "2004.05.17",

    nationality: "Korea",
  },

  {
    id: "ian",

    name: "백이안",

    nameEn: "IAN",

    wave: "STORM WAVE",

    role: "Leader · Lead Vocal",

    position: "폭풍의 심장",

    color: "#8A63FF",

    quote: "폭풍은 두려움이 아니라 변화의 시작이다.",

    story:
      "STORM WAVE는 거친 바다를 상징한다.\n\n백이안은 가장 깊은 밤바다 속에서도 길을 잃지 않는 등대 같은 존재다.\n\n폭풍과 번개는 두려움이 아니라 앞으로 나아가기 위한 힘이며, 그는 팀 전체를 하나로 이끄는 리더이다.",

    keywords: [
      "폭풍",
      "번개",
      "깊은 밤바다",
    ],

    profileImage: "/images/ian_profile.png",

    images: [
      "/images/ian.png",
      "/images/ian1.png",
      "/images/ian2.png",
      "/images/ian3.png",
      "/images/ian4.png",
    ],

    birthday: "2002.07.22",

    nationality: "Korea",
  },
   {
    id: "yeoul",

    name: "한여울",

    nameEn: "YEOUL",

    wave: "MOON TIDE",

    role: "Main Rapper",

    position: "달이 이끄는 밀물",

    color: "#C9CEDB",

    quote: "달빛은 가장 조용한 파도를 만든다.",

    story:
      "MOON TIDE는 달의 인력으로 움직이는 바다를 의미한다.\n\n한여울은 겉으로는 고요하지만, 누구보다 강한 흐름을 품고 있다.\n\n그의 랩은 잔잔한 수면 아래 숨어 있는 거대한 조류처럼 깊은 울림을 전한다.",

    keywords: [
      "달",
      "밀물",
      "썰물",
    ],

    profileImage: "/images/yeoul_profile.png",

    images: [
      "/images/yeoul.png",
      "/images/yeoul1.png",
      "/images/yeoul2.png",
      "/images/yeoul3.png",
      "/images/yeoul4.png",
    ],

    birthday: "2003.01.08",

    nationality: "Korea",
  },

  {
    id: "haewon",

    name: "명해원",

    nameEn: "HAEWON",

    wave: "SUNRISE WAVE",

    role: "Main Vocal",

    position: "새벽을 비추는 중심",

    color: "#F6C24A",

    quote: "새로운 파도는 언제나 가장 먼저 빛을 만난다.",

    story:
      "SUNRISE WAVE는 어둠을 지나 가장 먼저 떠오르는 빛이다.\n\n명해원은 BLUEWAVE의 중심을 잡아주는 메인보컬이다.\n\n따뜻한 음색은 새벽 수평선처럼 팀 전체를 하나의 흐름으로 이어 준다.",

    keywords: [
      "새벽",
      "햇살",
      "수평선",
    ],

    profileImage: "/images/haewon_profile.png",

    images: [
      "/images/haewon.png",
      "/images/haewon1.png",
      "/images/haewon2.png",
      "/images/haewon3.png",
      "/images/haewon4.png",
    ],

    birthday: "2003.11.30",

    nationality: "Korea",
  },

  {
    id: "mio",

    name: "아사쿠라 미오",

    nameEn: "MIO",

    wave: "HEALING VOICE",

    role: "Sub Vocal",

    position: "바다를 치유하는 노래",

    color: "#FF9CCD",

    quote: "잔잔한 바다는 가장 오래 마음에 남는다.",

    story:
      "HEALING VOICE는 파도가 지나간 뒤 찾아오는 평온함이다.\n\n미오는 따뜻한 미소와 맑은 목소리로 팀에 안정감을 더한다.\n\n산호와 벚꽃이 흩날리는 바다처럼, 그녀의 노래는 마음을 천천히 물들인다.",

    keywords: [
      "산호",
      "벚꽃",
      "잔잔한 바다",
    ],

    profileImage: "/images/mio_profile.png",

    images: [
      "/images/mio.png",
      "/images/mio1.png",
      "/images/mio2.png",
      "/images/mio3.png",
      "/images/mio4.png",
    ],

    birthday: "2004.05.17",

    nationality: "Japan",
  },
];

export function getMemberById(id: string): Member | undefined {
  return members.find((member) => member.id === id);
}