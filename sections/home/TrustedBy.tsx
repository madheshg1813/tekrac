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
    <section className="border-b border-ink-100 bg-white py-10">
      <Container className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">
          Trusted by organisations across
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 md:justify-end">
          {segments.map(({ icon: Icon, label }, index) => (
            <div key={label} className="flex items-center gap-6">
              <span className="flex items-center gap-2 text-sm font-medium text-ink-600">
                <Icon className="size-4 text-brand-600" />
                {label}
              </span>
              {index < segments.length - 1 && (
                <span className="hidden h-4 w-px bg-ink-200 md:inline-block" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
