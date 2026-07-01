"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import OceanBackground from "@/components/ui/OceanBackground";

export default function About() {
  return (
    <OceanBackground variant="section" className="section-padding" id="about">
      <div className="container">
        <SectionHeading
          subtitle="About"
          title="THE TIDE OF YOUTH"
          description="BLUEWAVE는 다섯 명의 청춘이 각자의 파도가 되어 하나의 바다를 만드는 5인조 보이그룹입니다. 깊은 바다의 신비로움과 젊음의 에너지를 음악으로 표현합니다."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="glass rounded-2xl p-8 md:p-10">
              <h3 className="font-display text-xl md:text-2xl tracking-wider mb-4 text-ocean-surface">
                OUR STORY
              </h3>
              <p className="text-white/60 leading-relaxed">
                2026년, 다섯 개의 섬에서 온 다섯 명의 청년이 만났습니다. 각자
                다른 색의 파도를 품고 있었지만, 무대 위에서 만난 순간 하나의
                거대한 바다가 되었습니다. BLUEWAVE는 경계를 넘어, 세대를
                초월하는 음악으로 전 세계 팬들과 연결됩니다.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "5", label: "MEMBERS" },
                { value: "2026", label: "DEBUT" },
                { value: "∞", label: "WAVES" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-xl p-5 text-center"
                >
                  <p className="font-display text-2xl md:text-3xl font-bold text-ocean-surface mb-1">
                    {stat.value}
                  </p>
                  <p className="text-[10px] md:text-xs tracking-[0.2em] text-white/40">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-1 aspect-[4/5] max-w-md mx-auto">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-ocean-mid to-ocean-bright flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="font-display text-6xl md:text-7xl font-bold tracking-wider text-gradient mb-4">
                    BW
                  </p>
                  <p className="text-sm tracking-[0.3em] text-white/50 uppercase">
                    Debut Single
                  </p>
                  <p className="font-display text-2xl tracking-wider mt-2">
                    DEEP BLUE
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-ocean-surface/10 rounded-full blur-[40px] pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </OceanBackground>
  );
}
