import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";
import { services } from "@/lib/data";
import { getPublishDate, getPublishedChennaiAreas } from "@/lib/locations";

export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/industries",
    "/process",
    "/certifications",
    "/contact",
    "/chennai/e-waste-recycling-service",
  ];

  const legalRoutes = ["/privacy", "/terms"];

  const servicePages = services.map((service) => `/services/${service.slug}`);

  const staticEntries: MetadataRoute.Sitemap = [...routes, ...servicePages, ...legalRoutes].map(
    (route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority:
        route === ""
          ? 1
          : route === "/chennai/e-waste-recycling-service"
            ? 0.9
            : route.startsWith("/services/")
              ? 0.7
              : legalRoutes.includes(route)
                ? 0.3
                : 0.8,
    })
  );

  const areaEntries: MetadataRoute.Sitemap = getPublishedChennaiAreas().map((area) => ({
    url: `${siteConfig.url}/chennai/${area.slug}`,
    lastModified: getPublishDate(area.index),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticEntries, ...areaEntries];
}
