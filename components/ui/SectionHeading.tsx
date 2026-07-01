"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 md:mb-16 max-w-3xl ${alignClass}`}
    >
      {subtitle && (
        <p
          className={`text-xs md:text-sm tracking-[0.35em] uppercase mb-4 ${
            light ? "text-ocean-surface/80" : "text-ocean-surface"
          }`}
        >
          {subtitle}
        </p>
      )}
      <h2
        className={`font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-4 ${
          light ? "text-white" : ""
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base md:text-lg leading-relaxed ${
            light ? "text-white/70" : "text-white/60"
          }`}
        >
          {description}
        </p>
      )}
      <div
        className={`mt-6 h-px w-16 bg-gradient-to-r from-ocean-surface to-transparent ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
