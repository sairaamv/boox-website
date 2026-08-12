import { MetadataRoute } from "next";
import { execSync } from "node:child_process";
import { articles } from "./blog/data";

const base = "https://booksnb.com";

function lastGitCommitDate(file: string): Date {
  try {
    const iso = execSync(`git log -1 --format=%aI -- "${file}"`, {
      cwd: process.cwd(),
      encoding: "utf8",
    }).trim();
    if (iso) return new Date(iso);
  } catch {
    // git unavailable at build time — fall through
  }
  return new Date();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: "/", file: "app/page.tsx", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/services", file: "app/services/page.tsx", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/pricing", file: "app/pricing/page.tsx", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/about", file: "app/about/page.tsx", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/contact", file: "app/contact/page.tsx", priority: 0.8, changeFrequency: "yearly" as const },
    { url: "/us", file: "app/us/page.tsx", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/ca", file: "app/ca/page.tsx", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/au", file: "app/au/page.tsx", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/sg", file: "app/sg/page.tsx", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/uk", file: "app/uk/page.tsx", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/blog", file: "app/blog/page.tsx", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/privacy", file: "app/privacy/page.tsx", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/terms", file: "app/terms/page.tsx", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const staticEntries = pages.map((p) => ({
    url: `${base}${p.url}`,
    lastModified: lastGitCommitDate(p.file),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const blogEntries = articles.map((a) => ({
    url: `${base}/blog/${a.slug}`,
    lastModified: new Date(a.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
