import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { navLinks, siteConfig } from "@/lib/constants";
import { services } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/ui/SocialIcons";

const socialLinks = [
  { icon: LinkedinIcon, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: TwitterIcon, href: siteConfig.social.twitter, label: "Twitter" },
  { icon: FacebookIcon, href: siteConfig.social.facebook, label: "Facebook" },
  { icon: InstagramIcon, href: siteConfig.social.instagram, label: "Instagram" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-800 bg-ink-950 text-ink-300">
      <Container className="section-padding">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Logo light />
            <p className="max-w-sm text-sm leading-relaxed text-ink-400">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full border border-ink-800 text-ink-300 transition-colors hover:border-brand-500 hover:text-brand-400"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-ink-400 hover:text-brand-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-ink-400 hover:text-brand-400"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-ink-400">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand-500" />
                <span>
                  {siteConfig.address.line1}, {siteConfig.address.line2},<br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip},{" "}
                  {siteConfig.address.country}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="size-4 shrink-0 text-brand-500" />
                <a href={siteConfig.phoneHref} className="hover:text-brand-400">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="size-4 shrink-0 text-brand-500" />
                <a href={siteConfig.emailHref} className="hover:text-brand-400">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-ink-800 pt-8 text-xs text-ink-500 md:flex-row">
          <p>
            &copy; {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-brand-400">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-brand-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
