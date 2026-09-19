import { MessageCircle, Phone } from "lucide-react";

import { siteConfig } from "@/lib/constants";

export function FloatingContact({ context }: { context?: string }) {
  const whatsappNumber = siteConfig.phone.replace(/\D/g, "");
  const message = encodeURIComponent(
    context
      ? `Hi, I'd like to schedule an e-waste pickup in ${context}.`
      : "Hi, I'd like to schedule an e-waste pickup."
  );

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <a
        href={`https://wa.me/${whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform duration-200 hover:scale-105"
      >
        <MessageCircle className="size-6" fill="currentColor" strokeWidth={0} />
      </a>
      <a
        href={siteConfig.phoneHref}
        aria-label="Call us"
        className="flex size-12 items-center justify-center rounded-full bg-brand-600 text-white shadow-lift transition-transform duration-200 hover:scale-105"
      >
        <Phone className="size-5" />
      </a>
    </div>
  );
}
