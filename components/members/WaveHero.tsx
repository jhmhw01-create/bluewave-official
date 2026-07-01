"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Member } from "@/lib/data/members";
import { waveThemes } from "@/lib/data/waves";

type Props = {
  member: Member;
};

export default function WaveHero({ member }: Props) {
  const theme = waveThemes[member.wave];

  return (
    <section className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#031325]">

      {/* Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-40`}
      />

      {/* Animated Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 blur-[140px]"
        style={{
          background: `radial-gradient(circle at center, ${theme.glow}, transparent 70%)`,
        }}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative grid lg:grid-cols-2 gap-16 items-center px-8 py-14 lg:px-16 lg:py-20">

        {/* LEFT */}
        <div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="tracking-[0.45em] uppercase text-sm"
            style={{ color: theme.glow }}
          >
            {member.wave}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .1 }}
            className="mt-5 font-display text-5xl md:text-7xl lg:text-8xl font-bold"
          >
            {member.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: .2 }}
            className="mt-6 tracking-[0.35em] uppercase text-white/70"
          >
            {member.role}
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 140 }}
            transition={{ delay: .35 }}
            className="mt-8 h-[2px]"
            style={{
              backgroundColor: theme.glow,
            }}
          />

          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: .5 }}
            className="mt-10 text-3xl md:text-5xl italic font-light leading-relaxed"
            style={{
              color: theme.quoteColor,
            }}
          >
            "{member.quote}"
          </motion.blockquote>

        </div>

        {/* RIGHT */}
        <motion.div
          animate={{
            y: [0, -12, 0],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >

          {/* Glow */}
          <div
            className="absolute inset-0 blur-[120px] opacity-50"
            style={{
              background: theme.glow,
            }}
          />

          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-[30px] border border-white/10">

            <Image
              src={member.profileImage}
              alt={member.name}
              fill
              priority
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          </div>

        </motion.div>

      </div>

    </section>
  );
}