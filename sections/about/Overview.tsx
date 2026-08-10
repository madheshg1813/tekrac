import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function Overview() {
  return (
    <section className="section-padding bg-white">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow="Company Overview"
          title="Engineering a cleaner future, one device at a time"
          description="Founded in 2013, TEKREC E Waste Recycling has grown from a single collection centre into a nationwide network dedicated to secure, compliant and sustainable electronics recycling. We work with corporates, IT companies, manufacturing units, educational institutions, government bodies and households to responsibly manage the full lifecycle of retired electronic equipment."
        />
        <FadeIn>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { value: "12+", label: "Years in Operation" },
              { value: "480+", label: "Corporate Clients Served" },
              { value: "6", label: "Regional Collection Hubs" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2 rounded-2xl border border-ink-100 bg-ink-50/60 px-8 py-7 text-center"
              >
                <p className="text-3xl font-bold text-brand-700">{stat.value}</p>
                <p className="text-sm font-medium text-ink-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
