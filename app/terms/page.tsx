import type { Metadata } from "next";

import { siteConfig } from "@/lib/constants";
import { PageHero } from "@/components/PageHero";
import { LegalDocument, type LegalSection } from "@/components/LegalDocument";
import { ContactCTA } from "@/sections/shared/ContactCTA";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms and conditions governing use of ${siteConfig.name}'s website and services.`,
  alternates: { canonical: "/terms" },
};

const sections: LegalSection[] = [
  {
    heading: "Acceptance of Terms",
    body: [
      `These Terms of Service ("Terms") govern your use of the ${siteConfig.name} website and any e-waste collection, recycling, data destruction or IT asset disposal services provided by ${siteConfig.legalName} ("TEKREC", "we", "us" or "our"). By using our website or requesting our services, you agree to these Terms.`,
    ],
  },
  {
    heading: "Our Services",
    body: [
      "TEKREC provides e-waste collection, secure data destruction, IT asset disposal, and related recycling services to corporates, institutions and households. Service availability, scheduling and scope may vary by location and are confirmed at the time of booking.",
    ],
  },
  {
    heading: "Pickup & Collection",
    body: [
      "When you request a pickup, you confirm that you are authorised to hand over the devices or assets listed for collection. A collection manifest is issued at the time of pickup, and a certificate of recycling and, where applicable, data destruction is issued upon completion of processing.",
      "Estimated pickup timelines are provided in good faith but may be affected by location, volume and operational factors.",
    ],
  },
  {
    heading: "Data Destruction Disclaimer",
    body: [
      "We follow certified data sanitisation and physical destruction protocols for all data-bearing devices we process. While we take industry-standard precautions, you remain responsible for backing up any data you wish to retain before handing over a device, and for removing any external storage media not intended for disposal.",
    ],
  },
  {
    heading: "Customer Responsibilities",
    body: [
      "You agree to provide accurate information when requesting our services, to ensure safe access for our collection team, and to disclose any known hazardous materials beyond standard electronic waste at the time of booking.",
    ],
  },
  {
    heading: "Limitation of Liability",
    body: [
      "TEKREC is not liable for indirect, incidental or consequential loss arising from the use of our services, except where such liability cannot be excluded under applicable law. Our liability for any claim relating to a specific pickup is limited to the value of that service.",
    ],
  },
  {
    heading: "Compliance",
    body: [
      "Our recycling and disposal processes are carried out in line with applicable E-Waste (Management) Rules and related environmental regulations. Compliance documentation is provided as part of our standard service and should be retained by customers for their own regulatory records where required.",
    ],
  },
  {
    heading: "Changes to These Terms",
    body: [
      "We may revise these Terms from time to time. Continued use of our website or services after changes are posted constitutes acceptance of the updated Terms.",
    ],
  },
  {
    heading: "Governing Law",
    body: [
      "These Terms are governed by the laws of India, and any disputes shall be subject to the jurisdiction of the courts in Chennai, Tamil Nadu.",
    ],
  },
  {
    heading: "Contact Us",
    body: [
      `For any questions about these Terms, please contact us at ${siteConfig.email} or ${siteConfig.phone}.`,
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        crumb="Terms of Service"
        title="Terms of Service"
        description="The terms and conditions governing use of our website and services."
      />
      <LegalDocument lastUpdated="August 2026" sections={sections} />
      <ContactCTA
        title="Have a question about our terms?"
        description="Get in touch and our team will be happy to help."
      />
    </>
  );
}
