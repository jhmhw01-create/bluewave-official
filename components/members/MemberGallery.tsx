"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Member } from "@/lib/data/members";

type Props = {
  member: Member;
};

export default function MemberGallery({ member }: Props) {
  return (
    <section className="mt-24">

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <p
          className="text-sm tracking-[0.45em] uppercase mb-3"
          style={{ color: member.color }}
        >
          Gallery
        </p>

        <h2 className="font-display text-4xl">
          VISUAL ARCHIVE
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-12 gap-4">

        {member.images.map((img, index) => (
          <motion.div
            key={img}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * .08 }}
            viewport={{ once: true }}
            className={`
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              group
              cursor-pointer

              ${
                index === 0
                  ? "md:col-span-7 aspect-[4/5]"
                  : "md:col-span-5 aspect-square"
              }
            `}
          >
            <Image
              src={img}
              alt={member.name}
              fill
              className="
                object-cover
                duration-700
                transition-all
                group-hover:scale-110
              "
            />

            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-all duration-500"
              style={{
                background: member.color,
              }}
            />

            <div className="absolute inset-0 border border-transparent group-hover:border-white/30 rounded-3xl transition-all" />

          </motion.div>
        ))}

      </div>

    </section>
  );
}