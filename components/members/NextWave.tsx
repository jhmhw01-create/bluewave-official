"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Member } from "@/lib/data/members";

type Props = {
  current: Member;
  next: Member;
};

export default function NextWave({ current, next }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mt-32"
    >
      <Link href={`#${next.id}`}>
        <div
          className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-12
          transition-all
          duration-700
          hover:border-white/30
          "
        >
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-700"
            style={{
              background: `radial-gradient(circle at center, ${next.color}, transparent 70%)`,
            }}
          />

          <p className="text-xs tracking-[0.45em] uppercase text-white/40">
            NEXT WAVE
          </p>

          <h2
            className="mt-4 font-display text-5xl"
            style={{ color: next.color }}
          >
            {next.wave}
          </h2>

          <p className="mt-6 text-2xl">
            {next.name}
          </p>

          <div className="mt-10 flex items-center justify-between">

            <span className="tracking-[0.25em] uppercase text-white/50">
              Continue
            </span>

            <motion.span
              animate={{ x: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
              }}
              className="text-3xl"
            >
              →
            </motion.span>

          </div>

        </div>
      </Link>
    </motion.section>
  );
}