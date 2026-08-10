import type { Metadata } from "next";

import { PageHero } from "@/components/PageHero";
import { ContactSection } from "@/sections/contact/ContactSection";
import { ContactMap } from "@/sections/contact/ContactMap";
import { FAQSection } from "@/sections/shared/FAQSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with TEKREC E Waste Recycling to schedule a pickup, ask about our services, or discuss corporate e-waste management programs.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        crumb="Contact"
        title="Let's plan your e-waste pickup"
        description="Reach out for a free consultation, bulk pickup scheduling, or any questions about our recycling and data destruction services."
      />
      <ContactSection />
      <ContactMap />
      <FAQSection />
    </>
  );
}
