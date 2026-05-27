"use client";

import { motion } from "framer-motion";
import { Logo } from "./Logo";

const links = [
  { label: "The Missing Market", href: "#missing-market" },
  { label: "The Question", href: "#question" },
  { label: "Early Circle", href: "#early-circle" },
  { label: "Market Layer", href: "#market-layer" },
  { label: "Join", href: "#join" }
];

export function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-40"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="#top" className="rounded-full focus:outline-none focus:ring-2 focus:ring-aqua/70">
          <Logo />
        </a>
        <div className="hidden items-center gap-1 rounded-full border border-aqua/15 bg-[rgba(125,229,62,0.06)] p-1 backdrop-blur-xl md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-white/70 transition hover:bg-[rgba(125,229,62,0.1)] hover:text-white focus:outline-none focus:ring-2 focus:ring-aqua/60"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
