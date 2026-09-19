import { CheckCircle2 } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function LocalWhyChoose({ area, pincode }: { area: string; pincode: string }) {
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
          <div className="relative">
            <div className="aspect-square w-full max-w-md rounded-[2rem] bg-gradient-to-br from-brand-50 to-white p-2 shadow-soft ring-1 ring-ink-100">
              <div className="flex h-full w-full flex-col justify-between rounded-[1.6rem] bg-gradient-to-br from-ink-950 to-ink-900 p-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-400">
                  Pincode {pincode}
                </p>
                <div>
                  <p className="text-4xl font-bold text-white">{area}</p>
                  <p className="mt-2 text-sm text-ink-300">
                    Dedicated collection rounds running every week
                  </p>
                </div>
                <div className="h-px w-full bg-white/10" />
                <p className="text-sm text-ink-400">
                  Certified, CPCB-authorised recycling — start to finish.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-6 hidden w-56 rounded-2xl border border-ink-100 bg-white p-5 shadow-lift md:block">
              <p className="text-3xl font-bold text-brand-600">24 hrs</p>
              <p className="mt-1 text-xs font-medium text-ink-500">
                Average pickup confirmation time
              </p>
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
