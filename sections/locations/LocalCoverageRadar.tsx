import { CheckCircle2 } from "lucide-react";

import { CoverageRadar } from "@/components/CoverageRadar";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function LocalCoverageRadar({
  area,
  pincode,
}: {
  area: string;
  pincode?: string;
}) {
  const points = [
    `Regular collection rounds already running through ${area} and its surrounding streets`,
    "Every pickup logged against a signed manifest before the vehicle leaves your premises",
    "Data-bearing devices wiped or physically destroyed, certificate issued after",
    "No waiting list — most requests confirmed with a pickup slot within 24 hours",
  ];

  return (
    <section className="section-padding overflow-hidden bg-ink-50/60">
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <FadeIn className="order-2 lg:order-1">
          <SectionHeading
            align="left"
            eyebrow={`Active in ${area}`}
            title={`We're already live and collecting in ${area}`}
            description={
              pincode
                ? `Our ${pincode} coverage isn't a plan for someday — pickup rounds are running right now, with the same manifest-and-certificate process used for every corporate client.`
                : "Our citywide coverage isn't a plan for someday — pickup rounds are running right now across every live locality, with the same manifest-and-certificate process used for every corporate client."
            }
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
          <CoverageRadar area={area} />
        </FadeIn>
      </Container>
    </section>
  );
}
