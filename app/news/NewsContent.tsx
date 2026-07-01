"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { newsArticles, newsCategories } from "@/lib/data/news";
import PageHeader from "@/components/layout/PageHeader";
import OceanBackground from "@/components/ui/OceanBackground";
import GlassCard from "@/components/ui/GlassCard";

export default function NewsContent() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? newsArticles
      : newsArticles.filter((a) => a.category === activeCategory);

  const featured = newsArticles.filter((a) => a.featured);

  return (
    <>
      <PageHeader
        subtitle="News"
        title="LATEST UPDATES"
        description="BLUEWAVE의 최신 소식과 공지사항을 확인하세요."
      />

      <OceanBackground variant="deep" className="section-padding">
        <div className="container">
          {featured.length > 0 && activeCategory === "all" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {featured.map((article, i) => (
                <GlassCard key={article.id} delay={i * 0.1} className="p-6 md:p-8">
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] tracking-[0.2em] bg-ocean-surface/20 text-ocean-surface mb-4 uppercase">
                    {article.category}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl tracking-wider mb-3">
                    {article.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <time className="text-xs text-white/30 tracking-wider">
                    {article.date}
                  </time>
                </GlassCard>
              ))}
            </div>
          )}

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {newsCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-xs tracking-[0.2em] transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-ocean-surface text-ocean-deep font-semibold"
                    : "glass text-white/60 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {filtered.map((article, i) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass glass-hover rounded-xl p-6 cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] tracking-[0.2em] text-ocean-surface uppercase">
                    {article.category}
                  </span>
                  <time className="text-xs text-white/30 tracking-wider">
                    {article.date}
                  </time>
                </div>
                <h3 className="font-display text-lg tracking-wider mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {article.excerpt}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </OceanBackground>
    </>
  );
}
