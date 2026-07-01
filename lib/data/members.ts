export type Member = {
  id: string;

  name: string;
  nameEn: string;

  role: string;

  wave: string;

  color: string;

  quote: string;

  keywords: string[];

  story: string;

  birthday: string;
  nationality: string;

  profileImage: string;
  images: string[];
};

export const members: Member[] = [
  
  {
  id: "junseo",

  name: "강준서",
  nameEn: "JUNSEO",

  role: "Main Dancer",

  wave: "CURRENT WAVE",

  color: "#163D73",

  quote: "흐름은 멈추지 않는다.",

  keywords: [
    "해류",
    "속도",
    "움직임",
  ],

  story: `
CURRENT WAVE를 상징하는 존재.

끊임없이 변화하는 해류처럼
누구보다 자유로운 움직임을 가진 메인댄서.

BLUEWAVE의 막내이지만
가장 먼저 앞으로 나아가며
팀의 흐름을 만들어간다.
`,

  birthday: "2004.05.17",

  nationality: "Korea",

  profileImage: "/images/junseo_profile.png",

  images: [
    "/images/junseo.png",
    "/images/junseo1.png",
    "/images/junseo2.png",
    "/images/junseo3.png",
    "/images/junseo4.png",
  ],
},
{
  id: "ian",

  name: "백이안",
  nameEn: "IAN",

  role: "Leader · Lead Vocal",

  wave: "STORM WAVE",

  color: "#6F4CFF",

  quote: "폭풍은 두려움이 아니라 변화의 시작이다.",

  keywords: [
    "폭풍",
    "번개",
    "깊은 밤바다",
  ],

  story: `
STORM WAVE를 상징하는 존재.

폭풍은 언제나
고요한 바다에서 시작된다.

깊은 감정을 품은 채
BLUEWAVE를 이끄는 리더.

그의 노래는
폭풍을 희망으로 바꾼다.
`,

  birthday: "2002.07.22",

  nationality: "Korea",

  profileImage: "/images/ian_profile.png",

  images: [
    "/images/ian.png",
    "/images/ian1.png",
    "/images/ian2.png",
    "/images/ian3.png",
    "/images/ian4.png",
  ],
},
  {
  id: "yeoul",

  name: "한여울",
  nameEn: "YEOUL",

  role: "Main Rapper",

  wave: "MOON TIDE",

  color: "#C8CDD8",

  quote: "달은 말없이 바다를 움직인다.",

  keywords: [
    "달",
    "밀물",
    "썰물",
  ],

  story: `
MOON TIDE를 상징하는 존재.

달빛 아래
밀물과 썰물이 반복되듯

감정을 이어주는 래퍼.

잊혀진 기억을
노래로 되돌린다.
`,

  birthday: "2003.01.08",

  nationality: "Korea",

  profileImage: "/images/yeoul_profile.png",

  images: [
    "/images/yeoul.png",
    "/images/yeoul1.png",
    "/images/yeoul2.png",
    "/images/yeoul3.png",
    "/images/yeoul4.png",
  ],
},
  {
  id: "haewon",

  name: "명해원",
  nameEn: "HAEWON",

  role: "Main Vocal",

  wave: "SUNRISE WAVE",

  color: "#E7B63B",

  quote: "새벽은 가장 어두운 바다에서 시작된다.",

  keywords: [
    "새벽",
    "햇살",
    "수평선",
  ],

  story: `
SUNRISE WAVE를 상징하는 존재.

새벽의 첫 햇살처럼

희망을 노래하는 메인보컬.

그의 목소리는
BLUEWAVE의 중심이 된다.
`,

  birthday: "2003.11.30",

  nationality: "Korea",

  profileImage: "/images/haewon_profile.png",

  images: [
    "/images/haewon.png",
    "/images/haewon1.png",
    "/images/haewon2.png",
    "/images/haewon3.png",
    "/images/haewon4.png",
  ],
},
 {
  id: "mio",

  name: "아사쿠라 미오",
  nameEn: "MIO",

  role: "Sub Vocal",

  wave: "HEALING VOICE",

  color: "#FF8FC8",

  quote: "가장 잔잔한 파도가 가장 깊은 위로를 전한다.",

  keywords: [
    "산호",
    "벚꽃",
    "잔잔한 바다",
  ],

  story: `
HEALING VOICE를 상징하는 존재.

잔잔한 바다처럼
상처를 감싸안는 목소리.

치유는
가장 조용한 파도에서 시작된다.
`,

  birthday: "2004.05.17",

  nationality: "Japan",

  profileImage: "/images/mio_profile.png",

  images: [
    "/images/mio.png",
    "/images/mio1.png",
    "/images/mio2.png",
    "/images/mio3.png",
    "/images/mio4.png",
  ],
},
];

export function getMemberById(id: string): Member | undefined {
  return members.find((m) => m.id === id);
}
