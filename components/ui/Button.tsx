import Link from "next/link";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  className?: string;
  children: React.ReactNode;
};

const variantClasses: Record<NonNullable<ButtonBaseProps["variant"]>, string> = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 shadow-lift shadow-brand-900/10",
  secondary: "bg-ink-900 text-white hover:bg-ink-800",
  outline:
    "border border-ink-200 text-ink-900 hover:border-brand-500 hover:text-brand-700 bg-white",
  ghost: "text-ink-900 hover:text-brand-700",
};

const sizeClasses: Record<NonNullable<ButtonBaseProps["size"]>, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 whitespace-nowrap";

export function Button({
  href,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  className,
  children,
  ...rest
}: ButtonBaseProps &
  (
    | ({ href: string } & Omit<React.ComponentProps<typeof Link>, "href">)
    | ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  )) {
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="size-4" />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="size-4" />}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(rest as Omit<React.ComponentProps<typeof Link>, "href">)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
