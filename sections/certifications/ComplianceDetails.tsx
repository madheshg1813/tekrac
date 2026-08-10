import { CheckCircle2 } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

const complianceItems = [
  "E-Waste (Management) Rules, 2022 authorised collection & recycling facility",
  "Extended Producer Responsibility (EPR) registered processor",
  "State Pollution Control Board (SPCB) consent to operate",
  "ISO 14001:2015 Environmental Management System aligned",
  "ISO 27001 aligned information security practices for data destruction",
  "R2 (Responsible Recycling) and e-Stewards process benchmarking",
  "Hazardous & Other Wastes (Management) Rules compliant handling",
  "Annual third-party compliance and environmental audits",
];

export function ComplianceDetails() {
  return (
    <section className="section-padding bg-ink-50/60">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
        <SectionHeading
          align="left"
          eyebrow="Regulatory Compliance"
          title="Fully aligned with national e-waste regulations"
          description="We maintain active authorisations and documentation so your organisation's compliance obligations are always met."
        />
        <FadeIn>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {complianceItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-ink-100 bg-white p-4 text-sm text-ink-700"
              >
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-600" />
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </section>
  );
}
