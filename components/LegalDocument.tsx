import { Container } from "@/components/ui/Container";

export interface LegalSection {
  heading: string;
  body: string[];
}

export function LegalDocument({
  lastUpdated,
  sections,
}: {
  lastUpdated: string;
  sections: LegalSection[];
}) {
  return (
    <section className="section-padding bg-white">
      <Container className="mx-auto max-w-3xl">
        <p className="mb-10 text-sm font-medium text-ink-400">Last updated: {lastUpdated}</p>
        <div className="flex flex-col gap-10">
          {sections.map((section, index) => (
            <div key={section.heading}>
              <h2 className="text-xl font-bold text-ink-900 md:text-2xl">
                {index + 1}. {section.heading}
              </h2>
              <div className="mt-4 flex flex-col gap-4">
                {section.body.map((paragraph, i) => (
                  <p key={i} className="leading-relaxed text-ink-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
