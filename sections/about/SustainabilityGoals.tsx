import { sustainabilityGoals } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function SustainabilityGoals() {
  return (
    <section className="section-padding bg-ink-950">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          light
          eyebrow="Sustainability Goals"
          title="Our roadmap to a fully circular future"
          description="We hold ourselves accountable to measurable sustainability targets across our recycling network."
        />

        <div className="relative mx-auto grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {sustainabilityGoals.map((goal, index) => {
            const Icon = goal.icon;
            return (
              <FadeIn key={goal.year} delay={index * 0.08}>
                <div className="flex h-full gap-5 rounded-2xl border border-white/10 bg-white/5 p-7">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400">
                    <Icon className="size-6" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-400">
                      Target {goal.year}
                    </p>
                    <h3 className="mt-1 font-bold text-white">{goal.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-300">
                      {goal.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
