import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "BLUEWAVE 공식 문의 — 팬클럽, 미디어, 비즈니스 문의를 남겨주세요.",
};

export default function ContactPage() {
  return <ContactContent />;
}
