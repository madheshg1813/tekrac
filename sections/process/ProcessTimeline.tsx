import { processSteps } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function ProcessTimeline() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-7 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-brand-500 via-ink-200 to-transparent md:block" />

          <div className="flex flex-col gap-10">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <FadeIn key={step.step} delay={index * 0.08}>
                  <div className="relative flex flex-col gap-5 md:flex-row md:items-start md:gap-8">
                    <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-lift">
                      <Icon className="size-6" />
                      <span className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full bg-ink-900 text-[0.65rem] font-bold text-white">
                        {step.step}
                      </span>
                    </div>
                    <div className="flex-1 rounded-2xl border border-ink-100 bg-ink-50/60 p-7">
                      <h3 className="text-xl font-bold text-ink-900">{step.title}</h3>
                      <p className="mt-2 leading-relaxed text-ink-500">{step.description}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
