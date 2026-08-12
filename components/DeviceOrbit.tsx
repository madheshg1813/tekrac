"use client";

import { motion } from "framer-motion";
import { Award, QrCode, Recycle, ShieldCheck, Truck, Wrench } from "lucide-react";

const orbitStages = [
  { icon: Truck, label: "Pickup", angle: 0 },
  { icon: QrCode, label: "Logged", angle: 60 },
  { icon: ShieldCheck, label: "Data Wipe", angle: 120 },
  { icon: Wrench, label: "Dismantle", angle: 180 },
  { icon: Recycle, label: "Recycle", angle: 240 },
  { icon: Award, label: "Certified", angle: 300 },
];

export function DeviceOrbit() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md [--orbit-r:5.5rem] sm:[--orbit-r:8rem] md:[--orbit-r:10.5rem]">
      {/* slowly spinning decorative rings */}
      <motion.div
        className="absolute inset-0 rounded-full border border-dashed border-brand-500/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-[12%] rounded-full border border-brand-500/15" />

      {/* center mark — this is what actually spins */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lift sm:size-20 md:size-28"
      >
        <Recycle className="size-7 sm:size-9 md:size-12" strokeWidth={1.75} />
      </motion.div>

      {/* fixed lifecycle stages — positioned once around the circle, never move */}
      {orbitStages.map(({ icon: Icon, label, angle }) => (
        <div
          key={angle}
          className="absolute left-1/2 top-1/2 size-10 sm:size-12 md:size-14"
          style={{
            transform: `rotate(${angle}deg) translate(0, calc(var(--orbit-r) * -1)) rotate(-${angle}deg)`,
          }}
        >
          <div className="flex flex-col items-center gap-1 sm:gap-1.5">
            <div className="flex size-10 items-center justify-center rounded-xl border border-ink-100 bg-white text-brand-700 shadow-soft sm:size-12 sm:rounded-2xl md:size-14">
              <Icon className="size-4 sm:size-5 md:size-6" strokeWidth={1.75} />
            </div>
            <span className="whitespace-nowrap text-[0.6rem] font-semibold text-ink-600 sm:text-[0.65rem]">
              {label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
