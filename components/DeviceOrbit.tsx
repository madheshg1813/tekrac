"use client";

import { motion } from "framer-motion";
import {
  Battery,
  HardDrive,
  Laptop,
  Printer,
  Recycle,
  Server,
  Smartphone,
} from "lucide-react";

const orbitDevices = [
  { icon: Laptop, angle: 0 },
  { icon: Server, angle: 60 },
  { icon: Smartphone, angle: 120 },
  { icon: HardDrive, angle: 180 },
  { icon: Printer, angle: 240 },
  { icon: Battery, angle: 300 },
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

      {/* orbiting device icons */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {orbitDevices.map(({ icon: Icon, angle }) => (
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
              className="flex size-12 items-center justify-center rounded-2xl border border-ink-100 bg-white text-brand-700 shadow-soft md:size-14"
            >
              <Icon className="size-5 md:size-6" strokeWidth={1.75} />
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
