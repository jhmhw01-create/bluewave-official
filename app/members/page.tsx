import type { Metadata } from "next";
import MembersContent from "./MembersContent";

export const metadata: Metadata = {
  title: "Members",
  description:
    "BLUEWAVE 멤버 소개 — 강준서, 백이안, 한여울, 명해원, 아사쿠라 미오. Five waves, one ocean.",
};

export default function MembersPage() {
  return <MembersContent />;
}
