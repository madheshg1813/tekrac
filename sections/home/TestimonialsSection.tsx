import { testimonials } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";

export function TestimonialsSection({
  title = "Trusted by organisations across India",
  description = "See what our corporate, institutional and government clients have to say about working with TEKREC.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="section-padding bg-white">
      <Container className="flex flex-col gap-14">
        <SectionHeading eyebrow="Client Stories" title={title} description={description} />
        <TestimonialCarousel items={testimonials} />
      </Container>
    </section>
  );
}
