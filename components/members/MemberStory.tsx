"use client";

import { motion } from "framer-motion";
import type { Member } from "@/lib/data/members";

type Props = {
  member: Member;
};

export default function MemberStory({ member }: Props) {
  return (
    <section className="mt-24">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >

        <p
          className="tracking-[0.45em] uppercase text-sm mb-4"
          style={{ color: member.color }}
        >
          World Story
        </p>

        <h2 className="font-display text-4xl md:text-5xl mb-10">
          {member.wave}
        </h2>

        <div className="glass rounded-3xl p-10 md:p-14">

          <p className="text-lg md:text-xl leading-10 text-white/80 whitespace-pre-line">
            {member.story}
          </p>

        </div>

      </motion.div>

    </section>
  );
}