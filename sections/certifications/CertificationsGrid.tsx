import { certifications } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function CertificationsGrid() {
  return (
    <section className="section-padding bg-white">
      <Container className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {certifications.map((cert, index) => {
          const Icon = cert.icon;
          return (
            <FadeIn key={cert.title} delay={index * 0.08}>
              <div className="flex h-full gap-6 rounded-2xl border border-ink-100 bg-white p-8 shadow-soft">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                  <Icon className="size-7" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-ink-900">{cert.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{cert.description}</p>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </Container>
    </section>
  );
}
