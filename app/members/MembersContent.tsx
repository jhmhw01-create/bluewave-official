"use client";

import { members } from "@/lib/data/members";

import PageHeader from "@/components/layout/PageHeader";
import OceanBackground from "@/components/ui/OceanBackground";

import WaveSection from "@/components/members/WaveSection";

export default function MembersContent() {
  return (
    <>
      <PageHeader
        subtitle="The Five Waves"
        title="THE FIVE WAVES"
        description="다섯 개의 파도는 서로 다른 흐름을 품고 하나의 BLUEWAVE를 완성한다."
      />

      <OceanBackground
        variant="deep"
        className="pb-32"
      >
        <div className="container">

          {members.map((member, index) => (
            <WaveSection
              key={member.id}
              member={member}
              nextMember={members[index + 1]}
            />
          ))}

        </div>
      </OceanBackground>
    </>
  );
}