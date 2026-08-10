import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { services } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function RelatedServices({ currentSlug }: { currentSlug: string }) {
  const startIndex = services.findIndex((s) => s.slug === currentSlug);
  const related = Array.from({ length: 3 }, (_, i) => {
    const idx = (startIndex + i + 1) % services.length;
    return services[idx];
  });

  return (
    <section className="section-padding bg-white">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Explore More"
          title="Related services"
          description="Pair this service with other parts of our end-to-end e-waste management program."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {related.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.slug} delay={index * 0.06}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col gap-4 rounded-2xl border border-ink-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-bold text-ink-900">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-500">{service.description}</p>
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                    Learn more
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
