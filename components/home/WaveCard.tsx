"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import type { Member } from "@/lib/data/members";
import { waveThemes } from "@/lib/data/waves";

type Props = {
  member: Member;
  delay?: number;
};

export default function WaveCard({
  member,
  delay = 0,
}: Props) {
  const theme = waveThemes[member.wave];

  return (
    <Link href={`/members#${member.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay,
        }}
        whileHover={{
          y: -12,
        }}
        className="
          group
          relative
          overflow-hidden
          rounded-[28px]
          border
          border-white/10
          bg-[#041120]
          cursor-pointer
        "
      >
        {/* Glow */}
        <motion.div
          animate={{
            opacity: [0.2, 0.45, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute inset-0 blur-[90px]"
          style={{
            background: theme.glow,
          }}
        />

        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden">

          <Image
            src={member.profileImage}
            alt={member.name}
            fill
            className="
              object-cover
              transition-all
              duration-700
              group-hover:scale-110
            "
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020B1C] via-black/10 to-transparent" />

          {/* Dot */}
          <div
            className="absolute top-5 right-5 h-2.5 w-2.5 rounded-full animate-pulse"
            style={{
              background: theme.glow,
            }}
          />

        </div>

        {/* Content */}
        <div className="relative p-6">

          <p
            className="text-[11px] tracking-[0.35em] uppercase"
            style={{
              color: theme.glow,
            }}
          >
            {member.wave}
          </p>

          <h2 className="mt-3 font-display text-2xl">
            {member.name}
          </h2>

          <p className="mt-3 text-sm text-white/70">
            {member.role}
          </p>

          <div
            className="mt-5 h-px"
            style={{
              background: `${theme.glow}40`,
            }}
          />

          <div className="mt-5 flex items-center justify-between">

            <span className="text-xs tracking-[0.3em] uppercase text-white/50">
              Explore Wave
            </span>

            <motion.span
              whileHover={{
                x: 4,
              }}
              className="text-xl"
              style={{
                color: theme.glow,
              }}
            >
              →
            </motion.span>

          </div>

        </div>

      </motion.div>
    </Link>
  );
}