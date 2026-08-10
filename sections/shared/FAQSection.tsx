import { faqs } from "@/lib/data";
import type { FAQItem } from "@/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export function FAQSection({
  items = faqs,
  title = "Frequently asked questions",
  description = "Answers to common questions about our e-waste collection, data destruction and recycling process.",
}: {
  items?: FAQItem[];
  title?: string;
  description?: string;
}) {
  return (
    <section className="section-padding bg-ink-50/60">
      <Container className="flex flex-col gap-14">
        <SectionHeading eyebrow="FAQs" title={title} description={description} />
        <div className="mx-auto w-full max-w-3xl">
          <FAQAccordion items={items} />
        </div>
      </Container>
    </section>
  );
}
