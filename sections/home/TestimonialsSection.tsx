import { testimonials } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-white">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Client Stories"
          title="Trusted by organisations across India"
          description="See what our corporate, institutional and government clients have to say about working with TEKREC."
        />
        <TestimonialCarousel items={testimonials} />
      </Container>
    </section>
  );
}
