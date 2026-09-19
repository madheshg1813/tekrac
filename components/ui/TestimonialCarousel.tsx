"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

import type { Testimonial } from "@/types";
import { cn } from "@/lib/utils";

const avatarPalette = [
  "from-brand-500 to-brand-700",
  "from-ink-700 to-ink-900",
  "from-brand-600 to-ink-900",
  "from-brand-400 to-brand-600",
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [items.length]);

  const goTo = (next: number) => setIndex((next + items.length) % items.length);
  const current = items[index];

  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="relative overflow-hidden rounded-3xl border border-ink-100 bg-white p-8 pt-10 shadow-soft md:p-12 md:pt-12">
        <span className="absolute -left-3 -top-3 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lift">
          <Quote className="size-6" fill="currentColor" strokeWidth={0} />
        </span>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="relative flex flex-col gap-6 pt-4"
          >
            <div className="flex gap-1 text-brand-500">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star key={i} className="size-4 fill-brand-500" />
              ))}
            </div>
            <p className="text-lg leading-relaxed text-ink-800 md:text-xl">
              &ldquo;{current.quote}&rdquo;
            </p>
            <div className="flex items-center gap-4 border-t border-ink-100 pt-6">
              <span
                className={cn(
                  "flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white",
                  avatarPalette[index % avatarPalette.length]
                )}
              >
                {getInitials(current.name)}
              </span>
              <div>
                <p className="font-semibold text-ink-900">{current.name}</p>
                <p className="text-sm text-ink-500">
                  {current.role}, {current.company}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Previous testimonial"
          className="flex size-10 items-center justify-center rounded-full border border-ink-200 text-ink-700 transition-colors hover:border-brand-500 hover:text-brand-700"
        >
          <ChevronLeft className="size-4" />
        </button>

        <div className="flex items-center gap-2">
          {items.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === index ? "w-8 bg-brand-600" : "w-2 bg-ink-200 hover:bg-ink-300"
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Next testimonial"
          className="flex size-10 items-center justify-center rounded-full border border-ink-200 text-ink-700 transition-colors hover:border-brand-500 hover:text-brand-700"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
