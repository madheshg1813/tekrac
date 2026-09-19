"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function CoverageRadar({ area }: { area: string }) {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center rounded-[2rem] border border-ink-100 bg-white p-6 shadow-soft">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="absolute size-[80%] rounded-full border-2 border-brand-500/30"
          animate={{ scale: [0.3, 1], opacity: [0.7, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: i }}
        />
      ))}

      <div className="absolute inset-[18%] rounded-full border border-dashed border-ink-200" />

      <div className="absolute flex size-28 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lift sm:size-32 md:size-36">
        <MapPin className="size-12 sm:size-14 md:size-16" strokeWidth={1.5} />
      </div>

      <div className="absolute left-3 top-6 flex items-center gap-2 rounded-xl border border-ink-100 bg-white px-3 py-2 shadow-soft sm:left-5 sm:top-8">
        <span className="size-2 shrink-0 rounded-full bg-brand-500" />
        <span className="whitespace-nowrap text-xs font-semibold text-ink-700 sm:text-sm">
          Live in {area}
        </span>
      </div>

      <div className="absolute bottom-8 right-3 rounded-xl border border-ink-100 bg-white px-3.5 py-2.5 shadow-soft sm:bottom-10 sm:right-5">
        <p className="text-lg font-bold text-brand-600 sm:text-xl">24 hrs</p>
        <p className="whitespace-nowrap text-[0.65rem] font-medium text-ink-500 sm:text-xs">
          Pickup Confirmed
        </p>
      </div>

      <div className="absolute right-4 top-3 rounded-xl border border-ink-100 bg-white px-3 py-2 shadow-soft sm:top-5">
        <span className="whitespace-nowrap text-xs font-semibold text-ink-700 sm:text-sm">
          Free Pickup
        </span>
      </div>
    </div>
  );
}
