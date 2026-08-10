import type { Metadata } from "next";

import { PageHero } from "@/components/PageHero";
import { IndustriesGrid } from "@/sections/industries/IndustriesGrid";
import { Stats } from "@/sections/home/Stats";
import { ContactCTA } from "@/sections/shared/ContactCTA";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "TEKREC serves IT companies, schools & colleges, government offices, hospitals, manufacturing industries and the banking sector with tailored e-waste solutions.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        crumb="Industries"
        title="Tailored e-waste solutions for every sector"
        description="Every industry has unique compliance, data-security and volume requirements. Our programs are built to match them all."
      />
      <IndustriesGrid />
      <Stats />
      <ContactCTA />
    </>
  );
}
