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
    <div className="relative mx-auto aspect-square w-full max-w-md">
      {/* concentric rings */}
      <div className="absolute inset-0 rounded-full border border-dashed border-brand-500/20" />
      <div className="absolute inset-[12%] rounded-full border border-brand-500/15" />

      {/* center recycle mark */}
      <div className="absolute left-1/2 top-1/2 flex size-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lift md:size-28">
        <Recycle className="size-11 md:size-12" strokeWidth={1.75} />
      </div>

      {/* orbiting lifecycle stages */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {orbitStages.map(({ icon: Icon, label, angle }) => (
          <div
            key={angle}
            className="absolute left-1/2 top-1/2 size-12 md:size-14"
            style={{
              transform: `rotate(${angle}deg) translate(0, -10.5rem) rotate(-${angle}deg)`,
            }}
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="flex flex-col items-center gap-1.5"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl border border-ink-100 bg-white text-brand-700 shadow-soft md:size-14">
                <Icon className="size-5 md:size-6" strokeWidth={1.75} />
              </div>
              <span className="whitespace-nowrap text-[0.65rem] font-semibold text-ink-600">
                {label}
              </span>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
