import { industries } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function IndustriesGrid() {
  return (
    <section className="section-padding bg-white">
      <Container className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry, index) => {
          const Icon = industry.icon;
          return (
            <FadeIn key={industry.title} delay={(index % 3) * 0.06}>
              <div className="group flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-ink-100 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-ink-900 text-brand-400 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  <Icon className="size-7" />
                </span>
                <h3 className="text-xl font-bold text-ink-900">{industry.title}</h3>
                <p className="text-sm leading-relaxed text-ink-500">{industry.description}</p>
              </div>
            </FadeIn>
          );
        })}
      </Container>
    </section>
  );
}
