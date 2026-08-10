import { environmentalCommitments } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function EnvironmentalCommitment() {
  return (
    <section className="section-padding bg-white">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Environmental Commitment"
          title="Sustainability is built into every process"
          description="Our operations are designed around a single principle: minimise environmental impact at every stage of the recycling lifecycle."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {environmentalCommitments.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={index * 0.06}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-ink-100 p-7">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="font-bold text-ink-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-500">{item.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
