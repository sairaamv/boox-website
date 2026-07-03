import { MetadataRoute } from "next";
import { articles } from "./blog/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://booksnb.com";
  const buildDate = new Date();

  const pages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/pricing", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "yearly" as const },
    { url: "/us", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/ca", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/au", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/sg", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/uk", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const staticEntries = pages.map((p) => ({
    url: `${base}${p.url}`,
    lastModified: buildDate,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const blogEntries = articles.map((a) => ({
    url: `${base}/blog/${a.slug}`,
    lastModified: new Date(a.publishedAt),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
