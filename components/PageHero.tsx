import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function PageHero({
  eyebrow,
  title,
  description,
  crumb,
}: {
  eyebrow: string;
  title: string;
  description: string;
  crumb: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink-950 pb-20 pt-32 md:pb-24 md:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-40" />
      <div className="pointer-events-none absolute -top-32 right-[-10%] size-[28rem] rounded-full bg-brand-600/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-10rem] left-[-10%] size-[24rem] rounded-full bg-brand-500/10 blur-3xl" />

      <Container className="relative flex flex-col items-center gap-6 text-center">
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-ink-400">
          <Link href="/" className="hover:text-brand-400">
            Home
          </Link>
          <ChevronRight className="size-3.5 shrink-0" />
          <span className="text-ink-200">{crumb}</span>
        </div>

        <Badge light>{eyebrow}</Badge>
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-ink-300 md:text-lg">
          {description}
        </p>
      </Container>
    </section>
  );
}
