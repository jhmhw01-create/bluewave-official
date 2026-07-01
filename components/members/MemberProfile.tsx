"use client";

import { motion } from "framer-motion";
import type { Member } from "@/lib/data/members";

type Props = {
  member: Member;
};

const profileItems = (member: Member) => [
  {
    label: "ROLE",
    value: member.role,
  },
  {
    label: "WAVE",
    value: member.wave,
  },
  {
    label: "BIRTHDAY",
    value: member.birthday,
  },
  {
    label: "NATIONALITY",
    value: member.nationality,
  },
];

export default function MemberProfile({ member }: Props) {
  return (
    <section className="mt-24">

      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 text-center font-display text-3xl tracking-[0.3em]"
      >
        PROFILE
      </motion.h3>

      <div className="grid gap-6 md:grid-cols-2">

        {profileItems(member).map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <p className="text-xs tracking-[0.3em] text-white/40 uppercase">
              {item.label}
            </p>

            <p
              className="mt-4 text-xl font-semibold"
              style={{ color: member.color }}
            >
              {item.value}
            </p>
          </motion.div>
        ))}

      </div>

    </section>
  );
}