"use client";

export default function WaveAnimation() {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
      <svg
        className="relative block w-[200%] h-[120px] md:h-[180px] animate-wave"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"
          fill="rgba(79, 195, 247, 0.08)"
        />
      </svg>
      <svg
        className="absolute bottom-0 block w-[200%] h-[100px] md:h-[150px] animate-wave-slow"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,80 C200,20 400,100 600,80 C800,60 1000,100 1200,80 L1200,120 L0,120 Z"
          fill="rgba(255, 255, 255, 0.05)"
        />
      </svg>
      <svg
        className="absolute bottom-0 block w-[200%] h-[80px] md:h-[120px] animate-wave"
        style={{ animationDelay: "-4s" }}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,90 C300,50 500,110 600,90 C700,70 900,110 1200,90 L1200,120 L0,120 Z"
          fill="rgba(79, 195, 247, 0.12)"
        />
      </svg>
    </div>
  );
}
