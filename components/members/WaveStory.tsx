"use client";

import { motion } from "framer-motion";
import type { Member } from "@/lib/data/members";
import { waveThemes } from "@/lib/data/waves";

type Props = {
  member: Member;
};

export default function WaveStory({ member }: Props) {
  const theme = waveThemes[member.wave];

  return (
    <section className="relative py-28">

      {/* Background */}
      <div
        className="absolute inset-0 rounded-[36px] opacity-20 blur-[120px]"
        style={{
          background: `radial-gradient(circle at center, ${theme.glow}, transparent 70%)`,
        }}
      />

      <div className="relative max-w-5xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p
            className="tracking-[0.45em] uppercase text-sm"
            style={{
              color: theme.glow,
            }}
          >
            World Story
          </p>

          <h2 className="mt-5 font-display text-5xl md:text-6xl">
            {member.wave}
          </h2>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <blockquote
            className="text-center italic text-4xl md:text-6xl font-light leading-relaxed"
            style={{
              color: theme.quoteColor,
            }}
          >
            "{member.quote}"
          </blockquote>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 160 }}
          transition={{ delay: .4 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 h-[2px]"
          style={{
            background: theme.glow,
          }}
        />

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div
            className="
              rounded-[32px]
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-10
              md:p-14
            "
          >
            <p className="leading-10 text-lg md:text-xl whitespace-pre-line text-white/80">
              {member.story}
            </p>
          </div>
        </motion.div>

      </div>

    </section>
  );
}