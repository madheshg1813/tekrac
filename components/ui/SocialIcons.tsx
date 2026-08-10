import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export function TwitterIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 3H21l-6.7 7.66L22.2 21h-6.2l-4.86-6.35L5.6 21H3.5l7.16-8.19L2.8 3h6.35l4.4 5.8L18.9 3zm-1.08 16.17h1.16L7.8 4.75H6.55l11.27 14.42z" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.5 21v-7.85h2.64l.4-3.06h-3.04V8.24c0-.89.25-1.49 1.53-1.49h1.63V4.02C17.4 3.97 16.44 3.9 15.32 3.9c-2.34 0-3.94 1.43-3.94 4.05v2.14H8.73v3.06h2.65V21h3.12z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.15" cy="6.85" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
