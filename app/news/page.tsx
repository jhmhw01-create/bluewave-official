import type { Metadata } from "next";
import NewsContent from "./NewsContent";

export const metadata: Metadata = {
  title: "News",
  description: "BLUEWAVE 최신 소식 — 앨범 발매, 이벤트, 미디어, 공지사항.",
};

export default function NewsPage() {
  return <NewsContent />;
}
