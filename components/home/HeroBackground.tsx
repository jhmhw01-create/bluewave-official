"use client";

import { motion } from "framer-motion";

const stars = Array.from({ length: 120 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 65}%`,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 4 + 2,
  delay: Math.random() * 3,
}));

const bubbles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  size: Math.random() * 18 + 8,
  duration: Math.random() * 12 + 10,
  delay: Math.random() * 8,
}));

export default function HeroBackground() {
  return (
    <>
      {/* Ocean Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0D5EA6_0%,#062B56_35%,#020B1C_100%)]" />

      {/* Aurora */}
      <motion.div
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute top-[-200px] left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[180px]"
      />

      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.6, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}

      {/* Bubble */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute bottom-[-100px] rounded-full border border-cyan-300/30 bg-cyan-300/5"
          style={{
            left: bubble.left,
            width: bubble.size,
            height: bubble.size,
          }}
          animate={{
            y: [-50, -900],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            delay: bubble.delay,
            ease: "linear",
          }}
        />
      ))}

      {/* Wave 1 */}
      <motion.div
        animate={{ x: [-60, 60, -60] }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-[-10%] h-56 w-[120%] rounded-t-[100%] bg-cyan-400/10 blur-3xl"
      />

      {/* Wave 2 */}
      <motion.div
        animate={{ x: [40, -40, 40] }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-[-10%] h-44 w-[120%] rounded-t-[100%] bg-blue-500/10 blur-2xl"
      />

      {/* Wave 3 */}
      <motion.div
        animate={{ x: [-30, 30, -30] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-16 left-[-10%] h-32 w-[120%] rounded-t-[100%] bg-white/5 blur-xl"
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-black/20" />
    </>
  );
}