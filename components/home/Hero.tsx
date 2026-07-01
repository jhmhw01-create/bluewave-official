"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import HeroBackground from "./HeroBackground";
import HeroMembers from "./HeroMembers";
import OceanWave from "./OceanWave";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020B1C]">
      <HeroBackground />
      <HeroMembers />
{/* Background Logo */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
  <Image
    src="/images/WAVES.png"
    alt="WAVES"
    width={900}
    height={900}
    priority
    className="w-[700px] lg:w-[900px] object-contain animate-pulse"
  />
</div>
{/* MEET BLUEWAVE Background */}
<div className="absolute inset-0 pointer-events-none">
  <div className="absolute left-[8%] top-[20%] opacity-20">
    <Image
      src="/images/junseo_profile.png"
      alt="Junseo"
      width={220}
      height={220}
      className="rounded-full blur-[1px]"
    />
  </div>

  <div className="absolute left-[25%] bottom-[12%] opacity-15">
    <Image
      src="/images/ian_profile.png"
      alt="Ian"
      width={190}
      height={190}
      className="rounded-full blur-[2px]"
    />
  </div>

  <div className="absolute right-[25%] bottom-[10%] opacity-15">
    <Image
      src="/images/yeoul_profile.png"
      alt="Yeoul"
      width={190}
      height={190}
      className="rounded-full blur-[2px]"
    />
  </div>

  <div className="absolute right-[8%] top-[20%] opacity-20">
    <Image
      src="/images/haewon_profile.png"
      alt="Haewon"
      width={220}
      height={220}
      className="rounded-full blur-[1px]"
    />
  </div>

  <div className="absolute left-1/2 top-[12%] -translate-x-1/2 opacity-10">
    <Image
      src="/images/mio_profile.png"
      alt="Mio"
      width={170}
      height={170}
      className="rounded-full blur-[2px]"
    />
  </div>
</div>
      {/* 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#020B1C]" />

      {/* 콘텐츠 */}
      <div className="relative z-20 container mx-auto flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: .8 }}
  className="mb-6 tracking-[0.5em] text-sky-200 uppercase text-sm"
>
  Official Website
</motion.p>

<div className="mb-8 flex justify-center gap-3">
  <span className="h-2 w-2 rounded-full bg-cyan-300 animate-ping" />
  <span className="h-2 w-2 rounded-full bg-white animate-ping [animation-delay:300ms]" />
  <span className="h-2 w-2 rounded-full bg-cyan-300 animate-ping [animation-delay:600ms]" />
</div>

        <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="text-7xl md:text-[9rem] lg:text-[11rem] font-black tracking-[0.15em]"
>
  <span className="relative">
    <span className="absolute inset-0 blur-3xl text-cyan-300 opacity-60">
      BLUEWAVE
    </span>

    <span className="relative bg-gradient-to-r from-cyan-300 via-white to-sky-300 bg-clip-text text-transparent">
      BLUEWAVE
    </span>
  </span>
</motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4 }}
          className="mt-8 text-2xl md:text-4xl tracking-[0.35em] text-white/80"
        >
          THE TIDE OF YOUTH
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .8 }}
          className="mt-10 max-w-2xl text-lg md:text-xl leading-9 text-white/70"
        >
          서로 다른 다섯 개의 파도가 만나
          <br />
          하나의 거대한 바다가 된다.
        </motion.p>
<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1 }}
  className="mt-10 text-cyan-200 tracking-[0.4em] uppercase text-xs"
>
  The Official Website of BLUEWAVE
</motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-14 flex flex-wrap justify-center gap-5"
        >
          <Button href="/MEET BLUEWAVE" size="lg">
            MEET BLUEWAVE
          </Button>

          <Button href="/world" variant="outline" size="lg">
            EXPLORE WORLD
          </Button>
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 flex flex-col items-center text-white/40"
        >
          <span className="text-xs tracking-[0.4em] uppercase">
            Scroll
          </span>

          <div className="mt-3 h-10 w-[1px] bg-white/40" />
        </motion.div>
      </div>
      <OceanWave />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#020B1C] to-transparent" />
    </section>
  );
}