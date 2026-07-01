"use client";

import { motion } from "framer-motion";
import type { Member } from "@/lib/data/members";
import { waveThemes } from "@/lib/data/waves";

type Props = {
  member: Member;
};

export default function WaveProfile({ member }: Props) {
  const theme = waveThemes[member.wave];

  const profileItems = [
    {
      label: "ROLE",
      value: member.role,
    },
    {
      label: "WAVE",
      value: member.wave,
    },
    {
      label: "NATIONALITY",
      value: member.nationality,
    },
    {
      label: "BIRTHDAY",
      value: member.birthday,
    },
  ];

  return (
    <section className="py-28">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p
          className="tracking-[0.45em] uppercase text-sm"
          style={{
            color: theme.glow,
          }}
        >
          Official Profile
        </p>

        <h2 className="mt-5 font-display text-5xl md:text-6xl">
          PROFILE
        </h2>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">

        {profileItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -6,
            }}
            className="
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8
              transition-all
              duration-500
            "
          >
            {/* Glow */}
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-10"
              style={{
                background: theme.glow,
              }}
            />

            <p
              className="tracking-[0.35em] uppercase text-xs"
              style={{
                color: theme.glow,
              }}
            >
              {item.label}
            </p>

            <div
              className="mt-4 h-px"
              style={{
                background: `${theme.glow}50`,
              }}
            />

            <h3 className="mt-6 text-2xl md:text-3xl font-semibold">
              {item.value}
            </h3>

          </motion.div>
        ))}

      </div>

    </section>
  );
}