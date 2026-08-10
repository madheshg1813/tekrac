import { siteConfig } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export function ContactMap() {
  return (
    <section className="pb-20 md:pb-28">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-ink-100 shadow-soft">
          <iframe
            title={`${siteConfig.name} location on Google Maps`}
            src={siteConfig.mapsEmbedSrc}
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Container>
    </section>
  );
}
