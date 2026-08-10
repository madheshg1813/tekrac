import type { Metadata } from "next";

import { PageHero } from "@/components/PageHero";
import { Overview } from "@/sections/about/Overview";
import { MissionVision } from "@/sections/about/MissionVision";
import { EnvironmentalCommitment } from "@/sections/about/EnvironmentalCommitment";
import { SustainabilityGoals } from "@/sections/about/SustainabilityGoals";
import { ContactCTA } from "@/sections/shared/ContactCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about TEKREC E Waste Recycling's mission, vision, environmental commitment and sustainability goals as India's trusted e-waste recycling partner.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About TEKREC"
        crumb="About Us"
        title="Driving India's transition to responsible e-waste management"
        description="For over a decade, we've helped organisations of every size retire their electronics securely, compliantly and sustainably."
      />
      <Overview />
      <MissionVision />
      <EnvironmentalCommitment />
      <SustainabilityGoals />
      <ContactCTA />
    </>
  );
}
