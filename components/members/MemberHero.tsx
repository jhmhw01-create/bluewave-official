"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Member } from "@/lib/data/members";

type Props = {
  member: Member;
};

export default function MemberHero({ member }: Props) {
  return (
    <section className="relative overflow-hidden rounded-3xl">

      {/* Background Glow */}
      <div
        className="absolute inset-0 opacity-20 blur-3xl"
        style={{
          background: `radial-gradient(circle at center, ${member.color}, transparent 70%)`,
        }}
      />

      <div className="relative grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div className="space-y-8">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            style={{ color: member.color }}
            className="tracking-[0.45em] uppercase text-sm"
          >
            {member.wave}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .15 }}
            className="font-display text-5xl lg:text-7xl font-bold"
          >
            {member.name}
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: .3 }}
            className="text-xl tracking-[0.25em] uppercase text-white/70"
          >
            {member.role}
          </motion.h3>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            transition={{ delay: .45 }}
            className="h-[2px] rounded-full"
            style={{ backgroundColor: member.color }}
          />

          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: .6 }}
            className="text-2xl italic text-white/90 leading-relaxed"
          >
            "{member.quote}"
          </motion.blockquote>

        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="relative"
        >

          <div
            className="absolute inset-0 blur-[90px] opacity-40"
            style={{ backgroundColor: member.color }}
          />

          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/10">

            <Image
              src={member.profileImage}
              alt={member.name}
              fill
              priority
              className="object-cover"
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}