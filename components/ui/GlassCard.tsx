"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
};

export default function GlassCard({
  children,
  className = "",
  hover = true,
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        hover
          ? {
              y: -10,
              scale: 1.03,
            }
          : undefined
      }
      className={`
        relative
        overflow-hidden
        rounded-2xl
        glass
        ${hover ? "glass-hover" : ""}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}