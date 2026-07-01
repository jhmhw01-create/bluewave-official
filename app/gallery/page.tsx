import type { Metadata } from "next";
import GalleryContent from "./GalleryContent";

export const metadata: Metadata = {
  title: "Gallery",
  description: "BLUEWAVE 공식 갤러리 — 컨셉, 퍼포먼스, 비하인드, 프로필 사진.",
};

export default function GalleryPage() {
  return <GalleryContent />;
}
