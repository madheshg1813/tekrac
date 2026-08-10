import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { services } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function ServicesGrid() {
  return (
    <section className="section-padding bg-white">
      <Container className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <FadeIn key={service.slug} delay={(index % 3) * 0.06}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col gap-5 rounded-2xl border border-ink-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  <Icon className="size-6" />
                </span>
                <div className="flex flex-1 flex-col gap-2">
                  <h3 className="text-lg font-bold text-ink-900">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-500">{service.description}</p>
                </div>
                <ul className="flex flex-col gap-2 border-t border-ink-100 pt-4">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-ink-600">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-600" />
                      {point}
                    </li>
                  ))}
                </ul>
                <span className="flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                  Learn more
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </FadeIn>
          );
        })}
      </Container>
    </section>
  );
}
