"use client";

import { motion } from "framer-motion";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  description?: string;
};

export default function PageHeader({
  title,
  subtitle,
  description,
}: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 ocean-gradient overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ocean-surface/8 rounded-full blur-[100px]" />
      </div>
      <div className="container relative z-10 text-center">
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs md:text-sm tracking-[0.35em] uppercase text-ocean-surface mb-4"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider mb-6"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        )}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 h-px w-20 bg-gradient-to-r from-transparent via-ocean-surface to-transparent mx-auto"
        />
      </div>
    </section>
  );
}
