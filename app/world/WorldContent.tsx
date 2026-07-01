"use client";

import { motion } from "framer-motion";
import { members } from "@/lib/data/members";
import PageHeader from "@/components/layout/PageHeader";
import OceanBackground from "@/components/ui/OceanBackground";

const timeline = [
  {
    chapter: "PROLOGUE",
    title: "The Five Islands",
    description:
      "고대부터 존재해 온 5개의 신비로운 섬. 각 섬은 고유한 힘을 품고 있었지만, 그 힘은 고립되어 있었다.",
  },
  {
    chapter: "CHAPTER 1",
    title: "The Convergence",
    description:
      "2026년, 다섯 명의 청년이 각자의 섬에서 출발했다. 서로 다른 목적, 서로 다른 꿈. 하지만 운명은 그들을 하나의 바다로 이끌었다.",
  },
  {
    chapter: "CHAPTER 1",
    title: "DEEP BLUE",
    description:
      "첫 번째 파도가 일어났다. 'DEEP BLUE' — BLUEWAVE의 데뷔 싱글. 다섯 개의 파도가 처음으로 하나의 리듬으로 합쳐진 순간.",
  },
  {
    chapter: "CHAPTER 2",
    title: "The Rising Tide",
    description:
      "Coming Soon — 파도는 멈추지 않는다. 더 깊은 바다, 더 높은 파도가 기다리고 있다.",
    comingSoon: true,
  },
];

export default function WorldContent() {
  return (
    <>
      <PageHeader
        subtitle="Universe"
        title="THE TIDE"
        description="5개의 섬, 5명의 파도. BLUEWAVE만의 세계관에서 펼쳐지는 이야기."
      />

      <OceanBackground variant="deep" className="section-padding">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 md:p-12 mb-20 text-center"
          >
            <p className="text-white/60 leading-relaxed text-base md:text-lg">
              &ldquo;The Tide&rdquo;는 BLUEWAVE만의 독창적인 세계관입니다. 5개의
              신비로운 섬에서 온 5명의 청년이 각자의 파도가 되어 하나의
              거대한 바다를 만들어가는 이야기. 음악, 퍼포먼스, 그리고
              스토리텔링이 하나로 어우러지는 경험을 선사합니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {members.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass glass-hover rounded-2xl p-6"
              >
                <div
                  className="w-2 h-2 rounded-full mb-4"
                  style={{ backgroundColor: member.color }}
                />
                <p className="text-[10px] tracking-[0.25em] text-white/40 mb-2">
                  {member.nameEn}&apos;S ISLAND
                </p>
                <h3 className="font-display text-lg tracking-wider mb-2">
                  {member.position}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-ocean-surface/50 via-ocean-surface/20 to-transparent md:-translate-x-px" />

            <div className="space-y-12">
              {timeline.map((event, i) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`relative pl-12 md:pl-0 md:w-1/2 ${
                    i % 2 === 0
                      ? "md:mr-auto md:pr-12"
                      : "md:ml-auto md:pl-12"
                  }`}
                >
                  <div className="absolute left-2.5 md:left-auto md:right-0 md:translate-x-1/2 top-2 w-3 h-3 rounded-full bg-ocean-surface border-2 border-ocean-deep md:top-6" />

                  <div
                    className={`glass rounded-2xl p-6 md:p-8 ${
                      event.comingSoon ? "opacity-60" : ""
                    }`}
                  >
                    <p className="text-[10px] tracking-[0.3em] text-ocean-surface mb-2">
                      {event.chapter}
                    </p>
                    <h3 className="font-display text-xl md:text-2xl tracking-wider mb-3">
                      {event.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </OceanBackground>
    </>
  );
}
