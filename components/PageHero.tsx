import { ChevronRight } from "lucide-react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export interface HeroCta {
  label: string;
  href: string;
  icon?: LucideIcon;
  variant?: "primary" | "outline";
}

export interface CrumbLink {
  label: string;
  href: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  crumb,
  crumbs,
  ctas,
  trustNote,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  crumb: string;
  crumbs?: CrumbLink[];
  ctas?: HeroCta[];
  trustNote?: string;
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
          {crumbs?.map((c) => (
            <span key={c.href} className="flex items-center gap-2">
              <ChevronRight className="size-3.5 shrink-0" />
              <Link href={c.href} className="hover:text-brand-400">
                {c.label}
              </Link>
            </span>
          ))}
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

        {ctas && ctas.length > 0 && (
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            {ctas.map((cta) => {
              const Icon = cta.icon;
              const isOutline = cta.variant === "outline";
              return (
                <Button
                  key={cta.href}
                  href={cta.href}
                  size="lg"
                  variant={isOutline ? "outline" : "primary"}
                  icon={Icon}
                  iconPosition={isOutline ? "left" : "right"}
                  className={cn(
                    isOutline &&
                      "border-ink-700 bg-transparent text-white hover:border-brand-500 hover:text-brand-400"
                  )}
                >
                  {cta.label}
                </Button>
              );
            })}
          </div>
        )}

        {trustNote && (
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
            {trustNote}
          </p>
        )}
      </Container>
    </section>
  );
}
