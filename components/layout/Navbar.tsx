"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronRight, Menu, Phone, Recycle, X } from "lucide-react";

import { siteConfig } from "@/lib/constants";
import { getPublishedChennaiAreas } from "@/lib/locations";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

const navEnd = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const serviceCategories = [
  {
    key: "locations" as const,
    icon: Recycle,
    title: "E-Waste Recycling",
    subtitle: "Collection & recycling",
    panelTitle: "Chennai Service Areas",
    viewAllLabel: "View all locations",
    viewAllHref: "/chennai",
    items: getPublishedChennaiAreas().map((area) => ({
      label: area.area,
      href: `/chennai/${area.slug}`,
    })),
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<(typeof serviceCategories)[number]["key"]>(
    "locations"
  );
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCategory, setMobileCategory] = useState<
    (typeof serviceCategories)[number]["key"] | null
  >(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
    setMobileCategory(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const scheduleCloseServices = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  const activePanel = serviceCategories.find((c) => c.key === activeCategory)!;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled || open || servicesOpen
          ? "bg-white/90 backdrop-blur-lg shadow-soft border-b border-ink-100"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between container-px">
        <Link href="/" aria-label={`${siteConfig.name} home`}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className={cn(
              "text-sm font-semibold transition-colors hover:text-brand-600",
              pathname === "/" ? "text-brand-700" : "text-ink-700"
            )}
          >
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={scheduleCloseServices}
          >
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              className={cn(
                "flex items-center gap-1 text-sm font-semibold transition-colors hover:text-brand-600",
                servicesOpen || pathname.startsWith("/services") || pathname.startsWith("/chennai")
                  ? "text-brand-700"
                  : "text-ink-700"
              )}
            >
              Services
              <ChevronDown
                className={cn("size-3.5 transition-transform duration-200", servicesOpen && "rotate-180")}
              />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute left-0 top-full flex items-start gap-3 pt-3"
                >
                  <div className="w-72 rounded-2xl border border-ink-100 bg-white p-3 shadow-lift">
                    {serviceCategories.map((category) => {
                      const Icon = category.icon;
                      const isActive = category.key === activeCategory;
                      return (
                        <button
                          key={category.key}
                          type="button"
                          onMouseEnter={() => setActiveCategory(category.key)}
                          onClick={() => setActiveCategory(category.key)}
                          className={cn(
                            "flex w-full items-center gap-3 rounded-xl p-3 text-left transition-colors",
                            isActive ? "bg-brand-50" : "hover:bg-ink-50"
                          )}
                        >
                          <span
                            className={cn(
                              "flex size-9 shrink-0 items-center justify-center rounded-lg",
                              isActive ? "bg-brand-600 text-white" : "bg-ink-100 text-ink-600"
                            )}
                          >
                            <Icon className="size-4" />
                          </span>
                          <span className="flex-1">
                            <span className="block text-sm font-semibold text-ink-900">
                              {category.title}
                            </span>
                            <span className="block text-xs text-ink-500">{category.subtitle}</span>
                          </span>
                          <ChevronRight className="size-4 shrink-0 text-ink-300" />
                        </button>
                      );
                    })}
                  </div>

                  <div className="w-72 overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-lift">
                    <div className="flex items-center gap-2 border-b border-ink-100 px-4 py-3">
                      <span className="size-1.5 rounded-full bg-brand-500" />
                      <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                        {activePanel.panelTitle}
                      </p>
                    </div>
                    <div className="flex max-h-72 flex-col overflow-y-auto p-2">
                      {activePanel.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="rounded-lg px-3 py-2 text-sm text-ink-600 transition-colors hover:bg-brand-50 hover:text-brand-700"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                    <Link
                      href={activePanel.viewAllHref}
                      className="flex items-center gap-1.5 border-t border-ink-100 px-4 py-3 text-sm font-semibold text-brand-700 hover:text-brand-800"
                    >
                      {activePanel.viewAllLabel}
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navEnd.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-semibold transition-colors hover:text-brand-600",
                pathname === link.href ? "text-brand-700" : "text-ink-700"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-ink-700 hover:text-brand-600"
          >
            <Phone className="size-4" />
            {siteConfig.phone}
          </a>
          <Button href="/contact" size="sm">
            Request Pickup
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-full border border-ink-200 text-ink-900 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-ink-100 bg-white lg:hidden"
          >
            <div className="flex max-h-[calc(100vh-5rem)] flex-col gap-1 overflow-y-auto container-px py-6">
              <Link
                href="/"
                className={cn(
                  "rounded-lg px-3 py-3 text-base font-semibold",
                  pathname === "/" ? "bg-brand-50 text-brand-700" : "text-ink-800 hover:bg-ink-50"
                )}
              >
                Home
              </Link>

              <div className="rounded-lg">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  aria-expanded={mobileServicesOpen}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-semibold text-ink-800 hover:bg-ink-50"
                >
                  Services
                  <ChevronDown
                    className={cn(
                      "size-4 transition-transform duration-200",
                      mobileServicesOpen && "rotate-180"
                    )}
                  />
                </button>

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="overflow-hidden pl-3"
                    >
                      {serviceCategories.map((category) => {
                        const Icon = category.icon;
                        const isOpenCategory = mobileCategory === category.key;
                        return (
                          <div key={category.key} className="border-l border-ink-100 pl-3">
                            <button
                              type="button"
                              onClick={() =>
                                setMobileCategory(isOpenCategory ? null : category.key)
                              }
                              aria-expanded={isOpenCategory}
                              className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-ink-800 hover:bg-ink-50"
                            >
                              <Icon className="size-4 shrink-0 text-brand-600" />
                              <span className="flex-1">{category.title}</span>
                              <ChevronRight
                                className={cn(
                                  "size-4 shrink-0 text-ink-300 transition-transform duration-200",
                                  isOpenCategory && "rotate-90"
                                )}
                              />
                            </button>
                            <AnimatePresence>
                              {isOpenCategory && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2, ease: "easeInOut" }}
                                  className="max-h-56 overflow-y-auto overflow-x-hidden pl-4"
                                >
                                  {category.items.map((item) => (
                                    <Link
                                      key={item.href}
                                      href={item.href}
                                      className="block rounded-lg px-3 py-2 text-sm text-ink-600 hover:bg-brand-50 hover:text-brand-700"
                                    >
                                      {item.label}
                                    </Link>
                                  ))}
                                  <Link
                                    href={category.viewAllHref}
                                    className="block rounded-lg px-3 py-2 text-sm font-semibold text-brand-700"
                                  >
                                    {category.viewAllLabel} →
                                  </Link>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navEnd.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-lg px-3 py-3 text-base font-semibold",
                    pathname === link.href
                      ? "bg-brand-50 text-brand-700"
                      : "text-ink-800 hover:bg-ink-50"
                  )}
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-4 flex flex-col gap-3">
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center justify-center gap-2 text-sm font-semibold text-ink-700"
                >
                  <Phone className="size-4" />
                  {siteConfig.phone}
                </a>
                <Button href="/contact" className="w-full justify-center">
                  Request Pickup
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
