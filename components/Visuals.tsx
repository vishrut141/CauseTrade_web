"use client";

import { motion } from "framer-motion";

export function HeroVisual() {
  const nodes = [
    ["14%", "36%", "0s"],
    ["26%", "64%", "1.2s"],
    ["44%", "28%", "0.6s"],
    ["59%", "58%", "1.8s"],
    ["72%", "35%", "1s"],
    ["84%", "66%", "2.1s"]
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="hero-grid absolute left-1/2 top-1/2 h-[86rem] w-[86rem] -translate-x-1/2 -translate-y-1/2 opacity-70"
        animate={{ rotate: 360, scale: [1, 1.035, 1] }}
        transition={{ rotate: { duration: 90, repeat: Infinity, ease: "linear" }, scale: { duration: 14, repeat: Infinity } }}
      />
      <motion.div
        className="orbital-ring absolute left-1/2 top-[52%] h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full md:h-[46rem] md:w-[46rem]"
        animate={{ rotate: -360 }}
        transition={{ duration: 72, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="orbital-ring absolute left-1/2 top-[52%] h-[18rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-[100%] opacity-70 md:h-[24rem] md:w-[70rem]"
        animate={{ rotate: 360 }}
        transition={{ duration: 82, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-[52%] h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-aqua/10 blur-3xl"
        animate={{ opacity: [0.2, 0.42, 0.2], scale: [0.92, 1.08, 0.92] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-void via-void/80 to-transparent" />
      {nodes.map(([left, top, delay], index) => (
        <span
          key={`${left}-${top}`}
          className="absolute h-1.5 w-1.5 rounded-full bg-moss shadow-[0_0_24px_rgba(186,255,105,0.82)]"
          style={{ left, top, animation: `pulseNode 4.8s ${delay} infinite ease-in-out` }}
          aria-hidden="true"
        >
          <span className="absolute left-1/2 top-1/2 h-14 w-[1px] origin-top -translate-x-1/2 bg-gradient-to-b from-aqua/55 to-transparent" style={{ rotate: `${index * 27 + 12}deg` }} />
        </span>
      ))}
      <style jsx>{`
        @keyframes pulseNode {
          0%,
          100% {
            opacity: 0.32;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.9);
          }
        }
      `}</style>
    </div>
  );
}

export function NetworkVisual() {
  return (
    <div className="relative h-[28rem] overflow-hidden rounded-lg border border-white/10 bg-[#061017]/80">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(125,229,62,0.18),transparent_34%),linear-gradient(120deg,rgba(200,164,93,0.08),transparent_38%,rgba(125,229,62,0.08))]" />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-aqua/15"
        animate={{ rotate: 360 }}
        transition={{ duration: 54, repeat: Infinity, ease: "linear" }}
      />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 700 440" fill="none" aria-hidden="true">
        <path d="M58 302C153 214 216 292 300 216C400 126 472 154 642 90" stroke="url(#lineA)" strokeWidth="1.4" />
        <path d="M84 156C172 192 218 132 310 188C398 242 476 236 618 280" stroke="url(#lineB)" strokeWidth="1.2" />
        <path d="M110 360C228 322 308 354 390 272C466 196 522 196 638 220" stroke="rgba(200,164,93,.45)" strokeWidth="1" />
        <defs>
          <linearGradient id="lineA" x1="58" y1="302" x2="642" y2="90">
            <stop stopColor="#7de53e" stopOpacity=".05" />
            <stop offset=".52" stopColor="#7de53e" stopOpacity=".72" />
            <stop offset="1" stopColor="#c8a45d" stopOpacity=".25" />
          </linearGradient>
          <linearGradient id="lineB" x1="84" y1="156" x2="618" y2="280">
            <stop stopColor="#c8a45d" stopOpacity=".14" />
            <stop offset=".6" stopColor="#baff69" stopOpacity=".62" />
            <stop offset="1" stopColor="#7de53e" stopOpacity=".08" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-8 grid grid-cols-4 gap-6 opacity-30">
        {Array.from({ length: 16 }).map((_, index) => (
          <div key={index} className="rounded-full border border-white/10" />
        ))}
      </div>
    </div>
  );
}
