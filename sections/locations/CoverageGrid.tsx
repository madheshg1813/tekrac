import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { getPublishedChennaiAreas } from "@/lib/locations";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function CoverageGrid({
  excludeSlug,
  limit = 20,
  title = "Areas we collect from in Chennai",
  description = "New localities go live every day as our coverage map expands across the city.",
}: {
  excludeSlug?: string;
  limit?: number;
  title?: string;
  description?: string;
}) {
  let areas = getPublishedChennaiAreas()
    .slice()
    .sort((a, b) => a.area.localeCompare(b.area));

  if (excludeSlug) areas = areas.filter((a) => a.slug !== excludeSlug);

  if (areas.length === 0) return null;

  const visible = areas.slice(0, limit);

  return (
    <section className="relative overflow-hidden bg-ink-950 section-padding">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-30" />
      <Container className="relative flex flex-col gap-12">
        <SectionHeading align="left" light eyebrow="Coverage" title={title} description={description} />

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-7">
          {visible.map((area, index) => (
            <FadeIn key={area.slug} delay={(index % 14) * 0.03}>
              <Link
                href={`/chennai/${area.slug}`}
                className="flex min-h-[3.25rem] items-center justify-center gap-1.5 rounded-lg border border-ink-700 px-2.5 py-2.5 text-center font-mono text-[0.7rem] leading-snug break-words text-brand-400 transition-colors duration-300 hover:border-brand-500 hover:bg-brand-500/10 hover:text-brand-300 sm:px-3 sm:py-3 sm:text-sm"
              >
                <MapPin className="size-3 shrink-0 sm:size-3.5" />
                {area.area}
              </Link>
            </FadeIn>
          ))}
        </div>

        <Link
          href="/chennai/e-waste-recycling-service"
          className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300"
        >
          View all cities
          <ArrowRight className="size-4" />
        </Link>
      </Container>
    </section>
  );
}
