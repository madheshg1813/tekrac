import { cn } from "@/lib/utils";

export function Badge({
  children,
  light = false,
  className,
}: {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider",
        light
          ? "border-brand-400/30 bg-brand-400/10 text-brand-300"
          : "border-brand-200 bg-brand-50 text-brand-700",
        className
      )}
    >
      <span className={cn("size-1.5 rounded-full", light ? "bg-brand-400" : "bg-brand-500")} />
      {children}
    </span>
  );
}
