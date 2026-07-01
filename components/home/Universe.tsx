"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import OceanBackground from "@/components/ui/OceanBackground";

const islands = [
  {
    name: "Azure Isle",
    member: "JUNSEO",
    color: "#4FC3F7",
    description: "깊은 바다의 중심, 모든 파도가 시작되는 곳",
  },
  {
    name: "Violet Reef",
    member: "IAN",
    color: "#9B7CFF",
    description: "자유로운 해류가 흐르는 신비로운 산호초",
  },
  {
    name: "Moonlit Shore",
    member: "YEOUL",
    color: "#E8E8E8",
    description: "달빛이 비치는 고요한 백사장",
  },
  {
    name: "Golden Atoll",
    member: "HAEWON",
    color: "#FFD66B",
    description: "따뜻한 햇살이 가득한 황금빛 환초",
  },
  {
    name: "Tropical Bay",
    member: "MIO",
    color: "#FF8FD8",
    description: "열대의 상큼한 바람이 불어오는 만",
  },
];

export default function Universe() {
  return (
    <OceanBackground variant="section" className="section-padding" id="universe">
      <div className="container">
        <SectionHeading
          subtitle="Universe"
          title="THE TIDE"
          description="5개의 섬, 5명의 파도. BLUEWAVE만의 세계관 'The Tide'에서 펼쳐지는 이야기."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {islands.map((island, i) => (
            <motion.div
              key={island.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Link href="/world" className="block group">
                <div className="glass glass-hover rounded-2xl p-6 md:p-8 h-full">
                  <div
                    className="w-3 h-3 rounded-full mb-4"
                    style={{ backgroundColor: island.color }}
                  />
                  <p className="text-[10px] tracking-[0.25em] text-white/40 mb-2">
                    {island.member}
                  </p>
                  <h3 className="font-display text-xl tracking-wider mb-3 group-hover:text-ocean-surface transition-colors">
                    {island.name}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {island.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="md:col-span-2 lg:col-span-1"
          >
            <div className="glass rounded-2xl p-6 md:p-8 h-full flex flex-col justify-center items-center text-center bg-gradient-to-br from-ocean-mid/30 to-ocean-bright/20">
              <p className="font-display text-4xl md:text-5xl font-bold text-gradient mb-4">
                ?
              </p>
              <h3 className="font-display text-lg tracking-wider mb-2">
                CHAPTER 2
              </h3>
              <p className="text-sm text-white/40">Coming Soon</p>
            </div>
          </motion.div>
        </div>

        <div className="text-center">
          <Button href="/world" variant="outline">
            EXPLORE THE UNIVERSE
          </Button>
        </div>
      </div>
    </OceanBackground>
  );
}
