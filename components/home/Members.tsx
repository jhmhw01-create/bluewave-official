"use client";

import { motion } from "framer-motion";

import { members } from "@/lib/data/members";

import OceanBackground from "@/components/ui/OceanBackground";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

import { WaveCard } from "./WaveCard";

export default function Members() {
  return (
    <OceanBackground
      variant="deep"
      className="relative section-padding overflow-hidden"
      id="waves"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[180px]" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-sky-400/10 blur-[160px]" />

      </div>

      <div className="container relative z-10">

        <SectionHeading
          subtitle="The Five Waves"
          title="THE FIVE WAVES"
          description="서로 다른 다섯 개의 파도가 만나 하나의 거대한 BLUEWAVE를 완성합니다."
        />

        {/* Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-5">

          {members.map((member, index) => (

            <WaveCard
              key={member.id}
              member={member}
              delay={index * 0.1}
            />

          ))}

        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: .4,
          }}
          className="mt-20 flex justify-center"
        >
          <Button
            href="/members"
            variant="outline"
            size="lg"
          >
            EXPLORE THE FIVE WAVES
          </Button>
        </motion.div>

      </div>

    </OceanBackground>
  );
}