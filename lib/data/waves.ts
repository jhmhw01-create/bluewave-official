export type WaveTheme = {
  id: string;
  name: string;

  color: string;
  glow: string;

  gradient: string;

  particle: string;

  quoteColor: string;

  background: string;
};

export const waveThemes: Record<string, WaveTheme> = {
  "CURRENT WAVE": {
    id: "current",

    name: "CURRENT WAVE",

    color: "#163D73",

    glow: "#4FC3F7",

    gradient:
      "from-[#07182D] via-[#0B2E53] to-[#163D73]",

    particle: "current",

    quoteColor: "#7DD3FC",

    background: "ocean",
  },

  "STORM WAVE": {
    id: "storm",

    name: "STORM WAVE",

    color: "#6F4CFF",

    glow: "#9F7AEA",

    gradient:
      "from-[#130B25] via-[#2B1A52] to-[#5A3FCF]",

    particle: "storm",

    quoteColor: "#C4B5FD",

    background: "storm",
  },

  "MOON TIDE": {
    id: "moon",

    name: "MOON TIDE",

    color: "#C8CDD8",

    glow: "#F5F7FA",

    gradient:
      "from-[#101622] via-[#29364D] to-[#7C8798]",

    particle: "moon",

    quoteColor: "#E5E7EB",

    background: "moon",
  },

  "SUNRISE WAVE": {
    id: "sunrise",

    name: "SUNRISE WAVE",

    color: "#E7B63B",

    glow: "#FFD86A",

    gradient:
      "from-[#2C1B00] via-[#7C4A00] to-[#E7B63B]",

    particle: "sunrise",

    quoteColor: "#FFE8A3",

    background: "sunrise",
  },

  "HEALING VOICE": {
    id: "healing",

    name: "HEALING VOICE",

    color: "#FF8FC8",

    glow: "#FFC2E2",

    gradient:
      "from-[#2D1020] via-[#5D2242] to-[#FF8FC8]",

    particle: "petal",

    quoteColor: "#FFD6EA",

    background: "healing",
  },
};