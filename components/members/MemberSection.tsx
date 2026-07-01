"use client";

import { motion } from "framer-motion";
import type { Member } from "@/lib/data/members";

import MemberHero from "./MemberHero";
import MemberIdentity from "./MemberIdentity";
import MemberStory from "./MemberStory";
import MemberProfile from "./MemberProfile";
import NextWave from "./NextWave";
import MemberGallery from "./MemberGallery";

type Props = {
  member: Member;
  nextMember?: Member;
};

export default function MemberSection({
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
        className="absolute inset-0 -z-10 opacity-10 blur-[120px]"
        style={{
          background: `radial-gradient(circle at center, ${member.color}, transparent 70%)`,
        }}
      />

      <div className="container mx-auto space-y-24">
        <MemberHero member={member} />
        <MemberIdentity member={member} />
        <MemberStory member={member} />
        <MemberProfile member={member} />
        <MemberGallery member={member} />

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