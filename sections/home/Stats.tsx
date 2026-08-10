import { stats } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { FadeIn } from "@/components/ui/FadeIn";

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-30" />
      <Container className="relative grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <FadeIn key={stat.label} delay={index * 0.08} className="text-center">
              <div className="flex flex-col items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-full bg-white/5 text-brand-400 ring-1 ring-white/10">
                  <Icon className="size-6" />
                </span>
                <p className="text-3xl font-bold text-white md:text-4xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs font-medium text-ink-400 md:text-sm">{stat.label}</p>
              </div>
            </FadeIn>
          );
        })}
      </Container>
    </section>
  );
}
