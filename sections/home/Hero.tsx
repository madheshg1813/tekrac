"use client";

import Image from "next/image";
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

const emblemLeaves = [0, 60, 120, 180, 240, 300];

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
            {/* recycling emblem — floating badge overlapping the panel's top-right corner */}
            <div className="pointer-events-none absolute -top-9 -right-9 z-10 size-28 md:-top-11 md:-right-11 md:size-32">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-brand-400/40"
              />
              {emblemLeaves.map((angle) => (
                <div
                  key={angle}
                  className="absolute left-1/2 top-1/2 flex size-5 items-center justify-center rounded-full bg-ink-950 text-brand-400 ring-4 ring-ink-950 md:size-6"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translate(0, -3.5rem) rotate(-${angle}deg)`,
                  }}
                >
                  <Leaf className="size-2.5 md:size-3" strokeWidth={2} />
                </div>
              ))}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-lift ring-4 ring-ink-950 md:size-16"
              >
                <Recycle className="size-6 md:size-7" strokeWidth={1.75} />
              </motion.div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-2xl">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/hero-ewaste.jpg"
                  alt="A bin overflowing with collected e-waste — keyboards, phones, remotes and circuit boards ready for recycling"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/25 to-ink-950/10" />
              </div>

              <div className="absolute left-5 top-5 md:left-6 md:top-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-ink-950/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                  <span className="size-1.5 rounded-full bg-brand-400" />
                  Live Impact
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <div className="grid grid-cols-2 gap-3">
                  {impactStats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-white/10 bg-ink-950/70 p-3 backdrop-blur-sm md:p-4"
                    >
                      <p className="text-lg font-bold text-white md:text-xl">{item.value}</p>
                      <p className="mt-0.5 text-[0.65rem] text-ink-300 md:text-xs">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
