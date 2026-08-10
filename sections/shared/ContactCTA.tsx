import { ArrowRight, Phone } from "lucide-react";

import { siteConfig } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function ContactCTA({
  title = "Ready to recycle your e-waste responsibly?",
  description = "Schedule a pickup today and get a certified, secure and sustainable recycling experience — backed by full compliance documentation.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="section-padding bg-white">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 px-8 py-16 text-center md:px-16">
            <div className="pointer-events-none absolute inset-0 bg-noise opacity-20" />
            <div className="relative flex flex-col items-center gap-6">
              <h2 className="max-w-2xl text-3xl font-bold text-white md:text-4xl">{title}</h2>
              <p className="max-w-xl text-base text-brand-50/90 md:text-lg">{description}</p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  href="/contact"
                  size="lg"
                  icon={ArrowRight}
                  className="bg-white text-brand-700 hover:bg-brand-50"
                >
                  Request Pickup
                </Button>
                <Button
                  href={siteConfig.phoneHref}
                  variant="outline"
                  size="lg"
                  icon={Phone}
                  iconPosition="left"
                  className="border-white/40 bg-transparent text-white hover:border-white hover:text-white"
                >
                  {siteConfig.phone}
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
