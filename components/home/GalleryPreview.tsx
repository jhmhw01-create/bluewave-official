"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { galleryItems } from "@/lib/data/gallery";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import OceanBackground from "@/components/ui/OceanBackground";

const previewItems = galleryItems.slice(0, 8);

export default function GalleryPreview() {
  return (
    <OceanBackground variant="deep" className="section-padding" id="gallery">
      <div className="container">
        <SectionHeading
          subtitle="Gallery"
          title="CAPTURED MOMENTS"
          description="BLUEWAVE의 순간들을 담은 갤러리. 무대 위, 무대 밖, 그 모든 순간."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {previewItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            >
              <Link href="/gallery" className="block group">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden glass">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-ocean-deep/0 group-hover:bg-ocean-deep/40 transition-colors duration-300 flex items-end p-4">
                    <span className="text-xs tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                      {item.alt}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button href="/gallery" variant="outline">
            VIEW FULL GALLERY
          </Button>
        </motion.div>
      </div>
    </OceanBackground>
  );
}
