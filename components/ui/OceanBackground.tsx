"use client";

import { ReactNode, HTMLAttributes } from "react";

type OceanBackgroundProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  variant?: "hero" | "section" | "deep";
};

const gradients = {
  hero: "ocean-gradient",
  section: "bg-ocean-dark",
  deep: "bg-ocean-deep",
};

export default function OceanBackground({
  children,
  className = "",
  variant = "section",
  ...props
}: OceanBackgroundProps) {
  return (
    <div
      className={`relative overflow-hidden ${gradients[variant]} ${className}`}
      {...props}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-ocean-surface/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-ocean-bright/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-ocean-surface/5 rounded-full blur-[80px]" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
