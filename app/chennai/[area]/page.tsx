import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Phone } from "lucide-react";

import {
  buildAreaFaqs,
  chennaiAreas,
  getChennaiAreaBySlug,
  isAreaPublished,
} from "@/lib/locations";
import { services } from "@/lib/data";
import { siteConfig } from "@/lib/constants";
import { PageHero } from "@/components/PageHero";
import { FloatingContact } from "@/components/FloatingContact";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LocalCoverageRadar } from "@/sections/locations/LocalCoverageRadar";
import { RollingMarquee } from "@/sections/locations/RollingMarquee";
import { LocalHighlights } from "@/sections/locations/LocalHighlights";
import { LocalWhyChoose } from "@/sections/locations/LocalWhyChoose";
import { LocalPickupForm } from "@/sections/locations/LocalPickupForm";
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

const additionalAccepted = [
  "Televisions & CRT Monitors",
  "Batteries (Li-ion & Lead Acid)",
  "Networking Equipment",
  "Printers & Copiers",
  "ACs, Fridges & Appliances",
  "Mixed E-Scrap",
];

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
        crumbs={[{ label: "Chennai", href: "/chennai/e-waste-recycling-service" }]}
        title={
          <>
            E-Waste Recycling in <span className="whitespace-nowrap">{area.area}</span>
          </>
        }
        description={`Certified, government-authorised e-waste collection and recycling for households, offices and institutions in ${area.area} — with free doorstep pickup and secure data destruction.`}
        ctas={[
          { label: siteConfig.phone, href: siteConfig.phoneHref, icon: Phone, variant: "outline" },
          { label: "Request Pickup", href: "/contact", icon: ArrowRight },
        ]}
        trustNote="Government Authorised · Free Doorstep Pickup · Certificate Issued"
      />

      <FloatingContact context={area.area} />

      <LocalHighlights area={area.area} pincode={area.pincode} />

      <LocalCoverageRadar area={area.area} pincode={area.pincode} />

      <RollingMarquee
        items={[
          "Free Doorstep Pickup",
          "CPCB Authorised",
          `Serving ${area.area}`,
          "Certificate Issued",
          "Secure Data Destruction",
          "Zero Landfill Commitment",
          "Same-Day Slots Available",
        ]}
      />

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

          <div className="hidden flex-col items-center gap-3 pt-2 text-center sm:flex">
            <p className="text-sm font-semibold text-ink-700">
              If it runs on power or holds a battery, we take it — also accepted:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {additionalAccepted.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-ink-200 bg-white px-3 py-1 text-xs font-medium text-ink-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Stats />

      <LocalWhyChoose area={area.area} pincode={area.pincode} />

      <ProcessTimeline />
      <WhyChooseUs />
      <TestimonialsSection
        title={`Trusted by residents and businesses across Chennai`}
        description={`Real feedback from customers who've scheduled a pickup in ${area.area} and beyond.`}
      />

      <LocalPickupForm area={area.area} pincode={area.pincode} />

      <FAQSection
        items={buildAreaFaqs(area.area)}
        title={`FAQs — e-waste recycling in ${area.area}`}
        description={`Common questions from ${area.area} residents and businesses about our pickup and recycling process.`}
      />

      <CoverageGrid
        excludeSlug={area.slug}
        title="Nearby Chennai localities we also cover"
        description={`Serving neighbourhoods around ${area.area} — new localities added every day.`}
      />

      <ContactCTA
        title={`Schedule your free e-waste pickup in ${area.area}`}
        description={`Tell us your locality and device details — we'll confirm a pickup slot for ${area.area} (${area.pincode}) within 24 hours.`}
      />
    </>
  );
}
