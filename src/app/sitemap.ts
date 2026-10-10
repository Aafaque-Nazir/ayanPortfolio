import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ayanaklekar.com",
      lastModified: new Date("2026-10-10"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
