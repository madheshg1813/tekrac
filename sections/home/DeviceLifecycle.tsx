import { CheckCircle2 } from "lucide-react";

import { DeviceOrbit } from "@/components/DeviceOrbit";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

const points = [
  "Every device is barcoded and logged at the point of collection",
  "Full chain-of-custody tracking from pickup to final material recovery",
  "Serialised reporting for laptops, servers, batteries and components",
];

export function DeviceLifecycle() {
  return (
    <section className="section-padding overflow-hidden bg-ink-50/60">
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <FadeIn className="order-2 lg:order-1">
          <SectionHeading
            align="left"
            eyebrow="Full Traceability"
            title="Every device tracked, from pickup to certification"
            description="Laptops, servers, phones and peripherals all move through the same auditable pipeline. Nothing leaves our facility without a documented, verifiable outcome."
          />
          <ul className="mt-8 flex flex-col gap-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-600" />
                <span className="text-ink-700">{point}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.1} className="order-1 lg:order-2">
          <DeviceOrbit />
        </FadeIn>
      </Container>
    </section>
  );
}
