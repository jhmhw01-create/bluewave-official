"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
  className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
    scrolled
      ? "bg-[#031325]/75 backdrop-blur-2xl border-b border-cyan-300/10 shadow-lg"
      : "bg-transparent"
  }`}
>
      <nav className="container flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="group">
          <span
  className="
  font-display
  text-xl
  md:text-2xl
  font-bold
  tracking-[0.28em]
  bg-gradient-to-r
  from-cyan-300
  via-white
  to-sky-300
  bg-clip-text
  text-transparent
  drop-shadow-[0_0_18px_rgba(94,220,255,.6)]
  transition-all
  duration-300
  group-hover:drop-shadow-[0_0_30px_rgba(94,220,255,.9)]
"
>
  BLUEWAVE
</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs tracking-[0.2em] font-medium transition-colors duration-300 relative ${
                  isActive
                    ? "text-ocean-surface"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-ocean-surface"
                  />
                )}
              </Link>
            );
          })}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-white"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white"
          />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-ocean-deep/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="block py-3 text-sm tracking-[0.2em] text-white/80 hover:text-ocean-surface transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
