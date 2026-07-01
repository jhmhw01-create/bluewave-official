export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: "concept" | "performance" | "behind" | "profile";
  member?: string;
};

export const galleryItems: GalleryItem[] = [
  { id: "j1", src: "/images/junseo.png", alt: "JUNSEO Concept", category: "concept", member: "junseo" },
  { id: "j2", src: "/images/junseo1.png", alt: "JUNSEO Performance", category: "performance", member: "junseo" },
  { id: "j3", src: "/images/junseo2.png", alt: "JUNSEO Behind", category: "behind", member: "junseo" },
  { id: "j4", src: "/images/junseo3.png", alt: "JUNSEO Concept 2", category: "concept", member: "junseo" },
  { id: "j5", src: "/images/junseo4.png", alt: "JUNSEO Profile", category: "profile", member: "junseo" },
  { id: "i1", src: "/images/ian.png", alt: "IAN Concept", category: "concept", member: "ian" },
  { id: "i2", src: "/images/ian1.png", alt: "IAN Performance", category: "performance", member: "ian" },
  { id: "i3", src: "/images/ian2.png", alt: "IAN Behind", category: "behind", member: "ian" },
  { id: "i4", src: "/images/ian3.png", alt: "IAN Concept 2", category: "concept", member: "ian" },
  { id: "i5", src: "/images/ian4.png", alt: "IAN Profile", category: "profile", member: "ian" },
  { id: "y1", src: "/images/yeoul.png", alt: "YEOUL Concept", category: "concept", member: "yeoul" },
  { id: "y2", src: "/images/yeoul1.png", alt: "YEOUL Performance", category: "performance", member: "yeoul" },
  { id: "y3", src: "/images/yeoul2.png", alt: "YEOUL Behind", category: "behind", member: "yeoul" },
  { id: "y4", src: "/images/yeoul3.png", alt: "YEOUL Concept 2", category: "concept", member: "yeoul" },
  { id: "y5", src: "/images/yeoul4.png", alt: "YEOUL Profile", category: "profile", member: "yeoul" },
  { id: "h1", src: "/images/haewon.png", alt: "HAEWON Concept", category: "concept", member: "haewon" },
  { id: "h2", src: "/images/haewon1.png", alt: "HAEWON Performance", category: "performance", member: "haewon" },
  { id: "h3", src: "/images/haewon2.png", alt: "HAEWON Behind", category: "behind", member: "haewon" },
  { id: "h4", src: "/images/haewon3.png", alt: "HAEWON Concept 2", category: "concept", member: "haewon" },
  { id: "h5", src: "/images/haewon4.png", alt: "HAEWON Profile", category: "profile", member: "haewon" },
  { id: "m1", src: "/images/mio.png", alt: "MIO Concept", category: "concept", member: "mio" },
  { id: "m2", src: "/images/mio1.png", alt: "MIO Performance", category: "performance", member: "mio" },
  { id: "m3", src: "/images/mio2.png", alt: "MIO Behind", category: "behind", member: "mio" },
  { id: "m4", src: "/images/mio3.png", alt: "MIO Concept 2", category: "concept", member: "mio" },
  { id: "m5", src: "/images/mio4.png", alt: "MIO Profile", category: "profile", member: "mio" },
];

export const galleryCategories = [
  { id: "all", label: "ALL" },
  { id: "concept", label: "CONCEPT" },
  { id: "performance", label: "PERFORMANCE" },
  { id: "behind", label: "BEHIND" },
  { id: "profile", label: "PROFILE" },
] as const;
