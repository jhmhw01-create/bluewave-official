import Link from "next/link";
import { footerLinks } from "@/lib/data/navigation";

export default function Footer() {
  return (
    <footer className="relative bg-ocean-deep border-t border-white/10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-ocean-surface/5 rounded-full blur-[80px]" />
      </div>

      <div className="container relative z-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <h3 className="font-display text-2xl font-bold tracking-[0.25em] mb-4">
              BLUEWAVE
            </h3>
            <p className="text-sm text-white/50 tracking-wider mb-2">
              THE TIDE OF YOUTH
            </p>
            <p className="text-sm text-white/40 leading-relaxed">
              다섯 개의 파도가 만나
              <br />
              하나의 바다가 된다.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.25em] text-ocean-surface mb-6 uppercase">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.25em] text-ocean-surface mb-6 uppercase">
              Fan
            </h4>
            <ul className="space-y-3">
              {footerLinks.fan.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.25em] text-ocean-surface mb-6 uppercase">
              Social
            </h4>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 tracking-wider">
            © 2026 BLUEWAVE Official. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/30">
            <a href="#" className="hover:text-white/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white/60 transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
