"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Leaf,
  Recycle,
  Laptop,
  Server,
  Smartphone,
  HardDrive,
  Cpu,
} from "lucide-react";

import { siteConfig } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const floatingBadges = [
  { icon: ShieldCheck, label: "Certified Secure", sub: "Data Destruction" },
  { icon: Leaf, label: "Zero Landfill", sub: "Commitment" },
  { icon: Recycle, label: "12+ Years", sub: "Recycling Experience" },
];

const impactStats = [
  { value: "250K+", label: "Devices Recycled" },
  { value: "18.5K+", label: "Tons Processed" },
  { value: "480+", label: "Corporate Clients" },
  { value: "0%", label: "Landfill Waste" },
];

const backgroundDevices = [
  { icon: Laptop, top: "8%", left: "6%", size: "size-16", rotate: "-12deg" },
  { icon: Server, top: "62%", left: "3%", size: "size-20", rotate: "8deg" },
  { icon: Smartphone, top: "20%", left: "88%", size: "size-12", rotate: "10deg" },
  { icon: HardDrive, top: "70%", left: "90%", size: "size-14", rotate: "-8deg" },
  { icon: Cpu, top: "4%", left: "45%", size: "size-10", rotate: "6deg" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-ink-950 pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-25" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
        {backgroundDevices.map(({ icon: Icon, top, left, size, rotate }, index) => (
          <Icon
            key={index}
            className={`absolute ${size} text-white/[0.04]`}
            style={{ top, left, transform: `rotate(${rotate})` }}
            strokeWidth={1.25}
          />
        ))}
      </div>

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="flex flex-col items-start gap-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-400"
            >
              <span className="h-px w-8 bg-brand-500" />
              Est. 2013 &middot; India&apos;s Trusted E-Waste Partner
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl font-bold leading-[1.12] text-white md:text-5xl lg:text-[3.25rem]"
            >
              Responsible E-Waste Recycling for a{" "}
              <span className="text-brand-400">Sustainable Future</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-xl border-l-2 border-brand-600/40 pl-5 text-base leading-relaxed text-ink-300 md:text-lg"
            >
              {siteConfig.tagline}. Secure, compliant and environmentally responsible electronic
              waste recycling solutions for businesses and individuals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button href="/contact" size="lg" icon={ArrowRight}>
                Request Pickup
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                icon={Phone}
                iconPosition="left"
                className="border-ink-700 bg-transparent text-white hover:border-brand-500 hover:text-brand-400"
              >
                Contact Us
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-2 grid w-full grid-cols-3 gap-6 border-t border-white/10 pt-7"
            >
              {floatingBadges.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex flex-col gap-2">
                  <span className="flex size-9 items-center justify-center rounded-lg border border-white/10 text-brand-400">
                    <Icon className="size-4" />
                  </span>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold text-white">{label}</p>
                    <p className="text-xs text-ink-400">{sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-900">
              <div className="flex items-center justify-between border-b border-white/10 px-7 py-5">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-400">
                  Impact Report
                </span>
                <Recycle className="size-5 text-brand-400" />
              </div>

              <div className="grid grid-cols-2 divide-x divide-y divide-white/10">
                {impactStats.map((item) => (
                  <div key={item.label} className="p-6">
                    <p className="text-2xl font-bold text-white md:text-3xl">{item.value}</p>
                    <p className="mt-1.5 text-xs text-ink-400">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 bg-brand-500/5 px-7 py-5">
                <p className="text-sm font-semibold text-brand-300">
                  &ldquo;Certified. Secure. Sustainable.&rdquo;
                </p>
                <p className="mt-1 text-xs text-ink-400">
                  Every device processed with full chain-of-custody tracking.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
