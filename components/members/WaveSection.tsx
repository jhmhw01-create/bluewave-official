"use client";

import { motion } from "framer-motion";
import type { Member } from "@/lib/data/members";

import WaveHero from "./WaveHero";
import WaveIdentity from "./WaveIdentity";
import WaveStory from "./WaveStory";
import WaveProfile from "./WaveProfile";
import WaveGallery from "./WaveGallery";
import NextWave from "./NextWave";

type Props = {
  member: Member;
  nextMember?: Member;
};

export default function WaveSection({
  member,
  nextMember,
}: Props) {
  return (
    <motion.section
      id={member.id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative py-32"
    >
      {/* Background Glow */}
      <div
        className="absolute inset-0 -z-10 opacity-10 blur-[160px]"
        style={{
          background: `radial-gradient(circle at center, ${member.color}, transparent 70%)`,
        }}
      />

      <div className="container mx-auto space-y-32">

        <WaveHero member={member} />

        <WaveIdentity member={member} />

        <WaveStory member={member} />

        <WaveProfile member={member} />

        <WaveGallery member={member} />

        {nextMember && (
          <NextWave
            current={member}
            next={nextMember}
          />
        )}

      </div>
    </motion.section>
  );
}