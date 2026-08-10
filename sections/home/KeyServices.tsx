import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { services } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function KeyServices() {
  const featured = services.slice(0, 6);

  return (
    <section className="section-padding bg-white">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="What We Do"
          title="Comprehensive e-waste management services"
          description="From collection to certified destruction, we offer a complete suite of services designed for modern enterprises and institutions."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.slug} delay={index * 0.06}>
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
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                    Learn more
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </FadeIn>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Button href="/services" variant="outline" size="lg">
            View All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
