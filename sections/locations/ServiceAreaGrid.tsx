import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

import { getPublishedChennaiAreas } from "@/lib/locations";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function ServiceAreaGrid({
  excludeSlug,
  limit,
  title = "Chennai localities we serve",
  description = "We're adding a new locality page every day — here's where doorstep e-waste pickup is currently live.",
}: {
  excludeSlug?: string;
  limit?: number;
  title?: string;
  description?: string;
}) {
  let areas = getPublishedChennaiAreas();
  if (excludeSlug) areas = areas.filter((a) => a.slug !== excludeSlug);
  if (limit) areas = areas.slice(0, limit);

  if (areas.length === 0) return null;

  return (
    <section className="section-padding bg-ink-50/60">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow="Service Areas" title={title} description={description} />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {areas.map((area, index) => (
            <FadeIn key={area.slug} delay={(index % 8) * 0.04}>
              <Link
                href={`/chennai/${area.slug}`}
                className="group flex items-center justify-between gap-2 rounded-xl border border-ink-100 bg-white px-4 py-3.5 text-sm font-semibold text-ink-800 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:text-brand-700 hover:shadow-lift"
              >
                <span className="flex items-center gap-2">
                  <MapPin className="size-4 shrink-0 text-brand-600" />
                  {area.area}
                </span>
                <ArrowUpRight className="size-4 shrink-0 text-ink-300 transition-colors group-hover:text-brand-600" />
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
