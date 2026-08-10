import type { Metadata } from "next";

import { Hero } from "@/sections/home/Hero";
import { TrustedBy } from "@/sections/home/TrustedBy";
import { CompanyIntro } from "@/sections/home/CompanyIntro";
import { DeviceLifecycle } from "@/sections/home/DeviceLifecycle";
import { KeyServices } from "@/sections/home/KeyServices";
import { Stats } from "@/sections/home/Stats";
import { WhyChooseUs } from "@/sections/home/WhyChooseUs";
import { CertificationsPreview } from "@/sections/home/CertificationsPreview";
import { TestimonialsSection } from "@/sections/home/TestimonialsSection";
import { FAQSection } from "@/sections/shared/FAQSection";
import { ContactCTA } from "@/sections/shared/ContactCTA";

export const metadata: Metadata = {
  title: "Responsible E-Waste Recycling for a Sustainable Future",
  description:
    "TEKREC E Waste Recycling offers secure, compliant and environmentally responsible electronic waste recycling, data destruction and IT asset disposal for businesses and individuals across India.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <CompanyIntro />
      <DeviceLifecycle />
      <KeyServices />
      <Stats />
      <WhyChooseUs />
      <CertificationsPreview />
      <TestimonialsSection />
      <FAQSection />
      <ContactCTA />
    </>
  );
}
