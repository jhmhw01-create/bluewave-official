"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import type { Member } from "@/lib/data/members";

type Props = {
  member: Member;
  delay?: number;
};

export default function MemberCard({
  member,
  delay = 0,
}: Props) {
  return (
    <Link href={`/members#${member.id}`}>
      <GlassCard
        delay={delay}
        className="
          group
          cursor-pointer
          overflow-hidden
          border
          border-cyan-300/10
          hover:border-cyan-300/40
          transition-all
          duration-700
          hover:-translate-y-4
          hover:shadow-[0_20px_60px_rgba(94,220,255,0.25)]
        "
      >
        <div className="relative aspect-[3/4] overflow-hidden">

          {/* Pulse Dot */}
          <div className="absolute top-4 right-4 z-20 h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />

          {/* Image */}
          <Image
            src={member.profileImage}
            alt={member.name}
            fill
            sizes="(max-width:768px) 50vw,20vw"
            className="
              object-cover
              transition-all
              duration-700
              group-hover:scale-110
              group-hover:brightness-110
            "
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#021221] via-transparent to-transparent opacity-90" />

          <div className="absolute inset-0 bg-cyan-300/0 group-hover:bg-cyan-300/10 transition-all duration-700" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-5">

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.7 }}
              viewport={{ once: true }}
              style={{ color: member.color }}
              className="text-xs tracking-[0.25em] uppercase"
            >
              {member.nameEn}
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="
                mt-2
                font-display
                text-xl
                tracking-[0.18em]
                transition-all
                duration-500
                group-hover:text-cyan-300
              "
            >
              {member.name}
            </motion.h3>

            <p className="mt-3 text-xs text-white/80">
              {member.role}
            </p>

            <p
              className="mt-1 text-[11px] tracking-[0.2em]"
              style={{ color: member.color }}
            >
              {member.position}
            </p>

            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">

              <span className="text-[10px] tracking-[0.25em] uppercase text-white/50">
                View Profile
              </span>

              <span className="transition-all duration-500 group-hover:translate-x-1 group-hover:text-cyan-300">
                →
              </span>

            </div>

          </div>

        </div>
      </GlassCard>
    </Link>
  );
}