import type { Metadata } from "next";

import { chennaiAreas, getPublishedChennaiAreas, buildAreaFaqs } from "@/lib/locations";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { TrustedBy } from "@/sections/home/TrustedBy";
import { ServicesGrid } from "@/sections/services/ServicesGrid";
import { WhyChooseUs } from "@/sections/home/WhyChooseUs";
import { ServiceAreaGrid } from "@/sections/locations/ServiceAreaGrid";
import { FAQSection } from "@/sections/shared/FAQSection";
import { ContactCTA } from "@/sections/shared/ContactCTA";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "E-Waste Recycling in Chennai",
  description:
    "TEKREC provides government-authorised e-waste collection, secure data destruction and certified recycling across Chennai, with dedicated locality pages for pincodes citywide.",
  alternates: { canonical: "/chennai/e-waste-recycling-service" },
};

export default function ChennaiPillarPage() {
  const published = getPublishedChennaiAreas();

  return (
    <>
      <PageHero
        eyebrow="Chennai"
        crumb="Chennai"
        title="E-Waste Recycling Services Across Chennai"
        description="Free doorstep pickup, certified data destruction and CPCB-authorised recycling for households, corporates and institutions throughout Chennai."
      />

      <TrustedBy />

      <section className="section-padding bg-white">
        <Container className="flex flex-col gap-6 text-center">
          <FadeIn className="mx-auto max-w-3xl">
            <p className="leading-relaxed text-ink-600 md:text-lg">
              We&apos;re steadily rolling out a dedicated page for every Chennai locality we
              serve — currently live in {published.length} of {chennaiAreas.length} planned
              pincodes, with a new area added every day. Find your neighbourhood below, or
              request a pickup directly and we&apos;ll cover it regardless.
            </p>
          </FadeIn>
        </Container>
      </section>

      <ServicesGrid />
      <WhyChooseUs />

      <ServiceAreaGrid
        title="Chennai localities we serve"
        description="Every locality page below is live and ready for pickup requests — more are added daily."
      />

      <FAQSection
        items={buildAreaFaqs("Chennai")}
        title="FAQs — e-waste recycling in Chennai"
        description="Common questions about our citywide collection and recycling process."
      />

      <ContactCTA
        title="Schedule your free e-waste pickup in Chennai"
        description="Tell us your locality and device details — we'll confirm a pickup slot within 24 hours."
      />
    </>
  );
}
