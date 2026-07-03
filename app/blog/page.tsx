import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "./data";

export const metadata: Metadata = {
  title: "Accounting Insights",
  description:
    "Practical guides on bookkeeping, tax filing, payroll, and compliance for small businesses in the US, Canada, and Australia.",
  alternates: { canonical: "https://booksnb.com/blog" },
};

export default function BlogPage() {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">Accounting Insights</h1>
      <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
        Practical guides on bookkeeping, tax, and payroll — written by the accountants who do this work every day.
      </p>

      <div className="space-y-6">
        {sorted.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="block bg-card border border-border rounded-lg p-6 shadow-sm hover:border-brand-forest transition-colors group"
          >
            <div className="flex flex-wrap gap-2 mb-3">
              {article.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono text-muted-foreground border border-border rounded px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-xl font-bold mb-2 group-hover:text-brand-forest transition-colors">
              {article.title}
            </h2>
            <p className="text-sm text-muted-foreground mb-4">{article.excerpt}</p>
            <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
              <time dateTime={article.publishedAt}>
                {new Date(article.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>·</span>
              <span>{article.readingMinutes} min read</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
