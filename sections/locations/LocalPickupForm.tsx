import { Clock, FileCheck2, MapPin } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { ContactForm } from "@/components/ContactForm";

export function LocalPickupForm({ area, pincode }: { area: string; pincode: string }) {
  const infoCards = [
    {
      icon: MapPin,
      title: "Coverage Area",
      lines: [`${area}, Chennai`, `Pincode ${pincode}`],
    },
    {
      icon: Clock,
      title: "Response Time",
      lines: ["Confirmed within 24 hours", "Same-day slots on request"],
    },
    {
      icon: FileCheck2,
      title: "What You Get",
      lines: ["Signed handover manifest", "Certificate of recycling"],
    },
  ];

  return (
    <section className="section-padding bg-white">
      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-5">
        <div className="flex flex-col gap-6 lg:col-span-2">
          {infoCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <FadeIn key={card.title} delay={index * 0.06}>
                <div className="flex gap-5 rounded-2xl border border-ink-100 bg-ink-50/60 p-6">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
                    <Icon className="size-6" />
                  </span>
                  <div>
                    <h3 className="font-bold text-ink-900">{card.title}</h3>
                    {card.lines.map((line) => (
                      <p key={line} className="mt-1 text-sm text-ink-500">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.15} className="lg:col-span-3">
          <div className="rounded-3xl border border-ink-100 bg-white p-8 shadow-soft md:p-10">
            <h2 className="text-2xl font-bold text-ink-900">Request a free pickup in {area}</h2>
            <p className="mt-2 text-sm text-ink-500">
              Share a few details and our {area} route coordinator will confirm a pickup slot —
              no obligation, and no charge for the initial assessment.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
