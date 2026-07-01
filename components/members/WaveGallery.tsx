"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Member } from "@/lib/data/members";
import { waveThemes } from "@/lib/data/waves";

type Props = {
  member: Member;
};

export default function WaveGallery({ member }: Props) {
  const theme = waveThemes[member.wave];

  return (
    <section className="py-28">

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
          Visual Archive
        </p>

        <h2 className="mt-5 font-display text-5xl md:text-6xl">
          GALLERY
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-12 gap-5">

        {member.images.map((image, index) => (

          <motion.div
            key={image}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.08,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
            }}
            className={`
              group
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-white/10

              ${
                index === 0
                  ? "md:col-span-7 aspect-[4/5]"
                  : "md:col-span-5 aspect-square"
              }
            `}
          >

            <Image
              src={image}
              alt={`${member.name} ${index}`}
              fill
              className="
                object-cover
                transition-all
                duration-700
                group-hover:scale-110
              "
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

            {/* Glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-500"
              style={{
                background: theme.glow,
              }}
            />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition duration-500">

              <p
                className="tracking-[0.35em] uppercase text-xs"
                style={{
                  color: theme.glow,
                }}
              >
                {member.wave}
              </p>

              <h3 className="mt-2 font-display text-2xl">
                {member.name}
              </h3>

              <p className="mt-2 text-sm text-white/70">
                Official Concept Photo
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}