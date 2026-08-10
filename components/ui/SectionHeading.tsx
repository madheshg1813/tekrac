import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center mx-auto max-w-2xl" : "items-start text-left",
        className
      )}
    >
      {eyebrow && <Badge light={light}>{eyebrow}</Badge>}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.1]",
          light ? "text-white" : "text-ink-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("text-base md:text-lg leading-relaxed", light ? "text-ink-200" : "text-ink-500")}>
          {description}
        </p>
      )}
    </div>
  );
}
