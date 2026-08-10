import { CheckCircle2 } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

const points = [
  "Government-authorised e-waste collection & recycling facility",
  "Certified secure data destruction for every device processed",
  "End-to-end reporting for EPR and audit compliance",
];

export function CompanyIntro() {
  return (
    <section className="section-padding bg-white">
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <FadeIn>
          <div className="relative">
            <div className="aspect-square w-full max-w-md rounded-[2rem] bg-gradient-to-br from-brand-50 to-white p-2 shadow-soft ring-1 ring-ink-100">
              <div className="flex h-full w-full flex-col justify-between rounded-[1.6rem] bg-gradient-to-br from-ink-950 to-ink-900 p-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-400">
                  Since 2013
                </p>
                <div>
                  <p className="text-5xl font-bold text-white">12+</p>
                  <p className="mt-2 text-sm text-ink-300">
                    Years of dedicated e-waste recycling and sustainability leadership
                  </p>
                </div>
                <div className="h-px w-full bg-white/10" />
                <p className="text-sm text-ink-400">
                  Trusted by 480+ corporates, institutions and government bodies nationwide.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-6 hidden w-56 rounded-2xl border border-ink-100 bg-white p-5 shadow-lift md:block">
              <p className="text-3xl font-bold text-brand-600">18,500+</p>
              <p className="mt-1 text-xs font-medium text-ink-500">
                Tons of e-waste responsibly processed
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <SectionHeading
            align="left"
            eyebrow="About TEKREC"
            title="A trusted name in secure, sustainable e-waste management"
            description="TEKREC E Waste Recycling helps corporates, institutions and households retire their electronic assets safely and responsibly. From doorstep collection to certified data destruction and material recovery, we manage the entire lifecycle so you don't have to worry about compliance, data risk or environmental impact."
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
