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

        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <FadeIn key={cert.title} delay={index * 0.06}>
                <div className="flex h-full flex-col items-center gap-2 rounded-2xl border border-ink-100 bg-white p-3.5 text-center shadow-soft sm:gap-4 sm:p-7">
                  <span className="flex size-10 items-center justify-center rounded-full bg-brand-50 text-brand-700 sm:size-14">
                    <Icon className="size-5 sm:size-7" />
                  </span>
                  <h3 className="text-sm font-bold leading-snug text-ink-900 sm:text-base">{cert.title}</h3>
                  <p className="text-xs leading-relaxed text-ink-500 sm:text-sm">{cert.description}</p>
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
