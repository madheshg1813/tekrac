import type { Metadata } from "next";

import { PageHero } from "@/components/PageHero";
import { ProcessTimeline } from "@/sections/process/ProcessTimeline";
import { CertificationsPreview } from "@/sections/home/CertificationsPreview";
import { ContactCTA } from "@/sections/shared/ContactCTA";

export const metadata: Metadata = {
  title: "Recycling Process",
  description:
    "Discover TEKREC's certified six-step e-waste recycling process: collection, sorting, data sanitization, dismantling, recycling and certification.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Recycling Process"
        crumb="Process"
        title="A transparent, six-step recycling journey"
        description="Every device that enters our facility follows a documented, auditable process from pickup to final certification."
      />
      <ProcessTimeline />
      <CertificationsPreview />
      <ContactCTA />
    </>
  );
}
