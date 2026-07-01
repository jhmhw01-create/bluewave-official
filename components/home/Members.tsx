"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { members } from "@/lib/data/members";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import OceanBackground from "@/components/ui/OceanBackground";

export default function Members() {
  return (
    <OceanBackground variant="deep" className="section-padding" id="members">
      <div className="container">
        <SectionHeading
          subtitle="Members"
          title="FIVE WAVES, ONE OCEAN"
          description="각자 다른 색을 가진 다섯 명의 파도. BLUEWAVE를 구성하는 멤버들을 만나보세요."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {members.map((member, i) => (
            <Link key={member.id} href={`/members#${member.id}`}>
              <GlassCard
  delay={i * 0.08}
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
  hover:shadow-[0_20px_60px_rgba(94,220,255,.25)]
"
>
                <div className="relative aspect-[3/4] overflow-hidden">
                <div className="absolute top-4 right-4 z-20 h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
                  <Image
                    src={member.profileImage}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="
object-cover
transition-all
duration-700
group-hover:scale-110
group-hover:brightness-110
"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#021221] via-transparent to-transparent opacity-90" />

<div className="absolute inset-0 bg-cyan-300/0 group-hover:bg-cyan-300/10 transition-all duration-700" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">

  <p
    className="text-[10px] md:text-xs tracking-[0.2em] mb-1 opacity-70"
    style={{ color: member.color }}
  >
    {member.nameEn}
  </p>

  <h3
    className="
      font-display
      text-lg
      tracking-[0.18em]
      transition-all
      duration-500
      group-hover:text-cyan-300
    "
  >
    {member.name}
  </h3>

  <p className="mt-2 text-xs text-white/80">
    {member.role}
  </p>

  <p
    className="mt-1 text-[11px] tracking-[0.2em]"
    style={{ color: member.color }}
  >
    {member.position}
  </p>

  <div className="mt-4 flex items-center justify-between">
    <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">
      View Profile
    </span>

    <span className="transition-all duration-500 group-hover:translate-x-1">
      →
    </span>
  </div>

</div>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button href="/members" variant="outline">
            VIEW ALL MEMBERS
          </Button>
        </motion.div>
      </div>
    </OceanBackground>
  );
}
