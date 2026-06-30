import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://booksnb.com";
  const pages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/pricing", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "yearly" as const },
    { url: "/us", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/ca", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/au", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return pages.map((p) => ({
    url: `${base}${p.url}`,
    lastModified: new Date("2025-06-30"),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
