import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function LocalWhyChoose({ area }: { area: string }) {
  const points = [
    `Dedicated collection rounds through ${area} and neighbouring localities, so pickups don't get lost in a citywide queue.`,
    "Every drive and device is logged against a manifest the moment it leaves your premises — full chain of custody, not just a promise.",
    "Data-bearing devices are wiped or physically destroyed before they ever reach the sorting floor, with a certificate to prove it.",
    "No cost, no hidden charges for household and small-office pickups — ever.",
  ];

  return (
    <section className="section-padding bg-ink-50/60">
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-ink-100">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/hero-ewaste.jpg"
                alt={`E-waste collected for recycling from ${area}, Chennai`}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/10 to-transparent" />
            </div>
            <div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/10 bg-ink-950/70 px-4 py-3 backdrop-blur-sm">
              <p className="text-sm font-semibold text-white">Serving {area} residents & businesses</p>
              <p className="text-xs text-ink-300">Certified, compliant, zero-landfill recycling</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <SectionHeading
            align="left"
            eyebrow="Why Choose Us"
            title={`Why ${area} chooses TEKREC`}
            description="A local pickup service backed by the documentation and process discipline larger clients demand."
          />
          <ul className="mt-8 flex flex-col gap-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-600" />
                <span className="text-ink-700">{point}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </section>
  );
}
