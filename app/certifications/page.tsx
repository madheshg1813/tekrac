import type { Metadata } from "next";

import { PageHero } from "@/components/PageHero";
import { CertificationsGrid } from "@/sections/certifications/CertificationsGrid";
import { ComplianceDetails } from "@/sections/certifications/ComplianceDetails";
import { FAQSection } from "@/sections/shared/FAQSection";
import { ContactCTA } from "@/sections/shared/ContactCTA";

export const metadata: Metadata = {
  title: "Certifications & Compliance",
  description:
    "TEKREC operates under government-authorised, environmentally certified and data-security compliant e-waste recycling standards including CPCB, ISO 14001, ISO 27001 and R2.",
  alternates: { canonical: "/certifications" },
};

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Certifications & Compliance"
        crumb="Certifications"
        title="Recycling backed by verified standards"
        description="Our certifications and regulatory compliance give your organisation complete confidence and audit-ready documentation."
      />
      <CertificationsGrid />
      <ComplianceDetails />
      <FAQSection />
      <ContactCTA />
    </>
  );
}
