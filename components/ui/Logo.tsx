import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5 font-display", className)}>
      <Image
        src="/logo-icon.png"
        alt="TEKREC logo"
        width={144}
        height={144}
        priority
        className="size-12 shrink-0"
      />
      <span className="flex flex-col leading-none">
        <span className={cn("text-lg font-bold tracking-tight", light ? "text-brand-400" : "text-brand-600")}>
          TEKREC
        </span>
        <span
          className={cn(
            "text-[0.6rem] font-semibold uppercase tracking-[0.16em]",
            light ? "text-brand-300" : "text-brand-600"
          )}
        >
          E Waste Recycling
        </span>
      </span>
    </span>
  );
}
