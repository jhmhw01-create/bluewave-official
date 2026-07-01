import type { Metadata } from "next";
import WorldContent from "./WorldContent";

export const metadata: Metadata = {
  title: "World",
  description:
    "BLUEWAVE UNIVERSE 'The Tide' — 5개의 섬, 5명의 파도. 독창적인 세계관을 탐험하세요.",
};

export default function WorldPage() {
  return <WorldContent />;
}
