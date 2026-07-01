"use client";

import { motion } from "framer-motion";

export default function OceanWave() {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">

      {/* Wave 1 */}
      <motion.svg
        animate={{ x: [-80, 0, -80] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="relative block w-[200%] h-[180px]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="rgba(94,220,255,0.18)"
          d="M0,224L80,202.7C160,181,320,139,480,138.7C640,139,800,181,960,192C1120,203,1280,181,1360,170.7L1440,160V320H0Z"
        />
      </motion.svg>

      {/* Wave 2 */}
      <motion.svg
        animate={{ x: [0, -60, 0] }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 block w-[200%] h-[150px]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="rgba(255,255,255,0.08)"
          d="M0,192L80,197.3C160,203,320,213,480,192C640,171,800,117,960,122.7C1120,128,1280,192,1360,224L1440,256V320H0Z"
        />
      </motion.svg>

    </div>
  );
}