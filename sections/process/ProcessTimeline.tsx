import { processSteps } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function ProcessTimeline() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-7 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-brand-500 via-ink-200 to-transparent md:block" />

          <div className="flex flex-col gap-4 sm:gap-10">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <FadeIn key={step.step} delay={index * 0.08}>
                  <div className="relative flex items-start gap-3 sm:gap-8">
                    <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white shadow-lift sm:size-14 sm:rounded-2xl">
                      <Icon className="size-4 sm:size-6" />
                      <span className="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full bg-ink-900 text-[0.6rem] font-bold text-white sm:-right-2 sm:-top-2 sm:size-6 sm:text-[0.65rem]">
                        {step.step}
                      </span>
                    </div>
                    <div className="flex-1 rounded-xl border border-ink-100 bg-ink-50/60 p-3.5 sm:rounded-2xl sm:p-7">
                      <h3 className="text-sm font-bold leading-snug text-ink-900 sm:text-xl">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-ink-500 sm:mt-2 sm:text-base">
                        {step.description}
                      </p>
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
