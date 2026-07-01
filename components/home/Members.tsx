"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { members } from "@/lib/data/members";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import OceanBackground from "@/components/ui/OceanBackground";
import MemberCard from "@/components/members/MemberCard";

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
    <MemberCard
      key={member.id}
      member={member}
      delay={i * 0.08}
    />
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
