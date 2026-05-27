import Image from "next/image";
import logoImage from "@/logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-label="CauseTrade">
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-[1rem] border border-aqua/20 bg-[#0a2913] p-0.5 shadow-[0_18px_45px_rgba(0,0,0,0.34)] ring-1 ring-aqua/20">
        <div className="pointer-events-none absolute inset-0 rounded-[1rem] bg-gradient-to-br from-aqua/12 via-transparent to-transparent" />
        <Image
          src={logoImage}
          alt=""
          fill
          priority
          sizes="48px"
          className="rounded-[0.85rem] object-cover saturate-[0.96] contrast-[1.03]"
        />
      </div>
      <span className="font-display text-lg font-medium tracking-[0.18em] text-white">
        CAUSETRADE
      </span>
    </div>
  );
}
