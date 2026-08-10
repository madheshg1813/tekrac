import { Recycle } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="section-padding bg-white">
      <Container className="flex flex-col items-center gap-6 text-center">
        <span className="flex size-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
          <Recycle className="size-8" />
        </span>
        <h1 className="text-4xl font-bold text-ink-900 md:text-5xl">404 — Page Not Found</h1>
        <p className="max-w-md text-ink-500">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <Button href="/">Back to Home</Button>
      </Container>
    </section>
  );
}
