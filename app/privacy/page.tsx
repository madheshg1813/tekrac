import type { Metadata } from "next";

import { siteConfig } from "@/lib/constants";
import { PageHero } from "@/components/PageHero";
import { LegalDocument, type LegalSection } from "@/components/LegalDocument";
import { ContactCTA } from "@/sections/shared/ContactCTA";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses and protects your personal information.`,
  alternates: { canonical: "/privacy" },
};

const sections: LegalSection[] = [
  {
    heading: "Introduction",
    body: [
      `${siteConfig.legalName} ("TEKREC", "we", "us" or "our") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains what information we collect, how we use it, and the choices you have when you visit our website or use our e-waste collection, recycling and data destruction services.`,
    ],
  },
  {
    heading: "Information We Collect",
    body: [
      "When you request a pickup, submit an enquiry, or otherwise interact with us, we may collect information such as your name, phone number, email address, business or residential address, and details about the e-waste or IT assets you wish to have collected.",
      "We may also collect limited technical information automatically, such as browser type and general usage data, to help us understand how our website is used and to improve it.",
    ],
  },
  {
    heading: "How We Use Your Information",
    body: [
      "We use the information we collect to schedule and carry out pickups, respond to enquiries, issue certificates of recycling and data destruction, meet regulatory and EPR reporting obligations, and communicate with you about your request or our services.",
      "We do not sell your personal information to third parties. Information may be shared with certified downstream recycling or logistics partners solely to the extent necessary to fulfil your service request.",
    ],
  },
  {
    heading: "Data Security",
    body: [
      "We apply reasonable administrative and technical safeguards to protect the information you share with us. Data-bearing devices collected for recycling are handled under the same secure, chain-of-custody protocols described in our recycling process, including certified wiping or physical destruction of storage media prior to further processing.",
    ],
  },
  {
    heading: "Cookies",
    body: [
      "Our website may use basic cookies or similar technologies to support core functionality and understand aggregate site usage. You can control cookies through your browser settings; disabling them may affect some website features.",
    ],
  },
  {
    heading: "Your Rights",
    body: [
      "You may request access to, correction of, or deletion of the personal information we hold about you, subject to any legal or contractual retention requirements (for example, compliance records related to e-waste collection). To make a request, contact us using the details below.",
    ],
  },
  {
    heading: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. The date at the top of this page indicates when it was last revised.",
    ],
  },
  {
    heading: "Contact Us",
    body: [
      `If you have questions about this Privacy Policy or how your information is handled, please contact us at ${siteConfig.email} or ${siteConfig.phone}.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        crumb="Privacy Policy"
        title="Privacy Policy"
        description="How we collect, use and protect your personal information."
      />
      <LegalDocument lastUpdated="August 2026" sections={sections} />
      <ContactCTA
        title="Questions about your data?"
        description="Reach out to our team for any privacy-related requests or concerns."
      />
    </>
  );
}
