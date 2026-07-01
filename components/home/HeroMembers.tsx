"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const members = [
  {
    name: "Junseo",
    image: "/images/junseo_profile.png",
    className: "left-[6%] top-[18%]",
    size: 220,
    delay: 0,
  },
  {
    name: "Ian",
    image: "/images/ian_profile.png",
    className: "left-[20%] bottom-[10%]",
    size: 180,
    delay: 0.2,
  },
  {
    name: "Yeoul",
    image: "/images/yeoul_profile.png",
    className: "right-[20%] bottom-[10%]",
    size: 180,
    delay: 0.4,
  },
  {
    name: "Haewon",
    image: "/images/haewon_profile.png",
    className: "right-[6%] top-[18%]",
    size: 220,
    delay: 0.6,
  },
  {
    name: "Mio",
    image: "/images/mio_profile.png",
    className: "left-1/2 top-[8%] -translate-x-1/2",
    size: 170,
    delay: 0.8,
  },
];

export default function HeroMembers() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {members.map((member) => (
        <motion.div
          key={member.name}
          className={`absolute ${member.className}`}
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 40,
          }}
          animate={{
            opacity: 0.18,
            scale: 1,
            y: [0, -12, 0],
          }}
          transition={{
            delay: member.delay,
            duration: 2,
            y: {
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            },
          }}
        >
          <Image
            src={member.image}
            alt={member.name}
            width={member.size}
            height={member.size}
            priority
            className="
              rounded-full
              object-cover
              blur-[1px]
              grayscale
              brightness-110
              drop-shadow-[0_0_35px_rgba(94,220,255,.35)]
              select-none
            "
          />
        </motion.div>
      ))}
    </div>
  );
}