"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import OceanBackground from "@/components/ui/OceanBackground";

const benefits = [
  "공식 멤버십 카드 & 디지털 굿즈",
  "팬미팅 & 팬사인회 우선 응모",
  "WAVES 전용 커뮤니티 접근",
  "한정판 멤버십 키트",
  "생일 & 기념일 특별 콘텐츠",
  "콘서트 티켓 선예매",
];

export default function Fanclub() {
  return (
    <OceanBackground variant="deep" className="section-padding" id="fanclub">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-ocean-surface/10 rounded-full blur-[60px] animate-pulse-glow" />
              <Image
                src="/images/WAVES.png"
                alt="WAVES Fanclub Logo"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain animate-float"
                priority
              />
            </div>
          </motion.div>

          <div>
            <SectionHeading
              subtitle="Fanclub"
              title="WAVES"
              description="BLUEWAVE와 함께하는 공식 팬클럽. 파도처럼 흘러가는 우리만의 특별한 연결."
              align="left"
            />

            <div className="space-y-3 mb-8">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-ocean-surface shrink-0" />
                  <span className="text-sm md:text-base text-white/60">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            <Button href="/contact" size="lg">
              JOIN WAVES
            </Button>
          </div>
        </div>
      </div>
    </OceanBackground>
  );
}
