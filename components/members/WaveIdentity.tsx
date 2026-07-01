"use client";

import { motion } from "framer-motion";
import type { Member } from "@/lib/data/members";
import { waveThemes } from "@/lib/data/waves";

type Props = {
  member: Member;
};

export default function WaveIdentity({ member }: Props) {
  const theme = waveThemes[member.wave];

  return (
    <section className="py-24">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p
          className="tracking-[0.45em] uppercase text-sm"
          style={{ color: theme.glow }}
        >
          Wave Identity
        </p>

        <h2 className="mt-5 font-display text-5xl md:text-6xl">
          {member.wave}
        </h2>

        <div
          className="mx-auto mt-8 h-[2px] w-24 rounded-full"
          style={{
            backgroundColor: theme.glow,
          }}
        />
      </motion.div>

      {/* Keywords */}
      <div className="grid gap-6 md:grid-cols-3">

        {member.keywords.map((keyword, index) => (
          <motion.div
            key={keyword}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-10
              backdrop-blur-xl
              transition-all
              duration-500
            "
          >
            {/* Glow */}
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-15"
              style={{
                background: theme.glow,
              }}
            />

            {/* Number */}
            <p
              className="text-xs tracking-[0.4em] uppercase"
              style={{
                color: theme.glow,
              }}
            >
              0{index + 1}
            </p>

            {/* Keyword */}
            <h3 className="mt-6 font-display text-3xl">
              {keyword}
            </h3>

            {/* Divider */}
            <div
              className="mt-6 h-px w-full"
              style={{
                backgroundColor: `${theme.glow}40`,
              }}
            />

            <p className="mt-6 text-sm leading-7 text-white/70">
              {member.wave}를 상징하는 핵심 키워드입니다.
              BLUEWAVE의 세계관 속에서 이 흐름은 멤버의
              개성과 역할을 표현합니다.
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}