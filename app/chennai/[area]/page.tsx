import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  buildAreaFaqs,
  chennaiAreas,
  getChennaiAreaBySlug,
  isAreaPublished,
} from "@/lib/locations";
import { services } from "@/lib/data";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LocalHighlights } from "@/sections/locations/LocalHighlights";
import { LocalWhyChoose } from "@/sections/locations/LocalWhyChoose";
import { LocalPickupForm } from "@/sections/locations/LocalPickupForm";
import { ServiceAreaGrid } from "@/sections/locations/ServiceAreaGrid";
import { CoverageGrid } from "@/sections/locations/CoverageGrid";
import { Stats } from "@/sections/home/Stats";
import { WhyChooseUs } from "@/sections/home/WhyChooseUs";
import { TestimonialsSection } from "@/sections/home/TestimonialsSection";
import { ProcessTimeline } from "@/sections/process/ProcessTimeline";
import { FAQSection } from "@/sections/shared/FAQSection";
import { ContactCTA } from "@/sections/shared/ContactCTA";

export const revalidate = 3600;

export function generateStaticParams() {
  return chennaiAreas.map((area) => ({ area: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string }>;
}): Promise<Metadata> {
  const { area: slug } = await params;
  const found = getChennaiAreaBySlug(slug);
  if (!found || !isAreaPublished(found.index)) return {};

  const { area } = found;

  return {
    title: `E-Waste Recycling in ${area.area}, Chennai`,
    description: `Government-authorised e-waste collection, secure data destruction and certified recycling in ${area.area} (${area.pincode}), Chennai. Free doorstep pickup.`,
    alternates: { canonical: `/chennai/${area.slug}` },
  };
}

const acceptedItems = services.slice(0, 6);

export default async function ChennaiAreaPage({
  params,
}: {
  params: Promise<{ area: string }>;
}) {
  const { area: slug } = await params;
  const found = getChennaiAreaBySlug(slug);

  if (!found || !isAreaPublished(found.index)) notFound();

  const { area } = found;

  return (
    <>
      <PageHero
        eyebrow={`Pincode ${area.pincode}`}
        crumb={area.area}
        title={`E-Waste Recycling in ${area.area}, Chennai`}
        description={`Certified, government-authorised e-waste collection and recycling for households, offices and institutions in ${area.area} — with free doorstep pickup and secure data destruction.`}
      />

      <LocalHighlights area={area.area} pincode={area.pincode} />

      <section className="section-padding bg-ink-50/60">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="What We Collect"
            title={`Electronics we recycle in ${area.area}`}
            description="Any of these categories can be scheduled for pickup — no minimum quantity for households."
          />
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
            {acceptedItems.map((service, index) => {
              const Icon = service.icon;
              return (
                <FadeIn key={service.slug} delay={(index % 3) * 0.06}>
                  <div className="flex h-full flex-col gap-2 rounded-2xl border border-ink-100 bg-white p-3.5 shadow-soft sm:gap-4 sm:p-6">
                    <span className="flex size-9 items-center justify-center rounded-xl bg-brand-50 text-brand-700 sm:size-11">
                      <Icon className="size-4 sm:size-5" />
                    </span>
                    <h3 className="text-sm font-bold leading-snug text-ink-900 sm:text-base">
                      {service.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-ink-500 sm:text-sm">
                      {service.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      <Stats />

      <LocalWhyChoose area={area.area} />

      <ProcessTimeline />
      <WhyChooseUs />
      <TestimonialsSection />

      <ServiceAreaGrid
        excludeSlug={area.slug}
        limit={8}
        title="Nearby Chennai localities we also cover"
        description={`Serving neighbourhoods around ${area.area} — new localities added every day.`}
      />

      <LocalPickupForm area={area.area} pincode={area.pincode} />

      <FAQSection
        items={buildAreaFaqs(area.area)}
        title={`FAQs — e-waste recycling in ${area.area}`}
        description={`Common questions from ${area.area} residents and businesses about our pickup and recycling process.`}
      />

      <CoverageGrid excludeSlug={area.slug} />

      <ContactCTA
        title={`Schedule your free e-waste pickup in ${area.area}`}
        description={`Tell us your locality and device details — we'll confirm a pickup slot for ${area.area} (${area.pincode}) within 24 hours.`}
      />
    </>
  );
}
