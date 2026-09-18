import { whyUsPoints } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built on trust, compliance and sustainability"
          description="We combine rigorous compliance standards with responsive service so your organisation can retire electronics with total confidence."
        />

        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
          {whyUsPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <FadeIn key={point.title} delay={index * 0.06}>
                <div className="flex h-full flex-col gap-2 rounded-2xl border border-ink-100 bg-gradient-to-b from-ink-50/60 to-white p-3.5 transition-shadow duration-300 hover:shadow-lift sm:gap-4 sm:p-7">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-ink-900 text-brand-400 sm:size-12">
                    <Icon className="size-4 sm:size-6" />
                  </span>
                  <h3 className="text-sm font-bold leading-snug text-ink-900 sm:text-lg">{point.title}</h3>
                  <p className="hidden text-sm leading-relaxed text-ink-500 sm:block">{point.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
