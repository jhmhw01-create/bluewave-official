"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import OceanBackground from "@/components/ui/OceanBackground";

const features = [
  {
    title: "Ocean Sync",
    description: "5가지 멤버 컬러 연동 Bluetooth 동기화",
  },
  {
    title: "Wave Motion",
    description: "음악에 반응하는 파도 모션 LED 효과",
  },
  {
    title: "Deep Design",
    description: "바다의 깊이를 담은 프리미엄 디자인",
  },
];

export default function LightStick() {
  return (
    <OceanBackground variant="section" className="section-padding" id="lightstick">
      <div className="container">
        <SectionHeading
          subtitle="Official Merchandise"
          title="OCEAN LIGHT"
          description="BLUEWAVE 공식 응원봉. 바다의 깊이와 5가지 파도의 색을 담았습니다."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-ocean-surface/15 rounded-full blur-[80px] animate-pulse-glow" />
              <div className="relative w-48 md:w-64 lg:w-80 aspect-[1/3]">
                <Image
                  src="/images/lightstick.png"
                  alt="BLUEWAVE Official Light Stick - Ocean Light"
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-contain animate-float"
                />
              </div>
            </div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <div className="space-y-4 mb-8">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-xl p-5 md:p-6"
                >
                  <h3 className="font-display text-lg tracking-wider text-ocean-surface mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/50">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">
                PRE-ORDER NOW
              </Button>
              <Button href="/news" variant="outline" size="lg">
                LEARN MORE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </OceanBackground>
  );
}
