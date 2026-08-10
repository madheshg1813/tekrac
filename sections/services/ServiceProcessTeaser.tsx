import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { processSteps } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function ServiceProcessTeaser() {
  return (
    <section className="section-padding bg-ink-50/60">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="How It Works"
          title="Our certified recycling process"
          description="Every service follows the same auditable, six-step process from collection through to certification."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <FadeIn key={step.step} delay={index * 0.05}>
                <div className="flex flex-col items-center gap-3 rounded-2xl border border-ink-100 bg-white p-5 text-center">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon className="size-5" />
                  </span>
                  <p className="text-sm font-semibold text-ink-900">{step.title}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Link
            href="/process"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:underline"
          >
            View the full recycling process
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
