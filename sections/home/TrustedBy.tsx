import { Building2, GraduationCap, Hospital, Landmark, Factory, Home } from "lucide-react";

import { Container } from "@/components/ui/Container";

const segments = [
  { icon: Building2, label: "IT Companies" },
  { icon: Factory, label: "Manufacturing" },
  { icon: GraduationCap, label: "Educational Institutions" },
  { icon: Landmark, label: "Government Organisations" },
  { icon: Hospital, label: "Healthcare" },
  { icon: Home, label: "Households" },
];

export function TrustedBy() {
  return (
    <section className="border-b border-ink-100 bg-white py-8 md:py-10">
      <Container className="flex flex-col items-center gap-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">
          Trusted by organisations across
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-8">
          {segments.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="flex items-center gap-2 whitespace-nowrap text-sm font-medium text-ink-600"
            >
              <Icon className="size-4 shrink-0 text-brand-600" />
              {label}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
