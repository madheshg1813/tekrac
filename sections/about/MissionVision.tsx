import { Compass, Target } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function MissionVision() {
  return (
    <section className="section-padding bg-ink-50/60">
      <Container className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <FadeIn>
          <div className="flex h-full flex-col gap-5 rounded-3xl border border-ink-100 bg-white p-10 shadow-soft">
            <span className="flex size-14 items-center justify-center rounded-2xl bg-brand-600 text-white">
              <Target className="size-7" />
            </span>
            <h3 className="text-2xl font-bold text-ink-900">Our Mission</h3>
            <p className="leading-relaxed text-ink-500">
              To make responsible e-waste recycling accessible, secure and effortless for every
              organisation and household, while safeguarding data privacy and protecting the
              environment through certified, transparent processes.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex h-full flex-col gap-5 rounded-3xl border border-ink-100 bg-white p-10 shadow-soft">
            <span className="flex size-14 items-center justify-center rounded-2xl bg-ink-900 text-brand-400">
              <Compass className="size-7" />
            </span>
            <h3 className="text-2xl font-bold text-ink-900">Our Vision</h3>
            <p className="leading-relaxed text-ink-500">
              To be India&apos;s most trusted e-waste recycling partner, building a circular
              economy where every electronic device is recovered, reused or recycled without harm
              to people or the planet.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
