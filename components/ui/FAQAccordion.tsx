"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HelpCircle, Plus } from "lucide-react";

import type { FAQItem } from "@/types";
import { cn } from "@/lib/utils";

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className={cn(
              "overflow-hidden rounded-2xl border bg-white transition-all duration-300",
              isOpen ? "border-brand-200 shadow-lift" : "border-ink-100 shadow-soft hover:shadow-lift"
            )}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span
                className={cn(
                  "flex size-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300",
                  isOpen ? "bg-brand-600 text-white" : "bg-brand-50 text-brand-700"
                )}
              >
                <HelpCircle className="size-5" />
              </span>
              <span className="flex-1 text-base font-semibold text-ink-900 md:text-lg">
                {item.question}
              </span>
              <span
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center rounded-full bg-ink-50 text-ink-500 transition-transform duration-300",
                  isOpen && "rotate-45 bg-brand-600 text-white"
                )}
              >
                <Plus className="size-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 pl-[4.5rem] text-sm leading-relaxed text-ink-500 md:text-base">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
