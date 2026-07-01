"use client";

import { motion } from "framer-motion";
import type { Member } from "@/lib/data/members";

type Props = {
  member: Member;
};

export default function MemberIdentity({ member }: Props) {
  return (
    <section className="mt-20">

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 text-center text-3xl font-display tracking-[0.3em]"
      >
        {member.wave}
      </motion.h3>

      <div className="grid gap-6 md:grid-cols-3">

        {member.keywords.map((keyword, index) => (
          <motion.div
            key={keyword}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div
              className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-20"
              style={{
                background: `radial-gradient(circle at center, ${member.color}, transparent 70%)`,
              }}
            />

            <div
              className="mb-5 h-2 w-2 rounded-full"
              style={{ backgroundColor: member.color }}
            />

            <h4
              className="text-xl font-semibold tracking-wider"
              style={{ color: member.color }}
            >
              {keyword}
            </h4>

            <p className="mt-4 text-sm leading-7 text-white/60">
              {getKeywordDescription(keyword)}
            </p>
          </motion.div>
        ))}

      </div>

    </section>
  );
}

function getKeywordDescription(keyword: string) {
  switch (keyword) {
    case "해류":
      return "끊임없이 흐르며 새로운 방향을 만들어낸다.";

    case "속도":
      return "가장 먼저 움직이며 변화를 이끈다.";

    case "움직임":
      return "멈추지 않는 에너지와 자유를 상징한다.";

    case "폭풍":
      return "거센 감정을 품은 거대한 파도.";

    case "번개":
      return "순간의 빛처럼 강렬한 존재감.";

    case "깊은밤바다":
      return "고요하지만 깊이를 알 수 없는 감성.";

    case "달":
      return "감정을 비추는 은은한 빛.";

    case "밀물":
      return "감정이 차오르는 순간.";

    case "썰물":
      return "모든 감정을 정리하는 시간.";

    case "새벽":
      return "새로운 시작을 알리는 첫 빛.";

    case "햇살":
      return "희망과 따뜻함을 전한다.";

    case "수평선":
      return "끝없는 가능성을 상징한다.";

    case "산호":
      return "다채로운 생명력을 품고 있다.";

    case "벚꽃":
      return "짧지만 가장 아름다운 순간.";

    case "잔잔한 바다":
      return "편안함과 치유의 공간.";

    default:
      return "";
  }
}