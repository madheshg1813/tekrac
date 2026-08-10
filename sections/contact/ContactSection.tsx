import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { ContactForm } from "@/components/ContactForm";

const contactCards = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: [
      siteConfig.address.line1,
      siteConfig.address.line2,
      `${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`,
    ],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: [siteConfig.phone, "Mon - Sat, 9 AM - 6:30 PM"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: [siteConfig.email, "We reply within 24 hours"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: [siteConfig.hours, "Sunday: Closed"],
  },
];

export function ContactSection() {
  return (
    <section className="section-padding bg-white">
      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-5">
        <div className="flex flex-col gap-6 lg:col-span-2">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <FadeIn key={card.title} delay={index * 0.06}>
                <div className="flex gap-5 rounded-2xl border border-ink-100 bg-ink-50/60 p-6">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
                    <Icon className="size-6" />
                  </span>
                  <div>
                    <h3 className="font-bold text-ink-900">{card.title}</h3>
                    {card.lines.map((line) => (
                      <p key={line} className="mt-1 text-sm text-ink-500">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.15} className="lg:col-span-3">
          <div className="rounded-3xl border border-ink-100 bg-white p-8 shadow-soft md:p-10">
            <h2 className="text-2xl font-bold text-ink-900">Request a Pickup or Get in Touch</h2>
            <p className="mt-2 text-sm text-ink-500">
              Fill in the form below and our team will reach out to schedule your e-waste
              collection or answer any questions.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
