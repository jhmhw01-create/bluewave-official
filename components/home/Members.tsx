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
              <GlassCard delay={i * 0.08} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.profileImage}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                    <p
                      className="text-[10px] md:text-xs tracking-[0.2em] mb-1 opacity-70"
                      style={{ color: member.color }}
                    >
                      {member.nameEn}
                    </p>
                    <h3 className="font-display text-sm md:text-lg tracking-wider">
                      {member.name}
                    </h3>
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
