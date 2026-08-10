import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { services } from "@/lib/data";
import { PageHero } from "@/components/PageHero";
import { ServiceOverview } from "@/sections/services/ServiceOverview";
import { ServiceProcessTeaser } from "@/sections/services/ServiceProcessTeaser";
import { RelatedServices } from "@/sections/services/RelatedServices";
import { FAQSection } from "@/sections/shared/FAQSection";
import { ContactCTA } from "@/sections/shared/ContactCTA";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.title,
      description: service.description,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <>
      <PageHero
        eyebrow="Service"
        crumb={service.title}
        title={service.title}
        description={service.description}
      />
      <ServiceOverview service={service} />
      <ServiceProcessTeaser />
      <RelatedServices currentSlug={service.slug} />
      <FAQSection />
      <ContactCTA
        title={`Ready to schedule your ${service.title.toLowerCase()}?`}
        description="Get in touch for a free consultation and a certified, compliant recycling experience from start to finish."
      />
    </>
  );
}
