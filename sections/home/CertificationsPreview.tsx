import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { certifications } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function CertificationsPreview() {
  return (
    <section className="section-padding bg-ink-50/60">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Certifications & Compliance"
          title="Recycling you can verify and trust"
          description="Our processes are benchmarked against national and international standards for environmental management, data security and responsible recycling."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <FadeIn key={cert.title} delay={index * 0.06}>
                <div className="flex h-full flex-col items-center gap-4 rounded-2xl border border-ink-100 bg-white p-7 text-center shadow-soft">
                  <span className="flex size-14 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                    <Icon className="size-7" />
                  </span>
                  <h3 className="text-base font-bold text-ink-900">{cert.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-500">{cert.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Link
            href="/certifications"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:underline"
          >
            View all certifications & compliance details
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
