import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";
import { services } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/industries",
    "/process",
    "/certifications",
    "/contact",
  ];

  const legalRoutes = ["/privacy", "/terms"];

  const servicePages = services.map((service) => `/services/${service.slug}`);

  return [...routes, ...servicePages, ...legalRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority:
      route === ""
        ? 1
        : route.startsWith("/services/")
          ? 0.7
          : legalRoutes.includes(route)
            ? 0.3
            : 0.8,
  }));
}
