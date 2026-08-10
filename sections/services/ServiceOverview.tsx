import { CheckCircle2, Users } from "lucide-react";

import type { Service } from "@/types";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function ServiceOverview({ service }: { service: Service }) {
  return (
    <section className="section-padding bg-white">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:items-start">
        <FadeIn className="lg:col-span-3">
          <h2 className="text-2xl font-bold text-ink-900 md:text-3xl">Overview</h2>
          <p className="mt-4 leading-relaxed text-ink-600 md:text-lg">{service.heroDescription}</p>
          <p className="mt-4 leading-relaxed text-ink-500">{service.description}</p>

          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-ink-100 bg-ink-50/60 p-5">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
              <Users className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink-900">Ideal for</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {service.idealFor.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="lg:col-span-2">
          <div className="rounded-2xl border border-ink-100 bg-ink-50/60 p-7">
            <h3 className="text-lg font-bold text-ink-900">What&apos;s included</h3>
            <ul className="mt-5 flex flex-col gap-4">
              {service.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-600" />
                  <span className="text-sm leading-relaxed text-ink-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
