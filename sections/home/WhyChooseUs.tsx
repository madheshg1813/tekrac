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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyUsPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <FadeIn key={point.title} delay={index * 0.06}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-ink-100 bg-gradient-to-b from-ink-50/60 to-white p-7 transition-shadow duration-300 hover:shadow-lift">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-ink-900 text-brand-400">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="text-lg font-bold text-ink-900">{point.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-500">{point.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
