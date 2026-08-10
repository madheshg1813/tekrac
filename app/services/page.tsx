import type { Metadata } from "next";

import { PageHero } from "@/components/PageHero";
import { ServicesGrid } from "@/sections/services/ServicesGrid";
import { WhyChooseUs } from "@/sections/home/WhyChooseUs";
import { ContactCTA } from "@/sections/shared/ContactCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore TEKREC's full range of e-waste services: collection, secure data destruction, IT asset disposal, computer and laptop recycling, server disposal and more.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        crumb="Services"
        title="End-to-end e-waste recycling services"
        description="From a single laptop to an entire data centre, our certified services cover every stage of the e-waste lifecycle."
      />
      <ServicesGrid />
      <WhyChooseUs />
      <ContactCTA />
    </>
  );
}
