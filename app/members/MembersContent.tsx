"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { members } from "@/lib/data/members";
import PageHeader from "@/components/layout/PageHeader";
import OceanBackground from "@/components/ui/OceanBackground";

export default function MembersContent() {
  return (
    <>
      <PageHeader
        subtitle="Members"
        title="FIVE WAVES"
        description="각자 다른 색을 가진 다섯 명의 파도. BLUEWAVE를 구성하는 멤버들을 만나보세요."
      />

      <OceanBackground variant="deep" className="pb-20 md:pb-32">
        <div className="container space-y-24 md:space-y-32">
          {members.map((member, index) => (
            <motion.article
              key={member.id}
              id={member.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              <div
                className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div className="glass rounded-2xl p-1 overflow-hidden">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                    <Image
                      src={member.profileImage}
                      alt={member.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      priority={index < 2}
                    />
                  </div>
                </div>
                <div
                  className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full blur-[60px] pointer-events-none opacity-40"
                  style={{ backgroundColor: member.color }}
                />
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <p
                  className="text-xs tracking-[0.3em] uppercase mb-3"
                  style={{ color: member.color }}
                >
                  {member.nameEn}
                </p>
                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-wider mb-2">
                  {member.name}
                </h2>
                <p className="text-ocean-surface tracking-wider mb-1">
                  {member.role}
                </p>
                <p className="text-white/40 text-sm mb-8 italic">
                  {member.position}
                </p>

                <p className="text-white/60 leading-relaxed mb-8">
                  {member.bio}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="glass rounded-xl p-4">
                    <p className="text-[10px] tracking-[0.2em] text-white/40 mb-1">
                      BIRTHDAY
                    </p>
                    <p className="text-sm">{member.birthday}</p>
                  </div>
                  <div className="glass rounded-xl p-4">
                    <p className="text-[10px] tracking-[0.2em] text-white/40 mb-1">
                      NATIONALITY
                    </p>
                    <p className="text-sm">{member.nationality}</p>
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-2">
                  {member.images.slice(0, 5).map((img) => (
                    <div
                      key={img}
                      className="relative aspect-square rounded-lg overflow-hidden glass"
                    >
                      <Image
                        src={img}
                        alt={`${member.nameEn} photo`}
                        fill
                        sizes="80px"
                        className="object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </OceanBackground>
    </>
  );
}
