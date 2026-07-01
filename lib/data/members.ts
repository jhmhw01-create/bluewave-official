export type Member = {
  id: string;
  name: string;
  nameEn: string;
  role: string;
  position: string;
  color: string;
  profileImage: string;
  images: string[];
  bio: string;
  birthday: string;
  nationality: string;
};

export const members: Member[] = [
  {
    id: "junseo",
    name: "강준서",
    nameEn: "JUNSEO",
    role: "Leader · Main Vocal",
    position: "파도의 중심",
    color: "#4FC3F7",
    profileImage: "/images/junseo_profile.png",
    images: [
      "/images/junseo.png",
      "/images/junseo1.png",
      "/images/junseo2.png",
      "/images/junseo3.png",
      "/images/junseo4.png",
    ],
    bio: "깊은 바다처럼 차분하지만, 무대 위에서는 거대한 파도가 되는 리더. BLUEWAVE의 음악적 방향을 이끈다.",
    birthday: "2001.03.14",
    nationality: "Korea",
  },
  {
    id: "ian",
    name: "백이안",
    nameEn: "IAN",
    role: "Main Dancer · Rapper",
    position: "자유로운 해류",
    color: "#9B7CFF",
    profileImage: "/images/ian_profile.png",
    images: [
      "/images/ian.png",
      "/images/ian1.png",
      "/images/ian2.png",
      "/images/ian3.png",
      "/images/ian4.png",
    ],
    bio: "유연한 움직임과 날카로운 랩으로 무대를 지배하는 퍼포머. 바다의 모든 흐름을 몸으로 표현한다.",
    birthday: "2002.07.22",
    nationality: "Korea",
  },
  {
    id: "yeoul",
    name: "한여울",
    nameEn: "YEOUL",
    role: "Visual · Sub Vocal",
    position: "고요한 달빛",
    color: "#E8E8E8",
    profileImage: "/images/yeoul_profile.png",
    images: [
      "/images/yeoul.png",
      "/images/yeoul1.png",
      "/images/yeoul2.png",
      "/images/yeoul3.png",
      "/images/yeoul4.png",
    ],
    bio: "잔잔한 파도 위에 비치는 달빛 같은 존재. 섬세한 보컬과 몽환적인 분위기로 팬들을 사로잡는다.",
    birthday: "2003.01.08",
    nationality: "Korea",
  },
  {
    id: "haewon",
    name: "명해원",
    nameEn: "HAEWON",
    role: "Lead Vocal",
    position: "빛나는 산호",
    color: "#FFD66B",
    profileImage: "/images/haewon_profile.png",
    images: [
      "/images/haewon.png",
      "/images/haewon1.png",
      "/images/haewon2.png",
      "/images/haewon3.png",
      "/images/haewon4.png",
    ],
    bio: "따뜻하고 풍부한 음색으로 BLUEWAVE의 감성을 완성하는 보컬리스트. 바다 깊은 곳의 보물 같은 목소리.",
    birthday: "2003.11.30",
    nationality: "Korea",
  },
  {
    id: "mio",
    name: "아사쿠라 미오",
    nameEn: "MIO",
    role: "Maknae · Rapper",
    position: "트로피컬 브리즈",
    color: "#FF8FD8",
    profileImage: "/images/mio_profile.png",
    images: [
      "/images/mio.png",
      "/images/mio1.png",
      "/images/mio2.png",
      "/images/mio3.png",
      "/images/mio4.png",
    ],
    bio: "에너지 넘치는 랩과 밝은 에너지로 팀에 활력을 불어넣는 막내. 열대 바다의 상큼한 바람.",
    birthday: "2004.05.17",
    nationality: "Japan",
  },
];

export function getMemberById(id: string): Member | undefined {
  return members.find((m) => m.id === id);
}
