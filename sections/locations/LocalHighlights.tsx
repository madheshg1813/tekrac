import { Award, Clock, FileCheck2, ShieldCheck, Truck } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

const trustPoints = [
  { icon: ShieldCheck, label: "CPCB Authorised" },
  { icon: Truck, label: "Free Doorstep Pickup" },
  { icon: Award, label: "Certificate Provided" },
];

export function LocalHighlights({ area, pincode }: { area: string; pincode: string }) {
  const quickFacts = [
    { icon: FileCheck2, label: "Coverage", value: `${area} & the ${pincode} pincode` },
    { icon: Clock, label: "Response Time", value: "Pickup slot confirmed within 24 hours" },
    { icon: Award, label: "Documentation", value: "Manifest + recycling certificate, every job" },
  ];

  return (
    <section className="section-padding bg-white">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {trustPoints.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="flex items-center gap-2 rounded-full border border-ink-100 bg-ink-50/60 px-4 py-2 text-sm font-semibold text-ink-700"
            >
              <Icon className="size-4 text-brand-600" />
              {label}
            </span>
          ))}
        </div>

        <FadeIn className="mx-auto flex max-w-3xl flex-col gap-4 text-center">
          <p className="leading-relaxed text-ink-600 md:text-lg">
            TEKREC runs regular collection rounds across {area} and the surrounding {pincode}{" "}
            pincode, covering everything from a single household laptop to a full corporate IT
            asset disposal.
          </p>
          <p className="leading-relaxed text-ink-500">
            Every device is logged against a signed handover manifest the moment it leaves your
            premises, data-bearing drives are wiped or physically destroyed before sorting begins,
            and the job closes out with a certificate of recycling you can hand straight to your
            compliance team.
          </p>
        </FadeIn>

        <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-5 sm:grid-cols-3">
          {quickFacts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <FadeIn key={fact.label} delay={index * 0.06}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-ink-100 bg-ink-50/60 p-6">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-brand-600 text-white">
                    <Icon className="size-5" />
                  </span>
                  <p className="text-sm font-semibold text-ink-900">{fact.label}</p>
                  <p className="text-sm leading-relaxed text-ink-500">{fact.value}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
