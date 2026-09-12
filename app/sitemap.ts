import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/config";
import { destinations } from "@/data/destinations";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = [
    { path: "/", priority: 1 },
    { path: "/destinations", priority: 0.9 },
    { path: "/offres", priority: 0.9 },
    { path: "/demande", priority: 0.8 },
    { path: "/billets", priority: 0.8 },
    { path: "/hotels", priority: 0.8 },
    { path: "/a-propos", priority: 0.6 },
    { path: "/contact", priority: 0.7 },
  ];
  return [
    ...staticPages.map((p) => ({
      url: `${SITE_URL}${p.path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: p.priority,
    })),
    ...destinations.map((d) => ({
      url: `${SITE_URL}/destinations/${d.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
