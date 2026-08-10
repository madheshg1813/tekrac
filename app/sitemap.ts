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

  const servicePages = services.map((service) => `/services/${service.slug}`);

  return [...routes, ...servicePages].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : route.startsWith("/services/") ? 0.7 : 0.8,
  }));
}
